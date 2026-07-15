// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Off-screen browser webview hosts kept mounted alongside the sidebar so
// background browsing and "browser use" tab automation survive navigation.
// The heavy host implementations are code-split and only pulled in on demand.
import React, { type ReactElement } from "react";
import {
  browserUseTabsStore,
  hiddenBackgroundBrowserWebviewEnabledAtom,
  useAtomFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";

const HiddenBackgroundBrowserWebviewHost = React.lazy(() =>
  import("../browser/hidden-background-webview-host").then((module) => ({
    default: module.HiddenBackgroundBrowserWebviewHost,
  })),
);

const HiddenBrowserUseWebviewHost = React.lazy(() =>
  import("../browser/hidden-browser-use-webview-host").then((module) => ({
    default: module.HiddenBrowserUseWebviewHost,
  })),
);

interface BrowserUseTab {
  browserTabId: string;
  conversationId: string;
}

const EMPTY_BROWSER_USE_TABS: BrowserUseTab[] = [];

function getEmptyBrowserUseTabs(): BrowserUseTab[] {
  return EMPTY_BROWSER_USE_TABS;
}

function getBrowserUseTabsSnapshot(): BrowserUseTab[] {
  return browserUseTabsStore.getBrowserUseTabs();
}

export interface HiddenBrowserUseWebviewHostsProps {
  ownerConversationId: string | null;
  persistedTabsEnabled: boolean;
}

/**
 * Mounts one hidden "browser use" webview host per conversation that currently
 * owns automated browser tabs, grouping the live tab ids by conversation.
 */
export function HiddenBrowserUseWebviewHosts({
  ownerConversationId,
  persistedTabsEnabled,
}: HiddenBrowserUseWebviewHostsProps): ReactElement | null {
  const browserUseTabs = React.useSyncExternalStore(
    browserUseTabsStore.subscribe,
    getBrowserUseTabsSnapshot,
    getEmptyBrowserUseTabs,
  );
  if (browserUseTabs.length === 0) return null;

  const tabIdsByConversation = new Map<string, string[]>();
  for (const { browserTabId, conversationId } of browserUseTabs) {
    const tabIds = tabIdsByConversation.get(conversationId) ?? [];
    tabIds.push(browserTabId);
    tabIdsByConversation.set(conversationId, tabIds);
  }

  return (
    <>
      {Array.from(tabIdsByConversation, ([conversationId, tabIds]) => (
        <HiddenBrowserUseWebviewHost
          key={conversationId}
          browserUseTabIdsKey={tabIds.join("\0")}
          conversationId={conversationId}
          persistedTabsEnabled={
            persistedTabsEnabled && conversationId === ownerConversationId
          }
        />
      ))}
    </>
  );
}

export interface HiddenBackgroundBrowserWebviewHostGateProps {
  conversationId: string;
  persistedTabsEnabled: boolean;
}

/**
 * Mounts the hidden background-browsing webview host for a conversation, but
 * only while that conversation has background browsing enabled.
 */
export function HiddenBackgroundBrowserWebviewHostGate({
  conversationId,
  persistedTabsEnabled,
}: HiddenBackgroundBrowserWebviewHostGateProps): ReactElement | null {
  if (
    !useAtomFamilyValue(
      hiddenBackgroundBrowserWebviewEnabledAtom,
      conversationId,
    )
  )
    return null;
  return (
    <HiddenBackgroundBrowserWebviewHost
      conversationId={conversationId}
      persistedTabsEnabled={persistedTabsEnabled}
    />
  );
}
