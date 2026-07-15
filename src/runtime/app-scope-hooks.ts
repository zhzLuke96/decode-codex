// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// React hooks for reading values from the app-scope signal runtime.
import type { ComponentType, ReactNode } from "react";
import {
  Uo as ScopeValueProviderRaw,
  Ko as useScopeRaw,
  Go as useScopedValueRaw,
  qo as useSignalValueRaw,
} from "../vendor/current-app-initial-bnlvjk3w-shared-bundle";

export type ScopeValueProviderProps = {
  children?: ReactNode;
  scope: unknown;
  value: unknown;
};

export const ScopeValueProvider =
  ScopeValueProviderRaw as ComponentType<ScopeValueProviderProps>;

export function useScope<TScope = unknown>(scope: unknown): TScope {
  return useScopeRaw(scope) as TScope;
}

export function useSignalValue<TValue = unknown>(signal: unknown): TValue {
  return useSignalValueRaw(signal) as TValue;
}

export function useScopedValue<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return (
    arguments.length === 1
      ? useScopedValueRaw(signal)
      : useScopedValueRaw(signal, key)
  ) as TValue;
}
