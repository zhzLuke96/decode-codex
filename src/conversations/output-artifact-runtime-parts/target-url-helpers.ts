// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import {
  isNetworkSharePath,
  normalizeFileUrlPath,
  WINDOWS_DRIVE_PATH_RE,
} from "./path-helpers";

const LOCAL_HTTP_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
  "::1",
]);

export function isFileUrlLikeTargetValue(target: string): boolean {
  if (getLocalHttpPort(target) != null) return true;
  let url: URL;
  try {
    url = new URL(target);
  } catch {
    return false;
  }
  return url.protocol === "file:" ? isLocalFileUrl(url) : false;
}

export function mapTurnStatusToOutputStatusValue(status: string): string {
  switch (status) {
    case "completed":
      return "complete";
    case "interrupted":
      return "cancelled";
    case "failed":
      return "complete";
    case "inProgress":
      return "in_progress";
    default:
      return undefined as unknown as string;
  }
}

export function normalizeHrefValue(href: string): string {
  return /^www\./i.test(href) ? `https://${href}` : href;
}

function getLocalHttpPort(target: string): number | null {
  let url: URL;
  try {
    url = new URL(target);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (!LOCAL_HTTP_HOSTS.has(url.hostname.toLowerCase())) return null;
  return Number(url.port || (url.protocol === "https:" ? 443 : 80));
}

function isLocalFileUrl(url: URL): boolean {
  const hostname = url.hostname.toLowerCase();
  if (hostname.length > 0 && hostname !== "localhost") return false;

  const pathname = normalizeFileUrlPath(url.pathname);
  return WINDOWS_DRIVE_PATH_RE.test(pathname)
    ? true
    : !isNetworkSharePath(pathname);
}
