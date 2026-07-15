// Restored from ref/webview/assets/profile-queries-BWvaDOFi.js
// profile-queries-BWvaDOFi chunk restored from the Codex webview bundle.
import type { DailyProfileUsage, ProfileUsageView } from "./types";
const MAX_USAGE_COLUMNS = 52;
const PROFILE_USAGE_START_WEEK_ISO = "2025-07-13";
export function getProfileActivityLevels({
  dailyUsage,
  todayIso,
  view,
}: {
  dailyUsage: DailyProfileUsage[];
  todayIso: string;
  view: ProfileUsageView;
}) {
  const dailyCredits = getDailyUsageCredits({
    columnCount: getProfileUsageColumnCount(todayIso),
    dailyUsage,
    startDateIso: getProfileUsageStartDate(todayIso),
    todayIso,
  });
  switch (view) {
    case "cumulative":
      return getCumulativeWeeklyActivityLevels(dailyCredits);
    case "daily":
      return getDailyActivityLevels(dailyCredits);
    case "weekly":
      return getWeeklyActivityLevels(dailyCredits);
  }
}
export function getRecentDailyActivityLevels({
  dailyUsage,
  todayIso,
}: {
  dailyUsage: DailyProfileUsage[];
  todayIso: string;
}) {
  const startDateIso = addDays(getWeekStartIso(todayIso), -175);
  return getDailyActivityLevels(
    getDailyUsageCredits({
      columnCount: 26,
      dailyUsage,
      startDateIso,
      todayIso,
    }),
  ).map((level, index) =>
    addDays(startDateIso, index) > todayIso ? null : level,
  );
}
export function getProfileUsageGrid({
  dailyUsage,
  todayIso,
}: {
  dailyUsage: DailyProfileUsage[];
  todayIso: string;
}) {
  return getDailyUsageCredits({
    columnCount: getProfileUsageColumnCount(todayIso),
    dailyUsage,
    startDateIso: getProfileUsageStartDate(todayIso),
    todayIso,
  });
}
export function getProfileWeeklyUsageTotals({
  dailyUsage,
  todayIso,
}: {
  dailyUsage: DailyProfileUsage[];
  todayIso: string;
}) {
  const startDateIso = getProfileUsageStartDate(todayIso);
  const columnCount = getProfileUsageColumnCount(todayIso);
  const weeklyCredits = Array.from(
    {
      length: columnCount,
    },
    () => 0,
  );
  const weekIndexByDate = new Map(
    Array.from(
      {
        length: columnCount,
      },
      (_unused, index) => [addDays(startDateIso, index * 7), index],
    ),
  );
  for (const usage of dailyUsage) {
    if (usage.date > todayIso) continue;
    const weekIndex = weekIndexByDate.get(getWeekStartIso(usage.date));
    if (weekIndex != null) {
      weeklyCredits[weekIndex] += Math.max(0, usage.credits);
    }
  }
  return weeklyCredits;
}
export function getCumulativeWeeklyUsageTotals({
  dailyUsage,
  todayIso,
}: {
  dailyUsage: DailyProfileUsage[];
  todayIso: string;
}) {
  return cumulativeSum(
    getProfileWeeklyUsageTotals({
      dailyUsage,
      todayIso,
    }),
  );
}
export function formatProfileDateIso(date: Date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
export function getProfileUsageColumnCount(todayIso: string) {
  const weekStartMs = new Date(
    `${getWeekStartIso(todayIso)}T00:00:00.000Z`,
  ).getTime();
  const firstWeekMs = new Date(
    `${PROFILE_USAGE_START_WEEK_ISO}T00:00:00.000Z`,
  ).getTime();
  const elapsedWeeks = Math.floor((weekStartMs - firstWeekMs) / 604800000);
  return Math.min(MAX_USAGE_COLUMNS, Math.max(1, elapsedWeeks + 1));
}
export function getProfileUsageDateAtOffset(offset: number, todayIso: string) {
  return addDays(getProfileUsageStartDate(todayIso), offset);
}
function getProfileUsageStartDate(todayIso: string) {
  return addDays(
    getWeekStartIso(todayIso),
    -(getProfileUsageColumnCount(todayIso) - 1) * 7,
  );
}
function getDailyActivityLevels(dailyCredits: number[]) {
  const maxCredits = maxValue(dailyCredits);
  return dailyCredits.map((credits) =>
    scaleDailyActivityLevel(credits, maxCredits),
  );
}
function getWeeklyActivityLevels(dailyCredits: number[]) {
  return expandWeeklyTotalsToActivityLevels(sumWeeks(dailyCredits));
}
function getCumulativeWeeklyActivityLevels(dailyCredits: number[]) {
  return expandWeeklyTotalsToActivityLevels(
    cumulativeSum(sumWeeks(dailyCredits)),
  );
}
function expandWeeklyTotalsToActivityLevels(weeklyCredits: number[]) {
  const maxCredits = maxValue(weeklyCredits);
  return Array.from(
    {
      length: weeklyCredits.length * 7,
    },
    (_unused, index) => {
      const dayOfWeek = index % 7;
      const activeDayCount = activeDaysForWeek(
        weeklyCredits[Math.floor(index / 7)] ?? 0,
        maxCredits,
      );
      const daysRemainingInWeek = 7 - dayOfWeek;
      return activeDayCount === 0 || daysRemainingInWeek > activeDayCount
        ? 0
        : 4;
    },
  );
}
function cumulativeSum(values: number[]) {
  return values.reduce<number[]>((accumulator, value) => {
    accumulator.push((accumulator.at(-1) ?? 0) + value);
    return accumulator;
  }, []);
}
function activeDaysForWeek(credits: number, maxCredits: number) {
  return credits <= 0 || maxCredits <= 0
    ? 0
    : Math.max(1, Math.ceil((credits / maxCredits) * 7));
}
function getDailyUsageCredits({
  columnCount,
  dailyUsage,
  startDateIso,
  todayIso,
}: {
  columnCount: number;
  dailyUsage: DailyProfileUsage[];
  startDateIso: string;
  todayIso: string;
}) {
  const usageByDate = sumDailyUsageByDate(
    dailyUsage.filter((usage) => usage.date <= todayIso),
  );
  return Array.from(
    {
      length: columnCount * 7,
    },
    (_unused, index) => usageByDate.get(addDays(startDateIso, index)) ?? 0,
  );
}
function getWeekStartIso(dateIso: string) {
  const date = new Date(`${dateIso}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return date.toISOString().slice(0, 10);
}
function sumWeeks(dailyCredits: number[]) {
  return Array.from(
    {
      length: Math.ceil(dailyCredits.length / 7),
    },
    (_unused, index) =>
      dailyCredits
        .slice(index * 7, index * 7 + 7)
        .reduce((sum, credits) => sum + credits, 0),
  );
}
function scaleDailyActivityLevel(credits: number, maxCredits: number) {
  if (credits <= 0 || maxCredits <= 0) return 0;
  const ratio = credits / maxCredits;
  return ratio > 0.75 ? 4 : ratio > 0.5 ? 3 : ratio > 0.25 ? 2 : 1;
}
function sumDailyUsageByDate(dailyUsage: DailyProfileUsage[]) {
  return dailyUsage.reduce<Map<string, number>>((usageByDate, usage) => {
    usageByDate.set(
      usage.date,
      (usageByDate.get(usage.date) ?? 0) + Math.max(0, usage.credits),
    );
    return usageByDate;
  }, new Map());
}
function addDays(dateIso: string, days: number) {
  const date = new Date(`${dateIso}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}
function maxValue(values: number[]) {
  return values.reduce((max, value) => Math.max(max, value), 0);
}
