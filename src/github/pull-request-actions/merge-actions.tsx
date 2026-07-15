// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Pull request merge, auto-merge, and draft-state controls.
import { useState } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  Button,
  classNames,
  initButtonComponentPrimitives,
  initClassNameRuntime,
  initIntlRuntime,
  initReactQueryRuntime,
  initScopeRuntime,
  initSwitchRuntime,
  initTooltipRuntime,
  initVscodeApiBridge,
  queryKey,
  Switch,
  toastSignal,
  Tooltip,
  useIntl,
  useQueryClient,
  useScope,
} from "../../runtime/pull-request-actions-runtime";
import { ChevronIcon } from "../../icons/chevron-icon";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  MergeWithCodexButton,
  initMergeWithCodexButtonChunk,
  shouldShowMergeWithCodex,
} from "./merge-helper";
import {
  initPullRequestMergeMutationChunk,
  initPullRequestUpdateMutationChunk,
  usePullRequestMergeMutation,
  usePullRequestUpdateMutation,
} from "./merge-mutations";
import {
  trackPullRequestAction,
  initPullRequestAnalyticsChunk,
} from "./analytics";
import type {
  PullRequestBoardItem,
  PullRequestBody,
  PullRequestSurface,
} from "./types";

type PullRequestMergeRequest = {
  cwd?: string | null;
  headBranch?: string | null;
  hostId?: string | null;
  number?: number | null;
  repo?: unknown;
};

export type PullRequestMergeActionsProps = {
  hostId?: string | null;
  item: PullRequestBoardItem;
  pullRequestBody?: PullRequestBody | null;
  request?: PullRequestMergeRequest | null;
  surface?: PullRequestSurface;
  variant?: "page" | "side-panel";
};

type MergeMethod = "merge" | "squash";

type ToastScope = {
  get: (signal: unknown) => {
    danger: (message?: string, options?: { description?: string }) => void;
    success: (message: string) => void;
  };
};

