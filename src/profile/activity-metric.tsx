// Restored from ref/webview/assets/profile-BCAO7QLd.js
import type { ReactNode } from "react";
import clsx from "clsx";
import { ReasoningEffortLabel } from "../composer/reasoning-effort-label";
import { Tooltip } from "../ui/tooltip-b";
import { FormattedMessage, type IntlShape } from "../vendor/react-intl";

type ProfileReasoningEffort =
  | "none"
  | "minimal"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "max";

export type ProfileActivityMetricRowProps = {
  isEmpty: boolean;
  label: ReactNode;
  tooltipContent: ReactNode;
  value: ReactNode;
};

export type ProfileReasoningEffortValueProps = {
  effort: string;
};

export function ProfileActivityMetricRow({
  isEmpty,
  label,
  tooltipContent,
  value,
}: ProfileActivityMetricRowProps): ReactNode {
  const valueClassName = clsx(
    "shrink-0 tabular-nums",
    isEmpty ? "text-token-text-tertiary" : "text-token-text-primary",
  );

  return (
    <div className="flex h-6 min-w-0 items-center justify-between gap-3 text-base leading-5">
      <dt className="min-w-0 truncate text-token-text-secondary">{label}</dt>
      <dd className={valueClassName}>
        <Tooltip
          delayDuration={250}
          disablePadding
          side="top"
          tooltipClassName="flex h-[38px] items-center gap-2.5 p-2"
          tooltipContent={tooltipContent}
        >
          <span className="inline-block" tabIndex={0}>
            {value}
          </span>
        </Tooltip>
      </dd>
    </div>
  );
}

export function ProfileActivityNotUsedValue(): ReactNode {
  return (
    <FormattedMessage
      id="profile.activity.features.notUsed"
      defaultMessage="Not used"
      description="Empty activity metric value on the profile page"
    />
  );
}

export function ProfileActivityNoneValue(): ReactNode {
  return (
    <FormattedMessage
      id="profile.activity.features.none"
      defaultMessage="None"
      description="Empty count metric value on the profile page"
    />
  );
}

export function ProfileReasoningEffortValue({
  effort,
}: ProfileReasoningEffortValueProps): ReactNode {
  return isProfileReasoningEffort(effort) ? (
    <ReasoningEffortLabel effort={effort} />
  ) : (
    <>{effort}</>
  );
}

export function formatProfilePercent(
  intl: Pick<IntlShape, "formatNumber">,
  percent: number,
): string {
  return intl.formatNumber(percent / 100, {
    maximumFractionDigits: 0,
    style: "percent",
  });
}

function isProfileReasoningEffort(
  effort: string,
): effort is ProfileReasoningEffort {
  switch (effort) {
    case "none":
    case "minimal":
    case "low":
    case "medium":
    case "high":
    case "xhigh":
    case "max":
      return true;
    default:
      return false;
  }
}
