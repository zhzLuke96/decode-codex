// Restored from ref/webview/assets/use-active-conversation-id-CAmguZaf.js
// use-active-conversation-id-CAmguZaf chunk restored from the Codex webview bundle.
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";
import { useMatch } from "../vendor/react-router";
type ConversationRouteMatch = {
  params: {
    conversationId?: string;
  };
} | null;
const LOCAL_CONVERSATION_PATTERN = "/local/:conversationId";
const REMOTE_CONVERSATION_PATTERN = "/remote/:conversationId";
const HOTKEY_CONVERSATION_PATTERN = "/hotkey-window/thread/:conversationId";
export function useActiveConversationId(): string | null {
  const localMatch = useMatch(
    LOCAL_CONVERSATION_PATTERN,
  ) as ConversationRouteMatch;
  const remoteMatch = useMatch(
    REMOTE_CONVERSATION_PATTERN,
  ) as ConversationRouteMatch;
  const hotkeyMatch = useMatch(
    HOTKEY_CONVERSATION_PATTERN,
  ) as ConversationRouteMatch;
  const conversationId =
    localMatch?.params.conversationId ??
    remoteMatch?.params.conversationId ??
    hotkeyMatch?.params.conversationId;
  return conversationId ? normalizeConversationId(conversationId) : null;
}
