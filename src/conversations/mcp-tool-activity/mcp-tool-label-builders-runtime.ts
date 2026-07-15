// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Generic MCP display-label builders used by app-specific fallback paths.
import type {
  McpToolLabelBuilder,
  McpToolLabelBuilderInput,
} from "./mcp-tool-label-types";

export const getComputerUseMcpToolLabel: McpToolLabelBuilder =
  genericMcpToolLabel;
export const getFigmaMcpToolLabel: McpToolLabelBuilder = genericMcpToolLabel;
export const getGithubMcpToolLabel: McpToolLabelBuilder = genericMcpToolLabel;
export const getGmailMcpToolLabel: McpToolLabelBuilder = genericMcpToolLabel;
export const getGoogleCalendarMcpToolLabel: McpToolLabelBuilder =
  genericMcpToolLabel;
export const getGoogleDriveMcpToolLabel: McpToolLabelBuilder =
  genericMcpToolLabel;
export const getLinearMcpToolLabel: McpToolLabelBuilder = genericMcpToolLabel;

const previewKeys = [
  "title",
  "name",
  "query",
  "message",
  "subject",
  "text",
  "url",
  "path",
  "file",
  "filename",
  "fileName",
  "repository",
  "repo",
  "recipient",
  "email",
] as const;

function genericMcpToolLabel({
  fallbackLabel,
  intl,
  toolArguments,
}: McpToolLabelBuilderInput): string | null {
  const preview = buildShortPreview(extractPreviewValue(toolArguments));
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.generic.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description:
            "Generic MCP tool label with a short preview from tool arguments.",
        },
        { label: fallbackLabel, preview },
      );
}

function extractPreviewValue(value: unknown): string | null {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  const record = asRecord(value);
  if (record == null) return null;
  for (const key of previewKeys) {
    const preview = record[key];
    if (typeof preview === "string" || typeof preview === "number") {
      return String(preview);
    }
  }
  return null;
}

function buildShortPreview(value: string | null): string | null {
  if (value == null) return null;
  const normalized = value.trim().replace(/\s+/g, " ");
  if (normalized.length === 0) return null;
  return normalized.length <= 48 ? normalized : `${normalized.slice(0, 47)}...`;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value != null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}
