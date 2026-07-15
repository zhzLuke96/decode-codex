// Restored from ref/webview/assets/reduce-C4fu3kBc.js
// Flat boundary. Vendored reduce chunk restored from the Codex webview bundle.
import {
  baseForT as _baseForT,
  _baseForC,
  _baseForD,
  baseForE,
  baseForF,
  baseForG,
  baseForH,
  baseForI,
  baseForM,
  baseForN,
  baseForO,
  baseForP,
  baseForR,
  _baseForS,
  baseForT,
  baseForUnderscore,
  baseForV,
  baseForW,
  baseForY,
} from "./lodash-base-for";
import { isEmptyI, isEmptyN, isEmptyR } from "./lodash-is-empty";
function reduceE(reduceParam70, reduceParam71) {
  for (
    var reduceValue128 = -1,
      reduceValue129 = reduceParam70 == null ? 0 : reduceParam70.length,
      reduceValue130 = Array(reduceValue129);
    ++reduceValue128 < reduceValue129;

  )
    reduceValue130[reduceValue128] = reduceParam71(
      reduceParam70[reduceValue128],
      reduceValue128,
      reduceParam70,
    );
  return reduceValue130;
}
function reduceHelper1(reduceParam123) {
  return (this.__data__.set(reduceParam123, "__lodash_hash_undefined__"), this);
}
function reduceHelper2(reduceParam137) {
  return this.__data__.has(reduceParam137);
}
function reduceHelper3(reduceParam80) {
  var reduceValue136 = -1,
    reduceValue137 = reduceParam80 == null ? 0 : reduceParam80.length;
  for (this.__data__ = new baseForY(); ++reduceValue136 < reduceValue137; )
    this.add(reduceParam80[reduceValue136]);
}
reduceHelper3.prototype.add = reduceHelper3.prototype.push = reduceHelper1;
reduceHelper3.prototype.has = reduceHelper2;
function reduceHelper4(reduceParam75, reduceParam76) {
  for (
    var reduceValue132 = -1,
      reduceValue133 = reduceParam75 == null ? 0 : reduceParam75.length;
    ++reduceValue132 < reduceValue133;

  )
    if (
      reduceParam76(
        reduceParam75[reduceValue132],
        reduceValue132,
        reduceParam75,
      )
    )
      return true;
  return false;
}
function reduceHelper5(reduceParam153, reduceParam154) {
  return reduceParam153.has(reduceParam154);
}
function reduceHelper6(
  reduceParam14,
  reduceParam15,
  reduceParam16,
  reduceParam17,
  reduceParam18,
  reduceParam19,
) {
  var reduceValue62 = reduceParam16 & 1,
    reduceValue63 = reduceParam14.length,
    reduceValue64 = reduceParam15.length;
  if (
    reduceValue63 != reduceValue64 &&
    !(reduceValue62 && reduceValue64 > reduceValue63)
  )
    return false;
  var reduceValue65 = reduceParam19.get(reduceParam14),
    reduceValue66 = reduceParam19.get(reduceParam15);
  if (reduceValue65 && reduceValue66)
    return reduceValue65 == reduceParam15 && reduceValue66 == reduceParam14;
  var reduceValue67 = -1,
    reduceValue68 = true,
    reduceValue69 = reduceParam16 & 2 ? new reduceHelper3() : undefined;
  for (
    reduceParam19.set(reduceParam14, reduceParam15),
      reduceParam19.set(reduceParam15, reduceParam14);
    ++reduceValue67 < reduceValue63;

  ) {
    var reduceValue70 = reduceParam14[reduceValue67],
      reduceValue71 = reduceParam15[reduceValue67];
    if (reduceParam17)
      var reduceValue72 = reduceValue62
        ? reduceParam17(
            reduceValue71,
            reduceValue70,
            reduceValue67,
            reduceParam15,
            reduceParam14,
            reduceParam19,
          )
        : reduceParam17(
            reduceValue70,
            reduceValue71,
            reduceValue67,
            reduceParam14,
            reduceParam15,
            reduceParam19,
          );
    if (reduceValue72 !== undefined) {
      if (reduceValue72) continue;
      reduceValue68 = false;
      break;
    }
    if (reduceValue69) {
      if (
        !reduceHelper4(
          reduceParam15,
          function (reduceParam108, reduceParam109) {
            if (
              !reduceHelper5(reduceValue69, reduceParam109) &&
              (reduceValue70 === reduceParam108 ||
                reduceParam18(
                  reduceValue70,
                  reduceParam108,
                  reduceParam16,
                  reduceParam17,
                  reduceParam19,
                ))
            )
              return reduceValue69.push(reduceParam109);
          },
        )
      ) {
        reduceValue68 = false;
        break;
      }
    } else if (
      !(
        reduceValue70 === reduceValue71 ||
        reduceParam18(
          reduceValue70,
          reduceValue71,
          reduceParam16,
          reduceParam17,
          reduceParam19,
        )
      )
    ) {
      reduceValue68 = false;
      break;
    }
  }
  return (
    reduceParam19.delete(reduceParam14),
    reduceParam19.delete(reduceParam15),
    reduceValue68
  );
}
function reduceHelper7(reduceParam83) {
  var reduceValue144 = -1,
    reduceValue145 = Array(reduceParam83.size);
  return (
    reduceParam83.forEach(function (item, index) {
      reduceValue145[++reduceValue144] = [index, item];
    }),
    reduceValue145
  );
}
function reduceHelper8(reduceParam90) {
  var reduceValue150 = -1,
    reduceValue151 = Array(reduceParam90.size);
  return (
    reduceParam90.forEach(function (item) {
      reduceValue151[++reduceValue150] = item;
    }),
    reduceValue151
  );
}
var reduceValue15 = baseForE ? baseForE.prototype : undefined,
  reduceValue16 = reduceValue15 ? reduceValue15.valueOf : undefined;
