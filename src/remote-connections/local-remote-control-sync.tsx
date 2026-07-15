// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless effect that pushes the locally persisted "remote control enabled" flag
// down to the host whenever it changes, surfacing sync failures as toasts + logs.
import { useEffect } from "react";
import {
  appStore,
  logger,
  useSharedStateValue,
  useStore,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  handleLocalRemoteControlEnableError,
  setLocalRemoteControlEnabled,
} from "../runtime/current-app-initial/remote-connections-auth-state-runtime";

export function LocalRemoteControlSyncEffect(): null {
  const store = useStore(appStore);
  const [localRemoteControlEnabled] = useSharedStateValue(
    "local_remote_control_enabled",
  ) as [boolean | null | undefined];

  useEffect(() => {
    if (localRemoteControlEnabled == null) return;
    setLocalRemoteControlEnabled(store, localRemoteControlEnabled).catch(
      (error: unknown) => {
        handleLocalRemoteControlEnableError(store, error);
        logger.error("Failed to sync local remote control enablement", {
          safe: {},
          sensitive: { error },
        });
      },
    );
  }, [localRemoteControlEnabled, store]);

  return null;
}
