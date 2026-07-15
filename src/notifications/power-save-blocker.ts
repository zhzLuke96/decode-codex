// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Power-save-blocker controller: tells the Electron main process to block system
// sleep while a turn is running, and to keep remote-control hosts awake on AC power.
import { useEffect } from "react";
import {
  appStore,
  hasRunningTurnAtom,
  isHostPluggedInAtom,
  LOCAL_HOST_ID,
  powerSaveSettings,
  useScopedAtomValue,
  useSetting,
  useStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { vscodeApiF } from "../boundaries/vscode-api";

interface AppStoreScope {
  get: <T = unknown>(atom: unknown, ...args: unknown[]) => T;
  watch: (
    subscriber: (api: { get: <T = unknown>(atom: unknown) => T }) => void,
  ) => () => void;
}

export function PowerSaveBlockerController(): null {
  const store = useStore(appStore) as AppStoreScope;
  const preventSleepWhileRunning = useSetting(
    powerSaveSettings.preventSleepWhileRunning,
  ) as boolean;
  const keepRemoteControlAwakeWhilePluggedIn = useSetting(
    powerSaveSettings.keepRemoteControlAwakeWhilePluggedIn,
  ) as boolean;
  const isPluggedIn = useScopedAtomValue(
    isHostPluggedInAtom,
    LOCAL_HOST_ID,
  ) as boolean;

  useEffect(
    () =>
      store.watch(({ get }) => {
        vscodeApiF.dispatchMessage("power-save-blocker-set", {
          shouldBlock:
            !!preventSleepWhileRunning && get<boolean>(hasRunningTurnAtom),
          keepRemoteControlAwakeWhilePluggedIn:
            !!keepRemoteControlAwakeWhilePluggedIn && isPluggedIn,
        });
      }),
    [
      keepRemoteControlAwakeWhilePluggedIn,
      preventSleepWhileRunning,
      isPluggedIn,
      store,
    ],
  );

  useEffect(() => resetPowerSaveBlocker, []);
  return null;
}

function resetPowerSaveBlocker(): void {
  vscodeApiF.dispatchMessage("power-save-blocker-set", {
    shouldBlock: false,
    keepRemoteControlAwakeWhilePluggedIn: false,
  });
}
