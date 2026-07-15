// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small pure helpers that several split chunks import through the commons facade.
import { formatUnknownError } from "../boundaries/src-l0hb/runtime-helpers";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import { loadImageFileDataUrl } from "./image-file-data-url-runtime";

type ClipboardEventLike = Parameters<typeof copyToClipboard>[1];
export type LocalFilePointer = {
  path: string;
};

export const copyTextToClipboard = copyToClipboard;
export const errorToString = formatUnknownError;

export function isBlankText(value: string | null | undefined): boolean {
  return value == null || value.trim().length === 0;
}

export function normalizeBrowserUrl(value: string | null | undefined): string {
  const trimmed = value?.trim() ?? "";
  return trimmed === "about:blank" ? "" : trimmed;
}

export function fuzzyMatchScore(value: string, query: string): number {
  const source = value.toLowerCase();
  const needle = query.toLowerCase().trim();
  if (needle.length === 0) return 1;
  let score = 0;
  let searchIndex = 0;
  let previousMatchIndex = -1;
  for (const char of needle) {
    const matchIndex = source.indexOf(char, searchIndex);
    if (matchIndex === -1) return 0;
    score += previousMatchIndex + 1 === matchIndex ? 4 : 1;
    if (matchIndex === 0 || /[\s/_-]/.test(source[matchIndex - 1] ?? "")) {
      score += 2;
    }
    previousMatchIndex = matchIndex;
    searchIndex = matchIndex + 1;
  }
  return score / Math.max(source.length, needle.length);
}

export function getAbsoluteImageFilePath(
  src: string | null | undefined,
): string | null {
  const value = src?.trim() ?? "";
  if (value.length === 0) return null;
  if (/^(data|https?|blob):/iu.test(value)) return null;
  if (value.startsWith("file://")) {
    try {
      return decodeURIComponent(new URL(value).pathname);
    } catch {
      return value.slice("file://".length);
    }
  }
  if (/^(\/|[A-Za-z]:[\\/]|\\\\)/u.test(value)) return value;
  return null;
}

export function isDisplayableImageSrc(
  src: string | null | undefined,
): boolean {
  const value = src?.trim() ?? "";
  return /^(data|https?|blob):/iu.test(value);
}

export function parseLocalFilePointer(
  src: string | null | undefined,
): LocalFilePointer | null {
  const path = getAbsoluteImageFilePath(src);
  return path == null ? null : { path };
}

export function getLocalPathForFile(
  file: File,
  resolvePath?: (file: File) => string | null | undefined,
): string | null {
  const resolved = resolvePath?.(file);
  if (typeof resolved === "string" && resolved.trim().length > 0) {
    return resolved;
  }

  const record = file as File & {
    path?: string;
    localPath?: string;
    filepath?: string;
    webkitRelativePath?: string;
  };
  const path =
    record.path ??
    record.localPath ??
    record.filepath ??
    record.webkitRelativePath;
  return typeof path === "string" && path.trim().length > 0 ? path : null;
}

export function buildLocalFileSrc(pointer: LocalFilePointer | string): string {
  const path = typeof pointer === "string" ? pointer : pointer.path;
  if (path.startsWith("file://")) return path;
  const normalizedPath = path.replace(/\\/g, "/");
  const prefix = /^[A-Za-z]:\//u.test(normalizedPath) ? "file:///" : "file://";
  return `${prefix}${encodeURI(normalizedPath)}`;
}

export function loadFileDataUrl(
  pointer: LocalFilePointer | string,
  hostId?: string | null,
  queryClient?: Parameters<typeof loadImageFileDataUrl>[2],
): Promise<string> {
  const path = typeof pointer === "string" ? pointer : pointer.path;
  return loadImageFileDataUrl(path, hostId, queryClient);
}

export function toSentenceCase(
  value: string | null | undefined,
  options?: { style?: "sentence" | string },
): string {
  const normalized = (value ?? "")
    .replace(/[_-]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
  if (normalized.length === 0) return "";

  const text =
    options?.style === "sentence" ? normalized.toLowerCase() : normalized;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function openFileInEditor(params: {
  column?: number;
  cwd?: string | null;
  hostId?: string | null;
  line?: number | null;
  openFile?: (params: Record<string, unknown>) => Promise<unknown> | void;
  openInSidePanel?: boolean;
  path: string;
}): Promise<unknown> {
  return import("./file-open-runtime").then(({ openFileAtLine }) =>
    openFileAtLine(params),
  );
}

export function copyText(
  text: string,
  event?: ClipboardEventLike,
): Promise<boolean> {
  return copyToClipboard(text, event);
}
