// Restored from ref/webview/assets/browser-sidebar-comment-mode-coachmark-state-B5FxFSFk.js
// browser-sidebar-comment-mode-coachmark-state-B5FxFSFk chunk restored from the Codex webview bundle.
import { filterImportableBrowserProfiles } from "../browser/browser-profile-import-query";
import { createPersistedSignal } from "../runtime/persisted-signal";
import { persistedAtom } from "../utils/persisted-atom";
import { setPersistedAtomItem } from "../utils/persisted-atom-store";
type BrowserImportProfile = {
  hasCookies?: boolean;
  hasPasswords?: boolean;
  [key: string]: unknown;
};
type BrowserSidebarCoachmarkInput = {
  baseGateEnabled: boolean;
  hasSeen: boolean;
  hasSettledOpen: boolean;
  isVisible: boolean;
  profiles: BrowserImportProfile[] | null | undefined;
  profilesQuerySucceeded: boolean;
  serviceAvailable: boolean;
};
const HAS_SEEN_BROWSER_PROFILE_IMPORT_NUX_KEY =
  "has-seen-browser-profile-import-nux-v1";
export const hasSeenBrowserProfileImportNuxSignal = createPersistedSignal(
  HAS_SEEN_BROWSER_PROFILE_IMPORT_NUX_KEY,
  false,
);
export function shouldShowBrowserProfileImportCoachmark({
  baseGateEnabled,
  hasSeen,
  hasSettledOpen,
  isVisible,
  profiles,
  profilesQuerySucceeded,
  serviceAvailable,
}: BrowserSidebarCoachmarkInput): boolean {
  return (
    isVisible &&
    hasSettledOpen &&
    baseGateEnabled &&
    serviceAvailable &&
    profilesQuerySucceeded &&
    profiles != null &&
    filterImportableBrowserProfiles(profiles).length > 0 &&
    hasSeen === false
  );
}
const browserSidebarCommentModeCoachmarkDismissedKey =
  "browser-sidebar-comment-mode-coachmark-dismissed";
export const browserSidebarCommentModeCoachmarkDismissedAtom = persistedAtom(
  browserSidebarCommentModeCoachmarkDismissedKey,
  false,
);
export function dismissBrowserSidebarCommentModeCoachmark(): void {
  setPersistedAtomItem(browserSidebarCommentModeCoachmarkDismissedKey, true);
}
export function initBrowserSidebarCommentModeCoachmarkStateChunk(): void {
  void browserSidebarCommentModeCoachmarkDismissedKey;
}
export { HAS_SEEN_BROWSER_PROFILE_IMPORT_NUX_KEY };
