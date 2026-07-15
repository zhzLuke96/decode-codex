// Restored from ref/webview/assets/windows-tabs-open-schema-BwIcikV2.js
// Schema for the windows.tabs.open app action.
import * as zodRuntime from "../boundaries/src-l0hb-mz-p";
const {
  srcAa: zString,
  srcJa: zUnion,
  srcKa: zStrictObject,
  srcLa: zEnum,
  srcNa: zUrl,
  srcWa: zNumber,
  srcXa: zLiteral,
} = zodRuntime;

export const currentWindowIdSchema = zLiteral("current");

const windowsTabsOpenRequestSchema = zStrictObject({
  threadId: zString()
    .min(1)
    .optional()
    .describe(
      "Visible thread whose Codex panel should receive the tab. Defaults to the calling thread, which must be visible in the targeted main window.",
    ),
  target: zUnion([
    zStrictObject({
      type: zLiteral("file"),
      path: zString().min(1),
      line: zNumber().int().positive().optional(),
    }),
    zStrictObject({
      type: zLiteral("browser"),
      url: zUrl().optional(),
      tabId: zString().min(1).optional(),
    }),
    zStrictObject({
      type: zLiteral("terminal"),
      sessionId: zString().min(1).optional(),
    }),
    zStrictObject({
      type: zLiteral("review"),
      view: zEnum(["last-turn", "branch", "unstaged", "staged"]).optional(),
      path: zString().min(1).optional(),
    }),
    zStrictObject({
      type: zLiteral("review"),
      baseBranch: zString()
        .min(1)
        .describe(
          "Git revision to compare with HEAD. Must resolve locally to a commit. Selects branch view.",
        ),
      view: zLiteral("branch").optional(),
      path: zString().min(1).optional(),
    }),
  ]),
  placement: zEnum(["right", "bottom"]).optional(),
});
export const windowsTabsOpenActionSchema = windowsTabsOpenRequestSchema.extend({
  type: zLiteral("windows.tabs.open"),
  windowId: currentWindowIdSchema,
});
export function initWindowsTabsOpenSchemaChunk(): void {}
export { windowsTabsOpenRequestSchema };
