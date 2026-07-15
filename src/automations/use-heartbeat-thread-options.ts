// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the list of pinned-chat options for the heartbeat automation target
// dropdown, marking chats already claimed by another active heartbeat as
// unavailable and surfacing the currently selected chat even if unpinned.
import { useAppScopeValue } from "../boundaries/app-scope";
import { isHeartbeatAutomation } from "../boundaries/src-l0hb-mz-p";
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";
import { getThreadTitle } from "../boundaries/use-host-config.facade";
import { useThreadsQuery } from "../boundaries/onboarding-commons-externals.facade";
import { pinnedThreadsQuery as pinnedThreadsQuerySignal } from "../utils/pinned-threads-query";
import { automationsQuerySignal } from "../automation/automation-schedule/automations-query";
import type { HeartbeatThreadOption } from "./automation-heartbeat-thread-dropdown";

interface AutomationRecord {
  status?: string;
  targetThreadId?: string;
  kind?: string;
}

interface ThreadRecord {
  id: string;
  hostId?: string | null;
  createdAt?: number | string | null;
}

export interface HeartbeatThreadOptionsResult {
  options: HeartbeatThreadOption[];
  hasPinnedThreads: boolean;
}

function isLocalHostId(hostId: string | null | undefined): boolean {
  return hostId == null || hostId === "local";
}

function isLocalThread(thread: ThreadRecord): boolean {
  return isLocalHostId(thread.hostId);
}

function toThreadEntry(thread: ThreadRecord): [string, ThreadRecord] {
  return [String(thread.id), thread];
}

function isPinnedOption(option: HeartbeatThreadOption): boolean {
  return option.isPinned === true;
}

export function useHeartbeatThreadOptions(
  selectedThreadId: string | null,
): HeartbeatThreadOptionsResult {
  const { data: automationsData } = useAppScopeValue<
    { items?: AutomationRecord[] } | undefined
  >(automationsQuerySignal);
  const { data: pinnedThreadsData } = useAppScopeValue<
    { threadIds?: string[] } | undefined
  >(pinnedThreadsQuerySignal);
  const { data: threadsData } = useThreadsQuery() as {
    data?: ThreadRecord[];
  };

  const unavailableThreadIds = new Set(
    (automationsData?.items ?? []).flatMap((automation) =>
      !isHeartbeatAutomation(automation) ||
      automation.status !== "ACTIVE" ||
      (automation.targetThreadId ?? "").trim().length === 0 ||
      automation.targetThreadId === selectedThreadId
        ? []
        : [automation.targetThreadId as string],
    ),
  );

  const threadsById = new Map(
    (threadsData ?? []).filter(isLocalThread).map(toThreadEntry),
  );
  const pinnedThreadIds = pinnedThreadsData?.threadIds ?? [];
  const pinnedThreadIdSet = new Set(pinnedThreadIds);

  const options: HeartbeatThreadOption[] = pinnedThreadIds.flatMap(
    (threadId) => {
      const thread = threadsById.get(threadId);
      return thread == null
        ? []
        : [
            {
              threadId: thread.id,
              title: getThreadTitle(thread) ?? threadId,
              createdAt: thread.createdAt ?? null,
              isPinned: true,
              isUnavailable: unavailableThreadIds.has(threadId),
            },
          ];
    },
  );

  if (
    selectedThreadId != null &&
    selectedThreadId.length > 0 &&
    !pinnedThreadIdSet.has(selectedThreadId)
  ) {
    const thread = threadsById.get(selectedThreadId);
    options.unshift({
      threadId: normalizeConversationId(thread?.id ?? selectedThreadId),
      title:
        (thread == null ? null : getThreadTitle(thread)) ?? selectedThreadId,
      createdAt: thread?.createdAt ?? null,
      isPinned: false,
      isUnavailable: unavailableThreadIds.has(selectedThreadId),
    });
  }

  return {
    options,
    hasPinnedThreads: options.some(isPinnedOption),
  };
}

export function initHeartbeatThreadOptionsChunk(): void {
  void useHeartbeatThreadOptions;
}
