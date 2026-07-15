// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Mascot width persistence and CSS custom-property helpers for the avatar overlay.
import { useAtom } from "jotai";
import { persistedAtom } from "../../utils/persisted-atom";
import type {
  AvatarMascotWidthState,
  AvatarMascotWidthStyle,
  AvatarOverlayPillVisibilityMode,
} from "./types";

export const AVATAR_OVERLAY_MASCOT_ASPECT_RATIO = 192 / 208;
export const AVATAR_OVERLAY_WIDTH_CSS_VARIABLE = "--codex-avatar-width";
export const AVATAR_OVERLAY_MIN_MASCOT_WIDTH_PX = 80;
export const AVATAR_OVERLAY_MAX_MASCOT_WIDTH_PX = 224;
export const AVATAR_OVERLAY_DEFAULT_MASCOT_WIDTH_PX = 112;

const avatarOverlayMascotWidthAtom = persistedAtom<number | null>(
  "avatar-overlay-mascot-width-px",
  null,
);

export function getAvatarOverlayPillVisibilityMode(
  isPetHidden: boolean,
  isVoiceOrbVisible: boolean,
): AvatarOverlayPillVisibilityMode {
  return !isPetHidden && !isVoiceOrbVisible
    ? "pet"
    : isVoiceOrbVisible
      ? "voice-orb"
      : "hidden";
}

export function useAvatarOverlayMascotWidth(): AvatarMascotWidthState {
  const [storedMascotWidthPx, setStoredMascotWidthPx] = useAtom(
    avatarOverlayMascotWidthAtom,
  );
  const mascotWidthPx =
    storedMascotWidthPx == null
      ? null
      : clampAvatarOverlayMascotWidth(storedMascotWidthPx);

  return {
    mascotWidthPx,
    setMascotWidthPx(widthPx) {
      setStoredMascotWidthPx(clampAvatarOverlayMascotWidth(widthPx));
    },
  };
}

export function createAvatarOverlayMascotWidthStyle(
  widthPx: number | null | undefined,
): AvatarMascotWidthStyle | undefined {
  if (widthPx == null) return undefined;
  return {
    [AVATAR_OVERLAY_WIDTH_CSS_VARIABLE]: `${clampAvatarOverlayMascotWidth(
      widthPx,
    )}px`,
  };
}

export function clampAvatarOverlayMascotWidth(widthPx: unknown): number {
  return Number.isFinite(widthPx)
    ? Math.round(
        Math.min(
          AVATAR_OVERLAY_MAX_MASCOT_WIDTH_PX,
          Math.max(AVATAR_OVERLAY_MIN_MASCOT_WIDTH_PX, Number(widthPx)),
        ),
      )
    : AVATAR_OVERLAY_DEFAULT_MASCOT_WIDTH_PX;
}

export function initAvatarOverlayMascotWidthChunk(): void {}