function reduceHelper9(
  reduceParam7,
  reduceParam8,
  reduceParam9,
  reduceParam10,
  reduceParam11,
  reduceParam12,
  reduceParam13,
) {
  switch (reduceParam9) {
    case "[object DataView]":
      if (
        reduceParam7.byteLength != reduceParam8.byteLength ||
        reduceParam7.byteOffset != reduceParam8.byteOffset
      )
        return false;
      reduceParam7 = reduceParam7.buffer;
      reduceParam8 = reduceParam8.buffer;
    case "[object ArrayBuffer]":
      return !(
        reduceParam7.byteLength != reduceParam8.byteLength ||
        !reduceParam12(
          new baseForUnderscore(reduceParam7),
          new baseForUnderscore(reduceParam8),
        )
      );
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return baseForO(+reduceParam7, +reduceParam8);
    case "[object Error]":
      return (
        reduceParam7.name == reduceParam8.name &&
        reduceParam7.message == reduceParam8.message
      );
    case "[object RegExp]":
    case "[object String]":
      return reduceParam7 == reduceParam8 + "";
    case "[object Map]":
      var reduceValue58 = reduceHelper7;
    case "[object Set]":
      var reduceValue59 = reduceParam10 & 1;
      if (
        ((reduceValue58 ||= reduceHelper8),
        reduceParam7.size != reduceParam8.size && !reduceValue59)
      )
        return false;
      var reduceValue60 = reduceParam13.get(reduceParam7);
      if (reduceValue60) return reduceValue60 == reduceParam8;
      reduceParam10 |= 2;
      reduceParam13.set(reduceParam7, reduceParam8);
      var reduceValue61 = reduceHelper6(
        reduceValue58(reduceParam7),
        reduceValue58(reduceParam8),
        reduceParam10,
        reduceParam11,
        reduceParam12,
        reduceParam13,
      );
      return (reduceParam13.delete(reduceParam7), reduceValue61);
    case "[object Symbol]":
      if (reduceValue16)
        return (
          reduceValue16.call(reduceParam7) == reduceValue16.call(reduceParam8)
        );
  }
  return false;
}
function reduceT(reduceParam94, reduceParam95) {
  for (
    var reduceValue154 = -1,
      reduceValue155 = reduceParam95.length,
      reduceValue156 = reduceParam94.length;
    ++reduceValue154 < reduceValue155;

  )
    reduceParam94[reduceValue156 + reduceValue154] =
      reduceParam95[reduceValue154];
  return reduceParam94;
}
function reduceW(reduceParam113, reduceParam114, reduceParam115) {
  var reduceValue160 = reduceParam114(reduceParam113);
  return baseForG(reduceParam113)
    ? reduceValue160
    : reduceT(reduceValue160, reduceParam115(reduceParam113));
}
function reduceHelper10(reduceParam52, reduceParam53) {
  for (
    var reduceValue117 = -1,
      reduceValue118 = reduceParam52 == null ? 0 : reduceParam52.length,
      reduceValue119 = 0,
      reduceValue120 = [];
    ++reduceValue117 < reduceValue118;

  ) {
    var reduceValue121 = reduceParam52[reduceValue117];
    reduceParam53(reduceValue121, reduceValue117, reduceParam52) &&
      (reduceValue120[reduceValue119++] = reduceValue121);
  }
  return reduceValue120;
}
function reduceC() {
  return [];
}
var reduceValue17 = Object.prototype.propertyIsEnumerable,
  reduceValue18 = Object.getOwnPropertySymbols,
  reduceS = reduceValue18
    ? function (reduceParam86) {
        return reduceParam86 == null
          ? []
          : ((reduceParam86 = Object(reduceParam86)),
            reduceHelper10(
              reduceValue18(reduceParam86),
              function (reduceParam155) {
                return reduceValue17.call(reduceParam86, reduceParam155);
              },
            ));
      }
    : reduceC;
