// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Constants shared by the plugin marketplace restore.

import type { MarketplaceDisplaySummary, PluginDisplayItem } from "./types";
export const pluginsQueryKey = ["plugins"] as const;
export const EMPTY_FEATURED_PLUGIN_IDS: string[] = [];
export const EMPTY_MARKETPLACE_LOAD_ERRORS: unknown[] = [];
export const EMPTY_PLUGIN_ITEMS: PluginDisplayItem[] = [];
export const EMPTY_MARKETPLACES: MarketplaceDisplaySummary[] = [];
export const CURATED_MARKETPLACE_GATE = "4218407052";
export const HIDDEN_CURATED_MARKETPLACES_QUERY_KEY =
  "openai-curated-marketplaces-hidden";
export const LOCAL_INTERNAL_TESTING_MARKETPLACE_RELATIVE_PATH =
  ".tmp/marketplaces/openai-internal-testing";
export const PLUGIN_IMAGE_INLINE_CONCURRENCY = 4;
export const CURATED_MARKETPLACE_NAME = "openai-curated";
export const CURATED_REMOTE_MARKETPLACE_NAME = "openai-curated-remote";
export const BUNDLED_MARKETPLACE_NAME = "openai-bundled";
export const HIDE_CURATED_MARKETPLACES = [
  CURATED_MARKETPLACE_NAME,
  CURATED_REMOTE_MARKETPLACE_NAME,
] as const;
export const HIDE_LOCAL_CURATED_MARKETPLACE = [
  CURATED_MARKETPLACE_NAME,
] as const;
export function getBuildFlavor(): string {
  return window.electronBridge?.getBuildFlavor?.() || "prod";
}
export function getBundledMarketplaceName(_buildFlavor: string): string {
  return BUNDLED_MARKETPLACE_NAME;
}
export function isBundledMarketplaceName(marketplaceName: string): boolean {
  return marketplaceName === BUNDLED_MARKETPLACE_NAME;
}
export function getMarketplaceNameSuffix(value: string): string | null {
  const separatorIndex = value.lastIndexOf("@");
  return separatorIndex <= 0 || separatorIndex === value.length - 1
    ? null
    : value.slice(separatorIndex + 1);
}
export function getCuratedMarketplaceName(
  curatedMarketplaceGateEnabled: boolean,
): string {
  return curatedMarketplaceGateEnabled
    ? CURATED_REMOTE_MARKETPLACE_NAME
    : CURATED_MARKETPLACE_NAME;
}
