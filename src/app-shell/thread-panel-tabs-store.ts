// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-shell panel tab stores backed by the current onboarding/app-shell bundle.
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "./app-shell-tab-controller";

const rightPanelTabsStore = rightAppShellTabController;
const bottomPanelTabsStore = bottomAppShellTabController;

export function initThreadPanelTabsStoreChunk(): void {}

const initRightPanelTabsStoreChunk = initThreadPanelTabsStoreChunk;

export {
  bottomPanelTabsStore,
  initRightPanelTabsStoreChunk,
  rightPanelTabsStore,
};
