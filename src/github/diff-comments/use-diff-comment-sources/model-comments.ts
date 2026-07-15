// Restored from ref/webview/assets/use-diff-comment-sources-K8MB00rv.js
// Merges stored comments with newly parsed assistant comments while preserving stable keys.
import { useHostConfigTt as getDiffCommentKey } from "../../../boundaries/use-host-config.facade";
import { parseCodeCommentDirectives } from "./directive-comments";
import type { CompletedTurn, DiffComment, TurnCommentsCache } from "./types";
export function mergeNewComments({
  current,
  incoming,
}: {
  current: DiffComment[];
  incoming: DiffComment[];
}): DiffComment[] {
  if (incoming.length === 0) return current;
  const seenKeys = new Set(current.map(getDiffCommentKey));
  const mergedComments = [...current];
  let changed = false;
  for (const comment of incoming) {
    const key = getDiffCommentKey(comment);
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      mergedComments.push(comment);
      changed = true;
    }
  }
  return changed ? mergedComments : current;
}
export function mergeCompletedTurnComments({
  cache,
  storedModelComments,
  turns,
}: {
  cache?: TurnCommentsCache;
  storedModelComments: DiffComment[];
  turns?: CompletedTurn[] | null;
}): DiffComment[] {
  if (turns == null || turns.length === 0) return storedModelComments;
  let mergedComments = storedModelComments;
  for (const turn of turns) {
    if (turn.status !== "completed") continue;
    mergedComments = mergeNewComments({
      current: mergedComments,
      incoming: getTurnCodeComments(turn, cache),
    });
  }
  return mergedComments;
}
function getTurnCodeComments(
  turn: CompletedTurn,
  cache?: TurnCommentsCache,
): DiffComment[] {
  const cached = cache?.get(turn);
  if (cached?.items === turn.items) return cached.comments;
  const comments: DiffComment[] = [];
  for (const item of turn.items) {
    if (item.type !== "agentMessage" || item.phase === "commentary") {
      continue;
    }
    comments.push(
      ...parseCodeCommentDirectives(item.text, turn.params.cwd ?? null),
    );
  }
  cache?.set(turn, {
    comments,
    items: turn.items,
  });
  return comments;
}
export function areDiffCommentListsEqual(
  previousComments: DiffComment[],
  nextComments: DiffComment[],
): boolean {
  return previousComments.length === nextComments.length
    ? previousComments.every((previousComment, index) => {
        const nextComment = nextComments[index];
        return (
          nextComment != null &&
          getDiffCommentKey(previousComment) === getDiffCommentKey(nextComment)
        );
      })
    : false;
}
