// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Re-key the saved diff-comments map from a source conversation id to a target
// conversation id when a thread is handed off (fork / move-to-worktree / move
// across hosts), leaving all other conversations untouched.

type ConversationId = string;
type DiffCommentsByConversationId<TComment> = Record<ConversationId, TComment>;

type RemapDiffCommentsOptions<TComment> = {
  sourceConversationId: ConversationId;
  targetConversationId: ConversationId;
  diffComments: DiffCommentsByConversationId<TComment> | null | undefined;
};

export function initRemapDiffCommentsForHandoffChunk(): void {}

export function remapDiffCommentsForHandoff<TComment>({
  sourceConversationId,
  targetConversationId,
  diffComments,
}: RemapDiffCommentsOptions<TComment>):
  | DiffCommentsByConversationId<TComment>
  | null
  | undefined {
  if (sourceConversationId === targetConversationId || diffComments == null) {
    return diffComments;
  }
  const sourceComments = diffComments[sourceConversationId];
  if (sourceComments == null) {
    return diffComments;
  }
  const remapped = { ...diffComments };
  remapped[targetConversationId] = sourceComments;
  delete remapped[sourceConversationId];
  return remapped;
}
