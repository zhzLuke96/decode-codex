// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Electron/browser sidebar shell: the toolbar row, the primary nav links, the
// scrolling thread list, and the pinned footer (import status, usage alert,
// account menu). Publishes its measured footer height and scroll-header spacing
// as CSS custom properties consumed by the scroll fade mask.
import { useIntl } from "../vendor/react-intl";
import { useLocation } from "../conversations/local-conversation-route-runtime";
import { SidebarThreadList } from "./sidebar-thread-list";
import {
  appStoreScope,
  CodexWordmark,
  getResizeObserverBoxSize,
  hideCompletedImportStatusSignal,
  PlatformGate,
  SidebarAccountFooter,
  SidebarBrowserFooter,
  SidebarImportStatusBanner,
  sidebarSelectedWorkspaceRootAtom,
  SidebarPrimaryNavLinks,
  SidebarToolbarActions,
  SidebarUpsellCard,
  SidebarUsageAlert,
  SidebarWorkspaceHeader,
  sidebarWorkspaceRootAtom,
  useAppScope,
  useAtomValue,
  useDetailLevel,
  useFeatureGate,
  useHostEventListener,
  useIsSidebarOnboardingActive,
  useResizeObserver,
  useSignalValue,
  useStableCallback,
  useSyncSidebarRouteState,
} from "../boundaries/onboarding-commons-externals.facade";
import React, { type CSSProperties } from "react";

const PROJECTS_SIDEBAR_GATE = "3075919032";

export function SidebarToolbarRow() {
  return (
    <div className="flex h-toolbar shrink-0 items-center justify-between px-panel">
      <CodexWordmark className="h-3.5 w-auto text-token-foreground" />
      <SidebarToolbarActions />
    </div>
  );
}

export interface SidebarFooterProps {
  desktopNavItemsEnabled?: boolean;
}

export function SidebarFooter({
  desktopNavItemsEnabled = true,
}: SidebarFooterProps) {
  const store = useAppScope(appStoreScope);
  const activeWorkspaceRoot = useAtomValue(sidebarWorkspaceRootAtom);
  const [footerHeight, setFooterHeight] = React.useState(0);
  const intl = useIntl();
  const location = useLocation();
  const isProjectsSidebarEnabled = useFeatureGate(PROJECTS_SIDEBAR_GATE);
  const isSidebarOnboardingActive = useIsSidebarOnboardingActive();

  const measureFooterRef = useResizeObserver((entry: ResizeObserverEntry) => {
    setFooterHeight(getResizeObserverBoxSize(entry).height);
  });
  const handleWorkspaceRootAdded = useStableCallback((root: string) => {
    store.set(sidebarSelectedWorkspaceRootAtom, root);
  });

  const footerStyle = {
    "--sidebar-footer-height": `${footerHeight}px`,
    "--sidebar-scroll-header-spacing":
      desktopNavItemsEnabled &&
      !isSidebarOnboardingActive &&
      isProjectsSidebarEnabled
        ? "calc(var(--spacing) * 0.5)"
        : "calc(var(--spacing) * 2)",
  } as CSSProperties;

  useDetailLevel();
  const hideCompletedImportStatus = useSignalValue(
    hideCompletedImportStatusSignal,
  );
  useSyncSidebarRouteState(location, activeWorkspaceRoot);

  useHostEventListener(
    "workspace-root-option-added",
    (event: { root: string }) => {
      handleWorkspaceRootAdded(event.root);
    },
    [handleWorkspaceRootAdded],
  );

  const topContent = (
    <div className="flex shrink-0 flex-col gap-2">
      <SidebarWorkspaceHeader
        desktopNavItemsEnabled={desktopNavItemsEnabled}
        sidebarMode="codex"
      />
    </div>
  );

  return (
    <div
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden [--height-token-mode-switch:32px] [--height-token-nav-row:30px] [--padding-row-cell-x:8px] [--padding-row-x:10px] [--radius-token-row:10px]"
      style={footerStyle}
    >
      <PlatformGate browser>
        <SidebarToolbarRow />
      </PlatformGate>
      <nav
        className="sidebar-foreground-muted flex min-h-0 flex-1 flex-col"
        role="navigation"
        aria-label={intl.formatMessage({
          id: "sidebarElectron.taskNavigation",
          defaultMessage: "Scheduled task folders",
          description: "Navigation landmark label for grouped scheduled tasks",
        })}
      >
        <div className="relative z-10 shrink-0 px-row-x pb-(--sidebar-scroll-header-spacing)">
          <SidebarPrimaryNavLinks sidebarMode="codex" />
        </div>
        <SidebarThreadList sidebarMode="codex" topContent={topContent} />
      </nav>
      <div ref={measureFooterRef} className="absolute inset-x-0 bottom-0 z-20">
        <PlatformGate electron>
          <div className="relative px-row-x">
            <SidebarImportStatusBanner
              hideCompletedImportStatus={hideCompletedImportStatus}
            />
            <SidebarUsageAlert className="mb-2" />
            {hideCompletedImportStatus ? (
              <SidebarUpsellCard className="mb-2" />
            ) : null}
          </div>
          <SidebarAccountFooter />
        </PlatformGate>
        <PlatformGate browser>
          <SidebarBrowserFooter />
        </PlatformGate>
      </div>
    </div>
  );
}
