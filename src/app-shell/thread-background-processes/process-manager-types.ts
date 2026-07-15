// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Shared types for the background chat-process manager table panel.
import type { ReactNode } from "react";
import type {
  PendingProcessRowState,
  PendingProcessRowStatus,
  ProcessRowWithMetrics,
} from "./types";

export type ProcessManagerColumnId =
  | "command"
  | "chat"
  | "pid"
  | "cpu"
  | "memory"
  | "runtime"
  | "actions";

export type ColumnWidths = Record<ProcessManagerColumnId, number>;

export interface ColumnSortState {
  id: ProcessManagerColumnId;
  desc: boolean;
}

export interface ProcessManagerColumn {
  id: ProcessManagerColumnId;
  header: ReactNode;
  sortDescFirst?: boolean;
  cell: (row: ProcessRowWithMetrics, rowIndex: number) => ReactNode;
}

export interface HighlightedProcessTarget {
  processId: string;
  requestId: string;
}

export type ProcessActionStatesById = ReadonlyMap<
  string,
  PendingProcessRowState
>;

export type ProcessActionStatus = PendingProcessRowStatus | undefined;
