// Restored from ref/webview/assets/artifact-tab-content.electron-CggSRQ3S.js
// Public artifact side-panel preview facade.

export { Fr as ArtifactTabContent } from "../vendor/artifact-tab-content-electron";

export const ARTIFACT_PREVIEW_MAX_BYTES = 40 * 1024 * 1024;

export type ArtifactPreviewKind =
  | "document"
  | "notebook"
  | "pdf"
  | "slides"
  | "spreadsheet";

export type ArtifactPreviewImportKind =
  | "csv"
  | "docx"
  | "ipynb"
  | "pdf"
  | "pptx"
  | "tex"
  | "tsv"
  | "xlsx";

export type ArtifactTabContentProps = {
  artifactType: ArtifactPreviewKind;
  chromeMode?: "default" | "standalone";
  hostId: string;
  importKind: ArtifactPreviewImportKind | string;
  path: string;
  tabId?: string | null;
  title: string;
};

export function getArtifactPreviewCacheKey({
  hostId,
  importKind,
  path,
}: {
  hostId: string;
  importKind: ArtifactPreviewImportKind | string;
  path: string;
}): string {
  return `${hostId}:${importKind}:${path}`;
}

export function decodeBase64ArtifactBytes(contentsBase64: string): Uint8Array {
  const decoded = atob(contentsBase64);
  const bytes = new Uint8Array(decoded.length);

  for (let index = 0; index < decoded.length; index += 1) {
    bytes[index] = decoded.charCodeAt(index);
  }

  return bytes;
}

export function checksumArtifactBytes(bytes: Uint8Array): string {
  let checksum = 0;

  for (let index = 0; index < bytes.length; index += 1) {
    checksum = (checksum * 31 + bytes[index]) % 4294967296;
  }

  return `${bytes.length}:${checksum.toString(16)}`;
}

export function getArtifactAnalyticsType(kind: {
  kind: "document" | "presentation" | "spreadsheet";
}): "document" | "slides" | "spreadsheet" {
  switch (kind.kind) {
    case "document":
      return "document";
    case "presentation":
      return "slides";
    case "spreadsheet":
      return "spreadsheet";
  }
}
