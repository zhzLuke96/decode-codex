// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Browser/Computer Use thread config for node_repl.

import { createComputerUseServiceEnvironment } from "../../computer-use-native-pipe/env";
import {
  BROWSER_USE_AVAILABLE_BACKENDS_ENV,
  BROWSER_USE_CODEX_APP_BUILD_FLAVOR_ENV,
  BROWSER_USE_CODEX_APP_VERSION_ENV,
  BROWSER_USE_ENV_PASSTHROUGH,
  BROWSER_USE_IN_APP_INSTRUCTIONS,
  CHROME_BROWSER_USE_INSTRUCTIONS,
  COMPUTER_USE_MAC_MCP_CONFIG,
  COMPUTER_USE_NODE_REPL_INSTRUCTIONS,
  DEV_ONLY_ENV_PASSTHROUGH,
  NODE_REPL_DISABLED_JS_REPL_CONFIG,
  NODE_REPL_HOST_SERVICES_PIPE_PATH_ENV,
  NODE_REPL_INSTRUCTIONS_USE_CASE_BROWSER_ENV,
  NODE_REPL_INSTRUCTIONS_USE_CASE_CHROME_ENV,
  NODE_REPL_INSTRUCTIONS_USE_CASE_COMPUTER_USE_ENV,
  NODE_REPL_REQUEST_META_ENV,
  NODE_REPL_TRUST_ALL_CODE_ENV,
  NODE_REPL_UNTRUSTED_ENV_ALLOWLIST_ENV,
} from "../constants";
import type {
  ComputerUseServicePaths,
  DesktopFeatureAvailability,
  NodeReplRuntimePaths,
  NodeReplThreadConfig,
} from "../types";
import {
  createNodeReplMcpServerConfig,
  joinNodeModuleDirs,
  mergeThreadConfigs,
} from "./node-repl-config";

export function createBrowserUseThreadConfig({
  appVersion,
  availableBrowserUseBackends,
  buildFlavor,
  codexHome,
  computerUse,
  computerUseNativePipePath,
  computerUsePaths = { serviceAppPath: null },
  convertToWslPath = identityPath,
  env = process.env,
  hostServicesPipePath = env[NODE_REPL_HOST_SERVICES_PIPE_PATH_ENV]?.trim() ||
    null,
  isDevBuild = buildFlavor === "dev",
  isInternalBuild,
  runtimePaths,
  sentryUserId,
  shouldUseWslPaths,
  trustAllCode,
  trustedBrowserClientSha256s = [],
}: {
  appVersion: string;
  availableBrowserUseBackends: readonly ("chrome" | "iab")[];
  buildFlavor: string;
  codexHome: string;
  computerUse: boolean;
  computerUseNativePipePath?: string | null;
  computerUsePaths?: ComputerUseServicePaths;
  convertToWslPath?: (filePath: string) => string;
  env?: NodeJS.ProcessEnv;
  hostServicesPipePath?: string | null;
  isDevBuild?: boolean;
  isInternalBuild: boolean;
  runtimePaths: NodeReplRuntimePaths;
  sentryUserId?: string | null;
  shouldUseWslPaths: boolean;
  trustAllCode?: string;
  trustedBrowserClientSha256s?: readonly string[];
}): NodeReplThreadConfig | null {
  if (runtimePaths.nodeReplPath == null) return null;
  if (runtimePaths.nodePath == null) return null;

  const extraEnv = createBrowserUseNodeReplExtraEnv({
    appVersion,
    availableBrowserUseBackends,
    buildFlavor,
    computerUse,
    computerUseNativePipePath,
    computerUsePaths,
    env,
    hostServicesPipePath,
    isDevBuild,
    platform: runtimePaths.platform,
  });

  return createNodeReplMcpServerConfig({
    codexCliPath: runtimePaths.codexCliPath,
    codexHome,
    extraEnv,
    nodeModuleDirs: joinNodeModuleDirs(
      runtimePaths.nodeModuleDirs,
      runtimePaths.platform,
    ),
    nodePath: runtimePaths.nodePath,
    nodeReplPath: shouldUseWslPaths
      ? convertToWslPath(runtimePaths.nodeReplPath)
      : runtimePaths.nodeReplPath,
    platform: runtimePaths.platform,
    requestMeta: isDevBuild ? env[NODE_REPL_REQUEST_META_ENV] : undefined,
    sentryUserId,
    shouldUseWslPaths,
    traceMeta: isInternalBuild || env.NODE_REPL_TRACE_META === "1",
    trustAllCode: isDevBuild
      ? (trustAllCode ?? env[NODE_REPL_TRUST_ALL_CODE_ENV])
      : undefined,
    trustedBrowserClientSha256s,
  });
}

