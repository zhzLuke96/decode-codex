// Restored from ref/webview/assets/sidebar-task-pr-chip-signals-CaOVWYGm.js
// sidebar-task-pr-chip-signals-CaOVWYGm chunk restored from the Codex webview bundle.
import { vscodeApiF } from "../../boundaries/vscode-api";
import { ClockIcon } from "../../icons/clock-icon";
import { pullRequestChecksStatusLabel } from "../../github/pull-request-checks-summary";
import {
  PullRequestCheckStatusIcon,
  PullRequestStatusIcon,
} from "../../github/pull-request-status";
import { getPullRequestStatus } from "../../github/pull-request-status-utils";
import { HeartbeatAutomationCheckRing } from "../../utils/get-attached-heartbeat-automation-for-thread";
import {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
} from "../../utils/pull-request-visual-state";
import type {
  GhPullRequestStatus,
  IntlFormatter,
  PullRequestCheck,
  PullRequestCiStatus,
  PullRequestStatus,
  PullRequestVisualState,
  SidebarPrChipData,
  TaskWithPullRequests,
} from "./types";
export function getTaskPullRequestStatus(
  task: TaskWithPullRequests | null | undefined,
): PullRequestStatus | null {
  if (task == null) return null;
  const pullRequest = task.task.pull_requests?.[0]?.pull_request ?? null;
  return pullRequest ? getPullRequestStatus(pullRequest) : null;
}
export function buildBasicPullRequestChip(
  status: PullRequestStatus,
  intl: IntlFormatter,
): SidebarPrChipData {
  const label = formatPullRequestStatus(status, intl);
  return {
    hoverCardSection: {
      id: "pr",
      rows: [
        {
          id: "pr-status",
          icon: <PullRequestStatusIcon status={status} />,
          label,
        },
      ],
    },
    iconBadge: {
      id: "pr-status",
      icon: <PullRequestStatusIcon status={status} />,
      tooltipContent: null,
    },
  };
}
export function buildLivePullRequestChip(
  statusResult: GhPullRequestStatus,
  intl: IntlFormatter,
): SidebarPrChipData | null {
  const status = getPullRequestVisualState(statusResult);
  return status == null
    ? null
    : buildPullRequestStatusRows(
        status,
        getPullRequestMergeVisualState({
          canMerge: statusResult.canMerge,
          ciStatus: statusResult.ciStatus,
          hasMergeConflicts: statusResult.mergeBlocker === "conflicts",
          status,
        }),
        statusResult.checks,
        statusResult.ciStatus,
        statusResult.title ?? statusResult.boardItem?.title ?? null,
        statusResult.url,
        intl,
      );
}
function buildPullRequestStatusRows(
  status: PullRequestStatus,
  mergeVisualState: PullRequestVisualState,
  checks: readonly PullRequestCheck[],
  ciStatus: PullRequestCiStatus,
  title: string | null | undefined,
  url: string | null | undefined,
  intl: IntlFormatter,
): SidebarPrChipData {
  return {
    hoverCardSection: {
      id: "pr",
      rows: [
        {
          id: "pr-status",
          icon: <PullRequestStatusIcon status={status} />,
          label: title ?? formatPullRequestStatus(status, intl),
          onClick:
            url == null
              ? undefined
              : () => {
                  vscodeApiF.dispatchMessage("open-in-browser", {
                    initiator: "pull_request_link",
                    source: "manual",
                    url,
                  });
                },
        },
        {
          id: "checks-summary",
          icon:
            ciStatus === "none" ? (
              <ClockIcon />
            ) : (
              <HeartbeatAutomationCheckRing checks={checks} />
            ),
          label: pullRequestChecksStatusLabel(ciStatus),
        },
      ],
    },
    iconBadge: {
      id: "pr-status",
      icon: <PullRequestCheckStatusIcon state={mergeVisualState} />,
      tooltipContent: null,
    },
  };
}
function formatPullRequestStatus(
  status: PullRequestStatus,
  intl: IntlFormatter,
): string | undefined {
  switch (status) {
    case "draft":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.draft",
        defaultMessage: "Draft PR",
        description: "Tooltip shown for a draft pull request badge",
      });
    case "open":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.open",
        defaultMessage: "Open PR",
        description: "Tooltip shown for an open pull request badge",
      });
    case "merged":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.merged",
        defaultMessage: "Merged PR",
        description: "Tooltip shown for a merged pull request badge",
      });
    case "closed":
      return intl.formatMessage({
        id: "sidebar.taskRow.pr.closed",
        defaultMessage: "Closed PR",
        description: "Tooltip shown for a closed pull request badge",
      });
  }
}
