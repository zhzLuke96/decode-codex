// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Re-point a pinned-thread entry from a source conversation to its handoff
// target, preserving pin order and de-duplicating the resulting list.

import { callCodexVscodeApi } from "../boundaries/vscode-api";

type TransferPinnedThreadOrderOptions = {
  sourceConversationId: string;
  targetConversationId: string;
};

export function initThreadHandoffTransferRuntimeChunk(): void {}

export async function transferPinnedThreadOrder({
  sourceConversationId,
  targetConversationId,
}: TransferPinnedThreadOrderOptions): Promise<void> {
  if (sourceConversationId === targetConversationId) return;
  const { threadIds } = (await callCodexVscodeApi(
    "list-pinned-threads",
    {},
  )) as { threadIds: string[] };
  if (threadIds.indexOf(sourceConversationId) === -1) return;
  await callCodexVscodeApi("set-pinned-threads-order", {
    params: {
      threadIds: threadIds
        .map((threadId) =>
          threadId === sourceConversationId ? targetConversationId : threadId,
        )
        .filter(
          (threadId, index, allThreadIds) =>
            allThreadIds.indexOf(threadId) === index,
        ),
    },
  });
}
