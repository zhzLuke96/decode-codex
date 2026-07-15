// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derived state controlling whether the floating (overlay) left panel is
// revealed. Tracks the device-pixel-snapped pointer x position relative to the
// screen edge and the left-panel width, coordinating with the sidebar peek and
// trigger-hover signals to open or dismiss the overlay sidebar.
import {
  appAtomScope,
  appStoreScope,
  createScopedComputedAtom,
  createScopedSignal,
  devicePixelRatioSignal,
  leftPanelWidthSignal,
  pointerPositionSignals,
  roundToDevicePixels,
  sidebarPeekActiveSignal,
  sidebarPeekHoverSignal,
  sidebarTriggerHoveredSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import { sidebarAnimatingSignal, sidebarOpenSignal } from "./app-shell-state";

const REVEAL_ZONE_MAX_PX = 12;
const LEFT_PANEL_REVEAL_INSET = 0;

const pointerEdgeXAtom = createScopedComputedAtom(
  appAtomScope,
  ({ get }: { get: <T>(source: unknown) => T }) => {
    const pointerX = get<number | null>(pointerPositionSignals.px$);
    return pointerX == null
      ? null
      : roundToDevicePixels(pointerX, get<number>(devicePixelRatioSignal) ?? 1);
  },
);

const pointerWithinRevealZoneAtom = createScopedComputedAtom(
  appAtomScope,
  ({ get }: { get: <T>(source: unknown) => T }) => {
    const pointerX = get<number | null>(pointerEdgeXAtom);
    return pointerX != null && pointerX >= 0 && pointerX <= REVEAL_ZONE_MAX_PX;
  },
);

const pointerWithinLeftPanelAtom = createScopedComputedAtom(
  appAtomScope,
  ({ get }: { get: <T>(source: unknown) => T }) => {
    const pointerX = get<number | null>(pointerEdgeXAtom);
    const leftPanelWidth =
      get<number>(leftPanelWidthSignal) - LEFT_PANEL_REVEAL_INSET;
    return pointerX != null && pointerX >= 0 && pointerX <= leftPanelWidth;
  },
);

interface FloatingPanelRevealStore {
  get<T>(source: unknown): T;
  set(source: unknown, value: unknown): void;
  watch(
    callback: (context: { get: <T>(source: unknown) => T }) => void,
  ): () => void;
}

type SetFloatingPanelVisible = (
  value: boolean | ((current: boolean) => boolean),
) => void;

export const floatingLeftPanelVisibleAtom = createScopedSignal(
  appStoreScope,
  false,
  {
    onMount: (
      set: SetFloatingPanelVisible,
      store: FloatingPanelRevealStore,
    ) => {
      let armed = false;
      let lastPointerX: number | undefined;
      let lastPointerY: number | undefined;
      set(false);
      const unsubscribe = store.watch(({ get }) => {
        if (get<boolean>(sidebarOpenSignal)) {
          armed = false;
          lastPointerX = undefined;
          lastPointerY = undefined;
          set(false);
          return;
        }
        if (get<boolean>(sidebarAnimatingSignal)) {
          set(false);
          return;
        }
        const pointerX = get<number | null>(pointerPositionSignals.px$);
        const pointerY = get<number | null>(pointerPositionSignals.py$);
        const pointerWithinRevealZone = get<boolean>(
          pointerWithinRevealZoneAtom,
        );
        const pointerWithinLeftPanel = get<boolean>(pointerWithinLeftPanelAtom);
        const peekActive = get<boolean>(sidebarPeekActiveSignal);
        const peekHover = get<boolean>(sidebarPeekHoverSignal);
        if (peekActive) {
          if (peekHover) armed = true;
          const pointerMoved =
            lastPointerX !== undefined &&
            lastPointerY !== undefined &&
            (pointerX !== lastPointerX || pointerY !== lastPointerY);
          if (lastPointerX === undefined) {
            lastPointerX = pointerX ?? undefined;
            lastPointerY = pointerY ?? undefined;
          }
          if (
            (pointerMoved || (armed && !peekHover)) &&
            !pointerWithinRevealZone &&
            !peekHover
          ) {
            armed = false;
            lastPointerX = undefined;
            lastPointerY = undefined;
            store.set(sidebarPeekActiveSignal, false);
          }
          set(false);
          return;
        }
        armed = false;
        lastPointerX = undefined;
        lastPointerY = undefined;
        const triggerHovered = get<boolean>(sidebarTriggerHoveredSignal);
        set((current) => {
          const next = current
            ? pointerWithinLeftPanel || triggerHovered
            : pointerWithinRevealZone || triggerHovered;
          return current === next ? current : next;
        });
      });
      return () => {
        set(false);
        unsubscribe();
      };
    },
  },
);
