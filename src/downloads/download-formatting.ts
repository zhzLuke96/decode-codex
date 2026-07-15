// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Formatting helpers and status predicates for browser download items.
import type { IntlShape } from "../vendor/react-intl";

export type DownloadStatus =
  | "started"
  | "in_progress"
  | "paused"
  | "canceled"
  | "complete"
  | "failed";

export type DownloadItem = {
  status: DownloadStatus;
  receivedBytes: number;
  totalBytes: number;
  startedAtMs: number;
  updatedAtMs: number;
};

export type DownloadActionFailure = {
  reason:
    | "download-not-cancelable"
    | "download-not-pausable"
    | "download-not-resumable"
    | "missing-download"
    | "open-failed"
    | "show-in-folder-failed";
};

export const ACTIVE_DOWNLOAD_STATUSES: ReadonlySet<DownloadStatus> =
  new Set<DownloadStatus>(["started", "in_progress", "paused"]);

export const TERMINAL_DOWNLOAD_STATUSES: ReadonlySet<DownloadStatus> =
  new Set<DownloadStatus>(["canceled", "complete", "failed"]);

export const DOWNLOAD_DETAIL_SEPARATOR = "·";
export const DOWNLOAD_METADATA_SEPARATOR = DOWNLOAD_DETAIL_SEPARATOR;

export function isActiveDownloadStatus(status: DownloadStatus): boolean {
  return (
    status === "started" || status === "in_progress" || status === "paused"
  );
}

export function formatDownloadTime(
  timestampMs: number,
  intl: IntlShape,
): string {
  return intl.formatTime(timestampMs, {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatDownloadSpeed(
  download: DownloadItem,
  intl: IntlShape,
): string {
  const elapsedSeconds = Math.max(
    1,
    (download.updatedAtMs - download.startedAtMs) / 1000,
  );
  return `${formatByteSize(download.receivedBytes / elapsedSeconds, intl)}/s`;
}

export const formatDownloadTransferRate = formatDownloadSpeed;

export function formatRemainingDownloadTime(
  download: DownloadItem,
  intl: IntlShape,
): string {
  if (download.receivedBytes <= 0) {
    return intl.formatMessage({
      id: "downloads.status.remainingStarting",
      defaultMessage: "starting",
      description: "Remaining download time while speed is not known yet",
    });
  }
  if (download.totalBytes <= download.receivedBytes) {
    return intl.formatMessage({
      id: "downloads.status.remainingNow",
      defaultMessage: "now",
      description: "Remaining download time when the download is nearly done",
    });
  }
  const elapsedSeconds = Math.max(
    1,
    (download.updatedAtMs - download.startedAtMs) / 1000,
  );
  const bytesPerSecond = download.receivedBytes / elapsedSeconds;
  const remainingSeconds = Math.ceil(
    (download.totalBytes - download.receivedBytes) / bytesPerSecond,
  );
  if (remainingSeconds < 60) {
    return intl.formatMessage(
      {
        id: "downloads.status.remainingSeconds",
        defaultMessage: "{seconds}s",
        description: "Short remaining download time in seconds",
      },
      { seconds: remainingSeconds },
    );
  }
  const remainingMinutes = Math.ceil(remainingSeconds / 60);
  return remainingMinutes < 60
    ? intl.formatMessage(
        {
          id: "downloads.status.remainingMinutes",
          defaultMessage: "{minutes}m",
          description: "Short remaining download time in minutes",
        },
        { minutes: remainingMinutes },
      )
    : intl.formatMessage(
        {
          id: "downloads.status.remainingHours",
          defaultMessage: "{hours}h",
          description: "Short remaining download time in hours",
        },
        { hours: Math.ceil(remainingMinutes / 60) },
      );
}

export const formatDownloadTimeRemaining = formatRemainingDownloadTime;

export function formatDownloadProgress(
  download: DownloadItem,
  intl: IntlShape,
): string {
  if (download.status === "complete") {
    return formatByteSize(download.receivedBytes, intl);
  }
  return download.totalBytes > 0
    ? intl.formatMessage(
        {
          id: "downloads.status.progressSize",
          defaultMessage: "{received} of {total}",
          description:
            "Downloaded bytes and total bytes for an active download",
        },
        {
          received: formatByteSize(download.receivedBytes, intl),
          total: formatByteSize(download.totalBytes, intl),
        },
      )
    : formatByteSize(download.receivedBytes, intl);
}

export const formatDownloadByteProgress = formatDownloadProgress;

export const formatDownloadTimestamp = formatDownloadTime;

export function formatByteSize(byteCount: number, intl: IntlShape): string {
  if (!Number.isFinite(byteCount) || byteCount <= 0) {
    return intl.formatNumber(0, {
      style: "unit",
      unit: "byte",
      unitDisplay: "long",
    });
  }
  if (byteCount < 1024) {
    return intl.formatNumber(byteCount, {
      style: "unit",
      unit: "byte",
      unitDisplay: "long",
    });
  }
  const units = ["kilobyte", "megabyte", "gigabyte", "terabyte"];
  let scaledValue = byteCount / 1024;
  let unitIndex = 0;
  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    scaledValue /= 1024;
    unitIndex += 1;
  }
  return intl.formatNumber(scaledValue, {
    maximumFractionDigits: 1,
    style: "unit",
    unit: units[unitIndex],
    unitDisplay: "short",
  });
}

export function formatDownloadActionError(
  intl: IntlShape,
  failure: DownloadActionFailure | null | undefined,
): string | undefined {
  if (failure == null) {
    return intl.formatMessage({
      id: "downloads.action.genericError",
      defaultMessage: "Unable to complete the download action",
      description: "Generic error shown when a download action fails",
    });
  }
  switch (failure.reason) {
    case "download-not-cancelable":
      return intl.formatMessage({
        id: "downloads.action.cancelError",
        defaultMessage: "This download cannot be canceled",
        description: "Error shown when a download cannot be canceled",
      });
    case "download-not-pausable":
      return intl.formatMessage({
        id: "downloads.action.pauseError",
        defaultMessage: "This download cannot be paused",
        description: "Error shown when a download cannot be paused",
      });
    case "download-not-resumable":
      return intl.formatMessage({
        id: "downloads.action.resumeError",
        defaultMessage: "This download cannot be resumed",
        description: "Error shown when a download cannot be resumed",
      });
    case "missing-download":
      return intl.formatMessage({
        id: "downloads.action.missingError",
        defaultMessage: "This download is no longer available",
        description: "Error shown when a download no longer exists",
      });
    case "open-failed":
      return intl.formatMessage({
        id: "downloads.action.openError",
        defaultMessage: "Unable to open the downloaded file",
        description: "Error shown when a downloaded file cannot be opened",
      });
    case "show-in-folder-failed":
      return intl.formatMessage({
        id: "downloads.action.showInFolderError",
        defaultMessage: "Unable to show the downloaded file in its folder",
        description:
          "Error shown when a downloaded file cannot be revealed in its folder",
      });
  }
}
