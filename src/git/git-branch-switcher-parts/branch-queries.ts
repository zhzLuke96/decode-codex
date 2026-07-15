// Restored from ref/webview/assets/git-branch-switcher-Cb06tz5G.js
// Public barrel for git branch switcher query and mutation hooks.

export {
  gitBranchSearchQuery,
  initGitBranchSearchQuery,
} from "./branch-search-query";
export {
  initGitRecentBranchesQuery,
  initGitStatusSummaryQuery,
  useGitRecentBranchesQuery,
  useGitStatusSummaryQuery,
} from "./branch-status-queries";
export {
  initCheckoutBranchMutation,
  initCreateBranchMutation,
  useCheckoutBranchMutation,
  useCreateBranchMutation,
} from "./branch-mutations";
