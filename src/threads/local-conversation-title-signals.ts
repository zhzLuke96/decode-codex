// Restored from ref/webview/assets/local-conversation-title-signals-ChKPHE0E.js
// local-conversation-title-signals-ChKPHE0E chunk restored from the Codex webview bundle.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  getConversationPromptTitle,
  getConversationTitleFromSnapshot,
} from "../boundaries/use-host-config.facade";
import {
  conversationTitleSignal,
  conversationTurnsSignal,
  conversationVisibleTurnsSignal,
  linkedConversationIdSignal,
} from "../boundaries/thread-context-inputs.facade";
export const localConversationTitleSignal = createComputedSignalFamily(
  appScopeRoot,
  (conversationId: string | null, { get }: any) =>
    conversationId == null
      ? null
      : getConversationTitleFromSnapshot({
          id: conversationId,
          title: get(conversationTitleSignal, conversationId),
          turns:
            get(conversationTurnsSignal, conversationId) ??
            get(conversationVisibleTurnsSignal, conversationId),
        }),
);
export const resolvedLocalConversationTitleSignal = createComputedSignalFamily(
  appScopeRoot,
  (conversationId: string | null, { get }: any) => {
    if (conversationId == null) return null;
    const title = get(localConversationTitleSignal, conversationId);
    if (title != null) return title;
    const linkedConversationId = get(
      linkedConversationIdSignal,
      conversationId,
    );
    return getConversationPromptTitle(
      conversationId,
      get(conversationTurnsSignal, linkedConversationId) ??
        get(conversationVisibleTurnsSignal, linkedConversationId),
    );
  },
);
