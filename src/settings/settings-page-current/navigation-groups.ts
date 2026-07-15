// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Settings navigation ordering, grouping, and section helpers.
import { defineMessage } from "../../vendor/react-intl";
import type {
  SettingsNavigationGroup,
  SettingsNavigationGroupDefinition,
  SettingsNavigationSection,
  SettingsSectionSlug,
} from "./types";

export const preferredSettingsSectionOrder = [
  "general-settings",
  "import",
  "profile",
  "appearance",
  "appshots",
  "agent",
  "personalization",
  "pets",
  "usage",
  "keyboard-shortcuts",
  "codex-micro",
  "mcp-settings",
  "hooks-settings",
  "connections",
  "cloud-settings",
  "cloud-environments",
  "code-review",
  "git-settings",
  "local-environments",
  "worktrees",
  "browser-use",
  "computer-use",
  "data-controls",
] satisfies readonly SettingsSectionSlug[];

export const settingsNavigationGroups = [
  {
    key: "personal",
    heading: defineMessage({
      id: "settings.nav.heading.personal",
      defaultMessage: "Personal",
      description: "Heading for personal settings in the settings navigation",
    }),
    slugs: [
      "general-settings",
      "import",
      "profile",
      "appearance",
      "agent",
      "personalization",
      "pets",
      "keyboard-shortcuts",
      "usage",
    ],
  },
  {
    key: "integrations",
    heading: defineMessage({
      id: "settings.nav.heading.integrations",
      defaultMessage: "Integrations",
      description:
        "Heading for integration settings in the settings navigation",
    }),
    slugs: [
      "appshots",
      "codex-micro",
      "mcp-settings",
      "plugins-settings",
      "skills-settings",
      "browser-use",
      "computer-use",
    ],
  },
  {
    key: "coding",
    heading: defineMessage({
      id: "settings.nav.heading.coding",
      defaultMessage: "Coding",
      description: "Heading for coding settings in the settings navigation",
    }),
    slugs: [
      "hooks-settings",
      "connections",
      "cloud-settings",
      "cloud-environments",
      "code-review",
      "git-settings",
      "local-environments",
      "environments",
      "worktrees",
    ],
  },
  {
    key: "archived",
    heading: defineMessage({
      id: "settings.nav.heading.archived",
      defaultMessage: "Archived",
      description: "Heading for archived settings in the settings navigation",
    }),
    slugs: ["data-controls"],
  },
] satisfies readonly SettingsNavigationGroupDefinition[];

export const hostScopedSettingsSections = [
  "profile",
  "agent",
  "personalization",
  "mcp-settings",
  "hooks-settings",
  "local-environments",
  "worktrees",
  "data-controls",
] satisfies readonly SettingsSectionSlug[];

export const hostScopedDefaultSettingsSection =
  "agent" satisfies SettingsSectionSlug;

export function isInteractiveSettingsSection(
  section: SettingsNavigationSection,
): boolean {
  return !section.disabled && section.externalUrl == null;
}

export function getGroupSelectableSections(
  group: SettingsNavigationGroup,
): SettingsNavigationSection[] {
  return group.sections.filter(isInteractiveSettingsSection);
}

export function getNavigableSectionSlugs(
  section: SettingsNavigationSection,
): SettingsSectionSlug[] {
  return isInteractiveSettingsSection(section) ? [section.slug] : [];
}

export function getSearchResultSectionSlug(result: {
  sectionSlug: SettingsSectionSlug;
}): SettingsSectionSlug {
  return result.sectionSlug;
}

export function groupSettingsSectionsByHeading(
  sections: readonly SettingsNavigationSection[],
  groups: readonly SettingsNavigationGroupDefinition[],
): SettingsNavigationGroup[] {
  const sectionsBySlug = new Map(
    sections.map((section) => [section.slug, section]),
  );
  const groupedSections = groups.map((group) => ({
    heading: group.heading,
    key: group.key,
    sections: group.slugs.flatMap((slug) => {
      const section = sectionsBySlug.get(slug);
      if (section == null) return [];
      sectionsBySlug.delete(slug);
      return [section];
    }),
  }));
  const ungroupedSections = Array.from(sectionsBySlug.values());
  if (ungroupedSections.length > 0) {
    groupedSections[groupedSections.length - 1]?.sections.push(
      ...ungroupedSections,
    );
  }
  return groupedSections.filter((group) => group.sections.length > 0);
}

export function orderSettingsSectionsByPreferredSlugs(
  sections: readonly SettingsNavigationSection[],
  preferredSlugs: readonly SettingsSectionSlug[],
): SettingsNavigationSection[] {
  const sectionsBySlug = new Map(
    sections.map((section) => [section.slug, section]),
  );
  return [
    ...preferredSlugs.flatMap((slug) => {
      const section = sectionsBySlug.get(slug);
      if (section == null) return [];
      sectionsBySlug.delete(slug);
      return [section];
    }),
    ...sectionsBySlug.values(),
  ];
}
