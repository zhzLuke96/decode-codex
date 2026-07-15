// Restored from ref/webview/assets/lodash-osfEN9vD.js
// Semantic facade for the bundled lodash aggregate helper chunk.
import { unionI as baseClone } from "./lodash-union";
export { clone as lodashClone } from "./lodash-clone";
export {
  unionN as lodashIsUndefined,
  unionR as lodashValues,
  unionT as lodashUnion,
} from "./lodash-union";
export {
  zipObjectA as lodashRange,
  zipObjectC as lodashMax,
  zipObjectD as lodashForEach,
  zipObjectF as lodashForOwn,
  zipObjectG as lodashNow,
  zipObjectH as lodashDefaults,
  zipObjectI as lodashSize,
  zipObjectL as lodashMapValues,
  zipObjectM as lodashLast,
  zipObjectN as lodashUniqueId,
  zipObjectO as lodashPick,
  zipObjectP as lodashFind,
  zipObjectR as lodashOrderBy,
  zipObjectS as lodashMaxBy,
  zipObjectT as lodashZipObject,
  zipObjectU as lodashHas,
} from "./lodash-zip-object";
export function lodashCloneDeep<T>(value: T): T {
  return baseClone(value, 5) as T;
}
export function initLodashOsfChunk(): void {}
