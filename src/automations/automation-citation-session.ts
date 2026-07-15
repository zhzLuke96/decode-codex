// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the editor "session" backing an automation citation (a persisted
// automation vs. a proposed suggestion) and derives stable keys/tab ids for it.

interface AutomationCitationSeed {
  id: string | null;
  directiveKey: string;
}

export type AutomationCitationRequest =
  | { type: "automation"; automationId: string }
  | { type: "suggestion"; seed: AutomationCitationSeed };

export type AutomationCitationSession =
  | { type: "persisted"; automationId: string }
  | {
      type: "proposal";
      seed: AutomationCitationSeed;
      targetAutomationId: string | null;
    };

export function resolveAutomationSession({
  request,
  savedAutomationId,
}: {
  request: AutomationCitationRequest;
  savedAutomationId: string | null;
}): AutomationCitationSession {
  if (savedAutomationId == null) {
    return request.type === "automation"
      ? { type: "persisted", automationId: request.automationId }
      : {
          type: "proposal",
          seed: request.seed,
          targetAutomationId: request.seed.id,
        };
  }
  return { type: "persisted", automationId: savedAutomationId };
}

export function getAutomationSessionKey(
  session: AutomationCitationSession,
): string {
  return session.type === "persisted"
    ? `persisted:${session.automationId}`
    : `proposal:${session.seed.directiveKey}`;
}

export function getAutomationSuggestionTabId(directiveKey: string): string {
  return `automation-suggestion:${encodeURIComponent(directiveKey)}`;
}
