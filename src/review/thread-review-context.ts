// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the working directory / host config for the review diff model from the
// active route (home, new-thread-panel, client-local / local / remote / chatgpt thread).

import { createComputedAtom } from "../runtime/onboarding-scope-runtime";
import {
  conversationHostIdAtom,
  getHostKey,
  threadAtomScope,
} from "../runtime/onboarding-common-runtime";
import {
  activeLocalProjectCwdAtom,
  clientLocalCwdAtom,
  clientLocalWorkspaceRootsQueryAtom,
  conversationAssignmentsAtom,
  conversationCwdAtom,
  defaultHostIdAtom,
  hostConfigByIdAtom,
  remoteProjectsAtom,
  resolveAssignmentCwd,
  resolveAssignmentHostId,
  resolveProjectlessThreadContext,
  selectedRemoteProjectAtom,
  serverConfigQueryAtom,
} from "./review-route-runtime";

interface ComputedAtomContext {
  get: (atom: unknown, arg?: unknown) => any;
  scope: { value: any };
}

interface ThreadContext {
  cwd: string | null;
  hostId: string | null;
}

interface RemoteProject {
  id: string;
  remotePath: string | null;
}

// Resolves cwd/host for a route that carries an explicit project context (a selected
// remote project resolves to its remote path; a bare projectId is treated as the cwd).
export function resolveProjectThreadContext({
  defaultHostId,
  hostId,
  projectId,
  remoteProjects,
}: {
  defaultHostId: string | null;
  hostId: string | null;
  projectId: string;
  remoteProjects: RemoteProject[];
}): ThreadContext {
  return hostId == null
    ? { cwd: projectId, hostId: defaultHostId }
    : {
        cwd:
          remoteProjects.find((project) => project.id === projectId)
            ?.remotePath ?? null,
        hostId,
      };
}

export const reviewThreadContextAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext): ThreadContext => {
    switch (scope.value.routeKind) {
      case "home":
      case "new-thread-panel": {
        const projectContext =
          scope.value.routeKind !== "home" || scope.value.projectContext == null
            ? null
            : resolveProjectThreadContext({
                defaultHostId: get(defaultHostIdAtom, null),
                hostId: scope.value.projectContext.hostId,
                projectId: scope.value.projectContext.projectId,
                remoteProjects: get(remoteProjectsAtom),
              });
        const defaultHostId = get(defaultHostIdAtom, null);
        const { cwd, hostId } = resolveProjectlessThreadContext({
          activeLocalProjectCwd: get(activeLocalProjectCwdAtom),
          conversationCwd: null,
          conversationHostId: null,
          selectedRemoteProject: get(selectedRemoteProjectAtom),
        });
        return {
          cwd: projectContext?.cwd ?? cwd,
          hostId: projectContext?.hostId ?? (hostId || defaultHostId),
        };
      }
      case "client-local-thread":
        return {
          cwd:
            get(clientLocalCwdAtom) ??
            get(clientLocalWorkspaceRootsQueryAtom).data?.roots?.[0] ??
            null,
          hostId: get(defaultHostIdAtom, null),
        };
      case "local-thread": {
        const assignment = get(conversationAssignmentsAtom)?.[
          scope.value.conversationId
        ];
        const projectContext =
          scope.value.projectContext == null
            ? null
            : resolveProjectThreadContext({
                defaultHostId: get(defaultHostIdAtom, null),
                hostId: scope.value.projectContext.hostId,
                projectId: scope.value.projectContext.projectId,
                remoteProjects: get(remoteProjectsAtom),
              });
        return {
          cwd:
            projectContext?.cwd ??
            resolveAssignmentCwd({
              assignment,
              cwd: get(conversationCwdAtom, scope.value.conversationId),
            }) ??
            get(activeLocalProjectCwdAtom),
          hostId:
            projectContext?.hostId ??
            (assignment == null ? null : resolveAssignmentHostId(assignment)) ??
            get(conversationHostIdAtom, scope.value.conversationId) ??
            get(defaultHostIdAtom, scope.value.conversationId),
        };
      }
      case "remote-thread":
      case "chatgpt-thread":
        return { cwd: null, hostId: get(defaultHostIdAtom, null) };
      case "other":
        throw Error("Thread context is unavailable for non-thread routes");
    }
  },
);

export const reviewCodexHomeAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext): string | null => {
    switch (scope.value.routeKind) {
      case "home":
      case "new-thread-panel":
      case "client-local-thread":
      case "local-thread":
      case "remote-thread":
      case "chatgpt-thread":
        return get(serverConfigQueryAtom).data?.codexHome ?? null;
      case "other":
        throw Error("Thread context is unavailable for non-thread routes");
    }
  },
);

export const reviewCwdAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    get(reviewThreadContextAtom).cwd,
);

export const reviewHostIdAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): string | null =>
    get(reviewThreadContextAtom).hostId,
);

export const reviewHostConfigAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    get(hostConfigByIdAtom, get(reviewHostIdAtom)),
);

export const reviewHostKeyAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => getHostKey(get(reviewHostConfigAtom)),
);

export function initReviewRouteContextRuntime(): void {
  // Legacy chunks exposed a Rollup initializer; ESM imports initialize these
  // restored review route-context atoms eagerly.
  void resolveProjectThreadContext;
  void reviewThreadContextAtom;
  void reviewCodexHomeAtom;
  void reviewCwdAtom;
  void reviewHostIdAtom;
  void reviewHostConfigAtom;
  void reviewHostKeyAtom;
}
