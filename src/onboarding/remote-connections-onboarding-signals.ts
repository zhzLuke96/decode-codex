// Restored from ref/webview/assets/remote-connections-onboarding-signals-BDrBMO3c.js; synced with ref/webview/assets/app-initial~app-main~new-thread-panel-page~projects-index-page~debug-window-page~home-annou~i1bnl0q1-Cj3Tkgn6.js.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";
import { createPersistedSignal } from "../runtime/persisted-signal";

export const remoteConnectionsHomeAnnouncementSeenSignal =
  createPersistedSignal("has-seen-remote-connections-home-announcement", false);

export const remoteConnectionsHomeAnnouncementVisibilitySignal =
  createAppScopeSignal(appScopeRoot, "hidden");

export function initRemoteConnectionsOnboardingSignalsChunk(): void {}

export {
  remoteConnectionsHomeAnnouncementSeenSignal as remoteConnectionsOnboardingSignalsT,
  remoteConnectionsHomeAnnouncementVisibilitySignal as remoteConnectionsOnboardingSignalsN,
};
