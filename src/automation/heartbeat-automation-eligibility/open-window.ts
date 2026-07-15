// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js.
import { readStatsigGateValue } from "../../vendor/statsig-current-runtime";
import { createLocalConversationPath } from "../../boundaries/src-l0hb-mz-p";
import { vscodeApiF as vscodeApi } from "../../boundaries/vscode-api";
const OPEN_THREAD_IN_NEW_WINDOW_GATE = "459748632";
export function useOpenThreadInNewWindow({
  conversationId,
}: {
  conversationId: string | null | undefined;
}): {
  canOpenThreadInNewWindow: boolean;
  openThreadInNewWindow(): void;
} {
  const canOpenThreadInNewWindow =
    readStatsigGateValue(OPEN_THREAD_IN_NEW_WINDOW_GATE) &&
    conversationId != null;
  const openThreadInNewWindow = () => {
    if (!canOpenThreadInNewWindow || conversationId == null) return;
    vscodeApi.dispatchMessage("open-in-new-window", {
      path: createLocalConversationPath(conversationId),
    });
  };
  return {
    canOpenThreadInNewWindow,
    openThreadInNewWindow,
  };
}

export function initOpenThreadInNewWindowChunk(): void {}
