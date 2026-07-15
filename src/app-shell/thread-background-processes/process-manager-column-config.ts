// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
import { processManagerMessages } from "./process-manager-messages";
import type {
  ColumnWidths,
  ProcessManagerColumnId,
} from "./process-manager-types";

export const MIN_VISIBLE_ROWS = 5;
export const COLUMN_RESIZE_STEP_PX = 16;

export const PROCESS_MANAGER_COLUMN_CONFIG: Record<
  ProcessManagerColumnId,
  { initialWidth: number; minWidth: number }
> = {
  actions: { initialWidth: 44, minWidth: 44 },
  chat: { initialWidth: 120, minWidth: 96 },
  command: { initialWidth: 200, minWidth: 160 },
  cpu: { initialWidth: 64, minWidth: 58 },
  memory: { initialWidth: 80, minWidth: 72 },
  pid: { initialWidth: 58, minWidth: 58 },
  runtime: { initialWidth: 74, minWidth: 68 },
};

export function createInitialColumnWidths(): ColumnWidths {
  return {
    actions: PROCESS_MANAGER_COLUMN_CONFIG.actions.initialWidth,
    chat: PROCESS_MANAGER_COLUMN_CONFIG.chat.initialWidth,
    command: PROCESS_MANAGER_COLUMN_CONFIG.command.initialWidth,
    cpu: PROCESS_MANAGER_COLUMN_CONFIG.cpu.initialWidth,
    memory: PROCESS_MANAGER_COLUMN_CONFIG.memory.initialWidth,
    pid: PROCESS_MANAGER_COLUMN_CONFIG.pid.initialWidth,
    runtime: PROCESS_MANAGER_COLUMN_CONFIG.runtime.initialWidth,
  };
}

export function getColumnLabelMessage(columnId: ProcessManagerColumnId) {
  switch (columnId) {
    case "chat":
      return processManagerMessages.chatColumn;
    case "command":
      return processManagerMessages.commandColumn;
    case "cpu":
      return processManagerMessages.cpuColumn;
    case "memory":
      return processManagerMessages.memoryColumn;
    case "pid":
      return processManagerMessages.pidColumn;
    case "runtime":
    default:
      return processManagerMessages.runtimeColumn;
  }
}
