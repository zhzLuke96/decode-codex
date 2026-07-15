// Restored from ref/webview/assets/get-attached-heartbeat-automation-for-thread--SYt845Y.js
// get-attached-heartbeat-automation-for-thread--SYt845Y chunk restored from the Codex webview bundle.
import clsx from "clsx";
import type { SVGProps } from "react";
import { UnselectedCircleIcon } from "../icons/unselected-circle-icon";
type AutomationCheckStatus =
  | "failing"
  | "passing"
  | "pending"
  | "skipped"
  | "unknown";
type AutomationCheck = {
  status: AutomationCheckStatus | string;
};
type ThreadAutomation = {
  kind?: string;
  status?: string;
  targetThreadId?: string | null;
};
const RING_RADIUS = 5.75;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
export const HeartbeatAutomationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path d="M10.012 1.669a8.343 8.343 0 0 1 8.343 8.343 8.343 8.343 0 0 1-8.343 8.343 8.343 8.343 0 0 1-8.343-8.343 8.343 8.343 0 0 1 8.343-8.343Zm0 1.668a6.675 6.675 0 1 0 0 13.35 6.675 6.675 0 0 0 0-13.35Zm0 1.669a5.007 5.007 0 1 1 0 10.012V5.006Z" />
  </svg>
);
export function HeartbeatAutomationCheckRing({
  className = "icon-sm shrink-0",
  checks,
}: {
  className?: string;
  checks: readonly AutomationCheck[];
}) {
  const segments = summarizeCheckSegments(checks);
  const iconClassName = clsx("text-token-description-foreground", className);
  if (segments.length === 0) {
    return <UnselectedCircleIcon className={iconClassName} />;
  }
  const gap = segments.length > 1 ? 1.5 : 0;
  let accumulatedLength = 0;
  return (
    <svg
      aria-hidden={true}
      className={iconClassName}
      fill="none"
      viewBox="0 0 18 18"
    >
      <g transform="rotate(-90 9 9)">
        {segments.map((segment) => {
          const segmentLength = RING_CIRCUMFERENCE * segment.ratio;
          const dashArray = `${Math.max(segmentLength - gap, 0.001)} ${RING_CIRCUMFERENCE}`;
          const dashOffset = -(accumulatedLength + gap / 2);
          accumulatedLength += segmentLength;
          return (
            <circle
              key={segment.key}
              cx="9"
              cy="9"
              r={RING_RADIUS}
              stroke={segment.color}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="butt"
              strokeWidth="1.7"
            />
          );
        })}
      </g>
    </svg>
  );
}
export function getAttachedHeartbeatAutomationForThread({
  automations,
  conversationId,
  includePausedAutomations = false,
}: {
  automations: readonly ThreadAutomation[];
  conversationId?: string | null;
  includePausedAutomations?: boolean;
}) {
  if (conversationId == null) return null;
  return (
    automations.find(
      (automation) =>
        automation.kind === "heartbeat" &&
        (automation.status === "ACTIVE" ||
          (includePausedAutomations && automation.status === "PAUSED")) &&
        automation.targetThreadId === conversationId,
    ) ?? null
  );
}
function summarizeCheckSegments(checks: readonly AutomationCheck[]) {
  const totalCount = checks.length;
  if (totalCount === 0) return [];
  const counts = {
    failing: checks.filter((check) => check.status === "failing").length,
    passing: checks.filter((check) => check.status === "passing").length,
    pending: checks.filter((check) => check.status === "pending").length,
    skipped: checks.filter((check) => check.status === "skipped").length,
    unknown: checks.filter((check) => check.status === "unknown").length,
  };
  return [
    {
      color: "var(--color-token-charts-green)",
      count: counts.passing,
      key: "passing",
    },
    {
      color: "var(--color-token-charts-red)",
      count: counts.failing,
      key: "failing",
    },
    {
      color: "var(--color-token-charts-yellow)",
      count: counts.pending,
      key: "pending",
    },
    {
      color: "var(--color-token-description-foreground)",
      count: counts.skipped + counts.unknown,
      key: "skipped",
    },
  ]
    .filter((segment) => segment.count > 0)
    .map((segment) => ({
      color: segment.color,
      key: segment.key,
      ratio: segment.count / totalCount,
    }));
}
