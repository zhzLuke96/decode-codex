// Restored from ref/webview/assets/use-is-thread-realtime-enabled-ChiO9bP6.js
// use-is-thread-realtime-enabled-ChiO9bP6 chunk restored from the Codex webview bundle.
import { useGateValue } from "../vendor/statsig-current-runtime";
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { useGlobalState } from "./use-global-state";
const THREAD_REALTIME_VOICE_GATE = "2380644311";
type GlobalSettingQuery<TValue> = {
  data?: TValue;
};
export function useIsThreadRealtimeEnabled(): boolean {
  const isRealtimeVoiceGateEnabled = useGateValue(THREAD_REALTIME_VOICE_GATE);
  const { data: realtimeVoiceModeDebugDisabled } = useGlobalState<
    GlobalSettingQuery<boolean>
  >(globalSettingKeys.REALTIME_VOICE_MODE_DEBUG_DISABLED);
  return isRealtimeVoiceGateEnabled && realtimeVoiceModeDebugDisabled !== true;
}
