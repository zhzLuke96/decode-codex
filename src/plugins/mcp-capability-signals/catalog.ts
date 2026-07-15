// Restored from ref/webview/assets/mcp-capability-signals-Ef9PGr3z.js
// MCP capability catalog fetching and metadata extraction.
import { useHostConfigBt as callHostCommand } from "../../boundaries/use-host-config.facade";
import {
  mcpCatalogToolsSchema,
  mcpConnectorMetadataSchema,
  mcpMentionSearchCapabilitiesSchema,
  mcpServerIconSchema,
  mcpToolAppVisibilityMetadataSchema,
  mcpToolUiEntrypointsSchema,
} from "./schemas";
import type {
  HostId,
  McpAppEntrypoint,
  McpCapabilityCatalogServer,
  McpCapabilityMentionServer,
  McpFileAppEntrypoint,
  McpServerIcon,
  McpServerIconUrls,
  McpServerInfo,
  McpServerStatus,
  McpServerStatusPage,
  McpToolDefinition,
  McpToolUiEntrypoint,
  SafeParseResult,
  ZodLikeSchema,
} from "./types";
const MCP_SERVER_STATUS_PAGE_SIZE = 100;
const TOOL_UI_RESOURCE_URI_META_KEY = "ui/resourceUri";
const serverIconSchema = mcpServerIconSchema as ZodLikeSchema<McpServerIcon>;
const catalogToolsSchema = mcpCatalogToolsSchema as ZodLikeSchema<
  McpToolDefinition[]
>;
const toolUiEntrypointsSchema = mcpToolUiEntrypointsSchema as ZodLikeSchema<
  | {
      entrypoints?: McpToolUiEntrypoint[];
    }
  | undefined
>;
const mentionSearchCapabilitiesSchema =
  mcpMentionSearchCapabilitiesSchema as ZodLikeSchema<
    | {
        "mentions/search"?: unknown;
      }
    | undefined
  >;
const connectorMetadataSchema = mcpConnectorMetadataSchema as ZodLikeSchema<
  | {
      connector_name?: string;
    }
  | undefined
>;
const toolAppVisibilityMetadataSchema =
  mcpToolAppVisibilityMetadataSchema as ZodLikeSchema<{
    visibility?: Array<"app" | "model">;
  }>;
