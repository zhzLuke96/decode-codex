// Restored from ref/webview/assets/src-n5zF1GB1.js
// Flat boundary. Vendored src chunk restored from the Codex webview bundle.
import { stringL, stringN, stringR, stringT } from "./d3-interpolate-string";
var srcValue1 = 180 / Math.PI,
  srcValue2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function srcHelper1(
  srcParam35,
  srcParam36,
  srcParam37,
  srcParam38,
  srcParam39,
  srcParam40,
) {
  var srcValue167, srcValue168, srcValue169;
  return (
    (srcValue167 = Math.sqrt(
      srcParam35 * srcParam35 + srcParam36 * srcParam36,
    )) && ((srcParam35 /= srcValue167), (srcParam36 /= srcValue167)),
    (srcValue169 = srcParam35 * srcParam37 + srcParam36 * srcParam38) &&
      ((srcParam37 -= srcParam35 * srcValue169),
      (srcParam38 -= srcParam36 * srcValue169)),
    (srcValue168 = Math.sqrt(
      srcParam37 * srcParam37 + srcParam38 * srcParam38,
    )) &&
      ((srcParam37 /= srcValue168),
      (srcParam38 /= srcValue168),
      (srcValue169 /= srcValue168)),
    srcParam35 * srcParam38 < srcParam36 * srcParam37 &&
      ((srcParam35 = -srcParam35),
      (srcParam36 = -srcParam36),
      (srcValue169 = -srcValue169),
      (srcValue167 = -srcValue167)),
    {
      translateX: srcParam39,
      translateY: srcParam40,
      rotate: Math.atan2(srcParam36, srcParam35) * srcValue1,
      skewX: Math.atan(srcValue169) * srcValue1,
      scaleX: srcValue167,
      scaleY: srcValue168,
    }
  );
}
var srcValue3;
function srcHelper2(srcParam145) {
  let srcValue342 = new (
    typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix
  )(srcParam145 + "");
  return srcValue342.isIdentity
    ? srcValue2
    : srcHelper1(
        srcValue342.a,
        srcValue342.b,
        srcValue342.c,
        srcValue342.d,
        srcValue342.e,
        srcValue342.f,
      );
}
function srcHelper3(srcParam83) {
  return srcParam83 == null ||
    ((srcValue3 ||= document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    )),
    srcValue3.setAttribute("transform", srcParam83),
    !(srcParam83 = srcValue3.transform.baseVal.consolidate()))
    ? srcValue2
    : ((srcParam83 = srcParam83.matrix),
      srcHelper1(
        srcParam83.a,
        srcParam83.b,
        srcParam83.c,
        srcParam83.d,
        srcParam83.e,
        srcParam83.f,
      ));
}
function srcHelper4(srcParam4, srcParam5, srcParam6, srcParam7) {
  function srcHelper185(srcParam320) {
    return srcParam320.length ? srcParam320.pop() + " " : "";
  }
  function srcHelper186(
    srcParam111,
    srcParam112,
    srcParam113,
    srcParam114,
    srcParam115,
    srcParam116,
  ) {
    if (srcParam111 !== srcParam113 || srcParam112 !== srcParam114) {
      var srcValue292 = srcParam115.push(
        "translate(",
        null,
        srcParam5,
        null,
        srcParam6,
      );
      srcParam116.push(
        {
          i: srcValue292 - 4,
          x: stringN(srcParam111, srcParam113),
        },
        {
          i: srcValue292 - 2,
          x: stringN(srcParam112, srcParam114),
        },
      );
    } else
      (srcParam113 || srcParam114) &&
        srcParam115.push(
          "translate(" + srcParam113 + srcParam5 + srcParam114 + srcParam6,
        );
  }
  function srcHelper187(srcParam136, srcParam137, srcParam138, srcParam139) {
    srcParam136 === srcParam137
      ? srcParam137 &&
        srcParam138.push(
          srcHelper185(srcParam138) + "rotate(" + srcParam137 + srcParam7,
        )
      : (srcParam136 - srcParam137 > 180
          ? (srcParam137 += 360)
          : srcParam137 - srcParam136 > 180 && (srcParam136 += 360),
        srcParam139.push({
          i:
            srcParam138.push(
              srcHelper185(srcParam138) + "rotate(",
              null,
              srcParam7,
            ) - 2,
          x: stringN(srcParam136, srcParam137),
        }));
  }
  function srcHelper188(srcParam188, srcParam189, srcParam190, srcParam191) {
    srcParam188 === srcParam189
      ? srcParam189 &&
        srcParam190.push(
          srcHelper185(srcParam190) + "skewX(" + srcParam189 + srcParam7,
        )
      : srcParam191.push({
          i:
            srcParam190.push(
              srcHelper185(srcParam190) + "skewX(",
              null,
              srcParam7,
            ) - 2,
          x: stringN(srcParam188, srcParam189),
        });
  }
  function srcHelper189(
    srcParam98,
    srcParam99,
    srcParam100,
    srcParam101,
    srcParam102,
    srcParam103,
  ) {
    if (srcParam98 !== srcParam100 || srcParam99 !== srcParam101) {
      var srcValue272 = srcParam102.push(
        srcHelper185(srcParam102) + "scale(",
        null,
        ",",
        null,
        ")",
      );
      srcParam103.push(
        {
          i: srcValue272 - 4,
          x: stringN(srcParam98, srcParam100),
        },
        {
          i: srcValue272 - 2,
          x: stringN(srcParam99, srcParam101),
        },
      );
    } else
      (srcParam100 !== 1 || srcParam101 !== 1) &&
        srcParam102.push(
          srcHelper185(srcParam102) +
            "scale(" +
            srcParam100 +
            "," +
            srcParam101 +
            ")",
        );
  }
  return function (srcParam26, srcParam27) {
    var srcValue112 = [],
      srcValue113 = [];
    return (
      (srcParam26 = srcParam4(srcParam26)),
      (srcParam27 = srcParam4(srcParam27)),
      srcHelper186(
        srcParam26.translateX,
        srcParam26.translateY,
        srcParam27.translateX,
        srcParam27.translateY,
        srcValue112,
        srcValue113,
      ),
      srcHelper187(
        srcParam26.rotate,
        srcParam27.rotate,
        srcValue112,
        srcValue113,
      ),
      srcHelper188(
        srcParam26.skewX,
        srcParam27.skewX,
        srcValue112,
        srcValue113,
      ),
      srcHelper189(
        srcParam26.scaleX,
        srcParam26.scaleY,
        srcParam27.scaleX,
        srcParam27.scaleY,
        srcValue112,
        srcValue113,
      ),
      (srcParam26 = srcParam27 = null),
      function (srcParam226) {
        for (
          var srcValue409 = -1, srcValue410 = srcValue113.length, srcValue411;
          ++srcValue409 < srcValue410;

        )
          srcValue112[(srcValue411 = srcValue113[srcValue409]).i] =
            srcValue411.x(srcParam226);
        return srcValue112.join("");
      }
    );
  };
}
var srcValue4 = srcHelper4(srcHelper2, "px, ", "px)", "deg)"),
  srcValue5 = srcHelper4(srcHelper3, ", ", ")", ")"),
  srcValue6 = {
    value: () => {},
  };
