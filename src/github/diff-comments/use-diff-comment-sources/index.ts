// Restored from ref/webview/assets/use-diff-comment-sources-K8MB00rv.js
// Aggregates inline diff comments from user state, model directives, and pull-request metadata.
import {
  _appScopeA as readAppScopeValue,
  _appScopeC as createAppScopeSelector,
  _appScopeU as createAppScopeFamily,
  appScopeRoot,
} from "../../../boundaries/app-scope";
import { useSharedObjectState } from "../../../boundaries/use-host-config.facade";
import {
  A as conversationCwdSignal,
  Lt as conversationTurnsSignalFamily,
  R as conversationHeadBranchSignal,
  V as conversationHostIdSignal,
} from "../../../boundaries/thread-context-inputs.facade";
import { normalizeConversationId } from "../../../boundaries/src-l0hb-mz-p";
import { ghPullRequestStatusResultSignal } from "../../gh-pull-request-status-query";
import { parseCodeCommentDirectives } from "./directive-comments";
import {
  areDiffCommentListsEqual,
  mergeCompletedTurnComments,
  mergeNewComments,
} from "./model-comments";
import type {
  CompletedTurn,
  DiffComment,
  DiffCommentsByConversation,
  DiffCommentSetter,
  TurnCommentsCache,
} from "./types";
import { emptyDiffComments } from "./types";
function addDiffCommentsForConversation({
  comments,
  conversationId,
  setDiffComments,
}: {
  comments: DiffComment[];
  conversationId: string;
  setDiffComments: (
    updater: (
      commentsByConversation: DiffCommentsByConversation,
    ) => DiffCommentsByConversation,
  ) => void;
}): void {
  if (comments.length === 0) return;
  setDiffComments((commentsByConversation) => {
    const nextCommentsByConversation = {
      ...commentsByConversation,
    };
    const currentComments =
      nextCommentsByConversation[conversationId] ?? emptyDiffComments;
    const mergedComments = mergeNewComments({
      current: currentComments,
      incoming: comments,
    });
    if (mergedComments.length === currentComments.length) {
      return commentsByConversation;
    }
    nextCommentsByConversation[conversationId] = mergedComments;
    return nextCommentsByConversation;
  });
}
const turnModelCommentsSelectorFamily = createAppScopeFamily(
  appScopeRoot,
  (localConversationId: string | undefined) => {
    const turnCommentsCache: TurnCommentsCache = new WeakMap();
    return createAppScopeSelector(
      appScopeRoot,
      ({ get }: { get: <Value>(signal: unknown, key?: unknown) => Value }) =>
        mergeCompletedTurnComments({
          cache: turnCommentsCache,
          storedModelComments: emptyDiffComments,
          turns: get<CompletedTurn[] | null>(
            conversationTurnsSignalFamily,
            localConversationId,
          ),
        }),
      {
        isEqual: areDiffCommentListsEqual,
      },
    );
  },
);

function initDiffCommentSourcesChunk(): void {
  void addDiffCommentsForConversation;
  void turnModelCommentsSelectorFamily;
  void useConversationDiffComments;
  void useDiffCommentSources;
}

function useConversationDiffComments(
  conversationId: string,
  localConversationId?: string,
): {
  comments: DiffComment[];
  modelComments: DiffComment[];
  setComments: DiffCommentSetter;
} {
  const [diffCommentsByConversation, setDiffCommentsByConversation] =
    useSharedObjectState("diff_comments");
  const [modelCommentsByConversation] = useSharedObjectState(
    "diff_comments_from_model",
  );
  const turnModelComments = readAppScopeValue(
    turnModelCommentsSelectorFamily,
    localConversationId,
  );
  const comments =
    diffCommentsByConversation?.[conversationId] ?? emptyDiffComments;
  const storedModelComments =
    modelCommentsByConversation?.[conversationId] ?? emptyDiffComments;
  const modelComments = mergeNewComments({
    current: storedModelComments,
    incoming: turnModelComments,
  });
  const setComments: DiffCommentSetter = (nextComments) => {
    setDiffCommentsByConversation(
      (commentsByConversation: DiffCommentsByConversation) => {
        const nextCommentsByConversation = {
          ...commentsByConversation,
        };
        const currentComments =
          nextCommentsByConversation[conversationId] ?? emptyDiffComments;
        const resolvedComments =
          typeof nextComments === "function"
            ? nextComments(currentComments)
            : nextComments;
        if (resolvedComments.length === 0) {
          if (nextCommentsByConversation[conversationId] === undefined) {
            return nextCommentsByConversation;
          }
          delete nextCommentsByConversation[conversationId];
          return nextCommentsByConversation;
        }
        nextCommentsByConversation[conversationId] = resolvedComments;
        return nextCommentsByConversation;
      },
    );
  };
  return {
    comments,
    modelComments,
    setComments,
  };
}
function useDiffCommentSources({
  conversationId,
  enablePullRequestComments = true,
  localConversationId,
}: {
  conversationId: string | number;
  enablePullRequestComments?: boolean;
  localConversationId?: string;
}) {
  const { comments, modelComments, setComments } = useConversationDiffComments(
    String(conversationId),
    localConversationId,
  );
  const normalizedConversationId = normalizeConversationId(
    String(conversationId),
  );
  const headBranch =
    readAppScopeValue(conversationHeadBranchSignal, normalizedConversationId) ??
    "";
  const cwd = readAppScopeValue(
    conversationCwdSignal,
    normalizedConversationId,
  );
  const hostId =
    readAppScopeValue(conversationHostIdSignal, normalizedConversationId) ??
    undefined;
  const pullRequestStatus = readAppScopeValue(ghPullRequestStatusResultSignal, {
    cwd,
    headBranch,
    hostId,
    operationSource: "diff_comment_sources",
  });
  const readonlyComments =
    enablePullRequestComments && pullRequestStatus.type === "success"
      ? pullRequestStatus.data.commentAttachments
      : undefined;
  return {
    commentProps: {
      enableComments: true,
      comments,
      modelComments,
      onCommentsChange: setComments,
      readonlyComments,
    },
  };
}
export {
  addDiffCommentsForConversation,
  initDiffCommentSourcesChunk,
  useConversationDiffComments,
  parseCodeCommentDirectives,
  useDiffCommentSources,
};
