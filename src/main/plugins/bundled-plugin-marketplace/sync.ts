// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Top-level bundled marketplace sync orchestration.

import {
  listInstalledBundledMarketplace,
  type AppServerMarketplaceConnection,
} from "./app-server";
import { DEFAULT_BUNDLED_MARKETPLACE_NAME } from "./constants";
import { cleanupDisabledInstalledBundledPlugins } from "./install-helpers";
import {
  materializeBundledMarketplace,
  type MaterializeBundledMarketplaceOptions,
} from "./materialize";
import { logPluginMarketplaceSyncCompleted } from "./marketplaces";
import { reconcileMaterializedBundledMarketplace } from "./reconcile";
import { findBundledMarketplaceResourceRoot } from "./resource-roots";
import { resolveRealPathOrOriginal } from "./marketplaces";
import type { InstallLoopAppServerConnection } from "./install-loop";
import type { ReconcileMaterializedBundledMarketplaceOptions } from "./reconcile";
import type {
  InstalledMarketplacePlugin,
  MaterializedBundledMarketplace,
  StructuredLogger,
} from "./types";

export type PlatformMarketplacePathConverter = (options: {
  localPath: string;
  platformFamily: string;
}) => string;

export type SyncBundledMarketplaceAppServerConnection =
  AppServerMarketplaceConnection &
    InstallLoopAppServerConnection & {
      platformFamily(): Promise<string>;
    };

export type SyncBundledMarketplaceOptions = Omit<
  ReconcileMaterializedBundledMarketplaceOptions,
  | "appServerConnection"
  | "forceInstallPluginNames"
  | "installWhenMissingPluginNames"
  | "installedBundledMarketplace"
  | "materializedMarketplace"
  | "platformFamily"
  | "reconcilePluginNames"
  | "syncInstallStateWithChromeExtensionPluginNames"
> & {
  appServerConnection: SyncBundledMarketplaceAppServerConnection;
  browserSkillVariant?: string | null;
  computerUseSkillVariant?: string | null;
  findMarketplaceResourceRoot?: typeof findBundledMarketplaceResourceRoot;
  forceInstallPluginNames?: readonly string[];
  installWhenMissingPluginNames?: readonly string[];
  marketplaceName?: string;
  marketplacePluginNames: readonly string[];
  materializeMarketplace?: typeof materializeBundledMarketplace;
  reconcilePluginNames?: readonly string[];
  resourcesPath: string;
  runtimeMarketplaceRoot: string;
  syncInstallStateWithChromeExtensionPluginNames?: readonly string[];
  toExecutionHostPath?: PlatformMarketplacePathConverter;
};

export type SyncBundledMarketplaceResult = {
  hadReconcileFailure: boolean;
};

