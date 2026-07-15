// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { existsSync, readFileSync } from "node:fs";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import { runtimeLogger } from "../logging/scoped-runtime-logger";
import {
  isRecord,
  writeFileAtomically,
} from "../runtime/desktop-runtime-utils";
import { DesktopSettingDefinition } from "../workspace/desktop-runtime-types";

export function getDesktopSettingDefinitions(): DesktopSettingDefinition[] {
  const definitions = sharedRuntime.desktopSettingDefinitions as unknown;
  return Array.isArray(definitions)
    ? definitions.filter(isDesktopSettingDefinition)
    : [];
}

export function getDesktopSettingDefinition(
  key: string,
): DesktopSettingDefinition | null {
  const getDefinition = sharedRuntime.getDesktopSettingDefinition as
    | ((key: string) => unknown)
    | undefined;
  const definition = getDefinition?.(key);
  return isDesktopSettingDefinition(definition) ? definition : null;
}

export function getDesktopSettingSchema(key: string): unknown {
  const getSchema = sharedRuntime.getDesktopSettingSchema as
    | ((key: string) => unknown)
    | undefined;
  return getSchema?.(key) ?? getDesktopSettingDefinition(key)?.schema;
}

function isDesktopSettingDefinition(
  value: unknown,
): value is DesktopSettingDefinition {
  return (
    isRecord(value) &&
    typeof value.key === "string" &&
    isRecord(value.hostStorage) &&
    typeof value.hostStorage.kind === "string" &&
    typeof value.hostStorage.key === "string"
  );
}

export function isJsonConfigValue(value: unknown): boolean {
  if (
    value == null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return true;
  }
  if (Array.isArray(value)) return value.every(isJsonConfigValue);
  if (!isRecord(value)) return false;
  return Object.values(value).every(isJsonConfigValue);
}

export function loadGlobalStateMap(filePath: string): Map<string, unknown> {
  if (!existsSync(filePath)) return new Map();
  const primary = readGlobalStateMap(filePath);
  if (primary != null) return primary;
  const backup = readGlobalStateMap(`${filePath}.bak`);
  if (backup == null) return new Map();
  runtimeLogger().warning("Loaded global state from backup", {
    safe: {},
    sensitive: {},
  });
  return backup;
}

function readGlobalStateMap(filePath: string): Map<string, unknown> | null {
  if (!existsSync(filePath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));
    if (!isRecord(parsed))
      throw Error("Expected global state to be a JSON object");
    return new Map(Object.entries(parsed));
  } catch (error) {
    runtimeLogger().warning("Failed to load global state", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}

export function persistGlobalStateMap(
  filePath: string,
  state: Map<string, unknown>,
): void {
  try {
    const serialized = JSON.stringify(Object.fromEntries(state));
    writeFileAtomically(filePath, serialized);
    writeFileAtomically(`${filePath}.bak`, serialized);
  } catch (error) {
    runtimeLogger().warning("Failed to persist global state", {
      safe: {},
      sensitive: {
        error,
      },
    });
  }
}

export function getDefaultGlobalStateValue(key: string): unknown {
  const getDefault = sharedRuntime.getDefaultGlobalStateValue as
    | ((key: string) => unknown | null | undefined)
    | undefined;
  return getDefault?.(key) ?? null;
}

export function getDefaultDesktopSettingValue(key: string): unknown {
  const getSettingDefinition = sharedRuntime.getDesktopSettingDefinition as
    | ((key: string) =>
        | {
            default?: unknown;
          }
        | null
        | undefined)
    | undefined;
  return getSettingDefinition?.(key)?.default;
}
