// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js.
import type { MouseEvent, SVGProps } from "react";
import { defineMessages } from "../../vendor/react-intl";
import type { PinMenuItem, ThreadPinButtonSlots } from "./types";
type ThreadPinButtonProps = {
  ariaLabel: string;
  isPinned: boolean;
  onPin(): void;
  onUnpin(): void;
};
type PinButtonSlotsOptions = ThreadPinButtonProps & {
  hasUnreadTurn: boolean;
};
const PinOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={16}
    viewBox="0 0 16 16"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="m8.69891 2.27345c.61298-.91267 1.85279-1.0459 2.67379-.40625l.1582.13867.003.00196 2.4433 2.41504.002.00195c.4266.42674.5579.99703.499 1.50586-.0582.50163-.3073 1.00104-.7187 1.31836l-.0069.00586-.0078.00586-2.415 1.7246c-.1659.11864-.2814.29628-.3223.4961l-.5293 2.59084-.0029.0166-.0039.0156c-.1932.7147-.70508 1.2981-1.36526 1.5254-.68313.2349-1.44732.0609-2.04883-.585l-1.69336-1.6679-2.99316 2.9941c-.20505.2047-.53727.2049-.74219 0-.2047-.2049-.20464-.5372 0-.7422l2.98731-2.9883-1.59571-1.57125c-.58829-.57126-.78753-1.34848-.59179-2.04199.19649-.69522.77365-1.25029 1.60644-1.41309l2.48047-.57226c.19499-.04518.367-.16098.48145-.3252zm2.02639.4209c-.371-.28905-.90826-.20853-1.15822.16894l-.00684.01075-1.70215 2.44238c-.26325.37786-.65778.64527-1.10644.74902l-2.48047.57227-.01074.00195-.01074.00293c-.46996.08744-.72571.36997-.81055.66992-.07571.26809-.02825.59512.20312.88379l.11133.1211.00293.0039 4.03809 3.9756.00976.0098.00977.0107c.34353.3766.68604.4105.95117.3193.29254-.101.57406-.3851.68848-.7959l.52539-2.57028c.09401-.45959.35861-.86689.74021-1.13965l2.4024-1.71679c.1553-.12183.2834-.34601.3134-.6045.0292-.25251-.0393-.48226-.1962-.64062l-2.4415-2.41211z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const PinFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={16}
    viewBox="0 0 16 16"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.69891 2.27336c.61298-.91267 1.85279-1.04591 2.67379-.40625l.1582.13867.003.00195 2.4433 2.41504.002.00195c.4266.42675.5579.99704.499 1.50586-.0582.50163-.3073 1.00104-.7187 1.31836l-.0069.00586-.0078.00586-2.415 1.72461c-.1659.11864-.2814.29628-.3223.49609l-.5293 2.59084-.0029.0166-.0039.0156c-.1932.7147-.70508 1.2981-1.36526 1.5254-.68313.2349-1.44732.0609-2.04883-.585l-1.69336-1.6679-2.99316 2.9941c-.20505.2047-.53727.2049-.74219 0-.2047-.2049-.20464-.5372 0-.7422l2.98731-2.9883-1.59571-1.57125c-.58829-.57126-.78754-1.34847-.59179-2.04199.19649-.69522.77364-1.25029 1.60644-1.41308l2.48047-.57227c.19499-.04517.367-.16097.48145-.3252z"
      fill="currentColor"
    />
  </svg>
);
export const ThreadPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.8636 3.26029C13.9444 1.74708 16.1254 1.56658 17.4403 2.88151L21.1185 6.55974C22.4335 7.87467 22.2529 10.0556 20.7397 11.1364L16.4786 14.1801C16.1638 14.405 16 14.7306 16 15V17.5C16 18.907 15.0409 19.9513 13.976 20.4105C12.9046 20.8724 11.4792 20.8468 10.4568 19.8244L8.02332 17.3909L3.70711 21.7071C3.31658 22.0977 2.68342 22.0977 2.29289 21.7071C1.90237 21.3166 1.90237 20.6835 2.29289 20.2929L6.60911 15.9767L4.17567 13.5433C3.1532 12.5208 3.12762 11.0955 3.58957 10.024C4.04871 8.95911 5.09306 8.00003 6.5 8.00003H9C9.26948 8.00003 9.59505 7.83624 9.81994 7.52139L12.8636 3.26029Z"
      fill="currentColor"
    />
  </svg>
);

export function initThreadPinIconChunk(): void {}

export function initThreadPinControlsChunk(): void {}

export function ThreadPinButton({
  ariaLabel,
  isPinned,
  onPin,
  onUnpin,
}: ThreadPinButtonProps) {
  const Icon = isPinned ? PinFilledIcon : PinOutlineIcon;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isPinned) onUnpin();
    else onPin();
  };
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-5 w-5 items-center justify-center leading-none text-token-foreground/50 hover:text-token-foreground"
      onClick={handleClick}
    >
      <Icon className="icon-2xs block shrink-0" />
    </button>
  );
}
const threadPinMessages = defineMessages({
  pin: {
    id: "sidebarElectron.pinThread",
    defaultMessage: "Pin chat",
    description: "Action label to pin a thread in the sidebar",
  },
  unpin: {
    id: "sidebarElectron.unpinThread",
    defaultMessage: "Unpin chat",
    description: "Action label to unpin a thread from the sidebar",
  },
});
export const pinThreadMessage = threadPinMessages.pin;
export const unpinThreadMessage = threadPinMessages.unpin;
export function createPinThreadMenuItem({
  isPinned,
  onPinnedChange,
}: {
  isPinned: boolean;
  onPinnedChange(nextPinned: boolean): void;
}): PinMenuItem {
  return {
    id: isPinned ? "unpin-thread" : "pin-thread",
    message: isPinned ? unpinThreadMessage : pinThreadMessage,
    onSelect: () => {
      onPinnedChange(!isPinned);
    },
  };
}
export function getThreadPinButtonSlots({
  ariaLabel,
  hasUnreadTurn,
  isPinned,
  onPin,
  onUnpin,
}: PinButtonSlotsOptions): ThreadPinButtonSlots {
  if (hasUnreadTurn) {
    return {
      rest: null,
      hover: <span aria-hidden={true} className="block h-5 w-5" />,
    };
  }
  const button = (
    <ThreadPinButton
      ariaLabel={ariaLabel}
      isPinned={isPinned}
      onPin={onPin}
      onUnpin={onUnpin}
    />
  );
  return {
    rest: isPinned ? button : null,
    hover: button,
  };
}
