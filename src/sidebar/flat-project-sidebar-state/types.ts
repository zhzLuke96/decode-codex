// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Shared types for the flat project sidebar state chunk.

export type SidebarSortMode = "priority" | "manual" | "updated_at";
export type SidebarMode = "connection" | "list" | "project";
export type SidebarAttentionState = "waiting" | "unread" | "active" | "idle";

export type SignalToken<T> = {
  readonly defaultValue: T;
  readonly key: string;
};

export type SidebarSignalStore = {
  get<TValue>(signal: SignalToken<TValue>, parameter?: unknown): TValue;
  set<TValue>(
    signal: SignalToken<TValue>,
    value: TValue | ((current: TValue) => TValue),
  ): void;
};

export type SidebarThreadKey = string;

export type SidebarLocalTask = {
  conversation: {
    createdAt: number;
    id: string;
    recencyAt?: number | null;
    updatedAt: number;
    workspaceKind?: string | null;
  };
  key: SidebarThreadKey;
  kind: "local";
};

export type SidebarRemoteTask = {
  key: SidebarThreadKey;
  kind: "remote";
  task: {
    created_at?: number | null;
    id: string;
    updated_at?: number | null;
  };
};

export type SidebarPendingWorktreeTask = {
  key: SidebarThreadKey;
  kind: "pending-worktree";
  pendingWorktree: {
    createdAt: number;
  };
};

export type SidebarTask =
  | SidebarLocalTask
  | SidebarRemoteTask
  | SidebarPendingWorktreeTask;

export type SidebarTaskItem = {
  isPinned?: boolean;
  recencyAt: number;
  task: SidebarTask;
};

export type SidebarThreadOrder = {
  sortKey?: "created_at" | "updated_at" | null;
  threadIds: SidebarThreadKey[];
};

export type SidebarProjectGroup = {
  projectId: string;
  projectUpdatedAt?: number | null;
  threadKeys: SidebarThreadKey[];
};

export type SidebarConnectionGroup = {
  id: string;
  threadKeys: SidebarThreadKey[];
};

export type FlatProjectSidebarPreferences = {
  chatSortMode: SidebarSortMode;
  initialized: boolean;
  mode: SidebarMode;
  projectSortMode: SidebarSortMode;
};

export type FlatProjectSidebarSnapshot = {
  connectionGroups?: readonly SidebarConnectionGroup[];
  hasLoadedProjectSources: boolean;
  isWorkspaceRootOptionsLoading: boolean;
  navigationThreadKeys: readonly SidebarThreadKey[];
  pinnedProjectThreadKeys: readonly SidebarThreadKey[];
  projectCount: number;
  projectGroups: readonly SidebarProjectGroup[];
  projectlessThreadKeys: readonly SidebarThreadKey[];
  shortcutThreadKeys: readonly SidebarThreadKey[];
  threadAttentionStateByKey: ReadonlyMap<
    SidebarThreadKey,
    SidebarAttentionState
  >;
  threadKeys: readonly SidebarThreadKey[];
  threadRecencyAtByKey: ReadonlyMap<SidebarThreadKey, number>;
};

export type LocalEnvironmentConfig = {
  configPath: string;
  type?: "success" | "error" | string;
};

export type LocalEnvironmentSelectionState = Record<string, string | null>;

export type LocalEnvironmentSelectionResult = {
  availableEnvironments: readonly LocalEnvironmentConfig[];
  defaultEnvironment: LocalEnvironmentConfig | null;
  defaultEnvironmentNormalized: string | null;
  environments: readonly LocalEnvironmentConfig[];
  error?: unknown;
  isFetching: boolean;
  isLoading: boolean;
  normalizedResolvedConfigPath: string | null;
  resolvedConfigPath: string | null;
  updateSelection: (configPath: string | null) => void;
  workspaceKey: string | null;
};

export type ForkConversationStore = SidebarSignalStore & {
  request?<TResult>(operation: string, payload: unknown): Promise<TResult>;
  toast?: {
    danger(message: string): void;
  };
};

export type PendingWorktreeForkOptions = {
  localEnvironmentSelectionsByWorkspace: LocalEnvironmentSelectionState;
  sourceConversationId: string | null;
  sourceWorkspaceRoot: string | null;
};

export function createSignalToken<TValue>(
  key: string,
  defaultValue: TValue,
): SignalToken<TValue> {
  return { defaultValue, key };
}
