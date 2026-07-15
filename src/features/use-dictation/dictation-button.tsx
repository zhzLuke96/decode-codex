// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  initRegenerateIconChunk,
  RegenerateIcon,
} from "../../icons/regenerate-icon";
import { Spinner } from "../../ui/spinner";
import { initStopIconChunk, StopIcon } from "../../icons/stop-icon";
import { Tooltip } from "../../ui/tooltip-b";
import {
  initUseRecordingWaveformIconChunk,
  UseRecordingWaveformIcon,
} from "../../utils/use-recording-waveform";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { dictationMessages } from "./messages";
import type { DictationButtonProps } from "./types";

const COMPACT_COMPOSER_CONTROLS_GATE = "2700454473";
const HOLD_TO_DICTATE_DELAY_MS = 150;
function DictationButton({
  className,
  color = "ghost",
  idleIcon,
  isDictating = false,
  isVisible,
  isTranscribing,
  canRetryDictation,
  disabled = false,
  retryDictation,
  shortcutLabel,
  size = "composer",
  startDictation,
  stopDictation,
  tooltipPortalContainer,
}: DictationButtonProps) {
  const intl = useIntl();
  const holdTimeoutRef = React.useRef<number | null>(null);
  const holdDictationActiveRef = React.useRef(false);
  const holdStartPendingRef = React.useRef(false);
  const stopAfterHoldStartRef = React.useRef(false);
  const suppressNextClickRef = React.useRef(false);
  const compactComposerControlsEnabled = useGateValue(
    COMPACT_COMPOSER_CONTROLS_GATE,
  );
  React.useEffect(
    () => () => {
      if (holdTimeoutRef.current != null) {
        window.clearTimeout(holdTimeoutRef.current);
        holdTimeoutRef.current = null;
      }
    },
    [],
  );
  if (!isVisible) return null;
  const buttonState = isDictating
    ? "dictating"
    : canRetryDictation && !isTranscribing
      ? "retry"
      : "idle";
  const { ariaLabel, icon, tooltipContent } = dictationButtonStateUi({
    buttonState,
    idleIcon: idleIcon ?? (
      <UseRecordingWaveformIcon
        className={clsx(
          "icon-xs",
          compactComposerControlsEnabled && "text-token-foreground",
        )}
      />
    ),
    intl,
  });
  const clearHoldTimeout = () => {
    if (holdTimeoutRef.current != null) {
      window.clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
  };
  const stopHeldDictation = () => {
    clearHoldTimeout();
    if (!holdDictationActiveRef.current || stopDictation == null) return;
    holdDictationActiveRef.current = false;
    suppressNextClickRef.current = true;
    if (holdStartPendingRef.current) {
      stopAfterHoldStartRef.current = true;
      return;
    }
    stopDictation("insert");
  };
  return (
    <Tooltip
      tooltipContent={
        <span className="text-token-foreground">{tooltipContent}</span>
      }
      shortcut={buttonState === "idle" ? shortcutLabel : null}
      sideOffset={4}
      portalContainer={tooltipPortalContainer}
    >
      <Button
        className={className}
        color={color}
        size={size}
        uniform
        disabled={disabled}
        aria-label={ariaLabel}
        onPointerDown={(event) => {
          if (
            disabled ||
            buttonState !== "idle" ||
            stopDictation == null ||
            event.button !== 0
          ) {
            return;
          }
          event.currentTarget.setPointerCapture?.(event.pointerId);
          clearHoldTimeout();
          suppressNextClickRef.current = false;
          holdTimeoutRef.current = window.setTimeout(() => {
            holdTimeoutRef.current = null;
            holdDictationActiveRef.current = true;
            holdStartPendingRef.current = true;
            stopAfterHoldStartRef.current = false;
            startDictation().finally(() => {
              holdStartPendingRef.current = false;
              if (stopAfterHoldStartRef.current) {
                stopAfterHoldStartRef.current = false;
                stopDictation("insert");
              }
            });
          }, HOLD_TO_DICTATE_DELAY_MS);
        }}
        onPointerUp={(event) => {
          if (event.button !== 0) return;
          if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
            event.currentTarget.releasePointerCapture?.(event.pointerId);
          }
          if (holdTimeoutRef.current != null) {
            clearHoldTimeout();
            return;
          }
          stopHeldDictation();
        }}
        onPointerCancel={(event) => {
          if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
            event.currentTarget.releasePointerCapture?.(event.pointerId);
          }
          stopHeldDictation();
        }}
        onClick={() => {
          if (suppressNextClickRef.current) {
            suppressNextClickRef.current = false;
            return;
          }
          switch (buttonState) {
            case "dictating":
              stopDictation?.("insert");
              return;
            case "retry":
              retryDictation();
              return;
            case "idle":
              startDictation();
              return;
          }
        }}
      >
        {isTranscribing ? <Spinner className="icon-xs" /> : icon}
      </Button>
    </Tooltip>
  );
}
function dictationButtonStateUi({
  buttonState,
  idleIcon,
  intl,
}: {
  buttonState: "dictating" | "idle" | "retry";
  idleIcon: React.ReactNode;
  intl: ReturnType<typeof useIntl>;
}) {
  switch (buttonState) {
    case "dictating":
      return {
        ariaLabel: intl.formatMessage(dictationMessages.stopAria),
        icon: <StopIcon className="icon-xs" />,
        tooltipContent: <FormattedMessage {...dictationMessages.stopTooltip} />,
      };
    case "retry":
      return {
        ariaLabel: intl.formatMessage({
          id: "composer.dictation.retry.aria",
          defaultMessage: "Retry dictation",
          description:
            "Aria label for the button that retries composer dictation transcription",
        }),
        icon: <RegenerateIcon className="icon-xs" />,
        tooltipContent: (
          <FormattedMessage
            id="composer.dictation.retry.tooltip"
            defaultMessage="Retry dictation"
            description="Tooltip for the button that retries composer dictation transcription"
          />
        ),
      };
    case "idle":
      return {
        ariaLabel: intl.formatMessage({
          id: "composer.dictation.aria",
          defaultMessage: "Dictate",
          description: "Aria label for dictation button",
        }),
        icon: idleIcon,
        tooltipContent: (
          <FormattedMessage
            id="composer.dictation.tooltip"
            defaultMessage="Click to dictate or hold"
            description="Tooltip for the dictation button"
          />
        ),
      };
  }
}
export function initDictationButtonChunk(): void {
  initUseRecordingWaveformIconChunk();
  initRegenerateIconChunk();
  initStopIconChunk();
  void DictationButton;
}
export { DictationButton };
