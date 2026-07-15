// Restored from ref/webview/assets/src-l0hb-mz-p.js
type SettingDefinition<T = unknown> = { default: T; key: string };

function setting<T>(key: string, defaultValue: T): SettingDefinition<T> {
  return { default: defaultValue, key };
}

function keyFromProperty(property: string): string {
  return property
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function settingsProxy(
  definitions: Record<string, SettingDefinition>,
): Record<string, SettingDefinition> {
  return new Proxy(definitions, {
    get(target, property: string | symbol) {
      if (typeof property !== "string") return undefined;
      return target[property] ?? setting(keyFromProperty(property), null);
    },
  });
}

function keysProxy(keys: Record<string, string>): Record<string, string> {
  return new Proxy(keys, {
    get(target, property: string | symbol) {
      if (typeof property !== "string") return undefined;
      return target[property] ?? keyFromProperty(property);
    },
  });
}

export const globalSettingKeys = keysProxy({
  ACTIVE_REMOTE_PROJECT_ID: "active-remote-project-id",
  ACTIVE_WORKSPACE_ROOTS: "active-workspace-roots",
  ADDED_REMOTE_CONTROL_ENV_IDS: "added-remote-control-env-ids",
  LOCAL_PROJECTS: "local-projects",
  NUX_2025_09_15: "viewed2025-09-15-nux",
  NUX_2025_09_15_APIKEY_AUTH_VIEWED: "viewed2025-09-15-apikey-auth-nux",
  NUX_2025_09_15_FULL_CHATGPT_AUTH_VIEWED:
    "viewed2025-09-15-full-chatgpt-auth-nux",
  PINNED_PROJECT_IDS: "pinned-project-ids",
  PROJECT_ORDER: "project-order",
  PROJECT_WRITABLE_ROOTS: "project-writable-roots",
  QUEUED_FOLLOW_UPS: "queued-follow-ups",
  REALTIME_VOICE_MODE_DEBUG_DISABLED: "realtime-voice-mode-debug-disabled",
  REMOTE_PROJECTS: "remote-projects",
  SELECTED_REMOTE_HOST_ID: "selected-remote-host-id",
  selectedAvatarId: "selected-avatar-id",
});

export const generalSettingDefinitions = settingsProxy({
  annotationScreenshotsMode: setting(
    "browser-annotation-screenshots-mode",
    "always",
  ),
  dictationDictionary: setting("dictationDictionary", [] as string[]),
  downloadDirectory: setting("browser-download-directory", null),
  enabledReasoningEfforts: setting("enabled-reasoning-efforts", [
    "low",
    "medium",
    "high",
    "xhigh",
    "ultra",
  ] as string[]),
  followUpQueueMode: setting("followUpQueueMode", "queue"),
  openLinkInTargetPreference: setting(
    "open-link-in-target-preference",
    "in-app-browser",
  ),
  openLocalUrlInTargetPreference: setting(
    "open-local-url-in-target-preference",
    "in-app-browser",
  ),
  promptForDownloadLocation: setting("browser-download-prompt-enabled", false),
  runCodexInWsl: setting("runCodexInWindowsSubsystemForLinux", false),
});
export const _srcW = generalSettingDefinitions;

export const gitSettingDefinitions = settingsProxy({
  alwaysForcePush: setting("git-always-force-push", false),
  branchPrefix: setting("git-branch-prefix", "codex/"),
  commitInstructions: setting("git-commit-instructions", ""),
  createPullRequestAsDraft: setting("git-create-pull-request-as-draft", true),
  pullRequestInstructions: setting("git-pr-instructions", ""),
  pullRequestMergeMethod: setting("git-pull-request-merge-method", "merge"),
  showSidebarPrIcons: setting("git-show-sidebar-pr-icons", undefined),
});

export const worktreeSettingDefinitions = settingsProxy({
  autoCleanupEnabled: setting("worktree-auto-cleanup-enabled", false),
  keepCount: setting("worktree-keep-count", 5),
});

export const appshotSettingDefinitions = settingsProxy({
  soundEnabled: setting("appshotSoundEnabled", true),
});
