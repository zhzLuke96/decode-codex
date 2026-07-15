// Restored from ref/webview/assets/external-link-pp1LMUpE.js
// Lightweight domain parsing helpers replacing the bundled public-suffix table.
import type { ParsedDomain, ParseDomainOptions } from "./types";
const LOCAL_HOSTNAMES = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
  "::1",
]);
const COMMON_TWO_PART_PUBLIC_SUFFIXES = new Set([
  "ac.uk",
  "co.jp",
  "co.uk",
  "com.au",
  "com.br",
  "com.cn",
  "com.mx",
  "com.sg",
  "com.tr",
  "com.tw",
  "edu.au",
  "gov.au",
  "gov.br",
  "gov.uk",
  "net.au",
  "net.br",
  "org.au",
  "org.br",
  "org.uk",
]);
function createEmptyDomainResult(): ParsedDomain {
  return {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null,
  };
}
function extractHostname(value: string, mixedInputs: boolean): string | null {
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0 || trimmedValue.startsWith("data:")) {
    return null;
  }
  if (!mixedInputs) return stripHostnamePort(trimmedValue).toLowerCase();
  try {
    const url = new URL(
      /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmedValue)
        ? trimmedValue
        : `https://${trimmedValue.replace(/^\/\//, "")}`,
    );
    return url.hostname.toLowerCase();
  } catch {
    const host = stripHostnamePort(
      trimmedValue.replace(/^\/\//, "").split(/[/?#]/, 1)[0] ?? "",
    );
    return host.length > 0 ? host.toLowerCase() : null;
  }
}
function stripHostnamePort(hostname: string): string {
  if (hostname.startsWith("[")) {
    const closingBracket = hostname.indexOf("]");
    return closingBracket === -1
      ? hostname
      : hostname.slice(0, closingBracket + 1);
  }
  return hostname.replace(/:\d+$/, "");
}
function isIpv4Address(hostname: string): boolean {
  const parts = hostname.split(".");
  return (
    parts.length === 4 &&
    parts.every((part) => {
      if (!/^\d+$/.test(part)) return false;
      const value = Number(part);
      return value >= 0 && value <= 255;
    })
  );
}
function isIpv6Address(hostname: string): boolean {
  const value =
    hostname.startsWith("[") && hostname.endsWith("]")
      ? hostname.slice(1, -1)
      : hostname;
  return value.includes(":") && /^[0-9a-f:]+$/i.test(value);
}
export function isIpAddress(hostname: string): boolean {
  return isIpv4Address(hostname) || isIpv6Address(hostname);
}
export function isLocalHostname(hostname: string): boolean {
  const normalizedHostname = hostname.toLowerCase();
  return (
    normalizedHostname.endsWith(".localhost") ||
    LOCAL_HOSTNAMES.has(normalizedHostname)
  );
}
function isValidHostname(hostname: string): boolean {
  if (hostname.length === 0 || hostname.length > 255) return false;
  if (isIpAddress(hostname) || isLocalHostname(hostname)) return true;
  return hostname.split(".").every((label) => {
    if (label.length === 0 || label.length > 63) return false;
    return /^[a-z0-9_\u0080-\uffff](?:[a-z0-9_\u0080-\uffff-]*[a-z0-9_\u0080-\uffff])?$/i.test(
      label,
    );
  });
}
function getPublicSuffix(hostname: string): string | null {
  const labels = hostname.split(".").filter(Boolean);
  if (labels.length < 2) return null;
  const lastTwoLabels = labels.slice(-2).join(".");
  if (COMMON_TWO_PART_PUBLIC_SUFFIXES.has(lastTwoLabels)) {
    return lastTwoLabels;
  }
  return labels[labels.length - 1] ?? null;
}
export function parseDomain(
  value: string,
  options: ParseDomainOptions = {},
): ParsedDomain {
  const {
    allowIcannDomains = true,
    allowPrivateDomains = false,
    detectIp = true,
    extractHostname: shouldExtractHostname = true,
    mixedInputs = true,
    validHosts = null,
    validateHostname = true,
  } = options;
  const result = createEmptyDomainResult();
  if (typeof value !== "string") return result;
  const hostname = shouldExtractHostname
    ? extractHostname(value, mixedInputs)
    : value.toLowerCase();
  result.hostname = hostname;
  if (hostname == null) return result;
  if (detectIp && isIpAddress(hostname)) {
    result.isIp = true;
    return result;
  }
  result.isIp = false;
  if (validateHostname && !isValidHostname(hostname)) {
    result.hostname = null;
    return result;
  }
  if (validHosts != null) {
    const matchedHost = validHosts.find(
      (validHost) =>
        hostname === validHost || hostname.endsWith(`.${validHost}`),
    );
    if (matchedHost) {
      result.publicSuffix = matchedHost;
      result.domain = matchedHost;
      result.domainWithoutSuffix = "";
      result.subdomain =
        hostname === matchedHost
          ? ""
          : hostname.slice(0, -matchedHost.length - 1);
      result.isIcann = true;
      result.isPrivate = false;
      return result;
    }
  }
  const publicSuffix = getPublicSuffix(hostname);
  if (publicSuffix == null) {
    result.isIcann = false;
    result.isPrivate = false;
    return result;
  }
  result.publicSuffix = publicSuffix;
  result.isIcann = allowIcannDomains;
  result.isPrivate = allowPrivateDomains ? false : false;
  const labels = hostname.split(".");
  const suffixLabelCount = publicSuffix.split(".").length;
  const domainStart = Math.max(0, labels.length - suffixLabelCount - 1);
  const domainLabels = labels.slice(domainStart);
  result.domain = domainLabels.join(".");
  result.domainWithoutSuffix = labels[domainStart] ?? null;
  result.subdomain = labels.slice(0, domainStart).join(".") || "";
  return result;
}
export function hasRegistrableDomain(hostname: string): boolean {
  const parsedDomain = parseDomain(hostname, {
    allowPrivateDomains: true,
    extractHostname: false,
  });
  return (
    parsedDomain.domain != null &&
    (parsedDomain.isIcann === true || parsedDomain.isPrivate === true)
  );
}
