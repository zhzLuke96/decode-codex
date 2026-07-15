// Restored from ref/webview/assets/thread-detail-level-CGt2uMmR.js
// Normalizes the thread detail setting used by conversation step rendering.
import { useSettingValue } from "../settings/setting-storage";
export type ThreadDetailLevel =
  | "STEPS_PROSE"
  | "STEPS_COMMANDS"
  | "STEPS_EXECUTION";
const THREAD_DETAIL_LEVEL_PROSE = "STEPS_PROSE";
const THREAD_DETAIL_LEVEL_COMMANDS = "STEPS_COMMANDS";
const conversationDetailModeSetting = {
  default: THREAD_DETAIL_LEVEL_COMMANDS as ThreadDetailLevel,
  key: "conversationDetailMode",
};
function normalizeThreadDetailLevel(
  detailLevel: ThreadDetailLevel | null | undefined,
) {
  return detailLevel === "STEPS_EXECUTION"
    ? THREAD_DETAIL_LEVEL_COMMANDS
    : (detailLevel ?? THREAD_DETAIL_LEVEL_COMMANDS);
}
function isThreadDetailLevelProseFromSetting(
  getSetting: (setting: unknown) => unknown,
) {
  return (
    normalizeThreadDetailLevel(
      getSetting(conversationDetailModeSetting) as
        | ThreadDetailLevel
        | null
        | undefined,
    ) === THREAD_DETAIL_LEVEL_PROSE
  );
}
function useThreadDetailLevel() {
  return normalizeThreadDetailLevel(
    useSettingValue(conversationDetailModeSetting),
  );
}
export {
  useThreadDetailLevel,
  isThreadDetailLevelProseFromSetting,
  THREAD_DETAIL_LEVEL_PROSE,
  normalizeThreadDetailLevel,
  THREAD_DETAIL_LEVEL_COMMANDS,
  conversationDetailModeSetting,
};
