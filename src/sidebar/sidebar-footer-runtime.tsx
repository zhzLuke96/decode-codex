// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar footer/header primitives and signals used by the Codex sidebar shell.

import React, { type ReactNode } from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { CodexIcon } from "../icons/codex-icon";
import { createAtom } from "../vendor/jotai-runtime";
import { getResizeObserverEntrySize } from "../utils/get-resize-observer-entry-size";
import { classNames } from "../utils/class-names";

type ClassNameProps = {
  className?: string;
};

type SidebarModeProps = {
  desktopNavItemsEnabled?: boolean;
  sidebarMode?: string;
};

export const hideCompletedImportStatusSignal = appScopeUnderscore(
  appScopeRoot,
  () => true,
);

export const sidebarSelectedWorkspaceRootAtom = createAtom<string | null>(null);
export const sidebarWorkspaceRootAtom = sidebarSelectedWorkspaceRootAtom;

export const getResizeObserverBoxSize = getResizeObserverEntrySize;

export function CodexWordmark({ className }: ClassNameProps) {
  return (
    <span className={classNames("inline-flex items-center gap-1.5", className)}>
      <CodexIcon className="h-full w-auto" aria-hidden={true} />
      <span className="text-sm font-semibold leading-none">Codex</span>
    </span>
  );
}

export function SidebarToolbarActions() {
  return <div className="flex min-w-0 items-center gap-1" />;
}

export function SidebarWorkspaceHeader({
  desktopNavItemsEnabled = true,
}: SidebarModeProps) {
  if (!desktopNavItemsEnabled) return null;
  return (
    <div className="px-row-x pt-1">
      <div className="text-size-chat-sm truncate font-medium text-token-text-secondary">
        Workspace
      </div>
    </div>
  );
}

export function SidebarPrimaryNavLinks({ sidebarMode }: SidebarModeProps) {
  return (
    <div className="flex flex-col gap-1">
      <SidebarNavRow isActive={sidebarMode === "codex"} label="Chats" />
      <SidebarNavRow label="Projects" />
    </div>
  );
}

function SidebarNavRow({
  isActive = false,
  label,
}: {
  isActive?: boolean;
  label: string;
}) {
  return (
    <div
      className={classNames(
        "text-size-chat flex h-token-nav-row items-center rounded-[var(--radius-token-row)] px-row-cell-x",
        isActive
          ? "bg-token-list-hover-background text-token-foreground"
          : "text-token-text-secondary",
      )}
    >
      <span className="truncate">{label}</span>
    </div>
  );
}

export function SidebarImportStatusBanner({
  hideCompletedImportStatus,
}: {
  hideCompletedImportStatus?: boolean;
}) {
  if (hideCompletedImportStatus) return null;
  return (
    <div className="text-size-chat-sm mb-2 rounded-lg border border-token-border bg-token-bg-secondary px-2 py-1.5 text-token-text-secondary">
      Import complete
    </div>
  );
}

export function SidebarUsageAlert(_props: ClassNameProps) {
  return null;
}

export function SidebarUpsellCard(_props: ClassNameProps) {
  return null;
}

export function SidebarAccountFooter() {
  return (
    <div className="border-t border-token-border px-row-x py-2">
      <div className="text-size-chat-sm truncate text-token-text-secondary">
        Account
      </div>
    </div>
  );
}

export function SidebarBrowserFooter() {
  return (
    <div className="border-t border-token-border px-row-x py-2">
      <div className="text-size-chat-sm truncate text-token-text-secondary">
        Codex
      </div>
    </div>
  );
}

export function useIsSidebarOnboardingActive(): boolean {
  return false;
}

export function useSyncSidebarRouteState(
  _location: unknown,
  _activeWorkspaceRoot: string | null,
): void {}

export function useHostEventListener<TEvent>(
  eventName: string,
  listener: (event: TEvent) => void,
  deps: React.DependencyList = [],
): void {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handleEvent = (event: Event) => {
      listener(
        "detail" in event
          ? ((event as CustomEvent).detail as TEvent)
          : (event as TEvent),
      );
    };
    window.addEventListener(eventName, handleEvent);
    return () => window.removeEventListener(eventName, handleEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, ...deps]);
}

export function SidebarFooterSlot({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
