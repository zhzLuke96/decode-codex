// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Bridges the "slingshot" (remote-control connections) Statsig gate to the host:
// whenever the gate value settles it tells the host to enable/disable remote-control
// connections. Rendered only where remote-control bridges are available.
import { useEffect, type ReactElement } from "react";
import {
  invokeAppServerRequest,
  isRemoteControlBridgeDisabled,
  logger,
  useFeatureGateClient,
} from "../boundaries/onboarding-commons-externals.facade";

const SLINGSHOT_GATE_BRIDGE_LOG_LABEL =
  "[remote-connections/slingshot-gate-bridge]";

const SLINGSHOT_GATE_ID = "1042620455";

export function SlingshotGateBridge(): ReactElement | null {
  if (isRemoteControlBridgeDisabled()) return null;
  return <SlingshotGateBridgeEffect />;
}

function SlingshotGateBridgeEffect(): null {
  const { checkGate, isLoading } = useFeatureGateClient();
  const slingshotEnabled = checkGate(SLINGSHOT_GATE_ID);

  useEffect(() => {
    if (isLoading) return;
    invokeAppServerRequest("set-remote-control-connections-enabled", {
      params: { enabled: slingshotEnabled },
    }).catch((error: unknown) => {
      logger.warning(`${SLINGSHOT_GATE_BRIDGE_LOG_LABEL} sync_failed`, {
        safe: { slingshotEnabled },
        sensitive: { error },
      });
    });
  }, [isLoading, slingshotEnabled]);

  return null;
}
