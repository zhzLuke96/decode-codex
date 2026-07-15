// Restored from ref/webview/assets/skill-utils-CHI5umVz.js
// Utilities for skill display names, mentions, lookup, and prompt prefixes.
import { parseDirectivesA, parseDirectivesL } from "../utils/parse-directives";
type SkillDefinition = {
  name: string;
  path?: string | null;
  interface?: {
    displayName?: string | null;
    defaultPrompt?: string | null;
  } | null;
};
type SkillCatalog = {
  data: Array<{
    skills: SkillDefinition[];
  }>;
};
export function getSkillDisplayName(skill: SkillDefinition): string {
  return skill.interface?.displayName?.trim() || parseDirectivesA(skill.name);
}
function getDefaultPrompt(skill: SkillDefinition): string | null {
  const prompt = skill.interface?.defaultPrompt;
  if (!prompt) return null;
  const trimmedPrompt = prompt.trim();
  return trimmedPrompt.length === 0 ? null : trimmedPrompt;
}
export function formatSkillMention({
  name,
  path,
}: Pick<SkillDefinition, "name" | "path">): string {
  return path ? `[$${name}](${parseDirectivesL(path)})` : `$${name}`;
}
export function findSkillByName(
  catalog: SkillCatalog,
  requestedName: string,
): SkillDefinition | null {
  const normalizedName = requestedName.toLowerCase();
  const suffixMatches: SkillDefinition[] = [];
  for (const source of catalog.data) {
    const exactMatch = source.skills.find(
      (skill) => skill.name.toLowerCase() === normalizedName,
    );
    if (exactMatch != null) return exactMatch;
    suffixMatches.push(
      ...source.skills.filter((skill) =>
        skill.name.toLowerCase().endsWith(`:${normalizedName}`),
      ),
    );
  }
  return suffixMatches.length === 1 ? suffixMatches[0] : null;
}
function ensureTrailingSpace(value: string): string {
  return value.endsWith(" ") ? value : `${value} `;
}
export function buildSkillPromptPrefix(skill: SkillDefinition): string {
  const defaultPrompt = getDefaultPrompt(skill);
  const mention = formatSkillMention({
    name: skill.name,
    path: skill.path,
  });
  if (!defaultPrompt) return ensureTrailingSpace(mention);
  const normalizedPrompt = defaultPrompt.toLowerCase();
  const markdownMentionPrefix = `[$${skill.name.toLowerCase()}](`;
  if (normalizedPrompt.includes(markdownMentionPrefix)) {
    return ensureTrailingSpace(defaultPrompt);
  }
  const plainMention = `$${skill.name.toLowerCase()}`;
  return !skill.path && normalizedPrompt.includes(plainMention)
    ? ensureTrailingSpace(defaultPrompt)
    : ensureTrailingSpace(`${defaultPrompt} ${mention}`);
}
