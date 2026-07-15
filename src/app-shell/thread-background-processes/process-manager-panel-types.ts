// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
import type {
  HighlightedProcessTarget,
  ProcessActionStatesById,
} from "./process-manager-types";
import type { ProcessRowWithMetrics } from "./types";

export interface FrozenProcessManagerSnapshot {
  nowMs: number;
  processActionStatesById: ProcessActionStatesById;
  rows: ProcessRowWithMetrics[];
}

export interface ProcessManagerPanelProps {
  highlightedProcessTarget: HighlightedProcessTarget | null;
  nowMs: number;
  onActionMenuOpenChange: (open: boolean) => void;
  onOpenOutput: (row: ProcessRowWithMetrics) => void;
  onRestartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStopProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  processActionStatesById: ProcessActionStatesById;
  rows: ProcessRowWithMetrics[];
}
