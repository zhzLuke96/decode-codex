// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact trigger that opens the intelligence dropdown for an automation's
// model and reasoning-effort selection.
import type { ReactElement } from "react";
import { useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import { ChevronIcon } from "../icons/chevron-icon";
import { isReasoningEffort } from "../utils/models-and-reasoning-efforts";
import {
  resolveReasoningEffort,
  useModelsQuery,
} from "../boundaries/automation-editor-deps.facade";
import { ModelLabel } from "../composer/model-label";
import {
  ReasoningEffortLabel,
  REASONING_EFFORT_LABELS,
} from "../composer/reasoning-effort-label";
import { IntelligenceDropdown } from "../composer/intelligence-dropdown";

export interface AutomationModelReasoningDropdownProps {
  selectedModel?: string;
  reasoningEffort: string;
  align?: "start" | "center" | "end";
  className?: string;
  onSelect: (model: string, reasoningEffort: string) => void;
}

export function AutomationModelReasoningDropdown({
  selectedModel = "",
  reasoningEffort,
  align = "start",
  className,
  onSelect,
}: AutomationModelReasoningDropdownProps): ReactElement {
  const intl = useIntl();
  const { data } = useModelsQuery({ includeUltraReasoningEffort: false });

  const selectedModelOption =
    data?.models?.find((option) => option.model === selectedModel) ?? null;
  const candidateEffort = resolveReasoningEffort({
    model: selectedModelOption,
    reasoningEffort,
  });
  const resolvedEffort =
    candidateEffort != null && isReasoningEffort(candidateEffort)
      ? candidateEffort
      : null;

  const isDisabled = selectedModel == null || data?.models == null;
  const models = data?.models;

  const ariaLabel = intl.formatMessage({
    id: "settings.automations.modelAndReasoning.ariaLabel",
    defaultMessage: "Model and reasoning",
    description: "Aria label for automation model and reasoning dropdown",
  });

  const modelLabel =
    selectedModel != null && selectedModel.trim().length > 0 ? (
      <ModelLabel
        model={selectedModel}
        displayName={selectedModelOption?.displayName ?? selectedModel}
        labelClassName="text-token-foreground"
      />
    ) : (
      <span className="truncate text-token-foreground">
        {intl.formatMessage({
          id: "settings.automations.model.loading",
          defaultMessage: "Loading model",
          description:
            "Fallback label while automation model options are loading",
        })}
      </span>
    );

  const effortLabel =
    resolvedEffort == null ? null : (
      <span className="shrink-0 text-token-description-foreground">
        <ReasoningEffortLabel
          effort={resolvedEffort as keyof typeof REASONING_EFFORT_LABELS}
        />
      </span>
    );

  const triggerButton = (
    <Button
      aria-label={ariaLabel}
      size="composerSm"
      color="ghost"
      className={classNames("min-w-0", className)}
    >
      <span className="flex max-w-48 min-w-0 items-center gap-1.5 text-left">
        {modelLabel}
        {effortLabel}
      </span>
      <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
    </Button>
  );

  return (
    <IntelligenceDropdown
      align={align}
      disabled={isDisabled}
      model={selectedModel}
      models={models}
      reasoningEffort={resolvedEffort ?? ""}
      onSelectModel={onSelect}
      onSelectReasoningEffort={(effort) => {
        if (selectedModel != null) {
          onSelect(selectedModel, effort);
        }
      }}
      triggerButton={triggerButton}
    />
  );
}
