// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Materialize bundled marketplace resources into the runtime marketplace root.

import { existsSync } from "node:fs";
import * as fs from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import { applyBundledContentVariant } from "./content-variants";
import { copyBundledPluginDirectory } from "./copy";
import { categorizePluginMarketplaceManifestReadError } from "./errors";
import { removePluginMarketplaceDirectory } from "./folder-removal";
import {
  MARKETPLACE_MANIFEST_PATH,
  readBundledMarketplaceManifest,
  readMarketplaceManifest,
} from "./manifest-io";
import { filterMarketplacePlugins } from "./marketplaces";
import { assertPathInsideMarketplaceRoot } from "./paths";
import type {
  BundledMarketplace,
  MarketplaceWriteCounts,
  MaterializedBundledMarketplace,
  StructuredLogger,
} from "./types";

export type MaterializeBundledMarketplaceOptions = {
  browserSkillVariant?: string | null;
  computerUseSkillVariant?: string | null;
  copyPluginDirectory?: typeof copyBundledPluginDirectory;
  fileSystem?: Pick<typeof fs, "mkdir" | "rename" | "writeFile">;
  logger: StructuredLogger;
  marketplaceName: string;
  marketplacePluginNames: readonly string[];
  randomId?: () => string;
  sourceMarketplaceRoot: string;
  targetMarketplaceRoot: string;
};

export async function materializeBundledMarketplace({
  browserSkillVariant,
  computerUseSkillVariant,
  copyPluginDirectory = copyBundledPluginDirectory,
  fileSystem = fs,
  logger,
  marketplaceName,
  marketplacePluginNames,
  randomId = randomUUID,
  sourceMarketplaceRoot,
  targetMarketplaceRoot,
}: MaterializeBundledMarketplaceOptions): Promise<MaterializedBundledMarketplace> {
  let sourceMarketplace: BundledMarketplace;
  try {
    sourceMarketplace = await readBundledMarketplaceManifest(
      sourceMarketplaceRoot,
    );
  } catch (error) {
    logPluginMarketplaceManifestReadFailed({
      error,
      logger,
      marketplaceName,
      marketplaceRoot: sourceMarketplaceRoot,
      marketplaceRootKind: "bundled_resource",
    });
    throw error;
  }

  const marketplace = {
    ...filterMarketplacePlugins({
      marketplace: sourceMarketplace,
      marketplacePluginNames,
    }),
    name: marketplaceName,
  };
  const marketplaceWriteCounts: MarketplaceWriteCounts = {
    pluginCountAfterWrite: marketplace.plugins.length,
    pluginCountBeforeWrite: await countExistingMarketplacePlugins({
      logger,
      marketplaceName,
      marketplaceRoot: targetMarketplaceRoot,
      marketplaceRootKind: "runtime_marketplace",
    }),
  };
  const stagingRoot = `${targetMarketplaceRoot}.staging-${randomId()}`;
  let folderWritePhase = "cleanup_staging_before_write";

  try {
    await removePluginMarketplaceDirectory({
      directory: stagingRoot,
      directoryKind: "staging_marketplace",
      logger,
      marketplaceName,
      marketplaceWriteCounts,
      removePhase: "cleanup_staging_before_write",
    });
    folderWritePhase = "create_staging";
    await fileSystem.mkdir(
      join(stagingRoot, ...MARKETPLACE_MANIFEST_PATH.slice(0, -1)),
      { recursive: true },
    );

    folderWritePhase = "write_manifest";
    await writeMarketplaceManifest({
      fileSystem,
      logger,
      marketplace,
      marketplaceName,
      marketplaceRoot: stagingRoot,
      marketplaceWriteCounts,
    });

    folderWritePhase = "copy_plugins";
    await Promise.all(
      marketplace.plugins.map(async (plugin) => {
        const sourcePluginRoot = resolve(
          sourceMarketplaceRoot,
          plugin.source.path,
        );
        const targetPluginRoot = resolve(stagingRoot, plugin.source.path);
        assertPathInsideMarketplaceRoot({
          label: "bundled plugin target",
          path: targetPluginRoot,
          root: stagingRoot,
        });
        await fileSystem.mkdir(dirname(targetPluginRoot), { recursive: true });
        await copyPluginDirectory({
          source: sourcePluginRoot,
          target: targetPluginRoot,
        });
        await applyBundledContentVariant({
          browserSkillVariant,
          computerUseSkillVariant,
          pluginName: plugin.name,
          pluginRoot: targetPluginRoot,
        });
      }),
    );

    folderWritePhase = "replace_target";
    await removePluginMarketplaceDirectory({
      directory: targetMarketplaceRoot,
      directoryKind: "runtime_marketplace",
      logger,
      marketplaceName,
      marketplaceWriteCounts,
      removePhase: "replace_target",
    });

    folderWritePhase = "create_target_parent";
    await fileSystem.mkdir(resolve(targetMarketplaceRoot, ".."), {
      recursive: true,
    });

    folderWritePhase = "rename_staging";
    await fileSystem.rename(stagingRoot, targetMarketplaceRoot);
  } catch (error) {
    logger.warning("plugin_marketplace_folder_write_failed", {
      safe: { folderWritePhase, marketplaceName, ...marketplaceWriteCounts },
      sensitive: { error, sourceMarketplaceRoot, targetMarketplaceRoot },
    });
    throw error;
  } finally {
    await removePluginMarketplaceDirectory({
      directory: stagingRoot,
      directoryKind: "staging_marketplace",
      logger,
      marketplaceName,
      marketplaceWriteCounts,
      removePhase: "cleanup_staging_after_write",
    });
  }

  logger.info("plugin_marketplace_folder_write_succeeded", {
    safe: { marketplaceName, ...marketplaceWriteCounts },
    sensitive: { sourceMarketplaceRoot, targetMarketplaceRoot },
  });
  logger.info("bundled_plugins_runtime_marketplace_written", {
    safe: {
      pluginCount: marketplace.plugins.length,
      pluginNames: marketplace.plugins.map((plugin) => plugin.name),
    },
    sensitive: { targetMarketplaceRoot },
  });

  return {
    localMarketplaceRoot: targetMarketplaceRoot,
    marketplace,
    marketplaceRoot: targetMarketplaceRoot,
    marketplaceWriteCounts,
  };
}

