// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { ComposerFooterRoot } from "../../composer/composer-footer";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { SpeakerIcon, SpeakerIcon2, SpeakerIcon3 } from "../../icons/speaker";
import { Spinner } from "../../ui/spinner";
import { Tooltip } from "../../ui/tooltip-b";
import { UseRecordingWaveformIcon } from "../../utils/use-recording-waveform";
import { XIcon } from "../../icons/x-icon";
import { ComposerContextButton } from "./context-button";
import type { RealtimeVoiceFooterProps } from "./types";
function noop() {}
function RealtimeVoiceFooter({
  isMicrophoneMuted,
  isMuted,
  phase,
  sendAction,
  toggleMicrophoneMute,
  toggleMute,
  waveformCanvasRef,
  stopRealtime,
  noBottomMargin = false,
  tooltipPortalContainer,
}: RealtimeVoiceFooterProps) {
  const intl = useIntl();
  const phaseUi = realtimePhaseUi(phase, intl, waveformCanvasRef);
  const sendControls = sendAction ?? (
    <>
      <Tooltip
        tooltipContent={
          isMicrophoneMuted ? (
            <FormattedMessage
              id="composer.realtime.unmuteMicrophone.tooltip"
              defaultMessage="Unmute microphone"
              description="Tooltip for the button that unmutes the user's microphone in realtime voice mode"
            />
          ) : (
            <FormattedMessage
              id="composer.realtime.muteMicrophone.tooltip"
              defaultMessage="Mute microphone"
              description="Tooltip for the button that mutes the user's microphone in realtime voice mode"
            />
          )
        }
        sideOffset={4}
        portalContainer={tooltipPortalContainer}
      >
        <Button
          size="composer"
          color="secondary"
          uniform
          aria-label={
            isMicrophoneMuted
              ? intl.formatMessage({
                  id: "composer.realtime.unmuteMicrophone.aria",
                  defaultMessage: "Unmute microphone",
                  description:
                    "Aria label for the button that unmutes the user's microphone in realtime voice mode",
                })
              : intl.formatMessage({
                  id: "composer.realtime.muteMicrophone.aria",
                  defaultMessage: "Mute microphone",
                  description:
                    "Aria label for the button that mutes the user's microphone in realtime voice mode",
                })
          }
          aria-pressed={isMicrophoneMuted}
          disabled={phase !== "active"}
          onClick={toggleMicrophoneMute}
        >
          {isMicrophoneMuted ? (
            <SpeakerIcon2 className="icon-2xs" />
          ) : (
            <UseRecordingWaveformIcon className="icon-2xs" />
          )}
        </Button>
      </Tooltip>
      <Tooltip
        tooltipContent={
          isMuted ? (
            <FormattedMessage
              id="composer.realtime.unmute.tooltip"
              defaultMessage="Unmute realtime voice"
              description="Tooltip for the button that unmutes realtime voice mode in the composer"
            />
          ) : (
            <FormattedMessage
              id="composer.realtime.mute.tooltip"
              defaultMessage="Mute realtime voice"
              description="Tooltip for the button that mutes realtime voice mode in the composer"
            />
          )
        }
        sideOffset={4}
        portalContainer={tooltipPortalContainer}
      >
        <Button
          size="composer"
          color="secondary"
          uniform
          aria-label={
            isMuted
              ? intl.formatMessage({
                  id: "composer.realtime.unmute.aria",
                  defaultMessage: "Unmute realtime voice",
                  description:
                    "Aria label for the button that unmutes realtime voice mode in the composer",
                })
              : intl.formatMessage({
                  id: "composer.realtime.mute.aria",
                  defaultMessage: "Mute realtime voice",
                  description:
                    "Aria label for the button that mutes realtime voice mode in the composer",
                })
          }
          aria-pressed={isMuted}
          disabled={phase !== "active"}
          onClick={toggleMute}
        >
          {isMuted ? (
            <SpeakerIcon className="icon-2xs" />
          ) : (
            <SpeakerIcon3 className="icon-2xs" />
          )}
        </Button>
      </Tooltip>
      <Tooltip
        tooltipContent={phaseUi.tooltipContent}
        sideOffset={4}
        portalContainer={tooltipPortalContainer}
      >
        <button
          type="button"
          className={clsx(
            "focus-visible:outline-token-button-background cursor-interaction flex h-token-button-composer min-w-14 items-center justify-center gap-1 rounded-full px-2 text-sm font-semibold leading-[18px] whitespace-nowrap focus-visible:outline-2 disabled:cursor-default",
            phaseUi.className,
          )}
          aria-label={phaseUi.ariaLabel}
          disabled={phase === "stopping"}
          onClick={stopRealtime}
        >
          {phaseUi.icon}
          {phaseUi.label}
        </button>
      </Tooltip>
    </>
  );
  return (
    <ComposerFooterRoot
      className={clsx(
        "flex items-center gap-2 px-2",
        noBottomMargin ? "mb-0" : "mb-2",
      )}
    >
      <ComposerContextButton disabled onOpen={noop} />
      <div className="min-w-0 flex-1" />
      <div className="flex shrink-0 items-center gap-2">{sendControls}</div>
    </ComposerFooterRoot>
  );
}
function realtimePhaseUi(
  phase: RealtimeVoiceFooterProps["phase"],
  intl: ReturnType<typeof useIntl>,
  waveformCanvasRef: RealtimeVoiceFooterProps["waveformCanvasRef"],
) {
  switch (phase) {
    case "starting":
      return {
        label: (
          <FormattedMessage
            id="composer.realtime.cancel.label"
            defaultMessage="Cancel"
            description="Label for the button that cancels realtime voice startup"
          />
        ),
        ariaLabel: intl.formatMessage({
          id: "composer.realtime.cancel.aria",
          defaultMessage: "Cancel realtime voice",
          description:
            "Aria label for the button that cancels realtime voice startup in the composer",
        }),
        tooltipContent: (
          <FormattedMessage
            id="composer.realtime.cancel.tooltip"
            defaultMessage="Cancel realtime voice"
            description="Tooltip for the button that cancels realtime voice startup in the composer"
          />
        ),
        icon: <XIcon className="icon-2xs" />,
        className:
          "bg-token-foreground text-token-dropdown-background enabled:hover:bg-token-foreground/80",
      };
    case "active":
      return {
        label: (
          <FormattedMessage
            id="composer.realtime.end.label"
            defaultMessage="End"
            description="Label for the button that ends realtime voice"
          />
        ),
        ariaLabel: intl.formatMessage({
          id: "composer.realtime.end.aria",
          defaultMessage: "End realtime voice",
          description:
            "Aria label for the button that ends realtime voice mode in the composer",
        }),
        tooltipContent: (
          <FormattedMessage
            id="composer.realtime.end.tooltip"
            defaultMessage="End realtime voice"
            description="Tooltip for the button that ends realtime voice mode in the composer"
          />
        ),
        icon: (
          <canvas
            ref={waveformCanvasRef}
            className="h-3 w-7 shrink-0 text-white"
            aria-hidden="true"
          />
        ),
        className:
          "bg-token-charts-blue text-white enabled:hover:bg-token-charts-blue/90 enabled:active:bg-token-charts-blue/80",
      };
    case "stopping":
      return {
        label: (
          <FormattedMessage
            id="composer.realtime.ending.label"
            defaultMessage="Ending…"
            description="Label for the button while realtime voice is ending"
          />
        ),
        ariaLabel: intl.formatMessage({
          id: "composer.realtime.ending.aria",
          defaultMessage: "Ending realtime voice",
          description:
            "Aria label for the button while realtime voice mode is ending in the composer",
        }),
        tooltipContent: (
          <FormattedMessage
            id="composer.realtime.ending.tooltip"
            defaultMessage="Ending realtime voice…"
            description="Tooltip for the button while realtime voice mode is ending in the composer"
          />
        ),
        icon: <Spinner className="icon-2xs" />,
        className: "bg-token-foreground text-token-dropdown-background",
      };
  }
}
export { RealtimeVoiceFooter };
