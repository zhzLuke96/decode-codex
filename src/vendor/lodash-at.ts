// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211-6533k2dw.js
// Lodash-style path selection helpers shared by conversation and pull request chunks.
import {
  createArrayPush,
  createBaseAt,
  createDefineProperty,
  createEq,
  createIdentity,
  createIsArguments,
  createIsArray,
  createIsArrayLike,
  createIsIndex,
  createIsObject,
  createSymbolConstructor,
} from "./lodash-runtime-helpers";

type RestTransform = (values: unknown[]) => unknown;
type VariadicFunction = (this: unknown, ...args: unknown[]) => unknown;

const isIndex = createIsIndex();
const isArrayLike = createIsArrayLike();
const isArguments = createIsArguments();
const defineProperty = createDefineProperty();
const baseAt = createBaseAt();
const nativeSymbol = createSymbolConstructor();
const arrayPush = createArrayPush();
const isObject = createIsObject();
const isArray = createIsArray();
const eq = createEq();
const identity = createIdentity();
const spreadableSymbol = nativeSymbol
  ? nativeSymbol.isConcatSpreadable
  : undefined;

function isFlattenable(value: unknown): boolean {
  return (
    isArray(value) ||
    isArguments(value) ||
    !!(
      spreadableSymbol &&
      value &&
      (value as Record<PropertyKey, unknown>)[spreadableSymbol]
    )
  );
}

function baseFlatten(
  array: ArrayLike<unknown>,
  depth: number,
  predicate: (value: unknown) => boolean = isFlattenable,
  isStrict = false,
  result: unknown[] = [],
): unknown[] {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(
          value as ArrayLike<unknown>,
          depth - 1,
          predicate,
          isStrict,
          result,
        );
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

function applyWithArity(
  func: VariadicFunction,
  thisArg: unknown,
  args: unknown[],
): unknown {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
    default:
      return func.apply(thisArg, args);
  }
}

function overRest(
  func: VariadicFunction,
  start = Math.max(func.length - 1, 0),
  transform: RestTransform,
): VariadicFunction {
  return function overRestWrapper(this: unknown, ...args: unknown[]) {
    const restLength = Math.max(args.length - start, 0);
    const restValues = Array(restLength);
    for (let restIndex = 0; restIndex < restLength; restIndex += 1) {
      restValues[restIndex] = args[start + restIndex];
    }
    const leadingArgs = Array(start + 1);
    for (let index = 0; index < start; index += 1)
      leadingArgs[index] = args[index];
    leadingArgs[start] = transform(restValues);
    return applyWithArity(func, this, leadingArgs);
  };
}

function constant(value: unknown): () => unknown {
  return function constantValue() {
    return value;
  };
}

const baseSetToString =
  defineProperty == null
    ? identity
    : function baseSetToString(func: VariadicFunction, stringValue: string) {
        return defineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(stringValue),
          writable: true,
        });
      };

function shortOut<T extends (...args: any[]) => any>(func: T): T {
  const hotCount = 800;
  const hotSpan = 16;
  let count = 0;
  let lastCalled = 0;
  return function shortOutWrapper(this: unknown, ...args: Parameters<T>) {
    const stamp = Date.now();
    const remaining = hotSpan - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      count += 1;
      if (count >= hotCount) return args[0];
    } else {
      count = 0;
    }
    return func.apply(this, args);
  } as T;
}

const setToString = shortOut(baseSetToString);

function baseRest(func: VariadicFunction, start?: number): VariadicFunction {
  return setToString(
    overRest(func, start, identity as RestTransform),
    `${func}`,
  ) as VariadicFunction;
}

function isIterateeCall(
  value: unknown,
  index: unknown,
  object: unknown,
): boolean {
  if (!isObject(object)) return false;
  const indexType = typeof index;
  const isValidIndex =
    indexType === "number"
      ? isArrayLike(object) && isIndex(index, object.length)
      : indexType === "string" && index in Object(object);
  return isValidIndex
    ? eq((object as Record<PropertyKey, unknown>)[index as PropertyKey], value)
    : false;
}

const at = baseRest(function atWithGuard(object: unknown, paths: unknown[]) {
  if (object == null) return [];
  let normalizedPaths = paths;
  const pathCount = normalizedPaths.length;
  if (
    pathCount > 1 &&
    isIterateeCall(object, normalizedPaths[0], normalizedPaths[1])
  ) {
    normalizedPaths = [];
  } else if (
    pathCount > 2 &&
    isIterateeCall(normalizedPaths[0], normalizedPaths[1], normalizedPaths[2])
  ) {
    normalizedPaths = [normalizedPaths[0]];
  }
  return baseAt(object, baseFlatten(normalizedPaths, 1), []);
});

export { at, baseFlatten, baseRest, isIterateeCall, overRest, setToString };
