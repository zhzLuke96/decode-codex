// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Shared types for the semantic current settings page modules.
import type {
  ComponentType,
  KeyboardEvent,
  KeyboardEventHandler,
  ReactNode,
  Ref,
  RefObject,
} from "react";
import type {
  IntlShape,
  MessageDescriptor,
  PrimitiveType,
} from "../../vendor/react-intl";
import type {
  SettingsSectionEntry,
  SettingsSectionId,
} from "../settings-sections";

export type SettingsSectionSlug = SettingsSectionId;

export type SettingsSearchMessageDescriptor = Pick<
  MessageDescriptor,
  "defaultMessage" | "description" | "id"
> & {
  defaultMessage: string;
  id: string;
};

export type SettingsNavigationSection = SettingsSectionEntry & {
  disabled?: boolean;
  externalUrl?: string;
};

export type SettingsNavigationGroupDefinition = {
  heading: MessageDescriptor | null;
  key: string;
  slugs: readonly SettingsSectionSlug[];
};

export type SettingsNavigationGroup = Omit<
  SettingsNavigationGroupDefinition,
  "slugs"
> & {
  sections: SettingsNavigationSection[];
};

export type SettingsNavigationIcon = ComponentType<{
  className?: string;
}>;

export type SettingsNavigationIconMap = Partial<
  Record<SettingsSectionSlug, SettingsNavigationIcon>
>;

export type SettingsSearchTarget = {
  messages: readonly SettingsSearchMessageDescriptor[];
  sectionSlug: SettingsSectionSlug;
  terms?: readonly string[];
};

export type SettingsSearchTargetDescriptor = {
  messageTexts: readonly string[];
  panelLabel: string;
  sectionSlug: SettingsSectionSlug;
};

export type SettingsSearchResult = {
  label: string;
  matchPriority: number;
  panelLabel: string;
  score: number;
  sectionSlug: SettingsSectionSlug;
};

export type SettingsSearchInputProps = {
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onQueryChange: (query: string) => void;
  searchQuery: string;
};

export type SettingsSearchResultsProps = {
  highlightedIndex: number;
  intl: IntlShape;
  listRef: RefObject<HTMLDivElement | null>;
  onSelect: (sectionSlug: SettingsSectionSlug) => void;
  searchResults: readonly SettingsSearchResult[];
};

export type SettingsNavigationSidebarProps = {
  activeSection: SettingsSectionSlug;
  canCollapse?: boolean;
  className?: string;
  groupSettingsSections?: boolean;
  onBack?: () => void;
  onClearHostFilter?: () => void;
  onSelect: (sectionSlug: SettingsSectionSlug) => void;
  searchTargets?: readonly SettingsSearchTarget[];
  settingsSections: readonly SettingsNavigationSection[];
  sidebarHostSelector?: ReactNode;
};

export type SettingsPageNavigationState = {
  activeSettingsSection: SettingsSectionSlug;
  shouldRedirectToVisibleSettingsSection: boolean;
  shouldRenderRouteContent: boolean;
  visibleSettingsSections: readonly SettingsNavigationSection[];
};

export type SettingsIntlShape = IntlShape & {
  locale: string;
  messages: Record<string, string>;
};

export type AvailabilityResult = {
  allowed?: boolean;
  available?: boolean;
  isLoading?: boolean;
  reason?: string;
};

export type ExperimentalFeature = {
  description?: string | null;
  displayName?: string | null;
  name: string;
  stage: string;
};

export type LocaleSearchOption = {
  language: string;
  locale: string;
};

export type SettingsHostConnection = {
  displayName: ReactNode;
  hostId: string;
};

export type SettingsHostSelectionState = {
  connectedRemoteConnections?: readonly SettingsHostConnection[] | null;
  remoteConnectionHostIds?: readonly string[] | null;
  selectedHostId: string | null;
  setSelectedHostId: (hostId: string) => void;
};

export type RouteScopeStore = {
  query: {
    invalidate: (
      key: unknown,
      options?: {
        exact?: boolean;
      },
    ) => Promise<unknown>;
  };
  set: (signal: unknown, value: unknown) => void;
};

export type SettingsQueryResult<TData> = {
  data?: TData;
};

export type PanelStateSerializer = (panelState: unknown) => unknown;

export type PanelStateChangeHandler = (
  event: unknown,
  panelState: unknown,
) => void;

export type SettingsSplitViewComponent = (() => boolean) & {
  LeftPanel: ComponentType<{
    children?: ReactNode;
  }>;
  Root: ComponentType<{
    children?: ReactNode;
  }>;
};

export type SettingsPanelStateRefHook = (
  onPanelStateChange: PanelStateChangeHandler,
) => Ref<HTMLDivElement>;

export type SettingsListNavigationOptions = {
  autoHighlightFirst: boolean;
  isActive: boolean;
  items: readonly string[];
  onEscape: () => void;
  onSelect: (selectedItem: string, resultIndex: number) => void;
};

export type SettingsListNavigationState = {
  getInputProps: () => {
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  };
  highlightedIndex: number;
  listRef: RefObject<HTMLDivElement | null>;
  setHighlightedIndex: (index: number) => void;
};

export type OpenExternalUrlOptions = {
  event: unknown;
  href: string;
  initiator: string;
  openTarget?: "external-browser";
};

export type HostConfig = {
  kind?: string;
};

export type ProfileVisibilityState = {
  isProfileVisibilityLoading: boolean;
  isProfileVisible: boolean;
};

export type UsageSettingsAccessState = {
  isUsageSettingsAccessLoading: boolean;
  isUsageSettingsVisible: boolean;
};

export type HostAppInfo = {
  isSystemBackdropSupported?: boolean;
  platform?: string;
};

export type LocaleDisplayFormatter = (
  locale: string,
  displayLocale: string,
) => string;

export type FormatMessageValues = Record<string, PrimitiveType>;
