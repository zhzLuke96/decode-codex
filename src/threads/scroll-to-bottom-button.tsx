// Restored from ref/webview/assets/scroll-to-bottom-buton-Bc3ZL53H.js
// Also matches ScrollToBottomButton exported by ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-x4e4q7BN.js
// Thread scroll-to-bottom control used by the local conversation composer footer.
import clsx from "clsx";
import { ArrowUpIcon } from "../icons/arrow-up-icon";
type ScrollToBottomButtonProps = {
  className?: string;
  label: string;
  onClick: () => void;
  show: boolean;
  showWorkingDots?: boolean;
};
const scrollToBottomButtonClassNames = {
  waveDot: "_waveDot_1y69c_22",
};
export function ScrollToBottomButton({
  className,
  label,
  onClick,
  show,
  showWorkingDots = false,
}: ScrollToBottomButtonProps) {
  return (
    <button
      className={clsx(
        "cursor-interaction absolute z-30 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full border border-token-border-default bg-token-main-surface-primary bg-clip-padding text-token-text-secondary transition-opacity duration-150 ease-in-out end-1/2 print:hidden",
        show ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      aria-hidden={!show}
      aria-label={label}
      tabIndex={show ? undefined : -1}
      type="button"
      onClick={show ? onClick : undefined}
    >
      {showWorkingDots ? (
        <span
          aria-hidden={true}
          className="flex items-center justify-center gap-1"
        >
          <span
            className={clsx(
              "h-1 w-1 rounded-full bg-token-text-primary/70",
              scrollToBottomButtonClassNames.waveDot,
            )}
          />
          <span
            className={clsx(
              "h-1 w-1 rounded-full bg-token-text-primary/70",
              scrollToBottomButtonClassNames.waveDot,
            )}
          />
          <span
            className={clsx(
              "h-1 w-1 rounded-full bg-token-text-primary/70",
              scrollToBottomButtonClassNames.waveDot,
            )}
          />
        </span>
      ) : (
        <ArrowUpIcon className="icon rotate-180 text-token-text-primary" />
      )}
    </button>
  );
}

export function initScrollToBottomButtonChunk(): void {}

export default ScrollToBottomButton;
