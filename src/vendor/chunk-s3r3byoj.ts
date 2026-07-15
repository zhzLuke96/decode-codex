// Restored from ref/webview/assets/chunk-S3R3BYOJ-BHdYahbs.js
// Flat boundary. Vendored chunkS3R3BYOJ chunk restored from the Codex webview bundle.
import {
  isArrayLikeObjectB as _isArrayLikeObjectB,
  isArrayLikeObjectR as _isArrayLikeObjectR,
  isArrayLikeObjectS as _isArrayLikeObjectS,
  isArrayLikeObjectU as _isArrayLikeObjectU,
  isArrayLikeObjectA,
  isArrayLikeObjectB,
  _isArrayLikeObjectC,
  isArrayLikeObjectF,
  _isArrayLikeObjectG,
  isArrayLikeObjectH,
  _isArrayLikeObjectI,
  isArrayLikeObjectJ,
  _isArrayLikeObjectL,
  _isArrayLikeObjectN,
  isArrayLikeObjectO,
  _isArrayLikeObjectP,
  isArrayLikeObjectR,
  isArrayLikeObjectS,
  _isArrayLikeObjectT,
  isArrayLikeObjectU,
  isArrayLikeObjectV,
  isArrayLikeObjectY,
} from "./lodash-array-like-object";
import { Src } from "./roughjs-geometry";
import { monotoneN, monotoneR, monotoneT } from "./d3-curve-monotone";
import {
  stepA,
  stepC,
  stepD,
  stepF,
  stepG,
  stepH,
  stepI,
  stepL,
  stepM,
  stepN,
  stepO,
  stepP,
  stepR,
  stepS,
  stepT,
  stepU,
  stepUnderscore,
} from "./d3-shape-curves";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  chunkABZYJK2DS as _chunkABZYJK2DF,
  chunkABZYJK2DS as chunkABZYJK2DF,
  chunkABZYJK2DC,
  chunkABZYJK2DL,
  chunkABZYJK2DM,
} from "./katex-auto-render";
import { dist } from "./entities-escape";
var chunkS3R3BYOJValue2 = Function.prototype,
  chunkS3R3BYOJValue3 = Object.prototype,
  chunkS3R3BYOJValue4 = chunkS3R3BYOJValue2.toString,
  chunkS3R3BYOJValue5 = chunkS3R3BYOJValue3.hasOwnProperty,
  chunkS3R3BYOJValue6 = chunkS3R3BYOJValue4.call(Object);
