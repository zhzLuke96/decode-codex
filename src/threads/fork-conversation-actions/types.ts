// Restored from ref/webview/assets/chat-reply-plus-HRBzDa8r.js
// chat-reply-plus-HRBzDa8r chunk restored from the Codex webview bundle.
import type {
  LocalEnvironment,
  LocalEnvironmentSelectionsByWorkspace,
} from "../../environments/local-environment-selection";
export type AppScopeReader = {
  get<T = unknown>(signal: unknown): T;
  get<T = unknown>(signal: unknown, key: string): T;
};
export type MessageDescriptorLike = {
  defaultMessage?: string;
  description?: string;
  id?: string;
  [key: string]: unknown;
};
export type IntlShapeLike = {
  formatMessage(message: MessageDescriptorLike): string;
};
export type ToastApiLike = {
  danger(message: string): unknown;
};
export type ForkConversationSource = {
  sourceConversationId?: string | null;
  sourceWorkspaceRoot?: string | null;
};
export type CreateForkConversationPendingWorktreeOptions =
  ForkConversationSource & {
    createPendingWorktree: (
      input: CreateForkConversationPendingWorktreeInput,
    ) => unknown;
    localEnvironmentSelectionsByWorkspace: LocalEnvironmentSelectionsByWorkspace;
  };
export type CreateForkConversationPendingWorktreeInput = {
  hostId: string;
  label: string;
  launchMode: "fork-conversation";
  localEnvironmentConfigPath: string | null;
  prompt: string;
  sourceCollaborationMode: unknown;
  sourceConversationId: string;
  sourceWorkspaceRoot: string;
  startingState: {
    type: "working-tree";
  };
  startConversationParamsInput: null;
  targetTurnId: null;
};
export type GitOrigin = {
  dir: string;
  root?: string | null;
};
export type GitOriginsResponse = {
  origins: GitOrigin[];
};
export type LocalEnvironmentsResponse = {
  environments: LocalEnvironment[];
};
export type ResolveSourceEnvironmentConfigPathOptions = {
  hostId?: string | null;
  localEnvironmentSelectionsByWorkspace: LocalEnvironmentSelectionsByWorkspace;
  sourceWorkspaceRoot: string;
};
