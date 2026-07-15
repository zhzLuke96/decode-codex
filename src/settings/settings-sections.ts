// Restored from ref/webview/assets/settings-sections-R3FWArjV.js
// settings-sections-R3FWArjV chunk restored from the Codex webview bundle.
export const SETTINGS_SECTION_IDS = [
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
];

export const SETTINGS_SECTIONS = [
  { slug: "general-settings" },
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

export const DEFAULT_SETTINGS_SECTION = "general-settings";

export const settingsSectionIds = SETTINGS_SECTION_IDS;

export type SettingsSectionId = (typeof settingsSectionIds)[number];

export type SettingsSectionEntry = {
  slug: SettingsSectionId;
};

export const settingsNavigationSections =
  SETTINGS_SECTIONS as readonly SettingsSectionEntry[];

export const defaultSettingsSection = DEFAULT_SETTINGS_SECTION;

export function initSettingsSectionMetadataChunk(): void {}
