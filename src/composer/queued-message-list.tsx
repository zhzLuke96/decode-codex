// Restored from ref/webview/assets/queued-message-list-B8Ie-nMz.js
// Semantic QueuedMessageList surface restored from the current ref chunk.
import type { MouseEvent, SVGProps } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperBLowerT as useSortableQueuedMessage,
  worktreeNewThreadOrchestratorCompatSlotUpperDLowerG as sortableCss,
  worktreeNewThreadOrchestratorCompatSlotUpperELowerG as useDndSensors,
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerT as SortableContext,
  worktreeNewThreadOrchestratorCompatSlotUpperOLowerG as initSortableContextRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerT as moveArrayItem,
  worktreeNewThreadOrchestratorCompatSlotUpperTLowerG as useDndSensor,
  worktreeNewThreadOrchestratorCompatSlotUpperVLowerT as verticalListSortingStrategy,
  worktreeNewThreadOrchestratorCompatSlotLowerDLowerC as MoreHorizontalIcon,
  worktreeNewThreadOrchestratorCompatSlotLowerFLowerC as initDndHelpersRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerG as DndContext,
  worktreeNewThreadOrchestratorCompatSlotLowerVLowerG as PointerSensor,
  worktreeNewThreadOrchestratorCompatSlotLowerXLowerG as initDndRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerYLowerG as closestCenter,
  worktreeNewThreadOrchestratorCompatSlotLowerZLowerT as initSortableRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperELowerM as initButtonRuntime,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as Button,
  worktreeNewThreadQueryCompatSlotUpperXLowerM as initMotionRuntime,
  worktreeNewThreadQueryCompatSlotLowerELowerO as DropdownMenu,
  worktreeNewThreadQueryCompatSlotLowerHLowerH as initAnimatePresenceRuntime,
  worktreeNewThreadQueryCompatSlotLowerILowerH as motion,
  worktreeNewThreadQueryCompatSlotLowerMLowerH as classNames,
  worktreeNewThreadQueryCompatSlotLowerNLowerO as DropdownMenuItems,
  worktreeNewThreadQueryCompatSlotLowerOLowerH as AnimatePresence,
  worktreeNewThreadQueryCompatSlotLowerOLowerO as initDropdownMenuRuntime,
  worktreeNewThreadQueryCompatSlotLowerXLowerP as initTooltipRuntime,
  worktreeNewThreadQueryCompatSlotLowerYLowerP as Tooltip,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  createScopedSignalAtom as createMessageDescriptors,
  currentAppInitialSharedMember0126 as normalizeQueuedMessageText,
  intlFormatDateTimeRuntime as initIntlDateTimeRuntime,
  codexTextLinkTextLinkPromptRuntime as initCodexTextLinkRuntime,
  currentAppInitialSharedFunction0375 as useIntl,
  currentAppInitialSharedRuntime0573 as initCurrentSharedQueueRuntime,
  currentAppInitialSharedFunction0589 as getGeneratedFileAttachmentPaths,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  appMainCurrentCompatSlotUnderscoreLowerD as initAppMainQueuedMessageRuntime,
  appMainCurrentCompatSlotLowerALowerD as initAppMainAttachmentRendererRuntime,
  appMainCurrentCompatSlotLowerALowerI as initMessageTextRendererRuntime,
  DragIcon as DragHandleGripIcon,
  appMainCurrentCompatSlotLowerILowerD as TrashIcon,
  appMainCurrentCompatSlotLowerILowerI as MessageTextRenderer,
  appMainCurrentCompatSlotLowerILowerM as initAppMainMessageTextRuntime,
  appMainCurrentCompatSlotLowerRLowerM as WarningCircleIcon,
} from "../vendor/app-main-current-runtime/index";
import {
  appgenLibraryHotDjo67r4nCompatSlotLowerALowerN as QueuedMessageListFrame,
  appgenLibraryHotDjo67r4nCompatSlotLowerCLowerN as splitCommentAttachmentsBySurface,
  appgenLibraryHotDjo67r4nCompatSlotLowerILowerT as initAppgenLibraryMenuRuntime,
  appgenLibraryHotDjo67r4nCompatSlotLowerOLowerN as initAppgenLibraryRowRuntime,
  appgenLibraryHotDjo67r4nCompatSlotLowerRLowerT as QueuedMessageRowShell,
  appgenLibraryHotDjo67r4nCompatSlotLowerSLowerN as initAppgenQueueContainerRuntime,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  projectsIndexCurrentCompatSlotLowerDLowerN as restrictToVerticalAxis,
  projectsIndexCurrentCompatSlotLowerPLowerN as restrictToParentElement,
  projectsIndexCurrentCompatSlotLowerULowerN as initProjectsDndModifiersRuntime,
} from "../runtime/current-app-initial/projects-index-current-runtime";
import {
  AppgenSettingsPencilIcon as PencilIcon,
  initAppgenSettingsPencilIconChunk,
} from "../runtime/current-app-initial/appgen-settings-publication-runtime";
import {
  initReviewCommentCountLabelsRuntimeChunk,
  formatCommentAttachmentSummary,
} from "../runtime/current-app-initial/review-comment-count-labels-runtime";

