// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Top-level current settings page container.
import * as React from "react";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
} from "../../vendor/react-router";
import { SettingsContentNavigationTargetProvider } from "../../runtime/current-app-initial/settings-section-layout-runtime";
import { SettingsHostDropdown } from "../settings-host-dropdown";
import { SettingsNavigationSidebar } from "./settings-navigation-sidebar";
import { useSettingsPageNavigation } from "./settings-page-navigation";
import { SettingsRouteOutlet } from "./settings-route-outlet";
import { useSettingsSearchTargets } from "./settings-search-targets";
import {
  AppHeaderUpdateButton,
  buildClassName,
  ElectronOnlyShell,
  FilterIcon,
  getHostConfig,
  LOCAL_HOST_ID,
  requestProfileImagePicker,
  serializePanelState,
  settingsPanelStateSignal,
  settingsRefreshQueryKey,
  settingsReturnRouteSignal,
  settingsRouteScopeKey,
  settingsSectionMetadata,
  settingsSplitLeftPanelVisibleSignal,
  SettingsSplitView,
  useAppScopeValue,
  useIntl,
  useRegisterToggleSidebarCommand,
  useRouteScopeStore,
  useSettingsHostSelection,
  useSettingsPanelStateRef,
} from "./runtime";
import type { SettingsSectionSlug } from "./types";

type NavigateFunction = ReturnType<typeof useNavigate>;
type SettingsReturnRoute = Parameters<NavigateFunction>[0] | null;

export function SettingsPage() {
  const routeScopeStore = useRouteScopeStore(settingsRouteScopeKey);
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const requestedSectionSlug = parseSettingsSectionSlug(
    useMatch("/settings/:section/*")?.params.section,
  );
  const {
    connectedRemoteConnections,
    remoteConnectionHostIds,
    selectedHostId,
    setSelectedHostId,
  } = useSettingsHostSelection();
  const selectedHostIsLocal = getHostConfig(selectedHostId).kind === "local";
  const selectedHostIdForQueries = selectedHostId ?? (LOCAL_HOST_ID as string);
  const {
    activeSettingsSection,
    shouldRedirectToVisibleSettingsSection,
    shouldRenderRouteContent,
    visibleSettingsSections,
  } = useSettingsPageNavigation(
    requestedSectionSlug,
    selectedHostIsLocal,
    selectedHostIdForQueries,
  );
  const isSplitViewEnabled = SettingsSplitView();
  const settingsReturnRoute = useAppScopeValue<SettingsReturnRoute>(
    settingsReturnRouteSignal,
  );
  const shouldRenderSplitLeftPanel = useAppScopeValue<boolean>(
    settingsSplitLeftPanelVisibleSignal,
  );
  const settingsSearchTargets = useSettingsSearchTargets({ selectedHostId });

  const handleBack = React.useCallback(() => {
    navigateToSettingsReturnRoute(navigate, settingsReturnRoute);
  }, [navigate, settingsReturnRoute]);

  const hostSelector = buildHostSelector({
    connectedRemoteConnections,
    intl,
    remoteConnectionHostIds,
    selectedHostId,
    setSelectedHostId,
  });
  const handleClearHostFilter = selectedHostIsLocal
    ? undefined
    : () => {
        setSelectedHostId(LOCAL_HOST_ID as string);
      };

  const appHeaderUpdateSlot = (
    <ElectronOnlyShell electron={true}>
      <div className="[container-type:inline-size] flex h-token-nav-row shrink-0 items-center justify-end px-row-x empty:hidden">
        <AppHeaderUpdateButton />
      </div>
    </ElectronOnlyShell>
  );

  const routeContent = (
    <SettingsRouteOutlet
      selectedHostId={selectedHostId}
      shouldRenderRouteContent={shouldRenderRouteContent}
    />
  );

  const handleSelectSection = React.useCallback(
    (sectionSlug: SettingsSectionSlug) => {
      if (sectionSlug === "profile") {
        requestProfileImagePicker(routeScopeStore);
      }

      navigate(`/settings/${sectionSlug}`, {
        replace: true,
        state: location.state,
      });
    },
    [location.state, navigate, routeScopeStore],
  );

  const handlePanelStateChange = React.useCallback(
    (_event: unknown, panelState: unknown) => {
      routeScopeStore.set(
        settingsPanelStateSignal,
        serializePanelState(panelState),
      );
    },
    [routeScopeStore],
  );
  const panelStateRef = useSettingsPanelStateRef(handlePanelStateChange);
  const handleContentPanelRef = React.useCallback(
    (contentPanelElement: HTMLDivElement | null) => {
      panelStateRef(contentPanelElement);
      if (contentPanelElement == null) {
        routeScopeStore.set(settingsPanelStateSignal, null);
      }
    },
    [panelStateRef, routeScopeStore],
  );

  useRegisterToggleSidebarCommand();

  React.useEffect(() => {
    routeScopeStore.query
      .invalidate(settingsRefreshQueryKey, {
        exact: true,
      })
      .catch(ignoreInvalidateError);
  }, [routeScopeStore]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        !event.defaultPrevented &&
        !isSettingsEscapeSuppressed(event.target)
      ) {
        navigateToSettingsReturnRoute(navigate, settingsReturnRoute);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [navigate, settingsReturnRoute]);

  if (shouldRedirectToVisibleSettingsSection) {
    return (
      <Navigate to={`/settings/${activeSettingsSection}`} replace={true} />
    );
  }

  if (isSplitViewEnabled) {
    return (
      <SettingsSplitView.Root>
        {shouldRenderSplitLeftPanel ? (
          <SettingsSplitView.LeftPanel>
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <SettingsNavigationSidebar
                canCollapse={false}
                className="pt-2"
                settingsSections={visibleSettingsSections}
                activeSection={activeSettingsSection}
                onClearHostFilter={handleClearHostFilter}
                searchTargets={settingsSearchTargets}
                sidebarHostSelector={hostSelector}
                onSelect={handleSelectSection}
                onBack={handleBack}
                groupSettingsSections={true}
              />
              {appHeaderUpdateSlot}
            </div>
          </SettingsSplitView.LeftPanel>
        ) : null}
        <div className="h-full min-w-0 overflow-visible">
          {renderSettingsContentNavigationTarget({
            children: routeContent,
            locationHash: location.hash,
            navigationKey: location.key,
          })}
        </div>
      </SettingsSplitView.Root>
    );
  }

  const zoomAdjustedShellStyle = {
    width: "calc(100vw / var(--codex-window-zoom))",
    height: "calc(100vh / var(--codex-window-zoom))",
    zoom: "var(--codex-window-zoom)",
  } satisfies React.CSSProperties & { zoom: string };

  const sidebarClassName = buildClassName(
    "app-shell-left-panel relative flex min-h-0 shrink-0 flex-col overflow-hidden",
    "w-token-sidebar",
  );

  return (
    <div className="flex h-full min-h-0" style={zoomAdjustedShellStyle}>
      <div className={sidebarClassName}>
        <div className="draggable h-toolbar w-full shrink-0" />
        <SettingsNavigationSidebar
          canCollapse={false}
          settingsSections={visibleSettingsSections}
          activeSection={activeSettingsSection}
          onClearHostFilter={handleClearHostFilter}
          searchTargets={settingsSearchTargets}
          sidebarHostSelector={hostSelector}
          onSelect={handleSelectSection}
          onBack={handleBack}
          groupSettingsSections={true}
        />
        {appHeaderUpdateSlot}
      </div>
      <div
        ref={handleContentPanelRef}
        className="relative isolate min-w-0 flex-1 overflow-visible"
      >
        {renderSettingsContentNavigationTarget({
          children: routeContent,
          locationHash: location.hash,
          navigationKey: location.key,
        })}
      </div>
    </div>
  );
}

