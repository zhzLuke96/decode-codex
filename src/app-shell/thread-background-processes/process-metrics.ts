// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Matching logic between conversation process rows and live child-process metrics.
import {
  commandTextMatches,
  normalizeCommandForMatching,
} from "./command-normalization";
import type {
  ConversationProcessRow,
  ProcessMetric,
  ProcessRowWithMetrics,
} from "./types";

const COMMAND_START_TIME_MATCH_TOLERANCE_SECONDS = 60;
const HIDDEN_RECENT_PROCESS_AGE_SECONDS = 3;

export function matchProcessMetrics(
  process: ConversationProcessRow,
  metrics: readonly ProcessMetric[] | null | undefined,
  nowMs: number = Date.now(),
  { matchCommandStartTime = false }: { matchCommandStartTime?: boolean } = {},
): ProcessMetric | null {
  if (metrics == null) return null;

  const commandStartToleranceSeconds =
    matchCommandStartTime && process.commandExecutionStartedAtMs != null
      ? COMMAND_START_TIME_MATCH_TOLERANCE_SECONDS
      : null;

  if (process.osPid != null) {
    const exactMetric = summarizeProcessTree(process.osPid, metrics);
    if (
      exactMetric != null &&
      commandTextMatches(
        normalizeCommandForMatching(process.command),
        exactMetric.command,
      )
    ) {
      return exactMetric;
    }
  }

  const processId = parseProcessId(process.processId);
  if (processId != null) {
    if (
      process.source !== "restored-process" &&
      commandStartToleranceSeconds == null
    ) {
      const exactMetric = summarizeProcessTree(processId, metrics);
      if (exactMetric != null) return exactMetric;
    }

    const descendantMetric = findBestProcessMetricMatch(
      process,
      getDescendantProcessMetrics(processId, metrics),
      nowMs,
      commandStartToleranceSeconds,
    );
    if (descendantMetric != null) {
      return summarizeProcessTree(descendantMetric.pid, metrics);
    }
  }

  const commandMetric = findBestProcessMetricMatch(
    process,
    metrics,
    nowMs,
    commandStartToleranceSeconds,
  );
  return commandMetric == null
    ? null
    : summarizeProcessTree(commandMetric.pid, metrics);
}

export function selectRunningProcessRows(
  rows: readonly ConversationProcessRow[],
  metrics: readonly ProcessMetric[] | null | undefined,
  nowMs: number,
): ProcessRowWithMetrics[] {
  const visibleRows: ProcessRowWithMetrics[] = [];
  const seenPids = new Set<number>();

  for (const process of rows) {
    const metric = matchProcessMetrics(process, metrics, nowMs);
    if (metric == null) continue;

    const ageSeconds = getProcessRuntimeAgeSeconds(
      {
        metrics: metric,
        process,
      },
      nowMs,
    );

    if (ageSeconds != null && ageSeconds < HIDDEN_RECENT_PROCESS_AGE_SECONDS) {
      continue;
    }

    if (seenPids.has(metric.pid)) continue;
    seenPids.add(metric.pid);
    visibleRows.push({
      metrics: metric,
      process,
    });
  }

  return visibleRows;
}

export function getProcessRuntimeAgeSeconds(
  row: ProcessRowWithMetrics,
  nowMs: number,
): number | null {
  return row.metrics?.ageSeconds == null
    ? row.process.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((nowMs - row.process.startedAtMs) / 1000))
    : row.metrics.ageSeconds;
}

function parseProcessId(processId: string | number | null | undefined) {
  if (processId == null) return null;
  const processIdText = String(processId);
  if (!/^\d+$/u.test(processIdText)) return null;

  const numericProcessId = Number(processIdText);
  return Number.isSafeInteger(numericProcessId) ? numericProcessId : null;
}

function getDescendantProcessMetrics(
  pid: number,
  metrics: readonly ProcessMetric[],
): ProcessMetric[] {
  const metricsByPid = new Map(metrics.map((metric) => [metric.pid, metric]));
  return metrics.filter((metric) =>
    isDescendantProcess(metric.pid, pid, metricsByPid),
  );
}

