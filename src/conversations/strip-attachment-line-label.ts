// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Strips a trailing line/line-range suffix (e.g. " (12-34)" or " 12") from an attachment label.

export function stripAttachmentLineLabel(
  label: string,
  hasLineInfo: boolean,
): string {
  return hasLineInfo
    ? label.replace(/(?:\s+\(\s*\d+(?:-\d+)?\s*\)|\s+\d+(?:-\d+)?)(\s*)$/, "")
    : label;
}