function chunkS3R3BYOJHelper1(chunkS3R3BYOJParam45) {
  if (
    !isArrayLikeObjectH(chunkS3R3BYOJParam45) ||
    isArrayLikeObjectU(chunkS3R3BYOJParam45) != "[object Object]"
  )
    return false;
  var chunkS3R3BYOJValue89 = _isArrayLikeObjectL(chunkS3R3BYOJParam45);
  if (chunkS3R3BYOJValue89 === null) return true;
  var chunkS3R3BYOJValue90 =
    chunkS3R3BYOJValue5.call(chunkS3R3BYOJValue89, "constructor") &&
    chunkS3R3BYOJValue89.constructor;
  return (
    typeof chunkS3R3BYOJValue90 == "function" &&
    chunkS3R3BYOJValue90 instanceof chunkS3R3BYOJValue90 &&
    chunkS3R3BYOJValue4.call(chunkS3R3BYOJValue90) == chunkS3R3BYOJValue6
  );
}
function chunkS3R3BYOJHelper2(
  chunkS3R3BYOJParam63,
  chunkS3R3BYOJParam64,
  chunkS3R3BYOJParam65,
) {
  ((chunkS3R3BYOJParam65 !== undefined &&
    !isArrayLikeObjectA(
      chunkS3R3BYOJParam63[chunkS3R3BYOJParam64],
      chunkS3R3BYOJParam65,
    )) ||
    (chunkS3R3BYOJParam65 === undefined &&
      !(chunkS3R3BYOJParam64 in chunkS3R3BYOJParam63))) &&
    isArrayLikeObjectJ(
      chunkS3R3BYOJParam63,
      chunkS3R3BYOJParam64,
      chunkS3R3BYOJParam65,
    );
}
function chunkS3R3BYOJHelper3(chunkS3R3BYOJParam59, chunkS3R3BYOJParam60) {
  if (
    !(
      chunkS3R3BYOJParam60 === "constructor" &&
      typeof chunkS3R3BYOJParam59[chunkS3R3BYOJParam60] == "function"
    ) &&
    chunkS3R3BYOJParam60 != "__proto__"
  )
    return chunkS3R3BYOJParam59[chunkS3R3BYOJParam60];
}
function chunkS3R3BYOJHelper4(chunkS3R3BYOJParam98) {
  return isArrayLikeObjectO(
    chunkS3R3BYOJParam98,
    _isArrayLikeObjectP(chunkS3R3BYOJParam98),
  );
}
function chunkS3R3BYOJHelper5(
  chunkS3R3BYOJParam11,
  chunkS3R3BYOJParam12,
  chunkS3R3BYOJParam13,
  chunkS3R3BYOJParam14,
  chunkS3R3BYOJParam15,
  chunkS3R3BYOJParam16,
  chunkS3R3BYOJParam17,
) {
  var chunkS3R3BYOJValue43 = chunkS3R3BYOJHelper3(
      chunkS3R3BYOJParam11,
      chunkS3R3BYOJParam13,
    ),
    chunkS3R3BYOJValue44 = chunkS3R3BYOJHelper3(
      chunkS3R3BYOJParam12,
      chunkS3R3BYOJParam13,
    ),
    chunkS3R3BYOJValue45 = chunkS3R3BYOJParam17.get(chunkS3R3BYOJValue44);
  if (chunkS3R3BYOJValue45) {
    chunkS3R3BYOJHelper2(
      chunkS3R3BYOJParam11,
      chunkS3R3BYOJParam13,
      chunkS3R3BYOJValue45,
    );
    return;
  }
  var chunkS3R3BYOJValue46 = chunkS3R3BYOJParam16
      ? chunkS3R3BYOJParam16(
          chunkS3R3BYOJValue43,
          chunkS3R3BYOJValue44,
          chunkS3R3BYOJParam13 + "",
          chunkS3R3BYOJParam11,
          chunkS3R3BYOJParam12,
          chunkS3R3BYOJParam17,
        )
      : undefined,
    chunkS3R3BYOJValue47 = chunkS3R3BYOJValue46 === undefined;
  if (chunkS3R3BYOJValue47) {
    var chunkS3R3BYOJValue48 = isArrayLikeObjectV(chunkS3R3BYOJValue44),
      chunkS3R3BYOJValue49 =
        !chunkS3R3BYOJValue48 && isArrayLikeObjectY(chunkS3R3BYOJValue44),
      chunkS3R3BYOJValue50 =
        !chunkS3R3BYOJValue48 &&
        !chunkS3R3BYOJValue49 &&
        _isArrayLikeObjectG(chunkS3R3BYOJValue44);
    chunkS3R3BYOJValue46 = chunkS3R3BYOJValue44;
    chunkS3R3BYOJValue48 || chunkS3R3BYOJValue49 || chunkS3R3BYOJValue50
      ? isArrayLikeObjectV(chunkS3R3BYOJValue43)
        ? (chunkS3R3BYOJValue46 = chunkS3R3BYOJValue43)
        : _isArrayLikeObjectT(chunkS3R3BYOJValue43)
          ? (chunkS3R3BYOJValue46 = isArrayLikeObjectF(chunkS3R3BYOJValue43))
          : chunkS3R3BYOJValue49
            ? ((chunkS3R3BYOJValue47 = false),
              (chunkS3R3BYOJValue46 = _isArrayLikeObjectS(
                chunkS3R3BYOJValue44,
                true,
              )))
            : chunkS3R3BYOJValue50
              ? ((chunkS3R3BYOJValue47 = false),
                (chunkS3R3BYOJValue46 = _isArrayLikeObjectI(
                  chunkS3R3BYOJValue44,
                  true,
                )))
              : (chunkS3R3BYOJValue46 = [])
      : chunkS3R3BYOJHelper1(chunkS3R3BYOJValue44) ||
          _isArrayLikeObjectB(chunkS3R3BYOJValue44)
        ? ((chunkS3R3BYOJValue46 = chunkS3R3BYOJValue43),
          _isArrayLikeObjectB(chunkS3R3BYOJValue43)
            ? (chunkS3R3BYOJValue46 =
                chunkS3R3BYOJHelper4(chunkS3R3BYOJValue43))
            : (!isArrayLikeObjectB(chunkS3R3BYOJValue43) ||
                isArrayLikeObjectR(chunkS3R3BYOJValue43)) &&
              (chunkS3R3BYOJValue46 =
                _isArrayLikeObjectR(chunkS3R3BYOJValue44)))
        : (chunkS3R3BYOJValue47 = false);
  }
  chunkS3R3BYOJValue47 &&
    (chunkS3R3BYOJParam17.set(chunkS3R3BYOJValue44, chunkS3R3BYOJValue46),
    chunkS3R3BYOJParam15(
      chunkS3R3BYOJValue46,
      chunkS3R3BYOJValue44,
      chunkS3R3BYOJParam14,
      chunkS3R3BYOJParam16,
      chunkS3R3BYOJParam17,
    ),
    chunkS3R3BYOJParam17.delete(chunkS3R3BYOJValue44));
  chunkS3R3BYOJHelper2(
    chunkS3R3BYOJParam11,
    chunkS3R3BYOJParam13,
    chunkS3R3BYOJValue46,
  );
}
function chunkS3R3BYOJHelper6(
  chunkS3R3BYOJParam32,
  chunkS3R3BYOJParam33,
  chunkS3R3BYOJParam34,
  chunkS3R3BYOJParam35,
  chunkS3R3BYOJParam36,
) {
  chunkS3R3BYOJParam32 !== chunkS3R3BYOJParam33 &&
    _isArrayLikeObjectN(
      chunkS3R3BYOJParam33,
      function (chunkS3R3BYOJParam46, chunkS3R3BYOJParam47) {
        if (
          ((chunkS3R3BYOJParam36 ||= new _isArrayLikeObjectC()),
          isArrayLikeObjectB(chunkS3R3BYOJParam46))
        )
          chunkS3R3BYOJHelper5(
            chunkS3R3BYOJParam32,
            chunkS3R3BYOJParam33,
            chunkS3R3BYOJParam47,
            chunkS3R3BYOJParam34,
            chunkS3R3BYOJHelper6,
            chunkS3R3BYOJParam35,
            chunkS3R3BYOJParam36,
          );
        else {
          var chunkS3R3BYOJValue91 = chunkS3R3BYOJParam35
            ? chunkS3R3BYOJParam35(
                chunkS3R3BYOJHelper3(
                  chunkS3R3BYOJParam32,
                  chunkS3R3BYOJParam47,
                ),
                chunkS3R3BYOJParam46,
                chunkS3R3BYOJParam47 + "",
                chunkS3R3BYOJParam32,
                chunkS3R3BYOJParam33,
                chunkS3R3BYOJParam36,
              )
            : undefined;
          chunkS3R3BYOJValue91 === undefined &&
            (chunkS3R3BYOJValue91 = chunkS3R3BYOJParam46);
          chunkS3R3BYOJHelper2(
            chunkS3R3BYOJParam32,
            chunkS3R3BYOJParam47,
            chunkS3R3BYOJValue91,
          );
        }
      },
      _isArrayLikeObjectP,
    );
}
var chunkS3R3BYOJUnderscore = isArrayLikeObjectS(
    function (
      chunkS3R3BYOJParam95,
      chunkS3R3BYOJParam96,
      chunkS3R3BYOJParam97,
    ) {
      chunkS3R3BYOJHelper6(
        chunkS3R3BYOJParam95,
        chunkS3R3BYOJParam96,
        chunkS3R3BYOJParam97,
      );
    },
  ),
  chunkS3R3BYOJValue7 = dist(),
  chunkS3R3BYOJValue8 = {
    curveBasis: stepH,
    curveBasisClosed: stepM,
    curveBasisOpen: stepP,
    curveBumpX: stepG,
    curveBumpY: stepUnderscore,
    curveBundle: stepF,
    curveCardinalClosed: stepU,
    curveCardinalOpen: stepL,
    curveCardinal: stepD,
    curveCatmullRomClosed: stepS,
    curveCatmullRomOpen: stepO,
    curveCatmullRom: stepC,
    curveLinear: monotoneR,
    curveLinearClosed: stepA,
    curveMonotoneX: monotoneT,
    curveMonotoneY: monotoneN,
    curveNatural: stepI,
    curveStep: stepR,
    curveStepAfter: stepT,
    curveStepBefore: stepN,
  },
  chunkS3R3BYOJValue9 =
    /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,
  chunkS3R3BYOJValue10 = chunkAGHRB4JFN(function (
    chunkS3R3BYOJParam27,
    chunkS3R3BYOJParam28,
  ) {
    let chunkS3R3BYOJValue69 = chunkS3R3BYOJValue11(
        chunkS3R3BYOJParam27,
        /(?:init\b)|(?:initialize\b)/,
      ),
      chunkS3R3BYOJValue70 = {};
    if (Array.isArray(chunkS3R3BYOJValue69)) {
      let chunkS3R3BYOJValue110 = chunkS3R3BYOJValue69.map((item) => item.args);
      chunkABZYJK2DF(chunkS3R3BYOJValue110);
      chunkS3R3BYOJValue70 = chunkABZYJK2DL(chunkS3R3BYOJValue70, [
        ...chunkS3R3BYOJValue110,
      ]);
    } else chunkS3R3BYOJValue70 = chunkS3R3BYOJValue69.args;
    if (!chunkS3R3BYOJValue70) return;
    let chunkS3R3BYOJValue71 = _chunkABZYJK2DF(
      chunkS3R3BYOJParam27,
      chunkS3R3BYOJParam28,
    );
    return (
      chunkS3R3BYOJValue70.config !== undefined &&
        (chunkS3R3BYOJValue71 === "flowchart-v2" &&
          (chunkS3R3BYOJValue71 = "flowchart"),
        (chunkS3R3BYOJValue70[chunkS3R3BYOJValue71] =
          chunkS3R3BYOJValue70.config),
        delete chunkS3R3BYOJValue70.config),
      chunkS3R3BYOJValue70
    );
  }, "detectInit"),
  chunkS3R3BYOJValue11 = chunkAGHRB4JFN(function (
    chunkS3R3BYOJParam3,
    chunkS3R3BYOJParam4 = null,
  ) {
    try {
      let chunkS3R3BYOJValue40 = RegExp(
        `[%]{2}(?![{]${chunkS3R3BYOJValue9.source})(?=[}][%]{2}).*
`,
        "ig",
      );
      chunkS3R3BYOJParam3 = chunkS3R3BYOJParam3
        .trim()
        .replace(chunkS3R3BYOJValue40, "")
        .replace(/'/gm, '"');
      chunkAGHRB4JFR.debug(
        `Detecting diagram directive${chunkS3R3BYOJParam4 === null ? "" : " type:" + chunkS3R3BYOJParam4} based on the text:${chunkS3R3BYOJParam3}`,
      );
      let chunkS3R3BYOJValue41,
        chunkS3R3BYOJValue42 = [];
      for (
        ;
        (chunkS3R3BYOJValue41 = chunkABZYJK2DC.exec(chunkS3R3BYOJParam3)) !==
        null;

      )
        if (
          (chunkS3R3BYOJValue41.index === chunkABZYJK2DC.lastIndex &&
            chunkABZYJK2DC.lastIndex++,
          (chunkS3R3BYOJValue41 && !chunkS3R3BYOJParam4) ||
            (chunkS3R3BYOJParam4 &&
              chunkS3R3BYOJValue41[1]?.match(chunkS3R3BYOJParam4)) ||
            (chunkS3R3BYOJParam4 &&
              chunkS3R3BYOJValue41[2]?.match(chunkS3R3BYOJParam4)))
        ) {
          let chunkS3R3BYOJValue97 = chunkS3R3BYOJValue41[1]
              ? chunkS3R3BYOJValue41[1]
              : chunkS3R3BYOJValue41[2],
            chunkS3R3BYOJValue98 = chunkS3R3BYOJValue41[3]
              ? chunkS3R3BYOJValue41[3].trim()
              : chunkS3R3BYOJValue41[4]
                ? JSON.parse(chunkS3R3BYOJValue41[4].trim())
                : null;
          chunkS3R3BYOJValue42.push({
            type: chunkS3R3BYOJValue97,
            args: chunkS3R3BYOJValue98,
          });
        }
      return chunkS3R3BYOJValue42.length === 0
        ? {
            type: chunkS3R3BYOJParam3,
            args: null,
          }
        : chunkS3R3BYOJValue42.length === 1
          ? chunkS3R3BYOJValue42[0]
          : chunkS3R3BYOJValue42;
    } catch (chunkS3R3BYOJValue96) {
      return (
        chunkAGHRB4JFR.error(
          `ERROR: ${chunkS3R3BYOJValue96.message} - Unable to parse directive type: '${chunkS3R3BYOJParam4}' based on the text: '${chunkS3R3BYOJParam3}'`,
        ),
        {
          type: undefined,
          args: null,
        }
      );
    }
  }, "detectDirective"),
  chunkS3R3BYOJValue12 = chunkAGHRB4JFN(function (
    chunkS3R3BYOJParam66,
    chunkS3R3BYOJParam67,
  ) {
    for (let [
      chunkS3R3BYOJValue112,
      chunkS3R3BYOJValue113,
    ] of chunkS3R3BYOJParam67.entries())
      if (chunkS3R3BYOJValue113.match(chunkS3R3BYOJParam66))
        return chunkS3R3BYOJValue112;
    return -1;
  }, "isSubstringInArray");
export const chunkS3R3BYOJM = chunkAGHRB4JFN(function (chunkS3R3BYOJParam87) {
  return chunkS3R3BYOJParam87.replace(chunkABZYJK2DC, "");
}, "removeDirectives");
function chunkS3R3BYOJU(chunkS3R3BYOJParam68, chunkS3R3BYOJParam69) {
  return chunkS3R3BYOJParam68
    ? (chunkS3R3BYOJValue8[
        `curve${chunkS3R3BYOJParam68.charAt(0).toUpperCase() + chunkS3R3BYOJParam68.slice(1)}`
      ] ?? chunkS3R3BYOJParam69)
    : chunkS3R3BYOJParam69;
}
chunkAGHRB4JFN(chunkS3R3BYOJU, "interpolateToCurve");
function chunkS3R3BYOJHelper7(chunkS3R3BYOJParam61, chunkS3R3BYOJParam62) {
  let chunkS3R3BYOJValue108 = chunkS3R3BYOJParam61.trim();
  if (chunkS3R3BYOJValue108)
    return chunkS3R3BYOJParam62.securityLevel === "loose"
      ? chunkS3R3BYOJValue108
      : chunkS3R3BYOJValue7.sanitizeUrl(chunkS3R3BYOJValue108);
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper7, "formatUrl");
var chunkS3R3BYOJValue13 = chunkAGHRB4JFN(
  (chunkS3R3BYOJParam42, ...chunkS3R3BYOJParam43) => {
    let chunkS3R3BYOJValue82 = chunkS3R3BYOJParam42.split("."),
      chunkS3R3BYOJValue83 = chunkS3R3BYOJValue82.length - 1,
      chunkS3R3BYOJValue84 = chunkS3R3BYOJValue82[chunkS3R3BYOJValue83],
      chunkS3R3BYOJValue85 = window;
    for (
      let chunkS3R3BYOJValue105 = 0;
      chunkS3R3BYOJValue105 < chunkS3R3BYOJValue83;
      chunkS3R3BYOJValue105++
    )
      if (
        ((chunkS3R3BYOJValue85 =
          chunkS3R3BYOJValue85[chunkS3R3BYOJValue82[chunkS3R3BYOJValue105]]),
        !chunkS3R3BYOJValue85)
      ) {
        chunkAGHRB4JFR.error(
          `Function name: ${chunkS3R3BYOJParam42} not found in window`,
        );
        return;
      }
    chunkS3R3BYOJValue85[chunkS3R3BYOJValue84](...chunkS3R3BYOJParam43);
  },
  "runFunc",
);
function chunkS3R3BYOJHelper8(chunkS3R3BYOJParam71, chunkS3R3BYOJParam72) {
  return !chunkS3R3BYOJParam71 || !chunkS3R3BYOJParam72
    ? 0
    : Math.sqrt(
        (chunkS3R3BYOJParam72.x - chunkS3R3BYOJParam71.x) ** 2 +
          (chunkS3R3BYOJParam72.y - chunkS3R3BYOJParam71.y) ** 2,
      );
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper8, "distance");
function chunkS3R3BYOJHelper9(chunkS3R3BYOJParam55) {
  let chunkS3R3BYOJValue106,
    chunkS3R3BYOJValue107 = 0;
  return (
    chunkS3R3BYOJParam55.forEach((item) => {
      chunkS3R3BYOJValue107 += chunkS3R3BYOJHelper8(
        item,
        chunkS3R3BYOJValue106,
      );
      chunkS3R3BYOJValue106 = item;
    }),
    chunkS3R3BYOJValue15(chunkS3R3BYOJParam55, chunkS3R3BYOJValue107 / 2)
  );
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper9, "traverseEdge");
function chunkS3R3BYOJHelper10(chunkS3R3BYOJParam86) {
  return chunkS3R3BYOJParam86.length === 1
    ? chunkS3R3BYOJParam86[0]
    : chunkS3R3BYOJHelper9(chunkS3R3BYOJParam86);
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper10, "calcLabelPosition");
var chunkS3R3BYOJValue14 = chunkAGHRB4JFN(
    (chunkS3R3BYOJParam80, chunkS3R3BYOJParam81 = 2) => {
      let chunkS3R3BYOJValue111 = 10 ** chunkS3R3BYOJParam81;
      return (
        Math.round(chunkS3R3BYOJParam80 * chunkS3R3BYOJValue111) /
        chunkS3R3BYOJValue111
      );
    },
    "roundNumber",
  ),
  chunkS3R3BYOJValue15 = chunkAGHRB4JFN(
    (chunkS3R3BYOJParam20, chunkS3R3BYOJParam21) => {
      let chunkS3R3BYOJValue62,
        chunkS3R3BYOJValue63 = chunkS3R3BYOJParam21;
      for (let chunkS3R3BYOJValue68 of chunkS3R3BYOJParam20) {
        if (chunkS3R3BYOJValue62) {
          let chunkS3R3BYOJValue75 = chunkS3R3BYOJHelper8(
            chunkS3R3BYOJValue68,
            chunkS3R3BYOJValue62,
          );
          if (chunkS3R3BYOJValue75 === 0) return chunkS3R3BYOJValue62;
          if (chunkS3R3BYOJValue75 < chunkS3R3BYOJValue63)
            chunkS3R3BYOJValue63 -= chunkS3R3BYOJValue75;
          else {
            let chunkS3R3BYOJValue80 =
              chunkS3R3BYOJValue63 / chunkS3R3BYOJValue75;
            if (chunkS3R3BYOJValue80 <= 0) return chunkS3R3BYOJValue62;
            if (chunkS3R3BYOJValue80 >= 1)
              return {
                x: chunkS3R3BYOJValue68.x,
                y: chunkS3R3BYOJValue68.y,
              };
            if (chunkS3R3BYOJValue80 > 0 && chunkS3R3BYOJValue80 < 1)
              return {
                x: chunkS3R3BYOJValue14(
                  (1 - chunkS3R3BYOJValue80) * chunkS3R3BYOJValue62.x +
                    chunkS3R3BYOJValue80 * chunkS3R3BYOJValue68.x,
                  5,
                ),
                y: chunkS3R3BYOJValue14(
                  (1 - chunkS3R3BYOJValue80) * chunkS3R3BYOJValue62.y +
                    chunkS3R3BYOJValue80 * chunkS3R3BYOJValue68.y,
                  5,
                ),
              };
          }
        }
        chunkS3R3BYOJValue62 = chunkS3R3BYOJValue68;
      }
      throw Error("Could not find a suitable point for the given distance");
    },
    "calculatePoint",
  ),
  chunkS3R3BYOJValue16 = chunkAGHRB4JFN(
    (chunkS3R3BYOJParam29, chunkS3R3BYOJParam30, chunkS3R3BYOJParam31) => {
      chunkAGHRB4JFR.info(`our points ${JSON.stringify(chunkS3R3BYOJParam30)}`);
      chunkS3R3BYOJParam30[0] !== chunkS3R3BYOJParam31 &&
        (chunkS3R3BYOJParam30 = chunkS3R3BYOJParam30.reverse());
      let chunkS3R3BYOJValue76 = chunkS3R3BYOJValue15(chunkS3R3BYOJParam30, 25),
        chunkS3R3BYOJValue77 = chunkS3R3BYOJParam29 ? 10 : 5,
        chunkS3R3BYOJValue78 = Math.atan2(
          chunkS3R3BYOJParam30[0].y - chunkS3R3BYOJValue76.y,
          chunkS3R3BYOJParam30[0].x - chunkS3R3BYOJValue76.x,
        ),
        chunkS3R3BYOJValue79 = {
          x: 0,
          y: 0,
        };
      return (
        (chunkS3R3BYOJValue79.x =
          Math.sin(chunkS3R3BYOJValue78) * chunkS3R3BYOJValue77 +
          (chunkS3R3BYOJParam30[0].x + chunkS3R3BYOJValue76.x) / 2),
        (chunkS3R3BYOJValue79.y =
          -Math.cos(chunkS3R3BYOJValue78) * chunkS3R3BYOJValue77 +
          (chunkS3R3BYOJParam30[0].y + chunkS3R3BYOJValue76.y) / 2),
        chunkS3R3BYOJValue79
      );
    },
    "calcCardinalityPosition",
  );
function chunkS3R3BYOJHelper11(
  chunkS3R3BYOJParam5,
  chunkS3R3BYOJParam6,
  chunkS3R3BYOJParam7,
) {
  let chunkS3R3BYOJValue32 = structuredClone(chunkS3R3BYOJParam7);
  chunkAGHRB4JFR.info("our points", chunkS3R3BYOJValue32);
  chunkS3R3BYOJParam6 !== "start_left" &&
    chunkS3R3BYOJParam6 !== "start_right" &&
    chunkS3R3BYOJValue32.reverse();
  let chunkS3R3BYOJValue33 = chunkS3R3BYOJValue15(
      chunkS3R3BYOJValue32,
      25 + chunkS3R3BYOJParam5,
    ),
    chunkS3R3BYOJValue34 = 10 + chunkS3R3BYOJParam5 * 0.5,
    chunkS3R3BYOJValue35 = Math.atan2(
      chunkS3R3BYOJValue32[0].y - chunkS3R3BYOJValue33.y,
      chunkS3R3BYOJValue32[0].x - chunkS3R3BYOJValue33.x,
    ),
    chunkS3R3BYOJValue36 = {
      x: 0,
      y: 0,
    };
  return (
    chunkS3R3BYOJParam6 === "start_left"
      ? ((chunkS3R3BYOJValue36.x =
          Math.sin(chunkS3R3BYOJValue35 + Math.PI) * chunkS3R3BYOJValue34 +
          (chunkS3R3BYOJValue32[0].x + chunkS3R3BYOJValue33.x) / 2),
        (chunkS3R3BYOJValue36.y =
          -Math.cos(chunkS3R3BYOJValue35 + Math.PI) * chunkS3R3BYOJValue34 +
          (chunkS3R3BYOJValue32[0].y + chunkS3R3BYOJValue33.y) / 2))
      : chunkS3R3BYOJParam6 === "end_right"
        ? ((chunkS3R3BYOJValue36.x =
            Math.sin(chunkS3R3BYOJValue35 - Math.PI) * chunkS3R3BYOJValue34 +
            (chunkS3R3BYOJValue32[0].x + chunkS3R3BYOJValue33.x) / 2 -
            5),
          (chunkS3R3BYOJValue36.y =
            -Math.cos(chunkS3R3BYOJValue35 - Math.PI) * chunkS3R3BYOJValue34 +
            (chunkS3R3BYOJValue32[0].y + chunkS3R3BYOJValue33.y) / 2 -
            5))
        : chunkS3R3BYOJParam6 === "end_left"
          ? ((chunkS3R3BYOJValue36.x =
              Math.sin(chunkS3R3BYOJValue35) * chunkS3R3BYOJValue34 +
              (chunkS3R3BYOJValue32[0].x + chunkS3R3BYOJValue33.x) / 2 -
              5),
            (chunkS3R3BYOJValue36.y =
              -Math.cos(chunkS3R3BYOJValue35) * chunkS3R3BYOJValue34 +
              (chunkS3R3BYOJValue32[0].y + chunkS3R3BYOJValue33.y) / 2 -
              5))
          : ((chunkS3R3BYOJValue36.x =
              Math.sin(chunkS3R3BYOJValue35) * chunkS3R3BYOJValue34 +
              (chunkS3R3BYOJValue32[0].x + chunkS3R3BYOJValue33.x) / 2),
            (chunkS3R3BYOJValue36.y =
              -Math.cos(chunkS3R3BYOJValue35) * chunkS3R3BYOJValue34 +
              (chunkS3R3BYOJValue32[0].y + chunkS3R3BYOJValue33.y) / 2)),
    chunkS3R3BYOJValue36
  );
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper11, "calcTerminalLabelPosition");
function chunkS3R3BYOJC(chunkS3R3BYOJParam44) {
  let chunkS3R3BYOJValue86 = "",
    chunkS3R3BYOJValue87 = "";
  for (let chunkS3R3BYOJValue99 of chunkS3R3BYOJParam44)
    chunkS3R3BYOJValue99 !== undefined &&
      (chunkS3R3BYOJValue99.startsWith("color:") ||
      chunkS3R3BYOJValue99.startsWith("text-align:")
        ? (chunkS3R3BYOJValue87 =
            chunkS3R3BYOJValue87 + chunkS3R3BYOJValue99 + ";")
        : (chunkS3R3BYOJValue86 =
            chunkS3R3BYOJValue86 + chunkS3R3BYOJValue99 + ";"));
  return {
    style: chunkS3R3BYOJValue86,
    labelStyle: chunkS3R3BYOJValue87,
  };
}
chunkAGHRB4JFN(chunkS3R3BYOJC, "getStylesFromArray");
var chunkS3R3BYOJValue17 = 0,
  chunkS3R3BYOJO = chunkAGHRB4JFN(
    () => (
      chunkS3R3BYOJValue17++,
      "id-" +
        Math.random().toString(36).substr(2, 12) +
        "-" +
        chunkS3R3BYOJValue17
    ),
    "generateId",
  );
function chunkS3R3BYOJHelper12(chunkS3R3BYOJParam53) {
  let chunkS3R3BYOJValue103 = "";
  for (
    let chunkS3R3BYOJValue109 = 0;
    chunkS3R3BYOJValue109 < chunkS3R3BYOJParam53;
    chunkS3R3BYOJValue109++
  )
    chunkS3R3BYOJValue103 += "0123456789abcdef".charAt(
      Math.floor(Math.random() * 16),
    );
  return chunkS3R3BYOJValue103;
}
chunkAGHRB4JFN(chunkS3R3BYOJHelper12, "makeRandomHex");
var chunkS3R3BYOJP = chunkAGHRB4JFN(
    (chunkS3R3BYOJParam101) =>
      chunkS3R3BYOJHelper12(chunkS3R3BYOJParam101.length),
    "random",
  ),
  chunkS3R3BYOJValue18 = chunkAGHRB4JFN(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: undefined,
      text: "",
    };
  }, "getTextObj"),
  chunkS3R3BYOJValue19 = chunkAGHRB4JFN(function (
    chunkS3R3BYOJParam18,
    chunkS3R3BYOJParam19,
  ) {
    let chunkS3R3BYOJValue55 = chunkS3R3BYOJParam19.text.replace(
        chunkABZYJK2DM.lineBreakRegex,
        " ",
      ),
      [, chunkS3R3BYOJValue56] = chunkS3R3BYOJF(chunkS3R3BYOJParam19.fontSize),
      chunkS3R3BYOJValue57 = chunkS3R3BYOJParam18.append("text");
    chunkS3R3BYOJValue57.attr("x", chunkS3R3BYOJParam19.x);
    chunkS3R3BYOJValue57.attr("y", chunkS3R3BYOJParam19.y);
    chunkS3R3BYOJValue57.style("text-anchor", chunkS3R3BYOJParam19.anchor);
    chunkS3R3BYOJValue57.style("font-family", chunkS3R3BYOJParam19.fontFamily);
    chunkS3R3BYOJValue57.style("font-size", chunkS3R3BYOJValue56);
    chunkS3R3BYOJValue57.style("font-weight", chunkS3R3BYOJParam19.fontWeight);
    chunkS3R3BYOJValue57.attr("fill", chunkS3R3BYOJParam19.fill);
    chunkS3R3BYOJParam19.class !== undefined &&
      chunkS3R3BYOJValue57.attr("class", chunkS3R3BYOJParam19.class);
    let chunkS3R3BYOJValue58 = chunkS3R3BYOJValue57.append("tspan");
    return (
      chunkS3R3BYOJValue58.attr(
        "x",
        chunkS3R3BYOJParam19.x + chunkS3R3BYOJParam19.textMargin * 2,
      ),
      chunkS3R3BYOJValue58.attr("fill", chunkS3R3BYOJParam19.fill),
      chunkS3R3BYOJValue58.text(chunkS3R3BYOJValue55),
      chunkS3R3BYOJValue57
    );
  }, "drawSimpleText"),
  chunkS3R3BYOJG = _isArrayLikeObjectU(
    (chunkS3R3BYOJParam8, chunkS3R3BYOJParam9, chunkS3R3BYOJParam10) => {
      if (
        !chunkS3R3BYOJParam8 ||
        ((chunkS3R3BYOJParam10 = Object.assign(
          {
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Arial",
            joinWith: "<br/>",
          },
          chunkS3R3BYOJParam10,
        )),
        chunkABZYJK2DM.lineBreakRegex.test(chunkS3R3BYOJParam8))
      )
        return chunkS3R3BYOJParam8;
      let chunkS3R3BYOJValue37 = chunkS3R3BYOJParam8.split(" ").filter(Boolean),
        chunkS3R3BYOJValue38 = [],
        chunkS3R3BYOJValue39 = "";
      return (
        chunkS3R3BYOJValue37.forEach((item, index) => {
          let chunkS3R3BYOJValue73 = chunkS3R3BYOJN(
              `${item} `,
              chunkS3R3BYOJParam10,
            ),
            chunkS3R3BYOJValue74 = chunkS3R3BYOJN(
              chunkS3R3BYOJValue39,
              chunkS3R3BYOJParam10,
            );
          if (chunkS3R3BYOJValue73 > chunkS3R3BYOJParam9) {
            let { hyphenatedStrings, remainingWord } = chunkS3R3BYOJValue20(
              item,
              chunkS3R3BYOJParam9,
              "-",
              chunkS3R3BYOJParam10,
            );
            chunkS3R3BYOJValue38.push(
              chunkS3R3BYOJValue39,
              ...hyphenatedStrings,
            );
            chunkS3R3BYOJValue39 = remainingWord;
          } else
            chunkS3R3BYOJValue74 + chunkS3R3BYOJValue73 >= chunkS3R3BYOJParam9
              ? (chunkS3R3BYOJValue38.push(chunkS3R3BYOJValue39),
                (chunkS3R3BYOJValue39 = item))
              : (chunkS3R3BYOJValue39 = [chunkS3R3BYOJValue39, item]
                  .filter(Boolean)
                  .join(" "));
          index + 1 === chunkS3R3BYOJValue37.length &&
            chunkS3R3BYOJValue38.push(chunkS3R3BYOJValue39);
        }),
        chunkS3R3BYOJValue38
          .filter((item) => item !== "")
          .join(chunkS3R3BYOJParam10.joinWith)
      );
    },
    (chunkS3R3BYOJParam73, chunkS3R3BYOJParam74, chunkS3R3BYOJParam75) =>
      `${chunkS3R3BYOJParam73}${chunkS3R3BYOJParam74}${chunkS3R3BYOJParam75.fontSize}${chunkS3R3BYOJParam75.fontWeight}${chunkS3R3BYOJParam75.fontFamily}${chunkS3R3BYOJParam75.joinWith}`,
  ),
  chunkS3R3BYOJValue20 = _isArrayLikeObjectU(
    (
      chunkS3R3BYOJParam22,
      chunkS3R3BYOJParam23,
      chunkS3R3BYOJParam24 = "-",
      chunkS3R3BYOJParam25,
    ) => {
      chunkS3R3BYOJParam25 = Object.assign(
        {
          fontSize: 12,
          fontWeight: 400,
          fontFamily: "Arial",
          margin: 0,
        },
        chunkS3R3BYOJParam25,
      );
      let chunkS3R3BYOJValue64 = [...chunkS3R3BYOJParam22],
        chunkS3R3BYOJValue65 = [],
        chunkS3R3BYOJValue66 = "";
      return (
        chunkS3R3BYOJValue64.forEach((item, index) => {
          let chunkS3R3BYOJValue88 = `${chunkS3R3BYOJValue66}${item}`;
          if (
            chunkS3R3BYOJN(chunkS3R3BYOJValue88, chunkS3R3BYOJParam25) >=
            chunkS3R3BYOJParam23
          ) {
            let chunkS3R3BYOJValue100 = index + 1,
              chunkS3R3BYOJValue101 =
                chunkS3R3BYOJValue64.length === chunkS3R3BYOJValue100,
              chunkS3R3BYOJValue102 = `${chunkS3R3BYOJValue88}${chunkS3R3BYOJParam24}`;
            chunkS3R3BYOJValue65.push(
              chunkS3R3BYOJValue101
                ? chunkS3R3BYOJValue88
                : chunkS3R3BYOJValue102,
            );
            chunkS3R3BYOJValue66 = "";
          } else chunkS3R3BYOJValue66 = chunkS3R3BYOJValue88;
        }),
        {
          hyphenatedStrings: chunkS3R3BYOJValue65,
          remainingWord: chunkS3R3BYOJValue66,
        }
      );
    },
    (
      chunkS3R3BYOJParam76,
      chunkS3R3BYOJParam77,
      chunkS3R3BYOJParam78 = "-",
      chunkS3R3BYOJParam79,
    ) =>
      `${chunkS3R3BYOJParam76}${chunkS3R3BYOJParam77}${chunkS3R3BYOJParam78}${chunkS3R3BYOJParam79.fontSize}${chunkS3R3BYOJParam79.fontWeight}${chunkS3R3BYOJParam79.fontFamily}`,
  );
