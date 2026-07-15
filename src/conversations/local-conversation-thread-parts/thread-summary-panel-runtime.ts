// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Thread summary panel animation config and route-scoped signal helpers.
import { initPersistentSignalRuntime as initScopedSignalRuntime } from "../../runtime/shared-utility-runtime";

import { createScopedSignal as createScopedSignalRaw } from "../../runtime/app-scope-runtime";
import { createPersistedAtomSignal } from "../../runtime/persisted-signal";

import {
  $c as openBrowserSummaryTab,
  Cd as pinnedSummaryPanelSpringTransition,
  Fr as installedMcpAppIdsSignal,
  Il as initProjectPanelStateRaw,
  Ir as setThreadSourceFrameState,
  Ja as initThreadSourceFrameStateChunkRaw,
  Jl as initProjectSourceOrMcpSignalsRaw,
  Mr as initRightPanelTabsRuntimeRaw,
  nu as initThreadSummaryPanelSignalsRuntimeRaw,
  Qc as openPullRequestReviewTab,
  id as rightPanelStateSignal,
  md as pinnedSummaryPanelPinnedSignal,
  nd as leftPanelStateSignal,
  Rl as hostConfigSignal,
  Rr as getThreadSourceFrameTabId,
  Sl as workspaceRouteStateSignal,
  Wl as initProjectDisplayWorkspaceSignalsRaw,
  wd as threadLayoutContext,
  Ya as showRightPanel,
  wl as currentWorkspaceRootSignal,
  yu as initWorkspaceRouteStateSignalsRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  At as initRestoredProcessRowsCollectorDependenciesRaw,
  Jn as PlanIcon,
  kt as formatCommandExecutionItemCommand,
  ls as initSummaryPanelSourceHelpersRaw,
  St as openPlanSidePanelTab,
  Xc as initEmptyPageStateChunkRaw,
  Yn as initBackgroundTaskSectionTitleChunkRaw,
  fl as initGlobalStateQueryHelpersChunkRaw,
  gt as initWorkspaceRouteStateSignalsChunkRaw,
  hc as openSideChatTabInRightPanel,
  ht as ProcessManagerIcon,
  ss as initThreadSummarySectionsSupportChunkRaw,
  xt as initThreadSummarySourceSupportChunkRaw,
  xl as initThreadSummaryPanelSignalsSupportChunkRaw,
  yc as initLocalConversationSummaryPanelSupportChunkRaw,
} from "../../vendor/profile-page-runtime";
import {
  backgroundAgentsSignal,
  initBackgroundSubagentsRuntimeChunk,
} from "../background-subagent-signals";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";

const threadSummaryPanelSectionTransition = {
  duration: 0.5,
  ease: [0.19, 1, 0.22, 1],
};

function initSummaryPanelAnimationConfig(): void {
  // The current section animation config is a local motion transition constant.
}

export {
  backgroundAgentsSignal,
  currentWorkspaceRootSignal,
  formatCommandExecutionItemCommand,
  getThreadSourceFrameTabId,
  hostConfigSignal,
  leftPanelStateSignal,
  installedMcpAppIdsSignal,
  openBrowserSummaryTab,
  openPlanSidePanelTab,
  openPullRequestReviewTab,
  openSideChatTabInRightPanel,
  pinnedSummaryPanelPinnedSignal,
  pinnedSummaryPanelSpringTransition,
  PlanIcon,
  ProcessManagerIcon,
  rightPanelStateSignal,
  setThreadSourceFrameState,
  showRightPanel,
  threadLayoutContext,
  threadSummaryPanelSectionTransition,
  workspaceRouteStateSignal,
};

export type ScopedSignalInitializer<TKey, TValue> = (key: TKey) => TValue;

export function createPersistedScopedSignal<TKey, TValue>(
  keyFactory: (key: TKey) => string,
  defaultValue: TValue,
): unknown {
  return createPersistedAtomSignal(keyFactory, defaultValue);
}

export function createLocalConversationRouteScopedSignal<TKey, TValue>(
  initializer: ScopedSignalInitializer<TKey, TValue>,
): unknown {
  return createScopedSignalRaw(localConversationRouteScope, initializer);
}

export function initThreadSummaryPanelSectionRuntime(): void {
  initLocalConversationRouteRuntime();
  initSummaryPanelAnimationConfig();
  initScopedSignalRuntime();
}

export function initThreadSummaryPanelModelRuntime(): void {
  initBackgroundSubagentsRuntimeChunk();
  initThreadSummaryPanelSignalsRuntimeRaw();
  initWorkspaceRouteStateSignalsRaw();
  initProjectSourceOrMcpSignalsRaw();
  initProjectDisplayWorkspaceSignalsRaw();
  initProjectPanelStateRaw();
  initSummaryPanelSourceHelpersRaw();
  initRestoredProcessRowsCollectorDependenciesRaw();
}

export function initThreadSummaryPanelSectionsRuntime(): void {
  initProjectSourceOrMcpSignalsRaw();
  initProjectPanelStateRaw();
  initGlobalStateQueryHelpersChunkRaw();
  initRightPanelTabsRuntimeRaw();
  initThreadSummarySourceSupportChunkRaw();
  initProjectDisplayWorkspaceSignalsRaw();
  initThreadSummaryPanelSignalsSupportChunkRaw();
  initThreadSourceFrameStateChunkRaw();
  initEmptyPageStateChunkRaw();
  initThreadSummarySectionsSupportChunkRaw();
  initWorkspaceRouteStateSignalsChunkRaw();
  initLocalConversationSummaryPanelSupportChunkRaw();
  initBackgroundTaskSectionTitleChunkRaw();
}
