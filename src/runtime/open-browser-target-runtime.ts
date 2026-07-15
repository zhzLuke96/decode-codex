// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dispatches resource links through the host browser-opening bridge.
import { vscodeApiF as vscodeMessageBus } from "../boundaries/vscode-api";
import { normalizeExternalHref } from "../utils/external-link/normalize";
import { isBrowserOpenableUrl } from "./open-target-browser-runtime";

function normalizeHref(href: string): string {
  return /^www\./i.test(href) ? `https://${href}` : href;
}

function isNewTabGesture(event: {
  button?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
}): boolean {
  return event.button === 1 || event.metaKey === true || event.ctrlKey === true;
}

export function openInBrowserTarget({
  disposition,
  href,
  hostId,
  initiator,
  openTarget,
  openTargetIntent,
  originHostId,
  source = "manual",
  useExternalBrowser,
}: {
  disposition?: string;
  href: string;
  hostId?: string | null;
  initiator?: string;
  openTarget?: string;
  openTargetIntent?: string;
  originHostId?: string;
  source?: string;
  useExternalBrowser?: boolean;
}): boolean {
  if (!isBrowserOpenableUrl(href)) return false;
  vscodeMessageBus.dispatchMessage("open-in-browser", {
    disposition,
    hostId,
    initiator,
    openTarget,
    openTargetIntent,
    originHostId,
    source,
    useExternalBrowser,
    url: normalizeExternalHref(normalizeHref(href)),
  });
  return true;
}

export function handleOpenResourceLink({
  event,
  href,
  hostId,
  initiator,
  openTarget,
  originHostId,
}: {
  event: {
    button?: number;
    ctrlKey?: boolean;
    metaKey?: boolean;
    preventDefault(): void;
  };
  href: string;
  hostId?: string | null;
  initiator?: string;
  openTarget?: string;
  originHostId?: string;
}): boolean {
  if (!isBrowserOpenableUrl(href)) return false;
  event.preventDefault();
  const shouldOpenNewTab = isNewTabGesture(event);
  return openInBrowserTarget({
    disposition: shouldOpenNewTab ? "new-tab" : undefined,
    href,
    hostId,
    initiator,
    openTarget,
    openTargetIntent:
      openTarget == null && shouldOpenNewTab ? "alternate" : "default",
    originHostId,
  });
}

