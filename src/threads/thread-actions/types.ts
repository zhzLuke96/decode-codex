// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// thread-actions-DctPk86- chunk restored from the Codex webview bundle.
export type ThreadTaskLike = {
  task: {
    key: string;
    kind: string;
  };
};
export type PendingVisibleThreadOrder = {
  nextVisibleThreadKeys: string[];
  previousVisibleThreadKeys: string[];
};
export type ThreadMoveTarget = {
  beforeThreadKey: string | null;
};
export type UsePinnedThreadStateOptions = {
  canPin?: boolean;
};
export type ArchiveThreadOptions = {
  conversationId: string;
  hostId?: string | null;
  onArchiveError?: () => void;
  onArchiveStart?: () => void;
  onArchiveSuccess?: () => void;
  source?: string;
};
export type InterruptThreadOptions = {
  conversationId: string;
};
export type RenameThreadOptions = {
  conversationId: string;
  hostId?: string | null;
  title: string;
};
export type MarkThreadUnreadOptions = {
  conversationId: string;
  hostId?: string | null;
};
export type CopyConversationMarkdownOptions = {
  conversationId: string;
  getMarkdown: () => Promise<string | null | undefined>;
  parentConversationId?: string | null;
};
export type ThreadActions = {
  archiveThread: (options: ArchiveThreadOptions) => void;
  copyAppLink: (conversationId?: string | null) => void;
  copyConversationMarkdown: (options: CopyConversationMarkdownOptions) => void;
  copySessionId: (sessionId?: string | null) => void;
  copyWorkingDirectory: (cwd?: string | null) => void;
  interruptThread: (options: InterruptThreadOptions) => void;
  markThreadAsUnread: (options: MarkThreadUnreadOptions) => void;
  renameThread: (options: RenameThreadOptions) => void;
};
export type AppScopeLike = {
  get: (signal: unknown) => any;
  query: {
    snapshot: (query: unknown) => {
      getData: () => any;
      setData: (data: any) => void;
    };
  };
};
export type IntlLike = {
  formatMessage: (message: unknown) => string;
};
