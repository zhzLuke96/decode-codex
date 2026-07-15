// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Read bundled plugin Chrome extension sync state for install-state observation.

import { DEFAULT_BUNDLED_MARKETPLACE_NAME } from "./constants";
import {
  readBundledMarketplaceManifest,
  readChromeExtensionIdConfig,
} from "./manifest-io";
import { filterMarketplacePlugins } from "./marketplaces";
import { resolveLocalBundledPluginRoot } from "./native-host-runtime";
import { findBundledMarketplaceResourceRoot } from "./resource-roots";
import type { StructuredLogger } from "./types";

export type ChromeExtensionSyncStateEntry = {
  extensionId: string;
  isExtensionInstalled: boolean;
  pluginName: string;
};

export async function stringifyChromeExtensionSyncState(
  options: ReadChromeExtensionSyncStateOptions,
): Promise<string | null> {
  if (options.marketplacePluginNames.length === 0) return null;
  const state = await readChromeExtensionSyncState(options);
  return state == null ? null : JSON.stringify(state);
}

export type ReadChromeExtensionSyncStateOptions = {
  findMarketplaceResourceRoot?: typeof findBundledMarketplaceResourceRoot;
  isChromeExtensionInstalled(options: { extensionId: string }): boolean;
  logger: StructuredLogger;
  marketplaceName?: string;
  marketplacePluginNames: readonly string[];
  resourcesPath: string;
};

export async function readChromeExtensionSyncState({
  findMarketplaceResourceRoot = findBundledMarketplaceResourceRoot,
  isChromeExtensionInstalled,
  logger,
  marketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  marketplacePluginNames,
  resourcesPath,
}: ReadChromeExtensionSyncStateOptions): Promise<
  ChromeExtensionSyncStateEntry[] | null
> {
  if (marketplacePluginNames.length === 0) return [];

  try {
    const marketplaceRoot = await findMarketplaceResourceRoot({
      logger,
      marketplaceName,
      resourcesPath,
    });
    if (marketplaceRoot == null) {
      logger.warning("bundled_plugins_marketplace_missing", {
        safe: { marketplacePluginNames },
        sensitive: {},
      });
      return null;
    }

    const marketplace = filterMarketplacePlugins({
      marketplace: await readBundledMarketplaceManifest(marketplaceRoot),
      marketplacePluginNames,
    });

    return await Promise.all(
      marketplace.plugins.map(async (plugin) => {
        const chromeExtensionConfig = await readChromeExtensionIdConfig(
          resolveLocalBundledPluginRoot({
            bundledPlugin: plugin,
            localMarketplaceRoot: marketplaceRoot,
          }),
        );
        return {
          extensionId: chromeExtensionConfig.extensionId,
          isExtensionInstalled: isChromeExtensionInstalled({
            extensionId: chromeExtensionConfig.extensionId,
          }),
          pluginName: plugin.name,
        };
      }),
    );
  } catch (error) {
    logger.warning("bundled_plugins_chrome_extension_sync_state_read_failed", {
      safe: { marketplacePluginNames },
      sensitive: { error },
    });
    return null;
  }
}
