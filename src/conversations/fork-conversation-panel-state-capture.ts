// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Capture currently open browser, terminal, artifact, and file panel tabs.
import {
  bottomPanelOpenStateKey,
  bottomPanelTabsDescriptor,
  browserTabSnapshotStore,
  deriveBrowserConversationId,
  focusAreaStateKey,
  getActiveBrowserTabId,
  getAllBrowserTabIdsForConversation,
  getBrowserTabIdForPanelTab,
  getConversationPanelLayoutSnapshot,
  rightPanelFullWidthStateKey,
  rightPanelOpenStateKey,
  rightPanelTabsDescriptor,
  terminalSessionSnapshotStore,
  terminalTabIdForSession,
} from "./fork-conversation-panel-state-deps";
import type {
  AppScope,
  CapturedPanelState,
  CapturedPanelTab,
  PanelTarget,
  SourceTab,
} from "./fork-conversation-panel-state-types";

export function capturePanelState(
  scope: AppScope,
  conversationId: string,
): CapturedPanelState {
  const browserConversationId = deriveBrowserConversationId(
    scope,
    conversationId,
  );
  const layout = getConversationPanelLayoutSnapshot(scope, conversationId);
  if (layout == null) return captureBrowserOnlyState(browserConversationId);
  const panelTabs = [
    ...capturePanelTabs(
      layout,
      rightPanelTabsDescriptor,
      browserConversationId,
      "right",
    ),
    ...capturePanelTabs(
      layout,
      bottomPanelTabsDescriptor,
      browserConversationId,
      "bottom",
    ),
  ];
  return {
    bottomPanelOpen: layout.get(bottomPanelOpenStateKey),
    focusArea: layout.get(focusAreaStateKey),
    rightPanelFullWidth: layout.get(rightPanelFullWidthStateKey),
    rightPanelOpen: layout.get(rightPanelOpenStateKey),
    sourceBrowserConversationId: browserConversationId,
    tabs: [
      ...panelTabs,
      ...captureUnplacedBrowserTabs(layout, browserConversationId, panelTabs),
    ],
    targetBrowserConversationId: browserConversationId,
  };
}

function captureBrowserOnlyState(
  browserConversationId: string,
): CapturedPanelState {
  const browserTabIds = browserTabSnapshotStore.getConversationBrowserTabIds(
    browserConversationId,
  );
  return {
    bottomPanelOpen: false,
    focusArea: "main",
    rightPanelFullWidth: false,
    rightPanelOpen: false,
    sourceBrowserConversationId: browserConversationId,
    tabs: browserTabIds.map((browserTabId, index) => ({
      active: index === browserTabIds.length - 1,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId: browserTabIds[index - 1] ?? null,
      kind: "browser",
      panel: "right",
      tabId: browserTabId,
    })),
    targetBrowserConversationId: browserConversationId,
  };
}

function capturePanelTabs(
  layout: { get(key: unknown): { activeTab$: unknown; tabs$: unknown } },
  panelDescriptor: { activeTab$: unknown; tabs$: unknown },
  browserConversationId: string,
  panel: PanelTarget,
): CapturedPanelTab[] {
  const activeTabId = layout.get(panelDescriptor.activeTab$)?.tabId ?? null;
  const capturedTabs: CapturedPanelTab[] = [];
  let previousTabId: string | number | null = null;
  let fallbackActiveTab: CapturedPanelTab | null = null;
  let reachedActiveTab = false;
  for (const sourceTab of layout.get(panelDescriptor.tabs$) as SourceTab[]) {
    if (sourceTab.tabId === activeTabId) {
      reachedActiveTab = true;
      fallbackActiveTab = capturedTabs.at(-1) ?? null;
    }
    const capturedTab = capturePanelTab(
      sourceTab,
      browserConversationId,
      panel,
      previousTabId,
      activeTabId,
    );
    if (capturedTab != null) {
      capturedTabs.push(capturedTab);
      if (reachedActiveTab && fallbackActiveTab == null) {
        fallbackActiveTab = capturedTab;
      }
      previousTabId = capturedTab.tabId;
    }
  }
  if (!capturedTabs.some((tab) => tab.active) && fallbackActiveTab != null) {
    fallbackActiveTab.active = true;
  }
  return capturedTabs;
}

