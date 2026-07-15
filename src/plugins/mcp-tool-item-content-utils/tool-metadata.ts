// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
import { toolMetaSchema, toolResultMetaSchema } from "./schemas";
import type { McpServerStatuses, ToolResultLike } from "./types";
function getToolMeta({
  mcpServerStatuses,
  server,
  tool,
}: {
  mcpServerStatuses?: McpServerStatuses | null;
  server: string;
  tool: string;
}) {
  if (mcpServerStatuses == null) return;
  const serverStatus = mcpServerStatuses.data.find(
    (item) => item.name === server,
  );
  return (
    serverStatus?.tools?.[tool]?._meta ??
    Object.values(serverStatus?.tools ?? {}).find((item) => item?.name === tool)
      ?._meta ??
    null
  );
}
function parseResourceUri(meta: unknown) {
  if (meta == null) return null;
  const parsedMeta = toolMetaSchema.safeParse(meta);
  return parsedMeta.success
    ? (parsedMeta.data.ui?.resourceUri ??
        parsedMeta.data["ui/resourceUri"] ??
        parsedMeta.data["openai/outputTemplate"] ??
        null)
    : null;
}
function parseConnectorId(meta: unknown) {
  if (meta == null) return null;
  const parsedMeta = toolMetaSchema.safeParse(meta);
  if (!parsedMeta.success) return null;
  const connectorId =
    parsedMeta.data.connectorId ?? parsedMeta.data.connector_id;
  if (connectorId == null) return null;
  const trimmedConnectorId = connectorId.trim();
  return trimmedConnectorId.length === 0 ? null : trimmedConnectorId;
}
function parseToolResultMeta({ toolResult }: { toolResult: ToolResultLike }) {
  const parsedMeta = toolResultMetaSchema.safeParse(toolResult._meta);
  return parsedMeta.success ? parsedMeta.data : null;
}
function getToolResultResourceUri({
  mcpServerStatuses,
  server,
  tool,
  toolResult,
}: {
  mcpServerStatuses?: McpServerStatuses | null;
  server: string;
  tool: string;
  toolResult?: ToolResultLike | null;
}) {
  const serverResourceUri = parseResourceUri(
    getToolMeta({
      mcpServerStatuses,
      server,
      tool,
    }),
  );
  if (serverResourceUri != null)
    return {
      resourceUri: serverResourceUri,
    };
  const resultResourceUri = parseResourceUri(toolResult?._meta);
  return resultResourceUri == null
    ? null
    : {
        resourceUri: resultResourceUri,
      };
}
function getToolResultConnectorId(toolResult?: ToolResultLike | null) {
  return parseConnectorId(toolResult?._meta);
}
function getToolConnectorId({
  mcpServerStatuses,
  server,
  tool,
}: {
  mcpServerStatuses?: McpServerStatuses | null;
  server: string;
  tool: string;
}) {
  const meta = getToolMeta({
    mcpServerStatuses,
    server,
    tool,
  });
  if (meta !== undefined) return parseConnectorId(meta);
}
export {
  getToolConnectorId,
  getToolResultConnectorId,
  getToolResultResourceUri,
  parseToolResultMeta,
};
