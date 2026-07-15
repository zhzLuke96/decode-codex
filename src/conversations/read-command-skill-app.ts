// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the matching app reference for a read command that targets a skill definition file.
import {
  resolveSkillPathInfoFromReadSummary,
  resolveSkillAppFromPath,
} from "../boundaries/onboarding-commons-externals.facade";

type ParsedReadCommand = {
  type: string;
  [key: string]: unknown;
};

type ConversationExecItem = {
  parsedCmd: ParsedReadCommand;
  cwd: string | null | undefined;
};

type SkillPathInfo = {
  isSkillDefinitionFile?: boolean;
  [key: string]: unknown;
};

type ResolvedSkillApp = {
  id: string;
  name: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
};

export type ReadCommandSkillAppReference = {
  key: string;
  logoUrl: string | null;
  logoUrlDark: string | null;
  name: string;
  nativeAppReference: null;
};

export function resolveReadCommandSkillApp({
  item,
  resolvedApps,
}: {
  item: ConversationExecItem;
  resolvedApps: readonly ResolvedSkillApp[];
}): ReadCommandSkillAppReference | null {
  if (item.parsedCmd.type !== "read") {
    return null;
  }
  const skillPathInfo: SkillPathInfo | null =
    resolveSkillPathInfoFromReadSummary({
      summary: item.parsedCmd,
      cwd: item.cwd,
    });
  if (skillPathInfo?.isSkillDefinitionFile !== true) {
    return null;
  }
  const matchingApp: ResolvedSkillApp | null = resolveSkillAppFromPath({
    resolvedApps,
    skillPathInfo,
  });
  if (matchingApp == null) {
    return null;
  }
  return {
    key: `app:${matchingApp.id}`,
    logoUrl: matchingApp.logoUrl ?? null,
    logoUrlDark: matchingApp.logoUrlDark ?? null,
    name: matchingApp.name,
    nativeAppReference: null,
  };
}
