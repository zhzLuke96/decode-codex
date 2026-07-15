// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared-object selector for the inline diff comments attached to one conversation.
import {
  appScopeL as createScopedValueSelector,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  readSharedObjectValueWithReader,
  type SharedObjectValueReader,
} from "../../runtime/shared-object-host-runtime";
import {
  emptyDiffComments,
  type DiffComment,
  type DiffCommentsByConversation,
} from "./use-diff-comment-sources/types";

type ScopedValueReader = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

const DIFF_COMMENTS_SHARED_OBJECT_KEY = "diff_comments";

function readDiffCommentsByConversation(
  reader: ScopedValueReader,
): DiffCommentsByConversation | null | undefined {
  return readSharedObjectValueWithReader(
    reader.get.bind(reader) as SharedObjectValueReader<
      DiffCommentsByConversation | null | undefined
    >,
    DIFF_COMMENTS_SHARED_OBJECT_KEY,
  );
}

export const diffCommentsByConversationSignal = createScopedValueSelector<
  DiffComment[]
>(appScopeRoot, (conversationId, reader: ScopedValueReader) => {
  if (conversationId == null) return emptyDiffComments;
  const diffCommentsByConversation = readDiffCommentsByConversation(reader);
  return (
    diffCommentsByConversation?.[String(conversationId)] ?? emptyDiffComments
  );
});

export function initDiffCommentsByConversationSignalChunk(): void {
  void diffCommentsByConversationSignal;
}
