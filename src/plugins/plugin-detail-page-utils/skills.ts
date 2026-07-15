// Restored from ref/webview/assets/plugin-detail-page-utils-DeDVCX5Q.js
// Skill matching helpers for installed plugin skills.

import type {
  InstalledSkill,
  InstalledSkillEntry,
  InstalledSkillLookup,
  PluginSkill,
} from "./types";

export function matchInstalledPluginSkills({
  installedSkills,
  pluginSkills,
}: {
  installedSkills: InstalledSkillEntry[];
  pluginSkills: PluginSkill[];
}): {
  installedSkills: Array<{
    installedSkill: InstalledSkill;
    pluginSkill: PluginSkill;
  }>;
  unavailableSkills: PluginSkill[];
} {
  const lookup = buildInstalledSkillLookup(installedSkills);
  const matchedInstalledSkills: Array<{
    installedSkill: InstalledSkill;
    pluginSkill: PluginSkill;
  }> = [];
  const unavailableSkills: PluginSkill[] = [];

  for (const pluginSkill of pluginSkills) {
    const installedSkill = findInstalledSkillForPluginSkill(
      pluginSkill,
      lookup,
    );
    if (installedSkill != null) {
      matchedInstalledSkills.push({
        installedSkill,
        pluginSkill,
      });
      continue;
    }

    unavailableSkills.push(pluginSkill);
  }

  return {
    installedSkills: matchedInstalledSkills,
    unavailableSkills,
  };
}

function buildInstalledSkillLookup(
  installedSkills: InstalledSkillEntry[],
): InstalledSkillLookup {
  const byComparableKey = new Map<string, InstalledSkill[]>();
  const byName = new Map<string, InstalledSkill>();
  const byPath = new Map<string, InstalledSkill>();

  for (const { skill } of installedSkills) {
    if (skill.path != null) {
      byPath.set(skill.path, skill);
    }
    byName.set(skill.name, skill);

    const comparableKey = toComparableSkillName(skill.name);
    const skillsForKey = byComparableKey.get(comparableKey);
    if (skillsForKey == null) {
      byComparableKey.set(comparableKey, [skill]);
      continue;
    }

    skillsForKey.push(skill);
  }

  return {
    byComparableKey,
    byName,
    byPath,
  };
}

function findInstalledSkillForPluginSkill(
  pluginSkill: PluginSkill,
  lookup: InstalledSkillLookup,
): InstalledSkill | null {
  const installedSkill =
    (pluginSkill.path == null
      ? undefined
      : lookup.byPath.get(pluginSkill.path)) ??
    lookup.byName.get(pluginSkill.name);

  if (installedSkill != null) return installedSkill;

  const skillsForComparableName = lookup.byComparableKey.get(
    toComparableSkillName(pluginSkill.name),
  );
  return skillsForComparableName?.length === 1
    ? skillsForComparableName[0]
    : null;
}

function toComparableSkillName(name: string | null | undefined): string {
  return (name ?? "")
    .trim()
    .toLowerCase()
    .split(":")
    .map((part) => part.replace(/[\s_-]+/g, ""))
    .join(":");
}
