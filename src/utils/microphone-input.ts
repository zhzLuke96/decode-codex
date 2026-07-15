// Restored from ref/webview/assets/microphone-input-C25vVSUx.js
// Opens a microphone MediaStream using the stored preferred input device.
import { readSettingValue } from "../settings/setting-storage";
type MicrophoneInputOptions = {
  channelCount?: number;
};
type MicrophoneInputDeviceId = string | null;
const microphoneInputDeviceIdSetting = {
  default: null as MicrophoneInputDeviceId,
  key: "microphoneInputDeviceId",
};
function buildAudioConstraints(
  deviceId: string | null,
  { channelCount }: MicrophoneInputOptions = {},
): MediaTrackConstraints {
  if (deviceId == null) {
    return channelCount == null
      ? {}
      : {
          channelCount,
        };
  }
  return channelCount == null
    ? {
        deviceId: {
          exact: deviceId,
        },
      }
    : {
        channelCount,
        deviceId: {
          exact: deviceId,
        },
      };
}
async function getFallbackMicrophoneInputStream(
  options: MicrophoneInputOptions,
) {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: buildAudioConstraints(null, options),
    });
  } catch (error) {
    if (
      !(error instanceof DOMException) ||
      error.name !== "NotSupportedError"
    ) {
      throw error;
    }
    const fallbackDevice = (
      await navigator.mediaDevices.enumerateDevices()
    ).find(
      (device) =>
        device.kind === "audioinput" &&
        device.deviceId.length > 0 &&
        device.deviceId !== "default",
    );
    if (fallbackDevice == null) throw error;
    return navigator.mediaDevices.getUserMedia({
      audio: buildAudioConstraints(fallbackDevice.deviceId, options),
    });
  }
}
function isStoredMicrophoneDeviceUnavailable(error: unknown) {
  return (
    error instanceof DOMException &&
    (error.name === "NotFoundError" || error.name === "OverconstrainedError")
  );
}
async function getMicrophoneInputStream(options: MicrophoneInputOptions = {}) {
  const preferredDeviceId = await readSettingValue(
    microphoneInputDeviceIdSetting,
  );
  if (preferredDeviceId == null) {
    return getFallbackMicrophoneInputStream(options);
  }
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: buildAudioConstraints(preferredDeviceId, options),
    });
  } catch (error) {
    if (!isStoredMicrophoneDeviceUnavailable(error)) throw error;
    return getFallbackMicrophoneInputStream(options);
  }
}
export function initMicrophoneInputChunk(): void {
  void getMicrophoneInputStream;
}

export { getMicrophoneInputStream };
