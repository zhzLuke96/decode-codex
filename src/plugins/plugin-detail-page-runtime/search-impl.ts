// Restored from ref/webview/assets/plugin-detail-page-B_JVFW0l.js
// Semantic implementation for plugin and skill directory search, matching, and grouping helpers.

import { getSkillDisplayName } from "../skill-utils";

type SkillScope = "repo" | "user" | "system" | "admin" | string;

type SkillLike = {
  id?: string | null;
  name: string;
  path?: string | null;
  scope?: SkillScope | null;
  description?: string | null;
  shortDescription?: string | null;
  interface?: {
    displayName?: string | null;
    description?: string | null;
  } | null;
};

type InstalledSkillEntry<TSkill extends SkillLike = SkillLike> = {
  skill: TSkill;
};

type AppLike = {
  name: string;
  description?: string | null;
  shortDescription?: string | null;
  isAccessible?: boolean;
};

type MarketplaceLike = {
  name: string;
  displayName?: string | null;
  isBuiltIn?: boolean;
  path?: string | null;
};

type MarketplaceConfig = {
  source_type?: string | null;
  source?: string | null;
};

type MarketplacesConfig = {
  marketplaces?: Record<string, MarketplaceConfig | unknown> | null;
} | null;

const skillScopeRank: Record<string, number> = {
  repo: 0,
  user: 1,
  system: 2,
  admin: 3,
};

const featuredAppNames = [
  "Imagegen",
  "Sora",
  "PDF",
  "Doc",
  "Spreadsheet",
  "Playwright",
] as const;

const featuredAppNameSet = new Set(
  featuredAppNames.map((name) => name.toLowerCase()),
);
const featuredAppOrder = new Map(
  featuredAppNames.map((name, index) => [name.toLowerCase(), index]),
);

export function initPluginDirectorySearchRuntimeChunk(): void {}

export function parsePluginDirectoryInitialTab(value: unknown): {
  initialTab: "plugins" | "skills" | "apps" | "marketplace" | "mcps";
} {
  if (typeof value !== "object" || value == null) {
    return { initialTab: "plugins" };
  }

  const initialTab = Reflect.get(value, "initialTab");
  return initialTab === "plugins" ||
    initialTab === "skills" ||
    initialTab === "apps" ||
    initialTab === "marketplace" ||
    initialTab === "mcps"
    ? { initialTab }
    : { initialTab: "plugins" };
}

export function extractSkillNameFromPath(path: string): string | null {
  const parts = path
    .replace(/[\\/]+$/, "")
    .split(/[\\/]/)
    .filter(Boolean);
  if (parts.length === 0) return null;

  const filename = parts[parts.length - 1];
  const lowerFilename = filename.toLowerCase();
  if (lowerFilename === "skill.md" && parts.length > 1) {
    return parts[parts.length - 2];
  }
  return lowerFilename.endsWith(".md") ? filename.slice(0, -3) : filename;
}

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

function toSearchKeyVariants(value: string | null | undefined): string[] {
  const normalized = normalizeSearchText(value ?? "");
  if (normalized.length === 0) return [];

  const compact = normalized.replace(/[^a-z0-9]+/g, "");
  return compact === normalized ? [normalized] : [normalized, compact];
}

function collectSearchKeys(
  values: Array<string | null | undefined>,
): Set<string> {
  const keys = new Set<string>();
  for (const value of values) {
    for (const key of toSearchKeyVariants(value)) {
      keys.add(key);
    }
  }
  return keys;
}

export function getInstalledSkillSearchKeys(skill: SkillLike): Set<string> {
  return collectSearchKeys([
    skill.path == null ? null : extractSkillNameFromPath(skill.path),
    skill.name,
    getSkillDisplayName(skill),
    skill.interface?.description ?? skill.description,
  ]);
}

export function getRecommendedSkillSearchKeys(skill: SkillLike): Set<string> {
  return collectSearchKeys([skill.id, skill.name, getSkillDisplayName(skill)]);
}

