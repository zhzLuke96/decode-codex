// Restored from ref/webview/assets/src-l0hb-mz-p.js
const WINDOWS_DRIVE_RE = /^[A-Za-z]:[\\/]/;
const LEADING_WINDOWS_DRIVE_RE = /^\/[A-Za-z]:[\\/]/;
const UNC_RE = /^\\\\[^\\]+\\[^\\]+/;
const POSIX_UNC_RE = /^\/\/[^/]+\/[^/]+/;

export function srcIr(path: string): string {
  return path.replace(/\\/g, "/");
}

export function srcFr(path: string): string {
  return WINDOWS_DRIVE_RE.test(path) && !path.startsWith("/")
    ? `/${path}`
    : path;
}

export function _srcN(path: string): string {
  return LEADING_WINDOWS_DRIVE_RE.test(path) ? path.slice(1) : path;
}

export function srcMr(path: string): boolean {
  return (
    (path.startsWith("/") && !path.startsWith("//")) ||
    WINDOWS_DRIVE_RE.test(path) ||
    UNC_RE.test(path) ||
    POSIX_UNC_RE.test(path)
  );
}

export const srcNr = srcMr;
export const srcJ = srcMr;
export const isCodexWorktreePath = srcMr;
export const isAbsolutePath = srcMr;
export const isAbsoluteOrWindowsPath = srcMr;

export function normalizeWorkspacePath(path: string): string {
  const withoutNamespace = path.match(/^\\\\\?\\UNC\\(.*)$/i)?.[1];
  const unwrapped = withoutNamespace == null ? path : `\\\\${withoutNamespace}`;
  const normalized = srcIr(
    unwrapped.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/)?.[1] ?? unwrapped,
  ).toLowerCase();
  const wsl = normalized.match(
    /^\/\/(?:wsl\$|wsl\.localhost)\/[^/]+(?:\/(.*))?$/,
  );
  if (wsl) return wsl[1] != null && wsl[1].length > 0 ? `/${wsl[1]}` : "/";
  const drive = normalized.match(/^\/?([a-z]):(?:\/(.*))?$/);
  if (drive)
    return drive[2] ? `/mnt/${drive[1]}/${drive[2]}` : `/mnt/${drive[1]}`;
  return normalized;
}

export const normalizeProjectRoot = normalizeWorkspacePath;
export const normalizeGitRoot = normalizeWorkspacePath;

export function normalizeConversationId(value: unknown): string {
  return String(value ?? "").trim();
}

export const srcAi = normalizeConversationId;
export const localConversationRoutePattern = "/local/:conversationId";

export function createLocalConversationPath(conversationId: unknown): string {
  const normalizedId = normalizeConversationId(conversationId);
  return `/local/${encodeURIComponent(normalizedId)}`;
}

export function srcXn(path: string): boolean {
  if (path.length === 0) return false;
  if (
    srcMr(path) ||
    path.startsWith("~/") ||
    path.startsWith("./") ||
    path.startsWith("../")
  ) {
    return true;
  }
  return /^[^:\s]+[\\/][^:\s]+/.test(path) || /^[A-Za-z]:/.test(path);
}

export function srcZn(path: string): string {
  const decodedPath = srcIr(path);
  return LEADING_WINDOWS_DRIVE_RE.test(decodedPath)
    ? decodedPath.slice(1)
    : decodedPath;
}
