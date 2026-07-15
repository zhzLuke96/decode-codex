// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared browser-download registry, filtering helpers, icons, and file-type helpers.
import type { ComponentProps, ComponentType, SVGProps } from "react";
import type { IntlShape } from "../vendor/react-intl";

import {
  FILE_ICON_COMPONENTS,
  getFileIcon,
  getFileIconKey,
} from "../utils/get-file-icon";
import {
  formatDownloadActionError,
  type DownloadActionFailure,
} from "./download-formatting";

type DownloadEntry = {
  browserConversationId?: string | null;
  conversationId?: string | null;
  receivedBytes?: number;
  status?: string | null;
  updatedAtMs?: number;
  [key: string]: unknown;
};

type DownloadsRegistry = {
  downloads: DownloadEntry[];
};

type DownloadRegistryListener = () => void;

const DOWNLOAD_PROGRESS_NOTIFY_INTERVAL_MS = 500;

let downloadsRegistrySnapshot: DownloadsRegistry | null = { downloads: [] };
let lastProgressNotifyAtMs: number | null = null;
let pendingProgressNotifyTimer: ReturnType<typeof setTimeout> | null = null;
const downloadsRegistryListeners = new Set<DownloadRegistryListener>();

export const downloadsChromiumPageId = "chrome://downloads/";

export const fileTypeIconMap = FILE_ICON_COMPONENTS as Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
>;

export function getDownloadsRegistrySnapshot(): DownloadsRegistry | null {
  return downloadsRegistrySnapshot;
}

export const getDownloadsSnapshot = getDownloadsRegistrySnapshot;

export function subscribeToDownloadsRegistry(
  listener: DownloadRegistryListener,
): () => void {
  downloadsRegistryListeners.add(listener);
  listener();
  return () => {
    downloadsRegistryListeners.delete(listener);
    if (
      downloadsRegistryListeners.size === 0 &&
      pendingProgressNotifyTimer != null
    ) {
      clearTimeout(pendingProgressNotifyTimer);
      pendingProgressNotifyTimer = null;
    }
  };
}

export const subscribeToDownloads = subscribeToDownloadsRegistry;

export function updateDownloadsRegistry(
  nextRegistry: DownloadsRegistry | null,
): void {
  const shouldThrottle = isOnlyInProgressDownloadProgressChanged(
    downloadsRegistrySnapshot,
    nextRegistry,
  );
  downloadsRegistrySnapshot = nextRegistry;
  if (shouldThrottle) scheduleThrottledRegistryNotify();
  else notifyDownloadsRegistryListeners();
}

export function selectConversationDownloads(
  downloads: unknown,
  conversationId: string | null | undefined,
): DownloadEntry[] {
  const items = Array.isArray(downloads)
    ? downloads
    : Array.isArray((downloads as DownloadsRegistry | null)?.downloads)
      ? (downloads as DownloadsRegistry).downloads
      : [];
  if (conversationId == null) return items as DownloadEntry[];
  return (items as DownloadEntry[]).filter(
    (download) =>
      download.conversationId === conversationId ||
      download.browserConversationId === conversationId,
  );
}

export const filterDownloadsForConversation = selectConversationDownloads;

export function resolveFileTypeFromPath(
  filePath?: string | null,
  mimeType?: string | false | null,
): string {
  return getFileIconKey(filePath, mimeType);
}

export function getFileTypeIconForName(
  filePath?: string | null,
  mimeType?: string | false | null,
): ComponentType<SVGProps<SVGSVGElement>> {
  return getFileIcon(filePath, mimeType);
}

export function describeDownloadActionFailure(
  intl: IntlShape,
  failure?: DownloadActionFailure | { reason?: unknown } | null,
): string {
  const reason =
    failure != null && typeof failure.reason === "string"
      ? ({ reason: failure.reason } as DownloadActionFailure)
      : null;
  return (
    formatDownloadActionError(intl, reason) ??
    intl.formatMessage({
      id: "downloads.action.genericError",
      defaultMessage: "Unable to complete the download action",
      description: "Generic error shown when a download action fails",
    })
  );
}

export function DownloadsEmptyIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 2.25v6.1m0 0 2.15-2.15M8 8.35 5.85 6.2M3 9.75v1.5A2.75 2.75 0 0 0 5.75 14h4.5A2.75 2.75 0 0 0 13 11.25v-1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function CodexAgentSparkIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 1.75 9.1 5.5 12.85 6.6 9.1 7.7 8 11.45 6.9 7.7 3.15 6.6 6.9 5.5 8 1.75Z"
        fill="currentColor"
      />
      <path
        d="m12 10.25.45 1.3 1.3.45-1.3.45-.45 1.3-.45-1.3-1.3-.45 1.3-.45.45-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function notifyDownloadsRegistryListeners(): void {
  if (pendingProgressNotifyTimer != null) {
    clearTimeout(pendingProgressNotifyTimer);
    pendingProgressNotifyTimer = null;
  }
  lastProgressNotifyAtMs = Date.now();
  for (const listener of downloadsRegistryListeners) listener();
}

function scheduleThrottledRegistryNotify(): void {
  if (downloadsRegistryListeners.size === 0) return;
  const now = Date.now();
  if (
    lastProgressNotifyAtMs == null ||
    now < lastProgressNotifyAtMs ||
    now - lastProgressNotifyAtMs >= DOWNLOAD_PROGRESS_NOTIFY_INTERVAL_MS
  ) {
    notifyDownloadsRegistryListeners();
    return;
  }
  pendingProgressNotifyTimer ??= setTimeout(
    () => {
      pendingProgressNotifyTimer = null;
      notifyDownloadsRegistryListeners();
    },
    DOWNLOAD_PROGRESS_NOTIFY_INTERVAL_MS - (now - lastProgressNotifyAtMs),
  );
}

function isOnlyInProgressDownloadProgressChanged(
  previous: DownloadsRegistry | null,
  next: DownloadsRegistry | null,
): boolean {
  if (previous == null || next == null) return false;
  if (previous.downloads.length !== next.downloads.length) return false;

  let hasProgressChange = false;
  for (let index = 0; index < next.downloads.length; index += 1) {
    const {
      receivedBytes: previousReceivedBytes,
      updatedAtMs: previousUpdatedAtMs,
      ...previousRest
    } = previous.downloads[index];
    const {
      receivedBytes: nextReceivedBytes,
      updatedAtMs: nextUpdatedAtMs,
      ...nextRest
    } = next.downloads[index];

    if (!shallowEqual(previousRest, nextRest)) return false;
    if (
      previousReceivedBytes !== nextReceivedBytes ||
      previousUpdatedAtMs !== nextUpdatedAtMs
    ) {
      if (nextRest.status !== "in_progress") return false;
      hasProgressChange = true;
    }
  }
  return hasProgressChange;
}

function shallowEqual(
  left: Record<string, unknown>,
  right: Record<string, unknown>,
) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  return leftKeys.every((key) => Object.is(left[key], right[key]));
}
