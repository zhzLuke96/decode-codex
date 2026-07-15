// Restored from ref/.vite/build/comment-preload.js
// Text normalization used by Google Workspace document context capture.

export const MAX_CONTEXT_TEXT_LENGTH = 2000;

export function normalizeBrowserSidebarText(
  value: string | null | undefined,
): string | undefined {
  const normalized = value?.replace(/\s+/g, " ").trim();
  return normalized == null || normalized.length === 0 ? undefined : normalized;
}

export function normalizeCapturedContextText(
  value: string | null | undefined,
): string | null {
  const normalized = normalizeBrowserSidebarText(value);
  return normalized == null
    ? null
    : normalized.slice(0, MAX_CONTEXT_TEXT_LENGTH);
}
