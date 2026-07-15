// Restored from ref/webview/assets/known-app-icon-CXoFtnBV.js
// Public helpers for resolving the icon associated with a known app.

import type { ComponentType, SVGProps } from "react";
import KNOWN_APP_ICONS from "./known-app-icons";
type KnownAppIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type KnownAppDescriptor = {
  name: string;
  id: string;
  pluginDisplayNames: string[];
};
const KNOWN_APP_ICON_REGISTRY = KNOWN_APP_ICONS as Record<
  string,
  KnownAppIconComponent
>;
const FileWordDocumentIcon = KNOWN_APP_ICON_REGISTRY["file-word-document"]!;
const FilePdfIcon = KNOWN_APP_ICON_REGISTRY["file-pdf"]!;
const GoogleDocsIcon = KNOWN_APP_ICON_REGISTRY["google-docs"]!;
const LinearIcon = KNOWN_APP_ICON_REGISTRY.linear!;
const GoogleSlidesIcon = KNOWN_APP_ICON_REGISTRY["google-slides"]!;
const FileSpreadsheetIcon = KNOWN_APP_ICON_REGISTRY["file-spreadsheet"]!;
const NotionIcon = KNOWN_APP_ICON_REGISTRY.notion!;
const FilePresentationIcon = KNOWN_APP_ICON_REGISTRY["file-presentation"]!;
const GoogleSheetsIcon = KNOWN_APP_ICON_REGISTRY["google-sheets"]!;
function getKnownAppIconByName(name: string): KnownAppIconComponent | null {
  return getKnownAppIconByKey(normalizeKnownAppIconKey(name));
}
function resolveKnownAppIcon(
  app: KnownAppDescriptor,
): KnownAppIconComponent | null {
  const candidates = [app.name, app.id, ...app.pluginDisplayNames].map(
    normalizeKnownAppIconKey,
  );
  for (const candidate of candidates) {
    const icon = getKnownAppIconByKey(candidate);
    if (icon != null) return icon;
  }
  return null;
}
function normalizeKnownAppIconKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((segment) => segment.length > 0)
    .join("-");
}
function getKnownAppIconByKey(key: string): KnownAppIconComponent | null {
  const connectorKey = key.replace(/^connector-/u, "");
  return (
    KNOWN_APP_ICON_REGISTRY[key] ??
    KNOWN_APP_ICON_REGISTRY[connectorKey] ??
    KNOWN_APP_ICON_REGISTRY[connectorKey.replace(/-mcp-server$/u, "")] ??
    null
  );
}
export {
  FileWordDocumentIcon,
  FilePdfIcon,
  GoogleDocsIcon,
  LinearIcon,
  GoogleSlidesIcon,
  resolveKnownAppIcon,
  FileSpreadsheetIcon,
  NotionIcon,
  FilePresentationIcon,
  getKnownAppIconByName,
  GoogleSheetsIcon,
};
