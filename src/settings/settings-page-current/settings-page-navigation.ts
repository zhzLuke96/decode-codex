// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Visibility and redirect decisions for settings page routes.
import {
  EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  LOCAL_HOST_ID,
  prefetchHostSettingsRequirements,
  selectedHostAppshotAvailability,
  settingsSectionMetadata,
  useAppScopeValue,
  useBrowserUseAvailability,
  useComputerUseAvailability,
  useComputerUsePrerequisite,
  useFeatureFlag,
  useHostCapabilityLoadingState,
  useIsRemoteHost,
  useRemoteConnectionsAvailable,
  useSettingsProfileVisibility,
  useSettingsUsageAccess,
} from "./runtime";
import {
  hostScopedDefaultSettingsSection,
  hostScopedSettingsSections,
} from "./navigation-config";
import type {
  SettingsNavigationSection,
  SettingsPageNavigationState,
  SettingsSectionSlug,
} from "./types";

const browserUseDisabledPreviewReasons = new Set([
  "statsig-disabled",
  "config-requirement-disabled",
  "wsl-disabled",
]);

export function useSettingsPageNavigation(
  requestedSectionSlug: SettingsSectionSlug | null = null,
  includeAllSections: boolean = true,
  hostId: string = LOCAL_HOST_ID as string,
): SettingsPageNavigationState {
  prefetchHostSettingsRequirements({ hostId });

  const isRemoteHost = useIsRemoteHost();
  const hasRemoteConnections = useRemoteConnectionsAvailable();
  const browserUseAvailability = useBrowserUseAvailability({ hostId });
  const computerUsePrerequisite = useComputerUsePrerequisite({ hostId });
  useFeatureFlag("3207467860");

  const canImportExternalAgentSettings = useFeatureFlag(
    EXTERNAL_AGENT_IMPORT_SETTINGS_FEATURE_ID,
  );
  const isAppshotAvailable = useAppScopeValue<boolean>(
    selectedHostAppshotAvailability,
  );
  const isHostCapabilityLoading = useHostCapabilityLoadingState();
  const { isProfileVisible, isProfileVisibilityLoading } =
    useSettingsProfileVisibility();
  const { isUsageSettingsAccessLoading, isUsageSettingsVisible } =
    useSettingsUsageAccess();
  const computerUseAvailability = useComputerUseAvailability({ hostId });

  const shouldShowComputerUseUnavailablePreview =
    includeAllSections &&
    !computerUsePrerequisite.isLoading &&
    !computerUsePrerequisite.allowed;
  const shouldShowBrowserUseUnavailablePreview =
    includeAllSections &&
    !browserUseAvailability.isLoading &&
    browserUseDisabledPreviewReasons.has(browserUseAvailability.reason ?? "");
  const shouldShowComputerUse =
    includeAllSections &&
    (computerUseAvailability.available ||
      computerUsePrerequisite.available ||
      shouldShowComputerUseUnavailablePreview);
  const shouldShowBrowserUse =
    includeAllSections &&
    (browserUseAvailability.available ||
      computerUsePrerequisite.available ||
      shouldShowBrowserUseUnavailablePreview);

  const visibleSettingsSections = settingsSectionMetadata.sections.filter(
    (section) =>
      isSettingsSectionVisible({
        canImportExternalAgentSettings,
        hasRemoteConnections,
        includeAllSections,
        isAppshotAvailable,
        isHostCapabilityLoading,
        isProfileVisible,
        isRemoteHost,
        isUsageSettingsVisible,
        section: section as SettingsNavigationSection,
        shouldShowBrowserUse,
        shouldShowComputerUse,
      }),
  ) as SettingsNavigationSection[];

  const visibleRequestedSection = visibleSettingsSections.find(
    (section) => section.slug === requestedSectionSlug,
  );
  const requestedSection = findSettingsNavigationSection(requestedSectionSlug);
  const requestedSectionIsHidden =
    requestedSection != null && visibleRequestedSection == null;
  const defaultSection = includeAllSections
    ? settingsSectionMetadata.defaultSection
    : hostScopedDefaultSettingsSection;
  const isRequestedSectionLoading =
    requestedSectionIsHidden &&
    shouldWaitForHiddenSettingsSection({
      browserUseAvailabilityLoading:
        !!browserUseAvailability.isLoading ||
        !!computerUsePrerequisite.isLoading ||
        isHostCapabilityLoading,
      computerUseAvailabilityLoading:
        !!computerUseAvailability.isLoading ||
        !!computerUsePrerequisite.isLoading,
      includeAllSections,
      isAppshotLoading: isHostCapabilityLoading,
      isImportLoading: isHostCapabilityLoading,
      isProfileVisibilityLoading,
      isUsageSettingsAccessLoading,
      requestedSection,
    });

  return {
    activeSettingsSection: visibleRequestedSection?.slug ?? defaultSection,
    shouldRedirectToVisibleSettingsSection:
      requestedSectionIsHidden && !isRequestedSectionLoading,
    shouldRenderRouteContent:
      requestedSectionSlug !== "import" || !isRequestedSectionLoading,
    visibleSettingsSections,
  };
}

