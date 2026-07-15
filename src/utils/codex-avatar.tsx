// Restored from ref/webview/assets/codex-avatar-BvRO-FvR.js
// Updated with exports from ref/webview/assets/codex-avatar-Bz6TO2Qk.js.
// codex-avatar-BvRO-FvR chunk restored from the Codex webview bundle.
import clsx from "clsx";
import React from "react";
import { useReducedMotion } from "./use-reduced-motion";
type AvatarFrame = {
  columnIndex: number;
  frameDurationMs: number;
  rowIndex: number;
};
type AvatarAnimation = {
  frames: AvatarFrame[];
  loopStartIndex: number | null;
};
const spriteUrls = {
  bsod: "" + new URL("bsod-spritesheet-v4-BRrRVy1T.webp", import.meta.url).href,
  codex:
    "" + new URL("codex-spritesheet-v4-Bl6P89d_.webp", import.meta.url).href,
  dewey:
    "" + new URL("dewey-spritesheet-v4-gAYk_M9g.webp", import.meta.url).href,
  fireball:
    "" + new URL("fireball-spritesheet-v4-BtU8R9Qp.webp", import.meta.url).href,
  hoots:
    "" + new URL("hoots-spritesheet-v4-BYSNdvho.webp", import.meta.url).href,
  "null-signal":
    "" +
    new URL("null-signal-spritesheet-v4-CCoTR-8t.webp", import.meta.url).href,
  rocky:
    "" + new URL("rocky-spritesheet-v4-3RlTi26B.webp", import.meta.url).href,
  seedy:
    "" + new URL("seedy-spritesheet-v4-CdlE_fn9.webp", import.meta.url).href,
  stacky:
    "" + new URL("stacky-spritesheet-v4-CaUJd4fY.webp", import.meta.url).href,
} as const;
const idleFrames: AvatarFrame[] = [
  {
    rowIndex: 0,
    columnIndex: 0,
    frameDurationMs: 280,
  },
  {
    rowIndex: 0,
    columnIndex: 1,
    frameDurationMs: 110,
  },
  {
    rowIndex: 0,
    columnIndex: 2,
    frameDurationMs: 110,
  },
  {
    rowIndex: 0,
    columnIndex: 3,
    frameDurationMs: 140,
  },
  {
    rowIndex: 0,
    columnIndex: 4,
    frameDurationMs: 140,
  },
  {
    rowIndex: 0,
    columnIndex: 5,
    frameDurationMs: 320,
  },
];
const slowIdleFrames = idleFrames.map((frame) => ({
  ...frame,
  frameDurationMs: frame.frameDurationMs * 6,
}));
const animationFrames = {
  failed: createAvatarRowFrames(5, 8, 140, 240),
  idle: idleFrames,
  jumping: createAvatarRowFrames(4, 5, 140, 280),
  review: createAvatarRowFrames(8, 6, 150, 280),
  running: createAvatarRowFrames(7, 6, 120, 220),
  "running-left": createAvatarRowFrames(2, 8, 120, 220),
  "running-right": createAvatarRowFrames(1, 8, 120, 220),
  waving: createAvatarRowFrames(3, 4, 140, 280),
  waiting: createAvatarRowFrames(6, 6, 150, 260),
} as const;
type AvatarAssetRef = keyof typeof spriteUrls;
type AvatarState = keyof typeof animationFrames;
type CodexAvatarProps = {
  assetRef?: string | null;
  className?: string;
  spritesheetUrl?: string;
  state?: AvatarState;
};
export function initCodexAvatarChunk(): void {}
export function CodexAvatar({
  assetRef,
  className,
  spritesheetUrl,
  state = "idle",
}: CodexAvatarProps) {
  const avatarRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const resolvedAssetRef = resolveAvatarAssetRef(assetRef);
  useAvatarSpriteAnimation({
    avatarRef,
    prefersReducedMotion,
    state,
  });
  return (
    <div
      ref={avatarRef}
      className={clsx("codex-avatar-root", className)}
      data-avatar-asset-ref={resolvedAssetRef}
      data-avatar-state={state}
      style={{
        backgroundImage: `url(${spritesheetUrl ?? spriteUrls[resolvedAssetRef]})`,
      }}
      aria-hidden="true"
      data-testid="codex-avatar"
    />
  );
}
function useAvatarSpriteAnimation({
  avatarRef,
  isAnimationEnabled = true,
  prefersReducedMotion,
  state = "idle",
}: {
  avatarRef: React.RefObject<HTMLDivElement | null>;
  isAnimationEnabled?: boolean;
  prefersReducedMotion: boolean | null;
  state?: AvatarState;
}) {
  React.useEffect(() => {
    const avatar = avatarRef.current;
    if (avatar == null) return undefined;
    const animation = getAvatarAnimation(
      state,
      prefersReducedMotion || !isAnimationEnabled,
    );
    const { frames } = animation;
    let frameIndex = 0;
    let timeoutId: number | null = null;
    avatar.style.backgroundPosition = getFrameBackgroundPosition(
      frames[frameIndex],
    );
    if (frames.length === 1) return undefined;
    const scheduleNextFrame = () => {
      timeoutId = window.setTimeout(() => {
        const nextFrameIndex = frameIndex + 1;
        if (nextFrameIndex >= frames.length) {
          if (animation.loopStartIndex != null) {
            frameIndex = animation.loopStartIndex;
            avatar.style.backgroundPosition = getFrameBackgroundPosition(
              frames[frameIndex],
            );
            scheduleNextFrame();
            return;
          }
          timeoutId = null;
          return;
        }
        frameIndex = nextFrameIndex;
        avatar.style.backgroundPosition = getFrameBackgroundPosition(
          frames[frameIndex],
        );
        scheduleNextFrame();
      }, frames[frameIndex].frameDurationMs);
    };
    scheduleNextFrame();
    return () => {
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, [avatarRef, isAnimationEnabled, prefersReducedMotion, state]);
}
function getAvatarAnimation(
  state: AvatarState,
  shouldReduceMotion: boolean,
): AvatarAnimation {
  const stateFrames = animationFrames[state];
  if (shouldReduceMotion) {
    return {
      frames: [stateFrames[0]],
      loopStartIndex: null,
    };
  }
  if (state === "idle") {
    return {
      frames: slowIdleFrames,
      loopStartIndex: 0,
    };
  }
  const actionFrames = [...stateFrames, ...stateFrames, ...stateFrames];
  return {
    frames: [...actionFrames, ...slowIdleFrames],
    loopStartIndex: actionFrames.length,
  };
}
function createAvatarRowFrames(
  rowIndex: number,
  frameCount: number,
  frameDurationMs: number,
  finalFrameDurationMs: number,
): AvatarFrame[] {
  return Array.from(
    {
      length: frameCount,
    },
    (_, columnIndex) => ({
      columnIndex,
      frameDurationMs:
        columnIndex === frameCount - 1 ? finalFrameDurationMs : frameDurationMs,
      rowIndex,
    }),
  );
}
function getFrameBackgroundPosition(frame: AvatarFrame) {
  return `${(frame.columnIndex / 7) * 100}% ${(frame.rowIndex / 8) * 100}%`;
}
function resolveAvatarAssetRef(assetRef: string | null | undefined) {
  return isAvatarAssetRef(assetRef) ? assetRef : "codex";
}
function isAvatarAssetRef(
  assetRef: string | null | undefined,
): assetRef is AvatarAssetRef {
  return (
    assetRef != null &&
    Object.prototype.hasOwnProperty.call(spriteUrls, assetRef)
  );
}
