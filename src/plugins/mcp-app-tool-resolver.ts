// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// MCP app tool scoping helpers. Codex app widgets are scoped to the connector
// that produced the widget, while regular MCP servers can expose all tools.
import { isCodexAppsServer } from "./codex-apps-server";
import { getToolResultConnectorId } from "./mcp-tool-item-content-utils";

type McpToolLike = {
  name?: string;
  title?: string;
  _meta?: unknown;
};

type McpAppScopeLike = {
  originTool?: string | null;
};

function getToolConnectorId(tool: unknown): string | null {
  return getToolResultConnectorId(tool as { _meta?: unknown } | null);
}

function findToolByNameOrTitle(
  server: string,
  toolName: string,
  tools: unknown[] | undefined,
): McpToolLike | null {
  const toolList = tools ?? [];
  const byName =
    (toolList.find((tool) => (tool as McpToolLike | null)?.name === toolName) as
      | McpToolLike
      | undefined) ?? null;
  if (byName != null || !isCodexAppsServer(server)) return byName;
  return (
    (toolList.find((tool) => (tool as McpToolLike | null)?.title === toolName) as
      | McpToolLike
      | undefined) ?? null
  );
}

function assertToolWithinConnectorScope({
  connectorId,
  server,
  tool,
  toolName,
}: {
  connectorId?: string | null;
  server: string;
  tool: McpToolLike | null;
  toolName: string;
}): void {
  if (!isCodexAppsServer(server)) return;
  const toolConnectorId = getToolConnectorId(tool);
  if (connectorId == null || toolConnectorId == null || toolConnectorId !== connectorId) {
    throw Error(`MCP app cannot call tool outside its connector scope: ${toolName}`);
  }
}

function hasFileParams(tool: unknown): boolean {
  const meta = (tool as McpToolLike | null)?._meta;
  return (
    typeof meta === "object" &&
    meta != null &&
    Object.prototype.hasOwnProperty.call(meta, "openai/fileParams")
  );
}

export function resolveMcpConnectorId({
  mcpAppScope,
  server,
  tool,
  tools,
}: {
  mcpAppScope?: McpAppScopeLike | null;
  server: string;
  tool?: unknown;
  tools?: unknown[];
  mcpServerStatuses?: unknown;
}): string | null {
  if (!isCodexAppsServer(server)) return null;
  if (tool != null) return getToolConnectorId(tool);
  const originTool = mcpAppScope?.originTool;
  if (originTool == null) return null;
  return getToolConnectorId(
    (tools ?? []).find((candidate) => (candidate as McpToolLike | null)?.name === originTool) ??
      null,
  );
}

export function findMcpTool({
  connectorId,
  server,
  toolName,
  tools,
}: {
  connectorId?: string | null;
  server: string;
  toolName: string;
  tools?: unknown[];
}): { name: string; tool: McpToolLike | null } {
  const tool = findToolByNameOrTitle(server, toolName, tools);
  assertToolWithinConnectorScope({ connectorId, server, tool, toolName });
  if (hasFileParams(tool)) {
    throw Error(
      `MCP app cannot call tools that accept file parameters: ${tool?.name ?? toolName}`,
    );
  }
  return { name: tool?.name ?? toolName, tool };
}

export function buildMcpToolList({
  connectorId,
  server,
  tools,
}: {
  connectorId?: string | null;
  server: string;
  tools?: unknown[];
}): unknown[] {
  if (!isCodexAppsServer(server)) return (tools ?? []).filter((tool) => !hasFileParams(tool));
  if (connectorId == null) {
    throw Error("MCP app requests require a trusted connector scope");
  }
  return (tools ?? []).filter(
    (tool) => getToolConnectorId(tool) === connectorId && !hasFileParams(tool),
  );
}

export function resolveMcpSandboxOriginScope({
  connectorId,
  instanceFallbackId,
  server,
}: {
  connectorId?: string | null;
  instanceFallbackId: string;
  server: string;
}):
  | { connectorId?: string | null; instanceFallbackId: string; kind: "codex_app" }
  | { kind: "mcp_server"; server: string } {
  return isCodexAppsServer(server)
    ? { connectorId, instanceFallbackId, kind: "codex_app" }
    : { kind: "mcp_server", server };
}
