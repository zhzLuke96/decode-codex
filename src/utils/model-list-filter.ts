// Restored from ref/webview/assets/model-list-filter-BOpqDcyc.js
// model-list-filter-BOpqDcyc chunk restored from the Codex webview bundle.
import { isReasoningEffort } from "./models-and-reasoning-efforts";

type ReasoningEffort = {
  reasoningEffort: string;
  description: string;
};

type ModelListItem = {
  model: string;
  hidden?: boolean;
  isDefault?: boolean;
  supportedReasoningEfforts: ReasoningEffort[];
  [key: string]: unknown;
};

type ModelListFilterOptions = {
  authMethod: string;
  availableModels: Set<string>;
  defaultModel: string;
  enabledReasoningEfforts?: ReadonlySet<string> | readonly string[] | null;
  includeUltraReasoningEffort?: boolean;
  models: ModelListItem[];
  useHiddenModels: boolean;
};

type ModelListFilterResult = {
  models: ModelListItem[];
  defaultModel: ModelListItem | null;
  hasModelSupportingMaxReasoningEffort: boolean;
  hasModelSupportingUltraReasoningEffort: boolean;
};

const COPILOT_DEFAULT_REASONING_EFFORT: ReasoningEffort = {
  reasoningEffort: "medium",
  description: "medium effort",
};

function normalizeEnabledReasoningEfforts(
  enabledReasoningEfforts:
    | ReadonlySet<string>
    | readonly string[]
    | null
    | undefined,
): ReadonlySet<string> | null {
  if (enabledReasoningEfforts == null) return null;
  return enabledReasoningEfforts instanceof Set
    ? enabledReasoningEfforts
    : new Set(enabledReasoningEfforts);
}

export function modelListFilter({
  authMethod,
  availableModels,
  defaultModel,
  enabledReasoningEfforts,
  includeUltraReasoningEffort = true,
  models,
  useHiddenModels,
}: ModelListFilterOptions): ModelListFilterResult {
  const filteredModels: ModelListItem[] = [];
  let selectedDefaultModel: ModelListItem | null = null;
  const shouldUseHiddenModels =
    useHiddenModels && authMethod !== "amazonBedrock";
  const enabledReasoningEffortSet = normalizeEnabledReasoningEfforts(
    enabledReasoningEfforts,
  );
  const hasModelSupportingMaxReasoningEffort = models.some((model) =>
    model.supportedReasoningEfforts.some(
      (effort) => effort.reasoningEffort === "max",
    ),
  );
  const hasModelSupportingUltraReasoningEffort =
    includeUltraReasoningEffort &&
    models.some((model) =>
      model.supportedReasoningEfforts.some(
        (effort) => effort.reasoningEffort === "ultra",
      ),
    );

  models.forEach((model) => {
    const isVisible = shouldUseHiddenModels
      ? availableModels.has(model.model)
      : !model.hidden;
    if (!isVisible) return;

    const sourceReasoningEfforts = includeUltraReasoningEffort
      ? model.supportedReasoningEfforts
      : model.supportedReasoningEfforts.filter(
          (effort) => effort.reasoningEffort !== "ultra",
        );
    const supportedReasoningEfforts = (
      authMethod === "copilot"
        ? [
            sourceReasoningEfforts.find(
              (effort) => effort.reasoningEffort === "medium",
            ) ?? COPILOT_DEFAULT_REASONING_EFFORT,
          ]
        : sourceReasoningEfforts
    ).filter(
      (effort) =>
        isReasoningEffort(effort.reasoningEffort) &&
        (enabledReasoningEffortSet == null ||
          enabledReasoningEffortSet.has(effort.reasoningEffort)),
    );

    const filteredModel = {
      ...model,
      supportedReasoningEfforts,
    };
    filteredModels.push(filteredModel);
    if (model.isDefault) selectedDefaultModel = filteredModel;
  });

  selectedDefaultModel ??=
    filteredModels.find((model) => model.model === defaultModel) ?? null;

  return {
    models: filteredModels,
    defaultModel: selectedDefaultModel,
    hasModelSupportingMaxReasoningEffort,
    hasModelSupportingUltraReasoningEffort,
  };
}
