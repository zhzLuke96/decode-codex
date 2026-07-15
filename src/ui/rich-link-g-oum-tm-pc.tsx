// Restored from ref/webview/assets/rich-link-gOumTmPC.js
// rich-link-gOumTmPC chunk restored from the Codex webview bundle.
import { externalLinkSource } from "../utils/external-link-source";
type RichLink = {
  displayText: string;
  href: string;
  sourceAppId: string;
};
export function createRichLinkFromDisplayText({
  displayText,
  href,
}: {
  displayText: string;
  href: string;
}): RichLink | null {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  const source = externalLinkSource(href);
  return source == null
    ? null
    : {
        displayText,
        href,
        sourceAppId: source.appId,
      };
}
export function createRichLinkFromUrl(value: string): RichLink | null {
  const href = normalizeRichLinkHref(value);
  if (href == null) return null;
  const url = new URL(href);
  const source = externalLinkSource(href);
  return source == null
    ? null
    : {
        displayText: formatRichLinkDisplayText(href, url, source),
        href,
        sourceAppId: source.appId,
      };
}
export function normalizeRichLinkHref(value: string) {
  const href = value.trim();
  if (href.length === 0 || /\s/u.test(href)) return null;
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  return url.protocol !== "http:" && url.protocol !== "https:" ? null : href;
}
function formatRichLinkDisplayText(
  href: string,
  url: URL,
  source: {
    appId: string;
  },
) {
  switch (source.appId) {
    case "figma":
      return formatLastPathSegment(url) ?? href;
    case "github":
      return formatGitHubUrl(url) ?? href;
    case "notion":
      return formatNotionUrl(url) ?? href;
    case "gmail":
    case "google-calendar":
    case "google-drive":
    case "linear":
    case "slack":
      return href;
  }
}
function formatGitHubUrl(url: URL) {
  const pathSegments = getPathSegments(url);
  const [owner, repo, pageKind, pageValue] = pathSegments;
  if (owner == null || repo == null) return null;
  if (pageKind === "blob" && pathSegments.length >= 5) {
    return decodeNonEmpty(pathSegments[pathSegments.length - 1]);
  }
  if (
    pageKind === "pull" &&
    pageValue != null &&
    pathSegments.length === 4 &&
    url.search.length === 0 &&
    url.hash.length === 0
  ) {
    return `${owner}/${repo}#${pageValue}`;
  }
  return pathSegments.length === 2 &&
    url.search.length === 0 &&
    url.hash.length === 0
    ? `${owner}/${repo}`
    : null;
}
function formatNotionUrl(url: URL) {
  const lastSegment = formatLastPathSegment(url);
  return lastSegment == null
    ? null
    : titleFromSlug(lastSegment.replace(/-[a-f0-9]{32}$/iu, ""));
}
function formatLastPathSegment(url: URL) {
  const pathSegments = getPathSegments(url);
  return pathSegments[pathSegments.length - 1] ?? null;
}
function getPathSegments(url: URL) {
  return url.pathname.split("/").filter((segment) => segment.length > 0);
}
function titleFromSlug(value: string) {
  const decoded = decodeNonEmpty(value);
  if (decoded == null) return null;
  const title = decoded.replace(/[-_]+/gu, " ").trim();
  return title.length === 0 ? null : title;
}
function decodeNonEmpty(value: string | undefined) {
  if (value == null) return null;
  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return null;
  }
  return decoded.length === 0 ? null : decoded;
}
