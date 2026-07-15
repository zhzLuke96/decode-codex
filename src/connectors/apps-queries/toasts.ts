// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import type { IntlLike } from "./types";
export function formatOAuthStartedToast({ intl }: { intl: IntlLike }): string {
  return intl.formatMessage({
    id: "settings.mcp.appConnectModal.oauthStartedElectron",
    defaultMessage: "Finish connecting in your browser.",
    description:
      "Toast shown after starting OAuth from MCP settings app connect modal",
  });
}
export function formatConnectedToast({
  appName,
  intl,
}: {
  appName: string;
  intl: IntlLike;
}): string {
  return intl.formatMessage(
    {
      id: "settings.mcp.appConnectModal.connected",
      defaultMessage: "{appName} is now connected.",
      description:
        "Toast shown when a no-auth app is connected directly from MCP settings",
    },
    {
      appName,
    },
  );
}
export function formatConnectFailedToast(intl: IntlLike): string {
  return intl.formatMessage({
    id: "settings.mcp.appConnectModal.connectFailed",
    defaultMessage: "Failed to connect app.",
    description: "Toast shown when starting an app connection fails",
  });
}
export function formatMissingInstallUrlToast(intl: IntlLike): string {
  return intl.formatMessage({
    id: "settings.mcp.appConnectModal.installUrlMissing",
    defaultMessage: "This app does not provide a browser setup URL right now.",
    description:
      "Toast shown when app connect fallback is attempted but no install URL is available",
  });
}
