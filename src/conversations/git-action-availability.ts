// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers that pick which git action (commit / push / create-pr) the toolbar
// should surface based on each action's hidden/disabled/loading state.

export interface GitActionState {
  hidden?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export type GitActionKind = "commit" | "push" | "create-pr";

export function isGitActionAvailable(action: GitActionState): boolean {
  return (
    action.hidden !== true && (!action.disabled || action.loading === true)
  );
}

export interface ResolvePrimaryGitActionInput {
  commit: GitActionState;
  createPullRequest: GitActionState;
  push: GitActionState;
}

export function resolvePrimaryGitAction({
  commit,
  createPullRequest,
  push,
}: ResolvePrimaryGitActionInput): GitActionKind | null {
  if (isGitActionAvailable(commit)) {
    return "commit";
  }
  if (isGitActionAvailable(push)) {
    return "push";
  }
  if (isGitActionAvailable(createPullRequest)) {
    return "create-pr";
  }
  return null;
}

export interface ListVisibleGitActionsInput {
  commit: GitActionState;
  push: GitActionState;
}

export function listVisibleGitActions({
  commit,
  push,
}: ListVisibleGitActionsInput): GitActionKind[] {
  const actions: GitActionKind[] = [];
  if (commit.hidden !== true) {
    actions.push("commit");
  }
  if (push.hidden !== true) {
    actions.push("push");
  }
  return actions;
}
