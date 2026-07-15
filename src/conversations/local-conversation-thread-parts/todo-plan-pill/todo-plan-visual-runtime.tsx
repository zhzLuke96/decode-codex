// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small visual primitives used by todo-plan pills and expanded plan rows.
import type { SVGProps } from "react";
import { CheckCircleIcon } from "../../../icons/check-circle-icon";
import { ChevronIcon } from "../../../icons/chevron-icon";
import { ProgressionDonutIcon as DonutProgress } from "../../../icons/progression-donut-icon";
import { UnselectedCircleIcon } from "../../../icons/unselected-circle-icon";
import { Spinner } from "../../../ui/spinner";
import { classNames } from "../../../utils/class-names";

export { DonutProgress };

export function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ChevronIcon
      {...props}
      className={classNames("rotate-180", props.className)}
    />
  );
}

export function PlanStepCompletedIcon(props: SVGProps<SVGSVGElement>) {
  return <CheckCircleIcon {...props} />;
}

export function PlanStepInactiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <UnselectedCircleIcon
      {...props}
      className={classNames("opacity-45", props.className)}
    />
  );
}

export function PlanStepPendingIcon(props: SVGProps<SVGSVGElement>) {
  return <UnselectedCircleIcon {...props} />;
}

export function PlanStepSpinnerIcon({
  className,
}: {
  className?: string;
}) {
  return <Spinner className={className} />;
}
