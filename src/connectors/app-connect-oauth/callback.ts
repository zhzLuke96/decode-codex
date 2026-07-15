// Restored from ref/webview/assets/app-connect-oauth-CaBlbuQW.js
import { useCallback } from "react";
import {
  sendAppServerRequest,
  useHostConfigXt as createMcpElicitationResponse,
} from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import { parseCodexApiErrorDetail } from "../../utils/codex-api-error";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import { hardRefreshAppsList } from "../apps-queries";
import { refreshAppsAndMaybeAmbientSuggestions } from "./refresh";
import { useAppConnectOAuthState } from "./state";
import type {
  AppConnectOAuthCallbackInput,
  AppConnectOAuthCallbackResult,
  AppConnectOAuthQueryClient,
} from "./types";
import { getUrlSearchParam } from "./types";
export function useHandleAppConnectOAuthCallback(): (
  input: AppConnectOAuthCallbackInput,
) => Promise<AppConnectOAuthCallbackResult> {
  const queryClient = useQueryClient() as AppConnectOAuthQueryClient;
  const invalidateQuery = invalidateQueriesAndBroadcast();
  const {
    clearPendingAppConnect,
    getPendingAppConnectForCallbackUrl,
    markAppConnectOAuthCallbackCompleted,
  } = useAppConnectOAuthState();
  return useCallback(
    async ({ fullRedirectUrl }) => {
      const trimmedRedirectUrl = fullRedirectUrl.trim();
      const pendingCallback =
        trimmedRedirectUrl.length === 0
          ? null
          : getPendingAppConnectForCallbackUrl(trimmedRedirectUrl);
      const hostId = pendingCallback?.hostId ?? "local";
      const oauthState =
        pendingCallback?.oauthState ??
        getUrlSearchParam(trimmedRedirectUrl, "state") ??
        undefined;
      if (trimmedRedirectUrl.length === 0) {
        clearPendingAppConnect({
          oauthState,
        });
        return {
          kind: "missing-callback-data",
        };
      }
      let result: AppConnectOAuthCallbackResult;
      try {
        const response = (await codexRequest.safePost(
          "/aip/connectors/links/oauth/callback",
          {
            requestBody: {
              full_redirect_url: trimmedRedirectUrl,
            },
          },
        )) as {
          link?: {
            name?: string | null;
          } | null;
        };
        if (oauthState != null) {
          markAppConnectOAuthCallbackCompleted(oauthState);
        }
        result = {
          kind: "success",
          appName:
            response.link?.name?.trim() || pendingCallback?.appName || "App",
        };
      } catch (error) {
        vscodeLogger.error("Failed to finish app OAuth callback", {
          safe: {},
          sensitive: {
            error,
          },
        });
        const message =
          error instanceof Error
            ? parseCodexApiErrorDetail(error)?.message.trim()
            : undefined;
        result =
          message != null && message.length > 0
            ? {
                kind: "request-failed",
                message,
              }
            : {
                kind: "request-failed",
              };
      }
      await Promise.allSettled([
        refreshAppsAndMaybeAmbientSuggestions({
          hostId,
          queryClient,
          refreshAppsList: async () =>
            hardRefreshAppsList({
              hostId,
              queryClient,
            }),
        }),
        invalidateQuery(["mcp-settings"]),
        invalidateQuery(["mcp-settings", "app-connect"]),
      ]);
      if (
        result.kind === "success" &&
        pendingCallback?.resumeTarget.kind === "connector-auth-elicitation"
      ) {
        try {
          await sendAppServerRequest(
            "reply-with-mcp-server-elicitation-response",
            {
              conversationId: pendingCallback.resumeTarget.conversationId,
              requestId: pendingCallback.resumeTarget.requestId,
              response: createMcpElicitationResponse("accept"),
            },
          );
        } catch (error) {
          vscodeLogger.error("Failed to resume connector auth elicitation", {
            safe: {
              connectorId: pendingCallback.appId,
            },
            sensitive: {
              error,
            },
          });
          return result;
        }
      }
      clearPendingAppConnect({
        oauthState,
      });
      return result;
    },
    [
      clearPendingAppConnect,
      getPendingAppConnectForCallbackUrl,
      invalidateQuery,
      markAppConnectOAuthCallbackCompleted,
      queryClient,
    ],
  );
}
