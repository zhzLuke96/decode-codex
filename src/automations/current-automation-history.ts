// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
import {
  currentAppInitialSharedCompatSlotLowerTLowerA as getConversationIdForThread,
  currentAppInitialSharedCompatSlotUpperC as automationLogger,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import { currentAppInitialSharedMember0542 as openAiNativeHostId } from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

type AutomationHistoryItem = {
  status: string;
  threadId?: string | null;
};

export type AutomationHistoryConversationReference = {
  conversationId: unknown;
  hostId: typeof openAiNativeHostId;
  source: "automation_history";
};

export type AutomationHistoryArchiveSummary = {
  succeededCount: number;
  failedCount: number;
};

export function buildAutomationHistoryConversationReference(
  threadId: string,
): AutomationHistoryConversationReference {
  return {
    conversationId: getConversationIdForThread(threadId),
    hostId: openAiNativeHostId,
    source: "automation_history",
  };
}

export function isArchiveableAutomationHistoryItem<
  THistoryItem extends AutomationHistoryItem,
>(item: THistoryItem): item is THistoryItem & { threadId: string } {
  return (
    item.status !== "ARCHIVED" &&
    item.status !== "IN_PROGRESS" &&
    item.threadId != null
  );
}

export async function archiveAutomationHistoryItems<
  THistoryItem extends AutomationHistoryItem,
>({
  archiveThread,
  items,
}: {
  archiveThread: (threadId: string) => Promise<unknown>;
  items: THistoryItem[];
}): Promise<AutomationHistoryArchiveSummary> {
  const threadIds = items
    .filter(isArchiveableAutomationHistoryItem)
    .map((item) => item.threadId);

  const results = await Promise.all(
    threadIds.map(async (threadId) => {
      try {
        await archiveThread(threadId);
        return true;
      } catch (error) {
        automationLogger.warning("automation_history_archive_failed", {
          safe: {},
          sensitive: {
            error,
            threadId,
          },
        });
        return false;
      }
    }),
  );

  const succeededCount = results.filter(Boolean).length;
  return {
    succeededCount,
    failedCount: results.length - succeededCount,
  };
}
