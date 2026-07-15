// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import { app } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import { isRecord } from "../runtime/desktop-runtime-utils";
import {
  OwlUpdatePolicies,
  RelaunchPolicy,
  RelaunchWindowEntry,
} from "./desktop-updater-types";
import { ProcessWithLinkedBinding } from "../workspace/desktop-runtime-types";

export function loadOwlUpdatePolicies(): OwlUpdatePolicies | null {
  const linkedBindingFactory = (process as ProcessWithLinkedBinding)
    ._linkedBinding;
  if (typeof linkedBindingFactory !== "function") return null;
  let linkedBinding: unknown;
  try {
    linkedBinding = linkedBindingFactory(
      "electron_browser_owl_update_policies",
    );
  } catch {
    return null;
  }
  if (!isRecord(linkedBinding) || !isRecord(linkedBinding.owlUpdatePolicies)) {
    return null;
  }
  const policies = linkedBinding.owlUpdatePolicies;
  return typeof policies.getRelaunchNotificationPolicy === "function" &&
    typeof policies.on === "function"
    ? (policies as OwlUpdatePolicies)
    : null;
}

export function parseRelaunchPolicy(value: unknown): RelaunchPolicy | null {
  if (!isRecord(value)) return null;
  return {
    relaunchFastIfOutdatedDays: nullableInteger(
      value.relaunchFastIfOutdatedDays,
    ),
    relaunchNotification: nullableInteger(value.relaunchNotification),
    relaunchNotificationPeriodMs: nullableInteger(
      value.relaunchNotificationPeriodMs,
    ),
    relaunchWindow: isRecord(value.relaunchWindow)
      ? {
          entries: Array.isArray(value.relaunchWindow.entries)
            ? value.relaunchWindow.entries
                .map(parseRelaunchWindowEntry)
                .filter((entry): entry is RelaunchWindowEntry => entry != null)
            : [],
        }
      : null,
  };
}

function parseRelaunchWindowEntry(value: unknown): RelaunchWindowEntry | null {
  if (!isRecord(value) || !isRecord(value.start)) return null;
  return {
    duration_mins: nullableInteger(value.duration_mins),
    start: {
      hour: nullableInteger(value.start.hour),
      minute: nullableInteger(value.start.minute),
    },
  };
}

function nullableInteger(value: unknown): number | null {
  return typeof value === "number" && Number.isInteger(value) ? value : null;
}

export function resolveRelaunchDeadline(
  downloadedAtMs: number,
  policy: RelaunchPolicy,
): number {
  return clampDeadlineToRelaunchWindow(
    downloadedAtMs + relaunchNotificationPeriodMs(policy),
    policy.relaunchWindow,
  );
}

function relaunchNotificationPeriodMs(policy: RelaunchPolicy): number {
  const configuredPeriodMs =
    policy.relaunchNotificationPeriodMs == null ||
    policy.relaunchNotificationPeriodMs < 60 * 60 * 1000
      ? 7 * 24 * 60 * 60 * 1000
      : policy.relaunchNotificationPeriodMs;
  return isCurrentBuildOlderThanDays(policy.relaunchFastIfOutdatedDays)
    ? Math.min(configuredPeriodMs, 2 * 60 * 60 * 1000)
    : configuredPeriodMs;
}

function isCurrentBuildOlderThanDays(days: number | null): boolean {
  if (days == null || days < 7) return false;
  const parseBuildDate = sharedRuntime.dateFromDateEncodedBuildVersion as
    | ((version: string) => Date | null)
    | undefined;
  const buildDate = parseBuildDate?.(app.getVersion()) ?? null;
  return buildDate
    ? Date.now() - buildDate.getTime() > days * 24 * 60 * 60 * 1000
    : false;
}

function clampDeadlineToRelaunchWindow(
  deadlineAtMs: number,
  relaunchWindow: RelaunchPolicy["relaunchWindow"],
): number {
  const window = firstValidRelaunchWindow(relaunchWindow);
  if (!window || window.durationMs >= 24 * 60 * 60 * 1000) return deadlineAtMs;
  const windowStartMs = relaunchWindowStartForDay(deadlineAtMs, window);
  const windowEndMs = windowStartMs + window.durationMs;
  if (deadlineAtMs >= windowStartMs && deadlineAtMs < windowEndMs) {
    return deadlineAtMs;
  }
  if (deadlineAtMs >= windowEndMs) {
    return randomTimeInsideRelaunchWindow(
      addDaysToTimestamp(windowStartMs, 1),
      window,
    );
  }
  if (
    deadlineAtMs <
    addDaysToTimestamp(windowStartMs, -1) + window.durationMs
  ) {
    return deadlineAtMs;
  }
  return randomTimeInsideRelaunchWindow(windowStartMs, window);
}

function firstValidRelaunchWindow(
  relaunchWindow: RelaunchPolicy["relaunchWindow"],
): {
  durationMs: number;
  hour: number;
  minute: number;
} | null {
  const entry = relaunchWindow?.entries?.[0];
  if (!entry) return null;
  const { hour, minute } = entry.start;
  const durationMins = entry.duration_mins;
  if (
    hour == null ||
    minute == null ||
    durationMins == null ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59 ||
    durationMins < 1 ||
    durationMins > 1440
  ) {
    return null;
  }
  return {
    durationMs: durationMins * 60 * 1000,
    hour,
    minute,
  };
}

function relaunchWindowStartForDay(
  timestampMs: number,
  window: {
    hour: number;
    minute: number;
  },
): number {
  const date = new Date(timestampMs);
  date.setHours(window.hour, window.minute, 0, 0);
  return date.getTime();
}

function addDaysToTimestamp(timestampMs: number, days: number): number {
  const date = new Date(timestampMs);
  date.setDate(date.getDate() + days);
  return date.getTime();
}

function randomTimeInsideRelaunchWindow(
  windowStartMs: number,
  window: {
    durationMs: number;
  },
): number {
  return windowStartMs + Math.floor(Math.random() * window.durationMs);
}
