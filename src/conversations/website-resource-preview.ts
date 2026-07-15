// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers for the website-preview end-of-turn resource card: resolving the
// previewed path, extracting <title>/favicon from fetched HTML, and building
// inline data URIs for favicon bytes (localConversation domain).
import path from "path-browserify";
import mimeTypes from "mime-types";
import {
  normalizePath,
  isAbsolutePath,
  isBlankText,
  joinPath,
  fileUrlPathnameToOsPath,
} from "../boundaries/onboarding-commons-externals.facade";

export type WebsiteFavicon =
  | { type: "url"; src: string }
  | { type: "file"; path: string };

export interface WebsitePreviewMetadata {
  title: string | null;
  favicon: WebsiteFavicon | null;
}

const URI_SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

export function parseAbsoluteUrl(value: string): URL | null {
  if (isBlankText(value) || !URI_SCHEME_PATTERN.test(value)) {
    return null;
  }
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

export function safeDecodeUri(value: string): string {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function fileUrlToResourcePath(url: URL): string {
  return normalizePath(fileUrlPathnameToOsPath(safeDecodeUri(url.pathname)));
}

export function resolveWebsiteResourcePath({
  cwd,
  target,
}: {
  cwd: string | null;
  target: string;
}): string | null {
  const normalizedTarget = normalizePath(target);
  const parsed = parseAbsoluteUrl(normalizedTarget);
  if (parsed == null) {
    return cwd == null ? normalizedTarget : joinPath(cwd, normalizedTarget);
  }
  return parsed.protocol === "file:" ? fileUrlToResourcePath(parsed) : null;
}

function linkRelMatches(element: Element, rel: string): boolean {
  return (
    element
      .getAttribute("rel")
      ?.split(/\s+/u)
      .some((token) => token.toLowerCase() === rel) ?? false
  );
}

function findFaviconHref(document: Document): string | null {
  const linkElements = Array.from(document.querySelectorAll("link[rel][href]"));
  return (
    (
      linkElements.find((element) => linkRelMatches(element, "icon")) ??
      linkElements.find((element) =>
        linkRelMatches(element, "apple-touch-icon"),
      )
    )
      ?.getAttribute("href")
      ?.trim() || null
  );
}

export function resolveFavicon(
  href: string,
  filePath: string | null,
): WebsiteFavicon | null {
  if (href.startsWith("//")) {
    return null;
  }
  const parsed = parseAbsoluteUrl(href);
  if (parsed != null) {
    return parsed.protocol === "data:" &&
      parsed.href.toLowerCase().startsWith("data:image/")
      ? { type: "url", src: parsed.href }
      : null;
  }
  if (filePath == null) {
    return null;
  }
  const relativePath = normalizePath(safeDecodeUri(href.split(/[?#]/u)[0]));
  if (isAbsolutePath(relativePath) || relativePath.split("/").includes("..")) {
    return null;
  }
  const resolvedPath = joinPath(
    path.posix.dirname(normalizePath(filePath)),
    relativePath,
  );
  const mimeType = mimeTypes.lookup(resolvedPath);
  return !mimeType || !mimeType.startsWith("image/")
    ? null
    : { type: "file", path: resolvedPath };
}

export function parseWebsitePreviewMetadata({
  filePath,
  html,
}: {
  filePath: string | null;
  html: string;
}): WebsitePreviewMetadata {
  const document = new DOMParser().parseFromString(html, "text/html");
  const title = document.querySelector("title")?.textContent?.trim() || null;
  const faviconHref = findFaviconHref(document);
  return {
    title,
    favicon: faviconHref == null ? null : resolveFavicon(faviconHref, filePath),
  };
}

export function buildFaviconDataUri({
  contentsBase64,
  filePath,
}: {
  contentsBase64: string;
  filePath: string;
}): string {
  const mimeType = mimeTypes.lookup(filePath) || "application/octet-stream";
  return `data:${mimeType};base64,${contentsBase64}`;
}
