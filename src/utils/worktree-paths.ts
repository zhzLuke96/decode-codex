// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ozpabocf-B_lr_-Fk.js
// Supersedes historical restore from ref/webview/assets/worktree-paths-Cm8IyBTl.js.
// Helpers for deriving repository paths from Git worktree metadata paths.
import { normalizeFilesystemPath } from "../boundaries/rpc.facade";
import { once } from "../runtime/commonjs-interop";

const WINDOWS_DRIVE_PATH_PATTERN = /^[a-zA-Z]:\//;
const UNC_PATH_PATTERN = /^\/\/[^/]+\/[^/]+/;

export const initWorktreePathsChunk = once(() => {});

export function getRepositoryPathFromGitDir(
  gitDirPath: string | null,
): string | null {
  if (!gitDirPath) return null;
  const normalizedGitDir = normalizeFilesystemPath(gitDirPath).replace(
    /\/+$/,
    "",
  );
  const worktreeSegmentIndex = normalizedGitDir.indexOf("/.git/worktrees/");
  return worktreeSegmentIndex === -1
    ? normalizedGitDir.endsWith("/.git")
      ? normalizedGitDir.slice(0, -5)
      : null
    : normalizedGitDir.slice(0, worktreeSegmentIndex);
}

export function getWorktreePathFromGitDir(
  gitDirPath: string | null,
  repositoryPath: string | null,
): string | null {
  if (!gitDirPath || !repositoryPath) return null;
  const normalizedGitDir = normalizeFilesystemPath(gitDirPath).replace(
    /\/+$/,
    "",
  );
  const normalizedRepositoryPath = normalizeFilesystemPath(
    repositoryPath,
  ).replace(/\/+$/, "");
  const isCaseInsensitivePath =
    isWindowsFilesystemPath(normalizedGitDir) ||
    isWindowsFilesystemPath(normalizedRepositoryPath);
  const comparableGitDir = isCaseInsensitivePath
    ? normalizedGitDir.toLowerCase()
    : normalizedGitDir;
  const repositoryPrefix = `${
    isCaseInsensitivePath
      ? normalizedRepositoryPath.toLowerCase()
      : normalizedRepositoryPath
  }/`;
  if (!comparableGitDir.startsWith(repositoryPrefix)) return null;
  const relativeParts = normalizedGitDir
    .slice(repositoryPrefix.length)
    .split("/")
    .filter(Boolean);
  return relativeParts.length < 2
    ? null
    : `${normalizedRepositoryPath}/${relativeParts[0]}/${relativeParts[1]}`;
}

function isWindowsFilesystemPath(path: string): boolean {
  return WINDOWS_DRIVE_PATH_PATTERN.test(path) || UNC_PATH_PATTERN.test(path);
}
