// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Persisted review toggles shared by the diff toolbar and patch-action flow.

import { persistedAtom } from "../utils/persisted-atom";

export const reviewLoadFullFilesEnabledAtom = persistedAtom(
  "load-full-files",
  true,
);

export const skipRevertConfirmationAtom = persistedAtom(
  "skip-revert-confirmation",
  false,
);

export function initReviewPersistentSettingsChunk(): void {}
