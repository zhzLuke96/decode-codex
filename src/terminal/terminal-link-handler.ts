// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// xterm.js link handler that routes terminal hyperlink activations through the
// shared external-link opener with a terminal-specific initiator tag.
import { openExternalLink } from "../boundaries/onboarding-commons-externals.facade";

export function activateTerminalLink(
  event: MouseEvent,
  href: string | undefined,
): void {
  if (href) {
    openExternalLink({
      event,
      href,
      initiator: "terminal_link_click",
    });
  }
}

export const terminalLinkHandler = {
  activate: activateTerminalLink,
};
