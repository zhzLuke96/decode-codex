// Restored from ref/webview/assets/app-server-connection-state-DiMba98f.js
// app-server-connection-state-DiMba98f chunk restored from the Codex webview bundle.
import type { MouseEvent, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { AlertIcon } from "../../icons/alert-icon";
import { SpinnerIcon } from "../../ui/spinner";
import { Tooltip } from "../../ui/tooltip-b";
import { useAppServerConnectionState } from "../../utils/use-app-server-connection-state";
import { useIntl } from "../../vendor/react-intl";
import { useNavigate } from "../../vendor/react-router";
import { resolveAppServerConnectionStatus } from "./formatters";
import type {
  AppServerConnectionError,
  AppServerConnectionStateName,
} from "./types";
type AppServerConnectionStatusBadgeProps = {
  hostId: string;
  onLoginRequiredClick?: () => void;
};
const statusIcons: Record<AppServerConnectionStateName, ReactNode> = {
  connecting: <SpinnerIcon />,
  restarting: <SpinnerIcon />,
  connected: (
    <span aria-hidden className="block size-2 rounded-full bg-green-500" />
  ),
  disconnected: (
    <span aria-hidden className="block size-2 rounded-full bg-gray-400" />
  ),
  error: <AlertIcon />,
};
const statusClassNames: Record<
  AppServerConnectionStateName,
  {
    dotClassName: string;
    iconClassName?: string;
  }
> = {
  connecting: {
    dotClassName: "text-token-description-foreground",
    iconClassName: "motion-safe:animate-spin",
  },
  restarting: {
    dotClassName: "text-token-charts-blue",
    iconClassName: "motion-safe:animate-spin text-token-charts-blue",
  },
  connected: {
    dotClassName: "text-token-charts-green",
  },
  disconnected: {
    dotClassName: "text-token-description-foreground",
  },
  error: {
    dotClassName: "text-token-charts-red",
    iconClassName: "text-token-charts-red",
  },
};
export function AppServerConnectionStatusBadge({
  hostId,
  onLoginRequiredClick,
}: AppServerConnectionStatusBadgeProps): ReactElement | null {
  const intl = useIntl();
  const navigate = useNavigate();
  const { error, state } = useAppServerConnectionState(hostId) as {
    error?: AppServerConnectionError | null;
    state?: AppServerConnectionStateName | null;
  };
  if (state == null) return null;
  const shouldRouteToSettings =
    error?.code === "update-required" ||
    error?.code === "restart-required" ||
    (error?.code === "login-required" && onLoginRequiredClick == null);
  const canLogin =
    error?.code === "login-required" && onLoginRequiredClick != null;
  const { label, message } = resolveAppServerConnectionStatus(intl, {
    canLogin,
    error,
    state,
    surface: "connection-status-badge",
  });
  const handleLoginRequiredClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onLoginRequiredClick?.();
  };
  const handleSettingsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    navigate("/settings/connections");
  };
  const statusClassName = statusClassNames[state];
  const iconClassName = clsx(
    "icon-2xs inline-flex shrink-0 items-center justify-center",
    statusClassName.iconClassName,
  );
  const icon = <span className={iconClassName}>{statusIcons[state]}</span>;
  if (shouldRouteToSettings || canLogin) {
    const buttonClassName = clsx(
      "no-drag icon-2xs inline-flex shrink-0 cursor-interaction items-center justify-center self-center overflow-hidden rounded-full border-0 bg-transparent p-0 text-current",
      statusClassName.dotClassName,
    );
    const onClick = canLogin ? handleLoginRequiredClick : handleSettingsClick;
    const button = (
      <button
        type="button"
        className={buttonClassName}
        aria-label={label}
        onClick={onClick}
      >
        {icon}
      </button>
    );
    return <Tooltip tooltipContent={message}>{button}</Tooltip>;
  }
  const dotClassName = clsx(
    "no-drag icon-2xs inline-flex shrink-0 items-center justify-center self-center overflow-hidden rounded-full",
    statusClassName.dotClassName,
  );
  const dot = (
    <span className={dotClassName} aria-label={label} role="img">
      {icon}
    </span>
  );
  return <Tooltip tooltipContent={message}>{dot}</Tooltip>;
}
