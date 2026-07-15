// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Side-panel slot registry consumed by the home page body. `Header` teleports its
// children into the AppShell header region (AppShell.Header slot); `Footer` renders
// its children in the floating right-panel composer overlay.
import { AppShell } from "./app-shell";
import { RightPanelComposerOverlay } from "../composer/right-panel-composer-overlay";

export interface SidePanelSlots {
  Header: typeof AppShell.Header;
  Footer: typeof RightPanelComposerOverlay;
}

export const sidePanelSlots: SidePanelSlots = {
  Header: AppShell.Header,
  Footer: RightPanelComposerOverlay,
};
