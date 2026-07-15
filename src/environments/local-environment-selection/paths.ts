// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// Path helpers for local environment configuration files.

import {
  joinFilesystemPath,
  normalizeFilesystemPath,
} from "../../boundaries/rpc.facade";
import type { LocalEnvironment } from "./types";
const LOCAL_ENVIRONMENT_DIRECTORY = ".codex/environments";
const DEFAULT_LOCAL_ENVIRONMENT_FILENAME = "environment.toml";
export function getNextLocalEnvironmentConfigPath(
  environments: LocalEnvironment[],
  workspaceRoot: string,
): string {
  const environmentDirectory = joinFilesystemPath(
    normalizeFilesystemPath(workspaceRoot),
    LOCAL_ENVIRONMENT_DIRECTORY,
  );
  const existingConfigPaths = new Set(
    environments.map((environment) =>
      normalizeFilesystemPath(environment.configPath),
    ),
  );
  const defaultConfigPath = joinFilesystemPath(
    environmentDirectory,
    DEFAULT_LOCAL_ENVIRONMENT_FILENAME,
  );
  if (!existingConfigPaths.has(normalizeFilesystemPath(defaultConfigPath))) {
    return defaultConfigPath;
  }
  let suffix = 2;
  for (;;) {
    const configPath = joinFilesystemPath(
      environmentDirectory,
      `environment-${suffix}.toml`,
    );
    if (!existingConfigPaths.has(normalizeFilesystemPath(configPath))) {
      return configPath;
    }
    suffix += 1;
  }
}
export function getLocalEnvironmentFilename(configPath: string): string {
  const normalizedPath = normalizeFilesystemPath(configPath);
  const pathSegments = normalizedPath.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1] ?? normalizedPath;
}
export function buildLocalEnvironmentWorkspaceKey(
  workspaceRoot: string | null | undefined,
  hostId: string,
): string | null {
  if (!workspaceRoot || workspaceRoot === "/") {
    return null;
  }
  return `${hostId}:${normalizeFilesystemPath(workspaceRoot)}`;
}
