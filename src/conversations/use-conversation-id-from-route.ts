// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Reads the active conversation id from whichever conversation route is matched
// (local, remote, or the hotkey thread window), normalized to a canonical id.
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";
import { useRouteMatch } from "../boundaries/onboarding-commons-externals.facade";

export function initUseConversationIdFromRouteChunk(): void {}

export function useConversationIdFromRoute(): string | null {
  const localMatch = useRouteMatch("/local/:conversationId");
  const remoteMatch = useRouteMatch("/remote/:conversationId");
  const hotkeyMatch = useRouteMatch("/hotkey-window/thread/:conversationId");

  const conversationId =
    localMatch?.params.conversationId ??
    remoteMatch?.params.conversationId ??
    hotkeyMatch?.params.conversationId;

  return conversationId ? normalizeConversationId(conversationId) : null;
}
