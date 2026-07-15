// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Browser Use local plugin to bundled plugin migration.

import {
  BROWSER_BUNDLED_PLUGIN_NAME,
  BROWSER_USE_LOCAL_PLUGIN_NAME,
  DEFAULT_BUNDLED_MARKETPLACE_NAME,
} from "./constants";
import { findInstalledLocalPlugin, findMarketplacePlugin } from "./marketplace";
import { removeLocalPluginFromMarketplace } from "./marketplace-cleanup";
import type { LocalToBundledMigrationOptions } from "./types";

const BROWSER_USE_MIGRATION_LOG_PREFIX =
  "browser_use_local_to_bundled_migration";

export async function migrateBrowserUseLocalToBundled(
  options: LocalToBundledMigrationOptions,
): Promise<void> {
  try {
    await runBrowserUseLocalToBundledMigration(options);
  } catch (error) {
    options.logger.warning(`${BROWSER_USE_MIGRATION_LOG_PREFIX}_failed`, {
      safe: {},
      sensitive: { error },
    });
  }
}

export async function runBrowserUseLocalToBundledMigration({
  appServerConnection,
  codexHome,
  listPluginsOptions,
  logger,
  marketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  trashItem,
}: LocalToBundledMigrationOptions): Promise<void> {
  const { marketplaces } =
    await appServerConnection.listPlugins(listPluginsOptions);
  const bundledPlugin = findMarketplacePlugin({
    marketplaceName,
    marketplaces,
    pluginName: BROWSER_BUNDLED_PLUGIN_NAME,
  });
  if (bundledPlugin == null) {
    logger.debug?.("bundled_browser_use_plugin_missing_for_migration", {
      safe: {},
    });
    return;
  }

  const localPlugin = findInstalledLocalPlugin({
    codexHome,
    localPluginDirectoryName: BROWSER_USE_LOCAL_PLUGIN_NAME,
    marketplaces,
    pluginName: BROWSER_USE_LOCAL_PLUGIN_NAME,
  });
  if (localPlugin == null) {
    logger.debug?.("local_browser_use_plugin_missing_for_migration", {
      safe: {},
    });
    return;
  }

  await appServerConnection.uninstallPlugin({
    pluginId: localPlugin.plugin.id,
  });
  logger.info(`${BROWSER_USE_MIGRATION_LOG_PREFIX}_uninstalled_local`, {
    safe: {},
  });

  await trashItem(localPlugin.plugin.source.path);
  logger.info(`${BROWSER_USE_MIGRATION_LOG_PREFIX}_moved_local_to_trash`, {
    safe: {},
    sensitive: { localPluginPath: localPlugin.plugin.source.path },
  });

  await removeLocalPluginFromMarketplace({
    codexHome,
    localPluginPath: localPlugin.plugin.source.path,
    logger,
    logPrefix: BROWSER_USE_MIGRATION_LOG_PREFIX,
    marketplacePath: localPlugin.marketplace.path,
    pluginName: BROWSER_USE_LOCAL_PLUGIN_NAME,
  });

  if (bundledPlugin.plugin.installed !== true) {
    await appServerConnection.installPlugin({
      marketplacePath: bundledPlugin.marketplace.path,
      pluginName: BROWSER_BUNDLED_PLUGIN_NAME,
    });
    logger.info(`${BROWSER_USE_MIGRATION_LOG_PREFIX}_installed_bundled`, {
      safe: {},
      sensitive: { marketplacePath: bundledPlugin.marketplace.path },
    });
  }
}
