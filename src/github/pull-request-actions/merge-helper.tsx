// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Helpers for the "Merge with Codex" pull request action.
import type { MouseEvent } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  Button,
  classNames,
  initButtonComponentPrimitives,
  initClassNameRuntime,
  initRouteHelpers,
  initScopeRuntime,
  initTooltipRuntime,
  routeToConversation,
  routeToPendingWorktree,
  Tooltip,
  useScope,
} from "../../runtime/pull-request-actions-runtime";
import { CodexIcon } from "../../icons/codex-icon";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  trackPullRequestAction,
  initPullRequestAnalyticsChunk,
} from "./analytics";
import type { PullRequestBoardItem, PullRequestSurface } from "./types";

type MergeHelperPromptOptions = {
  includeReviewComments?: boolean;
  item: PullRequestBoardItem;
  repo?: string | null;
};

type MergeHelperStartPayload = MergeHelperPromptOptions & {
  heartbeatAutomation: {
    kind: "heartbeat";
    name: string;
    prompt: string;
    rrule: string;
  };
  prompt: string;
};

export type PullRequestTaskRouteParams = {
  conversationId?: string | null;
  pendingWorktreeId?: string | null;
};

export type MergeWithCodexButtonProps = {
  className?: string;
  conversationId?: string | null;
  hostId?: string | null;
  item: PullRequestBoardItem;
  pendingWorktreeId?: string | null;
  repo?: string | null;
  size?: "default" | "toolbar" | string;
  stopPropagation?: boolean;
  surface?: PullRequestSurface;
  onOpenTask?: (route: unknown) => void;
  onStart?: (payload: MergeHelperStartPayload) => void;
};

const heartbeatIntervalMinutes = 10;

export function shouldShowMergeWithCodex(item: PullRequestBoardItem) {
  return (
    item.isAuthor === true &&
    item.canMerge !== true &&
    (item.state === "failing" || item.state === "in_progress")
  );
}

export function resolvePullRequestTaskRoute({
  conversationId,
  pendingWorktreeId,
}: PullRequestTaskRouteParams) {
  return conversationId == null
    ? pendingWorktreeId == null
      ? null
      : routeToPendingWorktree(pendingWorktreeId)
    : routeToConversation(conversationId);
}

export function getPullRequestMergeHelperPrompt({
  includeReviewComments = false,
  item,
  repo,
}: MergeHelperPromptOptions) {
  return [
    "Get this pull request merge-ready, enable auto-merge if needed, and keep working until it is merged.",
    "",
    ...getPullRequestPromptContext({ item, repo }),
    "",
    "Work in this new worktree only. Do not modify unrelated branches or worktrees.",
    "Resolve merge conflicts between the PR branch and the base branch.",
    "Inspect the latest PR checks with gh before changing code.",
    ...getPullRequestFixingInstructions(includeReviewComments),
    "After each code change, run the narrowest useful verification for the files or failures you touched.",
    "Commit and push fixes to the PR branch when they are ready.",
    "After pushing needed fixes, enable auto-merge if it is available and not already enabled.",
    "Do not treat passing checks or enabled auto-merge as completion. Stop only when the PR is merged.",
    "The app has attached a 10-minute heartbeat automation to this thread. Do not create another automation.",
    "",
    getPullRequestProgressDirective(includeReviewComments),
  ].join("\n");
}

export function getPullRequestMergeHeartbeatPrompt({
  includeReviewComments = false,
  item,
  repo,
}: MergeHelperPromptOptions) {
  return [
    "Continue getting this pull request merge-ready, keep auto-merge enabled if needed, and stop only after it is merged.",
    "",
    ...getPullRequestPromptContext({ item, repo }),
    "",
    "This is a heartbeat turn. Re-check the current PR state with gh.",
    "Resolve current merge conflicts with the base branch.",
    ...getPullRequestFixingInstructions(includeReviewComments),
    "Run the narrowest useful verification for any code you change, then commit and push fixes to the PR branch.",
    "If the PR is already merged or closed, report that state and delete the heartbeat automation before your final response.",
  ].join("\n");
}

