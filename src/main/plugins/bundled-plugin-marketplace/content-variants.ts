// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Bundled plugin content variant file overrides.

import * as fs from "node:fs/promises";
import { join } from "node:path";

export const BROWSER_BUNDLED_PLUGIN_NAME = "browser";
export const CHROME_DEV_PLUGIN_NAME = "chrome-dev";
export const CHROME_INTERNAL_PLUGIN_NAME = "chrome-internal";
export const CHROME_PLUGIN_NAME = "chrome";
export const COMPUTER_USE_PLUGIN_NAME = "computer-use";

export const UNIFIED_BROWSER_SKILL_SOURCE_PATH = [
  ".codex-plugin",
  "unified-skill.md",
] as const;
export const IN_APP_BROWSER_SKILL_DESTINATION_PATH = [
  "skills",
  "control-in-app-browser",
  "SKILL.md",
] as const;
export const CHROME_SKILL_DESTINATION_PATH = [
  "skills",
  "control-chrome",
  "SKILL.md",
] as const;
export const COMPUTER_USE_NODE_REPL_SKILL_SOURCE_PATH = [
  ".codex-plugin",
  "computer-use-node-repl.md",
] as const;
export const COMPUTER_USE_SKILL_DESTINATION_PATH = [
  "skills",
  "computer-use",
  "SKILL.md",
] as const;

const BROWSER_SKILL_VARIANT_DESTINATIONS = new Map<string, readonly string[]>([
  [BROWSER_BUNDLED_PLUGIN_NAME, IN_APP_BROWSER_SKILL_DESTINATION_PATH],
  [CHROME_DEV_PLUGIN_NAME, CHROME_SKILL_DESTINATION_PATH],
  [CHROME_INTERNAL_PLUGIN_NAME, CHROME_SKILL_DESTINATION_PATH],
  [CHROME_PLUGIN_NAME, CHROME_SKILL_DESTINATION_PATH],
]);

export type BundledContentVariantCopy = {
  destination: readonly string[];
  source: readonly string[];
};

export type BundledContentVariantPlan = {
  bundledContentVariant: string;
  copies: BundledContentVariantCopy[];
};

export type BundledContentVariantOptions = {
  browserSkillVariant?: string | null;
  computerUseSkillVariant?: string | null;
  pluginName: string;
};

export type ApplyBundledContentVariantOptions = BundledContentVariantOptions & {
  fileSystem?: BundledContentVariantFileSystem;
  pluginRoot: string;
};

export type BundledContentVariantFileSystem = Pick<
  typeof fs,
  "copyFile" | "readFile" | "writeFile"
>;

type JsonObject = Record<string, unknown>;

export function isBrowserSkillVariantPlugin(pluginName: string): boolean {
  return BROWSER_SKILL_VARIANT_DESTINATIONS.has(pluginName);
}

export function createBundledContentVariantPlan({
  browserSkillVariant,
  computerUseSkillVariant,
  pluginName,
}: BundledContentVariantOptions): BundledContentVariantPlan | null {
  const browserSkillDestination =
    BROWSER_SKILL_VARIANT_DESTINATIONS.get(pluginName);

  if (browserSkillDestination != null) {
    if (browserSkillVariant == null) return null;
    return {
      bundledContentVariant: browserSkillVariant,
      copies:
        browserSkillVariant === "unified"
          ? [
              {
                destination: browserSkillDestination,
                source: UNIFIED_BROWSER_SKILL_SOURCE_PATH,
              },
            ]
          : [],
    };
  }

  if (pluginName !== COMPUTER_USE_PLUGIN_NAME) return null;
  if (computerUseSkillVariant == null) return null;

  return {
    bundledContentVariant: computerUseSkillVariant,
    copies:
      computerUseSkillVariant === "node-repl"
        ? [
            {
              destination: COMPUTER_USE_SKILL_DESTINATION_PATH,
              source: COMPUTER_USE_NODE_REPL_SKILL_SOURCE_PATH,
            },
          ]
        : [],
  };
}

export async function applyBundledContentVariant({
  fileSystem = fs,
  pluginRoot,
  ...options
}: ApplyBundledContentVariantOptions): Promise<void> {
  const plan = createBundledContentVariantPlan(options);
  if (plan == null) return;

  await Promise.all(
    plan.copies.map((copy) =>
      fileSystem.copyFile(
        join(pluginRoot, ...copy.source),
        join(pluginRoot, ...copy.destination),
      ),
    ),
  );

  const manifestPath = join(pluginRoot, ".codex-plugin", "plugin.json");
  const manifest = parsePluginManifestJson(
    await fileSystem.readFile(manifestPath, "utf8"),
  );
  await fileSystem.writeFile(
    manifestPath,
    `${JSON.stringify(
      { ...manifest, bundledContentVariant: plan.bundledContentVariant },
      null,
      2,
    )}\n`,
    "utf8",
  );
}

function parsePluginManifestJson(rawManifest: string): JsonObject {
  const manifest = JSON.parse(rawManifest);
  if (
    typeof manifest !== "object" ||
    manifest == null ||
    Array.isArray(manifest)
  ) {
    throw Error("Expected plugin manifest to be a JSON object");
  }
  return manifest as JsonObject;
}
