// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// User-entered external link normalization and display formatting.
import {
  isAbsoluteFilesystemPath,
  joinFilesystemPath,
} from "../../boundaries/rpc.facade";
import { hasRegistrableDomain, isIpAddress, isLocalHostname } from "./domain";
import type { NormalizeExternalHrefOptions } from "./types";
const GO_LINK_HOSTNAME = "golinks.io";
const GO_LINK_TRACK_SOURCE_PARAM = "trackSource";
const GO_LINK_REDIRECT_SOURCE = "go_domain_redirect";
type HostCandidate = {
  hasPort: boolean;
  hostname: string;
};
function normalizeOpenAIGoLink(value: string): string | null {
  if (/\s/.test(value)) return null;
  const candidate = value.startsWith("go/") ? `https://${value}` : value;
  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    return null;
  }
  if (
    (url.protocol !== "http:" && url.protocol !== "https:") ||
    url.hostname !== "go" ||
    url.port.length > 0
  ) {
    return null;
  }
  url.hostname = GO_LINK_HOSTNAME;
  url.searchParams.append(GO_LINK_TRACK_SOURCE_PARAM, GO_LINK_REDIRECT_SOURCE);
  return url.toString();
}
function toSearchUrl(query: string): string {
  return `https://www.google.com/search?${new URLSearchParams({
    q: query,
  }).toString()}`;
}
function parseHostCandidate(value: string): HostCandidate | null {
  const hostEndIndex = value.search(/[/?#]/);
  const hostPart = hostEndIndex === -1 ? value : value.slice(0, hostEndIndex);
  if (hostPart.length === 0 || hostPart.includes("@")) return null;
  const ipv6Match = hostPart.match(/^(\[[^\]]+\])(?::(\d+))?$/);
  if (ipv6Match) {
    return {
      hostname: ipv6Match[1] ?? "",
      hasPort: ipv6Match[2] != null,
    };
  }
  const hostWithPortMatch = hostPart.match(/^([^:]+):(\d+)$/);
  if (hostWithPortMatch) {
    return {
      hostname: hostWithPortMatch[1] ?? "",
      hasPort: true,
    };
  }
  if (hostPart.includes(":")) return null;
  return {
    hostname: hostPart,
    hasPort: false,
  };
}
function isBrowserLocalCandidate(candidate: HostCandidate | null): boolean {
  return candidate != null && isLocalHostname(candidate.hostname);
}
function isIpv6UrlHost(hostname: string): boolean {
  if (!hostname.startsWith("[")) return false;
  try {
    new URL(`https://${hostname}`);
    return true;
  } catch {
    return false;
  }
}
function shouldDefaultToHttps(
  value: string,
  candidate: HostCandidate | null,
): boolean {
  if (/\s/.test(value) || candidate == null) return false;
  const { hostname } = candidate;
  return (
    (hostname.startsWith("[") && isIpv6UrlHost(hostname)) ||
    candidate.hasPort ||
    hostname.startsWith("www.") ||
    isIpAddress(hostname) ||
    hasRegistrableDomain(hostname)
  );
}
function isUncPath(path: string): boolean {
  return /^[/\\]{2}[^/\\]+[/\\]/.test(path);
}
function normalizeFileHref(path: string): string {
  const normalizedPath = joinFilesystemPath("", path);
  const fileUrl = new URL("file:///");
  if (isUncPath(normalizedPath)) {
    const slashPath = normalizedPath.replace(/\\/g, "/");
    const withoutPrefix = slashPath.replace(/^\/+/, "");
    const separatorIndex = withoutPrefix.indexOf("/");
    fileUrl.host =
      separatorIndex === -1
        ? withoutPrefix
        : withoutPrefix.slice(0, separatorIndex);
    fileUrl.pathname =
      separatorIndex === -1 ? "/" : withoutPrefix.slice(separatorIndex);
    return fileUrl.toString();
  }
  fileUrl.pathname = normalizedPath;
  return fileUrl.toString();
}
export function normalizeExternalHref(
  value: string,
  options: NormalizeExternalHrefOptions = {},
): string {
  const openAIGoLinksEnabled = options.openAIGoLinksEnabled === true;
  const hasNewline = value.includes("\n");
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) return "";
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmedValue)) {
    return openAIGoLinksEnabled
      ? (normalizeOpenAIGoLink(trimmedValue) ?? trimmedValue)
      : trimmedValue;
  }
  if (/^about:/i.test(trimmedValue)) return trimmedValue;
  if (
    isAbsoluteFilesystemPath(trimmedValue) &&
    !trimmedValue.startsWith("//") &&
    !(trimmedValue.startsWith("/") && hasNewline)
  ) {
    return normalizeFileHref(trimmedValue);
  }
  const candidate = parseHostCandidate(trimmedValue);
  if (isBrowserLocalCandidate(candidate)) return `http://${trimmedValue}`;
  if (shouldDefaultToHttps(trimmedValue, candidate)) {
    return `https://${trimmedValue}`;
  }
  if (/\s/.test(trimmedValue)) return toSearchUrl(trimmedValue);
  if (openAIGoLinksEnabled) {
    const goLink = normalizeOpenAIGoLink(trimmedValue);
    if (goLink != null) return goLink;
  }
  return toSearchUrl(trimmedValue);
}
function isLocalOrFileBrowserUrl(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.protocol === "file:") return true;
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      isLocalHostname(url.hostname)
    );
  } catch {
    return false;
  }
}
function stripLeadingWindowsPathSlash(pathname: string): string {
  return pathname.replace(/^\/([a-z]:)/i, "$1");
}
function formatHttpUrlForDisplay(url: URL): string {
  const withoutProtocol = url.toString().replace(/^https?:\/\//i, "");
  return url.pathname === "/" &&
    url.search.length === 0 &&
    url.hash.length === 0
    ? withoutProtocol.slice(0, -1)
    : withoutProtocol;
}
export function formatExternalHrefForDisplay(value: string): string {
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) return "";
  try {
    const url = new URL(trimmedValue);
    if (url.protocol === "file:") {
      const pathname = stripLeadingWindowsPathSlash(
        decodeURIComponent(url.pathname),
      );
      return url.host.length === 0 ? pathname : `//${url.host}${pathname}`;
    }
    if (
      url.protocol !== "http:" &&
      url.protocol !== "https:" &&
      isLocalHostname(url.hostname)
    ) {
      return formatHttpUrlForDisplay(url);
    }
    if (url.protocol === "https:") {
      return url.host.replace(/^www\./i, "");
    }
    if (url.protocol === "http:") return `http://${url.host}`;
  } catch {}
  return trimmedValue;
}
export function resolveCodexBrowserUrl(value: string): string | null {
  const normalizedHref = normalizeExternalHref(value);
  if (normalizedHref.length === 0 || isLocalOrFileBrowserUrl(normalizedHref)) {
    return null;
  }
  try {
    const { protocol } = new URL(normalizedHref);
    if (protocol === "http:" || protocol === "https:") return normalizedHref;
  } catch {
    return null;
  }
  return null;
}
export function isLocalHttpUrl(value: string): boolean {
  try {
    const { protocol } = new URL(value);
    return (
      (protocol === "http:" || protocol === "https:") &&
      isLocalOrFileBrowserUrl(value)
    );
  } catch {
    return false;
  }
}
