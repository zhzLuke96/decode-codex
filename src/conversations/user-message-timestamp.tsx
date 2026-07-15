// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Relative timestamp label for user messages.

import { useIntl } from "../vendor/react-intl";
import clsx from "clsx";

const RELATIVE_DATE_WINDOW_DAYS = 7;

export interface SentAtTimestampProps {
  className?: string;
  sentAtMs?: number | null;
  nowMs?: number;
}

export function SentAtTimestamp({
  className,
  sentAtMs,
  nowMs,
}: SentAtTimestampProps) {
  const intl = useIntl();
  if (sentAtMs == null) return null;
  const formatted = formatSentAtTimestamp({
    intl,
    sentAtMs,
    now: nowMs == null ? new Date() : new Date(nowMs),
  });
  return (
    <span className={clsx("text-xs text-token-text-tertiary", className)}>
      {formatted}
    </span>
  );
}

function formatSentAtTimestamp({
  intl,
  sentAtMs,
  now,
}: {
  intl: ReturnType<typeof useIntl>;
  sentAtMs: number;
  now: Date;
}): string {
  const sentAt = new Date(sentAtMs);
  const dayDelta = differenceInCalendarDays(sentAt, now);
  if (dayDelta === 0) {
    return intl.formatDate(sentAt, { hour: "numeric", minute: "2-digit" });
  }
  if (dayDelta < 0 && dayDelta > -RELATIVE_DATE_WINDOW_DAYS) {
    return intl.formatDate(sentAt, {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
    });
  }
  return intl.formatDate(sentAt, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function differenceInCalendarDays(a: Date, b: Date): number {
  const startA = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const startB = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((startA.getTime() - startB.getTime()) / 86_400_000);
}
