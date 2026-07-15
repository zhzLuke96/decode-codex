// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
import { getProcessRowSortTarget } from "./pending-process-rows";
import { getRowCommand } from "./process-manager-columns";
import { getProcessRuntimeAgeSeconds } from "./process-metrics";
import type {
  ColumnSortState,
  ProcessActionStatesById,
  ProcessManagerColumnId,
} from "./process-manager-types";
import type { ProcessRowWithMetrics } from "./types";

const PROCESS_SORT_COLLATOR = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export function nextColumnSort(
  columnId: ProcessManagerColumnId,
  sortDescFirst: boolean | undefined,
  currentSort: ColumnSortState,
): ColumnSortState {
  return currentSort.id === columnId
    ? { id: columnId, desc: !currentSort.desc }
    : { id: columnId, desc: sortDescFirst ?? false };
}

export function sortProcessRows(
  rows: readonly ProcessRowWithMetrics[],
  sortState: ColumnSortState,
  processActionStatesById: ProcessActionStatesById,
  nowMs: number,
): ProcessRowWithMetrics[] {
  return rows
    .map((row, index) => ({ index, row }))
    .sort((left, right) => {
      const comparison = compareSortValues(
        getSortValue(left.row, sortState.id, processActionStatesById, nowMs),
        getSortValue(right.row, sortState.id, processActionStatesById, nowMs),
        sortState.desc,
      );
      return comparison === 0 ? left.index - right.index : comparison;
    })
    .map(({ row }) => row);
}

function getSortValue(
  row: ProcessRowWithMetrics,
  columnId: ProcessManagerColumnId,
  processActionStatesById: ProcessActionStatesById,
  nowMs: number,
): string | number | null | undefined {
  const sortTarget = getProcessRowSortTarget(row, processActionStatesById);
  switch (columnId) {
    case "command":
      return getRowCommand(sortTarget);
    case "chat":
      return sortTarget.process.chatTitle ?? "";
    case "pid":
      return sortTarget.metrics?.pid ?? sortTarget.process.osPid;
    case "cpu":
      return sortTarget.metrics?.cpuPercent;
    case "memory":
      return sortTarget.metrics?.rssKb;
    case "runtime":
      return getProcessRuntimeAgeSeconds(sortTarget, nowMs);
    default:
      return undefined;
  }
}

function compareSortValues(
  left: string | number | null | undefined,
  right: string | number | null | undefined,
  desc: boolean,
): number {
  if (left == null && right == null) return 0;
  if (left == null) return 1;
  if (right == null) return -1;
  if (typeof left === "number" && typeof right === "number") {
    return desc ? right - left : left - right;
  }
  const comparison = PROCESS_SORT_COLLATOR.compare(String(left), String(right));
  return desc ? -comparison : comparison;
}
