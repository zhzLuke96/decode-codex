// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hover subtitle for opening a linked conversation end-resource.

import { FormattedMessage } from "../../../vendor/react-intl";
import { ExternalLinkIcon } from "../../../icons/external-link-icon";
import { ExternalOpenLink } from "../../../runtime/external-open-link-runtime";
import type { EndResourceOpenSubtitleProps } from "./types";

export function EndResourceOpenSubtitle({
  browserName,
  fallbackToDefaultBrowser,
  href,
  openTarget,
}: EndResourceOpenSubtitleProps) {
  const subtitle =
    browserName == null ? (
      fallbackToDefaultBrowser ? (
        <FormattedMessage
          id="localConversation.endResource.openInDefaultBrowserSubtitle"
          defaultMessage="Open in default browser"
          description="Fallback hover subtitle for opening a linked conversation resource when the system browser name is unavailable"
        />
      ) : (
        <FormattedMessage
          id="localConversation.endResource.openInBrowserSubtitle"
          defaultMessage="Open in browser"
          description="Fallback hover subtitle for opening a linked conversation resource when the browser name is unavailable"
        />
      )
    ) : (
      <FormattedMessage
        id="localConversation.endResource.openInNamedBrowserSubtitle"
        defaultMessage="Open in {browser}"
        description="Hover subtitle for opening a linked conversation resource in the user's default browser"
        values={{ browser: browserName }}
      />
    );

  return (
    <>
      {subtitle}
      <ExternalOpenLink
        className="icon-2xs"
        ExternalIcon={ExternalLinkIcon}
        href={href}
        openTarget={openTarget}
      />
    </>
  );
}
