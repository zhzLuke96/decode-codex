// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// Model availability, model upgrade, and priority service-tier home announcements.
import React from "react";

import { useModelSettingsController } from "../../composer/use-model-settings";
import { useServiceTier } from "../../composer/use-service-tier";
import { useModelListQuery } from "../../utils/model-queries";
import { useIsHomeAmbientSuggestionsRoute } from "./routes";
import { useLatestModelSeen, useSeenModelUpgradeList } from "./state";

const HIDDEN_MODEL_UPGRADE_ANNOUNCEMENT_MODELS = new Set([
  "gpt-5.4",
  "gpt-5.5",
]);

type ModelListQueryState = {
  data?: {
    models?: unknown;
  };
  isLoading?: boolean;
};

type ModelOption = {
  availabilityNux?: Record<string, unknown> | null;
  defaultReasoningEffort?: string | null;
  model: string;
  serviceTiers?: Array<{
    id?: string | null;
    name?: string | null;
  }>;
  upgrade?: string | null;
  upgradeInfo?: Record<string, unknown> | null;
};

export type ModelAnnouncementContent = Record<string, unknown> & {
  defaultReasoningEffort?: string | null;
  model: string;
};

export type ModelAnnouncementState = {
  announcementContent: ModelAnnouncementContent | null;
  dismissAnnouncement: () => void;
  showAnnouncement: boolean;
};

const noop = () => {};

export function useModelAvailabilityNuxAnnouncement(): ModelAnnouncementState {
  const isHomeRoute = useIsHomeAmbientSuggestionsRoute();
  const { data, isLoading } = useModelListQuery() as ModelListQueryState;
  const [seenModels, setSeenModels] = useSeenModelUpgradeList();
  const candidate = findAvailabilityNuxModel(data?.models, seenModels);
  const content =
    candidate == null ? null : buildAvailabilityNuxContent(candidate);
  const dismissAnnouncement = React.useCallback(() => {
    if (candidate != null) {
      setSeenModels((current) =>
        addUniqueString(current ?? [], candidate.model),
      );
    }
  }, [candidate, setSeenModels]);

  return buildModelAnnouncementState(
    candidate != null && !isLoading && isHomeRoute,
    false,
    content,
    dismissAnnouncement,
  );
}

export function useLatestModelUpgradeAnnouncement(): ModelAnnouncementState {
  const isHomeRoute = useIsHomeAmbientSuggestionsRoute();
  const { modelSettings } = useModelSettingsController();
  const { data } = useModelListQuery() as ModelListQueryState;
  const [seenModels, setSeenModels] = useSeenModelUpgradeList();
  const [latestModelSeen, setLatestModelSeen] = useLatestModelSeen();

  React.useEffect(() => {
    if (latestModelSeen == null) return;
    setSeenModels((current) => addUniqueString(current ?? [], latestModelSeen));
    setLatestModelSeen(null);
  }, [latestModelSeen, setLatestModelSeen, setSeenModels]);

  const models = getModelOptions(data?.models);
  const currentModel = findModelById(models, modelSettings.model);
  const upgradeModelId = currentModel?.upgrade ?? null;
  const upgradeModel =
    upgradeModelId == null ? null : findModelById(models, upgradeModelId);
  const normalizedSeenModels =
    latestModelSeen == null
      ? seenModels
      : addUniqueString(seenModels, latestModelSeen);
  const hasSeenUpgrade =
    upgradeModelId != null && normalizedSeenModels.includes(upgradeModelId);
  const content =
    currentModel?.upgradeInfo == null || upgradeModel == null
      ? null
      : {
          ...currentModel.upgradeInfo,
          defaultReasoningEffort: upgradeModel.defaultReasoningEffort,
          model: upgradeModel.model,
        };
  const shouldSuppressUpgradeModel =
    upgradeModel != null &&
    HIDDEN_MODEL_UPGRADE_ANNOUNCEMENT_MODELS.has(upgradeModel.model);
  const dismissAnnouncement = React.useCallback(() => {
    if (upgradeModelId != null) {
      setSeenModels((current) =>
        addUniqueString(current ?? [], upgradeModelId),
      );
      setLatestModelSeen(null);
    }
  }, [setLatestModelSeen, setSeenModels, upgradeModelId]);

  return buildModelAnnouncementState(
    upgradeModelId != null &&
      !modelSettings.isLoading &&
      upgradeModel != null &&
      !shouldSuppressUpgradeModel &&
      isHomeRoute,
    hasSeenUpgrade,
    content,
    dismissAnnouncement,
  );
}

