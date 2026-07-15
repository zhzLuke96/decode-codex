// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar usage-alert reset-cadence label. Given a reset interval in minutes,
// snaps it to the nearest whole calendar unit (year/month/week/day/hour/minute)
// and returns the localized "every N <unit>" ICU-plural label for the card.
import type { IntlShape } from "../vendor/react-intl";
import {
  MINUTES_PER_DAY,
  MINUTES_PER_MONTH,
  MINUTES_PER_WEEK,
  MINUTES_PER_YEAR,
} from "../boundaries/onboarding-commons-externals.facade";

const MINUTES_PER_HOUR = 60;
// One tick below a whole week / day, so a slightly-short interval still rounds up.
const WEEK_LABEL_THRESHOLD_MINUTES = 10079;
const DAY_LABEL_THRESHOLD_MINUTES = 1439;
// Accept intervals within ±5% of a whole calendar unit as that unit.
const CADENCE_TOLERANCE = 0.05;

/**
 * If `minutes` is within ±5% of a whole multiple of `unitMinutes`, return that
 * whole multiple (at least 1); otherwise return null.
 */
export function roundToWholeCadence(
  minutes: number,
  unitMinutes: number,
): number | null {
  if (!Number.isFinite(minutes) || minutes <= 0) return null;
  const units = Math.max(1, Math.round(minutes / unitMinutes));
  const exactMinutes = units * unitMinutes;
  return minutes >= exactMinutes * (1 - CADENCE_TOLERANCE) &&
    minutes <= exactMinutes * (1 + CADENCE_TOLERANCE)
    ? units
    : null;
}

export interface UsageAlertCadenceOptions {
  intl: IntlShape;
  minutes?: number;
}

export function formatUsageAlertCadence({
  intl,
  minutes = 0,
}: UsageAlertCadenceOptions): string | null {
  const years = roundToWholeCadence(minutes, MINUTES_PER_YEAR);
  if (years != null)
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.year",
        defaultMessage:
          "{years, plural, one {every year} other {every {years} years}}",
        description: "Cadence label for an annual sidebar usage alert",
      },
      { years },
    );

  const months = roundToWholeCadence(minutes, MINUTES_PER_MONTH);
  if (months != null)
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.month",
        defaultMessage:
          "{months, plural, one {every month} other {every {months} months}}",
        description: "Cadence label for a monthly sidebar usage alert",
      },
      { months },
    );

  if (minutes >= WEEK_LABEL_THRESHOLD_MINUTES) {
    const weeks = Math.ceil(minutes / MINUTES_PER_WEEK);
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.week",
        defaultMessage:
          "{weeks, plural, one {every week} other {every {weeks} weeks}}",
        description: "Cadence label for a weekly sidebar usage alert",
      },
      { weeks },
    );
  }

  if (minutes >= DAY_LABEL_THRESHOLD_MINUTES) {
    const days = Math.ceil(minutes / MINUTES_PER_DAY);
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.day",
        defaultMessage:
          "{days, plural, one {every day} other {every {days} days}}",
        description: "Cadence label for a daily sidebar usage alert",
      },
      { days },
    );
  }

  if (minutes >= MINUTES_PER_HOUR) {
    const hours = Math.ceil(minutes / MINUTES_PER_HOUR);
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.hour",
        defaultMessage:
          "{hours, plural, one {every hour} other {every {hours} hours}}",
        description: "Cadence label for an hourly sidebar usage alert",
      },
      { hours },
    );
  }

  if (minutes > 0) {
    const wholeMinutes = Math.ceil(minutes);
    return intl.formatMessage(
      {
        id: "sidebarElectron.usageAlert.cadence.minute",
        defaultMessage:
          "{minutes, plural, one {every minute} other {every {minutes} minutes}}",
        description: "Cadence label for a minute sidebar usage alert",
      },
      { minutes: wholeMinutes },
    );
  }

  return null;
}
