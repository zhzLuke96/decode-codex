// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Shared Google Workspace resource types.

export type GoogleWorkspaceResourceKind =
  | "document"
  | "spreadsheet"
  | "presentation";

export type GoogleWorkspaceAnalyticsContext = {
  threadId?: string | null;
  turnId?: string | null;
  inputMessageId?: string | null;
  messageId?: string | null;
};
