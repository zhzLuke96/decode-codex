// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// App build-channel helpers shared by debug/eval-control surfaces.
import { BuildFlavors } from "../main/boundaries/shared-node-runtime-app-brand";

type BuildChannelGlobal = typeof globalThis & {
  __APP_BUILD_CHANNEL__?: unknown;
  process?: { env?: Record<string, string | undefined> };
};

export const AppBuildChannel = BuildFlavors;

function readBuildChannelCandidate(): string | null {
  const globalObject = globalThis as BuildChannelGlobal;
  const explicit = globalObject.__APP_BUILD_CHANNEL__;
  if (typeof explicit === "string") return explicit;

  const env = globalObject.process?.env;
  return (
    env?.CODEX_BUILD_CHANNEL ??
    env?.VITE_BUILD_CHANNEL ??
    env?.BUILD_CHANNEL ??
    null
  );
}

export function getAppBuildChannel(): string {
  return (
    AppBuildChannel.parse(readBuildChannelCandidate()) ?? AppBuildChannel.Prod
  );
}
