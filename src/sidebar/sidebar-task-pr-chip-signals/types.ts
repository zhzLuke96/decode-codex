// Restored from ref/webview/assets/sidebar-task-pr-chip-signals-CaOVWYGm.js
// sidebar-task-pr-chip-signals-CaOVWYGm chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
export type AppScopeGetter = {
  get<T>(signal: unknown, ...params: unknown[]): T;
};
export type StatsigClientLike = {
  checkGate(gateName: string): boolean;
};
export type StatsigGlobalLike = {
  firstInstance?: StatsigClientLike;
  instance?: (sdkKey?: string) => StatsigClientLike | undefined;
  instances?: Record<string, StatsigClientLike | undefined>;
};
export type IntlFormatter = {
  formatMessage(descriptor: {
    id: string;
    defaultMessage: string;
    description: string;
  }): string;
};
export type PullRequestStatus = "draft" | "open" | "merged" | "closed";
export type PullRequestCiStatus = "failing" | "none" | "passing" | "pending";
export type PullRequestVisualState =
  | "draft"
  | "failing"
  | "in_progress"
  | "merged"
  | "ready"
  | "successful";
export type PullRequestCheck = {
  status: string;
};
export type SidebarPrChipData = {
  hoverCardSection: {
    id: "pr";
    rows: Array<{
      id: string;
      icon: ReactNode;
      label: ReactNode;
      onClick?: () => void;
    }>;
  };
  iconBadge: {
    id: "pr-status";
    icon: ReactNode;
    tooltipContent: null;
  };
};
export type ExistingTaskPullRequest = {
  draft?: boolean;
  merged?: boolean;
  state: string;
};
export type TaskWithPullRequests = {
  task: {
    pull_requests?: Array<{
      pull_request?: ExistingTaskPullRequest | null;
    }> | null;
  };
};
export type GhPullRequestStatus = {
  boardItem?: {
    title?: string | null;
  } | null;
  canMerge: boolean;
  checks: readonly PullRequestCheck[];
  ciStatus: PullRequestCiStatus;
  hasOpenPr: boolean;
  isDraft: boolean;
  mergeBlocker?: "conflicts" | string | null;
  title?: string | null;
  url?: string | null;
};
export type GhPullRequestStatusResult =
  | {
      type: "success";
      data: GhPullRequestStatus;
    }
  | {
      type: "error" | "loading" | "not-found";
    };
