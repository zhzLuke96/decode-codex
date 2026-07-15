// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ecjwgenq-_p4PfxvN.js
// Thread app shell rate-limit summary aliases.
import {
  initBulletSeparatorChunk,
  BulletSeparator,
} from "../../utils/bullet-separator";
import {
  initRateLimitSummaryChunk,
  RateLimitSummary,
} from "../../ui/rate-limit-summary";

export { initBulletSeparatorChunk, BulletSeparator, RateLimitSummary };

export function initThreadAppShellRateLimitSummaryChunk(): void {
  initBulletSeparatorChunk();
  initRateLimitSummaryChunk();
}
