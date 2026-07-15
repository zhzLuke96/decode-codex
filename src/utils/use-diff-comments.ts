// Restored from ref/webview/assets/use-diff-comments-BCTn6pwz.js
import { useCallback, useMemo } from "react";
import { useSharedObjectState } from "../boundaries/use-host-config.facade";
type DiffCommentContent = {
  content_type: string;
  text: string;
};
type DiffCommentPosition = {
  side: string;
  path: string;
  line: number;
  start_line?: number;
};
export type DiffComment = {
  content: DiffCommentContent[];
  position: DiffCommentPosition;
};
type DiffCommentStore = Record<string, DiffComment[]>;
type DiffCommentUpdate =
  | DiffComment[]
  | ((currentComments: DiffComment[]) => DiffComment[]);
type UseSharedDiffCommentStore = (
  key: "diff_comments",
) => [
  DiffCommentStore | null | undefined,
  (
    update:
      | DiffCommentStore
      | ((
          currentStore: DiffCommentStore | null | undefined,
        ) => DiffCommentStore),
  ) => void,
];
const emptyDiffComments: DiffComment[] = [];
export function useDiffComments(
  conversationId: string | null | undefined,
): [DiffComment[], (update: DiffCommentUpdate) => void] {
  const [diffComments, setDiffComments] = (
    useSharedObjectState as UseSharedDiffCommentStore
  )("diff_comments");
  const comments = useMemo(
    () => getDiffCommentsForConversation(diffComments, conversationId),
    [diffComments, conversationId],
  );
  const setComments = useCallback(
    (update: DiffCommentUpdate) => {
      if (!conversationId) {
        return;
      }
      setDiffComments((currentStore) => {
        const nextStore = {
          ...currentStore,
        };
        const currentComments = nextStore[conversationId] ?? emptyDiffComments;
        const nextComments =
          typeof update === "function" ? update(currentComments) : update;
        if (nextComments.length === 0) {
          delete nextStore[conversationId];
        } else {
          nextStore[conversationId] = nextComments;
        }
        return nextStore;
      });
    },
    [conversationId, setDiffComments],
  );
  return useMemo(() => [comments, setComments], [comments, setComments]);
}
function getDiffCommentsForConversation(
  store: DiffCommentStore | null | undefined,
  conversationId: string | null | undefined,
): DiffComment[] {
  return conversationId ? (store?.[conversationId] ?? emptyDiffComments) : [];
}
