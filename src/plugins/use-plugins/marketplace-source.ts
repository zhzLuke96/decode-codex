// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Marketplace request shaping and display item normalization.

import { resolvePluginIconPaths } from "./icons";
import type {
  MarketplaceRequestSource,
  PluginDisplayItem,
  PluginInstallRequest,
  PluginMarketplaceSource,
  PluginSummary,
  SuggestedPlugin,
} from "./types";
export function normalizeSuggestedPluginSummary(
  suggestion: SuggestedPlugin,
): PluginDisplayItem {
  return {
    ...resolvePluginIconPaths(suggestion.summary),
    description:
      suggestion.summary.interface?.shortDescription ??
      suggestion.description ??
      null,
    displayName: suggestion.summary.interface?.displayName ?? null,
    marketplaceDisplayName: null,
    marketplaceName: suggestion.marketplaceName,
    plugin: suggestion.summary,
    keywords: suggestion.summary.keywords,
    ...createDisplayMarketplaceSource({
      marketplaceName: suggestion.marketplaceName,
      marketplacePath: suggestion.marketplacePath,
    }),
  };
}
export function buildMarketplaceSourceRequest({
  marketplacePath,
  remoteMarketplaceName,
}: PluginMarketplaceSource): MarketplaceRequestSource {
  if (marketplacePath != null && remoteMarketplaceName != null) {
    throw Error("plugin marketplace request requires one marketplace source");
  }
  if (marketplacePath != null) {
    return {
      marketplacePath,
    };
  }
  if (remoteMarketplaceName != null) {
    return {
      remoteMarketplaceName,
    };
  }
  throw Error("plugin marketplace request requires a marketplace source");
}
export function getPluginSourceKey(source: PluginMarketplaceSource): string {
  return source.marketplacePath ?? `remote:${source.remoteMarketplaceName}`;
}
export function resolvePluginName(plugin: PluginDisplayItem): string {
  return plugin.marketplacePath == null
    ? requireRemotePluginId(plugin.plugin)
    : plugin.plugin.name;
}
export function resolvePluginInstallName(plugin: PluginDisplayItem): string {
  return plugin.marketplacePath == null
    ? requireRemotePluginId(plugin.plugin)
    : plugin.plugin.id;
}
export function requireRemotePluginId(plugin: PluginSummary): string {
  if (plugin.remotePluginId == null) {
    throw Error(`remote plugin ${plugin.id} is missing remotePluginId`);
  }
  return plugin.remotePluginId;
}
export function buildPluginInstallRequest(
  plugin: PluginDisplayItem,
): PluginInstallRequest {
  return {
    ...buildMarketplaceSourceRequest(plugin),
    pluginName: resolvePluginName(plugin),
  };
}
export function createDisplayMarketplaceSource({
  marketplaceName,
  marketplacePath,
}: {
  marketplaceName: string;
  marketplacePath?: string | null;
}): {
  marketplacePath: string | null;
  remoteMarketplaceName: string | null;
} {
  return marketplacePath == null
    ? {
        marketplacePath: null,
        remoteMarketplaceName: marketplaceName,
      }
    : {
        marketplacePath,
        remoteMarketplaceName: null,
      };
}
