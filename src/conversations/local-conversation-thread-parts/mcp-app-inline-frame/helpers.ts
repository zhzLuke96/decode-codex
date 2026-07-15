// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small predicates and labels shared by inline MCP app frame components.

import { toSentenceCase } from "../../../boundaries/onboarding-commons-externals.facade";
import type { ConversationTimelineItem, McpToolCallItem } from "./types";

export function isMcpToolCallItem(
  item: ConversationTimelineItem,
): item is McpToolCallItem {
  return item.type === "mcp-tool-call";
}

export function createMcpAppInstanceId(): string {
  return crypto.randomUUID();
}

export function formatMcpServerLabel(server: string): string {
  const trimmed = server.trim();
  if (trimmed.length === 0) return "MCP";
  const label = toSentenceCase(trimmed);
  return label.toUpperCase().endsWith(" MCP") ? label : `${label} MCP`;
}
