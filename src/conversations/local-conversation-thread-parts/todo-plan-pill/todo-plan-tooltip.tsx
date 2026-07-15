// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import type { PlanStep, TodoPlanItem } from "./types";
import { PlanStepStatusIcon } from "./plan-step-status-icon";
import { classNames } from "../../../utils/class-names";

export function TodoPlanTooltip({ item }: { item: TodoPlanItem }) {
  return (
    <div className="flex max-h-[min(var(--radix-tooltip-content-available-height),calc(100vh-16px))] min-h-0 max-w-80 flex-1 flex-col overflow-hidden rounded-xl">
      <div className="vertical-scroll-fade-mask flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2 py-2 [--edge-fade-distance:1rem]">
        {item.plan.map((step, index) => (
          <TodoPlanTooltipStep key={`${step.step}:${index}`} step={step} />
        ))}
      </div>
    </div>
  );
}

function TodoPlanTooltipStep({ step }: { step: PlanStep }) {
  return (
    <div className="flex max-w-80 min-w-0 items-start gap-2">
      <PlanStepStatusIcon isComplete={false} status={step.status} />
      <span
        className={classNames(
          "text-size-chat max-w-72 min-w-0 break-words leading-4",
          step.status === "completed"
            ? "text-token-text-tertiary"
            : "text-token-text-secondary",
        )}
      >
        {step.step}
      </span>
    </div>
  );
}
