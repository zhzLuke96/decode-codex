// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Runtime marketplace folder removal with structured failure logging.

import { rm } from "node:fs/promises";
import type { MarketplaceWriteCounts, StructuredLogger } from "./types";

export type PluginMarketplaceDirectoryKind =
  | "runtime_marketplace"
  | "staging_marketplace";

export type PluginMarketplaceRemovePhase =
  | "cleanup_staging_after_write"
  | "cleanup_staging_before_write"
  | "replace_target"
  | "stale_cleanup";

export async function removePluginMarketplaceDirectory({
  directory,
  directoryKind,
  logger,
  marketplaceName,
  marketplaceWriteCounts,
  remove = rm,
  removePhase,
}: {
  directory: string;
  directoryKind: PluginMarketplaceDirectoryKind;
  logger: StructuredLogger;
  marketplaceName: string;
  marketplaceWriteCounts?: MarketplaceWriteCounts | null;
  remove?: typeof rm;
  removePhase: PluginMarketplaceRemovePhase | string;
}): Promise<void> {
  try {
    await remove(directory, { force: true, recursive: true });
  } catch (error) {
    logger.warning("plugin_marketplace_folder_remove_failed", {
      safe: {
        directoryKind,
        marketplaceName,
        removePhase,
        ...(marketplaceWriteCounts ?? {}),
      },
      sensitive: { directory, error },
    });
    throw error;
  }
}