function reduceX(reduceParam145) {
  return baseForI(reduceParam145)
    ? _baseForS(reduceParam145)
    : isEmptyI(reduceParam145);
}
function reduceB(reduceParam156) {
  return reduceW(reduceParam156, reduceX, reduceS);
}
var reduceValue20 = Object.prototype.hasOwnProperty;
function reduceHelper11(
  reduceParam1,
  reduceParam2,
  reduceParam3,
  reduceParam4,
  reduceParam5,
  reduceParam6,
) {
  var reduceValue44 = reduceParam3 & 1,
    reduceValue45 = reduceB(reduceParam1),
    reduceValue46 = reduceValue45.length;
  if (reduceValue46 != reduceB(reduceParam2).length && !reduceValue44)
    return false;
  for (var reduceValue47 = reduceValue46; reduceValue47--; ) {
    var reduceValue48 = reduceValue45[reduceValue47];
    if (
      !(reduceValue44
        ? reduceValue48 in reduceParam2
        : reduceValue20.call(reduceParam2, reduceValue48))
    )
      return false;
  }
  var reduceValue49 = reduceParam6.get(reduceParam1),
    reduceValue50 = reduceParam6.get(reduceParam2);
  if (reduceValue49 && reduceValue50)
    return reduceValue49 == reduceParam2 && reduceValue50 == reduceParam1;
  var reduceValue51 = true;
  reduceParam6.set(reduceParam1, reduceParam2);
  reduceParam6.set(reduceParam2, reduceParam1);
  for (var reduceValue52 = reduceValue44; ++reduceValue47 < reduceValue46; ) {
    reduceValue48 = reduceValue45[reduceValue47];
    var reduceValue53 = reduceParam1[reduceValue48],
      reduceValue54 = reduceParam2[reduceValue48];
    if (reduceParam4)
      var reduceValue55 = reduceValue44
        ? reduceParam4(
            reduceValue54,
            reduceValue53,
            reduceValue48,
            reduceParam2,
            reduceParam1,
            reduceParam6,
          )
        : reduceParam4(
            reduceValue53,
            reduceValue54,
            reduceValue48,
            reduceParam1,
            reduceParam2,
            reduceParam6,
          );
    if (
      !(reduceValue55 === undefined
        ? reduceValue53 === reduceValue54 ||
          reduceParam5(
            reduceValue53,
            reduceValue54,
            reduceParam3,
            reduceParam4,
            reduceParam6,
          )
        : reduceValue55)
    ) {
      reduceValue51 = false;
      break;
    }
    reduceValue52 ||= reduceValue48 == "constructor";
  }
  if (reduceValue51 && !reduceValue52) {
    var reduceValue56 = reduceParam1.constructor,
      reduceValue57 = reduceParam2.constructor;
    reduceValue56 != reduceValue57 &&
      "constructor" in reduceParam1 &&
      "constructor" in reduceParam2 &&
      !(
        typeof reduceValue56 == "function" &&
        reduceValue56 instanceof reduceValue56 &&
        typeof reduceValue57 == "function" &&
        reduceValue57 instanceof reduceValue57
      ) &&
      (reduceValue51 = false);
  }
  return (
    reduceParam6.delete(reduceParam1),
    reduceParam6.delete(reduceParam2),
    reduceValue51
  );
}
var reduceValue25 = Object.prototype.hasOwnProperty;
function reduceHelper12(
  reduceParam20,
  reduceParam21,
  reduceParam22,
  reduceParam23,
  reduceParam24,
  reduceParam25,
) {
  var reduceValue73 = baseForG(reduceParam20),
    reduceValue74 = baseForG(reduceParam21),
    reduceValue75 = reduceValue73 ? "[object Array]" : isEmptyN(reduceParam20),
    reduceValue76 = reduceValue74 ? "[object Array]" : isEmptyN(reduceParam21);
  reduceValue75 =
    reduceValue75 == "[object Arguments]" ? "[object Object]" : reduceValue75;
  reduceValue76 =
    reduceValue76 == "[object Arguments]" ? "[object Object]" : reduceValue76;
  var reduceValue77 = reduceValue75 == "[object Object]",
    reduceValue78 = reduceValue76 == "[object Object]",
    reduceValue79 = reduceValue75 == reduceValue76;
  if (reduceValue79 && baseForP(reduceParam20)) {
    if (!baseForP(reduceParam21)) return false;
    reduceValue73 = true;
    reduceValue77 = false;
  }
  if (reduceValue79 && !reduceValue77)
    return (
      (reduceParam25 ||= new baseForV()),
      reduceValue73 || _baseForC(reduceParam20)
        ? reduceHelper6(
            reduceParam20,
            reduceParam21,
            reduceParam22,
            reduceParam23,
            reduceParam24,
            reduceParam25,
          )
        : reduceHelper9(
            reduceParam20,
            reduceParam21,
            reduceValue75,
            reduceParam22,
            reduceParam23,
            reduceParam24,
            reduceParam25,
          )
    );
  if (!(reduceParam22 & 1)) {
    var reduceValue80 =
        reduceValue77 && reduceValue25.call(reduceParam20, "__wrapped__"),
      reduceValue81 =
        reduceValue78 && reduceValue25.call(reduceParam21, "__wrapped__");
    if (reduceValue80 || reduceValue81) {
      var reduceValue82 = reduceValue80 ? reduceParam20.value() : reduceParam20,
        reduceValue83 = reduceValue81 ? reduceParam21.value() : reduceParam21;
      return (
        (reduceParam25 ||= new baseForV()),
        reduceParam24(
          reduceValue82,
          reduceValue83,
          reduceParam22,
          reduceParam23,
          reduceParam25,
        )
      );
    }
  }
  return reduceValue79
    ? ((reduceParam25 ||= new baseForV()),
      reduceHelper11(
        reduceParam20,
        reduceParam21,
        reduceParam22,
        reduceParam23,
        reduceParam24,
        reduceParam25,
      ))
    : false;
}
function reduceHelper13(
  reduceParam65,
  reduceParam66,
  reduceParam67,
  reduceParam68,
  reduceParam69,
) {
  return reduceParam65 === reduceParam66
    ? true
    : reduceParam65 == null ||
        reduceParam66 == null ||
        (!baseForH(reduceParam65) && !baseForH(reduceParam66))
      ? reduceParam65 !== reduceParam65 && reduceParam66 !== reduceParam66
      : reduceHelper12(
          reduceParam65,
          reduceParam66,
          reduceParam67,
          reduceParam68,
          reduceHelper13,
          reduceParam69,
        );
}
function reduceHelper14(
  reduceParam29,
  reduceParam30,
  reduceParam31,
  reduceParam32,
) {
  var reduceValue94 = reduceParam31.length,
    reduceValue95 = reduceValue94,
    reduceValue96 = !reduceParam32;
  if (reduceParam29 == null) return !reduceValue95;
  for (reduceParam29 = Object(reduceParam29); reduceValue94--; ) {
    var reduceValue97 = reduceParam31[reduceValue94];
    if (
      reduceValue96 && reduceValue97[2]
        ? reduceValue97[1] !== reduceParam29[reduceValue97[0]]
        : !(reduceValue97[0] in reduceParam29)
    )
      return false;
  }
  for (; ++reduceValue94 < reduceValue95; ) {
    reduceValue97 = reduceParam31[reduceValue94];
    var reduceValue98 = reduceValue97[0],
      reduceValue99 = reduceParam29[reduceValue98],
      reduceValue100 = reduceValue97[1];
    if (reduceValue96 && reduceValue97[2]) {
      if (reduceValue99 === undefined && !(reduceValue98 in reduceParam29))
        return false;
    } else {
      var reduceValue101 = new baseForV();
      if (reduceParam32)
        var reduceValue102 = reduceParam32(
          reduceValue99,
          reduceValue100,
          reduceValue98,
          reduceParam29,
          reduceParam30,
          reduceValue101,
        );
      if (
        !(reduceValue102 === undefined
          ? reduceHelper13(
              reduceValue100,
              reduceValue99,
              3,
              reduceParam32,
              reduceValue101,
            )
          : reduceValue102)
      )
        return false;
    }
  }
  return true;
}
function reduceHelper15(reduceParam152) {
  return reduceParam152 === reduceParam152 && !baseForW(reduceParam152);
}
function reduceHelper16(reduceParam81) {
  for (
    var reduceValue138 = reduceX(reduceParam81),
      reduceValue139 = reduceValue138.length;
    reduceValue139--;

  ) {
    var reduceValue140 = reduceValue138[reduceValue139],
      reduceValue141 = reduceParam81[reduceValue140];
    reduceValue138[reduceValue139] = [
      reduceValue140,
      reduceValue141,
      reduceHelper15(reduceValue141),
    ];
  }
  return reduceValue138;
}
function reduceHelper17(reduceParam72, reduceParam73) {
  return function (reduceParam104) {
    return reduceParam104 == null
      ? false
      : reduceParam104[reduceParam72] === reduceParam73 &&
          (reduceParam73 !== undefined ||
            reduceParam72 in Object(reduceParam104));
  };
}
function reduceHelper18(reduceParam51) {
  var reduceValue116 = reduceHelper16(reduceParam51);
  return reduceValue116.length == 1 && reduceValue116[0][2]
    ? reduceHelper17(reduceValue116[0][0], reduceValue116[0][1])
    : function (reduceParam146) {
        return (
          reduceParam146 === reduceParam51 ||
          reduceHelper14(reduceParam146, reduceParam51, reduceValue116)
        );
      };
}
function reduceY(reduceParam112) {
  return (
    typeof reduceParam112 == "symbol" ||
    (baseForH(reduceParam112) && baseForT(reduceParam112) == "[object Symbol]")
  );
}
export function reduceLessThan(reduceParam161, reduceParam162) {
  return reduceParam161 < reduceParam162;
}
export function reduceBaseExtremum(
  reduceParam163,
  reduceParam164,
  reduceParam165,
) {
  var reduceValue161;
  var reduceValue162;
  for (
    var reduceValue163 = -1, reduceValue164 = reduceParam163.length;
    ++reduceValue163 < reduceValue164;

  ) {
    var reduceValue165 = reduceParam163[reduceValue163],
      reduceValue166 = reduceParam164(reduceValue165);
    if (
      reduceValue166 != null &&
      (reduceValue162 === undefined
        ? reduceValue166 === reduceValue166 && !reduceY(reduceValue166)
        : reduceParam165(reduceValue166, reduceValue162))
    ) {
      reduceValue162 = reduceValue166;
      reduceValue161 = reduceValue165;
    }
  }
  return reduceValue161;
}
export function reduceMin(reduceParam166) {
  return reduceParam166 && reduceParam166.length
    ? reduceBaseExtremum(reduceParam166, baseForN, reduceLessThan)
    : undefined;
}
var reduceValue29 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reduceValue30 = /^\w*$/;
function reduceHelper19(reduceParam38, reduceParam39) {
  if (baseForG(reduceParam38)) return false;
  var reduceValue107 = typeof reduceParam38;
  return reduceValue107 == "number" ||
    reduceValue107 == "symbol" ||
    reduceValue107 == "boolean" ||
    reduceParam38 == null ||
    reduceY(reduceParam38)
    ? true
    : reduceValue30.test(reduceParam38) ||
        !reduceValue29.test(reduceParam38) ||
        (reduceParam39 != null && reduceParam38 in Object(reduceParam39));
}
function reduceHelper20(reduceParam82) {
  var reduceValue142 = baseForR(reduceParam82, function (reduceParam134) {
      return (
        reduceValue143.size === 500 && reduceValue143.clear(),
        reduceParam134
      );
    }),
    reduceValue143 = reduceValue142.cache;
  return reduceValue142;
}
var reduceValue32 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reduceValue33 = /\\(\\)?/g,
  reduceValue34 = reduceHelper20(function (reduceParam48) {
    var reduceValue115 = [];
    return (
      reduceParam48.charCodeAt(0) === 46 && reduceValue115.push(""),
      reduceParam48.replace(
        reduceValue32,
        function (
          reduceParam119,
          reduceParam120,
          reduceParam121,
          reduceParam122,
        ) {
          reduceValue115.push(
            reduceParam121
              ? reduceParam122.replace(reduceValue33, "$1")
              : reduceParam120 || reduceParam119,
          );
        },
      ),
      reduceValue115
    );
  }),
  reduceValue35 = 1 / 0,
  reduceValue36 = baseForE ? baseForE.prototype : undefined,
  reduceValue37 = reduceValue36 ? reduceValue36.toString : undefined;
