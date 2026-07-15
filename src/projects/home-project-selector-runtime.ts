// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-CI5sWBpw.js
// Current home/project selector runtime facade used by restored app-main splits.
import { ProjectIcon } from "../composer/project-selector";

type SignalToken<TValue> = {
  readonly defaultValue: TValue;
  readonly key: string;
};

type SidebarTaskItem<TTask = unknown> = {
  automationDisplayName: string | null;
  isAutomationRun: boolean;
  isPinned: boolean;
  task: TTask;
};

type SidebarThreadKeyLists = {
  allSidebarThreadKeys: readonly string[];
  pinnedThreadKeys: readonly string[];
  unpinnedThreadKeys: readonly string[];
};

type SidebarSectionTitleOptions = {
  organizeMode?: "connection" | "project" | "recent";
  projectSidebarEnabled: boolean;
  showProjectsTitle?: boolean;
  showRecent?: boolean;
};

type IntlShapeLike = {
  formatMessage(message: {
    defaultMessage: string;
    description?: string;
    id: string;
  }): string;
};

function createSignalToken<TValue>(
  key: string,
  defaultValue: TValue,
): SignalToken<TValue> {
  return { defaultValue, key };
}

export {
  AddProjectIcon,
  ClearProjectIcon,
  ComposerFooterProjectButton,
  ComposerFooterStaticProjectControl,
  ComposerProjectSelector,
  composerProjectSelectorFeatureFlagId,
  initAddProjectIconChunk,
  initClearProjectIconChunk,
  initComposerProjectFooterControls,
  initComposerProjectSelectorChunk,
  initProjectIconChunk,
  initProjectSelectorFeatureFlags,
  ProjectIcon,
} from "../composer/project-selector";
export type {
  ComposerProjectGroup,
  ComposerProjectSelection,
  ComposerProjectSelectorProps,
} from "../composer/project-selector";

export {
  initSelectedLocalRemoteCwdStateChunk,
  selectedLocalRemoteCwdState,
} from "../remote/local-remote-selection/selection-state";

export {
  initUseIsRemoteHostChunk,
  useIsRemoteHost,
} from "../utils/use-is-remote-host";

export const projectSidebarEnabledSignal = createSignalToken(
  "project-sidebar-enabled",
  true,
);
export const localProjectsEnabledSignal = createSignalToken(
  "local-projects-enabled",
  true,
);
export const showEmptyConnectionGroupsSignal = createSignalToken(
  "show-empty-connection-groups",
  false,
);
export const connectionSidebarModeAvailableSignal = createSignalToken(
  "connection-sidebar-mode-available",
  false,
);
export const organizeModeForProjectActionsSignal = createSignalToken(
  "organize-mode-for-project-actions",
  "project",
);
export const sidebarVisibleThreadIdsSignal = createSignalToken<string[]>(
  "sidebar-visible-thread-ids",
  [],
);
export const sidebarProjectGroupsSignal = createSignalToken<unknown[]>(
  "sidebar-project-groups",
  [],
);
export const projectGroupByThreadKeySignal = createSignalToken(
  "project-group-by-thread-key",
  null as unknown,
);
export const projectIdByThreadKeySignal = createSignalToken(
  "project-id-by-thread-key",
  null as string | null,
);
export const remoteHostConfigByThreadKeySignal = createSignalToken(
  "remote-host-config-by-thread-key",
  null as unknown,
);
export const localWorkspaceRootByThreadKeySignal = createSignalToken(
  "local-workspace-root-by-thread-key",
  null as string | null,
);
export const workspaceRootHintByThreadKeySignal = createSignalToken(
  "workspace-root-hint-by-thread-key",
  null as string | null,
);
export const repositoryLabelByThreadKeySignal = createSignalToken(
  "repository-label-by-thread-key",
  null as string | null,
);
export const threadLabelColorByKeySignal = createSignalToken(
  "thread-label-color-by-key",
  null as string | null,
);
export const threadProjectHoverCardLabelSignal = createSignalToken(
  "thread-project-hover-card-label",
  null as { isProjectless: boolean; label: string | null } | null,
);
export const isThreadPinnedSignal = createSignalToken(
  "is-thread-pinned",
  false,
);
export const isAutomationRunThreadKeySignal = createSignalToken(
  "is-automation-run-thread-key",
  false,
);
export const automationDisplayNameByThreadKeySignal = createSignalToken(
  "automation-display-name-by-thread-key",
  null as string | null,
);
export const projectLabelByThreadKeySignal = createSignalToken<
  ReadonlyMap<string, string>
