// Restored from ref/webview/assets/zipObject-HR30GI0P.js
// Flat boundary. Vendored zipObject chunk restored from the Codex webview bundle.
import {
  reduceUnderscore as reduceD,
  reduceA,
  reduceB,
  reduceD as reduceG,
  reduceF,
  reduceI,
  reduceM,
  reduceO,
  reduceP,
  reduceR,
  reduceU,
  reduceC,
  reduceV,
  reduceX,
  reduceY,
} from "./lodash-reduce";
import {
  baseForT as _baseForT,
  baseForD,
  baseForF,
  baseForG,
  baseForH,
  baseForI,
  baseForN,
  baseForO,
  baseForT,
  baseForU,
  baseForW,
} from "./lodash-base-for";
import { isEmptyI, isEmptyN } from "./lodash-is-empty";
import { flattenN, flattenI, flattenO, flattenR } from "./lodash-flatten";
import {
  mergeC,
  mergeD,
  mergeH,
  mergeL,
  mergeM,
  mergeP,
  mergeU,
} from "./lodash-merge";
import { unionR } from "./lodash-union";
var zipObjectValue1 = /\s/;
function zipObjectHelper1(zipObjectParam49) {
  for (
    var zipObjectValue94 = zipObjectParam49.length;
    zipObjectValue94-- &&
    zipObjectValue1.test(zipObjectParam49.charAt(zipObjectValue94));

  );
  return zipObjectValue94;
}
var zipObjectValue2 = /^\s+/;
function zipObjectHelper2(zipObjectParam57) {
  return (
    zipObjectParam57 &&
    zipObjectParam57
      .slice(0, zipObjectHelper1(zipObjectParam57) + 1)
      .replace(zipObjectValue2, "")
  );
}
var zipObjectValue3 = NaN,
  zipObjectValue4 = /^[-+]0x[0-9a-f]+$/i,
  zipObjectValue5 = /^0b[01]+$/i,
  zipObjectValue6 = /^0o[0-7]+$/i,
  zipObjectValue7 = parseInt;
function zipObjectHelper3(zipObjectParam8) {
  if (typeof zipObjectParam8 == "number") return zipObjectParam8;
  if (reduceY(zipObjectParam8)) return zipObjectValue3;
  if (baseForW(zipObjectParam8)) {
    var zipObjectValue47 =
      typeof zipObjectParam8.valueOf == "function"
        ? zipObjectParam8.valueOf()
        : zipObjectParam8;
    zipObjectParam8 = baseForW(zipObjectValue47)
      ? zipObjectValue47 + ""
      : zipObjectValue47;
  }
  if (typeof zipObjectParam8 != "string")
    return zipObjectParam8 === 0 ? zipObjectParam8 : +zipObjectParam8;
  zipObjectParam8 = zipObjectHelper2(zipObjectParam8);
  var zipObjectValue48 = zipObjectValue5.test(zipObjectParam8);
  return zipObjectValue48 || zipObjectValue6.test(zipObjectParam8)
    ? zipObjectValue7(zipObjectParam8.slice(2), zipObjectValue48 ? 2 : 8)
    : zipObjectValue4.test(zipObjectParam8)
      ? zipObjectValue3
      : +zipObjectParam8;
}
var zipObjectValue8 = 1 / 0;
function zipObjectHelper4(zipObjectParam45) {
  return zipObjectParam45
    ? ((zipObjectParam45 = zipObjectHelper3(zipObjectParam45)),
      zipObjectParam45 === zipObjectValue8 ||
      zipObjectParam45 === -zipObjectValue8
        ? (zipObjectParam45 < 0 ? -1 : 1) * 17976931348623157e292
        : zipObjectParam45 === zipObjectParam45
          ? zipObjectParam45
          : 0)
    : zipObjectParam45 === 0
      ? zipObjectParam45
      : 0;
}
function zipObjectHelper5(zipObjectParam58) {
  var zipObjectValue97 = zipObjectHelper4(zipObjectParam58),
    zipObjectValue98 = zipObjectValue97 % 1;
  return zipObjectValue97 === zipObjectValue97
    ? zipObjectValue98
      ? zipObjectValue97 - zipObjectValue98
      : zipObjectValue97
    : 0;
}
function zipObjectHelper6(zipObjectParam60) {
  return mergeH(
    mergeD(zipObjectParam60, undefined, flattenR),
    zipObjectParam60 + "",
  );
}
var zipObjectValue10 = RegExp(
  "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
);
function zipObjectHelper7(zipObjectParam76) {
  return zipObjectValue10.test(zipObjectParam76);
}
export function zipObjectUnderscore(zipObjectParam77) {
  return unionR(zipObjectParam77, 5);
}
var zipObjectValue13 = Object.prototype,
  zipObjectValue14 = zipObjectValue13.hasOwnProperty;
