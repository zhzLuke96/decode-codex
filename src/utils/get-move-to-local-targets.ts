// Restored from ref/webview/assets/get-move-to-local-targets-DiY2bn2e.js
import {
  joinFilesystemPath,
  normalizeFilesystemPath,
  toComparableFilesystemPath,
} from "../boundaries/rpc.facade";
type RepoWorktreeEntry = {
  root: string;
};
type GetMoveToLocalTargetsInput = {
  cwd: string;
  sourceWorktreeRoot: string;
  repoWorktreeEntries?: RepoWorktreeEntry[] | null;
};
export type MoveToLocalTarget = {
  gitRoot: string;
  workspaceRoot: string;
};

export function initGetMoveToLocalTargetsChunk(): void {}

export function getMoveToLocalTargets({
  cwd,
  sourceWorktreeRoot,
  repoWorktreeEntries,
}: GetMoveToLocalTargetsInput): MoveToLocalTarget[] {
  const relativePathInsideSource = getRelativePathInsideSourceWorktree({
    cwd,
    sourceWorktreeRoot,
  });
  const sourceWorktreeKey = toComparableFilesystemPath(sourceWorktreeRoot);
  return (repoWorktreeEntries ?? [])
    .filter(
      (entry) => toComparableFilesystemPath(entry.root) !== sourceWorktreeKey,
    )
    .map((entry) => {
      const workspaceRoot =
        relativePathInsideSource.length > 0
          ? joinFilesystemPath(entry.root, relativePathInsideSource)
          : entry.root;
      return {
        gitRoot: entry.root,
        workspaceRoot,
      };
    });
}
function getRelativePathInsideSourceWorktree({
  cwd,
  sourceWorktreeRoot,
}: Pick<GetMoveToLocalTargetsInput, "cwd" | "sourceWorktreeRoot">): string {
  const normalizedCwd = normalizeFilesystemPath(cwd);
  const normalizedSourceRoot = normalizeFilesystemPath(
    sourceWorktreeRoot,
  ).replace(/\/+$/, "");
  const comparableCwd = toComparableFilesystemPath(cwd);
  const comparableSourceRoot = toComparableFilesystemPath(
    sourceWorktreeRoot,
  ).replace(/\/+$/, "");
  if (comparableCwd === comparableSourceRoot) return "";
  const comparableSourceRootPrefix = `${comparableSourceRoot}/`;
  if (!comparableCwd.startsWith(comparableSourceRootPrefix)) return "";
  return normalizedCwd.slice(`${normalizedSourceRoot}/`.length);
}