function buildHostSelector({
  connectedRemoteConnections,
  intl,
  remoteConnectionHostIds,
  selectedHostId,
  setSelectedHostId,
}: {
  connectedRemoteConnections?:
    | readonly {
        displayName: React.ReactNode;
        hostId: string;
      }[]
    | null;
  intl: ReturnType<typeof useIntl>;
  remoteConnectionHostIds?: readonly string[] | null;
  selectedHostId: string | null;
  setSelectedHostId: (hostId: string) => void;
}) {
  if (
    connectedRemoteConnections == null ||
    connectedRemoteConnections.length === 0 ||
    remoteConnectionHostIds == null
  ) {
    return null;
  }

  return (
    <SettingsHostDropdown
      align="start"
      connectedRemoteConnections={[...connectedRemoteConnections]}
      contentWidth="sidebar"
      localIcon={FilterIcon}
      localLabel={intl.formatMessage({
        id: "settings.hostDropdown.allSettings",
        defaultMessage: "All settings",
        description:
          "Label for showing all settings in the settings sidebar host filter",
      })}
      onSelectHost={setSelectedHostId}
      remoteConnectionHostIds={[...remoteConnectionHostIds]}
      selectedHostId={selectedHostId}
      showConnectedIndicator={true}
      triggerClassName="h-7 w-auto max-w-full shrink-0 px-2"
      triggerColor="ghost"
      useRemoteHostColors={false}
    />
  );
}

function renderSettingsContentNavigationTarget({
  children,
  locationHash,
  navigationKey,
}: {
  children: React.ReactNode;
  locationHash: string;
  navigationKey: string;
}) {
  return (
    <SettingsContentNavigationTargetProvider
      navigationKey={navigationKey}
      targetId={locationHash.slice(1) || null}
    >
      {children}
    </SettingsContentNavigationTargetProvider>
  );
}

function parseSettingsSectionSlug(
  sectionParam: string | undefined,
): SettingsSectionSlug | null {
  if (sectionParam == null) return null;
  return settingsSectionMetadata.ids.includes(
    sectionParam as SettingsSectionSlug,
  )
    ? (sectionParam as SettingsSectionSlug)
    : null;
}

function navigateToSettingsReturnRoute(
  navigate: NavigateFunction,
  returnRoute: SettingsReturnRoute,
): void {
  if (returnRoute != null) {
    navigate(returnRoute);
    return;
  }

  navigate("/", {
    replace: true,
  });
}

function isSettingsEscapeSuppressed(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (isTextEditingTarget(target) ||
      target.closest('[role="dialog"][data-state="open"]') != null)
  );
}

function isTextEditingTarget(target: HTMLElement): boolean {
  const tagName = target.tagName.toLowerCase();
  return tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
    ? true
    : target.closest("[contenteditable='true']") != null;
}

function ignoreInvalidateError() {}
