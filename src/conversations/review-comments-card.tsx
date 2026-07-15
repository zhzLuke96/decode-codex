// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Turn-end card summarizing model-authored code-review comments: a sortable,
// expandable list of comment rows, each with a priority badge, file location,
// and a hover tooltip preview that opens the comment in the review diff
// (localConversation domain).
import { useState } from "react";
import clsx from "clsx";
import {
  FormattedMessage,
  useIntl,
  defineMessages,
} from "../vendor/react-intl";
import {
  ThreadResourceCard,
  ThreadResourceCardHeader,
} from "../ui/thread-resource-card";
import { Tooltip } from "../ui/tooltip-b";
import { ChevronIcon } from "../icons/chevron-icon";
import { CommentIcon } from "../icons/comment-icon";
import {
  openReviewCommentsInDiff,
  type ReviewComment,
} from "./navigate-to-review-comments";
import {
  useAppStore,
  dismissActivePopover,
  focusReviewSidePanel,
  getReviewCommentKey,
  getReviewCommentBody,
  getReviewCommentLineLabel,
} from "../boundaries/onboarding-commons-externals.facade";

const PRIORITY_PATTERN = /^(?:<sub>\s*)*\[(p\d)\](?:\s*<\/sub>)*\s*(.*)$/i;
const MAX_VISIBLE_COMMENTS = 3;
const REVIEW_COMMENT_TOOLTIP_DELAY = 600;
const REVIEW_COMMENT_TOOLTIP_MAX_WIDTH =
  "clamp(0px, calc(var(--radix-tooltip-trigger-width) - 64px), var(--radix-tooltip-content-available-width))";

const messages = defineMessages({
  count: {
    id: "localConversation.reviewComments.count",
    defaultMessage: "{count, plural, one {# comment} other {# comments}}",
    description:
      "Title for the turn-end card summarizing model-authored code review comments",
  },
  openComment: {
    id: "localConversation.reviewComments.openComment",
    defaultMessage: "View {title} in {location}",
    description:
      "Accessible label for opening one model-authored code review comment from a conversation turn",
  },
  showMoreComments: {
    id: "localConversation.reviewComments.showMore",
    defaultMessage:
      "{count, plural, one {Show # more comment} other {Show # more comments}}",
    description:
      "Button label that expands hidden model-authored code review comments",
  },
  collapseComments: {
    id: "localConversation.reviewComments.collapse",
    defaultMessage: "Collapse comments",
    description:
      "Button label that collapses expanded model-authored code review comments",
  },
});

interface ParsedReviewCommentTitle {
  priority: string | null;
  title: string;
}

export function parseReviewCommentTitle(
  comment: ReviewComment,
): ParsedReviewCommentTitle {
  const firstLine =
    getReviewCommentBody(comment).trim().split("\n")[0]?.trim() ?? "";
  const match = firstLine.match(PRIORITY_PATTERN);
  if (!match) {
    return { priority: null, title: firstLine };
  }
  const capturedPriority = match[1];
  return capturedPriority == null
    ? { priority: null, title: firstLine }
    : {
        priority: capturedPriority.toUpperCase(),
        title: match[2]?.trim() ?? "",
      };
}

function getCommentPriorityRank(comment: ReviewComment): number {
  const { priority } = parseReviewCommentTitle(comment);
  return priority == null ? Number.MAX_SAFE_INTEGER : Number(priority.slice(1));
}

function compareCommentPriority(a: ReviewComment, b: ReviewComment): number {
  return getCommentPriorityRank(a) - getCommentPriorityRank(b);
}

function formatCommentLocation(comment: ReviewComment): string {
  return `${comment.position.path}:${getReviewCommentLineLabel(comment)}`;
}

function ReviewCommentPriorityBadge({ priority }: { priority: string }) {
  return (
    <span className="text-size-chat-sm rounded border border-token-border px-1.5 font-medium text-token-text-secondary">
      {priority}
    </span>
  );
}

interface ReviewCommentTooltipProps {
  comment: ReviewComment;
  location: string;
  onOpen: () => void;
  openLabel: string;
}

function ReviewCommentTooltip({
  comment,
  location,
  onOpen,
  openLabel,
}: ReviewCommentTooltipProps) {
  const { priority, title } = parseReviewCommentTitle(comment);
  const body = getReviewCommentBody(comment)
    .trim()
    .split("\n")
    .slice(1)
    .join("\n")
    .trim();
  const buttonClassName = clsx(
    "text-size-chat flex h-9 w-full cursor-interaction items-center gap-2 border-b border-token-border bg-token-dropdown-background py-[var(--turn-diff-row-padding-y)] text-left hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset extension:bg-token-input-background",
    priority == null ? "px-4" : "pr-4 pl-2.5",
  );
  return (
    <>
      <button
        aria-label={openLabel}
        className={buttonClassName}
        onClick={onOpen}
        type="button"
      >
        {priority == null ? null : (
          <ReviewCommentPriorityBadge priority={priority} />
        )}
        <span className="min-w-0 flex-1 truncate text-token-foreground">
          {location}
        </span>
      </button>
      <div className="max-h-96 overflow-y-auto px-4 py-3">
        <div className="text-size-chat min-w-0 font-medium break-words text-token-foreground">
          {title}
        </div>
        {body.length > 0 ? (
          <div className="text-size-chat mt-2 whitespace-pre-wrap text-token-foreground">
            {body}
          </div>
        ) : null}
      </div>
    </>
  );
}

