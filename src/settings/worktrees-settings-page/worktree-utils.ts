// Restored from ref/webview/assets/worktrees-settings-page-KeLyIYZM.js
// Settings page for inspecting and deleting Codex-managed git worktrees.
import { normalizeWorkspacePath } from "../../boundaries/src-l0hb-mz-p";
import { getRepositoryPathFromGitDir } from "../../utils/worktree-paths";
export type CodexWorktree = {
  dir: string;
  gitDir?: string | null;
  [key: string]: unknown;
};
export type WorktreeConversation = {
  cwd?: string | null;
  hostId?: string | null;
  id: string;
  [key: string]: unknown;
};
export type WorkspaceRootOptions = {
  roots?: string[];
};
export type WorktreeRepositoryGroup = {
  key: string;
  repoRoot: string | null;
  worktrees: CodexWorktree[];
};
export function groupWorktreesByRepository(
  worktrees: CodexWorktree[],
): WorktreeRepositoryGroup[] {
  const groups = new Map<string, WorktreeRepositoryGroup>();
  for (const worktree of worktrees) {
    const repositoryRoot = getRepositoryPathFromGitDir(worktree.gitDir);
    const key = normalizePathForComparison(repositoryRoot ?? worktree.dir);
    const existingGroup = groups.get(key);
    if (existingGroup) {
      existingGroup.worktrees.push(worktree);
      continue;
    }
    groups.set(key, {
      key,
      repoRoot: repositoryRoot,
      worktrees: [worktree],
    });
  }
  return Array.from(groups.values());
}
export function filterWorktreesNotBackingWorkspaceRoots(
  worktrees: CodexWorktree[],
  workspaceRoots: string[],
): CodexWorktree[] {
  if (workspaceRoots.length === 0) return worktrees;
  return worktrees.filter(
    (worktree) =>
      !workspaceRoots.some((workspaceRoot) =>
        isPathInsideOrEqual(workspaceRoot, worktree.dir),
      ),
  );
}
export function filterConversationsForWorktree(
  worktreeDir: string,
  conversations: WorktreeConversation[],
): WorktreeConversation[] {
  if (conversations.length === 0) return [];
  const normalizedWorktreeDir = normalizePathForComparison(worktreeDir);
  return conversations.filter((conversation) => {
    const cwd = conversation.cwd;
    if (!cwd) return false;
    const normalizedCwd = normalizePathForComparison(cwd);
    return (
      normalizedCwd === normalizedWorktreeDir ||
      normalizedCwd.startsWith(`${normalizedWorktreeDir}/`)
    );
  });
}
export function sortWorktreesByConversationCount(
  worktrees: CodexWorktree[],
  visibleConversations: WorktreeConversation[],
): CodexWorktree[] {
  if (visibleConversations.length === 0) return worktrees;
  return worktrees
    .map((worktree, index) => ({
      worktree,
      index,
      conversationCount: filterConversationsForWorktree(
        worktree.dir,
        visibleConversations,
      ).length,
    }))
    .sort((left, right) => {
      const countDelta = right.conversationCount - left.conversationCount;
      return countDelta === 0 ? left.index - right.index : countDelta;
    })
    .map((item) => item.worktree);
}
export function getConversationHostId(
  conversation: WorktreeConversation,
): string {
  return conversation.hostId ?? "local";
}
function normalizePathForComparison(path: string): string {
  return normalizeWorkspacePath(path).replace(/\/+$/, "");
}
function isPathInsideOrEqual(candidatePath: string, basePath: string): boolean {
  const normalizedCandidate = normalizePathForComparison(candidatePath);
  const normalizedBase = normalizePathForComparison(basePath);
  return (
    normalizedCandidate === normalizedBase ||
    normalizedCandidate.startsWith(`${normalizedBase}/`)
  );
}
