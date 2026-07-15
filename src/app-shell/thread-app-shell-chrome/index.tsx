// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Public thread app-shell chrome entry: panel toggles, outlets, and tab launchers.
import { OpenPrimaryTargetButton } from "./open-primary-target";
import { ThreadBottomPanelChrome } from "./bottom-panel-chrome";
import {
  LocalThreadRightPanelChrome,
  RemoteThreadRightPanelChrome,
} from "./right-panel-chrome";
import type { ThreadAppShellChromeProps } from "./types";

export function initThreadAppShellLocalConversationDependency() {}

export function initThreadAppShellChromeChunk() {
  initThreadAppShellLocalConversationDependency();
}

export function ThreadAppShellChrome({
  activeBottomTabId,
  activeRightTabId,
  bottomPanelLauncherVisible,
  bottomPanelOpen,
  bottomTabs,
  browserConversationId,
  canOpenBrowser = true,
  canOpenFiles = true,
  canOpenReview,
  canOpenSideChat = true,
  canOpenTerminal = true,
  canOpenTimeline = false,
  className,
  conversationId,
  hasOutputArtifacts,
  hostDisplayName,
  labels,
  mcpActions,
  onCloseBottomPanel,
  onOpenArtifact,
  onOpenBrowserTab,
  onOpenFilePanel,
  onOpenMcpAction,
  onOpenReviewTab,
  onOpenSideChat,
  onOpenTarget,
  onOpenTerminal,
  onOpenTimeline,
  onSyncBrowserTabTitle,
  onToggleBottomPanel,
  onToggleBottomPanelLauncher,
  onToggleSidePanel,
  openTargets,
  outputArtifacts,
  panelsReady = true,
  preferredOpenTargetId,
  renderBottomPanelOutlet,
  renderRightPanelOutlet,
  rightPanelOpen,
  rightTabs,
  showReviewTab = false,
  threadType,
  workspaceRoot,
}: ThreadAppShellChromeProps) {
  const actionIdPrefix = `thread-${threadType}`;
  const canShowReview =
    panelsReady && (threadType === "remote" ? showReviewTab : canOpenReview);
  const newTabOptions = {
    canOpenBrowser: panelsReady && canOpenBrowser,
    canOpenFiles: panelsReady && canOpenFiles && workspaceRoot != null,
    canOpenReview: canShowReview,
    canOpenSideChat: panelsReady && canOpenSideChat,
    canOpenTerminal: panelsReady && canOpenTerminal,
    canOpenTimeline: panelsReady && canOpenTimeline,
    hasOutputArtifacts,
    mcpActions,
    onOpenArtifact,
    onOpenBrowserTab,
    onOpenFilePanel,
    onOpenMcpAction,
    onOpenReviewTab,
    onOpenSideChat,
    onOpenTerminal,
    onOpenTimeline,
    outputArtifacts,
  };

  return (
    <div
      className={className}
      data-conversation-id={conversationId ?? undefined}
      data-thread-app-shell-chrome=""
      data-thread-type={threadType}
    >
      {threadType === "local" ? (
        <LocalProjectHeaderAction
          hostDisplayName={hostDisplayName}
          onOpenTarget={onOpenTarget}
          openTargets={openTargets}
          preferredOpenTargetId={preferredOpenTargetId}
          workspaceRoot={workspaceRoot}
        />
      ) : null}
      <ThreadBottomPanelChrome
        {...newTabOptions}
        actionIdPrefix={actionIdPrefix}
        activeBottomTabId={activeBottomTabId}
        bottomPanelLauncherVisible={bottomPanelLauncherVisible}
        bottomPanelOpen={bottomPanelOpen}
        bottomTabs={bottomTabs}
        labels={{
          close: labels?.bottomPanelClose,
          openTab: labels?.bottomPanelOpenTab,
          toggle: labels?.bottomPanelToggle,
        }}
        onCloseBottomPanel={onCloseBottomPanel}
        onToggleBottomPanel={onToggleBottomPanel}
        onToggleBottomPanelLauncher={onToggleBottomPanelLauncher}
        renderBottomPanelOutlet={renderBottomPanelOutlet}
      />
      {threadType === "remote" ? (
        <RemoteThreadRightPanelChrome
          activeRightTabId={activeRightTabId}
          browserConversationId={browserConversationId}
          labels={{
            toggle: labels?.sidePanelToggle,
          }}
          onSyncBrowserTabTitle={onSyncBrowserTabTitle}
          onToggleSidePanel={onToggleSidePanel}
          renderRightPanelOutlet={renderRightPanelOutlet}
          rightPanelOpen={rightPanelOpen}
          rightTabs={rightTabs}
          toggleDisabled={!showReviewTab}
        />
      ) : (
        <LocalThreadRightPanelChrome
          {...newTabOptions}
          activeRightTabId={activeRightTabId}
          browserConversationId={browserConversationId}
          labels={{
            openTab: labels?.sidePanelOpenTab,
            toggle: labels?.sidePanelToggle,
          }}
          onSyncBrowserTabTitle={onSyncBrowserTabTitle}
          onToggleSidePanel={onToggleSidePanel}
          renderRightPanelOutlet={renderRightPanelOutlet}
          rightPanelOpen={rightPanelOpen}
          rightTabs={rightTabs}
        />
      )}
    </div>
  );
}

