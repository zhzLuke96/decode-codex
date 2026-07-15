// Restored from ref/webview/assets/avatar-mascot-button-DMfpOSwL.js
// avatar-mascot-button-D4p_kbfc chunk restored from the Codex webview bundle.
import type {
  CSSProperties,
  MouseEventHandler,
  PointerEventHandler,
  ReactNode,
} from "react";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { CodexAvatar } from "../utils/codex-avatar";
import { persistedAtom } from "../utils/persisted-atom";
import { useReducedMotion } from "../utils/use-reduced-motion";
import { once } from "../runtime/commonjs-interop";
type BadgeCorner = "top-start" | "top-end" | "bottom-start" | "bottom-end";
type AvatarState =
  | "failed"
  | "idle"
  | "jumping"
  | "review"
  | "running"
  | "running-left"
  | "running-right"
  | "waving"
  | "waiting";
type AvatarNotificationBadge = {
  ariaLabel: string;
  backgroundColor?: string;
  content: ReactNode;
  foregroundColor?: string;
  isGlassy?: boolean;
  isIconOnly?: boolean;
  onClick: () => void;
};
type AvatarResizeHandle = {
  ariaLabel: string;
  onLostPointerCapture?: PointerEventHandler<HTMLButtonElement>;
  onPointerCancel?: PointerEventHandler<HTMLButtonElement>;
  onPointerDown?: PointerEventHandler<HTMLButtonElement>;
  onPointerEnter?: PointerEventHandler<HTMLButtonElement>;
  onPointerLeave?: PointerEventHandler<HTMLButtonElement>;
  onPointerMove?: PointerEventHandler<HTMLButtonElement>;
  onPointerUp?: PointerEventHandler<HTMLButtonElement>;
};
export type AvatarMascotButtonProps = {
  ariaLabel?: string;
  assetRef?: string | null;
  className?: string;
  notificationBadge?: AvatarNotificationBadge | null;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
  resizeHandle?: AvatarResizeHandle | null;
  spritesheetUrl?: string;
  state?: AvatarState;
  style?: CSSProperties;
  transientState?: AvatarState | null;
};
export const initAvatarMascotButtonChunk = once(() => {});
const BADGE_DRAG_THRESHOLD_PX = 4;
const badgeCornerClassNames: Record<BadgeCorner, string> = {
  "top-start": "top-0 left-0",
  "top-end": "top-0 right-0",
  "bottom-start": "bottom-0 left-0",
  "bottom-end": "right-7 bottom-0",
};
const badgeCornerAtom = persistedAtom<BadgeCorner>(
  "avatar-mascot-notification-badge-corner",
  "top-end",
);
type BadgeDragState = {
  hasMoved: boolean;
  pointerId: number;
  startClientX: number;
  startClientY: number;
};
type BadgeDragOffset = {
  x: number;
  y: number;
};
export function AvatarMascotButton({
  ariaLabel,
  assetRef,
  className,
  notificationBadge,
  onContextMenu,
  resizeHandle,
  spritesheetUrl,
  state = "idle",
  style,
  transientState,
}: AvatarMascotButtonProps) {
  const [isPointerHovering, setIsPointerHovering] = React.useState(false);
  const avatarState = transientState ?? (isPointerHovering ? "jumping" : state);
  const hasNotificationBadge = notificationBadge != null;
  const hasInteractiveChildren = hasNotificationBadge || resizeHandle != null;
  const role =
    ariaLabel == null ? undefined : hasInteractiveChildren ? "group" : "img";
  const ariaHidden =
    ariaLabel == null && !hasInteractiveChildren ? true : undefined;
  return (
    <div
      className={clsx(
        "codex-avatar-button relative flex cursor-interaction items-center justify-center active:cursor-grabbing",
        className,
      )}
      data-avatar-mascot="true"
      data-testid="avatar-mascot-button"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
      onContextMenu={onContextMenu}
      onPointerEnter={() => setIsPointerHovering(true)}
      onPointerLeave={() => setIsPointerHovering(false)}
      style={style}
    >
      <CodexAvatar
        assetRef={assetRef}
        className="relative z-10"
        spritesheetUrl={spritesheetUrl}
        state={avatarState}
      />
      {notificationBadge == null ? null : (
        <AvatarNotificationBadgeButton notificationBadge={notificationBadge} />
      )}
      {resizeHandle == null ? null : (
        <div
          className="group absolute right-0 bottom-0 z-30 flex size-12 cursor-default items-end justify-end rounded-[8px] text-token-text-secondary hover:text-token-foreground"
          data-testid="avatar-overlay-resize-hover-target"
        >
          <button
            type="button"
            aria-label={resizeHandle.ariaLabel}
            className="no-drag codex-avatar-resize-handle flex size-5 cursor-nwse-resize touch-none items-center justify-center rounded-[6px] border border-token-border-default/80 bg-token-bg-primary p-1 opacity-0 shadow-lg shadow-black/20 backdrop-blur-sm group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none"
            data-testid="avatar-overlay-resize-handle"
            onLostPointerCapture={resizeHandle.onLostPointerCapture}
            onPointerCancel={resizeHandle.onPointerCancel}
            onPointerDown={resizeHandle.onPointerDown}
            onPointerEnter={resizeHandle.onPointerEnter}
            onPointerLeave={resizeHandle.onPointerLeave}
            onPointerMove={resizeHandle.onPointerMove}
            onPointerUp={resizeHandle.onPointerUp}
          >
            <svg
              viewBox="0 0 12 12"
              className="size-3"
              data-testid="avatar-overlay-resize-icon"
            >
              <path
                d="M1.75 5V1.75H5M7 10.25h3.25V7M2 2l8 8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
function AvatarNotificationBadgeButton({
  notificationBadge,
}: {
  notificationBadge: AvatarNotificationBadge;
}) {
  const [badgeCorner, setBadgeCorner] = useAtom(badgeCornerAtom);
  const [dragOffset, setDragOffset] = React.useState<BadgeDragOffset | null>(
    null,
  );
  const dragStateRef = React.useRef<BadgeDragState | null>(null);
  const suppressNextClickRef = React.useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const handlePointerDown: PointerEventHandler<HTMLButtonElement> = (event) => {
    if (event.button !== 0) return;
    event.stopPropagation();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragStateRef.current = {
      hasMoved: false,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
    };
  };
  const handlePointerMove: PointerEventHandler<HTMLButtonElement> = (event) => {
    const dragState = dragStateRef.current;
    if (dragState == null || dragState.pointerId !== event.pointerId) return;
    event.stopPropagation();
    const x = event.clientX - dragState.startClientX;
    const y = event.clientY - dragState.startClientY;
    if (
      !dragState.hasMoved &&
      Math.abs(x) < BADGE_DRAG_THRESHOLD_PX &&
      Math.abs(y) < BADGE_DRAG_THRESHOLD_PX
    ) {
      return;
    }
    event.preventDefault();
    dragState.hasMoved = true;
    setDragOffset({
      x,
      y,
    });
  };
  const handlePointerUp: PointerEventHandler<HTMLButtonElement> = (event) => {
    const dragState = dragStateRef.current;
    if (dragState == null || dragState.pointerId !== event.pointerId) return;
    event.stopPropagation();
    dragStateRef.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    }
    if (!dragState.hasMoved) return;
    const avatarBounds =
      event.currentTarget.parentElement?.getBoundingClientRect();
    if (avatarBounds != null) {
      setBadgeCorner(
        getBadgeCornerFromPointer({
          avatarBounds,
          clientX: event.clientX,
          clientY: event.clientY,
        }),
      );
    }
    setDragOffset(null);
    event.preventDefault();
    suppressNextClickRef.current = true;
    window.setTimeout(() => {
      suppressNextClickRef.current = false;
    }, 0);
  };
  const handlePointerCancel: PointerEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    const dragState = dragStateRef.current;
    if (dragState == null || dragState.pointerId !== event.pointerId) return;
    event.stopPropagation();
    dragStateRef.current = null;
    setDragOffset(null);
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    }
  };
  const handleLostPointerCapture: PointerEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    const dragState = dragStateRef.current;
    if (dragState == null || dragState.pointerId !== event.pointerId) return;
    dragStateRef.current = null;
    setDragOffset(null);
  };
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      event.preventDefault();
      return;
    }
    notificationBadge.onClick();
  };
  const glassyClassName =
    notificationBadge.isGlassy &&
    "!border-white/85 !bg-white/65 !text-[#4D4D4D] shadow-[0_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl hover:!bg-white/80 hover:!text-[#333333] forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:!bg-white/95 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none";
  const sizeClassName = notificationBadge.isIconOnly
    ? "size-7 p-0"
    : "min-h-7 min-w-7 px-2 py-1";
  const hiddenInitialState = {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 0.7,
    y: prefersReducedMotion ? 0 : 3,
  };
  const transition = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        damping: 20,
        mass: 0.7,
        stiffness: 420,
        type: "spring",
      };
  return (
    <motion.button
      type="button"
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      aria-label={notificationBadge.ariaLabel}
      className={clsx(
        "no-drag absolute z-40 flex cursor-grab touch-none select-none items-center justify-center rounded-full border border-token-border/60 text-xs leading-none font-medium shadow-sm active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
        badgeCornerClassNames[badgeCorner],
        glassyClassName,
        sizeClassName,
      )}
      data-testid="avatar-overlay-notification-badge"
      initial={hiddenInitialState}
      onClick={handleClick}
      onLostPointerCapture={handleLostPointerCapture}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        backgroundColor: notificationBadge.backgroundColor,
        color: notificationBadge.foregroundColor,
        translate:
          dragOffset == null
            ? undefined
            : `${dragOffset.x}px ${dragOffset.y}px`,
      }}
      transition={transition}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.06,
            }
      }
      whileTap={
        prefersReducedMotion
          ? undefined
          : {
              scale: 0.94,
            }
      }
    >
      {notificationBadge.content}
    </motion.button>
  );
}
function getBadgeCornerFromPointer({
  avatarBounds,
  clientX,
  clientY,
}: {
  avatarBounds: DOMRect;
  clientX: number;
  clientY: number;
}): BadgeCorner {
  const verticalCorner =
    clientY < avatarBounds.top + avatarBounds.height / 2 ? "top" : "bottom";
  const horizontalCorner =
    clientX < avatarBounds.left + avatarBounds.width / 2 ? "start" : "end";
  return `${verticalCorner}-${horizontalCorner}`;
}
