// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Async host request to hydrate background thread state for a set of thread IDs.
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";

export interface HydrateBackgroundThreadsParams {
  hostId: string;
  threadIds: string[];
}

export async function hydrateBackgroundThreads({
  hostId,
  threadIds,
}: HydrateBackgroundThreadsParams): Promise<void> {
  await sendAppServerRequest("hydrate-background-threads", {
    hostId,
    threadIds,
  });
}
