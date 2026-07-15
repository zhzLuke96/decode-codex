// Restored from ref/webview/assets/app-initial~app-main~first-run~new-thread-panel-page-BZcGQjmi.js
// Synced aliases: ref/webview/assets/use-nux-ChpUn11I.js, ref/webview/assets/app-initial~app-main~first-run~new-thread-panel-page-DDCPYhDR.js, ref/webview/assets/app-initial~app-main~first-run~new-thread-panel-page-Dmmp67Az.js.
// App-shell onboarding NUX state hook.
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { useAuth } from "../auth/use-auth";
import { useGlobalState } from "../utils/use-global-state";

export type NuxState =
  | "2025-09-15-apikey-auth"
  | "2025-09-15-full-chatgpt-auth"
  | "none";

export function useNux(): NuxState {
  const { data: viewedNux, isLoading } = useGlobalState(
    globalSettingKeys.NUX_2025_09_15,
  );
  const { authMethod } = useAuth();

  void viewedNux;
  void isLoading;
  void authMethod;

  return "none";
}

export function initUseNuxChunk(): void {}
