// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Terminal panel routing selectors: resolve the user's default terminal location
// while respecting whether the bottom-panel launcher is available.
import {
  _appScopeC as createComputedSignal,
  appScopeRoot,
} from "../boundaries/app-scope";
import { bottomPanelLauncherVisibleSignal } from "../app-shell/app-shell-state";
import { getSettingValue } from "../settings/setting-storage";

export type TerminalPanelPlacement = "bottom" | "right";

export const defaultTerminalLocationSetting = {
  default: "bottom" as TerminalPanelPlacement,
  key: "defaultTerminalLocation",
};

export const defaultTerminalLocationSignal =
  createComputedSignal<TerminalPanelPlacement>(appScopeRoot, ({ get }) =>
    getSettingValue(get, defaultTerminalLocationSetting),
  );

export const preferredTerminalPanelPlacementSignal =
  createComputedSignal<TerminalPanelPlacement>(appScopeRoot, ({ get }) =>
    get<boolean>(bottomPanelLauncherVisibleSignal) === false
      ? "right"
      : get<TerminalPanelPlacement>(defaultTerminalLocationSignal),
  );

export function initTerminalPanelRoutingChunk(): void {
  void defaultTerminalLocationSignal;
  void preferredTerminalPanelPlacementSignal;
}