function chunkS3R3BYOJT(chunkS3R3BYOJParam88, chunkS3R3BYOJParam89) {
  return chunkS3R3BYOJValue21(chunkS3R3BYOJParam88, chunkS3R3BYOJParam89)
    .height;
}
chunkAGHRB4JFN(chunkS3R3BYOJT, "calculateTextHeight");
function chunkS3R3BYOJN(chunkS3R3BYOJParam90, chunkS3R3BYOJParam91) {
  return chunkS3R3BYOJValue21(chunkS3R3BYOJParam90, chunkS3R3BYOJParam91).width;
}
chunkAGHRB4JFN(chunkS3R3BYOJN, "calculateTextWidth");
var chunkS3R3BYOJValue21 = _isArrayLikeObjectU(
    (chunkS3R3BYOJParam1, chunkS3R3BYOJParam2) => {
      let {
        fontSize = 12,
        fontFamily = "Arial",
        fontWeight = 400,
      } = chunkS3R3BYOJParam2;
      if (!chunkS3R3BYOJParam1)
        return {
          width: 0,
          height: 0,
        };
      let [, chunkS3R3BYOJValue26] = chunkS3R3BYOJF(fontSize),
        chunkS3R3BYOJValue27 = ["sans-serif", fontFamily],
        chunkS3R3BYOJValue28 = chunkS3R3BYOJParam1.split(
          chunkABZYJK2DM.lineBreakRegex,
        ),
        chunkS3R3BYOJValue29 = [],
        chunkS3R3BYOJValue30 = Src("body");
      if (!chunkS3R3BYOJValue30.remove)
        return {
          width: 0,
          height: 0,
          lineHeight: 0,
        };
      let chunkS3R3BYOJValue31 = chunkS3R3BYOJValue30.append("svg");
      for (let chunkS3R3BYOJValue51 of chunkS3R3BYOJValue27) {
        let chunkS3R3BYOJValue52 = 0,
          chunkS3R3BYOJValue53 = {
            width: 0,
            height: 0,
            lineHeight: 0,
          };
        for (let chunkS3R3BYOJValue54 of chunkS3R3BYOJValue28) {
          let chunkS3R3BYOJValue59 = chunkS3R3BYOJValue18();
          chunkS3R3BYOJValue59.text = chunkS3R3BYOJValue54 || "​";
          let chunkS3R3BYOJValue60 = chunkS3R3BYOJValue19(
              chunkS3R3BYOJValue31,
              chunkS3R3BYOJValue59,
            )
              .style("font-size", chunkS3R3BYOJValue26)
              .style("font-weight", fontWeight)
              .style("font-family", chunkS3R3BYOJValue51),
            chunkS3R3BYOJValue61 = (chunkS3R3BYOJValue60._groups ||
              chunkS3R3BYOJValue60)[0][0].getBBox();
          if (
            chunkS3R3BYOJValue61.width === 0 &&
            chunkS3R3BYOJValue61.height === 0
          )
            throw Error("svg element not in render tree");
          chunkS3R3BYOJValue53.width = Math.round(
            Math.max(chunkS3R3BYOJValue53.width, chunkS3R3BYOJValue61.width),
          );
          chunkS3R3BYOJValue52 = Math.round(chunkS3R3BYOJValue61.height);
          chunkS3R3BYOJValue53.height += chunkS3R3BYOJValue52;
          chunkS3R3BYOJValue53.lineHeight = Math.round(
            Math.max(chunkS3R3BYOJValue53.lineHeight, chunkS3R3BYOJValue52),
          );
        }
        chunkS3R3BYOJValue29.push(chunkS3R3BYOJValue53);
      }
      return (
        chunkS3R3BYOJValue31.remove(),
        chunkS3R3BYOJValue29[
          isNaN(chunkS3R3BYOJValue29[1].height) ||
          isNaN(chunkS3R3BYOJValue29[1].width) ||
          isNaN(chunkS3R3BYOJValue29[1].lineHeight) ||
          (chunkS3R3BYOJValue29[0].height > chunkS3R3BYOJValue29[1].height &&
            chunkS3R3BYOJValue29[0].width > chunkS3R3BYOJValue29[1].width &&
            chunkS3R3BYOJValue29[0].lineHeight >
              chunkS3R3BYOJValue29[1].lineHeight)
            ? 0
            : 1
        ]
      );
    },
    (chunkS3R3BYOJParam84, chunkS3R3BYOJParam85) =>
      `${chunkS3R3BYOJParam84}${chunkS3R3BYOJParam85.fontSize}${chunkS3R3BYOJParam85.fontWeight}${chunkS3R3BYOJParam85.fontFamily}`,
  ),
  chunkS3R3BYOJValue22 = class {
    constructor(chunkS3R3BYOJParam51 = false, chunkS3R3BYOJParam52) {
      this.count = 0;
      this.count = chunkS3R3BYOJParam52 ? chunkS3R3BYOJParam52.length : 0;
      this.next = chunkS3R3BYOJParam51 ? () => this.count++ : () => Date.now();
    }
    static {
      chunkAGHRB4JFN(this, "InitIDGenerator");
    }
  },
  chunkS3R3BYOJValue23,
  chunkS3R3BYOJValue24 = chunkAGHRB4JFN(function (chunkS3R3BYOJParam41) {
    return (
      (chunkS3R3BYOJValue23 ||= document.createElement("div")),
      (chunkS3R3BYOJParam41 = escape(chunkS3R3BYOJParam41)
        .replace(/%26/g, "&")
        .replace(/%23/g, "#")
        .replace(/%3B/g, ";")),
      (chunkS3R3BYOJValue23.innerHTML = chunkS3R3BYOJParam41),
      unescape(chunkS3R3BYOJValue23.textContent)
    );
  }, "entityDecode");
