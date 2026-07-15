// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// Persistent announcement atoms shared by home ambient suggestion NUX hooks.
import { useAtom } from "jotai";

import {
  announcementDismissedSignal as homeAnnouncementDismissedSignal,
  hasSeenFastModeAnnouncementAtom as hasSeenFastModeAnnouncementSignal,
  hasSeenKnowledgeWorkAnnouncementAtom as hasSeenKnowledgeWorkAnnouncementSignal,
  hasSeenWorkPluginsAnnouncementAtom as hasSeenWorkPluginsAnnouncementSignal,
  latestModelSeenAtom,
  seenModelUpgradeListAtom,
  workspaceMessageLastSeenAtByAccountAtom,
} from "../../utils/announcement-atoms";

export type SetAtomValue<TValue> = (
  value: TValue | ((current: TValue) => TValue),
) => void;

export type LastSeenByAccount = Record<string, number>;

export {
  hasSeenFastModeAnnouncementSignal,
  hasSeenKnowledgeWorkAnnouncementSignal,
  hasSeenWorkPluginsAnnouncementSignal,
  homeAnnouncementDismissedSignal,
};

export function initHomeAnnouncementSignalsChunk(): void {}

export function useSeenModelUpgradeList(): [string[], SetAtomValue<string[]>] {
  return useAtom(seenModelUpgradeListAtom as never) as [
    string[],
    SetAtomValue<string[]>,
  ];
}

export function useLatestModelSeen(): [
  string | null,
  SetAtomValue<string | null>,
] {
  return useAtom(latestModelSeenAtom as never) as [
    string | null,
    SetAtomValue<string | null>,
  ];
}

export function useWorkspaceMessageLastSeenByAccount(): [
  LastSeenByAccount,
  SetAtomValue<LastSeenByAccount>,
] {
  return useAtom(workspaceMessageLastSeenAtByAccountAtom as never) as [
    LastSeenByAccount,
    SetAtomValue<LastSeenByAccount>,
  ];
}
