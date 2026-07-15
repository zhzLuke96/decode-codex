// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// React context carrying the home page scroll container element so descendants
// (portals, overlays) can anchor against the scrollable region.
import { createContext } from "react";

export const HomeScrollContainerContext = createContext<HTMLElement | null>(
  null,
);
