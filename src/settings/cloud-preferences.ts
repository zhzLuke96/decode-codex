// Restored from ref/webview/assets/cloud-preferences-DDzA-ZMw.js
// Updated with exports from ref/webview/assets/cloud-preferences-B7VkZ8HI.js.

import {
  _vscodeApiS as useVscodeMutation,
  vscodeApiA as useVscodeQueryClient,
  vscodeApiU,
  vscodeApiV as useVscodeQuery,
} from "../boundaries/vscode-api";
import { codexRequest } from "../runtime/request";
type CloudPreferencePatternVariable = {
  char_count: number;
  example: string;
  value: string;
};
const CLOUD_USER_PREFERENCES_QUERY_KEY = ["cloud-user-preferences"];
const CLOUD_PREFERENCES_CONFIG_QUERY_KEY = ["cloud-preferences-config"];
function useCloudUserPreferences() {
  return useVscodeQuery({
    queryKey: CLOUD_USER_PREFERENCES_QUERY_KEY,
    queryFn: fetchCloudUserPreferences,
    retry: false,
    staleTime: vscodeApiU.FIVE_MINUTES,
  });
}
function fetchCloudUserPreferences() {
  return codexRequest.safeGet("/wham/settings/user");
}
function useCloudPreferencesConfig() {
  return useVscodeQuery({
    queryKey: CLOUD_PREFERENCES_CONFIG_QUERY_KEY,
    queryFn: fetchCloudPreferencesConfig,
    retry: false,
    staleTime: vscodeApiU.FIVE_MINUTES,
  });
}
function fetchCloudPreferencesConfig() {
  return codexRequest.safeGet("/wham/settings/configs/user-preferences");
}
function useUpdateCloudUserPreferences() {
  const queryClient = useVscodeQueryClient();
  return useVscodeMutation({
    mutationFn: updateCloudUserPreferences,
    onSuccess: (preferences) => {
      queryClient.setQueryData(CLOUD_USER_PREFERENCES_QUERY_KEY, preferences);
    },
  });
}
function updateCloudUserPreferences(preferences: unknown) {
  return codexRequest.safePatch("/wham/settings/user", {
    requestBody: preferences,
  });
}
function validateCloudPathPattern(
  pattern: string,
  maxLength: number,
  variables: CloudPreferencePatternVariable[],
) {
  const openingBraceCount = (pattern.match(/{/g) ?? []).length;
  if (openingBraceCount !== (pattern.match(/}/g) ?? []).length) {
    return "bracket-mismatch";
  }
  if (openingBraceCount === 0) return "missing-pattern";
  const variableValues = variables.map((variable) => variable.value);
  if (
    (pattern.match(/{([^}]+)}/g) ?? []).some(
      (match) => !variableValues.includes(match),
    )
  ) {
    return "invalid-pattern";
  }
  const resolvedPattern = replaceCloudPathPatternVariables(
    pattern,
    variables,
    (variable) => "x".repeat(variable.char_count),
  );
  return resolvedPattern.length > maxLength
    ? "too-long"
    : resolvedPattern.startsWith("/")
      ? "leading-slash"
      : /^[a-zA-Z0-9./\-_]+$/.test(resolvedPattern)
        ? null
        : "invalid-characters";
}
function renderCloudPathPatternExample(
  pattern: string,
  variables: CloudPreferencePatternVariable[],
) {
  return replaceCloudPathPatternVariables(
    pattern,
    variables,
    (variable) => variable.example,
  );
}
function replaceCloudPathPatternVariables(
  pattern: string,
  variables: CloudPreferencePatternVariable[],
  getReplacement: (variable: CloudPreferencePatternVariable) => string,
) {
  let resolvedPattern = pattern;
  for (const variable of variables) {
    resolvedPattern = resolvedPattern.replaceAll(
      variable.value,
      getReplacement(variable),
    );
  }
  return resolvedPattern;
}
function initCloudPreferencesChunk(): void {}
export {
  useUpdateCloudUserPreferences,
  useCloudUserPreferences,
  validateCloudPathPattern,
  useCloudPreferencesConfig,
  renderCloudPathPatternExample,
  initCloudPreferencesChunk,
};
