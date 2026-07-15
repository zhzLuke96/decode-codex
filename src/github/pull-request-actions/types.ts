// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Shared pull request action types.
import type { ReactNode } from "react";

export type PullRequestSurface =
  | "pull_request_page"
  | "thread_side_panel"
  | string;

export type PullRequestBoardItem = {
  baseBranch?: string | null;
  canMerge?: boolean | null;
  ciStatus?: "failing" | "none" | "passing" | "pending" | string | null;
  cwd?: string | null;
  headBranch?: string | null;
  hostId?: string | null;
  isAuthor?: boolean;
  mergeBlocker?: "conflicts" | "unknown" | string | null;
  number?: number | null;
  repo?: string | null;
  state?: string | null;
  url?: string | null;
};

export type PullRequestBody = {
  canMerge?: boolean | null;
  hasOpenPr?: boolean | null;
  isAutoMergeEnabled?: boolean | null;
  isDraft?: boolean | null;
  mergeBlocker?: "conflicts" | "unknown" | string | null;
  repo?: string | null;
};

export type PullRequestCheckStatus =
  | "failing"
  | "passing"
  | "pending"
  | "skipped"
  | "unknown";

export type PullRequestCheck = {
  link?: string | null;
  name: string;
  status: PullRequestCheckStatus;
  workflow?: string | null;
};

export type PullRequestRowItem = {
  action?: ReactNode;
  icon?: ReactNode;
  id: string | number;
  label: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  tooltipContent?: ReactNode;
  trailing?: ReactNode;
};
