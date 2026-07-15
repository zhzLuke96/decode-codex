// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Route/workspace context defaults for review-related modules.
import { appScopeL, appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { normalizePath } from "../runtime/path-helpers-runtime";

type ThreadContext = {
  cwd: string | null;
  hostId: string | null;
  projectAssignment?: unknown;
  projectlessOutputDirectory?: string | null;
  workspaceRoots?: string[];
};

type ProjectlessInput = {
  activeLocalProjectCwd?: string | null;
  conversationCwd?: string | null;
  conversationHostId?: string | null;
  selectedRemoteProject?: {
    hostId?: string | null;
    path?: string | null;
    remotePath?: string | null;
  } | null;
};

export const defaultHostIdAtom = appScopeUnderscore(
  appScopeRoot,
  () => LOCAL_HOST_ID,
);
export const remoteProjectsAtom = appScopeUnderscore(appScopeRoot, () => []);
export const activeLocalProjectCwdAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const selectedRemoteProjectAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const clientLocalCwdAtom = appScopeUnderscore(appScopeRoot, () => null);
export const clientLocalWorkspaceRootsQueryAtom = appScopeUnderscore(
  appScopeRoot,
  () => ({ data: { roots: [] }, isError: false }),
);
export const conversationAssignmentsAtom = appScopeUnderscore(
  appScopeRoot,
  () => ({}),
);
export const conversationCwdAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const conversationWorkspaceStateAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const localProjectRootsAtom = appScopeUnderscore(
  appScopeRoot,
  () => [],
);
export const serverConfigQueryAtom = appScopeUnderscore(appScopeRoot, () => ({
  data: null,
  isError: false,
  isLoading: false,
  isPending: false,
}));
export const workspaceRootsQueryAtom = appScopeUnderscore(appScopeRoot, () => ({
  data: { roots: [] },
  isError: false,
  isLoading: false,
  isPending: false,
}));
export const codexHomeQueryAtom = appScopeUnderscore(appScopeRoot, () => ({
  data: null,
  isError: false,
  isLoading: false,
  isPending: false,
}));

export const hostConfigByIdAtom = appScopeL(appScopeRoot, (hostId) => ({
  id: typeof hostId === "string" && hostId.length > 0 ? hostId : LOCAL_HOST_ID,
  kind: hostId === LOCAL_HOST_ID || hostId == null ? "local" : "remote",
}));
export const hostConfigAtom = hostConfigByIdAtom;

export function resolveHostConfig(
  hostIdOrConfig?: string | { id?: string; hostId?: string; kind?: string } | null,
  hostConfigs?: Array<{ id?: string; hostId?: string; kind?: string }> | null,
): { id: string; kind: string } & Record<string, unknown> {
  if (hostIdOrConfig && typeof hostIdOrConfig === "object") {
    const id = hostIdOrConfig.id ?? hostIdOrConfig.hostId ?? LOCAL_HOST_ID;
    return {
      ...hostIdOrConfig,
      id,
      kind: hostIdOrConfig.kind ?? (id === LOCAL_HOST_ID ? "local" : "remote"),
    };
  }

  const hostId =
    typeof hostIdOrConfig === "string" && hostIdOrConfig.length > 0
      ? hostIdOrConfig
      : LOCAL_HOST_ID;
  const configured = hostConfigs?.find(
    (hostConfig) => hostConfig.id === hostId || hostConfig.hostId === hostId,
  );
  if (configured != null) return resolveHostConfig(configured);
  return {
    id: hostId,
    kind: hostId === LOCAL_HOST_ID ? "local" : "remote",
  };
}

export const hostConfigForHostId = resolveHostConfig;

export function resolveHostConfigId(hostConfig: unknown): string {
  if (typeof hostConfig === "string") return hostConfig;
  if (hostConfig && typeof hostConfig === "object") {
    const record = hostConfig as Record<string, unknown>;
    return String(record.id ?? record.hostId ?? LOCAL_HOST_ID);
  }
  return LOCAL_HOST_ID;
}

export function useHostConfig(
  hostIdOrConfig?: string | { id?: string; hostId?: string; kind?: string } | null,
) {
  return resolveHostConfig(hostIdOrConfig);
}

export function readHostConfigValue(
  getOrKey:
    | ((signal: unknown, key?: string) => unknown)
    | string
    | { key?: string },
  keyOrFallback?: string | { key?: string } | unknown,
  fallback?: unknown,
): unknown {
  if (typeof getOrKey === "function") {
    const key =
      typeof keyOrFallback === "string"
        ? keyOrFallback
        : typeof keyOrFallback === "object" &&
            keyOrFallback != null &&
            "key" in keyOrFallback
          ? keyOrFallback.key
          : undefined;
    return key == null ? fallback : (getOrKey(hostConfigAtom, key) ?? fallback);
  }
  if (typeof getOrKey === "object" && getOrKey != null) {
    return getOrKey.key ?? keyOrFallback ?? fallback;
  }
  return keyOrFallback ?? fallback;
}

export const gitCliAvailabilityQueryAtom = appScopeUnderscore(
  appScopeRoot,
  () => ({
    data: { available: true },
    isError: false,
    isLoading: false,
    isPending: false,
  }),
);

function normalizeOptionalPath(path: string | null | undefined): string | null {
  return path == null || path.trim() === "" ? null : normalizePath(path);
}

export function resolveAssignmentCwd({
  assignment,
  cwd,
}: {
  assignment?: Record<string, unknown> | null;
  cwd?: string | null;
}): string | null {
  const assignedPath =
    typeof assignment?.path === "string"
      ? assignment.path
      : typeof assignment?.cwd === "string"
        ? assignment.cwd
        : null;
  return normalizeOptionalPath(assignedPath ?? cwd ?? null);
}

export function resolveAssignmentHostId(
  assignment?: Record<string, unknown> | null,
): string | null {
  return typeof assignment?.hostId === "string"
    ? assignment.hostId
    : typeof assignment?.host_id === "string"
      ? assignment.host_id
      : null;
}

function resolveProjectlessFromObject(input: ProjectlessInput): ThreadContext {
  const remotePath = normalizeOptionalPath(
    input.selectedRemoteProject?.remotePath ??
      input.selectedRemoteProject?.path ??
      null,
  );
  if (remotePath != null) {
    return {
      cwd: remotePath,
      hostId: input.selectedRemoteProject?.hostId ?? null,
      workspaceRoots: [remotePath],
    };
  }
  const cwd = normalizeOptionalPath(
    input.conversationCwd ?? input.activeLocalProjectCwd ?? null,
  );
  return {
    cwd,
    hostId: input.conversationHostId ?? LOCAL_HOST_ID,
    workspaceRoots: cwd == null ? [] : [cwd],
  };
}

export function resolveProjectlessThreadContext(
  input: ProjectlessInput,
): ThreadContext;
export function resolveProjectlessThreadContext(
  workspaceRoots: string[],
  options?: { directoryName?: string | null },
): ThreadContext;
export function resolveProjectlessThreadContext(
  inputOrWorkspaceRoots: ProjectlessInput | string[],
  options: { directoryName?: string | null } = {},
): ThreadContext {
  if (!Array.isArray(inputOrWorkspaceRoots)) {
    return resolveProjectlessFromObject(inputOrWorkspaceRoots);
  }
  const baseRoot = normalizeOptionalPath(inputOrWorkspaceRoots[0] ?? null);
  const directoryName = options.directoryName?.trim();
  const cwd =
    baseRoot == null
      ? null
      : directoryName == null || directoryName === ""
        ? baseRoot
        : normalizePath(`${baseRoot}/${directoryName}`);
  return {
    cwd,
    hostId: LOCAL_HOST_ID,
    projectlessOutputDirectory: cwd,
    workspaceRoots: cwd == null ? [] : [cwd],
  };
}

export function isCodexWorktreePath(
  cwd: string | null | undefined,
  codexHome?: string | null,
): boolean {
  if (cwd == null || codexHome == null) return false;
  const normalizedCwd = normalizePath(cwd);
  const normalizedHome = normalizePath(codexHome).replace(/\/+$/u, "");
  return normalizedCwd.startsWith(`${normalizedHome}/`);
}

export function isUsableCwd(cwd: string | null | undefined): cwd is string {
  return cwd != null && cwd.trim() !== "";
}
