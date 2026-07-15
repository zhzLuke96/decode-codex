// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// New-thread route scratch state and transient composer-mode prefill helpers.
import { appScopeRoot, createScopedSignal } from "../runtime/app-scope-runtime";
import { createAtom } from "../vendor/jotai-runtime";
import type { ComposerMode } from "./composer-view-state";

export type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  query: {
    setData(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  };
  set(signal: unknown, keyOrUpdater: unknown, value?: unknown): void;
};

export type AtomStoreLike = {
  set(atom: unknown, value: unknown): void;
};

export type PrefillComposerModeState = {
  key: number;
  mode: ComposerMode | null;
} | null;

const emptyOverrideState = {
  isSet: false,
  value: null,
} as const;

export const pendingHomeRouteContextSignal = createScopedSignal(
  appScopeRoot,
  () => ({}),
);
export const pendingHomeRoutePermissionOverrideAtom = createAtom(null);
export const pendingHomeRouteComposerModeAtom = createAtom(emptyOverrideState);
export const pendingHomeRouteSidebarVisibilityAtom = createAtom(false);
export const prefillComposerModeByFocusNonceSignal =
  createScopedSignal<PrefillComposerModeState>(appScopeRoot, null);

export function resetNewThreadRouteContext(
  appScopeStore: AppScopeStoreLike,
  atomStore: AtomStoreLike,
): void {
  atomStore.set(pendingHomeRoutePermissionOverrideAtom, null);
  appScopeStore.set(pendingHomeRouteContextSignal, {});
  atomStore.set(pendingHomeRouteComposerModeAtom, emptyOverrideState);
  atomStore.set(pendingHomeRouteSidebarVisibilityAtom, false);
}

export function setPrefillComposerModeForHomeRoute(
  appScopeStore: AppScopeStoreLike,
  focusComposerNonce: number,
  composerMode: ComposerMode | null,
): void {
  appScopeStore.set(
    prefillComposerModeByFocusNonceSignal,
    composerMode == null
      ? null
      : {
          key: focusComposerNonce,
          mode: composerMode,
        },
  );
}

export function initNewThreadRouteContextChunk(): void {}

export function initPrefillComposerModeRouteStateChunk(): void {}
