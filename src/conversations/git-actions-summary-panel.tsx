// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git actions rendered inside the local conversation summary panel: a primary
// commit/push action row plus an optional create-branch row, with cancel and
// blocked-reason affordances.

import type { ComponentType, ReactNode, SVGProps } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { SummaryPanelRow } from "./summary-panel-row";
import { CancelGitActionButton } from "./cancel-git-action-button";
import { GitWorkflowPhaseLabel } from "./git-workflow-phase-label";
import { resolvePrimaryGitAction } from "./git-action-availability";
import {
  activeGitDialogAtom,
  activeGitWorkflowAtom,
  BranchIcon,
  cancelActiveGitWorkflow,
  CommitBlockedReasonTooltip,
  CommitIcon,
  commitBlockedReasonAtom,
  conversationIsDetachedHeadAtom,
  gitActionsContextAtom,
  isPushActionHiddenAtom,
  localConversationGitActionsScope,
  openCreateBranchDialog,
  PushBlockedReasonTooltip,
  PushIcon,
  pushBlockedReasonAtom,
  Spinner,
  Tooltip,
  triggerPushFlow,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
} from "../boundaries/onboarding-commons-externals.facade";

interface SummaryPanelGitActionButtonProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  nowrap?: boolean;
  trailing?: ReactNode;
  tooltipContent?: ReactNode;
  onSelect: () => void;
}

function SummaryPanelGitActionButton({
  Icon,
  children,
  disabled = false,
  loading = false,
  nowrap = false,
  trailing,
  tooltipContent,
  onSelect,
}: SummaryPanelGitActionButtonProps) {
  const row = (
    <SummaryPanelRow
      disabled={disabled && !loading}
      icon={
        loading ? (
          <Spinner className="icon-sm shrink-0" />
        ) : (
          <Icon className="icon-sm shrink-0" />
        )
      }
      label={children}
      labelClassName={nowrap ? "whitespace-nowrap" : "truncate"}
      onClick={loading ? undefined : onSelect}
      trailing={trailing}
      trailingVisible={trailing != null}
    />
  );

  if (tooltipContent == null) {
    return row;
  }
  return (
    <Tooltip tooltipContent={tooltipContent} delayOpen={true}>
      <div>{row}</div>
    </Tooltip>
  );
}

export interface GitActionsSummaryPanelProps {
  branchControlOwnsDetachedSetup?: boolean;
  deferQueries?: boolean;
}

export function initGitActionsSummaryPanelChunk(): void {}

export function GitActionsSummaryPanel({
  branchControlOwnsDetachedSetup,
  deferQueries,
}: GitActionsSummaryPanelProps) {
  if (deferQueries !== undefined && deferQueries) {
    return <DeferredGitActionsSummaryPanel />;
  }
  return (
    <ResolvedGitActionsSummaryPanel
      branchControlOwnsDetachedSetup={branchControlOwnsDetachedSetup}
    />
  );
}

