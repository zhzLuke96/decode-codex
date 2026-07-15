// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Signal placeholder for the active conversation process row selector.
import {
  _appScopeC as createAppScopeSelector,
  appScopeRoot,
} from "../../boundaries/app-scope";

import type { ConversationProcessRow } from "./types";

export const conversationProcessRowsSignal = createAppScopeSelector(
  appScopeRoot,
  () => [] as ConversationProcessRow[],
);

export function initActiveConversationProcessRowsChunk() {}
