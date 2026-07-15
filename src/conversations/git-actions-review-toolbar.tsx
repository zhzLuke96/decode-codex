// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review-header git actions toolbar: primary commit/push/create-PR/create-branch
// buttons plus a "View PR" button reflecting the current pull-request status.

import type { MouseEvent } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { PullRequestCheckStatusIcon } from "../github/pull-request-status";
import {
  deriveOpenPullRequestStatus,
  derivePullRequestCheckState,
} from "../review/derive-pull-request-status";
import { CreatePullRequestIcon } from "./git-action-icons";
import { GitActionToolbarButton } from "./git-action-toolbar-button";
import {
  listVisibleGitActions,
  resolvePrimaryGitAction,
  type GitActionKind,
} from "./git-action-availability";
import {
  activeGitDialogAtom,
  activeGitWorkflowAtom,
  BranchIcon,
  buildOpenTargetMenuItems,
  cancelActiveGitWorkflow,
  CommitBlockedReasonTooltip,
  CommitIcon,
  commitBlockedReasonAtom,
  conversationHeadBranchAtom,
  createPullRequestBlockedStepAtom,
  GitActionBlockedStepTooltip,
  gitActionsContextAtom,
  isBrowserSidebarEnabledAtom,
  isDetachedHeadAtom,
  isPushActionHiddenAtom,
  localConversationGitActionsScope,
  openCreateBranchDialog,
  openCreatePullRequestDialog,
  openExternalLinkFromEvent,
  OpenTargetMenu,
  PushBlockedReasonTooltip,
  PushIcon,
  pushBlockedReasonAtom,
  pullRequestStatusAtom,
  shouldOfferOpenTargets,
  Tooltip,
  triggerPushFlow,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
} from "../boundaries/onboarding-commons-externals.facade";

interface PullRequestToolbarStatus {
  hasOpenPr: boolean;
  isDraft: boolean;
  url: string | null;
  canMerge: boolean;
  ciStatus: "passing" | "failing" | string | null | undefined;
  defaultBranch?: string | null;
}

interface ToolbarButtonProps {
  compact?: boolean;
}

function CommitOrPushToolbarButton({ compact }: ToolbarButtonProps) {
  const store = useScopedStore(localConversationGitActionsScope);
  const intl = useIntl();
  const commitBlockedReason = useScopedValue(commitBlockedReasonAtom);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const isCommitting = activeWorkflow?.workflow === "commit";
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.commitOrPushButtonLabel",
    defaultMessage: "Commit or push",
    description: "Label for the combined commit and push action row",
  });
  return (
    <GitActionToolbarButton
      Icon={CommitIcon}
      ariaLabel={ariaLabel}
      compact={compact}
      disabled={activeWorkflow != null || commitBlockedReason != null}
      loading={isCommitting}
      phase={isCommitting ? activeWorkflow.phase : null}
      tooltipContent={
        activeWorkflow == null && commitBlockedReason != null ? (
          <CommitBlockedReasonTooltip reason={commitBlockedReason} />
        ) : undefined
      }
      onCancel={
        activeWorkflow?.workflow === "commit"
          ? () =>
              cancelActiveGitWorkflow({
                cwd: store.value.cwd,
                hostId: store.value.hostId,
              })
          : undefined
      }
      onClick={() => store.set(activeGitDialogAtom, "commit")}
    >
      <FormattedMessage
        id="localConversationPage.commitOrPushButtonLabel"
        defaultMessage="Commit or push"
        description="Label for the combined commit and push action row"
      />
    </GitActionToolbarButton>
  );
}

function CreateBranchToolbarButton({ compact }: ToolbarButtonProps) {
  const store = useScopedStore(localConversationGitActionsScope);
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "localConversation.gitActions.createBranch",
    defaultMessage: "Create branch",
    description:
      "Label for the create branch action in the git actions dropdown",
  });
  return (
    <GitActionToolbarButton
      Icon={BranchIcon}
      ariaLabel={ariaLabel}
      compact={compact}
      onClick={() => openCreateBranchDialog(store)}
    >
      <FormattedMessage
        id="localConversation.gitActions.createBranch"
        defaultMessage="Create branch"
        description="Label for the create branch action in the git actions dropdown"
      />
    </GitActionToolbarButton>
  );
}

