// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// TYPED BOUNDARY FACADE: onboarding-commons-externals.
// Typed `any` placeholders for non-exported cross-slice symbols.
// Open boundary; replace as owning modules are restored. Auto-generated from imports.

import React from "react";
import { createRoot } from "react-dom/client";
import type { ComponentType } from "react";
import { z } from "zod";
import { createAtom as createJotaiAtom } from "../vendor/jotai-runtime";
import {
  add as addCoordinates,
  findFirstFocusableNode,
  isKeyboardEvent as isDndKeyboardEvent,
  subtract as subtractCoordinates,
} from "@dnd-kit/utilities";
import {
  buildLocalFileSrc as buildLocalFileSrcRuntime,
} from "../runtime/commons-utility-runtime";
import {
  joinPath as joinPathRuntime,
  normalizePath as normalizePathRuntime,
} from "../runtime/path-helpers-runtime";
import {
  formatWorkspacePathLabel as formatWorkspacePathLabelRuntime,
  isAbsolutePath as isAbsolutePathRuntime,
  relativizePath as relativizePathRuntime,
} from "../conversations/file-reference-link";
import { resolveSkillPathInfoFromReadSummary } from "../conversations/exploration-skill-summary-runtime";
import { sendHostRequest as sendHostRequestRuntime } from "../runtime/host-request-runtime";
import { useQueryClient as useQueryClientRuntime } from "../runtime/query-client/react-query-context";
import type { ThreadFindDomain } from "../find/thread-find-atoms";
import {
  findActiveDomainAtom as threadFindActiveDomainAtom,
  findActiveMatchIndexAtom as threadFindActiveMatchIndexAtom,
  findLoadingAtom as threadFindLoadingAtom,
  findOpenAtom as threadFindOpenAtom,
  findPreferredDomainAtom as threadFindPreferredDomainAtom,
  findResultAtom as threadFindResultAtom,
} from "../find/thread-find-atoms";
import {
  readSharedObjectValueWithReader as readSharedObjectValueWithReaderRuntime,
  updateSharedObjectValue as updateSharedObjectValueRuntime,
} from "../runtime/shared-object-host-runtime";
import { globalSettingKeys as sharedStateKeysRuntime } from "./src-l0hb/settings";
import {
  configRequirementsByHostAuthSignal as serverConfigRequirementsQueryRuntime,
  currentRouteHostIdSignal as defaultHostIdSignalRuntime,
} from "../runtime/app-main-new-thread-runtime";
import {
  primaryRuntimeDiagnosticsQueryKey as buildPrimaryRuntimeStatusQueryKeyRuntime,
} from "../runtime/primary-runtime-query-keys";
import {
  primaryRuntimeInstallStatusSignal as primaryRuntimeInstallProgressStorageKeyRuntime,
} from "../runtime/primary-runtime-install-state";
import {
  primaryRuntimeInstallReadyAtom as primaryRuntimeInstalledAtomRuntime,
} from "../onboarding/onboarding-state";
import {
  activeWorkspaceRootsQuery as activeWorkspaceRootsQueryRuntime,
  effectiveConfigQueryKeyPrefix,
  layeredConfigQueryKeyPrefix,
  userConfigQueryKeyPrefix,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  conversationManagerAtom as conversationManagerAtomRuntime,
  getConversationTurns as getConversationTurnsRuntime,
} from "../runtime/conversation-helpers-runtime";
import {
  conversationCwdSignal as conversationCwdSignalRuntime,
  conversationHostIdSignal as conversationHostIdSignalRuntime,
  shouldResumeConversationSignal as shouldResumeConversationSignalRuntime,
} from "../runtime/conversation-state-runtime";
import { avatarOverlayOpenStateSignal as avatarOverlayOpenStateSignalRuntime } from "../utils/avatar-overlay-open-state-signal";
import {
  dismissBrowserSidebarCommentModeCoachmark as dismissBrowserSidebarCommentModeCoachmarkRuntime,
} from "../browser/browser-sidebar-comment-mode-coachmark-state";
import { DiscardBrowserAnnotationsDialog } from "../browser/browser-discard-annotations-dialog";
import { browserSidebarManager } from "../browser/sidebar-manager";
import {
  closeModalControllerModal as closeModalControllerModalRuntime,
  isModalControllerModalOpen as isModalControllerModalOpenRuntime,
  openModalControllerModal as openModalControllerModalRuntime,
} from "../ui/modal-controller-state";
import {
  evaluateFeatureGate as evaluateFeatureGateRuntime,
} from "../runtime/feature-gate-runtime";
import { ElectronHostMessageBridge } from "../runtime/app-main-host-runtime";
import {
  focusPreviewTabComposer as focusPreviewTabComposerRuntime,
  previewTabManager as previewTabManagerRuntime,
} from "../image-side-panel/image-preview-tab-runtime";
import { ImagesIcon as ImagePreviewTabIconRuntime } from "../icons/images-icon";
import { ImagePreviewTabContent as ImagePreviewTabContentRuntime } from "../image-side-panel/image-preview-tab-content";
import type { AppShellStore } from "../app-shell/app-shell-tab-controller/types";
import { workspaceContextSignal as workspaceContextSignalRuntime } from "../runtime/workspace-signals";
import { useScopedQuery as useScopedQueryRuntime } from "../composer/composer-scope-hooks";
import { createQueryKey as createHostQueryKeyRuntime } from "../runtime/app-server-mutation-runtime";
import { useQuery as useReactQueryRuntime } from "../runtime/query-client/react-query-runtime";
import { s as remoteHostsSignalRuntime } from "./thread-context-inputs.facade";
import { appScopeO as readAppScopeStore, useAppScopeValue } from "./app-scope";
import {
  appAtomScope,
  appRootScope,
  appStoreScope,
  createComputedAtom,
  createComputedQueryAtom,
  createKeyedAtomFamily,
  createPersistedToggleAtom,
  createParametricAtom,
  createParametricStateAtom,
  createScopedAtom,
  createScopedComputedAtom,
  createScopedStateAtom,
  createScopedMutationAtom,
  createScopedQueryAtom,
  createScopedSelector,
  derivedAtomFamily,
  defineScope,
  queryAtomFamily,
  routeAtom,
} from "../runtime/onboarding-scope-runtime";
import {
  buildReviewDiffQueryKey as buildGitReviewQueryKey,
  createCwdQueryAtomFamily as createCwdQueryAtomFamilyRuntime,
} from "../runtime/git-query-runtime";
import { queryDurations as queryDurationsRuntime } from "../runtime/host-query-runtime";
import {
  canonicalizeRootPath as canonicalizeRootPathRuntime,
  isPathWithinRoot as isPathWithinRootRuntime,
} from "../runtime/onboarding-common-runtime";
import { pendingWorktreeInitPath as pendingWorktreeInitPathRuntime } from "../composer/composer-route-runtime";
import { normalizeRemoteConnectionToHostConfig as normalizeRemoteConnectionToHostConfigRuntime } from "../runtime/shared-object-host-runtime/remote-host-config";
import { recordProductEvent as recordProductEventRuntime } from "../runtime/query-scope-runtime/index";
import { useSelectedAccountQuery as useSelectedAccountQueryRuntime } from "../runtime/codex-api";
import { listBackgroundThreads as listBackgroundThreadsRuntime } from "../conversations/background-thread-list";
import { branchPushedProductEvent as branchPushedEventDescriptor } from "../analytics/analytics-runtime-externals";
import {
  ghPullRequestStatusQuery,
  ghPullRequestUrlSignal,
  hasOpenPullRequestSignal,
} from "../github/gh-pull-request-status-query";
import { connectedHostIdsSignal as connectedHostIdsSignalRuntime } from "../runtime/service-tier-runtime";
import {
  currentHostIdSignal as currentHostIdSignalRuntime,
  getRemoteConnectionState as getRemoteConnectionStateRuntime,
  useRemoteManagerRegistry as useRemoteManagerRegistryRuntime,
} from "../remote-connections/remote-connection-manager-runtime";
import { getLocalConversationPath as getLocalConversationPathRuntime } from "../conversations/local-conversation-route-runtime";
import {
  currentAppInitialSharedAcceptDeclineCancelFunction as buildMcpElicitationDecisionRuntime,
  currentAppInitialSharedMember0172 as pendingMcpElicitationByConversationSignalRuntime,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { conversationHeadBranchAtom as localConversationHeadBranchAtom } from "../review/local-git-action-branch-atoms";
import { uniq as uniqRuntime } from "../utils/uniq";
import { motion, motionTemplate } from "framer-motion";
import { sendAppServerRequest as sendAppServerRequestRuntime } from "./use-host-config.facade";
import { useCancelTaskMutation as useCancelTaskMutationRuntime } from "../runtime/codex-api";
import { useAppServerManager as useAppServerManagerRuntime } from "../app-server/app-server-manager-hooks/registry";
import { usePermissionsMode as usePermissionsModeRuntime } from "../utils/use-permissions-mode/use-permissions-mode";
import { useModelListQuery as useModelListQueryRuntime } from "../utils/model-queries";
import { useApplyDiffFindHighlight as useApplyDiffFindHighlightRuntime } from "../review/diff-find-highlight";
import { Toast } from "../ui/toast";
import {
  removeToast as removeToastRuntime,
  toastIdsSignal as activeToastIdsSignalRuntime,
  toastRecordSignal as toastRecordSignalRuntime,
} from "../ui/toast-signal";
import { _productLoggerVr as sidePanelTabViewedEventRuntime } from "../analytics/product-logger";
import { isBrowserSidebarEnabledSignal as isBrowserSidebarEnabledSignalRuntime } from "../browser/browser-tab-state-runtime";
import { SidePanelTabId as SidePanelTabIdRuntime } from "../app-shell/side-panel-runtime";
import {
  backgroundAgentsSignal as backgroundAgentsSignalRuntime,
  initBackgroundSubagentsRuntimeChunk,
} from "../conversations/background-subagent-signals";
import { useWindowsSandboxSetupContext as useWindowsSandboxSetupContextRuntime } from "../features/windows-sandbox";

export { appLogger as logger } from "../runtime/app-logger";
export {
  ActivityDisclosureHeaderRow,
  ActivityDisclosureLayout,
  ActivityDisclosurePaddedRegion,
  activityDisclosureTransition,
  useMeasuredElementHeight,
} from "../conversations/activity-disclosure";
export { LOCAL_HOST_ID } from "./use-host-config.facade";
export { sendHostRequest } from "../runtime/host-request-runtime";
export { useHostQuery } from "../runtime/host-query-runtime";
export { joinPath, normalizePath } from "../runtime/path-helpers-runtime";
export { useQueryClient } from "../runtime/query-client/react-query-context";
export {
  reviewLoadFullFilesEnabledAtom,
  skipRevertConfirmationAtom,
} from "../review/review-persistent-settings";
export {
  useFeatureGate,
  useFeatureGate as useFeatureGateExposure,
} from "../statsig/use-feature-gate";
export { Button } from "../ui/button";
export { Checkbox } from "../utils/checkbox";
export { DiffStats as DiffLineStats } from "../ui/diff-stats";
export { KeyboardShortcutHint } from "../ui/keyboard-shortcut-hint";
export {
  AppPlaceholderIcon,
  BrowserHighlightedTabIcon,
  BrowserSiteSettingsIcon,
  CheckmarkIcon,
  CodexAppToolIcon,
  CodexThreadToolIcon,
  CommentSendIcon,
  GlobeFallbackIcon,
  InfoTooltipIcon,
  McpServerIcon,
  NodeReplIcon,
  OpenInIcon,
  PushIcon,
  ToolActivityIcon,
  WordWrapDisabledIcon,
  WordWrapEnabledIcon,
} from "../icons/facade-icon-aliases";
export { ChevronRightIcon as DisclosureChevronIcon } from "../icons/chevron-right-icon";
export { WarningIcon as WarningCircleIcon } from "../icons/warning-icon";
export {
  InlineStatusDivider,
  ModelChangedIcon,
} from "../conversations/inline-status-runtime";
export {
  CollapseAllDiffsIcon,
  ErrorIcon,
  ExpandAllDiffsIcon,
  FileViewerOptionsIcon,
  GitBlameIcon,
  LoadFullFilesIcon,
  RawOutputIcon,
  RefreshIcon,
  ReviewDiffOptionsMenuItems,
  ReviewOptionsMenuIcon,
  ReviewToolbarIconButton,
  RichPreviewDisabledIcon,
  RichPreviewEnabledIcon,
  RichViewActiveIcon,
  RichViewIcon,
  SplitDiffModeIcon,
  UnifiedDiffModeIcon,
  WordDiffEnabledIcon,
} from "../review/review-options-runtime";
export {
  gitBlameEnabledAtom,
  isReviewLoadingAtom,
  loadMoreReviewMatches,
  reviewBranchDiffAvailableAtom,
  reviewCanRefreshAtom,
  reviewCappedModeAtom,
  reviewCappedVisibleCountAtom,
  reviewDiffModeAtom,
  reviewDiffWrapAtom,
  reviewErrorAtom,
  reviewExpandedBottomInset,
  reviewFileCountsAtom,
  reviewFilesVisibleAtom,
  reviewFindActiveAtom,
  reviewFindStateAtom,
  reviewHasDiffsAtom,
  reviewRichPreviewEnabledAtom,
  reviewSearchControllerAtom,
  reviewSearchableFileEntriesAtom,
  reviewSelectedPathAtom,
  reviewTestIds,
  reviewVisibleFileEntriesAtom,
  reviewWordDiffsEnabledAtom,
  richPreviewEnabledAtom,
  setReviewActivePath,
  setReviewFilesVisible,
  setRichPreviewEnabled,
  toggleArtifactPreview,
  wordWrapEnabledAtom,
} from "../review/review-ui-state-runtime";
export { CalendarIcon as ScheduledTaskIcon } from "../icons/calendar-icon";
export { ConnectorLogo as ConnectorLogoImage } from "../utils/connector-logo";
export {
  DialogBody,
  DialogFooter,
  DialogFooterRow,
  DialogForm,
  DialogHeader,
  DialogHeading,
  DialogLayout as Dialog,
  DialogPanel,
  DialogSection,
  DialogSubtitle,
  DialogTitleBlock,
} from "../ui/dialog-layout";
export { Dropdown, DropdownMenu as Menu } from "../ui/dropdown";
export { IconButton } from "../review/action-popover-primitives/row-primitives";
export { Spinner } from "../ui/spinner";
export { Tooltip } from "../ui/tooltip-b";
export {
  toastApiSignal,
  toastApiSignal as toastControllerAtom,
  toastApiSignal as toastControllerSignal,
  toastApiSignal as toastControllerToken,
  toastApiSignal as toastNotificationAtom,
} from "../ui/toast-signal";
export {
  createComputedAtom,
  createComputedQueryAtom,
  createKeyedAtomFamily,
  createParametricAtom,
  createParametricStateAtom,
  createPersistedToggleAtom,
  createScopedAtom,
  createScopedComputedAtom,
  createScopedMutationAtom,
  createScopedQueryAtom,
  createScopedSelector,
  createScopedStateAtom,
  derivedAtomFamily,
  defineScope,
  queryAtomFamily,
  appStoreScope as appStore,
  useAppScopeValue,
  useAppScopeValue as useAppScopeFamilyValue,
  useAppScopeValue as useScopedValue,
  useAppScopeValue as useSignalValue,
  readAppScopeStore as useAppScope,
  readAppScopeStore as useAppStore,
  readAppScopeStore as useScope,
  readAppScopeStore as useScopedStore,
  readAppScopeStore as useStore,
};
export { useAtomValue } from "../vendor/jotai-runtime";
export { findModelById } from "../app-shell/home-ambient-suggestions/model-announcements";
export {
  useCollaborationMode as useActiveCollaborationMode,
  useCollaborationMode as useCollaborationModes,
} from "../collaboration/use-collaboration-mode";
export { useElementWidth as useMeasuredWidth } from "../utils/use-resize-observer";
export {
  closeModalControllerModal as closeModal,
  useModalControllerState as useModals,
} from "../ui/modal-controller-state";
export { projectlessOnboardingCompletedSignal } from "../onboarding/onboarding-state";
export { setPersistedAtomValueInMemory as setPersistedAtomValue } from "../utils/persisted-atom-store";
export { usePlatform } from "../utils/use-platform";
export {
  useStableCallback,
  useStableCallback as useEventCallback,
  useStableCallback as useStableEventCallback,
} from "../utils/use-stable-callback";
export { useWindowZoom } from "../utils/window-zoom-context";
export {
  formatKeyboardShortcut,
  keyboardShortcutRegistry,
  resolveCommandBindings,
  useCommandHandler,
  useCommandShortcut,
  useKeyboardAccelerator,
  useNamedKeyboardShortcut,
} from "../utils/keyboard-shortcuts-runtime";
export { HostRequestError } from "../runtime/host-error-runtime";
export {
  AppBuildChannel,
  getAppBuildChannel,
} from "../runtime/build-channel-runtime";
export { loadImageFileDataUrl } from "../runtime/image-file-data-url-runtime";
export {
  mdastToText,
  parseMarkdown,
  stringifyMarkdown,
} from "../runtime/markdown-lite-runtime";
export {
  applyChromeThemeToElement,
  resolveChromeTheme,
} from "../runtime/chrome-theme-runtime";
export {
  appDisplayName,
  appName,
  httpsUrlSchema,
  isEqual,
  isEqual as isDeepEqual,
  last,
  startCase,
} from "../runtime/onboarding-basic-externals-runtime";
export {
  azureBlobStorageClient,
  azureBlobUploadHeaderName,
  buildApiRequestInit,
  filesApiClient,
  httpClient,
} from "../runtime/http-client-runtime";
export {
  MINUTES_PER_DAY,
  MINUTES_PER_HOUR,
  MINUTES_PER_MONTH,
  MINUTES_PER_WEEK,
  MINUTES_PER_YEAR,
  formatIntervalLabel,
  formatRruleSummary,
  formatScheduleSummary,
  summarizeMinuteInterval,
  summarizeTimeOfDay,
} from "../runtime/automation-schedule-summary-runtime";
export { useHostConfigValue } from "../runtime/host-config-value-runtime";
export {
  DocumentFileTypeIcon,
  DriveFileTypeIcon,
  ImageFilePreview,
  MarkdownFilePreview,
  MoleculeFilePreview,
  OpenFileButton,
  OpenFileContextMenuWrapper,
  PdfFilePreview,
  PresentationFileTypeIcon,
  SpreadsheetFileTypeIcon,
  copyFileContentsToClipboard,
} from "../review/file-preview-runtime";
export type { Rect } from "../image-side-panel/paged-annotation-overlay-geometry";
export {
  DEFAULT_COLLABORATION_MODE,
  RequestAbortedError,
  VisuallyHidden,
  VisuallyHiddenDescription,
  VisuallyHiddenTitle,
  createRequestAbortedError,
  dismissActivePopover,
  getWorkspaceCwd,
  isRemoteControlBridgeDisabled,
  resolveQueryOptions,
  uniqBy,
} from "../runtime/onboarding-utility-runtime";
export {
  useHost,
  useHostPlatform,
  usePushToTalkHotkey,
  useRouteMatch,
  useSessionState,
  useSetSignal,
  useSharedStateValue,
  useStatsigDynamicConfig,
  setSharedObjectValue,
} from "../runtime/onboarding-hooks-runtime";
export {
  ProjectStorageKey,
  usePersistedValue,
  writePersistedValue,
} from "../runtime/persisted-global-state-runtime";
export {
  activeAutomationSeedSignal,
  pendingAutomationDirectiveSignal,
  threadSettingsByIdSignal,
} from "../runtime/onboarding-state-runtime";
export { PlanType } from "../runtime/plan-type-runtime";
export { SettingKeys } from "../settings/settings-keys-runtime";
export {
  agentModeFromPermissions,
  buildThreadPermissions,
} from "../runtime/thread-permissions-runtime";
export {
  appShellLayoutContext,
  bottomPanelHeightRatioSignal,
  computeMainContentTargetWidth,
  devicePixelRatioSignal,
  floatingLeftPanelTransition,
  getInitialLeftPanelWidth,
  leftPanelOpacitySignal,
  leftPanelWidthSignal,
  mainContentMeasurementSignal,
  measureElementSize,
  persistLeftPanelWidth,
  pointerPositionSignals,
  prefersReducedMotionSignal,
  roundLeftPanelWidth,
  roundToDevicePixels,
  scalePx,
  serializeMainContentMeasurement,
  setHoveredAppShellFocusArea,
  sidebarPeekActiveSignal,
  sidebarVisibleSignal,
  useApplicationMenuBarEnabled,
  useAppShellLayout,
  useDevicePixelRatio,
  useAppShellLayout as useRightPanelLayout,
  useTitleBarSafeAreaInsets,
} from "../app-shell/app-shell-layout-runtime";
export {
  appShellPanelDragContext,
  computeRightPanelWidth,
  computeRightPanelWidthRatio,
  computeStoredRightPanelWidthRatio,
  panelSpringTransition,
  persistRightPanelWidth,
  setRightPanelOpenPreservingMaximized,
  showMultiTabCloseMenuSignal,
  sidebarPeekHoverSignal,
  sidebarPeekLockedSignal,
  sidebarTriggerHoveredSignal,
  TabPanelErrorBoundary,
  useAppShellTabState,
  workspaceProvisioningStateSignal,
} from "../app-shell/app-shell-panel-runtime";
export {
  setTerminalFocused,
  terminalFocusedSignal,
} from "../runtime/terminal-focus-runtime";
export { terminalSessionManager } from "../runtime/terminal-session-manager-runtime";
export {
  evaluateFeatureGate,
  getFeatureGateValue,
} from "../runtime/feature-gate-runtime";
export {
  labelFromConversationInput,
  mergeRuntimeWorkspaceRoots,
  mergeSandboxPolicyRoots,
  resolveRuntimeWorkspaceRoots,
  sanitizeThreadConfig,
  serializeConfig,
  threadPermissionsSignal,
} from "../runtime/thread-start-runtime";

export const useAtomFamilyValue = useAppScopeValue;
export const useAtomFamily = useAppScopeValue;
export const useScopedAtomValue = useAppScopeValue;
export const useConversationAtomValue = useAppScopeValue;
export const useKeyedAtomValue = useAppScopeValue;
export const createParametricQueryAtom = createScopedQueryAtom;
export { motion };
export const MotionButton = motion.button;
export { motionTemplate };

// RESTORED ONBOARDING COMMONS REEXPORTS START
export {
  AnimatePresence,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useTransform as useMotionTransform,
} from "framer-motion";
export { clsx } from "../utils/class-names";
export {
  ActivityDisclosureChevron,
  ToolActivityCard,
  ToolActivityDisclosureHeader,
  defaultLayoutTransition,
  useDisclosureContentHeight,
} from "../conversations/activity-disclosure";
export {
  ShimmerText as AnimatedActivityLabel,
  ShimmerText,
} from "../ui/thinking-shimmer";
export { ActivityScrollContainer as AutoScrollingActivityList } from "../conversations/activity-scroll-container";
export { createToolErrorResult as buildToolErrorResult } from "../runtime/tool-result-runtime";
export { appShellStateExportKAlias as APP_SHELL_FOCUS_AREA_ATTR } from "../app-shell/app-shell-state";
export {
  Dropdown as ActionMenu,
  DropdownMenu as ActionPopover,
} from "../ui/dropdown";
export { Command as CommandMenu } from "../vendor/cmdk";
export {
  CommandMenuItem,
  initCommandMenuItemComponent,
} from "../ui/command-menu-item";
export {
  CommandMenuGroup,
  CommandMenuList,
  CommandMenuListItem,
  FIRST_COMMAND_ITEM_VALUE,
  commandMenuRegistrationsSignal,
  useCommandMenuRegistration,
  useCommandMenuRegistrations,
  useCommandMenuState,
  useCommandMenuStore,
  useRegisterCommandMenuGroup,
} from "../runtime/command-menu-runtime";
export { workspaceGroupsSignal as commandMenuWorkspaceGroupsAtom } from "../runtime/workspace-signals";
export {
  ALL_WEEKDAYS,
  DAILY_WEEKLY_STANDALONE_OPTION_KEYS,
  DEFAULT_SCHEDULE_TIME,
  HOURLY_STANDALONE_OPTION_KEYS,
  MINUTELY_STANDALONE_OPTION_KEYS,
  RRULE_WEEKDAY_BY_TOKEN,
  WEEKDAYS_MONDAY_TO_FRIDAY,
  currentTimeZoneId,
  formatRruleTime,
  isValidRruleText,
  normalizeRruleMinute,
  parseScheduleTime,
  representativeWeekday,
  weekdaysFromByweekday,
  weekdaysFromRruleText,
} from "../settings/automations/schedule-rrule-helpers";
export {
  bezierPathSpringConfig,
  buildBezierPath,
  clamp,
  pointDistance,
  sampleBezierPath,
  tangentToAngleDeg,
} from "../browser/browser-agent-cursor-bezier-path";
export { useConversationParentModel } from "../conversations/use-conversation-parent-model";
export {
  composerModeState as composerModeAtom,
  imageAttachmentsState as imageAttachmentsAtom,
  imageCommentDraftState as imageCommentDraftAtom,
} from "../composer/composer-view-state/selectors";
export { updateComposerState } from "../composer/composer-view-state/mutations";
export {
  ConversationMarkdown,
  initConversationMarkdownViewChunk,
  parseCommentMarkdown,
} from "../conversations/conversation-markdown-view";
export {
  FileReferenceHoverCard,
  FileReferenceLink,
  buildFileReference,
  formatWorkspacePathLabel,
  getFileIconComponent,
  isAbsolutePath,
  relativizePath,
} from "../conversations/file-reference-link";
export {
  FileTree,
  WorkspaceFileSourceTree,
  flattenReviewFileEntries,
  resolveTreeRowEventTarget,
  reviewBottomPadding,
} from "../review/simple-file-tree-runtime";
export {
  commentAttachmentToComment,
  parseCommentDisplay,
} from "../conversations/sent-comment-attachment-helpers";
export {
  SubagentInlineActivityContext,
  formatAgentIdLabel,
  formatModelLabel,
  getThreadDisplayName,
  normalizeThreadId,
  parseAgentSource,
  useMultiAgentActionsEnabled,
} from "../conversations/multi-agent-activity-helpers";
export {
  adjustCollapsedActivitySummary,
  buildCollapsedActivityKey,
  findIndexAfterLastAssistantMessage,
  getDynamicToolCallItem,
  getMcpToolCallGroupKey,
  getMcpToolCallItem,
  hasActiveLiveActivity,
  isDynamicToolCallUnit,
  isMcpToolCallExcludedFromGrouping,
  shouldCollapseGroupedUnits,
  shouldGroupDynamicToolCalls,
} from "../conversations/tool-activity-grouping-helpers";
export {
  appControlToolActivityDescriptors,
  buildCompletedSummaryPartKey,
  continuesLiveActivityBetweenCalls,
  findToolActivityDescriptor,
  isSummaryOnlyInConversationGroup,
  toolActivityDescriptors,
} from "../conversations/tool-activity-descriptors";
export { buildToolActivitySummaries } from "../conversations/tool-activity-summary-accumulator";
export {
  assertUnreachableToolActivity,
  codexAppToolNamespace,
  coreToolActivityDescriptors,
  findMatchingMcpApp,
  getMultiAgentToolGroupKey,
  getThreadsForkSummaryPartKey,
  getThreadsListSummaryPartKey,
  getThreadsReadSummaryPartKey,
  resolveAppForToolCall,
  shouldAutoExpandMcpToolCall,
  shouldHideMcpToolCall,
  subagentToolActivityDescriptors,
  threadsCreateInWorktreeTool,
  threadsCreateTool,
  threadsForkInWorktreeTool,
  threadsForkTool,
  threadsListTool,
  threadsReadTool,
  threadsSendMessageTool,
  threadsSetArchivedTool,
  threadsSetPinnedTool,
  threadsSetTitleTool,
  toToolActivitySummaryUnit,
} from "../conversations/tool-activity-runtime";
export {
  getFileExtension,
  openFileAtLine,
  useHostRequest,
} from "../runtime/file-open-runtime";
export {
  buildLocalFileSrc,
  copyTextToClipboard,
  errorToString,
  fuzzyMatchScore,
  getAbsoluteImageFilePath,
  getLocalPathForFile,
  isDisplayableImageSrc,
  isBlankText,
  loadFileDataUrl,
  normalizeBrowserUrl,
  openFileInEditor,
  parseLocalFilePointer,
  toSentenceCase,
} from "../runtime/commons-utility-runtime";
export { parseUnifiedDiffFileSummaries as parseUnifiedDiff } from "../utils/unified-diff-file-summaries";
export { UnifiedFileDiffRenderer as UnifiedFileDiffView } from "../review/unified-file-diff-renderer";
export {
  DURATIONS,
  Durations,
  analyticsClickSource,
  appMessenger,
  basename,
  buildQueryKey,
  canonicalizeRootPath,
  codexAnalyticsConfigAtom,
  conversationAtomScope,
  conversationHostIdAtom,
  createEphemeralConversationId,
  dispatchHostRequest,
  getHostBridge,
  getHostKey,
  getRpcClient,
  getThreadId,
  intlAtom,
  intlAtom as intlControllerAtom,
  invokeAppServerRequest,
  isPathWithin,
  isPathWithinRoot,
  normalizeRequestCwd,
  openExternalLink,
  openExternalLinkFromEvent,
  pathIsCaseInsensitive,
  pathIsWindowsStyle,
  pushStatusAtom,
  reviewMetadataScope,
  showComposerToast,
  threadAtomScope,
  trackScopedAnalyticsEvent,
  toWorkspaceRootPath,
  useEffectEvent,
  useSetting,
  workspaceRootAtom,
  workspaceRootToCwd,
} from "../runtime/onboarding-common-runtime";
export {
  SidePanelTabId,
  SidePanelTabKind,
  focusBrowserSidePanelPanel,
  focusSidePanelTab,
  getSidePanelTabControllerForTarget,
  sidePanelTabController,
} from "../app-shell/side-panel-runtime";
export {
  activeCwdAtom,
  allowBrowserTabWithoutPlacementAtom,
  BrowserTabTrailingIndicators,
  BrowserTabType,
  browserHostConfigAtom,
  browserHostIdAtom,
  browserHostServices,
  browserSidebarTabManager,
  browserTabType,
  browserToolbarActionEvent,
  browserToolbarActionType,
  deriveBrowserTabDisplay,
  formatBrowserTabHostname,
  getBrowserTabPlacement,
  getBrowserSitePermissionsOrigin,
  getDefaultBrowserTabId,
  isKnownBrowserTab,
  multiBrowserTabsEnabledAtom,
  newTabPageTitle,
  resolveActiveBrowserConversationId,
  toBrowserTabId,
} from "../browser/browser-tab-runtime";
export {
  bottomPanelOpenAtom,
  browserAnnotationTakeoverEvent,
  browserCommentRouteKey,
  browserCommentSubmittedEvent,
  browserDesignRouteKey,
  browserFloatingComposerVisibleAtom,
  browserOpenedInExternalEvent,
  browserSidebarMessenger,
  cleanupBrowserTabOnClose,
  ensureBrowserPageState,
  getPagePersistenceContext,
  getPendingBrowserOpenReason,
  getPendingBrowserOpenSource,
  handleBrowserTabActivated,
  isBrowserSidebarEnabledAtom,
  isBrowserSidebarEnabledSignal,
  markBrowserToolbarInteracted,
  normalizeBrowserActiveTab,
  normalizeBrowserRouteKind,
  persistBrowserRouteEntry,
  removeBrowserPageState,
  resetBrowserChromeAutoHide,
  resolveBrowserTabId,
  rightPanelOpenAtom,
  setBrowserChromeForceVisible,
  shouldRemoveSourceBrowserStateWhenEmpty,
  toggleBrowserFloatingComposer,
} from "../browser/browser-tab-state-runtime";
export type { CommentPopupHandle } from "../browser/browser-comment-popup-window";
export {
  MAX_BROWSER_DEVICE_HEIGHT,
  MAX_BROWSER_DEVICE_WIDTH,
  RESPONSIVE_PRESET_ID,
  browserDevicePresets,
  clampBrowserDeviceHeight,
  clampBrowserDeviceWidth,
  computeBrowserDeviceResize,
  getResponsiveViewportSize,
  parseBrowserDevicePreset,
  rotateDeviceToolbarState,
} from "../browser/browser-device-toolbar-runtime";
export {
  appShellHeaderActionEntriesSignal,
  appShellHeaderContextMenuItemsSignal,
  appShellHeaderEndEntriesSignal,
  appShellHeaderStartEntriesSignal,
} from "../app-shell/app-shell-header-signal-runtime";
export const appScopeAtom = appAtomScope;
export const appRouteScope = appRootScope;
export const processManagerScope = appRootScope;
export const gitCwdParamsAtom = appStoreScope;
export const atomFamily = createParametricStateAtom;
export const listAtom = createParametricStateAtom;
export const createWritableSignalAtom = createParametricStateAtom;
export const createDerivedAtom = createComputedAtom;
export const deriveAppScopeAtom = createComputedAtom;
export const createRouteScopedComputedAtom = createComputedAtom;
export const storedThreadBranchAtom = createParametricStateAtom(
  appStoreScope,
  () => null,
);
export const branchDisplayConfigAtom = createParametricStateAtom(
  appStoreScope,
  () => ({ fallbackLabel: "current branch" }),
);
export const conversationPullRequestUrlAtom = createParametricAtom(
  appStoreScope,
  (
    params: {
      cwd?: string | null;
      hostConfig?: { id?: string | null } | null;
      operationSource?: string;
    },
    { get },
  ): string | null => {
    const headBranch =
      get<string | null>(localConversationHeadBranchAtom, params) ?? "";
    const hostId = params.hostConfig?.id ?? null;
    if (hostId == null || headBranch.length === 0) return null;
    return get<string | null>(ghPullRequestUrlSignal, {
      cwd: params.cwd,
      headBranch,
      hostId,
      operationSource:
        params.operationSource ?? "local_conversation_git_actions",
    });
  },
);
export const conversationHasOpenPullRequestAtom = createParametricAtom(
  appStoreScope,
  (
    params: {
      cwd?: string | null;
      hostConfig?: { id?: string | null } | null;
      operationSource?: string;
    },
    { get },
  ): boolean => {
    const headBranch =
      get<string | null>(localConversationHeadBranchAtom, params) ?? "";
    const hostId = params.hostConfig?.id ?? null;
    return (
      hostId != null &&
      headBranch.length > 0 &&
      get<boolean>(hasOpenPullRequestSignal, {
        cwd: params.cwd,
        headBranch,
        hostId,
        operationSource:
          params.operationSource ?? "local_conversation_git_actions",
      })
    );
  },
);

export function createScopedStoreFactory<TKey, TValue>(
  scope: unknown,
  buildStore: (
    key: TKey,
    context: {
      get: (atom: unknown, key?: unknown) => unknown;
      set: (atom: unknown, keyOrValue: unknown, value?: unknown) => void;
      signal: <TSignalValue>(initialValue: TSignalValue) => unknown;
    },
  ) => TValue,
  options?: unknown,
): unknown {
  return createParametricAtom(
    scope,
    (key: TKey, context) =>
      buildStore(key, {
        get: context.get,
        set: context.set,
        signal: (initialValue) =>
          createParametricStateAtom(scope, () => initialValue),
      }),
    options,
  );
}

export function buildBranchAheadCountQueryKey(args: {
  metadata?: { commonDir?: string; root?: string } | null;
  method: string;
  params?: Record<string, unknown> | null;
  hostKey?: unknown;
}): readonly unknown[] {
  return buildGitReviewQueryKey({
    ...args,
    hostKey:
      args.hostKey == null
        ? null
        : typeof args.hostKey === "string"
          ? args.hostKey
          : String(args.hostKey),
  });
}

export function buildReviewSummaryQueryKey(
  commonDir: string,
  root: string,
  hostKey?: unknown,
): readonly unknown[] {
  return buildGitReviewQueryKey({
    metadata: { commonDir, root },
    method: "review-summary",
    hostKey:
      hostKey == null
        ? null
        : typeof hostKey === "string"
          ? hostKey
          : String(hostKey),
  });
}

type QueryClientLike = {
  invalidateQueries?(filters?: { queryKey?: unknown } | unknown): unknown;
};

function readQueryClient(value: unknown): QueryClientLike | null {
  if (value == null || typeof value !== "object") return null;
  const candidate = value as {
    invalidateQueries?: QueryClientLike["invalidateQueries"];
    queryClient?: QueryClientLike;
  };
  return typeof candidate.invalidateQueries === "function"
    ? candidate
    : (candidate.queryClient ?? null);
}

export function formatBranchForDisplay(
  config: { fallbackLabel?: string } | null | undefined,
  branch: string | null | undefined,
): string {
  const trimmedBranch = branch?.trim();
  return trimmedBranch && trimmedBranch.length > 0
    ? trimmedBranch
    : (config?.fallbackLabel ?? "current branch");
}

export function invalidateGitQueries(
  queryClientOrScope: unknown,
  commonDirOrMetadata?: string | { commonDir?: string; root?: string } | null,
  options: { hostKey?: unknown } = {},
): unknown {
  const queryClient = readQueryClient(queryClientOrScope);
  if (queryClient == null) return undefined;
  const metadata =
    typeof commonDirOrMetadata === "string"
      ? { commonDir: commonDirOrMetadata }
      : (commonDirOrMetadata ?? null);
  queryClient.invalidateQueries?.({ queryKey: ["git"] });
  return queryClient.invalidateQueries?.({
    queryKey: buildGitReviewQueryKey({
      metadata,
      method: "metadata",
      hostKey:
        options.hostKey == null
          ? null
          : typeof options.hostKey === "string"
            ? options.hostKey
            : String(options.hostKey),
    }),
  });
}

export function invalidateBranchMetadataQueries(
  queryClientOrScope: unknown,
  metadata: { commonDir?: string; root?: string } | null | undefined,
  options: { changeType?: string; hostKey?: unknown } = {},
): void {
  const queryClient = readQueryClient(queryClientOrScope);
  if (queryClient == null || metadata == null) return;
  for (const method of [
    "metadata",
    "current-branch",
    "default-branch",
    "branch-ahead-count",
    "upstream-branch",
  ]) {
    queryClient.invalidateQueries?.({
      queryKey: buildGitReviewQueryKey({
        metadata,
        method,
        params: options.changeType ? { changeType: options.changeType } : null,
        hostKey:
          options.hostKey == null
            ? null
            : typeof options.hostKey === "string"
              ? options.hostKey
              : String(options.hostKey),
      }),
    });
  }
}

export function invalidatePullRequestStatus(
  queryClientOrScope: unknown,
  hostId: string,
): unknown {
  const queryClient = readQueryClient(queryClientOrScope);
  return queryClient?.invalidateQueries?.({
    queryKey: ["gh-pr-status", { hostId }],
  });
}

export function recordBranchPushed(
  scope: unknown,
  payload: {
    branch?: string | null;
    cwd?: string | null;
    forced?: boolean;
    hostConfig?: unknown;
    operationSource?: string;
  } = {},
): void {
  recordProductEventRuntime(scope, branchPushedEventDescriptor, {
    branch: payload.branch ?? null,
    forced: payload.forced ?? false,
  });
}

export function resolveDefaultTargetBranch(
  metadata:
    | {
        baseBranch?: string | null;
        defaultBranch?: string | null;
        targetBranch?: string | null;
      }
    | null
    | undefined,
): string | null {
  return (
    metadata?.targetBranch ??
    metadata?.defaultBranch ??
    metadata?.baseBranch ??
    null
  );
}

export { addCoordinates, findFirstFocusableNode, subtractCoordinates };

export const DRAGGABLE_ID_PREFIX = "DndDraggable";
export const DROPPABLE_ID_PREFIX = "DndDroppable";
export const DndAction = Object.freeze({
  DragStart: "dragStart",
  DragMove: "dragMove",
  DragEnd: "dragEnd",
  DragCancel: "dragCancel",
  DragOver: "dragOver",
  RegisterDroppable: "registerDroppable",
  SetDroppableDisabled: "setDroppableDisabled",
  UnregisterDroppable: "unregisterDroppable",
});
export const ScrollDirection = Object.freeze({
  Forward: 1,
  Backward: -1,
  1: "Forward",
  [-1]: "Backward",
});
export const TraversalOrder = Object.freeze({
  TreeOrder: 0,
  ReversedTreeOrder: 1,
  0: "TreeOrder",
  1: "ReversedTreeOrder",
});
export const defaultCoordinates = Object.freeze({ x: 0, y: 0 });
export const defaultRects: unknown[] = [];
export const defaultDroppableRectMap = new Map();
export const defaultScrollableAncestors: unknown[] = [];
export const defaultScrollThreshold = Object.freeze({ x: 0.2, y: 0.2 });
export const defaultScrollIntent = Object.freeze({
  x: {
    [ScrollDirection.Backward]: false,
    [ScrollDirection.Forward]: false,
  },
  y: {
    [ScrollDirection.Backward]: false,
    [ScrollDirection.Forward]: false,
  },
});
export const defaultResizeObserverConfig = Object.freeze({ timeout: 25 });
export const defaultActiveDraggableContext = Object.freeze({
  ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1,
});

export function getClientRect(
  element: { getBoundingClientRect: () => DOMRect | ClientRect },
): {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
} {
  const { top, left, right, bottom, width, height } =
    element.getBoundingClientRect();
  return { top, left, right, bottom, width, height };
}

export const defaultMeasuringConfiguration = Object.freeze({
  draggable: { measure: getClientRect },
  droppable: {
    measure: getClientRect,
    strategy: 2,
    frequency: "optimized",
  },
  dragOverlay: { measure: getClientRect },
});

function noop(): void {}

export class DroppableContainersMap<
  TKey = unknown,
  TValue extends {
    disabled?: boolean;
    node?: { current?: unknown };
  } = {
    disabled?: boolean;
    node?: { current?: unknown };
  },
> extends Map<TKey, TValue> {
  override get(key: TKey | null | undefined): TValue | undefined {
    return key == null ? undefined : super.get(key);
  }

  toArray(): TValue[] {
    return Array.from(this.values());
  }

  getEnabled(): TValue[] {
    return this.toArray().filter((container) => !container.disabled);
  }

  getNodeFor(key: TKey | null | undefined): unknown {
    return this.get(key)?.node?.current;
  }
}

export const defaultInternalContext = Object.freeze({
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: new Map(),
  droppableRects: defaultDroppableRectMap,
  droppableContainers: new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: { current: null },
    rect: null,
    setRef: noop,
  },
  scrollableAncestors: defaultScrollableAncestors,
  scrollableAncestorRects: defaultRects,
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false,
});
export const ActiveDraggableContext = React.createContext(
  defaultActiveDraggableContext,
);
export const DndMonitorContext = React.createContext(null);
export const InternalContext = React.createContext(defaultInternalContext);
export const NullContext = React.createContext(null);
export const defaultDropAnimationConfiguration = Object.freeze({
  duration: 250,
  easing: "ease",
  keyframes: ({
    transform,
  }: {
    transform: { initial: unknown; final: unknown };
  }): { transform: unknown }[] => [
    { transform: transform.initial },
    { transform: transform.final },
  ],
});