function isSettingsSectionVisible({
  canImportExternalAgentSettings,
  hasRemoteConnections,
  includeAllSections,
  isAppshotAvailable,
  isHostCapabilityLoading,
  isProfileVisible,
  isRemoteHost,
  isUsageSettingsVisible,
  section,
  shouldShowBrowserUse,
  shouldShowComputerUse,
}: {
  canImportExternalAgentSettings: boolean;
  hasRemoteConnections: boolean;
  includeAllSections: boolean;
  isAppshotAvailable: boolean;
  isHostCapabilityLoading: boolean;
  isProfileVisible: boolean;
  isRemoteHost: boolean;
  isUsageSettingsVisible: boolean;
  section: SettingsNavigationSection;
  shouldShowBrowserUse: boolean;
  shouldShowComputerUse: boolean;
}): boolean {
  if (
    !includeAllSections &&
    !hostScopedSettingsSections.includes(section.slug)
  ) {
    return false;
  }

  switch (section.slug) {
    case "appshots":
      return isAppshotAvailable;
    case "plugins-settings":
    case "skills-settings":
      return false;
    case "connections":
      return hasRemoteConnections && !isRemoteHost;
    case "usage":
      return isUsageSettingsVisible;
    case "profile":
      return isProfileVisible;
    case "computer-use":
      return shouldShowComputerUse;
    case "browser-use":
      return shouldShowBrowserUse;
    case "appearance":
    case "pets":
    case "git-settings":
    case "worktrees":
    case "local-environments":
    case "environments":
      return true;
    case "import":
      return !isHostCapabilityLoading && canImportExternalAgentSettings;
    case "data-controls":
      return true;
    case "code-review":
    case "cloud-settings":
    case "cloud-environments":
      return false;
    case "general-settings":
    case "agent":
    case "personalization":
    case "hooks-settings":
    case "mcp-settings":
    case "keyboard-shortcuts":
      return true;
    case "codex-micro":
      return false;
  }

  return false;
}

function shouldWaitForHiddenSettingsSection({
  browserUseAvailabilityLoading,
  computerUseAvailabilityLoading,
  includeAllSections,
  isAppshotLoading,
  isImportLoading,
  isProfileVisibilityLoading,
  isUsageSettingsAccessLoading,
  requestedSection,
}: {
  browserUseAvailabilityLoading: boolean;
  computerUseAvailabilityLoading: boolean;
  includeAllSections: boolean;
  isAppshotLoading: boolean;
  isImportLoading: boolean;
  isProfileVisibilityLoading: boolean;
  isUsageSettingsAccessLoading: boolean;
  requestedSection: SettingsNavigationSection;
}): boolean {
  if (
    !includeAllSections &&
    !hostScopedSettingsSections.includes(requestedSection.slug)
  ) {
    return false;
  }

  switch (requestedSection.slug) {
    case "appshots":
      return isAppshotLoading;
    case "usage":
      return isUsageSettingsAccessLoading;
    case "profile":
      return isProfileVisibilityLoading;
    case "import":
      return isImportLoading;
    case "computer-use":
      return computerUseAvailabilityLoading;
    case "browser-use":
      return browserUseAvailabilityLoading;
    case "appearance":
    case "pets":
    case "general-settings":
    case "agent":
    case "git-settings":
    case "data-controls":
    case "code-review":
    case "cloud-settings":
    case "cloud-environments":
    case "personalization":
    case "keyboard-shortcuts":
    case "codex-micro":
    case "local-environments":
    case "worktrees":
    case "environments":
    case "mcp-settings":
    case "connections":
    case "plugins-settings":
    case "skills-settings":
    case "hooks-settings":
      return false;
  }

  return false;
}

export function findSettingsNavigationSection(
  sectionSlug: SettingsSectionSlug | null,
): SettingsNavigationSection | null {
  if (sectionSlug == null) return null;
  return (
    (settingsSectionMetadata.sections.find(
      (section) => section.slug === sectionSlug,
    ) as SettingsNavigationSection | undefined) ?? null
  );
}
