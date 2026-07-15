// Restored from ref/webview/assets/settings-host-dropdown-BH50x2Qx.js
// Updated with exports from ref/webview/assets/settings-host-dropdown-D9ctLTpF.js.
// Host selector dropdown used by settings pages.
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import clsx from "clsx";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { CheckMdIcon } from "../icons/check-md-icon";
import { GlobeIcon } from "../icons/globe-icon";
import { LaptopIcon } from "../icons/laptop-icon";
import { RemoteHostGlobeIcon } from "../icons/remote-host-globe-icon";
import { SettingsMenuButton } from "./settings-shared";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { once } from "../runtime/commonjs-interop";
type HostIconComponent = ComponentType<{
  className?: string;
}>;
export type SettingsHostDropdownHost = {
  displayName: ReactNode;
  hostId: string;
};
export type SettingsHostDropdownProps = {
  align?: ComponentProps<typeof DropdownMenu>["align"];
  connectedRemoteConnections: SettingsHostDropdownHost[];
  contentWidth?: ComponentProps<typeof DropdownMenu>["contentWidth"];
  disabled?: boolean;
  localIcon?: HostIconComponent;
  localLabel?: ReactNode;
  onSelectHost: (hostId: string) => void;
  remoteConnectionHostIds: string[];
  selectedHostId?: string | null;
  showConnectedIndicator?: boolean;
  triggerClassName?: string;
  triggerColor?: ComponentProps<typeof SettingsMenuButton>["color"];
  useRemoteHostColors?: boolean;
};
export const initSettingsHostDropdownChunk = once(() => {});
function ConnectedIndicator() {
  return (
    <span
      aria-hidden={true}
      className="block size-2 shrink-0 rounded-full bg-green-500"
    />
  );
}
type HostIconProps = {
  className?: string;
  hostId: string;
  hostIdsForColorAssignment: string[];
  useRemoteHostColors: boolean;
};
function HostIcon({
  className,
  hostId,
  hostIdsForColorAssignment,
  useRemoteHostColors,
}: HostIconProps) {
  if (!useRemoteHostColors) {
    return <GlobeIcon className={clsx(className, "text-token-foreground")} />;
  }
  return (
    <RemoteHostGlobeIcon
      className={className}
      hostId={hostId}
      hostIdsForColorAssignment={hostIdsForColorAssignment}
    />
  );
}
export function SettingsHostDropdown({
  connectedRemoteConnections,
  disabled = false,
  onSelectHost,
  remoteConnectionHostIds,
  selectedHostId,
  align = "end",
  contentWidth = "menuWide",
  localIcon: LocalIcon = LaptopIcon,
  localLabel,
  showConnectedIndicator = false,
  triggerClassName,
  triggerColor,
  useRemoteHostColors = true,
}: SettingsHostDropdownProps) {
  const intl = useIntl();
  const selectedRemoteConnection =
    connectedRemoteConnections.find((host) => host.hostId === selectedHostId) ??
    null;
  const localDisplayName =
    localLabel ??
    intl.formatMessage({
      id: "settings.hostDropdown.local",
      defaultMessage: "Local",
      description: "Label for the local host in settings connection dropdowns",
    });
  const selectedDisplayName =
    selectedRemoteConnection?.displayName ?? localDisplayName;
  const hosts: SettingsHostDropdownHost[] = [
    {
      hostId: LOCAL_HOST_ID as string,
      displayName: localDisplayName,
    },
    ...connectedRemoteConnections,
  ];
  const chevronClassName = disabled ? "hidden" : undefined;
  const selectedIcon =
    selectedRemoteConnection == null ? (
      <LocalIcon className="icon-xs shrink-0 text-token-foreground" />
    ) : (
      <HostIcon
        className="icon-xs shrink-0"
        hostId={selectedRemoteConnection.hostId}
        hostIdsForColorAssignment={remoteConnectionHostIds}
        useRemoteHostColors={useRemoteHostColors}
      />
    );
  const selectedIndicator =
    selectedRemoteConnection != null && showConnectedIndicator ? (
      <ConnectedIndicator />
    ) : null;
  const triggerButton = (
    <SettingsMenuButton
      className={triggerClassName}
      color={triggerColor}
      disabled={disabled}
      chevronClassName={chevronClassName}
    >
      {selectedIcon}
      <span className="truncate text-left text-token-foreground">
        {selectedDisplayName}
      </span>
      {selectedIndicator}
    </SettingsMenuButton>
  );
  if (disabled) return triggerButton;
  return (
    <DropdownMenu
      align={align}
      contentWidth={contentWidth}
      triggerButton={triggerButton}
    >
      <Dropdown.Title>
        <FormattedMessage
          id="settings.hostDropdown.title"
          defaultMessage="Host"
          description="Title for the Host dropdown shown in settings pages"
        />
      </Dropdown.Title>
      <Dropdown.Section className="max-h-40 overflow-y-auto">
        {hosts.map((host) => (
          <Dropdown.Item
            key={host.hostId}
            RightIcon={host.hostId === selectedHostId ? CheckMdIcon : undefined}
            onSelect={() => {
              onSelectHost(host.hostId);
            }}
          >
            <span className="flex min-w-0 items-center gap-2">
              {host.hostId === LOCAL_HOST_ID ? (
                <LocalIcon className="icon-xs shrink-0" />
              ) : (
                <HostIcon
                  className="icon-xs shrink-0"
                  hostId={host.hostId}
                  hostIdsForColorAssignment={remoteConnectionHostIds}
                  useRemoteHostColors={useRemoteHostColors}
                />
              )}
              <span className="truncate">{host.displayName}</span>
              {host.hostId !== LOCAL_HOST_ID && showConnectedIndicator ? (
                <ConnectedIndicator />
              ) : null}
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Section>
    </DropdownMenu>
  );
}
