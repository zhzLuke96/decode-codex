// Restored from ref/webview/assets/channel-ykMIcoPi.js
// Channel chunk restored from the Codex webview bundle.
import { invertC, invertL } from "./color-convert";

export const channel = (color: string, channelName: string): number =>
  invertL.lang.round(invertC.parse(color)[channelName]);
