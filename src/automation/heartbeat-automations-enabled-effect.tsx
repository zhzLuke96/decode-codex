// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Keeps the app-wide "heartbeat automations enabled" flag in sync with its
// feature gate and broadcasts changes to the host.

import { useEffect } from "react";
import { useFeatureGate } from "../boundaries/statsig.facade";
import {
  appMessenger,
  setHeartbeatAutomationsEnabled,
} from "../boundaries/onboarding-commons-externals.facade";

export function HeartbeatAutomationsEnabledEffect() {
  const enabled = useFeatureGate("1488233300");

  useEffect(() => {
    setHeartbeatAutomationsEnabled(enabled);
    appMessenger.dispatchMessage("heartbeat-automations-enabled-changed", {
      enabled,
    });
  }, [enabled]);

  return null;
}
