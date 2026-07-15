// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Flat project sidebar preference signals and initialization helpers.
import {
  createSignalToken,
  type FlatProjectSidebarPreferences,
  type FlatProjectSidebarSnapshot,
  type SidebarAttentionState,
  type SidebarMode,
  type SidebarProjectGroup,
  type SidebarSignalStore,
  type SidebarSortMode,
  type SidebarThreadKey,
  type SidebarThreadOrder,
} from "./types";

export const DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES: FlatProjectSidebarPreferences =
  {
    chatSortMode: "priority",
    initialized: false,
    mode: "project",
    projectSortMode: "priority",
  };

const EMPTY_THREAD_KEYS: readonly SidebarThreadKey[] = [];
const EMPTY_PROJECT_GROUPS: readonly SidebarProjectGroup[] = [];
const EMPTY_ATTENTION_BY_THREAD = new Map<
  SidebarThreadKey,
  SidebarAttentionState
>();
const EMPTY_RECENCY_BY_THREAD = new Map<SidebarThreadKey, number>();

export const sidebarChatOrderSignal = createSignalToken<
  SidebarThreadOrder | undefined
>("codex-sidebar-chat-order-v1", undefined);

export const flatProjectSidebarPreferencesSignal =
  createSignalToken<FlatProjectSidebarPreferences>(
    "flat-project-sidebar-preferences-v1",
    DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES,
  );

export const sidebarProjectSortModeOverrideSignal = createSignalToken<
  SidebarSortMode | undefined
>("codex-sidebar-sort-mode-v1", undefined);

export const flatProjectSidebarProjectSortModeSignal =
  createSignalToken<SidebarSortMode>(
    "flat-project-sidebar-project-sort-mode",
    DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES.projectSortMode,
  );

export const flatProjectSidebarModeSignal = createSignalToken<SidebarMode>(
  "flat-project-sidebar-mode",
  DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES.mode,
);

export const activeSidebarProjectRootSignal = createSignalToken<string | null>(
  "flat-project-sidebar-active-project-root",
  null,
);

export const flatProjectSidebarSnapshotSignal =
  createSignalToken<FlatProjectSidebarSnapshot>(
    "flat-project-sidebar-snapshot",
    {
      hasLoadedProjectSources: false,
      isWorkspaceRootOptionsLoading: false,
      navigationThreadKeys: EMPTY_THREAD_KEYS,
      pinnedProjectThreadKeys: EMPTY_THREAD_KEYS,
      projectCount: 0,
      projectGroups: EMPTY_PROJECT_GROUPS,
      projectlessThreadKeys: EMPTY_THREAD_KEYS,
      shortcutThreadKeys: EMPTY_THREAD_KEYS,
      threadAttentionStateByKey: EMPTY_ATTENTION_BY_THREAD,
      threadKeys: EMPTY_THREAD_KEYS,
      threadRecencyAtByKey: EMPTY_RECENCY_BY_THREAD,
    },
  );

export function shouldInitializeFlatProjectSidebarPreferences({
  enabled,
  hasLoadedProjectSources,
  isWorkspaceRootOptionsLoading,
  preferences,
}: {
  enabled: boolean;
  hasLoadedProjectSources: boolean;
  isWorkspaceRootOptionsLoading: boolean;
  preferences: FlatProjectSidebarPreferences;
}): boolean {
  return (
    enabled &&
    hasLoadedProjectSources &&
    !isWorkspaceRootOptionsLoading &&
    !preferences.initialized
  );
}

export function setFlatProjectSidebarMode(
  store: SidebarSignalStore,
  mode: SidebarMode,
): void {
  store.set(flatProjectSidebarPreferencesSignal, (current) => ({
    ...DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES,
    ...current,
    initialized: true,
    mode,
  }));
}

export function setSidebarChatSortMode(
  store: SidebarSignalStore,
  sortMode: SidebarSortMode,
): void {
  store.set(flatProjectSidebarPreferencesSignal, (current) => ({
    ...DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES,
    ...current,
    chatSortMode: sortMode,
  }));
}

export function setSidebarProjectSortMode(
  store: SidebarSignalStore,
  sortMode: SidebarSortMode,
): void {
  const previousProjectSortMode = store.get(
    flatProjectSidebarPreferencesSignal,
  ).projectSortMode;
  store.set(
    sidebarProjectSortModeOverrideSignal,
    (current) => current ?? previousProjectSortMode,
  );
  store.set(flatProjectSidebarPreferencesSignal, (current) => ({
    ...DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES,
    ...current,
    projectSortMode: sortMode,
  }));
}

export function setSidebarSortModeOverride(
  store: SidebarSignalStore,
  sortMode: SidebarSortMode | undefined,
): void {
  store.set(sidebarProjectSortModeOverrideSignal, sortMode);
}

export function initializeFlatProjectSidebarPreferences(
  store: SidebarSignalStore,
  projectCount: number,
  requestedMode?: SidebarMode | "recent" | null,
): void {
  const currentPreferences = store.get(flatProjectSidebarPreferencesSignal);
  if (currentPreferences.initialized) return;
  const mode =
    requestedMode == null
      ? projectCount >= 2
        ? "project"
        : "list"
      : requestedMode === "recent"
        ? projectCount >= 2
          ? "project"
          : "list"
        : requestedMode;
  store.set(flatProjectSidebarPreferencesSignal, {
    ...DEFAULT_FLAT_PROJECT_SIDEBAR_PREFERENCES,
    ...currentPreferences,
    initialized: true,
    mode,
  });
}

export function initFlatProjectSidebarStateChunk(): void {}
