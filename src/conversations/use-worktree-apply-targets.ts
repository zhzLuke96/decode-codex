// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolve the worktree apply targets for a conversation: finds a sibling
// workspace root sharing the same git origin so changes can be applied across
// linked worktrees.

import { useWorktreeBaseBranchQuery } from "./use-worktree-base-branch-query";
import {
  activeWorkspaceRootsQuery,
  isPathWithinRoot,
  isUsableCwd,
  normalizePath,
  uniq,
  useCurrentWorktreeRoot,
  useScopedQuery,
  useScopedValue,
  worktreeOriginsQueryAtom,
} from "../boundaries/onboarding-commons-externals.facade";

interface WorktreeOrigin {
  dir: string;
  originUrl?: string | null;
  root?: string | null;
}

export interface WorktreeApplyTarget {
  workspaceRoot: string;
  gitRoot: string;
  label: string;
}

export interface UseWorktreeApplyTargetsOptions {
  conversationCwd?: string | null;
  hostConfig: unknown;
}

export interface WorktreeApplyTargets {
  targetRoots: WorktreeApplyTarget[];
  worktreePath: string | null;
  sourceWorkspaceRoot: string | null;
}

export function useWorktreeApplyTargets({
  conversationCwd = null,
  hostConfig,
}: UseWorktreeApplyTargetsOptions): WorktreeApplyTargets {
  const currentWorktreeRoot = useCurrentWorktreeRoot();
  const { data: workspaceRoots } = useScopedValue(activeWorkspaceRootsQuery);
  const candidateDirs = uniq(
    [
      conversationCwd,
      ...(workspaceRoots?.roots?.filter(isUsableCwd) ?? []),
    ].filter((dir): dir is string => dir != null),
  );

  const { data: originsData } = useScopedQuery(worktreeOriginsQueryAtom, {
    params: { dirs: candidateDirs },
    source: "apply_worktree",
  });
  const origins: WorktreeOrigin[] | undefined = originsData?.origins;
  const normalizedConversationCwd = conversationCwd
    ? normalizePath(conversationCwd)
    : null;
  const conversationOrigin = origins?.find(
    (origin) => normalizePath(origin.dir) === normalizedConversationCwd,
  );

  let matchingOrigin: WorktreeOrigin | null = null;
  if (conversationOrigin?.originUrl) {
    matchingOrigin =
      origins?.find((origin) =>
        origin.originUrl !== conversationOrigin.originUrl ||
        (normalizedConversationCwd &&
          normalizePath(origin.dir) === normalizedConversationCwd)
          ? false
          : !isPathWithinRoot(origin.dir, currentWorktreeRoot),
      ) ?? null;
  }

  const gitRoot = matchingOrigin?.root ?? null;
  const workspaceRoot = matchingOrigin?.dir ?? null;
  const hasGitRoot = !!gitRoot;
  const { data: baseBranchLabel = "-" } = useWorktreeBaseBranchQuery(
    gitRoot,
    hostConfig,
    "apply_worktree",
    { enabled: hasGitRoot },
  );

  const targetRoots: WorktreeApplyTarget[] =
    !workspaceRoot || !gitRoot
      ? []
      : [{ workspaceRoot, gitRoot, label: baseBranchLabel }];

  return {
    targetRoots,
    worktreePath: conversationCwd,
    sourceWorkspaceRoot: workspaceRoot,
  };
}
