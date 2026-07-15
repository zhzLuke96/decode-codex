// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm.js
// app-initial~app-main~worktree-init-v2-page~hotkey-window-worktree-init-page~local-conversation-page-BwSKiuwm chunk restored from the Codex webview bundle.
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { vscodeApiH, vscodeApiN } from "../../boundaries/vscode-api";
import {
  initPendingWorktreeConversationRuntimeChunk,
  restorePendingWorktreeBrowserTransferSources,
  startPendingWorktreeConversation,
} from "../../threads/pending-worktree-conversation";
import { setPinnedThread } from "../../utils/set-pinned-thread";
type PendingWorktreeEntryForFinalization = {
  initialThreadTitle?: string | null;
  labelEdited?: boolean;
  label?: string;
  worktreeGitRoot?: string | null;
  isPinned?: boolean;
  pinnedBeforeThreadId?: string | null;
  launchMode: string;
  threadStartHostId?: string | null;
};
type PendingWorktreeHostConfig = {
  id: string;
};
async function finalizePendingWorktreeConversationMetadata({
  entry,
  conversationId,
  hostConfig,
  threadGoalObjective,
}: {
  entry: PendingWorktreeEntryForFinalization;
  conversationId: string;
  hostConfig: PendingWorktreeHostConfig;
  threadGoalObjective?: string | null;
}): Promise<void> {
  const shouldOnlySetEditedLabelIfUntitled =
    entry.initialThreadTitle == null && entry.labelEdited === true;
  const title = (
    entry.initialThreadTitle ??
    (shouldOnlySetEditedLabelIfUntitled ? entry.label : "")
  ).trim();
  if (title.length > 0) {
    await sendAppServerRequest("set-thread-title", {
      conversationId,
      title,
      ...(shouldOnlySetEditedLabelIfUntitled
        ? {
            onlyIfUntitled: true,
          }
        : {}),
    });
  }
  if (entry.worktreeGitRoot != null) {
    try {
      await vscodeApiN("worktree-set-owner-thread", {
        params: {
          hostId: hostConfig.id,
          worktree: entry.worktreeGitRoot,
          conversationId,
        },
      });
    } catch (error) {
      vscodeApiH.warning(
        "Worktree created and conversation started, but failed to set worktree owner metadata: {}",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
    }
  }
  if (entry.isPinned) {
    try {
      await setPinnedThread(conversationId, true, entry.pinnedBeforeThreadId);
    } catch (error) {
      vscodeApiH.warning(
        "Worktree conversation started, but failed to set pinned metadata: {}",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
    }
  }
  if (
    entry.launchMode === "start-conversation" &&
    threadGoalObjective != null
  ) {
    await sendAppServerRequest("set-thread-goal", {
      appendTranscriptItem: false,
      conversationId,
      hostId: entry.threadStartHostId ?? hostConfig.id,
      objective: threadGoalObjective,
    });
  }
}
export {
  restorePendingWorktreeBrowserTransferSources,
  initPendingWorktreeConversationRuntimeChunk,
  startPendingWorktreeConversation,
  finalizePendingWorktreeConversationMetadata,
};
