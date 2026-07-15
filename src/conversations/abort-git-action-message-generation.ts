// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Abort the in-flight commit / pull-request message generation request for a
// given host + working directory by aborting its registered AbortController.

import {
  gitActionMessageGenerationControllers,
  getGitActionMessageGenerationKey,
} from "../boundaries/onboarding-commons-externals.facade";

type GitActionMessageGenerationTarget = {
  hostId: string;
  cwd: string;
};

export function abortGitActionMessageGeneration(
  target: GitActionMessageGenerationTarget,
): void {
  gitActionMessageGenerationControllers
    .get(getGitActionMessageGenerationKey(target))
    ?.abort();
}
