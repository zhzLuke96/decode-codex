// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared thread-handoff constants exposed through the onboarding boundary.
import { gitSettingDefinitions } from "../boundaries/src-l0hb/settings";

export const HANDOFF_STEP_ORDER = [
  "prepare-host-transfer",
  "transfer-host-artifacts",
  "create-new-worktree",
  "reuse-existing-worktree",
  "stash-source-changes",
  "detach-worktree-branch",
  "checkout-local-branch",
  "stash-target-worktree-changes",
  "checkout-worktree-branch",
  "apply-changes-to-worktree",
  "apply-changes-to-local",
  "switching-thread",
] as const;

export const branchPrefixSetting = gitSettingDefinitions.branchPrefix;
