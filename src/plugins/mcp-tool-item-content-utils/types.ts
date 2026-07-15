// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
export type McpServerStatuses = {
  data: Array<{
    name: string;
    tools?: Record<
      string,
      {
        name?: string;
        _meta?: unknown;
      } | null
    >;
  }>;
};
export type ToolResultLike = {
  _meta?: unknown;
  contents?: unknown[];
};
export type OriginScope =
  | {
      kind: "codex_app";
      connectorId?: string | null;
      instanceFallbackId: string;
    }
  | {
      kind: "mcp_server";
      server: string;
    };
export type WidgetCsp = {
  baseUriDomains?: string[];
  base_uri_domains?: string[];
  connectDomains?: string[];
  connect_domains?: string[];
  frameDomains?: string[];
  frame_domains?: string[];
  resourceDomains?: string[];
  resource_domains?: string[];
};
export type WidgetCspPolicy = {
  baseUriDomains: string[];
  connectDomains: string[];
  frameDomains: string[];
  includeDefaultDomains: false;
  isTrusted: boolean;
  resourceDomains: string[];
};
export type HtmlRenderData = {
  csp: WidgetCspPolicy;
  heightHint?: number;
  html: string | null;
  isCollapsible: boolean;
  kind: "html";
  minFrameHeight?: number;
  prefersBorder: boolean;
  widgetDomain: string | null;
};
export type DilRenderData = {
  htmlFallback: HtmlRenderData | null;
  kind: "dil";
  source: string | null;
};
export type McpRenderData = HtmlRenderData | DilRenderData | null;
