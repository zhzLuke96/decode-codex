// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-detail-layout~local-conversation-page-BnkJ2KOs.js
// Registers hotkey-window detail layout shortcuts from command keybindings.
import { useCommandHotkey } from "../../utils/use-command-hotkey";

export type HotkeyDetailLayoutCommandShortcutOptions = {
  commandId: string;
  enabled?: boolean;
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
  capture?: boolean;
  ignoreWithin?: string;
  keyboardEventTarget?: EventTarget | null;
};

function useHotkeyDetailLayoutCommandShortcut(
  options: HotkeyDetailLayoutCommandShortcutOptions,
): void {
  useCommandHotkey(options);
}

function initHotkeyDetailLayoutShortcutRuntimeChunk(): void {}

export {
  useHotkeyDetailLayoutCommandShortcut,
  initHotkeyDetailLayoutShortcutRuntimeChunk,
};
