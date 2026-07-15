// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Sidebar state icons for settings navigation.
import {
  worktreeNewThreadOrchestratorCompatSlotLowerBLowerT as CollapseSidebarIcon,
  worktreeNewThreadOrchestratorCompatSlotLowerVLowerT as ExpandSidebarIcon,
  worktreeNewThreadOrchestratorCompatSlotUpperFLowerR as ChatSettingsIcon,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import { collapseSidebarMessage } from "./navigation-collapse-sidebar-message";
import { expandSidebarMessage } from "./navigation-expand-sidebar-message";
import type { SettingsNavigationIcon } from "./types";

export const settingsSidebarState = {
  collapsed: {
    icon: ExpandSidebarIcon as SettingsNavigationIcon,
    message: expandSidebarMessage,
  },
  expanded: {
    icon: CollapseSidebarIcon as SettingsNavigationIcon,
    message: collapseSidebarMessage,
  },
} as const;

export const chatSettingsIcon = ChatSettingsIcon as SettingsNavigationIcon;
