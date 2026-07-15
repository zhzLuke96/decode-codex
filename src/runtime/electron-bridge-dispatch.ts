// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Sends a message to the Electron/VS Code host bridge singleton.
import { vscodeMessageBridge } from "./vscode-message-runtime";

export function electronBridgeDispatch(
  messageType: string,
  payload?: unknown,
): void {
  vscodeMessageBridge.dispatchMessage(messageType, payload);
}
