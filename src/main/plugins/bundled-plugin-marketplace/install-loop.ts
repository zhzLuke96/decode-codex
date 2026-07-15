// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Main bundled marketplace plugin install/reconcile loop.

import {
  applyChromeExtensionSyncDecision,
  getBundledPluginInstallReason,
  readChromeExtensionSyncManagedPluginIds,
  writeChromeExtensionSyncManagedPluginMarker,
} from "./chrome-extension-sync";
import {
  MARKETPLACE_MANIFEST_PATH,
  readBundledPluginManifest,
  readChromeExtensionIdConfig,
} from "./manifest-io";
import { resolveInstalledPluginStatus } from "./manifests";
import {
  createBundledPluginInstallFailure,
  createInstalledBundledPluginNameSet,
  logBundledPluginInstallFailure,
  selectReconcileMarketplacePlugins,
  type BundledPluginInstallFailure,
  type BundledPluginInstallPhase,
} from "./install-failures";
import {
  getBundledPluginCacheRoot,
  resolveExecutionHostPathInsideMarketplaceRoot,
} from "./paths";
import {
  copyChromePluginAppServerCodexRuntimes,
  ensureChromeNativeHostCacheVersion,
  reconcileChromeNativeHostForBundledPlugin,
  resolveLocalBundledPluginRoot,
  type ActivateBundledPluginCacheVersion,
  type CopyChromePluginAppServerCodexRuntime,
  type NativeHostNameForPlugin,
  type SyncChromeNativeHost,
  type WaitForBundledPluginCacheVersion,
} from "./native-host-runtime";
import {
  getBundledPluginSourcePathDetails,
  requireChromeNativeHostResourcesPath,
  restoreBundledPluginEnabledConfig,
} from "./install-helpers";
import { readBundledPluginManifestFromAppServer } from "./resource-roots";
import type {
  BundledMarketplace,
  BundledPluginInstallReason,
  BundledPluginManifest,
  ChromeExtensionManagedPluginStore,
  ExecutionHostPath,
  InstalledBundledMarketplace,
  InstalledBundledPluginStatus,
  InstalledMarketplacePlugin,
  StructuredLogger,
} from "./types";

export type InstallLoopAppServerConnection = {
  codexHome(): Promise<string>;
  installPlugin(options: {
    marketplacePath: string;
    pluginName: string;
  }): Promise<void> | void;
  readFile(path: string): Promise<BodyInit> | BodyInit;
  sendAppServerRequest(
    method: "config/batchWrite",
    payload: {
      edits: {
        keyPath: string;
        mergeStrategy: "upsert";
        value: boolean;
      }[];
      reloadUserConfig: boolean;
    },
  ): Promise<unknown> | unknown;
  uninstallPlugin(options: { pluginId: string }): Promise<void> | void;
};

export type StopChromeNativeHost = (options: {
  root: string;
}) => Promise<void> | void;

export type RemoveChromeNativeHost = (options: {
  codexHome: string;
  marketplaceName: string;
  pluginName: string;
}) => Promise<void> | void;

export type InstallBundledMarketplacePluginsOptions = {
  activateBundledPluginCacheVersion: ActivateBundledPluginCacheVersion;
  appServerConnection: InstallLoopAppServerConnection;
  chromeExtensionSyncManagedPluginStore?: ChromeExtensionManagedPluginStore | null;
  copyAppServerCodexRuntime: CopyChromePluginAppServerCodexRuntime;
  devRuntimeRepoRoot?: string | null;
  executionHostPath: ExecutionHostPath;
  forceInstallPluginNames: ReadonlySet<string>;
  installWhenMissingPluginNames: ReadonlySet<string>;
  installedBundledMarketplace: InstalledBundledMarketplace | null | undefined;
  isChromeExtensionInstalled(options: { extensionId: string }): boolean;
  localMarketplaceRoot: string;
  logger: StructuredLogger;
  marketplace: BundledMarketplace;
  marketplaceName: string;
  marketplaceRoot: string;
  nativeHostNameForPlugin: NativeHostNameForPlugin;
  platformFamily: string;
  reconcilePluginNames: ReadonlySet<string>;
  removeChromeNativeHost: RemoveChromeNativeHost;
  resourcesPath?: string | null;
  stopChromeNativeHost: StopChromeNativeHost;
  syncChromeNativeHost: SyncChromeNativeHost;
  syncInstallStateWithChromeExtensionPluginNames: ReadonlySet<string>;
  waitForBundledPluginCacheVersion: WaitForBundledPluginCacheVersion;
};

