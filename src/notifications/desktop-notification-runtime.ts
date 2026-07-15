// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Shared state and helpers consumed by the desktop notification service.
import { createAtom } from "../vendor/jotai-runtime";
import {
  appStoreScope,
  createParametricStateAtom,
} from "../runtime/onboarding-scope-runtime";
import { useTasksQuery } from "../runtime/codex-api";

export type NotificationTurnMode = "off" | "unfocused" | "always";

export type SettingDefinition<TValue> = {
  agentAccess?: "read-only" | "read-write";
  default: TValue;
  description?: string;
  key: string;
  schema?: unknown;
};

export interface ConversationSummaryLike {
  conversationTitle?: string | null;
  isMuted?: boolean | null;
  muted?: boolean | null;
  name?: string | null;
  notificationSettings?: {
    muted?: boolean | null;
    notificationsMuted?: boolean | null;
  } | null;
  notificationsMuted?: boolean | null;
  summary?: {
    title?: string | null;
  } | null;
  threadTitle?: string | null;
  title?: string | null;
}

export interface ConversationHostServiceLike {
  getHostId(): string;
  [key: string]: unknown;
}

export interface ApprovalRequestRecord {
  id: string;
  method: string;
  [key: string]: unknown;
}

export const allHostServicesAtom = createAtom<ConversationHostServiceLike[]>(
  [],
);

export const isWindowFocusedAtom = createAtom(
  typeof document === "undefined" ? true : document.hasFocus(),
);

export const pendingApprovalsAtom = createParametricStateAtom<
  ApprovalRequestRecord[]
>(appStoreScope, () => []);

export const notificationSettings = {
  turnMode: {
    agentAccess: "read-write",
    default: "unfocused",
    description: "When turn-completion notifications are shown",
    key: "notifications-turn-mode",
    schema: ["off", "unfocused", "always"],
  } satisfies SettingDefinition<NotificationTurnMode>,
  permissionsEnabled: {
    agentAccess: "read-write",
    default: true,
    description: "Whether permission notifications are shown",
    key: "notifications-permissions-enabled",
    schema: "boolean",
  } satisfies SettingDefinition<boolean>,
  questionsEnabled: {
    agentAccess: "read-write",
    default: true,
    description: "Whether question notifications are shown",
    key: "notifications-questions-enabled",
    schema: "boolean",
  } satisfies SettingDefinition<boolean>,
} as const;

function normalizeTitleCandidate(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  return title.length > 0 ? title : null;
}

export function getConversationTitle(
  conversation: ConversationSummaryLike | null | undefined,
): string | null {
  if (conversation == null) return null;
  return (
    normalizeTitleCandidate(conversation.title) ??
    normalizeTitleCandidate(conversation.conversationTitle) ??
    normalizeTitleCandidate(conversation.threadTitle) ??
    normalizeTitleCandidate(conversation.summary?.title) ??
    normalizeTitleCandidate(conversation.name)
  );
}

export function isConversationMuted(
  conversation: ConversationSummaryLike | null | undefined,
): boolean {
  return (
    conversation?.isMuted === true ||
    conversation?.muted === true ||
    conversation?.notificationsMuted === true ||
    conversation?.notificationSettings?.muted === true ||
    conversation?.notificationSettings?.notificationsMuted === true
  );
}

export function getRemoteTaskNavigationPath(taskId: string): string {
  return `/remote/${encodeURIComponent(taskId)}`;
}

export function findOpenConversationView(
  get: <TValue = unknown>(signal: unknown, key?: unknown) => TValue,
  conversationId: string,
): unknown | null {
  const sideChatTabId = `sidechat:${conversationId}`;
  for (const signal of ["right-panel-tabs", "bottom-panel-tabs", "tabs"]) {
    try {
      const tabs = get<Array<{ tabId?: string; id?: string }>>(signal);
      if (
        Array.isArray(tabs) &&
        tabs.some(
          (tab) => tab.tabId === sideChatTabId || tab.id === sideChatTabId,
        )
      ) {
        return tabs;
      }
    } catch {
      // Some restored stores only accept real signal objects; ignore string-key probes.
    }
  }
  return null;
}

export const useRemoteTasksQuery = useTasksQuery;
