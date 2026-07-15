// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Interval summary labels for automation schedules.

import type { AutomationIntl, AutomationWeekday } from "./types";

export function formatHourIntervalSummary({
  intervalHours,
  intl,
  isEveryDay,
  weekdays,
}: {
  intervalHours: number;
  intl: AutomationIntl;
  isEveryDay: boolean;
  weekdays: AutomationWeekday[];
}): string {
  const intervalLabel =
    intervalHours === 1
      ? intl.formatMessage({
          id: "settings.automations.scheduleSummary.intervalHourly",
          defaultMessage: "Hourly",
          description: "Automation schedule summary for hourly interval",
        })
      : intl.formatMessage(
          {
            id: "settings.automations.scheduleSummary.interval",
            defaultMessage: "Every {count}h",
            description: "Automation schedule summary for hourly interval",
          },
          { count: intervalHours },
        );

  return isEveryDay
    ? intervalLabel
    : formatIntervalOnDaysSummary({ intervalLabel, intl, weekdays });
}

export function formatMinuteIntervalSummary({
  intervalMinutes,
  intl,
  isEveryDay,
  weekdays,
}: {
  intervalMinutes: number;
  intl: AutomationIntl;
  isEveryDay: boolean;
  weekdays: AutomationWeekday[];
}): string {
  const intervalLabel = formatMinuteIntervalLabel(intervalMinutes, intl);

  return isEveryDay
    ? intervalLabel
    : formatIntervalOnDaysSummary({ intervalLabel, intl, weekdays });
}

function formatMinuteIntervalLabel(
  intervalMinutes: number,
  intl: AutomationIntl,
): string {
  if (intervalMinutes === 1) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalMinute",
      defaultMessage: "Every minute",
      description: "Automation schedule summary for one-minute interval",
    });
  }

  if (intervalMinutes === 60) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalHourly",
      defaultMessage: "Hourly",
      description: "Automation schedule summary for hourly interval",
    });
  }

  if (intervalMinutes === 1440) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalDaily",
      defaultMessage: "Daily",
      description: "Automation schedule summary for daily interval",
    });
  }

  if (intervalMinutes === 10080) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.intervalWeekly",
      defaultMessage: "Weekly",
      description: "Automation schedule summary for weekly interval",
    });
  }

  return intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalMinutes",
      defaultMessage: "Every {count}m",
      description: "Automation schedule summary for minute interval",
    },
    { count: intervalMinutes },
  );
}

function formatIntervalOnDaysSummary({
  intervalLabel,
  intl,
  weekdays,
}: {
  intervalLabel: string;
  intl: AutomationIntl;
  weekdays: AutomationWeekday[];
}): string {
  const dayCountLabel = intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDayCount",
      defaultMessage: "{count, plural, one {# day} other {# days}}",
      description:
        "Day count label for interval schedules with selected weekdays",
    },
    { count: weekdays.length },
  );

  return intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDays",
      defaultMessage: "{interval} on {days}",
      description:
        "Automation schedule summary for interval schedule with weekday selection",
    },
    { interval: intervalLabel, days: dayCountLabel },
  );
}
