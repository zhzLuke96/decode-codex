// Restored from ref/webview/assets/use-host-config-CiYpjHRj.js
// Lightweight host-config value hook exposed by the onboarding commons facade.
import * as React from "react";

type HostConfigUpdater<TValue> =
  | TValue
  | ((current: TValue | undefined) => TValue);

type HostConfigSetter<TValue> = (value: HostConfigUpdater<TValue>) => void;

const hostConfigValues = new Map<string, unknown>();
const hostConfigListeners = new Set<() => void>();
let hostConfigVersion = 0;

function emitHostConfigChange(): void {
  hostConfigVersion += 1;
  for (const listener of hostConfigListeners) listener();
}

function subscribeHostConfig(listener: () => void): () => void {
  hostConfigListeners.add(listener);
  return () => {
    hostConfigListeners.delete(listener);
  };
}

function getHostConfigSnapshot(): number {
  return hostConfigVersion;
}

export function useHostConfigValue<TValue = unknown>(
  key: string,
  fallbackValue?: TValue,
): readonly [TValue | undefined, HostConfigSetter<TValue>] {
  React.useSyncExternalStore(
    subscribeHostConfig,
    getHostConfigSnapshot,
    getHostConfigSnapshot,
  );

  const value = hostConfigValues.has(key)
    ? (hostConfigValues.get(key) as TValue | undefined)
    : fallbackValue;
  const setValue = React.useCallback<HostConfigSetter<TValue>>(
    (nextValue) => {
      const currentValue = hostConfigValues.get(key) as TValue | undefined;
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (current: TValue | undefined) => TValue)(currentValue)
          : nextValue;
      if (resolvedValue === undefined) hostConfigValues.delete(key);
      else hostConfigValues.set(key, resolvedValue);
      emitHostConfigChange();
    },
    [key],
  );

  return [value, setValue] as const;
}
