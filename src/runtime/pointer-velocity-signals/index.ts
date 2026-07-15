// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import {
  appStoreScope,
  createScopedSelector,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { PointerVelocitySample } from "../pointer-velocity-state";
import { pointerVelocitySignal, viewportSizeSignal } from "./state";

export { computePointerVelocity } from "./compute";
export { pointerVelocitySignal, viewportSizeSignal } from "./state";

export const pointerVelocityProjections = {
  px$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).x,
  ),
  py$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).y,
  ),
  hasKnownVelocity$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).hasKnownVelocity,
  ),
  vx$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).velocityX,
  ),
  vy$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).velocityY,
  ),
  speed$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) =>
      get<PointerVelocitySample>(pointerVelocitySignal).speed,
  ),
  bottomInset$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) => {
      const { height } = get<{ height: number }>(viewportSizeSignal);
      const y = get<PointerVelocitySample>(pointerVelocitySignal).y;
      return y == null ? null : height - y;
    },
  ),
  rightInset$: createScopedSelector(
    appStoreScope,
    ({ get }: { get: <T>(signal: unknown) => T }) => {
      const { width } = get<{ width: number }>(viewportSizeSignal);
      const x = get<PointerVelocitySample>(pointerVelocitySignal).x;
      return x == null ? null : width - x;
    },
  ),
};

export function initPointerVelocitySignalsChunk(): void {
  void pointerVelocitySignal;
  void viewportSizeSignal;
  void pointerVelocityProjections;
}
