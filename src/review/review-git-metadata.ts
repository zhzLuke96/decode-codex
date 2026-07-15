// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git-metadata atoms for the review diff model: the repo-metadata query keyed by the
// review cwd, current-branch query family, and the derived workspace/worktree context.

import {
  createComputedAtom,
  createComputedQueryAtom,
  createParametricAtom,
} from "../runtime/onboarding-scope-runtime";
import {
  reviewMetadataScope,
  threadAtomScope,
} from "../runtime/onboarding-common-runtime";
import { pendingQueryResult } from "../runtime/query-result-runtime";
import { buildGitMetadataQueryOptions } from "../runtime/git-query-runtime";
import { isCodexWorktreePath } from "../boundaries/src-l0hb/paths";
import {
  activeLocalProjectCwdAtom,
  conversationAssignmentsAtom,
  gitCliAvailabilityQueryAtom,
  isUsableCwd,
  localProjectRootsAtom,
  resolveAssignmentCwd,
} from "./review-route-runtime";
import { createGitMetadataQueryFamily } from "./review-git-metadata-query-family";
import {
  reviewCwdAtom,
  reviewHostIdAtom,
  reviewHostConfigAtom,
  reviewHostKeyAtom,
  reviewCodexHomeAtom,
} from "./thread-review-context";

interface ComputedAtomContext {
  get: (atom: unknown, arg?: unknown) => any;
  scope: { value: any };
}

interface GitMetadata {
  commonDir: string;
  root: string;
}

export type WorkspaceReviewContext =
  | {
      kind: "none";
      codexHome: string | null;
      cwd: null;
      git: null;
      hostId: string | null;
      isCodexWorktree: false;
    }
  | {
      kind: "plain";
      codexHome: string | null;
      cwd: string;
      git: null;
      hostId: string | null;
      isCodexWorktree: false;
    }
  | {
      kind: "git";
      codexHome: string | null;
      cwd: string;
      git: { root: string } & Record<string, unknown>;
      hostId: string | null;
      isCodexWorktree: boolean;
    };

// Repo-metadata query for the review cwd; gated on git CLI availability.
export const reviewGitMetadataQueryAtom = createComputedQueryAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const hostConfig = get(reviewHostConfigAtom);
    const isGitAvailable =
      get(gitCliAvailabilityQueryAtom, {
        hostConfig,
        operationSource: "local_conversation_thread",
      }).data?.available === true;
    return buildGitMetadataQueryOptions(
      get(reviewCwdAtom),
      get(reviewHostKeyAtom),
      hostConfig,
      "local_conversation_thread",
      { enabled: isGitAvailable, watchForGitInit: true },
    );
  },
);

const currentBranchQueryFamily = createGitMetadataQueryFamily({
  method: "current-branch",
  getParams: (metadata: any) => ({
    operationSource: metadata.operationSource,
    root: metadata.root,
  }),
  getOptions: (metadata: any) => ({
    refetchOnWindowFocus: metadata.refetchOnWindowFocus,
    select: (result: any) => result.branch,
    ...(metadata.staleTime == null ? {} : { staleTime: metadata.staleTime }),
  }),
});

export const currentBranchFromMetadataAtom =
  currentBranchQueryFamily.fromMetadata$;
export const currentBranchFromCwdAtom = currentBranchQueryFamily.fromCwd$;
export const currentBranchNameAtom = createParametricAtom(
  reviewMetadataScope,
  (params: any, { get }: { get: (atom: unknown, arg?: unknown) => any }) =>
    get(currentBranchFromCwdAtom, params).data ?? null,
);

export const reviewCurrentBranchQueryAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) => {
    const metadataQuery = get(reviewGitMetadataQueryAtom);
    const metadata: GitMetadata | null = metadataQuery.data ?? null;
    return metadata == null
      ? pendingQueryResult(metadataQuery)
      : get(currentBranchFromMetadataAtom, {
          commonDir: metadata.commonDir,
          enabled: true,
          hostConfig: get(reviewHostConfigAtom),
          operationSource: "local_conversation_thread",
          refetchOnWindowFocus: false,
          root: metadata.root,
          staleTime: null,
        });
  },
);

export function buildWorkspaceReviewContext({
  codexHome,
  cwd,
  gitMetadata,
  hostId,
}: {
  codexHome: string | null;
  cwd: string | null;
  gitMetadata: ({ root: string } & Record<string, unknown>) | null;
  hostId: string | null;
}): WorkspaceReviewContext {
  if (cwd == null)
    return {
      kind: "none",
      codexHome,
      cwd: null,
      git: null,
      hostId,
      isCodexWorktree: false,
    };
  if (gitMetadata == null)
    return {
      kind: "plain",
      codexHome,
      cwd,
      git: null,
      hostId,
      isCodexWorktree: false,
    };
  return {
    kind: "git",
    codexHome,
    cwd,
    git: gitMetadata,
    hostId,
    isCodexWorktree: isCodexWorktreePath(cwd, codexHome ?? undefined),
  };
}

export const workspaceReviewContextAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext): WorkspaceReviewContext => {
    const gitMetadata = get(reviewGitMetadataQueryAtom).data ?? null;
    return buildWorkspaceReviewContext({
      codexHome: get(reviewCodexHomeAtom),
      cwd: get(reviewCwdAtom),
      gitMetadata,
      hostId: get(reviewHostIdAtom),
    });
  },
);

export function initWorkspaceReviewContextRuntime(): void {
  void reviewGitMetadataQueryAtom;
  void reviewCurrentBranchQueryAtom;
  void workspaceReviewContextAtom;
  void reviewProjectRootAtom;
}

// Resolved project root for the review panel when the workspace has no git repo.
export const reviewProjectRootAtom = createComputedAtom(
  threadAtomScope,
  ({ get, scope }: ComputedAtomContext): string | null => {
    const context = get(workspaceReviewContextAtom);
    switch (context.kind) {
      case "none":
        return null;
      case "plain": {
        const hostConfig = get(reviewHostConfigAtom);
        const assignment =
          scope.value.routeKind === "local-thread"
            ? get(conversationAssignmentsAtom)?.[scope.value.conversationId]
            : null;
        const projectRoots =
          assignment?.projectKind === "local"
            ? get(localProjectRootsAtom, assignment.projectId)
            : null;
        const singleProjectRoot =
          projectRoots?.length === 1 ? (projectRoots[0] ?? null) : null;
        const assignmentCwd =
          assignment == null
            ? context.cwd
            : resolveAssignmentCwd({ assignment, cwd: context.cwd });
        const activeLocalCwd =
          scope.value.routeKind !== "local-thread" &&
          hostConfig.kind === "local" &&
          hostConfig.id === context.hostId
            ? get(activeLocalProjectCwdAtom)
            : null;
        const usableCwd =
          assignmentCwd != null && isUsableCwd(assignmentCwd)
            ? assignmentCwd
            : null;
        return singleProjectRoot ?? activeLocalCwd ?? usableCwd;
      }
      case "git":
        return context.git.root;
    }
  },
);
