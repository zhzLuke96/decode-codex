// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline "PID" badges rendered beneath an assistant message that started one or
// more live OS processes. Clicking a badge opens the process manager focused on
// that process. Polls the host for live PIDs while the badge list is mounted.
import { useState } from "react";
import type { ReactElement } from "react";
import {
  useIntl,
  FormattedMessage,
  defineMessages,
} from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import {
  useAppScope,
  useFeatureGate,
  useScopedQuery,
  createScopedSignal,
  appStoreScope,
  ElectronOnlyGate,
  dispatchAppCommand,
} from "../boundaries/onboarding-commons-externals.facade";

const LIVE_PIDS_GATE_ID = "3264431617";
const LIVE_PIDS_POLL_INTERVAL_MS = 2_000;

const DEFAULT_PROCESS_TARGETS: ProcessTarget[] = [];

const messages = defineMessages({
  openProcessManager: {
    id: "codex.processManager.openProcessManagerForPid",
    defaultMessage: "Open Process Manager for running PID {pid}",
    description:
      "Accessible label for a process PID badge that opens the process manager",
  },
  pidBadge: {
    id: "codex.processManager.pidBadge",
    defaultMessage: "PID {pid}",
    description:
      "Inline badge label shown next to an assistant message that started a live process",
  },
});

interface OpenProcessManagerRequest {
  processId: string;
  requestId: number;
}

const openProcessManagerRequestSignal =
  createScopedSignal<OpenProcessManagerRequest | null>(
    appStoreScope,
    () => null,
  );

let openProcessManagerRequestCounter = 0;

function requestOpenProcessManager(
  store: { set: (signal: unknown, value: OpenProcessManagerRequest) => void },
  processId: string,
): void {
  openProcessManagerRequestCounter += 1;
  store.set(openProcessManagerRequestSignal, {
    processId,
    requestId: openProcessManagerRequestCounter,
  });
}

export type ProcessTarget = unknown;

interface LiveProcess {
  id: string;
  pid: number;
}

export interface ProcessPidBadgesProps {
  className?: string;
  conversationId: string;
  processTargets?: ProcessTarget[];
  turnId: string;
}

export function ProcessPidBadges({
  className,
  conversationId,
  processTargets,
  turnId,
}: ProcessPidBadgesProps): ReactElement {
  const resolvedTargets =
    processTargets === undefined ? DEFAULT_PROCESS_TARGETS : processTargets;
  return (
    <ElectronOnlyGate electron>
      <ProcessPidBadgesContent
        className={className}
        conversationId={conversationId}
        processTargets={resolvedTargets}
        turnId={turnId}
      />
    </ElectronOnlyGate>
  );
}

function ProcessPidBadgesContent({
  className,
  conversationId,
  processTargets,
  turnId,
}: Required<Omit<ProcessPidBadgesProps, "className">> & {
  className?: string;
}): ReactElement | null {
  const liveProcessesEnabled = useFeatureGate(LIVE_PIDS_GATE_ID);
  const store = useAppScope(appStoreScope);
  const intl = useIntl();

  const { data } = useScopedQuery("chat-process-live-pids", {
    params: { conversationId, processTargets, turnId },
    queryConfig: {
      enabled: liveProcessesEnabled,
      intervalMs: LIVE_PIDS_POLL_INTERVAL_MS,
    },
  });

  const processes: LiveProcess[] | undefined = data?.processes;
  if (!liveProcessesEnabled || processes == null || processes.length === 0) {
    return null;
  }

  return (
    <div className={classNames("my-2 flex flex-wrap gap-2", className)}>
      {processes.map((process) => (
        <button
          key={process.id}
          type="button"
          aria-label={intl.formatMessage(messages.openProcessManager, {
            pid: process.pid,
          })}
          className="text-size-chat-sm focus-visible:ring-token-border-focus inline-flex cursor-interaction items-center gap-1.5 rounded-full bg-token-foreground/10 px-2.5 py-1 leading-5 font-medium text-token-text-secondary hover:bg-token-foreground/15 hover:text-token-text-primary focus:outline-none focus-visible:ring-2"
          onClick={() => {
            requestOpenProcessManager(store, process.id);
            dispatchAppCommand("openProcessManager", "process_manager_badge");
          }}
        >
          <span
            className="block size-1.5 rounded-full bg-token-charts-green"
            aria-hidden
          />
          <FormattedMessage
            {...messages.pidBadge}
            values={{ pid: process.pid }}
          />
        </button>
      ))}
    </div>
  );
}
