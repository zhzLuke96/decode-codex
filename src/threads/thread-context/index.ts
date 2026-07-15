// Restored from ref/webview/assets/thread-context-B0hBrRyZ.js
// Route-scoped thread cwd, host, and host-config context signals.
import { _appScopeC as createComputedSignal } from "../../boundaries/app-scope";
import {
  A as conversationCwdSignal,
  c as remoteProjectsSignal,
  i as codexHomeQuery,
  l as selectedRemoteProjectSignal,
  o as hostConfigByIdSignal,
  T as activeLocalWorkspaceRootSignal,
  u as threadProjectAssignmentsSignal,
  V as conversationHostIdSignal,
  yt as defaultThreadHostIdSignal,
  normalizeHostConfigForWorktreeKey,
} from "../../boundaries/thread-context-inputs.facade";
import { routeScope } from "../../runtime/persisted-signal";
import { resolveWebviewExecutionTarget } from "../../utils/use-webview-execution-target";
import type { RemoteProject } from "../../features/remote-projects";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type ThreadRouteScope =
  | {
      routeKind: "home" | "new-thread-panel";
      projectContext?: ProjectContext | null;
    }
  | {
      conversationId: string;
      routeKind: "local-thread";
      projectContext?: ProjectContext | null;
    }
  | {
      routeKind: "remote-thread" | "chatgpt-thread";
    }
  | {
      routeKind: "other";
    };
type ProjectContext = {
  hostId?: string | null;
  projectId: string;
};
type ThreadProjectAssignment =
  | {
      cwd?: string | null;
      path?: string | null;
      projectKind: "local";
    }
  | {
      hostId?: string | null;
      path: string;
      projectKind: "remote";
    };
type ThreadContext = {
  cwd?: string | null;
  hostId: string | null;
};
function getScopeRoute(scope: unknown): ThreadRouteScope {
  return (
    scope as {
      value: ThreadRouteScope;
    }
  ).value;
}
const threadExecutionContextSignal = createComputedSignal(
  routeScope,
  ({
    get,
    scope,
  }: {
    get: AppScopeGetter["get"];
    scope: unknown;
  }): ThreadContext => {
    const route = getScopeRoute(scope);
    switch (route.routeKind) {
      case "home":
      case "new-thread-panel": {
        const projectContext =
          route.routeKind !== "home" || route.projectContext == null
            ? null
            : resolveProjectContext({
                defaultHostId: get(defaultThreadHostIdSignal, null),
                hostId: route.projectContext.hostId,
                projectId: route.projectContext.projectId,
                remoteProjects: get(remoteProjectsSignal),
              });
        const defaultHostId = get<string | null>(
          defaultThreadHostIdSignal,
          null,
        );
        const { cwd, hostId } = resolveWebviewExecutionTarget({
          activeLocalProjectCwd: get(activeLocalWorkspaceRootSignal),
          conversationCwd: null,
          conversationHostId: null,
          selectedRemoteProject: get(selectedRemoteProjectSignal),
        });
        return {
          cwd: projectContext?.cwd ?? cwd,
          hostId: projectContext?.hostId ?? (hostId || defaultHostId),
        };
      }
      case "local-thread": {
        const assignment = get<
          Record<string, ThreadProjectAssignment> | null | undefined
        >(threadProjectAssignmentsSignal)?.[route.conversationId];
        const projectContext =
          route.projectContext == null
            ? null
            : resolveProjectContext({
                defaultHostId: get(defaultThreadHostIdSignal, null),
                hostId: route.projectContext.hostId,
                projectId: route.projectContext.projectId,
                remoteProjects: get(remoteProjectsSignal),
              });
        return {
          cwd:
            projectContext?.cwd ??
            getProjectAssignmentCwd({
              assignment,
              cwd: get(conversationCwdSignal, route.conversationId),
            }) ??
            get(activeLocalWorkspaceRootSignal),
          hostId:
            projectContext?.hostId ??
            getProjectAssignmentHostId(assignment) ??
            get(conversationHostIdSignal, route.conversationId) ??
            get(defaultThreadHostIdSignal, route.conversationId),
        };
      }
      case "remote-thread":
      case "chatgpt-thread":
        return {
          cwd: null,
          hostId: get(defaultThreadHostIdSignal, null),
        };
      case "other":
        throw Error("Thread context is unavailable for non-thread routes");
    }
  },
);
const threadHostIdSignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) =>
    get<ThreadContext>(threadExecutionContextSignal).hostId,
);
const threadHostConfigSignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) =>
    get(hostConfigByIdSignal, get(threadHostIdSignal)),
);
const threadCodexHomeSignal = createComputedSignal(
  routeScope,
  ({ get, scope }: { get: AppScopeGetter["get"]; scope: unknown }) => {
    switch (getScopeRoute(scope).routeKind) {
      case "home":
      case "new-thread-panel":
      case "local-thread":
      case "remote-thread":
      case "chatgpt-thread":
        return (
          get<{
            data?: {
              codexHome?: string | null;
            };
          }>(codexHomeQuery).data?.codexHome ?? null
        );
      case "other":
        throw Error("Thread context is unavailable for non-thread routes");
    }
  },
);
const threadCwdSignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) =>
    get<ThreadContext>(threadExecutionContextSignal).cwd,
);
const threadHostConfigWorktreeKeySignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) =>
    normalizeHostConfigForWorktreeKey(get(threadHostConfigSignal)),
);
function resolveProjectContext({
  defaultHostId,
  hostId,
  projectId,
  remoteProjects,
}: {
  defaultHostId: string | null;
  hostId?: string | null;
  projectId: string;
  remoteProjects: RemoteProject[];
}): ThreadContext {
  return hostId == null
    ? {
        cwd: projectId,
        hostId: defaultHostId,
      }
    : {
        cwd:
          remoteProjects.find((project) => project.id === projectId)
            ?.remotePath ?? null,
        hostId,
      };
}
function getProjectAssignmentCwd({
  cwd,
  assignment,
}: {
  assignment?: ThreadProjectAssignment | null;
  cwd?: string | null;
}): string | null | undefined {
  if (assignment == null) return cwd;
  switch (assignment.projectKind) {
    case "local":
      return assignment.cwd ?? assignment.path ?? null;
    case "remote":
      return assignment.path;
  }
}
function getProjectAssignmentHostId(
  assignment?: ThreadProjectAssignment | null,
): string | null {
  if (assignment == null) return null;
  switch (assignment.projectKind) {
    case "local":
      return null;
    case "remote":
      return assignment.hostId ?? null;
  }
}
export {
  threadHostConfigWorktreeKeySignal,
  threadHostIdSignal,
  threadCwdSignal,
  threadHostConfigSignal,
  threadCodexHomeSignal,
};