export function derivedTransformTransition(event: unknown): string | undefined {
  return isDndKeyboardEvent(event) ? "transform 250ms ease" : undefined;
}

export function normalizeSortableDisabled(
  disabled:
    | boolean
    | { draggable?: boolean; droppable?: boolean }
    | null
    | undefined,
): { draggable: boolean; droppable: boolean } {
  return typeof disabled === "boolean"
    ? { draggable: disabled, droppable: disabled }
    : {
        draggable: disabled?.draggable ?? false,
        droppable: disabled?.droppable ?? false,
      };
}

export { logProductEvent } from "../analytics/product-logger";
export { useProductLogger } from "../analytics/use-product-logger";
export {
  DialogHost,
  activeDialogAtom,
  closeDialog,
  openDialog,
} from "../runtime/dialog-runtime";
export { ExternalOpenLink } from "../runtime/external-open-link-runtime";
export {
  handleOpenResourceLink,
  openInBrowserTarget,
} from "../runtime/open-browser-target-runtime";
export {
  isBrowserOpenableUrl,
  shouldOfferOpenTargets,
} from "../runtime/open-target-browser-runtime";
export {
  filterOpenInTargets,
  buildOpenTargetMenuItems,
  isVisibleOpenTargetMenuItem,
} from "../runtime/open-target-menu-builders";
export {
  OpenTargetDropdownMenu,
  OpenTargetMenu,
} from "../runtime/open-target-menu-primitives";
export { useOpenTarget } from "../runtime/open-target-selection-runtime";
export {
  OpenTargetsPrefetch,
  OpenTargetsPrefetch as OpenInTargetsPreloader,
  useOpenTargets,
  useOpenTargets as useOpenInTargets,
} from "../runtime/open-targets-query-runtime";
export {
  AppConnectDialog,
  GoogleWorkspaceExportMenuItems,
  analyticsClickAction,
  getGoogleWorkspaceExportTarget,
  trackGoogleWorkspaceResourceClick,
  useConnectApp,
} from "../runtime/google-workspace-resource-runtime";
export {
  GeneratedImagePlaceholder,
  GeneratedImagesGrid,
  TurnDiffView,
  WebSearchSources,
  extractReviewComments,
  focusReviewSidePanel,
  getReviewCommentBody,
  getReviewCommentKey,
  getReviewCommentLineLabel,
} from "../conversations/turn-artifact-runtime";
export {
  computeEndResources,
  getEndResourcePaths,
  shouldHideTurnDiff,
} from "../runtime/conversation-artifact-runtime";
export { buildPatchUnifiedDiff } from "../conversations/local-conversation-thread-parts/turn-diff-patch-runtime";
export {
  activeFindMatchClassName,
  applyMatchHighlight,
  buildSearchSnippet,
  clearFindHighlights,
  diffSearchMatchId,
  findLineElement,
  findMatchesInElement,
  findSearchMatchElement,
  findTextMatchOffsets,
} from "../find/review-find-runtime";
export { createDiffSearchController } from "../review/diff-search-controller-runtime";
export {
  buildArtifactContextMenuItems,
  describeWorkspaceFile,
  findTabPanelId,
  getArtifactIconComponent,
  getArtifactTitle,
  isOpenableArtifactType,
  prefetchArtifactFileQueries,
  resolveArtifactDescriptor,
  rightPanelExpandedAtom,
  setMainSidebarLayout,
} from "../workspace/workspace-artifact-runtime";
export {
  appShellHeaderContextMenuSurfaceSignal,
  bottomPanelAfterListSignal,
  bottomPanelAfterListStickySignal,
  bottomPanelAnimationSignal,
  bottomPanelEmptyStateSignal,
  bottomPanelFallbackContentSignal,
  mainContentLayoutSignal,
  rightPanelAfterListSignal,
  rightPanelAfterListStickySignal,
  rightPanelAnimationSignal,
  rightPanelBeforeListSignal,
  rightPanelEmptyStateSignal,
  rightPanelFallbackContentSignal,
  rightPanelMaximizedSignal,
  rightPanelStoredWidthSignal,
  rightPanelWidthConfigSignal,
} from "../app-shell/app-shell-state/app-shell-signals-impl";
export { appShellBottomPanelHeightSubscriberContext } from "../app-shell/bottom-panel-height-subscriber-context";
export { PlatformGate } from "../app-shell/platform-gate";
export { sidePanelSlots } from "../app-shell/side-panel-slots";
export {
  CloseIcon,
  SidePanelIcon,
} from "../app-shell/thread-app-shell-chrome/icons";
export {
  getConversationBrowserTabIdsForTransfer,
  getLastFocusedBrowserTabId,
} from "../app-shell/thread-browser-panel-tabs";
export {
  getAutomationSessionKey,
  getAutomationSuggestionTabId,
  resolveAutomationSession,
} from "../automations/automation-citation-session";
export {
  AutomationDetailRow,
  AutomationDetailSection,
} from "../automations/automation-side-panel/status-components";
export { BrowserAnnotationTakeoverToolbar } from "../browser/browser-annotation-takeover-toolbar";
export { BrowserDesignTweaksEditor } from "../browser/browser-design-tweaks/browser-design-tweaks-editor";
export { BrowserProfileImportNuxBanner as BrowserProfileImportNux } from "../browser/browser-profile-import-nux-banner";
export { BrowserSidebar as BrowserWebviewHost } from "../browser/browser-sidebar";
export {
  BROWSER_ZOOM_LEVELS,
  MAX_BROWSER_ZOOM_PERCENT,
  activeBrowserFindTargetAtom,
  activeBrowserTabIdQuery,
  activeBrowserTabSignal,
  activeSidePanelKindAtom,
  annotationAddModifierPressedAtom,
  annotationFlowKind,
  annotationModeEntrySource,
  browserAnnotationModeChangedEvent,
  browserDeviceToolbarBackgroundColor,
  browserDeviceToolbarLayoutAtom,
  browserFindFocusRequestAtom,
  browserFindStateAtom,
  browserNavigatedEvent,
  browserPanelOpenedEvent,
  clampBrowserZoomPercent,
  clearBrowserFindFocus,
  clearBrowserPendingNavigation,
  clearBrowserPendingOpen,
  designModifierPressedAtom,
  emptyBrowserFindState,
  extractBrowserComments,
  getPendingBrowserAddressOverride,
  importBrowserProfiles,
  isCommentForBrowserTab,
  isSidePanelVisibleAtom,
  markBrowserTabVisited,
  openBrowserFind,
  openBrowserPanelForTab,
  setActiveBrowserFindTarget,
  setActiveSidePanelKind,
  setBrowserFindState,
  syncBrowserOpenState,
  toBrowserCommentAttachment,
  useAsyncQueryValue,
} from "../browser/browser-commons-runtime";
export { browserProfileImportDialogOpenAtom } from "../browser/browser-profile-import-dialog-state";
export { browserProfileImportProfilesQuery as buildBrowserProfileImportQuery } from "../browser/browser-profile-import-query";
export {
  browserProfileImportNuxSeenAtom,
  shouldShowBrowserProfileImportNux,
} from "../browser/browser-profile-import-nux-state";
export { isBrowserTabMatch } from "../browser/browser-sidebar-host-utils";
export { clearBrowserBrowsingData } from "../browser/browser-use-origin-state-queries";
export {
  ResetZoomIcon,
  contactInfoChromiumPageId,
  extensionsChromiumPageId,
  historyChromiumPageId,
  passwordManagerChromiumPageId,
  useBrowserSettingsAvailability,
  useRouterNavigate,
  useSelectedBrowserHostId,
} from "../browser/browser-settings-runtime";
export { getLocalConversationTitle } from "../browser/chrome-extension-header-model";
export {
  isDefaultCollaborationMode,
  isPlanCollaborationMode,
  runTogglePlanMode,
} from "../composer/collaboration-modes";
export {
  activeFollowUpAtom,
  composerDraftTextAtom,
  getComposerRemountKey,
  isDraftThreadId,
  isPromptDraftText,
  isPromptDraftText as isPromptDraftTextValue,
} from "../composer/composer-atoms";
export {
  composerAddedFilesAtom,
  composerCommentAttachmentsAtom,
  composerCwdOverrideAtom,
  composerFileAttachmentsAtom,
  composerImageCommentDraftAtom,
  composerImageInputsAtom,
  composerMcpAppModelContextAtom,
  composerPastedTextAttachmentsAtom,
  composerSelectedTextAttachmentsAtom,
} from "../composer/composer-attachment-atoms";
export {
  pullRequestChecksState as composerPullRequestChecksAtom,
  pullRequestMergeConflictState as composerPullRequestMergeConflictAtom,
} from "../composer/composer-view-state/selectors";
export {
  buildComposerImageInputItems,
  buildAttachmentsPayload,
  getComposerPromptText,
  mergeFileAttachments,
  normalizeConversationAttachments,
  removeAllImageComments,
  splitCommentsForSubmit,
  toImageAttachmentInputs,
} from "../composer/composer-attachment-builders";
export {
  AddContextButton,
  ComposerInputField,
  SelectedTextPortal,
} from "../composer/composer-editor-runtime";
export { Composer } from "../composer/composer";
export {
  buildSideChatDisplayTitle,
  openSideChat,
} from "../composer/composer-submit";
export { AboveComposerSuggestionActions } from "../composer/above-composer-suggestion-actions";
export { AppshotCaptureControls } from "../composer/appshot-capture";
export {
  BlockedSubmitDialog,
  CloudModeIndicator,
  PluginContextLoader,
  SideChatPrompt,
} from "../composer/composer-banners/composer-inline-banners";
export {
  GoalReplacementConfirmationDialog,
  GoalResumePromptDialog,
} from "../composer/composer-banners/goal-dialogs";
export { HooksNeedingReviewBanner } from "../composer/composer-banners/hooks-needing-review-banner";
export {
  AnnouncementBanner,
  FirstBlockRateLimitBanner,
  RateLimitBanner,
} from "../composer/composer-banners/rate-limit-banners";
export { ThreadGoalBanner } from "../composer/composer-banners/thread-goal-banner";
export {
  WindowsSandboxError,
  WindowsSandboxSetupBanner,
} from "../composer/composer-banners/windows-sandbox-banners";
export { ComposerAttachmentPills } from "../composer/composer-attachment-pills";
export { ComposerDropOverlay } from "../composer/composer-drop-overlay";
export { ComposerFooterControls } from "../composer/composer-footer-controls";
export { ComposerStatusMenuRow } from "../composer/composer-status-menu-row";
export { SelectedTextAction } from "../composer/selected-text-action";
export {
  useComposerAttachmentActions,
  useComposerAttachmentSetters,
  useComposerFileAssetAttachment,
  useImageInputSupport,
  usePastedTextAttachmentHandlers,
  usePendingFileAttachments,
} from "../composer/composer-attachment-hooks";
export { isComposerDictationTarget } from "../composer/composer-dictation-focus";
export { CheckIcon } from "../composer/composer-footer-branch-switcher/branch-badge";
export {
  resolveComposerKeyAction,
  resolveEscapeAction,
} from "../composer/composer-keyboard-actions";
export {
  aboveComposerPortalId,
  aboveComposerQueuePortalId,
} from "../composer/composer-portals";
export {
  useScopeConversationId,
  useScopeStore,
  useScopedQuery,
} from "../composer/composer-scope-hooks";
export { composerScope } from "../composer/composer-scope-runtime";
export {
  buildConversationRoute,
  conversationRoutePath,
  hostConversationRoutePath,
  hotkeyWindowBridge,
  isHotkeyWindow,
  openHotkeyWindowThread,
  openTaskPath,
  openThreadPath,
  parseThreadId,
  pendingWorktreeInitPath,
} from "../composer/composer-route-runtime";
export { openComposerReferencedFile } from "../composer/composer-reference-file-runtime";
export {
  composerScopeAtom,
  dismissMessageLimitBanner,
  hasSeenMultiAgentComposerBannerRunner,
  logComposerMessageSent,
  MULTI_AGENT_MODE,
  nextTurnModelOverrideSignal,
  reportComposerSubmitError,
  requiredHooksFilter,
  resolveComposerMode,
  setComposerScopedField,
} from "../composer/composer-state-runtime";
export { settingsAtoms, useSettingValue } from "../composer/composer-settings";
export {
  ComposerStoreContext,
  createComposerStore,
  useComposerStore,
} from "../composer/composer-store";
export { hostConnectionStatusSignal } from "../composer/local-conversation-composer-bridge";
export { resolveComposerExecutionTarget } from "../composer/resolve-composer-execution-target";
export { resolveCloudTaskType } from "../composer/submit-cloud-task";
export {
  clearGoalPromptAtomsRunner,
  parseGoalSubmit,
  resumeThreadGoal,
  saveThreadStartTarget,
} from "../composer/thread-goal";
export { useComposerController } from "../composer/use-composer-controller";
export { useComposerLayoutMode } from "../composer/use-composer-layout-mode";
export { useComposerMode } from "../composer/use-composer-mode";
export { useComposerPlaceholder } from "../composer/use-composer-placeholder";
export { useModelSettings } from "../composer/use-model-settings";
export {
  connectedHostIdsSignal,
  getAvailableServiceTierOptions,
  getServiceTierForModel as resolveServiceTier,
  getServiceTierForModel,
  hostConfigQueryKey,
  hostConfigQueryOptions,
  nextTurnThreadSettingsSignal,
  normalizeServiceTierId,
  resolveActiveServiceTier,
  resolveDefaultServiceTier,
  resolveModelOption,
  serviceTierChangedEvent,
  threadParamsByIdSignal,
  threadServiceTierByHostSignal,
  toServiceTierConfigValue,
  toServiceTierThreadOverride,
  useInvalidateQueries,
} from "../runtime/service-tier-runtime";
export { useAnalyticsEnabledQuery } from "../config/config-queries/host-config-queries";
export { hydrateBackgroundThreads } from "../conversations/background-thread-hydrate";
export {
  createBackgroundThread,
  getBackgroundProjects,
  listBackgroundProjects,
  listBackgroundThreads,
  readBackgroundThread,
  sendMessageToBackgroundThread,
  setBackgroundThreadArchived,
  setBackgroundThreadPinned,
  setBackgroundThreadTitle,
  threadManagerListSignal,
} from "../conversations/background-thread-runtime";
export {
  useBackgroundThreadRows,
  useBackgroundThreadTurnMap,
} from "../conversations/background-thread-rows";
export { collectStoppableBackgroundThreads } from "../conversations/background-thread-stop";
export { currentTurnKeyForConversation } from "../conversations/background-thread-turn-key";
export { currentRouteSignal } from "../conversations/current-route-signal";
export { computeGeneratedImageOutputs } from "../conversations/generated-image-outputs";
export { BackgroundSubagentsPanel } from "../conversations/local-conversation-page-parts/background-subagents-panel";
export { hasConversationSignal } from "../conversations/local-conversation-page-runtime";
export {
  ConversationCard,
  IconButtonTooltip,
  planSidePanelEnabledAtom,
  ShareConversationButton,
  sidePanelTabManager,
} from "../conversations/plan-summary-runtime";
export {
  useLocation,
  useNavigate,
} from "../conversations/local-conversation-route-runtime";
export { ConversationActivitySpacer } from "../conversations/local-conversation-thread-parts/conversation-activity-spacer";
export { isConversationItemInProgress } from "../conversations/local-conversation-thread-parts/conversation-item-in-progress";
export { toConversationId } from "../conversations/local-conversation-thread-parts/conversation-title-runtime";
export { getConversationNavigationPath } from "../conversations/local-conversation-thread-parts/local-conversation-navigation";
export { hostConfigSignal } from "../conversations/local-conversation-thread-parts/thread-summary-panel-runtime";
export { SubagentAvatar } from "../conversations/subagent-avatar";
export { useRemUnitMultiplier } from "../conversations/use-rem-unit-multiplier";
export {
  ACTIVE_DOWNLOAD_STATUSES,
  DOWNLOAD_METADATA_SEPARATOR,
  TERMINAL_DOWNLOAD_STATUSES,
  formatDownloadByteProgress,
  formatDownloadTimeRemaining,
  formatDownloadTimestamp,
  formatDownloadTransferRate,
} from "../downloads/download-formatting";
export {
  CodexAgentSparkIcon,
  DownloadsEmptyIcon,
  describeDownloadActionFailure,
  downloadsChromiumPageId,
  fileTypeIconMap,
  filterDownloadsForConversation,
  getDownloadsRegistrySnapshot,
  getDownloadsSnapshot,
  getFileTypeIconForName,
  resolveFileTypeFromPath,
  selectConversationDownloads,
  subscribeToDownloads,
  subscribeToDownloadsRegistry,
} from "../downloads/download-runtime";
export { DownloadsPopover as BrowserDownloadsList } from "../downloads/downloads-popover";
export { useSelectedAvatar } from "../features/custom-avatars-query";
export { DictationButton } from "../features/use-dictation/dictation-button";
export { DictationRecordingFooter } from "../features/use-dictation/recording-footer";
export { useDictation } from "../features/use-dictation/use-dictation";
export { findPreferredDomainAtom } from "../find/thread-find-atoms";
export { resolveCodeTheme } from "../github/diff-view-mode/theme-registry-impl";
export { DEFAULT_LOCALE, loadLocaleMessages } from "../i18n/locale-resolver";
export {
  appSettingsSnapshot,
  createHostInfoQuery,
  extractBaseLocale,
  findBestLocaleMatch,
  isBlankLocale,
  localeResolvedEvent,
  normalizeLocaleOverride,
  resolvedLocaleSignal,
  setDocumentLocale,
  useResolvedLocaleInfo,
} from "../runtime/locale-runtime";
export { BranchIcon } from "../icons/branch-icon";
export { ChevronRightIcon } from "../icons/chevron-right-icon";
export { CommentIcon } from "../icons/comment-icon";
export { CommitIcon } from "../icons/commit-icon";
export { CopyIcon } from "../icons/copy-icon";
export { DownloadIcon } from "../icons/download-icon";
export { ExternalLinkIcon } from "../icons/external-link-icon";
export { PlanIcon } from "../icons/plan-icon";
export { PlusIcon } from "../icons/plus-icon";
export { ReviewTabIcon } from "../icons/review-tab-icon";
export { UndoIcon } from "../icons/undo-icon";
export { WarningIcon } from "../icons/warning-icon";
export { ImagePreviewTabContent } from "../image-side-panel/image-side-panel";
export { ImagePreviewLightbox } from "../image-side-panel/image-preview-lightbox";
export { startComposerTurn } from "../image-side-panel/start-composer-turn";
export { CopyIcon as CopyLinkIcon } from "../icons/copy-icon";
export { stringSchema } from "../main/boundaries/shared-node-runtime-setting-schema";
export {
  ConversationalOnboardingAccessGate,
  ConversationalOnboardingArtifactCard,
  ConversationalOnboardingPermissionRequestCard,
  CsvFileDarkIcon,
  CsvFileLightIcon,
  GeneratingChartIcon,
  KnownAppLogo,
  MessagingPlaceholderIcon,
  ReadingFileIcon,
  conversationalOnboardingActiveTaskStateSignal,
  conversationalOnboardingAllSetSignal,
  conversationalOnboardingExecutionFailedSignal,
  conversationalOnboardingIntlAtom,
  conversationalOnboardingTaskStartedSignal,
  conversationalOnboardingTool,
  createConnectorOnboardingTask,
  openHostPath,
  prepareConversationalOnboardingExecution,
} from "../onboarding/conversational-onboarding-runtime";
export { useWorkspaceOnboardingExperiment } from "../onboarding/workspace-onboarding-controller/experiment-assignment";
export { logWorkspaceOnboardingEvent } from "../onboarding/workspace-onboarding-navigation-analytics";
export { isCodexAppsServer } from "../plugins/codex-apps-server";
export { parseFollowUpRequest } from "../plugins/mcp-app-follow-up-request";
export {
  buildMcpToolList,
  findMcpTool,
  resolveMcpConnectorId,
  resolveMcpSandboxOriginScope,
} from "../plugins/mcp-app-tool-resolver";
export {
  SANDBOX_PORT_NAMES,
  buildMcpAppSandboxId,
  buildMcpAppSandboxSourceUrl,
  buildSandboxFrameSrc,
  isNonEmptyStringArray,
  parseUrlOrigin,
  serializeSandboxPartition,
  stableHashSegment,
} from "../plugins/mcp-app-sandbox-runtime";
export {
  attachMcpAppPanelElement,
  buildMcpAppTabId,
  buildMcpToolActivityExpansionKey,
  detachMcpAppPanelElement,
  exitMcpAppFullScreen,
  markToolActivityTurnExpanded,
  mcpAppEntriesSignal,
  mcpAppEntryFamily,
  mcpAppFrameStateFamily,
  mcpAppManualExpansionFamily,
  mcpAppSidePanelOpenFamily,
  mcpAppStateFamily,
  mcpAppTabManager,
  mcpToolActivityExpansionFamily,
  openMcpAppExpandedSurface,
  readScopedAtom,
  resolveMcpAppTabId,
  rightPanelColumnCountSignal,
  setMcpAppInlineExpanded,
  setMcpToolActivityExpansion,
  toolActivityExpandedTurnKeysSignal,
  useSignalFamilyValue,
} from "../plugins/mcp-app-state-runtime";
export {
  callMcpCapabilityTool,
  callMcpToolRequestSchema,
  readMcpCapabilityResource,
  readMcpResourceRequestSchema,
  recordMcpResourceRead,
  useMcpAppId,
  useMcpAppResourceQuery,
} from "../plugins/mcp-app-request-runtime";
export {
  AutomaticApprovalReviewIndicator,
  AutomaticApprovalReviews,
  Callout,
  conversationCwdFamily,
  extractToolResponseMetadata,
  isDilServer,
  isPlatform,
  resolvePluginToolDisplay,
  resolveToolActivityAppDisplay,
  selectMcpToolResult,
  useComposerMessageSetter,
  useNativeDesktopAppMetadata,
  usePendingWorktreeController,
} from "../plugins/mcp-tool-activity-runtime";
export {
  McpAppInlineFrame,
  McpAppInlineFramePortal,
} from "../plugins/mcp-app-frame";
export { resolveMcpFrameHeight } from "../plugins/mcp-app-frame-height";
export { countToolResultItems } from "../plugins/mcp-app-tool-labels/result-item-count";
export { mcpProgressTokenSchema } from "../plugins/mcp-capability-signals/schemas";
export {
  extractMcpAppRenderData,
  selectMcpAppRenderTarget,
} from "../plugins/mcp-tool-item-content-utils/render-data";
export { getToolResultResourceUri } from "../plugins/mcp-tool-item-content-utils/tool-metadata";
export { getBuildFlavor } from "../plugins/use-plugins/marketplace-constants";
export { useSkills } from "../plugins/use-skills";
export { setProjectPinned } from "../projects/projects-index-current-app-main/navigation";
export {
  CommitBlockedReasonTooltip,
  GitActionBlockedStepTooltip,
  PushBlockedReasonTooltip,
} from "../review/git-action-blocked-reason-tooltips";
export { getGitWorkflowPhaseMessageDescriptor } from "../review/git-action-messages";
export {
  isReviewDiffEnabledAtom,
  isReviewRefreshingAtom,
  reviewBaseBranchAtom,
  reviewBaseBranchOverrideAtom,
  reviewBaseBranchQueryAtom,
  reviewBranchCommitsQueryAtom,
  reviewCommitShaAtom,
  reviewDiffMetricsAtom,
  reviewDiffSourceAtom,
  reviewFileDiffModelAtom,
  reviewFileEntriesAtom,
  reviewSummaryQueryAtom,
  selectReviewCommit,
} from "../review/review-diff-store";
export { useReviewExpandedDiffs } from "../review/review-expanded-diffs-provider";
export {
  hostMessageBridge,
  useHostMessageSubscription as useHostMessage,
  useHostMessageSubscription as useHostMessageHandler,
  useHostMessageSubscription,
} from "../runtime/app-main-host-runtime";
export {
  conversationCwdByIdSignal,
  registeredAppServerHostIdsSignal,
} from "../runtime/app-main-new-thread-runtime";
export { createScopedSignal } from "../runtime/app-scope-runtime";
export { useMutation } from "../runtime/app-server-mutation-runtime";
export {
  conversationTitleSignal as conversationTitleAtom,
  conversationTurnsSignal as conversationFallbackTurnsAtom,
  conversationTurnsSignal as conversationTurnsAtom,
} from "../runtime/conversation-state-runtime";
export {
  activeConversationCwdAtom,
  conversationHostIdByIdSignal,
  conversationManagerAtom,
  conversationTurnDiffCwdAtom,
  conversationTurnUnifiedDiffAtom,
  getActiveConversationId,
  getConversationTurns,
} from "../runtime/conversation-helpers-runtime";
export { resolveProjectlessWorkspace } from "../runtime/projectless-workspace-runtime";
export {
  formatWorkspaceRootLabel,
  localProjectActionsEnabledAtom,
  splitCommentAttachmentsBySurface,
  useWindowsSandboxRequirement,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
export { parseCommentPreviewSegments } from "../runtime/current-app-initial/conversation-title-platform-icon-runtime";
export {
  activeWorkspaceRootsQuery,
  activeWorkspaceRootsQuery as useActiveWorkspaceRoots,
  useRemoteConnections,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
export {
  queryDurations as queryStaleTime,
  useDebouncedValue,
} from "../runtime/host-query-runtime";
export { ChevronDownIcon } from "../runtime/hotkey-thread-diff-runtime";
export {
  appshotIconDataUrlAtomFamily,
  useNativeAppIcon,
} from "../runtime/native-app-icon-runtime";
export { getLocalConversationId } from "../runtime/persisted-signal/routes";
export { useResolvedImageSrc } from "../runtime/resolved-image-src-runtime";
export {
  resolveActiveTheme,
  resolveColorScheme,
  resolvedColorSchemeAtom,
  themeConfigSignal,
  toThemeVariant,
  useIsDarkMode,
  useIsDarkTheme,
  useThemePreference,
} from "../runtime/theme-preference-runtime";
export {
  useQueries,
  useQuery,
} from "../runtime/query-client/react-query-hooks";
export { useIntl as useComposerIntl } from "../vendor/react-intl";
export {
  ScopeProvider as ScopedContextProvider,
  readSharedObjectValue,
  recordProductEvent,
  useSetAtom,
} from "../runtime/query-scope-runtime/index";
export { workspaceGroupsSignal } from "../runtime/workspace-signals";
export { MoonIcon } from "../settings/general-appearance-runtime/theme-glyphs";
export {
  getSettingValue as readSettingValue,
  writeSettingValue as writeScopedSetting,
} from "../settings/setting-storage";
export { SitesIcon } from "../sites/sites-icon";
export { cleanupMaterializedThreadGoal } from "../threads/pending-worktree-store/thread-goal-cleanup";
export {
  threadCwdSignal,
  threadHostIdSignal,
} from "../threads/thread-context/index";
export { resolveLocalProjectThreadContext as resolveProjectContext } from "../features/local-projects";
export { buildProjectAssignment } from "../threads/project-assignment-runtime";
export { useCreatePendingWorktree } from "../threads/use-create-pending-worktree";
export { BackForwardNavigationButtons } from "../ui/back-forward-navigation-buttons";
export { ContextMenu } from "../ui/context-menu";
export { CopyButton, useIsMounted } from "../ui/copy-button";
export { DialogDescription, DialogTitle } from "../ui/dialog-layout/primitives";
export { DropdownMenu } from "../ui/dropdown/menu";
export { ThreadResourceCard } from "../ui/thread-resource-card";
export { isLocalHost } from "../utils/automation-host-support";
export { buildWorktreeLabelFromInput } from "../utils/build-worktree-label-from-input";
export { downloadBlob } from "../utils/download-blob";
export { getDefaultKeybindingsForCommand } from "../utils/electron-menu-shortcuts/queries";
export { isHotkeyWindowContext } from "../utils/is-hotkey-window-context";
export { setKeyboardLayoutMap } from "../utils/keyboard-layout-map";
export { useMotionValueEvent } from "../utils/motion-signal-runtime";
export { parseQuotedGitPath } from "../utils/parse-diff/git-paths";
export { sumBy } from "../utils/sum-by";
export { dismissTooltips } from "../utils/tooltip-dismiss";
export { uniq } from "../utils/uniq";
export { useActiveConversationId } from "../utils/use-active-conversation-id";
export { useCodexHome } from "../utils/use-codex-home";
export { useInterval } from "../utils/use-interval";
export { useIsRemoteHost } from "../utils/use-is-remote-host";
export { useRegisterCommand } from "../utils/use-register-command";
export {
  useResizeObserverRef,
  useResizeObserverRef as useResizeObserver,
} from "../utils/use-resize-observer";
export {
  THREAD_DETAIL_LEVEL_COMMANDS as STEPS_COMMANDS_DETAIL_LEVEL,
  THREAD_DETAIL_LEVEL_PROSE as EVERYDAY_WORK_DETAIL_LEVEL,
  THREAD_DETAIL_LEVEL_PROSE as STEPS_DETAIL_LEVEL,
  useThreadDetailLevel as useDetailLevel,
} from "../utils/thread-detail-level";
export { createMotionValue } from "../utils/use-transform";
export {
  remoteConnectionSelectionSignal,
  useWebviewExecutionTarget,
} from "../utils/use-webview-execution-target/index";
export {
  FaviconImage,
  ReviewSidePanelTabContent,
  useServiceTierSettings,
} from "../vendor/app-main-current-runtime/semantic-aliases";
export { getActiveBrowserTabId } from "../vendor/app-main-legacy-buw-runtime/compat-upper-b";
export { hostBridge } from "../vendor/app-main-legacy-buw-runtime/compat-upper-u";
export const browserTabSnapshotStore = Object.assign(browserSidebarManager, {
  getForConversation(
    _scope: unknown,
    conversationId: string,
    browserTabId?: string,
  ) {
    return browserSidebarManager.getSnapshot(conversationId, browserTabId);
  },
});
export {
  AutoScrollActivator,
  MeasuringStrategy,
  useDndContext,
  useDraggable,
  useDroppable,
} from "../vendor/dnd-kit-core";
export {
  defaultAnimateLayoutChanges,
  defaultNewIndexGetter as defaultGetNewIndex,
  rectSortingStrategy,
} from "../vendor/dnd-kit-sortable";
export {
  canUseDOM,
  getEventCoordinates,
  getOwnerDocument,
  getWindow,
  isDocument,
  isHTMLElement,
  isKeyboardEvent,
  isNode,
  isWindow,
  useCombinedRefs,
  useEvent,
  useIsomorphicLayoutEffect,
  useLatestValue,
  useLazyMemo,
  useNodeRef,
  usePrevious,
  useUniqueId,
} from "../vendor/dnd-kit-utilities";
export { generateId } from "../vendor/mermaid-curve-utils";
export { Sheet } from "../vendor/spreadsheet-schema-entry-current";
export { worktreeStatusQueryKey } from "../worktree/worktree-restore-runtime";
export {
  handleComposerSuggestionEvent,
  useModelsQuery,
} from "./automation-editor-deps.facade";
export { useAvailablePlugins } from "./mention-metadata.facade";
export { isCodexWorktreePath } from "./src-l0hb/paths";
export { browserTabTypes } from "./src-l0hb/runtime-helpers";
export {
  buildGitMetadataQueryOptions,
  buildReviewDiffQueryKey,
  clearGitStatusCache,
  createCwdQueryAtomFamily,
  createGitQueryOptions,
  gitMetadataFromCwdQuery,
  gitMetadataReadinessAtom,
  timeConstants,
} from "../runtime/git-query-runtime";
export {
  disabledQueryResult,
  pendingQueryResult,
  pendingQueryResult as mapPendingQueryState,
} from "../runtime/query-result-runtime";
export {
  activeLocalProjectCwdAtom,
  clientLocalCwdAtom,
  clientLocalWorkspaceRootsQueryAtom,
  codexHomeQueryAtom,
  conversationAssignmentsAtom,
  conversationCwdAtom,
  conversationWorkspaceStateAtom,
  defaultHostIdAtom,
  gitCliAvailabilityQueryAtom,
  hostConfigAtom,
  hostConfigByIdAtom,
  hostConfigForHostId,
  isUsableCwd,
  localProjectRootsAtom,
  readHostConfigValue,
  remoteProjectsAtom,
  resolveAssignmentCwd,
  resolveAssignmentHostId,
  resolveHostConfig,
  resolveHostConfigId,
  resolveProjectlessThreadContext,
  selectedRemoteProjectAtom,
  serverConfigQueryAtom,
  useHostConfig,
  workspaceRootsQueryAtom,
} from "../review/review-route-runtime";
export {
  PanelResizeHandle,
  activeReviewDiffSearchResultAtom,
  activeReviewFilePathAtom,
  activeReviewSearchMatchAtom,
  fileTreeOpenAtom,
  hideWhitespaceAtom,
  navigateToReviewFilePath,
  reviewBaseBranchOverrideKey,
  reviewChangedFileEntriesAtom,
  reviewExpandedAtom,
  reviewFileFilterQueryAtom,
  reviewFilterSupportsGitActions,
  reviewGitActionsAllowedAtom,
  reviewGitActionsSupportedAtom,
  reviewHostAtom,
  reviewReserveBottomPaddingAtom,
  reviewReserveBottomPaddingWidthThresholdAtom,
  reviewSidePanelAnimationAtom,
  reviewSidePanelTabDefaultState,
  reviewSidePanelWidthAtom,
  reviewSourceAtom,
  reviewTargetConversationIdAtom,
  scaleToDevicePx,
  setFileTreeOpen,
  setReviewFileFilterQuery,
  usePanelResizeAnimation,
  useResizableSize,
} from "../review/review-view-state-runtime";
export { EndResourceOpenAction as OpenInTargetsHoverSubtitle } from "../conversations/local-conversation-thread-parts/end-resource-open-actions/open-action";
export { EndResourceOpenInMenu as ResourceOverflowMenu } from "../conversations/local-conversation-thread-parts/end-resource-open-actions/open-in-menu";
export {
  reviewCodexHomeAtom,
  reviewCwdAtom,
  reviewHostConfigAtom,
  reviewHostIdAtom,
  reviewHostKeyAtom,
  reviewThreadContextAtom,
  resolveProjectThreadContext,
} from "../review/thread-review-context";
export {
  currentBranchFromCwdAtom,
  currentBranchFromCwdAtom as currentBranchQueryAtom,
  currentBranchFromMetadataAtom,
  currentBranchNameAtom,
  reviewCurrentBranchQueryAtom,
  reviewGitMetadataQueryAtom,
  reviewProjectRootAtom,
  workspaceReviewContextAtom,
} from "../review/review-git-metadata";
export {
  activeGitDialogAtom,
  activeGitWorkflowAtom,
  analyticsAttributionAtom,
  cancelActiveGitWorkflow,
  commitAttributionConfigAtom,
  diffSelectionSummaryAtom,
  gitActionsContextAtom,
  gitActionsParentScope,
  invalidateReviewDiffQueries,
  isPushActionHiddenAtom,
  localConversationGitActionsScope,
  openCreateBranchDialog,
  openCreatePullRequestDialog,
  refetchReviewGitChanges,
  refreshPushStatus,
  setConversationBranch,
  triggerPushFlow,
} from "../review/git-actions-runtime";
export {
  commitBlockedReasonAtom,
  gitActionNextStepAtom as createPullRequestNextStepAtom,
  pushAfterCommitBlockedReasonAtom as commitAndPushBlockedReasonAtom,
  pushBlockedReasonAtom,
} from "../review/git-action-availability-atoms";
export {
  ghPullRequestStatusQuery as pullRequestStatusAtom,
  ghPullRequestStatusQuery as pullRequestStatusForBranchAtom,
  hasOpenPullRequestSignal as hasOpenPullRequestAtom,
} from "../github/gh-pull-request-status-query";
export { CodeSnippet as CodeBlock } from "../ui/code-snippet";
export { ComposerEditor } from "./user-message.facade";
// RESTORED ONBOARDING COMMONS AUTO-MAPPED REEXPORTS START
export { openAutomationSidePanelTab } from "../automations/automation-side-panel-tab-content";
export { BrowserAddressSecurityIndicator } from "../browser/browser-address-security-indicator";
export {
  COMMENT_POPUP_ROOT_ID,
  ensureCommentPopupRoot,
  openCommentPopup,
} from "../browser/browser-comment-popup-window";
export { BrowserDeviceToolbarOverlay } from "../browser/browser-device-toolbar";
export { BrowserScreenshotButton } from "../browser/browser-screenshot-button";
export {
  createComposerController,
  dataTransferHasImages,
  designEditorPlacementHint,
  directSubmitPreferenceAtom,
  extractImageFilesFromDataTransfer,
  subscribeToEditorChanges,
} from "../browser/browser-comment-composer-runtime";
export {
  AtMentionAutocomplete,
  CommentSaveIcon,
  ResetValueIcon,
  SkillMentionAutocomplete,
  useAtMentionController,
  useComposerControllerCleanup,
  useConnectedApps,
  useDesignAdjustEntryEnabled,
  useIsMac,
  useSkillMentionController,
} from "../browser/browser-comment-composer-ui-runtime";
export {
  isElementFocusWithin,
  isEventWithinElement,
} from "../browser/browser-sidebar-focus";
export { BrowserSidebarPlaceholder } from "../browser/browser-sidebar-placeholder";
export { BrowserSidebarTabContent } from "../browser/browser-sidebar-tab-content-wrapper";
export { applyZoomCommand } from "../browser/browser-zoom-command";
export { useAppshotCaptureTray } from "../composer/appshot-capture";
export { ComposerContextFilesWatcher } from "../composer/composer-context-files-watcher";
export { useComposerDictation } from "../composer/composer-dictation";
export {
  performComposerSubmit,
  submitDirectComment,
} from "../composer/composer-submit";
export {
  useAtMentionAutocomplete,
  useMentionActivationHandler,
  useSkillMentionAutocomplete,
} from "../composer/mention-autocomplete";
export { NewThreadComposerBody } from "../composer/new-thread-composer-body";
export {
  useNewThreadSubmitHandlers,
  useStartConversationWithPrimaryRuntimeForFirstTurn,
} from "../composer/new-thread-submit-handlers";
export { createProjectlessPrewarmReservation } from "../composer/projectless-prewarm-reservation";
export {
  resolveComposerCwd,
  resolveComposerWorkspaceRoot,
} from "../composer/resolve-composer-cwd";
export { buildCloudSubmitTask } from "../composer/submit-cloud-task";
export {
  CLOSED_AGENT_ERROR_MESSAGE,
  formatComposerSubmitError,
  formatWorktreeSubmitError,
  getCloudSubmitToastMessage,
  getLocalSubmitToastMessage,
  getWorktreeStatusToastMessage,
} from "../composer/submit-toast-status-messages";
export { cancelThreadGoal } from "../composer/thread-goal";
export { useComposerContextActions } from "../composer/use-composer-context-actions";
export { useComposerMessageEditing } from "../composer/use-composer-message-editing";
export { useComposerPromptHistory } from "../composer/use-composer-prompt-history";
export { useComposerPrompts } from "../composer/use-composer-prompts";
export {
  sendQueuedSteerMessage,
  useIsQueueingEnabled,
  useQueuedFollowUps,
} from "../composer/use-composer-queueing";
export { useSingleLineComposerMeasure } from "../composer/use-single-line-composer-measure";
export { usePermissionsMode as useAgentModeSettings } from "../utils/use-permissions-mode/use-permissions-mode";
export { useRemoteProjects as useSelectedRemoteProject } from "../features/remote-projects";
export {
  appConnectClaimedFollowUpQuery,
  buildComposerAnalyticsId,
  buildContextualLeadingItems,
  buildNewThreadClientId,
  composerDropTargetPortalContext,
  composerEnterBehaviorFamily,
  composerModeForScopeAtom,
  composerPrefillCwdAtom,
  isBackgroundThreadHydratedAtom,
  isFollowUpHydratedAtom,
  projectAssignmentsQuery,
} from "../composer/new-thread-composer-state-runtime";
export {
  localExecutionTargetForScope,
  resolveCurrentRemoteCwd,
  resolveLocalExecutionRemoteHostId,
  useCloudAccess,
  useCloudTaskCreation,
  useCloudTaskFollowUp,
  useComposerLog,
  useComposerRateLimitBanner,
  useConversationPending,
  useFollowUpToConversation,
  useHasPendingApproval,
  useMcpManagerForHost,
  useOpenFileMutation,
  useProjectAssignment,
  useRemoteConnectivityStates,
  useResolvedPendingApproval,
  useStopTurnConfirmation,
  useWorktreeGitContext,
} from "../composer/new-thread-composer-hooks-runtime";
export {
  afterLocalConversationCreated,
  buildComposerModeAvailability,
  buildLocalContextIdeSnapshot,
  extensionPageSelectionAtom,
  isRemoteConnection,
  registerSidebarToggleShortcut,
  useGitRepoRoot,
  useInterruptThread,
  useIsElectronPlatform,
  useIsWorkspaceRequired,
  useIsWorktreePickerEnabled,
  useIsWorktreeSnapshotsEnabled,
  useMessageLimitEvent,
} from "../composer/new-thread-composer-support-runtime";
export { useLocalEnvironmentSelection as useResolvedConfigPath } from "../environments/local-environment-selection";
export { canStopBackgroundThread } from "../conversations/background-thread-stop";
export { DynamicToolCallGroup } from "../conversations/dynamic-tool-call-group";
export { GitActionsReviewToolbar } from "../conversations/git-actions-review-toolbar";
export { GitActionsSummaryPanel } from "../conversations/git-actions-summary-panel";
export { LocalConversationGitActionsContent } from "../conversations/local-conversation-git-actions-content";
export {
  appendUserMessageToConversation,
  buildPriorConversationFromTask,
  sendMessageToLocalConversation,
  steerLocalConversation,
  submitFollowUpApproval,
  submitLocalApproval,
} from "../conversations/local-conversation-messaging";
export { ExplorationActivity } from "../conversations/local-conversation-thread-parts/exploration-activity";
export { TurnInProgressFixedContent } from "../conversations/local-conversation-thread-parts/turn-in-progress-fixed-content";
export { getMcpToolDisplayLabel } from "../conversations/mcp-tool-activity/mcp-tool-display-label";
export { buildSubagentActivityRows } from "../conversations/subagent-activity-row";
export { BrowserDownloadsButton } from "../downloads/download-popover";
export { AssistantResourcesProvider } from "../features/appgen-share-dialog/assistant-resources-provider";
export { useImagePreviewSources } from "../image-side-panel/use-image-preview-sources";
export {
  branchExistsAtom,
  defaultBranchQueryAtom,
} from "../review/branch-status-atoms";
export { CreatePullRequestDialog } from "../review/create-pull-request-command-menu";
export { FileSourceStatus } from "../review/file-source-helpers";
export {
  generateCommitMessageMutationAtom,
  generatePullRequestMessageMutationAtom,
} from "../review/git-action-message-mutations";
export { gitWorkflowMutationAtom } from "../review/git-workflow-mutation";
export {
  commitWorkflowChanges,
  createPullRequestRequest,
  pushWorkflowChanges,
  resolveCommitAttribution,
  runCommitWorkflow,
  setupWorkflowBranch,
} from "../review/git-workflow-runners";
export {
  cleanupGitWorkflowAbortSignal,
  commitMessageDraftAtom,
  conversationHeadBranchAtom,
  conversationHeadBranchAtom as headBranchAtom,
  conversationIsDetachedHeadAtom,
  conversationIsDetachedHeadAtom as isDetachedHeadAtom,
  createPullRequestActionStateAtom,
  createGitWorkflowAbortSignal,
  scopedGitActionBlockedStepAtom as createPullRequestBlockedStepAtom,
  createPullRequestBodyDraftAtom,
  createPullRequestIncludeLocalChangesAtom,
  createPullRequestTitleDraftAtom,
  getGitActionMessageGenerationKey,
  gitActionMessageGenerationControllers,
  includeUnstagedChangesAtom,
  resetCreatePullRequestDrafts,
  resumeGitActionAfterBranchSetup as openNextGitActionAfterBranchSetup,
  shouldRecordConversationBranchAtom,
} from "../review/local-git-actions-scope";
export { getSidePanelController } from "../runtime/publication-terms-runtime";
export {
  buildDelegationInput,
  buildDelegationText,
  parseCodexDelegation,
  parseConversationId,
} from "../runtime/thread-delegation-runtime";
export { CollapsibleToolActivity } from "../conversations/collapsible-tool-activity";
export {
  openFileResourceFromTurn,
  trackOpenInCodexBrowser,
} from "../runtime/resource-open-runtime";
export { useLinguistGeneratedPaths as useReviewGeneratedPaths } from "../review/use-linguist-generated-paths";
export {
  DEFAULT_RESOLVED_APPS,
  buildContentSearchKey,
  buildToolActivityTurnKey,
  collectDynamicToolCallItems,
  computeProcessTargets,
  computeTurnStatusIndicator,
  extractWebSearchSources,
  getFirstNonEmptyEntryIndex,
  getTurnInputMessageId,
  getTurnMessageId,
  hasActiveDynamicToolCallSummary,
  hasAssistantStarted,
  hasMcpAppActivity,
  isAssistantContentStreaming,
  isAssistantFinalAnswer,
  isDynamicToolCallSummaryActive,
  isItemInProgress,
  openResourceFromAssistant,
  shouldShowThinkingFallback,
  summarizeHookRuns,
} from "../conversations/turn-render-helpers";
export {
  useAppgenEndCardEnabled,
  useDefaultConversationDetailLevel,
  useMcpServerStatuses,
  useTurnFollowState,
} from "../conversations/turn-render-hooks";
export {
  CollapsibleTurnActivity,
  McpAppsRenderer,
  ProposedPlanCard,
  ThinkingPlaceholder,
  TurnActionsRow,
  TurnEntryList,
  TurnItemRenderer,
  renderTurnSections,
} from "../conversations/turn-render-components";
export {
  AnimatedNumber,
  CollapsedToolActivityCard,
  ConversationEntryRenderer,
  ConversationStatusRow,
  ConversationSummaryRow,
  MultiAgentGroup,
  PendingMcpToolCalls,
  TodoListActivity,
} from "../conversations/turn-render-activity-runtime";
export {
  buildToolActivityDetailLines,
  canExpandCollapsedActivity,
  codexPreviousTurnExpandedEvent,
  getRenderUnitKey,
  getTimelineTargetProps,
  productEventTargets,
  resolveActiveCommandLabel,
  resolveCollapsedActivitySourceSummary,
  resolveTurnRenderUnits,
  shouldShowThinkingFallbackForUnit,
} from "../conversations/turn-render-unit-runtime";
export {
  DiffFileIcon,
  LinkArrowIcon,
  PlatformVisibility,
  RedoIcon,
  ResourceCardHeaderRow,
  buildOpenFileContextMenuItems,
  buildScopedDiff,
  dispatchProductEvent,
  gitDirOriginsQueryAtom,
  nodePath,
  notifyDiffApplied,
  openReviewView,
  refreshGitStatus,
  relativePath,
  requireConversationId,
  scrollElementIntoActivityView,
  turnDiffActionsDisabledAtom,
  turnDiffRevertProductEvent,
  useActivityScrollContainer,
} from "../conversations/local-conversation-thread-parts/turn-diff-runtime";
export {
  alwaysAvailableCodexTool,
  buildNavigateToCodexPageTool,
  buildOpenInCodexTool,
  experimentalFileToolDefinition,
  experimentalToolPair,
  filterAvailableModels,
  loadWorkspaceDependenciesToolName,
  nonDeferredCodexToolNames,
  readFeatureGateById,
  settingsToolNamespaceEntries,
  showExperimentalFileToolFeatureKey,
  speakToUserFeatureKey,
  speakToUserToolDefinition,
  speakToUserToolDefinitions,
  threadToolsFeatureKey,
} from "../conversations/codex-app-tool-definitions-runtime";
export {
  RemoteDirectoryPathInput,
  RemoteHostIcon,
  RemoteSshConnectionAction,
  RemoteSshConnectionErrorCategory,
  RemoteSshConnectionEventSource,
  RemoteSshConnectionResult,
  findRemoteProjectForPath,
  getRemoteProjectLabelFromPath,
  getSelectableRemoteHosts,
  isAbsoluteRemotePath,
  isSshConnection,
  isWslConnection,
  logRemoteSshConnectionEvent,
  normalizeRemotePath,
  remoteConnectionsStateSignal,
  remoteSshConnectionAnalyticsSignal,
  toComparableRemotePath,
  useAppServerQuery,
  useIsRemoteProjectsEnabled,
  useIsWorkspaceOnboardingActive,
} from "../remote-connections/remote-project-setup-runtime";
export {
  getRemoteControlConnections,
  isWslConnectionsEnabledInConfig,
  oneToOnePairingGate,
  remoteHostConfigQuery,
  resolveRemoteControlConnections,
  useFeatureGateClient,
  useSharedQuery,
} from "../remote-connections/remote-connection-features-runtime";
export {
  allRemoteHostIdsAtom,
  createRemoteHostManager,
  currentHostIdSignal,
  disposeRemoteControlConnection,
  getRemoteConnectionState,
  initializeRemoteConnectionManagers,
  isReservedRemoteHostId,
  remoteHostConfigAtom,
  sendRemoteHostRequest,
  setRemoteConnectionProgress,
  updateRemoteConnectionState,
  useRemoteManagerRegistry,
} from "../remote-connections/remote-connection-manager-runtime";
export {
  BrowserAddressInput,
  BrowserCursorOverlay,
  BrowserFloatingComposer,
  BrowserSidebarFallbackWebview,
  ElectronExtensionGate,
} from "../browser/browser-sidebar-components-runtime";
export {
  browserManagedQueryAtom,
  browserOwlPermissionsFlag,
  browserPrintEnabledFlag,
  computeBrowserDeviceToolbarLayout,
  computeEmulatedViewport,
  featureFlagQuery,
  focusBrowserConversationScope,
  getAnnotationFlowConfig,
  getBrowserAdoptedWebContentsId,
  getBrowserAdoptionLease,
  getBrowserOpenReason,
  getBrowserOpenSource,
  getConversationScopeValue,
  hasPendingBrowserComments,
  hasQueuedDesignTweaks,
  openChromiumInternalPage,
  persistedBrowserTabsGateId,
  resolveBrowserZoomPercent,
  rightPanelComposerReserveAtom,
  submitBrowserAnnotationComments,
  useBrowserSidebarComments,
  useFormattedAcceleratorLabel,
} from "../browser/browser-sidebar-state-runtime";
export {
  ProjectThreadList,
  SidebarChatsList,
  SidebarCloudSection,
  SidebarKeyboardShortcutScope,
  SidebarThreadGroups,
  SidebarThreadShortcutRegistrar,
  SidebarThreadsSection,
} from "../sidebar/sidebar-thread-list-components-runtime";
export {
  WORKSPACE_STATE_MOVES_GATE,
  canStartProjectlessChatAtom,
  featureGateAtomFamily,
  projectsSidebarModelAtom,
  projectsSidebarViewAtom,
  sidebarLayoutModeAtom,
  sidebarPreferencesAtom,
  sidebarScrollTopByModeAtom,
  sidebarSectionsModelAtom,
} from "../sidebar/sidebar-thread-list-state-runtime";
export {
  debounce,
  getWorktreeMoveConfirmation,
  logProjectsSidebarExposure,
  moveThreadToContainer,
  resolveTargetWorktreeWorkspaceRoot,
  setSidebarScrollPosition,
  setThreadPinned,
  shouldLogProjectsSidebarExposure,
  syncDiscoveredThreadWorkspaceRootHints,
  useCodexHomeInfo,
} from "../sidebar/sidebar-thread-list-actions-runtime";
export {
  CodexWordmark,
  SidebarAccountFooter,
  SidebarBrowserFooter,
  SidebarFooterSlot,
  SidebarImportStatusBanner,
  SidebarPrimaryNavLinks,
  SidebarToolbarActions,
  SidebarUpsellCard,
  SidebarUsageAlert,
  SidebarWorkspaceHeader,
  getResizeObserverBoxSize,
  hideCompletedImportStatusSignal,
  sidebarSelectedWorkspaceRootAtom,
  sidebarWorkspaceRootAtom,
  useHostEventListener,
  useIsSidebarOnboardingActive,
  useSyncSidebarRouteState,
} from "../sidebar/sidebar-footer-runtime";
export {
  buildAnnotationKey,
  detectFileLanguage,
  fileSourceMetricsEqual,
  findLineNumberFromEventPath,
  getScrollableElement,
  parseFileSourceMetrics,
  prefetchCodeThemes,
  restoreScrollLeft,
  restoreScrollTop,
  setFocusedReviewPane,
  threadDiffByPathAtom,
  toCommentAnnotationInput,
  toLineAnnotations,
  useHostKey,
  useMeasuredSizeCallback,
  useReviewCommentAnnotations,
  useReviewSearchScrollHandler,
  useScopedGitQuery,
  useThreadQuery,
} from "../review/file-source-code-helpers-runtime";
export {
  CodeViewerChrome,
  DiffSourceRenderer,
  FileSourceHoverContext,
  FileSourceHoverController,
  FileSourceRenderBoundary,
  SourceSearchController,
} from "../review/file-source-code-components-runtime";
export {
  attachThreadGoalObjectiveToConversation,
  browserSidebarAvailabilitySignal,
  buildConversationParamsFromContext,
  buildRestoreMessageFromContext,
  commitThreadGoalDraft,
  experimentalFeaturesQuery,
  getTaskErrorMessage,
  isPreparePrimaryRuntimeEnabled,
  isProjectlessWorkspaceRoots,
  localConversationTurnsSignal,
  localConversationWorkspaceKindSignal,
  memoryPreferencesDraftAtom,
  newThreadFirstRunCompletedSignal,
  newThreadFirstRunStartedSignal,
  projectContextQuerySignal,
  promptTextFromContext,
  promptTextFromObjective,
  recordNewThreadSubmitAnalytics,
  reserveProjectWorkspaceForFirstTurn,
  resolveServiceTierAndCollaborationMode,
  toUserMessageInput,
  updateConversationProjectContext,
} from "../composer/new-thread-submit-runtime";
export { forkConversation } from "../threads/fork-conversation";
// RESTORED ONBOARDING COMMONS AUTO-MAPPED REEXPORTS END
// RESTORED ONBOARDING COMMONS REEXPORTS END

export { ANNOTATION_SETTLE_ANIMATION } from "../runtime/browser-annotation-boundary-runtime";
export {
  ActivityResultCard,
  ActivityResultCardAction,
  ActivityResultCardRow,
  AnchoredOverlayLayer,
} from "../runtime/onboarding-ui-boundary-runtime";
export { AppBrand } from "../ui/app-brand-logo";
export { AppHeaderSidebarBrand } from "../ui/app-brand-logo";
export { AppShellPortalRoot } from "../runtime/onboarding-ui-boundary-runtime";
export {
  FILE_TAB_KIND_PREFIX,
  buildFileTabContextMenuItems,
  defaultFileTabState,
  findTabPanelForTab,
  formatWorkspacePathTooltip,
  resolveTabController,
  syncOpenTabs,
  trackRecentlyOpenedFile,
  type AppStore,
  type FileTabController,
} from "../workspace/workspace-file-tab-runtime";
export {
  AppgenSiteIcon,
  AssistantResourceHoverContext,
  matchesResourceUrl,
  openAppgenShareDialog,
  useAppgenProject,
  useModalController,
} from "../appgen/appgen-resource-runtime";
export {
  AppgenAccessStateIcon as AccessPolicyIcon,
  getAppgenAccessSiteStateMessage as getAccessPolicySubtitleDescriptor,
} from "../utils/appgen-access-state-messages";
export {
  AutomationActionProto,
  AutomationFailureReasonProto,
  AutomationKindProto,
  AutomationSourceProto,
  AutomationStatusProto,
  ExecutionEnvironmentProto,
  ReasoningEffortProto,
  ScheduleFrequencyProto,
  codexAutomationProductEvent,
  isKnownReasoningEffort,
} from "../runtime/automation-telemetry-protos-runtime";
export {
  FormattedCount,
  TruncatedBranchName,
  WebSearchIcon,
  applyImagePreviewZoomCommand,
  buildCommentImageInputItems,
  buildImageInputItem,
  findActiveOrchestrationAtom,
  findDefaultOrchestrationAtom,
  formatBrowserAddressDisplay,
  formatRedactedSearchQuery,
  getTerminalPanelTarget,
  getThreadFindController,
  imagePreviewOpenStore,
  registerTerminalPanelSubscription,
  resolveBrowserNavigationUrl,
  summarizeExplorationCommand,
  syncTerminalPanelTabs,
} from "../runtime/onboarding-hot-helpers-runtime";
export { ChevronRightIcon as BreadcrumbSeparatorIcon } from "../icons/chevron-right-icon";
export { ThreeDotsIcon as BrowserOptionsIcon } from "../icons/three-dots-icon";
export { GlobeIcon as BrowserPlaceholderIcon } from "../icons/globe-icon";
export {
  COMMENT_EDITOR_FOOTER_CLASS,
  COMMENT_EDITOR_INPUT_CLASS,
  COMMENT_EDITOR_SURFACE_CLASS,
} from "../image-side-panel/image-comment-editor-runtime";
export { READ_FILE_SAMPLE_MAX_FILE_BYTES as CONTENT_SAMPLE_MAX_FILE_BYTES } from "../appgen/publication-terms";
export { ChatGptBrandLogo } from "../ui/app-brand-logo";
export { ChevronUpIcon } from "../conversations/local-conversation-thread-parts/todo-plan-pill/todo-plan-visual-runtime";
export {
  CitationActionLabel,
  CitationCardBody,
  CitationCardFrame,
} from "../automations/automation-citation-card-runtime";
export { CommandOutputBlock } from "../worktree/worktree-activity-boundary-runtime";
export { CommitCommandMenu as CommitChangesDialog } from "../review/commit-command-menu";
export { ConversationActivityIcon } from "../worktree/worktree-activity-boundary-runtime";
export { DeleteCommentIcon } from "../image-side-panel/image-comment-editor-runtime";
export { DialogHeaderRow } from "../runtime/onboarding-ui-boundary-runtime";
export { DiffHighlighterScope } from "../review/diff-highlighter-boundary-runtime";
export { DisabledActionTooltip } from "../runtime/onboarding-ui-boundary-runtime";
export { DonutProgress } from "../conversations/local-conversation-thread-parts/todo-plan-pill/todo-plan-visual-runtime";
export { ElectronOnlyGate } from "../runtime/onboarding-ui-boundary-runtime";
export { EnvironmentSetupIcon } from "../worktree/worktree-activity-boundary-runtime";
export { FollowUpConfirmationDialog } from "../plugins/follow-up-confirmation-dialog-runtime";
export { GitBranchIcon as ForkIcon } from "../icons/git-branch-icon";
export { GitBranchControl } from "../conversations/git-action-boundary-runtime";
export { HANDOFF_STEP_ORDER } from "../conversations/thread-handoff-boundary-runtime";
export { HooksIcon as HookActivityIcon } from "../icons/hooks-icon";
export { ImageCommentEditorPositioner } from "../image-side-panel/image-comment-editor-runtime";
export { ImagesIcon as ImagePreviewTabIcon } from "../icons/images-icon";
export { Spinner as ImageUploadSpinnerIcon } from "../ui/spinner";
export { InlineTranscriptStatusMessage } from "../runtime/onboarding-ui-boundary-runtime";
export { DocumentSearchIcon as JumpToFileIcon } from "../icons/document-search-icon";
export { MCP_RELATED_TASK_META_KEY as MCP_PROGRESS_META_KEY } from "../plugins/mcp-capability-signals/schemas";
export { MessageAttachmentChip } from "../runtime/onboarding-ui-boundary-runtime";
export { NamedErrorBoundary } from "../runtime/onboarding-ui-boundary-runtime";
export { OpenConfigLinkButton } from "../runtime/onboarding-ui-boundary-runtime";
export { OpenImageInButton } from "../runtime/onboarding-ui-boundary-runtime";
export { ChatIcon as ParentChatIcon } from "../icons/chat-icon";
export {
  PlanStepCompletedIcon,
  PlanStepInactiveIcon,
  PlanStepPendingIcon,
  PlanStepSpinnerIcon,
} from "../conversations/local-conversation-thread-parts/todo-plan-pill/todo-plan-visual-runtime";
export { RelativeTimeLabel } from "../runtime/onboarding-ui-boundary-runtime";
export { RemoveAppshotAttachmentButton } from "../runtime/onboarding-ui-boundary-runtime";
export {
  ReviewCappedFooterBar,
  ReviewMetricsContext,
  ReviewMetricsObserver,
  ReviewNoMatchesPlaceholder,
  SECTION_ACTIONS_FEATURE_GATE,
  areReviewDiffMetricsEqual,
  defaultReviewDiffMetrics,
  measureReviewDiffMetrics,
  reviewCollapsedBottomInset,
  reviewDiffStylesheet,
  useReviewBottomPadding,
} from "../review/review-diff-container-runtime";
export { FileSourceSidePanel as ReviewChangedFilesSidePanel } from "../review/file-source-side-panel";
export {
  ReviewEmptyState,
  ReviewErrorState,
  ReviewFileSearchInput,
  ReviewLoadingState,
  ReviewStagedEmptyState,
} from "../review/review-boundary-ui-runtime";
export {
  SafetyBufferingContainer,
  SafetyBufferingPrompt,
} from "../conversations/safety-buffering-ui-runtime";
export { SettingsGearIcon as SettingsToolIcon } from "../icons/settings-gear-icon";
export { SummaryPanelRow as SourceListItemButton } from "../conversations/summary-panel-row";
export { TerminalCommandToast } from "../runtime/onboarding-ui-boundary-runtime";
export { TodoPlanWidget as TodoListProgressPill } from "../conversations/local-conversation-thread-parts/todo-plan-pill/todo-plan-pill";
export {
  TurnUnifiedDiffSummaryRow,
  UserMessageRow,
} from "../conversations/message-boundary-runtime";
export { OpenaiBlossomIcon as WorkHereIcon } from "../icons/openai-blossom-icon";
export {
  WorkedForStatusLabel,
  formatElapsedDuration,
  formatWorkedDuration,
} from "../conversations/worked-for-status-runtime";
export type { WorkedForStatusItem } from "../conversations/worked-for-status-runtime";
export { ProjectDropdownOptions as WorkspaceFolderDropdown } from "../ui/project-dropdown-options";
export {
  _commentPreviewDecodeMentionTarget,
  _commentPreviewMatchKnownMentionUri,
  _commentPreviewResolveMentionAttachment,
  _commentPreviewUnescapeMarkdownText,
  annotationScreenshotsModeAtom,
  annotationViewportBaseHeight,
  appWindowKind,
  buildBrowserCommentPopupFrameName,
} from "../browser/browser-comment-boundary-runtime";
export { activeLocalProjectCwdSignal } from "../runtime/global-ui-state-boundary-runtime";
export {
  RouteOutlet,
  RouteRedirect,
  applicationMenuIds,
  hasPreviouslyCompletedOnboardingAtom,
  onboardingForcedOverrideSignal,
  readScopedSignal,
  shouldAutoCompleteWorkspaceOnboarding,
  useFinalOnboardingStep,
} from "../runtime/onboarding-route-boundary-runtime";
export {
  arePayloadsEqual,
  floatingComposerMessages,
  objectSchema,
  panelOverlayZIndex,
  parseCodexError,
  unionSchema,
  waitForNextFrame,
} from "../runtime/onboarding-misc-boundary-runtime";
export {
  browserMcpToolLabels,
  figmaMcpToolLabels,
  getComputerUseMcpToolLabel,
  getFigmaMcpToolLabel,
  getGithubMcpToolLabel,
  getGmailMcpToolLabel,
  getGoogleCalendarMcpToolLabel,
  getGoogleDriveMcpToolLabel,
  getLinearMcpToolLabel,
  getMcpAppAltText,
  githubMcpToolLabels,
  gmailMcpToolLabels,
  googleCalendarMcpToolLabels,
  googleDriveMcpToolLabels,
  linearMcpToolLabels,
  resolveMcpAppForToolResult,
} from "../conversations/mcp-tool-activity/mcp-tool-label-runtime";
export {
  subagentAvatarIcons,
  summarizeSubagentActivityStatus,
} from "../conversations/subagent-activity-runtime";
export {
  assertKnownCommandId,
  platformAtom,
  resetCommandKeymapState,
  updateCommandKeymapState,
} from "../runtime/command-keymap-boundary-runtime";
export { automationActivitySummarySignal } from "../app-shell/sidebar-activity-boundary-runtime";
export { branchPrefixSetting } from "../conversations/thread-handoff-boundary-runtime";
export { buildConversationReviewModel } from "../review/conversation-review-model-runtime";
export { buildEntrypointConversationId } from "../conversations/conversation-identity-runtime";
export {
  createFileViewerToolArguments as buildFileViewerToolArguments,
  createMcpFileViewerHostResource as createFileResourceReader,
} from "../appgen/publication-terms/mcp-file-viewers";
export { buildParentConversationReviewModel } from "../review/conversation-review-model-runtime";
type WebSearchAction =
  | {
      type: "search";
      query?: string | null;
      queries?: readonly (string | null | undefined)[] | null;
    }
  | { type: "openPage"; url?: string | null }
  | { type: "findInPage"; pattern?: string | null; url?: string | null }
  | { type: "other" }
  | null
  | undefined;

type WebSearchActivityLike = {
  action?: WebSearchAction;
  query?: string | null;
};

function normalizeSearchSiteHostname(host: string): string | null {
  try {
    return new URL(`https://${host}`).hostname.replace(/^www\./u, "");
  } catch {
    return null;
  }
}

function formatSearchQuerySites(query: string): string {
  const sites: string[] = [];
  const queryWithoutSites = query.replace(
    /\bsite:([^\s]+)/giu,
    (fullMatch, host: string) => {
      const normalizedHost = normalizeSearchSiteHostname(host);
      if (normalizedHost == null) return fullMatch;
      if (!sites.includes(normalizedHost)) sites.push(normalizedHost);
      return "";
    },
  );
  if (sites.length === 0) return query;

  const displayQuery = queryWithoutSites
    .replace(/\bOR\b/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
  return displayQuery.length === 0
    ? query
    : `${displayQuery} | ${sites.join(" · ")}`;
}

function buildSearchActionDetail(
  query: string | null | undefined,
  queries: readonly (string | null | undefined)[] | null | undefined,
): string {
  const trimmedQuery = query?.trim() ?? "";
  if (trimmedQuery.length > 0) return formatSearchQuerySites(trimmedQuery);

  const fallbackQuery =
    queries?.map((item) => item?.trim() ?? "").find((item) => item.length > 0) ??
    "";
  return queries != null && queries.length > 1 && fallbackQuery.length > 0
    ? `${formatSearchQuerySites(fallbackQuery)} ...`
    : formatSearchQuerySites(fallbackQuery);
}

function buildWebSearchActionDetail(action: WebSearchAction): string {
  switch (action?.type) {
    case "search":
      return buildSearchActionDetail(action.query, action.queries);
    case "openPage":
      return action.url ?? "";
    case "findInPage":
      return action.pattern != null && action.url != null
        ? `'${action.pattern}' in ${action.url}`
        : action.pattern != null
          ? `'${action.pattern}'`
          : (action.url ?? "");
    case "other":
    case undefined:
      return "";
  }
}

export function buildWebSearchDetail(
  action: WebSearchAction,
  fallbackQuery: string | null | undefined,
): string {
  const detail = buildWebSearchActionDetail(action).trim();
  return detail.length > 0 ? detail : (fallbackQuery ?? "");
}
export { buildWorkspaceFolderOptions } from "../runtime/workspace-folder-options-runtime";
export { buildWorktreeLabelFromInput as buildWorktreeLabel } from "../utils/build-worktree-label-from-input";
export { capitalizeWord } from "../runtime/onboarding-boundary-format-runtime";
export { closeRevertConfirmDialog } from "../review/review-patch-action-boundary-runtime";
export { collapseSidePanelLayout } from "../app-shell/side-panel-runtime";
export { collectWorkspaceFileTabDescriptors } from "../workspace/workspace-file-tab-descriptors-runtime";
export function composeTurnUnitKey(turnKey: string, unitId: string): string {
  return `${turnKey}:${unitId}`;
}
export { composerAttachmentLayoutValues } from "../runtime/onboarding-boundary-format-runtime";
export const composerPendingEditCountAtom = createScopedAtom(appRootScope, 0);
export { confirmRevertChanges } from "../review/review-patch-action-boundary-runtime";
export { va as conversationByClientThreadIdAtom } from "../runtime/current-app-initial/remote-projects-app-shared-backing";
export { conversationIdFromRoute } from "../conversations/conversation-identity-runtime";
export {
  CSS as cssTransform,
  CSS as cssTransformHelpers,
  isSVGElement as isSvgElement,
} from "../vendor/dnd-kit-utilities";
export { currentAppBrand } from "../ui/app-brand-logo";
export const defaultHostIdSignal = defaultHostIdSignalRuntime;
export {
  defineRpcQuery,
  rpcClient,
  rpcTimeConstants,
  useRpcQuery,
} from "../runtime/rpc-query-runtime";
export const diffFindResultAtom = threadFindResultAtom;
type ScopedModalStore = Parameters<typeof openModalControllerModalRuntime>[0];
type ScopedModalComponent<TProps extends object> = ComponentType<
  TProps & { onClose: () => void }
>;

export const discardBrowserAnnotationsModalConfig =
  DiscardBrowserAnnotationsDialog as ScopedModalComponent<{
    onConfirm: () => void;
  }>;
export { runCommand as dispatchAppCommand } from "../utils/run-command";
export function displayWorkspacePath(path: string): string {
  return normalizePathRuntime(path);
}
export const dynamicToolCallGroupMaxHeight = {
  preview: "20rem",
  expanded: "20rem",
  collapsed: "0px",
};
export {
  encodeConversationId,
  encodeLocalConversationId,
} from "../conversations/conversation-identity-runtime";
export function expandTildePath(path: string): string {
  if (path !== "~" && !path.startsWith("~/")) return path;
  const home =
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env?.HOME ??
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env?.USERPROFILE;
  if (home == null || home.length === 0) return path;
  return path === "~" ? home : joinPathRuntime(home, path.slice(2));
}
export {
  sidePanelTabController as fileTabController,
  SidePanelTabKind as fileTabKind,
} from "../app-shell/side-panel-runtime";
export function fileUrlPathnameToOsPath(pathname: string): string {
  const normalized = pathname.replace(/\\/gu, "/");
  return /^\/[A-Za-z]:\//u.test(normalized) ? normalized.slice(1) : normalized;
}
export function findLatestLiveDynamicToolCall<
  TItem extends { completed?: boolean | null },
>(items: readonly TItem[]): TItem | null {
  for (let index = items.length - 1; index >= 0; index -= 1) {
    const item = items[index];
    if (item != null && !item.completed) return item;
  }
  return null;
}
export {
  findPreviewTabPanelSide,
  focusPreviewTabComposer,
} from "../image-side-panel/image-preview-tab-runtime";
export { focusSidePanelLayout } from "../app-shell/side-panel-runtime";
export function focusThreadFindDomain(
  store: {
    set(signal: unknown, value: unknown): void;
  },
  domain: ThreadFindDomain,
): void {
  store.set(threadFindOpenAtom, true);
  store.set(threadFindPreferredDomainAtom, domain);
  store.set(threadFindActiveDomainAtom, domain);
  store.set(threadFindResultAtom, null);
  store.set(threadFindLoadingAtom, false);
  store.set(threadFindActiveMatchIndexAtom, null);
}
export { formatUsageLimitResetDate } from "../runtime/onboarding-boundary-format-runtime";
export { summarizeAppgenAccessPolicy as getAccessPolicyMessageValues } from "../utils/appgen-access";
export { getAutomationThreadId } from "../app-shell/sidebar-activity-boundary-runtime";
export function getConversationManager(
  scope: {
    get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  },
  conversationId: string | null | undefined,
): unknown | null {
  if (conversationId == null || conversationId.trim().length === 0) {
    return null;
  }
  try {
    return scope.get(conversationManagerAtomRuntime, conversationId) ?? null;
  } catch {
    return null;
  }
}
export { getDefaultRightPanelStorageKey } from "../app-shell/side-panel-runtime";
export async function getPermissionOverrides(
  requestClient: {
    sendRequest?: (
      method: string,
      params?: Record<string, unknown>,
    ) => Promise<unknown>;
    request?: (
      method: string,
      params?: Record<string, unknown>,
    ) => Promise<unknown>;
  } | null | undefined,
  cwd: string,
): Promise<Record<string, unknown> | null> {
  const params = { cwd, includeLayers: false };
  const response =
    requestClient?.sendRequest != null
      ? await requestClient.sendRequest("read-config-for-host", params)
      : requestClient?.request != null
        ? await requestClient.request("read-config-for-host", params)
        : await sendHostRequestRuntime("read-config-for-host", {
            params,
          });

  if (response == null || typeof response !== "object") return null;
  const config = (response as { config?: unknown }).config ?? response;
  return config != null && typeof config === "object"
    ? (config as Record<string, unknown>)
    : null;
}
export { getPreviewTabPanel } from "../image-side-panel/image-preview-tab-runtime";
type RpcRequesterRequest = {
  method: string;
  params?: Record<string, unknown>;
  signal?: AbortSignal;
  source?: string;
};

function rpcHostMethod(namespace: string, method: string): string {
  return method.startsWith(`${namespace}-`) ? method : `${namespace}-${method}`;
}

export function getRpcRequester(namespace: string): {
  request<TResponse = unknown>(
    request: RpcRequesterRequest,
  ): Promise<TResponse>;
  subscribe(
    eventName: string,
    handler: (message: Record<string, unknown>) => void,
  ): () => void;
} {
  return {
    request<TResponse = unknown>({
      method,
      params,
      signal,
      source,
    }: RpcRequesterRequest): Promise<TResponse> {
      return sendHostRequestRuntime<TResponse>(
        rpcHostMethod(namespace, method),
        {
          params,
          signal,
          source:
            source ??
            (typeof params?.operationSource === "string"
              ? params.operationSource
              : undefined),
        },
      );
    },
    subscribe(eventName, handler) {
      const bridge = ElectronHostMessageBridge.getInstance();
      const eventNames = [
        eventName,
        eventName.startsWith(`${namespace}-`)
          ? eventName
          : `${namespace}-${eventName}`,
      ].filter((name, index, names) => names.indexOf(name) === index);
      const unsubscribers = eventNames.map((name) =>
        bridge.subscribe(name, (message) => {
          handler(message);
        }),
      );
      return () => {
        unsubscribers.forEach((unsubscribe) => {
          unsubscribe();
        });
      };
    },
  };
}
type UsageLimitWindow = {
  reset_at?: number | null;
  used_percent?: number | null;
};

function isUsageLimitWindow(value: unknown): value is UsageLimitWindow {
  return value != null && typeof value === "object";
}

function finiteNumberOrNull(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

export function getUsageLimitResetWindow(
  rateLimitInfo: unknown,
): number | null {
  const rateLimit =
    rateLimitInfo != null && typeof rateLimitInfo === "object"
      ? ((rateLimitInfo as { rate_limit?: unknown }).rate_limit ?? rateLimitInfo)
      : null;
  if (rateLimit == null || typeof rateLimit !== "object") return null;

  const windows = [
    (rateLimit as { primary_window?: unknown }).primary_window,
    (rateLimit as { secondary_window?: unknown }).secondary_window,
  ].filter(isUsageLimitWindow);
  if (windows.length === 0) return null;

  const selectedWindow = windows.reduce<UsageLimitWindow | null>(
    (selected, window) => {
      if (selected == null) return window;
      const selectedUsedPercent =
        finiteNumberOrNull(selected.used_percent) ?? Number.NEGATIVE_INFINITY;
      const currentUsedPercent =
        finiteNumberOrNull(window.used_percent) ?? Number.NEGATIVE_INFINITY;
      if (currentUsedPercent > selectedUsedPercent) return window;
      if (currentUsedPercent < selectedUsedPercent) return selected;
      const selectedResetAt =
        finiteNumberOrNull(selected.reset_at) ?? Number.NEGATIVE_INFINITY;
      const currentResetAt =
        finiteNumberOrNull(window.reset_at) ?? Number.NEGATIVE_INFINITY;
      return currentResetAt > selectedResetAt ? window : selected;
    },
    null,
  );

  return finiteNumberOrNull(selectedWindow?.reset_at);
}
const imagePreviewSidePanelGateId = "120995366";

type ImageAttachmentActivationOptions = {
  title: string;
  [key: string]: unknown;
};

export function handleImageAttachmentActivation(
  scope: AppShellStore,
  { title, ...rest }: ImageAttachmentActivationOptions,
): boolean {
  if (!evaluateFeatureGateRuntime(scope, imagePreviewSidePanelGateId)) {
    return false;
  }
  const tabId = `image:${crypto.randomUUID()}`;
  previewTabManagerRuntime.openTab(
    scope,
    ImagePreviewTabContentRuntime as ComponentType<Record<string, unknown>>,
    {
      icon: React.createElement(ImagePreviewTabIconRuntime, {
        className: "icon-xs shrink-0",
      }),
      id: tabId,
      isPreview: true,
      props: { ...rest, tabId },
      title,
      tooltip: title,
    },
  );
  focusPreviewTabComposerRuntime(scope);
  return true;
}
function readStatusType(status: unknown): string | null {
  if (typeof status === "string") return status;
  if (status == null || typeof status !== "object") return null;
  const record = status as Record<string, unknown>;
  return typeof record.type === "string"
    ? record.type
    : typeof record.status === "string"
      ? record.status
      : null;
}

function turnIsInProgress(turn: unknown): boolean {
  if (turn == null || typeof turn !== "object") return false;
  const status = readStatusType((turn as Record<string, unknown>).status);
  return (
    status === "inProgress" ||
    status === "in_progress" ||
    status === "running"
  );
}

function hasRunningAgentState(turn: unknown): boolean {
  if (turn == null || typeof turn !== "object") return false;
  const items = (turn as { items?: unknown }).items;
  if (!Array.isArray(items)) return false;
  return items.some((item) => {
    if (item == null || typeof item !== "object") return false;
    const record = item as {
      agentsStates?: Record<string, { status?: unknown } | null | undefined>;
      type?: unknown;
    };
    return (
      record.type === "collabAgentToolCall" &&
      Object.values(record.agentsStates ?? {}).some(
        (agentState) => agentState?.status === "running",
      )
    );
  });
}

export function isConversationRunning(conversation: unknown): boolean {
  if (conversation == null || typeof conversation !== "object") return false;
  const record = conversation as Record<string, unknown>;
  const status = readStatusType(
    record.threadRuntimeStatus ??
      record.runtimeStatus ??
      record.status ??
      (record.thread as Record<string, unknown> | undefined)?.status,
  );
  if (status === "active" || status === "running" || status === "inProgress") {
    return true;
  }
  if (
    (status === "idle" || status === "completed") &&
    (record.threadGoal as { status?: unknown } | undefined)?.status ===
      "active"
  ) {
    return true;
  }

  const turns = getConversationTurnsRuntime(conversation);
  const latestTurn = turns.at(-1);
  return turnIsInProgress(latestTurn) || turns.some(hasRunningAgentState);
}
export function isInlineReadCommandSummaryVisible({
  summary,
  cwd,
}: {
  cwd?: string | null;
  summary: Parameters<typeof resolveSkillPathInfoFromReadSummary>[0]["summary"];
}): boolean {
  return (
    resolveSkillPathInfoFromReadSummary({
      summary,
      cwd,
    })?.isSkillDefinitionFile === true
  );
}
export function isMcpAppDevtoolsEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return (
      new URLSearchParams(window.location.search).get(
        "mcpAppDevtools",
      ) === "1" ||
      window.localStorage.getItem("codex:mcp-app-devtools") === "1"
    );
  } catch {
    return false;
  }
}
export function isMcpAppWindowType(windowType: unknown): boolean {
  return windowType === "electron";
}
export function isOpenInNewTabEvent(event: {
  button?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
}): boolean {
  return event.button === 1 || event.metaKey === true || event.ctrlKey === true;
}
export {
  isResourcePathInsideProjectlessOutput as isResourceInProjectlessOutput,
} from "../conversations/output-artifact-runtime";
export { isReviewDiffOpenAtom } from "../review/review-view-state-runtime";
export { isUncommittedReviewSource } from "../review/review-diff-store";
export const isWorkspaceContextLoadingSignal = createScopedAtom(
  appRootScope,
  false,
);
export const lineStartTagNames = "created-thread";
export function markBrowserCommentOverlayMounted(): void {
  dismissBrowserSidebarCommentModeCoachmarkRuntime();
}
type HandoffGitOrigin = {
  dir: string;
  originUrl?: string | null;
  root?: string | null;
};

type HandoffProjectMatchInput = {
  destinationGitOrigins?: HandoffGitOrigin[] | null;
  destinationWorkspaceRoots: string[];
  sourceGitOrigins?: HandoffGitOrigin[] | null;
  sourceGitRoot: string | null;
  sourceWorkspaceRoot: string | null;
};

function canonicalHandoffPath(path: string): string {
  return canonicalizeRootPathRuntime(path).replace(/\/+/gu, "/");
}

function relativePathUnderGitRoot(
  workspaceRoot: string | null | undefined,
  gitRoot: string | null | undefined,
): string | null {
  if (workspaceRoot == null || gitRoot == null) return null;
  const workspacePath = canonicalHandoffPath(workspaceRoot);
  const gitPath = canonicalHandoffPath(gitRoot);
  if (workspacePath === gitPath) return "";
  const gitPrefix = gitPath === "/" ? gitPath : `${gitPath}/`;
  return workspacePath.startsWith(gitPrefix)
    ? workspacePath.slice(gitPrefix.length)
    : null;
}

function originForDirectory(
  directory: string | null | undefined,
  origins: HandoffGitOrigin[] | null | undefined,
): HandoffGitOrigin | null {
  if (directory == null) return null;
  const normalizedDirectory = canonicalHandoffPath(directory);
  return (
    origins?.find(
      (origin) => canonicalHandoffPath(origin.dir) === normalizedDirectory,
    ) ?? null
  );
}

function parseGitOriginIdentity(
  originUrl: string | null | undefined,
): string | null {
  if (originUrl == null) return null;
  try {
    let value = originUrl.trim();
    if (value.length === 0) return null;

    const scpLike = /^(?:[^@]+)@(?<host>[^:]+):(?<path>.+)$/u.exec(value);
    if (scpLike?.groups?.host != null && scpLike.groups.path != null) {
      value = `${scpLike.groups.host}/${scpLike.groups.path}`;
    } else {
      value = value.replace(/^[a-z][a-z\d+\-.]*:\/\//iu, "");
    }

    value = value
      .replace(/^[^@/]+@/u, "")
      .replace(/[?#].*$/u, "")
      .replace(/\.git$/iu, "")
      .replace(/\/+$/u, "");
    const parts = value.split("/").filter(Boolean);
    if (parts.length < 3) return null;
    const host = parts[0];
    const owner = parts.at(-2);
    const repo = parts.at(-1);
    return host == null || owner == null || repo == null
      ? null
      : `${host}/${owner}/${repo}`.toLowerCase();
  } catch {
    return null;
  }
}

export function matchSavedProjectForHandoff({
  destinationGitOrigins,
  destinationWorkspaceRoots,
  sourceGitOrigins,
  sourceGitRoot,
  sourceWorkspaceRoot,
}: HandoffProjectMatchInput): string | null {
  const sourceOrigin = originForDirectory(
    sourceWorkspaceRoot,
    sourceGitOrigins,
  );
  const sourceOriginIdentity = parseGitOriginIdentity(sourceOrigin?.originUrl);
  const sourceRelativePath = relativePathUnderGitRoot(
    sourceWorkspaceRoot,
    sourceGitRoot,
  );
  if (sourceOriginIdentity == null || sourceRelativePath == null) return null;

  return (
    destinationWorkspaceRoots.find((destinationWorkspaceRoot) => {
      const destinationOrigin = originForDirectory(
        destinationWorkspaceRoot,
        destinationGitOrigins,
      );
      const destinationRelativePath = relativePathUnderGitRoot(
        destinationWorkspaceRoot,
        destinationOrigin?.root,
      );
      return (
        destinationRelativePath === sourceRelativePath &&
        parseGitOriginIdentity(destinationOrigin?.originUrl) ===
          sourceOriginIdentity
      );
    }) ?? null
  );
}
export function matchesCodexPagePath(path: string | null | undefined): boolean {
  if (!path) return false;
  const pathname = path.split("?")[0] ?? "";
  return (
    pathname === "/avatar-overlay" ||
    pathname === "/global-dictation" ||
    pathname.startsWith("/global-dictation/") ||
    pathname === "/hotkey-window" ||
    pathname.startsWith("/hotkey-window/")
  );
}
export { mcpRelatedTaskMetaSchema as mcpProgressSchema } from "../plugins/mcp-capability-signals/schemas";
export { mcpServerStatusesQueryAtom } from "../runtime/mcp-server-status-runtime";
export {
  measureTextLayout,
  measureTextLineCount,
} from "../utils/text-layout";
type ModelSelectionWriteEvent = {
  resolve?: () => void;
  selection?: unknown;
  target?: unknown;
  write?: () => Promise<void> | void;
};
const modelSelectionWritePromises = new Map<string, Promise<void>>();
export const modelSelectionWriteQueueFamily = createScopedAtom(
  appRootScope,
  () => (event: ModelSelectionWriteEvent) => {
    const key = JSON.stringify(event.target ?? event.selection ?? null);
    const previous = modelSelectionWritePromises.get(key) ?? Promise.resolve();
    const next = previous
      .catch(() => undefined)
      .then(async () => {
        await event.write?.();
      })
      .finally(() => {
        event.resolve?.();
        if (modelSelectionWritePromises.get(key) === next) {
          modelSelectionWritePromises.delete(key);
        }
      });
    modelSelectionWritePromises.set(key, next);
  },
);
export { ArrowLeftIcon as navigationBackChevronIcon } from "../icons/arrow-left-icon";
export const nonIntegrationSourceKey = "non-integration";
export { openFileTab as openFileInReview } from "../review/open-file-tab";
export function openInEditor(params: {
  column?: number | null;
  cwd?: string | null;
  endLine?: number | null;
  hostId?: string | null;
  line?: number | null;
  path: string;
  target?: string | null;
}): Promise<unknown> {
  return sendHostRequestRuntime("open-file", { params });
}
export function openScopedConfirmModal<TProps extends object>(
  store: ScopedModalStore,
  ModalComponent: ScopedModalComponent<TProps>,
  props: TProps,
): void {
  openModalControllerModalRuntime(
    store,
    ModalComponent as ComponentType<TProps & { onClose?: () => void }>,
    props as TProps & { onClose?: () => void },
  );
}
export {
  subagentParentThreadIdSignal as parentConversationAtom,
  subagentParentThreadIdSignal as parentConversationIdAtom,
} from "../runtime/conversation-state-runtime";
export {
  parseCommentPreviewSegments as parseCommentBody,
} from "../runtime/current-app-initial/conversation-title-platform-icon-runtime";
export function parseHookSourceKind(
  sources: readonly (string | null | undefined)[],
):
  | "admin"
  | "user"
  | "project"
  | "plugin"
  | "sessionFlags"
  | null {
  for (const source of sources) {
    if (source == null) continue;
    const normalized = source.trim();
    switch (normalized) {
      case "admin":
      case "user":
      case "project":
      case "plugin":
      case "sessionFlags":
        return normalized;
    }
  }
  return null;
}
export { parseInlineDirectiveTags } from "../utils/parse-directives";
export { getPatchDiffStats as parsePatchDiffStats } from "../utils/patch-diff-stats";
type ParsedTurnItem =
  | { type: "user-message"; message: string }
  | { type: "assistant-message"; completed: boolean; content: string }
  | { type: "turn-diff"; unifiedDiff: string }
  | Record<string, unknown>;

function textFromContent(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value
      .map((part) => {
        if (typeof part === "string") return part;
        if (part == null || typeof part !== "object") return "";
        const record = part as Record<string, unknown>;
        return typeof record.text === "string"
          ? record.text
          : typeof record.content === "string"
            ? record.content
            : "";
      })
      .filter((part) => part.length > 0)
      .join("\n");
  }
  if (value != null && typeof value === "object") {
    const record = value as Record<string, unknown>;
    return typeof record.text === "string"
      ? record.text
      : typeof record.content === "string"
        ? record.content
        : "";
  }
  return "";
}

function parseSingleTurnItem(item: unknown): ParsedTurnItem | null {
  if (item == null || typeof item !== "object") return null;
  const record = item as Record<string, unknown>;
  const type = String(record.type ?? "");

  if (
    type === "userMessage" ||
    type === "user-message" ||
    (type === "message" && record.role === "user")
  ) {
    return {
      type: "user-message",
      message: textFromContent(
        record.message ?? record.content ?? record.input ?? record.text,
      ),
    };
  }

  if (
    type === "assistantMessage" ||
    type === "assistant-message" ||
    type === "agentMessage" ||
    (type === "message" && record.role === "assistant")
  ) {
    return {
      type: "assistant-message",
      completed:
        record.completed === true ||
        record.status === "completed" ||
        record.status === "complete" ||
        record.status == null,
      content: textFromContent(record.content ?? record.message ?? record.text),
    };
  }

  if (
    type === "turnDiff" ||
    type === "turn-diff" ||
    type === "outputDiff" ||
    type === "output_diff"
  ) {
    const unifiedDiff =
      record.unifiedDiff ?? record.diff ?? record.output_diff ?? record.content;
    return typeof unifiedDiff === "string"
      ? { type: "turn-diff", unifiedDiff }
      : null;
  }

  return record;
}

export function parseTurnItems(
  turn: unknown,
  _options: unknown[] = [],
): { items: ParsedTurnItem[] } {
  const items =
    turn != null && typeof turn === "object"
      ? ((turn as Record<string, unknown>).items ??
        (turn as Record<string, unknown>).outputItems ??
        (turn as Record<string, unknown>).events)
      : null;
  return {
    items: Array.isArray(items)
      ? items.flatMap((item) => {
          const parsed = parseSingleTurnItem(item);
          return parsed == null ? [] : [parsed];
        })
      : [],
  };
}
export { pathsEqualWithinRoot } from "../utils/git-relative-display-path";
export { pendingActivityThreadsSignal } from "../app-shell/sidebar-activity-boundary-runtime";
export const pendingModelSelectionSignal = createScopedAtom(
  appRootScope,
  null,
);
export { pendingReviewCommentAtom } from "../review/review-view-state-runtime";
export async function persistScopedSignalValue(
  store: { set?(signal: unknown, keyOrValue: unknown, value?: unknown): void },
  key: string,
  value: unknown,
  _options?: { throwOnFailure?: boolean },
): Promise<void> {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
  store.set?.(pendingModelSelectionSignal, key, value);
}
export async function prepareConversationForTurn(
  scope: {
    set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  },
  {
    conversationId,
    cwd,
    hostId,
  }: {
    conversationId: string;
    cwd?: string | null;
    hostId?: string | null;
  },
): Promise<void> {
  if (cwd != null) scope.set(conversationCwdSignalRuntime, conversationId, cwd);
  if (hostId != null) {
    scope.set(conversationHostIdSignalRuntime, conversationId, hostId);
  }
}
export async function prepareProjectlessConversation(
  attachments: unknown[] = [],
  options: { prompt?: string } = {},
): Promise<{
  attachments: unknown[];
  conversationId: string;
  projectlessOutputDirectory: string;
  prompt?: string;
}> {
  const conversationId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `projectless:${Date.now()}`;
  return {
    attachments,
    conversationId,
    projectlessOutputDirectory: "~/Downloads",
    prompt: options.prompt,
  };
}
export { previewTabManager } from "../image-side-panel/image-preview-tab-runtime";
export const rateLimitInfoAtom = createJotaiAtom<{ data: unknown | null }>({
  data: null,
});
export function readConfigBooleanFlag(
  config: Record<string, unknown> | null | undefined,
  key: string,
): boolean | undefined {
  const value = config?.[key];
  return typeof value === "boolean" ? value : undefined;
}
export {
  hydratePersistedAtoms,
  markPersistedAtomsSynced,
  persistedAtomsRegistry,
  readPersistedAtomsSnapshot,
  readPersistedRecord,
} from "../utils/persisted-atom-store";
export function readPersistedSignalSnapshot(
  get: ((signal: unknown, key?: unknown) => unknown) | null | undefined,
  key: string,
): unknown {
  const scopedValue = get?.(key);
  if (scopedValue !== undefined) return scopedValue;
  if (typeof localStorage === "undefined") return undefined;
  const rawValue = localStorage.getItem(key);
  if (rawValue == null) return undefined;
  try {
    return JSON.parse(rawValue);
  } catch {
    return rawValue;
  }
}
export const readSettingsToolName = "read_settings";
export function readSharedValue<TValue = unknown>(
  reader: (signal: unknown, key: string) => TValue,
  key: string,
): TValue {
  return readSharedObjectValueWithReaderRuntime(reader, key);
}
export function readStoredNumber(key: string, fallback: number): number {
  try {
    const value = window.localStorage?.getItem(key);
    if (value == null) return fallback;
    const parsed = JSON.parse(value) as unknown;
    return typeof parsed === "number" && Number.isFinite(parsed)
      ? parsed
      : fallback;
  } catch {
    return fallback;
  }
}
function recordConversationalOnboardingEvent(
  store: unknown,
  eventName: string,
  taskId: string,
): void {
  try {
    recordProductEventRuntime(store, { eventName }, { taskId });
  } catch {
    // Analytics should never block onboarding task progress.
  }
}
export function recordConversationalOnboardingAccessCompleted(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_access_completed",
    taskId,
  );
}
export function recordConversationalOnboardingAccessHostUnavailable(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_access_host_unavailable",
    taskId,
  );
}
export function recordConversationalOnboardingAccessRequestFailed(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_access_request_failed",
    taskId,
  );
}
export function recordConversationalOnboardingAccessRequested(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_access_requested",
    taskId,
  );
}
export function recordConversationalOnboardingAccessStarted(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_access_started",
    taskId,
  );
}
export function recordConversationalOnboardingExecutionStartFailed(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_execution_start_failed",
    taskId,
  );
}
export function recordConversationalOnboardingExecutionStarted(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_execution_started",
    taskId,
  );
}
export function recordConversationalOnboardingLifecycleStartFailed(
  store: unknown,
  taskId: string,
): void {
  recordConversationalOnboardingEvent(
    store,
    "conversational_onboarding_lifecycle_start_failed",
    taskId,
  );
}
export { refreshReviewPathsFast } from "../review/review-diff-store";
export const remoteHostsAtom = remoteHostsSignalRuntime;
export {
  renderAppControlToolCall as renderAppControlToolActivity,
  renderAppControlToolCall as renderThreadsReadToolActivity,
} from "../conversations/app-control-tool-call-row";
export { requestReviewPatchAction } from "../review/review-patch-action-boundary-runtime";
export function resolveActiveExplorationLabel({
  items,
}: {
  items: Array<{ type?: string; parsedCmd?: Record<string, unknown> }>;
  formatSearchQueryTermList?: (terms: string[]) => string;
  threadDetailLevel?: string;
}): {
  icon: string;
  message: {
    id: string;
    defaultMessage: string;
    description: string;
  };
  values?: Record<string, unknown>;
} | null {
  const latest = items.at(-1);
  const command = latest?.parsedCmd;
  if (latest == null || latest.type !== "exec" || command == null) return null;
  switch (command.type) {
    case "read":
      return {
        icon: "file",
        message: {
          id: "localConversationTurn.exploration.active.reading",
          defaultMessage: "<action>Reading</action> <detail>{path}</detail>",
          description: "Active exploration label while reading a file",
        },
        values: { path: String(command.path ?? command.name ?? "file") },
      };
    case "search":
      return {
        icon: "search",
        message: {
          id: "localConversationTurn.exploration.active.searching",
          defaultMessage: "<action>Searching</action> <detail>{query}</detail>",
          description: "Active exploration label while searching files",
        },
        values: { query: String(command.query ?? "workspace") },
      };
    case "list_files":
      return {
        icon: "folder",
        message: {
          id: "localConversationTurn.exploration.active.listing",
          defaultMessage: "<action>Listing</action> <detail>{path}</detail>",
          description: "Active exploration label while listing files",
        },
        values: { path: String(command.path ?? "files") },
      };
    default:
      return null;
  }
}
export function resolveSkillAppFromPath({
  resolvedApps,
  skillPathInfo,
}: {
  resolvedApps: readonly Array<{
    id: string;
    name: string;
    logoUrl?: string | null;
    logoUrlDark?: string | null;
  }>;
  skillPathInfo: Record<string, unknown>;
}): {
  id: string;
  name: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
} | null {
  const haystack = Object.values(skillPathInfo)
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();
  return (
    resolvedApps.find((app) => {
      const id = app.id.toLowerCase();
      const name = app.name.toLowerCase();
      return haystack.includes(id) || haystack.includes(name);
    }) ??
    resolvedApps[0] ??
    null
  );
}
export { resolveSkillPathInfoFromReadSummary };
export function resolveWorkspacePath({
  cwd,
  path,
}: {
  cwd?: string | null;
  path: string;
}): string {
  if (cwd == null || cwd.length === 0) {
    return normalizePathRuntime(path);
  }
  const relativePath = relativizePathRuntime(path, cwd);
  return isAbsolutePathRuntime(relativePath)
    ? relativePath
    : formatWorkspacePathLabelRuntime({
        root: cwd,
        relativePath,
        includeWorkspaceRootLabel: true,
      });
}
export const resumableConversationAtom = shouldResumeConversationSignalRuntime;
export { retryReviewFileDiff } from "../review/review-diff-store";
export {
  revertConfirmDialogOpenAtom,
  revertConfirmDialogSkipCheckedAtom,
  reviewPatchActionInFlightAtom,
  reviewRevertActionInFlightAtom,
} from "../review/review-patch-action-boundary-runtime";
export {
  reviewDiffActionsAvailableAtom,
  reviewDiffQueryAtom,
  reviewDiffStateAtom,
  reviewFileDiffQueryAtom,
  reviewFilePathsAtom,
  reviewLastTurnDiffAtom,
  reviewRepositorySourceAtom,
  reviewShowGitRepoEmptyStateAtom,
  reviewSummarySourceAtom,
  reviewWorkspaceRootAtom,
  reviewWorktreeInfoAtom,
} from "../review/review-diff-store";
export { reviewDiffModeAtom as reviewDiffViewModeAtom } from "../review/review-ui-state-runtime";
export {
  reviewExpandedActionsPortalContext,
  scrollReviewFileIntoView,
} from "../review/review-view-state-runtime";
type RepositoryWorktreeEntry = {
  root: string;
};

