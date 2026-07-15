// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-14pJ3ozX.js
// Pure helpers for project sidebar collapse, sorting, labels, and task state.

import type {
  PendingThreadDrop,
  ProjectCreationFlow,
  ProjectGroupLike,
  ProjectSourceRow,
  PullRequestStatus,
  SidebarGroupCollapseAction,
  UnknownRecord,
} from "./types";

function asRecord(value: unknown): UnknownRecord | null {
  return value != null && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;
}

function getThreadIdFromKey(threadKey: string): string {
  const parts = threadKey.split(":");
  return parts[parts.length - 1] ?? threadKey;
}

function formatSourceLabel(value: string): string {
  return value.trim().toLocaleLowerCase();
}

function formatProjectLabel(value: string | null | undefined): string {
  return formatSourceLabel(value ?? "");
}

function isPermutation(
  sourceIds: readonly string[],
  nextIds: readonly string[],
): boolean {
  if (sourceIds.length !== nextIds.length) return false;
  const ids = new Set(sourceIds);
  return nextIds.every((id) => ids.has(id));
}

export function getTaskPullRequestStatus(task: unknown): PullRequestStatus {
  const record = asRecord(task);
  const status =
    asRecord(record?.pull_request)?.status ??
    asRecord(record?.pullRequest)?.status ??
    record?.pull_request_status ??
    record?.pullRequestStatus;
  return normalizePullRequestStatus(status);
}

export function createSidebarShortcutLabelMap({
  shortcutKeys,
  shortcutLabels,
}: {
  shortcutKeys: Map<string, string>;
  shortcutLabels: Record<string, string | null | undefined>;
}): Map<string, string> {
  const labels = new Map<string, string>();
  for (const [shortcutId, threadKey] of shortcutKeys.entries()) {
    const label = shortcutLabels[shortcutId];
    if (label != null) labels.set(threadKey, label);
  }
  return labels;
}

export function normalizePullRequestStatus(status: unknown): PullRequestStatus {
  if (
    status === "closed" ||
    status === "draft" ||
    status === "merged" ||
    status === "open"
  ) {
    return status;
  }
  return "unknown";
}

export function getProjectGroupCollapseAction({
  collapsedGroups,
  organizeMode,
  previouslyExpandedGroupIds,
  visibleGroupIds,
}: {
  collapsedGroups: Record<string, boolean>;
  organizeMode: string;
  previouslyExpandedGroupIds: string[];
  visibleGroupIds: string[];
}): SidebarGroupCollapseAction | null {
  const expandedGroupIds = visibleGroupIds.filter((id) => !collapsedGroups[id]);
  if (organizeMode === "recent") return null;
  if (expandedGroupIds.length > 1) return "collapse-all";

  const visibleIds = new Set(visibleGroupIds);
  const visiblePreviouslyExpandedIds = previouslyExpandedGroupIds.filter((id) =>
    visibleIds.has(id),
  );
  return expandedGroupIds.length === 0 &&
    visiblePreviouslyExpandedIds.length > 0
    ? "reopen-previous"
    : null;
}

export function resolveProjectCreationFlow({
  canCreateChatGptProjectDirectly,
  chatGptProjectCreationEnabled,
  directLocalProjectCreationEnabled,
  localProjectsEnabled,
  remoteProjectsEnabled,
}: {
  canCreateChatGptProjectDirectly: boolean;
  chatGptProjectCreationEnabled: boolean;
  directLocalProjectCreationEnabled: boolean;
  localProjectsEnabled: boolean;
  remoteProjectsEnabled: boolean;
}): ProjectCreationFlow {
  if (canCreateChatGptProjectDirectly) return "direct-chatgpt";
  if (
    directLocalProjectCreationEnabled &&
    localProjectsEnabled &&
    !remoteProjectsEnabled &&
    !chatGptProjectCreationEnabled
  ) {
    return "direct-local";
  }
  return localProjectsEnabled ||
    remoteProjectsEnabled ||
    chatGptProjectCreationEnabled
    ? "project-type-dialog"
    : null;
}

