// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Current Codex worktree path predicates shared by local conversation modules.
const DEFAULT_CODEX_HOME = "/.codex";

type CodexHomeEnv = {
  CODEX_HOME?: string;
  HOME?: string;
};

export function getCodexHome(env?: CodexHomeEnv): string {
  if (env?.CODEX_HOME != null && env.CODEX_HOME.length > 0) {
    return normalizePosixPath(env.CODEX_HOME);
  }
  if (env?.HOME != null && env.HOME.length > 0) {
    return joinPosixPath(normalizePosixPath(env.HOME), ".codex");
  }
  return DEFAULT_CODEX_HOME;
}

export function getCodexWorktreesPath(codexHome?: string): string {
  return joinPosixPath(
    normalizePosixPath(codexHome ?? getCodexHome()),
    "worktrees",
  );
}

export function isPathInCodexWorktree(
  candidatePath: string | null | undefined,
  codexHome?: string,
): boolean {
  if (!candidatePath) return false;
  let worktreesPath = normalizeForPathComparison(
    getCodexWorktreesPath(codexHome),
  );
  return normalizeForPathComparison(candidatePath).includes(worktreesPath);
}

function normalizeForPathComparison(filePath: string): string {
  let normalizedPath = normalizePosixPath(filePath);
  return isCaseInsensitivePath(filePath)
    ? normalizedPath.toLowerCase()
    : normalizedPath;
}

function normalizePosixPath(filePath: string): string {
  let slashPath = filePath.replaceAll("\\", "/");
  if (slashPath.length === 0) return ".";

  let isAbsolute = slashPath.startsWith("/");
  let hasTrailingSlash = slashPath.endsWith("/");
  let normalizedSegments: string[] = [];

  for (const segment of slashPath.split("/")) {
    if (segment.length === 0 || segment === ".") continue;
    if (segment === "..") {
      let lastSegment = normalizedSegments.at(-1);
      if (lastSegment != null && lastSegment !== "..") {
        normalizedSegments.pop();
      } else if (!isAbsolute) {
        normalizedSegments.push(segment);
      }
      continue;
    }
    normalizedSegments.push(segment);
  }

  let normalizedPath = normalizedSegments.join("/");
  if (normalizedPath.length === 0) {
    return isAbsolute ? "/" : ".";
  }
  if (isAbsolute) {
    normalizedPath = `/${normalizedPath}`;
  }
  if (hasTrailingSlash) {
    normalizedPath += "/";
  }
  return normalizedPath;
}

function joinPosixPath(...segments: string[]): string {
  return normalizePosixPath(segments.filter(Boolean).join("/"));
}

function isCaseInsensitivePath(filePath: string): boolean {
  return (
    /^[a-zA-Z]:[\\/]/.test(filePath) ||
    filePath.startsWith("//") ||
    filePath.startsWith("\\\\")
  );
}
