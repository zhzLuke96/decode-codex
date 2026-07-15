// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import {
  vscodeApiH as logger,
  vscodeApiU as queryTimings,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import {
  CODEX_PRODUCT_SKU,
  PRODUCT_SKU_HEADER,
  getAddConnectorLinkFallbackUrl,
  getAppInstallUrlWithSettingsHash,
  getBrowserOAuthCallbackUrl,
  getNativeOAuthCallbackUrl,
  getPostAuthUrl,
} from "./connection-urls";
import type {
  AppConnectApp,
  AppConnectionResult,
  ConnectorDetails,
  ContinueAppReauthenticationOptions,
  StartAppConnectionOptions,
} from "./types";
const CONNECTOR_QUERY_KEY = ["mcp-settings", "app-connect"] as const;
export function connectorQueryOptions(
  connectorId: string,
  {
    includeActions = false,
    includeLogo = false,
  }: {
    includeActions?: boolean;
    includeLogo?: boolean;
  } = {},
) {
  return {
    queryKey: [
      ...CONNECTOR_QUERY_KEY,
      connectorId,
      includeActions,
      includeLogo,
    ],
    staleTime: queryTimings.FIVE_MINUTES,
    queryFn: async () =>
      codexRequest.safeGet("/aip/connectors/{connector_id}", {
        parameters: {
          path: {
            connector_id: connectorId,
          },
          query: {
            include_logo: includeLogo,
            include_actions: includeActions,
          },
        },
        additionalHeaders: {
          [PRODUCT_SKU_HEADER]: CODEX_PRODUCT_SKU,
        },
      }),
  };
}
export async function startAppConnectionFlow({
  app,
  callbackMode = "native",
  connector,
  openInBrowser,
  personalizationMode,
  queryClient,
}: StartAppConnectionOptions): Promise<AppConnectionResult> {
  let resolvedConnector = connector;
  if (resolvedConnector == null) {
    try {
      resolvedConnector = (await queryClient.fetchQuery(
        connectorQueryOptions(app.id),
      )) as ConnectorDetails;
    } catch (error) {
      logger.error("Failed to resolve app connect flow", {
        safe: {
          appId: app.id,
        },
        sensitive: {
          error,
        },
      });
      return openBrowserFallback({
        app,
        openInBrowser,
      })
        ? {
            kind: "browser-fallback",
          }
        : {
            kind: "failed",
          };
    }
  }
  if (resolvedConnector == null)
    return {
      kind: "failed",
    };
  const authType = getSupportedConnectorAuthType(resolvedConnector);
  if (hasRequiredLinkParams(resolvedConnector) || authType === "UNSUPPORTED") {
    return openBrowserFallback({
      app,
      openInBrowser,
    })
      ? {
          kind: "browser-fallback",
        }
      : {
          kind: "failed",
        };
  }
  try {
    const toolSettings =
      personalizationMode == null
        ? undefined
        : {
            personalized: personalizationMode,
          };
    if (authType === "NONE") {
      await codexRequest.safePost("/aip/connectors/links/noauth", {
        requestBody: {
          connector_id: resolvedConnector.id,
          name: resolvedConnector.name,
          action_names: [],
          tool_settings: toolSettings,
        },
        additionalHeaders: {
          [PRODUCT_SKU_HEADER]: CODEX_PRODUCT_SKU,
        },
      });
      return {
        kind: "connected-directly",
      };
    }
    const callbackUrl =
      callbackMode === "browser"
        ? getBrowserOAuthCallbackUrl(app)
        : await getNativeOAuthCallbackUrl();
    const redirectUrl = (
      (await codexRequest.safePost("/aip/connectors/links/oauth", {
        requestBody: {
          connector_id: resolvedConnector.id,
          name: resolvedConnector.name,
          action_names: null,
          callback_url: callbackUrl,
          post_auth_url: getPostAuthUrl(app),
          tool_settings: toolSettings,
        },
        additionalHeaders: {
          [PRODUCT_SKU_HEADER]: CODEX_PRODUCT_SKU,
        },
      })) as {
        redirect_url?: string | null;
      }
    ).redirect_url?.trim();
    if (!redirectUrl) {
      throw Error("OAuth redirect URL missing in connector response.");
    }
    openInBrowser(redirectUrl);
    return {
      kind: "oauth-started",
      redirectUrl,
    };
  } catch (error) {
    logger.error("Failed to connect app {}", {
      safe: {
        templateArgs: [app.id],
      },
      sensitive: {
        error,
      },
    });
    return openBrowserFallback({
      app,
      openInBrowser,
    })
      ? {
          kind: "browser-fallback",
        }
      : {
          kind: "failed",
        };
  }
}
export async function continueAppReauthenticationFlow({
  app,
  authReason,
  fallbackUrl,
  linkId,
  openInBrowser,
  queryClient,
  requestedScopes,
}: ContinueAppReauthenticationOptions): Promise<AppConnectionResult> {
  if (authReason === "missing_link") {
    return startAppConnectionFlow({
      app,
      openInBrowser,
      queryClient,
    });
  }
  const trimmedLinkId = linkId?.trim();
  if (trimmedLinkId) {
    try {
      const redirectUrl = (
        (await codexRequest.safePost("/aip/connectors/links/oauth/reauth", {
          requestBody: {
            callback_url: await getNativeOAuthCallbackUrl(),
            link_id: trimmedLinkId,
            post_auth_url: getPostAuthUrl(app),
            ...(requestedScopes == null
              ? {}
              : {
                  requested_scopes: requestedScopes,
                }),
          },
          additionalHeaders: {
            [PRODUCT_SKU_HEADER]: CODEX_PRODUCT_SKU,
          },
        })) as {
          redirect_url?: string | null;
        }
      ).redirect_url?.trim();
      if (!redirectUrl) {
        throw Error("OAuth redirect URL missing in connector response.");
      }
      openInBrowser(redirectUrl);
      return {
        kind: "oauth-started",
        redirectUrl,
      };
    } catch (error) {
      logger.error("Failed to reauthenticate app {}", {
        safe: {
          templateArgs: [app.id],
        },
        sensitive: {
          error,
        },
      });
    }
  }
  const trimmedFallbackUrl = fallbackUrl.trim();
  return trimmedFallbackUrl
    ? (openInBrowser(trimmedFallbackUrl),
      {
        kind: "browser-fallback",
      })
    : {
        kind: "failed",
      };
}
function hasSchemaProperties(schema: unknown): boolean {
  if (typeof schema !== "object" || schema == null) return false;
  const record = schema as {
    properties?: unknown;
    required?: unknown;
  };
  if (record.properties && typeof record.properties === "object") {
    return Object.keys(record.properties).length > 0;
  }
  return Array.isArray(record.required) && record.required.length > 0;
}
function hasRequiredLinkParams(connector: ConnectorDetails): boolean {
  return hasSchemaProperties(connector.link_params_schema);
}
function getSupportedConnectorAuthType(
  connector: ConnectorDetails,
): "NONE" | "OAUTH" | "UNSUPPORTED" {
  return connector.supported_auth.some((auth) => auth.type === "OAUTH")
    ? "OAUTH"
    : connector.supported_auth.some((auth) => auth.type === "NONE")
      ? "NONE"
      : "UNSUPPORTED";
}
function openBrowserFallback({
  app,
  openInBrowser,
}: {
  app: AppConnectApp;
  openInBrowser: (url: string) => void;
}): boolean {
  const fallbackUrl = getAddConnectorLinkFallbackUrl(app);
  if (fallbackUrl == null) return false;
  openInBrowser(fallbackUrl);
  return true;
}
