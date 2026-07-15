// Restored from ref/webview/assets/app-shell-bottom-panel-scroll-sync-DT6iI9lV.js
// Context used to synchronize thread scrolling with app-shell bottom-panel height changes.
import React from "react";

export type AppShellBottomPanelScrollSyncSubscriber = (deltaPx: number) => void;

export type AppShellBottomPanelScrollSyncHandler = (
  subscriber: AppShellBottomPanelScrollSyncSubscriber,
) => void | (() => void);

export const AppShellBottomPanelScrollSync =
  React.createContext<AppShellBottomPanelScrollSyncHandler | null>(null);
