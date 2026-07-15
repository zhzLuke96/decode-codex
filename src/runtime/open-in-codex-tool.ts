// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Agent tool that opens a workspace file, browser tab, terminal, or review in a
// Codex panel of the most recently focused main window (windows.tabs.open).

import {
  createJsonSchemaParser,
  zodToJsonSchema,
} from "../boundaries/src-l0hb-mz-p";
import { runAppActionInPrimaryWindow } from "./run-app-action-in-primary-window";
import { windowsTabsOpenRequestSchema as openCodexTabArgumentsSchema } from "./windows-tabs-open-schema";
import { createToolErrorResult } from "./tool-result-runtime";

export const OPEN_IN_CODEX_TOOL_NAME = "open_in_codex";

type ToolInvocation = {
  argumentsValue: unknown;
  hostId: string;
  threadId: string;
};

export const openInCodexTool = {
  name: OPEN_IN_CODEX_TOOL_NAME,
  description:
    "Show a workspace file, browser tab, terminal, or review in a Codex panel. The most recently focused main window is targeted. threadId defaults to the calling thread, and the selected thread must be visible in that window. Use this after creating or editing an artifact when showing the result would help the user. Terminals require a local thread. This only opens Codex UI; use file, browser, or terminal tools to inspect or interact with the content.",
  inputSchema: createJsonSchemaParser().parse(
    zodToJsonSchema(openCodexTabArgumentsSchema),
  ),
};

export function initOpenInCodexToolChunk(): void {
  void openInCodexTool;
  void openInCodex;
}

export async function openInCodex({
  argumentsValue,
  hostId,
  threadId,
}: ToolInvocation) {
  const parsedArguments = openCodexTabArgumentsSchema.safeParse(argumentsValue);
  if (!parsedArguments.success) {
    return createToolErrorResult(
      `${OPEN_IN_CODEX_TOOL_NAME} received invalid arguments.`,
    );
  }
  try {
    const result = await runAppActionInPrimaryWindow(
      {
        type: "windows.tabs.open",
        windowId: "current",
        ...parsedArguments.data,
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
          text: JSON.stringify(result),
        },
      ],
      success: true,
    };
  } catch (error) {
    return createToolErrorResult(
      error instanceof Error ? error.message : "Failed to open Codex tab.",
    );
  }
}
