// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~settings-page~hotkey-window-thread-page~mcp-s~lv2pzabw-1eiSxJl3.js
// Current app-initial facade for settings section metadata and profile visibility hooks.

export {
  useProfileDropdownEntryPointVisible,
  useProfileVisibility,
} from "../features/profile-visibility";

export const settingsSectionIds = [
  "general-settings",
  "import",
  "profile",
  "keyboard-shortcuts",
  "codex-micro",
  "appshots",
  "appearance",
  "pets",
  "agent",
  "git-settings",
  "data-controls",
  "cloud-settings",
  "cloud-environments",
  "code-review",
  "personalization",
  "usage",
  "browser-use",
  "computer-use",
  "local-environments",
  "worktrees",
  "environments",
  "mcp-settings",
  "hooks-settings",
  "connections",
  "plugins-settings",
  "skills-settings",
] as const;

export type SettingsSectionId = (typeof settingsSectionIds)[number];

export type SettingsSectionEntry = {
  slug: SettingsSectionId;
};

export const settingsNavigationSections: readonly SettingsSectionEntry[] = [
  { slug: "general-settings" },
  { slug: "import" },
  { slug: "profile" },
  { slug: "appearance" },
  { slug: "pets" },
  { slug: "appshots" },
  { slug: "git-settings" },
  { slug: "connections" },
  { slug: "cloud-settings" },
  { slug: "cloud-environments" },
  { slug: "code-review" },
  { slug: "local-environments" },
  { slug: "worktrees" },
  { slug: "agent" },
  { slug: "personalization" },
  { slug: "keyboard-shortcuts" },
  { slug: "usage" },
  { slug: "browser-use" },
  { slug: "computer-use" },
  { slug: "mcp-settings" },
  { slug: "hooks-settings" },
  { slug: "plugins-settings" },
  { slug: "skills-settings" },
  { slug: "data-controls" },
];

export const SettingsSchemaValueType = {
  String: "string",
  Array: "array",
  Record: "record",
} as const;

export type SettingsSchemaValueType =
  (typeof SettingsSchemaValueType)[keyof typeof SettingsSchemaValueType];

export const defaultSettingsSection =
  "general-settings" satisfies SettingsSectionId;

export function initSettingsSectionMetadataChunk(): void {}

export function initProfileVisibilityChunk(): void {}
