// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Divider showing how long the assistant worked on a turn (working / worked / stopped states).

import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { formatCompactDurationMs } from "../utils/duration-format";
import {
  ActivityDisclosurePaddedRegion,
  defaultLayoutTransition,
  useInterval,
} from "../boundaries/onboarding-commons-externals.facade";

export type TurnElapsedTimeStatus = "working" | "worked" | "stopped";

export type TurnElapsedTimeDividerProps = {
  status: TurnElapsedTimeStatus;
  startedAtMs: number;
  completedAtMs: number | null;
  className?: string;
};

export function TurnElapsedTimeDivider({
  status,
  startedAtMs,
  completedAtMs,
  className,
}: TurnElapsedTimeDividerProps) {
  const { timeLabel, elapsedMs } = useTurnElapsedTime({
    status,
    startedAtMs,
    completedAtMs,
  });

  let label = null;
  switch (status) {
    case "working":
      label =
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
        );
      break;
    case "worked":
      label = (
        <FormattedMessage
          id="localConversation.workedFor"
          defaultMessage="Worked for {time}"
          description="Divider shown between agent activity and the final assistant response in a completed turn"
          values={{ time: timeLabel }}
        />
      );
      break;
    case "stopped":
      label = (
        <FormattedMessage
          id="localConversation.userStoppedAfter"
          defaultMessage="You stopped after {time}"
          description="Divider label shown when the user interrupts a turn, including elapsed time"
          values={{ time: timeLabel }}
        />
      );
      break;
  }

  return (
    <span className={classNames("text-token-foreground/60", className)}>
      {label}
    </span>
  );
}

export type AnimatedTurnElapsedTimeDividerProps = {
  status: TurnElapsedTimeStatus;
  startedAtMs: number;
  completedAtMs: number | null;
};

export function AnimatedTurnElapsedTimeDivider({
  status,
  startedAtMs,
  completedAtMs,
}: AnimatedTurnElapsedTimeDividerProps) {
  return (
    <ActivityDisclosurePaddedRegion padding="offset">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={defaultLayoutTransition}
        style={{ overflow: "hidden" }}
      >
        <div className="text-size-chat flex min-h-0 flex-col items-start gap-2 overflow-hidden text-token-text-secondary">
          <TurnElapsedTimeDivider
            status={status}
            startedAtMs={startedAtMs}
            completedAtMs={completedAtMs}
          />
          <div className="w-full border-t border-current/20" />
        </div>
      </motion.div>
    </ActivityDisclosurePaddedRegion>
  );
}

export function useTurnElapsedTime({
  status,
  startedAtMs,
  completedAtMs,
}: TurnElapsedTimeDividerProps) {
  const [now, setNow] = useState(getNow);
  useInterval(
    () => {
      setNow(Date.now());
    },
    status === "working" && completedAtMs == null ? 1000 : null,
  );
  const elapsedMs = Math.max((completedAtMs ?? now) - startedAtMs, 0);
  return {
    timeLabel: formatCompactDurationMs(elapsedMs),
    elapsedMs,
  };
}

function getNow(): number {
  return Date.now();
}
