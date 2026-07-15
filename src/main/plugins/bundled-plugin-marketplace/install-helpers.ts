// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Small install-loop helpers for bundled plugin reconciliation.

import type {
  ChromeExtensionManagedPluginStore,
  InstalledMarketplacePlugin,
  StructuredLogger,
} from "./types";

export type BundledPluginSourcePathDetails =
  | {
      bundledPluginSourcePath: string;
      bundledPluginSourcePathKind: "relative";
    }
  | {
      bundledPluginSourcePathKind: "redacted";
    };

export function getBundledPluginSourcePathDetails(
  sourcePath: string,
): BundledPluginSourcePathDetails {
  const segments = sourcePath.split(/[\\/]+/).filter(Boolean);
  return !sourcePath.startsWith("/") &&
    !sourcePath.startsWith("\\") &&
    !/^[a-zA-Z]:/.test(sourcePath) &&
    !segments.includes("..")
    ? {
        bundledPluginSourcePath: sourcePath,
        bundledPluginSourcePathKind: "relative",
      }
    : { bundledPluginSourcePathKind: "redacted" };
}

export function requireChromeNativeHostResourcesPath(
  resourcesPath: string | null | undefined,
  pluginName: string,
): string {
  if (resourcesPath == null) {
    throw Error(
      `Missing resourcesPath required to sync Chrome native host resources for ${pluginName}.`,
    );
  }
  return resourcesPath;
}

export async function restoreBundledPluginEnabledConfig({
  appServerConnection,
  enabled,
  pluginId,
}: {
  appServerConnection: {
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
  };
  enabled: boolean;
  pluginId: string;
}): Promise<void> {
  await appServerConnection.sendAppServerRequest("config/batchWrite", {
    edits: [
      {
        keyPath: `plugins.${pluginId}.enabled`,
        mergeStrategy: "upsert",
        value: enabled,
      },
    ],
    reloadUserConfig: true,
  });
}

export async function cleanupDisabledInstalledBundledPlugins({
  appServerConnection,
  chromeExtensionSyncManagedPluginStore,
  disabledInstalledPlugins,
  logger,
  marketplaceName,
  removeChromeNativeHost,
}: {
  appServerConnection: {
    codexHome(): Promise<string>;
    uninstallPlugin(options: { pluginId: string }): Promise<void> | void;
  };
  chromeExtensionSyncManagedPluginStore?: ChromeExtensionManagedPluginStore;
  disabledInstalledPlugins: InstalledMarketplacePlugin[];
  logger: StructuredLogger;
  marketplaceName: string;
  removeChromeNativeHost(options: {
    codexHome: string;
    marketplaceName: string;
    pluginName: string;
  }): Promise<void> | void;
}): Promise<void> {
  if (disabledInstalledPlugins.length === 0) return;

  const codexHome = await appServerConnection.codexHome();
  for (const plugin of disabledInstalledPlugins) {
    await removeChromeNativeHost({
      codexHome,
      marketplaceName,
      pluginName: plugin.name,
    });
    logger.info("bundled_plugin_uninstall_requested", {
      safe: {
        pluginId: plugin.id,
        pluginName: plugin.name,
        reason: "not_in_bundled_marketplace_plugin_names",
      },
      sensitive: {},
    });
    await appServerConnection.uninstallPlugin({ pluginId: plugin.id });
    chromeExtensionSyncManagedPluginStore?.setManagedPluginId(plugin.id, false);
  }
}
