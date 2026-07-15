// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Reconcile a materialized bundled marketplace with the app-server plugin store.

import {
  addMaterializedBundledMarketplace,
  listInstalledBundledMarketplace,
  type AppServerMarketplaceConnection,
} from "./app-server";
import { categorizeBundledPluginReconcileError } from "./errors";
import {
  installBundledMarketplacePlugins,
  type InstallBundledMarketplacePluginsOptions,
  type InstallLoopAppServerConnection,
} from "./install-loop";
import type {
  InstalledBundledMarketplace,
  MaterializedBundledMarketplace,
  StructuredLogger,
} from "./types";

export type ReconcileMaterializedBundledMarketplaceOptions = Omit<
  InstallBundledMarketplacePluginsOptions,
  | "installedBundledMarketplace"
  | "localMarketplaceRoot"
  | "marketplace"
  | "marketplaceName"
  | "marketplaceRoot"
> & {
  appServerConnection: AppServerMarketplaceConnection &
    InstallLoopAppServerConnection;
  installedBundledMarketplace: InstalledBundledMarketplace | null | undefined;
  logger: StructuredLogger;
  materializedMarketplace: MaterializedBundledMarketplace & {
    localMarketplaceRoot: string;
    marketplaceRoot: string;
  };
  throwOnReconcileFailure: boolean;
};

export type ReconcileMaterializedBundledMarketplaceResult = {
  hadReconcileFailure: boolean;
  installedPluginCountAfterWrite: number | null;
};

export async function reconcileMaterializedBundledMarketplace({
  appServerConnection,
  installedBundledMarketplace,
  logger,
  materializedMarketplace,
  reconcilePluginNames,
  syncInstallStateWithChromeExtensionPluginNames,
  throwOnReconcileFailure,
  ...installOptions
}: ReconcileMaterializedBundledMarketplaceOptions): Promise<ReconcileMaterializedBundledMarketplaceResult> {
  const marketplaceName = await addMaterializedBundledMarketplace({
    appServerConnection,
    logger,
    materializedMarketplace,
    throwOnReconcileFailure,
  });
  if (marketplaceName == null) {
    return { hadReconcileFailure: true, installedPluginCountAfterWrite: null };
  }

  const installedMarketplaceRead =
    syncInstallStateWithChromeExtensionPluginNames.size > 0
      ? await listInstalledBundledMarketplace({
          appServerConnection,
          failOnError: throwOnReconcileFailure,
          logger,
          marketplaceName,
          marketplacePluginNames: [...reconcilePluginNames],
        })
      : { hadReadFailure: false, marketplace: installedBundledMarketplace };

  try {
    const installResult = await installBundledMarketplacePlugins({
      ...installOptions,
      appServerConnection,
      installedBundledMarketplace: installedMarketplaceRead.marketplace,
      localMarketplaceRoot: materializedMarketplace.localMarketplaceRoot,
      logger,
      marketplace: materializedMarketplace.marketplace,
      marketplaceName,
      marketplaceRoot: materializedMarketplace.marketplaceRoot,
      reconcilePluginNames,
      syncInstallStateWithChromeExtensionPluginNames,
    });

    if (installResult.firstFailure != null) {
      if (throwOnReconcileFailure) throw installResult.firstFailure.error;
      return {
        hadReconcileFailure: true,
        installedPluginCountAfterWrite: null,
      };
    }

    return {
      hadReconcileFailure: installedMarketplaceRead.hadReadFailure,
      installedPluginCountAfterWrite:
        installResult.installedPluginCountAfterWrite,
    };
  } catch (error) {
    logger.warning("bundled_plugins_marketplace_install_failed", {
      safe: {
        errorCategory: categorizeBundledPluginReconcileError({
          error,
          platformFamily: installOptions.platformFamily,
        }),
        marketplaceName,
        platformFamily: installOptions.platformFamily,
      },
      sensitive: {
        error,
        marketplaceRoot: materializedMarketplace.marketplaceRoot,
      },
    });
    if (throwOnReconcileFailure) throw error;
    return { hadReconcileFailure: true, installedPluginCountAfterWrite: null };
  }
}
