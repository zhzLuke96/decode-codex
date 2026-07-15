// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Plugin and marketplace filtering helpers.

import {
  CURATED_MARKETPLACE_NAME,
  CURATED_REMOTE_MARKETPLACE_NAME,
  HIDE_CURATED_MARKETPLACES,
  HIDE_LOCAL_CURATED_MARKETPLACE,
  getBuildFlavor,
  getBundledMarketplaceName,
  getMarketplaceNameSuffix,
  isBundledMarketplaceName,
} from "./marketplace-constants";
import type {
  PluginAvailability,
  PluginDisplayItem,
  PluginMarketplace,
} from "./types";
const BLOCKED_FEATURED_PLUGIN_BASE_NAMES = ["datadog", "statsig"];
const BUILT_IN_MARKETPLACE_NAMES = new Set(
  [
    "codex-official",
    getBundledMarketplaceName(getBuildFlavor()),
    CURATED_MARKETPLACE_NAME,
    CURATED_REMOTE_MARKETPLACE_NAME,
    "openai-primary-runtime",
  ].map(normalizeMarketplaceName),
);
export function supportsPluginAuthMethod(
  authMethod: string | null | undefined,
): boolean {
  return (
    authMethod !== "chatgpt" &&
    authMethod !== "apikey" &&
    authMethod !== "amazonBedrock"
  );
}
export function filterBlockedFeaturedPluginIds(
  featuredPluginIds: readonly string[],
): string[] {
  return featuredPluginIds.filter((pluginId) => {
    const baseName = getPluginBaseName(pluginId).toLowerCase();
    return !BLOCKED_FEATURED_PLUGIN_BASE_NAMES.some(
      (blockedName) =>
        baseName === blockedName || baseName.startsWith(`${blockedName}-`),
    );
  });
}
export function filterMarketplacesByName(
  marketplaces: PluginMarketplace[],
  hiddenMarketplaceNames: readonly string[],
): PluginMarketplace[] {
  return hiddenMarketplaceNames.length === 0
    ? marketplaces
    : marketplaces.filter(
        (marketplace) => !hiddenMarketplaceNames.includes(marketplace.name),
      );
}
export function getHiddenMarketplaceNames({
  hideCuratedMarketplaces,
  supportsRemotePluginCatalog,
  curatedMarketplaceGateEnabled,
}: {
  hideCuratedMarketplaces: boolean;
  supportsRemotePluginCatalog: boolean;
  curatedMarketplaceGateEnabled: boolean;
}): string[] {
  if (supportsRemotePluginCatalog) return [...HIDE_CURATED_MARKETPLACES];
  if (curatedMarketplaceGateEnabled) return [...HIDE_LOCAL_CURATED_MARKETPLACE];
  return hideCuratedMarketplaces ? [...HIDE_CURATED_MARKETPLACES] : [];
}
export function filterFeaturedPluginIdsByAvailability({
  featuredPluginIds,
  ...availability
}: {
  featuredPluginIds: readonly string[];
} & PluginAvailability): string[] {
  return featuredPluginIds.filter((pluginId) =>
    isPluginAllowedByAvailability(pluginId, availability),
  );
}
export function filterPluginsByAvailability({
  plugins,
  ...availability
}: {
  plugins: readonly PluginDisplayItem[];
} & PluginAvailability): PluginDisplayItem[] {
  return plugins.filter((plugin) =>
    isPluginAllowedByAvailability(plugin.plugin.id, availability),
  );
}
export function getInstalledPlugins(
  plugins: readonly PluginDisplayItem[],
): PluginDisplayItem[] {
  return plugins.filter((plugin) => plugin.plugin.installed);
}
export function isPluginAllowedByAvailability(
  pluginId: string,
  {
    isComputerUseAvailable,
    isExternalBrowserUseAvailable,
    isInAppBrowserUseAvailable,
  }: PluginAvailability,
): boolean {
  return !(
    (!isInAppBrowserUseAvailable && isInAppBrowserPluginId(pluginId)) ||
    (!isExternalBrowserUseAvailable && isExternalBrowserPluginId(pluginId)) ||
    (!isComputerUseAvailable && isComputerUsePluginId(pluginId))
  );
}
export function isInAppBrowserPluginId(pluginId: string): boolean {
  const baseName = getPluginBaseName(pluginId);
  return baseName === "browser" || baseName === "browser-use";
}
export function isExternalBrowserPluginId(pluginId: string): boolean {
  const baseName = getPluginBaseName(pluginId);
  return (
    baseName === "chrome" ||
    baseName === "chrome-dev" ||
    baseName === "chrome-internal"
  );
}
export function isComputerUsePluginId(pluginId: string): boolean {
  return getPluginBaseName(pluginId) === "computer-use";
}
export function filterFeaturedPluginIdsByBuildFlavor({
  buildFlavor,
  featuredPluginIds,
}: {
  buildFlavor: string;
  featuredPluginIds: readonly string[];
}): string[] {
  const bundledMarketplaceName = getBundledMarketplaceName(buildFlavor);
  return featuredPluginIds.filter((pluginId) => {
    const marketplaceSuffix = getMarketplaceNameSuffix(pluginId);
    return marketplaceSuffix == null
      ? true
      : !isBundledMarketplaceName(marketplaceSuffix) ||
          marketplaceSuffix === bundledMarketplaceName;
  });
}
export function filterPluginsByBuildFlavor({
  buildFlavor,
  plugins,
}: {
  buildFlavor: string;
  plugins: readonly PluginDisplayItem[];
}): PluginDisplayItem[] {
  const bundledMarketplaceName = getBundledMarketplaceName(buildFlavor);
  return plugins.filter(
    (plugin) =>
      !isBundledMarketplaceName(plugin.marketplaceName) ||
      plugin.marketplaceName === bundledMarketplaceName,
  );
}
export function isBuiltInMarketplaceName(marketplaceName: string): boolean {
  return BUILT_IN_MARKETPLACE_NAMES.has(
    normalizeMarketplaceName(marketplaceName),
  );
}
function getPluginBaseName(pluginId: string): string {
  return pluginId.split("@")[0] ?? "";
}
function normalizeMarketplaceName(marketplaceName: string): string {
  return marketplaceName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "");
}
