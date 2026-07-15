// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless listener that toggles the debug modal in response to the
// "toggle-debug-modal" host message and the Alt+D keyboard shortcut, gated on
// the build channel allowing the debug menu.

import { useEffect } from "react";
import {
  AppBuildChannel,
  appScopeAtom,
  getAppBuildChannel,
  useAtomValue,
  useHostMessageHandler,
} from "../boundaries/onboarding-commons-externals.facade";
import { toggleDebugModal } from "./debug-modal-loader";

function isToggleDebugModalHotkey(event: KeyboardEvent): boolean {
  return (
    event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey &&
    (event.key.toLowerCase() === "d" || event.code === "KeyD")
  );
}

export function DebugModalHotkeys() {
  const scope = useAtomValue(appScopeAtom);
  const isDebugMenuAllowed =
    AppBuildChannel.allowDebugMenu(getAppBuildChannel());

  useHostMessageHandler(
    "toggle-debug-modal",
    () => {
      if (isDebugMenuAllowed) toggleDebugModal(scope);
    },
    [isDebugMenuAllowed, scope],
  );

  useEffect(() => {
    if (!isDebugMenuAllowed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (isToggleDebugModalHotkey(event)) {
        event.preventDefault();
        event.stopPropagation();
        toggleDebugModal(scope);
      }
    };
    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown, { capture: true });
    };
  }, [isDebugMenuAllowed, scope]);

  return null;
}
