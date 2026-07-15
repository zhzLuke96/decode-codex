// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Bundled marketplace resource-root discovery and validation.

import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { DEFAULT_BUNDLED_MARKETPLACE_NAME } from "./constants";
import {
  BUNDLED_MARKETPLACE_RESOURCE_SEGMENTS,
  MARKETPLACE_MANIFEST_PATH,
  PLUGIN_MANIFEST_PATH,
  parseBundledPluginManifest,
  readBundledMarketplaceManifest,
  readBundledPluginManifest,
  readMarketplaceManifest,
} from "./manifest-io";
import type {
  BundledMarketplace,
  BundledMarketplacePlugin,
  BundledPluginManifest,
  StructuredLogger,
} from "./types";
import { categorizePluginMarketplaceManifestReadError } from "./errors";

export type MarketplaceRootKind = "bundled_resource" | "runtime_marketplace";

export type MarketplaceResourceCandidate = {
  marketplaceName: string;
  marketplaceRoot: string;
};

export function getBundledMarketplaceResourceCandidates({
  fallbackMarketplaceName = DEFAULT_BUNDLED_MARKETPLACE_NAME,
  marketplaceName,
  resourcesPath,
}: {
  fallbackMarketplaceName?: string;
  marketplaceName: string;
  resourcesPath: string;
}): MarketplaceResourceCandidate[] {
  return [marketplaceName, fallbackMarketplaceName]
    .filter((name, index, names) => names.indexOf(name) === index)
    .flatMap((name) => [
      {
        marketplaceName: name,
        marketplaceRoot: join(
          resourcesPath,
          ...BUNDLED_MARKETPLACE_RESOURCE_SEGMENTS,
          name,
        ),
      },
      {
        marketplaceName: name,
        marketplaceRoot: join(
          resourcesPath,
          "app.asar.unpacked",
          ...BUNDLED_MARKETPLACE_RESOURCE_SEGMENTS,
          name,
        ),
      },
    ]);
}

export async function findBundledMarketplaceResourceRoot({
  logger,
  marketplaceName,
  resourcesPath,
}: {
  logger?: StructuredLogger;
  marketplaceName: string;
  resourcesPath: string;
}): Promise<string | null> {
  const candidates = getBundledMarketplaceResourceCandidates({
    marketplaceName,
    resourcesPath,
  });
  const results = await Promise.all(
    candidates.map(async (candidate) =>
      (await isBundledMarketplaceResourceRoot({ ...candidate, logger }))
        ? candidate.marketplaceRoot
        : null,
    ),
  );
  return results.find((result) => result != null) ?? null;
}

export async function isBundledMarketplaceResourceRoot({
  logger,
  marketplaceName,
  marketplaceRoot,
}: MarketplaceResourceCandidate & {
  logger?: StructuredLogger;
}): Promise<boolean> {
  return isMarketplaceRoot({
    logger,
    marketplaceName,
    marketplaceRoot,
    marketplaceRootKind: "bundled_resource",
    readMarketplaceManifest: readBundledMarketplaceManifest,
  });
}

export async function isRuntimeMarketplaceRoot({
  logger,
  marketplaceRoot,
}: {
  logger?: StructuredLogger;
  marketplaceRoot: string;
}): Promise<boolean> {
  return isMarketplaceRoot({
    logger,
    marketplaceRoot,
    marketplaceRootKind: "runtime_marketplace",
    readMarketplaceManifest,
  });
}

async function isMarketplaceRoot({
  logger,
  marketplaceName,
  marketplaceRoot,
  marketplaceRootKind,
  readMarketplaceManifest,
}: {
  logger?: StructuredLogger;
  marketplaceName?: string;
  marketplaceRoot: string;
  marketplaceRootKind: MarketplaceRootKind;
  readMarketplaceManifest(root: string): Promise<BundledMarketplace>;
}): Promise<boolean> {
  if (!existsSync(join(marketplaceRoot, ...MARKETPLACE_MANIFEST_PATH))) {
    return false;
  }

  try {
    const marketplace = await readMarketplaceManifest(marketplaceRoot);
    const pluginChecks = await Promise.all(
      marketplace.plugins.map((plugin) =>
        isPluginRootForMarketplaceEntry({
          plugin,
          pluginRoot: resolve(marketplaceRoot, plugin.source.path),
        }),
      ),
    );
    return pluginChecks.every(Boolean);
  } catch (error) {
    if (logger != null && marketplaceName != null) {
      logger.warning("plugin_marketplace_manifest_read_failed", {
        safe: {
          errorCategory: categorizePluginMarketplaceManifestReadError(error),
          marketplaceName,
          marketplaceRootKind,
        },
        sensitive: { error, marketplaceRoot },
      });
    }
    return false;
  }
}

export async function isPluginRootForMarketplaceEntry({
  plugin,
  pluginRoot,
}: {
  plugin: BundledMarketplacePlugin;
  pluginRoot: string;
}): Promise<boolean> {
  if (!existsSync(join(pluginRoot, ...PLUGIN_MANIFEST_PATH))) return false;
  try {
    const manifest = await readBundledPluginManifest(pluginRoot);
    return manifest.name === plugin.name;
  } catch {
    return false;
  }
}

export async function readBundledPluginManifestFromAppServer({
  appServerConnection,
  executionHostPath,
  pluginRoot,
}: {
  appServerConnection: { readFile(path: string): Promise<BodyInit> | BodyInit };
  executionHostPath: { join(...segments: string[]): string };
  pluginRoot: string;
}): Promise<BundledPluginManifest> {
  return parseBundledPluginManifest(
    JSON.parse(
      await new Response(
        await appServerConnection.readFile(
          executionHostPath.join(pluginRoot, ...PLUGIN_MANIFEST_PATH),
        ),
      ).text(),
    ),
  );
}