export function getMcpServerIconUrls(
  serverInfo: McpServerInfo | null | undefined,
): McpServerIconUrls | null {
  const icons = (serverInfo?.icons ?? []).flatMap((rawIcon) => {
    const parsedIcon = serverIconSchema.safeParse(rawIcon);
    if (!parsedIcon.success || parsedIcon.data.src.trim().length === 0) {
      return [];
    }
    return [
      {
        ...parsedIcon.data,
        src: parsedIcon.data.src.trim(),
      },
    ];
  });
  const neutralIcon = selectBestIconUrl(
    icons.filter((icon) => icon.theme == null),
  );
  const lightIcon =
    selectBestIconUrl(icons.filter((icon) => icon.theme === "light")) ??
    neutralIcon;
  const darkIcon =
    selectBestIconUrl(icons.filter((icon) => icon.theme === "dark")) ??
    neutralIcon;
  const logoUrl = lightIcon ?? darkIcon;
  const logoDarkUrl = darkIcon ?? lightIcon;
  if (logoUrl == null || logoDarkUrl == null) {
    return null;
  }
  return {
    logoDarkUrl,
    logoUrl,
  };
}
function selectBestIconUrl(icons: McpServerIcon[]): string | null {
  let bestIconUrl: string | null = null;
  let bestIconScore = 0;
  for (const icon of icons) {
    const iconScore = getIconSizeScore(icon);
    if (bestIconUrl == null || iconScore > bestIconScore) {
      bestIconUrl = icon.src;
      bestIconScore = iconScore;
    }
  }
  return bestIconUrl;
}
function getIconSizeScore(icon: McpServerIcon): number {
  if (
    icon.sizes == null ||
    icon.sizes.some((size) => size.trim().toLowerCase() === "any")
  ) {
    return Number.POSITIVE_INFINITY;
  }
  return icon.sizes.reduce((bestScore, size) => {
    const match = /^(\d+)x(\d+)$/u.exec(size.trim());
    if (match == null) {
      return bestScore;
    }
    return Math.max(bestScore, Number(match[1]) * Number(match[2]));
  }, 0);
}
export async function listCapabilityMentionServers(
  hostId: HostId,
): Promise<McpCapabilityMentionServer[]> {
  const serverStatuses = await listMcpServerStatus(hostId);
  return serverStatuses.flatMap(({ name, serverInfo, tools }) =>
    parseCatalogTools(tools)
      .filter(hasMentionSearchCapability)
      .map((tool) => ({
        mentionSearchTool: tool.name,
        server: name,
        title: resolveMentionSearchTitle(tool, serverInfo, name),
      })),
  );
}
export async function listCapabilityCatalog(
  hostId: HostId,
): Promise<McpCapabilityCatalogServer[]> {
  const serverStatuses = await listMcpServerStatus(hostId);
  return serverStatuses.map(({ name, serverInfo, tools }) => ({
    hostId,
    icon: getMcpServerIconUrls(serverInfo),
    server: name,
    tools: parseCatalogTools(tools),
  }));
}
export function buildMcpAppEntrypoints(
  catalogServers: McpCapabilityCatalogServer[],
): McpAppEntrypoint[] {
  return catalogServers.flatMap(({ hostId, icon, server, tools }) =>
    tools.flatMap((tool) =>
      buildToolAppEntrypoints(hostId, icon, server, tool, tools),
    ),
  );
}
export function buildFileMcpAppEntrypoints(
  catalogServers: McpCapabilityCatalogServer[],
): McpFileAppEntrypoint[] {
  return catalogServers.flatMap(({ hostId, icon, server, tools }) =>
    tools.flatMap((tool) => {
      const extensions = getToolUiEntrypoints(tool).flatMap((entrypoint) =>
        entrypoint.type === "file" ? entrypoint.extensions : [],
      );
      const resourceUri = tryGetToolUiResourceUri(tool);
      if (
        extensions.length === 0 ||
        resourceUri == null ||
        !isToolVisibleToApp(tool)
      ) {
        return [];
      }
      return [
        {
          extensions,
          hostId,
          icon,
          resourceUri,
          server,
          serverTools: tools,
          title: getToolDisplayTitle(tool),
          tool,
        },
      ];
    }),
  );
}
function buildToolAppEntrypoints(
  hostId: HostId,
  icon: McpServerIconUrls | null,
  server: string,
  tool: McpToolDefinition,
  serverTools: McpToolDefinition[],
): McpAppEntrypoint[] {
  const resourceUri = tryGetToolUiResourceUri(tool);
  if (resourceUri == null || !isToolVisibleToApp(tool)) {
    return [];
  }
  const title = getToolDisplayTitle(tool);
  return getToolUiEntrypoints(tool).flatMap((entrypoint) => {
    switch (entrypoint.type) {
      case "global":
      case "thread":
        return [
          {
            entrypoint: entrypoint.type,
            hostId,
            icon,
            resourceUri,
            server,
            serverTools,
            title,
            tool,
          },
        ];
      case "file":
        return [];
    }
  });
}
function getToolUiEntrypoints(tool: McpToolDefinition): McpToolUiEntrypoint[] {
  const parsedEntrypoints = toolUiEntrypointsSchema.safeParse(
    tool._meta?.["openai/ui"],
  );
  return parsedEntrypoints.success
    ? (parsedEntrypoints.data?.entrypoints ?? [])
    : [];
}
function getToolDisplayTitle(tool: McpToolDefinition): string {
  return tool.title ?? tool.annotations?.title ?? tool.name;
}
function tryGetToolUiResourceUri(tool: McpToolDefinition): string | undefined {
  try {
    return getToolUiResourceUri(tool);
  } catch {
    return undefined;
  }
}
function getToolUiResourceUri(tool: McpToolDefinition): string | undefined {
  let resourceUri = tool._meta?.ui?.resourceUri;
  if (resourceUri === undefined) {
    resourceUri = tool._meta?.[TOOL_UI_RESOURCE_URI_META_KEY];
  }
  if (typeof resourceUri === "string" && resourceUri.startsWith("ui://")) {
    return resourceUri;
  }
  if (resourceUri !== undefined) {
    throw Error(`Invalid UI resource URI: ${JSON.stringify(resourceUri)}`);
  }
  return undefined;
}
function hasMentionSearchCapability(tool: McpToolDefinition): boolean {
  const capabilities = mentionSearchCapabilitiesSchema.safeParse(
    tool._meta?.["openai/capabilities"],
  );
  return capabilities.success && capabilities.data?.["mentions/search"] != null;
}
function resolveMentionSearchTitle(
  tool: McpToolDefinition,
  serverInfo: McpServerInfo | null | undefined,
  serverName: string,
): string {
  const connectorMetadata = connectorMetadataSchema.safeParse(tool._meta);
  return (
    (connectorMetadata.success
      ? connectorMetadata.data?.connector_name
      : undefined) ??
    serverInfo?.title ??
    serverInfo?.name ??
    serverName
  );
}
function isToolVisibleToApp(tool: McpToolDefinition): boolean {
  const visibilityMetadata = toolAppVisibilityMetadataSchema.safeParse(
    tool._meta?.ui,
  );
  return (
    visibilityMetadata.success &&
    visibilityMetadata.data.visibility?.includes("app") === true
  );
}
function parseCatalogTools(
  tools: Record<string, unknown>,
): McpToolDefinition[] {
  return catalogToolsSchema.parse(Object.values(tools));
}
async function listMcpServerStatus(
  hostId: HostId,
  cursor: string | null = null,
): Promise<McpServerStatus[]> {
  const page = (await callHostCommand("list-mcp-server-status", {
    cursor,
    detail: "toolsAndAuthOnly",
    hostId,
    limit: MCP_SERVER_STATUS_PAGE_SIZE,
  })) as McpServerStatusPage;
  if (page.nextCursor == null) {
    return page.data;
  }
  return [
    ...page.data,
    ...(await listMcpServerStatus(hostId, page.nextCursor)),
  ];
}
