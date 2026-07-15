// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the hook-runs affordance on a user message: an icon button whose
// tooltip summarizes how many hooks ran (and per-run detail in code mode).
import type { ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { formatHookEventName } from "../settings/hooks-settings-copy";
import {
  HookActivityIcon,
  FormattedCount,
  parseHookSourceKind,
  STEPS_COMMANDS_DETAIL_LEVEL,
} from "../boundaries/onboarding-commons-externals.facade";

type HookStatsEntryKind = "feedback" | "stop" | "error";

interface HookStatsEntry {
  kind: HookStatsEntryKind;
  text: string;
}

type HookRunTone = "error" | "warning";

interface HookRunToneEntry {
  tone: HookRunTone;
  text: string;
}

interface HookRunSummary {
  eventName: string;
  source: string;
  count: number;
  statusMessage?: string | null;
  entries: HookRunToneEntry[];
}

export interface HookRunStats {
  count: number;
  blockedCount: number;
  errorCount: number;
  entries: HookStatsEntry[];
  runs: HookRunSummary[];
}

export interface HookStatsTooltipButtonProps {
  stats: HookRunStats;
  threadDetailLevel?: string;
}

export function HookStatsTooltipButton({
  stats,
  threadDetailLevel,
}: HookStatsTooltipButtonProps) {
  const intl = useIntl();
  const isStepsCommandsLevel =
    (threadDetailLevel ?? "STEPS_COMMANDS") === STEPS_COMMANDS_DETAIL_LEVEL;
  const accessibleLabel = intl.formatMessage({
    id: "assistantMessage.hookStats.label",
    defaultMessage: "Hooks",
    description: "Accessible label for hook runs",
  });

  const tooltipContent = isStepsCommandsLevel ? (
    <HookRunDetailList stats={stats} />
  ) : (
    <HookRunSummaryList stats={stats} />
  );

  return (
    <Tooltip
      tooltipContent={tooltipContent}
      tooltipClassName="px-3 py-2"
      tooltipMaxWidth="min(32rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
    >
      <Button color="ghost" size="icon" aria-label={accessibleLabel}>
        <HookActivityIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

interface HookRunStatsListProps {
  stats: HookRunStats;
}

function HookRunSummaryList({ stats }: HookRunStatsListProps) {
  const title = (
    <div className="font-medium">
      <FormattedMessage
        id="assistantMessage.hookStats.title"
        defaultMessage="Hooks summary"
        description="Title for hook summary tooltip"
      />
    </div>
  );

  const ranLabel = (
    <span>
      <FormattedMessage
        id="assistantMessage.hookStats.ranCount"
        defaultMessage="Ran"
        description="Label for hook runs counted in the hook stats tooltip"
      />
    </span>
  );
  const ranValue = (
    <span className="text-right text-token-text-primary">
      <FormattedCount value={stats.count} />
    </span>
  );

  const blockedRow =
    stats.blockedCount > 0 ? (
      <>
        <span>
          <FormattedMessage
            id="assistantMessage.hookStats.blockedCount"
            defaultMessage="Blocked"
            description="Label for blocked hook runs counted in the hook stats tooltip"
          />
        </span>
        <span className="text-right text-token-text-primary">
          <FormattedCount value={stats.blockedCount} />
        </span>
      </>
    ) : null;

  const errorRow =
    stats.errorCount > 0 ? (
      <>
        <span>
          <FormattedMessage
            id="assistantMessage.hookStats.errorCount"
            defaultMessage="Errors"
            description="Label for failed hook runs counted in the hook stats tooltip"
          />
        </span>
        <span className="text-right text-token-text-primary">
          <FormattedCount value={stats.errorCount} />
        </span>
      </>
    ) : null;

  const countGrid = (
    <div className="grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-token-text-secondary">
      {ranLabel}
      {ranValue}
      {blockedRow}
      {errorRow}
    </div>
  );

  const entryList =
    stats.entries.length > 0 ? (
      <ul className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1">
        {stats.entries.map(renderSummaryEntry)}
      </ul>
    ) : null;

  return (
    <div className="flex min-w-0 flex-col gap-2 text-left">
      {title}
      {countGrid}
      {entryList}
    </div>
  );
}

function renderSummaryEntry(entry: HookStatsEntry, index: number): ReactNode {
  return (
    <li
      key={`${entry.kind}:${String(index)}:${entry.text}`}
      className="contents"
    >
      <span className="text-token-text-secondary">
        {renderEntryKindLabel(entry.kind)}
      </span>
      <span className="min-w-0 break-words whitespace-pre-wrap text-token-text-primary">
        {entry.text}
      </span>
    </li>
  );
}

function HookRunDetailList({ stats }: HookRunStatsListProps) {
  const intl = useIntl();
  const title = (
    <div className="font-medium">
      <FormattedMessage
        id="assistantMessage.hookStats.codeTitle"
        defaultMessage="Hooks"
        description="Title for detailed hook runs tooltip in code mode"
      />
    </div>
  );

  const runRows = stats.runs.map((run, index) => (
    <HookRunDetailRow
      key={`${run.eventName}:${String(index)}`}
      run={run}
      intl={intl}
    />
  ));

  return (
    <div className="flex min-w-0 flex-col gap-2 text-left">
      {title}
      <ul className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1">
        {runRows}
      </ul>
    </div>
  );
}

interface HookRunDetailRowProps {
  run: HookRunSummary;
  intl: ReturnType<typeof useIntl>;
}

function HookRunDetailRow({ run, intl }: HookRunDetailRowProps) {
  return (
    <>
      <li className="text-token-text-primary">
        {formatHookEventName(run.eventName, intl)}
      </li>
      <li className="flex min-w-0 flex-col">
        <span className="min-w-0 break-words whitespace-pre-wrap text-token-text-secondary">
          {renderHookSourceLabel(run.source)}
          {run.count > 1 ? (
            <FormattedMessage
              id="assistantMessage.hookStats.repeatCount"
              defaultMessage=" · {count} runs"
              description="Count for adjacent identical hook summaries"
              values={{ count: run.count }}
            />
          ) : null}
        </span>
        {run.statusMessage == null ? null : (
          <span className="text-token-text-secondary">{run.statusMessage}</span>
        )}
        {run.entries.map(renderToneEntry)}
      </li>
    </>
  );
}

function renderToneEntry(entry: HookRunToneEntry, index: number): ReactNode {
  return (
    <span
      key={`${entry.tone}:${String(index)}:${entry.text}`}
      className={toneClassName(entry.tone)}
    >
      {entry.text}
    </span>
  );
}

function renderEntryKindLabel(kind: HookStatsEntryKind): ReactNode {
  switch (kind) {
    case "feedback":
      return (
        <FormattedMessage
          id="assistantMessage.hookStats.entry.feedback"
          defaultMessage="Feedback"
          description="Label for hook feedback surfaced in the hook stats tooltip"
        />
      );
    case "stop":
      return (
        <FormattedMessage
          id="assistantMessage.hookStats.entry.stop"
          defaultMessage="Stop"
          description="Label for hook stop output surfaced in the hook stats tooltip"
        />
      );
    case "error":
      return (
        <FormattedMessage
          id="assistantMessage.hookStats.entry.error"
          defaultMessage="Error"
          description="Label for hook errors surfaced in the hook stats tooltip"
        />
      );
  }
}

function toneClassName(tone: HookRunTone): string {
  switch (tone) {
    case "error":
      return "text-token-editor-warning-foreground";
    case "warning":
      return "text-token-text-secondary";
  }
}

function renderHookSourceLabel(source: string): ReactNode {
  return (
    <FormattedMessage
      id="assistantMessage.hookStats.source"
      defaultMessage="{source, select, admin {Admin} user {User} project {Project} plugin {Plugin} sessionFlags {Session} other {Unknown}}"
      description="Source label for hook runs in the detailed hook stats tooltip"
      values={{ source: parseHookSourceKind([source]) ?? "unknown" }}
    />
  );
}
