// Restored from ref/webview/assets/mcp-tool-item-content-utils-BoJx2r_K.js
// mcp-tool-item-content-utils-BoJx2r_K chunk restored from the Codex webview bundle.
import * as zodRuntime from "../../boundaries/src-l0hb-mz-p";
import { hashCode64 } from "../../utils/hash-code";
import type { OriginScope } from "./types";
const MAX_SUBDOMAIN_LENGTH = 63;
function slugifyHashedSubdomain({
  fallbackSlug,
  prefix,
  value,
}: {
  fallbackSlug: string;
  prefix: string;
  value: string;
}) {
  const hash = hashCode64(value);
  const slugLength = MAX_SUBDOMAIN_LENGTH - prefix.length - hash.length - 2;
  const slug =
    value
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/^-+|-+$/g, "")
      .slice(0, slugLength)
      .replaceAll(/-+$/g, "") || fallbackSlug;
  return `${prefix}-${slug}-${hash}`;
}
function normalizeWidgetDomain(widgetDomain?: string | null) {
  if (widgetDomain == null) return null;
  try {
    const url = new URL(widgetDomain);
    return url.hostname ? clampSubdomainSlug(url.hostname) : null;
  } catch {
    return widgetDomain.startsWith("http")
      ? null
      : normalizeWidgetDomain(`https://${widgetDomain}`);
  }
}
function getConnectorSubdomain(connectorId?: string | null) {
  if (connectorId == null) return null;
  const trimmedConnectorId = connectorId.trim();
  return trimmedConnectorId.length === 0
    ? null
    : slugifyHashedSubdomain({
        fallbackSlug: "app",
        prefix: "mcp-app",
        value: trimmedConnectorId,
      });
}
function getInstanceSubdomain(instanceFallbackId: string) {
  return slugifyHashedSubdomain({
    fallbackSlug: "instance",
    prefix: "mcp-app-instance",
    value: instanceFallbackId,
  });
}
function getServerSubdomain(server: string) {
  return slugifyHashedSubdomain({
    fallbackSlug: "server",
    prefix: "mcp-server",
    value: server,
  });
}
function clampSubdomainSlug(hostname: string) {
  const slug = hostname
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
  if (!slug) return null;
  if (slug.length <= MAX_SUBDOMAIN_LENGTH) return slug;
  const hash = hashCode64(hostname);
  const slugLength = MAX_SUBDOMAIN_LENGTH - hash.length - 1;
  return `${slug.slice(0, slugLength).replaceAll(/-+$/g, "")}-${hash}`;
}
function getOriginSubdomain({
  originScope,
  widgetDomain,
}: {
  originScope: OriginScope;
  widgetDomain?: string | null;
}) {
  return originScope.kind === "codex_app"
    ? (normalizeWidgetDomain(widgetDomain) ??
        getConnectorSubdomain(originScope.connectorId) ??
        getInstanceSubdomain(originScope.instanceFallbackId))
    : getServerSubdomain(originScope.server);
}
function buildMcpAppFrameUrl({
  locale,
  originScope,
  widgetDomain,
}: {
  locale: string;
  originScope: OriginScope;
  widgetDomain?: string | null;
}) {
  return zodRuntime.srcWt({
    locale,
    subdomain: getOriginSubdomain({
      originScope,
      widgetDomain,
    }),
  });
}
function buildMcpAppSourceKey({
  originScope,
  sourceUrl,
}: {
  originScope: OriginScope;
  sourceUrl: string;
}) {
  const originKey =
    originScope.kind === "codex_app"
      ? `codex_app:${originScope.connectorId ?? `instance:${originScope.instanceFallbackId}`}`
      : `mcp_server:${originScope.server}`;
  return `source-${hashCode64(`${originKey}\n${sourceUrl}`)}`;
}
export { buildMcpAppFrameUrl, buildMcpAppSourceKey };
