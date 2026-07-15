// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derive the pull-request status / CI check state used by the review git-action
// toolbar to pick an icon and label.

export type PullRequestStatus = "draft" | "open" | "merged" | "closed";

export type PullRequestCheckState =
  | "draft"
  | "failing"
  | "in_progress"
  | "merged"
  | "ready"
  | "successful";

export interface DeriveOpenPullRequestStatusInput {
  hasOpenPr: boolean;
  isDraft: boolean;
  url: string | null | undefined;
}

export function deriveOpenPullRequestStatus({
  hasOpenPr,
  isDraft,
  url,
}: DeriveOpenPullRequestStatusInput): PullRequestStatus | null {
  if (hasOpenPr) {
    return isDraft ? "draft" : "open";
  }
  return url == null ? null : "merged";
}

export interface DerivePullRequestCheckStateInput {
  canMerge: boolean;
  ciStatus: "passing" | "failing" | string | null | undefined;
  hasMergeConflicts?: boolean;
  status: PullRequestStatus;
}

export function derivePullRequestCheckState({
  canMerge,
  ciStatus,
  hasMergeConflicts = false,
  status,
}: DerivePullRequestCheckStateInput): PullRequestCheckState {
  if (status === "merged") {
    return "merged";
  }
  if (status === "draft") {
    return "draft";
  }
  if (hasMergeConflicts || ciStatus === "failing") {
    return "failing";
  }
  if (ciStatus === "passing" && !canMerge) {
    return "successful";
  }
  return canMerge ? "ready" : "in_progress";
}
