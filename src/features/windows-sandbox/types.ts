// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Shared Windows sandbox setup constants, state names, and pure decision helpers.
import { createAppScopedSignal } from "../../runtime/app-scope-runtime";

export type WindowsSandboxMode = "elevated" | "unelevated";

export type WindowsSandboxReadinessStatus =
  | "notConfigured"
  | "ready"
  | "updateRequired";

export type WindowsSandboxSetupPhase =
  | "idle"
  | "startingElevated"
  | "waitingElevated"
  | "startingUnelevated"
  | "waitingUnelevated"
  | "retryUnelevated"
  | "failed";

export type WindowsSandboxRequirement = "setup" | "update";

export type WindowsSandboxSetupVisibility =
  | "none"
  | "show"
  | "startUnelevated"
  | "waitForPolicy";

export type WindowsSandboxAccountType = "administrator" | "unknown" | string;

export type WindowsSandboxRequirementsResponse = {
  requirements?: {
    allowedWindowsSandboxImplementations?: WindowsSandboxMode[] | null;
  } | null;
};

export const WINDOWS_SANDBOX_MODE_QUERY_ROOT = [
  "windows-sandbox",
  "mode",
] as const;

export const WINDOWS_SANDBOX_READINESS_QUERY_ROOT = [
  "windows-sandbox",
  "readiness",
] as const;

export const WINDOWS_SANDBOX_START_FAILED_MESSAGE =
  "Windows sandbox setup did not start.";

export const WINDOWS_SANDBOX_SETUP_FAILED_MESSAGE =
  "Windows sandbox setup failed.";

export const WINDOWS_SANDBOX_POST_ENABLE_DELAY_MS = 500;

export const windowsSandboxOnboardingDismissedSignal =
  createAppScopedSignal(false);

export function getAllowedWindowsSandboxImplementations(
  response: WindowsSandboxRequirementsResponse | null | undefined,
): WindowsSandboxMode[] | null | undefined {
  return response == null
    ? undefined
    : (response.requirements?.allowedWindowsSandboxImplementations ?? null);
}

export function hasKnownWindowsSandboxImplementations(
  implementations: WindowsSandboxMode[] | null | undefined,
): boolean {
  return (
    implementations !== undefined &&
    (implementations == null || implementations.length > 0)
  );
}

export function isWindowsSandboxModeAllowed(
  implementations: WindowsSandboxMode[] | null | undefined,
  mode: WindowsSandboxMode,
): boolean {
  return implementations == null
    ? implementations !== undefined
    : implementations.includes(mode);
}

export function getWindowsSandboxSetupVisibility({
  allowElevatedSetup,
  allowUnelevatedFallback,
  hasReadinessError,
  isSetupModePending,
  onboardingDismissed,
  phase,
  requiresSetup,
}: {
  allowElevatedSetup: boolean;
  allowUnelevatedFallback: boolean;
  hasReadinessError: boolean;
  isSetupModePending: boolean;
  onboardingDismissed: boolean;
  phase: WindowsSandboxSetupPhase;
  requiresSetup: boolean;
}): WindowsSandboxSetupVisibility {
  if (onboardingDismissed) return "none";
  if (hasReadinessError) return "show";
  if (!requiresSetup) return "none";
  if (isSetupModePending) return "waitForPolicy";

  return !allowElevatedSetup && allowUnelevatedFallback && phase === "idle"
    ? "startUnelevated"
    : "show";
}

export function getFailedWindowsSandboxPhase(
  mode: WindowsSandboxMode,
  allowUnelevatedFallback: boolean,
): WindowsSandboxSetupPhase {
  return mode === "elevated" && allowUnelevatedFallback
    ? "retryUnelevated"
    : "failed";
}

export function getNextWindowsSandboxSetupMode(
  phase: WindowsSandboxSetupPhase,
  allowElevatedSetup: boolean,
  allowUnelevatedFallback: boolean,
): WindowsSandboxMode | null {
  if (
    allowUnelevatedFallback &&
    (!allowElevatedSetup || phase === "retryUnelevated" || phase === "failed")
  ) {
    return "unelevated";
  }

  return allowElevatedSetup ? "elevated" : null;
}

export function shouldShowUnelevatedSetupAlternative(
  accountType: WindowsSandboxAccountType,
  allowElevatedSetup: boolean,
  allowUnelevatedFallback: boolean,
): boolean {
  return (
    accountType !== "administrator" &&
    allowElevatedSetup &&
    allowUnelevatedFallback
  );
}

export function isWindowsSandboxSetupPendingPhase(
  phase: WindowsSandboxSetupPhase,
): boolean {
  return (
    phase === "startingElevated" ||
    phase === "waitingElevated" ||
    phase === "startingUnelevated" ||
    phase === "waitingUnelevated"
  );
}

export function getWindowsSandboxErrorMessage(error: unknown): string {
  return !(error instanceof Error) || error.message.trim().length === 0
    ? WINDOWS_SANDBOX_SETUP_FAILED_MESSAGE
    : error.message;
}

export function initWindowsSandboxSetupStateRuntime(): void {}
