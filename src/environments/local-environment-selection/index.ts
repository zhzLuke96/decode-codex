// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// Public local environment selection API.

import { getNextLocalEnvironmentConfigPath } from "./paths";
import {
  getDefaultLocalEnvironmentConfigPath,
  resolveLocalEnvironmentSelection,
  selectDefaultLocalEnvironment,
} from "./selection";
import { localEnvironmentSelectionsByWorkspaceAtom } from "./state";
import { useLocalEnvironmentSelection } from "./use-local-environment-selection";
import { setWorktreeLocalEnvironmentConfigPath } from "./worktree-config";
export {
  getDefaultLocalEnvironmentConfigPath,
  useLocalEnvironmentSelection,
  resolveLocalEnvironmentSelection,
  selectDefaultLocalEnvironment,
  setWorktreeLocalEnvironmentConfigPath,
  getNextLocalEnvironmentConfigPath,
  localEnvironmentSelectionsByWorkspaceAtom,
};
export type {
  AppScopeQuerySnapshot,
  AppScopeQueryStore,
  GitMetadata,
  LocalEnvironment,
  LocalEnvironmentSelectionSummary,
  LocalEnvironmentSelectionsByWorkspace,
  ResolveLocalEnvironmentSelectionOptions,
  ResolvedLocalEnvironmentSelection,
  UseLocalEnvironmentSelectionOptions,
  UseLocalEnvironmentSelectionResult,
} from "./types";
