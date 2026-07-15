// Restored from ref/webview/assets/use-fast-mode-personalized-estimate-BHhOBo0i.js
// Also covers ref/webview/assets/app-initial~app-main~new-thread-panel-page~home-announcements~upgrade-plan-dialog-LPN09Qmo.js
// use-fast-mode-personalized-estimate-BHhOBo0i chunk restored from the Codex webview bundle.
import { useAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { callCodexVscodeApi } from "../boundaries/vscode-api";
import { persistedAtom } from "../utils/persisted-atom";
import { useIsRemoteHost } from "../utils/use-is-remote-host";
import { defineMessages, useIntl } from "../vendor/react-intl";
export { LightningBoltIcon as FastModeHomeBannerIcon } from "../icons/lightning-bolt-icon";

type IntlLike = {
  formatMessage: (message: unknown, values?: Record<string, unknown>) => string;
};
type FastModeRolloutMetrics = {
  estimatedSavedMs: number;
  rolloutCountWithCompletedTurns: number;
};
type PersistedFastModeEstimate = FastModeRolloutMetrics & {
  computedAtMs: number;
};
type FastModeEstimateStatus = "failed" | "idle" | "ready";
type FastModeEstimate = {
  savedDuration: string;
  threadCountLabel: string;
};
type FastModePersonalizedEstimateResult = {
  estimate: FastModeEstimate | null;
  estimateStatus: FastModeEstimateStatus;
  isEstimateFreshForAnnouncement: boolean;
};
const MINIMUM_SAVED_DURATION_MS = 45 * 60 * 1000;
const ROLLOUT_LOOKBACK_MS = 10080 * 60 * 1000;
const MAX_ROLLOUTS = 128;
const REQUEST_BUCKET_MS = 60 * 60 * 1000;
const FAILURE_RETRY_DELAY_MS = 60 * 60 * 1000;
const ANNOUNCEMENT_FRESHNESS_MS = 24 * 60 * 60 * 1000;
const fastModePersonalizedEstimateAtom =
  persistedAtom<PersistedFastModeEstimate | null>(
    "fast-mode-personalized-estimate",
    null,
  );
const requestState: {
  failedAtMs: number | null;
  inFlight: Promise<void> | null;
  lastStartedBucket: number | null;
} = {
  failedAtMs: null,
  inFlight: null,
  lastStartedBucket: null,
};

export function initFastModePersonalizedEstimateChunk(): void {}

export function initFastModeHomeBannerIconChunk(): void {}

export function useFastModePersonalizedEstimate(
  enabled: boolean,
): FastModePersonalizedEstimateResult {
  const intl = useIntl();
  const isRemoteHost = useIsRemoteHost();
  const [persistedEstimate, setPersistedEstimate] = useAtom(
    fastModePersonalizedEstimateAtom,
  );
  const [activeEstimate, setActiveEstimate] =
    useState<PersistedFastModeEstimate | null>(null);
  const [estimateStatus, setEstimateStatus] =
    useState<FastModeEstimateStatus>("idle");
  const persistedEstimateRef = useRef(persistedEstimate);
  useEffect(() => {
    persistedEstimateRef.current = persistedEstimate;
  }, [persistedEstimate]);
  useEffect(() => {
    if (!enabled || isRemoteHost) {
      setActiveEstimate(null);
      setEstimateStatus("idle");
      return;
    }
    const cachedEstimate = persistedEstimateRef.current;
    const hasCachedEstimate = cachedEstimate != null;
    setActiveEstimate(cachedEstimate);
    setEstimateStatus(hasCachedEstimate ? "ready" : "idle");
    const now = Date.now();
    const currentBucket = getRequestBucket(now);
    if (
      requestState.inFlight != null ||
      requestState.lastStartedBucket === currentBucket ||
      (requestState.failedAtMs != null &&
        now - requestState.failedAtMs < FAILURE_RETRY_DELAY_MS)
    ) {
      return;
    }
    let cancelled = false;
    requestState.lastStartedBucket = currentBucket;
    requestState.inFlight = (async () => {
      try {
        const metrics = (await callCodexVscodeApi("fast-mode-rollout-metrics", {
          params: {
            startTimeMs: Date.now() - ROLLOUT_LOOKBACK_MS,
            maxRollouts: MAX_ROLLOUTS,
          },
        })) as FastModeRolloutMetrics | null;
        if (metrics == null) return;
        setPersistedEstimate({
          estimatedSavedMs: metrics.estimatedSavedMs,
          rolloutCountWithCompletedTurns:
            metrics.rolloutCountWithCompletedTurns,
          computedAtMs: Date.now(),
        });
        requestState.failedAtMs = null;
      } catch {
        requestState.failedAtMs = Date.now();
        if (!cancelled && !hasCachedEstimate) {
          setEstimateStatus("failed");
        }
      } finally {
        requestState.inFlight = null;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [enabled, isRemoteHost, setPersistedEstimate]);
  const estimate = useMemo(
    () =>
      !enabled ||
      isRemoteHost ||
      activeEstimate == null ||
      activeEstimate.rolloutCountWithCompletedTurns < 1 ||
      activeEstimate.estimatedSavedMs < MINIMUM_SAVED_DURATION_MS
        ? null
        : {
            threadCountLabel: formatThreadCount(
              intl,
              activeEstimate.rolloutCountWithCompletedTurns,
            ),
            savedDuration: formatSavedDuration(
              intl,
              activeEstimate.estimatedSavedMs,
            ),
          },
    [enabled, intl, isRemoteHost, activeEstimate],
  );
  if (!enabled || isRemoteHost) {
    return {
      estimate: null,
      estimateStatus: "idle",
      isEstimateFreshForAnnouncement: false,
    };
  }
  if (estimate == null || activeEstimate == null) {
    return {
      estimate: null,
      estimateStatus,
      isEstimateFreshForAnnouncement: false,
    };
  }
  return {
    estimate,
    estimateStatus,
    isEstimateFreshForAnnouncement: isFreshForAnnouncement(
      activeEstimate.computedAtMs,
    ),
  };
}
const fastModePersonalizedEstimateMessages = defineMessages({
  bodyPersonalized: {
    id: "codex.fastModeHomeBanner.body.personalized",
    defaultMessage:
      "Based on your work last week across {threadCountLabel}, Fast could have saved about {duration}. Increases plan usage.",
    description: "Personalized body shown in the Fast mode home banner",
  },
  threadCountOne: {
    id: "codex.fastModeHomeBanner.threadCount.one",
    defaultMessage: "{count} chat",
    description:
      "Thread count label used in the Fast mode home banner for a single thread",
  },
  threadCountOther: {
    id: "codex.fastModeHomeBanner.threadCount.other",
    defaultMessage: "{count} chats",
    description:
      "Thread count label used in the Fast mode home banner for multiple threads",
  },
  durationHoursLabel: {
    id: "codex.fastModeHomeBanner.duration.hoursLabel",
    defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
    description: "Hours label used in the Fast mode home banner duration",
  },
  durationMinutesLabel: {
    id: "codex.fastModeHomeBanner.duration.minutesLabel",
    defaultMessage: "{minutes, plural, one {# minute} other {# minutes}}",
    description: "Minutes label used in the Fast mode home banner duration",
  },
  durationHoursAndMinutes: {
    id: "codex.fastModeHomeBanner.duration.hoursAndMinutes",
    defaultMessage: "{hoursLabel} {minutesLabel}",
    description:
      "Duration label used in the Fast mode home banner when hours and minutes are both present",
  },
});
function isFreshForAnnouncement(
  computedAtMs: number,
  nowMs = Date.now(),
): boolean {
  return nowMs - computedAtMs <= ANNOUNCEMENT_FRESHNESS_MS;
}
function getRequestBucket(nowMs = Date.now()): number {
  return Math.floor(nowMs / REQUEST_BUCKET_MS);
}
function formatSavedDuration(intl: IntlLike, estimatedSavedMs: number): string {
  const savedMinutes = Math.max(1, Math.round(estimatedSavedMs / 60000));
  const hours = Math.floor(savedMinutes / 60);
  const minutes = savedMinutes % 60;
  const hoursLabel = intl.formatMessage(
    fastModePersonalizedEstimateMessages.durationHoursLabel,
    {
      hours,
    },
  );
  const minutesLabel = intl.formatMessage(
    fastModePersonalizedEstimateMessages.durationMinutesLabel,
    {
      minutes,
    },
  );
  if (hours > 0 && minutes > 0) {
    return intl.formatMessage(
      fastModePersonalizedEstimateMessages.durationHoursAndMinutes,
      {
        hoursLabel,
        minutesLabel,
      },
    );
  }
  return hours > 0 ? hoursLabel : minutesLabel;
}
function formatThreadCount(intl: IntlLike, threadCount: number): string {
  return intl.formatMessage(
    threadCount === 1
      ? fastModePersonalizedEstimateMessages.threadCountOne
      : fastModePersonalizedEstimateMessages.threadCountOther,
    {
      count: threadCount,
    },
  );
}
export { fastModePersonalizedEstimateMessages };
