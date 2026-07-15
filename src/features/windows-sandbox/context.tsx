// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// React context shared by onboarding and composer surfaces for Windows sandbox setup prompts.
import * as React from "react";

export type WindowsSandboxSetupContextValue = {
  isEnabled: boolean;
  isLoading: boolean;
  shouldShow: boolean;
};

export const defaultWindowsSandboxSetupContextValue: WindowsSandboxSetupContextValue =
  {
    isEnabled: false,
    isLoading: false,
    shouldShow: false,
  };

export const WindowsSandboxSetupContext =
  React.createContext<WindowsSandboxSetupContextValue>(
    defaultWindowsSandboxSetupContextValue,
  );

export function useWindowsSandboxSetupContext(): WindowsSandboxSetupContextValue {
  return React.useContext(WindowsSandboxSetupContext);
}

export function initWindowsSandboxSetupContextRuntime(): void {}
