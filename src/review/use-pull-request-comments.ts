// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook that wires local + model diff comments together with read-only comment
// attachments fetched from the conversation's open pull request.
import {
  useConversationComments,
  toConversationKey,
  readScopedSignal,
  conversationHeadBranchAtom,
  conversationCwdAtom,
  conversationHostIdAtom,
  pullRequestStatusAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export interface PullRequestCommentsOptions {
  conversationId: string | number;
  enablePullRequestComments?: boolean;
  localConversationId?: string;
}

export interface PullRequestCommentsResult {
  commentProps: {
    enableComments: true;
    comments: unknown;
    modelComments: unknown;
    onCommentsChange: (next: unknown) => void;
    readonlyComments: unknown;
  };
}

export function initUsePullRequestCommentsChunk(): void {}

export function usePullRequestComments(
  options: PullRequestCommentsOptions,
): PullRequestCommentsResult {
  const {
    conversationId,
    enablePullRequestComments = true,
    localConversationId,
  } = options;

  const { comments, modelComments, setComments } = useConversationComments(
    conversationId,
    localConversationId,
  );

  const conversationKey = toConversationKey(String(conversationId));
  const headBranch =
    readScopedSignal(conversationHeadBranchAtom, conversationKey) ?? "";
  const cwd = readScopedSignal(conversationCwdAtom, conversationKey);
  const hostId =
    readScopedSignal(conversationHostIdAtom, conversationKey) ?? undefined;

  const pullRequestStatus = readScopedSignal(pullRequestStatusAtom, {
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