export function buildInstalledSkillDisplayEntries<TSkill extends SkillLike>(
  skills: TSkill[],
): Array<InstalledSkillEntry<TSkill>> {
  const bestByName = skills.reduce((entries, skill) => {
    const existing = entries.get(skill.name);
    if (existing == null) {
      entries.set(skill.name, { skill });
      return entries;
    }

    const currentRank =
      skillScopeRank[String(skill.scope ?? "")] ?? Number.MAX_SAFE_INTEGER;
    const existingRank =
      skillScopeRank[String(existing.skill.scope ?? "")] ??
      Number.MAX_SAFE_INTEGER;
    if (
      currentRank < existingRank ||
      (currentRank === existingRank &&
        String(skill.path ?? "").localeCompare(
          String(existing.skill.path ?? ""),
        ) < 0)
    ) {
      existing.skill = skill;
    }
    return entries;
  }, new Map<string, InstalledSkillEntry<TSkill>>());

  return Array.from(bestByName.values()).sort(
    (left, right) =>
      getSkillDisplayName(left.skill).localeCompare(
        getSkillDisplayName(right.skill),
      ) || left.skill.name.localeCompare(right.skill.name),
  );
}

export function buildInstalledSkillMatchKeys(
  installedSkills: Array<InstalledSkillEntry>,
): Set<string> {
  const keys = new Set<string>();
  for (const { skill } of installedSkills) {
    for (const key of getInstalledSkillSearchKeys(skill)) {
      keys.add(key);
    }
  }
  return keys;
}

export function isRecommendedSkillInstalled({
  installedSkillMatchKeys,
  skill,
}: {
  installedSkillMatchKeys: Set<string>;
  skill: SkillLike;
}): boolean {
  for (const key of getRecommendedSkillSearchKeys(skill)) {
    if (installedSkillMatchKeys.has(key)) return true;
  }
  return false;
}

export function findInstalledSkillForRecommendedSkill<
  TSkill extends SkillLike,
>({
  installedSkills,
  skill,
}: {
  installedSkills: Array<InstalledSkillEntry<TSkill>>;
  skill: SkillLike;
}): TSkill | null {
  const recommendedKeys = getRecommendedSkillSearchKeys(skill);
  for (const { skill: installedSkill } of installedSkills) {
    for (const key of getInstalledSkillSearchKeys(installedSkill)) {
      if (recommendedKeys.has(key)) return installedSkill;
    }
  }
  return null;
}

export function filterRecommendedSkillsForInstall({
  installedRecommendedSkillIds,
  installedSkillMatchKeys,
  skills,
}: {
  installedRecommendedSkillIds: Set<string>;
  installedSkillMatchKeys: Set<string>;
  skills: SkillLike[];
}): SkillLike[] {
  return skills.filter(
    (skill) =>
      (skill.id != null && installedRecommendedSkillIds.has(skill.id)) ||
      !isRecommendedSkillInstalled({ installedSkillMatchKeys, skill }),
  );
}

export function filterInstalledSkillsOutsideRecommendations({
  installedSkills,
  recommendedSkills,
}: {
  installedSkills: Array<InstalledSkillEntry>;
  recommendedSkills: SkillLike[];
}): Array<InstalledSkillEntry> {
  const recommendedKeys = new Set<string>();
  for (const recommendedSkill of recommendedSkills) {
    for (const key of getRecommendedSkillSearchKeys(recommendedSkill)) {
      recommendedKeys.add(key);
    }
  }

  return installedSkills.filter(({ skill }) => {
    for (const key of getInstalledSkillSearchKeys(skill)) {
      if (recommendedKeys.has(key)) return false;
    }
    return true;
  });
}

function matchesSearchQuery(
  query: string,
  values: Array<string | null | undefined>,
): boolean {
  return query.length === 0
    ? true
    : values.join(" ").toLowerCase().includes(query);
}

export function selectResultKeysForTab({
  pluginResultKeys,
  skillResultKeys,
  tab,
}: {
  pluginResultKeys: string[];
  skillResultKeys: string[];
  tab: "plugins" | "skills";
}): string[] {
  switch (tab) {
    case "plugins":
      return pluginResultKeys;
    case "skills":
      return skillResultKeys;
  }
}

function getPathPluginId(path: string | null | undefined): string | null {
  if (path == null) return null;
  const match = path.match(/[\\/]plugins[\\/]([^\\/]+)[\\/]/i);
  return match?.[1] ?? null;
}

export function filterStandaloneInstalledSkills<TSkill extends SkillLike>(
  skills: TSkill[],
): Array<InstalledSkillEntry<TSkill>> {
  return buildInstalledSkillDisplayEntries(
    skills.filter((skill) => getPathPluginId(skill.path) == null),
  );
}

export function selectUninstalledRecommendedSkills({
  recommendedSkills,
  skills,
}: {
  recommendedSkills: SkillLike[] | null | undefined;
  skills: SkillLike[];
}): Array<InstalledSkillEntry> {
  return recommendedSkills == null
    ? []
    : filterInstalledSkillsOutsideRecommendations({
        installedSkills: filterStandaloneInstalledSkills(
          skills.filter((skill) => skill.scope === "user"),
        ),
        recommendedSkills,
      });
}

