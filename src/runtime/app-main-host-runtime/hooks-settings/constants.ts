// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Hooks-settings route constants and init aliases.

import type { HookEventName, NormalizedHookSource } from "./types";

export const HOOKS_SETTINGS_SECTION_ID = "hooks-settings";
export const HOOKS_SETTINGS_ROUTE_PREFIX = "/settings";
export const HOOKS_SETTINGS_SOURCE_ORDER: NormalizedHookSource[] = [
  "plugin",
  "user",
  "admin",
  "project",
  "sessionFlags",
  "unknown",
];
export const HOOK_EVENT_NAMES: HookEventName[] = [
  "preToolUse",
  "permissionRequest",
  "postToolUse",
  "preCompact",
  "postCompact",
  "sessionStart",
  "userPromptSubmit",
  "subagentStart",
  "subagentStop",
  "stop",
];

export function initHooksSettingsRuntimeChunk(): void {
  initHooksSettingsGroupingRuntime();
}

export function initHooksSettingsGroupingRuntime(): void {}

export function initHooksSettingsRouteRuntime(): void {
  initHooksSettingsGroupingRuntime();
}