type LocalCheckoutForWorktree = {
  gitRoot: string;
  workspaceRoot: string;
};

function worktreeRelativeWorkspacePath({
  cwd,
  sourceWorktreeRoot,
}: {
  cwd: string;
  sourceWorktreeRoot: string;
}): string {
  const normalizedCwd = normalizePathRuntime(cwd);
  const normalizedSourceRoot = normalizePathRuntime(sourceWorktreeRoot).replace(
    /\/+$/u,
    "",
  );
  const canonicalCwd = canonicalHandoffPath(cwd);
  const canonicalSourceRoot = canonicalHandoffPath(sourceWorktreeRoot);
  if (canonicalCwd === canonicalSourceRoot) return "";
  const canonicalPrefix = `${canonicalSourceRoot}/`;
  if (!canonicalCwd.startsWith(canonicalPrefix)) return "";
  const sourcePrefix = `${normalizedSourceRoot}/`;
  return normalizedCwd.slice(sourcePrefix.length);
}

export function selectLocalCheckoutsForWorktree({
  cwd,
  repoWorktreeEntries,
  sourceWorktreeRoot,
}: {
  cwd: string;
  repoWorktreeEntries?: RepositoryWorktreeEntry[] | null;
  sourceWorktreeRoot: string;
}): LocalCheckoutForWorktree[] {
  const relativeWorkspacePath = worktreeRelativeWorkspacePath({
    cwd,
    sourceWorktreeRoot,
  });
  const sourceGitRoot = canonicalHandoffPath(sourceWorktreeRoot);
  return (repoWorktreeEntries ?? [])
    .filter((entry) => canonicalHandoffPath(entry.root) !== sourceGitRoot)
    .map((entry) => ({
      gitRoot: entry.root,
      workspaceRoot:
        relativeWorkspacePath.length > 0
          ? joinPathRuntime(entry.root, relativeWorkspacePath)
          : entry.root,
    }));
}
type PermissionPolicyLike =
  | {
      type?: string | null;
      mode?: string | null;
    }
  | string
  | null
  | undefined;

