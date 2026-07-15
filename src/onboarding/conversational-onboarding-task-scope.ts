// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scoped signals tracking per-conversation execution flags for a single
// conversational-onboarding task (app-connect retries, request visibility, ...).

import {
  appScopeH as createScopedScope,
  appScopeUnderscore as createScopedAtom,
} from "../boundaries/app-scope";
// Conversation-keyed parent scope (alias `Dd` in the source chunk). Owned by the
// sibling conversation-state restoration; imported here by role.
import { conversationScope } from "../conversations/conversation-scope";

interface ConversationalOnboardingTaskScopeStore {
  set<TValue>(signal: unknown, value: TValue): void;
}

export const conversationalOnboardingTaskScope = createScopedScope(
  "ConversationalOnboardingTaskScope",
  { parent: conversationScope },
);

export const conversationalOnboardingTaskIntroCompleteSignal =
  createScopedAtom<boolean>(conversationalOnboardingTaskScope, false);

export const conversationalOnboardingTaskActiveConversationSignal =
  createScopedAtom<unknown | null>(conversationalOnboardingTaskScope, null);

export const conversationalOnboardingTaskRequestVisibleSignal =
  createScopedAtom<boolean>(conversationalOnboardingTaskScope, false);

export const conversationalOnboardingTaskRequestFailedSignal =
  createScopedAtom<boolean>(conversationalOnboardingTaskScope, false);

export function initConversationalOnboardingTaskScopeChunk(): void {}

export function resetConversationalOnboardingTaskScope(
  store: ConversationalOnboardingTaskScopeStore,
): void {
  store.set(conversationalOnboardingTaskIntroCompleteSignal, false);
  store.set(conversationalOnboardingTaskActiveConversationSignal, null);
  store.set(conversationalOnboardingTaskRequestVisibleSignal, false);
  store.set(conversationalOnboardingTaskRequestFailedSignal, false);
}