function reduceHelper21(reduceParam45) {
  if (typeof reduceParam45 == "string") return reduceParam45;
  if (baseForG(reduceParam45))
    return reduceE(reduceParam45, reduceHelper21) + "";
  if (reduceY(reduceParam45))
    return reduceValue37 ? reduceValue37.call(reduceParam45) : "";
  var reduceValue111 = reduceParam45 + "";
  return reduceValue111 == "0" && 1 / reduceParam45 == -reduceValue35
    ? "-0"
    : reduceValue111;
}
function reduceV(reduceParam144) {
  return reduceParam144 == null ? "" : reduceHelper21(reduceParam144);
}
function reduceUnderscore(reduceParam124, reduceParam125) {
  return baseForG(reduceParam124)
    ? reduceParam124
    : reduceHelper19(reduceParam124, reduceParam125)
      ? [reduceParam124]
      : reduceValue34(reduceV(reduceParam124));
}
var reduceValue38 = 1 / 0;
function reduceG(reduceParam74) {
  if (typeof reduceParam74 == "string" || reduceY(reduceParam74))
    return reduceParam74;
  var reduceValue131 = reduceParam74 + "";
  return reduceValue131 == "0" && 1 / reduceParam74 == -reduceValue38
    ? "-0"
    : reduceValue131;
}
function reduceH(reduceParam59, reduceParam60) {
  reduceParam60 = reduceUnderscore(reduceParam60, reduceParam59);
  for (
    var reduceValue124 = 0, reduceValue125 = reduceParam60.length;
    reduceParam59 != null && reduceValue124 < reduceValue125;

  )
    reduceParam59 = reduceParam59[reduceG(reduceParam60[reduceValue124++])];
  return reduceValue124 && reduceValue124 == reduceValue125
    ? reduceParam59
    : undefined;
}
function reduceHelper22(reduceParam105, reduceParam106, reduceParam107) {
  var reduceValue159 =
    reduceParam105 == null
      ? undefined
      : reduceH(reduceParam105, reduceParam106);
  return reduceValue159 === undefined ? reduceParam107 : reduceValue159;
}
function reduceHelper23(reduceParam129, reduceParam130) {
  return reduceParam129 != null && reduceParam130 in Object(reduceParam129);
}
function reduceM(reduceParam33, reduceParam34, reduceParam35) {
  reduceParam34 = reduceUnderscore(reduceParam34, reduceParam33);
  for (
    var reduceValue103 = -1,
      reduceValue104 = reduceParam34.length,
      reduceValue105 = false;
    ++reduceValue103 < reduceValue104;

  ) {
    var reduceValue106 = reduceG(reduceParam34[reduceValue103]);
    if (
      !(reduceValue105 =
        reduceParam33 != null && reduceParam35(reduceParam33, reduceValue106))
    )
      break;
    reduceParam33 = reduceParam33[reduceValue106];
  }
  return reduceValue105 || ++reduceValue103 != reduceValue104
    ? reduceValue105
    : ((reduceValue104 = reduceParam33 == null ? 0 : reduceParam33.length),
      !!reduceValue104 &&
        _baseForD(reduceValue104) &&
        baseForF(reduceValue106, reduceValue104) &&
        (baseForG(reduceParam33) || baseForM(reduceParam33)));
}
function reduceP(reduceParam135, reduceParam136) {
  return (
    reduceParam135 != null &&
    reduceM(reduceParam135, reduceParam136, reduceHelper23)
  );
}
function reduceHelper24(reduceParam49, reduceParam50) {
  return reduceHelper19(reduceParam49) && reduceHelper15(reduceParam50)
    ? reduceHelper17(reduceG(reduceParam49), reduceParam50)
    : function (reduceParam103) {
        var reduceValue158 = reduceHelper22(reduceParam103, reduceParam49);
        return reduceValue158 === undefined && reduceValue158 === reduceParam50
          ? reduceP(reduceParam103, reduceParam49)
          : reduceHelper13(reduceParam50, reduceValue158, 3);
      };
}
function reduceF(reduceParam127) {
  return function (reduceParam159) {
    return reduceParam159?.[reduceParam127];
  };
}
function reduceHelper25(reduceParam128) {
  return function (reduceParam160) {
    return reduceH(reduceParam160, reduceParam128);
  };
}
function $e(reduceParam140) {
  return reduceHelper19(reduceParam140)
    ? reduceF(reduceG(reduceParam140))
    : reduceHelper25(reduceParam140);
}
function reduceD(reduceParam54) {
  return typeof reduceParam54 == "function"
    ? reduceParam54
    : reduceParam54 == null
      ? baseForN
      : typeof reduceParam54 == "object"
        ? baseForG(reduceParam54)
          ? reduceHelper24(reduceParam54[0], reduceParam54[1])
          : reduceHelper18(reduceParam54)
        : $e(reduceParam54);
}
function reduceU(reduceParam147, reduceParam148) {
  return reduceParam147 && _baseForT(reduceParam147, reduceParam148, reduceX);
}
function reduceHelper26(reduceParam36, reduceParam37) {
  return function (reduceParam46, reduceParam47) {
    if (reduceParam46 == null) return reduceParam46;
    if (!baseForI(reduceParam46))
      return reduceParam36(reduceParam46, reduceParam47);
    for (
      var reduceValue112 = reduceParam46.length,
        reduceValue113 = reduceParam37 ? reduceValue112 : -1,
        reduceValue114 = Object(reduceParam46);
      (reduceParam37 ? reduceValue113-- : ++reduceValue113 < reduceValue112) &&
      reduceParam47(
        reduceValue114[reduceValue113],
        reduceValue113,
        reduceValue114,
      ) !== false;

    );
    return reduceParam46;
  };
}
var reduceL = reduceHelper26(reduceU);
export function reduceCollectionMap(reduceParam167, reduceParam168) {
  var reduceValue167 = -1,
    reduceValue168 = baseForI(reduceParam167)
      ? Array(reduceParam167.length)
      : [];
  return (
    reduceL(
      reduceParam167,
      function (reduceParam169, reduceParam170, reduceParam171) {
        reduceValue168[++reduceValue167] = reduceParam168(
          reduceParam169,
          reduceParam170,
          reduceParam171,
        );
      },
    ),
    reduceValue168
  );
}
export function reduceMap(reduceParam172, reduceParam173) {
  return (baseForG(reduceParam172) ? reduceE : reduceCollectionMap)(
    reduceParam172,
    reduceD(reduceParam173, 3),
  );
}
function reduceHelper27(reduceParam101, reduceParam102) {
  var reduceValue157 = [];
  return (
    reduceL(
      reduceParam101,
      function (reduceParam149, reduceParam150, reduceParam151) {
        reduceParam102(reduceParam149, reduceParam150, reduceParam151) &&
          reduceValue157.push(reduceParam149);
      },
    ),
    reduceValue157
  );
}
export function _reduceC(reduceParam132, reduceParam133) {
  return (baseForG(reduceParam132) ? reduceHelper10 : reduceHelper27)(
    reduceParam132,
    reduceD(reduceParam133, 3),
  );
}
var reduceValue41 = baseForE ? baseForE.isConcatSpreadable : undefined;
function at(reduceParam126) {
  return (
    baseForG(reduceParam126) ||
    baseForM(reduceParam126) ||
    !!(reduceValue41 && reduceParam126 && reduceParam126[reduceValue41])
  );
}
function _reduceS(
  reduceParam40,
  reduceParam41,
  reduceParam42,
  reduceParam43,
  reduceParam44,
) {
  var reduceValue108 = -1,
    reduceValue109 = reduceParam40.length;
  for (
    reduceParam42 ||= at, reduceParam44 ||= [];
    ++reduceValue108 < reduceValue109;

  ) {
    var reduceValue110 = reduceParam40[reduceValue108];
    reduceParam41 > 0 && reduceParam42(reduceValue110)
      ? reduceParam41 > 1
        ? _reduceS(
            reduceValue110,
            reduceParam41 - 1,
            reduceParam42,
            reduceParam43,
            reduceParam44,
          )
        : reduceT(reduceParam44, reduceValue110)
      : reduceParam43 || (reduceParam44[reduceParam44.length] = reduceValue110);
  }
  return reduceParam44;
}
export function reduceFlattenOne(reduceParam174) {
  return reduceParam174 != null && reduceParam174.length
    ? _reduceS(reduceParam174, 1)
    : [];
}
export function reduceFlatMap(reduceParam175, reduceParam176) {
  return _reduceS(reduceMap(reduceParam175, reduceParam176), 1);
}
function reduceO(reduceParam61, reduceParam62, reduceParam63, reduceParam64) {
  for (
    var reduceValue126 = reduceParam61.length,
      reduceValue127 = reduceParam63 + (reduceParam64 ? 1 : -1);
    reduceParam64 ? reduceValue127-- : ++reduceValue127 < reduceValue126;

  )
    if (
      reduceParam62(
        reduceParam61[reduceValue127],
        reduceValue127,
        reduceParam61,
      )
    )
      return reduceValue127;
  return -1;
}
function reduceHelper28(reduceParam157) {
  return reduceParam157 !== reduceParam157;
}
function reduceHelper29(reduceParam91, reduceParam92, reduceParam93) {
  for (
    var reduceValue152 = reduceParam93 - 1,
      reduceValue153 = reduceParam91.length;
    ++reduceValue152 < reduceValue153;

  )
    if (reduceParam91[reduceValue152] === reduceParam92) return reduceValue152;
  return -1;
}
function reduceHelper30(reduceParam116, reduceParam117, reduceParam118) {
  return reduceParam117 === reduceParam117
    ? reduceHelper29(reduceParam116, reduceParam117, reduceParam118)
    : reduceO(reduceParam116, reduceHelper28, reduceParam118);
}
function reduceHelper31(reduceParam110, reduceParam111) {
  return (
    !!(reduceParam110 != null && reduceParam110.length) &&
    reduceHelper30(reduceParam110, reduceParam111, 0) > -1
  );
}
function reduceHelper32(reduceParam77, reduceParam78, reduceParam79) {
  for (
    var reduceValue134 = -1,
      reduceValue135 = reduceParam77 == null ? 0 : reduceParam77.length;
    ++reduceValue134 < reduceValue135;

  )
    if (reduceParam79(reduceParam78, reduceParam77[reduceValue134]))
      return true;
  return false;
}
function reduceHelper33() {}
var reduceValue42 =
  isEmptyR && 1 / reduceHelper8(new isEmptyR([, 0]))[1] == 1 / 0
    ? function (reduceParam158) {
        return new isEmptyR(reduceParam158);
      }
    : reduceHelper33;
