// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "../../../vendor/react-intl";
import { classNames } from "../../../utils/class-names";
import { PlanProgressIcon } from "../../../icons/plan-progress-icon";
import {
  activityDisclosureTransition,
  ChevronDownIcon,
  ChevronUpIcon,
  motion,
  sumBy,
  useDisclosureContentHeight,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { PlanPillBar } from "./plan-pill-bar";
import { PlanStepStatusIcon } from "./plan-step-status-icon";
import { isCompletedAsNumber, isInProgress, negate } from "./plan-step-utils";
import type { TodoPlanItem } from "./types";

export interface TodoPlanListProps {
  item: TodoPlanItem;
  isComplete: boolean;
}

export function TodoPlanList({ item, isComplete }: TodoPlanListProps) {
  const intl = useIntl();
  const [isExpanded, setIsExpanded] = useState(true);
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();
  const inProgressRef = useRef<HTMLDivElement>(null);

  const completedCount = sumBy(item.plan, isCompletedAsNumber);
  const totalCount = item.plan.length;
  const inProgressIndex = item.plan.findIndex(isInProgress);
  const scrollTargetIndex =
    completedCount === totalCount ? totalCount - 1 : inProgressIndex;

  useEffect(() => {
    const element = inProgressRef.current;
    if (scrollTargetIndex < 0 || !element) return;
    element.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [scrollTargetIndex]);

  const contentHeight = isExpanded ? elementHeightPx : 0;
  const toggle = () => setIsExpanded(negate);

  const toggleButton = (
    <button
      type="button"
      className="text-token-input-placeholder-foreground hover:bg-transparent hover:text-token-foreground focus-visible:outline-none"
    >
      {isExpanded ? (
        <ChevronUpIcon className="icon-2xs" />
      ) : (
        <ChevronDownIcon className="icon-2xs" />
      )}
    </button>
  );

  const steps = item.plan.map((step, index) => (
    <div
      key={index}
      ref={index === inProgressIndex ? inProgressRef : null}
      id={`plan-item-${index}`}
      className="flex items-start gap-2"
    >
      <div className="flex flex-shrink-0 items-start gap-0.5">
        <PlanStepStatusIcon isComplete={isComplete} status={step.status} />
        <span className="text-size-chat leading-4">
          {intl.formatMessage(
            {
              id: "codex.todoPlan.stepIndexPrefix",
              defaultMessage: "{index}.",
              description:
                "Prefix numbering for a plan step, including a trailing period",
            },
            { index: index + 1 },
          )}
        </span>
      </div>
      <span
        className={classNames(
          "text-size-chat flex-1 leading-4",
          step.status === "completed" && "line-through",
        )}
      >
        {step.step}
      </span>
    </div>
  ));

  const expandedContent = (
    <motion.div
      initial={false}
      animate={{ height: contentHeight, opacity: isExpanded ? 1 : 0 }}
      transition={activityDisclosureTransition}
      className={classNames(
        isExpanded ? "overflow-visible" : "overflow-hidden",
      )}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
    >
      <div
        ref={isExpanded ? elementRef : null}
        className="flex flex-col gap-2 bg-token-input-background/70 p-2 backdrop-blur-sm"
      >
        <div className="vertical-scroll-fade-mask max-h-40 space-y-2 overflow-y-auto [--edge-fade-distance:2rem]">
          {steps}
        </div>
      </div>
    </motion.div>
  );

  const completionIcon = (
    <span
      aria-hidden={isComplete}
      className={classNames(
        "flex shrink-0 items-center justify-center overflow-hidden transition-[margin-inline-end,opacity,transform,width] duration-150 ease-out",
        isComplete
          ? "me-0 w-0 scale-90 opacity-0"
          : "me-1 w-4 scale-100 opacity-100",
      )}
    >
      <PlanProgressIcon className="icon-xs text-token-foreground" />
    </span>
  );

  const summary = (
    <div className="flex min-w-0 items-center">
      <div className="text-size-chat flex min-w-0 items-center">
        {completionIcon}
        <span className="min-w-0 truncate text-token-input-placeholder-foreground">
          <FormattedMessage
            id="localConversationPage.planItemsCompleted"
            defaultMessage="{completedItems} out of {totalItems, plural, one {# task completed} other {# tasks completed}}"
            description="Title for a plan that the model generates font-medium"
            values={{ completedItems: completedCount, totalItems: totalCount }}
          />
        </span>
      </div>
    </div>
  );

  return (
    <PlanPillBar
      onClick={toggle}
      action={toggleButton}
      expandedContent={expandedContent}
    >
      {summary}
    </PlanPillBar>
  );
}
