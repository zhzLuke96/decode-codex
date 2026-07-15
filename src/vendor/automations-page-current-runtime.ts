// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Current automations-page compatibility facade: re-exports this build's 105 public exports from semantic restored modules. Alias->name mapping lives in restored/IMPORT_MAP.json.

export {
  appServerNotificationDebugEntriesSignal,
  clearNotificationDebugEntriesForHost,
  initAppServerNotificationDebugSignalsChunk,
  initProductEventDebugLogEntriesChunk,
  useProductEventDebugLogEntries,
} from "../app-server/notification-debug-signals";
export { AppFallback, initAppFallbackChunk } from "../app-shell/app-fallback";
export {
  AppHeaderUpdateButton,
  initAppHeaderUpdateButtonChunk,
} from "../app-shell/app-header-update-button";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../app-shell/codex-app";
export {
  BackgroundTerminalIcon,
  initBackgroundTerminalIconChunk,
  initBackgroundTerminalSidePanelTabChunk,
  openBackgroundTerminalSidePanelTab,
} from "../app-shell/thread-background-processes/background-terminal-tab";
export {
  clearStoppedPendingProcessRows,
  getPendingBackgroundProcessRow,
  initPendingBackgroundProcessRowsChunk,
  isPendingProcessRowExpired,
  pendingBackgroundProcessRowsSignal,
  removePendingBackgroundProcessRow,
  setPendingBackgroundProcessRow,
} from "../app-shell/thread-background-processes/pending-process-rows";
export {
  initProcessMetricHelpersChunk,
  matchProcessMetrics,
  selectRunningProcessRows,
} from "../app-shell/thread-background-processes/process-metrics";
export {
  collectConversationProcessRows,
  isSameProcessRow,
  mergeProcessRows,
  restoreRegisteredProcessRows,
} from "../app-shell/thread-background-processes/process-rows";
export {
  ThreadAppShellSourceRegistration,
  initThreadAppShellSourcesChunk,
  initThreadNullRefChunk,
  useNullAppShellRef,
} from "../app-shell/thread-background-processes/thread-app-shell-sources";
export { useThreadHandoffOperationActions } from "../app-shell/thread-handoff-operations/actions";
export {
  createQueuedThreadHandoffOperation,
  getThreadHandoffOperationForConversation,
} from "../app-shell/thread-handoff-operations/operations";
export {
  initThreadHandoffOperationsChunk,
  useThreadHandoffOperationsState,
} from "../app-shell/thread-handoff-operations/store";
export { windowsTabsOpenHandler } from "../app-shell/windows-tabs-open-handler";
export { appgenPublicationTermsSidePanelHandler } from "../appgen/publication-terms/side-panel-handler";
export { allThreadCommandExecutionsSignal } from "../automation/heartbeat-automation-eligibility/command-executions";
export {
  heartbeatAutomationEligibilitySignal,
  initHeartbeatAutomationEligibilityChunk,
} from "../automation/heartbeat-automation-eligibility/eligibility";
export { initComposerProjectListChunk } from "../composer/project-selector";
export { ProjectIcon } from "../composer/project-selector/icons/project-icon";
export { ComposerProjectSelector } from "../composer/project-selector/project-selector";
export {
  initRemoteHostedPipStateChunk,
  remoteHostedPipAnyStreamActiveSignal,
  remoteHostedPipVisibleSignal,
} from "../conversations/remote-hosted-pip/state";
export { initAvatarOverlayOpenStateChunk } from "../features/avatar-overlay-open-state";
export { initKeyboardShortcutsDialogChunk } from "../features/keyboard-shortcuts";
export {
  compareKeyboardShortcutCommands,
  initKeyboardShortcutAvailabilityChunk,
  initKeyboardShortcutCommandOrderingChunk,
  isKeyboardShortcutCommandFeatureEnabled,
} from "../features/keyboard-shortcuts/availability";
export { KeyboardShortcutsSearchInput } from "../features/keyboard-shortcuts/search-input";
export {
  getKeyboardShortcutCommandCopy,
  initKeyboardShortcutCommandCopyChunk,
} from "../features/keyboard-shortcuts/titles";
export {
  FastModeHomeBannerIcon,
  fastModePersonalizedEstimateMessages,
  initFastModeHomeBannerIconChunk,
  initFastModePersonalizedEstimateChunk,
  useFastModePersonalizedEstimate,
} from "../features/use-fast-mode-personalized-estimate";
export {
  initPullRequestMergeHelperGateChunk,
  initPullRequestMergeHelperStateChunk,
  skipPullRequestMergeHelperConfirmSignal,
  startPullRequestMergeHelper,
  useIsPullRequestMergeHelperEnabled,
  useIsPullRequestMergeHelperEnabledA,
} from "../github/use-is-pull-request-merge-helper-enabled";
export { initHomeHeroHeadingChunk } from "../home/hero-heading";
export {
  CodexMobileSetupQueriesIcon,
  initCodexMobileSetupQueriesIconChunk,
} from "../icons/codex-mobile-setup-queries-icon";
export {
  NotificationsBellIcon,
  initNotificationsBellIconChunk,
} from "../icons/notifications-bell-icon";
export { SunIcon, initSunIconChunk } from "../icons/sun-icon";
export {
  initChronicleFeatureGateChunk,
  initChronicleSetupDialogChunk,
  initChronicleSetupStateChunk,
  initCodexMemoryStateSnapshotChunk,
} from "../onboarding/chronicle-setup-state";
export { useIsChronicleResearchPreviewEnabled } from "../onboarding/chronicle-setup-state/feature-gate";
export { buildCodexMemoryStateSnapshot } from "../onboarding/chronicle-setup-state/memory-state";
export { ChronicleSetupDialog } from "../onboarding/chronicle-setup-state/setup-dialog";
export {
  CHRONICLE_TRY_CODEX_PROMPT,
  buildChronicleSetupState,
  isChronicleSetupCompletionState,
} from "../onboarding/chronicle-setup-state/setup-state";
export {
  QueryClientScopeProvider,
  initQueryClientScopeProviderChunk,
} from "../runtime/query-client/query-client-provider";
export {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../runtime/window-focus-state";
export {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  initExternalAgentImportSettingsFeatureChunk,
} from "../settings/import-settings-feature";
export {
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
  buildLocalEnvironmentCreateRoute,
  initLocalEnvironmentCreateRouteChunk,
  parseLocalEnvironmentCreateRoute,
} from "../settings/local-environment-create-route";
export {
  initSettingsReturnRouteSignalChunk,
  settingsReturnRouteSignal,
} from "../settings/settings-navigation/settings-return-route";
export {
  initToggleSidebarCommandChunk,
  useRegisterToggleSidebarCommand,
} from "../settings/settings-navigation/sidebar-command";
export { avatarOverlayAnalytics } from "../utils/avatar-overlay-analytics";
export {
  initStatsigRefreshDiagnosticsChunk,
  refreshStatsigValuesForDiagnostics,
} from "../utils/statsig-refresh-diagnostics";
