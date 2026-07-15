// Restored from ref/webview/assets/plugin-detail-page-utils-DeDVCX5Q.js
// Local plugin marketplace path helpers.

import type { PluginInstallLocation } from "./types";

const PLUGIN_MARKETPLACE_MANIFEST_PATH = ".agents/plugins/marketplace.json";

export function getLocalPluginInstallPath(
  homeDirectory: string | null | undefined,
  marketplacePath: string | null | undefined,
  installLocation: PluginInstallLocation,
): string | null | undefined {
  return !isPluginMarketplaceManifestPath(homeDirectory, marketplacePath) ||
    installLocation.type !== "local"
    ? null
    : installLocation.path;
}

export function isPluginMarketplaceManifestPath(
  homeDirectory: string | null | undefined,
  marketplacePath: string | null | undefined,
): boolean {
  return homeDirectory == null || marketplacePath == null
    ? false
    : toComparablePath(marketplacePath) ===
        toComparablePath(
          joinPathSegments(homeDirectory, PLUGIN_MARKETPLACE_MANIFEST_PATH),
        );
}

function toComparablePath(path: string): string {
  return normalizePath(path).toLowerCase();
}

function normalizePath(path: string): string {
  return stripWindowsExtendedPathPrefix(path).replace(/\\/g, "/");
}

function stripWindowsExtendedPathPrefix(path: string): string {
  const uncMatch = path.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (uncMatch != null) return `\\\\${uncMatch[1]}`;

  const driveMatch = path.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/);
  return driveMatch == null ? path : driveMatch[1];
}

function joinPathSegments(rootPath: string, relativePath: string): string {
  return rootPath
    ? relativePath
      ? `${rootPath.replace(/\/+$/, "")}/${relativePath.replace(/^\/+/, "")}`
      : rootPath
    : relativePath;
}
