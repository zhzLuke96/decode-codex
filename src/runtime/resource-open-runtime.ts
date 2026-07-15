// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Browser/file URL open helpers for conversation output resources.
import {
  isAbsoluteFilesystemPath,
  normalizeFilesystemPath,
} from "../boundaries/rpc.facade";
import { vscodeApiF as vscodeMessageBus } from "../boundaries/vscode-api";
import { openImagePreviewTab } from "../image-side-panel/open-image-preview-tab";
import { sendHostRequest } from "./host-request-runtime";
import { handleExternalLinkClick } from "../utils/external-link/browser-actions";
import { normalizeExternalHref } from "../utils/external-link/normalize";
import type { ExternalLinkClickEvent } from "../utils/external-link/types";

export type OpenInBrowserFromEventOptions = {
  event: unknown;
  href: string;
  initiator?: string;
  originHostId?: string;
};

export type GeneratedImagePreviewTabRequest = {
  alt: string;
  attachmentSrc: string;
  downloadSrc: string;
  generatedImages: readonly unknown[];
  initialImageId: string;
  referrerPolicy?: string;
  src: string;
  title: string;
};

export type OpenFileResourceFromTurnOptions = {
  browserSidebarEnabled?: boolean;
  cwd?: string | null;
  hostConfig?: unknown;
  hostId?: string | null;
  openFile?: (params: Record<string, unknown>) => Promise<unknown> | void;
  openInSidePanel?: boolean;
  path: string;
  scope?: unknown;
};

export type TrackOpenInCodexBrowserOptions = {
  conversationId?: string | null;
  initiator?: string;
  source?: string;
  url: string;
};

type ImagePreviewDisplayMode = "always" | "toggle" | "none";

const ALWAYS_PREVIEW_IMAGE_EXTENSIONS = new Set([
  "avif",
  "bmp",
  "gif",
  "ico",
  "jpeg",
  "jpg",
  "png",
  "tif",
  "tiff",
  "webp",
]);

function getPathExtension(path: string): string | null {
  const lowerPath = path.toLowerCase();
  const separatorIndex = Math.max(
    lowerPath.lastIndexOf("/"),
    lowerPath.lastIndexOf("\\"),
  );
  const basename =
    separatorIndex >= 0 ? lowerPath.slice(separatorIndex + 1) : lowerPath;
  const extensionIndex = basename.lastIndexOf(".");
  return extensionIndex > 0 && extensionIndex < basename.length - 1
    ? basename.slice(extensionIndex + 1)
    : null;
}

function getClickDisposition({
  button,
  ctrlKey,
  metaKey,
}: ExternalLinkClickEvent): "new-tab" | undefined {
  if (button === 1 || metaKey || ctrlKey) return "new-tab";
}

function isLocalFileOpenTarget(href: string): boolean {
  const trimmedHref = href.trim();
  return (
    trimmedHref.length > 0 &&
    (/^file:\/\//i.test(trimmedHref) || isAbsoluteFilesystemPath(trimmedHref))
  );
}

function isNonFileUrlLikePath(path: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(path) && !/^file:/i.test(path);
}

export function initResourceOpenRuntime(): void {}

export function initLocalImageInliningRuntime(): void {}

export function initGeneratedImagePreviewRuntime(): void {}

export function toAppFsUrl(path: string): string {
  return normalizeExternalHref(path);
}

export function resolveInlineableLocalImagePath(path: string): string | null {
  const trimmedPath = path.trim();
  if (trimmedPath.length === 0 || isNonFileUrlLikePath(trimmedPath)) {
    return null;
  }
  if (getImagePreviewDisplayMode(trimmedPath) === "none") return null;
  if (/^file:\/\//i.test(trimmedPath)) return trimmedPath;

  const normalizedPath = normalizeFilesystemPath(trimmedPath);
  return isAbsoluteFilesystemPath(normalizedPath) ? normalizedPath : null;
}

export function getImagePreviewDisplayMode(
  path: string,
): ImagePreviewDisplayMode {
  const extension = getPathExtension(path);
  if (extension == null) return "none";
  if (extension === "svg") return "toggle";
  return ALWAYS_PREVIEW_IMAGE_EXTENSIONS.has(extension) ? "always" : "none";
}

function openLocalFileTargetInBrowser({
  event,
  href,
  initiator,
  originHostId,
}: OpenInBrowserFromEventOptions): void {
  const clickEvent = event as ExternalLinkClickEvent;
  clickEvent.preventDefault();
  vscodeMessageBus.dispatchMessage("open-in-browser", {
    disposition: getClickDisposition(clickEvent),
    initiator,
    originHostId,
    source: "manual",
    url: toAppFsUrl(href),
  });
}

export function openInBrowserFromEvent(
  options: OpenInBrowserFromEventOptions,
): void {
  const clickEvent = options.event as ExternalLinkClickEvent;
  if (
    handleExternalLinkClick({
      event: clickEvent,
      href: options.href,
      initiator: options.initiator,
      originHostId: options.originHostId,
    })
  ) {
    return;
  }

  if (isLocalFileOpenTarget(options.href)) {
    openLocalFileTargetInBrowser(options);
  }
}

export function openGeneratedImagePreviewTab(
  scope: unknown,
  request: GeneratedImagePreviewTabRequest,
): boolean {
  return openImagePreviewTab(scope, request);
}

export function openFileResourceFromTurn({
  browserSidebarEnabled,
  cwd,
  hostConfig,
  hostId,
  openFile,
  openInSidePanel,
  path,
}: OpenFileResourceFromTurnOptions): Promise<unknown> | void {
  const params = {
    browserSidebarEnabled,
    cwd,
    hostConfig,
    hostId,
    openInSidePanel,
    path,
  };
  if (openFile != null) return openFile(params);
  return sendHostRequest("open-file", { params });
}

export function trackOpenInCodexBrowser({
  conversationId,
  initiator,
  source = "manual",
  url,
}: TrackOpenInCodexBrowserOptions): void {
  vscodeMessageBus.dispatchMessage("open-in-browser", {
    conversationId,
    initiator,
    openTarget: "in-app-browser",
    source,
    url: normalizeExternalHref(url),
  });
}