export type InstallBundledMarketplacePluginsResult = {
  firstFailure: BundledPluginInstallFailure | null;
  installedPluginCountAfterWrite: number;
};

export async function installBundledMarketplacePlugins({
  activateBundledPluginCacheVersion,
  appServerConnection,
  chromeExtensionSyncManagedPluginStore,
  copyAppServerCodexRuntime,
  devRuntimeRepoRoot,
  executionHostPath,
  forceInstallPluginNames,
  installWhenMissingPluginNames,
  installedBundledMarketplace,
  isChromeExtensionInstalled,
  localMarketplaceRoot,
  logger,
  marketplace,
  marketplaceName,
  marketplaceRoot,
  nativeHostNameForPlugin,
  platformFamily,
  reconcilePluginNames,
  removeChromeNativeHost,
  resourcesPath,
  stopChromeNativeHost,
  syncChromeNativeHost,
  syncInstallStateWithChromeExtensionPluginNames,
  waitForBundledPluginCacheVersion,
}: InstallBundledMarketplacePluginsOptions): Promise<InstallBundledMarketplacePluginsResult> {
  const codexHome = await appServerConnection.codexHome();
  const marketplacePath = executionHostPath.join(
    marketplaceRoot,
    ...MARKETPLACE_MANIFEST_PATH,
  );
  const managedPluginIds =
    syncInstallStateWithChromeExtensionPluginNames.size === 0
      ? new Set<string>()
      : await readChromeExtensionSyncManagedPluginIds({
          chromeExtensionSyncManagedPluginStore,
          logger,
        });
  const reconcilePlugins = selectReconcileMarketplacePlugins({
    marketplace,
    reconcilePluginNames,
  });
  const installedPluginNames = createInstalledBundledPluginNameSet({
    installedBundledMarketplace,
    marketplace,
  });

  const nativeRuntimeCopyFailure = await copyChromePluginAppServerCodexRuntimes(
    {
      codexHome,
      copyAppServerCodexRuntime,
      devRuntimeRepoRoot,
      marketplacePath,
      nativeHostNameForPlugin,
      plugins: reconcilePlugins,
      resourcesPath,
    },
  );
  if (nativeRuntimeCopyFailure != null) {
    return {
      firstFailure: nativeRuntimeCopyFailure,
      installedPluginCountAfterWrite: installedPluginNames.size,
    };
  }

  let firstFailure: BundledPluginInstallFailure | null = null;
  const pluginCount = reconcilePlugins.length;

  for (const [pluginIndex, bundledPlugin] of reconcilePlugins.entries()) {
    let installPhase: BundledPluginInstallPhase = "read_bundled_manifest";
    let installedPluginStatus: InstalledBundledPluginStatus | undefined;
    let installReason: BundledPluginInstallReason | null | undefined;
    let installedPluginCacheRoot: string | undefined;
    let cachedBundledManifest: BundledPluginManifest | null = null;

    const getBundledManifest = async (): Promise<BundledPluginManifest> => {
      if (cachedBundledManifest != null) return cachedBundledManifest;
      const pluginRoot = resolveExecutionHostPathInsideMarketplaceRoot({
        executionHostPath,
        label: "bundled plugin source",
        path: bundledPlugin.source.path,
        root: marketplaceRoot,
      });
      cachedBundledManifest = await readBundledPluginManifestFromAppServer({
        appServerConnection,
        executionHostPath,
        pluginRoot,
      });
      return cachedBundledManifest;
    };

    try {
      let shouldWriteManagedMarkerAfterInstall = false;
      const installedPlugin = installedBundledMarketplace?.plugins.find(
        (plugin) => plugin.name === bundledPlugin.name,
      );
      const forceInstall = forceInstallPluginNames.has(bundledPlugin.name);
      const syncInstallStateWithChromeExtension =
        syncInstallStateWithChromeExtensionPluginNames.has(bundledPlugin.name);
      const nativeHostName = nativeHostNameForPlugin(bundledPlugin.name);
      const hasChromeNativeHost = nativeHostName != null;
      const reconcileNativeHost = async (): Promise<void> => {
        installPhase = "reconcile_chrome_native_host";
        const requiredResourcesPath = requireChromeNativeHostResourcesPath(
          resourcesPath,
          bundledPlugin.name,
        );
        await reconcileChromeNativeHostForBundledPlugin({
          activateBundledPluginCacheVersion,
          bundledPlugin,
          codexHome,
          devRuntimeRepoRoot,
          executionHostPath,
          localMarketplaceRoot,
          marketplaceName,
          nativeHostNameForPlugin,
          resourcesPath: requiredResourcesPath,
          syncChromeNativeHost,
        });
      };
      let installWhenMissing = installWhenMissingPluginNames.has(
        bundledPlugin.name,
      );

      if (installedPlugin?.installed === true) {
        installPhase = "read_bundled_manifest";
        const bundledManifest = await getBundledManifest();
        installPhase = "read_installed_manifest";
        installedPluginStatus = await resolveInstalledPluginStatus({
          bundledManifest,
          bundledPluginName: bundledPlugin.name,
          codexHome,
          executionHostPath,
          installedPlugin,
          marketplaceName,
          marketplaceRoot,
          readPluginManifest: (pluginRoot) =>
            readBundledPluginManifestFromAppServer({
              appServerConnection,
              executionHostPath,
              pluginRoot,
            }),
        });
      } else {
        installedPluginStatus = "missing";
      }

      if (syncInstallStateWithChromeExtension) {
        installPhase = "read_chrome_extension_config";
        const chromeExtensionConfig = await readChromeExtensionIdConfig(
          resolveLocalBundledPluginRoot({
            bundledPlugin,
            localMarketplaceRoot,
          }),
        );
        const chromeSyncResult = await applyChromeExtensionSyncDecision({
          chromeExtensionSyncManagedPluginStore:
            chromeExtensionSyncManagedPluginStore!,
          codexHome,
          extensionId: chromeExtensionConfig.extensionId,
          installedPlugin,
          installedPluginStatus,
          isExtensionInstalled: isChromeExtensionInstalled({
            extensionId: chromeExtensionConfig.extensionId,
          }),
          logger,
          managedPluginIds,
          marketplaceName,
          nativeHostPluginName: nativeHostName,
          pluginName: bundledPlugin.name,
          removeChromeNativeHost,
          uninstallPlugin: (pluginId) =>
            appServerConnection.uninstallPlugin({ pluginId }),
        });
        installWhenMissing = chromeSyncResult.installWhenMissing;
        shouldWriteManagedMarkerAfterInstall =
          chromeSyncResult.shouldWriteManagedMarkerAfterInstall;

        if (chromeSyncResult.uninstalledManagedPlugin) {
          installedPluginNames.delete(bundledPlugin.name);
          continue;
        }
      }

      installReason = getBundledPluginInstallReason({
        forceInstall,
        installWhenMissing,
        installedPluginStatus,
      });
      if (installReason == null) {
        logger.info(
          installedPluginStatus === "missing"
            ? "bundled_plugin_install_skipped_missing"
            : "bundled_plugin_install_skipped_current",
          { safe: { pluginName: bundledPlugin.name }, sensitive: {} },
        );

        if (installedPluginStatus === "missing" && hasChromeNativeHost) {
          installPhase = "reconcile_chrome_native_host";
          await removeChromeNativeHost({
            codexHome,
            marketplaceName,
            pluginName: bundledPlugin.name,
          });
        }
        if (installedPluginStatus === "current" && hasChromeNativeHost) {
          await reconcileNativeHost();
          await ensureChromeNativeHostCacheVersion({
            codexHome,
            executionHostPath,
            getBundledManifest,
            marketplaceName,
            nativeHostNameForPlugin,
            pluginName: bundledPlugin.name,
            waitForBundledPluginCacheVersion,
          });
        }
        continue;
      }

      installedPluginCacheRoot = getBundledPluginCacheRoot({
        bundledPluginName: bundledPlugin.name,
        codexHome,
        executionHostPath,
        marketplaceName,
      });
      if (hasChromeNativeHost) {
        installPhase = "stop_chrome_native_host";
        try {
          await stopChromeNativeHost({ root: installedPluginCacheRoot });
        } catch (error) {
          logger.warning("bundled_plugin_chrome_native_host_stop_failed", {
            safe: { pluginName: bundledPlugin.name },
            sensitive: { error },
          });
        }
      }

      logger.info("bundled_plugin_install_requested", {
        safe: {
          ...getBundledPluginSourcePathDetails(bundledPlugin.source.path),
          pluginName: bundledPlugin.name,
          reason: installReason,
        },
        sensitive: {
          bundledPluginSourcePath: bundledPlugin.source.path,
          installedPluginCacheRoot,
          marketplacePath,
        },
      });
      installPhase = "install_plugin";
      await appServerConnection.installPlugin({
        marketplacePath,
        pluginName: bundledPlugin.name,
      });
      installedPluginNames.add(bundledPlugin.name);

      if (hasChromeNativeHost) await reconcileNativeHost();
      installPhase = "read_bundled_manifest";
      await getBundledManifest();
      if (hasChromeNativeHost) {
        installPhase = "reconcile_chrome_native_host";
        await ensureChromeNativeHostCacheVersion({
          codexHome,
          executionHostPath,
          getBundledManifest,
          marketplaceName,
          nativeHostNameForPlugin,
          pluginName: bundledPlugin.name,
          waitForBundledPluginCacheVersion,
        });
      }
      if (shouldWriteManagedMarkerAfterInstall) {
        installPhase = "write_chrome_extension_sync_marker";
        await writeChromeExtensionSyncManagedPluginMarker({
          chromeExtensionSyncManagedPluginStore,
          managed: true,
          pluginId: `${bundledPlugin.name}@${marketplaceName}`,
        });
      }
      if (
        installedPluginStatus !== "missing" &&
        installedPlugin?.enabled === false
      ) {
        logger.info("bundled_plugin_enabled_config_write_requested", {
          safe: {
            enabled: false,
            pluginId: `${bundledPlugin.name}@${marketplaceName}`,
            pluginName: bundledPlugin.name,
          },
          sensitive: {},
        });
        installPhase = "restore_disabled_config";
        await restoreBundledPluginEnabledConfig({
          appServerConnection,
          enabled: false,
          pluginId: `${bundledPlugin.name}@${marketplaceName}`,
        });
      }
    } catch (error) {
      const failure = createBundledPluginInstallFailure({
        error,
        installPhase,
        installReason,
        installedPluginCacheRoot,
        installedPluginStatus,
        marketplacePath,
        pluginCount,
        pluginIndex,
        pluginName: bundledPlugin.name,
        sourcePath: bundledPlugin.source.path,
      });
      logBundledPluginInstallFailure({
        failure,
        logger,
        marketplaceName,
        marketplaceRoot,
        platformFamily,
      });
      firstFailure ??= failure;
    }
  }

  return {
    firstFailure,
    installedPluginCountAfterWrite: installedPluginNames.size,
  };
}