function captureUnplacedBrowserTabs(
  layout: unknown,
  browserConversationId: string,
  capturedTabs: CapturedPanelTab[],
): CapturedPanelTab[] {
  const alreadyCaptured = new Set(
    capturedTabs.flatMap((tab) =>
      tab.kind === "browser" ? [tab.browserTabId] : [],
    ),
  );
  const activeBrowserTabId = getActiveBrowserTabId(
    layout,
    browserConversationId,
  );
  const unplacedTabs: CapturedPanelTab[] = [];
  let insertAfterTabId =
    capturedTabs.filter((tab) => tab.panel === "right").at(-1)?.tabId ?? null;
  for (const browserTabId of getAllBrowserTabIdsForConversation(
    layout,
    browserConversationId,
  )) {
    if (alreadyCaptured.has(browserTabId)) continue;
    unplacedTabs.push({
      active: browserTabId === activeBrowserTabId,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId,
      kind: "browser",
      panel: "right",
      tabId: browserTabId,
    });
    insertAfterTabId = browserTabId;
  }
  return unplacedTabs;
}

function capturePanelTab(
  sourceTab: SourceTab,
  browserConversationId: string,
  panel: PanelTarget,
  insertAfterTabId: string | number | null,
  activeTabId: string | number | null,
): CapturedPanelTab | null {
  const browserTabId = getBrowserTabIdForPanelTab(
    sourceTab,
    browserConversationId,
  );
  if (browserTabId != null) {
    return {
      active: sourceTab.tabId === activeTabId,
      browserTabId,
      deviceToolbarState: browserTabSnapshotStore.getDeviceToolbarTabState(
        browserConversationId,
        browserTabId,
      ),
      initialUrl:
        browserTabSnapshotStore.getSnapshot(browserConversationId, browserTabId)
          ?.url ?? null,
      insertAfterTabId,
      kind: "browser",
      panel,
      tabId: sourceTab.tabId,
    };
  }
  if (
    "sessionId" in sourceTab.props &&
    typeof sourceTab.props.sessionId === "string" &&
    sourceTab.tabId === terminalTabIdForSession(sourceTab.props.sessionId)
  ) {
    const snapshot = terminalSessionSnapshotStore.getSnapshot(
      sourceTab.props.sessionId,
    );
    return snapshot == null
      ? null
      : {
          active: sourceTab.tabId === activeTabId,
          insertAfterTabId,
          kind: "terminal",
          panel,
          sessionId: sourceTab.props.sessionId,
          snapshot,
          tabId: sourceTab.tabId,
        };
  }
  const workspaceFile = readWorkspaceFileTab(sourceTab);
  if (workspaceFile == null || !sourceTab.kind?.startsWith("workspaceFile:")) {
    return null;
  }
  if ("artifactType" in sourceTab.props) {
    return workspaceFile.path == null
      ? null
      : {
          active: sourceTab.tabId === activeTabId,
          hostId: workspaceFile.hostId,
          insertAfterTabId,
          kind: "artifact",
          panel,
          path: workspaceFile.path,
          tabId: sourceTab.tabId,
        };
  }
  return {
    active: sourceTab.tabId === activeTabId,
    hostId: workspaceFile.hostId,
    insertAfterTabId,
    kind: "review-file",
    panel,
    path: workspaceFile.path,
    tabId: sourceTab.tabId,
    workspaceRoot: workspaceFile.workspaceRoot,
  };
}

function readWorkspaceFileTab(
  sourceTab: SourceTab,
): { hostId: string; path: string; workspaceRoot: string | null } | null {
  const { props } = sourceTab;
  if (
    !("hostId" in props) ||
    typeof props.hostId !== "string" ||
    !("path" in props) ||
    props.path === undefined ||
    (typeof props.path !== "string" && props.path != null)
  ) {
    return null;
  }
  return {
    hostId: props.hostId,
    path: props.path as string,
    workspaceRoot:
      "workspaceRoot" in props && typeof props.workspaceRoot === "string"
        ? props.workspaceRoot
        : null,
  };
}
