// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Floating "fixed content" (in-progress turn diff + todo list pill) portaled to the bottom of the thread.
import React, { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getResizeObserverEntrySize,
  useResizeObserverRef,
} from "../../utils/use-resize-observer";
import {
  conversationTurnUnifiedDiffAtom,
  conversationTurnDiffCwdAtom,
  useScopedAtomValue,
  useTurnFixedContentPortalContainer,
  TurnUnifiedDiffSummaryRow,
  TodoListProgressPill,
} from "../../boundaries/onboarding-commons-externals.facade";

const FIXED_CONTENT_TRANSITION = { duration: 0.15, ease: "easeOut" } as const;
const PILL_WIDTH_TRANSITION = { duration: 0.2, ease: "easeOut" } as const;
const TODO_DONUT_MOUNT_DELAY_SECONDS = 0.15;

type UnifiedDiffItem = {
  cwd?: string | null;
  [key: string]: unknown;
};

type TodoListItem = {
  plan: readonly unknown[];
  [key: string]: unknown;
};

export type TurnInProgressFixedContentProps = {
  conversationId: string;
  hasBlockingRequest: boolean;
  isTurnInProgress: boolean;
  todoListItem: TodoListItem | null;
  unifiedDiffItem: UnifiedDiffItem | null;
  conversationDetailLevel: string;
  cwd: string | null;
  hostId: string;
};

export function TurnInProgressFixedContent({
  conversationId,
  hasBlockingRequest,
  isTurnInProgress,
  todoListItem,
  unifiedDiffItem,
  conversationDetailLevel,
  cwd,
  hostId,
}: TurnInProgressFixedContentProps): ReactNode {
  const portalContainer = useTurnFixedContentPortalContainer(conversationId);
  const liveUnifiedDiff = useScopedAtomValue(
    conversationTurnUnifiedDiffAtom,
    conversationId,
  );
  const liveDiffCwd = useScopedAtomValue(
    conversationTurnDiffCwdAtom,
    conversationId,
  );
  const liveDiffItem: UnifiedDiffItem | null =
    liveUnifiedDiff == null
      ? null
      : {
          type: "turn-diff",
          unifiedDiff: liveUnifiedDiff,
          cwd: liveDiffCwd ?? null,
        };
  const resolvedDiffItem = liveDiffItem ?? unifiedDiffItem;

  if (portalContainer == null || !isTurnInProgress) {
    return null;
  }

  const showDiff =
    !hasBlockingRequest &&
    unifiedDiffItem != null &&
    resolvedDiffItem != null &&
    conversationDetailLevel !== "STEPS_PROSE";
  const showTodoList =
    !hasBlockingRequest && todoListItem != null && todoListItem.plan.length > 0;
  const hasFixedContent = showDiff || showTodoList;

  if (!hasFixedContent) {
    return null;
  }

  const diffSummary =
    showDiff && resolvedDiffItem != null ? (
      <TurnUnifiedDiffSummaryRow
        isInProgress={true}
        item={resolvedDiffItem}
        showLeadingSeparator={showTodoList}
        conversationId={conversationId}
        cwd={resolvedDiffItem.cwd ?? cwd}
        hostId={hostId}
      />
    ) : null;

  const fixedContent = (
    <>
      <div aria-hidden={true} className="h-8" />
      <AnimatePresence>
        {hasFixedContent ? (
          <motion.div
            key="fixed-content"
            className="absolute inset-x-5 bottom-1 flex min-h-7 items-center justify-center gap-2 pb-1"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={FIXED_CONTENT_TRANSITION}
          >
            <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-7 bg-gradient-to-t from-token-main-surface-primary to-transparent" />
            <FixedContentPill>
              <AnimatePresence initial={false}>
                {showTodoList ? (
                  <motion.div
                    key="todo"
                    className="max-w-full min-w-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={FIXED_CONTENT_TRANSITION}
                  >
                    <TodoListProgressPill
                      donutAnimateOnMountDelayMs={
                        TODO_DONUT_MOUNT_DELAY_SECONDS * 1e3
                      }
                      item={todoListItem}
                      tooltipPortalContainer={portalContainer}
                    />
                  </motion.div>
                ) : null}
                {diffSummary == null ? null : (
                  <motion.div
                    key="diff"
                    className="min-w-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={FIXED_CONTENT_TRANSITION}
                  >
                    {diffSummary}
                  </motion.div>
                )}
              </AnimatePresence>
            </FixedContentPill>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );

  return createPortal(fixedContent, portalContainer);
}

function FixedContentPill({ children }: { children: ReactNode }): ReactNode {
  const [pillWidth, setPillWidth] = useState<number | null>(null);
  const measureRef = useResizeObserverRef((entry: ResizeObserverEntry) => {
    setPillWidth(Math.ceil(getResizeObserverEntrySize(entry).width));
  });
  const animatedStyle = pillWidth == null ? undefined : { width: pillWidth };

  return (
    <motion.div
      animate={animatedStyle}
      transition={PILL_WIDTH_TRANSITION}
      className="relative z-10 w-fit max-w-(--thread-content-max-width) min-w-0 overflow-hidden rounded-3xl"
    >
      <div
        ref={measureRef}
        className="flex w-max max-w-(--thread-content-max-width) min-w-0 items-center gap-2 rounded-3xl border border-token-border/80 bg-token-input-background/70 px-3 py-1.5 text-token-foreground backdrop-blur-sm"
      >
        {children}
      </div>
    </motion.div>
  );
}
