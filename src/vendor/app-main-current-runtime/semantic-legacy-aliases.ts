// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Legacy app-main current bundle aliases that remain sourced from the current bundle.
export { areArraysEqual } from "../../utils/are-arrays-equal";
export { summarizeParsedDiffs } from "../../review/summarize-parsed-diffs";
export {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
} from "../../utils/pull-request-visual-state";
export {
  openReviewTabForConversation as openThreadLastTurnReviewSidePanelTab,
  openReviewTab as setThreadBrowserSidePanelExpanded,
} from "../../review/review-side-panel-tab-commands";
export {
  initUnifiedDiffIconChunk as initFileDiffLayoutRuntime,
  UnifiedDiffIcon,
} from "../../icons/unified-diff-icon";
export {
  initTrashIconChunk as initAppMainAttachmentRendererRuntime,
  TrashIcon,
} from "../../icons/trash-icon";
export {
  initMessageTextRendererRuntime,
  MessageTextRenderer,
} from "../../conversations/user-message-text";
export {
  shouldShowToolActivityForDetailLevel as SidebarRowIcon,
} from "../../conversations/tool-activity-detail-level";
export {
  buildAmbientSuggestionAppIndex as initThreadRowLayoutRuntimeChunk,
  normalizeAmbientSuggestionAppKey as initSidebarTaskRowRuntimeChunk,
} from "../../connectors/ambient-suggestion-apps";
export {
  initUseWorktreeBaseBranchQueryChunk as openThreadBrowserSidePanelTab,
  useWorktreeBaseBranchQuery as openThreadBrowserSidePanelTabWithPendingState,
} from "../../conversations/use-worktree-base-branch-query";
export {
  initWorktreeBranchSetupModalChunk as initThreadSidePanelTabsChunk,
} from "../../conversations/worktree-branch-setup-modal-runtime";
export {
  initReviewModeIconsRuntime,
  XcodeLicenseWarningIcon,
} from "../../icons/xcode-license-warning-icon";
export {
  ConversationalOnboardingTaskIcon as OnboardingStepView,
} from "../../onboarding/conversational-onboarding-task-icon";
export {
  SummaryPanelRow as openThreadBrowserSidePanelTabWithoutAnimation,
} from "../../utils/summary-panel-row";
export {
  primaryRuntimeInstallStatusMessage as registerForkedConversation,
} from "../../runtime/primary-runtime-install-status-message";
export {
  initReasoningEffortLabelChunk as normalizeFilesystemPathForDisplay,
  REASONING_EFFORT_LABELS as readProjectSignal,
} from "../../composer/reasoning-effort-label";
export {
  parseHttpsUrl as associateBranchWithConversation,
} from "../../conversations/parse-https-url";
export {
  useDictation as ThreadRowEnvironmentMeta,
} from "../../features/use-dictation/use-dictation";
export {
  initUseDictationRuntimeChunk as SidebarRowContextMenuItem,
} from "../../features/use-dictation";
export {
  cleanupDictationTranscript as SidebarRowHostLabel,
} from "../../utils/transcribe-audio";
export {
  isDeeplyDifferent as initSidebarRowPrimitivesChunk,
} from "../../utils/is-deeply-different";
export {
  normalizeThreadDetailLevel as ThreadRowTimestamp,
} from "../../utils/thread-detail-level";
export {
  initSettingsControlRowChunk as initSettingsRowRuntime,
} from "../../ui/settings-row";
export {
  initPullRequestStatusRuntimeChunk as initPullRequestStatusBadgeChunk,
} from "../../github/pull-request-status";
export {
  SplitDiffIcon as initOpenInBrowserRuntimeChunk,
} from "../../icons/split-diff-icon";
export {
  getMicrophoneInputStream as SidebarRowProjectLabel,
} from "../../utils/microphone-input";
export {
  useDictationKeyboard as initExternalAgentImportStatusIconsChunk,
} from "../../composer/use-dictation-keyboard";
export {
  BranchNameFieldHeader as getBrowserTabIdForSidePanelOpen,
} from "../../conversations/branch-name-field-header";
export {
  initGitApplyClipboardIconChunk as SidebarRowKeyboardScope,
} from "../../icons/git-apply-clipboard-icon";
export {
  initKeyboardLayoutMapChunk as ThreadRowHoverCard,
  setKeyboardLayoutMap as ThreadRowHoverActions,
} from "../../utils/keyboard-layout-map";
export {
  initUseHotkeyChunk as ThreadRowUnreadState,
  keyboardEventMatchesAccelerator as ThreadRow,
  useHotkey as ThreadRowMeta,
} from "../../utils/use-hotkey";
export {
  initReviewTabIconChunk as getThreadMcpAppSidePanelTabId,
} from "../../icons/review-tab-icon";
export {
  initBrowserProfileImportDialogLauncherChunk as initThreadRowRuntimeChunk,
  openBrowserProfileImportDialog as ThreadRowPinAction,
} from "../../browser/browser-profile-import-dialog-launcher";
export {
  cancelGitWorkflowAbortSignal as ThreadRowTitle,
} from "../../review/local-git-action-state";
export {
  initLocalConversationGitActionsChunk as SidebarRowDragHandle,
} from "../../conversations/local-conversation-git-actions";
export {
  gitActionAvailabilityAtom as projectGroupRepositoryDataSignal,
  initLocalGitActionsScopeChunk as SidebarListSection,
} from "../../review/local-git-actions-scope";
export {
  ActionPopoverPrimitives as openSessionSandboxSidePanel,
  initActionPopoverPrimitivesChunk as openThreadBranchReviewSidePanelTab,
} from "../../review/action-popover-primitives";
export {
  PullRequestButtonLabel as toggleThreadSidePanel,
} from "../../github/pull-request-button-label";
export {
  TwoPeopleShieldIcon as openThreadMcpAppSidePanelTab,
} from "../../icons/two-people-shield-icon";
export {
  NotePlusIcon as closeThreadMcpAppSidePanelTab,
} from "../../icons/note-plus-icon";
export {
  FolderOpenIcon as liveMcpAppFrameSignal,
} from "../../icons/folder-open-icon";
export {
  aggregateChangedFileSummary as SidebarSection,
  computeFileLineStats as SidebarTaskRowActions,
  initDiffSelectionSummaryChunk as SidebarRowUnreadDot,
} from "../../review/diff-selection-summary";
export {
  initBranchSearchListChunk as SidebarRowMenuSeparator,
} from "../../review/branch-search-list";
export {
  initFileDiffRuntime,
  initFileDiffSupportRuntime,
} from "../../review/file-diff-runtime";
export {
  transferForkedConversationBrowserTabs,
  transferForkedConversationBrowserTabs as primeBrowserTabTransfers,
} from "../../app-shell/thread-browser-panel-tabs";
export {
  convertUnistTest as SidebarRowHoverCard,
  mdastToMarkdownDefaultHandlers as SidebarTaskRowTitle,
} from "../markdown-ast-runtime";

