// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Barrel for hot onboarding facade helpers restored into semantic owner files.
export {
  formatBrowserAddressDisplay,
  resolveBrowserNavigationUrl,
} from "./browser-navigation-boundary-runtime";
export {
  applyImagePreviewZoomCommand,
  imagePreviewOpenStore,
  setImagePreviewOpen,
} from "./image-preview-shortcut-state-runtime";
export {
  findActiveOrchestrationAtom,
  findDefaultOrchestrationAtom,
  getThreadFindController,
  setThreadFindController,
  threadFindControllerAtom,
} from "./thread-find-controller-runtime";
export {
  buildCommentImageInputItems,
  buildImageInputItem,
} from "../composer/image-input-items-runtime";
export {
  formatRedactedSearchQuery,
  summarizeExplorationCommand,
} from "../conversations/exploration-skill-summary-runtime";
export {
  getTerminalPanelTarget,
  registerTerminalPanelSubscription,
  syncTerminalPanelTabs,
} from "../terminal/terminal-panel-tabs-runtime";
export {
  FormattedCount,
  TruncatedBranchName,
  truncateBranchName,
  WebSearchIcon,
} from "../ui/hot-display-components-runtime";

export function onboardingHotHelpersRuntimeLoaded(): void {}
