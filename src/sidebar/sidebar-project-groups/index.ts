// Restored from ref/webview/assets/sidebar-project-groups-Df1VWnri.js
// sidebar-project-groups-Df1VWnri chunk restored from the Codex webview bundle.
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import {
  isCodexWorktreePath,
  normalizeWorkspacePath as normalizePathForCompare,
} from "../../boundaries/src-l0hb-mz-p";
import {
  findRemoteProjectByPath,
  type RemoteProject,
} from "../../features/remote-projects";
import { parseOwnerRepo } from "../../github/parse-owner-repo";
import { uniq } from "../../utils/uniq";
type OwnerRepo = {
  owner: string;
  repoName: string;
};
type GitOrigin = {
  commonDir?: string | null;
  dir: string;
  originUrl?: string | null;
  root?: string | null;
};
type WorkspaceRootOptions = {
  canonicalPathByRoot?: Record<string, string | undefined> | null;
  labels?: Record<string, string | undefined> | null;
  roots?: string[] | null;
};
type SavedLocalProject = {
  id: string;
  name: string;
  updatedAt?: number;
};
type RemoteConnection = {
  displayName?: string | null;
  hostId: string;
};
type RepositoryData = {
  ownerRepo: OwnerRepo | null;
  repoPath: string;
  rootFolder: string;
};
type SidebarProjectGroup = {
  cloudEnvironment?: CloudEnvironment;
  groupId?: string;
  hostDisplayName?: string | null;
  hostId?: string;
  isCodexWorktree: boolean;
  isLocalProject?: boolean;
  label: string;
  path?: string;
  pathAlias?: string;
  projectId: string;
  projectKind: "local" | "remote";
  projectUpdatedAt?: number;
  repositoryData: RepositoryData | null;
  threadKeys: string[];
};
type ThreadProjectAssignment = {
  hostId?: string | null;
  path?: string | null;
  projectId: string;
  projectKind: "local" | "remote";
};
type LocalSidebarTask = {
  conversationId: string;
  cwd?: string | null;
  hostId?: string | null;
  key: string;
  kind: "local";
  summary?: unknown;
  workspaceKind?: string | null;
};
type RemoteSidebarTask = {
  key: string;
  kind: "remote";
  task: {
    id: string;
    task_status_display?: {
      environment_label?: string | null;
    } | null;
  };
};
type PendingWorktreeSidebarTask = {
  key: string;
  kind: "pending-worktree";
  pendingWorktree: {
    hostId: string;
    id: string;
    sourceWorkspaceRoot?: string | null;
    startConversationParamsInput?: {
      cwd?: string | null;
      workspaceRoots?: string[] | null;
    } | null;
  };
};
type SidebarTask =
  | LocalSidebarTask
  | RemoteSidebarTask
  | PendingWorktreeSidebarTask;
