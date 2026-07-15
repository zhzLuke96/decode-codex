// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds Notion MCP tool activity labels with short text previews extracted from
// the tool arguments (page titles, queries, etc.).
import {
  zodArray,
  zodJson,
  zodObject,
  zodString,
} from "../../boundaries/src-l0hb-mz-p";
import type { IntlShape } from "../../vendor/react-intl";
import type {
  McpMatchingApp,
  McpToolLabelBuilderInput,
} from "./mcp-tool-label-types";

const NOTION_APP_KEYWORD = "notion";
const NOTION_PREVIEW_MAX_LENGTH = 40;
const NOTION_QUERY_TOOL_KEYS = new Set([
  "query_data_sources",
  "query_meeting_notes",
  "search",
]);

const notionToolArgumentsSchema = zodObject({
  id: zodString().trim().min(1).max(500).optional().catch(undefined),
  name: zodString().trim().min(1).max(200).optional().catch(undefined),
  query: zodString().trim().min(1).max(500).optional().catch(undefined),
  title: zodString().trim().min(1).max(200).optional().catch(undefined),
  pages: zodArray(zodJson()).optional().catch(undefined),
}).passthrough();

export function isNotionApp(app: McpMatchingApp | null | undefined): boolean {
  return app == null
    ? false
    : [app.name, app.id, ...(app.pluginDisplayNames ?? [])].some((candidate) =>
        candidate.trim().toLowerCase().includes(NOTION_APP_KEYWORD),
      );
}

export function getNotionMcpToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolKey,
}: McpToolLabelBuilderInput): string | null {
  if (!isNotionApp(matchingApp)) return null;
  const parsed = notionToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const { id, name, pages, query, title } = parsed.data;

  if (toolKey === "create_database")
    return formatNotionLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: title,
    });
  if (toolKey === "fetch")
    return formatNotionLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: extractNotionTitleFromIdOrUrl(id),
    });
  if (toolKey === "update_page")
    return formatNotionLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: title ?? name,
    });
  if (toolKey === "create_pages")
    return (
      formatNotionLabelWithPreview({
        intl,
        label: fallbackLabel,
        value: extractNotionPagesTitle(pages),
      }) ?? formatNotionCreatePagesLabel({ completed, intl, pages })
    );
  if (toolKey === "create_view" || toolKey === "update_view")
    return formatNotionLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: name ?? title,
    });
  if (NOTION_QUERY_TOOL_KEYS.has(toolKey))
    return formatNotionLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: query,
    });
  return null;
}

function formatNotionLabelWithPreview({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = buildNotionPreview(value);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.notion.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Notion MCP label with a short text preview.",
        },
        { label, preview },
      );
}

function formatNotionCreatePagesLabel({
  completed,
  intl,
  pages,
}: {
  completed: boolean;
  intl: IntlShape;
  pages: unknown[] | null | undefined;
}): string | null {
  if (pages == null || pages.length === 0) return null;
  return completed
    ? intl.formatMessage(
        {
          id: "codex.mcpTool.notion.createdPagesCount",
          defaultMessage:
            "Created {count, plural, one {a page} other {{count, number} pages}}",
          description: "Completed Notion label for creating one or more pages.",
        },
        { count: pages.length },
      )
    : intl.formatMessage(
        {
          id: "codex.mcpTool.notion.creatingPagesCount",
          defaultMessage:
            "Creating {count, plural, one {a page} other {{count, number} pages}}",
          description: "Active Notion label for creating one or more pages.",
        },
        { count: pages.length },
      );
}

function buildNotionPreview(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length === 0 || isNotionOpaqueId(normalized)) return null;
  return normalized.length <= NOTION_PREVIEW_MAX_LENGTH
    ? normalized
    : `${normalized.slice(0, NOTION_PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
}

function extractNotionTitleFromIdOrUrl(
  value: string | null | undefined,
): string | undefined {
  if (value == null) return;
  const trimmed = value.trim();
  if (trimmed.length === 0 || isNotionOpaqueId(trimmed)) return;
  if (!/^https?:\/\//i.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    const lastSegment = decodeURIComponent(
      url.pathname
        .split("/")
        .filter((segment) => segment.length > 0)
        .pop() ?? "",
    )
      .replace(/[-_][0-9a-f]{8,}$/i, "")
      .replace(/[-_]+/g, " ")
      .trim();
    return lastSegment.length > 0 ? lastSegment : undefined;
  } catch {
    return;
  }
}

function extractNotionPagesTitle(
  pages: unknown[] | null | undefined,
): string | undefined {
  if (pages == null || pages.length === 0) return;
  for (const page of pages) {
    const title = extractNotionPageEntryTitle(page);
    if (title != null) return title;
  }
}

function extractNotionPageEntryTitle(page: unknown): string | undefined {
  if (typeof page !== "object" || !page) return;
  const entry = page as Record<string, unknown>;
  for (const candidate of [entry.title, entry.name])
    if (typeof candidate === "string" && candidate.trim().length > 0)
      return candidate;

  const properties = entry.properties;
  if (typeof properties !== "object" || !properties) return;
  const propertyMap = properties as Record<string, unknown>;
  for (const propertyName of ["Name", "Title", "name", "title"]) {
    const property = propertyMap[propertyName];
    if (typeof property !== "object" || !property) continue;
    const richText =
      (property as Record<string, unknown>).title ??
      (property as Record<string, unknown>).rich_text;
    if (!Array.isArray(richText)) continue;
    const text = richText
      .map((node) => {
        if (typeof node !== "object" || !node) return "";
        const richNode = node as Record<string, unknown>;
        if (typeof richNode.plain_text === "string") return richNode.plain_text;
        const textNode = richNode.text;
        if (typeof textNode === "object" && textNode) {
          const content = (textNode as Record<string, unknown>).content;
          if (typeof content === "string") return content;
        }
        return "";
      })
      .join("")
      .trim();
    if (text.length > 0) return text;
  }
}

function isNotionOpaqueId(value: string): boolean {
  return (
    /^collection:\/\/[0-9a-f-]+$/i.test(value) ||
    /^[0-9a-f]{32}$/i.test(value) ||
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
  );
}
