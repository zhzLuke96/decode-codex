// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Skill-aware summaries for exploration read/search/list commands.

type IntlLike = {
  formatMessage(
    descriptor: {
      defaultMessage?: string;
      description?: string;
      id?: string;
    },
    values?: Record<string, unknown>,
  ): string;
};

type ExplorationSummary = {
  isFinished?: boolean;
  name?: string | null;
  path?: string | null;
  query?: string | null;
  type: "read" | "search" | "list_files" | string;
};

export function formatRedactedSearchQuery(
  query: string,
  formatSearchQueryTermList: (terms: string[]) => string = formatQuotedList,
): string {
  const alternatives = parseSearchAlternatives(query);
  const terms =
    alternatives.length < 2
      ? [decodeSearchQueryTerm(query) ?? query]
      : alternatives
          .map((term) => decodeSearchQueryTerm(term))
          .filter((term): term is string => term != null && term.length > 0);
  if (terms.length === 0) return query;
  if (alternatives.length >= 2 && terms.length !== alternatives.length) {
    return query;
  }
  return formatSearchQueryTermList(terms.map(quoteSearchTerm));
}

export function summarizeExplorationCommand({
  summary,
  cwd,
  intl,
  threadDetailLevel,
  formatSearchQuery,
}: {
  cwd?: string | null;
  formatSearchQuery?: (query: string) => string;
  intl: IntlLike;
  summary: ExplorationSummary;
  threadDetailLevel?: string;
}): string | null {
  const skillInfo = resolveSkillPathInfo({ summary, cwd });
  if (skillInfo == null) return null;

  switch (summary.type) {
    case "read":
      return summarizeSkillRead(summary, skillInfo, intl, threadDetailLevel);
    case "list_files":
      return intl.formatMessage(
        {
          id: "localConversationTurn.exploration.skill.listFiles",
          defaultMessage: "Listed files in {skillName} skill",
          description:
            "Exploration row for listing files in a Codex skill directory",
        },
        { skillName: skillInfo.skillName },
      );
    case "search":
      return summarizeSkillSearch(summary, skillInfo, intl, formatSearchQuery);
    default:
      return null;
  }
}

function summarizeSkillRead(
  summary: ExplorationSummary,
  skillInfo: { isSkillDefinitionFile: boolean; skillName: string },
  intl: IntlLike,
  threadDetailLevel?: string,
): string {
  if (!skillInfo.isSkillDefinitionFile) {
    return intl.formatMessage(
      {
        id: "localConversationTurn.exploration.skill.read",
        defaultMessage: "Read {skillName} skill",
        description:
          "Exploration row for reading a file from a Codex skill directory",
      },
      { skillName: skillInfo.skillName },
    );
  }
  if (threadDetailLevel === "STEPS_PROSE") {
    return intl.formatMessage(
      {
        id: summary.isFinished
          ? "localConversationTurn.exploration.skill.definition.read.steps.complete"
          : "localConversationTurn.exploration.skill.definition.read.steps.active",
        defaultMessage: summary.isFinished
          ? "Read {skillName} skill"
          : "Reading {skillName} skill",
        description:
          "Simplified exploration row for reading a skill definition",
      },
      { skillName: skillInfo.skillName },
    );
  }
  return intl.formatMessage(
    {
      id: "localConversationTurn.exploration.skill.definition.read",
      defaultMessage: "Read {skillName} skill",
      description: "Exploration row for reading a Codex skill definition",
    },
    { skillName: skillInfo.skillName },
  );
}

