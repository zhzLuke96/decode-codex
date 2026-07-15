// Restored from ref/webview/assets/app-connect-oauth-callback-page-DoWgOqbw.js
import React from "react";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import { localConversationRoutePattern } from "../boundaries/src-l0hb-mz-p";
import {
  parseAppConnectOAuthCallbackSearchState,
  useAppConnectOAuthState,
  useHandleAppConnectOAuthCallback,
  type PendingAppConnectOAuth,
} from "../connectors/app-connect-oauth";
import { usePluginInstallSession } from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { Spinner } from "../ui/spinner";
import { toastApiSignal } from "../ui/toast-signal";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { matchPath, useLocation, useNavigate } from "../vendor/react-router";
type ToastOptions = {
  duration?: number;
  id: string;
};
type ToastApiLike = {
  danger(content: React.ReactNode, options: ToastOptions): void;
  info(content: React.ReactNode, options: ToastOptions): void;
  success(content: React.ReactNode, options: ToastOptions): void;
};
type AppScopeWithToast = {
  get<TValue>(signal: unknown): TValue;
};
type CallbackToastInput = {
  appId?: string;
  appName?: string;
  fullRedirectUrl: string | null;
  shouldShowPendingToast: boolean;
  shouldShowSuccessToast: boolean;
};
type RequiredAppStatusInput = {
  appId?: string;
  status: "connected" | "pending";
};
type ConnectAppBeforeInstallSession = {
  kind: "connectAppBeforeInstall";
  app: {
    id: string;
  };
};
type PluginInstallSessionForOAuthCallback =
  | ConnectAppBeforeInstallSession
  | {
      kind: string;
      app?: {
        id: string;
      };
    };
