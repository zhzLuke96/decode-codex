// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// In-app browser sidebar host: owns the toolbar (back/forward, address bar,
// security indicator, screenshot/annotate/downloads/menu actions), the device
// emulation toolbar, the zoom controller, and the managed webview / cursor
// overlay, dispatching browser-sidebar commands to the host process.
import { useRef, useState } from "react";
import * as React from "react";
import { flushSync } from "react-dom";
import { useIntl } from "../vendor/react-intl";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";
import { classNames } from "../utils/class-names";
import { vscodeApiF } from "../boundaries/vscode-api";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { BackForwardNavigationButtons } from "../ui/back-forward-navigation-buttons";
import { BrowserSidebarMenu } from "../ui/browser-sidebar-menu";
import { StopIcon } from "../icons/stop-icon";
import { RefreshIcon } from "../icons/refresh-icon";
import { ChevronIcon } from "../icons/chevron-icon";
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { browserSidebarMode } from "./browser-sidebar-state";
import { browserSidebarManager } from "./sidebar-manager";
import { BrowserAnnotateButton } from "./browser-annotate-button";
import { BrowserSidebarWebview } from "./sidebar-webview";
import { BrowserSidebarView } from "./browser-sidebar-view";
import {
  getDefaultBrowserTabSnapshot,
  resolveAnnotationEntrySource,
  type BrowserSidebarProps,
} from "./browser-sidebar-model";
import { useBrowserSidebarMessageEffects } from "./use-browser-sidebar-message-effects";
import { useBrowserSidebarAddressControls } from "./use-browser-sidebar-address-controls";
import { useBrowserSidebarSyncEffects } from "./use-browser-sidebar-sync-effects";
import { useBrowserSidebarToolbarActions } from "./use-browser-sidebar-toolbar-actions";
import {
  BrowserSidebarZoomController,
  type BrowserSidebarZoomCommandDispatcher,
} from "./browser-sidebar-zoom-controller";
import {
  ADDRESS_FADE_MASK_CLASS,
  FLOATING_COMPOSER_TOGGLE_HEIGHT,
  FOCUS_MODE,
  TOGGLE_ANNOTATION_MODE_ACCELERATOR,
  type BrowserSidebarBoundsRect,
  type FocusMode,
  createDefaultDesignHoldState,
  scaleBounds,
} from "./browser-sidebar-host-utils";
import {
  BrowserAddressInput,
  BrowserAddressSecurityIndicator,
  BrowserAnnotationTakeoverToolbar,
  BrowserCursorOverlay,
  BrowserDeviceToolbarOverlay,
  BrowserDownloadsButton,
  BrowserFloatingComposer,
  BrowserProfileImportNux,
  BrowserScreenshotButton,
  BrowserSidebarFallbackWebview,
  BrowserSidebarPlaceholder,
  ElectronExtensionGate,
  activeBrowserFindTargetAtom,
  activeBrowserTabIdQuery,
  activeSidePanelKindAtom,
  annotationAddModifierPressedAtom,
  appStoreScope,
  bottomPanelAnimationSignal,
  browserDeviceToolbarBackgroundColor,
  browserFindFocusRequestAtom,
  browserFindStateAtom,
  browserManagedQueryAtom,
  browserOwlPermissionsFlag,
  browserPrintEnabledFlag,
  browserProfileImportNuxSeenAtom,
  browserTabType,
  buildBrowserProfileImportQuery,
  computeBrowserDeviceToolbarLayout,
  computeEmulatedViewport,
  designModifierPressedAtom,
  featureFlagQuery,
  focusBrowserConversationScope,
  getAnnotationFlowConfig,
  getBrowserAdoptedWebContentsId,
  getBrowserAdoptionLease,
  getBrowserOpenReason,
  getBrowserOpenSource,
  getConversationScopeValue,
  getDefaultBrowserTabId,
  getPendingBrowserAddressOverride,
  hasPendingBrowserComments,
  hasQueuedDesignTweaks,
  importBrowserProfiles,
  isCommentForBrowserTab,
  isSidePanelVisibleAtom,
  multiBrowserTabsEnabledAtom,
  normalizeBrowserUrl,
  openChromiumInternalPage,
  persistedBrowserTabsGateId,
  resolveBrowserZoomPercent,
  rightPanelComposerReserveAtom,
  shouldShowBrowserProfileImportNux,
  submitBrowserAnnotationComments,
  toConversationId,
  toThemeVariant,
  useAsyncQueryValue,
  useBrowserSidebarComments,
  useFeatureGate,
  useFormattedAcceleratorLabel,
  useKeyboardAccelerator,
  useRightPanelLayout,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
  useThemePreference,
  useWindowZoom,
} from "../boundaries/onboarding-commons-externals.facade";

