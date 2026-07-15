// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scoped store that tracks the status of long-running thread handoff
// operations (keyed by operation id) and lets callers await a status change.

import { appScopeUnderscore, _appScopeT } from "../boundaries/app-scope";

type HandoffOperationStatus = "success" | "warning" | "error" | string;

type HandoffOperationState = {
  revision: number;
  status: HandoffOperationStatus;
  [key: string]: unknown;
};

type AppScope = {
  get(store: unknown, key: string): HandoffOperationState | null;
  set(
    store: unknown,
    key: string,
    value:
      | HandoffOperationState
      | null
      | ((
          previous: HandoffOperationState | null,
        ) => HandoffOperationState | null),
  ): void;
};

type WaitForHandoffOperationStatusOptions = {
  scope: AppScope;
  operationId: string;
  waitMs: number;
  afterRevision?: number | null;
};

const handoffOperationWaiters = new Map<string, Set<() => void>>();

export const handoffOperationStatusStore = appScopeUnderscore(
  _appScopeT,
  () => null as HandoffOperationState | null,
);

export function getHandoffOperationStatus(
  scope: AppScope,
  operationId: string,
): HandoffOperationState | null {
  return scope.get(handoffOperationStatusStore, operationId);
}

export function setHandoffOperationStatus(
  scope: AppScope,
  operationId: string,
  update:
    | HandoffOperationState
    | null
    | ((
        previous: HandoffOperationState | null,
      ) => HandoffOperationState | null),
): void {
  const previousState = getHandoffOperationStatus(scope, operationId);
  scope.set(handoffOperationStatusStore, operationId, (previous) => {
    const nextState = typeof update === "function" ? update(previous) : update;
    if (
      nextState == null ||
      previous == null ||
      nextState === previous ||
      nextState.revision !== previous.revision
    ) {
      return nextState;
    }
    return { ...nextState, revision: previous.revision + 1 };
  });
  if (
    getHandoffOperationStatus(scope, operationId)?.revision !==
    previousState?.revision
  ) {
    notifyHandoffOperationWaiters(operationId);
  }
}

export function waitForHandoffOperationStatus({
  scope,
  operationId,
  waitMs,
  afterRevision,
}: WaitForHandoffOperationStatusOptions): Promise<HandoffOperationState | null> {
  const currentState = getHandoffOperationStatus(scope, operationId);
  if (
    currentState == null ||
    waitMs === 0 ||
    (afterRevision != null && currentState.revision > afterRevision) ||
    isTerminalHandoffOperationStatus(currentState.status)
  ) {
    return Promise.resolve(currentState);
  }
  return new Promise((resolve) => {
    const waiters = handoffOperationWaiters.get(operationId) ?? new Set();
    handoffOperationWaiters.set(operationId, waiters);
    const onSettled = () => {
      clearTimeout(timeoutId);
      waiters.delete(onSettled);
      if (waiters.size === 0) {
        handoffOperationWaiters.delete(operationId);
      }
      resolve(getHandoffOperationStatus(scope, operationId));
    };
    const timeoutId = setTimeout(onSettled, waitMs);
    waiters.add(onSettled);
  });
}

export function isTerminalHandoffOperationStatus(
  status: HandoffOperationStatus,
): boolean {
  return status === "success" || status === "warning" || status === "error";
}

function notifyHandoffOperationWaiters(operationId: string): void {
  const waiters = handoffOperationWaiters.get(operationId);
  if (waiters != null) {
    for (const onSettled of waiters) onSettled();
  }
}
