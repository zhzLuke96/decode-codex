// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactNode } from "react";

export type HeaderActionPosition = "start" | "center" | "end";

export interface HeaderEntrySignalGroup {
  byId: unknown;
  ids$: unknown;
}

export interface AppShellSlotProps {
  children?: ReactNode;
}

export interface AppShellHeaderActionProps {
  actionId: string;
  align?: "start" | "center" | "end";
  children?: ReactNode;
  order?: number;
  slotPosition?: HeaderActionPosition;
}

export interface AppShellHeaderContextMenuItem {
  id: string;
  [key: string]: unknown;
}

export interface AppShellRightPanelOutletProps {
  children?: ReactNode;
  defaultWidth?: number;
  widthStorageKey?: string;
}

export interface AppShellMainContentLayoutProps {
  layout: string;
}
