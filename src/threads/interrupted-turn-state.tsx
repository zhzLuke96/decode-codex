// Restored from ref/webview/assets/interrupted-turn-state-C57E0EEC.js
// Active-conversation side effects and interrupted-turn state for local threads.
import { useEffect, useLayoutEffect } from "react";
import {
  _appScopeA as useScopedSignalValue,
  _appScopeC as createComputedSignal,
  _appScopeO as useAppScopeStore,
  appScopeRoot,
  appScopeUnderscore,
  createAppScopeSignal,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { appServices } from "../boundaries/rpc.facade";
import { Ct as setActiveConversationHostForScope } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { routeScope } from "../runtime/persisted-signal";
import { requestUserInputAutoResolutionState } from "../runtime/request-user-input-auto-resolution";
import { threadHostIdSignal } from "./thread-context";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type RouteScopeStore = {
  value: {
    conversationId?: string;
    routeKind: string;
  };
};
type ScopedStore = {
  set<TValue>(signal: unknown, value: TValue): void;
  set<TValue, TKey>(
    signal: unknown,
    key: TKey,
    value: TValue | ((currentValue: TValue) => TValue),
  ): void;
};
type ActiveConversationPresenceProps = {
  conversationId?: string | null;
  hostId?: string | null;
};
type RequestUserInputAutoResolutionState = {
  resolutionState: {
    status?: string;
  };
};
type ProcessFocusRequest = {
  processId: string;
  requestId: number;
};
const currentRouteThreadHostIdSignal = createComputedSignal(
  routeScope,
  ({ get, scope }: { get: AppScopeGetter["get"]; scope: RouteScopeStore }) =>
    scope.value.routeKind === "local-thread"
      ? get<string | null>(threadHostIdSignal)
      : null,
);
function ActiveConversationPresence({
  conversationId,
  hostId,
}: ActiveConversationPresenceProps = {}) {
  const routeStore = useAppScopeStore(routeScope) as RouteScopeStore;
  const currentRouteHostId = useAppScopeValue(
    currentRouteThreadHostIdSignal,
  ) as string | null;
  const routeConversationId =
    routeStore.value.routeKind === "local-thread"
      ? routeStore.value.conversationId
      : null;
  const activeConversationId = conversationId ?? routeConversationId;
  const activeHostId = conversationId == null ? currentRouteHostId : hostId;
  useLayoutEffect(() => {
    if (activeConversationId == null || activeHostId == null) return;
    setActiveConversationHostForScope(
      routeStore,
      activeConversationId,
      activeHostId,
    );
    sendAppServerRequest("set-active-conversation", {
      active: true,
      conversationId: activeConversationId,
      hostId: activeHostId,
    });
    appServices.requestUserInputAutoResolution.setConversationPresented?.({
      conversationId: activeConversationId,
      hostId: activeHostId,
      presented: true,
    });
    return () => {
      setActiveConversationHostForScope(routeStore, activeConversationId, null);
      sendAppServerRequest("set-active-conversation", {
        active: false,
        conversationId: activeConversationId,
        hostId: activeHostId,
      });
      appServices.requestUserInputAutoResolution.setConversationPresented?.({
        conversationId: activeConversationId,
        hostId: activeHostId,
        presented: false,
      });
    };
  }, [activeConversationId, activeHostId, routeStore]);
  return activeConversationId != null && activeHostId != null ? (
    <AutoResolutionActivityRecorder
      conversationId={activeConversationId}
      hostId={activeHostId}
    />
  ) : null;
}
function AutoResolutionActivityRecorder({
  conversationId,
  hostId,
}: {
  conversationId: string;
  hostId: string;
}) {
  const autoResolutionState = useScopedSignalValue(
    requestUserInputAutoResolutionState,
    {
      conversationId,
      hostId,
    },
  ) as RequestUserInputAutoResolutionState | null;
  const shouldRecordActivity =
    autoResolutionState != null &&
    autoResolutionState.resolutionState.status !== "snoozed";
  useEffect(() => {
    if (!shouldRecordActivity) return;
    const recordActivity = (event: Event) => {
      if (
        event.target instanceof Element &&
        event.target.closest("[data-user-input-auto-resolution]") != null
      ) {
        return;
      }
      appServices.requestUserInputAutoResolution.recordConversationActivity?.({
        conversationId,
        hostId,
      });
    };
    window.addEventListener("keydown", recordActivity);
    window.addEventListener("pointerdown", recordActivity);
    return () => {
      window.removeEventListener("keydown", recordActivity);
      window.removeEventListener("pointerdown", recordActivity);
    };
  }, [conversationId, hostId, shouldRecordActivity]);
  return null;
}
const processManagerFocusRequestSignal = createAppScopeSignal(
  appScopeRoot,
  () => null,
);
let processManagerFocusRequestId = 0;
function requestProcessManagerFocus(store: ScopedStore, processId: string) {
  processManagerFocusRequestId += 1;
  store.set<ProcessFocusRequest | null>(processManagerFocusRequestSignal, {
    processId,
    requestId: processManagerFocusRequestId,
  });
}
const emptyInterruptedTurnIds = new Set<string>();
const interruptedTurnIdsByConversationSignal = appScopeUnderscore(
  appScopeRoot,
  () => emptyInterruptedTurnIds,
);
function markTurnInterruptedByThisClient(
  store: ScopedStore,
  conversationId: string,
  turnId: string,
) {
  store.set<Set<string>, string>(
    interruptedTurnIdsByConversationSignal,
    conversationId,
    (interruptedTurnIds) =>
      new Set(interruptedTurnIds ?? emptyInterruptedTurnIds).add(turnId),
  );
}

function initInterruptedTurnStateChunk(): void {}

export {
  ActiveConversationPresence,
  initInterruptedTurnStateChunk,
  processManagerFocusRequestSignal,
  markTurnInterruptedByThisClient,
  requestProcessManagerFocus,
  interruptedTurnIdsByConversationSignal,
};
