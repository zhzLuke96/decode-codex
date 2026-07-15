// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility layer for the app-scope atom factories used by split modules.
import {
  appScopeH,
  appScopeL,
  appScopeRoot,
  appScopeUnderscore,
} from "../boundaries/app-scope";

type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  query?: unknown;
  queryClient?: unknown;
  value?: unknown;
};

type ScopeLike = {
  value?: unknown;
};

export type ScopedAtomContext = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  scope: { value: unknown };
  query?: unknown;
  queryClient?: unknown;
};

export const appAtomScope = appScopeH("appAtomScope");
export const appRootScope = appScopeRoot;
export const appStoreScope = appScopeH("appStoreScope");
export const defineScope = appScopeH;
export const routeAtom = appScopeH("routeAtom");
export const createScopedAtom = appScopeUnderscore;
export const createScopedStateAtom = appScopeUnderscore;

function resolveScopeValue(store: AppScopeStoreLike, scope: unknown): unknown {
  const storeValue = store.value as { value?: unknown } | unknown;
  if (
    storeValue != null &&
    typeof storeValue === "object" &&
    "value" in storeValue
  ) {
    return (storeValue as { value?: unknown }).value ?? null;
  }
  if ((scope as ScopeLike | null)?.value !== undefined) {
    return (scope as ScopeLike).value ?? null;
  }
  return store.value ?? null;
}

function buildContext(
  store: AppScopeStoreLike,
  scope: unknown,
): ScopedAtomContext {
  return {
    get: store.get.bind(store),
    set: store.set.bind(store),
    scope: { value: resolveScopeValue(store, scope) },
    query: store.query,
    queryClient: store.queryClient ?? store.query,
  };
}

export function createComputedAtom<TValue>(
  scope: unknown,
  read: (context: ScopedAtomContext) => TValue,
  _options?: unknown,
): unknown {
  return appScopeL(scope, (_key, store) =>
    read(buildContext(store as AppScopeStoreLike, scope)),
  );
}

export const createScopedSelector = createComputedAtom;
export const createScopedComputedAtom = createComputedAtom;

export function createParametricAtom<TKey = unknown, TValue = unknown>(
  scope: unknown,
  read: (key: TKey, context: ScopedAtomContext) => TValue,
  _options?: unknown,
): unknown {
  return appScopeL(scope, (key, store) =>
    read(key as TKey, buildContext(store as AppScopeStoreLike, scope)),
  );
}

export const createComputedQueryAtom = createComputedAtom;
export const createScopedQueryAtom = createParametricAtom;
export const derivedAtomFamily = createParametricAtom;
export const queryAtomFamily = createScopedQueryAtom;

export function createParametricStateAtom<TValue>(
  scope: unknown,
  defaultValue?: TValue | (() => TValue),
): unknown {
  return appScopeUnderscore(scope, defaultValue);
}

export function createKeyedAtomFamily<TValue>(
  getStorageKey: (key: unknown) => unknown,
  defaultValue: TValue | (() => TValue),
): unknown;
export function createKeyedAtomFamily<TValue>(
  scope: unknown,
  createDefaultValue: () => TValue,
): unknown;
export function createKeyedAtomFamily<TValue>(
  scopeOrStorageKey: unknown,
  defaultValue: TValue | (() => TValue),
): unknown {
  const scope =
    typeof scopeOrStorageKey === "function" ? appScopeRoot : scopeOrStorageKey;
  return appScopeUnderscore(scope, defaultValue);
}

export function createPersistedToggleAtom(
  _key: string,
  defaultValue: boolean,
): unknown {
  return appScopeUnderscore(appStoreScope, () => defaultValue);
}

export function createScopedMutationAtom<TKey = unknown, TValue = unknown>(
  scope: unknown,
  buildMutation: (key: TKey, context: ScopedAtomContext) => TValue,
  options?: unknown,
): unknown {
  return createParametricAtom(scope, buildMutation, options);
}
