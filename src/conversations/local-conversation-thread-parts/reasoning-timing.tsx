// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Streaming reasoning label and elapsed-time helpers.

import * as React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  formatElapsedDuration,
  useInterval,
} from "../../boundaries/onboarding-commons-externals.facade";

export function renderThinkingLabel(
  isStreaming: boolean,
  elapsed: string | null,
) {
  if (isStreaming) {
    return (
      <FormattedMessage
        id="reasoningItem.thinking"
        defaultMessage="Thinking"
        description="Message shown when AI is currently thinking"
      />
    );
  }
  if (elapsed) {
    return (
      <FormattedMessage
        id="reasoningItem.thoughtWithElapsed"
        defaultMessage="Thought for {elapsed}"
        description="Message shown when AI has finished thinking, including elapsed time"
        values={{ elapsed }}
      />
    );
  }
  return (
    <FormattedMessage
      id="reasoningItem.thought"
      defaultMessage="Thought"
      description="Message shown when AI has finished thinking"
    />
  );
}

export function useThinkingDuration(isStreaming: boolean): string | null {
  const [now, setNow] = React.useState(() => Date.now());
  const [startTime, setStartTime] = React.useState<number | null>(() =>
    isStreaming ? Date.now() : null,
  );
  const [finalElapsedMs, setFinalElapsedMs] = React.useState<number | null>(
    null,
  );
  const wasStreamingRef = React.useRef(isStreaming);

  const onStart = React.useEffectEvent((timestamp: number) => {
    setStartTime(timestamp);
    setFinalElapsedMs(null);
    setNow(timestamp);
  });
  const onStop = React.useEffectEvent((start: number) => {
    const stopTime = Date.now();
    setFinalElapsedMs(stopTime - start);
    setNow(stopTime);
    setStartTime(null);
  });

  React.useEffect(() => {
    const wasStreaming = wasStreamingRef.current;
    if (!wasStreaming && isStreaming) onStart(Date.now());
    if (
      wasStreaming &&
      !isStreaming &&
      startTime != null &&
      finalElapsedMs == null
    ) {
      onStop(startTime);
    }
    wasStreamingRef.current = isStreaming;
  }, [finalElapsedMs, isStreaming, startTime]);

  useInterval(
    () => {
      if (isStreaming) setNow(Date.now());
    },
    isStreaming ? 1000 : null,
  );

  const elapsedMs =
    finalElapsedMs ??
    (startTime != null && now >= startTime ? now - startTime : 0);
  if (elapsedMs <= 0) return null;
  return formatElapsedDuration(elapsedMs);
}
