// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Owl feature constants and local Statsig override helpers.

import React from "react";
import {
  appScopeO,
  appScopeRoot,
  appScopeUnderscore,
} from "../boundaries/app-scope";

type CodexAppStore = ReturnType<typeof appScopeO> & {
  queryClient: {
    getQueryData(queryKey: unknown): unknown;
    invalidateQueries(filters?: { queryKey?: unknown }): Promise<void>;
    setQueryData(queryKey: unknown, data: unknown): void;
  };
};

const queryData = new Map<string, unknown>();
const statsigFeatureOverrides = new Map<string, unknown>();

export const owlFeatureAuth = "auth";
export const owlFeatureAutofillAndPasswords = "autofill-and-passwords";
export const owlFeatureDownloads = "downloads";
export const owlFeatureExtensions = "extensions";
export const owlFeatureHistory = "history";
export const owlFeatureOpenAiGoLinks = "openai-go-links";
export const owlFeaturePermissions = "permissions";
export const owlFeaturePrinting = "printing";
export const owlFeatureWebViewEnhancements = "webview-enhancements";

export const owlFeaturesQueryKeyPrefix = ["owl-features-state"] as const;
export const owlFeaturesQueryKey = owlFeaturesQueryKeyPrefix;

export const onboardingDynamicConfigStoreKey = appScopeUnderscore(
  appScopeRoot,
  () => ({}),
);

function queryKeyToString(queryKey: unknown): string {
  try {
    return JSON.stringify(queryKey);
  } catch {
    return String(queryKey);
  }
}

const queryClient = {
  getQueryData(queryKey: unknown): unknown {
    return queryData.get(queryKeyToString(queryKey));
  },
  async invalidateQueries(_filters?: { queryKey?: unknown }): Promise<void> {},
  setQueryData(queryKey: unknown, data: unknown): void {
    queryData.set(queryKeyToString(queryKey), data);
  },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function coerceFeatureMap(value: unknown): Record<string, unknown> {
  if (Array.isArray(value)) {
    return Object.fromEntries(
      value
        .filter((entry): entry is string => typeof entry === "string")
        .map((entry) => [entry, true]),
    );
  }
  if (!isRecord(value)) return {};
  const enabledFeatures = value.enabledFeatures ?? value.enabled_features;
  if (Array.isArray(enabledFeatures)) return coerceFeatureMap(enabledFeatures);
  if (isRecord(enabledFeatures)) return enabledFeatures;
  return value;
}

export function useCodexAppStore(): CodexAppStore {
  return React.useMemo(
    () => Object.assign(appScopeO(), { queryClient }) as CodexAppStore,
    [],
  );
}

export function useStatsigFeatureOverride<TValue = unknown>(
  key: string,
): [
  TValue | undefined,
  (next: TValue | ((previous: TValue | undefined) => TValue)) => void,
] {
  const [value, setValue] = React.useState<TValue | undefined>(
    () => statsigFeatureOverrides.get(key) as TValue | undefined,
  );
  const setOverride = React.useCallback(
    (next: TValue | ((previous: TValue | undefined) => TValue)) => {
      setValue((previous) => {
        const resolved =
          typeof next === "function"
            ? (next as (previous: TValue | undefined) => TValue)(previous)
            : next;
        statsigFeatureOverrides.set(key, resolved);
        return resolved;
      });
    },
    [key],
  );
  return [value, setOverride];
}

export function getEnabledFeaturesSnapshot(client: {
  getDynamicConfig?(name: string): { value: unknown };
}): Record<string, unknown> {
  try {
    return coerceFeatureMap(
      client.getDynamicConfig?.("statsig_default_enable_features")?.value,
    );
  } catch {
    return {};
  }
}

export function applyStatsigFeatureOverrides(
  _appStore: unknown,
  _client: unknown,
): void {}

export function parseOnboardingDynamicConfig(
  value: unknown,
): Record<string, unknown> {
  return isRecord(value) ? value : {};
}
