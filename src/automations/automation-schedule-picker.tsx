// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Popover that edits an automation's schedule: mode, interval, weekday, time,
// and custom RRULE, with a localized summary trigger.
import React, { type ReactElement } from "react";
import {
  defineMessage,
  FormattedMessage,
  useIntl,
  type MessageDescriptor,
} from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Button } from "../ui/button";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { ChevronIcon } from "../icons/chevron-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import {
  ScheduleClockIcon,
  SchedulePopoverContent,
  SchedulePopoverRoot,
  SchedulePopoverTrigger,
} from "../boundaries/automation-editor-deps.facade";
import { changeAutomationScheduleMode } from "../automation/automation-schedule/schedule-config";
import { formatScheduleConfigSummary } from "../automation/automation-schedule/schedule-summary";
import {
  formatAutomationTime,
  normalizeIntervalHours,
  normalizeIntervalMinutes,
  parseAutomationTime,
} from "../automation/automation-schedule/schedule-time";
import type {
  AutomationScheduleConfig,
  AutomationScheduleMode,
  AutomationWeekday,
} from "../automation/automation-schedule/types";

type IntlWithTime = ReturnType<typeof useIntl> & {
  formatTime: (value: Date, options?: Intl.DateTimeFormatOptions) => string;
};

const INPUT_CLASS_NAME =
  "bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 text-base outline-none focus:border-token-focus-border";

const MINUTES_PER_DAY = 1440;
const TIME_PICKER_STEP_MINUTES = 15;

const TIME_PICKER_OPTIONS = Array.from(
  { length: MINUTES_PER_DAY / TIME_PICKER_STEP_MINUTES },
  (_unused, index) => {
    const totalMinutes = index * TIME_PICKER_STEP_MINUTES;
    return formatAutomationTime(
      Math.floor(totalMinutes / 60),
      totalMinutes % 60,
    );
  },
);

interface ScheduleModeOption {
  id: AutomationScheduleMode;
  labelMessage: MessageDescriptor;
}

const SCHEDULE_MODE_OPTIONS: ScheduleModeOption[] = [
  {
    id: "hourly",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.hourly",
      defaultMessage: "Hourly",
      description: "Dropdown label for an hourly automation schedule",
    }),
  },
  {
    id: "daily",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.daily",
      defaultMessage: "Daily",
      description: "Dropdown label for a daily automation schedule",
    }),
  },
  {
    id: "weekdays",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.weekdays",
      defaultMessage: "Weekdays",
      description: "Dropdown label for a weekdays-only automation schedule",
    }),
  },
  {
    id: "weekly",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.weekly",
      defaultMessage: "Weekly",
      description: "Dropdown label for a weekly automation schedule",
    }),
  },
  {
    id: "custom",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.custom",
      defaultMessage: "Custom",
      description: "Dropdown label for a custom automation schedule",
    }),
  },
];

const HEARTBEAT_SCHEDULE_MODE_OPTIONS: ScheduleModeOption[] = [
  {
    id: "hourly",
    labelMessage: defineMessage({
      id: "settings.automations.scheduleMode.interval",
      defaultMessage: "Interval",
      description:
        "Dropdown label for a heartbeat automation interval schedule",
    }),
  },
  ...SCHEDULE_MODE_OPTIONS.filter((option) => option.id !== "hourly"),
];

interface WeekdayOption {
  id: AutomationWeekday;
  labelMessage: MessageDescriptor;
  longLabelMessage: MessageDescriptor;
}

const WEEKDAY_OPTIONS: WeekdayOption[] = [
  {
    id: "MO",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.mon",
      defaultMessage: "Mo",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.monday",
      defaultMessage: "Monday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "TU",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.tue",
      defaultMessage: "Tu",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.tuesday",
      defaultMessage: "Tuesday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "WE",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.wed",
      defaultMessage: "We",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.wednesday",
      defaultMessage: "Wednesday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "TH",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.thu",
      defaultMessage: "Th",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.thursday",
      defaultMessage: "Thursday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "FR",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.fri",
      defaultMessage: "Fr",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.friday",
      defaultMessage: "Friday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "SA",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.sat",
      defaultMessage: "Sa",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.saturday",
      defaultMessage: "Saturday",
      description: "RRULE weekday long label",
    }),
  },
  {
    id: "SU",
    labelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.sun",
      defaultMessage: "Su",
      description: "RRULE weekday short label",
    }),
    longLabelMessage: defineMessage({
      id: "settings.automations.rrule.weekday.sunday",
      defaultMessage: "Sunday",
      description: "RRULE weekday long label",
    }),
  },
];