export { Banner as RemoteConversationShell } from "../../ui/banner";

export { FileDiff } from "../../review/file-diff";

export {
  initBackgroundSubagentsRuntimeChunk as forkConversationMessages,
  initBackgroundSubagentsRuntimeChunk as initForkConversationMessagesChunk,
} from "../../conversations/background-subagent-signals";

export {
  initUseCollaborationModeChunk as useComposedRefs,
} from "../../collaboration/use-collaboration-mode";

export { AutomationNameInput as ArchiveMenuItem } from "../../automations/automation-name-input";
export {
  AutomationPromptForm as AutomationScheduleEditor,
} from "../../automations/automation-prompt-form";
export {
  AutomationSaveTooltip as AutomationDraftActionForm,
} from "../../automations/automation-save-tooltip";
export {
  AutomationSandboxBanner as SidebarRowRuntime,
} from "../../automations/automation-sandbox-banner";
export {
  initAutomationDraftRuntimeChunk as SidebarRowContextMenu,
} from "../../automations/shared";
export { AutomationDetailRow as SidebarTaskRow } from "../../automations/automation-side-panel/status-components";
export {
  SettingsButtonRow as SidebarRowActionButton,
} from "../../ui/settings-row";
export {
  initCursorIconChunk as SidebarRowOverflowMenu,
} from "../../icons/cursor-icon";
export {
  initJumpToFileMenuChunk as SidebarRowShortcutScope,
} from "../../review/jump-to-file-menu";
export {
  initCollapsedTurnSummaryLabelChunk as initForkConversationToastRuntime,
} from "../../conversations/collapsed-turn-summary-label";
