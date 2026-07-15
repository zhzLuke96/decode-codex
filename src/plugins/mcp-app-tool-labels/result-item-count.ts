// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Counts the number of items returned in an MCP tool result's structured content.

const DEFAULT_COUNT_KEYS = ["count", "total", "total_count", "totalCount"];

interface ToolResultLike {
  type?: string;
  structuredContent?: unknown;
  raw?: unknown;
}

export function countToolResultItems({
  countKeys = [],
  preferredKeys,
  toolResult,
}: {
  countKeys?: string[];
  preferredKeys: string[];
  toolResult: unknown;
}): number | null {
  const structuredContent = extractStructuredContent(toolResult);
  if (structuredContent == null) return null;
  return countStructuredItems({
    countKeys: [...countKeys, ...DEFAULT_COUNT_KEYS],
    preferredKeys,
    structuredContent,
  });
}

function extractStructuredContent(toolResult: unknown): unknown {
  if (typeof toolResult !== "object" || !toolResult) return null;
  const result = toolResult as ToolResultLike;
  return result.type === "success"
    ? (result.structuredContent ?? extractRawStructuredContent(result.raw))
    : null;
}

function extractRawStructuredContent(raw: unknown): unknown {
  if (typeof raw !== "object" || !raw) return null;
  return (raw as { structuredContent?: unknown }).structuredContent ?? null;
}

function countStructuredItems({
  countKeys,
  preferredKeys,
  structuredContent,
}: {
  countKeys: string[];
  preferredKeys: string[];
  structuredContent: unknown;
}): number | null {
  if (Array.isArray(structuredContent)) return structuredContent.length;
  if (typeof structuredContent !== "object" || !structuredContent) return null;
  const record = structuredContent as Record<string, unknown>;
  for (const key of preferredKeys) {
    const value = record[key];
    if (Array.isArray(value)) return value.length;
  }
  for (const key of countKeys) {
    const value = record[key];
    if (typeof value === "number" && Number.isInteger(value) && value >= 0)
      return value;
  }
  const arrayValues = Object.values(record).filter(
    Array.isArray,
  ) as unknown[][];
  return arrayValues.length === 1 ? arrayValues[0].length : null;
}
