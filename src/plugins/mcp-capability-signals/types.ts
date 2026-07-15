// Restored from ref/webview/assets/mcp-capability-signals-Ef9PGr3z.js
// Shared MCP capability catalog types for the Codex webview bundle.

export type HostId = string;
export type McpIconTheme = "light" | "dark";
export type McpToolVisibility = "app" | "model";
export type McpAppEntrypointKind = "global" | "thread";
export interface McpServerIcon {
  src: string;
  mimeType?: string;
  sizes?: string[];
  theme?: McpIconTheme;
}
export interface McpServerIconUrls {
  logoDarkUrl: string;
  logoUrl: string;
}
export interface McpServerInfo {
  name?: string;
  title?: string;
  icons?: unknown[];
  [key: string]: unknown;
}
export interface McpToolAnnotations {
  title?: string;
  [key: string]: unknown;
}
export interface McpToolUiMetadata {
  resourceUri?: unknown;
  visibility?: unknown;
  [key: string]: unknown;
}
export interface McpToolMetadata {
  connector_name?: string;
  ui?: McpToolUiMetadata;
  "openai/capabilities"?: unknown;
  "openai/ui"?: unknown;
  "ui/resourceUri"?: unknown;
  [key: string]: unknown;
}
export interface McpToolDefinition {
  name: string;
  title?: string;
  description?: string;
  inputSchema?: Record<string, unknown>;
  annotations?: McpToolAnnotations;
  _meta?: McpToolMetadata;
  [key: string]: unknown;
}
export interface McpGlobalOrThreadEntrypoint {
  type: McpAppEntrypointKind;
}
export interface McpFileEntrypoint {
  type: "file";
  extensions: string[];
}
export type McpToolUiEntrypoint =
  | McpGlobalOrThreadEntrypoint
  | McpFileEntrypoint;
export interface McpServerStatus {
  name: string;
  serverInfo?: McpServerInfo | null;
  tools: Record<string, unknown>;
}
export interface McpServerStatusPage {
  data: McpServerStatus[];
  nextCursor?: string | null;
}
export interface McpCapabilityCatalogServer {
  hostId: HostId;
  icon: McpServerIconUrls | null;
  server: string;
  tools: McpToolDefinition[];
}
export interface McpCapabilityMentionServer {
  mentionSearchTool: string;
  server: string;
  title: string;
}
export interface McpAppEntrypoint {
  entrypoint: McpAppEntrypointKind;
  hostId: HostId;
  icon: McpServerIconUrls | null;
  resourceUri: string;
  server: string;
  serverTools: McpToolDefinition[];
  title: string;
  tool: McpToolDefinition;
}
export interface McpFileAppEntrypoint {
  extensions: string[];
  hostId: HostId;
  icon: McpServerIconUrls | null;
  resourceUri: string;
  server: string;
  serverTools: McpToolDefinition[];
  title: string;
  tool: McpToolDefinition;
}
export type SafeParseResult<T> =
  | {
      data: T;
      success: true;
    }
  | {
      error?: unknown;
      success: false;
    };
export interface ZodLikeSchema<T> {
  parse(input: unknown): T;
  safeParse(input: unknown): SafeParseResult<T>;
}
