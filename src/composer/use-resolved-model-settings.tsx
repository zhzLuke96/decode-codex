// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolve composer model settings from host config, model list data, and pending overrides.

import { useEffect } from "react";

import {
  _appScopeA as useAppScopeQueryValue,
  appScopeA as useAppScopeFamilyValue,
  appScopeO as useAppScopeStore,
  appScopeS as useAppScopeValue,
  appScopeT as appScopeRoot,
} from "../boundaries/app-scope";
import {
  createUserSavedConfigQueryOptions,
  userSavedConfigQueryOptions,
} from "../config/user-saved-config-query";
import {
  useModelFilterConfig,
  useModelListQuery,
} from "../utils/model-queries";
import {
  logger,
  nextTurnModelOverrideSignal,
  registeredAppServerHostIdsSignal,
  useInvalidateQueries,
  useQueryClient,
  useScopedPersistedValue,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  applyModelOverride,
  resolveModelSettingsForConfig,
  userSavedConfigQueryKeyFor,
  type ModelSettings,
  type NextTurnModelOverride,
  type UserSavedConfig,
} from "./model-settings-core";

function useCopilotDefaultModelSettings(): ModelSettings {
  const filterConfig = useModelFilterConfig();
  const { data, isLoading } = useScopedPersistedValue("copilot-default-model");
  return {
    model: data ?? filterConfig.defaultModel,
    reasoningEffort: "medium",
    profile: null,
    isLoading,
  };
}

export function useInvalidateUserSavedConfig({
  hostId,
  cwd,
}: {
  hostId: string;
  cwd: string | null;
}) {
  const queryClient = useQueryClient();
  const invalidateQueries = useInvalidateQueries();
  return async () => {
    const queryKey = userSavedConfigQueryKeyFor(hostId, cwd);
    await queryClient.cancelQueries({ queryKey, exact: true });
    await invalidateQueries(queryKey);
  };
}

export function useResolvedModelSettings({
  hostId,
  cwd,
  isHostRegistered,
  waitForModelList = false,
}: {
  hostId: string;
  cwd: string | null;
  isHostRegistered: boolean;
  waitForModelList?: boolean;
}): ModelSettings {
  const store = useAppScopeStore(appScopeRoot);
  const queryClient = store.queryClient;

  const { data: modelListData, isLoading: isModelListLoading } =
    useModelListQuery({ hostId });
  const nextTurnOverride = useAppScopeFamilyValue(nextTurnModelOverrideSignal, {
    hostId,
    cwd,
  }) as NextTurnModelOverride | null;

  const directConfigOptions = createUserSavedConfigQueryOptions({
    queryClient,
    hostId,
    cwd,
    enabled: isHostRegistered,
  });
  const {
    data: directConfig,
    dataUpdatedAt: directConfigUpdatedAt,
    isLoading: isDirectConfigLoading,
  } = useAppScopeQueryValue(directConfigOptions) as {
    data: UserSavedConfig | null;
    dataUpdatedAt: number;
    isLoading: boolean;
  };
  const {
    data: cachedConfig,
    dataUpdatedAt: cachedConfigUpdatedAt,
    isLoading: isCachedConfigLoading,
  } = useAppScopeFamilyValue(userSavedConfigQueryOptions, { hostId, cwd }) as {
    data: UserSavedConfig | null;
    dataUpdatedAt: number;
    isLoading: boolean;
  };

  const logConfigQueryDivergence = () => {
    const cachedQuery = queryClient.getQueryCache().find({
      exact: true,
      queryKey: userSavedConfigQueryKeyFor(hostId, cwd),
    });
    const cacheUpdatedAt = cachedQuery?.state.dataUpdatedAt ?? 0;
    const directModel = directConfig?.model ?? null;
    const directReasoningEffort = directConfig?.model_reasoning_effort ?? null;
    const cachedModel = cachedConfig?.model ?? null;
    const cachedReasoningEffort = cachedConfig?.model_reasoning_effort ?? null;
    if (
      cacheUpdatedAt === 0 ||
      directConfigUpdatedAt !== cacheUpdatedAt ||
      cachedConfigUpdatedAt === cacheUpdatedAt ||
      (directModel === cachedModel &&
        directReasoningEffort === cachedReasoningEffort)
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      logger.warning("model_settings.config_query_diverged", {
        safe: {
          cacheDataUpdatedAt: cacheUpdatedAt,
          directDataUpdatedAt: directConfigUpdatedAt,
          directIsLoading: isDirectConfigLoading,
          isHostRegistered,
          maitaiDataUpdatedAt: cachedConfigUpdatedAt,
          maitaiIsLoading: isCachedConfigLoading,
          observerCount: cachedQuery?.getObserversCount() ?? 0,
        },
        sensitive: {
          cwd,
          directModel,
          directReasoningEffort,
          hostId,
          maitaiModel: cachedModel,
          maitaiReasoningEffort: cachedReasoningEffort,
        },
      });
    });
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(logConfigQueryDivergence, [
    cwd,
    hostId,
    isHostRegistered,
    isCachedConfigLoading,
    isDirectConfigLoading,
    cachedConfig,
    cachedConfigUpdatedAt,
    queryClient,
    directConfig,
    directConfigUpdatedAt,
  ]);

  const directModel = directConfig?.model ?? null;
  const shouldWaitForModel =
    waitForModelList &&
    directModel != null &&
    modelListData?.models.some((model) => model.model === directModel) ===
      false;

  const resolved = resolveModelSettingsForConfig({
    userSavedModelString: shouldWaitForModel ? null : directModel,
    userSavedReasoningEffort: directConfig?.model_reasoning_effort ?? null,
    listModelsData:
      waitForModelList && modelListData != null
        ? {
            ...modelListData,
            defaultModel:
              modelListData.defaultModel ?? modelListData.models[0] ?? null,
          }
        : modelListData,
  });
  const isMissingSelection =
    directConfig?.model == null || directConfig.model_reasoning_effort == null;

  return applyModelOverride(
    {
      ...resolved,
      profile:
        typeof directConfig?.profile === "string" ? directConfig.profile : null,
      isLoading:
        isDirectConfigLoading ||
        (waitForModelList
          ? modelListData?.models[0] == null
          : isModelListLoading && isMissingSelection),
    },
    nextTurnOverride,
  );
}

export interface UseModelSettingsOptions {
  hostId: string;
  cwd: string | null;
}

export function useModelSettings({
  hostId,
  cwd,
}: UseModelSettingsOptions): ModelSettings {
  const registeredHostIds = useAppScopeValue(
    registeredAppServerHostIdsSignal,
  ) as string[];
  const isHostRegistered = registeredHostIds.includes(hostId);
  return useResolvedModelSettings({
    hostId,
    cwd,
    isHostRegistered,
    waitForModelList: true,
  });
}

export { useCopilotDefaultModelSettings };
