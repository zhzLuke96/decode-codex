// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-14pJ3ozX.js
// Shared types for the project index sidebar runtime.

export type ReactNode = unknown;
export type ReactElement = unknown;
export type UnknownRecord = Record<string, unknown>;
export type NavigateLike = (path: string, options?: unknown) => void;
export type StoreLike = {
  get?: (...args: unknown[]) => unknown;
  set?: (...args: unknown[]) => unknown;
};

export type SidebarGroupCollapseAction = "collapse-all" | "reopen-previous";
export type ProjectCreationFlow =
  | "direct-chatgpt"
  | "direct-local"
  | "project-type-dialog"
  | null;
export type SidebarEnvironmentType =
  | "cloud"
  | "local"
  | "remote"
  | "remote-worktree"
  | "worktree";
export type PullRequestStatus =
  | "closed"
  | "draft"
  | "merged"
  | "open"
  | "unknown";
export type ComponentProps = {
  children?: ReactNode;
  [key: string]: unknown;
};
export type IconProps = {
  className?: string;
  [key: string]: unknown;
};
export type ProjectSourceRow = {
  allowBreak?: boolean;
  hostId?: string | null;
  kind: "host" | "path" | "repository";
  value: string;
};
export type ProjectGroupLike = {
  hostDisplayName?: string | null;
  hostId?: string | null;
  label?: string | null;
  path?: string | null;
  projectId?: string | null;
  projectKind?: "local" | "remote" | string;
  repositoryData?: {
    ownerRepo?: { owner: string; repoName: string } | null;
    rootFolder?: string | null;
  } | null;
};
export type PendingThreadDrop = {
  beforeThreadId?: string | null;
  targetContainerId: string;
  threadKey: string;
};
