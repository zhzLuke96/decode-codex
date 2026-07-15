// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Forced desktop app-update "restart required" banner. Shows a warning toast with
// a live countdown to the relaunch deadline and a "Restart now" button.
import { useEffect, useState } from "react";
import { FormattedMessage, FormattedRelativeTime } from "../vendor/react-intl";
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import { toastApiSignal } from "../ui/toast-signal";
import {
  appName,
  Button,
  relaunchNoticeSignal,
  useRelaunchApp,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

const MS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const RELAUNCH_NOTICE_TOAST_ID = "app-update-relaunch-notice";

interface RelaunchNotice {
  deadlineAtMs: number;
  reportedAtMs: number;
  dismissable: boolean;
}

type RelaunchDeadlineUnit = "minute" | "hour" | "day";

interface RelaunchDeadlineParts {
  unit: RelaunchDeadlineUnit;
  value: number;
}

export interface AppUpdateRelaunchNoticeEffectProps {
  relaunchNotice?: RelaunchNotice | null;
}

export function AppUpdateRelaunchNoticeEffect({
  relaunchNotice: relaunchNoticeProp,
}: AppUpdateRelaunchNoticeEffectProps = {}): null {
  const store = useAppScopeStore();
  const relaunchNoticeFromSignal = useSignalValue(
    relaunchNoticeSignal,
  ) as RelaunchNotice | null;
  const relaunchApp = useRelaunchApp() as () => void;
  const relaunchNotice =
    relaunchNoticeProp === undefined
      ? relaunchNoticeFromSignal
      : relaunchNoticeProp;

  useEffect(() => {
    if (relaunchNotice == null) return;
    return store.get(toastApiSignal).warning(
      <FormattedMessage
        id="appUpdate.relaunchNotice.title"
        defaultMessage="Restart required {deadline}"
        description="Title in the forced desktop app update warning popup"
        values={{
          deadline: (
            <RelaunchDeadline
              key={`deadline-${relaunchNotice.reportedAtMs}`}
              deadlineAtMs={relaunchNotice.deadlineAtMs}
              reportedAtMs={relaunchNotice.reportedAtMs}
            />
          ),
        }}
      />,
      {
        description: (
          <div className="mt-1 flex items-center justify-between gap-3">
            <FormattedMessage
              id="appUpdate.relaunchNotice.body"
              defaultMessage="{appName} needs to restart to finish installing an update"
              description="Body text in the forced desktop app update warning popup"
              values={{ appName }}
            />
            <Button color="primary" onClick={relaunchApp} size="default">
              <FormattedMessage
                id="appUpdate.relaunchNotice.restartNow"
                defaultMessage="Restart now"
                description="Button label in the forced desktop app update warning popup"
              />
            </Button>
          </div>
        ),
        duration: 0,
        hasCloseButton: relaunchNotice.dismissable,
        id: RELAUNCH_NOTICE_TOAST_ID,
      },
    ).close;
  }, [relaunchApp, relaunchNotice, store]);

  return null;
}

export interface RelaunchDeadlineProps {
  deadlineAtMs: number;
  reportedAtMs: number;
}

export function RelaunchDeadline({
  deadlineAtMs,
  reportedAtMs,
}: RelaunchDeadlineProps) {
  const now = useCurrentTime(reportedAtMs);
  const deadline = computeRelaunchDeadline(deadlineAtMs, now);
  if (deadline == null) {
    return (
      <FormattedMessage
        id="appUpdate.relaunchNotice.deadlineNow"
        defaultMessage="now"
        description="Deadline text in the forced desktop app update warning popup once restart is already required"
      />
    );
  }
  return (
    <FormattedRelativeTime
      numeric="always"
      unit={deadline.unit}
      value={deadline.value}
    />
  );
}

function useCurrentTime(initialMs: number): number {
  const [now, setNow] = useState(initialMs);
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(Date.now());
    }, MS_PER_MINUTE);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  return now;
}

function computeRelaunchDeadline(
  deadlineAtMs: number,
  nowMs: number,
): RelaunchDeadlineParts | null {
  const remainingMs = deadlineAtMs - nowMs;
  if (remainingMs <= 0) return null;
  const minutes = Math.ceil(remainingMs / MS_PER_MINUTE);
  if (minutes < MINUTES_PER_HOUR) return { unit: "minute", value: minutes };
  const hours = Math.ceil(minutes / MINUTES_PER_HOUR);
  if (hours < HOURS_PER_DAY) return { unit: "hour", value: hours };
  return { unit: "day", value: Math.ceil(hours / HOURS_PER_DAY) };
}
