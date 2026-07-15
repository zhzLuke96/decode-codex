// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversation activity rows used by the local turn renderer.

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { ConversationMarkdown } from "./conversation-markdown-view";
import { ToolActivityIcon } from "../icons/facade-icon-aliases";

type AnyRecord = Record<string, any>;

export function AnimatedNumber({
  className,
  value,
}: {
  className?: string;
  value: number;
  variant?: string;
}) {
  return <span className={clsx("tabular-nums", className)}>{value}</span>;
}

export function ConversationSummaryRow({
  children,
  className,
  padding = "default",
}: {
  children?: ReactNode;
  className?: string;
  padding?: "default" | "offset";
}) {
  return (
    <div
      className={clsx(
        "text-size-chat min-w-0 text-token-conversation-summary-leading",
        padding === "offset" ? "pl-6" : "pl-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ConversationStatusRow({
  icon,
  message,
}: {
  icon?: ReactNode;
  message?: ReactNode;
}) {
  return (
    <ConversationSummaryRow>
      <span className="inline-flex min-w-0 items-center gap-1.5">
        {icon}
        <span className="min-w-0 truncate text-token-text-secondary">
          {message}
        </span>
      </span>
    </ConversationSummaryRow>
  );
}

export function ConversationEntryRenderer({
  item,
  isTurnInProgress,
}: AnyRecord) {
  if (item == null) return null;
  switch (item.type) {
    case "assistant-message":
      return (
        <ConversationMarkdown
          markdown={item.content ?? item.text ?? ""}
          isStreaming={isTurnInProgress && item.completed !== true}
        />
      );
    case "user-message":
      return (
        <div className="text-size-chat whitespace-pre-wrap text-token-foreground">
          {String(item.content ?? item.message ?? "")}
        </div>
      );
    case "exec":
      return <ToolActivityRow icon="run-command" label={item.command} />;
    case "mcp-tool-call":
      return (
        <ToolActivityRow
          icon="mcp-tool-call"
          label={item.invocation?.tool ?? item.functionName ?? "Tool call"}
        />
      );
    case "patch":
      return <ToolActivityRow icon="edit-files" label="Edited files" />;
    case "stream-error":
      return <ConversationSummaryRow>{item.content}</ConversationSummaryRow>;
    default:
      return <GenericItemBlock item={item} />;
  }
}

export function CollapsedToolActivityCard({
  activeSummary,
  canExpand,
  children,
  icon,
  onExpand,
  sourceSummary,
  summary,
}: AnyRecord) {
  const [expanded, setExpanded] = React.useState(false);
  const hasChildren = children != null;
  const label =
    activeSummary ??
    sourceSummary?.sources
      ?.map((source: AnyRecord) => source.name)
      .join(", ") ??
    summarizeActivity(summary);
  return (
    <ConversationSummaryRow padding="offset">
      <div className="flex min-w-0 flex-col gap-1">
        <button
          type="button"
          disabled={!hasChildren || !canExpand}
          className="group inline-flex min-w-0 max-w-full cursor-interaction items-center gap-1.5 text-left disabled:cursor-default"
          onClick={() => {
            if (!hasChildren || !canExpand) return;
            setExpanded((value) => !value);
            if (!expanded) onExpand?.();
          }}
        >
          <ToolActivityIcon icon={icon ?? "run-command"} />
          <span className="min-w-0 truncate">{label}</span>
        </button>
        {expanded ? (
          <div className="flex min-w-0 flex-col">{children}</div>
        ) : null}
      </div>
    </ConversationSummaryRow>
  );
}

export function PendingMcpToolCalls({
  items = [],
  thinkingMessage,
}: AnyRecord) {
  return (
    <ConversationSummaryRow padding="offset">
      <div className="flex min-w-0 flex-col gap-1">
        <ToolActivityRow
          icon="mcp-tool-call"
          label={
            thinkingMessage ?? (
              <FormattedMessage
                id="localConversation.pendingMcpToolCalls"
                defaultMessage="{count, plural, one {Using a tool} other {Using # tools}}"
                values={{ count: items.length }}
              />
            )
          }
        />
        {items.map((item: AnyRecord, index: number) => (
          <ToolActivityRow
            key={item.id ?? item.callId ?? index}
            icon="mcp-tool-call"
            label={item.invocation?.tool ?? item.functionName ?? "Tool call"}
          />
        ))}
      </div>
    </ConversationSummaryRow>
  );
}

export function MultiAgentGroup({ items = [] }: AnyRecord) {
  return (
    <ConversationSummaryRow padding="offset">
      <ToolActivityRow
        icon="run-command"
        label={
          <FormattedMessage
            id="localConversation.multiAgentGroup"
            defaultMessage="{count, plural, one {Subagent activity} other {# subagent activities}}"
            values={{ count: items.length }}
          />
        }
      />
    </ConversationSummaryRow>
  );
}

export function TodoListActivity({ item }: AnyRecord) {
  const todos = Array.isArray(item?.items)
    ? item.items
    : Array.isArray(item?.todos)
      ? item.todos
      : [];
  return (
    <ConversationSummaryRow padding="offset">
      <ol className="flex min-w-0 flex-col gap-1">
        {todos.map((todo: AnyRecord, index: number) => (
          <li key={todo.id ?? index} className="flex min-w-0 items-start gap-2">
            <span aria-hidden="true">{todo.completed ? "✓" : "□"}</span>
            <span className="min-w-0">{todo.text ?? todo.title ?? todo}</span>
          </li>
        ))}
      </ol>
    </ConversationSummaryRow>
  );
}

function ToolActivityRow({
  icon,
  label,
}: {
  icon?: string;
  label?: ReactNode;
}) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5 text-token-conversation-summary-leading">
      <ToolActivityIcon icon={icon} />
      <span className="min-w-0 truncate">{label}</span>
    </span>
  );
}

function GenericItemBlock({ item }: { item: AnyRecord }) {
  const detail = item.content ?? item.text ?? item.command ?? item.query;
  return (
    <ConversationSummaryRow padding="offset">
      <div className="min-w-0 rounded-lg border border-token-border-light bg-token-input-background/30 p-2">
        <div className="text-xs font-medium uppercase text-token-text-tertiary">
          {String(item.type ?? "item").replaceAll("-", " ")}
        </div>
        {detail == null ? null : (
          <pre className="mt-1 whitespace-pre-wrap text-sm text-token-text-secondary">
            {String(detail)}
          </pre>
        )}
      </div>
    </ConversationSummaryRow>
  );
}

function summarizeActivity(summary: AnyRecord): ReactNode {
  if (summary == null) return "Activity";
  if (summary.commandCount > 0) return "Ran command";
  if (summary.mcpToolCallCount > 0) return "Used tool";
  if (summary.webSearchCount > 0) return "Searched web";
  if (summary.changedLineCount > 0) return "Edited files";
  return "Activity";
}
