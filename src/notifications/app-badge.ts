// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Electron app badge: mirrors the unread badge count onto the OS dock/taskbar icon.
import { useEffect } from "react";
import {
  appBadgeCountAtom,
  useAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { vscodeApiF } from "../boundaries/vscode-api";

export function ElectronAppBadge(): null {
  const count = useAtomValue(appBadgeCountAtom) as number;
  useEffect(() => {
    vscodeApiF.dispatchMessage("electron-set-badge-count", { count });
  }, [count]);
  return null;
}