function ResolvedGitActionsSummaryPanel({
  branchControlOwnsDetachedSetup,
}: {
  branchControlOwnsDetachedSetup?: boolean;
}) {
  const store = useScopedStore(localConversationGitActionsScope);
  const gitActionsContext = useScopedValue(gitActionsContextAtom);
  const commitBlockedReason = useScopedValue(commitBlockedReasonAtom);
  const pushBlockedReason = useScopedValue(pushBlockedReasonAtom);
  const pushHidden = useScopedValue(isPushActionHiddenAtom);
  const conversationIsDetachedHead = useScopedQuery(
    conversationIsDetachedHeadAtom,
    gitActionsContext,
  );
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const isCommitting = activeWorkflow?.workflow === "commit";

  const primaryAction =
    resolvePrimaryGitAction({
      commit: {
        disabled: activeWorkflow != null || commitBlockedReason != null,
        loading: activeWorkflow?.workflow === "commit",
      },
      createPullRequest: { disabled: true, hidden: true },
      push: {
        disabled: activeWorkflow != null || pushBlockedReason != null,
        loading: false,
      },
    }) ?? "commit";

  const createBranchButton =
    pushHidden &&
    (!branchControlOwnsDetachedSetup || !conversationIsDetachedHead) ? (
      <SummaryPanelGitActionButton
        Icon={BranchIcon}
        onSelect={() => openCreateBranchDialog(store)}
      >
        <FormattedMessage
          id="localConversation.gitActions.createBranch"
          defaultMessage="Create branch"
          description="Label for the create branch action in the git actions dropdown"
        />
      </SummaryPanelGitActionButton>
    ) : null;

  const primaryButton =
    primaryAction === "commit" ? (
      <SummaryPanelGitActionButton
        Icon={CommitIcon}
        disabled={activeWorkflow != null || commitBlockedReason != null}
        loading={activeWorkflow?.workflow === "commit"}
        trailing={
          isCommitting ? (
            <CancelGitActionButton
              onCancel={() =>
                cancelActiveGitWorkflow({
                  cwd: gitActionsContext.cwd,
                  hostId: gitActionsContext.hostConfig.id,
                })
              }
            />
          ) : undefined
        }
        tooltipContent={
          activeWorkflow == null && commitBlockedReason != null ? (
            <CommitBlockedReasonTooltip reason={commitBlockedReason} />
          ) : undefined
        }
        onSelect={() => store.set(activeGitDialogAtom, "commit")}
      >
        {activeWorkflow?.workflow === "commit" ? (
          <GitWorkflowPhaseLabel phase={activeWorkflow.phase} />
        ) : (
          <FormattedMessage
            id="localConversationPage.commitOrPushButtonLabel"
            defaultMessage="Commit or push"
            description="Label for the combined commit and push action row"
          />
        )}
      </SummaryPanelGitActionButton>
    ) : primaryAction === "push" ? (
      <SummaryPanelGitActionButton
        Icon={PushIcon}
        disabled={activeWorkflow != null || pushBlockedReason != null}
        loading={false}
        nowrap={true}
        tooltipContent={
          activeWorkflow == null && pushBlockedReason != null ? (
            <PushBlockedReasonTooltip reason={pushBlockedReason} />
          ) : undefined
        }
        onSelect={() => triggerPushFlow(store)}
      >
        <FormattedMessage
          id="localConversationPage.commitOrPushButtonLabel"
          defaultMessage="Commit or push"
          description="Label for the combined commit and push action row"
        />
      </SummaryPanelGitActionButton>
    ) : null;

  return (
    <div className="flex min-w-0 flex-col gap-px">
      {createBranchButton}
      {primaryButton}
    </div>
  );
}

function DeferredGitActionsSummaryPanel() {
  const store = useScopedStore(localConversationGitActionsScope);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const commitPhase =
    activeWorkflow?.workflow === "commit" ? activeWorkflow.phase : null;

  return (
    <div className="flex min-w-0 flex-col gap-px">
      <SummaryPanelGitActionButton
        Icon={CommitIcon}
        disabled={activeWorkflow != null}
        loading={commitPhase != null}
        trailing={
          commitPhase == null ? undefined : (
            <CancelGitActionButton
              onCancel={() =>
                cancelActiveGitWorkflow({
                  cwd: store.value.cwd,
                  hostId: store.value.hostId,
                })
              }
            />
          )
        }
        onSelect={() => store.set(activeGitDialogAtom, "commit")}
      >
        {commitPhase == null ? (
          <FormattedMessage
            id="localConversationPage.commitOrPushButtonLabel"
            defaultMessage="Commit or push"
            description="Label for the combined commit and push action row"
          />
        ) : (
          <GitWorkflowPhaseLabel phase={commitPhase} />
        )}
      </SummaryPanelGitActionButton>
    </div>
  );
}
