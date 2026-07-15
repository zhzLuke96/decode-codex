// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for inline MCP app frames rendered in local conversation threads.

export interface McpMatchingApp {
  name: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
}

export interface McpToolInvocation {
  server: string;
  tool: string;
  arguments: unknown;
}

export interface McpToolCallItem {
  type: "mcp-tool-call";
  callId: string;
  completed: boolean;
  functionName?: string | null;
  invocation: McpToolInvocation;
  result?:
    | { type: "success"; raw?: unknown }
    | { type: "error"; error: string }
    | null;
  mcpAppResourceUri?: string | null;
  pluginId?: string | null;
}

export type ConversationTimelineItem = McpToolCallItem | { type: string };

export interface ParametricAtomGetter {
  get: (atom: unknown, param?: unknown) => any;
}

export interface McpServerToolKey {
  hostId: string;
  server: string;
  tool: string;
}
