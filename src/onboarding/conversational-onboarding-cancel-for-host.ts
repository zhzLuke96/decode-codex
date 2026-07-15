// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Cancels any in-flight conversational-onboarding run for a host: bumps the
// host's start generation (invalidating pending starts) and aborts the active
// conversation so a retry begins from a clean slate.

// Cross-slice dependencies from the conversational-onboarding controller /
// conversation-state modules of the same chunk (private symbols `r4`, `Z2`,
// `AAt`), imported here by role.
import {
  conversationalOnboardingHostStartGenerations,
  abortActiveConversationalOnboardingConversation,
} from "./conversational-onboarding-controller";
import { readActiveConversationalOnboardingConversation } from "./conversational-onboarding-conversation-state";

export function cancelActiveConversationalOnboardingForHost(
  hostId: string,
): void {
  conversationalOnboardingHostStartGenerations.set(
    hostId,
    (conversationalOnboardingHostStartGenerations.get(hostId) ?? 0) + 1,
  );
  const activeConversation =
    readActiveConversationalOnboardingConversation(hostId);
  if (activeConversation != null) {
    abortActiveConversationalOnboardingConversation(activeConversation);
  }
}