type PluginInstallSessionApi = {
  markRequiredAppStatus(input: { appId: string; status: string }): void;
  session: PluginInstallSessionForOAuthCallback;
};
function isConnectAppBeforeInstallSession(
  session: PluginInstallSessionForOAuthCallback,
): session is ConnectAppBeforeInstallSession {
  return session.kind === "connectAppBeforeInstall" && session.app != null;
}
export function AppConnectOAuthCallbackPage() {
  const appScope = useAppScope(appScopeRoot) as AppScopeWithToast;
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const handleOAuthCallback = useHandleAppConnectOAuthCallback();
  const { getPendingAppConnectForCallbackUrl } = useAppConnectOAuthState();
  const { markRequiredAppStatus, session } =
    usePluginInstallSession() as PluginInstallSessionApi;
  const handledLocationKeyRef = React.useRef<string | null>(null);
  const markRequiredAppForCallback = React.useEffectEvent(
    ({ appId, status }: RequiredAppStatusInput) => {
      if (!isConnectAppBeforeInstallSession(session)) return;
      if (appId != null && session.app.id !== appId) return;
      markRequiredAppStatus({
        appId: session.app.id,
        status,
      });
    },
  );
  const handleCallbackToasts = React.useEffectEvent(
    async ({
      appId,
      appName,
      fullRedirectUrl,
      shouldShowPendingToast,
      shouldShowSuccessToast,
    }: CallbackToastInput) => {
      const toastId = getCallbackToastId(appId);
      const toastApi = appScope.get<ToastApiLike>(toastApiSignal);
      if (
        shouldShowPendingToast &&
        fullRedirectUrl != null &&
        fullRedirectUrl.length > 0
      ) {
        toastApi.info(
          <span className="loading-shimmer-pure-text">
            <FormattedMessage
              id="apps.appConnectOAuthCallbackPage.pending"
              defaultMessage="Finishing {connector} setup"
              description="Toast shown when an app OAuth callback has returned and Codex is finishing setup"
              values={{
                connector:
                  appName ??
                  intl.formatMessage({
                    id: "apps.appConnectOAuthCallbackPage.fallbackAppName",
                    defaultMessage: "App",
                    description:
                      "Fallback app name used in app connect callback pending toasts",
                  }),
              }}
            />
          </span>,
          {
            duration: 0,
            id: toastId,
          },
        );
      }
      const result = await handleOAuthCallback({
        fullRedirectUrl: fullRedirectUrl ?? "",
      });
      switch (result.kind) {
        case "missing-callback-data":
          toastApi.danger(
            <FormattedMessage
              id="apps.appConnectOAuthCallbackPage.missingData"
              defaultMessage="Missing OAuth callback data."
              description="Toast shown when an app connection OAuth callback is missing the redirect URL"
            />,
            {
              id: toastId,
            },
          );
          break;
        case "request-failed":
          toastApi.danger(
            result.message ??
              intl.formatMessage({
                id: "apps.appConnectOAuthCallbackPage.requestFailed",
                defaultMessage: "Failed to finish connecting app.",
                description:
                  "Toast shown when finishing an app connection OAuth callback fails",
              }),
            {
              id: toastId,
            },
          );
          break;
        case "success":
          if (!shouldShowSuccessToast) break;
          toastApi.success(
            <FormattedMessage
              id="apps.appConnectOAuthCallbackPage.success"
              defaultMessage="{appName} is now connected."
              description="Toast shown when an app connection OAuth callback succeeds"
              values={{
                appName: result.appName,
              }}
            />,
            {
              id: toastId,
            },
          );
      }
      return result;
    },
  );
  React.useEffect(() => {
    if (handledLocationKeyRef.current === location.key) return;
    handledLocationKeyRef.current = location.key;
    const callbackState = parseAppConnectOAuthCallbackSearchState(
      location.state,
    );
    const fullRedirectUrl = callbackState?.fullRedirectUrl?.trim();
    const pendingCallback =
      fullRedirectUrl != null && fullRedirectUrl.length > 0
        ? getPendingAppConnectForCallbackUrl(fullRedirectUrl)
        : null;
    const returnTo =
      pendingCallback?.returnTo ?? callbackState?.returnTo ?? "/skills";
    const isPluginInstallResume =
      pendingCallback?.resumeTarget.kind === "plugin-install";
    const isConnectorAuthResume =
      pendingCallback?.resumeTarget.kind === "connector-auth-elicitation";
    handleCallbackToasts({
      appId: pendingCallback?.appId,
      appName: pendingCallback?.appName,
      fullRedirectUrl: fullRedirectUrl ?? null,
      shouldShowPendingToast: false,
      shouldShowSuccessToast: !isPluginInstallResume && !isConnectorAuthResume,
    }).then((result) => {
      if (result.kind === "success") {
        markRequiredAppForCallback({
          appId: result.appId,
          status: "connected",
        });
      } else if (isPluginInstallResume || pendingCallback == null) {
        markRequiredAppForCallback({
          appId: pendingCallback?.appId,
          status: "pending",
        });
      }
      if (matchPath(localConversationRoutePattern, returnTo) != null) {
        navigate(returnTo, {
          replace: true,
        });
        return;
      }
      navigateAfterCallback({
        navigate,
        pendingCallback,
        returnTo,
      });
    });
  }, [
    getPendingAppConnectForCallbackUrl,
    handleCallbackToasts,
    location.key,
    location.state,
    markRequiredAppForCallback,
    navigate,
  ]);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner className="icon-sm" />
    </div>
  );
}
function navigateAfterCallback({
  navigate,
  pendingCallback,
  returnTo,
}: {
  navigate: ReturnType<typeof useNavigate>;
  pendingCallback: PendingAppConnectOAuth | null;
  returnTo: string;
}): void {
  switch (pendingCallback?.resumeTarget.kind) {
    case "plugin-install":
      navigate(returnTo, {
        replace: true,
        state: {
          initialHostId: pendingCallback.hostId,
          initialTab: "plugins",
        },
      });
      return;
    case "connector-auth-elicitation":
      navigate(returnTo, {
        replace: true,
      });
      return;
    case "apps-tab":
    case undefined:
      navigate(returnTo, {
        replace: true,
        state: {
          connectAppId: pendingCallback?.appId,
          initialHostId: pendingCallback?.hostId,
          initialTab: "apps",
        },
      });
  }
}
function getCallbackToastId(appId: string | undefined): string {
  return appId == null
    ? "app-connect-oauth-callback"
    : `app-connect-oauth-callback-${appId}`;
}
