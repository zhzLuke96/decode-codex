// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Platform-aware inline action for opening a linked conversation end-resource.

import { FormattedMessage } from "../../../vendor/react-intl";
import {
  OpenTargetsPrefetch,
  useOpenTargets,
} from "../../../runtime/open-targets-query-runtime";
import { PlatformGate } from "../../../app-shell/platform-gate";
import { EndResourceOpenSubtitle } from "./open-subtitle";
import type { EndResourceOpenActionProps, OpenTarget } from "./types";

export function isDefaultNativeOpenTarget(target: OpenTarget): boolean {
  return (
    target.default === true &&
    target.kind === "native" &&
    target.appPath != null
  );
}

export function EndResourceOpenAction({
  cwd,
  hostId,
  href,
  openTarget,
  shouldLoadTargets,
}: EndResourceOpenActionProps) {
  const { canLoadTargets, targets } = useOpenTargets({
    cwd,
    hostId,
    openPath: href,
  });
  const defaultBrowserName: string | null =
    targets.find(isDefaultNativeOpenTarget)?.label ?? null;

  const prefetch =
    canLoadTargets && shouldLoadTargets && openTarget !== "in-app-browser" ? (
      <OpenTargetsPrefetch cwd={cwd} hostId={hostId} openPath={href} />
    ) : null;

  return (
    <>
      {prefetch}
      <PlatformGate electron>
        {openTarget === "in-app-browser" ? (
          <FormattedMessage
            id="localConversation.endResource.openLinkInCodexBrowserSubtitle"
            defaultMessage="Open"
            description="Hover subtitle for opening a linked conversation resource in the Codex browser"
          />
        ) : (
          <EndResourceOpenSubtitle
            browserName={defaultBrowserName}
            fallbackToDefaultBrowser
            href={href}
            openTarget={openTarget}
          />
        )}
      </PlatformGate>
      <PlatformGate browser chromeExtension extension>
        <EndResourceOpenSubtitle
          browserName={defaultBrowserName}
          fallbackToDefaultBrowser={false}
          href={href}
          openTarget={openTarget}
        />
      </PlatformGate>
    </>
  );
}