function chunkS3R3BYOJD(chunkS3R3BYOJParam99) {
  return "str" in chunkS3R3BYOJParam99;
}
chunkAGHRB4JFN(chunkS3R3BYOJD, "isDetailedError");
var chunkS3R3BYOJValue25 = chunkAGHRB4JFN(
    (
      chunkS3R3BYOJParam37,
      chunkS3R3BYOJParam38,
      chunkS3R3BYOJParam39,
      chunkS3R3BYOJParam40,
    ) => {
      if (!chunkS3R3BYOJParam40) return;
      let chunkS3R3BYOJValue81 = chunkS3R3BYOJParam37.node()?.getBBox();
      chunkS3R3BYOJValue81 &&
        chunkS3R3BYOJParam37
          .append("text")
          .text(chunkS3R3BYOJParam40)
          .attr("text-anchor", "middle")
          .attr("x", chunkS3R3BYOJValue81.x + chunkS3R3BYOJValue81.width / 2)
          .attr("y", -chunkS3R3BYOJParam39)
          .attr("class", chunkS3R3BYOJParam38);
    },
    "insertTitle",
  ),
  chunkS3R3BYOJF = chunkAGHRB4JFN((chunkS3R3BYOJParam48) => {
    if (typeof chunkS3R3BYOJParam48 == "number")
      return [chunkS3R3BYOJParam48, chunkS3R3BYOJParam48 + "px"];
    let chunkS3R3BYOJValue92 = parseInt(chunkS3R3BYOJParam48 ?? "", 10);
    return Number.isNaN(chunkS3R3BYOJValue92)
      ? [undefined, undefined]
      : chunkS3R3BYOJParam48 === String(chunkS3R3BYOJValue92)
        ? [chunkS3R3BYOJValue92, chunkS3R3BYOJParam48 + "px"]
        : [chunkS3R3BYOJValue92, chunkS3R3BYOJParam48];
  }, "parseFontSize");
