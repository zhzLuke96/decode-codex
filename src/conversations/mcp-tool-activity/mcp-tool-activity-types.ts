// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for MCP tool activity rendering.

export interface McpToolInvocation {
  tool: string;
  server: string;
  arguments: unknown;
}

export interface McpToolActivityItem {
  callId: string;
  completed: boolean;
  durationMs?: number | null;
  invocation: McpToolInvocation;
  result?:
    | {
        type: "success";
        raw?: unknown;
        content?: McpContentBlock[] | null;
        structuredContent?: unknown;
      }
    | { type: "error"; error: string }
    | null;
  mcpAppResourceUri?: string | null;
  pluginId?: string | null;
  automaticApprovalReviews?: unknown;
}

export type McpContentBlock = {
  type: string;
  text?: string;
  annotations?: McpContentBlockAnnotations | null;
  mimeType?: string;
  data?: string;
  title?: string | null;
  name?: string | null;
  uri?: string;
  raw?: unknown;
  resource?: {
    uri: string;
    mimeType?: string | null;
    text?: string | null;
    blob?: string | null;
    annotations?: McpContentBlockAnnotations | null;
  };
};

export interface McpContentBlockAnnotations {
  audience?: string[] | null;
  priority?: number | null;
  lastModified?: string | null;
}
