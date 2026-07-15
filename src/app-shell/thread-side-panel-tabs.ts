// Restored from ref/webview/assets/thread-side-panel-tabs-DDAJVj-n.js
// Semantic side-panel tab barrel for the updated Codex webview bundle.
import {
  openBrowserTab as openThreadBrowserSidePanelTab,
  openOrCreateBrowserTab as openThreadBrowserSidePanelTabWithPendingState,
} from "../browser/side-panel-browser-tab-commands";
import { openExistingBrowserTab as openThreadBrowserSidePanelTabWithoutAnimation } from "../browser/side-panel-browser-tab-open-existing";
import { resolveSidePanelBrowserTabId as getBrowserTabIdForSidePanelOpen } from "../browser/browser-tab-id-resolution";
import {
  openBrowserRouteSidePanelTabUnavailable as openThreadTimelineSidePanel,
  openExistingBrowserRouteSidePanelTabUnavailable as openSessionSandboxSidePanel,
} from "../browser/browser-route-side-panel-stubs";
import {
  closeMcpAppTab as closeThreadMcpAppSidePanelTab,
  mcpAppTabId as getThreadMcpAppSidePanelTabId,
  openMcpAppTab as openThreadMcpAppSidePanelTab,
} from "../plugins/mcp-app-tab";
import {
  openBranchReviewTab as openThreadBranchReviewSidePanelTab,
  openReviewTab as openThreadReviewSidePanelTab,
  openReviewTabForConversation as openThreadLastTurnReviewSidePanelTab,
} from "../review/review-side-panel-tab-commands";
import { transferForkedConversationBrowserTabs as primeBrowserTabTransfers } from "./thread-browser-panel-tabs";
import { setThreadSidePanelExpanded as toggleThreadSidePanel } from "./thread-side-panel-visibility";

const THREAD_SIDE_PANEL_TAB = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;

export {
  THREAD_SIDE_PANEL_TAB,
  closeThreadMcpAppSidePanelTab,
  getBrowserTabIdForSidePanelOpen,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadBranchReviewSidePanelTab,
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  openThreadBrowserSidePanelTabWithoutAnimation,
  openThreadLastTurnReviewSidePanelTab,
  openThreadMcpAppSidePanelTab,
  openThreadReviewSidePanelTab,
  openThreadTimelineSidePanel,
  primeBrowserTabTransfers,
  toggleThreadSidePanel,
};
