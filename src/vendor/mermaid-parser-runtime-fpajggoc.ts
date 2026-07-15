// Restored from ref/webview/assets/chunk-FPAJGGOC-Cy-1bcKF.js
// Flat boundary. Vendored also matches current ref asset ref/webview/assets/chunk-FPAJGGOC-Yd_bXKmT.js.
// Vendored Mermaid/Langium parser runtime restored from the Codex webview bundle.
import {
  copyCommonJsProperties as chunkI,
  exportGetters as chunkR,
  toEsModule as chunkS,
} from "../runtime/commonjs-interop";
import {
  isArrayLikeObjectB as _isArrayLikeObjectV,
  isArrayLikeObjectC as isArrayLikeObjectB,
  isArrayLikeObjectE as isArrayLikeObjectC,
  isArrayLikeObjectH as isArrayLikeObjectE,
  isArrayLikeObjectO as isArrayLikeObjectH,
  isArrayLikeObjectR as isArrayLikeObjectJ,
  isArrayLikeObjectS as isArrayLikeObjectK,
  isArrayLikeObjectU as isArrayLikeObjectO,
  isArrayLikeObjectV as isArrayLikeObjectR,
  isArrayLikeObjectUnderscore as isArrayLikeObjectS,
  isArrayLikeObjectJ as isArrayLikeObjectT,
  isArrayLikeObjectK as isArrayLikeObjectU,
  _isArrayLikeObjectT as isArrayLikeObjectUnderscore,
  _isArrayLikeObjectV as isArrayLikeObjectV,
  _isArrayLikeObjectW as isArrayLikeObjectW,
  isArrayLikeObjectX,
  isArrayLikeObjectZ,
} from "./lodash-array-like-object";
import {
  baseUniqI as _baseUniqO,
  _baseUniqN as _baseUniqS,
  baseUniqA,
  baseUniqC as baseUniqB,
  baseUniqE as baseUniqD,
  baseUniqM as baseUniqF,
  baseUniqN as baseUniqG,
  baseUniqT as baseUniqI,
  baseUniqUnderscore as baseUniqJ,
  _baseUniqC as baseUniqK,
  _baseUniqD as baseUniqL,
  baseUniqF as baseUniqM,
  baseUniqG as baseUniqN,
  baseUniqJ as baseUniqO,
  baseUniqK as baseUniqR,
  _baseUniqM as baseUniqS,
  _baseUniqO as baseUniqT,
  baseUniqP as baseUniqU,
  baseUniqU as baseUniqUnderscore,
  baseUniqV,
  baseUniqX,
} from "./lodash-base-uniq";
import {
  basePickByC,
  basePickByO as basePickByI,
  basePickByI as basePickByL,
  basePickByR as basePickByN,
  basePickByN as basePickByO,
  basePickByT as basePickByR,
  basePickByA as basePickByS,
  basePickByD as basePickByT,
  basePickByU,
} from "./lodash-base-pick-by";
import { isEmptyT } from "./lodash-is-empty-alt";
import { clone } from "./lodash-clone";
import {
  reduceT as reduceC,
  reduceL as reduceN,
  _reduceS as reduceT,
} from "./lodash-reduce";
import { isEmptyT as _isEmptyT } from "./lodash-is-empty";
import {
  flattenA,
  flattenT as flattenN,
  flattenR as flattenT,
} from "./lodash-flatten";
import {
  mainU as mainC,
  mainN as mainD,
  mainA as mainN,
  mainI as mainO,
  mainO as mainR,
  mainR as mainS,
  mainS as mainT,
  mainT as mainU,
} from "./mermaid-main";
function chunkFPAJGGOCHelper1(chunkFPAJGGOCParam1570) {
  return (
    typeof chunkFPAJGGOCParam1570 == "object" &&
    !!chunkFPAJGGOCParam1570 &&
    typeof chunkFPAJGGOCParam1570.$type == "string"
  );
}
function chunkFPAJGGOCHelper2(chunkFPAJGGOCParam1538) {
  return (
    typeof chunkFPAJGGOCParam1538 == "object" &&
    !!chunkFPAJGGOCParam1538 &&
    typeof chunkFPAJGGOCParam1538.$refText == "string"
  );
}
function chunkFPAJGGOCHelper3(chunkFPAJGGOCParam1075) {
  return (
    typeof chunkFPAJGGOCParam1075 == "object" &&
    !!chunkFPAJGGOCParam1075 &&
    typeof chunkFPAJGGOCParam1075.name == "string" &&
    typeof chunkFPAJGGOCParam1075.type == "string" &&
    typeof chunkFPAJGGOCParam1075.path == "string"
  );
}
function chunkFPAJGGOCHelper4(chunkFPAJGGOCParam1172) {
  return (
    typeof chunkFPAJGGOCParam1172 == "object" &&
    !!chunkFPAJGGOCParam1172 &&
    chunkFPAJGGOCHelper1(chunkFPAJGGOCParam1172.container) &&
    chunkFPAJGGOCHelper2(chunkFPAJGGOCParam1172.reference) &&
    typeof chunkFPAJGGOCParam1172.message == "string"
  );
}
var chunkFPAJGGOCValue1 = class {
  constructor() {
    this.subtypes = {};
    this.allSubtypes = {};
  }
  isInstance(chunkFPAJGGOCParam1725, chunkFPAJGGOCParam1726) {
    return (
      chunkFPAJGGOCHelper1(chunkFPAJGGOCParam1725) &&
      this.isSubtype(chunkFPAJGGOCParam1725.$type, chunkFPAJGGOCParam1726)
    );
  }
  isSubtype(chunkFPAJGGOCParam763, chunkFPAJGGOCParam764) {
    if (chunkFPAJGGOCParam763 === chunkFPAJGGOCParam764) return true;
    let chunkFPAJGGOCValue1172 = this.subtypes[chunkFPAJGGOCParam763];
    chunkFPAJGGOCValue1172 ||= this.subtypes[chunkFPAJGGOCParam763] = {};
    let chunkFPAJGGOCValue1173 = chunkFPAJGGOCValue1172[chunkFPAJGGOCParam764];
    if (chunkFPAJGGOCValue1173 !== undefined) return chunkFPAJGGOCValue1173;
    {
      let chunkFPAJGGOCValue1780 = this.computeIsSubtype(
        chunkFPAJGGOCParam763,
        chunkFPAJGGOCParam764,
      );
      return (
        (chunkFPAJGGOCValue1172[chunkFPAJGGOCParam764] =
          chunkFPAJGGOCValue1780),
        chunkFPAJGGOCValue1780
      );
    }
  }
  getAllSubTypes(chunkFPAJGGOCParam766) {
    let chunkFPAJGGOCValue1177 = this.allSubtypes[chunkFPAJGGOCParam766];
    if (chunkFPAJGGOCValue1177) return chunkFPAJGGOCValue1177;
    {
      let chunkFPAJGGOCValue1464 = this.getAllTypes(),
        chunkFPAJGGOCValue1465 = [];
      for (let chunkFPAJGGOCValue1851 of chunkFPAJGGOCValue1464)
        this.isSubtype(chunkFPAJGGOCValue1851, chunkFPAJGGOCParam766) &&
          chunkFPAJGGOCValue1465.push(chunkFPAJGGOCValue1851);
      return (
        (this.allSubtypes[chunkFPAJGGOCParam766] = chunkFPAJGGOCValue1465),
        chunkFPAJGGOCValue1465
      );
    }
  }
};
function chunkFPAJGGOCHelper5(chunkFPAJGGOCParam1584) {
  return (
    typeof chunkFPAJGGOCParam1584 == "object" &&
    !!chunkFPAJGGOCParam1584 &&
    Array.isArray(chunkFPAJGGOCParam1584.content)
  );
}
function chunkFPAJGGOCHelper6(chunkFPAJGGOCParam1534) {
  return (
    typeof chunkFPAJGGOCParam1534 == "object" &&
    !!chunkFPAJGGOCParam1534 &&
    typeof chunkFPAJGGOCParam1534.tokenType == "object"
  );
}
function chunkFPAJGGOCHelper7(chunkFPAJGGOCParam1762) {
  return (
    chunkFPAJGGOCHelper5(chunkFPAJGGOCParam1762) &&
    typeof chunkFPAJGGOCParam1762.fullText == "string"
  );
}
var chunkFPAJGGOCValue2 = class ChunkFPAJGGOCClass3 {
  constructor(chunkFPAJGGOCParam1741, chunkFPAJGGOCParam1742) {
    this.startFn = chunkFPAJGGOCParam1741;
    this.nextFn = chunkFPAJGGOCParam1742;
  }
  iterator() {
    let chunkFPAJGGOCValue1485 = {
      state: this.startFn(),
      next: () => this.nextFn(chunkFPAJGGOCValue1485.state),
      [Symbol.iterator]: () => chunkFPAJGGOCValue1485,
    };
    return chunkFPAJGGOCValue1485;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    let chunkFPAJGGOCValue1554 = this.iterator(),
      chunkFPAJGGOCValue1555 = 0,
      chunkFPAJGGOCValue1556 = chunkFPAJGGOCValue1554.next();
    for (; !chunkFPAJGGOCValue1556.done; ) {
      chunkFPAJGGOCValue1555++;
      chunkFPAJGGOCValue1556 = chunkFPAJGGOCValue1554.next();
    }
    return chunkFPAJGGOCValue1555;
  }
  toArray() {
    let chunkFPAJGGOCValue1430 = [],
      chunkFPAJGGOCValue1431 = this.iterator(),
      chunkFPAJGGOCValue1432;
    do {
      chunkFPAJGGOCValue1432 = chunkFPAJGGOCValue1431.next();
      chunkFPAJGGOCValue1432.value !== undefined &&
        chunkFPAJGGOCValue1430.push(chunkFPAJGGOCValue1432.value);
    } while (!chunkFPAJGGOCValue1432.done);
    return chunkFPAJGGOCValue1430;
  }
  toSet() {
    return new Set(this);
  }
  toMap(chunkFPAJGGOCParam1448, chunkFPAJGGOCParam1449) {
    let chunkFPAJGGOCValue1702 = this.map((item) => [
      chunkFPAJGGOCParam1448 ? chunkFPAJGGOCParam1448(item) : item,
      chunkFPAJGGOCParam1449 ? chunkFPAJGGOCParam1449(item) : item,
    ]);
    return new Map(chunkFPAJGGOCValue1702);
  }
  toString() {
    return this.join();
  }
  concat(chunkFPAJGGOCParam361) {
    return new ChunkFPAJGGOCClass3(
      () => ({
        first: this.startFn(),
        firstDone: false,
        iterator: chunkFPAJGGOCParam361[Symbol.iterator](),
      }),
      (chunkFPAJGGOCParam602) => {
        let chunkFPAJGGOCValue1035;
        if (!chunkFPAJGGOCParam602.firstDone) {
          do
            if (
              ((chunkFPAJGGOCValue1035 = this.nextFn(
                chunkFPAJGGOCParam602.first,
              )),
              !chunkFPAJGGOCValue1035.done)
            )
              return chunkFPAJGGOCValue1035;
          while (!chunkFPAJGGOCValue1035.done);
          chunkFPAJGGOCParam602.firstDone = true;
        }
        do
          if (
            ((chunkFPAJGGOCValue1035 = chunkFPAJGGOCParam602.iterator.next()),
            !chunkFPAJGGOCValue1035.done)
          )
            return chunkFPAJGGOCValue1035;
        while (!chunkFPAJGGOCValue1035.done);
        return chunkFPAJGGOCValue4;
      },
    );
  }
  join(chunkFPAJGGOCParam893 = ",") {
    let chunkFPAJGGOCValue1272 = this.iterator(),
      chunkFPAJGGOCValue1273 = "",
      chunkFPAJGGOCValue1274,
      chunkFPAJGGOCValue1275 = false;
    do {
      chunkFPAJGGOCValue1274 = chunkFPAJGGOCValue1272.next();
      chunkFPAJGGOCValue1274.done ||
        (chunkFPAJGGOCValue1275 &&
          (chunkFPAJGGOCValue1273 += chunkFPAJGGOCParam893),
        (chunkFPAJGGOCValue1273 += chunkFPAJGGOCHelper8(
          chunkFPAJGGOCValue1274.value,
        )));
      chunkFPAJGGOCValue1275 = true;
    } while (!chunkFPAJGGOCValue1274.done);
    return chunkFPAJGGOCValue1273;
  }
  indexOf(chunkFPAJGGOCParam908, chunkFPAJGGOCParam909 = 0) {
    let chunkFPAJGGOCValue1290 = this.iterator(),
      chunkFPAJGGOCValue1291 = 0,
      chunkFPAJGGOCValue1292 = chunkFPAJGGOCValue1290.next();
    for (; !chunkFPAJGGOCValue1292.done; ) {
      if (
        chunkFPAJGGOCValue1291 >= chunkFPAJGGOCParam909 &&
        chunkFPAJGGOCValue1292.value === chunkFPAJGGOCParam908
      )
        return chunkFPAJGGOCValue1291;
      chunkFPAJGGOCValue1292 = chunkFPAJGGOCValue1290.next();
      chunkFPAJGGOCValue1291++;
    }
    return -1;
  }
  every(chunkFPAJGGOCParam1110) {
    let chunkFPAJGGOCValue1451 = this.iterator(),
      chunkFPAJGGOCValue1452 = chunkFPAJGGOCValue1451.next();
    for (; !chunkFPAJGGOCValue1452.done; ) {
      if (!chunkFPAJGGOCParam1110(chunkFPAJGGOCValue1452.value)) return false;
      chunkFPAJGGOCValue1452 = chunkFPAJGGOCValue1451.next();
    }
    return true;
  }
  some(chunkFPAJGGOCParam1129) {
    let chunkFPAJGGOCValue1466 = this.iterator(),
      chunkFPAJGGOCValue1467 = chunkFPAJGGOCValue1466.next();
    for (; !chunkFPAJGGOCValue1467.done; ) {
      if (chunkFPAJGGOCParam1129(chunkFPAJGGOCValue1467.value)) return true;
      chunkFPAJGGOCValue1467 = chunkFPAJGGOCValue1466.next();
    }
    return false;
  }
  forEach(chunkFPAJGGOCParam1240) {
    let chunkFPAJGGOCValue1537 = this.iterator(),
      chunkFPAJGGOCValue1538 = 0,
      chunkFPAJGGOCValue1539 = chunkFPAJGGOCValue1537.next();
    for (; !chunkFPAJGGOCValue1539.done; ) {
      chunkFPAJGGOCParam1240(
        chunkFPAJGGOCValue1539.value,
        chunkFPAJGGOCValue1538,
      );
      chunkFPAJGGOCValue1539 = chunkFPAJGGOCValue1537.next();
      chunkFPAJGGOCValue1538++;
    }
  }
  map(chunkFPAJGGOCParam1139) {
    return new ChunkFPAJGGOCClass3(this.startFn, (chunkFPAJGGOCParam1359) => {
      let { done, value } = this.nextFn(chunkFPAJGGOCParam1359);
      return done
        ? chunkFPAJGGOCValue4
        : {
            done: false,
            value: chunkFPAJGGOCParam1139(value),
          };
    });
  }
  filter(chunkFPAJGGOCParam998) {
    return new ChunkFPAJGGOCClass3(this.startFn, (chunkFPAJGGOCParam1245) => {
      let chunkFPAJGGOCValue1543;
      do
        if (
          ((chunkFPAJGGOCValue1543 = this.nextFn(chunkFPAJGGOCParam1245)),
          !chunkFPAJGGOCValue1543.done &&
            chunkFPAJGGOCParam998(chunkFPAJGGOCValue1543.value))
        )
          return chunkFPAJGGOCValue1543;
      while (!chunkFPAJGGOCValue1543.done);
      return chunkFPAJGGOCValue4;
    });
  }
  nonNullable() {
    return this.filter((item) => item != null);
  }
  reduce(chunkFPAJGGOCParam999, chunkFPAJGGOCParam1000) {
    let chunkFPAJGGOCValue1356 = this.iterator(),
      chunkFPAJGGOCValue1357 = chunkFPAJGGOCParam1000,
      chunkFPAJGGOCValue1358 = chunkFPAJGGOCValue1356.next();
    for (; !chunkFPAJGGOCValue1358.done; ) {
      chunkFPAJGGOCValue1357 =
        chunkFPAJGGOCValue1357 === undefined
          ? chunkFPAJGGOCValue1358.value
          : chunkFPAJGGOCParam999(
              chunkFPAJGGOCValue1357,
              chunkFPAJGGOCValue1358.value,
            );
      chunkFPAJGGOCValue1358 = chunkFPAJGGOCValue1356.next();
    }
    return chunkFPAJGGOCValue1357;
  }
  reduceRight(chunkFPAJGGOCParam1612, chunkFPAJGGOCParam1613) {
    return this.recursiveReduce(
      this.iterator(),
      chunkFPAJGGOCParam1612,
      chunkFPAJGGOCParam1613,
    );
  }
  recursiveReduce(
    chunkFPAJGGOCParam1068,
    chunkFPAJGGOCParam1069,
    chunkFPAJGGOCParam1070,
  ) {
    let chunkFPAJGGOCValue1408 = chunkFPAJGGOCParam1068.next();
    if (chunkFPAJGGOCValue1408.done) return chunkFPAJGGOCParam1070;
    let chunkFPAJGGOCValue1409 = this.recursiveReduce(
      chunkFPAJGGOCParam1068,
      chunkFPAJGGOCParam1069,
      chunkFPAJGGOCParam1070,
    );
    return chunkFPAJGGOCValue1409 === undefined
      ? chunkFPAJGGOCValue1408.value
      : chunkFPAJGGOCParam1069(
          chunkFPAJGGOCValue1409,
          chunkFPAJGGOCValue1408.value,
        );
  }
  find(chunkFPAJGGOCParam1179) {
    let chunkFPAJGGOCValue1502 = this.iterator(),
      chunkFPAJGGOCValue1503 = chunkFPAJGGOCValue1502.next();
    for (; !chunkFPAJGGOCValue1503.done; ) {
      if (chunkFPAJGGOCParam1179(chunkFPAJGGOCValue1503.value))
        return chunkFPAJGGOCValue1503.value;
      chunkFPAJGGOCValue1503 = chunkFPAJGGOCValue1502.next();
    }
  }
  findIndex(chunkFPAJGGOCParam1001) {
    let chunkFPAJGGOCValue1359 = this.iterator(),
      chunkFPAJGGOCValue1360 = 0,
      chunkFPAJGGOCValue1361 = chunkFPAJGGOCValue1359.next();
    for (; !chunkFPAJGGOCValue1361.done; ) {
      if (chunkFPAJGGOCParam1001(chunkFPAJGGOCValue1361.value))
        return chunkFPAJGGOCValue1360;
      chunkFPAJGGOCValue1361 = chunkFPAJGGOCValue1359.next();
      chunkFPAJGGOCValue1360++;
    }
    return -1;
  }
  includes(chunkFPAJGGOCParam1082) {
    let chunkFPAJGGOCValue1422 = this.iterator(),
      chunkFPAJGGOCValue1423 = chunkFPAJGGOCValue1422.next();
    for (; !chunkFPAJGGOCValue1423.done; ) {
      if (chunkFPAJGGOCValue1423.value === chunkFPAJGGOCParam1082) return true;
      chunkFPAJGGOCValue1423 = chunkFPAJGGOCValue1422.next();
    }
    return false;
  }
  flatMap(chunkFPAJGGOCParam273) {
    return new ChunkFPAJGGOCClass3(
      () => ({
        this: this.startFn(),
      }),
      (chunkFPAJGGOCParam377) => {
        do {
          if (chunkFPAJGGOCParam377.iterator) {
            let chunkFPAJGGOCValue1600 = chunkFPAJGGOCParam377.iterator.next();
            if (chunkFPAJGGOCValue1600.done)
              chunkFPAJGGOCParam377.iterator = undefined;
            else return chunkFPAJGGOCValue1600;
          }
          let { done, value } = this.nextFn(chunkFPAJGGOCParam377.this);
          if (!done) {
            let chunkFPAJGGOCValue1517 = chunkFPAJGGOCParam273(value);
            if (chunkFPAJGGOCHelper9(chunkFPAJGGOCValue1517))
              chunkFPAJGGOCParam377.iterator =
                chunkFPAJGGOCValue1517[Symbol.iterator]();
            else
              return {
                done: false,
                value: chunkFPAJGGOCValue1517,
              };
          }
        } while (chunkFPAJGGOCParam377.iterator);
        return chunkFPAJGGOCValue4;
      },
    );
  }
  flat(chunkFPAJGGOCParam233) {
    if (
      (chunkFPAJGGOCParam233 === undefined && (chunkFPAJGGOCParam233 = 1),
      chunkFPAJGGOCParam233 <= 0)
    )
      return this;
    let chunkFPAJGGOCValue655 =
      chunkFPAJGGOCParam233 > 1 ? this.flat(chunkFPAJGGOCParam233 - 1) : this;
    return new ChunkFPAJGGOCClass3(
      () => ({
        this: chunkFPAJGGOCValue655.startFn(),
      }),
      (chunkFPAJGGOCParam421) => {
        do {
          if (chunkFPAJGGOCParam421.iterator) {
            let chunkFPAJGGOCValue1601 = chunkFPAJGGOCParam421.iterator.next();
            if (chunkFPAJGGOCValue1601.done)
              chunkFPAJGGOCParam421.iterator = undefined;
            else return chunkFPAJGGOCValue1601;
          }
          let { done, value } = chunkFPAJGGOCValue655.nextFn(
            chunkFPAJGGOCParam421.this,
          );
          if (!done)
            if (chunkFPAJGGOCHelper9(value))
              chunkFPAJGGOCParam421.iterator = value[Symbol.iterator]();
            else
              return {
                done: false,
                value,
              };
        } while (chunkFPAJGGOCParam421.iterator);
        return chunkFPAJGGOCValue4;
      },
    );
  }
  head() {
    let chunkFPAJGGOCValue1778 = this.iterator().next();
    if (!chunkFPAJGGOCValue1778.done) return chunkFPAJGGOCValue1778.value;
  }
  tail(chunkFPAJGGOCParam1035 = 1) {
    return new ChunkFPAJGGOCClass3(() => {
      let chunkFPAJGGOCValue1585 = this.startFn();
      for (
        let chunkFPAJGGOCValue1834 = 0;
        chunkFPAJGGOCValue1834 < chunkFPAJGGOCParam1035;
        chunkFPAJGGOCValue1834++
      )
        if (this.nextFn(chunkFPAJGGOCValue1585).done)
          return chunkFPAJGGOCValue1585;
      return chunkFPAJGGOCValue1585;
    }, this.nextFn);
  }
  limit(chunkFPAJGGOCParam1150) {
    return new ChunkFPAJGGOCClass3(
      () => ({
        size: 0,
        state: this.startFn(),
      }),
      (chunkFPAJGGOCParam1916) => (
        chunkFPAJGGOCParam1916.size++,
        chunkFPAJGGOCParam1916.size > chunkFPAJGGOCParam1150
          ? chunkFPAJGGOCValue4
          : this.nextFn(chunkFPAJGGOCParam1916.state)
      ),
    );
  }
  distinct(chunkFPAJGGOCParam468) {
    return new ChunkFPAJGGOCClass3(
      () => ({
        set: new Set(),
        internalState: this.startFn(),
      }),
      (chunkFPAJGGOCParam691) => {
        let chunkFPAJGGOCValue1095;
        do
          if (
            ((chunkFPAJGGOCValue1095 = this.nextFn(
              chunkFPAJGGOCParam691.internalState,
            )),
            !chunkFPAJGGOCValue1095.done)
          ) {
            let chunkFPAJGGOCValue1637 = chunkFPAJGGOCParam468
              ? chunkFPAJGGOCParam468(chunkFPAJGGOCValue1095.value)
              : chunkFPAJGGOCValue1095.value;
            if (!chunkFPAJGGOCParam691.set.has(chunkFPAJGGOCValue1637))
              return (
                chunkFPAJGGOCParam691.set.add(chunkFPAJGGOCValue1637),
                chunkFPAJGGOCValue1095
              );
          }
        while (!chunkFPAJGGOCValue1095.done);
        return chunkFPAJGGOCValue4;
      },
    );
  }
  exclude(chunkFPAJGGOCParam895, chunkFPAJGGOCParam896) {
    let chunkFPAJGGOCValue1277 = new Set();
    for (let chunkFPAJGGOCValue1825 of chunkFPAJGGOCParam895) {
      let chunkFPAJGGOCValue1852 = chunkFPAJGGOCParam896
        ? chunkFPAJGGOCParam896(chunkFPAJGGOCValue1825)
        : chunkFPAJGGOCValue1825;
      chunkFPAJGGOCValue1277.add(chunkFPAJGGOCValue1852);
    }
    return this.filter((item) => {
      let chunkFPAJGGOCValue1828 = chunkFPAJGGOCParam896
        ? chunkFPAJGGOCParam896(item)
        : item;
      return !chunkFPAJGGOCValue1277.has(chunkFPAJGGOCValue1828);
    });
  }
};
function chunkFPAJGGOCHelper8(chunkFPAJGGOCParam910) {
  return typeof chunkFPAJGGOCParam910 == "string"
    ? chunkFPAJGGOCParam910
    : chunkFPAJGGOCParam910 === undefined
      ? "undefined"
      : typeof chunkFPAJGGOCParam910.toString == "function"
        ? chunkFPAJGGOCParam910.toString()
        : Object.prototype.toString.call(chunkFPAJGGOCParam910);
}
function chunkFPAJGGOCHelper9(chunkFPAJGGOCParam1648) {
  return (
    !!chunkFPAJGGOCParam1648 &&
    typeof chunkFPAJGGOCParam1648[Symbol.iterator] == "function"
  );
}
var chunkFPAJGGOCValue3 = new chunkFPAJGGOCValue2(
    () => undefined,
    () => chunkFPAJGGOCValue4,
  ),
  chunkFPAJGGOCValue4 = Object.freeze({
    done: true,
    value: undefined,
  });
function chunkFPAJGGOCHelper10(...chunkFPAJGGOCParam73) {
  if (chunkFPAJGGOCParam73.length === 1) {
    let chunkFPAJGGOCValue949 = chunkFPAJGGOCParam73[0];
    if (chunkFPAJGGOCValue949 instanceof chunkFPAJGGOCValue2)
      return chunkFPAJGGOCValue949;
    if (chunkFPAJGGOCHelper9(chunkFPAJGGOCValue949))
      return new chunkFPAJGGOCValue2(
        () => chunkFPAJGGOCValue949[Symbol.iterator](),
        (chunkFPAJGGOCParam2294) => chunkFPAJGGOCParam2294.next(),
      );
    if (typeof chunkFPAJGGOCValue949.length == "number")
      return new chunkFPAJGGOCValue2(
        () => ({
          index: 0,
        }),
        (chunkFPAJGGOCParam1743) =>
          chunkFPAJGGOCParam1743.index < chunkFPAJGGOCValue949.length
            ? {
                done: false,
                value: chunkFPAJGGOCValue949[chunkFPAJGGOCParam1743.index++],
              }
            : chunkFPAJGGOCValue4,
      );
  }
  return chunkFPAJGGOCParam73.length > 1
    ? new chunkFPAJGGOCValue2(
        () => ({
          collIndex: 0,
          arrIndex: 0,
        }),
        (chunkFPAJGGOCParam172) => {
          do {
            if (chunkFPAJGGOCParam172.iterator) {
              let chunkFPAJGGOCValue1586 =
                chunkFPAJGGOCParam172.iterator.next();
              if (!chunkFPAJGGOCValue1586.done) return chunkFPAJGGOCValue1586;
              chunkFPAJGGOCParam172.iterator = undefined;
            }
            if (chunkFPAJGGOCParam172.array) {
              if (
                chunkFPAJGGOCParam172.arrIndex <
                chunkFPAJGGOCParam172.array.length
              )
                return {
                  done: false,
                  value:
                    chunkFPAJGGOCParam172.array[
                      chunkFPAJGGOCParam172.arrIndex++
                    ],
                };
              chunkFPAJGGOCParam172.array = undefined;
              chunkFPAJGGOCParam172.arrIndex = 0;
            }
            if (chunkFPAJGGOCParam172.collIndex < chunkFPAJGGOCParam73.length) {
              let chunkFPAJGGOCValue1317 =
                chunkFPAJGGOCParam73[chunkFPAJGGOCParam172.collIndex++];
              chunkFPAJGGOCHelper9(chunkFPAJGGOCValue1317)
                ? (chunkFPAJGGOCParam172.iterator =
                    chunkFPAJGGOCValue1317[Symbol.iterator]())
                : chunkFPAJGGOCValue1317 &&
                  typeof chunkFPAJGGOCValue1317.length == "number" &&
                  (chunkFPAJGGOCParam172.array = chunkFPAJGGOCValue1317);
            }
          } while (
            chunkFPAJGGOCParam172.iterator ||
            chunkFPAJGGOCParam172.array ||
            chunkFPAJGGOCParam172.collIndex < chunkFPAJGGOCParam73.length
          );
          return chunkFPAJGGOCValue4;
        },
      )
    : chunkFPAJGGOCValue3;
}
var chunkFPAJGGOCValue5 = class extends chunkFPAJGGOCValue2 {
    constructor(
      chunkFPAJGGOCParam265,
      chunkFPAJGGOCParam266,
      chunkFPAJGGOCParam267,
    ) {
      super(
        () => ({
          iterators: chunkFPAJGGOCParam267?.includeRoot
            ? [[chunkFPAJGGOCParam265][Symbol.iterator]()]
            : [chunkFPAJGGOCParam266(chunkFPAJGGOCParam265)[Symbol.iterator]()],
          pruned: false,
        }),
        (chunkFPAJGGOCParam562) => {
          for (
            chunkFPAJGGOCParam562.pruned &&=
              (chunkFPAJGGOCParam562.iterators.pop(), false);
            chunkFPAJGGOCParam562.iterators.length > 0;

          ) {
            let chunkFPAJGGOCValue1318 =
              chunkFPAJGGOCParam562.iterators[
                chunkFPAJGGOCParam562.iterators.length - 1
              ].next();
            if (chunkFPAJGGOCValue1318.done)
              chunkFPAJGGOCParam562.iterators.pop();
            else
              return (
                chunkFPAJGGOCParam562.iterators.push(
                  chunkFPAJGGOCParam266(chunkFPAJGGOCValue1318.value)[
                    Symbol.iterator
                  ](),
                ),
                chunkFPAJGGOCValue1318
              );
          }
          return chunkFPAJGGOCValue4;
        },
      );
    }
    iterator() {
      let chunkFPAJGGOCValue1200 = {
        state: this.startFn(),
        next: () => this.nextFn(chunkFPAJGGOCValue1200.state),
        prune: () => {
          chunkFPAJGGOCValue1200.state.pruned = true;
        },
        [Symbol.iterator]: () => chunkFPAJGGOCValue1200,
      };
      return chunkFPAJGGOCValue1200;
    }
  },
  chunkFPAJGGOCValue6;
(function (chunkFPAJGGOCParam528) {
  function chunkFPAJGGOCHelper390(chunkFPAJGGOCParam1870) {
    return chunkFPAJGGOCParam1870.reduce(
      (accumulator, current) => accumulator + current,
      0,
    );
  }
  chunkFPAJGGOCParam528.sum = chunkFPAJGGOCHelper390;
  function chunkFPAJGGOCHelper391(chunkFPAJGGOCParam1871) {
    return chunkFPAJGGOCParam1871.reduce(
      (accumulator, current) => accumulator * current,
      0,
    );
  }
  chunkFPAJGGOCParam528.product = chunkFPAJGGOCHelper391;
  function chunkFPAJGGOCHelper392(chunkFPAJGGOCParam1766) {
    return chunkFPAJGGOCParam1766.reduce((accumulator, current) =>
      Math.min(accumulator, current),
    );
  }
  chunkFPAJGGOCParam528.min = chunkFPAJGGOCHelper392;
  function chunkFPAJGGOCHelper393(chunkFPAJGGOCParam1767) {
    return chunkFPAJGGOCParam1767.reduce((accumulator, current) =>
      Math.max(accumulator, current),
    );
  }
  chunkFPAJGGOCParam528.max = chunkFPAJGGOCHelper393;
})((chunkFPAJGGOCValue6 ||= {}));
function chunkFPAJGGOCHelper11(chunkFPAJGGOCParam1522) {
  return new chunkFPAJGGOCValue5(
    chunkFPAJGGOCParam1522,
    (chunkFPAJGGOCParam2165) =>
      chunkFPAJGGOCHelper5(chunkFPAJGGOCParam2165)
        ? chunkFPAJGGOCParam2165.content
        : [],
    {
      includeRoot: true,
    },
  );
}
function chunkFPAJGGOCHelper12(chunkFPAJGGOCParam1423, chunkFPAJGGOCParam1424) {
  for (; chunkFPAJGGOCParam1423.container; )
    if (
      ((chunkFPAJGGOCParam1423 = chunkFPAJGGOCParam1423.container),
      chunkFPAJGGOCParam1423 === chunkFPAJGGOCParam1424)
    )
      return true;
  return false;
}
function chunkFPAJGGOCHelper13(chunkFPAJGGOCParam1130) {
  return {
    start: {
      character: chunkFPAJGGOCParam1130.startColumn - 1,
      line: chunkFPAJGGOCParam1130.startLine - 1,
    },
    end: {
      character: chunkFPAJGGOCParam1130.endColumn,
      line: chunkFPAJGGOCParam1130.endLine - 1,
    },
  };
}
function $e(chunkFPAJGGOCParam1262) {
  if (!chunkFPAJGGOCParam1262) return;
  let { offset, end, range } = chunkFPAJGGOCParam1262;
  return {
    range,
    offset,
    end,
    length: end - offset,
  };
}
var chunkFPAJGGOCValue7;
(function (chunkFPAJGGOCParam739) {
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.Before = 0)] = "Before";
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.After = 1)] = "After";
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.OverlapFront = 2)] =
    "OverlapFront";
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.OverlapBack = 3)] =
    "OverlapBack";
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.Inside = 4)] = "Inside";
  chunkFPAJGGOCParam739[(chunkFPAJGGOCParam739.Outside = 5)] = "Outside";
})((chunkFPAJGGOCValue7 ||= {}));
function chunkFPAJGGOCHelper14(chunkFPAJGGOCParam195, chunkFPAJGGOCParam196) {
  if (
    chunkFPAJGGOCParam195.end.line < chunkFPAJGGOCParam196.start.line ||
    (chunkFPAJGGOCParam195.end.line === chunkFPAJGGOCParam196.start.line &&
      chunkFPAJGGOCParam195.end.character <=
        chunkFPAJGGOCParam196.start.character)
  )
    return chunkFPAJGGOCValue7.Before;
  if (
    chunkFPAJGGOCParam195.start.line > chunkFPAJGGOCParam196.end.line ||
    (chunkFPAJGGOCParam195.start.line === chunkFPAJGGOCParam196.end.line &&
      chunkFPAJGGOCParam195.start.character >=
        chunkFPAJGGOCParam196.end.character)
  )
    return chunkFPAJGGOCValue7.After;
  let chunkFPAJGGOCValue599 =
      chunkFPAJGGOCParam195.start.line > chunkFPAJGGOCParam196.start.line ||
      (chunkFPAJGGOCParam195.start.line === chunkFPAJGGOCParam196.start.line &&
        chunkFPAJGGOCParam195.start.character >=
          chunkFPAJGGOCParam196.start.character),
    chunkFPAJGGOCValue600 =
      chunkFPAJGGOCParam195.end.line < chunkFPAJGGOCParam196.end.line ||
      (chunkFPAJGGOCParam195.end.line === chunkFPAJGGOCParam196.end.line &&
        chunkFPAJGGOCParam195.end.character <=
          chunkFPAJGGOCParam196.end.character);
  return chunkFPAJGGOCValue599 && chunkFPAJGGOCValue600
    ? chunkFPAJGGOCValue7.Inside
    : chunkFPAJGGOCValue599
      ? chunkFPAJGGOCValue7.OverlapBack
      : chunkFPAJGGOCValue600
        ? chunkFPAJGGOCValue7.OverlapFront
        : chunkFPAJGGOCValue7.Outside;
}
function chunkFPAJGGOCHelper15(chunkFPAJGGOCParam1975, chunkFPAJGGOCParam1976) {
  return (
    chunkFPAJGGOCHelper14(chunkFPAJGGOCParam1975, chunkFPAJGGOCParam1976) >
    chunkFPAJGGOCValue7.After
  );
}
var chunkFPAJGGOCValue8 = /^[\w\p{L}]$/u;
function chunkFPAJGGOCHelper16(chunkFPAJGGOCParam665, chunkFPAJGGOCParam666) {
  if (chunkFPAJGGOCParam665) {
    let chunkFPAJGGOCValue1166 = chunkFPAJGGOCHelper17(
      chunkFPAJGGOCParam665,
      true,
    );
    if (
      chunkFPAJGGOCValue1166 &&
      at(chunkFPAJGGOCValue1166, chunkFPAJGGOCParam666)
    )
      return chunkFPAJGGOCValue1166;
    if (chunkFPAJGGOCHelper7(chunkFPAJGGOCParam665)) {
      let chunkFPAJGGOCValue1410 = chunkFPAJGGOCParam665.content.findIndex(
        (item) => !item.hidden,
      );
      for (
        let chunkFPAJGGOCValue1685 = chunkFPAJGGOCValue1410 - 1;
        chunkFPAJGGOCValue1685 >= 0;
        chunkFPAJGGOCValue1685--
      ) {
        let chunkFPAJGGOCValue1812 =
          chunkFPAJGGOCParam665.content[chunkFPAJGGOCValue1685];
        if (at(chunkFPAJGGOCValue1812, chunkFPAJGGOCParam666))
          return chunkFPAJGGOCValue1812;
      }
    }
  }
}
function at(chunkFPAJGGOCParam1727, chunkFPAJGGOCParam1728) {
  return (
    chunkFPAJGGOCHelper6(chunkFPAJGGOCParam1727) &&
    chunkFPAJGGOCParam1728.includes(chunkFPAJGGOCParam1727.tokenType.name)
  );
}
function chunkFPAJGGOCHelper17(
  chunkFPAJGGOCParam813,
  chunkFPAJGGOCParam814 = true,
) {
  for (; chunkFPAJGGOCParam813.container; ) {
    let chunkFPAJGGOCValue1394 = chunkFPAJGGOCParam813.container,
      chunkFPAJGGOCValue1395 = chunkFPAJGGOCValue1394.content.indexOf(
        chunkFPAJGGOCParam813,
      );
    for (; chunkFPAJGGOCValue1395 > 0; ) {
      chunkFPAJGGOCValue1395--;
      let chunkFPAJGGOCValue1774 =
        chunkFPAJGGOCValue1394.content[chunkFPAJGGOCValue1395];
      if (chunkFPAJGGOCParam814 || !chunkFPAJGGOCValue1774.hidden)
        return chunkFPAJGGOCValue1774;
    }
    chunkFPAJGGOCParam813 = chunkFPAJGGOCValue1394;
  }
}
var chunkFPAJGGOCValue9 = class extends Error {
  constructor(chunkFPAJGGOCParam1430, chunkFPAJGGOCParam1431) {
    super(
      chunkFPAJGGOCParam1430
        ? `${chunkFPAJGGOCParam1431} at ${chunkFPAJGGOCParam1430.range.start.line}:${chunkFPAJGGOCParam1430.range.start.character}`
        : chunkFPAJGGOCParam1431,
    );
  }
};
function chunkFPAJGGOCHelper18(chunkFPAJGGOCParam1635) {
  throw Error("Error! The input value was not handled.");
}
function chunkFPAJGGOCHelper19(chunkFPAJGGOCParam2026) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2026,
    "AbstractElement",
  );
}
function chunkFPAJGGOCHelper20(chunkFPAJGGOCParam2027) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2027,
    "BooleanLiteral",
  );
}
function chunkFPAJGGOCHelper21(chunkFPAJGGOCParam2028) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2028, "Conjunction");
}
function chunkFPAJGGOCHelper22(chunkFPAJGGOCParam2029) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2029, "Disjunction");
}
function chunkFPAJGGOCHelper23(chunkFPAJGGOCParam2030) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2030,
    "InferredType",
  );
}
function chunkFPAJGGOCHelper24(chunkFPAJGGOCParam2031) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2031, "Interface");
}
function chunkFPAJGGOCHelper25(chunkFPAJGGOCParam2032) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2032, "Negation");
}
function chunkFPAJGGOCHelper26(chunkFPAJGGOCParam2033) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2033,
    "ParameterReference",
  );
}
function chunkFPAJGGOCHelper27(chunkFPAJGGOCParam2034) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2034, "ParserRule");
}
function chunkFPAJGGOCHelper28(chunkFPAJGGOCParam2035) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2035, "ReturnType");
}
function chunkFPAJGGOCHelper29(chunkFPAJGGOCParam2036) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2036, "SimpleType");
}
function chunkFPAJGGOCHelper30(chunkFPAJGGOCParam2037) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2037,
    "TerminalRule",
  );
}
function chunkFPAJGGOCHelper31(chunkFPAJGGOCParam2038) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2038, "Type");
}
function chunkFPAJGGOCHelper32(chunkFPAJGGOCParam2039) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2039, "Action");
}
function chunkFPAJGGOCHelper33(chunkFPAJGGOCParam2040) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2040,
    "Alternatives",
  );
}
function chunkFPAJGGOCHelper34(chunkFPAJGGOCParam2041) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2041, "Assignment");
}
function chunkFPAJGGOCHelper35(chunkFPAJGGOCParam2042) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2042,
    "CharacterRange",
  );
}
function chunkFPAJGGOCHelper36(chunkFPAJGGOCParam2043) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2043,
    "CrossReference",
  );
}
function chunkFPAJGGOCHelper37(chunkFPAJGGOCParam2044) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2044, "EndOfFile");
}
function chunkFPAJGGOCHelper38(chunkFPAJGGOCParam2045) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2045, "Group");
}
function chunkFPAJGGOCHelper39(chunkFPAJGGOCParam2046) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2046, "Keyword");
}
function chunkFPAJGGOCHelper40(chunkFPAJGGOCParam2047) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2047,
    "NegatedToken",
  );
}
function _n(chunkFPAJGGOCParam2048) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2048, "RegexToken");
}
function chunkFPAJGGOCHelper41(chunkFPAJGGOCParam2049) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2049, "RuleCall");
}
function chunkFPAJGGOCHelper42(chunkFPAJGGOCParam2050) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2050,
    "TerminalAlternatives",
  );
}
function chunkFPAJGGOCHelper43(chunkFPAJGGOCParam2051) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2051,
    "TerminalGroup",
  );
}
function chunkFPAJGGOCHelper44(chunkFPAJGGOCParam2052) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2052,
    "TerminalRuleCall",
  );
}
function chunkFPAJGGOCHelper45(chunkFPAJGGOCParam2053) {
  return chunkFPAJGGOCValue54.isInstance(
    chunkFPAJGGOCParam2053,
    "UnorderedGroup",
  );
}
function chunkFPAJGGOCHelper46(chunkFPAJGGOCParam2054) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2054, "UntilToken");
}
function chunkFPAJGGOCHelper47(chunkFPAJGGOCParam2055) {
  return chunkFPAJGGOCValue54.isInstance(chunkFPAJGGOCParam2055, "Wildcard");
}
var chunkFPAJGGOCValue53 = class extends chunkFPAJGGOCValue1 {
    getAllTypes() {
      return [
        "AbstractElement",
        "AbstractRule",
        "AbstractType",
        "Action",
        "Alternatives",
        "ArrayLiteral",
        "ArrayType",
        "Assignment",
        "BooleanLiteral",
        "CharacterRange",
        "Condition",
        "Conjunction",
        "CrossReference",
        "Disjunction",
        "EndOfFile",
        "Grammar",
        "GrammarImport",
        "Group",
        "InferredType",
        "Interface",
        "Keyword",
        "NamedArgument",
        "NegatedToken",
        "Negation",
        "NumberLiteral",
        "Parameter",
        "ParameterReference",
        "ParserRule",
        "ReferenceType",
        "RegexToken",
        "ReturnType",
        "RuleCall",
        "SimpleType",
        "StringLiteral",
        "TerminalAlternatives",
        "TerminalGroup",
        "TerminalRule",
        "TerminalRuleCall",
        "Type",
        "TypeAttribute",
        "TypeDefinition",
        "UnionType",
        "UnorderedGroup",
        "UntilToken",
        "ValueLiteral",
        "Wildcard",
      ];
    }
    computeIsSubtype(chunkFPAJGGOCParam77, chunkFPAJGGOCParam78) {
      switch (chunkFPAJGGOCParam77) {
        case "Action":
        case "Alternatives":
        case "Assignment":
        case "CharacterRange":
        case "CrossReference":
        case "EndOfFile":
        case "Group":
        case "Keyword":
        case "NegatedToken":
        case "RegexToken":
        case "RuleCall":
        case "TerminalAlternatives":
        case "TerminalGroup":
        case "TerminalRuleCall":
        case "UnorderedGroup":
        case "UntilToken":
        case "Wildcard":
          return this.isSubtype("AbstractElement", chunkFPAJGGOCParam78);
        case "ArrayLiteral":
        case "NumberLiteral":
        case "StringLiteral":
          return this.isSubtype("ValueLiteral", chunkFPAJGGOCParam78);
        case "ArrayType":
        case "ReferenceType":
        case "SimpleType":
        case "UnionType":
          return this.isSubtype("TypeDefinition", chunkFPAJGGOCParam78);
        case "BooleanLiteral":
          return (
            this.isSubtype("Condition", chunkFPAJGGOCParam78) ||
            this.isSubtype("ValueLiteral", chunkFPAJGGOCParam78)
          );
        case "Conjunction":
        case "Disjunction":
        case "Negation":
        case "ParameterReference":
          return this.isSubtype("Condition", chunkFPAJGGOCParam78);
        case "InferredType":
        case "Interface":
        case "Type":
          return this.isSubtype("AbstractType", chunkFPAJGGOCParam78);
        case "ParserRule":
          return (
            this.isSubtype("AbstractRule", chunkFPAJGGOCParam78) ||
            this.isSubtype("AbstractType", chunkFPAJGGOCParam78)
          );
        case "TerminalRule":
          return this.isSubtype("AbstractRule", chunkFPAJGGOCParam78);
        default:
          return false;
      }
    }
    getReferenceType(chunkFPAJGGOCParam171) {
      let chunkFPAJGGOCValue582 = `${chunkFPAJGGOCParam171.container.$type}:${chunkFPAJGGOCParam171.property}`;
      switch (chunkFPAJGGOCValue582) {
        case "Action:type":
        case "CrossReference:type":
        case "Interface:superTypes":
        case "ParserRule:returnType":
        case "SimpleType:typeRef":
          return "AbstractType";
        case "Grammar:hiddenTokens":
        case "ParserRule:hiddenTokens":
        case "RuleCall:rule":
          return "AbstractRule";
        case "Grammar:usedGrammars":
          return "Grammar";
        case "NamedArgument:parameter":
        case "ParameterReference:parameter":
          return "Parameter";
        case "TerminalRuleCall:rule":
          return "TerminalRule";
        default:
          throw Error(`${chunkFPAJGGOCValue582} is not a valid reference id.`);
      }
    }
    getTypeMetaData(chunkFPAJGGOCParam2) {
      switch (chunkFPAJGGOCParam2) {
        case "AbstractElement":
          return {
            name: "AbstractElement",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "ArrayLiteral":
          return {
            name: "ArrayLiteral",
            properties: [
              {
                name: "elements",
                defaultValue: [],
              },
            ],
          };
        case "ArrayType":
          return {
            name: "ArrayType",
            properties: [
              {
                name: "elementType",
              },
            ],
          };
        case "BooleanLiteral":
          return {
            name: "BooleanLiteral",
            properties: [
              {
                name: "true",
                defaultValue: false,
              },
            ],
          };
        case "Conjunction":
          return {
            name: "Conjunction",
            properties: [
              {
                name: "left",
              },
              {
                name: "right",
              },
            ],
          };
        case "Disjunction":
          return {
            name: "Disjunction",
            properties: [
              {
                name: "left",
              },
              {
                name: "right",
              },
            ],
          };
        case "Grammar":
          return {
            name: "Grammar",
            properties: [
              {
                name: "definesHiddenTokens",
                defaultValue: false,
              },
              {
                name: "hiddenTokens",
                defaultValue: [],
              },
              {
                name: "imports",
                defaultValue: [],
              },
              {
                name: "interfaces",
                defaultValue: [],
              },
              {
                name: "isDeclared",
                defaultValue: false,
              },
              {
                name: "name",
              },
              {
                name: "rules",
                defaultValue: [],
              },
              {
                name: "types",
                defaultValue: [],
              },
              {
                name: "usedGrammars",
                defaultValue: [],
              },
            ],
          };
        case "GrammarImport":
          return {
            name: "GrammarImport",
            properties: [
              {
                name: "path",
              },
            ],
          };
        case "InferredType":
          return {
            name: "InferredType",
            properties: [
              {
                name: "name",
              },
            ],
          };
        case "Interface":
          return {
            name: "Interface",
            properties: [
              {
                name: "attributes",
                defaultValue: [],
              },
              {
                name: "name",
              },
              {
                name: "superTypes",
                defaultValue: [],
              },
            ],
          };
        case "NamedArgument":
          return {
            name: "NamedArgument",
            properties: [
              {
                name: "calledByName",
                defaultValue: false,
              },
              {
                name: "parameter",
              },
              {
                name: "value",
              },
            ],
          };
        case "Negation":
          return {
            name: "Negation",
            properties: [
              {
                name: "value",
              },
            ],
          };
        case "NumberLiteral":
          return {
            name: "NumberLiteral",
            properties: [
              {
                name: "value",
              },
            ],
          };
        case "Parameter":
          return {
            name: "Parameter",
            properties: [
              {
                name: "name",
              },
            ],
          };
        case "ParameterReference":
          return {
            name: "ParameterReference",
            properties: [
              {
                name: "parameter",
              },
            ],
          };
        case "ParserRule":
          return {
            name: "ParserRule",
            properties: [
              {
                name: "dataType",
              },
              {
                name: "definesHiddenTokens",
                defaultValue: false,
              },
              {
                name: "definition",
              },
              {
                name: "entry",
                defaultValue: false,
              },
              {
                name: "fragment",
                defaultValue: false,
              },
              {
                name: "hiddenTokens",
                defaultValue: [],
              },
              {
                name: "inferredType",
              },
              {
                name: "name",
              },
              {
                name: "parameters",
                defaultValue: [],
              },
              {
                name: "returnType",
              },
              {
                name: "wildcard",
                defaultValue: false,
              },
            ],
          };
        case "ReferenceType":
          return {
            name: "ReferenceType",
            properties: [
              {
                name: "referenceType",
              },
            ],
          };
        case "ReturnType":
          return {
            name: "ReturnType",
            properties: [
              {
                name: "name",
              },
            ],
          };
        case "SimpleType":
          return {
            name: "SimpleType",
            properties: [
              {
                name: "primitiveType",
              },
              {
                name: "stringType",
              },
              {
                name: "typeRef",
              },
            ],
          };
        case "StringLiteral":
          return {
            name: "StringLiteral",
            properties: [
              {
                name: "value",
              },
            ],
          };
        case "TerminalRule":
          return {
            name: "TerminalRule",
            properties: [
              {
                name: "definition",
              },
              {
                name: "fragment",
                defaultValue: false,
              },
              {
                name: "hidden",
                defaultValue: false,
              },
              {
                name: "name",
              },
              {
                name: "type",
              },
            ],
          };
        case "Type":
          return {
            name: "Type",
            properties: [
              {
                name: "name",
              },
              {
                name: "type",
              },
            ],
          };
        case "TypeAttribute":
          return {
            name: "TypeAttribute",
            properties: [
              {
                name: "defaultValue",
              },
              {
                name: "isOptional",
                defaultValue: false,
              },
              {
                name: "name",
              },
              {
                name: "type",
              },
            ],
          };
        case "UnionType":
          return {
            name: "UnionType",
            properties: [
              {
                name: "types",
                defaultValue: [],
              },
            ],
          };
        case "Action":
          return {
            name: "Action",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "feature",
              },
              {
                name: "inferredType",
              },
              {
                name: "lookahead",
              },
              {
                name: "operator",
              },
              {
                name: "type",
              },
            ],
          };
        case "Alternatives":
          return {
            name: "Alternatives",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "elements",
                defaultValue: [],
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "Assignment":
          return {
            name: "Assignment",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "feature",
              },
              {
                name: "lookahead",
              },
              {
                name: "operator",
              },
              {
                name: "terminal",
              },
            ],
          };
        case "CharacterRange":
          return {
            name: "CharacterRange",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "left",
              },
              {
                name: "lookahead",
              },
              {
                name: "right",
              },
            ],
          };
        case "CrossReference":
          return {
            name: "CrossReference",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "deprecatedSyntax",
                defaultValue: false,
              },
              {
                name: "lookahead",
              },
              {
                name: "terminal",
              },
              {
                name: "type",
              },
            ],
          };
        case "EndOfFile":
          return {
            name: "EndOfFile",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "Group":
          return {
            name: "Group",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "elements",
                defaultValue: [],
              },
              {
                name: "guardCondition",
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "Keyword":
          return {
            name: "Keyword",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "value",
              },
            ],
          };
        case "NegatedToken":
          return {
            name: "NegatedToken",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "terminal",
              },
            ],
          };
        case "RegexToken":
          return {
            name: "RegexToken",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "regex",
              },
            ],
          };
        case "RuleCall":
          return {
            name: "RuleCall",
            properties: [
              {
                name: "arguments",
                defaultValue: [],
              },
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "rule",
              },
            ],
          };
        case "TerminalAlternatives":
          return {
            name: "TerminalAlternatives",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "elements",
                defaultValue: [],
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "TerminalGroup":
          return {
            name: "TerminalGroup",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "elements",
                defaultValue: [],
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "TerminalRuleCall":
          return {
            name: "TerminalRuleCall",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "rule",
              },
            ],
          };
        case "UnorderedGroup":
          return {
            name: "UnorderedGroup",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "elements",
                defaultValue: [],
              },
              {
                name: "lookahead",
              },
            ],
          };
        case "UntilToken":
          return {
            name: "UntilToken",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
              {
                name: "terminal",
              },
            ],
          };
        case "Wildcard":
          return {
            name: "Wildcard",
            properties: [
              {
                name: "cardinality",
              },
              {
                name: "lookahead",
              },
            ],
          };
        default:
          return {
            name: chunkFPAJGGOCParam2,
            properties: [],
          };
      }
    }
  },
  chunkFPAJGGOCValue54 = new chunkFPAJGGOCValue53();
function chunkFPAJGGOCHelper48(chunkFPAJGGOCParam487) {
  for (let [chunkFPAJGGOCValue954, chunkFPAJGGOCValue955] of Object.entries(
    chunkFPAJGGOCParam487,
  ))
    chunkFPAJGGOCValue954.startsWith("$") ||
      (Array.isArray(chunkFPAJGGOCValue955)
        ? chunkFPAJGGOCValue955.forEach((item, index) => {
            chunkFPAJGGOCHelper1(item) &&
              ((item.$container = chunkFPAJGGOCParam487),
              (item.$containerProperty = chunkFPAJGGOCValue954),
              (item.$containerIndex = index));
          })
        : chunkFPAJGGOCHelper1(chunkFPAJGGOCValue955) &&
          ((chunkFPAJGGOCValue955.$container = chunkFPAJGGOCParam487),
          (chunkFPAJGGOCValue955.$containerProperty = chunkFPAJGGOCValue954)));
}
function chunkFPAJGGOCHelper49(chunkFPAJGGOCParam1439, chunkFPAJGGOCParam1440) {
  let chunkFPAJGGOCValue1698 = chunkFPAJGGOCParam1439;
  for (; chunkFPAJGGOCValue1698; ) {
    if (chunkFPAJGGOCParam1440(chunkFPAJGGOCValue1698))
      return chunkFPAJGGOCValue1698;
    chunkFPAJGGOCValue1698 = chunkFPAJGGOCValue1698.$container;
  }
}
function chunkFPAJGGOCHelper50(chunkFPAJGGOCParam1381) {
  let chunkFPAJGGOCValue1662 = chunkFPAJGGOCHelper51(
    chunkFPAJGGOCParam1381,
  ).$document;
  if (!chunkFPAJGGOCValue1662) throw Error("AST node has no document.");
  return chunkFPAJGGOCValue1662;
}
function chunkFPAJGGOCHelper51(chunkFPAJGGOCParam1661) {
  for (; chunkFPAJGGOCParam1661.$container; )
    chunkFPAJGGOCParam1661 = chunkFPAJGGOCParam1661.$container;
  return chunkFPAJGGOCParam1661;
}
function chunkFPAJGGOCHelper52(chunkFPAJGGOCParam167, chunkFPAJGGOCParam168) {
  if (!chunkFPAJGGOCParam167) throw Error("Node must be an AstNode.");
  let chunkFPAJGGOCValue576 = chunkFPAJGGOCParam168?.range;
  return new chunkFPAJGGOCValue2(
    () => ({
      keys: Object.keys(chunkFPAJGGOCParam167),
      keyIndex: 0,
      arrayIndex: 0,
    }),
    (chunkFPAJGGOCParam261) => {
      for (
        ;
        chunkFPAJGGOCParam261.keyIndex < chunkFPAJGGOCParam261.keys.length;

      ) {
        let chunkFPAJGGOCValue761 =
          chunkFPAJGGOCParam261.keys[chunkFPAJGGOCParam261.keyIndex];
        if (!chunkFPAJGGOCValue761.startsWith("$")) {
          let chunkFPAJGGOCValue885 =
            chunkFPAJGGOCParam167[chunkFPAJGGOCValue761];
          if (chunkFPAJGGOCHelper1(chunkFPAJGGOCValue885)) {
            if (
              (chunkFPAJGGOCParam261.keyIndex++,
              chunkFPAJGGOCHelper55(
                chunkFPAJGGOCValue885,
                chunkFPAJGGOCValue576,
              ))
            )
              return {
                done: false,
                value: chunkFPAJGGOCValue885,
              };
          } else if (Array.isArray(chunkFPAJGGOCValue885)) {
            for (
              ;
              chunkFPAJGGOCParam261.arrayIndex < chunkFPAJGGOCValue885.length;

            ) {
              let chunkFPAJGGOCValue1603 =
                chunkFPAJGGOCValue885[chunkFPAJGGOCParam261.arrayIndex++];
              if (
                chunkFPAJGGOCHelper1(chunkFPAJGGOCValue1603) &&
                chunkFPAJGGOCHelper55(
                  chunkFPAJGGOCValue1603,
                  chunkFPAJGGOCValue576,
                )
              )
                return {
                  done: false,
                  value: chunkFPAJGGOCValue1603,
                };
            }
            chunkFPAJGGOCParam261.arrayIndex = 0;
          }
        }
        chunkFPAJGGOCParam261.keyIndex++;
      }
      return chunkFPAJGGOCValue4;
    },
  );
}
function chunkFPAJGGOCHelper53(chunkFPAJGGOCParam1350, chunkFPAJGGOCParam1351) {
  if (!chunkFPAJGGOCParam1350) throw Error("Root node must be an AstNode.");
  return new chunkFPAJGGOCValue5(
    chunkFPAJGGOCParam1350,
    (chunkFPAJGGOCParam2295) =>
      chunkFPAJGGOCHelper52(chunkFPAJGGOCParam2295, chunkFPAJGGOCParam1351),
  );
}
function chunkFPAJGGOCHelper54(chunkFPAJGGOCParam957, chunkFPAJGGOCParam958) {
  if (!chunkFPAJGGOCParam957) throw Error("Root node must be an AstNode.");
  return chunkFPAJGGOCParam958?.range &&
    !chunkFPAJGGOCHelper55(chunkFPAJGGOCParam957, chunkFPAJGGOCParam958.range)
    ? new chunkFPAJGGOCValue5(chunkFPAJGGOCParam957, () => [])
    : new chunkFPAJGGOCValue5(
        chunkFPAJGGOCParam957,
        (chunkFPAJGGOCParam2296) =>
          chunkFPAJGGOCHelper52(chunkFPAJGGOCParam2296, chunkFPAJGGOCParam958),
        {
          includeRoot: true,
        },
      );
}
function chunkFPAJGGOCHelper55(chunkFPAJGGOCParam1450, chunkFPAJGGOCParam1451) {
  if (!chunkFPAJGGOCParam1451) return true;
  let chunkFPAJGGOCValue1703 = chunkFPAJGGOCParam1450.$cstNode?.range;
  return chunkFPAJGGOCValue1703
    ? chunkFPAJGGOCHelper15(chunkFPAJGGOCValue1703, chunkFPAJGGOCParam1451)
    : false;
}
function chunkFPAJGGOCHelper56(chunkFPAJGGOCParam124) {
  return new chunkFPAJGGOCValue2(
    () => ({
      keys: Object.keys(chunkFPAJGGOCParam124),
      keyIndex: 0,
      arrayIndex: 0,
    }),
    (chunkFPAJGGOCParam161) => {
      for (
        ;
        chunkFPAJGGOCParam161.keyIndex < chunkFPAJGGOCParam161.keys.length;

      ) {
        let chunkFPAJGGOCValue596 =
          chunkFPAJGGOCParam161.keys[chunkFPAJGGOCParam161.keyIndex];
        if (!chunkFPAJGGOCValue596.startsWith("$")) {
          let chunkFPAJGGOCValue667 =
            chunkFPAJGGOCParam124[chunkFPAJGGOCValue596];
          if (chunkFPAJGGOCHelper2(chunkFPAJGGOCValue667))
            return (
              chunkFPAJGGOCParam161.keyIndex++,
              {
                done: false,
                value: {
                  reference: chunkFPAJGGOCValue667,
                  container: chunkFPAJGGOCParam124,
                  property: chunkFPAJGGOCValue596,
                },
              }
            );
          if (Array.isArray(chunkFPAJGGOCValue667)) {
            for (
              ;
              chunkFPAJGGOCParam161.arrayIndex < chunkFPAJGGOCValue667.length;

            ) {
              let chunkFPAJGGOCValue1126 = chunkFPAJGGOCParam161.arrayIndex++,
                chunkFPAJGGOCValue1127 =
                  chunkFPAJGGOCValue667[chunkFPAJGGOCValue1126];
              if (chunkFPAJGGOCHelper2(chunkFPAJGGOCValue1127))
                return {
                  done: false,
                  value: {
                    reference: chunkFPAJGGOCValue1127,
                    container: chunkFPAJGGOCParam124,
                    property: chunkFPAJGGOCValue596,
                    index: chunkFPAJGGOCValue1126,
                  },
                };
            }
            chunkFPAJGGOCParam161.arrayIndex = 0;
          }
        }
        chunkFPAJGGOCParam161.keyIndex++;
      }
      return chunkFPAJGGOCValue4;
    },
  );
}
function chunkFPAJGGOCHelper57(chunkFPAJGGOCParam911, chunkFPAJGGOCParam912) {
  let chunkFPAJGGOCValue1294 = chunkFPAJGGOCParam911.getTypeMetaData(
      chunkFPAJGGOCParam912.$type,
    ),
    chunkFPAJGGOCValue1295 = chunkFPAJGGOCParam912;
  for (let chunkFPAJGGOCValue1570 of chunkFPAJGGOCValue1294.properties)
    chunkFPAJGGOCValue1570.defaultValue !== undefined &&
      chunkFPAJGGOCValue1295[chunkFPAJGGOCValue1570.name] === undefined &&
      (chunkFPAJGGOCValue1295[chunkFPAJGGOCValue1570.name] =
        chunkFPAJGGOCHelper58(chunkFPAJGGOCValue1570.defaultValue));
}
function chunkFPAJGGOCHelper58(chunkFPAJGGOCParam1768) {
  return Array.isArray(chunkFPAJGGOCParam1768)
    ? [...chunkFPAJGGOCParam1768.map(chunkFPAJGGOCHelper58)]
    : chunkFPAJGGOCParam1768;
}
function chunkFPAJGGOCHelper59(chunkFPAJGGOCParam2104) {
  return chunkFPAJGGOCParam2104.charCodeAt(0);
}
function chunkFPAJGGOCHelper60(chunkFPAJGGOCParam1346, chunkFPAJGGOCParam1347) {
  Array.isArray(chunkFPAJGGOCParam1346)
    ? chunkFPAJGGOCParam1346.forEach(function (item) {
        chunkFPAJGGOCParam1347.push(item);
      })
    : chunkFPAJGGOCParam1347.push(chunkFPAJGGOCParam1346);
}
function chunkFPAJGGOCHelper61(chunkFPAJGGOCParam1523, chunkFPAJGGOCParam1524) {
  if (chunkFPAJGGOCParam1523[chunkFPAJGGOCParam1524] === true)
    throw "duplicate flag " + chunkFPAJGGOCParam1524;
  chunkFPAJGGOCParam1523[chunkFPAJGGOCParam1524];
  chunkFPAJGGOCParam1523[chunkFPAJGGOCParam1524] = true;
}
function chunkFPAJGGOCHelper62(chunkFPAJGGOCParam1396) {
  if (chunkFPAJGGOCParam1396 === undefined)
    throw Error("Internal Error - Should never get here!");
  return true;
}
function chunkFPAJGGOCHelper63() {
  throw Error("Internal Error - Should never get here!");
}
function chunkFPAJGGOCHelper64(chunkFPAJGGOCParam1977) {
  return chunkFPAJGGOCParam1977.type === "Character";
}
var chunkFPAJGGOCValue55 = [];
for (
  let chunkFPAJGGOCValue1854 = chunkFPAJGGOCHelper59("0");
  chunkFPAJGGOCValue1854 <= chunkFPAJGGOCHelper59("9");
  chunkFPAJGGOCValue1854++
)
  chunkFPAJGGOCValue55.push(chunkFPAJGGOCValue1854);
var chunkFPAJGGOCValue56 = [chunkFPAJGGOCHelper59("_")].concat(
  chunkFPAJGGOCValue55,
);
for (
  let chunkFPAJGGOCValue1855 = chunkFPAJGGOCHelper59("a");
  chunkFPAJGGOCValue1855 <= chunkFPAJGGOCHelper59("z");
  chunkFPAJGGOCValue1855++
)
  chunkFPAJGGOCValue56.push(chunkFPAJGGOCValue1855);
for (
  let chunkFPAJGGOCValue1856 = chunkFPAJGGOCHelper59("A");
  chunkFPAJGGOCValue1856 <= chunkFPAJGGOCHelper59("Z");
  chunkFPAJGGOCValue1856++
)
  chunkFPAJGGOCValue56.push(chunkFPAJGGOCValue1856);
var chunkFPAJGGOCValue57 = [
    chunkFPAJGGOCHelper59(" "),
    chunkFPAJGGOCHelper59("\f"),
    chunkFPAJGGOCHelper59("\n"),
    chunkFPAJGGOCHelper59("\r"),
    chunkFPAJGGOCHelper59("\t"),
    chunkFPAJGGOCHelper59(""),
    chunkFPAJGGOCHelper59("\t"),
    chunkFPAJGGOCHelper59("\xA0"),
    chunkFPAJGGOCHelper59("\u1680"),
    chunkFPAJGGOCHelper59("\u2000"),
    chunkFPAJGGOCHelper59("\u2001"),
    chunkFPAJGGOCHelper59("\u2002"),
    chunkFPAJGGOCHelper59("\u2003"),
    chunkFPAJGGOCHelper59("\u2004"),
    chunkFPAJGGOCHelper59("\u2005"),
    chunkFPAJGGOCHelper59("\u2006"),
    chunkFPAJGGOCHelper59("\u2007"),
    chunkFPAJGGOCHelper59("\u2008"),
    chunkFPAJGGOCHelper59("\u2009"),
    chunkFPAJGGOCHelper59("\u200A"),
    chunkFPAJGGOCHelper59("\u2028"),
    chunkFPAJGGOCHelper59("\u2029"),
    chunkFPAJGGOCHelper59("\u202F"),
    chunkFPAJGGOCHelper59("\u205F"),
    chunkFPAJGGOCHelper59("\u3000"),
    chunkFPAJGGOCHelper59("﻿"),
  ],
  chunkFPAJGGOCValue58 = /[0-9a-fA-F]/,
  $n = /[0-9]/,
  chunkFPAJGGOCValue59 = /[1-9]/,
  chunkFPAJGGOCValue60 = class {
    constructor() {
      this.idx = 0;
      this.input = "";
      this.groupIdx = 0;
    }
    saveState() {
      return {
        idx: this.idx,
        input: this.input,
        groupIdx: this.groupIdx,
      };
    }
    restoreState(chunkFPAJGGOCParam1330) {
      this.idx = chunkFPAJGGOCParam1330.idx;
      this.input = chunkFPAJGGOCParam1330.input;
      this.groupIdx = chunkFPAJGGOCParam1330.groupIdx;
    }
    pattern(chunkFPAJGGOCParam86) {
      this.idx = 0;
      this.input = chunkFPAJGGOCParam86;
      this.groupIdx = 0;
      this.consumeChar("/");
      let chunkFPAJGGOCValue500 = this.disjunction();
      this.consumeChar("/");
      let chunkFPAJGGOCValue501 = {
        type: "Flags",
        loc: {
          begin: this.idx,
          end: chunkFPAJGGOCParam86.length,
        },
        global: false,
        ignoreCase: false,
        multiLine: false,
        unicode: false,
        sticky: false,
      };
      for (; this.isRegExpFlag(); )
        switch (this.popChar()) {
          case "g":
            chunkFPAJGGOCHelper61(chunkFPAJGGOCValue501, "global");
            break;
          case "i":
            chunkFPAJGGOCHelper61(chunkFPAJGGOCValue501, "ignoreCase");
            break;
          case "m":
            chunkFPAJGGOCHelper61(chunkFPAJGGOCValue501, "multiLine");
            break;
          case "u":
            chunkFPAJGGOCHelper61(chunkFPAJGGOCValue501, "unicode");
            break;
          case "y":
            chunkFPAJGGOCHelper61(chunkFPAJGGOCValue501, "sticky");
            break;
        }
      if (this.idx !== this.input.length)
        throw Error("Redundant input: " + this.input.substring(this.idx));
      return {
        type: "Pattern",
        flags: chunkFPAJGGOCValue501,
        value: chunkFPAJGGOCValue500,
        loc: this.loc(0),
      };
    }
    disjunction() {
      let chunkFPAJGGOCValue1135 = [],
        chunkFPAJGGOCValue1136 = this.idx;
      for (
        chunkFPAJGGOCValue1135.push(this.alternative());
        this.peekChar() === "|";

      ) {
        this.consumeChar("|");
        chunkFPAJGGOCValue1135.push(this.alternative());
      }
      return {
        type: "Disjunction",
        value: chunkFPAJGGOCValue1135,
        loc: this.loc(chunkFPAJGGOCValue1136),
      };
    }
    alternative() {
      let chunkFPAJGGOCValue1385 = [],
        chunkFPAJGGOCValue1386 = this.idx;
      for (; this.isTerm(); ) chunkFPAJGGOCValue1385.push(this.term());
      return {
        type: "Alternative",
        value: chunkFPAJGGOCValue1385,
        loc: this.loc(chunkFPAJGGOCValue1386),
      };
    }
    term() {
      return this.isAssertion() ? this.assertion() : this.atom();
    }
    assertion() {
      let chunkFPAJGGOCValue510 = this.idx;
      switch (this.popChar()) {
        case "^":
          return {
            type: "StartAnchor",
            loc: this.loc(chunkFPAJGGOCValue510),
          };
        case "$":
          return {
            type: "EndAnchor",
            loc: this.loc(chunkFPAJGGOCValue510),
          };
        case "\\":
          switch (this.popChar()) {
            case "b":
              return {
                type: "WordBoundary",
                loc: this.loc(chunkFPAJGGOCValue510),
              };
            case "B":
              return {
                type: "NonWordBoundary",
                loc: this.loc(chunkFPAJGGOCValue510),
              };
          }
          throw Error("Invalid Assertion Escape");
        case "(":
          this.consumeChar("?");
          let chunkFPAJGGOCValue522;
          switch (this.popChar()) {
            case "=":
              chunkFPAJGGOCValue522 = "Lookahead";
              break;
            case "!":
              chunkFPAJGGOCValue522 = "NegativeLookahead";
              break;
          }
          chunkFPAJGGOCHelper62(chunkFPAJGGOCValue522);
          let chunkFPAJGGOCValue523 = this.disjunction();
          return (
            this.consumeChar(")"),
            {
              type: chunkFPAJGGOCValue522,
              value: chunkFPAJGGOCValue523,
              loc: this.loc(chunkFPAJGGOCValue510),
            }
          );
      }
      return chunkFPAJGGOCHelper63();
    }
    quantifier(chunkFPAJGGOCParam74 = false) {
      let chunkFPAJGGOCValue479,
        chunkFPAJGGOCValue480 = this.idx;
      switch (this.popChar()) {
        case "*":
          chunkFPAJGGOCValue479 = {
            atLeast: 0,
            atMost: 1 / 0,
          };
          break;
        case "+":
          chunkFPAJGGOCValue479 = {
            atLeast: 1,
            atMost: 1 / 0,
          };
          break;
        case "?":
          chunkFPAJGGOCValue479 = {
            atLeast: 0,
            atMost: 1,
          };
          break;
        case "{":
          let chunkFPAJGGOCValue541 = this.integerIncludingZero();
          switch (this.popChar()) {
            case "}":
              chunkFPAJGGOCValue479 = {
                atLeast: chunkFPAJGGOCValue541,
                atMost: chunkFPAJGGOCValue541,
              };
              break;
            case ",":
              let chunkFPAJGGOCValue829;
              this.isDigit()
                ? ((chunkFPAJGGOCValue829 = this.integerIncludingZero()),
                  (chunkFPAJGGOCValue479 = {
                    atLeast: chunkFPAJGGOCValue541,
                    atMost: chunkFPAJGGOCValue829,
                  }))
                : (chunkFPAJGGOCValue479 = {
                    atLeast: chunkFPAJGGOCValue541,
                    atMost: 1 / 0,
                  });
              this.consumeChar("}");
              break;
          }
          if (
            chunkFPAJGGOCParam74 === true &&
            chunkFPAJGGOCValue479 === undefined
          )
            return;
          chunkFPAJGGOCHelper62(chunkFPAJGGOCValue479);
          break;
      }
      if (
        !(
          chunkFPAJGGOCParam74 === true && chunkFPAJGGOCValue479 === undefined
        ) &&
        chunkFPAJGGOCHelper62(chunkFPAJGGOCValue479)
      )
        return (
          this.peekChar(0) === "?"
            ? (this.consumeChar("?"), (chunkFPAJGGOCValue479.greedy = false))
            : (chunkFPAJGGOCValue479.greedy = true),
          (chunkFPAJGGOCValue479.type = "Quantifier"),
          (chunkFPAJGGOCValue479.loc = this.loc(chunkFPAJGGOCValue480)),
          chunkFPAJGGOCValue479
        );
    }
    atom() {
      let chunkFPAJGGOCValue615,
        chunkFPAJGGOCValue616 = this.idx;
      switch (this.peekChar()) {
        case ".":
          chunkFPAJGGOCValue615 = this.dotAll();
          break;
        case "\\":
          chunkFPAJGGOCValue615 = this.atomEscape();
          break;
        case "[":
          chunkFPAJGGOCValue615 = this.characterClass();
          break;
        case "(":
          chunkFPAJGGOCValue615 = this.group();
          break;
      }
      return (
        chunkFPAJGGOCValue615 === undefined &&
          this.isPatternCharacter() &&
          (chunkFPAJGGOCValue615 = this.patternCharacter()),
        chunkFPAJGGOCHelper62(chunkFPAJGGOCValue615)
          ? ((chunkFPAJGGOCValue615.loc = this.loc(chunkFPAJGGOCValue616)),
            this.isQuantifier() &&
              (chunkFPAJGGOCValue615.quantifier = this.quantifier()),
            chunkFPAJGGOCValue615)
          : chunkFPAJGGOCHelper63()
      );
    }
    dotAll() {
      return (
        this.consumeChar("."),
        {
          type: "Set",
          complement: true,
          value: [
            chunkFPAJGGOCHelper59("\n"),
            chunkFPAJGGOCHelper59("\r"),
            chunkFPAJGGOCHelper59("\u2028"),
            chunkFPAJGGOCHelper59("\u2029"),
          ],
        }
      );
    }
    atomEscape() {
      switch ((this.consumeChar("\\"), this.peekChar())) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return this.decimalEscapeAtom();
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    decimalEscapeAtom() {
      return {
        type: "GroupBackReference",
        value: this.positiveInteger(),
      };
    }
    characterClassEscape() {
      let chunkFPAJGGOCValue711,
        chunkFPAJGGOCValue712 = false;
      switch (this.popChar()) {
        case "d":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue55;
          break;
        case "D":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue55;
          chunkFPAJGGOCValue712 = true;
          break;
        case "s":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue57;
          break;
        case "S":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue57;
          chunkFPAJGGOCValue712 = true;
          break;
        case "w":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue56;
          break;
        case "W":
          chunkFPAJGGOCValue711 = chunkFPAJGGOCValue56;
          chunkFPAJGGOCValue712 = true;
          break;
      }
      return chunkFPAJGGOCHelper62(chunkFPAJGGOCValue711)
        ? {
            type: "Set",
            value: chunkFPAJGGOCValue711,
            complement: chunkFPAJGGOCValue712,
          }
        : chunkFPAJGGOCHelper63();
    }
    controlEscapeAtom() {
      let chunkFPAJGGOCValue816;
      switch (this.popChar()) {
        case "f":
          chunkFPAJGGOCValue816 = chunkFPAJGGOCHelper59("\f");
          break;
        case "n":
          chunkFPAJGGOCValue816 = chunkFPAJGGOCHelper59("\n");
          break;
        case "r":
          chunkFPAJGGOCValue816 = chunkFPAJGGOCHelper59("\r");
          break;
        case "t":
          chunkFPAJGGOCValue816 = chunkFPAJGGOCHelper59("\t");
          break;
        case "v":
          chunkFPAJGGOCValue816 = chunkFPAJGGOCHelper59("");
          break;
      }
      return chunkFPAJGGOCHelper62(chunkFPAJGGOCValue816)
        ? {
            type: "Character",
            value: chunkFPAJGGOCValue816,
          }
        : chunkFPAJGGOCHelper63();
    }
    controlLetterEscapeAtom() {
      this.consumeChar("c");
      let chunkFPAJGGOCValue1201 = this.popChar();
      if (/[a-zA-Z]/.test(chunkFPAJGGOCValue1201) === false)
        throw Error("Invalid ");
      return {
        type: "Character",
        value: chunkFPAJGGOCValue1201.toUpperCase().charCodeAt(0) - 64,
      };
    }
    nulCharacterAtom() {
      return (
        this.consumeChar("0"),
        {
          type: "Character",
          value: chunkFPAJGGOCHelper59("\0"),
        }
      );
    }
    hexEscapeSequenceAtom() {
      return (this.consumeChar("x"), this.parseHexDigits(2));
    }
    regExpUnicodeEscapeSequenceAtom() {
      return (this.consumeChar("u"), this.parseHexDigits(4));
    }
    identityEscapeAtom() {
      return {
        type: "Character",
        value: chunkFPAJGGOCHelper59(this.popChar()),
      };
    }
    classPatternCharacterAtom() {
      switch (this.peekChar()) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "\\":
        case "]":
          throw Error("TBD");
        default:
          return {
            type: "Character",
            value: chunkFPAJGGOCHelper59(this.popChar()),
          };
      }
    }
    characterClass() {
      let chunkFPAJGGOCValue577 = [],
        chunkFPAJGGOCValue578 = false;
      for (
        this.consumeChar("["),
          this.peekChar(0) === "^" &&
            (this.consumeChar("^"), (chunkFPAJGGOCValue578 = true));
        this.isClassAtom();

      ) {
        let chunkFPAJGGOCValue797 = this.classAtom();
        if (
          (chunkFPAJGGOCValue797.type,
          chunkFPAJGGOCHelper64(chunkFPAJGGOCValue797) && this.isRangeDash())
        ) {
          this.consumeChar("-");
          let chunkFPAJGGOCValue956 = this.classAtom();
          if (
            (chunkFPAJGGOCValue956.type,
            chunkFPAJGGOCHelper64(chunkFPAJGGOCValue956))
          ) {
            if (chunkFPAJGGOCValue956.value < chunkFPAJGGOCValue797.value)
              throw Error("Range out of order in character class");
            chunkFPAJGGOCValue577.push({
              from: chunkFPAJGGOCValue797.value,
              to: chunkFPAJGGOCValue956.value,
            });
          } else {
            chunkFPAJGGOCHelper60(
              chunkFPAJGGOCValue797.value,
              chunkFPAJGGOCValue577,
            );
            chunkFPAJGGOCValue577.push(chunkFPAJGGOCHelper59("-"));
            chunkFPAJGGOCHelper60(
              chunkFPAJGGOCValue956.value,
              chunkFPAJGGOCValue577,
            );
          }
        } else
          chunkFPAJGGOCHelper60(
            chunkFPAJGGOCValue797.value,
            chunkFPAJGGOCValue577,
          );
      }
      return (
        this.consumeChar("]"),
        {
          type: "Set",
          complement: chunkFPAJGGOCValue578,
          value: chunkFPAJGGOCValue577,
        }
      );
    }
    classAtom() {
      switch (this.peekChar()) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          throw Error("TBD");
        case "\\":
          return this.classEscape();
        default:
          return this.classPatternCharacterAtom();
      }
    }
    classEscape() {
      switch ((this.consumeChar("\\"), this.peekChar())) {
        case "b":
          return (
            this.consumeChar("b"),
            {
              type: "Character",
              value: chunkFPAJGGOCHelper59("\b"),
            }
          );
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    group() {
      let chunkFPAJGGOCValue812 = true;
      switch ((this.consumeChar("("), this.peekChar(0))) {
        case "?":
          this.consumeChar("?");
          this.consumeChar(":");
          chunkFPAJGGOCValue812 = false;
          break;
        default:
          this.groupIdx++;
          break;
      }
      let chunkFPAJGGOCValue813 = this.disjunction();
      this.consumeChar(")");
      let chunkFPAJGGOCValue814 = {
        type: "Group",
        capturing: chunkFPAJGGOCValue812,
        value: chunkFPAJGGOCValue813,
      };
      return (
        chunkFPAJGGOCValue812 && (chunkFPAJGGOCValue814.idx = this.groupIdx),
        chunkFPAJGGOCValue814
      );
    }
    positiveInteger() {
      let chunkFPAJGGOCValue1236 = this.popChar();
      if (chunkFPAJGGOCValue59.test(chunkFPAJGGOCValue1236) === false)
        throw Error("Expecting a positive integer");
      for (; $n.test(this.peekChar(0)); )
        chunkFPAJGGOCValue1236 += this.popChar();
      return parseInt(chunkFPAJGGOCValue1236, 10);
    }
    integerIncludingZero() {
      let chunkFPAJGGOCValue1251 = this.popChar();
      if ($n.test(chunkFPAJGGOCValue1251) === false)
        throw Error("Expecting an integer");
      for (; $n.test(this.peekChar(0)); )
        chunkFPAJGGOCValue1251 += this.popChar();
      return parseInt(chunkFPAJGGOCValue1251, 10);
    }
    patternCharacter() {
      let chunkFPAJGGOCValue781 = this.popChar();
      switch (chunkFPAJGGOCValue781) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
          throw Error("TBD");
        default:
          return {
            type: "Character",
            value: chunkFPAJGGOCHelper59(chunkFPAJGGOCValue781),
          };
      }
    }
    isRegExpFlag() {
      switch (this.peekChar(0)) {
        case "g":
        case "i":
        case "m":
        case "u":
        case "y":
          return true;
        default:
          return false;
      }
    }
    isRangeDash() {
      return this.peekChar() === "-" && this.isClassAtom(1);
    }
    isDigit() {
      return $n.test(this.peekChar(0));
    }
    isClassAtom(chunkFPAJGGOCParam811 = 0) {
      switch (this.peekChar(chunkFPAJGGOCParam811)) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    isTerm() {
      return this.isAtom() || this.isAssertion();
    }
    isAtom() {
      if (this.isPatternCharacter()) return true;
      switch (this.peekChar(0)) {
        case ".":
        case "\\":
        case "[":
        case "(":
          return true;
        default:
          return false;
      }
    }
    isAssertion() {
      switch (this.peekChar(0)) {
        case "^":
        case "$":
          return true;
        case "\\":
          switch (this.peekChar(1)) {
            case "b":
            case "B":
              return true;
            default:
              return false;
          }
        case "(":
          return (
            this.peekChar(1) === "?" &&
            (this.peekChar(2) === "=" || this.peekChar(2) === "!")
          );
        default:
          return false;
      }
    }
    isQuantifier() {
      let chunkFPAJGGOCValue1293 = this.saveState();
      try {
        return this.quantifier(true) !== undefined;
      } catch {
        return false;
      } finally {
        this.restoreState(chunkFPAJGGOCValue1293);
      }
    }
    isPatternCharacter() {
      switch (this.peekChar()) {
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
        case "/":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    parseHexDigits(chunkFPAJGGOCParam683) {
      let chunkFPAJGGOCValue1089 = "";
      for (
        let chunkFPAJGGOCValue1453 = 0;
        chunkFPAJGGOCValue1453 < chunkFPAJGGOCParam683;
        chunkFPAJGGOCValue1453++
      ) {
        let chunkFPAJGGOCValue1557 = this.popChar();
        if (chunkFPAJGGOCValue58.test(chunkFPAJGGOCValue1557) === false)
          throw Error("Expecting a HexDecimal digits");
        chunkFPAJGGOCValue1089 += chunkFPAJGGOCValue1557;
      }
      return {
        type: "Character",
        value: parseInt(chunkFPAJGGOCValue1089, 16),
      };
    }
    peekChar(chunkFPAJGGOCParam1845 = 0) {
      return this.input[this.idx + chunkFPAJGGOCParam1845];
    }
    popChar() {
      let chunkFPAJGGOCValue1728 = this.peekChar(0);
      return (this.consumeChar(undefined), chunkFPAJGGOCValue1728);
    }
    consumeChar(chunkFPAJGGOCParam483) {
      if (
        chunkFPAJGGOCParam483 !== undefined &&
        this.input[this.idx] !== chunkFPAJGGOCParam483
      )
        throw Error(
          "Expected: '" +
            chunkFPAJGGOCParam483 +
            "' but found: '" +
            this.input[this.idx] +
            "' at offset: " +
            this.idx,
        );
      if (this.idx >= this.input.length) throw Error("Unexpected end of input");
      this.idx++;
    }
    loc(chunkFPAJGGOCParam1927) {
      return {
        begin: chunkFPAJGGOCParam1927,
        end: this.idx,
      };
    }
  },
  chunkFPAJGGOCValue61 = class {
    visitChildren(chunkFPAJGGOCParam619) {
      for (let chunkFPAJGGOCValue1121 in chunkFPAJGGOCParam619) {
        let chunkFPAJGGOCValue1178 =
          chunkFPAJGGOCParam619[chunkFPAJGGOCValue1121];
        chunkFPAJGGOCParam619.hasOwnProperty(chunkFPAJGGOCValue1121) &&
          (chunkFPAJGGOCValue1178.type === undefined
            ? Array.isArray(chunkFPAJGGOCValue1178) &&
              chunkFPAJGGOCValue1178.forEach((item) => {
                this.visit(item);
              }, this)
            : this.visit(chunkFPAJGGOCValue1178));
      }
    }
    visit(chunkFPAJGGOCParam71) {
      switch (chunkFPAJGGOCParam71.type) {
        case "Pattern":
          this.visitPattern(chunkFPAJGGOCParam71);
          break;
        case "Flags":
          this.visitFlags(chunkFPAJGGOCParam71);
          break;
        case "Disjunction":
          this.visitDisjunction(chunkFPAJGGOCParam71);
          break;
        case "Alternative":
          this.visitAlternative(chunkFPAJGGOCParam71);
          break;
        case "StartAnchor":
          this.visitStartAnchor(chunkFPAJGGOCParam71);
          break;
        case "EndAnchor":
          this.visitEndAnchor(chunkFPAJGGOCParam71);
          break;
        case "WordBoundary":
          this.visitWordBoundary(chunkFPAJGGOCParam71);
          break;
        case "NonWordBoundary":
          this.visitNonWordBoundary(chunkFPAJGGOCParam71);
          break;
        case "Lookahead":
          this.visitLookahead(chunkFPAJGGOCParam71);
          break;
        case "NegativeLookahead":
          this.visitNegativeLookahead(chunkFPAJGGOCParam71);
          break;
        case "Character":
          this.visitCharacter(chunkFPAJGGOCParam71);
          break;
        case "Set":
          this.visitSet(chunkFPAJGGOCParam71);
          break;
        case "Group":
          this.visitGroup(chunkFPAJGGOCParam71);
          break;
        case "GroupBackReference":
          this.visitGroupBackReference(chunkFPAJGGOCParam71);
          break;
        case "Quantifier":
          this.visitQuantifier(chunkFPAJGGOCParam71);
          break;
      }
      this.visitChildren(chunkFPAJGGOCParam71);
    }
    visitPattern(chunkFPAJGGOCParam2256) {}
    visitFlags(chunkFPAJGGOCParam2262) {}
    visitDisjunction(chunkFPAJGGOCParam2209) {}
    visitAlternative(chunkFPAJGGOCParam2210) {}
    visitStartAnchor(chunkFPAJGGOCParam2211) {}
    visitEndAnchor(chunkFPAJGGOCParam2228) {}
    visitWordBoundary(chunkFPAJGGOCParam2203) {}
    visitNonWordBoundary(chunkFPAJGGOCParam2189) {}
    visitLookahead(chunkFPAJGGOCParam2229) {}
    visitNegativeLookahead(chunkFPAJGGOCParam2182) {}
    visitCharacter(chunkFPAJGGOCParam2230) {}
    visitSet(chunkFPAJGGOCParam2304) {}
    visitGroup(chunkFPAJGGOCParam2263) {}
    visitGroupBackReference(chunkFPAJGGOCParam2180) {}
    visitQuantifier(chunkFPAJGGOCParam2215) {}
  },
  chunkFPAJGGOCValue62 = /\r?\n/gm,
  chunkFPAJGGOCValue63 = new chunkFPAJGGOCValue60(),
  chunkFPAJGGOCValue64 = new (class extends chunkFPAJGGOCValue61 {
    constructor() {
      super(...arguments);
      this.isStarting = true;
      this.endRegexpStack = [];
      this.multiline = false;
    }
    get endRegex() {
      return this.endRegexpStack.join("");
    }
    reset(chunkFPAJGGOCParam1063) {
      this.multiline = false;
      this.regex = chunkFPAJGGOCParam1063;
      this.startRegexp = "";
      this.isStarting = true;
      this.endRegexpStack = [];
    }
    visitGroup(chunkFPAJGGOCParam1466) {
      chunkFPAJGGOCParam1466.quantifier &&
        ((this.isStarting = false), (this.endRegexpStack = []));
    }
    visitCharacter(chunkFPAJGGOCParam432) {
      let chunkFPAJGGOCValue845 = String.fromCharCode(
        chunkFPAJGGOCParam432.value,
      );
      if (
        (!this.multiline &&
          chunkFPAJGGOCValue845 === "\n" &&
          (this.multiline = true),
        chunkFPAJGGOCParam432.quantifier)
      ) {
        this.isStarting = false;
        this.endRegexpStack = [];
      } else {
        let chunkFPAJGGOCValue1599 = chunkFPAJGGOCHelper66(
          chunkFPAJGGOCValue845,
        );
        this.endRegexpStack.push(chunkFPAJGGOCValue1599);
        this.isStarting && (this.startRegexp += chunkFPAJGGOCValue1599);
      }
    }
    visitSet(chunkFPAJGGOCParam390) {
      if (!this.multiline) {
        let chunkFPAJGGOCValue1532 = this.regex.substring(
            chunkFPAJGGOCParam390.loc.begin,
            chunkFPAJGGOCParam390.loc.end,
          ),
          chunkFPAJGGOCValue1533 = new RegExp(chunkFPAJGGOCValue1532);
        this.multiline = !!"\n".match(chunkFPAJGGOCValue1533);
      }
      if (chunkFPAJGGOCParam390.quantifier) {
        this.isStarting = false;
        this.endRegexpStack = [];
      } else {
        let chunkFPAJGGOCValue1439 = this.regex.substring(
          chunkFPAJGGOCParam390.loc.begin,
          chunkFPAJGGOCParam390.loc.end,
        );
        this.endRegexpStack.push(chunkFPAJGGOCValue1439);
        this.isStarting && (this.startRegexp += chunkFPAJGGOCValue1439);
      }
    }
    visitChildren(chunkFPAJGGOCParam1483) {
      (chunkFPAJGGOCParam1483.type === "Group" &&
        chunkFPAJGGOCParam1483.quantifier) ||
        super.visitChildren(chunkFPAJGGOCParam1483);
    }
  })();
function or(chunkFPAJGGOCParam830) {
  try {
    return (
      typeof chunkFPAJGGOCParam830 == "string" &&
        (chunkFPAJGGOCParam830 = new RegExp(chunkFPAJGGOCParam830)),
      (chunkFPAJGGOCParam830 = chunkFPAJGGOCParam830.toString()),
      chunkFPAJGGOCValue64.reset(chunkFPAJGGOCParam830),
      chunkFPAJGGOCValue64.visit(
        chunkFPAJGGOCValue63.pattern(chunkFPAJGGOCParam830),
      ),
      chunkFPAJGGOCValue64.multiline
    );
  } catch {
    return false;
  }
}
var chunkFPAJGGOCValue65 =
  "\f\n\r\t \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000﻿".split(
    "",
  );
function chunkFPAJGGOCHelper65(chunkFPAJGGOCParam1405) {
  let chunkFPAJGGOCValue1676 =
    typeof chunkFPAJGGOCParam1405 == "string"
      ? new RegExp(chunkFPAJGGOCParam1405)
      : chunkFPAJGGOCParam1405;
  return chunkFPAJGGOCValue65.some((item) => chunkFPAJGGOCValue1676.test(item));
}
function chunkFPAJGGOCHelper66(chunkFPAJGGOCParam1729) {
  return chunkFPAJGGOCParam1729.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function chunkFPAJGGOCHelper67(chunkFPAJGGOCParam1140) {
  return Array.prototype.map
    .call(chunkFPAJGGOCParam1140, (chunkFPAJGGOCParam1636) =>
      /\w/.test(chunkFPAJGGOCParam1636)
        ? `[${chunkFPAJGGOCParam1636.toLowerCase()}${chunkFPAJGGOCParam1636.toUpperCase()}]`
        : chunkFPAJGGOCHelper66(chunkFPAJGGOCParam1636),
    )
    .join("");
}
function chunkFPAJGGOCHelper68(chunkFPAJGGOCParam1529, chunkFPAJGGOCParam1530) {
  let chunkFPAJGGOCValue1736 = chunkFPAJGGOCHelper69(chunkFPAJGGOCParam1529),
    chunkFPAJGGOCValue1737 = chunkFPAJGGOCParam1530.match(
      chunkFPAJGGOCValue1736,
    );
  return !!chunkFPAJGGOCValue1737 && chunkFPAJGGOCValue1737[0].length > 0;
}
function chunkFPAJGGOCHelper69(chunkFPAJGGOCParam14) {
  typeof chunkFPAJGGOCParam14 == "string" &&
    (chunkFPAJGGOCParam14 = new RegExp(chunkFPAJGGOCParam14));
  let chunkFPAJGGOCValue398 = chunkFPAJGGOCParam14,
    chunkFPAJGGOCValue399 = chunkFPAJGGOCParam14.source,
    chunkFPAJGGOCValue400 = 0;
  function chunkFPAJGGOCHelper371() {
    let chunkFPAJGGOCValue401 = "",
      chunkFPAJGGOCValue402;
    function chunkFPAJGGOCHelper372(chunkFPAJGGOCParam1846) {
      chunkFPAJGGOCValue401 += chunkFPAJGGOCValue399.substr(
        chunkFPAJGGOCValue400,
        chunkFPAJGGOCParam1846,
      );
      chunkFPAJGGOCValue400 += chunkFPAJGGOCParam1846;
    }
    function chunkFPAJGGOCHelper373(chunkFPAJGGOCParam1622) {
      chunkFPAJGGOCValue401 +=
        "(?:" +
        chunkFPAJGGOCValue399.substr(
          chunkFPAJGGOCValue400,
          chunkFPAJGGOCParam1622,
        ) +
        "|$)";
      chunkFPAJGGOCValue400 += chunkFPAJGGOCParam1622;
    }
    for (; chunkFPAJGGOCValue400 < chunkFPAJGGOCValue399.length; )
      switch (chunkFPAJGGOCValue399[chunkFPAJGGOCValue400]) {
        case "\\":
          switch (chunkFPAJGGOCValue399[chunkFPAJGGOCValue400 + 1]) {
            case "c":
              chunkFPAJGGOCHelper373(3);
              break;
            case "x":
              chunkFPAJGGOCHelper373(4);
              break;
            case "u":
              chunkFPAJGGOCValue398.unicode
                ? chunkFPAJGGOCValue399[chunkFPAJGGOCValue400 + 2] === "{"
                  ? chunkFPAJGGOCHelper373(
                      chunkFPAJGGOCValue399.indexOf(
                        "}",
                        chunkFPAJGGOCValue400,
                      ) -
                        chunkFPAJGGOCValue400 +
                        1,
                    )
                  : chunkFPAJGGOCHelper373(6)
                : chunkFPAJGGOCHelper373(2);
              break;
            case "p":
            case "P":
              chunkFPAJGGOCValue398.unicode
                ? chunkFPAJGGOCHelper373(
                    chunkFPAJGGOCValue399.indexOf("}", chunkFPAJGGOCValue400) -
                      chunkFPAJGGOCValue400 +
                      1,
                  )
                : chunkFPAJGGOCHelper373(2);
              break;
            case "k":
              chunkFPAJGGOCHelper373(
                chunkFPAJGGOCValue399.indexOf(">", chunkFPAJGGOCValue400) -
                  chunkFPAJGGOCValue400 +
                  1,
              );
              break;
            default:
              chunkFPAJGGOCHelper373(2);
              break;
          }
          break;
        case "[":
          chunkFPAJGGOCValue402 = /\[(?:\\.|.)*?\]/g;
          chunkFPAJGGOCValue402.lastIndex = chunkFPAJGGOCValue400;
          chunkFPAJGGOCValue402 =
            chunkFPAJGGOCValue402.exec(chunkFPAJGGOCValue399) || [];
          chunkFPAJGGOCHelper373(chunkFPAJGGOCValue402[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          chunkFPAJGGOCHelper372(1);
          break;
        case "{":
          chunkFPAJGGOCValue402 = /\{\d+,?\d*\}/g;
          chunkFPAJGGOCValue402.lastIndex = chunkFPAJGGOCValue400;
          chunkFPAJGGOCValue402 = chunkFPAJGGOCValue402.exec(
            chunkFPAJGGOCValue399,
          );
          chunkFPAJGGOCValue402
            ? chunkFPAJGGOCHelper372(chunkFPAJGGOCValue402[0].length)
            : chunkFPAJGGOCHelper373(1);
          break;
        case "(":
          if (chunkFPAJGGOCValue399[chunkFPAJGGOCValue400 + 1] === "?")
            switch (chunkFPAJGGOCValue399[chunkFPAJGGOCValue400 + 2]) {
              case ":":
                chunkFPAJGGOCValue401 += "(?:";
                chunkFPAJGGOCValue400 += 3;
                chunkFPAJGGOCValue401 += chunkFPAJGGOCHelper371() + "|$)";
                break;
              case "=":
                chunkFPAJGGOCValue401 += "(?=";
                chunkFPAJGGOCValue400 += 3;
                chunkFPAJGGOCValue401 += chunkFPAJGGOCHelper371() + ")";
                break;
              case "!":
                chunkFPAJGGOCValue402 = chunkFPAJGGOCValue400;
                chunkFPAJGGOCValue400 += 3;
                chunkFPAJGGOCHelper371();
                chunkFPAJGGOCValue401 += chunkFPAJGGOCValue399.substr(
                  chunkFPAJGGOCValue402,
                  chunkFPAJGGOCValue400 - chunkFPAJGGOCValue402,
                );
                break;
              case "<":
                switch (chunkFPAJGGOCValue399[chunkFPAJGGOCValue400 + 3]) {
                  case "=":
                  case "!":
                    chunkFPAJGGOCValue402 = chunkFPAJGGOCValue400;
                    chunkFPAJGGOCValue400 += 4;
                    chunkFPAJGGOCHelper371();
                    chunkFPAJGGOCValue401 += chunkFPAJGGOCValue399.substr(
                      chunkFPAJGGOCValue402,
                      chunkFPAJGGOCValue400 - chunkFPAJGGOCValue402,
                    );
                    break;
                  default:
                    chunkFPAJGGOCHelper372(
                      chunkFPAJGGOCValue399.indexOf(
                        ">",
                        chunkFPAJGGOCValue400,
                      ) -
                        chunkFPAJGGOCValue400 +
                        1,
                    );
                    chunkFPAJGGOCValue401 += chunkFPAJGGOCHelper371() + "|$)";
                    break;
                }
                break;
            }
          else {
            chunkFPAJGGOCHelper372(1);
            chunkFPAJGGOCValue401 += chunkFPAJGGOCHelper371() + "|$)";
          }
          break;
        case ")":
          return (++chunkFPAJGGOCValue400, chunkFPAJGGOCValue401);
        default:
          chunkFPAJGGOCHelper373(1);
          break;
      }
    return chunkFPAJGGOCValue401;
  }
  return new RegExp(chunkFPAJGGOCHelper371(), chunkFPAJGGOCParam14.flags);
}
function chunkFPAJGGOCHelper70(chunkFPAJGGOCParam1769) {
  return chunkFPAJGGOCParam1769.rules.find(
    (item) => chunkFPAJGGOCHelper27(item) && item.entry,
  );
}
function chunkFPAJGGOCHelper71(chunkFPAJGGOCParam1730) {
  return chunkFPAJGGOCParam1730.rules.filter(
    (item) => chunkFPAJGGOCHelper30(item) && item.hidden,
  );
}
function chunkFPAJGGOCHelper72(chunkFPAJGGOCParam703, chunkFPAJGGOCParam704) {
  let chunkFPAJGGOCValue1102 = new Set(),
    chunkFPAJGGOCValue1103 = chunkFPAJGGOCHelper70(chunkFPAJGGOCParam703);
  if (!chunkFPAJGGOCValue1103) return new Set(chunkFPAJGGOCParam703.rules);
  let chunkFPAJGGOCValue1104 = [chunkFPAJGGOCValue1103].concat(
    chunkFPAJGGOCHelper71(chunkFPAJGGOCParam703),
  );
  for (let chunkFPAJGGOCValue1875 of chunkFPAJGGOCValue1104)
    chunkFPAJGGOCHelper73(
      chunkFPAJGGOCValue1875,
      chunkFPAJGGOCValue1102,
      chunkFPAJGGOCParam704,
    );
  let chunkFPAJGGOCValue1105 = new Set();
  for (let chunkFPAJGGOCValue1800 of chunkFPAJGGOCParam703.rules)
    (chunkFPAJGGOCValue1102.has(chunkFPAJGGOCValue1800.name) ||
      (chunkFPAJGGOCHelper30(chunkFPAJGGOCValue1800) &&
        chunkFPAJGGOCValue1800.hidden)) &&
      chunkFPAJGGOCValue1105.add(chunkFPAJGGOCValue1800);
  return chunkFPAJGGOCValue1105;
}
function chunkFPAJGGOCHelper73(
  chunkFPAJGGOCParam972,
  chunkFPAJGGOCParam973,
  chunkFPAJGGOCParam974,
) {
  chunkFPAJGGOCParam973.add(chunkFPAJGGOCParam972.name);
  chunkFPAJGGOCHelper53(chunkFPAJGGOCParam972).forEach((item) => {
    if (
      chunkFPAJGGOCHelper41(item) ||
      (chunkFPAJGGOCParam974 && chunkFPAJGGOCHelper44(item))
    ) {
      let chunkFPAJGGOCValue1779 = item.rule.ref;
      chunkFPAJGGOCValue1779 &&
        !chunkFPAJGGOCParam973.has(chunkFPAJGGOCValue1779.name) &&
        chunkFPAJGGOCHelper73(
          chunkFPAJGGOCValue1779,
          chunkFPAJGGOCParam973,
          chunkFPAJGGOCParam974,
        );
    }
  });
}
function _r(chunkFPAJGGOCParam1406) {
  if (chunkFPAJGGOCParam1406.terminal) return chunkFPAJGGOCParam1406.terminal;
  if (chunkFPAJGGOCParam1406.type.ref)
    return chunkFPAJGGOCHelper81(chunkFPAJGGOCParam1406.type.ref)?.terminal;
}
function chunkFPAJGGOCHelper74(chunkFPAJGGOCParam1978) {
  return (
    chunkFPAJGGOCParam1978.hidden &&
    !chunkFPAJGGOCHelper65(chunkFPAJGGOCHelper89(chunkFPAJGGOCParam1978))
  );
}
function chunkFPAJGGOCHelper75(chunkFPAJGGOCParam1695, chunkFPAJGGOCParam1696) {
  return !chunkFPAJGGOCParam1695 || !chunkFPAJGGOCParam1696
    ? []
    : chunkFPAJGGOCHelper77(
        chunkFPAJGGOCParam1695,
        chunkFPAJGGOCParam1696,
        chunkFPAJGGOCParam1695.astNode,
        true,
      );
}
function chunkFPAJGGOCHelper76(
  chunkFPAJGGOCParam897,
  chunkFPAJGGOCParam898,
  chunkFPAJGGOCParam899,
) {
  if (!chunkFPAJGGOCParam897 || !chunkFPAJGGOCParam898) return;
  let chunkFPAJGGOCValue1278 = chunkFPAJGGOCHelper77(
    chunkFPAJGGOCParam897,
    chunkFPAJGGOCParam898,
    chunkFPAJGGOCParam897.astNode,
    true,
  );
  if (chunkFPAJGGOCValue1278.length !== 0)
    return (
      (chunkFPAJGGOCParam899 =
        chunkFPAJGGOCParam899 === undefined
          ? 0
          : Math.max(
              0,
              Math.min(
                chunkFPAJGGOCParam899,
                chunkFPAJGGOCValue1278.length - 1,
              ),
            )),
      chunkFPAJGGOCValue1278[chunkFPAJGGOCParam899]
    );
}
function chunkFPAJGGOCHelper77(
  chunkFPAJGGOCParam864,
  chunkFPAJGGOCParam865,
  chunkFPAJGGOCParam866,
  chunkFPAJGGOCParam867,
) {
  if (!chunkFPAJGGOCParam867) {
    let chunkFPAJGGOCValue1764 = chunkFPAJGGOCHelper49(
      chunkFPAJGGOCParam864.grammarSource,
      chunkFPAJGGOCHelper34,
    );
    if (
      chunkFPAJGGOCValue1764 &&
      chunkFPAJGGOCValue1764.feature === chunkFPAJGGOCParam865
    )
      return [chunkFPAJGGOCParam864];
  }
  return chunkFPAJGGOCHelper5(chunkFPAJGGOCParam864) &&
    chunkFPAJGGOCParam864.astNode === chunkFPAJGGOCParam866
    ? chunkFPAJGGOCParam864.content.flatMap((item) =>
        chunkFPAJGGOCHelper77(
          item,
          chunkFPAJGGOCParam865,
          chunkFPAJGGOCParam866,
          false,
        ),
      )
    : [];
}
function chunkFPAJGGOCHelper78(
  chunkFPAJGGOCParam927,
  chunkFPAJGGOCParam928,
  chunkFPAJGGOCParam929,
) {
  if (!chunkFPAJGGOCParam927) return;
  let chunkFPAJGGOCValue1319 = chunkFPAJGGOCHelper79(
    chunkFPAJGGOCParam927,
    chunkFPAJGGOCParam928,
    chunkFPAJGGOCParam927?.astNode,
  );
  if (chunkFPAJGGOCValue1319.length !== 0)
    return (
      (chunkFPAJGGOCParam929 =
        chunkFPAJGGOCParam929 === undefined
          ? 0
          : Math.max(
              0,
              Math.min(
                chunkFPAJGGOCParam929,
                chunkFPAJGGOCValue1319.length - 1,
              ),
            )),
      chunkFPAJGGOCValue1319[chunkFPAJGGOCParam929]
    );
}
function chunkFPAJGGOCHelper79(
  chunkFPAJGGOCParam446,
  chunkFPAJGGOCParam447,
  chunkFPAJGGOCParam448,
) {
  if (chunkFPAJGGOCParam446.astNode !== chunkFPAJGGOCParam448) return [];
  if (
    chunkFPAJGGOCHelper39(chunkFPAJGGOCParam446.grammarSource) &&
    chunkFPAJGGOCParam446.grammarSource.value === chunkFPAJGGOCParam447
  )
    return [chunkFPAJGGOCParam446];
  let chunkFPAJGGOCValue858 = chunkFPAJGGOCHelper11(
      chunkFPAJGGOCParam446,
    ).iterator(),
    chunkFPAJGGOCValue859,
    chunkFPAJGGOCValue860 = [];
  do
    if (
      ((chunkFPAJGGOCValue859 = chunkFPAJGGOCValue858.next()),
      !chunkFPAJGGOCValue859.done)
    ) {
      let chunkFPAJGGOCValue1513 = chunkFPAJGGOCValue859.value;
      chunkFPAJGGOCValue1513.astNode === chunkFPAJGGOCParam448
        ? chunkFPAJGGOCHelper39(chunkFPAJGGOCValue1513.grammarSource) &&
          chunkFPAJGGOCValue1513.grammarSource.value ===
            chunkFPAJGGOCParam447 &&
          chunkFPAJGGOCValue860.push(chunkFPAJGGOCValue1513)
        : chunkFPAJGGOCValue858.prune();
    }
  while (!chunkFPAJGGOCValue859.done);
  return chunkFPAJGGOCValue860;
}
function chunkFPAJGGOCHelper80(chunkFPAJGGOCParam1108) {
  let chunkFPAJGGOCValue1442 = chunkFPAJGGOCParam1108.astNode;
  for (
    ;
    chunkFPAJGGOCValue1442 === chunkFPAJGGOCParam1108.container?.astNode;

  ) {
    let chunkFPAJGGOCValue1765 = chunkFPAJGGOCHelper49(
      chunkFPAJGGOCParam1108.grammarSource,
      chunkFPAJGGOCHelper34,
    );
    if (chunkFPAJGGOCValue1765) return chunkFPAJGGOCValue1765;
    chunkFPAJGGOCParam1108 = chunkFPAJGGOCParam1108.container;
  }
}
function chunkFPAJGGOCHelper81(chunkFPAJGGOCParam778) {
  let chunkFPAJGGOCValue1190 = chunkFPAJGGOCParam778;
  return (
    chunkFPAJGGOCHelper23(chunkFPAJGGOCValue1190) &&
      (chunkFPAJGGOCHelper32(chunkFPAJGGOCValue1190.$container)
        ? (chunkFPAJGGOCValue1190 =
            chunkFPAJGGOCValue1190.$container.$container)
        : chunkFPAJGGOCHelper27(chunkFPAJGGOCValue1190.$container)
          ? (chunkFPAJGGOCValue1190 = chunkFPAJGGOCValue1190.$container)
          : chunkFPAJGGOCHelper18(chunkFPAJGGOCValue1190.$container)),
    chunkFPAJGGOCHelper82(
      chunkFPAJGGOCParam778,
      chunkFPAJGGOCValue1190,
      new Map(),
    )
  );
}
function chunkFPAJGGOCHelper82(
  chunkFPAJGGOCParam433,
  chunkFPAJGGOCParam434,
  chunkFPAJGGOCParam435,
) {
  function chunkFPAJGGOCHelper389(
    chunkFPAJGGOCParam1484,
    chunkFPAJGGOCParam1485,
  ) {
    let chunkFPAJGGOCValue1723;
    return (
      chunkFPAJGGOCHelper49(chunkFPAJGGOCParam1484, chunkFPAJGGOCHelper34) ||
        (chunkFPAJGGOCValue1723 = chunkFPAJGGOCHelper82(
          chunkFPAJGGOCParam1485,
          chunkFPAJGGOCParam1485,
          chunkFPAJGGOCParam435,
        )),
      chunkFPAJGGOCParam435.set(chunkFPAJGGOCParam433, chunkFPAJGGOCValue1723),
      chunkFPAJGGOCValue1723
    );
  }
  if (chunkFPAJGGOCParam435.has(chunkFPAJGGOCParam433))
    return chunkFPAJGGOCParam435.get(chunkFPAJGGOCParam433);
  chunkFPAJGGOCParam435.set(chunkFPAJGGOCParam433, undefined);
  for (let chunkFPAJGGOCValue1221 of chunkFPAJGGOCHelper53(
    chunkFPAJGGOCParam434,
  ))
    if (
      chunkFPAJGGOCHelper34(chunkFPAJGGOCValue1221) &&
      chunkFPAJGGOCValue1221.feature.toLowerCase() === "name"
    )
      return (
        chunkFPAJGGOCParam435.set(
          chunkFPAJGGOCParam433,
          chunkFPAJGGOCValue1221,
        ),
        chunkFPAJGGOCValue1221
      );
    else if (
      chunkFPAJGGOCHelper41(chunkFPAJGGOCValue1221) &&
      chunkFPAJGGOCHelper27(chunkFPAJGGOCValue1221.rule.ref)
    )
      return chunkFPAJGGOCHelper389(
        chunkFPAJGGOCValue1221,
        chunkFPAJGGOCValue1221.rule.ref,
      );
    else if (
      chunkFPAJGGOCHelper29(chunkFPAJGGOCValue1221) &&
      chunkFPAJGGOCValue1221.typeRef?.ref
    )
      return chunkFPAJGGOCHelper389(
        chunkFPAJGGOCValue1221,
        chunkFPAJGGOCValue1221.typeRef.ref,
      );
}
function chunkFPAJGGOCHelper83(chunkFPAJGGOCParam2091) {
  return chunkFPAJGGOCHelper84(chunkFPAJGGOCParam2091, new Set());
}
function chunkFPAJGGOCHelper84(chunkFPAJGGOCParam688, chunkFPAJGGOCParam689) {
  if (chunkFPAJGGOCParam689.has(chunkFPAJGGOCParam688)) return true;
  chunkFPAJGGOCParam689.add(chunkFPAJGGOCParam688);
  for (let chunkFPAJGGOCValue1390 of chunkFPAJGGOCHelper53(
    chunkFPAJGGOCParam688,
  ))
    if (chunkFPAJGGOCHelper41(chunkFPAJGGOCValue1390)) {
      if (
        !chunkFPAJGGOCValue1390.rule.ref ||
        (chunkFPAJGGOCHelper27(chunkFPAJGGOCValue1390.rule.ref) &&
          !chunkFPAJGGOCHelper84(
            chunkFPAJGGOCValue1390.rule.ref,
            chunkFPAJGGOCParam689,
          ))
      )
        return false;
    } else if (chunkFPAJGGOCHelper34(chunkFPAJGGOCValue1390)) return false;
    else if (chunkFPAJGGOCHelper32(chunkFPAJGGOCValue1390)) return false;
  return !!chunkFPAJGGOCParam688.definition;
}
function chunkFPAJGGOCHelper85(chunkFPAJGGOCParam855) {
  if (chunkFPAJGGOCParam855.inferredType)
    return chunkFPAJGGOCParam855.inferredType.name;
  if (chunkFPAJGGOCParam855.dataType) return chunkFPAJGGOCParam855.dataType;
  if (chunkFPAJGGOCParam855.returnType) {
    let chunkFPAJGGOCValue1741 = chunkFPAJGGOCParam855.returnType.ref;
    if (
      chunkFPAJGGOCValue1741 &&
      (chunkFPAJGGOCHelper27(chunkFPAJGGOCValue1741) ||
        chunkFPAJGGOCHelper24(chunkFPAJGGOCValue1741) ||
        chunkFPAJGGOCHelper31(chunkFPAJGGOCValue1741))
    )
      return chunkFPAJGGOCValue1741.name;
  }
}
function chunkFPAJGGOCHelper86(chunkFPAJGGOCParam714) {
  if (chunkFPAJGGOCHelper27(chunkFPAJGGOCParam714))
    return chunkFPAJGGOCHelper83(chunkFPAJGGOCParam714)
      ? chunkFPAJGGOCParam714.name
      : (chunkFPAJGGOCHelper85(chunkFPAJGGOCParam714) ??
          chunkFPAJGGOCParam714.name);
  if (
    chunkFPAJGGOCHelper24(chunkFPAJGGOCParam714) ||
    chunkFPAJGGOCHelper31(chunkFPAJGGOCParam714) ||
    chunkFPAJGGOCHelper28(chunkFPAJGGOCParam714)
  )
    return chunkFPAJGGOCParam714.name;
  if (chunkFPAJGGOCHelper32(chunkFPAJGGOCParam714)) {
    let chunkFPAJGGOCValue1860 = chunkFPAJGGOCHelper87(chunkFPAJGGOCParam714);
    if (chunkFPAJGGOCValue1860) return chunkFPAJGGOCValue1860;
  } else if (chunkFPAJGGOCHelper23(chunkFPAJGGOCParam714))
    return chunkFPAJGGOCParam714.name;
  throw Error("Cannot get name of Unknown Type");
}
function chunkFPAJGGOCHelper87(chunkFPAJGGOCParam1372) {
  if (chunkFPAJGGOCParam1372.inferredType)
    return chunkFPAJGGOCParam1372.inferredType.name;
  if (chunkFPAJGGOCParam1372.type?.ref)
    return chunkFPAJGGOCHelper86(chunkFPAJGGOCParam1372.type.ref);
}
function chunkFPAJGGOCHelper88(chunkFPAJGGOCParam1586) {
  return chunkFPAJGGOCHelper30(chunkFPAJGGOCParam1586)
    ? (chunkFPAJGGOCParam1586.type?.name ?? "string")
    : (chunkFPAJGGOCHelper85(chunkFPAJGGOCParam1586) ??
        chunkFPAJGGOCParam1586.name);
}
function chunkFPAJGGOCHelper89(chunkFPAJGGOCParam913) {
  let chunkFPAJGGOCValue1296 = {
      s: false,
      i: false,
      u: false,
    },
    chunkFPAJGGOCValue1297 = chunkFPAJGGOCHelper90(
      chunkFPAJGGOCParam913.definition,
      chunkFPAJGGOCValue1296,
    ),
    chunkFPAJGGOCValue1298 = Object.entries(chunkFPAJGGOCValue1296)
      .filter(([, chunkFPAJGGOCParam2312]) => chunkFPAJGGOCParam2312)
      .map(([chunkFPAJGGOCParam2331]) => chunkFPAJGGOCParam2331)
      .join("");
  return new RegExp(chunkFPAJGGOCValue1297, chunkFPAJGGOCValue1298);
}
function chunkFPAJGGOCHelper90(chunkFPAJGGOCParam125, chunkFPAJGGOCParam126) {
  if (chunkFPAJGGOCHelper42(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper91(chunkFPAJGGOCParam125);
  if (chunkFPAJGGOCHelper43(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper92(chunkFPAJGGOCParam125);
  if (chunkFPAJGGOCHelper35(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper95(chunkFPAJGGOCParam125);
  if (chunkFPAJGGOCHelper44(chunkFPAJGGOCParam125)) {
    let chunkFPAJGGOCValue1353 = chunkFPAJGGOCParam125.rule.ref;
    if (!chunkFPAJGGOCValue1353) throw Error("Missing rule reference.");
    return chunkFPAJGGOCHelper97(
      chunkFPAJGGOCHelper90(chunkFPAJGGOCValue1353.definition),
      {
        cardinality: chunkFPAJGGOCParam125.cardinality,
        lookahead: chunkFPAJGGOCParam125.lookahead,
      },
    );
  } else if (chunkFPAJGGOCHelper40(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper94(chunkFPAJGGOCParam125);
  else if (chunkFPAJGGOCHelper46(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper93(chunkFPAJGGOCParam125);
  else if (_n(chunkFPAJGGOCParam125)) {
    let chunkFPAJGGOCValue978 = chunkFPAJGGOCParam125.regex.lastIndexOf("/"),
      chunkFPAJGGOCValue979 = chunkFPAJGGOCParam125.regex.substring(
        1,
        chunkFPAJGGOCValue978,
      ),
      chunkFPAJGGOCValue980 = chunkFPAJGGOCParam125.regex.substring(
        chunkFPAJGGOCValue978 + 1,
      );
    return (
      chunkFPAJGGOCParam126 &&
        ((chunkFPAJGGOCParam126.i = chunkFPAJGGOCValue980.includes("i")),
        (chunkFPAJGGOCParam126.s = chunkFPAJGGOCValue980.includes("s")),
        (chunkFPAJGGOCParam126.u = chunkFPAJGGOCValue980.includes("u"))),
      chunkFPAJGGOCHelper97(chunkFPAJGGOCValue979, {
        cardinality: chunkFPAJGGOCParam125.cardinality,
        lookahead: chunkFPAJGGOCParam125.lookahead,
        wrap: false,
      })
    );
  } else if (chunkFPAJGGOCHelper47(chunkFPAJGGOCParam125))
    return chunkFPAJGGOCHelper97("[\\s\\S]", {
      cardinality: chunkFPAJGGOCParam125.cardinality,
      lookahead: chunkFPAJGGOCParam125.lookahead,
    });
  else throw Error(`Invalid terminal element: ${chunkFPAJGGOCParam125?.$type}`);
}
function chunkFPAJGGOCHelper91(chunkFPAJGGOCParam1241) {
  return chunkFPAJGGOCHelper97(
    chunkFPAJGGOCParam1241.elements
      .map((item) => chunkFPAJGGOCHelper90(item))
      .join("|"),
    {
      cardinality: chunkFPAJGGOCParam1241.cardinality,
      lookahead: chunkFPAJGGOCParam1241.lookahead,
    },
  );
}
function chunkFPAJGGOCHelper92(chunkFPAJGGOCParam1246) {
  return chunkFPAJGGOCHelper97(
    chunkFPAJGGOCParam1246.elements
      .map((item) => chunkFPAJGGOCHelper90(item))
      .join(""),
    {
      cardinality: chunkFPAJGGOCParam1246.cardinality,
      lookahead: chunkFPAJGGOCParam1246.lookahead,
    },
  );
}
function chunkFPAJGGOCHelper93(chunkFPAJGGOCParam1310) {
  return chunkFPAJGGOCHelper97(
    `${"[\\s\\S]"}*?${chunkFPAJGGOCHelper90(chunkFPAJGGOCParam1310.terminal)}`,
    {
      cardinality: chunkFPAJGGOCParam1310.cardinality,
      lookahead: chunkFPAJGGOCParam1310.lookahead,
    },
  );
}
function chunkFPAJGGOCHelper94(chunkFPAJGGOCParam1283) {
  return chunkFPAJGGOCHelper97(
    `(?!${chunkFPAJGGOCHelper90(chunkFPAJGGOCParam1283.terminal)})${"[\\s\\S]"}*?`,
    {
      cardinality: chunkFPAJGGOCParam1283.cardinality,
      lookahead: chunkFPAJGGOCParam1283.lookahead,
    },
  );
}
function chunkFPAJGGOCHelper95(chunkFPAJGGOCParam606) {
  return chunkFPAJGGOCParam606.right
    ? chunkFPAJGGOCHelper97(
        `[${chunkFPAJGGOCHelper96(chunkFPAJGGOCParam606.left)}-${chunkFPAJGGOCHelper96(chunkFPAJGGOCParam606.right)}]`,
        {
          cardinality: chunkFPAJGGOCParam606.cardinality,
          lookahead: chunkFPAJGGOCParam606.lookahead,
          wrap: false,
        },
      )
    : chunkFPAJGGOCHelper97(chunkFPAJGGOCHelper96(chunkFPAJGGOCParam606.left), {
        cardinality: chunkFPAJGGOCParam606.cardinality,
        lookahead: chunkFPAJGGOCParam606.lookahead,
        wrap: false,
      });
}
function chunkFPAJGGOCHelper96(chunkFPAJGGOCParam2127) {
  return chunkFPAJGGOCHelper66(chunkFPAJGGOCParam2127.value);
}
function chunkFPAJGGOCHelper97(chunkFPAJGGOCParam1142, chunkFPAJGGOCParam1143) {
  return (
    (chunkFPAJGGOCParam1143.wrap !== false ||
      chunkFPAJGGOCParam1143.lookahead) &&
      (chunkFPAJGGOCParam1142 = `(${chunkFPAJGGOCParam1143.lookahead ?? ""}${chunkFPAJGGOCParam1142})`),
    chunkFPAJGGOCParam1143.cardinality
      ? `${chunkFPAJGGOCParam1142}${chunkFPAJGGOCParam1143.cardinality}`
      : chunkFPAJGGOCParam1142
  );
}
function chunkFPAJGGOCHelper98(chunkFPAJGGOCParam1036) {
  let chunkFPAJGGOCValue1387 = [],
    chunkFPAJGGOCValue1388 = chunkFPAJGGOCParam1036.Grammar;
  for (let chunkFPAJGGOCValue1820 of chunkFPAJGGOCValue1388.rules)
    chunkFPAJGGOCHelper30(chunkFPAJGGOCValue1820) &&
      chunkFPAJGGOCHelper74(chunkFPAJGGOCValue1820) &&
      or(chunkFPAJGGOCHelper89(chunkFPAJGGOCValue1820)) &&
      chunkFPAJGGOCValue1387.push(chunkFPAJGGOCValue1820.name);
  return {
    multilineCommentRules: chunkFPAJGGOCValue1387,
    nameRegexp: chunkFPAJGGOCValue8,
  };
}
var chunkFPAJGGOCValue67 = Object.prototype.hasOwnProperty,
  chunkFPAJGGOCValue68 = isArrayLikeObjectS(
    function (chunkFPAJGGOCParam1233, chunkFPAJGGOCParam1234) {
      if (
        isArrayLikeObjectX(chunkFPAJGGOCParam1234) ||
        isArrayLikeObjectW(chunkFPAJGGOCParam1234)
      ) {
        isArrayLikeObjectO(
          chunkFPAJGGOCParam1234,
          baseUniqD(chunkFPAJGGOCParam1234),
          chunkFPAJGGOCParam1233,
        );
        return;
      }
      for (var chunkFPAJGGOCValue1534 in chunkFPAJGGOCParam1234)
        chunkFPAJGGOCValue67.call(
          chunkFPAJGGOCParam1234,
          chunkFPAJGGOCValue1534,
        ) &&
          isArrayLikeObjectK(
            chunkFPAJGGOCParam1233,
            chunkFPAJGGOCValue1534,
            chunkFPAJGGOCParam1234[chunkFPAJGGOCValue1534],
          );
    },
  );
function chunkFPAJGGOCHelper99(
  chunkFPAJGGOCParam709,
  chunkFPAJGGOCParam710,
  chunkFPAJGGOCParam711,
) {
  var chunkFPAJGGOCValue1113 = -1,
    chunkFPAJGGOCValue1114 = chunkFPAJGGOCParam709.length;
  chunkFPAJGGOCParam710 < 0 &&
    (chunkFPAJGGOCParam710 =
      -chunkFPAJGGOCParam710 > chunkFPAJGGOCValue1114
        ? 0
        : chunkFPAJGGOCValue1114 + chunkFPAJGGOCParam710);
  chunkFPAJGGOCParam711 =
    chunkFPAJGGOCParam711 > chunkFPAJGGOCValue1114
      ? chunkFPAJGGOCValue1114
      : chunkFPAJGGOCParam711;
  chunkFPAJGGOCParam711 < 0 &&
    (chunkFPAJGGOCParam711 += chunkFPAJGGOCValue1114);
  chunkFPAJGGOCValue1114 =
    chunkFPAJGGOCParam710 > chunkFPAJGGOCParam711
      ? 0
      : (chunkFPAJGGOCParam711 - chunkFPAJGGOCParam710) >>> 0;
  chunkFPAJGGOCParam710 >>>= 0;
  for (
    var chunkFPAJGGOCValue1115 = Array(chunkFPAJGGOCValue1114);
    ++chunkFPAJGGOCValue1113 < chunkFPAJGGOCValue1114;

  )
    chunkFPAJGGOCValue1115[chunkFPAJGGOCValue1113] =
      chunkFPAJGGOCParam709[chunkFPAJGGOCValue1113 + chunkFPAJGGOCParam710];
  return chunkFPAJGGOCValue1115;
}
function chunkFPAJGGOCHelper100(chunkFPAJGGOCParam1163) {
  for (
    var chunkFPAJGGOCValue1491 = -1,
      chunkFPAJGGOCValue1492 =
        chunkFPAJGGOCParam1163 == null ? 0 : chunkFPAJGGOCParam1163.length,
      chunkFPAJGGOCValue1493 = 0,
      chunkFPAJGGOCValue1494 = [];
    ++chunkFPAJGGOCValue1491 < chunkFPAJGGOCValue1492;

  ) {
    var chunkFPAJGGOCValue1495 = chunkFPAJGGOCParam1163[chunkFPAJGGOCValue1491];
    chunkFPAJGGOCValue1495 &&
      (chunkFPAJGGOCValue1494[chunkFPAJGGOCValue1493++] =
        chunkFPAJGGOCValue1495);
  }
  return chunkFPAJGGOCValue1494;
}
function chunkFPAJGGOCHelper101(
  chunkFPAJGGOCParam1209,
  chunkFPAJGGOCParam1210,
  chunkFPAJGGOCParam1211,
  chunkFPAJGGOCParam1212,
) {
  for (
    var chunkFPAJGGOCValue1518 = -1,
      chunkFPAJGGOCValue1519 =
        chunkFPAJGGOCParam1209 == null ? 0 : chunkFPAJGGOCParam1209.length;
    ++chunkFPAJGGOCValue1518 < chunkFPAJGGOCValue1519;

  ) {
    var chunkFPAJGGOCValue1520 = chunkFPAJGGOCParam1209[chunkFPAJGGOCValue1518];
    chunkFPAJGGOCParam1210(
      chunkFPAJGGOCParam1212,
      chunkFPAJGGOCValue1520,
      chunkFPAJGGOCParam1211(chunkFPAJGGOCValue1520),
      chunkFPAJGGOCParam1209,
    );
  }
  return chunkFPAJGGOCParam1212;
}
function chunkFPAJGGOCHelper102(
  chunkFPAJGGOCParam1361,
  chunkFPAJGGOCParam1362,
  chunkFPAJGGOCParam1363,
  chunkFPAJGGOCParam1364,
) {
  return (
    baseUniqU(
      chunkFPAJGGOCParam1361,
      function (
        chunkFPAJGGOCParam1989,
        chunkFPAJGGOCParam1990,
        chunkFPAJGGOCParam1991,
      ) {
        chunkFPAJGGOCParam1362(
          chunkFPAJGGOCParam1364,
          chunkFPAJGGOCParam1989,
          chunkFPAJGGOCParam1363(chunkFPAJGGOCParam1989),
          chunkFPAJGGOCParam1991,
        );
      },
    ),
    chunkFPAJGGOCParam1364
  );
}
function chunkFPAJGGOCHelper103(
  chunkFPAJGGOCParam1242,
  chunkFPAJGGOCParam1243,
) {
  return function (chunkFPAJGGOCParam1407, chunkFPAJGGOCParam1408) {
    var chunkFPAJGGOCValue1677 = isArrayLikeObjectV(chunkFPAJGGOCParam1407)
        ? chunkFPAJGGOCHelper101
        : chunkFPAJGGOCHelper102,
      chunkFPAJGGOCValue1678 = chunkFPAJGGOCParam1243
        ? chunkFPAJGGOCParam1243()
        : {};
    return chunkFPAJGGOCValue1677(
      chunkFPAJGGOCParam1407,
      chunkFPAJGGOCParam1242,
      baseUniqF(chunkFPAJGGOCParam1408, 2),
      chunkFPAJGGOCValue1678,
    );
  };
}
function chunkFPAJGGOCHelper104(
  chunkFPAJGGOCParam290,
  chunkFPAJGGOCParam291,
  chunkFPAJGGOCParam292,
  chunkFPAJGGOCParam293,
) {
  var chunkFPAJGGOCValue718 = -1,
    chunkFPAJGGOCValue719 = baseUniqO,
    chunkFPAJGGOCValue720 = true,
    chunkFPAJGGOCValue721 = chunkFPAJGGOCParam290.length,
    chunkFPAJGGOCValue722 = [],
    chunkFPAJGGOCValue723 = chunkFPAJGGOCParam291.length;
  if (!chunkFPAJGGOCValue721) return chunkFPAJGGOCValue722;
  chunkFPAJGGOCParam292 &&
    (chunkFPAJGGOCParam291 = baseUniqM(
      chunkFPAJGGOCParam291,
      _isArrayLikeObjectV(chunkFPAJGGOCParam292),
    ));
  chunkFPAJGGOCParam293
    ? ((chunkFPAJGGOCValue719 = baseUniqL), (chunkFPAJGGOCValue720 = false))
    : chunkFPAJGGOCParam291.length >= 200 &&
      ((chunkFPAJGGOCValue719 = baseUniqG),
      (chunkFPAJGGOCValue720 = false),
      (chunkFPAJGGOCParam291 = new baseUniqV(chunkFPAJGGOCParam291)));
  outer: for (; ++chunkFPAJGGOCValue718 < chunkFPAJGGOCValue721; ) {
    var chunkFPAJGGOCValue724 = chunkFPAJGGOCParam290[chunkFPAJGGOCValue718],
      chunkFPAJGGOCValue725 =
        chunkFPAJGGOCParam292 == null
          ? chunkFPAJGGOCValue724
          : chunkFPAJGGOCParam292(chunkFPAJGGOCValue724);
    if (
      ((chunkFPAJGGOCValue724 =
        chunkFPAJGGOCParam293 || chunkFPAJGGOCValue724 !== 0
          ? chunkFPAJGGOCValue724
          : 0),
      chunkFPAJGGOCValue720 && chunkFPAJGGOCValue725 === chunkFPAJGGOCValue725)
    ) {
      for (
        var chunkFPAJGGOCValue726 = chunkFPAJGGOCValue723;
        chunkFPAJGGOCValue726--;

      )
        if (
          chunkFPAJGGOCParam291[chunkFPAJGGOCValue726] === chunkFPAJGGOCValue725
        )
          continue outer;
      chunkFPAJGGOCValue722.push(chunkFPAJGGOCValue724);
    } else
      chunkFPAJGGOCValue719(
        chunkFPAJGGOCParam291,
        chunkFPAJGGOCValue725,
        chunkFPAJGGOCParam293,
      ) || chunkFPAJGGOCValue722.push(chunkFPAJGGOCValue724);
  }
  return chunkFPAJGGOCValue722;
}
var $r = isArrayLikeObjectE(
  function (chunkFPAJGGOCParam1826, chunkFPAJGGOCParam1827) {
    return isArrayLikeObjectT(chunkFPAJGGOCParam1826)
      ? chunkFPAJGGOCHelper104(
          chunkFPAJGGOCParam1826,
          baseUniqS(chunkFPAJGGOCParam1827, 1, isArrayLikeObjectT, true),
        )
      : [];
  },
);
function chunkFPAJGGOCHelper105(
  chunkFPAJGGOCParam1185,
  chunkFPAJGGOCParam1186,
  chunkFPAJGGOCParam1187,
) {
  var chunkFPAJGGOCValue1507 =
    chunkFPAJGGOCParam1185 == null ? 0 : chunkFPAJGGOCParam1185.length;
  return chunkFPAJGGOCValue1507
    ? ((chunkFPAJGGOCParam1186 =
        chunkFPAJGGOCParam1187 || chunkFPAJGGOCParam1186 === undefined
          ? 1
          : basePickByU(chunkFPAJGGOCParam1186)),
      chunkFPAJGGOCHelper99(
        chunkFPAJGGOCParam1185,
        chunkFPAJGGOCParam1186 < 0 ? 0 : chunkFPAJGGOCParam1186,
        chunkFPAJGGOCValue1507,
      ))
    : [];
}
function chunkFPAJGGOCHelper106(
  chunkFPAJGGOCParam1054,
  chunkFPAJGGOCParam1055,
  chunkFPAJGGOCParam1056,
) {
  var chunkFPAJGGOCValue1403 =
    chunkFPAJGGOCParam1054 == null ? 0 : chunkFPAJGGOCParam1054.length;
  return chunkFPAJGGOCValue1403
    ? ((chunkFPAJGGOCParam1055 =
        chunkFPAJGGOCParam1056 || chunkFPAJGGOCParam1055 === undefined
          ? 1
          : basePickByU(chunkFPAJGGOCParam1055)),
      (chunkFPAJGGOCParam1055 =
        chunkFPAJGGOCValue1403 - chunkFPAJGGOCParam1055),
      chunkFPAJGGOCHelper99(
        chunkFPAJGGOCParam1054,
        0,
        chunkFPAJGGOCParam1055 < 0 ? 0 : chunkFPAJGGOCParam1055,
      ))
    : [];
}
function chunkFPAJGGOCHelper107(
  chunkFPAJGGOCParam1293,
  chunkFPAJGGOCParam1294,
) {
  for (
    var chunkFPAJGGOCValue1578 = -1,
      chunkFPAJGGOCValue1579 =
        chunkFPAJGGOCParam1293 == null ? 0 : chunkFPAJGGOCParam1293.length;
    ++chunkFPAJGGOCValue1578 < chunkFPAJGGOCValue1579;

  )
    if (
      !chunkFPAJGGOCParam1294(
        chunkFPAJGGOCParam1293[chunkFPAJGGOCValue1578],
        chunkFPAJGGOCValue1578,
        chunkFPAJGGOCParam1293,
      )
    )
      return false;
  return true;
}
function chunkFPAJGGOCHelper108(
  chunkFPAJGGOCParam1269,
  chunkFPAJGGOCParam1270,
) {
  var chunkFPAJGGOCValue1558 = true;
  return (
    baseUniqU(
      chunkFPAJGGOCParam1269,
      function (
        chunkFPAJGGOCParam1828,
        chunkFPAJGGOCParam1829,
        chunkFPAJGGOCParam1830,
      ) {
        return (
          (chunkFPAJGGOCValue1558 = !!chunkFPAJGGOCParam1270(
            chunkFPAJGGOCParam1828,
            chunkFPAJGGOCParam1829,
            chunkFPAJGGOCParam1830,
          )),
          chunkFPAJGGOCValue1558
        );
      },
    ),
    chunkFPAJGGOCValue1558
  );
}
function chunkFPAJGGOCHelper109(
  chunkFPAJGGOCParam1373,
  chunkFPAJGGOCParam1374,
  chunkFPAJGGOCParam1375,
) {
  var chunkFPAJGGOCValue1658 = isArrayLikeObjectV(chunkFPAJGGOCParam1373)
    ? chunkFPAJGGOCHelper107
    : chunkFPAJGGOCHelper108;
  return (
    chunkFPAJGGOCParam1375 &&
      isArrayLikeObjectC(
        chunkFPAJGGOCParam1373,
        chunkFPAJGGOCParam1374,
        chunkFPAJGGOCParam1375,
      ) &&
      (chunkFPAJGGOCParam1374 = undefined),
    chunkFPAJGGOCValue1658(
      chunkFPAJGGOCParam1373,
      baseUniqF(chunkFPAJGGOCParam1374, 3),
    )
  );
}
function chunkFPAJGGOCHelper110(chunkFPAJGGOCParam1898) {
  return chunkFPAJGGOCParam1898 && chunkFPAJGGOCParam1898.length
    ? chunkFPAJGGOCParam1898[0]
    : undefined;
}
function chunkFPAJGGOCHelper111(
  chunkFPAJGGOCParam2085,
  chunkFPAJGGOCParam2086,
) {
  return baseUniqS(
    basePickByI(chunkFPAJGGOCParam2085, chunkFPAJGGOCParam2086),
    1,
  );
}
var chunkFPAJGGOCValue70 = Object.prototype.hasOwnProperty,
  chunkFPAJGGOCValue71 = chunkFPAJGGOCHelper103(
    function (
      chunkFPAJGGOCParam1662,
      chunkFPAJGGOCParam1663,
      chunkFPAJGGOCParam1664,
    ) {
      chunkFPAJGGOCValue70.call(chunkFPAJGGOCParam1662, chunkFPAJGGOCParam1664)
        ? chunkFPAJGGOCParam1662[chunkFPAJGGOCParam1664].push(
            chunkFPAJGGOCParam1663,
          )
        : isArrayLikeObjectJ(chunkFPAJGGOCParam1662, chunkFPAJGGOCParam1664, [
            chunkFPAJGGOCParam1663,
          ]);
    },
  ),
  chunkFPAJGGOCValue72 = Math.max;
function chunkFPAJGGOCHelper112(
  chunkFPAJGGOCParam851,
  chunkFPAJGGOCParam852,
  chunkFPAJGGOCParam853,
  chunkFPAJGGOCParam854,
) {
  chunkFPAJGGOCParam851 = isArrayLikeObjectW(chunkFPAJGGOCParam851)
    ? chunkFPAJGGOCParam851
    : baseUniqI(chunkFPAJGGOCParam851);
  chunkFPAJGGOCParam853 =
    chunkFPAJGGOCParam853 && !chunkFPAJGGOCParam854
      ? basePickByU(chunkFPAJGGOCParam853)
      : 0;
  var chunkFPAJGGOCValue1253 = chunkFPAJGGOCParam851.length;
  return (
    chunkFPAJGGOCParam853 < 0 &&
      (chunkFPAJGGOCParam853 = chunkFPAJGGOCValue72(
        chunkFPAJGGOCValue1253 + chunkFPAJGGOCParam853,
        0,
      )),
    basePickByN(chunkFPAJGGOCParam851)
      ? chunkFPAJGGOCParam853 <= chunkFPAJGGOCValue1253 &&
        chunkFPAJGGOCParam851.indexOf(
          chunkFPAJGGOCParam852,
          chunkFPAJGGOCParam853,
        ) > -1
      : !!chunkFPAJGGOCValue1253 &&
        baseUniqK(
          chunkFPAJGGOCParam851,
          chunkFPAJGGOCParam852,
          chunkFPAJGGOCParam853,
        ) > -1
  );
}
var chunkFPAJGGOCValue73 = Math.max;
function ui(
  chunkFPAJGGOCParam1083,
  chunkFPAJGGOCParam1084,
  chunkFPAJGGOCParam1085,
) {
  var chunkFPAJGGOCValue1424 =
    chunkFPAJGGOCParam1083 == null ? 0 : chunkFPAJGGOCParam1083.length;
  if (!chunkFPAJGGOCValue1424) return -1;
  var chunkFPAJGGOCValue1425 =
    chunkFPAJGGOCParam1085 == null ? 0 : basePickByU(chunkFPAJGGOCParam1085);
  return (
    chunkFPAJGGOCValue1425 < 0 &&
      (chunkFPAJGGOCValue1425 = chunkFPAJGGOCValue73(
        chunkFPAJGGOCValue1424 + chunkFPAJGGOCValue1425,
        0,
      )),
    baseUniqK(
      chunkFPAJGGOCParam1083,
      chunkFPAJGGOCParam1084,
      chunkFPAJGGOCValue1425,
    )
  );
}
function chunkFPAJGGOCHelper113(chunkFPAJGGOCParam2066) {
  return (
    isArrayLikeObjectH(chunkFPAJGGOCParam2066) &&
    isArrayLikeObjectU(chunkFPAJGGOCParam2066) == "[object RegExp]"
  );
}
var chunkFPAJGGOCValue75 =
    isArrayLikeObjectUnderscore && isArrayLikeObjectUnderscore.isRegExp,
  chunkFPAJGGOCValue76 = chunkFPAJGGOCValue75
    ? _isArrayLikeObjectV(chunkFPAJGGOCValue75)
    : chunkFPAJGGOCHelper113;
function chunkFPAJGGOCHelper114(chunkFPAJGGOCParam454) {
  if (typeof chunkFPAJGGOCParam454 != "function")
    throw TypeError("Expected a function");
  return function () {
    var chunkFPAJGGOCValue1005 = arguments;
    switch (chunkFPAJGGOCValue1005.length) {
      case 0:
        return !chunkFPAJGGOCParam454.call(this);
      case 1:
        return !chunkFPAJGGOCParam454.call(this, chunkFPAJGGOCValue1005[0]);
      case 2:
        return !chunkFPAJGGOCParam454.call(
          this,
          chunkFPAJGGOCValue1005[0],
          chunkFPAJGGOCValue1005[1],
        );
      case 3:
        return !chunkFPAJGGOCParam454.call(
          this,
          chunkFPAJGGOCValue1005[0],
          chunkFPAJGGOCValue1005[1],
          chunkFPAJGGOCValue1005[2],
        );
    }
    return !chunkFPAJGGOCParam454.apply(this, chunkFPAJGGOCValue1005);
  };
}
function _i(chunkFPAJGGOCParam919, chunkFPAJGGOCParam920) {
  if (chunkFPAJGGOCParam919 == null) return {};
  var chunkFPAJGGOCValue1307 = baseUniqM(
    baseUniqB(chunkFPAJGGOCParam919),
    function (chunkFPAJGGOCParam2153) {
      return [chunkFPAJGGOCParam2153];
    },
  );
  return (
    (chunkFPAJGGOCParam920 = baseUniqF(chunkFPAJGGOCParam920)),
    basePickByT(
      chunkFPAJGGOCParam919,
      chunkFPAJGGOCValue1307,
      function (chunkFPAJGGOCParam2056, chunkFPAJGGOCParam2057) {
        return chunkFPAJGGOCParam920(
          chunkFPAJGGOCParam2056,
          chunkFPAJGGOCParam2057[0],
        );
      },
    )
  );
}
function chunkFPAJGGOCHelper115(
  chunkFPAJGGOCParam1812,
  chunkFPAJGGOCParam1813,
) {
  return (isArrayLikeObjectV(chunkFPAJGGOCParam1812) ? baseUniqX : _baseUniqO)(
    chunkFPAJGGOCParam1812,
    chunkFPAJGGOCHelper114(baseUniqF(chunkFPAJGGOCParam1813, 3)),
  );
}
function chunkFPAJGGOCHelper116(
  chunkFPAJGGOCParam1284,
  chunkFPAJGGOCParam1285,
) {
  var chunkFPAJGGOCValue1571;
  return (
    baseUniqU(
      chunkFPAJGGOCParam1284,
      function (
        chunkFPAJGGOCParam1839,
        chunkFPAJGGOCParam1840,
        chunkFPAJGGOCParam1841,
      ) {
        return (
          (chunkFPAJGGOCValue1571 = chunkFPAJGGOCParam1285(
            chunkFPAJGGOCParam1839,
            chunkFPAJGGOCParam1840,
            chunkFPAJGGOCParam1841,
          )),
          !chunkFPAJGGOCValue1571
        );
      },
    ),
    !!chunkFPAJGGOCValue1571
  );
}
function chunkFPAJGGOCHelper117(
  chunkFPAJGGOCParam1376,
  chunkFPAJGGOCParam1377,
  chunkFPAJGGOCParam1378,
) {
  var chunkFPAJGGOCValue1659 = isArrayLikeObjectV(chunkFPAJGGOCParam1376)
    ? baseUniqUnderscore
    : chunkFPAJGGOCHelper116;
  return (
    chunkFPAJGGOCParam1378 &&
      isArrayLikeObjectC(
        chunkFPAJGGOCParam1376,
        chunkFPAJGGOCParam1377,
        chunkFPAJGGOCParam1378,
      ) &&
      (chunkFPAJGGOCParam1377 = undefined),
    chunkFPAJGGOCValue1659(
      chunkFPAJGGOCParam1376,
      baseUniqF(chunkFPAJGGOCParam1377, 3),
    )
  );
}
function chunkFPAJGGOCHelper118(chunkFPAJGGOCParam1937) {
  return chunkFPAJGGOCParam1937 && chunkFPAJGGOCParam1937.length
    ? baseUniqT(chunkFPAJGGOCParam1937)
    : [];
}
function chunkFPAJGGOCHelper119(chunkFPAJGGOCParam1623) {
  console && console.error && console.error(`Error: ${chunkFPAJGGOCParam1623}`);
}
function chunkFPAJGGOCHelper120(chunkFPAJGGOCParam1624) {
  console && console.warn && console.warn(`Warning: ${chunkFPAJGGOCParam1624}`);
}
function chunkFPAJGGOCHelper121(chunkFPAJGGOCParam1341) {
  let chunkFPAJGGOCValue1628 = new Date().getTime(),
    chunkFPAJGGOCValue1629 = chunkFPAJGGOCParam1341();
  return {
    time: new Date().getTime() - chunkFPAJGGOCValue1628,
    value: chunkFPAJGGOCValue1629,
  };
}
function chunkFPAJGGOCHelper122(chunkFPAJGGOCParam1224) {
  function chunkFPAJGGOCHelper394() {}
  chunkFPAJGGOCHelper394.prototype = chunkFPAJGGOCParam1224;
  let chunkFPAJGGOCValue1525 = new chunkFPAJGGOCHelper394();
  function chunkFPAJGGOCHelper395() {
    return typeof chunkFPAJGGOCValue1525.bar;
  }
  return (
    chunkFPAJGGOCHelper395(),
    chunkFPAJGGOCHelper395(),
    chunkFPAJGGOCParam1224
  );
}
function chunkFPAJGGOCHelper123(chunkFPAJGGOCParam1954) {
  return chunkFPAJGGOCHelper124(chunkFPAJGGOCParam1954)
    ? chunkFPAJGGOCParam1954.LABEL
    : chunkFPAJGGOCParam1954.name;
}
function chunkFPAJGGOCHelper124(chunkFPAJGGOCParam1917) {
  return (
    basePickByN(chunkFPAJGGOCParam1917.LABEL) &&
    chunkFPAJGGOCParam1917.LABEL !== ""
  );
}
var chunkFPAJGGOCValue78 = class {
    get definition() {
      return this._definition;
    }
    set definition(chunkFPAJGGOCParam1955) {
      this._definition = chunkFPAJGGOCParam1955;
    }
    constructor(chunkFPAJGGOCParam1992) {
      this._definition = chunkFPAJGGOCParam1992;
    }
    accept(chunkFPAJGGOCParam1366) {
      chunkFPAJGGOCParam1366.visit(this);
      _baseUniqS(this.definition, (chunkFPAJGGOCParam2117) => {
        chunkFPAJGGOCParam2117.accept(chunkFPAJGGOCParam1366);
      });
    }
  },
  chunkFPAJGGOCValue79 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1232) {
      super([]);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1232,
          (chunkFPAJGGOCParam2234) => chunkFPAJGGOCParam2234 !== undefined,
        ),
      );
    }
    set definition(chunkFPAJGGOCParam2231) {}
    get definition() {
      return this.referencedRule === undefined
        ? []
        : this.referencedRule.definition;
    }
    accept(chunkFPAJGGOCParam2141) {
      chunkFPAJGGOCParam2141.visit(this);
    }
  },
  chunkFPAJGGOCValue80 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1144) {
      super(chunkFPAJGGOCParam1144.definition);
      this.orgText = "";
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1144,
          (chunkFPAJGGOCParam2235) => chunkFPAJGGOCParam2235 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue81 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1086) {
      super(chunkFPAJGGOCParam1086.definition);
      this.ignoreAmbiguities = false;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1086,
          (chunkFPAJGGOCParam2236) => chunkFPAJGGOCParam2236 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue82 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1164) {
      super(chunkFPAJGGOCParam1164.definition);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1164,
          (chunkFPAJGGOCParam2237) => chunkFPAJGGOCParam2237 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue83 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1165) {
      super(chunkFPAJGGOCParam1165.definition);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1165,
          (chunkFPAJGGOCParam2238) => chunkFPAJGGOCParam2238 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue84 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1166) {
      super(chunkFPAJGGOCParam1166.definition);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1166,
          (chunkFPAJGGOCParam2239) => chunkFPAJGGOCParam2239 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue85 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1167) {
      super(chunkFPAJGGOCParam1167.definition);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1167,
          (chunkFPAJGGOCParam2240) => chunkFPAJGGOCParam2240 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue86 = class extends chunkFPAJGGOCValue78 {
    constructor(chunkFPAJGGOCParam1168) {
      super(chunkFPAJGGOCParam1168.definition);
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1168,
          (chunkFPAJGGOCParam2241) => chunkFPAJGGOCParam2241 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue87 = class extends chunkFPAJGGOCValue78 {
    get definition() {
      return this._definition;
    }
    set definition(chunkFPAJGGOCParam1956) {
      this._definition = chunkFPAJGGOCParam1956;
    }
    constructor(chunkFPAJGGOCParam818) {
      super(chunkFPAJGGOCParam818.definition);
      this.idx = 1;
      this.ignoreAmbiguities = false;
      this.hasPredicates = false;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam818,
          (chunkFPAJGGOCParam2242) => chunkFPAJGGOCParam2242 !== undefined,
        ),
      );
    }
  },
  chunkFPAJGGOCValue88 = class {
    constructor(chunkFPAJGGOCParam1317) {
      this.idx = 1;
      chunkFPAJGGOCValue68(
        this,
        _i(
          chunkFPAJGGOCParam1317,
          (chunkFPAJGGOCParam2243) => chunkFPAJGGOCParam2243 !== undefined,
        ),
      );
    }
    accept(chunkFPAJGGOCParam2142) {
      chunkFPAJGGOCParam2142.visit(this);
    }
  };
function chunkFPAJGGOCHelper125(chunkFPAJGGOCParam2145) {
  return basePickByI(chunkFPAJGGOCParam2145, chunkFPAJGGOCHelper126);
}
function chunkFPAJGGOCHelper126(chunkFPAJGGOCParam29) {
  function chunkFPAJGGOCHelper374(chunkFPAJGGOCParam2128) {
    return basePickByI(chunkFPAJGGOCParam2128, chunkFPAJGGOCHelper126);
  }
  if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue79) {
    let chunkFPAJGGOCValue1572 = {
      type: "NonTerminal",
      name: chunkFPAJGGOCParam29.nonTerminalName,
      idx: chunkFPAJGGOCParam29.idx,
    };
    return (
      basePickByN(chunkFPAJGGOCParam29.label) &&
        (chunkFPAJGGOCValue1572.label = chunkFPAJGGOCParam29.label),
      chunkFPAJGGOCValue1572
    );
  } else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue81)
    return {
      type: "Alternative",
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue82)
    return {
      type: "Option",
      idx: chunkFPAJGGOCParam29.idx,
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue83)
    return {
      type: "RepetitionMandatory",
      idx: chunkFPAJGGOCParam29.idx,
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue84)
    return {
      type: "RepetitionMandatoryWithSeparator",
      idx: chunkFPAJGGOCParam29.idx,
      separator: chunkFPAJGGOCHelper126(
        new chunkFPAJGGOCValue88({
          terminalType: chunkFPAJGGOCParam29.separator,
        }),
      ),
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue86)
    return {
      type: "RepetitionWithSeparator",
      idx: chunkFPAJGGOCParam29.idx,
      separator: chunkFPAJGGOCHelper126(
        new chunkFPAJGGOCValue88({
          terminalType: chunkFPAJGGOCParam29.separator,
        }),
      ),
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue85)
    return {
      type: "Repetition",
      idx: chunkFPAJGGOCParam29.idx,
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue87)
    return {
      type: "Alternation",
      idx: chunkFPAJGGOCParam29.idx,
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue88) {
    let chunkFPAJGGOCValue1036 = {
      type: "Terminal",
      name: chunkFPAJGGOCParam29.terminalType.name,
      label: chunkFPAJGGOCHelper123(chunkFPAJGGOCParam29.terminalType),
      idx: chunkFPAJGGOCParam29.idx,
    };
    basePickByN(chunkFPAJGGOCParam29.label) &&
      (chunkFPAJGGOCValue1036.terminalLabel = chunkFPAJGGOCParam29.label);
    let chunkFPAJGGOCValue1037 = chunkFPAJGGOCParam29.terminalType.PATTERN;
    return (
      chunkFPAJGGOCParam29.terminalType.PATTERN &&
        (chunkFPAJGGOCValue1036.pattern = chunkFPAJGGOCValue76(
          chunkFPAJGGOCValue1037,
        )
          ? chunkFPAJGGOCValue1037.source
          : chunkFPAJGGOCValue1037),
      chunkFPAJGGOCValue1036
    );
  } else if (chunkFPAJGGOCParam29 instanceof chunkFPAJGGOCValue80)
    return {
      type: "Rule",
      name: chunkFPAJGGOCParam29.name,
      orgText: chunkFPAJGGOCParam29.orgText,
      definition: chunkFPAJGGOCHelper374(chunkFPAJGGOCParam29.definition),
    };
  else throw Error("non exhaustive match");
}
var chunkFPAJGGOCValue89 = class {
  visit(chunkFPAJGGOCParam187) {
    let chunkFPAJGGOCValue591 = chunkFPAJGGOCParam187;
    switch (chunkFPAJGGOCValue591.constructor) {
      case chunkFPAJGGOCValue79:
        return this.visitNonTerminal(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue81:
        return this.visitAlternative(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue82:
        return this.visitOption(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue83:
        return this.visitRepetitionMandatory(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue84:
        return this.visitRepetitionMandatoryWithSeparator(
          chunkFPAJGGOCValue591,
        );
      case chunkFPAJGGOCValue86:
        return this.visitRepetitionWithSeparator(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue85:
        return this.visitRepetition(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue87:
        return this.visitAlternation(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue88:
        return this.visitTerminal(chunkFPAJGGOCValue591);
      case chunkFPAJGGOCValue80:
        return this.visitRule(chunkFPAJGGOCValue591);
      default:
        throw Error("non exhaustive match");
    }
  }
  visitNonTerminal(chunkFPAJGGOCParam2212) {}
  visitAlternative(chunkFPAJGGOCParam2213) {}
  visitOption(chunkFPAJGGOCParam2260) {}
  visitRepetition(chunkFPAJGGOCParam2216) {}
  visitRepetitionMandatory(chunkFPAJGGOCParam2168) {}
  visitRepetitionMandatoryWithSeparator(chunkFPAJGGOCParam2105) {}
  visitRepetitionWithSeparator(chunkFPAJGGOCParam2154) {}
  visitAlternation(chunkFPAJGGOCParam2214) {}
  visitTerminal(chunkFPAJGGOCParam2244) {}
  visitRule(chunkFPAJGGOCParam2297) {}
};
function chunkFPAJGGOCHelper127(chunkFPAJGGOCParam888) {
  return (
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue81 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue82 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue85 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue83 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue84 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue86 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue88 ||
    chunkFPAJGGOCParam888 instanceof chunkFPAJGGOCValue80
  );
}
function chunkFPAJGGOCHelper128(
  chunkFPAJGGOCParam549,
  chunkFPAJGGOCParam550 = [],
) {
  return chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue82 ||
    chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue85 ||
    chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue86
    ? true
    : chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue87
      ? chunkFPAJGGOCHelper117(
          chunkFPAJGGOCParam549.definition,
          (chunkFPAJGGOCParam2298) =>
            chunkFPAJGGOCHelper128(
              chunkFPAJGGOCParam2298,
              chunkFPAJGGOCParam550,
            ),
        )
      : chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue79 &&
          chunkFPAJGGOCHelper112(chunkFPAJGGOCParam550, chunkFPAJGGOCParam549)
        ? false
        : chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue78
          ? (chunkFPAJGGOCParam549 instanceof chunkFPAJGGOCValue79 &&
              chunkFPAJGGOCParam550.push(chunkFPAJGGOCParam549),
            chunkFPAJGGOCHelper109(
              chunkFPAJGGOCParam549.definition,
              (chunkFPAJGGOCParam2299) =>
                chunkFPAJGGOCHelper128(
                  chunkFPAJGGOCParam2299,
                  chunkFPAJGGOCParam550,
                ),
            ))
          : false;
}
function chunkFPAJGGOCHelper129(chunkFPAJGGOCParam2106) {
  return chunkFPAJGGOCParam2106 instanceof chunkFPAJGGOCValue87;
}
function chunkFPAJGGOCHelper130(chunkFPAJGGOCParam465) {
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue79) return "SUBRULE";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue82) return "OPTION";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue87) return "OR";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue83)
    return "AT_LEAST_ONE";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue84)
    return "AT_LEAST_ONE_SEP";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue86) return "MANY_SEP";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue85) return "MANY";
  if (chunkFPAJGGOCParam465 instanceof chunkFPAJGGOCValue88) return "CONSUME";
  throw Error("non exhaustive match");
}
var chunkFPAJGGOCValue90 = class {
  walk(chunkFPAJGGOCParam197, chunkFPAJGGOCParam198 = []) {
    _baseUniqS(
      chunkFPAJGGOCParam197.definition,
      (chunkFPAJGGOCParam214, chunkFPAJGGOCParam215) => {
        let chunkFPAJGGOCValue624 = chunkFPAJGGOCHelper105(
          chunkFPAJGGOCParam197.definition,
          chunkFPAJGGOCParam215 + 1,
        );
        if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue79)
          this.walkProdRef(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue88)
          this.walkTerminal(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue81)
          this.walkFlat(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue82)
          this.walkOption(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue83)
          this.walkAtLeastOne(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue84)
          this.walkAtLeastOneSep(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue86)
          this.walkManySep(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue85)
          this.walkMany(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else if (chunkFPAJGGOCParam214 instanceof chunkFPAJGGOCValue87)
          this.walkOr(
            chunkFPAJGGOCParam214,
            chunkFPAJGGOCValue624,
            chunkFPAJGGOCParam198,
          );
        else throw Error("non exhaustive match");
      },
    );
  }
  walkTerminal(
    chunkFPAJGGOCParam2197,
    chunkFPAJGGOCParam2198,
    chunkFPAJGGOCParam2199,
  ) {}
  walkProdRef(
    chunkFPAJGGOCParam2204,
    chunkFPAJGGOCParam2205,
    chunkFPAJGGOCParam2206,
  ) {}
  walkFlat(
    chunkFPAJGGOCParam1731,
    chunkFPAJGGOCParam1732,
    chunkFPAJGGOCParam1733,
  ) {
    let chunkFPAJGGOCValue1821 = chunkFPAJGGOCParam1732.concat(
      chunkFPAJGGOCParam1733,
    );
    this.walk(chunkFPAJGGOCParam1731, chunkFPAJGGOCValue1821);
  }
  walkOption(
    chunkFPAJGGOCParam1697,
    chunkFPAJGGOCParam1698,
    chunkFPAJGGOCParam1699,
  ) {
    let chunkFPAJGGOCValue1813 = chunkFPAJGGOCParam1698.concat(
      chunkFPAJGGOCParam1699,
    );
    this.walk(chunkFPAJGGOCParam1697, chunkFPAJGGOCValue1813);
  }
  walkAtLeastOne(
    chunkFPAJGGOCParam1352,
    chunkFPAJGGOCParam1353,
    chunkFPAJGGOCParam1354,
  ) {
    let chunkFPAJGGOCValue1642 = [
      new chunkFPAJGGOCValue82({
        definition: chunkFPAJGGOCParam1352.definition,
      }),
    ].concat(chunkFPAJGGOCParam1353, chunkFPAJGGOCParam1354);
    this.walk(chunkFPAJGGOCParam1352, chunkFPAJGGOCValue1642);
  }
  walkAtLeastOneSep(
    chunkFPAJGGOCParam1625,
    chunkFPAJGGOCParam1626,
    chunkFPAJGGOCParam1627,
  ) {
    let chunkFPAJGGOCValue1790 = chunkFPAJGGOCHelper131(
      chunkFPAJGGOCParam1625,
      chunkFPAJGGOCParam1626,
      chunkFPAJGGOCParam1627,
    );
    this.walk(chunkFPAJGGOCParam1625, chunkFPAJGGOCValue1790);
  }
  walkMany(
    chunkFPAJGGOCParam1383,
    chunkFPAJGGOCParam1384,
    chunkFPAJGGOCParam1385,
  ) {
    let chunkFPAJGGOCValue1664 = [
      new chunkFPAJGGOCValue82({
        definition: chunkFPAJGGOCParam1383.definition,
      }),
    ].concat(chunkFPAJGGOCParam1384, chunkFPAJGGOCParam1385);
    this.walk(chunkFPAJGGOCParam1383, chunkFPAJGGOCValue1664);
  }
  walkManySep(
    chunkFPAJGGOCParam1685,
    chunkFPAJGGOCParam1686,
    chunkFPAJGGOCParam1687,
  ) {
    let chunkFPAJGGOCValue1803 = chunkFPAJGGOCHelper131(
      chunkFPAJGGOCParam1685,
      chunkFPAJGGOCParam1686,
      chunkFPAJGGOCParam1687,
    );
    this.walk(chunkFPAJGGOCParam1685, chunkFPAJGGOCValue1803);
  }
  walkOr(
    chunkFPAJGGOCParam1193,
    chunkFPAJGGOCParam1194,
    chunkFPAJGGOCParam1195,
  ) {
    let chunkFPAJGGOCValue1508 = chunkFPAJGGOCParam1194.concat(
      chunkFPAJGGOCParam1195,
    );
    _baseUniqS(chunkFPAJGGOCParam1193.definition, (chunkFPAJGGOCParam1614) => {
      let chunkFPAJGGOCValue1784 = new chunkFPAJGGOCValue81({
        definition: [chunkFPAJGGOCParam1614],
      });
      this.walk(chunkFPAJGGOCValue1784, chunkFPAJGGOCValue1508);
    });
  }
};
function chunkFPAJGGOCHelper131(
  chunkFPAJGGOCParam1169,
  chunkFPAJGGOCParam1170,
  chunkFPAJGGOCParam1171,
) {
  return [
    new chunkFPAJGGOCValue82({
      definition: [
        new chunkFPAJGGOCValue88({
          terminalType: chunkFPAJGGOCParam1169.separator,
        }),
      ].concat(chunkFPAJGGOCParam1169.definition),
    }),
  ].concat(chunkFPAJGGOCParam1170, chunkFPAJGGOCParam1171);
}
function chunkFPAJGGOCHelper132(chunkFPAJGGOCParam930) {
  if (chunkFPAJGGOCParam930 instanceof chunkFPAJGGOCValue79)
    return chunkFPAJGGOCHelper132(chunkFPAJGGOCParam930.referencedRule);
  if (chunkFPAJGGOCParam930 instanceof chunkFPAJGGOCValue88)
    return chunkFPAJGGOCHelper135(chunkFPAJGGOCParam930);
  if (chunkFPAJGGOCHelper127(chunkFPAJGGOCParam930))
    return chunkFPAJGGOCHelper133(chunkFPAJGGOCParam930);
  if (chunkFPAJGGOCHelper129(chunkFPAJGGOCParam930))
    return chunkFPAJGGOCHelper134(chunkFPAJGGOCParam930);
  throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper133(chunkFPAJGGOCParam756) {
  let chunkFPAJGGOCValue1159 = [],
    chunkFPAJGGOCValue1160 = chunkFPAJGGOCParam756.definition,
    chunkFPAJGGOCValue1161 = 0,
    chunkFPAJGGOCValue1162 =
      chunkFPAJGGOCValue1160.length > chunkFPAJGGOCValue1161,
    chunkFPAJGGOCValue1163,
    chunkFPAJGGOCValue1164 = true;
  for (; chunkFPAJGGOCValue1162 && chunkFPAJGGOCValue1164; ) {
    chunkFPAJGGOCValue1163 = chunkFPAJGGOCValue1160[chunkFPAJGGOCValue1161];
    chunkFPAJGGOCValue1164 = chunkFPAJGGOCHelper128(chunkFPAJGGOCValue1163);
    chunkFPAJGGOCValue1159 = chunkFPAJGGOCValue1159.concat(
      chunkFPAJGGOCHelper132(chunkFPAJGGOCValue1163),
    );
    chunkFPAJGGOCValue1161 += 1;
    chunkFPAJGGOCValue1162 =
      chunkFPAJGGOCValue1160.length > chunkFPAJGGOCValue1161;
  }
  return chunkFPAJGGOCHelper118(chunkFPAJGGOCValue1159);
}
function chunkFPAJGGOCHelper134(chunkFPAJGGOCParam1770) {
  return chunkFPAJGGOCHelper118(
    basePickByL(
      basePickByI(chunkFPAJGGOCParam1770.definition, (chunkFPAJGGOCParam2313) =>
        chunkFPAJGGOCHelper132(chunkFPAJGGOCParam2313),
      ),
    ),
  );
}
function chunkFPAJGGOCHelper135(chunkFPAJGGOCParam2092) {
  return [chunkFPAJGGOCParam2092.terminalType];
}
var chunkFPAJGGOCValue92 = class extends chunkFPAJGGOCValue90 {
  constructor(chunkFPAJGGOCParam1610) {
    super();
    this.topProd = chunkFPAJGGOCParam1610;
    this.follows = {};
  }
  startWalking() {
    return (this.walk(this.topProd), this.follows);
  }
  walkTerminal(
    chunkFPAJGGOCParam2200,
    chunkFPAJGGOCParam2201,
    chunkFPAJGGOCParam2202,
  ) {}
  walkProdRef(
    chunkFPAJGGOCParam1072,
    chunkFPAJGGOCParam1073,
    chunkFPAJGGOCParam1074,
  ) {
    let chunkFPAJGGOCValue1411 =
        chunkFPAJGGOCHelper137(
          chunkFPAJGGOCParam1072.referencedRule,
          chunkFPAJGGOCParam1072.idx,
        ) + this.topProd.name,
      chunkFPAJGGOCValue1412 = chunkFPAJGGOCHelper132(
        new chunkFPAJGGOCValue81({
          definition: chunkFPAJGGOCParam1073.concat(chunkFPAJGGOCParam1074),
        }),
      );
    this.follows[chunkFPAJGGOCValue1411] = chunkFPAJGGOCValue1412;
  }
};
function chunkFPAJGGOCHelper136(chunkFPAJGGOCParam1337) {
  let chunkFPAJGGOCValue1624 = {};
  return (
    _baseUniqS(chunkFPAJGGOCParam1337, (chunkFPAJGGOCParam1957) => {
      chunkFPAJGGOCValue68(
        chunkFPAJGGOCValue1624,
        new chunkFPAJGGOCValue92(chunkFPAJGGOCParam1957).startWalking(),
      );
    }),
    chunkFPAJGGOCValue1624
  );
}
function chunkFPAJGGOCHelper137(
  chunkFPAJGGOCParam2067,
  chunkFPAJGGOCParam2068,
) {
  return chunkFPAJGGOCParam2067.name + chunkFPAJGGOCParam2068 + "_~IN~_";
}
var chunkFPAJGGOCValue93 = {},
  chunkFPAJGGOCValue94 = new chunkFPAJGGOCValue60();
function chunkFPAJGGOCHelper138(chunkFPAJGGOCParam1196) {
  let t = chunkFPAJGGOCParam1196.toString();
  if (chunkFPAJGGOCValue93.hasOwnProperty(t)) return chunkFPAJGGOCValue93[t];
  {
    let chunkFPAJGGOCValue1838 = chunkFPAJGGOCValue94.pattern(t);
    return (
      (chunkFPAJGGOCValue93[t] = chunkFPAJGGOCValue1838),
      chunkFPAJGGOCValue1838
    );
  }
}
function chunkFPAJGGOCHelper139() {
  chunkFPAJGGOCValue93 = {};
}
function chunkFPAJGGOCHelper140(
  chunkFPAJGGOCParam122,
  chunkFPAJGGOCParam123 = false,
) {
  try {
    let chunkFPAJGGOCValue1804 = chunkFPAJGGOCHelper138(chunkFPAJGGOCParam122);
    return chunkFPAJGGOCHelper141(
      chunkFPAJGGOCValue1804.value,
      {},
      chunkFPAJGGOCValue1804.flags.ignoreCase,
    );
  } catch (chunkFPAJGGOCValue573) {
    if (
      chunkFPAJGGOCValue573.message ===
      "Complement Sets are not supported for first char optimization"
    )
      chunkFPAJGGOCParam123 &&
        chunkFPAJGGOCHelper120(`${'Unable to use "first char" lexer optimizations:\n'}\tUnable to optimize: < ${chunkFPAJGGOCParam122.toString()} >\n	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let chunkFPAJGGOCValue819 = "";
      chunkFPAJGGOCParam123 &&
        (chunkFPAJGGOCValue819 =
          "\n\tThis will disable the lexer's first char optimizations.\n\tSee: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.");
      chunkFPAJGGOCHelper119(
        `${'Unable to use "first char" lexer optimizations:\n'}\n\tFailed parsing: < ${chunkFPAJGGOCParam122.toString()} >\n\tUsing the @chevrotain/regexp-to-ast library\n	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` +
          chunkFPAJGGOCValue819,
      );
    }
  }
  return [];
}
function chunkFPAJGGOCHelper141(
  chunkFPAJGGOCParam20,
  chunkFPAJGGOCParam21,
  chunkFPAJGGOCParam22,
) {
  switch (chunkFPAJGGOCParam20.type) {
    case "Disjunction":
      for (
        let chunkFPAJGGOCValue1835 = 0;
        chunkFPAJGGOCValue1835 < chunkFPAJGGOCParam20.value.length;
        chunkFPAJGGOCValue1835++
      )
        chunkFPAJGGOCHelper141(
          chunkFPAJGGOCParam20.value[chunkFPAJGGOCValue1835],
          chunkFPAJGGOCParam21,
          chunkFPAJGGOCParam22,
        );
      break;
    case "Alternative":
      let chunkFPAJGGOCValue406 = chunkFPAJGGOCParam20.value;
      for (
        let chunkFPAJGGOCValue424 = 0;
        chunkFPAJGGOCValue424 < chunkFPAJGGOCValue406.length;
        chunkFPAJGGOCValue424++
      ) {
        let chunkFPAJGGOCValue425 =
          chunkFPAJGGOCValue406[chunkFPAJGGOCValue424];
        switch (chunkFPAJGGOCValue425.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        let chunkFPAJGGOCValue426 = chunkFPAJGGOCValue425;
        switch (chunkFPAJGGOCValue426.type) {
          case "Character":
            chunkFPAJGGOCHelper142(
              chunkFPAJGGOCValue426.value,
              chunkFPAJGGOCParam21,
              chunkFPAJGGOCParam22,
            );
            break;
          case "Set":
            if (chunkFPAJGGOCValue426.complement === true)
              throw Error(
                "Complement Sets are not supported for first char optimization",
              );
            _baseUniqS(chunkFPAJGGOCValue426.value, (chunkFPAJGGOCParam224) => {
              if (typeof chunkFPAJGGOCParam224 == "number")
                chunkFPAJGGOCHelper142(
                  chunkFPAJGGOCParam224,
                  chunkFPAJGGOCParam21,
                  chunkFPAJGGOCParam22,
                );
              else {
                let chunkFPAJGGOCValue740 = chunkFPAJGGOCParam224;
                if (chunkFPAJGGOCParam22 === true)
                  for (
                    let chunkFPAJGGOCValue1857 = chunkFPAJGGOCValue740.from;
                    chunkFPAJGGOCValue1857 <= chunkFPAJGGOCValue740.to;
                    chunkFPAJGGOCValue1857++
                  )
                    chunkFPAJGGOCHelper142(
                      chunkFPAJGGOCValue1857,
                      chunkFPAJGGOCParam21,
                      chunkFPAJGGOCParam22,
                    );
                else {
                  for (
                    let chunkFPAJGGOCValue1840 = chunkFPAJGGOCValue740.from;
                    chunkFPAJGGOCValue1840 <= chunkFPAJGGOCValue740.to &&
                    chunkFPAJGGOCValue1840 < 256;
                    chunkFPAJGGOCValue1840++
                  )
                    chunkFPAJGGOCHelper142(
                      chunkFPAJGGOCValue1840,
                      chunkFPAJGGOCParam21,
                      chunkFPAJGGOCParam22,
                    );
                  if (chunkFPAJGGOCValue740.to >= 256) {
                    let chunkFPAJGGOCValue1191 =
                        chunkFPAJGGOCValue740.from >= 256
                          ? chunkFPAJGGOCValue740.from
                          : 256,
                      chunkFPAJGGOCValue1192 = chunkFPAJGGOCValue740.to,
                      chunkFPAJGGOCValue1193 = chunkFPAJGGOCHelper173(
                        chunkFPAJGGOCValue1191,
                      ),
                      chunkFPAJGGOCValue1194 = chunkFPAJGGOCHelper173(
                        chunkFPAJGGOCValue1192,
                      );
                    for (
                      let chunkFPAJGGOCValue1864 = chunkFPAJGGOCValue1193;
                      chunkFPAJGGOCValue1864 <= chunkFPAJGGOCValue1194;
                      chunkFPAJGGOCValue1864++
                    )
                      chunkFPAJGGOCParam21[chunkFPAJGGOCValue1864] =
                        chunkFPAJGGOCValue1864;
                  }
                }
              }
            });
            break;
          case "Group":
            chunkFPAJGGOCHelper141(
              chunkFPAJGGOCValue426.value,
              chunkFPAJGGOCParam21,
              chunkFPAJGGOCParam22,
            );
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        let chunkFPAJGGOCValue427 =
          chunkFPAJGGOCValue426.quantifier !== undefined &&
          chunkFPAJGGOCValue426.quantifier.atLeast === 0;
        if (
          (chunkFPAJGGOCValue426.type === "Group" &&
            chunkFPAJGGOCHelper145(chunkFPAJGGOCValue426) === false) ||
          (chunkFPAJGGOCValue426.type !== "Group" &&
            chunkFPAJGGOCValue427 === false)
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return baseUniqI(chunkFPAJGGOCParam21);
}
function chunkFPAJGGOCHelper142(
  chunkFPAJGGOCParam1615,
  chunkFPAJGGOCParam1616,
  chunkFPAJGGOCParam1617,
) {
  let chunkFPAJGGOCValue1785 = chunkFPAJGGOCHelper173(chunkFPAJGGOCParam1615);
  chunkFPAJGGOCParam1616[chunkFPAJGGOCValue1785] = chunkFPAJGGOCValue1785;
  chunkFPAJGGOCParam1617 === true &&
    chunkFPAJGGOCHelper143(chunkFPAJGGOCParam1615, chunkFPAJGGOCParam1616);
}
function chunkFPAJGGOCHelper143(chunkFPAJGGOCParam692, chunkFPAJGGOCParam693) {
  let chunkFPAJGGOCValue1096 = String.fromCharCode(chunkFPAJGGOCParam692),
    chunkFPAJGGOCValue1097 = chunkFPAJGGOCValue1096.toUpperCase();
  if (chunkFPAJGGOCValue1097 !== chunkFPAJGGOCValue1096) {
    let chunkFPAJGGOCValue1848 = chunkFPAJGGOCHelper173(
      chunkFPAJGGOCValue1097.charCodeAt(0),
    );
    chunkFPAJGGOCParam693[chunkFPAJGGOCValue1848] = chunkFPAJGGOCValue1848;
  } else {
    let chunkFPAJGGOCValue1660 = chunkFPAJGGOCValue1096.toLowerCase();
    if (chunkFPAJGGOCValue1660 !== chunkFPAJGGOCValue1096) {
      let chunkFPAJGGOCValue1845 = chunkFPAJGGOCHelper173(
        chunkFPAJGGOCValue1660.charCodeAt(0),
      );
      chunkFPAJGGOCParam693[chunkFPAJGGOCValue1845] = chunkFPAJGGOCValue1845;
    }
  }
}
function chunkFPAJGGOCHelper144(chunkFPAJGGOCParam946, chunkFPAJGGOCParam947) {
  return basePickByO(chunkFPAJGGOCParam946.value, (chunkFPAJGGOCParam1173) => {
    if (typeof chunkFPAJGGOCParam1173 == "number")
      return chunkFPAJGGOCHelper112(
        chunkFPAJGGOCParam947,
        chunkFPAJGGOCParam1173,
      );
    {
      let chunkFPAJGGOCValue1746 = chunkFPAJGGOCParam1173;
      return (
        basePickByO(
          chunkFPAJGGOCParam947,
          (chunkFPAJGGOCParam2166) =>
            chunkFPAJGGOCValue1746.from <= chunkFPAJGGOCParam2166 &&
            chunkFPAJGGOCParam2166 <= chunkFPAJGGOCValue1746.to,
        ) !== undefined
      );
    }
  });
}
function chunkFPAJGGOCHelper145(chunkFPAJGGOCParam1064) {
  let chunkFPAJGGOCValue1407 = chunkFPAJGGOCParam1064.quantifier;
  return chunkFPAJGGOCValue1407 && chunkFPAJGGOCValue1407.atLeast === 0
    ? true
    : chunkFPAJGGOCParam1064.value
      ? isArrayLikeObjectV(chunkFPAJGGOCParam1064.value)
        ? chunkFPAJGGOCHelper109(
            chunkFPAJGGOCParam1064.value,
            chunkFPAJGGOCHelper145,
          )
        : chunkFPAJGGOCHelper145(chunkFPAJGGOCParam1064.value)
      : false;
}
var chunkFPAJGGOCValue96 = class extends chunkFPAJGGOCValue61 {
  constructor(chunkFPAJGGOCParam1595) {
    super();
    this.targetCharCodes = chunkFPAJGGOCParam1595;
    this.found = false;
  }
  visitChildren(chunkFPAJGGOCParam615) {
    if (this.found !== true) {
      switch (chunkFPAJGGOCParam615.type) {
        case "Lookahead":
          this.visitLookahead(chunkFPAJGGOCParam615);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(chunkFPAJGGOCParam615);
          return;
      }
      super.visitChildren(chunkFPAJGGOCParam615);
    }
  }
  visitCharacter(chunkFPAJGGOCParam1596) {
    chunkFPAJGGOCHelper112(
      this.targetCharCodes,
      chunkFPAJGGOCParam1596.value,
    ) && (this.found = true);
  }
  visitSet(chunkFPAJGGOCParam1071) {
    chunkFPAJGGOCParam1071.complement
      ? chunkFPAJGGOCHelper144(chunkFPAJGGOCParam1071, this.targetCharCodes) ===
          undefined && (this.found = true)
      : chunkFPAJGGOCHelper144(chunkFPAJGGOCParam1071, this.targetCharCodes) !==
          undefined && (this.found = true);
  }
};
function chunkFPAJGGOCHelper146(chunkFPAJGGOCParam986, chunkFPAJGGOCParam987) {
  if (chunkFPAJGGOCParam987 instanceof RegExp) {
    let chunkFPAJGGOCValue1786 = chunkFPAJGGOCHelper138(chunkFPAJGGOCParam987),
      chunkFPAJGGOCValue1787 = new chunkFPAJGGOCValue96(chunkFPAJGGOCParam986);
    return (
      chunkFPAJGGOCValue1787.visit(chunkFPAJGGOCValue1786),
      chunkFPAJGGOCValue1787.found
    );
  } else
    return (
      basePickByO(chunkFPAJGGOCParam987, (chunkFPAJGGOCParam2183) =>
        chunkFPAJGGOCHelper112(
          chunkFPAJGGOCParam986,
          chunkFPAJGGOCParam2183.charCodeAt(0),
        ),
      ) !== undefined
    );
}
var chunkFPAJGGOCValue100 = typeof RegExp("(?:)").sticky == "boolean";
function chunkFPAJGGOCHelper147(chunkFPAJGGOCParam8, chunkFPAJGGOCParam9) {
  chunkFPAJGGOCParam9 = basePickByC(chunkFPAJGGOCParam9, {
    useSticky: chunkFPAJGGOCValue100,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", "\n"],
    tracer: (chunkFPAJGGOCParam2306, chunkFPAJGGOCParam2307) =>
      chunkFPAJGGOCParam2307(),
  });
  let chunkFPAJGGOCValue365 = chunkFPAJGGOCParam9.tracer;
  chunkFPAJGGOCValue365("initCharCodeToOptimizedIndexMap", () => {
    chunkFPAJGGOCHelper174();
  });
  let chunkFPAJGGOCValue366;
  chunkFPAJGGOCValue365("Reject Lexer.NA", () => {
    chunkFPAJGGOCValue366 = chunkFPAJGGOCHelper115(
      chunkFPAJGGOCParam8,
      (chunkFPAJGGOCParam2217) =>
        chunkFPAJGGOCParam2217.PATTERN === chunkFPAJGGOCValue109.NA,
    );
  });
  let chunkFPAJGGOCValue367 = false,
    chunkFPAJGGOCValue368;
  chunkFPAJGGOCValue365("Transform Patterns", () => {
    chunkFPAJGGOCValue367 = false;
    chunkFPAJGGOCValue368 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam66) => {
        let chunkFPAJGGOCValue466 = chunkFPAJGGOCParam66.PATTERN;
        if (chunkFPAJGGOCValue76(chunkFPAJGGOCValue466)) {
          let chunkFPAJGGOCValue537 = chunkFPAJGGOCValue466.source;
          return chunkFPAJGGOCValue537.length === 1 &&
            chunkFPAJGGOCValue537 !== "^" &&
            chunkFPAJGGOCValue537 !== "$" &&
            chunkFPAJGGOCValue537 !== "." &&
            !chunkFPAJGGOCValue466.ignoreCase
            ? chunkFPAJGGOCValue537
            : chunkFPAJGGOCValue537.length === 2 &&
                chunkFPAJGGOCValue537[0] === "\\" &&
                !chunkFPAJGGOCHelper112(
                  [
                    "d",
                    "D",
                    "s",
                    "S",
                    "t",
                    "r",
                    "n",
                    "t",
                    "0",
                    "c",
                    "b",
                    "B",
                    "f",
                    "v",
                    "w",
                    "W",
                  ],
                  chunkFPAJGGOCValue537[1],
                )
              ? chunkFPAJGGOCValue537[1]
              : chunkFPAJGGOCParam9.useSticky
                ? chunkFPAJGGOCHelper163(chunkFPAJGGOCValue466)
                : chunkFPAJGGOCHelper162(chunkFPAJGGOCValue466);
        } else if (isArrayLikeObjectR(chunkFPAJGGOCValue466))
          return (
            (chunkFPAJGGOCValue367 = true),
            {
              exec: chunkFPAJGGOCValue466,
            }
          );
        else if (typeof chunkFPAJGGOCValue466 == "object")
          return ((chunkFPAJGGOCValue367 = true), chunkFPAJGGOCValue466);
        else if (typeof chunkFPAJGGOCValue466 == "string") {
          if (chunkFPAJGGOCValue466.length === 1) return chunkFPAJGGOCValue466;
          {
            let chunkFPAJGGOCValue1480 = chunkFPAJGGOCValue466.replace(
                /[\\^$.*+?()[\]{}|]/g,
                "\\$&",
              ),
              chunkFPAJGGOCValue1481 = new RegExp(chunkFPAJGGOCValue1480);
            return chunkFPAJGGOCParam9.useSticky
              ? chunkFPAJGGOCHelper163(chunkFPAJGGOCValue1481)
              : chunkFPAJGGOCHelper162(chunkFPAJGGOCValue1481);
          }
        } else throw Error("non exhaustive match");
      },
    );
  });
  let chunkFPAJGGOCValue369,
    chunkFPAJGGOCValue370,
    chunkFPAJGGOCValue371,
    chunkFPAJGGOCValue372,
    chunkFPAJGGOCValue373;
  chunkFPAJGGOCValue365("misc mapping", () => {
    chunkFPAJGGOCValue369 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam2218) => chunkFPAJGGOCParam2218.tokenTypeIdx,
    );
    chunkFPAJGGOCValue370 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam980) => {
        let chunkFPAJGGOCValue1347 = chunkFPAJGGOCParam980.GROUP;
        if (chunkFPAJGGOCValue1347 !== chunkFPAJGGOCValue109.SKIPPED) {
          if (basePickByN(chunkFPAJGGOCValue1347))
            return chunkFPAJGGOCValue1347;
          if (baseUniqR(chunkFPAJGGOCValue1347)) return false;
          throw Error("non exhaustive match");
        }
      },
    );
    chunkFPAJGGOCValue371 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam1367) => {
        let chunkFPAJGGOCValue1655 = chunkFPAJGGOCParam1367.LONGER_ALT;
        if (chunkFPAJGGOCValue1655)
          return isArrayLikeObjectV(chunkFPAJGGOCValue1655)
            ? basePickByI(chunkFPAJGGOCValue1655, (chunkFPAJGGOCParam2300) =>
                ui(chunkFPAJGGOCValue366, chunkFPAJGGOCParam2300),
              )
            : [ui(chunkFPAJGGOCValue366, chunkFPAJGGOCValue1655)];
      },
    );
    chunkFPAJGGOCValue372 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam2257) => chunkFPAJGGOCParam2257.PUSH_MODE,
    );
    chunkFPAJGGOCValue373 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam2207) =>
        basePickByR(chunkFPAJGGOCParam2207, "POP_MODE"),
    );
  });
  let chunkFPAJGGOCValue374;
  chunkFPAJGGOCValue365("Line Terminator Handling", () => {
    let chunkFPAJGGOCValue1077 = chunkFPAJGGOCHelper171(
      chunkFPAJGGOCParam9.lineTerminatorCharacters,
    );
    chunkFPAJGGOCValue374 = basePickByI(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam2332) => false,
    );
    chunkFPAJGGOCParam9.positionTracking !== "onlyOffset" &&
      (chunkFPAJGGOCValue374 = basePickByI(
        chunkFPAJGGOCValue366,
        (chunkFPAJGGOCParam1348) =>
          basePickByR(chunkFPAJGGOCParam1348, "LINE_BREAKS")
            ? !!chunkFPAJGGOCParam1348.LINE_BREAKS
            : chunkFPAJGGOCHelper169(
                chunkFPAJGGOCParam1348,
                chunkFPAJGGOCValue1077,
              ) === false &&
              chunkFPAJGGOCHelper146(
                chunkFPAJGGOCValue1077,
                chunkFPAJGGOCParam1348.PATTERN,
              ),
      ));
  });
  let chunkFPAJGGOCValue375,
    chunkFPAJGGOCValue376,
    chunkFPAJGGOCValue377,
    chunkFPAJGGOCValue378;
  chunkFPAJGGOCValue365("Misc Mapping #2", () => {
    chunkFPAJGGOCValue375 = basePickByI(
      chunkFPAJGGOCValue366,
      chunkFPAJGGOCHelper167,
    );
    chunkFPAJGGOCValue376 = basePickByI(
      chunkFPAJGGOCValue368,
      chunkFPAJGGOCHelper168,
    );
    chunkFPAJGGOCValue377 = baseUniqN(
      chunkFPAJGGOCValue366,
      (chunkFPAJGGOCParam1379, chunkFPAJGGOCParam1380) => {
        let chunkFPAJGGOCValue1661 = chunkFPAJGGOCParam1380.GROUP;
        return (
          basePickByN(chunkFPAJGGOCValue1661) &&
            chunkFPAJGGOCValue1661 !== chunkFPAJGGOCValue109.SKIPPED &&
            (chunkFPAJGGOCParam1379[chunkFPAJGGOCValue1661] = []),
          chunkFPAJGGOCParam1379
        );
      },
      {},
    );
    chunkFPAJGGOCValue378 = basePickByI(
      chunkFPAJGGOCValue368,
      (chunkFPAJGGOCParam715, chunkFPAJGGOCParam716) => ({
        pattern: chunkFPAJGGOCValue368[chunkFPAJGGOCParam716],
        longerAlt: chunkFPAJGGOCValue371[chunkFPAJGGOCParam716],
        canLineTerminator: chunkFPAJGGOCValue374[chunkFPAJGGOCParam716],
        isCustom: chunkFPAJGGOCValue375[chunkFPAJGGOCParam716],
        short: chunkFPAJGGOCValue376[chunkFPAJGGOCParam716],
        group: chunkFPAJGGOCValue370[chunkFPAJGGOCParam716],
        push: chunkFPAJGGOCValue372[chunkFPAJGGOCParam716],
        pop: chunkFPAJGGOCValue373[chunkFPAJGGOCParam716],
        tokenTypeIdx: chunkFPAJGGOCValue369[chunkFPAJGGOCParam716],
        tokenType: chunkFPAJGGOCValue366[chunkFPAJGGOCParam716],
      }),
    );
  });
  let chunkFPAJGGOCValue379 = true,
    chunkFPAJGGOCValue380 = [];
  return (
    chunkFPAJGGOCParam9.safeMode ||
      chunkFPAJGGOCValue365("First Char Optimization", () => {
        chunkFPAJGGOCValue380 = baseUniqN(
          chunkFPAJGGOCValue366,
          (
            chunkFPAJGGOCParam41,
            chunkFPAJGGOCParam42,
            chunkFPAJGGOCParam43,
          ) => {
            if (typeof chunkFPAJGGOCParam42.PATTERN == "string")
              chunkFPAJGGOCHelper172(
                chunkFPAJGGOCParam41,
                chunkFPAJGGOCHelper173(
                  chunkFPAJGGOCParam42.PATTERN.charCodeAt(0),
                ),
                chunkFPAJGGOCValue378[chunkFPAJGGOCParam43],
              );
            else if (
              isArrayLikeObjectV(chunkFPAJGGOCParam42.START_CHARS_HINT)
            ) {
              let chunkFPAJGGOCValue1227;
              _baseUniqS(
                chunkFPAJGGOCParam42.START_CHARS_HINT,
                (chunkFPAJGGOCParam1180) => {
                  let chunkFPAJGGOCValue1504 = chunkFPAJGGOCHelper173(
                    typeof chunkFPAJGGOCParam1180 == "string"
                      ? chunkFPAJGGOCParam1180.charCodeAt(0)
                      : chunkFPAJGGOCParam1180,
                  );
                  chunkFPAJGGOCValue1227 !== chunkFPAJGGOCValue1504 &&
                    ((chunkFPAJGGOCValue1227 = chunkFPAJGGOCValue1504),
                    chunkFPAJGGOCHelper172(
                      chunkFPAJGGOCParam41,
                      chunkFPAJGGOCValue1504,
                      chunkFPAJGGOCValue378[chunkFPAJGGOCParam43],
                    ));
                },
              );
            } else if (chunkFPAJGGOCValue76(chunkFPAJGGOCParam42.PATTERN)) {
              if (chunkFPAJGGOCParam42.PATTERN.unicode) {
                chunkFPAJGGOCValue379 = false;
                chunkFPAJGGOCParam9.ensureOptimizations &&
                  chunkFPAJGGOCHelper119(`${'Unable to use "first char" lexer optimizations:\n'}\tUnable to analyze < ${chunkFPAJGGOCParam42.PATTERN.toString()} > pattern.\n	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
              } else {
                let chunkFPAJGGOCValue1281 = chunkFPAJGGOCHelper140(
                  chunkFPAJGGOCParam42.PATTERN,
                  chunkFPAJGGOCParam9.ensureOptimizations,
                );
                isEmptyT(chunkFPAJGGOCValue1281) &&
                  (chunkFPAJGGOCValue379 = false);
                _baseUniqS(chunkFPAJGGOCValue1281, (chunkFPAJGGOCParam1831) => {
                  chunkFPAJGGOCHelper172(
                    chunkFPAJGGOCParam41,
                    chunkFPAJGGOCParam1831,
                    chunkFPAJGGOCValue378[chunkFPAJGGOCParam43],
                  );
                });
              }
            } else {
              chunkFPAJGGOCParam9.ensureOptimizations &&
                chunkFPAJGGOCHelper119(`${'Unable to use "first char" lexer optimizations:\n'}\tTokenType: <${chunkFPAJGGOCParam42.name}> is using a custom token pattern without providing <start_chars_hint> parameter.\n	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
              chunkFPAJGGOCValue379 = false;
            }
            return chunkFPAJGGOCParam41;
          },
          [],
        );
      }),
    {
      emptyGroups: chunkFPAJGGOCValue377,
      patternIdxToConfig: chunkFPAJGGOCValue378,
      charCodeToPatternIdxToConfig: chunkFPAJGGOCValue380,
      hasCustom: chunkFPAJGGOCValue367,
      canBeOptimized: chunkFPAJGGOCValue379,
    }
  );
}
function chunkFPAJGGOCHelper148(chunkFPAJGGOCParam667, chunkFPAJGGOCParam668) {
  let chunkFPAJGGOCValue1073 = [],
    chunkFPAJGGOCValue1074 = chunkFPAJGGOCHelper150(chunkFPAJGGOCParam667);
  chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
    chunkFPAJGGOCValue1074.errors,
  );
  let chunkFPAJGGOCValue1075 = chunkFPAJGGOCHelper151(
      chunkFPAJGGOCValue1074.valid,
    ),
    chunkFPAJGGOCValue1076 = chunkFPAJGGOCValue1075.valid;
  return (
    (chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
      chunkFPAJGGOCValue1075.errors,
    )),
    (chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
      chunkFPAJGGOCHelper149(chunkFPAJGGOCValue1076),
    )),
    (chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
      chunkFPAJGGOCHelper157(chunkFPAJGGOCValue1076),
    )),
    (chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
      chunkFPAJGGOCHelper158(chunkFPAJGGOCValue1076, chunkFPAJGGOCParam668),
    )),
    (chunkFPAJGGOCValue1073 = chunkFPAJGGOCValue1073.concat(
      chunkFPAJGGOCHelper159(chunkFPAJGGOCValue1076),
    )),
    chunkFPAJGGOCValue1073
  );
}
function chunkFPAJGGOCHelper149(chunkFPAJGGOCParam841) {
  let chunkFPAJGGOCValue1240 = [],
    chunkFPAJGGOCValue1241 = baseUniqA(
      chunkFPAJGGOCParam841,
      (chunkFPAJGGOCParam2264) =>
        chunkFPAJGGOCValue76(chunkFPAJGGOCParam2264.PATTERN),
    );
  return (
    (chunkFPAJGGOCValue1240 = chunkFPAJGGOCValue1240.concat(
      chunkFPAJGGOCHelper152(chunkFPAJGGOCValue1241),
    )),
    (chunkFPAJGGOCValue1240 = chunkFPAJGGOCValue1240.concat(
      chunkFPAJGGOCHelper154(chunkFPAJGGOCValue1241),
    )),
    (chunkFPAJGGOCValue1240 = chunkFPAJGGOCValue1240.concat(
      chunkFPAJGGOCHelper155(chunkFPAJGGOCValue1241),
    )),
    (chunkFPAJGGOCValue1240 = chunkFPAJGGOCValue1240.concat(
      chunkFPAJGGOCHelper156(chunkFPAJGGOCValue1241),
    )),
    (chunkFPAJGGOCValue1240 = chunkFPAJGGOCValue1240.concat(
      chunkFPAJGGOCHelper153(chunkFPAJGGOCValue1241),
    )),
    chunkFPAJGGOCValue1240
  );
}
function chunkFPAJGGOCHelper150(chunkFPAJGGOCParam685) {
  let chunkFPAJGGOCValue1091 = baseUniqA(
    chunkFPAJGGOCParam685,
    (chunkFPAJGGOCParam2265) => !basePickByR(chunkFPAJGGOCParam2265, "PATTERN"),
  );
  return {
    errors: basePickByI(chunkFPAJGGOCValue1091, (chunkFPAJGGOCParam1119) => ({
      message:
        "Token Type: ->" +
        chunkFPAJGGOCParam1119.name +
        "<- missing static 'PATTERN' property",
      type: chunkFPAJGGOCValue107.MISSING_PATTERN,
      tokenTypes: [chunkFPAJGGOCParam1119],
    })),
    valid: $r(chunkFPAJGGOCParam685, chunkFPAJGGOCValue1091),
  };
}
function chunkFPAJGGOCHelper151(chunkFPAJGGOCParam350) {
  let chunkFPAJGGOCValue778 = baseUniqA(
    chunkFPAJGGOCParam350,
    (chunkFPAJGGOCParam1571) => {
      let chunkFPAJGGOCValue1754 = chunkFPAJGGOCParam1571.PATTERN;
      return (
        !chunkFPAJGGOCValue76(chunkFPAJGGOCValue1754) &&
        !isArrayLikeObjectR(chunkFPAJGGOCValue1754) &&
        !basePickByR(chunkFPAJGGOCValue1754, "exec") &&
        !basePickByN(chunkFPAJGGOCValue1754)
      );
    },
  );
  return {
    errors: basePickByI(chunkFPAJGGOCValue778, (chunkFPAJGGOCParam610) => ({
      message:
        "Token Type: ->" +
        chunkFPAJGGOCParam610.name +
        "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
      type: chunkFPAJGGOCValue107.INVALID_PATTERN,
      tokenTypes: [chunkFPAJGGOCParam610],
    })),
    valid: $r(chunkFPAJGGOCParam350, chunkFPAJGGOCValue778),
  };
}
var _a = /[^\\][$]/;
function chunkFPAJGGOCHelper152(chunkFPAJGGOCParam180) {
  class ChunkFPAJGGOCClass6 extends chunkFPAJGGOCValue61 {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitEndAnchor(chunkFPAJGGOCParam2058) {
      this.found = true;
    }
  }
  return basePickByI(
    baseUniqA(chunkFPAJGGOCParam180, (chunkFPAJGGOCParam975) => {
      let chunkFPAJGGOCValue1340 = chunkFPAJGGOCParam975.PATTERN;
      try {
        let chunkFPAJGGOCValue1729 = chunkFPAJGGOCHelper138(
            chunkFPAJGGOCValue1340,
          ),
          chunkFPAJGGOCValue1730 = new ChunkFPAJGGOCClass6();
        return (
          chunkFPAJGGOCValue1730.visit(chunkFPAJGGOCValue1729),
          chunkFPAJGGOCValue1730.found
        );
      } catch {
        return _a.test(chunkFPAJGGOCValue1340.source);
      }
    }),
    (chunkFPAJGGOCParam573) => ({
      message:
        "Unexpected RegExp Anchor Error:\n\tToken Type: ->" +
        chunkFPAJGGOCParam573.name +
        "<- static 'PATTERN' cannot contain end of input anchor '$'\n\tSee chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.",
      type: chunkFPAJGGOCValue107.EOI_ANCHOR_FOUND,
      tokenTypes: [chunkFPAJGGOCParam573],
    }),
  );
}
function chunkFPAJGGOCHelper153(chunkFPAJGGOCParam678) {
  return basePickByI(
    baseUniqA(chunkFPAJGGOCParam678, (chunkFPAJGGOCParam2194) =>
      chunkFPAJGGOCParam2194.PATTERN.test(""),
    ),
    (chunkFPAJGGOCParam959) => ({
      message:
        "Token Type: ->" +
        chunkFPAJGGOCParam959.name +
        "<- static 'PATTERN' must not match an empty string",
      type: chunkFPAJGGOCValue107.EMPTY_MATCH_PATTERN,
      tokenTypes: [chunkFPAJGGOCParam959],
    }),
  );
}
var chunkFPAJGGOCValue101 = /[^\\[][\^]|^\^/;
function chunkFPAJGGOCHelper154(chunkFPAJGGOCParam173) {
  class ChunkFPAJGGOCClass5 extends chunkFPAJGGOCValue61 {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitStartAnchor(chunkFPAJGGOCParam1993) {
      this.found = true;
    }
  }
  return basePickByI(
    baseUniqA(chunkFPAJGGOCParam173, (chunkFPAJGGOCParam976) => {
      let chunkFPAJGGOCValue1341 = chunkFPAJGGOCParam976.PATTERN;
      try {
        let chunkFPAJGGOCValue1731 = chunkFPAJGGOCHelper138(
            chunkFPAJGGOCValue1341,
          ),
          chunkFPAJGGOCValue1732 = new ChunkFPAJGGOCClass5();
        return (
          chunkFPAJGGOCValue1732.visit(chunkFPAJGGOCValue1731),
          chunkFPAJGGOCValue1732.found
        );
      } catch {
        return chunkFPAJGGOCValue101.test(chunkFPAJGGOCValue1341.source);
      }
    }),
    (chunkFPAJGGOCParam553) => ({
      message:
        "Unexpected RegExp Anchor Error:\n\tToken Type: ->" +
        chunkFPAJGGOCParam553.name +
        "<- static 'PATTERN' cannot contain start of input anchor '^'\n\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS\tfor details.",
      type: chunkFPAJGGOCValue107.SOI_ANCHOR_FOUND,
      tokenTypes: [chunkFPAJGGOCParam553],
    }),
  );
}
function chunkFPAJGGOCHelper155(chunkFPAJGGOCParam484) {
  return basePickByI(
    baseUniqA(chunkFPAJGGOCParam484, (chunkFPAJGGOCParam1465) => {
      let chunkFPAJGGOCValue1709 = chunkFPAJGGOCParam1465.PATTERN;
      return (
        chunkFPAJGGOCValue1709 instanceof RegExp &&
        (chunkFPAJGGOCValue1709.multiline || chunkFPAJGGOCValue1709.global)
      );
    }),
    (chunkFPAJGGOCParam868) => ({
      message:
        "Token Type: ->" +
        chunkFPAJGGOCParam868.name +
        "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
      type: chunkFPAJGGOCValue107.UNSUPPORTED_FLAGS_FOUND,
      tokenTypes: [chunkFPAJGGOCParam868],
    }),
  );
}
function chunkFPAJGGOCHelper156(chunkFPAJGGOCParam203) {
  let chunkFPAJGGOCValue607 = [],
    chunkFPAJGGOCValue608 = basePickByI(
      chunkFPAJGGOCParam203,
      (chunkFPAJGGOCParam831) =>
        baseUniqN(
          chunkFPAJGGOCParam203,
          (chunkFPAJGGOCParam1087, chunkFPAJGGOCParam1088) =>
            chunkFPAJGGOCParam831.PATTERN.source ===
              chunkFPAJGGOCParam1088.PATTERN.source &&
            !chunkFPAJGGOCHelper112(
              chunkFPAJGGOCValue607,
              chunkFPAJGGOCParam1088,
            ) &&
            chunkFPAJGGOCParam1088.PATTERN !== chunkFPAJGGOCValue109.NA
              ? (chunkFPAJGGOCValue607.push(chunkFPAJGGOCParam1088),
                chunkFPAJGGOCParam1087.push(chunkFPAJGGOCParam1088),
                chunkFPAJGGOCParam1087)
              : chunkFPAJGGOCParam1087,
          [],
        ),
    );
  return (
    (chunkFPAJGGOCValue608 = chunkFPAJGGOCHelper100(chunkFPAJGGOCValue608)),
    basePickByI(
      baseUniqA(
        chunkFPAJGGOCValue608,
        (chunkFPAJGGOCParam2245) => chunkFPAJGGOCParam2245.length > 1,
      ),
      (chunkFPAJGGOCParam640) => {
        let chunkFPAJGGOCValue1055 = basePickByI(
          chunkFPAJGGOCParam640,
          (chunkFPAJGGOCParam2308) => chunkFPAJGGOCParam2308.name,
        );
        return {
          message: `The same RegExp pattern ->${chunkFPAJGGOCHelper110(chunkFPAJGGOCParam640).PATTERN}<-has been used in all of the following Token Types: ${chunkFPAJGGOCValue1055.join(", ")} <-`,
          type: chunkFPAJGGOCValue107.DUPLICATE_PATTERNS_FOUND,
          tokenTypes: chunkFPAJGGOCParam640,
        };
      },
    )
  );
}
function chunkFPAJGGOCHelper157(chunkFPAJGGOCParam457) {
  return basePickByI(
    baseUniqA(chunkFPAJGGOCParam457, (chunkFPAJGGOCParam1304) => {
      if (!basePickByR(chunkFPAJGGOCParam1304, "GROUP")) return false;
      let chunkFPAJGGOCValue1591 = chunkFPAJGGOCParam1304.GROUP;
      return (
        chunkFPAJGGOCValue1591 !== chunkFPAJGGOCValue109.SKIPPED &&
        chunkFPAJGGOCValue1591 !== chunkFPAJGGOCValue109.NA &&
        !basePickByN(chunkFPAJGGOCValue1591)
      );
    }),
    (chunkFPAJGGOCParam876) => ({
      message:
        "Token Type: ->" +
        chunkFPAJGGOCParam876.name +
        "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
      type: chunkFPAJGGOCValue107.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [chunkFPAJGGOCParam876],
    }),
  );
}
function chunkFPAJGGOCHelper158(chunkFPAJGGOCParam551, chunkFPAJGGOCParam552) {
  return basePickByI(
    baseUniqA(
      chunkFPAJGGOCParam551,
      (chunkFPAJGGOCParam1979) =>
        chunkFPAJGGOCParam1979.PUSH_MODE !== undefined &&
        !chunkFPAJGGOCHelper112(
          chunkFPAJGGOCParam552,
          chunkFPAJGGOCParam1979.PUSH_MODE,
        ),
    ),
    (chunkFPAJGGOCParam856) => ({
      message: `Token Type: ->${chunkFPAJGGOCParam856.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${chunkFPAJGGOCParam856.PUSH_MODE}<-which does not exist`,
      type: chunkFPAJGGOCValue107.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [chunkFPAJGGOCParam856],
    }),
  );
}
function chunkFPAJGGOCHelper159(chunkFPAJGGOCParam116) {
  let chunkFPAJGGOCValue529 = [],
    chunkFPAJGGOCValue530 = baseUniqN(
      chunkFPAJGGOCParam116,
      (chunkFPAJGGOCParam593, chunkFPAJGGOCParam594, chunkFPAJGGOCParam595) => {
        let chunkFPAJGGOCValue1023 = chunkFPAJGGOCParam594.PATTERN;
        return (
          chunkFPAJGGOCValue1023 === chunkFPAJGGOCValue109.NA ||
            (basePickByN(chunkFPAJGGOCValue1023)
              ? chunkFPAJGGOCParam593.push({
                  str: chunkFPAJGGOCValue1023,
                  idx: chunkFPAJGGOCParam595,
                  tokenType: chunkFPAJGGOCParam594,
                })
              : chunkFPAJGGOCValue76(chunkFPAJGGOCValue1023) &&
                chunkFPAJGGOCHelper161(chunkFPAJGGOCValue1023) &&
                chunkFPAJGGOCParam593.push({
                  str: chunkFPAJGGOCValue1023.source,
                  idx: chunkFPAJGGOCParam595,
                  tokenType: chunkFPAJGGOCParam594,
                })),
          chunkFPAJGGOCParam593
        );
      },
      [],
    );
  return (
    _baseUniqS(
      chunkFPAJGGOCParam116,
      (chunkFPAJGGOCParam326, chunkFPAJGGOCParam327) => {
        _baseUniqS(chunkFPAJGGOCValue530, ({ str, idx, tokenType }) => {
          if (
            chunkFPAJGGOCParam327 < idx &&
            chunkFPAJGGOCHelper160(str, chunkFPAJGGOCParam326.PATTERN)
          ) {
            let chunkFPAJGGOCValue909 = `Token: ->${tokenType.name}<- can never be matched.\nBecause it appears AFTER the Token Type ->${chunkFPAJGGOCParam326.name}<-in the lexer's definition.\nSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
            chunkFPAJGGOCValue529.push({
              message: chunkFPAJGGOCValue909,
              type: chunkFPAJGGOCValue107.UNREACHABLE_PATTERN,
              tokenTypes: [chunkFPAJGGOCParam326, tokenType],
            });
          }
        });
      },
    ),
    chunkFPAJGGOCValue529
  );
}
function chunkFPAJGGOCHelper160(chunkFPAJGGOCParam621, chunkFPAJGGOCParam622) {
  if (chunkFPAJGGOCValue76(chunkFPAJGGOCParam622)) {
    let chunkFPAJGGOCValue1826 = chunkFPAJGGOCParam622.exec(
      chunkFPAJGGOCParam621,
    );
    return (
      chunkFPAJGGOCValue1826 !== null && chunkFPAJGGOCValue1826.index === 0
    );
  } else if (isArrayLikeObjectR(chunkFPAJGGOCParam622))
    return chunkFPAJGGOCParam622(chunkFPAJGGOCParam621, 0, [], {});
  else if (basePickByR(chunkFPAJGGOCParam622, "exec"))
    return chunkFPAJGGOCParam622.exec(chunkFPAJGGOCParam621, 0, [], {});
  else if (typeof chunkFPAJGGOCParam622 == "string")
    return chunkFPAJGGOCParam622 === chunkFPAJGGOCParam621;
  else throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper161(chunkFPAJGGOCParam1065) {
  return (
    basePickByO(
      [".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"],
      (chunkFPAJGGOCParam2157) =>
        chunkFPAJGGOCParam1065.source.indexOf(chunkFPAJGGOCParam2157) !== -1,
    ) === undefined
  );
}
function chunkFPAJGGOCHelper162(chunkFPAJGGOCParam1505) {
  let chunkFPAJGGOCValue1733 = chunkFPAJGGOCParam1505.ignoreCase ? "i" : "";
  return RegExp(
    `^(?:${chunkFPAJGGOCParam1505.source})`,
    chunkFPAJGGOCValue1733,
  );
}
function chunkFPAJGGOCHelper163(chunkFPAJGGOCParam1535) {
  let chunkFPAJGGOCValue1742 = chunkFPAJGGOCParam1535.ignoreCase ? "iy" : "y";
  return RegExp(`${chunkFPAJGGOCParam1535.source}`, chunkFPAJGGOCValue1742);
}
function chunkFPAJGGOCHelper164(
  chunkFPAJGGOCParam30,
  chunkFPAJGGOCParam31,
  chunkFPAJGGOCParam32,
) {
  let chunkFPAJGGOCValue423 = [];
  return (
    basePickByR(chunkFPAJGGOCParam30, "defaultMode") ||
      chunkFPAJGGOCValue423.push({
        message:
          "A MultiMode Lexer cannot be initialized without a <defaultMode> property in its definition\n",
        type: chunkFPAJGGOCValue107.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE,
      }),
    basePickByR(chunkFPAJGGOCParam30, "modes") ||
      chunkFPAJGGOCValue423.push({
        message:
          "A MultiMode Lexer cannot be initialized without a <modes> property in its definition\n",
        type: chunkFPAJGGOCValue107.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY,
      }),
    basePickByR(chunkFPAJGGOCParam30, "modes") &&
      basePickByR(chunkFPAJGGOCParam30, "defaultMode") &&
      !basePickByR(
        chunkFPAJGGOCParam30.modes,
        chunkFPAJGGOCParam30.defaultMode,
      ) &&
      chunkFPAJGGOCValue423.push({
        message: `A MultiMode Lexer cannot be initialized with a ${"defaultMode"}: <${chunkFPAJGGOCParam30.defaultMode}>which does not exist\n`,
        type: chunkFPAJGGOCValue107.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST,
      }),
    basePickByR(chunkFPAJGGOCParam30, "modes") &&
      _baseUniqS(
        chunkFPAJGGOCParam30.modes,
        (chunkFPAJGGOCParam159, chunkFPAJGGOCParam160) => {
          _baseUniqS(
            chunkFPAJGGOCParam159,
            (chunkFPAJGGOCParam176, chunkFPAJGGOCParam177) => {
              baseUniqR(chunkFPAJGGOCParam176)
                ? chunkFPAJGGOCValue423.push({
                    message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${chunkFPAJGGOCParam160}> at index: <${chunkFPAJGGOCParam177}>\n`,
                    type: chunkFPAJGGOCValue107.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED,
                  })
                : basePickByR(chunkFPAJGGOCParam176, "LONGER_ALT") &&
                  _baseUniqS(
                    isArrayLikeObjectV(chunkFPAJGGOCParam176.LONGER_ALT)
                      ? chunkFPAJGGOCParam176.LONGER_ALT
                      : [chunkFPAJGGOCParam176.LONGER_ALT],
                    (chunkFPAJGGOCParam492) => {
                      !baseUniqR(chunkFPAJGGOCParam492) &&
                        !chunkFPAJGGOCHelper112(
                          chunkFPAJGGOCParam159,
                          chunkFPAJGGOCParam492,
                        ) &&
                        chunkFPAJGGOCValue423.push({
                          message: `A MultiMode Lexer cannot be initialized with a longer_alt <${chunkFPAJGGOCParam492.name}> on token <${chunkFPAJGGOCParam176.name}> outside of mode <${chunkFPAJGGOCParam160}>\n`,
                          type: chunkFPAJGGOCValue107.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE,
                        });
                    },
                  );
            },
          );
        },
      ),
    chunkFPAJGGOCValue423
  );
}
function chunkFPAJGGOCHelper165(
  chunkFPAJGGOCParam140,
  chunkFPAJGGOCParam141,
  chunkFPAJGGOCParam142,
) {
  let chunkFPAJGGOCValue542 = [],
    chunkFPAJGGOCValue543 = false,
    chunkFPAJGGOCValue544 = chunkFPAJGGOCHelper115(
      chunkFPAJGGOCHelper100(
        basePickByL(baseUniqI(chunkFPAJGGOCParam140.modes)),
      ),
      (chunkFPAJGGOCParam2219) =>
        chunkFPAJGGOCParam2219.PATTERN === chunkFPAJGGOCValue109.NA,
    ),
    chunkFPAJGGOCValue545 = chunkFPAJGGOCHelper171(chunkFPAJGGOCParam142);
  return (
    chunkFPAJGGOCParam141 &&
      _baseUniqS(chunkFPAJGGOCValue544, (chunkFPAJGGOCParam607) => {
        let chunkFPAJGGOCValue1039 = chunkFPAJGGOCHelper169(
          chunkFPAJGGOCParam607,
          chunkFPAJGGOCValue545,
        );
        if (chunkFPAJGGOCValue1039 !== false) {
          let chunkFPAJGGOCValue1695 = {
            message: chunkFPAJGGOCHelper170(
              chunkFPAJGGOCParam607,
              chunkFPAJGGOCValue1039,
            ),
            type: chunkFPAJGGOCValue1039.issue,
            tokenType: chunkFPAJGGOCParam607,
          };
          chunkFPAJGGOCValue542.push(chunkFPAJGGOCValue1695);
        } else
          basePickByR(chunkFPAJGGOCParam607, "LINE_BREAKS")
            ? chunkFPAJGGOCParam607.LINE_BREAKS === true &&
              (chunkFPAJGGOCValue543 = true)
            : chunkFPAJGGOCHelper146(
                chunkFPAJGGOCValue545,
                chunkFPAJGGOCParam607.PATTERN,
              ) && (chunkFPAJGGOCValue543 = true);
      }),
    chunkFPAJGGOCParam141 &&
      !chunkFPAJGGOCValue543 &&
      chunkFPAJGGOCValue542.push({
        message:
          "Warning: No LINE_BREAKS Found.\n\tThis Lexer has been defined to track line and column information,\n\tBut none of the Token Types can be identified as matching a line terminator.\n\tSee https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n\tfor details.",
        type: chunkFPAJGGOCValue107.NO_LINE_BREAKS_FLAGS,
      }),
    chunkFPAJGGOCValue542
  );
}
function chunkFPAJGGOCHelper166(chunkFPAJGGOCParam1037) {
  let chunkFPAJGGOCValue1389 = {};
  return (
    _baseUniqS(baseUniqD(chunkFPAJGGOCParam1037), (chunkFPAJGGOCParam1382) => {
      let chunkFPAJGGOCValue1663 =
        chunkFPAJGGOCParam1037[chunkFPAJGGOCParam1382];
      if (isArrayLikeObjectV(chunkFPAJGGOCValue1663))
        chunkFPAJGGOCValue1389[chunkFPAJGGOCParam1382] = [];
      else throw Error("non exhaustive match");
    }),
    chunkFPAJGGOCValue1389
  );
}
function chunkFPAJGGOCHelper167(chunkFPAJGGOCParam1099) {
  let chunkFPAJGGOCValue1440 = chunkFPAJGGOCParam1099.PATTERN;
  if (chunkFPAJGGOCValue76(chunkFPAJGGOCValue1440)) return false;
  if (
    isArrayLikeObjectR(chunkFPAJGGOCValue1440) ||
    basePickByR(chunkFPAJGGOCValue1440, "exec")
  )
    return true;
  if (basePickByN(chunkFPAJGGOCValue1440)) return false;
  throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper168(chunkFPAJGGOCParam1655) {
  return basePickByN(chunkFPAJGGOCParam1655) &&
    chunkFPAJGGOCParam1655.length === 1
    ? chunkFPAJGGOCParam1655.charCodeAt(0)
    : false;
}
var chunkFPAJGGOCValue102 = {
  test: function (chunkFPAJGGOCParam469) {
    let chunkFPAJGGOCValue889 = chunkFPAJGGOCParam469.length;
    for (
      let chunkFPAJGGOCValue999 = this.lastIndex;
      chunkFPAJGGOCValue999 < chunkFPAJGGOCValue889;
      chunkFPAJGGOCValue999++
    ) {
      let chunkFPAJGGOCValue1081 = chunkFPAJGGOCParam469.charCodeAt(
        chunkFPAJGGOCValue999,
      );
      if (chunkFPAJGGOCValue1081 === 10)
        return ((this.lastIndex = chunkFPAJGGOCValue999 + 1), true);
      if (chunkFPAJGGOCValue1081 === 13)
        return (
          chunkFPAJGGOCParam469.charCodeAt(chunkFPAJGGOCValue999 + 1) === 10
            ? (this.lastIndex = chunkFPAJGGOCValue999 + 2)
            : (this.lastIndex = chunkFPAJGGOCValue999 + 1),
          true
        );
    }
    return false;
  },
  lastIndex: 0,
};
function chunkFPAJGGOCHelper169(chunkFPAJGGOCParam485, chunkFPAJGGOCParam486) {
  if (basePickByR(chunkFPAJGGOCParam485, "LINE_BREAKS")) return false;
  if (chunkFPAJGGOCValue76(chunkFPAJGGOCParam485.PATTERN)) {
    try {
      chunkFPAJGGOCHelper146(
        chunkFPAJGGOCParam486,
        chunkFPAJGGOCParam485.PATTERN,
      );
    } catch (chunkFPAJGGOCValue1770) {
      return {
        issue: chunkFPAJGGOCValue107.IDENTIFY_TERMINATOR,
        errMsg: chunkFPAJGGOCValue1770.message,
      };
    }
    return false;
  } else if (basePickByN(chunkFPAJGGOCParam485.PATTERN)) return false;
  else if (chunkFPAJGGOCHelper167(chunkFPAJGGOCParam485))
    return {
      issue: chunkFPAJGGOCValue107.CUSTOM_LINE_BREAK,
    };
  else throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper170(chunkFPAJGGOCParam210, chunkFPAJGGOCParam211) {
  if (chunkFPAJGGOCParam211.issue === chunkFPAJGGOCValue107.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
\tThe problem is in the <${chunkFPAJGGOCParam210.name}> Token Type\n\t Root cause: ${chunkFPAJGGOCParam211.errMsg}.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (chunkFPAJGGOCParam211.issue === chunkFPAJGGOCValue107.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
\tThe problem is in the <${chunkFPAJGGOCParam210.name}> Token Type\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper171(chunkFPAJGGOCParam1713) {
  return basePickByI(chunkFPAJGGOCParam1713, (chunkFPAJGGOCParam2150) =>
    basePickByN(chunkFPAJGGOCParam2150)
      ? chunkFPAJGGOCParam2150.charCodeAt(0)
      : chunkFPAJGGOCParam2150,
  );
}
function chunkFPAJGGOCHelper172(
  chunkFPAJGGOCParam1665,
  chunkFPAJGGOCParam1666,
  chunkFPAJGGOCParam1667,
) {
  chunkFPAJGGOCParam1665[chunkFPAJGGOCParam1666] === undefined
    ? (chunkFPAJGGOCParam1665[chunkFPAJGGOCParam1666] = [
        chunkFPAJGGOCParam1667,
      ])
    : chunkFPAJGGOCParam1665[chunkFPAJGGOCParam1666].push(
        chunkFPAJGGOCParam1667,
      );
}
var chunkFPAJGGOCValue103 = [];
function chunkFPAJGGOCHelper173(chunkFPAJGGOCParam2059) {
  return chunkFPAJGGOCParam2059 < 256
    ? chunkFPAJGGOCParam2059
    : chunkFPAJGGOCValue103[chunkFPAJGGOCParam2059];
}
function chunkFPAJGGOCHelper174() {
  if (isEmptyT(chunkFPAJGGOCValue103)) {
    chunkFPAJGGOCValue103 = Array(65536);
    for (
      let chunkFPAJGGOCValue1805 = 0;
      chunkFPAJGGOCValue1805 < 65536;
      chunkFPAJGGOCValue1805++
    )
      chunkFPAJGGOCValue103[chunkFPAJGGOCValue1805] =
        chunkFPAJGGOCValue1805 > 255
          ? 255 + ~~(chunkFPAJGGOCValue1805 / 255)
          : chunkFPAJGGOCValue1805;
  }
}
function chunkFPAJGGOCHelper175(
  chunkFPAJGGOCParam1213,
  chunkFPAJGGOCParam1214,
) {
  let chunkFPAJGGOCValue1521 = chunkFPAJGGOCParam1213.tokenTypeIdx;
  return chunkFPAJGGOCValue1521 === chunkFPAJGGOCParam1214.tokenTypeIdx
    ? true
    : chunkFPAJGGOCParam1214.isParent === true &&
        chunkFPAJGGOCParam1214.categoryMatchesMap[chunkFPAJGGOCValue1521] ===
          true;
}
function chunkFPAJGGOCHelper176(
  chunkFPAJGGOCParam1814,
  chunkFPAJGGOCParam1815,
) {
  return (
    chunkFPAJGGOCParam1814.tokenTypeIdx === chunkFPAJGGOCParam1815.tokenTypeIdx
  );
}
var chunkFPAJGGOCValue104 = 1,
  chunkFPAJGGOCValue105 = {};
function chunkFPAJGGOCHelper177(chunkFPAJGGOCParam1227) {
  let chunkFPAJGGOCValue1529 = chunkFPAJGGOCHelper178(chunkFPAJGGOCParam1227);
  chunkFPAJGGOCHelper179(chunkFPAJGGOCValue1529);
  chunkFPAJGGOCHelper181(chunkFPAJGGOCValue1529);
  chunkFPAJGGOCHelper180(chunkFPAJGGOCValue1529);
  _baseUniqS(chunkFPAJGGOCValue1529, (chunkFPAJGGOCParam1842) => {
    chunkFPAJGGOCParam1842.isParent =
      chunkFPAJGGOCParam1842.categoryMatches.length > 0;
  });
}
function chunkFPAJGGOCHelper178(chunkFPAJGGOCParam902) {
  let chunkFPAJGGOCValue1282 = clone(chunkFPAJGGOCParam902),
    chunkFPAJGGOCValue1283 = chunkFPAJGGOCParam902,
    chunkFPAJGGOCValue1284 = true;
  for (; chunkFPAJGGOCValue1284; ) {
    chunkFPAJGGOCValue1283 = chunkFPAJGGOCHelper100(
      basePickByL(
        basePickByI(
          chunkFPAJGGOCValue1283,
          (chunkFPAJGGOCParam2246) => chunkFPAJGGOCParam2246.CATEGORIES,
        ),
      ),
    );
    let chunkFPAJGGOCValue1608 = $r(
      chunkFPAJGGOCValue1283,
      chunkFPAJGGOCValue1282,
    );
    chunkFPAJGGOCValue1282 = chunkFPAJGGOCValue1282.concat(
      chunkFPAJGGOCValue1608,
    );
    isEmptyT(chunkFPAJGGOCValue1608)
      ? (chunkFPAJGGOCValue1284 = false)
      : (chunkFPAJGGOCValue1283 = chunkFPAJGGOCValue1608);
  }
  return chunkFPAJGGOCValue1282;
}
function chunkFPAJGGOCHelper179(chunkFPAJGGOCParam641) {
  _baseUniqS(chunkFPAJGGOCParam641, (chunkFPAJGGOCParam729) => {
    chunkFPAJGGOCHelper182(chunkFPAJGGOCParam729) ||
      ((chunkFPAJGGOCValue105[chunkFPAJGGOCValue104] = chunkFPAJGGOCParam729),
      (chunkFPAJGGOCParam729.tokenTypeIdx = chunkFPAJGGOCValue104++));
    to(chunkFPAJGGOCParam729) &&
      !isArrayLikeObjectV(chunkFPAJGGOCParam729.CATEGORIES) &&
      (chunkFPAJGGOCParam729.CATEGORIES = [chunkFPAJGGOCParam729.CATEGORIES]);
    to(chunkFPAJGGOCParam729) || (chunkFPAJGGOCParam729.CATEGORIES = []);
    no(chunkFPAJGGOCParam729) || (chunkFPAJGGOCParam729.categoryMatches = []);
    chunkFPAJGGOCHelper183(chunkFPAJGGOCParam729) ||
      (chunkFPAJGGOCParam729.categoryMatchesMap = {});
  });
}
function chunkFPAJGGOCHelper180(chunkFPAJGGOCParam1042) {
  _baseUniqS(chunkFPAJGGOCParam1042, (chunkFPAJGGOCParam1197) => {
    chunkFPAJGGOCParam1197.categoryMatches = [];
    _baseUniqS(
      chunkFPAJGGOCParam1197.categoryMatchesMap,
      (chunkFPAJGGOCParam1700, chunkFPAJGGOCParam1701) => {
        chunkFPAJGGOCParam1197.categoryMatches.push(
          chunkFPAJGGOCValue105[chunkFPAJGGOCParam1701].tokenTypeIdx,
        );
      },
    );
  });
}
function chunkFPAJGGOCHelper181(chunkFPAJGGOCParam1938) {
  _baseUniqS(chunkFPAJGGOCParam1938, (chunkFPAJGGOCParam2187) => {
    $a([], chunkFPAJGGOCParam2187);
  });
}
function $a(chunkFPAJGGOCParam1016, chunkFPAJGGOCParam1017) {
  _baseUniqS(chunkFPAJGGOCParam1016, (chunkFPAJGGOCParam1878) => {
    chunkFPAJGGOCParam1017.categoryMatchesMap[
      chunkFPAJGGOCParam1878.tokenTypeIdx
    ] = true;
  });
  _baseUniqS(chunkFPAJGGOCParam1017.CATEGORIES, (chunkFPAJGGOCParam1744) => {
    let chunkFPAJGGOCValue1827 = chunkFPAJGGOCParam1016.concat(
      chunkFPAJGGOCParam1017,
    );
    chunkFPAJGGOCHelper112(chunkFPAJGGOCValue1827, chunkFPAJGGOCParam1744) ||
      $a(chunkFPAJGGOCValue1827, chunkFPAJGGOCParam1744);
  });
}
function chunkFPAJGGOCHelper182(chunkFPAJGGOCParam2009) {
  return basePickByR(chunkFPAJGGOCParam2009, "tokenTypeIdx");
}
function to(chunkFPAJGGOCParam2069) {
  return basePickByR(chunkFPAJGGOCParam2069, "CATEGORIES");
}
function no(chunkFPAJGGOCParam1969) {
  return basePickByR(chunkFPAJGGOCParam1969, "categoryMatches");
}
function chunkFPAJGGOCHelper183(chunkFPAJGGOCParam1939) {
  return basePickByR(chunkFPAJGGOCParam1939, "categoryMatchesMap");
}
function chunkFPAJGGOCHelper184(chunkFPAJGGOCParam2010) {
  return basePickByR(chunkFPAJGGOCParam2010, "tokenTypeIdx");
}
var chunkFPAJGGOCValue106 = {
    buildUnableToPopLexerModeMessage(chunkFPAJGGOCParam1198) {
      return `Unable to pop Lexer Mode after encountering Token ->${chunkFPAJGGOCParam1198.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage(
      chunkFPAJGGOCParam1151,
      chunkFPAJGGOCParam1152,
      chunkFPAJGGOCParam1153,
      chunkFPAJGGOCParam1154,
      chunkFPAJGGOCParam1155,
    ) {
      return `unexpected character: ->${chunkFPAJGGOCParam1151.charAt(chunkFPAJGGOCParam1152)}<- at offset: ${chunkFPAJGGOCParam1152}, skipped ${chunkFPAJGGOCParam1153} characters.`;
    },
  },
  chunkFPAJGGOCValue107;
(function (chunkFPAJGGOCParam49) {
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.MISSING_PATTERN = 0)] =
    "MISSING_PATTERN";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.INVALID_PATTERN = 1)] =
    "INVALID_PATTERN";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.EOI_ANCHOR_FOUND = 2)] =
    "EOI_ANCHOR_FOUND";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.UNSUPPORTED_FLAGS_FOUND = 3)] =
    "UNSUPPORTED_FLAGS_FOUND";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.DUPLICATE_PATTERNS_FOUND = 4)] =
    "DUPLICATE_PATTERNS_FOUND";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.INVALID_GROUP_TYPE_FOUND = 5)] =
    "INVALID_GROUP_TYPE_FOUND";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.PUSH_MODE_DOES_NOT_EXIST = 6)] =
    "PUSH_MODE_DOES_NOT_EXIST";
  chunkFPAJGGOCParam49[
    (chunkFPAJGGOCParam49.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7)
  ] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
  chunkFPAJGGOCParam49[
    (chunkFPAJGGOCParam49.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8)
  ] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
  chunkFPAJGGOCParam49[
    (chunkFPAJGGOCParam49.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9)
  ] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
  chunkFPAJGGOCParam49[
    (chunkFPAJGGOCParam49.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10)
  ] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.SOI_ANCHOR_FOUND = 11)] =
    "SOI_ANCHOR_FOUND";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.EMPTY_MATCH_PATTERN = 12)] =
    "EMPTY_MATCH_PATTERN";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.NO_LINE_BREAKS_FLAGS = 13)] =
    "NO_LINE_BREAKS_FLAGS";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.UNREACHABLE_PATTERN = 14)] =
    "UNREACHABLE_PATTERN";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.IDENTIFY_TERMINATOR = 15)] =
    "IDENTIFY_TERMINATOR";
  chunkFPAJGGOCParam49[(chunkFPAJGGOCParam49.CUSTOM_LINE_BREAK = 16)] =
    "CUSTOM_LINE_BREAK";
  chunkFPAJGGOCParam49[
    (chunkFPAJGGOCParam49.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17)
  ] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})((chunkFPAJGGOCValue107 ||= {}));
var chunkFPAJGGOCValue108 = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: ["\n", "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: chunkFPAJGGOCValue106,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true,
};
Object.freeze(chunkFPAJGGOCValue108);
var chunkFPAJGGOCValue109 = class {
  constructor(
    chunkFPAJGGOCParam3,
    chunkFPAJGGOCParam4 = chunkFPAJGGOCValue108,
  ) {
    if (
      ((this.lexerDefinition = chunkFPAJGGOCParam3),
      (this.lexerDefinitionErrors = []),
      (this.lexerDefinitionWarning = []),
      (this.patternIdxToConfig = {}),
      (this.charCodeToPatternIdxToConfig = {}),
      (this.modes = []),
      (this.emptyGroups = {}),
      (this.trackStartLines = true),
      (this.trackEndLines = true),
      (this.hasCustom = false),
      (this.canModeBeOptimized = {}),
      (this.TRACE_INIT = (chunkFPAJGGOCParam245, chunkFPAJGGOCParam246) => {
        if (this.traceInitPerf === true) {
          this.traceInitIndent++;
          let chunkFPAJGGOCValue748 = Array(this.traceInitIndent + 1).join(
            "\t",
          );
          this.traceInitIndent < this.traceInitMaxIdent &&
            console.log(
              `${chunkFPAJGGOCValue748}--> <${chunkFPAJGGOCParam245}>`,
            );
          let { time, value } = chunkFPAJGGOCHelper121(chunkFPAJGGOCParam246),
            chunkFPAJGGOCValue749 = time > 10 ? console.warn : console.log;
          return (
            this.traceInitIndent < this.traceInitMaxIdent &&
              chunkFPAJGGOCValue749(
                `${chunkFPAJGGOCValue748}<-- <${chunkFPAJGGOCParam245}> time: ${time}ms`,
              ),
            this.traceInitIndent--,
            value
          );
        } else return chunkFPAJGGOCParam246();
      }),
      typeof chunkFPAJGGOCParam4 == "boolean")
    )
      throw Error(
        "The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported",
      );
    this.config = chunkFPAJGGOCValue68(
      {},
      chunkFPAJGGOCValue108,
      chunkFPAJGGOCParam4,
    );
    let chunkFPAJGGOCValue325 = this.config.traceInitPerf;
    chunkFPAJGGOCValue325 === true
      ? ((this.traceInitMaxIdent = 1 / 0), (this.traceInitPerf = true))
      : typeof chunkFPAJGGOCValue325 == "number" &&
        ((this.traceInitMaxIdent = chunkFPAJGGOCValue325),
        (this.traceInitPerf = true));
    this.traceInitIndent = -1;
    this.TRACE_INIT("Lexer Constructor", () => {
      let chunkFPAJGGOCValue326,
        chunkFPAJGGOCValue327 = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (
          this.config.lineTerminatorsPattern ===
          chunkFPAJGGOCValue108.lineTerminatorsPattern
        )
          this.config.lineTerminatorsPattern = chunkFPAJGGOCValue102;
        else if (
          this.config.lineTerminatorCharacters ===
          chunkFPAJGGOCValue108.lineTerminatorCharacters
        )
          throw Error(
            "Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n\tFor details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS",
          );
        if (
          chunkFPAJGGOCParam4.safeMode &&
          chunkFPAJGGOCParam4.ensureOptimizations
        )
          throw Error(
            '"safeMode" and "ensureOptimizations" flags are mutually exclusive.',
          );
        this.trackStartLines = /full|onlyStart/i.test(
          this.config.positionTracking,
        );
        this.trackEndLines = /full/i.test(this.config.positionTracking);
        isArrayLikeObjectV(chunkFPAJGGOCParam3)
          ? (chunkFPAJGGOCValue326 = {
              modes: {
                defaultMode: clone(chunkFPAJGGOCParam3),
              },
              defaultMode: "defaultMode",
            })
          : ((chunkFPAJGGOCValue327 = false),
            (chunkFPAJGGOCValue326 = clone(chunkFPAJGGOCParam3)));
      });
      this.config.skipValidations === false &&
        (this.TRACE_INIT("performRuntimeChecks", () => {
          this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(
            chunkFPAJGGOCHelper164(
              chunkFPAJGGOCValue326,
              this.trackStartLines,
              this.config.lineTerminatorCharacters,
            ),
          );
        }),
        this.TRACE_INIT("performWarningRuntimeChecks", () => {
          this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(
            chunkFPAJGGOCHelper165(
              chunkFPAJGGOCValue326,
              this.trackStartLines,
              this.config.lineTerminatorCharacters,
            ),
          );
        }));
      chunkFPAJGGOCValue326.modes = chunkFPAJGGOCValue326.modes
        ? chunkFPAJGGOCValue326.modes
        : {};
      _baseUniqS(
        chunkFPAJGGOCValue326.modes,
        (chunkFPAJGGOCParam1734, chunkFPAJGGOCParam1735) => {
          chunkFPAJGGOCValue326.modes[chunkFPAJGGOCParam1735] =
            chunkFPAJGGOCHelper115(
              chunkFPAJGGOCParam1734,
              (chunkFPAJGGOCParam2314) => baseUniqR(chunkFPAJGGOCParam2314),
            );
        },
      );
      let chunkFPAJGGOCValue328 = baseUniqD(chunkFPAJGGOCValue326.modes);
      if (
        (_baseUniqS(
          chunkFPAJGGOCValue326.modes,
          (chunkFPAJGGOCParam55, chunkFPAJGGOCParam56) => {
            this.TRACE_INIT(
              `Mode: <${chunkFPAJGGOCParam56}> processing`,
              () => {
                if (
                  (this.modes.push(chunkFPAJGGOCParam56),
                  this.config.skipValidations === false &&
                    this.TRACE_INIT("validatePatterns", () => {
                      this.lexerDefinitionErrors =
                        this.lexerDefinitionErrors.concat(
                          chunkFPAJGGOCHelper148(
                            chunkFPAJGGOCParam55,
                            chunkFPAJGGOCValue328,
                          ),
                        );
                    }),
                  isEmptyT(this.lexerDefinitionErrors))
                ) {
                  chunkFPAJGGOCHelper177(chunkFPAJGGOCParam55);
                  let chunkFPAJGGOCValue527;
                  this.TRACE_INIT("analyzeTokenTypes", () => {
                    chunkFPAJGGOCValue527 = chunkFPAJGGOCHelper147(
                      chunkFPAJGGOCParam55,
                      {
                        lineTerminatorCharacters:
                          this.config.lineTerminatorCharacters,
                        positionTracking: chunkFPAJGGOCParam4.positionTracking,
                        ensureOptimizations:
                          chunkFPAJGGOCParam4.ensureOptimizations,
                        safeMode: chunkFPAJGGOCParam4.safeMode,
                        tracer: this.TRACE_INIT,
                      },
                    );
                  });
                  this.patternIdxToConfig[chunkFPAJGGOCParam56] =
                    chunkFPAJGGOCValue527.patternIdxToConfig;
                  this.charCodeToPatternIdxToConfig[chunkFPAJGGOCParam56] =
                    chunkFPAJGGOCValue527.charCodeToPatternIdxToConfig;
                  this.emptyGroups = chunkFPAJGGOCValue68(
                    {},
                    this.emptyGroups,
                    chunkFPAJGGOCValue527.emptyGroups,
                  );
                  this.hasCustom =
                    chunkFPAJGGOCValue527.hasCustom || this.hasCustom;
                  this.canModeBeOptimized[chunkFPAJGGOCParam56] =
                    chunkFPAJGGOCValue527.canBeOptimized;
                }
              },
            );
          },
        ),
        (this.defaultMode = chunkFPAJGGOCValue326.defaultMode),
        !isEmptyT(this.lexerDefinitionErrors) &&
          !this.config.deferDefinitionErrorsHandling)
      ) {
        let chunkFPAJGGOCValue1243 = basePickByI(
          this.lexerDefinitionErrors,
          (chunkFPAJGGOCParam2266) => chunkFPAJGGOCParam2266.message,
        ).join("-----------------------\n");
        throw Error(
          "Errors detected in definition of Lexer:\n" + chunkFPAJGGOCValue1243,
        );
      }
      _baseUniqS(this.lexerDefinitionWarning, (chunkFPAJGGOCParam2107) => {
        chunkFPAJGGOCHelper120(chunkFPAJGGOCParam2107.message);
      });
      this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (
          (chunkFPAJGGOCValue100
            ? ((this.chopInput = isArrayLikeObjectZ),
              (this.match = this.matchWithTest))
            : ((this.updateLastIndex = baseUniqJ),
              (this.match = this.matchWithExec)),
          chunkFPAJGGOCValue327 && (this.handleModes = baseUniqJ),
          this.trackStartLines === false &&
            (this.computeNewColumn = isArrayLikeObjectZ),
          this.trackEndLines === false &&
            (this.updateTokenEndLineColumnLocation = baseUniqJ),
          /full/i.test(this.config.positionTracking))
        )
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(
            `Invalid <positionTracking> config option: "${this.config.positionTracking}"`,
          );
        this.hasCustom
          ? ((this.addToken = this.addTokenUsingPush),
            (this.handlePayload = this.handlePayloadWithCustom))
          : ((this.addToken = this.addTokenUsingMemberAccess),
            (this.handlePayload = this.handlePayloadNoCustom));
      });
      this.TRACE_INIT("Failed Optimization Warnings", () => {
        let chunkFPAJGGOCValue750 = baseUniqN(
          this.canModeBeOptimized,
          (
            chunkFPAJGGOCParam2138,
            chunkFPAJGGOCParam2139,
            chunkFPAJGGOCParam2140,
          ) => (
            chunkFPAJGGOCParam2139 === false &&
              chunkFPAJGGOCParam2138.push(chunkFPAJGGOCParam2140),
            chunkFPAJGGOCParam2138
          ),
          [],
        );
        if (
          chunkFPAJGGOCParam4.ensureOptimizations &&
          !isEmptyT(chunkFPAJGGOCValue750)
        )
          throw Error(`Lexer Modes: < ${chunkFPAJGGOCValue750.join(", ")} > cannot be optimized.\n	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      });
      this.TRACE_INIT("clearRegExpParserCache", () => {
        chunkFPAJGGOCHelper139();
      });
      this.TRACE_INIT("toFastProperties", () => {
        chunkFPAJGGOCHelper122(this);
      });
    });
  }
  tokenize(chunkFPAJGGOCParam520, chunkFPAJGGOCParam521 = this.defaultMode) {
    if (!isEmptyT(this.lexerDefinitionErrors)) {
      let chunkFPAJGGOCValue1232 = basePickByI(
        this.lexerDefinitionErrors,
        (chunkFPAJGGOCParam2267) => chunkFPAJGGOCParam2267.message,
      ).join("-----------------------\n");
      throw Error(
        "Unable to Tokenize because Errors detected in definition of Lexer:\n" +
          chunkFPAJGGOCValue1232,
      );
    }
    return this.tokenizeInternal(chunkFPAJGGOCParam520, chunkFPAJGGOCParam521);
  }
  tokenizeInternal(chunkFPAJGGOCParam6, chunkFPAJGGOCParam7) {
    let chunkFPAJGGOCValue329,
      chunkFPAJGGOCValue330,
      chunkFPAJGGOCValue331,
      chunkFPAJGGOCValue332,
      chunkFPAJGGOCValue333,
      chunkFPAJGGOCValue334,
      chunkFPAJGGOCValue335,
      chunkFPAJGGOCValue336,
      chunkFPAJGGOCValue337,
      chunkFPAJGGOCValue338,
      chunkFPAJGGOCValue339,
      chunkFPAJGGOCValue340,
      chunkFPAJGGOCValue341,
      chunkFPAJGGOCValue342,
      chunkFPAJGGOCValue343,
      chunkFPAJGGOCValue344 = chunkFPAJGGOCParam6,
      chunkFPAJGGOCValue345 = chunkFPAJGGOCValue344.length,
      chunkFPAJGGOCValue346 = 0,
      chunkFPAJGGOCValue347 = 0,
      chunkFPAJGGOCValue348 = this.hasCustom
        ? 0
        : Math.floor(chunkFPAJGGOCParam6.length / 10),
      chunkFPAJGGOCValue349 = Array(chunkFPAJGGOCValue348),
      chunkFPAJGGOCValue350 = [],
      chunkFPAJGGOCValue351 = this.trackStartLines ? 1 : undefined,
      chunkFPAJGGOCValue352 = this.trackStartLines ? 1 : undefined,
      chunkFPAJGGOCValue353 = chunkFPAJGGOCHelper166(this.emptyGroups),
      chunkFPAJGGOCValue354 = this.trackStartLines,
      chunkFPAJGGOCValue355 = this.config.lineTerminatorsPattern,
      chunkFPAJGGOCValue356 = 0,
      chunkFPAJGGOCValue357 = [],
      chunkFPAJGGOCValue358 = [],
      chunkFPAJGGOCValue359 = [],
      chunkFPAJGGOCValue360 = [];
    Object.freeze(chunkFPAJGGOCValue360);
    let chunkFPAJGGOCValue361;
    function chunkFPAJGGOCHelper368() {
      return chunkFPAJGGOCValue357;
    }
    function chunkFPAJGGOCHelper369(chunkFPAJGGOCParam1472) {
      let chunkFPAJGGOCValue1716 = chunkFPAJGGOCHelper173(
          chunkFPAJGGOCParam1472,
        ),
        chunkFPAJGGOCValue1717 = chunkFPAJGGOCValue358[chunkFPAJGGOCValue1716];
      return chunkFPAJGGOCValue1717 === undefined
        ? chunkFPAJGGOCValue360
        : chunkFPAJGGOCValue1717;
    }
    let chunkFPAJGGOCValue362 = (chunkFPAJGGOCParam202) => {
      if (
        chunkFPAJGGOCValue359.length === 1 &&
        chunkFPAJGGOCParam202.tokenType.PUSH_MODE === undefined
      ) {
        let chunkFPAJGGOCValue1056 =
          this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(
            chunkFPAJGGOCParam202,
          );
        chunkFPAJGGOCValue350.push({
          offset: chunkFPAJGGOCParam202.startOffset,
          line: chunkFPAJGGOCParam202.startLine,
          column: chunkFPAJGGOCParam202.startColumn,
          length: chunkFPAJGGOCParam202.image.length,
          message: chunkFPAJGGOCValue1056,
        });
      } else {
        chunkFPAJGGOCValue359.pop();
        let chunkFPAJGGOCValue1063 = basePickByS(chunkFPAJGGOCValue359);
        chunkFPAJGGOCValue357 = this.patternIdxToConfig[chunkFPAJGGOCValue1063];
        chunkFPAJGGOCValue358 =
          this.charCodeToPatternIdxToConfig[chunkFPAJGGOCValue1063];
        chunkFPAJGGOCValue356 = chunkFPAJGGOCValue357.length;
        let chunkFPAJGGOCValue1064 =
          this.canModeBeOptimized[chunkFPAJGGOCValue1063] &&
          this.config.safeMode === false;
        chunkFPAJGGOCValue361 =
          chunkFPAJGGOCValue358 && chunkFPAJGGOCValue1064
            ? chunkFPAJGGOCHelper369
            : chunkFPAJGGOCHelper368;
      }
    };
    function chunkFPAJGGOCHelper370(chunkFPAJGGOCParam627) {
      chunkFPAJGGOCValue359.push(chunkFPAJGGOCParam627);
      chunkFPAJGGOCValue358 =
        this.charCodeToPatternIdxToConfig[chunkFPAJGGOCParam627];
      chunkFPAJGGOCValue357 = this.patternIdxToConfig[chunkFPAJGGOCParam627];
      chunkFPAJGGOCValue356 = chunkFPAJGGOCValue357.length;
      chunkFPAJGGOCValue356 = chunkFPAJGGOCValue357.length;
      let chunkFPAJGGOCValue1048 =
        this.canModeBeOptimized[chunkFPAJGGOCParam627] &&
        this.config.safeMode === false;
      chunkFPAJGGOCValue361 =
        chunkFPAJGGOCValue358 && chunkFPAJGGOCValue1048
          ? chunkFPAJGGOCHelper369
          : chunkFPAJGGOCHelper368;
    }
    chunkFPAJGGOCHelper370.call(this, chunkFPAJGGOCParam7);
    let chunkFPAJGGOCValue363,
      chunkFPAJGGOCValue364 = this.config.recoveryEnabled;
    for (; chunkFPAJGGOCValue346 < chunkFPAJGGOCValue345; ) {
      chunkFPAJGGOCValue334 = null;
      let chunkFPAJGGOCValue395 = chunkFPAJGGOCValue344.charCodeAt(
          chunkFPAJGGOCValue346,
        ),
        chunkFPAJGGOCValue396 = chunkFPAJGGOCValue361(chunkFPAJGGOCValue395),
        chunkFPAJGGOCValue397 = chunkFPAJGGOCValue396.length;
      for (
        chunkFPAJGGOCValue329 = 0;
        chunkFPAJGGOCValue329 < chunkFPAJGGOCValue397;
        chunkFPAJGGOCValue329++
      ) {
        chunkFPAJGGOCValue363 = chunkFPAJGGOCValue396[chunkFPAJGGOCValue329];
        let chunkFPAJGGOCValue477 = chunkFPAJGGOCValue363.pattern;
        chunkFPAJGGOCValue335 = null;
        let chunkFPAJGGOCValue478 = chunkFPAJGGOCValue363.short;
        if (
          (chunkFPAJGGOCValue478 === false
            ? chunkFPAJGGOCValue363.isCustom === true
              ? ((chunkFPAJGGOCValue343 = chunkFPAJGGOCValue477.exec(
                  chunkFPAJGGOCValue344,
                  chunkFPAJGGOCValue346,
                  chunkFPAJGGOCValue349,
                  chunkFPAJGGOCValue353,
                )),
                chunkFPAJGGOCValue343 === null
                  ? (chunkFPAJGGOCValue334 = null)
                  : ((chunkFPAJGGOCValue334 = chunkFPAJGGOCValue343[0]),
                    chunkFPAJGGOCValue343.payload !== undefined &&
                      (chunkFPAJGGOCValue335 = chunkFPAJGGOCValue343.payload)))
              : (this.updateLastIndex(
                  chunkFPAJGGOCValue477,
                  chunkFPAJGGOCValue346,
                ),
                (chunkFPAJGGOCValue334 = this.match(
                  chunkFPAJGGOCValue477,
                  chunkFPAJGGOCParam6,
                  chunkFPAJGGOCValue346,
                )))
            : chunkFPAJGGOCValue395 === chunkFPAJGGOCValue478 &&
              (chunkFPAJGGOCValue334 = chunkFPAJGGOCValue477),
          chunkFPAJGGOCValue334 !== null)
        ) {
          if (
            ((chunkFPAJGGOCValue333 = chunkFPAJGGOCValue363.longerAlt),
            chunkFPAJGGOCValue333 !== undefined)
          ) {
            let chunkFPAJGGOCValue604 = chunkFPAJGGOCValue333.length;
            for (
              chunkFPAJGGOCValue331 = 0;
              chunkFPAJGGOCValue331 < chunkFPAJGGOCValue604;
              chunkFPAJGGOCValue331++
            ) {
              let chunkFPAJGGOCValue670 =
                  chunkFPAJGGOCValue357[
                    chunkFPAJGGOCValue333[chunkFPAJGGOCValue331]
                  ],
                chunkFPAJGGOCValue671 = chunkFPAJGGOCValue670.pattern;
              if (
                ((chunkFPAJGGOCValue336 = null),
                chunkFPAJGGOCValue670.isCustom === true
                  ? ((chunkFPAJGGOCValue343 = chunkFPAJGGOCValue671.exec(
                      chunkFPAJGGOCValue344,
                      chunkFPAJGGOCValue346,
                      chunkFPAJGGOCValue349,
                      chunkFPAJGGOCValue353,
                    )),
                    chunkFPAJGGOCValue343 === null
                      ? (chunkFPAJGGOCValue332 = null)
                      : ((chunkFPAJGGOCValue332 = chunkFPAJGGOCValue343[0]),
                        chunkFPAJGGOCValue343.payload !== undefined &&
                          (chunkFPAJGGOCValue336 =
                            chunkFPAJGGOCValue343.payload)))
                  : (this.updateLastIndex(
                      chunkFPAJGGOCValue671,
                      chunkFPAJGGOCValue346,
                    ),
                    (chunkFPAJGGOCValue332 = this.match(
                      chunkFPAJGGOCValue671,
                      chunkFPAJGGOCParam6,
                      chunkFPAJGGOCValue346,
                    ))),
                chunkFPAJGGOCValue332 &&
                  chunkFPAJGGOCValue332.length > chunkFPAJGGOCValue334.length)
              ) {
                chunkFPAJGGOCValue334 = chunkFPAJGGOCValue332;
                chunkFPAJGGOCValue335 = chunkFPAJGGOCValue336;
                chunkFPAJGGOCValue363 = chunkFPAJGGOCValue670;
                break;
              }
            }
          }
          break;
        }
      }
      if (chunkFPAJGGOCValue334 !== null) {
        if (
          ((chunkFPAJGGOCValue337 = chunkFPAJGGOCValue334.length),
          (chunkFPAJGGOCValue338 = chunkFPAJGGOCValue363.group),
          chunkFPAJGGOCValue338 !== undefined &&
            ((chunkFPAJGGOCValue339 = chunkFPAJGGOCValue363.tokenTypeIdx),
            (chunkFPAJGGOCValue340 = this.createTokenInstance(
              chunkFPAJGGOCValue334,
              chunkFPAJGGOCValue346,
              chunkFPAJGGOCValue339,
              chunkFPAJGGOCValue363.tokenType,
              chunkFPAJGGOCValue351,
              chunkFPAJGGOCValue352,
              chunkFPAJGGOCValue337,
            )),
            this.handlePayload(chunkFPAJGGOCValue340, chunkFPAJGGOCValue335),
            chunkFPAJGGOCValue338 === false
              ? (chunkFPAJGGOCValue347 = this.addToken(
                  chunkFPAJGGOCValue349,
                  chunkFPAJGGOCValue347,
                  chunkFPAJGGOCValue340,
                ))
              : chunkFPAJGGOCValue353[chunkFPAJGGOCValue338].push(
                  chunkFPAJGGOCValue340,
                )),
          (chunkFPAJGGOCParam6 = this.chopInput(
            chunkFPAJGGOCParam6,
            chunkFPAJGGOCValue337,
          )),
          (chunkFPAJGGOCValue346 += chunkFPAJGGOCValue337),
          (chunkFPAJGGOCValue352 = this.computeNewColumn(
            chunkFPAJGGOCValue352,
            chunkFPAJGGOCValue337,
          )),
          chunkFPAJGGOCValue354 === true &&
            chunkFPAJGGOCValue363.canLineTerminator === true)
        ) {
          let chunkFPAJGGOCValue951 = 0,
            chunkFPAJGGOCValue952,
            chunkFPAJGGOCValue953;
          chunkFPAJGGOCValue355.lastIndex = 0;
          do {
            chunkFPAJGGOCValue952 = chunkFPAJGGOCValue355.test(
              chunkFPAJGGOCValue334,
            );
            chunkFPAJGGOCValue952 === true &&
              ((chunkFPAJGGOCValue953 = chunkFPAJGGOCValue355.lastIndex - 1),
              chunkFPAJGGOCValue951++);
          } while (chunkFPAJGGOCValue952 === true);
          chunkFPAJGGOCValue951 !== 0 &&
            ((chunkFPAJGGOCValue351 += chunkFPAJGGOCValue951),
            (chunkFPAJGGOCValue352 =
              chunkFPAJGGOCValue337 - chunkFPAJGGOCValue953),
            this.updateTokenEndLineColumnLocation(
              chunkFPAJGGOCValue340,
              chunkFPAJGGOCValue338,
              chunkFPAJGGOCValue953,
              chunkFPAJGGOCValue951,
              chunkFPAJGGOCValue351,
              chunkFPAJGGOCValue352,
              chunkFPAJGGOCValue337,
            ));
        }
        this.handleModes(
          chunkFPAJGGOCValue363,
          chunkFPAJGGOCValue362,
          chunkFPAJGGOCHelper370,
          chunkFPAJGGOCValue340,
        );
      } else {
        let chunkFPAJGGOCValue502 = chunkFPAJGGOCValue346,
          chunkFPAJGGOCValue503 = chunkFPAJGGOCValue351,
          chunkFPAJGGOCValue504 = chunkFPAJGGOCValue352,
          chunkFPAJGGOCValue505 = chunkFPAJGGOCValue364 === false;
        for (
          ;
          chunkFPAJGGOCValue505 === false &&
          chunkFPAJGGOCValue346 < chunkFPAJGGOCValue345;

        )
          for (
            chunkFPAJGGOCParam6 = this.chopInput(chunkFPAJGGOCParam6, 1),
              chunkFPAJGGOCValue346++,
              chunkFPAJGGOCValue330 = 0;
            chunkFPAJGGOCValue330 < chunkFPAJGGOCValue356;
            chunkFPAJGGOCValue330++
          ) {
            let chunkFPAJGGOCValue831 =
                chunkFPAJGGOCValue357[chunkFPAJGGOCValue330],
              chunkFPAJGGOCValue832 = chunkFPAJGGOCValue831.pattern,
              chunkFPAJGGOCValue833 = chunkFPAJGGOCValue831.short;
            if (
              (chunkFPAJGGOCValue833 === false
                ? chunkFPAJGGOCValue831.isCustom === true
                  ? (chunkFPAJGGOCValue505 =
                      chunkFPAJGGOCValue832.exec(
                        chunkFPAJGGOCValue344,
                        chunkFPAJGGOCValue346,
                        chunkFPAJGGOCValue349,
                        chunkFPAJGGOCValue353,
                      ) !== null)
                  : (this.updateLastIndex(
                      chunkFPAJGGOCValue832,
                      chunkFPAJGGOCValue346,
                    ),
                    (chunkFPAJGGOCValue505 =
                      chunkFPAJGGOCValue832.exec(chunkFPAJGGOCParam6) !== null))
                : chunkFPAJGGOCValue344.charCodeAt(chunkFPAJGGOCValue346) ===
                    chunkFPAJGGOCValue833 && (chunkFPAJGGOCValue505 = true),
              chunkFPAJGGOCValue505 === true)
            )
              break;
          }
        if (
          ((chunkFPAJGGOCValue341 =
            chunkFPAJGGOCValue346 - chunkFPAJGGOCValue502),
          (chunkFPAJGGOCValue352 = this.computeNewColumn(
            chunkFPAJGGOCValue352,
            chunkFPAJGGOCValue341,
          )),
          (chunkFPAJGGOCValue342 =
            this.config.errorMessageProvider.buildUnexpectedCharactersMessage(
              chunkFPAJGGOCValue344,
              chunkFPAJGGOCValue502,
              chunkFPAJGGOCValue341,
              chunkFPAJGGOCValue503,
              chunkFPAJGGOCValue504,
            )),
          chunkFPAJGGOCValue350.push({
            offset: chunkFPAJGGOCValue502,
            line: chunkFPAJGGOCValue503,
            column: chunkFPAJGGOCValue504,
            length: chunkFPAJGGOCValue341,
            message: chunkFPAJGGOCValue342,
          }),
          chunkFPAJGGOCValue364 === false)
        )
          break;
      }
    }
    return (
      this.hasCustom || (chunkFPAJGGOCValue349.length = chunkFPAJGGOCValue347),
      {
        tokens: chunkFPAJGGOCValue349,
        groups: chunkFPAJGGOCValue353,
        errors: chunkFPAJGGOCValue350,
      }
    );
  }
  handleModes(
    chunkFPAJGGOCParam1043,
    chunkFPAJGGOCParam1044,
    chunkFPAJGGOCParam1045,
    chunkFPAJGGOCParam1046,
  ) {
    if (chunkFPAJGGOCParam1043.pop === true) {
      let chunkFPAJGGOCValue1794 = chunkFPAJGGOCParam1043.push;
      chunkFPAJGGOCParam1044(chunkFPAJGGOCParam1046);
      chunkFPAJGGOCValue1794 !== undefined &&
        chunkFPAJGGOCParam1045.call(this, chunkFPAJGGOCValue1794);
    } else
      chunkFPAJGGOCParam1043.push !== undefined &&
        chunkFPAJGGOCParam1045.call(this, chunkFPAJGGOCParam1043.push);
  }
  chopInput(chunkFPAJGGOCParam2060, chunkFPAJGGOCParam2061) {
    return chunkFPAJGGOCParam2060.substring(chunkFPAJGGOCParam2061);
  }
  updateLastIndex(chunkFPAJGGOCParam2062, chunkFPAJGGOCParam2063) {
    chunkFPAJGGOCParam2062.lastIndex = chunkFPAJGGOCParam2063;
  }
  updateTokenEndLineColumnLocation(
    chunkFPAJGGOCParam781,
    chunkFPAJGGOCParam782,
    chunkFPAJGGOCParam783,
    chunkFPAJGGOCParam784,
    chunkFPAJGGOCParam785,
    chunkFPAJGGOCParam786,
    chunkFPAJGGOCParam787,
  ) {
    let chunkFPAJGGOCValue1197, chunkFPAJGGOCValue1198;
    chunkFPAJGGOCParam782 !== undefined &&
      ((chunkFPAJGGOCValue1197 =
        chunkFPAJGGOCParam783 === chunkFPAJGGOCParam787 - 1),
      (chunkFPAJGGOCValue1198 = chunkFPAJGGOCValue1197 ? -1 : 0),
      (chunkFPAJGGOCParam784 === 1 && chunkFPAJGGOCValue1197 === true) ||
        ((chunkFPAJGGOCParam781.endLine =
          chunkFPAJGGOCParam785 + chunkFPAJGGOCValue1198),
        (chunkFPAJGGOCParam781.endColumn =
          chunkFPAJGGOCParam786 - 1 + -chunkFPAJGGOCValue1198)));
  }
  computeNewColumn(chunkFPAJGGOCParam2087, chunkFPAJGGOCParam2088) {
    return chunkFPAJGGOCParam2087 + chunkFPAJGGOCParam2088;
  }
  createOffsetOnlyToken(
    chunkFPAJGGOCParam1368,
    chunkFPAJGGOCParam1369,
    chunkFPAJGGOCParam1370,
    chunkFPAJGGOCParam1371,
  ) {
    return {
      image: chunkFPAJGGOCParam1368,
      startOffset: chunkFPAJGGOCParam1369,
      tokenTypeIdx: chunkFPAJGGOCParam1370,
      tokenType: chunkFPAJGGOCParam1371,
    };
  }
  createStartOnlyToken(
    chunkFPAJGGOCParam988,
    chunkFPAJGGOCParam989,
    chunkFPAJGGOCParam990,
    chunkFPAJGGOCParam991,
    chunkFPAJGGOCParam992,
    chunkFPAJGGOCParam993,
  ) {
    return {
      image: chunkFPAJGGOCParam988,
      startOffset: chunkFPAJGGOCParam989,
      startLine: chunkFPAJGGOCParam992,
      startColumn: chunkFPAJGGOCParam993,
      tokenTypeIdx: chunkFPAJGGOCParam990,
      tokenType: chunkFPAJGGOCParam991,
    };
  }
  createFullToken(
    chunkFPAJGGOCParam717,
    chunkFPAJGGOCParam718,
    chunkFPAJGGOCParam719,
    chunkFPAJGGOCParam720,
    chunkFPAJGGOCParam721,
    chunkFPAJGGOCParam722,
    chunkFPAJGGOCParam723,
  ) {
    return {
      image: chunkFPAJGGOCParam717,
      startOffset: chunkFPAJGGOCParam718,
      endOffset: chunkFPAJGGOCParam718 + chunkFPAJGGOCParam723 - 1,
      startLine: chunkFPAJGGOCParam721,
      endLine: chunkFPAJGGOCParam721,
      startColumn: chunkFPAJGGOCParam722,
      endColumn: chunkFPAJGGOCParam722 + chunkFPAJGGOCParam723 - 1,
      tokenTypeIdx: chunkFPAJGGOCParam719,
      tokenType: chunkFPAJGGOCParam720,
    };
  }
  addTokenUsingPush(
    chunkFPAJGGOCParam1879,
    chunkFPAJGGOCParam1880,
    chunkFPAJGGOCParam1881,
  ) {
    return (
      chunkFPAJGGOCParam1879.push(chunkFPAJGGOCParam1881),
      chunkFPAJGGOCParam1880
    );
  }
  addTokenUsingMemberAccess(
    chunkFPAJGGOCParam1668,
    chunkFPAJGGOCParam1669,
    chunkFPAJGGOCParam1670,
  ) {
    return (
      (chunkFPAJGGOCParam1668[chunkFPAJGGOCParam1669] = chunkFPAJGGOCParam1670),
      chunkFPAJGGOCParam1669++,
      chunkFPAJGGOCParam1669
    );
  }
  handlePayloadNoCustom(chunkFPAJGGOCParam2169, chunkFPAJGGOCParam2170) {}
  handlePayloadWithCustom(chunkFPAJGGOCParam1714, chunkFPAJGGOCParam1715) {
    chunkFPAJGGOCParam1715 !== null &&
      (chunkFPAJGGOCParam1714.payload = chunkFPAJGGOCParam1715);
  }
  matchWithTest(
    chunkFPAJGGOCParam1486,
    chunkFPAJGGOCParam1487,
    chunkFPAJGGOCParam1488,
  ) {
    return chunkFPAJGGOCParam1486.test(chunkFPAJGGOCParam1487) === true
      ? chunkFPAJGGOCParam1487.substring(
          chunkFPAJGGOCParam1488,
          chunkFPAJGGOCParam1486.lastIndex,
        )
      : null;
  }
  matchWithExec(chunkFPAJGGOCParam1572, chunkFPAJGGOCParam1573) {
    let chunkFPAJGGOCValue1755 = chunkFPAJGGOCParam1572.exec(
      chunkFPAJGGOCParam1573,
    );
    return chunkFPAJGGOCValue1755 === null ? null : chunkFPAJGGOCValue1755[0];
  }
};
chunkFPAJGGOCValue109.SKIPPED =
  "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
chunkFPAJGGOCValue109.NA = /NOT_APPLICABLE/;
function chunkFPAJGGOCHelper185(chunkFPAJGGOCParam1958) {
  return chunkFPAJGGOCHelper186(chunkFPAJGGOCParam1958)
    ? chunkFPAJGGOCParam1958.LABEL
    : chunkFPAJGGOCParam1958.name;
}
function chunkFPAJGGOCHelper186(chunkFPAJGGOCParam1918) {
  return (
    basePickByN(chunkFPAJGGOCParam1918.LABEL) &&
    chunkFPAJGGOCParam1918.LABEL !== ""
  );
}
function chunkFPAJGGOCHelper187(chunkFPAJGGOCParam2155) {
  return chunkFPAJGGOCHelper188(chunkFPAJGGOCParam2155);
}
function chunkFPAJGGOCHelper188(chunkFPAJGGOCParam223) {
  let chunkFPAJGGOCValue636 = chunkFPAJGGOCParam223.pattern,
    chunkFPAJGGOCValue637 = {};
  if (
    ((chunkFPAJGGOCValue637.name = chunkFPAJGGOCParam223.name),
    baseUniqR(chunkFPAJGGOCValue636) ||
      (chunkFPAJGGOCValue637.PATTERN = chunkFPAJGGOCValue636),
    basePickByR(chunkFPAJGGOCParam223, "parent"))
  )
    throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
  return (
    basePickByR(chunkFPAJGGOCParam223, "categories") &&
      (chunkFPAJGGOCValue637.CATEGORIES = chunkFPAJGGOCParam223.categories),
    chunkFPAJGGOCHelper177([chunkFPAJGGOCValue637]),
    basePickByR(chunkFPAJGGOCParam223, "label") &&
      (chunkFPAJGGOCValue637.LABEL = chunkFPAJGGOCParam223.label),
    basePickByR(chunkFPAJGGOCParam223, "group") &&
      (chunkFPAJGGOCValue637.GROUP = chunkFPAJGGOCParam223.group),
    basePickByR(chunkFPAJGGOCParam223, "pop_mode") &&
      (chunkFPAJGGOCValue637.POP_MODE = chunkFPAJGGOCParam223.pop_mode),
    basePickByR(chunkFPAJGGOCParam223, "push_mode") &&
      (chunkFPAJGGOCValue637.PUSH_MODE = chunkFPAJGGOCParam223.push_mode),
    basePickByR(chunkFPAJGGOCParam223, "longer_alt") &&
      (chunkFPAJGGOCValue637.LONGER_ALT = chunkFPAJGGOCParam223.longer_alt),
    basePickByR(chunkFPAJGGOCParam223, "line_breaks") &&
      (chunkFPAJGGOCValue637.LINE_BREAKS = chunkFPAJGGOCParam223.line_breaks),
    basePickByR(chunkFPAJGGOCParam223, "start_chars_hint") &&
      (chunkFPAJGGOCValue637.START_CHARS_HINT =
        chunkFPAJGGOCParam223.start_chars_hint),
    chunkFPAJGGOCValue637
  );
}
var chunkFPAJGGOCValue118 = chunkFPAJGGOCHelper187({
  name: "EOF",
  pattern: chunkFPAJGGOCValue109.NA,
});
chunkFPAJGGOCHelper177([chunkFPAJGGOCValue118]);
function chunkFPAJGGOCHelper189(
  chunkFPAJGGOCParam796,
  chunkFPAJGGOCParam797,
  chunkFPAJGGOCParam798,
  chunkFPAJGGOCParam799,
  chunkFPAJGGOCParam800,
  chunkFPAJGGOCParam801,
  chunkFPAJGGOCParam802,
  chunkFPAJGGOCParam803,
) {
  return {
    image: chunkFPAJGGOCParam797,
    startOffset: chunkFPAJGGOCParam798,
    endOffset: chunkFPAJGGOCParam799,
    startLine: chunkFPAJGGOCParam800,
    endLine: chunkFPAJGGOCParam801,
    startColumn: chunkFPAJGGOCParam802,
    endColumn: chunkFPAJGGOCParam803,
    tokenTypeIdx: chunkFPAJGGOCParam796.tokenTypeIdx,
    tokenType: chunkFPAJGGOCParam796,
  };
}
function chunkFPAJGGOCHelper190(
  chunkFPAJGGOCParam2129,
  chunkFPAJGGOCParam2130,
) {
  return chunkFPAJGGOCHelper175(chunkFPAJGGOCParam2129, chunkFPAJGGOCParam2130);
}
var chunkFPAJGGOCValue119 = {
  buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
    return `Expecting ${chunkFPAJGGOCHelper186(expected) ? `--> ${chunkFPAJGGOCHelper185(expected)} <--` : `token of type --> ${expected.name} <--`} but found --> '${actual.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
    return "Redundant input, expecting EOF but found: " + firstRedundant.image;
  },
  buildNoViableAltMessage({
    expectedPathsPerAlt,
    actual,
    previous,
    customUserDescription,
    ruleName,
  }) {
    let chunkFPAJGGOCValue743 =
      "\nbut found: '" + chunkFPAJGGOCHelper110(actual).image + "'";
    return customUserDescription
      ? "Expecting: " + customUserDescription + chunkFPAJGGOCValue743
      : `Expecting: one of these possible Token sequences:\n${basePickByI(
          basePickByI(
            baseUniqN(
              expectedPathsPerAlt,
              (chunkFPAJGGOCParam2220, chunkFPAJGGOCParam2221) =>
                chunkFPAJGGOCParam2220.concat(chunkFPAJGGOCParam2221),
              [],
            ),
            (chunkFPAJGGOCParam2108) =>
              `[${basePickByI(chunkFPAJGGOCParam2108, (chunkFPAJGGOCParam2315) => chunkFPAJGGOCHelper185(chunkFPAJGGOCParam2315)).join(", ")}]`,
          ),
          (chunkFPAJGGOCParam2184, chunkFPAJGGOCParam2185) =>
            `  ${chunkFPAJGGOCParam2185 + 1}. ${chunkFPAJGGOCParam2184}`,
        ).join("\n")}` + chunkFPAJGGOCValue743;
  },
  buildEarlyExitMessage({
    expectedIterationPaths,
    actual,
    customUserDescription,
    ruleName,
  }) {
    let chunkFPAJGGOCValue815 =
      "\nbut found: '" + chunkFPAJGGOCHelper110(actual).image + "'";
    return customUserDescription
      ? "Expecting: " + customUserDescription + chunkFPAJGGOCValue815
      : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::\n  <${basePickByI(expectedIterationPaths, (chunkFPAJGGOCParam2114) => `[${basePickByI(chunkFPAJGGOCParam2114, (chunkFPAJGGOCParam2316) => chunkFPAJGGOCHelper185(chunkFPAJGGOCParam2316)).join(",")}]`).join(" ,")}>` +
          chunkFPAJGGOCValue815;
  },
};
Object.freeze(chunkFPAJGGOCValue119);
var chunkFPAJGGOCValue120 = {
    buildRuleNotFoundError(chunkFPAJGGOCParam789, chunkFPAJGGOCParam790) {
      return (
        "Invalid grammar, reference to a rule which is not defined: ->" +
        chunkFPAJGGOCParam790.nonTerminalName +
        "<-\ninside top level rule: ->" +
        chunkFPAJGGOCParam789.name +
        "<-"
      );
    },
  },
  chunkFPAJGGOCValue121 = {
    buildDuplicateFoundError(chunkFPAJGGOCParam157, chunkFPAJGGOCParam158) {
      function chunkFPAJGGOCHelper385(chunkFPAJGGOCParam1111) {
        return chunkFPAJGGOCParam1111 instanceof chunkFPAJGGOCValue88
          ? chunkFPAJGGOCParam1111.terminalType.name
          : chunkFPAJGGOCParam1111 instanceof chunkFPAJGGOCValue79
            ? chunkFPAJGGOCParam1111.nonTerminalName
            : "";
      }
      let chunkFPAJGGOCValue563 = chunkFPAJGGOCParam157.name,
        chunkFPAJGGOCValue564 = chunkFPAJGGOCHelper110(chunkFPAJGGOCParam158),
        chunkFPAJGGOCValue565 = chunkFPAJGGOCValue564.idx,
        chunkFPAJGGOCValue566 = chunkFPAJGGOCHelper130(chunkFPAJGGOCValue564),
        chunkFPAJGGOCValue567 = chunkFPAJGGOCHelper385(chunkFPAJGGOCValue564),
        chunkFPAJGGOCValue568 = `->${chunkFPAJGGOCValue566}${chunkFPAJGGOCValue565 > 0 ? chunkFPAJGGOCValue565 : ""}<- ${chunkFPAJGGOCValue567 ? `with argument: ->${chunkFPAJGGOCValue567}<-` : ""}
                  appears more than once (${chunkFPAJGGOCParam158.length} times) in the top level rule: ->${chunkFPAJGGOCValue563}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
      return (
        (chunkFPAJGGOCValue568 = chunkFPAJGGOCValue568.replace(/[ \t]+/g, " ")),
        (chunkFPAJGGOCValue568 = chunkFPAJGGOCValue568.replace(/\s\s+/g, "\n")),
        chunkFPAJGGOCValue568
      );
    },
    buildNamespaceConflictError(chunkFPAJGGOCParam420) {
      return `Namespace conflict found in grammar.\nThe grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${chunkFPAJGGOCParam420.name}>.\nTo resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.`;
    },
    buildAlternationPrefixAmbiguityError(chunkFPAJGGOCParam313) {
      let chunkFPAJGGOCValue751 = basePickByI(
          chunkFPAJGGOCParam313.prefixPath,
          (chunkFPAJGGOCParam2317) =>
            chunkFPAJGGOCHelper185(chunkFPAJGGOCParam2317),
        ).join(", "),
        chunkFPAJGGOCValue752 =
          chunkFPAJGGOCParam313.alternation.idx === 0
            ? ""
            : chunkFPAJGGOCParam313.alternation.idx;
      return `Ambiguous alternatives: <${chunkFPAJGGOCParam313.ambiguityIndices.join(" ,")}> due to common lookahead prefix\nin <OR${chunkFPAJGGOCValue752}> inside <${chunkFPAJGGOCParam313.topLevelRule.name}> Rule,\n<${chunkFPAJGGOCValue751}> may appears as a prefix path in all these alternatives.\nSee: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.`;
    },
    buildAlternationAmbiguityError(chunkFPAJGGOCParam298) {
      let chunkFPAJGGOCValue728 = basePickByI(
          chunkFPAJGGOCParam298.prefixPath,
          (chunkFPAJGGOCParam2318) =>
            chunkFPAJGGOCHelper185(chunkFPAJGGOCParam2318),
        ).join(", "),
        chunkFPAJGGOCValue729 =
          chunkFPAJGGOCParam298.alternation.idx === 0
            ? ""
            : chunkFPAJGGOCParam298.alternation.idx,
        chunkFPAJGGOCValue730 = `Ambiguous Alternatives Detected: <${chunkFPAJGGOCParam298.ambiguityIndices.join(" ,")}> in <OR${chunkFPAJGGOCValue729}> inside <${chunkFPAJGGOCParam298.topLevelRule.name}> Rule,\n<${chunkFPAJGGOCValue728}> may appears as a prefix path in all these alternatives.\n`;
      return (
        (chunkFPAJGGOCValue730 +=
          "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details."),
        chunkFPAJGGOCValue730
      );
    },
    buildEmptyRepetitionError(chunkFPAJGGOCParam626) {
      let chunkFPAJGGOCValue1045 = chunkFPAJGGOCHelper130(
        chunkFPAJGGOCParam626.repetition,
      );
      return (
        chunkFPAJGGOCParam626.repetition.idx !== 0 &&
          (chunkFPAJGGOCValue1045 += chunkFPAJGGOCParam626.repetition.idx),
        `The repetition <${chunkFPAJGGOCValue1045}> within Rule <${chunkFPAJGGOCParam626.topLevelRule.name}> can never consume any tokens.\nThis could lead to an infinite loop.`
      );
    },
    buildTokenNameError(chunkFPAJGGOCParam1919) {
      return "deprecated";
    },
    buildEmptyAlternationError(chunkFPAJGGOCParam809) {
      return `Ambiguous empty alternative: <${chunkFPAJGGOCParam809.emptyChoiceIdx + 1}> in <OR${chunkFPAJGGOCParam809.alternation.idx}> inside <${chunkFPAJGGOCParam809.topLevelRule.name}> Rule.\nOnly the last alternative may be an empty alternative.`;
    },
    buildTooManyAlternativesError(chunkFPAJGGOCParam788) {
      return `An Alternation cannot have more than 256 alternatives:\n<OR${chunkFPAJGGOCParam788.alternation.idx}> inside <${chunkFPAJGGOCParam788.topLevelRule.name}> Rule.\n has ${chunkFPAJGGOCParam788.alternation.definition.length + 1} alternatives.`;
    },
    buildLeftRecursionError(chunkFPAJGGOCParam284) {
      let chunkFPAJGGOCValue713 = chunkFPAJGGOCParam284.topLevelRule.name;
      return `Left Recursion found in grammar.\nrule: <${chunkFPAJGGOCValue713}> can be invoked from itself (directly or indirectly)\nwithout consuming any Tokens. The grammar path that causes this is: \n ${`${chunkFPAJGGOCValue713} --> ${basePickByI(
        chunkFPAJGGOCParam284.leftRecursionPath,
        (chunkFPAJGGOCParam2309) => chunkFPAJGGOCParam2309.name,
      )
        .concat([chunkFPAJGGOCValue713])
        .join(
          " --> ",
        )}`}\n To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    },
    buildInvalidRuleNameError(chunkFPAJGGOCParam1843) {
      return "deprecated";
    },
    buildDuplicateRuleNameError(chunkFPAJGGOCParam684) {
      let chunkFPAJGGOCValue1090;
      return (
        (chunkFPAJGGOCValue1090 =
          chunkFPAJGGOCParam684.topLevelRule instanceof chunkFPAJGGOCValue80
            ? chunkFPAJGGOCParam684.topLevelRule.name
            : chunkFPAJGGOCParam684.topLevelRule),
        `Duplicate definition, rule: ->${chunkFPAJGGOCValue1090}<- is already defined in the grammar: ->${chunkFPAJGGOCParam684.grammarName}<-`
      );
    },
  };
function chunkFPAJGGOCHelper191(
  chunkFPAJGGOCParam1587,
  chunkFPAJGGOCParam1588,
) {
  let chunkFPAJGGOCValue1771 = new chunkFPAJGGOCValue122(
    chunkFPAJGGOCParam1587,
    chunkFPAJGGOCParam1588,
  );
  return (chunkFPAJGGOCValue1771.resolveRefs(), chunkFPAJGGOCValue1771.errors);
}
var chunkFPAJGGOCValue122 = class extends chunkFPAJGGOCValue89 {
    constructor(chunkFPAJGGOCParam1235, chunkFPAJGGOCParam1236) {
      super();
      this.nameToTopRule = chunkFPAJGGOCParam1235;
      this.errMsgProvider = chunkFPAJGGOCParam1236;
      this.errors = [];
    }
    resolveRefs() {
      _baseUniqS(baseUniqI(this.nameToTopRule), (chunkFPAJGGOCParam1763) => {
        this.currTopLevel = chunkFPAJGGOCParam1763;
        chunkFPAJGGOCParam1763.accept(this);
      });
    }
    visitNonTerminal(chunkFPAJGGOCParam387) {
      let chunkFPAJGGOCValue802 =
        this.nameToTopRule[chunkFPAJGGOCParam387.nonTerminalName];
      if (chunkFPAJGGOCValue802)
        chunkFPAJGGOCParam387.referencedRule = chunkFPAJGGOCValue802;
      else {
        let chunkFPAJGGOCValue993 = this.errMsgProvider.buildRuleNotFoundError(
          this.currTopLevel,
          chunkFPAJGGOCParam387,
        );
        this.errors.push({
          message: chunkFPAJGGOCValue993,
          type: chunkFPAJGGOCValue172.UNRESOLVED_SUBRULE_REF,
          ruleName: this.currTopLevel.name,
          unresolvedRefName: chunkFPAJGGOCParam387.nonTerminalName,
        });
      }
    }
  },
  chunkFPAJGGOCValue123 = class extends chunkFPAJGGOCValue90 {
    constructor(chunkFPAJGGOCParam661, chunkFPAJGGOCParam662) {
      super();
      this.topProd = chunkFPAJGGOCParam661;
      this.path = chunkFPAJGGOCParam662;
      this.possibleTokTypes = [];
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.found = false;
      this.isAtEndOfPath = false;
    }
    startWalking() {
      if (((this.found = false), this.path.ruleStack[0] !== this.topProd.name))
        throw Error("The path does not start with the walker's top Rule!");
      return (
        (this.ruleStack = clone(this.path.ruleStack).reverse()),
        (this.occurrenceStack = clone(this.path.occurrenceStack).reverse()),
        this.ruleStack.pop(),
        this.occurrenceStack.pop(),
        this.updateExpectedNext(),
        this.walk(this.topProd),
        this.possibleTokTypes
      );
    }
    walk(chunkFPAJGGOCParam1851, chunkFPAJGGOCParam1852 = []) {
      this.found || super.walk(chunkFPAJGGOCParam1851, chunkFPAJGGOCParam1852);
    }
    walkProdRef(
      chunkFPAJGGOCParam694,
      chunkFPAJGGOCParam695,
      chunkFPAJGGOCParam696,
    ) {
      if (
        chunkFPAJGGOCParam694.referencedRule.name === this.nextProductionName &&
        chunkFPAJGGOCParam694.idx === this.nextProductionOccurrence
      ) {
        let chunkFPAJGGOCValue1670 = chunkFPAJGGOCParam695.concat(
          chunkFPAJGGOCParam696,
        );
        this.updateExpectedNext();
        this.walk(chunkFPAJGGOCParam694.referencedRule, chunkFPAJGGOCValue1670);
      }
    }
    updateExpectedNext() {
      isEmptyT(this.ruleStack)
        ? ((this.nextProductionName = ""),
          (this.nextProductionOccurrence = 0),
          (this.isAtEndOfPath = true))
        : ((this.nextProductionName = this.ruleStack.pop()),
          (this.nextProductionOccurrence = this.occurrenceStack.pop()));
    }
  },
  chunkFPAJGGOCValue124 = class extends chunkFPAJGGOCValue123 {
    constructor(chunkFPAJGGOCParam669, chunkFPAJGGOCParam670) {
      super(chunkFPAJGGOCParam669, chunkFPAJGGOCParam670);
      this.path = chunkFPAJGGOCParam670;
      this.nextTerminalName = "";
      this.nextTerminalOccurrence = 0;
      this.nextTerminalName = this.path.lastTok.name;
      this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(
      chunkFPAJGGOCParam623,
      chunkFPAJGGOCParam624,
      chunkFPAJGGOCParam625,
    ) {
      this.isAtEndOfPath &&
        chunkFPAJGGOCParam623.terminalType.name === this.nextTerminalName &&
        chunkFPAJGGOCParam623.idx === this.nextTerminalOccurrence &&
        !this.found &&
        ((this.possibleTokTypes = chunkFPAJGGOCHelper132(
          new chunkFPAJGGOCValue81({
            definition: chunkFPAJGGOCParam624.concat(chunkFPAJGGOCParam625),
          }),
        )),
        (this.found = true));
    }
  },
  chunkFPAJGGOCValue125 = class extends chunkFPAJGGOCValue90 {
    constructor(chunkFPAJGGOCParam825, chunkFPAJGGOCParam826) {
      super();
      this.topRule = chunkFPAJGGOCParam825;
      this.occurrence = chunkFPAJGGOCParam826;
      this.result = {
        token: undefined,
        occurrence: undefined,
        isEndOfRule: undefined,
      };
    }
    startWalking() {
      return (this.walk(this.topRule), this.result);
    }
  },
  chunkFPAJGGOCValue126 = class extends chunkFPAJGGOCValue125 {
    walkMany(
      chunkFPAJGGOCParam569,
      chunkFPAJGGOCParam570,
      chunkFPAJGGOCParam571,
    ) {
      if (chunkFPAJGGOCParam569.idx === this.occurrence) {
        let chunkFPAJGGOCValue1244 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam570.concat(chunkFPAJGGOCParam571),
        );
        this.result.isEndOfRule = chunkFPAJGGOCValue1244 === undefined;
        chunkFPAJGGOCValue1244 instanceof chunkFPAJGGOCValue88 &&
          ((this.result.token = chunkFPAJGGOCValue1244.terminalType),
          (this.result.occurrence = chunkFPAJGGOCValue1244.idx));
      } else
        super.walkMany(
          chunkFPAJGGOCParam569,
          chunkFPAJGGOCParam570,
          chunkFPAJGGOCParam571,
        );
    }
  },
  chunkFPAJGGOCValue127 = class extends chunkFPAJGGOCValue125 {
    walkManySep(
      chunkFPAJGGOCParam559,
      chunkFPAJGGOCParam560,
      chunkFPAJGGOCParam561,
    ) {
      if (chunkFPAJGGOCParam559.idx === this.occurrence) {
        let chunkFPAJGGOCValue1245 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam560.concat(chunkFPAJGGOCParam561),
        );
        this.result.isEndOfRule = chunkFPAJGGOCValue1245 === undefined;
        chunkFPAJGGOCValue1245 instanceof chunkFPAJGGOCValue88 &&
          ((this.result.token = chunkFPAJGGOCValue1245.terminalType),
          (this.result.occurrence = chunkFPAJGGOCValue1245.idx));
      } else
        super.walkManySep(
          chunkFPAJGGOCParam559,
          chunkFPAJGGOCParam560,
          chunkFPAJGGOCParam561,
        );
    }
  },
  chunkFPAJGGOCValue128 = class extends chunkFPAJGGOCValue125 {
    walkAtLeastOne(
      chunkFPAJGGOCParam546,
      chunkFPAJGGOCParam547,
      chunkFPAJGGOCParam548,
    ) {
      if (chunkFPAJGGOCParam546.idx === this.occurrence) {
        let chunkFPAJGGOCValue1246 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam547.concat(chunkFPAJGGOCParam548),
        );
        this.result.isEndOfRule = chunkFPAJGGOCValue1246 === undefined;
        chunkFPAJGGOCValue1246 instanceof chunkFPAJGGOCValue88 &&
          ((this.result.token = chunkFPAJGGOCValue1246.terminalType),
          (this.result.occurrence = chunkFPAJGGOCValue1246.idx));
      } else
        super.walkAtLeastOne(
          chunkFPAJGGOCParam546,
          chunkFPAJGGOCParam547,
          chunkFPAJGGOCParam548,
        );
    }
  },
  chunkFPAJGGOCValue129 = class extends chunkFPAJGGOCValue125 {
    walkAtLeastOneSep(
      chunkFPAJGGOCParam530,
      chunkFPAJGGOCParam531,
      chunkFPAJGGOCParam532,
    ) {
      if (chunkFPAJGGOCParam530.idx === this.occurrence) {
        let chunkFPAJGGOCValue1247 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam531.concat(chunkFPAJGGOCParam532),
        );
        this.result.isEndOfRule = chunkFPAJGGOCValue1247 === undefined;
        chunkFPAJGGOCValue1247 instanceof chunkFPAJGGOCValue88 &&
          ((this.result.token = chunkFPAJGGOCValue1247.terminalType),
          (this.result.occurrence = chunkFPAJGGOCValue1247.idx));
      } else
        super.walkAtLeastOneSep(
          chunkFPAJGGOCParam530,
          chunkFPAJGGOCParam531,
          chunkFPAJGGOCParam532,
        );
    }
  };
function chunkFPAJGGOCHelper192(
  chunkFPAJGGOCParam50,
  chunkFPAJGGOCParam51,
  chunkFPAJGGOCParam52 = [],
) {
  chunkFPAJGGOCParam52 = clone(chunkFPAJGGOCParam52);
  let chunkFPAJGGOCValue443 = [],
    chunkFPAJGGOCValue444 = 0;
  function chunkFPAJGGOCHelper375(chunkFPAJGGOCParam1959) {
    return chunkFPAJGGOCParam1959.concat(
      chunkFPAJGGOCHelper105(chunkFPAJGGOCParam50, chunkFPAJGGOCValue444 + 1),
    );
  }
  function chunkFPAJGGOCHelper376(chunkFPAJGGOCParam1702) {
    let chunkFPAJGGOCValue1814 = chunkFPAJGGOCHelper192(
      chunkFPAJGGOCHelper375(chunkFPAJGGOCParam1702),
      chunkFPAJGGOCParam51,
      chunkFPAJGGOCParam52,
    );
    return chunkFPAJGGOCValue443.concat(chunkFPAJGGOCValue1814);
  }
  for (
    ;
    chunkFPAJGGOCParam52.length < chunkFPAJGGOCParam51 &&
    chunkFPAJGGOCValue444 < chunkFPAJGGOCParam50.length;

  ) {
    let chunkFPAJGGOCValue490 = chunkFPAJGGOCParam50[chunkFPAJGGOCValue444];
    if (
      chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue81 ||
      chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue79
    )
      return chunkFPAJGGOCHelper376(chunkFPAJGGOCValue490.definition);
    if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue82)
      chunkFPAJGGOCValue443 = chunkFPAJGGOCHelper376(
        chunkFPAJGGOCValue490.definition,
      );
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue83)
      return chunkFPAJGGOCHelper376(
        chunkFPAJGGOCValue490.definition.concat([
          new chunkFPAJGGOCValue85({
            definition: chunkFPAJGGOCValue490.definition,
          }),
        ]),
      );
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue84)
      return chunkFPAJGGOCHelper376([
        new chunkFPAJGGOCValue81({
          definition: chunkFPAJGGOCValue490.definition,
        }),
        new chunkFPAJGGOCValue85({
          definition: [
            new chunkFPAJGGOCValue88({
              terminalType: chunkFPAJGGOCValue490.separator,
            }),
          ].concat(chunkFPAJGGOCValue490.definition),
        }),
      ]);
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue86)
      chunkFPAJGGOCValue443 = chunkFPAJGGOCHelper376(
        chunkFPAJGGOCValue490.definition.concat([
          new chunkFPAJGGOCValue85({
            definition: [
              new chunkFPAJGGOCValue88({
                terminalType: chunkFPAJGGOCValue490.separator,
              }),
            ].concat(chunkFPAJGGOCValue490.definition),
          }),
        ]),
      );
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue85)
      chunkFPAJGGOCValue443 = chunkFPAJGGOCHelper376(
        chunkFPAJGGOCValue490.definition.concat([
          new chunkFPAJGGOCValue85({
            definition: chunkFPAJGGOCValue490.definition,
          }),
        ]),
      );
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue87)
      return (
        _baseUniqS(
          chunkFPAJGGOCValue490.definition,
          (chunkFPAJGGOCParam1631) => {
            isEmptyT(chunkFPAJGGOCParam1631.definition) === false &&
              (chunkFPAJGGOCValue443 = chunkFPAJGGOCHelper376(
                chunkFPAJGGOCParam1631.definition,
              ));
          },
        ),
        chunkFPAJGGOCValue443
      );
    else if (chunkFPAJGGOCValue490 instanceof chunkFPAJGGOCValue88)
      chunkFPAJGGOCParam52.push(chunkFPAJGGOCValue490.terminalType);
    else throw Error("non exhaustive match");
    chunkFPAJGGOCValue444++;
  }
  return (
    chunkFPAJGGOCValue443.push({
      partialPath: chunkFPAJGGOCParam52,
      suffixDef: chunkFPAJGGOCHelper105(
        chunkFPAJGGOCParam50,
        chunkFPAJGGOCValue444,
      ),
    }),
    chunkFPAJGGOCValue443
  );
}
function chunkFPAJGGOCHelper193(
  chunkFPAJGGOCParam10,
  chunkFPAJGGOCParam11,
  chunkFPAJGGOCParam12,
  chunkFPAJGGOCParam13,
) {
  let chunkFPAJGGOCValue382 = ["EXIT_NONE_TERMINAL"],
    chunkFPAJGGOCValue384 = false,
    chunkFPAJGGOCValue385 = chunkFPAJGGOCParam11.length,
    chunkFPAJGGOCValue386 = chunkFPAJGGOCValue385 - chunkFPAJGGOCParam13 - 1,
    chunkFPAJGGOCValue387 = [],
    chunkFPAJGGOCValue388 = [];
  for (
    chunkFPAJGGOCValue388.push({
      idx: -1,
      def: chunkFPAJGGOCParam10,
      ruleStack: [],
      occurrenceStack: [],
    });
    !isEmptyT(chunkFPAJGGOCValue388);

  ) {
    let chunkFPAJGGOCValue389 = chunkFPAJGGOCValue388.pop();
    if (chunkFPAJGGOCValue389 === "EXIT_ALTERNATIVE") {
      chunkFPAJGGOCValue384 &&
        basePickByS(chunkFPAJGGOCValue388).idx <= chunkFPAJGGOCValue386 &&
        chunkFPAJGGOCValue388.pop();
      continue;
    }
    let chunkFPAJGGOCValue390 = chunkFPAJGGOCValue389.def,
      chunkFPAJGGOCValue391 = chunkFPAJGGOCValue389.idx,
      chunkFPAJGGOCValue392 = chunkFPAJGGOCValue389.ruleStack,
      chunkFPAJGGOCValue393 = chunkFPAJGGOCValue389.occurrenceStack;
    if (isEmptyT(chunkFPAJGGOCValue390)) continue;
    let chunkFPAJGGOCValue394 = chunkFPAJGGOCValue390[0];
    if (chunkFPAJGGOCValue394 === "EXIT_NONE_TERMINAL") {
      let chunkFPAJGGOCValue1691 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ruleStack: chunkFPAJGGOCHelper106(chunkFPAJGGOCValue392),
        occurrenceStack: chunkFPAJGGOCHelper106(chunkFPAJGGOCValue393),
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1691);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue88) {
      if (chunkFPAJGGOCValue391 < chunkFPAJGGOCValue385 - 1) {
        let chunkFPAJGGOCValue1337 = chunkFPAJGGOCValue391 + 1,
          chunkFPAJGGOCValue1338 = chunkFPAJGGOCParam11[chunkFPAJGGOCValue1337];
        if (
          chunkFPAJGGOCParam12(
            chunkFPAJGGOCValue1338,
            chunkFPAJGGOCValue394.terminalType,
          )
        ) {
          let chunkFPAJGGOCValue1671 = {
            idx: chunkFPAJGGOCValue1337,
            def: chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
            ruleStack: chunkFPAJGGOCValue392,
            occurrenceStack: chunkFPAJGGOCValue393,
          };
          chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1671);
        }
      } else if (chunkFPAJGGOCValue391 === chunkFPAJGGOCValue385 - 1) {
        chunkFPAJGGOCValue387.push({
          nextTokenType: chunkFPAJGGOCValue394.terminalType,
          nextTokenOccurrence: chunkFPAJGGOCValue394.idx,
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        });
        chunkFPAJGGOCValue384 = true;
      } else throw Error("non exhaustive match");
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue79) {
      let chunkFPAJGGOCValue1147 = clone(chunkFPAJGGOCValue392);
      chunkFPAJGGOCValue1147.push(chunkFPAJGGOCValue394.nonTerminalName);
      let chunkFPAJGGOCValue1148 = clone(chunkFPAJGGOCValue393);
      chunkFPAJGGOCValue1148.push(chunkFPAJGGOCValue394.idx);
      let chunkFPAJGGOCValue1149 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCValue394.definition.concat(
          chunkFPAJGGOCValue382,
          chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ),
        ruleStack: chunkFPAJGGOCValue1147,
        occurrenceStack: chunkFPAJGGOCValue1148,
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1149);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue82) {
      let chunkFPAJGGOCValue1128 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ruleStack: chunkFPAJGGOCValue392,
        occurrenceStack: chunkFPAJGGOCValue393,
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1128);
      chunkFPAJGGOCValue388.push("EXIT_ALTERNATIVE");
      let chunkFPAJGGOCValue1129 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCValue394.definition.concat(
          chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ),
        ruleStack: chunkFPAJGGOCValue392,
        occurrenceStack: chunkFPAJGGOCValue393,
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1129);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue83) {
      let chunkFPAJGGOCValue1208 = new chunkFPAJGGOCValue85({
          definition: chunkFPAJGGOCValue394.definition,
          idx: chunkFPAJGGOCValue394.idx,
        }),
        chunkFPAJGGOCValue1209 = {
          idx: chunkFPAJGGOCValue391,
          def: chunkFPAJGGOCValue394.definition.concat(
            [chunkFPAJGGOCValue1208],
            chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
          ),
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1209);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue84) {
      let chunkFPAJGGOCValue958 = new chunkFPAJGGOCValue85({
          definition: [
            new chunkFPAJGGOCValue88({
              terminalType: chunkFPAJGGOCValue394.separator,
            }),
          ].concat(chunkFPAJGGOCValue394.definition),
          idx: chunkFPAJGGOCValue394.idx,
        }),
        chunkFPAJGGOCValue959 = {
          idx: chunkFPAJGGOCValue391,
          def: chunkFPAJGGOCValue394.definition.concat(
            [chunkFPAJGGOCValue958],
            chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
          ),
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue959);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue86) {
      let chunkFPAJGGOCValue808 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ruleStack: chunkFPAJGGOCValue392,
        occurrenceStack: chunkFPAJGGOCValue393,
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue808);
      chunkFPAJGGOCValue388.push("EXIT_ALTERNATIVE");
      let chunkFPAJGGOCValue809 = new chunkFPAJGGOCValue85({
          definition: [
            new chunkFPAJGGOCValue88({
              terminalType: chunkFPAJGGOCValue394.separator,
            }),
          ].concat(chunkFPAJGGOCValue394.definition),
          idx: chunkFPAJGGOCValue394.idx,
        }),
        chunkFPAJGGOCValue810 = {
          idx: chunkFPAJGGOCValue391,
          def: chunkFPAJGGOCValue394.definition.concat(
            [chunkFPAJGGOCValue809],
            chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
          ),
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue810);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue85) {
      let chunkFPAJGGOCValue960 = {
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ruleStack: chunkFPAJGGOCValue392,
        occurrenceStack: chunkFPAJGGOCValue393,
      };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue960);
      chunkFPAJGGOCValue388.push("EXIT_ALTERNATIVE");
      let chunkFPAJGGOCValue961 = new chunkFPAJGGOCValue85({
          definition: chunkFPAJGGOCValue394.definition,
          idx: chunkFPAJGGOCValue394.idx,
        }),
        chunkFPAJGGOCValue962 = {
          idx: chunkFPAJGGOCValue391,
          def: chunkFPAJGGOCValue394.definition.concat(
            [chunkFPAJGGOCValue961],
            chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
          ),
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        };
      chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue962);
    } else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue87)
      for (
        let chunkFPAJGGOCValue1165 =
          chunkFPAJGGOCValue394.definition.length - 1;
        chunkFPAJGGOCValue1165 >= 0;
        chunkFPAJGGOCValue1165--
      ) {
        let chunkFPAJGGOCValue1320 = {
          idx: chunkFPAJGGOCValue391,
          def: chunkFPAJGGOCValue394.definition[
            chunkFPAJGGOCValue1165
          ].definition.concat(chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390)),
          ruleStack: chunkFPAJGGOCValue392,
          occurrenceStack: chunkFPAJGGOCValue393,
        };
        chunkFPAJGGOCValue388.push(chunkFPAJGGOCValue1320);
        chunkFPAJGGOCValue388.push("EXIT_ALTERNATIVE");
      }
    else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue81)
      chunkFPAJGGOCValue388.push({
        idx: chunkFPAJGGOCValue391,
        def: chunkFPAJGGOCValue394.definition.concat(
          chunkFPAJGGOCHelper105(chunkFPAJGGOCValue390),
        ),
        ruleStack: chunkFPAJGGOCValue392,
        occurrenceStack: chunkFPAJGGOCValue393,
      });
    else if (chunkFPAJGGOCValue394 instanceof chunkFPAJGGOCValue80)
      chunkFPAJGGOCValue388.push(
        chunkFPAJGGOCHelper194(
          chunkFPAJGGOCValue394,
          chunkFPAJGGOCValue391,
          chunkFPAJGGOCValue392,
          chunkFPAJGGOCValue393,
        ),
      );
    else throw Error("non exhaustive match");
  }
  return chunkFPAJGGOCValue387;
}
function chunkFPAJGGOCHelper194(
  chunkFPAJGGOCParam1047,
  chunkFPAJGGOCParam1048,
  chunkFPAJGGOCParam1049,
  chunkFPAJGGOCParam1050,
) {
  let chunkFPAJGGOCValue1396 = clone(chunkFPAJGGOCParam1049);
  chunkFPAJGGOCValue1396.push(chunkFPAJGGOCParam1047.name);
  let chunkFPAJGGOCValue1397 = clone(chunkFPAJGGOCParam1050);
  return (
    chunkFPAJGGOCValue1397.push(1),
    {
      idx: chunkFPAJGGOCParam1048,
      def: chunkFPAJGGOCParam1047.definition,
      ruleStack: chunkFPAJGGOCValue1396,
      occurrenceStack: chunkFPAJGGOCValue1397,
    }
  );
}
var chunkFPAJGGOCValue130;
(function (chunkFPAJGGOCParam467) {
  chunkFPAJGGOCParam467[(chunkFPAJGGOCParam467.OPTION = 0)] = "OPTION";
  chunkFPAJGGOCParam467[(chunkFPAJGGOCParam467.REPETITION = 1)] = "REPETITION";
  chunkFPAJGGOCParam467[(chunkFPAJGGOCParam467.REPETITION_MANDATORY = 2)] =
    "REPETITION_MANDATORY";
  chunkFPAJGGOCParam467[
    (chunkFPAJGGOCParam467.REPETITION_MANDATORY_WITH_SEPARATOR = 3)
  ] = "REPETITION_MANDATORY_WITH_SEPARATOR";
  chunkFPAJGGOCParam467[(chunkFPAJGGOCParam467.REPETITION_WITH_SEPARATOR = 4)] =
    "REPETITION_WITH_SEPARATOR";
  chunkFPAJGGOCParam467[(chunkFPAJGGOCParam467.ALTERNATION = 5)] =
    "ALTERNATION";
})((chunkFPAJGGOCValue130 ||= {}));
function chunkFPAJGGOCHelper195(chunkFPAJGGOCParam262) {
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue82 ||
    chunkFPAJGGOCParam262 === "Option"
  )
    return chunkFPAJGGOCValue130.OPTION;
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue85 ||
    chunkFPAJGGOCParam262 === "Repetition"
  )
    return chunkFPAJGGOCValue130.REPETITION;
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue83 ||
    chunkFPAJGGOCParam262 === "RepetitionMandatory"
  )
    return chunkFPAJGGOCValue130.REPETITION_MANDATORY;
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue84 ||
    chunkFPAJGGOCParam262 === "RepetitionMandatoryWithSeparator"
  )
    return chunkFPAJGGOCValue130.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue86 ||
    chunkFPAJGGOCParam262 === "RepetitionWithSeparator"
  )
    return chunkFPAJGGOCValue130.REPETITION_WITH_SEPARATOR;
  if (
    chunkFPAJGGOCParam262 instanceof chunkFPAJGGOCValue87 ||
    chunkFPAJGGOCParam262 === "Alternation"
  )
    return chunkFPAJGGOCValue130.ALTERNATION;
  throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper196(chunkFPAJGGOCParam1112) {
  let { occurrence, rule, prodType, maxLookahead } = chunkFPAJGGOCParam1112,
    chunkFPAJGGOCValue1454 = chunkFPAJGGOCHelper195(prodType);
  return chunkFPAJGGOCValue1454 === chunkFPAJGGOCValue130.ALTERNATION
    ? chunkFPAJGGOCHelper205(occurrence, rule, maxLookahead)
    : chunkFPAJGGOCHelper206(
        occurrence,
        rule,
        chunkFPAJGGOCValue1454,
        maxLookahead,
      );
}
function chunkFPAJGGOCHelper197(
  chunkFPAJGGOCParam1489,
  chunkFPAJGGOCParam1490,
  chunkFPAJGGOCParam1491,
  chunkFPAJGGOCParam1492,
  chunkFPAJGGOCParam1493,
  chunkFPAJGGOCParam1494,
) {
  let chunkFPAJGGOCValue1724 = chunkFPAJGGOCHelper205(
    chunkFPAJGGOCParam1489,
    chunkFPAJGGOCParam1490,
    chunkFPAJGGOCParam1491,
  );
  return chunkFPAJGGOCParam1494(
    chunkFPAJGGOCValue1724,
    chunkFPAJGGOCParam1492,
    chunkFPAJGGOCHelper208(chunkFPAJGGOCValue1724)
      ? chunkFPAJGGOCHelper176
      : chunkFPAJGGOCHelper175,
    chunkFPAJGGOCParam1493,
  );
}
function chunkFPAJGGOCHelper198(
  chunkFPAJGGOCParam1386,
  chunkFPAJGGOCParam1387,
  chunkFPAJGGOCParam1388,
  chunkFPAJGGOCParam1389,
  chunkFPAJGGOCParam1390,
  chunkFPAJGGOCParam1391,
) {
  let chunkFPAJGGOCValue1665 = chunkFPAJGGOCHelper206(
      chunkFPAJGGOCParam1386,
      chunkFPAJGGOCParam1387,
      chunkFPAJGGOCParam1390,
      chunkFPAJGGOCParam1388,
    ),
    chunkFPAJGGOCValue1666 = chunkFPAJGGOCHelper208(chunkFPAJGGOCValue1665)
      ? chunkFPAJGGOCHelper176
      : chunkFPAJGGOCHelper175;
  return chunkFPAJGGOCParam1391(
    chunkFPAJGGOCValue1665[0],
    chunkFPAJGGOCValue1666,
    chunkFPAJGGOCParam1389,
  );
}
function chunkFPAJGGOCHelper199(
  chunkFPAJGGOCParam62,
  chunkFPAJGGOCParam63,
  chunkFPAJGGOCParam64,
  chunkFPAJGGOCParam65,
) {
  let chunkFPAJGGOCValue464 = chunkFPAJGGOCParam62.length,
    chunkFPAJGGOCValue465 = chunkFPAJGGOCHelper109(
      chunkFPAJGGOCParam62,
      (chunkFPAJGGOCParam2151) =>
        chunkFPAJGGOCHelper109(
          chunkFPAJGGOCParam2151,
          (chunkFPAJGGOCParam2222) => chunkFPAJGGOCParam2222.length === 1,
        ),
    );
  if (chunkFPAJGGOCParam63)
    return function (chunkFPAJGGOCParam360) {
      let chunkFPAJGGOCValue787 = basePickByI(
        chunkFPAJGGOCParam360,
        (chunkFPAJGGOCParam2310) => chunkFPAJGGOCParam2310.GATE,
      );
      for (
        let chunkFPAJGGOCValue847 = 0;
        chunkFPAJGGOCValue847 < chunkFPAJGGOCValue464;
        chunkFPAJGGOCValue847++
      ) {
        let chunkFPAJGGOCValue890 = chunkFPAJGGOCParam62[chunkFPAJGGOCValue847],
          chunkFPAJGGOCValue891 = chunkFPAJGGOCValue890.length,
          chunkFPAJGGOCValue892 = chunkFPAJGGOCValue787[chunkFPAJGGOCValue847];
        if (
          !(
            chunkFPAJGGOCValue892 !== undefined &&
            chunkFPAJGGOCValue892.call(this) === false
          )
        )
          nextPath: for (
            let chunkFPAJGGOCValue1224 = 0;
            chunkFPAJGGOCValue1224 < chunkFPAJGGOCValue891;
            chunkFPAJGGOCValue1224++
          ) {
            let chunkFPAJGGOCValue1321 =
                chunkFPAJGGOCValue890[chunkFPAJGGOCValue1224],
              chunkFPAJGGOCValue1322 = chunkFPAJGGOCValue1321.length;
            for (
              let chunkFPAJGGOCValue1718 = 0;
              chunkFPAJGGOCValue1718 < chunkFPAJGGOCValue1322;
              chunkFPAJGGOCValue1718++
            )
              if (
                chunkFPAJGGOCParam64(
                  this.LA(chunkFPAJGGOCValue1718 + 1),
                  chunkFPAJGGOCValue1321[chunkFPAJGGOCValue1718],
                ) === false
              )
                continue nextPath;
            return chunkFPAJGGOCValue847;
          }
      }
    };
  if (chunkFPAJGGOCValue465 && !chunkFPAJGGOCParam65) {
    let chunkFPAJGGOCValue907 = baseUniqN(
      basePickByI(chunkFPAJGGOCParam62, (chunkFPAJGGOCParam2319) =>
        basePickByL(chunkFPAJGGOCParam2319),
      ),
      (chunkFPAJGGOCParam834, chunkFPAJGGOCParam835, chunkFPAJGGOCParam836) => (
        _baseUniqS(chunkFPAJGGOCParam835, (chunkFPAJGGOCParam1066) => {
          basePickByR(
            chunkFPAJGGOCParam834,
            chunkFPAJGGOCParam1066.tokenTypeIdx,
          ) ||
            (chunkFPAJGGOCParam834[chunkFPAJGGOCParam1066.tokenTypeIdx] =
              chunkFPAJGGOCParam836);
          _baseUniqS(
            chunkFPAJGGOCParam1066.categoryMatches,
            (chunkFPAJGGOCParam1882) => {
              basePickByR(chunkFPAJGGOCParam834, chunkFPAJGGOCParam1882) ||
                (chunkFPAJGGOCParam834[chunkFPAJGGOCParam1882] =
                  chunkFPAJGGOCParam836);
            },
          );
        }),
        chunkFPAJGGOCParam834
      ),
      {},
    );
    return function () {
      return chunkFPAJGGOCValue907[this.LA(1).tokenTypeIdx];
    };
  } else
    return function () {
      for (
        let chunkFPAJGGOCValue998 = 0;
        chunkFPAJGGOCValue998 < chunkFPAJGGOCValue464;
        chunkFPAJGGOCValue998++
      ) {
        let chunkFPAJGGOCValue1046 =
            chunkFPAJGGOCParam62[chunkFPAJGGOCValue998],
          chunkFPAJGGOCValue1047 = chunkFPAJGGOCValue1046.length;
        nextPath: for (
          let chunkFPAJGGOCValue1260 = 0;
          chunkFPAJGGOCValue1260 < chunkFPAJGGOCValue1047;
          chunkFPAJGGOCValue1260++
        ) {
          let chunkFPAJGGOCValue1362 =
              chunkFPAJGGOCValue1046[chunkFPAJGGOCValue1260],
            chunkFPAJGGOCValue1363 = chunkFPAJGGOCValue1362.length;
          for (
            let chunkFPAJGGOCValue1725 = 0;
            chunkFPAJGGOCValue1725 < chunkFPAJGGOCValue1363;
            chunkFPAJGGOCValue1725++
          )
            if (
              chunkFPAJGGOCParam64(
                this.LA(chunkFPAJGGOCValue1725 + 1),
                chunkFPAJGGOCValue1362[chunkFPAJGGOCValue1725],
              ) === false
            )
              continue nextPath;
          return chunkFPAJGGOCValue998;
        }
      }
    };
}
function chunkFPAJGGOCHelper200(
  chunkFPAJGGOCParam119,
  chunkFPAJGGOCParam120,
  chunkFPAJGGOCParam121,
) {
  let chunkFPAJGGOCValue532 = chunkFPAJGGOCHelper109(
      chunkFPAJGGOCParam119,
      (chunkFPAJGGOCParam2223) => chunkFPAJGGOCParam2223.length === 1,
    ),
    chunkFPAJGGOCValue533 = chunkFPAJGGOCParam119.length;
  if (chunkFPAJGGOCValue532 && !chunkFPAJGGOCParam121) {
    let chunkFPAJGGOCValue747 = basePickByL(chunkFPAJGGOCParam119);
    if (
      chunkFPAJGGOCValue747.length === 1 &&
      isEmptyT(chunkFPAJGGOCValue747[0].categoryMatches)
    ) {
      let chunkFPAJGGOCValue1609 = chunkFPAJGGOCValue747[0].tokenTypeIdx;
      return function () {
        return this.LA(1).tokenTypeIdx === chunkFPAJGGOCValue1609;
      };
    } else {
      let chunkFPAJGGOCValue1033 = baseUniqN(
        chunkFPAJGGOCValue747,
        (
          chunkFPAJGGOCParam1188,
          chunkFPAJGGOCParam1189,
          chunkFPAJGGOCParam1190,
        ) => (
          (chunkFPAJGGOCParam1188[chunkFPAJGGOCParam1189.tokenTypeIdx] = true),
          _baseUniqS(
            chunkFPAJGGOCParam1189.categoryMatches,
            (chunkFPAJGGOCParam2109) => {
              chunkFPAJGGOCParam1188[chunkFPAJGGOCParam2109] = true;
            },
          ),
          chunkFPAJGGOCParam1188
        ),
        [],
      );
      return function () {
        return chunkFPAJGGOCValue1033[this.LA(1).tokenTypeIdx] === true;
      };
    }
  } else
    return function () {
      nextPath: for (
        let chunkFPAJGGOCValue1299 = 0;
        chunkFPAJGGOCValue1299 < chunkFPAJGGOCValue533;
        chunkFPAJGGOCValue1299++
      ) {
        let chunkFPAJGGOCValue1404 =
            chunkFPAJGGOCParam119[chunkFPAJGGOCValue1299],
          chunkFPAJGGOCValue1405 = chunkFPAJGGOCValue1404.length;
        for (
          let chunkFPAJGGOCValue1735 = 0;
          chunkFPAJGGOCValue1735 < chunkFPAJGGOCValue1405;
          chunkFPAJGGOCValue1735++
        )
          if (
            chunkFPAJGGOCParam120(
              this.LA(chunkFPAJGGOCValue1735 + 1),
              chunkFPAJGGOCValue1404[chunkFPAJGGOCValue1735],
            ) === false
          )
            continue nextPath;
        return true;
      }
      return false;
    };
}
var chunkFPAJGGOCValue131 = class extends chunkFPAJGGOCValue90 {
    constructor(
      chunkFPAJGGOCParam1215,
      chunkFPAJGGOCParam1216,
      chunkFPAJGGOCParam1217,
    ) {
      super();
      this.topProd = chunkFPAJGGOCParam1215;
      this.targetOccurrence = chunkFPAJGGOCParam1216;
      this.targetProdType = chunkFPAJGGOCParam1217;
    }
    startWalking() {
      return (this.walk(this.topProd), this.restDef);
    }
    checkIsTarget(
      chunkFPAJGGOCParam1091,
      chunkFPAJGGOCParam1092,
      chunkFPAJGGOCParam1093,
      chunkFPAJGGOCParam1094,
    ) {
      return chunkFPAJGGOCParam1091.idx === this.targetOccurrence &&
        this.targetProdType === chunkFPAJGGOCParam1092
        ? ((this.restDef = chunkFPAJGGOCParam1093.concat(
            chunkFPAJGGOCParam1094,
          )),
          true)
        : false;
    }
    walkOption(
      chunkFPAJGGOCParam1432,
      chunkFPAJGGOCParam1433,
      chunkFPAJGGOCParam1434,
    ) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1432,
        chunkFPAJGGOCValue130.OPTION,
        chunkFPAJGGOCParam1433,
        chunkFPAJGGOCParam1434,
      ) ||
        super.walkOption(
          chunkFPAJGGOCParam1432,
          chunkFPAJGGOCParam1433,
          chunkFPAJGGOCParam1434,
        );
    }
    walkAtLeastOne(
      chunkFPAJGGOCParam1305,
      chunkFPAJGGOCParam1306,
      chunkFPAJGGOCParam1307,
    ) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1305,
        chunkFPAJGGOCValue130.REPETITION_MANDATORY,
        chunkFPAJGGOCParam1306,
        chunkFPAJGGOCParam1307,
      ) ||
        super.walkOption(
          chunkFPAJGGOCParam1305,
          chunkFPAJGGOCParam1306,
          chunkFPAJGGOCParam1307,
        );
    }
    walkAtLeastOneSep(
      chunkFPAJGGOCParam1218,
      chunkFPAJGGOCParam1219,
      chunkFPAJGGOCParam1220,
    ) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1218,
        chunkFPAJGGOCValue130.REPETITION_MANDATORY_WITH_SEPARATOR,
        chunkFPAJGGOCParam1219,
        chunkFPAJGGOCParam1220,
      ) ||
        super.walkOption(
          chunkFPAJGGOCParam1218,
          chunkFPAJGGOCParam1219,
          chunkFPAJGGOCParam1220,
        );
    }
    walkMany(
      chunkFPAJGGOCParam1425,
      chunkFPAJGGOCParam1426,
      chunkFPAJGGOCParam1427,
    ) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1425,
        chunkFPAJGGOCValue130.REPETITION,
        chunkFPAJGGOCParam1426,
        chunkFPAJGGOCParam1427,
      ) ||
        super.walkOption(
          chunkFPAJGGOCParam1425,
          chunkFPAJGGOCParam1426,
          chunkFPAJGGOCParam1427,
        );
    }
    walkManySep(
      chunkFPAJGGOCParam1295,
      chunkFPAJGGOCParam1296,
      chunkFPAJGGOCParam1297,
    ) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1295,
        chunkFPAJGGOCValue130.REPETITION_WITH_SEPARATOR,
        chunkFPAJGGOCParam1296,
        chunkFPAJGGOCParam1297,
      ) ||
        super.walkOption(
          chunkFPAJGGOCParam1295,
          chunkFPAJGGOCParam1296,
          chunkFPAJGGOCParam1297,
        );
    }
  },
  chunkFPAJGGOCValue132 = class extends chunkFPAJGGOCValue89 {
    constructor(
      chunkFPAJGGOCParam1057,
      chunkFPAJGGOCParam1058,
      chunkFPAJGGOCParam1059,
    ) {
      super();
      this.targetOccurrence = chunkFPAJGGOCParam1057;
      this.targetProdType = chunkFPAJGGOCParam1058;
      this.targetRef = chunkFPAJGGOCParam1059;
      this.result = [];
    }
    checkIsTarget(chunkFPAJGGOCParam903, chunkFPAJGGOCParam904) {
      chunkFPAJGGOCParam903.idx === this.targetOccurrence &&
        this.targetProdType === chunkFPAJGGOCParam904 &&
        (this.targetRef === undefined ||
          chunkFPAJGGOCParam903 === this.targetRef) &&
        (this.result = chunkFPAJGGOCParam903.definition);
    }
    visitOption(chunkFPAJGGOCParam1853) {
      this.checkIsTarget(chunkFPAJGGOCParam1853, chunkFPAJGGOCValue130.OPTION);
    }
    visitRepetition(chunkFPAJGGOCParam1736) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1736,
        chunkFPAJGGOCValue130.REPETITION,
      );
    }
    visitRepetitionMandatory(chunkFPAJGGOCParam1542) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1542,
        chunkFPAJGGOCValue130.REPETITION_MANDATORY,
      );
    }
    visitRepetitionMandatoryWithSeparator(chunkFPAJGGOCParam1349) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1349,
        chunkFPAJGGOCValue130.REPETITION_MANDATORY_WITH_SEPARATOR,
      );
    }
    visitRepetitionWithSeparator(chunkFPAJGGOCParam1467) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1467,
        chunkFPAJGGOCValue130.REPETITION_WITH_SEPARATOR,
      );
    }
    visitAlternation(chunkFPAJGGOCParam1703) {
      this.checkIsTarget(
        chunkFPAJGGOCParam1703,
        chunkFPAJGGOCValue130.ALTERNATION,
      );
    }
  };
function chunkFPAJGGOCHelper201(chunkFPAJGGOCParam1531) {
  let chunkFPAJGGOCValue1738 = Array(chunkFPAJGGOCParam1531);
  for (
    let chunkFPAJGGOCValue1865 = 0;
    chunkFPAJGGOCValue1865 < chunkFPAJGGOCParam1531;
    chunkFPAJGGOCValue1865++
  )
    chunkFPAJGGOCValue1738[chunkFPAJGGOCValue1865] = [];
  return chunkFPAJGGOCValue1738;
}
function chunkFPAJGGOCHelper202(chunkFPAJGGOCParam474) {
  let chunkFPAJGGOCValue896 = [""];
  for (
    let chunkFPAJGGOCValue981 = 0;
    chunkFPAJGGOCValue981 < chunkFPAJGGOCParam474.length;
    chunkFPAJGGOCValue981++
  ) {
    let chunkFPAJGGOCValue1043 = chunkFPAJGGOCParam474[chunkFPAJGGOCValue981],
      chunkFPAJGGOCValue1044 = [];
    for (
      let chunkFPAJGGOCValue1195 = 0;
      chunkFPAJGGOCValue1195 < chunkFPAJGGOCValue896.length;
      chunkFPAJGGOCValue1195++
    ) {
      let chunkFPAJGGOCValue1312 =
        chunkFPAJGGOCValue896[chunkFPAJGGOCValue1195];
      chunkFPAJGGOCValue1044.push(
        chunkFPAJGGOCValue1312 + "_" + chunkFPAJGGOCValue1043.tokenTypeIdx,
      );
      for (
        let chunkFPAJGGOCValue1592 = 0;
        chunkFPAJGGOCValue1592 < chunkFPAJGGOCValue1043.categoryMatches.length;
        chunkFPAJGGOCValue1592++
      ) {
        let chunkFPAJGGOCValue1795 =
          "_" + chunkFPAJGGOCValue1043.categoryMatches[chunkFPAJGGOCValue1592];
        chunkFPAJGGOCValue1044.push(
          chunkFPAJGGOCValue1312 + chunkFPAJGGOCValue1795,
        );
      }
    }
    chunkFPAJGGOCValue896 = chunkFPAJGGOCValue1044;
  }
  return chunkFPAJGGOCValue896;
}
function chunkFPAJGGOCHelper203(
  chunkFPAJGGOCParam960,
  chunkFPAJGGOCParam961,
  chunkFPAJGGOCParam962,
) {
  for (
    let chunkFPAJGGOCValue1483 = 0;
    chunkFPAJGGOCValue1483 < chunkFPAJGGOCParam960.length;
    chunkFPAJGGOCValue1483++
  ) {
    if (chunkFPAJGGOCValue1483 === chunkFPAJGGOCParam962) continue;
    let chunkFPAJGGOCValue1620 = chunkFPAJGGOCParam960[chunkFPAJGGOCValue1483];
    for (
      let chunkFPAJGGOCValue1829 = 0;
      chunkFPAJGGOCValue1829 < chunkFPAJGGOCParam961.length;
      chunkFPAJGGOCValue1829++
    )
      if (
        chunkFPAJGGOCValue1620[
          chunkFPAJGGOCParam961[chunkFPAJGGOCValue1829]
        ] === true
      )
        return false;
  }
  return true;
}
function chunkFPAJGGOCHelper204(chunkFPAJGGOCParam83, chunkFPAJGGOCParam84) {
  let chunkFPAJGGOCValue493 = basePickByI(
      chunkFPAJGGOCParam83,
      (chunkFPAJGGOCParam2261) =>
        chunkFPAJGGOCHelper192([chunkFPAJGGOCParam2261], 1),
    ),
    chunkFPAJGGOCValue494 = chunkFPAJGGOCHelper201(
      chunkFPAJGGOCValue493.length,
    ),
    chunkFPAJGGOCValue495 = basePickByI(
      chunkFPAJGGOCValue493,
      (chunkFPAJGGOCParam1039) => {
        let chunkFPAJGGOCValue1391 = {};
        return (
          _baseUniqS(chunkFPAJGGOCParam1039, (chunkFPAJGGOCParam1479) => {
            _baseUniqS(
              chunkFPAJGGOCHelper202(chunkFPAJGGOCParam1479.partialPath),
              (chunkFPAJGGOCParam2110) => {
                chunkFPAJGGOCValue1391[chunkFPAJGGOCParam2110] = true;
              },
            );
          }),
          chunkFPAJGGOCValue1391
        );
      },
    ),
    chunkFPAJGGOCValue496 = chunkFPAJGGOCValue493;
  for (
    let chunkFPAJGGOCValue562 = 1;
    chunkFPAJGGOCValue562 <= chunkFPAJGGOCParam84;
    chunkFPAJGGOCValue562++
  ) {
    let chunkFPAJGGOCValue579 = chunkFPAJGGOCValue496;
    chunkFPAJGGOCValue496 = chunkFPAJGGOCHelper201(
      chunkFPAJGGOCValue579.length,
    );
    for (
      let chunkFPAJGGOCValue593 = 0;
      chunkFPAJGGOCValue593 < chunkFPAJGGOCValue579.length;
      chunkFPAJGGOCValue593++
    ) {
      let chunkFPAJGGOCValue601 = chunkFPAJGGOCValue579[chunkFPAJGGOCValue593];
      for (
        let chunkFPAJGGOCValue620 = 0;
        chunkFPAJGGOCValue620 < chunkFPAJGGOCValue601.length;
        chunkFPAJGGOCValue620++
      ) {
        let chunkFPAJGGOCValue656 =
            chunkFPAJGGOCValue601[chunkFPAJGGOCValue620].partialPath,
          chunkFPAJGGOCValue657 =
            chunkFPAJGGOCValue601[chunkFPAJGGOCValue620].suffixDef,
          chunkFPAJGGOCValue658 = chunkFPAJGGOCHelper202(chunkFPAJGGOCValue656);
        if (
          chunkFPAJGGOCHelper203(
            chunkFPAJGGOCValue495,
            chunkFPAJGGOCValue658,
            chunkFPAJGGOCValue593,
          ) ||
          isEmptyT(chunkFPAJGGOCValue657) ||
          chunkFPAJGGOCValue656.length === chunkFPAJGGOCParam84
        ) {
          let chunkFPAJGGOCValue1237 =
            chunkFPAJGGOCValue494[chunkFPAJGGOCValue593];
          if ($o(chunkFPAJGGOCValue1237, chunkFPAJGGOCValue656) === false) {
            chunkFPAJGGOCValue1237.push(chunkFPAJGGOCValue656);
            for (
              let chunkFPAJGGOCValue1679 = 0;
              chunkFPAJGGOCValue1679 < chunkFPAJGGOCValue658.length;
              chunkFPAJGGOCValue1679++
            ) {
              let chunkFPAJGGOCValue1815 =
                chunkFPAJGGOCValue658[chunkFPAJGGOCValue1679];
              chunkFPAJGGOCValue495[chunkFPAJGGOCValue593][
                chunkFPAJGGOCValue1815
              ] = true;
            }
          }
        } else {
          let chunkFPAJGGOCValue1254 = chunkFPAJGGOCHelper192(
            chunkFPAJGGOCValue657,
            chunkFPAJGGOCValue562 + 1,
            chunkFPAJGGOCValue656,
          );
          chunkFPAJGGOCValue496[chunkFPAJGGOCValue593] = chunkFPAJGGOCValue496[
            chunkFPAJGGOCValue593
          ].concat(chunkFPAJGGOCValue1254);
          _baseUniqS(chunkFPAJGGOCValue1254, (chunkFPAJGGOCParam1355) => {
            _baseUniqS(
              chunkFPAJGGOCHelper202(chunkFPAJGGOCParam1355.partialPath),
              (chunkFPAJGGOCParam1949) => {
                chunkFPAJGGOCValue495[chunkFPAJGGOCValue593][
                  chunkFPAJGGOCParam1949
                ] = true;
              },
            );
          });
        }
      }
    }
  }
  return chunkFPAJGGOCValue494;
}
function chunkFPAJGGOCHelper205(
  chunkFPAJGGOCParam1397,
  chunkFPAJGGOCParam1398,
  chunkFPAJGGOCParam1399,
  chunkFPAJGGOCParam1400,
) {
  let chunkFPAJGGOCValue1672 = new chunkFPAJGGOCValue132(
    chunkFPAJGGOCParam1397,
    chunkFPAJGGOCValue130.ALTERNATION,
    chunkFPAJGGOCParam1400,
  );
  return (
    chunkFPAJGGOCParam1398.accept(chunkFPAJGGOCValue1672),
    chunkFPAJGGOCHelper204(
      chunkFPAJGGOCValue1672.result,
      chunkFPAJGGOCParam1399,
    )
  );
}
function chunkFPAJGGOCHelper206(
  chunkFPAJGGOCParam948,
  chunkFPAJGGOCParam949,
  chunkFPAJGGOCParam950,
  chunkFPAJGGOCParam951,
) {
  let chunkFPAJGGOCValue1333 = new chunkFPAJGGOCValue132(
    chunkFPAJGGOCParam948,
    chunkFPAJGGOCParam950,
  );
  chunkFPAJGGOCParam949.accept(chunkFPAJGGOCValue1333);
  let chunkFPAJGGOCValue1334 = chunkFPAJGGOCValue1333.result,
    chunkFPAJGGOCValue1335 = new chunkFPAJGGOCValue131(
      chunkFPAJGGOCParam949,
      chunkFPAJGGOCParam948,
      chunkFPAJGGOCParam950,
    ).startWalking();
  return chunkFPAJGGOCHelper204(
    [
      new chunkFPAJGGOCValue81({
        definition: chunkFPAJGGOCValue1334,
      }),
      new chunkFPAJGGOCValue81({
        definition: chunkFPAJGGOCValue1335,
      }),
    ],
    chunkFPAJGGOCParam951,
  );
}
function $o(chunkFPAJGGOCParam470, chunkFPAJGGOCParam471) {
  compareOtherPath: for (
    let chunkFPAJGGOCValue992 = 0;
    chunkFPAJGGOCValue992 < chunkFPAJGGOCParam470.length;
    chunkFPAJGGOCValue992++
  ) {
    let chunkFPAJGGOCValue1057 = chunkFPAJGGOCParam470[chunkFPAJGGOCValue992];
    if (chunkFPAJGGOCValue1057.length === chunkFPAJGGOCParam471.length) {
      for (
        let chunkFPAJGGOCValue1323 = 0;
        chunkFPAJGGOCValue1323 < chunkFPAJGGOCValue1057.length;
        chunkFPAJGGOCValue1323++
      ) {
        let chunkFPAJGGOCValue1443 =
            chunkFPAJGGOCParam471[chunkFPAJGGOCValue1323],
          chunkFPAJGGOCValue1444 =
            chunkFPAJGGOCValue1057[chunkFPAJGGOCValue1323];
        if (
          !(
            chunkFPAJGGOCValue1443 === chunkFPAJGGOCValue1444 ||
            chunkFPAJGGOCValue1444.categoryMatchesMap[
              chunkFPAJGGOCValue1443.tokenTypeIdx
            ] !== undefined
          )
        )
          continue compareOtherPath;
      }
      return true;
    }
  }
  return false;
}
function chunkFPAJGGOCHelper207(
  chunkFPAJGGOCParam1060,
  chunkFPAJGGOCParam1061,
) {
  return (
    chunkFPAJGGOCParam1060.length < chunkFPAJGGOCParam1061.length &&
    chunkFPAJGGOCHelper109(
      chunkFPAJGGOCParam1060,
      (chunkFPAJGGOCParam1452, chunkFPAJGGOCParam1453) => {
        let chunkFPAJGGOCValue1704 =
          chunkFPAJGGOCParam1061[chunkFPAJGGOCParam1453];
        return (
          chunkFPAJGGOCParam1452 === chunkFPAJGGOCValue1704 ||
          chunkFPAJGGOCValue1704.categoryMatchesMap[
            chunkFPAJGGOCParam1452.tokenTypeIdx
          ]
        );
      },
    )
  );
}
function chunkFPAJGGOCHelper208(chunkFPAJGGOCParam1532) {
  return chunkFPAJGGOCHelper109(
    chunkFPAJGGOCParam1532,
    (chunkFPAJGGOCParam1940) =>
      chunkFPAJGGOCHelper109(chunkFPAJGGOCParam1940, (chunkFPAJGGOCParam2118) =>
        chunkFPAJGGOCHelper109(
          chunkFPAJGGOCParam2118,
          (chunkFPAJGGOCParam2188) =>
            isEmptyT(chunkFPAJGGOCParam2188.categoryMatches),
        ),
      ),
  );
}
function chunkFPAJGGOCHelper209(chunkFPAJGGOCParam779) {
  return basePickByI(
    chunkFPAJGGOCParam779.lookaheadStrategy.validate({
      rules: chunkFPAJGGOCParam779.rules,
      tokenTypes: chunkFPAJGGOCParam779.tokenTypes,
      grammarName: chunkFPAJGGOCParam779.grammarName,
    }),
    (chunkFPAJGGOCParam1832) =>
      Object.assign(
        {
          type: chunkFPAJGGOCValue172.CUSTOM_LOOKAHEAD_VALIDATION,
        },
        chunkFPAJGGOCParam1832,
      ),
  );
}
function chunkFPAJGGOCHelper210(
  chunkFPAJGGOCParam1025,
  chunkFPAJGGOCParam1026,
  chunkFPAJGGOCParam1027,
  chunkFPAJGGOCParam1028,
) {
  let chunkFPAJGGOCValue1380 = chunkFPAJGGOCHelper111(
      chunkFPAJGGOCParam1025,
      (chunkFPAJGGOCParam2301) =>
        is(chunkFPAJGGOCParam2301, chunkFPAJGGOCParam1027),
    ),
    chunkFPAJGGOCValue1381 = chunkFPAJGGOCHelper220(
      chunkFPAJGGOCParam1025,
      chunkFPAJGGOCParam1026,
      chunkFPAJGGOCParam1027,
    ),
    chunkFPAJGGOCValue1382 = chunkFPAJGGOCHelper111(
      chunkFPAJGGOCParam1025,
      (chunkFPAJGGOCParam2302) =>
        chunkFPAJGGOCHelper217(chunkFPAJGGOCParam2302, chunkFPAJGGOCParam1027),
    ),
    chunkFPAJGGOCValue1383 = chunkFPAJGGOCHelper111(
      chunkFPAJGGOCParam1025,
      (chunkFPAJGGOCParam2224) =>
        chunkFPAJGGOCHelper211(
          chunkFPAJGGOCParam2224,
          chunkFPAJGGOCParam1025,
          chunkFPAJGGOCParam1028,
          chunkFPAJGGOCParam1027,
        ),
    );
  return chunkFPAJGGOCValue1380.concat(
    chunkFPAJGGOCValue1381,
    chunkFPAJGGOCValue1382,
    chunkFPAJGGOCValue1383,
  );
}
function is(chunkFPAJGGOCParam391, chunkFPAJGGOCParam392) {
  let chunkFPAJGGOCValue804 = new chunkFPAJGGOCValue133();
  chunkFPAJGGOCParam391.accept(chunkFPAJGGOCValue804);
  let chunkFPAJGGOCValue805 = chunkFPAJGGOCValue804.allProductions;
  return basePickByI(
    baseUniqI(
      _i(
        chunkFPAJGGOCValue71(chunkFPAJGGOCValue805, as),
        (chunkFPAJGGOCParam2247) => chunkFPAJGGOCParam2247.length > 1,
      ),
    ),
    (chunkFPAJGGOCParam596) => {
      let chunkFPAJGGOCValue1024 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam596,
        ),
        chunkFPAJGGOCValue1025 = chunkFPAJGGOCParam392.buildDuplicateFoundError(
          chunkFPAJGGOCParam391,
          chunkFPAJGGOCParam596,
        ),
        chunkFPAJGGOCValue1026 = chunkFPAJGGOCHelper130(chunkFPAJGGOCValue1024),
        chunkFPAJGGOCValue1027 = {
          message: chunkFPAJGGOCValue1025,
          type: chunkFPAJGGOCValue172.DUPLICATE_PRODUCTIONS,
          ruleName: chunkFPAJGGOCParam391.name,
          dslName: chunkFPAJGGOCValue1026,
          occurrence: chunkFPAJGGOCValue1024.idx,
        },
        chunkFPAJGGOCValue1028 = os(chunkFPAJGGOCValue1024);
      return (
        chunkFPAJGGOCValue1028 &&
          (chunkFPAJGGOCValue1027.parameter = chunkFPAJGGOCValue1028),
        chunkFPAJGGOCValue1027
      );
    },
  );
}
function as(chunkFPAJGGOCParam1854) {
  return `${chunkFPAJGGOCHelper130(chunkFPAJGGOCParam1854)}_#_${chunkFPAJGGOCParam1854.idx}_#_${os(chunkFPAJGGOCParam1854)}`;
}
function os(chunkFPAJGGOCParam1308) {
  return chunkFPAJGGOCParam1308 instanceof chunkFPAJGGOCValue88
    ? chunkFPAJGGOCParam1308.terminalType.name
    : chunkFPAJGGOCParam1308 instanceof chunkFPAJGGOCValue79
      ? chunkFPAJGGOCParam1308.nonTerminalName
      : "";
}
var chunkFPAJGGOCValue133 = class extends chunkFPAJGGOCValue89 {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitNonTerminal(chunkFPAJGGOCParam1899) {
    this.allProductions.push(chunkFPAJGGOCParam1899);
  }
  visitOption(chunkFPAJGGOCParam1960) {
    this.allProductions.push(chunkFPAJGGOCParam1960);
  }
  visitRepetitionWithSeparator(chunkFPAJGGOCParam1716) {
    this.allProductions.push(chunkFPAJGGOCParam1716);
  }
  visitRepetitionMandatory(chunkFPAJGGOCParam1771) {
    this.allProductions.push(chunkFPAJGGOCParam1771);
  }
  visitRepetitionMandatoryWithSeparator(chunkFPAJGGOCParam1618) {
    this.allProductions.push(chunkFPAJGGOCParam1618);
  }
  visitRepetition(chunkFPAJGGOCParam1920) {
    this.allProductions.push(chunkFPAJGGOCParam1920);
  }
  visitAlternation(chunkFPAJGGOCParam1900) {
    this.allProductions.push(chunkFPAJGGOCParam1900);
  }
  visitTerminal(chunkFPAJGGOCParam1941) {
    this.allProductions.push(chunkFPAJGGOCParam1941);
  }
};
function chunkFPAJGGOCHelper211(
  chunkFPAJGGOCParam671,
  chunkFPAJGGOCParam672,
  chunkFPAJGGOCParam673,
  chunkFPAJGGOCParam674,
) {
  let chunkFPAJGGOCValue1079 = [];
  if (
    baseUniqN(
      chunkFPAJGGOCParam672,
      (chunkFPAJGGOCParam2119, chunkFPAJGGOCParam2120) =>
        chunkFPAJGGOCParam2120.name === chunkFPAJGGOCParam671.name
          ? chunkFPAJGGOCParam2119 + 1
          : chunkFPAJGGOCParam2119,
      0,
    ) > 1
  ) {
    let chunkFPAJGGOCValue1468 =
      chunkFPAJGGOCParam674.buildDuplicateRuleNameError({
        topLevelRule: chunkFPAJGGOCParam671,
        grammarName: chunkFPAJGGOCParam673,
      });
    chunkFPAJGGOCValue1079.push({
      message: chunkFPAJGGOCValue1468,
      type: chunkFPAJGGOCValue172.DUPLICATE_RULE_NAME,
      ruleName: chunkFPAJGGOCParam671.name,
    });
  }
  return chunkFPAJGGOCValue1079;
}
function chunkFPAJGGOCHelper212(
  chunkFPAJGGOCParam586,
  chunkFPAJGGOCParam587,
  chunkFPAJGGOCParam588,
) {
  let chunkFPAJGGOCValue1016 = [],
    chunkFPAJGGOCValue1017;
  return (
    chunkFPAJGGOCHelper112(chunkFPAJGGOCParam587, chunkFPAJGGOCParam586) ||
      ((chunkFPAJGGOCValue1017 = `Invalid rule override, rule: ->${chunkFPAJGGOCParam586}<- cannot be overridden in the grammar: ->${chunkFPAJGGOCParam588}<-as it is not defined in any of the super grammars `),
      chunkFPAJGGOCValue1016.push({
        message: chunkFPAJGGOCValue1017,
        type: chunkFPAJGGOCValue172.INVALID_RULE_OVERRIDE,
        ruleName: chunkFPAJGGOCParam586,
      })),
    chunkFPAJGGOCValue1016
  );
}
function chunkFPAJGGOCHelper213(
  chunkFPAJGGOCParam346,
  chunkFPAJGGOCParam347,
  chunkFPAJGGOCParam348,
  chunkFPAJGGOCParam349 = [],
) {
  let chunkFPAJGGOCValue775 = [],
    chunkFPAJGGOCValue776 = chunkFPAJGGOCHelper214(
      chunkFPAJGGOCParam347.definition,
    );
  if (isEmptyT(chunkFPAJGGOCValue776)) return [];
  {
    let chunkFPAJGGOCValue893 = chunkFPAJGGOCParam346.name;
    chunkFPAJGGOCHelper112(chunkFPAJGGOCValue776, chunkFPAJGGOCParam346) &&
      chunkFPAJGGOCValue775.push({
        message: chunkFPAJGGOCParam348.buildLeftRecursionError({
          topLevelRule: chunkFPAJGGOCParam346,
          leftRecursionPath: chunkFPAJGGOCParam349,
        }),
        type: chunkFPAJGGOCValue172.LEFT_RECURSION,
        ruleName: chunkFPAJGGOCValue893,
      });
    let chunkFPAJGGOCValue894 = chunkFPAJGGOCHelper111(
      $r(
        chunkFPAJGGOCValue776,
        chunkFPAJGGOCParam349.concat([chunkFPAJGGOCParam346]),
      ),
      (chunkFPAJGGOCParam1637) => {
        let chunkFPAJGGOCValue1796 = clone(chunkFPAJGGOCParam349);
        return (
          chunkFPAJGGOCValue1796.push(chunkFPAJGGOCParam1637),
          chunkFPAJGGOCHelper213(
            chunkFPAJGGOCParam346,
            chunkFPAJGGOCParam1637,
            chunkFPAJGGOCParam348,
            chunkFPAJGGOCValue1796,
          )
        );
      },
    );
    return chunkFPAJGGOCValue775.concat(chunkFPAJGGOCValue894);
  }
}
function chunkFPAJGGOCHelper214(chunkFPAJGGOCParam256) {
  let chunkFPAJGGOCValue675 = [];
  if (isEmptyT(chunkFPAJGGOCParam256)) return chunkFPAJGGOCValue675;
  let chunkFPAJGGOCValue676 = chunkFPAJGGOCHelper110(chunkFPAJGGOCParam256);
  if (chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue79)
    chunkFPAJGGOCValue675.push(chunkFPAJGGOCValue676.referencedRule);
  else if (
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue81 ||
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue82 ||
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue83 ||
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue84 ||
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue86 ||
    chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue85
  )
    chunkFPAJGGOCValue675 = chunkFPAJGGOCValue675.concat(
      chunkFPAJGGOCHelper214(chunkFPAJGGOCValue676.definition),
    );
  else if (chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue87)
    chunkFPAJGGOCValue675 = basePickByL(
      basePickByI(chunkFPAJGGOCValue676.definition, (chunkFPAJGGOCParam2208) =>
        chunkFPAJGGOCHelper214(chunkFPAJGGOCParam2208.definition),
      ),
    );
  else if (!(chunkFPAJGGOCValue676 instanceof chunkFPAJGGOCValue88))
    throw Error("non exhaustive match");
  let chunkFPAJGGOCValue677 = chunkFPAJGGOCHelper128(chunkFPAJGGOCValue676),
    chunkFPAJGGOCValue678 = chunkFPAJGGOCParam256.length > 1;
  if (chunkFPAJGGOCValue677 && chunkFPAJGGOCValue678) {
    let chunkFPAJGGOCValue1853 = chunkFPAJGGOCHelper105(chunkFPAJGGOCParam256);
    return chunkFPAJGGOCValue675.concat(
      chunkFPAJGGOCHelper214(chunkFPAJGGOCValue1853),
    );
  } else return chunkFPAJGGOCValue675;
}
var fs = class extends chunkFPAJGGOCValue89 {
  constructor() {
    super(...arguments);
    this.alternations = [];
  }
  visitAlternation(chunkFPAJGGOCParam1928) {
    this.alternations.push(chunkFPAJGGOCParam1928);
  }
};
function chunkFPAJGGOCHelper215(chunkFPAJGGOCParam259, chunkFPAJGGOCParam260) {
  let chunkFPAJGGOCValue685 = new fs();
  chunkFPAJGGOCParam259.accept(chunkFPAJGGOCValue685);
  let chunkFPAJGGOCValue686 = chunkFPAJGGOCValue685.alternations;
  return chunkFPAJGGOCHelper111(
    chunkFPAJGGOCValue686,
    (chunkFPAJGGOCParam371) =>
      chunkFPAJGGOCHelper111(
        chunkFPAJGGOCHelper106(chunkFPAJGGOCParam371.definition),
        (chunkFPAJGGOCParam416, chunkFPAJGGOCParam417) =>
          isEmptyT(
            chunkFPAJGGOCHelper193(
              [chunkFPAJGGOCParam416],
              [],
              chunkFPAJGGOCHelper175,
              1,
            ),
          )
            ? [
                {
                  message: chunkFPAJGGOCParam260.buildEmptyAlternationError({
                    topLevelRule: chunkFPAJGGOCParam259,
                    alternation: chunkFPAJGGOCParam371,
                    emptyChoiceIdx: chunkFPAJGGOCParam417,
                  }),
                  type: chunkFPAJGGOCValue172.NONE_LAST_EMPTY_ALT,
                  ruleName: chunkFPAJGGOCParam259.name,
                  occurrence: chunkFPAJGGOCParam371.idx,
                  alternative: chunkFPAJGGOCParam417 + 1,
                },
              ]
            : [],
      ),
  );
}
function chunkFPAJGGOCHelper216(
  chunkFPAJGGOCParam539,
  chunkFPAJGGOCParam540,
  chunkFPAJGGOCParam541,
) {
  let chunkFPAJGGOCValue970 = new fs();
  chunkFPAJGGOCParam539.accept(chunkFPAJGGOCValue970);
  let chunkFPAJGGOCValue971 = chunkFPAJGGOCValue970.alternations;
  return (
    (chunkFPAJGGOCValue971 = chunkFPAJGGOCHelper115(
      chunkFPAJGGOCValue971,
      (chunkFPAJGGOCParam2158) =>
        chunkFPAJGGOCParam2158.ignoreAmbiguities === true,
    )),
    chunkFPAJGGOCHelper111(chunkFPAJGGOCValue971, (chunkFPAJGGOCParam1109) => {
      let chunkFPAJGGOCValue1445 = chunkFPAJGGOCParam1109.idx,
        chunkFPAJGGOCValue1446 = chunkFPAJGGOCHelper205(
          chunkFPAJGGOCValue1445,
          chunkFPAJGGOCParam539,
          chunkFPAJGGOCParam1109.maxLookahead || chunkFPAJGGOCParam540,
          chunkFPAJGGOCParam1109,
        ),
        chunkFPAJGGOCValue1447 = chunkFPAJGGOCHelper218(
          chunkFPAJGGOCValue1446,
          chunkFPAJGGOCParam1109,
          chunkFPAJGGOCParam539,
          chunkFPAJGGOCParam541,
        ),
        chunkFPAJGGOCValue1448 = chunkFPAJGGOCHelper219(
          chunkFPAJGGOCValue1446,
          chunkFPAJGGOCParam1109,
          chunkFPAJGGOCParam539,
          chunkFPAJGGOCParam541,
        );
      return chunkFPAJGGOCValue1447.concat(chunkFPAJGGOCValue1448);
    })
  );
}
var chunkFPAJGGOCValue134 = class extends chunkFPAJGGOCValue89 {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitRepetitionWithSeparator(chunkFPAJGGOCParam1717) {
    this.allProductions.push(chunkFPAJGGOCParam1717);
  }
  visitRepetitionMandatory(chunkFPAJGGOCParam1772) {
    this.allProductions.push(chunkFPAJGGOCParam1772);
  }
  visitRepetitionMandatoryWithSeparator(chunkFPAJGGOCParam1619) {
    this.allProductions.push(chunkFPAJGGOCParam1619);
  }
  visitRepetition(chunkFPAJGGOCParam1921) {
    this.allProductions.push(chunkFPAJGGOCParam1921);
  }
};
function chunkFPAJGGOCHelper217(chunkFPAJGGOCParam411, chunkFPAJGGOCParam412) {
  let chunkFPAJGGOCValue822 = new fs();
  chunkFPAJGGOCParam411.accept(chunkFPAJGGOCValue822);
  let chunkFPAJGGOCValue823 = chunkFPAJGGOCValue822.alternations;
  return chunkFPAJGGOCHelper111(
    chunkFPAJGGOCValue823,
    (chunkFPAJGGOCParam555) =>
      chunkFPAJGGOCParam555.definition.length > 255
        ? [
            {
              message: chunkFPAJGGOCParam412.buildTooManyAlternativesError({
                topLevelRule: chunkFPAJGGOCParam411,
                alternation: chunkFPAJGGOCParam555,
              }),
              type: chunkFPAJGGOCValue172.TOO_MANY_ALTS,
              ruleName: chunkFPAJGGOCParam411.name,
              occurrence: chunkFPAJGGOCParam555.idx,
            },
          ]
        : [],
  );
}
function _s(
  chunkFPAJGGOCParam234,
  chunkFPAJGGOCParam235,
  chunkFPAJGGOCParam236,
) {
  let chunkFPAJGGOCValue659 = [];
  return (
    _baseUniqS(chunkFPAJGGOCParam234, (chunkFPAJGGOCParam306) => {
      let chunkFPAJGGOCValue741 = new chunkFPAJGGOCValue134();
      chunkFPAJGGOCParam306.accept(chunkFPAJGGOCValue741);
      let chunkFPAJGGOCValue742 = chunkFPAJGGOCValue741.allProductions;
      _baseUniqS(chunkFPAJGGOCValue742, (chunkFPAJGGOCParam418) => {
        let chunkFPAJGGOCValue836 = chunkFPAJGGOCHelper195(
            chunkFPAJGGOCParam418,
          ),
          chunkFPAJGGOCValue837 =
            chunkFPAJGGOCParam418.maxLookahead || chunkFPAJGGOCParam235,
          chunkFPAJGGOCValue838 = chunkFPAJGGOCParam418.idx,
          chunkFPAJGGOCValue839 = chunkFPAJGGOCHelper206(
            chunkFPAJGGOCValue838,
            chunkFPAJGGOCParam306,
            chunkFPAJGGOCValue836,
            chunkFPAJGGOCValue837,
          )[0];
        if (isEmptyT(basePickByL(chunkFPAJGGOCValue839))) {
          let chunkFPAJGGOCValue1118 =
            chunkFPAJGGOCParam236.buildEmptyRepetitionError({
              topLevelRule: chunkFPAJGGOCParam306,
              repetition: chunkFPAJGGOCParam418,
            });
          chunkFPAJGGOCValue659.push({
            message: chunkFPAJGGOCValue1118,
            type: chunkFPAJGGOCValue172.NO_NON_EMPTY_LOOKAHEAD,
            ruleName: chunkFPAJGGOCParam306.name,
          });
        }
      });
    }),
    chunkFPAJGGOCValue659
  );
}
function chunkFPAJGGOCHelper218(
  chunkFPAJGGOCParam105,
  chunkFPAJGGOCParam106,
  chunkFPAJGGOCParam107,
  chunkFPAJGGOCParam108,
) {
  let chunkFPAJGGOCValue524 = [];
  return basePickByI(
    baseUniqN(
      chunkFPAJGGOCParam105,
      (chunkFPAJGGOCParam378, chunkFPAJGGOCParam379, chunkFPAJGGOCParam380) => (
        chunkFPAJGGOCParam106.definition[chunkFPAJGGOCParam380]
          .ignoreAmbiguities === true ||
          _baseUniqS(chunkFPAJGGOCParam379, (chunkFPAJGGOCParam501) => {
            let chunkFPAJGGOCValue929 = [chunkFPAJGGOCParam380];
            _baseUniqS(
              chunkFPAJGGOCParam105,
              (chunkFPAJGGOCParam1097, chunkFPAJGGOCParam1098) => {
                chunkFPAJGGOCParam380 !== chunkFPAJGGOCParam1098 &&
                  $o(chunkFPAJGGOCParam1097, chunkFPAJGGOCParam501) &&
                  chunkFPAJGGOCParam106.definition[chunkFPAJGGOCParam1098]
                    .ignoreAmbiguities !== true &&
                  chunkFPAJGGOCValue929.push(chunkFPAJGGOCParam1098);
              },
            );
            chunkFPAJGGOCValue929.length > 1 &&
              !$o(chunkFPAJGGOCValue524, chunkFPAJGGOCParam501) &&
              (chunkFPAJGGOCValue524.push(chunkFPAJGGOCParam501),
              chunkFPAJGGOCParam378.push({
                alts: chunkFPAJGGOCValue929,
                path: chunkFPAJGGOCParam501,
              }));
          }),
        chunkFPAJGGOCParam378
      ),
      [],
    ),
    (chunkFPAJGGOCParam476) => {
      let chunkFPAJGGOCValue897 = basePickByI(
        chunkFPAJGGOCParam476.alts,
        (chunkFPAJGGOCParam2320) => chunkFPAJGGOCParam2320 + 1,
      );
      return {
        message: chunkFPAJGGOCParam108.buildAlternationAmbiguityError({
          topLevelRule: chunkFPAJGGOCParam107,
          alternation: chunkFPAJGGOCParam106,
          ambiguityIndices: chunkFPAJGGOCValue897,
          prefixPath: chunkFPAJGGOCParam476.path,
        }),
        type: chunkFPAJGGOCValue172.AMBIGUOUS_ALTS,
        ruleName: chunkFPAJGGOCParam107.name,
        occurrence: chunkFPAJGGOCParam106.idx,
        alternatives: chunkFPAJGGOCParam476.alts,
      };
    },
  );
}
function chunkFPAJGGOCHelper219(
  chunkFPAJGGOCParam94,
  chunkFPAJGGOCParam95,
  chunkFPAJGGOCParam96,
  chunkFPAJGGOCParam97,
) {
  let chunkFPAJGGOCValue520 = baseUniqN(
    chunkFPAJGGOCParam94,
    (
      chunkFPAJGGOCParam1473,
      chunkFPAJGGOCParam1474,
      chunkFPAJGGOCParam1475,
    ) => {
      let chunkFPAJGGOCValue1719 = basePickByI(
        chunkFPAJGGOCParam1474,
        (chunkFPAJGGOCParam2186) => ({
          idx: chunkFPAJGGOCParam1475,
          path: chunkFPAJGGOCParam2186,
        }),
      );
      return chunkFPAJGGOCParam1473.concat(chunkFPAJGGOCValue1719);
    },
    [],
  );
  return chunkFPAJGGOCHelper100(
    chunkFPAJGGOCHelper111(chunkFPAJGGOCValue520, (chunkFPAJGGOCParam148) => {
      if (
        chunkFPAJGGOCParam95.definition[chunkFPAJGGOCParam148.idx]
          .ignoreAmbiguities === true
      )
        return [];
      let chunkFPAJGGOCValue549 = chunkFPAJGGOCParam148.idx,
        chunkFPAJGGOCValue550 = chunkFPAJGGOCParam148.path;
      return basePickByI(
        baseUniqA(
          chunkFPAJGGOCValue520,
          (chunkFPAJGGOCParam1342) =>
            chunkFPAJGGOCParam95.definition[chunkFPAJGGOCParam1342.idx]
              .ignoreAmbiguities !== true &&
            chunkFPAJGGOCParam1342.idx < chunkFPAJGGOCValue549 &&
            chunkFPAJGGOCHelper207(
              chunkFPAJGGOCParam1342.path,
              chunkFPAJGGOCValue550,
            ),
        ),
        (chunkFPAJGGOCParam352) => {
          let chunkFPAJGGOCValue779 = [
              chunkFPAJGGOCParam352.idx + 1,
              chunkFPAJGGOCValue549 + 1,
            ],
            chunkFPAJGGOCValue780 =
              chunkFPAJGGOCParam95.idx === 0 ? "" : chunkFPAJGGOCParam95.idx;
          return {
            message: chunkFPAJGGOCParam97.buildAlternationPrefixAmbiguityError({
              topLevelRule: chunkFPAJGGOCParam96,
              alternation: chunkFPAJGGOCParam95,
              ambiguityIndices: chunkFPAJGGOCValue779,
              prefixPath: chunkFPAJGGOCParam352.path,
            }),
            type: chunkFPAJGGOCValue172.AMBIGUOUS_PREFIX_ALTS,
            ruleName: chunkFPAJGGOCParam96.name,
            occurrence: chunkFPAJGGOCValue780,
            alternatives: chunkFPAJGGOCValue779,
          };
        },
      );
    }),
  );
}
function chunkFPAJGGOCHelper220(
  chunkFPAJGGOCParam522,
  chunkFPAJGGOCParam523,
  chunkFPAJGGOCParam524,
) {
  let chunkFPAJGGOCValue941 = [],
    chunkFPAJGGOCValue942 = basePickByI(
      chunkFPAJGGOCParam523,
      (chunkFPAJGGOCParam2311) => chunkFPAJGGOCParam2311.name,
    );
  return (
    _baseUniqS(chunkFPAJGGOCParam522, (chunkFPAJGGOCParam770) => {
      let chunkFPAJGGOCValue1184 = chunkFPAJGGOCParam770.name;
      if (
        chunkFPAJGGOCHelper112(chunkFPAJGGOCValue942, chunkFPAJGGOCValue1184)
      ) {
        let chunkFPAJGGOCValue1367 =
          chunkFPAJGGOCParam524.buildNamespaceConflictError(
            chunkFPAJGGOCParam770,
          );
        chunkFPAJGGOCValue941.push({
          message: chunkFPAJGGOCValue1367,
          type: chunkFPAJGGOCValue172.CONFLICT_TOKENS_RULES_NAMESPACE,
          ruleName: chunkFPAJGGOCValue1184,
        });
      }
    }),
    chunkFPAJGGOCValue941
  );
}
function chunkFPAJGGOCHelper221(chunkFPAJGGOCParam1079) {
  let chunkFPAJGGOCValue1415 = basePickByC(chunkFPAJGGOCParam1079, {
      errMsgProvider: chunkFPAJGGOCValue120,
    }),
    chunkFPAJGGOCValue1416 = {};
  return (
    _baseUniqS(chunkFPAJGGOCParam1079.rules, (chunkFPAJGGOCParam2152) => {
      chunkFPAJGGOCValue1416[chunkFPAJGGOCParam2152.name] =
        chunkFPAJGGOCParam2152;
    }),
    chunkFPAJGGOCHelper191(
      chunkFPAJGGOCValue1416,
      chunkFPAJGGOCValue1415.errMsgProvider,
    )
  );
}
function chunkFPAJGGOCHelper222(chunkFPAJGGOCParam1244) {
  return (
    (chunkFPAJGGOCParam1244 = basePickByC(chunkFPAJGGOCParam1244, {
      errMsgProvider: chunkFPAJGGOCValue121,
    })),
    chunkFPAJGGOCHelper210(
      chunkFPAJGGOCParam1244.rules,
      chunkFPAJGGOCParam1244.tokenTypes,
      chunkFPAJGGOCParam1244.errMsgProvider,
      chunkFPAJGGOCParam1244.grammarName,
    )
  );
}
var chunkFPAJGGOCValue139 = [
  "MismatchedTokenException",
  "NoViableAltException",
  "EarlyExitException",
  "NotAllInputParsedException",
];
Object.freeze(chunkFPAJGGOCValue139);
function chunkFPAJGGOCHelper223(chunkFPAJGGOCParam2115) {
  return chunkFPAJGGOCHelper112(
    chunkFPAJGGOCValue139,
    chunkFPAJGGOCParam2115.name,
  );
}
var chunkFPAJGGOCValue140 = class extends Error {
    constructor(chunkFPAJGGOCParam725, chunkFPAJGGOCParam726) {
      super(chunkFPAJGGOCParam725);
      this.token = chunkFPAJGGOCParam726;
      this.resyncedTokens = [];
      Object.setPrototypeOf(this, new.target.prototype);
      Error.captureStackTrace &&
        Error.captureStackTrace(this, this.constructor);
    }
  },
  chunkFPAJGGOCValue141 = class extends chunkFPAJGGOCValue140 {
    constructor(
      chunkFPAJGGOCParam1506,
      chunkFPAJGGOCParam1507,
      chunkFPAJGGOCParam1508,
    ) {
      super(chunkFPAJGGOCParam1506, chunkFPAJGGOCParam1507);
      this.previousToken = chunkFPAJGGOCParam1508;
      this.name = "MismatchedTokenException";
    }
  },
  js = class extends chunkFPAJGGOCValue140 {
    constructor(
      chunkFPAJGGOCParam1509,
      chunkFPAJGGOCParam1510,
      chunkFPAJGGOCParam1511,
    ) {
      super(chunkFPAJGGOCParam1509, chunkFPAJGGOCParam1510);
      this.previousToken = chunkFPAJGGOCParam1511;
      this.name = "NoViableAltException";
    }
  },
  chunkFPAJGGOCValue142 = class extends chunkFPAJGGOCValue140 {
    constructor(chunkFPAJGGOCParam1833, chunkFPAJGGOCParam1834) {
      super(chunkFPAJGGOCParam1833, chunkFPAJGGOCParam1834);
      this.name = "NotAllInputParsedException";
    }
  },
  chunkFPAJGGOCValue143 = class extends chunkFPAJGGOCValue140 {
    constructor(
      chunkFPAJGGOCParam1512,
      chunkFPAJGGOCParam1513,
      chunkFPAJGGOCParam1514,
    ) {
      super(chunkFPAJGGOCParam1512, chunkFPAJGGOCParam1513);
      this.previousToken = chunkFPAJGGOCParam1514;
      this.name = "EarlyExitException";
    }
  },
  chunkFPAJGGOCValue144 = {},
  chunkFPAJGGOCValue146 = class extends Error {
    constructor(chunkFPAJGGOCParam1901) {
      super(chunkFPAJGGOCParam1901);
      this.name = "InRuleRecoveryException";
    }
  },
  chunkFPAJGGOCValue147 = class {
    initRecoverable(chunkFPAJGGOCParam616) {
      this.firstAfterRepMap = {};
      this.resyncFollows = {};
      this.recoveryEnabled = basePickByR(
        chunkFPAJGGOCParam616,
        "recoveryEnabled",
      )
        ? chunkFPAJGGOCParam616.recoveryEnabled
        : chunkFPAJGGOCValue170.recoveryEnabled;
      this.recoveryEnabled &&
        (this.attemptInRepetitionRecovery = chunkFPAJGGOCHelper224);
    }
    getTokenToInsert(chunkFPAJGGOCParam1282) {
      let chunkFPAJGGOCValue1568 = chunkFPAJGGOCHelper189(
        chunkFPAJGGOCParam1282,
        "",
        NaN,
        NaN,
        NaN,
        NaN,
        NaN,
        NaN,
      );
      return (
        (chunkFPAJGGOCValue1568.isInsertedInRecovery = true),
        chunkFPAJGGOCValue1568
      );
    }
    canTokenTypeBeInsertedInRecovery(chunkFPAJGGOCParam1872) {
      return true;
    }
    canTokenTypeBeDeletedInRecovery(chunkFPAJGGOCParam1883) {
      return true;
    }
    tryInRepetitionRecovery(
      chunkFPAJGGOCParam90,
      chunkFPAJGGOCParam91,
      chunkFPAJGGOCParam92,
      chunkFPAJGGOCParam93,
    ) {
      let chunkFPAJGGOCValue513 = this.findReSyncTokenType(),
        chunkFPAJGGOCValue514 = this.exportLexerState(),
        chunkFPAJGGOCValue515 = [],
        chunkFPAJGGOCValue516 = false,
        chunkFPAJGGOCValue517 = this.LA(1),
        chunkFPAJGGOCValue518 = this.LA(1),
        chunkFPAJGGOCValue519 = () => {
          let chunkFPAJGGOCValue834 = this.LA(0),
            chunkFPAJGGOCValue835 = new chunkFPAJGGOCValue141(
              this.errorMessageProvider.buildMismatchTokenMessage({
                expected: chunkFPAJGGOCParam93,
                actual: chunkFPAJGGOCValue517,
                previous: chunkFPAJGGOCValue834,
                ruleName: this.getCurrRuleFullName(),
              }),
              chunkFPAJGGOCValue517,
              this.LA(0),
            );
          chunkFPAJGGOCValue835.resyncedTokens = chunkFPAJGGOCHelper106(
            chunkFPAJGGOCValue515,
          );
          this.SAVE_ERROR(chunkFPAJGGOCValue835);
        };
      for (; !chunkFPAJGGOCValue516; )
        if (this.tokenMatcher(chunkFPAJGGOCValue518, chunkFPAJGGOCParam93)) {
          chunkFPAJGGOCValue519();
          return;
        } else if (chunkFPAJGGOCParam92.call(this)) {
          chunkFPAJGGOCValue519();
          chunkFPAJGGOCParam90.apply(this, chunkFPAJGGOCParam91);
          return;
        } else
          this.tokenMatcher(chunkFPAJGGOCValue518, chunkFPAJGGOCValue513)
            ? (chunkFPAJGGOCValue516 = true)
            : ((chunkFPAJGGOCValue518 = this.SKIP_TOKEN()),
              this.addToResyncTokens(
                chunkFPAJGGOCValue518,
                chunkFPAJGGOCValue515,
              ));
      this.importLexerState(chunkFPAJGGOCValue514);
    }
    shouldInRepetitionRecoveryBeTried(
      chunkFPAJGGOCParam745,
      chunkFPAJGGOCParam746,
      chunkFPAJGGOCParam747,
    ) {
      return !(
        chunkFPAJGGOCParam747 === false ||
        this.tokenMatcher(this.LA(1), chunkFPAJGGOCParam745) ||
        this.isBackTracking() ||
        this.canPerformInRuleRecovery(
          chunkFPAJGGOCParam745,
          this.getFollowsForInRuleRecovery(
            chunkFPAJGGOCParam745,
            chunkFPAJGGOCParam746,
          ),
        )
      );
    }
    getFollowsForInRuleRecovery(
      chunkFPAJGGOCParam1247,
      chunkFPAJGGOCParam1248,
    ) {
      let chunkFPAJGGOCValue1544 = this.getCurrentGrammarPath(
        chunkFPAJGGOCParam1247,
        chunkFPAJGGOCParam1248,
      );
      return this.getNextPossibleTokenTypes(chunkFPAJGGOCValue1544);
    }
    tryInRuleRecovery(chunkFPAJGGOCParam591, chunkFPAJGGOCParam592) {
      if (
        this.canRecoverWithSingleTokenInsertion(
          chunkFPAJGGOCParam591,
          chunkFPAJGGOCParam592,
        )
      )
        return this.getTokenToInsert(chunkFPAJGGOCParam591);
      if (this.canRecoverWithSingleTokenDeletion(chunkFPAJGGOCParam591)) {
        let chunkFPAJGGOCValue1756 = this.SKIP_TOKEN();
        return (this.consumeToken(), chunkFPAJGGOCValue1756);
      }
      throw new chunkFPAJGGOCValue146("sad sad panda");
    }
    canPerformInRuleRecovery(chunkFPAJGGOCParam1076, chunkFPAJGGOCParam1077) {
      return (
        this.canRecoverWithSingleTokenInsertion(
          chunkFPAJGGOCParam1076,
          chunkFPAJGGOCParam1077,
        ) || this.canRecoverWithSingleTokenDeletion(chunkFPAJGGOCParam1076)
      );
    }
    canRecoverWithSingleTokenInsertion(
      chunkFPAJGGOCParam889,
      chunkFPAJGGOCParam890,
    ) {
      if (
        !this.canTokenTypeBeInsertedInRecovery(chunkFPAJGGOCParam889) ||
        isEmptyT(chunkFPAJGGOCParam890)
      )
        return false;
      let chunkFPAJGGOCValue1271 = this.LA(1);
      return (
        basePickByO(chunkFPAJGGOCParam890, (chunkFPAJGGOCParam2171) =>
          this.tokenMatcher(chunkFPAJGGOCValue1271, chunkFPAJGGOCParam2171),
        ) !== undefined
      );
    }
    canRecoverWithSingleTokenDeletion(chunkFPAJGGOCParam1156) {
      return this.canTokenTypeBeDeletedInRecovery(chunkFPAJGGOCParam1156)
        ? this.tokenMatcher(this.LA(2), chunkFPAJGGOCParam1156)
        : false;
    }
    isInCurrentRuleReSyncSet(chunkFPAJGGOCParam1299) {
      let chunkFPAJGGOCValue1587 = this.getCurrFollowKey();
      return chunkFPAJGGOCHelper112(
        this.getFollowSetFromFollowKey(chunkFPAJGGOCValue1587),
        chunkFPAJGGOCParam1299,
      );
    }
    findReSyncTokenType() {
      let chunkFPAJGGOCValue1179 = this.flattenFollowSet(),
        chunkFPAJGGOCValue1180 = this.LA(1),
        chunkFPAJGGOCValue1181 = 2;
      for (;;) {
        let chunkFPAJGGOCValue1630 = basePickByO(
          chunkFPAJGGOCValue1179,
          (chunkFPAJGGOCParam2303) =>
            chunkFPAJGGOCHelper190(
              chunkFPAJGGOCValue1180,
              chunkFPAJGGOCParam2303,
            ),
        );
        if (chunkFPAJGGOCValue1630 !== undefined) return chunkFPAJGGOCValue1630;
        chunkFPAJGGOCValue1180 = this.LA(chunkFPAJGGOCValue1181);
        chunkFPAJGGOCValue1181++;
      }
    }
    getCurrFollowKey() {
      if (this.RULE_STACK.length === 1) return chunkFPAJGGOCValue144;
      let chunkFPAJGGOCValue877 = this.getLastExplicitRuleShortName(),
        chunkFPAJGGOCValue878 = this.getLastExplicitRuleOccurrenceIndex(),
        chunkFPAJGGOCValue879 = this.getPreviousExplicitRuleShortName();
      return {
        ruleName: this.shortRuleNameToFullName(chunkFPAJGGOCValue877),
        idxInCallingRule: chunkFPAJGGOCValue878,
        inRule: this.shortRuleNameToFullName(chunkFPAJGGOCValue879),
      };
    }
    buildFullFollowKeyStack() {
      let chunkFPAJGGOCValue913 = this.RULE_STACK,
        chunkFPAJGGOCValue914 = this.RULE_OCCURRENCE_STACK;
      return basePickByI(
        chunkFPAJGGOCValue913,
        (chunkFPAJGGOCParam820, chunkFPAJGGOCParam821) =>
          chunkFPAJGGOCParam821 === 0
            ? chunkFPAJGGOCValue144
            : {
                ruleName: this.shortRuleNameToFullName(chunkFPAJGGOCParam820),
                idxInCallingRule: chunkFPAJGGOCValue914[chunkFPAJGGOCParam821],
                inRule: this.shortRuleNameToFullName(
                  chunkFPAJGGOCValue913[chunkFPAJGGOCParam821 - 1],
                ),
              },
      );
    }
    flattenFollowSet() {
      return basePickByL(
        basePickByI(this.buildFullFollowKeyStack(), (chunkFPAJGGOCParam1994) =>
          this.getFollowSetFromFollowKey(chunkFPAJGGOCParam1994),
        ),
      );
    }
    getFollowSetFromFollowKey(chunkFPAJGGOCParam1080) {
      if (chunkFPAJGGOCParam1080 === chunkFPAJGGOCValue144)
        return [chunkFPAJGGOCValue118];
      let chunkFPAJGGOCValue1417 =
        chunkFPAJGGOCParam1080.ruleName +
        chunkFPAJGGOCParam1080.idxInCallingRule +
        "_~IN~_" +
        chunkFPAJGGOCParam1080.inRule;
      return this.resyncFollows[chunkFPAJGGOCValue1417];
    }
    addToResyncTokens(chunkFPAJGGOCParam1543, chunkFPAJGGOCParam1544) {
      return (
        this.tokenMatcher(chunkFPAJGGOCParam1543, chunkFPAJGGOCValue118) ||
          chunkFPAJGGOCParam1544.push(chunkFPAJGGOCParam1543),
        chunkFPAJGGOCParam1544
      );
    }
    reSyncTo(chunkFPAJGGOCParam977) {
      let chunkFPAJGGOCValue1342 = [],
        chunkFPAJGGOCValue1343 = this.LA(1);
      for (
        ;
        this.tokenMatcher(chunkFPAJGGOCValue1343, chunkFPAJGGOCParam977) ===
        false;

      ) {
        chunkFPAJGGOCValue1343 = this.SKIP_TOKEN();
        this.addToResyncTokens(chunkFPAJGGOCValue1343, chunkFPAJGGOCValue1342);
      }
      return chunkFPAJGGOCHelper106(chunkFPAJGGOCValue1342);
    }
    attemptInRepetitionRecovery(
      chunkFPAJGGOCParam1980,
      chunkFPAJGGOCParam1981,
      chunkFPAJGGOCParam1982,
      chunkFPAJGGOCParam1983,
      chunkFPAJGGOCParam1984,
      chunkFPAJGGOCParam1985,
      chunkFPAJGGOCParam1986,
    ) {}
    getCurrentGrammarPath(chunkFPAJGGOCParam849, chunkFPAJGGOCParam850) {
      return {
        ruleStack: this.getHumanReadableRuleStack(),
        occurrenceStack: clone(this.RULE_OCCURRENCE_STACK),
        lastTok: chunkFPAJGGOCParam849,
        lastTokOccurrence: chunkFPAJGGOCParam850,
      };
    }
    getHumanReadableRuleStack() {
      return basePickByI(this.RULE_STACK, (chunkFPAJGGOCParam2143) =>
        this.shortRuleNameToFullName(chunkFPAJGGOCParam2143),
      );
    }
  };
function chunkFPAJGGOCHelper224(
  chunkFPAJGGOCParam237,
  chunkFPAJGGOCParam238,
  chunkFPAJGGOCParam239,
  chunkFPAJGGOCParam240,
  chunkFPAJGGOCParam241,
  chunkFPAJGGOCParam242,
  chunkFPAJGGOCParam243,
) {
  let chunkFPAJGGOCValue661 = this.getKeyForAutomaticLookahead(
      chunkFPAJGGOCParam240,
      chunkFPAJGGOCParam241,
    ),
    chunkFPAJGGOCValue662 = this.firstAfterRepMap[chunkFPAJGGOCValue661];
  if (chunkFPAJGGOCValue662 === undefined) {
    let chunkFPAJGGOCValue1474 = this.getCurrRuleFullName(),
      chunkFPAJGGOCValue1475 =
        this.getGAstProductions()[chunkFPAJGGOCValue1474];
    chunkFPAJGGOCValue662 = new chunkFPAJGGOCParam242(
      chunkFPAJGGOCValue1475,
      chunkFPAJGGOCParam241,
    ).startWalking();
    this.firstAfterRepMap[chunkFPAJGGOCValue661] = chunkFPAJGGOCValue662;
  }
  let chunkFPAJGGOCValue663 = chunkFPAJGGOCValue662.token,
    chunkFPAJGGOCValue664 = chunkFPAJGGOCValue662.occurrence,
    chunkFPAJGGOCValue665 = chunkFPAJGGOCValue662.isEndOfRule;
  this.RULE_STACK.length === 1 &&
    chunkFPAJGGOCValue665 &&
    chunkFPAJGGOCValue663 === undefined &&
    ((chunkFPAJGGOCValue663 = chunkFPAJGGOCValue118),
    (chunkFPAJGGOCValue664 = 1));
  !(
    chunkFPAJGGOCValue663 === undefined || chunkFPAJGGOCValue664 === undefined
  ) &&
    this.shouldInRepetitionRecoveryBeTried(
      chunkFPAJGGOCValue663,
      chunkFPAJGGOCValue664,
      chunkFPAJGGOCParam243,
    ) &&
    this.tryInRepetitionRecovery(
      chunkFPAJGGOCParam237,
      chunkFPAJGGOCParam238,
      chunkFPAJGGOCParam239,
      chunkFPAJGGOCValue663,
    );
}
function chunkFPAJGGOCHelper225(
  chunkFPAJGGOCParam2099,
  chunkFPAJGGOCParam2100,
  chunkFPAJGGOCParam2101,
) {
  return (
    chunkFPAJGGOCParam2101 | chunkFPAJGGOCParam2100 | chunkFPAJGGOCParam2099
  );
}
var chunkFPAJGGOCValue151 = class {
    constructor(chunkFPAJGGOCParam1585) {
      this.maxLookahead =
        chunkFPAJGGOCParam1585?.maxLookahead ??
        chunkFPAJGGOCValue170.maxLookahead;
    }
    validate(chunkFPAJGGOCParam369) {
      let chunkFPAJGGOCValue795 = this.validateNoLeftRecursion(
        chunkFPAJGGOCParam369.rules,
      );
      if (isEmptyT(chunkFPAJGGOCValue795)) {
        let chunkFPAJGGOCValue917 = this.validateEmptyOrAlternatives(
            chunkFPAJGGOCParam369.rules,
          ),
          chunkFPAJGGOCValue918 = this.validateAmbiguousAlternationAlternatives(
            chunkFPAJGGOCParam369.rules,
            this.maxLookahead,
          ),
          chunkFPAJGGOCValue919 = this.validateSomeNonEmptyLookaheadPath(
            chunkFPAJGGOCParam369.rules,
            this.maxLookahead,
          );
        return [
          ...chunkFPAJGGOCValue795,
          ...chunkFPAJGGOCValue917,
          ...chunkFPAJGGOCValue918,
          ...chunkFPAJGGOCValue919,
        ];
      }
      return chunkFPAJGGOCValue795;
    }
    validateNoLeftRecursion(chunkFPAJGGOCParam1649) {
      return chunkFPAJGGOCHelper111(
        chunkFPAJGGOCParam1649,
        (chunkFPAJGGOCParam2248) =>
          chunkFPAJGGOCHelper213(
            chunkFPAJGGOCParam2248,
            chunkFPAJGGOCParam2248,
            chunkFPAJGGOCValue121,
          ),
      );
    }
    validateEmptyOrAlternatives(chunkFPAJGGOCParam1638) {
      return chunkFPAJGGOCHelper111(
        chunkFPAJGGOCParam1638,
        (chunkFPAJGGOCParam2268) =>
          chunkFPAJGGOCHelper215(chunkFPAJGGOCParam2268, chunkFPAJGGOCValue121),
      );
    }
    validateAmbiguousAlternationAlternatives(
      chunkFPAJGGOCParam1480,
      chunkFPAJGGOCParam1481,
    ) {
      return chunkFPAJGGOCHelper111(
        chunkFPAJGGOCParam1480,
        (chunkFPAJGGOCParam2249) =>
          chunkFPAJGGOCHelper216(
            chunkFPAJGGOCParam2249,
            chunkFPAJGGOCParam1481,
            chunkFPAJGGOCValue121,
          ),
      );
    }
    validateSomeNonEmptyLookaheadPath(
      chunkFPAJGGOCParam1656,
      chunkFPAJGGOCParam1657,
    ) {
      return _s(
        chunkFPAJGGOCParam1656,
        chunkFPAJGGOCParam1657,
        chunkFPAJGGOCValue121,
      );
    }
    buildLookaheadForAlternation(chunkFPAJGGOCParam923) {
      return chunkFPAJGGOCHelper197(
        chunkFPAJGGOCParam923.prodOccurrence,
        chunkFPAJGGOCParam923.rule,
        chunkFPAJGGOCParam923.maxLookahead,
        chunkFPAJGGOCParam923.hasPredicates,
        chunkFPAJGGOCParam923.dynamicTokensEnabled,
        chunkFPAJGGOCHelper199,
      );
    }
    buildLookaheadForOptional(chunkFPAJGGOCParam952) {
      return chunkFPAJGGOCHelper198(
        chunkFPAJGGOCParam952.prodOccurrence,
        chunkFPAJGGOCParam952.rule,
        chunkFPAJGGOCParam952.maxLookahead,
        chunkFPAJGGOCParam952.dynamicTokensEnabled,
        chunkFPAJGGOCHelper195(chunkFPAJGGOCParam952.prodType),
        chunkFPAJGGOCHelper200,
      );
    }
  },
  chunkFPAJGGOCValue152 = class {
    initLooksAhead(chunkFPAJGGOCParam353) {
      this.dynamicTokensEnabled = basePickByR(
        chunkFPAJGGOCParam353,
        "dynamicTokensEnabled",
      )
        ? chunkFPAJGGOCParam353.dynamicTokensEnabled
        : chunkFPAJGGOCValue170.dynamicTokensEnabled;
      this.maxLookahead = basePickByR(chunkFPAJGGOCParam353, "maxLookahead")
        ? chunkFPAJGGOCParam353.maxLookahead
        : chunkFPAJGGOCValue170.maxLookahead;
      this.lookaheadStrategy = basePickByR(
        chunkFPAJGGOCParam353,
        "lookaheadStrategy",
      )
        ? chunkFPAJGGOCParam353.lookaheadStrategy
        : new chunkFPAJGGOCValue151({
            maxLookahead: this.maxLookahead,
          });
      this.lookAheadFuncsCache = new Map();
    }
    preComputeLookaheadFunctions(chunkFPAJGGOCParam15) {
      _baseUniqS(chunkFPAJGGOCParam15, (chunkFPAJGGOCParam16) => {
        this.TRACE_INIT(`${chunkFPAJGGOCParam16.name} Rule Lookahead`, () => {
          let {
            alternation,
            repetition,
            option,
            repetitionMandatory,
            repetitionMandatoryWithSeparator,
            repetitionWithSeparator,
          } = chunkFPAJGGOCHelper226(chunkFPAJGGOCParam16);
          _baseUniqS(alternation, (chunkFPAJGGOCParam232) => {
            let chunkFPAJGGOCValue649 =
              chunkFPAJGGOCParam232.idx === 0 ? "" : chunkFPAJGGOCParam232.idx;
            this.TRACE_INIT(
              `${chunkFPAJGGOCHelper130(chunkFPAJGGOCParam232)}${chunkFPAJGGOCValue649}`,
              () => {
                let chunkFPAJGGOCValue763 =
                    this.lookaheadStrategy.buildLookaheadForAlternation({
                      prodOccurrence: chunkFPAJGGOCParam232.idx,
                      rule: chunkFPAJGGOCParam16,
                      maxLookahead:
                        chunkFPAJGGOCParam232.maxLookahead || this.maxLookahead,
                      hasPredicates: chunkFPAJGGOCParam232.hasPredicates,
                      dynamicTokensEnabled: this.dynamicTokensEnabled,
                    }),
                  chunkFPAJGGOCValue764 = chunkFPAJGGOCHelper225(
                    this.fullRuleNameToShort[chunkFPAJGGOCParam16.name],
                    256,
                    chunkFPAJGGOCParam232.idx,
                  );
                this.setLaFuncCache(
                  chunkFPAJGGOCValue764,
                  chunkFPAJGGOCValue763,
                );
              },
            );
          });
          _baseUniqS(repetition, (chunkFPAJGGOCParam812) => {
            this.computeLookaheadFunc(
              chunkFPAJGGOCParam16,
              chunkFPAJGGOCParam812.idx,
              768,
              "Repetition",
              chunkFPAJGGOCParam812.maxLookahead,
              chunkFPAJGGOCHelper130(chunkFPAJGGOCParam812),
            );
          });
          _baseUniqS(option, (chunkFPAJGGOCParam827) => {
            this.computeLookaheadFunc(
              chunkFPAJGGOCParam16,
              chunkFPAJGGOCParam827.idx,
              512,
              "Option",
              chunkFPAJGGOCParam827.maxLookahead,
              chunkFPAJGGOCHelper130(chunkFPAJGGOCParam827),
            );
          });
          _baseUniqS(repetitionMandatory, (chunkFPAJGGOCParam780) => {
            this.computeLookaheadFunc(
              chunkFPAJGGOCParam16,
              chunkFPAJGGOCParam780.idx,
              1024,
              "RepetitionMandatory",
              chunkFPAJGGOCParam780.maxLookahead,
              chunkFPAJGGOCHelper130(chunkFPAJGGOCParam780),
            );
          });
          _baseUniqS(
            repetitionMandatoryWithSeparator,
            (chunkFPAJGGOCParam757) => {
              this.computeLookaheadFunc(
                chunkFPAJGGOCParam16,
                chunkFPAJGGOCParam757.idx,
                1536,
                "RepetitionMandatoryWithSeparator",
                chunkFPAJGGOCParam757.maxLookahead,
                chunkFPAJGGOCHelper130(chunkFPAJGGOCParam757),
              );
            },
          );
          _baseUniqS(repetitionWithSeparator, (chunkFPAJGGOCParam771) => {
            this.computeLookaheadFunc(
              chunkFPAJGGOCParam16,
              chunkFPAJGGOCParam771.idx,
              1280,
              "RepetitionWithSeparator",
              chunkFPAJGGOCParam771.maxLookahead,
              chunkFPAJGGOCHelper130(chunkFPAJGGOCParam771),
            );
          });
        });
      });
    }
    computeLookaheadFunc(
      chunkFPAJGGOCParam330,
      chunkFPAJGGOCParam331,
      chunkFPAJGGOCParam332,
      chunkFPAJGGOCParam333,
      chunkFPAJGGOCParam334,
      chunkFPAJGGOCParam335,
    ) {
      this.TRACE_INIT(
        `${chunkFPAJGGOCParam335}${chunkFPAJGGOCParam331 === 0 ? "" : chunkFPAJGGOCParam331}`,
        () => {
          let chunkFPAJGGOCValue887 =
              this.lookaheadStrategy.buildLookaheadForOptional({
                prodOccurrence: chunkFPAJGGOCParam331,
                rule: chunkFPAJGGOCParam330,
                maxLookahead: chunkFPAJGGOCParam334 || this.maxLookahead,
                dynamicTokensEnabled: this.dynamicTokensEnabled,
                prodType: chunkFPAJGGOCParam333,
              }),
            chunkFPAJGGOCValue888 = chunkFPAJGGOCHelper225(
              this.fullRuleNameToShort[chunkFPAJGGOCParam330.name],
              chunkFPAJGGOCParam332,
              chunkFPAJGGOCParam331,
            );
          this.setLaFuncCache(chunkFPAJGGOCValue888, chunkFPAJGGOCValue887);
        },
      );
    }
    getKeyForAutomaticLookahead(
      chunkFPAJGGOCParam1435,
      chunkFPAJGGOCParam1436,
    ) {
      return chunkFPAJGGOCHelper225(
        this.getLastExplicitRuleShortName(),
        chunkFPAJGGOCParam1435,
        chunkFPAJGGOCParam1436,
      );
    }
    getLaFuncFromCache(chunkFPAJGGOCParam1650) {
      return this.lookAheadFuncsCache.get(chunkFPAJGGOCParam1650);
    }
    setLaFuncCache(chunkFPAJGGOCParam1718, chunkFPAJGGOCParam1719) {
      this.lookAheadFuncsCache.set(
        chunkFPAJGGOCParam1718,
        chunkFPAJGGOCParam1719,
      );
    }
  },
  chunkFPAJGGOCValue153 = new (class extends chunkFPAJGGOCValue89 {
    constructor() {
      super(...arguments);
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: [],
      };
    }
    reset() {
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: [],
      };
    }
    visitOption(chunkFPAJGGOCParam1873) {
      this.dslMethods.option.push(chunkFPAJGGOCParam1873);
    }
    visitRepetitionWithSeparator(chunkFPAJGGOCParam1495) {
      this.dslMethods.repetitionWithSeparator.push(chunkFPAJGGOCParam1495);
    }
    visitRepetitionMandatory(chunkFPAJGGOCParam1567) {
      this.dslMethods.repetitionMandatory.push(chunkFPAJGGOCParam1567);
    }
    visitRepetitionMandatoryWithSeparator(chunkFPAJGGOCParam1365) {
      this.dslMethods.repetitionMandatoryWithSeparator.push(
        chunkFPAJGGOCParam1365,
      );
    }
    visitRepetition(chunkFPAJGGOCParam1745) {
      this.dslMethods.repetition.push(chunkFPAJGGOCParam1745);
    }
    visitAlternation(chunkFPAJGGOCParam1720) {
      this.dslMethods.alternation.push(chunkFPAJGGOCParam1720);
    }
  })();
function chunkFPAJGGOCHelper226(chunkFPAJGGOCParam1454) {
  chunkFPAJGGOCValue153.reset();
  chunkFPAJGGOCParam1454.accept(chunkFPAJGGOCValue153);
  let chunkFPAJGGOCValue1705 = chunkFPAJGGOCValue153.dslMethods;
  return (chunkFPAJGGOCValue153.reset(), chunkFPAJGGOCValue1705);
}
function chunkFPAJGGOCHelper227(
  chunkFPAJGGOCParam1007,
  chunkFPAJGGOCParam1008,
) {
  isNaN(chunkFPAJGGOCParam1007.startOffset) === true
    ? ((chunkFPAJGGOCParam1007.startOffset =
        chunkFPAJGGOCParam1008.startOffset),
      (chunkFPAJGGOCParam1007.endOffset = chunkFPAJGGOCParam1008.endOffset))
    : chunkFPAJGGOCParam1007.endOffset < chunkFPAJGGOCParam1008.endOffset &&
      (chunkFPAJGGOCParam1007.endOffset = chunkFPAJGGOCParam1008.endOffset);
}
function chunkFPAJGGOCHelper228(chunkFPAJGGOCParam436, chunkFPAJGGOCParam437) {
  isNaN(chunkFPAJGGOCParam436.startOffset) === true
    ? ((chunkFPAJGGOCParam436.startOffset = chunkFPAJGGOCParam437.startOffset),
      (chunkFPAJGGOCParam436.startColumn = chunkFPAJGGOCParam437.startColumn),
      (chunkFPAJGGOCParam436.startLine = chunkFPAJGGOCParam437.startLine),
      (chunkFPAJGGOCParam436.endOffset = chunkFPAJGGOCParam437.endOffset),
      (chunkFPAJGGOCParam436.endColumn = chunkFPAJGGOCParam437.endColumn),
      (chunkFPAJGGOCParam436.endLine = chunkFPAJGGOCParam437.endLine))
    : chunkFPAJGGOCParam436.endOffset < chunkFPAJGGOCParam437.endOffset &&
      ((chunkFPAJGGOCParam436.endOffset = chunkFPAJGGOCParam437.endOffset),
      (chunkFPAJGGOCParam436.endColumn = chunkFPAJGGOCParam437.endColumn),
      (chunkFPAJGGOCParam436.endLine = chunkFPAJGGOCParam437.endLine));
}
function chunkFPAJGGOCHelper229(
  chunkFPAJGGOCParam1441,
  chunkFPAJGGOCParam1442,
  chunkFPAJGGOCParam1443,
) {
  chunkFPAJGGOCParam1441.children[chunkFPAJGGOCParam1443] === undefined
    ? (chunkFPAJGGOCParam1441.children[chunkFPAJGGOCParam1443] = [
        chunkFPAJGGOCParam1442,
      ])
    : chunkFPAJGGOCParam1441.children[chunkFPAJGGOCParam1443].push(
        chunkFPAJGGOCParam1442,
      );
}
function chunkFPAJGGOCHelper230(
  chunkFPAJGGOCParam1444,
  chunkFPAJGGOCParam1445,
  chunkFPAJGGOCParam1446,
) {
  chunkFPAJGGOCParam1444.children[chunkFPAJGGOCParam1445] === undefined
    ? (chunkFPAJGGOCParam1444.children[chunkFPAJGGOCParam1445] = [
        chunkFPAJGGOCParam1446,
      ])
    : chunkFPAJGGOCParam1444.children[chunkFPAJGGOCParam1445].push(
        chunkFPAJGGOCParam1446,
      );
}
function chunkFPAJGGOCHelper231(
  chunkFPAJGGOCParam1271,
  chunkFPAJGGOCParam1272,
) {
  Object.defineProperty(chunkFPAJGGOCParam1271, "name", {
    enumerable: false,
    configurable: true,
    writable: false,
    value: chunkFPAJGGOCParam1272,
  });
}
function $s(chunkFPAJGGOCParam730, chunkFPAJGGOCParam731) {
  let chunkFPAJGGOCValue1130 = baseUniqD(chunkFPAJGGOCParam730),
    chunkFPAJGGOCValue1131 = chunkFPAJGGOCValue1130.length;
  for (
    let chunkFPAJGGOCValue1324 = 0;
    chunkFPAJGGOCValue1324 < chunkFPAJGGOCValue1131;
    chunkFPAJGGOCValue1324++
  ) {
    let chunkFPAJGGOCValue1413 =
        chunkFPAJGGOCParam730[chunkFPAJGGOCValue1130[chunkFPAJGGOCValue1324]],
      chunkFPAJGGOCValue1414 = chunkFPAJGGOCValue1413.length;
    for (
      let chunkFPAJGGOCValue1625 = 0;
      chunkFPAJGGOCValue1625 < chunkFPAJGGOCValue1414;
      chunkFPAJGGOCValue1625++
    ) {
      let chunkFPAJGGOCValue1739 =
        chunkFPAJGGOCValue1413[chunkFPAJGGOCValue1625];
      chunkFPAJGGOCValue1739.tokenTypeIdx === undefined &&
        this[chunkFPAJGGOCValue1739.name](
          chunkFPAJGGOCValue1739.children,
          chunkFPAJGGOCParam731,
        );
    }
  }
}
function chunkFPAJGGOCHelper232(chunkFPAJGGOCParam178, chunkFPAJGGOCParam179) {
  let chunkFPAJGGOCValue586 = function () {};
  return (
    chunkFPAJGGOCHelper231(
      chunkFPAJGGOCValue586,
      chunkFPAJGGOCParam178 + "BaseSemantics",
    ),
    (chunkFPAJGGOCValue586.prototype = {
      visit: function (chunkFPAJGGOCParam1428, chunkFPAJGGOCParam1429) {
        if (
          (isArrayLikeObjectV(chunkFPAJGGOCParam1428) &&
            (chunkFPAJGGOCParam1428 = chunkFPAJGGOCParam1428[0]),
          !baseUniqR(chunkFPAJGGOCParam1428))
        )
          return this[chunkFPAJGGOCParam1428.name](
            chunkFPAJGGOCParam1428.children,
            chunkFPAJGGOCParam1429,
          );
      },
      validateVisitor: function () {
        let chunkFPAJGGOCValue886 = chunkFPAJGGOCHelper234(
          this,
          chunkFPAJGGOCParam179,
        );
        if (!isEmptyT(chunkFPAJGGOCValue886)) {
          let chunkFPAJGGOCValue1012 = basePickByI(
            chunkFPAJGGOCValue886,
            (chunkFPAJGGOCParam2321) => chunkFPAJGGOCParam2321.msg,
          );
          throw Error(
            `Errors Detected in CST Visitor <${this.constructor.name}>:\n\t${chunkFPAJGGOCValue1012.join("\n\n").replace(/\n/g, "\n\t")}`,
          );
        }
      },
    }),
    (chunkFPAJGGOCValue586.prototype.constructor = chunkFPAJGGOCValue586),
    (chunkFPAJGGOCValue586._RULE_NAMES = chunkFPAJGGOCParam179),
    chunkFPAJGGOCValue586
  );
}
function chunkFPAJGGOCHelper233(
  chunkFPAJGGOCParam748,
  chunkFPAJGGOCParam749,
  chunkFPAJGGOCParam750,
) {
  let chunkFPAJGGOCValue1145 = function () {};
  chunkFPAJGGOCHelper231(
    chunkFPAJGGOCValue1145,
    chunkFPAJGGOCParam748 + "BaseSemanticsWithDefaults",
  );
  let chunkFPAJGGOCValue1146 = Object.create(chunkFPAJGGOCParam750.prototype);
  return (
    _baseUniqS(chunkFPAJGGOCParam749, (chunkFPAJGGOCParam2167) => {
      chunkFPAJGGOCValue1146[chunkFPAJGGOCParam2167] = $s;
    }),
    (chunkFPAJGGOCValue1145.prototype = chunkFPAJGGOCValue1146),
    (chunkFPAJGGOCValue1145.prototype.constructor = chunkFPAJGGOCValue1145),
    chunkFPAJGGOCValue1145
  );
}
var chunkFPAJGGOCValue155;
(function (chunkFPAJGGOCParam1316) {
  chunkFPAJGGOCParam1316[(chunkFPAJGGOCParam1316.REDUNDANT_METHOD = 0)] =
    "REDUNDANT_METHOD";
  chunkFPAJGGOCParam1316[(chunkFPAJGGOCParam1316.MISSING_METHOD = 1)] =
    "MISSING_METHOD";
})((chunkFPAJGGOCValue155 ||= {}));
function chunkFPAJGGOCHelper234(
  chunkFPAJGGOCParam2131,
  chunkFPAJGGOCParam2132,
) {
  return chunkFPAJGGOCHelper235(chunkFPAJGGOCParam2131, chunkFPAJGGOCParam2132);
}
function chunkFPAJGGOCHelper235(chunkFPAJGGOCParam732, chunkFPAJGGOCParam733) {
  return chunkFPAJGGOCHelper100(
    basePickByI(
      baseUniqA(
        chunkFPAJGGOCParam733,
        (chunkFPAJGGOCParam2225) =>
          isArrayLikeObjectR(chunkFPAJGGOCParam732[chunkFPAJGGOCParam2225]) ===
          false,
      ),
      (chunkFPAJGGOCParam1141) => ({
        msg: `Missing visitor method: <${chunkFPAJGGOCParam1141}> on ${chunkFPAJGGOCParam732.constructor.name} CST Visitor.`,
        type: chunkFPAJGGOCValue155.MISSING_METHOD,
        methodName: chunkFPAJGGOCParam1141,
      }),
    ),
  );
}
var chunkFPAJGGOCValue156 = class {
    initTreeBuilder(chunkFPAJGGOCParam17) {
      if (
        ((this.CST_STACK = []),
        (this.outputCst = chunkFPAJGGOCParam17.outputCst),
        (this.nodeLocationTracking = basePickByR(
          chunkFPAJGGOCParam17,
          "nodeLocationTracking",
        )
          ? chunkFPAJGGOCParam17.nodeLocationTracking
          : chunkFPAJGGOCValue170.nodeLocationTracking),
        !this.outputCst)
      ) {
        this.cstInvocationStateUpdate = baseUniqJ;
        this.cstFinallyStateUpdate = baseUniqJ;
        this.cstPostTerminal = baseUniqJ;
        this.cstPostNonTerminal = baseUniqJ;
        this.cstPostRule = baseUniqJ;
      } else if (/full/i.test(this.nodeLocationTracking))
        this.recoveryEnabled
          ? ((this.setNodeLocationFromToken = chunkFPAJGGOCHelper228),
            (this.setNodeLocationFromNode = chunkFPAJGGOCHelper228),
            (this.cstPostRule = baseUniqJ),
            (this.setInitialNodeLocation =
              this.setInitialNodeLocationFullRecovery))
          : ((this.setNodeLocationFromToken = baseUniqJ),
            (this.setNodeLocationFromNode = baseUniqJ),
            (this.cstPostRule = this.cstPostRuleFull),
            (this.setInitialNodeLocation =
              this.setInitialNodeLocationFullRegular));
      else if (/onlyOffset/i.test(this.nodeLocationTracking))
        this.recoveryEnabled
          ? ((this.setNodeLocationFromToken = chunkFPAJGGOCHelper227),
            (this.setNodeLocationFromNode = chunkFPAJGGOCHelper227),
            (this.cstPostRule = baseUniqJ),
            (this.setInitialNodeLocation =
              this.setInitialNodeLocationOnlyOffsetRecovery))
          : ((this.setNodeLocationFromToken = baseUniqJ),
            (this.setNodeLocationFromNode = baseUniqJ),
            (this.cstPostRule = this.cstPostRuleOnlyOffset),
            (this.setInitialNodeLocation =
              this.setInitialNodeLocationOnlyOffsetRegular));
      else if (/none/i.test(this.nodeLocationTracking)) {
        this.setNodeLocationFromToken = baseUniqJ;
        this.setNodeLocationFromNode = baseUniqJ;
        this.cstPostRule = baseUniqJ;
        this.setInitialNodeLocation = baseUniqJ;
      } else
        throw Error(
          `Invalid <nodeLocationTracking> config option: "${chunkFPAJGGOCParam17.nodeLocationTracking}"`,
        );
    }
    setInitialNodeLocationOnlyOffsetRecovery(chunkFPAJGGOCParam1392) {
      chunkFPAJGGOCParam1392.location = {
        startOffset: NaN,
        endOffset: NaN,
      };
    }
    setInitialNodeLocationOnlyOffsetRegular(chunkFPAJGGOCParam1311) {
      chunkFPAJGGOCParam1311.location = {
        startOffset: this.LA(1).startOffset,
        endOffset: NaN,
      };
    }
    setInitialNodeLocationFullRecovery(chunkFPAJGGOCParam842) {
      chunkFPAJGGOCParam842.location = {
        startOffset: NaN,
        startLine: NaN,
        startColumn: NaN,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN,
      };
    }
    setInitialNodeLocationFullRegular(chunkFPAJGGOCParam675) {
      let chunkFPAJGGOCValue1082 = this.LA(1);
      chunkFPAJGGOCParam675.location = {
        startOffset: chunkFPAJGGOCValue1082.startOffset,
        startLine: chunkFPAJGGOCValue1082.startLine,
        startColumn: chunkFPAJGGOCValue1082.startColumn,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN,
      };
    }
    cstInvocationStateUpdate(chunkFPAJGGOCParam1145) {
      let chunkFPAJGGOCValue1476 = {
        name: chunkFPAJGGOCParam1145,
        children: Object.create(null),
      };
      this.setInitialNodeLocation(chunkFPAJGGOCValue1476);
      this.CST_STACK.push(chunkFPAJGGOCValue1476);
    }
    cstFinallyStateUpdate() {
      this.CST_STACK.pop();
    }
    cstPostRuleFull(chunkFPAJGGOCParam590) {
      let chunkFPAJGGOCValue1021 = this.LA(0),
        chunkFPAJGGOCValue1022 = chunkFPAJGGOCParam590.location;
      chunkFPAJGGOCValue1022.startOffset <= chunkFPAJGGOCValue1021.startOffset
        ? ((chunkFPAJGGOCValue1022.endOffset =
            chunkFPAJGGOCValue1021.endOffset),
          (chunkFPAJGGOCValue1022.endLine = chunkFPAJGGOCValue1021.endLine),
          (chunkFPAJGGOCValue1022.endColumn = chunkFPAJGGOCValue1021.endColumn))
        : ((chunkFPAJGGOCValue1022.startOffset = NaN),
          (chunkFPAJGGOCValue1022.startLine = NaN),
          (chunkFPAJGGOCValue1022.startColumn = NaN));
    }
    cstPostRuleOnlyOffset(chunkFPAJGGOCParam982) {
      let chunkFPAJGGOCValue1348 = this.LA(0),
        chunkFPAJGGOCValue1349 = chunkFPAJGGOCParam982.location;
      chunkFPAJGGOCValue1349.startOffset <= chunkFPAJGGOCValue1348.startOffset
        ? (chunkFPAJGGOCValue1349.endOffset = chunkFPAJGGOCValue1348.endOffset)
        : (chunkFPAJGGOCValue1349.startOffset = NaN);
    }
    cstPostTerminal(chunkFPAJGGOCParam1159, chunkFPAJGGOCParam1160) {
      let chunkFPAJGGOCValue1489 = this.CST_STACK[this.CST_STACK.length - 1];
      chunkFPAJGGOCHelper229(
        chunkFPAJGGOCValue1489,
        chunkFPAJGGOCParam1160,
        chunkFPAJGGOCParam1159,
      );
      this.setNodeLocationFromToken(
        chunkFPAJGGOCValue1489.location,
        chunkFPAJGGOCParam1160,
      );
    }
    cstPostNonTerminal(chunkFPAJGGOCParam1100, chunkFPAJGGOCParam1101) {
      let chunkFPAJGGOCValue1441 = this.CST_STACK[this.CST_STACK.length - 1];
      chunkFPAJGGOCHelper230(
        chunkFPAJGGOCValue1441,
        chunkFPAJGGOCParam1101,
        chunkFPAJGGOCParam1100,
      );
      this.setNodeLocationFromNode(
        chunkFPAJGGOCValue1441.location,
        chunkFPAJGGOCParam1100.location,
      );
    }
    getBaseCstVisitorConstructor() {
      if (baseUniqR(this.baseCstVisitorConstructor)) {
        let chunkFPAJGGOCValue1563 = chunkFPAJGGOCHelper232(
          this.className,
          baseUniqD(this.gastProductionsCache),
        );
        return (
          (this.baseCstVisitorConstructor = chunkFPAJGGOCValue1563),
          chunkFPAJGGOCValue1563
        );
      }
      return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
      if (baseUniqR(this.baseCstVisitorWithDefaultsConstructor)) {
        let chunkFPAJGGOCValue1233 = chunkFPAJGGOCHelper233(
          this.className,
          baseUniqD(this.gastProductionsCache),
          this.getBaseCstVisitorConstructor(),
        );
        return (
          (this.baseCstVisitorWithDefaultsConstructor = chunkFPAJGGOCValue1233),
          chunkFPAJGGOCValue1233
        );
      }
      return this.baseCstVisitorWithDefaultsConstructor;
    }
    getLastExplicitRuleShortName() {
      let chunkFPAJGGOCValue1706 = this.RULE_STACK;
      return chunkFPAJGGOCValue1706[chunkFPAJGGOCValue1706.length - 1];
    }
    getPreviousExplicitRuleShortName() {
      let chunkFPAJGGOCValue1692 = this.RULE_STACK;
      return chunkFPAJGGOCValue1692[chunkFPAJGGOCValue1692.length - 2];
    }
    getLastExplicitRuleOccurrenceIndex() {
      let chunkFPAJGGOCValue1638 = this.RULE_OCCURRENCE_STACK;
      return chunkFPAJGGOCValue1638[chunkFPAJGGOCValue1638.length - 1];
    }
  },
  chunkFPAJGGOCValue157 = class {
    initLexerAdapter() {
      this.tokVector = [];
      this.tokVectorLength = 0;
      this.currIdx = -1;
    }
    set input(chunkFPAJGGOCParam690) {
      if (this.selfAnalysisDone !== true)
        throw Error(
          "Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.",
        );
      this.reset();
      this.tokVector = chunkFPAJGGOCParam690;
      this.tokVectorLength = chunkFPAJGGOCParam690.length;
    }
    get input() {
      return this.tokVector;
    }
    SKIP_TOKEN() {
      return this.currIdx <= this.tokVector.length - 2
        ? (this.consumeToken(), this.LA(1))
        : chunkFPAJGGOCValue169;
    }
    LA(chunkFPAJGGOCParam1338) {
      let chunkFPAJGGOCValue1626 = this.currIdx + chunkFPAJGGOCParam1338;
      return chunkFPAJGGOCValue1626 < 0 ||
        this.tokVectorLength <= chunkFPAJGGOCValue1626
        ? chunkFPAJGGOCValue169
        : this.tokVector[chunkFPAJGGOCValue1626];
    }
    consumeToken() {
      this.currIdx++;
    }
    exportLexerState() {
      return this.currIdx;
    }
    importLexerState(chunkFPAJGGOCParam1987) {
      this.currIdx = chunkFPAJGGOCParam1987;
    }
    resetLexerState() {
      this.currIdx = -1;
    }
    moveToTerminatedState() {
      this.currIdx = this.tokVector.length - 1;
    }
    getLexerPosition() {
      return this.exportLexerState();
    }
  },
  chunkFPAJGGOCValue158 = class {
    ACTION(chunkFPAJGGOCParam2102) {
      return chunkFPAJGGOCParam2102.call(this);
    }
    consume(
      chunkFPAJGGOCParam1746,
      chunkFPAJGGOCParam1747,
      chunkFPAJGGOCParam1748,
    ) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1747,
        chunkFPAJGGOCParam1746,
        chunkFPAJGGOCParam1748,
      );
    }
    subrule(
      chunkFPAJGGOCParam1749,
      chunkFPAJGGOCParam1750,
      chunkFPAJGGOCParam1751,
    ) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1750,
        chunkFPAJGGOCParam1749,
        chunkFPAJGGOCParam1751,
      );
    }
    option(chunkFPAJGGOCParam1874, chunkFPAJGGOCParam1875) {
      return this.optionInternal(
        chunkFPAJGGOCParam1875,
        chunkFPAJGGOCParam1874,
      );
    }
    or(chunkFPAJGGOCParam1970, chunkFPAJGGOCParam1971) {
      return this.orInternal(chunkFPAJGGOCParam1971, chunkFPAJGGOCParam1970);
    }
    many(chunkFPAJGGOCParam1929, chunkFPAJGGOCParam1930) {
      return this.manyInternal(chunkFPAJGGOCParam1929, chunkFPAJGGOCParam1930);
    }
    atLeastOne(chunkFPAJGGOCParam1752, chunkFPAJGGOCParam1753) {
      return this.atLeastOneInternal(
        chunkFPAJGGOCParam1752,
        chunkFPAJGGOCParam1753,
      );
    }
    CONSUME(chunkFPAJGGOCParam1816, chunkFPAJGGOCParam1817) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1816,
        0,
        chunkFPAJGGOCParam1817,
      );
    }
    CONSUME1(chunkFPAJGGOCParam1773, chunkFPAJGGOCParam1774) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1773,
        1,
        chunkFPAJGGOCParam1774,
      );
    }
    CONSUME2(chunkFPAJGGOCParam1775, chunkFPAJGGOCParam1776) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1775,
        2,
        chunkFPAJGGOCParam1776,
      );
    }
    CONSUME3(chunkFPAJGGOCParam1777, chunkFPAJGGOCParam1778) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1777,
        3,
        chunkFPAJGGOCParam1778,
      );
    }
    CONSUME4(chunkFPAJGGOCParam1779, chunkFPAJGGOCParam1780) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1779,
        4,
        chunkFPAJGGOCParam1780,
      );
    }
    CONSUME5(chunkFPAJGGOCParam1781, chunkFPAJGGOCParam1782) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1781,
        5,
        chunkFPAJGGOCParam1782,
      );
    }
    CONSUME6(chunkFPAJGGOCParam1783, chunkFPAJGGOCParam1784) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1783,
        6,
        chunkFPAJGGOCParam1784,
      );
    }
    CONSUME7(chunkFPAJGGOCParam1785, chunkFPAJGGOCParam1786) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1785,
        7,
        chunkFPAJGGOCParam1786,
      );
    }
    CONSUME8(chunkFPAJGGOCParam1787, chunkFPAJGGOCParam1788) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1787,
        8,
        chunkFPAJGGOCParam1788,
      );
    }
    CONSUME9(chunkFPAJGGOCParam1789, chunkFPAJGGOCParam1790) {
      return this.consumeInternal(
        chunkFPAJGGOCParam1789,
        9,
        chunkFPAJGGOCParam1790,
      );
    }
    SUBRULE(chunkFPAJGGOCParam1818, chunkFPAJGGOCParam1819) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1818,
        0,
        chunkFPAJGGOCParam1819,
      );
    }
    SUBRULE1(chunkFPAJGGOCParam1791, chunkFPAJGGOCParam1792) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1791,
        1,
        chunkFPAJGGOCParam1792,
      );
    }
    SUBRULE2(chunkFPAJGGOCParam1793, chunkFPAJGGOCParam1794) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1793,
        2,
        chunkFPAJGGOCParam1794,
      );
    }
    SUBRULE3(chunkFPAJGGOCParam1795, chunkFPAJGGOCParam1796) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1795,
        3,
        chunkFPAJGGOCParam1796,
      );
    }
    SUBRULE4(chunkFPAJGGOCParam1797, chunkFPAJGGOCParam1798) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1797,
        4,
        chunkFPAJGGOCParam1798,
      );
    }
    SUBRULE5(chunkFPAJGGOCParam1799, chunkFPAJGGOCParam1800) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1799,
        5,
        chunkFPAJGGOCParam1800,
      );
    }
    SUBRULE6(chunkFPAJGGOCParam1801, chunkFPAJGGOCParam1802) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1801,
        6,
        chunkFPAJGGOCParam1802,
      );
    }
    SUBRULE7(chunkFPAJGGOCParam1803, chunkFPAJGGOCParam1804) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1803,
        7,
        chunkFPAJGGOCParam1804,
      );
    }
    SUBRULE8(chunkFPAJGGOCParam1805, chunkFPAJGGOCParam1806) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1805,
        8,
        chunkFPAJGGOCParam1806,
      );
    }
    SUBRULE9(chunkFPAJGGOCParam1807, chunkFPAJGGOCParam1808) {
      return this.subruleInternal(
        chunkFPAJGGOCParam1807,
        9,
        chunkFPAJGGOCParam1808,
      );
    }
    OPTION(chunkFPAJGGOCParam1922) {
      return this.optionInternal(chunkFPAJGGOCParam1922, 0);
    }
    OPTION1(chunkFPAJGGOCParam1902) {
      return this.optionInternal(chunkFPAJGGOCParam1902, 1);
    }
    OPTION2(chunkFPAJGGOCParam1903) {
      return this.optionInternal(chunkFPAJGGOCParam1903, 2);
    }
    OPTION3(chunkFPAJGGOCParam1904) {
      return this.optionInternal(chunkFPAJGGOCParam1904, 3);
    }
    OPTION4(chunkFPAJGGOCParam1905) {
      return this.optionInternal(chunkFPAJGGOCParam1905, 4);
    }
    OPTION5(chunkFPAJGGOCParam1906) {
      return this.optionInternal(chunkFPAJGGOCParam1906, 5);
    }
    OPTION6(chunkFPAJGGOCParam1907) {
      return this.optionInternal(chunkFPAJGGOCParam1907, 6);
    }
    OPTION7(chunkFPAJGGOCParam1908) {
      return this.optionInternal(chunkFPAJGGOCParam1908, 7);
    }
    OPTION8(chunkFPAJGGOCParam1909) {
      return this.optionInternal(chunkFPAJGGOCParam1909, 8);
    }
    OPTION9(chunkFPAJGGOCParam1910) {
      return this.optionInternal(chunkFPAJGGOCParam1910, 9);
    }
    OR(chunkFPAJGGOCParam2011) {
      return this.orInternal(chunkFPAJGGOCParam2011, 0);
    }
    OR1(chunkFPAJGGOCParam1995) {
      return this.orInternal(chunkFPAJGGOCParam1995, 1);
    }
    OR2(chunkFPAJGGOCParam1996) {
      return this.orInternal(chunkFPAJGGOCParam1996, 2);
    }
    OR3(chunkFPAJGGOCParam1997) {
      return this.orInternal(chunkFPAJGGOCParam1997, 3);
    }
    OR4(chunkFPAJGGOCParam1998) {
      return this.orInternal(chunkFPAJGGOCParam1998, 4);
    }
    OR5(chunkFPAJGGOCParam1999) {
      return this.orInternal(chunkFPAJGGOCParam1999, 5);
    }
    OR6(chunkFPAJGGOCParam2000) {
      return this.orInternal(chunkFPAJGGOCParam2000, 6);
    }
    OR7(chunkFPAJGGOCParam2001) {
      return this.orInternal(chunkFPAJGGOCParam2001, 7);
    }
    OR8(chunkFPAJGGOCParam2002) {
      return this.orInternal(chunkFPAJGGOCParam2002, 8);
    }
    OR9(chunkFPAJGGOCParam2003) {
      return this.orInternal(chunkFPAJGGOCParam2003, 9);
    }
    MANY(chunkFPAJGGOCParam2089) {
      this.manyInternal(0, chunkFPAJGGOCParam2089);
    }
    MANY1(chunkFPAJGGOCParam2070) {
      this.manyInternal(1, chunkFPAJGGOCParam2070);
    }
    MANY2(chunkFPAJGGOCParam2071) {
      this.manyInternal(2, chunkFPAJGGOCParam2071);
    }
    MANY3(chunkFPAJGGOCParam2072) {
      this.manyInternal(3, chunkFPAJGGOCParam2072);
    }
    MANY4(chunkFPAJGGOCParam2073) {
      this.manyInternal(4, chunkFPAJGGOCParam2073);
    }
    MANY5(chunkFPAJGGOCParam2074) {
      this.manyInternal(5, chunkFPAJGGOCParam2074);
    }
    MANY6(chunkFPAJGGOCParam2075) {
      this.manyInternal(6, chunkFPAJGGOCParam2075);
    }
    MANY7(chunkFPAJGGOCParam2076) {
      this.manyInternal(7, chunkFPAJGGOCParam2076);
    }
    MANY8(chunkFPAJGGOCParam2077) {
      this.manyInternal(8, chunkFPAJGGOCParam2077);
    }
    MANY9(chunkFPAJGGOCParam2078) {
      this.manyInternal(9, chunkFPAJGGOCParam2078);
    }
    MANY_SEP(chunkFPAJGGOCParam1911) {
      this.manySepFirstInternal(0, chunkFPAJGGOCParam1911);
    }
    MANY_SEP1(chunkFPAJGGOCParam1884) {
      this.manySepFirstInternal(1, chunkFPAJGGOCParam1884);
    }
    MANY_SEP2(chunkFPAJGGOCParam1885) {
      this.manySepFirstInternal(2, chunkFPAJGGOCParam1885);
    }
    MANY_SEP3(chunkFPAJGGOCParam1886) {
      this.manySepFirstInternal(3, chunkFPAJGGOCParam1886);
    }
    MANY_SEP4(chunkFPAJGGOCParam1887) {
      this.manySepFirstInternal(4, chunkFPAJGGOCParam1887);
    }
    MANY_SEP5(chunkFPAJGGOCParam1888) {
      this.manySepFirstInternal(5, chunkFPAJGGOCParam1888);
    }
    MANY_SEP6(chunkFPAJGGOCParam1889) {
      this.manySepFirstInternal(6, chunkFPAJGGOCParam1889);
    }
    MANY_SEP7(chunkFPAJGGOCParam1890) {
      this.manySepFirstInternal(7, chunkFPAJGGOCParam1890);
    }
    MANY_SEP8(chunkFPAJGGOCParam1891) {
      this.manySepFirstInternal(8, chunkFPAJGGOCParam1891);
    }
    MANY_SEP9(chunkFPAJGGOCParam1892) {
      this.manySepFirstInternal(9, chunkFPAJGGOCParam1892);
    }
    AT_LEAST_ONE(chunkFPAJGGOCParam1876) {
      this.atLeastOneInternal(0, chunkFPAJGGOCParam1876);
    }
    AT_LEAST_ONE1(chunkFPAJGGOCParam1754) {
      return this.atLeastOneInternal(1, chunkFPAJGGOCParam1754);
    }
    AT_LEAST_ONE2(chunkFPAJGGOCParam1855) {
      this.atLeastOneInternal(2, chunkFPAJGGOCParam1855);
    }
    AT_LEAST_ONE3(chunkFPAJGGOCParam1856) {
      this.atLeastOneInternal(3, chunkFPAJGGOCParam1856);
    }
    AT_LEAST_ONE4(chunkFPAJGGOCParam1857) {
      this.atLeastOneInternal(4, chunkFPAJGGOCParam1857);
    }
    AT_LEAST_ONE5(chunkFPAJGGOCParam1858) {
      this.atLeastOneInternal(5, chunkFPAJGGOCParam1858);
    }
    AT_LEAST_ONE6(chunkFPAJGGOCParam1859) {
      this.atLeastOneInternal(6, chunkFPAJGGOCParam1859);
    }
    AT_LEAST_ONE7(chunkFPAJGGOCParam1860) {
      this.atLeastOneInternal(7, chunkFPAJGGOCParam1860);
    }
    AT_LEAST_ONE8(chunkFPAJGGOCParam1861) {
      this.atLeastOneInternal(8, chunkFPAJGGOCParam1861);
    }
    AT_LEAST_ONE9(chunkFPAJGGOCParam1862) {
      this.atLeastOneInternal(9, chunkFPAJGGOCParam1862);
    }
    AT_LEAST_ONE_SEP(chunkFPAJGGOCParam1688) {
      this.atLeastOneSepFirstInternal(0, chunkFPAJGGOCParam1688);
    }
    AT_LEAST_ONE_SEP1(chunkFPAJGGOCParam1671) {
      this.atLeastOneSepFirstInternal(1, chunkFPAJGGOCParam1671);
    }
    AT_LEAST_ONE_SEP2(chunkFPAJGGOCParam1672) {
      this.atLeastOneSepFirstInternal(2, chunkFPAJGGOCParam1672);
    }
    AT_LEAST_ONE_SEP3(chunkFPAJGGOCParam1673) {
      this.atLeastOneSepFirstInternal(3, chunkFPAJGGOCParam1673);
    }
    AT_LEAST_ONE_SEP4(chunkFPAJGGOCParam1674) {
      this.atLeastOneSepFirstInternal(4, chunkFPAJGGOCParam1674);
    }
    AT_LEAST_ONE_SEP5(chunkFPAJGGOCParam1675) {
      this.atLeastOneSepFirstInternal(5, chunkFPAJGGOCParam1675);
    }
    AT_LEAST_ONE_SEP6(chunkFPAJGGOCParam1676) {
      this.atLeastOneSepFirstInternal(6, chunkFPAJGGOCParam1676);
    }
    AT_LEAST_ONE_SEP7(chunkFPAJGGOCParam1677) {
      this.atLeastOneSepFirstInternal(7, chunkFPAJGGOCParam1677);
    }
    AT_LEAST_ONE_SEP8(chunkFPAJGGOCParam1678) {
      this.atLeastOneSepFirstInternal(8, chunkFPAJGGOCParam1678);
    }
    AT_LEAST_ONE_SEP9(chunkFPAJGGOCParam1679) {
      this.atLeastOneSepFirstInternal(9, chunkFPAJGGOCParam1679);
    }
    RULE(
      chunkFPAJGGOCParam374,
      chunkFPAJGGOCParam375,
      chunkFPAJGGOCParam376 = chunkFPAJGGOCValue171,
    ) {
      if (
        chunkFPAJGGOCHelper112(this.definedRulesNames, chunkFPAJGGOCParam374)
      ) {
        let chunkFPAJGGOCValue1080 = {
          message: chunkFPAJGGOCValue121.buildDuplicateRuleNameError({
            topLevelRule: chunkFPAJGGOCParam374,
            grammarName: this.className,
          }),
          type: chunkFPAJGGOCValue172.DUPLICATE_RULE_NAME,
          ruleName: chunkFPAJGGOCParam374,
        };
        this.definitionErrors.push(chunkFPAJGGOCValue1080);
      }
      this.definedRulesNames.push(chunkFPAJGGOCParam374);
      let chunkFPAJGGOCValue796 = this.defineRule(
        chunkFPAJGGOCParam374,
        chunkFPAJGGOCParam375,
        chunkFPAJGGOCParam376,
      );
      return (
        (this[chunkFPAJGGOCParam374] = chunkFPAJGGOCValue796),
        chunkFPAJGGOCValue796
      );
    }
    OVERRIDE_RULE(
      chunkFPAJGGOCParam791,
      chunkFPAJGGOCParam792,
      chunkFPAJGGOCParam793 = chunkFPAJGGOCValue171,
    ) {
      let chunkFPAJGGOCValue1202 = chunkFPAJGGOCHelper212(
        chunkFPAJGGOCParam791,
        this.definedRulesNames,
        this.className,
      );
      this.definitionErrors = this.definitionErrors.concat(
        chunkFPAJGGOCValue1202,
      );
      let chunkFPAJGGOCValue1203 = this.defineRule(
        chunkFPAJGGOCParam791,
        chunkFPAJGGOCParam792,
        chunkFPAJGGOCParam793,
      );
      return (
        (this[chunkFPAJGGOCParam791] = chunkFPAJGGOCValue1203),
        chunkFPAJGGOCValue1203
      );
    }
    BACKTRACK(chunkFPAJGGOCParam478, chunkFPAJGGOCParam479) {
      return function () {
        this.isBackTrackingStack.push(1);
        let chunkFPAJGGOCValue967 = this.saveRecogState();
        try {
          return (
            chunkFPAJGGOCParam478.apply(this, chunkFPAJGGOCParam479),
            true
          );
        } catch (chunkFPAJGGOCValue1806) {
          if (chunkFPAJGGOCHelper223(chunkFPAJGGOCValue1806)) return false;
          throw chunkFPAJGGOCValue1806;
        } finally {
          this.reloadRecogState(chunkFPAJGGOCValue967);
          this.isBackTrackingStack.pop();
        }
      };
    }
    getGAstProductions() {
      return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
      return chunkFPAJGGOCHelper125(baseUniqI(this.gastProductionsCache));
    }
  },
  chunkFPAJGGOCValue159 = class {
    initRecognizerEngine(chunkFPAJGGOCParam18, chunkFPAJGGOCParam19) {
      if (
        ((this.className = this.constructor.name),
        (this.shortRuleNameToFull = {}),
        (this.fullRuleNameToShort = {}),
        (this.ruleShortNameIdx = 256),
        (this.tokenMatcher = chunkFPAJGGOCHelper176),
        (this.subruleIdx = 0),
        (this.definedRulesNames = []),
        (this.tokensMap = {}),
        (this.isBackTrackingStack = []),
        (this.RULE_STACK = []),
        (this.RULE_OCCURRENCE_STACK = []),
        (this.gastProductionsCache = {}),
        basePickByR(chunkFPAJGGOCParam19, "serializedGrammar"))
      )
        throw Error(
          "The Parser's configuration can no longer contain a <serializedGrammar> property.\n\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n\tFor Further details.",
        );
      if (isArrayLikeObjectV(chunkFPAJGGOCParam18)) {
        if (isEmptyT(chunkFPAJGGOCParam18))
          throw Error(
            "A Token Vocabulary cannot be empty.\n\tNote that the first argument for the parser constructor\n\tis no longer a Token vector (since v4.0).",
          );
        if (typeof chunkFPAJGGOCParam18[0].startOffset == "number")
          throw Error(
            "The Parser constructor no longer accepts a token vector as the first argument.\n\tSee: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n\tFor Further details.",
          );
      }
      if (isArrayLikeObjectV(chunkFPAJGGOCParam18))
        this.tokensMap = baseUniqN(
          chunkFPAJGGOCParam18,
          (chunkFPAJGGOCParam2172, chunkFPAJGGOCParam2173) => (
            (chunkFPAJGGOCParam2172[chunkFPAJGGOCParam2173.name] =
              chunkFPAJGGOCParam2173),
            chunkFPAJGGOCParam2172
          ),
          {},
        );
      else if (
        basePickByR(chunkFPAJGGOCParam18, "modes") &&
        chunkFPAJGGOCHelper109(
          basePickByL(baseUniqI(chunkFPAJGGOCParam18.modes)),
          chunkFPAJGGOCHelper184,
        )
      )
        this.tokensMap = baseUniqN(
          chunkFPAJGGOCHelper118(
            basePickByL(baseUniqI(chunkFPAJGGOCParam18.modes)),
          ),
          (chunkFPAJGGOCParam2174, chunkFPAJGGOCParam2175) => (
            (chunkFPAJGGOCParam2174[chunkFPAJGGOCParam2175.name] =
              chunkFPAJGGOCParam2175),
            chunkFPAJGGOCParam2174
          ),
          {},
        );
      else if (isArrayLikeObjectB(chunkFPAJGGOCParam18))
        this.tokensMap = clone(chunkFPAJGGOCParam18);
      else
        throw Error(
          "<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition",
        );
      this.tokensMap.EOF = chunkFPAJGGOCValue118;
      this.tokenMatcher = chunkFPAJGGOCHelper109(
        basePickByR(chunkFPAJGGOCParam18, "modes")
          ? basePickByL(baseUniqI(chunkFPAJGGOCParam18.modes))
          : baseUniqI(chunkFPAJGGOCParam18),
        (chunkFPAJGGOCParam2146) =>
          isEmptyT(chunkFPAJGGOCParam2146.categoryMatches),
      )
        ? chunkFPAJGGOCHelper176
        : chunkFPAJGGOCHelper175;
      chunkFPAJGGOCHelper177(baseUniqI(this.tokensMap));
    }
    defineRule(
      chunkFPAJGGOCParam26,
      chunkFPAJGGOCParam27,
      chunkFPAJGGOCParam28,
    ) {
      if (this.selfAnalysisDone)
        throw Error(
          `Grammar rule <${chunkFPAJGGOCParam26}> may not be defined after the 'performSelfAnalysis' method has been called'\nMake sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`,
        );
      let chunkFPAJGGOCValue419 = basePickByR(
          chunkFPAJGGOCParam28,
          "resyncEnabled",
        )
          ? chunkFPAJGGOCParam28.resyncEnabled
          : chunkFPAJGGOCValue171.resyncEnabled,
        chunkFPAJGGOCValue420 = basePickByR(
          chunkFPAJGGOCParam28,
          "recoveryValueFunc",
        )
          ? chunkFPAJGGOCParam28.recoveryValueFunc
          : chunkFPAJGGOCValue171.recoveryValueFunc,
        chunkFPAJGGOCValue421 = this.ruleShortNameIdx << 12;
      this.ruleShortNameIdx++;
      this.shortRuleNameToFull[chunkFPAJGGOCValue421] = chunkFPAJGGOCParam26;
      this.fullRuleNameToShort[chunkFPAJGGOCParam26] = chunkFPAJGGOCValue421;
      let chunkFPAJGGOCValue422;
      return (
        (chunkFPAJGGOCValue422 =
          this.outputCst === true
            ? function (...chunkFPAJGGOCParam351) {
                try {
                  this.ruleInvocationStateUpdate(
                    chunkFPAJGGOCValue421,
                    chunkFPAJGGOCParam26,
                    this.subruleIdx,
                  );
                  chunkFPAJGGOCParam27.apply(this, chunkFPAJGGOCParam351);
                  let chunkFPAJGGOCValue1150 =
                    this.CST_STACK[this.CST_STACK.length - 1];
                  return (
                    this.cstPostRule(chunkFPAJGGOCValue1150),
                    chunkFPAJGGOCValue1150
                  );
                } catch (chunkFPAJGGOCValue1757) {
                  return this.invokeRuleCatch(
                    chunkFPAJGGOCValue1757,
                    chunkFPAJGGOCValue419,
                    chunkFPAJGGOCValue420,
                  );
                } finally {
                  this.ruleFinallyStateUpdate();
                }
              }
            : function (...chunkFPAJGGOCParam442) {
                try {
                  return (
                    this.ruleInvocationStateUpdate(
                      chunkFPAJGGOCValue421,
                      chunkFPAJGGOCParam26,
                      this.subruleIdx,
                    ),
                    chunkFPAJGGOCParam27.apply(this, chunkFPAJGGOCParam442)
                  );
                } catch (chunkFPAJGGOCValue1758) {
                  return this.invokeRuleCatch(
                    chunkFPAJGGOCValue1758,
                    chunkFPAJGGOCValue419,
                    chunkFPAJGGOCValue420,
                  );
                } finally {
                  this.ruleFinallyStateUpdate();
                }
              }),
        Object.assign(chunkFPAJGGOCValue422, {
          ruleName: chunkFPAJGGOCParam26,
          originalGrammarAction: chunkFPAJGGOCParam27,
        })
      );
    }
    invokeRuleCatch(
      chunkFPAJGGOCParam133,
      chunkFPAJGGOCParam134,
      chunkFPAJGGOCParam135,
    ) {
      let chunkFPAJGGOCValue538 = this.RULE_STACK.length === 1,
        chunkFPAJGGOCValue539 =
          chunkFPAJGGOCParam134 &&
          !this.isBackTracking() &&
          this.recoveryEnabled;
      if (chunkFPAJGGOCHelper223(chunkFPAJGGOCParam133)) {
        let chunkFPAJGGOCValue594 = chunkFPAJGGOCParam133;
        if (chunkFPAJGGOCValue539) {
          let chunkFPAJGGOCValue687 = this.findReSyncTokenType();
          if (this.isInCurrentRuleReSyncSet(chunkFPAJGGOCValue687)) {
            if (
              ((chunkFPAJGGOCValue594.resyncedTokens = this.reSyncTo(
                chunkFPAJGGOCValue687,
              )),
              this.outputCst)
            ) {
              let chunkFPAJGGOCValue1573 =
                this.CST_STACK[this.CST_STACK.length - 1];
              return (
                (chunkFPAJGGOCValue1573.recoveredNode = true),
                chunkFPAJGGOCValue1573
              );
            } else return chunkFPAJGGOCParam135(chunkFPAJGGOCParam133);
          } else {
            if (this.outputCst) {
              let chunkFPAJGGOCValue1516 =
                this.CST_STACK[this.CST_STACK.length - 1];
              chunkFPAJGGOCValue1516.recoveredNode = true;
              chunkFPAJGGOCValue594.partialCstResult = chunkFPAJGGOCValue1516;
            }
            throw chunkFPAJGGOCValue594;
          }
        } else if (chunkFPAJGGOCValue538)
          return (
            this.moveToTerminatedState(),
            chunkFPAJGGOCParam135(chunkFPAJGGOCParam133)
          );
        else throw chunkFPAJGGOCValue594;
      } else throw chunkFPAJGGOCParam133;
    }
    optionInternal(chunkFPAJGGOCParam1278, chunkFPAJGGOCParam1279) {
      let chunkFPAJGGOCValue1564 = this.getKeyForAutomaticLookahead(
        512,
        chunkFPAJGGOCParam1279,
      );
      return this.optionInternalLogic(
        chunkFPAJGGOCParam1278,
        chunkFPAJGGOCParam1279,
        chunkFPAJGGOCValue1564,
      );
    }
    optionInternalLogic(
      chunkFPAJGGOCParam502,
      chunkFPAJGGOCParam503,
      chunkFPAJGGOCParam504,
    ) {
      let chunkFPAJGGOCValue930 = this.getLaFuncFromCache(
          chunkFPAJGGOCParam504,
        ),
        chunkFPAJGGOCValue931;
      if (typeof chunkFPAJGGOCParam502 != "function") {
        chunkFPAJGGOCValue931 = chunkFPAJGGOCParam502.DEF;
        let chunkFPAJGGOCValue1460 = chunkFPAJGGOCParam502.GATE;
        if (chunkFPAJGGOCValue1460 !== undefined) {
          let chunkFPAJGGOCValue1775 = chunkFPAJGGOCValue930;
          chunkFPAJGGOCValue930 = () =>
            chunkFPAJGGOCValue1460.call(this) &&
            chunkFPAJGGOCValue1775.call(this);
        }
      } else chunkFPAJGGOCValue931 = chunkFPAJGGOCParam502;
      if (chunkFPAJGGOCValue930.call(this) === true)
        return chunkFPAJGGOCValue931.call(this);
    }
    atLeastOneInternal(chunkFPAJGGOCParam1237, chunkFPAJGGOCParam1238) {
      let chunkFPAJGGOCValue1535 = this.getKeyForAutomaticLookahead(
        1024,
        chunkFPAJGGOCParam1237,
      );
      return this.atLeastOneInternalLogic(
        chunkFPAJGGOCParam1237,
        chunkFPAJGGOCParam1238,
        chunkFPAJGGOCValue1535,
      );
    }
    atLeastOneInternalLogic(
      chunkFPAJGGOCParam164,
      chunkFPAJGGOCParam165,
      chunkFPAJGGOCParam166,
    ) {
      let chunkFPAJGGOCValue574 = this.getLaFuncFromCache(
          chunkFPAJGGOCParam166,
        ),
        chunkFPAJGGOCValue575;
      if (typeof chunkFPAJGGOCParam165 != "function") {
        chunkFPAJGGOCValue575 = chunkFPAJGGOCParam165.DEF;
        let chunkFPAJGGOCValue1461 = chunkFPAJGGOCParam165.GATE;
        if (chunkFPAJGGOCValue1461 !== undefined) {
          let chunkFPAJGGOCValue1776 = chunkFPAJGGOCValue574;
          chunkFPAJGGOCValue574 = () =>
            chunkFPAJGGOCValue1461.call(this) &&
            chunkFPAJGGOCValue1776.call(this);
        }
      } else chunkFPAJGGOCValue575 = chunkFPAJGGOCParam165;
      if (chunkFPAJGGOCValue574.call(this) === true) {
        let chunkFPAJGGOCValue1522 = this.doSingleRepetition(
          chunkFPAJGGOCValue575,
        );
        for (
          ;
          chunkFPAJGGOCValue574.call(this) === true &&
          chunkFPAJGGOCValue1522 === true;

        )
          chunkFPAJGGOCValue1522 = this.doSingleRepetition(
            chunkFPAJGGOCValue575,
          );
      } else
        throw this.raiseEarlyExitException(
          chunkFPAJGGOCParam164,
          chunkFPAJGGOCValue130.REPETITION_MANDATORY,
          chunkFPAJGGOCParam165.ERR_MSG,
        );
      this.attemptInRepetitionRecovery(
        this.atLeastOneInternal,
        [chunkFPAJGGOCParam164, chunkFPAJGGOCParam165],
        chunkFPAJGGOCValue574,
        1024,
        chunkFPAJGGOCParam164,
        chunkFPAJGGOCValue128,
      );
    }
    atLeastOneSepFirstInternal(chunkFPAJGGOCParam1199, chunkFPAJGGOCParam1200) {
      let chunkFPAJGGOCValue1509 = this.getKeyForAutomaticLookahead(
        1536,
        chunkFPAJGGOCParam1199,
      );
      this.atLeastOneSepFirstInternalLogic(
        chunkFPAJGGOCParam1199,
        chunkFPAJGGOCParam1200,
        chunkFPAJGGOCValue1509,
      );
    }
    atLeastOneSepFirstInternalLogic(
      chunkFPAJGGOCParam199,
      chunkFPAJGGOCParam200,
      chunkFPAJGGOCParam201,
    ) {
      let chunkFPAJGGOCValue605 = chunkFPAJGGOCParam200.DEF,
        chunkFPAJGGOCValue606 = chunkFPAJGGOCParam200.SEP;
      if (this.getLaFuncFromCache(chunkFPAJGGOCParam201).call(this) === true) {
        chunkFPAJGGOCValue605.call(this);
        let chunkFPAJGGOCValue904 = () =>
          this.tokenMatcher(this.LA(1), chunkFPAJGGOCValue606);
        for (
          ;
          this.tokenMatcher(this.LA(1), chunkFPAJGGOCValue606) === true;

        ) {
          this.CONSUME(chunkFPAJGGOCValue606);
          chunkFPAJGGOCValue605.call(this);
        }
        this.attemptInRepetitionRecovery(
          this.repetitionSepSecondInternal,
          [
            chunkFPAJGGOCParam199,
            chunkFPAJGGOCValue606,
            chunkFPAJGGOCValue904,
            chunkFPAJGGOCValue605,
            chunkFPAJGGOCValue129,
          ],
          chunkFPAJGGOCValue904,
          1536,
          chunkFPAJGGOCParam199,
          chunkFPAJGGOCValue129,
        );
      } else
        throw this.raiseEarlyExitException(
          chunkFPAJGGOCParam199,
          chunkFPAJGGOCValue130.REPETITION_MANDATORY_WITH_SEPARATOR,
          chunkFPAJGGOCParam200.ERR_MSG,
        );
    }
    manyInternal(chunkFPAJGGOCParam1300, chunkFPAJGGOCParam1301) {
      let chunkFPAJGGOCValue1588 = this.getKeyForAutomaticLookahead(
        768,
        chunkFPAJGGOCParam1300,
      );
      return this.manyInternalLogic(
        chunkFPAJGGOCParam1300,
        chunkFPAJGGOCParam1301,
        chunkFPAJGGOCValue1588,
      );
    }
    manyInternalLogic(
      chunkFPAJGGOCParam270,
      chunkFPAJGGOCParam271,
      chunkFPAJGGOCParam272,
    ) {
      let chunkFPAJGGOCValue696 = this.getLaFuncFromCache(
          chunkFPAJGGOCParam272,
        ),
        chunkFPAJGGOCValue697;
      if (typeof chunkFPAJGGOCParam271 != "function") {
        chunkFPAJGGOCValue697 = chunkFPAJGGOCParam271.DEF;
        let chunkFPAJGGOCValue1462 = chunkFPAJGGOCParam271.GATE;
        if (chunkFPAJGGOCValue1462 !== undefined) {
          let chunkFPAJGGOCValue1777 = chunkFPAJGGOCValue696;
          chunkFPAJGGOCValue696 = () =>
            chunkFPAJGGOCValue1462.call(this) &&
            chunkFPAJGGOCValue1777.call(this);
        }
      } else chunkFPAJGGOCValue697 = chunkFPAJGGOCParam271;
      let chunkFPAJGGOCValue698 = true;
      for (
        ;
        chunkFPAJGGOCValue696.call(this) === true &&
        chunkFPAJGGOCValue698 === true;

      )
        chunkFPAJGGOCValue698 = this.doSingleRepetition(chunkFPAJGGOCValue697);
      this.attemptInRepetitionRecovery(
        this.manyInternal,
        [chunkFPAJGGOCParam270, chunkFPAJGGOCParam271],
        chunkFPAJGGOCValue696,
        768,
        chunkFPAJGGOCParam270,
        chunkFPAJGGOCValue126,
        chunkFPAJGGOCValue698,
      );
    }
    manySepFirstInternal(chunkFPAJGGOCParam1263, chunkFPAJGGOCParam1264) {
      let chunkFPAJGGOCValue1547 = this.getKeyForAutomaticLookahead(
        1280,
        chunkFPAJGGOCParam1263,
      );
      this.manySepFirstInternalLogic(
        chunkFPAJGGOCParam1263,
        chunkFPAJGGOCParam1264,
        chunkFPAJGGOCValue1547,
      );
    }
    manySepFirstInternalLogic(
      chunkFPAJGGOCParam310,
      chunkFPAJGGOCParam311,
      chunkFPAJGGOCParam312,
    ) {
      let chunkFPAJGGOCValue745 = chunkFPAJGGOCParam311.DEF,
        chunkFPAJGGOCValue746 = chunkFPAJGGOCParam311.SEP;
      if (this.getLaFuncFromCache(chunkFPAJGGOCParam312).call(this) === true) {
        chunkFPAJGGOCValue745.call(this);
        let chunkFPAJGGOCValue905 = () =>
          this.tokenMatcher(this.LA(1), chunkFPAJGGOCValue746);
        for (
          ;
          this.tokenMatcher(this.LA(1), chunkFPAJGGOCValue746) === true;

        ) {
          this.CONSUME(chunkFPAJGGOCValue746);
          chunkFPAJGGOCValue745.call(this);
        }
        this.attemptInRepetitionRecovery(
          this.repetitionSepSecondInternal,
          [
            chunkFPAJGGOCParam310,
            chunkFPAJGGOCValue746,
            chunkFPAJGGOCValue905,
            chunkFPAJGGOCValue745,
            chunkFPAJGGOCValue127,
          ],
          chunkFPAJGGOCValue905,
          1280,
          chunkFPAJGGOCParam310,
          chunkFPAJGGOCValue127,
        );
      }
    }
    repetitionSepSecondInternal(
      chunkFPAJGGOCParam697,
      chunkFPAJGGOCParam698,
      chunkFPAJGGOCParam699,
      chunkFPAJGGOCParam700,
      chunkFPAJGGOCParam701,
    ) {
      for (; chunkFPAJGGOCParam699(); ) {
        this.CONSUME(chunkFPAJGGOCParam698);
        chunkFPAJGGOCParam700.call(this);
      }
      this.attemptInRepetitionRecovery(
        this.repetitionSepSecondInternal,
        [
          chunkFPAJGGOCParam697,
          chunkFPAJGGOCParam698,
          chunkFPAJGGOCParam699,
          chunkFPAJGGOCParam700,
          chunkFPAJGGOCParam701,
        ],
        chunkFPAJGGOCParam699,
        1536,
        chunkFPAJGGOCParam697,
        chunkFPAJGGOCParam701,
      );
    }
    doSingleRepetition(chunkFPAJGGOCParam1312) {
      let chunkFPAJGGOCValue1594 = this.getLexerPosition();
      return (
        chunkFPAJGGOCParam1312.call(this),
        this.getLexerPosition() > chunkFPAJGGOCValue1594
      );
    }
    orInternal(chunkFPAJGGOCParam705, chunkFPAJGGOCParam706) {
      let chunkFPAJGGOCValue1109 = this.getKeyForAutomaticLookahead(
          256,
          chunkFPAJGGOCParam706,
        ),
        chunkFPAJGGOCValue1110 = isArrayLikeObjectV(chunkFPAJGGOCParam705)
          ? chunkFPAJGGOCParam705
          : chunkFPAJGGOCParam705.DEF,
        chunkFPAJGGOCValue1111 = this.getLaFuncFromCache(
          chunkFPAJGGOCValue1109,
        ).call(this, chunkFPAJGGOCValue1110);
      if (chunkFPAJGGOCValue1111 !== undefined)
        return chunkFPAJGGOCValue1110[chunkFPAJGGOCValue1111].ALT.call(this);
      this.raiseNoAltException(
        chunkFPAJGGOCParam706,
        chunkFPAJGGOCParam705.ERR_MSG,
      );
    }
    ruleFinallyStateUpdate() {
      if (
        (this.RULE_STACK.pop(),
        this.RULE_OCCURRENCE_STACK.pop(),
        this.cstFinallyStateUpdate(),
        this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false)
      ) {
        let chunkFPAJGGOCValue1174 = this.LA(1),
          chunkFPAJGGOCValue1175 =
            this.errorMessageProvider.buildNotAllInputParsedMessage({
              firstRedundant: chunkFPAJGGOCValue1174,
              ruleName: this.getCurrRuleFullName(),
            });
        this.SAVE_ERROR(
          new chunkFPAJGGOCValue142(
            chunkFPAJGGOCValue1175,
            chunkFPAJGGOCValue1174,
          ),
        );
      }
    }
    subruleInternal(
      chunkFPAJGGOCParam397,
      chunkFPAJGGOCParam398,
      chunkFPAJGGOCParam399,
    ) {
      let chunkFPAJGGOCValue811;
      try {
        let chunkFPAJGGOCValue1034 =
          chunkFPAJGGOCParam399 === undefined
            ? undefined
            : chunkFPAJGGOCParam399.ARGS;
        return (
          (this.subruleIdx = chunkFPAJGGOCParam398),
          (chunkFPAJGGOCValue811 = chunkFPAJGGOCParam397.apply(
            this,
            chunkFPAJGGOCValue1034,
          )),
          this.cstPostNonTerminal(
            chunkFPAJGGOCValue811,
            chunkFPAJGGOCParam399 !== undefined &&
              chunkFPAJGGOCParam399.LABEL !== undefined
              ? chunkFPAJGGOCParam399.LABEL
              : chunkFPAJGGOCParam397.ruleName,
          ),
          chunkFPAJGGOCValue811
        );
      } catch (chunkFPAJGGOCValue1791) {
        throw this.subruleInternalError(
          chunkFPAJGGOCValue1791,
          chunkFPAJGGOCParam399,
          chunkFPAJGGOCParam397.ruleName,
        );
      }
    }
    subruleInternalError(
      chunkFPAJGGOCParam576,
      chunkFPAJGGOCParam577,
      chunkFPAJGGOCParam578,
    ) {
      throw (
        chunkFPAJGGOCHelper223(chunkFPAJGGOCParam576) &&
          chunkFPAJGGOCParam576.partialCstResult !== undefined &&
          (this.cstPostNonTerminal(
            chunkFPAJGGOCParam576.partialCstResult,
            chunkFPAJGGOCParam577 !== undefined &&
              chunkFPAJGGOCParam577.LABEL !== undefined
              ? chunkFPAJGGOCParam577.LABEL
              : chunkFPAJGGOCParam578,
          ),
          delete chunkFPAJGGOCParam576.partialCstResult),
        chunkFPAJGGOCParam576
      );
    }
    consumeInternal(
      chunkFPAJGGOCParam383,
      chunkFPAJGGOCParam384,
      chunkFPAJGGOCParam385,
    ) {
      let chunkFPAJGGOCValue799;
      try {
        let chunkFPAJGGOCValue1426 = this.LA(1);
        this.tokenMatcher(chunkFPAJGGOCValue1426, chunkFPAJGGOCParam383) ===
        true
          ? (this.consumeToken(),
            (chunkFPAJGGOCValue799 = chunkFPAJGGOCValue1426))
          : this.consumeInternalError(
              chunkFPAJGGOCParam383,
              chunkFPAJGGOCValue1426,
              chunkFPAJGGOCParam385,
            );
      } catch (chunkFPAJGGOCValue1818) {
        chunkFPAJGGOCValue799 = this.consumeInternalRecovery(
          chunkFPAJGGOCParam383,
          chunkFPAJGGOCParam384,
          chunkFPAJGGOCValue1818,
        );
      }
      return (
        this.cstPostTerminal(
          chunkFPAJGGOCParam385 !== undefined &&
            chunkFPAJGGOCParam385.LABEL !== undefined
            ? chunkFPAJGGOCParam385.LABEL
            : chunkFPAJGGOCParam383.name,
          chunkFPAJGGOCValue799,
        ),
        chunkFPAJGGOCValue799
      );
    }
    consumeInternalError(
      chunkFPAJGGOCParam393,
      chunkFPAJGGOCParam394,
      chunkFPAJGGOCParam395,
    ) {
      let chunkFPAJGGOCValue806,
        chunkFPAJGGOCValue807 = this.LA(0);
      throw (
        (chunkFPAJGGOCValue806 =
          chunkFPAJGGOCParam395 !== undefined && chunkFPAJGGOCParam395.ERR_MSG
            ? chunkFPAJGGOCParam395.ERR_MSG
            : this.errorMessageProvider.buildMismatchTokenMessage({
                expected: chunkFPAJGGOCParam393,
                actual: chunkFPAJGGOCParam394,
                previous: chunkFPAJGGOCValue807,
                ruleName: this.getCurrRuleFullName(),
              })),
        this.SAVE_ERROR(
          new chunkFPAJGGOCValue141(
            chunkFPAJGGOCValue806,
            chunkFPAJGGOCParam394,
            chunkFPAJGGOCValue807,
          ),
        )
      );
    }
    consumeInternalRecovery(
      chunkFPAJGGOCParam425,
      chunkFPAJGGOCParam426,
      chunkFPAJGGOCParam427,
    ) {
      if (
        this.recoveryEnabled &&
        chunkFPAJGGOCParam427.name === "MismatchedTokenException" &&
        !this.isBackTracking()
      ) {
        let chunkFPAJGGOCValue1248 = this.getFollowsForInRuleRecovery(
          chunkFPAJGGOCParam425,
          chunkFPAJGGOCParam426,
        );
        try {
          return this.tryInRuleRecovery(
            chunkFPAJGGOCParam425,
            chunkFPAJGGOCValue1248,
          );
        } catch (chunkFPAJGGOCValue1772) {
          throw chunkFPAJGGOCValue1772.name === "InRuleRecoveryException"
            ? chunkFPAJGGOCParam427
            : chunkFPAJGGOCValue1772;
        }
      } else throw chunkFPAJGGOCParam427;
    }
    saveRecogState() {
      let chunkFPAJGGOCValue1215 = this.errors,
        chunkFPAJGGOCValue1216 = clone(this.RULE_STACK);
      return {
        errors: chunkFPAJGGOCValue1215,
        lexerState: this.exportLexerState(),
        RULE_STACK: chunkFPAJGGOCValue1216,
        CST_STACK: this.CST_STACK,
      };
    }
    reloadRecogState(chunkFPAJGGOCParam1201) {
      this.errors = chunkFPAJGGOCParam1201.errors;
      this.importLexerState(chunkFPAJGGOCParam1201.lexerState);
      this.RULE_STACK = chunkFPAJGGOCParam1201.RULE_STACK;
    }
    ruleInvocationStateUpdate(
      chunkFPAJGGOCParam1120,
      chunkFPAJGGOCParam1121,
      chunkFPAJGGOCParam1122,
    ) {
      this.RULE_OCCURRENCE_STACK.push(chunkFPAJGGOCParam1122);
      this.RULE_STACK.push(chunkFPAJGGOCParam1120);
      this.cstInvocationStateUpdate(chunkFPAJGGOCParam1121);
    }
    isBackTracking() {
      return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
      let chunkFPAJGGOCValue1610 = this.getLastExplicitRuleShortName();
      return this.shortRuleNameToFull[chunkFPAJGGOCValue1610];
    }
    shortRuleNameToFullName(chunkFPAJGGOCParam1639) {
      return this.shortRuleNameToFull[chunkFPAJGGOCParam1639];
    }
    isAtEndOfInput() {
      return this.tokenMatcher(this.LA(1), chunkFPAJGGOCValue118);
    }
    reset() {
      this.resetLexerState();
      this.subruleIdx = 0;
      this.isBackTrackingStack = [];
      this.errors = [];
      this.RULE_STACK = [];
      this.CST_STACK = [];
      this.RULE_OCCURRENCE_STACK = [];
    }
  },
  chunkFPAJGGOCValue160 = class {
    initErrorHandler(chunkFPAJGGOCParam963) {
      this._errors = [];
      this.errorMessageProvider = basePickByR(
        chunkFPAJGGOCParam963,
        "errorMessageProvider",
      )
        ? chunkFPAJGGOCParam963.errorMessageProvider
        : chunkFPAJGGOCValue170.errorMessageProvider;
    }
    SAVE_ERROR(chunkFPAJGGOCParam477) {
      if (chunkFPAJGGOCHelper223(chunkFPAJGGOCParam477))
        return (
          (chunkFPAJGGOCParam477.context = {
            ruleStack: this.getHumanReadableRuleStack(),
            ruleOccurrenceStack: clone(this.RULE_OCCURRENCE_STACK),
          }),
          this._errors.push(chunkFPAJGGOCParam477),
          chunkFPAJGGOCParam477
        );
      throw Error(
        "Trying to save an Error which is not a RecognitionException",
      );
    }
    get errors() {
      return clone(this._errors);
    }
    set errors(chunkFPAJGGOCParam2093) {
      this._errors = chunkFPAJGGOCParam2093;
    }
    raiseEarlyExitException(
      chunkFPAJGGOCParam278,
      chunkFPAJGGOCParam279,
      chunkFPAJGGOCParam280,
    ) {
      let chunkFPAJGGOCValue705 = this.getCurrRuleFullName(),
        chunkFPAJGGOCValue706 =
          this.getGAstProductions()[chunkFPAJGGOCValue705],
        chunkFPAJGGOCValue707 = chunkFPAJGGOCHelper206(
          chunkFPAJGGOCParam278,
          chunkFPAJGGOCValue706,
          chunkFPAJGGOCParam279,
          this.maxLookahead,
        )[0],
        chunkFPAJGGOCValue708 = [];
      for (
        let chunkFPAJGGOCValue1830 = 1;
        chunkFPAJGGOCValue1830 <= this.maxLookahead;
        chunkFPAJGGOCValue1830++
      )
        chunkFPAJGGOCValue708.push(this.LA(chunkFPAJGGOCValue1830));
      let chunkFPAJGGOCValue709 =
        this.errorMessageProvider.buildEarlyExitMessage({
          expectedIterationPaths: chunkFPAJGGOCValue707,
          actual: chunkFPAJGGOCValue708,
          previous: this.LA(0),
          customUserDescription: chunkFPAJGGOCParam280,
          ruleName: chunkFPAJGGOCValue705,
        });
      throw this.SAVE_ERROR(
        new chunkFPAJGGOCValue143(
          chunkFPAJGGOCValue709,
          this.LA(1),
          this.LA(0),
        ),
      );
    }
    raiseNoAltException(chunkFPAJGGOCParam257, chunkFPAJGGOCParam258) {
      let chunkFPAJGGOCValue679 = this.getCurrRuleFullName(),
        chunkFPAJGGOCValue680 =
          this.getGAstProductions()[chunkFPAJGGOCValue679],
        chunkFPAJGGOCValue681 = chunkFPAJGGOCHelper205(
          chunkFPAJGGOCParam257,
          chunkFPAJGGOCValue680,
          this.maxLookahead,
        ),
        chunkFPAJGGOCValue682 = [];
      for (
        let chunkFPAJGGOCValue1831 = 1;
        chunkFPAJGGOCValue1831 <= this.maxLookahead;
        chunkFPAJGGOCValue1831++
      )
        chunkFPAJGGOCValue682.push(this.LA(chunkFPAJGGOCValue1831));
      let chunkFPAJGGOCValue683 = this.LA(0),
        chunkFPAJGGOCValue684 =
          this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: chunkFPAJGGOCValue681,
            actual: chunkFPAJGGOCValue682,
            previous: chunkFPAJGGOCValue683,
            customUserDescription: chunkFPAJGGOCParam258,
            ruleName: this.getCurrRuleFullName(),
          });
      throw this.SAVE_ERROR(
        new js(chunkFPAJGGOCValue684, this.LA(1), chunkFPAJGGOCValue683),
      );
    }
  },
  chunkFPAJGGOCValue161 = class {
    initContentAssist() {}
    computeContentAssist(chunkFPAJGGOCParam843, chunkFPAJGGOCParam844) {
      let chunkFPAJGGOCValue1249 =
        this.gastProductionsCache[chunkFPAJGGOCParam843];
      if (baseUniqR(chunkFPAJGGOCValue1249))
        throw Error(
          `Rule ->${chunkFPAJGGOCParam843}<- does not exist in this grammar.`,
        );
      return chunkFPAJGGOCHelper193(
        [chunkFPAJGGOCValue1249],
        chunkFPAJGGOCParam844,
        this.tokenMatcher,
        this.maxLookahead,
      );
    }
    getNextPossibleTokenTypes(chunkFPAJGGOCParam1174) {
      let chunkFPAJGGOCValue1498 = chunkFPAJGGOCHelper110(
          chunkFPAJGGOCParam1174.ruleStack,
        ),
        chunkFPAJGGOCValue1499 =
          this.getGAstProductions()[chunkFPAJGGOCValue1498];
      return new chunkFPAJGGOCValue124(
        chunkFPAJGGOCValue1499,
        chunkFPAJGGOCParam1174,
      ).startWalking();
    }
  },
  chunkFPAJGGOCValue162 = {
    description: "This Object indicates the Parser is during Recording Phase",
  };
Object.freeze(chunkFPAJGGOCValue162);
var chunkFPAJGGOCValue165 = chunkFPAJGGOCHelper187({
  name: "RECORDING_PHASE_TOKEN",
  pattern: chunkFPAJGGOCValue109.NA,
});
chunkFPAJGGOCHelper177([chunkFPAJGGOCValue165]);
var chunkFPAJGGOCValue166 = chunkFPAJGGOCHelper189(
  chunkFPAJGGOCValue165,
  "This IToken indicates the Parser is in Recording Phase\n\tSee: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
);
Object.freeze(chunkFPAJGGOCValue166);
var chunkFPAJGGOCValue167 = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n\tSee: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {},
  },
  _c = class {
    initGastRecorder(chunkFPAJGGOCParam1476) {
      this.recordingProdStack = [];
      this.RECORDING_PHASE = false;
    }
    enableRecording() {
      this.RECORDING_PHASE = true;
      this.TRACE_INIT("Enable Recording", () => {
        for (
          let chunkFPAJGGOCValue491 = 0;
          chunkFPAJGGOCValue491 < 10;
          chunkFPAJGGOCValue491++
        ) {
          let chunkFPAJGGOCValue497 =
            chunkFPAJGGOCValue491 > 0 ? chunkFPAJGGOCValue491 : "";
          this[`CONSUME${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1539,
            chunkFPAJGGOCParam1540,
          ) {
            return this.consumeInternalRecord(
              chunkFPAJGGOCParam1539,
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1540,
            );
          };
          this[`SUBRULE${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1515,
            chunkFPAJGGOCParam1516,
          ) {
            return this.subruleInternalRecord(
              chunkFPAJGGOCParam1515,
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1516,
            );
          };
          this[`OPTION${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1568,
          ) {
            return this.optionInternalRecord(
              chunkFPAJGGOCParam1568,
              chunkFPAJGGOCValue491,
            );
          };
          this[`OR${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1597,
          ) {
            return this.orInternalRecord(
              chunkFPAJGGOCParam1597,
              chunkFPAJGGOCValue491,
            );
          };
          this[`MANY${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1632,
          ) {
            this.manyInternalRecord(
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1632,
            );
          };
          this[`MANY_SEP${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1574,
          ) {
            this.manySepFirstInternalRecord(
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1574,
            );
          };
          this[`AT_LEAST_ONE${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1589,
          ) {
            this.atLeastOneInternalRecord(
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1589,
            );
          };
          this[`AT_LEAST_ONE_SEP${chunkFPAJGGOCValue497}`] = function (
            chunkFPAJGGOCParam1533,
          ) {
            this.atLeastOneSepFirstInternalRecord(
              chunkFPAJGGOCValue491,
              chunkFPAJGGOCParam1533,
            );
          };
        }
        this.consume = function (
          chunkFPAJGGOCParam1545,
          chunkFPAJGGOCParam1546,
          chunkFPAJGGOCParam1547,
        ) {
          return this.consumeInternalRecord(
            chunkFPAJGGOCParam1546,
            chunkFPAJGGOCParam1545,
            chunkFPAJGGOCParam1547,
          );
        };
        this.subrule = function (
          chunkFPAJGGOCParam1525,
          chunkFPAJGGOCParam1526,
          chunkFPAJGGOCParam1527,
        ) {
          return this.subruleInternalRecord(
            chunkFPAJGGOCParam1526,
            chunkFPAJGGOCParam1525,
            chunkFPAJGGOCParam1527,
          );
        };
        this.option = function (
          chunkFPAJGGOCParam1575,
          chunkFPAJGGOCParam1576,
        ) {
          return this.optionInternalRecord(
            chunkFPAJGGOCParam1576,
            chunkFPAJGGOCParam1575,
          );
        };
        this.or = function (chunkFPAJGGOCParam1604, chunkFPAJGGOCParam1605) {
          return this.orInternalRecord(
            chunkFPAJGGOCParam1605,
            chunkFPAJGGOCParam1604,
          );
        };
        this.many = function (chunkFPAJGGOCParam1640, chunkFPAJGGOCParam1641) {
          this.manyInternalRecord(
            chunkFPAJGGOCParam1640,
            chunkFPAJGGOCParam1641,
          );
        };
        this.atLeastOne = function (
          chunkFPAJGGOCParam1598,
          chunkFPAJGGOCParam1599,
        ) {
          this.atLeastOneInternalRecord(
            chunkFPAJGGOCParam1598,
            chunkFPAJGGOCParam1599,
          );
        };
        this.ACTION = this.ACTION_RECORD;
        this.BACKTRACK = this.BACKTRACK_RECORD;
        this.LA = this.LA_RECORD;
      });
    }
    disableRecording() {
      this.RECORDING_PHASE = false;
      this.TRACE_INIT("Deleting Recording methods", () => {
        let chunkFPAJGGOCValue587 = this;
        for (
          let chunkFPAJGGOCValue854 = 0;
          chunkFPAJGGOCValue854 < 10;
          chunkFPAJGGOCValue854++
        ) {
          let chunkFPAJGGOCValue906 =
            chunkFPAJGGOCValue854 > 0 ? chunkFPAJGGOCValue854 : "";
          delete chunkFPAJGGOCValue587[`CONSUME${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`SUBRULE${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`OPTION${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`OR${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`MANY${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`MANY_SEP${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[`AT_LEAST_ONE${chunkFPAJGGOCValue906}`];
          delete chunkFPAJGGOCValue587[
            `AT_LEAST_ONE_SEP${chunkFPAJGGOCValue906}`
          ];
        }
        delete chunkFPAJGGOCValue587.consume;
        delete chunkFPAJGGOCValue587.subrule;
        delete chunkFPAJGGOCValue587.option;
        delete chunkFPAJGGOCValue587.or;
        delete chunkFPAJGGOCValue587.many;
        delete chunkFPAJGGOCValue587.atLeastOne;
        delete chunkFPAJGGOCValue587.ACTION;
        delete chunkFPAJGGOCValue587.BACKTRACK;
        delete chunkFPAJGGOCValue587.LA;
      });
    }
    ACTION_RECORD(chunkFPAJGGOCParam2250) {}
    BACKTRACK_RECORD(chunkFPAJGGOCParam1961, chunkFPAJGGOCParam1962) {
      return () => true;
    }
    LA_RECORD(chunkFPAJGGOCParam2147) {
      return chunkFPAJGGOCValue169;
    }
    topLevelRuleRecord(chunkFPAJGGOCParam229, chunkFPAJGGOCParam230) {
      try {
        let chunkFPAJGGOCValue1199 = new chunkFPAJGGOCValue80({
          definition: [],
          name: chunkFPAJGGOCParam229,
        });
        return (
          (chunkFPAJGGOCValue1199.name = chunkFPAJGGOCParam229),
          this.recordingProdStack.push(chunkFPAJGGOCValue1199),
          chunkFPAJGGOCParam230.call(this),
          this.recordingProdStack.pop(),
          chunkFPAJGGOCValue1199
        );
      } catch (chunkFPAJGGOCValue982) {
        if (chunkFPAJGGOCValue982.KNOWN_RECORDER_ERROR !== true)
          try {
            chunkFPAJGGOCValue982.message +=
              '\n\t This error was thrown during the "grammar recording phase" For more info see:\n\thttps://chevrotain.io/docs/guide/internals.html#grammar-recording';
          } catch {
            throw chunkFPAJGGOCValue982;
          }
        throw chunkFPAJGGOCValue982;
      }
    }
    optionInternalRecord(chunkFPAJGGOCParam1704, chunkFPAJGGOCParam1705) {
      return chunkFPAJGGOCHelper236.call(
        this,
        chunkFPAJGGOCValue82,
        chunkFPAJGGOCParam1704,
        chunkFPAJGGOCParam1705,
      );
    }
    atLeastOneInternalRecord(chunkFPAJGGOCParam1755, chunkFPAJGGOCParam1756) {
      chunkFPAJGGOCHelper236.call(
        this,
        chunkFPAJGGOCValue83,
        chunkFPAJGGOCParam1756,
        chunkFPAJGGOCParam1755,
      );
    }
    atLeastOneSepFirstInternalRecord(
      chunkFPAJGGOCParam1606,
      chunkFPAJGGOCParam1607,
    ) {
      chunkFPAJGGOCHelper236.call(
        this,
        chunkFPAJGGOCValue84,
        chunkFPAJGGOCParam1607,
        chunkFPAJGGOCParam1606,
        true,
      );
    }
    manyInternalRecord(chunkFPAJGGOCParam1847, chunkFPAJGGOCParam1848) {
      chunkFPAJGGOCHelper236.call(
        this,
        chunkFPAJGGOCValue85,
        chunkFPAJGGOCParam1848,
        chunkFPAJGGOCParam1847,
      );
    }
    manySepFirstInternalRecord(chunkFPAJGGOCParam1658, chunkFPAJGGOCParam1659) {
      chunkFPAJGGOCHelper236.call(
        this,
        chunkFPAJGGOCValue86,
        chunkFPAJGGOCParam1659,
        chunkFPAJGGOCParam1658,
        true,
      );
    }
    orInternalRecord(chunkFPAJGGOCParam1835, chunkFPAJGGOCParam1836) {
      return chunkFPAJGGOCHelper237.call(
        this,
        chunkFPAJGGOCParam1835,
        chunkFPAJGGOCParam1836,
      );
    }
    subruleInternalRecord(
      chunkFPAJGGOCParam207,
      chunkFPAJGGOCParam208,
      chunkFPAJGGOCParam209,
    ) {
      if (
        (chunkFPAJGGOCHelper239(chunkFPAJGGOCParam208),
        !chunkFPAJGGOCParam207 ||
          basePickByR(chunkFPAJGGOCParam207, "ruleName") === false)
      ) {
        let chunkFPAJGGOCValue1083 = Error(
          `<SUBRULE${chunkFPAJGGOCHelper238(chunkFPAJGGOCParam208)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(chunkFPAJGGOCParam207)}>\n inside top level rule: <${this.recordingProdStack[0].name}>`,
        );
        throw (
          (chunkFPAJGGOCValue1083.KNOWN_RECORDER_ERROR = true),
          chunkFPAJGGOCValue1083
        );
      }
      let chunkFPAJGGOCValue617 = basePickByS(this.recordingProdStack),
        chunkFPAJGGOCValue618 = chunkFPAJGGOCParam207.ruleName,
        chunkFPAJGGOCValue619 = new chunkFPAJGGOCValue79({
          idx: chunkFPAJGGOCParam208,
          nonTerminalName: chunkFPAJGGOCValue618,
          label: chunkFPAJGGOCParam209?.LABEL,
          referencedRule: undefined,
        });
      return (
        chunkFPAJGGOCValue617.definition.push(chunkFPAJGGOCValue619),
        this.outputCst ? chunkFPAJGGOCValue167 : chunkFPAJGGOCValue162
      );
    }
    consumeInternalRecord(
      chunkFPAJGGOCParam322,
      chunkFPAJGGOCParam323,
      chunkFPAJGGOCParam324,
    ) {
      if (
        (chunkFPAJGGOCHelper239(chunkFPAJGGOCParam323),
        !chunkFPAJGGOCHelper182(chunkFPAJGGOCParam322))
      ) {
        let chunkFPAJGGOCValue1092 = Error(
          `<CONSUME${chunkFPAJGGOCHelper238(chunkFPAJGGOCParam323)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(chunkFPAJGGOCParam322)}>\n inside top level rule: <${this.recordingProdStack[0].name}>`,
        );
        throw (
          (chunkFPAJGGOCValue1092.KNOWN_RECORDER_ERROR = true),
          chunkFPAJGGOCValue1092
        );
      }
      let chunkFPAJGGOCValue759 = basePickByS(this.recordingProdStack),
        chunkFPAJGGOCValue760 = new chunkFPAJGGOCValue88({
          idx: chunkFPAJGGOCParam323,
          terminalType: chunkFPAJGGOCParam322,
          label: chunkFPAJGGOCParam324?.LABEL,
        });
      return (
        chunkFPAJGGOCValue759.definition.push(chunkFPAJGGOCValue760),
        chunkFPAJGGOCValue166
      );
    }
  };
function chunkFPAJGGOCHelper236(
  chunkFPAJGGOCParam461,
  chunkFPAJGGOCParam462,
  chunkFPAJGGOCParam463,
  chunkFPAJGGOCParam464 = false,
) {
  chunkFPAJGGOCHelper239(chunkFPAJGGOCParam463);
  let chunkFPAJGGOCValue882 = basePickByS(this.recordingProdStack),
    chunkFPAJGGOCValue883 = isArrayLikeObjectR(chunkFPAJGGOCParam462)
      ? chunkFPAJGGOCParam462
      : chunkFPAJGGOCParam462.DEF,
    chunkFPAJGGOCValue884 = new chunkFPAJGGOCParam461({
      definition: [],
      idx: chunkFPAJGGOCParam463,
    });
  return (
    chunkFPAJGGOCParam464 &&
      (chunkFPAJGGOCValue884.separator = chunkFPAJGGOCParam462.SEP),
    basePickByR(chunkFPAJGGOCParam462, "MAX_LOOKAHEAD") &&
      (chunkFPAJGGOCValue884.maxLookahead =
        chunkFPAJGGOCParam462.MAX_LOOKAHEAD),
    this.recordingProdStack.push(chunkFPAJGGOCValue884),
    chunkFPAJGGOCValue883.call(this),
    chunkFPAJGGOCValue882.definition.push(chunkFPAJGGOCValue884),
    this.recordingProdStack.pop(),
    chunkFPAJGGOCValue162
  );
}
function chunkFPAJGGOCHelper237(chunkFPAJGGOCParam162, chunkFPAJGGOCParam163) {
  chunkFPAJGGOCHelper239(chunkFPAJGGOCParam163);
  let chunkFPAJGGOCValue569 = basePickByS(this.recordingProdStack),
    chunkFPAJGGOCValue570 = isArrayLikeObjectV(chunkFPAJGGOCParam162) === false,
    chunkFPAJGGOCValue571 =
      chunkFPAJGGOCValue570 === false
        ? chunkFPAJGGOCParam162
        : chunkFPAJGGOCParam162.DEF,
    chunkFPAJGGOCValue572 = new chunkFPAJGGOCValue87({
      definition: [],
      idx: chunkFPAJGGOCParam163,
      ignoreAmbiguities:
        chunkFPAJGGOCValue570 &&
        chunkFPAJGGOCParam162.IGNORE_AMBIGUITIES === true,
    });
  return (
    basePickByR(chunkFPAJGGOCParam162, "MAX_LOOKAHEAD") &&
      (chunkFPAJGGOCValue572.maxLookahead =
        chunkFPAJGGOCParam162.MAX_LOOKAHEAD),
    (chunkFPAJGGOCValue572.hasPredicates = chunkFPAJGGOCHelper117(
      chunkFPAJGGOCValue571,
      (chunkFPAJGGOCParam2269) =>
        isArrayLikeObjectR(chunkFPAJGGOCParam2269.GATE),
    )),
    chunkFPAJGGOCValue569.definition.push(chunkFPAJGGOCValue572),
    _baseUniqS(chunkFPAJGGOCValue571, (chunkFPAJGGOCParam527) => {
      let chunkFPAJGGOCValue950 = new chunkFPAJGGOCValue81({
        definition: [],
      });
      chunkFPAJGGOCValue572.definition.push(chunkFPAJGGOCValue950);
      basePickByR(chunkFPAJGGOCParam527, "IGNORE_AMBIGUITIES")
        ? (chunkFPAJGGOCValue950.ignoreAmbiguities =
            chunkFPAJGGOCParam527.IGNORE_AMBIGUITIES)
        : basePickByR(chunkFPAJGGOCParam527, "GATE") &&
          (chunkFPAJGGOCValue950.ignoreAmbiguities = true);
      this.recordingProdStack.push(chunkFPAJGGOCValue950);
      chunkFPAJGGOCParam527.ALT.call(this);
      this.recordingProdStack.pop();
    }),
    chunkFPAJGGOCValue162
  );
}
function chunkFPAJGGOCHelper238(chunkFPAJGGOCParam2004) {
  return chunkFPAJGGOCParam2004 === 0 ? "" : `${chunkFPAJGGOCParam2004}`;
}
function chunkFPAJGGOCHelper239(chunkFPAJGGOCParam804) {
  if (chunkFPAJGGOCParam804 < 0 || chunkFPAJGGOCParam804 > 255) {
    let chunkFPAJGGOCValue1350 = Error(
      `Invalid DSL Method idx value: <${chunkFPAJGGOCParam804}>\n\tIdx value must be a none negative value smaller than ${256}`,
    );
    throw (
      (chunkFPAJGGOCValue1350.KNOWN_RECORDER_ERROR = true),
      chunkFPAJGGOCValue1350
    );
  }
}
var chunkFPAJGGOCValue168 = class {
  initPerformanceTracer(chunkFPAJGGOCParam508) {
    if (basePickByR(chunkFPAJGGOCParam508, "traceInitPerf")) {
      let chunkFPAJGGOCValue1418 = chunkFPAJGGOCParam508.traceInitPerf,
        chunkFPAJGGOCValue1419 = typeof chunkFPAJGGOCValue1418 == "number";
      this.traceInitMaxIdent = chunkFPAJGGOCValue1419
        ? chunkFPAJGGOCValue1418
        : 1 / 0;
      this.traceInitPerf = chunkFPAJGGOCValue1419
        ? chunkFPAJGGOCValue1418 > 0
        : chunkFPAJGGOCValue1418;
    } else {
      this.traceInitMaxIdent = 0;
      this.traceInitPerf = chunkFPAJGGOCValue170.traceInitPerf;
    }
    this.traceInitIndent = -1;
  }
  TRACE_INIT(chunkFPAJGGOCParam300, chunkFPAJGGOCParam301) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      let chunkFPAJGGOCValue800 = Array(this.traceInitIndent + 1).join("\t");
      this.traceInitIndent < this.traceInitMaxIdent &&
        console.log(`${chunkFPAJGGOCValue800}--> <${chunkFPAJGGOCParam300}>`);
      let { time, value } = chunkFPAJGGOCHelper121(chunkFPAJGGOCParam301),
        chunkFPAJGGOCValue801 = time > 10 ? console.warn : console.log;
      return (
        this.traceInitIndent < this.traceInitMaxIdent &&
          chunkFPAJGGOCValue801(
            `${chunkFPAJGGOCValue800}<-- <${chunkFPAJGGOCParam300}> time: ${time}ms`,
          ),
        this.traceInitIndent--,
        value
      );
    } else return chunkFPAJGGOCParam301();
  }
};
function chunkFPAJGGOCHelper240(chunkFPAJGGOCParam506, chunkFPAJGGOCParam507) {
  chunkFPAJGGOCParam507.forEach((item) => {
    let chunkFPAJGGOCValue1006 = item.prototype;
    Object.getOwnPropertyNames(chunkFPAJGGOCValue1006).forEach((_item) => {
      if (_item === "constructor") return;
      let chunkFPAJGGOCValue1213 = Object.getOwnPropertyDescriptor(
        chunkFPAJGGOCValue1006,
        _item,
      );
      chunkFPAJGGOCValue1213 &&
      (chunkFPAJGGOCValue1213.get || chunkFPAJGGOCValue1213.set)
        ? Object.defineProperty(
            chunkFPAJGGOCParam506.prototype,
            _item,
            chunkFPAJGGOCValue1213,
          )
        : (chunkFPAJGGOCParam506.prototype[_item] = item.prototype[_item]);
    });
  });
}
var chunkFPAJGGOCValue169 = chunkFPAJGGOCHelper189(
  chunkFPAJGGOCValue118,
  "",
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
);
Object.freeze(chunkFPAJGGOCValue169);
var chunkFPAJGGOCValue170 = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: chunkFPAJGGOCValue119,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false,
  }),
  chunkFPAJGGOCValue171 = Object.freeze({
    recoveryValueFunc: () => undefined,
    resyncEnabled: true,
  }),
  chunkFPAJGGOCValue172;
(function (chunkFPAJGGOCParam109) {
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.INVALID_RULE_NAME = 0)] =
    "INVALID_RULE_NAME";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.DUPLICATE_RULE_NAME = 1)] =
    "DUPLICATE_RULE_NAME";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.INVALID_RULE_OVERRIDE = 2)] =
    "INVALID_RULE_OVERRIDE";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.DUPLICATE_PRODUCTIONS = 3)] =
    "DUPLICATE_PRODUCTIONS";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.UNRESOLVED_SUBRULE_REF = 4)] =
    "UNRESOLVED_SUBRULE_REF";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.LEFT_RECURSION = 5)] =
    "LEFT_RECURSION";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.NONE_LAST_EMPTY_ALT = 6)] =
    "NONE_LAST_EMPTY_ALT";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.AMBIGUOUS_ALTS = 7)] =
    "AMBIGUOUS_ALTS";
  chunkFPAJGGOCParam109[
    (chunkFPAJGGOCParam109.CONFLICT_TOKENS_RULES_NAMESPACE = 8)
  ] = "CONFLICT_TOKENS_RULES_NAMESPACE";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.INVALID_TOKEN_NAME = 9)] =
    "INVALID_TOKEN_NAME";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.NO_NON_EMPTY_LOOKAHEAD = 10)] =
    "NO_NON_EMPTY_LOOKAHEAD";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.AMBIGUOUS_PREFIX_ALTS = 11)] =
    "AMBIGUOUS_PREFIX_ALTS";
  chunkFPAJGGOCParam109[(chunkFPAJGGOCParam109.TOO_MANY_ALTS = 12)] =
    "TOO_MANY_ALTS";
  chunkFPAJGGOCParam109[
    (chunkFPAJGGOCParam109.CUSTOM_LOOKAHEAD_VALIDATION = 13)
  ] = "CUSTOM_LOOKAHEAD_VALIDATION";
})((chunkFPAJGGOCValue172 ||= {}));
function chunkFPAJGGOCHelper241(chunkFPAJGGOCParam1737 = undefined) {
  return function () {
    return chunkFPAJGGOCParam1737;
  };
}
var chunkFPAJGGOCValue173 = class ChunkFPAJGGOCClass4 {
  static performSelfAnalysis(chunkFPAJGGOCParam981) {
    throw Error(
      "The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.",
    );
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let chunkFPAJGGOCValue403;
      this.selfAnalysisDone = true;
      let chunkFPAJGGOCValue404 = this.className;
      this.TRACE_INIT("toFastProps", () => {
        chunkFPAJGGOCHelper122(this);
      });
      this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording();
          _baseUniqS(this.definedRulesNames, (chunkFPAJGGOCParam651) => {
            let chunkFPAJGGOCValue1065 =
                this[chunkFPAJGGOCParam651].originalGrammarAction,
              chunkFPAJGGOCValue1066;
            this.TRACE_INIT(`${chunkFPAJGGOCParam651} Rule`, () => {
              chunkFPAJGGOCValue1066 = this.topLevelRuleRecord(
                chunkFPAJGGOCParam651,
                chunkFPAJGGOCValue1065,
              );
            });
            this.gastProductionsCache[chunkFPAJGGOCParam651] =
              chunkFPAJGGOCValue1066;
          });
        } finally {
          this.disableRecording();
        }
      });
      let chunkFPAJGGOCValue405 = [];
      if (
        (this.TRACE_INIT("Grammar Resolving", () => {
          chunkFPAJGGOCValue405 = chunkFPAJGGOCHelper221({
            rules: baseUniqI(this.gastProductionsCache),
          });
          this.definitionErrors = this.definitionErrors.concat(
            chunkFPAJGGOCValue405,
          );
        }),
        this.TRACE_INIT("Grammar Validations", () => {
          if (
            isEmptyT(chunkFPAJGGOCValue405) &&
            this.skipValidations === false
          ) {
            let chunkFPAJGGOCValue714 = chunkFPAJGGOCHelper222({
                rules: baseUniqI(this.gastProductionsCache),
                tokenTypes: baseUniqI(this.tokensMap),
                errMsgProvider: chunkFPAJGGOCValue121,
                grammarName: chunkFPAJGGOCValue404,
              }),
              chunkFPAJGGOCValue715 = chunkFPAJGGOCHelper209({
                lookaheadStrategy: this.lookaheadStrategy,
                rules: baseUniqI(this.gastProductionsCache),
                tokenTypes: baseUniqI(this.tokensMap),
                grammarName: chunkFPAJGGOCValue404,
              });
            this.definitionErrors = this.definitionErrors.concat(
              chunkFPAJGGOCValue714,
              chunkFPAJGGOCValue715,
            );
          }
        }),
        isEmptyT(this.definitionErrors) &&
          (this.recoveryEnabled &&
            this.TRACE_INIT("computeAllProdsFollows", () => {
              this.resyncFollows = chunkFPAJGGOCHelper136(
                baseUniqI(this.gastProductionsCache),
              );
            }),
          this.TRACE_INIT("ComputeLookaheadFunctions", () => {
            var chunkFPAJGGOCValue1124, chunkFPAJGGOCValue1125;
            (chunkFPAJGGOCValue1125 = (chunkFPAJGGOCValue1124 =
              this.lookaheadStrategy).initialize) == null ||
              chunkFPAJGGOCValue1125.call(chunkFPAJGGOCValue1124, {
                rules: baseUniqI(this.gastProductionsCache),
              });
            this.preComputeLookaheadFunctions(
              baseUniqI(this.gastProductionsCache),
            );
          })),
        !ChunkFPAJGGOCClass4.DEFER_DEFINITION_ERRORS_HANDLING &&
          !isEmptyT(this.definitionErrors))
      )
        throw (
          (chunkFPAJGGOCValue403 = basePickByI(
            this.definitionErrors,
            (chunkFPAJGGOCParam2270) => chunkFPAJGGOCParam2270.message,
          )),
          Error(
            `Parser Definition Errors detected:\n ${chunkFPAJGGOCValue403.join("\n-------------------------------\n")}`,
          )
        );
    });
  }
  constructor(chunkFPAJGGOCParam146, chunkFPAJGGOCParam147) {
    this.definitionErrors = [];
    this.selfAnalysisDone = false;
    let chunkFPAJGGOCValue548 = this;
    if (
      (chunkFPAJGGOCValue548.initErrorHandler(chunkFPAJGGOCParam147),
      chunkFPAJGGOCValue548.initLexerAdapter(),
      chunkFPAJGGOCValue548.initLooksAhead(chunkFPAJGGOCParam147),
      chunkFPAJGGOCValue548.initRecognizerEngine(
        chunkFPAJGGOCParam146,
        chunkFPAJGGOCParam147,
      ),
      chunkFPAJGGOCValue548.initRecoverable(chunkFPAJGGOCParam147),
      chunkFPAJGGOCValue548.initTreeBuilder(chunkFPAJGGOCParam147),
      chunkFPAJGGOCValue548.initContentAssist(),
      chunkFPAJGGOCValue548.initGastRecorder(chunkFPAJGGOCParam147),
      chunkFPAJGGOCValue548.initPerformanceTracer(chunkFPAJGGOCParam147),
      basePickByR(chunkFPAJGGOCParam147, "ignoredIssues"))
    )
      throw Error(
        "The <ignoredIssues> IParserConfig property has been deprecated.\n\tPlease use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n\tSee: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n\tFor further details.",
      );
    this.skipValidations = basePickByR(chunkFPAJGGOCParam147, "skipValidations")
      ? chunkFPAJGGOCParam147.skipValidations
      : chunkFPAJGGOCValue170.skipValidations;
  }
};
chunkFPAJGGOCValue173.DEFER_DEFINITION_ERRORS_HANDLING = false;
chunkFPAJGGOCHelper240(chunkFPAJGGOCValue173, [
  chunkFPAJGGOCValue147,
  chunkFPAJGGOCValue152,
  chunkFPAJGGOCValue156,
  chunkFPAJGGOCValue157,
  chunkFPAJGGOCValue159,
  chunkFPAJGGOCValue158,
  chunkFPAJGGOCValue160,
  chunkFPAJGGOCValue161,
  _c,
  chunkFPAJGGOCValue168,
]);
var chunkFPAJGGOCValue174 = class extends chunkFPAJGGOCValue173 {
  constructor(
    chunkFPAJGGOCParam1577,
    chunkFPAJGGOCParam1578 = chunkFPAJGGOCValue170,
  ) {
    let chunkFPAJGGOCValue1759 = clone(chunkFPAJGGOCParam1578);
    chunkFPAJGGOCValue1759.outputCst = false;
    super(chunkFPAJGGOCParam1577, chunkFPAJGGOCValue1759);
  }
};
function chunkFPAJGGOCHelper242(
  chunkFPAJGGOCParam1931,
  chunkFPAJGGOCParam1932,
  chunkFPAJGGOCParam1933,
) {
  return `${chunkFPAJGGOCParam1931.name}_${chunkFPAJGGOCParam1932}_${chunkFPAJGGOCParam1933}`;
}
var chunkFPAJGGOCValue175 = class {
    constructor(chunkFPAJGGOCParam2094) {
      this.target = chunkFPAJGGOCParam2094;
    }
    isEpsilon() {
      return false;
    }
  },
  chunkFPAJGGOCValue176 = class extends chunkFPAJGGOCValue175 {
    constructor(chunkFPAJGGOCParam1820, chunkFPAJGGOCParam1821) {
      super(chunkFPAJGGOCParam1820);
      this.tokenType = chunkFPAJGGOCParam1821;
    }
  },
  chunkFPAJGGOCValue177 = class extends chunkFPAJGGOCValue175 {
    constructor(chunkFPAJGGOCParam2144) {
      super(chunkFPAJGGOCParam2144);
    }
    isEpsilon() {
      return true;
    }
  },
  chunkFPAJGGOCValue178 = class extends chunkFPAJGGOCValue175 {
    constructor(
      chunkFPAJGGOCParam1558,
      chunkFPAJGGOCParam1559,
      chunkFPAJGGOCParam1560,
    ) {
      super(chunkFPAJGGOCParam1558);
      this.rule = chunkFPAJGGOCParam1559;
      this.followState = chunkFPAJGGOCParam1560;
    }
    isEpsilon() {
      return true;
    }
  };
function chunkFPAJGGOCHelper243(chunkFPAJGGOCParam566) {
  let chunkFPAJGGOCValue1000 = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: new Map(),
    ruleToStopState: new Map(),
    states: [],
  };
  chunkFPAJGGOCHelper244(chunkFPAJGGOCValue1000, chunkFPAJGGOCParam566);
  let chunkFPAJGGOCValue1001 = chunkFPAJGGOCParam566.length;
  for (
    let chunkFPAJGGOCValue1673 = 0;
    chunkFPAJGGOCValue1673 < chunkFPAJGGOCValue1001;
    chunkFPAJGGOCValue1673++
  ) {
    let chunkFPAJGGOCValue1788 = chunkFPAJGGOCParam566[chunkFPAJGGOCValue1673],
      chunkFPAJGGOCValue1789 = chunkFPAJGGOCHelper252(
        chunkFPAJGGOCValue1000,
        chunkFPAJGGOCValue1788,
        chunkFPAJGGOCValue1788,
      );
    chunkFPAJGGOCValue1789 !== undefined &&
      el(
        chunkFPAJGGOCValue1000,
        chunkFPAJGGOCValue1788,
        chunkFPAJGGOCValue1789,
      );
  }
  return chunkFPAJGGOCValue1000;
}
function chunkFPAJGGOCHelper244(chunkFPAJGGOCParam740, chunkFPAJGGOCParam741) {
  let chunkFPAJGGOCValue1137 = chunkFPAJGGOCParam741.length;
  for (
    let chunkFPAJGGOCValue1269 = 0;
    chunkFPAJGGOCValue1269 < chunkFPAJGGOCValue1137;
    chunkFPAJGGOCValue1269++
  ) {
    let chunkFPAJGGOCValue1373 = chunkFPAJGGOCParam741[chunkFPAJGGOCValue1269],
      chunkFPAJGGOCValue1374 = chunkFPAJGGOCHelper262(
        chunkFPAJGGOCParam740,
        chunkFPAJGGOCValue1373,
        undefined,
        {
          type: 2,
        },
      ),
      chunkFPAJGGOCValue1375 = chunkFPAJGGOCHelper262(
        chunkFPAJGGOCParam740,
        chunkFPAJGGOCValue1373,
        undefined,
        {
          type: 7,
        },
      );
    chunkFPAJGGOCValue1374.stop = chunkFPAJGGOCValue1375;
    chunkFPAJGGOCParam740.ruleToStartState.set(
      chunkFPAJGGOCValue1373,
      chunkFPAJGGOCValue1374,
    );
    chunkFPAJGGOCParam740.ruleToStopState.set(
      chunkFPAJGGOCValue1373,
      chunkFPAJGGOCValue1375,
    );
  }
}
function chunkFPAJGGOCHelper245(
  chunkFPAJGGOCParam316,
  chunkFPAJGGOCParam317,
  chunkFPAJGGOCParam318,
) {
  return chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue88
    ? chunkFPAJGGOCHelper260(
        chunkFPAJGGOCParam316,
        chunkFPAJGGOCParam317,
        chunkFPAJGGOCParam318.terminalType,
        chunkFPAJGGOCParam318,
      )
    : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue79
      ? $c(chunkFPAJGGOCParam316, chunkFPAJGGOCParam317, chunkFPAJGGOCParam318)
      : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue87
        ? chunkFPAJGGOCHelper250(
            chunkFPAJGGOCParam316,
            chunkFPAJGGOCParam317,
            chunkFPAJGGOCParam318,
          )
        : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue82
          ? chunkFPAJGGOCHelper251(
              chunkFPAJGGOCParam316,
              chunkFPAJGGOCParam317,
              chunkFPAJGGOCParam318,
            )
          : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue85
            ? chunkFPAJGGOCHelper246(
                chunkFPAJGGOCParam316,
                chunkFPAJGGOCParam317,
                chunkFPAJGGOCParam318,
              )
            : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue86
              ? chunkFPAJGGOCHelper247(
                  chunkFPAJGGOCParam316,
                  chunkFPAJGGOCParam317,
                  chunkFPAJGGOCParam318,
                )
              : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue83
                ? chunkFPAJGGOCHelper248(
                    chunkFPAJGGOCParam316,
                    chunkFPAJGGOCParam317,
                    chunkFPAJGGOCParam318,
                  )
                : chunkFPAJGGOCParam318 instanceof chunkFPAJGGOCValue84
                  ? chunkFPAJGGOCHelper249(
                      chunkFPAJGGOCParam316,
                      chunkFPAJGGOCParam317,
                      chunkFPAJGGOCParam318,
                    )
                  : chunkFPAJGGOCHelper252(
                      chunkFPAJGGOCParam316,
                      chunkFPAJGGOCParam317,
                      chunkFPAJGGOCParam318,
                    );
}
function chunkFPAJGGOCHelper246(
  chunkFPAJGGOCParam1321,
  chunkFPAJGGOCParam1322,
  chunkFPAJGGOCParam1323,
) {
  let chunkFPAJGGOCValue1611 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1321,
    chunkFPAJGGOCParam1322,
    chunkFPAJGGOCParam1323,
    {
      type: 5,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1321, chunkFPAJGGOCValue1611),
    chunkFPAJGGOCHelper254(
      chunkFPAJGGOCParam1321,
      chunkFPAJGGOCParam1322,
      chunkFPAJGGOCParam1323,
      chunkFPAJGGOCHelper257(
        chunkFPAJGGOCParam1321,
        chunkFPAJGGOCParam1322,
        chunkFPAJGGOCValue1611,
        chunkFPAJGGOCParam1323,
        chunkFPAJGGOCHelper252(
          chunkFPAJGGOCParam1321,
          chunkFPAJGGOCParam1322,
          chunkFPAJGGOCParam1323,
        ),
      ),
    )
  );
}
function chunkFPAJGGOCHelper247(
  chunkFPAJGGOCParam1131,
  chunkFPAJGGOCParam1132,
  chunkFPAJGGOCParam1133,
) {
  let chunkFPAJGGOCValue1469 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1131,
    chunkFPAJGGOCParam1132,
    chunkFPAJGGOCParam1133,
    {
      type: 5,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1131, chunkFPAJGGOCValue1469),
    chunkFPAJGGOCHelper254(
      chunkFPAJGGOCParam1131,
      chunkFPAJGGOCParam1132,
      chunkFPAJGGOCParam1133,
      chunkFPAJGGOCHelper257(
        chunkFPAJGGOCParam1131,
        chunkFPAJGGOCParam1132,
        chunkFPAJGGOCValue1469,
        chunkFPAJGGOCParam1133,
        chunkFPAJGGOCHelper252(
          chunkFPAJGGOCParam1131,
          chunkFPAJGGOCParam1132,
          chunkFPAJGGOCParam1133,
        ),
      ),
      chunkFPAJGGOCHelper260(
        chunkFPAJGGOCParam1131,
        chunkFPAJGGOCParam1132,
        chunkFPAJGGOCParam1133.separator,
        chunkFPAJGGOCParam1133,
      ),
    )
  );
}
function chunkFPAJGGOCHelper248(
  chunkFPAJGGOCParam1324,
  chunkFPAJGGOCParam1325,
  chunkFPAJGGOCParam1326,
) {
  let chunkFPAJGGOCValue1612 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1324,
    chunkFPAJGGOCParam1325,
    chunkFPAJGGOCParam1326,
    {
      type: 4,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1324, chunkFPAJGGOCValue1612),
    chunkFPAJGGOCHelper253(
      chunkFPAJGGOCParam1324,
      chunkFPAJGGOCParam1325,
      chunkFPAJGGOCParam1326,
      chunkFPAJGGOCHelper257(
        chunkFPAJGGOCParam1324,
        chunkFPAJGGOCParam1325,
        chunkFPAJGGOCValue1612,
        chunkFPAJGGOCParam1326,
        chunkFPAJGGOCHelper252(
          chunkFPAJGGOCParam1324,
          chunkFPAJGGOCParam1325,
          chunkFPAJGGOCParam1326,
        ),
      ),
    )
  );
}
function chunkFPAJGGOCHelper249(
  chunkFPAJGGOCParam1134,
  chunkFPAJGGOCParam1135,
  chunkFPAJGGOCParam1136,
) {
  let chunkFPAJGGOCValue1470 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1134,
    chunkFPAJGGOCParam1135,
    chunkFPAJGGOCParam1136,
    {
      type: 4,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1134, chunkFPAJGGOCValue1470),
    chunkFPAJGGOCHelper253(
      chunkFPAJGGOCParam1134,
      chunkFPAJGGOCParam1135,
      chunkFPAJGGOCParam1136,
      chunkFPAJGGOCHelper257(
        chunkFPAJGGOCParam1134,
        chunkFPAJGGOCParam1135,
        chunkFPAJGGOCValue1470,
        chunkFPAJGGOCParam1136,
        chunkFPAJGGOCHelper252(
          chunkFPAJGGOCParam1134,
          chunkFPAJGGOCParam1135,
          chunkFPAJGGOCParam1136,
        ),
      ),
      chunkFPAJGGOCHelper260(
        chunkFPAJGGOCParam1134,
        chunkFPAJGGOCParam1135,
        chunkFPAJGGOCParam1136.separator,
        chunkFPAJGGOCParam1136,
      ),
    )
  );
}
function chunkFPAJGGOCHelper250(
  chunkFPAJGGOCParam1249,
  chunkFPAJGGOCParam1250,
  chunkFPAJGGOCParam1251,
) {
  let chunkFPAJGGOCValue1545 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1249,
    chunkFPAJGGOCParam1250,
    chunkFPAJGGOCParam1251,
    {
      type: 1,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1249, chunkFPAJGGOCValue1545),
    chunkFPAJGGOCHelper257(
      chunkFPAJGGOCParam1249,
      chunkFPAJGGOCParam1250,
      chunkFPAJGGOCValue1545,
      chunkFPAJGGOCParam1251,
      ...flattenA(chunkFPAJGGOCParam1251.definition, (chunkFPAJGGOCParam2258) =>
        chunkFPAJGGOCHelper245(
          chunkFPAJGGOCParam1249,
          chunkFPAJGGOCParam1250,
          chunkFPAJGGOCParam2258,
        ),
      ),
    )
  );
}
function chunkFPAJGGOCHelper251(
  chunkFPAJGGOCParam1327,
  chunkFPAJGGOCParam1328,
  chunkFPAJGGOCParam1329,
) {
  let chunkFPAJGGOCValue1613 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam1327,
    chunkFPAJGGOCParam1328,
    chunkFPAJGGOCParam1329,
    {
      type: 1,
    },
  );
  return (
    chunkFPAJGGOCHelper256(chunkFPAJGGOCParam1327, chunkFPAJGGOCValue1613),
    chunkFPAJGGOCHelper255(
      chunkFPAJGGOCParam1327,
      chunkFPAJGGOCParam1328,
      chunkFPAJGGOCParam1329,
      chunkFPAJGGOCHelper257(
        chunkFPAJGGOCParam1327,
        chunkFPAJGGOCParam1328,
        chunkFPAJGGOCValue1613,
        chunkFPAJGGOCParam1329,
        chunkFPAJGGOCHelper252(
          chunkFPAJGGOCParam1327,
          chunkFPAJGGOCParam1328,
          chunkFPAJGGOCParam1329,
        ),
      ),
    )
  );
}
function chunkFPAJGGOCHelper252(
  chunkFPAJGGOCParam1031,
  chunkFPAJGGOCParam1032,
  chunkFPAJGGOCParam1033,
) {
  let chunkFPAJGGOCValue1384 = reduceC(
    flattenA(chunkFPAJGGOCParam1033.definition, (chunkFPAJGGOCParam2259) =>
      chunkFPAJGGOCHelper245(
        chunkFPAJGGOCParam1031,
        chunkFPAJGGOCParam1032,
        chunkFPAJGGOCParam2259,
      ),
    ),
    (chunkFPAJGGOCParam2251) => chunkFPAJGGOCParam2251 !== undefined,
  );
  return chunkFPAJGGOCValue1384.length === 1
    ? chunkFPAJGGOCValue1384[0]
    : chunkFPAJGGOCValue1384.length === 0
      ? undefined
      : chunkFPAJGGOCHelper259(chunkFPAJGGOCParam1031, chunkFPAJGGOCValue1384);
}
function chunkFPAJGGOCHelper253(
  chunkFPAJGGOCParam341,
  chunkFPAJGGOCParam342,
  chunkFPAJGGOCParam343,
  chunkFPAJGGOCParam344,
  chunkFPAJGGOCParam345,
) {
  let chunkFPAJGGOCValue771 = chunkFPAJGGOCParam344.left,
    chunkFPAJGGOCValue772 = chunkFPAJGGOCParam344.right,
    chunkFPAJGGOCValue773 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam341,
      chunkFPAJGGOCParam342,
      chunkFPAJGGOCParam343,
      {
        type: 11,
      },
    );
  chunkFPAJGGOCHelper256(chunkFPAJGGOCParam341, chunkFPAJGGOCValue773);
  let chunkFPAJGGOCValue774 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam341,
    chunkFPAJGGOCParam342,
    chunkFPAJGGOCParam343,
    {
      type: 12,
    },
  );
  return (
    (chunkFPAJGGOCValue771.loopback = chunkFPAJGGOCValue773),
    (chunkFPAJGGOCValue774.loopback = chunkFPAJGGOCValue773),
    (chunkFPAJGGOCParam341.decisionMap[
      chunkFPAJGGOCHelper242(
        chunkFPAJGGOCParam342,
        chunkFPAJGGOCParam345
          ? "RepetitionMandatoryWithSeparator"
          : "RepetitionMandatory",
        chunkFPAJGGOCParam343.idx,
      )
    ] = chunkFPAJGGOCValue773),
    chunkFPAJGGOCHelper261(chunkFPAJGGOCValue772, chunkFPAJGGOCValue773),
    chunkFPAJGGOCParam345 === undefined
      ? (chunkFPAJGGOCHelper261(chunkFPAJGGOCValue773, chunkFPAJGGOCValue771),
        chunkFPAJGGOCHelper261(chunkFPAJGGOCValue773, chunkFPAJGGOCValue774))
      : (chunkFPAJGGOCHelper261(chunkFPAJGGOCValue773, chunkFPAJGGOCValue774),
        chunkFPAJGGOCHelper261(
          chunkFPAJGGOCValue773,
          chunkFPAJGGOCParam345.left,
        ),
        chunkFPAJGGOCHelper261(
          chunkFPAJGGOCParam345.right,
          chunkFPAJGGOCValue771,
        )),
    {
      left: chunkFPAJGGOCValue771,
      right: chunkFPAJGGOCValue774,
    }
  );
}
function chunkFPAJGGOCHelper254(
  chunkFPAJGGOCParam354,
  chunkFPAJGGOCParam355,
  chunkFPAJGGOCParam356,
  chunkFPAJGGOCParam357,
  chunkFPAJGGOCParam358,
) {
  let chunkFPAJGGOCValue782 = chunkFPAJGGOCParam357.left,
    chunkFPAJGGOCValue783 = chunkFPAJGGOCParam357.right,
    chunkFPAJGGOCValue784 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam354,
      chunkFPAJGGOCParam355,
      chunkFPAJGGOCParam356,
      {
        type: 10,
      },
    );
  chunkFPAJGGOCHelper256(chunkFPAJGGOCParam354, chunkFPAJGGOCValue784);
  let chunkFPAJGGOCValue785 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam354,
      chunkFPAJGGOCParam355,
      chunkFPAJGGOCParam356,
      {
        type: 12,
      },
    ),
    chunkFPAJGGOCValue786 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam354,
      chunkFPAJGGOCParam355,
      chunkFPAJGGOCParam356,
      {
        type: 9,
      },
    );
  return (
    (chunkFPAJGGOCValue784.loopback = chunkFPAJGGOCValue786),
    (chunkFPAJGGOCValue785.loopback = chunkFPAJGGOCValue786),
    chunkFPAJGGOCHelper261(chunkFPAJGGOCValue784, chunkFPAJGGOCValue782),
    chunkFPAJGGOCHelper261(chunkFPAJGGOCValue784, chunkFPAJGGOCValue785),
    chunkFPAJGGOCHelper261(chunkFPAJGGOCValue783, chunkFPAJGGOCValue786),
    chunkFPAJGGOCParam358 === undefined
      ? chunkFPAJGGOCHelper261(chunkFPAJGGOCValue786, chunkFPAJGGOCValue784)
      : (chunkFPAJGGOCHelper261(chunkFPAJGGOCValue786, chunkFPAJGGOCValue785),
        chunkFPAJGGOCHelper261(
          chunkFPAJGGOCValue786,
          chunkFPAJGGOCParam358.left,
        ),
        chunkFPAJGGOCHelper261(
          chunkFPAJGGOCParam358.right,
          chunkFPAJGGOCValue782,
        )),
    (chunkFPAJGGOCParam354.decisionMap[
      chunkFPAJGGOCHelper242(
        chunkFPAJGGOCParam355,
        chunkFPAJGGOCParam358 ? "RepetitionWithSeparator" : "Repetition",
        chunkFPAJGGOCParam356.idx,
      )
    ] = chunkFPAJGGOCValue784),
    {
      left: chunkFPAJGGOCValue784,
      right: chunkFPAJGGOCValue785,
    }
  );
}
function chunkFPAJGGOCHelper255(
  chunkFPAJGGOCParam1286,
  chunkFPAJGGOCParam1287,
  chunkFPAJGGOCParam1288,
  chunkFPAJGGOCParam1289,
) {
  let chunkFPAJGGOCValue1574 = chunkFPAJGGOCParam1289.left,
    chunkFPAJGGOCValue1575 = chunkFPAJGGOCParam1289.right;
  return (
    chunkFPAJGGOCHelper261(chunkFPAJGGOCValue1574, chunkFPAJGGOCValue1575),
    (chunkFPAJGGOCParam1286.decisionMap[
      chunkFPAJGGOCHelper242(
        chunkFPAJGGOCParam1287,
        "Option",
        chunkFPAJGGOCParam1288.idx,
      )
    ] = chunkFPAJGGOCValue1574),
    chunkFPAJGGOCParam1289
  );
}
function chunkFPAJGGOCHelper256(
  chunkFPAJGGOCParam1290,
  chunkFPAJGGOCParam1291,
) {
  return (
    chunkFPAJGGOCParam1290.decisionStates.push(chunkFPAJGGOCParam1291),
    (chunkFPAJGGOCParam1291.decision =
      chunkFPAJGGOCParam1290.decisionStates.length - 1),
    chunkFPAJGGOCParam1291.decision
  );
}
function chunkFPAJGGOCHelper257(
  chunkFPAJGGOCParam734,
  chunkFPAJGGOCParam735,
  chunkFPAJGGOCParam736,
  chunkFPAJGGOCParam737,
  ...chunkFPAJGGOCParam738
) {
  let chunkFPAJGGOCValue1133 = chunkFPAJGGOCHelper262(
    chunkFPAJGGOCParam734,
    chunkFPAJGGOCParam735,
    chunkFPAJGGOCParam737,
    {
      type: 8,
      start: chunkFPAJGGOCParam736,
    },
  );
  chunkFPAJGGOCParam736.end = chunkFPAJGGOCValue1133;
  for (let chunkFPAJGGOCValue1807 of chunkFPAJGGOCParam738)
    chunkFPAJGGOCValue1807 === undefined
      ? chunkFPAJGGOCHelper261(chunkFPAJGGOCParam736, chunkFPAJGGOCValue1133)
      : (chunkFPAJGGOCHelper261(
          chunkFPAJGGOCParam736,
          chunkFPAJGGOCValue1807.left,
        ),
        chunkFPAJGGOCHelper261(
          chunkFPAJGGOCValue1807.right,
          chunkFPAJGGOCValue1133,
        ));
  let chunkFPAJGGOCValue1134 = {
    left: chunkFPAJGGOCParam736,
    right: chunkFPAJGGOCValue1133,
  };
  return (
    (chunkFPAJGGOCParam734.decisionMap[
      chunkFPAJGGOCHelper242(
        chunkFPAJGGOCParam735,
        chunkFPAJGGOCHelper258(chunkFPAJGGOCParam737),
        chunkFPAJGGOCParam737.idx,
      )
    ] = chunkFPAJGGOCParam736),
    chunkFPAJGGOCValue1134
  );
}
function chunkFPAJGGOCHelper258(chunkFPAJGGOCParam475) {
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue87)
    return "Alternation";
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue82) return "Option";
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue85)
    return "Repetition";
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue86)
    return "RepetitionWithSeparator";
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue83)
    return "RepetitionMandatory";
  if (chunkFPAJGGOCParam475 instanceof chunkFPAJGGOCValue84)
    return "RepetitionMandatoryWithSeparator";
  throw Error("Invalid production type encountered");
}
function chunkFPAJGGOCHelper259(chunkFPAJGGOCParam268, chunkFPAJGGOCParam269) {
  let chunkFPAJGGOCValue693 = chunkFPAJGGOCParam269.length;
  for (
    let chunkFPAJGGOCValue826 = 0;
    chunkFPAJGGOCValue826 < chunkFPAJGGOCValue693 - 1;
    chunkFPAJGGOCValue826++
  ) {
    let chunkFPAJGGOCValue871 = chunkFPAJGGOCParam269[chunkFPAJGGOCValue826],
      chunkFPAJGGOCValue872;
    chunkFPAJGGOCValue871.left.transitions.length === 1 &&
      (chunkFPAJGGOCValue872 = chunkFPAJGGOCValue871.left.transitions[0]);
    let chunkFPAJGGOCValue873 =
        chunkFPAJGGOCValue872 instanceof chunkFPAJGGOCValue178,
      chunkFPAJGGOCValue874 = chunkFPAJGGOCValue872,
      chunkFPAJGGOCValue875 =
        chunkFPAJGGOCParam269[chunkFPAJGGOCValue826 + 1].left;
    chunkFPAJGGOCValue871.left.type === 1 &&
    chunkFPAJGGOCValue871.right.type === 1 &&
    chunkFPAJGGOCValue872 !== undefined &&
    ((chunkFPAJGGOCValue873 &&
      chunkFPAJGGOCValue874.followState === chunkFPAJGGOCValue871.right) ||
      chunkFPAJGGOCValue872.target === chunkFPAJGGOCValue871.right)
      ? (chunkFPAJGGOCValue873
          ? (chunkFPAJGGOCValue874.followState = chunkFPAJGGOCValue875)
          : (chunkFPAJGGOCValue872.target = chunkFPAJGGOCValue875),
        chunkFPAJGGOCHelper264(
          chunkFPAJGGOCParam268,
          chunkFPAJGGOCValue871.right,
        ))
      : chunkFPAJGGOCHelper261(
          chunkFPAJGGOCValue871.right,
          chunkFPAJGGOCValue875,
        );
  }
  let chunkFPAJGGOCValue694 = chunkFPAJGGOCParam269[0],
    chunkFPAJGGOCValue695 = chunkFPAJGGOCParam269[chunkFPAJGGOCValue693 - 1];
  return {
    left: chunkFPAJGGOCValue694.left,
    right: chunkFPAJGGOCValue695.right,
  };
}
function chunkFPAJGGOCHelper260(
  chunkFPAJGGOCParam1181,
  chunkFPAJGGOCParam1182,
  chunkFPAJGGOCParam1183,
  chunkFPAJGGOCParam1184,
) {
  let chunkFPAJGGOCValue1505 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam1181,
      chunkFPAJGGOCParam1182,
      chunkFPAJGGOCParam1184,
      {
        type: 1,
      },
    ),
    chunkFPAJGGOCValue1506 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam1181,
      chunkFPAJGGOCParam1182,
      chunkFPAJGGOCParam1184,
      {
        type: 1,
      },
    );
  return (
    chunkFPAJGGOCHelper263(
      chunkFPAJGGOCValue1505,
      new chunkFPAJGGOCValue176(chunkFPAJGGOCValue1506, chunkFPAJGGOCParam1183),
    ),
    {
      left: chunkFPAJGGOCValue1505,
      right: chunkFPAJGGOCValue1506,
    }
  );
}
function $c(
  chunkFPAJGGOCParam877,
  chunkFPAJGGOCParam878,
  chunkFPAJGGOCParam879,
) {
  let chunkFPAJGGOCValue1263 = chunkFPAJGGOCParam879.referencedRule,
    chunkFPAJGGOCValue1264 = chunkFPAJGGOCParam877.ruleToStartState.get(
      chunkFPAJGGOCValue1263,
    ),
    chunkFPAJGGOCValue1265 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam877,
      chunkFPAJGGOCParam878,
      chunkFPAJGGOCParam879,
      {
        type: 1,
      },
    ),
    chunkFPAJGGOCValue1266 = chunkFPAJGGOCHelper262(
      chunkFPAJGGOCParam877,
      chunkFPAJGGOCParam878,
      chunkFPAJGGOCParam879,
      {
        type: 1,
      },
    );
  return (
    chunkFPAJGGOCHelper263(
      chunkFPAJGGOCValue1265,
      new chunkFPAJGGOCValue178(
        chunkFPAJGGOCValue1264,
        chunkFPAJGGOCValue1263,
        chunkFPAJGGOCValue1266,
      ),
    ),
    {
      left: chunkFPAJGGOCValue1265,
      right: chunkFPAJGGOCValue1266,
    }
  );
}
function el(
  chunkFPAJGGOCParam1113,
  chunkFPAJGGOCParam1114,
  chunkFPAJGGOCParam1115,
) {
  let chunkFPAJGGOCValue1455 = chunkFPAJGGOCParam1113.ruleToStartState.get(
    chunkFPAJGGOCParam1114,
  );
  chunkFPAJGGOCHelper261(chunkFPAJGGOCValue1455, chunkFPAJGGOCParam1115.left);
  let chunkFPAJGGOCValue1456 = chunkFPAJGGOCParam1113.ruleToStopState.get(
    chunkFPAJGGOCParam1114,
  );
  return (
    chunkFPAJGGOCHelper261(
      chunkFPAJGGOCParam1115.right,
      chunkFPAJGGOCValue1456,
    ),
    {
      left: chunkFPAJGGOCValue1455,
      right: chunkFPAJGGOCValue1456,
    }
  );
}
function chunkFPAJGGOCHelper261(
  chunkFPAJGGOCParam2133,
  chunkFPAJGGOCParam2134,
) {
  chunkFPAJGGOCHelper263(
    chunkFPAJGGOCParam2133,
    new chunkFPAJGGOCValue177(chunkFPAJGGOCParam2134),
  );
}
function chunkFPAJGGOCHelper262(
  chunkFPAJGGOCParam652,
  chunkFPAJGGOCParam653,
  chunkFPAJGGOCParam654,
  chunkFPAJGGOCParam655,
) {
  let chunkFPAJGGOCValue1067 = Object.assign(
    {
      atn: chunkFPAJGGOCParam652,
      production: chunkFPAJGGOCParam654,
      epsilonOnlyTransitions: false,
      rule: chunkFPAJGGOCParam653,
      transitions: [],
      nextTokenWithinRule: [],
      stateNumber: chunkFPAJGGOCParam652.states.length,
    },
    chunkFPAJGGOCParam655,
  );
  return (
    chunkFPAJGGOCParam652.states.push(chunkFPAJGGOCValue1067),
    chunkFPAJGGOCValue1067
  );
}
function chunkFPAJGGOCHelper263(
  chunkFPAJGGOCParam1313,
  chunkFPAJGGOCParam1314,
) {
  chunkFPAJGGOCParam1313.transitions.length === 0 &&
    (chunkFPAJGGOCParam1313.epsilonOnlyTransitions =
      chunkFPAJGGOCParam1314.isEpsilon());
  chunkFPAJGGOCParam1313.transitions.push(chunkFPAJGGOCParam1314);
}
function chunkFPAJGGOCHelper264(
  chunkFPAJGGOCParam1837,
  chunkFPAJGGOCParam1838,
) {
  chunkFPAJGGOCParam1837.states.splice(
    chunkFPAJGGOCParam1837.states.indexOf(chunkFPAJGGOCParam1838),
    1,
  );
}
var chunkFPAJGGOCValue179 = {},
  chunkFPAJGGOCValue180 = class {
    constructor() {
      this.map = {};
      this.configs = [];
    }
    get size() {
      return this.configs.length;
    }
    finalize() {
      this.map = {};
    }
    add(chunkFPAJGGOCParam1309) {
      let chunkFPAJGGOCValue1593 = chunkFPAJGGOCHelper265(
        chunkFPAJGGOCParam1309,
      );
      chunkFPAJGGOCValue1593 in this.map ||
        ((this.map[chunkFPAJGGOCValue1593] = this.configs.length),
        this.configs.push(chunkFPAJGGOCParam1309));
    }
    get elements() {
      return this.configs;
    }
    get alts() {
      return flattenA(
        this.configs,
        (chunkFPAJGGOCParam2322) => chunkFPAJGGOCParam2322.alt,
      );
    }
    get key() {
      let chunkFPAJGGOCValue1722 = "";
      for (let chunkFPAJGGOCValue1866 in this.map)
        chunkFPAJGGOCValue1722 += chunkFPAJGGOCValue1866 + ":";
      return chunkFPAJGGOCValue1722;
    }
  };
function chunkFPAJGGOCHelper265(
  chunkFPAJGGOCParam1228,
  chunkFPAJGGOCParam1229 = true,
) {
  return `${chunkFPAJGGOCParam1229 ? `a${chunkFPAJGGOCParam1228.alt}` : ""}s${chunkFPAJGGOCParam1228.state.stateNumber}:${chunkFPAJGGOCParam1228.stack.map((item) => item.stateNumber.toString()).join("_")}`;
}
function chunkFPAJGGOCHelper266(chunkFPAJGGOCParam870, chunkFPAJGGOCParam871) {
  let chunkFPAJGGOCValue1261 = {};
  return (chunkFPAJGGOCParam1095) => {
    let i = chunkFPAJGGOCParam1095.toString(),
      chunkFPAJGGOCValue1433 = chunkFPAJGGOCValue1261[i];
    return chunkFPAJGGOCValue1433 === undefined
      ? ((chunkFPAJGGOCValue1433 = {
          atnStartState: chunkFPAJGGOCParam870,
          decision: chunkFPAJGGOCParam871,
          states: {},
        }),
        (chunkFPAJGGOCValue1261[i] = chunkFPAJGGOCValue1433),
        chunkFPAJGGOCValue1433)
      : chunkFPAJGGOCValue1433;
  };
}
var chunkFPAJGGOCValue181 = class {
    constructor() {
      this.predicates = [];
    }
    is(chunkFPAJGGOCParam1633) {
      return (
        chunkFPAJGGOCParam1633 >= this.predicates.length ||
        this.predicates[chunkFPAJGGOCParam1633]
      );
    }
    set(chunkFPAJGGOCParam2079, chunkFPAJGGOCParam2080) {
      this.predicates[chunkFPAJGGOCParam2079] = chunkFPAJGGOCParam2080;
    }
    toString() {
      let chunkFPAJGGOCValue1434 = "",
        chunkFPAJGGOCValue1435 = this.predicates.length;
      for (
        let chunkFPAJGGOCValue1816 = 0;
        chunkFPAJGGOCValue1816 < chunkFPAJGGOCValue1435;
        chunkFPAJGGOCValue1816++
      )
        chunkFPAJGGOCValue1434 +=
          this.predicates[chunkFPAJGGOCValue1816] === true ? "1" : "0";
      return chunkFPAJGGOCValue1434;
    }
  },
  chunkFPAJGGOCValue182 = new chunkFPAJGGOCValue181(),
  chunkFPAJGGOCValue183 = class extends chunkFPAJGGOCValue151 {
    constructor(chunkFPAJGGOCParam1482) {
      super();
      this.logging =
        chunkFPAJGGOCParam1482?.logging ??
        ((chunkFPAJGGOCParam2226) => console.log(chunkFPAJGGOCParam2226));
    }
    initialize(chunkFPAJGGOCParam1590) {
      this.atn = chunkFPAJGGOCHelper243(chunkFPAJGGOCParam1590.rules);
      this.dfas = chunkFPAJGGOCHelper268(this.atn);
    }
    validateAmbiguousAlternationAlternatives() {
      return [];
    }
    validateEmptyOrAlternatives() {
      return [];
    }
    buildLookaheadForAlternation(chunkFPAJGGOCParam23) {
      let { prodOccurrence, rule, hasPredicates, dynamicTokensEnabled } =
          chunkFPAJGGOCParam23,
        chunkFPAJGGOCValue407 = this.dfas,
        chunkFPAJGGOCValue408 = this.logging,
        chunkFPAJGGOCValue409 = chunkFPAJGGOCHelper242(
          rule,
          "Alternation",
          prodOccurrence,
        ),
        chunkFPAJGGOCValue410 =
          this.atn.decisionMap[chunkFPAJGGOCValue409].decision,
        chunkFPAJGGOCValue411 = flattenA(
          chunkFPAJGGOCHelper196({
            maxLookahead: 1,
            occurrence: prodOccurrence,
            prodType: "Alternation",
            rule,
          }),
          (chunkFPAJGGOCParam2195) =>
            flattenA(
              chunkFPAJGGOCParam2195,
              (chunkFPAJGGOCParam2328) => chunkFPAJGGOCParam2328[0],
            ),
        );
      if (
        chunkFPAJGGOCHelper267(chunkFPAJGGOCValue411, false) &&
        !dynamicTokensEnabled
      ) {
        let chunkFPAJGGOCValue588 = reduceT(
          chunkFPAJGGOCValue411,
          (
            chunkFPAJGGOCParam772,
            chunkFPAJGGOCParam773,
            chunkFPAJGGOCParam774,
          ) => (
            reduceN(chunkFPAJGGOCParam773, (chunkFPAJGGOCParam1034) => {
              chunkFPAJGGOCParam1034 &&
                ((chunkFPAJGGOCParam772[chunkFPAJGGOCParam1034.tokenTypeIdx] =
                  chunkFPAJGGOCParam774),
                reduceN(
                  chunkFPAJGGOCParam1034.categoryMatches,
                  (chunkFPAJGGOCParam1950) => {
                    chunkFPAJGGOCParam772[chunkFPAJGGOCParam1950] =
                      chunkFPAJGGOCParam774;
                  },
                ));
            }),
            chunkFPAJGGOCParam772
          ),
          {},
        );
        return hasPredicates
          ? function (chunkFPAJGGOCParam687) {
              let chunkFPAJGGOCValue1093 =
                chunkFPAJGGOCValue588[this.LA(1).tokenTypeIdx];
              if (
                chunkFPAJGGOCParam687 !== undefined &&
                chunkFPAJGGOCValue1093 !== undefined
              ) {
                let chunkFPAJGGOCValue1631 =
                  chunkFPAJGGOCParam687[chunkFPAJGGOCValue1093]?.GATE;
                if (
                  chunkFPAJGGOCValue1631 !== undefined &&
                  chunkFPAJGGOCValue1631.call(this) === false
                )
                  return;
              }
              return chunkFPAJGGOCValue1093;
            }
          : function () {
              return chunkFPAJGGOCValue588[this.LA(1).tokenTypeIdx];
            };
      } else if (hasPredicates)
        return function (chunkFPAJGGOCParam533) {
          let chunkFPAJGGOCValue963 = new chunkFPAJGGOCValue181(),
            chunkFPAJGGOCValue964 =
              chunkFPAJGGOCParam533 === undefined
                ? 0
                : chunkFPAJGGOCParam533.length;
          for (
            let chunkFPAJGGOCValue1595 = 0;
            chunkFPAJGGOCValue1595 < chunkFPAJGGOCValue964;
            chunkFPAJGGOCValue1595++
          ) {
            let chunkFPAJGGOCValue1710 =
              chunkFPAJGGOCParam533?.[chunkFPAJGGOCValue1595].GATE;
            chunkFPAJGGOCValue963.set(
              chunkFPAJGGOCValue1595,
              chunkFPAJGGOCValue1710 === undefined ||
                chunkFPAJGGOCValue1710.call(this),
            );
          }
          let chunkFPAJGGOCValue965 = chunkFPAJGGOCHelper269.call(
            this,
            chunkFPAJGGOCValue407,
            chunkFPAJGGOCValue410,
            chunkFPAJGGOCValue963,
            chunkFPAJGGOCValue408,
          );
          return typeof chunkFPAJGGOCValue965 == "number"
            ? chunkFPAJGGOCValue965
            : undefined;
        };
      else
        return function () {
          let chunkFPAJGGOCValue1618 = chunkFPAJGGOCHelper269.call(
            this,
            chunkFPAJGGOCValue407,
            chunkFPAJGGOCValue410,
            chunkFPAJGGOCValue182,
            chunkFPAJGGOCValue408,
          );
          return typeof chunkFPAJGGOCValue1618 == "number"
            ? chunkFPAJGGOCValue1618
            : undefined;
        };
    }
    buildLookaheadForOptional(chunkFPAJGGOCParam72) {
      let { prodOccurrence, rule, prodType, dynamicTokensEnabled } =
          chunkFPAJGGOCParam72,
        chunkFPAJGGOCValue470 = this.dfas,
        chunkFPAJGGOCValue471 = this.logging,
        chunkFPAJGGOCValue472 = chunkFPAJGGOCHelper242(
          rule,
          prodType,
          prodOccurrence,
        ),
        chunkFPAJGGOCValue473 =
          this.atn.decisionMap[chunkFPAJGGOCValue472].decision,
        chunkFPAJGGOCValue474 = flattenA(
          chunkFPAJGGOCHelper196({
            maxLookahead: 1,
            occurrence: prodOccurrence,
            prodType,
            rule,
          }),
          (chunkFPAJGGOCParam2196) =>
            flattenA(
              chunkFPAJGGOCParam2196,
              (chunkFPAJGGOCParam2329) => chunkFPAJGGOCParam2329[0],
            ),
        );
      if (
        chunkFPAJGGOCHelper267(chunkFPAJGGOCValue474) &&
        chunkFPAJGGOCValue474[0][0] &&
        !dynamicTokensEnabled
      ) {
        let chunkFPAJGGOCValue602 = chunkFPAJGGOCValue474[0],
          chunkFPAJGGOCValue603 = flattenT(chunkFPAJGGOCValue602);
        if (
          chunkFPAJGGOCValue603.length === 1 &&
          _isEmptyT(chunkFPAJGGOCValue603[0].categoryMatches)
        ) {
          let chunkFPAJGGOCValue1531 = chunkFPAJGGOCValue603[0].tokenTypeIdx;
          return function () {
            return this.LA(1).tokenTypeIdx === chunkFPAJGGOCValue1531;
          };
        } else {
          let chunkFPAJGGOCValue850 = reduceT(
            chunkFPAJGGOCValue603,
            (chunkFPAJGGOCParam880, chunkFPAJGGOCParam881) => (
              chunkFPAJGGOCParam881 !== undefined &&
                ((chunkFPAJGGOCParam880[chunkFPAJGGOCParam881.tokenTypeIdx] =
                  true),
                reduceN(
                  chunkFPAJGGOCParam881.categoryMatches,
                  (chunkFPAJGGOCParam1942) => {
                    chunkFPAJGGOCParam880[chunkFPAJGGOCParam1942] = true;
                  },
                )),
              chunkFPAJGGOCParam880
            ),
            {},
          );
          return function () {
            return chunkFPAJGGOCValue850[this.LA(1).tokenTypeIdx] === true;
          };
        }
      }
      return function () {
        let chunkFPAJGGOCValue1633 = chunkFPAJGGOCHelper269.call(
          this,
          chunkFPAJGGOCValue470,
          chunkFPAJGGOCValue473,
          chunkFPAJGGOCValue182,
          chunkFPAJGGOCValue471,
        );
        return typeof chunkFPAJGGOCValue1633 == "object"
          ? false
          : chunkFPAJGGOCValue1633 === 0;
      };
    }
  };
function chunkFPAJGGOCHelper267(
  chunkFPAJGGOCParam458,
  chunkFPAJGGOCParam459 = true,
) {
  let chunkFPAJGGOCValue876 = new Set();
  for (let chunkFPAJGGOCValue972 of chunkFPAJGGOCParam458) {
    let chunkFPAJGGOCValue1014 = new Set();
    for (let chunkFPAJGGOCValue1078 of chunkFPAJGGOCValue972) {
      if (chunkFPAJGGOCValue1078 === undefined) {
        if (chunkFPAJGGOCParam459) break;
        return false;
      }
      let chunkFPAJGGOCValue1119 = [chunkFPAJGGOCValue1078.tokenTypeIdx].concat(
        chunkFPAJGGOCValue1078.categoryMatches,
      );
      for (let chunkFPAJGGOCValue1645 of chunkFPAJGGOCValue1119)
        if (chunkFPAJGGOCValue876.has(chunkFPAJGGOCValue1645)) {
          if (!chunkFPAJGGOCValue1014.has(chunkFPAJGGOCValue1645)) return false;
        } else {
          chunkFPAJGGOCValue876.add(chunkFPAJGGOCValue1645);
          chunkFPAJGGOCValue1014.add(chunkFPAJGGOCValue1645);
        }
    }
  }
  return true;
}
function chunkFPAJGGOCHelper268(chunkFPAJGGOCParam1202) {
  let chunkFPAJGGOCValue1510 = chunkFPAJGGOCParam1202.decisionStates.length,
    chunkFPAJGGOCValue1511 = Array(chunkFPAJGGOCValue1510);
  for (
    let chunkFPAJGGOCValue1836 = 0;
    chunkFPAJGGOCValue1836 < chunkFPAJGGOCValue1510;
    chunkFPAJGGOCValue1836++
  )
    chunkFPAJGGOCValue1511[chunkFPAJGGOCValue1836] = chunkFPAJGGOCHelper266(
      chunkFPAJGGOCParam1202.decisionStates[chunkFPAJGGOCValue1836],
      chunkFPAJGGOCValue1836,
    );
  return chunkFPAJGGOCValue1511;
}
function chunkFPAJGGOCHelper269(
  chunkFPAJGGOCParam994,
  chunkFPAJGGOCParam995,
  chunkFPAJGGOCParam996,
  chunkFPAJGGOCParam997,
) {
  let chunkFPAJGGOCValue1354 = chunkFPAJGGOCParam994[chunkFPAJGGOCParam995](
      chunkFPAJGGOCParam996,
    ),
    chunkFPAJGGOCValue1355 = chunkFPAJGGOCValue1354.start;
  return (
    chunkFPAJGGOCValue1355 === undefined &&
      ((chunkFPAJGGOCValue1355 = chunkFPAJGGOCHelper281(
        chunkFPAJGGOCValue1354,
        chunkFPAJGGOCHelper279(
          chunkFPAJGGOCHelper282(chunkFPAJGGOCValue1354.atnStartState),
        ),
      )),
      (chunkFPAJGGOCValue1354.start = chunkFPAJGGOCValue1355)),
    chunkFPAJGGOCHelper270.apply(this, [
      chunkFPAJGGOCValue1354,
      chunkFPAJGGOCValue1355,
      chunkFPAJGGOCParam996,
      chunkFPAJGGOCParam997,
    ])
  );
}
function chunkFPAJGGOCHelper270(
  chunkFPAJGGOCParam542,
  chunkFPAJGGOCParam543,
  chunkFPAJGGOCParam544,
  chunkFPAJGGOCParam545,
) {
  let chunkFPAJGGOCValue973 = chunkFPAJGGOCParam543,
    chunkFPAJGGOCValue974 = 1,
    chunkFPAJGGOCValue975 = [],
    chunkFPAJGGOCValue976 = this.LA(chunkFPAJGGOCValue974++);
  for (;;) {
    let chunkFPAJGGOCValue1214 = chunkFPAJGGOCHelper275(
      chunkFPAJGGOCValue973,
      chunkFPAJGGOCValue976,
    );
    if (
      (chunkFPAJGGOCValue1214 === undefined &&
        (chunkFPAJGGOCValue1214 = chunkFPAJGGOCHelper271.apply(this, [
          chunkFPAJGGOCParam542,
          chunkFPAJGGOCValue973,
          chunkFPAJGGOCValue976,
          chunkFPAJGGOCValue974,
          chunkFPAJGGOCParam544,
          chunkFPAJGGOCParam545,
        ])),
      chunkFPAJGGOCValue1214 === chunkFPAJGGOCValue179)
    )
      return chunkFPAJGGOCHelper274(
        chunkFPAJGGOCValue975,
        chunkFPAJGGOCValue973,
        chunkFPAJGGOCValue976,
      );
    if (chunkFPAJGGOCValue1214.isAcceptState === true)
      return chunkFPAJGGOCValue1214.prediction;
    chunkFPAJGGOCValue973 = chunkFPAJGGOCValue1214;
    chunkFPAJGGOCValue975.push(chunkFPAJGGOCValue976);
    chunkFPAJGGOCValue976 = this.LA(chunkFPAJGGOCValue974++);
  }
}
function chunkFPAJGGOCHelper271(
  chunkFPAJGGOCParam362,
  chunkFPAJGGOCParam363,
  chunkFPAJGGOCParam364,
  chunkFPAJGGOCParam365,
  chunkFPAJGGOCParam366,
  chunkFPAJGGOCParam367,
) {
  let chunkFPAJGGOCValue790 = chunkFPAJGGOCHelper276(
    chunkFPAJGGOCParam363.configs,
    chunkFPAJGGOCParam364,
    chunkFPAJGGOCParam366,
  );
  if (chunkFPAJGGOCValue790.size === 0)
    return (
      chunkFPAJGGOCHelper280(
        chunkFPAJGGOCParam362,
        chunkFPAJGGOCParam363,
        chunkFPAJGGOCParam364,
        chunkFPAJGGOCValue179,
      ),
      chunkFPAJGGOCValue179
    );
  let chunkFPAJGGOCValue791 = chunkFPAJGGOCHelper279(chunkFPAJGGOCValue790),
    chunkFPAJGGOCValue792 = chunkFPAJGGOCHelper278(
      chunkFPAJGGOCValue790,
      chunkFPAJGGOCParam366,
    );
  if (chunkFPAJGGOCValue792 !== undefined) {
    chunkFPAJGGOCValue791.isAcceptState = true;
    chunkFPAJGGOCValue791.prediction = chunkFPAJGGOCValue792;
    chunkFPAJGGOCValue791.configs.uniqueAlt = chunkFPAJGGOCValue792;
  } else if (chunkFPAJGGOCHelper287(chunkFPAJGGOCValue790)) {
    let chunkFPAJGGOCValue1471 = flattenN(chunkFPAJGGOCValue790.alts);
    chunkFPAJGGOCValue791.isAcceptState = true;
    chunkFPAJGGOCValue791.prediction = chunkFPAJGGOCValue1471;
    chunkFPAJGGOCValue791.configs.uniqueAlt = chunkFPAJGGOCValue1471;
    chunkFPAJGGOCHelper272.apply(this, [
      chunkFPAJGGOCParam362,
      chunkFPAJGGOCParam365,
      chunkFPAJGGOCValue790.alts,
      chunkFPAJGGOCParam367,
    ]);
  }
  return (
    (chunkFPAJGGOCValue791 = chunkFPAJGGOCHelper280(
      chunkFPAJGGOCParam362,
      chunkFPAJGGOCParam363,
      chunkFPAJGGOCParam364,
      chunkFPAJGGOCValue791,
    )),
    chunkFPAJGGOCValue791
  );
}
function chunkFPAJGGOCHelper272(
  chunkFPAJGGOCParam758,
  chunkFPAJGGOCParam759,
  chunkFPAJGGOCParam760,
  chunkFPAJGGOCParam761,
) {
  let chunkFPAJGGOCValue1167 = [];
  for (
    let chunkFPAJGGOCValue1846 = 1;
    chunkFPAJGGOCValue1846 <= chunkFPAJGGOCParam759;
    chunkFPAJGGOCValue1846++
  )
    chunkFPAJGGOCValue1167.push(this.LA(chunkFPAJGGOCValue1846).tokenType);
  let chunkFPAJGGOCValue1168 = chunkFPAJGGOCParam758.atnStartState,
    chunkFPAJGGOCValue1169 = chunkFPAJGGOCValue1168.rule,
    chunkFPAJGGOCValue1170 = chunkFPAJGGOCValue1168.production;
  chunkFPAJGGOCParam761(
    chunkFPAJGGOCHelper273({
      topLevelRule: chunkFPAJGGOCValue1169,
      ambiguityIndices: chunkFPAJGGOCParam760,
      production: chunkFPAJGGOCValue1170,
      prefixPath: chunkFPAJGGOCValue1167,
    }),
  );
}
function chunkFPAJGGOCHelper273(chunkFPAJGGOCParam319) {
  let chunkFPAJGGOCValue754 = flattenA(
      chunkFPAJGGOCParam319.prefixPath,
      (chunkFPAJGGOCParam2323) =>
        chunkFPAJGGOCHelper185(chunkFPAJGGOCParam2323),
    ).join(", "),
    chunkFPAJGGOCValue755 =
      chunkFPAJGGOCParam319.production.idx === 0
        ? ""
        : chunkFPAJGGOCParam319.production.idx,
    chunkFPAJGGOCValue756 = `Ambiguous Alternatives Detected: <${chunkFPAJGGOCParam319.ambiguityIndices.join(", ")}> in <${_l(chunkFPAJGGOCParam319.production)}${chunkFPAJGGOCValue755}> inside <${chunkFPAJGGOCParam319.topLevelRule.name}> Rule,\n<${chunkFPAJGGOCValue754}> may appears as a prefix path in all these alternatives.\n`;
  return (
    (chunkFPAJGGOCValue756 +=
      "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details."),
    chunkFPAJGGOCValue756
  );
}
function _l(chunkFPAJGGOCParam466) {
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue79) return "SUBRULE";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue82) return "OPTION";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue87) return "OR";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue83)
    return "AT_LEAST_ONE";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue84)
    return "AT_LEAST_ONE_SEP";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue86) return "MANY_SEP";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue85) return "MANY";
  if (chunkFPAJGGOCParam466 instanceof chunkFPAJGGOCValue88) return "CONSUME";
  throw Error("non exhaustive match");
}
function chunkFPAJGGOCHelper274(
  chunkFPAJGGOCParam679,
  chunkFPAJGGOCParam680,
  chunkFPAJGGOCParam681,
) {
  return {
    actualToken: chunkFPAJGGOCParam681,
    possibleTokenTypes: mainU(
      mainD(
        chunkFPAJGGOCParam680.configs.elements,
        (chunkFPAJGGOCParam2190) => chunkFPAJGGOCParam2190.state.transitions,
      )
        .filter((item) => item instanceof chunkFPAJGGOCValue176)
        .map((item) => item.tokenType),
      (chunkFPAJGGOCParam2227) => chunkFPAJGGOCParam2227.tokenTypeIdx,
    ),
    tokenPath: chunkFPAJGGOCParam679,
  };
}
function chunkFPAJGGOCHelper275(
  chunkFPAJGGOCParam1943,
  chunkFPAJGGOCParam1944,
) {
  return chunkFPAJGGOCParam1943.edges[chunkFPAJGGOCParam1944.tokenTypeIdx];
}
function chunkFPAJGGOCHelper276(
  chunkFPAJGGOCParam220,
  chunkFPAJGGOCParam221,
  chunkFPAJGGOCParam222,
) {
  let chunkFPAJGGOCValue630 = new chunkFPAJGGOCValue180(),
    chunkFPAJGGOCValue631 = [];
  for (let chunkFPAJGGOCValue932 of chunkFPAJGGOCParam220.elements) {
    if (chunkFPAJGGOCParam222.is(chunkFPAJGGOCValue932.alt) === false) continue;
    if (chunkFPAJGGOCValue932.state.type === 7) {
      chunkFPAJGGOCValue631.push(chunkFPAJGGOCValue932);
      continue;
    }
    let chunkFPAJGGOCValue986 = chunkFPAJGGOCValue932.state.transitions.length;
    for (
      let chunkFPAJGGOCValue1436 = 0;
      chunkFPAJGGOCValue1436 < chunkFPAJGGOCValue986;
      chunkFPAJGGOCValue1436++
    ) {
      let chunkFPAJGGOCValue1540 =
          chunkFPAJGGOCValue932.state.transitions[chunkFPAJGGOCValue1436],
        chunkFPAJGGOCValue1541 = chunkFPAJGGOCHelper277(
          chunkFPAJGGOCValue1540,
          chunkFPAJGGOCParam221,
        );
      chunkFPAJGGOCValue1541 !== undefined &&
        chunkFPAJGGOCValue630.add({
          state: chunkFPAJGGOCValue1541,
          alt: chunkFPAJGGOCValue932.alt,
          stack: chunkFPAJGGOCValue932.stack,
        });
    }
  }
  let chunkFPAJGGOCValue632;
  if (
    (chunkFPAJGGOCValue631.length === 0 &&
      chunkFPAJGGOCValue630.size === 1 &&
      (chunkFPAJGGOCValue632 = chunkFPAJGGOCValue630),
    chunkFPAJGGOCValue632 === undefined)
  ) {
    chunkFPAJGGOCValue632 = new chunkFPAJGGOCValue180();
    for (let chunkFPAJGGOCValue1871 of chunkFPAJGGOCValue630.elements)
      chunkFPAJGGOCHelper283(chunkFPAJGGOCValue1871, chunkFPAJGGOCValue632);
  }
  if (
    chunkFPAJGGOCValue631.length > 0 &&
    !chunkFPAJGGOCHelper285(chunkFPAJGGOCValue632)
  )
    for (let chunkFPAJGGOCValue1876 of chunkFPAJGGOCValue631)
      chunkFPAJGGOCValue632.add(chunkFPAJGGOCValue1876);
  return chunkFPAJGGOCValue632;
}
function chunkFPAJGGOCHelper277(event, chunkFPAJGGOCParam1591) {
  if (
    event instanceof chunkFPAJGGOCValue176 &&
    chunkFPAJGGOCHelper190(chunkFPAJGGOCParam1591, event.tokenType)
  )
    return event.target;
}
function chunkFPAJGGOCHelper278(
  chunkFPAJGGOCParam1040,
  chunkFPAJGGOCParam1041,
) {
  let chunkFPAJGGOCValue1392;
  for (let chunkFPAJGGOCValue1565 of chunkFPAJGGOCParam1040.elements)
    if (chunkFPAJGGOCParam1041.is(chunkFPAJGGOCValue1565.alt) === true) {
      if (chunkFPAJGGOCValue1392 === undefined)
        chunkFPAJGGOCValue1392 = chunkFPAJGGOCValue1565.alt;
      else if (chunkFPAJGGOCValue1392 !== chunkFPAJGGOCValue1565.alt) return;
    }
  return chunkFPAJGGOCValue1392;
}
function chunkFPAJGGOCHelper279(chunkFPAJGGOCParam1541) {
  return {
    configs: chunkFPAJGGOCParam1541,
    edges: {},
    isAcceptState: false,
    prediction: -1,
  };
}
function chunkFPAJGGOCHelper280(
  chunkFPAJGGOCParam1548,
  chunkFPAJGGOCParam1549,
  chunkFPAJGGOCParam1550,
  chunkFPAJGGOCParam1551,
) {
  return (
    (chunkFPAJGGOCParam1551 = chunkFPAJGGOCHelper281(
      chunkFPAJGGOCParam1548,
      chunkFPAJGGOCParam1551,
    )),
    (chunkFPAJGGOCParam1549.edges[chunkFPAJGGOCParam1550.tokenTypeIdx] =
      chunkFPAJGGOCParam1551),
    chunkFPAJGGOCParam1551
  );
}
function chunkFPAJGGOCHelper281(
  chunkFPAJGGOCParam1089,
  chunkFPAJGGOCParam1090,
) {
  if (chunkFPAJGGOCParam1090 === chunkFPAJGGOCValue179)
    return chunkFPAJGGOCParam1090;
  let chunkFPAJGGOCValue1427 = chunkFPAJGGOCParam1090.configs.key,
    chunkFPAJGGOCValue1428 =
      chunkFPAJGGOCParam1089.states[chunkFPAJGGOCValue1427];
  return chunkFPAJGGOCValue1428 === undefined
    ? (chunkFPAJGGOCParam1090.configs.finalize(),
      (chunkFPAJGGOCParam1089.states[chunkFPAJGGOCValue1427] =
        chunkFPAJGGOCParam1090),
      chunkFPAJGGOCParam1090)
    : chunkFPAJGGOCValue1428;
}
function chunkFPAJGGOCHelper282(chunkFPAJGGOCParam1051) {
  let chunkFPAJGGOCValue1398 = new chunkFPAJGGOCValue180(),
    chunkFPAJGGOCValue1399 = chunkFPAJGGOCParam1051.transitions.length;
  for (
    let chunkFPAJGGOCValue1734 = 0;
    chunkFPAJGGOCValue1734 < chunkFPAJGGOCValue1399;
    chunkFPAJGGOCValue1734++
  )
    chunkFPAJGGOCHelper283(
      {
        state:
          chunkFPAJGGOCParam1051.transitions[chunkFPAJGGOCValue1734].target,
        alt: chunkFPAJGGOCValue1734,
        stack: [],
      },
      chunkFPAJGGOCValue1398,
    );
  return chunkFPAJGGOCValue1398;
}
function chunkFPAJGGOCHelper283(chunkFPAJGGOCParam438, chunkFPAJGGOCParam439) {
  let chunkFPAJGGOCValue851 = chunkFPAJGGOCParam438.state;
  if (chunkFPAJGGOCValue851.type === 7) {
    if (chunkFPAJGGOCParam438.stack.length > 0) {
      let chunkFPAJGGOCValue1743 = [...chunkFPAJGGOCParam438.stack];
      chunkFPAJGGOCHelper283(
        {
          state: chunkFPAJGGOCValue1743.pop(),
          alt: chunkFPAJGGOCParam438.alt,
          stack: chunkFPAJGGOCValue1743,
        },
        chunkFPAJGGOCParam439,
      );
    } else chunkFPAJGGOCParam439.add(chunkFPAJGGOCParam438);
    return;
  }
  chunkFPAJGGOCValue851.epsilonOnlyTransitions ||
    chunkFPAJGGOCParam439.add(chunkFPAJGGOCParam438);
  let chunkFPAJGGOCValue852 = chunkFPAJGGOCValue851.transitions.length;
  for (
    let chunkFPAJGGOCValue1646 = 0;
    chunkFPAJGGOCValue1646 < chunkFPAJGGOCValue852;
    chunkFPAJGGOCValue1646++
  ) {
    let chunkFPAJGGOCValue1760 =
        chunkFPAJGGOCValue851.transitions[chunkFPAJGGOCValue1646],
      chunkFPAJGGOCValue1761 = chunkFPAJGGOCHelper284(
        chunkFPAJGGOCParam438,
        chunkFPAJGGOCValue1760,
      );
    chunkFPAJGGOCValue1761 !== undefined &&
      chunkFPAJGGOCHelper283(chunkFPAJGGOCValue1761, chunkFPAJGGOCParam439);
  }
}
function chunkFPAJGGOCHelper284(chunkFPAJGGOCParam828, event) {
  if (event instanceof chunkFPAJGGOCValue177)
    return {
      state: event.target,
      alt: chunkFPAJGGOCParam828.alt,
      stack: chunkFPAJGGOCParam828.stack,
    };
  if (event instanceof chunkFPAJGGOCValue178) {
    let chunkFPAJGGOCValue1699 = [
      ...chunkFPAJGGOCParam828.stack,
      event.followState,
    ];
    return {
      state: event.target,
      alt: chunkFPAJGGOCParam828.alt,
      stack: chunkFPAJGGOCValue1699,
    };
  }
}
function chunkFPAJGGOCHelper285(chunkFPAJGGOCParam1496) {
  for (let chunkFPAJGGOCValue1841 of chunkFPAJGGOCParam1496.elements)
    if (chunkFPAJGGOCValue1841.state.type === 7) return true;
  return false;
}
function chunkFPAJGGOCHelper286(chunkFPAJGGOCParam1497) {
  for (let chunkFPAJGGOCValue1842 of chunkFPAJGGOCParam1497.elements)
    if (chunkFPAJGGOCValue1842.state.type !== 7) return false;
  return true;
}
function chunkFPAJGGOCHelper287(chunkFPAJGGOCParam1498) {
  if (chunkFPAJGGOCHelper286(chunkFPAJGGOCParam1498)) return true;
  let chunkFPAJGGOCValue1726 = chunkFPAJGGOCHelper288(
    chunkFPAJGGOCParam1498.elements,
  );
  return (
    chunkFPAJGGOCHelper289(chunkFPAJGGOCValue1726) &&
    !chunkFPAJGGOCHelper290(chunkFPAJGGOCValue1726)
  );
}
function chunkFPAJGGOCHelper288(chunkFPAJGGOCParam1018) {
  let chunkFPAJGGOCValue1371 = new Map();
  for (let chunkFPAJGGOCValue1580 of chunkFPAJGGOCParam1018) {
    let chunkFPAJGGOCValue1650 = chunkFPAJGGOCHelper265(
        chunkFPAJGGOCValue1580,
        false,
      ),
      chunkFPAJGGOCValue1651 = chunkFPAJGGOCValue1371.get(
        chunkFPAJGGOCValue1650,
      );
    chunkFPAJGGOCValue1651 === undefined &&
      ((chunkFPAJGGOCValue1651 = {}),
      chunkFPAJGGOCValue1371.set(
        chunkFPAJGGOCValue1650,
        chunkFPAJGGOCValue1651,
      ));
    chunkFPAJGGOCValue1651[chunkFPAJGGOCValue1580.alt] = true;
  }
  return chunkFPAJGGOCValue1371;
}
function chunkFPAJGGOCHelper289(chunkFPAJGGOCParam1343) {
  for (let chunkFPAJGGOCValue1773 of Array.from(
    chunkFPAJGGOCParam1343.values(),
  ))
    if (Object.keys(chunkFPAJGGOCValue1773).length > 1) return true;
  return false;
}
function chunkFPAJGGOCHelper290(chunkFPAJGGOCParam1339) {
  for (let chunkFPAJGGOCValue1762 of Array.from(
    chunkFPAJGGOCParam1339.values(),
  ))
    if (Object.keys(chunkFPAJGGOCValue1762).length === 1) return true;
  return false;
}
mainC();
var chunkFPAJGGOCValue184 = class {
    constructor() {
      this.nodeStack = [];
    }
    get current() {
      return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
    }
    buildRootNode(chunkFPAJGGOCParam943) {
      return (
        (this.rootNode = new chunkFPAJGGOCValue189(chunkFPAJGGOCParam943)),
        (this.rootNode.root = this.rootNode),
        (this.nodeStack = [this.rootNode]),
        this.rootNode
      );
    }
    buildCompositeNode(chunkFPAJGGOCParam837) {
      let chunkFPAJGGOCValue1238 = new chunkFPAJGGOCValue187();
      return (
        (chunkFPAJGGOCValue1238.grammarSource = chunkFPAJGGOCParam837),
        (chunkFPAJGGOCValue1238.root = this.rootNode),
        this.current.content.push(chunkFPAJGGOCValue1238),
        this.nodeStack.push(chunkFPAJGGOCValue1238),
        chunkFPAJGGOCValue1238
      );
    }
    buildLeafNode(chunkFPAJGGOCParam768, chunkFPAJGGOCParam769) {
      let chunkFPAJGGOCValue1182 = new chunkFPAJGGOCValue186(
        chunkFPAJGGOCParam768.startOffset,
        chunkFPAJGGOCParam768.image.length,
        chunkFPAJGGOCHelper13(chunkFPAJGGOCParam768),
        chunkFPAJGGOCParam768.tokenType,
        !chunkFPAJGGOCParam769,
      );
      return (
        (chunkFPAJGGOCValue1182.grammarSource = chunkFPAJGGOCParam769),
        (chunkFPAJGGOCValue1182.root = this.rootNode),
        this.current.content.push(chunkFPAJGGOCValue1182),
        chunkFPAJGGOCValue1182
      );
    }
    removeNode(chunkFPAJGGOCParam1175) {
      let chunkFPAJGGOCValue1500 = chunkFPAJGGOCParam1175.container;
      if (chunkFPAJGGOCValue1500) {
        let chunkFPAJGGOCValue1745 = chunkFPAJGGOCValue1500.content.indexOf(
          chunkFPAJGGOCParam1175,
        );
        chunkFPAJGGOCValue1745 >= 0 &&
          chunkFPAJGGOCValue1500.content.splice(chunkFPAJGGOCValue1745, 1);
      }
    }
    addHiddenNodes(chunkFPAJGGOCParam228) {
      let chunkFPAJGGOCValue643 = [];
      for (let chunkFPAJGGOCValue1496 of chunkFPAJGGOCParam228) {
        let chunkFPAJGGOCValue1551 = new chunkFPAJGGOCValue186(
          chunkFPAJGGOCValue1496.startOffset,
          chunkFPAJGGOCValue1496.image.length,
          chunkFPAJGGOCHelper13(chunkFPAJGGOCValue1496),
          chunkFPAJGGOCValue1496.tokenType,
          true,
        );
        chunkFPAJGGOCValue1551.root = this.rootNode;
        chunkFPAJGGOCValue643.push(chunkFPAJGGOCValue1551);
      }
      let chunkFPAJGGOCValue644 = this.current,
        chunkFPAJGGOCValue645 = false;
      if (chunkFPAJGGOCValue644.content.length > 0) {
        chunkFPAJGGOCValue644.content.push(...chunkFPAJGGOCValue643);
        return;
      }
      for (; chunkFPAJGGOCValue644.container; ) {
        let chunkFPAJGGOCValue1346 =
          chunkFPAJGGOCValue644.container.content.indexOf(
            chunkFPAJGGOCValue644,
          );
        if (chunkFPAJGGOCValue1346 > 0) {
          chunkFPAJGGOCValue644.container.content.splice(
            chunkFPAJGGOCValue1346,
            0,
            ...chunkFPAJGGOCValue643,
          );
          chunkFPAJGGOCValue645 = true;
          break;
        }
        chunkFPAJGGOCValue644 = chunkFPAJGGOCValue644.container;
      }
      chunkFPAJGGOCValue645 ||
        this.rootNode.content.unshift(...chunkFPAJGGOCValue643);
    }
    construct(chunkFPAJGGOCParam810) {
      let chunkFPAJGGOCValue1217 = this.current;
      typeof chunkFPAJGGOCParam810.$type == "string" &&
        (this.current.astNode = chunkFPAJGGOCParam810);
      chunkFPAJGGOCParam810.$cstNode = chunkFPAJGGOCValue1217;
      let chunkFPAJGGOCValue1218 = this.nodeStack.pop();
      chunkFPAJGGOCValue1218?.content.length === 0 &&
        this.removeNode(chunkFPAJGGOCValue1218);
    }
  },
  chunkFPAJGGOCValue185 = class {
    get parent() {
      return this.container;
    }
    get feature() {
      return this.grammarSource;
    }
    get hidden() {
      return false;
    }
    get astNode() {
      let chunkFPAJGGOCValue1204 =
        typeof this._astNode?.$type == "string"
          ? this._astNode
          : this.container?.astNode;
      if (!chunkFPAJGGOCValue1204)
        throw Error("This node has no associated AST element");
      return chunkFPAJGGOCValue1204;
    }
    set astNode(chunkFPAJGGOCParam2081) {
      this._astNode = chunkFPAJGGOCParam2081;
    }
    get element() {
      return this.astNode;
    }
    get text() {
      return this.root.fullText.substring(this.offset, this.end);
    }
  },
  chunkFPAJGGOCValue186 = class extends chunkFPAJGGOCValue185 {
    get offset() {
      return this._offset;
    }
    get length() {
      return this._length;
    }
    get end() {
      return this._offset + this._length;
    }
    get hidden() {
      return this._hidden;
    }
    get tokenType() {
      return this._tokenType;
    }
    get range() {
      return this._range;
    }
    constructor(
      chunkFPAJGGOCParam931,
      chunkFPAJGGOCParam932,
      chunkFPAJGGOCParam933,
      chunkFPAJGGOCParam934,
      chunkFPAJGGOCParam935 = false,
    ) {
      super();
      this._hidden = chunkFPAJGGOCParam935;
      this._offset = chunkFPAJGGOCParam931;
      this._tokenType = chunkFPAJGGOCParam934;
      this._length = chunkFPAJGGOCParam932;
      this._range = chunkFPAJGGOCParam933;
    }
  },
  chunkFPAJGGOCValue187 = class extends chunkFPAJGGOCValue185 {
    constructor() {
      super(...arguments);
      this.content = new chunkFPAJGGOCValue188(this);
    }
    get children() {
      return this.content;
    }
    get offset() {
      return this.firstNonHiddenNode?.offset ?? 0;
    }
    get length() {
      return this.end - this.offset;
    }
    get end() {
      return this.lastNonHiddenNode?.end ?? 0;
    }
    get range() {
      let chunkFPAJGGOCValue788 = this.firstNonHiddenNode,
        chunkFPAJGGOCValue789 = this.lastNonHiddenNode;
      if (chunkFPAJGGOCValue788 && chunkFPAJGGOCValue789) {
        if (this._rangeCache === undefined) {
          let { range } = chunkFPAJGGOCValue788,
            { range: _range } = chunkFPAJGGOCValue789;
          this._rangeCache = {
            start: range.start,
            end: _range.end.line < range.start.line ? range.start : _range.end,
          };
        }
        return this._rangeCache;
      } else
        return {
          start: mainO.create(0, 0),
          end: mainO.create(0, 0),
        };
    }
    get firstNonHiddenNode() {
      for (let chunkFPAJGGOCValue1849 of this.content)
        if (!chunkFPAJGGOCValue1849.hidden) return chunkFPAJGGOCValue1849;
      return this.content[0];
    }
    get lastNonHiddenNode() {
      for (
        let chunkFPAJGGOCValue1596 = this.content.length - 1;
        chunkFPAJGGOCValue1596 >= 0;
        chunkFPAJGGOCValue1596--
      ) {
        let chunkFPAJGGOCValue1799 = this.content[chunkFPAJGGOCValue1596];
        if (!chunkFPAJGGOCValue1799.hidden) return chunkFPAJGGOCValue1799;
      }
      return this.content[this.content.length - 1];
    }
  },
  chunkFPAJGGOCValue188 = class ChunkFPAJGGOCClass7 extends Array {
    constructor(chunkFPAJGGOCParam1447) {
      super();
      this.parent = chunkFPAJGGOCParam1447;
      Object.setPrototypeOf(this, ChunkFPAJGGOCClass7.prototype);
    }
    push(...chunkFPAJGGOCParam1706) {
      return (
        this.addParents(chunkFPAJGGOCParam1706),
        super.push(...chunkFPAJGGOCParam1706)
      );
    }
    unshift(...chunkFPAJGGOCParam1634) {
      return (
        this.addParents(chunkFPAJGGOCParam1634),
        super.unshift(...chunkFPAJGGOCParam1634)
      );
    }
    splice(
      chunkFPAJGGOCParam1561,
      chunkFPAJGGOCParam1562,
      ...chunkFPAJGGOCParam1563
    ) {
      return (
        this.addParents(chunkFPAJGGOCParam1563),
        super.splice(
          chunkFPAJGGOCParam1561,
          chunkFPAJGGOCParam1562,
          ...chunkFPAJGGOCParam1563,
        )
      );
    }
    addParents(chunkFPAJGGOCParam1707) {
      for (let chunkFPAJGGOCValue1862 of chunkFPAJGGOCParam1707)
        chunkFPAJGGOCValue1862.container = this.parent;
    }
  },
  chunkFPAJGGOCValue189 = class extends chunkFPAJGGOCValue187 {
    get text() {
      return this._text.substring(this.offset, this.end);
    }
    get fullText() {
      return this._text;
    }
    constructor(chunkFPAJGGOCParam1600) {
      super();
      this._text = "";
      this._text = chunkFPAJGGOCParam1600 ?? "";
    }
  },
  chunkFPAJGGOCValue190 = Symbol("Datatype");
function chunkFPAJGGOCHelper291(chunkFPAJGGOCParam2111) {
  return chunkFPAJGGOCParam2111.$type === chunkFPAJGGOCValue190;
}
var chunkFPAJGGOCValue192 = (chunkFPAJGGOCParam2149) =>
    chunkFPAJGGOCParam2149.endsWith("​")
      ? chunkFPAJGGOCParam2149
      : chunkFPAJGGOCParam2149 + "​",
  chunkFPAJGGOCValue193 = class {
    constructor(chunkFPAJGGOCParam368) {
      this._unorderedGroups = new Map();
      this.allRules = new Map();
      this.lexer = chunkFPAJGGOCParam368.parser.Lexer;
      let chunkFPAJGGOCValue793 = this.lexer.definition,
        chunkFPAJGGOCValue794 =
          chunkFPAJGGOCParam368.LanguageMetaData.mode === "production";
      this.wrapper = new chunkFPAJGGOCValue199(
        chunkFPAJGGOCValue793,
        Object.assign(
          Object.assign({}, chunkFPAJGGOCParam368.parser.ParserConfig),
          {
            skipValidations: chunkFPAJGGOCValue794,
            errorMessageProvider:
              chunkFPAJGGOCParam368.parser.ParserErrorMessageProvider,
          },
        ),
      );
    }
    alternatives(chunkFPAJGGOCParam1893, chunkFPAJGGOCParam1894) {
      this.wrapper.wrapOr(chunkFPAJGGOCParam1893, chunkFPAJGGOCParam1894);
    }
    optional(chunkFPAJGGOCParam1895, chunkFPAJGGOCParam1896) {
      this.wrapper.wrapOption(chunkFPAJGGOCParam1895, chunkFPAJGGOCParam1896);
    }
    many(chunkFPAJGGOCParam1963, chunkFPAJGGOCParam1964) {
      this.wrapper.wrapMany(chunkFPAJGGOCParam1963, chunkFPAJGGOCParam1964);
    }
    atLeastOne(chunkFPAJGGOCParam1822, chunkFPAJGGOCParam1823) {
      this.wrapper.wrapAtLeastOne(
        chunkFPAJGGOCParam1822,
        chunkFPAJGGOCParam1823,
      );
    }
    getRule(chunkFPAJGGOCParam1965) {
      return this.allRules.get(chunkFPAJGGOCParam1965);
    }
    isRecording() {
      return this.wrapper.IS_RECORDING;
    }
    get unorderedGroups() {
      return this._unorderedGroups;
    }
    getRuleStack() {
      return this.wrapper.RULE_STACK;
    }
    finalize() {
      this.wrapper.wrapSelfAnalysis();
    }
  },
  chunkFPAJGGOCValue194 = class extends chunkFPAJGGOCValue193 {
    get current() {
      return this.stack[this.stack.length - 1];
    }
    constructor(chunkFPAJGGOCParam599) {
      super(chunkFPAJGGOCParam599);
      this.nodeBuilder = new chunkFPAJGGOCValue184();
      this.stack = [];
      this.assignmentMap = new Map();
      this.linker = chunkFPAJGGOCParam599.references.Linker;
      this.converter = chunkFPAJGGOCParam599.parser.ValueConverter;
      this.astReflection = chunkFPAJGGOCParam599.shared.AstReflection;
    }
    rule(chunkFPAJGGOCParam712, chunkFPAJGGOCParam713) {
      let chunkFPAJGGOCValue1116 = this.computeRuleType(chunkFPAJGGOCParam712),
        chunkFPAJGGOCValue1117 = this.wrapper.DEFINE_RULE(
          chunkFPAJGGOCValue192(chunkFPAJGGOCParam712.name),
          this.startImplementation(
            chunkFPAJGGOCValue1116,
            chunkFPAJGGOCParam713,
          ).bind(this),
        );
      return (
        this.allRules.set(chunkFPAJGGOCParam712.name, chunkFPAJGGOCValue1117),
        chunkFPAJGGOCParam712.entry && (this.mainRule = chunkFPAJGGOCValue1117),
        chunkFPAJGGOCValue1117
      );
    }
    computeRuleType(chunkFPAJGGOCParam1552) {
      if (!chunkFPAJGGOCParam1552.fragment)
        return chunkFPAJGGOCHelper83(chunkFPAJGGOCParam1552)
          ? chunkFPAJGGOCValue190
          : (chunkFPAJGGOCHelper85(chunkFPAJGGOCParam1552) ??
              chunkFPAJGGOCParam1552.name);
    }
    parse(chunkFPAJGGOCParam174, chunkFPAJGGOCParam175 = {}) {
      this.nodeBuilder.buildRootNode(chunkFPAJGGOCParam174);
      let chunkFPAJGGOCValue583 = (this.lexerResult = this.lexer.tokenize(
        chunkFPAJGGOCParam174,
      ));
      this.wrapper.input = chunkFPAJGGOCValue583.tokens;
      let chunkFPAJGGOCValue584 = chunkFPAJGGOCParam175.rule
        ? this.allRules.get(chunkFPAJGGOCParam175.rule)
        : this.mainRule;
      if (!chunkFPAJGGOCValue584)
        throw Error(
          chunkFPAJGGOCParam175.rule
            ? `No rule found with name '${chunkFPAJGGOCParam175.rule}'`
            : "No main rule available.",
        );
      let chunkFPAJGGOCValue585 = chunkFPAJGGOCValue584.call(this.wrapper, {});
      return (
        this.nodeBuilder.addHiddenNodes(chunkFPAJGGOCValue583.hidden),
        this.unorderedGroups.clear(),
        (this.lexerResult = undefined),
        {
          value: chunkFPAJGGOCValue585,
          lexerErrors: chunkFPAJGGOCValue583.errors,
          lexerReport: chunkFPAJGGOCValue583.report,
          parserErrors: this.wrapper.errors,
        }
      );
    }
    startImplementation(chunkFPAJGGOCParam440, chunkFPAJGGOCParam441) {
      return (chunkFPAJGGOCParam496) => {
        let chunkFPAJGGOCValue924 =
          !this.isRecording() && chunkFPAJGGOCParam440 !== undefined;
        if (chunkFPAJGGOCValue924) {
          let chunkFPAJGGOCValue1693 = {
            $type: chunkFPAJGGOCParam440,
          };
          this.stack.push(chunkFPAJGGOCValue1693);
          chunkFPAJGGOCParam440 === chunkFPAJGGOCValue190 &&
            (chunkFPAJGGOCValue1693.value = "");
        }
        let chunkFPAJGGOCValue925;
        try {
          chunkFPAJGGOCValue925 = chunkFPAJGGOCParam441(chunkFPAJGGOCParam496);
        } catch {
          chunkFPAJGGOCValue925 = undefined;
        }
        return (
          chunkFPAJGGOCValue925 === undefined &&
            chunkFPAJGGOCValue924 &&
            (chunkFPAJGGOCValue925 = this.construct()),
          chunkFPAJGGOCValue925
        );
      };
    }
    extractHiddenTokens(chunkFPAJGGOCParam702) {
      let chunkFPAJGGOCValue1098 = this.lexerResult.hidden;
      if (!chunkFPAJGGOCValue1098.length) return [];
      let chunkFPAJGGOCValue1099 = chunkFPAJGGOCParam702.startOffset;
      for (
        let chunkFPAJGGOCValue1740 = 0;
        chunkFPAJGGOCValue1740 < chunkFPAJGGOCValue1098.length;
        chunkFPAJGGOCValue1740++
      )
        if (
          chunkFPAJGGOCValue1098[chunkFPAJGGOCValue1740].startOffset >
          chunkFPAJGGOCValue1099
        )
          return chunkFPAJGGOCValue1098.splice(0, chunkFPAJGGOCValue1740);
      return chunkFPAJGGOCValue1098.splice(0, chunkFPAJGGOCValue1098.length);
    }
    consume(
      chunkFPAJGGOCParam190,
      chunkFPAJGGOCParam191,
      chunkFPAJGGOCParam192,
    ) {
      let chunkFPAJGGOCValue595 = this.wrapper.wrapConsume(
        chunkFPAJGGOCParam190,
        chunkFPAJGGOCParam191,
      );
      if (!this.isRecording() && this.isValidToken(chunkFPAJGGOCValue595)) {
        let chunkFPAJGGOCValue688 = this.extractHiddenTokens(
          chunkFPAJGGOCValue595,
        );
        this.nodeBuilder.addHiddenNodes(chunkFPAJGGOCValue688);
        let chunkFPAJGGOCValue689 = this.nodeBuilder.buildLeafNode(
            chunkFPAJGGOCValue595,
            chunkFPAJGGOCParam192,
          ),
          { assignment, isCrossRef } = this.getAssignment(
            chunkFPAJGGOCParam192,
          ),
          chunkFPAJGGOCValue690 = this.current;
        if (assignment) {
          let chunkFPAJGGOCValue1542 = chunkFPAJGGOCHelper39(
            chunkFPAJGGOCParam192,
          )
            ? chunkFPAJGGOCValue595.image
            : this.converter.convert(
                chunkFPAJGGOCValue595.image,
                chunkFPAJGGOCValue689,
              );
          this.assign(
            assignment.operator,
            assignment.feature,
            chunkFPAJGGOCValue1542,
            chunkFPAJGGOCValue689,
            isCrossRef,
          );
        } else if (chunkFPAJGGOCHelper291(chunkFPAJGGOCValue690)) {
          let chunkFPAJGGOCValue1559 = chunkFPAJGGOCValue595.image;
          chunkFPAJGGOCHelper39(chunkFPAJGGOCParam192) ||
            (chunkFPAJGGOCValue1559 = this.converter
              .convert(chunkFPAJGGOCValue1559, chunkFPAJGGOCValue689)
              .toString());
          chunkFPAJGGOCValue690.value += chunkFPAJGGOCValue1559;
        }
      }
    }
    isValidToken(chunkFPAJGGOCParam1005) {
      return (
        !chunkFPAJGGOCParam1005.isInsertedInRecovery &&
        !isNaN(chunkFPAJGGOCParam1005.startOffset) &&
        typeof chunkFPAJGGOCParam1005.endOffset == "number" &&
        !isNaN(chunkFPAJGGOCParam1005.endOffset)
      );
    }
    subrule(
      chunkFPAJGGOCParam628,
      chunkFPAJGGOCParam629,
      chunkFPAJGGOCParam630,
      chunkFPAJGGOCParam631,
      chunkFPAJGGOCParam632,
    ) {
      let chunkFPAJGGOCValue1049;
      !this.isRecording() &&
        !chunkFPAJGGOCParam630 &&
        (chunkFPAJGGOCValue1049 = this.nodeBuilder.buildCompositeNode(
          chunkFPAJGGOCParam631,
        ));
      let chunkFPAJGGOCValue1050 = this.wrapper.wrapSubrule(
        chunkFPAJGGOCParam628,
        chunkFPAJGGOCParam629,
        chunkFPAJGGOCParam632,
      );
      !this.isRecording() &&
        chunkFPAJGGOCValue1049 &&
        chunkFPAJGGOCValue1049.length > 0 &&
        this.performSubruleAssignment(
          chunkFPAJGGOCValue1050,
          chunkFPAJGGOCParam631,
          chunkFPAJGGOCValue1049,
        );
    }
    performSubruleAssignment(
      chunkFPAJGGOCParam403,
      chunkFPAJGGOCParam404,
      chunkFPAJGGOCParam405,
    ) {
      let { assignment, isCrossRef } = this.getAssignment(
        chunkFPAJGGOCParam404,
      );
      if (assignment)
        this.assign(
          assignment.operator,
          assignment.feature,
          chunkFPAJGGOCParam403,
          chunkFPAJGGOCParam405,
          isCrossRef,
        );
      else if (!assignment) {
        let chunkFPAJGGOCValue1183 = this.current;
        if (chunkFPAJGGOCHelper291(chunkFPAJGGOCValue1183))
          chunkFPAJGGOCValue1183.value += chunkFPAJGGOCParam403.toString();
        else if (
          typeof chunkFPAJGGOCParam403 == "object" &&
          chunkFPAJGGOCParam403
        ) {
          let chunkFPAJGGOCValue1647 = this.assignWithoutOverride(
            chunkFPAJGGOCParam403,
            chunkFPAJGGOCValue1183,
          );
          this.stack.pop();
          this.stack.push(chunkFPAJGGOCValue1647);
        }
      }
    }
    action(chunkFPAJGGOCParam372, chunkFPAJGGOCParam373) {
      if (!this.isRecording()) {
        let chunkFPAJGGOCValue846 = this.current;
        if (chunkFPAJGGOCParam373.feature && chunkFPAJGGOCParam373.operator) {
          chunkFPAJGGOCValue846 = this.construct();
          this.nodeBuilder.removeNode(chunkFPAJGGOCValue846.$cstNode);
          this.nodeBuilder
            .buildCompositeNode(chunkFPAJGGOCParam373)
            .content.push(chunkFPAJGGOCValue846.$cstNode);
          let chunkFPAJGGOCValue1015 = {
            $type: chunkFPAJGGOCParam372,
          };
          this.stack.push(chunkFPAJGGOCValue1015);
          this.assign(
            chunkFPAJGGOCParam373.operator,
            chunkFPAJGGOCParam373.feature,
            chunkFPAJGGOCValue846,
            chunkFPAJGGOCValue846.$cstNode,
            false,
          );
        } else chunkFPAJGGOCValue846.$type = chunkFPAJGGOCParam372;
      }
    }
    construct() {
      if (this.isRecording()) return;
      let chunkFPAJGGOCValue1029 = this.current;
      return (
        chunkFPAJGGOCHelper48(chunkFPAJGGOCValue1029),
        this.nodeBuilder.construct(chunkFPAJGGOCValue1029),
        this.stack.pop(),
        chunkFPAJGGOCHelper291(chunkFPAJGGOCValue1029)
          ? this.converter.convert(
              chunkFPAJGGOCValue1029.value,
              chunkFPAJGGOCValue1029.$cstNode,
            )
          : (chunkFPAJGGOCHelper57(this.astReflection, chunkFPAJGGOCValue1029),
            chunkFPAJGGOCValue1029)
      );
    }
    getAssignment(chunkFPAJGGOCParam724) {
      if (!this.assignmentMap.has(chunkFPAJGGOCParam724)) {
        let chunkFPAJGGOCValue1482 = chunkFPAJGGOCHelper49(
          chunkFPAJGGOCParam724,
          chunkFPAJGGOCHelper34,
        );
        this.assignmentMap.set(chunkFPAJGGOCParam724, {
          assignment: chunkFPAJGGOCValue1482,
          isCrossRef: chunkFPAJGGOCValue1482
            ? chunkFPAJGGOCHelper36(chunkFPAJGGOCValue1482.terminal)
            : false,
        });
      }
      return this.assignmentMap.get(chunkFPAJGGOCParam724);
    }
    assign(
      chunkFPAJGGOCParam406,
      chunkFPAJGGOCParam407,
      chunkFPAJGGOCParam408,
      chunkFPAJGGOCParam409,
      chunkFPAJGGOCParam410,
    ) {
      let chunkFPAJGGOCValue820 = this.current,
        chunkFPAJGGOCValue821;
      switch (
        ((chunkFPAJGGOCValue821 =
          chunkFPAJGGOCParam410 && typeof chunkFPAJGGOCParam408 == "string"
            ? this.linker.buildReference(
                chunkFPAJGGOCValue820,
                chunkFPAJGGOCParam407,
                chunkFPAJGGOCParam409,
                chunkFPAJGGOCParam408,
              )
            : chunkFPAJGGOCParam408),
        chunkFPAJGGOCParam406)
      ) {
        case "=":
          chunkFPAJGGOCValue820[chunkFPAJGGOCParam407] = chunkFPAJGGOCValue821;
          break;
        case "?=":
          chunkFPAJGGOCValue820[chunkFPAJGGOCParam407] = true;
          break;
        case "+=":
          Array.isArray(chunkFPAJGGOCValue820[chunkFPAJGGOCParam407]) ||
            (chunkFPAJGGOCValue820[chunkFPAJGGOCParam407] = []);
          chunkFPAJGGOCValue820[chunkFPAJGGOCParam407].push(
            chunkFPAJGGOCValue821,
          );
      }
    }
    assignWithoutOverride(chunkFPAJGGOCParam534, chunkFPAJGGOCParam535) {
      for (let [
        chunkFPAJGGOCValue1344,
        chunkFPAJGGOCValue1345,
      ] of Object.entries(chunkFPAJGGOCParam535)) {
        let chunkFPAJGGOCValue1484 =
          chunkFPAJGGOCParam534[chunkFPAJGGOCValue1344];
        chunkFPAJGGOCValue1484 === undefined
          ? (chunkFPAJGGOCParam534[chunkFPAJGGOCValue1344] =
              chunkFPAJGGOCValue1345)
          : Array.isArray(chunkFPAJGGOCValue1484) &&
            Array.isArray(chunkFPAJGGOCValue1345) &&
            (chunkFPAJGGOCValue1345.push(...chunkFPAJGGOCValue1484),
            (chunkFPAJGGOCParam534[chunkFPAJGGOCValue1344] =
              chunkFPAJGGOCValue1345));
      }
      let chunkFPAJGGOCValue966 = chunkFPAJGGOCParam534.$cstNode;
      return (
        chunkFPAJGGOCValue966 &&
          ((chunkFPAJGGOCValue966.astNode = undefined),
          (chunkFPAJGGOCParam534.$cstNode = undefined)),
        chunkFPAJGGOCParam534
      );
    }
    get definitionErrors() {
      return this.wrapper.definitionErrors;
    }
  },
  chunkFPAJGGOCValue195 = class {
    buildMismatchTokenMessage(chunkFPAJGGOCParam1601) {
      return chunkFPAJGGOCValue119.buildMismatchTokenMessage(
        chunkFPAJGGOCParam1601,
      );
    }
    buildNotAllInputParsedMessage(chunkFPAJGGOCParam1536) {
      return chunkFPAJGGOCValue119.buildNotAllInputParsedMessage(
        chunkFPAJGGOCParam1536,
      );
    }
    buildNoViableAltMessage(chunkFPAJGGOCParam1628) {
      return chunkFPAJGGOCValue119.buildNoViableAltMessage(
        chunkFPAJGGOCParam1628,
      );
    }
    buildEarlyExitMessage(chunkFPAJGGOCParam1660) {
      return chunkFPAJGGOCValue119.buildEarlyExitMessage(
        chunkFPAJGGOCParam1660,
      );
    }
  },
  chunkFPAJGGOCValue196 = class extends chunkFPAJGGOCValue195 {
    buildMismatchTokenMessage({ expected, actual }) {
      return `Expecting ${expected.LABEL ? "`" + expected.LABEL + "`" : expected.name.endsWith(":KW") ? `keyword '${expected.name.substring(0, expected.name.length - 3)}'` : `token of type '${expected.name}'`} but found \`${actual.image}\`.`;
    }
    buildNotAllInputParsedMessage({ firstRedundant }) {
      return `Expecting end of file but found \`${firstRedundant.image}\`.`;
    }
  },
  chunkFPAJGGOCValue197 = class extends chunkFPAJGGOCValue193 {
    constructor() {
      super(...arguments);
      this.tokens = [];
      this.elementStack = [];
      this.lastElementStack = [];
      this.nextTokenIndex = 0;
      this.stackSize = 0;
    }
    action() {}
    construct() {}
    parse(chunkFPAJGGOCParam413) {
      return (
        this.resetState(),
        (this.tokens = this.lexer.tokenize(chunkFPAJGGOCParam413, {
          mode: "partial",
        }).tokens),
        (this.wrapper.input = [...this.tokens]),
        this.mainRule.call(this.wrapper, {}),
        this.unorderedGroups.clear(),
        {
          tokens: this.tokens,
          elementStack: [...this.lastElementStack],
          tokenIndex: this.nextTokenIndex,
        }
      );
    }
    rule(chunkFPAJGGOCParam860, chunkFPAJGGOCParam861) {
      let chunkFPAJGGOCValue1256 = this.wrapper.DEFINE_RULE(
        chunkFPAJGGOCValue192(chunkFPAJGGOCParam860.name),
        this.startImplementation(chunkFPAJGGOCParam861).bind(this),
      );
      return (
        this.allRules.set(chunkFPAJGGOCParam860.name, chunkFPAJGGOCValue1256),
        chunkFPAJGGOCParam860.entry && (this.mainRule = chunkFPAJGGOCValue1256),
        chunkFPAJGGOCValue1256
      );
    }
    resetState() {
      this.elementStack = [];
      this.lastElementStack = [];
      this.nextTokenIndex = 0;
      this.stackSize = 0;
    }
    startImplementation(chunkFPAJGGOCParam978) {
      return (chunkFPAJGGOCParam1203) => {
        let chunkFPAJGGOCValue1512 = this.keepStackSize();
        try {
          chunkFPAJGGOCParam978(chunkFPAJGGOCParam1203);
        } finally {
          this.resetStackSize(chunkFPAJGGOCValue1512);
        }
      };
    }
    removeUnexpectedElements() {
      this.elementStack.splice(this.stackSize);
    }
    keepStackSize() {
      let chunkFPAJGGOCValue1694 = this.elementStack.length;
      return (
        (this.stackSize = chunkFPAJGGOCValue1694),
        chunkFPAJGGOCValue1694
      );
    }
    resetStackSize(chunkFPAJGGOCParam1553) {
      this.removeUnexpectedElements();
      this.stackSize = chunkFPAJGGOCParam1553;
    }
    consume(
      chunkFPAJGGOCParam882,
      chunkFPAJGGOCParam883,
      chunkFPAJGGOCParam884,
    ) {
      this.wrapper.wrapConsume(chunkFPAJGGOCParam882, chunkFPAJGGOCParam883);
      this.isRecording() ||
        ((this.lastElementStack = [
          ...this.elementStack,
          chunkFPAJGGOCParam884,
        ]),
        (this.nextTokenIndex = this.currIdx + 1));
    }
    subrule(
      chunkFPAJGGOCParam1415,
      chunkFPAJGGOCParam1416,
      chunkFPAJGGOCParam1417,
      chunkFPAJGGOCParam1418,
      chunkFPAJGGOCParam1419,
    ) {
      this.before(chunkFPAJGGOCParam1418);
      this.wrapper.wrapSubrule(
        chunkFPAJGGOCParam1415,
        chunkFPAJGGOCParam1416,
        chunkFPAJGGOCParam1419,
      );
      this.after(chunkFPAJGGOCParam1418);
    }
    before(chunkFPAJGGOCParam1689) {
      this.isRecording() || this.elementStack.push(chunkFPAJGGOCParam1689);
    }
    after(chunkFPAJGGOCParam1157) {
      if (!this.isRecording()) {
        let chunkFPAJGGOCValue1680 = this.elementStack.lastIndexOf(
          chunkFPAJGGOCParam1157,
        );
        chunkFPAJGGOCValue1680 >= 0 &&
          this.elementStack.splice(chunkFPAJGGOCValue1680);
      }
    }
    get currIdx() {
      return this.wrapper.currIdx;
    }
  },
  chunkFPAJGGOCValue198 = {
    recoveryEnabled: true,
    nodeLocationTracking: "full",
    skipValidations: true,
    errorMessageProvider: new chunkFPAJGGOCValue196(),
  },
  chunkFPAJGGOCValue199 = class extends chunkFPAJGGOCValue174 {
    constructor(chunkFPAJGGOCParam472, chunkFPAJGGOCParam473) {
      let chunkFPAJGGOCValue895 =
        chunkFPAJGGOCParam473 && "maxLookahead" in chunkFPAJGGOCParam473;
      super(
        chunkFPAJGGOCParam472,
        Object.assign(
          Object.assign(Object.assign({}, chunkFPAJGGOCValue198), {
            lookaheadStrategy: chunkFPAJGGOCValue895
              ? new chunkFPAJGGOCValue151({
                  maxLookahead: chunkFPAJGGOCParam473.maxLookahead,
                })
              : new chunkFPAJGGOCValue183({
                  logging: chunkFPAJGGOCParam473.skipValidations
                    ? () => {}
                    : undefined,
                }),
          }),
          chunkFPAJGGOCParam473,
        ),
      );
    }
    get IS_RECORDING() {
      return this.RECORDING_PHASE;
    }
    DEFINE_RULE(chunkFPAJGGOCParam1945, chunkFPAJGGOCParam1946) {
      return this.RULE(chunkFPAJGGOCParam1945, chunkFPAJGGOCParam1946);
    }
    wrapSelfAnalysis() {
      this.performSelfAnalysis();
    }
    wrapConsume(chunkFPAJGGOCParam1912, chunkFPAJGGOCParam1913) {
      return this.consume(chunkFPAJGGOCParam1912, chunkFPAJGGOCParam1913);
    }
    wrapSubrule(
      chunkFPAJGGOCParam1642,
      chunkFPAJGGOCParam1643,
      chunkFPAJGGOCParam1644,
    ) {
      return this.subrule(chunkFPAJGGOCParam1642, chunkFPAJGGOCParam1643, {
        ARGS: [chunkFPAJGGOCParam1644],
      });
    }
    wrapOr(chunkFPAJGGOCParam2121, chunkFPAJGGOCParam2122) {
      this.or(chunkFPAJGGOCParam2121, chunkFPAJGGOCParam2122);
    }
    wrapOption(chunkFPAJGGOCParam2012, chunkFPAJGGOCParam2013) {
      this.option(chunkFPAJGGOCParam2012, chunkFPAJGGOCParam2013);
    }
    wrapMany(chunkFPAJGGOCParam2095, chunkFPAJGGOCParam2096) {
      this.many(chunkFPAJGGOCParam2095, chunkFPAJGGOCParam2096);
    }
    wrapAtLeastOne(chunkFPAJGGOCParam1923, chunkFPAJGGOCParam1924) {
      this.atLeastOne(chunkFPAJGGOCParam1923, chunkFPAJGGOCParam1924);
    }
  };
function chunkFPAJGGOCHelper292(
  chunkFPAJGGOCParam1517,
  chunkFPAJGGOCParam1518,
  chunkFPAJGGOCParam1519,
) {
  return (
    $l(
      {
        parser: chunkFPAJGGOCParam1518,
        tokens: chunkFPAJGGOCParam1519,
        ruleNames: new Map(),
      },
      chunkFPAJGGOCParam1517,
    ),
    chunkFPAJGGOCParam1518
  );
}
function $l(chunkFPAJGGOCParam556, chunkFPAJGGOCParam557) {
  let chunkFPAJGGOCValue990 = chunkFPAJGGOCHelper72(
      chunkFPAJGGOCParam557,
      false,
    ),
    chunkFPAJGGOCValue991 = chunkFPAJGGOCHelper10(chunkFPAJGGOCParam557.rules)
      .filter(chunkFPAJGGOCHelper27)
      .filter((item) => chunkFPAJGGOCValue990.has(item));
  for (let chunkFPAJGGOCValue1285 of chunkFPAJGGOCValue991) {
    let chunkFPAJGGOCValue1351 = Object.assign(
      Object.assign({}, chunkFPAJGGOCParam556),
      {
        consume: 1,
        optional: 1,
        subrule: 1,
        many: 1,
        or: 1,
      },
    );
    chunkFPAJGGOCParam556.parser.rule(
      chunkFPAJGGOCValue1285,
      chunkFPAJGGOCHelper293(
        chunkFPAJGGOCValue1351,
        chunkFPAJGGOCValue1285.definition,
      ),
    );
  }
}
function chunkFPAJGGOCHelper293(
  chunkFPAJGGOCParam307,
  chunkFPAJGGOCParam308,
  chunkFPAJGGOCParam309 = false,
) {
  let chunkFPAJGGOCValue744;
  if (chunkFPAJGGOCHelper39(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper303(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper32(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper294(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper34(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper293(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308.terminal,
    );
  else if (chunkFPAJGGOCHelper36(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper302(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper41(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper295(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper33(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper298(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper45(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper299(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper38(chunkFPAJGGOCParam308))
    chunkFPAJGGOCValue744 = chunkFPAJGGOCHelper300(
      chunkFPAJGGOCParam307,
      chunkFPAJGGOCParam308,
    );
  else if (chunkFPAJGGOCHelper37(chunkFPAJGGOCParam308)) {
    let chunkFPAJGGOCValue1808 = chunkFPAJGGOCParam307.consume++;
    chunkFPAJGGOCValue744 = () =>
      chunkFPAJGGOCParam307.parser.consume(
        chunkFPAJGGOCValue1808,
        chunkFPAJGGOCValue118,
        chunkFPAJGGOCParam308,
      );
  } else
    throw new chunkFPAJGGOCValue9(
      chunkFPAJGGOCParam308.$cstNode,
      `Unexpected element type: ${chunkFPAJGGOCParam308.$type}`,
    );
  return chunkFPAJGGOCHelper304(
    chunkFPAJGGOCParam307,
    chunkFPAJGGOCParam309
      ? undefined
      : chunkFPAJGGOCHelper301(chunkFPAJGGOCParam308),
    chunkFPAJGGOCValue744,
    chunkFPAJGGOCParam308.cardinality,
  );
}
function chunkFPAJGGOCHelper294(
  chunkFPAJGGOCParam1645,
  chunkFPAJGGOCParam1646,
) {
  let chunkFPAJGGOCValue1797 = chunkFPAJGGOCHelper86(chunkFPAJGGOCParam1646);
  return () =>
    chunkFPAJGGOCParam1645.parser.action(
      chunkFPAJGGOCValue1797,
      chunkFPAJGGOCParam1646,
    );
}
function chunkFPAJGGOCHelper295(chunkFPAJGGOCParam388, chunkFPAJGGOCParam389) {
  let chunkFPAJGGOCValue803 = chunkFPAJGGOCParam389.rule.ref;
  if (chunkFPAJGGOCHelper27(chunkFPAJGGOCValue803)) {
    let chunkFPAJGGOCValue1376 = chunkFPAJGGOCParam388.subrule++,
      chunkFPAJGGOCValue1377 = chunkFPAJGGOCValue803.fragment,
      chunkFPAJGGOCValue1378 =
        chunkFPAJGGOCParam389.arguments.length > 0
          ? chunkFPAJGGOCHelper296(
              chunkFPAJGGOCValue803,
              chunkFPAJGGOCParam389.arguments,
            )
          : () => ({});
    return (chunkFPAJGGOCParam2064) =>
      chunkFPAJGGOCParam388.parser.subrule(
        chunkFPAJGGOCValue1376,
        chunkFPAJGGOCHelper305(chunkFPAJGGOCParam388, chunkFPAJGGOCValue803),
        chunkFPAJGGOCValue1377,
        chunkFPAJGGOCParam389,
        chunkFPAJGGOCValue1378(chunkFPAJGGOCParam2064),
      );
  } else if (chunkFPAJGGOCHelper30(chunkFPAJGGOCValue803)) {
    let chunkFPAJGGOCValue1707 = chunkFPAJGGOCParam388.consume++,
      chunkFPAJGGOCValue1708 = chunkFPAJGGOCHelper307(
        chunkFPAJGGOCParam388,
        chunkFPAJGGOCValue803.name,
      );
    return () =>
      chunkFPAJGGOCParam388.parser.consume(
        chunkFPAJGGOCValue1707,
        chunkFPAJGGOCValue1708,
        chunkFPAJGGOCParam389,
      );
  } else if (chunkFPAJGGOCValue803)
    chunkFPAJGGOCHelper18(chunkFPAJGGOCValue803);
  else
    throw new chunkFPAJGGOCValue9(
      chunkFPAJGGOCParam389.$cstNode,
      `Undefined rule: ${chunkFPAJGGOCParam389.rule.$refText}`,
    );
}
function chunkFPAJGGOCHelper296(chunkFPAJGGOCParam805, chunkFPAJGGOCParam806) {
  let chunkFPAJGGOCValue1210 = chunkFPAJGGOCParam806.map((item) =>
    chunkFPAJGGOCHelper297(item.value),
  );
  return (chunkFPAJGGOCParam1116) => {
    let chunkFPAJGGOCValue1457 = {};
    for (
      let chunkFPAJGGOCValue1639 = 0;
      chunkFPAJGGOCValue1639 < chunkFPAJGGOCValue1210.length;
      chunkFPAJGGOCValue1639++
    ) {
      let chunkFPAJGGOCValue1781 =
          chunkFPAJGGOCParam805.parameters[chunkFPAJGGOCValue1639],
        chunkFPAJGGOCValue1782 = chunkFPAJGGOCValue1210[chunkFPAJGGOCValue1639];
      chunkFPAJGGOCValue1457[chunkFPAJGGOCValue1781.name] =
        chunkFPAJGGOCValue1782(chunkFPAJGGOCParam1116);
    }
    return chunkFPAJGGOCValue1457;
  };
}
function chunkFPAJGGOCHelper297(chunkFPAJGGOCParam359) {
  if (chunkFPAJGGOCHelper22(chunkFPAJGGOCParam359)) {
    let chunkFPAJGGOCValue1766 = chunkFPAJGGOCHelper297(
        chunkFPAJGGOCParam359.left,
      ),
      chunkFPAJGGOCValue1767 = chunkFPAJGGOCHelper297(
        chunkFPAJGGOCParam359.right,
      );
    return (chunkFPAJGGOCParam2252) =>
      chunkFPAJGGOCValue1766(chunkFPAJGGOCParam2252) ||
      chunkFPAJGGOCValue1767(chunkFPAJGGOCParam2252);
  } else if (chunkFPAJGGOCHelper21(chunkFPAJGGOCParam359)) {
    let chunkFPAJGGOCValue1768 = chunkFPAJGGOCHelper297(
        chunkFPAJGGOCParam359.left,
      ),
      chunkFPAJGGOCValue1769 = chunkFPAJGGOCHelper297(
        chunkFPAJGGOCParam359.right,
      );
    return (chunkFPAJGGOCParam2253) =>
      chunkFPAJGGOCValue1768(chunkFPAJGGOCParam2253) &&
      chunkFPAJGGOCValue1769(chunkFPAJGGOCParam2253);
  } else if (chunkFPAJGGOCHelper25(chunkFPAJGGOCParam359)) {
    let chunkFPAJGGOCValue1847 = chunkFPAJGGOCHelper297(
      chunkFPAJGGOCParam359.value,
    );
    return (chunkFPAJGGOCParam2324) =>
      !chunkFPAJGGOCValue1847(chunkFPAJGGOCParam2324);
  } else if (chunkFPAJGGOCHelper26(chunkFPAJGGOCParam359)) {
    let chunkFPAJGGOCValue1749 = chunkFPAJGGOCParam359.parameter.ref.name;
    return (chunkFPAJGGOCParam2156) =>
      chunkFPAJGGOCParam2156 !== undefined &&
      chunkFPAJGGOCParam2156[chunkFPAJGGOCValue1749] === true;
  } else if (chunkFPAJGGOCHelper20(chunkFPAJGGOCParam359)) {
    let chunkFPAJGGOCValue1858 = !!chunkFPAJGGOCParam359.true;
    return () => chunkFPAJGGOCValue1858;
  }
  chunkFPAJGGOCHelper18(chunkFPAJGGOCParam359);
}
function chunkFPAJGGOCHelper298(chunkFPAJGGOCParam328, chunkFPAJGGOCParam329) {
  if (chunkFPAJGGOCParam329.elements.length === 1)
    return chunkFPAJGGOCHelper293(
      chunkFPAJGGOCParam328,
      chunkFPAJGGOCParam329.elements[0],
    );
  {
    let chunkFPAJGGOCValue855 = [];
    for (let chunkFPAJGGOCValue1569 of chunkFPAJGGOCParam329.elements) {
      let chunkFPAJGGOCValue1683 = {
          ALT: chunkFPAJGGOCHelper293(
            chunkFPAJGGOCParam328,
            chunkFPAJGGOCValue1569,
            true,
          ),
        },
        chunkFPAJGGOCValue1684 = chunkFPAJGGOCHelper301(chunkFPAJGGOCValue1569);
      chunkFPAJGGOCValue1684 &&
        (chunkFPAJGGOCValue1683.GATE = chunkFPAJGGOCHelper297(
          chunkFPAJGGOCValue1684,
        ));
      chunkFPAJGGOCValue855.push(chunkFPAJGGOCValue1683);
    }
    let chunkFPAJGGOCValue856 = chunkFPAJGGOCParam328.or++;
    return (chunkFPAJGGOCParam905) =>
      chunkFPAJGGOCParam328.parser.alternatives(
        chunkFPAJGGOCValue856,
        chunkFPAJGGOCValue855.map((item) => {
          let chunkFPAJGGOCValue1552 = {
              ALT: () => item.ALT(chunkFPAJGGOCParam905),
            },
            chunkFPAJGGOCValue1553 = item.GATE;
          return (
            chunkFPAJGGOCValue1553 &&
              (chunkFPAJGGOCValue1552.GATE = () =>
                chunkFPAJGGOCValue1553(chunkFPAJGGOCParam905)),
            chunkFPAJGGOCValue1552
          );
        }),
      );
  }
}
function chunkFPAJGGOCHelper299(chunkFPAJGGOCParam75, chunkFPAJGGOCParam76) {
  if (chunkFPAJGGOCParam76.elements.length === 1)
    return chunkFPAJGGOCHelper293(
      chunkFPAJGGOCParam75,
      chunkFPAJGGOCParam76.elements[0],
    );
  let chunkFPAJGGOCValue481 = [];
  for (let chunkFPAJGGOCValue1604 of chunkFPAJGGOCParam76.elements) {
    let chunkFPAJGGOCValue1711 = {
        ALT: chunkFPAJGGOCHelper293(
          chunkFPAJGGOCParam75,
          chunkFPAJGGOCValue1604,
          true,
        ),
      },
      chunkFPAJGGOCValue1712 = chunkFPAJGGOCHelper301(chunkFPAJGGOCValue1604);
    chunkFPAJGGOCValue1712 &&
      (chunkFPAJGGOCValue1711.GATE = chunkFPAJGGOCHelper297(
        chunkFPAJGGOCValue1712,
      ));
    chunkFPAJGGOCValue481.push(chunkFPAJGGOCValue1711);
  }
  let chunkFPAJGGOCValue482 = chunkFPAJGGOCParam75.or++,
    chunkFPAJGGOCValue483 = (chunkFPAJGGOCParam1966, chunkFPAJGGOCParam1967) =>
      `uGroup_${chunkFPAJGGOCParam1966}_${chunkFPAJGGOCParam1967.getRuleStack().join("-")}`,
    chunkFPAJGGOCValue484 = chunkFPAJGGOCHelper304(
      chunkFPAJGGOCParam75,
      chunkFPAJGGOCHelper301(chunkFPAJGGOCParam76),
      (chunkFPAJGGOCParam189) =>
        chunkFPAJGGOCParam75.parser.alternatives(
          chunkFPAJGGOCValue482,
          chunkFPAJGGOCValue481.map((item, index) => {
            let chunkFPAJGGOCValue633 = {
                ALT: () => true,
              },
              chunkFPAJGGOCValue634 = chunkFPAJGGOCParam75.parser;
            chunkFPAJGGOCValue633.ALT = () => {
              if (
                (item.ALT(chunkFPAJGGOCParam189),
                !chunkFPAJGGOCValue634.isRecording())
              ) {
                let chunkFPAJGGOCValue1230 = chunkFPAJGGOCValue483(
                  chunkFPAJGGOCValue482,
                  chunkFPAJGGOCValue634,
                );
                chunkFPAJGGOCValue634.unorderedGroups.get(
                  chunkFPAJGGOCValue1230,
                ) ||
                  chunkFPAJGGOCValue634.unorderedGroups.set(
                    chunkFPAJGGOCValue1230,
                    [],
                  );
                let chunkFPAJGGOCValue1231 =
                  chunkFPAJGGOCValue634.unorderedGroups.get(
                    chunkFPAJGGOCValue1230,
                  );
                chunkFPAJGGOCValue1231?.[index] === undefined &&
                  (chunkFPAJGGOCValue1231[index] = true);
              }
            };
            let chunkFPAJGGOCValue635 = item.GATE;
            return (
              chunkFPAJGGOCValue635
                ? (chunkFPAJGGOCValue633.GATE = () =>
                    chunkFPAJGGOCValue635(chunkFPAJGGOCParam189))
                : (chunkFPAJGGOCValue633.GATE = () =>
                    !chunkFPAJGGOCValue634.unorderedGroups.get(
                      chunkFPAJGGOCValue483(
                        chunkFPAJGGOCValue482,
                        chunkFPAJGGOCValue634,
                      ),
                    )?.[index]),
              chunkFPAJGGOCValue633
            );
          }),
        ),
      "*",
    );
  return (chunkFPAJGGOCParam1360) => {
    chunkFPAJGGOCValue484(chunkFPAJGGOCParam1360);
    chunkFPAJGGOCParam75.parser.isRecording() ||
      chunkFPAJGGOCParam75.parser.unorderedGroups.delete(
        chunkFPAJGGOCValue483(
          chunkFPAJGGOCValue482,
          chunkFPAJGGOCParam75.parser,
        ),
      );
  };
}
function chunkFPAJGGOCHelper300(
  chunkFPAJGGOCParam1420,
  chunkFPAJGGOCParam1421,
) {
  let chunkFPAJGGOCValue1686 = chunkFPAJGGOCParam1421.elements.map((item) =>
    chunkFPAJGGOCHelper293(chunkFPAJGGOCParam1420, item),
  );
  return (chunkFPAJGGOCParam2181) =>
    chunkFPAJGGOCValue1686.forEach((item) => item(chunkFPAJGGOCParam2181));
}
function chunkFPAJGGOCHelper301(chunkFPAJGGOCParam1934) {
  if (chunkFPAJGGOCHelper38(chunkFPAJGGOCParam1934))
    return chunkFPAJGGOCParam1934.guardCondition;
}
function chunkFPAJGGOCHelper302(
  chunkFPAJGGOCParam154,
  chunkFPAJGGOCParam155,
  chunkFPAJGGOCParam156 = chunkFPAJGGOCParam155.terminal,
) {
  if (!chunkFPAJGGOCParam156) {
    if (!chunkFPAJGGOCParam155.type.ref)
      throw Error(
        "Could not resolve reference to type: " +
          chunkFPAJGGOCParam155.type.$refText,
      );
    let chunkFPAJGGOCValue1122 = chunkFPAJGGOCHelper81(
      chunkFPAJGGOCParam155.type.ref,
    )?.terminal;
    if (!chunkFPAJGGOCValue1122)
      throw Error(
        "Could not find name assignment for type: " +
          chunkFPAJGGOCHelper86(chunkFPAJGGOCParam155.type.ref),
      );
    return chunkFPAJGGOCHelper302(
      chunkFPAJGGOCParam154,
      chunkFPAJGGOCParam155,
      chunkFPAJGGOCValue1122,
    );
  } else if (
    chunkFPAJGGOCHelper41(chunkFPAJGGOCParam156) &&
    chunkFPAJGGOCHelper27(chunkFPAJGGOCParam156.rule.ref)
  ) {
    let chunkFPAJGGOCValue1656 = chunkFPAJGGOCParam156.rule.ref,
      chunkFPAJGGOCValue1657 = chunkFPAJGGOCParam154.subrule++;
    return (chunkFPAJGGOCParam2090) =>
      chunkFPAJGGOCParam154.parser.subrule(
        chunkFPAJGGOCValue1657,
        chunkFPAJGGOCHelper305(chunkFPAJGGOCParam154, chunkFPAJGGOCValue1656),
        false,
        chunkFPAJGGOCParam155,
        chunkFPAJGGOCParam2090,
      );
  } else if (
    chunkFPAJGGOCHelper41(chunkFPAJGGOCParam156) &&
    chunkFPAJGGOCHelper30(chunkFPAJGGOCParam156.rule.ref)
  ) {
    let chunkFPAJGGOCValue1667 = chunkFPAJGGOCParam154.consume++,
      chunkFPAJGGOCValue1668 = chunkFPAJGGOCHelper307(
        chunkFPAJGGOCParam154,
        chunkFPAJGGOCParam156.rule.ref.name,
      );
    return () =>
      chunkFPAJGGOCParam154.parser.consume(
        chunkFPAJGGOCValue1667,
        chunkFPAJGGOCValue1668,
        chunkFPAJGGOCParam155,
      );
  } else if (chunkFPAJGGOCHelper39(chunkFPAJGGOCParam156)) {
    let chunkFPAJGGOCValue1700 = chunkFPAJGGOCParam154.consume++,
      chunkFPAJGGOCValue1701 = chunkFPAJGGOCHelper307(
        chunkFPAJGGOCParam154,
        chunkFPAJGGOCParam156.value,
      );
    return () =>
      chunkFPAJGGOCParam154.parser.consume(
        chunkFPAJGGOCValue1700,
        chunkFPAJGGOCValue1701,
        chunkFPAJGGOCParam155,
      );
  } else throw Error("Could not build cross reference parser");
}
function chunkFPAJGGOCHelper303(
  chunkFPAJGGOCParam1009,
  chunkFPAJGGOCParam1010,
) {
  let chunkFPAJGGOCValue1368 = chunkFPAJGGOCParam1009.consume++,
    chunkFPAJGGOCValue1369 =
      chunkFPAJGGOCParam1009.tokens[chunkFPAJGGOCParam1010.value];
  if (!chunkFPAJGGOCValue1369)
    throw Error(
      "Could not find token for keyword: " + chunkFPAJGGOCParam1010.value,
    );
  return () =>
    chunkFPAJGGOCParam1009.parser.consume(
      chunkFPAJGGOCValue1368,
      chunkFPAJGGOCValue1369,
      chunkFPAJGGOCParam1010,
    );
}
function chunkFPAJGGOCHelper304(
  chunkFPAJGGOCParam98,
  chunkFPAJGGOCParam99,
  chunkFPAJGGOCParam100,
  chunkFPAJGGOCParam101,
) {
  let chunkFPAJGGOCValue521 =
    chunkFPAJGGOCParam99 && chunkFPAJGGOCHelper297(chunkFPAJGGOCParam99);
  if (!chunkFPAJGGOCParam101)
    if (chunkFPAJGGOCValue521) {
      let chunkFPAJGGOCValue1352 = chunkFPAJGGOCParam98.or++;
      return (chunkFPAJGGOCParam1221) =>
        chunkFPAJGGOCParam98.parser.alternatives(chunkFPAJGGOCValue1352, [
          {
            ALT: () => chunkFPAJGGOCParam100(chunkFPAJGGOCParam1221),
            GATE: () => chunkFPAJGGOCValue521(chunkFPAJGGOCParam1221),
          },
          {
            ALT: chunkFPAJGGOCHelper241(),
            GATE: () => !chunkFPAJGGOCValue521(chunkFPAJGGOCParam1221),
          },
        ]);
    } else return chunkFPAJGGOCParam100;
  if (chunkFPAJGGOCParam101 === "*") {
    let chunkFPAJGGOCValue1619 = chunkFPAJGGOCParam98.many++;
    return (chunkFPAJGGOCParam1608) =>
      chunkFPAJGGOCParam98.parser.many(chunkFPAJGGOCValue1619, {
        DEF: () => chunkFPAJGGOCParam100(chunkFPAJGGOCParam1608),
        GATE: chunkFPAJGGOCValue521
          ? () => chunkFPAJGGOCValue521(chunkFPAJGGOCParam1608)
          : undefined,
      });
  } else if (chunkFPAJGGOCParam101 === "+") {
    let chunkFPAJGGOCValue908 = chunkFPAJGGOCParam98.many++;
    if (chunkFPAJGGOCValue521) {
      let chunkFPAJGGOCValue1106 = chunkFPAJGGOCParam98.or++;
      return (chunkFPAJGGOCParam848) =>
        chunkFPAJGGOCParam98.parser.alternatives(chunkFPAJGGOCValue1106, [
          {
            ALT: () =>
              chunkFPAJGGOCParam98.parser.atLeastOne(chunkFPAJGGOCValue908, {
                DEF: () => chunkFPAJGGOCParam100(chunkFPAJGGOCParam848),
              }),
            GATE: () => chunkFPAJGGOCValue521(chunkFPAJGGOCParam848),
          },
          {
            ALT: chunkFPAJGGOCHelper241(),
            GATE: () => !chunkFPAJGGOCValue521(chunkFPAJGGOCParam848),
          },
        ]);
    } else
      return (chunkFPAJGGOCParam2005) =>
        chunkFPAJGGOCParam98.parser.atLeastOne(chunkFPAJGGOCValue908, {
          DEF: () => chunkFPAJGGOCParam100(chunkFPAJGGOCParam2005),
        });
  } else if (chunkFPAJGGOCParam101 === "?") {
    let chunkFPAJGGOCValue1581 = chunkFPAJGGOCParam98.optional++;
    return (chunkFPAJGGOCParam1579) =>
      chunkFPAJGGOCParam98.parser.optional(chunkFPAJGGOCValue1581, {
        DEF: () => chunkFPAJGGOCParam100(chunkFPAJGGOCParam1579),
        GATE: chunkFPAJGGOCValue521
          ? () => chunkFPAJGGOCValue521(chunkFPAJGGOCParam1579)
          : undefined,
      });
  } else chunkFPAJGGOCHelper18(chunkFPAJGGOCParam101);
}
function chunkFPAJGGOCHelper305(
  chunkFPAJGGOCParam1280,
  chunkFPAJGGOCParam1281,
) {
  let chunkFPAJGGOCValue1566 = chunkFPAJGGOCHelper306(
      chunkFPAJGGOCParam1280,
      chunkFPAJGGOCParam1281,
    ),
    chunkFPAJGGOCValue1567 = chunkFPAJGGOCParam1280.parser.getRule(
      chunkFPAJGGOCValue1566,
    );
  if (!chunkFPAJGGOCValue1567)
    throw Error(`Rule "${chunkFPAJGGOCValue1566}" not found."`);
  return chunkFPAJGGOCValue1567;
}
function chunkFPAJGGOCHelper306(chunkFPAJGGOCParam455, chunkFPAJGGOCParam456) {
  if (chunkFPAJGGOCHelper27(chunkFPAJGGOCParam456))
    return chunkFPAJGGOCParam456.name;
  if (chunkFPAJGGOCParam455.ruleNames.has(chunkFPAJGGOCParam456))
    return chunkFPAJGGOCParam455.ruleNames.get(chunkFPAJGGOCParam456);
  {
    let chunkFPAJGGOCValue1051 = chunkFPAJGGOCParam456,
      chunkFPAJGGOCValue1052 = chunkFPAJGGOCValue1051.$container,
      chunkFPAJGGOCValue1053 = chunkFPAJGGOCParam456.$type;
    for (; !chunkFPAJGGOCHelper27(chunkFPAJGGOCValue1052); ) {
      (chunkFPAJGGOCHelper38(chunkFPAJGGOCValue1052) ||
        chunkFPAJGGOCHelper33(chunkFPAJGGOCValue1052) ||
        chunkFPAJGGOCHelper45(chunkFPAJGGOCValue1052)) &&
        (chunkFPAJGGOCValue1053 =
          chunkFPAJGGOCValue1052.elements
            .indexOf(chunkFPAJGGOCValue1051)
            .toString() +
          ":" +
          chunkFPAJGGOCValue1053);
      chunkFPAJGGOCValue1051 = chunkFPAJGGOCValue1052;
      chunkFPAJGGOCValue1052 = chunkFPAJGGOCValue1052.$container;
    }
    return (
      (chunkFPAJGGOCValue1053 =
        chunkFPAJGGOCValue1052.name + ":" + chunkFPAJGGOCValue1053),
      chunkFPAJGGOCParam455.ruleNames.set(
        chunkFPAJGGOCParam456,
        chunkFPAJGGOCValue1053,
      ),
      chunkFPAJGGOCValue1053
    );
  }
}
function chunkFPAJGGOCHelper307(
  chunkFPAJGGOCParam1401,
  chunkFPAJGGOCParam1402,
) {
  let chunkFPAJGGOCValue1674 =
    chunkFPAJGGOCParam1401.tokens[chunkFPAJGGOCParam1402];
  if (!chunkFPAJGGOCValue1674)
    throw Error(`Token "${chunkFPAJGGOCParam1402}" not found."`);
  return chunkFPAJGGOCValue1674;
}
function chunkFPAJGGOCHelper308(chunkFPAJGGOCParam1273) {
  let chunkFPAJGGOCValue1560 = chunkFPAJGGOCParam1273.Grammar,
    chunkFPAJGGOCValue1561 = chunkFPAJGGOCParam1273.parser.Lexer,
    chunkFPAJGGOCValue1562 = new chunkFPAJGGOCValue197(chunkFPAJGGOCParam1273);
  return (
    chunkFPAJGGOCHelper292(
      chunkFPAJGGOCValue1560,
      chunkFPAJGGOCValue1562,
      chunkFPAJGGOCValue1561.definition,
    ),
    chunkFPAJGGOCValue1562.finalize(),
    chunkFPAJGGOCValue1562
  );
}
function chunkFPAJGGOCHelper309(chunkFPAJGGOCParam1844) {
  let chunkFPAJGGOCValue1832 = _u(chunkFPAJGGOCParam1844);
  return (chunkFPAJGGOCValue1832.finalize(), chunkFPAJGGOCValue1832);
}
function _u(chunkFPAJGGOCParam1422) {
  let chunkFPAJGGOCValue1687 = chunkFPAJGGOCParam1422.Grammar,
    chunkFPAJGGOCValue1688 = chunkFPAJGGOCParam1422.parser.Lexer;
  return chunkFPAJGGOCHelper292(
    chunkFPAJGGOCValue1687,
    new chunkFPAJGGOCValue194(chunkFPAJGGOCParam1422),
    chunkFPAJGGOCValue1688.definition,
  );
}
var chunkFPAJGGOCValue200 = class {
    constructor() {
      this.diagnostics = [];
    }
    buildTokens(chunkFPAJGGOCParam493, chunkFPAJGGOCParam494) {
      let chunkFPAJGGOCValue920 = chunkFPAJGGOCHelper10(
          chunkFPAJGGOCHelper72(chunkFPAJGGOCParam493, false),
        ),
        chunkFPAJGGOCValue921 = this.buildTerminalTokens(chunkFPAJGGOCValue920),
        chunkFPAJGGOCValue922 = this.buildKeywordTokens(
          chunkFPAJGGOCValue920,
          chunkFPAJGGOCValue921,
          chunkFPAJGGOCParam494,
        );
      return (
        chunkFPAJGGOCValue921.forEach((item) => {
          let chunkFPAJGGOCValue1472 = item.PATTERN;
          typeof chunkFPAJGGOCValue1472 == "object" &&
          chunkFPAJGGOCValue1472 &&
          "test" in chunkFPAJGGOCValue1472 &&
          chunkFPAJGGOCHelper65(chunkFPAJGGOCValue1472)
            ? chunkFPAJGGOCValue922.unshift(item)
            : chunkFPAJGGOCValue922.push(item);
        }),
        chunkFPAJGGOCValue922
      );
    }
    flushLexingReport(chunkFPAJGGOCParam1609) {
      return {
        diagnostics: this.popDiagnostics(),
      };
    }
    popDiagnostics() {
      let chunkFPAJGGOCValue1689 = [...this.diagnostics];
      return ((this.diagnostics = []), chunkFPAJGGOCValue1689);
    }
    buildTerminalTokens(chunkFPAJGGOCParam1078) {
      return chunkFPAJGGOCParam1078
        .filter(chunkFPAJGGOCHelper30)
        .filter((item) => !item.fragment)
        .map((item) => this.buildTerminalToken(item))
        .toArray();
    }
    buildTerminalToken(chunkFPAJGGOCParam554) {
      let chunkFPAJGGOCValue987 = chunkFPAJGGOCHelper89(chunkFPAJGGOCParam554),
        chunkFPAJGGOCValue988 = this.requiresCustomPattern(
          chunkFPAJGGOCValue987,
        )
          ? this.regexPatternFunction(chunkFPAJGGOCValue987)
          : chunkFPAJGGOCValue987,
        chunkFPAJGGOCValue989 = {
          name: chunkFPAJGGOCParam554.name,
          PATTERN: chunkFPAJGGOCValue988,
        };
      return (
        typeof chunkFPAJGGOCValue988 == "function" &&
          (chunkFPAJGGOCValue989.LINE_BREAKS = true),
        chunkFPAJGGOCParam554.hidden &&
          (chunkFPAJGGOCValue989.GROUP = chunkFPAJGGOCHelper65(
            chunkFPAJGGOCValue987,
          )
            ? chunkFPAJGGOCValue109.SKIPPED
            : "hidden"),
        chunkFPAJGGOCValue989
      );
    }
    requiresCustomPattern(chunkFPAJGGOCParam1067) {
      return chunkFPAJGGOCParam1067.flags.includes("u") ||
        chunkFPAJGGOCParam1067.flags.includes("s")
        ? true
        : !!(
            chunkFPAJGGOCParam1067.source.includes("?<=") ||
            chunkFPAJGGOCParam1067.source.includes("?<!")
          );
    }
    regexPatternFunction(chunkFPAJGGOCParam1292) {
      let chunkFPAJGGOCValue1576 = new RegExp(
        chunkFPAJGGOCParam1292,
        chunkFPAJGGOCParam1292.flags + "y",
      );
      return (chunkFPAJGGOCParam2135, chunkFPAJGGOCParam2136) => (
        (chunkFPAJGGOCValue1576.lastIndex = chunkFPAJGGOCParam2136),
        chunkFPAJGGOCValue1576.exec(chunkFPAJGGOCParam2135)
      );
    }
    buildKeywordTokens(
      chunkFPAJGGOCParam603,
      chunkFPAJGGOCParam604,
      chunkFPAJGGOCParam605,
    ) {
      return chunkFPAJGGOCParam603
        .filter(chunkFPAJGGOCHelper27)
        .flatMap((item) =>
          chunkFPAJGGOCHelper53(item).filter(chunkFPAJGGOCHelper39),
        )
        .distinct((chunkFPAJGGOCParam2305) => chunkFPAJGGOCParam2305.value)
        .toArray()
        .sort(
          (chunkFPAJGGOCParam2123, chunkFPAJGGOCParam2124) =>
            chunkFPAJGGOCParam2124.value.length -
            chunkFPAJGGOCParam2123.value.length,
        )
        .map((item) =>
          this.buildKeywordToken(
            item,
            chunkFPAJGGOCParam604,
            !!chunkFPAJGGOCParam605?.caseInsensitive,
          ),
        );
    }
    buildKeywordToken(
      chunkFPAJGGOCParam815,
      chunkFPAJGGOCParam816,
      chunkFPAJGGOCParam817,
    ) {
      let chunkFPAJGGOCValue1222 = this.buildKeywordPattern(
          chunkFPAJGGOCParam815,
          chunkFPAJGGOCParam817,
        ),
        chunkFPAJGGOCValue1223 = {
          name: chunkFPAJGGOCParam815.value,
          PATTERN: chunkFPAJGGOCValue1222,
          LONGER_ALT: this.findLongerAlt(
            chunkFPAJGGOCParam815,
            chunkFPAJGGOCParam816,
          ),
        };
      return (
        typeof chunkFPAJGGOCValue1222 == "function" &&
          (chunkFPAJGGOCValue1223.LINE_BREAKS = true),
        chunkFPAJGGOCValue1223
      );
    }
    buildKeywordPattern(chunkFPAJGGOCParam1580, chunkFPAJGGOCParam1581) {
      return chunkFPAJGGOCParam1581
        ? new RegExp(chunkFPAJGGOCHelper67(chunkFPAJGGOCParam1580.value))
        : chunkFPAJGGOCParam1580.value;
    }
    findLongerAlt(chunkFPAJGGOCParam1011, chunkFPAJGGOCParam1012) {
      return chunkFPAJGGOCParam1012.reduce((accumulator, current) => {
        let chunkFPAJGGOCValue1589 = current?.PATTERN;
        return (
          chunkFPAJGGOCValue1589?.source &&
            chunkFPAJGGOCHelper68(
              "^" + chunkFPAJGGOCValue1589.source + "$",
              chunkFPAJGGOCParam1011.value,
            ) &&
            accumulator.push(current),
          accumulator
        );
      }, []);
    }
  },
  chunkFPAJGGOCValue201 = class {
    convert(chunkFPAJGGOCParam707, chunkFPAJGGOCParam708) {
      let chunkFPAJGGOCValue1112 = chunkFPAJGGOCParam708.grammarSource;
      if (
        (chunkFPAJGGOCHelper36(chunkFPAJGGOCValue1112) &&
          (chunkFPAJGGOCValue1112 = _r(chunkFPAJGGOCValue1112)),
        chunkFPAJGGOCHelper41(chunkFPAJGGOCValue1112))
      ) {
        let chunkFPAJGGOCValue1497 = chunkFPAJGGOCValue1112.rule.ref;
        if (!chunkFPAJGGOCValue1497)
          throw Error("This cst node was not parsed by a rule.");
        return this.runConverter(
          chunkFPAJGGOCValue1497,
          chunkFPAJGGOCParam707,
          chunkFPAJGGOCParam708,
        );
      }
      return chunkFPAJGGOCParam707;
    }
    runConverter(
      chunkFPAJGGOCParam247,
      chunkFPAJGGOCParam248,
      chunkFPAJGGOCParam249,
    ) {
      switch (chunkFPAJGGOCParam247.name.toUpperCase()) {
        case "INT":
          return chunkFPAJGGOCValue202.convertInt(chunkFPAJGGOCParam248);
        case "STRING":
          return chunkFPAJGGOCValue202.convertString(chunkFPAJGGOCParam248);
        case "ID":
          return chunkFPAJGGOCValue202.convertID(chunkFPAJGGOCParam248);
      }
      switch (chunkFPAJGGOCHelper88(chunkFPAJGGOCParam247)?.toLowerCase()) {
        case "number":
          return chunkFPAJGGOCValue202.convertNumber(chunkFPAJGGOCParam248);
        case "boolean":
          return chunkFPAJGGOCValue202.convertBoolean(chunkFPAJGGOCParam248);
        case "bigint":
          return chunkFPAJGGOCValue202.convertBigint(chunkFPAJGGOCParam248);
        case "date":
          return chunkFPAJGGOCValue202.convertDate(chunkFPAJGGOCParam248);
        default:
          return chunkFPAJGGOCParam248;
      }
    }
  },
  chunkFPAJGGOCValue202;
(function (chunkFPAJGGOCParam85) {
  function chunkFPAJGGOCHelper377(chunkFPAJGGOCParam838) {
    let chunkFPAJGGOCValue1239 = "";
    for (
      let chunkFPAJGGOCValue1420 = 1;
      chunkFPAJGGOCValue1420 < chunkFPAJGGOCParam838.length - 1;
      chunkFPAJGGOCValue1420++
    ) {
      let chunkFPAJGGOCValue1582 = chunkFPAJGGOCParam838.charAt(
        chunkFPAJGGOCValue1420,
      );
      if (chunkFPAJGGOCValue1582 === "\\") {
        let chunkFPAJGGOCValue1844 = chunkFPAJGGOCParam838.charAt(
          ++chunkFPAJGGOCValue1420,
        );
        chunkFPAJGGOCValue1239 += chunkFPAJGGOCHelper378(
          chunkFPAJGGOCValue1844,
        );
      } else chunkFPAJGGOCValue1239 += chunkFPAJGGOCValue1582;
    }
    return chunkFPAJGGOCValue1239;
  }
  chunkFPAJGGOCParam85.convertString = chunkFPAJGGOCHelper377;
  function chunkFPAJGGOCHelper378(chunkFPAJGGOCParam529) {
    switch (chunkFPAJGGOCParam529) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return "\n";
      case "r":
        return "\r";
      case "t":
        return "\t";
      case "v":
        return "";
      case "0":
        return "\0";
      default:
        return chunkFPAJGGOCParam529;
    }
  }
  function chunkFPAJGGOCHelper379(chunkFPAJGGOCParam1690) {
    return chunkFPAJGGOCParam1690.charAt(0) === "^"
      ? chunkFPAJGGOCParam1690.substring(1)
      : chunkFPAJGGOCParam1690;
  }
  chunkFPAJGGOCParam85.convertID = chunkFPAJGGOCHelper379;
  function chunkFPAJGGOCHelper380(chunkFPAJGGOCParam2112) {
    return parseInt(chunkFPAJGGOCParam2112);
  }
  chunkFPAJGGOCParam85.convertInt = chunkFPAJGGOCHelper380;
  function chunkFPAJGGOCHelper381(chunkFPAJGGOCParam2125) {
    return BigInt(chunkFPAJGGOCParam2125);
  }
  chunkFPAJGGOCParam85.convertBigint = chunkFPAJGGOCHelper381;
  function chunkFPAJGGOCHelper382(chunkFPAJGGOCParam2113) {
    return new Date(chunkFPAJGGOCParam2113);
  }
  chunkFPAJGGOCParam85.convertDate = chunkFPAJGGOCHelper382;
  function chunkFPAJGGOCHelper383(chunkFPAJGGOCParam2126) {
    return Number(chunkFPAJGGOCParam2126);
  }
  chunkFPAJGGOCParam85.convertNumber = chunkFPAJGGOCHelper383;
  function chunkFPAJGGOCHelper384(chunkFPAJGGOCParam1914) {
    return chunkFPAJGGOCParam1914.toLowerCase() === "true";
  }
  chunkFPAJGGOCParam85.convertBoolean = chunkFPAJGGOCHelper384;
})((chunkFPAJGGOCValue202 ||= {}));
var chunkFPAJGGOCValue203 = chunkR({});
chunkI(chunkFPAJGGOCValue203, chunkS(mainN(), 1));
function chunkFPAJGGOCHelper310() {
  return new Promise((chunkFPAJGGOCParam1611) => {
    typeof setImmediate > "u"
      ? setTimeout(chunkFPAJGGOCParam1611, 0)
      : setImmediate(chunkFPAJGGOCParam1611);
  });
}
var chunkFPAJGGOCValue204 = 0;
function chunkFPAJGGOCHelper311() {
  return (
    (chunkFPAJGGOCValue204 = performance.now()),
    new chunkFPAJGGOCValue203.CancellationTokenSource()
  );
}
var chunkFPAJGGOCValue206 = Symbol("OperationCancelled");
function chunkFPAJGGOCHelper312(chunkFPAJGGOCParam2148) {
  return chunkFPAJGGOCParam2148 === chunkFPAJGGOCValue206;
}
async function chunkFPAJGGOCHelper313(chunkFPAJGGOCParam819) {
  if (chunkFPAJGGOCParam819 === chunkFPAJGGOCValue203.CancellationToken.None)
    return;
  let chunkFPAJGGOCValue1225 = performance.now();
  if (
    (chunkFPAJGGOCValue1225 - chunkFPAJGGOCValue204 >= 10 &&
      ((chunkFPAJGGOCValue204 = chunkFPAJGGOCValue1225),
      await chunkFPAJGGOCHelper310(),
      (chunkFPAJGGOCValue204 = performance.now())),
    chunkFPAJGGOCParam819.isCancellationRequested)
  )
    throw chunkFPAJGGOCValue206;
}
var chunkFPAJGGOCValue207 = class {
    constructor() {
      this.promise = new Promise(
        (chunkFPAJGGOCParam1356, chunkFPAJGGOCParam1357) => {
          this.resolve = (chunkFPAJGGOCParam2254) => (
            chunkFPAJGGOCParam1356(chunkFPAJGGOCParam2254),
            this
          );
          this.reject = (chunkFPAJGGOCParam2255) => (
            chunkFPAJGGOCParam1357(chunkFPAJGGOCParam2255),
            this
          );
        },
      );
    }
  },
  chunkFPAJGGOCValue208;
(() => {
  var chunkFPAJGGOCValue310 = {
      470: (chunkFPAJGGOCParam1) => {
        function chunkFPAJGGOCHelper366(chunkFPAJGGOCParam1062) {
          if (typeof chunkFPAJGGOCParam1062 != "string")
            throw TypeError(
              "Path must be a string. Received " +
                JSON.stringify(chunkFPAJGGOCParam1062),
            );
        }
        function chunkFPAJGGOCHelper367(
          chunkFPAJGGOCParam24,
          chunkFPAJGGOCParam25,
        ) {
          for (
            var chunkFPAJGGOCValue412,
              chunkFPAJGGOCValue413 = "",
              chunkFPAJGGOCValue414 = 0,
              chunkFPAJGGOCValue415 = -1,
              chunkFPAJGGOCValue416 = 0,
              chunkFPAJGGOCValue417 = 0;
            chunkFPAJGGOCValue417 <= chunkFPAJGGOCParam24.length;
            ++chunkFPAJGGOCValue417
          ) {
            if (chunkFPAJGGOCValue417 < chunkFPAJGGOCParam24.length)
              chunkFPAJGGOCValue412 = chunkFPAJGGOCParam24.charCodeAt(
                chunkFPAJGGOCValue417,
              );
            else {
              if (chunkFPAJGGOCValue412 === 47) break;
              chunkFPAJGGOCValue412 = 47;
            }
            if (chunkFPAJGGOCValue412 === 47) {
              if (
                !(
                  chunkFPAJGGOCValue415 === chunkFPAJGGOCValue417 - 1 ||
                  chunkFPAJGGOCValue416 === 1
                )
              )
                if (
                  chunkFPAJGGOCValue415 !== chunkFPAJGGOCValue417 - 1 &&
                  chunkFPAJGGOCValue416 === 2
                ) {
                  if (
                    chunkFPAJGGOCValue413.length < 2 ||
                    chunkFPAJGGOCValue414 !== 2 ||
                    chunkFPAJGGOCValue413.charCodeAt(
                      chunkFPAJGGOCValue413.length - 1,
                    ) !== 46 ||
                    chunkFPAJGGOCValue413.charCodeAt(
                      chunkFPAJGGOCValue413.length - 2,
                    ) !== 46
                  ) {
                    if (chunkFPAJGGOCValue413.length > 2) {
                      var chunkFPAJGGOCValue418 =
                        chunkFPAJGGOCValue413.lastIndexOf("/");
                      if (
                        chunkFPAJGGOCValue418 !==
                        chunkFPAJGGOCValue413.length - 1
                      ) {
                        chunkFPAJGGOCValue418 === -1
                          ? ((chunkFPAJGGOCValue413 = ""),
                            (chunkFPAJGGOCValue414 = 0))
                          : (chunkFPAJGGOCValue414 =
                              (chunkFPAJGGOCValue413 =
                                chunkFPAJGGOCValue413.slice(
                                  0,
                                  chunkFPAJGGOCValue418,
                                )).length -
                              1 -
                              chunkFPAJGGOCValue413.lastIndexOf("/"));
                        chunkFPAJGGOCValue415 = chunkFPAJGGOCValue417;
                        chunkFPAJGGOCValue416 = 0;
                        continue;
                      }
                    } else if (
                      chunkFPAJGGOCValue413.length === 2 ||
                      chunkFPAJGGOCValue413.length === 1
                    ) {
                      chunkFPAJGGOCValue413 = "";
                      chunkFPAJGGOCValue414 = 0;
                      chunkFPAJGGOCValue415 = chunkFPAJGGOCValue417;
                      chunkFPAJGGOCValue416 = 0;
                      continue;
                    }
                  }
                  chunkFPAJGGOCParam25 &&
                    (chunkFPAJGGOCValue413.length > 0
                      ? (chunkFPAJGGOCValue413 += "/..")
                      : (chunkFPAJGGOCValue413 = ".."),
                    (chunkFPAJGGOCValue414 = 2));
                } else {
                  chunkFPAJGGOCValue413.length > 0
                    ? (chunkFPAJGGOCValue413 +=
                        "/" +
                        chunkFPAJGGOCParam24.slice(
                          chunkFPAJGGOCValue415 + 1,
                          chunkFPAJGGOCValue417,
                        ))
                    : (chunkFPAJGGOCValue413 = chunkFPAJGGOCParam24.slice(
                        chunkFPAJGGOCValue415 + 1,
                        chunkFPAJGGOCValue417,
                      ));
                  chunkFPAJGGOCValue414 =
                    chunkFPAJGGOCValue417 - chunkFPAJGGOCValue415 - 1;
                }
              chunkFPAJGGOCValue415 = chunkFPAJGGOCValue417;
              chunkFPAJGGOCValue416 = 0;
            } else
              chunkFPAJGGOCValue412 === 46 && chunkFPAJGGOCValue416 !== -1
                ? ++chunkFPAJGGOCValue416
                : (chunkFPAJGGOCValue416 = -1);
          }
          return chunkFPAJGGOCValue413;
        }
        var chunkFPAJGGOCValue324 = {
          resolve: function () {
            for (
              var chunkFPAJGGOCValue650,
                chunkFPAJGGOCValue651 = "",
                chunkFPAJGGOCValue652 = false,
                chunkFPAJGGOCValue653 = arguments.length - 1;
              chunkFPAJGGOCValue653 >= -1 && !chunkFPAJGGOCValue652;
              chunkFPAJGGOCValue653--
            ) {
              var chunkFPAJGGOCValue654;
              chunkFPAJGGOCValue653 >= 0
                ? (chunkFPAJGGOCValue654 = arguments[chunkFPAJGGOCValue653])
                : (chunkFPAJGGOCValue650 === undefined &&
                    (chunkFPAJGGOCValue650 = process.cwd()),
                  (chunkFPAJGGOCValue654 = chunkFPAJGGOCValue650));
              chunkFPAJGGOCHelper366(chunkFPAJGGOCValue654);
              chunkFPAJGGOCValue654.length !== 0 &&
                ((chunkFPAJGGOCValue651 =
                  chunkFPAJGGOCValue654 + "/" + chunkFPAJGGOCValue651),
                (chunkFPAJGGOCValue652 =
                  chunkFPAJGGOCValue654.charCodeAt(0) === 47));
            }
            return (
              (chunkFPAJGGOCValue651 = chunkFPAJGGOCHelper367(
                chunkFPAJGGOCValue651,
                !chunkFPAJGGOCValue652,
              )),
              chunkFPAJGGOCValue652
                ? chunkFPAJGGOCValue651.length > 0
                  ? "/" + chunkFPAJGGOCValue651
                  : "/"
                : chunkFPAJGGOCValue651.length > 0
                  ? chunkFPAJGGOCValue651
                  : "."
            );
          },
          normalize: function (chunkFPAJGGOCParam505) {
            if (
              (chunkFPAJGGOCHelper366(chunkFPAJGGOCParam505),
              chunkFPAJGGOCParam505.length === 0)
            )
              return ".";
            var chunkFPAJGGOCValue933 =
                chunkFPAJGGOCParam505.charCodeAt(0) === 47,
              chunkFPAJGGOCValue934 =
                chunkFPAJGGOCParam505.charCodeAt(
                  chunkFPAJGGOCParam505.length - 1,
                ) === 47;
            return (
              (chunkFPAJGGOCParam505 = chunkFPAJGGOCHelper367(
                chunkFPAJGGOCParam505,
                !chunkFPAJGGOCValue933,
              )).length !== 0 ||
                chunkFPAJGGOCValue933 ||
                (chunkFPAJGGOCParam505 = "."),
              chunkFPAJGGOCParam505.length > 0 &&
                chunkFPAJGGOCValue934 &&
                (chunkFPAJGGOCParam505 += "/"),
              chunkFPAJGGOCValue933
                ? "/" + chunkFPAJGGOCParam505
                : chunkFPAJGGOCParam505
            );
          },
          isAbsolute: function (chunkFPAJGGOCParam1520) {
            return (
              chunkFPAJGGOCHelper366(chunkFPAJGGOCParam1520),
              chunkFPAJGGOCParam1520.length > 0 &&
                chunkFPAJGGOCParam1520.charCodeAt(0) === 47
            );
          },
          join: function () {
            if (arguments.length === 0) return ".";
            for (
              var chunkFPAJGGOCValue983, chunkFPAJGGOCValue984 = 0;
              chunkFPAJGGOCValue984 < arguments.length;
              ++chunkFPAJGGOCValue984
            ) {
              var chunkFPAJGGOCValue985 = arguments[chunkFPAJGGOCValue984];
              chunkFPAJGGOCHelper366(chunkFPAJGGOCValue985);
              chunkFPAJGGOCValue985.length > 0 &&
                (chunkFPAJGGOCValue983 === undefined
                  ? (chunkFPAJGGOCValue983 = chunkFPAJGGOCValue985)
                  : (chunkFPAJGGOCValue983 += "/" + chunkFPAJGGOCValue985));
            }
            return chunkFPAJGGOCValue983 === undefined
              ? "."
              : chunkFPAJGGOCValue324.normalize(chunkFPAJGGOCValue983);
          },
          relative: function (chunkFPAJGGOCParam60, chunkFPAJGGOCParam61) {
            if (
              (chunkFPAJGGOCHelper366(chunkFPAJGGOCParam60),
              chunkFPAJGGOCHelper366(chunkFPAJGGOCParam61),
              chunkFPAJGGOCParam60 === chunkFPAJGGOCParam61 ||
                (chunkFPAJGGOCParam60 =
                  chunkFPAJGGOCValue324.resolve(chunkFPAJGGOCParam60)) ===
                  (chunkFPAJGGOCParam61 =
                    chunkFPAJGGOCValue324.resolve(chunkFPAJGGOCParam61)))
            )
              return "";
            for (
              var chunkFPAJGGOCValue454 = 1;
              chunkFPAJGGOCValue454 < chunkFPAJGGOCParam60.length &&
              chunkFPAJGGOCParam60.charCodeAt(chunkFPAJGGOCValue454) === 47;
              ++chunkFPAJGGOCValue454
            );
            for (
              var chunkFPAJGGOCValue455 = chunkFPAJGGOCParam60.length,
                chunkFPAJGGOCValue456 =
                  chunkFPAJGGOCValue455 - chunkFPAJGGOCValue454,
                chunkFPAJGGOCValue457 = 1;
              chunkFPAJGGOCValue457 < chunkFPAJGGOCParam61.length &&
              chunkFPAJGGOCParam61.charCodeAt(chunkFPAJGGOCValue457) === 47;
              ++chunkFPAJGGOCValue457
            );
            for (
              var chunkFPAJGGOCValue458 =
                  chunkFPAJGGOCParam61.length - chunkFPAJGGOCValue457,
                chunkFPAJGGOCValue459 =
                  chunkFPAJGGOCValue456 < chunkFPAJGGOCValue458
                    ? chunkFPAJGGOCValue456
                    : chunkFPAJGGOCValue458,
                chunkFPAJGGOCValue460 = -1,
                chunkFPAJGGOCValue461 = 0;
              chunkFPAJGGOCValue461 <= chunkFPAJGGOCValue459;
              ++chunkFPAJGGOCValue461
            ) {
              if (chunkFPAJGGOCValue461 === chunkFPAJGGOCValue459) {
                if (chunkFPAJGGOCValue458 > chunkFPAJGGOCValue459) {
                  if (
                    chunkFPAJGGOCParam61.charCodeAt(
                      chunkFPAJGGOCValue457 + chunkFPAJGGOCValue461,
                    ) === 47
                  )
                    return chunkFPAJGGOCParam61.slice(
                      chunkFPAJGGOCValue457 + chunkFPAJGGOCValue461 + 1,
                    );
                  if (chunkFPAJGGOCValue461 === 0)
                    return chunkFPAJGGOCParam61.slice(
                      chunkFPAJGGOCValue457 + chunkFPAJGGOCValue461,
                    );
                } else
                  chunkFPAJGGOCValue456 > chunkFPAJGGOCValue459 &&
                    (chunkFPAJGGOCParam60.charCodeAt(
                      chunkFPAJGGOCValue454 + chunkFPAJGGOCValue461,
                    ) === 47
                      ? (chunkFPAJGGOCValue460 = chunkFPAJGGOCValue461)
                      : chunkFPAJGGOCValue461 === 0 &&
                        (chunkFPAJGGOCValue460 = 0));
                break;
              }
              var chunkFPAJGGOCValue462 = chunkFPAJGGOCParam60.charCodeAt(
                chunkFPAJGGOCValue454 + chunkFPAJGGOCValue461,
              );
              if (
                chunkFPAJGGOCValue462 !==
                chunkFPAJGGOCParam61.charCodeAt(
                  chunkFPAJGGOCValue457 + chunkFPAJGGOCValue461,
                )
              )
                break;
              chunkFPAJGGOCValue462 === 47 &&
                (chunkFPAJGGOCValue460 = chunkFPAJGGOCValue461);
            }
            var chunkFPAJGGOCValue463 = "";
            for (
              chunkFPAJGGOCValue461 =
                chunkFPAJGGOCValue454 + chunkFPAJGGOCValue460 + 1;
              chunkFPAJGGOCValue461 <= chunkFPAJGGOCValue455;
              ++chunkFPAJGGOCValue461
            )
              (chunkFPAJGGOCValue461 !== chunkFPAJGGOCValue455 &&
                chunkFPAJGGOCParam60.charCodeAt(chunkFPAJGGOCValue461) !==
                  47) ||
                (chunkFPAJGGOCValue463.length === 0
                  ? (chunkFPAJGGOCValue463 += "..")
                  : (chunkFPAJGGOCValue463 += "/.."));
            return chunkFPAJGGOCValue463.length > 0
              ? chunkFPAJGGOCValue463 +
                  chunkFPAJGGOCParam61.slice(
                    chunkFPAJGGOCValue457 + chunkFPAJGGOCValue460,
                  )
              : ((chunkFPAJGGOCValue457 += chunkFPAJGGOCValue460),
                chunkFPAJGGOCParam61.charCodeAt(chunkFPAJGGOCValue457) === 47 &&
                  ++chunkFPAJGGOCValue457,
                chunkFPAJGGOCParam61.slice(chunkFPAJGGOCValue457));
          },
          _makeLong: function (chunkFPAJGGOCParam2065) {
            return chunkFPAJGGOCParam2065;
          },
          dirname: function (chunkFPAJGGOCParam204) {
            if (
              (chunkFPAJGGOCHelper366(chunkFPAJGGOCParam204),
              chunkFPAJGGOCParam204.length === 0)
            )
              return ".";
            for (
              var chunkFPAJGGOCValue609 = chunkFPAJGGOCParam204.charCodeAt(0),
                chunkFPAJGGOCValue610 = chunkFPAJGGOCValue609 === 47,
                chunkFPAJGGOCValue611 = -1,
                chunkFPAJGGOCValue612 = true,
                chunkFPAJGGOCValue613 = chunkFPAJGGOCParam204.length - 1;
              chunkFPAJGGOCValue613 >= 1;
              --chunkFPAJGGOCValue613
            )
              if (
                (chunkFPAJGGOCValue609 = chunkFPAJGGOCParam204.charCodeAt(
                  chunkFPAJGGOCValue613,
                )) === 47
              ) {
                if (!chunkFPAJGGOCValue612) {
                  chunkFPAJGGOCValue611 = chunkFPAJGGOCValue613;
                  break;
                }
              } else chunkFPAJGGOCValue612 = false;
            return chunkFPAJGGOCValue611 === -1
              ? chunkFPAJGGOCValue610
                ? "/"
                : "."
              : chunkFPAJGGOCValue610 && chunkFPAJGGOCValue611 === 1
                ? "//"
                : chunkFPAJGGOCParam204.slice(0, chunkFPAJGGOCValue611);
          },
          basename: function (chunkFPAJGGOCParam53, chunkFPAJGGOCParam54) {
            if (
              chunkFPAJGGOCParam54 !== undefined &&
              typeof chunkFPAJGGOCParam54 != "string"
            )
              throw TypeError('"ext" argument must be a string');
            chunkFPAJGGOCHelper366(chunkFPAJGGOCParam53);
            var chunkFPAJGGOCValue445,
              chunkFPAJGGOCValue446 = 0,
              chunkFPAJGGOCValue447 = -1,
              chunkFPAJGGOCValue448 = true;
            if (
              chunkFPAJGGOCParam54 !== undefined &&
              chunkFPAJGGOCParam54.length > 0 &&
              chunkFPAJGGOCParam54.length <= chunkFPAJGGOCParam53.length
            ) {
              if (
                chunkFPAJGGOCParam54.length === chunkFPAJGGOCParam53.length &&
                chunkFPAJGGOCParam54 === chunkFPAJGGOCParam53
              )
                return "";
              var chunkFPAJGGOCValue449 = chunkFPAJGGOCParam54.length - 1,
                chunkFPAJGGOCValue450 = -1;
              for (
                chunkFPAJGGOCValue445 = chunkFPAJGGOCParam53.length - 1;
                chunkFPAJGGOCValue445 >= 0;
                --chunkFPAJGGOCValue445
              ) {
                var chunkFPAJGGOCValue451 = chunkFPAJGGOCParam53.charCodeAt(
                  chunkFPAJGGOCValue445,
                );
                if (chunkFPAJGGOCValue451 === 47) {
                  if (!chunkFPAJGGOCValue448) {
                    chunkFPAJGGOCValue446 = chunkFPAJGGOCValue445 + 1;
                    break;
                  }
                } else {
                  chunkFPAJGGOCValue450 === -1 &&
                    ((chunkFPAJGGOCValue448 = false),
                    (chunkFPAJGGOCValue450 = chunkFPAJGGOCValue445 + 1));
                  chunkFPAJGGOCValue449 >= 0 &&
                    (chunkFPAJGGOCValue451 ===
                    chunkFPAJGGOCParam54.charCodeAt(chunkFPAJGGOCValue449)
                      ? --chunkFPAJGGOCValue449 == -1 &&
                        (chunkFPAJGGOCValue447 = chunkFPAJGGOCValue445)
                      : ((chunkFPAJGGOCValue449 = -1),
                        (chunkFPAJGGOCValue447 = chunkFPAJGGOCValue450)));
                }
              }
              return (
                chunkFPAJGGOCValue446 === chunkFPAJGGOCValue447
                  ? (chunkFPAJGGOCValue447 = chunkFPAJGGOCValue450)
                  : chunkFPAJGGOCValue447 === -1 &&
                    (chunkFPAJGGOCValue447 = chunkFPAJGGOCParam53.length),
                chunkFPAJGGOCParam53.slice(
                  chunkFPAJGGOCValue446,
                  chunkFPAJGGOCValue447,
                )
              );
            }
            for (
              chunkFPAJGGOCValue445 = chunkFPAJGGOCParam53.length - 1;
              chunkFPAJGGOCValue445 >= 0;
              --chunkFPAJGGOCValue445
            )
              if (
                chunkFPAJGGOCParam53.charCodeAt(chunkFPAJGGOCValue445) === 47
              ) {
                if (!chunkFPAJGGOCValue448) {
                  chunkFPAJGGOCValue446 = chunkFPAJGGOCValue445 + 1;
                  break;
                }
              } else
                chunkFPAJGGOCValue447 === -1 &&
                  ((chunkFPAJGGOCValue448 = false),
                  (chunkFPAJGGOCValue447 = chunkFPAJGGOCValue445 + 1));
            return chunkFPAJGGOCValue447 === -1
              ? ""
              : chunkFPAJGGOCParam53.slice(
                  chunkFPAJGGOCValue446,
                  chunkFPAJGGOCValue447,
                );
          },
          extname: function (chunkFPAJGGOCParam149) {
            chunkFPAJGGOCHelper366(chunkFPAJGGOCParam149);
            for (
              var chunkFPAJGGOCValue551 = -1,
                chunkFPAJGGOCValue552 = 0,
                chunkFPAJGGOCValue553 = -1,
                chunkFPAJGGOCValue554 = true,
                chunkFPAJGGOCValue555 = 0,
                chunkFPAJGGOCValue556 = chunkFPAJGGOCParam149.length - 1;
              chunkFPAJGGOCValue556 >= 0;
              --chunkFPAJGGOCValue556
            ) {
              var chunkFPAJGGOCValue557 = chunkFPAJGGOCParam149.charCodeAt(
                chunkFPAJGGOCValue556,
              );
              if (chunkFPAJGGOCValue557 !== 47) {
                chunkFPAJGGOCValue553 === -1 &&
                  ((chunkFPAJGGOCValue554 = false),
                  (chunkFPAJGGOCValue553 = chunkFPAJGGOCValue556 + 1));
                chunkFPAJGGOCValue557 === 46
                  ? chunkFPAJGGOCValue551 === -1
                    ? (chunkFPAJGGOCValue551 = chunkFPAJGGOCValue556)
                    : chunkFPAJGGOCValue555 !== 1 && (chunkFPAJGGOCValue555 = 1)
                  : chunkFPAJGGOCValue551 !== -1 &&
                    (chunkFPAJGGOCValue555 = -1);
              } else if (!chunkFPAJGGOCValue554) {
                chunkFPAJGGOCValue552 = chunkFPAJGGOCValue556 + 1;
                break;
              }
            }
            return chunkFPAJGGOCValue551 === -1 ||
              chunkFPAJGGOCValue553 === -1 ||
              chunkFPAJGGOCValue555 === 0 ||
              (chunkFPAJGGOCValue555 === 1 &&
                chunkFPAJGGOCValue551 === chunkFPAJGGOCValue553 - 1 &&
                chunkFPAJGGOCValue551 === chunkFPAJGGOCValue552 + 1)
              ? ""
              : chunkFPAJGGOCParam149.slice(
                  chunkFPAJGGOCValue551,
                  chunkFPAJGGOCValue553,
                );
          },
          format: function (chunkFPAJGGOCParam370) {
            if (
              typeof chunkFPAJGGOCParam370 != "object" ||
              !chunkFPAJGGOCParam370
            )
              throw TypeError(
                'The "pathObject" argument must be of type Object. Received type ' +
                  typeof chunkFPAJGGOCParam370,
              );
            return (function (chunkFPAJGGOCParam925, chunkFPAJGGOCParam926) {
              var chunkFPAJGGOCValue1315 =
                  chunkFPAJGGOCParam926.dir || chunkFPAJGGOCParam926.root,
                chunkFPAJGGOCValue1316 =
                  chunkFPAJGGOCParam926.base ||
                  (chunkFPAJGGOCParam926.name || "") +
                    (chunkFPAJGGOCParam926.ext || "");
              return chunkFPAJGGOCValue1315
                ? chunkFPAJGGOCValue1315 === chunkFPAJGGOCParam926.root
                  ? chunkFPAJGGOCValue1315 + chunkFPAJGGOCValue1316
                  : chunkFPAJGGOCValue1315 + "/" + chunkFPAJGGOCValue1316
                : chunkFPAJGGOCValue1316;
            })(0, chunkFPAJGGOCParam370);
          },
          parse: function (chunkFPAJGGOCParam48) {
            chunkFPAJGGOCHelper366(chunkFPAJGGOCParam48);
            var chunkFPAJGGOCValue433 = {
              root: "",
              dir: "",
              base: "",
              ext: "",
              name: "",
            };
            if (chunkFPAJGGOCParam48.length === 0) return chunkFPAJGGOCValue433;
            var chunkFPAJGGOCValue434,
              chunkFPAJGGOCValue435 = chunkFPAJGGOCParam48.charCodeAt(0),
              chunkFPAJGGOCValue436 = chunkFPAJGGOCValue435 === 47;
            chunkFPAJGGOCValue436
              ? ((chunkFPAJGGOCValue433.root = "/"),
                (chunkFPAJGGOCValue434 = 1))
              : (chunkFPAJGGOCValue434 = 0);
            for (
              var chunkFPAJGGOCValue437 = -1,
                chunkFPAJGGOCValue438 = 0,
                chunkFPAJGGOCValue439 = -1,
                chunkFPAJGGOCValue440 = true,
                chunkFPAJGGOCValue441 = chunkFPAJGGOCParam48.length - 1,
                chunkFPAJGGOCValue442 = 0;
              chunkFPAJGGOCValue441 >= chunkFPAJGGOCValue434;
              --chunkFPAJGGOCValue441
            )
              if (
                (chunkFPAJGGOCValue435 = chunkFPAJGGOCParam48.charCodeAt(
                  chunkFPAJGGOCValue441,
                )) !== 47
              ) {
                chunkFPAJGGOCValue439 === -1 &&
                  ((chunkFPAJGGOCValue440 = false),
                  (chunkFPAJGGOCValue439 = chunkFPAJGGOCValue441 + 1));
                chunkFPAJGGOCValue435 === 46
                  ? chunkFPAJGGOCValue437 === -1
                    ? (chunkFPAJGGOCValue437 = chunkFPAJGGOCValue441)
                    : chunkFPAJGGOCValue442 !== 1 && (chunkFPAJGGOCValue442 = 1)
                  : chunkFPAJGGOCValue437 !== -1 &&
                    (chunkFPAJGGOCValue442 = -1);
              } else if (!chunkFPAJGGOCValue440) {
                chunkFPAJGGOCValue438 = chunkFPAJGGOCValue441 + 1;
                break;
              }
            return (
              chunkFPAJGGOCValue437 === -1 ||
              chunkFPAJGGOCValue439 === -1 ||
              chunkFPAJGGOCValue442 === 0 ||
              (chunkFPAJGGOCValue442 === 1 &&
                chunkFPAJGGOCValue437 === chunkFPAJGGOCValue439 - 1 &&
                chunkFPAJGGOCValue437 === chunkFPAJGGOCValue438 + 1)
                ? chunkFPAJGGOCValue439 !== -1 &&
                  (chunkFPAJGGOCValue433.base = chunkFPAJGGOCValue433.name =
                    chunkFPAJGGOCValue438 === 0 && chunkFPAJGGOCValue436
                      ? chunkFPAJGGOCParam48.slice(1, chunkFPAJGGOCValue439)
                      : chunkFPAJGGOCParam48.slice(
                          chunkFPAJGGOCValue438,
                          chunkFPAJGGOCValue439,
                        ))
                : (chunkFPAJGGOCValue438 === 0 && chunkFPAJGGOCValue436
                    ? ((chunkFPAJGGOCValue433.name = chunkFPAJGGOCParam48.slice(
                        1,
                        chunkFPAJGGOCValue437,
                      )),
                      (chunkFPAJGGOCValue433.base = chunkFPAJGGOCParam48.slice(
                        1,
                        chunkFPAJGGOCValue439,
                      )))
                    : ((chunkFPAJGGOCValue433.name = chunkFPAJGGOCParam48.slice(
                        chunkFPAJGGOCValue438,
                        chunkFPAJGGOCValue437,
                      )),
                      (chunkFPAJGGOCValue433.base = chunkFPAJGGOCParam48.slice(
                        chunkFPAJGGOCValue438,
                        chunkFPAJGGOCValue439,
                      ))),
                  (chunkFPAJGGOCValue433.ext = chunkFPAJGGOCParam48.slice(
                    chunkFPAJGGOCValue437,
                    chunkFPAJGGOCValue439,
                  ))),
              chunkFPAJGGOCValue438 > 0
                ? (chunkFPAJGGOCValue433.dir = chunkFPAJGGOCParam48.slice(
                    0,
                    chunkFPAJGGOCValue438 - 1,
                  ))
                : chunkFPAJGGOCValue436 && (chunkFPAJGGOCValue433.dir = "/"),
              chunkFPAJGGOCValue433
            );
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        };
        chunkFPAJGGOCValue324.posix = chunkFPAJGGOCValue324;
        chunkFPAJGGOCParam1.exports = chunkFPAJGGOCValue324;
      },
    },
    chunkFPAJGGOCValue311 = {};
  function chunkFPAJGGOCHelper358(chunkFPAJGGOCParam1117) {
    var chunkFPAJGGOCValue1458 = chunkFPAJGGOCValue311[chunkFPAJGGOCParam1117];
    if (chunkFPAJGGOCValue1458 !== undefined)
      return chunkFPAJGGOCValue1458.exports;
    var chunkFPAJGGOCValue1459 = (chunkFPAJGGOCValue311[
      chunkFPAJGGOCParam1117
    ] = {
      exports: {},
    });
    return (
      chunkFPAJGGOCValue310[chunkFPAJGGOCParam1117](
        chunkFPAJGGOCValue1459,
        chunkFPAJGGOCValue1459.exports,
        chunkFPAJGGOCHelper358,
      ),
      chunkFPAJGGOCValue1459.exports
    );
  }
  chunkFPAJGGOCHelper358.d = (
    chunkFPAJGGOCParam1222,
    chunkFPAJGGOCParam1223,
  ) => {
    for (var chunkFPAJGGOCValue1523 in chunkFPAJGGOCParam1223)
      chunkFPAJGGOCHelper358.o(
        chunkFPAJGGOCParam1223,
        chunkFPAJGGOCValue1523,
      ) &&
        !chunkFPAJGGOCHelper358.o(
          chunkFPAJGGOCParam1222,
          chunkFPAJGGOCValue1523,
        ) &&
        Object.defineProperty(chunkFPAJGGOCParam1222, chunkFPAJGGOCValue1523, {
          enumerable: true,
          get: chunkFPAJGGOCParam1223[chunkFPAJGGOCValue1523],
        });
  };
  chunkFPAJGGOCHelper358.o = (chunkFPAJGGOCParam1972, chunkFPAJGGOCParam1973) =>
    Object.prototype.hasOwnProperty.call(
      chunkFPAJGGOCParam1972,
      chunkFPAJGGOCParam1973,
    );
  chunkFPAJGGOCHelper358.r = (chunkFPAJGGOCParam869) => {
    typeof Symbol < "u" &&
      Symbol.toStringTag &&
      Object.defineProperty(chunkFPAJGGOCParam869, Symbol.toStringTag, {
        value: "Module",
      });
    Object.defineProperty(chunkFPAJGGOCParam869, "__esModule", {
      value: true,
    });
  };
  var chunkFPAJGGOCValue312 = {};
  (() => {
    let chunkFPAJGGOCValue313;
    chunkFPAJGGOCHelper358.r(chunkFPAJGGOCValue312);
    chunkFPAJGGOCHelper358.d(chunkFPAJGGOCValue312, {
      URI: () => ChunkFPAJGGOCClass1,
      Utils: () => chunkFPAJGGOCValue323,
    });
    typeof process == "object"
      ? (chunkFPAJGGOCValue313 = process.platform === "win32")
      : typeof navigator == "object" &&
        (chunkFPAJGGOCValue313 = navigator.userAgent.indexOf("Windows") >= 0);
    let chunkFPAJGGOCValue314 = /^\w[\w\d+.-]*$/,
      chunkFPAJGGOCValue315 = /^\//,
      chunkFPAJGGOCValue316 = /^\/\//;
    function chunkFPAJGGOCHelper359(
      chunkFPAJGGOCParam138,
      chunkFPAJGGOCParam139,
    ) {
      if (!chunkFPAJGGOCParam138.scheme && chunkFPAJGGOCParam139)
        throw Error(
          `[UriError]: Scheme is missing: {scheme: "", authority: "${chunkFPAJGGOCParam138.authority}", path: "${chunkFPAJGGOCParam138.path}", query: "${chunkFPAJGGOCParam138.query}", fragment: "${chunkFPAJGGOCParam138.fragment}"}`,
        );
      if (
        chunkFPAJGGOCParam138.scheme &&
        !chunkFPAJGGOCValue314.test(chunkFPAJGGOCParam138.scheme)
      )
        throw Error("[UriError]: Scheme contains illegal characters.");
      if (chunkFPAJGGOCParam138.path) {
        if (chunkFPAJGGOCParam138.authority) {
          if (!chunkFPAJGGOCValue315.test(chunkFPAJGGOCParam138.path))
            throw Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
            );
        } else if (chunkFPAJGGOCValue316.test(chunkFPAJGGOCParam138.path))
          throw Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
          );
      }
    }
    let chunkFPAJGGOCValue317 =
      /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class ChunkFPAJGGOCClass1 {
      static isUri(chunkFPAJGGOCParam386) {
        return (
          chunkFPAJGGOCParam386 instanceof ChunkFPAJGGOCClass1 ||
          (!!chunkFPAJGGOCParam386 &&
            typeof chunkFPAJGGOCParam386.authority == "string" &&
            typeof chunkFPAJGGOCParam386.fragment == "string" &&
            typeof chunkFPAJGGOCParam386.path == "string" &&
            typeof chunkFPAJGGOCParam386.query == "string" &&
            typeof chunkFPAJGGOCParam386.scheme == "string" &&
            typeof chunkFPAJGGOCParam386.fsPath == "string" &&
            typeof chunkFPAJGGOCParam386.with == "function" &&
            typeof chunkFPAJGGOCParam386.toString == "function")
        );
      }
      scheme;
      authority;
      path;
      query;
      fragment;
      constructor(
        chunkFPAJGGOCParam127,
        chunkFPAJGGOCParam128,
        chunkFPAJGGOCParam129,
        chunkFPAJGGOCParam130,
        chunkFPAJGGOCParam131,
        chunkFPAJGGOCParam132 = false,
      ) {
        typeof chunkFPAJGGOCParam127 == "object"
          ? ((this.scheme = chunkFPAJGGOCParam127.scheme || ""),
            (this.authority = chunkFPAJGGOCParam127.authority || ""),
            (this.path = chunkFPAJGGOCParam127.path || ""),
            (this.query = chunkFPAJGGOCParam127.query || ""),
            (this.fragment = chunkFPAJGGOCParam127.fragment || ""))
          : ((this.scheme = (function (
              chunkFPAJGGOCParam1680,
              chunkFPAJGGOCParam1681,
            ) {
              return chunkFPAJGGOCParam1680 || chunkFPAJGGOCParam1681
                ? chunkFPAJGGOCParam1680
                : "file";
            })(chunkFPAJGGOCParam127, chunkFPAJGGOCParam132)),
            (this.authority = chunkFPAJGGOCParam128 || ""),
            (this.path = (function (
              chunkFPAJGGOCParam753,
              chunkFPAJGGOCParam754,
            ) {
              switch (chunkFPAJGGOCParam753) {
                case "https":
                case "http":
                case "file":
                  chunkFPAJGGOCParam754
                    ? chunkFPAJGGOCParam754[0] !== "/" &&
                      (chunkFPAJGGOCParam754 = "/" + chunkFPAJGGOCParam754)
                    : (chunkFPAJGGOCParam754 = "/");
              }
              return chunkFPAJGGOCParam754;
            })(this.scheme, chunkFPAJGGOCParam129 || "")),
            (this.query = chunkFPAJGGOCParam130 || ""),
            (this.fragment = chunkFPAJGGOCParam131 || ""),
            chunkFPAJGGOCHelper359(this, chunkFPAJGGOCParam132));
      }
      get fsPath() {
        return chunkFPAJGGOCHelper362(this, false);
      }
      with(chunkFPAJGGOCParam182) {
        if (!chunkFPAJGGOCParam182) return this;
        let { scheme, authority, path, query, fragment } =
          chunkFPAJGGOCParam182;
        return (
          scheme === undefined
            ? (scheme = this.scheme)
            : scheme === null && (scheme = ""),
          authority === undefined
            ? (authority = this.authority)
            : authority === null && (authority = ""),
          path === undefined
            ? (path = this.path)
            : path === null && (path = ""),
          query === undefined
            ? (query = this.query)
            : query === null && (query = ""),
          fragment === undefined
            ? (fragment = this.fragment)
            : fragment === null && (fragment = ""),
          scheme === this.scheme &&
          authority === this.authority &&
          path === this.path &&
          query === this.query &&
          fragment === this.fragment
            ? this
            : new ChunkFPAJGGOCClass2(scheme, authority, path, query, fragment)
        );
      }
      static parse(chunkFPAJGGOCParam574, chunkFPAJGGOCParam575 = false) {
        let chunkFPAJGGOCValue1007 = chunkFPAJGGOCValue317.exec(
          chunkFPAJGGOCParam574,
        );
        return chunkFPAJGGOCValue1007
          ? new ChunkFPAJGGOCClass2(
              chunkFPAJGGOCValue1007[2] || "",
              chunkFPAJGGOCHelper365(chunkFPAJGGOCValue1007[4] || ""),
              chunkFPAJGGOCHelper365(chunkFPAJGGOCValue1007[5] || ""),
              chunkFPAJGGOCHelper365(chunkFPAJGGOCValue1007[7] || ""),
              chunkFPAJGGOCHelper365(chunkFPAJGGOCValue1007[9] || ""),
              chunkFPAJGGOCParam575,
            )
          : new ChunkFPAJGGOCClass2("", "", "", "", "");
      }
      static file(chunkFPAJGGOCParam497) {
        let chunkFPAJGGOCValue926 = "";
        if (
          (chunkFPAJGGOCValue313 &&
            (chunkFPAJGGOCParam497 = chunkFPAJGGOCParam497.replace(/\\/g, "/")),
          chunkFPAJGGOCParam497[0] === "/" && chunkFPAJGGOCParam497[1] === "/")
        ) {
          let chunkFPAJGGOCValue1364 = chunkFPAJGGOCParam497.indexOf("/", 2);
          chunkFPAJGGOCValue1364 === -1
            ? ((chunkFPAJGGOCValue926 = chunkFPAJGGOCParam497.substring(2)),
              (chunkFPAJGGOCParam497 = "/"))
            : ((chunkFPAJGGOCValue926 = chunkFPAJGGOCParam497.substring(
                2,
                chunkFPAJGGOCValue1364,
              )),
              (chunkFPAJGGOCParam497 =
                chunkFPAJGGOCParam497.substring(chunkFPAJGGOCValue1364) ||
                "/"));
        }
        return new ChunkFPAJGGOCClass2(
          "file",
          chunkFPAJGGOCValue926,
          chunkFPAJGGOCParam497,
          "",
          "",
        );
      }
      static from(chunkFPAJGGOCParam1298) {
        let chunkFPAJGGOCValue1583 = new ChunkFPAJGGOCClass2(
          chunkFPAJGGOCParam1298.scheme,
          chunkFPAJGGOCParam1298.authority,
          chunkFPAJGGOCParam1298.path,
          chunkFPAJGGOCParam1298.query,
          chunkFPAJGGOCParam1298.fragment,
        );
        return (
          chunkFPAJGGOCHelper359(chunkFPAJGGOCValue1583, true),
          chunkFPAJGGOCValue1583
        );
      }
      toString(chunkFPAJGGOCParam1968 = false) {
        return chunkFPAJGGOCHelper363(this, chunkFPAJGGOCParam1968);
      }
      toJSON() {
        return this;
      }
      static revive(chunkFPAJGGOCParam558) {
        if (chunkFPAJGGOCParam558) {
          if (chunkFPAJGGOCParam558 instanceof ChunkFPAJGGOCClass1)
            return chunkFPAJGGOCParam558;
          {
            let chunkFPAJGGOCValue1325 = new ChunkFPAJGGOCClass2(
              chunkFPAJGGOCParam558,
            );
            return (
              (chunkFPAJGGOCValue1325._formatted =
                chunkFPAJGGOCParam558.external),
              (chunkFPAJGGOCValue1325._fsPath =
                chunkFPAJGGOCParam558._sep === chunkFPAJGGOCValue318
                  ? chunkFPAJGGOCParam558.fsPath
                  : null),
              chunkFPAJGGOCValue1325
            );
          }
        }
        return chunkFPAJGGOCParam558;
      }
    }
    let chunkFPAJGGOCValue318 = chunkFPAJGGOCValue313 ? 1 : undefined;
    class ChunkFPAJGGOCClass2 extends ChunkFPAJGGOCClass1 {
      _formatted = null;
      _fsPath = null;
      get fsPath() {
        return (
          (this._fsPath ||= chunkFPAJGGOCHelper362(this, false)),
          this._fsPath
        );
      }
      toString(chunkFPAJGGOCParam1277 = false) {
        return chunkFPAJGGOCParam1277
          ? chunkFPAJGGOCHelper363(this, true)
          : ((this._formatted ||= chunkFPAJGGOCHelper363(this, false)),
            this._formatted);
      }
      toJSON() {
        let chunkFPAJGGOCValue765 = {
          $mid: 1,
        };
        return (
          this._fsPath &&
            ((chunkFPAJGGOCValue765.fsPath = this._fsPath),
            (chunkFPAJGGOCValue765._sep = chunkFPAJGGOCValue318)),
          this._formatted && (chunkFPAJGGOCValue765.external = this._formatted),
          this.path && (chunkFPAJGGOCValue765.path = this.path),
          this.scheme && (chunkFPAJGGOCValue765.scheme = this.scheme),
          this.authority && (chunkFPAJGGOCValue765.authority = this.authority),
          this.query && (chunkFPAJGGOCValue765.query = this.query),
          this.fragment && (chunkFPAJGGOCValue765.fragment = this.fragment),
          chunkFPAJGGOCValue765
        );
      }
    }
    let chunkFPAJGGOCValue319 = {
      58: "%3A",
      47: "%2F",
      63: "%3F",
      35: "%23",
      91: "%5B",
      93: "%5D",
      64: "%40",
      33: "%21",
      36: "%24",
      38: "%26",
      39: "%27",
      40: "%28",
      41: "%29",
      42: "%2A",
      43: "%2B",
      44: "%2C",
      59: "%3B",
      61: "%3D",
      32: "%20",
    };
    function chunkFPAJGGOCHelper360(
      chunkFPAJGGOCParam87,
      chunkFPAJGGOCParam88,
      chunkFPAJGGOCParam89,
    ) {
      let chunkFPAJGGOCValue511,
        chunkFPAJGGOCValue512 = -1;
      for (
        let chunkFPAJGGOCValue546 = 0;
        chunkFPAJGGOCValue546 < chunkFPAJGGOCParam87.length;
        chunkFPAJGGOCValue546++
      ) {
        let chunkFPAJGGOCValue561 = chunkFPAJGGOCParam87.charCodeAt(
          chunkFPAJGGOCValue546,
        );
        if (
          (chunkFPAJGGOCValue561 >= 97 && chunkFPAJGGOCValue561 <= 122) ||
          (chunkFPAJGGOCValue561 >= 65 && chunkFPAJGGOCValue561 <= 90) ||
          (chunkFPAJGGOCValue561 >= 48 && chunkFPAJGGOCValue561 <= 57) ||
          chunkFPAJGGOCValue561 === 45 ||
          chunkFPAJGGOCValue561 === 46 ||
          chunkFPAJGGOCValue561 === 95 ||
          chunkFPAJGGOCValue561 === 126 ||
          (chunkFPAJGGOCParam88 && chunkFPAJGGOCValue561 === 47) ||
          (chunkFPAJGGOCParam89 && chunkFPAJGGOCValue561 === 91) ||
          (chunkFPAJGGOCParam89 && chunkFPAJGGOCValue561 === 93) ||
          (chunkFPAJGGOCParam89 && chunkFPAJGGOCValue561 === 58)
        ) {
          chunkFPAJGGOCValue512 !== -1 &&
            ((chunkFPAJGGOCValue511 += encodeURIComponent(
              chunkFPAJGGOCParam87.substring(
                chunkFPAJGGOCValue512,
                chunkFPAJGGOCValue546,
              ),
            )),
            (chunkFPAJGGOCValue512 = -1));
          chunkFPAJGGOCValue511 !== undefined &&
            (chunkFPAJGGOCValue511 += chunkFPAJGGOCParam87.charAt(
              chunkFPAJGGOCValue546,
            ));
        } else {
          chunkFPAJGGOCValue511 === undefined &&
            (chunkFPAJGGOCValue511 = chunkFPAJGGOCParam87.substr(
              0,
              chunkFPAJGGOCValue546,
            ));
          let chunkFPAJGGOCValue1094 =
            chunkFPAJGGOCValue319[chunkFPAJGGOCValue561];
          chunkFPAJGGOCValue1094 === undefined
            ? chunkFPAJGGOCValue512 === -1 &&
              (chunkFPAJGGOCValue512 = chunkFPAJGGOCValue546)
            : (chunkFPAJGGOCValue512 !== -1 &&
                ((chunkFPAJGGOCValue511 += encodeURIComponent(
                  chunkFPAJGGOCParam87.substring(
                    chunkFPAJGGOCValue512,
                    chunkFPAJGGOCValue546,
                  ),
                )),
                (chunkFPAJGGOCValue512 = -1)),
              (chunkFPAJGGOCValue511 += chunkFPAJGGOCValue1094));
        }
      }
      return (
        chunkFPAJGGOCValue512 !== -1 &&
          (chunkFPAJGGOCValue511 += encodeURIComponent(
            chunkFPAJGGOCParam87.substring(chunkFPAJGGOCValue512),
          )),
        chunkFPAJGGOCValue511 === undefined
          ? chunkFPAJGGOCParam87
          : chunkFPAJGGOCValue511
      );
    }
    function chunkFPAJGGOCHelper361(chunkFPAJGGOCParam633) {
      let chunkFPAJGGOCValue1054;
      for (
        let chunkFPAJGGOCValue1267 = 0;
        chunkFPAJGGOCValue1267 < chunkFPAJGGOCParam633.length;
        chunkFPAJGGOCValue1267++
      ) {
        let chunkFPAJGGOCValue1400 = chunkFPAJGGOCParam633.charCodeAt(
          chunkFPAJGGOCValue1267,
        );
        chunkFPAJGGOCValue1400 === 35 || chunkFPAJGGOCValue1400 === 63
          ? (chunkFPAJGGOCValue1054 === undefined &&
              (chunkFPAJGGOCValue1054 = chunkFPAJGGOCParam633.substr(
                0,
                chunkFPAJGGOCValue1267,
              )),
            (chunkFPAJGGOCValue1054 +=
              chunkFPAJGGOCValue319[chunkFPAJGGOCValue1400]))
          : chunkFPAJGGOCValue1054 !== undefined &&
            (chunkFPAJGGOCValue1054 +=
              chunkFPAJGGOCParam633[chunkFPAJGGOCValue1267]);
      }
      return chunkFPAJGGOCValue1054 === undefined
        ? chunkFPAJGGOCParam633
        : chunkFPAJGGOCValue1054;
    }
    function chunkFPAJGGOCHelper362(
      chunkFPAJGGOCParam205,
      chunkFPAJGGOCParam206,
    ) {
      let chunkFPAJGGOCValue614;
      return (
        (chunkFPAJGGOCValue614 =
          chunkFPAJGGOCParam205.authority &&
          chunkFPAJGGOCParam205.path.length > 1 &&
          chunkFPAJGGOCParam205.scheme === "file"
            ? `//${chunkFPAJGGOCParam205.authority}${chunkFPAJGGOCParam205.path}`
            : chunkFPAJGGOCParam205.path.charCodeAt(0) === 47 &&
                ((chunkFPAJGGOCParam205.path.charCodeAt(1) >= 65 &&
                  chunkFPAJGGOCParam205.path.charCodeAt(1) <= 90) ||
                  (chunkFPAJGGOCParam205.path.charCodeAt(1) >= 97 &&
                    chunkFPAJGGOCParam205.path.charCodeAt(1) <= 122)) &&
                chunkFPAJGGOCParam205.path.charCodeAt(2) === 58
              ? chunkFPAJGGOCParam206
                ? chunkFPAJGGOCParam205.path.substr(1)
                : chunkFPAJGGOCParam205.path[1].toLowerCase() +
                  chunkFPAJGGOCParam205.path.substr(2)
              : chunkFPAJGGOCParam205.path),
        chunkFPAJGGOCValue313 &&
          (chunkFPAJGGOCValue614 = chunkFPAJGGOCValue614.replace(/\//g, "\\")),
        chunkFPAJGGOCValue614
      );
    }
    function chunkFPAJGGOCHelper363(
      chunkFPAJGGOCParam39,
      chunkFPAJGGOCParam40,
    ) {
      let chunkFPAJGGOCValue430 = chunkFPAJGGOCParam40
          ? chunkFPAJGGOCHelper361
          : chunkFPAJGGOCHelper360,
        chunkFPAJGGOCValue431 = "",
        { scheme, authority, path, query, fragment } = chunkFPAJGGOCParam39;
      if (
        (scheme &&
          ((chunkFPAJGGOCValue431 += scheme), (chunkFPAJGGOCValue431 += ":")),
        (authority || scheme === "file") &&
          ((chunkFPAJGGOCValue431 += "/"), (chunkFPAJGGOCValue431 += "/")),
        authority)
      ) {
        let chunkFPAJGGOCValue660 = authority.indexOf("@");
        if (chunkFPAJGGOCValue660 !== -1) {
          let chunkFPAJGGOCValue968 = authority.substr(
            0,
            chunkFPAJGGOCValue660,
          );
          authority = authority.substr(chunkFPAJGGOCValue660 + 1);
          chunkFPAJGGOCValue660 = chunkFPAJGGOCValue968.lastIndexOf(":");
          chunkFPAJGGOCValue660 === -1
            ? (chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
                chunkFPAJGGOCValue968,
                false,
                false,
              ))
            : ((chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
                chunkFPAJGGOCValue968.substr(0, chunkFPAJGGOCValue660),
                false,
                false,
              )),
              (chunkFPAJGGOCValue431 += ":"),
              (chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
                chunkFPAJGGOCValue968.substr(chunkFPAJGGOCValue660 + 1),
                false,
                true,
              )));
          chunkFPAJGGOCValue431 += "@";
        }
        authority = authority.toLowerCase();
        chunkFPAJGGOCValue660 = authority.lastIndexOf(":");
        chunkFPAJGGOCValue660 === -1
          ? (chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
              authority,
              false,
              true,
            ))
          : ((chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
              authority.substr(0, chunkFPAJGGOCValue660),
              false,
              true,
            )),
            (chunkFPAJGGOCValue431 += authority.substr(chunkFPAJGGOCValue660)));
      }
      if (path) {
        if (
          path.length >= 3 &&
          path.charCodeAt(0) === 47 &&
          path.charCodeAt(2) === 58
        ) {
          let chunkFPAJGGOCValue1473 = path.charCodeAt(1);
          chunkFPAJGGOCValue1473 >= 65 &&
            chunkFPAJGGOCValue1473 <= 90 &&
            (path = `/${String.fromCharCode(chunkFPAJGGOCValue1473 + 32)}:${path.substr(3)}`);
        } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
          let chunkFPAJGGOCValue1477 = path.charCodeAt(0);
          chunkFPAJGGOCValue1477 >= 65 &&
            chunkFPAJGGOCValue1477 <= 90 &&
            (path = `${String.fromCharCode(chunkFPAJGGOCValue1477 + 32)}:${path.substr(2)}`);
        }
        chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(path, true, false);
      }
      return (
        query &&
          ((chunkFPAJGGOCValue431 += "?"),
          (chunkFPAJGGOCValue431 += chunkFPAJGGOCValue430(
            query,
            false,
            false,
          ))),
        fragment &&
          ((chunkFPAJGGOCValue431 += "#"),
          (chunkFPAJGGOCValue431 += chunkFPAJGGOCParam40
            ? fragment
            : chunkFPAJGGOCHelper360(fragment, false, false))),
        chunkFPAJGGOCValue431
      );
    }
    function chunkFPAJGGOCHelper364(chunkFPAJGGOCParam1118) {
      try {
        return decodeURIComponent(chunkFPAJGGOCParam1118);
      } catch {
        return chunkFPAJGGOCParam1118.length > 3
          ? chunkFPAJGGOCParam1118.substr(0, 3) +
              chunkFPAJGGOCHelper364(chunkFPAJGGOCParam1118.substr(3))
          : chunkFPAJGGOCParam1118;
      }
    }
    let chunkFPAJGGOCValue320 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function chunkFPAJGGOCHelper365(chunkFPAJGGOCParam1620) {
      return chunkFPAJGGOCParam1620.match(chunkFPAJGGOCValue320)
        ? chunkFPAJGGOCParam1620.replace(
            chunkFPAJGGOCValue320,
            (chunkFPAJGGOCParam2330) =>
              chunkFPAJGGOCHelper364(chunkFPAJGGOCParam2330),
          )
        : chunkFPAJGGOCParam1620;
    }
    var chunkFPAJGGOCValue321 = chunkFPAJGGOCHelper358(470);
    let chunkFPAJGGOCValue322 =
      chunkFPAJGGOCValue321.posix || chunkFPAJGGOCValue321;
    var chunkFPAJGGOCValue323;
    (function (chunkFPAJGGOCParam113) {
      chunkFPAJGGOCParam113.joinPath = function (
        chunkFPAJGGOCParam1592,
        ...chunkFPAJGGOCParam1593
      ) {
        return chunkFPAJGGOCParam1592.with({
          path: chunkFPAJGGOCValue322.join(
            chunkFPAJGGOCParam1592.path,
            ...chunkFPAJGGOCParam1593,
          ),
        });
      };
      chunkFPAJGGOCParam113.resolvePath = function (
        chunkFPAJGGOCParam597,
        ...chunkFPAJGGOCParam598
      ) {
        let chunkFPAJGGOCValue1030 = chunkFPAJGGOCParam597.path,
          chunkFPAJGGOCValue1031 = false;
        chunkFPAJGGOCValue1030[0] !== "/" &&
          ((chunkFPAJGGOCValue1030 = "/" + chunkFPAJGGOCValue1030),
          (chunkFPAJGGOCValue1031 = true));
        let chunkFPAJGGOCValue1032 = chunkFPAJGGOCValue322.resolve(
          chunkFPAJGGOCValue1030,
          ...chunkFPAJGGOCParam598,
        );
        return (
          chunkFPAJGGOCValue1031 &&
            chunkFPAJGGOCValue1032[0] === "/" &&
            !chunkFPAJGGOCParam597.authority &&
            (chunkFPAJGGOCValue1032 = chunkFPAJGGOCValue1032.substring(1)),
          chunkFPAJGGOCParam597.with({
            path: chunkFPAJGGOCValue1032,
          })
        );
      };
      chunkFPAJGGOCParam113.dirname = function (chunkFPAJGGOCParam742) {
        if (
          chunkFPAJGGOCParam742.path.length === 0 ||
          chunkFPAJGGOCParam742.path === "/"
        )
          return chunkFPAJGGOCParam742;
        let chunkFPAJGGOCValue1138 = chunkFPAJGGOCValue322.dirname(
          chunkFPAJGGOCParam742.path,
        );
        return (
          chunkFPAJGGOCValue1138.length === 1 &&
            chunkFPAJGGOCValue1138.charCodeAt(0) === 46 &&
            (chunkFPAJGGOCValue1138 = ""),
          chunkFPAJGGOCParam742.with({
            path: chunkFPAJGGOCValue1138,
          })
        );
      };
      chunkFPAJGGOCParam113.basename = function (chunkFPAJGGOCParam1863) {
        return chunkFPAJGGOCValue322.basename(chunkFPAJGGOCParam1863.path);
      };
      chunkFPAJGGOCParam113.extname = function (chunkFPAJGGOCParam1877) {
        return chunkFPAJGGOCValue322.extname(chunkFPAJGGOCParam1877.path);
      };
    })((chunkFPAJGGOCValue323 ||= {}));
  })();
  chunkFPAJGGOCValue208 = chunkFPAJGGOCValue312;
})();
var { URI, Utils } = chunkFPAJGGOCValue208,
  chunkFPAJGGOCValue209;
(function (chunkFPAJGGOCParam181) {
  chunkFPAJGGOCParam181.basename = Utils.basename;
  chunkFPAJGGOCParam181.dirname = Utils.dirname;
  chunkFPAJGGOCParam181.extname = Utils.extname;
  chunkFPAJGGOCParam181.joinPath = Utils.joinPath;
  chunkFPAJGGOCParam181.resolvePath = Utils.resolvePath;
  function chunkFPAJGGOCHelper386(
    chunkFPAJGGOCParam1809,
    chunkFPAJGGOCParam1810,
  ) {
    return (
      chunkFPAJGGOCParam1809?.toString() === chunkFPAJGGOCParam1810?.toString()
    );
  }
  chunkFPAJGGOCParam181.equals = chunkFPAJGGOCHelper386;
  function chunkFPAJGGOCHelper387(
    chunkFPAJGGOCParam525,
    chunkFPAJGGOCParam526,
  ) {
    let chunkFPAJGGOCValue943 =
        typeof chunkFPAJGGOCParam525 == "string"
          ? chunkFPAJGGOCParam525
          : chunkFPAJGGOCParam525.path,
      chunkFPAJGGOCValue944 =
        typeof chunkFPAJGGOCParam526 == "string"
          ? chunkFPAJGGOCParam526
          : chunkFPAJGGOCParam526.path,
      chunkFPAJGGOCValue945 = chunkFPAJGGOCValue943
        .split("/")
        .filter((item) => item.length > 0),
      chunkFPAJGGOCValue946 = chunkFPAJGGOCValue944
        .split("/")
        .filter((item) => item.length > 0),
      chunkFPAJGGOCValue947 = 0;
    for (
      ;
      chunkFPAJGGOCValue947 < chunkFPAJGGOCValue945.length &&
      chunkFPAJGGOCValue945[chunkFPAJGGOCValue947] ===
        chunkFPAJGGOCValue946[chunkFPAJGGOCValue947];
      chunkFPAJGGOCValue947++
    );
    return (
      "../".repeat(chunkFPAJGGOCValue945.length - chunkFPAJGGOCValue947) +
      chunkFPAJGGOCValue946.slice(chunkFPAJGGOCValue947).join("/")
    );
  }
  chunkFPAJGGOCParam181.relative = chunkFPAJGGOCHelper387;
  function chunkFPAJGGOCHelper388(chunkFPAJGGOCParam1824) {
    return URI.parse(chunkFPAJGGOCParam1824.toString()).toString();
  }
  chunkFPAJGGOCParam181.normalize = chunkFPAJGGOCHelper388;
})((chunkFPAJGGOCValue209 ||= {}));
var chunkFPAJGGOCValue210;
(function (chunkFPAJGGOCParam536) {
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.Changed = 0)] = "Changed";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.Parsed = 1)] = "Parsed";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.IndexedContent = 2)] =
    "IndexedContent";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.ComputedScopes = 3)] =
    "ComputedScopes";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.Linked = 4)] = "Linked";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.IndexedReferences = 5)] =
    "IndexedReferences";
  chunkFPAJGGOCParam536[(chunkFPAJGGOCParam536.Validated = 6)] = "Validated";
})((chunkFPAJGGOCValue210 ||= {}));
var chunkFPAJGGOCValue211 = class {
    constructor(chunkFPAJGGOCParam924) {
      this.serviceRegistry = chunkFPAJGGOCParam924.ServiceRegistry;
      this.textDocuments = chunkFPAJGGOCParam924.workspace.TextDocuments;
      this.fileSystemProvider =
        chunkFPAJGGOCParam924.workspace.FileSystemProvider;
    }
    async fromUri(
      chunkFPAJGGOCParam1176,
      chunkFPAJGGOCParam1177 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1501 = await this.fileSystemProvider.readFile(
        chunkFPAJGGOCParam1176,
      );
      return this.createAsync(
        chunkFPAJGGOCParam1176,
        chunkFPAJGGOCValue1501,
        chunkFPAJGGOCParam1177,
      );
    }
    fromTextDocument(
      chunkFPAJGGOCParam964,
      chunkFPAJGGOCParam965,
      chunkFPAJGGOCParam966,
    ) {
      return (
        (chunkFPAJGGOCParam965 ??= URI.parse(chunkFPAJGGOCParam964.uri)),
        chunkFPAJGGOCValue203.CancellationToken.is(chunkFPAJGGOCParam966)
          ? this.createAsync(
              chunkFPAJGGOCParam965,
              chunkFPAJGGOCParam964,
              chunkFPAJGGOCParam966,
            )
          : this.create(
              chunkFPAJGGOCParam965,
              chunkFPAJGGOCParam964,
              chunkFPAJGGOCParam966,
            )
      );
    }
    fromString(
      chunkFPAJGGOCParam1274,
      chunkFPAJGGOCParam1275,
      chunkFPAJGGOCParam1276,
    ) {
      return chunkFPAJGGOCValue203.CancellationToken.is(chunkFPAJGGOCParam1276)
        ? this.createAsync(
            chunkFPAJGGOCParam1275,
            chunkFPAJGGOCParam1274,
            chunkFPAJGGOCParam1276,
          )
        : this.create(
            chunkFPAJGGOCParam1275,
            chunkFPAJGGOCParam1274,
            chunkFPAJGGOCParam1276,
          );
    }
    fromModel(chunkFPAJGGOCParam1764, chunkFPAJGGOCParam1765) {
      return this.create(chunkFPAJGGOCParam1765, {
        $model: chunkFPAJGGOCParam1764,
      });
    }
    create(
      chunkFPAJGGOCParam400,
      chunkFPAJGGOCParam401,
      chunkFPAJGGOCParam402,
    ) {
      if (typeof chunkFPAJGGOCParam401 == "string") {
        let chunkFPAJGGOCValue1681 = this.parse(
          chunkFPAJGGOCParam400,
          chunkFPAJGGOCParam401,
          chunkFPAJGGOCParam402,
        );
        return this.createLangiumDocument(
          chunkFPAJGGOCValue1681,
          chunkFPAJGGOCParam400,
          undefined,
          chunkFPAJGGOCParam401,
        );
      } else if ("$model" in chunkFPAJGGOCParam401) {
        let chunkFPAJGGOCValue1577 = {
          value: chunkFPAJGGOCParam401.$model,
          parserErrors: [],
          lexerErrors: [],
        };
        return this.createLangiumDocument(
          chunkFPAJGGOCValue1577,
          chunkFPAJGGOCParam400,
        );
      } else {
        let chunkFPAJGGOCValue1669 = this.parse(
          chunkFPAJGGOCParam400,
          chunkFPAJGGOCParam401.getText(),
          chunkFPAJGGOCParam402,
        );
        return this.createLangiumDocument(
          chunkFPAJGGOCValue1669,
          chunkFPAJGGOCParam400,
          chunkFPAJGGOCParam401,
        );
      }
    }
    async createAsync(
      chunkFPAJGGOCParam583,
      chunkFPAJGGOCParam584,
      chunkFPAJGGOCParam585,
    ) {
      if (typeof chunkFPAJGGOCParam584 == "string") {
        let chunkFPAJGGOCValue1634 = await this.parseAsync(
          chunkFPAJGGOCParam583,
          chunkFPAJGGOCParam584,
          chunkFPAJGGOCParam585,
        );
        return this.createLangiumDocument(
          chunkFPAJGGOCValue1634,
          chunkFPAJGGOCParam583,
          undefined,
          chunkFPAJGGOCParam584,
        );
      } else {
        let chunkFPAJGGOCValue1627 = await this.parseAsync(
          chunkFPAJGGOCParam583,
          chunkFPAJGGOCParam584.getText(),
          chunkFPAJGGOCParam585,
        );
        return this.createLangiumDocument(
          chunkFPAJGGOCValue1627,
          chunkFPAJGGOCParam583,
          chunkFPAJGGOCParam584,
        );
      }
    }
    createLangiumDocument(
      chunkFPAJGGOCParam294,
      chunkFPAJGGOCParam295,
      chunkFPAJGGOCParam296,
      chunkFPAJGGOCParam297,
    ) {
      let chunkFPAJGGOCValue727;
      if (chunkFPAJGGOCParam296)
        chunkFPAJGGOCValue727 = {
          parseResult: chunkFPAJGGOCParam294,
          uri: chunkFPAJGGOCParam295,
          state: chunkFPAJGGOCValue210.Parsed,
          references: [],
          textDocument: chunkFPAJGGOCParam296,
        };
      else {
        let chunkFPAJGGOCValue1151 = this.createTextDocumentGetter(
          chunkFPAJGGOCParam295,
          chunkFPAJGGOCParam297,
        );
        chunkFPAJGGOCValue727 = {
          parseResult: chunkFPAJGGOCParam294,
          uri: chunkFPAJGGOCParam295,
          state: chunkFPAJGGOCValue210.Parsed,
          references: [],
          get textDocument() {
            return chunkFPAJGGOCValue1151();
          },
        };
      }
      return (
        (chunkFPAJGGOCParam294.value.$document = chunkFPAJGGOCValue727),
        chunkFPAJGGOCValue727
      );
    }
    async update(chunkFPAJGGOCParam212, chunkFPAJGGOCParam213) {
      let chunkFPAJGGOCValue621 =
          chunkFPAJGGOCParam212.parseResult.value.$cstNode?.root.fullText,
        chunkFPAJGGOCValue622 = this.textDocuments?.get(
          chunkFPAJGGOCParam212.uri.toString(),
        ),
        chunkFPAJGGOCValue623 = chunkFPAJGGOCValue622
          ? chunkFPAJGGOCValue622.getText()
          : await this.fileSystemProvider.readFile(chunkFPAJGGOCParam212.uri);
      if (chunkFPAJGGOCValue622)
        Object.defineProperty(chunkFPAJGGOCParam212, "textDocument", {
          value: chunkFPAJGGOCValue622,
        });
      else {
        let chunkFPAJGGOCValue1590 = this.createTextDocumentGetter(
          chunkFPAJGGOCParam212.uri,
          chunkFPAJGGOCValue623,
        );
        Object.defineProperty(chunkFPAJGGOCParam212, "textDocument", {
          get: chunkFPAJGGOCValue1590,
        });
      }
      return (
        chunkFPAJGGOCValue621 !== chunkFPAJGGOCValue623 &&
          ((chunkFPAJGGOCParam212.parseResult = await this.parseAsync(
            chunkFPAJGGOCParam212.uri,
            chunkFPAJGGOCValue623,
            chunkFPAJGGOCParam213,
          )),
          (chunkFPAJGGOCParam212.parseResult.value.$document =
            chunkFPAJGGOCParam212)),
        (chunkFPAJGGOCParam212.state = chunkFPAJGGOCValue210.Parsed),
        chunkFPAJGGOCParam212
      );
    }
    parse(
      chunkFPAJGGOCParam1318,
      chunkFPAJGGOCParam1319,
      chunkFPAJGGOCParam1320,
    ) {
      return this.serviceRegistry
        .getServices(chunkFPAJGGOCParam1318)
        .parser.LangiumParser.parse(
          chunkFPAJGGOCParam1319,
          chunkFPAJGGOCParam1320,
        );
    }
    parseAsync(
      chunkFPAJGGOCParam1393,
      chunkFPAJGGOCParam1394,
      chunkFPAJGGOCParam1395,
    ) {
      return this.serviceRegistry
        .getServices(chunkFPAJGGOCParam1393)
        .parser.AsyncParser.parse(
          chunkFPAJGGOCParam1394,
          chunkFPAJGGOCParam1395,
        );
    }
    createTextDocumentGetter(chunkFPAJGGOCParam743, chunkFPAJGGOCParam744) {
      let chunkFPAJGGOCValue1139 = this.serviceRegistry,
        chunkFPAJGGOCValue1140;
      return () =>
        (chunkFPAJGGOCValue1140 ??= mainT.create(
          chunkFPAJGGOCParam743.toString(),
          chunkFPAJGGOCValue1139.getServices(chunkFPAJGGOCParam743)
            .LanguageMetaData.languageId,
          0,
          chunkFPAJGGOCParam744 ?? "",
        ));
    }
  },
  chunkFPAJGGOCValue212 = class {
    constructor(chunkFPAJGGOCParam983) {
      this.documentMap = new Map();
      this.langiumDocumentFactory =
        chunkFPAJGGOCParam983.workspace.LangiumDocumentFactory;
      this.serviceRegistry = chunkFPAJGGOCParam983.ServiceRegistry;
    }
    get all() {
      return chunkFPAJGGOCHelper10(this.documentMap.values());
    }
    addDocument(chunkFPAJGGOCParam936) {
      let t = chunkFPAJGGOCParam936.uri.toString();
      if (this.documentMap.has(t))
        throw Error(`A document with the URI '${t}' is already present.`);
      this.documentMap.set(t, chunkFPAJGGOCParam936);
    }
    getDocument(chunkFPAJGGOCParam1554) {
      let t = chunkFPAJGGOCParam1554.toString();
      return this.documentMap.get(t);
    }
    async getOrCreateDocument(chunkFPAJGGOCParam862, chunkFPAJGGOCParam863) {
      let chunkFPAJGGOCValue1257 = this.getDocument(chunkFPAJGGOCParam862);
      return (
        chunkFPAJGGOCValue1257 ||
        ((chunkFPAJGGOCValue1257 = await this.langiumDocumentFactory.fromUri(
          chunkFPAJGGOCParam862,
          chunkFPAJGGOCParam863,
        )),
        this.addDocument(chunkFPAJGGOCValue1257),
        chunkFPAJGGOCValue1257)
      );
    }
    createDocument(
      chunkFPAJGGOCParam634,
      chunkFPAJGGOCParam635,
      chunkFPAJGGOCParam636,
    ) {
      if (chunkFPAJGGOCParam636)
        return this.langiumDocumentFactory
          .fromString(
            chunkFPAJGGOCParam635,
            chunkFPAJGGOCParam634,
            chunkFPAJGGOCParam636,
          )
          .then((value) => (this.addDocument(value), value));
      {
        let chunkFPAJGGOCValue1652 = this.langiumDocumentFactory.fromString(
          chunkFPAJGGOCParam635,
          chunkFPAJGGOCParam634,
        );
        return (
          this.addDocument(chunkFPAJGGOCValue1652),
          chunkFPAJGGOCValue1652
        );
      }
    }
    hasDocument(chunkFPAJGGOCParam1708) {
      return this.documentMap.has(chunkFPAJGGOCParam1708.toString());
    }
    invalidateDocument(chunkFPAJGGOCParam537) {
      let t = chunkFPAJGGOCParam537.toString(),
        chunkFPAJGGOCValue969 = this.documentMap.get(t);
      return (
        chunkFPAJGGOCValue969 &&
          (this.serviceRegistry
            .getServices(chunkFPAJGGOCParam537)
            .references.Linker.unlink(chunkFPAJGGOCValue969),
          (chunkFPAJGGOCValue969.state = chunkFPAJGGOCValue210.Changed),
          (chunkFPAJGGOCValue969.precomputedScopes = undefined),
          (chunkFPAJGGOCValue969.diagnostics = undefined)),
        chunkFPAJGGOCValue969
      );
    }
    deleteDocument(chunkFPAJGGOCParam1096) {
      let t = chunkFPAJGGOCParam1096.toString(),
        chunkFPAJGGOCValue1437 = this.documentMap.get(t);
      return (
        chunkFPAJGGOCValue1437 &&
          ((chunkFPAJGGOCValue1437.state = chunkFPAJGGOCValue210.Changed),
          this.documentMap.delete(t)),
        chunkFPAJGGOCValue1437
      );
    }
  },
  chunkFPAJGGOCValue213 = Symbol("ref_resolving"),
  chunkFPAJGGOCValue214 = class {
    constructor(chunkFPAJGGOCParam686) {
      this.reflection = chunkFPAJGGOCParam686.shared.AstReflection;
      this.langiumDocuments = () =>
        chunkFPAJGGOCParam686.shared.workspace.LangiumDocuments;
      this.scopeProvider = chunkFPAJGGOCParam686.references.ScopeProvider;
      this.astNodeLocator = chunkFPAJGGOCParam686.workspace.AstNodeLocator;
    }
    async link(
      chunkFPAJGGOCParam1137,
      chunkFPAJGGOCParam1138 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      for (let chunkFPAJGGOCValue1696 of chunkFPAJGGOCHelper54(
        chunkFPAJGGOCParam1137.parseResult.value,
      )) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam1138);
        chunkFPAJGGOCHelper56(chunkFPAJGGOCValue1696).forEach((item) =>
          this.doLink(item, chunkFPAJGGOCParam1137),
        );
      }
    }
    doLink(chunkFPAJGGOCParam136, chunkFPAJGGOCParam137) {
      let chunkFPAJGGOCValue540 = chunkFPAJGGOCParam136.reference;
      if (chunkFPAJGGOCValue540._ref === undefined) {
        chunkFPAJGGOCValue540._ref = chunkFPAJGGOCValue213;
        try {
          let chunkFPAJGGOCValue948 = this.getCandidate(chunkFPAJGGOCParam136);
          chunkFPAJGGOCHelper4(chunkFPAJGGOCValue948)
            ? (chunkFPAJGGOCValue540._ref = chunkFPAJGGOCValue948)
            : ((chunkFPAJGGOCValue540._nodeDescription = chunkFPAJGGOCValue948),
              this.langiumDocuments().hasDocument(
                chunkFPAJGGOCValue948.documentUri,
              )
                ? (chunkFPAJGGOCValue540._ref =
                    this.loadAstNode(chunkFPAJGGOCValue948) ??
                    this.createLinkingError(
                      chunkFPAJGGOCParam136,
                      chunkFPAJGGOCValue948,
                    ))
                : (chunkFPAJGGOCValue540._ref = undefined));
        } catch (chunkFPAJGGOCValue911) {
          console.error(
            `An error occurred while resolving reference to '${chunkFPAJGGOCValue540.$refText}':`,
            chunkFPAJGGOCValue911,
          );
          let chunkFPAJGGOCValue912 =
            chunkFPAJGGOCValue911.message ?? String(chunkFPAJGGOCValue911);
          chunkFPAJGGOCValue540._ref = Object.assign(
            Object.assign({}, chunkFPAJGGOCParam136),
            {
              message: `An error occurred while resolving reference to '${chunkFPAJGGOCValue540.$refText}': ${chunkFPAJGGOCValue912}`,
            },
          );
        }
        chunkFPAJGGOCParam137.references.push(chunkFPAJGGOCValue540);
      }
    }
    unlink(chunkFPAJGGOCParam1331) {
      for (let chunkFPAJGGOCValue1817 of chunkFPAJGGOCParam1331.references) {
        delete chunkFPAJGGOCValue1817._ref;
        delete chunkFPAJGGOCValue1817._nodeDescription;
      }
      chunkFPAJGGOCParam1331.references = [];
    }
    getCandidate(chunkFPAJGGOCParam1146) {
      return (
        this.scopeProvider
          .getScope(chunkFPAJGGOCParam1146)
          .getElement(chunkFPAJGGOCParam1146.reference.$refText) ??
        this.createLinkingError(chunkFPAJGGOCParam1146)
      );
    }
    buildReference(
      chunkFPAJGGOCParam35,
      chunkFPAJGGOCParam36,
      chunkFPAJGGOCParam37,
      chunkFPAJGGOCParam38,
    ) {
      let chunkFPAJGGOCValue428 = this,
        chunkFPAJGGOCValue429 = {
          $refNode: chunkFPAJGGOCParam37,
          $refText: chunkFPAJGGOCParam38,
          get ref() {
            if (chunkFPAJGGOCHelper1(this._ref)) return this._ref;
            if (chunkFPAJGGOCHelper3(this._nodeDescription))
              this._ref =
                chunkFPAJGGOCValue428.loadAstNode(this._nodeDescription) ??
                chunkFPAJGGOCValue428.createLinkingError(
                  {
                    reference: chunkFPAJGGOCValue429,
                    container: chunkFPAJGGOCParam35,
                    property: chunkFPAJGGOCParam36,
                  },
                  this._nodeDescription,
                );
            else if (this._ref === undefined) {
              this._ref = chunkFPAJGGOCValue213;
              let chunkFPAJGGOCValue734 =
                  chunkFPAJGGOCHelper51(chunkFPAJGGOCParam35).$document,
                chunkFPAJGGOCValue735 = chunkFPAJGGOCValue428.getLinkedNode({
                  reference: chunkFPAJGGOCValue429,
                  container: chunkFPAJGGOCParam35,
                  property: chunkFPAJGGOCParam36,
                });
              if (
                chunkFPAJGGOCValue735.error &&
                chunkFPAJGGOCValue734 &&
                chunkFPAJGGOCValue734.state <
                  chunkFPAJGGOCValue210.ComputedScopes
              ) {
                this._ref = undefined;
                return;
              }
              this._ref =
                chunkFPAJGGOCValue735.node ?? chunkFPAJGGOCValue735.error;
              this._nodeDescription = chunkFPAJGGOCValue735.descr;
              chunkFPAJGGOCValue734?.references.push(this);
            } else if (this._ref === chunkFPAJGGOCValue213)
              throw Error(
                `Cyclic reference resolution detected: ${chunkFPAJGGOCValue428.astNodeLocator.getAstNodePath(chunkFPAJGGOCParam35)}/${chunkFPAJGGOCParam36} (symbol '${chunkFPAJGGOCParam38}')`,
              );
            return chunkFPAJGGOCHelper1(this._ref) ? this._ref : undefined;
          },
          get $nodeDescription() {
            return this._nodeDescription;
          },
          get error() {
            return chunkFPAJGGOCHelper4(this._ref) ? this._ref : undefined;
          },
        };
      return chunkFPAJGGOCValue429;
    }
    getLinkedNode(chunkFPAJGGOCParam194) {
      try {
        let chunkFPAJGGOCValue1187 = this.getCandidate(chunkFPAJGGOCParam194);
        if (chunkFPAJGGOCHelper4(chunkFPAJGGOCValue1187))
          return {
            error: chunkFPAJGGOCValue1187,
          };
        let chunkFPAJGGOCValue1188 = this.loadAstNode(chunkFPAJGGOCValue1187);
        return chunkFPAJGGOCValue1188
          ? {
              node: chunkFPAJGGOCValue1188,
              descr: chunkFPAJGGOCValue1187,
            }
          : {
              descr: chunkFPAJGGOCValue1187,
              error: this.createLinkingError(
                chunkFPAJGGOCParam194,
                chunkFPAJGGOCValue1187,
              ),
            };
      } catch (chunkFPAJGGOCValue861) {
        console.error(
          `An error occurred while resolving reference to '${chunkFPAJGGOCParam194.reference.$refText}':`,
          chunkFPAJGGOCValue861,
        );
        let chunkFPAJGGOCValue862 =
          chunkFPAJGGOCValue861.message ?? String(chunkFPAJGGOCValue861);
        return {
          error: Object.assign(Object.assign({}, chunkFPAJGGOCParam194), {
            message: `An error occurred while resolving reference to '${chunkFPAJGGOCParam194.reference.$refText}': ${chunkFPAJGGOCValue862}`,
          }),
        };
      }
    }
    loadAstNode(chunkFPAJGGOCParam921) {
      if (chunkFPAJGGOCParam921.node) return chunkFPAJGGOCParam921.node;
      let chunkFPAJGGOCValue1308 = this.langiumDocuments().getDocument(
        chunkFPAJGGOCParam921.documentUri,
      );
      if (chunkFPAJGGOCValue1308)
        return this.astNodeLocator.getAstNode(
          chunkFPAJGGOCValue1308.parseResult.value,
          chunkFPAJGGOCParam921.path,
        );
    }
    createLinkingError(chunkFPAJGGOCParam320, chunkFPAJGGOCParam321) {
      let chunkFPAJGGOCValue757 = chunkFPAJGGOCHelper51(
        chunkFPAJGGOCParam320.container,
      ).$document;
      chunkFPAJGGOCValue757 &&
        chunkFPAJGGOCValue757.state < chunkFPAJGGOCValue210.ComputedScopes &&
        console.warn(
          `Attempted reference resolution before document reached ComputedScopes state (${chunkFPAJGGOCValue757.uri}).`,
        );
      let chunkFPAJGGOCValue758 = this.reflection.getReferenceType(
        chunkFPAJGGOCParam320,
      );
      return Object.assign(Object.assign({}, chunkFPAJGGOCParam320), {
        message: `Could not resolve reference to ${chunkFPAJGGOCValue758} named '${chunkFPAJGGOCParam320.reference.$refText}'.`,
        targetDescription: chunkFPAJGGOCParam321,
      });
    }
  };
function chunkFPAJGGOCHelper314(chunkFPAJGGOCParam1951) {
  return typeof chunkFPAJGGOCParam1951.name == "string";
}
var chunkFPAJGGOCValue215 = class {
    getName(chunkFPAJGGOCParam2006) {
      if (chunkFPAJGGOCHelper314(chunkFPAJGGOCParam2006))
        return chunkFPAJGGOCParam2006.name;
    }
    getNameNode(chunkFPAJGGOCParam1897) {
      return chunkFPAJGGOCHelper76(chunkFPAJGGOCParam1897.$cstNode, "name");
    }
  },
  chunkFPAJGGOCValue216 = class {
    constructor(chunkFPAJGGOCParam979) {
      this.nameProvider = chunkFPAJGGOCParam979.references.NameProvider;
      this.index = chunkFPAJGGOCParam979.shared.workspace.IndexManager;
      this.nodeLocator = chunkFPAJGGOCParam979.workspace.AstNodeLocator;
    }
    findDeclaration(chunkFPAJGGOCParam225) {
      if (chunkFPAJGGOCParam225) {
        let chunkFPAJGGOCValue672 = chunkFPAJGGOCHelper80(
            chunkFPAJGGOCParam225,
          ),
          chunkFPAJGGOCValue673 = chunkFPAJGGOCParam225.astNode;
        if (chunkFPAJGGOCValue672 && chunkFPAJGGOCValue673) {
          let chunkFPAJGGOCValue910 =
            chunkFPAJGGOCValue673[chunkFPAJGGOCValue672.feature];
          if (chunkFPAJGGOCHelper2(chunkFPAJGGOCValue910))
            return chunkFPAJGGOCValue910.ref;
          if (Array.isArray(chunkFPAJGGOCValue910)) {
            for (let chunkFPAJGGOCValue1228 of chunkFPAJGGOCValue910)
              if (
                chunkFPAJGGOCHelper2(chunkFPAJGGOCValue1228) &&
                chunkFPAJGGOCValue1228.$refNode &&
                chunkFPAJGGOCValue1228.$refNode.offset <=
                  chunkFPAJGGOCParam225.offset &&
                chunkFPAJGGOCValue1228.$refNode.end >= chunkFPAJGGOCParam225.end
              )
                return chunkFPAJGGOCValue1228.ref;
          }
        }
        if (chunkFPAJGGOCValue673) {
          let chunkFPAJGGOCValue1640 = this.nameProvider.getNameNode(
            chunkFPAJGGOCValue673,
          );
          if (
            chunkFPAJGGOCValue1640 &&
            (chunkFPAJGGOCValue1640 === chunkFPAJGGOCParam225 ||
              chunkFPAJGGOCHelper12(
                chunkFPAJGGOCParam225,
                chunkFPAJGGOCValue1640,
              ))
          )
            return chunkFPAJGGOCValue673;
        }
      }
    }
    findDeclarationNode(chunkFPAJGGOCParam1204) {
      let chunkFPAJGGOCValue1514 = this.findDeclaration(chunkFPAJGGOCParam1204);
      if (chunkFPAJGGOCValue1514?.$cstNode)
        return (
          this.nameProvider.getNameNode(chunkFPAJGGOCValue1514) ??
          chunkFPAJGGOCValue1514.$cstNode
        );
    }
    findReferences(chunkFPAJGGOCParam414, chunkFPAJGGOCParam415) {
      let chunkFPAJGGOCValue827 = [];
      if (chunkFPAJGGOCParam415.includeDeclaration) {
        let chunkFPAJGGOCValue1792 = this.getReferenceToSelf(
          chunkFPAJGGOCParam414,
        );
        chunkFPAJGGOCValue1792 &&
          chunkFPAJGGOCValue827.push(chunkFPAJGGOCValue1792);
      }
      let chunkFPAJGGOCValue828 = this.index.findAllReferences(
        chunkFPAJGGOCParam414,
        this.nodeLocator.getAstNodePath(chunkFPAJGGOCParam414),
      );
      return (
        chunkFPAJGGOCParam415.documentUri &&
          (chunkFPAJGGOCValue828 = chunkFPAJGGOCValue828.filter((item) =>
            chunkFPAJGGOCValue209.equals(
              item.sourceUri,
              chunkFPAJGGOCParam415.documentUri,
            ),
          )),
        chunkFPAJGGOCValue827.push(...chunkFPAJGGOCValue828),
        chunkFPAJGGOCHelper10(chunkFPAJGGOCValue827)
      );
    }
    getReferenceToSelf(chunkFPAJGGOCParam495) {
      let chunkFPAJGGOCValue923 = this.nameProvider.getNameNode(
        chunkFPAJGGOCParam495,
      );
      if (chunkFPAJGGOCValue923) {
        let chunkFPAJGGOCValue1107 = chunkFPAJGGOCHelper50(
            chunkFPAJGGOCParam495,
          ),
          chunkFPAJGGOCValue1108 = this.nodeLocator.getAstNodePath(
            chunkFPAJGGOCParam495,
          );
        return {
          sourceUri: chunkFPAJGGOCValue1107.uri,
          sourcePath: chunkFPAJGGOCValue1108,
          targetUri: chunkFPAJGGOCValue1107.uri,
          targetPath: chunkFPAJGGOCValue1108,
          segment: $e(chunkFPAJGGOCValue923),
          local: true,
        };
      }
    }
  },
  chunkFPAJGGOCValue217 = class {
    constructor(chunkFPAJGGOCParam1455) {
      if (((this.map = new Map()), chunkFPAJGGOCParam1455))
        for (let [
          chunkFPAJGGOCValue1867,
          chunkFPAJGGOCValue1868,
        ] of chunkFPAJGGOCParam1455)
          this.add(chunkFPAJGGOCValue1867, chunkFPAJGGOCValue1868);
    }
    get size() {
      return chunkFPAJGGOCValue6.sum(
        chunkFPAJGGOCHelper10(this.map.values()).map((item) => item.length),
      );
    }
    clear() {
      this.map.clear();
    }
    delete(chunkFPAJGGOCParam600, chunkFPAJGGOCParam601) {
      if (chunkFPAJGGOCParam601 === undefined)
        return this.map.delete(chunkFPAJGGOCParam600);
      {
        let chunkFPAJGGOCValue1242 = this.map.get(chunkFPAJGGOCParam600);
        if (chunkFPAJGGOCValue1242) {
          let chunkFPAJGGOCValue1526 = chunkFPAJGGOCValue1242.indexOf(
            chunkFPAJGGOCParam601,
          );
          if (chunkFPAJGGOCValue1526 >= 0)
            return (
              chunkFPAJGGOCValue1242.length === 1
                ? this.map.delete(chunkFPAJGGOCParam600)
                : chunkFPAJGGOCValue1242.splice(chunkFPAJGGOCValue1526, 1),
              true
            );
        }
        return false;
      }
    }
    get(chunkFPAJGGOCParam2007) {
      return this.map.get(chunkFPAJGGOCParam2007) ?? [];
    }
    has(chunkFPAJGGOCParam1147, chunkFPAJGGOCParam1148) {
      if (chunkFPAJGGOCParam1148 === undefined)
        return this.map.has(chunkFPAJGGOCParam1147);
      {
        let chunkFPAJGGOCValue1763 = this.map.get(chunkFPAJGGOCParam1147);
        return chunkFPAJGGOCValue1763
          ? chunkFPAJGGOCValue1763.indexOf(chunkFPAJGGOCParam1148) >= 0
          : false;
      }
    }
    add(chunkFPAJGGOCParam1302, chunkFPAJGGOCParam1303) {
      return (
        this.map.has(chunkFPAJGGOCParam1302)
          ? this.map.get(chunkFPAJGGOCParam1302).push(chunkFPAJGGOCParam1303)
          : this.map.set(chunkFPAJGGOCParam1302, [chunkFPAJGGOCParam1303]),
        this
      );
    }
    addAll(chunkFPAJGGOCParam1102, chunkFPAJGGOCParam1103) {
      return (
        this.map.has(chunkFPAJGGOCParam1102)
          ? this.map.get(chunkFPAJGGOCParam1102).push(...chunkFPAJGGOCParam1103)
          : this.map.set(
              chunkFPAJGGOCParam1102,
              Array.from(chunkFPAJGGOCParam1103),
            ),
        this
      );
    }
    forEach(chunkFPAJGGOCParam1582) {
      this.map.forEach((item, index) =>
        item.forEach((_item) => chunkFPAJGGOCParam1582(_item, index, this)),
      );
    }
    [Symbol.iterator]() {
      return this.entries().iterator();
    }
    entries() {
      return chunkFPAJGGOCHelper10(this.map.entries()).flatMap(
        ([chunkFPAJGGOCParam2161, chunkFPAJGGOCParam2162]) =>
          chunkFPAJGGOCParam2162.map((item) => [chunkFPAJGGOCParam2161, item]),
      );
    }
    keys() {
      return chunkFPAJGGOCHelper10(this.map.keys());
    }
    values() {
      return chunkFPAJGGOCHelper10(this.map.values()).flat();
    }
    entriesGroupedByKey() {
      return chunkFPAJGGOCHelper10(this.map.entries());
    }
  },
  chunkFPAJGGOCValue218 = class {
    get size() {
      return this.map.size;
    }
    constructor(chunkFPAJGGOCParam1268) {
      if (
        ((this.map = new Map()),
        (this.inverse = new Map()),
        chunkFPAJGGOCParam1268)
      )
        for (let [
          chunkFPAJGGOCValue1869,
          chunkFPAJGGOCValue1870,
        ] of chunkFPAJGGOCParam1268)
          this.set(chunkFPAJGGOCValue1869, chunkFPAJGGOCValue1870);
    }
    clear() {
      this.map.clear();
      this.inverse.clear();
    }
    set(chunkFPAJGGOCParam1602, chunkFPAJGGOCParam1603) {
      return (
        this.map.set(chunkFPAJGGOCParam1602, chunkFPAJGGOCParam1603),
        this.inverse.set(chunkFPAJGGOCParam1603, chunkFPAJGGOCParam1602),
        this
      );
    }
    get(chunkFPAJGGOCParam2103) {
      return this.map.get(chunkFPAJGGOCParam2103);
    }
    getKey(chunkFPAJGGOCParam1988) {
      return this.inverse.get(chunkFPAJGGOCParam1988);
    }
    delete(chunkFPAJGGOCParam1205) {
      let chunkFPAJGGOCValue1515 = this.map.get(chunkFPAJGGOCParam1205);
      return chunkFPAJGGOCValue1515 === undefined
        ? false
        : (this.map.delete(chunkFPAJGGOCParam1205),
          this.inverse.delete(chunkFPAJGGOCValue1515),
          true);
    }
  },
  chunkFPAJGGOCValue219 = class {
    constructor(chunkFPAJGGOCParam1191) {
      this.nameProvider = chunkFPAJGGOCParam1191.references.NameProvider;
      this.descriptions =
        chunkFPAJGGOCParam1191.workspace.AstNodeDescriptionProvider;
    }
    async computeExports(
      chunkFPAJGGOCParam1252,
      chunkFPAJGGOCParam1253 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      return this.computeExportsForNode(
        chunkFPAJGGOCParam1252.parseResult.value,
        chunkFPAJGGOCParam1252,
        undefined,
        chunkFPAJGGOCParam1253,
      );
    }
    async computeExportsForNode(
      chunkFPAJGGOCParam872,
      chunkFPAJGGOCParam873,
      chunkFPAJGGOCParam874 = chunkFPAJGGOCHelper52,
      chunkFPAJGGOCParam875 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1262 = [];
      this.exportNode(
        chunkFPAJGGOCParam872,
        chunkFPAJGGOCValue1262,
        chunkFPAJGGOCParam873,
      );
      for (let chunkFPAJGGOCValue1843 of chunkFPAJGGOCParam874(
        chunkFPAJGGOCParam872,
      )) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam875);
        this.exportNode(
          chunkFPAJGGOCValue1843,
          chunkFPAJGGOCValue1262,
          chunkFPAJGGOCParam873,
        );
      }
      return chunkFPAJGGOCValue1262;
    }
    exportNode(
      chunkFPAJGGOCParam1265,
      chunkFPAJGGOCParam1266,
      chunkFPAJGGOCParam1267,
    ) {
      let chunkFPAJGGOCValue1548 = this.nameProvider.getName(
        chunkFPAJGGOCParam1265,
      );
      chunkFPAJGGOCValue1548 &&
        chunkFPAJGGOCParam1266.push(
          this.descriptions.createDescription(
            chunkFPAJGGOCParam1265,
            chunkFPAJGGOCValue1548,
            chunkFPAJGGOCParam1267,
          ),
        );
    }
    async computeLocalScopes(
      chunkFPAJGGOCParam900,
      chunkFPAJGGOCParam901 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1279 = chunkFPAJGGOCParam900.parseResult.value,
        chunkFPAJGGOCValue1280 = new chunkFPAJGGOCValue217();
      for (let chunkFPAJGGOCValue1837 of chunkFPAJGGOCHelper53(
        chunkFPAJGGOCValue1279,
      )) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam901);
        this.processNode(
          chunkFPAJGGOCValue1837,
          chunkFPAJGGOCParam900,
          chunkFPAJGGOCValue1280,
        );
      }
      return chunkFPAJGGOCValue1280;
    }
    processNode(
      chunkFPAJGGOCParam967,
      chunkFPAJGGOCParam968,
      chunkFPAJGGOCParam969,
    ) {
      let chunkFPAJGGOCValue1339 = chunkFPAJGGOCParam967.$container;
      if (chunkFPAJGGOCValue1339) {
        let chunkFPAJGGOCValue1602 = this.nameProvider.getName(
          chunkFPAJGGOCParam967,
        );
        chunkFPAJGGOCValue1602 &&
          chunkFPAJGGOCParam969.add(
            chunkFPAJGGOCValue1339,
            this.descriptions.createDescription(
              chunkFPAJGGOCParam967,
              chunkFPAJGGOCValue1602,
              chunkFPAJGGOCParam968,
            ),
          );
      }
    }
  },
  chunkFPAJGGOCValue220 = class {
    constructor(
      chunkFPAJGGOCParam1206,
      chunkFPAJGGOCParam1207,
      chunkFPAJGGOCParam1208,
    ) {
      this.elements = chunkFPAJGGOCParam1206;
      this.outerScope = chunkFPAJGGOCParam1207;
      this.caseInsensitive = chunkFPAJGGOCParam1208?.caseInsensitive ?? false;
    }
    getAllElements() {
      return this.outerScope
        ? this.elements.concat(this.outerScope.getAllElements())
        : this.elements;
    }
    getElement(chunkFPAJGGOCParam682) {
      let chunkFPAJGGOCValue1088 = this.caseInsensitive
        ? this.elements.find(
            (item) =>
              item.name.toLowerCase() === chunkFPAJGGOCParam682.toLowerCase(),
          )
        : this.elements.find((item) => item.name === chunkFPAJGGOCParam682);
      if (chunkFPAJGGOCValue1088) return chunkFPAJGGOCValue1088;
      if (this.outerScope)
        return this.outerScope.getElement(chunkFPAJGGOCParam682);
    }
  },
  chunkFPAJGGOCValue221 = class {
    constructor(
      chunkFPAJGGOCParam637,
      chunkFPAJGGOCParam638,
      chunkFPAJGGOCParam639,
    ) {
      this.elements = new Map();
      this.caseInsensitive = chunkFPAJGGOCParam639?.caseInsensitive ?? false;
      for (let chunkFPAJGGOCValue1584 of chunkFPAJGGOCParam637) {
        let chunkFPAJGGOCValue1653 = this.caseInsensitive
          ? chunkFPAJGGOCValue1584.name.toLowerCase()
          : chunkFPAJGGOCValue1584.name;
        this.elements.set(chunkFPAJGGOCValue1653, chunkFPAJGGOCValue1584);
      }
      this.outerScope = chunkFPAJGGOCParam638;
    }
    getElement(chunkFPAJGGOCParam922) {
      let chunkFPAJGGOCValue1313 = this.caseInsensitive
          ? chunkFPAJGGOCParam922.toLowerCase()
          : chunkFPAJGGOCParam922,
        chunkFPAJGGOCValue1314 = this.elements.get(chunkFPAJGGOCValue1313);
      if (chunkFPAJGGOCValue1314) return chunkFPAJGGOCValue1314;
      if (this.outerScope)
        return this.outerScope.getElement(chunkFPAJGGOCParam922);
    }
    getAllElements() {
      let chunkFPAJGGOCValue1401 = chunkFPAJGGOCHelper10(
        this.elements.values(),
      );
      return (
        this.outerScope &&
          (chunkFPAJGGOCValue1401 = chunkFPAJGGOCValue1401.concat(
            this.outerScope.getAllElements(),
          )),
        chunkFPAJGGOCValue1401
      );
    }
  },
  chunkFPAJGGOCValue222 = class {
    constructor() {
      this.toDispose = [];
      this.isDisposed = false;
    }
    onDispose(chunkFPAJGGOCParam2008) {
      this.toDispose.push(chunkFPAJGGOCParam2008);
    }
    dispose() {
      this.throwIfDisposed();
      this.clear();
      this.isDisposed = true;
      this.toDispose.forEach((item) => item.dispose());
    }
    throwIfDisposed() {
      if (this.isDisposed) throw Error("This cache has already been disposed");
    }
  },
  chunkFPAJGGOCValue223 = class extends chunkFPAJGGOCValue222 {
    constructor() {
      super(...arguments);
      this.cache = new Map();
    }
    has(chunkFPAJGGOCParam1691) {
      return (this.throwIfDisposed(), this.cache.has(chunkFPAJGGOCParam1691));
    }
    set(chunkFPAJGGOCParam1709, chunkFPAJGGOCParam1710) {
      this.throwIfDisposed();
      this.cache.set(chunkFPAJGGOCParam1709, chunkFPAJGGOCParam1710);
    }
    get(chunkFPAJGGOCParam944, chunkFPAJGGOCParam945) {
      if ((this.throwIfDisposed(), this.cache.has(chunkFPAJGGOCParam944)))
        return this.cache.get(chunkFPAJGGOCParam944);
      if (chunkFPAJGGOCParam945) {
        let chunkFPAJGGOCValue1809 = chunkFPAJGGOCParam945();
        return (
          this.cache.set(chunkFPAJGGOCParam944, chunkFPAJGGOCValue1809),
          chunkFPAJGGOCValue1809
        );
      } else return;
    }
    delete(chunkFPAJGGOCParam1629) {
      return (
        this.throwIfDisposed(),
        this.cache.delete(chunkFPAJGGOCParam1629)
      );
    }
    clear() {
      this.throwIfDisposed();
      this.cache.clear();
    }
  },
  chunkFPAJGGOCValue224 = class extends chunkFPAJGGOCValue222 {
    constructor(chunkFPAJGGOCParam1437) {
      super();
      this.cache = new Map();
      this.converter =
        chunkFPAJGGOCParam1437 ??
        ((chunkFPAJGGOCParam2333) => chunkFPAJGGOCParam2333);
    }
    has(chunkFPAJGGOCParam1555, chunkFPAJGGOCParam1556) {
      return (
        this.throwIfDisposed(),
        this.cacheForContext(chunkFPAJGGOCParam1555).has(chunkFPAJGGOCParam1556)
      );
    }
    set(
      chunkFPAJGGOCParam1564,
      chunkFPAJGGOCParam1565,
      chunkFPAJGGOCParam1566,
    ) {
      this.throwIfDisposed();
      this.cacheForContext(chunkFPAJGGOCParam1564).set(
        chunkFPAJGGOCParam1565,
        chunkFPAJGGOCParam1566,
      );
    }
    get(chunkFPAJGGOCParam857, chunkFPAJGGOCParam858, chunkFPAJGGOCParam859) {
      this.throwIfDisposed();
      let chunkFPAJGGOCValue1255 = this.cacheForContext(chunkFPAJGGOCParam857);
      if (chunkFPAJGGOCValue1255.has(chunkFPAJGGOCParam858))
        return chunkFPAJGGOCValue1255.get(chunkFPAJGGOCParam858);
      if (chunkFPAJGGOCParam859) {
        let chunkFPAJGGOCValue1833 = chunkFPAJGGOCParam859();
        return (
          chunkFPAJGGOCValue1255.set(
            chunkFPAJGGOCParam858,
            chunkFPAJGGOCValue1833,
          ),
          chunkFPAJGGOCValue1833
        );
      } else return;
    }
    delete(chunkFPAJGGOCParam1499, chunkFPAJGGOCParam1500) {
      return (
        this.throwIfDisposed(),
        this.cacheForContext(chunkFPAJGGOCParam1499).delete(
          chunkFPAJGGOCParam1500,
        )
      );
    }
    clear(chunkFPAJGGOCParam1149) {
      if ((this.throwIfDisposed(), chunkFPAJGGOCParam1149)) {
        let chunkFPAJGGOCValue1801 = this.converter(chunkFPAJGGOCParam1149);
        this.cache.delete(chunkFPAJGGOCValue1801);
      } else this.cache.clear();
    }
    cacheForContext(chunkFPAJGGOCParam1158) {
      let chunkFPAJGGOCValue1486 = this.converter(chunkFPAJGGOCParam1158),
        chunkFPAJGGOCValue1487 = this.cache.get(chunkFPAJGGOCValue1486);
      return (
        chunkFPAJGGOCValue1487 ||
          ((chunkFPAJGGOCValue1487 = new Map()),
          this.cache.set(chunkFPAJGGOCValue1486, chunkFPAJGGOCValue1487)),
        chunkFPAJGGOCValue1487
      );
    }
  },
  chunkFPAJGGOCValue225 = class extends chunkFPAJGGOCValue223 {
    constructor(chunkFPAJGGOCParam263, chunkFPAJGGOCParam264) {
      super();
      chunkFPAJGGOCParam264
        ? (this.toDispose.push(
            chunkFPAJGGOCParam263.workspace.DocumentBuilder.onBuildPhase(
              chunkFPAJGGOCParam264,
              () => {
                this.clear();
              },
            ),
          ),
          this.toDispose.push(
            chunkFPAJGGOCParam263.workspace.DocumentBuilder.onUpdate(
              (chunkFPAJGGOCParam1682, chunkFPAJGGOCParam1683) => {
                chunkFPAJGGOCParam1683.length > 0 && this.clear();
              },
            ),
          ))
        : this.toDispose.push(
            chunkFPAJGGOCParam263.workspace.DocumentBuilder.onUpdate(() => {
              this.clear();
            }),
          );
    }
  },
  chunkFPAJGGOCValue226 = class {
    constructor(chunkFPAJGGOCParam565) {
      this.reflection = chunkFPAJGGOCParam565.shared.AstReflection;
      this.nameProvider = chunkFPAJGGOCParam565.references.NameProvider;
      this.descriptions =
        chunkFPAJGGOCParam565.workspace.AstNodeDescriptionProvider;
      this.indexManager = chunkFPAJGGOCParam565.shared.workspace.IndexManager;
      this.globalScopeCache = new chunkFPAJGGOCValue225(
        chunkFPAJGGOCParam565.shared,
      );
    }
    getScope(chunkFPAJGGOCParam305) {
      let chunkFPAJGGOCValue736 = [],
        chunkFPAJGGOCValue737 = this.reflection.getReferenceType(
          chunkFPAJGGOCParam305,
        ),
        chunkFPAJGGOCValue738 = chunkFPAJGGOCHelper50(
          chunkFPAJGGOCParam305.container,
        ).precomputedScopes;
      if (chunkFPAJGGOCValue738) {
        let chunkFPAJGGOCValue1189 = chunkFPAJGGOCParam305.container;
        do {
          let chunkFPAJGGOCValue1393 = chunkFPAJGGOCValue738.get(
            chunkFPAJGGOCValue1189,
          );
          chunkFPAJGGOCValue1393.length > 0 &&
            chunkFPAJGGOCValue736.push(
              chunkFPAJGGOCHelper10(chunkFPAJGGOCValue1393).filter((item) =>
                this.reflection.isSubtype(item.type, chunkFPAJGGOCValue737),
              ),
            );
          chunkFPAJGGOCValue1189 = chunkFPAJGGOCValue1189.$container;
        } while (chunkFPAJGGOCValue1189);
      }
      let chunkFPAJGGOCValue739 = this.getGlobalScope(
        chunkFPAJGGOCValue737,
        chunkFPAJGGOCParam305,
      );
      for (
        let chunkFPAJGGOCValue1819 = chunkFPAJGGOCValue736.length - 1;
        chunkFPAJGGOCValue1819 >= 0;
        chunkFPAJGGOCValue1819--
      )
        chunkFPAJGGOCValue739 = this.createScope(
          chunkFPAJGGOCValue736[chunkFPAJGGOCValue1819],
          chunkFPAJGGOCValue739,
        );
      return chunkFPAJGGOCValue739;
    }
    createScope(
      chunkFPAJGGOCParam1864,
      chunkFPAJGGOCParam1865,
      chunkFPAJGGOCParam1866,
    ) {
      return new chunkFPAJGGOCValue220(
        chunkFPAJGGOCHelper10(chunkFPAJGGOCParam1864),
        chunkFPAJGGOCParam1865,
        chunkFPAJGGOCParam1866,
      );
    }
    createScopeForNodes(
      chunkFPAJGGOCParam645,
      chunkFPAJGGOCParam646,
      chunkFPAJGGOCParam647,
    ) {
      return new chunkFPAJGGOCValue220(
        chunkFPAJGGOCHelper10(chunkFPAJGGOCParam645)
          .map((item) => {
            let chunkFPAJGGOCValue1536 = this.nameProvider.getName(item);
            if (chunkFPAJGGOCValue1536)
              return this.descriptions.createDescription(
                item,
                chunkFPAJGGOCValue1536,
              );
          })
          .nonNullable(),
        chunkFPAJGGOCParam646,
        chunkFPAJGGOCParam647,
      );
    }
    getGlobalScope(chunkFPAJGGOCParam1225, chunkFPAJGGOCParam1226) {
      return this.globalScopeCache.get(
        chunkFPAJGGOCParam1225,
        () =>
          new chunkFPAJGGOCValue221(
            this.indexManager.allElements(chunkFPAJGGOCParam1225),
          ),
      );
    }
  };
function chunkFPAJGGOCHelper315(chunkFPAJGGOCParam1915) {
  return typeof chunkFPAJGGOCParam1915.$comment == "string";
}
function chunkFPAJGGOCHelper316(chunkFPAJGGOCParam1537) {
  return (
    typeof chunkFPAJGGOCParam1537 == "object" &&
    !!chunkFPAJGGOCParam1537 &&
    ("$ref" in chunkFPAJGGOCParam1537 || "$error" in chunkFPAJGGOCParam1537)
  );
}
var chunkFPAJGGOCValue227 = class {
    constructor(chunkFPAJGGOCParam381) {
      this.ignoreProperties = new Set([
        "$container",
        "$containerProperty",
        "$containerIndex",
        "$document",
        "$cstNode",
      ]);
      this.langiumDocuments =
        chunkFPAJGGOCParam381.shared.workspace.LangiumDocuments;
      this.astNodeLocator = chunkFPAJGGOCParam381.workspace.AstNodeLocator;
      this.nameProvider = chunkFPAJGGOCParam381.references.NameProvider;
      this.commentProvider =
        chunkFPAJGGOCParam381.documentation.CommentProvider;
    }
    serialize(chunkFPAJGGOCParam563, chunkFPAJGGOCParam564) {
      let chunkFPAJGGOCValue994 = chunkFPAJGGOCParam564 ?? {},
        chunkFPAJGGOCValue995 = chunkFPAJGGOCParam564?.replacer,
        chunkFPAJGGOCValue996 = (
          chunkFPAJGGOCParam2163,
          chunkFPAJGGOCParam2164,
        ) =>
          this.replacer(
            chunkFPAJGGOCParam2163,
            chunkFPAJGGOCParam2164,
            chunkFPAJGGOCValue994,
          ),
        chunkFPAJGGOCValue997 = chunkFPAJGGOCValue995
          ? (chunkFPAJGGOCParam2232, chunkFPAJGGOCParam2233) =>
              chunkFPAJGGOCValue995(
                chunkFPAJGGOCParam2232,
                chunkFPAJGGOCParam2233,
                chunkFPAJGGOCValue996,
              )
          : chunkFPAJGGOCValue996;
      try {
        return (
          (this.currentDocument = chunkFPAJGGOCHelper50(chunkFPAJGGOCParam563)),
          JSON.stringify(
            chunkFPAJGGOCParam563,
            chunkFPAJGGOCValue997,
            chunkFPAJGGOCParam564?.space,
          )
        );
      } finally {
        this.currentDocument = undefined;
      }
    }
    deserialize(chunkFPAJGGOCParam1344, chunkFPAJGGOCParam1345) {
      let chunkFPAJGGOCValue1635 = chunkFPAJGGOCParam1345 ?? {},
        chunkFPAJGGOCValue1636 = JSON.parse(chunkFPAJGGOCParam1344);
      return (
        this.linkNode(
          chunkFPAJGGOCValue1636,
          chunkFPAJGGOCValue1636,
          chunkFPAJGGOCValue1635,
        ),
        chunkFPAJGGOCValue1636
      );
    }
    replacer(
      chunkFPAJGGOCParam33,
      chunkFPAJGGOCParam34,
      { refText, sourceText, textRegions, comments, uriConverter },
    ) {
      if (!this.ignoreProperties.has(chunkFPAJGGOCParam33))
        if (chunkFPAJGGOCHelper2(chunkFPAJGGOCParam34)) {
          let chunkFPAJGGOCValue691 = chunkFPAJGGOCParam34.ref,
            chunkFPAJGGOCValue692 = refText
              ? chunkFPAJGGOCParam34.$refText
              : undefined;
          if (chunkFPAJGGOCValue691) {
            let chunkFPAJGGOCValue1008 = chunkFPAJGGOCHelper50(
                chunkFPAJGGOCValue691,
              ),
              chunkFPAJGGOCValue1009 = "";
            this.currentDocument &&
              this.currentDocument !== chunkFPAJGGOCValue1008 &&
              (chunkFPAJGGOCValue1009 = uriConverter
                ? uriConverter(chunkFPAJGGOCValue1008.uri, chunkFPAJGGOCParam34)
                : chunkFPAJGGOCValue1008.uri.toString());
            let chunkFPAJGGOCValue1010 = this.astNodeLocator.getAstNodePath(
              chunkFPAJGGOCValue691,
            );
            return {
              $ref: `${chunkFPAJGGOCValue1009}#${chunkFPAJGGOCValue1010}`,
              $refText: chunkFPAJGGOCValue692,
            };
          } else
            return {
              $error:
                chunkFPAJGGOCParam34.error?.message ??
                "Could not resolve reference",
              $refText: chunkFPAJGGOCValue692,
            };
        } else if (chunkFPAJGGOCHelper1(chunkFPAJGGOCParam34)) {
          let chunkFPAJGGOCValue592;
          if (
            (textRegions &&
              ((chunkFPAJGGOCValue592 = this.addAstNodeRegionWithAssignmentsTo(
                Object.assign({}, chunkFPAJGGOCParam34),
              )),
              (!chunkFPAJGGOCParam33 || chunkFPAJGGOCParam34.$document) &&
                chunkFPAJGGOCValue592?.$textRegion &&
                (chunkFPAJGGOCValue592.$textRegion.documentURI =
                  this.currentDocument?.uri.toString())),
            sourceText &&
              !chunkFPAJGGOCParam33 &&
              ((chunkFPAJGGOCValue592 ??= Object.assign(
                {},
                chunkFPAJGGOCParam34,
              )),
              (chunkFPAJGGOCValue592.$sourceText =
                chunkFPAJGGOCParam34.$cstNode?.text)),
            comments)
          ) {
            chunkFPAJGGOCValue592 ??= Object.assign({}, chunkFPAJGGOCParam34);
            let chunkFPAJGGOCValue1449 =
              this.commentProvider.getComment(chunkFPAJGGOCParam34);
            chunkFPAJGGOCValue1449 &&
              (chunkFPAJGGOCValue592.$comment = chunkFPAJGGOCValue1449.replace(
                /\r/g,
                "",
              ));
          }
          return chunkFPAJGGOCValue592 ?? chunkFPAJGGOCParam34;
        } else return chunkFPAJGGOCParam34;
    }
    addAstNodeRegionWithAssignmentsTo(chunkFPAJGGOCParam274) {
      let chunkFPAJGGOCValue699 = (chunkFPAJGGOCParam1358) => ({
        offset: chunkFPAJGGOCParam1358.offset,
        end: chunkFPAJGGOCParam1358.end,
        length: chunkFPAJGGOCParam1358.length,
        range: chunkFPAJGGOCParam1358.range,
      });
      if (chunkFPAJGGOCParam274.$cstNode) {
        let chunkFPAJGGOCValue937 = (chunkFPAJGGOCParam274.$textRegion =
            chunkFPAJGGOCValue699(chunkFPAJGGOCParam274.$cstNode)),
          chunkFPAJGGOCValue938 = (chunkFPAJGGOCValue937.assignments = {});
        return (
          Object.keys(chunkFPAJGGOCParam274)
            .filter((item) => !item.startsWith("$"))
            .forEach((item) => {
              let chunkFPAJGGOCValue1643 = chunkFPAJGGOCHelper75(
                chunkFPAJGGOCParam274.$cstNode,
                item,
              ).map(chunkFPAJGGOCValue699);
              chunkFPAJGGOCValue1643.length !== 0 &&
                (chunkFPAJGGOCValue938[item] = chunkFPAJGGOCValue1643);
            }),
          chunkFPAJGGOCParam274
        );
      }
    }
    linkNode(
      chunkFPAJGGOCParam250,
      chunkFPAJGGOCParam251,
      chunkFPAJGGOCParam252,
      chunkFPAJGGOCParam253,
      chunkFPAJGGOCParam254,
      chunkFPAJGGOCParam255,
    ) {
      for (let [chunkFPAJGGOCValue817, chunkFPAJGGOCValue818] of Object.entries(
        chunkFPAJGGOCParam250,
      ))
        if (Array.isArray(chunkFPAJGGOCValue818))
          for (
            let chunkFPAJGGOCValue1270 = 0;
            chunkFPAJGGOCValue1270 < chunkFPAJGGOCValue818.length;
            chunkFPAJGGOCValue1270++
          ) {
            let chunkFPAJGGOCValue1406 =
              chunkFPAJGGOCValue818[chunkFPAJGGOCValue1270];
            chunkFPAJGGOCHelper316(chunkFPAJGGOCValue1406)
              ? (chunkFPAJGGOCValue818[chunkFPAJGGOCValue1270] =
                  this.reviveReference(
                    chunkFPAJGGOCParam250,
                    chunkFPAJGGOCValue817,
                    chunkFPAJGGOCParam251,
                    chunkFPAJGGOCValue1406,
                    chunkFPAJGGOCParam252,
                  ))
              : chunkFPAJGGOCHelper1(chunkFPAJGGOCValue1406) &&
                this.linkNode(
                  chunkFPAJGGOCValue1406,
                  chunkFPAJGGOCParam251,
                  chunkFPAJGGOCParam252,
                  chunkFPAJGGOCParam250,
                  chunkFPAJGGOCValue817,
                  chunkFPAJGGOCValue1270,
                );
          }
        else
          chunkFPAJGGOCHelper316(chunkFPAJGGOCValue818)
            ? (chunkFPAJGGOCParam250[chunkFPAJGGOCValue817] =
                this.reviveReference(
                  chunkFPAJGGOCParam250,
                  chunkFPAJGGOCValue817,
                  chunkFPAJGGOCParam251,
                  chunkFPAJGGOCValue818,
                  chunkFPAJGGOCParam252,
                ))
            : chunkFPAJGGOCHelper1(chunkFPAJGGOCValue818) &&
              this.linkNode(
                chunkFPAJGGOCValue818,
                chunkFPAJGGOCParam251,
                chunkFPAJGGOCParam252,
                chunkFPAJGGOCParam250,
                chunkFPAJGGOCValue817,
              );
      let chunkFPAJGGOCValue674 = chunkFPAJGGOCParam250;
      chunkFPAJGGOCValue674.$container = chunkFPAJGGOCParam253;
      chunkFPAJGGOCValue674.$containerProperty = chunkFPAJGGOCParam254;
      chunkFPAJGGOCValue674.$containerIndex = chunkFPAJGGOCParam255;
    }
    reviveReference(
      chunkFPAJGGOCParam285,
      chunkFPAJGGOCParam286,
      chunkFPAJGGOCParam287,
      chunkFPAJGGOCParam288,
      chunkFPAJGGOCParam289,
    ) {
      let chunkFPAJGGOCValue716 = chunkFPAJGGOCParam288.$refText,
        chunkFPAJGGOCValue717 = chunkFPAJGGOCParam288.$error;
      if (chunkFPAJGGOCParam288.$ref) {
        let chunkFPAJGGOCValue1226 = this.getRefNode(
          chunkFPAJGGOCParam287,
          chunkFPAJGGOCParam288.$ref,
          chunkFPAJGGOCParam289.uriConverter,
        );
        if (chunkFPAJGGOCHelper1(chunkFPAJGGOCValue1226))
          return (
            (chunkFPAJGGOCValue716 ||= this.nameProvider.getName(
              chunkFPAJGGOCValue1226,
            )),
            {
              $refText: chunkFPAJGGOCValue716 ?? "",
              ref: chunkFPAJGGOCValue1226,
            }
          );
        chunkFPAJGGOCValue717 = chunkFPAJGGOCValue1226;
      }
      if (chunkFPAJGGOCValue717) {
        let chunkFPAJGGOCValue1429 = {
          $refText: chunkFPAJGGOCValue716 ?? "",
        };
        return (
          (chunkFPAJGGOCValue1429.error = {
            container: chunkFPAJGGOCParam285,
            property: chunkFPAJGGOCParam286,
            message: chunkFPAJGGOCValue717,
            reference: chunkFPAJGGOCValue1429,
          }),
          chunkFPAJGGOCValue1429
        );
      } else return;
    }
    getRefNode(
      chunkFPAJGGOCParam102,
      chunkFPAJGGOCParam103,
      chunkFPAJGGOCParam104,
    ) {
      try {
        let chunkFPAJGGOCValue534 = chunkFPAJGGOCParam103.indexOf("#");
        if (chunkFPAJGGOCValue534 === 0)
          return (
            this.astNodeLocator.getAstNode(
              chunkFPAJGGOCParam102,
              chunkFPAJGGOCParam103.substring(1),
            ) || "Could not resolve path: " + chunkFPAJGGOCParam103
          );
        if (chunkFPAJGGOCValue534 < 0) {
          let chunkFPAJGGOCValue1258 = chunkFPAJGGOCParam104
              ? chunkFPAJGGOCParam104(chunkFPAJGGOCParam103)
              : URI.parse(chunkFPAJGGOCParam103),
            chunkFPAJGGOCValue1259 = this.langiumDocuments.getDocument(
              chunkFPAJGGOCValue1258,
            );
          return chunkFPAJGGOCValue1259
            ? chunkFPAJGGOCValue1259.parseResult.value
            : "Could not find document for URI: " + chunkFPAJGGOCParam103;
        }
        let chunkFPAJGGOCValue535 = chunkFPAJGGOCParam104
            ? chunkFPAJGGOCParam104(
                chunkFPAJGGOCParam103.substring(0, chunkFPAJGGOCValue534),
              )
            : URI.parse(
                chunkFPAJGGOCParam103.substring(0, chunkFPAJGGOCValue534),
              ),
          chunkFPAJGGOCValue536 = this.langiumDocuments.getDocument(
            chunkFPAJGGOCValue535,
          );
        return chunkFPAJGGOCValue536
          ? chunkFPAJGGOCValue534 === chunkFPAJGGOCParam103.length - 1
            ? chunkFPAJGGOCValue536.parseResult.value
            : this.astNodeLocator.getAstNode(
                chunkFPAJGGOCValue536.parseResult.value,
                chunkFPAJGGOCParam103.substring(chunkFPAJGGOCValue534 + 1),
              ) || "Could not resolve URI: " + chunkFPAJGGOCParam103
          : "Could not find document for URI: " + chunkFPAJGGOCParam103;
      } catch (chunkFPAJGGOCValue1861) {
        return String(chunkFPAJGGOCValue1861);
      }
    }
  },
  $u = class {
    get map() {
      return this.fileExtensionMap;
    }
    constructor(chunkFPAJGGOCParam1081) {
      this.languageIdMap = new Map();
      this.fileExtensionMap = new Map();
      this.textDocuments = chunkFPAJGGOCParam1081?.workspace.TextDocuments;
    }
    register(chunkFPAJGGOCParam325) {
      let chunkFPAJGGOCValue762 = chunkFPAJGGOCParam325.LanguageMetaData;
      for (let chunkFPAJGGOCValue1100 of chunkFPAJGGOCValue762.fileExtensions) {
        this.fileExtensionMap.has(chunkFPAJGGOCValue1100) &&
          console.warn(
            `The file extension ${chunkFPAJGGOCValue1100} is used by multiple languages. It is now assigned to '${chunkFPAJGGOCValue762.languageId}'.`,
          );
        this.fileExtensionMap.set(
          chunkFPAJGGOCValue1100,
          chunkFPAJGGOCParam325,
        );
      }
      this.languageIdMap.set(
        chunkFPAJGGOCValue762.languageId,
        chunkFPAJGGOCParam325,
      );
      this.languageIdMap.size === 1
        ? (this.singleton = chunkFPAJGGOCParam325)
        : (this.singleton = undefined);
    }
    getServices(chunkFPAJGGOCParam150) {
      if (this.singleton !== undefined) return this.singleton;
      if (this.languageIdMap.size === 0)
        throw Error(
          "The service registry is empty. Use `register` to register the services of a language.",
        );
      let chunkFPAJGGOCValue558 = this.textDocuments?.get(
        chunkFPAJGGOCParam150,
      )?.languageId;
      if (chunkFPAJGGOCValue558 !== undefined) {
        let chunkFPAJGGOCValue1793 = this.languageIdMap.get(
          chunkFPAJGGOCValue558,
        );
        if (chunkFPAJGGOCValue1793) return chunkFPAJGGOCValue1793;
      }
      let chunkFPAJGGOCValue559 = chunkFPAJGGOCValue209.extname(
          chunkFPAJGGOCParam150,
        ),
        chunkFPAJGGOCValue560 = this.fileExtensionMap.get(
          chunkFPAJGGOCValue559,
        );
      if (!chunkFPAJGGOCValue560)
        throw chunkFPAJGGOCValue558
          ? Error(
              `The service registry contains no services for the extension '${chunkFPAJGGOCValue559}' for language '${chunkFPAJGGOCValue558}'.`,
            )
          : Error(
              `The service registry contains no services for the extension '${chunkFPAJGGOCValue559}'.`,
            );
      return chunkFPAJGGOCValue560;
    }
    hasServices(chunkFPAJGGOCParam1340) {
      try {
        return (this.getServices(chunkFPAJGGOCParam1340), true);
      } catch {
        return false;
      }
    }
    get all() {
      return Array.from(this.languageIdMap.values());
    }
  };
function chunkFPAJGGOCHelper317(chunkFPAJGGOCParam2137) {
  return {
    code: chunkFPAJGGOCParam2137,
  };
}
var chunkFPAJGGOCValue228;
(function (chunkFPAJGGOCParam1935) {
  chunkFPAJGGOCParam1935.all = ["fast", "slow", "built-in"];
})((chunkFPAJGGOCValue228 ||= {}));
var chunkFPAJGGOCValue229 = class {
    constructor(chunkFPAJGGOCParam1038) {
      this.entries = new chunkFPAJGGOCValue217();
      this.entriesBefore = [];
      this.entriesAfter = [];
      this.reflection = chunkFPAJGGOCParam1038.shared.AstReflection;
    }
    register(
      chunkFPAJGGOCParam216,
      chunkFPAJGGOCParam217 = this,
      chunkFPAJGGOCParam218 = "fast",
    ) {
      if (chunkFPAJGGOCParam218 === "built-in")
        throw Error(
          "The 'built-in' category is reserved for lexer, parser, and linker errors.",
        );
      for (let [chunkFPAJGGOCValue824, chunkFPAJGGOCValue825] of Object.entries(
        chunkFPAJGGOCParam216,
      )) {
        let chunkFPAJGGOCValue880 = chunkFPAJGGOCValue825;
        if (Array.isArray(chunkFPAJGGOCValue880))
          for (let chunkFPAJGGOCValue1530 of chunkFPAJGGOCValue880) {
            let chunkFPAJGGOCValue1597 = {
              check: this.wrapValidationException(
                chunkFPAJGGOCValue1530,
                chunkFPAJGGOCParam217,
              ),
              category: chunkFPAJGGOCParam218,
            };
            this.addEntry(chunkFPAJGGOCValue824, chunkFPAJGGOCValue1597);
          }
        else if (typeof chunkFPAJGGOCValue880 == "function") {
          let chunkFPAJGGOCValue1621 = {
            check: this.wrapValidationException(
              chunkFPAJGGOCValue880,
              chunkFPAJGGOCParam217,
            ),
            category: chunkFPAJGGOCParam218,
          };
          this.addEntry(chunkFPAJGGOCValue824, chunkFPAJGGOCValue1621);
        } else chunkFPAJGGOCHelper18(chunkFPAJGGOCValue880);
      }
    }
    wrapValidationException(chunkFPAJGGOCParam776, chunkFPAJGGOCParam777) {
      return async (
        chunkFPAJGGOCParam1002,
        chunkFPAJGGOCParam1003,
        chunkFPAJGGOCParam1004,
      ) => {
        await this.handleException(
          () =>
            chunkFPAJGGOCParam776.call(
              chunkFPAJGGOCParam777,
              chunkFPAJGGOCParam1002,
              chunkFPAJGGOCParam1003,
              chunkFPAJGGOCParam1004,
            ),
          "An error occurred during validation",
          chunkFPAJGGOCParam1003,
          chunkFPAJGGOCParam1002,
        );
      };
    }
    async handleException(
      chunkFPAJGGOCParam509,
      chunkFPAJGGOCParam510,
      chunkFPAJGGOCParam511,
      chunkFPAJGGOCParam512,
    ) {
      try {
        await chunkFPAJGGOCParam509();
      } catch (chunkFPAJGGOCValue1101) {
        if (chunkFPAJGGOCHelper312(chunkFPAJGGOCValue1101))
          throw chunkFPAJGGOCValue1101;
        console.error(`${chunkFPAJGGOCParam510}:`, chunkFPAJGGOCValue1101);
        chunkFPAJGGOCValue1101 instanceof Error &&
          chunkFPAJGGOCValue1101.stack &&
          console.error(chunkFPAJGGOCValue1101.stack);
        chunkFPAJGGOCParam511(
          "error",
          `${chunkFPAJGGOCParam510}: ${chunkFPAJGGOCValue1101 instanceof Error ? chunkFPAJGGOCValue1101.message : String(chunkFPAJGGOCValue1101)}`,
          {
            node: chunkFPAJGGOCParam512,
          },
        );
      }
    }
    addEntry(chunkFPAJGGOCParam970, chunkFPAJGGOCParam971) {
      if (chunkFPAJGGOCParam970 === "AstNode") {
        this.entries.add("AstNode", chunkFPAJGGOCParam971);
        return;
      }
      for (let chunkFPAJGGOCValue1810 of this.reflection.getAllSubTypes(
        chunkFPAJGGOCParam970,
      ))
        this.entries.add(chunkFPAJGGOCValue1810, chunkFPAJGGOCParam971);
    }
    getChecks(chunkFPAJGGOCParam885, chunkFPAJGGOCParam886) {
      let chunkFPAJGGOCValue1268 = chunkFPAJGGOCHelper10(
        this.entries.get(chunkFPAJGGOCParam885),
      ).concat(this.entries.get("AstNode"));
      return (
        chunkFPAJGGOCParam886 &&
          (chunkFPAJGGOCValue1268 = chunkFPAJGGOCValue1268.filter((item) =>
            chunkFPAJGGOCParam886.includes(item.category),
          )),
        chunkFPAJGGOCValue1268.map((item) => item.check)
      );
    }
    registerBeforeDocument(
      chunkFPAJGGOCParam839,
      chunkFPAJGGOCParam840 = this,
    ) {
      this.entriesBefore.push(
        this.wrapPreparationException(
          chunkFPAJGGOCParam839,
          "An error occurred during set-up of the validation",
          chunkFPAJGGOCParam840,
        ),
      );
    }
    registerAfterDocument(chunkFPAJGGOCParam832, chunkFPAJGGOCParam833 = this) {
      this.entriesAfter.push(
        this.wrapPreparationException(
          chunkFPAJGGOCParam832,
          "An error occurred during tear-down of the validation",
          chunkFPAJGGOCParam833,
        ),
      );
    }
    wrapPreparationException(
      chunkFPAJGGOCParam1123,
      chunkFPAJGGOCParam1124,
      chunkFPAJGGOCParam1125,
    ) {
      return async (
        chunkFPAJGGOCParam1409,
        chunkFPAJGGOCParam1410,
        chunkFPAJGGOCParam1411,
        chunkFPAJGGOCParam1412,
      ) => {
        await this.handleException(
          () =>
            chunkFPAJGGOCParam1123.call(
              chunkFPAJGGOCParam1125,
              chunkFPAJGGOCParam1409,
              chunkFPAJGGOCParam1410,
              chunkFPAJGGOCParam1411,
              chunkFPAJGGOCParam1412,
            ),
          chunkFPAJGGOCParam1124,
          chunkFPAJGGOCParam1410,
          chunkFPAJGGOCParam1409,
        );
      };
    }
    get checksBefore() {
      return this.entriesBefore;
    }
    get checksAfter() {
      return this.entriesAfter;
    }
  },
  chunkFPAJGGOCValue230 = class {
    constructor(chunkFPAJGGOCParam1254) {
      this.validationRegistry =
        chunkFPAJGGOCParam1254.validation.ValidationRegistry;
      this.metadata = chunkFPAJGGOCParam1254.LanguageMetaData;
    }
    async validateDocument(
      chunkFPAJGGOCParam110,
      chunkFPAJGGOCParam111 = {},
      chunkFPAJGGOCParam112 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue525 = chunkFPAJGGOCParam110.parseResult,
        chunkFPAJGGOCValue526 = [];
      if (
        (await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam112),
        (!chunkFPAJGGOCParam111.categories ||
          chunkFPAJGGOCParam111.categories.includes("built-in")) &&
          (this.processLexingErrors(
            chunkFPAJGGOCValue525,
            chunkFPAJGGOCValue526,
            chunkFPAJGGOCParam111,
          ),
          (chunkFPAJGGOCParam111.stopAfterLexingErrors &&
            chunkFPAJGGOCValue526.some(
              (item) => item.data?.code === chunkFPAJGGOCValue231.LexingError,
            )) ||
            (this.processParsingErrors(
              chunkFPAJGGOCValue525,
              chunkFPAJGGOCValue526,
              chunkFPAJGGOCParam111,
            ),
            chunkFPAJGGOCParam111.stopAfterParsingErrors &&
              chunkFPAJGGOCValue526.some(
                (item) =>
                  item.data?.code === chunkFPAJGGOCValue231.ParsingError,
              )) ||
            (this.processLinkingErrors(
              chunkFPAJGGOCParam110,
              chunkFPAJGGOCValue526,
              chunkFPAJGGOCParam111,
            ),
            chunkFPAJGGOCParam111.stopAfterLinkingErrors &&
              chunkFPAJGGOCValue526.some(
                (item) =>
                  item.data?.code === chunkFPAJGGOCValue231.LinkingError,
              ))))
      )
        return chunkFPAJGGOCValue526;
      try {
        chunkFPAJGGOCValue526.push(
          ...(await this.validateAst(
            chunkFPAJGGOCValue525.value,
            chunkFPAJGGOCParam111,
            chunkFPAJGGOCParam112,
          )),
        );
      } catch (chunkFPAJGGOCValue1648) {
        if (chunkFPAJGGOCHelper312(chunkFPAJGGOCValue1648))
          throw chunkFPAJGGOCValue1648;
        console.error(
          "An error occurred during validation:",
          chunkFPAJGGOCValue1648,
        );
      }
      return (
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam112),
        chunkFPAJGGOCValue526
      );
    }
    processLexingErrors(
      chunkFPAJGGOCParam281,
      chunkFPAJGGOCParam282,
      chunkFPAJGGOCParam283,
    ) {
      let chunkFPAJGGOCValue710 = [
        ...chunkFPAJGGOCParam281.lexerErrors,
        ...(chunkFPAJGGOCParam281.lexerReport?.diagnostics ?? []),
      ];
      for (let chunkFPAJGGOCValue830 of chunkFPAJGGOCValue710) {
        let chunkFPAJGGOCValue848 = chunkFPAJGGOCValue830.severity ?? "error",
          chunkFPAJGGOCValue849 = {
            severity: chunkFPAJGGOCHelper318(chunkFPAJGGOCValue848),
            range: {
              start: {
                line: chunkFPAJGGOCValue830.line - 1,
                character: chunkFPAJGGOCValue830.column - 1,
              },
              end: {
                line: chunkFPAJGGOCValue830.line - 1,
                character:
                  chunkFPAJGGOCValue830.column +
                  chunkFPAJGGOCValue830.length -
                  1,
              },
            },
            message: chunkFPAJGGOCValue830.message,
            data: chunkFPAJGGOCHelper319(chunkFPAJGGOCValue848),
            source: this.getSource(),
          };
        chunkFPAJGGOCParam282.push(chunkFPAJGGOCValue849);
      }
    }
    processParsingErrors(
      chunkFPAJGGOCParam151,
      chunkFPAJGGOCParam152,
      chunkFPAJGGOCParam153,
    ) {
      for (let chunkFPAJGGOCValue580 of chunkFPAJGGOCParam151.parserErrors) {
        let chunkFPAJGGOCValue590;
        if (isNaN(chunkFPAJGGOCValue580.token.startOffset)) {
          if ("previousToken" in chunkFPAJGGOCValue580) {
            let chunkFPAJGGOCValue977 = chunkFPAJGGOCValue580.previousToken;
            if (isNaN(chunkFPAJGGOCValue977.startOffset)) {
              let chunkFPAJGGOCValue1690 = {
                line: 0,
                character: 0,
              };
              chunkFPAJGGOCValue590 = {
                start: chunkFPAJGGOCValue1690,
                end: chunkFPAJGGOCValue1690,
              };
            } else {
              let chunkFPAJGGOCValue1598 = {
                line: chunkFPAJGGOCValue977.endLine - 1,
                character: chunkFPAJGGOCValue977.endColumn,
              };
              chunkFPAJGGOCValue590 = {
                start: chunkFPAJGGOCValue1598,
                end: chunkFPAJGGOCValue1598,
              };
            }
          }
        } else
          chunkFPAJGGOCValue590 = chunkFPAJGGOCHelper13(
            chunkFPAJGGOCValue580.token,
          );
        if (chunkFPAJGGOCValue590) {
          let chunkFPAJGGOCValue1211 = {
            severity: chunkFPAJGGOCHelper318("error"),
            range: chunkFPAJGGOCValue590,
            message: chunkFPAJGGOCValue580.message,
            data: chunkFPAJGGOCHelper317(chunkFPAJGGOCValue231.ParsingError),
            source: this.getSource(),
          };
          chunkFPAJGGOCParam152.push(chunkFPAJGGOCValue1211);
        }
      }
    }
    processLinkingErrors(
      chunkFPAJGGOCParam302,
      chunkFPAJGGOCParam303,
      chunkFPAJGGOCParam304,
    ) {
      for (let chunkFPAJGGOCValue766 of chunkFPAJGGOCParam302.references) {
        let chunkFPAJGGOCValue798 = chunkFPAJGGOCValue766.error;
        if (chunkFPAJGGOCValue798) {
          let chunkFPAJGGOCValue853 = {
            node: chunkFPAJGGOCValue798.container,
            property: chunkFPAJGGOCValue798.property,
            index: chunkFPAJGGOCValue798.index,
            data: {
              code: chunkFPAJGGOCValue231.LinkingError,
              containerType: chunkFPAJGGOCValue798.container.$type,
              property: chunkFPAJGGOCValue798.property,
              refText: chunkFPAJGGOCValue798.reference.$refText,
            },
          };
          chunkFPAJGGOCParam303.push(
            this.toDiagnostic(
              "error",
              chunkFPAJGGOCValue798.message,
              chunkFPAJGGOCValue853,
            ),
          );
        }
      }
    }
    async validateAst(
      chunkFPAJGGOCParam513,
      chunkFPAJGGOCParam514,
      chunkFPAJGGOCParam515 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue935 = [],
        chunkFPAJGGOCValue936 = (
          chunkFPAJGGOCParam1721,
          chunkFPAJGGOCParam1722,
          chunkFPAJGGOCParam1723,
        ) => {
          chunkFPAJGGOCValue935.push(
            this.toDiagnostic(
              chunkFPAJGGOCParam1721,
              chunkFPAJGGOCParam1722,
              chunkFPAJGGOCParam1723,
            ),
          );
        };
      return (
        await this.validateAstBefore(
          chunkFPAJGGOCParam513,
          chunkFPAJGGOCParam514,
          chunkFPAJGGOCValue936,
          chunkFPAJGGOCParam515,
        ),
        await this.validateAstNodes(
          chunkFPAJGGOCParam513,
          chunkFPAJGGOCParam514,
          chunkFPAJGGOCValue936,
          chunkFPAJGGOCParam515,
        ),
        await this.validateAstAfter(
          chunkFPAJGGOCParam513,
          chunkFPAJGGOCParam514,
          chunkFPAJGGOCValue936,
          chunkFPAJGGOCParam515,
        ),
        chunkFPAJGGOCValue935
      );
    }
    async validateAstBefore(
      chunkFPAJGGOCParam937,
      chunkFPAJGGOCParam938,
      chunkFPAJGGOCParam939,
      chunkFPAJGGOCParam940 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1326 = this.validationRegistry.checksBefore;
      for (let chunkFPAJGGOCValue1822 of chunkFPAJGGOCValue1326) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam940);
        await chunkFPAJGGOCValue1822(
          chunkFPAJGGOCParam937,
          chunkFPAJGGOCParam939,
          chunkFPAJGGOCParam938.categories ?? [],
          chunkFPAJGGOCParam940,
        );
      }
    }
    async validateAstNodes(
      chunkFPAJGGOCParam611,
      chunkFPAJGGOCParam612,
      chunkFPAJGGOCParam613,
      chunkFPAJGGOCParam614 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      await Promise.all(
        chunkFPAJGGOCHelper54(chunkFPAJGGOCParam611).map(async (item) => {
          await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam614);
          let chunkFPAJGGOCValue1421 = this.validationRegistry.getChecks(
            item.$type,
            chunkFPAJGGOCParam612.categories,
          );
          for (let chunkFPAJGGOCValue1872 of chunkFPAJGGOCValue1421)
            await chunkFPAJGGOCValue1872(
              item,
              chunkFPAJGGOCParam613,
              chunkFPAJGGOCParam614,
            );
        }),
      );
    }
    async validateAstAfter(
      chunkFPAJGGOCParam953,
      chunkFPAJGGOCParam954,
      chunkFPAJGGOCParam955,
      chunkFPAJGGOCParam956 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1336 = this.validationRegistry.checksAfter;
      for (let chunkFPAJGGOCValue1823 of chunkFPAJGGOCValue1336) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam956);
        await chunkFPAJGGOCValue1823(
          chunkFPAJGGOCParam953,
          chunkFPAJGGOCParam955,
          chunkFPAJGGOCParam954.categories ?? [],
          chunkFPAJGGOCParam956,
        );
      }
    }
    toDiagnostic(chunkFPAJGGOCParam567, chunkFPAJGGOCParam568, event) {
      return {
        message: chunkFPAJGGOCParam568,
        range: id(event),
        severity: chunkFPAJGGOCHelper318(chunkFPAJGGOCParam567),
        code: event.code,
        codeDescription: event.codeDescription,
        tags: event.tags,
        relatedInformation: event.relatedInformation,
        data: event.data,
        source: this.getSource(),
      };
    }
    getSource() {
      return this.metadata.languageId;
    }
  };
function id(chunkFPAJGGOCParam460) {
  if (chunkFPAJGGOCParam460.range) return chunkFPAJGGOCParam460.range;
  let chunkFPAJGGOCValue881;
  return (
    typeof chunkFPAJGGOCParam460.property == "string"
      ? (chunkFPAJGGOCValue881 = chunkFPAJGGOCHelper76(
          chunkFPAJGGOCParam460.node.$cstNode,
          chunkFPAJGGOCParam460.property,
          chunkFPAJGGOCParam460.index,
        ))
      : typeof chunkFPAJGGOCParam460.keyword == "string" &&
        (chunkFPAJGGOCValue881 = chunkFPAJGGOCHelper78(
          chunkFPAJGGOCParam460.node.$cstNode,
          chunkFPAJGGOCParam460.keyword,
          chunkFPAJGGOCParam460.index,
        )),
    (chunkFPAJGGOCValue881 ??= chunkFPAJGGOCParam460.node.$cstNode),
    chunkFPAJGGOCValue881
      ? chunkFPAJGGOCValue881.range
      : {
          start: {
            line: 0,
            character: 0,
          },
          end: {
            line: 0,
            character: 0,
          },
        }
  );
}
function chunkFPAJGGOCHelper318(chunkFPAJGGOCParam767) {
  switch (chunkFPAJGGOCParam767) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw Error("Invalid diagnostic severity: " + chunkFPAJGGOCParam767);
  }
}
function chunkFPAJGGOCHelper319(chunkFPAJGGOCParam582) {
  switch (chunkFPAJGGOCParam582) {
    case "error":
      return chunkFPAJGGOCHelper317(chunkFPAJGGOCValue231.LexingError);
    case "warning":
      return chunkFPAJGGOCHelper317(chunkFPAJGGOCValue231.LexingWarning);
    case "info":
      return chunkFPAJGGOCHelper317(chunkFPAJGGOCValue231.LexingInfo);
    case "hint":
      return chunkFPAJGGOCHelper317(chunkFPAJGGOCValue231.LexingHint);
    default:
      throw Error("Invalid diagnostic severity: " + chunkFPAJGGOCParam582);
  }
}
var chunkFPAJGGOCValue231;
(function (chunkFPAJGGOCParam762) {
  chunkFPAJGGOCParam762.LexingError = "lexing-error";
  chunkFPAJGGOCParam762.LexingWarning = "lexing-warning";
  chunkFPAJGGOCParam762.LexingInfo = "lexing-info";
  chunkFPAJGGOCParam762.LexingHint = "lexing-hint";
  chunkFPAJGGOCParam762.ParsingError = "parsing-error";
  chunkFPAJGGOCParam762.LinkingError = "linking-error";
})((chunkFPAJGGOCValue231 ||= {}));
var chunkFPAJGGOCValue232 = class {
    constructor(chunkFPAJGGOCParam1239) {
      this.astNodeLocator = chunkFPAJGGOCParam1239.workspace.AstNodeLocator;
      this.nameProvider = chunkFPAJGGOCParam1239.references.NameProvider;
    }
    createDescription(
      chunkFPAJGGOCParam275,
      chunkFPAJGGOCParam276,
      chunkFPAJGGOCParam277,
    ) {
      let chunkFPAJGGOCValue701 =
        chunkFPAJGGOCParam277 ?? chunkFPAJGGOCHelper50(chunkFPAJGGOCParam275);
      chunkFPAJGGOCParam276 ??= this.nameProvider.getName(
        chunkFPAJGGOCParam275,
      );
      let chunkFPAJGGOCValue702 = this.astNodeLocator.getAstNodePath(
        chunkFPAJGGOCParam275,
      );
      if (!chunkFPAJGGOCParam276)
        throw Error(`Node at path ${chunkFPAJGGOCValue702} has no name.`);
      let chunkFPAJGGOCValue703,
        chunkFPAJGGOCValue704 = () =>
          (chunkFPAJGGOCValue703 ??= $e(
            this.nameProvider.getNameNode(chunkFPAJGGOCParam275) ??
              chunkFPAJGGOCParam275.$cstNode,
          ));
      return {
        node: chunkFPAJGGOCParam275,
        name: chunkFPAJGGOCParam276,
        get nameSegment() {
          return chunkFPAJGGOCValue704();
        },
        selectionSegment: $e(chunkFPAJGGOCParam275.$cstNode),
        type: chunkFPAJGGOCParam275.$type,
        documentUri: chunkFPAJGGOCValue701.uri,
        path: chunkFPAJGGOCValue702,
      };
    }
  },
  chunkFPAJGGOCValue233 = class {
    constructor(chunkFPAJGGOCParam1651) {
      this.nodeLocator = chunkFPAJGGOCParam1651.workspace.AstNodeLocator;
    }
    async createDescriptions(
      chunkFPAJGGOCParam488,
      chunkFPAJGGOCParam489 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue915 = [],
        chunkFPAJGGOCValue916 = chunkFPAJGGOCParam488.parseResult.value;
      for (let chunkFPAJGGOCValue1252 of chunkFPAJGGOCHelper54(
        chunkFPAJGGOCValue916,
      )) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam489);
        chunkFPAJGGOCHelper56(chunkFPAJGGOCValue1252)
          .filter((item) => !chunkFPAJGGOCHelper4(item))
          .forEach((item) => {
            let chunkFPAJGGOCValue1697 = this.createDescription(item);
            chunkFPAJGGOCValue1697 &&
              chunkFPAJGGOCValue915.push(chunkFPAJGGOCValue1697);
          });
      }
      return chunkFPAJGGOCValue915;
    }
    createDescription(chunkFPAJGGOCParam419) {
      let chunkFPAJGGOCValue840 =
          chunkFPAJGGOCParam419.reference.$nodeDescription,
        chunkFPAJGGOCValue841 = chunkFPAJGGOCParam419.reference.$refNode;
      if (!chunkFPAJGGOCValue840 || !chunkFPAJGGOCValue841) return;
      let chunkFPAJGGOCValue842 = chunkFPAJGGOCHelper50(
        chunkFPAJGGOCParam419.container,
      ).uri;
      return {
        sourceUri: chunkFPAJGGOCValue842,
        sourcePath: this.nodeLocator.getAstNodePath(
          chunkFPAJGGOCParam419.container,
        ),
        targetUri: chunkFPAJGGOCValue840.documentUri,
        targetPath: chunkFPAJGGOCValue840.path,
        segment: $e(chunkFPAJGGOCValue841),
        local: chunkFPAJGGOCValue209.equals(
          chunkFPAJGGOCValue840.documentUri,
          chunkFPAJGGOCValue842,
        ),
      };
    }
  },
  chunkFPAJGGOCValue234 = class {
    constructor() {
      this.segmentSeparator = "/";
      this.indexSeparator = "@";
    }
    getAstNodePath(chunkFPAJGGOCParam887) {
      if (chunkFPAJGGOCParam887.$container) {
        let chunkFPAJGGOCValue1527 = this.getAstNodePath(
            chunkFPAJGGOCParam887.$container,
          ),
          chunkFPAJGGOCValue1528 = this.getPathSegment(chunkFPAJGGOCParam887);
        return (
          chunkFPAJGGOCValue1527 +
          this.segmentSeparator +
          chunkFPAJGGOCValue1528
        );
      }
      return "";
    }
    getPathSegment({ $containerProperty, $containerIndex }) {
      if (!$containerProperty)
        throw Error("Missing '$containerProperty' in AST node.");
      return $containerIndex === undefined
        ? $containerProperty
        : $containerProperty + this.indexSeparator + $containerIndex;
    }
    getAstNode(chunkFPAJGGOCParam490, chunkFPAJGGOCParam491) {
      return chunkFPAJGGOCParam491
        .split(this.segmentSeparator)
        .reduce((accumulator, current) => {
          if (!accumulator || current.length === 0) return accumulator;
          let chunkFPAJGGOCValue1084 = current.indexOf(this.indexSeparator);
          if (chunkFPAJGGOCValue1084 > 0) {
            let chunkFPAJGGOCValue1614 = current.substring(
                0,
                chunkFPAJGGOCValue1084,
              ),
              chunkFPAJGGOCValue1615 = parseInt(
                current.substring(chunkFPAJGGOCValue1084 + 1),
              );
            return accumulator[chunkFPAJGGOCValue1614]?.[
              chunkFPAJGGOCValue1615
            ];
          }
          return accumulator[current];
        }, chunkFPAJGGOCParam490);
    }
  },
  chunkFPAJGGOCValue235 = chunkR({});
chunkI(chunkFPAJGGOCValue235, chunkS(mainR(), 1));
var chunkFPAJGGOCValue236 = class {
    constructor(chunkFPAJGGOCParam765) {
      this._ready = new chunkFPAJGGOCValue207();
      this.settings = {};
      this.workspaceConfig = false;
      this.onConfigurationSectionUpdateEmitter =
        new chunkFPAJGGOCValue235.Emitter();
      this.serviceRegistry = chunkFPAJGGOCParam765.ServiceRegistry;
    }
    get ready() {
      return this._ready.promise;
    }
    initialize(chunkFPAJGGOCParam1468) {
      this.workspaceConfig =
        chunkFPAJGGOCParam1468.capabilities.workspace?.configuration ?? false;
    }
    async initialized(chunkFPAJGGOCParam193) {
      if (this.workspaceConfig) {
        if (chunkFPAJGGOCParam193.register) {
          let chunkFPAJGGOCValue1286 = this.serviceRegistry.all;
          chunkFPAJGGOCParam193.register({
            section: chunkFPAJGGOCValue1286.map((item) =>
              this.toSectionName(item.LanguageMetaData.languageId),
            ),
          });
        }
        if (chunkFPAJGGOCParam193.fetchConfiguration) {
          let chunkFPAJGGOCValue1002 = this.serviceRegistry.all.map((item) => ({
              section: this.toSectionName(item.LanguageMetaData.languageId),
            })),
            chunkFPAJGGOCValue1003 =
              await chunkFPAJGGOCParam193.fetchConfiguration(
                chunkFPAJGGOCValue1002,
              );
          chunkFPAJGGOCValue1002.forEach((item, index) => {
            this.updateSectionConfiguration(
              item.section,
              chunkFPAJGGOCValue1003[index],
            );
          });
        }
      }
      this._ready.resolve();
    }
    updateConfiguration(chunkFPAJGGOCParam538) {
      chunkFPAJGGOCParam538.settings &&
        Object.keys(chunkFPAJGGOCParam538.settings).forEach((item) => {
          let chunkFPAJGGOCValue1196 = chunkFPAJGGOCParam538.settings[item];
          this.updateSectionConfiguration(item, chunkFPAJGGOCValue1196);
          this.onConfigurationSectionUpdateEmitter.fire({
            section: item,
            configuration: chunkFPAJGGOCValue1196,
          });
        });
    }
    updateSectionConfiguration(chunkFPAJGGOCParam1757, chunkFPAJGGOCParam1758) {
      this.settings[chunkFPAJGGOCParam1757] = chunkFPAJGGOCParam1758;
    }
    async getConfiguration(chunkFPAJGGOCParam1161, chunkFPAJGGOCParam1162) {
      await this.ready;
      let chunkFPAJGGOCValue1490 = this.toSectionName(chunkFPAJGGOCParam1161);
      if (this.settings[chunkFPAJGGOCValue1490])
        return this.settings[chunkFPAJGGOCValue1490][chunkFPAJGGOCParam1162];
    }
    toSectionName(chunkFPAJGGOCParam2097) {
      return `${chunkFPAJGGOCParam2097}`;
    }
    get onConfigurationSectionUpdate() {
      return this.onConfigurationSectionUpdateEmitter.event;
    }
  },
  chunkFPAJGGOCValue237;
(function (chunkFPAJGGOCParam1438) {
  function chunkFPAJGGOCHelper396(chunkFPAJGGOCParam1811) {
    return {
      dispose: async () => await chunkFPAJGGOCParam1811(),
    };
  }
  chunkFPAJGGOCParam1438.create = chunkFPAJGGOCHelper396;
})((chunkFPAJGGOCValue237 ||= {}));
var chunkFPAJGGOCValue238 = class {
    constructor(chunkFPAJGGOCParam188) {
      this.updateBuildOptions = {
        validation: {
          categories: ["built-in", "fast"],
        },
      };
      this.updateListeners = [];
      this.buildPhaseListeners = new chunkFPAJGGOCValue217();
      this.documentPhaseListeners = new chunkFPAJGGOCValue217();
      this.buildState = new Map();
      this.documentBuildWaiters = new Map();
      this.currentState = chunkFPAJGGOCValue210.Changed;
      this.langiumDocuments = chunkFPAJGGOCParam188.workspace.LangiumDocuments;
      this.langiumDocumentFactory =
        chunkFPAJGGOCParam188.workspace.LangiumDocumentFactory;
      this.textDocuments = chunkFPAJGGOCParam188.workspace.TextDocuments;
      this.indexManager = chunkFPAJGGOCParam188.workspace.IndexManager;
      this.serviceRegistry = chunkFPAJGGOCParam188.ServiceRegistry;
    }
    async build(
      chunkFPAJGGOCParam68,
      chunkFPAJGGOCParam69 = {},
      chunkFPAJGGOCParam70 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      for (let chunkFPAJGGOCValue498 of chunkFPAJGGOCParam68) {
        let e = chunkFPAJGGOCValue498.uri.toString();
        if (chunkFPAJGGOCValue498.state === chunkFPAJGGOCValue210.Validated) {
          if (
            typeof chunkFPAJGGOCParam69.validation == "boolean" &&
            chunkFPAJGGOCParam69.validation
          ) {
            chunkFPAJGGOCValue498.state =
              chunkFPAJGGOCValue210.IndexedReferences;
            chunkFPAJGGOCValue498.diagnostics = undefined;
            this.buildState.delete(e);
          } else if (typeof chunkFPAJGGOCParam69.validation == "object") {
            let chunkFPAJGGOCValue597 = this.buildState.get(e),
              chunkFPAJGGOCValue598 =
                chunkFPAJGGOCValue597?.result?.validationChecks;
            if (chunkFPAJGGOCValue598) {
              let chunkFPAJGGOCValue700 = (
                chunkFPAJGGOCParam69.validation.categories ??
                chunkFPAJGGOCValue228.all
              ).filter((item) => !chunkFPAJGGOCValue598.includes(item));
              chunkFPAJGGOCValue700.length > 0 &&
                (this.buildState.set(e, {
                  completed: false,
                  options: {
                    validation: Object.assign(
                      Object.assign({}, chunkFPAJGGOCParam69.validation),
                      {
                        categories: chunkFPAJGGOCValue700,
                      },
                    ),
                  },
                  result: chunkFPAJGGOCValue597.result,
                }),
                (chunkFPAJGGOCValue498.state =
                  chunkFPAJGGOCValue210.IndexedReferences));
            }
          }
        } else this.buildState.delete(e);
      }
      this.currentState = chunkFPAJGGOCValue210.Changed;
      await this.emitUpdate(
        chunkFPAJGGOCParam68.map((item) => item.uri),
        [],
      );
      await this.buildDocuments(
        chunkFPAJGGOCParam68,
        chunkFPAJGGOCParam69,
        chunkFPAJGGOCParam70,
      );
    }
    async update(
      chunkFPAJGGOCParam57,
      chunkFPAJGGOCParam58,
      chunkFPAJGGOCParam59 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      this.currentState = chunkFPAJGGOCValue210.Changed;
      for (let chunkFPAJGGOCValue1488 of chunkFPAJGGOCParam58) {
        this.langiumDocuments.deleteDocument(chunkFPAJGGOCValue1488);
        this.buildState.delete(chunkFPAJGGOCValue1488.toString());
        this.indexManager.remove(chunkFPAJGGOCValue1488);
      }
      for (let chunkFPAJGGOCValue957 of chunkFPAJGGOCParam57) {
        if (!this.langiumDocuments.invalidateDocument(chunkFPAJGGOCValue957)) {
          let chunkFPAJGGOCValue1300 = this.langiumDocumentFactory.fromModel(
            {
              $type: "INVALID",
            },
            chunkFPAJGGOCValue957,
          );
          chunkFPAJGGOCValue1300.state = chunkFPAJGGOCValue210.Changed;
          this.langiumDocuments.addDocument(chunkFPAJGGOCValue1300);
        }
        this.buildState.delete(chunkFPAJGGOCValue957.toString());
      }
      let chunkFPAJGGOCValue452 = chunkFPAJGGOCHelper10(chunkFPAJGGOCParam57)
        .concat(chunkFPAJGGOCParam58)
        .map((item) => item.toString())
        .toSet();
      this.langiumDocuments.all
        .filter(
          (item) =>
            !chunkFPAJGGOCValue452.has(item.uri.toString()) &&
            this.shouldRelink(item, chunkFPAJGGOCValue452),
        )
        .forEach((item) => {
          this.serviceRegistry
            .getServices(item.uri)
            .references.Linker.unlink(item);
          item.state = Math.min(
            item.state,
            chunkFPAJGGOCValue210.ComputedScopes,
          );
          item.diagnostics = undefined;
        });
      await this.emitUpdate(chunkFPAJGGOCParam57, chunkFPAJGGOCParam58);
      await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam59);
      let chunkFPAJGGOCValue453 = this.sortDocuments(
        this.langiumDocuments.all
          .filter(
            (item) =>
              item.state < chunkFPAJGGOCValue210.Linked ||
              !this.buildState.get(item.uri.toString())?.completed,
          )
          .toArray(),
      );
      await this.buildDocuments(
        chunkFPAJGGOCValue453,
        this.updateBuildOptions,
        chunkFPAJGGOCParam59,
      );
    }
    async emitUpdate(chunkFPAJGGOCParam1469, chunkFPAJGGOCParam1470) {
      await Promise.all(
        this.updateListeners.map((item) =>
          item(chunkFPAJGGOCParam1469, chunkFPAJGGOCParam1470),
        ),
      );
    }
    sortDocuments(chunkFPAJGGOCParam620) {
      let chunkFPAJGGOCValue1041 = 0,
        chunkFPAJGGOCValue1042 = chunkFPAJGGOCParam620.length - 1;
      for (; chunkFPAJGGOCValue1041 < chunkFPAJGGOCValue1042; ) {
        for (
          ;
          chunkFPAJGGOCValue1041 < chunkFPAJGGOCParam620.length &&
          this.hasTextDocument(chunkFPAJGGOCParam620[chunkFPAJGGOCValue1041]);

        )
          chunkFPAJGGOCValue1041++;
        for (
          ;
          chunkFPAJGGOCValue1042 >= 0 &&
          !this.hasTextDocument(chunkFPAJGGOCParam620[chunkFPAJGGOCValue1042]);

        )
          chunkFPAJGGOCValue1042--;
        chunkFPAJGGOCValue1041 < chunkFPAJGGOCValue1042 &&
          ([
            chunkFPAJGGOCParam620[chunkFPAJGGOCValue1041],
            chunkFPAJGGOCParam620[chunkFPAJGGOCValue1042],
          ] = [
            chunkFPAJGGOCParam620[chunkFPAJGGOCValue1042],
            chunkFPAJGGOCParam620[chunkFPAJGGOCValue1041],
          ]);
      }
      return chunkFPAJGGOCParam620;
    }
    hasTextDocument(chunkFPAJGGOCParam1684) {
      return !!this.textDocuments?.get(chunkFPAJGGOCParam1684.uri);
    }
    shouldRelink(chunkFPAJGGOCParam1230, chunkFPAJGGOCParam1231) {
      return chunkFPAJGGOCParam1230.references.some(
        (item) => item.error !== undefined,
      )
        ? true
        : this.indexManager.isAffected(
            chunkFPAJGGOCParam1230,
            chunkFPAJGGOCParam1231,
          );
    }
    onUpdate(chunkFPAJGGOCParam829) {
      return (
        this.updateListeners.push(chunkFPAJGGOCParam829),
        chunkFPAJGGOCValue237.create(() => {
          let chunkFPAJGGOCValue1605 = this.updateListeners.indexOf(
            chunkFPAJGGOCParam829,
          );
          chunkFPAJGGOCValue1605 >= 0 &&
            this.updateListeners.splice(chunkFPAJGGOCValue1605, 1);
        })
      );
    }
    async buildDocuments(
      chunkFPAJGGOCParam80,
      chunkFPAJGGOCParam81,
      chunkFPAJGGOCParam82,
    ) {
      this.prepareBuild(chunkFPAJGGOCParam80, chunkFPAJGGOCParam81);
      await this.runCancelable(
        chunkFPAJGGOCParam80,
        chunkFPAJGGOCValue210.Parsed,
        chunkFPAJGGOCParam82,
        (chunkFPAJGGOCParam1925) =>
          this.langiumDocumentFactory.update(
            chunkFPAJGGOCParam1925,
            chunkFPAJGGOCParam82,
          ),
      );
      await this.runCancelable(
        chunkFPAJGGOCParam80,
        chunkFPAJGGOCValue210.IndexedContent,
        chunkFPAJGGOCParam82,
        (chunkFPAJGGOCParam1952) =>
          this.indexManager.updateContent(
            chunkFPAJGGOCParam1952,
            chunkFPAJGGOCParam82,
          ),
      );
      await this.runCancelable(
        chunkFPAJGGOCParam80,
        chunkFPAJGGOCValue210.ComputedScopes,
        chunkFPAJGGOCParam82,
        async (chunkFPAJGGOCParam1021) => {
          chunkFPAJGGOCParam1021.precomputedScopes = await this.serviceRegistry
            .getServices(chunkFPAJGGOCParam1021.uri)
            .references.ScopeComputation.computeLocalScopes(
              chunkFPAJGGOCParam1021,
              chunkFPAJGGOCParam82,
            );
        },
      );
      await this.runCancelable(
        chunkFPAJGGOCParam80,
        chunkFPAJGGOCValue210.Linked,
        chunkFPAJGGOCParam82,
        (chunkFPAJGGOCParam1583) =>
          this.serviceRegistry
            .getServices(chunkFPAJGGOCParam1583.uri)
            .references.Linker.link(
              chunkFPAJGGOCParam1583,
              chunkFPAJGGOCParam82,
            ),
      );
      await this.runCancelable(
        chunkFPAJGGOCParam80,
        chunkFPAJGGOCValue210.IndexedReferences,
        chunkFPAJGGOCParam82,
        (chunkFPAJGGOCParam1926) =>
          this.indexManager.updateReferences(
            chunkFPAJGGOCParam1926,
            chunkFPAJGGOCParam82,
          ),
      );
      let chunkFPAJGGOCValue492 = chunkFPAJGGOCParam80.filter((item) =>
        this.shouldValidate(item),
      );
      await this.runCancelable(
        chunkFPAJGGOCValue492,
        chunkFPAJGGOCValue210.Validated,
        chunkFPAJGGOCParam82,
        (chunkFPAJGGOCParam2191) =>
          this.validate(chunkFPAJGGOCParam2191, chunkFPAJGGOCParam82),
      );
      for (let chunkFPAJGGOCValue1644 of chunkFPAJGGOCParam80) {
        let chunkFPAJGGOCValue1713 = this.buildState.get(
          chunkFPAJGGOCValue1644.uri.toString(),
        );
        chunkFPAJGGOCValue1713 && (chunkFPAJGGOCValue1713.completed = true);
      }
    }
    prepareBuild(chunkFPAJGGOCParam608, chunkFPAJGGOCParam609) {
      for (let chunkFPAJGGOCValue1120 of chunkFPAJGGOCParam608) {
        let e = chunkFPAJGGOCValue1120.uri.toString(),
          chunkFPAJGGOCValue1176 = this.buildState.get(e);
        (!chunkFPAJGGOCValue1176 || chunkFPAJGGOCValue1176.completed) &&
          this.buildState.set(e, {
            completed: false,
            options: chunkFPAJGGOCParam609,
            result: chunkFPAJGGOCValue1176?.result,
          });
      }
    }
    async runCancelable(
      chunkFPAJGGOCParam516,
      chunkFPAJGGOCParam517,
      chunkFPAJGGOCParam518,
      chunkFPAJGGOCParam519,
    ) {
      let chunkFPAJGGOCValue939 = chunkFPAJGGOCParam516.filter(
        (item) => item.state < chunkFPAJGGOCParam517,
      );
      for (let chunkFPAJGGOCValue1546 of chunkFPAJGGOCValue939) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam518);
        await chunkFPAJGGOCParam519(chunkFPAJGGOCValue1546);
        chunkFPAJGGOCValue1546.state = chunkFPAJGGOCParam517;
        await this.notifyDocumentPhase(
          chunkFPAJGGOCValue1546,
          chunkFPAJGGOCParam517,
          chunkFPAJGGOCParam518,
        );
      }
      let chunkFPAJGGOCValue940 = chunkFPAJGGOCParam516.filter(
        (item) => item.state === chunkFPAJGGOCParam517,
      );
      await this.notifyBuildPhase(
        chunkFPAJGGOCValue940,
        chunkFPAJGGOCParam517,
        chunkFPAJGGOCParam518,
      );
      this.currentState = chunkFPAJGGOCParam517;
    }
    onBuildPhase(chunkFPAJGGOCParam1029, chunkFPAJGGOCParam1030) {
      return (
        this.buildPhaseListeners.add(
          chunkFPAJGGOCParam1029,
          chunkFPAJGGOCParam1030,
        ),
        chunkFPAJGGOCValue237.create(() => {
          this.buildPhaseListeners.delete(
            chunkFPAJGGOCParam1029,
            chunkFPAJGGOCParam1030,
          );
        })
      );
    }
    onDocumentPhase(chunkFPAJGGOCParam984, chunkFPAJGGOCParam985) {
      return (
        this.documentPhaseListeners.add(
          chunkFPAJGGOCParam984,
          chunkFPAJGGOCParam985,
        ),
        chunkFPAJGGOCValue237.create(() => {
          this.documentPhaseListeners.delete(
            chunkFPAJGGOCParam984,
            chunkFPAJGGOCParam985,
          );
        })
      );
    }
    waitUntil(
      chunkFPAJGGOCParam143,
      chunkFPAJGGOCParam144,
      chunkFPAJGGOCParam145,
    ) {
      let chunkFPAJGGOCValue547;
      if (
        (chunkFPAJGGOCParam144 && "path" in chunkFPAJGGOCParam144
          ? (chunkFPAJGGOCValue547 = chunkFPAJGGOCParam144)
          : (chunkFPAJGGOCParam145 = chunkFPAJGGOCParam144),
        (chunkFPAJGGOCParam145 ??=
          chunkFPAJGGOCValue203.CancellationToken.None),
        chunkFPAJGGOCValue547)
      ) {
        let chunkFPAJGGOCValue1622 = this.langiumDocuments.getDocument(
          chunkFPAJGGOCValue547,
        );
        if (
          chunkFPAJGGOCValue1622 &&
          chunkFPAJGGOCValue1622.state > chunkFPAJGGOCParam143
        )
          return Promise.resolve(chunkFPAJGGOCValue547);
      }
      return this.currentState >= chunkFPAJGGOCParam143
        ? Promise.resolve(undefined)
        : chunkFPAJGGOCParam145.isCancellationRequested
          ? Promise.reject(chunkFPAJGGOCValue206)
          : new Promise((chunkFPAJGGOCParam480, chunkFPAJGGOCParam481) => {
              let chunkFPAJGGOCValue898 = this.onBuildPhase(
                  chunkFPAJGGOCParam143,
                  () => {
                    chunkFPAJGGOCValue898.dispose();
                    chunkFPAJGGOCValue899.dispose();
                    chunkFPAJGGOCParam480(
                      chunkFPAJGGOCValue547
                        ? this.langiumDocuments.getDocument(
                            chunkFPAJGGOCValue547,
                          )?.uri
                        : undefined,
                    );
                  },
                ),
                chunkFPAJGGOCValue899 =
                  chunkFPAJGGOCParam145.onCancellationRequested(() => {
                    chunkFPAJGGOCValue898.dispose();
                    chunkFPAJGGOCValue899.dispose();
                    chunkFPAJGGOCParam481(chunkFPAJGGOCValue206);
                  });
            });
    }
    async notifyDocumentPhase(
      chunkFPAJGGOCParam822,
      chunkFPAJGGOCParam823,
      chunkFPAJGGOCParam824,
    ) {
      let chunkFPAJGGOCValue1229 = this.documentPhaseListeners
        .get(chunkFPAJGGOCParam823)
        .slice();
      for (let chunkFPAJGGOCValue1632 of chunkFPAJGGOCValue1229)
        try {
          await chunkFPAJGGOCValue1632(
            chunkFPAJGGOCParam822,
            chunkFPAJGGOCParam824,
          );
        } catch (chunkFPAJGGOCValue1850) {
          if (!chunkFPAJGGOCHelper312(chunkFPAJGGOCValue1850))
            throw chunkFPAJGGOCValue1850;
        }
    }
    async notifyBuildPhase(
      chunkFPAJGGOCParam1022,
      chunkFPAJGGOCParam1023,
      chunkFPAJGGOCParam1024,
    ) {
      if (chunkFPAJGGOCParam1022.length === 0) return;
      let chunkFPAJGGOCValue1379 = this.buildPhaseListeners
        .get(chunkFPAJGGOCParam1023)
        .slice();
      for (let chunkFPAJGGOCValue1859 of chunkFPAJGGOCValue1379) {
        await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam1024);
        await chunkFPAJGGOCValue1859(
          chunkFPAJGGOCParam1022,
          chunkFPAJGGOCParam1024,
        );
      }
    }
    shouldValidate(chunkFPAJGGOCParam1647) {
      return !!this.getBuildOptions(chunkFPAJGGOCParam1647).validation;
    }
    async validate(chunkFPAJGGOCParam226, chunkFPAJGGOCParam227) {
      let chunkFPAJGGOCValue638 = this.serviceRegistry.getServices(
          chunkFPAJGGOCParam226.uri,
        ).validation.DocumentValidator,
        chunkFPAJGGOCValue639 = this.getBuildOptions(
          chunkFPAJGGOCParam226,
        ).validation,
        chunkFPAJGGOCValue640 =
          typeof chunkFPAJGGOCValue639 == "object"
            ? chunkFPAJGGOCValue639
            : undefined,
        chunkFPAJGGOCValue641 = await chunkFPAJGGOCValue638.validateDocument(
          chunkFPAJGGOCParam226,
          chunkFPAJGGOCValue640,
          chunkFPAJGGOCParam227,
        );
      chunkFPAJGGOCParam226.diagnostics
        ? chunkFPAJGGOCParam226.diagnostics.push(...chunkFPAJGGOCValue641)
        : (chunkFPAJGGOCParam226.diagnostics = chunkFPAJGGOCValue641);
      let chunkFPAJGGOCValue642 = this.buildState.get(
        chunkFPAJGGOCParam226.uri.toString(),
      );
      if (chunkFPAJGGOCValue642) {
        chunkFPAJGGOCValue642.result ??= {};
        let chunkFPAJGGOCValue1276 =
          chunkFPAJGGOCValue640?.categories ?? chunkFPAJGGOCValue228.all;
        chunkFPAJGGOCValue642.result.validationChecks
          ? chunkFPAJGGOCValue642.result.validationChecks.push(
              ...chunkFPAJGGOCValue1276,
            )
          : (chunkFPAJGGOCValue642.result.validationChecks = [
              ...chunkFPAJGGOCValue1276,
            ]);
      }
    }
    getBuildOptions(chunkFPAJGGOCParam1521) {
      return (
        this.buildState.get(chunkFPAJGGOCParam1521.uri.toString())?.options ??
        {}
      );
    }
  },
  chunkFPAJGGOCValue239 = class {
    constructor(chunkFPAJGGOCParam589) {
      this.symbolIndex = new Map();
      this.symbolByTypeIndex = new chunkFPAJGGOCValue224();
      this.referenceIndex = new Map();
      this.documents = chunkFPAJGGOCParam589.workspace.LangiumDocuments;
      this.serviceRegistry = chunkFPAJGGOCParam589.ServiceRegistry;
      this.astReflection = chunkFPAJGGOCParam589.AstReflection;
    }
    findAllReferences(chunkFPAJGGOCParam648, chunkFPAJGGOCParam649) {
      let chunkFPAJGGOCValue1060 = chunkFPAJGGOCHelper50(
          chunkFPAJGGOCParam648,
        ).uri,
        chunkFPAJGGOCValue1061 = [];
      return (
        this.referenceIndex.forEach((item) => {
          item.forEach((_item) => {
            chunkFPAJGGOCValue209.equals(
              _item.targetUri,
              chunkFPAJGGOCValue1060,
            ) &&
              _item.targetPath === chunkFPAJGGOCParam649 &&
              chunkFPAJGGOCValue1061.push(_item);
          });
        }),
        chunkFPAJGGOCHelper10(chunkFPAJGGOCValue1061)
      );
    }
    allElements(chunkFPAJGGOCParam914, chunkFPAJGGOCParam915) {
      let chunkFPAJGGOCValue1301 = chunkFPAJGGOCHelper10(
        this.symbolIndex.keys(),
      );
      return (
        chunkFPAJGGOCParam915 &&
          (chunkFPAJGGOCValue1301 = chunkFPAJGGOCValue1301.filter(
            (item) => !chunkFPAJGGOCParam915 || chunkFPAJGGOCParam915.has(item),
          )),
        chunkFPAJGGOCValue1301
          .map((item) => this.getFileDescriptions(item, chunkFPAJGGOCParam914))
          .flat()
      );
    }
    getFileDescriptions(chunkFPAJGGOCParam663, chunkFPAJGGOCParam664) {
      return chunkFPAJGGOCParam664
        ? this.symbolByTypeIndex.get(
            chunkFPAJGGOCParam663,
            chunkFPAJGGOCParam664,
            () =>
              (this.symbolIndex.get(chunkFPAJGGOCParam663) ?? []).filter(
                (item) =>
                  this.astReflection.isSubtype(
                    item.type,
                    chunkFPAJGGOCParam664,
                  ),
              ),
          )
        : (this.symbolIndex.get(chunkFPAJGGOCParam663) ?? []);
    }
    remove(chunkFPAJGGOCParam1126) {
      let t = chunkFPAJGGOCParam1126.toString();
      this.symbolIndex.delete(t);
      this.symbolByTypeIndex.clear(t);
      this.referenceIndex.delete(t);
    }
    async updateContent(
      chunkFPAJGGOCParam617,
      chunkFPAJGGOCParam618 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1040 = await this.serviceRegistry
          .getServices(chunkFPAJGGOCParam617.uri)
          .references.ScopeComputation.computeExports(
            chunkFPAJGGOCParam617,
            chunkFPAJGGOCParam618,
          ),
        r = chunkFPAJGGOCParam617.uri.toString();
      this.symbolIndex.set(r, chunkFPAJGGOCValue1040);
      this.symbolByTypeIndex.clear(r);
    }
    async updateReferences(
      chunkFPAJGGOCParam727,
      chunkFPAJGGOCParam728 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1123 = await this.serviceRegistry
        .getServices(chunkFPAJGGOCParam727.uri)
        .workspace.ReferenceDescriptionProvider.createDescriptions(
          chunkFPAJGGOCParam727,
          chunkFPAJGGOCParam728,
        );
      this.referenceIndex.set(
        chunkFPAJGGOCParam727.uri.toString(),
        chunkFPAJGGOCValue1123,
      );
    }
    isAffected(chunkFPAJGGOCParam1127, chunkFPAJGGOCParam1128) {
      let chunkFPAJGGOCValue1463 = this.referenceIndex.get(
        chunkFPAJGGOCParam1127.uri.toString(),
      );
      return chunkFPAJGGOCValue1463
        ? chunkFPAJGGOCValue1463.some(
            (item) =>
              !item.local &&
              chunkFPAJGGOCParam1128.has(item.targetUri.toString()),
          )
        : false;
    }
  },
  chunkFPAJGGOCValue240 = class {
    constructor(chunkFPAJGGOCParam449) {
      this.initialBuildOptions = {};
      this._ready = new chunkFPAJGGOCValue207();
      this.serviceRegistry = chunkFPAJGGOCParam449.ServiceRegistry;
      this.langiumDocuments = chunkFPAJGGOCParam449.workspace.LangiumDocuments;
      this.documentBuilder = chunkFPAJGGOCParam449.workspace.DocumentBuilder;
      this.fileSystemProvider =
        chunkFPAJGGOCParam449.workspace.FileSystemProvider;
      this.mutex = chunkFPAJGGOCParam449.workspace.WorkspaceLock;
    }
    get ready() {
      return this._ready.promise;
    }
    get workspaceFolders() {
      return this.folders;
    }
    initialize(chunkFPAJGGOCParam1692) {
      this.folders = chunkFPAJGGOCParam1692.workspaceFolders ?? undefined;
    }
    initialized(chunkFPAJGGOCParam1315) {
      return this.mutex.write((chunkFPAJGGOCParam1849) =>
        this.initializeWorkspace(this.folders ?? [], chunkFPAJGGOCParam1849),
      );
    }
    async initializeWorkspace(
      chunkFPAJGGOCParam906,
      chunkFPAJGGOCParam907 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1287 = await this.performStartup(
        chunkFPAJGGOCParam906,
      );
      await chunkFPAJGGOCHelper313(chunkFPAJGGOCParam907);
      await this.documentBuilder.build(
        chunkFPAJGGOCValue1287,
        this.initialBuildOptions,
        chunkFPAJGGOCParam907,
      );
    }
    async performStartup(chunkFPAJGGOCParam231) {
      let chunkFPAJGGOCValue646 = this.serviceRegistry.all.flatMap(
          (item) => item.LanguageMetaData.fileExtensions,
        ),
        chunkFPAJGGOCValue647 = [],
        chunkFPAJGGOCValue648 = (chunkFPAJGGOCParam1192) => {
          chunkFPAJGGOCValue647.push(chunkFPAJGGOCParam1192);
          this.langiumDocuments.hasDocument(chunkFPAJGGOCParam1192.uri) ||
            this.langiumDocuments.addDocument(chunkFPAJGGOCParam1192);
        };
      return (
        await this.loadAdditionalDocuments(
          chunkFPAJGGOCParam231,
          chunkFPAJGGOCValue648,
        ),
        await Promise.all(
          chunkFPAJGGOCParam231
            .map((item) => [item, this.getRootFolder(item)])
            .map(async (item) =>
              this.traverseFolder(
                ...item,
                chunkFPAJGGOCValue646,
                chunkFPAJGGOCValue648,
              ),
            ),
        ),
        this._ready.resolve(),
        chunkFPAJGGOCValue647
      );
    }
    loadAdditionalDocuments(chunkFPAJGGOCParam1738, chunkFPAJGGOCParam1739) {
      return Promise.resolve();
    }
    getRootFolder(chunkFPAJGGOCParam1953) {
      return URI.parse(chunkFPAJGGOCParam1953.uri);
    }
    async traverseFolder(
      chunkFPAJGGOCParam428,
      chunkFPAJGGOCParam429,
      chunkFPAJGGOCParam430,
      chunkFPAJGGOCParam431,
    ) {
      let chunkFPAJGGOCValue844 = await this.fileSystemProvider.readDirectory(
        chunkFPAJGGOCParam429,
      );
      await Promise.all(
        chunkFPAJGGOCValue844.map(async (item) => {
          this.includeEntry(
            chunkFPAJGGOCParam428,
            item,
            chunkFPAJGGOCParam430,
          ) &&
            (item.isDirectory
              ? await this.traverseFolder(
                  chunkFPAJGGOCParam428,
                  item.uri,
                  chunkFPAJGGOCParam430,
                  chunkFPAJGGOCParam431,
                )
              : item.isFile &&
                chunkFPAJGGOCParam431(
                  await this.langiumDocuments.getOrCreateDocument(item.uri),
                ));
        }),
      );
    }
    includeEntry(
      chunkFPAJGGOCParam642,
      chunkFPAJGGOCParam643,
      chunkFPAJGGOCParam644,
    ) {
      let chunkFPAJGGOCValue1058 = chunkFPAJGGOCValue209.basename(
        chunkFPAJGGOCParam643.uri,
      );
      if (chunkFPAJGGOCValue1058.startsWith(".")) return false;
      if (chunkFPAJGGOCParam643.isDirectory)
        return (
          chunkFPAJGGOCValue1058 !== "node_modules" &&
          chunkFPAJGGOCValue1058 !== "out"
        );
      if (chunkFPAJGGOCParam643.isFile) {
        let chunkFPAJGGOCValue1802 = chunkFPAJGGOCValue209.extname(
          chunkFPAJGGOCParam643.uri,
        );
        return chunkFPAJGGOCParam644.includes(chunkFPAJGGOCValue1802);
      }
      return false;
    }
  },
  _d = class {
    buildUnexpectedCharactersMessage(
      chunkFPAJGGOCParam1332,
      chunkFPAJGGOCParam1333,
      chunkFPAJGGOCParam1334,
      chunkFPAJGGOCParam1335,
      chunkFPAJGGOCParam1336,
    ) {
      return chunkFPAJGGOCValue106.buildUnexpectedCharactersMessage(
        chunkFPAJGGOCParam1332,
        chunkFPAJGGOCParam1333,
        chunkFPAJGGOCParam1334,
        chunkFPAJGGOCParam1335,
        chunkFPAJGGOCParam1336,
      );
    }
    buildUnableToPopLexerModeMessage(chunkFPAJGGOCParam1477) {
      return chunkFPAJGGOCValue106.buildUnableToPopLexerModeMessage(
        chunkFPAJGGOCParam1477,
      );
    }
  },
  chunkFPAJGGOCValue241 = {
    mode: "full",
  },
  chunkFPAJGGOCValue242 = class {
    constructor(chunkFPAJGGOCParam244) {
      this.errorMessageProvider =
        chunkFPAJGGOCParam244.parser.LexerErrorMessageProvider;
      this.tokenBuilder = chunkFPAJGGOCParam244.parser.TokenBuilder;
      let chunkFPAJGGOCValue666 = this.tokenBuilder.buildTokens(
        chunkFPAJGGOCParam244.Grammar,
        {
          caseInsensitive:
            chunkFPAJGGOCParam244.LanguageMetaData.caseInsensitive,
        },
      );
      this.tokenTypes = this.toTokenTypeDictionary(chunkFPAJGGOCValue666);
      this.chevrotainLexer = new chunkFPAJGGOCValue109(
        chunkFPAJGGOCHelper322(chunkFPAJGGOCValue666)
          ? Object.values(chunkFPAJGGOCValue666)
          : chunkFPAJGGOCValue666,
        {
          positionTracking: "full",
          skipValidations:
            chunkFPAJGGOCParam244.LanguageMetaData.mode === "production",
          errorMessageProvider: this.errorMessageProvider,
        },
      );
    }
    get definition() {
      return this.tokenTypes;
    }
    tokenize(
      chunkFPAJGGOCParam676,
      chunkFPAJGGOCParam677 = chunkFPAJGGOCValue241,
    ) {
      var chunkFPAJGGOCValue1085;
      let chunkFPAJGGOCValue1086 = this.chevrotainLexer.tokenize(
        chunkFPAJGGOCParam676,
      );
      return {
        tokens: chunkFPAJGGOCValue1086.tokens,
        errors: chunkFPAJGGOCValue1086.errors,
        hidden: chunkFPAJGGOCValue1086.groups.hidden ?? [],
        report: (chunkFPAJGGOCValue1085 =
          this.tokenBuilder).flushLexingReport?.call(
          chunkFPAJGGOCValue1085,
          chunkFPAJGGOCParam676,
        ),
      };
    }
    toTokenTypeDictionary(chunkFPAJGGOCParam1006) {
      if (chunkFPAJGGOCHelper322(chunkFPAJGGOCParam1006))
        return chunkFPAJGGOCParam1006;
      let chunkFPAJGGOCValue1365 = chunkFPAJGGOCHelper321(
          chunkFPAJGGOCParam1006,
        )
          ? Object.values(chunkFPAJGGOCParam1006.modes).flat()
          : chunkFPAJGGOCParam1006,
        chunkFPAJGGOCValue1366 = {};
      return (
        chunkFPAJGGOCValue1365.forEach(
          (item) => (chunkFPAJGGOCValue1366[item.name] = item),
        ),
        chunkFPAJGGOCValue1366
      );
    }
  };
function chunkFPAJGGOCHelper320(chunkFPAJGGOCParam1594) {
  return (
    Array.isArray(chunkFPAJGGOCParam1594) &&
    (chunkFPAJGGOCParam1594.length === 0 || "name" in chunkFPAJGGOCParam1594[0])
  );
}
function chunkFPAJGGOCHelper321(chunkFPAJGGOCParam1759) {
  return (
    chunkFPAJGGOCParam1759 &&
    "modes" in chunkFPAJGGOCParam1759 &&
    "defaultMode" in chunkFPAJGGOCParam1759
  );
}
function chunkFPAJGGOCHelper322(chunkFPAJGGOCParam2098) {
  return (
    !chunkFPAJGGOCHelper320(chunkFPAJGGOCParam2098) &&
    !chunkFPAJGGOCHelper321(chunkFPAJGGOCParam2098)
  );
}
mainC();
function chunkFPAJGGOCHelper323(
  chunkFPAJGGOCParam656,
  chunkFPAJGGOCParam657,
  chunkFPAJGGOCParam658,
) {
  let chunkFPAJGGOCValue1068, chunkFPAJGGOCValue1069;
  typeof chunkFPAJGGOCParam656 == "string"
    ? ((chunkFPAJGGOCValue1069 = chunkFPAJGGOCParam657),
      (chunkFPAJGGOCValue1068 = chunkFPAJGGOCParam658))
    : ((chunkFPAJGGOCValue1069 = chunkFPAJGGOCParam656.range.start),
      (chunkFPAJGGOCValue1068 = chunkFPAJGGOCParam657));
  chunkFPAJGGOCValue1069 ||= mainO.create(0, 0);
  let chunkFPAJGGOCValue1070 = chunkFPAJGGOCHelper325(chunkFPAJGGOCParam656),
    chunkFPAJGGOCValue1071 = chunkFPAJGGOCHelper337(chunkFPAJGGOCValue1068);
  return chunkFPAJGGOCHelper330({
    index: 0,
    tokens: chunkFPAJGGOCHelper326({
      lines: chunkFPAJGGOCValue1070,
      position: chunkFPAJGGOCValue1069,
      options: chunkFPAJGGOCValue1071,
    }),
    position: chunkFPAJGGOCValue1069,
  });
}
function chunkFPAJGGOCHelper324(chunkFPAJGGOCParam941, chunkFPAJGGOCParam942) {
  let chunkFPAJGGOCValue1327 = chunkFPAJGGOCHelper337(chunkFPAJGGOCParam942),
    chunkFPAJGGOCValue1328 = chunkFPAJGGOCHelper325(chunkFPAJGGOCParam941);
  if (chunkFPAJGGOCValue1328.length === 0) return false;
  let chunkFPAJGGOCValue1329 = chunkFPAJGGOCValue1328[0],
    chunkFPAJGGOCValue1330 =
      chunkFPAJGGOCValue1328[chunkFPAJGGOCValue1328.length - 1],
    chunkFPAJGGOCValue1331 = chunkFPAJGGOCValue1327.start,
    chunkFPAJGGOCValue1332 = chunkFPAJGGOCValue1327.end;
  return (
    !!chunkFPAJGGOCValue1331?.exec(chunkFPAJGGOCValue1329) &&
    !!chunkFPAJGGOCValue1332?.exec(chunkFPAJGGOCValue1330)
  );
}
function chunkFPAJGGOCHelper325(chunkFPAJGGOCParam1471) {
  let chunkFPAJGGOCValue1714 = "";
  return (
    (chunkFPAJGGOCValue1714 =
      typeof chunkFPAJGGOCParam1471 == "string"
        ? chunkFPAJGGOCParam1471
        : chunkFPAJGGOCParam1471.text),
    chunkFPAJGGOCValue1714.split(chunkFPAJGGOCValue62)
  );
}
var chunkFPAJGGOCValue243 = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,
  chunkFPAJGGOCValue244 = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function chunkFPAJGGOCHelper326(chunkFPAJGGOCParam67) {
  let chunkFPAJGGOCValue467 = [],
    chunkFPAJGGOCValue468 = chunkFPAJGGOCParam67.position.line,
    chunkFPAJGGOCValue469 = chunkFPAJGGOCParam67.position.character;
  for (
    let chunkFPAJGGOCValue485 = 0;
    chunkFPAJGGOCValue485 < chunkFPAJGGOCParam67.lines.length;
    chunkFPAJGGOCValue485++
  ) {
    let chunkFPAJGGOCValue486 = chunkFPAJGGOCValue485 === 0,
      chunkFPAJGGOCValue487 =
        chunkFPAJGGOCValue485 === chunkFPAJGGOCParam67.lines.length - 1,
      chunkFPAJGGOCValue488 = chunkFPAJGGOCParam67.lines[chunkFPAJGGOCValue485],
      chunkFPAJGGOCValue489 = 0;
    if (chunkFPAJGGOCValue486 && chunkFPAJGGOCParam67.options.start) {
      let chunkFPAJGGOCValue1747 = chunkFPAJGGOCParam67.options.start?.exec(
        chunkFPAJGGOCValue488,
      );
      chunkFPAJGGOCValue1747 &&
        (chunkFPAJGGOCValue489 =
          chunkFPAJGGOCValue1747.index + chunkFPAJGGOCValue1747[0].length);
    } else {
      let chunkFPAJGGOCValue1750 = chunkFPAJGGOCParam67.options.line?.exec(
        chunkFPAJGGOCValue488,
      );
      chunkFPAJGGOCValue1750 &&
        (chunkFPAJGGOCValue489 =
          chunkFPAJGGOCValue1750.index + chunkFPAJGGOCValue1750[0].length);
    }
    if (chunkFPAJGGOCValue487) {
      let chunkFPAJGGOCValue1748 = chunkFPAJGGOCParam67.options.end?.exec(
        chunkFPAJGGOCValue488,
      );
      chunkFPAJGGOCValue1748 &&
        (chunkFPAJGGOCValue488 = chunkFPAJGGOCValue488.substring(
          0,
          chunkFPAJGGOCValue1748.index,
        ));
    }
    if (
      ((chunkFPAJGGOCValue488 = chunkFPAJGGOCValue488.substring(
        0,
        chunkFPAJGGOCHelper329(chunkFPAJGGOCValue488),
      )),
      chunkFPAJGGOCHelper328(chunkFPAJGGOCValue488, chunkFPAJGGOCValue489) >=
        chunkFPAJGGOCValue488.length)
    ) {
      if (chunkFPAJGGOCValue467.length > 0) {
        let chunkFPAJGGOCValue1649 = mainO.create(
          chunkFPAJGGOCValue468,
          chunkFPAJGGOCValue469,
        );
        chunkFPAJGGOCValue467.push({
          type: "break",
          content: "",
          range: mainS.create(chunkFPAJGGOCValue1649, chunkFPAJGGOCValue1649),
        });
      }
    } else {
      chunkFPAJGGOCValue243.lastIndex = chunkFPAJGGOCValue489;
      let chunkFPAJGGOCValue777 = chunkFPAJGGOCValue243.exec(
        chunkFPAJGGOCValue488,
      );
      if (chunkFPAJGGOCValue777) {
        let chunkFPAJGGOCValue1141 = chunkFPAJGGOCValue777[0],
          chunkFPAJGGOCValue1142 = chunkFPAJGGOCValue777[1],
          chunkFPAJGGOCValue1143 = mainO.create(
            chunkFPAJGGOCValue468,
            chunkFPAJGGOCValue469 + chunkFPAJGGOCValue489,
          ),
          chunkFPAJGGOCValue1144 = mainO.create(
            chunkFPAJGGOCValue468,
            chunkFPAJGGOCValue469 +
              chunkFPAJGGOCValue489 +
              chunkFPAJGGOCValue1141.length,
          );
        chunkFPAJGGOCValue467.push({
          type: "tag",
          content: chunkFPAJGGOCValue1142,
          range: mainS.create(chunkFPAJGGOCValue1143, chunkFPAJGGOCValue1144),
        });
        chunkFPAJGGOCValue489 += chunkFPAJGGOCValue1141.length;
        chunkFPAJGGOCValue489 = chunkFPAJGGOCHelper328(
          chunkFPAJGGOCValue488,
          chunkFPAJGGOCValue489,
        );
      }
      if (chunkFPAJGGOCValue489 < chunkFPAJGGOCValue488.length) {
        let chunkFPAJGGOCValue1616 = chunkFPAJGGOCValue488.substring(
            chunkFPAJGGOCValue489,
          ),
          chunkFPAJGGOCValue1617 = Array.from(
            chunkFPAJGGOCValue1616.matchAll(chunkFPAJGGOCValue244),
          );
        chunkFPAJGGOCValue467.push(
          ...chunkFPAJGGOCHelper327(
            chunkFPAJGGOCValue1617,
            chunkFPAJGGOCValue1616,
            chunkFPAJGGOCValue468,
            chunkFPAJGGOCValue469 + chunkFPAJGGOCValue489,
          ),
        );
      }
    }
    chunkFPAJGGOCValue468++;
    chunkFPAJGGOCValue469 = 0;
  }
  return chunkFPAJGGOCValue467.length > 0 &&
    chunkFPAJGGOCValue467[chunkFPAJGGOCValue467.length - 1].type === "break"
    ? chunkFPAJGGOCValue467.slice(0, -1)
    : chunkFPAJGGOCValue467;
}
function chunkFPAJGGOCHelper327(
  chunkFPAJGGOCParam44,
  chunkFPAJGGOCParam45,
  chunkFPAJGGOCParam46,
  chunkFPAJGGOCParam47,
) {
  let chunkFPAJGGOCValue432 = [];
  if (chunkFPAJGGOCParam44.length === 0) {
    let chunkFPAJGGOCValue1549 = mainO.create(
        chunkFPAJGGOCParam46,
        chunkFPAJGGOCParam47,
      ),
      chunkFPAJGGOCValue1550 = mainO.create(
        chunkFPAJGGOCParam46,
        chunkFPAJGGOCParam47 + chunkFPAJGGOCParam45.length,
      );
    chunkFPAJGGOCValue432.push({
      type: "text",
      content: chunkFPAJGGOCParam45,
      range: mainS.create(chunkFPAJGGOCValue1549, chunkFPAJGGOCValue1550),
    });
  } else {
    let chunkFPAJGGOCValue475 = 0;
    for (let chunkFPAJGGOCValue499 of chunkFPAJGGOCParam44) {
      let chunkFPAJGGOCValue506 = chunkFPAJGGOCValue499.index,
        chunkFPAJGGOCValue507 = chunkFPAJGGOCParam45.substring(
          chunkFPAJGGOCValue475,
          chunkFPAJGGOCValue506,
        );
      chunkFPAJGGOCValue507.length > 0 &&
        chunkFPAJGGOCValue432.push({
          type: "text",
          content: chunkFPAJGGOCParam45.substring(
            chunkFPAJGGOCValue475,
            chunkFPAJGGOCValue506,
          ),
          range: mainS.create(
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 + chunkFPAJGGOCParam47,
            ),
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue506 + chunkFPAJGGOCParam47,
            ),
          ),
        });
      let chunkFPAJGGOCValue508 = chunkFPAJGGOCValue507.length + 1,
        chunkFPAJGGOCValue509 = chunkFPAJGGOCValue499[1];
      if (
        (chunkFPAJGGOCValue432.push({
          type: "inline-tag",
          content: chunkFPAJGGOCValue509,
          range: mainS.create(
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCParam47,
            ),
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCValue509.length +
                chunkFPAJGGOCParam47,
            ),
          ),
        }),
        (chunkFPAJGGOCValue508 += chunkFPAJGGOCValue509.length),
        chunkFPAJGGOCValue499.length === 4)
      ) {
        chunkFPAJGGOCValue508 += chunkFPAJGGOCValue499[2].length;
        let chunkFPAJGGOCValue1132 = chunkFPAJGGOCValue499[3];
        chunkFPAJGGOCValue432.push({
          type: "text",
          content: chunkFPAJGGOCValue1132,
          range: mainS.create(
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCParam47,
            ),
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCValue1132.length +
                chunkFPAJGGOCParam47,
            ),
          ),
        });
      } else
        chunkFPAJGGOCValue432.push({
          type: "text",
          content: "",
          range: mainS.create(
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCParam47,
            ),
            mainO.create(
              chunkFPAJGGOCParam46,
              chunkFPAJGGOCValue475 +
                chunkFPAJGGOCValue508 +
                chunkFPAJGGOCParam47,
            ),
          ),
        });
      chunkFPAJGGOCValue475 =
        chunkFPAJGGOCValue506 + chunkFPAJGGOCValue499[0].length;
    }
    let chunkFPAJGGOCValue476 = chunkFPAJGGOCParam45.substring(
      chunkFPAJGGOCValue475,
    );
    chunkFPAJGGOCValue476.length > 0 &&
      chunkFPAJGGOCValue432.push({
        type: "text",
        content: chunkFPAJGGOCValue476,
        range: mainS.create(
          mainO.create(
            chunkFPAJGGOCParam46,
            chunkFPAJGGOCValue475 + chunkFPAJGGOCParam47,
          ),
          mainO.create(
            chunkFPAJGGOCParam46,
            chunkFPAJGGOCValue475 +
              chunkFPAJGGOCParam47 +
              chunkFPAJGGOCValue476.length,
          ),
        ),
      });
  }
  return chunkFPAJGGOCValue432;
}
var chunkFPAJGGOCValue245 = /\S/,
  chunkFPAJGGOCValue246 = /\s*$/;
function chunkFPAJGGOCHelper328(
  chunkFPAJGGOCParam1501,
  chunkFPAJGGOCParam1502,
) {
  let chunkFPAJGGOCValue1727 = chunkFPAJGGOCParam1501
    .substring(chunkFPAJGGOCParam1502)
    .match(chunkFPAJGGOCValue245);
  return chunkFPAJGGOCValue1727
    ? chunkFPAJGGOCParam1502 + chunkFPAJGGOCValue1727.index
    : chunkFPAJGGOCParam1501.length;
}
function chunkFPAJGGOCHelper329(chunkFPAJGGOCParam1478) {
  let chunkFPAJGGOCValue1720 = chunkFPAJGGOCParam1478.match(
    chunkFPAJGGOCValue246,
  );
  if (chunkFPAJGGOCValue1720 && typeof chunkFPAJGGOCValue1720.index == "number")
    return chunkFPAJGGOCValue1720.index;
}
function chunkFPAJGGOCHelper330(chunkFPAJGGOCParam482) {
  let chunkFPAJGGOCValue900 = mainO.create(
    chunkFPAJGGOCParam482.position.line,
    chunkFPAJGGOCParam482.position.character,
  );
  if (chunkFPAJGGOCParam482.tokens.length === 0)
    return new chunkFPAJGGOCValue247(
      [],
      mainS.create(chunkFPAJGGOCValue900, chunkFPAJGGOCValue900),
    );
  let chunkFPAJGGOCValue901 = [];
  for (; chunkFPAJGGOCParam482.index < chunkFPAJGGOCParam482.tokens.length; ) {
    let chunkFPAJGGOCValue1839 = chunkFPAJGGOCHelper331(
      chunkFPAJGGOCParam482,
      chunkFPAJGGOCValue901[chunkFPAJGGOCValue901.length - 1],
    );
    chunkFPAJGGOCValue1839 &&
      chunkFPAJGGOCValue901.push(chunkFPAJGGOCValue1839);
  }
  let chunkFPAJGGOCValue902 =
      chunkFPAJGGOCValue901[0]?.range.start ?? chunkFPAJGGOCValue900,
    chunkFPAJGGOCValue903 =
      chunkFPAJGGOCValue901[chunkFPAJGGOCValue901.length - 1]?.range.end ??
      chunkFPAJGGOCValue900;
  return new chunkFPAJGGOCValue247(
    chunkFPAJGGOCValue901,
    mainS.create(chunkFPAJGGOCValue902, chunkFPAJGGOCValue903),
  );
}
function chunkFPAJGGOCHelper331(
  chunkFPAJGGOCParam1019,
  chunkFPAJGGOCParam1020,
) {
  let chunkFPAJGGOCValue1372 =
    chunkFPAJGGOCParam1019.tokens[chunkFPAJGGOCParam1019.index];
  if (chunkFPAJGGOCValue1372.type === "tag")
    return chunkFPAJGGOCHelper335(chunkFPAJGGOCParam1019, false);
  if (
    chunkFPAJGGOCValue1372.type === "text" ||
    chunkFPAJGGOCValue1372.type === "inline-tag"
  )
    return chunkFPAJGGOCHelper333(chunkFPAJGGOCParam1019);
  chunkFPAJGGOCHelper332(chunkFPAJGGOCValue1372, chunkFPAJGGOCParam1020);
  chunkFPAJGGOCParam1019.index++;
}
function chunkFPAJGGOCHelper332(
  chunkFPAJGGOCParam1255,
  chunkFPAJGGOCParam1256,
) {
  if (chunkFPAJGGOCParam1256) {
    let chunkFPAJGGOCValue1682 = new chunkFPAJGGOCValue250(
      "",
      chunkFPAJGGOCParam1255.range,
    );
    "inlines" in chunkFPAJGGOCParam1256
      ? chunkFPAJGGOCParam1256.inlines.push(chunkFPAJGGOCValue1682)
      : chunkFPAJGGOCParam1256.content.inlines.push(chunkFPAJGGOCValue1682);
  }
}
function chunkFPAJGGOCHelper333(chunkFPAJGGOCParam755) {
  let chunkFPAJGGOCValue1154 =
      chunkFPAJGGOCParam755.tokens[chunkFPAJGGOCParam755.index],
    chunkFPAJGGOCValue1155 = chunkFPAJGGOCValue1154,
    chunkFPAJGGOCValue1156 = chunkFPAJGGOCValue1154,
    chunkFPAJGGOCValue1157 = [];
  for (
    ;
    chunkFPAJGGOCValue1154 &&
    chunkFPAJGGOCValue1154.type !== "break" &&
    chunkFPAJGGOCValue1154.type !== "tag";

  ) {
    chunkFPAJGGOCValue1157.push(chunkFPAJGGOCHelper334(chunkFPAJGGOCParam755));
    chunkFPAJGGOCValue1156 = chunkFPAJGGOCValue1154;
    chunkFPAJGGOCValue1154 =
      chunkFPAJGGOCParam755.tokens[chunkFPAJGGOCParam755.index];
  }
  return new chunkFPAJGGOCValue249(
    chunkFPAJGGOCValue1157,
    mainS.create(
      chunkFPAJGGOCValue1155.range.start,
      chunkFPAJGGOCValue1156.range.end,
    ),
  );
}
function chunkFPAJGGOCHelper334(chunkFPAJGGOCParam1557) {
  return chunkFPAJGGOCParam1557.tokens[chunkFPAJGGOCParam1557.index].type ===
    "inline-tag"
    ? chunkFPAJGGOCHelper335(chunkFPAJGGOCParam1557, true)
    : chunkFPAJGGOCHelper336(chunkFPAJGGOCParam1557);
}
function chunkFPAJGGOCHelper335(chunkFPAJGGOCParam336, chunkFPAJGGOCParam337) {
  let chunkFPAJGGOCValue767 =
      chunkFPAJGGOCParam336.tokens[chunkFPAJGGOCParam336.index++],
    chunkFPAJGGOCValue768 = chunkFPAJGGOCValue767.content.substring(1);
  if (
    chunkFPAJGGOCParam336.tokens[chunkFPAJGGOCParam336.index]?.type === "text"
  ) {
    if (chunkFPAJGGOCParam337) {
      let chunkFPAJGGOCValue1478 = chunkFPAJGGOCHelper336(
        chunkFPAJGGOCParam336,
      );
      return new chunkFPAJGGOCValue248(
        chunkFPAJGGOCValue768,
        new chunkFPAJGGOCValue249(
          [chunkFPAJGGOCValue1478],
          chunkFPAJGGOCValue1478.range,
        ),
        chunkFPAJGGOCParam337,
        mainS.create(
          chunkFPAJGGOCValue767.range.start,
          chunkFPAJGGOCValue1478.range.end,
        ),
      );
    } else {
      let chunkFPAJGGOCValue1715 = chunkFPAJGGOCHelper333(
        chunkFPAJGGOCParam336,
      );
      return new chunkFPAJGGOCValue248(
        chunkFPAJGGOCValue768,
        chunkFPAJGGOCValue1715,
        chunkFPAJGGOCParam337,
        mainS.create(
          chunkFPAJGGOCValue767.range.start,
          chunkFPAJGGOCValue1715.range.end,
        ),
      );
    }
  } else {
    let chunkFPAJGGOCValue1824 = chunkFPAJGGOCValue767.range;
    return new chunkFPAJGGOCValue248(
      chunkFPAJGGOCValue768,
      new chunkFPAJGGOCValue249([], chunkFPAJGGOCValue1824),
      chunkFPAJGGOCParam337,
      chunkFPAJGGOCValue1824,
    );
  }
}
function chunkFPAJGGOCHelper336(chunkFPAJGGOCParam1569) {
  let chunkFPAJGGOCValue1751 =
    chunkFPAJGGOCParam1569.tokens[chunkFPAJGGOCParam1569.index++];
  return new chunkFPAJGGOCValue250(
    chunkFPAJGGOCValue1751.content,
    chunkFPAJGGOCValue1751.range,
  );
}
function chunkFPAJGGOCHelper337(chunkFPAJGGOCParam1013) {
  if (!chunkFPAJGGOCParam1013)
    return chunkFPAJGGOCHelper337({
      start: "/**",
      end: "*/",
      line: "*",
    });
  let { start, end, line } = chunkFPAJGGOCParam1013;
  return {
    start: chunkFPAJGGOCHelper338(start, true),
    end: chunkFPAJGGOCHelper338(end, false),
    line: chunkFPAJGGOCHelper338(line, true),
  };
}
function chunkFPAJGGOCHelper338(chunkFPAJGGOCParam891, chunkFPAJGGOCParam892) {
  if (
    typeof chunkFPAJGGOCParam891 == "string" ||
    typeof chunkFPAJGGOCParam891 == "object"
  ) {
    let chunkFPAJGGOCValue1623 =
      typeof chunkFPAJGGOCParam891 == "string"
        ? chunkFPAJGGOCHelper66(chunkFPAJGGOCParam891)
        : chunkFPAJGGOCParam891.source;
    return chunkFPAJGGOCParam892
      ? RegExp(`^\\s*${chunkFPAJGGOCValue1623}`)
      : RegExp(`\\s*${chunkFPAJGGOCValue1623}\\s*$`);
  } else return chunkFPAJGGOCParam891;
}
var chunkFPAJGGOCValue247 = class {
    constructor(chunkFPAJGGOCParam1693, chunkFPAJGGOCParam1694) {
      this.elements = chunkFPAJGGOCParam1693;
      this.range = chunkFPAJGGOCParam1694;
    }
    getTag(chunkFPAJGGOCParam1652) {
      return this.getAllTags().find(
        (item) => item.name === chunkFPAJGGOCParam1652,
      );
    }
    getTags(chunkFPAJGGOCParam1630) {
      return this.getAllTags().filter(
        (item) => item.name === chunkFPAJGGOCParam1630,
      );
    }
    getAllTags() {
      return this.elements.filter((item) => "name" in item);
    }
    toString() {
      let chunkFPAJGGOCValue1234 = "";
      for (let chunkFPAJGGOCValue1479 of this.elements)
        if (chunkFPAJGGOCValue1234.length === 0)
          chunkFPAJGGOCValue1234 = chunkFPAJGGOCValue1479.toString();
        else {
          let n = chunkFPAJGGOCValue1479.toString();
          chunkFPAJGGOCValue1234 +=
            chunkFPAJGGOCHelper341(chunkFPAJGGOCValue1234) + n;
        }
      return chunkFPAJGGOCValue1234.trim();
    }
    toMarkdown(chunkFPAJGGOCParam794) {
      let chunkFPAJGGOCValue1205 = "";
      for (let chunkFPAJGGOCValue1450 of this.elements)
        if (chunkFPAJGGOCValue1205.length === 0)
          chunkFPAJGGOCValue1205 = chunkFPAJGGOCValue1450.toMarkdown(
            chunkFPAJGGOCParam794,
          );
        else {
          let chunkFPAJGGOCValue1811 = chunkFPAJGGOCValue1450.toMarkdown(
            chunkFPAJGGOCParam794,
          );
          chunkFPAJGGOCValue1205 +=
            chunkFPAJGGOCHelper341(chunkFPAJGGOCValue1205) +
            chunkFPAJGGOCValue1811;
        }
      return chunkFPAJGGOCValue1205.trim();
    }
  },
  chunkFPAJGGOCValue248 = class {
    constructor(
      chunkFPAJGGOCParam1257,
      chunkFPAJGGOCParam1258,
      chunkFPAJGGOCParam1259,
      chunkFPAJGGOCParam1260,
    ) {
      this.name = chunkFPAJGGOCParam1257;
      this.content = chunkFPAJGGOCParam1258;
      this.inline = chunkFPAJGGOCParam1259;
      this.range = chunkFPAJGGOCParam1260;
    }
    toString() {
      let chunkFPAJGGOCValue1059 = `@${this.name}`,
        t = this.content.toString();
      return (
        this.content.inlines.length === 1
          ? (chunkFPAJGGOCValue1059 = `${chunkFPAJGGOCValue1059} ${t}`)
          : this.content.inlines.length > 1 &&
            (chunkFPAJGGOCValue1059 = `${chunkFPAJGGOCValue1059}\n${t}`),
        this.inline ? `{${chunkFPAJGGOCValue1059}}` : chunkFPAJGGOCValue1059
      );
    }
    toMarkdown(chunkFPAJGGOCParam1528) {
      return (
        chunkFPAJGGOCParam1528?.renderTag?.call(chunkFPAJGGOCParam1528, this) ??
        this.toMarkdownDefault(chunkFPAJGGOCParam1528)
      );
    }
    toMarkdownDefault(chunkFPAJGGOCParam219) {
      let chunkFPAJGGOCValue625 = this.content.toMarkdown(
        chunkFPAJGGOCParam219,
      );
      if (this.inline) {
        let chunkFPAJGGOCValue1721 = chunkFPAJGGOCHelper339(
          this.name,
          chunkFPAJGGOCValue625,
          chunkFPAJGGOCParam219 ?? {},
        );
        if (typeof chunkFPAJGGOCValue1721 == "string")
          return chunkFPAJGGOCValue1721;
      }
      let chunkFPAJGGOCValue626 = "";
      chunkFPAJGGOCParam219?.tag === "italic" ||
      chunkFPAJGGOCParam219?.tag === undefined
        ? (chunkFPAJGGOCValue626 = "*")
        : chunkFPAJGGOCParam219?.tag === "bold"
          ? (chunkFPAJGGOCValue626 = "**")
          : chunkFPAJGGOCParam219?.tag === "bold-italic" &&
            (chunkFPAJGGOCValue626 = "***");
      let chunkFPAJGGOCValue627 = `${chunkFPAJGGOCValue626}@${this.name}${chunkFPAJGGOCValue626}`;
      return (
        this.content.inlines.length === 1
          ? (chunkFPAJGGOCValue627 = `${chunkFPAJGGOCValue627} — ${chunkFPAJGGOCValue625}`)
          : this.content.inlines.length > 1 &&
            (chunkFPAJGGOCValue627 = `${chunkFPAJGGOCValue627}\n${chunkFPAJGGOCValue625}`),
        this.inline ? `{${chunkFPAJGGOCValue627}}` : chunkFPAJGGOCValue627
      );
    }
  };
function chunkFPAJGGOCHelper339(
  chunkFPAJGGOCParam450,
  chunkFPAJGGOCParam451,
  chunkFPAJGGOCParam452,
) {
  if (
    chunkFPAJGGOCParam450 === "linkplain" ||
    chunkFPAJGGOCParam450 === "linkcode" ||
    chunkFPAJGGOCParam450 === "link"
  ) {
    let chunkFPAJGGOCValue1018 = chunkFPAJGGOCParam451.indexOf(" "),
      chunkFPAJGGOCValue1019 = chunkFPAJGGOCParam451;
    if (chunkFPAJGGOCValue1018 > 0) {
      let chunkFPAJGGOCValue1752 = chunkFPAJGGOCHelper328(
        chunkFPAJGGOCParam451,
        chunkFPAJGGOCValue1018,
      );
      chunkFPAJGGOCValue1019 = chunkFPAJGGOCParam451.substring(
        chunkFPAJGGOCValue1752,
      );
      chunkFPAJGGOCParam451 = chunkFPAJGGOCParam451.substring(
        0,
        chunkFPAJGGOCValue1018,
      );
    }
    return (
      (chunkFPAJGGOCParam450 === "linkcode" ||
        (chunkFPAJGGOCParam450 === "link" &&
          chunkFPAJGGOCParam452.link === "code")) &&
        (chunkFPAJGGOCValue1019 = `\`${chunkFPAJGGOCValue1019}\``),
      chunkFPAJGGOCParam452.renderLink?.call(
        chunkFPAJGGOCParam452,
        chunkFPAJGGOCParam451,
        chunkFPAJGGOCValue1019,
      ) ?? chunkFPAJGGOCHelper340(chunkFPAJGGOCParam451, chunkFPAJGGOCValue1019)
    );
  }
}
function chunkFPAJGGOCHelper340(
  chunkFPAJGGOCParam1413,
  chunkFPAJGGOCParam1414,
) {
  try {
    return (
      URI.parse(chunkFPAJGGOCParam1413, true),
      `[${chunkFPAJGGOCParam1414}](${chunkFPAJGGOCParam1413})`
    );
  } catch {
    return chunkFPAJGGOCParam1413;
  }
}
var chunkFPAJGGOCValue249 = class {
    constructor(chunkFPAJGGOCParam1711, chunkFPAJGGOCParam1712) {
      this.inlines = chunkFPAJGGOCParam1711;
      this.range = chunkFPAJGGOCParam1712;
    }
    toString() {
      let chunkFPAJGGOCValue1020 = "";
      for (
        let chunkFPAJGGOCValue1171 = 0;
        chunkFPAJGGOCValue1171 < this.inlines.length;
        chunkFPAJGGOCValue1171++
      ) {
        let chunkFPAJGGOCValue1309 = this.inlines[chunkFPAJGGOCValue1171],
          chunkFPAJGGOCValue1310 = this.inlines[chunkFPAJGGOCValue1171 + 1];
        chunkFPAJGGOCValue1020 += chunkFPAJGGOCValue1309.toString();
        chunkFPAJGGOCValue1310 &&
          chunkFPAJGGOCValue1310.range.start.line >
            chunkFPAJGGOCValue1309.range.start.line &&
          (chunkFPAJGGOCValue1020 += "\n");
      }
      return chunkFPAJGGOCValue1020;
    }
    toMarkdown(chunkFPAJGGOCParam572) {
      let chunkFPAJGGOCValue1004 = "";
      for (
        let chunkFPAJGGOCValue1158 = 0;
        chunkFPAJGGOCValue1158 < this.inlines.length;
        chunkFPAJGGOCValue1158++
      ) {
        let chunkFPAJGGOCValue1288 = this.inlines[chunkFPAJGGOCValue1158],
          chunkFPAJGGOCValue1289 = this.inlines[chunkFPAJGGOCValue1158 + 1];
        chunkFPAJGGOCValue1004 += chunkFPAJGGOCValue1288.toMarkdown(
          chunkFPAJGGOCParam572,
        );
        chunkFPAJGGOCValue1289 &&
          chunkFPAJGGOCValue1289.range.start.line >
            chunkFPAJGGOCValue1288.range.start.line &&
          (chunkFPAJGGOCValue1004 += "\n");
      }
      return chunkFPAJGGOCValue1004;
    }
  },
  chunkFPAJGGOCValue250 = class {
    constructor(chunkFPAJGGOCParam1760, chunkFPAJGGOCParam1761) {
      this.text = chunkFPAJGGOCParam1760;
      this.range = chunkFPAJGGOCParam1761;
    }
    toString() {
      return this.text;
    }
    toMarkdown() {
      return this.text;
    }
  };
function chunkFPAJGGOCHelper341(chunkFPAJGGOCParam1825) {
  return chunkFPAJGGOCParam1825.endsWith("\n") ? "\n" : "\n\n";
}
var chunkFPAJGGOCValue251 = class {
    constructor(chunkFPAJGGOCParam1178) {
      this.indexManager = chunkFPAJGGOCParam1178.shared.workspace.IndexManager;
      this.commentProvider =
        chunkFPAJGGOCParam1178.documentation.CommentProvider;
    }
    getDocumentation(chunkFPAJGGOCParam650) {
      let chunkFPAJGGOCValue1062 = this.commentProvider.getComment(
        chunkFPAJGGOCParam650,
      );
      if (
        chunkFPAJGGOCValue1062 &&
        chunkFPAJGGOCHelper324(chunkFPAJGGOCValue1062)
      )
        return chunkFPAJGGOCHelper323(chunkFPAJGGOCValue1062).toMarkdown({
          renderLink: (chunkFPAJGGOCParam2014, chunkFPAJGGOCParam2015) =>
            this.documentationLinkRenderer(
              chunkFPAJGGOCParam650,
              chunkFPAJGGOCParam2014,
              chunkFPAJGGOCParam2015,
            ),
          renderTag: (chunkFPAJGGOCParam2116) =>
            this.documentationTagRenderer(
              chunkFPAJGGOCParam650,
              chunkFPAJGGOCParam2116,
            ),
        });
    }
    documentationLinkRenderer(
      chunkFPAJGGOCParam443,
      chunkFPAJGGOCParam444,
      chunkFPAJGGOCParam445,
    ) {
      let chunkFPAJGGOCValue857 =
        this.findNameInPrecomputedScopes(
          chunkFPAJGGOCParam443,
          chunkFPAJGGOCParam444,
        ) ??
        this.findNameInGlobalScope(
          chunkFPAJGGOCParam443,
          chunkFPAJGGOCParam444,
        );
      if (chunkFPAJGGOCValue857 && chunkFPAJGGOCValue857.nameSegment) {
        let chunkFPAJGGOCValue1302 =
            chunkFPAJGGOCValue857.nameSegment.range.start.line + 1,
          chunkFPAJGGOCValue1303 =
            chunkFPAJGGOCValue857.nameSegment.range.start.character + 1;
        return `[${chunkFPAJGGOCParam445}](${chunkFPAJGGOCValue857.documentUri
          .with({
            fragment: `L${chunkFPAJGGOCValue1302},${chunkFPAJGGOCValue1303}`,
          })
          .toString()})`;
      } else return;
    }
    documentationTagRenderer(chunkFPAJGGOCParam2159, chunkFPAJGGOCParam2160) {}
    findNameInPrecomputedScopes(chunkFPAJGGOCParam751, chunkFPAJGGOCParam752) {
      let chunkFPAJGGOCValue1152 = chunkFPAJGGOCHelper50(
        chunkFPAJGGOCParam751,
      ).precomputedScopes;
      if (!chunkFPAJGGOCValue1152) return;
      let chunkFPAJGGOCValue1153 = chunkFPAJGGOCParam751;
      do {
        let chunkFPAJGGOCValue1654 = chunkFPAJGGOCValue1152
          .get(chunkFPAJGGOCValue1153)
          .find((item) => item.name === chunkFPAJGGOCParam752);
        if (chunkFPAJGGOCValue1654) return chunkFPAJGGOCValue1654;
        chunkFPAJGGOCValue1153 = chunkFPAJGGOCValue1153.$container;
      } while (chunkFPAJGGOCValue1153);
    }
    findNameInGlobalScope(chunkFPAJGGOCParam1403, chunkFPAJGGOCParam1404) {
      return this.indexManager
        .allElements()
        .find((item) => item.name === chunkFPAJGGOCParam1404);
    }
  },
  chunkFPAJGGOCValue252 = class {
    constructor(chunkFPAJGGOCParam1621) {
      this.grammarConfig = () => chunkFPAJGGOCParam1621.parser.GrammarConfig;
    }
    getComment(chunkFPAJGGOCParam1261) {
      return chunkFPAJGGOCHelper315(chunkFPAJGGOCParam1261)
        ? chunkFPAJGGOCParam1261.$comment
        : chunkFPAJGGOCHelper16(
            chunkFPAJGGOCParam1261.$cstNode,
            this.grammarConfig().multilineCommentRules,
          )?.text;
    }
  },
  chunkFPAJGGOCValue253 = class {
    constructor(chunkFPAJGGOCParam1724) {
      this.syncParser = chunkFPAJGGOCParam1724.parser.LangiumParser;
    }
    parse(chunkFPAJGGOCParam1653, chunkFPAJGGOCParam1654) {
      return Promise.resolve(this.syncParser.parse(chunkFPAJGGOCParam1653));
    }
  },
  $d = class {
    constructor() {
      this.previousTokenSource =
        new chunkFPAJGGOCValue203.CancellationTokenSource();
      this.writeQueue = [];
      this.readQueue = [];
      this.done = true;
    }
    write(chunkFPAJGGOCParam1052) {
      this.cancelWrite();
      let chunkFPAJGGOCValue1402 = chunkFPAJGGOCHelper311();
      return (
        (this.previousTokenSource = chunkFPAJGGOCValue1402),
        this.enqueue(
          this.writeQueue,
          chunkFPAJGGOCParam1052,
          chunkFPAJGGOCValue1402.token,
        )
      );
    }
    read(chunkFPAJGGOCParam1867) {
      return this.enqueue(this.readQueue, chunkFPAJGGOCParam1867);
    }
    enqueue(
      chunkFPAJGGOCParam916,
      chunkFPAJGGOCParam917,
      chunkFPAJGGOCParam918 = chunkFPAJGGOCValue203.CancellationToken.None,
    ) {
      let chunkFPAJGGOCValue1304 = new chunkFPAJGGOCValue207(),
        chunkFPAJGGOCValue1305 = {
          action: chunkFPAJGGOCParam917,
          deferred: chunkFPAJGGOCValue1304,
          cancellationToken: chunkFPAJGGOCParam918,
        };
      return (
        chunkFPAJGGOCParam916.push(chunkFPAJGGOCValue1305),
        this.performNextOperation(),
        chunkFPAJGGOCValue1304.promise
      );
    }
    async performNextOperation() {
      if (!this.done) return;
      let chunkFPAJGGOCValue589 = [];
      if (this.writeQueue.length > 0)
        chunkFPAJGGOCValue589.push(this.writeQueue.shift());
      else if (this.readQueue.length > 0)
        chunkFPAJGGOCValue589.push(
          ...this.readQueue.splice(0, this.readQueue.length),
        );
      else return;
      this.done = false;
      await Promise.all(
        chunkFPAJGGOCValue589.map(
          async ({ action, deferred, cancellationToken }) => {
            try {
              let chunkFPAJGGOCValue1675 = await Promise.resolve().then(() =>
                action(cancellationToken),
              );
              deferred.resolve(chunkFPAJGGOCValue1675);
            } catch (chunkFPAJGGOCValue1783) {
              chunkFPAJGGOCHelper312(chunkFPAJGGOCValue1783)
                ? deferred.resolve(undefined)
                : deferred.reject(chunkFPAJGGOCValue1783);
            }
          },
        ),
      );
      this.done = true;
      this.performNextOperation();
    }
    cancelWrite() {
      this.previousTokenSource.cancel();
    }
  },
  chunkFPAJGGOCValue254 = class {
    constructor(chunkFPAJGGOCParam807) {
      this.grammarElementIdMap = new chunkFPAJGGOCValue218();
      this.tokenTypeIdMap = new chunkFPAJGGOCValue218();
      this.grammar = chunkFPAJGGOCParam807.Grammar;
      this.lexer = chunkFPAJGGOCParam807.parser.Lexer;
      this.linker = chunkFPAJGGOCParam807.references.Linker;
    }
    dehydrate(chunkFPAJGGOCParam396) {
      return {
        lexerErrors: chunkFPAJGGOCParam396.lexerErrors,
        lexerReport: chunkFPAJGGOCParam396.lexerReport
          ? this.dehydrateLexerReport(chunkFPAJGGOCParam396.lexerReport)
          : undefined,
        parserErrors: chunkFPAJGGOCParam396.parserErrors.map((item) =>
          Object.assign(Object.assign({}, item), {
            message: item.message,
          }),
        ),
        value: this.dehydrateAstNode(
          chunkFPAJGGOCParam396.value,
          this.createDehyrationContext(chunkFPAJGGOCParam396.value),
        ),
      };
    }
    dehydrateLexerReport(chunkFPAJGGOCParam2082) {
      return chunkFPAJGGOCParam2082;
    }
    createDehyrationContext(chunkFPAJGGOCParam795) {
      let chunkFPAJGGOCValue1206 = new Map(),
        chunkFPAJGGOCValue1207 = new Map();
      for (let chunkFPAJGGOCValue1873 of chunkFPAJGGOCHelper54(
        chunkFPAJGGOCParam795,
      ))
        chunkFPAJGGOCValue1206.set(chunkFPAJGGOCValue1873, {});
      if (chunkFPAJGGOCParam795.$cstNode)
        for (let chunkFPAJGGOCValue1863 of chunkFPAJGGOCHelper11(
          chunkFPAJGGOCParam795.$cstNode,
        ))
          chunkFPAJGGOCValue1207.set(chunkFPAJGGOCValue1863, {});
      return {
        astNodes: chunkFPAJGGOCValue1206,
        cstNodes: chunkFPAJGGOCValue1207,
      };
    }
    dehydrateAstNode(chunkFPAJGGOCParam117, chunkFPAJGGOCParam118) {
      let chunkFPAJGGOCValue531 = chunkFPAJGGOCParam118.astNodes.get(
        chunkFPAJGGOCParam117,
      );
      chunkFPAJGGOCValue531.$type = chunkFPAJGGOCParam117.$type;
      chunkFPAJGGOCValue531.$containerIndex =
        chunkFPAJGGOCParam117.$containerIndex;
      chunkFPAJGGOCValue531.$containerProperty =
        chunkFPAJGGOCParam117.$containerProperty;
      chunkFPAJGGOCParam117.$cstNode !== undefined &&
        (chunkFPAJGGOCValue531.$cstNode = this.dehydrateCstNode(
          chunkFPAJGGOCParam117.$cstNode,
          chunkFPAJGGOCParam118,
        ));
      for (let [chunkFPAJGGOCValue668, chunkFPAJGGOCValue669] of Object.entries(
        chunkFPAJGGOCParam117,
      ))
        if (!chunkFPAJGGOCValue668.startsWith("$"))
          if (Array.isArray(chunkFPAJGGOCValue669)) {
            let chunkFPAJGGOCValue1087 = [];
            chunkFPAJGGOCValue531[chunkFPAJGGOCValue668] =
              chunkFPAJGGOCValue1087;
            for (let chunkFPAJGGOCValue1311 of chunkFPAJGGOCValue669)
              chunkFPAJGGOCHelper1(chunkFPAJGGOCValue1311)
                ? chunkFPAJGGOCValue1087.push(
                    this.dehydrateAstNode(
                      chunkFPAJGGOCValue1311,
                      chunkFPAJGGOCParam118,
                    ),
                  )
                : chunkFPAJGGOCHelper2(chunkFPAJGGOCValue1311)
                  ? chunkFPAJGGOCValue1087.push(
                      this.dehydrateReference(
                        chunkFPAJGGOCValue1311,
                        chunkFPAJGGOCParam118,
                      ),
                    )
                  : chunkFPAJGGOCValue1087.push(chunkFPAJGGOCValue1311);
          } else
            chunkFPAJGGOCHelper1(chunkFPAJGGOCValue669)
              ? (chunkFPAJGGOCValue531[chunkFPAJGGOCValue668] =
                  this.dehydrateAstNode(
                    chunkFPAJGGOCValue669,
                    chunkFPAJGGOCParam118,
                  ))
              : chunkFPAJGGOCHelper2(chunkFPAJGGOCValue669)
                ? (chunkFPAJGGOCValue531[chunkFPAJGGOCValue668] =
                    this.dehydrateReference(
                      chunkFPAJGGOCValue669,
                      chunkFPAJGGOCParam118,
                    ))
                : chunkFPAJGGOCValue669 !== undefined &&
                  (chunkFPAJGGOCValue531[chunkFPAJGGOCValue668] =
                    chunkFPAJGGOCValue669);
      return chunkFPAJGGOCValue531;
    }
    dehydrateReference(chunkFPAJGGOCParam1014, chunkFPAJGGOCParam1015) {
      let chunkFPAJGGOCValue1370 = {};
      return (
        (chunkFPAJGGOCValue1370.$refText = chunkFPAJGGOCParam1014.$refText),
        chunkFPAJGGOCParam1014.$refNode &&
          (chunkFPAJGGOCValue1370.$refNode =
            chunkFPAJGGOCParam1015.cstNodes.get(
              chunkFPAJGGOCParam1014.$refNode,
            )),
        chunkFPAJGGOCValue1370
      );
    }
    dehydrateCstNode(chunkFPAJGGOCParam169, chunkFPAJGGOCParam170) {
      let chunkFPAJGGOCValue581 = chunkFPAJGGOCParam170.cstNodes.get(
        chunkFPAJGGOCParam169,
      );
      return (
        chunkFPAJGGOCHelper7(chunkFPAJGGOCParam169)
          ? (chunkFPAJGGOCValue581.fullText = chunkFPAJGGOCParam169.fullText)
          : (chunkFPAJGGOCValue581.grammarSource = this.getGrammarElementId(
              chunkFPAJGGOCParam169.grammarSource,
            )),
        (chunkFPAJGGOCValue581.hidden = chunkFPAJGGOCParam169.hidden),
        (chunkFPAJGGOCValue581.astNode = chunkFPAJGGOCParam170.astNodes.get(
          chunkFPAJGGOCParam169.astNode,
        )),
        chunkFPAJGGOCHelper5(chunkFPAJGGOCParam169)
          ? (chunkFPAJGGOCValue581.content = chunkFPAJGGOCParam169.content.map(
              (item) => this.dehydrateCstNode(item, chunkFPAJGGOCParam170),
            ))
          : chunkFPAJGGOCHelper6(chunkFPAJGGOCParam169) &&
            ((chunkFPAJGGOCValue581.tokenType =
              chunkFPAJGGOCParam169.tokenType.name),
            (chunkFPAJGGOCValue581.offset = chunkFPAJGGOCParam169.offset),
            (chunkFPAJGGOCValue581.length = chunkFPAJGGOCParam169.length),
            (chunkFPAJGGOCValue581.startLine =
              chunkFPAJGGOCParam169.range.start.line),
            (chunkFPAJGGOCValue581.startColumn =
              chunkFPAJGGOCParam169.range.start.character),
            (chunkFPAJGGOCValue581.endLine =
              chunkFPAJGGOCParam169.range.end.line),
            (chunkFPAJGGOCValue581.endColumn =
              chunkFPAJGGOCParam169.range.end.character)),
        chunkFPAJGGOCValue581
      );
    }
    hydrate(chunkFPAJGGOCParam498) {
      let chunkFPAJGGOCValue927 = chunkFPAJGGOCParam498.value,
        chunkFPAJGGOCValue928 = this.createHydrationContext(
          chunkFPAJGGOCValue927,
        );
      return (
        "$cstNode" in chunkFPAJGGOCValue927 &&
          this.hydrateCstNode(
            chunkFPAJGGOCValue927.$cstNode,
            chunkFPAJGGOCValue928,
          ),
        {
          lexerErrors: chunkFPAJGGOCParam498.lexerErrors,
          lexerReport: chunkFPAJGGOCParam498.lexerReport,
          parserErrors: chunkFPAJGGOCParam498.parserErrors,
          value: this.hydrateAstNode(
            chunkFPAJGGOCValue927,
            chunkFPAJGGOCValue928,
          ),
        }
      );
    }
    createHydrationContext(chunkFPAJGGOCParam299) {
      let chunkFPAJGGOCValue731 = new Map(),
        chunkFPAJGGOCValue732 = new Map();
      for (let chunkFPAJGGOCValue1874 of chunkFPAJGGOCHelper54(
        chunkFPAJGGOCParam299,
      ))
        chunkFPAJGGOCValue731.set(chunkFPAJGGOCValue1874, {});
      let chunkFPAJGGOCValue733;
      if (chunkFPAJGGOCParam299.$cstNode)
        for (let chunkFPAJGGOCValue1011 of chunkFPAJGGOCHelper11(
          chunkFPAJGGOCParam299.$cstNode,
        )) {
          let chunkFPAJGGOCValue1072;
          "fullText" in chunkFPAJGGOCValue1011
            ? ((chunkFPAJGGOCValue1072 = new chunkFPAJGGOCValue189(
                chunkFPAJGGOCValue1011.fullText,
              )),
              (chunkFPAJGGOCValue733 = chunkFPAJGGOCValue1072))
            : "content" in chunkFPAJGGOCValue1011
              ? (chunkFPAJGGOCValue1072 = new chunkFPAJGGOCValue187())
              : "tokenType" in chunkFPAJGGOCValue1011 &&
                (chunkFPAJGGOCValue1072 = this.hydrateCstLeafNode(
                  chunkFPAJGGOCValue1011,
                ));
          chunkFPAJGGOCValue1072 &&
            (chunkFPAJGGOCValue732.set(
              chunkFPAJGGOCValue1011,
              chunkFPAJGGOCValue1072,
            ),
            (chunkFPAJGGOCValue1072.root = chunkFPAJGGOCValue733));
        }
      return {
        astNodes: chunkFPAJGGOCValue731,
        cstNodes: chunkFPAJGGOCValue732,
      };
    }
    hydrateAstNode(chunkFPAJGGOCParam114, chunkFPAJGGOCParam115) {
      let chunkFPAJGGOCValue528 = chunkFPAJGGOCParam115.astNodes.get(
        chunkFPAJGGOCParam114,
      );
      chunkFPAJGGOCValue528.$type = chunkFPAJGGOCParam114.$type;
      chunkFPAJGGOCValue528.$containerIndex =
        chunkFPAJGGOCParam114.$containerIndex;
      chunkFPAJGGOCValue528.$containerProperty =
        chunkFPAJGGOCParam114.$containerProperty;
      chunkFPAJGGOCParam114.$cstNode &&
        (chunkFPAJGGOCValue528.$cstNode = chunkFPAJGGOCParam115.cstNodes.get(
          chunkFPAJGGOCParam114.$cstNode,
        ));
      for (let [chunkFPAJGGOCValue628, chunkFPAJGGOCValue629] of Object.entries(
        chunkFPAJGGOCParam114,
      ))
        if (!chunkFPAJGGOCValue628.startsWith("$"))
          if (Array.isArray(chunkFPAJGGOCValue629)) {
            let chunkFPAJGGOCValue1038 = [];
            chunkFPAJGGOCValue528[chunkFPAJGGOCValue628] =
              chunkFPAJGGOCValue1038;
            for (let chunkFPAJGGOCValue1235 of chunkFPAJGGOCValue629)
              chunkFPAJGGOCHelper1(chunkFPAJGGOCValue1235)
                ? chunkFPAJGGOCValue1038.push(
                    this.setParent(
                      this.hydrateAstNode(
                        chunkFPAJGGOCValue1235,
                        chunkFPAJGGOCParam115,
                      ),
                      chunkFPAJGGOCValue528,
                    ),
                  )
                : chunkFPAJGGOCHelper2(chunkFPAJGGOCValue1235)
                  ? chunkFPAJGGOCValue1038.push(
                      this.hydrateReference(
                        chunkFPAJGGOCValue1235,
                        chunkFPAJGGOCValue528,
                        chunkFPAJGGOCValue628,
                        chunkFPAJGGOCParam115,
                      ),
                    )
                  : chunkFPAJGGOCValue1038.push(chunkFPAJGGOCValue1235);
          } else
            chunkFPAJGGOCHelper1(chunkFPAJGGOCValue629)
              ? (chunkFPAJGGOCValue528[chunkFPAJGGOCValue628] = this.setParent(
                  this.hydrateAstNode(
                    chunkFPAJGGOCValue629,
                    chunkFPAJGGOCParam115,
                  ),
                  chunkFPAJGGOCValue528,
                ))
              : chunkFPAJGGOCHelper2(chunkFPAJGGOCValue629)
                ? (chunkFPAJGGOCValue528[chunkFPAJGGOCValue628] =
                    this.hydrateReference(
                      chunkFPAJGGOCValue629,
                      chunkFPAJGGOCValue528,
                      chunkFPAJGGOCValue628,
                      chunkFPAJGGOCParam115,
                    ))
                : chunkFPAJGGOCValue629 !== undefined &&
                  (chunkFPAJGGOCValue528[chunkFPAJGGOCValue628] =
                    chunkFPAJGGOCValue629);
      return chunkFPAJGGOCValue528;
    }
    setParent(chunkFPAJGGOCParam1868, chunkFPAJGGOCParam1869) {
      return (
        (chunkFPAJGGOCParam1868.$container = chunkFPAJGGOCParam1869),
        chunkFPAJGGOCParam1868
      );
    }
    hydrateReference(
      chunkFPAJGGOCParam1104,
      chunkFPAJGGOCParam1105,
      chunkFPAJGGOCParam1106,
      chunkFPAJGGOCParam1107,
    ) {
      return this.linker.buildReference(
        chunkFPAJGGOCParam1105,
        chunkFPAJGGOCParam1106,
        chunkFPAJGGOCParam1107.cstNodes.get(chunkFPAJGGOCParam1104.$refNode),
        chunkFPAJGGOCParam1104.$refText,
      );
    }
    hydrateCstNode(
      chunkFPAJGGOCParam422,
      chunkFPAJGGOCParam423,
      chunkFPAJGGOCParam424 = 0,
    ) {
      let chunkFPAJGGOCValue843 = chunkFPAJGGOCParam423.cstNodes.get(
        chunkFPAJGGOCParam422,
      );
      if (
        (typeof chunkFPAJGGOCParam422.grammarSource == "number" &&
          (chunkFPAJGGOCValue843.grammarSource = this.getGrammarElement(
            chunkFPAJGGOCParam422.grammarSource,
          )),
        (chunkFPAJGGOCValue843.astNode = chunkFPAJGGOCParam423.astNodes.get(
          chunkFPAJGGOCParam422.astNode,
        )),
        chunkFPAJGGOCHelper5(chunkFPAJGGOCValue843))
      )
        for (let chunkFPAJGGOCValue1641 of chunkFPAJGGOCParam422.content) {
          let chunkFPAJGGOCValue1744 = this.hydrateCstNode(
            chunkFPAJGGOCValue1641,
            chunkFPAJGGOCParam423,
            chunkFPAJGGOCParam424++,
          );
          chunkFPAJGGOCValue843.content.push(chunkFPAJGGOCValue1744);
        }
      return chunkFPAJGGOCValue843;
    }
    hydrateCstLeafNode(chunkFPAJGGOCParam453) {
      let chunkFPAJGGOCValue863 = this.getTokenType(
          chunkFPAJGGOCParam453.tokenType,
        ),
        chunkFPAJGGOCValue864 = chunkFPAJGGOCParam453.offset,
        chunkFPAJGGOCValue865 = chunkFPAJGGOCParam453.length,
        chunkFPAJGGOCValue866 = chunkFPAJGGOCParam453.startLine,
        chunkFPAJGGOCValue867 = chunkFPAJGGOCParam453.startColumn,
        chunkFPAJGGOCValue868 = chunkFPAJGGOCParam453.endLine,
        chunkFPAJGGOCValue869 = chunkFPAJGGOCParam453.endColumn,
        chunkFPAJGGOCValue870 = chunkFPAJGGOCParam453.hidden;
      return new chunkFPAJGGOCValue186(
        chunkFPAJGGOCValue864,
        chunkFPAJGGOCValue865,
        {
          start: {
            line: chunkFPAJGGOCValue866,
            character: chunkFPAJGGOCValue867,
          },
          end: {
            line: chunkFPAJGGOCValue868,
            character: chunkFPAJGGOCValue869,
          },
        },
        chunkFPAJGGOCValue863,
        chunkFPAJGGOCValue870,
      );
    }
    getTokenType(chunkFPAJGGOCParam1850) {
      return this.lexer.definition[chunkFPAJGGOCParam1850];
    }
    getGrammarElementId(chunkFPAJGGOCParam894) {
      if (chunkFPAJGGOCParam894)
        return (
          this.grammarElementIdMap.size === 0 &&
            this.createGrammarElementIdMap(),
          this.grammarElementIdMap.get(chunkFPAJGGOCParam894)
        );
    }
    getGrammarElement(chunkFPAJGGOCParam1053) {
      return (
        this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(),
        this.grammarElementIdMap.getKey(chunkFPAJGGOCParam1053)
      );
    }
    createGrammarElementIdMap() {
      let chunkFPAJGGOCValue1524 = 0;
      for (let chunkFPAJGGOCValue1753 of chunkFPAJGGOCHelper54(this.grammar))
        chunkFPAJGGOCHelper19(chunkFPAJGGOCValue1753) &&
          this.grammarElementIdMap.set(
            chunkFPAJGGOCValue1753,
            chunkFPAJGGOCValue1524++,
          );
    }
  };
function chunkFPAJGGOCH(chunkFPAJGGOCParam79) {
  return {
    documentation: {
      CommentProvider: (chunkFPAJGGOCParam2271) =>
        new chunkFPAJGGOCValue252(chunkFPAJGGOCParam2271),
      DocumentationProvider: (chunkFPAJGGOCParam2272) =>
        new chunkFPAJGGOCValue251(chunkFPAJGGOCParam2272),
    },
    parser: {
      AsyncParser: (chunkFPAJGGOCParam2273) =>
        new chunkFPAJGGOCValue253(chunkFPAJGGOCParam2273),
      GrammarConfig: (chunkFPAJGGOCParam2325) =>
        chunkFPAJGGOCHelper98(chunkFPAJGGOCParam2325),
      LangiumParser: (chunkFPAJGGOCParam2326) =>
        chunkFPAJGGOCHelper309(chunkFPAJGGOCParam2326),
      CompletionParser: (chunkFPAJGGOCParam2327) =>
        chunkFPAJGGOCHelper308(chunkFPAJGGOCParam2327),
      ValueConverter: () => new chunkFPAJGGOCValue201(),
      TokenBuilder: () => new chunkFPAJGGOCValue200(),
      Lexer: (chunkFPAJGGOCParam2274) =>
        new chunkFPAJGGOCValue242(chunkFPAJGGOCParam2274),
      ParserErrorMessageProvider: () => new chunkFPAJGGOCValue196(),
      LexerErrorMessageProvider: () => new _d(),
    },
    workspace: {
      AstNodeLocator: () => new chunkFPAJGGOCValue234(),
      AstNodeDescriptionProvider: (chunkFPAJGGOCParam2275) =>
        new chunkFPAJGGOCValue232(chunkFPAJGGOCParam2275),
      ReferenceDescriptionProvider: (chunkFPAJGGOCParam2276) =>
        new chunkFPAJGGOCValue233(chunkFPAJGGOCParam2276),
    },
    references: {
      Linker: (chunkFPAJGGOCParam2277) =>
        new chunkFPAJGGOCValue214(chunkFPAJGGOCParam2277),
      NameProvider: () => new chunkFPAJGGOCValue215(),
      ScopeProvider: (chunkFPAJGGOCParam2278) =>
        new chunkFPAJGGOCValue226(chunkFPAJGGOCParam2278),
      ScopeComputation: (chunkFPAJGGOCParam2279) =>
        new chunkFPAJGGOCValue219(chunkFPAJGGOCParam2279),
      References: (chunkFPAJGGOCParam2280) =>
        new chunkFPAJGGOCValue216(chunkFPAJGGOCParam2280),
    },
    serializer: {
      Hydrator: (chunkFPAJGGOCParam2281) =>
        new chunkFPAJGGOCValue254(chunkFPAJGGOCParam2281),
      JsonSerializer: (chunkFPAJGGOCParam2282) =>
        new chunkFPAJGGOCValue227(chunkFPAJGGOCParam2282),
    },
    validation: {
      DocumentValidator: (chunkFPAJGGOCParam2283) =>
        new chunkFPAJGGOCValue230(chunkFPAJGGOCParam2283),
      ValidationRegistry: (chunkFPAJGGOCParam2284) =>
        new chunkFPAJGGOCValue229(chunkFPAJGGOCParam2284),
    },
    shared: () => chunkFPAJGGOCParam79.shared,
  };
}
function chunkFPAJGGOCG(chunkFPAJGGOCParam382) {
  return {
    ServiceRegistry: (chunkFPAJGGOCParam2285) => new $u(chunkFPAJGGOCParam2285),
    workspace: {
      LangiumDocuments: (chunkFPAJGGOCParam2286) =>
        new chunkFPAJGGOCValue212(chunkFPAJGGOCParam2286),
      LangiumDocumentFactory: (chunkFPAJGGOCParam2287) =>
        new chunkFPAJGGOCValue211(chunkFPAJGGOCParam2287),
      DocumentBuilder: (chunkFPAJGGOCParam2288) =>
        new chunkFPAJGGOCValue238(chunkFPAJGGOCParam2288),
      IndexManager: (chunkFPAJGGOCParam2289) =>
        new chunkFPAJGGOCValue239(chunkFPAJGGOCParam2289),
      WorkspaceManager: (chunkFPAJGGOCParam2290) =>
        new chunkFPAJGGOCValue240(chunkFPAJGGOCParam2290),
      FileSystemProvider: (chunkFPAJGGOCParam2176) =>
        chunkFPAJGGOCParam382.fileSystemProvider(chunkFPAJGGOCParam2176),
      WorkspaceLock: () => new $d(),
      ConfigurationProvider: (chunkFPAJGGOCParam2291) =>
        new chunkFPAJGGOCValue236(chunkFPAJGGOCParam2291),
    },
  };
}
var chunkFPAJGGOCValue255;
(function (chunkFPAJGGOCParam1936) {
  chunkFPAJGGOCParam1936.merge = (
    chunkFPAJGGOCParam2192,
    chunkFPAJGGOCParam2193,
  ) =>
    chunkFPAJGGOCHelper344(
      chunkFPAJGGOCHelper344({}, chunkFPAJGGOCParam2192),
      chunkFPAJGGOCParam2193,
    );
})((chunkFPAJGGOCValue255 ||= {}));
function chunkFPAJGGOCM(
  chunkFPAJGGOCParam1456,
  chunkFPAJGGOCParam1457,
  chunkFPAJGGOCParam1458,
  chunkFPAJGGOCParam1459,
  chunkFPAJGGOCParam1460,
  chunkFPAJGGOCParam1461,
  chunkFPAJGGOCParam1462,
  chunkFPAJGGOCParam1463,
  chunkFPAJGGOCParam1464,
) {
  return chunkFPAJGGOCHelper342(
    [
      chunkFPAJGGOCParam1456,
      chunkFPAJGGOCParam1457,
      chunkFPAJGGOCParam1458,
      chunkFPAJGGOCParam1459,
      chunkFPAJGGOCParam1460,
      chunkFPAJGGOCParam1461,
      chunkFPAJGGOCParam1462,
      chunkFPAJGGOCParam1463,
      chunkFPAJGGOCParam1464,
    ].reduce(chunkFPAJGGOCHelper344, {}),
  );
}
var of = Symbol("isProxy");
function chunkFPAJGGOCHelper342(chunkFPAJGGOCParam314, chunkFPAJGGOCParam315) {
  let chunkFPAJGGOCValue753 = new Proxy(
    {},
    {
      deleteProperty: () => false,
      set: () => {
        throw Error("Cannot set property on injected service container");
      },
      get: (chunkFPAJGGOCParam2083, chunkFPAJGGOCParam2084) =>
        chunkFPAJGGOCParam2084 === of
          ? true
          : chunkFPAJGGOCHelper343(
              chunkFPAJGGOCParam2083,
              chunkFPAJGGOCParam2084,
              chunkFPAJGGOCParam314,
              chunkFPAJGGOCParam315 || chunkFPAJGGOCValue753,
            ),
      getOwnPropertyDescriptor: (
        chunkFPAJGGOCParam1503,
        chunkFPAJGGOCParam1504,
      ) => (
        chunkFPAJGGOCHelper343(
          chunkFPAJGGOCParam1503,
          chunkFPAJGGOCParam1504,
          chunkFPAJGGOCParam314,
          chunkFPAJGGOCParam315 || chunkFPAJGGOCValue753,
        ),
        Object.getOwnPropertyDescriptor(
          chunkFPAJGGOCParam1503,
          chunkFPAJGGOCParam1504,
        )
      ),
      has: (chunkFPAJGGOCParam2292, chunkFPAJGGOCParam2293) =>
        chunkFPAJGGOCParam2293 in chunkFPAJGGOCParam314,
      ownKeys: () => [...Object.getOwnPropertyNames(chunkFPAJGGOCParam314)],
    },
  );
  return chunkFPAJGGOCValue753;
}
var chunkFPAJGGOCValue256 = Symbol();
function chunkFPAJGGOCHelper343(
  chunkFPAJGGOCParam183,
  chunkFPAJGGOCParam184,
  chunkFPAJGGOCParam185,
  chunkFPAJGGOCParam186,
) {
  if (chunkFPAJGGOCParam184 in chunkFPAJGGOCParam183) {
    if (chunkFPAJGGOCParam183[chunkFPAJGGOCParam184] instanceof Error)
      throw Error(
        "Construction failure. Please make sure that your dependencies are constructable.",
        {
          cause: chunkFPAJGGOCParam183[chunkFPAJGGOCParam184],
        },
      );
    if (chunkFPAJGGOCParam183[chunkFPAJGGOCParam184] === chunkFPAJGGOCValue256)
      throw Error(
        'Cycle detected. Please make "' +
          String(chunkFPAJGGOCParam184) +
          '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies',
      );
    return chunkFPAJGGOCParam183[chunkFPAJGGOCParam184];
  } else if (chunkFPAJGGOCParam184 in chunkFPAJGGOCParam185) {
    let chunkFPAJGGOCValue1306 = chunkFPAJGGOCParam185[chunkFPAJGGOCParam184];
    chunkFPAJGGOCParam183[chunkFPAJGGOCParam184] = chunkFPAJGGOCValue256;
    try {
      chunkFPAJGGOCParam183[chunkFPAJGGOCParam184] =
        typeof chunkFPAJGGOCValue1306 == "function"
          ? chunkFPAJGGOCValue1306(chunkFPAJGGOCParam186)
          : chunkFPAJGGOCHelper342(
              chunkFPAJGGOCValue1306,
              chunkFPAJGGOCParam186,
            );
    } catch (chunkFPAJGGOCValue1798) {
      throw (
        (chunkFPAJGGOCParam183[chunkFPAJGGOCParam184] =
          chunkFPAJGGOCValue1798 instanceof Error
            ? chunkFPAJGGOCValue1798
            : undefined),
        chunkFPAJGGOCValue1798
      );
    }
    return chunkFPAJGGOCParam183[chunkFPAJGGOCParam184];
  } else return;
}
function chunkFPAJGGOCHelper344(chunkFPAJGGOCParam659, chunkFPAJGGOCParam660) {
  if (chunkFPAJGGOCParam660) {
    for (let [chunkFPAJGGOCValue1219, chunkFPAJGGOCValue1220] of Object.entries(
      chunkFPAJGGOCParam660,
    ))
      if (chunkFPAJGGOCValue1220 !== undefined) {
        let chunkFPAJGGOCValue1438 =
          chunkFPAJGGOCParam659[chunkFPAJGGOCValue1219];
        chunkFPAJGGOCValue1438 !== null &&
        chunkFPAJGGOCValue1220 !== null &&
        typeof chunkFPAJGGOCValue1438 == "object" &&
        typeof chunkFPAJGGOCValue1220 == "object"
          ? (chunkFPAJGGOCParam659[chunkFPAJGGOCValue1219] =
              chunkFPAJGGOCHelper344(
                chunkFPAJGGOCValue1438,
                chunkFPAJGGOCValue1220,
              ))
          : (chunkFPAJGGOCParam659[chunkFPAJGGOCValue1219] =
              chunkFPAJGGOCValue1220);
      }
  }
  return chunkFPAJGGOCParam659;
}
var chunkFPAJGGOCValue257 = class {
    readFile() {
      throw Error("No file system is available.");
    }
    async readDirectory() {
      return [];
    }
  },
  chunkFPAJGGOCP = {
    fileSystemProvider: () => new chunkFPAJGGOCValue257(),
  },
  chunkFPAJGGOCValue258 = {
    Grammar: () => undefined,
    LanguageMetaData: () => ({
      caseInsensitive: false,
      fileExtensions: [".langium"],
      languageId: "langium",
    }),
  },
  chunkFPAJGGOCValue259 = {
    AstReflection: () => new chunkFPAJGGOCValue53(),
  };
function chunkFPAJGGOCHelper345() {
  let chunkFPAJGGOCValue1606 = chunkFPAJGGOCM(
      chunkFPAJGGOCG(chunkFPAJGGOCP),
      chunkFPAJGGOCValue259,
    ),
    chunkFPAJGGOCValue1607 = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: chunkFPAJGGOCValue1606,
      }),
      chunkFPAJGGOCValue258,
    );
  return (
    chunkFPAJGGOCValue1606.ServiceRegistry.register(chunkFPAJGGOCValue1607),
    chunkFPAJGGOCValue1607
  );
}
function chunkFPAJGGOCHelper346(chunkFPAJGGOCParam775) {
  let chunkFPAJGGOCValue1185 = chunkFPAJGGOCHelper345(),
    chunkFPAJGGOCValue1186 =
      chunkFPAJGGOCValue1185.serializer.JsonSerializer.deserialize(
        chunkFPAJGGOCParam775,
      );
  return (
    chunkFPAJGGOCValue1185.shared.workspace.LangiumDocumentFactory.fromModel(
      chunkFPAJGGOCValue1186,
      URI.parse(`memory://${chunkFPAJGGOCValue1186.name ?? "grammar"}.langium`),
    ),
    chunkFPAJGGOCValue1186
  );
}
var _f = Object.defineProperty,
  chunkFPAJGGOCF = (chunkFPAJGGOCParam1947, chunkFPAJGGOCParam1948) =>
    _f(chunkFPAJGGOCParam1947, "name", {
      value: chunkFPAJGGOCParam1948,
      configurable: true,
    });
function chunkFPAJGGOCHelper347(chunkFPAJGGOCParam2016) {
  return chunkFPAJGGOCValue288.isInstance(
    chunkFPAJGGOCParam2016,
    "Architecture",
  );
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper347, "isArchitecture");
function chunkFPAJGGOCHelper348(chunkFPAJGGOCParam2017) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2017, "Branch");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper348, "isBranch");
function chunkFPAJGGOCHelper349(chunkFPAJGGOCParam2018) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2018, "Commit");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper349, "isCommit");
function chunkFPAJGGOCHelper350(chunkFPAJGGOCParam2019) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2019, "GitGraph");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper350, "isGitGraph");
function chunkFPAJGGOCHelper351(chunkFPAJGGOCParam2020) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2020, "Info");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper351, "isInfo");
function chunkFPAJGGOCHelper352(chunkFPAJGGOCParam2021) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2021, "Merge");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper352, "isMerge");
function chunkFPAJGGOCHelper353(chunkFPAJGGOCParam2022) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2022, "Packet");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper353, "isPacket");
function chunkFPAJGGOCHelper354(chunkFPAJGGOCParam2023) {
  return chunkFPAJGGOCValue288.isInstance(
    chunkFPAJGGOCParam2023,
    "PacketBlock",
  );
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper354, "isPacketBlock");
function chunkFPAJGGOCHelper355(chunkFPAJGGOCParam1974) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam1974, "Pie");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper355, "isPie");
function chunkFPAJGGOCHelper356(chunkFPAJGGOCParam2024) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2024, "PieSection");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper356, "isPieSection");
function chunkFPAJGGOCHelper357(chunkFPAJGGOCParam2025) {
  return chunkFPAJGGOCValue288.isInstance(chunkFPAJGGOCParam2025, "Treemap");
}
chunkFPAJGGOCF(chunkFPAJGGOCHelper357, "isTreemap");
var chunkFPAJGGOCValue287 = class extends chunkFPAJGGOCValue1 {
    getAllTypes() {
      return [
        "Architecture",
        "Axis",
        "Branch",
        "Checkout",
        "CherryPicking",
        "ClassDefStatement",
        "Commit",
        "Curve",
        "Direction",
        "Edge",
        "Entry",
        "GitGraph",
        "Group",
        "Info",
        "Item",
        "Junction",
        "Leaf",
        "Merge",
        "Option",
        "Packet",
        "PacketBlock",
        "Pie",
        "PieSection",
        "Radar",
        "Section",
        "Service",
        "Statement",
        "Treemap",
        "TreemapRow",
      ];
    }
    computeIsSubtype(chunkFPAJGGOCParam499, chunkFPAJGGOCParam500) {
      switch (chunkFPAJGGOCParam499) {
        case "Branch":
        case "Checkout":
        case "CherryPicking":
        case "Commit":
        case "Merge":
          return this.isSubtype("Statement", chunkFPAJGGOCParam500);
        case "Direction":
          return this.isSubtype("GitGraph", chunkFPAJGGOCParam500);
        case "Leaf":
        case "Section":
          return this.isSubtype("Item", chunkFPAJGGOCParam500);
        default:
          return false;
      }
    }
    getReferenceType(chunkFPAJGGOCParam808) {
      let chunkFPAJGGOCValue1212 = `${chunkFPAJGGOCParam808.container.$type}:${chunkFPAJGGOCParam808.property}`;
      switch (chunkFPAJGGOCValue1212) {
        case "Entry:axis":
          return "Axis";
        default:
          throw Error(`${chunkFPAJGGOCValue1212} is not a valid reference id.`);
      }
    }
    getTypeMetaData(chunkFPAJGGOCParam5) {
      switch (chunkFPAJGGOCParam5) {
        case "Architecture":
          return {
            name: "Architecture",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "edges",
                defaultValue: [],
              },
              {
                name: "groups",
                defaultValue: [],
              },
              {
                name: "junctions",
                defaultValue: [],
              },
              {
                name: "services",
                defaultValue: [],
              },
              {
                name: "title",
              },
            ],
          };
        case "Axis":
          return {
            name: "Axis",
            properties: [
              {
                name: "label",
              },
              {
                name: "name",
              },
            ],
          };
        case "Branch":
          return {
            name: "Branch",
            properties: [
              {
                name: "name",
              },
              {
                name: "order",
              },
            ],
          };
        case "Checkout":
          return {
            name: "Checkout",
            properties: [
              {
                name: "branch",
              },
            ],
          };
        case "CherryPicking":
          return {
            name: "CherryPicking",
            properties: [
              {
                name: "id",
              },
              {
                name: "parent",
              },
              {
                name: "tags",
                defaultValue: [],
              },
            ],
          };
        case "ClassDefStatement":
          return {
            name: "ClassDefStatement",
            properties: [
              {
                name: "className",
              },
              {
                name: "styleText",
              },
            ],
          };
        case "Commit":
          return {
            name: "Commit",
            properties: [
              {
                name: "id",
              },
              {
                name: "message",
              },
              {
                name: "tags",
                defaultValue: [],
              },
              {
                name: "type",
              },
            ],
          };
        case "Curve":
          return {
            name: "Curve",
            properties: [
              {
                name: "entries",
                defaultValue: [],
              },
              {
                name: "label",
              },
              {
                name: "name",
              },
            ],
          };
        case "Edge":
          return {
            name: "Edge",
            properties: [
              {
                name: "lhsDir",
              },
              {
                name: "lhsGroup",
                defaultValue: false,
              },
              {
                name: "lhsId",
              },
              {
                name: "lhsInto",
                defaultValue: false,
              },
              {
                name: "rhsDir",
              },
              {
                name: "rhsGroup",
                defaultValue: false,
              },
              {
                name: "rhsId",
              },
              {
                name: "rhsInto",
                defaultValue: false,
              },
              {
                name: "title",
              },
            ],
          };
        case "Entry":
          return {
            name: "Entry",
            properties: [
              {
                name: "axis",
              },
              {
                name: "value",
              },
            ],
          };
        case "GitGraph":
          return {
            name: "GitGraph",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "statements",
                defaultValue: [],
              },
              {
                name: "title",
              },
            ],
          };
        case "Group":
          return {
            name: "Group",
            properties: [
              {
                name: "icon",
              },
              {
                name: "id",
              },
              {
                name: "in",
              },
              {
                name: "title",
              },
            ],
          };
        case "Info":
          return {
            name: "Info",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "title",
              },
            ],
          };
        case "Item":
          return {
            name: "Item",
            properties: [
              {
                name: "classSelector",
              },
              {
                name: "name",
              },
            ],
          };
        case "Junction":
          return {
            name: "Junction",
            properties: [
              {
                name: "id",
              },
              {
                name: "in",
              },
            ],
          };
        case "Merge":
          return {
            name: "Merge",
            properties: [
              {
                name: "branch",
              },
              {
                name: "id",
              },
              {
                name: "tags",
                defaultValue: [],
              },
              {
                name: "type",
              },
            ],
          };
        case "Option":
          return {
            name: "Option",
            properties: [
              {
                name: "name",
              },
              {
                name: "value",
                defaultValue: false,
              },
            ],
          };
        case "Packet":
          return {
            name: "Packet",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "blocks",
                defaultValue: [],
              },
              {
                name: "title",
              },
            ],
          };
        case "PacketBlock":
          return {
            name: "PacketBlock",
            properties: [
              {
                name: "bits",
              },
              {
                name: "end",
              },
              {
                name: "label",
              },
              {
                name: "start",
              },
            ],
          };
        case "Pie":
          return {
            name: "Pie",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "sections",
                defaultValue: [],
              },
              {
                name: "showData",
                defaultValue: false,
              },
              {
                name: "title",
              },
            ],
          };
        case "PieSection":
          return {
            name: "PieSection",
            properties: [
              {
                name: "label",
              },
              {
                name: "value",
              },
            ],
          };
        case "Radar":
          return {
            name: "Radar",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "axes",
                defaultValue: [],
              },
              {
                name: "curves",
                defaultValue: [],
              },
              {
                name: "options",
                defaultValue: [],
              },
              {
                name: "title",
              },
            ],
          };
        case "Service":
          return {
            name: "Service",
            properties: [
              {
                name: "icon",
              },
              {
                name: "iconText",
              },
              {
                name: "id",
              },
              {
                name: "in",
              },
              {
                name: "title",
              },
            ],
          };
        case "Treemap":
          return {
            name: "Treemap",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "title",
              },
              {
                name: "TreemapRows",
                defaultValue: [],
              },
            ],
          };
        case "TreemapRow":
          return {
            name: "TreemapRow",
            properties: [
              {
                name: "indent",
              },
              {
                name: "item",
              },
            ],
          };
        case "Direction":
          return {
            name: "Direction",
            properties: [
              {
                name: "accDescr",
              },
              {
                name: "accTitle",
              },
              {
                name: "dir",
              },
              {
                name: "statements",
                defaultValue: [],
              },
              {
                name: "title",
              },
            ],
          };
        case "Leaf":
          return {
            name: "Leaf",
            properties: [
              {
                name: "classSelector",
              },
              {
                name: "name",
              },
              {
                name: "value",
              },
            ],
          };
        case "Section":
          return {
            name: "Section",
            properties: [
              {
                name: "classSelector",
              },
              {
                name: "name",
              },
            ],
          };
        default:
          return {
            name: chunkFPAJGGOCParam5,
            properties: [],
          };
      }
    }
  },
  chunkFPAJGGOCValue288 = new chunkFPAJGGOCValue287(),
  chunkFPAJGGOCValue289,
  chunkFPAJGGOCValue290 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue289 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}',
      )),
    "InfoGrammar",
  ),
  chunkFPAJGGOCValue291,
  chunkFPAJGGOCValue292 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue291 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}',
      )),
    "PacketGrammar",
  ),
  chunkFPAJGGOCValue293,
  chunkFPAJGGOCValue294 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue293 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}',
      )),
    "PieGrammar",
  ),
  chunkFPAJGGOCValue295,
  chunkFPAJGGOCValue296 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue295 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}',
      )),
    "ArchitectureGrammar",
  ),
  chunkFPAJGGOCValue297,
  chunkFPAJGGOCValue298 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue297 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}',
      )),
    "GitGraphGrammar",
  ),
  chunkFPAJGGOCValue299,
  chunkFPAJGGOCValue300 = chunkFPAJGGOCF(
    () =>
      (chunkFPAJGGOCValue299 ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|\'([^\'\\\\\\\\]|\\\\\\\\.)*\'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}',
      )),
    "RadarGrammar",
  ),
  _p,
  chunkFPAJGGOCValue301 = chunkFPAJGGOCF(
    () =>
      (_p ??= chunkFPAJGGOCHelper346(
        '{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|\'[^\']*\'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}',
      )),
    "TreemapGrammar",
  ),
  chunkFPAJGGOCValue302 = {
    languageId: "info",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue303 = {
    languageId: "packet",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue304 = {
    languageId: "pie",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue305 = {
    languageId: "architecture",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue306 = {
    languageId: "gitGraph",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue307 = {
    languageId: "radar",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue308 = {
    languageId: "treemap",
    fileExtensions: [".mmd", ".mermaid"],
    caseInsensitive: false,
    mode: "production",
  },
  chunkFPAJGGOCValue309 = {
    ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
    TITLE: /title([\t ][^\n\r]*|)/,
  },
  chunkFPAJGGOCN = class extends chunkFPAJGGOCValue201 {
    runConverter(
      chunkFPAJGGOCParam845,
      chunkFPAJGGOCParam846,
      chunkFPAJGGOCParam847,
    ) {
      let chunkFPAJGGOCValue1250 = this.runCommonConverter(
        chunkFPAJGGOCParam845,
        chunkFPAJGGOCParam846,
        chunkFPAJGGOCParam847,
      );
      return (
        chunkFPAJGGOCValue1250 === undefined &&
          (chunkFPAJGGOCValue1250 = this.runCustomConverter(
            chunkFPAJGGOCParam845,
            chunkFPAJGGOCParam846,
            chunkFPAJGGOCParam847,
          )),
        chunkFPAJGGOCValue1250 === undefined
          ? super.runConverter(
              chunkFPAJGGOCParam845,
              chunkFPAJGGOCParam846,
              chunkFPAJGGOCParam847,
            )
          : chunkFPAJGGOCValue1250
      );
    }
    runCommonConverter(
      chunkFPAJGGOCParam338,
      chunkFPAJGGOCParam339,
      chunkFPAJGGOCParam340,
    ) {
      let chunkFPAJGGOCValue769 =
        chunkFPAJGGOCValue309[chunkFPAJGGOCParam338.name];
      if (chunkFPAJGGOCValue769 === undefined) return;
      let chunkFPAJGGOCValue770 = chunkFPAJGGOCValue769.exec(
        chunkFPAJGGOCParam339,
      );
      if (chunkFPAJGGOCValue770 !== null) {
        if (chunkFPAJGGOCValue770[1] !== undefined)
          return chunkFPAJGGOCValue770[1].trim().replace(/[\t ]{2,}/gm, " ");
        if (chunkFPAJGGOCValue770[2] !== undefined)
          return chunkFPAJGGOCValue770[2]
            .replace(/^\s*/gm, "")
            .replace(/\s+$/gm, "")
            .replace(/[\t ]{2,}/gm, " ")
            .replace(/[\n\r]{2,}/gm, "\n");
      }
    }
  },
  chunkFPAJGGOCT = class extends chunkFPAJGGOCValue200 {
    constructor(chunkFPAJGGOCParam1740) {
      super();
      this.keywords = new Set(chunkFPAJGGOCParam1740);
    }
    buildKeywordTokens(
      chunkFPAJGGOCParam579,
      chunkFPAJGGOCParam580,
      chunkFPAJGGOCParam581,
    ) {
      let chunkFPAJGGOCValue1013 = super.buildKeywordTokens(
        chunkFPAJGGOCParam579,
        chunkFPAJGGOCParam580,
        chunkFPAJGGOCParam581,
      );
      return (
        chunkFPAJGGOCValue1013.forEach((item) => {
          this.keywords.has(item.name) &&
            item.PATTERN !== undefined &&
            (item.PATTERN = RegExp(
              item.PATTERN.toString() + "(?:(?=%%)|(?!\\S))",
            ));
        }),
        chunkFPAJGGOCValue1013
      );
    }
  };
export const chunkFPAJGGOCU = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue300(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue307,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCS = {
  AstReflection: chunkFPAJGGOCF(
    () => new chunkFPAJGGOCValue287(),
    "AstReflection",
  ),
};
export const chunkFPAJGGOCR = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue296(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue305,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCO = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue290(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue302,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCL = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue294(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue304,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCI = class extends chunkFPAJGGOCN {
  runCustomConverter(
    chunkFPAJGGOCParam2177,
    chunkFPAJGGOCParam2178,
    chunkFPAJGGOCParam2179,
  ) {}
};
export const chunkFPAJGGOCD = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue301(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue308,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCC = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue292(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue303,
    "LanguageMetaData",
  ),
  parser: {},
};
export const chunkFPAJGGOCA = {
  Grammar: chunkFPAJGGOCF(() => chunkFPAJGGOCValue298(), "Grammar"),
  LanguageMetaData: chunkFPAJGGOCF(
    () => chunkFPAJGGOCValue306,
    "LanguageMetaData",
  ),
  parser: {},
};
(class extends chunkFPAJGGOCT {});
export function initMermaidParserRuntimeChunk(): void {}
export function initMermaidParserDefinitionsChunk(): void {}
export {
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCT,
};
