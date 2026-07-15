// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Skill content variant selection for bundled plugins.

import {
  COMPUTER_USE_PLUGIN_NAME,
  isBrowserSkillVariantPlugin,
} from "../content-variants";
import type { BundledPluginAvailabilityFeatures } from "./types";

export function resolveBrowserSkillVariant({
  desktopFeatureAvailability,
  marketplacePluginNames,
}: {
  desktopFeatureAvailability: BundledPluginAvailabilityFeatures;
  marketplacePluginNames: readonly string[];
}): "backend-specific" | "unified" | undefined {
  if (!marketplacePluginNames.some(isBrowserSkillVariantPlugin)) {
    return undefined;
  }
  return desktopFeatureAvailability.multiBrowserTabs
    ? "unified"
    : "backend-specific";
}

export function resolveComputerUseSkillVariant({
  desktopFeatureAvailability,
  marketplacePluginNames,
  platform,
}: {
  desktopFeatureAvailability: BundledPluginAvailabilityFeatures;
  marketplacePluginNames: readonly string[];
  platform: NodeJS.Platform | string;
}): "legacy-mcp" | "node-repl" | undefined {
  if (platform !== "darwin") return undefined;
  if (!marketplacePluginNames.includes(COMPUTER_USE_PLUGIN_NAME)) {
    return undefined;
  }
  return desktopFeatureAvailability.computerUseNodeRepl
    ? "node-repl"
    : "legacy-mcp";
}
