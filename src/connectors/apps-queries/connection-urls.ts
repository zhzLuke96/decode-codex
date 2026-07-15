// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import { vscodeApiN as callCodexVscodeApi } from "../../boundaries/vscode-api";
import type { AppConnectApp } from "./types";
export const PRODUCT_SKU_HEADER = "OAI-Product-Sku";
export const CODEX_PRODUCT_SKU = "CODEX";
const CODEX_REFERRER = "codex";
export function getAppInstallUrlWithSettingsHash(
  app: AppConnectApp,
): string | null {
  const installUrl = app.installUrl?.trim();
  if (!installUrl) return null;
  const url = new URL(installUrl);
  url.hash = buildConnectorSettingsHash(app.id);
  return url.toString();
}
export async function getNativeOAuthCallbackUrl(): Promise<string> {
  const { callbackUrl } = (await callCodexVscodeApi(
    "app-connect-oauth-callback-url",
  )) as {
    callbackUrl: string;
  };
  return callbackUrl;
}
export function getBrowserOAuthCallbackUrl(app: AppConnectApp): string {
  return `${getChatGptOrigin(app)}/connector_platform_oauth_redirect`;
}
export function getPostAuthUrl(app: AppConnectApp): string {
  const installUrl = getAppInstallUrlWithSettingsHash(app);
  if (installUrl != null) return installUrl;
  const url = new URL("/gpts/editor", getChatGptOrigin(app));
  url.hash = buildConnectorSettingsHash(app.id);
  return url.toString();
}
export function getAddConnectorLinkFallbackUrl(
  app: AppConnectApp,
): string | null {
  const installUrl = app.installUrl?.trim();
  if (!installUrl) return null;
  const url = new URL(installUrl);
  url.hash = buildConnectorSettingsHash(app.id, {
    addConnectorLink: true,
  });
  return url.toString();
}
function getChatGptOrigin(app: AppConnectApp): string {
  const installUrl = app.installUrl?.trim();
  return installUrl ? new URL(installUrl).origin : "https://chatgpt.com";
}
function buildConnectorSettingsHash(
  connectorId: string,
  {
    addConnectorLink = false,
  }: {
    addConnectorLink?: boolean;
  } = {},
): string {
  const params = new URLSearchParams([["connector", connectorId]]);
  if (addConnectorLink) params.set("add-connector-link", "true");
  params.set("product-sku", CODEX_PRODUCT_SKU);
  params.set("referrer", CODEX_REFERRER);
  return `settings/Connectors?${params.toString()}`;
}