function serializeSandboxPolicy(policy: PermissionPolicyLike): string | null {
  if (typeof policy === "string") return policy;
  switch (policy?.type) {
    case "dangerFullAccess":
      return "danger-full-access";
    case "readOnly":
      return "read-only";
    case "workspaceWrite":
      return "workspace-write";
    case "externalSandbox":
      return null;
  }
  return policy?.mode ?? null;
}

export function serializePermissionPolicy(
  permissions: {
    activePermissionProfile?: { id?: string | null } | null;
    sandboxPolicy?: PermissionPolicyLike;
  } | null | undefined,
): { permissions: string } | { sandbox: string | null } {
  const activePermissionProfile = permissions?.activePermissionProfile;
  return activePermissionProfile?.id == null
    ? { sandbox: serializeSandboxPolicy(permissions?.sandboxPolicy) }
    : { permissions: activePermissionProfile.id };
}
export const serverConfigRequirementsQuery = serverConfigRequirementsQueryRuntime;
export { setRevertConfirmDialogSkipChecked } from "../review/review-patch-action-boundary-runtime";
export { setSidebarPanelForSide } from "../app-shell/side-panel-runtime";
export const sharedStateKeys = sharedStateKeysRuntime;
export function shouldHideAutomationExecutionEnvironment(draft: {
  kind?: string | null;
}): boolean {
  return draft.kind === "heartbeat";
}
export const sidePanelTabViewedEvent = sidePanelTabViewedEventRuntime;
export {
  SidebarPanelClosedIcon as sidebarPanelClosedIcon,
  SidebarPanelOpenIcon as sidebarPanelOpenIcon,
  SidebarUnreadIcon as sidebarUnreadIcon,
} from "../icons/sidebar-panel-icons";
export function splitWorkspacePathSegments(input: {
  cwd?: string | null;
  path: string;
}): string[] {
  return displayWorkspacePath(resolveWorkspacePath(input))
    .split("/")
    .filter((segment) => segment.length > 0);
}
export { dataUrlFromSvg as svgToDataUri } from "../utils/data-url-from";
export const tabKindIds = SidePanelTabIdRuntime;
export const themeRevisionAtom = createScopedAtom(appStoreScope, 0);
export { toConversationKey } from "../conversations/conversation-identity-runtime";
export const toFilePreviewUrl = buildLocalFileSrcRuntime;
export { toGitRelativePathKey } from "../utils/git-relative-display-path";
export const toHostConfig = normalizeRemoteConnectionToHostConfigRuntime;
export { truncateBranchName } from "../runtime/onboarding-hot-helpers-runtime";
export { sidebarUnreadActivityCountSignal as unreadActivityCountSignal } from "../app-shell/sidebar-unread-count-signal";
export function updateSharedObjectState<TValue>(
  store: {
    get<TSelected>(signal: unknown, key: string): TSelected | undefined;
    set<TSelected>(signal: unknown, key: string, value: TSelected): void;
  },
  key: string,
  nextValue: TValue | ((currentValue: TValue | undefined) => TValue),
): void {
  updateSharedObjectValueRuntime(store, key, nextValue);
}
export const useAppScopeAtomValue = useAppScopeValue;
export function useAutomationModelsQuery() {
  return useModelListQueryRuntime({ includeUltraReasoningEffort: false });
}
export function useBackgroundSubagents(conversationId?: string | null): unknown[] {
  initBackgroundSubagentsRuntimeChunk();
  return (
    useAppScopeValue<unknown[]>(backgroundAgentsSignalRuntime, conversationId ?? null) ??
    []
  );
}
export function useBrowserSidebarEnabled(): boolean {
  return (
    useAppScopeValue<boolean>(isBrowserSidebarEnabledSignalRuntime) !== false
  );
}
export const useComposerStateValue = useAppScopeValue;
export { useConversationComments } from "../conversations/conversation-identity-runtime";
export function useConversationMeta(conversationId?: string | null): {
  conversationId: string | null;
  cwd: string | null;
  hostId: string;
} {
  const resolvedConversationId = conversationId ?? null;
  const cwd =
    resolvedConversationId == null
      ? null
      : (useAppScopeValue<string | null>(
          conversationCwdSignalRuntime,
          resolvedConversationId,
        ) ?? null);
  const hostId =
    (resolvedConversationId == null
      ? null
      : useAppScopeValue<string | null>(
          conversationHostIdSignalRuntime,
          resolvedConversationId,
        )) ??
    useAppScopeValue<string | null>(defaultHostIdSignalRuntime) ??
    "local";
  return { conversationId: resolvedConversationId, cwd, hostId };
}
type WorkspaceContextLike = {
  cwd?: string | null;
  git?: { root?: string | null } | null;
  kind?: string | null;
  root?: string | null;
  workspaceRoot?: string | null;
};

