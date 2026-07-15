// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Browser find command bridge used by the thread find bar.
import { vscodeApiF } from "../../boundaries/vscode-api";
import type { BrowserFindCommand, ThreadFindBrowserTarget } from "./types";

export function dispatchBrowserFindCommand(
  target: ThreadFindBrowserTarget,
  command: BrowserFindCommand,
): void {
  if (target == null) return;
  vscodeApiF.dispatchMessage("browser-sidebar-command", {
    browserTabId: target.browserTabId,
    command,
    conversationId: target.conversationId,
  });
}
