// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Human-readable formatting of elapsed durations expressed in milliseconds.

type FormatDurationOptions = {
  underOneSecond?: "null" | "zero";
  trimZeroUnits?: boolean;
};

export function initDurationFormatChunk(): void {}

export function formatDurationMs(
  durationMs: number,
  {
    underOneSecond = "null",
    trimZeroUnits = false,
  }: FormatDurationOptions = {},
): string | null {
  const clampedMs = Math.max(durationMs, 0);
  const totalSeconds = Math.floor(clampedMs / 1000);
  if (totalSeconds < 1) {
    return underOneSecond === "zero" ? "0s" : null;
  }
  if (totalSeconds < 60) {
    return `${totalSeconds}s`;
  }
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (days > 0 || hours > 0) {
    const parts: string[] = [];
    if (days > 0) {
      parts.push(`${days}d`);
    }
    if (hours > 0 || !trimZeroUnits) {
      parts.push(`${hours}h`);
    }
    if (minutes > 0 || !trimZeroUnits) {
      parts.push(`${minutes}m`);
    }
    if (seconds > 0 || !trimZeroUnits) {
      parts.push(`${seconds}s`);
    }
    return parts.join(" ");
  }
  return trimZeroUnits && seconds === 0
    ? `${minutes}m`
    : `${minutes}m ${seconds}s`;
}

export function formatCompactDurationMs(durationMs: number): string {
  return (
    formatDurationMs(durationMs, {
      underOneSecond: "zero",
      trimZeroUnits: true,
    }) ?? "0s"
  );
}