function srcHelper5() {
  for (
    var srcValue293 = 0,
      srcValue294 = arguments.length,
      srcValue295 = {},
      srcValue296;
    srcValue293 < srcValue294;
    ++srcValue293
  ) {
    if (
      !(srcValue296 = arguments[srcValue293] + "") ||
      srcValue296 in srcValue295 ||
      /[\s.]/.test(srcValue296)
    )
      throw Error("illegal type: " + srcValue296);
    srcValue295[srcValue296] = [];
  }
  return new srcHelper6(srcValue295);
}
function srcHelper6(srcParam343) {
  this._ = srcParam343;
}
function srcHelper7(srcParam74, srcParam75) {
  return srcParam74
    .trim()
    .split(/^|\s+/)
    .map(function (item) {
      var srcValue299 = "",
        srcValue300 = item.indexOf(".");
      if (
        (srcValue300 >= 0 &&
          ((srcValue299 = item.slice(srcValue300 + 1)),
          (item = item.slice(0, srcValue300))),
        item && !srcParam75.hasOwnProperty(item))
      )
        throw Error("unknown type: " + item);
      return {
        type: item,
        name: srcValue299,
      };
    });
}
srcHelper6.prototype = srcHelper5.prototype = {
  constructor: srcHelper6,
  on: function (srcParam14, srcParam15) {
    var srcValue59 = this._,
      srcValue60 = srcHelper7(srcParam14 + "", srcValue59),
      srcValue61,
      srcValue62 = -1,
      srcValue63 = srcValue60.length;
    if (arguments.length < 2) {
      for (; ++srcValue62 < srcValue63; )
        if (
          (srcValue61 = (srcParam14 = srcValue60[srcValue62]).type) &&
          (srcValue61 = srcHelper8(srcValue59[srcValue61], srcParam14.name))
        )
          return srcValue61;
      return;
    }
    if (srcParam15 != null && typeof srcParam15 != "function")
      throw Error("invalid callback: " + srcParam15);
    for (; ++srcValue62 < srcValue63; )
      if ((srcValue61 = (srcParam14 = srcValue60[srcValue62]).type))
        srcValue59[srcValue61] = srcHelper9(
          srcValue59[srcValue61],
          srcParam14.name,
          srcParam15,
        );
      else if (srcParam15 == null)
        for (srcValue61 in srcValue59)
          srcValue59[srcValue61] = srcHelper9(
            srcValue59[srcValue61],
            srcParam14.name,
            null,
          );
    return this;
  },
  copy: function () {
    var srcValue414 = {},
      srcValue415 = this._;
    for (var srcValue416 in srcValue415)
      srcValue414[srcValue416] = srcValue415[srcValue416].slice();
    return new srcHelper6(srcValue414);
  },
  call: function (srcParam55, srcParam56) {
    if ((srcValue213 = arguments.length - 2) > 0)
      for (
        var srcValue211 = Array(srcValue213),
          srcValue212 = 0,
          srcValue213,
          srcValue214;
        srcValue212 < srcValue213;
        ++srcValue212
      )
        srcValue211[srcValue212] = arguments[srcValue212 + 2];
    if (!this._.hasOwnProperty(srcParam55))
      throw Error("unknown type: " + srcParam55);
    for (
      srcValue214 = this._[srcParam55],
        srcValue212 = 0,
        srcValue213 = srcValue214.length;
      srcValue212 < srcValue213;
      ++srcValue212
    )
      srcValue214[srcValue212].value.apply(srcParam56, srcValue211);
  },
  apply: function (srcParam141, srcParam142, srcParam143) {
    if (!this._.hasOwnProperty(srcParam141))
      throw Error("unknown type: " + srcParam141);
    for (
      var srcValue328 = this._[srcParam141],
        srcValue329 = 0,
        srcValue330 = srcValue328.length;
      srcValue329 < srcValue330;
      ++srcValue329
    )
      srcValue328[srcValue329].value.apply(srcParam142, srcParam143);
  },
};
function srcHelper8(srcParam222, srcParam223) {
  for (
    var srcValue406 = 0, srcValue407 = srcParam222.length, srcValue408;
    srcValue406 < srcValue407;
    ++srcValue406
  )
    if ((srcValue408 = srcParam222[srcValue406]).name === srcParam223)
      return srcValue408.value;
}
function srcHelper9(srcParam117, srcParam118, srcParam119) {
  for (
    var srcValue297 = 0, srcValue298 = srcParam117.length;
    srcValue297 < srcValue298;
    ++srcValue297
  )
    if (srcParam117[srcValue297].name === srcParam118) {
      srcParam117[srcValue297] = srcValue6;
      srcParam117 = srcParam117
        .slice(0, srcValue297)
        .concat(srcParam117.slice(srcValue297 + 1));
      break;
    }
  return (
    srcParam119 != null &&
      srcParam117.push({
        name: srcParam118,
        value: srcParam119,
      }),
    srcParam117
  );
}
var srcValue7 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function srcHelper10(srcParam140) {
  var srcValue323 = (srcParam140 += ""),
    srcValue324 = srcValue323.indexOf(":");
  return (
    srcValue324 >= 0 &&
      (srcValue323 = srcParam140.slice(0, srcValue324)) !== "xmlns" &&
      (srcParam140 = srcParam140.slice(srcValue324 + 1)),
    srcValue7.hasOwnProperty(srcValue323)
      ? {
          space: srcValue7[srcValue323],
          local: srcParam140,
        }
      : srcParam140
  );
}
function srcHelper11(srcParam54) {
  return function () {
    var srcValue248 = this.ownerDocument,
      srcValue249 = this.namespaceURI;
    return srcValue249 === "http://www.w3.org/1999/xhtml" &&
      srcValue248.documentElement.namespaceURI ===
        "http://www.w3.org/1999/xhtml"
      ? srcValue248.createElement(srcParam54)
      : srcValue248.createElementNS(srcValue249, srcParam54);
  };
}
function srcHelper12(srcParam208) {
  return function () {
    return this.ownerDocument.createElementNS(
      srcParam208.space,
      srcParam208.local,
    );
  };
}
function srcHelper13(srcParam309) {
  var srcValue435 = srcHelper10(srcParam309);
  return (srcValue435.local ? srcHelper12 : srcHelper11)(srcValue435);
}
function srcHelper14() {}
function srcHelper15(srcParam255) {
  return srcParam255 == null
    ? srcHelper14
    : function () {
        return this.querySelector(srcParam255);
      };
}
function srcHelper16(srcParam32) {
  typeof srcParam32 != "function" && (srcParam32 = srcHelper15(srcParam32));
  for (
    var srcValue136 = this._groups,
      srcValue137 = srcValue136.length,
      srcValue138 = Array(srcValue137),
      srcValue139 = 0;
    srcValue139 < srcValue137;
    ++srcValue139
  )
    for (
      var srcValue140 = srcValue136[srcValue139],
        srcValue141 = srcValue140.length,
        srcValue142 = (srcValue138[srcValue139] = Array(srcValue141)),
        srcValue143,
        srcValue144,
        srcValue145 = 0;
      srcValue145 < srcValue141;
      ++srcValue145
    )
      (srcValue143 = srcValue140[srcValue145]) &&
        (srcValue144 = srcParam32.call(
          srcValue143,
          srcValue143.__data__,
          srcValue145,
          srcValue140,
        )) &&
        ("__data__" in srcValue143 &&
          (srcValue144.__data__ = srcValue143.__data__),
        (srcValue142[srcValue145] = srcValue144));
  return new srcHelper104(srcValue138, this._parents);
}
function srcHelper17(srcParam271) {
  return srcParam271 == null
    ? []
    : Array.isArray(srcParam271)
      ? srcParam271
      : Array.from(srcParam271);
}
function srcHelper18() {
  return [];
}
function srcHelper19(srcParam241) {
  return srcParam241 == null
    ? srcHelper18
    : function () {
        return this.querySelectorAll(srcParam241);
      };
}
function srcHelper20(srcParam260) {
  return function () {
    return srcHelper17(srcParam260.apply(this, arguments));
  };
}
function srcHelper21(srcParam57) {
  srcParam57 =
    typeof srcParam57 == "function"
      ? srcHelper20(srcParam57)
      : srcHelper19(srcParam57);
  for (
    var srcValue215 = this._groups,
      srcValue216 = srcValue215.length,
      srcValue217 = [],
      srcValue218 = [],
      srcValue219 = 0;
    srcValue219 < srcValue216;
    ++srcValue219
  )
    for (
      var srcValue220 = srcValue215[srcValue219],
        srcValue221 = srcValue220.length,
        srcValue222,
        srcValue223 = 0;
      srcValue223 < srcValue221;
      ++srcValue223
    )
      (srcValue222 = srcValue220[srcValue223]) &&
        (srcValue217.push(
          srcParam57.call(
            srcValue222,
            srcValue222.__data__,
            srcValue223,
            srcValue220,
          ),
        ),
        srcValue218.push(srcValue222));
  return new srcHelper104(srcValue217, srcValue218);
}
function srcHelper22(srcParam293) {
  return function () {
    return this.matches(srcParam293);
  };
}
function srcHelper23(srcParam300) {
  return function (srcParam340) {
    return srcParam340.matches(srcParam300);
  };
}
var srcValue8 = Array.prototype.find;
function srcHelper24(srcParam272) {
  return function () {
    return srcValue8.call(this.children, srcParam272);
  };
}
function srcHelper25() {
  return this.firstElementChild;
}
function srcHelper26(srcParam236) {
  return this.select(
    srcParam236 == null
      ? srcHelper25
      : srcHelper24(
          typeof srcParam236 == "function"
            ? srcParam236
            : srcHelper23(srcParam236),
        ),
  );
}
var srcValue9 = Array.prototype.filter;
function srcHelper27() {
  return Array.from(this.children);
}
function _e(srcParam273) {
  return function () {
    return srcValue9.call(this.children, srcParam273);
  };
}
function srcHelper28(srcParam230) {
  return this.selectAll(
    srcParam230 == null
      ? srcHelper27
      : _e(
          typeof srcParam230 == "function"
            ? srcParam230
            : srcHelper23(srcParam230),
        ),
  );
}
function srcHelper29(srcParam53) {
  typeof srcParam53 != "function" && (srcParam53 = srcHelper22(srcParam53));
  for (
    var srcValue202 = this._groups,
      srcValue203 = srcValue202.length,
      srcValue204 = Array(srcValue203),
      srcValue205 = 0;
    srcValue205 < srcValue203;
    ++srcValue205
  )
    for (
      var srcValue206 = srcValue202[srcValue205],
        srcValue207 = srcValue206.length,
        srcValue208 = (srcValue204[srcValue205] = []),
        srcValue209,
        srcValue210 = 0;
      srcValue210 < srcValue207;
      ++srcValue210
    )
      (srcValue209 = srcValue206[srcValue210]) &&
        srcParam53.call(
          srcValue209,
          srcValue209.__data__,
          srcValue210,
          srcValue206,
        ) &&
        srcValue208.push(srcValue209);
  return new srcHelper104(srcValue204, this._parents);
}
function be(srcParam333) {
  return Array(srcParam333.length);
}
function srcHelper30() {
  return new srcHelper104(this._enter || this._groups.map(be), this._parents);
}
function srcHelper31(srcParam152, srcParam153) {
  this.ownerDocument = srcParam152.ownerDocument;
  this.namespaceURI = srcParam152.namespaceURI;
  this._next = null;
  this._parent = srcParam152;
  this.__data__ = srcParam153;
}
srcHelper31.prototype = {
  constructor: srcHelper31,
  appendChild: function (srcParam283) {
    return this._parent.insertBefore(srcParam283, this._next);
  },
  insertBefore: function (srcParam305, srcParam306) {
    return this._parent.insertBefore(srcParam305, srcParam306);
  },
  querySelector: function (srcParam310) {
    return this._parent.querySelector(srcParam310);
  },
  querySelectorAll: function (srcParam307) {
    return this._parent.querySelectorAll(srcParam307);
  },
};
function srcHelper32(srcParam329) {
  return function () {
    return srcParam329;
  };
}
function srcHelper33(
  srcParam120,
  srcParam121,
  srcParam122,
  srcParam123,
  srcParam124,
  srcParam125,
) {
  for (
    var srcValue301 = 0,
      srcValue302,
      srcValue303 = srcParam121.length,
      srcValue304 = srcParam125.length;
    srcValue301 < srcValue304;
    ++srcValue301
  )
    (srcValue302 = srcParam121[srcValue301])
      ? ((srcValue302.__data__ = srcParam125[srcValue301]),
        (srcParam123[srcValue301] = srcValue302))
      : (srcParam122[srcValue301] = new srcHelper31(
          srcParam120,
          srcParam125[srcValue301],
        ));
  for (; srcValue301 < srcValue303; ++srcValue301)
    (srcValue302 = srcParam121[srcValue301]) &&
      (srcParam124[srcValue301] = srcValue302);
}
function srcHelper34(
  srcParam17,
  srcParam18,
  srcParam19,
  srcParam20,
  srcParam21,
  srcParam22,
  srcParam23,
) {
  var srcValue76,
    srcValue77,
    srcValue78 = new Map(),
    srcValue79 = srcParam18.length,
    srcValue80 = srcParam22.length,
    srcValue81 = Array(srcValue79),
    srcValue82;
  for (srcValue76 = 0; srcValue76 < srcValue79; ++srcValue76)
    (srcValue77 = srcParam18[srcValue76]) &&
      ((srcValue81[srcValue76] = srcValue82 =
        srcParam23.call(
          srcValue77,
          srcValue77.__data__,
          srcValue76,
          srcParam18,
        ) + ""),
      srcValue78.has(srcValue82)
        ? (srcParam21[srcValue76] = srcValue77)
        : srcValue78.set(srcValue82, srcValue77));
  for (srcValue76 = 0; srcValue76 < srcValue80; ++srcValue76) {
    srcValue82 =
      srcParam23.call(
        srcParam17,
        srcParam22[srcValue76],
        srcValue76,
        srcParam22,
      ) + "";
    (srcValue77 = srcValue78.get(srcValue82))
      ? ((srcParam20[srcValue76] = srcValue77),
        (srcValue77.__data__ = srcParam22[srcValue76]),
        srcValue78.delete(srcValue82))
      : (srcParam19[srcValue76] = new srcHelper31(
          srcParam17,
          srcParam22[srcValue76],
        ));
  }
  for (srcValue76 = 0; srcValue76 < srcValue79; ++srcValue76)
    (srcValue77 = srcParam18[srcValue76]) &&
      srcValue78.get(srcValue81[srcValue76]) === srcValue77 &&
      (srcParam21[srcValue76] = srcValue77);
}
function srcHelper35(srcParam339) {
  return srcParam339.__data__;
}
function srcHelper36(srcParam9, srcParam10) {
  if (!arguments.length) return Array.from(this, srcHelper35);
  var srcValue35 = srcParam10 ? srcHelper34 : srcHelper33,
    srcValue36 = this._parents,
    srcValue37 = this._groups;
  typeof srcParam9 != "function" && (srcParam9 = srcHelper32(srcParam9));
  for (
    var srcValue38 = srcValue37.length,
      srcValue39 = Array(srcValue38),
      srcValue40 = Array(srcValue38),
      srcValue41 = Array(srcValue38),
      srcValue42 = 0;
    srcValue42 < srcValue38;
    ++srcValue42
  ) {
    var srcValue43 = srcValue36[srcValue42],
      srcValue44 = srcValue37[srcValue42],
      srcValue45 = srcValue44.length,
      srcValue46 = srcHelper37(
        srcParam9.call(
          srcValue43,
          srcValue43 && srcValue43.__data__,
          srcValue42,
          srcValue36,
        ),
      ),
      srcValue47 = srcValue46.length,
      srcValue48 = (srcValue40[srcValue42] = Array(srcValue47)),
      srcValue49 = (srcValue39[srcValue42] = Array(srcValue47));
    srcValue35(
      srcValue43,
      srcValue44,
      srcValue48,
      srcValue49,
      (srcValue41[srcValue42] = Array(srcValue45)),
      srcValue46,
      srcParam10,
    );
    for (
      var srcValue50 = 0, srcValue51 = 0, srcValue52, srcValue53;
      srcValue50 < srcValue47;
      ++srcValue50
    )
      if ((srcValue52 = srcValue48[srcValue50])) {
        for (
          srcValue50 >= srcValue51 && (srcValue51 = srcValue50 + 1);
          !(srcValue53 = srcValue49[srcValue51]) && ++srcValue51 < srcValue47;

        );
        srcValue52._next = srcValue53 || null;
      }
  }
  return (
    (srcValue39 = new srcHelper104(srcValue39, srcValue36)),
    (srcValue39._enter = srcValue40),
    (srcValue39._exit = srcValue41),
    srcValue39
  );
}
function srcHelper37(srcParam259) {
  return typeof srcParam259 == "object" && "length" in srcParam259
    ? srcParam259
    : Array.from(srcParam259);
}
function srcHelper38() {
  return new srcHelper104(this._exit || this._groups.map(be), this._parents);
}
function srcHelper39(srcParam58, srcParam59, srcParam60) {
  var srcValue229 = this.enter(),
    srcValue230 = this,
    srcValue231 = this.exit();
  return (
    typeof srcParam58 == "function"
      ? ((srcValue229 = srcParam58(srcValue229)),
        (srcValue229 &&= srcValue229.selection()))
      : (srcValue229 = srcValue229.append(srcParam58 + "")),
    srcParam59 != null &&
      ((srcValue230 = srcParam59(srcValue230)),
      (srcValue230 &&= srcValue230.selection())),
    srcParam60 == null ? srcValue231.remove() : srcParam60(srcValue231),
    srcValue229 && srcValue230
      ? srcValue229.merge(srcValue230).order()
      : srcValue230
  );
}
function srcHelper40(srcParam31) {
  for (
    var srcValue122 = srcParam31.selection
        ? srcParam31.selection()
        : srcParam31,
      srcValue123 = this._groups,
      srcValue124 = srcValue122._groups,
      srcValue125 = srcValue123.length,
      srcValue126 = srcValue124.length,
      srcValue127 = Math.min(srcValue125, srcValue126),
      srcValue128 = Array(srcValue125),
      srcValue129 = 0;
    srcValue129 < srcValue127;
    ++srcValue129
  )
    for (
      var srcValue130 = srcValue123[srcValue129],
        srcValue131 = srcValue124[srcValue129],
        srcValue132 = srcValue130.length,
        srcValue133 = (srcValue128[srcValue129] = Array(srcValue132)),
        srcValue134,
        srcValue135 = 0;
      srcValue135 < srcValue132;
      ++srcValue135
    )
      (srcValue134 = srcValue130[srcValue135] || srcValue131[srcValue135]) &&
        (srcValue133[srcValue135] = srcValue134);
  for (; srcValue129 < srcValue125; ++srcValue129)
    srcValue128[srcValue129] = srcValue123[srcValue129];
  return new srcHelper104(srcValue128, this._parents);
}
function srcHelper41() {
  for (
    var srcValue255 = this._groups,
      srcValue256 = -1,
      srcValue257 = srcValue255.length;
    ++srcValue256 < srcValue257;

  )
    for (
      var srcValue258 = srcValue255[srcValue256],
        srcValue259 = srcValue258.length - 1,
        srcValue260 = srcValue258[srcValue259],
        srcValue261;
      --srcValue259 >= 0;

    )
      (srcValue261 = srcValue258[srcValue259]) &&
        (srcValue260 &&
          srcValue261.compareDocumentPosition(srcValue260) ^ 4 &&
          srcValue260.parentNode.insertBefore(srcValue261, srcValue260),
        (srcValue260 = srcValue261));
  return this;
}
function srcHelper42(srcParam44) {
  srcParam44 ||= srcHelper43;
  function srcHelper190(srcParam284, srcParam285) {
    return srcParam284 && srcParam285
      ? srcParam44(srcParam284.__data__, srcParam285.__data__)
      : !srcParam284 - !srcParam285;
  }
  for (
    var srcValue171 = this._groups,
      srcValue172 = srcValue171.length,
      srcValue173 = Array(srcValue172),
      srcValue174 = 0;
    srcValue174 < srcValue172;
    ++srcValue174
  ) {
    for (
      var srcValue175 = srcValue171[srcValue174],
        srcValue176 = srcValue175.length,
        srcValue177 = (srcValue173[srcValue174] = Array(srcValue176)),
        srcValue178,
        srcValue179 = 0;
      srcValue179 < srcValue176;
      ++srcValue179
    )
      (srcValue178 = srcValue175[srcValue179]) &&
        (srcValue177[srcValue179] = srcValue178);
    srcValue177.sort(srcHelper190);
  }
  return new srcHelper104(srcValue173, this._parents).order();
}
function srcHelper43(srcParam312, srcParam313) {
  return srcParam312 < srcParam313
    ? -1
    : srcParam312 > srcParam313
      ? 1
      : srcParam312 >= srcParam313
        ? 0
        : NaN;
}
function srcHelper44() {
  var srcValue405 = arguments[0];
  return ((arguments[0] = this), srcValue405.apply(null, arguments), this);
}
function srcHelper45() {
  return Array.from(this);
}
function srcHelper46() {
  for (
    var srcValue335 = this._groups,
      srcValue336 = 0,
      srcValue337 = srcValue335.length;
    srcValue336 < srcValue337;
    ++srcValue336
  )
    for (
      var srcValue338 = srcValue335[srcValue336],
        srcValue339 = 0,
        srcValue340 = srcValue338.length;
      srcValue339 < srcValue340;
      ++srcValue339
    ) {
      var srcValue341 = srcValue338[srcValue339];
      if (srcValue341) return srcValue341;
    }
  return null;
}
function srcHelper47() {
  let srcValue434 = 0;
  for (let srcValue438 of this) ++srcValue434;
  return srcValue434;
}
function srcHelper48() {
  return !this.node();
}
function srcHelper49(srcParam135) {
  for (
    var srcValue309 = this._groups,
      srcValue310 = 0,
      srcValue311 = srcValue309.length;
    srcValue310 < srcValue311;
    ++srcValue310
  )
    for (
      var srcValue312 = srcValue309[srcValue310],
        srcValue313 = 0,
        srcValue314 = srcValue312.length,
        srcValue315;
      srcValue313 < srcValue314;
      ++srcValue313
    )
      (srcValue315 = srcValue312[srcValue313]) &&
        srcParam135.call(
          srcValue315,
          srcValue315.__data__,
          srcValue313,
          srcValue312,
        );
  return this;
}
function srcHelper50(srcParam290) {
  return function () {
    this.removeAttribute(srcParam290);
  };
}
function srcHelper51(srcParam253) {
  return function () {
    this.removeAttributeNS(srcParam253.space, srcParam253.local);
  };
}
function srcHelper52(srcParam286, srcParam287) {
  return function () {
    this.setAttribute(srcParam286, srcParam287);
  };
}
function srcHelper53(srcParam245, srcParam246) {
  return function () {
    this.setAttributeNS(srcParam245.space, srcParam245.local, srcParam246);
  };
}
function srcHelper54(srcParam171, srcParam172) {
  return function () {
    var srcValue394 = srcParam172.apply(this, arguments);
    srcValue394 == null
      ? this.removeAttribute(srcParam171)
      : this.setAttribute(srcParam171, srcValue394);
  };
}
function srcHelper55(srcParam126, srcParam127) {
  return function () {
    var srcValue348 = srcParam127.apply(this, arguments);
    srcValue348 == null
      ? this.removeAttributeNS(srcParam126.space, srcParam126.local)
      : this.setAttributeNS(srcParam126.space, srcParam126.local, srcValue348);
  };
}
function srcHelper56(srcParam51, srcParam52) {
  var srcValue200 = srcHelper10(srcParam51);
  if (arguments.length < 2) {
    var srcValue201 = this.node();
    return srcValue200.local
      ? srcValue201.getAttributeNS(srcValue200.space, srcValue200.local)
      : srcValue201.getAttribute(srcValue200);
  }
  return this.each(
    (srcParam52 == null
      ? srcValue200.local
        ? srcHelper51
        : srcHelper50
      : typeof srcParam52 == "function"
        ? srcValue200.local
          ? srcHelper55
          : srcHelper54
        : srcValue200.local
          ? srcHelper53
          : srcHelper52)(srcValue200, srcParam52),
  );
}
function srcHelper57(srcParam204) {
  return (
    (srcParam204.ownerDocument && srcParam204.ownerDocument.defaultView) ||
    (srcParam204.document && srcParam204) ||
    srcParam204.defaultView
  );
}
function srcHelper58(srcParam276) {
  return function () {
    this.style.removeProperty(srcParam276);
  };
}
function srcHelper59(srcParam265, srcParam266, srcParam267) {
  return function () {
    this.style.setProperty(srcParam265, srcParam266, srcParam267);
  };
}
function srcHelper60(srcParam146, srcParam147, srcParam148) {
  return function () {
    var srcValue380 = srcParam147.apply(this, arguments);
    srcValue380 == null
      ? this.style.removeProperty(srcParam146)
      : this.style.setProperty(srcParam146, srcValue380, srcParam148);
  };
}
function srcHelper61(srcParam163, srcParam164, srcParam165) {
  return arguments.length > 1
    ? this.each(
        (srcParam164 == null
          ? srcHelper58
          : typeof srcParam164 == "function"
            ? srcHelper60
            : srcHelper59)(srcParam163, srcParam164, srcParam165 ?? ""),
      )
    : srcHelper62(this.node(), srcParam163);
}
function srcHelper62(srcParam197, srcParam198) {
  return (
    srcParam197.style.getPropertyValue(srcParam198) ||
    srcHelper57(srcParam197)
      .getComputedStyle(srcParam197, null)
      .getPropertyValue(srcParam198)
  );
}
function srcHelper63(srcParam311) {
  return function () {
    delete this[srcParam311];
  };
}
function $e(srcParam317, srcParam318) {
  return function () {
    this[srcParam317] = srcParam318;
  };
}
function srcHelper64(srcParam200, srcParam201) {
  return function () {
    var srcValue421 = srcParam201.apply(this, arguments);
    srcValue421 == null
      ? delete this[srcParam200]
      : (this[srcParam200] = srcValue421);
  };
}
function srcHelper65(srcParam186, srcParam187) {
  return arguments.length > 1
    ? this.each(
        (srcParam187 == null
          ? srcHelper63
          : typeof srcParam187 == "function"
            ? srcHelper64
            : $e)(srcParam186, srcParam187),
      )
    : this.node()[srcParam186];
}
function srcHelper66(srcParam319) {
  return srcParam319.trim().split(/^|\s+/);
}
function srcHelper67(srcParam326) {
  return srcParam326.classList || new srcHelper68(srcParam326);
}
function srcHelper68(srcParam258) {
  this._node = srcParam258;
  this._names = srcHelper66(srcParam258.getAttribute("class") || "");
}
srcHelper68.prototype = {
  add: function (srcParam184) {
    this._names.indexOf(srcParam184) < 0 &&
      (this._names.push(srcParam184),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (srcParam157) {
    var srcValue349 = this._names.indexOf(srcParam157);
    srcValue349 >= 0 &&
      (this._names.splice(srcValue349, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (srcParam321) {
    return this._names.indexOf(srcParam321) >= 0;
  },
};
function srcHelper69(srcParam268, srcParam269) {
  for (
    var srcValue428 = srcHelper67(srcParam268),
      srcValue429 = -1,
      srcValue430 = srcParam269.length;
    ++srcValue429 < srcValue430;

  )
    srcValue428.add(srcParam269[srcValue429]);
}
function srcHelper70(srcParam261, srcParam262) {
  for (
    var srcValue424 = srcHelper67(srcParam261),
      srcValue425 = -1,
      srcValue426 = srcParam262.length;
    ++srcValue425 < srcValue426;

  )
    srcValue424.remove(srcParam262[srcValue425]);
}
function at(srcParam322) {
  return function () {
    srcHelper69(this, srcParam322);
  };
}
function srcHelper71(srcParam327) {
  return function () {
    srcHelper70(this, srcParam327);
  };
}
function srcHelper72(srcParam247, srcParam248) {
  return function () {
    (srcParam248.apply(this, arguments) ? srcHelper69 : srcHelper70)(
      this,
      srcParam247,
    );
  };
}
function srcHelper73(srcParam90, srcParam91) {
  var srcValue262 = srcHelper66(srcParam90 + "");
  if (arguments.length < 2) {
    for (
      var srcValue263 = srcHelper67(this.node()),
        srcValue264 = -1,
        srcValue265 = srcValue262.length;
      ++srcValue264 < srcValue265;

    )
      if (!srcValue263.contains(srcValue262[srcValue264])) return false;
    return true;
  }
  return this.each(
    (typeof srcParam91 == "function"
      ? srcHelper72
      : srcParam91
        ? at
        : srcHelper71)(srcValue262, srcParam91),
  );
}
function srcHelper74() {
  this.textContent = "";
}
function srcHelper75(srcParam303) {
  return function () {
    this.textContent = srcParam303;
  };
}
function srcHelper76(srcParam237) {
  return function () {
    this.textContent = srcParam237.apply(this, arguments) ?? "";
  };
}
function srcHelper77(srcParam180) {
  return arguments.length
    ? this.each(
        srcParam180 == null
          ? srcHelper74
          : (typeof srcParam180 == "function" ? srcHelper76 : srcHelper75)(
              srcParam180,
            ),
      )
    : this.node().textContent;
}
function srcHelper78() {
  this.innerHTML = "";
}
function srcHelper79(srcParam308) {
  return function () {
    this.innerHTML = srcParam308;
  };
}
function srcHelper80(srcParam242) {
  return function () {
    this.innerHTML = srcParam242.apply(this, arguments) ?? "";
  };
}
function srcHelper81(srcParam185) {
  return arguments.length
    ? this.each(
        srcParam185 == null
          ? srcHelper78
          : (typeof srcParam185 == "function" ? srcHelper80 : srcHelper79)(
              srcParam185,
            ),
      )
    : this.node().innerHTML;
}
function _t() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function srcHelper82() {
  return this.each(_t);
}
function srcHelper83() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function srcHelper84() {
  return this.each(srcHelper83);
}
function srcHelper85(srcParam154) {
  var srcValue346 =
    typeof srcParam154 == "function" ? srcParam154 : srcHelper13(srcParam154);
  return this.select(function () {
    return this.appendChild(srcValue346.apply(this, arguments));
  });
}
function srcHelper86() {
  return null;
}
function srcHelper87(srcParam84, srcParam85) {
  var srcValue250 =
      typeof srcParam84 == "function" ? srcParam84 : srcHelper13(srcParam84),
    srcValue251 =
      srcParam85 == null
        ? srcHelper86
        : typeof srcParam85 == "function"
          ? srcParam85
          : srcHelper15(srcParam85);
  return this.select(function () {
    return this.insertBefore(
      srcValue250.apply(this, arguments),
      srcValue251.apply(this, arguments) || null,
    );
  });
}
function srcHelper88() {
  var srcValue432 = this.parentNode;
  srcValue432 && srcValue432.removeChild(this);
}
function srcHelper89() {
  return this.each(srcHelper88);
}
function srcHelper90() {
  var srcValue387 = this.cloneNode(false),
    srcValue388 = this.parentNode;
  return srcValue388
    ? srcValue388.insertBefore(srcValue387, this.nextSibling)
    : srcValue387;
}
function srcHelper91() {
  var srcValue389 = this.cloneNode(true),
    srcValue390 = this.parentNode;
  return srcValue390
    ? srcValue390.insertBefore(srcValue389, this.nextSibling)
    : srcValue389;
}
function srcHelper92(srcParam330) {
  return this.select(srcParam330 ? srcHelper91 : srcHelper90);
}
function srcHelper93(srcParam220) {
  return arguments.length
    ? this.property("__data__", srcParam220)
    : this.node().__data__;
}
function srcHelper94(srcParam274) {
  return function (srcParam331) {
    srcParam274.call(this, srcParam331, this.__data__);
  };
}
function srcHelper95(srcParam128) {
  return srcParam128
    .trim()
    .split(/^|\s+/)
    .map(function (item) {
      var srcValue391 = "",
        srcValue392 = item.indexOf(".");
      return (
        srcValue392 >= 0 &&
          ((srcValue391 = item.slice(srcValue392 + 1)),
          (item = item.slice(0, srcValue392))),
        {
          type: item,
          name: srcValue391,
        }
      );
    });
}
function srcHelper96(srcParam50) {
  return function () {
    var srcValue224 = this.__on;
    if (srcValue224) {
      for (
        var srcValue225 = 0,
          srcValue226 = -1,
          srcValue227 = srcValue224.length,
          srcValue228;
        srcValue225 < srcValue227;
        ++srcValue225
      ) {
        srcValue228 = srcValue224[srcValue225];
        (!srcParam50.type || srcValue228.type === srcParam50.type) &&
        srcValue228.name === srcParam50.name
          ? this.removeEventListener(
              srcValue228.type,
              srcValue228.listener,
              srcValue228.options,
            )
          : (srcValue224[++srcValue226] = srcValue228);
      }
      ++srcValue226 ? (srcValue224.length = srcValue226) : delete this.__on;
    }
  };
}
function srcHelper97(srcParam11, srcParam12, srcParam13) {
  return function () {
    var srcValue54 = this.__on,
      srcValue55,
      srcValue56 = srcHelper94(srcParam12);
    if (srcValue54) {
      for (
        var srcValue57 = 0, srcValue58 = srcValue54.length;
        srcValue57 < srcValue58;
        ++srcValue57
      )
        if (
          (srcValue55 = srcValue54[srcValue57]).type === srcParam11.type &&
          srcValue55.name === srcParam11.name
        ) {
          this.removeEventListener(
            srcValue55.type,
            srcValue55.listener,
            srcValue55.options,
          );
          this.addEventListener(
            srcValue55.type,
            (srcValue55.listener = srcValue56),
            (srcValue55.options = srcParam13),
          );
          srcValue55.value = srcParam12;
          return;
        }
    }
    this.addEventListener(srcParam11.type, srcValue56, srcParam13);
    srcValue55 = {
      type: srcParam11.type,
      name: srcParam11.name,
      value: srcParam12,
      listener: srcValue56,
      options: srcParam13,
    };
    srcValue54 ? srcValue54.push(srcValue55) : (this.__on = [srcValue55]);
  };
}
function srcHelper98(srcParam28, srcParam29, srcParam30) {
  var srcValue114 = srcHelper95(srcParam28 + ""),
    srcValue115,
    srcValue116 = srcValue114.length,
    srcValue117;
  if (arguments.length < 2) {
    var srcValue118 = this.node().__on;
    if (srcValue118) {
      for (
        var srcValue119 = 0, srcValue120 = srcValue118.length, srcValue121;
        srcValue119 < srcValue120;
        ++srcValue119
      )
        for (
          srcValue115 = 0, srcValue121 = srcValue118[srcValue119];
          srcValue115 < srcValue116;
          ++srcValue115
        )
          if (
            (srcValue117 = srcValue114[srcValue115]).type ===
              srcValue121.type &&
            srcValue117.name === srcValue121.name
          )
            return srcValue121.value;
    }
    return;
  }
  for (
    srcValue118 = srcParam29 ? srcHelper97 : srcHelper96, srcValue115 = 0;
    srcValue115 < srcValue116;
    ++srcValue115
  )
    this.each(srcValue118(srcValue114[srcValue115], srcParam29, srcParam30));
  return this;
}
function srcHelper99(srcParam61, srcParam62, event) {
  var srcValue232 = srcHelper57(srcParam61),
    srcValue233 = srcValue232.CustomEvent;
  typeof srcValue233 == "function"
    ? (srcValue233 = new srcValue233(srcParam62, event))
    : ((srcValue233 = srcValue232.document.createEvent("Event")),
      event
        ? (srcValue233.initEvent(srcParam62, event.bubbles, event.cancelable),
          (srcValue233.detail = event.detail))
        : srcValue233.initEvent(srcParam62, false, false));
  srcParam61.dispatchEvent(srcValue233);
}
function srcHelper100(srcParam294, srcParam295) {
  return function () {
    return srcHelper99(this, srcParam294, srcParam295);
  };
}
function srcHelper101(srcParam238, srcParam239) {
  return function () {
    return srcHelper99(this, srcParam238, srcParam239.apply(this, arguments));
  };
}
function srcHelper102(srcParam263, srcParam264) {
  return this.each(
    (typeof srcParam264 == "function" ? srcHelper101 : srcHelper100)(
      srcParam263,
      srcParam264,
    ),
  );
}
function* srcHelper103() {
  for (
    var srcValue360 = this._groups,
      srcValue361 = 0,
      srcValue362 = srcValue360.length;
    srcValue361 < srcValue362;
    ++srcValue361
  )
    for (
      var srcValue363 = srcValue360[srcValue361],
        srcValue364 = 0,
        srcValue365 = srcValue363.length,
        srcValue366;
      srcValue364 < srcValue365;
      ++srcValue364
    )
      (srcValue366 = srcValue363[srcValue364]) && (yield srcValue366);
}
var srcValue10 = [null];
function srcHelper104(srcParam315, srcParam316) {
  this._groups = srcParam315;
  this._parents = srcParam316;
}
function srcHelper105() {
  return new srcHelper104([[document.documentElement]], srcValue10);
}
function srcHelper106() {
  return this;
}
srcHelper104.prototype = srcHelper105.prototype = {
  constructor: srcHelper104,
  select: srcHelper16,
  selectAll: srcHelper21,
  selectChild: srcHelper26,
  selectChildren: srcHelper28,
  filter: srcHelper29,
  data: srcHelper36,
  enter: srcHelper30,
  exit: srcHelper38,
  join: srcHelper39,
  merge: srcHelper40,
  selection: srcHelper106,
  order: srcHelper41,
  sort: srcHelper42,
  call: srcHelper44,
  nodes: srcHelper45,
  node: srcHelper46,
  size: srcHelper47,
  empty: srcHelper48,
  each: srcHelper49,
  attr: srcHelper56,
  style: srcHelper61,
  property: srcHelper65,
  classed: srcHelper73,
  text: srcHelper77,
  html: srcHelper81,
  raise: srcHelper82,
  lower: srcHelper84,
  append: srcHelper85,
  insert: srcHelper87,
  remove: srcHelper89,
  clone: srcHelper92,
  datum: srcHelper93,
  on: srcHelper98,
  dispatch: srcHelper102,
  [Symbol.iterator]: srcHelper103,
};
export function Src(srcParam173) {
  return typeof srcParam173 == "string"
    ? new srcHelper104(
        [[document.querySelector(srcParam173)]],
        [document.documentElement],
      )
    : new srcHelper104([[srcParam173]], srcValue10);
}
var srcValue11 = 0,
  srcValue12 = 0,
  srcValue13 = 0,
  srcValue15,
  srcValue16,
  srcValue17 = 0,
  srcValue18 = 0,
  srcValue19 = 0,
  srcValue20 =
    typeof performance == "object" && performance.now ? performance : Date,
  srcValue21 =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (srcParam341) {
          setTimeout(srcParam341, 17);
        };
function srcHelper107() {
  return (srcValue18 ||=
    (srcValue21(srcHelper108), srcValue20.now() + srcValue19));
}
function srcHelper108() {
  srcValue18 = 0;
}
function srcHelper109() {
  this._call = this._time = this._next = null;
}
srcHelper109.prototype = srcHelper110.prototype = {
  constructor: srcHelper109,
  restart: function (srcParam86, srcParam87, srcParam88) {
    if (typeof srcParam86 != "function")
      throw TypeError("callback is not a function");
    srcParam88 =
      (srcParam88 == null ? srcHelper107() : +srcParam88) +
      (srcParam87 == null ? 0 : +srcParam87);
    !this._next &&
      srcValue16 !== this &&
      (srcValue16 ? (srcValue16._next = this) : (srcValue15 = this),
      (srcValue16 = this));
    this._call = srcParam86;
    this._time = srcParam88;
    srcHelper115();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), srcHelper115());
  },
};
function srcHelper110(srcParam296, srcParam297, srcParam298) {
  var srcValue433 = new srcHelper109();
  return (
    srcValue433.restart(srcParam296, srcParam297, srcParam298),
    srcValue433
  );
}
function srcHelper111() {
  srcHelper107();
  ++srcValue11;
  for (var srcValue397 = srcValue15, srcValue398; srcValue397; ) {
    (srcValue398 = srcValue18 - srcValue397._time) >= 0 &&
      srcValue397._call.call(undefined, srcValue398);
    srcValue397 = srcValue397._next;
  }
  --srcValue11;
}
function srcHelper112() {
  srcValue18 = (srcValue17 = srcValue20.now()) + srcValue19;
  srcValue11 = srcValue12 = 0;
  try {
    srcHelper111();
  } finally {
    srcValue11 = 0;
    srcHelper114();
    srcValue18 = 0;
  }
}
function srcHelper113() {
  var srcValue436 = srcValue20.now(),
    srcValue437 = srcValue436 - srcValue17;
  srcValue437 > 1e3 &&
    ((srcValue19 -= srcValue437), (srcValue17 = srcValue436));
}
function srcHelper114() {
  for (
    var srcValue331, srcValue332 = srcValue15, srcValue333, srcValue334 = 1 / 0;
    srcValue332;

  )
    srcValue332._call
      ? (srcValue334 > srcValue332._time && (srcValue334 = srcValue332._time),
        (srcValue331 = srcValue332),
        (srcValue332 = srcValue332._next))
      : ((srcValue333 = srcValue332._next),
        (srcValue332._next = null),
        (srcValue332 = srcValue331
          ? (srcValue331._next = srcValue333)
          : (srcValue15 = srcValue333)));
  srcValue16 = srcValue331;
  srcHelper115(srcValue334);
}
function srcHelper115(srcParam129) {
  srcValue11 ||
    ((srcValue12 &&= clearTimeout(srcValue12)),
    srcParam129 - srcValue18 > 24
      ? (srcParam129 < 1 / 0 &&
          (srcValue12 = setTimeout(
            srcHelper112,
            srcParam129 - srcValue20.now() - srcValue19,
          )),
        (srcValue13 &&= clearInterval(srcValue13)))
      : ((srcValue13 ||=
          ((srcValue17 = srcValue20.now()), setInterval(srcHelper113, 1e3))),
        (srcValue11 = 1),
        srcValue21(srcHelper112)));
}
function srcHelper116(srcParam213, srcParam214, srcParam215) {
  var srcValue403 = new srcHelper109();
  return (
    (srcParam214 = srcParam214 == null ? 0 : +srcParam214),
    srcValue403.restart(
      (srcParam344) => {
        srcValue403.stop();
        srcParam213(srcParam344 + srcParam214);
      },
      srcParam214,
      srcParam215,
    ),
    srcValue403
  );
}
var srcValue22 = srcHelper5("start", "end", "cancel", "interrupt"),
  srcValue23 = [];
function srcHelper117(
  srcParam68,
  srcParam69,
  srcParam70,
  srcParam71,
  srcParam72,
  srcParam73,
) {
  var srcValue239 = srcParam68.__transition;
  if (!srcValue239) srcParam68.__transition = {};
  else if (srcParam70 in srcValue239) return;
  srcHelper121(srcParam68, srcParam70, {
    name: srcParam69,
    index: srcParam71,
    group: srcParam72,
    on: srcValue22,
    tween: srcValue23,
    time: srcParam73.time,
    delay: srcParam73.delay,
    duration: srcParam73.duration,
    ease: srcParam73.ease,
    timer: null,
    state: 0,
  });
}
function srcHelper118(srcParam206, srcParam207) {
  var srcValue399 = srcHelper120(srcParam206, srcParam207);
  if (srcValue399.state > 0) throw Error("too late; already scheduled");
  return srcValue399;
}
function srcHelper119(srcParam211, srcParam212) {
  var srcValue402 = srcHelper120(srcParam211, srcParam212);
  if (srcValue402.state > 3) throw Error("too late; already running");
  return srcValue402;
}
function srcHelper120(srcParam202, srcParam203) {
  var srcValue393 = srcParam202.__transition;
  if (!srcValue393 || !(srcValue393 = srcValue393[srcParam203]))
    throw Error("transition not found");
  return srcValue393;
}
function srcHelper121(srcParam1, srcParam2, srcParam3) {
  var srcValue29 = srcParam1.__transition,
    srcValue30;
  srcValue29[srcParam2] = srcParam3;
  srcParam3.timer = srcHelper110(srcHelper181, 0, srcParam3.time);
  function srcHelper181(srcParam229) {
    srcParam3.state = 1;
    srcParam3.timer.restart(srcHelper182, srcParam3.delay, srcParam3.time);
    srcParam3.delay <= srcParam229 &&
      srcHelper182(srcParam229 - srcParam3.delay);
  }
  function srcHelper182(srcParam8) {
    var srcValue31, srcValue32, srcValue33, srcValue34;
    if (srcParam3.state !== 1) return srcHelper184();
    for (srcValue31 in srcValue29)
      if (
        ((srcValue34 = srcValue29[srcValue31]),
        srcValue34.name === srcParam3.name)
      ) {
        if (srcValue34.state === 3) return srcHelper116(srcHelper182);
        srcValue34.state === 4
          ? ((srcValue34.state = 6),
            srcValue34.timer.stop(),
            srcValue34.on.call(
              "interrupt",
              srcParam1,
              srcParam1.__data__,
              srcValue34.index,
              srcValue34.group,
            ),
            delete srcValue29[srcValue31])
          : +srcValue31 < srcParam2 &&
            ((srcValue34.state = 6),
            srcValue34.timer.stop(),
            srcValue34.on.call(
              "cancel",
              srcParam1,
              srcParam1.__data__,
              srcValue34.index,
              srcValue34.group,
            ),
            delete srcValue29[srcValue31]);
      }
    if (
      (srcHelper116(function () {
        srcParam3.state === 3 &&
          ((srcParam3.state = 4),
          srcParam3.timer.restart(
            srcHelper183,
            srcParam3.delay,
            srcParam3.time,
          ),
          srcHelper183(srcParam8));
      }),
      (srcParam3.state = 2),
      srcParam3.on.call(
        "start",
        srcParam1,
        srcParam1.__data__,
        srcParam3.index,
        srcParam3.group,
      ),
      srcParam3.state === 2)
    ) {
      for (
        srcParam3.state = 3,
          srcValue30 = Array((srcValue33 = srcParam3.tween.length)),
          srcValue31 = 0,
          srcValue32 = -1;
        srcValue31 < srcValue33;
        ++srcValue31
      )
        (srcValue34 = srcParam3.tween[srcValue31].value.call(
          srcParam1,
          srcParam1.__data__,
          srcParam3.index,
          srcParam3.group,
        )) && (srcValue30[++srcValue32] = srcValue34);
      srcValue30.length = srcValue32 + 1;
    }
  }
  function srcHelper183(srcParam89) {
    for (
      var srcValue252 =
          srcParam89 < srcParam3.duration
            ? srcParam3.ease.call(null, srcParam89 / srcParam3.duration)
            : (srcParam3.timer.restart(srcHelper184), (srcParam3.state = 5), 1),
        srcValue253 = -1,
        srcValue254 = srcValue30.length;
      ++srcValue253 < srcValue254;

    )
      srcValue30[srcValue253].call(srcParam1, srcValue252);
    srcParam3.state === 5 &&
      (srcParam3.on.call(
        "end",
        srcParam1,
        srcParam1.__data__,
        srcParam3.index,
        srcParam3.group,
      ),
      srcHelper184());
  }
  function srcHelper184() {
    for (var srcValue400 in ((srcParam3.state = 6),
    srcParam3.timer.stop(),
    delete srcValue29[srcParam2],
    srcValue29))
      return;
    delete srcParam1.__transition;
  }
}
function srcHelper122(srcParam33, srcParam34) {
  var srcValue162 = srcParam33.__transition,
    srcValue163,
    srcValue164,
    srcValue165 = true,
    srcValue166;
  if (srcValue162) {
    for (srcValue166 in ((srcParam34 =
      srcParam34 == null ? null : srcParam34 + ""),
    srcValue162)) {
      if ((srcValue163 = srcValue162[srcValue166]).name !== srcParam34) {
        srcValue165 = false;
        continue;
      }
      srcValue164 = srcValue163.state > 2 && srcValue163.state < 5;
      srcValue163.state = 6;
      srcValue163.timer.stop();
      srcValue163.on.call(
        srcValue164 ? "interrupt" : "cancel",
        srcParam33,
        srcParam33.__data__,
        srcValue163.index,
        srcValue163.group,
      );
      delete srcValue162[srcValue166];
    }
    srcValue165 && delete srcParam33.__transition;
  }
}
function srcHelper123(srcParam299) {
  return this.each(function () {
    srcHelper122(this, srcParam299);
  });
}
function $t(srcParam109, srcParam110) {
  var srcValue285, srcValue286;
  return function () {
    var srcValue319 = srcHelper119(this, srcParam109),
      srcValue320 = srcValue319.tween;
    if (srcValue320 !== srcValue285) {
      srcValue286 = srcValue285 = srcValue320;
      for (
        var srcValue321 = 0, srcValue322 = srcValue286.length;
        srcValue321 < srcValue322;
        ++srcValue321
      )
        if (srcValue286[srcValue321].name === srcParam110) {
          srcValue286 = srcValue286.slice();
          srcValue286.splice(srcValue321, 1);
          break;
        }
    }
    srcValue319.tween = srcValue286;
  };
}
function srcHelper124(srcParam47, srcParam48, srcParam49) {
  var srcValue198, srcValue199;
  if (typeof srcParam49 != "function") throw Error();
  return function () {
    var srcValue287 = srcHelper119(this, srcParam47),
      srcValue288 = srcValue287.tween;
    if (srcValue288 !== srcValue198) {
      srcValue199 = (srcValue198 = srcValue288).slice();
      for (
        var srcValue289 = {
            name: srcParam48,
            value: srcParam49,
          },
          srcValue290 = 0,
          srcValue291 = srcValue199.length;
        srcValue290 < srcValue291;
        ++srcValue290
      )
        if (srcValue199[srcValue290].name === srcParam48) {
          srcValue199[srcValue290] = srcValue289;
          break;
        }
      srcValue290 === srcValue291 && srcValue199.push(srcValue289);
    }
    srcValue287.tween = srcValue199;
  };
}
function srcHelper125(srcParam76, srcParam77) {
  var srcValue240 = this._id;
  if (((srcParam76 += ""), arguments.length < 2)) {
    for (
      var srcValue241 = srcHelper120(this.node(), srcValue240).tween,
        srcValue242 = 0,
        srcValue243 = srcValue241.length,
        srcValue244;
      srcValue242 < srcValue243;
      ++srcValue242
    )
      if ((srcValue244 = srcValue241[srcValue242]).name === srcParam76)
        return srcValue244.value;
    return null;
  }
  return this.each(
    (srcParam77 == null ? $t : srcHelper124)(
      srcValue240,
      srcParam76,
      srcParam77,
    ),
  );
}
function srcHelper126(srcParam130, srcParam131, srcParam132) {
  var srcValue305 = srcParam130._id;
  return (
    srcParam130.each(function () {
      var srcValue427 = srcHelper119(this, srcValue305);
      (srcValue427.value ||= {})[srcParam131] = srcParam132.apply(
        this,
        arguments,
      );
    }),
    function (srcParam336) {
      return srcHelper120(srcParam336, srcValue305).value[srcParam131];
    }
  );
}
function srcHelper127(srcParam209, srcParam210) {
  var srcValue401;
  return (
    typeof srcParam210 == "number"
      ? stringN
      : srcParam210 instanceof stringL
        ? stringR
        : (srcValue401 = stringL(srcParam210))
          ? ((srcParam210 = srcValue401), stringR)
          : stringT
  )(srcParam209, srcParam210);
}
function srcHelper128(srcParam291) {
  return function () {
    this.removeAttribute(srcParam291);
  };
}
function srcHelper129(srcParam254) {
  return function () {
    this.removeAttributeNS(srcParam254.space, srcParam254.local);
  };
}
function on(srcParam181, srcParam182, srcParam183) {
  var srcValue375,
    srcValue376 = srcParam183 + "",
    srcValue377;
  return function () {
    var srcValue420 = this.getAttribute(srcParam181);
    return srcValue420 === srcValue376
      ? null
      : srcValue420 === srcValue375
        ? srcValue377
        : (srcValue377 = srcParam182((srcValue375 = srcValue420), srcParam183));
  };
}
function srcHelper130(srcParam149, srcParam150, srcParam151) {
  var srcValue343,
    srcValue344 = srcParam151 + "",
    srcValue345;
  return function () {
    var srcValue404 = this.getAttributeNS(srcParam149.space, srcParam149.local);
    return srcValue404 === srcValue344
      ? null
      : srcValue404 === srcValue343
        ? srcValue345
        : (srcValue345 = srcParam150((srcValue343 = srcValue404), srcParam151));
  };
}
function srcHelper131(srcParam95, srcParam96, srcParam97) {
  var srcValue269, srcValue270, srcValue271;
  return function () {
    var srcValue316,
      srcValue317 = srcParam97(this),
      srcValue318;
    return srcValue317 == null
      ? void this.removeAttribute(srcParam95)
      : ((srcValue316 = this.getAttribute(srcParam95)),
        (srcValue318 = srcValue317 + ""),
        srcValue316 === srcValue318
          ? null
          : srcValue316 === srcValue269 && srcValue318 === srcValue270
            ? srcValue271
            : ((srcValue270 = srcValue318),
              (srcValue271 = srcParam96(
                (srcValue269 = srcValue316),
                srcValue317,
              ))));
  };
}
function srcHelper132(srcParam63, srcParam64, srcParam65) {
  var srcValue234, srcValue235, srcValue236;
  return function () {
    var srcValue282,
      srcValue283 = srcParam65(this),
      srcValue284;
    return srcValue283 == null
      ? void this.removeAttributeNS(srcParam63.space, srcParam63.local)
      : ((srcValue282 = this.getAttributeNS(
          srcParam63.space,
          srcParam63.local,
        )),
        (srcValue284 = srcValue283 + ""),
        srcValue282 === srcValue284
          ? null
          : srcValue282 === srcValue234 && srcValue284 === srcValue235
            ? srcValue236
            : ((srcValue235 = srcValue284),
              (srcValue236 = srcParam64(
                (srcValue234 = srcValue282),
                srcValue283,
              ))));
  };
}
function srcHelper133(srcParam92, srcParam93) {
  var srcValue266 = srcHelper10(srcParam92),
    srcValue267 = srcValue266 === "transform" ? srcValue5 : srcHelper127;
  return this.attrTween(
    srcParam92,
    typeof srcParam93 == "function"
      ? (srcValue266.local ? srcHelper132 : srcHelper131)(
          srcValue266,
          srcValue267,
          srcHelper126(this, "attr." + srcParam92, srcParam93),
        )
      : srcParam93 == null
        ? (srcValue266.local ? srcHelper129 : srcHelper128)(srcValue266)
        : (srcValue266.local ? srcHelper130 : on)(
            srcValue266,
            srcValue267,
            srcParam93,
          ),
  );
}
function srcHelper134(srcParam256, srcParam257) {
  return function (srcParam314) {
    this.setAttribute(srcParam256, srcParam257.call(this, srcParam314));
  };
}
function srcHelper135(srcParam218, srcParam219) {
  return function (srcParam275) {
    this.setAttributeNS(
      srcParam218.space,
      srcParam218.local,
      srcParam219.call(this, srcParam275),
    );
  };
}
function srcHelper136(srcParam166, srcParam167) {
  var srcValue353, srcValue354;
  function srcHelper192() {
    var srcValue417 = srcParam167.apply(this, arguments);
    return (
      srcValue417 !== srcValue354 &&
        (srcValue353 =
          (srcValue354 = srcValue417) &&
          srcHelper135(srcParam166, srcValue417)),
      srcValue353
    );
  }
  return ((srcHelper192._value = srcParam167), srcHelper192);
}
function srcHelper137(srcParam168, srcParam169) {
  var srcValue355, srcValue356;
  function srcHelper193() {
    var srcValue418 = srcParam169.apply(this, arguments);
    return (
      srcValue418 !== srcValue356 &&
        (srcValue355 =
          (srcValue356 = srcValue418) &&
          srcHelper134(srcParam168, srcValue418)),
      srcValue355
    );
  }
  return ((srcHelper193._value = srcParam169), srcHelper193);
}
function srcHelper138(srcParam66, srcParam67) {
  var srcValue237 = "attr." + srcParam66;
  if (arguments.length < 2)
    return (srcValue237 = this.tween(srcValue237)) && srcValue237._value;
  if (srcParam67 == null) return this.tween(srcValue237, null);
  if (typeof srcParam67 != "function") throw Error();
  var srcValue238 = srcHelper10(srcParam66);
  return this.tween(
    srcValue237,
    (srcValue238.local ? srcHelper136 : srcHelper137)(srcValue238, srcParam67),
  );
}
function srcHelper139(srcParam243, srcParam244) {
  return function () {
    srcHelper118(this, srcParam243).delay = +srcParam244.apply(this, arguments);
  };
}
function _n(srcParam288, srcParam289) {
  return (
    (srcParam289 = +srcParam289),
    function () {
      srcHelper118(this, srcParam288).delay = srcParam289;
    }
  );
}
function srcHelper140(srcParam170) {
  var srcValue357 = this._id;
  return arguments.length
    ? this.each(
        (typeof srcParam170 == "function" ? srcHelper139 : _n)(
          srcValue357,
          srcParam170,
        ),
      )
    : srcHelper120(this.node(), srcValue357).delay;
}
function srcHelper141(srcParam234, srcParam235) {
  return function () {
    srcHelper119(this, srcParam234).duration = +srcParam235.apply(
      this,
      arguments,
    );
  };
}
function srcHelper142(srcParam279, srcParam280) {
  return (
    (srcParam280 = +srcParam280),
    function () {
      srcHelper119(this, srcParam279).duration = srcParam280;
    }
  );
}
function srcHelper143(srcParam162) {
  var srcValue352 = this._id;
  return arguments.length
    ? this.each(
        (typeof srcParam162 == "function" ? srcHelper141 : srcHelper142)(
          srcValue352,
          srcParam162,
        ),
      )
    : srcHelper120(this.node(), srcValue352).duration;
}
function srcHelper144(srcParam216, srcParam217) {
  if (typeof srcParam217 != "function") throw Error();
  return function () {
    srcHelper119(this, srcParam216).ease = srcParam217;
  };
}
function srcHelper145(srcParam205) {
  var srcValue396 = this._id;
  return arguments.length
    ? this.each(srcHelper144(srcValue396, srcParam205))
    : srcHelper120(this.node(), srcValue396).ease;
}
function srcHelper146(srcParam174, srcParam175) {
  return function () {
    var srcValue395 = srcParam175.apply(this, arguments);
    if (typeof srcValue395 != "function") throw Error();
    srcHelper119(this, srcParam174).ease = srcValue395;
  };
}
function srcHelper147(srcParam221) {
  if (typeof srcParam221 != "function") throw Error();
  return this.each(srcHelper146(this._id, srcParam221));
}
function srcHelper148(srcParam46) {
  typeof srcParam46 != "function" && (srcParam46 = srcHelper22(srcParam46));
  for (
    var srcValue189 = this._groups,
      srcValue190 = srcValue189.length,
      srcValue191 = Array(srcValue190),
      srcValue192 = 0;
    srcValue192 < srcValue190;
    ++srcValue192
  )
    for (
      var srcValue193 = srcValue189[srcValue192],
        srcValue194 = srcValue193.length,
        srcValue195 = (srcValue191[srcValue192] = []),
        srcValue196,
        srcValue197 = 0;
      srcValue197 < srcValue194;
      ++srcValue197
    )
      (srcValue196 = srcValue193[srcValue197]) &&
        srcParam46.call(
          srcValue196,
          srcValue196.__data__,
          srcValue197,
          srcValue193,
        ) &&
        srcValue195.push(srcValue196);
  return new srcHelper174(srcValue191, this._parents, this._name, this._id);
}
function srcHelper149(srcParam25) {
  if (srcParam25._id !== this._id) throw Error();
  for (
    var srcValue99 = this._groups,
      srcValue100 = srcParam25._groups,
      srcValue101 = srcValue99.length,
      srcValue102 = srcValue100.length,
      srcValue103 = Math.min(srcValue101, srcValue102),
      srcValue104 = Array(srcValue101),
      srcValue105 = 0;
    srcValue105 < srcValue103;
    ++srcValue105
  )
    for (
      var srcValue106 = srcValue99[srcValue105],
        srcValue107 = srcValue100[srcValue105],
        srcValue108 = srcValue106.length,
        srcValue109 = (srcValue104[srcValue105] = Array(srcValue108)),
        srcValue110,
        srcValue111 = 0;
      srcValue111 < srcValue108;
      ++srcValue111
    )
      (srcValue110 = srcValue106[srcValue111] || srcValue107[srcValue111]) &&
        (srcValue109[srcValue111] = srcValue110);
  for (; srcValue105 < srcValue101; ++srcValue105)
    srcValue104[srcValue105] = srcValue99[srcValue105];
  return new srcHelper174(srcValue104, this._parents, this._name, this._id);
}
function srcHelper150(srcParam144) {
  return (srcParam144 + "")
    .trim()
    .split(/^|\s+/)
    .every(function (item) {
      var srcValue413 = item.indexOf(".");
      return (
        srcValue413 >= 0 && (item = item.slice(0, srcValue413)),
        !item || item === "start"
      );
    });
}
function srcHelper151(srcParam176, srcParam177, srcParam178) {
  var srcValue367,
    srcValue368,
    srcValue369 = srcHelper150(srcParam177) ? srcHelper118 : srcHelper119;
  return function () {
    var srcValue422 = srcValue369(this, srcParam176),
      srcValue423 = srcValue422.on;
    srcValue423 !== srcValue367 &&
      (srcValue368 = (srcValue367 = srcValue423).copy()).on(
        srcParam177,
        srcParam178,
      );
    srcValue422.on = srcValue368;
  };
}
function srcHelper152(srcParam195, srcParam196) {
  var srcValue384 = this._id;
  return arguments.length < 2
    ? srcHelper120(this.node(), srcValue384).on.on(srcParam195)
    : this.each(srcHelper151(srcValue384, srcParam195, srcParam196));
}
function srcHelper153(srcParam158) {
  return function () {
    var srcValue385 = this.parentNode;
    for (var srcValue386 in this.__transition)
      if (+srcValue386 !== srcParam158) return;
    srcValue385 && srcValue385.removeChild(this);
  };
}
function srcHelper154() {
  return this.on("end.remove", srcHelper153(this._id));
}
function srcHelper155(srcParam16) {
  var srcValue64 = this._name,
    srcValue65 = this._id;
  typeof srcParam16 != "function" && (srcParam16 = srcHelper15(srcParam16));
  for (
    var srcValue66 = this._groups,
      srcValue67 = srcValue66.length,
      srcValue68 = Array(srcValue67),
      srcValue69 = 0;
    srcValue69 < srcValue67;
    ++srcValue69
  )
    for (
      var srcValue70 = srcValue66[srcValue69],
        srcValue71 = srcValue70.length,
        srcValue72 = (srcValue68[srcValue69] = Array(srcValue71)),
        srcValue73,
        srcValue74,
        srcValue75 = 0;
      srcValue75 < srcValue71;
      ++srcValue75
    )
      (srcValue73 = srcValue70[srcValue75]) &&
        (srcValue74 = srcParam16.call(
          srcValue73,
          srcValue73.__data__,
          srcValue75,
          srcValue70,
        )) &&
        ("__data__" in srcValue73 &&
          (srcValue74.__data__ = srcValue73.__data__),
        (srcValue72[srcValue75] = srcValue74),
        srcHelper117(
          srcValue72[srcValue75],
          srcValue64,
          srcValue65,
          srcValue75,
          srcValue72,
          srcHelper120(srcValue73, srcValue65),
        ));
  return new srcHelper174(srcValue68, this._parents, srcValue64, srcValue65);
}
function srcHelper156(srcParam24) {
  var srcValue83 = this._name,
    srcValue84 = this._id;
  typeof srcParam24 != "function" && (srcParam24 = srcHelper19(srcParam24));
  for (
    var srcValue85 = this._groups,
      srcValue86 = srcValue85.length,
      srcValue87 = [],
      srcValue88 = [],
      srcValue89 = 0;
    srcValue89 < srcValue86;
    ++srcValue89
  )
    for (
      var srcValue90 = srcValue85[srcValue89],
        srcValue91 = srcValue90.length,
        srcValue92,
        srcValue93 = 0;
      srcValue93 < srcValue91;
      ++srcValue93
    )
      if ((srcValue92 = srcValue90[srcValue93])) {
        for (
          var srcValue94 = srcParam24.call(
              srcValue92,
              srcValue92.__data__,
              srcValue93,
              srcValue90,
            ),
            srcValue95,
            srcValue96 = srcHelper120(srcValue92, srcValue84),
            srcValue97 = 0,
            srcValue98 = srcValue94.length;
          srcValue97 < srcValue98;
          ++srcValue97
        )
          (srcValue95 = srcValue94[srcValue97]) &&
            srcHelper117(
              srcValue95,
              srcValue83,
              srcValue84,
              srcValue97,
              srcValue94,
              srcValue96,
            );
        srcValue87.push(srcValue94);
        srcValue88.push(srcValue92);
      }
  return new srcHelper174(srcValue87, srcValue88, srcValue83, srcValue84);
}
var srcValue24 = srcHelper105.prototype.constructor;
function srcHelper157() {
  return new srcValue24(this._groups, this._parents);
}
function srcHelper158(srcParam133, srcParam134) {
  var srcValue306, srcValue307, srcValue308;
  return function () {
    var srcValue378 = srcHelper62(this, srcParam133),
      srcValue379 =
        (this.style.removeProperty(srcParam133),
        srcHelper62(this, srcParam133));
    return srcValue378 === srcValue379
      ? null
      : srcValue378 === srcValue306 && srcValue379 === srcValue307
        ? srcValue308
        : (srcValue308 = srcParam134(
            (srcValue306 = srcValue378),
            (srcValue307 = srcValue379),
          ));
  };
}
function srcHelper159(srcParam277) {
  return function () {
    this.style.removeProperty(srcParam277);
  };
}
function srcHelper160(srcParam192, srcParam193, srcParam194) {
  var srcValue381,
    srcValue382 = srcParam194 + "",
    srcValue383;
  return function () {
    var srcValue431 = srcHelper62(this, srcParam192);
    return srcValue431 === srcValue382
      ? null
      : srcValue431 === srcValue381
        ? srcValue383
        : (srcValue383 = srcParam193((srcValue381 = srcValue431), srcParam194));
  };
}
function srcHelper161(srcParam104, srcParam105, srcParam106) {
  var srcValue273, srcValue274, srcValue275;
  return function () {
    var srcValue325 = srcHelper62(this, srcParam104),
      srcValue326 = srcParam106(this),
      srcValue327 = srcValue326 + "";
    return (
      srcValue326 ??
        (srcValue327 = srcValue326 =
          (this.style.removeProperty(srcParam104),
          srcHelper62(this, srcParam104))),
      srcValue325 === srcValue327
        ? null
        : srcValue325 === srcValue273 && srcValue327 === srcValue274
          ? srcValue275
          : ((srcValue274 = srcValue327),
            (srcValue275 = srcParam105(
              (srcValue273 = srcValue325),
              srcValue326,
            )))
    );
  };
}
function srcHelper162(srcParam107, srcParam108) {
  var srcValue276,
    srcValue277,
    srcValue278,
    srcValue279 = "style." + srcParam108,
    srcValue280 = "end." + srcValue279,
    srcValue281;
  return function () {
    var srcValue370 = srcHelper119(this, srcParam107),
      srcValue371 = srcValue370.on,
      srcValue372 =
        srcValue370.value[srcValue279] == null
          ? (srcValue281 ||= srcHelper159(srcParam108))
          : undefined;
    (srcValue371 !== srcValue276 || srcValue278 !== srcValue372) &&
      (srcValue277 = (srcValue276 = srcValue371).copy()).on(
        srcValue280,
        (srcValue278 = srcValue372),
      );
    srcValue370.on = srcValue277;
  };
}
function srcHelper163(srcParam41, srcParam42, srcParam43) {
  var srcValue170 =
    (srcParam41 += "") == "transform" ? srcValue4 : srcHelper127;
  return srcParam42 == null
    ? this.styleTween(srcParam41, srcHelper158(srcParam41, srcValue170)).on(
        "end.style." + srcParam41,
        srcHelper159(srcParam41),
      )
    : typeof srcParam42 == "function"
      ? this.styleTween(
          srcParam41,
          srcHelper161(
            srcParam41,
            srcValue170,
            srcHelper126(this, "style." + srcParam41, srcParam42),
          ),
        ).each(srcHelper162(this._id, srcParam41))
      : this.styleTween(
          srcParam41,
          srcHelper160(srcParam41, srcValue170, srcParam42),
          srcParam43,
        ).on("end.style." + srcParam41, null);
}
function srcHelper164(srcParam231, srcParam232, srcParam233) {
  return function (srcParam301) {
    this.style.setProperty(
      srcParam231,
      srcParam232.call(this, srcParam301),
      srcParam233,
    );
  };
}
function srcHelper165(srcParam159, srcParam160, srcParam161) {
  var srcValue350, srcValue351;
  function srcHelper191() {
    var srcValue412 = srcParam160.apply(this, arguments);
    return (
      srcValue412 !== srcValue351 &&
        (srcValue350 =
          (srcValue351 = srcValue412) &&
          srcHelper164(srcParam159, srcValue412, srcParam161)),
      srcValue350
    );
  }
  return ((srcHelper191._value = srcParam160), srcHelper191);
}
function srcHelper166(srcParam78, srcParam79, srcParam80) {
  var srcValue245 = "style." + (srcParam78 += "");
  if (arguments.length < 2)
    return (srcValue245 = this.tween(srcValue245)) && srcValue245._value;
  if (srcParam79 == null) return this.tween(srcValue245, null);
  if (typeof srcParam79 != "function") throw Error();
  return this.tween(
    srcValue245,
    srcHelper165(srcParam78, srcParam79, srcParam80 ?? ""),
  );
}
function srcHelper167(srcParam304) {
  return function () {
    this.textContent = srcParam304;
  };
}
function srcHelper168(srcParam278) {
  return function () {
    this.textContent = srcParam278(this) ?? "";
  };
}
function srcHelper169(srcParam199) {
  return this.tween(
    "text",
    typeof srcParam199 == "function"
      ? srcHelper168(srcHelper126(this, "text", srcParam199))
      : srcHelper167(srcParam199 == null ? "" : srcParam199 + ""),
  );
}
function srcHelper170(srcParam270) {
  return function (srcParam328) {
    this.textContent = srcParam270.call(this, srcParam328);
  };
}
function srcHelper171(srcParam179) {
  var srcValue373, srcValue374;
  function srcHelper194() {
    var srcValue419 = srcParam179.apply(this, arguments);
    return (
      srcValue419 !== srcValue374 &&
        (srcValue373 =
          (srcValue374 = srcValue419) && srcHelper170(srcValue419)),
      srcValue373
    );
  }
  return ((srcHelper194._value = srcParam179), srcHelper194);
}
function srcHelper172(srcParam94) {
  var srcValue268 = "text";
  if (arguments.length < 1)
    return (srcValue268 = this.tween(srcValue268)) && srcValue268._value;
  if (srcParam94 == null) return this.tween(srcValue268, null);
  if (typeof srcParam94 != "function") throw Error();
  return this.tween(srcValue268, srcHelper171(srcParam94));
}
function srcHelper173() {
  for (
    var srcValue151 = this._name,
      srcValue152 = this._id,
      srcValue153 = srcHelper176(),
      srcValue154 = this._groups,
      srcValue155 = srcValue154.length,
      srcValue156 = 0;
    srcValue156 < srcValue155;
    ++srcValue156
  )
    for (
      var srcValue157 = srcValue154[srcValue156],
        srcValue158 = srcValue157.length,
        srcValue159,
        srcValue160 = 0;
      srcValue160 < srcValue158;
      ++srcValue160
    )
      if ((srcValue159 = srcValue157[srcValue160])) {
        var srcValue161 = srcHelper120(srcValue159, srcValue152);
        srcHelper117(
          srcValue159,
          srcValue151,
          srcValue153,
          srcValue160,
          srcValue157,
          {
            time: srcValue161.time + srcValue161.delay + srcValue161.duration,
            delay: 0,
            duration: srcValue161.duration,
            ease: srcValue161.ease,
          },
        );
      }
  return new srcHelper174(srcValue154, this._parents, srcValue151, srcValue153);
}
function $n() {
  var srcValue146,
    srcValue147,
    srcValue148 = this,
    srcValue149 = srcValue148._id,
    srcValue150 = srcValue148.size();
  return new Promise(function (srcParam81, srcParam82) {
    var srcValue246 = {
        value: srcParam82,
      },
      srcValue247 = {
        value: function () {
          --srcValue150 === 0 && srcParam81();
        },
      };
    srcValue148.each(function () {
      var srcValue358 = srcHelper119(this, srcValue149),
        srcValue359 = srcValue358.on;
      srcValue359 !== srcValue146 &&
        ((srcValue147 = (srcValue146 = srcValue359).copy()),
        srcValue147._.cancel.push(srcValue246),
        srcValue147._.interrupt.push(srcValue246),
        srcValue147._.end.push(srcValue247));
      srcValue358.on = srcValue147;
    });
    srcValue150 === 0 && srcParam81();
  });
}
var srcValue25 = 0;
function srcHelper174(srcParam249, srcParam250, srcParam251, srcParam252) {
  this._groups = srcParam249;
  this._parents = srcParam250;
  this._name = srcParam251;
  this._id = srcParam252;
}
function srcHelper175(srcParam332) {
  return srcHelper105().transition(srcParam332);
}
function srcHelper176() {
  return ++srcValue25;
}
var srcValue26 = srcHelper105.prototype;
srcHelper174.prototype = srcHelper175.prototype = {
  constructor: srcHelper174,
  select: srcHelper155,
  selectAll: srcHelper156,
  selectChild: srcValue26.selectChild,
  selectChildren: srcValue26.selectChildren,
  filter: srcHelper148,
  merge: srcHelper149,
  selection: srcHelper157,
  transition: srcHelper173,
  call: srcValue26.call,
  nodes: srcValue26.nodes,
  node: srcValue26.node,
  size: srcValue26.size,
  empty: srcValue26.empty,
  each: srcValue26.each,
  on: srcHelper152,
  attr: srcHelper133,
  attrTween: srcHelper138,
  style: srcHelper163,
  styleTween: srcHelper166,
  text: srcHelper169,
  textTween: srcHelper172,
  remove: srcHelper154,
  tween: srcHelper125,
  delay: srcHelper140,
  duration: srcHelper143,
  ease: srcHelper145,
  easeVarying: srcHelper147,
  end: $n,
  [Symbol.iterator]: srcValue26[Symbol.iterator],
};
function srcHelper177(srcParam302) {
  return (
    ((srcParam302 *= 2) <= 1
      ? srcParam302 * srcParam302 * srcParam302
      : (srcParam302 -= 2) * srcParam302 * srcParam302 + 2) / 2
  );
}
var srcValue27 = {
  time: null,
  delay: 0,
  duration: 250,
  ease: srcHelper177,
};
function srcHelper178(srcParam155, srcParam156) {
  for (
    var srcValue347;
    !(srcValue347 = srcParam155.__transition) ||
    !(srcValue347 = srcValue347[srcParam156]);

  )
    if (!(srcParam155 = srcParam155.parentNode))
      throw Error(`transition ${srcParam156} not found`);
  return srcValue347;
}
function or(srcParam45) {
  var srcValue180, srcValue181;
  srcParam45 instanceof srcHelper174
    ? ((srcValue180 = srcParam45._id), (srcParam45 = srcParam45._name))
    : ((srcValue180 = srcHelper176()),
      ((srcValue181 = srcValue27).time = srcHelper107()),
      (srcParam45 = srcParam45 == null ? null : srcParam45 + ""));
  for (
    var srcValue182 = this._groups,
      srcValue183 = srcValue182.length,
      srcValue184 = 0;
    srcValue184 < srcValue183;
    ++srcValue184
  )
    for (
      var srcValue185 = srcValue182[srcValue184],
        srcValue186 = srcValue185.length,
        srcValue187,
        srcValue188 = 0;
      srcValue188 < srcValue186;
      ++srcValue188
    )
      (srcValue187 = srcValue185[srcValue188]) &&
        srcHelper117(
          srcValue187,
          srcParam45,
          srcValue180,
          srcValue188,
          srcValue185,
          srcValue181 || srcHelper178(srcValue187, srcValue180),
        );
  return new srcHelper174(srcValue182, this._parents, srcParam45, srcValue180);
}
srcHelper105.prototype.interrupt = srcHelper123;
srcHelper105.prototype.transition = or;
["w", "e"].map(srcHelper179);
["n", "s"].map(srcHelper179);
["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(srcHelper179);
function srcHelper179(srcParam342) {
  return {
    type: srcParam342,
  };
}
function $(srcParam323, srcParam324, srcParam325) {
  this.k = srcParam323;
  this.x = srcParam324;
  this.y = srcParam325;
}
$.prototype = {
  constructor: $,
  scale: function (srcParam282) {
    return srcParam282 === 1
      ? this
      : new $(this.k * srcParam282, this.x, this.y);
  },
  translate: function (srcParam227, srcParam228) {
    return (srcParam227 === 0) & (srcParam228 === 0)
      ? this
      : new $(
          this.k,
          this.x + this.k * srcParam227,
          this.y + this.k * srcParam228,
        );
  },
  apply: function (srcParam292) {
    return [srcParam292[0] * this.k + this.x, srcParam292[1] * this.k + this.y];
  },
  applyX: function (srcParam337) {
    return srcParam337 * this.k + this.x;
  },
  applyY: function (srcParam338) {
    return srcParam338 * this.k + this.y;
  },
  invert: function (srcParam281) {
    return [
      (srcParam281[0] - this.x) / this.k,
      (srcParam281[1] - this.y) / this.k,
    ];
  },
  invertX: function (srcParam334) {
    return (srcParam334 - this.x) / this.k;
  },
  invertY: function (srcParam335) {
    return (srcParam335 - this.y) / this.k;
  },
  rescaleX: function (srcParam224) {
    return srcParam224
      .copy()
      .domain(
        srcParam224
          .range()
          .map(this.invertX, this)
          .map(srcParam224.invert, srcParam224),
      );
  },
  rescaleY: function (srcParam225) {
    return srcParam225
      .copy()
      .domain(
        srcParam225
          .range()
          .map(this.invertY, this)
          .map(srcParam225.invert, srcParam225),
      );
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var srcValue28 = new $(1, 0, 0);
srcHelper180.prototype = $.prototype;
function srcHelper180(srcParam240) {
  for (; !srcParam240.__zoom; )
    if (!(srcParam240 = srcParam240.parentNode)) return srcValue28;
  return srcParam240.__zoom;
}
