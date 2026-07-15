// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Registers the git.commit / git.createPullRequest keyboard shortcuts for the
// local conversation page. Renders nothing; only wires command shortcuts.

import {
  activeGitDialogAtom,
  activeGitWorkflowAtom,
  commitBlockedReasonAtom,
  createPullRequestActionStateAtom,
  localConversationGitActionsScope,
  openCreatePullRequestDialog,
  pushBlockedReasonAtom,
  triggerPushFlow,
  useCommandShortcut,
  useScopedStore,
  useScopedValue,
} from "../boundaries/onboarding-commons-externals.facade";

export interface GitActionsKeyboardShortcutsProps {
  deferQueries?: boolean;
}

export function GitActionsKeyboardShortcuts({
  deferQueries = false,
}: GitActionsKeyboardShortcutsProps) {
  return deferQueries ? (
    <DeferredGitActionsKeyboardShortcuts />
  ) : (
    <ResolvedGitActionsKeyboardShortcuts />
  );
}

function ResolvedGitActionsKeyboardShortcuts() {
  const store = useScopedStore(localConversationGitActionsScope);
  const activeWorkflow = useScopedValue(activeGitWorkflowAtom);
  const commitBlockedReason = useScopedValue(commitBlockedReasonAtom);
  const pushBlockedReason = useScopedValue(pushBlockedReasonAtom);
  const createPullRequestState = useScopedValue(
    createPullRequestActionStateAtom,
  );
  const isNotRunning = activeWorkflow == null;

  const handleCommit = () => {
    if (commitBlockedReason == null) {
      store.set(activeGitDialogAtom, "commit");
      return;
    }
    triggerPushFlow(store);
  };
  useCommandShortcut("git.commit", handleCommit, {
    enabled:
      isNotRunning &&
      (commitBlockedReason == null || pushBlockedReason == null),
  });

  const handleCreatePullRequest = () => openCreatePullRequestDialog(store);
  useCommandShortcut("git.createPullRequest", handleCreatePullRequest, {
    enabled: isNotRunning && createPullRequestState === "enabled",
  });

  return null;
}

function DeferredGitActionsKeyboardShortcuts() {
  const store = useScopedStore(localConversationGitActionsScope);
  const isNotRunning = useScopedValue(activeGitWorkflowAtom) == null;

  const handleCommit = () => {
    store.set(activeGitDialogAtom, "commit");
  };
  useCommandShortcut("git.commit", handleCommit, { enabled: isNotRunning });

  const handleCreatePullRequest = () => openCreatePullRequestDialog(store);
  useCommandShortcut("git.createPullRequest", handleCreatePullRequest, {
    enabled: isNotRunning,
  });

  return null;
}
