// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Registry accessors used to resolve a task's plugin name and task-picker
// option metadata.
import type {
  ConversationalOnboardingPluginName,
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskOption,
} from "./conversational-onboarding-task-definitions";
import { conversationalOnboardingTaskDefinitions } from "./conversational-onboarding-task-definitions";

export type {
  ConversationalOnboardingMessagingTask,
  ConversationalOnboardingPluginName,
  ConversationalOnboardingTaskBase,
  ConversationalOnboardingTaskDefinition,
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskOption,
} from "./conversational-onboarding-task-definitions";

export function getConversationalOnboardingTaskPluginName(
  task: ConversationalOnboardingTaskId,
  accountType: string,
): ConversationalOnboardingPluginName | null {
  const definition = conversationalOnboardingTaskDefinitions[task];
  return "getPluginName" in definition
    ? definition.getPluginName(accountType)
    : null;
}

export function getConversationalOnboardingTaskOption(
  task: ConversationalOnboardingTaskId,
): ConversationalOnboardingTaskOption {
  return conversationalOnboardingTaskDefinitions[task].option;
}

export function isConversationalOnboardingMessagingTask(
  task: ConversationalOnboardingTaskId,
): boolean {
  return "getPluginName" in conversationalOnboardingTaskDefinitions[task];
}

export function initConversationalOnboardingTaskRegistryChunk(): void {
  void conversationalOnboardingTaskDefinitions;
}
