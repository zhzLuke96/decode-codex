// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zoom controller for the in-app browser sidebar: owns the transient zoom banner
// state, registers the zoom keyboard accelerators, and dispatches zoom commands
// to the managed webview.
import {
  type MutableRefObject,
  type RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useIntl } from "../vendor/react-intl";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";
import { vscodeApiF } from "../boundaries/vscode-api";
import {
  applyZoomCommand,
  isEventWithinElement,
  useKeyboardAccelerator,
} from "../boundaries/onboarding-commons-externals.facade";
import { BrowserSidebarZoomBanner } from "./browser-sidebar-zoom-banner";

const BANNER_AUTO_HIDE_MS = 2000;

type ZoomCommand =
  | { type: "step-zoom"; delta: number }
  | { type: "set-zoom-percent"; zoomPercent: number }
  | { type: "reset-zoom" };

type DispatchZoomCommandOptions = {
  showBanner?: boolean;
};

const ZOOM_IN_COMMAND: ZoomCommand = { type: "step-zoom", delta: 1 };
const ZOOM_OUT_COMMAND: ZoomCommand = { type: "step-zoom", delta: -1 };
const RESET_ZOOM_COMMAND: ZoomCommand = { type: "reset-zoom" };

export type BrowserSidebarZoomCommandDispatcher = (
  command: ZoomCommand,
  options?: DispatchZoomCommandOptions,
) => void;

export type BrowserSidebarZoomControllerProps = {
  browserTabId: string;
  conversationId: string;
  currentRenderedZoomPercent: number;
  dispatchZoomCommandRef: MutableRefObject<BrowserSidebarZoomCommandDispatcher | null>;
  rootRef: RefObject<HTMLElement | null>;
  toolbarOffset?: number;
  viewportScale: number;
};

function incrementAnimationKey(previous: number | null): number {
  return (previous ?? 0) + 1;
}

