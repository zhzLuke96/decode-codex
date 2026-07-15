// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The user message bubble shown in a conversation: renders the message text with
// collapse/expand, inline copy/edit affordances, status chips, and an inline
// edit composer.
import {
  type CSSProperties,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useState,
} from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { ChevronIcon } from "../icons/chevron-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import { CopyIcon } from "../icons/copy-icon";
import { PencilIcon } from "../icons/pencil-icon";
import { UserMessageText } from "./user-message-text";
import { EditUserMessageForm } from "./edit-user-message-form";
import { SentAtTimestamp } from "./user-message-timestamp";
// Producer imports still being restored from sibling chunks.
import {
  useAppStore,
  appScopeRoot,
  createScopedAtom,
  useScopedAtomValue,
  useSignalValue,
  hostContextSignal,
  codeModeSignal,
  normalizeMessageText,
  isPlanFollowUp,
  stripMarkdownForClipboard,
  getExternalLinkContextMenuConversationId,
  useCollapsibleText,
  HookStatsTooltipButton,
} from "../boundaries/user-message.facade";
import type {
  HookRunStats,
  ThreadDetailLevel,
  UserMessageModel,
} from "../boundaries/user-message.facade";

const DEFAULT_COLLAPSED_LINE_COUNT = 20;

const LINE_CLAMP_STYLE: CSSProperties = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
};

const editDraftByTurnId = createScopedAtom<string | null>(
  appScopeRoot,
  () => null,
);

export function initUserMessageRuntimeChunk(): void {
  void editDraftByTurnId;
}

export interface UserMessageProps {
  message: UserMessageModel;
  sentAtMs?: number | null;
  collapsedLineCount?: number;
  alwaysShowActions?: boolean;
  compactActions?: boolean;
  isStreaming?: boolean;
  messageStatus?: ReactNode;
  messageStatusIcon?: ReactNode;
  hookStats?: HookRunStats | null;
  threadDetailLevel?: ThreadDetailLevel;
  referencesPriorConversation?: boolean;
  reviewMode?: boolean;
  pullRequestFixMode?: boolean;
  autoResolveSync?: boolean;
  hasExternalAttachments?: boolean;
  commentCount?: number;
  onEditMessage?: (text: string) => Promise<void>;
  threadId?: string;
  turnId?: string;
  cwd?: string | null;
  hostId?: string;
}