export const zipObjectH = mergeU(function (zipObjectParam11, zipObjectParam12) {
  zipObjectParam11 = Object(zipObjectParam11);
  var zipObjectValue57 = -1,
    zipObjectValue58 = zipObjectParam12.length,
    zipObjectValue59 = zipObjectValue58 > 2 ? zipObjectParam12[2] : undefined;
  for (
    zipObjectValue59 &&
    mergeL(zipObjectParam12[0], zipObjectParam12[1], zipObjectValue59) &&
    (zipObjectValue58 = 1);
    ++zipObjectValue57 < zipObjectValue58;

  )
    for (
      var zipObjectValue60 = zipObjectParam12[zipObjectValue57],
        zipObjectValue61 = mergeC(zipObjectValue60),
        zipObjectValue62 = -1,
        zipObjectValue63 = zipObjectValue61.length;
      ++zipObjectValue62 < zipObjectValue63;

    ) {
      var zipObjectValue64 = zipObjectValue61[zipObjectValue62],
        zipObjectValue65 = zipObjectParam11[zipObjectValue64];
      (zipObjectValue65 === undefined ||
        (baseForO(zipObjectValue65, zipObjectValue13[zipObjectValue64]) &&
          !zipObjectValue14.call(zipObjectParam11, zipObjectValue64))) &&
        (zipObjectParam11[zipObjectValue64] =
          zipObjectValue60[zipObjectValue64]);
    }
  return zipObjectParam11;
});
export const zipObjectG = function () {
  return baseForD.Date.now();
};
export function zipObjectM(zipObjectParam51) {
  var zipObjectValue95 = zipObjectParam51 == null ? 0 : zipObjectParam51.length;
  return zipObjectValue95 ? zipObjectParam51[zipObjectValue95 - 1] : undefined;
}
function zipObjectHelper8(zipObjectParam16) {
  return function (zipObjectParam18, zipObjectParam19, zipObjectParam20) {
    var zipObjectValue72 = Object(zipObjectParam18);
    if (!baseForI(zipObjectParam18)) {
      var zipObjectValue73 = reduceD(zipObjectParam19, 3);
      zipObjectParam18 = reduceX(zipObjectParam18);
      zipObjectParam19 = function (zipObjectParam81) {
        return zipObjectValue73(
          zipObjectValue72[zipObjectParam81],
          zipObjectParam81,
          zipObjectValue72,
        );
      };
    }
    var zipObjectValue74 = zipObjectParam16(
      zipObjectParam18,
      zipObjectParam19,
      zipObjectParam20,
    );
    return zipObjectValue74 > -1
      ? zipObjectValue72[
          zipObjectValue73
            ? zipObjectParam18[zipObjectValue74]
            : zipObjectValue74
        ]
      : undefined;
  };
}
var zipObjectValue15 = Math.max;
function zipObjectHelper9(
  zipObjectParam27,
  zipObjectParam28,
  zipObjectParam29,
) {
  var zipObjectValue77 = zipObjectParam27 == null ? 0 : zipObjectParam27.length;
  if (!zipObjectValue77) return -1;
  var zipObjectValue78 =
    zipObjectParam29 == null ? 0 : zipObjectHelper5(zipObjectParam29);
  return (
    zipObjectValue78 < 0 &&
      (zipObjectValue78 = zipObjectValue15(
        zipObjectValue77 + zipObjectValue78,
        0,
      )),
    reduceM(zipObjectParam27, reduceD(zipObjectParam28, 3), zipObjectValue78)
  );
}
export const zipObjectP = zipObjectHelper8(zipObjectHelper9);
export function zipObjectF(zipObjectParam61, zipObjectParam62) {
  return zipObjectParam61 == null
    ? zipObjectParam61
    : _baseForT(zipObjectParam61, reduceP(zipObjectParam62), mergeC);
}
export function zipObjectD(zipObjectParam74, zipObjectParam75) {
  return (
    zipObjectParam74 && reduceU(zipObjectParam74, reduceP(zipObjectParam75))
  );
}
function zipObjectHelper10(zipObjectParam84, zipObjectParam85) {
  return zipObjectParam84 > zipObjectParam85;
}
var zipObjectValue16 = Object.prototype.hasOwnProperty;
function zipObjectHelper11(zipObjectParam63, zipObjectParam64) {
  return (
    zipObjectParam63 != null &&
    zipObjectValue16.call(zipObjectParam63, zipObjectParam64)
  );
}
export function zipObjectU(zipObjectParam66, zipObjectParam67) {
  return (
    zipObjectParam66 != null &&
    reduceI(zipObjectParam66, zipObjectParam67, zipObjectHelper11)
  );
}
function zipObjectHelper12(zipObjectParam50) {
  return (
    typeof zipObjectParam50 == "string" ||
    (!baseForG(zipObjectParam50) &&
      baseForH(zipObjectParam50) &&
      baseForT(zipObjectParam50) == "[object String]")
  );
}
export function zipObjectL(zipObjectParam40, zipObjectParam41) {
  var zipObjectValue92 = {};
  return (
    (zipObjectParam41 = reduceD(zipObjectParam41, 3)),
    reduceU(
      zipObjectParam40,
      function (zipObjectParam78, zipObjectParam79, zipObjectParam80) {
        mergeM(
          zipObjectValue92,
          zipObjectParam79,
          zipObjectParam41(
            zipObjectParam78,
            zipObjectParam79,
            zipObjectParam80,
          ),
        );
      },
    ),
    zipObjectValue92
  );
}
export function zipObjectC(zipObjectParam59) {
  return zipObjectParam59 && zipObjectParam59.length
    ? flattenN(zipObjectParam59, baseForN, zipObjectHelper10)
    : undefined;
}
export function zipObjectS(zipObjectParam55, zipObjectParam56) {
  return zipObjectParam55 && zipObjectParam55.length
    ? flattenN(zipObjectParam55, reduceD(zipObjectParam56, 2), flattenO)
    : undefined;
}
function zipObjectHelper13(
  zipObjectParam1,
  zipObjectParam2,
  zipObjectParam3,
  zipObjectParam4,
) {
  if (!baseForW(zipObjectParam1)) return zipObjectParam1;
  zipObjectParam2 = reduceC(zipObjectParam2, zipObjectParam1);
  for (
    var zipObjectValue39 = -1,
      zipObjectValue40 = zipObjectParam2.length,
      zipObjectValue41 = zipObjectValue40 - 1,
      zipObjectValue42 = zipObjectParam1;
    zipObjectValue42 != null && ++zipObjectValue39 < zipObjectValue40;

  ) {
    var zipObjectValue43 = reduceG(zipObjectParam2[zipObjectValue39]),
      zipObjectValue44 = zipObjectParam3;
    if (
      zipObjectValue43 === "__proto__" ||
      zipObjectValue43 === "constructor" ||
      zipObjectValue43 === "prototype"
    )
      return zipObjectParam1;
    if (zipObjectValue39 != zipObjectValue41) {
      var zipObjectValue45 = zipObjectValue42[zipObjectValue43];
      zipObjectValue44 = zipObjectParam4
        ? zipObjectParam4(zipObjectValue45, zipObjectValue43, zipObjectValue42)
        : undefined;
      zipObjectValue44 === undefined &&
        (zipObjectValue44 = baseForW(zipObjectValue45)
          ? zipObjectValue45
          : baseForF(zipObjectParam2[zipObjectValue39 + 1])
            ? []
            : {});
    }
    mergeP(zipObjectValue42, zipObjectValue43, zipObjectValue44);
    zipObjectValue42 = zipObjectValue42[zipObjectValue43];
  }
  return zipObjectParam1;
}
function zipObjectHelper14(
  zipObjectParam33,
  zipObjectParam34,
  zipObjectParam35,
) {
  for (
    var zipObjectValue84 = -1,
      zipObjectValue85 = zipObjectParam34.length,
      zipObjectValue86 = {};
    ++zipObjectValue84 < zipObjectValue85;

  ) {
    var zipObjectValue87 = zipObjectParam34[zipObjectValue84],
      zipObjectValue88 = reduceF(zipObjectParam33, zipObjectValue87);
    zipObjectParam35(zipObjectValue88, zipObjectValue87) &&
      zipObjectHelper13(
        zipObjectValue86,
        reduceC(zipObjectValue87, zipObjectParam33),
        zipObjectValue88,
      );
  }
  return zipObjectValue86;
}
function zipObjectHelper15(zipObjectParam46, zipObjectParam47) {
  var zipObjectValue93 = zipObjectParam46.length;
  for (zipObjectParam46.sort(zipObjectParam47); zipObjectValue93--; )
    zipObjectParam46[zipObjectValue93] =
      zipObjectParam46[zipObjectValue93].value;
  return zipObjectParam46;
}
function zipObjectHelper16(zipObjectParam9, zipObjectParam10) {
  if (zipObjectParam9 !== zipObjectParam10) {
    var zipObjectValue49 = zipObjectParam9 !== undefined,
      zipObjectValue50 = zipObjectParam9 === null,
      zipObjectValue51 = zipObjectParam9 === zipObjectParam9,
      zipObjectValue52 = reduceY(zipObjectParam9),
      zipObjectValue53 = zipObjectParam10 !== undefined,
      zipObjectValue54 = zipObjectParam10 === null,
      zipObjectValue55 = zipObjectParam10 === zipObjectParam10,
      zipObjectValue56 = reduceY(zipObjectParam10);
    if (
      (!zipObjectValue54 &&
        !zipObjectValue56 &&
        !zipObjectValue52 &&
        zipObjectParam9 > zipObjectParam10) ||
      (zipObjectValue52 &&
        zipObjectValue53 &&
        zipObjectValue55 &&
        !zipObjectValue54 &&
        !zipObjectValue56) ||
      (zipObjectValue50 && zipObjectValue53 && zipObjectValue55) ||
      (!zipObjectValue49 && zipObjectValue55) ||
      !zipObjectValue51
    )
      return 1;
    if (
      (!zipObjectValue50 &&
        !zipObjectValue52 &&
        !zipObjectValue56 &&
        zipObjectParam9 < zipObjectParam10) ||
      (zipObjectValue56 &&
        zipObjectValue49 &&
        zipObjectValue51 &&
        !zipObjectValue50 &&
        !zipObjectValue52) ||
      (zipObjectValue54 && zipObjectValue49 && zipObjectValue51) ||
      (!zipObjectValue53 && zipObjectValue51) ||
      !zipObjectValue55
    )
      return -1;
  }
  return 0;
}
function zipObjectHelper17(
  zipObjectParam13,
  zipObjectParam14,
  zipObjectParam15,
) {
  for (
    var zipObjectValue66 = -1,
      zipObjectValue67 = zipObjectParam13.criteria,
      zipObjectValue68 = zipObjectParam14.criteria,
      zipObjectValue69 = zipObjectValue67.length,
      zipObjectValue70 = zipObjectParam15.length;
    ++zipObjectValue66 < zipObjectValue69;

  ) {
    var zipObjectValue71 = zipObjectHelper16(
      zipObjectValue67[zipObjectValue66],
      zipObjectValue68[zipObjectValue66],
    );
    if (zipObjectValue71)
      return zipObjectValue66 >= zipObjectValue70
        ? zipObjectValue71
        : zipObjectValue71 *
            (zipObjectParam15[zipObjectValue66] == "desc" ? -1 : 1);
  }
  return zipObjectParam13.index - zipObjectParam14.index;
}
function zipObjectHelper18(zipObjectParam5, zipObjectParam6, zipObjectParam7) {
  zipObjectParam6 = zipObjectParam6.length
    ? reduceA(zipObjectParam6, function (zipObjectParam48) {
        return baseForG(zipObjectParam48)
          ? function (zipObjectParam65) {
              return reduceF(
                zipObjectParam65,
                zipObjectParam48.length === 1
                  ? zipObjectParam48[0]
                  : zipObjectParam48,
              );
            }
          : zipObjectParam48;
      })
    : [baseForN];
  var zipObjectValue46 = -1;
  return (
    (zipObjectParam6 = reduceA(zipObjectParam6, baseForU(reduceD))),
    zipObjectHelper15(
      flattenI(
        zipObjectParam5,
        function (zipObjectParam42, zipObjectParam43, zipObjectParam44) {
          return {
            criteria: reduceA(zipObjectParam6, function (zipObjectParam88) {
              return zipObjectParam88(zipObjectParam42);
            }),
            index: ++zipObjectValue46,
            value: zipObjectParam42,
          };
        },
      ),
      function (zipObjectParam82, zipObjectParam83) {
        return zipObjectHelper17(
          zipObjectParam82,
          zipObjectParam83,
          zipObjectParam7,
        );
      },
    )
  );
}
var zipObjectValue18 = reduceB("length"),
  zipObjectValue32 =
    "(?:\\u200d(?:" +
    [
      "[^\\ud800-\\udfff]",
      "(?:\\ud83c[\\udde6-\\uddff]){2}",
      "[\\ud800-\\udbff][\\udc00-\\udfff]",
    ].join("|") +
    ")" +
    "[\\ufe0e\\ufe0f]?" +
    "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
    ")*",
  zipObjectValue33 =
    "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
    zipObjectValue32,
  zipObjectValue34 =
    "(?:" +
    [
      "[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?",
      "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      "(?:\\ud83c[\\udde6-\\uddff]){2}",
      "[\\ud800-\\udbff][\\udc00-\\udfff]",
      "[\\ud800-\\udfff]",
    ].join("|") +
    ")",
  zipObjectValue35 = RegExp(
    "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" +
      zipObjectValue34 +
      zipObjectValue33,
    "g",
  );
