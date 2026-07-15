// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Host-side handler that persists a thread's Git branch to the app server and
// mirrors it into local conversation state; best-effort (logs and returns false).
import { logger } from "../boundaries/onboarding-commons-externals.facade";

interface ThreadGitInfo {
  branch: string | null;
  sha: string | null;
  originUrl: string | null;
}

interface ThreadGitBranchClient {
  sendRequest(method: string, params: unknown): Promise<unknown>;
  updateConversationState(
    threadId: string,
    update: (draft: { gitInfo?: ThreadGitInfo | null }) => void,
  ): void;
}

export async function updateThreadGitBranch(
  client: ThreadGitBranchClient,
  threadId: string,
  branch: string,
): Promise<boolean> {
  const trimmedBranch = branch.trim();
  if (trimmedBranch.length === 0) return false;
  try {
    await client.sendRequest("thread/metadata/update", {
      threadId: String(threadId),
      gitInfo: { branch: trimmedBranch },
    });
    client.updateConversationState(threadId, (draft) => {
      draft.gitInfo = {
        branch: trimmedBranch,
        sha: draft.gitInfo?.sha ?? null,
        originUrl: draft.gitInfo?.originUrl ?? null,
      };
    });
    return true;
  } catch (error) {
    logger.warning("Failed to update thread git branch metadata", {
      safe: { conversationId: threadId },
      sensitive: { error },
    });
    return false;
  }
}
