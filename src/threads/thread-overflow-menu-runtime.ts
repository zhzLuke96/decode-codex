// Restored from ref/webview/assets/thread-overflow-menu-yh1Ldo2y.js
// Runtime bindings for thread overflow actions, side chat, and heartbeat automation tabs.
import { once } from "../runtime/commonjs-interop";
import {
  initAppgFeatureGateAndSideConversationRuntime as initSideConversationProducer,
  initAppgThreadActionAndMessageRuntime as initThreadActionMenuRuntime,
} from "../runtime/appg-shared-runtime-initializers";
import { useThreadCommandHandler } from "../runtime/thread-command-handler-runtime";
import { initSignalStateRuntime as initQueryRuntime } from "../runtime/signal-state-runtime";

import {
  initAppServerRequestRuntime as initSideConversationPromptProducer,
  sendAppServerRequest as runConversationAction,
} from "../runtime/app-server-request";

import { initToastRuntime, toastSignal } from "../runtime/toast-runtime";
import { sendHostRequest } from "../runtime/host-request-runtime";

import { initReactRuntime } from "../runtime/shared-utility-runtime";

import {
  initPlatformContentRuntime,
  initVscodeBridgeRuntime as initDeveloperInstructionsProducer,
  PlatformContentGate,
} from "../runtime/platform-content-runtime";
import {
  appLogger as logger,
  initAppLoggerRuntime as initConversationActionAndLoggerRuntime,
} from "../runtime/app-logger";

import {
  Si as initThreadSourceSignal,
  _c as getPanelController,
  a as forkConversationFromLatest,
  b as initForkThreadMessages,
  C as useThreadActions,
  c as localEnvironmentSelectionsByWorkspaceSignal,
  Cn as initForkDialogLocalIcon,
  ed as bottomPanelActivationSignal,
  Ga as MoreHorizontalIcon,
  Ka as initMoreHorizontalIcon,
  kn as initForkDialogWorktreeIcon,
  l as initPendingWorktreeNavigationRoute,
  n as initProjectsAppProducer,
  o as createForkConversationPendingWorktree,
  On as WorktreeForkIcon,
  rd as rightPanelActivationSignal,
  S as useThreadPinControls,
  sd as initThreadPanelProducer,
  Sn as LocalForkIcon,
  So as initWorkspaceRouteHelpers,
  s as initThreadActionMessages,
  t as SideChatIcon,
  wo as isSideChatUnavailable,
  x as threadActionMessages,
  yc as initNavigationProducer,
  Yi as threadActionShortcutSignal,
  cm as conversationHostIdSignal,
  dy as modelSelectionSignal,
  Ou as buildInstructionOverrides,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  mv as initCurrentRefViewRuntime,
  ly as initConversationCacheProducer,
  Op as initHostConversationActionsProducer,
  Ov as useNavigate,
  Sm as threadSourceSignal,
  Up as conversationCollaborationModeSignal,
  Wp as conversationModelOverrideSignal,
} from "../vendor/projects-app-shared-runtime";
import {
  Zi as closeSideChatThreadAssociationRaw,
  jr as initCommandRegistrationStateRaw,
  Er as initKeyboardModifierStateRaw,
  Xi as initSideChatThreadAssociationStateRaw,
  ma as RenameThreadDialog,
  Ji as registerSideChatThreadAssociationRaw,
  Mr as useCommandRegistrationRaw,
} from "../vendor/worktree-new-thread-query-current-bundle";
import {
  Ar as initAutomationPanelRuntime,
  Du as initProfileRouteProducer,
  Eu as LoadingPanel,
  gm as initHeartbeatAutomationTabsRuntime,
  hm as HeartbeatAutomationIcon,
  Jm as initCreateHeartbeatAutomationRuntime,
  jr as openExistingHeartbeatAutomationTab,
  Mr as openCreateHeartbeatAutomationTab,
} from "../vendor/profile-page-runtime";
import {
  useScope,
  useSignalValue,
  useScopedValue,
} from "../runtime/app-scope-hooks";
import { initScopeRuntime } from "../runtime/app-scope-runtime";

