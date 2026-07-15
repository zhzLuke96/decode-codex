// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Connected wrapper that renders the inner browser webview host for a sidebar tab,
// computing visibility and feature-flag props from panel/route atoms and gates.

import {
  useStore,
  useAtomValue,
  routeAtom,
  useFeatureGate,
  usePrefersReducedMotion,
  getSidePanelTabControllerForTarget,
  reviewExpandedAtom,
  bottomPanelOpenAtom,
  rightPanelOpenAtom,
  browserFloatingComposerVisibleAtom,
  toggleBrowserFloatingComposer,
  BrowserWebviewHost,
} from "../boundaries/onboarding-commons-externals.facade";

type SidePanelTarget = "right" | "bottom";

interface BrowserActiveTab {
  tabId?: string;
}

export interface BrowserSidebarTabContentProps {
  browserTabId: string;
  browserConversationId: string;
  browserHostDisplayName: string;
  cwd: string;
  target?: SidePanelTarget;
}

export function BrowserSidebarTabContent({
  browserTabId,
  browserConversationId,
  browserHostDisplayName,
  cwd,
  target = "right",
}: BrowserSidebarTabContentProps) {
  const store = useStore(routeAtom);
  const tabController = getSidePanelTabControllerForTarget(target);
  const activeTab = useAtomValue<BrowserActiveTab | null>(
    tabController.activeTab$,
  );
  const isPanelOpen = useAtomValue<boolean>(
    target === "bottom" ? bottomPanelOpenAtom : rightPanelOpenAtom,
  );
  const isReviewExpanded = useAtomValue<boolean>(reviewExpandedAtom);
  const isDeviceToolbarMenuItemVisible = useFeatureGate("489124297");
  const isTweaksGateEnabled = useFeatureGate("2327881676");
  const prefersReducedMotion = usePrefersReducedMotion();
  const isFloatingComposerVisible = useAtomValue<boolean>(
    browserFloatingComposerVisibleAtom,
  );

  const isCodexBrowserRoute = store.value.routeKind !== "chatgpt-thread";
  const isVisible = isPanelOpen && activeTab?.tabId === browserTabId;
  const isFloatingComposerToggleVisible =
    target === "right" && isVisible && isReviewExpanded;
  const showFloatingComposer = target === "right" && isFloatingComposerVisible;
  const isTweaksEnabled = isCodexBrowserRoute && isTweaksGateEnabled;

  const handleToggleFloatingComposer = () => {
    toggleBrowserFloatingComposer(store, { prefersReducedMotion });
  };

  return (
    <div className="relative h-full min-h-0">
      <BrowserWebviewHost
        key={browserTabId}
        autoFocusOnOpen
        browserTabId={browserTabId}
        conversationId={browserConversationId}
        cwd={cwd}
        hostDisplayName={browserHostDisplayName}
        isAnnotationModeEnabled={isCodexBrowserRoute}
        isDeviceToolbarEnabled={isCodexBrowserRoute}
        isDeviceToolbarMenuItemVisible={isDeviceToolbarMenuItemVisible}
        isScreenshotCaptureEnabled={isCodexBrowserRoute}
        isFloatingComposerToggleVisible={isFloatingComposerToggleVisible}
        isFloatingComposerVisible={showFloatingComposer}
        isTweaksEnabled={isTweaksEnabled}
        isVisible={isVisible}
        panelTarget={target}
        onToggleFloatingComposer={handleToggleFloatingComposer}
      />
    </div>
  );
}
