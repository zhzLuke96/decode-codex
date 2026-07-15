// Restored from ref/webview/assets/browser-use-settings-Ct3jD7gG.js
// Browser Use plugin control list, marketplace row rendering, and plugin choice helpers.

import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { BrowserUseIcon } from "../../icons/browser-use-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { Button } from "../../ui/button";
import { Dropdown } from "../../ui/dropdown";
import { DropdownMenu } from "../../ui/dropdown/menu";
import { MoreMenuTrigger } from "../../ui/more-menu-trigger";
import { SettingsControlRow } from "../../ui/settings-row";
import { Spinner } from "../../ui/spinner";
import { Toggle } from "../../utils/toggle";
import type { PluginDisplayItem } from "../../plugins/use-plugins/types";
import type {
  BrowserUsePluginAppItem,
  BrowserUsePluginControlItem,
  BrowserUsePluginMarketplaceItem,
  BrowserUsePluginsQueryState,
  BrowserUseUnavailablePluginItem,
} from "./types";

type PluginControlListProps = {
  emptyStateTitle: ReactNode;
  installButtonLabel: ReactNode;
  items: BrowserUsePluginControlItem[];
  onInstallPlugin?: (plugin: PluginDisplayItem) => void;
  onOpenPluginDetails?: (plugin: PluginDisplayItem) => void;
  onToggleInstalledPluginEnabled?: (
    plugin: PluginDisplayItem,
    enabled: boolean,
  ) => void;
  onUninstallPlugin?: (plugin: PluginDisplayItem) => void;
  pendingPluginId?: string | null;
  pluginsQuery: BrowserUsePluginsQueryState;
  selectedHostId?: string | null;
  unavailableItems?: BrowserUseUnavailablePluginItem[];
};

type InstalledPluginControlRowProps = {
  installButtonLabel: ReactNode;
  isPending: boolean;
  item: BrowserUsePluginMarketplaceItem;
  onInstallPlugin?: (plugin: PluginDisplayItem) => void;
  onOpenPluginDetails?: (plugin: PluginDisplayItem) => void;
  onToggleInstalledPluginEnabled?: (
    plugin: PluginDisplayItem,
    enabled: boolean,
  ) => void;
  onUninstallPlugin?: (plugin: PluginDisplayItem) => void;
};

