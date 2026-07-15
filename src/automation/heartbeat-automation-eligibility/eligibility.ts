// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  V as conversationHostIdSignal,
  bt as resumeStateSignal,
  ft as pendingRequestSignal,
  lt as latestTurnIdSignal,
  ut as latestTurnStatusSignal,
  z as hasConversationSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { isAutomationHostSupported } from "../../utils/automation-host-support";
import type { AppScopeGetter, HeartbeatAutomationEligibility } from "./types";
type PendingRequestType =
  | "approval"
  | "mcpServerElicitation"
  | "userInput"
  | string;
type EligibilityInput = {
  hasConversation: boolean;
  hostId: string | null | undefined;
  latestTurnId: string | null | undefined;
  latestTurnStatus: string | null | undefined;
  pendingRequestType: PendingRequestType | null;
  resumeState: string | null | undefined;
};
const pendingRequestTypeSignal = createComputedSignalFamily(
  appScopeRoot,
  (conversationId: string | null | undefined, { get }: AppScopeGetter) =>
    get<
      | {
          type?: PendingRequestType;
        }
      | null
      | undefined
    >(pendingRequestSignal, conversationId)?.type ?? null,
);
export const heartbeatAutomationEligibilitySignal = createComputedSignalFamily(
  appScopeRoot,
  (
    conversationId: string | null | undefined,
    { get }: AppScopeGetter,
  ): HeartbeatAutomationEligibility =>
    resolveHeartbeatAutomationEligibility({
      hasConversation: get<boolean>(hasConversationSignal, conversationId),
      hostId: get<string | null | undefined>(
        conversationHostIdSignal,
        conversationId,
      ),
      latestTurnId: get<string | null | undefined>(
        latestTurnIdSignal,
        conversationId,
      ),
      latestTurnStatus: get<string | null | undefined>(
        latestTurnStatusSignal,
        conversationId,
      ),
      pendingRequestType: get<PendingRequestType | null>(
        pendingRequestTypeSignal,
        conversationId,
      ),
      resumeState: get<string | null | undefined>(
        resumeStateSignal,
        conversationId,
      ),
    }),
);
function resolveHeartbeatAutomationEligibility({
  hasConversation,
  hostId,
  latestTurnId,
  latestTurnStatus,
  pendingRequestType,
  resumeState,
}: EligibilityInput): HeartbeatAutomationEligibility {
  if (!hasConversation) {
    return {
      isEligible: false,
      reason: "missing_conversation",
    };
  }
  if (hostId == null || !isAutomationHostSupported(hostId)) {
    return {
      isEligible: false,
      reason: "unsupported_host",
    };
  }
  if (
    resumeState === "resuming" ||
    (resumeState !== "resumed" && latestTurnId == null)
  ) {
    return {
      isEligible: false,
      reason: "resuming",
    };
  }
  if (pendingRequestType === "userInput") {
    return {
      isEligible: false,
      reason: "waiting_on_user_input",
    };
  }
  if (
    pendingRequestType === "approval" ||
    pendingRequestType === "mcpServerElicitation"
  ) {
    return {
      isEligible: false,
      reason: "waiting_on_approval",
    };
  }
  if (pendingRequestType != null) {
    return {
      isEligible: false,
      reason: "pending_request",
    };
  }
  if (latestTurnStatus == null) {
    return {
      isEligible: false,
      reason: "missing_turn",
    };
  }
  if (latestTurnStatus === "inProgress") {
    return {
      isEligible: false,
      reason: "turn_in_progress",
    };
  }
  return {
    isEligible: true,
    reason: null,
  };
}

export function initHeartbeatAutomationEligibilityChunk(): void {}
