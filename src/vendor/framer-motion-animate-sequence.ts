// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Framer Motion npm re-export shim for the bundled scoped animate runtime.
import { animate } from "framer-motion";
import type {
  AnimationPlaybackControlsWithThen,
  MotionValue,
} from "framer-motion";

type NumericMotionValueAnimate = (
  value: number | MotionValue<number>,
  keyframes: number | Array<number | null>,
  options?: unknown,
) => AnimationPlaybackControlsWithThen;

export { animate, createScopedAnimate } from "framer-motion";

export const animateSequence = animate;
export const appShellStateMtState = animate as NumericMotionValueAnimate;

export type {
  AnimationPlaybackControls,
  AnimationPlaybackControlsWithThen,
  AnimationScope,
  AnimationSequence,
  SequenceOptions,
} from "framer-motion";
