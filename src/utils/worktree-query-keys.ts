// Restored from ref/webview/assets/worktree-query-keys-CAJzb-Nd.js
// worktree-query-keys-CAJzb-Nd chunk restored from the Codex webview bundle.
export type GitWorktreeQueryKey = string[];

export function worktreeSnapshotRefQueryKey(
  repositoryPath: string,
  ref?: string | null,
): GitWorktreeQueryKey {
  const key = ["git", repositoryPath, "worktree-snapshot-ref"];
  return ref ? [...key, ref] : key;
}

export function codexWorktreesQueryKey(
  repositoryPath: string,
): GitWorktreeQueryKey {
  return ["git", repositoryPath, "codex-worktrees"];
}

export function managedWorktreeStateQueryKey(
  repositoryPath: string,
): GitWorktreeQueryKey {
  return ["git", repositoryPath, "managed-worktree-state"];
}

export const getCodexWorktreesQueryKey = codexWorktreesQueryKey;
export const getManagedWorktreeStateQueryKey = managedWorktreeStateQueryKey;

export function initWorktreeQueryKeysChunk(): void {}
