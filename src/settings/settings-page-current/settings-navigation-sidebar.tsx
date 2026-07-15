// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Settings navigation sidebar with grouping, search, collapse, and external links.
import * as React from "react";
import {
  CHATGPT_SETTINGS_URL,
  chatSettingsIcon,
  chatSettingsMessage,
  defaultSettingsSearchTargets,
  getGroupSelectableSections,
  getNavigableSectionSlugs,
  getSearchResultSectionSlug,
  getSettingsSectionIcon,
  groupSettingsSectionsByHeading,
  orderSettingsSectionsByPreferredSlugs,
  preferredSettingsSectionOrder,
  SETTINGS_NAVIGATION_SEARCH_FEATURE_ID,
  settingsNavigationGroups,
  settingsSidebarState,
} from "./navigation-config";
import {
  BackIcon,
  buildClassName,
  CollapsibleSidebarSection,
  ExternalLinkAdornment,
  ExternalLinkIcon,
  FormattedMessage,
  getSettingsNavigationMessageDescriptor,
  openSettingsExternalUrl,
  SettingsNavigationTitle,
  SidebarNavigationRowButton,
  Tooltip,
  useFeatureFlag,
  useIntl,
  useSettingsListNavigation,
} from "./runtime";
import { searchSettingsNavigationTargets } from "./settings-search";
import { SettingsSearchInput } from "./settings-search-input";
import { SettingsSearchResults } from "./settings-search-results";
import type {
  SettingsNavigationGroup,
  SettingsNavigationSection,
  SettingsNavigationSidebarProps,
  SettingsSectionSlug,
} from "./types";

