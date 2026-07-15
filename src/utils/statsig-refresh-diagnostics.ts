// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Diagnostics helper used by the debug modal to force-refresh Statsig values.
import { appLogger } from "../runtime/app-logger";

type StatsigValuesUpdatedEvent = {
  status?: unknown;
  values?: unknown;
};

type StatsigRefreshResult = {
  error?: unknown;
  success?: boolean;
};

type StatsigDiagnosticsClient = {
  loadingStatus?: unknown;
  dataAdapter: {
    prefetchData(user: unknown): Promise<unknown>;
  };
  getContext(): {
    user: unknown;
  };
  off(
    eventName: "values_updated",
    listener: StatsigValuesUpdatedListener,
  ): void;
  on(eventName: "values_updated", listener: StatsigValuesUpdatedListener): void;
  updateUserSync(
    user: unknown,
    options: { disableBackgroundCacheRefresh: boolean },
  ): StatsigRefreshResult;
};

type StatsigValuesUpdatedListener = (event: StatsigValuesUpdatedEvent) => void;

let statsigRefreshDiagnosticsSequence = 1;

export function initStatsigRefreshDiagnosticsChunk(): void {
  statsigRefreshDiagnosticsSequence = 1;
}

export async function refreshStatsigValuesForDiagnostics(
  client: StatsigDiagnosticsClient,
  trigger: string,
): Promise<void> {
  const refreshId = statsigRefreshDiagnosticsSequence;
  statsigRefreshDiagnosticsSequence += 1;
  const startedAtMs = performance.now();
  const onValuesUpdated: StatsigValuesUpdatedListener = (event) => {
    appLogger.info("[statsig-refresh-diagnostics] values updated", {
      safe: {
        hasValues: event.values != null,
        refreshId,
        status: event.status,
        trigger,
      },
    });
  };

  appLogger.info("[statsig-refresh-diagnostics] refresh started", {
    safe: {
      loadingStatus: client.loadingStatus,
      refreshId,
      trigger,
    },
  });

  client.on("values_updated", onValuesUpdated);
  try {
    const statsigUser = client.getContext().user;
    await client.dataAdapter.prefetchData(statsigUser);
    const result = client.updateUserSync(statsigUser, {
      disableBackgroundCacheRefresh: true,
    });
    appLogger.info("[statsig-refresh-diagnostics] refresh finished", {
      safe: {
        durationMs: Math.round(performance.now() - startedAtMs),
        loadingStatus: client.loadingStatus,
        refreshId,
        success: result.success,
        trigger,
      },
      sensitive: {
        error: result.error,
      },
    });
  } catch (error) {
    appLogger.error("[statsig-refresh-diagnostics] refresh failed", {
      safe: {
        durationMs: Math.round(performance.now() - startedAtMs),
        loadingStatus: client.loadingStatus,
        refreshId,
        trigger,
      },
      sensitive: {
        error,
      },
    });
  } finally {
    client.off("values_updated", onValuesUpdated);
  }
}
