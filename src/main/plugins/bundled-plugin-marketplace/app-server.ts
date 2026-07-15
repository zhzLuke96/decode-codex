// Restored from ref/.vite/build/main-Cfnoc8EH.js
// App-server marketplace list/add wrappers for bundled marketplace reconciliation.

import type {
  InstalledBundledMarketplace,
  MaterializedBundledMarketplace,
  StructuredLogger,
} from "./types";

export const LOCAL_PLUGIN_MARKETPLACE_LIST_PARAMS = {
  marketplaceKinds: ["local"],
} as const;

export type InstalledPluginMarketplace = InstalledBundledMarketplace & {
  name: string;
};

export type AppServerMarketplaceConnection = {
  addMarketplace(options: {
    source: string;
  }): Promise<{ marketplaceName: string }> | { marketplaceName: string };
  listPlugins(
    params: typeof LOCAL_PLUGIN_MARKETPLACE_LIST_PARAMS,
  ):
    | Promise<{ marketplaces: InstalledPluginMarketplace[] }>
    | { marketplaces: InstalledPluginMarketplace[] };
};

export async function listInstalledBundledMarketplace({
  appServerConnection,
  failOnError,
  logger,
  marketplaceName,
  marketplacePluginNames,
}: {
  appServerConnection: Pick<AppServerMarketplaceConnection, "listPlugins">;
  failOnError: boolean;
  logger: StructuredLogger;
  marketplaceName: string;
  marketplacePluginNames: readonly string[];
}): Promise<{
  hadReadFailure: boolean;
  marketplace: InstalledPluginMarketplace | undefined;
}> {
  try {
    const { marketplaces } = await appServerConnection.listPlugins(
      LOCAL_PLUGIN_MARKETPLACE_LIST_PARAMS,
    );
    return {
      hadReadFailure: false,
      marketplace: marketplaces.find(
        (marketplace) => marketplace.name === marketplaceName,
      ),
    };
  } catch (error) {
    logger.warning("bundled_plugins_list_failed", {
      safe: { marketplaceName, marketplacePluginNames },
      sensitive: { error },
    });
    if (failOnError) throw error;
    return { hadReadFailure: true, marketplace: undefined };
  }
}

export async function addMaterializedBundledMarketplace({
  appServerConnection,
  logger,
  materializedMarketplace,
  throwOnReconcileFailure,
}: {
  appServerConnection: Pick<AppServerMarketplaceConnection, "addMarketplace">;
  logger: StructuredLogger;
  materializedMarketplace: MaterializedBundledMarketplace & {
    marketplaceRoot: string;
  };
  throwOnReconcileFailure: boolean;
}): Promise<string | null> {
  try {
    const { marketplaceName } = await appServerConnection.addMarketplace({
      source: materializedMarketplace.marketplaceRoot,
    });
    logger.info("bundled_plugins_marketplace_added", {
      safe: {
        marketplacePluginNames: materializedMarketplace.marketplace.plugins.map(
          (plugin) => plugin.name,
        ),
        marketplaceName,
      },
      sensitive: { marketplaceRoot: materializedMarketplace.marketplaceRoot },
    });
    return marketplaceName;
  } catch (error) {
    logger.warning("bundled_plugins_marketplace_add_failed", {
      safe: { marketplaceName: materializedMarketplace.marketplace.name },
      sensitive: {
        error,
        marketplaceRoot: materializedMarketplace.marketplaceRoot,
      },
    });
    if (throwOnReconcileFailure) throw error;
    return null;
  }
}
