// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { ArrowUpIcon } from "../../icons/arrow-up-icon";
import { Button } from "../../ui/button";
import {
  initPullRequestFooterLayoutChunk,
  PullRequestFooterRoot,
} from "../../composer/pull-request-footer-item/root";
import { formatRecordingDuration } from "../../utils/use-recording-waveform";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { initStopIconChunk, StopIcon } from "../../icons/stop-icon";
import { Tooltip } from "../../ui/tooltip-b";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { ComposerContextButton } from "./context-button";
import { dictationMessages } from "./messages";
import type { DictationRecordingFooterProps, FooterAction } from "./types";

const COMPACT_COMPOSER_CONTROLS_GATE = "2700454473";

function noop() {}
function RecordingControlFooter({
  leadingAccessory,
  noBottomMargin,
  primaryAction,
  recordingDurationMs,
  stopAction,
  tooltipPortalContainer,
  waveformCanvasRef,
}: {
  leadingAccessory?: React.ReactNode;
  noBottomMargin?: boolean;
  primaryAction?: FooterAction | null;
  recordingDurationMs: number;
  stopAction: FooterAction;
  tooltipPortalContainer?: HTMLElement | null;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
}) {
  const compactComposerControlsEnabled = useGateValue(
    COMPACT_COMPOSER_CONTROLS_GATE,
  );
  const marginClassName = noBottomMargin ? "mb-0" : "mb-2";
  const accessory =
    leadingAccessory === undefined ? (
      <ComposerContextButton disabled onOpen={noop} />
    ) : (
      leadingAccessory
    );
  return (
    <PullRequestFooterRoot
      className={clsx("flex items-center gap-2 px-2", marginClassName)}
    >
      {accessory}
      <div className="flex h-token-button-composer min-w-0 flex-1 items-center">
        <canvas
          ref={waveformCanvasRef}
          className="h-token-button-composer w-full text-token-foreground"
        />
      </div>
      <span className="text-sm text-token-foreground/70 tabular-nums">
        {formatRecordingDuration(recordingDurationMs)}
      </span>
      <Tooltip
        tooltipContent={stopAction.tooltipContent}
        sideOffset={4}
        portalContainer={tooltipPortalContainer}
      >
        <Button
          size="composer"
          color="secondary"
          uniform
          aria-label={stopAction.ariaLabel}
          onClick={stopAction.onClick}
          disabled={stopAction.disabled}
        >
          <StopIcon
            className={compactComposerControlsEnabled ? "icon-xs" : "icon-2xs"}
          />
        </Button>
      </Tooltip>
      {primaryAction == null ? null : (
        <Tooltip
          tooltipContent={primaryAction.tooltipContent}
          sideOffset={4}
          portalContainer={tooltipPortalContainer}
        >
          <button
            type="button"
            className={clsx(
              "bg-token-foreground focus-visible:outline-token-button-background cursor-interaction size-token-button-composer flex items-center justify-center rounded-full p-0.5 transition-opacity focus-visible:outline-2",
              primaryAction.disabled && "cursor-default opacity-50",
            )}
            aria-label={primaryAction.ariaLabel}
            onClick={primaryAction.onClick}
            disabled={primaryAction.disabled}
          >
            {primaryAction.icon}
          </button>
        </Tooltip>
      )}
    </PullRequestFooterRoot>
  );
}
function DictationRecordingFooter({
  isTranscribing,
  recordingDurationMs,
  waveformCanvasRef,
  stopDictation,
  leadingAccessory,
  noBottomMargin = false,
  tooltipPortalContainer,
}: DictationRecordingFooterProps) {
  const intl = useIntl();
  const compactComposerControlsEnabled = useGateValue(
    COMPACT_COMPOSER_CONTROLS_GATE,
  );
  const stopAction: FooterAction = {
    tooltipContent: <FormattedMessage {...dictationMessages.stopTooltip} />,
    ariaLabel: intl.formatMessage(dictationMessages.stopAria),
    onClick: () => stopDictation("insert"),
    disabled: isTranscribing,
  };
  const submitAction: FooterAction = {
    tooltipContent: (
      <FormattedMessage
        id="composer.dictation.submit.tooltip"
        defaultMessage="Transcribe and send"
        description="Tooltip for the dictation send button"
      />
    ),
    ariaLabel: intl.formatMessage({
      id: "composer.dictation.submit.aria",
      defaultMessage: "Transcribe and send",
      description: "Aria label for the dictation send button",
    }),
    onClick: () => stopDictation("send"),
    disabled: isTranscribing,
    icon: (
      <ArrowUpIcon
        className={clsx(
          compactComposerControlsEnabled ? "icon-xs" : "icon-sm",
          "text-token-dropdown-background",
        )}
      />
    ),
  };
  return (
    <RecordingControlFooter
      recordingDurationMs={recordingDurationMs}
      waveformCanvasRef={waveformCanvasRef}
      leadingAccessory={leadingAccessory}
      noBottomMargin={noBottomMargin}
      tooltipPortalContainer={tooltipPortalContainer}
      stopAction={stopAction}
      primaryAction={submitAction}
    />
  );
}
export function initDictationRecordingFooterChunk(): void {
  initPullRequestFooterLayoutChunk();
  initStopIconChunk();
  void DictationRecordingFooter;
  void RecordingControlFooter;
}
export { DictationRecordingFooter, RecordingControlFooter };
