// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import type { ReactNode } from "react";

export type ComposerMode = "cloud" | "local" | "worktree" | string;

export type FooterRemoteState = {
  existingRemoteThreadState?: {
    connectionDisplayName?: string | null;
    hostId?: string | null;
    projectPath?: string | null;
  } | null;
  isAttachedToStartedTask?: boolean;
};

export type ThreadHandoffSummary = {
  conversationTitle?: string | null;
  cwd: string;
  isWorktreeConversation: boolean;
};

export type LocalRemoteDropdownProps = {
  allowWorktree?: boolean;
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  footerRemoteState?: FooterRemoteState | null;
  hideModeDropdown?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
  threadHandoff?: ThreadHandoffSummary | null;
  triggerVariant?: "composer" | "summary-panel" | string;
  worktreeLabelOnly?: boolean;
};

export type CloudEnvironmentDropdownProps = {
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
};

export type DropdownOption = {
  description?: ReactNode;
  disabled?: boolean;
  id: ComposerMode;
  label: ReactNode;
};

export type QueryResult<TData> = {
  data?: TData;
  error?: unknown;
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
};
