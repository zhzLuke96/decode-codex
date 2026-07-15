// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~plugin-deta~hb9r3lcf-Bl5shjph.js
// Opens the home route with fresh composer focus and optional prefilled state.
import * as React from "react";

import type { ComposerMode } from "../composer/composer-view-state";
import {
  initNewThreadRouteContextChunk,
  initPrefillComposerModeRouteStateChunk,
  resetNewThreadRouteContext,
  setPrefillComposerModeForHomeRoute,
  type AppScopeStoreLike,
  type AtomStoreLike,
} from "../composer/new-thread-route-context";
import {
  initSelectedLocalRemoteCwdStateChunk,
  selectedLocalRemoteCwdState,
} from "../remote/local-remote-selection/selection-state";
import { initInitialRouteRuntime } from "../features/is-compact-window-context";
import { useScope } from "../runtime/app-scope-hooks";
import {
  appScopeRoot,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";
import {
  hostMessageBridge,
  initAppRuntimeChunk,
} from "../runtime/app-main-host-runtime";
import {
  initSelectProjectRuntimeChunk,
  selectProject,
} from "../utils/select-project";
import { initJotaiRuntimeChunk, useStore } from "../vendor/jotai-runtime";

export type HomeRouteActiveProject = {
  isLocalProject?: boolean;
  path?: string | null;
  projectId: string;
  projectKind: "local" | "remote";
};

export type OpenHomeRouteOptions = {
  activeProject?: HomeRouteActiveProject | null;
  prefillAeonStartTarget?: unknown | null;
  prefillComposerMode?: ComposerMode | null;
  startInSidebar?: boolean;
  [key: string]: unknown;
};

export function useOpenHomeRoute(): (
  options?: OpenHomeRouteOptions | null,
) => void {
  const appScopeStore = useScope<AppScopeStoreLike>(appScopeRoot);
  const atomStore = useStore() as AtomStoreLike;

  return React.useCallback(
    (options?: OpenHomeRouteOptions | null) => {
      openHomeRoute(appScopeStore, atomStore, options);
    },
    [appScopeStore, atomStore],
  );
}

export function openHomeRoute(
  appScopeStore: AppScopeStoreLike,
  atomStore: AtomStoreLike,
  options: OpenHomeRouteOptions | null = null,
): void {
  resetNewThreadRouteContext(appScopeStore, atomStore);

  const {
    activeProject,
    prefillAeonStartTarget = null,
    prefillComposerMode = null,
    startInSidebar: _startInSidebar,
    ...routeState
  } = options ?? {};

  if (activeProject !== undefined) {
    appScopeStore.set(selectedLocalRemoteCwdState, null);
    selectProject(appScopeStore, activeProject);
  }

  const focusComposerNonce = Date.now();
  const state = {
    ...routeState,
    focusComposerNonce,
    ...(prefillAeonStartTarget == null ? {} : { prefillAeonStartTarget }),
  };

  setPrefillComposerModeForHomeRoute(
    appScopeStore,
    focusComposerNonce,
    prefillComposerMode,
  );
  initAppRuntimeChunk();
  hostMessageBridge.dispatchHostMessage({
    path: "/",
    state,
    type: "navigate-to-route",
  });
}

export function initOpenHomeRouteChunk(): void {
  initJotaiRuntimeChunk();
  initAppScopeSignalRuntime();
  initAppRuntimeChunk();
  initInitialRouteRuntime();
  initNewThreadRouteContextChunk();
  initPrefillComposerModeRouteStateChunk();
  initSelectedLocalRemoteCwdStateChunk();
  initSelectProjectRuntimeChunk();
}
