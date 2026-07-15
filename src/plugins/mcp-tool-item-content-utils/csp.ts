// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
import type { WidgetCsp, WidgetCspPolicy } from "./types";
const ENCODED_WILDCARD_PREFIX = /^([a-z][a-z0-9+.-]*:\/\/)?%2a(?=\.)/i;
const INVALID_DOMAIN_CHARACTER = /[\s;,"']/;
function allowLocalhostWidgetDomains() {
  return false;
}
function normalizeCspDomains(values: string[]) {
  return [
    ...new Set(
      values.flatMap((value) => {
        const domain = normalizeCspDomain(value);
        return domain == null ? [] : [domain];
      }),
    ),
  ];
}
function normalizeCspDomain(value: string) {
  const trimmedValue = value.trim();
  if (
    trimmedValue.length === 0 ||
    INVALID_DOMAIN_CHARACTER.test(trimmedValue)
  ) {
    return null;
  }
  if (trimmedValue === "blob:" || trimmedValue === "data:") return trimmedValue;
  const wildcardNormalizedValue = trimmedValue.replace(
    ENCODED_WILDCARD_PREFIX,
    "$1*",
  );
  const urlText = /^[a-z][a-z0-9+.-]*:\/\//i.test(wildcardNormalizedValue)
    ? wildcardNormalizedValue
    : `https://${wildcardNormalizedValue}`;
  let url: URL;
  try {
    url = new URL(urlText);
  } catch {
    return null;
  }
  const isAllowedLocalhost =
    allowLocalhostWidgetDomains() && url.hostname === "localhost";
  if (
    (url.protocol !== "https:" && !isAllowedLocalhost) ||
    url.hostname === "*" ||
    url.username.length > 0 ||
    url.password.length > 0
  ) {
    return null;
  }
  const hostname = url.hostname.replace(/^%2a(?=\.)/i, "*");
  return hostname.includes("*") && !hostname.startsWith("*.")
    ? null
    : `${url.protocol}//${hostname}${url.port.length > 0 ? `:${url.port}` : ""}`;
}
function mergeWidgetCsp({
  mcpAppCsp,
  openaiWidgetCsp,
}: {
  mcpAppCsp?: WidgetCsp;
  openaiWidgetCsp?: WidgetCsp;
}): WidgetCspPolicy {
  const resourceDomains =
    mcpAppCsp?.resourceDomains ??
    openaiWidgetCsp?.resourceDomains ??
    openaiWidgetCsp?.resource_domains ??
    [];
  const frameDomains =
    mcpAppCsp?.frameDomains ??
    openaiWidgetCsp?.frameDomains ??
    openaiWidgetCsp?.frame_domains ??
    [];
  return {
    baseUriDomains:
      mcpAppCsp?.baseUriDomains ??
      openaiWidgetCsp?.baseUriDomains ??
      openaiWidgetCsp?.base_uri_domains ??
      [],
    connectDomains: [
      ...new Set([
        ...(mcpAppCsp?.connectDomains ??
          openaiWidgetCsp?.connectDomains ??
          openaiWidgetCsp?.connect_domains ??
          []),
        ...resourceDomains,
      ]),
    ],
    frameDomains,
    includeDefaultDomains: false,
    isTrusted: mcpAppCsp != null || openaiWidgetCsp != null,
    resourceDomains,
  };
}
export { allowLocalhostWidgetDomains, mergeWidgetCsp, normalizeCspDomains };