function CreatePullRequestToolbarButton({ compact }: ToolbarButtonProps) {
  const store = useScopedStore(localConversationGitActionsScope);
  const intl = useIntl();
  const blockedStep = useScopedValue(createPullRequestBlockedStepAtom);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const isCreatingPullRequest = activeWorkflow?.workflow === "create-pr";
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.createPullRequestButtonLabel",
    defaultMessage: "Create PR",
    description: "Label for create pull request action",
  });
  return (
    <GitActionToolbarButton
      Icon={CreatePullRequestIcon}
      ariaLabel={ariaLabel}
      compact={compact}
      disabled={activeWorkflow != null || blockedStep != null}
      loading={isCreatingPullRequest}
      phase={isCreatingPullRequest ? activeWorkflow.phase : null}
      tooltipContent={
        activeWorkflow == null && blockedStep != null ? (
          <GitActionBlockedStepTooltip blockedStep={blockedStep} />
        ) : undefined
      }
      onCancel={
        activeWorkflow?.workflow === "create-pr"
          ? () =>
              cancelActiveGitWorkflow({
                cwd: store.value.cwd,
                hostId: store.value.hostId,
              })
          : undefined
      }
      onClick={() => openCreatePullRequestDialog(store)}
    >
      <FormattedMessage
        id="localConversationPage.createPullRequestButtonLabel"
        defaultMessage="Create PR"
        description="Label for create pull request action"
      />
    </GitActionToolbarButton>
  );
}

export function PushToolbarButton({ compact }: ToolbarButtonProps) {
  const store = useScopedStore(localConversationGitActionsScope);
  const intl = useIntl();
  const pushBlockedReason = useScopedValue(pushBlockedReasonAtom);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.commitOrPushButtonLabel",
    defaultMessage: "Commit or push",
    description: "Label for the combined commit and push action row",
  });
  return (
    <GitActionToolbarButton
      Icon={PushIcon}
      ariaLabel={ariaLabel}
      compact={compact}
      disabled={activeWorkflow != null || pushBlockedReason != null}
      loading={false}
      push={true}
      tooltipContent={
        activeWorkflow == null && pushBlockedReason != null ? (
          <PushBlockedReasonTooltip reason={pushBlockedReason} />
        ) : undefined
      }
      onClick={() => triggerPushFlow(store)}
    >
      <FormattedMessage
        id="localConversationPage.commitOrPushButtonLabel"
        defaultMessage="Commit or push"
        description="Label for the combined commit and push action row"
      />
    </GitActionToolbarButton>
  );
}

interface GitActionsToolbarActionSetProps {
  compact?: boolean;
  hideCreatePullRequest?: boolean;
}

function GitActionsToolbarActionSet({
  compact,
  hideCreatePullRequest,
}: GitActionsToolbarActionSetProps) {
  const commitBlockedReason = useScopedValue(commitBlockedReasonAtom);
  const pushBlockedReason = useScopedValue(pushBlockedReasonAtom);
  const createPullRequestBlockedStep = useScopedValue(
    createPullRequestBlockedStepAtom,
  );
  const pushHidden = useScopedValue(isPushActionHiddenAtom);
  const isDetachedHead = useScopedValue(isDetachedHeadAtom);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);

  const commitState = {
    disabled: activeWorkflow != null || commitBlockedReason != null,
    loading: activeWorkflow?.workflow === "commit",
  };
  const pushState = {
    disabled: activeWorkflow != null || pushBlockedReason != null,
    hidden: pushHidden,
    loading: false,
  };
  const primaryAction: GitActionKind | null =
    resolvePrimaryGitAction({
      commit: commitState,
      createPullRequest: {
        disabled:
          activeWorkflow != null || createPullRequestBlockedStep != null,
        hidden: hideCreatePullRequest,
        loading: activeWorkflow?.workflow === "create-pr",
      },
      push: pushState,
    }) ??
    listVisibleGitActions({ commit: commitState, push: pushState })[0] ??
    null;

  if (isDetachedHead) {
    return <CreateBranchToolbarButton compact={compact} />;
  }

  const primaryButton =
    primaryAction === "commit" ? (
      <CommitOrPushToolbarButton compact={compact} />
    ) : primaryAction === "push" ? (
      <PushToolbarButton compact={compact} />
    ) : primaryAction === "create-pr" ? (
      <CreatePullRequestToolbarButton compact={compact} />
    ) : null;
  const secondaryCreatePullRequest =
    primaryAction !== "create-pr" && !hideCreatePullRequest ? (
      <CreatePullRequestToolbarButton compact={compact} />
    ) : null;

  return (
    <>
      {primaryButton}
      {secondaryCreatePullRequest}
    </>
  );
}

