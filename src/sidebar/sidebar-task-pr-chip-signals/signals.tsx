// Restored from ref/webview/assets/sidebar-task-pr-chip-signals-CaOVWYGm.js
// sidebar-task-pr-chip-signals-CaOVWYGm chunk restored from the Codex webview bundle.
import { _appScopeL, appScopeRoot } from "../../boundaries/app-scope";
import {
  A as threadWorkingDirectorySignal,
  R as threadHeadBranchSignal,
  V as threadHostIdSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { ghPullRequestStatusResultSignal } from "../../github/gh-pull-request-status-query";
import { appIntlSignal } from "../../utils/app-intl-signal";
import {
  buildBasicPullRequestChip,
  buildLivePullRequestChip,
} from "./pull-request-chip";
import { showSidebarPullRequestIconsSignal } from "./settings";
import type {
  AppScopeGetter,
  GhPullRequestStatusResult,
  IntlFormatter,
  PullRequestStatus,
  SidebarPrChipData,
} from "./types";
export const existingTaskPullRequestChipSignal = _appScopeL(
  appScopeRoot,
  (
    status: PullRequestStatus | null | undefined,
    { get }: AppScopeGetter,
  ): SidebarPrChipData | null => {
    if (!get<boolean>(showSidebarPullRequestIconsSignal) || status == null) {
      return null;
    }
    return buildBasicPullRequestChip(status, get<IntlFormatter>(appIntlSignal));
  },
);
export const liveTaskPullRequestChipSignal = _appScopeL(
  appScopeRoot,
  (
    threadId: string | null | undefined,
    { get }: AppScopeGetter,
  ): SidebarPrChipData | null => {
    if (!get<boolean>(showSidebarPullRequestIconsSignal)) return null;
    const cwd = get<string | null | undefined>(
      threadWorkingDirectorySignal,
      threadId,
    );
    const headBranch = get<string | null | undefined>(
      threadHeadBranchSignal,
      threadId,
    );
    const hostId =
      get<string | null | undefined>(threadHostIdSignal, threadId) ?? "local";
    if (threadId == null || cwd == null || headBranch == null) return null;
    const statusResult = get<GhPullRequestStatusResult>(
      ghPullRequestStatusResultSignal,
      {
        cwd,
        headBranch,
        hostId,
        operationSource: "sidebar_task_pr_chip",
      },
    );
    return statusResult.type === "success"
      ? buildLivePullRequestChip(
          statusResult.data,
          get<IntlFormatter>(appIntlSignal),
        )
      : null;
  },
);
