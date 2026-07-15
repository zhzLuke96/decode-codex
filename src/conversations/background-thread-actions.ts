// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Create/read/send/pin/archive/rename actions for background threads.
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { getServiceTierForModel } from "../runtime/service-tier-runtime";
import { sendHostRequest } from "../runtime/host-request-runtime";
import {
  buildDelegationText,
  parseConversationId,
} from "../runtime/thread-delegation-runtime";
import { createThread } from "../threads/create-thread";
import { setThreadArchivedTool } from "../threads/thread-dynamic-tools/archive-thread-tool";
import { readThreadTurnsTool } from "../threads/thread-dynamic-tools/read-thread-turns-tool";
import { resolveThreadHost } from "../threads/thread-dynamic-tools/resolve-thread-host";
import type { BackgroundThreadAppScope } from "./background-thread-types";

export type CreateBackgroundThreadOptions = Omit<
  Parameters<typeof createThread>[0],
  "model"
> & {
  model?: string | null;
};

export async function createBackgroundThread({
  model,
  ...input
}: CreateBackgroundThreadOptions) {
  return createThread({ ...input, model: model ?? null });
}

export const readBackgroundThread = readThreadTurnsTool;

export async function sendMessageToBackgroundThread({
  hostId,
  model,
  preferredHostId,
  prompt,
  scope,
  sourceThreadId,
  threadId,
  thinking,
}: {
  hostId?: string | null;
  model?: string | null;
  preferredHostId?: string | null;
  prompt: string;
  scope: BackgroundThreadAppScope;
  sourceThreadId?: string | null;
  threadId: string;
  thinking?: string | null;
}) {
  const resolvedHostId =
    hostId ??
    (
      await resolveThreadHost({
        scope,
        threadId,
        preferredHostId,
      })
    ).hostId;
  await sendAppServerRequest("send-follow-up-message", {
    hostId: resolvedHostId,
    conversationId: parseConversationId(threadId),
    prompt:
      sourceThreadId == null
        ? prompt
        : buildDelegationText({ sourceThreadId, input: prompt }),
    model,
    reasoningEffort: thinking,
    serviceTier: await getServiceTierForModel(
      scope,
      resolvedHostId,
      model ?? null,
    ),
  });
  return { threadId };
}

export async function setBackgroundThreadPinned({
  pinned,
  threadId,
}: {
  pinned: boolean;
  threadId: string;
}) {
  await sendHostRequest("set-thread-pinned", {
    params: { threadId, pinned },
  });
  return { threadId, pinned };
}

export async function setBackgroundThreadArchived(input: {
  archived: boolean;
  scope: BackgroundThreadAppScope;
  threadId: string;
}) {
  return setThreadArchivedTool(input);
}

export async function setBackgroundThreadTitle({
  scope,
  threadId,
  title,
}: {
  scope: BackgroundThreadAppScope;
  threadId: string;
  title: string;
}) {
  const { hostId } = await resolveThreadHost({ scope, threadId });
  await sendAppServerRequest("set-thread-title", {
    hostId,
    conversationId: parseConversationId(threadId),
    title,
  });
  return { threadId, title };
}
