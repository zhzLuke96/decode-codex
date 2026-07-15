// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
import {
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { ChevronDownIcon } from "../../boundaries/onboarding-commons-externals.facade";
import { classNames as cn } from "../../utils/class-names";
import {
  COLUMN_RESIZE_STEP_PX,
  PROCESS_MANAGER_COLUMN_CONFIG,
} from "./process-manager-column-config";
import type { ProcessManagerColumnId } from "./process-manager-types";

interface SortableColumnHeaderProps {
  label: ReactNode;
  onClick: () => void;
  sortDirection: "asc" | "desc" | false;
}

export function SortableColumnHeader({
  label,
  onClick,
  sortDirection,
}: SortableColumnHeaderProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full cursor-interaction items-center gap-1 text-left whitespace-nowrap uppercase",
        sortDirection
          ? "text-token-foreground"
          : "text-token-description-foreground",
      )}
      onClick={onClick}
    >
      <span>{label}</span>
      {sortDirection ? (
        <ChevronDownIcon
          className={cn(
            "icon-2xs shrink-0",
            sortDirection === "asc" && "rotate-180",
          )}
        />
      ) : null}
    </button>
  );
}

interface ColumnResizeHandleProps {
  ariaLabel: string;
  columnId: ProcessManagerColumnId;
  onResize: (columnId: ProcessManagerColumnId, width: number) => void;
  width: number;
}

interface ColumnResizeDragState {
  pointerId: number;
  startWidth: number;
  startX: number;
}

export function ColumnResizeHandle({
  ariaLabel,
  columnId,
  onResize,
  width,
}: ColumnResizeHandleProps) {
  const [dragState, setDragState] = useState<ColumnResizeDragState | null>(
    null,
  );
  const config = PROCESS_MANAGER_COLUMN_CONFIG[columnId];

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragState(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      onResize(
        columnId,
        width +
          (event.key === "ArrowRight"
            ? COLUMN_RESIZE_STEP_PX
            : -COLUMN_RESIZE_STEP_PX),
      );
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({
      pointerId: event.pointerId,
      startWidth: width,
      startX: event.clientX,
    });
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragState == null || dragState.pointerId !== event.pointerId) return;
    event.preventDefault();
    onResize(columnId, dragState.startWidth + event.clientX - dragState.startX);
  };

  return (
    <div
      role="separator"
      aria-label={ariaLabel}
      aria-orientation="vertical"
      aria-valuemin={config.minWidth}
      aria-valuenow={width}
      tabIndex={0}
      className="group/resize-handle absolute inset-y-0 -end-1 z-[2] w-2 cursor-col-resize touch-none select-none focus:outline-none"
      onClick={stopColumnResizeClickPropagation}
      onKeyDown={handleKeyDown}
      onPointerCancel={endDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
    >
      <span className="absolute inset-y-1 left-1/2 w-0.5 -translate-x-1/2 rounded bg-transparent group-hover/resize-handle:bg-token-description-foreground/40 group-focus-visible/resize-handle:bg-token-focus-border" />
    </div>
  );
}

function stopColumnResizeClickPropagation(event: {
  stopPropagation: () => void;
}) {
  event.stopPropagation();
}
