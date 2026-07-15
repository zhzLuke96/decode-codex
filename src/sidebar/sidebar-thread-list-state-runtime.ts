// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar thread-list state, feature gates, and app-scope model atoms.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { createParametricAtom } from "../runtime/onboarding-scope-runtime";
import { createAtom } from "../vendor/jotai-runtime";

export type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  query?: unknown;
};
export type SidebarLayoutMode = "connection" | "list" | "project";
export type SidebarPreferences = {
  chatSortMode: "manual" | "priority" | "updated_at";
  initialized: boolean;
  mode: SidebarLayoutMode;
  projectSortMode: "manual" | "priority" | "updated_at";
};
export type SidebarProjectGroup = {
  hostId?: string | null;
  isCodexWorktree?: boolean;
  label: string;
  path?: string | null;
  projectId: string;
  projectKind: "local" | "remote";
  threadKeys: string[];
};
export type SidebarItem = {
  key?: string;
  task?: {
    conversation?: {
      cwd?: string | null;
      hostId?: string | null;
      id: string;
      workspaceKind?: string | null;
    };
    key?: string;
    kind?: string;
    task?: { id?: string };
  };
};
export type ThreadDropPayload = {
  beforeThreadId?: string | null;
  sourceContainerId?: string;
  targetContainerId: string;
  threadId: string;
};
export type ThreadProjectAssignment = {
  hostId?: string | null;
  path?: string | null;
  pendingCoreUpdate?: boolean;
  projectId: string;
  projectKind: "local" | "remote";
};

const DEFAULT_PREFERENCES: SidebarPreferences = {
  chatSortMode: "priority",
  initialized: false,
  mode: "project",
  projectSortMode: "priority",
};
const DEFAULT_PROJECTS_VIEW = {
  connectionGroups: [],
  hasLoadedProjectSources: false,
  isWorkspaceRootOptionsLoading: false,
  navigationThreadKeys: [],
  pinnedProjectThreadKeys: [],
  projectCount: 0,
  projectGroups: [],
  projectlessThreadKeys: [],
  shortcutThreadKeys: [],
  threadKeys: [],
};
export const DEFAULT_SCROLL_TOP = { chatgpt: 0, codex: 0, work: 0 };

export const WORKSPACE_STATE_MOVES_GATE = "12346831";
export const canStartProjectlessChatAtom = createAtom(true);
export const projectsSidebarViewAtom = createAtom(DEFAULT_PROJECTS_VIEW);
export const sidebarLayoutModeAtom = createAtom<SidebarLayoutMode>("project");
export const sidebarPreferencesAtom =
  createAtom<SidebarPreferences>(DEFAULT_PREFERENCES);
export const sidebarScrollTopByModeAtom = appScopeUnderscore(
  appScopeRoot,
  () => DEFAULT_SCROLL_TOP,
);

export const threadProjectAssignmentsSignal = appScopeUnderscore(
  appScopeRoot,
  () => ({}) as Record<string, ThreadProjectAssignment | undefined>,
);
export const discoveredWorkspaceHintsSignal = appScopeUnderscore(
  appScopeRoot,
  () => ({}) as Record<string, string | undefined>,
);

export const featureGateAtomFamily = createParametricAtom(
  appScopeRoot,
  (featureId: unknown) => featureId === WORKSPACE_STATE_MOVES_GATE,
);

export const sidebarSectionsModelAtom = createParametricAtom(
  appScopeRoot,
  (_options: unknown, { get }) => ({
    discoveredThreadWorkspaceRootHints: get(discoveredWorkspaceHintsSignal),
    homeContainerIdByThreadId: {},
    isWorkspaceRootOptionsLoading: false,
    shortcutThreadKeys: [],
    visibleSidebarSectionKeys: ["chats"],
  }),
);

export const projectsSidebarModelAtom = createParametricAtom(
  appScopeRoot,
  (_options: unknown, { get }) => ({
    allProjectGroups: [] as SidebarProjectGroup[],
    allSidebarItems: [] as SidebarItem[],
    threadProjectAssignments: get(threadProjectAssignmentsSignal),
  }),
);
