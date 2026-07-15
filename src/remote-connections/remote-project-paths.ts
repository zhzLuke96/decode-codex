// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Remote project path normalization and matching helpers used by setup dialogs.
export interface RemoteProjectRecord {
  hostId?: string | null;
  id?: string | null;
  label?: string | null;
  path?: string | null;
  remotePath?: string | null;
}

function normalizeSeparators(path: string): string {
  return path.trim().replace(/\\/g, "/");
}

function collapseRepeatedSlashes(path: string): string {
  if (path.startsWith("//")) return `//${path.slice(2).replace(/\/+/g, "/")}`;
  return path.replace(/\/+/g, "/");
}

function isWindowsDriveRoot(path: string): boolean {
  return /^\/?[A-Za-z]:\/$/.test(path);
}

function trimTrailingRemoteSlashes(path: string): string {
  let normalizedPath = path;
  while (
    normalizedPath.length > 1 &&
    normalizedPath.endsWith("/") &&
    !isWindowsDriveRoot(normalizedPath)
  ) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  return normalizedPath;
}

function isCaseInsensitiveRemotePath(path: string): boolean {
  return /^\/?[A-Za-z]:\//.test(path) || path.startsWith("//");
}

export function normalizeRemotePath(path: string): string {
  return trimTrailingRemoteSlashes(
    collapseRepeatedSlashes(normalizeSeparators(path)),
  );
}

export function toComparableRemotePath(path: string): string {
  const normalizedPath = normalizeRemotePath(path);
  return isCaseInsensitiveRemotePath(normalizedPath)
    ? normalizedPath.toLowerCase()
    : normalizedPath;
}

export function isAbsoluteRemotePath(path: string): boolean {
  const normalizedPath = normalizeSeparators(path);
  return (
    (normalizedPath.startsWith("/") && !normalizedPath.startsWith("//")) ||
    /^[A-Za-z]:\//.test(normalizedPath) ||
    /^\/\/[^/]+\/[^/]+/.test(normalizedPath)
  );
}

export function getRemoteProjectLabelFromPath(path: string): string {
  const normalizedPath = normalizeRemotePath(path);
  if (normalizedPath === "/") return "/";
  const label = normalizedPath.split("/").filter(Boolean).at(-1);
  return label == null || label.length === 0 ? "Remote project" : label;
}

export function findRemoteProjectForPath(
  remoteProjects: readonly RemoteProjectRecord[] | null | undefined,
  hostId: string | null | undefined,
  remotePath: string | null | undefined,
): RemoteProjectRecord | null {
  if (hostId == null || remotePath == null || !Array.isArray(remoteProjects)) {
    return null;
  }
  const comparablePath = toComparableRemotePath(remotePath);
  return (
    remoteProjects.find((project) => {
      const projectPath = project.remotePath ?? project.path;
      return (
        project.hostId === hostId &&
        projectPath != null &&
        toComparableRemotePath(projectPath) === comparablePath
      );
    }) ?? null
  );
}