function buildScheduleSummary(
  scheduleConfig: AutomationScheduleConfig,
  intl: ReturnType<typeof useIntl>,
): string {
  if (scheduleConfig.mode === "custom") {
    return intl.formatMessage({
      id: "settings.automations.scheduleMode.custom",
      defaultMessage: "Custom",
      description: "Dropdown label for a custom automation schedule",
    });
  }
  const fallback = intl.formatMessage({
    id: "settings.automations.rruleSummaryFallback",
    defaultMessage: "Custom schedule",
    description: "Fallback label when RRULE summary cannot be generated",
  });
  return formatScheduleConfigSummary(scheduleConfig, intl) ?? fallback;
}

export interface AutomationSchedulePickerProps {
  scheduleMode: AutomationScheduleMode;
  scheduleConfig: AutomationScheduleConfig;
  align?: "start" | "center" | "end";
  className?: string;
  showIcon?: boolean;
  intervalStyle?: "default" | "heartbeat";
  onUpdateScheduleDraft: (config: AutomationScheduleConfig) => void;
}

export function AutomationSchedulePicker({
  scheduleMode,
  scheduleConfig,
  align = "start",
  className,
  showIcon = true,
  intervalStyle = "default",
  onUpdateScheduleDraft,
}: AutomationSchedulePickerProps): ReactElement {
  const intl = useIntl();
  const summary = buildScheduleSummary(scheduleConfig, intl);

  const selectedWeekdayId = scheduleConfig.weekdays[0] ?? WEEKDAY_OPTIONS[0].id;
  const selectedWeekday =
    WEEKDAY_OPTIONS.find((option) => option.id === selectedWeekdayId) ??
    WEEKDAY_OPTIONS[0];

  const updateScheduleDraft = (
    patch: Partial<AutomationScheduleConfig>,
  ): void => {
    onUpdateScheduleDraft({ ...scheduleConfig, ...patch });
  };

  const isHeartbeat = intervalStyle === "heartbeat";
  const modeOptions = isHeartbeat
    ? HEARTBEAT_SCHEDULE_MODE_OPTIONS
    : SCHEDULE_MODE_OPTIONS;
  const showModeDropdown = modeOptions.length > 1;
  const usesMinutes = isHeartbeat && scheduleMode === "hourly";
  const showIntervalInput = scheduleMode === "hourly" && isHeartbeat;
  const showTimePicker =
    scheduleMode === "daily" ||
    scheduleMode === "weekdays" ||
    scheduleMode === "weekly";

  const intervalValue = usesMinutes
    ? (scheduleConfig.intervalMinutes ?? 30)
    : scheduleConfig.intervalHours;
  const intervalSuffix = usesMinutes
    ? intervalValue === 1
      ? intl.formatMessage({
          id: "settings.automations.scheduleIntervalMinuteSuffix",
          defaultMessage: "minute",
          description:
            "Singular suffix label for the heartbeat automation interval minutes input",
        })
      : intl.formatMessage({
          id: "settings.automations.scheduleIntervalMinutesSuffix",
          defaultMessage: "minutes",
          description:
            "Plural suffix label for the heartbeat automation interval minutes input",
        })
    : intl.formatMessage({
        id: "settings.automations.scheduleIntervalHoursSuffix",
        defaultMessage: "hours",
        description: "Suffix label for the automation interval hours input",
      });
  const intervalAriaLabel = usesMinutes
    ? intl.formatMessage({
        id: "settings.automations.scheduleIntervalMinutes",
        defaultMessage: "Interval minutes",
        description:
          "Accessible label for the heartbeat interval minutes input",
      })
    : intl.formatMessage({
        id: "settings.automations.scheduleIntervalHours",
        defaultMessage: "Interval hours",
        description: "Accessible label for the automation interval hours input",
      });

  const popoverContentWidthClass =
    scheduleMode === "custom"
      ? "!w-96 min-w-96"
      : isHeartbeat
        ? "!w-56 min-w-56"
        : "!w-40 min-w-40";

  const trigger = (
    <SchedulePopoverTrigger asChild>
      <Button
        color="ghost"
        size="composerSm"
        className={classNames("min-w-0", className)}
      >
        {showIcon ? <ScheduleClockIcon className="icon-xs shrink-0" /> : null}
        <span className="truncate text-left text-token-foreground">
          {summary}
        </span>
        <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
      </Button>
    </SchedulePopoverTrigger>
  );

  const modeSelect = showModeDropdown ? (
    <ScheduleSelect
      ariaLabel={intl.formatMessage({
        id: "settings.automations.scheduleModeLabel",
        defaultMessage: "Schedule type",
        description: "Aria label for schedule type dropdown",
      })}
      className="w-full"
      options={modeOptions.map((option) => ({
        id: option.id,
        label: intl.formatMessage(option.labelMessage),
      }))}
      selectedId={scheduleMode}
      selectedLabel={intl.formatMessage(
        (
          modeOptions.find((option) => option.id === scheduleMode) ??
          modeOptions[0]
        ).labelMessage,
      )}
      onSelect={(nextMode) => {
        onUpdateScheduleDraft(
          changeAutomationScheduleMode(
            scheduleConfig,
            nextMode as AutomationScheduleMode,
          ),
        );
      }}
    />
  ) : null;

  const intervalInput =
    scheduleMode === "hourly" && showIntervalInput ? (
      <label className="text-token-secondary flex items-center gap-2 px-[var(--padding-row-x)] text-sm">
        <span className="shrink-0">
          <FormattedMessage
            id="settings.automations.scheduleIntervalLabel"
            defaultMessage="Every"
            description="Label for the automation interval input"
          />
        </span>
        <input
          aria-label={intervalAriaLabel}
          className={classNames(INPUT_CLASS_NAME, "w-20 text-sm")}
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          defaultValue={String(intervalValue)}
          onChange={(event) => {
            const digitsOnly = event.currentTarget.value.replaceAll(
              /[^0-9]/g,
              "",
            );
            event.currentTarget.value = digitsOnly;
            if (digitsOnly.length === 0) {
              return;
            }
            if (usesMinutes) {
              const minutes = normalizeIntervalMinutes(Number(digitsOnly));
              if (minutes == null) {
                return;
              }
              updateScheduleDraft({ intervalMinutes: minutes });
              return;
            }
            const hours = normalizeIntervalHours(Number(digitsOnly));
            if (hours != null) {
              updateScheduleDraft({ intervalHours: hours });
            }
          }}
          onBlur={(event) => {
            if (event.currentTarget.value.length === 0) {
              event.currentTarget.value = String(intervalValue);
            }
          }}
        />
        <span className="shrink-0">{intervalSuffix}</span>
      </label>
    ) : null;

  const weekdaySelect =
    scheduleMode === "weekly" ? (
      <ScheduleSelect
        ariaLabel={intl.formatMessage({
          id: "settings.automations.scheduleWeekday",
          defaultMessage: "Day",
          description:
            "Accessible label for the weekly automation day selector",
        })}
        className="w-full"
        options={WEEKDAY_OPTIONS.map((option) => ({
          id: option.id,
          label: intl.formatMessage(option.longLabelMessage),
        }))}
        selectedId={selectedWeekday.id}
        selectedLabel={intl.formatMessage(selectedWeekday.longLabelMessage)}
        onSelect={(weekday) => {
          updateScheduleDraft({ weekdays: [weekday as AutomationWeekday] });
        }}
      />
    ) : null;

  const timePicker = showTimePicker ? (
    <ScheduleTimePicker
      value={scheduleConfig.time}
      onChange={(time) => updateScheduleDraft({ time })}
    />
  ) : null;

  const customRruleInput =
    scheduleMode === "custom" ? (
      <input
        aria-label={intl.formatMessage({
          id: "settings.automations.scheduleCustomLabel",
          defaultMessage: "Custom RRULE",
          description:
            "Accessible label for the custom RRULE automation schedule editor",
        })}
        className={classNames(INPUT_CLASS_NAME, "w-full text-sm font-mono")}
        placeholder={intl.formatMessage({
          id: "settings.automations.scheduleCustomPlaceholder",
          defaultMessage: "RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0",
          description:
            "Placeholder text for the custom automation RRULE editor",
        })}
        spellCheck={false}
        value={scheduleConfig.customRrule}
        onChange={(event) => {
          updateScheduleDraft({ customRrule: event.currentTarget.value });
        }}
      />
    ) : null;

  const popoverBody = (
    <div className="flex w-full flex-col gap-1">
      <Dropdown.Title>
        <FormattedMessage
          id="settings.automations.schedulePopoverTitle"
          defaultMessage="Schedule"
          description="Header label above automation schedule controls"
        />
      </Dropdown.Title>
      {modeSelect}
      {intervalInput}
      {weekdaySelect}
      {timePicker}
      {customRruleInput}
    </div>
  );

  return (
    <SchedulePopoverRoot>
      {trigger}
      <SchedulePopoverContent
        align={align}
        className={popoverContentWidthClass}
      >
        {popoverBody}
      </SchedulePopoverContent>
    </SchedulePopoverRoot>
  );
}

