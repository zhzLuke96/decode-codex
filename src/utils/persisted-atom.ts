// Restored from ref/webview/assets/persisted-atom-DAN4dBf_.js
// persisted-atom-DAN4dBf_ chunk restored from the Codex webview bundle.
import { _appScopeY as atomWithStorage } from "../boundaries/app-scope";
import {
  clearPersistedAtomStore,
  createPersistedAtomStore,
} from "../utils/persisted-atom-store";
export function resetPersistedAtomStore() {
  clearPersistedAtomStore();
}

export function initPersistedAtomRuntime(): void {}

export function persistedAtom<T>(key: string, initialValue: T) {
  return atomWithStorage(key, initialValue, createPersistedAtomStore());
}
