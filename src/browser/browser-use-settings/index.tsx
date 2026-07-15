// Restored from ref/webview/assets/browser-use-settings-Ct3jD7gG.js
// Browser Use settings page, section rows, permission controls, and public chunk exports.

import React, { type ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { useLocation, useNavigate } from "../../vendor/react-router";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { generalSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { pluginMentionMessages } from "../../composer/mention-item";
import { usePlugins } from "../../plugins/use-plugins";
import { useInAppBrowserUseAvailability } from "../../plugins/use-is-plugins-enabled";
import { useSettingsHostContext } from "../../settings/settings-host-context";
import { SettingsMenuButton } from "../../settings/settings-shared";
import {
  setSettingValue,
  useSettingValue,
} from "../../settings/setting-storage";
import { Button } from "../../ui/button";
import { Dropdown } from "../../ui/dropdown";
import { DropdownMenu } from "../../ui/dropdown/menu";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { Spinner } from "../../ui/spinner";
import { Toggle } from "../../utils/toggle";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { PlusIcon } from "../../icons/plus-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { WarningIcon } from "../../icons/warning-icon";
import {
  browserUseOriginStateQuery,
  useAddBrowserUseFileTransferOriginMutation,
  useAddBrowserUseOriginMutation,
  useBrowserUseFullCdpAccessEnabledMutation,
  useClearBrowserBrowsingDataMutation,
  useRemoveBrowserUseFileTransferOriginMutation,
  useRemoveBrowserUseOriginMutation,
  useUpdateBrowserUseApprovalModeMutation,
  useUpdateBrowserUseHistoryApprovalModeMutation,
  useUpdateBrowserUseOriginRulesMutation,
} from "../browser-use-origin-state-queries";
import {
  BrowserSettingsWebview,
  browserSettingsRouteConfigs,
} from "./browser-settings-webview";
import {
  buildBrowserUseOriginRuleUpdates,
  buildBrowserUseSitePermissionRows,
  defaultBrowserUsePermissionValues,
  getBrowserUseDomainListOrigins,
  getBrowserUseSitePermissionPreset,
  getVisibleBrowserUsePermissionResources,
} from "./permissions";
import {
  findPreferredBrowserUsePlugin,
  PluginControlList,
} from "./plugin-control-list";
import type {
  BrowserUseApprovalMode,
  BrowserUseDomainListResource,
  BrowserSettingsKind,
  BrowserUseOriginRuleUpdate,
  BrowserUseOriginState,
  BrowserUsePermissionKind,
  BrowserUsePermissionResource,
  BrowserUsePermissionValue,
  BrowserUsePermissionValues,
  BrowserUseSitePermissionPreset,
  BrowserUseSitePermissionRow,
} from "./types";

type MutationLike<TInput> = {
  isPending?: boolean;
  mutate?: (input: TInput) => void;
  mutateAsync?: (input: TInput) => Promise<unknown>;
};

type BrowserUseOriginStateQueryResult = {
  data?: BrowserUseOriginState;
  isError?: boolean;
  isLoading?: boolean;
};

type SelectOption<TValue extends string> = {
  description?: ReactNode;
  elevatedRiskDisclaimer?: ReactNode;
  label: ReactNode;
  value: TValue;
};

const BROWSER_USE_PLUGIN_NAME = "browser";
const BROWSER_BROWSING_DATA_OPTIONS_ID = "browser-browsing-data-options";
const BROWSER_BROWSING_DATA_TYPES = [
  "cookies",
  "siteData",
  "cache",
  "downloads",
] as const;
const BROWSER_BROWSING_DATA_TYPES_WITH_HISTORY = [
  ...BROWSER_BROWSING_DATA_TYPES,
  "history",
] as const;
const OPEN_TARGET_OPTIONS = ["in-app-browser", "external-browser"] as const;
const SITE_PERMISSION_PRESETS: BrowserUseSitePermissionPreset[] = [
  "allowed",
  "denied",
];

type SettingDefinition = Parameters<typeof setSettingValue>[0];

export function BrowserUseSettings() {
  const location = useLocation();
  const routeKind = getBrowserSettingsKindFromPath(location.pathname);
  if (routeKind != null) return <BrowserSettingsWebview kind={routeKind} />;
  return <BrowserUseSettingsHome />;
}

function BrowserUseSettingsHome() {
  const { selectedHostId } = useSettingsHostContext();
  const externalBrowserAvailability = useInAppBrowserUseAvailability({
    hostId: selectedHostId,
  });
  return (
    <SettingsContentLayout
      title={
        <FormattedMessage
          id="settings.browserUse.title"
          defaultMessage="Browser"
          description="Title for in-app browser settings"
        />
      }
      subtitle={
        externalBrowserAvailability.available ? (
          <FormattedMessage
            id="settings.browserUse.subtitle"
            defaultMessage="Manage Codex's browser. Google Chrome can be set up in computer use settings"
            description="Subtitle for in-app browser settings"
          />
        ) : undefined
      }
      subtitleClassName="text-pretty"
    >
      <BrowserUseSettingsSections />
    </SettingsContentLayout>
  );
}

export function BrowserUseSettingsSections() {
  const { selectedHostId } = useSettingsHostContext();
  const pluginsQuery = usePlugins(selectedHostId, []);
  const codexHome = null;
  const browserUsePlugin =
    findPreferredBrowserUsePlugin(
      pluginsQuery.availablePlugins,
      BROWSER_USE_PLUGIN_NAME,
      codexHome,
    ) ??
    findPreferredBrowserUsePlugin(
      pluginsQuery.availablePlugins,
      "browser-use",
      codexHome,
    );
  const inAppBrowserUseAvailability = useInAppBrowserUseAvailability({
    hostId: selectedHostId,
  });
  const unavailableBrowserUsePlugins =
    browserUsePlugin == null &&
    !pluginsQuery.isLoading &&
    isRestrictedBrowserUseAvailability(inAppBrowserUseAvailability)
      ? [
          {
            description: (
              <FormattedMessage
                {...pluginMentionMessages.restrictedAvailabilityDescription}
              />
            ),
            id: "browser-use-unavailable",
            title: <FormattedMessage {...pluginMentionMessages.label} />,
          },
        ]
      : [];
  const pluginItems =
    browserUsePlugin == null
      ? []
      : [
          {
            plugin: browserUsePlugin,
            showIconBorder: false,
            showManageActions: true,
            title: <FormattedMessage {...pluginMentionMessages.label} />,
            description: (
              <FormattedMessage
                id="settings.browserUse.control.description"
                defaultMessage="Let Codex control the built-in browser"
                description="Description for the Browser plugin control row"
              />
            ),
          },
        ];
  return (
    <>
      <BrowserUseSettingsSection>
        <PluginControlList
          emptyStateTitle={
            <FormattedMessage
              id="settings.browserUse.install.empty"
              defaultMessage="In-app browser plugin unavailable"
              description="Empty state shown when the in-app browser plugin cannot be found"
            />
          }
          installButtonLabel={
            <FormattedMessage
              id="settings.browserUse.install.button"
              defaultMessage="Install"
              description="Button label for installing the browser plugin"
            />
          }
          items={pluginItems}
          pluginsQuery={pluginsQuery}
          selectedHostId={selectedHostId}
          unavailableItems={unavailableBrowserUsePlugins}
        />
      </BrowserUseSettingsSection>
      <BrowserUseSettingsSection
        title={
          <FormattedMessage
            id="settings.browserUse.general.title"
            defaultMessage="General"
            description="Title for general in-app browser settings section"
          />
        }
      >
        <BrowserUseSettingsRows>
          <WebUrlOpenTargetPreferenceRow />
          <LocalUrlOpenTargetPreferenceRow />
          <ClearBrowsingDataRow includeHistory={true} />
          <BrowsingHistorySettingsRow />
          <AnnotationScreenshotsModeRow />
        </BrowserUseSettingsRows>
      </BrowserUseSettingsSection>
      <BrowserUseSettingsSection
        title={
          <FormattedMessage
            id="settings.browserUse.autofillAndPasswords.title"
            defaultMessage="Autofill and passwords"
            description="Title for browser autofill and password settings section"
          />
        }
      >
        <BrowserUseSettingsRows>
          <PasswordManagerSettingsRow />
          <ContactInfoSettingsRow />
        </BrowserUseSettingsRows>
      </BrowserUseSettingsSection>
      <BrowserUseSettingsSection
        title={
          <FormattedMessage
            id="settings.browserUse.extensions.title"
            defaultMessage="Extensions"
            description="Title for browser extension settings section"
          />
        }
      >
        <BrowserUseSettingsRows>
          <ExtensionsSettingsRow />
        </BrowserUseSettingsRows>
      </BrowserUseSettingsSection>
      <DownloadsSettingsSection />
      <BrowserUseSettingsSection
        title={
          <FormattedMessage
            id="settings.browserUse.permissions.title"
            defaultMessage="Permissions"
            description="Title for browser use permissions settings section"
          />
        }
      >
        <BrowserUseSettingsRows>
          <SiteSettingsRow />
          <BrowserUseApprovalModeRow />
        </BrowserUseSettingsRows>
      </BrowserUseSettingsSection>
      <BrowserUsePermissionSections surface="inAppBrowser" />
      <FullCdpDeveloperModeSection />
    </>
  );
}

function BrowserUseSettingsSection({
  children,
  title,
}: {
  children: ReactNode;
  title?: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-2">
      {title == null ? null : (
        <div className="px-1 text-sm font-medium text-token-text-secondary">
          {title}
        </div>
      )}
      {children}
    </section>
  );
}

function BrowserUseSettingsRows({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-token-border">
      {children}
    </div>
  );
}

export function PasswordManagerSettingsRow() {
  return (
    <BrowserSettingsManageRow
      description={
        <FormattedMessage
          id="settings.browserUse.passwordManager.description"
          defaultMessage="Add, delete, and edit saved passwords"
          description="Description for browser password manager settings row"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.passwordManager.label"
          defaultMessage="Password manager"
          description="Label for browser password manager settings row"
        />
      }
      path={browserSettingsRouteConfigs.passwordManager.path}
    />
  );
}

export function ContactInfoSettingsRow() {
  return (
    <BrowserSettingsManageRow
      description={
        <FormattedMessage
          id="settings.browserUse.contactInfo.description"
          defaultMessage="Add, delete, and edit saved addresses, phone numbers, and email addresses"
          description="Description for browser contact info settings row"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.contactInfo.label"
          defaultMessage="Contact info"
          description="Label for browser contact info settings row"
        />
      }
      path={browserSettingsRouteConfigs.contactInfo.path}
    />
  );
}

export function ExtensionsSettingsRow() {
  return (
    <BrowserSettingsManageRow
      description={
        <FormattedMessage
          id="settings.browserUse.extensions.description"
          defaultMessage="Install, remove, and configure browser extensions"
          description="Description for browser extension settings row"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.extensions.label"
          defaultMessage="Extension manager"
          description="Label for browser extension settings row"
        />
      }
      path={browserSettingsRouteConfigs.extensions.path}
    />
  );
}

export function BrowsingHistorySettingsRow() {
  return (
    <BrowserSettingsManageRow
      description={
        <FormattedMessage
          id="settings.browserUse.history.description"
          defaultMessage="View and manage pages visited in Codex's browser"
          description="Description for browser history settings row"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.history.label"
          defaultMessage="Browsing history"
          description="Label for browser history settings row"
        />
      }
      path={browserSettingsRouteConfigs.history.path}
    />
  );
}

export function SiteSettingsRow() {
  return (
    <BrowserSettingsManageRow
      description={
        <FormattedMessage
          id="settings.browserUse.siteSettings.description"
          defaultMessage="Control camera and microphone permissions in Codex's browser"
          description="Description for browser site settings row"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.siteSettings.label"
          defaultMessage="Site settings"
          description="Label for browser site settings row"
        />
      }
      path={browserSettingsRouteConfigs.siteSettings.path}
    />
  );
}

function BrowserSettingsManageRow({
  description,
  label,
  path,
}: {
  description: ReactNode;
  label: ReactNode;
  path: string;
}) {
  const navigate = useNavigate();
  return (
    <SettingsControlRow
      label={label}
      description={description}
      control={
        <Button color="secondary" onClick={() => navigate(path)} size="toolbar">
          <FormattedMessage
            id="settings.browserUse.browserSettings.manage"
            defaultMessage="Manage"
            description="Button label for browser settings row"
          />
        </Button>
      }
    />
  );
}

function DownloadsSettingsSection() {
  const navigate = useNavigate();
  const downloadDirectory = useSettingValue(
    generalSettingDefinitions.downloadDirectory,
  );
  const promptForDownloadLocation = useSettingValue(
    generalSettingDefinitions.promptForDownloadLocation,
  );
  return (
    <BrowserUseSettingsSection
      title={
        <FormattedMessage
          id="settings.browserUse.downloads.title"
          defaultMessage="Downloads"
          description="Title for browser download settings section"
        />
      }
    >
      <BrowserUseSettingsRows>
        <SettingsControlRow
          label={
            <FormattedMessage
              id="settings.browserUse.downloads.location.label"
              defaultMessage="Location"
              description="Label for the browser download location setting"
            />
          }
          description={
            typeof downloadDirectory === "string" &&
            downloadDirectory.length > 0 ? (
              downloadDirectory
            ) : (
              <FormattedMessage
                id="settings.browserUse.downloads.location.system"
                defaultMessage="System Downloads folder"
                description="Description for the default browser download location"
              />
            )
          }
          control={
            typeof downloadDirectory === "string" &&
            downloadDirectory.length > 0 ? (
              <Button
                color="ghost"
                onClick={() =>
                  setSettingValue(
                    generalSettingDefinitions.downloadDirectory,
                    null,
                  )
                }
                size="toolbar"
              >
                <FormattedMessage
                  id="settings.browserUse.downloads.location.reset"
                  defaultMessage="Reset"
                  description="Button that resets the browser download location"
                />
              </Button>
            ) : null
          }
        />
        <SettingsControlRow
          label={
            <FormattedMessage
              id="settings.browserUse.downloads.prompt.label"
              defaultMessage="Ask where to save downloads"
              description="Label for the manual browser download prompt setting"
            />
          }
          description={
            <FormattedMessage
              id="settings.browserUse.downloads.prompt.description"
              defaultMessage="Show a save dialog for downloads you start in Codex's browser"
              description="Description for the manual browser download prompt setting"
            />
          }
          control={
            <Toggle
              ariaLabel="Ask where to save downloads"
              checked={promptForDownloadLocation === true}
              onChange={(checked) =>
                setSettingValue(
                  generalSettingDefinitions.promptForDownloadLocation,
                  checked,
                )
              }
            />
          }
        />
        <SettingsControlRow
          label={
            <FormattedMessage
              id="settings.browserUse.downloads.history.label"
              defaultMessage="Download history"
              description="Label for the browser download history setting"
            />
          }
          description={
            <FormattedMessage
              id="settings.browserUse.downloads.history.description"
              defaultMessage="View and manage files downloaded from Codex's browser"
              description="Description for the browser download history setting"
            />
          }
          control={
            <Button
              color="secondary"
              onClick={() =>
                navigate(browserSettingsRouteConfigs.downloads.path)
              }
              size="toolbar"
            >
              <FormattedMessage
                id="settings.browserUse.downloads.history.manage"
                defaultMessage="Manage"
                description="Button that shows the browser download history"
              />
            </Button>
          }
        />
      </BrowserUseSettingsRows>
    </BrowserUseSettingsSection>
  );
}

export function BrowserUsePermissionSections({
  surface,
}: {
  surface: "googleChrome" | "inAppBrowser";
}) {
  return (
    <>
      <BrowserUseSettingsSection
        title={
          <FormattedMessage
            id="settings.browserUse.sitePermissions.title"
            defaultMessage="Site permissions"
            description="Title for browser use site permissions table"
          />
        }
      >
        <BrowserUseSitePermissionsTable />
      </BrowserUseSettingsSection>
      <BrowserDomainListSection
        kind="denied"
        resource="origins"
        surface={surface}
      />
      <BrowserDomainListSection
        kind="allowed"
        resource="origins"
        surface={surface}
      />
      {surface === "googleChrome" ? (
        <>
          <BrowserDomainListSection
            kind="denied"
            resource="downloads"
            surface={surface}
          />
          <BrowserDomainListSection
            kind="allowed"
            resource="downloads"
            surface={surface}
          />
          <BrowserDomainListSection
            kind="denied"
            resource="uploads"
            surface={surface}
          />
          <BrowserDomainListSection
            kind="allowed"
            resource="uploads"
            surface={surface}
          />
        </>
      ) : null}
    </>
  );
}

function BrowserUseSitePermissionsTable() {
  const originStateQuery = useBrowserUseOriginStateQuery();
  const state = originStateQuery.data;
  const isFullCdpAccessEnabled = state?.fullCdpAccessEnabled === true;
  const visibleResources = getVisibleBrowserUsePermissionResources(
    isFullCdpAccessEnabled,
  );
  const rows =
    state == null
      ? []
      : buildBrowserUseSitePermissionRows(state, visibleResources);
  return (
    <div className="overflow-hidden rounded-lg border border-token-border">
      {originStateQuery.isError ? (
        <div className="p-4 text-sm text-token-text-secondary">
          <FormattedMessage
            id="settings.browserUse.sitePermissions.loadError"
            defaultMessage="Unable to load site permissions"
            description="Message shown when browser site permissions fail to load"
          />
        </div>
      ) : originStateQuery.isLoading || state == null ? (
        <div className="flex items-center gap-2 p-4 text-sm text-token-text-secondary">
          <Spinner className="icon-xs" />
          <FormattedMessage
            id="settings.browserUse.sitePermissions.loading"
            defaultMessage="Loading websites"
            description="Message shown while loading browser site permissions"
          />
        </div>
      ) : rows.length === 0 ? (
        <SettingsControlRow
          className="justify-center"
          control={null}
          label={
            <span className="text-token-text-secondary">
              <FormattedMessage
                id="settings.browserUse.sitePermissions.empty"
                defaultMessage="No site-specific permissions yet"
                description="Empty state for browser use site permissions table"
              />
            </span>
          }
        />
      ) : (
        rows.map((row) => (
          <SitePermissionRow
            key={row.origin}
            row={row}
            visibleResources={visibleResources}
          />
        ))
      )}
      <div className="px-4 py-3 text-xs text-token-text-secondary">
        <FormattedMessage
          id="settings.browserUse.sitePermissions.defaultNote"
          defaultMessage="Only sites with custom permissions appear here"
          description="Footer note for browser use site permissions list"
        />
      </div>
    </div>
  );
}

function SitePermissionRow({
  row,
  visibleResources,
}: {
  row: BrowserUseSitePermissionRow;
  visibleResources: BrowserUsePermissionResource[];
}) {
  const updateRulesMutation = asMutation<BrowserUseOriginRuleUpdate[]>(
    useUpdateBrowserUseOriginRulesMutation(),
  );
  const preset = getBrowserUseSitePermissionPreset(row, visibleResources);
  const applyPreset = (nextPreset: BrowserUseSitePermissionPreset) => {
    const nextValues: BrowserUsePermissionValues = {
      ...row.values,
      origin: nextPreset === "custom" ? row.values.origin : nextPreset,
    };
    runMutation(
      updateRulesMutation,
      buildBrowserUseOriginRuleUpdates({
        nextValues,
        origin: row.origin,
        resources: ["origin"],
        values: row.values,
      }),
    );
  };
  const clearPermissions = () => {
    runMutation(
      updateRulesMutation,
      buildBrowserUseOriginRuleUpdates({
        nextValues: defaultBrowserUsePermissionValues,
        origin: row.origin,
        resources: Object.keys(
          defaultBrowserUsePermissionValues,
        ) as BrowserUsePermissionResource[],
        values: row.values,
      }),
    );
  };
  return (
    <div className="flex min-h-14 items-center gap-3 px-4 py-2.5">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="block min-w-0 truncate text-sm font-medium">
          {row.origin}
        </span>
        {preset === "custom" ? (
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-token-text-secondary">
            {visibleResources
              .filter((resource) => row.values[resource] !== "default")
              .map((resource) => (
                <span key={resource} className="flex items-center gap-1.5">
                  <PermissionValueDot value={row.values[resource]} />
                  <span className="flex items-center gap-1">
                    {getPermissionResourceLabel(resource)}
                  </span>
                </span>
              ))}
          </div>
        ) : null}
      </div>
      <DropdownSelect
        disabled={updateRulesMutation.isPending === true}
        options={SITE_PERMISSION_PRESETS.map((value) => ({
          value,
          label: getSitePermissionPresetLabel(value),
        }))}
        value={preset === "custom" ? "custom" : preset}
        valueLabel={getSitePermissionPresetLabel(preset)}
        onSelect={(value) => applyPreset(value)}
      />
      <Button
        aria-label={`Remove custom permissions for ${row.origin}`}
        color="ghost"
        disabled={updateRulesMutation.isPending === true}
        onClick={clearPermissions}
        size="icon"
      >
        <TrashIcon className="icon-2xs" />
      </Button>
    </div>
  );
}

export function BrowserDomainListSection({
  kind,
  resource = "origins",
  surface = "inAppBrowser",
}: {
  kind: BrowserUsePermissionKind;
  resource?: BrowserUseDomainListResource;
  surface?: "googleChrome" | "inAppBrowser";
}) {
  const originStateQuery = useBrowserUseOriginStateQuery();
  const state = originStateQuery.data;
  const origins =
    state == null ? [] : getBrowserUseDomainListOrigins(state, resource, kind);
  const [adding, setAdding] = React.useState(false);
  return (
    <BrowserUseSettingsSection title={getDomainListTitle(resource, kind)}>
      <div className="overflow-hidden rounded-lg border border-token-border">
        <div className="flex items-center justify-between gap-3 border-b border-token-border p-3">
          <div className="min-w-0">
            <div className="text-sm font-medium">
              {getDomainListTitle(resource, kind)}
            </div>
            <div className="text-sm text-token-text-secondary">
              {getDomainListSubtitle(resource, kind, surface)}
            </div>
          </div>
          <Button
            color="secondary"
            onClick={() => setAdding(true)}
            size="toolbar"
          >
            <PlusIcon className="icon-xs" />
            <FormattedMessage
              id="settings.browserUse.domains.add"
              defaultMessage="Add"
              description="Button label to add a browser use domain"
            />
          </Button>
        </div>
        {adding ? (
          <AddDomainForm
            kind={kind}
            resource={resource}
            onDone={() => setAdding(false)}
          />
        ) : null}
        {originStateQuery.isLoading || state == null ? (
          <div className="flex items-center gap-2 p-4 text-sm text-token-text-secondary">
            <Spinner className="icon-xs" />
            <FormattedMessage
              id="settings.browserUse.origins.loading"
              defaultMessage="Loading websites"
              description="Message shown while loading browser website origin settings"
            />
          </div>
        ) : origins.length === 0 ? (
          <SettingsControlRow
            className="justify-center"
            control={null}
            label={
              <span className="text-token-text-secondary">
                {getDomainListEmptyTitle(resource, kind)}
              </span>
            }
          />
        ) : (
          origins.map((origin) => (
            <DomainListRow
              key={origin}
              kind={kind}
              origin={origin}
              resource={resource}
            />
          ))
        )}
      </div>
    </BrowserUseSettingsSection>
  );
}

function AddDomainForm({
  kind,
  onDone,
  resource,
}: {
  kind: BrowserUsePermissionKind;
  onDone: () => void;
  resource: BrowserUseDomainListResource;
}) {
  const [origin, setOrigin] = React.useState("");
  const addOriginMutation = asMutation<{ kind: string; origin: string }>(
    useAddBrowserUseOriginMutation(),
  );
  const addFileTransferOriginMutation = asMutation<{
    kind: string;
    origin: string;
    transferKind: "download" | "upload";
  }>(useAddBrowserUseFileTransferOriginMutation());
  const isSaving =
    addOriginMutation.isPending === true ||
    addFileTransferOriginMutation.isPending === true;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedOrigin = origin.trim();
    if (trimmedOrigin.length === 0 || isSaving) return;
    if (resource === "origins") {
      runMutation(addOriginMutation, {
        kind,
        origin: trimmedOrigin,
      });
    } else {
      runMutation(addFileTransferOriginMutation, {
        kind,
        origin: trimmedOrigin,
        transferKind: resource === "downloads" ? "download" : "upload",
      });
    }
    setOrigin("");
    onDone();
  };
  return (
    <form
      className="flex items-center gap-2 border-b border-token-border p-3"
      onSubmit={handleSubmit}
    >
      <input
        aria-label="Domain"
        className="min-w-0 flex-1 rounded-xl border border-token-border px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none"
        disabled={isSaving}
        onChange={(event) => setOrigin(event.currentTarget.value)}
        placeholder="example.com"
        value={origin}
      />
      <Button color="outline" disabled={isSaving} onClick={onDone}>
        <FormattedMessage
          id="settings.browserUse.domains.addDialogCancel"
          defaultMessage="Cancel"
          description="Cancel button label for add browser domain dialog"
        />
      </Button>
      <Button
        color="primary"
        disabled={origin.trim().length === 0 || isSaving}
        loading={isSaving}
        type="submit"
      >
        <FormattedMessage
          id="settings.browserUse.domains.addDialogConfirm"
          defaultMessage="Add"
          description="Confirm button label for add browser domain dialog"
        />
      </Button>
    </form>
  );
}

function DomainListRow({
  kind,
  origin,
  resource,
}: {
  kind: BrowserUsePermissionKind;
  origin: string;
  resource: BrowserUseDomainListResource;
}) {
  const removeOriginMutation = asMutation<{ kind: string; origin: string }>(
    useRemoveBrowserUseOriginMutation(),
  );
  const removeFileTransferOriginMutation = asMutation<{
    kind: string;
    origin: string;
    transferKind: "download" | "upload";
  }>(useRemoveBrowserUseFileTransferOriginMutation());
  const isSaving =
    removeOriginMutation.isPending === true ||
    removeFileTransferOriginMutation.isPending === true;
  const remove = () => {
    if (resource === "origins") {
      runMutation(removeOriginMutation, {
        kind,
        origin,
      });
    } else {
      runMutation(removeFileTransferOriginMutation, {
        kind,
        origin,
        transferKind: resource === "downloads" ? "download" : "upload",
      });
    }
  };
  return (
    <SettingsControlRow
      label={<span className="font-medium">{origin}</span>}
      control={
        <Button
          aria-label={`Remove ${origin}`}
          color="ghost"
          disabled={isSaving}
          onClick={remove}
          size="icon"
        >
          <TrashIcon className="icon-2xs" />
        </Button>
      }
    />
  );
}

export function FullCdpDeveloperModeSection() {
  const { selectedHostId } = useSettingsHostContext();
  return (
    <BrowserUseSettingsSection
      title={
        <FormattedMessage
          id="settings.browserUse.developerMode.title"
          defaultMessage="Developer mode"
          description="Title for full CDP developer mode settings"
        />
      }
    >
      <BrowserUseSettingsRows>
        <FullCdpAccessRow hostId={selectedHostId} />
      </BrowserUseSettingsRows>
    </BrowserUseSettingsSection>
  );
}

function FullCdpAccessRow({ hostId }: { hostId: string }) {
  const originStateQuery = useBrowserUseOriginStateQuery();
  const updateFullCdpMutation = asMutation<boolean>(
    useBrowserUseFullCdpAccessEnabledMutation({
      hostId,
    }),
  );
  const enabled =
    originStateQuery.data?.fullCdpAccessEnabled === true &&
    originStateQuery.isLoading !== true;
  return (
    <SettingsControlRow
      label={
        <div className="flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 font-medium text-token-editor-warning-foreground">
            <WarningIcon className="icon-xs shrink-0" />
            <FormattedMessage
              id="settings.browserUse.fullCdp.elevatedRisk.label"
              defaultMessage="Elevated risk"
              description="Label for the elevated risk warning shown for the full CDP developer mode toggle"
            />
          </span>
          <span>
            <FormattedMessage
              id="settings.browserUse.fullCdp.label"
              defaultMessage="Enable full CDP access"
              description="Label for the full CDP developer mode toggle"
            />
          </span>
        </div>
      }
      description={
        <FormattedMessage
          id="settings.browserUse.fullCdp.description"
          defaultMessage="Allow Codex to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets Codex inspect and control sensitive browser internals that may put your data at risk."
          description="Description for the full CDP developer mode toggle"
        />
      }
      control={
        <Toggle
          ariaLabel="Toggle full CDP access"
          checked={enabled}
          disabled={
            originStateQuery.isLoading === true ||
            updateFullCdpMutation.isPending === true
          }
          onChange={(checked) => runMutation(updateFullCdpMutation, checked)}
        />
      }
    />
  );
}

export function BrowserUseApprovalModeRow() {
  const originStateQuery = useBrowserUseOriginStateQuery();
  const mutation = asMutation<BrowserUseApprovalMode>(
    useUpdateBrowserUseApprovalModeMutation(),
  );
  const value = normalizeApprovalMode(originStateQuery.data?.approvalMode);
  const options: SelectOption<BrowserUseApprovalMode>[] = [
    {
      value: "alwaysAsk",
      label: (
        <FormattedMessage
          id="settings.browserUse.approval.alwaysAsk.label"
          defaultMessage="Always ask"
          description="Label for browser use always ask approval mode"
        />
      ),
      description: (
        <FormattedMessage
          id="settings.browserUse.approval.alwaysAsk.description"
          defaultMessage="Ask before opening websites"
          description="Description for browser use always ask approval mode"
        />
      ),
    },
    {
      value: "neverAsk",
      label: (
        <FormattedMessage
          id="settings.browserUse.approval.neverAsk.label"
          defaultMessage="Always allow"
          description="Label for browser use never ask approval mode"
        />
      ),
      description: (
        <FormattedMessage
          id="settings.browserUse.approval.neverAsk.description"
          defaultMessage="Open websites without asking"
          description="Description for browser use never ask approval mode"
        />
      ),
      elevatedRiskDisclaimer: (
        <FormattedMessage
          id="settings.browserUse.approval.neverAsk.elevatedRiskDisclaimer"
          defaultMessage="This setting has elevated risks for your data."
          description="Elevated risk warning for the browser use always allow website approval mode"
        />
      ),
    },
  ];
  return (
    <SettingsControlRow
      label={
        <FormattedMessage
          id="settings.browserUse.approval.label"
          defaultMessage="Approval"
          description="Label for browser use approval mode setting"
        />
      }
      description={
        <FormattedMessage
          id="settings.browserUse.approval.description"
          defaultMessage="Choose if Codex asks for approval before opening websites."
          description="Description for browser use approval mode setting"
        />
      }
      control={
        <DropdownSelect
          disabled={
            originStateQuery.isLoading === true || mutation.isPending === true
          }
          options={options}
          value={value}
          valueLabel={options.find((option) => option.value === value)?.label}
          onSelect={(nextValue) => runMutation(mutation, nextValue)}
        />
      }
    />
  );
}

export function BrowserUseHistoryApprovalModeRow() {
  const originStateQuery = useBrowserUseOriginStateQuery();
  const mutation = asMutation<BrowserUseApprovalMode>(
    useUpdateBrowserUseHistoryApprovalModeMutation(),
  );
  const value = normalizeApprovalMode(
    originStateQuery.data?.historyApprovalMode,
  );
  const options: SelectOption<BrowserUseApprovalMode>[] = [
    {
      value: "alwaysAsk",
      label: (
        <FormattedMessage
          id="settings.browserUse.approval.alwaysAsk.label"
          defaultMessage="Always ask"
          description="Label for browser use always ask approval mode"
        />
      ),
      description: (
        <FormattedMessage
          id="settings.browserUse.historyApproval.alwaysAsk.description"
          defaultMessage="Ask before accessing history"
          description="Description for browser use always ask history approval mode"
        />
      ),
    },
    {
      value: "neverAsk",
      label: (
        <FormattedMessage
          id="settings.browserUse.approval.neverAsk.label"
          defaultMessage="Always allow"
          description="Label for browser use never ask approval mode"
        />
      ),
      description: (
        <FormattedMessage
          id="settings.browserUse.historyApproval.neverAsk.description"
          defaultMessage="Access history without asking"
          description="Description for browser use never ask history approval mode"
        />
      ),
    },
  ];
  return (
    <SettingsControlRow
      label={
        <FormattedMessage
          id="settings.browserUse.historyApproval.label"
          defaultMessage="History"
          description="Label for browser use history approval mode setting"
        />
      }
      description={
        <FormattedMessage
          id="settings.browserUse.historyApproval.description"
          defaultMessage="Choose if Codex asks for approval before accessing your browser's history"
          description="Description for browser use history approval mode setting"
        />
      }
      control={
        <DropdownSelect
          disabled={
            originStateQuery.isLoading === true || mutation.isPending === true
          }
          options={options}
          value={value}
          valueLabel={options.find((option) => option.value === value)?.label}
          onSelect={(nextValue) => runMutation(mutation, nextValue)}
        />
      }
    />
  );
}

export function ClearBrowsingDataRow({
  includeHistory,
}: {
  includeHistory: boolean;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [pendingType, setPendingType] = React.useState<string | null>(null);
  const mutation = asMutation<readonly string[]>(
    useClearBrowserBrowsingDataMutation(),
  );
  const dataTypes = includeHistory
    ? BROWSER_BROWSING_DATA_TYPES_WITH_HISTORY
    : BROWSER_BROWSING_DATA_TYPES;
  const clearData = async (label: string, types: readonly string[]) => {
    setPendingType(label);
    await runMutation(mutation, types);
    setPendingType(null);
  };
  const isPending = mutation.isPending === true || pendingType != null;
  return (
    <>
      <SettingsControlRow
        className="gap-3 max-sm:flex-col max-sm:items-stretch"
        label={
          <FormattedMessage
            id="settings.browserUse.browser.clearBrowsingData.label"
            defaultMessage="Browsing data"
            description="Label for clearing all browser browsing data"
          />
        }
        description={
          <FormattedMessage
            id="settings.browserUse.browser.clearBrowsingData.description"
            defaultMessage="Clear browsing history, site data, cache, and download history from the in-app browser"
            description="Description for clearing all browser browsing data"
          />
        }
        control={
          <div className="flex items-center gap-1.5">
            <Button
              color="secondary"
              disabled={isPending && pendingType !== "all"}
              loading={pendingType === "all"}
              onClick={() => clearData("all", dataTypes)}
              size="toolbar"
            >
              <FormattedMessage
                id="settings.browserUse.browser.clearBrowsingData"
                defaultMessage="Clear all browsing data"
                description="Button label to clear all browser browsing data"
              />
            </Button>
            <Button
              aria-controls={BROWSER_BROWSING_DATA_OPTIONS_ID}
              aria-expanded={expanded}
              color="ghost"
              disabled={isPending}
              onClick={() => setExpanded(!expanded)}
              size="icon"
            >
              <ChevronIcon
                className={`icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        }
      />
      {expanded ? (
        <div
          id={BROWSER_BROWSING_DATA_OPTIONS_ID}
          className="flex flex-col divide-y divide-token-border bg-token-bg-secondary/20"
        >
          {dataTypes.map((dataType) => (
            <ClearBrowsingDataOptionRow
              key={dataType}
              dataType={dataType}
              disabled={isPending && pendingType !== dataType}
              loading={pendingType === dataType}
              onClear={(type) => clearData(type, [type])}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

function ClearBrowsingDataOptionRow({
  dataType,
  disabled,
  loading,
  onClear,
}: {
  dataType: string;
  disabled: boolean;
  loading: boolean;
  onClear: (dataType: string) => void;
}) {
  return (
    <div className="grid min-h-10 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-0.5 max-md:grid-cols-1 max-md:items-start max-md:gap-1 max-md:py-2">
      <div className="min-w-0 text-sm text-token-text-secondary">
        {getBrowsingDataTypeLabel(dataType)}
      </div>
      <Button
        className="max-w-full justify-self-end text-left whitespace-normal max-md:-ml-2 max-md:justify-self-start"
        color="ghost"
        disabled={disabled}
        loading={loading}
        onClick={() => onClear(dataType)}
        size="toolbar"
      >
        {getClearBrowsingDataButtonLabel(dataType)}
      </Button>
    </div>
  );
}

function AnnotationScreenshotsModeRow() {
  const value =
    useSettingValue(generalSettingDefinitions.annotationScreenshotsMode) ??
    "always";
  const options = [
    {
      value: "always",
      label: (
        <FormattedMessage
          id="settings.browserUse.browser.annotationScreenshots.always.label"
          defaultMessage="Always include"
          description="Label for always including browser annotation screenshots"
        />
      ),
    },
    {
      value: "necessary",
      label: (
        <FormattedMessage
          id="settings.browserUse.browser.annotationScreenshots.necessary.label"
          defaultMessage="Only on drag selection"
          description="Label for including browser annotation screenshots only for drag-selected regions"
        />
      ),
    },
  ];
  return (
    <SettingsControlRow
      label={
        <FormattedMessage
          id="settings.browserUse.browser.annotationScreenshots.label"
          defaultMessage="Annotation screenshots"
          description="Label for browser annotation screenshots setting"
        />
      }
      description={
        <FormattedMessage
          id="settings.browserUse.browser.annotationScreenshots.description"
          defaultMessage="Screenshots help Codex better understand and address comments, but increase plan usage"
          description="Description for browser annotation screenshots setting"
        />
      }
      control={
        <DropdownSelect
          options={options}
          value={String(value)}
          valueLabel={options.find((option) => option.value === value)?.label}
          onSelect={(nextValue) =>
            setSettingValue(
              generalSettingDefinitions.annotationScreenshotsMode,
              nextValue,
            )
          }
        />
      }
    />
  );
}

function WebUrlOpenTargetPreferenceRow() {
  const value =
    useSettingValue(generalSettingDefinitions.openLinkInTargetPreference) ??
    "in-app-browser";
  return (
    <OpenTargetPreferenceRow
      description={
        <FormattedMessage
          id="settings.general.openLinkInTargetPreference.description"
          defaultMessage="Where links open by default"
          description="Description for default web link open target setting"
        />
      }
      label={
        <FormattedMessage
          id="settings.general.openLinkInTargetPreference.label"
          defaultMessage="Web URL and link open destination"
          description="Label for default web link open target setting"
        />
      }
      setting={generalSettingDefinitions.openLinkInTargetPreference}
      value={String(value)}
    />
  );
}

function LocalUrlOpenTargetPreferenceRow() {
  const value =
    useSettingValue(generalSettingDefinitions.openLocalUrlInTargetPreference) ??
    "in-app-browser";
  return (
    <OpenTargetPreferenceRow
      description={
        <FormattedMessage
          id="settings.browserUse.localUrlOpenTarget.description"
          defaultMessage="Where local development sites open by default"
          description="Description for default local URL open target setting"
        />
      }
      label={
        <FormattedMessage
          id="settings.browserUse.localUrlOpenTarget.label"
          defaultMessage="Local URL open destination"
          description="Label for default local URL open target setting"
        />
      }
      setting={generalSettingDefinitions.openLocalUrlInTargetPreference}
      value={String(value)}
    />
  );
}

function OpenTargetPreferenceRow({
  description,
  label,
  setting,
  value,
}: {
  description: ReactNode;
  label: ReactNode;
  setting: SettingDefinition;
  value: string;
}) {
  return (
    <SettingsControlRow
      label={label}
      description={description}
      control={
        <DropdownSelect
          options={OPEN_TARGET_OPTIONS.map((optionValue) => ({
            value: optionValue,
            label: getOpenTargetLabel(optionValue),
          }))}
          value={value}
          valueLabel={getOpenTargetLabel(value)}
          onSelect={(nextValue) => setSettingValue(setting, nextValue)}
        />
      }
    />
  );
}

function DropdownSelect<TValue extends string>({
  disabled,
  onSelect,
  options,
  value,
  valueLabel,
}: {
  disabled?: boolean;
  onSelect: (value: TValue) => void;
  options: SelectOption<TValue>[];
  value: TValue | string;
  valueLabel?: ReactNode;
}) {
  return (
    <DropdownMenu
      align="end"
      contentWidth="menuWide"
      disabled={disabled}
      triggerButton={
        <SettingsMenuButton
          className="w-[168px]"
          disabled={disabled}
          contentClassName="truncate"
        >
          <span className="truncate">{valueLabel ?? value}</span>
        </SettingsMenuButton>
      }
    >
      <div className="flex flex-col">
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            allowWrap={true}
            disabled={disabled}
            RightIcon={option.value === value ? CheckMdIcon : undefined}
            onSelect={() => onSelect(option.value)}
          >
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate">{option.label}</span>
              {option.description == null ? null : (
                <span className="truncate text-sm text-token-text-secondary">
                  {option.description}
                </span>
              )}
              {option.elevatedRiskDisclaimer == null ? null : (
                <span className="mt-0.5 flex min-w-0 items-start gap-1 text-sm leading-4 text-token-description-foreground">
                  <WarningIcon className="icon-xs shrink-0 text-token-editor-warning-foreground" />
                  <span className="min-w-0 whitespace-normal">
                    {option.elevatedRiskDisclaimer}
                  </span>
                </span>
              )}
            </div>
          </Dropdown.Item>
        ))}
      </div>
    </DropdownMenu>
  );
}

function PermissionValueDot({ value }: { value: BrowserUsePermissionValue }) {
  const colorClassName =
    value === "allowed"
      ? "bg-token-charts-green"
      : value === "denied"
        ? "bg-token-editor-error-foreground"
        : "bg-token-text-tertiary";
  return <span className={`size-2 shrink-0 rounded-full ${colorClassName}`} />;
}

function useBrowserUseOriginStateQuery(): BrowserUseOriginStateQueryResult {
  return useAppScopeValue(
    browserUseOriginStateQuery,
  ) as BrowserUseOriginStateQueryResult;
}

function getBrowserSettingsKindFromPath(
  pathname: string,
): BrowserSettingsKind | null {
  for (const [kind, config] of Object.entries(browserSettingsRouteConfigs)) {
    if (
      kind === "siteSettings"
        ? pathname.startsWith(config.path)
        : pathname === config.path
    ) {
      return kind as BrowserSettingsKind;
    }
  }
  return null;
}

function isRestrictedBrowserUseAvailability(availability: { reason?: string }) {
  return (
    availability.reason === "statsig-disabled" ||
    availability.reason === "config-requirement-disabled"
  );
}

function normalizeApprovalMode(
  mode: BrowserUseApprovalMode | string | null | undefined,
): BrowserUseApprovalMode {
  return mode === "neverAsk" ? "neverAsk" : "alwaysAsk";
}

function asMutation<TInput>(mutation: unknown): MutationLike<TInput> {
  return mutation as MutationLike<TInput>;
}

async function runMutation<TInput>(
  mutation: MutationLike<TInput>,
  input: TInput,
) {
  if (mutation.mutateAsync != null) {
    await mutation.mutateAsync(input);
    return;
  }
  mutation.mutate?.(input);
}

function getSitePermissionPresetLabel(preset: BrowserUseSitePermissionPreset) {
  switch (preset) {
    case "allowed":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.preset.allowed"
          defaultMessage="Allow browsing"
          description="Allowed browsing preset label for browser site permissions"
        />
      );
    case "denied":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.preset.denied"
          defaultMessage="Block browsing"
          description="Blocked browsing preset label for browser site permissions"
        />
      );
    case "custom":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.preset.custom"
          defaultMessage="Custom"
          description="Custom browser site permissions trigger label"
        />
      );
  }
}

function getPermissionResourceLabel(resource: BrowserUsePermissionResource) {
  switch (resource) {
    case "origin":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.websiteAccess"
          defaultMessage="Browse"
          description="Browse label for custom browser site permissions"
        />
      );
    case "download":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.downloads"
          defaultMessage="Download"
          description="Download label for custom browser site permissions"
        />
      );
    case "upload":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.uploads"
          defaultMessage="Upload"
          description="Upload label for custom browser site permissions"
        />
      );
    case "fullCdp":
      return (
        <FormattedMessage
          id="settings.browserUse.sitePermissions.cdpAccess"
          defaultMessage="Debug (CDP)"
          description="Debug label for custom browser site permissions"
        />
      );
  }
}

function getDomainListTitle(
  resource: BrowserUseDomainListResource,
  kind: BrowserUsePermissionKind,
) {
  switch (resource) {
    case "origins":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDomains.title"
          defaultMessage="Allowed domains"
          description="Title for browser allowed domains list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDomains.title"
          defaultMessage="Blocked domains"
          description="Title for browser blocked domains list"
        />
      );
    case "downloads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDownloadDomains.title"
          defaultMessage="Allowed download domains"
          description="Title for browser allowed download domains list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDownloadDomains.title"
          defaultMessage="Blocked download domains"
          description="Title for browser blocked download domains list"
        />
      );
    case "uploads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedUploadDomains.title"
          defaultMessage="Allowed upload domains"
          description="Title for browser allowed upload domains list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedUploadDomains.title"
          defaultMessage="Blocked upload domains"
          description="Title for browser blocked upload domains list"
        />
      );
  }
}

function getDomainListSubtitle(
  resource: BrowserUseDomainListResource,
  kind: BrowserUsePermissionKind,
  surface: "googleChrome" | "inAppBrowser",
) {
  switch (resource) {
    case "origins":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDomains.subtitle"
          defaultMessage="Domains that open without asking"
          description="Subtitle for browser allowed domains list"
        />
      ) : surface === "googleChrome" ? (
        <FormattedMessage
          id="settings.browserUse.blockedDomains.chromeSubtitle"
          defaultMessage="Codex will never open these sites in your browser"
          description="Subtitle for browser blocked domains list on Google Chrome settings"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDomains.subtitle"
          defaultMessage="Codex will never open these sites"
          description="Subtitle for browser blocked domains list"
        />
      );
    case "downloads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDownloadDomains.subtitle"
          defaultMessage="Domains that can download files without asking"
          description="Subtitle for browser allowed download domains list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDownloadDomains.subtitle"
          defaultMessage="Codex will never download files from these sites"
          description="Subtitle for browser blocked download domains list"
        />
      );
    case "uploads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedUploadDomains.subtitle"
          defaultMessage="Domains that can receive file uploads without asking"
          description="Subtitle for browser allowed upload domains list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedUploadDomains.subtitle"
          defaultMessage="Codex will never upload files to these sites"
          description="Subtitle for browser blocked upload domains list"
        />
      );
  }
}

function getDomainListEmptyTitle(
  resource: BrowserUseDomainListResource,
  kind: BrowserUsePermissionKind,
) {
  switch (resource) {
    case "origins":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDomains.emptyTitle"
          defaultMessage="No allowed domains"
          description="Empty state title for browser allowed domain list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDomains.emptyTitle"
          defaultMessage="No blocked domains"
          description="Empty state title for browser blocked domain list"
        />
      );
    case "downloads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedDownloadDomains.emptyTitle"
          defaultMessage="No allowed download domains"
          description="Empty state title for browser allowed download domain list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedDownloadDomains.emptyTitle"
          defaultMessage="No blocked download domains"
          description="Empty state title for browser blocked download domain list"
        />
      );
    case "uploads":
      return kind === "allowed" ? (
        <FormattedMessage
          id="settings.browserUse.allowedUploadDomains.emptyTitle"
          defaultMessage="No allowed upload domains"
          description="Empty state title for browser allowed upload domain list"
        />
      ) : (
        <FormattedMessage
          id="settings.browserUse.blockedUploadDomains.emptyTitle"
          defaultMessage="No blocked upload domains"
          description="Empty state title for browser blocked upload domain list"
        />
      );
  }
}

function getOpenTargetLabel(target: string) {
  switch (target) {
    case "in-app-browser":
      return (
        <FormattedMessage
          id="settings.general.openLinkInTargetPreference.inAppBrowser.label"
          defaultMessage="Codex"
          description="Label for opening links in Codex"
        />
      );
    case "external-browser":
      return (
        <FormattedMessage
          id="settings.general.openLinkInTargetPreference.externalBrowser.label"
          defaultMessage="Default browser"
          description="Label for opening links in the user's system default browser"
        />
      );
    default:
      return target;
  }
}

function getBrowsingDataTypeLabel(dataType: string) {
  switch (dataType) {
    case "cookies":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.cookies.label"
          defaultMessage="Cookies"
          description="Label for browser cookies setting"
        />
      );
    case "siteData":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.siteData.label"
          defaultMessage="Site data"
          description="Label for browser site data setting"
        />
      );
    case "cache":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.cache.label"
          defaultMessage="Cached images and files"
          description="Label for browser cached images and files setting"
        />
      );
    case "downloads":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.downloads.label"
          defaultMessage="Download history"
          description="Label for browser download history setting"
        />
      );
    case "history":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.history.label"
          defaultMessage="Browsing history"
          description="Label for browser browsing history setting"
        />
      );
    default:
      return dataType;
  }
}

function getClearBrowsingDataButtonLabel(dataType: string) {
  switch (dataType) {
    case "cookies":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.clearCookies"
          defaultMessage="Delete cookies"
          description="Button label to delete browser cookies"
        />
      );
    case "siteData":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.clearSiteData"
          defaultMessage="Delete site data"
          description="Button label to delete browser site data"
        />
      );
    case "cache":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.clearCache"
          defaultMessage="Delete cached images and files"
          description="Button label to delete browser cached images and files"
        />
      );
    case "downloads":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.clearDownloads"
          defaultMessage="Delete download history"
          description="Button label to delete browser download history"
        />
      );
    case "history":
      return (
        <FormattedMessage
          id="settings.browserUse.browser.clearHistory"
          defaultMessage="Delete browsing history"
          description="Button label to delete browser browsing history"
        />
      );
    default:
      return dataType;
  }
}

export function initializeBrowserUseSettingsChunk() {
  return true;
}

export function initializePluginControlList() {
  return true;
}

export function initializePreferredBrowserUsePluginHelpers() {
  return true;
}

export function initializeFullCdpDeveloperModeSection() {
  return true;
}

export {
  PluginControlList,
  findPreferredBrowserUsePlugin,
  BrowserUseSettings as default,
};
