// Restored from ref/webview/assets/model-queries-CbKX4hvn.js
// Model list query configuration and Statsig-driven model filtering.
import { useDynamicConfig } from "../vendor/statsig-current-runtime";
import {
  _appScopeA as useAppScopeQueryValue,
  _appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";
import { registeredAppServerHostIdsSignal } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { vscodeApiU as queryTimings } from "../boundaries/vscode-api";
import { useAuthForHost } from "../auth/use-auth";
import { enabledReasoningEffortsSetSignal } from "../composer/enabled-reasoning-efforts";
import { featureGateSignal } from "../runtime/feature-gate-runtime";
import { _isEqualT as createIsEqual } from "../vendor/lodash-is-equal";
import { modelListFilter } from "./model-list-filter";
import { DEFAULT_MODEL } from "./models-and-reasoning-efforts";
const MODEL_FILTER_DYNAMIC_CONFIG_ID = "107580212";
const ULTRA_REASONING_EFFORT_GATE = "1186680773";
const DEFAULT_MODEL_LIST_LIMIT = 100;
const MODEL_LIST_QUERY_KEY = ["models", "list"] as const;
const modelFilterReasoningEfforts = ["low", "medium", "high", "xhigh"] as const;
type ModelFilterConfig = {
  availableModels: Set<string>;
  useHiddenModels: boolean;
  defaultModel: string;
};
type RawModelFilterConfig = {
  available_models?: unknown;
  use_hidden_models?: unknown;
  default_model?: unknown;
};
type AuthState = {
  authMethod?: string | null;
  isLoading?: boolean;
};
type ModelListQueryOptions = {
  hostId?: string;
  includeUltraReasoningEffort?: boolean;
  limit?: number;
};
type ModelListQueryParams = {
  availableModels: string[];
  authMethod: string | null;
  defaultModel: string;
  enabledReasoningEfforts: Set<string>;
  hostId: string;
  includeUltraReasoningEffort: boolean;
  limit: number;
  useHiddenModels: boolean;
};
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};
type ModelListItem = {
  model: string;
  hidden?: boolean;
  isDefault?: boolean;
  supportedReasoningEfforts: Array<{
    reasoningEffort: string;
    description: string;
  }>;
  [key: string]: unknown;
};
type ListModelsForHostResponse = {
  data: ModelListItem[];
};
const EMPTY_AVAILABLE_MODELS: string[] = [];
const DEFAULT_MODEL_FILTER_CONFIG: ModelFilterConfig = {
  availableModels: new Set(EMPTY_AVAILABLE_MODELS),
  useHiddenModels: false,
  defaultModel: DEFAULT_MODEL,
};
const isEqual = createIsEqual() as (
  left: ModelFilterConfig,
  right: ModelFilterConfig,
) => boolean;
const modelFilterConfigSignal = createAppScopeSignal(
  appScopeRoot,
  DEFAULT_MODEL_FILTER_CONFIG,
  {
    isEqual,
  },
);

function initModelFilterConfigChunk(): void {}

function isRawModelFilterConfig(value: unknown): value is RawModelFilterConfig {
  return value != null && typeof value === "object";
}
function parseStringArray(value: unknown): string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value
    : EMPTY_AVAILABLE_MODELS;
}
function parseModelFilterConfig(value: unknown): ModelFilterConfig {
  const configValue = isRawModelFilterConfig(value) ? value : {};
  const availableModels = parseStringArray(configValue.available_models);
  const useHiddenModels =
    typeof configValue.use_hidden_models === "boolean"
      ? configValue.use_hidden_models
      : DEFAULT_MODEL_FILTER_CONFIG.useHiddenModels;
  const defaultModel =
    typeof configValue.default_model === "string"
      ? configValue.default_model
      : DEFAULT_MODEL_FILTER_CONFIG.defaultModel;
  return {
    availableModels: new Set(availableModels),
    useHiddenModels,
    defaultModel,
  };
}
function useModelFilterConfig(): ModelFilterConfig {
  const dynamicConfig = useDynamicConfig(MODEL_FILTER_DYNAMIC_CONFIG_ID) as {
    value?: unknown;
  };
  return parseModelFilterConfig(dynamicConfig.value);
}
function getModelListQueryKey(
  hostId: string,
  authMethod: string | null,
  limit = DEFAULT_MODEL_LIST_LIMIT,
) {
  return [
    ...MODEL_LIST_QUERY_KEY,
    hostId,
    authMethod ?? "no-auth",
    limit,
  ] as const;
}
const modelListQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (
    {
      availableModels,
      authMethod,
      defaultModel,
      enabledReasoningEfforts,
      hostId,
      includeUltraReasoningEffort,
      limit,
      useHiddenModels,
    }: ModelListQueryParams,
    { get }: AppScopeGetter,
  ) => ({
    queryKey: getModelListQueryKey(hostId, authMethod, limit),
    enabled: get<string[]>(registeredAppServerHostIdsSignal).includes(hostId),
    staleTime: queryTimings.FIVE_MINUTES,
    queryFn: () =>
      sendAppServerRequest("list-models-for-host", {
        hostId,
        includeHidden: true,
        cursor: null,
        limit,
      }) as Promise<ListModelsForHostResponse>,
    select: ({ data }: ListModelsForHostResponse) =>
      modelListFilter({
        authMethod: authMethod ?? "",
        availableModels: new Set(availableModels),
        defaultModel,
        enabledReasoningEfforts,
        includeUltraReasoningEffort:
          includeUltraReasoningEffort &&
          get<boolean>(featureGateSignal, ULTRA_REASONING_EFFORT_GATE),
        models: data,
        useHiddenModels,
      }),
  }),
);
function useModelListQuery(options?: ModelListQueryOptions) {
  const hostId = options?.hostId ?? "local";
  const includeUltraReasoningEffort =
    options?.includeUltraReasoningEffort !== false;
  const limit = options?.limit ?? DEFAULT_MODEL_LIST_LIMIT;
  const authState = useAuthForHost(hostId) as AuthState | null | undefined;
  const filterConfig = useModelFilterConfig();
  const availableModels = Array.from(filterConfig.availableModels).sort();
  const authMethod = authState?.authMethod ?? null;
  return useAppScopeQueryValue(
    modelListQueryOptions,
    {
      availableModels,
      authMethod,
      defaultModel: filterConfig.defaultModel,
      enabledReasoningEfforts: useAppScopeQueryValue(
        enabledReasoningEffortsSetSignal,
      ) as Set<string>,
      hostId,
      includeUltraReasoningEffort,
      limit,
      useHiddenModels: filterConfig.useHiddenModels,
    },
    {
      enabled: authState?.isLoading !== true,
    },
  );
}
function isModelListQueryReady(status: string): boolean {
  return status !== "pending";
}

function initModelListQueryChunk(): void {
  initModelFilterConfigChunk();
}

export {
  initModelFilterConfigChunk,
  initModelListQueryChunk,
  parseModelFilterConfig,
  modelFilterReasoningEfforts,
  modelFilterConfigSignal,
  useModelListQuery,
  useModelFilterConfig,
  isModelListQueryReady,
};
