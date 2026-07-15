// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Home side-panel layout signals. The current new-thread orchestrator re-export
// aliases `Qp` and `hm` point at the app-shell right-panel open and full-width
// signals respectively; the inherited names in the current-ref alias map were
// stale for this build.
import {
  rightPanelFullscreenSignal,
  rightPanelOpenSignal,
} from "../app-shell/app-shell-state";

/** Signal: whether the home right panel is currently open. */
export const homeRightPanelOpenSignal = rightPanelOpenSignal;

/** Signal: whether the home right panel is in full-width/expanded mode. */
export const homeRightPanelFullWidthSignal = rightPanelFullscreenSignal;