export function SettingsNavigationSidebar({
  activeSection,
  canCollapse = false,
  className,
  groupSettingsSections = false,
  onBack,
  onClearHostFilter,
  onSelect,
  searchTargets = defaultSettingsSearchTargets,
  settingsSections,
  sidebarHostSelector,
}: SettingsNavigationSidebarProps) {
  const intl = useIntl();
  const hasSettingsSearch = useFeatureFlag(
    SETTINGS_NAVIGATION_SEARCH_FEATURE_ID,
  );
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const collapsed = canCollapse && isCollapsed;
  const shouldRenderSearch =
    hasSettingsSearch && groupSettingsSections && !collapsed;
  const shouldShowSearchResults =
    shouldRenderSearch && searchQuery.trim().length > 0;

  const navigationGroups = React.useMemo(
    () =>
      buildNavigationGroups({
        groupSettingsSections,
        settingsSections,
      }),
    [groupSettingsSections, settingsSections],
  );

  const selectableSections = React.useMemo(
    () => navigationGroups.flatMap(getGroupSelectableSections),
    [navigationGroups],
  );

  const searchResults = React.useMemo(
    () =>
      searchSettingsNavigationTargets({
        intl,
        query: searchQuery,
        targets: searchTargets,
        visibleSectionSlugs: settingsSections.flatMap(getNavigableSectionSlugs),
      }),
    [intl, searchQuery, searchTargets, settingsSections],
  );

  const searchNavigationItems = React.useMemo(() => {
    const serializedSectionSlugs = searchResults
      .map(getSearchResultSectionSlug)
      .join("\0");
    return serializedSectionSlugs.length === 0
      ? []
      : serializedSectionSlugs.split("\0");
  }, [searchResults]);

  const listNavigation = useSettingsListNavigation({
    autoHighlightFirst: false,
    isActive: shouldRenderSearch && searchQuery.length > 0,
    items: searchNavigationItems,
    onEscape: () => {
      setSearchQuery("");
    },
    onSelect: (_selectedItem, resultIndex) => {
      const selectedResult = searchResults[resultIndex];
      if (selectedResult != null) {
        onSelect(selectedResult.sectionSlug);
      }
    },
  });

  const sidebarState = collapsed
    ? settingsSidebarState.collapsed
    : settingsSidebarState.expanded;
  const CollapseToggleIcon = sidebarState.icon;
  const collapseToggleLabel = intl.formatMessage(sidebarState.message);
  const navigationAriaLabel = intl.formatMessage({
    id: "settings.nav.ariaLabel",
    defaultMessage: "Settings",
    description: "Aria label for settings navigation",
  });

  return (
    <nav
      className={buildClassName(
        "flex min-h-0 flex-1 flex-col select-none px-row-x",
        className,
      )}
      aria-label={navigationAriaLabel}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        {canCollapse ? (
          <div className="mb-2 shrink-0">
            <Tooltip
              tooltipContent={<FormattedMessage {...sidebarState.message} />}
            >
              <SidebarNavigationRowButton
                aria-label={collapseToggleLabel}
                fullWidth={false}
                icon={CollapseToggleIcon}
                iconClassName="icon-xs"
                hideLabel={true}
                label={<FormattedMessage {...sidebarState.message} />}
                title={collapseToggleLabel}
                onClick={() => {
                  setIsCollapsed((currentValue) => !currentValue);
                }}
              />
            </Tooltip>
          </div>
        ) : null}

        {onBack != null ? (
          <BackToAppLink collapsed={collapsed} onBack={onBack} />
        ) : null}

        {sidebarHostSelector != null && !collapsed ? (
          <div className="mb-4 shrink-0">{sidebarHostSelector}</div>
        ) : null}

        {shouldRenderSearch ? (
          <SettingsSearchInput
            onKeyDown={listNavigation.getInputProps().onKeyDown}
            searchQuery={searchQuery}
            onQueryChange={(nextQuery) => {
              listNavigation.setHighlightedIndex(-1);
              setSearchQuery(nextQuery);
            }}
          />
        ) : null}

        <div
          className={buildClassName(
            "min-h-0 flex-1 overflow-y-auto pb-2",
            collapsed ? "flex flex-col gap-2" : "flex flex-col gap-4",
          )}
        >
          {shouldShowSearchResults ? (
            <SettingsSearchResults
              highlightedIndex={listNavigation.highlightedIndex}
              intl={intl}
              listRef={listNavigation.listRef}
              onSelect={onSelect}
              searchResults={searchResults}
            />
          ) : (
            <>
              {navigationGroups.map((group) => (
                <SettingsNavigationGroupSection
                  key={group.key}
                  activeSection={activeSection}
                  collapsed={collapsed}
                  group={group}
                  groupSettingsSections={groupSettingsSections}
                  onSelect={onSelect}
                  selectableSections={selectableSections}
                />
              ))}
              <ChatSettingsLink
                collapsed={collapsed}
                canCollapse={canCollapse}
              />
              <ClearHostFilterAction onClearHostFilter={onClearHostFilter} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function buildNavigationGroups({
  groupSettingsSections,
  settingsSections,
}: {
  groupSettingsSections: boolean;
  settingsSections: readonly SettingsNavigationSection[];
}): SettingsNavigationGroup[] {
  if (groupSettingsSections) {
    return groupSettingsSectionsByHeading(
      settingsSections,
      settingsNavigationGroups,
    );
  }

  return [
    {
      key: "settings",
      heading: null,
      sections: orderSettingsSectionsByPreferredSlugs(
        settingsSections,
        preferredSettingsSectionOrder,
      ),
    },
  ];
}

function BackToAppLink({
  collapsed,
  onBack,
}: {
  collapsed: boolean;
  onBack: () => void;
}) {
  return (
    <div
      role="link"
      tabIndex={0}
      className={buildClassName(
        "group relative mb-2 flex w-full items-center rounded-lg px-row-x py-row-y text-base outline-none",
        !collapsed && "gap-2",
        "cursor-interaction text-token-text-secondary hover:bg-token-list-hover-background",
        "focus-visible:ring-token-focus focus-visible:ring-1 electron:opacity-75",
        "shrink-0",
      )}
      onClick={onBack}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onBack();
        }
      }}
    >
      <BackIcon className="icon-xs" />
      {collapsed ? (
        <span className="sr-only">
          <BackMessage />
        </span>
      ) : (
        <BackMessage />
      )}
    </div>
  );
}

function BackMessage() {
  return (
    <FormattedMessage
      id="settings.nav.back"
      defaultMessage="Back to app"
      description="Button to return to the main app from settings"
    />
  );
}

function SettingsNavigationGroupSection({
  activeSection,
  collapsed,
  group,
  groupSettingsSections,
  onSelect,
  selectableSections,
}: {
  activeSection: SettingsSectionSlug;
  collapsed: boolean;
  group: SettingsNavigationGroup;
  groupSettingsSections: boolean;
  onSelect: (sectionSlug: SettingsSectionSlug) => void;
  selectableSections: readonly SettingsNavigationSection[];
}) {
  return (
    <CollapsibleSidebarSection
      className="gap-0"
      title={
        collapsed || group.heading == null ? null : (
          <FormattedMessage {...group.heading} />
        )
      }
    >
      {group.sections.map((section) => (
        <SettingsNavigationSectionRow
          key={section.slug}
          activeSection={activeSection}
          collapsed={collapsed}
          groupSettingsSections={groupSettingsSections}
          onSelect={onSelect}
          section={section}
          selectableSections={selectableSections}
        />
      ))}
    </CollapsibleSidebarSection>
  );
}

function SettingsNavigationSectionRow({
  activeSection,
  collapsed,
  groupSettingsSections,
  onSelect,
  section,
  selectableSections,
}: {
  activeSection: SettingsSectionSlug;
  collapsed: boolean;
  groupSettingsSections: boolean;
  onSelect: (sectionSlug: SettingsSectionSlug) => void;
  section: SettingsNavigationSection;
  selectableSections: readonly SettingsNavigationSection[];
}) {
  const intl = useIntl();
  const isActive = section.slug === activeSection;
  const isExternal = section.externalUrl != null;
  const isDisabled = !!section.disabled;
  const SectionIcon = getSettingsSectionIcon(section.slug, isActive);
  const sectionLabel = intl.formatMessage(
    getSettingsNavigationMessageDescriptor(section.slug),
  );
  const shouldParticipateInArrowNavigation =
    groupSettingsSections && !isDisabled && !isExternal;

  return (
    <Tooltip
      tooltipContent={
        collapsed ? (
          <SettingsNavigationTitle slug={section.slug} />
        ) : isExternal ? (
          <ExternalSettingsTooltip />
        ) : (
          <NotAvailableSettingsTooltip />
        )
      }
      side="right"
      sideOffset={12}
      disabled={!collapsed && !isDisabled && !isExternal}
    >
      <SidebarNavigationRowButton
        aria-label={sectionLabel}
        icon={SectionIcon}
        iconClassName="icon-sm inline-block align-middle"
        isActive={isActive}
        disabled={isDisabled}
        data-settings-panel-slug={
          shouldParticipateInArrowNavigation ? section.slug : undefined
        }
        hideLabel={collapsed}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (isDisabled) return;
          if (section.externalUrl != null) {
            openSettingsExternalUrl({
              event,
              href: section.externalUrl,
              initiator: "open_in_browser_bridge",
            });
            return;
          }
          onSelect(section.slug);
        }}
        onKeyDown={
          shouldParticipateInArrowNavigation
            ? (event: React.KeyboardEvent<HTMLElement>) => {
                handleSectionArrowNavigation({
                  event,
                  onSelect,
                  section,
                  selectableSections,
                });
              }
            : undefined
        }
        weightClassName="font-normal"
        label={<SettingsNavigationTitle slug={section.slug} />}
        trailing={
          !collapsed && section.externalUrl != null ? (
            <ExternalLinkAdornment
              className="icon-xs text-token-text-secondary opacity-50"
              ExternalIcon={ExternalLinkIcon}
              href={section.externalUrl}
            />
          ) : undefined
        }
      />
    </Tooltip>
  );
}

