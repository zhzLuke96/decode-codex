// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser comment preview, popup-window, and annotation settings boundary helpers.
import {
  appStoreScope,
  createScopedAtom,
} from "../runtime/onboarding-scope-runtime";

export type AnnotationScreenshotsMode = "always" | "necessary";

export const annotationScreenshotsModeAtom = createScopedAtom(
  appStoreScope,
  "always" as AnnotationScreenshotsMode,
);

export const annotationViewportBaseHeight = 180;

export const appWindowKind = {
  BROWSER_COMMENT_POPUP: "browser-comment-popup",
} as const;

export function buildBrowserCommentPopupFrameName({
  windowId,
  browserTabId,
  conversationId,
  sessionId,
}: {
  browserTabId: string;
  conversationId: string;
  sessionId: string;
  windowId: string;
}): string {
  return [
    "codex",
    windowId,
    browserTabId,
    conversationId,
    sessionId,
  ]
    .map(encodeFrameNamePart)
    .join(":");
}

export function _commentPreviewDecodeMentionTarget(value: string): string {
  return decodeMarkdownUrl(value.trim());
}

export function _commentPreviewMatchKnownMentionUri(
  uri: string,
): string | null {
  const normalized = uri.trim();
  if (normalized.startsWith("file://")) return normalized;
  if (normalized.startsWith("vscode://file/")) return normalized;
  if (/^[A-Za-z]:\\/.test(normalized)) return normalized;
  if (normalized.startsWith("/") || normalized.startsWith("\\\\")) {
    return normalized;
  }
  return null;
}

export function _commentPreviewResolveMentionAttachment(
  uri: string,
): { uri: string } | null {
  return _commentPreviewMatchKnownMentionUri(uri) == null ? null : { uri };
}

export function _commentPreviewUnescapeMarkdownText(value: string): string {
  return value.replace(/\\([\\[\]()])/g, "$1");
}

function encodeFrameNamePart(value: string): string {
  return encodeURIComponent(value).replace(/%/g, "_");
}

function decodeMarkdownUrl(value: string): string {
  const unescaped = value.replace(/\\([\\()])/g, "$1");
  try {
    return decodeURIComponent(unescaped);
  } catch {
    return unescaped;
  }
}