export function MergeWithCodexButton({
  className,
  conversationId,
  item,
  pendingWorktreeId,
  repo,
  size = "default",
  stopPropagation = false,
  surface = "pull_request_page",
  onOpenTask,
  onStart,
}: MergeWithCodexButtonProps) {
  const scope = useScope();
  const taskRoute = resolvePullRequestTaskRoute({
    conversationId,
    pendingWorktreeId,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) event.stopPropagation();
    if (taskRoute != null) {
      trackPullRequestAction(scope, {
        action: "merge_with_codex_task_opened",
        item,
        surface,
      });
      onOpenTask?.(taskRoute);
      return;
    }
    trackPullRequestAction(scope, {
      action: "merge_with_codex_started",
      item,
      surface,
    });
    onStart?.({
      includeReviewComments: false,
      item,
      repo,
      prompt: getPullRequestMergeHelperPrompt({ item, repo }),
      heartbeatAutomation: {
        kind: "heartbeat",
        name: `Merge PR #${item.number ?? ""}`.trim(),
        prompt: getPullRequestMergeHeartbeatPrompt({ item, repo }),
        rrule: `FREQ=MINUTELY;INTERVAL=${heartbeatIntervalMinutes}`,
      },
    });
  };

  return (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="pullRequestsPage.mergeHelper.buttonTooltip"
          defaultMessage="Starts a scheduled task to watch PR CI"
          description="Tooltip explaining the Merge with Codex pull request button"
        />
      }
    >
      <Button
        className={classNames("gap-1", className)}
        color="secondary"
        size={size}
        onClick={handleClick}
      >
        <CodexIcon className="icon-xxs" />
        {taskRoute == null ? (
          <FormattedMessage
            id="pullRequestsPage.mergeHelper.button"
            defaultMessage="Merge with Codex"
            description="Button label that starts a Codex task to fix a blocked pull request and merge it"
          />
        ) : (
          <FormattedMessage
            id="pullRequestsPage.mergeHelper.openTaskButton"
            defaultMessage="Open Codex task"
            description="Button label that opens the Codex task working on a blocked pull request"
          />
        )}
      </Button>
    </Tooltip>
  );
}

function getPullRequestPromptContext({ item, repo }: MergeHelperPromptOptions) {
  return [
    `Repository: ${repo ?? item.repo ?? "the current repository"}`,
    `Pull request: #${item.number ?? "unknown"}`,
    `Branch: ${item.headBranch ?? "the PR branch"} -> ${item.baseBranch ?? "the base branch"}`,
    `URL: ${item.url ?? "the pull request URL"}`,
  ];
}

function getPullRequestFixingInstructions(includeReviewComments: boolean) {
  return [
    "Fix only CI failures caused by this PR's changes or required for this PR to pass.",
    "Do not change code for unrelated main-branch failures, infrastructure outages, external service failures, or flakes.",
    "Keep fixes small and directly tied to the PR.",
    includeReviewComments
      ? "Inspect unresolved PR review comments with gh and address every actionable comment with the smallest safe change."
      : "Inspect unresolved PR review comments and propose fixes in your summary, but do not change code only for comments unless needed for CI or conflicts.",
  ];
}

function getPullRequestProgressDirective(includeReviewComments: boolean) {
  return includeReviewComments
    ? "Track CI and address comments until all CI is passing, comments are addressed, and the PR is merged"
    : "Track CI until all CI is passing and the PR is merged";
}

export const initPullRequestMergeHelperPromptChunk = once(() => {});

export const initPullRequestTaskRouteHelpersChunk = once(() => {
  initRouteHelpers();
});

export const initMergeWithCodexButtonChunk = once(() => {
  initScopeRuntime();
  initClassNameRuntime();
  initButtonComponentPrimitives();
  initTooltipRuntime();
  initPullRequestAnalyticsChunk();
  initPullRequestMergeHelperPromptChunk();
  initPullRequestTaskRouteHelpersChunk();
});
