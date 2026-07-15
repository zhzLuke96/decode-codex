// Restored from ref/webview/assets/request-user-input-auto-resolution-1nt2rAu4.js
import { _appScopeT, appScopeUnderscore } from "../boundaries/app-scope";
type AutoResolutionKey = {
  conversationId: string;
  hostId: string;
};
type AutoResolutionState = {
  requestId: string;
  resolutionState: unknown;
};
type AutoResolutionChange =
  | {
      kind: "removed";
      conversationId: string;
      requestId: string;
    }
  | {
      kind: "updated";
      conversationId: string;
      requestId: string;
      resolutionState: unknown;
    };
type ScopedStore = {
  get<T>(signal: unknown, key: AutoResolutionKey): T | null | undefined;
  set<T>(signal: unknown, key: AutoResolutionKey, value: T | null): void;
};
export const requestUserInputAutoResolutionState = appScopeUnderscore(
  _appScopeT,
  () => null,
  undefined,
  {
    key: ({ conversationId, hostId }: AutoResolutionKey) =>
      JSON.stringify([hostId, conversationId]),
  },
);

export function initRequestUserInputAutoResolutionRuntime(): void {}

export function applyRequestUserInputAutoResolutionChange(
  store: ScopedStore,
  hostId: string,
  change: AutoResolutionChange,
) {
  const key = {
    conversationId: change.conversationId,
    hostId,
  };
  switch (change.kind) {
    case "removed":
      if (
        store.get<AutoResolutionState>(requestUserInputAutoResolutionState, key)
          ?.requestId === change.requestId
      ) {
        store.set(requestUserInputAutoResolutionState, key, null);
      }
      break;
    case "updated":
      store.set(requestUserInputAutoResolutionState, key, {
        requestId: change.requestId,
        resolutionState: change.resolutionState,
      });
      break;
  }
}
