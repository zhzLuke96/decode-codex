// Restored from ref/webview/assets/use-rate-limit-DfBgdYGx.js
import type { RateLimitCtaState } from "./types";

function getRateLimitCtaReason(state: RateLimitCtaState) {
  return state.coreRateLimitBlocked
    ? "upsell"
    : state.selectedModelRateLimitReached
      ? "model_limit"
      : "none";
}

export { getRateLimitCtaReason };
