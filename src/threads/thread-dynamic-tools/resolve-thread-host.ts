// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves which connected host owns a given thread id, used by the thread
// dynamic-tool actions (archive / read turns) exposed to the agent.
import {
  hostConnectionStatusSignal,
  threadManagerListSignal,
} from "../../boundaries/onboarding-commons-externals.facade";

const THREAD_LIST_UNAVAILABLE_REASON = "thread_list_unavailable";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

interface ThreadManager {
  getHostId(): string;
  readThread(
    threadId: string,
    options: { includeTurns: boolean },
  ): Promise<{ thread: unknown }>;
  listAllThreads(query: {
    modelProviders: unknown;
    archived?: boolean;
  }): Promise<Array<{ id: string }>>;
}

export interface ResolvedThreadHost {
  hostId: string;
  manager: ThreadManager;
}

interface UnavailableHost {
  hostId: string;
  reason: string;
}

function getConnectedThreadManagers(scope: AppScope): ThreadManager[] {
  return (scope.get(threadManagerListSignal) as ThreadManager[]).filter(
    (manager) => {
      const hostId = manager.getHostId();
      return (
        hostId === "local" ||
        scope.get(hostConnectionStatusSignal, hostId) === "connected"
      );
    },
  );
}

function describeUnavailableHost(manager: ThreadManager): UnavailableHost {
  return {
    hostId: manager.getHostId(),
    reason: THREAD_LIST_UNAVAILABLE_REASON,
  };
}

async function findThreadOnManager(
  manager: ThreadManager,
  threadId: string,
): Promise<{
  match: ResolvedThreadHost | null;
  unavailableHost?: UnavailableHost;
}> {
  try {
    const [activeThreads, archivedThreads] = await Promise.all([
      manager.listAllThreads({ modelProviders: null }),
      manager.listAllThreads({ modelProviders: null, archived: true }),
    ]);
    return {
      match: [...activeThreads, ...archivedThreads].some(
        (thread) => thread.id === threadId,
      )
        ? { hostId: manager.getHostId(), manager }
        : null,
    };
  } catch {
    return {
      match: null,
      unavailableHost: describeUnavailableHost(manager),
    };
  }
}

export async function resolveThreadHost({
  preferredHostId,
  scope,
  threadId,
}: {
  preferredHostId?: string | null;
  scope: AppScope;
  threadId: string;
}): Promise<ResolvedThreadHost> {
  const managers = getConnectedThreadManagers(scope);
  if (preferredHostId != null) {
    const preferredManager = managers.find(
      (manager) => manager.getHostId() === preferredHostId,
    );
    if (preferredManager != null) {
      try {
        await preferredManager.readThread(threadId, { includeTurns: false });
        return { hostId: preferredHostId, manager: preferredManager };
      } catch {
        // Fall through to a full search when the preferred host can't load it.
      }
    }
  }
  const searchResults = await Promise.all(
    managers.map((manager) => findThreadOnManager(manager, threadId)),
  );
  const matches = searchResults.flatMap((result) =>
    result.match == null ? [] : [result.match],
  );
  const unavailableHosts = searchResults.flatMap((result) =>
    result.unavailableHost == null ? [] : [result.unavailableHost],
  );
  const [firstMatch] = matches;
  if (firstMatch != null && matches.length === 1) {
    return firstMatch;
  }
  if (matches.length === 0) {
    const unavailableSuffix =
      unavailableHosts.length === 0
        ? ""
        : `. Some hosts could not be searched: ${unavailableHosts
            .map((host) => host.hostId)
            .join(", ")}`;
    throw Error(
      `No Codex thread found for threadId: ${threadId}${unavailableSuffix}`,
    );
  }
  throw Error(
    `Ambiguous Codex thread id ${threadId}; matching hosts: ${matches
      .map((match) => match.hostId)
      .join(", ")}`,
  );
}

export function initResolveThreadHostChunk(): void {
  void resolveThreadHost;
}
