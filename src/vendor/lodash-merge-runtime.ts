// Restored from ref/webview/assets/merge-jSBXKSH5.js
// npm-backed compatibility shim for the current Lodash merge runtime chunk.

import arrayLikeKeys from "lodash/_arrayLikeKeys";
import assignValue from "lodash/_assignValue";
import baseAssignValue from "lodash/_baseAssignValue";
import baseFor from "lodash/_baseFor";
import baseGetTag from "lodash/_baseGetTag";
import baseRest from "lodash/_baseRest";
import baseUnary from "lodash/_baseUnary";
import cloneArrayBuffer from "lodash/_cloneArrayBuffer";
import cloneBuffer from "lodash/_cloneBuffer";
import cloneTypedArray from "lodash/_cloneTypedArray";
import copyArray from "lodash/_copyArray";
import copyObject from "lodash/_copyObject";
import createAssigner from "lodash/_createAssigner";
import getNative from "lodash/_getNative";
import initCloneObject from "lodash/_initCloneObject";
import isIndex from "lodash/_isIndex";
import isIterateeCall from "lodash/_isIterateeCall";
import isPrototype from "lodash/_isPrototype";
import MapCache from "lodash/_MapCache";
import nodeUtil from "lodash/_nodeUtil";
import overArg from "lodash/_overArg";
import root from "lodash/_root";
import setToString from "lodash/_setToString";
import Stack from "lodash/_Stack";
import toSource from "lodash/_toSource";
import constant from "lodash/constant";
import eq from "lodash/eq";
import identity from "lodash/identity";
import isArguments from "lodash/isArguments";
import isArray from "lodash/isArray";
import isArrayLike from "lodash/isArrayLike";
import isArrayLikeObject from "lodash/isArrayLikeObject";
import isBuffer from "lodash/isBuffer";
import isFunction from "lodash/isFunction";
import isLength from "lodash/isLength";
import isObject from "lodash/isObject";
import isObjectLike from "lodash/isObjectLike";
import isTypedArray from "lodash/isTypedArray";
import keysIn from "lodash/keysIn";
import memoize from "lodash/memoize";

export { default as _mergeN, default as mergeT } from "lodash/merge";

type InitFunction = () => void;

const noopInit: InitFunction = () => {};

export const initLodashMergeRuntime: InitFunction = noopInit;
export const initLodashMergeChunk = initLodashMergeRuntime;
export const __mergeT = initLodashMergeRuntime;
export const initLodashTypedArrayRuntime: InitFunction = noopInit;
export const initLodashMemoizeCacheRuntime: InitFunction = noopInit;

export const mergeCt = noopInit;
export const mergeD = noopInit;
export const mergeDt = noopInit;
export const mergeE = noopInit;
export const mergeEt = noopInit;
export const mergeF = noopInit;
export const mergeFt = Symbol;
export const mergeIt = noopInit;
export const mergeK = noopInit;
export const mergeKt = noopInit;
export const mergeLt = noopInit;
export const mergeM = noopInit;
export const mergeN = noopInit;
export const mergePt = noopInit;
export const mergeR = noopInit;
export const mergeU = noopInit;
export const mergeV = noopInit;
export const mergeY = noopInit;
export const mergeZ = noopInit;
export const _mergeB = noopInit;
export const _mergeC = noopInit;
export const _mergeCt = noopInit;
export const _mergeDt = noopInit;
export const _mergeEt = noopInit;
export const _mergeF = noopInit;
export const _mergeG = noopInit;
export const _mergeIt = noopInit;
export const _mergeK = noopInit;
export const _mergeM = noopInit;
export const _mergeO = noopInit;
export const _mergeOt = noopInit;
export const _mergePt = noopInit;
export const _mergeQ = noopInit;
export const _mergeR = noopInit;
export const _mergeTt = noopInit;
export const _mergeU = noopInit;
export const _mergeV = noopInit;
export const _mergeW = noopInit;
export const _mergeX = noopInit;
export const _mergeZ = noopInit;
export const mergeBt = noopInit;
export const mergeGt = noopInit;
export const mergeJt = noopInit;
export const mergeUt = noopInit;
export const mergeVt = noopInit;
export const mergeXt = noopInit;

export {
  arrayLikeKeys as _mergeJ,
  assignValue as at,
  baseAssignValue as _mergeLt,
  baseFor as _mergeA,
  baseGetTag as mergeNt,
  baseRest as mergeDollar,
  baseRest as _mergeNt,
  baseUnary as mergeL,
  cloneArrayBuffer as _mergeD,
  cloneBuffer as _mergeH,
  cloneTypedArray as _mergeL,
  constant as mergeHt,
  copyArray as _t,
  copyObject as _mergeRt,
  createAssigner as mergeG,
  eq as _mergeSt,
  getNative as mergeYt,
  identity as mergeTt,
  initCloneObject as _mergeS,
  isArguments as mergeH,
  isArray as mergeAt,
  isArrayLike as mergeX,
  isArrayLikeObject as _mergeI,
  isBuffer as mergeB,
  isFunction as mergeWt,
  isIndex as _mergeFt,
  isIterateeCall as mergeJ,
  isLength as mergeQ,
  isObject as mergeOt,
  isObjectLike as mergeMt,
  isPrototype as mergeW,
  isTypedArray as mergeP,
  keysIn as mergeO,
  MapCache as mergeC,
  memoize as mergeS,
  nodeUtil as mergeI,
  overArg as mergeA,
  root as mergeRt,
  setToString as _mergeMt,
  Stack as mergeUnderscore,
  toSource as mergeSt,
};

export const _mergeP = Uint8Array;
export const _mergeT = Map;
export const _mergeY = Object.getPrototypeOf;
