// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure model-option helpers shared by the composer and automation editor.

import {
  DEFAULT_REASONING_EFFORT,
  isReasoningEffort,
} from "../utils/models-and-reasoning-efforts";

export interface ReasoningEffortOption {
  description: string;
  reasoningEffort: string;
}

export interface ModelOptionForHelpers {
  defaultReasoningEffort?: string | null;
  displayName?: string | null;
  model: string;
  serviceTiers?: readonly { id?: string | null; [key: string]: unknown }[];
  supportedReasoningEfforts?: readonly ReasoningEffortOption[];
  [key: string]: unknown;
}

export function coerceReasoningEffort(
  reasoningEffort: string,
  allowedReasoningEfforts: readonly string[],
): string {
  return isReasoningEffort(reasoningEffort) &&
    allowedReasoningEfforts.includes(reasoningEffort)
    ? reasoningEffort
    : DEFAULT_REASONING_EFFORT;
}

export function resolveReasoningEffort({
  model,
  reasoningEffort,
}: {
  model: ModelOptionForHelpers | null | undefined;
  reasoningEffort: string | null | undefined;
}): string | null | undefined {
  return reasoningEffort != null &&
    model?.supportedReasoningEfforts?.some(
      (option) => option.reasoningEffort === reasoningEffort,
    )
    ? reasoningEffort
    : model?.defaultReasoningEffort;
}

export function modelSupportsServiceTier(
  model: ModelOptionForHelpers | null | undefined,
  serviceTier: string | null | undefined,
): boolean {
  return (
    serviceTier != null &&
    (model?.serviceTiers?.some((tier) => tier.id === serviceTier) ?? false)
  );
}

export function isVerboseModelDescriptionLocale(locale: string): boolean {
  const normalized = normalizeLocale(locale);
  return normalized == null
    ? false
    : normalized === "en" || normalized.startsWith("en-");
}

export function normalizeModelDisplayName(displayName: string): string {
  return displayName.trimStart().toLowerCase().startsWith("gpt")
    ? displayName
        .split(/(\s+)/)
        .map((part) =>
          part.trim().length === 0
            ? part
            : part
                .split("-")
                .map((token, index) =>
                  token.toLowerCase() === "gpt"
                    ? "GPT"
                    : token.toLowerCase() === "oai"
                      ? "OAI"
                      : index > 0 && token.length > 0
                        ? `${token[0]?.toUpperCase() ?? ""}${token.slice(1)}`
                        : token,
                )
                .join("-"),
        )
        .join("")
    : displayName;
}

function normalizeLocale(locale: string | null | undefined): string | null {
  if (!locale) return null;
  const trimmed = locale.trim();
  return trimmed ? trimmed.replace(/_/g, "-").toLowerCase() : null;
}
