// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSectionId } from "../../settings-sections";
import type { SettingsSearchMessageDescriptor } from "../types";
import { agentSearchMessages } from "./agent-search-messages";
import { appearanceSearchMessages } from "./appearance-search-messages";
import { appshotsSearchMessages } from "./appshots-search-messages";
import { browserUseSearchMessages } from "./browser-use-search-messages";
import { cloudEnvironmentsSearchMessages } from "./cloud-environments-search-messages";
import { cloudSettingsSearchMessages } from "./cloud-settings-search-messages";
import { codeReviewSearchMessages } from "./code-review-search-messages";
import { computerUseSearchMessages } from "./computer-use-search-messages";
import { connectionsSearchMessages } from "./connections-search-messages";
import { dataControlsSearchMessages } from "./data-controls-search-messages";
import { environmentsSearchMessages } from "./environments-search-messages";
import { generalSettingsSearchMessages } from "./general-settings-search-messages";
import { gitSettingsSearchMessages } from "./git-settings-search-messages";
import { hooksSettingsSearchMessages } from "./hooks-settings-search-messages";
import { keyboardShortcutsSearchMessages } from "./keyboard-shortcuts-search-messages";
import { localEnvironmentsSearchMessages } from "./local-environments-search-messages";
import { mcpSettingsSearchMessages } from "./mcp-settings-search-messages";
import { personalizationSearchMessages } from "./personalization-search-messages";
import { petsSearchMessages } from "./pets-search-messages";
import { profileSearchMessages } from "./profile-search-messages";
import { usageSearchMessages } from "./usage-search-messages";
import { worktreesSearchMessages } from "./worktrees-search-messages";

export const settingsSearchMessagesBySection = {
  agent: agentSearchMessages,
  appearance: appearanceSearchMessages,
  appshots: appshotsSearchMessages,
  "browser-use": browserUseSearchMessages,
  "cloud-environments": cloudEnvironmentsSearchMessages,
  "cloud-settings": cloudSettingsSearchMessages,
  "code-review": codeReviewSearchMessages,
  "computer-use": computerUseSearchMessages,
  connections: connectionsSearchMessages,
  "data-controls": dataControlsSearchMessages,
  environments: environmentsSearchMessages,
  "general-settings": generalSettingsSearchMessages,
  "git-settings": gitSettingsSearchMessages,
  "hooks-settings": hooksSettingsSearchMessages,
  "keyboard-shortcuts": keyboardShortcutsSearchMessages,
  "local-environments": localEnvironmentsSearchMessages,
  "mcp-settings": mcpSettingsSearchMessages,
  personalization: personalizationSearchMessages,
  pets: petsSearchMessages,
  profile: profileSearchMessages,
  usage: usageSearchMessages,
  worktrees: worktreesSearchMessages,
} satisfies Partial<
  Record<SettingsSectionId, readonly SettingsSearchMessageDescriptor[]>
>;
