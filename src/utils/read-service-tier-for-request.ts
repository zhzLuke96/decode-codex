// Restored from ref/webview/assets/read-service-tier-for-request-BPRlTKNo.js
// Resolves the service tier value attached to app-server conversation requests.
import { copilotApiAvailabilityQuery } from "../auth/use-auth";
import { configRequirementsQueryOptions } from "../config/config-queries";
import {
  appServerConnectionManagerSignal,
  applyActiveProfileConfigOverrides,
  getGlobalStateValue,
  resolveRequestServiceTier,
  resolveServiceTierPreferenceValue,
  serviceTierPreferenceSignal,
} from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { vscodeApiH as vscodeLogger } from "../boundaries/vscode-api";

type AppScopeContext = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  query: {
    fetch<TValue = unknown>(query: unknown, params?: unknown): Promise<TValue>;
  };
};
type AccountRecord = {
  type?: string;
};
type ServiceTierAuthMethod =
  | "apikey"
  | "amazonBedrock"
  | "chatgpt"
  | "copilot"
  | null;
type ServiceTierPreference =
  | {
      type: "fromConfig";
    }
  | {
      type: "standard";
    }
  | {
      serviceTier: string | null;
      type: "custom";
    };
type CodexConfigDefaults = {
  model?: string | null;
  service_tier?: string | null;
  [key: string]: unknown;
};
type ModelInfo = {
  defaultServiceTier?: string | null;
  id?: string | null;
  isDefault?: boolean;
  model?: string | null;
  serviceTiers?: Array<{
    id: string;
    hidden?: boolean;
    name: string;
    description?: unknown;
  }>;
};

export function initReadServiceTierForRequestChunk(): void {}

export async function readServiceTierAuthMethod(
  scope: AppScopeContext,
  hostId: string,
): Promise<ServiceTierAuthMethod> {
  if (
    hostId === "local" &&
    getGlobalStateValue(scope.get, "use-copilot-auth-if-available") &&
    (
      await scope.query.fetch<{
        available: boolean;
      }>(copilotApiAvailabilityQuery)
    ).available
  ) {
    return "copilot";
  }
  const account =
    (
      await scope
        .get<{
          getAccount?: () => Promise<{
            account?: AccountRecord | null;
          }>;
        }>(appServerConnectionManagerSignal, hostId)
        ?.getAccount?.()
    )?.account ?? null;
  return getAuthMethodForAccount(account);
}
export async function readServiceTierForRequest(
  scope: AppScopeContext,
  hostId: string,
  modelId?: string | null,
): Promise<string | null> {
  try {
    const isFastModeAvailable = await readIsFastModeAvailable(scope, hostId);
    const serviceTierPreference = scope.get<ServiceTierPreference>(
      serviceTierPreferenceSignal,
      hostId,
    );
    if (serviceTierPreference.type !== "fromConfig") {
      return resolveRequestServiceTier(
        null,
        resolveServiceTierPreferenceValue(serviceTierPreference, null),
        isFastModeAvailable,
      );
    }
    const { config } = (await sendAppServerRequest("read-config-for-host", {
      hostId,
      includeLayers: false,
      cwd: null,
    })) as {
      config: CodexConfigDefaults;
    };
    const configDefaults = applyActiveProfileConfigOverrides(
      config,
    ) as CodexConfigDefaults;
    if (configDefaults.service_tier == null) {
      return resolveRequestServiceTier(
        await readModelForServiceTier(hostId, modelId ?? configDefaults.model),
        configDefaults.service_tier,
        isFastModeAvailable,
      );
    }
    return resolveRequestServiceTier(
      null,
      configDefaults.service_tier,
      isFastModeAvailable,
    );
  } catch (error) {
    vscodeLogger.error("Failed to read service tier for request", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}
function getAuthMethodForAccount(
  account: AccountRecord | null,
): ServiceTierAuthMethod {
  if (account == null) {
    return null;
  }
  switch (account.type) {
    case "apiKey":
      return "apikey";
    case "amazonBedrock":
      return "amazonBedrock";
    case "chatgpt":
      return "chatgpt";
  }
}
async function readIsFastModeAvailable(
  scope: AppScopeContext,
  hostId: string,
): Promise<boolean> {
  const authMethod = await readServiceTierAuthMethod(scope, hostId);
  if (authMethod !== "chatgpt") {
    return false;
  }
  const requirements = await scope.query.fetch<{
    requirements?: {
      featureRequirements?: {
        fast_mode?: boolean;
      };
    };
  }>(configRequirementsQueryOptions, {
    authMethod,
    hostId,
  });
  return requirements.requirements?.featureRequirements?.fast_mode !== false;
}
async function readModelForServiceTier(
  hostId: string,
  modelId: string | null | undefined,
): Promise<ModelInfo | null> {
  try {
    const { data } = (await sendAppServerRequest("list-models-for-host", {
      hostId,
      includeHidden: true,
      cursor: null,
      limit: 100,
    })) as {
      data: ModelInfo[];
    };
    if (modelId == null) {
      return data.find((model) => model.isDefault) ?? null;
    }
    return (
      data.find((model) => model.model === modelId || model.id === modelId) ??
      null
    );
  } catch (error) {
    vscodeLogger.error("Failed to read service tier model", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}
