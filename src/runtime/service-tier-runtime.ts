// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Service-tier ("speed") helpers and app-scope state used by composer model settings.
import { appScopeL, appScopeUnderscore } from "../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { createQueryKey } from "./app-server-mutation-runtime";
import { sendHostRequest } from "./host-request-runtime";
import { queryDurations } from "./host-query-runtime";
import { appStoreScope } from "./onboarding-scope-runtime";
import { useQueryClient } from "./query-client/react-query-context";

type MessageDescriptor = {
  defaultMessage: string;
  description?: string;
  id: string;
};

type ServiceTier = {
  description?: string | MessageDescriptor;
  id: string;
  name: string;
  [key: string]: unknown;
};

type ModelOption = {
  defaultServiceTier?: string | null;
  model?: string | null;
  serviceTiers?: readonly ServiceTier[] | null;
  [key: string]: unknown;
};

const DEFAULT_SERVICE_TIER_ID = "default";

const serviceTierMessages = {
  standardDescription: {
    id: "serviceTier.standard.description",
    defaultMessage: "Standard speed for everyday work.",
    description: "Description for the standard service tier option",
  },
  standardLabel: {
    id: "serviceTier.standard.label",
    defaultMessage: "Standard",
    description: "Label for the standard service tier option",
  },
  fastDescription: {
    id: "serviceTier.fast.description",
    defaultMessage: "Prioritize faster responses when available.",
    description: "Description for the fast service tier option",
  },
  fastLabel: {
    id: "serviceTier.fast.label",
    defaultMessage: "Fast",
    description: "Label for the fast service tier option",
  },
  ultrafastDescription: {
    id: "serviceTier.ultrafast.description",
    defaultMessage: "Use the fastest available response tier.",
    description: "Description for the ultrafast service tier option",
  },
  ultrafastLabel: {
    id: "serviceTier.ultrafast.label",
    defaultMessage: "Ultrafast",
    description: "Label for the ultrafast service tier option",
  },
} satisfies Record<string, MessageDescriptor>;

export const connectedHostIdsSignal = appScopeUnderscore(
  appStoreScope,
  () => [LOCAL_HOST_ID],
);
export const threadServiceTierByHostSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);
export const nextTurnThreadSettingsSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);
export const threadParamsByIdSignal = appScopeUnderscore(
  appStoreScope,
  () => null,
);

export const hostConfigQueryKey = ["config", "host"] as const;
export const hostConfigQueryOptions = appScopeL(appStoreScope, (input) => {
  const params = (input ?? {}) as { hostId?: string | null };
  const hostId = params.hostId ?? LOCAL_HOST_ID;
  const queryKey = [...hostConfigQueryKey, hostId, null] as const;
  return {
    data: {
      id: hostId,
      service_tier: null,
    },
    isError: false,
    isLoading: false,
    isPending: false,
    queryFn: () =>
      sendHostRequest("read-config-for-host", {
        hostId,
        includeLayers: false,
      }),
    queryKey,
    staleTime: queryDurations.FIVE_SECONDS,
  };
});

export const serviceTierChangedEvent = {
  name: "service_tier_changed",
  target: "composer",
} as const;

export function normalizeServiceTierId(
  serviceTier: string | null | undefined,
  name?: string | null,
): "fast" | "ultrafast" | null {
  const normalizedName = name?.trim().toLowerCase();
  if (
    serviceTier === "priority" ||
    serviceTier === "fast" ||
    normalizedName === "fast"
  ) {
    return "fast";
  }
  if (serviceTier === "ultrafast" || normalizedName === "ultrafast") {
    return "ultrafast";
  }
  return null;
}

function getServiceTierLabel(tier: ServiceTier | null): string | MessageDescriptor {
  switch (normalizeServiceTierId(tier?.id ?? null, tier?.name)) {
    case "fast":
      return serviceTierMessages.fastLabel;
    case "ultrafast":
      return serviceTierMessages.ultrafastLabel;
    case null:
      return tier?.name ?? serviceTierMessages.standardLabel;
  }
}

function getServiceTierDescription(
  tier: ServiceTier | null,
): string | MessageDescriptor {
  switch (normalizeServiceTierId(tier?.id ?? null, tier?.name)) {
    case "fast":
      return tier?.description ?? serviceTierMessages.fastDescription;
    case "ultrafast":
      return tier?.description ?? serviceTierMessages.ultrafastDescription;
    case null:
      return tier?.description ?? serviceTierMessages.standardDescription;
  }
}

