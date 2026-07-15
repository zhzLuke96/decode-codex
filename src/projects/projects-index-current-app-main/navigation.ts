// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-14pJ3ozX.js
// Navigation, pinning, ordering, and sidebar action helpers.

import type {
  NavigateLike,
  SidebarGroupCollapseAction,
  StoreLike,
  UnknownRecord,
} from "./types";

export function navigateToAutomationsPage(
  productLoggerScope: unknown,
  navigate: NavigateLike,
): void {
  void productLoggerScope;
  navigate("/automations");
}

export function toggleRecentSidebarSection(
  productLoggerScope: unknown,
  toggleRecentMode: () => void,
): void {
  void productLoggerScope;
  toggleRecentMode();
}

export function navigateToLibraryPage(
  productLoggerScope: unknown,
  navigate: NavigateLike,
): void {
  void productLoggerScope;
  navigate("/library");
}

export function navigateToPullRequestsPage(
  productLoggerScope: unknown,
  navigate: NavigateLike,
): void {
  void productLoggerScope;
  navigate("/pull-requests");
}

export function applyProjectGroupCollapseAction(
  store: StoreLike,
  {
    action,
    collapsedGroups,
    previouslyExpandedGroupIds,
    visibleGroupIds,
  }: {
    action: SidebarGroupCollapseAction;
    collapsedGroups: Record<string, boolean>;
    previouslyExpandedGroupIds: string[];
    visibleGroupIds: string[];
  },
): {
  collapsedGroups: Record<string, boolean>;
  previouslyExpandedGroupIds: string[];
} {
  void store;
  if (action === "collapse-all") {
    const nextCollapsedGroups = { ...collapsedGroups };
    for (const groupId of visibleGroupIds) nextCollapsedGroups[groupId] = true;
    return {
      collapsedGroups: nextCollapsedGroups,
      previouslyExpandedGroupIds: visibleGroupIds.filter(
        (groupId) => !collapsedGroups[groupId],
      ),
    };
  }

  const nextCollapsedGroups = { ...collapsedGroups };
  const visibleIds = new Set(visibleGroupIds);
  for (const groupId of previouslyExpandedGroupIds) {
    if (visibleIds.has(groupId)) delete nextCollapsedGroups[groupId];
  }
  return {
    collapsedGroups: nextCollapsedGroups,
    previouslyExpandedGroupIds: [],
  };
}

export function hideAddProjectMenu(store: StoreLike): void {
  store.set?.("sidebar-add-project-menu", "hidden");
}

export function openLocalProjectCreationDialog(store: StoreLike): void {
  hideAddProjectMenu(store);
}

export function openAddProjectFlow(
  store: StoreLike,
  options: { localProjectSourcesEnabled?: boolean } = {},
): void {
  hideAddProjectMenu(store);
  store.set?.(
    "project-creation-flow",
    options.localProjectSourcesEnabled ? "local-source" : "project",
  );
}

export function openRemoteProjectSelection(store: StoreLike): void {
  hideAddProjectMenu(store);
  store.set?.("remote-project-selection", { setActive: true });
}

export function startNewSidebarConversation(
  startNewConversation: (input?: unknown) => unknown,
  options?: unknown,
): unknown {
  return startNewConversation(options);
}

export function setActiveSidebarThread(
  store: StoreLike,
  threadKey: string,
  locationId?: string | null,
): void {
  store.set?.("active-sidebar-thread", { locationId, threadKey });
}

export function openSidebarThread(
  store: StoreLike,
  threadKey: string,
  navigate?: NavigateLike,
): void {
  setActiveSidebarThread(store, threadKey);
  navigate?.("/", { state: { sidebarMode: "codex", threadKey } });
}

export function saveProjectThreadSortKey(
  store: StoreLike,
  projectId: string,
  threadKeys: string[],
): void {
  store.set?.("project-thread-sort-key", { projectId, threadKeys });
}

export async function setProjectPinned(
  store: StoreLike,
  projectId: string,
  pinned: boolean,
): Promise<string[]> {
  const currentValue = store.get?.("pinned-project-ids");
  const currentIds = Array.isArray(currentValue)
    ? currentValue.filter((value): value is string => typeof value === "string")
    : [];
  const nextIds = pinned
    ? currentIds.includes(projectId)
      ? currentIds
      : [...currentIds, projectId]
    : currentIds.filter((id) => id !== projectId);
  store.set?.("pinned-project-ids", nextIds);
  return nextIds;
}

export function savePinnedThreadOrder(
  store: StoreLike,
  threadKeys: string[],
): void {
  store.set?.("pinned-thread-order", threadKeys);
}

export function removeThreadFromProjectOrders(
  projectOrders: Record<string, string[]>,
  threadId: string,
): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(projectOrders).map(([projectId, threadIds]) => [
      projectId,
      threadIds.filter((id) => id !== threadId),
    ]),
  );
}

export function insertThreadIntoProjectOrder(
  threadKeys: string[],
  threadKey: string,
  beforeThreadKey?: string | null,
): string[] {
  const withoutThread = threadKeys.filter((key) => key !== threadKey);
  const insertIndex =
    beforeThreadKey == null ? 0 : withoutThread.indexOf(beforeThreadKey);
  const normalizedIndex =
    insertIndex === -1 ? withoutThread.length : insertIndex;
  return [
    ...withoutThread.slice(0, normalizedIndex),
    threadKey,
    ...withoutThread.slice(normalizedIndex),
  ];
}

export function recordSidebarThreadSwitchCompleted(
  productLoggerScope: unknown,
  payload: UnknownRecord = {},
): void {
  void productLoggerScope;
  void payload;
}

export function openProjectInHomeRoute(
  store: StoreLike,
  navigate: NavigateLike,
  project: { projectId: string; projectKind: "local" | "remote" },
): void {
  store.set?.("selected-project", project);
  navigate("/", { state: { sidebarMode: "codex" } });
}

export function navigateToSitesPage(
  productLoggerScope: unknown,
  navigate: NavigateLike,
): void {
  void productLoggerScope;
  navigate("/sites");
}

export function navigateToPluginDirectory(
  productLoggerScope: unknown,
  navigate: NavigateLike,
  pluginsSelected: boolean = false,
): void {
  void productLoggerScope;
  navigate("/skills", {
    state: {
      pluginDirectoryEntrypoint: "sidebar",
      selectedItem: pluginsSelected ? "plugins" : "skills",
    },
  });
}

export function navigateToPluginDirectoryFromSidebar(
  productLoggerScope: unknown,
  navigate: NavigateLike,
  pluginsSelected: boolean = false,
): void {
  void productLoggerScope;
  void pluginsSelected;
  navigate("/skills", {
    state: {
      pluginDirectoryEntrypoint: "sidebar",
    },
  });
}
