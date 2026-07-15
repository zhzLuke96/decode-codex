// Restored from ref/webview/assets/app-initial~app-main~debug-window-page~debug-modal~home-ambient-suggestions-content-C7qplHAQ.js
// Home announcement state shared by ambient suggestions, debug modal, and app-main surfaces.
import { once } from "../runtime/commonjs-interop";
import {
  createAtomSignal,
  initSignalStateRuntime,
} from "../runtime/signal-state-runtime";
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../runtime/shared-utility-runtime";

type LastSeenByAccount = Record<string, number>;

export let homeAnnouncementDismissedSignal: unknown;
export let hasSeenKnowledgeWorkAnnouncementSignal: unknown;
export let hasSeenFastModeAnnouncementSignal: unknown;
export let hasSeenWorkPluginsAnnouncementSignal: unknown;
export let workspaceMessageLastSeenAtByAccountSignal: unknown;

export function getWorkspaceMessageLastSeenAt(
  lastSeenByAccount: LastSeenByAccount,
  accountId: string | null | undefined,
): number | null {
  return accountId == null ? null : (lastSeenByAccount[accountId] ?? null);
}

export function markWorkspaceMessageSeenAt(
  lastSeenByAccount: LastSeenByAccount,
  accountId: string,
  seenAt: number,
): LastSeenByAccount {
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

export const initHomeAnnouncementSignalsChunk = once(() => {
  initSignalStateRuntime();
  initPersistentSignalRuntime();
  homeAnnouncementDismissedSignal = createAtomSignal(false);
  hasSeenKnowledgeWorkAnnouncementSignal = createPersistentSignal(
    "has-seen-knowledge-work-announcement",
    false,
  );
  hasSeenFastModeAnnouncementSignal = createPersistentSignal(
    "has-seen-fast-mode-announcement",
    false,
  );
  hasSeenWorkPluginsAnnouncementSignal = createPersistentSignal(
    "has-seen-work-plugins-announcement",
    false,
  );
  workspaceMessageLastSeenAtByAccountSignal = createPersistentSignal(
    "workspace-message-last-seen-at-by-account",
    {} as LastSeenByAccount,
  );
});
