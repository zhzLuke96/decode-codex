// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Download an image (data: URL or remote) and hand its base64 contents to the
// host "save-file" command.
import { encodeBase64Bytes } from "../utils/base64";
import {
  sendHostRequest,
  logger,
} from "../boundaries/onboarding-commons-externals.facade";

function decodeDataUrlToBase64(dataUrl: string): string {
  const commaIndex = dataUrl.indexOf(",");
  const header = dataUrl.slice(5, commaIndex);
  const payload = dataUrl.slice(commaIndex + 1);
  return /;base64/i.test(header)
    ? payload
    : encodeBase64Bytes(new TextEncoder().encode(decodeURIComponent(payload)));
}

async function readImageAsBase64(src: string): Promise<string | null> {
  if (src.startsWith("data:")) return decodeDataUrlToBase64(src);
  const response = await fetch(src);
  return response.ok
    ? encodeBase64Bytes(new Uint8Array(await response.arrayBuffer()))
    : null;
}

export interface DownloadImageArgs {
  downloadSrc: string;
  suggestedFilename: string;
}

export async function downloadImage({
  downloadSrc,
  suggestedFilename,
}: DownloadImageArgs): Promise<boolean> {
  try {
    const contentsBase64 = await readImageAsBase64(downloadSrc);
    if (contentsBase64 == null) return false;
    await sendHostRequest("save-file", {
      params: { kind: "contents", suggestedFilename, contentsBase64 },
    });
    return true;
  } catch (error) {
    logger.warning("Failed to download image", {
      safe: {},
      sensitive: { error },
    });
    return false;
  }
}
