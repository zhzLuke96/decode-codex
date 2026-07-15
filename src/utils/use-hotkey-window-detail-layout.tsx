// Restored from ref/webview/assets/use-hotkey-window-detail-layout-D-pNZzEr.js
// Hotkey window detail layout context restored from the current Codex webview bundle.

import { createContext, useContext, useLayoutEffect } from "react";
export function initHotkeyWindowDetailLayoutChunk(): void {}
type HotkeyWindowDetailLayoutRegistration = unknown;
type HotkeyWindowDetailLayoutSetter = (
  registration: HotkeyWindowDetailLayoutRegistration | null,
) => void;
const HotkeyWindowDetailLayoutContext =
  createContext<HotkeyWindowDetailLayoutSetter | null>(null);
function useHotkeyWindowDetailLayout(
  registration: HotkeyWindowDetailLayoutRegistration,
) {
  const setDetailLayout = useContext(HotkeyWindowDetailLayoutContext);
  useLayoutEffect(() => {
    if (setDetailLayout != null) {
      setDetailLayout(registration);
      return () => {
        setDetailLayout(null);
      };
    }
    return undefined;
  }, [registration, setDetailLayout]);
}
export { useHotkeyWindowDetailLayout, HotkeyWindowDetailLayoutContext };