interface ScheduleTimePickerProps {
  value: string;
  onChange: (value: string) => void;
}

function snapTimeToStep(value: string): string | null {
  const parsed = parseAutomationTime(value);
  if (!parsed) {
    return null;
  }
  const totalMinutes = parsed.hour * 60 + parsed.minute;
  const snapped =
    (Math.floor(totalMinutes / TIME_PICKER_STEP_MINUTES) *
      TIME_PICKER_STEP_MINUTES) %
    MINUTES_PER_DAY;
  return formatAutomationTime(Math.floor(snapped / 60), snapped % 60);
}

function formatTimeOptionLabel(value: string, intl: IntlWithTime): string {
  const parsed = parseAutomationTime(value);
  return parsed
    ? intl.formatTime(new Date(2024, 0, 1, parsed.hour, parsed.minute), {
        hour: "numeric",
        minute: "2-digit",
      })
    : value;
}

function ScheduleTimePicker({
  value,
  onChange,
}: ScheduleTimePickerProps): ReactElement {
  const intl = useIntl() as IntlWithTime;
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const snappedValue = snapTimeToStep(value);

  const timeAriaLabel = intl.formatMessage({
    id: "settings.automations.scheduleTime",
    defaultMessage: "Time",
    description: "Accessible label for the automation schedule time input",
  });
  const toggleAriaLabel = isPickerOpen
    ? intl.formatMessage({
        id: "settings.automations.hideTimePicker",
        defaultMessage: "Hide time picker",
        description: "Accessible label for closing the schedule time picker",
      })
    : intl.formatMessage({
        id: "settings.automations.showTimePicker",
        defaultMessage: "Show time picker",
        description: "Accessible label for opening the schedule time picker",
      });

  const inputRow = (
    <div className="relative w-full">
      <input
        aria-label={timeAriaLabel}
        className={classNames(
          INPUT_CLASS_NAME,
          "w-full !pr-8 text-sm [&::-webkit-calendar-picker-indicator]:hidden",
        )}
        type="time"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <Button
        aria-label={toggleAriaLabel}
        aria-expanded={isPickerOpen}
        color={isPickerOpen ? "ghostActive" : "ghost"}
        className="absolute top-1/2 right-[5px] -translate-y-1/2"
        size="icon"
        onClick={() => setIsPickerOpen((previous) => !previous)}
      >
        <ScheduleClockIcon className="icon-2xs" />
      </Button>
    </div>
  );

  const optionList = isPickerOpen ? (
    <div
      className="overflow-y-scroll overscroll-contain rounded-lg border border-token-border bg-token-input-background/70 p-1"
      style={{
        maxHeight:
          "min(14rem, max(3.5rem, calc(var(--radix-popover-content-available-height) - 9rem)))",
      }}
      onWheel={(event) => event.stopPropagation()}
    >
      {TIME_PICKER_OPTIONS.map((option) => {
        const optionLabel = formatTimeOptionLabel(option, intl);
        return (
          <button
            key={option}
            ref={
              option === snappedValue
                ? (element) =>
                    element?.scrollIntoView({
                      block: "center",
                      inline: "nearest",
                    })
                : undefined
            }
            type="button"
            aria-label={intl.formatMessage(
              {
                id: "settings.automations.timePicker.setTime",
                defaultMessage: "Set time to {time}",
                description:
                  "Accessible label for selecting a time in the schedule time picker",
              },
              { time: optionLabel },
            )}
            aria-pressed={option === value}
            className={classNames(
              "cursor-interaction flex h-7 w-full items-center rounded-md px-2 text-left text-sm tabular-nums outline-none focus:bg-token-list-hover-background",
              option === value
                ? "bg-token-list-hover-background text-token-foreground"
                : "text-token-secondary hover:bg-token-list-hover-background",
            )}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              onChange(option);
              setIsPickerOpen(false);
            }}
          >
            {optionLabel}
          </button>
        );
      })}
    </div>
  ) : null;

  return (
    <div className="flex w-full flex-col gap-1">
      {inputRow}
      {optionList}
    </div>
  );
}

