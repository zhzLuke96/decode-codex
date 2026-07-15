// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import type {
  BuildChronicleSetupStateInput,
  ChroniclePermissionStatus,
  ChronicleSetupState,
} from "./types";
export const CHRONICLE_TRY_CODEX_PROMPT =
  "Describe what I'm working on right now and suggest how I can use Codex to help.";
export function buildChronicleSetupState({
  accessibilityStatus,
  errorMessage,
  isSidecarPresent,
  isUpdatingChronicle,
  processState,
  screenRecordingStatus,
}: BuildChronicleSetupStateInput): ChronicleSetupState {
  if (errorMessage != null) {
    return {
      kind: "failed",
      message: errorMessage,
    };
  }
  if (isUpdatingChronicle) {
    return {
      kind: "preparing",
    };
  }
  if (!isSidecarPresent) {
    return {
      kind: "failed",
      message: "Chronicle sidecar binary is missing from app resources.",
    };
  }
  if (requiresPermission(screenRecordingStatus)) {
    return {
      kind: "screen-recording-permission-needed",
      status: screenRecordingStatus,
    };
  }
  if (requiresPermission(accessibilityStatus)) {
    return {
      kind: "accessibility-permission-needed",
      status: accessibilityStatus,
    };
  }
  if (
    processState === "running" &&
    screenRecordingStatus === "granted" &&
    accessibilityStatus === "granted"
  ) {
    return {
      kind: "ready",
    };
  }
  return {
    kind: "starting",
  };
}
export function isChronicleSetupCompletionState(
  kind: ChronicleSetupState["kind"],
): boolean {
  switch (kind) {
    case "screen-recording-permission-needed":
    case "accessibility-permission-needed":
    case "ready":
      return true;
    case "preparing":
    case "starting":
    case "failed":
      return false;
  }
}
function requiresPermission(
  status: ChroniclePermissionStatus | null | undefined,
): status is ChroniclePermissionStatus {
  return status != null && status !== "granted";
}
