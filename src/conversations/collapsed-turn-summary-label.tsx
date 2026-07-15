// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Label shown for a collapsed conversation turn: a worked-for status badge, a
// "Worked for {time}" divider, or a "{n} previous messages" summary fallback.
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import {
  WorkedForStatusLabel,
  formatWorkedDuration,
  type WorkedForStatusItem,
} from "../boundaries/onboarding-commons-externals.facade";

export function initCollapsedTurnSummaryLabelChunk(): void {}

export interface CollapsedTurnSummaryLabelProps {
  collapsedMessageCount: number;
  workedDurationMs?: number | null;
  workedForItem?: WorkedForStatusItem | null;
  className?: string;
}

export function CollapsedTurnSummaryLabel({
  collapsedMessageCount,
  workedDurationMs,
  workedForItem,
  className,
}: CollapsedTurnSummaryLabelProps) {
  if (workedForItem != null) {
    return (
      <WorkedForStatusLabel
        status={workedForItem.status}
        startedAtMs={workedForItem.startedAtMs}
        completedAtMs={workedForItem.completedAtMs}
        className={className}
      />
    );
  }

  if (workedDurationMs != null) {
    return (
      <span className={clsx("text-token-foreground/60", className)}>
        <FormattedMessage
          id="localConversation.workedFor"
          defaultMessage="Worked for {time}"
          description="Divider shown between agent activity and the final assistant response in a completed turn"
          values={{ time: formatWorkedDuration(workedDurationMs) }}
        />
      </span>
    );
  }

  return (
    <span className={clsx("text-token-foreground/60", className)}>
      <FormattedMessage
        id="localConversation.previousMessagesSummary"
        defaultMessage="{count, plural, one {# previous message} other {# previous messages}}"
        description="Summary shown in collapsed turns when no worked-for duration is available"
        values={{ count: collapsedMessageCount }}
      />
    </span>
  );
}
