// Restored from ref/webview/assets/sidebar-task-pr-chip-signals-CaOVWYGm.js
// sidebar-task-pr-chip-signals-CaOVWYGm chunk restored from the Codex webview bundle.
import { _appScopeC, appScopeRoot } from "../../boundaries/app-scope";
import { gitSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { getSettingValue } from "../../settings/setting-storage";
import { sidebarPullRequestIconGateSignal } from "./statsig-gate";
import type { AppScopeGetter } from "./types";
const SIDEBAR_PULL_REQUEST_ICON_GATE = "2553306736";
export const showSidebarPullRequestIconsSignal = _appScopeC(
  appScopeRoot,
  ({ get }: AppScopeGetter): boolean => {
    const defaultEnabled = get<boolean>(
      sidebarPullRequestIconGateSignal,
      SIDEBAR_PULL_REQUEST_ICON_GATE,
    );
    return (
      getSettingValue(get, gitSettingDefinitions.showSidebarPrIcons) ??
      defaultEnabled
    );
  },
);
