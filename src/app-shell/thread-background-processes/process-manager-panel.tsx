// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Background chat-process manager panel: the sortable, resizable, keyboard-navigable
// table of running/stopped chat-started processes shown inside the process manager popover.
import { useEffectEvent, useState } from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { classNames as cn } from "../../utils/class-names";
import { buildProcessManagerColumns } from "./process-manager-columns";
import {
  createInitialColumnWidths,
  getColumnLabelMessage,
  MIN_VISIBLE_ROWS,
  PROCESS_MANAGER_COLUMN_CONFIG,
} from "./process-manager-column-config";
import type {
  FrozenProcessManagerSnapshot,
  ProcessManagerPanelProps,
} from "./process-manager-panel-types";
import {
  focusFirstRowRef,
  focusHighlightedRowRef,
} from "./process-manager-row-navigation";
import { rowBackgroundClass } from "./process-manager-row-style";
import { nextColumnSort, sortProcessRows } from "./process-manager-sort";
import {
  ColumnResizeHandle,
  SortableColumnHeader,
} from "./process-manager-table-controls";
import { processManagerMessages } from "./process-manager-messages";
import type {
  ColumnSortState,
  ColumnWidths,
  ProcessManagerColumnId,
} from "./process-manager-types";
import type { ProcessRowWithMetrics } from "./types";

export type { ProcessManagerPanelProps } from "./process-manager-panel-types";

