// Restored from ref/webview/assets/handle-D9lWAd6M.js
// Flat boundary. Vendored handle chunk restored from the Codex webview bundle.
import {
  classifyMarkdownCharacterCode,
  markdownNodeToText,
} from "./markdown-renderer";
var handleS = function (handleParam46) {
  if (handleParam46 == null) return handleHelper5;
  if (typeof handleParam46 == "function") return handleHelper4(handleParam46);
  if (typeof handleParam46 == "object")
    return Array.isArray(handleParam46)
      ? handleHelper1(handleParam46)
      : handleHelper2(handleParam46);
  if (typeof handleParam46 == "string") return handleHelper3(handleParam46);
  throw Error("Expected function, string, or object as test");
};
function handleHelper1(handleParam65) {
  let handleValue123 = [],
    handleValue124 = -1;
  for (; ++handleValue124 < handleParam65.length; )
    handleValue123[handleValue124] = handleS(handleParam65[handleValue124]);
  return handleHelper4(handleHelper56);
  function handleHelper56(...handleParam86) {
    let _handleS = -1;
    for (; ++_handleS < handleValue123.length; )
      if (handleValue123[_handleS].apply(this, handleParam86)) return true;
    return false;
  }
}
function handleHelper2(handleParam82) {
  let handleValue133 = handleParam82;
  return handleHelper4(_handleS);
  function _handleS(__handleS) {
    let handleValue137 = __handleS,
      handleValue138;
    for (handleValue138 in handleParam82)
      if (handleValue137[handleValue138] !== handleValue133[handleValue138])
        return false;
    return true;
  }
}
function handleHelper3(handleParam94) {
  return handleHelper4(handleHelper58);
  function handleHelper58(handleParam110) {
    return handleParam110 && handleParam110.type === handleParam94;
  }
}
function handleHelper4(handleParam81) {
  return handleHelper57;
  function handleHelper57(handleParam83, _handleS, handleParam84) {
    return !!(
      handleHelper6(handleParam83) &&
      handleParam81.call(
        this,
        handleParam83,
        typeof _handleS == "number" ? _handleS : undefined,
        handleParam84 || undefined,
      )
    );
  }
}
function handleHelper5() {
  return true;
}
function handleHelper6(handleParam96) {
  return (
    typeof handleParam96 == "object" &&
    !!handleParam96 &&
    "type" in handleParam96
  );
}
function handleHelper7(handleParam112) {
  return handleParam112;
}
var handleValue1 = [];
function handleO(handleParam7, handleParam8, handleParam9, handleParam10) {
  let handleValue15;
  typeof handleParam8 == "function" && typeof handleParam9 != "function"
    ? ((handleParam10 = handleParam9), (handleParam9 = handleParam8))
    : (handleValue15 = handleParam8);
  let handleValue16 = handleS(handleValue15),
    handleValue17 = handleParam10 ? -1 : 1;
  handleHelper52(handleParam7, undefined, [])();
  function handleHelper52(handleParam17, _handleS, handleParam18) {
    let _handleO =
      handleParam17 && typeof handleParam17 == "object" ? handleParam17 : {};
    if (typeof _handleO.type == "string") {
      let handleValue119 =
        typeof _handleO.tagName == "string"
          ? _handleO.tagName
          : typeof _handleO.name == "string"
            ? _handleO.name
            : undefined;
      Object.defineProperty(handleHelper53, "name", {
        value:
          "node (" +
          handleHelper7(
            handleParam17.type +
              (handleValue119 ? "<" + handleValue119 + ">" : ""),
          ) +
          ")",
      });
    }
    return handleHelper53;
    function handleHelper53() {
      let handleValue87 = handleValue1,
        __handleO,
        handleValue88,
        handleValue89;
      if (
        (!handleParam8 ||
          handleValue16(
            handleParam17,
            _handleS,
            handleParam18[handleParam18.length - 1] || undefined,
          )) &&
        ((handleValue87 = handleHelper8(
          handleParam9(handleParam17, handleParam18),
        )),
        handleValue87[0] === false)
      )
        return handleValue87;
      if ("children" in handleParam17 && handleParam17.children) {
        let handleValue99 = handleParam17;
        if (handleValue99.children && handleValue87[0] !== "skip")
          for (
            handleValue88 =
              (handleParam10 ? handleValue99.children.length : -1) +
              handleValue17,
              handleValue89 = handleParam18.concat(handleValue99);
            handleValue88 > -1 && handleValue88 < handleValue99.children.length;

          ) {
            let handleValue135 = handleValue99.children[handleValue88];
            if (
              ((__handleO = handleHelper52(
                handleValue135,
                handleValue88,
                handleValue89,
              )()),
              __handleO[0] === false)
            )
              return __handleO;
            handleValue88 =
              typeof __handleO[1] == "number"
                ? __handleO[1]
                : handleValue88 + handleValue17;
          }
      }
      return handleValue87;
    }
  }
}
function handleHelper8(handleParam91) {
  return Array.isArray(handleParam91)
    ? handleParam91
    : typeof handleParam91 == "number"
      ? [true, handleParam91]
      : handleParam91 == null
        ? handleValue1
        : [handleParam91];
}
function handleHelper9(handleParam62, handleParam63, _handleS, handleParam64) {
  let handleValue120 = _handleS.enter("blockquote"),
    handleValue121 = _handleS.createTracker(handleParam64);
  handleValue121.move("> ");
  handleValue121.shift(2);
  let handleValue122 = _handleS.indentLines(
    _handleS.containerFlow(handleParam62, handleValue121.current()),
    handleHelper10,
  );
  return (handleValue120(), handleValue122);
}
function handleHelper10(handleParam104, handleParam105, _handleS) {
  return ">" + (_handleS ? "" : " ") + handleParam104;
}
function handleA(handleParam92, handleParam93) {
  return (
    handleHelper11(handleParam92, handleParam93.inConstruct, true) &&
    !handleHelper11(handleParam92, handleParam93.notInConstruct, false)
  );
}
function handleHelper11(handleParam71, handleParam72, _handleS) {
  if (
    (typeof handleParam72 == "string" && (handleParam72 = [handleParam72]),
    !handleParam72 || handleParam72.length === 0)
  )
    return _handleS;
  let handleValue126 = -1;
  for (; ++handleValue126 < handleParam72.length; )
    if (handleParam71.includes(handleParam72[handleValue126])) return true;
  return false;
}
function handleHelper12(handleParam66, handleParam67, _handleS, handleParam68) {
  let handleValue125 = -1;
  for (; ++handleValue125 < _handleS.unsafe.length; )
    if (
      _handleS.unsafe[handleValue125].character === "\n" &&
      handleA(_handleS.stack, _handleS.unsafe[handleValue125])
    )
      return /[ \t]/.test(handleParam68.before) ? "" : " ";
  return "\\\n";
}
function handleHelper13(handleParam51, handleParam52) {
  let _handleS = String(handleParam51),
    handleValue100 = _handleS.indexOf(handleParam52),
    handleValue101 = handleValue100,
    handleValue102 = 0,
    handleValue103 = 0;
  if (typeof handleParam52 != "string") throw TypeError("Expected substring");
  for (; handleValue100 !== -1; ) {
    handleValue100 === handleValue101
      ? ++handleValue102 > handleValue103 && (handleValue103 = handleValue102)
      : (handleValue102 = 1);
    handleValue101 = handleValue100 + handleParam52.length;
    handleValue100 = _handleS.indexOf(handleParam52, handleValue101);
  }
  return handleValue103;
}
function handleI(handleParam69, handleParam70) {
  return !!(
    handleParam70.options.fences === false &&
    handleParam69.value &&
    !handleParam69.lang &&
    /[^ \r\n]/.test(handleParam69.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(handleParam69.value)
  );
}
function handleHelper14(handleParam60) {
  let handleValue116 = handleParam60.options.fence || "`";
  if (handleValue116 !== "`" && handleValue116 !== "~")
    throw Error(
      "Cannot serialize code with `" +
        handleValue116 +
        "` for `options.fence`, expected `` ` `` or `~`",
    );
  return handleValue116;
}
function handleHelper15(handleParam19, handleParam20, _handleS, handleParam21) {
  let handleValue30 = handleHelper14(_handleS),
    handleValue31 = handleParam19.value || "",
    handleValue32 = handleValue30 === "`" ? "GraveAccent" : "Tilde";
  if (handleI(handleParam19, _handleS)) {
    let handleValue139 = _handleS.enter("codeIndented"),
      handleValue140 = _handleS.indentLines(handleValue31, handleHelper16);
    return (handleValue139(), handleValue140);
  }
  let handleValue33 = _handleS.createTracker(handleParam21),
    handleValue34 = handleValue30.repeat(
      Math.max(handleHelper13(handleValue31, handleValue30) + 1, 3),
    ),
    handleValue35 = _handleS.enter("codeFenced"),
    handleValue36 = handleValue33.move(handleValue34);
  if (handleParam19.lang) {
    let handleValue129 = _handleS.enter(`codeFencedLang${handleValue32}`);
    handleValue36 += handleValue33.move(
      _handleS.safe(handleParam19.lang, {
        before: handleValue36,
        after: " ",
        encode: ["`"],
        ...handleValue33.current(),
      }),
    );
    handleValue129();
  }
  if (handleParam19.lang && handleParam19.meta) {
    let handleValue127 = _handleS.enter(`codeFencedMeta${handleValue32}`);
    handleValue36 += handleValue33.move(" ");
    handleValue36 += handleValue33.move(
      _handleS.safe(handleParam19.meta, {
        before: handleValue36,
        after: "\n",
        encode: ["`"],
        ...handleValue33.current(),
      }),
    );
    handleValue127();
  }
  return (
    (handleValue36 += handleValue33.move("\n")),
    handleValue31 &&
      (handleValue36 += handleValue33.move(handleValue31 + "\n")),
    (handleValue36 += handleValue33.move(handleValue34)),
    handleValue35(),
    handleValue36
  );
}
function handleHelper16(handleParam106, handleParam107, _handleS) {
  return (_handleS ? "" : "    ") + handleParam106;
}
function handleHelper17(handleParam61) {
  let handleValue117 = handleParam61.options.quote || '"';
  if (handleValue117 !== '"' && handleValue117 !== "'")
    throw Error(
      "Cannot serialize title with `" +
        handleValue117 +
        "` for `options.quote`, expected `\"`, or `'`",
    );
  return handleValue117;
}
function handleHelper18(handleParam14, handleParam15, _handleS, handleParam16) {
  let handleValue24 = handleHelper17(_handleS),
    handleValue25 = handleValue24 === '"' ? "Quote" : "Apostrophe",
    handleValue26 = _handleS.enter("definition"),
    handleValue27 = _handleS.enter("label"),
    handleValue28 = _handleS.createTracker(handleParam16),
    handleValue29 = handleValue28.move("[");
  return (
    (handleValue29 += handleValue28.move(
      _handleS.safe(_handleS.associationId(handleParam14), {
        before: handleValue29,
        after: "]",
        ...handleValue28.current(),
      }),
    )),
    (handleValue29 += handleValue28.move("]: ")),
    handleValue27(),
    !handleParam14.url || /[\0- \u007F]/.test(handleParam14.url)
      ? ((handleValue27 = _handleS.enter("destinationLiteral")),
        (handleValue29 += handleValue28.move("<")),
        (handleValue29 += handleValue28.move(
          _handleS.safe(handleParam14.url, {
            before: handleValue29,
            after: ">",
            ...handleValue28.current(),
          }),
        )),
        (handleValue29 += handleValue28.move(">")))
      : ((handleValue27 = _handleS.enter("destinationRaw")),
        (handleValue29 += handleValue28.move(
          _handleS.safe(handleParam14.url, {
            before: handleValue29,
            after: handleParam14.title ? " " : "\n",
            ...handleValue28.current(),
          }),
        ))),
    handleValue27(),
    handleParam14.title &&
      ((handleValue27 = _handleS.enter(`title${handleValue25}`)),
      (handleValue29 += handleValue28.move(" " + handleValue24)),
      (handleValue29 += handleValue28.move(
        _handleS.safe(handleParam14.title, {
          before: handleValue29,
          after: handleValue24,
          ...handleValue28.current(),
        }),
      )),
      (handleValue29 += handleValue28.move(handleValue24)),
      handleValue27()),
    handleValue26(),
    handleValue29
  );
}
function handleHelper19(handleParam58) {
  let handleValue114 = handleParam58.options.emphasis || "*";
  if (handleValue114 !== "*" && handleValue114 !== "_")
    throw Error(
      "Cannot serialize emphasis with `" +
        handleValue114 +
        "` for `options.emphasis`, expected `*`, or `_`",
    );
  return handleValue114;
}
function handleR(handleParam95) {
  return "&#x" + handleParam95.toString(16).toUpperCase() + ";";
}
function handleHelper20(handleParam42, _handleS, handleParam43) {
  let handleValue85 = classifyMarkdownCharacterCode(handleParam42),
    handleValue86 = classifyMarkdownCharacterCode(_handleS);
  return handleValue85 === undefined
    ? handleValue86 === undefined
      ? handleParam43 === "_"
        ? {
            inside: true,
            outside: true,
          }
        : {
            inside: false,
            outside: false,
          }
      : handleValue86 === 1
        ? {
            inside: true,
            outside: true,
          }
        : {
            inside: false,
            outside: true,
          }
    : handleValue85 === 1
      ? handleValue86 === undefined
        ? {
            inside: false,
            outside: false,
          }
        : handleValue86 === 1
          ? {
              inside: true,
              outside: true,
            }
          : {
              inside: false,
              outside: false,
            }
      : handleValue86 === undefined
        ? {
            inside: false,
            outside: false,
          }
        : handleValue86 === 1
          ? {
              inside: true,
              outside: false,
            }
          : {
              inside: false,
              outside: false,
            };
}
handleHelper21.peek = handleHelper22;
function handleHelper21(handleParam31, handleParam32, _handleS, handleParam33) {
  let handleValue59 = handleHelper19(_handleS),
    handleValue60 = _handleS.enter("emphasis"),
    handleValue61 = _handleS.createTracker(handleParam33),
    handleValue62 = handleValue61.move(handleValue59),
    handleValue63 = handleValue61.move(
      _handleS.containerPhrasing(handleParam31, {
        after: handleValue59,
        before: handleValue62,
        ...handleValue61.current(),
      }),
    ),
    handleValue64 = handleValue63.charCodeAt(0),
    handleValue65 = handleHelper20(
      handleParam33.before.charCodeAt(handleParam33.before.length - 1),
      handleValue64,
      handleValue59,
    );
  handleValue65.inside &&
    (handleValue63 = handleR(handleValue64) + handleValue63.slice(1));
  let _handleO = handleValue63.charCodeAt(handleValue63.length - 1),
    handleValue66 = handleHelper20(
      handleParam33.after.charCodeAt(0),
      _handleO,
      handleValue59,
    );
  handleValue66.inside &&
    (handleValue63 = handleValue63.slice(0, -1) + handleR(_handleO));
  let handleValue67 = handleValue61.move(handleValue59);
  return (
    handleValue60(),
    (_handleS.attentionEncodeSurroundingInfo = {
      after: handleValue66.outside,
      before: handleValue65.outside,
    }),
    handleValue62 + handleValue63 + handleValue67
  );
}
function handleHelper22(handleParam97, handleParam98, _handleS) {
  return _handleS.options.emphasis || "*";
}
function handleHelper23(handleParam48, handleParam49, _handleS, handleParam50) {
  let handleValue96, handleValue97, handleValue98;
  typeof handleParam49 == "function" && typeof _handleS != "function"
    ? ((handleValue97 = undefined),
      (handleValue98 = handleParam49),
      (handleValue96 = _handleS))
    : ((handleValue97 = handleParam49),
      (handleValue98 = _handleS),
      (handleValue96 = handleParam50));
  handleO(handleParam48, handleValue97, handleHelper55, handleValue96);
  function handleHelper55(handleParam87, handleParam88) {
    let __handleS = handleParam88[handleParam88.length - 1],
      handleValue136 = __handleS
        ? __handleS.children.indexOf(handleParam87)
        : undefined;
    return handleValue98(handleParam87, handleValue136, __handleS);
  }
}
function handleN(handleParam53, _handleS) {
  let handleValue104 = false;
  return (
    handleHelper23(handleParam53, function (handleParam85) {
      if (
        ("value" in handleParam85 && /\r?\n|\r/.test(handleParam85.value)) ||
        handleParam85.type === "break"
      )
        return ((handleValue104 = true), false);
    }),
    !!(
      (!handleParam53.depth || handleParam53.depth < 3) &&
      markdownNodeToText(handleParam53) &&
      (_handleS.options.setext || handleValue104)
    )
  );
}
function handleHelper24(handleParam22, handleParam23, _handleS, handleParam24) {
  let handleValue37 = Math.max(Math.min(6, handleParam22.depth || 1), 1),
    handleValue38 = _handleS.createTracker(handleParam24);
  if (handleN(handleParam22, _handleS)) {
    let handleValue92 = _handleS.enter("headingSetext"),
      handleValue93 = _handleS.enter("phrasing"),
      handleValue94 = _handleS.containerPhrasing(handleParam22, {
        ...handleValue38.current(),
        before: "\n",
        after: "\n",
      });
    return (
      handleValue93(),
      handleValue92(),
      handleValue94 +
        "\n" +
        (handleValue37 === 1 ? "=" : "-").repeat(
          handleValue94.length -
            (Math.max(
              handleValue94.lastIndexOf("\r"),
              handleValue94.lastIndexOf("\n"),
            ) +
              1),
        )
    );
  }
  let handleValue39 = "#".repeat(handleValue37),
    handleValue40 = _handleS.enter("headingAtx"),
    handleValue41 = _handleS.enter("phrasing");
  handleValue38.move(handleValue39 + " ");
  let handleValue42 = _handleS.containerPhrasing(handleParam22, {
    before: "# ",
    after: "\n",
    ...handleValue38.current(),
  });
  return (
    /^[\t ]/.test(handleValue42) &&
      (handleValue42 =
        handleR(handleValue42.charCodeAt(0)) + handleValue42.slice(1)),
    (handleValue42 = handleValue42
      ? handleValue39 + " " + handleValue42
      : handleValue39),
    _handleS.options.closeAtx && (handleValue42 += " " + handleValue39),
    handleValue41(),
    handleValue40(),
    handleValue42
  );
}
handleHelper25.peek = handleHelper26;
function handleHelper25(handleParam111) {
  return handleParam111.value || "";
}
function handleHelper26() {
  return "<";
}
handleHelper27.peek = handleHelper28;
function handleHelper27(handleParam11, handleParam12, _handleS, handleParam13) {
  let handleValue18 = handleHelper17(_handleS),
    handleValue19 = handleValue18 === '"' ? "Quote" : "Apostrophe",
    handleValue20 = _handleS.enter("image"),
    handleValue21 = _handleS.enter("label"),
    handleValue22 = _handleS.createTracker(handleParam13),
    handleValue23 = handleValue22.move("![");
  return (
    (handleValue23 += handleValue22.move(
      _handleS.safe(handleParam11.alt, {
        before: handleValue23,
        after: "]",
        ...handleValue22.current(),
      }),
    )),
    (handleValue23 += handleValue22.move("](")),
    handleValue21(),
    (!handleParam11.url && handleParam11.title) ||
    /[\0- \u007F]/.test(handleParam11.url)
      ? ((handleValue21 = _handleS.enter("destinationLiteral")),
        (handleValue23 += handleValue22.move("<")),
        (handleValue23 += handleValue22.move(
          _handleS.safe(handleParam11.url, {
            before: handleValue23,
            after: ">",
            ...handleValue22.current(),
          }),
        )),
        (handleValue23 += handleValue22.move(">")))
      : ((handleValue21 = _handleS.enter("destinationRaw")),
        (handleValue23 += handleValue22.move(
          _handleS.safe(handleParam11.url, {
            before: handleValue23,
            after: handleParam11.title ? " " : ")",
            ...handleValue22.current(),
          }),
        ))),
    handleValue21(),
    handleParam11.title &&
      ((handleValue21 = _handleS.enter(`title${handleValue19}`)),
      (handleValue23 += handleValue22.move(" " + handleValue18)),
      (handleValue23 += handleValue22.move(
        _handleS.safe(handleParam11.title, {
          before: handleValue23,
          after: handleValue18,
          ...handleValue22.current(),
        }),
      )),
      (handleValue23 += handleValue22.move(handleValue18)),
      handleValue21()),
    (handleValue23 += handleValue22.move(")")),
    handleValue20(),
    handleValue23
  );
}
function handleHelper28() {
  return "!";
}
handleHelper29.peek = handleHelper30;
function handleHelper29(handleParam37, handleParam38, _handleS, handleParam39) {
  let handleValue75 = handleParam37.referenceType,
    handleValue76 = _handleS.enter("imageReference"),
    handleValue77 = _handleS.enter("label"),
    handleValue78 = _handleS.createTracker(handleParam39),
    handleValue79 = handleValue78.move("!["),
    handleValue80 = _handleS.safe(handleParam37.alt, {
      before: handleValue79,
      after: "]",
      ...handleValue78.current(),
    });
  handleValue79 += handleValue78.move(handleValue80 + "][");
  handleValue77();
  let handleValue81 = _handleS.stack;
  _handleS.stack = [];
  handleValue77 = _handleS.enter("reference");
  let _handleO = _handleS.safe(_handleS.associationId(handleParam37), {
    before: handleValue79,
    after: "]",
    ...handleValue78.current(),
  });
  return (
    handleValue77(),
    (_handleS.stack = handleValue81),
    handleValue76(),
    handleValue75 === "full" || !handleValue80 || handleValue80 !== _handleO
      ? (handleValue79 += handleValue78.move(_handleO + "]"))
      : handleValue75 === "shortcut"
        ? (handleValue79 = handleValue79.slice(0, -1))
        : (handleValue79 += handleValue78.move("]")),
    handleValue79
  );
}
function handleHelper30() {
  return "!";
}
handleHelper31.peek = handleHelper32;
function handleHelper31(handleParam40, handleParam41, _handleS) {
  let handleValue82 = handleParam40.value || "",
    handleValue83 = "`",
    handleValue84 = -1;
  for (; RegExp("(^|[^`])" + handleValue83 + "([^`]|$)").test(handleValue82); )
    handleValue83 += "`";
  for (
    /[^ \r\n]/.test(handleValue82) &&
    ((/^[ \r\n]/.test(handleValue82) && /[ \r\n]$/.test(handleValue82)) ||
      /^`|`$/.test(handleValue82)) &&
    (handleValue82 = " " + handleValue82 + " ");
    ++handleValue84 < _handleS.unsafe.length;

  ) {
    let handleValue106 = _handleS.unsafe[handleValue84],
      handleValue107 = _handleS.compilePattern(handleValue106),
      handleValue108;
    if (handleValue106.atBreak)
      for (; (handleValue108 = handleValue107.exec(handleValue82)); ) {
        let handleValue134 = handleValue108.index;
        handleValue82.charCodeAt(handleValue134) === 10 &&
          handleValue82.charCodeAt(handleValue134 - 1) === 13 &&
          handleValue134--;
        handleValue82 =
          handleValue82.slice(0, handleValue134) +
          " " +
          handleValue82.slice(handleValue108.index + 1);
      }
  }
  return handleValue83 + handleValue82 + handleValue83;
}
function handleHelper32() {
  return "`";
}
function handleHelper33(handleParam45, _handleS) {
  let handleValue91 = markdownNodeToText(handleParam45);
  return !!(
    !_handleS.options.resourceLink &&
    handleParam45.url &&
    !handleParam45.title &&
    handleParam45.children &&
    handleParam45.children.length === 1 &&
    handleParam45.children[0].type === "text" &&
    (handleValue91 === handleParam45.url ||
      "mailto:" + handleValue91 === handleParam45.url) &&
    /^[a-z][a-z+.-]+:/i.test(handleParam45.url) &&
    !/[\0- <>\u007F]/.test(handleParam45.url)
  );
}
handleHelper34.peek = handleHelper35;
function handleHelper34(handleParam1, handleParam2, _handleS, handleParam3) {
  let handleValue3 = handleHelper17(_handleS),
    handleValue4 = handleValue3 === '"' ? "Quote" : "Apostrophe",
    handleValue5 = _handleS.createTracker(handleParam3),
    handleValue6,
    handleValue7;
  if (handleHelper33(handleParam1, _handleS)) {
    let handleValue112 = _handleS.stack;
    _handleS.stack = [];
    handleValue6 = _handleS.enter("autolink");
    let handleValue113 = handleValue5.move("<");
    return (
      (handleValue113 += handleValue5.move(
        _handleS.containerPhrasing(handleParam1, {
          before: handleValue113,
          after: ">",
          ...handleValue5.current(),
        }),
      )),
      (handleValue113 += handleValue5.move(">")),
      handleValue6(),
      (_handleS.stack = handleValue112),
      handleValue113
    );
  }
  handleValue6 = _handleS.enter("link");
  handleValue7 = _handleS.enter("label");
  let handleValue8 = handleValue5.move("[");
  return (
    (handleValue8 += handleValue5.move(
      _handleS.containerPhrasing(handleParam1, {
        before: handleValue8,
        after: "](",
        ...handleValue5.current(),
      }),
    )),
    (handleValue8 += handleValue5.move("](")),
    handleValue7(),
    (!handleParam1.url && handleParam1.title) ||
    /[\0- \u007F]/.test(handleParam1.url)
      ? ((handleValue7 = _handleS.enter("destinationLiteral")),
        (handleValue8 += handleValue5.move("<")),
        (handleValue8 += handleValue5.move(
          _handleS.safe(handleParam1.url, {
            before: handleValue8,
            after: ">",
            ...handleValue5.current(),
          }),
        )),
        (handleValue8 += handleValue5.move(">")))
      : ((handleValue7 = _handleS.enter("destinationRaw")),
        (handleValue8 += handleValue5.move(
          _handleS.safe(handleParam1.url, {
            before: handleValue8,
            after: handleParam1.title ? " " : ")",
            ...handleValue5.current(),
          }),
        ))),
    handleValue7(),
    handleParam1.title &&
      ((handleValue7 = _handleS.enter(`title${handleValue4}`)),
      (handleValue8 += handleValue5.move(" " + handleValue3)),
      (handleValue8 += handleValue5.move(
        _handleS.safe(handleParam1.title, {
          before: handleValue8,
          after: handleValue3,
          ...handleValue5.current(),
        }),
      )),
      (handleValue8 += handleValue5.move(handleValue3)),
      handleValue7()),
    (handleValue8 += handleValue5.move(")")),
    handleValue6(),
    handleValue8
  );
}
function handleHelper35(handleParam108, handleParam109, _handleS) {
  return handleHelper33(handleParam108, _handleS) ? "<" : "[";
}
handleHelper36.peek = handleHelper37;
function handleHelper36(handleParam34, handleParam35, _handleS, handleParam36) {
  let handleValue68 = handleParam34.referenceType,
    handleValue69 = _handleS.enter("linkReference"),
    handleValue70 = _handleS.enter("label"),
    handleValue71 = _handleS.createTracker(handleParam36),
    handleValue72 = handleValue71.move("["),
    handleValue73 = _handleS.containerPhrasing(handleParam34, {
      before: handleValue72,
      after: "]",
      ...handleValue71.current(),
    });
  handleValue72 += handleValue71.move(handleValue73 + "][");
  handleValue70();
  let handleValue74 = _handleS.stack;
  _handleS.stack = [];
  handleValue70 = _handleS.enter("reference");
  let _handleO = _handleS.safe(_handleS.associationId(handleParam34), {
    before: handleValue72,
    after: "]",
    ...handleValue71.current(),
  });
  return (
    handleValue70(),
    (_handleS.stack = handleValue74),
    handleValue69(),
    handleValue68 === "full" || !handleValue73 || handleValue73 !== _handleO
      ? (handleValue72 += handleValue71.move(_handleO + "]"))
      : handleValue68 === "shortcut"
        ? (handleValue72 = handleValue72.slice(0, -1))
        : (handleValue72 += handleValue71.move("]")),
    handleValue72
  );
}
function handleHelper37() {
  return "[";
}
function handleHelper38(handleParam54) {
  let handleValue105 = handleParam54.options.bullet || "*";
  if (
    handleValue105 !== "*" &&
    handleValue105 !== "+" &&
    handleValue105 !== "-"
  )
    throw Error(
      "Cannot serialize items with `" +
        handleValue105 +
        "` for `options.bullet`, expected `*`, `+`, or `-`",
    );
  return handleValue105;
}
function handleHelper39(handleParam44) {
  let handleValue90 = handleHelper38(handleParam44),
    _handleS = handleParam44.options.bulletOther;
  if (!_handleS) return handleValue90 === "*" ? "-" : "*";
  if (_handleS !== "*" && _handleS !== "+" && _handleS !== "-")
    throw Error(
      "Cannot serialize items with `" +
        _handleS +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
    );
  if (_handleS === handleValue90)
    throw Error(
      "Expected `bullet` (`" +
        handleValue90 +
        "`) and `bulletOther` (`" +
        _handleS +
        "`) to be different",
    );
  return _handleS;
}
function handleHelper40(handleParam55) {
  let handleValue109 = handleParam55.options.bulletOrdered || ".";
  if (handleValue109 !== "." && handleValue109 !== ")")
    throw Error(
      "Cannot serialize items with `" +
        handleValue109 +
        "` for `options.bulletOrdered`, expected `.` or `)`",
    );
  return handleValue109;
}
function handleHelper41(handleParam57) {
  let handleValue111 = handleParam57.options.rule || "*";
  if (
    handleValue111 !== "*" &&
    handleValue111 !== "-" &&
    handleValue111 !== "_"
  )
    throw Error(
      "Cannot serialize rules with `" +
        handleValue111 +
        "` for `options.rule`, expected `*`, `-`, or `_`",
    );
  return handleValue111;
}
function handleHelper42(handleParam4, handleParam5, _handleS, handleParam6) {
  let handleValue9 = _handleS.enter("list"),
    handleValue10 = _handleS.bulletCurrent,
    handleValue11 = handleParam4.ordered
      ? handleHelper40(_handleS)
      : handleHelper38(_handleS),
    handleValue12 = handleParam4.ordered
      ? handleValue11 === "."
        ? ")"
        : "."
      : handleHelper39(_handleS),
    handleValue13 =
      handleParam5 && _handleS.bulletLastUsed
        ? handleValue11 === _handleS.bulletLastUsed
        : false;
  if (!handleParam4.ordered) {
    let handleValue43 = handleParam4.children
      ? handleParam4.children[0]
      : undefined;
    if (
      ((handleValue11 === "*" || handleValue11 === "-") &&
        handleValue43 &&
        (!handleValue43.children || !handleValue43.children[0]) &&
        _handleS.stack[_handleS.stack.length - 1] === "list" &&
        _handleS.stack[_handleS.stack.length - 2] === "listItem" &&
        _handleS.stack[_handleS.stack.length - 3] === "list" &&
        _handleS.stack[_handleS.stack.length - 4] === "listItem" &&
        _handleS.indexStack[_handleS.indexStack.length - 1] === 0 &&
        _handleS.indexStack[_handleS.indexStack.length - 2] === 0 &&
        _handleS.indexStack[_handleS.indexStack.length - 3] === 0 &&
        (handleValue13 = true),
      handleHelper41(_handleS) === handleValue11 && handleValue43)
    ) {
      let handleValue118 = -1;
      for (; ++handleValue118 < handleParam4.children.length; ) {
        let __handleS = handleParam4.children[handleValue118];
        if (
          __handleS &&
          __handleS.type === "listItem" &&
          __handleS.children &&
          __handleS.children[0] &&
          __handleS.children[0].type === "thematicBreak"
        ) {
          handleValue13 = true;
          break;
        }
      }
    }
  }
  handleValue13 && (handleValue11 = handleValue12);
  _handleS.bulletCurrent = handleValue11;
  let handleValue14 = _handleS.containerFlow(handleParam4, handleParam6);
  return (
    (_handleS.bulletLastUsed = handleValue11),
    (_handleS.bulletCurrent = handleValue10),
    handleValue9(),
    handleValue14
  );
}
function handleHelper43(handleParam47) {
  let handleValue95 = handleParam47.options.listItemIndent || "one";
  if (
    handleValue95 !== "tab" &&
    handleValue95 !== "one" &&
    handleValue95 !== "mixed"
  )
    throw Error(
      "Cannot serialize items with `" +
        handleValue95 +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
    );
  return handleValue95;
}
function handleHelper44(handleParam25, handleParam26, _handleS, handleParam27) {
  let handleValue44 = handleHelper43(_handleS),
    handleValue45 = _handleS.bulletCurrent || handleHelper38(_handleS);
  handleParam26 &&
    handleParam26.type === "list" &&
    handleParam26.ordered &&
    (handleValue45 =
      (typeof handleParam26.start == "number" && handleParam26.start > -1
        ? handleParam26.start
        : 1) +
      (_handleS.options.incrementListMarker === false
        ? 0
        : handleParam26.children.indexOf(handleParam25)) +
      handleValue45);
  let handleValue46 = handleValue45.length + 1;
  (handleValue44 === "tab" ||
    (handleValue44 === "mixed" &&
      ((handleParam26 &&
        handleParam26.type === "list" &&
        handleParam26.spread) ||
        handleParam25.spread))) &&
    (handleValue46 = Math.ceil(handleValue46 / 4) * 4);
  let handleValue47 = _handleS.createTracker(handleParam27);
  handleValue47.move(
    handleValue45 + " ".repeat(handleValue46 - handleValue45.length),
  );
  handleValue47.shift(handleValue46);
  let handleValue48 = _handleS.enter("listItem"),
    handleValue49 = _handleS.indentLines(
      _handleS.containerFlow(handleParam25, handleValue47.current()),
      handleHelper54,
    );
  return (handleValue48(), handleValue49);
  function handleHelper54(handleParam89, handleParam90, __handleS) {
    return handleParam90
      ? (__handleS ? "" : " ".repeat(handleValue46)) + handleParam89
      : (__handleS
          ? handleValue45
          : handleValue45 + " ".repeat(handleValue46 - handleValue45.length)) +
          handleParam89;
  }
}
function handleHelper45(handleParam78, handleParam79, _handleS, handleParam80) {
  let handleValue130 = _handleS.enter("paragraph"),
    handleValue131 = _handleS.enter("phrasing"),
    handleValue132 = _handleS.containerPhrasing(handleParam78, handleParam80);
  return (handleValue131(), handleValue130(), handleValue132);
}
var handleValue2 = handleS([
  "break",
  "delete",
  "emphasis",
  "footnote",
  "footnoteReference",
  "image",
  "imageReference",
  "inlineCode",
  "inlineMath",
  "link",
  "linkReference",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "strong",
  "text",
  "textDirective",
]);
function handleHelper46(handleParam73, handleParam74, _handleS, handleParam75) {
  return (
    handleParam73.children.some(function (item) {
      return handleValue2(item);
    })
      ? _handleS.containerPhrasing
      : _handleS.containerFlow
  ).call(_handleS, handleParam73, handleParam75);
}
function handleHelper47(handleParam59) {
  let handleValue115 = handleParam59.options.strong || "*";
  if (handleValue115 !== "*" && handleValue115 !== "_")
    throw Error(
      "Cannot serialize strong with `" +
        handleValue115 +
        "` for `options.strong`, expected `*`, or `_`",
    );
  return handleValue115;
}
$.peek = handleHelper48;
function $(handleParam28, handleParam29, _handleS, handleParam30) {
  let handleValue50 = handleHelper47(_handleS),
    handleValue51 = _handleS.enter("strong"),
    handleValue52 = _handleS.createTracker(handleParam30),
    handleValue53 = handleValue52.move(handleValue50 + handleValue50),
    handleValue54 = handleValue52.move(
      _handleS.containerPhrasing(handleParam28, {
        after: handleValue50,
        before: handleValue53,
        ...handleValue52.current(),
      }),
    ),
    handleValue55 = handleValue54.charCodeAt(0),
    handleValue56 = handleHelper20(
      handleParam30.before.charCodeAt(handleParam30.before.length - 1),
      handleValue55,
      handleValue50,
    );
  handleValue56.inside &&
    (handleValue54 = handleR(handleValue55) + handleValue54.slice(1));
  let _handleO = handleValue54.charCodeAt(handleValue54.length - 1),
    handleValue57 = handleHelper20(
      handleParam30.after.charCodeAt(0),
      _handleO,
      handleValue50,
    );
  handleValue57.inside &&
    (handleValue54 = handleValue54.slice(0, -1) + handleR(_handleO));
  let handleValue58 = handleValue52.move(handleValue50 + handleValue50);
  return (
    handleValue51(),
    (_handleS.attentionEncodeSurroundingInfo = {
      after: handleValue57.outside,
      before: handleValue56.outside,
    }),
    handleValue53 + handleValue54 + handleValue58
  );
}
function handleHelper48(handleParam99, handleParam100, _handleS) {
  return _handleS.options.strong || "*";
}
function handleHelper49(
  handleParam101,
  handleParam102,
  _handleS,
  handleParam103,
) {
  return _handleS.safe(handleParam101.value, handleParam103);
}
function handleHelper50(handleParam56) {
  let handleValue110 = handleParam56.options.ruleRepetition || 3;
  if (handleValue110 < 3)
    throw Error(
      "Cannot serialize rules with repetition `" +
        handleValue110 +
        "` for `options.ruleRepetition`, expected `3` or more",
    );
  return handleValue110;
}
function handleHelper51(handleParam76, handleParam77, _handleS) {
  let handleValue128 = (
    handleHelper41(_handleS) + (_handleS.options.ruleSpaces ? " " : "")
  ).repeat(handleHelper50(_handleS));
  return _handleS.options.ruleSpaces
    ? handleValue128.slice(0, -1)
    : handleValue128;
}
export const handleT = {
  blockquote: handleHelper9,
  break: handleHelper12,
  code: handleHelper15,
  definition: handleHelper18,
  emphasis: handleHelper21,
  hardBreak: handleHelper12,
  heading: handleHelper24,
  html: handleHelper25,
  image: handleHelper27,
  imageReference: handleHelper29,
  inlineCode: handleHelper31,
  link: handleHelper34,
  linkReference: handleHelper36,
  list: handleHelper42,
  listItem: handleHelper44,
  paragraph: handleHelper45,
  root: handleHelper46,
  strong: $,
  text: handleHelper49,
  thematicBreak: handleHelper51,
};
export { handleA, handleI, handleN, handleO, handleR, handleS };
