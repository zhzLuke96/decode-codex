// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scope state families for MCP app entries, frames, tabs and expansion.

import { rightAppShellTabController } from "../app-shell/app-shell-tab-controller";
import {
  appScopeO as readAppScopeStore,
  useAppScopeValue,
} from "../boundaries/app-scope";
import {
  appRootScope,
  appStoreScope,
  createParametricAtom,
  createScopedAtom,
} from "../runtime/onboarding-scope-runtime";
import { PERSISTED_PANEL_KIND } from "../runtime/persisted-signal";
import {
  defaultMcpAppFrameState,
  frameStatesByAppIdAtom,
  fullScreenMcpAppIdsAtom,
  updateMcpAppFrameState,
  type McpAppFrameState,
} from "./mcp-app-frame-state";

type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrValue: unknown, value?: unknown): void;
};

type McpAppEntry = {
  inlineFrameContainer: HTMLElement | null;
  inlineFrameContent: Record<string, unknown>;
  mcpAppId: string;
  sidePanelFrameContent?: Record<string, unknown>;
};

export const mcpAppEntriesSignal = createScopedAtom(
  appRootScope,
  () => new Map<string, McpAppEntry>(),
);

export const mcpAppEntryFamily = createParametricAtom(
  appRootScope,
  (mcpAppId: string, { get }: { get: AppScopeStoreLike["get"] }) =>
    get<Map<string, McpAppEntry>>(mcpAppEntriesSignal).get(mcpAppId) ?? null,
);

export const mcpAppFrameStateFamily = createParametricAtom(
  appRootScope,
  (mcpAppId: string, { get }: { get: AppScopeStoreLike["get"] }) =>
    get<Map<string, McpAppFrameState>>(frameStatesByAppIdAtom).get(mcpAppId) ??
    defaultMcpAppFrameState,
);

export const mcpAppStateFamily = mcpAppFrameStateFamily;

export const mcpAppManualExpansionFamily = createScopedAtom(
  appRootScope,
  () => false,
);

export const mcpToolActivityExpansionFamily = createScopedAtom(
  appStoreScope,
  () => null as boolean | null,
);

export const rightPanelColumnCountSignal = createScopedAtom(
  appRootScope,
  () => ({ get: () => 1 }),
);

export const mcpAppTabManager = rightAppShellTabController;

export function buildMcpAppTabId(mcpAppId: string): string {
  return `${PERSISTED_PANEL_KIND.MCP_APP}:${mcpAppId}`;
}

export const mcpAppSidePanelOpenFamily = createParametricAtom(
  appRootScope,
  (mcpAppId: string, { get }: { get: AppScopeStoreLike["get"] }) =>
    get(rightAppShellTabController.tabById$, buildMcpAppTabId(mcpAppId)) !=
    null,
);

export function resolveMcpAppTabId(
  _styleVariables: unknown,
  options: { mcpAppId: string },
  _surfaceBackgroundColor?: unknown,
): string {
  return options.mcpAppId;
}

export function setMcpAppInlineExpanded(
  store: AppScopeStoreLike,
  mcpAppId: string,
  isInlineExpanded: boolean,
): void {
  updateMcpAppFrameState(store, mcpAppId, { isInlineExpanded });
}

export function exitMcpAppFullScreen(
  store: AppScopeStoreLike,
  mcpAppId: string,
): void {
  store.set(fullScreenMcpAppIdsAtom, (current: Set<string> | undefined) => {
    const next = new Set(current ?? []);
    next.delete(mcpAppId);
    return next;
  });
  updateMcpAppFrameState(store, mcpAppId, { isFullScreen: false });
}

function updateMcpAppEntry(
  store: AppScopeStoreLike,
  mcpAppId: string,
  updater: (entry: McpAppEntry) => McpAppEntry,
): void {
  store.set(
    mcpAppEntriesSignal,
    (current: Map<string, McpAppEntry> | undefined) => {
      const entries = current ?? new Map<string, McpAppEntry>();
      const previous = entries.get(mcpAppId);
      if (previous == null) return entries;
      const next = updater(previous);
      if (next === previous) return entries;
      const updated = new Map(entries);
      updated.set(mcpAppId, next);
      return updated;
    },
  );
}

export function attachMcpAppPanelElement(
  store: AppScopeStoreLike,
  mcpAppId: string,
  element: HTMLElement | null,
): void {
  updateMcpAppEntry(store, mcpAppId, (entry) => ({
    ...entry,
    inlineFrameContainer: element,
    inlineFrameContent: { ...entry.inlineFrameContent, inlineFrameContainer: element },
  }));
}

export function detachMcpAppPanelElement(
  store: AppScopeStoreLike,
  mcpAppId: string,
  element: HTMLElement | null,
): void {
  updateMcpAppEntry(store, mcpAppId, (entry) =>
    entry.inlineFrameContainer !== element
      ? entry
      : {
          ...entry,
          inlineFrameContainer: null,
          inlineFrameContent: {
            ...entry.inlineFrameContent,
            inlineFrameContainer: null,
          },
        },
  );
}

export function openMcpAppExpandedSurface(
  store: AppScopeStoreLike,
  options: Record<string, unknown> & { html?: string | null; mcpAppId: string },
): void {
  if (options.html == null) return;
  const previousEntries = store.get<Map<string, McpAppEntry>>(mcpAppEntriesSignal);
  const previous = previousEntries.get(options.mcpAppId);
  const inlineFrameContainer = previous?.inlineFrameContainer ?? null;
  const frameContent = {
    ...options,
    fullSurface: Boolean(options.fullSurface),
    html: options.html,
    inlineFrameContainer,
  };
  const entry: McpAppEntry = {
    inlineFrameContainer,
    inlineFrameContent: frameContent,
    mcpAppId: options.mcpAppId,
    sidePanelFrameContent: frameContent,
  };
  store.set(
    mcpAppEntriesSignal,
    (current: Map<string, McpAppEntry> | undefined) => {
      const updated = new Map(current ?? []);
      updated.set(options.mcpAppId, entry);
      return updated;
    },
  );
}

export function useSignalFamilyValue<TValue = unknown>(
  family: unknown,
  key: unknown,
): TValue {
  const signal =
    typeof family === "function"
      ? (family as (key: unknown) => unknown)(key)
      : family;
  return useAppScopeValue<TValue>(
    signal,
    typeof family === "function" ? undefined : key,
  );
}

export function readScopedAtom<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return readAppScopeStore().get<TValue>(signal, key);
}

export function buildMcpToolActivityExpansionKey({
  callId,
  conversationId,
}: {
  callId: string;
  conversationId: string;
}): string {
  return `${conversationId}:${callId}`;
}

export function setMcpToolActivityExpansion(
  store: AppScopeStoreLike,
  key: string,
  expanded: boolean | null,
): void {
  store.set(mcpToolActivityExpansionFamily, key, expanded);
}

export const toolActivityExpandedTurnKeysSignal = createScopedAtom(
  appStoreScope,
  () => new Set<string>(),
);

export function markToolActivityTurnExpanded(
  store: AppScopeStoreLike,
  key: string,
): void {
  store.set(
    toolActivityExpandedTurnKeysSignal,
    (current: Set<string> | undefined) => {
      const next = new Set(current ?? []);
      next.add(key);
      return next;
    },
  );
}
