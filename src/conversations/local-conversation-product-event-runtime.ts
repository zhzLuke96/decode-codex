// Restored from ref/webview/assets/local-conversation-stream-role-product-event-De1UaUs6.js
// Runtime bindings for local conversation stream-role and heartbeat host events.
import {
  initStatsigFeatureGateRuntime as initStatsigFeatureGateHooks,
  useStatsigGate,
} from "../runtime/feature-gate-runtime";
import {
  initReactRuntime,
  initProductEventRuntime,
  getChunkModuleExports,
} from "../runtime/shared-utility-runtime";

import {
  initVscodeMessageRuntime as initVscodeMessageBridge,
  vscodeMessageBridge,
} from "../runtime/vscode-message-runtime";

import {
  appScope,
  initAppScope,
  initScopeRuntime,
} from "../runtime/app-scope-runtime";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../runtime/app-scope-hooks";
import {
  Bl as setProductEventProperties,
  Hi as initThreadStateSignalRuntime,
  I_ as initRouteScope,
  Jp as conversationPermissionConfigSignal,
  Np as streamRoleProductEvent,
  Op as initConversationStateSelectors,
  Ri as localConversationRouteScope,
  St as conversationStreamRoleSignal,
  Up as conversationCollaborationModeSignal,
  Xp as latestConversationTurnSignal,
} from "../vendor/projects-app-shared-runtime";

export {
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
};
