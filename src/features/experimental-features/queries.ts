// Restored from ref/webview/assets/experimental-features-queries-B5O3duhG.js
// Query options and mutation helpers for experimental feature flags.
import {
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  sendAppServerRequest,
  useHostConfigBt as callHostCommand,
} from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimes,
  vscodeApiUnderscore as useMutation,
} from "../../boundaries/vscode-api";
import { toFeatureConfigKeyPath } from "../../boundaries/src-l0hb-mz-p";
import { ANALYTICS_CONFIG_QUERY_KEY } from "../../config/config-queries";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
const MEMORY_EXPERIMENTAL_FEATURE_NAME = "memories";
const CHRONICLE_EXPERIMENTAL_FEATURE_NAME = "chronicle";
const EXPERIMENTAL_FEATURES_QUERY_PAGE_SIZE = 100;
const EXPERIMENTAL_FEATURES_QUERY_KEY = [
  "experimental-features",
  "list",
] as const;
type ExperimentalFeature = {
  enabled: boolean;
  name: string;
  [key: string]: unknown;
};
type ListExperimentalFeaturesResponse = {
  data: ExperimentalFeature[];
  nextCursor?: string | null;
};
type ToggleExperimentalFeatureVariables = {
  enabled: boolean;
  featureName: string;
};
type ToggleExperimentalFeatureContext = {
  previousFeatures?: ExperimentalFeature[];
};
function isMemoriesFeatureEnabled(
  features: readonly ExperimentalFeature[],
  fallbackEnabled: boolean,
): boolean {
  return (
    fallbackEnabled ||
    features.some(
      (feature) =>
        feature.name === MEMORY_EXPERIMENTAL_FEATURE_NAME && feature.enabled,
    )
  );
}
async function listExperimentalFeaturesForHost(
  hostId: string,
): Promise<ExperimentalFeature[]> {
  const features: ExperimentalFeature[] = [];
  let cursor: string | null = null;
  do {
    const response = (await callHostCommand("list-experimental-features", {
      hostId,
      cursor,
      limit: EXPERIMENTAL_FEATURES_QUERY_PAGE_SIZE,
    })) as ListExperimentalFeaturesResponse;
    features.push(...response.data);
    cursor = response.nextCursor ?? null;
  } while (cursor != null);
  return features;
}
const experimentalFeaturesQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: string) => ({
    queryKey: [...EXPERIMENTAL_FEATURES_QUERY_KEY, hostId],
    queryFn: async () => {
      try {
        return await listExperimentalFeaturesForHost(hostId);
      } catch (error) {
        vscodeLogger.error("Failed to load experimental features", {
          safe: {
            error: String(error),
          },
          sensitive: {},
        });
        return [];
      }
    },
    staleTime: queryTimes.ONE_MINUTE,
  }),
);
function useExperimentalFeatureMutation({ hostId }: { hostId: string }) {
  const queryClient = useQueryClient();
  const queryKey = [...EXPERIMENTAL_FEATURES_QUERY_KEY, hostId];
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  return useMutation({
    mutationFn: ({
      featureName,
      enabled,
    }: ToggleExperimentalFeatureVariables) =>
      sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits: [
          {
            keyPath: toFeatureConfigKeyPath(featureName),
            value: enabled,
            mergeStrategy: "upsert",
          },
        ],
        filePath: null,
        expectedVersion: null,
      }),
    onMutate: ({
      featureName,
      enabled,
    }: ToggleExperimentalFeatureVariables): ToggleExperimentalFeatureContext => {
      const previousFeatures = queryClient.getQueryData(queryKey) as
        | ExperimentalFeature[]
        | undefined;
      if (previousFeatures != null) {
        queryClient.setQueryData(
          queryKey,
          previousFeatures.map((feature) =>
            feature.name === featureName
              ? {
                  ...feature,
                  enabled,
                }
              : feature,
          ),
        );
      }
      return {
        previousFeatures,
      };
    },
    onError: (
      error: unknown,
      _variables: ToggleExperimentalFeatureVariables,
      context?: ToggleExperimentalFeatureContext,
    ) => {
      vscodeLogger.error("Failed to update experimental feature", {
        safe: {
          error: String(error),
        },
        sensitive: {},
      });
      if (context?.previousFeatures != null) {
        queryClient.setQueryData(queryKey, context.previousFeatures);
      }
    },
    onSettled: async (
      _data: unknown,
      _error: unknown,
      variables: ToggleExperimentalFeatureVariables,
    ) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey,
        }),
        variables.featureName === MEMORY_EXPERIMENTAL_FEATURE_NAME
          ? invalidateAndBroadcast(ANALYTICS_CONFIG_QUERY_KEY)
          : Promise.resolve(),
      ]);
    },
  });
}
export {
  MEMORY_EXPERIMENTAL_FEATURE_NAME,
  CHRONICLE_EXPERIMENTAL_FEATURE_NAME,
  experimentalFeaturesQueryOptions,
  isMemoriesFeatureEnabled,
  useExperimentalFeatureMutation,
  EXPERIMENTAL_FEATURES_QUERY_KEY,
};
