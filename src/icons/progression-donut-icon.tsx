// Restored from ref/webview/assets/progression-donut-BTBWT-Q8.js
// progression-donut-BTBWT-Q8 chunk restored from the Codex webview bundle.
import clsx from "clsx";
const styles = {
  fillOnMount: "_fillOnMount_9hstz_1",
};
export type ProgressionDonutIconProps = {
  animateOnMount?: boolean;
  animateOnMountDelayMs?: number;
  className?: string;
  percent?: number;
  reducedMotion?: boolean;
  size?: number;
  strokeWidth?: number;
  transitionDurationMs?: number;
};
export function ProgressionDonutIcon({
  animateOnMount = false,
  animateOnMountDelayMs = 0,
  className,
  percent = 0,
  reducedMotion = false,
  size = 12,
  strokeWidth = 2,
  transitionDurationMs = 120,
}: ProgressionDonutIconProps) {
  const radius = (size - strokeWidth) / 2;
  const clampedPercent = clampProgressPercent(percent);
  const strokeDashoffset = 100 - clampedPercent;
  const transition = reducedMotion
    ? "none"
    : `stroke-dashoffset ${transitionDurationMs}ms ease-out, opacity ${transitionDurationMs}ms ease-out`;
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={clsx("shrink-0", className)}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.16}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity={clampedPercent === 0 ? 0 : 1}
        strokeLinecap="round"
        fill="none"
        pathLength={100}
        strokeDasharray={100}
        strokeDashoffset={strokeDashoffset}
        className={clsx(animateOnMount && !reducedMotion && styles.fillOnMount)}
        style={{
          animationDelay:
            animateOnMount && !reducedMotion
              ? `${animateOnMountDelayMs}ms`
              : undefined,
          transition,
        }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export function initProgressionDonutIconChunk(): void {
  void styles;
}

function clampProgressPercent(percent: number) {
  if (!Number.isFinite(percent) || percent < 0) return 0;
  if (percent > 100) return 100;
  return percent;
}
