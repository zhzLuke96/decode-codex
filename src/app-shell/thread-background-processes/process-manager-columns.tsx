// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Column definitions and cell renderers for the process manager table: command,
// chat, pid, cpu, memory, runtime, and the per-row action menu.
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { classNames as cn } from "../../utils/class-names";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import { Spinner } from "../../ui/spinner";
import { RefreshIcon } from "../../icons/refresh-icon";
import { StopIcon } from "../../icons/stop-icon";
import {
  OverflowMenuButton,
  RawOutputIcon,
} from "../../boundaries/onboarding-commons-externals.facade";
import { getProcessRuntimeAgeSeconds } from "./process-metrics";
import { getPendingBackgroundProcessRow } from "./pending-process-rows";
import {
  formatCpuPercent,
  formatMemoryUsage,
  formatRuntimeDuration,
} from "./process-metric-format";
import { processManagerMessages } from "./process-manager-messages";
import type {
  ProcessActionStatesById,
  ProcessActionStatus,
  ProcessManagerColumn,
} from "./process-manager-types";
import type { ProcessRowWithMetrics } from "./types";

interface BuildProcessManagerColumnsOptions {
  nowMs: number;
  onActionMenuOpenChange: (row: ProcessRowWithMetrics, open: boolean) => void;
  onOpenOutput: (row: ProcessRowWithMetrics) => void;
  onRestartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStopProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  openActionMenuProcessId: string | null;
  processActionStatesById: ProcessActionStatesById;
}

export function buildProcessManagerColumns({
  nowMs,
  onActionMenuOpenChange,
  onOpenOutput,
  onRestartProcess,
  onStartProcess,
  onStopProcess,
  openActionMenuProcessId,
  processActionStatesById,
}: BuildProcessManagerColumnsOptions): ProcessManagerColumn[] {
  return [
    {
      header: <FormattedMessage {...processManagerMessages.commandColumn} />,
      id: "command",
      cell: (row) => (
        <CommandCell
          row={row}
          status={getRowStatus(row, processActionStatesById)}
        />
      ),
    },
    {
      header: <FormattedMessage {...processManagerMessages.chatColumn} />,
      id: "chat",
      cell: (row) => (
        <ChatTitleCell
          isStopped={getRowStatus(row, processActionStatesById) === "stopped"}
          title={row.process.chatTitle}
        />
      ),
    },
    {
      header: <FormattedMessage {...processManagerMessages.pidColumn} />,
      id: "pid",
      cell: (row) => (
        <MetricCell
          isStopped={getRowStatus(row, processActionStatesById) === "stopped"}
          value={getPidValue(row)}
        />
      ),
    },
    {
      header: <FormattedMessage {...processManagerMessages.cpuColumn} />,
      id: "cpu",
      sortDescFirst: true,
      cell: (row) => (
        <MetricCell
          isStopped={getRowStatus(row, processActionStatesById) === "stopped"}
          value={
            row.metrics?.cpuPercent == null
              ? null
              : formatCpuPercent(row.metrics.cpuPercent)
          }
        />
      ),
    },
    {
      header: <FormattedMessage {...processManagerMessages.memoryColumn} />,
      id: "memory",
      sortDescFirst: true,
      cell: (row) => (
        <MetricCell
          isStopped={getRowStatus(row, processActionStatesById) === "stopped"}
          value={
            row.metrics?.rssKb == null
              ? null
              : formatMemoryUsage(row.metrics.rssKb)
          }
        />
      ),
    },
    {
      header: <FormattedMessage {...processManagerMessages.runtimeColumn} />,
      id: "runtime",
      sortDescFirst: true,
      cell: (row) => {
        const status = getRowStatus(row, processActionStatesById);
        const ageSeconds = getProcessRuntimeAgeSeconds(row, nowMs);
        return (
          <MetricCell
            isStopped={status === "stopped"}
            value={
              ageSeconds == null ? null : formatRuntimeDuration(ageSeconds)
            }
          />
        );
      },
    },
    {
      header: (
        <span className="sr-only">
          <FormattedMessage {...processManagerMessages.actionsColumn} />
        </span>
      ),
      id: "actions",
      cell: (row, rowIndex) => (
        <ProcessRowActionsMenu
          open={openActionMenuProcessId === row.process.id}
          row={row}
          rowIndex={rowIndex}
          status={getRowStatus(row, processActionStatesById)}
          onOpenChange={(open) => onActionMenuOpenChange(row, open)}
          onOpenOutput={onOpenOutput}
          onRestartProcess={onRestartProcess}
          onStartProcess={onStartProcess}
          onStopProcess={onStopProcess}
        />
      ),
    },
  ];
}

