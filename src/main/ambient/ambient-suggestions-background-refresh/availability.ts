// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Feature and account availability checks for ambient-suggestions refresh.

import type {
  AmbientSuggestionsAccountPolicy,
  AmbientSuggestionsConnection,
  AmbientSuggestionsStore,
} from "./types";

const DEFAULT_AMBIENT_SUGGESTIONS_SETTING_KEY = "ambient-suggestions-enabled";

export function isAmbientSuggestionsRefreshEnabled({
  desktopFeatures,
  settingsStore,
  settingKey = DEFAULT_AMBIENT_SUGGESTIONS_SETTING_KEY,
}: {
  desktopFeatures: { ambientSuggestions: boolean };
  settingsStore: AmbientSuggestionsStore;
  settingKey?: string;
}): boolean {
  return (
    desktopFeatures.ambientSuggestions &&
    settingsStore.getEffective(settingKey) === true
  );
}

export async function resolveAmbientSuggestionsRefreshAvailability({
  accountPolicy,
  appServerConnection,
  desktopFeatures,
  settingsStore,
  settingKey,
}: {
  accountPolicy: AmbientSuggestionsAccountPolicy;
  appServerConnection: AmbientSuggestionsConnection;
  desktopFeatures: { ambientSuggestions: boolean };
  settingsStore: AmbientSuggestionsStore;
  settingKey?: string;
}): Promise<{ enabled: boolean; staleTimeMs: number }> {
  if (
    !isAmbientSuggestionsRefreshEnabled({
      desktopFeatures,
      settingsStore,
      settingKey,
    })
  ) {
    return { enabled: false, staleTimeMs: accountPolicy.staleTimeMs(null) };
  }

  const account = (await appServerConnection.getAccount()).account;
  return {
    enabled: accountPolicy.isEnabled(account),
    staleTimeMs: accountPolicy.staleTimeMs(account),
  };
}