function summarizeSkillSearch(
  summary: ExplorationSummary,
  skillInfo: { skillName: string },
  intl: IntlLike,
  formatSearchQuery?: (query: string) => string,
): string {
  if (summary.query != null && summary.query.trim().length > 0) {
    return intl.formatMessage(
      {
        id: "localConversationTurn.exploration.skill.searchFor",
        defaultMessage: "Searched for {query} in {skillName} skill",
        description:
          "Exploration row for searching for a query in a Codex skill directory",
      },
      {
        query: formatSearchQuery?.(summary.query) ?? summary.query,
        skillName: skillInfo.skillName,
      },
    );
  }
  return intl.formatMessage(
    {
      id: "localConversationTurn.exploration.skill.search",
      defaultMessage: "Searched in {skillName} skill",
      description:
        "Exploration row for searching in a Codex skill directory",
    },
    { skillName: skillInfo.skillName },
  );
}

function parseSearchAlternatives(query: string): string[] {
  const alternatives: string[] = [];
  let start = 0;
  let isEscaped = false;
  for (let index = 0; index < query.length; index += 1) {
    const character = query[index];
    if (isEscaped) {
      isEscaped = false;
      continue;
    }
    if (character === "\\") {
      isEscaped = true;
      continue;
    }
    if (character === "|") {
      alternatives.push(query.slice(start, index));
      start = index + 1;
    }
  }
  if (alternatives.length === 0) return [];
  alternatives.push(query.slice(start));
  return alternatives;
}

function decodeSearchQueryTerm(term: string): string | null {
  const invalidCharacters = new Set([
    ".",
    "*",
    "+",
    "?",
    "^",
    "$",
    "{",
    "}",
    "(",
    ")",
    "|",
    "[",
    "]",
  ]);
  let result = "";
  let isEscaped = false;
  for (const character of term) {
    if (isEscaped) {
      if (/^[A-Za-z0-9]$/.test(character)) return null;
      result += character;
      isEscaped = false;
      continue;
    }
    if (character === "\\") {
      isEscaped = true;
      continue;
    }
    if (invalidCharacters.has(character)) return null;
    result += character;
  }
  return isEscaped ? null : result;
}

function quoteSearchTerm(term: string): string {
  return `\u201c${term.replace(/^["']+/, "").replace(/["']+$/, "")}\u201d`;
}

function formatQuotedList([first = "", ...rest]: string[]): string {
  let result = first;
  rest.forEach((term, index) => {
    const separator =
      index === rest.length - 1
        ? rest.length === 1
          ? " and "
          : ", and "
        : ", ";
    result += `${separator}${term}`;
  });
  return result;
}

export function resolveSkillPathInfoFromReadSummary({
  summary,
  cwd,
}: {
  cwd?: string | null;
  summary: ExplorationSummary;
}): { isSkillDefinitionFile: boolean; skillName: string } | null {
  const summaryPath =
    summary.type === "read"
      ? (summary.path ?? summary.name)
      : summary.type === "list_files" || summary.type === "search"
        ? summary.path
        : null;
  if (summaryPath == null || summaryPath.length === 0) return null;
  const normalizedPath = normalizeExplorationPath(summaryPath, cwd);
  const segments = normalizedPath.split("/").filter(Boolean);
  const skillsIndex = segments.lastIndexOf("skills");
  if (skillsIndex === -1) return null;
  let skillIndex = skillsIndex + 1;
  if (segments[skillIndex]?.startsWith(".") && segments[skillIndex + 1]) {
    skillIndex += 1;
  }
  const skillName = segments[skillIndex];
  if (skillName == null || skillName.length === 0) return null;
  const relativePath = segments.slice(skillIndex + 1);
  return {
    skillName,
    isSkillDefinitionFile:
      relativePath.length === 1 && relativePath[0] === "SKILL.md",
  };
}

const resolveSkillPathInfo = resolveSkillPathInfoFromReadSummary;

function normalizeExplorationPath(path: string, cwd?: string | null): string {
  const slashPath = path.replaceAll("\\", "/");
  if (
    slashPath.startsWith("/") ||
    slashPath.startsWith("~") ||
    /^[A-Za-z]:\//.test(slashPath) ||
    cwd == null ||
    cwd.length === 0
  ) {
    return slashPath;
  }
  return `${cwd.replaceAll("\\", "/").replace(/\/+$/, "")}/${slashPath}`;
}