function ReviewCommentRow({ comment }: { comment: ReviewComment }) {
  const store = useAppStore();
  const intl = useIntl();
  const { priority, title } = parseReviewCommentTitle(comment);
  const location = formatCommentLocation(comment);
  const openLabel = intl.formatMessage(messages.openComment, {
    location,
    title,
  });
  const onOpen = () => {
    dismissActivePopover();
    focusReviewSidePanel(store);
    openReviewCommentsInDiff(store, [comment]);
  };
  const rowButton = (
    <button
      aria-label={openLabel}
      className="text-size-chat flex h-9 w-full cursor-interaction items-center text-left hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
      onClick={onOpen}
      type="button"
    >
      <span className="flex min-w-0 flex-1 items-center gap-2.5 px-4 whitespace-nowrap">
        <span className="flex w-8 shrink-0 items-center justify-center">
          {priority == null ? null : (
            <ReviewCommentPriorityBadge priority={priority} />
          )}
        </span>
        <span className="min-w-0 shrink truncate font-medium text-token-foreground">
          {title}
        </span>
        <span
          className="min-w-[6rem] flex-1 truncate text-left text-token-text-secondary [direction:rtl]"
          title={location}
        >
          <span dir="ltr">{location}</span>
        </span>
      </span>
    </button>
  );
  return (
    <Tooltip
      align="center"
      closeOnTriggerBlur={false}
      delayDuration={REVIEW_COMMENT_TOOLTIP_DELAY}
      disablePadding={true}
      interactive={true}
      side="top"
      sideOffset={12}
      tooltipBodyClassName="w-full"
      tooltipClassName="max-h-[420px] ![width:clamp(0px,calc(var(--radix-tooltip-trigger-width)_-_64px),var(--radix-tooltip-content-available-width))] overflow-hidden shadow-xl"
      tooltipMaxWidth={REVIEW_COMMENT_TOOLTIP_MAX_WIDTH}
      tooltipContent={
        <ReviewCommentTooltip
          comment={comment}
          location={location}
          onOpen={onOpen}
          openLabel={openLabel}
        />
      }
    >
      {rowButton}
    </Tooltip>
  );
}

interface ReviewCommentsExpandButtonProps {
  children: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
}

function ReviewCommentsExpandButton({
  children,
  isExpanded,
  onClick,
}: ReviewCommentsExpandButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      className="text-size-chat flex h-9 w-full cursor-interaction items-center px-4 py-2 text-left text-token-text-primary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
      onClick={onClick}
    >
      <span className="inline-flex min-w-0 items-center gap-2">
        <span className="truncate">{children}</span>
        <ChevronIcon
          className={isExpanded ? "icon-2xs rotate-180" : "icon-2xs"}
        />
      </span>
    </button>
  );
}

export interface ReviewCommentsCardProps {
  comments: ReviewComment[];
}

export function ReviewCommentsCard({ comments }: ReviewCommentsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sortedComments = [...comments].sort(compareCommentPriority);
  const visibleComments = isExpanded
    ? sortedComments
    : sortedComments.slice(0, MAX_VISIBLE_COMMENTS);
  const hiddenCount = sortedComments.length - visibleComments.length;
  const toggleButton =
    hiddenCount > 0 ? (
      <ReviewCommentsExpandButton
        isExpanded={false}
        onClick={() => setIsExpanded(true)}
      >
        <FormattedMessage
          {...messages.showMoreComments}
          values={{ count: hiddenCount }}
        />
      </ReviewCommentsExpandButton>
    ) : isExpanded && sortedComments.length > MAX_VISIBLE_COMMENTS ? (
      <ReviewCommentsExpandButton
        isExpanded={true}
        onClick={() => setIsExpanded(false)}
      >
        <FormattedMessage {...messages.collapseComments} />
      </ReviewCommentsExpandButton>
    ) : null;
  return (
    <ThreadResourceCard>
      <div className="flex flex-col">
        <ThreadResourceCardHeader
          className="px-4 py-2.5"
          icon={
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
              <CommentIcon className="size-5" />
            </span>
          }
          title={
            <FormattedMessage
              {...messages.count}
              values={{ count: comments.length }}
            />
          }
        />
        <div className="flex flex-col border-t border-token-border">
          {visibleComments.map((comment, index) => (
            <ReviewCommentRow
              key={`${getReviewCommentKey(comment)}:${index}`}
              comment={comment}
            />
          ))}
          {toggleButton}
        </div>
      </div>
    </ThreadResourceCard>
  );
}