interface QueuedMessageListProps {
  messages: QueuedMessage[];
  isMessagePaused: (pausedReason: unknown) => boolean;
  isInterrupted: boolean;
  editingMessageId: string | null;
  hostId: string | null;
  isQueueingEnabled: boolean;
  onEditMessage: (messageId: string) => void;
  onDeleteMessage: (messageId: string) => void;
  onSendNowMessage: (messageId: string) => void;
  onReorderMessages: (messageIds: string[]) => void;
  onQueueingChange: (enabled: boolean) => void;
  onResumeInterruptedQueue: () => void;
}

interface QueuedMessage {
  context: QueuedMessageContext;
  id: string;
  pausedReason?: unknown;
  text: string;
}

interface QueuedMessageContext {
  commentAttachments?: unknown[];
  fileAttachments?: unknown;
  generatedPastedTextAttachmentPaths?: unknown;
  imageCommentDraft?: {
    comments: unknown[];
  };
  pastedTextAttachments?: Array<{
    preview?: string;
  }>;
  selectedTextAttachments?: unknown[];
}

interface QueuedMessageRowProps {
  hostId: string | null;
  isEditing: boolean;
  isPaused: boolean;
  isQueueingEnabled: boolean;
  messageId: string;
  messageText: string;
  onDeleteMessage: (messageId: string) => void;
  onEditMessage: (messageId: string) => void;
  onQueueingChange: (enabled: boolean) => void;
  onSendNowMessage: (messageId: string) => void;
}

interface QueuedMessageDndOptions {
  messageIds: string[];
  onReorderMessages: (messageIds: string[]) => void;
}

interface DragEndEvent {
  active: {
    id: unknown;
  };
  over?: {
    id: unknown;
  } | null;
}

interface MessageDescriptor {
  defaultMessage: string;
  description: string;
  id: string;
}

interface QueuedMessageDescriptors {
  retryQueuedMessage: MessageDescriptor;
  sendQueuedMessageNow: MessageDescriptor;
}

interface QueuedMessagePreviewParts {
  browserCommentCount: number;
  designTweakCount: number;
  diffCommentCount: number;
  imageCommentCount: number;
  pastedTextAttachmentCount?: number;
  pastedTextAttachmentPreview?: string;
  selectedTextAttachmentCount?: number;
  text: string;
}

const rowAnimationInitial = {
  height: 0,
  opacity: 0,
};

const rowAnimationVisible = {
  height: "auto",
  opacity: 1,
};

const rowAnimationExit = {
  height: 0,
  opacity: 0,
};

const rowAnimationTransition = {
  duration: 0.18,
};

let queuedMessageDescriptors: QueuedMessageDescriptors;

const initQueuedMessageListRuntime = runOnce(() => {
  initDndRuntime();
  initProjectsDndModifiersRuntime();
  initSortableRuntime();
  initSortableContextRuntime();
  initAnimatePresenceRuntime();
  initMotionRuntime();
  initIntlDateTimeRuntime();
  initButtonRuntime();
  initDropdownMenuRuntime();
  initTooltipRuntime();
  initMessageTextRendererRuntime();
  initReviewCommentCountLabelsRuntimeChunk();
  initAppgenQueueContainerRuntime();
  initAppMainQueuedMessageRuntime();
  initAppgenSettingsPencilIconChunk();
  initDndHelpersRuntime();
  initAppMainAttachmentRendererRuntime();
  initAppMainMessageTextRuntime();
  initAppgenLibraryMenuRuntime();
  initAppgenLibraryRowRuntime();
  initCurrentSharedQueueRuntime();
  initCodexTextLinkRuntime();
  queuedMessageDescriptors = createMessageDescriptors({
    retryQueuedMessage: {
      id: "composer.queuedMessage.retry",
      defaultMessage: "Retry",
      description:
        "Button label to retry a queued follow-up that failed to send",
    },
    sendQueuedMessageNow: {
      id: "composer.queuedMessage.sendNow",
      defaultMessage: "Steer",
      description: "Button label for sending a queued follow-up as a steer",
    },
  }) as QueuedMessageDescriptors;
});

