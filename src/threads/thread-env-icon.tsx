// Restored from ref/webview/assets/thread-env-icon-DQJ4XJ-k.js
import clsx from "clsx";
import type { ReactNode } from "react";
import {
  useHostConfigById,
  useRemoteHostConnections,
} from "../boundaries/use-host-config.facade";
import { CloudIcon } from "../icons/cloud-icon";
import { MacbookIcon } from "../icons/macbook-icon";
import { RemoteHostGlobeIcon } from "../icons/remote-host-globe-icon";
import { WorktreeIcon } from "../icons/worktree-icon";
import { Tooltip } from "../ui/tooltip-b";
import { FormattedMessage } from "../vendor/react-intl";
type BaseThreadEnvIconProps = {
  className?: string;
  disableTooltip?: boolean;
};
type RemoteThreadEnvIconProps = BaseThreadEnvIconProps & {
  hostId: string;
};
type RemoteHostConnection = {
  hostId: string;
};
export function WorktreeThreadEnvIcon({
  className,
  disableTooltip = false,
}: BaseThreadEnvIconProps) {
  const iconClassName = clsx(
    "icon-2xs text-token-description-foreground no-drag shrink-0",
    className,
  );
  const icon = (
    <span className="inline-flex shrink-0">
      <WorktreeIcon className={iconClassName} />
    </span>
  );
  const tooltipContent = (
    <FormattedMessage
      id="threadEnvIcon.worktreeTooltip"
      defaultMessage="This conversation is running in a local git worktree."
      description="Tooltip content for worktree environment icon"
    />
  );
  return renderThreadEnvIconWithTooltip({
    disableTooltip,
    icon,
    tooltipContent,
  });
}
export function RemoteWorktreeThreadEnvIcon({
  className,
  disableTooltip = false,
  hostId,
}: RemoteThreadEnvIconProps) {
  const hostConfig = useHostConfigById(hostId);
  const remoteConnections =
    useRemoteHostConnections() as RemoteHostConnection[];
  const remoteHostIds = remoteConnections.map(
    (connection) => connection.hostId,
  );
  const remoteIconClassName = clsx("icon-2xs no-drag shrink-0", className);
  const worktreeIconClassName = clsx(
    "icon-2xs text-token-description-foreground no-drag shrink-0",
    className,
  );
  const icon = (
    <span className="inline-flex shrink-0 items-center gap-1.5">
      <RemoteHostGlobeIcon
        className={remoteIconClassName}
        hostId={hostId}
        hostIdsForColorAssignment={remoteHostIds}
      />
      <WorktreeIcon className={worktreeIconClassName} />
    </span>
  );
  return renderThreadEnvIconWithTooltip({
    disableTooltip,
    icon,
    tooltipContent: hostConfig.display_name,
  });
}
export function LocalThreadEnvIcon({
  className,
  disableTooltip = false,
}: BaseThreadEnvIconProps) {
  const iconClassName = clsx(
    "icon-2xs text-token-description-foreground no-drag shrink-0",
    className,
  );
  const icon = (
    <span className="inline-flex shrink-0">
      <MacbookIcon className={iconClassName} />
    </span>
  );
  const tooltipContent = (
    <FormattedMessage
      id="threadEnvIcon.localTooltip"
      defaultMessage="This conversation is running locally."
      description="Tooltip content for local environment icon"
    />
  );
  return renderThreadEnvIconWithTooltip({
    disableTooltip,
    icon,
    tooltipContent,
  });
}
export function RemoteThreadEnvIcon({
  className,
  disableTooltip = false,
  hostId,
}: RemoteThreadEnvIconProps) {
  const hostConfig = useHostConfigById(hostId);
  const remoteConnections =
    useRemoteHostConnections() as RemoteHostConnection[];
  const iconClassName = clsx("icon-2xs no-drag shrink-0", className);
  const remoteHostIds = remoteConnections.map(
    (connection) => connection.hostId,
  );
  const icon = (
    <span className="inline-flex shrink-0">
      <RemoteHostGlobeIcon
        className={iconClassName}
        hostId={hostId}
        hostIdsForColorAssignment={remoteHostIds}
      />
    </span>
  );
  return renderThreadEnvIconWithTooltip({
    disableTooltip,
    icon,
    tooltipContent: hostConfig.display_name,
  });
}
export function CloudThreadEnvIcon({
  className,
  disableTooltip = false,
}: BaseThreadEnvIconProps) {
  const iconClassName = clsx(
    "icon-2xs translate-x-px text-token-description-foreground no-drag shrink-0",
    className,
  );
  const icon = (
    <span className="inline-flex shrink-0">
      <CloudIcon className={iconClassName} />
    </span>
  );
  const tooltipContent = (
    <FormattedMessage
      id="threadEnvIcon.cloudTooltip"
      defaultMessage="This conversation is running in Codex Cloud."
      description="Tooltip content for cloud environment icon"
    />
  );
  return renderThreadEnvIconWithTooltip({
    disableTooltip,
    icon,
    tooltipContent,
  });
}
function renderThreadEnvIconWithTooltip({
  disableTooltip,
  icon,
  tooltipContent,
}: {
  disableTooltip: boolean;
  icon: ReactNode;
  tooltipContent: ReactNode;
}) {
  return disableTooltip ? (
    icon
  ) : (
    <Tooltip tooltipContent={tooltipContent}>{icon}</Tooltip>
  );
}
