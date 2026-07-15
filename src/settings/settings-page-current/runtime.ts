// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Narrow semantic aliases for runtime dependencies used by the settings page.
import type { ComponentType, ReactNode } from "react";
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { FilterIcon } from "../../icons/filter-icon";
import { selectedHostAppshotAvailability } from "../../features/appshot";
import { isExperimentalFeatureVisible } from "../../features/experimental-features/visibility";
import {
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerN as ExternalLinkIcon,
  worktreeNewThreadQueryCompatSlotLowerLLowerO as SearchIcon,
  worktreeNewThreadQueryCompatSlotLowerOLowerP as ClearSearchIcon,
  worktreeNewThreadQueryCompatSlotUpperNLowerN as ExternalLinkAdornment,
  worktreeNewThreadQueryCompatSlotLowerRLowerL,
  worktreeNewThreadQueryCompatSlotLowerSLowerL as experimentalFeaturesQueryKey,
  worktreeNewThreadQueryCompatSlotLowerTLowerL,
  worktreeNewThreadQueryCompatSlotUpperYLowerC,
  worktreeNewThreadQueryCompatSlotLowerYLowerS as BackIcon,
  worktreeNewThreadQueryCompatSlotUpperZLowerC,
  classNames,
  ElectronOnlyShell,
  openExternalUrl,
  Tooltip,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotLowerELowerM as settingsSplitLeftPanelVisibleSignal,
  worktreeNewThreadOrchestratorCompatSlotLowerPLowerS,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerA,
  worktreeNewThreadOrchestratorCompatSlotUpperMLowerT as serializeSettingsPanelState,
  worktreeNewThreadOrchestratorCompatSlotUpperNLowerT as settingsLeftPanelStateSignal,
  worktreeNewThreadOrchestratorCompatSlotUpperOLowerT,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotLowerDLowerT as settingsLibraryRefreshQueryKey,
  getSettingsNavigationMessageDescriptor,
  SettingsNavigationTitle,
} from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import { useIsRemoteHost } from "../../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import {
  projectsIndexCurrentCompatSlotLowerNLowerN as CollapsibleSidebarSection,
  projectsIndexCurrentCompatSlotLowerTLowerN as SidebarNavigationRowButton,
} from "../../runtime/current-app-initial/projects-index-current-runtime";
import {
  pullRequestNewThreadCompatSlotLowerSLowerT,
  pullRequestNewThreadCompatSlotLowerV,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  currentAppInitialSharedMember0011,
  currentAppInitialSharedMember0021,
  currentAppInitialSharedMember0068,
  currentAppInitialSharedMember0781,
  currentAppInitialSharedMember0799,
  imagePickerSchemaCapabilities,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  defaultSettingsSection,
  settingsNavigationSections,
  settingsSectionIds,
  useProfileVisibility,
  useUsageSettingsAccess,
} from "../../runtime/current-app-initial/keyboard-shortcuts-thread-runtime";
import {
  AppHeaderUpdateButton,
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  settingsReturnRouteSignal,
  useRegisterToggleSidebarCommand,
} from "../../vendor/automations-page-current-runtime";
import {
  appMainCurrentCompatSlotLowerWLowerF,
  appMainCurrentCompatSlotLowerXLowerF,
  appMainCurrentCompatSlotUpperCLowerF,
  appMainCurrentCompatSlotUpperMLowerU,
} from "../../vendor/app-main-current-runtime";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type {
  AvailabilityResult,
  HostAppInfo,
  HostConfig,
  LocaleDisplayFormatter,
  LocaleSearchOption,
  OpenExternalUrlOptions,
  PanelStateSerializer,
  ProfileVisibilityState,
  RouteScopeStore,
  SettingsHostSelectionState,
  SettingsListNavigationOptions,
  SettingsListNavigationState,
  SettingsQueryResult,
  SettingsSplitViewComponent,
  UsageSettingsAccessState,
} from "./types";

export {
  AppHeaderUpdateButton,
  BackIcon,
  ClearSearchIcon,
  CollapsibleSidebarSection,
  ElectronOnlyShell,
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  ExternalLinkAdornment,
  ExternalLinkIcon,
  FilterIcon,
  FormattedMessage,
  getSettingsNavigationMessageDescriptor,
  isExperimentalFeatureVisible,
  LOCAL_HOST_ID,
  SearchIcon,
  selectedHostAppshotAvailability,
  SettingsNavigationTitle,
  settingsReturnRouteSignal,
  settingsSplitLeftPanelVisibleSignal,
  SidebarNavigationRowButton,
  Tooltip,
  useIntl,
  useIsRemoteHost,
  useRegisterToggleSidebarCommand,
};

