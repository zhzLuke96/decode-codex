// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parent conversation model selector used by multi-agent activity rows.

import {
  conversationModelSignal,
  useScopedValue,
} from "./local-conversation-page-runtime";

export function useConversationParentModel(
  conversationId: string,
): string | null {
  return (
    useScopedValue<string | null | undefined>(
      conversationModelSignal,
      conversationId,
    ) ?? null
  );
}

export function initConversationParentModelSelectorChunk(): void {}
