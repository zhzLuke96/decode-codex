// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Issues a "skills/list" request over the given requester, logging request/ok
// metrics and flagging any returned skills that are missing a short description.

import { appLogger } from "../runtime/app-logger";

export interface SkillsListRequestOptions {
  forceReload?: boolean;
}

interface SkillsListSkill {
  shortDescription?: string;
  short_description?: string;
}

interface SkillsListEntry {
  cwd: string;
  skills: SkillsListSkill[];
}

export interface SkillsListResponse {
  data: SkillsListEntry[];
}

export interface SkillsListRequester {
  sendRequest(
    method: "skills/list",
    params: Record<string, unknown>,
  ): Promise<SkillsListResponse>;
}

export async function requestSkillsList(
  requester: SkillsListRequester,
  cwds: readonly string[],
  options?: SkillsListRequestOptions,
): Promise<SkillsListResponse> {
  const params: Record<string, unknown> = {
    ...(cwds.length > 0 ? { cwds } : {}),
    ...(options?.forceReload ? { forceReload: true } : {}),
  };

  appLogger.info("Skills/list request", {
    safe: {
      cwdsCount: cwds.length,
      forceReload: params.forceReload === true,
    },
    sensitive: {},
  });

  const response = await requester.sendRequest("skills/list", params);

  let missingShortDescriptionCount = 0;
  const affectedCwds = new Set<string>();
  for (const entry of response.data) {
    for (const skill of entry.skills) {
      if (!(skill.shortDescription ?? skill.short_description)) {
        missingShortDescriptionCount += 1;
        affectedCwds.add(entry.cwd);
      }
    }
  }

  if (missingShortDescriptionCount > 0) {
    appLogger.info(
      "Skills/list missing short_description count affectedCwdsCount",
      {
        safe: {
          missingShortDescriptionCount,
          affectedCwdsCount: affectedCwds.size,
        },
        sensitive: {},
      },
    );
  }

  appLogger.info("Skills/list ok", {
    safe: { entryCount: response.data.length },
    sensitive: {},
  });

  return response;
}
