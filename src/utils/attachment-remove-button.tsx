// Restored from ref/webview/assets/attachment-remove-button-DSovq5XM.js
// attachment-remove-button-DSovq5XM chunk restored from the Codex webview bundle.
import clsx from "clsx";
import { XIcon } from "../icons/x-icon";
type AttachmentRemoveButtonProps = {
  ariaLabel: string;
  className?: string;
  onRemove: () => void;
};
export function AttachmentRemoveButton({
  ariaLabel,
  className = "top-1 right-1",
  onRemove,
}: AttachmentRemoveButtonProps) {
  const buttonClassName = clsx(
    "absolute flex size-4 cursor-interaction items-center justify-center rounded-full bg-token-foreground text-token-dropdown-background shadow-sm",
    className,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove();
  };
  return (
    <button
      type="button"
      className={buttonClassName}
      onPointerDown={stopRemoveButtonEvent}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <XIcon className="icon-xxs" />
    </button>
  );
}
function stopRemoveButtonEvent(event: React.PointerEvent<HTMLButtonElement>) {
  event.preventDefault();
  event.stopPropagation();
}
