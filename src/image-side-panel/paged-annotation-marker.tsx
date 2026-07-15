// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Numbered pin marker placed over an image to anchor a paged-annotation comment.
import type {
  CSSProperties,
  FocusEventHandler,
  MouseEvent,
  MouseEventHandler,
  PointerEvent,
  SVGProps,
} from "react";
import { classNames } from "../utils/class-names";

const MARKER_ACCENT_COLOR =
  "var(--color-text-accent, var(--color-accent-blue, #2563eb))";
const MARKER_LABEL_STYLE: CSSProperties = {
  color: "white",
  fontFamily: "var(--font-sans)",
};
const EPSILON = 2.220446049250313e-16;

function CommentMarkerPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={26}
      height={25}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z"
        fill="currentColor"
        stroke="white"
        strokeWidth={1.65}
      />
    </svg>
  );
}

export interface PagedAnnotationMarkerProps {
  ariaLabel?: string;
  draft?: boolean;
  draftTestId?: string;
  isSelected?: boolean;
  label: string | number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onPreviewHide?: () => void;
  onPreviewShow?: () => void;
  pageSize: { width: number; height: number };
  point: { x: number; y: number };
  testId?: string;
  zoomScale?: number;
}

function stopPointerPropagation(event: PointerEvent<HTMLButtonElement>) {
  event.stopPropagation();
}

export function PagedAnnotationMarker(props: PagedAnnotationMarkerProps) {
  const {
    ariaLabel,
    draft = false,
    draftTestId,
    isSelected = false,
    label,
    onClick,
    onPreviewHide,
    onPreviewShow,
    pageSize,
    point,
    testId,
    zoomScale = 1,
  } = props;

  const scale = (isSelected ? 1.05 : 1) / Math.max(zoomScale, EPSILON);
  const content = (
    <>
      <CommentMarkerPin className="absolute inset-0 size-full" />
      <span
        className="pointer-events-none relative z-10 -translate-x-px -translate-y-px font-sans text-[10px] leading-none font-bold text-white"
        style={MARKER_LABEL_STYLE}
      >
        {label}
      </span>
    </>
  );

  const style: CSSProperties = {
    color: MARKER_ACCENT_COLOR,
    height: 30,
    left: `${(point.x / pageSize.width) * 100}%`,
    scale: `${scale}`,
    top: `${(point.y / pageSize.height) * 100}%`,
    transformOrigin: "center",
    width: 30,
  };

  if (
    !draft &&
    (onClick != null || (onPreviewShow != null && onPreviewHide != null))
  ) {
    const className = classNames(
      "pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 cursor-interaction items-center justify-center border-0 bg-transparent p-0 focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
      "font-sans",
    );
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onClick?.(event);
    };
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={className}
        data-testid={testId}
        style={style}
        onPointerDown={stopPointerPropagation}
        onMouseEnter={onPreviewShow}
        onMouseLeave={onPreviewHide}
        onFocus={onPreviewShow as FocusEventHandler<HTMLButtonElement>}
        onBlur={onPreviewHide as FocusEventHandler<HTMLButtonElement>}
        onClick={handleClick}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      className="pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 font-sans"
      data-testid={draft ? draftTestId : undefined}
      style={style}
    >
      {content}
    </div>
  );
}

export function initPagedAnnotationMarkerChunk(): void {
  void PagedAnnotationMarker;
}
