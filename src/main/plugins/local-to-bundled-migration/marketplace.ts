// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Marketplace lookup helpers for browser-use/computer-use migrations.

import { join } from "node:path";
import { DEFAULT_BUNDLED_MARKETPLACE_NAME } from "./constants";
import { areSameResolvedPath, matchesStoredLocalPluginPath } from "./paths";
import type {
  InstalledLocalPluginMatch,
  Marketplace,
  MarketplacePlugin,
  MarketplacePluginMatch,
  MarketplaceWithPath,
} from "./types";

export function selectBundledMarketplaces({
  fallbackMarketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  marketplaceName,
  marketplaces,
}: {
  fallbackMarketplaceName?: string;
  marketplaceName: string;
  marketplaces: Marketplace[];
}): Marketplace[] {
  return [marketplaceName, fallbackMarketplaceName]
    .filter((name, index, names) => names.indexOf(name) === index)
    .flatMap((name) =>
      marketplaces.filter((marketplace) => marketplace.name === name),
    );
}

export function findMarketplacePlugin({
  fallbackMarketplaceName,
  marketplaceName,
  marketplaces,
  pluginName,
}: {
  fallbackMarketplaceName?: string;
  marketplaceName: string;
  marketplaces: Marketplace[];
  pluginName: string;
}): MarketplacePluginMatch | null {
  for (const marketplace of selectBundledMarketplaces({
    fallbackMarketplaceName,
    marketplaceName,
    marketplaces,
  })) {
    const plugin = marketplace.plugins.find(
      (candidate) => candidate.name === pluginName,
    );
    if (marketplace.path != null && plugin != null) {
      return {
        marketplace: withMarketplacePath(marketplace),
        plugin,
      };
    }
  }
  return null;
}

export function findInstalledLocalPlugin({
  codexHome,
  localPluginDirectoryName,
  marketplaces,
  pluginName,
}: {
  codexHome: string;
  localPluginDirectoryName: string;
  marketplaces: Marketplace[];
  pluginName: string;
}): InstalledLocalPluginMatch | null {
  const localPluginPath = join(codexHome, "plugins", localPluginDirectoryName);
  for (const marketplace of marketplaces) {
    if (marketplace.path == null) continue;
    for (const plugin of marketplace.plugins) {
      if (isInstalledLocalPlugin(plugin, pluginName, localPluginPath)) {
        return {
          marketplace: withMarketplacePath(marketplace),
          plugin,
        };
      }
    }
  }
  return null;
}

export function isMarketplaceLocalPluginEntry({
  codexHome,
  localPluginPath,
  plugin,
  pluginName,
}: {
  codexHome: string;
  localPluginPath: string;
  plugin: MarketplacePlugin;
  pluginName: string;
}): boolean {
  return (
    plugin.name === pluginName &&
    plugin.source?.source === "local" &&
    typeof plugin.source.path === "string" &&
    matchesStoredLocalPluginPath({
      codexHome,
      localPluginPath,
      sourcePath: plugin.source.path,
    })
  );
}

function isInstalledLocalPlugin(
  plugin: MarketplacePlugin,
  pluginName: string,
  localPluginPath: string,
): plugin is InstalledLocalPluginMatch["plugin"] {
  return (
    plugin.name === pluginName &&
    plugin.installed === true &&
    typeof plugin.id === "string" &&
    plugin.source?.type === "local" &&
    typeof plugin.source.path === "string" &&
    areSameResolvedPath(plugin.source.path, localPluginPath)
  );
}

function withMarketplacePath(marketplace: Marketplace): MarketplaceWithPath {
  return { ...marketplace, path: marketplace.path as string };
}
