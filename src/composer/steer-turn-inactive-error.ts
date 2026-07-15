// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Detect the "steer turn already ended" error so callers can fall back to a fresh turn.
import { getErrorMessage } from "../utils/config-load-error";

export const STEER_TURN_INACTIVE_ERROR_NAME = "SteerTurnInactiveError";

export function initSteerTurnInactiveErrorChunk(): void {
  void STEER_TURN_INACTIVE_ERROR_NAME;
  void createSteerTurnInactiveError;
  void isSteerTurnInactiveError;
}

export function createSteerTurnInactiveError(conversationId: string): Error {
  const error = new Error(
    `Cannot steer conversation ${conversationId} because its active turn already ended`,
  );
  error.name = STEER_TURN_INACTIVE_ERROR_NAME;
  return error;
}

export function isSteerTurnInactiveError(error: unknown): boolean {
  return (
    (error instanceof Error && error.name === STEER_TURN_INACTIVE_ERROR_NAME) ||
    getErrorMessage(error).includes(STEER_TURN_INACTIVE_ERROR_NAME)
  );
}
