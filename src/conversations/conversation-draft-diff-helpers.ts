// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// Draft-conversation and diff-comment helpers operating on the current route scope.
// setDraftConversationId + updateDiffComments are re-exported (typed) from the
// iy8s9c2d remote/projects shared chunk. buildDiffCommentsPayload is reconstructed
// from the onboarding-page chunk (ref .js: ...onboarding-page-CgNc-Bk2.js) as a
// pure key-remap over the diff-comments map (no cross-chunk dependencies).
import {
  lm as updateDiffCommentsImpl,
  oa as setDraftConversationIdImpl,
} from "../vendor/projects-app-shared-runtime";
import type { RouteScope } from "./current-route-signal";

/** Diff comments keyed by conversation id. */
export type DiffCommentsByConversation = Record<string, unknown>;

export interface SetDraftConversationIdArgs {
  conversationId: string;
  draftThreadLocationId: string;
}

/**
 * Promote a client-created draft thread to a real conversation id within the
 * given route scope, migrating draft-scoped state (pinned order, titles, mapped
 * ids) onto the new conversation id. Throws if the scope is not a client-created
 * thread.
 */
export function setDraftConversationId(
  scope: RouteScope,
  args: SetDraftConversationIdArgs,
): void {
  setDraftConversationIdImpl(scope, args);
}

/**
 * Read and update the diff comments stored under `key` on the route scope.
 * `value` may be the next map directly, or an updater that receives the current
 * map and returns the next one.
 */
export function updateDiffComments(
  scope: RouteScope,
  key: string,
  value:
    | DiffCommentsByConversation
    | undefined
    | ((
        current: DiffCommentsByConversation | undefined,
      ) => DiffCommentsByConversation | undefined),
): void {
  updateDiffCommentsImpl(scope, key, value);
}

export interface BuildDiffCommentsPayloadArgs {
  sourceConversationId: string;
  targetConversationId: string;
  diffComments: DiffCommentsByConversation | undefined;
}

/**
 * Re-key the diff-comments map so the entry stored under `sourceConversationId`
 * moves to `targetConversationId`. Returns the input unchanged when the ids are
 * equal, the map is nullish, or there is no source entry to migrate.
 */
export function buildDiffCommentsPayload({
  sourceConversationId,
  targetConversationId,
  diffComments,
}: BuildDiffCommentsPayloadArgs): DiffCommentsByConversation | undefined {
  if (sourceConversationId === targetConversationId || diffComments == null)
    return diffComments;
  const sourceEntry = diffComments[sourceConversationId];
  if (sourceEntry == null) return diffComments;
  const next: DiffCommentsByConversation = { ...diffComments };
  next[targetConversationId] = sourceEntry;
  delete next[sourceConversationId];
  return next;
}
