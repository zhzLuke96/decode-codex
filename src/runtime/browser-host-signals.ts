// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Browser-host identity signals: the id of the active browser host and its
// resolved connection metadata. Both are derived app-scope signals, read through
// useSignalValue at their use sites.
import {
  bf as browserHostInfoSignalRef,
  xf as browserHostIdSignalRef,
} from "../vendor/worktree-new-thread-orchestrator-current-bundle";

/** Resolved metadata describing the active browser host connection. */
export interface BrowserHostInfo {
  display_name: string;
  id?: string;
  kind?: string;
  [key: string]: unknown;
}

/**
 * Signal carrying the active browser host id (an empty string for the local
 * host). Derived from the current-host selection.
 */
export const browserHostIdSignal = browserHostIdSignalRef;

/** Signal carrying the {@link BrowserHostInfo} for the active browser host. */
export const browserHostInfoSignal = browserHostInfoSignalRef;
