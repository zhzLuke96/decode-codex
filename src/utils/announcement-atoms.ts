// Restored from ref/webview/assets/announcement-atoms-CRReXLJz.js
import { _appScopeX } from "../boundaries/app-scope";
import { persistedAtom } from "../utils/persisted-atom";
type LastSeenByAccount = Record<string, number>;
const announcementDismissedSignal = _appScopeX(false);
const hasSeenKnowledgeWorkAnnouncementAtom = persistedAtom(
  "has-seen-knowledge-work-announcement",
  false,
);
const hasSeenFastModeAnnouncementAtom = persistedAtom(
  "has-seen-fast-mode-announcement",
  false,
);
const hasSeenWorkPluginsAnnouncementAtom = persistedAtom(
  "has-seen-work-plugins-announcement",
  false,
);
const hasSeenAppgenAnnouncementAtom = persistedAtom(
  "has-seen-appgen-announcement",
  false,
);
const workspaceMessageLastSeenAtByAccountAtom = persistedAtom(
  "workspace-message-last-seen-at-by-account",
  {} as LastSeenByAccount,
);
const seenModelUpgradeListAtom = persistedAtom<string[]>(
  "seen-model-upgrade-list",
  [],
);
const latestModelSeenAtom = persistedAtom<string | null>(
  "latest-model-seen",
  null,
);
function getWorkspaceMessageLastSeenAt(
  lastSeenByAccount: LastSeenByAccount,
  accountId: string | null | undefined,
) {
  return accountId == null ? null : (lastSeenByAccount[accountId] ?? null);
}
function markWorkspaceMessageSeenAt(
  lastSeenByAccount: LastSeenByAccount,
  accountId: string,
  seenAt: number,
) {
  const currentSeenAt = getWorkspaceMessageLastSeenAt(
    lastSeenByAccount,
    accountId,
  );
  return currentSeenAt != null && currentSeenAt >= seenAt
    ? lastSeenByAccount
    : {
        ...lastSeenByAccount,
        [accountId]: seenAt,
      };
}
export {
  announcementDismissedSignal,
  getWorkspaceMessageLastSeenAt,
  hasSeenWorkPluginsAnnouncementAtom,
  hasSeenFastModeAnnouncementAtom,
  workspaceMessageLastSeenAtByAccountAtom,
  hasSeenKnowledgeWorkAnnouncementAtom,
  markWorkspaceMessageSeenAt,
  hasSeenAppgenAnnouncementAtom,
  seenModelUpgradeListAtom,
  latestModelSeenAtom,
};
