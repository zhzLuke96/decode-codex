// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inner content of the local-conversation git-actions surface. Reads the shared
// scope, renders the surface-specific entry point (summary panel or review
// toolbar) plus the branch control, and mounts the branch-setup / commit /
// create-PR dialogs based on the active git dialog state.
import {
  activeGitDialogAtom,
  CommitChangesDialog,
  CreatePullRequestDialog,
  fileTabController,
  fileTabKind,
  GitActionsReviewToolbar,
  GitActionsSummaryPanel,
  GitBranchControl,
  gitActionsContextAtom,
  isReviewDiffOpenAtom,
  localConversationGitActionsScope,
  openCreateBranchDialog,
  openCreatePullRequestDialog,
  openNextGitActionAfterBranchSetup,
  useScopedAtomValue,
  useScopedStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { WorktreeBranchSetupModal } from "./worktree-branch-setup-modal";
import type { GitActionsSurface } from "./local-conversation-git-actions";

interface LocalConversationGitActionsContentProps {
  deferGitQueries: boolean;
  hidePullRequestSection: boolean;
  hideCreatePullRequestAction: boolean;
  surface: GitActionsSurface;
  branchControlOwnsDetachedSetup: boolean;
  reviewToolbarCompact: boolean;
  onCreateBranchActionReady?: (createBranch: () => void) => void;
  onCreatePullRequestActionReady?: (createPullRequest: () => void) => void;
}

function LocalConversationGitActionsContent({
  deferGitQueries,
  hidePullRequestSection,
  hideCreatePullRequestAction,
  surface,
  branchControlOwnsDetachedSetup,
  reviewToolbarCompact,
  onCreateBranchActionReady,
  onCreatePullRequestActionReady,
}: LocalConversationGitActionsContentProps) {
  const scopeStore = useScopedStore(localConversationGitActionsScope);
  const { codexWorktree, conversationId, cwd, hostConfig } = useScopedAtomValue(
    gitActionsContextAtom,
  );
  const activeDialog = useScopedAtomValue(activeGitDialogAtom);
  const activeTab = useScopedAtomValue(fileTabController.activeTab$);
  const isReviewDiffOpen = useScopedAtomValue(isReviewDiffOpenAtom);
  const showBranchControl =
    surface !== "summary-panel" ||
    !(isReviewDiffOpen && activeTab?.tabId === fileTabKind.DIFF);

  let surfaceContent: JSX.Element | undefined;
  switch (surface) {
    case "summary-panel":
      surfaceContent = (
        <GitActionsSummaryPanel
          deferQueries={deferGitQueries}
          branchControlOwnsDetachedSetup={branchControlOwnsDetachedSetup}
        />
      );
      break;
    case "review-toolbar":
      surfaceContent = (
        <GitActionsReviewToolbar
          deferQueries={deferGitQueries}
          compact={reviewToolbarCompact}
          hideCreatePullRequestAction={hideCreatePullRequestAction}
          hidePullRequestSection={hidePullRequestSection}
        />
      );
      break;
  }

  onCreatePullRequestActionReady?.(() => {
    openCreatePullRequestDialog(scopeStore);
  });
  onCreateBranchActionReady?.(() => {
    openCreateBranchDialog(scopeStore);
  });

  const branchControl = showBranchControl ? (
    <GitBranchControl deferQueries={deferGitQueries} />
  ) : null;

  const branchSetupDialog =
    activeDialog === "worktree-branch-setup" ? (
      <WorktreeBranchSetupModal
        conversationId={conversationId ?? undefined}
        cwd={cwd}
        hostConfig={hostConfig}
        open={true}
        onOpenChange={(open) => {
          scopeStore.set(
            activeGitDialogAtom,
            open ? "worktree-branch-setup" : null,
          );
        }}
        onRequestOpenNextAction={() => {
          openNextGitActionAfterBranchSetup(scopeStore);
        }}
      />
    ) : null;

  const commitDialog =
    activeDialog === "commit" ? (
      <CommitChangesDialog
        codexWorktree={codexWorktree}
        conversationId={conversationId}
        cwd={cwd}
        enablePushActions={true}
        hostConfig={hostConfig}
        operationSource="local_conversation_git_actions"
        open={true}
        onOpenChange={(open: boolean) => {
          scopeStore.set(activeGitDialogAtom, open ? "commit" : null);
        }}
        onRequestReset={() => {
          scopeStore.set(activeGitDialogAtom, null);
        }}
      />
    ) : null;

  const createPullRequestDialog =
    activeDialog === "create-pr" ? (
      <CreatePullRequestDialog
        codexWorktree={codexWorktree}
        conversationId={conversationId}
        cwd={cwd}
        hostConfig={hostConfig}
        open={true}
        onOpenChange={(open: boolean) => {
          scopeStore.set(activeGitDialogAtom, open ? "create-pr" : null);
        }}
        onRequestReset={() => {
          scopeStore.set(activeGitDialogAtom, null);
        }}
      />
    ) : null;

  return (
    <>
      {branchControl}
      {surfaceContent}
      {branchSetupDialog}
      {commitDialog}
      {createPullRequestDialog}
    </>
  );
}

export { LocalConversationGitActionsContent };
export type { LocalConversationGitActionsContentProps };
