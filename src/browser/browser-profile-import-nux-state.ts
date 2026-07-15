// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Persisted "seen" flag and visibility predicate for the browser profile import banner.
import { persistedAtom } from "../utils/persisted-atom";
import { filterImportableBrowserProfiles } from "./browser-profile-import-query";

type ImportableBrowserProfile = {
  hasCookies?: boolean;
  hasPasswords?: boolean;
};

export const BROWSER_PROFILE_IMPORT_NUX_SEEN_STORAGE_KEY =
  "has-seen-browser-profile-import-nux-v1";

export function initBrowserProfileImportNuxStorageKeyChunk(): void {}

export const browserProfileImportNuxSeenAtom = persistedAtom<boolean>(
  BROWSER_PROFILE_IMPORT_NUX_SEEN_STORAGE_KEY,
  false,
);

export function initBrowserProfileImportNuxStateChunk(): void {}

export type ShouldShowBrowserProfileImportNuxArgs = {
  baseGateEnabled: boolean;
  hasSeen: boolean;
  hasSettledOpen: boolean;
  isVisible: boolean;
  profiles: ImportableBrowserProfile[] | null | undefined;
  profilesQuerySucceeded: boolean;
  serviceAvailable: boolean;
};

export function shouldShowBrowserProfileImportNux({
  baseGateEnabled,
  hasSeen,
  hasSettledOpen,
  isVisible,
  profiles,
  profilesQuerySucceeded,
  serviceAvailable,
}: ShouldShowBrowserProfileImportNuxArgs): boolean {
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
