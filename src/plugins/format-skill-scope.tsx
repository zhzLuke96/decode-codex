// Restored from ref/webview/assets/format-skill-scope-CChDxa0f.js
// format-skill-scope-CChDxa0f chunk restored from the Codex webview bundle.
import { defineMessages, type IntlShape } from "react-intl";
type SkillScope = "admin" | "repo" | "system" | "user";
const skillScopeMessages = defineMessages({
  system: {
    id: "skills.scope.system",
    defaultMessage: "System",
    description: "Indicates a system scoped skill",
  },
  repo: {
    id: "skills.scope.repo",
    defaultMessage: "Repo",
    description: "Indicates a skill scoped to the current repository",
  },
  user: {
    id: "skills.scope.user",
    defaultMessage: "User",
    description: "Indicates a skill scoped to the user",
  },
  admin: {
    id: "skills.scope.admin",
    defaultMessage: "Admin",
    description: "Indicates a skill scoped to the admin",
  },
});
const skillScopeDisplayMessages = defineMessages({
  system: {
    id: "skills.scope.builtIn",
    defaultMessage: "System",
    description: "Label for system skills",
  },
  repo: {
    id: "skills.scope.team",
    defaultMessage: "Team",
    description: "Label for team skills",
  },
  user: {
    id: "skills.scope.personal",
    defaultMessage: "Personal",
    description: "Label for personal skills",
  },
  admin: {
    id: "skills.scope.adminInstalled",
    defaultMessage: "Admin installed",
    description: "Label for admin installed skills",
  },
});
function formatBasicSkillScope(scope: SkillScope, intl: IntlShape) {
  return intl.formatMessage(skillScopeMessages[scope]);
}
function basenameFromPath(value: string) {
  const trimmedPath = value.replace(/[\\/]+$/, "");
  const separatorIndex = Math.max(
    trimmedPath.lastIndexOf("/"),
    trimmedPath.lastIndexOf("\\"),
  );
  return separatorIndex === -1
    ? trimmedPath
    : trimmedPath.slice(separatorIndex + 1);
}
function formatSkillScopeLabel({
  scope,
  intl,
  repoLabel,
  adminLabel,
}: {
  adminLabel?: string;
  intl: IntlShape;
  repoLabel?: string;
  scope: SkillScope;
}) {
  if (scope === "repo")
    return repoLabel ?? intl.formatMessage(skillScopeDisplayMessages.repo);
  if (scope === "admin") {
    return adminLabel ?? intl.formatMessage(skillScopeDisplayMessages.admin);
  }
  const message = skillScopeDisplayMessages[scope];
  return message
    ? intl.formatMessage(message)
    : formatBasicSkillScope(scope, intl);
}
export function formatRepoSkillScopeLabel({
  skillPath,
  roots,
  fallbackLabel,
}: {
  fallbackLabel: string;
  roots: string[];
  skillPath: string;
}) {
  const bestRoot = roots.reduce<string | null>(
    (bestMatch, root) =>
      skillPath.startsWith(root) &&
      (!bestMatch || root.length > bestMatch.length)
        ? root
        : bestMatch,
    null,
  );
  if (!bestRoot) return fallbackLabel;
  const label = basenameFromPath(bestRoot);
  return label.length > 0 ? label : fallbackLabel;
}
export function formatSkillScope({
  skill,
  roots,
  intl,
  fallbackRepoLabel,
  adminLabel,
}: {
  adminLabel?: string;
  fallbackRepoLabel?: string;
  intl: IntlShape;
  roots: string[];
  skill: {
    path: string;
    scope: SkillScope;
  };
}) {
  return formatSkillScopeLabel({
    scope: skill.scope,
    intl,
    repoLabel: formatRepoSkillScopeLabel({
      skillPath: skill.path,
      roots,
      fallbackLabel:
        fallbackRepoLabel ??
        formatSkillScopeLabel({
          scope: "repo",
          intl,
        }),
    }),
    adminLabel,
  });
}
export { formatSkillScopeLabel };