export async function syncBundledMarketplace({
  appServerConnection,
  browserSkillVariant,
  computerUseSkillVariant,
  findMarketplaceResourceRoot = findBundledMarketplaceResourceRoot,
  forceInstallPluginNames = [],
  installWhenMissingPluginNames = [],
  logger,
  marketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  marketplacePluginNames,
  materializeMarketplace = materializeBundledMarketplace,
  reconcilePluginNames,
  resourcesPath,
  runtimeMarketplaceRoot,
  syncInstallStateWithChromeExtensionPluginNames = [],
  toExecutionHostPath = ({ localPath }) => localPath,
  ...reconcileOptions
}: SyncBundledMarketplaceOptions): Promise<SyncBundledMarketplaceResult> {
  const reconcilePluginNameSet = new Set(
    reconcilePluginNames ?? marketplacePluginNames,
  );
  const syncInstallStateWithChromeExtensionPluginNameSet = new Set(
    syncInstallStateWithChromeExtensionPluginNames,
  );
  const throwOnReconcileFailure =
    reconcileOptions.throwOnReconcileFailure === true;
  const installedMarketplaceRead = await listInstalledBundledMarketplace({
    appServerConnection,
    failOnError: throwOnReconcileFailure,
    logger,
    marketplaceName,
    marketplacePluginNames,
  });
  const installedBundledMarketplace = installedMarketplaceRead.marketplace;
  const disabledInstalledPlugins = getDisabledInstalledBundledPlugins({
    installedBundledMarketplace,
    marketplacePluginNames,
  });

  let platformFamily: string;
  let materializedMarketplace: MaterializedBundledMarketplace & {
    localMarketplaceRoot: string;
    marketplaceRoot: string;
  };
  try {
    platformFamily = await appServerConnection.platformFamily();
    const sourceMarketplaceRoot = await findMarketplaceResourceRoot({
      logger,
      marketplaceName,
      resourcesPath,
    });
    if (sourceMarketplaceRoot == null) {
      logger.warning("bundled_plugins_marketplace_missing", {
        safe: { marketplacePluginNames },
        sensitive: {},
      });
      await cleanupDisabledInstalledBundledPlugins({
        appServerConnection,
        chromeExtensionSyncManagedPluginStore:
          reconcileOptions.chromeExtensionSyncManagedPluginStore,
        disabledInstalledPlugins,
        logger,
        marketplaceName,
        removeChromeNativeHost: reconcileOptions.removeChromeNativeHost,
      });
      return { hadReconcileFailure: true };
    }

    const materialized = await materializeMarketplace({
      browserSkillVariant,
      computerUseSkillVariant,
      logger,
      marketplaceName,
      marketplacePluginNames,
      sourceMarketplaceRoot,
      targetMarketplaceRoot: runtimeMarketplaceRoot,
    } satisfies MaterializeBundledMarketplaceOptions);
    const localMarketplaceRoot = await resolveRealPathOrOriginal(
      String(materialized.marketplaceRoot),
    );
    materializedMarketplace = {
      ...materialized,
      localMarketplaceRoot,
      marketplaceRoot: toExecutionHostPath({
        localPath: localMarketplaceRoot,
        platformFamily,
      }),
    };
  } catch (error) {
    logger.warning("bundled_plugins_marketplace_resolve_failed", {
      safe: {},
      sensitive: { error },
    });
    await cleanupDisabledInstalledBundledPlugins({
      appServerConnection,
      chromeExtensionSyncManagedPluginStore:
        reconcileOptions.chromeExtensionSyncManagedPluginStore,
      disabledInstalledPlugins,
      logger,
      marketplaceName,
      removeChromeNativeHost: reconcileOptions.removeChromeNativeHost,
    });
    return { hadReconcileFailure: true };
  }

  const reconcileResult = await reconcileMaterializedBundledMarketplace({
    ...reconcileOptions,
    appServerConnection,
    forceInstallPluginNames: new Set(forceInstallPluginNames),
    installWhenMissingPluginNames: new Set(installWhenMissingPluginNames),
    installedBundledMarketplace,
    logger,
    materializedMarketplace,
    platformFamily,
    reconcilePluginNames: reconcilePluginNameSet,
    resourcesPath,
    syncInstallStateWithChromeExtensionPluginNames:
      syncInstallStateWithChromeExtensionPluginNameSet,
  });

  await cleanupDisabledInstalledBundledPlugins({
    appServerConnection,
    chromeExtensionSyncManagedPluginStore:
      reconcileOptions.chromeExtensionSyncManagedPluginStore,
    disabledInstalledPlugins,
    logger,
    marketplaceName,
    removeChromeNativeHost: reconcileOptions.removeChromeNativeHost,
  });

  if (reconcileResult.installedPluginCountAfterWrite != null) {
    logPluginMarketplaceSyncCompleted({
      installedBundledMarketplace,
      installedPluginCountAfterWrite:
        reconcileResult.installedPluginCountAfterWrite,
      logger,
      marketplaceName,
      materializedMarketplace,
    });
  }

  return {
    hadReconcileFailure:
      installedMarketplaceRead.hadReadFailure ||
      reconcileResult.hadReconcileFailure,
  };
}

function getDisabledInstalledBundledPlugins({
  installedBundledMarketplace,
  marketplacePluginNames,
}: {
  installedBundledMarketplace:
    | { plugins: InstalledMarketplacePlugin[] }
    | null
    | undefined;
  marketplacePluginNames: readonly string[];
}): InstalledMarketplacePlugin[] {
  const bundledPluginNames = new Set(marketplacePluginNames);
  return (
    installedBundledMarketplace?.plugins.filter(
      (plugin) => plugin.installed && !bundledPluginNames.has(plugin.name),
    ) ?? []
  );
}