initQueuedMessageListRuntime();

function QueuedMessageList({
  messages,
  isMessagePaused,
  isInterrupted,
  editingMessageId,
  hostId,
  isQueueingEnabled,
  onEditMessage,
  onDeleteMessage,
  onSendNowMessage,
  onReorderMessages,
  onQueueingChange,
  onResumeInterruptedQueue,
}: QueuedMessageListProps) {
  const intl = useIntl();
  const messageIds = messages.map(getQueuedMessageId);
  const dndContextProps = useQueuedMessageDnd({
    messageIds,
    onReorderMessages,
  });

  if (messages.length === 0) {
    return null;
  }

  return (
    <QueuedMessageListFrame>
      <div className="vertical-scroll-fade-mask hide-scrollbar flex max-h-[30dvh] flex-col gap-px overflow-x-hidden overflow-y-auto px-3 py-row-y">
        {isInterrupted && (
          <QueuedMessageRowShell
            title={
              <FormattedMessage
                id="composer.queuedMessage.interruptedQueue"
                defaultMessage="Queue paused because you interrupted"
                description="Header shown above queued messages paused because the user interrupted the running turn"
              />
            }
            actions={
              <Button color="ghost" onClick={onResumeInterruptedQueue}>
                <FormattedMessage
                  id="composer.queuedMessage.resumeInterruptedQueue"
                  defaultMessage="Resume"
                  description="Button label to resume queued messages paused by an interruption"
                />
              </Button>
            }
          />
        )}
        <DndContext {...dndContextProps}>
          <SortableContext
            items={messageIds}
            strategy={verticalListSortingStrategy}
          >
            <AnimatePresence initial={false}>
              {messages.map((message) => {
                const {
                  annotationCommentAttachments,
                  designTweakCommentAttachments,
                  diffCommentAttachments,
                } = splitCommentAttachmentsBySurface(
                  message.context.commentAttachments ?? [],
                );
                const generatedFileAttachments =
                  getGeneratedFileAttachmentPaths(
                    message.context.fileAttachments,
                    message.context.generatedPastedTextAttachmentPaths,
                  );

                return (
                  <QueuedMessageRow
                    key={message.id}
                    messageId={message.id}
                    messageText={formatQueuedMessagePreview(intl, {
                      text: normalizeQueuedMessageText(message.text),
                      browserCommentCount: annotationCommentAttachments.length,
                      designTweakCount: designTweakCommentAttachments.length,
                      diffCommentCount: diffCommentAttachments.length,
                      imageCommentCount:
                        message.context.imageCommentDraft?.comments.length ?? 0,
                      pastedTextAttachmentPreview:
                        message.context.pastedTextAttachments?.[0]?.preview ??
                        (generatedFileAttachments == null ? undefined : ""),
                      pastedTextAttachmentCount:
                        message.context.pastedTextAttachments?.length ??
                        generatedFileAttachments?.length,
                      selectedTextAttachmentCount:
                        message.context.selectedTextAttachments?.length,
                    })}
                    isPaused={isMessagePaused(message.pausedReason)}
                    hostId={hostId}
                    isEditing={message.id === editingMessageId}
                    isQueueingEnabled={isQueueingEnabled}
                    onEditMessage={onEditMessage}
                    onDeleteMessage={onDeleteMessage}
                    onSendNowMessage={onSendNowMessage}
                    onQueueingChange={onQueueingChange}
                  />
                );
              })}
            </AnimatePresence>
          </SortableContext>
        </DndContext>
      </div>
    </QueuedMessageListFrame>
  );
}

