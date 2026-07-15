// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Thin compatibility layer over the restored global-state host runtime.
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { sendHostRequest } from "./host-request-runtime";
import {
  setGlobalStateValue,
  useGlobalStateQuery,
} from "./global-state-runtime";

export const ProjectStorageKey = globalSettingKeys;

export function usePersistedValue<TData = unknown>(
  key: unknown,
  options?: unknown,
) {
  return useGlobalStateQuery<TData>(key, options);
}

export async function writePersistedValue(
  scopeOrKey: unknown,
  keyOrValue: unknown,
  maybeValue?: unknown,
): Promise<void> {
  if (arguments.length >= 3) {
    await setGlobalStateValue(scopeOrKey, keyOrValue, maybeValue);
    return;
  }

  const key = scopeOrKey;
  const value = keyOrValue;
  await sendHostRequest("set-global-state", {
    params: { key, value },
  });
}
