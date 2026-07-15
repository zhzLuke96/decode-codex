// Restored from ref/webview/assets/use-hotkey-window-dismiss-on-escape-D4r0Oase.js
// Alias-compatible with the prior use-hotkey-window-dismiss-on-escape chunks.
// React hook that dismisses the hotkey window when plain Escape is pressed.
import { useEffect } from "react";
import { appServices } from "../boundaries/rpc.facade";
function shouldDismissHotkeyWindow(event: KeyboardEvent): boolean {
  return (
    event.key === "Escape" &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey
  );
}
export function useHotkeyWindowDismissOnEscape(): void {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!shouldDismissHotkeyWindow(event)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      appServices.hotkeyWindowHotkeys?.dismiss();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export function initHotkeyWindowDismissOnEscapeChunk(): void {}
