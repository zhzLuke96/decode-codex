// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import type { ComposerMode } from "./types";

export function shouldShowThreadHandoffInSummary({
  isCompactWindow,
}: {
  isCompactWindow: boolean;
}): boolean {
  return !isCompactWindow;
}

export function isComposerModeVisibleInLocalRemoteDropdown(
  mode: ComposerMode,
): boolean {
  return mode !== "cloud";
}
