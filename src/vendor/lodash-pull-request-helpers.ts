// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js
// npm-backed Lodash helper loaders used by the pull-request new-thread runtime.
import baseEach from "lodash/_baseEach";
import baseFlatten from "lodash/_baseFlatten";
import baseFor from "lodash/_baseFor";
import baseOrderBy from "lodash/_baseOrderBy";
import baseRest from "lodash/_baseRest";
import defineProperty from "lodash/_defineProperty";
import isIterateeCall from "lodash/_isIterateeCall";
import overRest from "lodash/_overRest";
import setToString from "lodash/_setToString";
import orderBy from "lodash/orderBy";

export type LodashRuntimeHelper = (...args: any[]) => any;
export type LodashRuntimeHelperLoader<
  THelper extends LodashRuntimeHelper = LodashRuntimeHelper,
> = () => THelper;

function createLodashHelperLoader<THelper extends LodashRuntimeHelper>(
  helper: THelper,
): LodashRuntimeHelperLoader<THelper> {
  return () => helper;
}

export const loadLodashBaseEach = createLodashHelperLoader(baseEach);
export const loadLodashBaseFlatten = createLodashHelperLoader(baseFlatten);
export const loadLodashBaseFor = createLodashHelperLoader(baseFor);
export const loadLodashBaseOrderBy = createLodashHelperLoader(baseOrderBy);
export const loadLodashBaseRest = createLodashHelperLoader(baseRest);
export const loadLodashDefineProperty =
  createLodashHelperLoader(defineProperty);
export const loadLodashIsIterateeCall =
  createLodashHelperLoader(isIterateeCall);
export const loadLodashOrderBy = createLodashHelperLoader(orderBy);
export const loadLodashOverRest = createLodashHelperLoader(overRest);
export const loadLodashSetToString = createLodashHelperLoader(setToString);
