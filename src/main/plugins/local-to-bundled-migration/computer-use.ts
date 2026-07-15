// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use local plugin to bundled plugin migration.

import { execFile as execFileCallback } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import {
  COMPUTER_USE_APP_NAME,
  COMPUTER_USE_PLUGIN_NAME,
  DEFAULT_BUNDLED_MARKETPLACE_NAME,
} from "./constants";
import { removeComputerUseLocalPluginConfig } from "./config-cleanup";
import { findInstalledLocalPlugin, findMarketplacePlugin } from "./marketplace";
import { removeLocalPluginFromMarketplace } from "./marketplace-cleanup";
import type {
  IsMacAppNotarized,
  LocalMigrationLogger,
  LocalToBundledMigrationOptions,
} from "./types";

const execFile = promisify(execFileCallback);
const COMPUTER_USE_MIGRATION_LOG_PREFIX =
  "computer_use_local_to_bundled_migration";

export type ComputerUseLocalToBundledMigrationOptions =
  LocalToBundledMigrationOptions & {
    isMacAppNotarized?: IsMacAppNotarized;
  };

export async function migrateComputerUseLocalToBundled(
  options: ComputerUseLocalToBundledMigrationOptions,
): Promise<void> {
  try {
    await runComputerUseLocalToBundledMigration(options);
  } catch (error) {
    options.logger.warning(`${COMPUTER_USE_MIGRATION_LOG_PREFIX}_failed`, {
      safe: {},
      sensitive: { error },
    });
  }
}

export async function runComputerUseLocalToBundledMigration({
  appServerConnection,
  codexHome,
  isMacAppNotarized = defaultIsMacAppNotarized,
  listPluginsOptions,
  logger,
  marketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  trashItem,
}: ComputerUseLocalToBundledMigrationOptions): Promise<void> {
  const { marketplaces } =
    await appServerConnection.listPlugins(listPluginsOptions);
  const bundledPlugin = findMarketplacePlugin({
    marketplaceName,
    marketplaces,
    pluginName: COMPUTER_USE_PLUGIN_NAME,
  });
  if (bundledPlugin == null) {
    logger.debug?.("bundled_computer_use_plugin_missing_for_migration", {
      safe: {},
    });
    return;
  }

  const localPlugin = findInstalledLocalPlugin({
    codexHome,
    localPluginDirectoryName: COMPUTER_USE_PLUGIN_NAME,
    marketplaces,
    pluginName: COMPUTER_USE_PLUGIN_NAME,
  });
  if (localPlugin == null) {
    logger.debug?.("local_computer_use_plugin_missing_for_migration", {
      safe: {},
    });
    return;
  }

  const localBuildNumber = await readComputerUseLocalBuildNumber({
    logger,
    pluginPath: localPlugin.plugin.source.path,
  });
  const hasVersionedBuild = localBuildNumber != null && localBuildNumber > 0;
  const gatekeeperAccepted = hasVersionedBuild
    ? false
    : await isMacAppNotarized(
        join(localPlugin.plugin.source.path, COMPUTER_USE_APP_NAME),
      );

  if (!gatekeeperAccepted && !hasVersionedBuild) {
    logger.info("local_computer_use_plugin_kept_for_development", {
      safe: { localBuildNumber },
      sensitive: { localPluginPath: localPlugin.plugin.source.path },
    });
    return;
  }

  const reason = gatekeeperAccepted ? "gatekeeper_accepted" : "versioned_build";
  await appServerConnection.uninstallPlugin({
    pluginId: localPlugin.plugin.id,
  });
  logger.info(`${COMPUTER_USE_MIGRATION_LOG_PREFIX}_uninstalled_local`, {
    safe: { localBuildNumber, reason },
  });

  await trashItem(localPlugin.plugin.source.path);
  logger.info(`${COMPUTER_USE_MIGRATION_LOG_PREFIX}_moved_local_to_trash`, {
    safe: { localBuildNumber, reason },
    sensitive: { localPluginPath: localPlugin.plugin.source.path },
  });

  await removeLocalPluginFromMarketplace({
    codexHome,
    localPluginPath: localPlugin.plugin.source.path,
    logger,
    logPrefix: COMPUTER_USE_MIGRATION_LOG_PREFIX,
    marketplacePath: localPlugin.marketplace.path,
    pluginName: COMPUTER_USE_PLUGIN_NAME,
  });

  await removeComputerUseLocalPluginConfig({
    codexHome,
    localPluginPath: localPlugin.plugin.source.path,
    logger,
  });

  if (bundledPlugin.plugin.installed !== true) {
    await appServerConnection.installPlugin({
      marketplacePath: bundledPlugin.marketplace.path,
      pluginName: COMPUTER_USE_PLUGIN_NAME,
    });
    logger.info(`${COMPUTER_USE_MIGRATION_LOG_PREFIX}_installed_bundled`, {
      safe: {},
      sensitive: { marketplacePath: bundledPlugin.marketplace.path },
    });
  }
}

async function readComputerUseLocalBuildNumber({
  logger,
  pluginPath,
}: {
  logger: LocalMigrationLogger;
  pluginPath: string;
}): Promise<number | null> {
  try {
    return parseComputerUseBuildNumber(
      (await readComputerUsePluginManifest(pluginPath)).version,
    );
  } catch (error) {
    logger.warning("computer_use_plugin_manifest_read_failed", {
      safe: {},
      sensitive: { error, pluginPath },
    });
    return null;
  }
}

async function readComputerUsePluginManifest(pluginPath: string): Promise<{
  name: typeof COMPUTER_USE_PLUGIN_NAME;
  version: string;
}> {
  const manifestPath = join(pluginPath, ".codex-plugin", "plugin.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  if (
    typeof manifest !== "object" ||
    manifest == null ||
    Array.isArray(manifest) ||
    manifest.name !== COMPUTER_USE_PLUGIN_NAME ||
    typeof manifest.version !== "string" ||
    manifest.version.trim().length === 0
  ) {
    throw Error("Invalid Computer Use plugin manifest");
  }
  return {
    name: COMPUTER_USE_PLUGIN_NAME,
    version: manifest.version,
  };
}

export function parseComputerUseBuildNumber(version: string): number | null {
  const match = version.match(/^\d+\.\d+\.(\d+)(?:[-+].*)?$/);
  return match == null ? null : Number(match[1]);
}

export async function defaultIsMacAppNotarized(
  appPath: string,
): Promise<boolean> {
  if (process.platform !== "darwin") return false;
  try {
    await execFile(
      "/usr/sbin/spctl",
      ["--assess", "--type", "execute", "--verbose=4", appPath],
      { env: cleanProcessEnv(process.env), timeout: 5000 },
    );
    return true;
  } catch {
    return false;
  }
}

function cleanProcessEnv(
  env: NodeJS.ProcessEnv,
): Record<string, string> | undefined {
  const cleaned: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    if (value != null) cleaned[key] = value;
  }
  return cleaned;
}
