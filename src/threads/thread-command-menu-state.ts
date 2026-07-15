// Restored from ref/webview/assets/app-initial~app-main~local-conversation-page-D-F_r9ay.js
// Shared thread command-menu state and sentinel item values.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";

export type ThreadCommandMenuMode = "root" | "files";

export const FIRST_FILE_COMMAND_MENU_ITEM_VALUE =
  "command-menu-first-file-item";
export const FIRST_CHAT_COMMAND_MENU_ITEM_VALUE =
  "command-menu-first-chat-item";

export const threadCommandMenuModeSignal = createAppScopeSignal(
  appScopeRoot,
  "root" as ThreadCommandMenuMode,
);

export function initThreadCommandMenuStateChunk(): void {}
