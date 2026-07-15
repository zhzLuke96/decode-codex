// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// MCP app-resource resolution helpers for persistent app frames and plugin icons.
export interface ResolveMcpAppForToolResultInput {
  mcpServerStatuses: unknown;
  server?: string | null;
  tool?: string | null;
  toolResult?: unknown;
}

export interface ResolvedMcpAppForToolResult {
  resourceUri: string;
}

export function resolveMcpAppForToolResult({
  mcpServerStatuses,
  server,
  tool,
  toolResult,
}: ResolveMcpAppForToolResultInput): ResolvedMcpAppForToolResult | null {
  const serverToolResourceUri = extractResourceUri(
    findMcpToolMeta({ mcpServerStatuses, server, tool }),
  );
  if (serverToolResourceUri != null) {
    return { resourceUri: serverToolResourceUri };
  }

  const resultResourceUri = extractResourceUri(asRecord(toolResult)?._meta);
  return resultResourceUri == null ? null : { resourceUri: resultResourceUri };
}

export function getMcpAppAltText(entry: unknown): string {
  const record = asRecord(entry);
  const plugin = asRecord(record?.plugin);
  const pluginDisplayNames = record?.pluginDisplayNames;
  return (
    stringValue(record?.displayName) ??
    stringValue(record?.name) ??
    stringValue(plugin?.displayName) ??
    stringValue(plugin?.name) ??
    stringValue(plugin?.title) ??
    (Array.isArray(pluginDisplayNames)
      ? pluginDisplayNames.filter(isNonEmptyString).join(", ")
      : null) ??
    stringValue(plugin?.id) ??
    "MCP app"
  );
}

function findMcpToolMeta({
  mcpServerStatuses,
  server,
  tool,
}: {
  mcpServerStatuses: unknown;
  server?: string | null;
  tool?: string | null;
}): unknown {
  if (server == null || tool == null) return null;
  const statuses = asRecord(mcpServerStatuses);
  const data = statuses?.data;
  if (!Array.isArray(data)) return null;
  const serverStatus = data.find((entry) => asRecord(entry)?.name === server);
  const tools = asRecord(asRecord(serverStatus)?.tools);
  const directTool = asRecord(tools?.[tool]);
  if (directTool?._meta != null) return directTool._meta;
  for (const toolDefinition of Object.values(tools ?? {})) {
    const toolRecord = asRecord(toolDefinition);
    if (toolRecord?.name === tool) return toolRecord._meta ?? null;
  }
  return null;
}

function extractResourceUri(meta: unknown): string | null {
  const record = asRecord(meta);
  if (record == null) return null;
  const ui = asRecord(record.ui);
  return (
    stringValue(ui?.resourceUri) ??
    stringValue(record["ui/resourceUri"]) ??
    stringValue(record["openai/outputTemplate"]) ??
    null
  );
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value != null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function stringValue(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
