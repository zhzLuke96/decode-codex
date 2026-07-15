// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Core model-setting types and pure resolution helpers for the composer.

import {
  DEFAULT_MODEL,
  DEFAULT_REASONING_EFFORT,
} from "../utils/models-and-reasoning-efforts";
import { USER_SAVED_CONFIG_QUERY_KEY } from "../config/user-saved-config-query";

export interface ModelSettings {
  model: string;
  reasoningEffort: string | null;
  profile: string | null;
  isLoading: boolean;
}

export interface ModelListEntry {
  model: string;
  defaultReasoningEffort?: string;
  supportedReasoningEfforts?: { reasoningEffort: string }[];
}

export interface ModelListData {
  models: ModelListEntry[];
  defaultModel: ModelListEntry | null;
}

export interface UserSavedConfig {
  model?: string | null;
  model_reasoning_effort?: string | null;
  profile?: string | null;
}

export interface NextTurnModelOverride {
  model: string;
  reasoningEffort: string | null;
  profile: string | null;
}

/** Reasoning efforts a user may toggle on for a model. */
export const SELECTABLE_REASONING_EFFORTS = ["low", "medium", "high", "xhigh"];

export function initModelSettingsCoreChunk(): void {}

export function findModelByName(
  models: ModelListEntry[] | undefined | null,
  modelName: string,
): ModelListEntry | undefined {
  return models?.find((model) => model.model === modelName);
}

export function userSavedConfigQueryKeyFor(hostId: string, cwd: string | null) {
  return [...USER_SAVED_CONFIG_QUERY_KEY, hostId, cwd];
}

export function modelSelectionTargetKey({
  conversationId,
  hasConversation,
  hostId,
  cwd,
}: {
  conversationId: string | null;
  hasConversation: boolean;
  hostId: string;
  cwd: string | null;
}) {
  return conversationId != null && hasConversation
    ? ["conversation", conversationId]
    : ["default", hostId, cwd];
}

export function isConfigValidationError(
  error: unknown,
): error is { code: number; message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as { code?: unknown }).code === -32600 &&
    typeof (error as { message?: unknown }).message === "string" &&
    (error as { message: string }).message.length > 0
  );
}

export function applyModelOverride(
  settings: ModelSettings,
  override: NextTurnModelOverride | null,
): ModelSettings {
  return override == null
    ? settings
    : {
        ...settings,
        model: override.model,
        reasoningEffort: override.reasoningEffort,
        profile: override.profile,
      };
}

export function resolveModelSettingsForConfig({
  userSavedModelString,
  userSavedReasoningEffort,
  listModelsData,
}: {
  userSavedModelString: string | null;
  userSavedReasoningEffort: string | null;
  listModelsData: ModelListData | null | undefined;
}): ModelSettings {
  const matchedModel = userSavedModelString
    ? findModelByName(listModelsData?.models, userSavedModelString)
    : (listModelsData?.defaultModel ??
      findModelByName(listModelsData?.models, DEFAULT_MODEL));
  const supportedEfforts = matchedModel?.supportedReasoningEfforts?.map(
    (effort) => effort.reasoningEffort,
  );
  const reasoningEffort =
    userSavedReasoningEffort != null &&
    supportedEfforts != null &&
    supportedEfforts.includes(userSavedReasoningEffort)
      ? userSavedReasoningEffort
      : matchedModel?.defaultReasoningEffort;
  return {
    model: matchedModel
      ? matchedModel.model
      : (userSavedModelString ?? DEFAULT_MODEL),
    reasoningEffort:
      reasoningEffort ??
      userSavedReasoningEffort ??
      listModelsData?.defaultModel?.defaultReasoningEffort ??
      DEFAULT_REASONING_EFFORT,
    profile: null,
    isLoading: false,
  };
}
