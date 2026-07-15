// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

export function firstNonEmptyTrimmedLine(
  output: string | undefined | null,
): string | null {
  if (!output) return null;
  const line = output
    .split(/\r?\n/)
    .map((item) => item.trim())
    .find((item) => item.length > 0);
  return line ? (line.length <= 180 ? line : `${line.slice(0, 179)}…`) : null;
}
