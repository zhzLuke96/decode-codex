// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
import { mergeWidgetCsp } from "./csp";
import { toolContentSchema } from "./schemas";
import type {
  DilRenderData,
  HtmlRenderData,
  McpRenderData,
  ToolResultLike,
} from "./types";
const MCP_WIDGET_MIME_TYPES = new Set([
  "text/html",
  "text/html;profile=mcp-app",
]);
function selectMcpAppRenderTarget({
  isDilEnabled,
  renderData,
  resourceUri,
  shouldRenderMcpApp,
}: {
  isDilEnabled: boolean;
  renderData: McpRenderData;
  resourceUri?: string | null;
  shouldRenderMcpApp: boolean;
}) {
  return shouldRenderMcpApp
    ? renderData?.kind === "dil"
      ? !isDilEnabled || resourceUri == null
        ? renderData.htmlFallback == null
          ? {
              kind: "fallback" as const,
            }
          : {
              kind: "html" as const,
              renderData: renderData.htmlFallback,
            }
        : {
            kind: "dil" as const,
            source: renderData.source,
          }
      : {
          kind: "html" as const,
          renderData: renderData?.kind === "html" ? renderData : null,
        }
    : {
        kind: "fallback" as const,
      };
}
function extractMcpAppRenderData(
  toolResult?: ToolResultLike | null,
): McpRenderData {
  let dilRenderData: DilRenderData | null = null;
  for (const content of toolResult?.contents ?? []) {
    const parsedContent = toolContentSchema.safeParse(content);
    if (!parsedContent.success) continue;
    if (parsedContent.data.mimeType === "text/x-dil;profile=mcp-app") {
      dilRenderData ??= {
        htmlFallback: null,
        kind: "dil",
        source: parsedContent.data.text ?? null,
      };
      continue;
    }
    if (
      parsedContent.data.mimeType == null ||
      !MCP_WIDGET_MIME_TYPES.has(parsedContent.data.mimeType)
    ) {
      continue;
    }
    const meta = parsedContent.data._meta;
    const htmlRenderData: HtmlRenderData = {
      csp: mergeWidgetCsp({
        mcpAppCsp: meta?.ui?.csp,
        openaiWidgetCsp: meta?.["openai/widgetCSP"],
      }),
      ...(meta?.["openai/widgetHeightHint"] == null
        ? {}
        : {
            heightHint: meta["openai/widgetHeightHint"],
          }),
      html: parsedContent.data.text ?? null,
      kind: "html",
      ...(meta?.["openai/widgetMinFrameHeight"] == null
        ? {}
        : {
            minFrameHeight: meta["openai/widgetMinFrameHeight"],
          }),
      prefersBorder:
        meta?.["openai/widgetPrefersBorder"] ??
        meta?.ui?.prefersBorder ??
        false,
      isCollapsible: !(meta?.["openai/widgetShowCodexWidgetInline"] ?? false),
      widgetDomain: meta?.ui?.domain ?? meta?.["openai/widgetDomain"] ?? null,
    };
    return dilRenderData == null
      ? htmlRenderData
      : {
          ...dilRenderData,
          htmlFallback: htmlRenderData,
        };
  }
  return dilRenderData;
}
export { extractMcpAppRenderData, selectMcpAppRenderTarget };
