// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// JSON helpers for MCP tool activity output.

import { logger } from "../../boundaries/onboarding-commons-externals.facade";
import type { McpContentBlock } from "./mcp-tool-activity-types";

export function stringifyJson(value: unknown, space?: number): string {
  try {
    return (
      JSON.stringify(
        value,
        (_key, nestedValue) =>
          typeof nestedValue === "bigint"
            ? nestedValue.toString()
            : nestedValue,
        space,
      ) ?? "null"
    );
  } catch {
    logger.debug("Failed to stringify MCP tool call payload", {
      safe: { value },
      sensitive: {},
    });
    return "";
  }
}

export function extractSingleJsonTextBlock(
  content: McpContentBlock[] | null,
): string | null {
  if (content == null || content.length !== 1) return null;
  const [block] = content;
  if (block.type !== "text" || block.annotations != null) return null;
  const text = (block.text ?? "").trim();
  if (text[0] !== "{" && text[0] !== "[") return null;
  try {
    return stringifyJson(JSON.parse(text), 2);
  } catch {
    return null;
  }
}
