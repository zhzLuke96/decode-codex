// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Shared global UI state atoms used across onboarding, composer and shell chrome.
import {
  appStoreScope,
  createScopedAtom,
} from "./onboarding-scope-runtime";

export const activeLocalProjectCwdSignal = createScopedAtom<string | null>(
  appStoreScope,
  null,
);

export const appBadgeCountAtom = createScopedAtom<number>(appStoreScope, 0);

export const activeToastIdsAtom = createScopedAtom<string[]>(
  appStoreScope,
  () => [],
);
