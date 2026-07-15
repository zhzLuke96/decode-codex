// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// AppScope root comes from the current shared-object host runtime.
// App-scope signal primitives shared by restored conversation/runtime modules.
import {
  js as createScopedDerivedSignalFamilyRaw,
  zs as createScopedSignalFamilyRaw,
  Rs as createScopedSignalRaw,
  As as createDerivedSignalRaw,
  Vo as initScopeRuntimeRaw,
} from "../vendor/current-app-initial-bnlvjk3w-shared-bundle";
import {
  appScopeRoot,
  initSharedObjectAppScopeRoot,
} from "./shared-object-host-runtime";

export type ScopedSignalGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

export type ScopedSignalSetter = {
  set<TValue>(
    signal: unknown,
    value: TValue | ((currentValue: TValue) => TValue),
  ): void;
  set<TKey, TValue>(
    signalFamily: unknown,
    key: TKey,
    value: TValue | ((currentValue: TValue) => TValue),
  ): void;
};

export type ScopedSignalContext = ScopedSignalGetter &
  ScopedSignalSetter & {
    queryClient?: unknown;
    scope?: unknown;
  };

export type ScopedSignalMountContext<TKey = unknown> = ScopedSignalContext & {
  key: TKey;
};

export type ScopedSignalOptions<TKey = unknown, TValue = unknown> = {
  isEqual?: (left: TValue, right: TValue) => boolean;
  onMount?: (
    setValue: (value: TValue) => void,
    context: ScopedSignalMountContext<TKey>,
  ) => void | (() => void);
};

export type ScopedSignalInitializer<TKey = unknown, TValue = TKey> = (
  context: ScopedSignalContext,
) => TValue;

export type ScopedSignalInitialValue<TKey, TValue> =
  | TValue
  | ScopedSignalInitializer<TKey, TValue>;

export type ScopedSignalFamilyInitializer<TKey, TValue> = (
  key: TKey,
  context: ScopedSignalGetter,
) => TValue;

export { appScopeRoot };
export const appScope = appScopeRoot;

export function initScopeRuntime(): void {
  initScopeRuntimeRaw();
}

export function initAppScope(): void {
  initSharedObjectAppScopeRoot();
}

export function initAppScopeSignalRuntime(): void {
  initScopeRuntime();
  initAppScope();
}

export function createAppScopedSignal<TValue>(initialValue: TValue): unknown;
export function createAppScopedSignal<TValue>(
  initializer: ScopedSignalInitializer<unknown, TValue>,
  options?: ScopedSignalOptions<unknown, TValue>,
): unknown;
export function createAppScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitialValue<TKey, TValue>,
  options?: ScopedSignalOptions<unknown, TValue>,
): unknown {
  return createScopedSignalRaw(appScopeRoot, initializer, options);
}

export function createScopedSignal<TValue>(
  scope: unknown,
  initialValue: TValue,
): unknown;
export function createScopedSignal<TValue>(
  scope: unknown,
  initializer: ScopedSignalInitializer<unknown, TValue>,
  options?: ScopedSignalOptions<unknown, TValue>,
): unknown;
export function createScopedSignal<TKey, TValue>(
  scope: unknown,
  initializer: ScopedSignalInitialValue<TKey, TValue>,
  options?: ScopedSignalOptions<unknown, TValue>,
): unknown {
  return createScopedSignalRaw(scope, initializer, options);
}

export function createAppScopedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
  options?: ScopedSignalOptions<TKey, TValue>,
): unknown {
  return createScopedSignalFamilyRaw(appScopeRoot, initializer, options);
}

export function createScopedSignalFamily<TKey, TValue>(
  scope: unknown,
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
  options?: ScopedSignalOptions<TKey, TValue>,
): unknown {
  return createScopedSignalFamilyRaw(scope, initializer, options);
}

export function createAppScopedDerivedSignalFamily<TKey, TValue>(
  initializer: ScopedSignalFamilyInitializer<TKey, TValue>,
): unknown {
  return createScopedDerivedSignalFamilyRaw(appScopeRoot, initializer);
}

export function createDerivedSignal<TValue>(
  scope: unknown,
  derive: (context: ScopedSignalGetter) => TValue,
): unknown {
  return createDerivedSignalRaw(scope, derive);
}
