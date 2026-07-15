// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use service app path and native pipe environment helpers.

import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { COMPUTER_USE_PLUGIN_NAME } from "../local-to-bundled-migration/constants";
import { selectBundledMarketplaces } from "../local-to-bundled-migration/marketplace";
import type { Marketplace } from "../local-to-bundled-migration/types";

export const CODEX_CLI_PATH_ENV = "CODEX_CLI_PATH";
export const COMPUTER_USE_SERVICE_PATH_ENV = "SKY_CUA_SERVICE_PATH";
export const COMPUTER_USE_NATIVE_PIPE_ENV = "SKY_CUA_NATIVE_PIPE";
export const COMPUTER_USE_NATIVE_PIPE_DIRECTORY_ENV =
  "SKY_CUA_NATIVE_PIPE_DIRECTORY";
export const COMPUTER_USE_APP_NAME = "Codex Computer Use.app";
export const DEFAULT_COMPUTER_USE_NATIVE_PIPE_PATH = `\\\\.\\pipe\\codex-computer-use-${randomUUID()}`;

export function createComputerUseServiceEnvironment({
  nativePipeDirectory = DEFAULT_COMPUTER_USE_NATIVE_PIPE_PATH,
  nativePipeEnabled = false,
  serviceAppPath,
}: {
  nativePipeDirectory?: string;
  nativePipeEnabled?: boolean;
  serviceAppPath?: string | null;
} = {}): Record<string, string> {
  return {
    ...(serviceAppPath == null
      ? {}
      : { [COMPUTER_USE_SERVICE_PATH_ENV]: serviceAppPath }),
    ...(nativePipeEnabled
      ? {
          [COMPUTER_USE_NATIVE_PIPE_ENV]: "1",
          [COMPUTER_USE_NATIVE_PIPE_DIRECTORY_ENV]: nativePipeDirectory,
        }
      : {}),
  };
}

export function resolveComputerUseServiceAppPath({
  env = process.env,
  installedPluginServiceAppPath,
  pathExists = existsSync,
}: {
  env?: NodeJS.ProcessEnv;
  installedPluginServiceAppPath?: string | null;
  pathExists?: (path: string) => boolean;
}): string | null {
  const explicitServicePath = env[COMPUTER_USE_SERVICE_PATH_ENV]?.trim();
  if (explicitServicePath) return explicitServicePath;
  const bundledServicePath = installedPluginServiceAppPath?.trim();
  return bundledServicePath && pathExists(bundledServicePath)
    ? bundledServicePath
    : null;
}

export function resolveComputerUseInstalledPluginEnvironment({
  env = process.env,
  installedPluginRoot,
  pathExists = existsSync,
}: {
  env?: NodeJS.ProcessEnv;
  installedPluginRoot?: string | null;
  pathExists?: (path: string) => boolean;
} = {}): { serviceAppPath: string | null } {
  const root = installedPluginRoot?.trim() || null;
  return {
    serviceAppPath: resolveComputerUseServiceAppPath({
      env,
      installedPluginServiceAppPath:
        root == null ? null : path.join(root, COMPUTER_USE_APP_NAME),
      pathExists,
    }),
  };
}

export function resolveInstalledComputerUsePluginEnvironment({
  codexHome,
  env = process.env,
  marketplaceName,
  marketplaces,
  pathExists = existsSync,
  resolveInstalledPluginRoot,
}: {
  codexHome: string;
  env?: NodeJS.ProcessEnv;
  marketplaceName: string;
  marketplaces: Marketplace[];
  pathExists?: (path: string) => boolean;
  resolveInstalledPluginRoot(options: {
    codexHome: string;
    localVersion?: unknown;
    marketplaceName: string;
    pluginName: string;
  }): string;
}): { serviceAppPath: string | null } {
  for (const marketplace of selectBundledMarketplaces({
    marketplaceName,
    marketplaces,
  })) {
    const plugin = marketplace.plugins.find(
      (candidate) =>
        candidate.name === COMPUTER_USE_PLUGIN_NAME &&
        candidate.installed === true &&
        candidate.source?.type === "local" &&
        (candidate as { enabled?: boolean }).enabled === true,
    );
    if (plugin?.source?.type === "local") {
      return resolveComputerUseInstalledPluginEnvironment({
        env,
        installedPluginRoot: resolveInstalledPluginRoot({
          codexHome,
          localVersion: (plugin as { localVersion?: unknown }).localVersion,
          marketplaceName: marketplace.name,
          pluginName: plugin.name,
        }),
        pathExists,
      });
    }
  }
  return resolveComputerUseInstalledPluginEnvironment({ env, pathExists });
}
