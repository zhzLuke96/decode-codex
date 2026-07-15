// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// Store helpers for thread handoff operation state.
import { useSyncExternalStore } from "react";

import type { ThreadHandoffOperationsState } from "./types";

const initialThreadHandoffOperationsState: ThreadHandoffOperationsState = {
  activeOperationId: null,
  operations: [],
};

let threadHandoffOperationsState = initialThreadHandoffOperationsState;
const threadHandoffOperationListeners = new Set<() => void>();

export function initThreadHandoffOperationsChunk() {
  return threadHandoffOperationsState;
}

export function getThreadHandoffOperationsState() {
  return threadHandoffOperationsState;
}

export function useThreadHandoffOperationsState() {
  return useSyncExternalStore(
    subscribeThreadHandoffOperations,
    getThreadHandoffOperationsState,
    getThreadHandoffOperationsState,
  );
}

export function subscribeThreadHandoffOperations(listener: () => void) {
  threadHandoffOperationListeners.add(listener);
  return () => {
    threadHandoffOperationListeners.delete(listener);
  };
}

export function setThreadHandoffOperationsState(
  updater: (
    state: ThreadHandoffOperationsState,
  ) => ThreadHandoffOperationsState,
) {
  threadHandoffOperationsState = updater(threadHandoffOperationsState);
  for (const listener of threadHandoffOperationListeners) {
    listener();
  }
}

export function clearActiveThreadHandoffOperation(
  state: ThreadHandoffOperationsState,
) {
  return {
    ...state,
    activeOperationId: null,
  };
}
