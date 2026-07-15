// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Thread-find controller atoms shared by the imperative find store.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";

type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

type AppScopeSetter = {
  set(signal: unknown, valueOrKey: unknown, valueOrUpdater?: unknown): void;
};

export type ThreadFindController = {
  clearDebouncedSearch?: () => void;
  ensureVisibleActiveMatch?: () => void;
  preserveScrollBeforeResultClear?: () => void;
  runSearch?: (options?: unknown) => void;
};

export const findActiveOrchestrationAtom = createAppScopeSignal<string | null>(
  appScopeRoot,
  null,
);
export const findDefaultOrchestrationAtom = createAppScopeSignal<string | null>(
  appScopeRoot,
  null,
);
export const threadFindControllerAtom =
  createAppScopeSignal<ThreadFindController | null>(appScopeRoot, null);

export function getThreadFindController(
  scope: AppScopeGetter,
): ThreadFindController | null {
  return scope.get<ThreadFindController | null>(threadFindControllerAtom);
}

export function setThreadFindController(
  scope: AppScopeSetter,
  controller: ThreadFindController | null,
): void {
  scope.set(threadFindControllerAtom, controller);
}
