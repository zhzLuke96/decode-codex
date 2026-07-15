// Restored from ref/webview/assets/platform-BWhOK2AS.js
import { _appScopeC, _appScopeT } from "../boundaries/app-scope";
import { _vscodeApiA, vscodeApiU } from "../boundaries/vscode-api";
type HostPlatform = "darwin" | "linux" | "web" | "win32" | string;
export type CodexPlatform = "linux" | "macOS" | "windows";
type OsInfoQueryResult = {
  data?: {
    platform?: HostPlatform | null;
  } | null;
};
const osInfoQuery = _vscodeApiA(_appScopeT, "os-info", {
  staleTime: vscodeApiU.INFINITE,
});
const platformSignal = _appScopeC(_appScopeT, ({ get }) => {
  const osInfo = get(osInfoQuery) as OsInfoQueryResult;
  return resolveCodexPlatform(osInfo.data?.platform);
});
function resolveBrowserPlatform(): CodexPlatform {
  const platform = typeof navigator > "u" ? "" : (navigator.platform ?? "");
  return platform.startsWith("Mac")
    ? "macOS"
    : platform.startsWith("Win")
      ? "windows"
      : "linux";
}
function normalizeHostPlatform(platform: HostPlatform): CodexPlatform {
  return platform === "win32"
    ? "windows"
    : platform === "darwin"
      ? "macOS"
      : "linux";
}
function resolveCodexPlatform(
  platform: HostPlatform | null | undefined,
): CodexPlatform {
  return platform != null && platform !== "web"
    ? normalizeHostPlatform(platform)
    : resolveBrowserPlatform();
}
export { platformSignal, osInfoQuery, resolveCodexPlatform };
