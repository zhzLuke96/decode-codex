// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Shared types for background subagent aggregation.
export type RecordValue = Record<string, unknown>;

export type ConversationTurn = {
  diff?: unknown;
  items?: readonly RecordValue[];
  status?: string | null;
  turnId?: string | null;
  turnStartedAtMs?: number | null;
};

export type CachedConversation = {
  createdAt?: number | null;
  id: string;
  resumeState?: unknown;
  source?: unknown;
  threadRuntimeStatus?: ThreadRuntimeStatus | null;
};

export type SourceLinkedThread = {
  agentRole?: string | null;
  createdAt?: number | string | null;
  id: string;
  source?: unknown;
  status?: ThreadStatus | null;
};

export type ThreadStatus = {
  type?: string | null;
};

export type ThreadRuntimeStatus = {
  type?: string | null;
};

export type BackgroundAgentMembership = {
  conversationId: string;
  createdAtMs: number | null;
  displayName: string | null;
  showInlineActivity: boolean;
  thread: SourceLinkedThread | null;
};

export type AgentReference = {
  agentState: RecordValue | null;
  parentTurnKey: string;
  spawnModel: unknown;
  thread: SourceLinkedThread | null;
  tool: string;
  usesThreadStatus: boolean;
};

export type ChildConversation = {
  resumeState?: unknown;
  source?: unknown;
  threadRuntimeStatus?: ThreadRuntimeStatus | null;
  turns: readonly ConversationTurn[];
};

export type BackgroundAgentDiffStats = {
  linesAdded: number;
  linesRemoved: number;
};

export type BackgroundAgentSummary = {
  agentRole: string | null;
  conversationId: string;
  diffStats: BackgroundAgentDiffStats | null;
  displayName: string;
  parentTurnKey: string;
  showInlineActivity: boolean;
  spawnModel: unknown;
  status: "active" | "done" | "waiting";
  statusSummary: string | null;
};

export type BuildBackgroundAgentsOptions = {
  cachedConversations: readonly CachedConversation[];
  conversationTurns: readonly ConversationTurn[];
  getChildSource: (conversationId: string) => unknown;
  getChildTurns: (
    conversationId: string,
  ) => readonly ConversationTurn[] | null | undefined;
  parentConversationId: string;
  sourceLinkedThreads?: readonly SourceLinkedThread[] | null;
};
