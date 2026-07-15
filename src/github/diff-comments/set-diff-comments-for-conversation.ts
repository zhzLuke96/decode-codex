// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative updater that writes diff comments for a single conversation into
// the shared `diff_comments` object store, pruning empty entries.
import { updateSharedObjectState } from "../../boundaries/onboarding-commons-externals.facade";
import {
  emptyDiffComments,
  type DiffComment,
  type DiffCommentsByConversation,
} from "./use-diff-comment-sources/types";

type DiffCommentUpdate =
  | DiffComment[]
  | ((currentComments: DiffComment[]) => DiffComment[]);

export function setDiffCommentsForConversation(
  store: unknown,
  conversationId: string,
  update: DiffCommentUpdate,
): void {
  updateSharedObjectState(
    store,
    "diff_comments",
    (currentStore: DiffCommentsByConversation | null | undefined) => {
      const currentComments =
        currentStore?.[conversationId] ?? emptyDiffComments;
      const nextComments =
        typeof update === "function" ? update(currentComments) : update;
      if (nextComments === currentComments) return currentStore;
      if (nextComments.length > 0) {
        return {
          ...currentStore,
          [conversationId]: nextComments,
        };
      }
      if (currentStore?.[conversationId] == null) return currentStore;
      const nextStore = {
        ...currentStore,
      };
      delete nextStore[conversationId];
      return Object.keys(nextStore).length === 0 ? undefined : nextStore;
    },
  );
}
