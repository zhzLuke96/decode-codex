// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Marketplace JSON cleanup for migrated local plugins.

import { readFile, writeFile } from "node:fs/promises";
import { isMarketplaceLocalPluginEntry } from "./marketplace";
import type { LocalMigrationLogger, MarketplacePlugin } from "./types";

export async function removeLocalPluginFromMarketplace({
  codexHome,
  localPluginPath,
  logger,
  logPrefix,
  marketplacePath,
  pluginName,
}: {
  codexHome: string;
  localPluginPath: string;
  logger: LocalMigrationLogger;
  logPrefix: string;
  marketplacePath: string;
  pluginName: string;
}): Promise<void> {
  try {
    const marketplace = parseMarketplaceFile(
      JSON.parse(await readFile(marketplacePath, "utf8")),
    );
    const plugins = marketplace.plugins.filter(
      (plugin) =>
        !isMarketplaceLocalPluginEntry({
          codexHome,
          localPluginPath,
          plugin,
          pluginName,
        }),
    );
    if (plugins.length === marketplace.plugins.length) {
      logger.debug?.(`${logPrefix}_marketplace_entry_missing`, {
        safe: {},
        sensitive: { marketplacePath },
      });
      return;
    }
    await writeFile(
      marketplacePath,
      `${JSON.stringify({ ...marketplace, plugins }, null, 2)}\n`,
      "utf8",
    );
    logger.info(`${logPrefix}_removed_marketplace_entry`, {
      safe: {},
      sensitive: { marketplacePath },
    });
  } catch (error) {
    logger.warning(`${logPrefix}_marketplace_cleanup_failed`, {
      safe: {},
      sensitive: { error, marketplacePath },
    });
  }
}

function parseMarketplaceFile(value: unknown): {
  plugins: MarketplacePlugin[];
  [key: string]: unknown;
} {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw Error("Marketplace file must be an object");
  }
  const marketplace = value as Record<string, unknown>;
  if (!Array.isArray(marketplace.plugins)) {
    throw Error("Marketplace file is missing plugins");
  }
  return {
    ...marketplace,
    plugins: marketplace.plugins.map(parseMarketplacePlugin),
  };
}

function parseMarketplacePlugin(value: unknown): MarketplacePlugin {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw Error("Marketplace plugin must be an object");
  }
  const plugin = value as Record<string, unknown>;
  if (typeof plugin.name !== "string") {
    throw Error("Marketplace plugin is missing name");
  }
  return {
    ...plugin,
    id: typeof plugin.id === "string" ? plugin.id : undefined,
    installed:
      typeof plugin.installed === "boolean" ? plugin.installed : undefined,
    name: plugin.name,
    source:
      typeof plugin.source === "object" &&
      plugin.source != null &&
      !Array.isArray(plugin.source)
        ? (plugin.source as MarketplacePlugin["source"])
        : undefined,
  };
}
