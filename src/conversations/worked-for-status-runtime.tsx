// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Collapsed-turn worked/working/stopped status label and compact duration helpers.
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { formatCompactDurationMs } from "../utils/duration-format";

export type WorkedForStatus = "worked" | "working" | "stopped";

export type WorkedForStatusItem = {
  completedAtMs?: number | null;
  startedAtMs: number;
  status: WorkedForStatus;
};

export function formatWorkedDuration(durationMs: number): string {
  return formatCompactDurationMs(durationMs);
}

export const formatElapsedDuration = formatWorkedDuration;

export function WorkedForStatusLabel({
  className,
  completedAtMs,
  startedAtMs,
  status,
}: WorkedForStatusItem & { className?: string }) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    if (status !== "working" || completedAtMs != null) return undefined;
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, [completedAtMs, status]);

  const elapsedMs = Math.max((completedAtMs ?? now) - startedAtMs, 0);
  const timeLabel = useMemo(() => formatWorkedDuration(elapsedMs), [elapsedMs]);
  const label =
    status === "working" ? (
      elapsedMs >= 1000 ? (
        <FormattedMessage
          id="localConversation.workingFor"
          defaultMessage="Working for {time}"
          description="Divider shown while the assistant is still working before the final response starts"
          values={{ time: timeLabel }}
        />
      ) : (
        <FormattedMessage
          id="localConversation.working"
          defaultMessage="Working"
          description="Divider shown while the assistant has started working but has not yet crossed the elapsed-time threshold"
        />
      )
    ) : status === "stopped" ? (
      <FormattedMessage
        id="localConversation.userStoppedAfter"
        defaultMessage="You stopped after {time}"
        description="Divider label shown when the user interrupts a turn, including elapsed time"
        values={{ time: timeLabel }}
      />
    ) : (
      <FormattedMessage
        id="localConversation.workedFor"
        defaultMessage="Worked for {time}"
        description="Divider shown between agent activity and the final assistant response in a completed turn"
        values={{ time: timeLabel }}
      />
    );

  return (
    <span className={clsx("text-token-foreground/60", className)}>
      {label}
    </span>
  );
}
