// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Weekday ordering plus human-readable weekday/time label helpers for automation schedule summaries.

import type { IntlShape } from "../../vendor/react-intl";
import { ALL_WEEKDAYS } from "./schedule-rrule-helpers";

export type WeekdayToken = "SU" | "MO" | "TU" | "WE" | "TH" | "FR" | "SA";

export type ScheduleIntl = IntlShape & {
  formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatTime(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatList(
    items: string[],
    options?: { type?: "conjunction" | "disjunction" },
  ): string;
};

export const WEEKDAY_ORDER: WeekdayToken[] = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
];

export function sortWeekdays(weekdays: WeekdayToken[]): WeekdayToken[] {
  const orderByToken = new Map(
    WEEKDAY_ORDER.map((token, index) => [token, index] as const),
  );
  return [...new Set(weekdays)].sort(
    (left, right) =>
      (orderByToken.get(left) ?? 0) - (orderByToken.get(right) ?? 0),
  );
}

export function normalizeWeekdays(weekdays: WeekdayToken[]): WeekdayToken[] {
  return weekdays.length > 0 ? sortWeekdays(weekdays) : ALL_WEEKDAYS;
}

export function weekdaySetsEqual(
  left: WeekdayToken[],
  right: readonly WeekdayToken[],
): boolean {
  return left.length === right.length
    ? right.every((token) => left.includes(token))
    : false;
}

export function weekdayIndex(token: WeekdayToken): number {
  return WEEKDAY_ORDER.indexOf(token);
}

export function weekdayToDate(token: WeekdayToken): Date {
  return new Date(2024, 0, 7 + weekdayIndex(token));
}

export function formatWeekdayName(
  token: WeekdayToken,
  intl: ScheduleIntl,
  weekdayFormat: "long" | "short" | "narrow",
): string {
  return intl.formatDate(weekdayToDate(token), { weekday: weekdayFormat });
}

export function formatWeekdayShort(
  token: WeekdayToken,
  intl: ScheduleIntl,
): string {
  const shortLabel = formatWeekdayName(token, intl, "short");
  const longLabel = formatWeekdayName(token, intl, "long");
  return shortLabel.length >= longLabel.length
    ? intl.formatDate(weekdayToDate(token), { weekday: "narrow" })
    : shortLabel;
}

export function formatTimeLabel(
  time: string,
  intl: ScheduleIntl,
): string | null {
  const [hourPart, minutePart] = time.split(":");
  const hour = Number(hourPart);
  const minute = Number(minutePart);
  return !Number.isFinite(hour) || !Number.isFinite(minute)
    ? null
    : intl.formatTime(new Date(2024, 0, 1, hour, minute), {
        hour: "numeric",
        minute: "2-digit",
      });
}

export function pluralWeekdayLabel(
  token: WeekdayToken,
  intl: ScheduleIntl,
): string | undefined {
  switch (token) {
    case "SU":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.sundaysLabel",
        defaultMessage: "Sundays",
        description: "Plural Sunday label for schedule summaries",
      });
    case "MO":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.mondaysLabel",
        defaultMessage: "Mondays",
        description: "Plural Monday label for schedule summaries",
      });
    case "TU":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.tuesdaysLabel",
        defaultMessage: "Tuesdays",
        description: "Plural Tuesday label for schedule summaries",
      });
    case "WE":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.wednesdaysLabel",
        defaultMessage: "Wednesdays",
        description: "Plural Wednesday label for schedule summaries",
      });
    case "TH":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.thursdaysLabel",
        defaultMessage: "Thursdays",
        description: "Plural Thursday label for schedule summaries",
      });
    case "FR":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.fridaysLabel",
        defaultMessage: "Fridays",
        description: "Plural Friday label for schedule summaries",
      });
    case "SA":
      return intl.formatMessage({
        id: "settings.automations.scheduleSummary.saturdaysLabel",
        defaultMessage: "Saturdays",
        description: "Plural Saturday label for schedule summaries",
      });
  }
}

export function formatWeekdayList(
  weekdays: WeekdayToken[],
  intl: ScheduleIntl,
  variant: "short" | "long",
): string | null {
  const labels = weekdays.map((token) =>
    variant === "short"
      ? formatWeekdayShort(token, intl)
      : formatWeekdayName(token, intl, "long"),
  );
  return labels.length === 0
    ? null
    : intl.formatList(labels, { type: "conjunction" });
}

export function isContiguousWeekdayRange(weekdays: WeekdayToken[]): boolean {
  if (weekdays.length < 2) return false;
  const sorted = sortWeekdays(weekdays);
  for (let index = 1; index < sorted.length; index += 1) {
    const previousIndex = WEEKDAY_ORDER.indexOf(
      sorted[index - 1] ?? ("" as WeekdayToken),
    );
    const currentIndex = WEEKDAY_ORDER.indexOf(
      sorted[index] ?? ("" as WeekdayToken),
    );
    if (
      previousIndex < 0 ||
      currentIndex < 0 ||
      currentIndex !== previousIndex + 1
    ) {
      return false;
    }
  }
  return true;
}

export function formatWeekdayRange(
  weekdays: WeekdayToken[],
  intl: ScheduleIntl,
): string {
  const sorted = sortWeekdays(weekdays);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  return !first || !last
    ? intl.formatMessage({
        id: "settings.automations.scheduleSummary.weekdaysLabel",
        defaultMessage: "weekdays",
        description: "Weekday label for schedule summaries",
      })
    : `${formatWeekdayShort(first, intl)}-${formatWeekdayShort(last, intl)}`;
}

export function formatWeekdaysLabel(
  weekdays: WeekdayToken[],
  intl: ScheduleIntl,
  isAllWeekdays: boolean,
  isAllWeekends: boolean,
  variant: "short" | "long",
): string | null {
  if (isAllWeekdays) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.weekdaysLabel",
      defaultMessage: "weekdays",
      description: "Weekday label for schedule summaries",
    });
  }
  if (isAllWeekends) {
    return intl.formatMessage({
      id: "settings.automations.scheduleSummary.weekendsLabel",
      defaultMessage: "weekends",
      description: "Weekend label for schedule summaries",
    });
  }
  if (variant === "long" && weekdays.length === 1) {
    const onlyToken = weekdays[0];
    return onlyToken ? (pluralWeekdayLabel(onlyToken, intl) ?? null) : null;
  }
  return weekdays.length > 2 && isContiguousWeekdayRange(weekdays)
    ? formatWeekdayRange(weekdays, intl)
    : formatWeekdayList(
        weekdays,
        intl,
        weekdays.length > 2 ? "short" : variant,
      );
}
