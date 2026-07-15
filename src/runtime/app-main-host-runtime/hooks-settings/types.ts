// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Shared hooks-settings types.

export type HookEventName =
  | "permissionRequest"
  | "postCompact"
  | "postToolUse"
  | "preCompact"
  | "preToolUse"
  | "sessionStart"
  | "stop"
  | "subagentStart"
  | "subagentStop"
  | "userPromptSubmit";

export type HookTrustStatus = "managed" | "modified" | "trusted" | "untrusted";

export type HookSource =
  | "admin"
  | "cloudManagedConfig"
  | "cloudRequirements"
  | "legacyManagedConfigFile"
  | "legacyManagedConfigMdm"
  | "mdm"
  | "plugin"
  | "project"
  | "sessionFlags"
  | "system"
  | "unknown"
  | "user";

export type NormalizedHookSource =
  | "admin"
  | "plugin"
  | "project"
  | "sessionFlags"
  | "unknown"
  | "user";

export type HookIssue = {
  message: string;
  path: string;
};

export type HookConfig = {
  displayOrder: number;
  enabled: boolean;
  eventName: HookEventName;
  key: string;
  pluginId?: string | null;
  source: HookSource;
  trustStatus: HookTrustStatus;
};

export type HookConfigEntry = {
  cwd: string;
  errors: HookIssue[];
  hooks: HookConfig[];
  summary?: { id: string; installed?: boolean } | null;
  warnings: HookIssue[];
};

export type HooksSettingsSelection =
  | { source: "plugin"; pluginId?: string | null }
  | { source: "project"; projectRoot: string }
  | { source: Exclude<NormalizedHookSource, "plugin" | "project"> };

export type HookSourceEntry =
  | { id: "project"; projectEntries: HookConfigEntry[] }
  | { id: "plugin"; entry: HookConfigEntry; pluginEntries: PluginHookEntry[] }
  | {
      id: Exclude<NormalizedHookSource, "plugin" | "project">;
      entry: HookConfigEntry;
    };

export type PluginHookEntry = {
  entry: HookConfigEntry;
  pluginId?: string | null;
};
