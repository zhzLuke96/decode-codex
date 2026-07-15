// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless effect: keeps the analytics client and the Electron host in sync with
// the current telemetry user (account/user id are only shared once the telemetry
// eligibility query confirms consent), and never runs on remote hosts.
import { useEffect } from "react";
import { hostMessageBridge } from "../runtime/app-main-host-runtime";
import { useAuth } from "../auth/use-auth";
import {
  setAnalyticsUser,
  useIsRemoteHost,
  useTelemetryEligibilityQuery,
} from "../boundaries/onboarding-commons-externals.facade";

interface TelemetryUser {
  authMethod: string | null;
  accountId: string | null;
  userId: string | null;
  email: string | null;
}

export function TelemetryUserEffect(): null {
  const isRemoteHost = useIsRemoteHost();
  const auth = useAuth();
  const { accountId, authMethod, userId } = auth;
  const {
    data: isTelemetryEligible,
    isLoading,
    isError,
  } = useTelemetryEligibilityQuery(!isRemoteHost);
  const canSync = !isRemoteHost && !auth.isLoading && !isLoading && !isError;

  useEffect(() => {
    if (!canSync) return;
    const telemetryUser: TelemetryUser = {
      authMethod,
      accountId: isTelemetryEligible ? accountId : null,
      userId: isTelemetryEligible ? (userId ?? null) : null,
      email: null,
    };
    setAnalyticsUser(telemetryUser);
    hostMessageBridge.dispatchMessage("set-telemetry-user", telemetryUser);
  }, [accountId, isTelemetryEligible, authMethod, userId, canSync]);

  return null;
}
