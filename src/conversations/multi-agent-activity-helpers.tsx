// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared helpers for background-subagent and multi-agent activity rows.

import * as React from "react";
import { useIsBackgroundSubagentsEnabled } from "../utils/use-is-background-subagents-enabled";

export type SubagentInlineActivityInput = {
  agentRole?: string | null;
  conversationId: string;
  diffStats?: unknown;
  displayName?: string | null;
  showInlineActivity?: boolean;
  spawnModel?: string | null;
  status?: string | null;
  statusSummary?: string | null;
};

export const SubagentInlineActivityContext = React.createContext<
  ((input: SubagentInlineActivityInput) => void) | null
>(null);

export function useMultiAgentActionsEnabled(): boolean {
  return useIsBackgroundSubagentsEnabled();
}

export function normalizeThreadId(threadId: unknown): string {
  return String(threadId ?? "").trim();
}

export function formatAgentIdLabel(agentId: string): string {
  const normalized = normalizeThreadId(agentId);
  return normalized.startsWith("@") ? normalized : `@${normalized}`;
}

export function getThreadDisplayName(thread: unknown): string | null {
  const data = thread as Record<string, unknown> | null | undefined;
  return (
    readString(data?.displayName) ??
    readString(data?.agentNickname) ??
    parseAgentSource(data?.source)?.agentNickname ??
    null
  );
}

export function parseAgentSource(
  source: unknown,
): { agentNickname?: string | null; agentRole?: string | null } | null {
  if (source == null) return null;
  if (typeof source === "object") {
    const data = source as Record<string, unknown>;
    return {
      agentNickname: readString(data.agentNickname),
      agentRole: readString(data.agentRole ?? data.role),
    };
  }
  if (typeof source !== "string") return null;
  try {
    return parseAgentSource(JSON.parse(source));
  } catch {
    const roleMatch = source.match(/agentRole["':= ]+([\w-]+)/i);
    const nicknameMatch = source.match(/agentNickname["':= ]+([^,}]+)/i);
    return {
      agentNickname: nicknameMatch?.[1]?.trim() ?? null,
      agentRole: roleMatch?.[1]?.trim() ?? null,
    };
  }
}

export function formatModelLabel(model: string): string {
  return model
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) =>
      /^(gpt|o|codex)$/i.test(part)
        ? part.toUpperCase()
        : `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`,
    )
    .join(" ");
}

export function initMultiAgentActivityHelpersChunk(): void {}

function readString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}
