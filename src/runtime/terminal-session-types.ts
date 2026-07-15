// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Shared types for the restored terminal session manager.

export type Unsubscribe = () => void;
export type Listener = () => void;

export type TerminalSessionSnapshot = {
  buffer: string;
  cwd: string;
  fixedTitle: string | null;
  rawShellTitle: string | null;
  shell: string;
  title: string | null;
  truncated: boolean;
};

export type TerminalConversationSnapshot = {
  activeSessionId: string;
  cwdBySessionId: Record<string, string | undefined>;
  sessionIds: string[];
  tabTitlesBySessionId: Record<string, string | undefined>;
};

export type TerminalCreateOptions = {
  cols?: number;
  conversationId?: string | null;
  conversationTitle?: string | null;
  cwd?: string | null;
  hostId?: string | null;
  rows?: number;
  sessionId?: string;
};

export type TerminalAttachOptions = TerminalCreateOptions & {
  sessionId: string;
};

export type TerminalRunAction = {
  command: string;
  cwd?: string | null;
  title?: string | null;
};

export type TerminalSessionListener = {
  onAttach?: (cwd?: string | null, shell?: string | null) => void;
  onClearActive?: () => void;
  onData?: (data: string) => void;
  onError?: (message: string) => void;
  onExit?: (code?: number | null, signal?: string | null) => void;
  onInitLog?: (data: string) => void;
};

export type DeleteSessionOptions = {
  clearConversationState?: boolean;
  notify?: boolean;
};

export type SessionMappingOptions = {
  notify?: boolean;
};

export type TerminalSessionAction =
  | {
      command: string;
      cwd?: string | null;
      headless?: boolean;
      type: "terminal-run-action";
    }
  | {
      data: string;
      type: "terminal-write";
    };

export type TerminalMetadataUpdate = Partial<
  Pick<
    TerminalSessionSnapshot,
    "cwd" | "fixedTitle" | "rawShellTitle" | "shell" | "title"
  >
>;

export type TerminalDataMessage = {
  data?: unknown;
  sessionId?: unknown;
};

export type TerminalExitMessage = {
  code?: unknown;
  sessionId?: unknown;
  signal?: unknown;
};

export type TerminalErrorMessage = {
  message?: unknown;
  sessionId?: unknown;
};

export type TerminalInitLogMessage = {
  log?: unknown;
  sessionId?: unknown;
};

export type TerminalAttachedMessage = {
  cwd?: unknown;
  sessionId?: unknown;
  shell?: unknown;
};
