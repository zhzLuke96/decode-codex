// Restored from ref/webview/assets/sidebar-signals-CPMTa_tq.js
// Semantic implementation for the sidebar signal graph.
import {
  _appScopeC as createComputedSignal,
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
  createAppScopeSignal,
} from "../../boundaries/app-scope";
import { createPersistedSignal } from "../../runtime/persisted-signal";
type AppScopeSignal<TValue> = unknown;
type AppScopeSignalFamily<TKey, TValue> = unknown;
interface AppScopeGetContext {
  get<TValue>(signal: AppScopeSignal<TValue>): TValue;
  get<TKey, TValue>(
    signal: AppScopeSignalFamily<TKey, TValue>,
    key: TKey,
  ): TValue;
}
interface AppScopeStore {
  get<TValue>(signal: AppScopeSignal<TValue>): TValue;
  set<TValue>(signal: AppScopeSignal<TValue>, value: TValue): void;
}
type SidebarOrganizeMode = "codex" | "project" | "connection" | "recent";
type SidebarDisplayMode = string;
type SidebarThreadSortKey = "created_at" | "updated_at";
type SidebarSectionKey = "chats" | "cloud" | "pinned" | "threads";
type SidebarCollapsedGroups = Record<string, true>;
type SidebarCollapsedSections = Record<SidebarSectionKey, boolean>;
type SidebarThreadListExpanded = Record<string, true>;
interface SidebarThreadLocation {
  locationId: string | null;
  threadKey: string | null;
}
interface ImportedProjectCollapseInput {
  collapsedGroups: SidebarCollapsedGroups;
  importedProjectRoots: string[];
}
const createComputed = createComputedSignal as <TValue>(
  scope: unknown,
  read: (context: AppScopeGetContext) => TValue,
) => AppScopeSignal<TValue>;
const createComputedFamily = createComputedSignalFamily as <TKey, TValue>(
  scope: unknown,
  read: (key: TKey, context: AppScopeGetContext) => TValue,
) => AppScopeSignalFamily<TKey, TValue>;
const DEFAULT_SIDEBAR_DISPLAY_MODE = "codex";
const DEFAULT_SIDEBAR_ORGANIZE_MODE: SidebarOrganizeMode = "project";
const EMPTY_COLLAPSED_GROUPS: SidebarCollapsedGroups = {};
const DEFAULT_COLLAPSED_SECTIONS: SidebarCollapsedSections = {
  chats: false,
  cloud: false,
  pinned: false,
  threads: false,
};
const persistedSidebarOrganizeModeSignal =
  createPersistedSignal<SidebarOrganizeMode>(
    "sidebar-organize-mode-v1",
    DEFAULT_SIDEBAR_ORGANIZE_MODE,
  );
const persistedKeepProjectsInRecentSignal = createPersistedSignal(
  "sidebar-keep-projects-in-recent-v1",
  true,
);
const persistedProjectlessChatsFirstSignal = createPersistedSignal(
  "projectless-sidebar-chats-first-v1",
  false,
);
const persistedSidebarDisplayModeSignal =
  createPersistedSignal<SidebarDisplayMode>(
    "electron-sidebar-mode-v1",
    DEFAULT_SIDEBAR_DISPLAY_MODE,
  );
const persistedSidebarThreadSortKeySignal =
  createPersistedSignal<SidebarThreadSortKey>(
    "thread-sort-key",
    DEFAULT_SIDEBAR_THREAD_SORT_KEY,
  );
const persistedCollapsedGroupsSignal =
  createPersistedSignal<SidebarCollapsedGroups>(
    "sidebar-collapsed-groups",
    EMPTY_COLLAPSED_GROUPS,
  );
const persistedCollapsedSectionsSignal =
  createPersistedSignal<SidebarCollapsedSections>(
    "sidebar-collapsed-sections-v1",
    DEFAULT_COLLAPSED_SECTIONS,
  );
export const DEFAULT_SIDEBAR_THREAD_SORT_KEY: SidebarThreadSortKey =
  "updated_at";