export function filterInstalledSkillsByQuery({
  skills,
  query,
}: {
  skills: Array<InstalledSkillEntry>;
  query: string;
}): Array<InstalledSkillEntry> {
  return skills.filter(({ skill }) =>
    matchesSearchQuery(query, [
      skill.name,
      getSkillDisplayName(skill),
      skill.interface?.description ?? skill.description,
    ]),
  );
}

export function filterSkillDefinitionsByQuery({
  skills,
  query,
}: {
  skills: SkillLike[];
  query: string;
}): SkillLike[] {
  return skills.filter((skill) =>
    matchesSearchQuery(query, [
      skill.name,
      skill.description,
      skill.shortDescription,
    ]),
  );
}

export function sortFeaturedAppsFirst<TApp extends AppLike>(
  apps: TApp[],
): TApp[] {
  return [...apps]
    .filter((app) => {
      const normalizedName = normalizeSearchText(app.name);
      const displayName = normalizeSearchText(
        getSkillDisplayName(app as SkillLike),
      );
      return (
        featuredAppNameSet.has(normalizedName) ||
        featuredAppNameSet.has(displayName)
      );
    })
    .sort(
      (left, right) =>
        (featuredAppOrder.get(
          normalizeSearchText(getSkillDisplayName(left as SkillLike)),
        ) ?? Number.MAX_SAFE_INTEGER) -
        (featuredAppOrder.get(
          normalizeSearchText(getSkillDisplayName(right as SkillLike)),
        ) ?? Number.MAX_SAFE_INTEGER),
    );
}

export function filterAppsByQuery<TApp extends AppLike>({
  apps,
  query,
}: {
  apps: TApp[];
  query: string;
}): TApp[] {
  return apps.filter((app) =>
    matchesSearchQuery(query, [
      app.name,
      app.description,
      app.shortDescription,
    ]),
  );
}

export function formatMarketplaceDisplayName(
  marketplace: MarketplaceLike,
): string {
  const displayName = marketplace.displayName?.trim();
  return displayName != null && displayName.length > 0
    ? getSkillDisplayName({ name: displayName })
    : getSkillDisplayName({ name: marketplace.name });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

export function collectGitMarketplaceNames(
  config: MarketplacesConfig,
): Set<string> {
  const marketplaces = config?.marketplaces;
  if (!isRecord(marketplaces)) return new Set();

  const names = new Set<string>();
  for (const [name, marketplace] of Object.entries(marketplaces)) {
    if (
      isRecord(marketplace) &&
      marketplace.source_type === "git" &&
      typeof marketplace.source === "string" &&
      marketplace.source.length > 0
    ) {
      names.add(name);
    }
  }
  return names;
}

export function collectMarketplaceNames(
  config: MarketplacesConfig,
): Set<string> {
  const marketplaces = config?.marketplaces;
  return isRecord(marketplaces)
    ? new Set(Object.keys(marketplaces))
    : new Set();
}

export function isConfiguredUserMarketplace(
  marketplace: MarketplaceLike,
  configuredMarketplaceNames: Set<string>,
): boolean {
  return (
    !marketplace.isBuiltIn && configuredMarketplaceNames.has(marketplace.name)
  );
}

export function filterConfiguredMarketplacesByQuery<
  TMarketplace extends MarketplaceLike,
>({
  configuredMarketplaceNames,
  marketplaces,
  query,
}: {
  configuredMarketplaceNames: Set<string>;
  marketplaces: TMarketplace[];
  query: string;
}): TMarketplace[] {
  return marketplaces.filter((marketplace) =>
    isConfiguredUserMarketplace(marketplace, configuredMarketplaceNames)
      ? matchesSearchQuery(query, [
          formatMarketplaceDisplayName(marketplace),
          marketplace.name,
          marketplace.path,
        ])
      : false,
  );
}

export function partitionAppsByAccessibility<TApp extends AppLike>(
  apps: TApp[],
): {
  installedApps: TApp[];
  discoverApps: TApp[];
} {
  return apps.reduce(
    (groups, app) => {
      if (app.isAccessible) {
        groups.installedApps.push(app);
      } else {
        groups.discoverApps.push(app);
      }
      return groups;
    },
    { installedApps: [] as TApp[], discoverApps: [] as TApp[] },
  );
}
