// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Dismiss button shown on the avatar overlay pill.
import { Button } from "../../ui/button";
import type { AvatarOverlayDismissButtonProps } from "./types";

export function AvatarOverlayPillDismissButton({
  ariaLabel,
  onClick,
}: AvatarOverlayDismissButtonProps) {
  return (
    <Button
      aria-label={ariaLabel}
      className="size-5 !rounded-full !border-white/85 !bg-white/65 !text-[#4D4D4D] shadow-[0_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-100 ease-out focus-visible:ring-2 focus-visible:ring-token-focus-border active:scale-95 enabled:hover:!bg-white/80 enabled:hover:!text-[#333333] motion-reduce:transition-none motion-reduce:active:scale-100 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:!bg-white/95 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none"
      color="ghost"
      size="icon"
      onClick={onClick}
    >
      <svg
        aria-hidden={true}
        className="size-3"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M3 3 9 9M9 3 3 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    </Button>
  );
}

export function initAvatarOverlayPillDismissButtonChunk(): void {}
