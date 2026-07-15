// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host-side proxy for the MCP requests an app sandbox makes: looking up server
// status, resolving the concrete tool behind a connector alias, invoking tools
// and reading resources, all via the host bridge.

import {
  findMcpTool,
  isCodexAppsServer,
  resolveMcpConnectorId,
  sendHostRequest,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  createMcpAppError,
  isPlainRecord,
  normalizeMcpAppError,
  runMcpAppHandler,
  MCP_APP_DEFAULT_ERROR_CODE,
} from "./mcp-app-errors";

export interface McpServerStatus {
  name: string;
  tools: Record<string, unknown>;
}

export interface McpToolCallParams {
  name: string;
  arguments?: Record<string, unknown>;
  _meta?: Record<string, unknown>;
}

export function collectMcpServerTools(status: McpServerStatus): unknown[] {
  return Object.values(status.tools).filter((tool) => tool != null);
}

export async function fetchMcpServerStatus({
  hostId,
  mcpServerStatuses,
  server,
}: {
  hostId: string;
  mcpServerStatuses?: { data: McpServerStatus[] } | null;
  server: string;
}): Promise<McpServerStatus> {
  const fromCache =
    mcpServerStatuses?.data.find(({ name }) => name === server) ?? null;
  if (fromCache != null) return fromCache;
  const fromHost =
    (
      await sendHostRequest("list-mcp-server-status", {
        params: {
          hostId,
          cursor: null,
          limit: 100,
        },
      })
    ).data.find(({ name }: McpServerStatus) => name === server) ?? null;
  if (fromHost == null)
    throw createMcpAppError(
      `MCP server not found: ${server}`,
      MCP_APP_DEFAULT_ERROR_CODE,
    );
  return fromHost;
}

export async function resolveMcpAppTool({
  hostId,
  mcpAppScope,
  mcpServerStatuses,
  server,
  toolName,
}: {
  hostId: string;
  mcpAppScope: unknown;
  mcpServerStatuses?: { data: McpServerStatus[] } | null;
  server: string;
  toolName: string;
}) {
  const serverStatus =
    mcpServerStatuses?.data.find(({ name }) => name === server) ??
    (await fetchMcpServerStatus({ hostId, server }));
  const tools = collectMcpServerTools(serverStatus);
  const connectorId = resolveMcpConnectorId({ mcpAppScope, server, tools });
  return {
    ...runMcpAppHandler(() =>
      findMcpTool({ connectorId, server, toolName, tools }),
    ),
    serverStatus,
  };
}

function stripCodexConnectorMeta(
  server: string,
  meta: Record<string, unknown> | undefined,
): Record<string, unknown> | undefined {
  if (!isCodexAppsServer(server) || !isPlainRecord(meta)) return meta;
  const stripped = { ...meta };
  delete stripped.connector_id;
  delete stripped.connector_name;
  delete stripped.connector_display_name;
  delete stripped.connector_description;
  delete stripped._codex_apps;
  return stripped;
}

export async function callMcpAppTool({
  conversationId,
  hostId,
  mcpAppScope,
  mcpServerStatuses,
  server,
  toolCallParams,
}: {
  conversationId: string;
  hostId: string;
  mcpAppScope: unknown;
  mcpServerStatuses?: { data: McpServerStatus[] } | null;
  server: string;
  toolCallParams: McpToolCallParams;
}) {
  const tool = await resolveMcpAppTool({
    hostId,
    mcpAppScope,
    mcpServerStatuses,
    server,
    toolName: toolCallParams.name,
  });
  const meta = stripCodexConnectorMeta(server, toolCallParams._meta);
  try {
    return await sendHostRequest("call-mcp-tool", {
      params: {
        hostId,
        threadId: conversationId,
        server,
        tool: tool.name,
        arguments: toolCallParams.arguments ?? {},
        _meta: meta,
      },
    });
  } catch (error) {
    throw normalizeMcpAppError(error, "MCP tool call failed");
  }
}

async function isThreadLoaded(
  hostId: string,
  threadId: string,
): Promise<boolean> {
  try {
    const { thread } = await sendHostRequest("send-cli-request-for-host", {
      params: {
        hostId,
        method: "thread/read",
        params: {
          includeTurns: false,
          threadId,
        },
      },
    });
    return thread.status.type !== "notLoaded";
  } catch {
    return false;
  }
}

export async function readMcpAppResource({
  hostId,
  server,
  threadId,
  uri,
}: {
  hostId: string;
  server: string;
  threadId: string;
  uri: string;
}) {
  try {
    return await sendHostRequest("read-mcp-resource", {
      params: {
        hostId,
        threadId,
        server,
        uri,
      },
    });
  } catch (error) {
    if (await isThreadLoaded(hostId, threadId)) throw error;
    return sendHostRequest("read-mcp-resource", {
      params: { hostId, server, uri },
    });
  }
}
