// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hover and focus controls for overflowing generated image carousels.
import React from "react";
import { classNames } from "../../../utils/class-names";
import { useIntl } from "../../../vendor/react-intl";
import { ImagesIcon } from "../../../icons/images-icon";
import { Button } from "../../../ui/button";
import { ChevronDownIcon } from "../../../boundaries/onboarding-commons-externals.facade";
import { OVERLAY_PILL_CLASS_NAMES } from "./constants";

export type GalleryOverflowControlsProps = {
  overflowCount: number;
  canGoToPreviousImages: boolean;
  canGoToNextImages: boolean;
  onPreviousImages: () => void;
  onNextImages: () => void;
};

function blurOnPointerUp(event: React.PointerEvent<HTMLButtonElement>) {
  event.currentTarget.blur();
}

export function GalleryOverflowControls(props: GalleryOverflowControlsProps) {
  const {
    overflowCount,
    canGoToPreviousImages,
    canGoToNextImages,
    onPreviousImages,
    onNextImages,
  } = props;
  const intl = useIntl();
  const previousImagesLabel = intl.formatMessage({
    id: "codex.localConversation.generatedImageGallery.previousImages",
    defaultMessage: "Previous images",
    description: "Aria label for moving the generated image carousel backward",
  });
  const nextImagesLabel = intl.formatMessage({
    id: "codex.localConversation.generatedImageGallery.nextImages",
    defaultMessage: "Next images",
    description: "Aria label for moving the generated image carousel forward",
  });

  const overflowBadgeClassName = classNames(
    "pointer-events-none absolute right-2 bottom-2 inline-flex h-6 items-center gap-0.5 pr-2 pl-1.5 text-sm leading-none group-focus-within/generated-image-gallery-controls:opacity-0 group-hover/generated-image-gallery-controls:opacity-0",
    OVERLAY_PILL_CLASS_NAMES,
  );
  const overflowBadge = (
    <div className={overflowBadgeClassName}>
      <ImagesIcon className="size-4 shrink-0" />
      <span className="tabular-nums">{overflowCount}</span>
    </div>
  );

  const navButtonClassName = classNames(
    "size-6 !rounded-full !bg-black/45 !p-0 !text-white enabled:hover:!bg-black/60 disabled:!bg-black/45 disabled:!text-white/45 disabled:opacity-100",
    OVERLAY_PILL_CLASS_NAMES,
  );

  const navControls = (
    <div className="pointer-events-none absolute right-2 bottom-2 z-10 flex items-center gap-1 opacity-0 group-focus-within/generated-image-gallery-controls:pointer-events-auto group-focus-within/generated-image-gallery-controls:opacity-100 group-hover/generated-image-gallery-controls:pointer-events-auto group-hover/generated-image-gallery-controls:opacity-100">
      <Button
        color="secondary"
        size="icon"
        uniform
        className={navButtonClassName}
        aria-label={previousImagesLabel}
        disabled={!canGoToPreviousImages}
        onClick={onPreviousImages}
        onPointerUp={blurOnPointerUp}
      >
        <ChevronDownIcon className="size-4 rotate-90 [&_path]:[stroke-width:1.2px]" />
      </Button>
      <Button
        color="secondary"
        size="icon"
        uniform
        className={navButtonClassName}
        aria-label={nextImagesLabel}
        disabled={!canGoToNextImages}
        onClick={onNextImages}
        onPointerUp={blurOnPointerUp}
      >
        <ChevronDownIcon className="size-4 -rotate-90 [&_path]:[stroke-width:1.2px]" />
      </Button>
    </div>
  );

  return (
    <>
      {overflowBadge}
      {navControls}
    </>
  );
}
