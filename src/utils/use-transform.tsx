// Restored from ref/webview/assets/use-transform-Cjp4fIKs.js
// App-facing Framer Motion transform hooks and MotionValue aliases.
import {
  useTransform as useFramerMotionTransform,
  type MotionValue,
} from "framer-motion";

export {
  motionValue as createMotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

export type { MotionValue } from "framer-motion";

export function useCombineMotionValues<T extends string | number>(
  values: Array<MotionValue<number>>,
  combineValues: () => T,
): MotionValue<T> {
  return useFramerMotionTransform(values, combineValues);
}
