// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Bridges the Windows/WSL remote-connections feature flag to the host: on Windows,
// when the current host's config enables WSL connections it tells the host to enable
// them (and disables them otherwise). Rendered only where remote-control bridges apply.
import { useEffect, type ReactElement } from "react";
import {
  currentHostIdSignal,
  invokeAppServerRequest,
  isRemoteControlBridgeDisabled,
  isWslConnectionsEnabledInConfig,
  logger,
  remoteHostConfigQuery,
  useHostPlatform,
  useSharedQuery,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

const WSL_FEATURE_BRIDGE_LOG_LABEL = "[remote-connections/wsl-feature-bridge]";

export function WslFeatureBridge(): ReactElement | null {
  if (isRemoteControlBridgeDisabled()) return null;
  return <WslFeatureBridgeEffect />;
}

function WslFeatureBridgeEffect(): null {
  const currentHostId = useSignalValue(currentHostIdSignal);
  const { platform, isLoading } = useHostPlatform();
  const { data, isLoading: isConfigLoading } = useSharedQuery(
    remoteHostConfigQuery,
    currentHostId,
  );
  const wslEnabled =
    platform === "windows" && isWslConnectionsEnabledInConfig(data?.config);

  useEffect(() => {
    if (isLoading || isConfigLoading) return;
    invokeAppServerRequest("set-remote-wsl-connections-enabled", {
      params: { enabled: wslEnabled },
    }).catch((error: unknown) => {
      logger.warning(`${WSL_FEATURE_BRIDGE_LOG_LABEL} sync_failed`, {
        safe: { enabled: wslEnabled },
        sensitive: { error },
      });
    });
  }, [wslEnabled, isLoading, isConfigLoading]);

  return null;
}
