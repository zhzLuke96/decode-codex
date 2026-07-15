// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Sandbox URL, partition and port helpers for MCP app webviews.

const MCP_SANDBOX_HOST = "web-sandbox.oaiusercontent.com";
const MCP_SANDBOX_PARTITION_PREFIX = "codex-mcp-app-sandbox";
const MAX_SANDBOX_SUBDOMAIN_LABEL_LENGTH = 63;

export const SANDBOX_PORT_NAMES = [
  "navigate",
  "notifyMcpAppsHostContext",
  "notifyMcpAppsToolCancelled",
  "notifyMcpAppsToolInput",
  "notifyMcpAppsToolResult",
  "requestMcpAppsResourceTeardown",
  "runWidgetCode",
  "setAdditionalGlobals",
  "setSafeArea",
  "setTheme",
  "setWidgetData",
  "setWidgetView",
] as const;

type McpAppOriginScope =
  | {
      connectorId?: string | null;
      instanceFallbackId: string;
      kind: "codex_app";
    }
  | { kind: "mcp_server"; server: string };

export function stableHashSegment(value: string): string {
  let hash = 14695981039346656037n;
  for (const char of value) {
    hash ^= BigInt(char.codePointAt(0) ?? 0);
    hash = BigInt.asUintN(64, hash * 1099511628211n);
  }
  return hash.toString(16).padStart(16, "0").slice(0, 16);
}

function slugifySubdomain({
  fallbackSlug,
  prefix,
  value,
}: {
  fallbackSlug: string;
  prefix: string;
  value: string;
}): string {
  const hash = stableHashSegment(value);
  const maxSlugLength =
    MAX_SANDBOX_SUBDOMAIN_LABEL_LENGTH - prefix.length - hash.length - 2;
  const slug =
    value
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replaceAll(/^-+|-+$/g, "")
      .slice(0, maxSlugLength)
      .replaceAll(/-+$/g, "") || fallbackSlug;
  return `${prefix}-${slug}-${hash}`;
}

function normalizeSubdomainHostname(hostname: string): string | null {
  const slug = hostname
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
  if (slug.length === 0) return null;
  if (slug.length <= MAX_SANDBOX_SUBDOMAIN_LABEL_LENGTH) return slug;
  const hash = stableHashSegment(hostname);
  const prefix = slug
    .slice(0, MAX_SANDBOX_SUBDOMAIN_LABEL_LENGTH - hash.length - 1)
    .replaceAll(/-+$/g, "");
  return `${prefix}-${hash}`;
}

function subdomainFromWidgetDomain(widgetDomain: unknown): string | null {
  if (typeof widgetDomain !== "string" || widgetDomain.trim().length === 0) {
    return null;
  }
  try {
    return normalizeSubdomainHostname(new URL(widgetDomain).hostname);
  } catch {
    return widgetDomain.startsWith("http")
      ? null
      : subdomainFromWidgetDomain(`https://${widgetDomain}`);
  }
}

function resolveSandboxSubdomain({
  originScope,
  widgetDomain,
}: {
  originScope: McpAppOriginScope;
  widgetDomain?: unknown;
}): string {
  if (originScope.kind === "codex_app") {
    return (
      subdomainFromWidgetDomain(widgetDomain) ??
      (originScope.connectorId == null
        ? null
        : slugifySubdomain({
            fallbackSlug: "app",
            prefix: "mcp-app",
            value: originScope.connectorId,
          })) ??
      slugifySubdomain({
        fallbackSlug: "instance",
        prefix: "mcp-app-instance",
        value: originScope.instanceFallbackId,
      })
    );
  }
  return slugifySubdomain({
    fallbackSlug: "server",
    prefix: "mcp-server",
    value: originScope.server,
  });
}

export function buildMcpAppSandboxSourceUrl({
  locale,
  originScope,
  widgetDomain,
}: {
  locale?: string | null;
  originScope: McpAppOriginScope;
  widgetDomain?: unknown;
}): string {
  const url = new URL(`https://${MCP_SANDBOX_HOST}`);
  url.hostname = `${resolveSandboxSubdomain({
    originScope,
    widgetDomain,
  })}.${url.hostname}`;
  url.searchParams.set("app", "skybridge");
  url.searchParams.set(
    "locale",
    locale == null || locale === "" ? "en-US" : locale,
  );
  url.searchParams.set("deviceType", "desktop");
  url.searchParams.set("unsafeSkipTargetOriginCheck", "true");
  return url.toString();
}

export function buildMcpAppSandboxId({
  originScope,
  sourceUrl,
}: {
  originScope: McpAppOriginScope;
  sourceUrl: string;
}): string {
  const scopeSegment =
    originScope.kind === "codex_app"
      ? `codex_app:${
          originScope.connectorId ??
          `instance:${originScope.instanceFallbackId}`
        }`
      : `mcp_server:${originScope.server}`;
  return `source-${stableHashSegment(`${scopeSegment}\n${sourceUrl}`)}`;
}

export function buildSandboxFrameSrc({
  initId,
  sourceUrl,
}: {
  initId: string;
  sourceUrl: string;
}): string {
  const url = new URL(sourceUrl);
  url.hash = new URLSearchParams({ initId }).toString();
  return url.toString();
}

export function serializeSandboxPartition(sandboxId: unknown): string {
  return `${MCP_SANDBOX_PARTITION_PREFIX}:${String(sandboxId)}`;
}

export function parseUrlOrigin(value: string | null | undefined): string | null {
  if (value == null) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function isNonEmptyStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  if (value.some((item) => typeof item !== "string")) return false;
  const names = new Set(value);
  return (
    names.size === value.length &&
    value.length === SANDBOX_PORT_NAMES.length &&
    SANDBOX_PORT_NAMES.every((name) => names.has(name))
  );
}
