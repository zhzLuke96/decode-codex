// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
export const WINDOWS_DRIVE_PATH_RE = /^[A-Za-z]:[\\/]/;

const LEADING_WINDOWS_DRIVE_PATH_RE = /^\/[A-Za-z]:[\\/]/;
const UNC_PATH_RE = /^\\\\[^\\]+\\[^\\]+/;
const POSIX_UNC_PATH_RE = /^\/\/[^/]+\/[^/]+/;

export function normalizeRawWorkspacePath(path: string): string {
  const uncPath = path.match(/^\\\\\?\\UNC\\(.*)$/i)?.[1],
    withoutNamespace = uncPath == null ? path : `\\\\${uncPath}`,
    unwrappedPath =
      withoutNamespace.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/)?.[1] ??
      withoutNamespace;
  return unwrappedPath.replace(/\\/g, "/");
}

export function isRawAbsolutePath(path: string): boolean {
  return (
    (path.startsWith("/") && !path.startsWith("//")) ||
    WINDOWS_DRIVE_PATH_RE.test(path) ||
    UNC_PATH_RE.test(path) ||
    POSIX_UNC_PATH_RE.test(path)
  );
}

export function ensureLeadingSlashForDrivePath(path: string): string {
  return WINDOWS_DRIVE_PATH_RE.test(path) && !path.startsWith("/")
    ? `/${path}`
    : path;
}

export function joinRawWorkspacePath(root: string, path: string): string {
  if (!root) return path;
  if (!path) return root;
  return `${root.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

export function normalizePosixPath(path: string): string {
  const isAbsolute = path.startsWith("/"),
    trailingSlash = path.endsWith("/");
  const segments: string[] = [];
  for (const segment of path.split("/")) {
    if (segment === "" || segment === ".") continue;
    if (segment === "..") {
      const previousSegment = segments[segments.length - 1];
      if (previousSegment != null && previousSegment !== "..") segments.pop();
      else if (!isAbsolute) segments.push(segment);
      continue;
    }
    segments.push(segment);
  }
  const normalizedPath = `${isAbsolute ? "/" : ""}${segments.join("/")}`;
  if (normalizedPath === "") return isAbsolute ? "/" : ".";
  return trailingSlash && normalizedPath !== "/"
    ? `${normalizedPath}/`
    : normalizedPath;
}

export function normalizeFileUrlPath(pathname: string): string {
  return stripLeadingSlashFromDrivePath(
    pathname.replace(/\\/g, "/").replace(/^\/{3,}/, "//"),
  );
}

export function isNetworkSharePath(path: string): boolean {
  return UNC_PATH_RE.test(path) || POSIX_UNC_PATH_RE.test(path);
}

function stripLeadingSlashFromDrivePath(path: string): string {
  return LEADING_WINDOWS_DRIVE_PATH_RE.test(path) ? path.slice(1) : path;
}