type CloudEnvironment = {
  label?: string | null;
  repo_map?: Record<
    string,
    {
      clone_url?: string | null;
    }
  > | null;
  repos?: string[] | null;
};
type WorkspaceRootDirsByHost = {
  dirs: string[];
  hostId: string;
};
type AttachThreadOptions = {
  enabledRemoteHostIds?: Set<string>;
  gitOriginsByHostId?: Record<string, GitOrigin[] | undefined> | null;
  onDiscoverThreadWorkspaceRootHint?: (
    conversationId: string,
    workspaceRoot: string,
  ) => void;
  primaryHostId?: string;
  projectlessThreadIds?: Set<string>;
  remoteProjects?: RemoteProject[] | null;
  threadProjectAssignments?: Record<
    string,
    ThreadProjectAssignment | undefined
  > | null;
  threadWorkspaceRootHints?: Record<string, string | undefined> | null;
};
const missingRemoteOwnerRepoWarnings = new Set<string>();
export function findGitOriginForDirectory(
  directory: string,
  gitOrigins: GitOrigin[] | null | undefined,
) {
  const normalizedDirectory = normalizePathForCompare(directory).replace(
    /\/+$/,
    "",
  );
  return (
    gitOrigins?.find(
      (origin) =>
        normalizePathForCompare(origin.dir).replace(/\/+$/, "") ===
        normalizedDirectory,
    ) ?? null
  );
}
export function splitPinnedProjectGroups(
  groups: SidebarProjectGroup[],
  pinnedProjectIds: string[] | null | undefined,
) {
  const pinnedIds = new Set(pinnedProjectIds);
  const pinnedOrder = new Map(
    (pinnedProjectIds ?? []).map((projectId, index) => [projectId, index]),
  );
  const pinnedGroups: SidebarProjectGroup[] = [];
  const unpinnedGroups: SidebarProjectGroup[] = [];
  for (const group of groups) {
    if (pinnedIds.has(group.projectId)) pinnedGroups.push(group);
    else unpinnedGroups.push(group);
  }
  pinnedGroups.sort(
    (left, right) =>
      (pinnedOrder.get(left.projectId) ?? Number.MAX_SAFE_INTEGER) -
      (pinnedOrder.get(right.projectId) ?? Number.MAX_SAFE_INTEGER),
  );
  return {
    pinnedGroups,
    unpinnedGroups,
  };
}
export function createAggregatorModule() {
  return function createAggregator<TValue, TKey extends PropertyKey, TAcc>(
    setter: (
      accumulator: TAcc,
      value: TValue,
      key: TKey,
      collection: unknown,
    ) => void,
    initializer?: () => TAcc,
  ) {
    return function aggregate(
      collection: ArrayLike<TValue> | Record<PropertyKey, TValue> | null,
      iteratee: ((value: TValue) => TKey) | keyof TValue,
    ) {
      const accumulator = initializer ? initializer() : ({} as TAcc);
      const iterateeFn =
        typeof iteratee === "function"
          ? iteratee
          : (value: TValue) => value[iteratee] as TKey;
      if (collection == null) return accumulator;
      for (const value of Array.isArray(collection)
        ? collection
        : Object.values(collection)) {
        setter(accumulator, value, iterateeFn(value), collection);
      }
      return accumulator;
    };
  };
}
export function baseAssignValueModule() {
  return function baseAssignValue(
    object: Record<PropertyKey, unknown>,
    key: PropertyKey,
    value: unknown,
  ) {
    if (key === "__proto__" && Object.defineProperty) {
      Object.defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  };
}
export function createWorkspaceRootProjectGroups(
  workspaceRootOptions: WorkspaceRootOptions | null | undefined,
  gitOrigins: GitOrigin[] | null | undefined,
  codexHome: string | null | undefined,
) {
  const canonicalPathGroups = groupBy(
    Object.values(workspaceRootOptions?.canonicalPathByRoot ?? {}),
    (path) => normalizePathForCompare(path ?? ""),
  );
  const gitOriginByDir = Object.fromEntries(
    (gitOrigins ?? []).map((origin) => [
      normalizePathForCompare(origin.dir),
      origin,
    ]),
  );
  return (workspaceRootOptions?.roots ?? []).map((root) => {
    const normalizedRoot = normalizePathForCompare(root);
    const canonicalPath = workspaceRootOptions?.canonicalPathByRoot?.[root];
    const normalizedCanonicalPath = normalizePathForCompare(
      canonicalPath ?? root,
    );
    const pathAlias =
      canonicalPath != null &&
      normalizedCanonicalPath !== normalizedRoot &&
      canonicalPathGroups.get(normalizedCanonicalPath)?.length === 1
        ? canonicalPath
        : undefined;
    const label =
      (
        workspaceRootOptions?.labels?.[root] ??
        workspaceRootOptions?.labels?.[normalizedRoot] ??
        ""
      ).trim() || getPathBasename(root);
    const gitOrigin = gitOriginByDir[normalizedRoot] ?? undefined;
    const ownerRepo = gitOrigin?.originUrl
      ? parseOwnerRepo(gitOrigin.originUrl)
      : null;
    return {
      projectId: root,
      projectKind: "local" as const,
      label,
      path: root,
      ...(pathAlias == null
        ? {}
        : {
            pathAlias,
          }),
      repositoryData:
        gitOrigin && isRepositoryGitOrigin(gitOrigin)
          ? {
              ownerRepo,
              repoPath: getRepoPathInsideRoot(root, gitOrigins).join("/"),
              rootFolder: getPathBasename(gitOrigin.root ?? ""),
            }
          : null,
      isCodexWorktree: isCodexWorktreePath(root, codexHome),
      threadKeys: [],
    };
  });
}
export function filterHiddenProjectGroupThreads({
  groups,
  hiddenTaskKeys,
}: {
  groups: SidebarProjectGroup[];
  hiddenTaskKeys: Set<string>;
}) {
  return hiddenTaskKeys.size === 0
    ? groups
    : groups.flatMap((group) => {
        if (group.threadKeys.length === 0) return [group];
        return [
          {
            ...group,
            threadKeys: group.threadKeys.filter(
              (threadKey) => !hiddenTaskKeys.has(threadKey),
            ),
          },
        ];
      });
}
export function createRemoteProjectGroups(
  remoteProjects: RemoteProject[],
  remoteConnections: RemoteConnection[],
) {
  const hostDisplayNameById = new Map(
    remoteConnections.map((connection) => [
      connection.hostId,
      connection.displayName,
    ]),
  );
  return remoteProjects.map((project) => ({
    groupId: project.id,
    projectId: project.id,
    projectKind: "remote" as const,
    hostId: project.hostId,
    hostDisplayName: hostDisplayNameById.get(project.hostId) ?? null,
    label: String(project.label ?? ""),
    path: project.remotePath,
    repositoryData: null,
    isCodexWorktree: false,
    threadKeys: [],
  }));
}
export function subtractWorkspaceRootDirs(
  requestedDirsByHost: WorkspaceRootDirsByHost[],
  alreadyLoadedDirsByHost: WorkspaceRootDirsByHost[],
) {
  const loadedDirsByHost = new Map(
    alreadyLoadedDirsByHost.map(({ hostId, dirs }) => [
      hostId,
      new Set(dirs.map(normalizePathForCompare)),
    ]),
  );
  return requestedDirsByHost
    .map(({ hostId, dirs }) => ({
      hostId,
      dirs: dirs.filter(
        (directory) =>
          !loadedDirsByHost
            .get(hostId)
            ?.has(normalizePathForCompare(directory)),
      ),
    }))
    .filter(({ dirs }) => dirs.length > 0);
}
export function attachThreadsToProjectGroups(
  tasks: SidebarTask[],
  cloudEnvironments: CloudEnvironment[] | null | undefined,
  groups: SidebarProjectGroup[],
  gitOrigins: GitOrigin[] | null | undefined,
  codexHome: string | null | undefined,
  options?: AttachThreadOptions,
) {
  const ownerRepoByPendingWorktreeRoot = Object.fromEntries(
    (gitOrigins ?? []).flatMap(({ dir, originUrl }) => {
      const ownerRepo = originUrl ? parseOwnerRepo(originUrl) : null;
      return ownerRepo ? [[normalizePathForCompare(dir), ownerRepo]] : [];
    }),
  );
  const cloudEnvironmentByLabel = groupBy(
    cloudEnvironments ?? [],
    (environment) => environment.label ?? "",
  );
  const localGroupByPath = new Map<string, SidebarProjectGroup>();
  for (const group of groups) {
    if (group.projectKind === "local" && hasGroupPath(group)) {
      localGroupByPath.set(normalizePathForCompare(group.path), group);
    }
  }
  for (const group of groups) {
    if (
      group.projectKind !== "local" ||
      !hasGroupPath(group) ||
      group.pathAlias == null
    ) {
      continue;
    }
    const normalizedAlias = normalizePathForCompare(group.pathAlias);
    if (!localGroupByPath.has(normalizedAlias)) {
      localGroupByPath.set(normalizedAlias, group);
    }
  }
  for (const task of tasks) {
    if (task.kind === "local") {
      attachLocalThreadToProjectGroup(
        task,
        groups,
        localGroupByPath,
        gitOrigins,
        codexHome,
        options?.gitOriginsByHostId,
        options?.primaryHostId,
        options,
      );
    } else if (task.kind === "remote") {
      const assignedGroup = findProjectGroupForAssignment(
        options?.threadProjectAssignments?.[task.task.id],
        groups,
      );
      if (assignedGroup != null) {
        assignedGroup.threadKeys.push(task.key);
      } else if (options?.projectlessThreadIds?.has(task.task.id) !== true) {
        attachRemoteThreadToProjectGroup(task, cloudEnvironmentByLabel, groups);
      }
    } else {
      attachPendingWorktreeToProjectGroup(
        task,
        ownerRepoByPendingWorktreeRoot,
        groups,
        localGroupByPath,
      );
    }
  }
  return groups;
}
export function collectWorkspaceRootDirsForTasks(
  tasks: SidebarTask[],
  primaryHostId: string,
  workspaceRoots: string[] | null | undefined,
  remoteProjects: RemoteProject[],
  codexHome?: string | null,
) {
  const remoteHostIds = new Set(
    remoteProjects.map((project) => project.hostId),
  );
  const dirsByHost = new Map<string, string[]>([
    [primaryHostId, (workspaceRoots ?? []).filter((root) => root !== "~")],
  ]);
  const addDir = (hostId: string, directory: string) => {
    const dirs = dirsByHost.get(hostId);
    dirsByHost.set(hostId, dirs == null ? [directory] : [...dirs, directory]);
  };
  for (const task of tasks) {
    if (task.kind === "local") {
      if (
        (task.summary != null && !isCodexWorktreePath(task.cwd, codexHome)) ||
        task.workspaceKind === "projectless" ||
        task.cwd === "~"
      ) {
        continue;
      }
      const hostId = task.hostId ?? primaryHostId;
      if (
        !task.cwd ||
        (hostId !== primaryHostId && !remoteHostIds.has(hostId))
      ) {
        continue;
      }
      addDir(hostId, task.cwd);
    } else if (task.kind === "pending-worktree") {
      const hostId = task.pendingWorktree.hostId;
      const sourceRoot = task.pendingWorktree.sourceWorkspaceRoot;
      if (
        !sourceRoot ||
        (hostId !== primaryHostId && !remoteHostIds.has(hostId))
      ) {
        continue;
      }
      addDir(hostId, sourceRoot);
    }
  }
  for (const project of remoteProjects) {
    addDir(project.hostId, project.remotePath);
  }
  return Array.from(dirsByHost.entries())
    .map(([hostId, dirs]) => ({
      hostId,
      dirs: uniq(dirs).sort((left, right) => left.localeCompare(right)),
    }))
    .filter(({ hostId, dirs }) => hostId === primaryHostId || dirs.length > 0);
}
export function createSavedLocalProjectGroups(
  localProjects: Record<string, SavedLocalProject | undefined> | null,
) {
  return Object.values(localProjects ?? {}).flatMap((project) =>
    project == null
      ? []
      : [
          {
            isCodexWorktree: false,
            isLocalProject: true,
            label: project.name.trim() || project.id,
            projectUpdatedAt: project.updatedAt,
            projectId: project.id,
            projectKind: "local" as const,
            repositoryData: null,
            threadKeys: [],
          },
        ],
  );
}
export function orderProjectGroups(
  groups: SidebarProjectGroup[],
  projectOrder: string[] | null | undefined,
) {
  const orderedProjectIds = getProjectOrderIds(groups, projectOrder);
  const orderByProjectId = new Map(
    orderedProjectIds.map((projectId, index) => [projectId, index]),
  );
  return [...groups].sort(
    (left, right) =>
      (orderByProjectId.get(left.projectId) ?? Number.MAX_SAFE_INTEGER) -
      (orderByProjectId.get(right.projectId) ?? Number.MAX_SAFE_INTEGER),
  );
}
function getProjectOrderIds(
  groups: SidebarProjectGroup[],
  projectOrder: string[] | null | undefined,
) {
  const projectIds = new Set(groups.map((group) => group.projectId));
  const existingOrderedIds = (projectOrder ?? []).filter((projectId) =>
    projectIds.has(projectId),
  );
  const orderedIds = new Set(existingOrderedIds);
  return [
    ...groups
      .map((group) => group.projectId)
      .filter((projectId) => !orderedIds.has(projectId)),
    ...existingOrderedIds,
  ];
}
function isRepositoryGitOrigin(gitOrigin: GitOrigin) {
  return gitOrigin.originUrl != null || gitOrigin.commonDir != null;
}
function getRepoPathInsideRoot(
  directory: string,
  gitOrigins: GitOrigin[] | null | undefined,
) {
  const origin = findGitOriginForDirectory(directory, gitOrigins ?? []);
  if (!origin?.root) return [];
  const directoryParts = splitPathSegments(normalizePathForCompare(directory));
  const rootParts = splitPathSegments(normalizePathForCompare(origin.root));
  return directoryParts.slice(rootParts.length);
}
function splitPathSegments(path: string) {
  return path.split(/[/\\]+/).filter(Boolean);
}
function getPathBasename(path: string) {
  return splitPathSegments(path).at(-1) ?? "";
}
function hasGroupPath(
  group: SidebarProjectGroup,
): group is SidebarProjectGroup & {
  path: string;
} {
  return group.path != null;
}
function getLocalGroupByPath(
  groupsByPath: Map<string, SidebarProjectGroup>,
  path: string,
) {
  return groupsByPath.get(normalizePathForCompare(path)) ?? null;
}
function hasExactLocalGroupPath(
  groupsByPath: Map<string, SidebarProjectGroup>,
  path: string,
) {
  return groupsByPath.has(normalizePathForCompare(path));
}
function attachLocalThreadToProjectGroup(
  task: LocalSidebarTask,
  groups: SidebarProjectGroup[],
  localGroupByPath: Map<string, SidebarProjectGroup>,
  gitOrigins: GitOrigin[] | null | undefined,
  codexHome: string | null | undefined,
  gitOriginsByHostId:
    | Record<string, GitOrigin[] | undefined>
    | null
    | undefined,
  primaryHostId = LOCAL_HOST_ID,
  options?: AttachThreadOptions,
) {
  const cwd = task.cwd;
  if (!cwd || splitPathSegments(cwd).length === 0) {
    vscodeLogger.warning("No cwd found for local task", {
      safe: {
        conversationId: task.conversationId,
      },
      sensitive: {},
    });
    return;
  }
  let projectPath = cwd;
  const hostId = task.hostId;
  const assignedGroup = findProjectGroupForAssignment(
    options?.threadProjectAssignments?.[task.conversationId],
    groups,
  );
  if (assignedGroup != null) {
    assignedGroup.threadKeys.push(task.key);
    return;
  }
  if (
    task.workspaceKind === "projectless" ||
    options?.projectlessThreadIds?.has(task.conversationId) === true
  ) {
    return;
  }
  const isRemoteHost = hostId != null && hostId !== LOCAL_HOST_ID;
  const remoteProjects = options?.remoteProjects;
  if (
    isRemoteHost &&
    ((options?.enabledRemoteHostIds &&
      !options.enabledRemoteHostIds.has(hostId)) ||
      !remoteProjects?.some((project) => project.hostId === hostId))
  ) {
    return;
  }
  const hostGitOrigins = getGitOriginsForHost({
    gitOrigins,
    gitOriginsByHostId,
    hostId: hostId ?? undefined,
    primaryHostId,
  });
  if (
    isCodexWorktreePath(cwd, codexHome) ||
    (isRemoteHost && isWorktreeWithSeparateGitDir(cwd, hostGitOrigins))
  ) {
    const discoveredPath = discoverWorkspaceRootForThread(
      cwd,
      task.conversationId,
      groups,
      localGroupByPath,
      hostGitOrigins,
      options?.threadWorkspaceRootHints,
      task.summary != null,
    );
    if (discoveredPath) projectPath = discoveredPath;
  }
  const remoteProject =
    remoteProjects == null
      ? null
      : findRemoteProjectByPath(
          remoteProjects,
          hostId ?? undefined,
          projectPath,
        );
  if (remoteProject != null) {
    const remoteGroup =
      groups.find((group) => group.projectId === remoteProject.id) ?? null;
    if (remoteGroup != null) {
      remoteGroup.threadKeys.push(task.key);
      return;
    }
  }
  if (isRemoteHost) return;
  const localGroup = getLocalGroupByPath(localGroupByPath, projectPath);
  if (localGroup != null) {
    localGroup.threadKeys.push(task.key);
    if (projectPath !== cwd) {
      options?.onDiscoverThreadWorkspaceRootHint?.(
        task.conversationId,
        localGroup.path,
      );
    }
  }
}
function findProjectGroupForAssignment(
  assignment: ThreadProjectAssignment | null | undefined,
  groups: SidebarProjectGroup[],
) {
  if (assignment == null) return null;
  return (
    groups.find((group) => {
      if (
        group.projectId !== assignment.projectId ||
        group.projectKind !== assignment.projectKind
      ) {
        return false;
      }
      return assignment.projectKind === "local"
        ? true
        : group.hostId === assignment.hostId && group.path === assignment.path;
    }) ?? null
  );
}
function getGitOriginsForHost({
  gitOrigins,
  gitOriginsByHostId,
  hostId,
  primaryHostId,
}: {
  gitOrigins?: GitOrigin[] | null;
  gitOriginsByHostId?: Record<string, GitOrigin[] | undefined> | null;
  hostId?: string;
  primaryHostId: string;
}) {
  return hostId && gitOriginsByHostId?.[hostId]
    ? gitOriginsByHostId[hostId]
    : hostId && gitOriginsByHostId && hostId !== primaryHostId
      ? []
      : (gitOrigins ?? []);
}
function isWorktreeWithSeparateGitDir(
  directory: string,
  gitOrigins: GitOrigin[] | null | undefined,
) {
  const origin = findGitOriginForDirectory(directory, gitOrigins ?? []);
  return origin?.commonDir
    ? normalizePathForCompare(origin.commonDir).replace(/\/+$/, "") !==
        `${normalizePathForCompare(origin.root ?? "").replace(/\/+$/, "")}/.git`
    : false;
}
function discoverWorkspaceRootForThread(
  directory: string,
  conversationId: string,
  groups: SidebarProjectGroup[],
  localGroupByPath: Map<string, SidebarProjectGroup>,
  gitOrigins: GitOrigin[] | null | undefined,
  threadWorkspaceRootHints?: Record<string, string | undefined> | null,
  allowHintFallback = false,
) {
  if (hasExactLocalGroupPath(localGroupByPath, directory)) return null;
  const hintedPath = threadWorkspaceRootHints?.[conversationId];
  const hintedGroup = hintedPath
    ? getLocalGroupByPath(localGroupByPath, hintedPath)
    : null;
  if (!gitOrigins) return hintedGroup?.path ?? null;
  const gitOrigin = findGitOriginForDirectory(directory, gitOrigins);
  if (!gitOrigin) return hintedGroup?.path ?? null;
  const originUrl = gitOrigin.originUrl ?? null;
  const commonDir = gitOrigin.commonDir ?? null;
  if (!originUrl && !commonDir) return hintedGroup?.path ?? null;
  const matchesOrigin = (origin: GitOrigin | null) =>
    origin
      ? originUrl
        ? origin.originUrl === originUrl
        : origin.commonDir === commonDir
      : false;
  const normalizedDirectory = normalizePathForCompare(directory);
  const repoPath = getRepoPathInsideRoot(directory, gitOrigins).join("/");
  const repositoryGroups = groups.flatMap((group) => {
    if (!hasGroupPath(group)) return [];
    const normalizedGroupPath = normalizePathForCompare(group.path);
    if (group.isCodexWorktree && normalizedDirectory !== normalizedGroupPath) {
      return [];
    }
    const groupOrigin = findGitOriginForDirectory(group.path, gitOrigins);
    return groupOrigin != null && matchesOrigin(groupOrigin) ? [group] : [];
  });
  const exactRepoPathGroups = repositoryGroups.filter(
    (group) => group.repositoryData?.repoPath === repoPath,
  );
  const rootFolder = getPathBasename(gitOrigin.root ?? "");
  return (
    findOnlyGroupWithRootFolder(exactRepoPathGroups, rootFolder)?.path ??
    exactRepoPathGroups[0]?.path ??
    (hintedGroup && repositoryGroups.includes(hintedGroup)
      ? hintedGroup.path
      : null) ??
    findOnlyGroupWithRootFolder(
      repositoryGroups.filter((group) => group.repositoryData?.repoPath === ""),
      rootFolder,
    )?.path ??
    repositoryGroups.find((group) => group.repositoryData?.repoPath === "")
      ?.path ??
    repositoryGroups[0]?.path ??
    (allowHintFallback ? (hintedGroup?.path ?? null) : null)
  );
}
function findOnlyGroupWithRootFolder(
  groups: SidebarProjectGroup[],
  rootFolder: string,
) {
  const matches = groups.filter(
    (group) => group.repositoryData?.rootFolder === rootFolder,
  );
  return matches.length === 1 ? matches[0] : null;
}
function attachPendingWorktreeToProjectGroup(
  task: PendingWorktreeSidebarTask,
  ownerRepoByPendingWorktreeRoot: Record<string, OwnerRepo | undefined>,
  groups: SidebarProjectGroup[],
  localGroupByPath: Map<string, SidebarProjectGroup>,
) {
  const pendingWorktree = task.pendingWorktree;
  const originalRoot =
    pendingWorktree.startConversationParamsInput?.workspaceRoots?.[0] ??
    pendingWorktree.startConversationParamsInput?.cwd ??
    pendingWorktree.sourceWorkspaceRoot;
  if (!originalRoot) {
    vscodeLogger.warning(
      "No original clone cwd found for pending worktree task",
      {
        safe: {
          pendingWorktreeId: pendingWorktree.id,
        },
        sensitive: {},
      },
    );
    return;
  }
  const ownerRepo =
    ownerRepoByPendingWorktreeRoot[normalizePathForCompare(originalRoot)] ??
    null;
  const group =
    pendingWorktree.hostId === LOCAL_HOST_ID
      ? getLocalGroupByPath(localGroupByPath, originalRoot)
      : (groups.find(
          (candidate) =>
            candidate.projectKind === "remote" &&
            candidate.hostId === pendingWorktree.hostId &&
            normalizePathForCompare(candidate.path ?? "") ===
              normalizePathForCompare(originalRoot),
        ) ?? null);
  if (
    group != null &&
    (!ownerRepo ||
      group.repositoryData?.ownerRepo == null ||
      isSameOwnerRepo(group.repositoryData.ownerRepo, ownerRepo))
  ) {
    group.threadKeys.push(task.key);
  }
}
function attachRemoteThreadToProjectGroup(
  task: RemoteSidebarTask,
  cloudEnvironmentByLabel: Map<string, CloudEnvironment[]>,
  groups: SidebarProjectGroup[],
) {
  const cloudEnvironment = getCloudEnvironmentForTask(
    task,
    cloudEnvironmentByLabel,
  );
  const ownerRepo = getCloudEnvironmentOwnerRepo(cloudEnvironment);
  if (!ownerRepo) {
    if (!missingRemoteOwnerRepoWarnings.has(task.task.id)) {
      missingRemoteOwnerRepoWarnings.add(task.task.id);
      vscodeLogger.warning("No owner repo found for remote task", {
        safe: {
          taskId: task.task.id,
        },
        sensitive: {},
      });
    }
    return;
  }
  const repoName = ownerRepo.repoName.toLowerCase();
  const group =
    groups.find(
      (candidate) =>
        isSameOwnerRepo(candidate.repositoryData?.ownerRepo, ownerRepo) &&
        candidate.repositoryData?.repoPath === "" &&
        candidate.repositoryData?.rootFolder?.toLowerCase() === repoName,
    ) ??
    groups.find((candidate) =>
      isSameOwnerRepo(candidate.repositoryData?.ownerRepo, ownerRepo),
    ) ??
    createCloudProjectGroup(ownerRepo, cloudEnvironment, groups);
  group.threadKeys.push(task.key);
}
function createCloudProjectGroup(
  ownerRepo: OwnerRepo,
  cloudEnvironment: CloudEnvironment | null,
  groups: SidebarProjectGroup[],
) {
  const group = {
    projectId: `cloud:${ownerRepo.owner}/${ownerRepo.repoName}`,
    projectKind: "remote" as const,
    cloudEnvironment: cloudEnvironment ?? undefined,
    label: ownerRepo.repoName,
    path: `${ownerRepo.owner}/${ownerRepo.repoName}`,
    repositoryData: {
      ownerRepo,
      repoPath: "",
      rootFolder: ownerRepo.repoName,
    },
    isCodexWorktree: false,
    threadKeys: [],
  };
  groups.push(group);
  return group;
}
function getCloudEnvironmentForTask(
  task: RemoteSidebarTask,
  cloudEnvironmentByLabel: Map<string, CloudEnvironment[]>,
) {
  const label = task.task.task_status_display?.environment_label;
  return label ? (cloudEnvironmentByLabel.get(label)?.[0] ?? null) : null;
}
function getCloudEnvironmentOwnerRepo(environment: CloudEnvironment | null) {
  if (!environment) return null;
  const repo = environment.repos?.[0];
  const cloneUrl = repo ? environment.repo_map?.[repo]?.clone_url : null;
  return cloneUrl ? (parseOwnerRepo(cloneUrl) ?? null) : null;
}
function isSameOwnerRepo(
  left: OwnerRepo | null | undefined,
  right: OwnerRepo | null | undefined,
) {
  return Boolean(
    left &&
      right &&
      left.owner === right.owner &&
      left.repoName === right.repoName,
  );
}
function groupBy<TValue, TKey>(
  values: Iterable<TValue>,
  getKey: (value: TValue) => TKey,
) {
  const groups = new Map<TKey, TValue[]>();
  for (const value of values) {
    const key = getKey(value);
    const group = groups.get(key);
    if (group) group.push(value);
    else groups.set(key, [value]);
  }
  return groups;
}