function QueuedMessageRow({
  messageId,
  messageText,
  isPaused,
  hostId,
  isEditing,
  isQueueingEnabled,
  onEditMessage,
  onDeleteMessage,
  onSendNowMessage,
  onQueueingChange,
}: QueuedMessageRowProps) {
  const intl = useIntl();
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortableQueuedMessage({ id: messageId });
  const sendNowMessageDescriptor = isPaused
    ? queuedMessageDescriptors.retryQueuedMessage
    : queuedMessageDescriptors.sendQueuedMessageNow;
  const sendNowLabel = intl.formatMessage(sendNowMessageDescriptor);
  const deleteLabel = intl.formatMessage({
    id: "composer.queuedMessage.delete",
    defaultMessage: "Delete queued message",
    description: "Aria label for deleting a queued message",
  });
  const moreActionsLabel = intl.formatMessage({
    id: "composer.queuedMessage.more",
    defaultMessage: "Queued message actions",
    description: "Aria label for the queued message row actions menu",
  });
  const dragIconClassName = classNames(
    "icon-2xs text-token-input-placeholder-foreground/70 pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 transition-opacity",
    isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-100",
  );
  const rowClassName = isEditing || isDragging ? "opacity-60" : undefined;

  const stopThenSend = (event: MouseEvent) => {
    event.stopPropagation();
    onSendNowMessage(messageId);
  };
  const stopThenDelete = (event: MouseEvent) => {
    event.stopPropagation();
    onDeleteMessage(messageId);
  };
  const stopThenEdit = (event: MouseEvent) => {
    event.stopPropagation();
    onEditMessage(messageId);
  };
  const stopThenToggleQueueing = (event: MouseEvent) => {
    event.stopPropagation();
    onQueueingChange(!isQueueingEnabled);
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={{
        transform: sortableCss.Translate.toString(transform),
        transition,
      }}
      initial={rowAnimationInitial}
      animate={rowAnimationVisible}
      exit={rowAnimationExit}
      transition={rowAnimationTransition}
      className="overflow-visible"
    >
      <QueuedMessageRowShell
        className={rowClassName}
        icon={
          <span
            ref={setActivatorNodeRef}
            className="relative -ml-3 flex h-4 cursor-grab items-center justify-center pl-3 active:cursor-grabbing"
            {...attributes}
            {...listeners}
          >
            <DragHandleGripIcon className={dragIconClassName} aria-hidden />
            <QueueingToggleIcon className="icon-2xs text-token-input-placeholder-foreground/70" />
          </span>
        }
        title={
          <div className="flex min-w-0 items-start gap-1.5">
            {isPaused && <PausedMessageWarning />}
            <MessageTextRenderer
              className="line-clamp-2 min-w-0 leading-4 text-token-text-secondary"
              text={messageText}
              cwd={null}
              hostId={hostId}
            />
          </div>
        }
        actions={
          <>
            <Tooltip
              side="top"
              tooltipClassName="max-w-80"
              tooltipBodyClassName="text-center whitespace-normal leading-snug"
              tooltipContent={<SendNowTooltipContent isPaused={isPaused} />}
            >
              <Button
                className="cursor-interaction gap-1 px-2"
                aria-label={sendNowLabel}
                color="ghost"
                size="default"
                onClick={stopThenSend}
              >
                <SendNowIcon className="icon-2xs shrink-0" />
                <FormattedMessage {...sendNowMessageDescriptor} />
              </Button>
            </Tooltip>
            <Button
              className="[&>svg]:icon-2xs"
              aria-label={deleteLabel}
              color="ghost"
              size="icon"
              onClick={stopThenDelete}
            >
              <TrashIcon className="icon-2xs" />
            </Button>
            <DropdownMenu
              align="end"
              triggerButton={
                <Button
                  className="[&>svg]:icon-2xs"
                  aria-label={moreActionsLabel}
                  color="ghost"
                  size="icon"
                >
                  <MoreHorizontalIcon className="icon-2xs" />
                </Button>
              }
            >
              <DropdownMenuItems.Item
                LeftIcon={PencilIcon}
                className="text-token-description-foreground"
                onClick={stopThenEdit}
              >
                <FormattedMessage
                  id="composer.queuedMessage.edit"
                  defaultMessage="Edit message"
                  description="Menu item to edit a queued message"
                />
              </DropdownMenuItems.Item>
              <DropdownMenuItems.Item
                LeftIcon={QueueingToggleIcon}
                className="text-token-description-foreground"
                onClick={stopThenToggleQueueing}
              >
                {isQueueingEnabled ? (
                  <FormattedMessage
                    id="composer.queuedMessage.turnOff"
                    defaultMessage="Turn off queueing"
                    description="Menu item to switch the default follow up behavior to steer"
                  />
                ) : (
                  <FormattedMessage
                    id="composer.queuedMessage.turnOn"
                    defaultMessage="Turn on queueing"
                    description="Menu item to switch the default follow up behavior to queue"
                  />
                )}
              </DropdownMenuItems.Item>
            </DropdownMenu>
          </>
        }
      />
    </motion.div>
  );
}