export function PullRequestMergeActions({
  hostId,
  item,
  pullRequestBody,
  request,
  surface = "pull_request_page",
  variant = "page",
}: PullRequestMergeActionsProps) {
  const scope = useScope() as ToastScope;
  const intl = useIntl();
  const queryClient = useQueryClient();
  const [retryWithSquash, setRetryWithSquash] = useState(false);
  const mergeMethod: MergeMethod = retryWithSquash ? "squash" : "merge";
  const normalizedHostId = hostId ?? request?.hostId ?? item.hostId ?? null;
  const normalizedRepo =
    pullRequestBody?.repo ?? request?.repo ?? item.repo ?? null;
  const pullRequestNumber = item.number ?? request?.number ?? null;
  const isSidePanel = variant === "side-panel";

  const refreshPullRequestQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKey("gh-pr-board") }),
      request != null
        ? queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-body", request),
          })
        : undefined,
      request != null
        ? queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-checks", request),
          })
        : undefined,
      request != null
        ? queryClient.invalidateQueries({
            queryKey: queryKey("gh-pr-comments", request),
          })
        : undefined,
      queryClient.invalidateQueries({
        queryKey: queryKey("gh-pr-status", {
          cwd: item.cwd,
          headBranch: item.headBranch,
          hostId: normalizedHostId,
        }),
      }),
      queryClient.invalidateQueries({
        queryKey: queryKey("gh-pr-status", {
          cwd: item.cwd,
          headBranch: item.headBranch,
          hostId: normalizedHostId,
          number: pullRequestNumber,
          repo: normalizedRepo,
        }),
      }),
    ]);
  };

  const mergeMutation = usePullRequestMergeMutation({
    cwd: item.cwd,
    headBranch: item.headBranch,
    hostId: normalizedHostId,
    operationSource: "pull_request_board",
  });
  const autoMergeMutation = usePullRequestUpdateMutation({
    cwd: item.cwd,
    headBranch: item.headBranch,
    hostId: normalizedHostId,
    operationSource: "pull_request_board",
  });
  const draftMutation = usePullRequestUpdateMutation({
    cwd: item.cwd,
    headBranch: item.headBranch,
    hostId: normalizedHostId,
    operationSource: "pull_request_board",
  });

  if (!item.isAuthor) return null;

  const isDraft = pullRequestBody?.isDraft ?? item.state === "draft";
  const isMerged =
    item.state === "merged" || pullRequestBody?.hasOpenPr === false;
  const isAutoMergeEnabled = pullRequestBody?.isAutoMergeEnabled === true;
  const disabledReason = getMergeDisabledReason({
    body: pullRequestBody,
    ciStatus: item.ciStatus,
    isDraft,
    isMerged,
    isPending: mergeMutation.isPending,
  });
  const mergeDisabled = disabledReason != null;
  const autoMergeDisabled =
    pullRequestBody == null ||
    isMerged ||
    (!isAutoMergeEnabled && isDraft) ||
    autoMergeMutation.isPending;
  const draftDisabled =
    pullRequestBody == null || isMerged || draftMutation.isPending;
  const showMergeHelper =
    !isSidePanel &&
    pullRequestBody != null &&
    !isMerged &&
    !isDraft &&
    pullRequestBody.canMerge !== true &&
    shouldShowMergeWithCodex(item);

  const handleDraftToggle = () => {
    if (pullRequestBody == null || pullRequestNumber == null) return;
    const action = pullRequestBody.isDraft ? "mark-ready" : "mark-draft";
    trackPullRequestAction(scope, {
      action: pullRequestBody.isDraft ? "mark_ready" : "mark_draft",
      item,
      surface,
    });
    draftMutation.mutate(
      {
        action,
        cwd: item.cwd,
        number: pullRequestNumber,
        repo: normalizedRepo,
      },
      {
        onSuccess: (result: { status?: string; error?: string }) => {
          if (result.status !== "success") {
            showPullRequestError(scope, result.error);
            return;
          }
          showPullRequestSuccess(scope, getUpdateSuccessMessage(action, intl));
          void refreshPullRequestQueries();
        },
      },
    );
  };

  const handleAutoMergeChange = (enabled: boolean) => {
    if (pullRequestBody == null || pullRequestNumber == null) return;
    trackPullRequestAction(scope, {
      action: enabled ? "enable_auto_merge" : "disable_auto_merge",
      item,
      surface,
    });
    autoMergeMutation.mutate(
      {
        action: "toggle-auto-merge",
        cwd: item.cwd,
        enabled,
        mergeMethod,
        number: pullRequestNumber,
        repo: normalizedRepo,
      },
      {
        onSuccess: (result: { status?: string; error?: string }) => {
          if (result.status !== "success") {
            handleMergeError({
              error: result.error,
              intl,
              mergeMethod,
              onSquashRetry: () => enabled && setRetryWithSquash(true),
              scope,
            });
            return;
          }
          showPullRequestSuccess(
            scope,
            getUpdateSuccessMessage("toggle-auto-merge", intl),
          );
          setRetryWithSquash(retryWithSquash && enabled);
          void refreshPullRequestQueries();
        },
      },
    );
  };

  const handleMerge = () => {
    if (pullRequestBody == null || pullRequestNumber == null) return;
    trackPullRequestAction(scope, { action: "merge", item, surface });
    mergeMutation.mutate(
      {
        cwd: item.cwd,
        mergeMethod,
        number: pullRequestNumber,
        repo: normalizedRepo,
      },
      {
        onSuccess: (result: { status?: string; error?: string }) => {
          if (result.status !== "success") {
            handleMergeError({
              error: result.error,
              intl,
              mergeMethod,
              onSquashRetry: () => setRetryWithSquash(true),
              scope,
            });
            return;
          }
          showPullRequestSuccess(
            scope,
            intl.formatMessage({
              id: "pullRequestsPage.detail.merge.success",
              defaultMessage: "Merged pull request",
              description:
                "Toast shown after merging the selected pull request from the pull request side panel",
            }),
          );
          setRetryWithSquash(false);
          void refreshPullRequestQueries();
        },
      },
    );
  };

  if (isSidePanel) {
    return (
      <PullRequestSidePanelMergeControls
        autoMergeDisabled={autoMergeDisabled}
        isAutoMergeEnabled={isAutoMergeEnabled}
        isPending={mergeMutation.isPending || autoMergeMutation.isPending}
        mergeDisabled={mergeDisabled}
        onAutoMergeChange={handleAutoMergeChange}
        onMerge={handleMerge}
      />
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-1">
      <Button
        color="outline"
        disabled={draftDisabled}
        loading={draftMutation.isPending}
        size="toolbar"
        onClick={handleDraftToggle}
      >
        {isDraft ? (
          <FormattedMessage
            id="pullRequestsPage.detail.actions.markReady"
            defaultMessage="Ready for review"
            description="Button label that converts a draft pull request into a ready pull request"
          />
        ) : (
          <FormattedMessage
            id="pullRequestsPage.detail.actions.markDraft"
            defaultMessage="Convert to draft"
            description="Button label that converts a ready pull request into a draft pull request"
          />
        )}
      </Button>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <label className="flex items-center gap-2 text-xs text-token-description-foreground">
          <span className="order-2">
            <FormattedMessage
              id="pullRequestsPage.detail.actions.autoMerge"
              defaultMessage="Auto-merge"
              description="Label for the pull request auto-merge toggle"
            />
          </span>
          <Switch
            className="order-3"
            ariaLabel={intl.formatMessage({
              id: "pullRequestsPage.detail.actions.autoMerge.ariaLabel",
              defaultMessage: "Enable auto-merge",
              description:
                "Accessible label for the pull request auto-merge toggle",
            })}
            checked={isAutoMergeEnabled}
            disabled={autoMergeDisabled}
            size="sm"
            onChange={handleAutoMergeChange}
          />
        </label>
        {showMergeHelper ? (
          <MergeWithCodexButton
            hostId={normalizedHostId}
            item={item}
            repo={typeof normalizedRepo === "string" ? normalizedRepo : null}
            size="toolbar"
            surface={surface}
          />
        ) : (
          <Tooltip tooltipContent={getMergeDisabledTooltip(disabledReason)}>
            <span className="inline-flex">
              <Button
                color="primary"
                disabled={mergeDisabled}
                loading={mergeMutation.isPending}
                size="toolbar"
                onClick={handleMerge}
              >
                <FormattedMessage
                  id="pullRequestsPage.detail.actions.merge"
                  defaultMessage="Merge"
                  description="Button label that merges the selected pull request"
                />
              </Button>
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

function PullRequestSidePanelMergeControls({
  autoMergeDisabled,
  isAutoMergeEnabled,
  isPending,
  mergeDisabled,
  onAutoMergeChange,
  onMerge,
}: {
  autoMergeDisabled: boolean;
  isAutoMergeEnabled: boolean;
  isPending: boolean;
  mergeDisabled: boolean;
  onAutoMergeChange: (enabled: boolean) => void;
  onMerge: () => void;
}) {
  if (isPending) {
    return (
      <div
        aria-live="polite"
        className="inline-flex h-token-button-composer items-center gap-1 self-start rounded-lg bg-token-foreground/5 px-2 text-base leading-[18px] text-token-text-secondary"
        role="status"
      >
        <FormattedMessage
          id="pullRequestsPage.detail.actions.merging"
          defaultMessage="Merging..."
          description="Status shown while a pull request is being merged"
        />
      </div>
    );
  }
  if (isAutoMergeEnabled) {
    return (
      <div className="inline-flex h-token-button-composer items-center gap-1 self-start rounded-lg bg-token-foreground/5 px-2 text-base leading-[18px] text-token-text-secondary">
        <span
          aria-hidden={true}
          className="size-2.5 rounded-full bg-token-charts-green"
        />
        <FormattedMessage
          id="pullRequestsPage.detail.actions.autoMerge.status"
          defaultMessage="Auto-merge"
          description="Label for the pull request auto-merge control"
        />
        <Button
          aria-label="Disable auto-merge"
          color="ghostMuted"
          disabled={autoMergeDisabled}
          size="iconSm"
          onClick={() => onAutoMergeChange(false)}
        >
          <ChevronIcon className="icon-2xs opacity-40" />
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames("inline-flex items-center gap-1")}>
      <Button
        color="secondary"
        disabled={mergeDisabled}
        size="toolbar"
        onClick={onMerge}
      >
        <FormattedMessage
          id={
            mergeDisabled
              ? "pullRequestsPage.detail.actions.enableAutoMerge.trigger"
              : "pullRequestsPage.detail.actions.merge.trigger"
          }
          defaultMessage={mergeDisabled ? "Enable auto-merge" : "Merge"}
          description="Button label for pull request merge actions"
        />
      </Button>
      <Button
        aria-label="Enable auto-merge"
        color="ghostMuted"
        disabled={autoMergeDisabled}
        size="iconSm"
        onClick={() => onAutoMergeChange(true)}
      >
        <ChevronIcon className="icon-2xs text-token-input-placeholder-foreground" />
      </Button>
    </div>
  );
}

function getMergeDisabledReason({
  body,
  ciStatus,
  isDraft,
  isMerged,
  isPending,
}: {
  body?: PullRequestBody | null;
  ciStatus?: string | null;
  isDraft: boolean;
  isMerged: boolean;
  isPending: boolean;
}) {
  if (body == null) return "loading";
  if (isMerged) return "merged";
  if (isDraft) return "draft";
  if (body.canMerge === true) return isPending ? "merging" : null;
  if (body.mergeBlocker === "conflicts") return "conflicts";
  if (body.mergeBlocker === "unknown") return "unknown";
  if (ciStatus === "failing") return "failingChecks";
  if (ciStatus === "pending") return "pendingChecks";
  return "blocked";
}

function getMergeDisabledTooltip(reason: string | null) {
  return reason == null ? null : (
    <FormattedMessage
      id="pullRequestsPage.detail.actions.merge.disabledTooltip"
      defaultMessage="{reason, select, blocked {This pull request is not ready to merge} conflicts {Resolve merge conflicts before merging} draft {Mark this pull request ready for review before merging} failingChecks {Fix failing checks before merging} loading {Loading pull request details} merged {This pull request is already merged} merging {Merge in progress} pendingChecks {Wait for checks to finish before merging} unknown {GitHub is checking whether this pull request can be merged} other {This pull request is not ready to merge}}"
      description="Tooltip explaining why the Merge pull request button is disabled"
      values={{ reason }}
    />
  );
}

function getUpdateSuccessMessage(
  action: string,
  intl: ReturnType<typeof useIntl>,
) {
  switch (action) {
    case "toggle-auto-merge":
      return intl.formatMessage({
        id: "pullRequestsPage.detail.actions.enableAutoMerge.success",
        defaultMessage: "Updated auto-merge",
        description:
          "Toast shown after updating auto-merge for the selected pull request",
      });
    case "mark-draft":
      return intl.formatMessage({
        id: "pullRequestsPage.detail.actions.markDraft.success",
        defaultMessage: "Converted pull request to draft",
        description:
          "Toast shown after converting the selected pull request to a draft",
      });
    case "mark-ready":
      return intl.formatMessage({
        id: "pullRequestsPage.detail.actions.markReady.success",
        defaultMessage: "Marked pull request ready for review",
        description:
          "Toast shown after marking the selected draft pull request ready for review",
      });
    default:
      return "";
  }
}

function handleMergeError({
  error,
  intl,
  mergeMethod,
  onSquashRetry,
  scope,
}: {
  error?: string;
  intl: ReturnType<typeof useIntl>;
  mergeMethod: MergeMethod;
  onSquashRetry: () => void;
  scope: ToastScope;
}) {
  if (
    mergeMethod === "merge" &&
    /merge commits are not allowed on this repository/i.test(error ?? "")
  ) {
    onSquashRetry();
    scope.get(toastSignal).danger(
      intl.formatMessage({
        id: "pullRequestsPage.detail.actions.repoRestrictionError",
        defaultMessage: "Merge commits are disabled in this repository",
        description:
          "Toast title shown when a pull request merge action fails because the repository disallows merge commits",
      }),
      {
        description: intl.formatMessage({
          id: "pullRequestsPage.detail.actions.repoRestrictionError.description",
          defaultMessage:
            "Try again to use squash merge. If that succeeds, Codex will save squash as your default PR merge method",
          description:
            "Toast description shown when retrying a pull request merge action with squash could resolve a repository policy failure",
        }),
      },
    );
    return;
  }
  showPullRequestError(scope, error);
}

function showPullRequestSuccess(scope: ToastScope, message: string) {
  scope.get(toastSignal).success(message);
}

function showPullRequestError(scope: ToastScope, error?: string) {
  scope.get(toastSignal).danger(error ?? "Pull request action failed");
}

export const initPullRequestMergeActionsChunk = once(() => {
  initScopeRuntime();
  initReactQueryRuntime();
  initVscodeApiBridge();
  initIntlRuntime();
  initClassNameRuntime();
  initButtonComponentPrimitives();
  initSwitchRuntime();
  initTooltipRuntime();
  initPullRequestAnalyticsChunk();
  initPullRequestMergeMutationChunk();
  initPullRequestUpdateMutationChunk();
  initMergeWithCodexButtonChunk();
});
