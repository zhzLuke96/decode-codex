// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for local-conversation activity grouping and rollup predicates.

export type ConversationDetailLevel = "STEPS_PROSE" | (string & {});

export type ToolActivityItem = {
  type: string;
  action?: string;
  id?: string;
  callId?: string;
  query?: string;
  completed?: boolean;
  [key: string]: unknown;
};

export type RenderEntry =
  | { kind: "item"; item: ToolActivityItem }
  | { kind: "exploration"; items: ToolActivityItem[] }
  | { kind: string; [key: string]: unknown };

export type ActivityGroup =
  | { kind: "entry"; entry: RenderEntry }
  | { kind: "multi-agent-group"; items: ToolActivityItem[] }
  | { kind: "web-search-group"; items: ToolActivityItem[] };

export type ActivityUnit =
  | ActivityGroup
  | {
      kind:
        | "collapsed-tool-activity"
        | "pending-mcp-tool-calls"
        | "dynamic-tool-call-group";
      key: string;
      items?: ToolActivityItem[];
      units?: ActivityUnit[];
      summary?: unknown;
    };

export type BuildConversationActivityUnitsOptions = {
  entries: RenderEntry[];
  conversationDetailLevel: ConversationDetailLevel;
  isTurnInProgress: boolean;
  isActivitySliceClosed: boolean;
  mcpServerStatuses: unknown;
  shouldAutoExpandMcpApps?: boolean;
  modelProvider?: unknown;
  resolvedApps: unknown;
  isTurnCancelled?: boolean;
  collapseMixedDynamicToolActivity?: boolean;
};
