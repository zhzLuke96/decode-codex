// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Icon registry for settings navigation sections.
import {
  appMainCurrentCompatSlotLowerELowerN as ProfileSettingsIcon,
  appMainCurrentCompatSlotUpperCLowerI as HooksSettingsIcon,
  appMainCurrentCompatSlotUpperDLowerI as ComputerUseSettingsIcon,
  appMainCurrentCompatSlotUpperXLowerT as CloudSettingsIcon,
  sharedHighlightThemeRegistry as AgentSettingsIcon,
} from "../../vendor/app-main-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotLowerA as AppshotsSettingsIcon,
  appgenLibraryHotDjo67r4nCompatSlotUpperMLowerN as UsageSettingsIcon,
} from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import { worktreeNewThreadOrchestratorCompatSlotUpperK as WorktreesSettingsIcon } from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerDLowerO as ConnectionsSettingsIcon,
  worktreeNewThreadQueryCompatSlotLowerDLowerS as ImportSettingsIcon,
  worktreeNewThreadQueryCompatSlotUpperBLowerA as GeneralSettingsIcon,
  worktreeNewThreadQueryCompatSlotUpperQLowerS as GitSettingsIcon,
  worktreeNewThreadQueryCompatSlotUpperRLowerA as SkillsSettingsIcon,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { projectsIndexCurrentCompatSlotDollar as DataControlsSettingsIcon } from "../../runtime/current-app-initial/projects-index-current-runtime";
import { AppgenPlugIcon } from "../../icons/appgen-plug-icon";
import { AppgenPublicationTermsFallbackIcon } from "../../runtime/current-app-initial/appgen-settings-publication-runtime";
import { BrowserWindowIcon } from "../../icons/browser-window-icon";
import { CloudTerminalIcon } from "../../icons/cloud-terminal-icon";
import { DockIcon } from "../../icons/dock-icon";
import { SunIcon } from "../../vendor/automations-page-current-runtime";
import { UsageGaugeIcon } from "../../icons/usage-gauge-icon";
import {
  ActivePetsSettingsIcon,
  KeyboardShortcutsSettingsIcon,
  PetsSettingsIcon,
} from "./icons";
import type {
  SettingsNavigationIcon,
  SettingsNavigationIconMap,
  SettingsSectionSlug,
} from "./types";

const settingsSectionIcons = {
  agent: AgentSettingsIcon,
  appearance: SunIcon,
  appshots: AppshotsSettingsIcon,
  "browser-use": BrowserWindowIcon,
  "cloud-environments": CloudSettingsIcon,
  "cloud-settings": CloudSettingsIcon,
  "code-review": AgentSettingsIcon,
  "codex-micro": CloudTerminalIcon,
  "computer-use": ComputerUseSettingsIcon,
  connections: ConnectionsSettingsIcon,
  "data-controls": DataControlsSettingsIcon,
  environments: DockIcon,
  "general-settings": GeneralSettingsIcon,
  "git-settings": GitSettingsIcon,
  "hooks-settings": HooksSettingsIcon,
  import: ImportSettingsIcon,
  "keyboard-shortcuts": KeyboardShortcutsSettingsIcon,
  "local-environments": DockIcon,
  "mcp-settings": AppgenPublicationTermsFallbackIcon,
  personalization: UsageGaugeIcon,
  pets: PetsSettingsIcon,
  "plugins-settings": AppgenPlugIcon,
  profile: ProfileSettingsIcon,
  "skills-settings": SkillsSettingsIcon,
  usage: UsageSettingsIcon,
  worktrees: WorktreesSettingsIcon,
} satisfies SettingsNavigationIconMap;

export function getSettingsSectionIcon(
  sectionSlug: SettingsSectionSlug,
  isActive: boolean,
): SettingsNavigationIcon {
  if (isActive && sectionSlug === "pets") {
    return ActivePetsSettingsIcon;
  }
  return settingsSectionIcons[sectionSlug] ?? GeneralSettingsIcon;
}
