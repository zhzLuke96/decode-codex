// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Marketplace filtering and sync-summary helpers.

import { realpath as defaultRealpath } from "node:fs/promises";
import type {
  BundledMarketplace,
  InstalledBundledMarketplace,
  MarketplaceWriteCounts,
  MaterializedBundledMarketplace,
  StructuredLogger,
} from "./types";

export type FilterMarketplacePluginsInput = {
  marketplace: BundledMarketplace;
  marketplacePluginNames: readonly string[];
};

export type PluginMarketplaceSyncSummary = {
  marketplaceName: string;
  pluginCount: number;
  pluginCountAfterWrite?: number;
  pluginCountBeforeWrite?: number;
  pluginsInstalledAfterWrite: number;
  pluginsInstalledBeforeWrite: number;
};

export function filterMarketplacePlugins({
  marketplace,
  marketplacePluginNames,
}: FilterMarketplacePluginsInput): BundledMarketplace {
  const includedPluginNames = new Set(marketplacePluginNames);
  return {
    ...marketplace,
    plugins: marketplace.plugins.filter((plugin) =>
      includedPluginNames.has(plugin.name),
    ),
  };
}

export function countInstalledMarketplacePlugins(
  marketplace: InstalledBundledMarketplace | null | undefined,
  pluginNames: ReadonlySet<string>,
): number {
  return (
    marketplace?.plugins.filter(
      (plugin) => plugin.installed && pluginNames.has(plugin.name),
    ).length ?? 0
  );
}

export function createPluginMarketplaceSyncSummary({
  installedBundledMarketplace,
  installedPluginCountAfterWrite,
  marketplaceName,
  materializedMarketplace,
}: {
  installedBundledMarketplace: InstalledBundledMarketplace | null | undefined;
  installedPluginCountAfterWrite: number;
  marketplaceName: string;
  materializedMarketplace: MaterializedBundledMarketplace;
}): PluginMarketplaceSyncSummary {
  const pluginNames = new Set(
    materializedMarketplace.marketplace.plugins.map((plugin) => plugin.name),
  );
  return {
    marketplaceName,
    pluginCount: materializedMarketplace.marketplace.plugins.length,
    pluginsInstalledAfterWrite: installedPluginCountAfterWrite,
    pluginsInstalledBeforeWrite: countInstalledMarketplacePlugins(
      installedBundledMarketplace,
      pluginNames,
    ),
    ...(materializedMarketplace.marketplaceWriteCounts ?? {}),
  };
}

export function logPluginMarketplaceSyncCompleted({
  installedBundledMarketplace,
  installedPluginCountAfterWrite,
  logger,
  marketplaceName,
  materializedMarketplace,
}: {
  installedBundledMarketplace: InstalledBundledMarketplace | null | undefined;
  installedPluginCountAfterWrite: number;
  logger: StructuredLogger;
  marketplaceName: string;
  materializedMarketplace: MaterializedBundledMarketplace;
}): void {
  logger.info("plugin_marketplace_sync_completed", {
    safe: createPluginMarketplaceSyncSummary({
      installedBundledMarketplace,
      installedPluginCountAfterWrite,
      marketplaceName,
      materializedMarketplace,
    }),
    sensitive: {},
  });
}

export async function resolveRealPathOrOriginal(
  path: string,
  {
    realpath = defaultRealpath,
  }: {
    realpath?: (path: string) => Promise<string>;
  } = {},
): Promise<string> {
  try {
    return await realpath(path);
  } catch {
    return path;
  }
}
