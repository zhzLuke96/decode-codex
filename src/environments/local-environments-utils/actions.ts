// Restored from ref/webview/assets/local-environments-utils-CkypnJBW.js
// Helpers for local environment action records.

import type { LocalEnvironmentAction } from "./types";

export function createLocalEnvironmentAction(
  name: string,
): LocalEnvironmentAction {
  return {
    id: crypto.randomUUID(),
    name,
    icon: "tool",
    command: "",
    platform: null,
  };
}

export function cloneLocalEnvironmentActions(
  actions: LocalEnvironmentAction[],
): LocalEnvironmentAction[] {
  return actions.length > 0
    ? actions.map((action) => ({
        ...action,
        id: crypto.randomUUID(),
        platform: action.platform ?? null,
      }))
    : [];
}