function PausedMessageWarning() {
  return (
    <Tooltip
      side="top"
      tooltipClassName="max-w-80"
      tooltipBodyClassName="text-center whitespace-normal leading-snug"
      tooltipContent={
        <div className="space-y-1 text-center">
          <p>
            <FormattedMessage
              id="composer.queuedMessage.pausedTooltip"
              defaultMessage="This queued message could not be sent"
              description="Primary tooltip text for a queued message that failed to send"
            />
          </p>
          <p className="text-token-description-foreground">
            <FormattedMessage
              id="composer.queuedMessage.pausedTooltipRemedy"
              defaultMessage="Retry, edit, or delete it to continue the queue"
              description="Secondary tooltip text explaining how to resolve a queued message that failed to send"
            />
          </p>
        </div>
      }
    >
      <span className="mt-0.5 inline-flex shrink-0">
        <WarningCircleIcon className="icon-2xs text-token-editor-warning-foreground" />
      </span>
    </Tooltip>
  );
}

function SendNowTooltipContent({ isPaused }: { isPaused: boolean }) {
  if (!isPaused) {
    return (
      <FormattedMessage
        id="composer.queuedMessage.sendNowTooltip"
        defaultMessage="Submit without interrupting the model"
        description="Primary tooltip text for steering with a queued follow-up without interrupting the current model run"
      />
    );
  }

  return (
    <div className="space-y-1 text-center">
      <p>
        <FormattedMessage
          id="composer.queuedMessage.retryTooltip"
          defaultMessage="Try sending this queued message again"
          description="Primary tooltip text for retrying a queued follow-up that failed to send"
        />
      </p>
      <p className="text-token-description-foreground">
        <FormattedMessage
          id="composer.queuedMessage.retryTooltipRemedy"
          defaultMessage="Edit or delete it if retry keeps failing"
          description="Secondary tooltip text explaining alternatives when retrying a queued follow-up keeps failing"
        />
      </p>
    </div>
  );
}

