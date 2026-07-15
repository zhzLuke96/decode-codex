// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Shared project hover card types reconstructed from the sidebar hover card chunk.
import type { ReactNode } from "react";

export type MessageDescriptor = {
  defaultMessage: string;
  description?: string;
  id: string;
};

export type IntlShape = {
  formatMessage(
    descriptor: MessageDescriptor,
    values?: Record<string, unknown>,
  ): string;
};

type ScopeGetter = <TValue = unknown>(signal: unknown, key?: unknown) => TValue;

export type ScopeRuntime = {
  get: ScopeGetter;
};

export type ToastController = {
  danger(message: string): void;
};

type OwnerRepo = {
  owner: string;
  repoName: string;
};

type ProjectRepositoryData = {
  ownerRepo: OwnerRepo | null;
  rootFolder?: string | null;
};

export type SidebarProjectGroup = {
  hostDisplayName?: string | null;
  hostId?: string | null;
  isLocalProject?: boolean;
  label: string;
  path?: string | null;
  projectId: string;
  projectKind: "local" | "remote";
  repositoryData?: ProjectRepositoryData | null;
  threadKeys: string[];
};

export type ProjectWritableRoot = {
  kind?: string;
  label?: string;
  path: string;
};

export type ProjectWritableRoots = Record<
  string,
  ProjectWritableRoot[] | undefined
>;

export type ProjectAttentionCounts = {
  active: number;
  unread: number;
  waiting: number;
};

export type RemoteHostConfig = {
  hostId: string;
  kind?: string;
};

export type RemoteConnectionState =
  | "connected"
  | "connecting"
  | "disconnected"
  | "error"
  | "restarting";

export type RemoteConnectionError =
  | {
      code: "connection-failed";
      message: string;
    }
  | {
      code: "login-required";
    }
  | {
      code: "remote-codex-not-found";
    }
  | {
      code: "restart-required";
      currentVersion?: string | null;
      installedVersion?: string | null;
    }
  | {
      code: "update-required";
      currentVersion: string;
      minRequiredVersion: string;
    };

export type RemoteConnectionStatusSurface =
  | "connection-status-badge"
  | "connections-row";

export type RemoteConnectionAction =
  | {
      kind: "install-codex";
      label: string;
      loadingLabel?: string;
      tooltipText?: string;
    }
  | {
      kind: "login";
      label: string;
    }
  | {
      kind: "restart";
      label: string;
      tooltipText?: string;
    }
  | {
      kind: "settings";
      label: string;
    };

export type RemoteConnectionStatusModel = {
  action: RemoteConnectionAction | null;
  label: string;
  message: string;
};

export type ProjectSourceRow =
  | {
      allowBreak?: boolean;
      kind: "host";
      hostId: string | null;
      value: string;
    }
  | {
      allowBreak?: boolean;
      kind: "path";
      value: string;
    }
  | {
      allowBreak?: boolean;
      kind: "repository";
      value: string;
    };

export type RenderableProjectSourceRow = {
  actionLabel?: string;
  allowBreak?: boolean;
  hostId: string | null;
  icon: ReactNode;
  id: string;
  kind: ProjectSourceRow["kind"];
  onClick?: () => void;
  value: string;
};

export type SavedRemoteProject = {
  id: string;
  label?: string;
  [key: string]: unknown;
};

export const EMPTY_ATTENTION_COUNTS: ProjectAttentionCounts = {
  active: 0,
  unread: 0,
  waiting: 0,
};