interface MetricCellProps {
  isStopped?: boolean;
  value?: string | null;
}

function MetricCell({ isStopped, value }: MetricCellProps) {
  if (isStopped) {
    return (
      <span className="block text-right whitespace-nowrap text-token-description-foreground tabular-nums">
        <FormattedMessage
          id="codex.processManager.stoppedMetricPlaceholder"
          defaultMessage="-"
          description="Placeholder shown in metric columns for a stopped process"
        />
      </span>
    );
  }
  return (
    <span className="block text-right whitespace-nowrap text-token-foreground tabular-nums">
      {value ?? (
        <FormattedMessage
          id="codex.processManager.notAvailable"
          defaultMessage="n/a"
          description="Metric value shown when process usage data is unavailable"
        />
      )}
    </span>
  );
}

interface CommandCellProps {
  row: ProcessRowWithMetrics;
  status: ProcessActionStatus;
}

function CommandCell({ row, status }: CommandCellProps) {
  const command = getRowCommand(row);
  return (
    <span className="flex min-w-0 items-center gap-2">
      <ProcessStatusIndicator status={status} />
      <span
        className={cn(
          "block min-w-0 truncate font-medium",
          status === "starting" && "loading-shimmer-pure-text",
          status === "stopped" && "text-token-description-foreground",
        )}
        title={command}
      >
        {command}
      </span>
    </span>
  );
}

interface ChatTitleCellProps {
  isStopped: boolean;
  title?: string | null;
}

function ChatTitleCell({ isStopped, title }: ChatTitleCellProps) {
  return (
    <span
      className={cn(
        "block min-w-0 truncate whitespace-nowrap",
        isStopped
          ? "text-token-description-foreground"
          : "text-token-foreground",
      )}
      title={title ?? undefined}
    >
      {title ?? (
        <FormattedMessage
          id="codex.processManager.missingChatTitle"
          defaultMessage="-"
          description="Placeholder shown when a process manager row does not have a chat title"
        />
      )}
    </span>
  );
}

interface ProcessStatusIndicatorProps {
  status: ProcessActionStatus;
}

function ProcessStatusIndicator({ status }: ProcessStatusIndicatorProps) {
  const intl = useIntl();
  const label = intl.formatMessage(getStatusMessageDescriptor(status));

  if (status === "starting") {
    return (
      <span
        className="inline-flex size-3.5 shrink-0 items-center justify-center"
        title={label}
        aria-label={label}
        role="img"
      >
        <Spinner className="icon-xs text-token-charts-green" />
      </span>
    );
  }
  if (status === "stopping") {
    return (
      <span
        className="inline-flex size-3.5 shrink-0 items-center justify-center"
        title={label}
        aria-label={label}
        role="img"
      >
        <span className="block size-2 animate-pulse rounded-full bg-token-description-foreground" />
      </span>
    );
  }
  if (status === "stopped") {
    return (
      <span
        title={label}
        aria-label={label}
        role="img"
        className="inline-flex size-3.5 shrink-0 items-center justify-center"
      >
        <span className="block size-2 rounded-full bg-token-description-foreground" />
      </span>
    );
  }
  return (
    <span
      className="inline-flex size-3.5 shrink-0 items-center justify-center"
      title={label}
      aria-label={label}
      role="img"
    >
      <span className="block size-2 rounded-full bg-token-charts-green" />
    </span>
  );
}

interface ProcessRowActionsMenuProps {
  open: boolean;
  row: ProcessRowWithMetrics;
  rowIndex: number;
  status: ProcessActionStatus;
  onOpenChange: (open: boolean) => void;
  onOpenOutput: (row: ProcessRowWithMetrics) => void;
  onRestartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStartProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
  onStopProcess: (row: ProcessRowWithMetrics, rowIndex: number) => void;
}

