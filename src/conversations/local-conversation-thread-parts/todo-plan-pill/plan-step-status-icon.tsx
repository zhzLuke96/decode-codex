// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { classNames } from "../../../utils/class-names";
import {
  PlanStepCompletedIcon,
  PlanStepInactiveIcon,
  PlanStepPendingIcon,
  PlanStepSpinnerIcon,
} from "../../../boundaries/onboarding-commons-externals.facade";
import type { PlanStepStatus } from "./types";

export interface PlanStepStatusIconProps {
  status: PlanStepStatus;
  isComplete: boolean;
}

export function PlanStepStatusIcon({
  status,
  isComplete,
}: PlanStepStatusIconProps) {
  switch (status) {
    case "pending":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          {isComplete ? (
            <PlanStepInactiveIcon className="icon-xs block shrink-0" />
          ) : (
            <PlanStepPendingIcon className="icon-xs block shrink-0" />
          )}
        </div>
      );
    case "in_progress":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          {isComplete ? (
            <PlanStepInactiveIcon className="icon-xs block shrink-0" />
          ) : (
            <PlanStepSpinnerIcon className="icon-xs" />
          )}
        </div>
      );
    case "completed":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          <PlanStepCompletedIcon
            className={classNames(
              "icon-xs block shrink-0",
              "text-token-text-tertiary",
            )}
          />
        </div>
      );
  }
}