function openPullRequestFromEvent(event: MouseEvent<HTMLElement>, url: string) {
  openExternalLinkFromEvent({
    event,
    href: url,
    initiator: "pull_request_link",
  });
}

interface ViewPullRequestToolbarButtonProps {
  compact?: boolean;
  pullRequestStatus: PullRequestToolbarStatus;
}

function ViewPullRequestToolbarButton({
  compact,
  pullRequestStatus,
}: ViewPullRequestToolbarButtonProps) {
  const intl = useIntl();
  const isBrowserSidebarEnabled = useScopedValue(isBrowserSidebarEnabledAtom);

  const status = deriveOpenPullRequestStatus({
    hasOpenPr: pullRequestStatus.hasOpenPr,
    isDraft: pullRequestStatus.isDraft,
    url: pullRequestStatus.url,
  });
  const url = pullRequestStatus.url;
  if (status == null || url == null) {
    return null;
  }

  const label = intl.formatMessage({
    id: "codex.review.gitActions.viewPullRequest",
    defaultMessage: "View PR",
    description:
      "Label for the review toolbar button that views a pull request",
  });
  const checkState = derivePullRequestCheckState({
    canMerge: pullRequestStatus.canMerge,
    ciStatus: pullRequestStatus.ciStatus,
    status,
  });

  const button = (
    <Button
      aria-label={label}
      className="min-w-0 gap-0 enabled:text-token-foreground"
      color="outline"
      size="toolbar"
      onAuxClick={(event: MouseEvent<HTMLElement>) => {
        if (event.button === 1) {
          openPullRequestFromEvent(event, url);
        }
      }}
      onClick={(event: MouseEvent<HTMLElement>) =>
        openPullRequestFromEvent(event, url)
      }
    >
      <PullRequestCheckStatusIcon
        className="icon-xs shrink-0"
        state={checkState}
      />
      <span
        className={
          compact
            ? "hidden [@container_review-header_(min-width:625px)]:inline"
            : undefined
        }
      >
        {label}
      </span>
    </Button>
  );

  const tooltipButton = (
    <Tooltip tooltipContent={label} delayOpen={true}>
      {button}
    </Tooltip>
  );

  if (!shouldOfferOpenTargets({ href: url, isBrowserSidebarEnabled })) {
    return tooltipButton;
  }

  const openTargetItems = buildOpenTargetMenuItems({
    conversationId: null,
    href: url,
    initiator: "pull_request_link",
  });
  return (
    <OpenTargetMenu items={openTargetItems}>{tooltipButton}</OpenTargetMenu>
  );
}

export interface GitActionsReviewToolbarProps {
  compact?: boolean;
  deferQueries?: boolean;
  hideCreatePullRequestAction?: boolean;
  hidePullRequestSection?: boolean;
}