export function reduceA(reduceParam26, reduceParam27, reduceParam28) {
  var reduceValue84 = -1,
    reduceValue85 = reduceHelper31,
    reduceValue86 = reduceParam26.length,
    reduceValue87 = true,
    reduceValue88 = [],
    reduceValue89 = reduceValue88;
  if (reduceParam28) {
    reduceValue87 = false;
    reduceValue85 = reduceHelper32;
  } else if (reduceValue86 >= 200) {
    var reduceValue90 = reduceParam27 ? null : reduceValue42(reduceParam26);
    if (reduceValue90) return reduceHelper8(reduceValue90);
    reduceValue87 = false;
    reduceValue85 = reduceHelper5;
    reduceValue89 = new reduceHelper3();
  } else reduceValue89 = reduceParam27 ? [] : reduceValue88;
  outer: for (; ++reduceValue84 < reduceValue86; ) {
    var reduceValue91 = reduceParam26[reduceValue84],
      reduceValue92 = reduceParam27
        ? reduceParam27(reduceValue91)
        : reduceValue91;
    if (
      ((reduceValue91 =
        reduceParam28 || reduceValue91 !== 0 ? reduceValue91 : 0),
      reduceValue87 && reduceValue92 === reduceValue92)
    ) {
      for (var reduceValue93 = reduceValue89.length; reduceValue93--; )
        if (reduceValue89[reduceValue93] === reduceValue92) continue outer;
      reduceParam27 && reduceValue89.push(reduceValue92);
      reduceValue88.push(reduceValue91);
    } else
      reduceValue85(reduceValue89, reduceValue92, reduceParam28) ||
        (reduceValue89 !== reduceValue88 && reduceValue89.push(reduceValue92),
        reduceValue88.push(reduceValue91));
  }
  return reduceValue88;
}
export function reduceUniqBy(reduceParam177, reduceParam178) {
  return reduceParam177 && reduceParam177.length
    ? reduceA(reduceParam177, reduceD(reduceParam178, 2))
    : [];
}
function reduceI(reduceParam84, reduceParam85) {
  for (
    var reduceValue146 = -1,
      reduceValue147 = reduceParam84 == null ? 0 : reduceParam84.length;
    ++reduceValue146 < reduceValue147 &&
    reduceParam85(
      reduceParam84[reduceValue146],
      reduceValue146,
      reduceParam84,
    ) !== false;

  );
  return reduceParam84;
}
function reduceR(reduceParam131) {
  return typeof reduceParam131 == "function" ? reduceParam131 : baseForN;
}
export function reduceN(reduceParam138, reduceParam139) {
  return (baseForG(reduceParam138) ? reduceI : reduceL)(
    reduceParam138,
    reduceR(reduceParam139),
  );
}
function reduceHelper34(
  reduceParam55,
  reduceParam56,
  reduceParam57,
  reduceParam58,
) {
  var reduceValue122 = -1,
    reduceValue123 = reduceParam55 == null ? 0 : reduceParam55.length;
  for (
    reduceParam58 &&
    reduceValue123 &&
    (reduceParam57 = reduceParam55[++reduceValue122]);
    ++reduceValue122 < reduceValue123;

  )
    reduceParam57 = reduceParam56(
      reduceParam57,
      reduceParam55[reduceValue122],
      reduceValue122,
      reduceParam55,
    );
  return reduceParam57;
}
function reduceHelper35(
  reduceParam96,
  reduceParam97,
  reduceParam98,
  reduceParam99,
  reduceParam100,
) {
  return (
    reduceParam100(
      reduceParam96,
      function (reduceParam141, reduceParam142, reduceParam143) {
        reduceParam98 = reduceParam99
          ? ((reduceParam99 = false), reduceParam141)
          : reduceParam97(
              reduceParam98,
              reduceParam141,
              reduceParam142,
              reduceParam143,
            );
      },
    ),
    reduceParam98
  );
}
export function _reduceT(reduceParam87, reduceParam88, reduceParam89) {
  var reduceValue148 = baseForG(reduceParam87)
      ? reduceHelper34
      : reduceHelper35,
    reduceValue149 = arguments.length < 3;
  return reduceValue148(
    reduceParam87,
    reduceD(reduceParam88, 4),
    reduceParam89,
    reduceValue149,
    reduceL,
  );
}
export function initLodashReduceChunk(): void {}
export {
  reduceC,
  reduceE,
  reduceS,
  reduceT,
  reduceUnderscore,
  reduceB,
  reduceD,
  reduceF,
  reduceG,
  reduceH,
  reduceI,
  reduceL,
  reduceM,
  reduceO,
  reduceP,
  reduceR,
  _reduceS,
  reduceU,
  reduceV,
  reduceW,
  reduceX,
  reduceY,
};