export function parsePullRequestNumberFromUrl(
  url: string | null | undefined,
): number | null {
  if (url == null) return null;
  const match = url.match(/\/pull\/(\d+)(?:[/?#]|$)/u);
  return match == null ? null : Number(match[1]);
}

export function applyPendingThreadDropsToContainer({
  containerId,
  pendingThreadDrops,
  threadKeys,
  threadKeysInDisplayOrder,
}: {
  containerId: string;
  pendingThreadDrops: PendingThreadDrop[];
  threadKeys: string[];
  threadKeysInDisplayOrder?: string[] | null;
}): string[] {
  let orderedThreadKeys = threadKeys;
  for (const drop of pendingThreadDrops) {
    const sourceThreadKeys = orderedThreadKeys.includes(drop.threadKey)
      ? orderedThreadKeys.filter((threadKey) => threadKey !== drop.threadKey)
      : orderedThreadKeys;
    if (containerId !== drop.targetContainerId) {
      orderedThreadKeys = sourceThreadKeys;
      continue;
    }

    const beforeIndex =
      drop.beforeThreadId == null
        ? 0
        : sourceThreadKeys.findIndex(
            (threadKey) =>
              getThreadIdFromKey(threadKey) === drop.beforeThreadId,
          );
    const insertIndex =
      beforeIndex === -1 ? sourceThreadKeys.length : beforeIndex;
    orderedThreadKeys = [
      ...sourceThreadKeys.slice(0, insertIndex),
      drop.threadKey,
      ...sourceThreadKeys.slice(insertIndex),
    ];
  }

  if (orderedThreadKeys === threadKeys || threadKeysInDisplayOrder == null) {
    return orderedThreadKeys;
  }

  const orderedSet = new Set(orderedThreadKeys);
  return threadKeysInDisplayOrder.filter((threadKey) =>
    orderedSet.has(threadKey),
  );
}

export function useThreadListDragOrdering(threadKeys: string[]): {
  previousVisibleThreadKeys: string[];
  nextVisibleThreadKeys: string[];
} {
  return {
    nextVisibleThreadKeys: [...threadKeys],
    previousVisibleThreadKeys: [...threadKeys],
  };
}

export function formatProjectHomePath(path: string): string {
  return path.replace(/^\/Users\/[^/]+(?=\/|$)/u, "~");
}

export function useRemoteConnectionStatusSnapshot(_hostId?: string | null): {
  error: unknown;
  state: "connected" | "connecting" | "disconnected" | "error" | null;
} {
  return { error: null, state: null };
}

export function remapPinnedProjectOrder(
  pinnedProjectIds: string[] | null | undefined,
  sourceIds: string[],
  nextIds: string[],
): string[] | null | undefined {
  if (pinnedProjectIds == null || !isPermutation(sourceIds, nextIds)) {
    return pinnedProjectIds;
  }
  const sourceSet = new Set(sourceIds);
  let nextIndex = 0;
  return pinnedProjectIds.map((projectId) => {
    if (!sourceSet.has(projectId)) return projectId;
    const nextProjectId = nextIds[nextIndex];
    nextIndex += 1;
    return nextProjectId ?? projectId;
  });
}

export function getProjectSourceRows(
  group: ProjectGroupLike,
  fallbackPaths: string[] = [],
): ProjectSourceRow[] {
  const rows: ProjectSourceRow[] = [];
  const seen = new Set<string>();
  const addRow = (row: ProjectSourceRow) => {
    const normalized =
      row.kind === "path"
        ? row.value.trim().toLocaleLowerCase()
        : formatProjectLabel(row.value);
    const label = formatProjectLabel(group.label);
    if (normalized === "" || normalized === label || seen.has(normalized)) {
      return;
    }
    seen.add(normalized);
    rows.push(row);
  };

  if (group.projectKind === "remote") {
    addRow({
      hostId: group.hostId ?? null,
      kind: "host",
      value: group.hostDisplayName ?? group.hostId ?? "",
    });
  }

  if (group.repositoryData != null) {
    const ownerRepo = group.repositoryData.ownerRepo;
    addRow({
      kind: "repository",
      value:
        ownerRepo == null
          ? (group.repositoryData.rootFolder ?? "")
          : `${ownerRepo.owner}/${ownerRepo.repoName}`,
    });
  }

  const sourcePaths =
    fallbackPaths.length === 0 && group.path != null
      ? [group.path]
      : fallbackPaths;
  for (const path of sourcePaths) {
    addRow({ allowBreak: true, kind: "path", value: path });
  }
  return rows;
}

export function useStartNewConversationInProject({
  projectId,
  startNewConversation,
}: {
  projectId?: string | null;
  startNewConversation?: (input?: unknown) => unknown;
} = {}): (input?: unknown) => unknown {
  return (input?: unknown) =>
    startNewConversation?.({ ...(asRecord(input) ?? {}), projectId });
}
