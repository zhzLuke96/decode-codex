// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Barrel for the thread find bar compound component and initializer.
import { once } from "../runtime/commonjs-interop";
import { initButtonComponentPrimitives } from "../ui/button";
import { initBrowserWindowIconChunk } from "../icons/browser-window-icon";
import { initChevronDownIcon } from "../icons/chevron-icon";
import { initXIcon } from "../icons/x-icon";
import { ThreadFindBar } from "./thread-find-bar-parts/surface";

export { ThreadFindBar };

export const initThreadFindBarChunk = once(() => {
  initButtonComponentPrimitives();
  initBrowserWindowIconChunk();
  initChevronDownIcon();
  initXIcon();
});