export function usePriorityServiceTierAnnouncement(): ModelAnnouncementState {
  const isHomeRoute = useIsHomeAmbientSuggestionsRoute();
  const { isServiceTierAllowed } = useServiceTier();
  const { modelSettings } = useModelSettingsController();
  const { data } = useModelListQuery() as ModelListQueryState;
  const [seenModels] = useSeenModelUpgradeList();
  const models = getModelOptions(data?.models);
  const currentModel = findModelById(models, modelSettings.model);
  const currentModelSupportsPriority = modelSupportsServiceTier(
    currentModel,
    "priority",
  );
  const priorSeenPriorityModel =
    models.find(
      (model) =>
        modelSupportsServiceTier(model, "priority") &&
        seenModels.includes(model.model),
    ) ?? null;
  const announcementModel = currentModelSupportsPriority
    ? (currentModel ?? priorSeenPriorityModel)
    : priorSeenPriorityModel;
  const content =
    announcementModel == null ? null : { model: announcementModel.model };

  return buildModelAnnouncementState(
    isServiceTierAllowed &&
      !modelSettings.isLoading &&
      isHomeRoute &&
      announcementModel != null,
    false,
    content,
    noop,
  );
}

export function initModelUpgradeAnnouncementStateChunk(): void {}

function buildModelAnnouncementState(
  canShow: boolean,
  hasSeen: boolean,
  announcementContent: ModelAnnouncementContent | null,
  dismissAnnouncement: () => void,
): ModelAnnouncementState {
  return {
    announcementContent,
    dismissAnnouncement,
    showAnnouncement: canShow && !hasSeen,
  };
}

function addUniqueString(values: readonly string[], value: string): string[] {
  return values.includes(value) ? [...values] : [...values, value];
}

function findAvailabilityNuxModel(
  models: unknown,
  seenModels: readonly string[],
): ModelOption | null {
  return (
    getModelOptions(models).find(
      (model) =>
        model.availabilityNux != null &&
        !HIDDEN_MODEL_UPGRADE_ANNOUNCEMENT_MODELS.has(model.model) &&
        !seenModels.includes(model.model),
    ) ?? null
  );
}

function buildAvailabilityNuxContent(
  model: ModelOption,
): ModelAnnouncementContent {
  return {
    defaultReasoningEffort: model.defaultReasoningEffort,
    ...model.availabilityNux,
    model: model.model,
  };
}

function modelSupportsServiceTier(
  model: ModelOption | null | undefined,
  serviceTier: string,
): boolean {
  return (
    serviceTier != null &&
    (model?.serviceTiers?.some((tier) => tier.id === serviceTier) ?? false)
  );
}

export function findModelById(
  models: readonly ModelOption[],
  modelId: string,
): ModelOption | null {
  return models.find((model) => model.model === modelId) ?? null;
}

export function findModelByIdOrUndefined(
  models: readonly ModelOption[] | null | undefined,
  modelId: string,
): ModelOption | undefined {
  return models?.find((model) => model.model === modelId);
}

function getModelOptions(models: unknown): ModelOption[] {
  return Array.isArray(models)
    ? models.filter(isModelOption).map((model) => model)
    : [];
}

function isModelOption(model: unknown): model is ModelOption {
  return (
    model != null &&
    typeof model === "object" &&
    typeof (model as { model?: unknown }).model === "string"
  );
}