export function PluginControlList({
  emptyStateTitle,
  installButtonLabel,
  items,
  onInstallPlugin,
  onOpenPluginDetails,
  onToggleInstalledPluginEnabled,
  onUninstallPlugin,
  pendingPluginId,
  pluginsQuery,
  unavailableItems = [],
}: PluginControlListProps) {
  const totalItemCount = items.length + unavailableItems.length;
  if (pluginsQuery.isLoading && totalItemCount === 0) {
    return (
      <div className="flex min-h-[62px] items-center justify-center rounded-lg border border-token-border text-token-text-secondary">
        <Spinner className="icon-xs" />
      </div>
    );
  }
  if (pluginsQuery.errorMessage != null) {
    return (
      <div className="rounded-lg border border-token-border p-4 text-sm text-token-text-secondary">
        {pluginsQuery.errorMessage}
      </div>
    );
  }
  if (totalItemCount === 0) {
    return (
      <div className="rounded-lg border border-token-border p-4 text-sm text-token-text-secondary">
        {emptyStateTitle}
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-lg border border-token-border">
      {items.map((item) =>
        item.kind === "app" ? (
          <PluginAppControlRow key={item.id} item={item} />
        ) : (
          <PluginMarketplaceControlRow
            key={item.plugin.plugin.id}
            installButtonLabel={installButtonLabel}
            isPending={pendingPluginId === item.plugin.plugin.id}
            item={item}
            onInstallPlugin={onInstallPlugin}
            onOpenPluginDetails={onOpenPluginDetails}
            onToggleInstalledPluginEnabled={onToggleInstalledPluginEnabled}
            onUninstallPlugin={onUninstallPlugin}
          />
        ),
      )}
      {unavailableItems.map((item) => (
        <UnavailablePluginControlRow key={item.id} item={item} />
      ))}
    </div>
  );
}

function PluginAppControlRow({ item }: { item: BrowserUsePluginAppItem }) {
  return (
    <SettingsControlRow
      className="min-h-[60px]"
      control={
        <Toggle
          ariaLabel={item.toggleAriaLabel}
          checked={item.enabled}
          disabled={item.isPending === true}
          onChange={item.onToggleEnabled}
        />
      }
      description={item.description}
      icon={<PluginIconFrame>{item.icon}</PluginIconFrame>}
      label={
        <span className="font-medium text-token-foreground">{item.title}</span>
      }
    />
  );
}

function UnavailablePluginControlRow({
  item,
}: {
  item: BrowserUseUnavailablePluginItem;
}) {
  const intl = useIntl();
  return (
    <div className="flex min-h-[60px] items-center gap-3 p-2.5 text-sm opacity-60 max-sm:flex-wrap">
      <span className="flex min-w-0 flex-1 items-center gap-3">
        <PluginIconFrame>{item.icon}</PluginIconFrame>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="truncate font-medium text-token-foreground">
            {item.title}
          </span>
          {item.description == null ? null : (
            <span className="min-w-0 truncate text-sm leading-relaxed text-token-text-secondary">
              {item.description}
            </span>
          )}
        </span>
      </span>
      <Toggle
        ariaLabel={intl.formatMessage({
          id: "settings.pluginControls.unavailableToggleAria",
          defaultMessage: "Unavailable plugin toggle",
          description:
            "Accessible label for the disabled toggle shown for unavailable plugins in settings",
        })}
        checked={false}
        disabled={true}
        onChange={() => undefined}
      />
    </div>
  );
}

function PluginMarketplaceControlRow({
  installButtonLabel,
  isPending,
  item,
  onInstallPlugin,
  onOpenPluginDetails,
  onToggleInstalledPluginEnabled,
  onUninstallPlugin,
}: InstalledPluginControlRowProps) {
  const intl = useIntl();
  const pluginDisplayName = getPluginDisplayName(item.plugin, item.displayName);
  const pluginInstalled = item.plugin.plugin.installed === true;
  const pluginEnabled = item.plugin.plugin.enabled === true;
  const rowClassName = clsx(
    "group flex min-h-[60px] items-center gap-3 p-2.5 text-sm hover:bg-token-foreground/5 max-sm:flex-wrap",
  );
  return (
    <div className={rowClassName}>
      <button
        className="flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-left text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
        onClick={() => onOpenPluginDetails?.(item.plugin)}
        type="button"
      >
        <PluginIconFrame showBorder={item.showIconBorder !== false}>
          {item.icon ?? (
            <img
              alt={pluginDisplayName}
              className="h-full w-full object-contain"
              src={item.plugin.logoPath}
            />
          )}
        </PluginIconFrame>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="truncate font-medium text-token-foreground">
            {item.title}
          </span>
          {item.description == null ? null : (
            <span className="min-w-0 truncate text-sm leading-relaxed text-token-text-secondary">
              {item.descriptionIndicator == null ? (
                item.description
              ) : (
                <span className="inline-flex max-w-full items-center gap-2">
                  <span
                    className={clsx(
                      "h-2 w-2 shrink-0 rounded-full",
                      item.descriptionIndicator === "success"
                        ? "bg-[var(--color-icon-success)]"
                        : "bg-[var(--color-icon-error)]",
                    )}
                  />
                  <span className="min-w-0 truncate">{item.description}</span>
                </span>
              )}
            </span>
          )}
        </span>
      </button>
      <div className="flex shrink-0 items-center gap-2">
        {item.action}
        {pluginInstalled ? (
          <>
            {item.showManageActions === true ? (
              <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <DropdownMenu
                  align="end"
                  contentWidth="sm"
                  triggerButton={
                    <MoreMenuTrigger
                      label={intl.formatMessage({
                        id: "settings.pluginControls.moreActions",
                        defaultMessage: "More actions",
                        description:
                          "Aria label for the more actions menu in settings plugin controls",
                      })}
                    />
                  }
                >
                  {item.onTryInChat == null ? null : (
                    <Dropdown.Item
                      onSelect={() => {
                        item.onTryInChat?.(item.plugin);
                      }}
                    >
                      <FormattedMessage
                        id="settings.pluginControls.tryItNow"
                        defaultMessage="Try it now"
                        description="Menu item label for trying a plugin in chat from settings"
                      />
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item
                    LeftIcon={TrashIcon}
                    className="!text-token-error-foreground"
                    disabled={isPending}
                    leftIconClassName="icon-xs text-token-error-foreground"
                    onSelect={() => {
                      onUninstallPlugin?.(item.plugin);
                    }}
                  >
                    <FormattedMessage
                      id="settings.pluginControls.delete"
                      defaultMessage="Delete"
                      description="Menu item label for deleting a plugin from settings"
                    />
                  </Dropdown.Item>
                </DropdownMenu>
              </div>
            ) : null}
            <Toggle
              ariaLabel={intl.formatMessage(
                {
                  id: "settings.pluginControls.toggleAria",
                  defaultMessage: "Toggle {pluginName}",
                  description:
                    "Accessible label for toggling a plugin from settings",
                },
                {
                  pluginName: pluginDisplayName,
                },
              )}
              checked={pluginEnabled}
              disabled={isPending}
              onChange={(enabled) => {
                onToggleInstalledPluginEnabled?.(item.plugin, enabled);
              }}
            />
          </>
        ) : (
          <Button
            aria-label={intl.formatMessage(
              {
                id: "settings.pluginControls.installTooltip",
                defaultMessage: "Install {pluginName}",
                description:
                  "Tooltip label for installing a plugin from settings",
              },
              {
                pluginName: pluginDisplayName,
              },
            )}
            color="secondary"
            disabled={isPending}
            loading={isPending}
            onClick={() => {
              onInstallPlugin?.(item.plugin);
            }}
            size="toolbar"
          >
            {installButtonLabel}
          </Button>
        )}
      </div>
    </div>
  );
}

function PluginIconFrame({
  children,
  showBorder = true,
}: {
  children?: ReactNode;
  showBorder?: boolean;
}) {
  return (
    <span
      className={clsx(
        "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent",
        showBorder && "border border-token-border-default",
      )}
    >
      {children ?? (
        <BrowserUseIcon className="icon-md text-token-text-secondary" />
      )}
    </span>
  );
}

function getPluginDisplayName(
  plugin: PluginDisplayItem,
  displayNameOverride?: string | null,
) {
  return (
    displayNameOverride ??
    plugin.displayName ??
    plugin.plugin.interface?.displayName ??
    plugin.plugin.name
  );
}

export function findPreferredBrowserUsePlugin(
  plugins: PluginDisplayItem[],
  pluginName: string,
  codexHome?: string | null,
) {
  const matches = plugins.filter(
    (item) =>
      item.plugin.name === pluginName ||
      item.plugin.id.split("@")[0] === pluginName,
  );
  return (
    matches.find((item) => item.marketplaceName === "openai-curated") ??
    matches.find(
      (item) =>
        codexHome != null &&
        item.marketplacePath != null &&
        item.marketplacePath.startsWith(codexHome),
    ) ??
    matches[0] ??
    null
  );
}