export function BrowserSidebar({
  autoFocusOnOpen = false,
  conversationId,
  browserTabId = getDefaultBrowserTabId(conversationId),
  cwd,
  isVisible,
  isAnnotationModeEnabled = true,
  isDeviceToolbarEnabled = true,
  isDeviceToolbarMenuItemVisible = true,
  isScreenshotCaptureEnabled = true,
  isFloatingComposerToggleVisible = false,
  isFloatingComposerVisible = true,
  isTweaksEnabled = true,
  onToggleFloatingComposer = () => undefined,
  panelTarget = "right",
}: BrowserSidebarProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const windowZoom = useWindowZoom();
  const themeVariant = toThemeVariant(useThemePreference());
  const effectiveLocale =
    Object.keys(intl.messages).length > 0 ? intl.locale : intl.defaultLocale;
  const stringMessages = Object.fromEntries(
    Object.entries(intl.messages).filter(
      (entry) => typeof entry[1] === "string",
    ),
  );
  const { comments, setComments } = useBrowserSidebarComments(
    getConversationScopeValue(store.value) ?? conversationId,
  );
  const prefersReducedMotion = useSystemPrefersReducedMotion();
  const { rightPanelLayoutTick } = useRightPanelLayout();
  const bottomPanelAnimation = useScopedValue(bottomPanelAnimationSignal);

  const rootElementRef = useRef<HTMLDivElement | null>(null);
  const viewportContainerRef = useRef<HTMLDivElement | null>(null);
  const webviewElementRef = useRef<HTMLElement | null>(null);
  const addressBarContainerRef = useRef<HTMLDivElement | null>(null);
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const committedAddressRef = useRef("");
  const dispatchZoomCommandRef =
    useRef<BrowserSidebarZoomCommandDispatcher | null>(null);
  const activeEditorDismissRef = useRef<(() => boolean) | null>(null);
  const suppressCommentSyncRef = useRef(false);
  const hasEditedAddressRef = useRef(false);
  const shouldKeepAddressSelectedRef = useRef(false);
  const isStoppingAddressEditingRef = useRef(false);
  const isChromeHoveredRef = useRef(false);
  const isVisibleRef = useRef(isVisible);
  const wasVisibleRef = useRef(false);
  const wasVisibleForUrlRef = useRef(false);
  const hasTrackedPanelOpenRef = useRef(false);
  const previousInteractionModeRef = useRef(browserSidebarMode.BROWSE);
  const previousTabIdentityRef = useRef({
    browserTabId,
    conversationId,
    url: "",
  });
  const previousAnnotationStateRef = useRef({
    browserTabId,
    conversationId,
    interactionMode: browserSidebarMode.BROWSE,
    isAnnotationSessionTakeoverActive: false,
    isVisible: false,
  });
  const lastBoundsRef = useRef<BrowserSidebarBoundsRect | null>(null);
  const pendingOpenInitiatorRef = useRef<string | null>(null);
  const pendingOpenSourceRef = useRef<string | null>(null);
  const originalViewEnabledRef = useRef(false);
  const annotationFlowKeyRef = useRef<string | null>(null);
  const takeoverActiveKeyRef = useRef<boolean | null>(null);

  const [panelBounds, setPanelBounds] =
    useState<BrowserSidebarBoundsRect | null>(null);
  const [viewportResizeScale, setViewportResizeScale] = useState<number | null>(
    null,
  );
  const [designHoldState, setDesignHoldState] = useState(() =>
    createDefaultDesignHoldState(conversationId),
  );
  const rightPanelComposerReserve = useScopedValue(
    rightPanelComposerReserveAtom,
  );
  const isDesignModifierPressed = useScopedValue(designModifierPressedAtom);
  const isAnnotationAddModifierActive = useScopedValue(
    annotationAddModifierPressedAtom,
  );
  const isBrowserManaged = useScopedQuery(browserManagedQueryAtom, {
    browserTabId,
    conversationId,
  });
  const isMultiBrowserTabsEnabled = useScopedValue(multiBrowserTabsEnabledAtom);
  const activeBrowserTabId = useScopedQuery(
    activeBrowserTabIdQuery,
    conversationId,
  );
  const persistedTabsEnabled = useFeatureGate(persistedBrowserTabsGateId);
  const openAiGoLinksQuery = useScopedQuery(featureFlagQuery, "openAiGoLinks");
  const printEnabledQuery = useScopedQuery(featureFlagQuery, "browserPrint");
  const owlPermissionsQuery = useScopedQuery(
    featureFlagQuery,
    browserOwlPermissionsFlag,
  );
  const isPrintEnabled = printEnabledQuery.data === true;
  const isOwlPermissionsEnabled = owlPermissionsQuery.data === true;
  const goLinksConfig = {
    openAIGoLinksEnabled: openAiGoLinksQuery.data === true,
  };

  const readSnapshot = () =>
    browserSidebarManager.getSnapshot(conversationId, browserTabId);
  const snapshot = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readSnapshot,
    readSnapshot,
  );
  const readHasRetainedWebview = () =>
    browserSidebarManager.hasRetainedWebview(conversationId, browserTabId);
  const hasRetainedWebview = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readHasRetainedWebview,
    readHasRetainedWebview,
  );
  const hasSnapshot = snapshot != null;
  const readCursorState = () =>
    browserSidebarManager.getBrowserUseCursorState(
      conversationId,
      browserTabId,
    );
  const browserUseCursorState = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readCursorState,
    readCursorState,
  );
  const readIsAgentControlling = () =>
    browserSidebarManager.isBrowserUseActive(conversationId, browserTabId);
  const isAgentControllingBrowser = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readIsAgentControlling,
    readIsAgentControlling,
  );
  const adoptionLease = getBrowserAdoptionLease(conversationId, browserTabId);
  const adoptedWebContentsId = getBrowserAdoptedWebContentsId(
    conversationId,
    browserTabId,
  );
  const isAdopting = adoptionLease != null && adoptedWebContentsId != null;

  const findState = useScopedValue(browserFindStateAtom);
  const findFocusRequest = useScopedValue(browserFindFocusRequestAtom);
  const activeFindTarget = useScopedValue(activeBrowserFindTargetAtom);
  const activeSidePanelKind = useScopedValue(activeSidePanelKindAtom);
  const isSidePanelVisible = useScopedValue(isSidePanelVisibleAtom);
  const isFindActiveForTab =
    isSidePanelVisible &&
    activeSidePanelKind === "browser" &&
    activeFindTarget?.conversationId === conversationId &&
    activeFindTarget.browserTabId === browserTabId;

  const [hasSettledOpen, setHasSettledOpen] = useState(false);
  const hasSeenProfileImportNux = useScopedValue(
    browserProfileImportNuxSeenAtom,
  );
  const isBrowserKnowledgeWorkerEnabled = useFeatureGate("1834314516");
  const downloadsService = isBrowserKnowledgeWorkerEnabled
    ? store.value?.downloads
    : undefined;
  const browserProfileImportService = store.value?.browserProfileImport;
  const profileImportQuery = useAsyncQueryValue(
    buildBrowserProfileImportQuery(
      browserProfileImportService,
      isVisible &&
        hasSettledOpen &&
        isBrowserKnowledgeWorkerEnabled &&
        browserProfileImportService != null &&
        hasSeenProfileImportNux === false,
    ),
  );
  const [isAnnotateHoverSuppressed, setIsAnnotateHoverSuppressed] =
    useState(false);
  const [
    pendingInteractionModeTransition,
    setPendingInteractionModeTransition,
  ] = useState<{ fromSnapshot: unknown; to: string } | null>(null);

  const tabSnapshot = snapshot ?? getDefaultBrowserTabSnapshot();
  const isWebTab = tabSnapshot.tabType === browserTabType.WEB;
  const hasBrowserPage = isWebTab && tabSnapshot.url.trim().length > 0;
  const designHoldStateForConversation =
    designHoldState.conversationId === conversationId
      ? designHoldState
      : createDefaultDesignHoldState(conversationId);
  const isCommentModeSiteBlocked =
    tabSnapshot.commentModeDisabledReason === "site-blocked";
  const effectiveInteractionMode =
    pendingInteractionModeTransition != null &&
    pendingInteractionModeTransition.fromSnapshot === tabSnapshot
      ? pendingInteractionModeTransition.to
      : tabSnapshot.interactionMode;
  const isCommentMode =
    isAnnotationModeEnabled &&
    effectiveInteractionMode === browserSidebarMode.COMMENT;
  const annotationFlowConfig = getAnnotationFlowConfig(
    tabSnapshot.annotationFlow,
  );
  const isPersistentCommentMode =
    isCommentMode && annotationFlowConfig.persistent;
  const isWebviewHostActive =
    (hasSnapshot && isWebTab) || isAdopting || isAgentControllingBrowser;
  const shouldPaintWebview =
    isWebviewHostActive && (hasBrowserPage || isAdopting);
  const hasQueuedTweaks = hasQueuedDesignTweaks(tabSnapshot.comments);
  const pendingAnnotationCount = comments.filter((comment) =>
    isCommentForBrowserTab(comment, browserTabId),
  ).length;
  const hasPendingAnnotations =
    snapshot != null &&
    (hasPendingBrowserComments(snapshot.comments) ||
      pendingAnnotationCount > 0);
  const annotationEditorMode = tabSnapshot.annotationEditorMode ?? "comment";
  const isTweaksEditorOpen = tabSnapshot.isTweaksEditorOpen === true;
  const isDesignEditorActive =
    annotationEditorMode === "design" || isTweaksEditorOpen;
  const isAnnotationSessionTakeoverActive =
    isCommentMode && isDesignEditorActive;
  const annotationEditorModeLabel = isDesignEditorActive ? "design" : "comment";
  const isAnnotationTakeoverVisible =
    isTweaksEnabled &&
    isPersistentCommentMode &&
    (isDesignEditorActive || hasPendingAnnotations);
  const profileImportNuxStrip = shouldShowBrowserProfileImportNux({
    baseGateEnabled: isBrowserKnowledgeWorkerEnabled,
    hasSeen: hasSeenProfileImportNux,
    hasSettledOpen,
    isVisible,
    profiles: profileImportQuery.data,
    profilesQuerySucceeded: profileImportQuery.isSuccess,
    serviceAvailable: browserProfileImportService != null,
  })
    ? {
        content: (
          <BrowserProfileImportNux
            profiles={profileImportQuery.data ?? []}
            onDismiss={() => {
              store.set(browserProfileImportNuxSeenAtom, true);
            }}
            onImport={() => {
              if (importBrowserProfiles(store, browserProfileImportService)) {
                store.set(browserProfileImportNuxSeenAtom, true);
              }
            }}
          />
        ),
        key: "browser-profile-import-nux",
        presentation: "strip" as const,
      }
    : null;

  const [addressValue, setAddressValue] = useState("");
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [shouldAnimateAddressExpansion, setShouldAnimateAddressExpansion] =
    useState(false);
  const [shouldFocusWebviewAfterLoad, setShouldFocusWebviewAfterLoad] =
    useState(false);
  const [pendingNavigationSnapshot, setPendingNavigationSnapshot] = useState<
    unknown | undefined
  >();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecurityPopoverOpen, setIsSecurityPopoverOpen] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
  const isChromeExpanded =
    isAddressEditing || isMenuOpen || isSecurityPopoverOpen;
  const currentUrl =
    normalizeBrowserUrl(tabSnapshot.url).length === 0 ? "" : tabSnapshot.url;

  const readDeviceToolbarTabState = () =>
    browserSidebarManager.getDeviceToolbarTabState(
      conversationId,
      browserTabId,
    );
  const deviceToolbarState = React.useSyncExternalStore(
    browserSidebarManager.subscribe,
    readDeviceToolbarTabState,
    readDeviceToolbarTabState,
  ).toolbarState;
  const pendingAddressOverride = getPendingBrowserAddressOverride(
    conversationId,
    browserTabId,
  );
  const initialUrl =
    isAdopting && pendingAddressOverride != null
      ? pendingAddressOverride
      : tabSnapshot.url.length === 0
        ? "about:blank"
        : tabSnapshot.url;
  const shouldBootstrapWhenHidden = isAgentControllingBrowser || isAdopting;
  const isAnnotationDisabled =
    !isAnnotationModeEnabled || !hasBrowserPage || isCommentModeSiteBlocked;
  const annotateShortcutLabel = useFormattedAcceleratorLabel(
    TOGGLE_ANNOTATION_MODE_ACCELERATOR,
  );
  isVisibleRef.current = isVisible;

  const deviceToolbar =
    isDeviceToolbarEnabled && deviceToolbarState.isEnabled && hasBrowserPage
      ? deviceToolbarState
      : { ...deviceToolbarState, isEnabled: false };
  const reservedComposerSpace =
    panelTarget === "right" ? rightPanelComposerReserve : 0;
  const reservedComposerSpaceWithToggle = isFloatingComposerToggleVisible
    ? Math.max(reservedComposerSpace, FLOATING_COMPOSER_TOGGLE_HEIGHT)
    : reservedComposerSpace;
  const adjustedPanelBounds =
    panelBounds == null ||
    deviceToolbar.isEnabled ||
    reservedComposerSpaceWithToggle === 0
      ? panelBounds
      : {
          ...panelBounds,
          height:
            panelBounds.height > 0
              ? Math.max(
                  1,
                  panelBounds.height - reservedComposerSpaceWithToggle,
                )
              : 0,
        };
  const deviceToolbarLayout = computeBrowserDeviceToolbarLayout(
    panelBounds,
    deviceToolbar,
  );
  const webviewBounds =
    deviceToolbarLayout?.webviewBounds ?? adjustedPanelBounds;
  const visualBounds = deviceToolbarLayout?.visualBounds ?? adjustedPanelBounds;
  const layoutScale = deviceToolbarLayout?.scale ?? 1;
  const scaledBounds = scaleBounds(visualBounds, windowZoom);
  const viewportScale = layoutScale * windowZoom;
  const isWebviewVisible =
    isWebviewHostActive && (scaledBounds != null || shouldBootstrapWhenHidden);
  const webviewKey = isWebviewVisible
    ? `${conversationId}\0${browserTabId}`
    : null;
  const effectiveViewportScale = viewportResizeScale ?? layoutScale;
  const currentZoomPercent = resolveBrowserZoomPercent(
    tabSnapshot.zoomPercent,
    effectiveViewportScale,
  );
  const deviceToolbarBackgroundColor = deviceToolbar.isEnabled
    ? browserDeviceToolbarBackgroundColor
    : undefined;
  const hostKind = panelTarget === "bottom" ? "bottom-panel" : "right-panel";
  const emulatedViewport =
    isVisible && deviceToolbar.isEnabled && deviceToolbarLayout != null
      ? computeEmulatedViewport({
          fitHeight: deviceToolbarLayout.fitHeight,
          height: deviceToolbar.height,
          width: deviceToolbar.width,
        })
      : null;
  lastBoundsRef.current = scaledBounds;

  const browserOpenSource = getBrowserOpenSource(conversationId, browserTabId);
  const browserOpenReason = getBrowserOpenReason(conversationId, browserTabId);
  const isOpenedByAgent =
    browserOpenSource === "browser_use" || browserOpenReason === "browser_use";
  const isManualOpen =
    (!isBrowserManaged && browserOpenSource == null) ||
    browserOpenSource === "manual" ||
    browserOpenReason === "side_panel_menu" ||
    browserOpenReason === "toggle_browser_command";

  const buildBrowserCommandPayload = ({
    command,
    targetBrowserTabId = browserTabId,
    targetConversationId = conversationId,
  }: {
    command: unknown;
    targetBrowserTabId?: string;
    targetConversationId?: string;
  }) => ({
    conversationId: targetConversationId,
    ...(targetBrowserTabId === getDefaultBrowserTabId(targetConversationId)
      ? {}
      : { browserTabId: targetBrowserTabId }),
    command,
  });
  const dispatchBrowserCommand = (command: unknown) => {
    vscodeApiF.dispatchMessage(
      "browser-sidebar-command",
      buildBrowserCommandPayload({ command }),
    );
  };
  const dispatchBrowserCommandEvent = React.useEffectEvent(
    dispatchBrowserCommand,
  );

  const {
    beginAddressEditing,
    cancelAddressEditing,
    ensureAddressEditing,
    focusBrowserAddressBar,
    openBrowserFindPanel,
    stopAddressEditing,
  } = useBrowserSidebarAddressControls({
    addressValue,
    activeFindTarget,
    activeEditorDismissRef,
    activeSidePanelKind,
    addressBarContainerRef,
    addressInputRef,
    annotationEditorModeLabel,
    annotationFlowKeyRef,
    autoFocusOnOpen,
    browserTabId,
    committedAddressRef,
    conversationId,
    currentUrl,
    buildBrowserCommandPayload,
    dispatchBrowserCommand,
    findFocusRequest,
    findState,
    hasBrowserPage,
    hasEditedAddressRef,
    hasPendingAnnotations,
    hasQueuedTweaks,
    hasSettledOpen,
    hasTrackedPanelOpenRef,
    isAddressEditing,
    isAnnotationSessionTakeoverActive,
    isAnnotationTakeoverVisible,
    isChromeHoveredRef,
    isFindActiveForTab,
    isManualOpen,
    isOpenedByAgent,
    isSecurityPopoverOpen,
    isSidePanelVisible,
    isStoppingAddressEditingRef,
    isVisible,
    isVisibleRef,
    isWebviewHostActive,
    panelTarget,
    pendingNavigationSnapshot,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    previousAnnotationStateRef,
    previousInteractionModeRef,
    previousTabIdentityRef,
    resolveAnnotationEntrySource,
    rootElementRef,
    setAddressValue,
    setIsAddressEditing,
    setIsAnnotateHoverSuppressed,
    setIsDownloadsOpen,
    setIsMenuOpen,
    setIsSecurityPopoverOpen,
    setPendingInteractionModeTransition,
    setPendingNavigationSnapshot,
    setShouldAnimateAddressExpansion,
    setShouldFocusWebviewAfterLoad,
    setViewportResizeScale,
    shouldFocusWebviewAfterLoad,
    shouldKeepAddressSelectedRef,
    snapshot,
    store,
    tabSnapshot,
    takeoverActiveKeyRef,
    viewportContainerRef,
    wasVisibleForUrlRef,
    wasVisibleRef,
    webviewElementRef,
  });

  const applyInteractionModeTransition = (
    mode: string,
    focusMode: FocusMode,
  ) => {
    const transition =
      mode === browserSidebarMode.COMMENT
        ? null
        : { fromSnapshot: tabSnapshot, to: mode };
    flushSync(() => {
      setPendingInteractionModeTransition(transition);
      setIsAnnotateHoverSuppressed(mode === "comment");
    });
    if (focusMode === FOCUS_MODE.FOCUS) {
      window.requestAnimationFrame(() => {
        webviewElementRef.current?.focus();
      });
    }
  };
  const changeInteractionMode = (
    mode: string,
    focusMode: FocusMode,
    entrySource?: string,
  ) => {
    if (!isAnnotationModeEnabled && mode === browserSidebarMode.COMMENT) return;
    applyInteractionModeTransition(mode, focusMode);
    dispatchBrowserCommand({
      type: "set-interaction-mode",
      interactionMode: mode,
      annotationModeEntrySource: entrySource,
    });
  };
  const previewInteractionMode = (mode: string, focusMode: FocusMode) => {
    if (!isAnnotationModeEnabled && mode === browserSidebarMode.COMMENT) return;
    applyInteractionModeTransition(mode, focusMode);
  };

  useKeyboardAccelerator({
    accelerator: TOGGLE_ANNOTATION_MODE_ACCELERATOR,
    enabled: isVisible && !isAnnotationDisabled,
    onKeyDown: (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      changeInteractionMode(
        isCommentMode ? browserSidebarMode.BROWSE : browserSidebarMode.COMMENT,
        isCommentMode ? FOCUS_MODE.NONE : FOCUS_MODE.FOCUS,
        isCommentMode ? undefined : "keyboard-shortcut",
      );
    },
  });
  useKeyboardAccelerator({
    accelerator: "Escape",
    enabled: isVisible,
    onKeyDown: (event: KeyboardEvent) => {
      if (isAddressEditing) return;
      const activeElement = document.activeElement;
      const isWithinRoot =
        activeElement instanceof HTMLElement &&
        rootElementRef.current?.contains(activeElement) === true;
      if (!(!isChromeHoveredRef.current && !isWithinRoot) && isCommentMode) {
        event.preventDefault();
        event.stopPropagation();
        addAnnotationsToComposer();
      }
    },
  });

  useBrowserSidebarSyncEffects({
    bottomPanelAnimation,
    browserTabId,
    conversationId,
    cwd,
    deviceToolbar,
    effectiveLocale,
    emulatedViewport,
    hasBrowserPage,
    hasSnapshot,
    hasTrackedPanelOpenRef,
    hostKind,
    intl,
    isAgentControllingBrowser,
    isAnnotationModeEnabled,
    isCommentMode,
    isDesignModifierPressed,
    isVisible,
    isWebviewHostActive,
    isWebviewHostActive,
    lastBoundsRef,
    panelTarget,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    persistedTabsEnabled,
    prefersReducedMotion,
    rightPanelLayoutTick,
    scaledBounds,
    setHasSettledOpen,
    setIsMenuOpen,
    setPanelBounds,
    store,
    stringMessages,
    tabSnapshot,
    themeVariant,
    viewportContainerRef,
    viewportScale,
    webviewElementRef,
    webviewKey,
    windowZoom,
    isChromeHoveredRef,
  });

  useBrowserSidebarMessageEffects({
    activeBrowserTabId,
    activeFindTarget,
    browserTabId,
    conversationId,
    dispatchBrowserCommand,
    dispatchBrowserCommandEvent,
    dispatchZoomCommandRef,
    focusBrowserAddressBar,
    hasBrowserPage,
    intl,
    isBrowserManaged,
    isCommentMode,
    isTweaksEnabled,
    isVisible,
    openBrowserFindPanel,
    originalViewEnabledRef,
    panelTarget,
    pendingAnnotationCount,
    pendingOpenInitiatorRef,
    pendingOpenSourceRef,
    previewInteractionMode,
    setComments,
    snapshot,
    store,
    suppressCommentSyncRef,
    viewportContainerRef,
    webviewElementRef,
    isChromeHoveredRef,
  });

  const {
    addAnnotationsToComposer,
    addressPlaceholder,
    backLabel,
    captureScreenshotLabel,
    certificateErrorSchemeParts,
    commentModeUnavailableLabel,
    commitAddress,
    confirmDiscardAnnotations,
    displayUrl,
    exitAnnotationTakeover,
    floatingComposerToggleLabel,
    forwardLabel,
    handleDeviceToolbarStateChange,
    handleOriginalViewKeyDown,
    handleOriginalViewKeyUp,
    handleOriginalViewPointerCancel,
    handleOriginalViewPointerDown,
    handleOriginalViewPointerUp,
    hasDisplayUrl,
    isFloatingComposerToggleAvailable,
    isOriginalViewEnabled,
    openExternalBrowserLabel,
    openInExternalBrowser,
    preventDefaultAndStop,
    releaseOriginalView,
    reloadLabel,
    reloadOrStop,
    reloadPage,
    rotateDeviceToolbar,
    setActiveEditorDismissHandler,
    stopLoadingLabel,
    toggleDeviceToolbar,
  } = useBrowserSidebarToolbarActions({
    activeEditorDismissRef,
    addressValue,
    browserTabId,
    conversationId,
    designHoldStateForConversation,
    deviceToolbar,
    dispatchBrowserCommand,
    goLinksConfig,
    hasBrowserPage,
    hasEditedAddressRef,
    hasQueuedTweaks,
    intl,
    isAddressEditing,
    isAnnotationSessionTakeoverActive,
    isFloatingComposerToggleVisible,
    isFloatingComposerVisible,
    isOwlPermissionsEnabled,
    isVisible,
    originalViewEnabledRef,
    panelBounds,
    setAddressValue,
    setDesignHoldState,
    setPendingNavigationSnapshot,
    setShouldFocusWebviewAfterLoad,
    shouldKeepAddressSelectedRef,
    snapshot,
    store,
    tabSnapshot,
  });

  return (
    <BrowserSidebarView
      context={{
        ADDRESS_FADE_MASK_CLASS,
        addAnnotationsToComposer,
        BackForwardNavigationButtons,
        BrowserAddressInput,
        BrowserAddressSecurityIndicator,
        BrowserAnnotationTakeoverToolbar,
        BrowserAnnotateButton,
        BrowserCursorOverlay,
        BrowserDeviceToolbarOverlay,
        BrowserDownloadsButton,
        BrowserFloatingComposer,
        BrowserScreenshotButton,
        BrowserSidebarFallbackWebview,
        BrowserSidebarMenu,
        BrowserSidebarPlaceholder,
        BrowserSidebarWebview,
        BrowserSidebarZoomController,
        Button,
        ChevronIcon,
        ElectronExtensionGate,
        ExternalLinkIcon,
        FLOATING_COMPOSER_TOGGLE_HEIGHT,
        FOCUS_MODE,
        RefreshIcon,
        StopIcon,
        Tooltip,
        addressBarContainerRef,
        addressInputRef,
        addressPlaceholder,
        addressValue,
        adoptedWebContentsId,
        adoptionLease,
        annotationFlowConfig,
        annotateShortcutLabel,
        backLabel,
        beginAddressEditing,
        bottomPanelAnimation,
        browserProfileImportService,
        browserSidebarMode,
        browserTabId,
        browserUseCursorState,
        cancelAddressEditing,
        captureScreenshotLabel,
        certificateErrorSchemeParts,
        changeInteractionMode,
        classNames,
        commentModeUnavailableLabel,
        commitAddress,
        confirmDiscardAnnotations,
        conversationId,
        currentZoomPercent,
        deviceToolbar,
        deviceToolbarBackgroundColor,
        deviceToolbarLayout,
        dispatchBrowserCommand,
        dispatchZoomCommandRef,
        displayUrl,
        downloadsService,
        effectiveViewportScale,
        ensureAddressEditing,
        exitAnnotationTakeover,
        floatingComposerToggleLabel,
        forwardLabel,
        hasBrowserPage,
        hasDisplayUrl,
        hasEditedAddressRef,
        hasPendingAnnotations,
        hasQueuedTweaks,
        hasRetainedWebview,
        hasSettledOpen,
        handleDeviceToolbarStateChange,
        handleOriginalViewKeyDown,
        handleOriginalViewKeyUp,
        handleOriginalViewPointerCancel,
        handleOriginalViewPointerDown,
        handleOriginalViewPointerUp,
        hostKind,
        initialUrl,
        isAddressEditing,
        isAnnotateHoverSuppressed,
        isAdopting,
        isAgentControllingBrowser,
        isAnnotationAddModifierActive,
        isAnnotationDisabled,
        isAnnotationModeEnabled,
        isAnnotationTakeoverVisible,
        isBrowserKnowledgeWorkerEnabled,
        isBrowserManaged,
        isChromeExpanded,
        isCommentMode,
        isCommentModeSiteBlocked,
        isDeviceToolbarEnabled,
        isDeviceToolbarMenuItemVisible,
        isDownloadsOpen,
        isFloatingComposerToggleAvailable,
        isFloatingComposerToggleVisible,
        isFloatingComposerVisible,
        isMenuOpen,
        isMultiBrowserTabsEnabled,
        isOriginalViewEnabled,
        isOwlPermissionsEnabled,
        isPersistentCommentMode,
        isPrintEnabled,
        isScreenshotCaptureEnabled,
        isSecurityPopoverOpen,
        isStoppingAddressEditingRef,
        isTweaksEnabled,
        isVisible,
        isWebviewHostActive,
        isWebviewVisible,
        layoutScale,
        onToggleFloatingComposer,
        openBrowserFindPanel,
        openChromiumInternalPage,
        openExternalBrowserLabel,
        openInExternalBrowser,
        panelBounds,
        panelTarget,
        pendingAnnotationCount,
        pendingNavigationSnapshot,
        persistedTabsEnabled,
        prefersReducedMotion,
        preventDefaultAndStop,
        profileImportNuxStrip,
        reloadLabel,
        reloadOrStop,
        reloadPage,
        releaseOriginalView,
        reservedComposerSpace,
        rightPanelLayoutTick,
        rootElementRef,
        rotateDeviceToolbar,
        setActiveEditorDismissHandler,
        setAddressValue,
        setIsAnnotateHoverSuppressed,
        setIsAddressEditing,
        setIsDownloadsOpen,
        setIsMenuOpen,
        setIsSecurityPopoverOpen,
        setViewportResizeScale,
        shouldAnimateAddressExpansion,
        shouldBootstrapWhenHidden,
        shouldKeepAddressSelectedRef,
        shouldPaintWebview,
        snapshot,
        stopAddressEditing,
        stopLoadingLabel,
        submitBrowserAnnotationComments,
        tabSnapshot,
        toConversationId,
        toggleDeviceToolbar,
        viewportContainerRef,
        webviewBounds,
        webviewElementRef,
        windowZoom,
      }}
    />
  );
}
