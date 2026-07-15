// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { existsSync, readFileSync } from "node:fs";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import { isRecord } from "../runtime/desktop-runtime-utils";
import {
  getDesktopSettingDefinition,
  getDesktopSettingDefinitions,
  isJsonConfigValue,
} from "./desktop-setting-definitions";
import {
  readLegacySettingValue,
  safeParseSettingValue,
} from "./desktop-settings-migration";
import { settingsLogger } from "./desktop-settings-store";
import { KeyValueStore } from "../workspace/desktop-runtime-types";
import { PERSISTED_ATOM_STATE_KEY } from "../workspace/desktop-state-keys";

export function loadDesktopConfigFromToml(
  filePath: string,
): Record<string, unknown> {
  if (!existsSync(filePath)) return {};
  try {
    const parseToml = sharedRuntime.parseTomlConfig as
      | ((text: string) => unknown)
      | undefined;
    if (typeof parseToml !== "function") return {};
    return sanitizeDesktopConfig(
      extractDesktopConfig(parseToml(readFileSync(filePath, "utf8"))),
    );
  } catch (error) {
    settingsLogger().warning(
      "Failed to load desktop settings from config.toml",
      {
        safe: {},
        sensitive: {
          error,
        },
      },
    );
    return {};
  }
}

export function readDesktopConfigFromAppServer(
  config: unknown,
): Record<string, unknown> {
  return sanitizeDesktopConfig(extractDesktopConfig(config));
}

function extractDesktopConfig(config: unknown): Record<string, unknown> {
  return isRecord(config) && isRecord(config.desktop) ? config.desktop : {};
}

function sanitizeDesktopConfig(
  config: Record<string, unknown>,
): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(config)) {
    if (!isJsonConfigValue(value)) {
      settingsLogger().warning("Dropping unsupported desktop config value", {
        safe: {
          key,
        },
        sensitive: {},
      });
      continue;
    }
    sanitized[key] = value;
  }
  return sanitized;
}

export function parseDesktopSettings(
  desktopConfig: Record<string, unknown>,
): Map<string, unknown> {
  const state = new Map<string, unknown>();
  for (const [key, rawValue] of Object.entries(desktopConfig)) {
    const definition = getDesktopSettingDefinition(key);
    if (definition == null) continue;
    const parsedValue = safeParseSettingValue(definition.key, rawValue, true);
    if (parsedValue.success) {
      state.set(definition.key, parsedValue.value);
      continue;
    }
    settingsLogger().warning("Dropping invalid desktop setting", {
      safe: {
        key,
      },
      sensitive: {},
    });
  }
  return state;
}

export function migrateLegacyDesktopSettings(
  state: Map<string, unknown>,
  pendingLegacyMigrations: Map<string, unknown>,
  globalState: KeyValueStore,
): void {
  const persistedAtoms = globalState.getStored?.(PERSISTED_ATOM_STATE_KEY);
  for (const definition of getDesktopSettingDefinitions()) {
    if (state.has(definition.key)) continue;
    const legacyValue = readLegacySettingValue(
      definition,
      globalState,
      persistedAtoms,
    );
    if (legacyValue === undefined) continue;
    const parsedValue = safeParseSettingValue(
      definition.key,
      legacyValue,
      false,
    );
    if (!parsedValue.success) {
      settingsLogger().warning("Dropping invalid migrated setting", {
        safe: {
          key: definition.key,
        },
        sensitive: {},
      });
      continue;
    }
    state.set(definition.key, parsedValue.value);
    pendingLegacyMigrations.set(definition.key, parsedValue.value);
  }
}
