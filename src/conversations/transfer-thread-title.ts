// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Copy a conversation's title from a source thread onto its handoff target
// thread (used by the move-to-local / move-to-worktree / cross-host handoffs).

type TransferThreadTitleOptions = {
  sourceConversationId: string;
  targetConversationId: string;
  getTitle: (conversationId: string) => string | null;
  setTitle: (conversationId: string, title: string) => Promise<void> | void;
};

export async function transferThreadTitle({
  sourceConversationId,
  targetConversationId,
  getTitle,
  setTitle,
}: TransferThreadTitleOptions): Promise<void> {
  if (sourceConversationId === targetConversationId) return;
  const sourceTitle = getTitle(sourceConversationId);
  if (sourceTitle != null) {
    await setTitle(targetConversationId, sourceTitle);
  }
}
