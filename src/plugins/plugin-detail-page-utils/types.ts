// Restored from ref/webview/assets/plugin-detail-page-utils-DeDVCX5Q.js
// Shared types for plugin detail utility helpers.

export type DirectoryAppBranding = {
  category?: string | null;
  developer?: unknown;
  isDiscoverableApp?: boolean;
  privacyPolicy?: unknown;
  termsOfService?: unknown;
  website?: unknown;
};

export type DirectoryApp = {
  appMetadata?: {
    categories?: readonly string[] | null;
  } | null;
  branding?: DirectoryAppBranding | null;
  description?: unknown;
  id: string;
  logoUrl?: unknown;
  logoUrlDark?: unknown;
  name?: string;
};

export type PluginApp = {
  category?: string | null;
  id: string;
};

export type AppTemplate = {
  canonicalConnectorId?: string | null;
  category?: string | null;
  description?: unknown;
  logoUrl?: unknown;
  logoUrlDark?: unknown;
  templateId: string;
};

export type PluginInstallLocation = {
  path?: string | null;
  type: string;
};

export type InstalledSkill = {
  name: string;
  path?: string | null;
};

export type InstalledSkillEntry = {
  skill: InstalledSkill;
};

export type PluginSkill = {
  name: string;
  path?: string | null;
};

export type InstalledSkillLookup = {
  byComparableKey: Map<string, InstalledSkill[]>;
  byName: Map<string, InstalledSkill>;
  byPath: Map<string, InstalledSkill>;
};