>("project-label-by-thread-key", new Map());
export const sidebarThreadKeyListsSignal =
  createSignalToken<SidebarThreadKeyLists>("sidebar-thread-key-lists", {
    allSidebarThreadKeys: [],
    pinnedThreadKeys: [],
    unpinnedThreadKeys: [],
  });
export const sidebarTaskItemsByThreadKeysSignal = createSignalToken<
  SidebarTaskItem[]
>("sidebar-task-items-by-thread-keys", []);

export const RemoteProjectIcon = ProjectIcon;

export function SidebarSectionTitle(
  options: SidebarSectionTitleOptions,
): string {
  return getSidebarSectionTitleText(options);
}

export function getSidebarSectionTitleText({
  organizeMode = "project",
  projectSidebarEnabled,
  showProjectsTitle = false,
  showRecent = false,
}: SidebarSectionTitleOptions): string {
  if (!projectSidebarEnabled) return "Codex Cloud";
  if (showRecent) return "All chats";
  if (organizeMode === "connection") return "Connections";
  return showProjectsTitle ? "Projects" : "Chats";
}

export function formatSidebarSectionTitle({
  intl,
  ...options
}: SidebarSectionTitleOptions & { intl: IntlShapeLike }): string {
  return intl.formatMessage({
    id: "sidebarElectron.sectionTitle",
    defaultMessage: getSidebarSectionTitleText(options),
    description: "Section label above thread groups in the sidebar",
  });
}

export function toSidebarTaskItems<TTask>(
  tasks: readonly TTask[],
): SidebarTaskItem<TTask>[] {
  return tasks.map((task) => ({
    automationDisplayName: null,
    isAutomationRun: false,
    isPinned: false,
    task,
  }));
}

export function filterProjectlessThreadItems<TItem extends { task: unknown }>({
  items,
}: {
  items: readonly TItem[];
  projectlessThreadIds?: ReadonlySet<string>;
}): TItem[] {
  return [...items];
}

export function createProjectLabelByThreadKeyMap<
  TGroup extends { label: string; threadKeys: readonly string[] },
>(groups: readonly TGroup[]): ReadonlyMap<string, string> {
  return new Map(
    groups.flatMap((group) =>
      group.threadKeys.map((threadKey) => [threadKey, group.label] as const),
    ),
  );
}

export function resolveTasksByThreadKeys<TTask>(
  threadKeys: readonly string[],
  taskByThreadKey: ReadonlyMap<string, TTask>,
): TTask[] {
  return threadKeys.flatMap((threadKey) => {
    const task = taskByThreadKey.get(threadKey);
    return task == null ? [] : [task];
  });
}

export function getSidebarTasksForThreadKeys<TTask>(
  threadKeys: readonly string[],
  taskByThreadKey: ReadonlyMap<string, TTask>,
): TTask[] {
  return resolveTasksByThreadKeys(threadKeys, taskByThreadKey);
}

export function sortProjectGroupsByRecentTask<
  TGroup extends { threadKeys: readonly string[] },
  TTask extends { at?: number | null },
>(
  groups: readonly TGroup[],
  taskByThreadKey: ReadonlyMap<string, TTask>,
): TGroup[] {
  return [...groups].sort((left, right) => {
    const leftTime = getNewestTaskTime(left.threadKeys, taskByThreadKey);
    const rightTime = getNewestTaskTime(right.threadKeys, taskByThreadKey);
    return rightTime - leftTime;
  });
}

export function isThreadResumeInProgress(
  getThreadStatus: (threadKey: string) => string | null | undefined,
  threadKey: string,
): boolean {
  const status = getThreadStatus(threadKey);
  return status === "resuming" || status === "inProgress";
}

export function setSelectedLocalRemoteCwdFromProject(
  setValue: (value: string) => void,
  project: { path?: string | null; projectKind?: "local" | "remote" } | null,
): string {
  const nextCwd = project?.path ?? "~";
  setValue(nextCwd);
  return nextCwd;
}

export function initSidebarTaskStateRuntimeChunk(): void {}

export function initSidebarThreadProjectHelpersChunk(): void {}

export function initSidebarProjectGroupsRuntimeChunk(): void {}

export function initSidebarProjectSourcesRuntimeChunk(): void {}

export function initSidebarThreadKeysRuntimeChunk(): void {}

export function initComposerProjectSelectorRuntimeChunk(): void {}

export function initHomeProjectSelectorProducerChunk(): void {}

export function initRemoteProjectIconChunk(): void {}

function getNewestTaskTime<TTask extends { at?: number | null }>(
  threadKeys: readonly string[],
  taskByThreadKey: ReadonlyMap<string, TTask>,
): number {
  return Math.max(
    -Infinity,
    ...threadKeys.map((threadKey) => taskByThreadKey.get(threadKey)?.at ?? 0),
  );
}
