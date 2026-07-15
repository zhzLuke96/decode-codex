// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Current conversational-onboarding plugin task output acceptance. These tasks
// report text plus a URL and track execution completion when accepted.

import * as zodRuntime from "../boundaries/src-l0hb-mz-p";
import { trackConversationalOnboardingExecutionCompleted } from "./conversational-onboarding-analytics";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

const { srcAa: zString, srcKa: zStrictObject, srcXa: zLiteral } = zodRuntime;

export type ConversationalOnboardingPluginTaskOutput = {
  outputType: "text";
  output: string;
  url: string;
};

type ConversationalOnboardingPluginTaskSelection = {
  selectedTask: ConversationalOnboardingTaskId;
};

type ProductLoggerScope = Parameters<
  typeof trackConversationalOnboardingExecutionCompleted
>[0];

type ContentItem = {
  type: string;
  text?: string;
};

const pluginTaskOutputSchema = zStrictObject({
  outputType: zLiteral("text"),
  output: zString()
    .trim()
    .min(1)
    .describe(
      "For calendar tasks, the formatted date and time that was held. For messaging tasks, a short confirmation.",
    ),
  url: zString()
    .url()
    .describe("The URL of the created calendar event or sent message."),
});

const acceptedPluginTaskOutputSchema = zStrictObject({
  accepted: zLiteral(true),
  result: pluginTaskOutputSchema,
});

const taskSelectionByConversationId = new Map<
  string,
  ConversationalOnboardingPluginTaskSelection
>();
const completedConversationIds = new Set<string>();

export function initConversationalOnboardingPluginTaskOutputChunk(): void {}

export function registerConversationalOnboardingPluginTaskOutput(
  conversationId: string,
  selection: ConversationalOnboardingPluginTaskSelection,
): void {
  taskSelectionByConversationId.set(conversationId, selection);
}

export function cancelConversationalOnboardingPluginTaskOutput(
  conversationId: string,
): void {
  taskSelectionByConversationId.delete(conversationId);
  completedConversationIds.add(conversationId);
}

export function acceptConversationalOnboardingPluginTaskOutput({
  argumentsValue,
  conversationId,
  scope,
}: {
  argumentsValue: unknown;
  conversationId: string;
  scope: ProductLoggerScope;
}): ConversationalOnboardingPluginTaskOutput | null {
  const accepted = readConversationalOnboardingPluginTaskOutput({
    argumentsValue,
    conversationId,
  });
  if (accepted == null) return null;
  trackConversationalOnboardingExecutionCompleted(scope, accepted.selectedTask);
  return accepted.completion;
}

function readConversationalOnboardingPluginTaskOutput({
  argumentsValue,
  conversationId,
}: {
  argumentsValue: unknown;
  conversationId: string;
}): {
  completion: ConversationalOnboardingPluginTaskOutput;
  selectedTask: ConversationalOnboardingTaskId;
} | null {
  if (completedConversationIds.has(conversationId)) return null;

  const selection = taskSelectionByConversationId.get(conversationId);
  if (selection == null) return null;

  const parsedOutput = pluginTaskOutputSchema.safeParse(argumentsValue);
  if (!parsedOutput.success) return null;

  taskSelectionByConversationId.delete(conversationId);
  completedConversationIds.add(conversationId);
  return {
    completion: parsedOutput.data as ConversationalOnboardingPluginTaskOutput,
    selectedTask: selection.selectedTask,
  };
}

export function parseAcceptedConversationalOnboardingPluginTaskResult(
  contentItems: ContentItem[] | null | undefined,
): ConversationalOnboardingPluginTaskOutput | null {
  const inputText = contentItems?.find(
    (item) => item.type === "inputText",
  )?.text;
  if (inputText == null) return null;
  try {
    const parsedJson = JSON.parse(inputText) as unknown;
    const acceptedResult = acceptedPluginTaskOutputSchema.safeParse(parsedJson);
    return acceptedResult.success
      ? (acceptedResult.data.result as ConversationalOnboardingPluginTaskOutput)
      : null;
  } catch {
    return null;
  }
}
