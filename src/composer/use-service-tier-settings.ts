// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the effective service tier ("fast mode") for a conversation/host and
// exposes a setter that persists it to host config and/or the next-turn thread settings.
import {
  appScopeO as useAppScopeStore,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { useServiceTier } from "./use-service-tier";
import {
  connectedHostIdsSignal,
  getAvailableServiceTierOptions,
  getServiceTierForModel,
  hostConfigQueryKey,
  hostConfigQueryOptions,
  logger,
  nextTurnThreadSettingsSignal,
  normalizeServiceTierId,
  recordProductEvent,
  resolveActiveServiceTier,
  resolveDefaultServiceTier,
  resolveModelOption,
  sendHostRequest,
  serviceTierChangedEvent,
  threadParamsByIdSignal,
  threadServiceTierByHostSignal,
  toServiceTierConfigValue,
  toServiceTierThreadOverride,
  useInvalidateQueries,
  useModelSettings,
  useModelsQuery,
  useWebviewExecutionTarget,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ServiceTierSettings {
  availableOptions: unknown;
  isLoading: boolean;
  selectedServiceTier: unknown;
  serviceTierForRequest: string | null;
}

export interface UseServiceTierSettingsResult {
  serviceTierSettings: ServiceTierSettings;
  setServiceTier: (serviceTier: string | null, source: string) => Promise<void>;
}

interface HostServiceTierState {
  activeProfileForWrite: string | null;
  isLoading: boolean;
  serviceTier: string | null;
}

function serviceTierConfigKeyPath(profile: string | null): string {
  return profile == null ? "service_tier" : `profiles.${profile}.service_tier`;
}

function useHostServiceTier(hostId: string): HostServiceTierState {
  const connectedHostIds = useAppScopeValue<string[]>(connectedHostIdsSignal);
  const isConnectedHost = connectedHostIds.includes(hostId);
  const { data: hostConfig, isLoading } = useAppScopeValue<{
    data?: { service_tier?: string | null; profile?: unknown };
    isLoading: boolean;
  }>(hostConfigQueryOptions, { hostId }) as any;
  const threadServiceTier = useAppScopeValue(
    threadServiceTierByHostSignal,
    hostId,
  );
  const configServiceTier = hostConfig?.service_tier ?? null;
  const serviceTier = resolveActiveServiceTier(
    threadServiceTier,
    configServiceTier,
  );
  const activeProfileForWrite =
    typeof hostConfig?.profile === "string" ? hostConfig.profile : null;
  return {
    activeProfileForWrite,
    isLoading: !isConnectedHost || isLoading,
    serviceTier,
  };
}

function useWriteHostServiceTier(
  hostId: string,
  activeProfile: string | null,
): (serviceTier: string | null) => Promise<void> {
  const store = useAppScopeStore();
  const invalidateQueries = useInvalidateQueries();
  return async (serviceTier) => {
    const configValue = toServiceTierConfigValue(serviceTier);
    sendHostRequest("batch-write-config-value", {
      hostId,
      edits: [
        {
          keyPath: serviceTierConfigKeyPath(activeProfile),
          value: configValue,
          mergeStrategy: "upsert",
        },
      ],
      filePath: null,
      expectedVersion: null,
      reloadUserConfig: true,
    });
    store.set(
      threadServiceTierByHostSignal,
      hostId,
      toServiceTierThreadOverride(serviceTier),
    );
    await Promise.all([
      invalidateQueries(["config"]),
      invalidateQueries([...hostConfigQueryKey, hostId, null]),
    ]);
    await store.query.fetch(hostConfigQueryOptions, { hostId });
  };
}

export function useServiceTierSettings(
  conversationId?: string | null,
): UseServiceTierSettingsResult {
  const resolvedConversationId =
    conversationId === undefined ? null : conversationId;
  const store = useAppScopeStore();
  const executionTarget = useWebviewExecutionTarget(resolvedConversationId);
  const { modelSettings } = useModelSettings(resolvedConversationId);
  const { data: modelsData, isLoading: areModelsLoading } = useModelsQuery({
    hostId: executionTarget.hostId,
  });
  const nextTurnThreadSettings = useAppScopeValue<{
    serviceTier?: string | null;
  } | null>(nextTurnThreadSettingsSignal, resolvedConversationId);
  const threadParams = useAppScopeValue<{
    params: { serviceTier?: string | null };
  } | null>(threadParamsByIdSignal, resolvedConversationId);
  const hostServiceTier = useHostServiceTier(executionTarget.hostId);
  const writeHostServiceTier = useWriteHostServiceTier(
    executionTarget.hostId,
    hostServiceTier.activeProfileForWrite,
  );
  const { isServiceTierAllowed } = useServiceTier({
    hostId: executionTarget.hostId,
  });

  const modelOption = resolveModelOption(
    modelsData?.models,
    modelSettings.model,
  );
  const requestedServiceTier =
    resolvedConversationId != null &&
    nextTurnThreadSettings?.serviceTier !== undefined
      ? nextTurnThreadSettings.serviceTier
      : resolvedConversationId != null &&
          threadParams?.params.serviceTier !== undefined
        ? threadParams.params.serviceTier
        : hostServiceTier.serviceTier;
  const serviceTierForRequest: string | null =
    resolvedConversationId != null &&
    (nextTurnThreadSettings?.serviceTier !== undefined ||
      threadParams?.params.serviceTier !== undefined)
      ? isServiceTierAllowed
        ? requestedServiceTier
        : null
      : resolveDefaultServiceTier(
          modelOption,
          requestedServiceTier,
          isServiceTierAllowed,
        );
  const selectedServiceTier =
    serviceTierForRequest == null
      ? null
      : getServiceTierForModel(modelOption, serviceTierForRequest);
  const previousNormalizedTier = normalizeServiceTierId(
    serviceTierForRequest ?? null,
  );
  const isLoading =
    modelSettings.isLoading || areModelsLoading || hostServiceTier.isLoading;

  const setServiceTier = async (
    serviceTier: string | null,
    source: string,
  ): Promise<void> => {
    const configValueChanged =
      toServiceTierConfigValue(serviceTier) !== hostServiceTier.serviceTier;
    const threadOverrideChanged =
      resolvedConversationId != null &&
      serviceTier !== nextTurnThreadSettings?.serviceTier;
    try {
      if (threadOverrideChanged) {
        await sendHostRequest("update-thread-settings-for-next-turn", {
          conversationId: resolvedConversationId,
          threadSettings: { serviceTier },
        });
      }
      if (configValueChanged) {
        await writeHostServiceTier(serviceTier);
      }
    } catch (error) {
      logger.error("Failed to set service tier", {
        safe: {},
        sensitive: { error },
      });
      return;
    }
    if (configValueChanged || threadOverrideChanged) {
      const nextNormalizedTier = normalizeServiceTierId(serviceTier);
      if (previousNormalizedTier === nextNormalizedTier) return;
      recordProductEvent(store, serviceTierChangedEvent, {
        previousServiceTier: previousNormalizedTier,
        serviceTier: nextNormalizedTier,
        source,
      });
    }
  };

  const availableOptions = getAvailableServiceTierOptions(modelOption);

  return {
    serviceTierSettings: {
      availableOptions,
      isLoading,
      selectedServiceTier,
      serviceTierForRequest,
    },
    setServiceTier,
  };
}

export function initUseServiceTierSettingsChunk(): void {}