function ProcessRowActionsMenu({
  open,
  row,
  rowIndex,
  status,
  onOpenChange,
  onOpenOutput,
  onRestartProcess,
  onStartProcess,
  onStopProcess,
}: ProcessRowActionsMenuProps) {
  const intl = useIntl();
  const isStarting = status === "starting";
  const isStopping = status === "stopping";
  const isStopped = status === "stopped";
  const isMissingLiveProcess =
    !isStopped &&
    row.process.stopAction === "kill-child-process" &&
    row.metrics?.pid == null;
  const canStartOrRestart =
    row.process.cwd != null &&
    !isStarting &&
    !isStopping &&
    !isMissingLiveProcess;

  const restartTooltip =
    row.process.cwd == null ? (
      <FormattedMessage
        {...processManagerMessages.restartMissingWorkspaceTooltip}
      />
    ) : isStarting ? (
      <FormattedMessage {...processManagerMessages.restartStartingTooltip} />
    ) : isStopping ? (
      <FormattedMessage {...processManagerMessages.restartStoppingTooltip} />
    ) : isMissingLiveProcess ? (
      <FormattedMessage
        {...processManagerMessages.restartMissingProcessTooltip}
      />
    ) : undefined;

  const startOrRestartMessage = isStopped
    ? processManagerMessages.start
    : processManagerMessages.restart;
  const handleStartOrRestart = () => {
    if (isStopped) {
      onStartProcess(row, rowIndex);
      return;
    }
    onRestartProcess(row, rowIndex);
  };

  const triggerButton = (
    <OverflowMenuButton
      label={intl.formatMessage(processManagerMessages.rowActions)}
      size="toolbar"
      iconClassName="icon-xs"
      className="text-token-description-foreground hover:text-token-foreground data-[state=open]:text-token-foreground"
    />
  );

  return (
    <div
      className="flex justify-end"
      onClick={stopRowActionsClickPropagation}
      onKeyDown={stopRowActionsKeyDownPropagation}
    >
      <DropdownMenu
        align="end"
        animateExit={false}
        contentClassName="!animate-none"
        contentWidth="xs"
        open={open}
        onOpenChange={onOpenChange}
        triggerButton={triggerButton}
      >
        <Dropdown.Item
          LeftIcon={RawOutputIcon}
          leftIconClassName="icon-xs"
          onSelect={() => onOpenOutput(row)}
        >
          <FormattedMessage {...processManagerMessages.openOutput} />
        </Dropdown.Item>
        <Dropdown.Item
          LeftIcon={StopIcon}
          leftIconClassName="icon-xs"
          disabled={isStarting || isStopping || isStopped}
          onSelect={() => onStopProcess(row, rowIndex)}
        >
          <FormattedMessage {...processManagerMessages.stop} />
        </Dropdown.Item>
        <Dropdown.Item
          LeftIcon={RefreshIcon}
          leftIconClassName="icon-xs"
          disabled={!canStartOrRestart}
          tooltipText={restartTooltip}
          tooltipInteractive={restartTooltip != null}
          onSelect={handleStartOrRestart}
        >
          <FormattedMessage {...startOrRestartMessage} />
        </Dropdown.Item>
      </DropdownMenu>
    </div>
  );
}

function stopRowActionsClickPropagation(event: {
  stopPropagation: () => void;
}) {
  event.stopPropagation();
}

function stopRowActionsKeyDownPropagation(event: {
  stopPropagation: () => void;
}) {
  event.stopPropagation();
}

export function getRowCommand(row: ProcessRowWithMetrics): string {
  return row.metrics?.command ?? row.process.command;
}

function getPidValue(row: ProcessRowWithMetrics): string | null {
  const pid = row.metrics?.pid ?? row.process.osPid;
  return pid == null ? null : String(pid);
}

function getRowStatus(
  row: ProcessRowWithMetrics,
  processActionStatesById: ProcessActionStatesById,
): ProcessActionStatus {
  return getPendingBackgroundProcessRow(row, processActionStatesById)?.status;
}

function getStatusMessageDescriptor(status: ProcessActionStatus) {
  return status === "starting"
    ? processManagerMessages.startingStatus
    : status === "stopping"
      ? processManagerMessages.stoppingStatus
      : status === "stopped"
        ? processManagerMessages.stoppedStatus
        : processManagerMessages.runningStatus;
}
