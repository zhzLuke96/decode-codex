// Restored from ref/webview/assets/filesystem-media-src-Wi28Ksng.js
import * as sourceRuntime from "../boundaries/src-l0hb-mz-p";
const FILESYSTEM_MEDIA_SCHEME = "app://fs";
const FILESYSTEM_MEDIA_PATH_PREFIX = "/@fs";
export function filesystemMediaPath(path: string) {
  return buildFilesystemMediaPath(path);
}
export function filesystemMediaSrc(path: string) {
  return `${FILESYSTEM_MEDIA_SCHEME}${buildFilesystemMediaPath(path)}`;
}
function buildFilesystemMediaPath(path: string) {
  const normalizedPath = sourceRuntime.srcFr(sourceRuntime.srcIr(path));
  return `${FILESYSTEM_MEDIA_PATH_PREFIX}${encodeURI(normalizedPath).replaceAll("#", "%23").replaceAll("?", "%3F")}`;
}
