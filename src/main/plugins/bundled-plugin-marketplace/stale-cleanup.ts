// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Cleanup for stale openai-bundled-* marketplaces and cache directories.

import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { join } from "node:path";
import {
  DEFAULT_BUNDLED_MARKETPLACE_NAME,
  STALE_BUNDLED_MARKETPLACE_NAMES,
} from "./constants";
import type { StructuredLogger } from "./types";

const STALE_BUNDLED_MARKETPLACE_NAME_SET = new Set<string>(
  STALE_BUNDLED_MARKETPLACE_NAMES,
);

export type BundledMarketplaceCleanupConnection = {
  codexHome(): Promise<string>;
  listPlugins(options?: unknown): Promise<{
    marketplaces: { name: string }[];
  }>;
  sendAppServerRequest(
    method: "marketplace/remove",
    params: { marketplaceName: string },
  ): Promise<unknown> | unknown;
};

export async function cleanupStaleBundledMarketplaces({
  appServerConnection,
  listPluginsOptions,
  logger,
  marketplaceName,
}: {
  appServerConnection: BundledMarketplaceCleanupConnection;
  listPluginsOptions?: unknown;
  logger: StructuredLogger;
  marketplaceName: string;
}): Promise<void> {
  if (marketplaceName !== DEFAULT_BUNDLED_MARKETPLACE_NAME) return;

  let marketplaces: { name: string }[] = [];
  try {
    ({ marketplaces } =
      await appServerConnection.listPlugins(listPluginsOptions));
  } catch (error) {
    logger.warning("stale_bundled_marketplaces_list_failed", {
      safe: {},
      sensitive: { error },
    });
  }

  const staleMarketplaces = marketplaces.filter((marketplace) =>
    STALE_BUNDLED_MARKETPLACE_NAME_SET.has(marketplace.name),
  );
  for (const marketplace of staleMarketplaces) {
    try {
      await appServerConnection.sendAppServerRequest("marketplace/remove", {
        marketplaceName: marketplace.name,
      });
      logger.info("stale_bundled_marketplace_remove_requested", {
        safe: { marketplaceName: marketplace.name },
        sensitive: {},
      });
    } catch (error) {
      logger.warning("stale_bundled_marketplace_remove_failed", {
        safe: { marketplaceName: marketplace.name },
        sensitive: { error },
      });
    }
  }

  try {
    await cleanupStaleBundledMarketplaceDirectories({
      codexHome: await appServerConnection.codexHome(),
      logger,
    });
  } catch (error) {
    logger.warning("stale_bundled_marketplace_directory_cleanup_failed", {
      safe: { reason: "codex_home_unavailable" },
      sensitive: { error },
    });
  }
}

export async function cleanupStaleBundledMarketplaceDirectories({
  codexHome,
  logger,
}: {
  codexHome: string;
  logger: StructuredLogger;
}): Promise<void> {
  for (const marketplaceName of STALE_BUNDLED_MARKETPLACE_NAMES) {
    await removeStaleBundledMarketplaceDirectory({
      codexHome,
      directoryKind: "plugin_cache",
      logger,
      marketplaceName,
      pathSegments: ["plugins", "cache", marketplaceName],
    });
    await removeStaleBundledMarketplaceDirectory({
      codexHome,
      directoryKind: "runtime_marketplace",
      logger,
      marketplaceName,
      pathSegments: [".tmp", "bundled-marketplaces", marketplaceName],
    });
  }
}

async function removeStaleBundledMarketplaceDirectory({
  codexHome,
  directoryKind,
  logger,
  marketplaceName,
  pathSegments,
}: {
  codexHome: string;
  directoryKind: "plugin_cache" | "runtime_marketplace";
  logger: StructuredLogger;
  marketplaceName: string;
  pathSegments: string[];
}): Promise<void> {
  const directory = join(codexHome, ...pathSegments);
  if (!existsSync(directory)) return;
  try {
    await rm(directory, { force: true, recursive: true });
    logger.info("stale_bundled_marketplace_directory_removed", {
      safe: { directoryKind, marketplaceName },
      sensitive: {},
    });
  } catch (error) {
    logger.warning("stale_bundled_marketplace_directory_remove_failed", {
      safe: { directoryKind, marketplaceName },
      sensitive: { error },
    });
    logger.warning("plugin_marketplace_folder_remove_failed", {
      safe: {
        directoryKind,
        marketplaceName,
        removePhase: "stale_cleanup",
      },
      sensitive: { directory, error },
    });
  }
}
