// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Local-environment selection and default config-path helpers.
import { useCallback, useMemo, useState } from "react";
import {
  createSignalToken,
  type LocalEnvironmentConfig,
  type LocalEnvironmentSelectionResult,
  type LocalEnvironmentSelectionState,
} from "./types";

export const localEnvironmentSelectionsByWorkspaceSignal =
  createSignalToken<LocalEnvironmentSelectionState>(
    "local-env-selections-by-workspace",
    {},
  );

export function getDefaultEnvironmentConfigPath(
  environments: readonly LocalEnvironmentConfig[],
): string | null {
  return pickDefaultLocalEnvironment(environments)?.configPath ?? null;
}

export function getNextLocalEnvironmentConfigPath(
  environments: readonly LocalEnvironmentConfig[],
  workspaceRoot: string,
): string {
  const environmentDirectory = joinPath(
    normalizePath(workspaceRoot),
    ".codex/environments",
  );
  const usedPaths = new Set(
    environments.map((environment) => normalizePath(environment.configPath)),
  );
  const defaultPath = joinPath(environmentDirectory, "environment.toml");
  if (!usedPaths.has(normalizePath(defaultPath))) return defaultPath;
  let suffix = 2;
  for (;;) {
    const candidate = joinPath(
      environmentDirectory,
      `environment-${suffix}.toml`,
    );
    if (!usedPaths.has(normalizePath(candidate))) return candidate;
    suffix += 1;
  }
}

export function pickDefaultLocalEnvironment(
  environments: readonly LocalEnvironmentConfig[],
): LocalEnvironmentConfig | null {
  return (
    environments.find(
      (environment) =>
        getPathBasename(environment.configPath) === "environment.toml" &&
        environment.type === "success",
    ) ??
    environments.find((environment) => environment.type === "success") ??
    environments[0] ??
    null
  );
}

export function useLocalEnvironmentSelectionForWorkspace({
  environments,
  error,
  hostId,
  initialSelectionsByWorkspace,
  isFetching = false,
  isLoading = false,
  workspaceRoot,
}: {
  environments?: readonly LocalEnvironmentConfig[];
  error?: unknown;
  hostId: string | null | undefined;
  initialSelectionsByWorkspace?: LocalEnvironmentSelectionState;
  isFetching?: boolean;
  isLoading?: boolean;
  workspaceRoot: string | null | undefined;
}): LocalEnvironmentSelectionResult {
  const [selectionsByWorkspace, setSelectionsByWorkspace] =
    useState<LocalEnvironmentSelectionState>(
      initialSelectionsByWorkspace ?? {},
    );
  const workspaceKey = buildLocalEnvironmentWorkspaceKey(workspaceRoot, hostId);
  const resolvedSelection = useMemo(
    () =>
      resolveLocalEnvironmentSelection({
        canValidateSelection: !isLoading && !isFetching && error == null,
        environments: environments ?? [],
        hostId: hostId ?? "local",
        selectionsByWorkspace,
        workspaceRoot,
      }),
    [
      environments,
      error,
      hostId,
      isFetching,
      isLoading,
      selectionsByWorkspace,
      workspaceRoot,
    ],
  );
  const updateSelection = useCallback(
    (configPath: string | null) => {
      if (workspaceKey == null) return;
      setSelectionsByWorkspace((current) => ({
        ...current,
        [workspaceKey]: configPath,
      }));
    },
    [workspaceKey],
  );
  return {
    ...resolvedSelection,
    environments: environments ?? [],
    error,
    isFetching,
    isLoading,
    updateSelection,
  };
}

export function resolveLocalEnvironmentSelection({
  canValidateSelection,
  environments,
  hostId,
  selectionsByWorkspace,
  workspaceRoot,
}: {
  canValidateSelection: boolean;
  environments: readonly LocalEnvironmentConfig[];
  hostId: string;
  selectionsByWorkspace: LocalEnvironmentSelectionState;
  workspaceRoot: string | null | undefined;
}): Omit<
  LocalEnvironmentSelectionResult,
  "environments" | "error" | "isFetching" | "isLoading" | "updateSelection"
> {
  const workspaceKey = buildLocalEnvironmentWorkspaceKey(workspaceRoot, hostId);
  const defaultEnvironment = pickDefaultLocalEnvironment(environments);
  const defaultEnvironmentNormalized = defaultEnvironment
    ? normalizePath(defaultEnvironment.configPath)
    : null;
  const hasSavedSelection =
    workspaceKey != null &&
    Object.prototype.hasOwnProperty.call(selectionsByWorkspace, workspaceKey);
  const savedSelection =
    workspaceKey != null && hasSavedSelection
      ? (selectionsByWorkspace[workspaceKey] ?? null)
      : null;
  const normalizedSavedSelection = savedSelection
    ? normalizePath(savedSelection)
    : null;
  const savedSelectionIsValid =
    canValidateSelection &&
    normalizedSavedSelection != null &&
    environments.some(
      (environment) =>
        normalizePath(environment.configPath) === normalizedSavedSelection,
    );
  const resolvedConfigPath =
    canValidateSelection &&
    hasSavedSelection &&
    savedSelection != null &&
    !savedSelectionIsValid
      ? (defaultEnvironment?.configPath ?? null)
      : hasSavedSelection
        ? savedSelection
        : null;
  const normalizedResolvedConfigPath = resolvedConfigPath
    ? normalizePath(resolvedConfigPath)
    : null;
  return {
    availableEnvironments: defaultEnvironmentNormalized
      ? environments.filter(
          (environment) =>
            normalizePath(environment.configPath) !==
            defaultEnvironmentNormalized,
        )
      : environments,
    defaultEnvironment,
    defaultEnvironmentNormalized,
    normalizedResolvedConfigPath,
    resolvedConfigPath,
    workspaceKey,
  };
}

export function buildLocalEnvironmentWorkspaceKey(
  workspaceRoot: string | null | undefined,
  hostId: string | null | undefined,
): string | null {
  if (!workspaceRoot || workspaceRoot === "/") return null;
  return `${hostId ?? "local"}:${normalizePath(workspaceRoot)}`;
}

export function normalizeLocalEnvironmentPath(path: string): string {
  return normalizePath(path);
}

export function initLocalEnvironmentPathRuntimeChunk(): void {}

export function initLocalEnvironmentSelectionChunk(): void {}

function getPathBasename(path: string): string {
  const parts = normalizePath(path).split("/").filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

function normalizePath(path: string): string {
  return path.replaceAll("\\", "/").replace(/\/+/g, "/");
}

function joinPath(...parts: readonly string[]): string {
  return normalizePath(parts.filter(Boolean).join("/"));
}
