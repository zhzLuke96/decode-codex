// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dropdown that selects the pinned chat a heartbeat automation posts into.
import type { ReactElement } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { ChevronIcon } from "../icons/chevron-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import { ThreadDestinationIcon } from "./automation-destination-icons";

export interface HeartbeatThreadOption {
  threadId: string;
  title: string;
  isUnavailable?: boolean;
  isPinned?: boolean;
  createdAt?: number | string | null;
}

export interface AutomationHeartbeatThreadDropdownProps {
  selectedThreadId: string | null;
  options: HeartbeatThreadOption[];
  hasPinnedThreads: boolean;
  align?: "start" | "center" | "end";
  className?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onSelect: (option: HeartbeatThreadOption) => void;
}

export function AutomationHeartbeatThreadDropdown({
  selectedThreadId,
  options,
  hasPinnedThreads,
  align = "start",
  className,
  showIcon = true,
  disabled = false,
  onSelect,
}: AutomationHeartbeatThreadDropdownProps): ReactElement {
  const intl = useIntl();
  const isDisabled = disabled || options.length === 0;
  const selectedOption =
    options.find((option) => option.threadId === selectedThreadId) ?? null;

  const label =
    selectedOption?.title ??
    intl.formatMessage({
      id: "settings.automations.heartbeatThread.placeholder",
      defaultMessage: "Choose a pinned chat",
      description: "Placeholder for heartbeat automation thread selector",
    });
  const ariaLabel = intl.formatMessage({
    id: "settings.automations.heartbeatThread.ariaLabel",
    defaultMessage: "Target chat",
    description: "Aria label for heartbeat automation thread selector",
  });

  const triggerButton = (
    <Button
      aria-label={ariaLabel}
      size="composerSm"
      color="ghost"
      className={classNames("min-w-0", className)}
      disabled={isDisabled}
    >
      {showIcon ? <ThreadDestinationIcon className="icon-xs shrink-0" /> : null}
      <span className="truncate text-left text-token-foreground">{label}</span>
      <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
    </Button>
  );

  const items = options.map((option) => (
    <Dropdown.Item
      key={option.threadId}
      LeftIcon={ThreadDestinationIcon}
      RightIcon={option.threadId === selectedThreadId ? CheckMdIcon : undefined}
      disabled={option.isUnavailable}
      onSelect={() => onSelect(option)}
    >
      <div className="flex min-w-0 items-center gap-1">
        <span className="truncate">{option.title}</span>
        {option.isPinned ? null : (
          <span className="truncate text-sm text-token-description-foreground">
            <FormattedMessage
              id="settings.automations.heartbeatThread.unpinned"
              defaultMessage="unpinned"
              description="Label for a selected heartbeat thread that is no longer pinned"
            />
          </span>
        )}
        {option.createdAt == null ? null : (
          <span className="truncate text-sm text-token-description-foreground">
            {intl.formatDate(new Date(option.createdAt), {
              dateStyle: "medium",
            })}
          </span>
        )}
      </div>
    </Dropdown.Item>
  ));

  const emptyState = hasPinnedThreads ? null : (
    <div className="text-token-muted-foreground px-3 py-2 text-sm">
      <FormattedMessage
        id="settings.automations.heartbeatThread.empty"
        defaultMessage="Pin a local chat first to use scheduled tasks"
        description="Empty-state label when no pinned local threads are available for scheduled tasks"
      />
    </div>
  );

  return (
    <DropdownMenu
      align={align}
      contentWidth="workspace"
      contentMaxHeight="tall"
      disabled={isDisabled}
      triggerButton={triggerButton}
    >
      <Dropdown.Title>
        <FormattedMessage
          id="settings.automations.heartbeatThread.title"
          defaultMessage="Target chat"
          description="Header label above heartbeat automation thread options"
        />
      </Dropdown.Title>
      <Dropdown.Section className="flex flex-col [--edge-fade-distance:1.5rem]">
        {items}
        {emptyState}
      </Dropdown.Section>
    </DropdownMenu>
  );
}
