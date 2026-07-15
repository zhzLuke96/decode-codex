// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Miscellaneous onboarding commons boundary helpers used by restored cross-chunk code.
import { z } from "zod";

import { isEqualN as isEqual } from "../vendor/lodash-is-equal";
import { defineMessages } from "../vendor/react-intl";

export const objectSchema = z.object;
export const unionSchema = z.union;

export const floatingComposerMessages = defineMessages({
  hideFloatingComposer: {
    id: "thread.browser.options.hideFloatingComposer",
    defaultMessage: "Hide composer",
    description:
      "Menu item that hides the floating composer in the expanded browser panel",
  },
  showFloatingComposer: {
    id: "thread.browser.options.showFloatingComposer",
    defaultMessage: "Show composer",
    description:
      "Menu item that shows the floating composer in the expanded browser panel",
  },
});

export const panelOverlayZIndex = 1000;

export const powerSaveSettings = {
  preventSleepWhileRunning: {
    agentAccess: "read-write",
    default: false,
    description: "Whether the machine stays awake while Codex is running",
    key: "preventSleepWhileRunning",
  },
  keepRemoteControlAwakeWhilePluggedIn: {
    agentAccess: "read-write",
    default: false,
    description:
      "Whether remote control keeps this computer awake while plugged in",
    key: "keepRemoteControlAwakeWhilePluggedIn",
  },
} as const;

export function arePayloadsEqual(
  previousPayload: unknown,
  nextPayload: unknown,
): boolean {
  return isEqual(previousPayload, nextPayload);
}

export function waitForNextFrame(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => resolve());
      return;
    }
    setTimeout(resolve, 0);
  });
}

export interface ParsedCodexError {
  code?: string;
  message: string;
  type: string;
}

export function parseCodexError(error: Error): ParsedCodexError {
  const fromPayload = parseCodexErrorPayload(error);
  if (fromPayload != null) return fromPayload;

  const message = error.message || String(error);
  return {
    message,
    type: inferCodexErrorType(message),
  };
}

type BrowserUseTabsListener = () => void;

export interface BrowserUseTab {
  browserTabId: string;
  conversationId: string;
}

let browserUseTabs: BrowserUseTab[] = [];
const browserUseTabListeners = new Set<BrowserUseTabsListener>();

function notifyBrowserUseTabsListeners(): void {
  for (const listener of browserUseTabListeners) listener();
}

function normalizeBrowserUseTabs(tabs: readonly BrowserUseTab[]): BrowserUseTab[] {
  const seen = new Set<string>();
  const next: BrowserUseTab[] = [];
  for (const tab of tabs) {
    if (tab.browserTabId.length === 0 || tab.conversationId.length === 0) {
      continue;
    }
    const key = `${tab.conversationId}\0${tab.browserTabId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    next.push({
      browserTabId: tab.browserTabId,
      conversationId: tab.conversationId,
    });
  }
  return next;
}

export const browserUseTabsStore = {
  getBrowserUseTabs(): BrowserUseTab[] {
    return browserUseTabs;
  },
  setBrowserUseTabs(tabs: readonly BrowserUseTab[]): void {
    const next = normalizeBrowserUseTabs(tabs);
    if (isEqual(browserUseTabs, next)) return;
    browserUseTabs = next;
    notifyBrowserUseTabsListeners();
  },
  addBrowserUseTab(tab: BrowserUseTab): void {
    this.setBrowserUseTabs([...browserUseTabs, tab]);
  },
  removeBrowserUseTab(browserTabId: string): void {
    this.setBrowserUseTabs(
      browserUseTabs.filter((tab) => tab.browserTabId !== browserTabId),
    );
  },
  subscribe(listener: BrowserUseTabsListener): () => void {
    browserUseTabListeners.add(listener);
    return () => {
      browserUseTabListeners.delete(listener);
    };
  },
};

function parseCodexErrorPayload(error: Error): ParsedCodexError | null {
  for (const candidate of errorPayloadCandidates(error)) {
    const normalized = normalizeCodexErrorPayload(candidate);
    if (normalized != null) return normalized;
  }
  return null;
}

function errorPayloadCandidates(error: Error): unknown[] {
  const record = error as Error & Record<string, unknown>;
  const candidates: unknown[] = [
    record,
    record.cause,
    record.error,
    record.data,
    record.body,
    record.response,
    parseJsonObject(error.message),
  ];
  return candidates.filter((candidate) => candidate != null);
}

function normalizeCodexErrorPayload(payload: unknown): ParsedCodexError | null {
  const record = asRecord(payload);
  if (record == null) return null;
  const nested =
    asRecord(record.error) ??
    asRecord(record.data) ??
    asRecord(record.body) ??
    null;
  const source = nested ?? record;
  const message = stringValue(source.message) ?? stringValue(record.message);
  const type =
    stringValue(source.type) ??
    stringValue(source.error_type) ??
    stringValue(source.code) ??
    stringValue(source.error_code);
  if (message == null && type == null) return null;
  return {
    code: stringValue(source.code) ?? stringValue(source.error_code),
    message: message ?? type ?? "Unknown Codex error",
    type: type ?? inferCodexErrorType(message ?? ""),
  };
}

function inferCodexErrorType(message: string): string {
  return message.includes("missing_github_connector_link")
    ? "missing_github_connector_link"
    : "unknown";
}

function parseJsonObject(value: string): unknown {
  const trimmed = value.trim();
  if (!trimmed.startsWith("{")) return null;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    return null;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value != null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function stringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}
