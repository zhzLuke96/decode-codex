// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Agent tool that navigates the most recently focused main Codex window to a
// thread (windows.show_thread app action).

import {
  createJsonSchemaParser,
  zodToJsonSchema,
  zStrictObject,
  zString,
} from "../boundaries/src-l0hb-mz-p";
import { runAppActionInPrimaryWindow } from "./run-app-action-in-primary-window";
import { createToolErrorResult } from "./tool-result-runtime";

export const NAVIGATE_TO_CODEX_PAGE_TOOL_NAME = "navigate_to_codex_page";

type NavigateToCodexPageArguments = {
  threadId: string;
};

type ToolInvocation = {
  argumentsValue: unknown;
  hostId: string;
  threadId: string;
};

const navigateToCodexPageArgumentsSchema = zStrictObject({
  threadId: zString().min(1).describe("Thread id to show in Codex."),
});

export const navigateToCodexPageTool = {
  name: NAVIGATE_TO_CODEX_PAGE_TOOL_NAME,
  description:
    "Navigate the most recently focused main Codex window to a thread. Use this when the user asks to open or show a Codex thread in the app.",
  inputSchema: createJsonSchemaParser().parse(
    zodToJsonSchema(navigateToCodexPageArgumentsSchema),
  ),
};

export function initNavigateToCodexPageToolChunk(): void {
  void navigateToCodexPageTool;
  void navigateToCodexPage;
}

export async function navigateToCodexPage({
  argumentsValue,
  hostId,
  threadId,
}: ToolInvocation) {
  const parsedArguments =
    navigateToCodexPageArgumentsSchema.safeParse(argumentsValue);
  if (!parsedArguments.success) {
    return createToolErrorResult(
      `${NAVIGATE_TO_CODEX_PAGE_TOOL_NAME} received invalid arguments.`,
    );
  }
  try {
    await runAppActionInPrimaryWindow(
      {
        type: "windows.show_thread",
        windowId: "current",
        threadId: (parsedArguments.data as NavigateToCodexPageArguments)
          .threadId,
      },
      {
        sourceHostId: hostId,
        sourceThreadId: threadId,
      },
    );
    return {
      contentItems: [
        {
          type: "inputText",
          text: JSON.stringify({ navigated: true }),
        },
      ],
      success: true,
    };
  } catch (error) {
    return createToolErrorResult(
      error instanceof Error ? error.message : "Failed to navigate Codex.",
    );
  }
}
