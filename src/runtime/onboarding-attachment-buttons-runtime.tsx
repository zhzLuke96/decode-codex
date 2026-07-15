// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Attachment action buttons shared by onboarding attachment renderers.
import clsx from "clsx";
import { CloseIcon } from "../app-shell/thread-app-shell-chrome/icons";

export interface RemoveAppshotAttachmentButtonProps {
  ariaLabel: string;
  className?: string;
  onRemove: () => void;
}

export function RemoveAppshotAttachmentButton({
  ariaLabel,
  className,
  onRemove,
}: RemoveAppshotAttachmentButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "absolute flex size-4 cursor-interaction items-center justify-center rounded-full bg-token-foreground text-token-dropdown-background shadow-sm",
        className,
      )}
      aria-label={ariaLabel}
      onPointerDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onRemove();
      }}
    >
      <CloseIcon className="icon-xxs" />
    </button>
  );
}