function zipObjectHelper19(zipObjectParam52) {
  for (
    var zipObjectValue96 = (zipObjectValue35.lastIndex = 0);
    zipObjectValue35.test(zipObjectParam52);

  )
    ++zipObjectValue96;
  return zipObjectValue96;
}
function zipObjectHelper20(zipObjectParam70) {
  return zipObjectHelper7(zipObjectParam70)
    ? zipObjectHelper19(zipObjectParam70)
    : zipObjectValue18(zipObjectParam70);
}
function $e(zipObjectParam53, zipObjectParam54) {
  return zipObjectHelper14(
    zipObjectParam53,
    zipObjectParam54,
    function (zipObjectParam86, zipObjectParam87) {
      return reduceO(zipObjectParam53, zipObjectParam87);
    },
  );
}
var zipObjectValue36 = Math.ceil,
  $ = Math.max;
export const zipObjectO = zipObjectHelper6(
  function (zipObjectParam71, zipObjectParam72) {
    return zipObjectParam71 == null
      ? {}
      : $e(zipObjectParam71, zipObjectParam72);
  },
);
function zipObjectHelper21(
  zipObjectParam36,
  zipObjectParam37,
  zipObjectParam38,
  zipObjectParam39,
) {
  for (
    var zipObjectValue89 = -1,
      zipObjectValue90 = $(
        zipObjectValue36(
          (zipObjectParam37 - zipObjectParam36) / (zipObjectParam38 || 1),
        ),
        0,
      ),
      zipObjectValue91 = Array(zipObjectValue90);
    zipObjectValue90--;

  ) {
    zipObjectValue91[zipObjectParam39 ? zipObjectValue90 : ++zipObjectValue89] =
      zipObjectParam36;
    zipObjectParam36 += zipObjectParam38;
  }
  return zipObjectValue91;
}
function zipObjectHelper22(zipObjectParam17) {
  return function (zipObjectParam21, zipObjectParam22, zipObjectParam23) {
    return (
      zipObjectParam23 &&
        typeof zipObjectParam23 != "number" &&
        mergeL(zipObjectParam21, zipObjectParam22, zipObjectParam23) &&
        (zipObjectParam22 = zipObjectParam23 = undefined),
      (zipObjectParam21 = zipObjectHelper4(zipObjectParam21)),
      zipObjectParam22 === undefined
        ? ((zipObjectParam22 = zipObjectParam21), (zipObjectParam21 = 0))
        : (zipObjectParam22 = zipObjectHelper4(zipObjectParam22)),
      (zipObjectParam23 =
        zipObjectParam23 === undefined
          ? zipObjectParam21 < zipObjectParam22
            ? 1
            : -1
          : zipObjectHelper4(zipObjectParam23)),
      zipObjectHelper21(
        zipObjectParam21,
        zipObjectParam22,
        zipObjectParam23,
        zipObjectParam17,
      )
    );
  };
}
export const zipObjectA = zipObjectHelper22();
export function zipObjectI(zipObjectParam26) {
  if (zipObjectParam26 == null) return 0;
  if (baseForI(zipObjectParam26))
    return zipObjectHelper12(zipObjectParam26)
      ? zipObjectHelper20(zipObjectParam26)
      : zipObjectParam26.length;
  var zipObjectValue76 = isEmptyN(zipObjectParam26);
  return zipObjectValue76 == "[object Map]" ||
    zipObjectValue76 == "[object Set]"
    ? zipObjectParam26.size
    : isEmptyI(zipObjectParam26).length;
}
var zipObjectValue38 = 0;
export const zipObjectR = mergeU(function (zipObjectParam24, zipObjectParam25) {
  if (zipObjectParam24 == null) return [];
  var zipObjectValue75 = zipObjectParam25.length;
  return (
    zipObjectValue75 > 1 &&
    mergeL(zipObjectParam24, zipObjectParam25[0], zipObjectParam25[1])
      ? (zipObjectParam25 = [])
      : zipObjectValue75 > 2 &&
        mergeL(zipObjectParam25[0], zipObjectParam25[1], zipObjectParam25[2]) &&
        (zipObjectParam25 = [zipObjectParam25[0]]),
    zipObjectHelper18(zipObjectParam24, reduceR(zipObjectParam25, 1), [])
  );
});
export function zipObjectN(zipObjectParam73) {
  var zipObjectValue99 = ++zipObjectValue38;
  return reduceV(zipObjectParam73) + zipObjectValue99;
}
function zipObjectHelper23(
  zipObjectParam30,
  zipObjectParam31,
  zipObjectParam32,
) {
  for (
    var zipObjectValue79 = -1,
      zipObjectValue80 = zipObjectParam30.length,
      zipObjectValue81 = zipObjectParam31.length,
      zipObjectValue82 = {};
    ++zipObjectValue79 < zipObjectValue80;

  ) {
    var zipObjectValue83 =
      zipObjectValue79 < zipObjectValue81
        ? zipObjectParam31[zipObjectValue79]
        : undefined;
    zipObjectParam32(
      zipObjectValue82,
      zipObjectParam30[zipObjectValue79],
      zipObjectValue83,
    );
  }
  return zipObjectValue82;
}
export function zipObjectT(zipObjectParam68, zipObjectParam69) {
  return zipObjectHelper23(
    zipObjectParam68 || [],
    zipObjectParam69 || [],
    mergeP,
  );
}
