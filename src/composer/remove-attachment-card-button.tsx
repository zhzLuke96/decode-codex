// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Remove button used by composer attachment cards.

import type { MouseEvent, PointerEvent } from "react";

import { XIcon } from "../icons/x-icon";
import { classNames } from "../utils/class-names";

export interface RemoveAttachmentCardButtonProps {
  ariaLabel?: string;
  className?: string;
  onRemove: () => void;
}

export function RemoveAttachmentCardButton({
  ariaLabel,
  className = "top-1 right-1",
  onRemove,
}: RemoveAttachmentCardButtonProps) {
  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove();
  };
  return (
    <button
      type="button"
      className={classNames(
        "absolute flex size-4 cursor-interaction items-center justify-center rounded-full bg-token-foreground text-token-dropdown-background shadow-sm",
        className,
      )}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <XIcon className="icon-xxs" />
    </button>
  );
}

export function initRemoveAttachmentCardButtonChunk(): void {}