export function UserMessage({
  message,
  sentAtMs,
  collapsedLineCount,
  alwaysShowActions = false,
  compactActions = false,
  isStreaming = false,
  messageStatus,
  messageStatusIcon,
  hookStats,
  threadDetailLevel,
  referencesPriorConversation = false,
  reviewMode = false,
  pullRequestFixMode = false,
  autoResolveSync = false,
  hasExternalAttachments = false,
  commentCount = 0,
  onEditMessage,
  threadId,
  turnId,
  cwd,
  hostId,
}: UserMessageProps) {
  const store = useAppStore(appScopeRoot);
  const messageText = normalizeMessageText(message);
  const trimmedText = messageText.trim();
  const isPlan = isPlanFollowUp(messageText);
  const canEdit = onEditMessage != null && turnId != null && !isPlan;
  const [copied, setCopied] = useState(false);
  const editDraft = useScopedAtomValue(editDraftByTurnId, turnId);
  const isEditing = canEdit && editDraft != null;
  const intl = useIntl();
  const hostContext = useSignalValue(hostContextSignal);

  const displayText = isPlan
    ? intl.formatMessage({
        id: "codex.userMessage.implementPlan",
        defaultMessage: "Yes, implement this plan",
        description:
          "Display text for the synthetic implement-plan follow-up prompt",
      })
    : messageText;
  const hasContent = displayText.trim().length > 0;
  const hasMetadataChips =
    referencesPriorConversation ||
    reviewMode ||
    pullRequestFixMode ||
    autoResolveSync ||
    hasExternalAttachments ||
    commentCount > 0;
  const showBubble = hasContent || !hasMetadataChips;
  const showChipRow =
    hasMetadataChips || messageStatus != null || !compactActions;

  const handleCopy = () => {
    if (threadId != null && turnId != null) {
      hostContext.submitCodexAnalyticsEvent?.({
        action: "copy",
        eventKind: "action",
        metadata: { surface: "user_message" },
        threadId,
        turnId,
      });
    }
    navigator.clipboard
      .writeText(stripMarkdownForClipboard(trimmedText))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
  };

  const setDraft = (value: string | null) => {
    store.set(editDraftByTurnId, turnId, value);
  };
  const submitEdit = async (value: string) => {
    if (onEditMessage != null) {
      await onEditMessage(value);
      setDraft(null);
    }
  };
  const beginEdit = () => {
    if (threadId != null && turnId != null) {
      hostContext.submitCodexAnalyticsEvent?.({
        action: "edit",
        eventKind: "action",
        metadata: { surface: "user_message" },
        threadId,
        turnId,
      });
    }
    if (editDraft == null) setDraft(trimmedText);
  };
  const handleBubbleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      beginEdit();
    }
  };

  const bodyNode = hasContent ? (
    <UserMessageBody
      text={displayText}
      cwd={cwd ?? null}
      hostId={hostId}
      collapsedLineCount={collapsedLineCount}
      isStreaming={isStreaming}
    />
  ) : (
    <div className="text-size-chat mb-px text-token-description-foreground">
      <FormattedMessage
        id="codex.userMessage.noContent"
        defaultMessage="(No content)"
        description="Text for when a user message has no content"
      />
    </div>
  );

  const copyButton = copied ? (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="codex.userMessage.copiedTooltip"
          defaultMessage="Copied"
          description="Tooltip on copy message icon button when copied"
        />
      }
      disabled={true}
    >
      <Button
        className="focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0"
        color="ghost"
        size="icon"
        aria-label={intl.formatMessage({
          id: "codex.userMessage.copiedAriaLabel",
          defaultMessage: "Copied",
          description:
            "Aria label for the copy button after the content has been copied",
        })}
      >
        <CheckMdIcon className="icon-xs" />
      </Button>
    </Tooltip>
  ) : (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="codex.userMessage.copyTooltip"
          defaultMessage="Copy"
          description="Tooltip on copy message icon button"
        />
      }
    >
      <Button
        className="focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0"
        color="ghost"
        size="icon"
        aria-label={intl.formatMessage({
          id: "codex.userMessage.copyAriaLabel",
          defaultMessage: "Copy message",
          description:
            "Aria label for the button that copies the user's message",
        })}
        onClick={handleCopy}
      >
        <CopyIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );

  const bubbleClassName = clsx(
    "bg-token-foreground/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2 [&_.contain-inline-size]:[contain:initial]",
    !hasContent && "leading-none",
  );

  const bubbleNode = isEditing ? (
    <div className="w-full p-px">
      <EditUserMessageForm
        cwd={cwd ?? null}
        hostId={hostId}
        initialMessage={editDraft.trim()}
        onCancel={() => setDraft(null)}
        onDraftChange={(value) => setDraft(value)}
        onSubmit={submitEdit}
      />
    </div>
  ) : showBubble ? (
    <div
      data-user-message-bubble={true}
      role={canEdit ? "button" : undefined}
      tabIndex={0}
      className={clsx(
        bubbleClassName,
        "text-left focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
        canEdit && "cursor-interaction",
      )}
      aria-label={
        canEdit
          ? intl.formatMessage({
              id: "codex.userMessage.editBubbleAriaLabel",
              defaultMessage: "Edit user message",
              description: "Aria label for an editable user message bubble",
            })
          : undefined
      }
      onKeyDown={canEdit ? handleBubbleKeyDown : undefined}
      onDoubleClick={canEdit ? beginEdit : undefined}
    >
      {bodyNode}
    </div>
  ) : null;

  const primaryRow =
    compactActions && hasContent && !isEditing ? (
      <div className="flex w-full items-center justify-end gap-1">
        <div className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
          {copyButton}
        </div>
        {bubbleNode}
      </div>
    ) : (
      bubbleNode
    );

  const fullActionsRow =
    hasContent && !isEditing && !compactActions ? (
      <div
        className={clsx(
          "mr-1 ms-1 flex items-center gap-2",
          alwaysShowActions
            ? undefined
            : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
        )}
      >
        {sentAtMs == null ? null : (
          <span className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100">
            <SentAtTimestamp sentAtMs={sentAtMs} />
          </span>
        )}
        <div className="flex items-center gap-0.5">
          {hookStats == null ? null : (
            <HookStatsTooltipButton
              stats={hookStats}
              threadDetailLevel={threadDetailLevel}
            />
          )}
          {copyButton}
          {canEdit ? (
            <Tooltip
              tooltipContent={
                <FormattedMessage
                  id="codex.userMessage.editTooltip"
                  defaultMessage="Edit"
                  description="Tooltip on edit message icon button"
                />
              }
            >
              <Button
                className="focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:ring-offset-0"
                color="ghost"
                size="icon"
                aria-label={intl.formatMessage({
                  id: "codex.userMessage.editAriaLabel",
                  defaultMessage: "Edit message",
                  description:
                    "Aria label for the button that edits the previous user message",
                })}
                onClick={beginEdit}
              >
                <PencilIcon className="icon-xs" />
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>
    ) : null;

  const chipRow = (
    <div
      className={clsx(
        "flex flex-row-reverse items-center gap-1",
        !showChipRow && "hidden",
      )}
    >
      {messageStatus == null ? null : (
        <div className="ms-1 mr-1 flex items-center gap-2">
          {messageStatusIcon}
          <UserMessageChip>{messageStatus}</UserMessageChip>
        </div>
      )}
      {referencesPriorConversation && (
        <UserMessageChip>
          <FormattedMessage
            id="codex.userMessage.priorConversation"
            defaultMessage="References prior conversation"
            description="Text for the prior conversation button"
          />
        </UserMessageChip>
      )}
      {reviewMode && (
        <UserMessageChip>
          <FormattedMessage
            id="codex.userMessage.reviewMode"
            defaultMessage="Review mode"
            description="Chip shown when a user asked for a code review"
          />
        </UserMessageChip>
      )}
      {pullRequestFixMode && (
        <UserMessageChip>
          <FormattedMessage
            id="codex.userMessage.pullRequestFixMode"
            defaultMessage="PR fix"
            description="Chip shown when the user started a pull request CI fix task"
          />
        </UserMessageChip>
      )}
      {autoResolveSync && (
        <UserMessageChip>
          <FormattedMessage
            id="codex.userMessage.autoResolveSync"
            defaultMessage="Auto resolve conflicts"
            description="Chip shown when the user requested auto resolve for handoff conflicts"
          />
        </UserMessageChip>
      )}
      {commentCount > 0 && (
        <UserMessageChip>
          <FormattedMessage
            id="codex.userMessage.commentCount"
            defaultMessage={
              "{count, plural, one {# comment} other {# comments}}"
            }
            description="Chip shown when the user included inline diff comments in the prompt"
            values={{ count: commentCount }}
          />
        </UserMessageChip>
      )}
      {fullActionsRow}
    </div>
  );

  return (
    <div className="group flex w-full flex-col items-end justify-end gap-1">
      {primaryRow}
      {chipRow}
    </div>
  );
}

function UserMessageChip({
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx("text-token-description-foreground text-xs", className)}
      {...rest}
    />
  );
}

