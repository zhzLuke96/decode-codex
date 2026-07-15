// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Shared helpers for app/tool-call result payloads.

export type ToolResultContentItem = {
  text: string;
  type: "inputText";
};

export type ToolErrorResult = {
  contentItems: ToolResultContentItem[];
  success: false;
};

export function createToolErrorResult(message: string): ToolErrorResult {
  return {
    contentItems: [{ type: "inputText", text: message }],
    success: false,
  };
}
