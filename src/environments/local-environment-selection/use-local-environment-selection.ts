// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// React hook for reading and updating the active local environment selection.

import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";
import { _vscodeApiO as useVscodeQuery } from "../../boundaries/vscode-api";
import { buildLocalEnvironmentWorkspaceKey } from "./paths";
import { resolveLocalEnvironmentSelection } from "./selection";
import { localEnvironmentSelectionsByWorkspaceAtom } from "./state";
import type {
  LocalEnvironment,
  LocalEnvironmentSelectionsByWorkspace,
  UseLocalEnvironmentSelectionOptions,
  UseLocalEnvironmentSelectionResult,
} from "./types";
type LocalEnvironmentsResponse = {
  environments: LocalEnvironment[];
};
type LocalEnvironmentsQueryResult = {
  data?: LocalEnvironment[] | null;
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
};
function selectLocalEnvironments(
  response: LocalEnvironmentsResponse,
): LocalEnvironment[] {
  return response.environments;
}
function updateLocalEnvironmentSelection({
  selectionsByWorkspace,
  setSelectionsByWorkspace,
  hostId,
  workspaceRoot,
  configPath,
}: {
  selectionsByWorkspace: LocalEnvironmentSelectionsByWorkspace;
  setSelectionsByWorkspace: (
    selectionsByWorkspace: LocalEnvironmentSelectionsByWorkspace,
  ) => void;
  hostId: string;
  workspaceRoot?: string | null;
  configPath: string | null;
}): void {
  const workspaceKey = buildLocalEnvironmentWorkspaceKey(workspaceRoot, hostId);
  if (workspaceKey == null) {
    return;
  }
  setSelectionsByWorkspace({
    ...selectionsByWorkspace,
    [workspaceKey]: configPath,
  });
}
export function useLocalEnvironmentSelection({
  hostId,
  workspaceRoot,
}: UseLocalEnvironmentSelectionOptions): UseLocalEnvironmentSelectionResult {
  const [selectionsByWorkspace, setSelectionsByWorkspace] = useAtom(
    localEnvironmentSelectionsByWorkspaceAtom,
  );
  const workspaceKey = useMemo(
    () => buildLocalEnvironmentWorkspaceKey(workspaceRoot, hostId),
    [hostId, workspaceRoot],
  );
  const queryWorkspaceRoot = workspaceRoot ?? "";
  const queryParams = useMemo(
    () => ({
      hostId,
      workspaceRoot: queryWorkspaceRoot,
    }),
    [hostId, queryWorkspaceRoot],
  );
  const queryConfig = useMemo(
    () => ({
      enabled: workspaceKey != null,
    }),
    [workspaceKey],
  );
  const queryOptions = useMemo(
    () => ({
      params: queryParams,
      queryConfig,
      select: selectLocalEnvironments,
    }),
    [queryConfig, queryParams],
  );
  const { data, isLoading, isFetching, error } = useVscodeQuery(
    "local-environments",
    queryOptions,
  ) as LocalEnvironmentsQueryResult;
  const environments = useMemo(() => data ?? [], [data]);
  const selection = useMemo(
    () =>
      resolveLocalEnvironmentSelection({
        canValidateSelection: !isLoading && !isFetching && error == null,
        environments,
        hostId,
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
      updateLocalEnvironmentSelection({
        selectionsByWorkspace,
        setSelectionsByWorkspace,
        hostId,
        workspaceRoot,
        configPath,
      });
    },
    [hostId, selectionsByWorkspace, setSelectionsByWorkspace, workspaceRoot],
  );
  return useMemo(
    () => ({
      workspaceKey: selection.workspaceKey,
      environments,
      isLoading,
      isFetching,
      error,
      defaultEnvironment: selection.defaultEnvironment,
      defaultEnvironmentNormalized: selection.defaultEnvironmentNormalized,
      availableEnvironments: selection.availableEnvironments,
      resolvedConfigPath: selection.resolvedConfigPath,
      normalizedResolvedConfigPath: selection.normalizedResolvedConfigPath,
      updateSelection,
    }),
    [
      environments,
      error,
      isFetching,
      isLoading,
      selection.availableEnvironments,
      selection.defaultEnvironment,
      selection.defaultEnvironmentNormalized,
      selection.normalizedResolvedConfigPath,
      selection.resolvedConfigPath,
      selection.workspaceKey,
      updateSelection,
    ],
  );
}
