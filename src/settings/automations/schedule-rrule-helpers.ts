// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared RRULE constants and parsing helpers for automation schedule controls.

import type { WeekdayToken } from "./schedule-weekdays";

type RRuleOptions = {
  byhour?: number | number[];
  byminute?: number | number[];
  byweekday?: RRuleWeekday | RRuleWeekday[];
  freq: number;
  interval?: number;
};

type ParsedRuleSet = {
  exdates(): unknown[];
  exrules(): unknown[];
  rdates(): unknown[];
  rrules(): ParsedRRule[];
};

type ParsedRRule = {
  options: {
    byhour?: number | number[];
    byminute?: number | number[];
    byweekday?: number[];
    freq: number;
    interval?: number;
  };
  origOptions: Record<string, unknown>;
};

type RRuleWeekday = {
  token: WeekdayToken;
  weekday: number;
  toString(): WeekdayToken;
};

const FREQ_NAME_BY_VALUE: Record<number, string> = {
  0: "YEARLY",
  1: "MONTHLY",
  2: "WEEKLY",
  3: "DAILY",
  4: "HOURLY",
  5: "MINUTELY",
  6: "SECONDLY",
};

const FREQ_VALUE_BY_NAME = Object.fromEntries(
  Object.entries(FREQ_NAME_BY_VALUE).map(([value, name]) => [
    name,
    Number(value),
  ]),
);

function createWeekday(weekday: number, token: WeekdayToken): RRuleWeekday {
  return {
    token,
    weekday,
    toString: () => token,
  };
}

export class RRule {
  static readonly YEARLY = 0;
  static readonly MONTHLY = 1;
  static readonly WEEKLY = 2;
  static readonly DAILY = 3;
  static readonly HOURLY = 4;
  static readonly MINUTELY = 5;
  static readonly SECONDLY = 6;

  static readonly MO = createWeekday(0, "MO");
  static readonly TU = createWeekday(1, "TU");
  static readonly WE = createWeekday(2, "WE");
  static readonly TH = createWeekday(3, "TH");
  static readonly FR = createWeekday(4, "FR");
  static readonly SA = createWeekday(5, "SA");
  static readonly SU = createWeekday(6, "SU");

  constructor(private readonly options: RRuleOptions) {}

  toString(): string {
    const parts = [`FREQ=${FREQ_NAME_BY_VALUE[this.options.freq] ?? "DAILY"}`];
    if (this.options.interval != null)
      parts.push(`INTERVAL=${this.options.interval}`);
    if (this.options.byhour != null)
      parts.push(`BYHOUR=${formatNumberList(this.options.byhour)}`);
    if (this.options.byminute != null) {
      parts.push(`BYMINUTE=${formatNumberList(this.options.byminute)}`);
    }
    if (this.options.byweekday != null) {
      parts.push(
        `BYDAY=${asArray(this.options.byweekday).map(String).join(",")}`,
      );
    }
    return `RRULE:${parts.join(";")}`;
  }
}

export const ALL_WEEKDAYS: WeekdayToken[] = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
];
export const WEEKDAYS_MONDAY_TO_FRIDAY: WeekdayToken[] = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
];
export const DEFAULT_SCHEDULE_TIME = "09:00";

export const MINUTELY_STANDALONE_OPTION_KEYS = new Set(["freq", "interval"]);
export const HOURLY_STANDALONE_OPTION_KEYS = new Set([
  "freq",
  "interval",
  "byminute",
  "byweekday",
]);
export const DAILY_WEEKLY_STANDALONE_OPTION_KEYS = new Set([
  "freq",
  "interval",
  "byhour",
  "byminute",
  "byweekday",
]);

export const RRULE_WEEKDAY_BY_TOKEN = {
  SU: RRule.SU,
  MO: RRule.MO,
  TU: RRule.TU,
  WE: RRule.WE,
  TH: RRule.TH,
  FR: RRule.FR,
  SA: RRule.SA,
} as const;

export function rrulestr(
  rruleText: string,
  _options?: { forceset?: boolean; tzid?: string },
): ParsedRuleSet {
  const rule = parseRruleLine(rruleText);
  return {
    exdates: () => [],
    exrules: () => [],
    rdates: () => [],
    rrules: () => (rule == null ? [] : [rule]),
  };
}

const TOKEN_BY_RRULE_WEEKDAY_INDEX: Record<number, WeekdayToken> = {
  0: "MO",
  1: "TU",
  2: "WE",
  3: "TH",
  4: "FR",
  5: "SA",
  6: "SU",
};

const WEEKDAY_TOKEN_SET = new Set<WeekdayToken>(ALL_WEEKDAYS);
const WEEKDAY_SORT_ORDER = new Map(
  ALL_WEEKDAYS.map((token, index) => [token, index] as const),
);

export function currentTimeZoneId(): string | null {
  return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
}

export function parseScheduleTime(
  value: string | null | undefined,
): { hour: number; minute: number } | null {
  if (value == null) return null;
  const match = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }
  return { hour, minute };
}

export function normalizeRruleMinute(value: unknown): number | null {
  const minute = firstNumber(value);
  if (minute == null || minute < 0 || minute > 59) return null;
  return minute;
}

export function formatRruleTime(
  byhour: unknown,
  byminute: unknown,
  options?: Record<string, unknown>,
): string {
  const hour = firstNumber(byhour ?? options?.byhour);
  const minute = firstNumber(byminute ?? options?.byminute);
  const parsed =
    hour == null
      ? parseScheduleTime(DEFAULT_SCHEDULE_TIME)
      : parseScheduleTime(`${hour}:${String(minute ?? 0).padStart(2, "0")}`);
  if (parsed == null) return DEFAULT_SCHEDULE_TIME;
  return `${String(parsed.hour).padStart(2, "0")}:${String(
    parsed.minute,
  ).padStart(2, "0")}`;
}

