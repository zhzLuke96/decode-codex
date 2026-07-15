// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Host-message command hooks used by thread side panel surfaces.
import { vscodeApiP } from "../boundaries/vscode-api";

type ToggleDiffPanelMessage = {
  open: boolean;
};

export function useRegisterToggleDiffPanelCommand(
  setOpen: (open: boolean) => void,
): void {
  vscodeApiP<ToggleDiffPanelMessage>(
    "toggle-diff-panel",
    (message) => {
      setOpen(message.open);
    },
    [setOpen],
  );
}

export function initThreadPanelCommandHooksChunk(): void {}
