// Restored from ref/webview/assets/worktree-init-v2-page-CAOv319r.js
// Pending worktree route and pull request prompt helpers.

const PULL_REQUEST_MERGE_TASK_SECTION = "## Pull request merge task:";
const MY_REQUEST_SECTION = "## My request for Codex:";

export function buildPendingWorktreeRoute(pendingWorktreeId: string): string {
  return `/worktree-init-v2/${pendingWorktreeId}`;
}

export const routeToPendingWorktree = buildPendingWorktreeRoute;

export function extractPullRequestNumber(
  prompt?: string | null,
): string | number | null {
  if (prompt == null) return null;
  const taskSectionIndex = prompt.indexOf(PULL_REQUEST_MERGE_TASK_SECTION);
  if (taskSectionIndex === -1) return null;

  const taskSectionStart =
    taskSectionIndex + PULL_REQUEST_MERGE_TASK_SECTION.length;
  const taskSectionAndRemainder = prompt.slice(taskSectionStart);
  const requestSectionIndex =
    taskSectionAndRemainder.indexOf(MY_REQUEST_SECTION);
  const taskSection =
    requestSectionIndex === -1
      ? taskSectionAndRemainder
      : taskSectionAndRemainder.slice(0, requestSectionIndex);
  const match = taskSection.match(/^Pull request:\s*#(\d+)\s*$/m);
  if (match == null) return null;

  const pullRequestNumber = Number(match[1]);
  return Number.isSafeInteger(pullRequestNumber) ? pullRequestNumber : null;
}