interface UserMessageBodyProps {
  text: string;
  cwd: string | null;
  hostId?: string;
  isStreaming?: boolean;
  collapsedLineCount?: number;
}

function UserMessageBody({
  text,
  cwd,
  hostId,
  isStreaming = false,
  collapsedLineCount,
}: UserMessageBodyProps) {
  const lineCount = collapsedLineCount ?? DEFAULT_COLLAPSED_LINE_COUNT;
  const store = useAppStore(appScopeRoot);
  const isCodeMode = useSignalValue(codeModeSignal);
  const conversationId = isCodeMode
    ? (getExternalLinkContextMenuConversationId(store.value) ?? undefined)
    : undefined;

  const { setTextContentMeasurementRef, collapseState, handleToggleExpansion } =
    useCollapsibleText({
      text,
      collapsedLineCount: lineCount,
      fallbackFontSizePx: 13,
    });
  const clampStyle =
    collapseState === "collapsed"
      ? {
          ...LINE_CLAMP_STYLE,
          maxHeight: `${lineCount}lh`,
          WebkitLineClamp: lineCount,
        }
      : undefined;

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="text-size-chat relative w-full min-w-0">
        <UserMessageText
          ref={setTextContentMeasurementRef}
          cwd={cwd}
          externalLinkContextMenuConversationId={conversationId}
          hostId={hostId}
          isStreaming={isStreaming}
          style={clampStyle}
          text={text}
        />
      </div>
      {collapseState === "uncollapsible" ? null : (
        <button
          type="button"
          aria-expanded={collapseState === "expanded"}
          className="text-size-chat mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-token-description-foreground hover:text-token-foreground"
          onClick={handleToggleExpansion}
        >
          <span>
            {collapseState === "expanded" ? (
              <FormattedMessage
                id="codex.userMessage.showLess"
                defaultMessage="Show less"
                description="Button label for collapsing an expanded user message"
              />
            ) : (
              <FormattedMessage
                id="codex.userMessage.showMore"
                defaultMessage="Show more"
                description="Button label for expanding a truncated user message"
              />
            )}
          </span>
          <ChevronIcon
            className={
              collapseState === "expanded" ? "icon-2xs rotate-180" : "icon-2xs"
            }
          />
        </button>
      )}
    </div>
  );
}
