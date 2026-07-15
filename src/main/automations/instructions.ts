// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Automation prompt and collaboration-mode instruction helpers.

import { HEARTBEAT_AUTOMATION_PROMPT_TEMPLATE } from "./constants";
import type {
  AutomationLike,
  CollaborationModeWithSettings,
  DeveloperInstructionWrapper,
} from "./types";

export function createHeartbeatAutomationPrompt({
  automation,
  now = new Date(),
}: {
  automation: Pick<AutomationLike, "id" | "prompt">;
  now?: Date;
}): string {
  return HEARTBEAT_AUTOMATION_PROMPT_TEMPLATE.replaceAll(
    "{{AUTOMATION_ID}}",
    automation.id,
  )
    .replaceAll("{{NOW_ISO}}", now.toISOString())
    .replaceAll("{{AUTOMATION_PROMPT}}", automation.prompt);
}

export function addAutomationDeveloperInstructions<
  Mode extends CollaborationModeWithSettings,
>(
  collaborationMode: Mode | null,
  wrapDeveloperInstructions: DeveloperInstructionWrapper,
): Mode | null {
  if (collaborationMode == null) return null;
  return {
    ...collaborationMode,
    settings: {
      ...collaborationMode.settings,
      developer_instructions: wrapDeveloperInstructions({
        baseInstructions: collaborationMode.settings.developer_instructions,
      }),
    },
  };
}
