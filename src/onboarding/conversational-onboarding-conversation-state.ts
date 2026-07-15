// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Active conversational-onboarding conversation registry keyed by host id.

export type ActiveConversationalOnboardingConversation = {
  abort?: () => void;
  abortController?: AbortController;
  conversationId?: string;
  hostId?: string;
  signal?: AbortSignal;
};

const activeConversationsByHost = new Map<
  string,
  ActiveConversationalOnboardingConversation
>();
const conversationalOnboardingConversationIds = new Set<string>();

export function readActiveConversationalOnboardingConversation(
  hostId: string,
): ActiveConversationalOnboardingConversation | null {
  return activeConversationsByHost.get(hostId) ?? null;
}

export function writeActiveConversationalOnboardingConversation(
  hostId: string,
  conversation: ActiveConversationalOnboardingConversation | null,
): void {
  if (conversation == null) activeConversationsByHost.delete(hostId);
  else {
    activeConversationsByHost.set(hostId, { ...conversation, hostId });
    if (conversation.conversationId != null) {
      recordConversationalOnboardingConversationId(conversation.conversationId);
    }
  }
}

export function clearActiveConversationalOnboardingConversation(
  hostId: string,
): void {
  activeConversationsByHost.delete(hostId);
}

export function recordConversationalOnboardingConversationId(
  conversationId: string,
): void {
  conversationalOnboardingConversationIds.add(conversationId);
}

export function readConversationalOnboardingConversationIds(): string[] {
  return [...conversationalOnboardingConversationIds];
}

export function clearConversationalOnboardingConversationIds(): void {
  conversationalOnboardingConversationIds.clear();
}