export const sidebarCollapsedGroupsSignal =
  createComputed<SidebarCollapsedGroups>(
    appScopeRoot,
    ({ get }) => get(persistedCollapsedGroupsSignal) ?? EMPTY_COLLAPSED_GROUPS,
  );
const sidebarCollapsedSectionsSignal = createComputed<SidebarCollapsedSections>(
  appScopeRoot,
  ({ get }) => {
    const sections = get(persistedCollapsedSectionsSignal);
    return sections == null
      ? DEFAULT_COLLAPSED_SECTIONS
      : {
          ...DEFAULT_COLLAPSED_SECTIONS,
          ...sections,
        };
  },
);
export const previouslyExpandedSidebarGroupIdsSignal = createAppScopeSignal<
  string[]
>(appScopeRoot, []);
export const sidebarScrollTopSignal = createAppScopeSignal(appScopeRoot, 0);
export const selectedSidebarThreadKeySignal = createAppScopeSignal<
  string | null
>(appScopeRoot, null);
export const selectedSidebarLocationIdSignal = createAppScopeSignal<
  string | null
>(appScopeRoot, null);
export const sidebarExpandedThreadListsSignal =
  createAppScopeSignal<SidebarThreadListExpanded>(appScopeRoot, {});
export const sidebarSelectedThreadKeyMatchesSignal = createComputedFamily<
  string | null,
  boolean
>(
  appScopeRoot,
  (threadKey, { get }) => get(selectedSidebarThreadKeySignal) === threadKey,
);
export const sidebarOrganizeModeSignal = createComputed<SidebarOrganizeMode>(
  appScopeRoot,
  ({ get }) =>
    get(persistedSidebarOrganizeModeSignal) ?? DEFAULT_SIDEBAR_ORGANIZE_MODE,
);
export const sidebarSelectedThreadMatchesLocationSignal = createComputedFamily<
  SidebarThreadLocation,
  boolean
>(appScopeRoot, ({ locationId, threadKey }, { get }) => {
  if (get(selectedSidebarThreadKeySignal) !== threadKey) {
    return false;
  }
  const selectedLocationId = get(selectedSidebarLocationIdSignal);
  return (
    selectedLocationId == null ||
    locationId == null ||
    selectedLocationId === locationId
  );
});
export const sidebarSectionCollapsedSignal = createComputedFamily<
  SidebarSectionKey,
  boolean
>(
  appScopeRoot,
  (sectionKey, { get }) => get(sidebarCollapsedSectionsSignal)[sectionKey],
);
export const sidebarKeepProjectsInRecentSignal = createComputed<boolean>(
  appScopeRoot,
  ({ get }) => get(persistedKeepProjectsInRecentSignal) ?? true,
);
export const sidebarDisplayModeSignal = createComputed<SidebarDisplayMode>(
  appScopeRoot,
  ({ get }) =>
    get(persistedSidebarDisplayModeSignal) ?? DEFAULT_SIDEBAR_DISPLAY_MODE,
);
export const sidebarThreadListExpandedSignal = createComputedFamily<
  string,
  boolean
>(
  appScopeRoot,
  (listKey, { get }) => get(sidebarExpandedThreadListsSignal)[listKey] === true,
);
export const projectlessSidebarChatsFirstSignal = createComputed<boolean>(
  appScopeRoot,
  ({ get }) => get(persistedProjectlessChatsFirstSignal) ?? false,
);
export const sidebarThreadSortKeySignal = createComputed<SidebarThreadSortKey>(
  appScopeRoot,
  ({ get }) =>
    get(persistedSidebarThreadSortKeySignal) ?? DEFAULT_SIDEBAR_THREAD_SORT_KEY,
);
export const sidebarGroupCollapsedSignal = createComputedFamily<
  string,
  boolean
