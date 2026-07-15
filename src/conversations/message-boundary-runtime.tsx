// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight message and live-diff rows exposed through the onboarding boundary.
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { DiffStats } from "../ui/diff-stats";
import { SentAtTimestamp } from "./user-message-timestamp";
import { summarizeUnifiedDiff } from "./local-conversation-thread-parts/turn-diff-summaries";

type UserMessageRowProps = {
  compactActions?: boolean;
  cwd?: string | null;
  hostId?: string | null;
  label?: ReactNode;
  message: unknown;
  onLabelClick?: () => void;
  sentAtMs?: number | null;
};

type TurnUnifiedDiffSummaryRowProps = {
  conversationId?: string;
  cwd?: string | null;
  hostId?: string | null;
  isInProgress?: boolean;
  item: { unifiedDiff?: string | null };
  showLeadingSeparator?: boolean;
};

export function UserMessageRow({
  compactActions = false,
  cwd,
  hostId,
  label,
  message,
  onLabelClick,
  sentAtMs,
}: UserMessageRowProps) {
  const messageText = formatMessageText(message);
  const labelNode =
    label == null ? null : onLabelClick == null ? (
      <span className="inline-flex items-center gap-1">{label}</span>
    ) : (
      <button
        type="button"
        className="inline-flex cursor-interaction items-center gap-1 text-token-text-secondary hover:text-token-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
        onClick={onLabelClick}
      >
        {label}
      </button>
    );

  return (
    <div
      className={clsx(
        "group/user-message flex max-w-3xl flex-col items-end gap-1",
        compactActions && "text-size-chat-sm",
      )}
      data-cwd={cwd ?? undefined}
      data-host-id={hostId ?? undefined}
    >
      {labelNode == null && sentAtMs == null ? null : (
        <div className="flex max-w-full items-center gap-2 text-xs text-token-text-tertiary">
          {labelNode}
          <SentAtTimestamp sentAtMs={sentAtMs} />
        </div>
      )}
      <div className="max-w-full rounded-2xl bg-token-message-surface px-3 py-2 text-size-chat text-token-foreground">
        {messageText.length > 0 ? (
          <div className="whitespace-pre-wrap break-words">{messageText}</div>
        ) : (
          <span className="text-token-text-tertiary">
            <FormattedMessage
              id="codex.userMessage.noContent"
              defaultMessage="(No content)"
              description="Text for when a user message has no content"
            />
          </span>
        )}
      </div>
    </div>
  );
}

export function TurnUnifiedDiffSummaryRow({
  isInProgress = false,
  item,
  showLeadingSeparator = false,
}: TurnUnifiedDiffSummaryRowProps) {
  const unifiedDiff = item.unifiedDiff ?? "";
  const summary = summarizeUnifiedDiff(unifiedDiff);

  return (
    <span className="inline-flex min-w-0 items-center gap-2 text-size-chat-sm text-token-text-secondary">
      {showLeadingSeparator ? (
        <span
          aria-hidden={true}
          className="h-4 w-px shrink-0 bg-token-border"
        />
      ) : null}
      <span
        className={clsx(
          "size-2 shrink-0 rounded-full bg-token-text-tertiary",
          isInProgress && "animate-pulse",
        )}
        aria-hidden={true}
      />
      <span className="truncate">
        <FormattedMessage
          id="localConversation.turnDiffSummary.filesChanged"
          defaultMessage="{fileCount, plural, one {# file changed} other {# files changed}}"
          description="Summary label for live turn diff changes"
          values={{ fileCount: summary.fileCount }}
        />
      </span>
      <DiffStats
        className="shrink-0"
        linesAdded={summary.linesAdded}
        linesRemoved={summary.linesDeleted}
        variant="color"
      />
    </span>
  );
}

function formatMessageText(message: unknown): string {
  if (typeof message === "string") return message;
  if (message == null) return "";
  if (typeof message === "object") {
    const candidate = message as {
      text?: unknown;
      content?: unknown;
      message?: unknown;
      prompt?: unknown;
    };
    for (const value of [
      candidate.text,
      candidate.content,
      candidate.message,
      candidate.prompt,
    ]) {
      if (typeof value === "string") return value;
    }
  }
  try {
    return JSON.stringify(message, null, 2);
  } catch {
    return String(message);
  }
}
