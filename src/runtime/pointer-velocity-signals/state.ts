// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import {
  appStoreScope,
  createScopedAtom,
} from "../../boundaries/onboarding-commons-externals.facade";
import { EMPTY_POINTER_VELOCITY_SAMPLE } from "../pointer-velocity-state";

export const pointerVelocitySignal = createScopedAtom(
  appStoreScope,
  EMPTY_POINTER_VELOCITY_SAMPLE,
);

export const viewportSizeSignal = createScopedAtom(appStoreScope, {
  width: window.innerWidth,
  height: window.innerHeight,
});
