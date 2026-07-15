// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Boundary facade for pull request action rows, analytics, mutations, and merge controls.
import { getLocalConversationPath as routeToConversation } from "../conversations/local-conversation-route-runtime";
import { initAppgRouteAndIntlRuntime as initRouteHelpers } from "./appg-shared-runtime-initializers";
import { routeToPendingWorktree } from "./pending-worktree-route-runtime";
import { initProductEventRuntime as initPullRequestActionEventRuntime } from "./shared-utility-runtime";
import { Toggle as Switch } from "../utils/toggle";
import type { ExternalLinkClickEvent } from "../utils/external-link/types";
import { vscodeApiF as vscodeMessageBus } from "../boundaries/vscode-api";

import { toastSignal } from "./toast-runtime";

import { initVscodeBridgeRuntime as initVscodeApiBridge } from "./platform-content-runtime";

import {
  createQueryKey as queryKey,
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "./app-server-mutation-runtime";
import { Button, initButtonComponentPrimitives } from "../ui/button";
import {
  Tooltip,
  initTooltipPrimitives as initTooltipRuntime,
} from "../ui/tooltip-b";
import { classNames, initClassNameRuntime } from "../utils/class-names";
import { initIntlRuntime, useIntl } from "../vendor/react-intl";
import {
  Bl as logScopedProductEvent,
  Rl as initPullRequestViewedEventRuntime,
} from "../vendor/projects-app-shared-runtime";
import { useScope } from "./app-scope-hooks";
import { initScopeRuntime } from "./app-scope-runtime";

const pullRequestActionEvent = {
  $type: "protobuf_analytics_events.v1.CodexPullRequestActionClicked",
};
const pullRequestKindActionEvent = {
  $type: "protobuf_analytics_events.v1.CodexPullRequestCommentPosted",
};
const pullRequestViewedFromSidePanelEvent = {
  $type: "protobuf_analytics_events.v1.CodexPullRequestSelected",
};

type OpenInBrowserFromEventOptions = {
  disposition?: "new-tab";
  event: ExternalLinkClickEvent;
  href: string;
  hostId?: string;
  initiator?: string;
  openTarget?: string;
  originHostId?: string;
  source?: string;
  useExternalBrowser?: boolean;
};
type OpenInBrowserOptions = Omit<OpenInBrowserFromEventOptions, "event"> & {
  openTargetIntent?: "alternate" | "default" | string;
};

const EXPLICIT_LINK_PREFIX_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|www\.)/i;
const MAC_PLATFORM_PATTERN = /Mac|iPhone|iPad|iPod/;

function hasExplicitLinkPrefix(href: string): boolean {
  return EXPLICIT_LINK_PREFIX_PATTERN.test(href);
}

function ensureHrefProtocol(href: string): string {
  return /^www\./i.test(href) ? `https://${href}` : href;
}

function shouldUsePrimaryModifier(event: ExternalLinkClickEvent): boolean {
  const platform = globalThis.navigator?.platform ?? "";
  return MAC_PLATFORM_PATTERN.test(platform) ? event.metaKey : event.ctrlKey;
}

function isOpenInBrowserEvent(event: ExternalLinkClickEvent): boolean {
  return shouldUsePrimaryModifier(event);
}

function isExternalSystemProtocol(href: string): boolean {
  try {
    switch (new URL(href).protocol) {
      case "mailto:":
      case "sms:":
      case "tel:":
        return true;
      default:
        return false;
    }
  } catch {
    return false;
  }
}

function openInBrowserFromEvent({
  disposition,
  event,
  href,
  hostId,
  initiator,
  openTarget,
  originHostId,
  source = "manual",
  useExternalBrowser,
}: OpenInBrowserFromEventOptions): boolean {
  const useSystemProtocol = isExternalSystemProtocol(href);
  if (!useSystemProtocol && !hasExplicitLinkPrefix(href)) return false;

  const modifiedPrimaryClick =
    !useSystemProtocol && shouldUsePrimaryModifier(event);
  const openTargetIntent = useSystemProtocol
    ? undefined
    : modifiedPrimaryClick
      ? "alternate"
      : "default";
  const nextDisposition =
    modifiedPrimaryClick || event.button === 1 ? "new-tab" : disposition;

  event.preventDefault();
  vscodeMessageBus.dispatchMessage("open-in-browser", {
    disposition: nextDisposition,
    hostId,
    initiator,
    openTarget,
    openTargetIntent,
    originHostId,
    source,
    useExternalBrowser: useSystemProtocol ? true : useExternalBrowser,
    url: ensureHrefProtocol(href),
  });
  return true;
}

function openInBrowser({
  disposition,
  href,
  hostId,
  initiator,
  openTarget,
  openTargetIntent,
  originHostId,
  source = "manual",
  useExternalBrowser,
}: OpenInBrowserOptions): boolean {
  const useSystemProtocol = isExternalSystemProtocol(href);
  if (!useSystemProtocol && !hasExplicitLinkPrefix(href)) return false;

  vscodeMessageBus.dispatchMessage("open-in-browser", {
    disposition,
    hostId,
    initiator,
    openTarget,
    openTargetIntent,
    originHostId,
    source,
    useExternalBrowser: useSystemProtocol ? true : useExternalBrowser,
    url: ensureHrefProtocol(href),
  });
  return true;
}

function initExternalUrlHelpers(): void {}

function initSwitchRuntime(): void {}

export {
  Button,
  classNames,
  initButtonComponentPrimitives,
  initClassNameRuntime,
  initExternalUrlHelpers,
  initIntlRuntime,
  initPullRequestActionEventRuntime,
  initPullRequestViewedEventRuntime,
  initReactQueryRuntime,
  initRouteHelpers,
  initScopeRuntime,
  initSwitchRuntime,
  initTooltipRuntime,
  initVscodeApiBridge,
  isOpenInBrowserEvent,
  logScopedProductEvent,
  openInBrowser,
  openInBrowserFromEvent,
  pullRequestActionEvent,
  pullRequestKindActionEvent,
  pullRequestViewedFromSidePanelEvent,
  queryKey,
  routeToConversation,
  routeToPendingWorktree,
  Switch,
  toastSignal,
  Tooltip,
  useAppServerMutation,
  useIntl,
  useQueryClient,
  useScope,
};
