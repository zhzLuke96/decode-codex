// Restored from ref/webview/assets/local-conversation-stream-role-product-event-De1UaUs6.js
// Updated with exports from ref/webview/assets/local-conversation-stream-role-product-event-Dx3HoaAZ.js.
// Side-effect components that publish local conversation stream role and heartbeat automation thread state to the host.
import React from "react";
import { once } from "../runtime/commonjs-interop";
import {
  appScope,
  conversationCollaborationModeSignal,
  conversationPermissionConfigSignal,
  conversationStreamRoleSignal,
  getChunkModuleExports,
  initAppScope,
  initConversationStateSelectors,
  initProductEventRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initStatsigFeatureGateHooks,
  initThreadStateSignalRuntime,
  initVscodeMessageBridge,
  latestConversationTurnSignal,
  localConversationRouteScope,
  setProductEventProperties,
  streamRoleProductEvent,
  useScope,
  useScopedValue,
  useSignalValue,
  useStatsigGate,
  vscodeMessageBridge,
} from "./local-conversation-product-event-runtime";
import {
  heartbeatAutomationEligibilitySignal,
  initHeartbeatAutomationEligibilityChunk,
} from "../automation/heartbeat-automation-eligibility";
import {
  getHeartbeatTurnPermissions,
  heartbeatThreadPermissionsByIdSignal,
  initHeartbeatPermissionsChunk,
  resolveHeartbeatPermissions,
  serializedHeartbeatPermissionsSignal,
  updateHeartbeatPermissionsByThreadId,
} from "../automation/heartbeat-permissions";

type LocalConversationReporterProps = {
  conversationId: string;
};

type ScopeSnapshot = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

type ScopeRuntime = ScopeSnapshot & {
  set<TValue>(
    signal: unknown,
    valueOrUpdater: TValue | ((current: TValue | null | undefined) => TValue),
  ): void;
  watch(callback: (snapshot: ScopeSnapshot) => void): () => void;
};

type HeartbeatAutomationEligibility = {
  isEligible: boolean;
  reason: string | null;
};

type ThreadPermissionsById = Record<string, unknown>;

type StreamRoleState = {
  role: string;
};

export function LocalConversationHeartbeatAutomationThreadStateReporter({
  conversationId,
}: LocalConversationReporterProps) {
  const scope = useScope(appScope) as ScopeRuntime;
  const isThreadStateMessageEnabled = useStatsigGate("1488233300");
  const eligibility = useScopedValue(
    heartbeatAutomationEligibilitySignal,
    conversationId,
  ) as HeartbeatAutomationEligibility;
  const collaborationMode = useScopedValue(
    conversationCollaborationModeSignal,
    conversationId,
  );
  const permissionsDigest = useScopedValue(
    serializedHeartbeatPermissionsSignal,
    conversationId,
  );
  const permissionsByThreadId = useSignalValue(
    heartbeatThreadPermissionsByIdSignal,
  ) as ThreadPermissionsById | null | undefined;
  const fallbackPermissions = permissionsByThreadId?.[conversationId];

  React.useEffect(() => {
    const latestTurn = scope.get(latestConversationTurnSignal, conversationId);
    const permissionConfig = scope.get(
      conversationPermissionConfigSignal,
      conversationId,
    );
    const currentPermissions = getHeartbeatTurnPermissions(
      latestTurn,
      permissionConfig,
    );
    const resolvedPermissions = resolveHeartbeatPermissions(
      latestTurn,
      permissionConfig,
      fallbackPermissions,
    );

    if (isThreadStateMessageEnabled && currentPermissions != null) {
      scope.set(
        heartbeatThreadPermissionsByIdSignal,
        (current: ThreadPermissionsById | null | undefined) =>
          updateHeartbeatPermissionsByThreadId(
            current ?? {},
            conversationId,
            currentPermissions,
          ),
      );
    }

    vscodeMessageBridge.dispatchMessage(
      "heartbeat-automation-thread-state-changed",
      {
        threadId: isThreadStateMessageEnabled ? conversationId : null,
        isEligible:
          isThreadStateMessageEnabled && Boolean(eligibility.isEligible),
        collaborationMode: isThreadStateMessageEnabled
          ? collaborationMode
          : null,
        permissions: isThreadStateMessageEnabled ? resolvedPermissions : null,
        reason: isThreadStateMessageEnabled ? eligibility.reason : null,
      },
    );
  }, [
    fallbackPermissions,
    conversationId,
    eligibility.isEligible,
    eligibility.reason,
    permissionsDigest,
    isThreadStateMessageEnabled,
    collaborationMode,
    scope,
  ]);

  return null;
}

export const initLocalConversationHeartbeatAutomationThreadStateReporter = once(
  () => {
    getChunkModuleExports();
    initScopeRuntime();
    initReactRuntime();
    initConversationStateSelectors();
    initVscodeMessageBridge();
    initAppScope();
    initStatsigFeatureGateHooks();
    initHeartbeatAutomationEligibilityChunk();
    initHeartbeatPermissionsChunk();
  },
);

export function LocalConversationStreamRoleProductEventReporter({
  conversationId,
}: LocalConversationReporterProps) {
  const scope = useScope(localConversationRouteScope) as ScopeRuntime;

  React.useEffect(() => {
    let didPublishStreamRole = false;
    return scope.watch(({ get }) => {
      const streamRole = get<StreamRoleState | null | undefined>(
        conversationStreamRoleSignal,
        conversationId,
      );
      if (streamRole == null || didPublishStreamRole) {
        return;
      }
      didPublishStreamRole = true;
      setProductEventProperties(scope, streamRoleProductEvent, {
        streamRole: streamRole.role,
      });
    });
  }, [conversationId, scope]);

  return null;
}

export const initLocalConversationStreamRoleProductEventReporter = once(() => {
  getChunkModuleExports();
  initProductEventRuntime();
  initScopeRuntime();
  initReactRuntime();
  initConversationStateSelectors();
  initThreadStateSignalRuntime();
  initRouteScope();
});
