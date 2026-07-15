// Restored from ref/webview/assets/isEqual-DoHfXEc2.js
// Shared types for the split lodash deep-equality compatibility modules.
export type SeenPairs = WeakMap<object, WeakMap<object, boolean>>;

export type EqualityCustomizer = (
  leftValue: unknown,
  rightValue: unknown,
  keyOrIndex?: PropertyKey,
  leftParent?: unknown,
  rightParent?: unknown,
  stack?: SeenPairs,
) => boolean | undefined;

export type IsEqualFunction = {
  (leftValue: unknown, rightValue: unknown): boolean;
  default: IsEqualFunction;
};
