// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import type { MouseEvent } from "react";
import clsx from "clsx";
import { SpeakerIcon, SpeakerIcon2, SpeakerIcon3 } from "../../icons/speaker";
import { UseRecordingWaveformIcon } from "../../icons/use-recording-waveform-icon";
import { WaveformIcon } from "../../icons/waveform-icon";
import { XIcon } from "../../icons/x-icon";
import { Spinner } from "../../ui/spinner";
import { Tooltip } from "../../ui/tooltip-b";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../../vendor/react-intl";
import type {
  RealtimeVoiceButtonProps,
  RealtimeVoiceControlButtonProps,
} from "./types";
const realtimeVoiceMessages = defineMessages({
  start: {
    id: "avatarOverlay.startRealtimeVoice",
    defaultMessage: "Start realtime voice",
    description:
      "Accessible label and tooltip for starting realtime voice from the floating avatar",
  },
  stop: {
    id: "avatarOverlay.stopRealtimeVoice",
    defaultMessage: "Stop realtime voice",
    description:
      "Accessible label and tooltip for stopping realtime voice from the floating avatar",
  },
  starting: {
    id: "avatarOverlay.startingRealtimeVoice",
    defaultMessage: "Starting realtime voice",
    description:
      "Accessible label and tooltip while realtime voice starts from the floating avatar",
  },
  muteMicrophone: {
    id: "avatarOverlay.muteMicrophone",
    defaultMessage: "Mute microphone",
    description:
      "Accessible label and tooltip for muting microphone input from the floating avatar",
  },
  unmuteMicrophone: {
    id: "avatarOverlay.unmuteMicrophone",
    defaultMessage: "Unmute microphone",
    description:
      "Accessible label and tooltip for unmuting microphone input from the floating avatar",
  },
  muteOutput: {
    id: "avatarOverlay.muteOutput",
    defaultMessage: "Mute realtime voice",
    description:
      "Accessible label and tooltip for showing realtime voice output as captions from the floating avatar",
  },
  unmuteOutput: {
    id: "avatarOverlay.unmuteOutput",
    defaultMessage: "Unmute realtime voice",
    description:
      "Accessible label and tooltip for resuming realtime voice audio output from the floating avatar",
  },
});
export function RealtimeVoiceButton({
  areControlsVisible = false,
  canRevealControls = true,
  canStart,
  isRealtimeVoiceSurfaceVisible = false,
  isMicrophoneMuted = false,
  isMuted = false,
  onStart,
  onStop,
  onToggleMicrophoneMute,
  onToggleMute,
  phase,
  waveformCanvasRef,
}: RealtimeVoiceButtonProps) {
  const intl = useIntl();
  const isStarted = phase !== "inactive";
  const isStarting = phase === "starting";
  if (!isStarted && !canStart) return null;
  const isActive = phase === "active";
  const canShowExpandedControls =
    isActive && onToggleMicrophoneMute != null && onToggleMute != null;
  const revealControlsClassName = canRevealControls
    ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100"
    : null;
  if (canShowExpandedControls) {
    const controlsClassName = clsx(
      "no-drag absolute bottom-0 left-0 z-40 flex items-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary p-0.5 text-token-text-secondary shadow-lg shadow-black/20 backdrop-blur-sm forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
      areControlsVisible
        ? "pointer-events-auto opacity-100"
        : ["pointer-events-none opacity-0", revealControlsClassName],
    );
    const microphoneLabel = intl.formatMessage(
      isMicrophoneMuted
        ? realtimeVoiceMessages.unmuteMicrophone
        : realtimeVoiceMessages.muteMicrophone,
    );
    const microphoneTooltipMessage = isMicrophoneMuted
      ? realtimeVoiceMessages.unmuteMicrophone
      : realtimeVoiceMessages.muteMicrophone;
    const microphoneIcon = isMicrophoneMuted ? (
      <SpeakerIcon2 className="icon-xs" />
    ) : (
      <UseRecordingWaveformIcon className="icon-xs" />
    );
    const outputLabel = intl.formatMessage(
      isMuted
        ? realtimeVoiceMessages.unmuteOutput
        : realtimeVoiceMessages.muteOutput,
    );
    const outputTooltipMessage = isMuted
      ? realtimeVoiceMessages.unmuteOutput
      : realtimeVoiceMessages.muteOutput;
    const outputIcon = isMuted ? (
      <SpeakerIcon className="icon-xs" />
    ) : (
      <SpeakerIcon3 className="icon-xs" />
    );
    const stopLabel = intl.formatMessage(realtimeVoiceMessages.stop);
    const stopIcon = (
      <>
        <canvas
          ref={waveformCanvasRef}
          className="h-3 w-7 shrink-0 text-white group-hover/realtime-voice-stop:hidden group-focus-visible/realtime-voice-stop:hidden"
          aria-hidden="true"
        />
        <XIcon className="icon-xs hidden group-hover/realtime-voice-stop:block group-focus-visible/realtime-voice-stop:block" />
      </>
    );
    return (
      <div
        className={controlsClassName}
        data-avatar-overlay-hit-region="realtime-voice"
      >
        <RealtimeVoiceControlButton
          ariaLabel={microphoneLabel}
          isPressed={isMicrophoneMuted}
          tooltipContent={<FormattedMessage {...microphoneTooltipMessage} />}
          onClick={onToggleMicrophoneMute}
        >
          {microphoneIcon}
        </RealtimeVoiceControlButton>
        <RealtimeVoiceControlButton
          ariaLabel={outputLabel}
          isPressed={isMuted}
          tooltipContent={<FormattedMessage {...outputTooltipMessage} />}
          onClick={onToggleMute}
        >
          {outputIcon}
        </RealtimeVoiceControlButton>
        <RealtimeVoiceControlButton
          ariaLabel={stopLabel}
          className="group/realtime-voice-stop w-9 !bg-token-charts-blue !text-white hover:!bg-token-charts-blue/90 active:!bg-token-charts-blue/80"
          tooltipContent={<FormattedMessage {...realtimeVoiceMessages.stop} />}
          onClick={() => {
            onStop?.();
          }}
        >
          {stopIcon}
        </RealtimeVoiceControlButton>
      </div>
    );
  }
  const tooltipMessage = isStarting
    ? realtimeVoiceMessages.starting
    : isStarted
      ? realtimeVoiceMessages.stop
      : realtimeVoiceMessages.start;
  const ariaLabel = intl.formatMessage(tooltipMessage);
  const cursorClassName = isStarting ? "cursor-default" : "cursor-interaction";
  const buttonColorClassName =
    isActive && !isRealtimeVoiceSurfaceVisible
      ? "bg-token-charts-blue text-white hover:bg-token-charts-blue/90 active:bg-token-charts-blue/80"
      : "bg-token-main-surface-primary text-token-text-secondary hover:text-token-foreground";
  const buttonClassName = clsx(
    "group/realtime-voice no-drag absolute bottom-0 left-0 z-40 flex size-8 items-center justify-center rounded-full border border-token-border shadow-lg shadow-black/20 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
    cursorClassName,
    buttonColorClassName,
    isStarted && !isRealtimeVoiceSurfaceVisible
      ? "opacity-100"
      : areControlsVisible
        ? "pointer-events-auto opacity-100"
        : [
            "pointer-events-none opacity-0 focus-visible:pointer-events-auto focus-visible:opacity-100",
            revealControlsClassName,
          ],
  );
  const buttonIcon =
    isRealtimeVoiceSurfaceVisible && isActive ? (
      <XIcon className="icon-xs" />
    ) : isStarting ? (
      <Spinner className="icon-xs" />
    ) : isActive ? (
      <>
        <canvas
          ref={waveformCanvasRef}
          className="h-3 w-7 shrink-0 text-white group-hover/realtime-voice:hidden group-focus-visible/realtime-voice:hidden"
          aria-hidden="true"
        />
        <XIcon className="icon-xs hidden group-hover/realtime-voice:block group-focus-visible/realtime-voice:block" />
      </>
    ) : (
      <WaveformIcon className="icon-xs" />
    );
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isStarted) onStop?.();
    else onStart?.();
  };
  return (
    <Tooltip tooltipContent={<FormattedMessage {...tooltipMessage} />}>
      <button
        type="button"
        aria-label={ariaLabel}
        disabled={isStarting}
        className={buttonClassName}
        data-avatar-overlay-hit-region="realtime-voice"
        onClick={handleClick}
      >
        {buttonIcon}
      </button>
    </Tooltip>
  );
}
function RealtimeVoiceControlButton({
  ariaLabel,
  children,
  className,
  isPressed,
  onClick,
  tooltipContent,
}: RealtimeVoiceControlButtonProps) {
  const pressedClassName =
    isPressed && "bg-token-foreground/10 text-token-foreground";
  const buttonClassName = clsx(
    "flex size-7 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-foreground/10 hover:text-token-foreground focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
    pressedClassName,
    className,
  );
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClick();
  };
  return (
    <Tooltip tooltipContent={tooltipContent}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-pressed={isPressed}
        className={buttonClassName}
        onClick={handleClick}
      >
        {children}
      </button>
    </Tooltip>
  );
}
