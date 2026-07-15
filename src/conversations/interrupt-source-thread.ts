// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// When handing a thread off to another worktree/host, stop the source thread's
// active turn first if it is still running (system-initiated interrupt).

import { sendAppServerRequest } from "../boundaries/use-host-config.facade";

type InterruptSourceThreadOptions = {
  conversationId: string;
  sourceThreadRunning: boolean;
};

export function initInterruptSourceThreadChunk(): void {}

export async function interruptSourceThreadIfRunning({
  conversationId,
  sourceThreadRunning,
}: InterruptSourceThreadOptions): Promise<void> {
  if (sourceThreadRunning) {
    await sendAppServerRequest("interrupt-conversation", {
      conversationId,
      initiatedBy: "system",
    });
  }
}
