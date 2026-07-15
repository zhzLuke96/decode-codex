// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// Shared local environment selection types.

export type LocalEnvironment = {
  configPath: string;
  type: string;
  [key: string]: unknown;
};
export type LocalEnvironmentSelectionsByWorkspace = Record<
  string,
  string | null | undefined
>;
export type LocalEnvironmentSelectionSummary = {
  defaultEnvironment: LocalEnvironment | null;
  defaultEnvironmentNormalized: string | null;
  availableEnvironments: LocalEnvironment[];
};
export type ResolveLocalEnvironmentSelectionOptions = {
  canValidateSelection: boolean;
  environments: LocalEnvironment[];
  hostId: string;
  selectionsByWorkspace: LocalEnvironmentSelectionsByWorkspace;
  workspaceRoot?: string | null;
};
export type ResolvedLocalEnvironmentSelection =
  LocalEnvironmentSelectionSummary & {
    workspaceKey: string | null;
    resolvedConfigPath: string | null;
    normalizedResolvedConfigPath: string | null;
  };
export type UseLocalEnvironmentSelectionOptions = {
  hostId: string;
  workspaceRoot?: string | null;
};
export type UseLocalEnvironmentSelectionResult =
  ResolvedLocalEnvironmentSelection & {
    environments: LocalEnvironment[];
    isLoading: boolean;
    isFetching: boolean;
    error: unknown;
    updateSelection: (configPath: string | null) => void;
  };
export type GitMetadata = {
  commonDir: string;
  root: string;
};
export type AppScopeQuerySnapshot = {
  setData: (data: { value: string | null }) => void;
  invalidate: () => void;
};
export type AppScopeQueryStore = {
  query: {
    snapshot: (
      signal: unknown,
      params: Record<string, unknown>,
    ) => AppScopeQuerySnapshot;
  };
};