interface ScheduleSelectOption {
  id: string;
  label: string;
}

interface ScheduleSelectProps {
  ariaLabel: string;
  className?: string;
  options: ScheduleSelectOption[];
  selectedId: string;
  selectedLabel: string;
  onSelect: (id: string) => void;
}

function ScheduleSelect({
  ariaLabel,
  className,
  options,
  selectedId,
  selectedLabel,
  onSelect,
}: ScheduleSelectProps): ReactElement {
  const triggerButton = (
    <button
      aria-label={ariaLabel}
      className={classNames(
        INPUT_CLASS_NAME,
        "flex items-center justify-between gap-2 text-left text-sm",
        className,
      )}
      type="button"
    >
      <span className="truncate">{selectedLabel}</span>
      <ChevronIcon className="icon-xxs shrink-0 text-token-description-foreground" />
    </button>
  );

  return (
    <DropdownMenu
      contentWidth="sm"
      contentClassName="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]"
      triggerButton={triggerButton}
    >
      {options.map((option) => (
        <Dropdown.Item
          key={option.id}
          onSelect={() => onSelect(option.id)}
          RightIcon={option.id === selectedId ? CheckMdIcon : undefined}
        >
          {option.label}
        </Dropdown.Item>
      ))}
    </DropdownMenu>
  );
}
