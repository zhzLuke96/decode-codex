// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Shared types for composer project selector controls.

import type { ReactNode } from "react";

export type ComposerFooterControlCollapse = "none" | "secondary" | "sm" | "xs";

export type ComposerFooterControlIndicator =
  | "chevron"
  | "collapsible-chevron"
  | "none"
  | "pending";

export type ComposerProjectSelectorVariant = "default" | "hero" | "home";

export type ComposerProjectKind = "local" | "remote";

export type ProjectRepositoryData = {
  rootFolder?: string | null;
};

export type ProjectAppearance = {
  backgroundColor?: string | null;
  color?: string | null;
  emoji?: string | null;
  label?: string | null;
};

export type ComposerProjectGroup = {
  hostDisplayName?: string | null;
  hostId?: string | null;
  isCodexWorktree?: boolean;
  label: string;
  path?: string | null;
  projectId: string;
  projectKind: ComposerProjectKind;
  remotePath?: string | null;
  repositoryData?: ProjectRepositoryData | null;
  threadKeys?: readonly string[];
};

export type ComposerProjectSelection = {
  project: ComposerProjectGroup | null;
  projectId: string | null;
};

export type ComposerProjectAction = {
  icon?: ReactNode;
  label: ReactNode;
  onSelect: () => void;
};

export type ComposerProjectMenuLabels = {
  addLocalProject: ReactNode;
  addRemoteProject: ReactNode;
  changeProject: ReactNode;
  chooseProject: ReactNode;
  clearProject: ReactNode;
  footerCategory: ReactNode;
  newChat: ReactNode;
  newProject: ReactNode;
  noActiveRoot: ReactNode;
  noProjectsFound: ReactNode;
  searchPlaceholder: string;
  selectProjectTooltip: ReactNode;
  startFromScratch: ReactNode;
  useExistingFolder: ReactNode;
};