export async function countExistingMarketplacePlugins({
  logger,
  marketplaceName,
  marketplaceRoot,
  marketplaceRootKind,
}: {
  logger: StructuredLogger;
  marketplaceName: string;
  marketplaceRoot: string;
  marketplaceRootKind: "bundled_resource" | "runtime_marketplace";
}): Promise<number | null> {
  if (!existsSync(join(marketplaceRoot, ...MARKETPLACE_MANIFEST_PATH))) {
    return null;
  }
  try {
    return (await readMarketplaceManifest(marketplaceRoot)).plugins.length;
  } catch (error) {
    logPluginMarketplaceManifestReadFailed({
      error,
      logger,
      marketplaceName,
      marketplaceRoot,
      marketplaceRootKind,
    });
    return null;
  }
}

async function writeMarketplaceManifest({
  fileSystem,
  logger,
  marketplace,
  marketplaceName,
  marketplaceRoot,
  marketplaceWriteCounts,
}: {
  fileSystem: Pick<typeof fs, "writeFile">;
  logger: StructuredLogger;
  marketplace: BundledMarketplace;
  marketplaceName: string;
  marketplaceRoot: string;
  marketplaceWriteCounts: MarketplaceWriteCounts;
}): Promise<void> {
  try {
    await fileSystem.writeFile(
      join(marketplaceRoot, ...MARKETPLACE_MANIFEST_PATH),
      `${JSON.stringify(marketplace, null, 2)}\n`,
      "utf8",
    );
  } catch (error) {
    logger.warning("plugin_marketplace_manifest_write_failed", {
      safe: { marketplaceName, ...marketplaceWriteCounts },
      sensitive: { error, marketplaceRoot },
    });
    throw error;
  }
}

function logPluginMarketplaceManifestReadFailed({
  error,
  logger,
  marketplaceName,
  marketplaceRoot,
  marketplaceRootKind,
}: {
  error: unknown;
  logger: StructuredLogger;
  marketplaceName: string;
  marketplaceRoot: string;
  marketplaceRootKind: "bundled_resource" | "runtime_marketplace";
}): void {
  logger.warning("plugin_marketplace_manifest_read_failed", {
    safe: {
      errorCategory: categorizePluginMarketplaceManifestReadError(error),
      marketplaceName,
      marketplaceRootKind,
    },
    sensitive: { error, marketplaceRoot },
  });
}
