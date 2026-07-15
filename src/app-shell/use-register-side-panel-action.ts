// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Registers a handler for the host "toggle-diff-panel" side-panel action,
// forwarding the requested open state to the supplied callback.
import { useElectronMessageHandler } from "../runtime/use-electron-message-handler";

export function useRegisterSidePanelAction(
  onToggle: (open: boolean) => void,
): void {
  useElectronMessageHandler<{ open: boolean }>(
    "toggle-diff-panel",
    (message) => {
      onToggle(message.open);
    },
    [onToggle],
  );
}
