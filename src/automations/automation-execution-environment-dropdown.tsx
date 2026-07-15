// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dropdown that selects where a scheduled task runs (local, worktree, chat).
import type { ComponentType, ReactElement } from "react";
import {
  defineMessage,
  FormattedMessage,
  useIntl,
  type MessageDescriptor,
} from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { Tooltip } from "../ui/tooltip-b";
import { ChevronIcon } from "../icons/chevron-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import { WorktreeIcon } from "../boundaries/automation-editor-deps.facade";
import {
  LocalRunIcon,
  ThreadDestinationIcon,
} from "./automation-destination-icons";

export type AutomationExecutionEnvironmentId =
  | "local"
  | "worktree"
  | "thread"
  | string;

interface ExecutionEnvironmentOption {
  id: AutomationExecutionEnvironmentId;
  icon: ComponentType<{ className?: string }>;
  labelMessage: MessageDescriptor;
  tooltipMessage: MessageDescriptor;
}

const EXECUTION_ENVIRONMENT_OPTIONS: ExecutionEnvironmentOption[] = [
  {
    id: "local",
    icon: LocalRunIcon,
    labelMessage: defineMessage({
      id: "settings.automations.executionEnvironment.local",
      defaultMessage: "Local",
      description:
        "Dropdown label for running automations locally in the selected project",
    }),
    tooltipMessage: defineMessage({
      id: "settings.automations.executionEnvironment.local.help",
      defaultMessage:
        "Runs directly in the selected project directory without creating a worktree.",
      description: "Tooltip explaining local execution mode for automations",
    }),
  },
  {
    id: "worktree",
    icon: WorktreeIcon,
    labelMessage: defineMessage({
      id: "settings.automations.executionEnvironment.worktree",
      defaultMessage: "Worktree",
      description: "Dropdown label for running automations in a worktree",
    }),
    tooltipMessage: defineMessage({
      id: "settings.automations.executionEnvironment.worktree.help",
      defaultMessage:
        "Runs in a dedicated Git worktree created from the selected project, keeping your current checkout untouched.",
      description: "Tooltip explaining worktree execution mode for automations",
    }),
  },
  {
    id: "thread",
    icon: ThreadDestinationIcon,
    labelMessage: defineMessage({
      id: "settings.automations.destination.thread",
      defaultMessage: "Chat",
      description:
        "Dropdown label for sending heartbeat automations into a pinned thread",
    }),
    tooltipMessage: defineMessage({
      id: "settings.automations.destination.thread.help",
      defaultMessage:
        "Sends messages directly into the selected chat instead of running in a project folder or worktree",
      description: "Tooltip explaining thread destination for automations",
    }),
  },
];

export interface AutomationExecutionEnvironmentDropdownProps {
  selectedId: AutomationExecutionEnvironmentId;
  optionIds?: AutomationExecutionEnvironmentId[];
  align?: "start" | "center" | "end";
  className?: string;
  showLabel?: boolean;
  showIcon?: boolean;
  ariaLabel?: string;
  onSelect: (id: AutomationExecutionEnvironmentId) => void;
}

export function AutomationExecutionEnvironmentDropdown({
  selectedId,
  optionIds,
  align = "start",
  className,
  showLabel = true,
  showIcon = true,
  ariaLabel,
  onSelect,
}: AutomationExecutionEnvironmentDropdownProps): ReactElement {
  const intl = useIntl();

  const availableOptions = EXECUTION_ENVIRONMENT_OPTIONS.filter(
    (option) => optionIds?.includes(option.id) ?? true,
  );
  const selectedOption =
    availableOptions.find((option) => option.id === selectedId) ??
    EXECUTION_ENVIRONMENT_OPTIONS.find((option) => option.id === selectedId) ??
    availableOptions[0];
  const SelectedIcon = selectedOption.icon;

  const compactTooltip = intl.formatMessage(
    {
      id: "settings.automations.executionEnvironment.compactTooltip",
      defaultMessage: "Run in {environment}",
      description:
        "Tooltip shown for the compact automation execution environment trigger",
    },
    { environment: intl.formatMessage(selectedOption.labelMessage) },
  );

  const triggerButton = (
    <Button
      aria-label={ariaLabel}
      size="composerSm"
      color="ghost"
      className={classNames("min-w-0", className)}
    >
      {showIcon ? <SelectedIcon className="icon-xs shrink-0" /> : null}
      {showLabel ? (
        <span className="truncate text-left text-token-foreground">
          {intl.formatMessage(selectedOption.labelMessage)}
        </span>
      ) : null}
      <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
    </Button>
  );

  return (
    <DropdownMenu
      align={align}
      contentWidth="sm"
      triggerButton={
        showLabel ? (
          triggerButton
        ) : (
          <Tooltip tooltipContent={compactTooltip}>{triggerButton}</Tooltip>
        )
      }
    >
      <div className="flex flex-col">
        <Dropdown.Title>
          <FormattedMessage
            id="settings.automations.executionEnvironment.menuTitle"
            defaultMessage="Run in"
            description="Header label above automation execution environment options"
          />
        </Dropdown.Title>
        {availableOptions.map((option) => {
          const OptionIcon = option.icon;
          return (
            <Dropdown.Item
              key={option.id}
              onSelect={() => onSelect(option.id)}
              LeftIcon={OptionIcon}
              RightIcon={option.id === selectedId ? CheckMdIcon : undefined}
              tooltipText={intl.formatMessage(option.tooltipMessage)}
            >
              {intl.formatMessage(option.labelMessage)}
            </Dropdown.Item>
          );
        })}
      </div>
    </DropdownMenu>
  );
}
