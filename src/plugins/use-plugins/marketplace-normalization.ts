// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Marketplace summaries and plugin list normalization.

import { resolvePluginIconPaths } from "./icons";
import {
  EMPTY_FEATURED_PLUGIN_IDS,
  EMPTY_MARKETPLACE_LOAD_ERRORS,
  EMPTY_MARKETPLACES,
  EMPTY_PLUGIN_ITEMS,
} from "./marketplace-constants";
import { createDisplayMarketplaceSource } from "./marketplace-source";
import { isBuiltInMarketplaceName } from "./plugin-filters";
import type {
  LoadedPluginsData,
  MarketplaceDisplaySummary,
  PluginDisplayItem,
  PluginMarketplace,
} from "./types";
export function summarizeMarketplaces(
  marketplaces: readonly PluginMarketplace[],
): MarketplaceDisplaySummary[] {
  const summariesByKey = new Map<string, MarketplaceDisplaySummary>();
  for (const marketplace of marketplaces) {
    const marketplaceKey = `${marketplace.name}\u0000${marketplace.path ?? ""}`;
    if (summariesByKey.has(marketplaceKey)) continue;
    summariesByKey.set(marketplaceKey, {
      displayName: marketplace.interface?.displayName ?? null,
      isBuiltIn: isBuiltInMarketplaceName(marketplace.name),
      name: marketplace.name,
      path: marketplace.path,
      pluginCount: marketplace.plugins.length,
    });
  }
  return Array.from(summariesByKey.values()).sort(
    (leftMarketplace, rightMarketplace) => {
      const leftName =
        leftMarketplace.displayName?.trim() || leftMarketplace.name;
      const rightName =
        rightMarketplace.displayName?.trim() || rightMarketplace.name;
      return leftName.localeCompare(rightName);
    },
  );
}
export function normalizePluginsFromMarketplaces(
  marketplaces: readonly PluginMarketplace[],
): PluginDisplayItem[] {
  const pluginsById = new Map<string, PluginDisplayItem>();
  for (const marketplace of marketplaces) {
    for (const plugin of marketplace.plugins) {
      if (pluginsById.has(plugin.id)) continue;
      pluginsById.set(plugin.id, {
        ...resolvePluginIconPaths(plugin),
        description: plugin.interface?.shortDescription ?? null,
        displayName: plugin.interface?.displayName ?? null,
        marketplaceDisplayName: marketplace.interface?.displayName ?? null,
        marketplaceName: marketplace.name,
        plugin,
        keywords: plugin.keywords,
        ...createDisplayMarketplaceSource({
          marketplaceName: marketplace.name,
          marketplacePath: marketplace.path,
        }),
      });
    }
  }
  return Array.from(pluginsById.values());
}
export function emptyLoadedPluginsData(): LoadedPluginsData {
  return {
    featuredPluginIds: EMPTY_FEATURED_PLUGIN_IDS,
    marketplaceLoadErrors: EMPTY_MARKETPLACE_LOAD_ERRORS,
    marketplaces: EMPTY_MARKETPLACES,
    plugins: EMPTY_PLUGIN_ITEMS,
  };
}