export function weekdaysFromByweekday(value: unknown): WeekdayToken[] | null {
  const weekdays = asArray(value).flatMap((item) => {
    const token = weekdayTokenFromValue(item);
    return token == null ? [] : [token];
  });
  return weekdays.length === 0 ? null : sortUniqueWeekdays(weekdays);
}

export function weekdaysFromRruleText(
  rruleText: string,
): WeekdayToken[] | null {
  const match = rruleText.match(/(?:^|[;\n])BYDAY=([^;\n]+)/i);
  if (!match) return null;
  const weekdays = match[1].split(",").flatMap((rawToken) => {
    const token = rawToken
      .trim()
      .replace(/^[+-]?\d+/, "")
      .toUpperCase();
    return isWeekdayToken(token) ? [token] : [];
  });
  return weekdays.length === 0 ? null : sortUniqueWeekdays(weekdays);
}

export function representativeWeekday(
  weekdays: readonly WeekdayToken[],
): WeekdayToken {
  return sortUniqueWeekdays([...weekdays])[0] ?? "MO";
}

export function isValidRruleText(rruleText: string): boolean {
  if (rruleText.trim().length === 0) return false;
  try {
    return rrulestr(rruleText).rrules().length > 0;
  } catch {
    return false;
  }
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : value == null ? [] : [value];
}

function firstNumber(value: unknown): number | null {
  const [first] = asArray(value);
  const numberValue = typeof first === "number" ? first : Number(first);
  return Number.isFinite(numberValue) ? Math.round(numberValue) : null;
}

function formatNumberList(value: number | number[]): string {
  return asArray(value).map(String).join(",");
}

function parseRruleLine(rruleText: string): ParsedRRule | null {
  const line =
    rruleText
      .split(/\r?\n/)
      .find((item) => item.trim().toUpperCase().startsWith("RRULE:")) ??
    rruleText;
  const rawRule = line.trim().replace(/^RRULE:/i, "");
  const entries = rawRule
    .split(";")
    .map((part) => part.split("=") as [string, string | undefined])
    .filter(([key, value]) => key.length > 0 && value != null);
  const rawOptions = Object.fromEntries(
    entries.map(([key, value]) => [key.toUpperCase(), value ?? ""]),
  );
  const freq = FREQ_VALUE_BY_NAME[String(rawOptions.FREQ ?? "").toUpperCase()];
  if (freq == null) return null;

  const origOptions: Record<string, unknown> = { freq };
  const options: ParsedRRule["options"] = { freq };
  const interval = parsePositiveInteger(rawOptions.INTERVAL);
  if (interval != null) {
    origOptions.interval = interval;
    options.interval = interval;
  } else {
    options.interval = 1;
  }
  const byhour = parseNumberList(rawOptions.BYHOUR);
  if (byhour != null) {
    origOptions.byhour = byhour;
    options.byhour = byhour;
  }
  const byminute = parseNumberList(rawOptions.BYMINUTE);
  if (byminute != null) {
    origOptions.byminute = byminute;
    options.byminute = byminute;
  }
  const byweekday = parseWeekdayList(rawOptions.BYDAY);
  if (byweekday != null) {
    origOptions.byweekday = byweekday;
    options.byweekday = byweekday.map((weekday) => weekday.weekday);
  }
  return { options, origOptions };
}

function parsePositiveInteger(value: string | undefined): number | null {
  if (value == null) return null;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function parseNumberList(value: string | undefined): number | number[] | null {
  if (value == null || value.length === 0) return null;
  const numbers = value
    .split(",")
    .map((item) => Number(item))
    .filter(Number.isFinite)
    .map(Math.round);
  if (numbers.length === 0) return null;
  return numbers.length === 1 ? numbers[0] : numbers;
}

function parseWeekdayList(value: string | undefined): RRuleWeekday[] | null {
  if (value == null || value.length === 0) return null;
  const weekdays = value.split(",").flatMap((item) => {
    const token = item
      .trim()
      .replace(/^[+-]?\d+/, "")
      .toUpperCase();
    return isWeekdayToken(token) ? [RRULE_WEEKDAY_BY_TOKEN[token]] : [];
  });
  return weekdays.length === 0 ? null : weekdays;
}

function weekdayTokenFromValue(value: unknown): WeekdayToken | null {
  if (typeof value === "string") {
    const token = value.replace(/^[+-]?\d+/, "").toUpperCase();
    return isWeekdayToken(token) ? token : null;
  }
  if (typeof value === "number") {
    return TOKEN_BY_RRULE_WEEKDAY_INDEX[value] ?? null;
  }
  if (typeof value === "object" && value != null) {
    const maybeWeekday = (value as { weekday?: unknown }).weekday;
    if (typeof maybeWeekday === "number") {
      return TOKEN_BY_RRULE_WEEKDAY_INDEX[maybeWeekday] ?? null;
    }
    const stringValue = String(value);
    return stringValue === "[object Object]"
      ? null
      : weekdayTokenFromValue(stringValue);
  }
  return null;
}

function isWeekdayToken(value: string): value is WeekdayToken {
  return WEEKDAY_TOKEN_SET.has(value as WeekdayToken);
}

function sortUniqueWeekdays(weekdays: WeekdayToken[]): WeekdayToken[] {
  return [...new Set(weekdays)].sort(
    (left, right) =>
      (WEEKDAY_SORT_ORDER.get(left) ?? 0) -
      (WEEKDAY_SORT_ORDER.get(right) ?? 0),
  );
}
