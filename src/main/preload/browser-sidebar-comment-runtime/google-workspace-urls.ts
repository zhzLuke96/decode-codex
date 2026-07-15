// Restored from ref/.vite/build/comment-preload.js
// Google Workspace URL parsing and document-context creation helpers.

import { normalizeBrowserSidebarText } from "./text";
import type {
  BrowserSidebarDocumentContextInput,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarGoogleDocsDocumentLocation,
} from "./types";

const GOOGLE_DOCS_HOSTNAME = "docs.google.com";

export function parseGoogleDocsDocumentUrl(
  pageUrl: string,
): BrowserSidebarGoogleDocsDocumentLocation | null {
  const url = safeUrl(pageUrl);
  if (url == null || url.hostname !== GOOGLE_DOCS_HOSTNAME) return null;

  const pathSegments = url.pathname.split("/").filter(Boolean);
  const documentSegmentIndex = pathSegments.indexOf("document");
  const documentIdMarkerIndex =
    documentSegmentIndex === -1
      ? -1
      : pathSegments.indexOf("d", documentSegmentIndex + 1);
  const documentIdCandidate =
    documentIdMarkerIndex === -1
      ? undefined
      : pathSegments[documentIdMarkerIndex + 1];
  const documentId =
    documentIdCandidate === "e" &&
    pathSegments[documentIdMarkerIndex + 3] === "pub"
      ? pathSegments[documentIdMarkerIndex + 2]
      : documentIdCandidate;

  if (documentId == null || documentId.length === 0) return null;
  return {
    documentId,
    tabId: readGoogleDocsTabId(url) ?? undefined,
  };
}

export function parseGoogleSheetsDocumentId(pageUrl: string): string | null {
  const url = safeUrl(pageUrl);
  if (url == null || url.hostname !== GOOGLE_DOCS_HOSTNAME) return null;

  const pathSegments = url.pathname.split("/").filter(Boolean);
  const spreadsheetSegmentIndex = pathSegments.indexOf("spreadsheets");
  const documentIdMarkerIndex =
    spreadsheetSegmentIndex === -1
      ? -1
      : pathSegments.indexOf("d", spreadsheetSegmentIndex + 1);
  return documentIdMarkerIndex === -1
    ? null
    : (pathSegments[documentIdMarkerIndex + 1] ?? null);
}

export function isGoogleWorkspaceDocumentUrl(pageUrl: string): boolean {
  return (
    parseGoogleDocsDocumentUrl(pageUrl) != null ||
    parseGoogleSheetsDocumentId(pageUrl) != null
  );
}

export function createGoogleDocsDocumentContext({
  documentTitle,
  pageUrl,
  selectedText,
  visibleText,
}: BrowserSidebarDocumentContextInput):
  | BrowserSidebarGoogleDocsDocumentContext
  | undefined {
  const documentLocation = parseGoogleDocsDocumentUrl(pageUrl);
  if (documentLocation == null) return undefined;

  return {
    provider: "google-docs",
    kind: "google-docs",
    documentId: documentLocation.documentId,
    tabId: documentLocation.tabId,
    documentTitle: normalizeBrowserSidebarText(documentTitle),
    selectedText: normalizeBrowserSidebarText(selectedText),
    visibleText: normalizeBrowserSidebarText(visibleText),
  };
}

function safeUrl(pageUrl: string): URL | null {
  try {
    return new URL(pageUrl);
  } catch {
    return null;
  }
}

function readGoogleDocsTabId(url: URL): string | null {
  const searchTabId = normalizeBrowserSidebarText(url.searchParams.get("tab"));
  if (searchTabId != null) return searchTabId;

  const hashSearch = url.hash.startsWith("#") ? url.hash.slice(1) : url.hash;
  return (
    normalizeBrowserSidebarText(new URLSearchParams(hashSearch).get("tab")) ??
    null
  );
}