function summarizeProcessTree(
  pid: number,
  metrics: readonly ProcessMetric[],
): ProcessMetric | null {
  const metricsByPid = new Map(metrics.map((metric) => [metric.pid, metric]));
  const rootMetric = metricsByPid.get(pid);
  if (rootMetric == null) return null;

  let cpuPercent = 0;
  let hasCpuPercent = false;
  let rssKb = 0;
  let hasRssKb = false;

  for (const metric of metrics) {
    if (!isDescendantProcess(metric.pid, pid, metricsByPid)) continue;

    if (metric.cpuPercent != null && Number.isFinite(metric.cpuPercent)) {
      cpuPercent += metric.cpuPercent;
      hasCpuPercent = true;
    }

    if (metric.rssKb != null && Number.isFinite(metric.rssKb)) {
      rssKb += metric.rssKb;
      hasRssKb = true;
    }
  }

  return {
    ageSeconds: rootMetric.ageSeconds,
    command: rootMetric.command,
    cpuPercent: hasCpuPercent ? cpuPercent : null,
    depth: rootMetric.depth,
    parentPid: rootMetric.parentPid,
    pid,
    rssKb: hasRssKb ? rssKb : null,
  };
}

function isDescendantProcess(
  candidatePid: number,
  ancestorPid: number,
  metricsByPid: ReadonlyMap<number, ProcessMetric>,
): boolean {
  let currentPid = candidatePid;
  const seenPids = new Set<number>();

  while (!seenPids.has(currentPid)) {
    if (currentPid === ancestorPid) return true;

    seenPids.add(currentPid);
    const currentMetric = metricsByPid.get(currentPid);
    if (currentMetric == null || currentMetric.parentPid == null) return false;

    currentPid = currentMetric.parentPid;
  }

  return false;
}

function findBestProcessMetricMatch(
  process: ConversationProcessRow,
  metrics: readonly ProcessMetric[],
  nowMs: number,
  commandStartToleranceSeconds: number | null,
): ProcessMetric | null {
  const expectedCommand = normalizeCommandForMatching(process.command);
  if (expectedCommand.length === 0) return null;

  const expectedAgeSeconds =
    process.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((nowMs - process.startedAtMs) / 1000));

  return (
    metrics
      .filter(
        (metric) =>
          commandTextMatches(expectedCommand, metric.command) &&
          (expectedAgeSeconds == null ||
            commandStartToleranceSeconds == null ||
            metric.ageSeconds == null ||
            getAgeDistance(metric.ageSeconds, expectedAgeSeconds) <=
              commandStartToleranceSeconds),
      )
      .sort((leftMetric, rightMetric) =>
        compareProcessMetricCandidates(
          leftMetric,
          rightMetric,
          expectedAgeSeconds,
        ),
      )[0] ?? null
  );
}

function compareProcessMetricCandidates(
  leftMetric: ProcessMetric,
  rightMetric: ProcessMetric,
  expectedAgeSeconds: number | null,
) {
  if (expectedAgeSeconds != null) {
    const leftAgeDistance = getAgeDistance(
      leftMetric.ageSeconds,
      expectedAgeSeconds,
    );
    const rightAgeDistance = getAgeDistance(
      rightMetric.ageSeconds,
      expectedAgeSeconds,
    );
    if (leftAgeDistance !== rightAgeDistance) {
      return leftAgeDistance - rightAgeDistance;
    }
  }

  const leftDepth = leftMetric.depth ?? 0;
  const rightDepth = rightMetric.depth ?? 0;
  return leftDepth === rightDepth
    ? leftMetric.pid - rightMetric.pid
    : leftDepth - rightDepth;
}

function getAgeDistance(
  actualAgeSeconds: number | null | undefined,
  expectedAgeSeconds: number,
) {
  return actualAgeSeconds == null
    ? Number.MAX_SAFE_INTEGER
    : Math.abs(actualAgeSeconds - expectedAgeSeconds);
}

export function initProcessMetricHelpersChunk() {}
