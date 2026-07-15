// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Pending/stopping process row state that keeps UI rows stable while process actions settle.
import {
  _appScopeC as createAppScopeSelector,
  appScopeRoot,
  createAppScopeSignal,
} from "../../boundaries/app-scope";
import { getProcessRuntimeAgeSeconds } from "./process-metrics";
import { isSameProcessRow } from "./process-rows";
import type {
  AppScopeStore,
  PendingProcessRowState,
  ProcessRowWithMetrics,
} from "./types";

const STARTING_PROCESS_BACKDATE_MS = 1_000;

export const pendingBackgroundProcessRowsSignal = createAppScopeSignal(
  appScopeRoot,
  new Map<string, PendingProcessRowState>(),
);

export const computerUsePictureInPictureVisibleSignal = createAppScopeSignal(
  appScopeRoot,
  true,
);

export const computerUsePictureInPictureAvailableSignal = createAppScopeSignal(
  appScopeRoot,
  false,
);

export const hasComputerUsePictureInPictureSignal = createAppScopeSelector(
  appScopeRoot,
  () => false,
);

export function setPendingBackgroundProcessRow(
  store: AppScopeStore,
  processId: string,
  state: PendingProcessRowState,
) {
  store.set(
    pendingBackgroundProcessRowsSignal,
    setPendingProcessRowState(
      store.get(pendingBackgroundProcessRowsSignal),
      processId,
      state,
    ),
  );
}

export function removePendingBackgroundProcessRow(
  store: AppScopeStore,
  processId: string,
) {
  store.set(
    pendingBackgroundProcessRowsSignal,
    deletePendingProcessRowState(
      store.get(pendingBackgroundProcessRowsSignal),
      processId,
    ),
  );
}

export function clearStoppedPendingProcessRows(store: AppScopeStore) {
  store.set(
    pendingBackgroundProcessRowsSignal,
    removeStoppedPendingProcessRows(
      store.get(pendingBackgroundProcessRowsSignal),
    ),
  );
}

export function insertPendingProcessRows(
  rows: readonly ProcessRowWithMetrics[],
  pendingRows: ReadonlyMap<string, PendingProcessRowState>,
): ProcessRowWithMetrics[] {
  if (pendingRows.size === 0) return [...rows];

  const mergedRows = rows.slice();
  const rowsToInsert: Array<{
    row: ProcessRowWithMetrics;
    rowIndex: number;
  }> = [];

  for (const pendingRow of pendingRows.values()) {
    if (hasMatchingProcessRow(rows, pendingRow.row)) continue;

    rowsToInsert.push({
      row: pendingRow.row,
      rowIndex: pendingRow.rowIndex ?? mergedRows.length,
    });
  }

  rowsToInsert.sort(
    (leftRow, rightRow) => leftRow.rowIndex - rightRow.rowIndex,
  );
  for (const pendingRow of rowsToInsert) {
    mergedRows.splice(
      Math.min(pendingRow.rowIndex, mergedRows.length),
      0,
      pendingRow.row,
    );
  }

  return mergedRows;
}

export function prunePendingProcessRows(
  rows: readonly ProcessRowWithMetrics[],
  pendingRows: ReadonlyMap<string, PendingProcessRowState>,
  nowMs: number,
) {
  if (pendingRows.size === 0) return pendingRows;

  const rowsByProcessId = new Map(
    rows.map((row) => [row.process.id, row] as const),
  );
  const nextPendingRows = new Map<string, PendingProcessRowState>();

  for (const [processId, pendingRow] of pendingRows) {
    if (
      !isPendingProcessRowExpired(
        pendingRow,
        rowsByProcessId.get(processId) ??
          findMatchingProcessRow(rows, pendingRow.row),
        nowMs,
      )
    ) {
      nextPendingRows.set(processId, pendingRow);
    }
  }

  return nextPendingRows;
}

export function getProcessRowSortTarget(
  row: ProcessRowWithMetrics,
  pendingRows: ReadonlyMap<string, PendingProcessRowState>,
) {
  return getPendingBackgroundProcessRow(row, pendingRows)?.sortRow ?? row;
}

export function getPendingBackgroundProcessRow(
  row: ProcessRowWithMetrics,
  pendingRows: ReadonlyMap<string, PendingProcessRowState>,
) {
  const pendingRow = pendingRows.get(row.process.id);
  if (pendingRow != null) return pendingRow;

  for (const candidate of pendingRows.values()) {
    if (isSameProcessRow(row.process, candidate.row.process)) {
      return candidate;
    }
  }
}

export function isPendingProcessRowExpired(
  pendingRow: PendingProcessRowState,
  matchingRow: ProcessRowWithMetrics | null | undefined,
  nowMs: number,
): boolean {
  return pendingRow.status === "starting"
    ? pendingRow.expiresAtMs != null && pendingRow.expiresAtMs <= nowMs
      ? true
      : matchingRow == null
        ? false
        : hasStartingRowCaughtUp(pendingRow, matchingRow, nowMs)
    : false;
}

function setPendingProcessRowState(
  rows: ReadonlyMap<string, PendingProcessRowState>,
  processId: string,
  state: PendingProcessRowState,
) {
  return new Map(rows).set(processId, state);
}

function deletePendingProcessRowState(
  rows: ReadonlyMap<string, PendingProcessRowState>,
  processId: string,
) {
  const nextRows = new Map(rows);
  nextRows.delete(processId);
  return nextRows;
}

function removeStoppedPendingProcessRows(
  rows: ReadonlyMap<string, PendingProcessRowState>,
) {
  return new Map(
    Array.from(rows).filter(([, row]) => row.status !== "stopped"),
  );
}

function hasStartingRowCaughtUp(
  pendingRow: PendingProcessRowState,
  matchingRow: ProcessRowWithMetrics,
  nowMs: number,
) {
  const startedAtMs = pendingRow.row.process.startedAtMs;
  const ageSeconds = matchingRow.metrics?.ageSeconds;
  return (
    startedAtMs == null ||
    ageSeconds == null ||
    nowMs - ageSeconds * 1000 >= startedAtMs - STARTING_PROCESS_BACKDATE_MS
  );
}

function hasMatchingProcessRow(
  rows: readonly ProcessRowWithMetrics[],
  row: ProcessRowWithMetrics,
) {
  return findMatchingProcessRow(rows, row) != null;
}

function findMatchingProcessRow(
  rows: readonly ProcessRowWithMetrics[],
  row: ProcessRowWithMetrics,
) {
  return rows.find((candidate) =>
    isSameProcessRow(candidate.process, row.process),
  );
}

export function initPendingBackgroundProcessRowsChunk() {}

export function initThreadSummaryPanelSignalsChunk() {}
