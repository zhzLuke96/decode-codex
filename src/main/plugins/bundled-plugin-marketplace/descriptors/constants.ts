// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Constants and build-flavor gates for bundled plugin descriptors.

import type { BuildFlavorValue, EnvironmentLike } from "./types";

export const CODEX_USE_INTERNAL_CHROME_PLUGIN_ENV =
  "CODEX_USE_INTERNAL_CHROME_PLUGIN";

export const SITE_CREATOR_PLUGIN_NAME = "sites";
export const RECORD_AND_REPLAY_PLUGIN_NAME = "record-and-replay";
export const LATEX_PLUGIN_NAME = "latex";

export const SITE_CREATOR_AUTO_INSTALL_DISABLED_KEY =
  "site-creator-bundled-plugin-auto-install-disabled";
export const BROWSER_USE_AUTO_INSTALL_DISABLED_KEY =
  "browser-use-bundled-plugin-auto-install-disabled";
export const COMPUTER_USE_AUTO_INSTALL_DISABLED_KEY =
  "computer-use-bundled-plugin-auto-install-disabled";

const AUTO_INSTALL_DISABLED_KEYS = new Map<string, string>([
  [SITE_CREATOR_PLUGIN_NAME, SITE_CREATOR_AUTO_INSTALL_DISABLED_KEY],
  ["browser", BROWSER_USE_AUTO_INSTALL_DISABLED_KEY],
  ["computer-use", COMPUTER_USE_AUTO_INSTALL_DISABLED_KEY],
]);

export function isInternalChromePluginEnvEnabled({
  env,
}: {
  env?: EnvironmentLike;
} = {}): boolean {
  return env?.[CODEX_USE_INTERNAL_CHROME_PLUGIN_ENV] === "1";
}

export function shouldUseChromeDevPlugin({
  buildFlavor,
  env = process.env,
}: {
  buildFlavor: BuildFlavorValue;
  env?: EnvironmentLike;
}): boolean {
  return buildFlavor === "dev" && !isInternalChromePluginEnvEnabled({ env });
}

export function shouldUseChromeInternalPlugin({
  buildFlavor,
  env = process.env,
}: {
  buildFlavor: BuildFlavorValue;
  env?: EnvironmentLike;
}): boolean {
  switch (buildFlavor) {
    case "dev":
      return isInternalChromePluginEnvEnabled({ env });
    case "internal-alpha":
    case "nightly":
      return true;
    case "agent":
    case "prod":
    case "public-beta":
      return false;
    default:
      return false;
  }
}

export function shouldUsePublicChromePlugin(
  buildFlavor: BuildFlavorValue,
): boolean {
  return buildFlavor === "public-beta" || buildFlavor === "prod";
}

export function getBundledPluginAutoInstallOptOutKey(
  pluginName: string,
): string | undefined {
  return AUTO_INSTALL_DISABLED_KEYS.get(pluginName);
}
