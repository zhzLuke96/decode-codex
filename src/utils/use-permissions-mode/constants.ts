// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import type { AgentMode, PermissionProfileId, SettableValue } from "./types";
export const PERMISSION_PROFILES_PAGE_SIZE = 100;
export const READ_ONLY_PERMISSION_PROFILE_ID = ":read-only";
export const WORKSPACE_PERMISSION_PROFILE_ID = ":workspace";
export const DANGER_FULL_ACCESS_PERMISSION_PROFILE_ID = ":danger-full-access";
export const CONFIG_DRIVEN_PERMISSION_STATE_GATE = "3736891373";
export const CONFIG_DRIVEN_PERMISSION_MODE_UI_GATE = "2846336681";
export const UNSET_AGENT_MODE: SettableValue<AgentMode> = {
  isSet: false,
  value: null,
};
export const UNSET_PERMISSION_PROFILE_ID: SettableValue<PermissionProfileId> = {
  isSet: false,
  value: null,
};
