// Restored from ref/.vite/build/main-Cfnoc8EH.js
// JSON manifest IO helpers for bundled marketplaces and plugins.

import * as fs from "node:fs/promises";
import { join } from "node:path";
import type { BundledMarketplace, BundledPluginManifest } from "./types";

export const BUNDLED_MARKETPLACE_RESOURCE_SEGMENTS = ["plugins"] as const;
export const MARKETPLACE_MANIFEST_PATH = [
  ".agents",
  "plugins",
  "marketplace.json",
] as const;
export const CHROME_EXTENSION_ID_PATH = [
  "scripts",
  "extension-id.json",
] as const;
export const PLUGIN_MANIFEST_PATH = [".codex-plugin", "plugin.json"] as const;

export type ManifestFileSystem = Pick<typeof fs, "readFile">;

export type ChromeExtensionIdConfig = {
  extensionId: string;
};

export async function readBundledMarketplaceManifest(
  marketplaceRoot: string,
  options?: { fileSystem?: ManifestFileSystem },
): Promise<BundledMarketplace> {
  const manifest = await readMarketplaceManifest(marketplaceRoot, options);
  assertSinglePathSegment(manifest.name, "marketplace name");
  for (const plugin of manifest.plugins) {
    if (plugin.source.source !== "local") {
      throw Error("Expected bundled marketplace plugin source to be local");
    }
  }
  return manifest;
}

export async function readMarketplaceManifest(
  marketplaceRoot: string,
  { fileSystem = fs }: { fileSystem?: ManifestFileSystem } = {},
): Promise<BundledMarketplace> {
  return parseMarketplaceManifest(
    JSON.parse(
      await fileSystem.readFile(
        join(marketplaceRoot, ...MARKETPLACE_MANIFEST_PATH),
        "utf8",
      ),
    ),
  );
}

export async function readBundledPluginManifest(
  pluginRoot: string,
  { fileSystem = fs }: { fileSystem?: ManifestFileSystem } = {},
): Promise<BundledPluginManifest> {
  return parseBundledPluginManifest(
    JSON.parse(
      await fileSystem.readFile(
        join(pluginRoot, ...PLUGIN_MANIFEST_PATH),
        "utf8",
      ),
    ),
  );
}

export async function readChromeExtensionIdConfig(
  pluginRoot: string,
  { fileSystem = fs }: { fileSystem?: ManifestFileSystem } = {},
): Promise<ChromeExtensionIdConfig> {
  const parsed = parseRecord(
    JSON.parse(
      await fileSystem.readFile(
        join(pluginRoot, ...CHROME_EXTENSION_ID_PATH),
        "utf8",
      ),
    ),
    "Chrome extension id config",
  );
  return { extensionId: readNonEmptyString(parsed, "extensionId") };
}

export function parseMarketplaceManifest(value: unknown): BundledMarketplace {
  const manifest = parseRecord(value, "marketplace manifest");
  return {
    interface: manifest.interface,
    name: readNonEmptyString(manifest, "name"),
    plugins: readArray(manifest, "plugins").map(parseMarketplacePlugin),
  };
}

export function parseBundledPluginManifest(
  value: unknown,
): BundledPluginManifest {
  const manifest = parseRecord(value, "plugin manifest");
  const bundledContentVariant =
    typeof manifest.bundledContentVariant === "string" &&
    manifest.bundledContentVariant.trim().length > 0
      ? manifest.bundledContentVariant
      : undefined;
  return {
    ...(bundledContentVariant == null ? {} : { bundledContentVariant }),
    name: readString(manifest, "name"),
    version: readNonEmptyString(manifest, "version"),
  };
}

function parseMarketplacePlugin(
  value: unknown,
): BundledMarketplace["plugins"][0] {
  const plugin = parseRecord(value, "marketplace plugin");
  const source = parseRecord(plugin.source, "marketplace plugin source");
  return {
    name: readNonEmptyString(plugin, "name"),
    source: {
      path: readNonEmptyString(source, "path"),
      source: typeof source.source === "string" ? source.source : undefined,
    },
  };
}

function parseRecord(value: unknown, label: string): Record<string, unknown> {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw Error(`Expected ${label} to be a JSON object`);
  }
  return value as Record<string, unknown>;
}

function readArray(record: Record<string, unknown>, key: string): unknown[] {
  const value = record[key];
  if (!Array.isArray(value)) throw Error(`Expected ${key} to be an array`);
  return value;
}

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  if (typeof value !== "string") throw Error(`Expected ${key} to be a string`);
  return value;
}

function readNonEmptyString(
  record: Record<string, unknown>,
  key: string,
): string {
  const value = readString(record, key).trim();
  if (value.length === 0) throw Error(`Expected ${key} to be non-empty`);
  return value;
}

function assertSinglePathSegment(value: string, label: string): void {
  if (
    value === "." ||
    value === ".." ||
    value.includes("/") ||
    value.includes("\\")
  ) {
    throw Error(`Expected ${label} to be a single path segment`);
  }
}
