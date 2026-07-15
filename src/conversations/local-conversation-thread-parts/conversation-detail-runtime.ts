// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation detail-mode setting helpers used by the local thread summary panel.
import {
  conversationDetailModeSetting,
  isThreadDetailLevelProseFromSetting,
  normalizeThreadDetailLevel,
  THREAD_DETAIL_LEVEL_COMMANDS,
  THREAD_DETAIL_LEVEL_PROSE,
  useThreadDetailLevel,
  type ThreadDetailLevel,
} from "../../utils/thread-detail-level";
import {
  getSettingValue,
  writeSettingValue,
} from "../../settings/setting-storage";

export const CONVERSATION_DETAIL_STEPS_PROSE = THREAD_DETAIL_LEVEL_PROSE;
export const CONVERSATION_DETAIL_STEPS_COMMANDS = THREAD_DETAIL_LEVEL_COMMANDS;

type ConversationDetailStore = {
  get<T = unknown>(signal: unknown): T;
};

export function initConversationDetailModeRuntime(): void {}

export function isConversationDetailModeProse(
  getSetting: (setting: unknown) => unknown,
): boolean {
  return isThreadDetailLevelProseFromSetting(getSetting);
}

export function useConversationDetailMode(): string {
  return useThreadDetailLevel();
}

export function setConversationDetailMode(
  store: ConversationDetailStore,
  detailMode: ThreadDetailLevel,
): Promise<void> {
  const previousMode = normalizeThreadDetailLevel(
    getSettingValue((query) => store.get(query), conversationDetailModeSetting),
  );
  const nextMode = normalizeThreadDetailLevel(detailMode);
  void previousMode;
  return writeSettingValue(
    store as never,
    conversationDetailModeSetting,
    nextMode,
  );
}
