// Restored from ref/.vite/build/comment-preload.js
// Shared document-context types for the browser sidebar comment runtime.

export type BrowserSidebarViewportRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type BrowserSidebarGoogleDocsDocumentLocation = {
  documentId: string;
  tabId?: string;
};

export type BrowserSidebarGoogleDocsDocumentContext = {
  provider: "google-docs";
  kind: "google-docs";
  documentId: string;
  tabId?: string;
  documentTitle?: string;
  selectedText?: string;
  visibleText?: string;
};

export type BrowserSidebarDocumentContextInput = {
  documentTitle?: string | null;
  pageUrl: string;
  selectedText?: string | null;
  visibleText?: string | null;
};

export type BrowserSidebarAnchorLike = {
  pageUrl?: string | null;
  documentContext?: { kind?: string | null } | null;
};
