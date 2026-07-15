// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared UI/runtime helpers for the plan summary card side-panel integration.
import * as React from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";

type StoreLike = {
  set(atom: unknown, ...args: unknown[]): void;
};

type TabDefinition = {
  id: string;
  onClose?: (store: StoreLike) => void;
  props?: unknown;
  title?: React.ReactNode;
};

export const planSidePanelEnabledAtom = appScopeUnderscore(
  appScopeRoot,
  () => true,
);

export const sidePanelTabManager = {
  activeTab$: appScopeUnderscore(appScopeRoot, () => null),
  closeTab(store: StoreLike, tabId: string): void {
    store.set(sidePanelTabManager.activeTab$, null);
    void tabId;
  },
  openTab(
    store: StoreLike,
    _Component: React.ComponentType<any>,
    definition: TabDefinition,
  ): void {
    store.set(sidePanelTabManager.activeTab$, {
      tabId: definition.id,
      title: definition.title,
    });
  },
};

export function ConversationCard({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return <div className={className}>{children}</div>;
}

export function IconButtonTooltip({
  children,
  tooltipContent,
}: {
  children: React.ReactElement;
  tooltipContent: React.ReactNode;
}): React.ReactElement {
  return <Tooltip tooltipContent={tooltipContent}>{children}</Tooltip>;
}

export function ShareConversationButton({
  hasArtifacts,
}: {
  hasArtifacts?: boolean;
  reportEntityType?: string;
  threadId?: string;
  turnId?: string;
}): React.ReactElement {
  return (
    <Button color="ghost" disabled={!hasArtifacts} size="icon">
      <span className="sr-only">Share</span>
    </Button>
  );
}
