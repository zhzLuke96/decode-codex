// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// Types for the thread handoff operation queue used by the app shell.
export type ThreadHandoffDirection =
  | "to-worktree"
  | "to-local"
  | "to-host-worktree";

export type ThreadHandoffStepStatus = "pending" | string;
export type ThreadHandoffOperationStatus = "queued" | string;

export type ThreadHandoffStep = {
  id: string;
  status: ThreadHandoffStepStatus;
};

export type ThreadHandoffOperation = {
  id: string;
  direction: ThreadHandoffDirection;
  status: ThreadHandoffOperationStatus;
  sourceConversationId: string | null;
  targetConversationId: string | null;
  sourceBranch: string | null;
  localBranch: string | null;
  worktreeBranch: string | null;
  stepIds: string[];
  steps: ThreadHandoffStep[];
  request: unknown;
  errorMessage: string | null;
  warningMessage: string | null;
  execOutput: string | null;
  hasUnseenTerminalState: boolean;
  composerViewState?: unknown;
};

export type ThreadHandoffOperationsState = {
  activeOperationId: string | null;
  operations: ThreadHandoffOperation[];
};

export type ThreadHandoffOperationInput = {
  sourceConversationId: string | null;
  sourceBranch?: string | null;
  localBranch?: string | null;
  worktreeBranch?: string | null;
  stepIds: string[];
  request: unknown;
  composerViewState?: unknown;
};

export type ThreadHandoffOperationUpdate =
  | Partial<ThreadHandoffOperation>
  | ((operation: ThreadHandoffOperation) => ThreadHandoffOperation | void);
