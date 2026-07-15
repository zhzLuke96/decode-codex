// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Display formatters for live child-process metrics shown in the process manager table.

const KB_PER_MB = 1024;
const KB_PER_GB = 1024 * 1024;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

export function formatMemoryUsage(rssKb: number | null | undefined): string {
  if (rssKb == null || !Number.isFinite(rssKb)) return "n/a";
  if (rssKb >= KB_PER_GB) return `${(rssKb / KB_PER_GB).toFixed(2)} GB`;
  if (rssKb >= KB_PER_MB) return `${(rssKb / KB_PER_MB).toFixed(1)} MB`;
  return `${rssKb} KB`;
}

export function formatCpuPercent(
  cpuPercent: number | null | undefined,
): string {
  return cpuPercent == null || !Number.isFinite(cpuPercent)
    ? "n/a"
    : `${cpuPercent.toFixed(1)}%`;
}

export function formatRuntimeDuration(
  ageSeconds: number | null | undefined,
): string {
  if (ageSeconds == null || !Number.isFinite(ageSeconds)) return "n/a";

  const totalSeconds = Math.max(0, Math.floor(ageSeconds));
  if (totalSeconds < SECONDS_PER_MINUTE) return `${totalSeconds}s`;

  const totalMinutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);
  const seconds = totalSeconds % SECONDS_PER_MINUTE;
  if (totalMinutes < MINUTES_PER_HOUR) return `${totalMinutes}m ${seconds}s`;

  const totalHours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  const minutes = totalMinutes % MINUTES_PER_HOUR;
  return totalHours < HOURS_PER_DAY
    ? `${totalHours}h ${minutes}m`
    : `${Math.floor(totalHours / HOURS_PER_DAY)}d ${totalHours % HOURS_PER_DAY}h`;
}