export function GitActionsReviewToolbar({
  compact,
  deferQueries,
  hideCreatePullRequestAction,
  hidePullRequestSection,
}: GitActionsReviewToolbarProps) {
  if (deferQueries !== undefined && deferQueries) {
    return (
      <DeferredGitActionsReviewToolbar
        compact={compact}
        hideCreatePullRequestAction={hideCreatePullRequestAction}
      />
    );
  }
  return (
    <ResolvedGitActionsReviewToolbar
      compact={compact}
      hideCreatePullRequestAction={hideCreatePullRequestAction}
      hidePullRequestSection={hidePullRequestSection}
    />
  );
}

function ResolvedGitActionsReviewToolbar({
  compact,
  hideCreatePullRequestAction,
  hidePullRequestSection,
}: GitActionsReviewToolbarProps) {
  const gitActionsContext = useScopedValue(gitActionsContextAtom);
  const { cwd, hostConfig } = gitActionsContext;
  const headBranch = useScopedQuery(
    conversationHeadBranchAtom,
    gitActionsContext,
  );
  const pullRequestStatusResult = useScopedQuery(pullRequestStatusAtom, {
    cwd,
    headBranch,
    hostId: hostConfig.id,
    operationSource: "local_conversation_git_actions",
  });
  const pullRequestStatus =
    pullRequestStatusResult.type === "success" &&
    pullRequestStatusResult.data.url != null
      ? pullRequestStatusResult.data
      : null;
  const hideCreatePullRequest =
    hideCreatePullRequestAction || pullRequestStatus != null;

  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <GitActionsToolbarActionSet
        compact={compact}
        hideCreatePullRequest={hideCreatePullRequest}
      />
      {!hidePullRequestSection && pullRequestStatus != null ? (
        <ViewPullRequestToolbarButton
          compact={compact}
          pullRequestStatus={pullRequestStatus}
        />
      ) : null}
    </div>
  );
}

function DeferredGitActionsReviewToolbar({
  compact,
  hideCreatePullRequestAction,
}: GitActionsReviewToolbarProps) {
  const store = useScopedStore(localConversationGitActionsScope);
  const intl = useIntl();
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const commitPhase =
    activeWorkflow?.workflow === "commit" ? activeWorkflow.phase : null;
  const createPullRequestPhase =
    activeWorkflow?.workflow === "create-pr" ? activeWorkflow.phase : null;
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.commitOrPushButtonLabel",
    defaultMessage: "Commit or push",
    description: "Label for the combined commit and push action row",
  });

  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <GitActionToolbarButton
        Icon={CommitIcon}
        ariaLabel={ariaLabel}
        compact={compact}
        disabled={activeWorkflow != null}
        loading={commitPhase != null}
        phase={commitPhase}
        onCancel={
          commitPhase == null
            ? undefined
            : () =>
                cancelActiveGitWorkflow({
                  cwd: store.value.cwd,
                  hostId: store.value.hostId,
                })
        }
        onClick={() => store.set(activeGitDialogAtom, "commit")}
      >
        <FormattedMessage
          id="localConversationPage.commitOrPushButtonLabel"
          defaultMessage="Commit or push"
          description="Label for the combined commit and push action row"
        />
      </GitActionToolbarButton>
      {hideCreatePullRequestAction ? null : (
        <GitActionToolbarButton
          Icon={CreatePullRequestIcon}
          ariaLabel={intl.formatMessage({
            id: "localConversationPage.createPullRequestButtonLabel",
            defaultMessage: "Create PR",
            description: "Label for create pull request action",
          })}
          compact={compact}
          disabled={activeWorkflow != null}
          loading={createPullRequestPhase != null}
          phase={createPullRequestPhase}
          onCancel={
            createPullRequestPhase == null
              ? undefined
              : () =>
                  cancelActiveGitWorkflow({
                    cwd: store.value.cwd,
                    hostId: store.value.hostId,
                  })
          }
          onClick={() => openCreatePullRequestDialog(store)}
        >
          <FormattedMessage
            id="localConversationPage.createPullRequestButtonLabel"
            defaultMessage="Create PR"
            description="Label for create pull request action"
          />
        </GitActionToolbarButton>
      )}
    </div>
  );
}
