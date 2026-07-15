// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Path helpers for the review diff model: render a repo-relative display path for a
// file, and resolve a git-relative path back to an absolute path under the repo root.

import nodePath from "node:path";
import {
  normalizePath,
  isAbsolutePath,
  basename,
  joinPath,
  pathIsWindowsStyle,
  pathIsCaseInsensitive,
} from "../boundaries/onboarding-commons-externals.facade";

// Computes a relative path between two paths while comparing segments
// case-insensitively (used on Windows / case-insensitive filesystems).
function relativePathCaseInsensitive(fromPath: string, toPath: string): string {
  const fromSegments = normalizePath(fromPath).split("/").filter(Boolean);
  const toSegments = normalizePath(toPath).split("/").filter(Boolean);
  let commonPrefixLength = 0;
  while (
    fromSegments[commonPrefixLength] != null &&
    fromSegments[commonPrefixLength]?.toLowerCase() ===
      toSegments[commonPrefixLength]?.toLowerCase()
  ) {
    commonPrefixLength += 1;
  }
  return [
    ...fromSegments.slice(commonPrefixLength).fill(".."),
    ...toSegments.slice(commonPrefixLength),
  ].join("/");
}

export function toRepoRelativeDisplayPath({
  cwd,
  path,
}: {
  cwd: string | null;
  path: string;
}): string {
  if (cwd == null || !isAbsolutePath(path)) return path;
  const base = joinPath("", cwd);
  const relative =
    pathIsWindowsStyle(cwd) || pathIsCaseInsensitive(cwd)
      ? relativePathCaseInsensitive(base, path)
      : normalizePath(nodePath.relative(base, path));
  return relative === "" ? basename(path) : relative;
}

export function toAbsoluteGitPath({
  gitRoot,
  gitPath,
}: {
  gitRoot: string | null;
  gitPath: string;
}): string {
  const normalized = normalizePath(gitPath);
  return gitRoot == null
    ? normalized
    : normalizePath(joinPath(gitRoot, normalized));
}

export function toGitRelativePathKey({
  gitRoot,
  gitPath,
}: {
  gitRoot: string | null;
  gitPath: string;
}): string {
  if (isAbsolutePath(gitPath)) return normalizePath(gitPath);
  return toAbsoluteGitPath({ gitRoot, gitPath });
}

export function pathsEqualWithinRoot(
  leftPath: string,
  rightPath: string,
  root?: string | null,
): boolean {
  const normalizeComparablePath = (path: string) =>
    normalizePath(root != null && !isAbsolutePath(path) ? joinPath(root, path) : path);
  return normalizeComparablePath(leftPath) === normalizeComparablePath(rightPath);
}
