// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Safety buffering prompt rendering for turn content.

import {
  SafetyBufferingContainer,
  SafetyBufferingPrompt,
  logger,
  sendHostRequest,
} from "../boundaries/onboarding-commons-externals.facade";

interface BuildSafetyBufferingNodeOptions {
  conversationId: string;
  hostId: string;
  isTurnInProgress: boolean;
  mcpTurn: Record<string, any> | null | undefined;
  safetyBuffering: any;
  turnId?: string;
}

export function buildSafetyBufferingNode({
  conversationId,
  hostId,
  isTurnInProgress,
  mcpTurn,
  safetyBuffering,
  turnId,
}: BuildSafetyBufferingNodeOptions) {
  const showBufferingUi = safetyBuffering?.showBufferingUi === true;
  const isBufferingVisible = showBufferingUi && isTurnInProgress;
  const node = showBufferingUi ? (
    <SafetyBufferingContainer isVisible={isBufferingVisible}>
      <SafetyBufferingPrompt
        fasterModel={safetyBuffering.fasterModel}
        isShimmering={isTurnInProgress}
        onRetry={(model: string) => {
          const retryTurnId = mcpTurn?.turnId ?? turnId;
          if (retryTurnId != null) {
            sendHostRequest("retry-safety-buffered-turn-for-host", {
              hostId,
              conversationId,
              turnId: retryTurnId,
              model,
            }).catch((error: unknown) => {
              logger.error("Failed to retry safety-buffered turn", {
                safe: {},
                sensitive: { error },
              });
            });
          }
        }}
        reasons={safetyBuffering.reasons}
        threadId={conversationId}
        turnId={mcpTurn?.turnId ?? turnId ?? null}
        useCases={safetyBuffering.useCases}
      />
    </SafetyBufferingContainer>
  ) : null;
  return { isBufferingVisible, node };
}