function chunkS3R3BYOJR(chunkS3R3BYOJParam93, chunkS3R3BYOJParam94) {
  return chunkS3R3BYOJUnderscore(
    {},
    chunkS3R3BYOJParam93,
    chunkS3R3BYOJParam94,
  );
}
chunkAGHRB4JFN(chunkS3R3BYOJR, "cleanAndMerge");
export const chunkS3R3BYOJS = chunkAGHRB4JFN(
  (
    chunkS3R3BYOJParam56,
    chunkS3R3BYOJParam57,
    { counter = 0, prefix, suffix },
    chunkS3R3BYOJParam58,
  ) =>
    chunkS3R3BYOJParam58 ||
    `${prefix ? `${prefix}_` : ""}${chunkS3R3BYOJParam56}_${chunkS3R3BYOJParam57}_${counter}${suffix ? `_${suffix}` : ""}`,
  "getEdgeId",
);
export const chunkS3R3BYOJI = chunkAGHRB4JFN(function (chunkS3R3BYOJParam70) {
  return chunkS3R3BYOJParam70
    .replace(/ﬂ°°/g, "&#")
    .replace(/ﬂ°/g, "&")
    .replace(/¶ß/g, ";");
}, "decodeEntities");
export const chunkS3R3BYOJH = {
  assignWithDepth: chunkABZYJK2DL,
  wrapLabel: chunkS3R3BYOJG,
  calculateTextHeight: chunkS3R3BYOJT,
  calculateTextWidth: chunkS3R3BYOJN,
  calculateTextDimensions: chunkS3R3BYOJValue21,
  cleanAndMerge: chunkS3R3BYOJR,
  detectInit: chunkS3R3BYOJValue10,
  detectDirective: chunkS3R3BYOJValue11,
  isSubstringInArray: chunkS3R3BYOJValue12,
  interpolateToCurve: chunkS3R3BYOJU,
  calcLabelPosition: chunkS3R3BYOJHelper10,
  calcCardinalityPosition: chunkS3R3BYOJValue16,
  calcTerminalLabelPosition: chunkS3R3BYOJHelper11,
  formatUrl: chunkS3R3BYOJHelper7,
  getStylesFromArray: chunkS3R3BYOJC,
  generateId: chunkS3R3BYOJO,
  random: chunkS3R3BYOJP,
  runFunc: chunkS3R3BYOJValue13,
  entityDecode: chunkS3R3BYOJValue24,
  insertTitle: chunkS3R3BYOJValue25,
  isLabelCoordinateInPath: $,
  parseFontSize: chunkS3R3BYOJF,
  InitIDGenerator: chunkS3R3BYOJValue22,
};
export const chunkS3R3BYOJA = chunkAGHRB4JFN(function (chunkS3R3BYOJParam26) {
  let chunkS3R3BYOJValue67 = chunkS3R3BYOJParam26;
  return (
    (chunkS3R3BYOJValue67 = chunkS3R3BYOJValue67.replace(
      /style.*:\S*#.*;/g,
      function (chunkS3R3BYOJParam82) {
        return chunkS3R3BYOJParam82.substring(
          0,
          chunkS3R3BYOJParam82.length - 1,
        );
      },
    )),
    (chunkS3R3BYOJValue67 = chunkS3R3BYOJValue67.replace(
      /classDef.*:\S*#.*;/g,
      function (chunkS3R3BYOJParam83) {
        return chunkS3R3BYOJParam83.substring(
          0,
          chunkS3R3BYOJParam83.length - 1,
        );
      },
    )),
    (chunkS3R3BYOJValue67 = chunkS3R3BYOJValue67.replace(
      /#\w+;/g,
      function (chunkS3R3BYOJParam54) {
        let chunkS3R3BYOJValue104 = chunkS3R3BYOJParam54.substring(
          1,
          chunkS3R3BYOJParam54.length - 1,
        );
        return /^\+?\d+$/.test(chunkS3R3BYOJValue104)
          ? "ﬂ°°" + chunkS3R3BYOJValue104 + "¶ß"
          : "ﬂ°" + chunkS3R3BYOJValue104 + "¶ß";
      },
    )),
    chunkS3R3BYOJValue67
  );
}, "encodeEntities");
function chunkS3R3BYOJL(chunkS3R3BYOJParam100) {
  return chunkS3R3BYOJParam100 ?? null;
}
chunkAGHRB4JFN(chunkS3R3BYOJL, "handleUndefinedAttr");
function $(chunkS3R3BYOJParam49, chunkS3R3BYOJParam50) {
  let chunkS3R3BYOJValue93 = Math.round(chunkS3R3BYOJParam49.x),
    chunkS3R3BYOJValue94 = Math.round(chunkS3R3BYOJParam49.y),
    chunkS3R3BYOJValue95 = chunkS3R3BYOJParam50.replace(
      /(\d+\.\d+)/g,
      (chunkS3R3BYOJParam92) =>
        Math.round(parseFloat(chunkS3R3BYOJParam92)).toString(),
    );
  return (
    chunkS3R3BYOJValue95.includes(chunkS3R3BYOJValue93.toString()) ||
    chunkS3R3BYOJValue95.includes(chunkS3R3BYOJValue94.toString())
  );
}
chunkAGHRB4JFN($, "isLabelCoordinateInPath");
export {
  chunkS3R3BYOJUnderscore,
  chunkS3R3BYOJC,
  chunkS3R3BYOJD,
  chunkS3R3BYOJF,
  chunkS3R3BYOJG,
  chunkS3R3BYOJL,
  chunkS3R3BYOJN,
  chunkS3R3BYOJO,
  chunkS3R3BYOJP,
  chunkS3R3BYOJR,
  chunkS3R3BYOJT,
  chunkS3R3BYOJU,
};