function findFastServiceTier(modelOption: ModelOption | null | undefined) {
  return (
    modelOption?.serviceTiers?.find(
      (tier) =>
        normalizeServiceTierId(tier.id, tier.name) === "fast" ||
        tier.name.trim().toLowerCase() === "priority",
    ) ?? null
  );
}

function resolveServiceTierObject(
  modelOption: ModelOption | null | undefined,
  serviceTier: string | null | undefined,
): ServiceTier | null {
  if (serviceTier == null) return null;
  if (serviceTier === "fast") return findFastServiceTier(modelOption);
  return (
    modelOption?.serviceTiers?.find((tier) => tier.id === serviceTier) ?? null
  );
}

export function getAvailableServiceTierOptions(
  modelOption: ModelOption | null | undefined,
) {
  return [
    {
      description: serviceTierMessages.standardDescription,
      iconKind: null,
      label: serviceTierMessages.standardLabel,
      tier: null,
      value: null,
    },
    ...(modelOption?.serviceTiers ?? []).map((tier) => ({
      description: getServiceTierDescription(tier),
      iconKind: normalizeServiceTierId(tier.id, tier.name),
      label: getServiceTierLabel(tier),
      tier,
      value: tier.id,
    })),
  ];
}

export function resolveModelOption(
  models: readonly ModelOption[] | null | undefined,
  model: string | null | undefined,
  serviceTier?: string | null,
): ModelOption | null {
  return (
    models?.find(
      (option) =>
        option.model === model &&
        (serviceTier === undefined ||
          resolveServiceTierObject(option, serviceTier) != null),
    ) ?? null
  );
}

export function resolveActiveServiceTier(
  threadServiceTier: string | null | undefined,
  configServiceTier: string | null | undefined,
): string | null {
  return threadServiceTier ?? configServiceTier ?? null;
}

export function resolveDefaultServiceTier(
  modelOption: ModelOption | null | undefined,
  requestedServiceTier: string | null | undefined,
  isServiceTierAllowed: boolean = true,
): string | null {
  if (!isServiceTierAllowed) return null;
  if (requestedServiceTier == null) {
    const defaultTier = modelOption?.defaultServiceTier ?? null;
    return defaultTier == null
      ? null
      : (resolveServiceTierObject(modelOption, defaultTier)?.id ?? null);
  }
  return requestedServiceTier === DEFAULT_SERVICE_TIER_ID
    ? null
    : requestedServiceTier;
}

export function toServiceTierConfigValue(
  serviceTier: string | null | undefined,
) {
  return serviceTier ?? DEFAULT_SERVICE_TIER_ID;
}

export function toServiceTierThreadOverride(
  serviceTier: string | null | undefined,
) {
  return serviceTier == null
    ? { type: "standard" as const }
    : { serviceTier, type: "custom" as const };
}

export function getServiceTierForModel(
  modelOption: ModelOption | null | undefined,
  serviceTier: string | null | undefined,
): ServiceTier | null;
export function getServiceTierForModel(
  scope: { get?: (signal: unknown, key?: unknown) => unknown },
  hostId: string | null | undefined,
  model: string | null | undefined,
): Promise<string | null>;
export function getServiceTierForModel(
  first: ModelOption | { get?: (signal: unknown, key?: unknown) => unknown } | null | undefined,
  second: string | null | undefined,
  third?: string | null,
): ServiceTier | Promise<string | null> | null {
  if (third !== undefined || typeof first?.get === "function") {
    const scope = first as { get?: (signal: unknown, key?: unknown) => unknown };
    const hostId = second ?? LOCAL_HOST_ID;
    const model = third ?? null;
    const threadTier = scope.get?.(threadServiceTierByHostSignal, hostId) as
      | { serviceTier?: string | null; type?: string }
      | string
      | null
      | undefined;
    if (typeof threadTier === "string") return Promise.resolve(threadTier);
    if (threadTier?.type === "custom") {
      return Promise.resolve(threadTier.serviceTier ?? null);
    }

    const queryKey = createQueryKey("model-service-tier", { hostId, model });
    return sendHostRequest<{ serviceTier?: string | null }>(
      "resolve-model-service-tier",
      {
        params: { hostId, model },
      },
    )
      .then((result) => result.serviceTier ?? null)
      .catch(() => {
        void queryKey;
        return null;
      });
  }

  return resolveServiceTierObject(first as ModelOption | null | undefined, second);
}

export function useInvalidateQueries() {
  const queryClient = useQueryClient();
  return (queryKey: readonly unknown[]) =>
    queryClient.invalidateQueries({ queryKey });
}