>(
  appScopeRoot,
  (groupKey, { get }) => get(sidebarCollapsedGroupsSignal)[groupKey] === true,
);
export function setSidebarOrganizeMode(
  store: AppScopeStore,
  organizeMode: SidebarOrganizeMode,
): void {
  store.set(persistedSidebarOrganizeModeSignal, organizeMode);
}
export function setSidebarKeepProjectsInRecent(
  store: AppScopeStore,
  keepProjectsInRecent: boolean,
): void {
  store.set(persistedKeepProjectsInRecentSignal, keepProjectsInRecent);
}
export function setProjectlessSidebarChatsFirst(
  store: AppScopeStore,
  chatsFirst: boolean,
): void {
  store.set(persistedProjectlessChatsFirstSignal, chatsFirst);
}
export function setSidebarThreadSortKey(
  store: AppScopeStore,
  sortKey: SidebarThreadSortKey,
): void {
  store.set(persistedSidebarThreadSortKeySignal, sortKey);
}
export function setSelectedSidebarThread(
  store: AppScopeStore,
  threadKey: string | null,
  locationId: string | null = null,
): void {
  if (
    store.get(selectedSidebarThreadKeySignal) === threadKey &&
    store.get(selectedSidebarLocationIdSignal) === locationId
  ) {
    return;
  }
  store.set(selectedSidebarThreadKeySignal, threadKey);
  store.set(selectedSidebarLocationIdSignal, locationId);
}
export function setSidebarSectionCollapsed(
  store: AppScopeStore,
  sectionKey: SidebarSectionKey,
  collapsed: boolean,
): void {
  store.set(persistedCollapsedSectionsSignal, {
    ...store.get(sidebarCollapsedSectionsSignal),
    [sectionKey]: collapsed,
  });
}
export function setSidebarCollapsedGroupsWithHistory(
  store: AppScopeStore,
  collapsedGroups: SidebarCollapsedGroups,
  previouslyExpandedGroupIds: string[],
): void {
  store.set(persistedCollapsedGroupsSignal, collapsedGroups);
  store.set(
    previouslyExpandedSidebarGroupIdsSignal,
    previouslyExpandedGroupIds,
  );
}
export function replaceSidebarCollapsedGroups(
  store: AppScopeStore,
  collapsedGroups: SidebarCollapsedGroups,
): void {
  store.set(persistedCollapsedGroupsSignal, collapsedGroups);
  store.set(previouslyExpandedSidebarGroupIdsSignal, []);
}
export function toggleSidebarCollapsedGroup(
  store: AppScopeStore,
  groupKey: string,
): void {
  const currentCollapsedGroups = store.get(sidebarCollapsedGroupsSignal);
  const nextCollapsedGroups = {
    ...currentCollapsedGroups,
  };
  if (currentCollapsedGroups[groupKey] === true) {
    delete nextCollapsedGroups[groupKey];
  } else {
    nextCollapsedGroups[groupKey] = true;
  }
  replaceSidebarCollapsedGroups(store, nextCollapsedGroups);
}
export function collapseImportedProjectGroups({
  collapsedGroups,
  importedProjectRoots,
}: ImportedProjectCollapseInput): SidebarCollapsedGroups {
  if (importedProjectRoots.length === 0) {
    return collapsedGroups;
  }
  const nextCollapsedGroups = {
    ...collapsedGroups,
  };
  const [firstProjectRoot, ...remainingProjectRoots] = importedProjectRoots;
  delete nextCollapsedGroups[firstProjectRoot];
  for (const projectRoot of remainingProjectRoots) {
    nextCollapsedGroups[projectRoot] = true;
  }
  return nextCollapsedGroups;
}
export function setSidebarThreadListExpanded(
  store: AppScopeStore,
  listKey: string,
  expanded: boolean,
): void {
  const expandedLists = store.get(sidebarExpandedThreadListsSignal);
  if (expanded === Boolean(expandedLists[listKey])) {
    return;
  }
  if (expanded) {
    store.set(sidebarExpandedThreadListsSignal, {
      ...expandedLists,
      [listKey]: true,
    });
    return;
  }
  const nextExpandedLists = {
    ...expandedLists,
  };
  delete nextExpandedLists[listKey];
  store.set(sidebarExpandedThreadListsSignal, nextExpandedLists);
}