const initConversationActionProducer = initConversationActionAndLoggerRuntime;
const initLoggerRuntime = initConversationActionAndLoggerRuntime;
const useSignalSnapshot = useScopedValue;
const initElectronPlatformContent = initPlatformContentRuntime;
const initToastProducer = initToastRuntime;

export type CommandRegistrationOptions = {
  contextHandler?: (context: unknown) => void;
  enabled?: boolean;
  isActive?: (context: unknown) => boolean;
  keyboardHandler?: (event: KeyboardEvent, context: unknown) => boolean | void;
  menuItem?: unknown;
};

type AppScopeStore = {
  get?: (...args: unknown[]) => unknown;
  set?: (...args: unknown[]) => unknown;
};

const initCommandRegistrationState = once(() => {
  initCommandRegistrationStateRaw();
});

const initSideChatThreadAssociationState = once(() => {
  initSideChatThreadAssociationStateRaw();
});

const initKeyboardModifierState = once(() => {
  initKeyboardModifierStateRaw();
  initCommandRegistrationState();
});

const initThreadOverflowQueryRuntime = once(() => {
  initThreadSourceSignal();
  initSideChatThreadAssociationState();
});

function useCommandRegistration(
  commandId: string,
  handler: () => void,
  options?: CommandRegistrationOptions,
): void {
  initCommandRegistrationState();
  useCommandRegistrationRaw(commandId, handler, options);
}

function registerSideChatThreadAssociation(
  scope: AppScopeStore,
  sourceConversationId: string,
  sideConversationId: string,
): void {
  initSideChatThreadAssociationState();
  registerSideChatThreadAssociationRaw(
    scope,
    sourceConversationId,
    sideConversationId,
  );
}

function closeSideChatThreadAssociation(
  scope: AppScopeStore,
  sourceConversationId: string,
  sideConversationId: string,
): void {
  initSideChatThreadAssociationState();
  closeSideChatThreadAssociationRaw(
    scope,
    sourceConversationId,
    sideConversationId,
  );
}

export {
  bottomPanelActivationSignal,
  buildInstructionOverrides,
  closeSideChatThreadAssociation,
  conversationCollaborationModeSignal,
  conversationHostIdSignal,
  conversationModelOverrideSignal,
  createForkConversationPendingWorktree,
  forkConversationFromLatest,
  getPanelController,
  HeartbeatAutomationIcon,
  initAutomationPanelRuntime,
  initConversationActionProducer,
  initConversationCacheProducer,
  initCreateHeartbeatAutomationRuntime,
  initCurrentRefViewRuntime,
  initDeveloperInstructionsProducer,
  initElectronPlatformContent,
  initForkDialogLocalIcon,
  initForkDialogWorktreeIcon,
  initForkThreadMessages,
  initHeartbeatAutomationTabsRuntime,
  initHostConversationActionsProducer,
  initKeyboardModifierState,
  initLoggerRuntime,
  initMoreHorizontalIcon,
  initNavigationProducer,
  initPendingWorktreeNavigationRoute,
  initProfileRouteProducer,
  initProjectsAppProducer,
  initQueryRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initSideConversationProducer,
  initSideConversationPromptProducer,
  initThreadActionMenuRuntime,
  initThreadActionMessages,
  initThreadOverflowQueryRuntime,
  initThreadPanelProducer,
  initToastProducer,
  initToastRuntime,
  initWorkspaceRouteHelpers,
  isSideChatUnavailable,
  LoadingPanel,
  localConversationRouteScope,
  localEnvironmentSelectionsByWorkspaceSignal,
  LocalForkIcon,
  logger,
  modelSelectionSignal,
  MoreHorizontalIcon,
  openCreateHeartbeatAutomationTab,
  openExistingHeartbeatAutomationTab,
  PlatformContentGate,
  registerSideChatThreadAssociation,
  RenameThreadDialog,
  rightPanelActivationSignal,
  runConversationAction,
  sendHostRequest,
  SideChatIcon,
  threadActionMessages,
  threadActionShortcutSignal,
  threadSourceSignal,
  toastSignal,
  useCommandRegistration,
  useNavigate,
  useScope,
  useScopedValue,
  useSignalSnapshot,
  useSignalValue,
  useThreadActions,
  useThreadCommandHandler,
  useThreadPinControls,
  WorktreeForkIcon,
};
