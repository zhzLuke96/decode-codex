// Restored from ref/webview/assets/local-remote-selection-DRnEOc8g.js
// local-remote-selection-DRnEOc8g chunk restored from the Codex webview bundle.
import type { ComponentType, DependencyList, ReactNode } from "react";
export type CodexCloudAccess =
  | "disabled"
  | "loading"
  | "error"
  | "enabled_needs_setup"
  | "enabled";
export type LocalRemoteCommand = {
  Content?: ComponentType<LocalRemoteCommandContentProps>;
  Icon?: ComponentType<{ className?: string }>;
  description?: ReactNode;
  enabled?: boolean;
  group?: string | null;
  id: string;
  onSelect?: () => Promise<void> | void;
  presentation?: unknown;
  requiresEmptyComposer?: boolean;
  searchAliases?: string[];
  title: string;
  triggers?: string[];
};
export type LocalRemoteCommandRegistration = LocalRemoteCommand & {
  dependencies?: DependencyList;
};
export type LocalRemoteCommandContentProps = {
  onClose: () => void;
  search?: string;
};
export type AppScopeSetter = {
  set(state: unknown, value: unknown): void;
};
export type LocalRemoteProjectSelection = {
  path: string;
  projectKind?: string;
};
export type ProjectIconProps = {
  className?: string;
  isCodexWorktree?: boolean;
  isGitRepository?: boolean;
  isOpen?: boolean;
  isRemoteProject?: boolean;
};
export type RemoteHostSelectionInput = {
  attachedRemoteHostId?: string | null;
  browserRemoteHostId?: string | null;
  followUpType?: string | null;
  selectedRemoteProjectHostId?: string | null;
};
export type DraftRemoteHostInput = {
  composerMode?: string | null;
  draftRemoteHostId?: string | null;
  followUpType?: string | null;
  hasStartedBranchConversation?: boolean;
};