interface LocalProjectHeaderActionProps {
  hostDisplayName?: string | null;
  onOpenTarget?: ThreadAppShellChromeProps["onOpenTarget"];
  openTargets?: ThreadAppShellChromeProps["openTargets"];
  preferredOpenTargetId?: string | null;
  workspaceRoot?: string | null;
}

function LocalProjectHeaderAction({
  hostDisplayName,
  onOpenTarget,
  openTargets,
  preferredOpenTargetId,
  workspaceRoot,
}: LocalProjectHeaderActionProps) {
  return (
    <div
      className="flex justify-end"
      data-action-id="thread-local-project-actions"
    >
      <OpenPrimaryTargetButton
        cwd={workspaceRoot}
        hostDisplayName={hostDisplayName}
        onOpenTarget={onOpenTarget}
        openTargets={openTargets}
        preferredOpenTargetId={preferredOpenTargetId}
      />
    </div>
  );
}

export default ThreadAppShellChrome;
export type {
  BrowserTabTitleUpdate,
  HeaderPanelToggleButtonProps,
  IconProps,
  OpenTarget,
  OpenTargetRequest,
  OutputArtifact,
  PanelTab,
  PanelTarget,
  ThreadAppShellChromeProps,
  ThreadPanelAction,
  ThreadPanelNewTabModel,
  ThreadPanelOutletRenderProps,
  ThreadType,
} from "./types";
export { BrowserTabTitleSynchronizer } from "./browser-tab-title-synchronizer";
export {
  scrollBottomPanelIntoView,
  ThreadBottomPanelChrome,
} from "./bottom-panel-chrome";
export { HeaderPanelToggleButton } from "./header-panel-toggle-button";
export { PanelTabList } from "./panel-tab-list";
export {
  LocalThreadRightPanelChrome,
  RemoteThreadRightPanelChrome,
} from "./right-panel-chrome";
export { ThreadPanelOpenTabDropdown } from "./thread-panel-open-tab-dropdown";
export {
  buildThreadPanelNewTabModel,
  ThreadPanelNewTabMenuContent,
} from "./new-tab-model";
export {
  RightPanelEmptyState,
  ThreadPanelEmptyStateBody,
} from "./new-tab-empty-state";
export {
  formatWebsiteArtifactTarget,
  getArtifactDisplayTitle,
  getArtifactStableKey,
  getArtifactTooltipTitle,
  ThreadPanelArtifactIcon,
} from "./artifacts";
