// Restored from ref/webview/assets/use-environment-Bbzll0Wt.js

import { useAtomValue } from "jotai/react";
import { persistedAtom } from "./persisted-atom";
type EnvironmentState = {
  repos?: string[];
  repo_map?: Record<string, unknown>;
  [key: string]: unknown;
};
const environmentAtom = persistedAtom<EnvironmentState | null>(
  "environment",
  null,
);
function useEnvironment() {
  return useAtomValue(environmentAtom);
}
function getEnvironmentPrimaryRepo(
  environment: EnvironmentState | null | undefined,
) {
  return Array.isArray(environment?.repos) ? environment.repos[0] : undefined;
}
function getEnvironmentPrimaryRepoMetadata(
  environment: EnvironmentState | null | undefined,
) {
  if (environment == null) return null;
  const repo = getEnvironmentPrimaryRepo(environment);
  return repo == null ? null : ((environment.repo_map ?? {})[repo] ?? null);
}
export {
  useEnvironment,
  getEnvironmentPrimaryRepoMetadata,
  getEnvironmentPrimaryRepo,
  environmentAtom,
};
