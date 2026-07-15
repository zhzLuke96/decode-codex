// Restored from ref/.vite/build/src-CoIhwwHr.js
// ChatGPT connector personalization gating for ambient suggestions.

import { getRecordProperty } from "./record-utils";

export const CHATGPT_CONNECTOR_ID_PREFIX = "connector_";

const CHATGPT_CONNECTOR_PRODUCT_SKU_HEADER = "OAI-Product-Sku";
const CHATGPT_CONNECTOR_PRODUCT_SKU = "CODEX";
const CHATGPT_BACKEND_API_BASE_URL = "https://chatgpt.com/backend-api";
const LOCAL_CHATGPT_BACKEND_API_BASE_URL = "http://localhost:8000/api";

export async function isConnectorPersonalizationDisabled({
  authToken,
  connectorId,
}: {
  authToken: string;
  connectorId: string;
}): Promise<boolean> {
  const terms = await fetchChatGptConnectorJson(
    `/aip/connectors/${encodeURIComponent(connectorId)}/tos`,
    authToken,
  );
  if (getRecordProperty(terms, "personalization_toggle_blurb") == null) {
    return false;
  }
  const link = await fetchChatGptConnectorJson(
    `/aip/connectors/${encodeURIComponent(connectorId)}/link`,
    authToken,
  );
  const toolSettings = getRecordProperty(
    getRecordProperty(link, "link"),
    "tool_settings",
  );
  const personalized = getRecordProperty(toolSettings, "personalized");
  const defaultPersonalization =
    getRecordProperty(terms, "personalization_default") === "PERSONALIZE_ALWAYS"
      ? "PERSONALIZE_ALWAYS"
      : "NO_PERSONALIZATION";
  return (
    (personalized === "UNSET" ? defaultPersonalization : personalized) ===
    "NO_PERSONALIZATION"
  );
}

export function normalizeConnectorAppId(appId: string): string {
  return appId.startsWith(CHATGPT_CONNECTOR_ID_PREFIX)
    ? appId.slice(CHATGPT_CONNECTOR_ID_PREFIX.length).replaceAll("_", "-")
    : appId;
}

async function fetchChatGptConnectorJson(
  path: string,
  authToken: string,
): Promise<unknown> {
  const response = await fetch(resolveChatGptBackendUrl(path), {
    headers: buildChatGptConnectorHeaders(authToken),
    method: "GET",
  });
  if (!response.ok) {
    throw Error(`ChatGPT connector request failed with ${response.status}`);
  }
  return response.json();
}

function buildChatGptConnectorHeaders(
  authToken: string,
): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${authToken}`,
    originator:
      process.env.CODEX_INTERNAL_ORIGINATOR_OVERRIDE ?? "Codex Desktop",
    [CHATGPT_CONNECTOR_PRODUCT_SKU_HEADER]: CHATGPT_CONNECTOR_PRODUCT_SKU,
  };
  const accountId = getChatGptAccountIdFromToken(authToken);
  if (accountId != null) headers["ChatGPT-Account-Id"] = accountId;
  return headers;
}

function getChatGptAccountIdFromToken(authToken: string): string | null {
  const payload = authToken.split(".")[1];
  if (payload == null) return null;
  try {
    const parsed = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    );
    const authClaims = getRecordProperty(parsed, "https://api.openai.com/auth");
    const accountId = getRecordProperty(authClaims, "chatgpt_account_id");
    return typeof accountId === "string" ? accountId : null;
  } catch {
    return null;
  }
}

function resolveChatGptBackendUrl(path: string): string {
  const configuredBaseUrl = process.env.CODEX_API_BASE_URL?.trim();
  const baseUrl =
    configuredBaseUrl != null && configuredBaseUrl.length > 0
      ? configuredBaseUrl
      : (process.env.CODEX_API_ENDPOINT ?? "").toLowerCase() === "localhost"
        ? LOCAL_CHATGPT_BACKEND_API_BASE_URL
        : CHATGPT_BACKEND_API_BASE_URL;
  return `${baseUrl.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