function handleSectionArrowNavigation({
  event,
  onSelect,
  section,
  selectableSections,
}: {
  event: React.KeyboardEvent<HTMLElement>;
  onSelect: (sectionSlug: SettingsSectionSlug) => void;
  section: SettingsNavigationSection;
  selectableSections: readonly SettingsNavigationSection[];
}) {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

  event.preventDefault();
  const currentIndex = selectableSections.findIndex(
    (candidate) => candidate.slug === section.slug,
  );
  const nextSection =
    selectableSections[currentIndex + (event.key === "ArrowDown" ? 1 : -1)];

  if (nextSection == null) return;

  event.currentTarget
    .closest("nav")
    ?.querySelector<HTMLElement>(
      `[data-settings-panel-slug="${nextSection.slug}"]`,
    )
    ?.focus();
  onSelect(nextSection.slug);
}

function ChatSettingsLink({
  canCollapse,
  collapsed,
}: {
  canCollapse: boolean;
  collapsed: boolean;
}) {
  const intl = useIntl();

  return (
    <Tooltip
      tooltipContent={
        collapsed ? (
          <FormattedMessage {...chatSettingsMessage} />
        ) : (
          <ExternalSettingsTooltip />
        )
      }
      side="right"
      sideOffset={12}
    >
      <SidebarNavigationRowButton
        aria-label={intl.formatMessage(chatSettingsMessage)}
        icon={chatSettingsIcon}
        iconClassName="icon-sm inline-block align-middle"
        hideLabel={canCollapse ? collapsed : undefined}
        label={<FormattedMessage {...chatSettingsMessage} />}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          openSettingsExternalUrl({
            event,
            href: CHATGPT_SETTINGS_URL,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          });
        }}
        trailing={
          collapsed ? undefined : (
            <ExternalLinkAdornment
              className="icon-xs text-token-text-secondary opacity-50"
              ExternalIcon={ExternalLinkIcon}
              href={CHATGPT_SETTINGS_URL}
              openTarget="external-browser"
            />
          )
        }
        weightClassName="font-normal"
      />
    </Tooltip>
  );
}

function ClearHostFilterAction({
  onClearHostFilter,
}: {
  onClearHostFilter?: () => void;
}) {
  if (onClearHostFilter == null) return null;

  return (
    <div className="shrink-0 px-row-x pb-2 text-sm text-token-text-secondary">
      <button
        type="button"
        className="me-1 cursor-interaction border-0 bg-transparent p-0 underline underline-offset-2 hover:text-token-foreground"
        onClick={onClearHostFilter}
      >
        <FormattedMessage
          id="settings.nav.clearHostFilter"
          defaultMessage="Clear filter"
          description="Button to show all settings by clearing the selected remote host"
        />
      </button>
      <FormattedMessage
        id="settings.nav.clearHostFilterDescription"
        defaultMessage="to view all settings"
        description="Text explaining that clearing the selected remote host shows all settings"
      />
    </div>
  );
}

function NotAvailableSettingsTooltip() {
  return (
    <FormattedMessage
      id="settings.nav.notImplemented"
      defaultMessage="[alpha] Not available in Alpha"
      description="Tooltip shown for settings sections that are not available in the alpha build"
    />
  );
}

function ExternalSettingsTooltip() {
  return (
    <FormattedMessage
      id="settings.nav.externalTooltip"
      defaultMessage="[alpha] Opens in browser"
      description="Tooltip for settings items that open externally during alpha"
    />
  );
}