export function ProcessManagerPanel({
  highlightedProcessTarget,
  nowMs,
  onActionMenuOpenChange,
  onOpenOutput,
  onRestartProcess,
  onStartProcess,
  onStopProcess,
  processActionStatesById,
  rows,
}: ProcessManagerPanelProps) {
  const intl = useIntl();
  const [sortState, setSortState] = useState<ColumnSortState>({
    desc: true,
    id: "cpu",
  });
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>(
    createInitialColumnWidths,
  );
  const [openActionMenuProcessId, setOpenActionMenuProcessId] = useState<
    string | null
  >(null);
  const [frozenSnapshot, setFrozenSnapshot] =
    useState<FrozenProcessManagerSnapshot | null>(null);

  const effectiveRows = frozenSnapshot?.rows ?? rows;
  const effectiveActionStates =
    frozenSnapshot?.processActionStatesById ?? processActionStatesById;
  const effectiveNowMs = frozenSnapshot?.nowMs ?? nowMs;

  const handleActionMenuOpenChange = useEffectEvent(
    (row: ProcessRowWithMetrics, open: boolean) => {
      if (open) {
        setFrozenSnapshot({
          nowMs: effectiveNowMs,
          processActionStatesById: effectiveActionStates,
          rows: effectiveRows,
        });
        setOpenActionMenuProcessId(row.process.id);
        onActionMenuOpenChange(true);
        return;
      }
      setOpenActionMenuProcessId((current) =>
        current === row.process.id ? null : current,
      );
      setFrozenSnapshot(null);
      onActionMenuOpenChange(false);
    },
  );

  const handleOpenOutput = useEffectEvent((row: ProcessRowWithMetrics) => {
    setOpenActionMenuProcessId(null);
    setFrozenSnapshot(null);
    onActionMenuOpenChange(false);
    onOpenOutput(row);
  });

  const handleRestartProcess = useEffectEvent(
    (row: ProcessRowWithMetrics, rowIndex: number) => {
      setOpenActionMenuProcessId(null);
      setFrozenSnapshot(null);
      onActionMenuOpenChange(false);
      onRestartProcess(row, rowIndex);
    },
  );

  const handleStartProcess = useEffectEvent(
    (row: ProcessRowWithMetrics, rowIndex: number) => {
      setOpenActionMenuProcessId(null);
      setFrozenSnapshot(null);
      onActionMenuOpenChange(false);
      onStartProcess(row, rowIndex);
    },
  );

  const handleStopProcess = useEffectEvent(
    (row: ProcessRowWithMetrics, rowIndex: number) => {
      setOpenActionMenuProcessId(null);
      setFrozenSnapshot(null);
      onActionMenuOpenChange(false);
      onStopProcess(row, rowIndex);
    },
  );

  const columns = buildProcessManagerColumns({
    nowMs: effectiveNowMs,
    onActionMenuOpenChange: handleActionMenuOpenChange,
    onOpenOutput: handleOpenOutput,
    onRestartProcess: handleRestartProcess,
    onStartProcess: handleStartProcess,
    onStopProcess: handleStopProcess,
    openActionMenuProcessId,
    processActionStatesById: effectiveActionStates,
  });

  const handleColumnResize = (
    columnId: ProcessManagerColumnId,
    width: number,
  ) => {
    setColumnWidths((current) => ({
      ...current,
      [columnId]: Math.max(
        PROCESS_MANAGER_COLUMN_CONFIG[columnId].minWidth,
        width,
      ),
    }));
  };

  const tableWidth = columns.reduce(
    (total, column) => total + columnWidths[column.id],
    0,
  );
  const sortedRows = sortProcessRows(
    effectiveRows,
    sortState,
    effectiveActionStates,
    effectiveNowMs,
  );
  const fillerRowIndices = Array.from(
    { length: Math.max(0, MIN_VISIBLE_ROWS - sortedRows.length) },
    (_, offset) => sortedRows.length + offset,
  );

  const emptyState =
    effectiveRows.length === 0 ? (
      <div className="pointer-events-none absolute inset-x-0 top-9 bottom-0 z-[1] flex items-center justify-center px-6 text-sm text-token-description-foreground">
        <FormattedMessage
          id="codex.processManager.empty"
          defaultMessage="No running chat-started processes"
          description="Empty state in the process manager popover"
        />
      </div>
    ) : null;

  return (
    <div className="relative">
      {emptyState}
      <div
        className="h-[240px] overflow-auto"
        data-process-manager-scroll={true}
        ref={highlightedProcessTarget == null ? focusFirstRowRef : undefined}
      >
        <table
          className="min-w-full table-fixed border-collapse text-sm whitespace-nowrap"
          style={{ width: tableWidth }}
        >
          <colgroup>
            {columns.map((column) => (
              <col key={column.id} style={{ width: columnWidths[column.id] }} />
            ))}
          </colgroup>
          <thead className="sticky top-0 z-[1] bg-token-dropdown-background">
            <tr>
              {columns.map((column) => {
                const sortDirection =
                  sortState.id === column.id
                    ? sortState.desc
                      ? "desc"
                      : "asc"
                    : false;
                return (
                  <th
                    key={column.id}
                    aria-sort={
                      sortDirection === "asc"
                        ? "ascending"
                        : sortDirection === "desc"
                          ? "descending"
                          : "none"
                    }
                    className="relative border-b border-token-border/70 px-3 py-2 text-left text-xs font-semibold whitespace-nowrap text-token-description-foreground uppercase"
                  >
                    {column.id === "actions" ? (
                      column.header
                    ) : (
                      <SortableColumnHeader
                        label={column.header}
                        sortDirection={sortDirection}
                        onClick={() =>
                          setSortState((current) =>
                            nextColumnSort(
                              column.id,
                              column.sortDescFirst,
                              current,
                            ),
                          )
                        }
                      />
                    )}
                    {column.id === "actions" ? null : (
                      <ColumnResizeHandle
                        ariaLabel={intl.formatMessage(
                          processManagerMessages.resizeColumn,
                          {
                            column: intl.formatMessage(
                              getColumnLabelMessage(column.id),
                            ),
                          },
                        )}
                        columnId={column.id}
                        width={columnWidths[column.id]}
                        onResize={handleColumnResize}
                      />
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, rowIndex) => {
              const isHighlighted =
                row.process.id === highlightedProcessTarget?.processId;
              return (
                <tr
                  key={
                    isHighlighted
                      ? `${row.process.id}:${highlightedProcessTarget.requestId}`
                      : row.process.id
                  }
                  data-process-manager-row="true"
                  tabIndex={0}
                  ref={isHighlighted ? focusHighlightedRowRef : null}
                  className={cn(
                    "group h-10 cursor-interaction border-b border-token-border/40 last:border-b-0 hover:bg-token-list-hover-background focus:bg-token-list-hover-background focus:outline-none focus-visible:bg-token-list-hover-background focus-visible:outline-none",
                    rowBackgroundClass(rowIndex, isHighlighted),
                  )}
                  onClick={() => handleOpenOutput(row)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleOpenOutput(row);
                    }
                  }}
                >
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className="px-3 py-2 align-middle whitespace-nowrap"
                    >
                      {column.cell(row, rowIndex)}
                    </td>
                  ))}
                </tr>
              );
            })}
            {fillerRowIndices.map((index) => (
              <tr
                key={`empty-${index}`}
                aria-hidden={true}
                className={cn(
                  "h-10 border-b border-token-border/20 last:border-b-0",
                  rowBackgroundClass(index, false),
                )}
              >
                <td colSpan={columns.length} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
