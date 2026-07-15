// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Default model and reasoning-effort settings for scheduled tasks.

import { once } from "../../runtime/commonjs-interop";

export const DEFAULT_AUTOMATION_MODEL = "gpt-5.5";
export const DEFAULT_AUTOMATION_REASONING_EFFORT = "medium";

export const AUTOMATION_REASONING_EFFORT_OPTIONS = [
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
] as const;

export type AutomationReasoningEffort =
  | "none"
  | (typeof AUTOMATION_REASONING_EFFORT_OPTIONS)[number];

export function isAutomationReasoningEffort(
  value: unknown,
): value is AutomationReasoningEffort {
  return (
    value === "none" ||
    AUTOMATION_REASONING_EFFORT_OPTIONS.includes(
      value as (typeof AUTOMATION_REASONING_EFFORT_OPTIONS)[number],
    )
  );
}

export const initAutomationModelDefaultsChunk = once(() => {});