function useQueuedMessageDnd({
  messageIds,
  onReorderMessages,
}: QueuedMessageDndOptions) {
  const sensors = useDndSensors(
    useDndSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  return {
    sensors,
    collisionDetection: closestCenter,
    modifiers: [restrictToParentElement, restrictToVerticalAxis],
    onDragEnd: ({ active, over }: DragEndEvent) => {
      if (!over) {
        return;
      }

      const activeMessageId = String(active.id);
      const overMessageId = String(over.id);
      if (activeMessageId === overMessageId) {
        return;
      }

      const activeIndex = messageIds.indexOf(activeMessageId);
      const overIndex = messageIds.indexOf(overMessageId);
      if (activeIndex === -1 || overIndex === -1) {
        return;
      }

      onReorderMessages(moveArrayItem(messageIds, activeIndex, overIndex));
    },
  };
}

function formatQueuedMessagePreview(
  intl: {
    formatMessage: (message: MessageDescriptor, values?: object) => string;
  },
  {
    text,
    browserCommentCount,
    designTweakCount,
    diffCommentCount,
    imageCommentCount,
    pastedTextAttachmentCount = 0,
    pastedTextAttachmentPreview,
    selectedTextAttachmentCount = 0,
  }: QueuedMessagePreviewParts,
) {
  if (text.trim().length > 0) {
    return text;
  }

  if (pastedTextAttachmentPreview != null) {
    const previewText =
      pastedTextAttachmentPreview ||
      intl.formatMessage({
        id: "composer.queuedMessage.pastedTextAttachment",
        defaultMessage: "Pasted text",
        description:
          "Summary shown for an attached large text paste without displayable text in a queued message",
      });

    return pastedTextAttachmentCount <= 1
      ? previewText
      : intl.formatMessage(
          {
            id: "composer.queuedMessage.additionalPastedTextAttachments",
            defaultMessage:
              "{preview} (+{remainingCount, plural, one {# more pasted text attachment} other {# more pasted text attachments}})",
            description:
              "Summary shown for a queued message with multiple attached large text pastes",
          },
          {
            preview: previewText,
            remainingCount: pastedTextAttachmentCount - 1,
          },
        );
  }

  if (
    browserCommentCount > 0 ||
    designTweakCount > 0 ||
    diffCommentCount > 0 ||
    imageCommentCount > 0
  ) {
    return formatCommentAttachmentSummary(intl, {
      annotationCount: browserCommentCount,
      designTweakCount,
      commentCount: diffCommentCount + imageCommentCount,
    });
  }

  return selectedTextAttachmentCount > 0
    ? intl.formatMessage(
        {
          id: "selectedTextAttachments.numSelections",
          defaultMessage:
            "{count, plural, one {# selection} other {# selections}}",
          description:
            "Number of selected text snippets attached to the message",
        },
        {
          count: selectedTextAttachmentCount,
        },
      )
    : "";
}

function getQueuedMessageId(message: QueuedMessage) {
  return message.id;
}

function QueueingToggleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.66797 11V3.33301C2.66797 2.96574 2.96574 2.66797 3.33301 2.66797C3.70028 2.66797 3.99805 2.96574 3.99805 3.33301V11C3.99805 11.7109 3.99894 12.2044 4.03027 12.5879C4.06098 12.9634 4.11776 13.175 4.19824 13.333L4.26856 13.459C4.44487 13.7465 4.69781 13.9808 5 14.1348L5.12988 14.1904C5.27366 14.2419 5.46311 14.2797 5.74512 14.3027C6.12864 14.3341 6.62197 14.335 7.33301 14.335H15L15.0674 14.3418L14.1123 13.3867L14.0273 13.2822C13.8571 13.0242 13.8854 12.6735 14.1123 12.4463C14.3397 12.2189 14.6911 12.1906 14.9492 12.3613L15.0537 12.4463L17.1367 14.5293C17.3964 14.7889 17.3963 15.21 17.1367 15.4697L15.0537 17.5537C14.794 17.8134 14.372 17.8134 14.1123 17.5537C13.8526 17.294 13.8526 16.872 14.1123 16.6123L15.0664 15.6582L15 15.665H7.33301C6.64392 15.665 6.08696 15.6647 5.63672 15.6279C5.23614 15.5952 4.87531 15.5309 4.53906 15.3867L4.39649 15.3193C3.87528 15.0538 3.43887 14.6502 3.13477 14.1543L3.0127 13.9365C2.82084 13.5599 2.74153 13.1541 2.7041 12.6963C2.66732 12.2461 2.66797 11.6889 2.66797 11ZM15.665 15C15.665 15.0226 15.6594 15.0444 15.6572 15.0664L15.7256 14.999L15.6572 14.9316C15.6595 14.9541 15.665 14.9769 15.665 15ZM11.666 8.91797L11.8008 8.93164C12.1036 8.99381 12.3311 9.2618 12.3311 9.58301C12.3311 9.90422 12.1036 10.1722 11.8008 10.2344L11.666 10.248H7.5C7.13273 10.248 6.83496 9.95028 6.83496 9.58301C6.83496 9.21574 7.13273 8.91797 7.5 8.91797H11.666ZM14.166 4.33496L14.3008 4.34863C14.6036 4.41083 14.8311 4.67881 14.8311 5C14.8309 5.32109 14.6035 5.58924 14.3008 5.65137L14.166 5.66504H7.5C7.13284 5.66504 6.83514 5.36712 6.83496 5C6.83496 4.63273 7.13273 4.33496 7.5 4.33496H14.166Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SendNowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.1293 7.34753C13.3565 7.12027 13.7081 7.09207 13.9662 7.26257L14.0707 7.34753L18.0707 11.3475C18.3304 11.6072 18.3304 12.0292 18.0707 12.2889L14.0707 16.2889C13.811 16.5486 13.389 16.5486 13.1293 16.2889C12.8696 16.0292 12.8696 15.6072 13.1293 15.3475L15.9935 12.4833H6.59998C4.57585 12.4833 2.93494 10.8424 2.93494 8.81824V5.31824C2.93494 4.95097 3.23271 4.6532 3.59998 4.6532C3.96724 4.6532 4.26501 4.95097 4.26501 5.31824V8.81824C4.26501 10.1078 5.31039 11.1532 6.59998 11.1532H15.9935L13.1293 8.28894L13.0443 8.18445C12.8738 7.92632 12.902 7.5748 13.1293 7.34753Z"
        fill="currentColor"
      />
    </svg>
  );
}

QueuedMessageList.displayName = "QueuedMessageList";
QueuedMessageRow.displayName = "QueuedMessageRow";
PausedMessageWarning.displayName = "PausedMessageWarning";
SendNowTooltipContent.displayName = "SendNowTooltipContent";
QueueingToggleIcon.displayName = "QueueingToggleIcon";
SendNowIcon.displayName = "SendNowIcon";

export { QueuedMessageList };
