// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-file "viewed" state for branch review: a keyed atom family that remembers which
// revision of each (hostId, path) the user marked as viewed, plus key/equality helpers.

import { createKeyedAtomFamily } from "../boundaries/onboarding-commons-externals.facade";

const VIEWED_FILE_STORAGE_PREFIX = "review-viewed-file-v1";

export function buildViewedFileKey(hostId: string, path: string): string {
  return `${VIEWED_FILE_STORAGE_PREFIX}:${JSON.stringify([hostId, path])}`;
}

export function isFileViewed(
  viewedRevision: string | null,
  currentRevision: string | null,
): boolean {
  return currentRevision != null && viewedRevision === currentRevision;
}

export const viewedFileRevisionAtomFamily = createKeyedAtomFamily<
  string | null
>((value) => value, null);