export function BrowserSidebarZoomController({
  browserTabId,
  conversationId,
  currentRenderedZoomPercent,
  dispatchZoomCommandRef,
  rootRef,
  toolbarOffset = 0,
  viewportScale,
}: BrowserSidebarZoomControllerProps): React.JSX.Element | null {
  const intl = useIntl();
  const prefersReducedMotion = useSystemPrefersReducedMotion();
  const pendingZoomPercentRef = useRef<number | null>(null);
  const bannerHideTimeoutRef = useRef<number | null>(null);
  const isPointerInsideRef = useRef(false);
  const shouldHideWhenPointerLeavesRef = useRef(false);
  const [visibleZoomPercent, setVisibleZoomPercent] = useState<number | null>(
    null,
  );
  const [zoomInAnimationKey, setZoomInAnimationKey] = useState<number | null>(
    null,
  );
  const [zoomOutAnimationKey, setZoomOutAnimationKey] = useState<number | null>(
    null,
  );

  const clearBannerHideTimeout = () => {
    const timeoutId = bannerHideTimeoutRef.current;
    if (timeoutId != null) {
      window.clearTimeout(timeoutId);
      bannerHideTimeoutRef.current = null;
    }
  };

  const hideBanner = () => {
    clearBannerHideTimeout();
    isPointerInsideRef.current = false;
    shouldHideWhenPointerLeavesRef.current = false;
    pendingZoomPercentRef.current = null;
    setVisibleZoomPercent(null);
  };

  const showBanner = (zoomPercent: number) => {
    clearBannerHideTimeout();
    shouldHideWhenPointerLeavesRef.current = false;
    pendingZoomPercentRef.current = zoomPercent;
    setVisibleZoomPercent(zoomPercent);
    bannerHideTimeoutRef.current = window.setTimeout(() => {
      bannerHideTimeoutRef.current = null;
      if (isPointerInsideRef.current) {
        shouldHideWhenPointerLeavesRef.current = true;
        return;
      }
      hideBanner();
    }, BANNER_AUTO_HIDE_MS);
  };

  const triggerZoomAnimation = (direction: number) => {
    if (prefersReducedMotion) return;
    if (direction > 0) {
      setZoomInAnimationKey(incrementAnimationKey);
      return;
    }
    setZoomOutAnimationKey(incrementAnimationKey);
  };

  const dispatchZoomCommand: BrowserSidebarZoomCommandDispatcher = (
    incomingCommand,
    options,
  ) => {
    const baseZoomPercent =
      pendingZoomPercentRef.current ?? currentRenderedZoomPercent;
    const { command, renderedZoomPercent } = applyZoomCommand({
      command: incomingCommand,
      currentRenderedZoomPercent: baseZoomPercent,
      viewportScale,
    });
    if (options?.showBanner === false) {
      hideBanner();
    } else {
      showBanner(renderedZoomPercent);
      if (renderedZoomPercent > baseZoomPercent) {
        triggerZoomAnimation(1);
      } else if (renderedZoomPercent < baseZoomPercent) {
        triggerZoomAnimation(-1);
      }
    }
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      conversationId,
      browserTabId,
      command,
    });
  };

  const handleZoomKeyboardCommand = (
    event: KeyboardEvent,
    command: ZoomCommand,
  ) => {
    if (isEventWithinElement(event, rootRef.current)) {
      event.preventDefault();
      event.stopPropagation();
      dispatchZoomCommand(command);
    }
  };

  useKeyboardAccelerator({
    accelerator: "CmdOrCtrl+Plus",
    enabled: true,
    onKeyDown: (event: KeyboardEvent) => {
      handleZoomKeyboardCommand(event, ZOOM_IN_COMMAND);
    },
  });
  useKeyboardAccelerator({
    accelerator: "CmdOrCtrl+Shift+=",
    enabled: true,
    onKeyDown: (event: KeyboardEvent) => {
      handleZoomKeyboardCommand(event, ZOOM_IN_COMMAND);
    },
  });
  useKeyboardAccelerator({
    accelerator: "CmdOrCtrl+-",
    enabled: true,
    onKeyDown: (event: KeyboardEvent) => {
      handleZoomKeyboardCommand(event, ZOOM_OUT_COMMAND);
    },
  });
  useKeyboardAccelerator({
    accelerator: "CmdOrCtrl+0",
    enabled: true,
    onKeyDown: (event: KeyboardEvent) => {
      handleZoomKeyboardCommand(event, RESET_ZOOM_COMMAND);
    },
  });

  useLayoutEffect(() => {
    dispatchZoomCommandRef.current = dispatchZoomCommand;
    return () => {
      if (dispatchZoomCommandRef.current === dispatchZoomCommand) {
        dispatchZoomCommandRef.current = null;
      }
    };
  }, [dispatchZoomCommand, dispatchZoomCommandRef]);

  useEffect(
    () => () => {
      clearBannerHideTimeout();
    },
    [clearBannerHideTimeout],
  );

  const resetLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.reset",
    defaultMessage: "Reset",
    description: "Button label for the reset action in the browser zoom banner",
  });
  const zoomInLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.zoomIn",
    defaultMessage: "Zoom in",
    description:
      "Accessible label for the zoom in action in the browser zoom banner",
  });
  const zoomOutLabel = intl.formatMessage({
    id: "browserSidebar.zoomBanner.zoomOut",
    defaultMessage: "Zoom out",
    description:
      "Accessible label for the zoom out action in the browser zoom banner",
  });
  const zoomPercentLabel =
    visibleZoomPercent == null
      ? null
      : intl.formatMessage(
          {
            id: "artifactTab.preview.zoomPercent",
            defaultMessage: "{zoomPercent}%",
            description: "Zoom percentage shown in artifact preview controls",
          },
          { zoomPercent: visibleZoomPercent },
        );

  if (zoomPercentLabel == null) return null;

  const isAtDefaultZoom = visibleZoomPercent === 100;

  return (
    <div
      className="pointer-events-none absolute right-0 z-40 px-3 pt-3"
      style={{ top: toolbarOffset }}
    >
      <BrowserSidebarZoomBanner
        className="max-w-full"
        isResetDisabled={isAtDefaultZoom}
        onZoomInAnimationEnd={() => setZoomInAnimationKey(null)}
        onZoomOutAnimationEnd={() => setZoomOutAnimationKey(null)}
        onReset={() => dispatchZoomCommand(RESET_ZOOM_COMMAND)}
        onZoomIn={() => dispatchZoomCommand(ZOOM_IN_COMMAND)}
        onZoomOut={() => dispatchZoomCommand(ZOOM_OUT_COMMAND)}
        onMouseEnter={() => {
          isPointerInsideRef.current = true;
        }}
        onMouseLeave={() => {
          isPointerInsideRef.current = false;
          if (shouldHideWhenPointerLeavesRef.current) {
            hideBanner();
          }
        }}
        resetLabel={resetLabel}
        zoomInLabel={zoomInLabel}
        zoomInAnimationKey={zoomInAnimationKey}
        zoomOutLabel={zoomOutLabel}
        zoomOutAnimationKey={zoomOutAnimationKey}
        zoomPercentLabel={zoomPercentLabel}
      />
    </div>
  );
}
