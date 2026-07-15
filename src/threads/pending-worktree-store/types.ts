// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
export type IntlLike = {
  formatMessage(message: {
    id: string;
    defaultMessage: string;
    description: string;
  }): string;
};
export type ToastApiLike = {
  danger(message: string): unknown;
};
export type AppScopeLike = {
  get<T>(signal: unknown): T;
};
export type SetThreadGoalOptions = {
  appendTranscriptItem: boolean;
  conversationId: string;
  hostId: string;
  intl: IntlLike;
  objective: string;
  scope: AppScopeLike;
};
export type SetThreadGoalStatusOptions = {
  conversationId: string;
  hostId: string;
  scope: AppScopeLike;
  status: string;
};
export type ClearThreadGoalOptions = {
  conversationId: string;
  hostId: string;
  intl: IntlLike;
  scope: AppScopeLike;
};
export type PastedTextAttachment = {
  file: {
    fsPath: string;
    path: string;
  };
  hostId?: string | null;
};
export type ImageAttachment = {
  filename?: string | null;
  localPath?: string | null;
  src: string;
};
export type ThreadGoalDraft = {
  imageAttachments: ImageAttachment[];
  objective: string;
  pastedTextAttachments: PastedTextAttachment[];
};
export type MaterializedThreadGoal = {
  attachmentDirectory: string | null;
  objective: string;
};
export type PendingWorktreePhase =
  | "queued"
  | "creating"
  | "setting-up"
  | "worktree-ready"
  | "failed";
export type PendingWorktreeLaunchMode =
  | "create-stable-worktree"
  | "fork-conversation"
  | "start-conversation";
export type CreatePendingWorktreeInput = {
  browserTransferSourceBrowserTabId?: string | null;
  browserTransferSourceBrowserTabIds?: string[] | null;
  browserTransferSourceConversationId?: string | null;
  clientThreadId?: string | null;
  hostId: string;
  initialThreadTitle?: string | null;
  label?: string | null;
  launchMode: PendingWorktreeLaunchMode;
  localEnvironmentConfigPath?: string | null;
  prompt?: string | null;
  sourceCollaborationMode?: unknown;
  sourceConversationId?: string | null;
  sourceWorkspaceRoot?: string | null;
  startConversationParamsInput?: unknown;
  startingState?: unknown;
  targetTurnId?: string | null;
  threadGoalDraft?: ThreadGoalDraft | null;
  threadSource?: unknown;
  threadStartHostId?: string | null;
};
export type PendingWorktree = {
  attempt: number;
  browserTransferSourceBrowserTabId?: string | null;
  browserTransferSourceBrowserTabIds?: string[] | null;
  browserTransferSourceConversationId?: string | null;
  clientThreadId?: string | null;
  createdAt: number;
  errorMessage: string | null;
  hostId: string;
  id: string;
  initialThreadTitle?: string | null;
  isPinned: boolean;
  label?: string | null;
  labelEdited: boolean;
  launchMode: PendingWorktreeLaunchMode;
  localEnvironmentConfigPath?: string | null;
  needsAttention: boolean;
  outputText: string;
  phase: PendingWorktreePhase;
  pinnedBeforeThreadId: string | null;
  prompt?: string | null;
  sourceCollaborationMode: unknown;
  sourceConversationId: string | null;
  sourceWorkspaceRoot?: string | null;
  startingState?: unknown;
  startConversationParamsInput?: unknown;
  targetTurnId?: string | null;
  threadGoalDraft?: ThreadGoalDraft | null;
  threadSource?: unknown;
  threadStartHostId?: string | null;
  setupOutputText: string;
  worktreeGitRoot: string | null;
  worktreeOutputText: string;
  worktreeWorkspaceRoot: string | null;
};
export type PendingWorktreeConversationStart =
  | {
      pendingWorktreeId: string;
      state: "waiting" | "starting" | "failed";
    }
  | {
      conversationId: string;
      pendingWorktreeId: string;
      state: "succeeded";
    };
export type PendingWorktreeConversationStartRecord = Omit<
  PendingWorktreeConversationStart,
  "pendingWorktreeId"
>;
export type PendingWorktreeMetadataUpdate =
  | {
      isPinned: boolean;
      type: "isPinned";
    }
  | {
      beforeThreadId: string | null;
      type: "pinnedBeforeThreadId";
    }
  | {
      label: string | null;
      type: "label";
    }
  | {
      labelEdited: boolean;
      type: "labelEdited";
    }
  | {
      needsAttention: boolean;
      type: "needsAttention";
    };
export type PendingWorktreeStoreActions = {
  cancelPendingWorktree(id: string): void;
  clearPendingWorktreeAttention(id: string): void;
  continuePendingWorktree(id: string): void;
  createPendingWorktree(input: CreatePendingWorktreeInput): string;
  dismissPendingWorktree(id: string): void;
  renamePendingWorktree(id: string, label: string): void;
  retryPendingWorktree(id: string): void;
  setPendingWorktreePinned(id: string, isPinned: boolean): void;
  setPendingWorktreePinnedBeforeThreadId(
    id: string,
    beforeThreadId: string | null,
  ): void;
};
