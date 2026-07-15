// Restored from ref/webview/assets/use-command-hotkey-w91Z1IHx.js
import { _appScopeA } from "../boundaries/app-scope";
import { primaryCommandAcceleratorSignal } from "./command-keybindings";
import { useHotkey } from "./use-hotkey";
type UseCommandHotkeyOptions = {
  commandId: string;
  enabled?: boolean;
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
  capture?: boolean;
  ignoreWithin?: string;
  keyboardEventTarget?: EventTarget | null;
};
export function useCommandHotkey({
  commandId,
  enabled = true,
  onKeyDown,
  onKeyUp,
  capture,
  ignoreWithin,
  keyboardEventTarget,
}: UseCommandHotkeyOptions) {
  const accelerator = _appScopeA(primaryCommandAcceleratorSignal, commandId);
  useHotkey({
    accelerator: accelerator ?? "",
    enabled: enabled && accelerator != null,
    onKeyDown,
    onKeyUp,
    capture,
    ignoreWithin,
    keyboardEventTarget,
  });
}
