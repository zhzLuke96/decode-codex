// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-Cvc3K8GC.js
// Local conversation helper for summarizing files in a unified diff.

import { parseDiff } from "./parse-diff";
import { getPatchDiffStats } from "./patch-diff-stats";
import { registerCustomHighlightTheme as registerSharedHighlightTheme } from "./shared-highlight-themes";
import { sumBy } from "./sum-by";
import type { ParsedDiffFile, ParseDiffOptions } from "./parse-diff/types";
import type { HighlightThemeLoader } from "./shared-highlight-themes";

export function parseUnifiedDiffFileSummaries(
  diffText: string,
  options: ParseDiffOptions = {},
): ParsedDiffFile[] {
  return parseDiff(diffText, options);
}

export { sumBy };

export const getUnifiedDiffFileStats = getPatchDiffStats;

export function registerCustomHighlightTheme(
  name: string,
  load: HighlightThemeLoader,
): void {
  registerSharedHighlightTheme(name, load);
}

export function initUnifiedDiffHighlightRuntimeChunk(): void {}

export function initUnifiedDiffFileSummariesChunk(): void {}

export function initUnifiedDiffFileSummaryStatsChunk(): void {
  initUnifiedDiffFileSummariesChunk();
}
