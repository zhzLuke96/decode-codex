// Restored from ref/webview/assets/use-app-connect-flow-B7CQFxUf.js
import { useCallback, useContext, useMemo, useState } from "react";
import { useGateValue } from "../vendor/statsig-current-runtime";
import { vscodeApiF as vscodeApiBridge } from "../boundaries/vscode-api";
import {
  useAppConnectOAuthState,
  type AppConnectResumeTarget,
} from "../connectors/app-connect-oauth";
import type { AppConnectApp } from "../connectors/apps-queries";
import { UNSAFE_LocationContext } from "../vendor/react-router";
type UseAppConnectFlowOptions = {
  hostId?: string;
  onConnectStarted?: (app: AppConnectApp) => void;
};
type AppConnectOAuthStartedInput = {
  app: AppConnectApp;
  redirectUrl: string;
  resumeTarget?: AppConnectResumeTarget;
};
type UseAppConnectFlowResult = {
  connectingApp: AppConnectApp | null;
  clearConnectingApp: () => void;
  clearPendingAppConnect: ReturnType<
    typeof useAppConnectOAuthState
  >["clearPendingAppConnect"];
  handleAppConnectOAuthStarted: (input: AppConnectOAuthStartedInput) => void;
  handleConnectApp: (app: AppConnectApp) => Promise<void>;
  handleOpenAppUrl: (url: string | null | undefined) => void;
  isAppConnectPending: ReturnType<
    typeof useAppConnectOAuthState
  >["isAppConnectPending"];
};
type RouterLocationContextValue = {
  location?: {
    hash: string;
    pathname: string;
    search: string;
  };
};
const APP_CONNECT_FLOW_GATE = "2761268526";
export function useAppConnectFlow(
  options: UseAppConnectFlowOptions = {},
): UseAppConnectFlowResult {
  const { hostId: configuredHostId, onConnectStarted } = options;
  const routerLocationContext = useContext(
    UNSAFE_LocationContext,
  ) as RouterLocationContextValue | null;
  const hostId = configuredHostId ?? "local";
  const isAppConnectFlowEnabled = useGateValue(APP_CONNECT_FLOW_GATE);
  const {
    clearPendingAppConnect,
    isAppConnectPending,
    markAppConnectOAuthPending,
  } = useAppConnectOAuthState();
  const [connectingApp, setConnectingApp] = useState<AppConnectApp | null>(
    null,
  );
  const handleConnectApp = useCallback(
    async (app: AppConnectApp) => {
      clearPendingAppConnect({
        appId: app.id,
      });
      onConnectStarted?.(app);
      if (!isAppConnectFlowEnabled && app.installUrl?.trim()) {
        openAppUrl(app.installUrl);
        return;
      }
      setConnectingApp(app);
    },
    [clearPendingAppConnect, isAppConnectFlowEnabled, onConnectStarted],
  );
  const clearConnectingApp = useCallback(() => {
    setConnectingApp(null);
  }, []);
  const handleAppConnectOAuthStarted = useCallback(
    ({ app, redirectUrl, resumeTarget }: AppConnectOAuthStartedInput) => {
      markAppConnectOAuthPending({
        app,
        hostId,
        redirectUrl,
        returnTo: getReturnToLocation(routerLocationContext?.location),
        resumeTarget,
      });
    },
    [hostId, markAppConnectOAuthPending, routerLocationContext?.location],
  );
  return useMemo(
    () => ({
      connectingApp,
      clearConnectingApp,
      clearPendingAppConnect,
      handleAppConnectOAuthStarted,
      handleConnectApp,
      handleOpenAppUrl: openAppUrl,
      isAppConnectPending,
    }),
    [
      clearConnectingApp,
      clearPendingAppConnect,
      connectingApp,
      handleAppConnectOAuthStarted,
      handleConnectApp,
      isAppConnectPending,
    ],
  );
}
function openAppUrl(url: string | null | undefined): void {
  const trimmedUrl = url?.trim();
  if (!trimmedUrl) return;
  vscodeApiBridge.dispatchMessage("open-in-browser", {
    url: trimmedUrl,
  });
}
function getReturnToLocation(
  location: RouterLocationContextValue["location"] | undefined,
): string {
  if (location != null) {
    return `${location.pathname}${location.search}${location.hash}`;
  }
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}
