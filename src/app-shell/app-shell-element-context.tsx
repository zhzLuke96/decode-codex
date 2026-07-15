// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js
// App-shell DOM element context used as the composer drop-target portal root.
import { createContext, type Context } from "react";

export const AppShellElementContext: Context<HTMLElement | null> =
  createContext<HTMLElement | null>(null);

export function initAppShellElementContextChunk(): void {
  // Context construction is module-local; retained for chunk initializer parity.
}
