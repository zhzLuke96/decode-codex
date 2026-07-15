// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-BwqxraHe.js
// ID generation for queued thread handoff operations.
import { uuidV4 } from "../../utils/uuid-v4";

export function initThreadHandoffOperationIdsChunk(): void {}

export function createThreadHandoffOperationId() {
  return uuidV4() as string;
}
