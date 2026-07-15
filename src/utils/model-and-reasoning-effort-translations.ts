// Restored from ref/webview/assets/model-and-reasoning-effort-translations-sQEAV-BY.js
// model-and-reasoning-effort-translations-sQEAV-BY chunk restored from the Codex webview bundle.
import React from "react";
import { FormattedMessage } from "react-intl";
type ReasoningEffort =
  | "none"
  | "minimal"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "max";
const REASONING_EFFORT_MESSAGES: Record<
  ReasoningEffort,
  {
    id: string;
    defaultMessage: string;
    description: string;
  }
> = {
  none: {
    id: "composer.mode.local.reasoning.none.label",
    defaultMessage: "None",
    description: "Reasoning effort label for a given model: none",
  },
  minimal: {
    id: "composer.mode.local.reasoning.minimal.label",
    defaultMessage: "Minimal",
    description: "Reasoning effort label for a given model: minimal",
  },
  low: {
    id: "composer.mode.local.reasoning.low.label",
    defaultMessage: "Low",
    description: "Reasoning effort label for a given model: low",
  },
  medium: {
    id: "composer.mode.local.reasoning.medium.label",
    defaultMessage: "Medium",
    description: "Reasoning effort label for a given model: medium",
  },
  high: {
    id: "composer.mode.local.reasoning.high.label",
    defaultMessage: "High",
    description: "Reasoning effort label for a given model: high",
  },
  xhigh: {
    id: "composer.mode.local.reasoning.xhigh.label",
    defaultMessage: "Extra High",
    description: "Reasoning effort label for a given model: extra high",
  },
  max: {
    id: "composer.mode.local.reasoning.max.label",
    defaultMessage: "Max",
    description: "Reasoning effort label for a given model: maximum",
  },
};
export function ModelAndReasoningEffortTranslations({
  effort,
}: {
  effort: ReasoningEffort;
}) {
  const message = REASONING_EFFORT_MESSAGES[effort];
  if (!message) return undefined;
  return React.createElement(FormattedMessage, message);
}
