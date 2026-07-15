// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scrubbable numeric input for the browser design editor.

import {
  useRef,
  type ChangeEvent,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import clsx from "clsx";
import {
  SCRUB_ACTIVATION_THRESHOLD,
  SCRUB_CURSOR,
  SCRUB_PIXELS_PER_STEP,
} from "./design-editor-constants";
import { clamp } from "./design-editor-model";

type ScrubState = {
  hasScrubbed: boolean;
  lastValue: number;
  pointerId: number;
  previousBodyCursor: string;
  previousBodyOverscrollBehavior: string;
  previousBodyUserSelect: string;
  previousDocumentOverscrollBehavior: string;
  previousScrollContainerOverflowY: string;
  previousScrollContainerOverscrollBehavior: string;
  previousTargetCursor: string;
  scrollContainer: HTMLElement | null;
  startClientY: number;
  startValue: number;
};

export type DesignScrubInputProps = {
  ariaLabel?: string;
  className?: string;
  formatScrubValue?: (value: number) => string;
  inputMode?: "decimal";
  max?: string;
  min?: string;
  property: string;
  scrubMax?: number;
  scrubMin?: number;
  scrubStep?: number | null;
  scrubValue?: number | null;
  step?: string;
  title?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onValueChange: (value: string) => void;
};

export function DesignScrubInput({
  ariaLabel,
  className,
  formatScrubValue,
  inputMode,
  max,
  min,
  property,
  scrubMax,
  scrubMin,
  scrubStep,
  scrubValue,
  step,
  title,
  type,
  placeholder,
  value,
  onScrubActiveChange,
  onValueChange,
}: DesignScrubInputProps) {
  const scrubStateRef = useRef<ScrubState | null>(null);
  const suppressNextClickRef = useRef(false);

  const handlePointerDown = (event: PointerEvent<HTMLInputElement>) => {
    if (
      type !== "number" ||
      scrubStep == null ||
      scrubValue == null ||
      !Number.isFinite(scrubValue) ||
      event.button !== 0 ||
      !event.isPrimary ||
      event.pointerType === "touch"
    ) {
      return;
    }
    const { body, documentElement } = event.currentTarget.ownerDocument;
    const bodyStyle = body.style;
    const documentStyle = documentElement.style;
    const scrollContainer = event.currentTarget.closest<HTMLElement>(
      "[data-browser-sidebar-design-scroll-container]",
    );
    const previousTargetCursor = event.currentTarget.style.cursor;
    const previousBodyCursor = bodyStyle.cursor;
    const previousBodyOverscrollBehavior = bodyStyle.overscrollBehavior;
    const previousDocumentOverscrollBehavior = documentStyle.overscrollBehavior;
    const previousScrollContainerOverflowY =
      scrollContainer?.style.overflowY ?? "";
    const previousScrollContainerOverscrollBehavior =
      scrollContainer?.style.overscrollBehavior ?? "";
    event.preventDefault();
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.currentTarget.dataset.scrubbing = "true";
    event.currentTarget.style.cursor = SCRUB_CURSOR;
    bodyStyle.cursor = SCRUB_CURSOR;
    bodyStyle.overscrollBehavior = "none";
    documentStyle.overscrollBehavior = "none";
    if (scrollContainer != null) {
      scrollContainer.style.overflowY = "hidden";
      scrollContainer.style.overscrollBehavior = "none";
    }
    scrubStateRef.current = {
      hasScrubbed: false,
      lastValue: scrubValue,
      pointerId: event.pointerId,
      previousBodyCursor,
      previousBodyOverscrollBehavior,
      previousBodyUserSelect: bodyStyle.userSelect,
      previousDocumentOverscrollBehavior,
      previousScrollContainerOverflowY,
      previousScrollContainerOverscrollBehavior,
      previousTargetCursor,
      scrollContainer,
      startClientY: event.clientY,
      startValue: scrubValue,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLInputElement>) => {
    const scrub = scrubStateRef.current;
    if (
      scrub == null ||
      scrub.pointerId !== event.pointerId ||
      scrubStep == null ||
      formatScrubValue == null
    ) {
      return;
    }
    const deltaY = scrub.startClientY - event.clientY;
    event.preventDefault();
    if (!scrub.hasScrubbed && Math.abs(deltaY) < SCRUB_ACTIVATION_THRESHOLD) {
      return;
    }
    if (!scrub.hasScrubbed) {
      const bodyStyle = event.currentTarget.ownerDocument.body.style;
      bodyStyle.cursor = SCRUB_CURSOR;
      bodyStyle.userSelect = "none";
      scrub.hasScrubbed = true;
      onScrubActiveChange?.(property, event.currentTarget);
    }
    const steps = Math.trunc(deltaY / SCRUB_PIXELS_PER_STEP);
    const nextValue = clamp(
      scrub.startValue + steps * scrubStep,
      scrubMin,
      scrubMax,
    );
    if (nextValue === scrub.lastValue) {
      event.preventDefault();
      return;
    }
    scrub.lastValue = nextValue;
    event.preventDefault();
    onValueChange(formatScrubValue(nextValue));
  };

  const endScrub = (element: HTMLElement | null) => {
    const scrub = scrubStateRef.current;
    if (scrub == null) return;
    if (element != null) {
      const bodyStyle = element.ownerDocument.body.style;
      const documentStyle = element.ownerDocument.documentElement.style;
      bodyStyle.cursor = scrub.previousBodyCursor;
      bodyStyle.overscrollBehavior = scrub.previousBodyOverscrollBehavior;
      bodyStyle.userSelect = scrub.previousBodyUserSelect;
      documentStyle.overscrollBehavior =
        scrub.previousDocumentOverscrollBehavior;
      element.style.cursor = scrub.previousTargetCursor;
      delete element.dataset.scrubbing;
    }
    if (scrub.scrollContainer != null) {
      scrub.scrollContainer.style.overflowY =
        scrub.previousScrollContainerOverflowY;
      scrub.scrollContainer.style.overscrollBehavior =
        scrub.previousScrollContainerOverscrollBehavior;
    }
    if (scrub.hasScrubbed) {
      suppressNextClickRef.current = true;
      onScrubActiveChange?.(null, element);
    }
    scrubStateRef.current = null;
  };

  const handlePointerUp = (event: PointerEvent<HTMLInputElement>) => {
    const scrub = scrubStateRef.current;
    if (scrub == null || scrub.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId) === true) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (scrub.hasScrubbed) event.preventDefault();
    endScrub(event.currentTarget);
  };

  const handleLostPointerCapture = (event: PointerEvent<HTMLInputElement>) => {
    endScrub(event.currentTarget);
  };

  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (
      type === "number" &&
      event.currentTarget.ownerDocument.activeElement === event.currentTarget
    ) {
      event.currentTarget.blur();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      event.preventDefault();
    }
  };

  return (
    <input
      aria-label={ariaLabel}
      className={clsx(
        className,
        "touch-none cursor-text hover:cursor-ns-resize active:cursor-ns-resize",
      )}
      inputMode={inputMode}
      max={max}
      min={min}
      step={step}
      title={title}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onClick={handleClick}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerCancel={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
    />
  );
}
