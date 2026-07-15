// Restored from ref/webview/assets/run-app-action-in-primary-window-Dxpy-IOL.js
import { posix as posixPath } from "node:path";
import { appServices, normalizeFilesystemPath } from "../boundaries/rpc.facade";
import * as zodRuntime from "../boundaries/src-l0hb-mz-p";
export type ConversationalOnboardingTaskOutput = {
  outputType: "file" | "text";
  output: string;
};
type ExpectedConversationalOnboardingOutput =
  | {
      outputType: "text";
    }
  | {
      outputType: "file";
      approvedRoot: string;
      fileExtension: string;
    };
type CanonicalPathMetadata = {
  canonicalPath: string;
  isDirectory: boolean;
  isFile: boolean;
};
type ContentItem = {
  type: string;
  text?: string;
};
type RunAppActionOptions = {
  sourceHostId?: string;
  sourceThreadId?: string;
};
const {
  srcAa: zString,
  srcBa: createJsonSchemaParser,
  srcIa: zodToJsonSchema,
  srcKa: zStrictObject,
  srcLa: zEnum,
  srcMr: isAbsolutePath,
  srcXa: zLiteral,
} = zodRuntime;
export const COMPLETE_CONVERSATIONAL_ONBOARDING_TASK_NAME =
  "complete_conversational_onboarding_task";
export const NAVIGATE_TO_CODEX_PAGE_TOOL_NAME = "navigate_to_codex_page";
export const OPEN_IN_CODEX_TOOL_NAME = "open_in_codex";
const conversationalOnboardingTaskOutputSchema = zStrictObject({
  outputType: zEnum(["file", "text"]).describe(
    "Whether the result is a local file or a text answer.",
  ),
  output: zString()
    .trim()
    .min(1)
    .describe(
      "The absolute local file path for file results, or the concise answer for text results.",
    ),
}).refine(
  ({ output, outputType }: ConversationalOnboardingTaskOutput) =>
    outputType === "text" || isAbsolutePath(output),
  {
    message: "File output must be an absolute path.",
    path: ["output"],
  },
);
const acceptedConversationalOnboardingTaskSchema = zStrictObject({
  accepted: zLiteral(true),
  result: conversationalOnboardingTaskOutputSchema,
});
const expectedOutputByConversationId = new Map<
  string,
  ExpectedConversationalOnboardingOutput
>();
const validatingConversationIds = new Set<string>();
const completedConversationIds = new Set<string>();
export const completeConversationalOnboardingTaskTool = {
  name: COMPLETE_CONVERSATIONAL_ONBOARDING_TASK_NAME,
  description:
    "Report the completed conversational onboarding task before the final response. Use file with the absolute path for a created local file, or text with the concise answer for a calendar or messaging task.",
  inputSchema: createJsonSchemaParser().parse(
    zodToJsonSchema(conversationalOnboardingTaskOutputSchema),
  ),
};
export function initRunAppActionInPrimaryWindowRuntime(): void {}

export function initNavigateToCodexPageToolRuntime(): void {}

export function initConversationalOnboardingTaskOutputRuntime(): void {}

export function initOpenInCodexToolRuntime(): void {}

export function registerConversationalOnboardingTaskOutput(
  conversationId: string,
  expectedOutput: ExpectedConversationalOnboardingOutput,
): void {
  expectedOutputByConversationId.set(conversationId, expectedOutput);
}
export function cancelConversationalOnboardingTaskOutput(
  conversationId: string,
): void {
  expectedOutputByConversationId.delete(conversationId);
  completedConversationIds.add(conversationId);
}
export async function acceptConversationalOnboardingTaskOutput({
  argumentsValue,
  conversationId,
  getCanonicalPathMetadata,
}: {
  argumentsValue: unknown;
  conversationId: string;
  getCanonicalPathMetadata(input: {
    path: string;
  }): Promise<CanonicalPathMetadata>;
}): Promise<ConversationalOnboardingTaskOutput | null> {
  if (completedConversationIds.has(conversationId)) return null;
  const expectedOutput = expectedOutputByConversationId.get(conversationId);
  if (expectedOutput == null || validatingConversationIds.has(conversationId)) {
    return null;
  }
  const parsedOutput =
    conversationalOnboardingTaskOutputSchema.safeParse(argumentsValue);
  if (
    !parsedOutput.success ||
    parsedOutput.data.outputType !== expectedOutput.outputType
  ) {
    return null;
  }
  validatingConversationIds.add(conversationId);
  try {
    let acceptedOutput =
      parsedOutput.data as ConversationalOnboardingTaskOutput;
    if (expectedOutput.outputType === "file") {
      const metadata = await Promise.all([
        getCanonicalPathMetadata({
          path: acceptedOutput.output,
        }),
        getCanonicalPathMetadata({
          path: expectedOutput.approvedRoot,
        }),
      ]).catch(() => null);
      if (metadata == null) return null;
      const [outputMetadata, approvedRootMetadata] = metadata;
      const normalizedOutputPath = normalizeFilesystemPath(
        outputMetadata.canonicalPath,
      );
      const normalizedApprovedRoot = normalizeFilesystemPath(
        approvedRootMetadata.canonicalPath,
      );
      if (
        !outputMetadata.isFile ||
        !approvedRootMetadata.isDirectory ||
        normalizePosixDirectory(posixPath.dirname(normalizedOutputPath)) !==
          normalizePosixDirectory(normalizedApprovedRoot) ||
        posixPath.extname(normalizedOutputPath).toLowerCase() !==
          expectedOutput.fileExtension
      ) {
        return null;
      }
      acceptedOutput = {
        outputType: "file",
        output: outputMetadata.canonicalPath,
      };
    }
    if (expectedOutputByConversationId.get(conversationId) !== expectedOutput) {
      return null;
    }
    expectedOutputByConversationId.delete(conversationId);
    completedConversationIds.add(conversationId);
    return acceptedOutput;
  } finally {
    validatingConversationIds.delete(conversationId);
  }
}
export function parseAcceptedConversationalOnboardingTaskResult(
  contentItems: ContentItem[] | null | undefined,
): ConversationalOnboardingTaskOutput | null {
  const inputText = contentItems?.find(
    (item) => item.type === "inputText",
  )?.text;
  if (inputText == null) return null;
  try {
    const parsedJson = JSON.parse(inputText) as unknown;
    const acceptedResult =
      acceptedConversationalOnboardingTaskSchema.safeParse(parsedJson);
    return acceptedResult.success
      ? (acceptedResult.data.result as ConversationalOnboardingTaskOutput)
      : null;
  } catch {
    return null;
  }
}
function normalizePosixDirectory(directoryPath: string): string {
  const normalizedPath = posixPath.normalize(directoryPath);
  return /^[A-Za-z]:$/.test(normalizedPath)
    ? `${normalizedPath}/`
    : normalizedPath;
}
export function runAppActionInPrimaryWindow(
  action: unknown,
  { sourceHostId, sourceThreadId }: RunAppActionOptions = {},
): Promise<unknown> {
  const appActions = appServices.appActions;
  if (appActions == null) {
    throw Error("App actions are unavailable in this host");
  }
  return appActions.runInPrimaryWindow({
    action,
    sourceHostId,
    sourceThreadId,
  });
}
