// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact inline summary of a turn's background subagent activity: a row of
// avatar chips (capped at three) plus an "and N other subagents" overflow label
// and an aggregate status label (localConversation domain).
import { useContext } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import {
  ConversationSummaryRow,
  SubagentInlineActivityContext,
  SubagentAvatar,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_INLINE_SUBAGENTS = 3;

const chipStyles = {
  chip: "_chip_jj3nd_1",
  chipEnter: "_chip-enter_jj3nd_1",
} as const;

export interface SubagentActivityRow {
  conversationId: string;
  displayName: string;
  status: string;
  statusSummary?: string | null;
}

export interface SubagentActivityInlineGroupProps {
  rows: SubagentActivityRow[];
  statusLabel: React.ReactNode;
  shouldAnimateEntrance?: (conversationId: string) => boolean;
  onEntranceAnimationEnd?: (conversationId: string) => void;
}

interface SubagentActivityInlineChipProps {
  row: SubagentActivityRow;
  animateEntrance: boolean;
  onEntranceAnimationEnd?: () => void;
  onClick?: () => void;
}

function SubagentActivityInlineChip({
  row,
  animateEntrance,
  onEntranceAnimationEnd,
  onClick,
}: SubagentActivityInlineChipProps) {
  const content = (
    <>
      <SubagentAvatar
        seed={row.conversationId}
        className="size-4"
        aria-hidden={true}
      />
      <span className="min-w-0 truncate text-base">{row.displayName}</span>
    </>
  );
  const baseClassName = clsx(
    chipStyles.chip,
    "inline-flex h-7 max-w-48 min-w-0 items-center gap-1.5 rounded-full border border-token-border-light bg-token-main-surface-secondary pr-2 pl-1.5 text-token-conversation-summary-leading",
  );
  if (onClick == null) {
    return (
      <span
        className={baseClassName}
        data-animate-entrance={animateEntrance ? "" : undefined}
        onAnimationEnd={animateEntrance ? onEntranceAnimationEnd : undefined}
      >
        {content}
      </span>
    );
  }
  return (
    <button
      type="button"
      className={clsx(
        baseClassName,
        "cursor-interaction hover:border-token-border-default hover:bg-token-list-hover-background hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-token-bg-secondary",
      )}
      data-animate-entrance={animateEntrance ? "" : undefined}
      onAnimationEnd={animateEntrance ? onEntranceAnimationEnd : undefined}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export function SubagentActivityInlineGroup({
  rows,
  statusLabel,
  shouldAnimateEntrance,
  onEntranceAnimationEnd,
}: SubagentActivityInlineGroupProps) {
  const onChipClick = useContext(SubagentInlineActivityContext);
  if (rows.length === 0) {
    return null;
  }
  const visibleRows = rows.slice(0, MAX_INLINE_SUBAGENTS);
  const hiddenCount = rows.length - visibleRows.length;
  const chips = visibleRows.map((row) => (
    <SubagentActivityInlineChip
      key={row.conversationId}
      row={row}
      animateEntrance={shouldAnimateEntrance?.(row.conversationId) ?? true}
      onEntranceAnimationEnd={
        onEntranceAnimationEnd == null
          ? undefined
          : () => onEntranceAnimationEnd(row.conversationId)
      }
      onClick={
        onChipClick == null
          ? undefined
          : () => {
              onChipClick({
                conversationId: row.conversationId,
                displayName: row.displayName,
                showInlineActivity: true,
                agentRole: null,
                spawnModel: null,
                status: row.status,
                statusSummary: row.statusSummary,
                diffStats: null,
              });
            }
      }
    />
  ));
  const overflowLabel =
    hiddenCount > 0 ? (
      <>
        <FormattedMessage
          id="localConversation.subagentActivity.group.others"
          defaultMessage="and {count, plural, one {# other subagent} other {# other subagents}}"
          description="Count of additional subagents hidden from a compact inline activity summary"
          values={{ count: hiddenCount }}
        />{" "}
      </>
    ) : null;
  return (
    <ConversationSummaryRow padding="offset">
      <div
        className="-ml-1.5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-sm leading-5"
        data-testid="subagent-activity-inline-group"
      >
        <span className="flex min-w-0 flex-wrap items-center gap-1.5">
          {chips}
        </span>
        <span className="text-base text-token-conversation-summary-leading">
          {overflowLabel}
          {statusLabel}
        </span>
      </div>
    </ConversationSummaryRow>
  );
}
