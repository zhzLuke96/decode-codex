// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Background runner for executing a planned thread handoff operation.

import { serviceClientForHost } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { sendMessageToBackgroundThread } from "../boundaries/onboarding-commons-externals.facade";
import {
  setHandoffDestinationThreadId,
  setHandoffError,
  setHandoffStatus,
  setHandoffWarning,
  updateHandoffStep,
} from "./thread-handoff-progress";
import { appLogger as logger, serializeError } from "../runtime/app-logger";
import type { HandoffContext, MoveThreadResult } from "./handoff-thread-types";

export type RunHandoffOptions = {
  callingThreadId: string | null;
  context: HandoffContext;
  destinationHostId: string;
  followUpPrompt: string | undefined;
  run: () => Promise<MoveThreadResult>;
};

export function startHandoff(options: RunHandoffOptions): void {
  void runHandoff(options);
}

async function runHandoff({
  callingThreadId,
  context,
  destinationHostId,
  followUpPrompt,
  run,
}: RunHandoffOptions): Promise<void> {
  const unsubscribe = serviceClientForHost("git").subscribe(
    "thread-handoff-progress",
    (event: { operationId: string; step: string; status: string }) => {
      if (event.operationId !== context.operationId) return;
      let stepStatus: "done" | "running" | "failed" | undefined;
      switch (event.status) {
        case "completed":
        case "skipped":
          stepStatus = "done";
          break;
        case "started":
          stepStatus = "running";
          break;
        case "failed":
          stepStatus = "failed";
          break;
      }
      if (stepStatus != null)
        updateHandoffStep(context, event.step, stepStatus);
    },
  );
  try {
    setHandoffStatus(context, "running");
    const result = await run();
    if (result.status === "error") {
      setHandoffError(context, result.message);
      return;
    }
    if (result.conversationId === context.threadId) {
      setHandoffWarning(
        context,
        "Git handoff completed, but the destination thread could not be created.",
      );
      return;
    }
    setHandoffDestinationThreadId(context, result.conversationId);
    archiveSourceThread(context);
    if (followUpPrompt != null) {
      await sendMessageToBackgroundThread({
        hostId: destinationHostId,
        model: undefined,
        prompt: followUpPrompt,
        scope: context.scope,
        sourceThreadId: callingThreadId,
        threadId: result.conversationId,
        thinking: undefined,
      });
    }
    setHandoffStatus(context, "success");
  } catch (error) {
    logger.warning("Thread handoff failed unexpectedly: {}", {
      sensitive: { error: serializeError(error) },
      safe: { operationId: context.operationId },
    });
    setHandoffError(
      context,
      error instanceof Error ? error.message : "Thread handoff failed.",
    );
  } finally {
    unsubscribe();
  }
}

function archiveSourceThread(context: HandoffContext): void {
  sendAppServerRequest("archive-conversation", {
    conversationId: context.threadId,
    cleanupWorktree: false,
    source: "thread_handoff",
  }).catch((error: unknown) => {
    logger.warning("Thread handoff succeeded, but source archive failed: {}", {
      sensitive: { error: serializeError(error) },
      safe: { threadId: context.threadId },
    });
  });
}