export const settingsRouteScopeKey = currentAppInitialSharedCompatSlotUpperE;

export const useRouteScopeStore =
  currentAppInitialSharedCompatSlotUpperKLowerO as (
    scopeKey: unknown,
  ) => RouteScopeStore;

export const useAppScopeValue =
  currentAppInitialSharedCompatSlotLowerQLowerO as <TValue>(
    signal: unknown,
  ) => TValue;

export const useAppScopeQuery =
  currentAppInitialSharedCompatSlotUpperGLowerO as <TData>(
    queryKey: unknown,
    ...args: unknown[]
  ) => SettingsQueryResult<TData>;

export const useFeatureFlag = currentAppInitialSharedMember0781 as (
  featureId: string,
) => boolean;

export const useHostCapabilityLoadingState =
  currentAppInitialSharedMember0799 as () => boolean;

export const getHostConfig = currentAppInitialSharedMember0011 as (
  hostId: string | null,
) => HostConfig;

export const SettingsRouteOutlet =
  currentAppInitialSharedMember0068 as ComponentType<Record<string, never>>;

export const useSettingsHostSelection =
  appMainCurrentCompatSlotUpperMLowerU as () => SettingsHostSelectionState;

export const defaultAppLocale = appMainCurrentCompatSlotLowerXLowerF as string;

export const getAvailableLocaleOptions =
  appMainCurrentCompatSlotUpperCLowerF as () => LocaleSearchOption[];

export const formatLocaleDisplayName =
  appMainCurrentCompatSlotLowerWLowerF as LocaleDisplayFormatter;

export const useHostAppInfoQuery =
  pullRequestNewThreadCompatSlotLowerV as () => SettingsQueryResult<HostAppInfo>;

export const useRemoteConnectionsAvailable =
  pullRequestNewThreadCompatSlotLowerSLowerT as () => boolean;

export const prefetchHostSettingsRequirements =
  worktreeNewThreadQueryCompatSlotUpperYLowerC as (options: {
    hostId: string;
  }) => void;

export const useBrowserUseAvailability =
  worktreeNewThreadQueryCompatSlotUpperZLowerC as (options: {
    hostId: string;
  }) => AvailabilityResult;

export const useComputerUsePrerequisite =
  worktreeNewThreadQueryCompatSlotLowerTLowerL as (options: {
    hostId: string;
  }) => AvailabilityResult;

export const useComputerUseAvailability =
  worktreeNewThreadQueryCompatSlotLowerRLowerL as (options: {
    hostId: string;
  }) => AvailabilityResult;

export const useSettingsListNavigation =
  worktreeNewThreadOrchestratorCompatSlotLowerPLowerS as (
    options: SettingsListNavigationOptions,
  ) => SettingsListNavigationState;

export const useSettingsPanelStateRef =
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerA as (
    onPanelStateChange: (event: unknown, panelState: unknown) => void,
  ) => (element: HTMLDivElement | null) => void;

export const SettingsSplitView =
  worktreeNewThreadOrchestratorCompatSlotUpperOLowerT as SettingsSplitViewComponent;

export const serializePanelState =
  serializeSettingsPanelState as PanelStateSerializer;

export const settingsPanelStateSignal = settingsLeftPanelStateSignal;

export const settingsExperimentalFeaturesQueryKey =
  experimentalFeaturesQueryKey;

export const settingsRefreshQueryKey = settingsLibraryRefreshQueryKey;

export const useSettingsProfileVisibility =
  useProfileVisibility as () => ProfileVisibilityState;

export const useSettingsUsageAccess =
  useUsageSettingsAccess as () => UsageSettingsAccessState;

export const settingsSectionMetadata = {
  defaultSection: defaultSettingsSection,
  ids: settingsSectionIds,
  sections: settingsNavigationSections,
} as const;

export function buildClassName(...values: unknown[]): string {
  return classNames(...values);
}

export function openSettingsExternalUrl(options: OpenExternalUrlOptions): void {
  openExternalUrl(options);
}

export function requestProfileImagePicker(store: RouteScopeStore): void {
  imagePickerSchemaCapabilities(store, currentAppInitialSharedMember0021, {
    source: "settings_page",
  });
}

export type ElectronOnlyShellProps = {
  children?: ReactNode;
  electron?: boolean;
};
