// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Reads (and memoizes) the persisted "dismissed at" timestamp for a namespaced
// dismissible surface such as a coachmark or feature chip.

import { readPersistedStorageValue } from "../boundaries/onboarding-commons-externals.facade";

const dismissedAtCache = new Map<string, number | null>();

export function getDismissedAtMs(
  namespace: string,
  key: string,
): number | null {
  const storageKey = `${namespace}:${key}:dismissed-at-ms`;
  const cached = dismissedAtCache.get(storageKey);
  if (cached) return cached;
  const stored = readPersistedStorageValue(storageKey, null) as number | null;
  dismissedAtCache.set(storageKey, stored);
  return stored;
}
