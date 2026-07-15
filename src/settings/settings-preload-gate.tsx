// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Gate that renders the app preloader until user settings have finished loading,
// then reveals its children. Wrapped around settings-dependent parts of the app.
import React, { type ReactNode } from "react";
import { AppPreloader } from "../ui/app-preloader";
import { useSettingsLoading } from "./setting-storage";

export interface SettingsPreloadGateProps {
  children: ReactNode;
}

export function SettingsPreloadGate({
  children,
}: SettingsPreloadGateProps): React.ReactElement {
  if (useSettingsLoading()) {
    return <AppPreloader debugName="SettingsPreloadGate" />;
  }
  return <>{children}</>;
}
