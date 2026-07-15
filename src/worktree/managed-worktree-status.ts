// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers used by managed Codex-worktree status checks.

const WINDOWS_DRIVE_RE = /^[A-Za-z]:[\\/]/;
const UNC_RE = /^\\\\[^\\]+\\[^\\]+/;
const POSIX_UNC_RE = /^\/\/[^/]+\/[^/]+/;

export function initManagedWorktreeStatusChunk(): void {
  void resolveManagedWorktreeRepositoryPath;
}

export function resolveManagedWorktreeRepositoryPath(
  cwd: string | null | undefined,
  worktreesSegment: string | null | undefined,
): string | null {
  if (!cwd || !worktreesSegment) return null;

  const normalizedCwd = stripTrailingSlashes(normalizePath(cwd));
  const normalizedSegment = stripTrailingSlashes(
    normalizePath(worktreesSegment),
  );
  const shouldCompareCaseInsensitive =
    isWindowsDrivePath(normalizedCwd) || isUncPath(normalizedCwd);
  const cwdForCompare = shouldCompareCaseInsensitive
    ? normalizedCwd.toLowerCase()
    : normalizedCwd;
  const segmentPrefix = `${
    shouldCompareCaseInsensitive
      ? normalizedSegment.toLowerCase()
      : normalizedSegment
  }/`;

  if (!cwdForCompare.startsWith(segmentPrefix)) return null;

  const worktreeParts = normalizedCwd
    .slice(segmentPrefix.length)
    .split("/")
    .filter(Boolean);
  return worktreeParts.length < 2
    ? null
    : `${normalizedSegment}/${worktreeParts[0]}/${worktreeParts[1]}`;
}

function normalizePath(path: string): string {
  return stripWindowsNamespace(path).replace(/\\/g, "/");
}

function stripTrailingSlashes(path: string): string {
  return path.replace(/\/+$/, "");
}

function stripWindowsNamespace(path: string): string {
  const uncNamespaceMatch = path.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (uncNamespaceMatch != null) return `\\\\${uncNamespaceMatch[1]}`;

  return path.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/)?.[1] ?? path;
}

function isWindowsDrivePath(path: string): boolean {
  return WINDOWS_DRIVE_RE.test(path);
}

function isUncPath(path: string): boolean {
  return UNC_RE.test(path) || POSIX_UNC_RE.test(path);
}
