// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for linked conversation end-resource open actions.

import type React from "react";

export type OpenTargetKind = "native" | string;

export interface OpenTarget {
  default?: boolean;
  kind?: OpenTargetKind;
  appPath?: string | null;
  label?: string | null;
}

export interface OpenTargetMenuItem {
  id: string;
  target: OpenTarget;
  appPath?: string | null;
  icon?: string;
  label: React.ReactNode;
}

export interface EndResourceOpenActionProps {
  cwd: string | null;
  hostId: string;
  href: string;
  openTarget: string;
  shouldLoadTargets: boolean;
}

export interface EndResourceOpenSubtitleProps {
  browserName: string | null;
  fallbackToDefaultBrowser: boolean;
  href: string;
  openTarget: string;
}

export interface EndResourceOpenInMenuProps {
  cwd: string | null;
  copyLink: string | null;
  hostId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenInCodexBrowser: () => void;
  openPath: string;
}
