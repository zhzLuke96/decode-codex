// Restored from ref/webview/assets/spinner-DHBmwxtt.js
// spinner-DHBmwxtt chunk restored from the Codex webview bundle.
import type { CSSProperties, ComponentType, SVGProps } from "react";
import { useState } from "react";
import clsx from "clsx";
import { useReducedMotion } from "../utils/use-reduced-motion";
type SpinnerIconProps = SVGProps<SVGSVGElement>;
type SpinnerProps = {
  Icon?: ComponentType<SpinnerIconProps>;
  animationDurationMs?: number;
  className?: string;
  containerClassName?: string;
};
function SpinnerIcon(svgProps: SpinnerIconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        opacity={0.3}
        d="M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        fill="currentColor"
      />
      <path
        d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12H6C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6V4Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Spinner({
  Icon = SpinnerIcon,
  className,
  containerClassName,
  animationDurationMs,
}: SpinnerProps) {
  const reduceMotion = useReducedMotion();
  const [animationDelay] = useState(getInitialAnimationDelay);
  const style: CSSProperties = {
    animationDelay,
    animationDuration:
      animationDurationMs == null ? undefined : `${animationDurationMs}ms`,
  };
  return (
    <div
      className={clsx(
        !reduceMotion && "animate-spin",
        "inline-flex h-fit w-fit items-center justify-center leading-none contain-layout contain-paint contain-style",
        containerClassName,
      )}
      style={style}
    >
      <Icon className={className} />
    </div>
  );
}
function getInitialAnimationDelay() {
  return `-${Date.now() % 1000}ms`;
}

function initSpinnerComponent(): void {}

export { SpinnerIcon, Spinner, initSpinnerComponent };
