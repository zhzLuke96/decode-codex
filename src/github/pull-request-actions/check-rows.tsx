// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Pull request check status icons and row list.
import type { ReactNode, SVGProps } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  classNames,
  initClassNameRuntime,
  initExternalUrlHelpers,
  openInBrowserFromEvent,
} from "../../runtime/pull-request-actions-runtime";
import { CheckCircleFilledIcon } from "../../icons/check-circle-filled-icon";
import { ClockIcon } from "../../icons/clock-icon";
import { QuestionMarkCircleIcon } from "../../icons/question-mark-circle-icon";
import { XCircleFilledIcon } from "../../icons/x-circle-filled-icon";
import { FormattedMessage } from "../../vendor/react-intl";
import { at } from "../../vendor/lodash-at";
import { PullRequestInlineActionButton } from "./inline-action-button";
import type {
  PullRequestCheck,
  PullRequestCheckStatus,
  PullRequestRowItem,
} from "./types";

type PullRequestMetadataRowsProps = {
  density?: "compact" | "comfortable";
  items: PullRequestRowItem[];
  labelTone?: "primary" | "tertiary";
};

export type PullRequestCheckRowsProps = {
  canFix?: boolean;
  checks: PullRequestCheck[];
  density?: "compact" | "comfortable";
  fixTooltipContent?: ReactNode;
  insetFixButtons?: boolean;
  isCheckAttached?: (check: PullRequestCheck) => boolean;
  labelTone?: "primary" | "tertiary";
  onFixCheck?: (check: PullRequestCheck) => void;
  onRemoveCheck?: (check: PullRequestCheck) => void;
};

export function PullRequestMetadataRows({
  density = "compact",
  items,
  labelTone = "tertiary",
}: PullRequestMetadataRowsProps) {
  return (
    <div
      className={classNames(
        "flex flex-col",
        density === "comfortable" ? "gap-1" : "gap-px",
      )}
    >
      {items.map((item) => {
        const label = (
          <span
            className={classNames(
              "flex items-center",
              density === "comfortable" && "min-h-7",
              labelTone === "primary"
                ? "text-token-foreground"
                : "text-token-text-tertiary",
            )}
          >
            {item.label}
          </span>
        );
        const row = (
          <button
            key={item.id}
            className={classNames(
              "flex w-full min-w-0 items-center gap-2 rounded-md text-start",
              density === "comfortable" ? "min-h-7" : "min-h-6",
              item.onClick && "hover:bg-token-main-surface-secondary",
            )}
            disabled={item.onClick == null}
            type="button"
            onClick={item.onClick}
          >
            {item.icon}
            <span className="min-w-0 flex-1 truncate">
              {item.tooltipContent == null ? label : label}
            </span>
            {item.trailing}
            {item.action}
          </button>
        );
        return row;
      })}
    </div>
  );
}

export function PullRequestCheckRows({
  canFix = false,
  checks,
  density = "compact",
  fixTooltipContent,
  insetFixButtons = false,
  isCheckAttached,
  labelTone = "tertiary",
  onFixCheck,
  onRemoveCheck,
}: PullRequestCheckRowsProps) {
  const sortedRows = [...checks].sort(
    (left, right) =>
      CHECK_STATUS_ORDER[left.status] - CHECK_STATUS_ORDER[right.status],
  );
  const rows = sortedRows.map((check, index): PullRequestRowItem => {
    const isAttached = isCheckAttached?.(check) ?? false;
    const clickHandler = isAttached ? onRemoveCheck : onFixCheck;
    const [link] = at(check, "link") as [string | null | undefined];
    return {
      action:
        check.status === "failing" && clickHandler != null ? (
          <PullRequestInlineActionButton
            disabled={!isAttached && !canFix}
            inset={insetFixButtons}
            tooltipContent={fixTooltipContent}
            onClick={() => clickHandler(check)}
          >
            {isAttached ? (
              <FormattedMessage
                id="localConversation.pullRequest.actions.checks.remove"
                defaultMessage="Remove"
                description="Per-check action label for removing a failing pull request check from the chat"
              />
            ) : (
              <FormattedMessage
                id="localConversation.pullRequest.actions.checks.fix"
                defaultMessage="Fix"
                description="Per-check action label for fixing a single failing pull request check"
              />
            )}
          </PullRequestInlineActionButton>
        ) : undefined,
      icon: <CheckStatusIcon status={check.status} />,
      id: `${check.name}-${index}`,
      label: check.name,
      onClick:
        link == null
          ? undefined
          : (event) =>
              openInBrowserFromEvent({
                event,
                href: link,
                initiator: "pull_request_link",
              }),
      tooltipContent: <PullRequestCheckStatusTooltip status={check.status} />,
    };
  });
  return (
    <PullRequestMetadataRows
      density={density}
      items={rows}
      labelTone={labelTone}
    />
  );
}

export function PullRequestUnknownCheckIcon(props: SVGProps<SVGSVGElement>) {
  return <QuestionMarkCircleIcon {...props} />;
}

function CheckStatusIcon({ status }: { status: PullRequestCheckStatus }) {
  switch (status) {
    case "failing":
      return (
        <XCircleFilledIcon className="icon-sm shrink-0 text-token-charts-red" />
      );
    case "pending":
      return (
        <ClockIcon className="icon-sm shrink-0 text-token-charts-yellow" />
      );
    case "passing":
      return (
        <CheckCircleFilledIcon className="icon-sm shrink-0 text-token-charts-green" />
      );
    case "skipped":
    case "unknown":
      return (
        <PullRequestUnknownCheckIcon className="icon-sm shrink-0 text-token-text-tertiary" />
      );
  }
}

function PullRequestCheckStatusTooltip({
  status,
}: {
  status: PullRequestCheckStatus;
}) {
  switch (status) {
    case "failing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checks.tooltip.failed"
          defaultMessage="Failed test"
          description="Tooltip shown for an individual failed pull request check"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checks.tooltip.pending"
          defaultMessage="Pending test"
          description="Tooltip shown for an individual pending pull request check"
        />
      );
    case "skipped":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checks.tooltip.skipped"
          defaultMessage="Skipped test"
          description="Tooltip shown for an individual skipped pull request check"
        />
      );
    case "passing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checks.tooltip.passed"
          defaultMessage="Passed test"
          description="Tooltip shown for an individual passed pull request check"
        />
      );
    case "unknown":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checks.tooltip.unknown"
          defaultMessage="Unknown test status"
          description="Tooltip shown for an individual pull request check with unknown status"
        />
      );
  }
}

const CHECK_STATUS_ORDER: Record<PullRequestCheckStatus, number> = {
  failing: 0,
  pending: 1,
  skipped: 2,
  unknown: 3,
  passing: 4,
};

export const initPullRequestCheckStatusIconChunk = once(() => {});
export const initPullRequestMetadataRowsChunk = once(() => {
  initClassNameRuntime();
  initExternalUrlHelpers();
});
export const initPullRequestCheckRowsChunk = once(() => {
  initPullRequestMetadataRowsChunk();
  initPullRequestCheckStatusIconChunk();
});