function usableCwd(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeOptionalPath(value: unknown): string | null {
  return usableCwd(value) ? normalizePathRuntime(value) : null;
}

function resolveCurrentWorktreeRoot(context: unknown): string | null {
  if (context == null || typeof context !== "object") return null;
  const record = context as WorkspaceContextLike;
  if (record.kind === "git") {
    return normalizeOptionalPath(record.git?.root ?? record.root);
  }
  return normalizeOptionalPath(
    record.workspaceRoot ?? record.root ?? record.cwd,
  );
}

export function useCurrentWorktreeRoot(): string | null {
  return resolveCurrentWorktreeRoot(
    useAppScopeValue(workspaceContextSignalRuntime),
  );
}
export { useDiffHighlighter } from "../review/diff-highlighter-boundary-runtime";
export const usePermissionSettings = usePermissionsModeRuntime;
export function usePersistedToggleSetter(
  key: string,
): (value: boolean | ((current: boolean) => boolean)) => void {
  return (value) => {
    const current = readPersistedSignalSnapshot(undefined, key);
    const next =
      typeof value === "function"
        ? value(Boolean(current))
        : Boolean(value);
    persistScopedSignalValue(readAppScopeStore(), key, next);
  };
}
export { useReducedMotion as usePrefersReducedMotion } from "../utils/use-reduced-motion";
export const useReviewFindHighlight = useApplyDiffFindHighlightRuntime;
export function useScopedPersistedValue<TValue = unknown>(
  key: string,
  fallback?: TValue,
): { data: TValue | undefined; isLoading: boolean } {
  const [data] = React.useState<TValue | undefined>(() => {
    const value = readPersistedSignalSnapshot(undefined, key);
    return value === undefined ? fallback : (value as TValue);
  });
  return { data, isLoading: false };
}
export const useSubscriptionQuery = useSelectedAccountQueryRuntime;
export { useMeasuredTextMeasurement as useTextMeasurement } from "../utils/use-measured-text-collapse";
export function useThreadHostContext(conversationId?: string | null): {
  getHostId(): string;
  hostId: string;
} {
  const resolvedConversationId = conversationId ?? null;
  const hostId =
    (resolvedConversationId == null
      ? null
      : useAppScopeValue<string | null>(
          conversationHostIdSignalRuntime,
          resolvedConversationId,
        )) ??
    useAppScopeValue<string | null>(defaultHostIdSignalRuntime) ??
    "local";
  return React.useMemo(
    () => ({
      getHostId: () => hostId,
      hostId,
    }),
    [hostId],
  );
}
type ThreadsQueryThreadRecord = {
  createdAt?: number | string | null;
  hasUnreadTurn?: boolean;
  hostId?: string | null;
  id: string;
  name?: string | null;
  preview?: string | null;
  title?: string | null;
  updatedAt?: number | string | null;
};

export function useThreadsQuery() {
  return useReactQueryRuntime<ThreadsQueryThreadRecord[]>({
    queryKey: ["background-threads", "local-options"],
    queryFn: async () => {
      const result = await listBackgroundThreadsRuntime({
        scope: readAppScopeStore(),
        limit: 200,
        query: null,
      });
      return (result.threads ?? []).map((thread) => ({
        ...thread,
        name: thread.title,
        preview: thread.preview ?? thread.title,
      }));
    },
    staleTime: queryDurationsRuntime.FIVE_SECONDS,
  });
}
export function useTurnFixedContentPortalContainer(
  conversationId?: string | null,
): HTMLElement | null {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    if (typeof document === "undefined") {
      setContainer(null);
      return;
    }
    const escapedConversationId =
      conversationId == null
        ? null
        : typeof CSS !== "undefined" && typeof CSS.escape === "function"
          ? CSS.escape(conversationId)
          : conversationId.replace(/["\\]/g, "\\$&");
    const scopedContainer =
      escapedConversationId == null
        ? null
        : document.querySelector<HTMLElement>(
            `[data-conversation-id="${escapedConversationId}"] [data-turn-fixed-content-portal]`,
          );
    setContainer(
      scopedContainer ??
        document.querySelector<HTMLElement>(
          "[data-turn-fixed-content-portal]",
        ) ??
        document.body,
    );
  }, [conversationId]);
  return container;
}
type WorktreeOrigin = {
  dir: string;
  originUrl?: string | null;
  root?: string | null;
};

type WorktreeApplyTarget = {
  gitRoot: string;
  label: string;
  workspaceRoot: string;
};

type WorktreeTargetRootsOptions = {
  conversationCwd?: string | null;
  hostConfig: unknown;
};

type WorktreeTargetRootsResult = {
  sourceWorkspaceRoot: string | null;
  targetRoots: WorktreeApplyTarget[];
  worktreePath: string | null;
};

export function useWorktreeTargetRoots({
  conversationCwd = null,
  hostConfig,
}: WorktreeTargetRootsOptions): WorktreeTargetRootsResult {
  const currentWorktreeRoot = useCurrentWorktreeRoot();
  const activeWorkspaceRoots = useAppScopeValue<{
    data?: { roots?: string[] } | null;
  }>(activeWorkspaceRootsQueryRuntime);
  const candidateDirs = uniqRuntime(
    [
      conversationCwd,
      ...(activeWorkspaceRoots?.data?.roots?.filter(usableCwd) ?? []),
    ].filter((dir): dir is string => dir != null),
  );

  const { data: originsData } = useScopedQueryRuntime<{
    data?: { origins?: WorktreeOrigin[] };
  }>(worktreeOriginsQueryAtom, {
    params: { dirs: candidateDirs },
    source: "apply_worktree",
  });
  const origins = originsData?.origins;
  const normalizedConversationCwd = normalizeOptionalPath(conversationCwd);
  const conversationOrigin = origins?.find(
    (origin) => normalizeOptionalPath(origin.dir) === normalizedConversationCwd,
  );

  const matchingOrigin =
    conversationOrigin?.originUrl == null
      ? null
      : (origins?.find((origin) => {
          if (origin.originUrl !== conversationOrigin.originUrl) return false;
          if (
            normalizedConversationCwd != null &&
            normalizeOptionalPath(origin.dir) === normalizedConversationCwd
          ) {
            return false;
          }
          return currentWorktreeRoot == null
            ? true
            : !isPathWithinRootRuntime(origin.dir, currentWorktreeRoot);
        }) ?? null);

  const gitRoot = matchingOrigin?.root ?? null;
  const workspaceRoot = matchingOrigin?.dir ?? null;
  const { data: baseBranchLabel = "-" } = useScopedQueryRuntime<{
    data?: string | null;
  }>(worktreeBaseBranchQueryAtom, {
    cwd: gitRoot,
    enabled: gitRoot != null,
    hostConfig,
    operationSource: "apply_worktree",
  });

  return {
    sourceWorkspaceRoot: workspaceRoot,
    targetRoots:
      workspaceRoot == null || gitRoot == null
        ? []
        : [
            {
              gitRoot,
              label: baseBranchLabel ?? "-",
              workspaceRoot,
            },
          ],
    worktreePath: conversationCwd,
  };
}
function parseWebSearchUrl(value: string | null | undefined): URL | null {
  if (value == null) return null;
  try {
    const trimmed = value
      .trim()
      .replace(/^[("'`]+|[)"'`,.;!?]+$/gu, "");
    const url = new URL(
      /^[a-z][a-z\d+\-.]*:\/\//iu.test(trimmed)
        ? trimmed
        : `https://${trimmed}`,
    );
    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

function webSearchUrlFromAction(action: WebSearchAction): URL | null {
  switch (action?.type) {
    case "openPage":
    case "findInPage":
      return parseWebSearchUrl(action.url);
    case "search":
    case "other":
    case undefined:
      return null;
  }
}

function webSearchQueryCandidates(
  activity: WebSearchActivityLike,
): string[] {
  return activity.action?.type === "search"
    ? [
        activity.action.query,
        ...(activity.action.queries ?? []),
        activity.query,
      ].flatMap((query) => (query == null ? [] : [query]))
    : activity.query == null
      ? []
      : [activity.query];
}

function findWebSearchUrlInQuery(query: string): URL | null {
  const siteMatch = /\bsite:([^\s]+)/iu.exec(query);
  const explicitUrlMatch = /\bhttps?:\/\/[^\s"'<>]+/iu.exec(query);
  return parseWebSearchUrl(siteMatch?.[1] ?? explicitUrlMatch?.[0]);
}

function baseFaviconDomain(hostname: string): string {
  const parts = hostname.split(".");
  if (parts.length <= 2) return hostname;
  const penultimatePart = parts.at(-2);
  return parts.at(-1)?.length === 2 &&
    penultimatePart != null &&
    penultimatePart.length <= 3 &&
    parts.length >= 3
    ? parts.slice(-3).join(".")
    : parts.slice(-2).join(".");
}

function faviconUrlForWebSearchUrl(url: URL): string {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
    baseFaviconDomain(url.hostname),
  )}&sz=32`;
}

export function webSearchFaviconUrl(
  activity: WebSearchActivityLike,
): string | null {
  const actionUrl = webSearchUrlFromAction(activity.action);
  if (actionUrl != null) return faviconUrlForWebSearchUrl(actionUrl);

  for (const query of webSearchQueryCandidates(activity)) {
    const queryUrl = findWebSearchUrlInQuery(query);
    if (queryUrl != null) return faviconUrlForWebSearchUrl(queryUrl);
  }
  return null;
}
type WorktreeOriginsQueryParams = {
  dirs?: string[];
  hostId?: string;
};

type WorktreeOriginsQueryInput = {
  enabled?: boolean;
  params?: WorktreeOriginsQueryParams;
  source?: string;
};

type QueryCacheLike = {
  findAll(filters?: { queryKey?: unknown }): Array<{
    meta?: { gitOrigins?: WorktreeOriginsQueryParams };
    queryKey: unknown;
  }>;
};

type QueryClientLike = {
  getQueryCache?(): QueryCacheLike;
  getQueryData?(queryKey: unknown): unknown;
  invalidateQueries?(
    filters?: { queryKey?: unknown; [key: string]: unknown },
    options?: unknown,
  ): Promise<unknown> | unknown;
};

function readGitOriginsPlaceholder(
  queryClient: QueryClientLike | undefined,
  params: WorktreeOriginsQueryParams | undefined,
): unknown {
  if (params?.dirs == null || params.dirs.length === 0) return undefined;
  const queries =
    queryClient?.getQueryCache?.().findAll({
      queryKey: createHostQueryKeyRuntime("git-origins"),
    }) ?? [];
  for (const query of queries) {
    const metadata = query.meta?.gitOrigins;
    if (metadata?.hostId !== params.hostId || metadata.dirs == null) continue;
    const cachedDirs = new Set(metadata.dirs);
    if (!params.dirs.every((dir) => cachedDirs.has(dir))) continue;
    const cachedData = queryClient?.getQueryData?.(query.queryKey);
    if (cachedData != null) return cachedData;
  }
  return undefined;
}

type WorktreeBaseBranchQueryParams = {
  commonDir?: string | null;
  cwd?: string | null;
  enabled?: boolean;
  hostConfig?: unknown;
  hostKey?: string | null;
  operationSource?: string;
  refetchOnWindowFocus?: boolean;
  root?: string | null;
  staleTime?: number | null;
};

const worktreeBaseBranchQueryFamily =
  createCwdQueryAtomFamilyRuntime<WorktreeBaseBranchQueryParams>({
    method: "current-branch",
    getParams: (params) => ({
      operationSource: params.operationSource,
      root: params.root,
    }),
    getOptions: (params) => ({
      refetchOnWindowFocus: params.refetchOnWindowFocus,
      select: (response: unknown) =>
        (response as { branch?: string | null } | null)?.branch ?? null,
      ...(params.staleTime == null ? {} : { staleTime: params.staleTime }),
    }),
  });

type WorktreeBranchMutationContext = {
  cwd: string;
  hostConfig?: unknown;
  operationSource: string;
};

type WorktreeBranchMutationVariables = {
  branch: string;
  failIfExists?: boolean;
  mode?: "synced" | "worktree";
  signal?: AbortSignal;
};

type WorktreeBranchCommandResult = {
  branch?: string;
  conflictedPaths?: unknown;
  error?: string;
  errorType?: string;
  execOutput?: unknown;
  status?: string;
};

function hostIdFromConfig(hostConfig: unknown): string | undefined {
  if (typeof hostConfig === "string") return hostConfig;
  if (hostConfig == null || typeof hostConfig !== "object") return undefined;
  const record = hostConfig as Record<string, unknown>;
  const hostId = record.id ?? record.hostId;
  return typeof hostId === "string" ? hostId : undefined;
}

export const workspaceFoldersQuerySignal = activeWorkspaceRootsQueryRuntime;
export const worktreeBaseBranchQueryAtom = worktreeBaseBranchQueryFamily.fromCwd$;
export const worktreeBranchMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: WorktreeBranchMutationContext,
    { queryClient }: { queryClient?: QueryClientLike },
  ) => {
    const hostId = hostIdFromConfig(context.hostConfig);
    return {
      mutationKey: [
        "vscode",
        "git-create-and-checkout-branch",
        context.cwd,
        hostId ?? "local",
        context.operationSource,
      ],
      mutationFn: async ({
        signal,
        ...variables
      }: WorktreeBranchMutationVariables) => {
        const createResult =
          await sendHostRequestRuntime<WorktreeBranchCommandResult>(
            "git-create-branch",
            {
              params: {
                ...variables,
                cwd: context.cwd,
                hostId,
              },
              signal,
              source: context.operationSource,
            },
          );
        if (createResult.status === "error") {
          return {
            status: "create-error",
            error: createResult.error,
            execOutput: createResult.execOutput,
          };
        }

        const checkoutResult =
          await sendHostRequestRuntime<WorktreeBranchCommandResult>(
            "git-checkout-branch",
            {
              params: {
                branch: variables.branch,
                cwd: context.cwd,
                hostId,
              },
              signal,
              source: context.operationSource,
            },
          );
        return checkoutResult.status === "error"
          ? {
              status: "checkout-error",
              error: checkoutResult.error,
              errorType: checkoutResult.errorType,
              conflictedPaths: checkoutResult.conflictedPaths,
              execOutput: checkoutResult.execOutput,
            }
          : { status: "success", branch: checkoutResult.branch };
      },
      onSettled: () => {
        void queryClient?.invalidateQueries?.({
          queryKey: createHostQueryKeyRuntime("git-current-branch"),
        });
        void queryClient?.invalidateQueries?.({
          queryKey: createHostQueryKeyRuntime("git-metadata"),
        });
      },
      networkMode: "always",
    };
  },
);
export const worktreeOriginsQueryAtom = createScopedQueryAtom(
  appStoreScope,
  (
    { enabled = true, params, source }: WorktreeOriginsQueryInput = {},
    { queryClient }: { queryClient?: QueryClientLike },
  ) => {
    const requestParams = params ?? {};
    return {
      enabled:
        enabled !== false &&
        (requestParams.dirs == null || requestParams.dirs.length > 0),
      meta: {
        gitOrigins: {
          dirs: requestParams.dirs,
          hostId: requestParams.hostId,
        },
      },
      placeholderData: () => readGitOriginsPlaceholder(queryClient, params),
      queryFn: ({ signal }: { signal?: AbortSignal } = {}) =>
        sendHostRequestRuntime("git-origins", {
          params: requestParams,
          signal,
          source,
        }),
      queryKey: createHostQueryKeyRuntime("git-origins", requestParams),
      staleTime: queryDurationsRuntime.FIVE_SECONDS,
    };
  },
);
export const worktreeSetupRoutePath = pendingWorktreeInitPathRuntime;
export const writeSettingsToolName = "write_settings";
export function writeStoredValue(key: string, value: unknown): void {
  try {
    window.localStorage?.setItem(key, JSON.stringify(value));
  } catch {
    // Storage is best-effort; callers already provide in-memory fallbacks.
  }
}

// --- automations-page Bc0ZtIBr body-restoration cross-chunk symbols (open boundary; replace as owning modules are restored) ---
export { DropdownSearchIcon as MagnifyingGlassIcon } from "../ui/dropdown";
export { ProjectKindIcon } from "../command-menu/new-thread-project-runtime";
export { ThemeColorSwatch } from "../command-menu/theme-preview-runtime";
export { appBadgeCountAtom } from "../runtime/global-ui-state-boundary-runtime";
export { computeCodeThemePreview } from "../command-menu/theme-preview-runtime";
export {
  hasRunningTurnAtom,
  isHostPluggedInAtom,
} from "../runtime/power-save-state-runtime";
export { powerSaveSettings } from "../runtime/onboarding-misc-boundary-runtime";
export { useCodeThemes } from "../command-menu/theme-preview-runtime";
export { useSelectProjectForNewThread } from "../command-menu/new-thread-project-runtime";

export {
  applyStatsigFeatureOverrides,
  getEnabledFeaturesSnapshot,
  onboardingDynamicConfigStoreKey,
  owlFeatureAuth,
  owlFeatureAutofillAndPasswords,
  owlFeatureDownloads,
  owlFeatureExtensions,
  owlFeatureHistory,
  owlFeatureOpenAiGoLinks,
  owlFeaturePermissions,
  owlFeaturePrinting,
  owlFeatureWebViewEnhancements,
  owlFeaturesQueryKey,
  owlFeaturesQueryKeyPrefix,
  parseOnboardingDynamicConfig,
  useCodexAppStore,
  useStatsigFeatureOverride,
} from "../statsig/owl-feature-runtime";

export {
  allHostServicesAtom,
  findOpenConversationView,
  getConversationTitle,
  getRemoteTaskNavigationPath,
  isConversationMuted,
  isWindowFocusedAtom,
  notificationSettings,
  pendingApprovalsAtom,
  useRemoteTasksQuery,
} from "../notifications/desktop-notification-runtime";

// --- automations-page Bc0ZtIBr statsig cluster cross-chunk symbols (open boundary) ---
export {
  StatsigAnalyticsBridge,
  buildStatsigUser,
  codexBrandName,
  finalizeStatsigUser,
  hostAppInfoQueryOptions,
  hostPlatformInfoQueryOptions,
  hostRequestBridge,
  requestStatsigBootstrapPayload,
  statsigBase64BodyHeaderName,
  statsigLogEventUrl,
  statsigReadyContext,
  useCurrentAccountQuery,
  useHostInfoQuery,
  useHostResourceQuery,
  useStatsigAnalyticsLogger,
} from "../statsig/statsig-provider-runtime";

// --- automations-page Bc0ZtIBr analytics + feedback clusters cross-chunk symbols (open boundary) ---
export {
  AnalyticsLogger,
  analyticsApiClient,
  branchPushedProductEvent,
  buildAnalyticsRequestInit,
  gitBlameEnabledEventToken,
  gitCommittedProductEvent,
  pullRequestCreatedProductEvent,
  reviewPatchActionEvent,
} from "../analytics/analytics-runtime-externals";
export const codexMetadataEventProtoNamespaces: unknown[] = [];
export const emptyCodexEventDescriptor = { $type: "" };
export function FeedbackIcon({
  className,
}: {
  className?: string;
}): React.JSX.Element {
  return React.createElement(
    "span",
    {
      "aria-hidden": true,
      className,
    },
    "?",
  );
}
export const appServerHostSetupConfig = { hostId: "local" };
export function buildThreadFeedbackTags(
  threadId: string | null | undefined,
): Record<string, unknown> {
  return threadId == null ? {} : { thread_id: threadId };
}
export function useActiveHost(): string {
  return "local";
}
export function useAppServerHostSetup(): void {}
export function useRegisterComposerSlashCommand(_command: unknown): void {}

// --- automations-page Bc0ZtIBr plugins / eval-control cluster cross-chunk symbols (open boundary) ---
export const INTERNAL_PLUGINS_CONFIG_KEY = "codex-internal-plugins";
export const PLUGIN_MARKETPLACES_REFRESHED_MARKER =
  "plugin-marketplaces-refreshed";
export const buildMcpElicitationDecision = buildMcpElicitationDecisionRuntime;
export function conversationIdForThreadId(
  threadId: string | null | undefined,
): string | null {
  return typeof threadId === "string" && threadId.trim().length > 0
    ? threadId
    : null;
}
export const debugEvalControlBridge = {
  scope: null as unknown,
  bindScope(scope: unknown): () => void {
    this.scope = scope;
    return () => {
      if (this.scope === scope) this.scope = null;
    };
  },
  getScope(): unknown {
    return this.scope;
  },
};
export const internalPluginsConfigSchema = z
  .object({
    version: z.string().optional(),
  })
  .passthrough();
export function invokeMainProcessCommand<T = unknown>(
  command: string,
  payload?: Record<string, unknown>,
): Promise<T> {
  return sendHostRequestRuntime(command, payload ?? {}) as Promise<T>;
}
export function loadPetInstallModalHost(): Promise<
  typeof import("../runtime/current-app-initial/pet-install-modal-host-current-runtime")
> {
  return import(
    "../runtime/current-app-initial/pet-install-modal-host-current-runtime"
  );
}
export function loadPetInstallState(): Promise<
  typeof import("../features/pet-install-state-entry")
> {
  return import("../features/pet-install-state-entry");
}
export function parseHostConfigDocument(config: unknown): Record<string, unknown> {
  return config != null && typeof config === "object" && !Array.isArray(config)
    ? (config as Record<string, unknown>)
    : {};
}
export const pendingMcpElicitationByConversationSignal =
  pendingMcpElicitationByConversationSignalRuntime;
export function renderOverlayInScope<TProps extends { onClose?: () => void }>(
  _scope: unknown,
  OverlayComponent: ComponentType<TProps>,
  props?: Omit<TProps, "onClose"> & { onClose?: () => void },
): () => void {
  if (typeof document === "undefined") return () => {};
  const container = document.createElement("div");
  container.dataset.codexOverlayRoot = "true";
  document.body.appendChild(container);
  const root = createRoot(container);
  const close = () => {
    props?.onClose?.();
    root.unmount();
    container.remove();
  };
  root.render(
    React.createElement(OverlayComponent, {
      ...(props ?? {}),
      onClose: close,
    } as TProps),
  );
  return close;
}
export function useCurrentAccountEmail(): { email: string | null } {
  const { data } = useSelectedAccountQueryRuntime();
  const account = data as { email?: unknown } | null | undefined;
  return { email: typeof account?.email === "string" ? account.email : null };
}
export function usePluginMarketplacesRefresher(): (marker?: string) => void {
  const queryClient = useQueryClientRuntime();
  return React.useCallback(
    (_marker?: string) => {
      void queryClient.invalidateQueries({ queryKey: ["plugins"] });
      void queryClient.invalidateQueries({ queryKey: ["plugin-marketplaces"] });
    },
    [queryClient],
  );
}
export async function waitForPluginInstalled({
  hostId,
  marketplacePath,
  pluginName,
  pollIntervalMs = 500,
  timeoutMs = 30_000,
}: {
  hostId: string;
  marketplacePath?: string | null;
  pluginName: string;
  pollIntervalMs?: number;
  timeoutMs?: number;
}): Promise<void> {
  const startedAt = Date.now();
  for (;;) {
    const response = (await sendAppServerRequestRuntime("list-plugins", {
      hostId,
    })) as {
      marketplaces?: Array<{
        path?: string | null;
        plugins?: Array<{ installed?: boolean; name?: string }>;
      }>;
    };
    const isInstalled =
      response.marketplaces?.some(
        (marketplace) =>
          (marketplacePath == null || marketplace.path === marketplacePath) &&
          marketplace.plugins?.some(
            (plugin) =>
              plugin.name === pluginName && plugin.installed === true,
          ),
      ) ?? false;
    if (isInstalled) return;
    if (Date.now() - startedAt >= timeoutMs) {
      throw new Error(`Timed out waiting for plugin to install: ${pluginName}`);
    }
    await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
  }
}

// --- automations-page Bc0ZtIBr sidebar cluster (open boundary) ---
export function SidebarDragDropProvider({
  children,
}: {
  children:
    | React.ReactNode
    | ((state: {
        isDraggingProject: boolean;
        isDraggingThread: boolean;
      }) => React.ReactNode);
  homeContainerIdByThreadId?: unknown;
  onProjectDrop?: (drop: unknown) => void;
  onThreadDrop?: (drop: unknown) => void;
}): React.JSX.Element {
  return React.createElement(
    React.Fragment,
    null,
    typeof children === "function"
      ? children({ isDraggingProject: false, isDraggingThread: false })
      : children,
  );
}
export function SidebarPinnedSection(): null {
  return null;
}
export function SidebarRouteNavRow({
  icon: Icon,
  isActive,
  label,
  onClick,
}: {
  icon?: ComponentType<{ className?: string }>;
  isActive?: boolean;
  label: React.ReactNode;
  onClick?: () => void;
}): React.JSX.Element {
  return React.createElement(
    "button",
    {
      type: "button",
      className: [
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left",
        isActive ? "bg-token-sidebar-surface-secondary" : "",
      ]
        .filter(Boolean)
        .join(" "),
      onClick,
    },
    Icon == null ? null : React.createElement(Icon, { className: "icon-sm" }),
    React.createElement("span", { className: "truncate" }, label),
  );
}
export { browserUseTabsStore } from "../runtime/onboarding-misc-boundary-runtime";
export const hiddenBackgroundBrowserWebviewEnabledAtom = createScopedAtom(
  appRootScope,
  false,
);
let lastSidebarScrollActivityAt = 0;
export function markSidebarScrollActivity(): void {
  lastSidebarScrollActivityAt = Date.now();
}
export function openSitesRoute(
  _store: unknown,
  navigate: (to: string, options?: unknown) => void,
): void {
  navigate("/sites");
}
export function revertThreadWorkspaceMove(): void {}
export const sidebarStyles = {
  sidebarScroll: {},
};
export const sitesRouteAvailabilityAtom = createJotaiAtom<
  "available" | "unavailable" | string
>("unavailable");

// --- automations-page Bc0ZtIBr runtime+overlays cluster (open boundary) ---
export function getCommandMatchScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase();
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter((token) => token.length > 0);
  if (tokens.length === 0) return 1;
  return tokens.every((token) => normalizedText.includes(token)) ? 1 : 0;
}
export const relaunchNoticeSignal = createScopedAtom(appRootScope, null);
export function useIsTitlebarTintEnabled(): boolean {
  return true;
}
export function useRelaunchApp(): () => void {
  return React.useCallback(() => {
    void sendHostRequestRuntime("relaunch-app", {});
  }, []);
}

// --- automations-page Bc0ZtIBr lifecycle-effects cluster (open boundary) ---
export const AVATAR_OVERLAY_PRODUCT_EVENT_NAME = {
  eventName: "codex_avatar_overlay",
};
export function AppLoadingFallback({
  debugName,
}: {
  debugName?: string;
}): React.JSX.Element {
  return React.createElement(
    "div",
    {
      "data-debug-name": debugName,
      className: "flex h-screen items-center justify-center text-sm",
    },
    "Loading...",
  );
}
export const AvatarOverlayActionProto = {
  CODEX_AVATAR_OVERLAY_ACTION_UNSPECIFIED:
    "CODEX_AVATAR_OVERLAY_ACTION_UNSPECIFIED",
  CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED:
    "CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED",
  CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED:
    "CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED",
  CODEX_AVATAR_OVERLAY_ACTION_OPENED: "CODEX_AVATAR_OVERLAY_ACTION_OPENED",
  CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED:
    "CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED",
  CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED:
    "CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED",
  CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED:
    "CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED",
  CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED:
    "CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED",
  CODEX_AVATAR_OVERLAY_ACTION_CLOSED: "CODEX_AVATAR_OVERLAY_ACTION_CLOSED",
  CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED:
    "CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;
export const AvatarOverlayNotificationSourceProto = {
  CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_UNSPECIFIED:
    "CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_UNSPECIFIED",
  CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL:
    "CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL",
  CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD:
    "CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;
export const AvatarOverlayPetKindProto = {
  CODEX_AVATAR_OVERLAY_PET_KIND_UNSPECIFIED:
    "CODEX_AVATAR_OVERLAY_PET_KIND_UNSPECIFIED",
  CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN:
    "CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN",
  CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM:
    "CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;
export const AvatarOverlaySourceProto = {
  CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED:
    "CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED",
  CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS: "CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS",
  CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU:
    "CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU",
  CODEX_AVATAR_OVERLAY_SOURCE_MASCOT: "CODEX_AVATAR_OVERLAY_SOURCE_MASCOT",
  CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE:
    "CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE",
  CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW:
    "CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW",
  CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY:
    "CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;
export function ConversationUnreadAvatar({
  conversationId,
}: {
  archived?: boolean;
  conversationId: string;
}): React.JSX.Element {
  return React.createElement("span", {
    "aria-hidden": true,
    "data-conversation-id": conversationId,
    className: "h-2 w-2 shrink-0 rounded-full bg-token-text-primary",
  });
}
export const avatarOverlayOpenStateAtom = avatarOverlayOpenStateSignalRuntime;
export const connectedHostIdsAtom = connectedHostIdsSignalRuntime;
export const currentHostIdAtom = currentHostIdSignalRuntime;
export const experimentalFeatureEnablementQueryKey = [
  "experimental-feature-enablement",
] as const;
export function formatRemoteTaskTitle(title: string | null | undefined): string {
  return title?.trim() ?? "";
}
export function getConnectedHost(
  scope: { get<TValue = unknown>(signal: unknown, key?: unknown): TValue },
  hostId: string,
): { state: string } {
  return getRemoteConnectionStateRuntime(scope, hostId);
}
export function getLocalConversationWorkspaceLabel({
  cwd,
  workspaceKind,
}: {
  cwd?: string | null;
  workspaceKind?: unknown;
}): string {
  if (workspaceKind === "projectless") return "Projectless";
  if (cwd == null || cwd.length === 0) return "";
  return cwd.split(/[\\/]/).filter(Boolean).at(-1) ?? cwd;
}
export function navigateToThreadRoute(
  _scope: unknown,
  threadKey: string,
  _threadNavigationContext: unknown,
  navigate: (to: string, options?: unknown) => void,
): void {
  navigate(getLocalConversationPathRuntime(threadKey));
}
export const onboardingPreviouslyCompletedEvent = {
  eventName: "codex_onboarding_previously_completed",
};
export const productEventLoggerAtom = createJotaiAtom({
  logProductEvent(): void {},
});
export const queryDevtoolsToggleEventSource = {
  listener: null as (() => void) | null,
  setEventListener(listener: (() => void) | null): () => void {
    this.listener = listener;
    return () => {
      if (this.listener === listener) this.listener = null;
    };
  },
  emit(): void {
    this.listener?.();
  },
};
let currentAnalyticsUser: unknown = null;
export function setAnalyticsUser(user: unknown): void {
  currentAnalyticsUser = user;
}
const threadByKeySignals = new Map<string, unknown>();
export const threadByKeyAtomFamily = {
  scope: appRootScope,
  resolve(_scope: unknown, threadKey: string): unknown {
    let signal = threadByKeySignals.get(threadKey);
    if (signal == null) {
      signal = createScopedAtom(appRootScope, null);
      threadByKeySignals.set(threadKey, signal);
    }
    return signal;
  },
};
export const unreadThreadKeysAtom = createJotaiAtom<string[]>([]);
export const useHostRegistry = useRemoteManagerRegistryRuntime;
export function useIsQueryDevtoolsEnabled({
  buildFlavor,
  isDev,
}: {
  buildFlavor?: string | null;
  isDev?: boolean;
} = {}): boolean {
  return Boolean(isDev || buildFlavor === "dev");
}
export function useMarkRemoteTaskReadMutation(taskId: string): {
  mutate(): void;
} {
  return {
    mutate: () => {
      if (taskId.length > 0) {
        void sendHostRequestRuntime("mark-remote-task-read", { taskId });
      }
    },
  };
}
export function useTelemetryEligibilityQuery(enabled = true) {
  return useReactQueryRuntime<boolean>({
    enabled,
    queryKey: ["telemetry-eligibility"],
    queryFn: async () => true,
    staleTime: queryDurationsRuntime.FIVE_MINUTES,
  });
}
export function useThreadNavigationContext(): null {
  return null;
}

// --- automations-page Bc0ZtIBr features/loaders/icons cluster (open boundary) ---
type ToastRecord = {
  content?: React.ReactNode;
  description?: React.ReactNode;
  duration: number;
  hasCloseButton: boolean;
  isShown: boolean;
  level: "danger" | "info" | "success" | "warning";
  testId?: string;
  title: React.ReactNode | null;
};

export function ToastNotification({ toastId }: { toastId: string }) {
  const toast = useAppScopeValue<ToastRecord>(
    toastRecordSignalRuntime,
    toastId,
  );
  if (toast == null) return null;
  return React.createElement(Toast, {
    ...toast,
    onRemove: () => {
        removeToastRuntime(readAppScopeStore(), toastId);
    },
  });
}
export const activeToastIdsAtom = activeToastIdsSignalRuntime;
export const automationDeletedExternallyMessage =
  "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.";
export const buildPrimaryRuntimeStatusQueryKey =
  buildPrimaryRuntimeStatusQueryKeyRuntime;
type AppModalComponent<TProps extends object = { onClose?: () => void }> =
  ComponentType<TProps>;

export function closeAppModal(
  scope: ScopedModalStore,
  ModalComponent: AppModalComponent,
): void {
  closeModalControllerModalRuntime(scope, ModalComponent);
}

export function isAppModalOpen(
  scope: ScopedModalStore,
  ModalComponent: AppModalComponent,
): boolean {
  return isModalControllerModalOpenRuntime(scope, ModalComponent);
}
export function navigateToImplementTodo({
  comment,
  fileName,
  hostId,
  line,
}: {
  comment?: string;
  fileName: string;
  hostId?: string | null;
  line: number;
  navigate?: (to: string, options?: unknown) => void;
  scope?: unknown;
}): void {
  void openInEditor({
    hostId,
    line,
    path: fileName,
    target: comment,
  });
}
export function openAppModal<TProps extends object>(
  scope: ScopedModalStore,
  ModalComponent: AppModalComponent<TProps>,
  props?: Omit<TProps, "onClose">,
): void {
  openModalControllerModalRuntime(scope, ModalComponent, (props ?? {}) as TProps);
}
export const primaryRuntimeInstallProgressStorageKey =
  primaryRuntimeInstallProgressStorageKeyRuntime;
export const primaryRuntimeInstalledAtom = primaryRuntimeInstalledAtomRuntime;
export const primaryRuntimeReadyInvalidationQueryKeyPrefixes = [
  effectiveConfigQueryKeyPrefix,
  layeredConfigQueryKeyPrefix,
  userConfigQueryKeyPrefix,
  ["skills"],
  ["plugins"],
] as const;
export function readPersistedStorageValue<TValue>(
  key: string,
  fallback: TValue,
): TValue {
  if (typeof localStorage === "undefined") return fallback;
  const rawValue = localStorage.getItem(key);
  if (rawValue == null) return fallback;
  try {
    return JSON.parse(rawValue) as TValue;
  } catch {
    return rawValue as TValue;
  }
}
let heartbeatAutomationsEnabled = false;
export function setHeartbeatAutomationsEnabled(enabled: boolean): void {
  heartbeatAutomationsEnabled = enabled;
}

// --- automations-page Bc0ZtIBr final residue (open boundary) ---
type ThreadSnapshotRecord = Record<string, unknown>;

const threadSnapshotRegistry = new Map<string, ThreadSnapshotRecord>();

function threadSnapshotId(thread: ThreadSnapshotRecord): string | null {
  const id = thread.id ?? thread.threadId ?? thread.conversationId;
  return typeof id === "string" && id.trim().length > 0 ? id : null;
}

export function addForkedFromConversationSyntheticItem(
  store: {
    updateConversationState?(
      conversationId: string,
      updater: (draft: Record<string, unknown>) => void,
    ): void;
  },
  conversationId: string,
  sourceConversationId: string,
  sourceConversationTitle?: string | null,
): void {
  const itemId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `forked:${Date.now()}`;
  const item = {
    id: itemId,
    type: "forkedFromConversation",
    sourceConversationId,
    sourceConversationTitle: sourceConversationTitle ?? null,
  };
  store.updateConversationState?.(conversationId, (draft) => {
    const turns = Array.isArray(draft.turns) ? draft.turns : [];
    let latestTurn = turns.at(-1) as Record<string, unknown> | undefined;
    if (latestTurn == null) {
      latestTurn = { items: [] };
      turns.push(latestTurn);
      draft.turns = turns;
    }
    const items = Array.isArray(latestTurn.items) ? latestTurn.items : [];
    items.push(item);
    latestTurn.items = items;
  });
}

export function applyConversationStateSlice(
  draft: Record<string, unknown>,
  state: Record<string, unknown>,
  replaceTurns = false,
): void {
  for (const [key, value] of Object.entries(state)) {
    if (value === undefined) continue;
    if (key === "turns" && !replaceTurns) continue;
    draft[key] = value;
  }
}

export function buildConversationStateFromThread(
  rollbackResponse: { thread?: ThreadSnapshotRecord; turns?: unknown[] },
  options: {
    fallbackCwd?: string | null;
    model?: string;
    reasoningEffort?: string | null;
    workspaceRoots?: string[];
  } = {},
): Record<string, unknown> {
  const thread = rollbackResponse.thread ?? {};
  const threadTurns = Array.isArray((thread as { turns?: unknown[] }).turns)
    ? (thread as { turns?: unknown[] }).turns
    : rollbackResponse.turns;
  return {
    cwd:
      typeof thread.cwd === "string" && thread.cwd.trim().length > 0
        ? thread.cwd
        : (options.fallbackCwd ?? null),
    gitInfo: thread.gitInfo,
    latestModel: options.model,
    latestReasoningEffort: options.reasoningEffort,
    modelProvider: thread.modelProvider,
    parentThreadId: thread.parentThreadId,
    source: thread.source,
    threadRuntimeStatus: thread.status,
    turns: Array.isArray(threadTurns) ? threadTurns : [],
    workspaceRoots: options.workspaceRoots ?? [],
  };
}
export {
  bundledMarketplaceName,
  curatedMarketplaceName,
  curatedRemoteMarketplaceName,
  firstPartyBundledAppNameA,
  firstPartyBundledAppNameB,
  firstPartyBundledAppNameC,
  firstPartyBundledAppNameD,
  firstPartyBundledAppNameE,
  firstPartyBundledAppNameF,
  firstPartyBundledAppNameG,
  resolveCatalogAppIdForMcpTool,
} from "../plugins/plugin-capability-runtime";
export function getConversationDisplayTitle(conversation: unknown): string {
  if (conversation == null || typeof conversation !== "object") return "";
  const record = conversation as Record<string, unknown>;
  const title =
    record.title ??
    record.name ??
    record.preview ??
    record.cwd ??
    record.id ??
    record.conversationId;
  return typeof title === "string" ? title.trim() : "";
}

export function registerThreadSnapshot(thread: ThreadSnapshotRecord): void {
  const id = threadSnapshotId(thread);
  if (id != null) threadSnapshotRegistry.set(id, thread);
}

// --- homepage deps: HomeComposer internals + new-module cross-chunk deps (open boundary) ---
export const dispatchLocalRuntimeCommand = sendAppServerRequestRuntime;
export const resolvedHostIdQuery = createParametricAtom<
  string | null | undefined,
  string
>(appRootScope, (conversationId, { get }) => {
  const routeHostId = get<string | null>(defaultHostIdSignalRuntime) ?? null;
  if (conversationId == null) return routeHostId ?? "local";
  return (
    get<string | null>(conversationHostIdSignalRuntime, conversationId) ??
    routeHostId ??
    "local"
  );
});
export const useCancelCloudTaskMutation = useCancelTaskMutationRuntime;
export const useMcpManager = useAppServerManagerRuntime;

// --- composer subsystem internals (djo67r4n drain, next layer) (open boundary) ---
export { hasActiveMentionMenu } from "../composer/mention-autocomplete";
export {
  registerComposerEnterKeymap,
  registerComposerEscapeHandler,
  registerComposerKeymap,
} from "../composer/composer-keymap-runtime";
type SharedComposerPrefill = {
  clearText?: boolean;
  commentAttachments?: unknown[] | null;
  cwd?: string | null;
  text?: unknown;
};

const sharedComposerPrefillSignal = createScopedAtom<
  SharedComposerPrefill | null
>(appRootScope, null);

function readSharedComposerPrefillStorage(
  key: string,
): SharedComposerPrefill | null {
  if (typeof window === "undefined") return null;
  try {
    const rawValue = window.localStorage.getItem(key);
    if (rawValue == null) return null;
    const parsed = JSON.parse(rawValue);
    return parsed != null && typeof parsed === "object"
      ? (parsed as SharedComposerPrefill)
      : null;
  } catch {
    return null;
  }
}

export function useSharedComposerPrefill(
  key: string,
): [
  SharedComposerPrefill | null,
  (nextValue?: SharedComposerPrefill | null) => void,
] {
  const store = readAppScopeStore();
  const scopedPrefill =
    useAppScopeValue<SharedComposerPrefill | null>(
      sharedComposerPrefillSignal,
      key,
    ) ?? readSharedComposerPrefillStorage(key);
  const setPrefill = React.useCallback(
    (nextValue?: SharedComposerPrefill | null) => {
      store.set(sharedComposerPrefillSignal, key, nextValue ?? null);
      if (typeof window !== "undefined") {
        try {
          if (nextValue == null) window.localStorage.removeItem(key);
          else window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch {
          // Ignore storage failures; scoped state is still updated.
        }
      }
    },
    [key, store],
  );
  return [scopedPrefill, setPrefill];
}

export function useWindowsSandboxSetup(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const setupContext = useWindowsSandboxSetupContextRuntime();
  const [isDismissed, setDismissed] = React.useState(false);
  const showBanner = setupContext.shouldShow && !isDismissed;
  const setShowBanner = React.useCallback<
    React.Dispatch<React.SetStateAction<boolean>>
  >(
    (nextValue) => {
      const resolved =
        typeof nextValue === "function"
          ? nextValue(setupContext.shouldShow && !isDismissed)
          : nextValue;
      setDismissed(!resolved);
    },
    [isDismissed, setupContext.shouldShow],
  );
  return [showBanner, setShowBanner];
}

// --- djo67r4n composer body wave-1 internals (open boundary) ---
