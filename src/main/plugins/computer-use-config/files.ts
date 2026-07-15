// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use overlay config path resolution and atomic file writes.

import { randomUUID } from "node:crypto";
import { mkdir, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  COMPUTER_USE_CONFIG_DIRECTORY,
  COMPUTER_USE_CONFIG_FILENAME,
} from "./constants";
import { createComputerUseConfig } from "./config";
import type {
  ComputerUseConfig,
  ComputerUseConfigFileSystem,
  ComputerUseConfigLogger,
  ComputerUseSettingsStore,
} from "./types";

const pendingWritesByConfigPath = new Map<string, Promise<string>>();

export async function writeComputerUseConfigFromSettings({
  appLocale,
  appPath,
  codexHome,
  isPackaged,
  repoRoot,
  settingsStore,
  shouldUseDarkColors,
}: {
  appLocale: string;
  appPath: string;
  codexHome: string;
  isPackaged: boolean;
  repoRoot: string;
  settingsStore: ComputerUseSettingsStore;
  shouldUseDarkColors: boolean;
}): Promise<string> {
  return writeComputerUseConfigFile({
    codexHome,
    config: createComputerUseConfig({
      locale: appLocale,
      localesDir: resolveComputerUseLocalesDirectory({
        appPath,
        isPackaged,
        repoRoot,
      }),
      settingsStore,
      shouldUseDarkColors,
    }),
  });
}

export function scheduleComputerUseConfigWrite({
  logger,
  ...options
}: Parameters<typeof writeComputerUseConfigFromSettings>[0] & {
  logger: ComputerUseConfigLogger;
}): void {
  writeComputerUseConfigFromSettings(options).catch((error) => {
    logger.warning("Failed to write Computer Use config", {
      safe: {},
      sensitive: { error },
    });
  });
}

export function resolveComputerUseLocalesDirectory({
  appPath,
  isPackaged,
  repoRoot,
}: {
  appPath: string;
  isPackaged: boolean;
  repoRoot: string;
}): string {
  return isPackaged
    ? path.join(appPath, "native-menu-locales")
    : path.join(repoRoot, "webview", "src", "locales");
}

export async function writeComputerUseConfigFile({
  codexHome,
  config,
  fileSystem = { mkdir, rename, unlink, writeFile },
}: {
  codexHome: string;
  config: ComputerUseConfig;
  fileSystem?: ComputerUseConfigFileSystem;
}): Promise<string> {
  const configDirectory = path.join(codexHome, COMPUTER_USE_CONFIG_DIRECTORY);
  const configPath = path.join(configDirectory, COMPUTER_USE_CONFIG_FILENAME);
  const pendingWrite = (
    pendingWritesByConfigPath.get(configPath) ?? Promise.resolve()
  )
    .catch(() => {})
    .then(() =>
      writeComputerUseConfigFileUnlocked({
        config,
        configDirectory,
        configPath,
        fileSystem,
      }),
    );
  pendingWritesByConfigPath.set(configPath, pendingWrite);
  try {
    return await pendingWrite;
  } finally {
    if (pendingWritesByConfigPath.get(configPath) === pendingWrite) {
      pendingWritesByConfigPath.delete(configPath);
    }
  }
}

async function writeComputerUseConfigFileUnlocked({
  config,
  configDirectory,
  configPath,
  fileSystem,
}: {
  config: ComputerUseConfig;
  configDirectory: string;
  configPath: string;
  fileSystem: ComputerUseConfigFileSystem;
}): Promise<string> {
  const temporaryPath = path.join(
    configDirectory,
    `${COMPUTER_USE_CONFIG_FILENAME}.${process.pid}.${Date.now()}.${randomUUID()}.tmp`,
  );
  await fileSystem.mkdir(configDirectory, { recursive: true });
  try {
    await fileSystem.writeFile(
      temporaryPath,
      `${JSON.stringify(config)}\n`,
      "utf8",
    );
    await fileSystem.rename(temporaryPath, configPath);
  } catch (error) {
    await fileSystem.unlink(temporaryPath).catch(() => {});
    throw error;
  }
  return configPath;
}
