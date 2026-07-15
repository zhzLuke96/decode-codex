// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// Selection resolution for workspace-scoped local environments.

import { normalizeFilesystemPath } from "../../boundaries/rpc.facade";
import {
  buildLocalEnvironmentWorkspaceKey,
  getLocalEnvironmentFilename,
} from "./paths";
import type {
  LocalEnvironment,
  LocalEnvironmentSelectionSummary,
  ResolveLocalEnvironmentSelectionOptions,
  ResolvedLocalEnvironmentSelection,
} from "./types";
export function selectDefaultLocalEnvironment(
  environments: LocalEnvironment[],
): LocalEnvironment | null {
  return (
    environments.find(
      (environment) =>
        getLocalEnvironmentFilename(environment.configPath) ===
          "environment.toml" && environment.type === "success",
    ) ??
    environments.find((environment) => environment.type === "success") ??
    environments[0] ??
    null
  );
}
export function getDefaultLocalEnvironmentConfigPath(
  environments: LocalEnvironment[],
): string | null {
  return selectDefaultLocalEnvironment(environments)?.configPath ?? null;
}
function getLocalEnvironmentSelectionSummary(
  environments: LocalEnvironment[],
): LocalEnvironmentSelectionSummary {
  const defaultEnvironment = selectDefaultLocalEnvironment(environments);
  const defaultConfigPath = defaultEnvironment?.configPath ?? null;
  const defaultEnvironmentNormalized =
    defaultConfigPath == null
      ? null
      : normalizeFilesystemPath(defaultConfigPath);
  return {
    defaultEnvironment,
    defaultEnvironmentNormalized,
    availableEnvironments:
      defaultEnvironmentNormalized == null
        ? environments
        : environments.filter(
            (environment) =>
              normalizeFilesystemPath(environment.configPath) !==
              defaultEnvironmentNormalized,
          ),
  };
}
export function resolveLocalEnvironmentSelection({
  canValidateSelection,
  environments,
  hostId,
  selectionsByWorkspace,
  workspaceRoot,
}: ResolveLocalEnvironmentSelectionOptions): ResolvedLocalEnvironmentSelection {
  const workspaceKey = buildLocalEnvironmentWorkspaceKey(workspaceRoot, hostId);
  const {
    defaultEnvironment,
    defaultEnvironmentNormalized,
    availableEnvironments,
  } = getLocalEnvironmentSelectionSummary(environments);
  const defaultConfigPath = defaultEnvironment?.configPath ?? null;
  const hasStoredSelection =
    workspaceKey != null &&
    Object.prototype.hasOwnProperty.call(selectionsByWorkspace, workspaceKey);
  const storedSelection =
    workspaceKey != null && hasStoredSelection
      ? (selectionsByWorkspace[workspaceKey] ?? null)
      : null;
  const storedSelectionNormalized =
    storedSelection == null ? null : normalizeFilesystemPath(storedSelection);
  const storedSelectionStillExists =
    canValidateSelection &&
    storedSelectionNormalized != null &&
    environments.some(
      (environment) =>
        normalizeFilesystemPath(environment.configPath) ===
        storedSelectionNormalized,
    );
  let resolvedConfigPath = hasStoredSelection ? storedSelection : null;
  if (
    canValidateSelection &&
    hasStoredSelection &&
    storedSelection != null &&
    !storedSelectionStillExists
  ) {
    resolvedConfigPath = defaultConfigPath;
  }
  return {
    workspaceKey,
    defaultEnvironment,
    defaultEnvironmentNormalized,
    availableEnvironments,
    resolvedConfigPath,
    normalizedResolvedConfigPath:
      resolvedConfigPath == null
        ? null
        : normalizeFilesystemPath(resolvedConfigPath),
  };
}
