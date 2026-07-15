// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Motion values, animation helpers, and reduced-motion signal facade.
import {
  animate as animateSignalValue,
  motion,
  motionValue as createMotionSignal,
  useMotionValueEvent,
} from "framer-motion";
import { shouldReduceMotionSignal as reducedMotionPreferenceSignal } from "./reduced-motion-preference";
import {
  createScopedSignal as createSignal,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";

export {
  animateSignalValue,
  createMotionSignal,
  createSignal,
  motion,
  reducedMotionPreferenceSignal,
  useMotionValueEvent,
};

export function initMotionRuntime(): void {}

export function initReducedMotionPreference(): void {
  void reducedMotionPreferenceSignal;
}

export function initMotionSignalRuntime(): void {
  initAppScopeSignalRuntime();
  initMotionRuntime();
  initReducedMotionPreference();
}
