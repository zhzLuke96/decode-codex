// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { FormattedMessage } from "../../../vendor/react-intl";
import {
  DonutProgress,
  sumBy,
  Tooltip,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { TodoPlanTooltip } from "./todo-plan-tooltip";
import {
  isCompletedAsNumber,
  isInProgress,
  isNotCompleted,
} from "./plan-step-utils";
import type { TodoPlanItem } from "./types";

export interface TodoPlanWidgetProps {
  donutAnimateOnMountDelayMs?: number;
  item: TodoPlanItem;
  isComplete?: boolean;
  tooltipPortalContainer?: HTMLElement | null;
}

type TodoPlanPillProps = Required<
  Omit<TodoPlanWidgetProps, "tooltipPortalContainer">
> & {
  tooltipPortalContainer?: HTMLElement | null;
};

export function TodoPlanWidget({
  donutAnimateOnMountDelayMs = 0,
  item,
  isComplete = false,
  tooltipPortalContainer,
}: TodoPlanWidgetProps) {
  return (
    <TodoPlanPill
      donutAnimateOnMountDelayMs={donutAnimateOnMountDelayMs}
      item={item}
      isComplete={isComplete}
      tooltipPortalContainer={tooltipPortalContainer}
    />
  );
}

export function TodoPlanPill({
  donutAnimateOnMountDelayMs,
  item,
  isComplete,
  tooltipPortalContainer,
}: TodoPlanPillProps) {
  const inProgressIndex = item.plan.findIndex(isInProgress);
  const firstIncompleteIndex = item.plan.findIndex(isNotCompleted);
  const currentIndex =
    inProgressIndex >= 0
      ? inProgressIndex
      : firstIncompleteIndex >= 0
        ? firstIncompleteIndex
        : item.plan.length - 1;

  if (currentIndex < 0) {
    return <div className="size-1 rounded-full bg-token-charts-blue" />;
  }

  const completedCount = sumBy(item.plan, isCompletedAsNumber);
  const percent = isComplete ? 100 : (completedCount / item.plan.length) * 100;
  const stepNumber = currentIndex + 1;

  const pillBody = (
    <span className="inline-flex max-w-full min-w-0 cursor-interaction hover:text-token-foreground">
      <span className="text-size-chat flex max-w-full min-w-0 items-center gap-1.5 text-token-text-secondary">
        <DonutProgress
          animateOnMount={true}
          animateOnMountDelayMs={donutAnimateOnMountDelayMs}
          percent={percent}
          className="text-token-charts-blue"
        />
        <span className="whitespace-nowrap tabular-nums">
          <FormattedMessage
            id="codex.todoPlan.pillProgress"
            defaultMessage="Step {stepNumber} / {stepCount}"
            description="Compact step count shown in the in-progress plan pill above the composer"
            values={{ stepNumber, stepCount: item.plan.length }}
          />
        </span>
      </span>
    </span>
  );

  return (
    <Tooltip
      delayDuration={0}
      interactive={true}
      portalContainer={tooltipPortalContainer}
      side="top"
      sideOffset={8}
      variant="rich"
      tooltipContent={<TodoPlanTooltip item={item} />}
      tooltipMaxWidth="min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
    >
      {pillBody}
    </Tooltip>
  );
}
