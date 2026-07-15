// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Enabled reasoning-effort setting selector and update action for model controls.
import {
  appScopeL as createAppScopeDerivedSignal,
  appScopeRoot,
} from "../boundaries/app-scope";
import { nextTurnModelOverrideSignal } from "../boundaries/onboarding-commons-externals.facade";
import { generalSettingDefinitions } from "../boundaries/src-l0hb-mz-p";
import { vscodeApiF as vscodeMessageBridge } from "../boundaries/vscode-api";
import { userSavedConfigQueryOptions } from "../config/user-saved-config-query";
import { sendAppServerRequest } from "../runtime/app-server-request";
import {
  getSettingValue,
  writeSettingValue,
} from "../settings/setting-storage";
import { isReasoningEffort } from "../utils/models-and-reasoning-efforts";
import {
  userSavedConfigQueryKeyFor,
  type ModelListData,
  type NextTurnModelOverride,
  type UserSavedConfig,
} from "./model-settings-core";

type SettingDefinition<T> = {
  default: T;
  key: string;
};

type AppScopeStore = {
  get<T = unknown>(signal: unknown, key?: unknown): T;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  query?: {
    fetch?<T = unknown>(query: unknown, key?: unknown): Promise<T>;
    snapshot?<T = unknown>(
      query: unknown,
      key?: unknown,
    ): {
      getOrFetch?(): Promise<T>;
      setData?(updater: T | ((current: T | undefined) => T | undefined)): void;
    };
  };
};

export interface SetEnabledReasoningEffortOptions {
  enabled: boolean;
  hostId: string;
  listModelsData: ModelListData;
  reasoningEffort: string;
}

const enabledReasoningEffortsSetting =
  generalSettingDefinitions.enabledReasoningEfforts as SettingDefinition<
    string[]
  >;

function readEnabledReasoningEfforts(store: AppScopeStore): string[] {
  const value = getSettingValue(
    (query) => store.get(query),
    enabledReasoningEffortsSetting,
  );
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export const enabledReasoningEffortsSetSignal = createAppScopeDerivedSignal(
  appScopeRoot,
  (_key, store) => new Set(readEnabledReasoningEfforts(store as AppScopeStore)),
);

function findModelByName(models: ModelListData["models"], modelName: string) {
  return models.find((model) => model.model === modelName);
}

async function readUserSavedConfig(
  store: AppScopeStore,
  hostId: string,
): Promise<UserSavedConfig | null> {
  const key = { hostId, cwd: null };
  const snapshot = store.query?.snapshot?.<UserSavedConfig | null>(
    userSavedConfigQueryOptions,
    key,
  );
  if (snapshot?.getOrFetch) return snapshot.getOrFetch();
  if (store.query?.fetch) {
    return store.query.fetch<UserSavedConfig | null>(
      userSavedConfigQueryOptions,
      key,
    );
  }
  return null;
}

async function resetHostDefaultReasoningEffort(
  store: AppScopeStore,
  hostId: string,
  listModelsData: ModelListData,
  disabledReasoningEffort: string,
): Promise<void> {
  const targetKey = { hostId, cwd: null };
  const userSavedConfig = await readUserSavedConfig(store, hostId);
  const pendingOverride = store.get<NextTurnModelOverride | null>(
    nextTurnModelOverrideSignal,
    targetKey,
  );
  const currentReasoningEffort =
    pendingOverride?.reasoningEffort ??
    userSavedConfig?.model_reasoning_effort ??
    null;

  if (currentReasoningEffort !== disabledReasoningEffort) return;

  const currentModelName =
    pendingOverride?.model ??
    userSavedConfig?.model ??
    listModelsData.defaultModel?.model;
  const currentModel =
    currentModelName == null
      ? null
      : findModelByName(listModelsData.models, currentModelName);
  const nextReasoningEffort = currentModel?.defaultReasoningEffort;
  if (!nextReasoningEffort || !isReasoningEffort(nextReasoningEffort)) return;

  const profile =
    pendingOverride?.profile ??
    (typeof userSavedConfig?.profile === "string"
      ? userSavedConfig.profile
      : null);
  const result = await sendAppServerRequest<{ status?: string }>(
    "set-default-model-config-for-host",
    {
      hostId,
      model: currentModel.model,
      profile,
      reasoningEffort: nextReasoningEffort,
    },
  );

  await sendAppServerRequest("clear-prewarmed-threads-for-host", { hostId });
  store.set(
    nextTurnModelOverrideSignal,
    targetKey,
    result?.status === "okOverridden"
      ? {
          model: currentModel.model,
          profile,
          reasoningEffort: nextReasoningEffort,
        }
      : null,
  );
  vscodeMessageBridge.dispatchMessage("query-cache-invalidate", {
    queryKey: userSavedConfigQueryKeyFor(hostId, null),
  });
}

export async function setEnabledReasoningEffort(
  store: AppScopeStore,
  {
    enabled,
    hostId,
    listModelsData,
    reasoningEffort,
  }: SetEnabledReasoningEffortOptions,
): Promise<void> {
  const currentEfforts = readEnabledReasoningEfforts(store);
  let nextEfforts = currentEfforts;
  if (enabled && !currentEfforts.includes(reasoningEffort)) {
    nextEfforts = [...currentEfforts, reasoningEffort];
  } else if (!enabled && currentEfforts.includes(reasoningEffort)) {
    nextEfforts = currentEfforts.filter((item) => item !== reasoningEffort);
  }

  if (nextEfforts === currentEfforts) return;

  if (!enabled && (reasoningEffort === "max" || reasoningEffort === "ultra")) {
    await resetHostDefaultReasoningEffort(
      store,
      hostId,
      listModelsData,
      reasoningEffort,
    );
  }

  await writeSettingValue(
    store as never,
    enabledReasoningEffortsSetting,
    nextEfforts,
  );
}

export function initEnabledReasoningEffortsChunk(): void {}
