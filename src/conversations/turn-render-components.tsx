// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight React components for local conversation turn rendering.
import type { ReactNode } from "react";
import clsx from "clsx";
import type { TurnSection } from "./turn-content-types";

type AnyRecord = Record<string, any>;

export function renderTurnSections(
  sections: TurnSection[],
  _latestTurnFollowContentRef?: unknown,
) {
  return sections.map((section) => (
    <div
      key={section.key}
      className={clsx("min-w-0", section.gapAfter != null && "mb-3")}
    >
      {section.node}
    </div>
  ));
}

export function McpAppsRenderer(_props: AnyRecord) {
  return null;
}

export function CollapsibleTurnActivity({
  content,
  contentAfterWorkedFor,
  isCollapsed,
  onToggle,
  persistentContent,
  preToggleContent,
  shouldShowPersistentContentGap,
  showToggle,
  workedForItem,
}: AnyRecord) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {preToggleContent}
      {workedForItem == null ? null : (
        <TurnItemBlock item={workedForItem} compact={true} />
      )}
      {contentAfterWorkedFor}
      {showToggle ? (
        <button
          type="button"
          className="w-fit cursor-interaction rounded-md px-2 py-1 text-sm text-token-text-secondary hover:bg-token-list-hover-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
          onClick={onToggle}
        >
          {isCollapsed ? "Show activity" : "Hide activity"}
        </button>
      ) : null}
      {isCollapsed ? null : content}
      {shouldShowPersistentContentGap ? <div className="h-1" /> : null}
      {persistentContent}
    </div>
  );
}

export function TurnEntryList({
  entries,
  wrapSearchableContent,
  ...props
}: AnyRecord) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {(entries ?? []).map((entry: AnyRecord, index: number) => {
        const item = entry.kind === "item" ? entry.item : entry;
        const node =
          entry.kind === "exploration" ? (
            <ExplorationBlock entry={entry} />
          ) : (
            <TurnItemRenderer {...props} item={item} />
          );
        return (
          <div key={item?.id ?? item?.callId ?? index}>
            {wrapSearchableContent == null
              ? node
              : wrapSearchableContent({ item, content: node })}
          </div>
        );
      })}
    </div>
  );
}

export function TurnItemRenderer({ assistantAfter, item }: AnyRecord) {
  if (item == null) return null;
  if (item.type === "assistant-message") {
    return (
      <div className="group flex min-w-0 flex-col gap-3">
        <MessageBlock role="assistant" text={item.content ?? item.text ?? ""} />
        {assistantAfter}
      </div>
    );
  }
  if (item.type === "user-message") {
    return (
      <MessageBlock role="user" text={item.content ?? item.message ?? ""} />
    );
  }
  return <TurnItemBlock item={item} />;
}

export function TurnActionsRow({
  completedThreadGoal,
  hasArtifacts,
  onFork,
}: AnyRecord) {
  if (!hasArtifacts && completedThreadGoal == null && onFork == null)
    return null;
  return (
    <div className="flex items-center gap-2 text-sm text-token-text-secondary">
      {hasArtifacts ? <span>Artifacts available</span> : null}
      {completedThreadGoal == null ? null : <span>Goal completed</span>}
      {onFork == null ? null : (
        <button
          type="button"
          className="cursor-interaction rounded-md px-2 py-1 hover:bg-token-list-hover-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
          onClick={onFork}
        >
          Fork
        </button>
      )}
    </div>
  );
}

export function ProposedPlanCard({ item }: AnyRecord) {
  const steps = Array.isArray(item?.plan) ? item.plan : item?.steps;
  return (
    <div className="rounded-lg border border-token-border bg-token-input-background/50 p-3">
      <div className="mb-2 text-sm font-medium text-token-foreground">Plan</div>
      {Array.isArray(steps) ? (
        <ol className="list-decimal space-y-1 pl-5 text-sm text-token-text-secondary">
          {steps.map((step: AnyRecord, index: number) => (
            <li key={step.id ?? index}>
              {step.text ?? step.title ?? String(step)}
            </li>
          ))}
        </ol>
      ) : (
        <pre className="whitespace-pre-wrap text-sm text-token-text-secondary">
          {String(item?.content ?? item?.text ?? "")}
        </pre>
      )}
    </div>
  );
}

export function ThinkingPlaceholder({
  isVisible,
  message = "Thinking...",
  onOpenDetails,
}: AnyRecord) {
  if (!isVisible) return null;
  return (
    <button
      type="button"
      className="w-fit cursor-interaction rounded-md px-2 py-1 text-sm text-token-text-secondary hover:bg-token-list-hover-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border"
      onClick={onOpenDetails}
    >
      {message}
    </button>
  );
}

function ExplorationBlock({ entry }: { entry: AnyRecord }) {
  return (
    <div className="rounded-lg border border-token-border-light p-2 text-sm text-token-text-secondary">
      {entry.status === "exploring" ? "Exploring" : "Explored"}{" "}
      {entry.items?.length ?? 0} item(s)
    </div>
  );
}

function MessageBlock({ role, text }: { role: string; text: ReactNode }) {
  return (
    <div
      className={clsx(
        "whitespace-pre-wrap rounded-lg px-3 py-2 text-size-chat",
        role === "user"
          ? "bg-token-input-background text-token-foreground"
          : "text-token-foreground",
      )}
    >
      {text}
    </div>
  );
}

function TurnItemBlock({
  compact,
  item,
}: {
  compact?: boolean;
  item: AnyRecord;
}) {
  const label = itemLabel(item);
  const detail =
    item.content ?? item.text ?? item.command ?? item.query ?? null;
  return (
    <div
      className={clsx(
        "min-w-0 rounded-lg border border-token-border-light bg-token-input-background/30",
        compact ? "px-2 py-1" : "p-2",
      )}
    >
      <div className="text-xs font-medium uppercase text-token-text-tertiary">
        {label}
      </div>
      {detail == null ? null : (
        <pre className="mt-1 whitespace-pre-wrap text-sm text-token-text-secondary">
          {String(detail)}
        </pre>
      )}
    </div>
  );
}

function itemLabel(item: AnyRecord): string {
  return String(item.type ?? "item").replaceAll("-", " ");
}
