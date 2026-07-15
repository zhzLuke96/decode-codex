// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar thread-list actions, scroll persistence, and worktree move helpers.
import { appLogger } from "../runtime/app-logger";
import { useCodexHomeQuery } from "../utils/use-codex-home";
import { setPinnedThreadOptimistically } from "../threads/thread-actions";
import { parseSidebarThreadKey } from "../threads/sidebar-thread-keys";
import {
  DEFAULT_SCROLL_TOP,
  discoveredWorkspaceHintsSignal,
  sidebarScrollTopByModeAtom,
  threadProjectAssignmentsSignal,
  type AppScopeStoreLike,
  type SidebarItem,
  type SidebarProjectGroup,
  type ThreadDropPayload,
  type ThreadProjectAssignment,
} from "./sidebar-thread-list-state-runtime";

export function debounce<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delayMs: number,
): ((...args: TArgs) => void) & { cancel(): void; flush(): void } {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pendingArgs: TArgs | null = null;
  const flush = () => {
    if (timer != null) clearTimeout(timer);
    timer = null;
    if (pendingArgs != null) callback(...pendingArgs);
    pendingArgs = null;
  };
  const debounced = (...args: TArgs) => {
    pendingArgs = args;
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(flush, delayMs);
  };
  debounced.cancel = () => {
    if (timer != null) clearTimeout(timer);
    timer = null;
    pendingArgs = null;
  };
  debounced.flush = flush;
  return debounced;
}

export function useCodexHomeInfo(hostId?: string | null): unknown {
  return useCodexHomeQuery(hostId);
}

export function setSidebarScrollPosition(
  store: AppScopeStoreLike,
  mode: "chatgpt" | "codex" | "work",
  scrollTop: number,
): void {
  const current = store.get<typeof DEFAULT_SCROLL_TOP>(
    sidebarScrollTopByModeAtom,
  );
  store.set(sidebarScrollTopByModeAtom, {
    ...DEFAULT_SCROLL_TOP,
    ...current,
    [mode]: scrollTop,
  });
}

export function syncDiscoveredThreadWorkspaceRootHints(
  store: AppScopeStoreLike,
  hints: Record<string, string | undefined>,
): void {
  store.set(discoveredWorkspaceHintsSignal, hints);
}

export function shouldLogProjectsSidebarExposure({
  enabled,
  hasLoadedProjectSources,
  isWorkspaceRootOptionsLoading,
}: {
  enabled: boolean;
  hasLoadedProjectSources: boolean;
  isWorkspaceRootOptionsLoading: boolean;
  preferences?: unknown;
}): boolean {
  return enabled && hasLoadedProjectSources && !isWorkspaceRootOptionsLoading;
}

export function logProjectsSidebarExposure(
  _store: AppScopeStoreLike,
  projectCount: number,
): void {
  appLogger.info("Projects sidebar exposed", {
    safe: { projectCount },
    sensitive: {},
  });
}

export function setThreadPinned(
  store: AppScopeStoreLike,
  threadId: string,
  pinned: boolean,
  beforeThreadId?: string | null,
): Promise<void> {
  return setPinnedThreadOptimistically(
    store as never,
    threadId,
    pinned,
    beforeThreadId ?? undefined,
  );
}

export async function moveThreadToContainer(
  store: AppScopeStoreLike,
  drop: ThreadDropPayload,
  { allProjectGroups }: { allProjectGroups: SidebarProjectGroup[] },
): Promise<void> {
  if (drop.targetContainerId === "pinned") {
    await setThreadPinned(store, drop.threadId, true, drop.beforeThreadId);
    return;
  }
  if (drop.sourceContainerId === "pinned") {
    await setThreadPinned(store, drop.threadId, false);
  }
  const assignments = store.get<Record<string, ThreadProjectAssignment>>(
    threadProjectAssignmentsSignal,
  );
  const nextAssignments = { ...assignments };
  if (
    drop.targetContainerId === "chats" ||
    drop.targetContainerId === "cloud"
  ) {
    delete nextAssignments[drop.threadId];
  } else if (drop.targetContainerId.startsWith("project:")) {
    const projectId = drop.targetContainerId.slice("project:".length);
    const group = allProjectGroups.find((item) => item.projectId === projectId);
    if (group != null) {
      nextAssignments[drop.threadId] = {
        hostId: group.hostId ?? null,
        path: group.path ?? null,
        pendingCoreUpdate: false,
        projectId: group.projectId,
        projectKind: group.projectKind,
      };
    }
  }
  store.set(threadProjectAssignmentsSignal, nextAssignments);
}

export function resolveTargetWorktreeWorkspaceRoot(
  _store: AppScopeStoreLike,
  _conversationId: string,
  targetProjectGroup: SidebarProjectGroup,
  cwd?: string | null,
): Promise<string | null> {
  return Promise.resolve(
    targetProjectGroup.path != null && targetProjectGroup.path === cwd
      ? targetProjectGroup.path
      : null,
  );
}

export function getWorktreeMoveConfirmation({
  drop,
  allProjectGroups,
  allSidebarItems,
  targetWorktreeWorkspaceRoot,
}: {
  allProjectGroups: SidebarProjectGroup[];
  allSidebarItems: SidebarItem[];
  codexHome?: unknown;
  drop: ThreadDropPayload;
  targetWorktreeWorkspaceRoot: unknown;
  threadProjectAssignments?: unknown;
}): { sourceProjectLabel: string } | null {
  if (
    drop.targetContainerId !== "chats" &&
    !drop.targetContainerId.startsWith("project:")
  ) {
    return null;
  }
  const task = allSidebarItems.find((item) => {
    const key = item.task?.key ?? item.key;
    const parsed = typeof key === "string" ? parseSidebarThreadKey(key) : null;
    return parsed?.kind === "local" && parsed.conversationId === drop.threadId;
  })?.task;
  if (task?.kind !== "local") return null;
  const sourceGroup = allProjectGroups.find((group) =>
    group.threadKeys.includes(task.key ?? ""),
  );
  if (sourceGroup == null || sourceGroup.isCodexWorktree !== true) return null;
  if (drop.targetContainerId === "chats") {
    return { sourceProjectLabel: sourceGroup.label };
  }
  const targetProjectId = drop.targetContainerId.slice("project:".length);
  return targetProjectId !== sourceGroup.projectId &&
    targetWorktreeWorkspaceRoot == null
    ? { sourceProjectLabel: sourceGroup.label }
    : null;
}
