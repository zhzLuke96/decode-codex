// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Browser address-bar URL normalization and compact display formatting.
import { formatExternalHrefForDisplay, normalizeExternalHref } from "../utils/external-link/normalize";
import { isLocalHostname } from "../utils/external-link/domain";

type GoLinksConfig = {
  openAIGoLinksEnabled?: boolean;
};

export function resolveBrowserNavigationUrl(
  value: string,
  goLinksConfig: GoLinksConfig = {},
): string {
  return normalizeExternalHref(value, goLinksConfig);
}

export function formatBrowserAddressDisplay(value: string): string {
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) return "";
  try {
    const url = new URL(trimmedValue);
    if (url.protocol === "file:") {
      const pathname = decodeURIComponent(url.pathname).replace(
        /^\/([a-z]:)/i,
        "$1",
      );
      return url.host.length === 0 ? pathname : `//${url.host}${pathname}`;
    }
    if (
      (url.protocol === "http:" || url.protocol === "https:") &&
      isLocalHostname(url.hostname)
    ) {
      return formatHttpUrlForDisplay(url);
    }
    if (url.protocol === "https:") return url.host.replace(/^www\./i, "");
    if (url.protocol === "http:") return `http://${url.host}`;
  } catch {}
  return formatExternalHrefForDisplay(trimmedValue);
}

function formatHttpUrlForDisplay(url: URL): string {
  const withoutProtocol = url.toString().replace(/^https?:\/\//i, "");
  return url.pathname === "/" &&
    url.search.length === 0 &&
    url.hash.length === 0
    ? withoutProtocol.slice(0, -1)
    : withoutProtocol;
}