export function createCombinedBrowserUseThreadConfig({
  appVersion,
  buildFlavor,
  codexHome,
  computerUseNativePipePath = null,
  computerUsePaths,
  convertToWslPath = identityPath,
  desktopFeatureAvailability,
  env = process.env,
  hostServicesPipePath,
  isInternalBuild,
  runtimePaths,
  sentryUserId,
  shouldUseWslPaths,
  trustedBrowserClientSha256s,
}: {
  appVersion: string;
  buildFlavor: string;
  codexHome: string;
  computerUseNativePipePath?: string | null;
  computerUsePaths?: ComputerUseServicePaths;
  convertToWslPath?: (filePath: string) => string;
  desktopFeatureAvailability: DesktopFeatureAvailability;
  env?: NodeJS.ProcessEnv;
  hostServicesPipePath?: string | null;
  isInternalBuild: boolean;
  runtimePaths: NodeReplRuntimePaths;
  sentryUserId?: string | null;
  shouldUseWslPaths: boolean;
  trustedBrowserClientSha256s?: readonly string[];
}): NodeReplThreadConfig | null {
  const browserUseEnabled =
    desktopFeatureAvailability.inAppBrowserUse === true ||
    desktopFeatureAvailability.externalBrowserUse === true;
  const computerUseEnabled =
    desktopFeatureAvailability.computerUse === true &&
    desktopFeatureAvailability.computerUseNodeRepl === true;
  if (!browserUseEnabled && !computerUseEnabled) return null;

  const trustedClientHashes =
    browserUseEnabled ||
    (computerUseEnabled &&
      (runtimePaths.platform === "darwin" || computerUseNativePipePath != null))
      ? (trustedBrowserClientSha256s ?? [])
      : [];
  const nodeReplConfig = createBrowserUseThreadConfig({
    appVersion,
    availableBrowserUseBackends: getAvailableBrowserUseBackends(
      desktopFeatureAvailability,
    ),
    buildFlavor,
    codexHome,
    computerUse: computerUseEnabled,
    computerUseNativePipePath,
    computerUsePaths:
      computerUseEnabled && runtimePaths.platform === "darwin"
        ? (computerUsePaths ?? { serviceAppPath: null })
        : { serviceAppPath: null },
    convertToWslPath,
    env,
    hostServicesPipePath,
    isInternalBuild,
    runtimePaths,
    sentryUserId,
    shouldUseWslPaths,
    trustedBrowserClientSha256s: trustedClientHashes,
  });
  return mergeThreadConfigs([
    NODE_REPL_DISABLED_JS_REPL_CONFIG,
    nodeReplConfig,
    computerUseEnabled && runtimePaths.platform === "darwin"
      ? COMPUTER_USE_MAC_MCP_CONFIG
      : null,
  ]);
}

export function getAvailableBrowserUseBackends(
  desktopFeatureAvailability: DesktopFeatureAvailability,
): ("chrome" | "iab")[] {
  const backends: ("chrome" | "iab")[] = [];
  if (desktopFeatureAvailability.externalBrowserUse) backends.push("chrome");
  if (desktopFeatureAvailability.inAppBrowserUse) backends.push("iab");
  return backends;
}

function createBrowserUseNodeReplExtraEnv({
  appVersion,
  availableBrowserUseBackends,
  buildFlavor,
  computerUse,
  computerUseNativePipePath,
  computerUsePaths,
  env,
  hostServicesPipePath,
  isDevBuild,
  platform,
}: {
  appVersion: string;
  availableBrowserUseBackends: readonly ("chrome" | "iab")[];
  buildFlavor: string;
  computerUse: boolean;
  computerUseNativePipePath?: string | null;
  computerUsePaths: ComputerUseServicePaths;
  env: NodeJS.ProcessEnv;
  hostServicesPipePath?: string | null;
  isDevBuild: boolean;
  platform: string;
}): Record<string, string | null | undefined> {
  const untrustedEnvAllowlist =
    env[NODE_REPL_UNTRUSTED_ENV_ALLOWLIST_ENV]?.trim();
  return {
    [BROWSER_USE_AVAILABLE_BACKENDS_ENV]: availableBrowserUseBackends.join(","),
    ...(availableBrowserUseBackends.includes("iab")
      ? {
          [NODE_REPL_INSTRUCTIONS_USE_CASE_BROWSER_ENV]:
            BROWSER_USE_IN_APP_INSTRUCTIONS,
        }
      : {}),
    ...(availableBrowserUseBackends.includes("chrome")
      ? {
          [NODE_REPL_INSTRUCTIONS_USE_CASE_CHROME_ENV]:
            CHROME_BROWSER_USE_INSTRUCTIONS,
        }
      : {}),
    ...(computerUse && platform === "darwin"
      ? {
          [NODE_REPL_INSTRUCTIONS_USE_CASE_COMPUTER_USE_ENV]:
            COMPUTER_USE_NODE_REPL_INSTRUCTIONS,
        }
      : {}),
    [BROWSER_USE_CODEX_APP_BUILD_FLAVOR_ENV]: buildFlavor,
    [BROWSER_USE_CODEX_APP_VERSION_ENV]: appVersion,
    ...copyEnvironmentValues(env, BROWSER_USE_ENV_PASSTHROUGH),
    ...(isDevBuild ? copyEnvironmentValues(env, DEV_ONLY_ENV_PASSTHROUGH) : {}),
    ...(untrustedEnvAllowlist
      ? { [NODE_REPL_UNTRUSTED_ENV_ALLOWLIST_ENV]: untrustedEnvAllowlist }
      : {}),
    ...(computerUse
      ? createComputerUseServiceEnvironment({
          nativePipeDirectory: computerUseNativePipePath,
          nativePipeEnabled: computerUseNativePipePath != null,
          serviceAppPath:
            platform === "darwin" ? computerUsePaths.serviceAppPath : null,
        })
      : {}),
    ...(computerUse && platform === "darwin" && hostServicesPipePath != null
      ? { [NODE_REPL_HOST_SERVICES_PIPE_PATH_ENV]: hostServicesPipePath }
      : {}),
  };
}

function copyEnvironmentValues(
  env: NodeJS.ProcessEnv,
  keys: readonly string[],
): Record<string, string> {
  const copied: Record<string, string> = {};
  for (const key of keys) {
    const value = env[key];
    if (value != null) copied[key] = value;
  }
  return copied;
}

function identityPath(filePath: string): string {
  return filePath;
}
