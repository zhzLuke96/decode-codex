// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline indicator shown on a browser side-panel tab when it captures media or plays audio.
import { FormattedMessage } from "../vendor/react-intl";
import { VideoCameraIcon } from "../icons/video-camera-icon";
import { SpeakerWaveIcon } from "../icons/speaker-wave-icon";

export type BrowserTabMediaIndicatorProps = {
  isAudible: boolean;
  isCapturingUserMedia: boolean;
};

export function BrowserTabMediaIndicator({
  isAudible,
  isCapturingUserMedia,
}: BrowserTabMediaIndicatorProps) {
  if (isCapturingUserMedia) {
    return (
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-token-charts-red text-white">
        <VideoCameraIcon aria-hidden="true" className="size-3" />
        <span className="sr-only">
          <FormattedMessage
            id="thread.sidePanel.browserTab.usingCameraOrMicrophone"
            defaultMessage="Using camera or microphone"
            description="Accessible label for a browser tab that is using the camera or microphone"
          />
        </span>
      </span>
    );
  }
  if (!isAudible) return null;
  return (
    <span className="flex shrink-0 items-center text-token-text-secondary">
      <SpeakerWaveIcon aria-hidden="true" className="icon-xs" />
      <span className="sr-only">
        <FormattedMessage
          id="thread.sidePanel.browserTab.playingAudio"
          defaultMessage="Playing audio"
          description="Accessible label for a browser tab that is playing audio"
        />
      </span>
    </span>
  );
}
