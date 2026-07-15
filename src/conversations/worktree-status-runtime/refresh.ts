// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Refresh helpers for managed-worktree status queries.

import {
  codexHomeQueryAtom,
  isPathWithin,
  normalizePath,
  worktreeStatusQueryKey,
  workspaceRootsQueryAtom,
} from "../../boundaries/onboarding-commons-externals.facade";
import { worktreeStatusQueryAtom } from "./atoms";
import {
  WORKTREE_GONE,
  WORKTREE_RESTORE_REQUIRED,
  WORKTREE_STATUS_UNAVAILABLE,
} from "./status-types";
import type {
  QueryStateHandle,
  WorktreeStatus,
  WorktreeStatusTarget,
} from "./status-types";

async function refreshWorktreeStatus(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<WorktreeStatus> {
  await invalidateWorktreeInputs(store, hostId);
  return refetchWorktreeStatus(store, { conversationId, cwd, hostId });
}

async function invalidateWorktreeStatusForHost(
  store: QueryStateHandle,
  hostId: string,
): Promise<void> {
  await invalidateWorktreeInputs(store, hostId);
  await store.queryClient.invalidateQueries({
    queryKey: worktreeStatusQueryKey(hostId),
  });
}

async function ensureWorktreeAvailable(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<void> {
  let status: WorktreeStatus;
  try {
    status = await refetchWorktreeStatus(store, {
      conversationId,
      cwd,
      hostId,
    });
  } catch {
    throw Error(WORKTREE_STATUS_UNAVAILABLE);
  }
  switch (status.kind) {
    case "available":
      return;
    case "restorable":
      throw Error(WORKTREE_RESTORE_REQUIRED);
    case "gone":
      throw Error(WORKTREE_GONE);
    case "unavailable":
      throw Error(WORKTREE_STATUS_UNAVAILABLE);
  }
}

async function refetchWorktreeStatus(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<WorktreeStatus> {
  const codexHome = await store.query.getOrFetch<{ codexHome: string }>(
    codexHomeQueryAtom,
    { hostId },
  );
  if (isPathWithin(cwd, codexHome.codexHome)) {
    await store.query
      .getOrFetch(workspaceRootsQueryAtom, { hostId })
      .catch(() => undefined);
  }
  const target = { conversationId, cwd: normalizePath(cwd), hostId };
  await store.query.invalidate(worktreeStatusQueryAtom, target, {
    exact: true,
  });
  return store.query.fetch<WorktreeStatus>(worktreeStatusQueryAtom, target);
}

async function invalidateWorktreeInputs(
  store: QueryStateHandle,
  hostId: string,
): Promise<void> {
  await Promise.all([
    store.query.invalidate(codexHomeQueryAtom, { hostId }, { exact: true }),
    store.query.invalidate(
      workspaceRootsQueryAtom,
      { hostId },
      { exact: true },
    ),
  ]);
}

export {
  ensureWorktreeAvailable,
  invalidateWorktreeStatusForHost,
  refreshWorktreeStatus,
};
