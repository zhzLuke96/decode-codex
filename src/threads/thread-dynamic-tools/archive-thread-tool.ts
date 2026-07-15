// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dynamic-tool action that archives or unarchives a thread by id.
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { parseConversationId } from "../../boundaries/onboarding-commons-externals.facade";
import { resolveThreadHost } from "./resolve-thread-host";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

export async function setThreadArchivedTool({
  archived,
  scope,
  threadId,
}: {
  archived: boolean;
  scope: AppScope;
  threadId: string;
}): Promise<{ threadId: string; archived: boolean }> {
  const { hostId } = await resolveThreadHost({ scope, threadId });
  const conversationId = parseConversationId(threadId);
  if (archived) {
    await sendAppServerRequest("hydrate-background-threads", {
      hostId,
      threadIds: [conversationId],
    });
    await sendAppServerRequest("archive-conversation", {
      hostId,
      conversationId,
      source: "dynamic_tool",
    });
  } else {
    await sendAppServerRequest("unarchive-conversation", {
      hostId,
      conversationId,
    });
  }
  return { threadId, archived };
}
