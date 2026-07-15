// Restored from ref/webview/assets/chunk-XPW4576I-C68fwtjN.js
// Flat boundary. Vendored js-yaml wrapper restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
function chunkXPW4576IHelper1(chunkXPW4576IParam230) {
  return chunkXPW4576IParam230 == null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper1, "isNothing");
function chunkXPW4576IHelper2(chunkXPW4576IParam207) {
  return typeof chunkXPW4576IParam207 == "object" && !!chunkXPW4576IParam207;
}
chunkAGHRB4JFN(chunkXPW4576IHelper2, "isObject");
function chunkXPW4576IHelper3(chunkXPW4576IParam198) {
  return Array.isArray(chunkXPW4576IParam198)
    ? chunkXPW4576IParam198
    : chunkXPW4576IHelper1(chunkXPW4576IParam198)
      ? []
      : [chunkXPW4576IParam198];
}
chunkAGHRB4JFN(chunkXPW4576IHelper3, "toArray");
function chunkXPW4576IHelper4(chunkXPW4576IParam169, chunkXPW4576IParam170) {
  var chunkXPW4576IValue394,
    chunkXPW4576IValue395,
    chunkXPW4576IValue396,
    chunkXPW4576IValue397;
  if (chunkXPW4576IParam170)
    for (
      chunkXPW4576IValue397 = Object.keys(chunkXPW4576IParam170),
        chunkXPW4576IValue394 = 0,
        chunkXPW4576IValue395 = chunkXPW4576IValue397.length;
      chunkXPW4576IValue394 < chunkXPW4576IValue395;
      chunkXPW4576IValue394 += 1
    ) {
      chunkXPW4576IValue396 = chunkXPW4576IValue397[chunkXPW4576IValue394];
      chunkXPW4576IParam169[chunkXPW4576IValue396] =
        chunkXPW4576IParam170[chunkXPW4576IValue396];
    }
  return chunkXPW4576IParam169;
}
chunkAGHRB4JFN(chunkXPW4576IHelper4, "extend");
function chunkXPW4576IHelper5(chunkXPW4576IParam182, chunkXPW4576IParam183) {
  var chunkXPW4576IValue401 = "",
    chunkXPW4576IValue402;
  for (
    chunkXPW4576IValue402 = 0;
    chunkXPW4576IValue402 < chunkXPW4576IParam183;
    chunkXPW4576IValue402 += 1
  )
    chunkXPW4576IValue401 += chunkXPW4576IParam182;
  return chunkXPW4576IValue401;
}
chunkAGHRB4JFN(chunkXPW4576IHelper5, "repeat");
function chunkXPW4576IHelper6(chunkXPW4576IParam211) {
  return chunkXPW4576IParam211 === 0 && 1 / chunkXPW4576IParam211 == -1 / 0;
}
chunkAGHRB4JFN(chunkXPW4576IHelper6, "isNegativeZero");
var chunkXPW4576IValue1 = {
  isNothing: chunkXPW4576IHelper1,
  isObject: chunkXPW4576IHelper2,
  toArray: chunkXPW4576IHelper3,
  repeat: chunkXPW4576IHelper5,
  isNegativeZero: chunkXPW4576IHelper6,
  extend: chunkXPW4576IHelper4,
};
function chunkXPW4576IHelper7(chunkXPW4576IParam118, chunkXPW4576IParam119) {
  var chunkXPW4576IValue339 = "",
    chunkXPW4576IValue340 = chunkXPW4576IParam118.reason || "(unknown reason)";
  return chunkXPW4576IParam118.mark
    ? (chunkXPW4576IParam118.mark.name &&
        (chunkXPW4576IValue339 +=
          'in "' + chunkXPW4576IParam118.mark.name + '" '),
      (chunkXPW4576IValue339 +=
        "(" +
        (chunkXPW4576IParam118.mark.line + 1) +
        ":" +
        (chunkXPW4576IParam118.mark.column + 1) +
        ")"),
      !chunkXPW4576IParam119 &&
        chunkXPW4576IParam118.mark.snippet &&
        (chunkXPW4576IValue339 += "\n\n" + chunkXPW4576IParam118.mark.snippet),
      chunkXPW4576IValue340 + " " + chunkXPW4576IValue339)
    : chunkXPW4576IValue340;
}
chunkAGHRB4JFN(chunkXPW4576IHelper7, "formatError");
function chunkXPW4576IHelper8(chunkXPW4576IParam131, chunkXPW4576IParam132) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = chunkXPW4576IParam131;
  this.mark = chunkXPW4576IParam132;
  this.message = chunkXPW4576IHelper7(this, false);
  Error.captureStackTrace
    ? Error.captureStackTrace(this, this.constructor)
    : (this.stack = Error().stack || "");
}
chunkAGHRB4JFN(chunkXPW4576IHelper8, "YAMLException$1");
chunkXPW4576IHelper8.prototype = Object.create(Error.prototype);
chunkXPW4576IHelper8.prototype.constructor = chunkXPW4576IHelper8;
chunkXPW4576IHelper8.prototype.toString = chunkAGHRB4JFN(function (
  chunkXPW4576IParam203,
) {
  return this.name + ": " + chunkXPW4576IHelper7(this, chunkXPW4576IParam203);
}, "toString");
var chunkXPW4576IValue2 = chunkXPW4576IHelper8;
function chunkXPW4576IHelper9(
  chunkXPW4576IParam125,
  chunkXPW4576IParam126,
  chunkXPW4576IParam127,
  chunkXPW4576IParam128,
  chunkXPW4576IParam129,
) {
  var chunkXPW4576IValue346 = "",
    chunkXPW4576IValue347 = "",
    chunkXPW4576IValue348 = Math.floor(chunkXPW4576IParam129 / 2) - 1;
  return (
    chunkXPW4576IParam128 - chunkXPW4576IParam126 > chunkXPW4576IValue348 &&
      ((chunkXPW4576IValue346 = " ... "),
      (chunkXPW4576IParam126 =
        chunkXPW4576IParam128 -
        chunkXPW4576IValue348 +
        chunkXPW4576IValue346.length)),
    chunkXPW4576IParam127 - chunkXPW4576IParam128 > chunkXPW4576IValue348 &&
      ((chunkXPW4576IValue347 = " ..."),
      (chunkXPW4576IParam127 =
        chunkXPW4576IParam128 +
        chunkXPW4576IValue348 -
        chunkXPW4576IValue347.length)),
    {
      str:
        chunkXPW4576IValue346 +
        chunkXPW4576IParam125
          .slice(chunkXPW4576IParam126, chunkXPW4576IParam127)
          .replace(/\t/g, "→") +
        chunkXPW4576IValue347,
      pos:
        chunkXPW4576IParam128 -
        chunkXPW4576IParam126 +
        chunkXPW4576IValue346.length,
    }
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper9, "getLine");
function chunkXPW4576IHelper10(chunkXPW4576IParam199, chunkXPW4576IParam200) {
  return (
    chunkXPW4576IValue1.repeat(
      " ",
      chunkXPW4576IParam200 - chunkXPW4576IParam199.length,
    ) + chunkXPW4576IParam199
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper10, "padStart");
function chunkXPW4576IHelper11(chunkXPW4576IParam23, chunkXPW4576IParam24) {
  if (
    ((chunkXPW4576IParam24 = Object.create(chunkXPW4576IParam24 || null)),
    !chunkXPW4576IParam23.buffer)
  )
    return null;
  chunkXPW4576IParam24.maxLength ||= 79;
  typeof chunkXPW4576IParam24.indent != "number" &&
    (chunkXPW4576IParam24.indent = 1);
  typeof chunkXPW4576IParam24.linesBefore != "number" &&
    (chunkXPW4576IParam24.linesBefore = 3);
  typeof chunkXPW4576IParam24.linesAfter != "number" &&
    (chunkXPW4576IParam24.linesAfter = 2);
  for (
    var chunkXPW4576IValue156 = /\r?\n|\r|\0/g,
      chunkXPW4576IValue157 = [0],
      chunkXPW4576IValue158 = [],
      chunkXPW4576IValue159,
      chunkXPW4576IValue160 = -1;
    (chunkXPW4576IValue159 = chunkXPW4576IValue156.exec(
      chunkXPW4576IParam23.buffer,
    ));

  ) {
    chunkXPW4576IValue158.push(chunkXPW4576IValue159.index);
    chunkXPW4576IValue157.push(
      chunkXPW4576IValue159.index + chunkXPW4576IValue159[0].length,
    );
    chunkXPW4576IParam23.position <= chunkXPW4576IValue159.index &&
      chunkXPW4576IValue160 < 0 &&
      (chunkXPW4576IValue160 = chunkXPW4576IValue157.length - 2);
  }
  chunkXPW4576IValue160 < 0 &&
    (chunkXPW4576IValue160 = chunkXPW4576IValue157.length - 1);
  var chunkXPW4576IValue161 = "",
    chunkXPW4576IValue162,
    chunkXPW4576IValue163,
    chunkXPW4576IValue164 = Math.min(
      chunkXPW4576IParam23.line + chunkXPW4576IParam24.linesAfter,
      chunkXPW4576IValue158.length,
    ).toString().length,
    chunkXPW4576IValue165 =
      chunkXPW4576IParam24.maxLength -
      (chunkXPW4576IParam24.indent + chunkXPW4576IValue164 + 3);
  for (
    chunkXPW4576IValue162 = 1;
    chunkXPW4576IValue162 <= chunkXPW4576IParam24.linesBefore &&
    !(chunkXPW4576IValue160 - chunkXPW4576IValue162 < 0);
    chunkXPW4576IValue162++
  ) {
    chunkXPW4576IValue163 = chunkXPW4576IHelper9(
      chunkXPW4576IParam23.buffer,
      chunkXPW4576IValue157[chunkXPW4576IValue160 - chunkXPW4576IValue162],
      chunkXPW4576IValue158[chunkXPW4576IValue160 - chunkXPW4576IValue162],
      chunkXPW4576IParam23.position -
        (chunkXPW4576IValue157[chunkXPW4576IValue160] -
          chunkXPW4576IValue157[chunkXPW4576IValue160 - chunkXPW4576IValue162]),
      chunkXPW4576IValue165,
    );
    chunkXPW4576IValue161 =
      chunkXPW4576IValue1.repeat(" ", chunkXPW4576IParam24.indent) +
      chunkXPW4576IHelper10(
        (chunkXPW4576IParam23.line - chunkXPW4576IValue162 + 1).toString(),
        chunkXPW4576IValue164,
      ) +
      " | " +
      chunkXPW4576IValue163.str +
      "\n" +
      chunkXPW4576IValue161;
  }
  for (
    chunkXPW4576IValue163 = chunkXPW4576IHelper9(
      chunkXPW4576IParam23.buffer,
      chunkXPW4576IValue157[chunkXPW4576IValue160],
      chunkXPW4576IValue158[chunkXPW4576IValue160],
      chunkXPW4576IParam23.position,
      chunkXPW4576IValue165,
    ),
      chunkXPW4576IValue161 +=
        chunkXPW4576IValue1.repeat(" ", chunkXPW4576IParam24.indent) +
        chunkXPW4576IHelper10(
          (chunkXPW4576IParam23.line + 1).toString(),
          chunkXPW4576IValue164,
        ) +
        " | " +
        chunkXPW4576IValue163.str +
        "\n",
      chunkXPW4576IValue161 +=
        chunkXPW4576IValue1.repeat(
          "-",
          chunkXPW4576IParam24.indent +
            chunkXPW4576IValue164 +
            3 +
            chunkXPW4576IValue163.pos,
        ) + "^\n",
      chunkXPW4576IValue162 = 1;
    chunkXPW4576IValue162 <= chunkXPW4576IParam24.linesAfter &&
    !(
      chunkXPW4576IValue160 + chunkXPW4576IValue162 >=
      chunkXPW4576IValue158.length
    );
    chunkXPW4576IValue162++
  ) {
    chunkXPW4576IValue163 = chunkXPW4576IHelper9(
      chunkXPW4576IParam23.buffer,
      chunkXPW4576IValue157[chunkXPW4576IValue160 + chunkXPW4576IValue162],
      chunkXPW4576IValue158[chunkXPW4576IValue160 + chunkXPW4576IValue162],
      chunkXPW4576IParam23.position -
        (chunkXPW4576IValue157[chunkXPW4576IValue160] -
          chunkXPW4576IValue157[chunkXPW4576IValue160 + chunkXPW4576IValue162]),
      chunkXPW4576IValue165,
    );
    chunkXPW4576IValue161 +=
      chunkXPW4576IValue1.repeat(" ", chunkXPW4576IParam24.indent) +
      chunkXPW4576IHelper10(
        (chunkXPW4576IParam23.line + chunkXPW4576IValue162 + 1).toString(),
        chunkXPW4576IValue164,
      ) +
      " | " +
      chunkXPW4576IValue163.str +
      "\n";
  }
  return chunkXPW4576IValue161.replace(/\n$/, "");
}
chunkAGHRB4JFN(chunkXPW4576IHelper11, "makeSnippet");
var chunkXPW4576IValue3 = chunkXPW4576IHelper11,
  chunkXPW4576IValue4 = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases",
  ],
  chunkXPW4576IValue5 = ["scalar", "sequence", "mapping"];
function chunkXPW4576IHelper12(chunkXPW4576IParam156) {
  var chunkXPW4576IValue382 = {};
  return (
    chunkXPW4576IParam156 !== null &&
      Object.keys(chunkXPW4576IParam156).forEach(function (item) {
        chunkXPW4576IParam156[item].forEach(function (_item) {
          chunkXPW4576IValue382[String(_item)] = item;
        });
      }),
    chunkXPW4576IValue382
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper12, "compileStyleAliases");
function chunkXPW4576IHelper13(chunkXPW4576IParam30, chunkXPW4576IParam31) {
  if (
    ((chunkXPW4576IParam31 ||= {}),
    Object.keys(chunkXPW4576IParam31).forEach(function (item) {
      if (chunkXPW4576IValue4.indexOf(item) === -1)
        throw new chunkXPW4576IValue2(
          'Unknown option "' +
            item +
            '" is met in definition of "' +
            chunkXPW4576IParam30 +
            '" YAML type.',
        );
    }),
    (this.options = chunkXPW4576IParam31),
    (this.tag = chunkXPW4576IParam30),
    (this.kind = chunkXPW4576IParam31.kind || null),
    (this.resolve =
      chunkXPW4576IParam31.resolve ||
      function () {
        return true;
      }),
    (this.construct =
      chunkXPW4576IParam31.construct ||
      function (chunkXPW4576IParam226) {
        return chunkXPW4576IParam226;
      }),
    (this.instanceOf = chunkXPW4576IParam31.instanceOf || null),
    (this.predicate = chunkXPW4576IParam31.predicate || null),
    (this.represent = chunkXPW4576IParam31.represent || null),
    (this.representName = chunkXPW4576IParam31.representName || null),
    (this.defaultStyle = chunkXPW4576IParam31.defaultStyle || null),
    (this.multi = chunkXPW4576IParam31.multi || false),
    (this.styleAliases = chunkXPW4576IHelper12(
      chunkXPW4576IParam31.styleAliases || null,
    )),
    chunkXPW4576IValue5.indexOf(this.kind) === -1)
  )
    throw new chunkXPW4576IValue2(
      'Unknown kind "' +
        this.kind +
        '" is specified for "' +
        chunkXPW4576IParam30 +
        '" YAML type.',
    );
}
chunkAGHRB4JFN(chunkXPW4576IHelper13, "Type$1");
var chunkXPW4576IValue6 = chunkXPW4576IHelper13;
function chunkXPW4576IHelper14(chunkXPW4576IParam133, chunkXPW4576IParam134) {
  var chunkXPW4576IValue351 = [];
  return (
    chunkXPW4576IParam133[chunkXPW4576IParam134].forEach(function (item) {
      var chunkXPW4576IValue383 = chunkXPW4576IValue351.length;
      chunkXPW4576IValue351.forEach(function (_item, index) {
        _item.tag === item.tag &&
          _item.kind === item.kind &&
          _item.multi === item.multi &&
          (chunkXPW4576IValue383 = index);
      });
      chunkXPW4576IValue351[chunkXPW4576IValue383] = item;
    }),
    chunkXPW4576IValue351
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper14, "compileList");
function chunkXPW4576IHelper15() {
  var chunkXPW4576IValue295 = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: [],
      },
    },
    chunkXPW4576IValue296,
    chunkXPW4576IValue297;
  function chunkXPW4576IHelper113(chunkXPW4576IParam172) {
    chunkXPW4576IParam172.multi
      ? (chunkXPW4576IValue295.multi[chunkXPW4576IParam172.kind].push(
          chunkXPW4576IParam172,
        ),
        chunkXPW4576IValue295.multi.fallback.push(chunkXPW4576IParam172))
      : (chunkXPW4576IValue295[chunkXPW4576IParam172.kind][
          chunkXPW4576IParam172.tag
        ] = chunkXPW4576IValue295.fallback[chunkXPW4576IParam172.tag] =
          chunkXPW4576IParam172);
  }
  for (
    chunkAGHRB4JFN(chunkXPW4576IHelper113, "collectType"),
      chunkXPW4576IValue296 = 0,
      chunkXPW4576IValue297 = arguments.length;
    chunkXPW4576IValue296 < chunkXPW4576IValue297;
    chunkXPW4576IValue296 += 1
  )
    arguments[chunkXPW4576IValue296].forEach(chunkXPW4576IHelper113);
  return chunkXPW4576IValue295;
}
chunkAGHRB4JFN(chunkXPW4576IHelper15, "compileMap");
function chunkXPW4576IHelper16(chunkXPW4576IParam225) {
  return this.extend(chunkXPW4576IParam225);
}
chunkAGHRB4JFN(chunkXPW4576IHelper16, "Schema$1");
chunkXPW4576IHelper16.prototype.extend = chunkAGHRB4JFN(function (
  chunkXPW4576IParam22,
) {
  var chunkXPW4576IValue153 = [],
    chunkXPW4576IValue154 = [];
  if (chunkXPW4576IParam22 instanceof chunkXPW4576IValue6)
    chunkXPW4576IValue154.push(chunkXPW4576IParam22);
  else if (Array.isArray(chunkXPW4576IParam22))
    chunkXPW4576IValue154 = chunkXPW4576IValue154.concat(chunkXPW4576IParam22);
  else if (
    chunkXPW4576IParam22 &&
    (Array.isArray(chunkXPW4576IParam22.implicit) ||
      Array.isArray(chunkXPW4576IParam22.explicit))
  ) {
    chunkXPW4576IParam22.implicit &&
      (chunkXPW4576IValue153 = chunkXPW4576IValue153.concat(
        chunkXPW4576IParam22.implicit,
      ));
    chunkXPW4576IParam22.explicit &&
      (chunkXPW4576IValue154 = chunkXPW4576IValue154.concat(
        chunkXPW4576IParam22.explicit,
      ));
  } else
    throw new chunkXPW4576IValue2(
      "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })",
    );
  chunkXPW4576IValue153.forEach(function (item) {
    if (!(item instanceof chunkXPW4576IValue6))
      throw new chunkXPW4576IValue2(
        "Specified list of YAML types (or a single Type object) contains a non-Type object.",
      );
    if (item.loadKind && item.loadKind !== "scalar")
      throw new chunkXPW4576IValue2(
        "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.",
      );
    if (item.multi)
      throw new chunkXPW4576IValue2(
        "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.",
      );
  });
  chunkXPW4576IValue154.forEach(function (item) {
    if (!(item instanceof chunkXPW4576IValue6))
      throw new chunkXPW4576IValue2(
        "Specified list of YAML types (or a single Type object) contains a non-Type object.",
      );
  });
  var chunkXPW4576IValue155 = Object.create(chunkXPW4576IHelper16.prototype);
  return (
    (chunkXPW4576IValue155.implicit = (this.implicit || []).concat(
      chunkXPW4576IValue153,
    )),
    (chunkXPW4576IValue155.explicit = (this.explicit || []).concat(
      chunkXPW4576IValue154,
    )),
    (chunkXPW4576IValue155.compiledImplicit = chunkXPW4576IHelper14(
      chunkXPW4576IValue155,
      "implicit",
    )),
    (chunkXPW4576IValue155.compiledExplicit = chunkXPW4576IHelper14(
      chunkXPW4576IValue155,
      "explicit",
    )),
    (chunkXPW4576IValue155.compiledTypeMap = chunkXPW4576IHelper15(
      chunkXPW4576IValue155.compiledImplicit,
      chunkXPW4576IValue155.compiledExplicit,
    )),
    chunkXPW4576IValue155
  );
}, "extend");
var chunkXPW4576IValue7 = new chunkXPW4576IHelper16({
  explicit: [
    new chunkXPW4576IValue6("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: chunkAGHRB4JFN(function (chunkXPW4576IParam204) {
        return chunkXPW4576IParam204 === null ? "" : chunkXPW4576IParam204;
      }, "construct"),
    }),
    new chunkXPW4576IValue6("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: chunkAGHRB4JFN(function (chunkXPW4576IParam205) {
        return chunkXPW4576IParam205 === null ? [] : chunkXPW4576IParam205;
      }, "construct"),
    }),
    new chunkXPW4576IValue6("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: chunkAGHRB4JFN(function (chunkXPW4576IParam206) {
        return chunkXPW4576IParam206 === null ? {} : chunkXPW4576IParam206;
      }, "construct"),
    }),
  ],
});
function chunkXPW4576IHelper17(chunkXPW4576IParam166) {
  if (chunkXPW4576IParam166 === null) return true;
  var chunkXPW4576IValue390 = chunkXPW4576IParam166.length;
  return (
    (chunkXPW4576IValue390 === 1 && chunkXPW4576IParam166 === "~") ||
    (chunkXPW4576IValue390 === 4 &&
      (chunkXPW4576IParam166 === "null" ||
        chunkXPW4576IParam166 === "Null" ||
        chunkXPW4576IParam166 === "NULL"))
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper17, "resolveYamlNull");
function chunkXPW4576IHelper18() {
  return null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper18, "constructYamlNull");
function chunkXPW4576IHelper19(chunkXPW4576IParam227) {
  return chunkXPW4576IParam227 === null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper19, "isNull");
var chunkXPW4576IValue8 = new chunkXPW4576IValue6("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: chunkXPW4576IHelper17,
  construct: chunkXPW4576IHelper18,
  predicate: chunkXPW4576IHelper19,
  represent: {
    canonical: chunkAGHRB4JFN(function () {
      return "~";
    }, "canonical"),
    lowercase: chunkAGHRB4JFN(function () {
      return "null";
    }, "lowercase"),
    uppercase: chunkAGHRB4JFN(function () {
      return "NULL";
    }, "uppercase"),
    camelcase: chunkAGHRB4JFN(function () {
      return "Null";
    }, "camelcase"),
    empty: chunkAGHRB4JFN(function () {
      return "";
    }, "empty"),
  },
  defaultStyle: "lowercase",
});
function chunkXPW4576IHelper20(chunkXPW4576IParam152) {
  if (chunkXPW4576IParam152 === null) return false;
  var chunkXPW4576IValue378 = chunkXPW4576IParam152.length;
  return (
    (chunkXPW4576IValue378 === 4 &&
      (chunkXPW4576IParam152 === "true" ||
        chunkXPW4576IParam152 === "True" ||
        chunkXPW4576IParam152 === "TRUE")) ||
    (chunkXPW4576IValue378 === 5 &&
      (chunkXPW4576IParam152 === "false" ||
        chunkXPW4576IParam152 === "False" ||
        chunkXPW4576IParam152 === "FALSE"))
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper20, "resolveYamlBoolean");
function chunkXPW4576IHelper21(chunkXPW4576IParam193) {
  return (
    chunkXPW4576IParam193 === "true" ||
    chunkXPW4576IParam193 === "True" ||
    chunkXPW4576IParam193 === "TRUE"
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper21, "constructYamlBoolean");
function chunkXPW4576IHelper22(chunkXPW4576IParam187) {
  return (
    Object.prototype.toString.call(chunkXPW4576IParam187) === "[object Boolean]"
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper22, "isBoolean");
var chunkXPW4576IValue9 = new chunkXPW4576IValue6("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: chunkXPW4576IHelper20,
  construct: chunkXPW4576IHelper21,
  predicate: chunkXPW4576IHelper22,
  represent: {
    lowercase: chunkAGHRB4JFN(function (chunkXPW4576IParam208) {
      return chunkXPW4576IParam208 ? "true" : "false";
    }, "lowercase"),
    uppercase: chunkAGHRB4JFN(function (chunkXPW4576IParam209) {
      return chunkXPW4576IParam209 ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: chunkAGHRB4JFN(function (chunkXPW4576IParam210) {
      return chunkXPW4576IParam210 ? "True" : "False";
    }, "camelcase"),
  },
  defaultStyle: "lowercase",
});
function chunkXPW4576IHelper23(chunkXPW4576IParam181) {
  return (
    (48 <= chunkXPW4576IParam181 && chunkXPW4576IParam181 <= 57) ||
    (65 <= chunkXPW4576IParam181 && chunkXPW4576IParam181 <= 70) ||
    (97 <= chunkXPW4576IParam181 && chunkXPW4576IParam181 <= 102)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper23, "isHexCode");
function chunkXPW4576IHelper24(chunkXPW4576IParam218) {
  return 48 <= chunkXPW4576IParam218 && chunkXPW4576IParam218 <= 55;
}
chunkAGHRB4JFN(chunkXPW4576IHelper24, "isOctCode");
function chunkXPW4576IHelper25(chunkXPW4576IParam219) {
  return 48 <= chunkXPW4576IParam219 && chunkXPW4576IParam219 <= 57;
}
chunkAGHRB4JFN(chunkXPW4576IHelper25, "isDecCode");
function chunkXPW4576IHelper26(chunkXPW4576IParam35) {
  if (chunkXPW4576IParam35 === null) return false;
  var chunkXPW4576IValue190 = chunkXPW4576IParam35.length,
    chunkXPW4576IValue191 = 0,
    chunkXPW4576IValue192 = false,
    chunkXPW4576IValue193;
  if (!chunkXPW4576IValue190) return false;
  if (
    ((chunkXPW4576IValue193 = chunkXPW4576IParam35[chunkXPW4576IValue191]),
    (chunkXPW4576IValue193 === "-" || chunkXPW4576IValue193 === "+") &&
      (chunkXPW4576IValue193 = chunkXPW4576IParam35[++chunkXPW4576IValue191]),
    chunkXPW4576IValue193 === "0")
  ) {
    if (chunkXPW4576IValue191 + 1 === chunkXPW4576IValue190) return true;
    if (
      ((chunkXPW4576IValue193 = chunkXPW4576IParam35[++chunkXPW4576IValue191]),
      chunkXPW4576IValue193 === "b")
    ) {
      for (
        chunkXPW4576IValue191++;
        chunkXPW4576IValue191 < chunkXPW4576IValue190;
        chunkXPW4576IValue191++
      )
        if (
          ((chunkXPW4576IValue193 =
            chunkXPW4576IParam35[chunkXPW4576IValue191]),
          chunkXPW4576IValue193 !== "_")
        ) {
          if (chunkXPW4576IValue193 !== "0" && chunkXPW4576IValue193 !== "1")
            return false;
          chunkXPW4576IValue192 = true;
        }
      return chunkXPW4576IValue192 && chunkXPW4576IValue193 !== "_";
    }
    if (chunkXPW4576IValue193 === "x") {
      for (
        chunkXPW4576IValue191++;
        chunkXPW4576IValue191 < chunkXPW4576IValue190;
        chunkXPW4576IValue191++
      )
        if (
          ((chunkXPW4576IValue193 =
            chunkXPW4576IParam35[chunkXPW4576IValue191]),
          chunkXPW4576IValue193 !== "_")
        ) {
          if (
            !chunkXPW4576IHelper23(
              chunkXPW4576IParam35.charCodeAt(chunkXPW4576IValue191),
            )
          )
            return false;
          chunkXPW4576IValue192 = true;
        }
      return chunkXPW4576IValue192 && chunkXPW4576IValue193 !== "_";
    }
    if (chunkXPW4576IValue193 === "o") {
      for (
        chunkXPW4576IValue191++;
        chunkXPW4576IValue191 < chunkXPW4576IValue190;
        chunkXPW4576IValue191++
      )
        if (
          ((chunkXPW4576IValue193 =
            chunkXPW4576IParam35[chunkXPW4576IValue191]),
          chunkXPW4576IValue193 !== "_")
        ) {
          if (
            !chunkXPW4576IHelper24(
              chunkXPW4576IParam35.charCodeAt(chunkXPW4576IValue191),
            )
          )
            return false;
          chunkXPW4576IValue192 = true;
        }
      return chunkXPW4576IValue192 && chunkXPW4576IValue193 !== "_";
    }
  }
  if (chunkXPW4576IValue193 === "_") return false;
  for (; chunkXPW4576IValue191 < chunkXPW4576IValue190; chunkXPW4576IValue191++)
    if (
      ((chunkXPW4576IValue193 = chunkXPW4576IParam35[chunkXPW4576IValue191]),
      chunkXPW4576IValue193 !== "_")
    ) {
      if (
        !chunkXPW4576IHelper25(
          chunkXPW4576IParam35.charCodeAt(chunkXPW4576IValue191),
        )
      )
        return false;
      chunkXPW4576IValue192 = true;
    }
  return !(!chunkXPW4576IValue192 || chunkXPW4576IValue193 === "_");
}
chunkAGHRB4JFN(chunkXPW4576IHelper26, "resolveYamlInteger");
function chunkXPW4576IHelper27(chunkXPW4576IParam96) {
  var chunkXPW4576IValue283 = chunkXPW4576IParam96,
    chunkXPW4576IValue284 = 1,
    chunkXPW4576IValue285;
  if (
    (chunkXPW4576IValue283.indexOf("_") !== -1 &&
      (chunkXPW4576IValue283 = chunkXPW4576IValue283.replace(/_/g, "")),
    (chunkXPW4576IValue285 = chunkXPW4576IValue283[0]),
    (chunkXPW4576IValue285 === "-" || chunkXPW4576IValue285 === "+") &&
      (chunkXPW4576IValue285 === "-" && (chunkXPW4576IValue284 = -1),
      (chunkXPW4576IValue283 = chunkXPW4576IValue283.slice(1)),
      (chunkXPW4576IValue285 = chunkXPW4576IValue283[0])),
    chunkXPW4576IValue283 === "0")
  )
    return 0;
  if (chunkXPW4576IValue285 === "0") {
    if (chunkXPW4576IValue283[1] === "b")
      return (
        chunkXPW4576IValue284 * parseInt(chunkXPW4576IValue283.slice(2), 2)
      );
    if (chunkXPW4576IValue283[1] === "x")
      return (
        chunkXPW4576IValue284 * parseInt(chunkXPW4576IValue283.slice(2), 16)
      );
    if (chunkXPW4576IValue283[1] === "o")
      return (
        chunkXPW4576IValue284 * parseInt(chunkXPW4576IValue283.slice(2), 8)
      );
  }
  return chunkXPW4576IValue284 * parseInt(chunkXPW4576IValue283, 10);
}
chunkAGHRB4JFN(chunkXPW4576IHelper27, "constructYamlInteger");
function chunkXPW4576IHelper28(chunkXPW4576IParam174) {
  return (
    Object.prototype.toString.call(chunkXPW4576IParam174) ===
      "[object Number]" &&
    chunkXPW4576IParam174 % 1 == 0 &&
    !chunkXPW4576IValue1.isNegativeZero(chunkXPW4576IParam174)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper28, "isInteger");
var chunkXPW4576IValue10 = new chunkXPW4576IValue6("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: chunkXPW4576IHelper26,
    construct: chunkXPW4576IHelper27,
    predicate: chunkXPW4576IHelper28,
    represent: {
      binary: chunkAGHRB4JFN(function (chunkXPW4576IParam179) {
        return chunkXPW4576IParam179 >= 0
          ? "0b" + chunkXPW4576IParam179.toString(2)
          : "-0b" + chunkXPW4576IParam179.toString(2).slice(1);
      }, "binary"),
      octal: chunkAGHRB4JFN(function (chunkXPW4576IParam180) {
        return chunkXPW4576IParam180 >= 0
          ? "0o" + chunkXPW4576IParam180.toString(8)
          : "-0o" + chunkXPW4576IParam180.toString(8).slice(1);
      }, "octal"),
      decimal: chunkAGHRB4JFN(function (chunkXPW4576IParam212) {
        return chunkXPW4576IParam212.toString(10);
      }, "decimal"),
      hexadecimal: chunkAGHRB4JFN(function (chunkXPW4576IParam171) {
        return chunkXPW4576IParam171 >= 0
          ? "0x" + chunkXPW4576IParam171.toString(16).toUpperCase()
          : "-0x" + chunkXPW4576IParam171.toString(16).toUpperCase().slice(1);
      }, "hexadecimal"),
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"],
    },
  }),
  _e = RegExp(
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$",
  );
function chunkXPW4576IHelper29(chunkXPW4576IParam189) {
  return !(
    chunkXPW4576IParam189 === null ||
    !_e.test(chunkXPW4576IParam189) ||
    chunkXPW4576IParam189[chunkXPW4576IParam189.length - 1] === "_"
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper29, "resolveYamlFloat");
function chunkXPW4576IHelper30(chunkXPW4576IParam130) {
  var chunkXPW4576IValue349 = chunkXPW4576IParam130
      .replace(/_/g, "")
      .toLowerCase(),
    chunkXPW4576IValue350 = chunkXPW4576IValue349[0] === "-" ? -1 : 1;
  return (
    "+-".indexOf(chunkXPW4576IValue349[0]) >= 0 &&
      (chunkXPW4576IValue349 = chunkXPW4576IValue349.slice(1)),
    chunkXPW4576IValue349 === ".inf"
      ? chunkXPW4576IValue350 === 1
        ? 1 / 0
        : -1 / 0
      : chunkXPW4576IValue349 === ".nan"
        ? NaN
        : chunkXPW4576IValue350 * parseFloat(chunkXPW4576IValue349, 10)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper30, "constructYamlFloat");
var be = /^[-+]?[0-9]+e/;
function chunkXPW4576IHelper31(chunkXPW4576IParam69, chunkXPW4576IParam70) {
  var chunkXPW4576IValue231;
  if (isNaN(chunkXPW4576IParam69))
    switch (chunkXPW4576IParam70) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (chunkXPW4576IParam69 === 1 / 0)
    switch (chunkXPW4576IParam70) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (chunkXPW4576IParam69 === -1 / 0)
    switch (chunkXPW4576IParam70) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (chunkXPW4576IValue1.isNegativeZero(chunkXPW4576IParam69))
    return "-0.0";
  return (
    (chunkXPW4576IValue231 = chunkXPW4576IParam69.toString(10)),
    be.test(chunkXPW4576IValue231)
      ? chunkXPW4576IValue231.replace("e", ".e")
      : chunkXPW4576IValue231
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper31, "representYamlFloat");
function chunkXPW4576IHelper32(chunkXPW4576IParam175) {
  return (
    Object.prototype.toString.call(chunkXPW4576IParam175) ===
      "[object Number]" &&
    (chunkXPW4576IParam175 % 1 != 0 ||
      chunkXPW4576IValue1.isNegativeZero(chunkXPW4576IParam175))
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper32, "isFloat");
var chunkXPW4576IValue11 = new chunkXPW4576IValue6("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: chunkXPW4576IHelper29,
    construct: chunkXPW4576IHelper30,
    predicate: chunkXPW4576IHelper32,
    represent: chunkXPW4576IHelper31,
    defaultStyle: "lowercase",
  }),
  chunkXPW4576IValue12 = chunkXPW4576IValue7.extend({
    implicit: [
      chunkXPW4576IValue8,
      chunkXPW4576IValue9,
      chunkXPW4576IValue10,
      chunkXPW4576IValue11,
    ],
  }),
  chunkXPW4576IValue13 = chunkXPW4576IValue12,
  chunkXPW4576IValue14 = RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$",
  ),
  chunkXPW4576IValue15 = RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$",
  );
function chunkXPW4576IHelper33(chunkXPW4576IParam184) {
  return chunkXPW4576IParam184 === null
    ? false
    : chunkXPW4576IValue14.exec(chunkXPW4576IParam184) !== null ||
        chunkXPW4576IValue15.exec(chunkXPW4576IParam184) !== null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper33, "resolveYamlTimestamp");
function chunkXPW4576IHelper34(chunkXPW4576IParam71) {
  var chunkXPW4576IValue232,
    chunkXPW4576IValue233,
    chunkXPW4576IValue234,
    chunkXPW4576IValue235,
    chunkXPW4576IValue236,
    chunkXPW4576IValue237,
    chunkXPW4576IValue238,
    chunkXPW4576IValue239 = 0,
    chunkXPW4576IValue240 = null,
    chunkXPW4576IValue241,
    chunkXPW4576IValue242,
    chunkXPW4576IValue243;
  if (
    ((chunkXPW4576IValue232 = chunkXPW4576IValue14.exec(chunkXPW4576IParam71)),
    chunkXPW4576IValue232 === null &&
      (chunkXPW4576IValue232 = chunkXPW4576IValue15.exec(chunkXPW4576IParam71)),
    chunkXPW4576IValue232 === null)
  )
    throw Error("Date resolve error");
  if (
    ((chunkXPW4576IValue233 = +chunkXPW4576IValue232[1]),
    (chunkXPW4576IValue234 = chunkXPW4576IValue232[2] - 1),
    (chunkXPW4576IValue235 = +chunkXPW4576IValue232[3]),
    !chunkXPW4576IValue232[4])
  )
    return new Date(
      Date.UTC(
        chunkXPW4576IValue233,
        chunkXPW4576IValue234,
        chunkXPW4576IValue235,
      ),
    );
  if (
    ((chunkXPW4576IValue236 = +chunkXPW4576IValue232[4]),
    (chunkXPW4576IValue237 = +chunkXPW4576IValue232[5]),
    (chunkXPW4576IValue238 = +chunkXPW4576IValue232[6]),
    chunkXPW4576IValue232[7])
  ) {
    for (
      chunkXPW4576IValue239 = chunkXPW4576IValue232[7].slice(0, 3);
      chunkXPW4576IValue239.length < 3;

    )
      chunkXPW4576IValue239 += "0";
    chunkXPW4576IValue239 = +chunkXPW4576IValue239;
  }
  return (
    chunkXPW4576IValue232[9] &&
      ((chunkXPW4576IValue241 = +chunkXPW4576IValue232[10]),
      (chunkXPW4576IValue242 = +(chunkXPW4576IValue232[11] || 0)),
      (chunkXPW4576IValue240 =
        (chunkXPW4576IValue241 * 60 + chunkXPW4576IValue242) * 6e4),
      chunkXPW4576IValue232[9] === "-" &&
        (chunkXPW4576IValue240 = -chunkXPW4576IValue240)),
    (chunkXPW4576IValue243 = new Date(
      Date.UTC(
        chunkXPW4576IValue233,
        chunkXPW4576IValue234,
        chunkXPW4576IValue235,
        chunkXPW4576IValue236,
        chunkXPW4576IValue237,
        chunkXPW4576IValue238,
        chunkXPW4576IValue239,
      ),
    )),
    chunkXPW4576IValue240 &&
      chunkXPW4576IValue243.setTime(
        chunkXPW4576IValue243.getTime() - chunkXPW4576IValue240,
      ),
    chunkXPW4576IValue243
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper34, "constructYamlTimestamp");
function chunkXPW4576IHelper35(chunkXPW4576IParam222) {
  return chunkXPW4576IParam222.toISOString();
}
chunkAGHRB4JFN(chunkXPW4576IHelper35, "representYamlTimestamp");
var chunkXPW4576IValue16 = new chunkXPW4576IValue6(
  "tag:yaml.org,2002:timestamp",
  {
    kind: "scalar",
    resolve: chunkXPW4576IHelper33,
    construct: chunkXPW4576IHelper34,
    instanceOf: Date,
    represent: chunkXPW4576IHelper35,
  },
);
function chunkXPW4576IHelper36(chunkXPW4576IParam213) {
  return chunkXPW4576IParam213 === "<<" || chunkXPW4576IParam213 === null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper36, "resolveYamlMerge");
var chunkXPW4576IValue17 = new chunkXPW4576IValue6("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: chunkXPW4576IHelper36,
});
function chunkXPW4576IHelper37(chunkXPW4576IParam141) {
  if (chunkXPW4576IParam141 === null) return false;
  var chunkXPW4576IValue358,
    chunkXPW4576IValue359,
    chunkXPW4576IValue360 = 0,
    chunkXPW4576IValue361 = chunkXPW4576IParam141.length;
  for (
    chunkXPW4576IValue359 = 0;
    chunkXPW4576IValue359 < chunkXPW4576IValue361;
    chunkXPW4576IValue359++
  )
    if (
      ((chunkXPW4576IValue358 =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(
          chunkXPW4576IParam141.charAt(chunkXPW4576IValue359),
        )),
      !(chunkXPW4576IValue358 > 64))
    ) {
      if (chunkXPW4576IValue358 < 0) return false;
      chunkXPW4576IValue360 += 6;
    }
  return chunkXPW4576IValue360 % 8 == 0;
}
chunkAGHRB4JFN(chunkXPW4576IHelper37, "resolveYamlBinary");
function chunkXPW4576IHelper38(chunkXPW4576IParam84) {
  var chunkXPW4576IValue259,
    chunkXPW4576IValue260,
    chunkXPW4576IValue261 = chunkXPW4576IParam84.replace(/[\r\n=]/g, ""),
    chunkXPW4576IValue262 = chunkXPW4576IValue261.length,
    chunkXPW4576IValue264 = 0,
    chunkXPW4576IValue265 = [];
  for (
    chunkXPW4576IValue259 = 0;
    chunkXPW4576IValue259 < chunkXPW4576IValue262;
    chunkXPW4576IValue259++
  ) {
    chunkXPW4576IValue259 % 4 == 0 &&
      chunkXPW4576IValue259 &&
      (chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 16) & 255),
      chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 8) & 255),
      chunkXPW4576IValue265.push(chunkXPW4576IValue264 & 255));
    chunkXPW4576IValue264 =
      (chunkXPW4576IValue264 << 6) |
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(
        chunkXPW4576IValue261.charAt(chunkXPW4576IValue259),
      );
  }
  return (
    (chunkXPW4576IValue260 = (chunkXPW4576IValue262 % 4) * 6),
    chunkXPW4576IValue260 === 0
      ? (chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 16) & 255),
        chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 8) & 255),
        chunkXPW4576IValue265.push(chunkXPW4576IValue264 & 255))
      : chunkXPW4576IValue260 === 18
        ? (chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 10) & 255),
          chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 2) & 255))
        : chunkXPW4576IValue260 === 12 &&
          chunkXPW4576IValue265.push((chunkXPW4576IValue264 >> 4) & 255),
    new Uint8Array(chunkXPW4576IValue265)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper38, "constructYamlBinary");
function chunkXPW4576IHelper39(chunkXPW4576IParam68) {
  var chunkXPW4576IValue225 = "",
    chunkXPW4576IValue226 = 0,
    chunkXPW4576IValue227,
    chunkXPW4576IValue228,
    chunkXPW4576IValue229 = chunkXPW4576IParam68.length;
  for (
    chunkXPW4576IValue227 = 0;
    chunkXPW4576IValue227 < chunkXPW4576IValue229;
    chunkXPW4576IValue227++
  ) {
    chunkXPW4576IValue227 % 3 == 0 &&
      chunkXPW4576IValue227 &&
      ((chunkXPW4576IValue225 +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
          (chunkXPW4576IValue226 >> 18) & 63
        ]),
      (chunkXPW4576IValue225 +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
          (chunkXPW4576IValue226 >> 12) & 63
        ]),
      (chunkXPW4576IValue225 +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
          (chunkXPW4576IValue226 >> 6) & 63
        ]),
      (chunkXPW4576IValue225 +=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
          chunkXPW4576IValue226 & 63
        ]));
    chunkXPW4576IValue226 =
      (chunkXPW4576IValue226 << 8) +
      chunkXPW4576IParam68[chunkXPW4576IValue227];
  }
  return (
    (chunkXPW4576IValue228 = chunkXPW4576IValue229 % 3),
    chunkXPW4576IValue228 === 0
      ? ((chunkXPW4576IValue225 +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
            (chunkXPW4576IValue226 >> 18) & 63
          ]),
        (chunkXPW4576IValue225 +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
            (chunkXPW4576IValue226 >> 12) & 63
          ]),
        (chunkXPW4576IValue225 +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
            (chunkXPW4576IValue226 >> 6) & 63
          ]),
        (chunkXPW4576IValue225 +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
            chunkXPW4576IValue226 & 63
          ]))
      : chunkXPW4576IValue228 === 2
        ? ((chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
              (chunkXPW4576IValue226 >> 10) & 63
            ]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
              (chunkXPW4576IValue226 >> 4) & 63
            ]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
              (chunkXPW4576IValue226 << 2) & 63
            ]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[64]))
        : chunkXPW4576IValue228 === 1 &&
          ((chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
              (chunkXPW4576IValue226 >> 2) & 63
            ]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[
              (chunkXPW4576IValue226 << 4) & 63
            ]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[64]),
          (chunkXPW4576IValue225 +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"[64])),
    chunkXPW4576IValue225
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper39, "representYamlBinary");
function chunkXPW4576IHelper40(chunkXPW4576IParam185) {
  return (
    Object.prototype.toString.call(chunkXPW4576IParam185) ===
    "[object Uint8Array]"
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper40, "isBinary");
var chunkXPW4576IValue19 = new chunkXPW4576IValue6("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: chunkXPW4576IHelper37,
    construct: chunkXPW4576IHelper38,
    predicate: chunkXPW4576IHelper40,
    represent: chunkXPW4576IHelper39,
  }),
  chunkXPW4576IValue20 = Object.prototype.hasOwnProperty,
  chunkXPW4576IValue21 = Object.prototype.toString;
function chunkXPW4576IHelper41(chunkXPW4576IParam100) {
  if (chunkXPW4576IParam100 === null) return true;
  var chunkXPW4576IValue298 = [],
    chunkXPW4576IValue299,
    chunkXPW4576IValue300,
    chunkXPW4576IValue301,
    chunkXPW4576IValue302,
    chunkXPW4576IValue303,
    chunkXPW4576IValue304 = chunkXPW4576IParam100;
  for (
    chunkXPW4576IValue299 = 0,
      chunkXPW4576IValue300 = chunkXPW4576IValue304.length;
    chunkXPW4576IValue299 < chunkXPW4576IValue300;
    chunkXPW4576IValue299 += 1
  ) {
    if (
      ((chunkXPW4576IValue301 = chunkXPW4576IValue304[chunkXPW4576IValue299]),
      (chunkXPW4576IValue303 = false),
      chunkXPW4576IValue21.call(chunkXPW4576IValue301) !== "[object Object]")
    )
      return false;
    for (chunkXPW4576IValue302 in chunkXPW4576IValue301)
      if (
        chunkXPW4576IValue20.call(chunkXPW4576IValue301, chunkXPW4576IValue302)
      )
        if (!chunkXPW4576IValue303) chunkXPW4576IValue303 = true;
        else return false;
    if (!chunkXPW4576IValue303) return false;
    if (chunkXPW4576IValue298.indexOf(chunkXPW4576IValue302) === -1)
      chunkXPW4576IValue298.push(chunkXPW4576IValue302);
    else return false;
  }
  return true;
}
chunkAGHRB4JFN(chunkXPW4576IHelper41, "resolveYamlOmap");
function chunkXPW4576IHelper42(chunkXPW4576IParam214) {
  return chunkXPW4576IParam214 === null ? [] : chunkXPW4576IParam214;
}
chunkAGHRB4JFN(chunkXPW4576IHelper42, "constructYamlOmap");
var chunkXPW4576IValue22 = new chunkXPW4576IValue6("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: chunkXPW4576IHelper41,
    construct: chunkXPW4576IHelper42,
  }),
  chunkXPW4576IValue23 = Object.prototype.toString;
function chunkXPW4576IHelper43(chunkXPW4576IParam117) {
  if (chunkXPW4576IParam117 === null) return true;
  var chunkXPW4576IValue333,
    chunkXPW4576IValue334,
    chunkXPW4576IValue335,
    chunkXPW4576IValue336,
    chunkXPW4576IValue337,
    chunkXPW4576IValue338 = chunkXPW4576IParam117;
  for (
    chunkXPW4576IValue337 = Array(chunkXPW4576IValue338.length),
      chunkXPW4576IValue333 = 0,
      chunkXPW4576IValue334 = chunkXPW4576IValue338.length;
    chunkXPW4576IValue333 < chunkXPW4576IValue334;
    chunkXPW4576IValue333 += 1
  ) {
    if (
      ((chunkXPW4576IValue335 = chunkXPW4576IValue338[chunkXPW4576IValue333]),
      chunkXPW4576IValue23.call(chunkXPW4576IValue335) !== "[object Object]" ||
        ((chunkXPW4576IValue336 = Object.keys(chunkXPW4576IValue335)),
        chunkXPW4576IValue336.length !== 1))
    )
      return false;
    chunkXPW4576IValue337[chunkXPW4576IValue333] = [
      chunkXPW4576IValue336[0],
      chunkXPW4576IValue335[chunkXPW4576IValue336[0]],
    ];
  }
  return true;
}
chunkAGHRB4JFN(chunkXPW4576IHelper43, "resolveYamlPairs");
function chunkXPW4576IHelper44(chunkXPW4576IParam143) {
  if (chunkXPW4576IParam143 === null) return [];
  var chunkXPW4576IValue367,
    chunkXPW4576IValue368,
    chunkXPW4576IValue369,
    chunkXPW4576IValue370,
    chunkXPW4576IValue371,
    chunkXPW4576IValue372 = chunkXPW4576IParam143;
  for (
    chunkXPW4576IValue371 = Array(chunkXPW4576IValue372.length),
      chunkXPW4576IValue367 = 0,
      chunkXPW4576IValue368 = chunkXPW4576IValue372.length;
    chunkXPW4576IValue367 < chunkXPW4576IValue368;
    chunkXPW4576IValue367 += 1
  ) {
    chunkXPW4576IValue369 = chunkXPW4576IValue372[chunkXPW4576IValue367];
    chunkXPW4576IValue370 = Object.keys(chunkXPW4576IValue369);
    chunkXPW4576IValue371[chunkXPW4576IValue367] = [
      chunkXPW4576IValue370[0],
      chunkXPW4576IValue369[chunkXPW4576IValue370[0]],
    ];
  }
  return chunkXPW4576IValue371;
}
chunkAGHRB4JFN(chunkXPW4576IHelper44, "constructYamlPairs");
var chunkXPW4576IValue24 = new chunkXPW4576IValue6("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: chunkXPW4576IHelper43,
    construct: chunkXPW4576IHelper44,
  }),
  chunkXPW4576IValue25 = Object.prototype.hasOwnProperty;
function chunkXPW4576IHelper45(chunkXPW4576IParam173) {
  if (chunkXPW4576IParam173 === null) return true;
  var chunkXPW4576IValue398,
    chunkXPW4576IValue399 = chunkXPW4576IParam173;
  for (chunkXPW4576IValue398 in chunkXPW4576IValue399)
    if (
      chunkXPW4576IValue25.call(chunkXPW4576IValue399, chunkXPW4576IValue398) &&
      chunkXPW4576IValue399[chunkXPW4576IValue398] !== null
    )
      return false;
  return true;
}
chunkAGHRB4JFN(chunkXPW4576IHelper45, "resolveYamlSet");
function chunkXPW4576IHelper46(chunkXPW4576IParam215) {
  return chunkXPW4576IParam215 === null ? {} : chunkXPW4576IParam215;
}
chunkAGHRB4JFN(chunkXPW4576IHelper46, "constructYamlSet");
var chunkXPW4576IValue26 = new chunkXPW4576IValue6("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: chunkXPW4576IHelper45,
    construct: chunkXPW4576IHelper46,
  }),
  chunkXPW4576IValue27 = chunkXPW4576IValue13.extend({
    implicit: [chunkXPW4576IValue16, chunkXPW4576IValue17],
    explicit: [
      chunkXPW4576IValue19,
      chunkXPW4576IValue22,
      chunkXPW4576IValue24,
      chunkXPW4576IValue26,
    ],
  }),
  chunkXPW4576IValue28 = Object.prototype.hasOwnProperty,
  chunkXPW4576IValue35 =
    /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  chunkXPW4576IValue36 = /[\x85\u2028\u2029]/,
  at = /[,\[\]\{\}]/,
  chunkXPW4576IValue37 = /^(?:!|!!|![a-z\-]+!)$/i,
  chunkXPW4576IValue38 =
    /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function chunkXPW4576IHelper47(chunkXPW4576IParam201) {
  return Object.prototype.toString.call(chunkXPW4576IParam201);
}
chunkAGHRB4JFN(chunkXPW4576IHelper47, "_class");
function chunkXPW4576IHelper48(chunkXPW4576IParam216) {
  return chunkXPW4576IParam216 === 10 || chunkXPW4576IParam216 === 13;
}
chunkAGHRB4JFN(chunkXPW4576IHelper48, "is_EOL");
function chunkXPW4576IHelper49(chunkXPW4576IParam220) {
  return chunkXPW4576IParam220 === 9 || chunkXPW4576IParam220 === 32;
}
chunkAGHRB4JFN(chunkXPW4576IHelper49, "is_WHITE_SPACE");
function chunkXPW4576IHelper50(chunkXPW4576IParam194) {
  return (
    chunkXPW4576IParam194 === 9 ||
    chunkXPW4576IParam194 === 32 ||
    chunkXPW4576IParam194 === 10 ||
    chunkXPW4576IParam194 === 13
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper50, "is_WS_OR_EOL");
function chunkXPW4576IHelper51(chunkXPW4576IParam186) {
  return (
    chunkXPW4576IParam186 === 44 ||
    chunkXPW4576IParam186 === 91 ||
    chunkXPW4576IParam186 === 93 ||
    chunkXPW4576IParam186 === 123 ||
    chunkXPW4576IParam186 === 125
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper51, "is_FLOW_INDICATOR");
function chunkXPW4576IHelper52(chunkXPW4576IParam178) {
  var chunkXPW4576IValue400;
  return 48 <= chunkXPW4576IParam178 && chunkXPW4576IParam178 <= 57
    ? chunkXPW4576IParam178 - 48
    : ((chunkXPW4576IValue400 = chunkXPW4576IParam178 | 32),
      97 <= chunkXPW4576IValue400 && chunkXPW4576IValue400 <= 102
        ? chunkXPW4576IValue400 - 97 + 10
        : -1);
}
chunkAGHRB4JFN(chunkXPW4576IHelper52, "fromHexCode");
function chunkXPW4576IHelper53(chunkXPW4576IParam190) {
  return chunkXPW4576IParam190 === 120
    ? 2
    : chunkXPW4576IParam190 === 117
      ? 4
      : chunkXPW4576IParam190 === 85
        ? 8
        : 0;
}
chunkAGHRB4JFN(chunkXPW4576IHelper53, "escapedHexLen");
function chunkXPW4576IHelper54(chunkXPW4576IParam202) {
  return 48 <= chunkXPW4576IParam202 && chunkXPW4576IParam202 <= 57
    ? chunkXPW4576IParam202 - 48
    : -1;
}
chunkAGHRB4JFN(chunkXPW4576IHelper54, "fromDecimalCode");
function chunkXPW4576IHelper55(chunkXPW4576IParam32) {
  return chunkXPW4576IParam32 === 48
    ? "\0"
    : chunkXPW4576IParam32 === 97
      ? ""
      : chunkXPW4576IParam32 === 98
        ? "\b"
        : chunkXPW4576IParam32 === 116 || chunkXPW4576IParam32 === 9
          ? "\t"
          : chunkXPW4576IParam32 === 110
            ? "\n"
            : chunkXPW4576IParam32 === 118
              ? ""
              : chunkXPW4576IParam32 === 102
                ? "\f"
                : chunkXPW4576IParam32 === 114
                  ? "\r"
                  : chunkXPW4576IParam32 === 101
                    ? ""
                    : chunkXPW4576IParam32 === 32
                      ? " "
                      : chunkXPW4576IParam32 === 34
                        ? '"'
                        : chunkXPW4576IParam32 === 47
                          ? "/"
                          : chunkXPW4576IParam32 === 92
                            ? "\\"
                            : chunkXPW4576IParam32 === 78
                              ? ""
                              : chunkXPW4576IParam32 === 95
                                ? "\xA0"
                                : chunkXPW4576IParam32 === 76
                                  ? "\u2028"
                                  : chunkXPW4576IParam32 === 80
                                    ? "\u2029"
                                    : "";
}
chunkAGHRB4JFN(chunkXPW4576IHelper55, "simpleEscapeSequence");
function chunkXPW4576IHelper56(chunkXPW4576IParam165) {
  return chunkXPW4576IParam165 <= 65535
    ? String.fromCharCode(chunkXPW4576IParam165)
    : String.fromCharCode(
        ((chunkXPW4576IParam165 - 65536) >> 10) + 55296,
        ((chunkXPW4576IParam165 - 65536) & 1023) + 56320,
      );
}
chunkAGHRB4JFN(chunkXPW4576IHelper56, "charFromCodepoint");
function chunkXPW4576IHelper57(
  chunkXPW4576IParam158,
  chunkXPW4576IParam159,
  chunkXPW4576IParam160,
) {
  chunkXPW4576IParam159 === "__proto__"
    ? Object.defineProperty(chunkXPW4576IParam158, chunkXPW4576IParam159, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: chunkXPW4576IParam160,
      })
    : (chunkXPW4576IParam158[chunkXPW4576IParam159] = chunkXPW4576IParam160);
}
chunkAGHRB4JFN(chunkXPW4576IHelper57, "setProperty");
var chunkXPW4576IValue39 = Array(256),
  chunkXPW4576IValue40 = Array(256);
for (
  chunkXPW4576IValue41 = 0;
  chunkXPW4576IValue41 < 256;
  chunkXPW4576IValue41++
) {
  chunkXPW4576IValue39[chunkXPW4576IValue41] = chunkXPW4576IHelper55(
    chunkXPW4576IValue41,
  )
    ? 1
    : 0;
  chunkXPW4576IValue40[chunkXPW4576IValue41] =
    chunkXPW4576IHelper55(chunkXPW4576IValue41);
}
var chunkXPW4576IValue41;
function chunkXPW4576IHelper58(chunkXPW4576IParam85, chunkXPW4576IParam86) {
  this.input = chunkXPW4576IParam85;
  this.filename = chunkXPW4576IParam86.filename || null;
  this.schema = chunkXPW4576IParam86.schema || chunkXPW4576IValue27;
  this.onWarning = chunkXPW4576IParam86.onWarning || null;
  this.legacy = chunkXPW4576IParam86.legacy || false;
  this.json = chunkXPW4576IParam86.json || false;
  this.listener = chunkXPW4576IParam86.listener || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = chunkXPW4576IParam85.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
chunkAGHRB4JFN(chunkXPW4576IHelper58, "State$1");
function _t(chunkXPW4576IParam150, chunkXPW4576IParam151) {
  var chunkXPW4576IValue377 = {
    name: chunkXPW4576IParam150.filename,
    buffer: chunkXPW4576IParam150.input.slice(0, -1),
    position: chunkXPW4576IParam150.position,
    line: chunkXPW4576IParam150.line,
    column: chunkXPW4576IParam150.position - chunkXPW4576IParam150.lineStart,
  };
  return (
    (chunkXPW4576IValue377.snippet = chunkXPW4576IValue3(
      chunkXPW4576IValue377,
    )),
    new chunkXPW4576IValue2(chunkXPW4576IParam151, chunkXPW4576IValue377)
  );
}
chunkAGHRB4JFN(_t, "generateError");
function chunkXPW4576IHelper59(chunkXPW4576IParam228, chunkXPW4576IParam229) {
  throw _t(chunkXPW4576IParam228, chunkXPW4576IParam229);
}
chunkAGHRB4JFN(chunkXPW4576IHelper59, "throwError");
function chunkXPW4576IHelper60(chunkXPW4576IParam195, chunkXPW4576IParam196) {
  chunkXPW4576IParam195.onWarning &&
    chunkXPW4576IParam195.onWarning.call(
      null,
      _t(chunkXPW4576IParam195, chunkXPW4576IParam196),
    );
}
chunkAGHRB4JFN(chunkXPW4576IHelper60, "throwWarning");
var chunkXPW4576IValue42 = {
  YAML: chunkAGHRB4JFN(function (
    chunkXPW4576IParam81,
    chunkXPW4576IParam82,
    chunkXPW4576IParam83,
  ) {
    var chunkXPW4576IValue256, chunkXPW4576IValue257, chunkXPW4576IValue258;
    chunkXPW4576IParam81.version !== null &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam81,
        "duplication of %YAML directive",
      );
    chunkXPW4576IParam83.length !== 1 &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam81,
        "YAML directive accepts exactly one argument",
      );
    chunkXPW4576IValue256 = /^([0-9]+)\.([0-9]+)$/.exec(
      chunkXPW4576IParam83[0],
    );
    chunkXPW4576IValue256 === null &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam81,
        "ill-formed argument of the YAML directive",
      );
    chunkXPW4576IValue257 = parseInt(chunkXPW4576IValue256[1], 10);
    chunkXPW4576IValue258 = parseInt(chunkXPW4576IValue256[2], 10);
    chunkXPW4576IValue257 !== 1 &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam81,
        "unacceptable YAML version of the document",
      );
    chunkXPW4576IParam81.version = chunkXPW4576IParam83[0];
    chunkXPW4576IParam81.checkLineBreaks = chunkXPW4576IValue258 < 2;
    chunkXPW4576IValue258 !== 1 &&
      chunkXPW4576IValue258 !== 2 &&
      chunkXPW4576IHelper60(
        chunkXPW4576IParam81,
        "unsupported YAML version of the document",
      );
  }, "handleYamlDirective"),
  TAG: chunkAGHRB4JFN(function (
    chunkXPW4576IParam78,
    chunkXPW4576IParam79,
    chunkXPW4576IParam80,
  ) {
    var chunkXPW4576IValue254, chunkXPW4576IValue255;
    chunkXPW4576IParam80.length !== 2 &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam78,
        "TAG directive accepts exactly two arguments",
      );
    chunkXPW4576IValue254 = chunkXPW4576IParam80[0];
    chunkXPW4576IValue255 = chunkXPW4576IParam80[1];
    chunkXPW4576IValue37.test(chunkXPW4576IValue254) ||
      chunkXPW4576IHelper59(
        chunkXPW4576IParam78,
        "ill-formed tag handle (first argument) of the TAG directive",
      );
    chunkXPW4576IValue28.call(
      chunkXPW4576IParam78.tagMap,
      chunkXPW4576IValue254,
    ) &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam78,
        'there is a previously declared suffix for "' +
          chunkXPW4576IValue254 +
          '" tag handle',
      );
    chunkXPW4576IValue38.test(chunkXPW4576IValue255) ||
      chunkXPW4576IHelper59(
        chunkXPW4576IParam78,
        "ill-formed tag prefix (second argument) of the TAG directive",
      );
    try {
      chunkXPW4576IValue255 = decodeURIComponent(chunkXPW4576IValue255);
    } catch {
      chunkXPW4576IHelper59(
        chunkXPW4576IParam78,
        "tag prefix is malformed: " + chunkXPW4576IValue255,
      );
    }
    chunkXPW4576IParam78.tagMap[chunkXPW4576IValue254] = chunkXPW4576IValue255;
  }, "handleTagDirective"),
};
function chunkXPW4576IHelper61(
  chunkXPW4576IParam103,
  chunkXPW4576IParam104,
  chunkXPW4576IParam105,
  chunkXPW4576IParam106,
) {
  var chunkXPW4576IValue312,
    chunkXPW4576IValue313,
    chunkXPW4576IValue314,
    chunkXPW4576IValue315;
  if (chunkXPW4576IParam104 < chunkXPW4576IParam105) {
    if (
      ((chunkXPW4576IValue315 = chunkXPW4576IParam103.input.slice(
        chunkXPW4576IParam104,
        chunkXPW4576IParam105,
      )),
      chunkXPW4576IParam106)
    )
      for (
        chunkXPW4576IValue312 = 0,
          chunkXPW4576IValue313 = chunkXPW4576IValue315.length;
        chunkXPW4576IValue312 < chunkXPW4576IValue313;
        chunkXPW4576IValue312 += 1
      ) {
        chunkXPW4576IValue314 = chunkXPW4576IValue315.charCodeAt(
          chunkXPW4576IValue312,
        );
        chunkXPW4576IValue314 === 9 ||
          (32 <= chunkXPW4576IValue314 && chunkXPW4576IValue314 <= 1114111) ||
          chunkXPW4576IHelper59(
            chunkXPW4576IParam103,
            "expected valid JSON character",
          );
      }
    else
      chunkXPW4576IValue35.test(chunkXPW4576IValue315) &&
        chunkXPW4576IHelper59(
          chunkXPW4576IParam103,
          "the stream contains non-printable characters",
        );
    chunkXPW4576IParam103.result += chunkXPW4576IValue315;
  }
}
chunkAGHRB4JFN(chunkXPW4576IHelper61, "captureSegment");
function chunkXPW4576IHelper62(
  chunkXPW4576IParam121,
  chunkXPW4576IParam122,
  chunkXPW4576IParam123,
  chunkXPW4576IParam124,
) {
  var chunkXPW4576IValue342,
    chunkXPW4576IValue343,
    chunkXPW4576IValue344,
    chunkXPW4576IValue345;
  for (
    chunkXPW4576IValue1.isObject(chunkXPW4576IParam123) ||
      chunkXPW4576IHelper59(
        chunkXPW4576IParam121,
        "cannot merge mappings; the provided source object is unacceptable",
      ),
      chunkXPW4576IValue342 = Object.keys(chunkXPW4576IParam123),
      chunkXPW4576IValue344 = 0,
      chunkXPW4576IValue345 = chunkXPW4576IValue342.length;
    chunkXPW4576IValue344 < chunkXPW4576IValue345;
    chunkXPW4576IValue344 += 1
  ) {
    chunkXPW4576IValue343 = chunkXPW4576IValue342[chunkXPW4576IValue344];
    chunkXPW4576IValue28.call(chunkXPW4576IParam122, chunkXPW4576IValue343) ||
      (chunkXPW4576IHelper57(
        chunkXPW4576IParam122,
        chunkXPW4576IValue343,
        chunkXPW4576IParam123[chunkXPW4576IValue343],
      ),
      (chunkXPW4576IParam124[chunkXPW4576IValue343] = true));
  }
}
chunkAGHRB4JFN(chunkXPW4576IHelper62, "mergeMappings");
function chunkXPW4576IHelper63(
  chunkXPW4576IParam48,
  chunkXPW4576IParam49,
  chunkXPW4576IParam50,
  chunkXPW4576IParam51,
  chunkXPW4576IParam52,
  chunkXPW4576IParam53,
  chunkXPW4576IParam54,
  chunkXPW4576IParam55,
  chunkXPW4576IParam56,
) {
  var chunkXPW4576IValue212, chunkXPW4576IValue213;
  if (Array.isArray(chunkXPW4576IParam52))
    for (
      chunkXPW4576IParam52 = Array.prototype.slice.call(chunkXPW4576IParam52),
        chunkXPW4576IValue212 = 0,
        chunkXPW4576IValue213 = chunkXPW4576IParam52.length;
      chunkXPW4576IValue212 < chunkXPW4576IValue213;
      chunkXPW4576IValue212 += 1
    ) {
      Array.isArray(chunkXPW4576IParam52[chunkXPW4576IValue212]) &&
        chunkXPW4576IHelper59(
          chunkXPW4576IParam48,
          "nested arrays are not supported inside keys",
        );
      typeof chunkXPW4576IParam52 == "object" &&
        chunkXPW4576IHelper47(chunkXPW4576IParam52[chunkXPW4576IValue212]) ===
          "[object Object]" &&
        (chunkXPW4576IParam52[chunkXPW4576IValue212] = "[object Object]");
    }
  if (
    (typeof chunkXPW4576IParam52 == "object" &&
      chunkXPW4576IHelper47(chunkXPW4576IParam52) === "[object Object]" &&
      (chunkXPW4576IParam52 = "[object Object]"),
    (chunkXPW4576IParam52 = String(chunkXPW4576IParam52)),
    chunkXPW4576IParam49 === null && (chunkXPW4576IParam49 = {}),
    chunkXPW4576IParam51 === "tag:yaml.org,2002:merge")
  ) {
    if (Array.isArray(chunkXPW4576IParam53))
      for (
        chunkXPW4576IValue212 = 0,
          chunkXPW4576IValue213 = chunkXPW4576IParam53.length;
        chunkXPW4576IValue212 < chunkXPW4576IValue213;
        chunkXPW4576IValue212 += 1
      )
        chunkXPW4576IHelper62(
          chunkXPW4576IParam48,
          chunkXPW4576IParam49,
          chunkXPW4576IParam53[chunkXPW4576IValue212],
          chunkXPW4576IParam50,
        );
    else
      chunkXPW4576IHelper62(
        chunkXPW4576IParam48,
        chunkXPW4576IParam49,
        chunkXPW4576IParam53,
        chunkXPW4576IParam50,
      );
  } else {
    !chunkXPW4576IParam48.json &&
      !chunkXPW4576IValue28.call(chunkXPW4576IParam50, chunkXPW4576IParam52) &&
      chunkXPW4576IValue28.call(chunkXPW4576IParam49, chunkXPW4576IParam52) &&
      ((chunkXPW4576IParam48.line =
        chunkXPW4576IParam54 || chunkXPW4576IParam48.line),
      (chunkXPW4576IParam48.lineStart =
        chunkXPW4576IParam55 || chunkXPW4576IParam48.lineStart),
      (chunkXPW4576IParam48.position =
        chunkXPW4576IParam56 || chunkXPW4576IParam48.position),
      chunkXPW4576IHelper59(chunkXPW4576IParam48, "duplicated mapping key"));
    chunkXPW4576IHelper57(
      chunkXPW4576IParam49,
      chunkXPW4576IParam52,
      chunkXPW4576IParam53,
    );
    delete chunkXPW4576IParam50[chunkXPW4576IParam52];
  }
  return chunkXPW4576IParam49;
}
chunkAGHRB4JFN(chunkXPW4576IHelper63, "storeMappingPair");
function chunkXPW4576IHelper64(chunkXPW4576IParam120) {
  var chunkXPW4576IValue341 = chunkXPW4576IParam120.input.charCodeAt(
    chunkXPW4576IParam120.position,
  );
  chunkXPW4576IValue341 === 10
    ? chunkXPW4576IParam120.position++
    : chunkXPW4576IValue341 === 13
      ? (chunkXPW4576IParam120.position++,
        chunkXPW4576IParam120.input.charCodeAt(
          chunkXPW4576IParam120.position,
        ) === 10 && chunkXPW4576IParam120.position++)
      : chunkXPW4576IHelper59(
          chunkXPW4576IParam120,
          "a line break is expected",
        );
  chunkXPW4576IParam120.line += 1;
  chunkXPW4576IParam120.lineStart = chunkXPW4576IParam120.position;
  chunkXPW4576IParam120.firstTabInLine = -1;
}
chunkAGHRB4JFN(chunkXPW4576IHelper64, "readLineBreak");
function chunkXPW4576IHelper65(
  chunkXPW4576IParam72,
  chunkXPW4576IParam73,
  chunkXPW4576IParam74,
) {
  for (
    var chunkXPW4576IValue244 = 0,
      chunkXPW4576IValue245 = chunkXPW4576IParam72.input.charCodeAt(
        chunkXPW4576IParam72.position,
      );
    chunkXPW4576IValue245 !== 0;

  ) {
    for (; chunkXPW4576IHelper49(chunkXPW4576IValue245); ) {
      chunkXPW4576IValue245 === 9 &&
        chunkXPW4576IParam72.firstTabInLine === -1 &&
        (chunkXPW4576IParam72.firstTabInLine = chunkXPW4576IParam72.position);
      chunkXPW4576IValue245 = chunkXPW4576IParam72.input.charCodeAt(
        ++chunkXPW4576IParam72.position,
      );
    }
    if (chunkXPW4576IParam73 && chunkXPW4576IValue245 === 35)
      do
        chunkXPW4576IValue245 = chunkXPW4576IParam72.input.charCodeAt(
          ++chunkXPW4576IParam72.position,
        );
      while (
        chunkXPW4576IValue245 !== 10 &&
        chunkXPW4576IValue245 !== 13 &&
        chunkXPW4576IValue245 !== 0
      );
    if (chunkXPW4576IHelper48(chunkXPW4576IValue245))
      for (
        chunkXPW4576IHelper64(chunkXPW4576IParam72),
          chunkXPW4576IValue245 = chunkXPW4576IParam72.input.charCodeAt(
            chunkXPW4576IParam72.position,
          ),
          chunkXPW4576IValue244++,
          chunkXPW4576IParam72.lineIndent = 0;
        chunkXPW4576IValue245 === 32;

      ) {
        chunkXPW4576IParam72.lineIndent++;
        chunkXPW4576IValue245 = chunkXPW4576IParam72.input.charCodeAt(
          ++chunkXPW4576IParam72.position,
        );
      }
    else break;
  }
  return (
    chunkXPW4576IParam74 !== -1 &&
      chunkXPW4576IValue244 !== 0 &&
      chunkXPW4576IParam72.lineIndent < chunkXPW4576IParam74 &&
      chunkXPW4576IHelper60(chunkXPW4576IParam72, "deficient indentation"),
    chunkXPW4576IValue244
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper65, "skipSeparationSpace");
function chunkXPW4576IHelper66(chunkXPW4576IParam135) {
  var chunkXPW4576IValue352 = chunkXPW4576IParam135.position,
    chunkXPW4576IValue353 = chunkXPW4576IParam135.input.charCodeAt(
      chunkXPW4576IValue352,
    );
  return !!(
    (chunkXPW4576IValue353 === 45 || chunkXPW4576IValue353 === 46) &&
    chunkXPW4576IValue353 ===
      chunkXPW4576IParam135.input.charCodeAt(chunkXPW4576IValue352 + 1) &&
    chunkXPW4576IValue353 ===
      chunkXPW4576IParam135.input.charCodeAt(chunkXPW4576IValue352 + 2) &&
    ((chunkXPW4576IValue352 += 3),
    (chunkXPW4576IValue353 = chunkXPW4576IParam135.input.charCodeAt(
      chunkXPW4576IValue352,
    )),
    chunkXPW4576IValue353 === 0 || chunkXPW4576IHelper50(chunkXPW4576IValue353))
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper66, "testDocumentSeparator");
function chunkXPW4576IHelper67(chunkXPW4576IParam176, chunkXPW4576IParam177) {
  chunkXPW4576IParam177 === 1
    ? (chunkXPW4576IParam176.result += " ")
    : chunkXPW4576IParam177 > 1 &&
      (chunkXPW4576IParam176.result += chunkXPW4576IValue1.repeat(
        "\n",
        chunkXPW4576IParam177 - 1,
      ));
}
chunkAGHRB4JFN(chunkXPW4576IHelper67, "writeFoldedLines");
function chunkXPW4576IHelper68(
  chunkXPW4576IParam25,
  chunkXPW4576IParam26,
  chunkXPW4576IParam27,
) {
  var chunkXPW4576IValue166,
    chunkXPW4576IValue167,
    chunkXPW4576IValue168,
    chunkXPW4576IValue169,
    chunkXPW4576IValue170,
    chunkXPW4576IValue171,
    chunkXPW4576IValue172,
    chunkXPW4576IValue173,
    chunkXPW4576IValue174 = chunkXPW4576IParam25.kind,
    chunkXPW4576IValue175 = chunkXPW4576IParam25.result,
    chunkXPW4576IValue176 = chunkXPW4576IParam25.input.charCodeAt(
      chunkXPW4576IParam25.position,
    );
  if (
    chunkXPW4576IHelper50(chunkXPW4576IValue176) ||
    chunkXPW4576IHelper51(chunkXPW4576IValue176) ||
    chunkXPW4576IValue176 === 35 ||
    chunkXPW4576IValue176 === 38 ||
    chunkXPW4576IValue176 === 42 ||
    chunkXPW4576IValue176 === 33 ||
    chunkXPW4576IValue176 === 124 ||
    chunkXPW4576IValue176 === 62 ||
    chunkXPW4576IValue176 === 39 ||
    chunkXPW4576IValue176 === 34 ||
    chunkXPW4576IValue176 === 37 ||
    chunkXPW4576IValue176 === 64 ||
    chunkXPW4576IValue176 === 96 ||
    ((chunkXPW4576IValue176 === 63 || chunkXPW4576IValue176 === 45) &&
      ((chunkXPW4576IValue167 = chunkXPW4576IParam25.input.charCodeAt(
        chunkXPW4576IParam25.position + 1,
      )),
      chunkXPW4576IHelper50(chunkXPW4576IValue167) ||
        (chunkXPW4576IParam27 && chunkXPW4576IHelper51(chunkXPW4576IValue167))))
  )
    return false;
  for (
    chunkXPW4576IParam25.kind = "scalar",
      chunkXPW4576IParam25.result = "",
      chunkXPW4576IValue168 = chunkXPW4576IValue169 =
        chunkXPW4576IParam25.position,
      chunkXPW4576IValue170 = false;
    chunkXPW4576IValue176 !== 0;

  ) {
    if (chunkXPW4576IValue176 === 58) {
      if (
        ((chunkXPW4576IValue167 = chunkXPW4576IParam25.input.charCodeAt(
          chunkXPW4576IParam25.position + 1,
        )),
        chunkXPW4576IHelper50(chunkXPW4576IValue167) ||
          (chunkXPW4576IParam27 &&
            chunkXPW4576IHelper51(chunkXPW4576IValue167)))
      )
        break;
    } else if (chunkXPW4576IValue176 === 35) {
      if (
        ((chunkXPW4576IValue166 = chunkXPW4576IParam25.input.charCodeAt(
          chunkXPW4576IParam25.position - 1,
        )),
        chunkXPW4576IHelper50(chunkXPW4576IValue166))
      )
        break;
    } else if (
      (chunkXPW4576IParam25.position === chunkXPW4576IParam25.lineStart &&
        chunkXPW4576IHelper66(chunkXPW4576IParam25)) ||
      (chunkXPW4576IParam27 && chunkXPW4576IHelper51(chunkXPW4576IValue176))
    )
      break;
    else if (chunkXPW4576IHelper48(chunkXPW4576IValue176))
      if (
        ((chunkXPW4576IValue171 = chunkXPW4576IParam25.line),
        (chunkXPW4576IValue172 = chunkXPW4576IParam25.lineStart),
        (chunkXPW4576IValue173 = chunkXPW4576IParam25.lineIndent),
        chunkXPW4576IHelper65(chunkXPW4576IParam25, false, -1),
        chunkXPW4576IParam25.lineIndent >= chunkXPW4576IParam26)
      ) {
        chunkXPW4576IValue170 = true;
        chunkXPW4576IValue176 = chunkXPW4576IParam25.input.charCodeAt(
          chunkXPW4576IParam25.position,
        );
        continue;
      } else {
        chunkXPW4576IParam25.position = chunkXPW4576IValue169;
        chunkXPW4576IParam25.line = chunkXPW4576IValue171;
        chunkXPW4576IParam25.lineStart = chunkXPW4576IValue172;
        chunkXPW4576IParam25.lineIndent = chunkXPW4576IValue173;
        break;
      }
    chunkXPW4576IValue170 &&=
      (chunkXPW4576IHelper61(
        chunkXPW4576IParam25,
        chunkXPW4576IValue168,
        chunkXPW4576IValue169,
        false,
      ),
      chunkXPW4576IHelper67(
        chunkXPW4576IParam25,
        chunkXPW4576IParam25.line - chunkXPW4576IValue171,
      ),
      (chunkXPW4576IValue168 = chunkXPW4576IValue169 =
        chunkXPW4576IParam25.position),
      false);
    chunkXPW4576IHelper49(chunkXPW4576IValue176) ||
      (chunkXPW4576IValue169 = chunkXPW4576IParam25.position + 1);
    chunkXPW4576IValue176 = chunkXPW4576IParam25.input.charCodeAt(
      ++chunkXPW4576IParam25.position,
    );
  }
  return (
    chunkXPW4576IHelper61(
      chunkXPW4576IParam25,
      chunkXPW4576IValue168,
      chunkXPW4576IValue169,
      false,
    ),
    chunkXPW4576IParam25.result
      ? true
      : ((chunkXPW4576IParam25.kind = chunkXPW4576IValue174),
        (chunkXPW4576IParam25.result = chunkXPW4576IValue175),
        false)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper68, "readPlainScalar");
function chunkXPW4576IHelper69(chunkXPW4576IParam66, chunkXPW4576IParam67) {
  var chunkXPW4576IValue222 = chunkXPW4576IParam66.input.charCodeAt(
      chunkXPW4576IParam66.position,
    ),
    chunkXPW4576IValue223,
    chunkXPW4576IValue224;
  if (chunkXPW4576IValue222 !== 39) return false;
  for (
    chunkXPW4576IParam66.kind = "scalar",
      chunkXPW4576IParam66.result = "",
      chunkXPW4576IParam66.position++,
      chunkXPW4576IValue223 = chunkXPW4576IValue224 =
        chunkXPW4576IParam66.position;
    (chunkXPW4576IValue222 = chunkXPW4576IParam66.input.charCodeAt(
      chunkXPW4576IParam66.position,
    )) !== 0;

  )
    if (chunkXPW4576IValue222 === 39) {
      if (
        (chunkXPW4576IHelper61(
          chunkXPW4576IParam66,
          chunkXPW4576IValue223,
          chunkXPW4576IParam66.position,
          true,
        ),
        (chunkXPW4576IValue222 = chunkXPW4576IParam66.input.charCodeAt(
          ++chunkXPW4576IParam66.position,
        )),
        chunkXPW4576IValue222 === 39)
      ) {
        chunkXPW4576IValue223 = chunkXPW4576IParam66.position;
        chunkXPW4576IParam66.position++;
        chunkXPW4576IValue224 = chunkXPW4576IParam66.position;
      } else return true;
    } else
      chunkXPW4576IHelper48(chunkXPW4576IValue222)
        ? (chunkXPW4576IHelper61(
            chunkXPW4576IParam66,
            chunkXPW4576IValue223,
            chunkXPW4576IValue224,
            true,
          ),
          chunkXPW4576IHelper67(
            chunkXPW4576IParam66,
            chunkXPW4576IHelper65(
              chunkXPW4576IParam66,
              false,
              chunkXPW4576IParam67,
            ),
          ),
          (chunkXPW4576IValue223 = chunkXPW4576IValue224 =
            chunkXPW4576IParam66.position))
        : chunkXPW4576IParam66.position === chunkXPW4576IParam66.lineStart &&
            chunkXPW4576IHelper66(chunkXPW4576IParam66)
          ? chunkXPW4576IHelper59(
              chunkXPW4576IParam66,
              "unexpected end of the document within a single quoted scalar",
            )
          : (chunkXPW4576IParam66.position++,
            (chunkXPW4576IValue224 = chunkXPW4576IParam66.position));
  chunkXPW4576IHelper59(
    chunkXPW4576IParam66,
    "unexpected end of the stream within a single quoted scalar",
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper69, "readSingleQuotedScalar");
function chunkXPW4576IHelper70(chunkXPW4576IParam28, chunkXPW4576IParam29) {
  var chunkXPW4576IValue177,
    chunkXPW4576IValue178,
    chunkXPW4576IValue179,
    chunkXPW4576IValue180,
    chunkXPW4576IValue181,
    chunkXPW4576IValue182 = chunkXPW4576IParam28.input.charCodeAt(
      chunkXPW4576IParam28.position,
    );
  if (chunkXPW4576IValue182 !== 34) return false;
  for (
    chunkXPW4576IParam28.kind = "scalar",
      chunkXPW4576IParam28.result = "",
      chunkXPW4576IParam28.position++,
      chunkXPW4576IValue177 = chunkXPW4576IValue178 =
        chunkXPW4576IParam28.position;
    (chunkXPW4576IValue182 = chunkXPW4576IParam28.input.charCodeAt(
      chunkXPW4576IParam28.position,
    )) !== 0;

  )
    if (chunkXPW4576IValue182 === 34)
      return (
        chunkXPW4576IHelper61(
          chunkXPW4576IParam28,
          chunkXPW4576IValue177,
          chunkXPW4576IParam28.position,
          true,
        ),
        chunkXPW4576IParam28.position++,
        true
      );
    else if (chunkXPW4576IValue182 === 92) {
      if (
        (chunkXPW4576IHelper61(
          chunkXPW4576IParam28,
          chunkXPW4576IValue177,
          chunkXPW4576IParam28.position,
          true,
        ),
        (chunkXPW4576IValue182 = chunkXPW4576IParam28.input.charCodeAt(
          ++chunkXPW4576IParam28.position,
        )),
        chunkXPW4576IHelper48(chunkXPW4576IValue182))
      )
        chunkXPW4576IHelper65(
          chunkXPW4576IParam28,
          false,
          chunkXPW4576IParam29,
        );
      else if (
        chunkXPW4576IValue182 < 256 &&
        chunkXPW4576IValue39[chunkXPW4576IValue182]
      ) {
        chunkXPW4576IParam28.result +=
          chunkXPW4576IValue40[chunkXPW4576IValue182];
        chunkXPW4576IParam28.position++;
      } else if (
        (chunkXPW4576IValue181 = chunkXPW4576IHelper53(chunkXPW4576IValue182)) >
        0
      ) {
        for (
          chunkXPW4576IValue179 = chunkXPW4576IValue181,
            chunkXPW4576IValue180 = 0;
          chunkXPW4576IValue179 > 0;
          chunkXPW4576IValue179--
        ) {
          chunkXPW4576IValue182 = chunkXPW4576IParam28.input.charCodeAt(
            ++chunkXPW4576IParam28.position,
          );
          (chunkXPW4576IValue181 = chunkXPW4576IHelper52(
            chunkXPW4576IValue182,
          )) >= 0
            ? (chunkXPW4576IValue180 =
                (chunkXPW4576IValue180 << 4) + chunkXPW4576IValue181)
            : chunkXPW4576IHelper59(
                chunkXPW4576IParam28,
                "expected hexadecimal character",
              );
        }
        chunkXPW4576IParam28.result += chunkXPW4576IHelper56(
          chunkXPW4576IValue180,
        );
        chunkXPW4576IParam28.position++;
      } else
        chunkXPW4576IHelper59(chunkXPW4576IParam28, "unknown escape sequence");
      chunkXPW4576IValue177 = chunkXPW4576IValue178 =
        chunkXPW4576IParam28.position;
    } else
      chunkXPW4576IHelper48(chunkXPW4576IValue182)
        ? (chunkXPW4576IHelper61(
            chunkXPW4576IParam28,
            chunkXPW4576IValue177,
            chunkXPW4576IValue178,
            true,
          ),
          chunkXPW4576IHelper67(
            chunkXPW4576IParam28,
            chunkXPW4576IHelper65(
              chunkXPW4576IParam28,
              false,
              chunkXPW4576IParam29,
            ),
          ),
          (chunkXPW4576IValue177 = chunkXPW4576IValue178 =
            chunkXPW4576IParam28.position))
        : chunkXPW4576IParam28.position === chunkXPW4576IParam28.lineStart &&
            chunkXPW4576IHelper66(chunkXPW4576IParam28)
          ? chunkXPW4576IHelper59(
              chunkXPW4576IParam28,
              "unexpected end of the document within a double quoted scalar",
            )
          : (chunkXPW4576IParam28.position++,
            (chunkXPW4576IValue178 = chunkXPW4576IParam28.position));
  chunkXPW4576IHelper59(
    chunkXPW4576IParam28,
    "unexpected end of the stream within a double quoted scalar",
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper70, "readDoubleQuotedScalar");
function chunkXPW4576IHelper71(chunkXPW4576IParam12, chunkXPW4576IParam13) {
  var chunkXPW4576IValue124 = true,
    chunkXPW4576IValue125,
    chunkXPW4576IValue126,
    chunkXPW4576IValue127,
    chunkXPW4576IValue128 = chunkXPW4576IParam12.tag,
    chunkXPW4576IValue129,
    chunkXPW4576IValue130 = chunkXPW4576IParam12.anchor,
    chunkXPW4576IValue131,
    chunkXPW4576IValue132,
    chunkXPW4576IValue133,
    chunkXPW4576IValue134,
    chunkXPW4576IValue135,
    chunkXPW4576IValue136 = Object.create(null),
    chunkXPW4576IValue137,
    chunkXPW4576IValue138,
    chunkXPW4576IValue139,
    chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
      chunkXPW4576IParam12.position,
    );
  if (chunkXPW4576IValue140 === 91) {
    chunkXPW4576IValue132 = 93;
    chunkXPW4576IValue135 = false;
    chunkXPW4576IValue129 = [];
  } else if (chunkXPW4576IValue140 === 123) {
    chunkXPW4576IValue132 = 125;
    chunkXPW4576IValue135 = true;
    chunkXPW4576IValue129 = {};
  } else return false;
  for (
    chunkXPW4576IParam12.anchor !== null &&
      (chunkXPW4576IParam12.anchorMap[chunkXPW4576IParam12.anchor] =
        chunkXPW4576IValue129),
      chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
        ++chunkXPW4576IParam12.position,
      );
    chunkXPW4576IValue140 !== 0;

  ) {
    if (
      (chunkXPW4576IHelper65(chunkXPW4576IParam12, true, chunkXPW4576IParam13),
      (chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
        chunkXPW4576IParam12.position,
      )),
      chunkXPW4576IValue140 === chunkXPW4576IValue132)
    )
      return (
        chunkXPW4576IParam12.position++,
        (chunkXPW4576IParam12.tag = chunkXPW4576IValue128),
        (chunkXPW4576IParam12.anchor = chunkXPW4576IValue130),
        (chunkXPW4576IParam12.kind = chunkXPW4576IValue135
          ? "mapping"
          : "sequence"),
        (chunkXPW4576IParam12.result = chunkXPW4576IValue129),
        true
      );
    chunkXPW4576IValue124
      ? chunkXPW4576IValue140 === 44 &&
        chunkXPW4576IHelper59(
          chunkXPW4576IParam12,
          "expected the node content, but found ','",
        )
      : chunkXPW4576IHelper59(
          chunkXPW4576IParam12,
          "missed comma between flow collection entries",
        );
    chunkXPW4576IValue138 =
      chunkXPW4576IValue137 =
      chunkXPW4576IValue139 =
        null;
    chunkXPW4576IValue133 = chunkXPW4576IValue134 = false;
    chunkXPW4576IValue140 === 63 &&
      ((chunkXPW4576IValue131 = chunkXPW4576IParam12.input.charCodeAt(
        chunkXPW4576IParam12.position + 1,
      )),
      chunkXPW4576IHelper50(chunkXPW4576IValue131) &&
        ((chunkXPW4576IValue133 = chunkXPW4576IValue134 = true),
        chunkXPW4576IParam12.position++,
        chunkXPW4576IHelper65(
          chunkXPW4576IParam12,
          true,
          chunkXPW4576IParam13,
        )));
    chunkXPW4576IValue125 = chunkXPW4576IParam12.line;
    chunkXPW4576IValue126 = chunkXPW4576IParam12.lineStart;
    chunkXPW4576IValue127 = chunkXPW4576IParam12.position;
    chunkXPW4576IHelper78(
      chunkXPW4576IParam12,
      chunkXPW4576IParam13,
      1,
      false,
      true,
    );
    chunkXPW4576IValue138 = chunkXPW4576IParam12.tag;
    chunkXPW4576IValue137 = chunkXPW4576IParam12.result;
    chunkXPW4576IHelper65(chunkXPW4576IParam12, true, chunkXPW4576IParam13);
    chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
      chunkXPW4576IParam12.position,
    );
    (chunkXPW4576IValue134 ||
      chunkXPW4576IParam12.line === chunkXPW4576IValue125) &&
      chunkXPW4576IValue140 === 58 &&
      ((chunkXPW4576IValue133 = true),
      (chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
        ++chunkXPW4576IParam12.position,
      )),
      chunkXPW4576IHelper65(chunkXPW4576IParam12, true, chunkXPW4576IParam13),
      chunkXPW4576IHelper78(
        chunkXPW4576IParam12,
        chunkXPW4576IParam13,
        1,
        false,
        true,
      ),
      (chunkXPW4576IValue139 = chunkXPW4576IParam12.result));
    chunkXPW4576IValue135
      ? chunkXPW4576IHelper63(
          chunkXPW4576IParam12,
          chunkXPW4576IValue129,
          chunkXPW4576IValue136,
          chunkXPW4576IValue138,
          chunkXPW4576IValue137,
          chunkXPW4576IValue139,
          chunkXPW4576IValue125,
          chunkXPW4576IValue126,
          chunkXPW4576IValue127,
        )
      : chunkXPW4576IValue133
        ? chunkXPW4576IValue129.push(
            chunkXPW4576IHelper63(
              chunkXPW4576IParam12,
              null,
              chunkXPW4576IValue136,
              chunkXPW4576IValue138,
              chunkXPW4576IValue137,
              chunkXPW4576IValue139,
              chunkXPW4576IValue125,
              chunkXPW4576IValue126,
              chunkXPW4576IValue127,
            ),
          )
        : chunkXPW4576IValue129.push(chunkXPW4576IValue137);
    chunkXPW4576IHelper65(chunkXPW4576IParam12, true, chunkXPW4576IParam13);
    chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
      chunkXPW4576IParam12.position,
    );
    chunkXPW4576IValue140 === 44
      ? ((chunkXPW4576IValue124 = true),
        (chunkXPW4576IValue140 = chunkXPW4576IParam12.input.charCodeAt(
          ++chunkXPW4576IParam12.position,
        )))
      : (chunkXPW4576IValue124 = false);
  }
  chunkXPW4576IHelper59(
    chunkXPW4576IParam12,
    "unexpected end of the stream within a flow collection",
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper71, "readFlowCollection");
function chunkXPW4576IHelper72(chunkXPW4576IParam9, chunkXPW4576IParam10) {
  var chunkXPW4576IValue108,
    chunkXPW4576IValue109,
    chunkXPW4576IValue110 = 1,
    chunkXPW4576IValue111 = false,
    chunkXPW4576IValue112 = false,
    chunkXPW4576IValue113 = chunkXPW4576IParam10,
    chunkXPW4576IValue114 = 0,
    chunkXPW4576IValue115 = false,
    chunkXPW4576IValue116,
    chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
      chunkXPW4576IParam9.position,
    );
  if (chunkXPW4576IValue117 === 124) chunkXPW4576IValue109 = false;
  else if (chunkXPW4576IValue117 === 62) chunkXPW4576IValue109 = true;
  else return false;
  for (
    chunkXPW4576IParam9.kind = "scalar", chunkXPW4576IParam9.result = "";
    chunkXPW4576IValue117 !== 0;

  )
    if (
      ((chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
        ++chunkXPW4576IParam9.position,
      )),
      chunkXPW4576IValue117 === 43 || chunkXPW4576IValue117 === 45)
    )
      1 === chunkXPW4576IValue110
        ? (chunkXPW4576IValue110 = chunkXPW4576IValue117 === 43 ? 3 : 2)
        : chunkXPW4576IHelper59(
            chunkXPW4576IParam9,
            "repeat of a chomping mode identifier",
          );
    else if (
      (chunkXPW4576IValue116 = chunkXPW4576IHelper54(chunkXPW4576IValue117)) >=
      0
    )
      chunkXPW4576IValue116 === 0
        ? chunkXPW4576IHelper59(
            chunkXPW4576IParam9,
            "bad explicit indentation width of a block scalar; it cannot be less than one",
          )
        : chunkXPW4576IValue112
          ? chunkXPW4576IHelper59(
              chunkXPW4576IParam9,
              "repeat of an indentation width identifier",
            )
          : ((chunkXPW4576IValue113 =
              chunkXPW4576IParam10 + chunkXPW4576IValue116 - 1),
            (chunkXPW4576IValue112 = true));
    else break;
  if (chunkXPW4576IHelper49(chunkXPW4576IValue117)) {
    do
      chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
        ++chunkXPW4576IParam9.position,
      );
    while (chunkXPW4576IHelper49(chunkXPW4576IValue117));
    if (chunkXPW4576IValue117 === 35)
      do
        chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
          ++chunkXPW4576IParam9.position,
        );
      while (
        !chunkXPW4576IHelper48(chunkXPW4576IValue117) &&
        chunkXPW4576IValue117 !== 0
      );
  }
  for (; chunkXPW4576IValue117 !== 0; ) {
    for (
      chunkXPW4576IHelper64(chunkXPW4576IParam9),
        chunkXPW4576IParam9.lineIndent = 0,
        chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
          chunkXPW4576IParam9.position,
        );
      (!chunkXPW4576IValue112 ||
        chunkXPW4576IParam9.lineIndent < chunkXPW4576IValue113) &&
      chunkXPW4576IValue117 === 32;

    ) {
      chunkXPW4576IParam9.lineIndent++;
      chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
        ++chunkXPW4576IParam9.position,
      );
    }
    if (
      (!chunkXPW4576IValue112 &&
        chunkXPW4576IParam9.lineIndent > chunkXPW4576IValue113 &&
        (chunkXPW4576IValue113 = chunkXPW4576IParam9.lineIndent),
      chunkXPW4576IHelper48(chunkXPW4576IValue117))
    ) {
      chunkXPW4576IValue114++;
      continue;
    }
    if (chunkXPW4576IParam9.lineIndent < chunkXPW4576IValue113) {
      chunkXPW4576IValue110 === 3
        ? (chunkXPW4576IParam9.result += chunkXPW4576IValue1.repeat(
            "\n",
            chunkXPW4576IValue111
              ? 1 + chunkXPW4576IValue114
              : chunkXPW4576IValue114,
          ))
        : chunkXPW4576IValue110 === 1 &&
          chunkXPW4576IValue111 &&
          (chunkXPW4576IParam9.result += "\n");
      break;
    }
    for (
      chunkXPW4576IValue109
        ? chunkXPW4576IHelper49(chunkXPW4576IValue117)
          ? ((chunkXPW4576IValue115 = true),
            (chunkXPW4576IParam9.result += chunkXPW4576IValue1.repeat(
              "\n",
              chunkXPW4576IValue111
                ? 1 + chunkXPW4576IValue114
                : chunkXPW4576IValue114,
            )))
          : chunkXPW4576IValue115
            ? ((chunkXPW4576IValue115 = false),
              (chunkXPW4576IParam9.result += chunkXPW4576IValue1.repeat(
                "\n",
                chunkXPW4576IValue114 + 1,
              )))
            : chunkXPW4576IValue114 === 0
              ? chunkXPW4576IValue111 && (chunkXPW4576IParam9.result += " ")
              : (chunkXPW4576IParam9.result += chunkXPW4576IValue1.repeat(
                  "\n",
                  chunkXPW4576IValue114,
                ))
        : (chunkXPW4576IParam9.result += chunkXPW4576IValue1.repeat(
            "\n",
            chunkXPW4576IValue111
              ? 1 + chunkXPW4576IValue114
              : chunkXPW4576IValue114,
          )),
        chunkXPW4576IValue111 = true,
        chunkXPW4576IValue112 = true,
        chunkXPW4576IValue114 = 0,
        chunkXPW4576IValue108 = chunkXPW4576IParam9.position;
      !chunkXPW4576IHelper48(chunkXPW4576IValue117) &&
      chunkXPW4576IValue117 !== 0;

    )
      chunkXPW4576IValue117 = chunkXPW4576IParam9.input.charCodeAt(
        ++chunkXPW4576IParam9.position,
      );
    chunkXPW4576IHelper61(
      chunkXPW4576IParam9,
      chunkXPW4576IValue108,
      chunkXPW4576IParam9.position,
      false,
    );
  }
  return true;
}
chunkAGHRB4JFN(chunkXPW4576IHelper72, "readBlockScalar");
function chunkXPW4576IHelper73(chunkXPW4576IParam33, chunkXPW4576IParam34) {
  var chunkXPW4576IValue183,
    chunkXPW4576IValue184 = chunkXPW4576IParam33.tag,
    chunkXPW4576IValue185 = chunkXPW4576IParam33.anchor,
    chunkXPW4576IValue186 = [],
    chunkXPW4576IValue187,
    chunkXPW4576IValue188 = false,
    chunkXPW4576IValue189;
  if (chunkXPW4576IParam33.firstTabInLine !== -1) return false;
  for (
    chunkXPW4576IParam33.anchor !== null &&
      (chunkXPW4576IParam33.anchorMap[chunkXPW4576IParam33.anchor] =
        chunkXPW4576IValue186),
      chunkXPW4576IValue189 = chunkXPW4576IParam33.input.charCodeAt(
        chunkXPW4576IParam33.position,
      );
    chunkXPW4576IValue189 !== 0 &&
    (chunkXPW4576IParam33.firstTabInLine !== -1 &&
      ((chunkXPW4576IParam33.position = chunkXPW4576IParam33.firstTabInLine),
      chunkXPW4576IHelper59(
        chunkXPW4576IParam33,
        "tab characters must not be used in indentation",
      )),
    !(
      chunkXPW4576IValue189 !== 45 ||
      ((chunkXPW4576IValue187 = chunkXPW4576IParam33.input.charCodeAt(
        chunkXPW4576IParam33.position + 1,
      )),
      !chunkXPW4576IHelper50(chunkXPW4576IValue187))
    ));

  ) {
    if (
      ((chunkXPW4576IValue188 = true),
      chunkXPW4576IParam33.position++,
      chunkXPW4576IHelper65(chunkXPW4576IParam33, true, -1) &&
        chunkXPW4576IParam33.lineIndent <= chunkXPW4576IParam34)
    ) {
      chunkXPW4576IValue186.push(null);
      chunkXPW4576IValue189 = chunkXPW4576IParam33.input.charCodeAt(
        chunkXPW4576IParam33.position,
      );
      continue;
    }
    if (
      ((chunkXPW4576IValue183 = chunkXPW4576IParam33.line),
      chunkXPW4576IHelper78(
        chunkXPW4576IParam33,
        chunkXPW4576IParam34,
        3,
        false,
        true,
      ),
      chunkXPW4576IValue186.push(chunkXPW4576IParam33.result),
      chunkXPW4576IHelper65(chunkXPW4576IParam33, true, -1),
      (chunkXPW4576IValue189 = chunkXPW4576IParam33.input.charCodeAt(
        chunkXPW4576IParam33.position,
      )),
      (chunkXPW4576IParam33.line === chunkXPW4576IValue183 ||
        chunkXPW4576IParam33.lineIndent > chunkXPW4576IParam34) &&
        chunkXPW4576IValue189 !== 0)
    )
      chunkXPW4576IHelper59(
        chunkXPW4576IParam33,
        "bad indentation of a sequence entry",
      );
    else if (chunkXPW4576IParam33.lineIndent < chunkXPW4576IParam34) break;
  }
  return chunkXPW4576IValue188
    ? ((chunkXPW4576IParam33.tag = chunkXPW4576IValue184),
      (chunkXPW4576IParam33.anchor = chunkXPW4576IValue185),
      (chunkXPW4576IParam33.kind = "sequence"),
      (chunkXPW4576IParam33.result = chunkXPW4576IValue186),
      true)
    : false;
}
chunkAGHRB4JFN(chunkXPW4576IHelper73, "readBlockSequence");
function chunkXPW4576IHelper74(
  chunkXPW4576IParam6,
  chunkXPW4576IParam7,
  chunkXPW4576IParam8,
) {
  var chunkXPW4576IValue92,
    chunkXPW4576IValue93,
    chunkXPW4576IValue94,
    chunkXPW4576IValue95,
    chunkXPW4576IValue96,
    chunkXPW4576IValue97,
    chunkXPW4576IValue98 = chunkXPW4576IParam6.tag,
    chunkXPW4576IValue99 = chunkXPW4576IParam6.anchor,
    chunkXPW4576IValue100 = {},
    chunkXPW4576IValue101 = Object.create(null),
    chunkXPW4576IValue102 = null,
    chunkXPW4576IValue103 = null,
    chunkXPW4576IValue104 = null,
    chunkXPW4576IValue105 = false,
    chunkXPW4576IValue106 = false,
    chunkXPW4576IValue107;
  if (chunkXPW4576IParam6.firstTabInLine !== -1) return false;
  for (
    chunkXPW4576IParam6.anchor !== null &&
      (chunkXPW4576IParam6.anchorMap[chunkXPW4576IParam6.anchor] =
        chunkXPW4576IValue100),
      chunkXPW4576IValue107 = chunkXPW4576IParam6.input.charCodeAt(
        chunkXPW4576IParam6.position,
      );
    chunkXPW4576IValue107 !== 0;

  ) {
    if (
      (!chunkXPW4576IValue105 &&
        chunkXPW4576IParam6.firstTabInLine !== -1 &&
        ((chunkXPW4576IParam6.position = chunkXPW4576IParam6.firstTabInLine),
        chunkXPW4576IHelper59(
          chunkXPW4576IParam6,
          "tab characters must not be used in indentation",
        )),
      (chunkXPW4576IValue92 = chunkXPW4576IParam6.input.charCodeAt(
        chunkXPW4576IParam6.position + 1,
      )),
      (chunkXPW4576IValue94 = chunkXPW4576IParam6.line),
      (chunkXPW4576IValue107 === 63 || chunkXPW4576IValue107 === 58) &&
        chunkXPW4576IHelper50(chunkXPW4576IValue92))
    ) {
      chunkXPW4576IValue107 === 63
        ? (chunkXPW4576IValue105 &&
            (chunkXPW4576IHelper63(
              chunkXPW4576IParam6,
              chunkXPW4576IValue100,
              chunkXPW4576IValue101,
              chunkXPW4576IValue102,
              chunkXPW4576IValue103,
              null,
              chunkXPW4576IValue95,
              chunkXPW4576IValue96,
              chunkXPW4576IValue97,
            ),
            (chunkXPW4576IValue102 =
              chunkXPW4576IValue103 =
              chunkXPW4576IValue104 =
                null)),
          (chunkXPW4576IValue106 = true),
          (chunkXPW4576IValue105 = true),
          (chunkXPW4576IValue93 = true))
        : chunkXPW4576IValue105
          ? ((chunkXPW4576IValue105 = false), (chunkXPW4576IValue93 = true))
          : chunkXPW4576IHelper59(
              chunkXPW4576IParam6,
              "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line",
            );
      chunkXPW4576IParam6.position += 1;
      chunkXPW4576IValue107 = chunkXPW4576IValue92;
    } else {
      if (
        ((chunkXPW4576IValue95 = chunkXPW4576IParam6.line),
        (chunkXPW4576IValue96 = chunkXPW4576IParam6.lineStart),
        (chunkXPW4576IValue97 = chunkXPW4576IParam6.position),
        !chunkXPW4576IHelper78(
          chunkXPW4576IParam6,
          chunkXPW4576IParam8,
          2,
          false,
          true,
        ))
      )
        break;
      if (chunkXPW4576IParam6.line === chunkXPW4576IValue94) {
        for (
          chunkXPW4576IValue107 = chunkXPW4576IParam6.input.charCodeAt(
            chunkXPW4576IParam6.position,
          );
          chunkXPW4576IHelper49(chunkXPW4576IValue107);

        )
          chunkXPW4576IValue107 = chunkXPW4576IParam6.input.charCodeAt(
            ++chunkXPW4576IParam6.position,
          );
        if (chunkXPW4576IValue107 === 58) {
          chunkXPW4576IValue107 = chunkXPW4576IParam6.input.charCodeAt(
            ++chunkXPW4576IParam6.position,
          );
          chunkXPW4576IHelper50(chunkXPW4576IValue107) ||
            chunkXPW4576IHelper59(
              chunkXPW4576IParam6,
              "a whitespace character is expected after the key-value separator within a block mapping",
            );
          chunkXPW4576IValue105 &&
            (chunkXPW4576IHelper63(
              chunkXPW4576IParam6,
              chunkXPW4576IValue100,
              chunkXPW4576IValue101,
              chunkXPW4576IValue102,
              chunkXPW4576IValue103,
              null,
              chunkXPW4576IValue95,
              chunkXPW4576IValue96,
              chunkXPW4576IValue97,
            ),
            (chunkXPW4576IValue102 =
              chunkXPW4576IValue103 =
              chunkXPW4576IValue104 =
                null));
          chunkXPW4576IValue106 = true;
          chunkXPW4576IValue105 = false;
          chunkXPW4576IValue93 = false;
          chunkXPW4576IValue102 = chunkXPW4576IParam6.tag;
          chunkXPW4576IValue103 = chunkXPW4576IParam6.result;
        } else if (chunkXPW4576IValue106)
          chunkXPW4576IHelper59(
            chunkXPW4576IParam6,
            "can not read an implicit mapping pair; a colon is missed",
          );
        else
          return (
            (chunkXPW4576IParam6.tag = chunkXPW4576IValue98),
            (chunkXPW4576IParam6.anchor = chunkXPW4576IValue99),
            true
          );
      } else if (chunkXPW4576IValue106)
        chunkXPW4576IHelper59(
          chunkXPW4576IParam6,
          "can not read a block mapping entry; a multiline key may not be an implicit key",
        );
      else
        return (
          (chunkXPW4576IParam6.tag = chunkXPW4576IValue98),
          (chunkXPW4576IParam6.anchor = chunkXPW4576IValue99),
          true
        );
    }
    if (
      ((chunkXPW4576IParam6.line === chunkXPW4576IValue94 ||
        chunkXPW4576IParam6.lineIndent > chunkXPW4576IParam7) &&
        (chunkXPW4576IValue105 &&
          ((chunkXPW4576IValue95 = chunkXPW4576IParam6.line),
          (chunkXPW4576IValue96 = chunkXPW4576IParam6.lineStart),
          (chunkXPW4576IValue97 = chunkXPW4576IParam6.position)),
        chunkXPW4576IHelper78(
          chunkXPW4576IParam6,
          chunkXPW4576IParam7,
          4,
          true,
          chunkXPW4576IValue93,
        ) &&
          (chunkXPW4576IValue105
            ? (chunkXPW4576IValue103 = chunkXPW4576IParam6.result)
            : (chunkXPW4576IValue104 = chunkXPW4576IParam6.result)),
        chunkXPW4576IValue105 ||
          (chunkXPW4576IHelper63(
            chunkXPW4576IParam6,
            chunkXPW4576IValue100,
            chunkXPW4576IValue101,
            chunkXPW4576IValue102,
            chunkXPW4576IValue103,
            chunkXPW4576IValue104,
            chunkXPW4576IValue95,
            chunkXPW4576IValue96,
            chunkXPW4576IValue97,
          ),
          (chunkXPW4576IValue102 =
            chunkXPW4576IValue103 =
            chunkXPW4576IValue104 =
              null)),
        chunkXPW4576IHelper65(chunkXPW4576IParam6, true, -1),
        (chunkXPW4576IValue107 = chunkXPW4576IParam6.input.charCodeAt(
          chunkXPW4576IParam6.position,
        ))),
      (chunkXPW4576IParam6.line === chunkXPW4576IValue94 ||
        chunkXPW4576IParam6.lineIndent > chunkXPW4576IParam7) &&
        chunkXPW4576IValue107 !== 0)
    )
      chunkXPW4576IHelper59(
        chunkXPW4576IParam6,
        "bad indentation of a mapping entry",
      );
    else if (chunkXPW4576IParam6.lineIndent < chunkXPW4576IParam7) break;
  }
  return (
    chunkXPW4576IValue105 &&
      chunkXPW4576IHelper63(
        chunkXPW4576IParam6,
        chunkXPW4576IValue100,
        chunkXPW4576IValue101,
        chunkXPW4576IValue102,
        chunkXPW4576IValue103,
        null,
        chunkXPW4576IValue95,
        chunkXPW4576IValue96,
        chunkXPW4576IValue97,
      ),
    chunkXPW4576IValue106 &&
      ((chunkXPW4576IParam6.tag = chunkXPW4576IValue98),
      (chunkXPW4576IParam6.anchor = chunkXPW4576IValue99),
      (chunkXPW4576IParam6.kind = "mapping"),
      (chunkXPW4576IParam6.result = chunkXPW4576IValue100)),
    chunkXPW4576IValue106
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper74, "readBlockMapping");
function chunkXPW4576IHelper75(chunkXPW4576IParam21) {
  var chunkXPW4576IValue147,
    chunkXPW4576IValue148 = false,
    chunkXPW4576IValue149 = false,
    chunkXPW4576IValue150,
    chunkXPW4576IValue151,
    chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
      chunkXPW4576IParam21.position,
    );
  if (chunkXPW4576IValue152 !== 33) return false;
  if (
    (chunkXPW4576IParam21.tag !== null &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam21,
        "duplication of a tag property",
      ),
    (chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
      ++chunkXPW4576IParam21.position,
    )),
    chunkXPW4576IValue152 === 60
      ? ((chunkXPW4576IValue148 = true),
        (chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
          ++chunkXPW4576IParam21.position,
        )))
      : chunkXPW4576IValue152 === 33
        ? ((chunkXPW4576IValue149 = true),
          (chunkXPW4576IValue150 = "!!"),
          (chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
            ++chunkXPW4576IParam21.position,
          )))
        : (chunkXPW4576IValue150 = "!"),
    (chunkXPW4576IValue147 = chunkXPW4576IParam21.position),
    chunkXPW4576IValue148)
  ) {
    do
      chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
        ++chunkXPW4576IParam21.position,
      );
    while (chunkXPW4576IValue152 !== 0 && chunkXPW4576IValue152 !== 62);
    chunkXPW4576IParam21.position < chunkXPW4576IParam21.length
      ? ((chunkXPW4576IValue151 = chunkXPW4576IParam21.input.slice(
          chunkXPW4576IValue147,
          chunkXPW4576IParam21.position,
        )),
        (chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
          ++chunkXPW4576IParam21.position,
        )))
      : chunkXPW4576IHelper59(
          chunkXPW4576IParam21,
          "unexpected end of the stream within a verbatim tag",
        );
  } else {
    for (
      ;
      chunkXPW4576IValue152 !== 0 &&
      !chunkXPW4576IHelper50(chunkXPW4576IValue152);

    ) {
      chunkXPW4576IValue152 === 33 &&
        (chunkXPW4576IValue149
          ? chunkXPW4576IHelper59(
              chunkXPW4576IParam21,
              "tag suffix cannot contain exclamation marks",
            )
          : ((chunkXPW4576IValue150 = chunkXPW4576IParam21.input.slice(
              chunkXPW4576IValue147 - 1,
              chunkXPW4576IParam21.position + 1,
            )),
            chunkXPW4576IValue37.test(chunkXPW4576IValue150) ||
              chunkXPW4576IHelper59(
                chunkXPW4576IParam21,
                "named tag handle cannot contain such characters",
              ),
            (chunkXPW4576IValue149 = true),
            (chunkXPW4576IValue147 = chunkXPW4576IParam21.position + 1)));
      chunkXPW4576IValue152 = chunkXPW4576IParam21.input.charCodeAt(
        ++chunkXPW4576IParam21.position,
      );
    }
    chunkXPW4576IValue151 = chunkXPW4576IParam21.input.slice(
      chunkXPW4576IValue147,
      chunkXPW4576IParam21.position,
    );
    at.test(chunkXPW4576IValue151) &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam21,
        "tag suffix cannot contain flow indicator characters",
      );
  }
  chunkXPW4576IValue151 &&
    !chunkXPW4576IValue38.test(chunkXPW4576IValue151) &&
    chunkXPW4576IHelper59(
      chunkXPW4576IParam21,
      "tag name cannot contain such characters: " + chunkXPW4576IValue151,
    );
  try {
    chunkXPW4576IValue151 = decodeURIComponent(chunkXPW4576IValue151);
  } catch {
    chunkXPW4576IHelper59(
      chunkXPW4576IParam21,
      "tag name is malformed: " + chunkXPW4576IValue151,
    );
  }
  return (
    chunkXPW4576IValue148
      ? (chunkXPW4576IParam21.tag = chunkXPW4576IValue151)
      : chunkXPW4576IValue28.call(
            chunkXPW4576IParam21.tagMap,
            chunkXPW4576IValue150,
          )
        ? (chunkXPW4576IParam21.tag =
            chunkXPW4576IParam21.tagMap[chunkXPW4576IValue150] +
            chunkXPW4576IValue151)
        : chunkXPW4576IValue150 === "!"
          ? (chunkXPW4576IParam21.tag = "!" + chunkXPW4576IValue151)
          : chunkXPW4576IValue150 === "!!"
            ? (chunkXPW4576IParam21.tag =
                "tag:yaml.org,2002:" + chunkXPW4576IValue151)
            : chunkXPW4576IHelper59(
                chunkXPW4576IParam21,
                'undeclared tag handle "' + chunkXPW4576IValue150 + '"',
              ),
    true
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper75, "readTagProperty");
function chunkXPW4576IHelper76(chunkXPW4576IParam97) {
  var chunkXPW4576IValue286,
    chunkXPW4576IValue287 = chunkXPW4576IParam97.input.charCodeAt(
      chunkXPW4576IParam97.position,
    );
  if (chunkXPW4576IValue287 !== 38) return false;
  for (
    chunkXPW4576IParam97.anchor !== null &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam97,
        "duplication of an anchor property",
      ),
      chunkXPW4576IValue287 = chunkXPW4576IParam97.input.charCodeAt(
        ++chunkXPW4576IParam97.position,
      ),
      chunkXPW4576IValue286 = chunkXPW4576IParam97.position;
    chunkXPW4576IValue287 !== 0 &&
    !chunkXPW4576IHelper50(chunkXPW4576IValue287) &&
    !chunkXPW4576IHelper51(chunkXPW4576IValue287);

  )
    chunkXPW4576IValue287 = chunkXPW4576IParam97.input.charCodeAt(
      ++chunkXPW4576IParam97.position,
    );
  return (
    chunkXPW4576IParam97.position === chunkXPW4576IValue286 &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam97,
        "name of an anchor node must contain at least one character",
      ),
    (chunkXPW4576IParam97.anchor = chunkXPW4576IParam97.input.slice(
      chunkXPW4576IValue286,
      chunkXPW4576IParam97.position,
    )),
    true
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper76, "readAnchorProperty");
function chunkXPW4576IHelper77(chunkXPW4576IParam91) {
  var chunkXPW4576IValue275,
    chunkXPW4576IValue276,
    chunkXPW4576IValue277 = chunkXPW4576IParam91.input.charCodeAt(
      chunkXPW4576IParam91.position,
    );
  if (chunkXPW4576IValue277 !== 42) return false;
  for (
    chunkXPW4576IValue277 = chunkXPW4576IParam91.input.charCodeAt(
      ++chunkXPW4576IParam91.position,
    ),
      chunkXPW4576IValue275 = chunkXPW4576IParam91.position;
    chunkXPW4576IValue277 !== 0 &&
    !chunkXPW4576IHelper50(chunkXPW4576IValue277) &&
    !chunkXPW4576IHelper51(chunkXPW4576IValue277);

  )
    chunkXPW4576IValue277 = chunkXPW4576IParam91.input.charCodeAt(
      ++chunkXPW4576IParam91.position,
    );
  return (
    chunkXPW4576IParam91.position === chunkXPW4576IValue275 &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam91,
        "name of an alias node must contain at least one character",
      ),
    (chunkXPW4576IValue276 = chunkXPW4576IParam91.input.slice(
      chunkXPW4576IValue275,
      chunkXPW4576IParam91.position,
    )),
    chunkXPW4576IValue28.call(
      chunkXPW4576IParam91.anchorMap,
      chunkXPW4576IValue276,
    ) ||
      chunkXPW4576IHelper59(
        chunkXPW4576IParam91,
        'unidentified alias "' + chunkXPW4576IValue276 + '"',
      ),
    (chunkXPW4576IParam91.result =
      chunkXPW4576IParam91.anchorMap[chunkXPW4576IValue276]),
    chunkXPW4576IHelper65(chunkXPW4576IParam91, true, -1),
    true
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper77, "readAlias");
function chunkXPW4576IHelper78(
  chunkXPW4576IParam1,
  chunkXPW4576IParam2,
  chunkXPW4576IParam3,
  chunkXPW4576IParam4,
  chunkXPW4576IParam5,
) {
  var chunkXPW4576IValue80,
    chunkXPW4576IValue81,
    chunkXPW4576IValue82,
    chunkXPW4576IValue83 = 1,
    chunkXPW4576IValue84 = false,
    chunkXPW4576IValue85 = false,
    chunkXPW4576IValue86,
    chunkXPW4576IValue87,
    chunkXPW4576IValue88,
    chunkXPW4576IValue89,
    chunkXPW4576IValue90,
    chunkXPW4576IValue91;
  if (
    (chunkXPW4576IParam1.listener !== null &&
      chunkXPW4576IParam1.listener("open", chunkXPW4576IParam1),
    (chunkXPW4576IParam1.tag = null),
    (chunkXPW4576IParam1.anchor = null),
    (chunkXPW4576IParam1.kind = null),
    (chunkXPW4576IParam1.result = null),
    (chunkXPW4576IValue80 =
      chunkXPW4576IValue81 =
      chunkXPW4576IValue82 =
        4 === chunkXPW4576IParam3 || 3 === chunkXPW4576IParam3),
    chunkXPW4576IParam4 &&
      chunkXPW4576IHelper65(chunkXPW4576IParam1, true, -1) &&
      ((chunkXPW4576IValue84 = true),
      chunkXPW4576IParam1.lineIndent > chunkXPW4576IParam2
        ? (chunkXPW4576IValue83 = 1)
        : chunkXPW4576IParam1.lineIndent === chunkXPW4576IParam2
          ? (chunkXPW4576IValue83 = 0)
          : chunkXPW4576IParam1.lineIndent < chunkXPW4576IParam2 &&
            (chunkXPW4576IValue83 = -1)),
    chunkXPW4576IValue83 === 1)
  )
    for (
      ;
      chunkXPW4576IHelper75(chunkXPW4576IParam1) ||
      chunkXPW4576IHelper76(chunkXPW4576IParam1);

    )
      chunkXPW4576IHelper65(chunkXPW4576IParam1, true, -1)
        ? ((chunkXPW4576IValue84 = true),
          (chunkXPW4576IValue82 = chunkXPW4576IValue80),
          chunkXPW4576IParam1.lineIndent > chunkXPW4576IParam2
            ? (chunkXPW4576IValue83 = 1)
            : chunkXPW4576IParam1.lineIndent === chunkXPW4576IParam2
              ? (chunkXPW4576IValue83 = 0)
              : chunkXPW4576IParam1.lineIndent < chunkXPW4576IParam2 &&
                (chunkXPW4576IValue83 = -1))
        : (chunkXPW4576IValue82 = false);
  if (
    ((chunkXPW4576IValue82 &&= chunkXPW4576IValue84 || chunkXPW4576IParam5),
    (chunkXPW4576IValue83 === 1 || 4 === chunkXPW4576IParam3) &&
      ((chunkXPW4576IValue90 =
        1 === chunkXPW4576IParam3 || 2 === chunkXPW4576IParam3
          ? chunkXPW4576IParam2
          : chunkXPW4576IParam2 + 1),
      (chunkXPW4576IValue91 =
        chunkXPW4576IParam1.position - chunkXPW4576IParam1.lineStart),
      chunkXPW4576IValue83 === 1
        ? (chunkXPW4576IValue82 &&
            (chunkXPW4576IHelper73(chunkXPW4576IParam1, chunkXPW4576IValue91) ||
              chunkXPW4576IHelper74(
                chunkXPW4576IParam1,
                chunkXPW4576IValue91,
                chunkXPW4576IValue90,
              ))) ||
          chunkXPW4576IHelper71(chunkXPW4576IParam1, chunkXPW4576IValue90)
          ? (chunkXPW4576IValue85 = true)
          : ((chunkXPW4576IValue81 &&
              chunkXPW4576IHelper72(
                chunkXPW4576IParam1,
                chunkXPW4576IValue90,
              )) ||
            chunkXPW4576IHelper69(chunkXPW4576IParam1, chunkXPW4576IValue90) ||
            chunkXPW4576IHelper70(chunkXPW4576IParam1, chunkXPW4576IValue90)
              ? (chunkXPW4576IValue85 = true)
              : chunkXPW4576IHelper77(chunkXPW4576IParam1)
                ? ((chunkXPW4576IValue85 = true),
                  (chunkXPW4576IParam1.tag !== null ||
                    chunkXPW4576IParam1.anchor !== null) &&
                    chunkXPW4576IHelper59(
                      chunkXPW4576IParam1,
                      "alias node should not have any properties",
                    ))
                : chunkXPW4576IHelper68(
                    chunkXPW4576IParam1,
                    chunkXPW4576IValue90,
                    1 === chunkXPW4576IParam3,
                  ) &&
                  ((chunkXPW4576IValue85 = true),
                  chunkXPW4576IParam1.tag === null &&
                    (chunkXPW4576IParam1.tag = "?")),
            chunkXPW4576IParam1.anchor !== null &&
              (chunkXPW4576IParam1.anchorMap[chunkXPW4576IParam1.anchor] =
                chunkXPW4576IParam1.result))
        : chunkXPW4576IValue83 === 0 &&
          (chunkXPW4576IValue85 =
            chunkXPW4576IValue82 &&
            chunkXPW4576IHelper73(chunkXPW4576IParam1, chunkXPW4576IValue91))),
    chunkXPW4576IParam1.tag === null)
  )
    chunkXPW4576IParam1.anchor !== null &&
      (chunkXPW4576IParam1.anchorMap[chunkXPW4576IParam1.anchor] =
        chunkXPW4576IParam1.result);
  else if (chunkXPW4576IParam1.tag === "?") {
    for (
      chunkXPW4576IParam1.result !== null &&
        chunkXPW4576IParam1.kind !== "scalar" &&
        chunkXPW4576IHelper59(
          chunkXPW4576IParam1,
          'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
            chunkXPW4576IParam1.kind +
            '"',
        ),
        chunkXPW4576IValue86 = 0,
        chunkXPW4576IValue87 = chunkXPW4576IParam1.implicitTypes.length;
      chunkXPW4576IValue86 < chunkXPW4576IValue87;
      chunkXPW4576IValue86 += 1
    )
      if (
        ((chunkXPW4576IValue89 =
          chunkXPW4576IParam1.implicitTypes[chunkXPW4576IValue86]),
        chunkXPW4576IValue89.resolve(chunkXPW4576IParam1.result))
      ) {
        chunkXPW4576IParam1.result = chunkXPW4576IValue89.construct(
          chunkXPW4576IParam1.result,
        );
        chunkXPW4576IParam1.tag = chunkXPW4576IValue89.tag;
        chunkXPW4576IParam1.anchor !== null &&
          (chunkXPW4576IParam1.anchorMap[chunkXPW4576IParam1.anchor] =
            chunkXPW4576IParam1.result);
        break;
      }
  } else if (chunkXPW4576IParam1.tag !== "!") {
    if (
      chunkXPW4576IValue28.call(
        chunkXPW4576IParam1.typeMap[chunkXPW4576IParam1.kind || "fallback"],
        chunkXPW4576IParam1.tag,
      )
    )
      chunkXPW4576IValue89 =
        chunkXPW4576IParam1.typeMap[chunkXPW4576IParam1.kind || "fallback"][
          chunkXPW4576IParam1.tag
        ];
    else
      for (
        chunkXPW4576IValue89 = null,
          chunkXPW4576IValue88 =
            chunkXPW4576IParam1.typeMap.multi[
              chunkXPW4576IParam1.kind || "fallback"
            ],
          chunkXPW4576IValue86 = 0,
          chunkXPW4576IValue87 = chunkXPW4576IValue88.length;
        chunkXPW4576IValue86 < chunkXPW4576IValue87;
        chunkXPW4576IValue86 += 1
      )
        if (
          chunkXPW4576IParam1.tag.slice(
            0,
            chunkXPW4576IValue88[chunkXPW4576IValue86].tag.length,
          ) === chunkXPW4576IValue88[chunkXPW4576IValue86].tag
        ) {
          chunkXPW4576IValue89 = chunkXPW4576IValue88[chunkXPW4576IValue86];
          break;
        }
    chunkXPW4576IValue89 ||
      chunkXPW4576IHelper59(
        chunkXPW4576IParam1,
        "unknown tag !<" + chunkXPW4576IParam1.tag + ">",
      );
    chunkXPW4576IParam1.result !== null &&
      chunkXPW4576IValue89.kind !== chunkXPW4576IParam1.kind &&
      chunkXPW4576IHelper59(
        chunkXPW4576IParam1,
        "unacceptable node kind for !<" +
          chunkXPW4576IParam1.tag +
          '> tag; it should be "' +
          chunkXPW4576IValue89.kind +
          '", not "' +
          chunkXPW4576IParam1.kind +
          '"',
      );
    chunkXPW4576IValue89.resolve(
      chunkXPW4576IParam1.result,
      chunkXPW4576IParam1.tag,
    )
      ? ((chunkXPW4576IParam1.result = chunkXPW4576IValue89.construct(
          chunkXPW4576IParam1.result,
          chunkXPW4576IParam1.tag,
        )),
        chunkXPW4576IParam1.anchor !== null &&
          (chunkXPW4576IParam1.anchorMap[chunkXPW4576IParam1.anchor] =
            chunkXPW4576IParam1.result))
      : chunkXPW4576IHelper59(
          chunkXPW4576IParam1,
          "cannot resolve a node with !<" +
            chunkXPW4576IParam1.tag +
            "> explicit tag",
        );
  }
  return (
    chunkXPW4576IParam1.listener !== null &&
      chunkXPW4576IParam1.listener("close", chunkXPW4576IParam1),
    chunkXPW4576IParam1.tag !== null ||
      chunkXPW4576IParam1.anchor !== null ||
      chunkXPW4576IValue85
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper78, "composeNode");
function chunkXPW4576IHelper79(chunkXPW4576IParam11) {
  var chunkXPW4576IValue118 = chunkXPW4576IParam11.position,
    chunkXPW4576IValue119,
    chunkXPW4576IValue120,
    chunkXPW4576IValue121,
    chunkXPW4576IValue122 = false,
    chunkXPW4576IValue123;
  for (
    chunkXPW4576IParam11.version = null,
      chunkXPW4576IParam11.checkLineBreaks = chunkXPW4576IParam11.legacy,
      chunkXPW4576IParam11.tagMap = Object.create(null),
      chunkXPW4576IParam11.anchorMap = Object.create(null);
    (chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
      chunkXPW4576IParam11.position,
    )) !== 0 &&
    (chunkXPW4576IHelper65(chunkXPW4576IParam11, true, -1),
    (chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
      chunkXPW4576IParam11.position,
    )),
    !(chunkXPW4576IParam11.lineIndent > 0 || chunkXPW4576IValue123 !== 37));

  ) {
    for (
      chunkXPW4576IValue122 = true,
        chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
          ++chunkXPW4576IParam11.position,
        ),
        chunkXPW4576IValue119 = chunkXPW4576IParam11.position;
      chunkXPW4576IValue123 !== 0 &&
      !chunkXPW4576IHelper50(chunkXPW4576IValue123);

    )
      chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
        ++chunkXPW4576IParam11.position,
      );
    for (
      chunkXPW4576IValue120 = chunkXPW4576IParam11.input.slice(
        chunkXPW4576IValue119,
        chunkXPW4576IParam11.position,
      ),
        chunkXPW4576IValue121 = [],
        chunkXPW4576IValue120.length < 1 &&
          chunkXPW4576IHelper59(
            chunkXPW4576IParam11,
            "directive name must not be less than one character in length",
          );
      chunkXPW4576IValue123 !== 0;

    ) {
      for (; chunkXPW4576IHelper49(chunkXPW4576IValue123); )
        chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
          ++chunkXPW4576IParam11.position,
        );
      if (chunkXPW4576IValue123 === 35) {
        do
          chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
            ++chunkXPW4576IParam11.position,
          );
        while (
          chunkXPW4576IValue123 !== 0 &&
          !chunkXPW4576IHelper48(chunkXPW4576IValue123)
        );
        break;
      }
      if (chunkXPW4576IHelper48(chunkXPW4576IValue123)) break;
      for (
        chunkXPW4576IValue119 = chunkXPW4576IParam11.position;
        chunkXPW4576IValue123 !== 0 &&
        !chunkXPW4576IHelper50(chunkXPW4576IValue123);

      )
        chunkXPW4576IValue123 = chunkXPW4576IParam11.input.charCodeAt(
          ++chunkXPW4576IParam11.position,
        );
      chunkXPW4576IValue121.push(
        chunkXPW4576IParam11.input.slice(
          chunkXPW4576IValue119,
          chunkXPW4576IParam11.position,
        ),
      );
    }
    chunkXPW4576IValue123 !== 0 && chunkXPW4576IHelper64(chunkXPW4576IParam11);
    chunkXPW4576IValue28.call(chunkXPW4576IValue42, chunkXPW4576IValue120)
      ? chunkXPW4576IValue42[chunkXPW4576IValue120](
          chunkXPW4576IParam11,
          chunkXPW4576IValue120,
          chunkXPW4576IValue121,
        )
      : chunkXPW4576IHelper60(
          chunkXPW4576IParam11,
          'unknown document directive "' + chunkXPW4576IValue120 + '"',
        );
  }
  if (
    (chunkXPW4576IHelper65(chunkXPW4576IParam11, true, -1),
    chunkXPW4576IParam11.lineIndent === 0 &&
    chunkXPW4576IParam11.input.charCodeAt(chunkXPW4576IParam11.position) ===
      45 &&
    chunkXPW4576IParam11.input.charCodeAt(chunkXPW4576IParam11.position + 1) ===
      45 &&
    chunkXPW4576IParam11.input.charCodeAt(chunkXPW4576IParam11.position + 2) ===
      45
      ? ((chunkXPW4576IParam11.position += 3),
        chunkXPW4576IHelper65(chunkXPW4576IParam11, true, -1))
      : chunkXPW4576IValue122 &&
        chunkXPW4576IHelper59(
          chunkXPW4576IParam11,
          "directives end mark is expected",
        ),
    chunkXPW4576IHelper78(
      chunkXPW4576IParam11,
      chunkXPW4576IParam11.lineIndent - 1,
      4,
      false,
      true,
    ),
    chunkXPW4576IHelper65(chunkXPW4576IParam11, true, -1),
    chunkXPW4576IParam11.checkLineBreaks &&
      chunkXPW4576IValue36.test(
        chunkXPW4576IParam11.input.slice(
          chunkXPW4576IValue118,
          chunkXPW4576IParam11.position,
        ),
      ) &&
      chunkXPW4576IHelper60(
        chunkXPW4576IParam11,
        "non-ASCII line breaks are interpreted as content",
      ),
    chunkXPW4576IParam11.documents.push(chunkXPW4576IParam11.result),
    chunkXPW4576IParam11.position === chunkXPW4576IParam11.lineStart &&
      chunkXPW4576IHelper66(chunkXPW4576IParam11))
  ) {
    chunkXPW4576IParam11.input.charCodeAt(chunkXPW4576IParam11.position) ===
      46 &&
      ((chunkXPW4576IParam11.position += 3),
      chunkXPW4576IHelper65(chunkXPW4576IParam11, true, -1));
    return;
  }
  if (chunkXPW4576IParam11.position < chunkXPW4576IParam11.length - 1)
    chunkXPW4576IHelper59(
      chunkXPW4576IParam11,
      "end of the stream or a document separator is expected",
    );
  else return;
}
chunkAGHRB4JFN(chunkXPW4576IHelper79, "readDocument");
function chunkXPW4576IHelper80(chunkXPW4576IParam87, chunkXPW4576IParam88) {
  chunkXPW4576IParam87 = String(chunkXPW4576IParam87);
  chunkXPW4576IParam88 ||= {};
  chunkXPW4576IParam87.length !== 0 &&
    (chunkXPW4576IParam87.charCodeAt(chunkXPW4576IParam87.length - 1) !== 10 &&
      chunkXPW4576IParam87.charCodeAt(chunkXPW4576IParam87.length - 1) !== 13 &&
      (chunkXPW4576IParam87 += "\n"),
    chunkXPW4576IParam87.charCodeAt(0) === 65279 &&
      (chunkXPW4576IParam87 = chunkXPW4576IParam87.slice(1)));
  var chunkXPW4576IValue266 = new chunkXPW4576IHelper58(
      chunkXPW4576IParam87,
      chunkXPW4576IParam88,
    ),
    chunkXPW4576IValue267 = chunkXPW4576IParam87.indexOf("\0");
  for (
    chunkXPW4576IValue267 !== -1 &&
      ((chunkXPW4576IValue266.position = chunkXPW4576IValue267),
      chunkXPW4576IHelper59(
        chunkXPW4576IValue266,
        "null byte is not allowed in input",
      )),
      chunkXPW4576IValue266.input += "\0";
    chunkXPW4576IValue266.input.charCodeAt(chunkXPW4576IValue266.position) ===
    32;

  ) {
    chunkXPW4576IValue266.lineIndent += 1;
    chunkXPW4576IValue266.position += 1;
  }
  for (; chunkXPW4576IValue266.position < chunkXPW4576IValue266.length - 1; )
    chunkXPW4576IHelper79(chunkXPW4576IValue266);
  return chunkXPW4576IValue266.documents;
}
chunkAGHRB4JFN(chunkXPW4576IHelper80, "loadDocuments");
function chunkXPW4576IHelper81(
  chunkXPW4576IParam153,
  chunkXPW4576IParam154,
  chunkXPW4576IParam155,
) {
  typeof chunkXPW4576IParam154 == "object" &&
    chunkXPW4576IParam154 &&
    chunkXPW4576IParam155 === undefined &&
    ((chunkXPW4576IParam155 = chunkXPW4576IParam154),
    (chunkXPW4576IParam154 = null));
  var chunkXPW4576IValue379 = chunkXPW4576IHelper80(
    chunkXPW4576IParam153,
    chunkXPW4576IParam155,
  );
  if (typeof chunkXPW4576IParam154 != "function") return chunkXPW4576IValue379;
  for (
    var chunkXPW4576IValue380 = 0,
      chunkXPW4576IValue381 = chunkXPW4576IValue379.length;
    chunkXPW4576IValue380 < chunkXPW4576IValue381;
    chunkXPW4576IValue380 += 1
  )
    chunkXPW4576IParam154(chunkXPW4576IValue379[chunkXPW4576IValue380]);
}
chunkAGHRB4JFN(chunkXPW4576IHelper81, "loadAll$1");
function chunkXPW4576IHelper82(chunkXPW4576IParam161, chunkXPW4576IParam162) {
  var chunkXPW4576IValue384 = chunkXPW4576IHelper80(
    chunkXPW4576IParam161,
    chunkXPW4576IParam162,
  );
  if (chunkXPW4576IValue384.length !== 0) {
    if (chunkXPW4576IValue384.length === 1) return chunkXPW4576IValue384[0];
    throw new chunkXPW4576IValue2(
      "expected a single document in the stream, but found more",
    );
  }
}
chunkAGHRB4JFN(chunkXPW4576IHelper82, "load$1");
var chunkXPW4576IValue43 = {
    loadAll: chunkXPW4576IHelper81,
    load: chunkXPW4576IHelper82,
  },
  chunkXPW4576IValue44 = Object.prototype.toString,
  chunkXPW4576IValue45 = Object.prototype.hasOwnProperty,
  chunkXPW4576IValue69 = {};
chunkXPW4576IValue69[0] = "\\0";
chunkXPW4576IValue69[7] = "\\a";
chunkXPW4576IValue69[8] = "\\b";
chunkXPW4576IValue69[9] = "\\t";
chunkXPW4576IValue69[10] = "\\n";
chunkXPW4576IValue69[11] = "\\v";
chunkXPW4576IValue69[12] = "\\f";
chunkXPW4576IValue69[13] = "\\r";
chunkXPW4576IValue69[27] = "\\e";
chunkXPW4576IValue69[34] = '\\"';
chunkXPW4576IValue69[92] = "\\\\";
chunkXPW4576IValue69[133] = "\\N";
chunkXPW4576IValue69[160] = "\\_";
chunkXPW4576IValue69[8232] = "\\L";
chunkXPW4576IValue69[8233] = "\\P";
var chunkXPW4576IValue70 = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF",
  ],
  chunkXPW4576IValue71 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function chunkXPW4576IHelper83(chunkXPW4576IParam101, chunkXPW4576IParam102) {
  var chunkXPW4576IValue305,
    chunkXPW4576IValue306,
    chunkXPW4576IValue307,
    chunkXPW4576IValue308,
    chunkXPW4576IValue309,
    chunkXPW4576IValue310,
    chunkXPW4576IValue311;
  if (chunkXPW4576IParam102 === null) return {};
  for (
    chunkXPW4576IValue305 = {},
      chunkXPW4576IValue306 = Object.keys(chunkXPW4576IParam102),
      chunkXPW4576IValue307 = 0,
      chunkXPW4576IValue308 = chunkXPW4576IValue306.length;
    chunkXPW4576IValue307 < chunkXPW4576IValue308;
    chunkXPW4576IValue307 += 1
  ) {
    chunkXPW4576IValue309 = chunkXPW4576IValue306[chunkXPW4576IValue307];
    chunkXPW4576IValue310 = String(
      chunkXPW4576IParam102[chunkXPW4576IValue309],
    );
    chunkXPW4576IValue309.slice(0, 2) === "!!" &&
      (chunkXPW4576IValue309 =
        "tag:yaml.org,2002:" + chunkXPW4576IValue309.slice(2));
    chunkXPW4576IValue311 =
      chunkXPW4576IParam101.compiledTypeMap.fallback[chunkXPW4576IValue309];
    chunkXPW4576IValue311 &&
      chunkXPW4576IValue45.call(
        chunkXPW4576IValue311.styleAliases,
        chunkXPW4576IValue310,
      ) &&
      (chunkXPW4576IValue310 =
        chunkXPW4576IValue311.styleAliases[chunkXPW4576IValue310]);
    chunkXPW4576IValue305[chunkXPW4576IValue309] = chunkXPW4576IValue310;
  }
  return chunkXPW4576IValue305;
}
chunkAGHRB4JFN(chunkXPW4576IHelper83, "compileStyleMap");
function chunkXPW4576IHelper84(chunkXPW4576IParam113) {
  var chunkXPW4576IValue327 = chunkXPW4576IParam113.toString(16).toUpperCase(),
    chunkXPW4576IValue328,
    chunkXPW4576IValue329;
  if (chunkXPW4576IParam113 <= 255) {
    chunkXPW4576IValue328 = "x";
    chunkXPW4576IValue329 = 2;
  } else if (chunkXPW4576IParam113 <= 65535) {
    chunkXPW4576IValue328 = "u";
    chunkXPW4576IValue329 = 4;
  } else if (chunkXPW4576IParam113 <= 4294967295) {
    chunkXPW4576IValue328 = "U";
    chunkXPW4576IValue329 = 8;
  } else
    throw new chunkXPW4576IValue2(
      "code point within a string may not be greater than 0xFFFFFFFF",
    );
  return (
    "\\" +
    chunkXPW4576IValue328 +
    chunkXPW4576IValue1.repeat(
      "0",
      chunkXPW4576IValue329 - chunkXPW4576IValue327.length,
    ) +
    chunkXPW4576IValue327
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper84, "encodeHex");
function chunkXPW4576IHelper85(chunkXPW4576IParam57) {
  this.schema = chunkXPW4576IParam57.schema || chunkXPW4576IValue27;
  this.indent = Math.max(1, chunkXPW4576IParam57.indent || 2);
  this.noArrayIndent = chunkXPW4576IParam57.noArrayIndent || false;
  this.skipInvalid = chunkXPW4576IParam57.skipInvalid || false;
  this.flowLevel = chunkXPW4576IValue1.isNothing(chunkXPW4576IParam57.flowLevel)
    ? -1
    : chunkXPW4576IParam57.flowLevel;
  this.styleMap = chunkXPW4576IHelper83(
    this.schema,
    chunkXPW4576IParam57.styles || null,
  );
  this.sortKeys = chunkXPW4576IParam57.sortKeys || false;
  this.lineWidth = chunkXPW4576IParam57.lineWidth || 80;
  this.noRefs = chunkXPW4576IParam57.noRefs || false;
  this.noCompatMode = chunkXPW4576IParam57.noCompatMode || false;
  this.condenseFlow = chunkXPW4576IParam57.condenseFlow || false;
  this.quotingType = chunkXPW4576IParam57.quotingType === '"' ? 2 : 1;
  this.forceQuotes = chunkXPW4576IParam57.forceQuotes || false;
  this.replacer =
    typeof chunkXPW4576IParam57.replacer == "function"
      ? chunkXPW4576IParam57.replacer
      : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
chunkAGHRB4JFN(chunkXPW4576IHelper85, "State");
function chunkXPW4576IHelper86(chunkXPW4576IParam111, chunkXPW4576IParam112) {
  for (
    var chunkXPW4576IValue321 = chunkXPW4576IValue1.repeat(
        " ",
        chunkXPW4576IParam112,
      ),
      chunkXPW4576IValue322 = 0,
      chunkXPW4576IValue323 = -1,
      chunkXPW4576IValue324 = "",
      chunkXPW4576IValue325,
      chunkXPW4576IValue326 = chunkXPW4576IParam111.length;
    chunkXPW4576IValue322 < chunkXPW4576IValue326;

  ) {
    chunkXPW4576IValue323 = chunkXPW4576IParam111.indexOf(
      "\n",
      chunkXPW4576IValue322,
    );
    chunkXPW4576IValue323 === -1
      ? ((chunkXPW4576IValue325 = chunkXPW4576IParam111.slice(
          chunkXPW4576IValue322,
        )),
        (chunkXPW4576IValue322 = chunkXPW4576IValue326))
      : ((chunkXPW4576IValue325 = chunkXPW4576IParam111.slice(
          chunkXPW4576IValue322,
          chunkXPW4576IValue323 + 1,
        )),
        (chunkXPW4576IValue322 = chunkXPW4576IValue323 + 1));
    chunkXPW4576IValue325.length &&
      chunkXPW4576IValue325 !== "\n" &&
      (chunkXPW4576IValue324 += chunkXPW4576IValue321);
    chunkXPW4576IValue324 += chunkXPW4576IValue325;
  }
  return chunkXPW4576IValue324;
}
chunkAGHRB4JFN(chunkXPW4576IHelper86, "indentString");
function chunkXPW4576IHelper87(chunkXPW4576IParam191, chunkXPW4576IParam192) {
  return (
    "\n" +
    chunkXPW4576IValue1.repeat(
      " ",
      chunkXPW4576IParam191.indent * chunkXPW4576IParam192,
    )
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper87, "generateNextLine");
function chunkXPW4576IHelper88(chunkXPW4576IParam167, chunkXPW4576IParam168) {
  var chunkXPW4576IValue391, chunkXPW4576IValue392, chunkXPW4576IValue393;
  for (
    chunkXPW4576IValue391 = 0,
      chunkXPW4576IValue392 = chunkXPW4576IParam167.implicitTypes.length;
    chunkXPW4576IValue391 < chunkXPW4576IValue392;
    chunkXPW4576IValue391 += 1
  )
    if (
      ((chunkXPW4576IValue393 =
        chunkXPW4576IParam167.implicitTypes[chunkXPW4576IValue391]),
      chunkXPW4576IValue393.resolve(chunkXPW4576IParam168))
    )
      return true;
  return false;
}
chunkAGHRB4JFN(chunkXPW4576IHelper88, "testImplicitResolving");
function chunkXPW4576IHelper89(chunkXPW4576IParam217) {
  return chunkXPW4576IParam217 === 32 || chunkXPW4576IParam217 === 9;
}
chunkAGHRB4JFN(chunkXPW4576IHelper89, "isWhitespace");
function chunkXPW4576IHelper90(chunkXPW4576IParam157) {
  return (
    (32 <= chunkXPW4576IParam157 && chunkXPW4576IParam157 <= 126) ||
    (161 <= chunkXPW4576IParam157 &&
      chunkXPW4576IParam157 <= 55295 &&
      chunkXPW4576IParam157 !== 8232 &&
      chunkXPW4576IParam157 !== 8233) ||
    (57344 <= chunkXPW4576IParam157 &&
      chunkXPW4576IParam157 <= 65533 &&
      chunkXPW4576IParam157 !== 65279) ||
    (65536 <= chunkXPW4576IParam157 && chunkXPW4576IParam157 <= 1114111)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper90, "isPrintable");
function chunkXPW4576IHelper91(chunkXPW4576IParam197) {
  return (
    chunkXPW4576IHelper90(chunkXPW4576IParam197) &&
    chunkXPW4576IParam197 !== 65279 &&
    chunkXPW4576IParam197 !== 13 &&
    chunkXPW4576IParam197 !== 10
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper91, "isNsCharOrWhitespace");
function chunkXPW4576IHelper92(
  chunkXPW4576IParam136,
  chunkXPW4576IParam137,
  chunkXPW4576IParam138,
) {
  var chunkXPW4576IValue354 = chunkXPW4576IHelper91(chunkXPW4576IParam136),
    chunkXPW4576IValue355 =
      chunkXPW4576IValue354 && !chunkXPW4576IHelper89(chunkXPW4576IParam136);
  return (
    ((chunkXPW4576IParam138
      ? chunkXPW4576IValue354
      : chunkXPW4576IValue354 &&
        chunkXPW4576IParam136 !== 44 &&
        chunkXPW4576IParam136 !== 91 &&
        chunkXPW4576IParam136 !== 93 &&
        chunkXPW4576IParam136 !== 123 &&
        chunkXPW4576IParam136 !== 125) &&
      chunkXPW4576IParam136 !== 35 &&
      !(chunkXPW4576IParam137 === 58 && !chunkXPW4576IValue355)) ||
    (chunkXPW4576IHelper91(chunkXPW4576IParam137) &&
      !chunkXPW4576IHelper89(chunkXPW4576IParam137) &&
      chunkXPW4576IParam136 === 35) ||
    (chunkXPW4576IParam137 === 58 && chunkXPW4576IValue355)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper92, "isPlainSafe");
function _n(chunkXPW4576IParam107) {
  return (
    chunkXPW4576IHelper90(chunkXPW4576IParam107) &&
    chunkXPW4576IParam107 !== 65279 &&
    !chunkXPW4576IHelper89(chunkXPW4576IParam107) &&
    chunkXPW4576IParam107 !== 45 &&
    chunkXPW4576IParam107 !== 63 &&
    chunkXPW4576IParam107 !== 58 &&
    chunkXPW4576IParam107 !== 44 &&
    chunkXPW4576IParam107 !== 91 &&
    chunkXPW4576IParam107 !== 93 &&
    chunkXPW4576IParam107 !== 123 &&
    chunkXPW4576IParam107 !== 125 &&
    chunkXPW4576IParam107 !== 35 &&
    chunkXPW4576IParam107 !== 38 &&
    chunkXPW4576IParam107 !== 42 &&
    chunkXPW4576IParam107 !== 33 &&
    chunkXPW4576IParam107 !== 124 &&
    chunkXPW4576IParam107 !== 61 &&
    chunkXPW4576IParam107 !== 62 &&
    chunkXPW4576IParam107 !== 39 &&
    chunkXPW4576IParam107 !== 34 &&
    chunkXPW4576IParam107 !== 37 &&
    chunkXPW4576IParam107 !== 64 &&
    chunkXPW4576IParam107 !== 96
  );
}
chunkAGHRB4JFN(_n, "isPlainSafeFirst");
function chunkXPW4576IHelper93(chunkXPW4576IParam221) {
  return (
    !chunkXPW4576IHelper89(chunkXPW4576IParam221) &&
    chunkXPW4576IParam221 !== 58
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper93, "isPlainSafeLast");
function chunkXPW4576IHelper94(chunkXPW4576IParam144, chunkXPW4576IParam145) {
  var chunkXPW4576IValue373 = chunkXPW4576IParam144.charCodeAt(
      chunkXPW4576IParam145,
    ),
    chunkXPW4576IValue374;
  return chunkXPW4576IValue373 >= 55296 &&
    chunkXPW4576IValue373 <= 56319 &&
    chunkXPW4576IParam145 + 1 < chunkXPW4576IParam144.length &&
    ((chunkXPW4576IValue374 = chunkXPW4576IParam144.charCodeAt(
      chunkXPW4576IParam145 + 1,
    )),
    chunkXPW4576IValue374 >= 56320 && chunkXPW4576IValue374 <= 57343)
    ? (chunkXPW4576IValue373 - 55296) * 1024 +
        chunkXPW4576IValue374 -
        56320 +
        65536
    : chunkXPW4576IValue373;
}
chunkAGHRB4JFN(chunkXPW4576IHelper94, "codePointAt");
function chunkXPW4576IHelper95(chunkXPW4576IParam223) {
  return /^\n* /.test(chunkXPW4576IParam223);
}
chunkAGHRB4JFN(chunkXPW4576IHelper95, "needIndentIndicator");
function chunkXPW4576IHelper96(
  chunkXPW4576IParam58,
  chunkXPW4576IParam59,
  chunkXPW4576IParam60,
  chunkXPW4576IParam61,
  chunkXPW4576IParam62,
  chunkXPW4576IParam63,
  chunkXPW4576IParam64,
  chunkXPW4576IParam65,
) {
  var chunkXPW4576IValue214,
    chunkXPW4576IValue215 = 0,
    chunkXPW4576IValue216 = null,
    chunkXPW4576IValue217 = false,
    chunkXPW4576IValue218 = false,
    chunkXPW4576IValue219 = chunkXPW4576IParam61 !== -1,
    chunkXPW4576IValue220 = -1,
    chunkXPW4576IValue221 =
      _n(chunkXPW4576IHelper94(chunkXPW4576IParam58, 0)) &&
      chunkXPW4576IHelper93(
        chunkXPW4576IHelper94(
          chunkXPW4576IParam58,
          chunkXPW4576IParam58.length - 1,
        ),
      );
  if (chunkXPW4576IParam59 || chunkXPW4576IParam64)
    for (
      chunkXPW4576IValue214 = 0;
      chunkXPW4576IValue214 < chunkXPW4576IParam58.length;
      chunkXPW4576IValue215 >= 65536
        ? (chunkXPW4576IValue214 += 2)
        : chunkXPW4576IValue214++
    ) {
      if (
        ((chunkXPW4576IValue215 = chunkXPW4576IHelper94(
          chunkXPW4576IParam58,
          chunkXPW4576IValue214,
        )),
        !chunkXPW4576IHelper90(chunkXPW4576IValue215))
      )
        return 5;
      chunkXPW4576IValue221 &&= chunkXPW4576IHelper92(
        chunkXPW4576IValue215,
        chunkXPW4576IValue216,
        chunkXPW4576IParam65,
      );
      chunkXPW4576IValue216 = chunkXPW4576IValue215;
    }
  else {
    for (
      chunkXPW4576IValue214 = 0;
      chunkXPW4576IValue214 < chunkXPW4576IParam58.length;
      chunkXPW4576IValue215 >= 65536
        ? (chunkXPW4576IValue214 += 2)
        : chunkXPW4576IValue214++
    ) {
      if (
        ((chunkXPW4576IValue215 = chunkXPW4576IHelper94(
          chunkXPW4576IParam58,
          chunkXPW4576IValue214,
        )),
        chunkXPW4576IValue215 === 10)
      ) {
        chunkXPW4576IValue217 = true;
        chunkXPW4576IValue219 &&
          ((chunkXPW4576IValue218 ||=
            chunkXPW4576IValue214 - chunkXPW4576IValue220 - 1 >
              chunkXPW4576IParam61 &&
            chunkXPW4576IParam58[chunkXPW4576IValue220 + 1] !== " "),
          (chunkXPW4576IValue220 = chunkXPW4576IValue214));
      } else if (!chunkXPW4576IHelper90(chunkXPW4576IValue215)) return 5;
      chunkXPW4576IValue221 &&= chunkXPW4576IHelper92(
        chunkXPW4576IValue215,
        chunkXPW4576IValue216,
        chunkXPW4576IParam65,
      );
      chunkXPW4576IValue216 = chunkXPW4576IValue215;
    }
    chunkXPW4576IValue218 ||=
      chunkXPW4576IValue219 &&
      chunkXPW4576IValue214 - chunkXPW4576IValue220 - 1 >
        chunkXPW4576IParam61 &&
      chunkXPW4576IParam58[chunkXPW4576IValue220 + 1] !== " ";
  }
  return !chunkXPW4576IValue217 && !chunkXPW4576IValue218
    ? chunkXPW4576IValue221 &&
      !chunkXPW4576IParam64 &&
      !chunkXPW4576IParam62(chunkXPW4576IParam58)
      ? 1
      : chunkXPW4576IParam63 === 2
        ? 5
        : 2
    : chunkXPW4576IParam60 > 9 && chunkXPW4576IHelper95(chunkXPW4576IParam58)
      ? 5
      : chunkXPW4576IParam64
        ? chunkXPW4576IParam63 === 2
          ? 5
          : 2
        : chunkXPW4576IValue218
          ? 4
          : 3;
}
chunkAGHRB4JFN(chunkXPW4576IHelper96, "chooseScalarStyle");
function chunkXPW4576IHelper97(
  chunkXPW4576IParam36,
  chunkXPW4576IParam37,
  chunkXPW4576IParam38,
  chunkXPW4576IParam39,
  chunkXPW4576IParam40,
) {
  chunkXPW4576IParam36.dump = (function () {
    if (chunkXPW4576IParam37.length === 0)
      return chunkXPW4576IParam36.quotingType === 2 ? '""' : "''";
    if (
      !chunkXPW4576IParam36.noCompatMode &&
      (chunkXPW4576IValue70.indexOf(chunkXPW4576IParam37) !== -1 ||
        chunkXPW4576IValue71.test(chunkXPW4576IParam37))
    )
      return chunkXPW4576IParam36.quotingType === 2
        ? '"' + chunkXPW4576IParam37 + '"'
        : "'" + chunkXPW4576IParam37 + "'";
    var chunkXPW4576IValue200 =
        chunkXPW4576IParam36.indent * Math.max(1, chunkXPW4576IParam38),
      chunkXPW4576IValue201 =
        chunkXPW4576IParam36.lineWidth === -1
          ? -1
          : Math.max(
              Math.min(chunkXPW4576IParam36.lineWidth, 40),
              chunkXPW4576IParam36.lineWidth - chunkXPW4576IValue200,
            ),
      chunkXPW4576IValue202 =
        chunkXPW4576IParam39 ||
        (chunkXPW4576IParam36.flowLevel > -1 &&
          chunkXPW4576IParam38 >= chunkXPW4576IParam36.flowLevel);
    function chunkXPW4576IHelper112(chunkXPW4576IParam224) {
      return chunkXPW4576IHelper88(chunkXPW4576IParam36, chunkXPW4576IParam224);
    }
    switch (
      (chunkAGHRB4JFN(chunkXPW4576IHelper112, "testAmbiguity"),
      chunkXPW4576IHelper96(
        chunkXPW4576IParam37,
        chunkXPW4576IValue202,
        chunkXPW4576IParam36.indent,
        chunkXPW4576IValue201,
        chunkXPW4576IHelper112,
        chunkXPW4576IParam36.quotingType,
        chunkXPW4576IParam36.forceQuotes && !chunkXPW4576IParam39,
        chunkXPW4576IParam40,
      ))
    ) {
      case 1:
        return chunkXPW4576IParam37;
      case 2:
        return "'" + chunkXPW4576IParam37.replace(/'/g, "''") + "'";
      case 3:
        return (
          "|" +
          chunkXPW4576IHelper98(
            chunkXPW4576IParam37,
            chunkXPW4576IParam36.indent,
          ) +
          chunkXPW4576IHelper99(
            chunkXPW4576IHelper86(chunkXPW4576IParam37, chunkXPW4576IValue200),
          )
        );
      case 4:
        return (
          ">" +
          chunkXPW4576IHelper98(
            chunkXPW4576IParam37,
            chunkXPW4576IParam36.indent,
          ) +
          chunkXPW4576IHelper99(
            chunkXPW4576IHelper86(
              chunkXPW4576IHelper100(
                chunkXPW4576IParam37,
                chunkXPW4576IValue201,
              ),
              chunkXPW4576IValue200,
            ),
          )
        );
      case 5:
        return '"' + chunkXPW4576IHelper102(chunkXPW4576IParam37) + '"';
      default:
        throw new chunkXPW4576IValue2("impossible error: invalid scalar style");
    }
  })();
}
chunkAGHRB4JFN(chunkXPW4576IHelper97, "writeScalar");
function chunkXPW4576IHelper98(chunkXPW4576IParam139, chunkXPW4576IParam140) {
  var chunkXPW4576IValue356 = chunkXPW4576IHelper95(chunkXPW4576IParam139)
      ? String(chunkXPW4576IParam140)
      : "",
    chunkXPW4576IValue357 =
      chunkXPW4576IParam139[chunkXPW4576IParam139.length - 1] === "\n";
  return (
    chunkXPW4576IValue356 +
    (chunkXPW4576IValue357 &&
    (chunkXPW4576IParam139[chunkXPW4576IParam139.length - 2] === "\n" ||
      chunkXPW4576IParam139 === "\n")
      ? "+"
      : chunkXPW4576IValue357
        ? ""
        : "-") +
    "\n"
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper98, "blockHeader");
function chunkXPW4576IHelper99(chunkXPW4576IParam188) {
  return chunkXPW4576IParam188[chunkXPW4576IParam188.length - 1] === "\n"
    ? chunkXPW4576IParam188.slice(0, -1)
    : chunkXPW4576IParam188;
}
chunkAGHRB4JFN(chunkXPW4576IHelper99, "dropEndingNewline");
function chunkXPW4576IHelper100(chunkXPW4576IParam89, chunkXPW4576IParam90) {
  for (
    var chunkXPW4576IValue268 = /(\n+)([^\n]*)/g,
      chunkXPW4576IValue269 = (function () {
        var chunkXPW4576IValue385 = chunkXPW4576IParam89.indexOf("\n");
        return (
          (chunkXPW4576IValue385 =
            chunkXPW4576IValue385 === -1
              ? chunkXPW4576IParam89.length
              : chunkXPW4576IValue385),
          (chunkXPW4576IValue268.lastIndex = chunkXPW4576IValue385),
          chunkXPW4576IHelper101(
            chunkXPW4576IParam89.slice(0, chunkXPW4576IValue385),
            chunkXPW4576IParam90,
          )
        );
      })(),
      chunkXPW4576IValue270 =
        chunkXPW4576IParam89[0] === "\n" || chunkXPW4576IParam89[0] === " ",
      chunkXPW4576IValue271,
      chunkXPW4576IValue272;
    (chunkXPW4576IValue272 = chunkXPW4576IValue268.exec(chunkXPW4576IParam89));

  ) {
    var chunkXPW4576IValue273 = chunkXPW4576IValue272[1],
      chunkXPW4576IValue274 = chunkXPW4576IValue272[2];
    chunkXPW4576IValue271 = chunkXPW4576IValue274[0] === " ";
    chunkXPW4576IValue269 +=
      chunkXPW4576IValue273 +
      (!chunkXPW4576IValue270 &&
      !chunkXPW4576IValue271 &&
      chunkXPW4576IValue274 !== ""
        ? "\n"
        : "") +
      chunkXPW4576IHelper101(chunkXPW4576IValue274, chunkXPW4576IParam90);
    chunkXPW4576IValue270 = chunkXPW4576IValue271;
  }
  return chunkXPW4576IValue269;
}
chunkAGHRB4JFN(chunkXPW4576IHelper100, "foldString");
function chunkXPW4576IHelper101(chunkXPW4576IParam98, chunkXPW4576IParam99) {
  if (chunkXPW4576IParam98 === "" || chunkXPW4576IParam98[0] === " ")
    return chunkXPW4576IParam98;
  for (
    var chunkXPW4576IValue288 = / [^ ]/g,
      chunkXPW4576IValue289,
      chunkXPW4576IValue290 = 0,
      chunkXPW4576IValue291,
      chunkXPW4576IValue292 = 0,
      chunkXPW4576IValue293 = 0,
      chunkXPW4576IValue294 = "";
    (chunkXPW4576IValue289 = chunkXPW4576IValue288.exec(chunkXPW4576IParam98));

  ) {
    chunkXPW4576IValue293 = chunkXPW4576IValue289.index;
    chunkXPW4576IValue293 - chunkXPW4576IValue290 > chunkXPW4576IParam99 &&
      ((chunkXPW4576IValue291 =
        chunkXPW4576IValue292 > chunkXPW4576IValue290
          ? chunkXPW4576IValue292
          : chunkXPW4576IValue293),
      (chunkXPW4576IValue294 +=
        "\n" +
        chunkXPW4576IParam98.slice(
          chunkXPW4576IValue290,
          chunkXPW4576IValue291,
        )),
      (chunkXPW4576IValue290 = chunkXPW4576IValue291 + 1));
    chunkXPW4576IValue292 = chunkXPW4576IValue293;
  }
  return (
    (chunkXPW4576IValue294 += "\n"),
    chunkXPW4576IParam98.length - chunkXPW4576IValue290 >
      chunkXPW4576IParam99 && chunkXPW4576IValue292 > chunkXPW4576IValue290
      ? (chunkXPW4576IValue294 +=
          chunkXPW4576IParam98.slice(
            chunkXPW4576IValue290,
            chunkXPW4576IValue292,
          ) +
          "\n" +
          chunkXPW4576IParam98.slice(chunkXPW4576IValue292 + 1))
      : (chunkXPW4576IValue294 += chunkXPW4576IParam98.slice(
          chunkXPW4576IValue290,
        )),
    chunkXPW4576IValue294.slice(1)
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper101, "foldLine");
function chunkXPW4576IHelper102(chunkXPW4576IParam142) {
  for (
    var chunkXPW4576IValue363 = "",
      chunkXPW4576IValue364 = 0,
      chunkXPW4576IValue365,
      chunkXPW4576IValue366 = 0;
    chunkXPW4576IValue366 < chunkXPW4576IParam142.length;
    chunkXPW4576IValue364 >= 65536
      ? (chunkXPW4576IValue366 += 2)
      : chunkXPW4576IValue366++
  ) {
    chunkXPW4576IValue364 = chunkXPW4576IHelper94(
      chunkXPW4576IParam142,
      chunkXPW4576IValue366,
    );
    chunkXPW4576IValue365 = chunkXPW4576IValue69[chunkXPW4576IValue364];
    !chunkXPW4576IValue365 && chunkXPW4576IHelper90(chunkXPW4576IValue364)
      ? ((chunkXPW4576IValue363 +=
          chunkXPW4576IParam142[chunkXPW4576IValue366]),
        chunkXPW4576IValue364 >= 65536 &&
          (chunkXPW4576IValue363 +=
            chunkXPW4576IParam142[chunkXPW4576IValue366 + 1]))
      : (chunkXPW4576IValue363 +=
          chunkXPW4576IValue365 ||
          chunkXPW4576IHelper84(chunkXPW4576IValue364));
  }
  return chunkXPW4576IValue363;
}
chunkAGHRB4JFN(chunkXPW4576IHelper102, "escapeString");
function chunkXPW4576IHelper103(
  chunkXPW4576IParam108,
  chunkXPW4576IParam109,
  chunkXPW4576IParam110,
) {
  var chunkXPW4576IValue316 = "",
    chunkXPW4576IValue317 = chunkXPW4576IParam108.tag,
    chunkXPW4576IValue318,
    chunkXPW4576IValue319,
    chunkXPW4576IValue320;
  for (
    chunkXPW4576IValue318 = 0,
      chunkXPW4576IValue319 = chunkXPW4576IParam110.length;
    chunkXPW4576IValue318 < chunkXPW4576IValue319;
    chunkXPW4576IValue318 += 1
  ) {
    chunkXPW4576IValue320 = chunkXPW4576IParam110[chunkXPW4576IValue318];
    chunkXPW4576IParam108.replacer &&
      (chunkXPW4576IValue320 = chunkXPW4576IParam108.replacer.call(
        chunkXPW4576IParam110,
        String(chunkXPW4576IValue318),
        chunkXPW4576IValue320,
      ));
    (chunkXPW4576IHelper108(
      chunkXPW4576IParam108,
      chunkXPW4576IParam109,
      chunkXPW4576IValue320,
      false,
      false,
    ) ||
      (chunkXPW4576IValue320 === undefined &&
        chunkXPW4576IHelper108(
          chunkXPW4576IParam108,
          chunkXPW4576IParam109,
          null,
          false,
          false,
        ))) &&
      (chunkXPW4576IValue316 !== "" &&
        (chunkXPW4576IValue316 +=
          "," + (chunkXPW4576IParam108.condenseFlow ? "" : " ")),
      (chunkXPW4576IValue316 += chunkXPW4576IParam108.dump));
  }
  chunkXPW4576IParam108.tag = chunkXPW4576IValue317;
  chunkXPW4576IParam108.dump = "[" + chunkXPW4576IValue316 + "]";
}
chunkAGHRB4JFN(chunkXPW4576IHelper103, "writeFlowSequence");
function chunkXPW4576IHelper104(
  chunkXPW4576IParam92,
  chunkXPW4576IParam93,
  chunkXPW4576IParam94,
  chunkXPW4576IParam95,
) {
  var chunkXPW4576IValue278 = "",
    chunkXPW4576IValue279 = chunkXPW4576IParam92.tag,
    chunkXPW4576IValue280,
    chunkXPW4576IValue281,
    chunkXPW4576IValue282;
  for (
    chunkXPW4576IValue280 = 0,
      chunkXPW4576IValue281 = chunkXPW4576IParam94.length;
    chunkXPW4576IValue280 < chunkXPW4576IValue281;
    chunkXPW4576IValue280 += 1
  ) {
    chunkXPW4576IValue282 = chunkXPW4576IParam94[chunkXPW4576IValue280];
    chunkXPW4576IParam92.replacer &&
      (chunkXPW4576IValue282 = chunkXPW4576IParam92.replacer.call(
        chunkXPW4576IParam94,
        String(chunkXPW4576IValue280),
        chunkXPW4576IValue282,
      ));
    (chunkXPW4576IHelper108(
      chunkXPW4576IParam92,
      chunkXPW4576IParam93 + 1,
      chunkXPW4576IValue282,
      true,
      true,
      false,
      true,
    ) ||
      (chunkXPW4576IValue282 === undefined &&
        chunkXPW4576IHelper108(
          chunkXPW4576IParam92,
          chunkXPW4576IParam93 + 1,
          null,
          true,
          true,
          false,
          true,
        ))) &&
      ((!chunkXPW4576IParam95 || chunkXPW4576IValue278 !== "") &&
        (chunkXPW4576IValue278 += chunkXPW4576IHelper87(
          chunkXPW4576IParam92,
          chunkXPW4576IParam93,
        )),
      chunkXPW4576IParam92.dump &&
      10 === chunkXPW4576IParam92.dump.charCodeAt(0)
        ? (chunkXPW4576IValue278 += "-")
        : (chunkXPW4576IValue278 += "- "),
      (chunkXPW4576IValue278 += chunkXPW4576IParam92.dump));
  }
  chunkXPW4576IParam92.tag = chunkXPW4576IValue279;
  chunkXPW4576IParam92.dump = chunkXPW4576IValue278 || "[]";
}
chunkAGHRB4JFN(chunkXPW4576IHelper104, "writeBlockSequence");
function chunkXPW4576IHelper105(
  chunkXPW4576IParam75,
  chunkXPW4576IParam76,
  chunkXPW4576IParam77,
) {
  var chunkXPW4576IValue246 = "",
    chunkXPW4576IValue247 = chunkXPW4576IParam75.tag,
    chunkXPW4576IValue248 = Object.keys(chunkXPW4576IParam77),
    chunkXPW4576IValue249,
    chunkXPW4576IValue250,
    chunkXPW4576IValue251,
    chunkXPW4576IValue252,
    chunkXPW4576IValue253;
  for (
    chunkXPW4576IValue249 = 0,
      chunkXPW4576IValue250 = chunkXPW4576IValue248.length;
    chunkXPW4576IValue249 < chunkXPW4576IValue250;
    chunkXPW4576IValue249 += 1
  ) {
    chunkXPW4576IValue253 = "";
    chunkXPW4576IValue246 !== "" && (chunkXPW4576IValue253 += ", ");
    chunkXPW4576IParam75.condenseFlow && (chunkXPW4576IValue253 += '"');
    chunkXPW4576IValue251 = chunkXPW4576IValue248[chunkXPW4576IValue249];
    chunkXPW4576IValue252 = chunkXPW4576IParam77[chunkXPW4576IValue251];
    chunkXPW4576IParam75.replacer &&
      (chunkXPW4576IValue252 = chunkXPW4576IParam75.replacer.call(
        chunkXPW4576IParam77,
        chunkXPW4576IValue251,
        chunkXPW4576IValue252,
      ));
    chunkXPW4576IHelper108(
      chunkXPW4576IParam75,
      chunkXPW4576IParam76,
      chunkXPW4576IValue251,
      false,
      false,
    ) &&
      (chunkXPW4576IParam75.dump.length > 1024 &&
        (chunkXPW4576IValue253 += "? "),
      (chunkXPW4576IValue253 +=
        chunkXPW4576IParam75.dump +
        (chunkXPW4576IParam75.condenseFlow ? '"' : "") +
        ":" +
        (chunkXPW4576IParam75.condenseFlow ? "" : " ")),
      chunkXPW4576IHelper108(
        chunkXPW4576IParam75,
        chunkXPW4576IParam76,
        chunkXPW4576IValue252,
        false,
        false,
      ) &&
        ((chunkXPW4576IValue253 += chunkXPW4576IParam75.dump),
        (chunkXPW4576IValue246 += chunkXPW4576IValue253)));
  }
  chunkXPW4576IParam75.tag = chunkXPW4576IValue247;
  chunkXPW4576IParam75.dump = "{" + chunkXPW4576IValue246 + "}";
}
chunkAGHRB4JFN(chunkXPW4576IHelper105, "writeFlowMapping");
function chunkXPW4576IHelper106(
  chunkXPW4576IParam44,
  chunkXPW4576IParam45,
  chunkXPW4576IParam46,
  chunkXPW4576IParam47,
) {
  var chunkXPW4576IValue203 = "",
    chunkXPW4576IValue204 = chunkXPW4576IParam44.tag,
    chunkXPW4576IValue205 = Object.keys(chunkXPW4576IParam46),
    chunkXPW4576IValue206,
    chunkXPW4576IValue207,
    chunkXPW4576IValue208,
    chunkXPW4576IValue209,
    chunkXPW4576IValue210,
    chunkXPW4576IValue211;
  if (chunkXPW4576IParam44.sortKeys === true) chunkXPW4576IValue205.sort();
  else if (typeof chunkXPW4576IParam44.sortKeys == "function")
    chunkXPW4576IValue205.sort(chunkXPW4576IParam44.sortKeys);
  else if (chunkXPW4576IParam44.sortKeys)
    throw new chunkXPW4576IValue2("sortKeys must be a boolean or a function");
  for (
    chunkXPW4576IValue206 = 0,
      chunkXPW4576IValue207 = chunkXPW4576IValue205.length;
    chunkXPW4576IValue206 < chunkXPW4576IValue207;
    chunkXPW4576IValue206 += 1
  ) {
    chunkXPW4576IValue211 = "";
    (!chunkXPW4576IParam47 || chunkXPW4576IValue203 !== "") &&
      (chunkXPW4576IValue211 += chunkXPW4576IHelper87(
        chunkXPW4576IParam44,
        chunkXPW4576IParam45,
      ));
    chunkXPW4576IValue208 = chunkXPW4576IValue205[chunkXPW4576IValue206];
    chunkXPW4576IValue209 = chunkXPW4576IParam46[chunkXPW4576IValue208];
    chunkXPW4576IParam44.replacer &&
      (chunkXPW4576IValue209 = chunkXPW4576IParam44.replacer.call(
        chunkXPW4576IParam46,
        chunkXPW4576IValue208,
        chunkXPW4576IValue209,
      ));
    chunkXPW4576IHelper108(
      chunkXPW4576IParam44,
      chunkXPW4576IParam45 + 1,
      chunkXPW4576IValue208,
      true,
      true,
      true,
    ) &&
      ((chunkXPW4576IValue210 =
        (chunkXPW4576IParam44.tag !== null &&
          chunkXPW4576IParam44.tag !== "?") ||
        (chunkXPW4576IParam44.dump && chunkXPW4576IParam44.dump.length > 1024)),
      chunkXPW4576IValue210 &&
        (chunkXPW4576IParam44.dump &&
        10 === chunkXPW4576IParam44.dump.charCodeAt(0)
          ? (chunkXPW4576IValue211 += "?")
          : (chunkXPW4576IValue211 += "? ")),
      (chunkXPW4576IValue211 += chunkXPW4576IParam44.dump),
      chunkXPW4576IValue210 &&
        (chunkXPW4576IValue211 += chunkXPW4576IHelper87(
          chunkXPW4576IParam44,
          chunkXPW4576IParam45,
        )),
      chunkXPW4576IHelper108(
        chunkXPW4576IParam44,
        chunkXPW4576IParam45 + 1,
        chunkXPW4576IValue209,
        true,
        chunkXPW4576IValue210,
      ) &&
        (chunkXPW4576IParam44.dump &&
        10 === chunkXPW4576IParam44.dump.charCodeAt(0)
          ? (chunkXPW4576IValue211 += ":")
          : (chunkXPW4576IValue211 += ": "),
        (chunkXPW4576IValue211 += chunkXPW4576IParam44.dump),
        (chunkXPW4576IValue203 += chunkXPW4576IValue211)));
  }
  chunkXPW4576IParam44.tag = chunkXPW4576IValue204;
  chunkXPW4576IParam44.dump = chunkXPW4576IValue203 || "{}";
}
chunkAGHRB4JFN(chunkXPW4576IHelper106, "writeBlockMapping");
function chunkXPW4576IHelper107(
  chunkXPW4576IParam41,
  chunkXPW4576IParam42,
  chunkXPW4576IParam43,
) {
  var chunkXPW4576IValue194,
    chunkXPW4576IValue195 = chunkXPW4576IParam43
      ? chunkXPW4576IParam41.explicitTypes
      : chunkXPW4576IParam41.implicitTypes,
    chunkXPW4576IValue196,
    chunkXPW4576IValue197,
    chunkXPW4576IValue198,
    chunkXPW4576IValue199;
  for (
    chunkXPW4576IValue196 = 0,
      chunkXPW4576IValue197 = chunkXPW4576IValue195.length;
    chunkXPW4576IValue196 < chunkXPW4576IValue197;
    chunkXPW4576IValue196 += 1
  )
    if (
      ((chunkXPW4576IValue198 = chunkXPW4576IValue195[chunkXPW4576IValue196]),
      (chunkXPW4576IValue198.instanceOf || chunkXPW4576IValue198.predicate) &&
        (!chunkXPW4576IValue198.instanceOf ||
          (typeof chunkXPW4576IParam42 == "object" &&
            chunkXPW4576IParam42 instanceof
              chunkXPW4576IValue198.instanceOf)) &&
        (!chunkXPW4576IValue198.predicate ||
          chunkXPW4576IValue198.predicate(chunkXPW4576IParam42)))
    ) {
      if (
        (chunkXPW4576IParam43
          ? chunkXPW4576IValue198.multi && chunkXPW4576IValue198.representName
            ? (chunkXPW4576IParam41.tag =
                chunkXPW4576IValue198.representName(chunkXPW4576IParam42))
            : (chunkXPW4576IParam41.tag = chunkXPW4576IValue198.tag)
          : (chunkXPW4576IParam41.tag = "?"),
        chunkXPW4576IValue198.represent)
      ) {
        if (
          ((chunkXPW4576IValue199 =
            chunkXPW4576IParam41.styleMap[chunkXPW4576IValue198.tag] ||
            chunkXPW4576IValue198.defaultStyle),
          chunkXPW4576IValue44.call(chunkXPW4576IValue198.represent) ===
            "[object Function]")
        )
          chunkXPW4576IValue194 = chunkXPW4576IValue198.represent(
            chunkXPW4576IParam42,
            chunkXPW4576IValue199,
          );
        else if (
          chunkXPW4576IValue45.call(
            chunkXPW4576IValue198.represent,
            chunkXPW4576IValue199,
          )
        )
          chunkXPW4576IValue194 = chunkXPW4576IValue198.represent[
            chunkXPW4576IValue199
          ](chunkXPW4576IParam42, chunkXPW4576IValue199);
        else
          throw new chunkXPW4576IValue2(
            "!<" +
              chunkXPW4576IValue198.tag +
              '> tag resolver accepts not "' +
              chunkXPW4576IValue199 +
              '" style',
          );
        chunkXPW4576IParam41.dump = chunkXPW4576IValue194;
      }
      return true;
    }
  return false;
}
chunkAGHRB4JFN(chunkXPW4576IHelper107, "detectType");
function chunkXPW4576IHelper108(
  chunkXPW4576IParam14,
  chunkXPW4576IParam15,
  chunkXPW4576IParam16,
  chunkXPW4576IParam17,
  chunkXPW4576IParam18,
  chunkXPW4576IParam19,
  chunkXPW4576IParam20,
) {
  chunkXPW4576IParam14.tag = null;
  chunkXPW4576IParam14.dump = chunkXPW4576IParam16;
  chunkXPW4576IHelper107(chunkXPW4576IParam14, chunkXPW4576IParam16, false) ||
    chunkXPW4576IHelper107(chunkXPW4576IParam14, chunkXPW4576IParam16, true);
  var chunkXPW4576IValue141 = chunkXPW4576IValue44.call(
      chunkXPW4576IParam14.dump,
    ),
    chunkXPW4576IValue142 = chunkXPW4576IParam17,
    chunkXPW4576IValue143;
  chunkXPW4576IParam17 &&=
    chunkXPW4576IParam14.flowLevel < 0 ||
    chunkXPW4576IParam14.flowLevel > chunkXPW4576IParam15;
  var chunkXPW4576IValue144 =
      chunkXPW4576IValue141 === "[object Object]" ||
      chunkXPW4576IValue141 === "[object Array]",
    chunkXPW4576IValue145,
    chunkXPW4576IValue146;
  if (
    (chunkXPW4576IValue144 &&
      ((chunkXPW4576IValue145 =
        chunkXPW4576IParam14.duplicates.indexOf(chunkXPW4576IParam16)),
      (chunkXPW4576IValue146 = chunkXPW4576IValue145 !== -1)),
    ((chunkXPW4576IParam14.tag !== null && chunkXPW4576IParam14.tag !== "?") ||
      chunkXPW4576IValue146 ||
      (chunkXPW4576IParam14.indent !== 2 && chunkXPW4576IParam15 > 0)) &&
      (chunkXPW4576IParam18 = false),
    chunkXPW4576IValue146 &&
      chunkXPW4576IParam14.usedDuplicates[chunkXPW4576IValue145])
  )
    chunkXPW4576IParam14.dump = "*ref_" + chunkXPW4576IValue145;
  else {
    if (
      (chunkXPW4576IValue144 &&
        chunkXPW4576IValue146 &&
        !chunkXPW4576IParam14.usedDuplicates[chunkXPW4576IValue145] &&
        (chunkXPW4576IParam14.usedDuplicates[chunkXPW4576IValue145] = true),
      chunkXPW4576IValue141 === "[object Object]")
    )
      chunkXPW4576IParam17 &&
      Object.keys(chunkXPW4576IParam14.dump).length !== 0
        ? (chunkXPW4576IHelper106(
            chunkXPW4576IParam14,
            chunkXPW4576IParam15,
            chunkXPW4576IParam14.dump,
            chunkXPW4576IParam18,
          ),
          chunkXPW4576IValue146 &&
            (chunkXPW4576IParam14.dump =
              "&ref_" + chunkXPW4576IValue145 + chunkXPW4576IParam14.dump))
        : (chunkXPW4576IHelper105(
            chunkXPW4576IParam14,
            chunkXPW4576IParam15,
            chunkXPW4576IParam14.dump,
          ),
          chunkXPW4576IValue146 &&
            (chunkXPW4576IParam14.dump =
              "&ref_" +
              chunkXPW4576IValue145 +
              " " +
              chunkXPW4576IParam14.dump));
    else if (chunkXPW4576IValue141 === "[object Array]")
      chunkXPW4576IParam17 && chunkXPW4576IParam14.dump.length !== 0
        ? (chunkXPW4576IParam14.noArrayIndent &&
          !chunkXPW4576IParam20 &&
          chunkXPW4576IParam15 > 0
            ? chunkXPW4576IHelper104(
                chunkXPW4576IParam14,
                chunkXPW4576IParam15 - 1,
                chunkXPW4576IParam14.dump,
                chunkXPW4576IParam18,
              )
            : chunkXPW4576IHelper104(
                chunkXPW4576IParam14,
                chunkXPW4576IParam15,
                chunkXPW4576IParam14.dump,
                chunkXPW4576IParam18,
              ),
          chunkXPW4576IValue146 &&
            (chunkXPW4576IParam14.dump =
              "&ref_" + chunkXPW4576IValue145 + chunkXPW4576IParam14.dump))
        : (chunkXPW4576IHelper103(
            chunkXPW4576IParam14,
            chunkXPW4576IParam15,
            chunkXPW4576IParam14.dump,
          ),
          chunkXPW4576IValue146 &&
            (chunkXPW4576IParam14.dump =
              "&ref_" +
              chunkXPW4576IValue145 +
              " " +
              chunkXPW4576IParam14.dump));
    else if (chunkXPW4576IValue141 === "[object String]")
      chunkXPW4576IParam14.tag !== "?" &&
        chunkXPW4576IHelper97(
          chunkXPW4576IParam14,
          chunkXPW4576IParam14.dump,
          chunkXPW4576IParam15,
          chunkXPW4576IParam19,
          chunkXPW4576IValue142,
        );
    else if (chunkXPW4576IValue141 === "[object Undefined]") return false;
    else {
      if (chunkXPW4576IParam14.skipInvalid) return false;
      throw new chunkXPW4576IValue2(
        "unacceptable kind of an object to dump " + chunkXPW4576IValue141,
      );
    }
    chunkXPW4576IParam14.tag !== null &&
      chunkXPW4576IParam14.tag !== "?" &&
      ((chunkXPW4576IValue143 = encodeURI(
        chunkXPW4576IParam14.tag[0] === "!"
          ? chunkXPW4576IParam14.tag.slice(1)
          : chunkXPW4576IParam14.tag,
      ).replace(/!/g, "%21")),
      (chunkXPW4576IValue143 =
        chunkXPW4576IParam14.tag[0] === "!"
          ? "!" + chunkXPW4576IValue143
          : chunkXPW4576IValue143.slice(0, 18) === "tag:yaml.org,2002:"
            ? "!!" + chunkXPW4576IValue143.slice(18)
            : "!<" + chunkXPW4576IValue143 + ">"),
      (chunkXPW4576IParam14.dump =
        chunkXPW4576IValue143 + " " + chunkXPW4576IParam14.dump));
  }
  return true;
}
chunkAGHRB4JFN(chunkXPW4576IHelper108, "writeNode");
function chunkXPW4576IHelper109(chunkXPW4576IParam163, chunkXPW4576IParam164) {
  var chunkXPW4576IValue386 = [],
    chunkXPW4576IValue387 = [],
    chunkXPW4576IValue388,
    chunkXPW4576IValue389;
  for (
    $(chunkXPW4576IParam163, chunkXPW4576IValue386, chunkXPW4576IValue387),
      chunkXPW4576IValue388 = 0,
      chunkXPW4576IValue389 = chunkXPW4576IValue387.length;
    chunkXPW4576IValue388 < chunkXPW4576IValue389;
    chunkXPW4576IValue388 += 1
  )
    chunkXPW4576IParam164.duplicates.push(
      chunkXPW4576IValue386[chunkXPW4576IValue387[chunkXPW4576IValue388]],
    );
  chunkXPW4576IParam164.usedDuplicates = Array(chunkXPW4576IValue389);
}
chunkAGHRB4JFN(chunkXPW4576IHelper109, "getDuplicateReferences");
function $(
  chunkXPW4576IParam114,
  chunkXPW4576IParam115,
  chunkXPW4576IParam116,
) {
  var chunkXPW4576IValue330, chunkXPW4576IValue331, chunkXPW4576IValue332;
  if (typeof chunkXPW4576IParam114 == "object" && chunkXPW4576IParam114)
    if (
      ((chunkXPW4576IValue331 = chunkXPW4576IParam115.indexOf(
        chunkXPW4576IParam114,
      )),
      chunkXPW4576IValue331 !== -1)
    )
      chunkXPW4576IParam116.indexOf(chunkXPW4576IValue331) === -1 &&
        chunkXPW4576IParam116.push(chunkXPW4576IValue331);
    else if (
      (chunkXPW4576IParam115.push(chunkXPW4576IParam114),
      Array.isArray(chunkXPW4576IParam114))
    )
      for (
        chunkXPW4576IValue331 = 0,
          chunkXPW4576IValue332 = chunkXPW4576IParam114.length;
        chunkXPW4576IValue331 < chunkXPW4576IValue332;
        chunkXPW4576IValue331 += 1
      )
        $(
          chunkXPW4576IParam114[chunkXPW4576IValue331],
          chunkXPW4576IParam115,
          chunkXPW4576IParam116,
        );
    else
      for (
        chunkXPW4576IValue330 = Object.keys(chunkXPW4576IParam114),
          chunkXPW4576IValue331 = 0,
          chunkXPW4576IValue332 = chunkXPW4576IValue330.length;
        chunkXPW4576IValue331 < chunkXPW4576IValue332;
        chunkXPW4576IValue331 += 1
      )
        $(
          chunkXPW4576IParam114[chunkXPW4576IValue330[chunkXPW4576IValue331]],
          chunkXPW4576IParam115,
          chunkXPW4576IParam116,
        );
}
chunkAGHRB4JFN($, "inspectNode");
function chunkXPW4576IHelper110(chunkXPW4576IParam146, chunkXPW4576IParam147) {
  chunkXPW4576IParam147 ||= {};
  var chunkXPW4576IValue375 = new chunkXPW4576IHelper85(chunkXPW4576IParam147);
  chunkXPW4576IValue375.noRefs ||
    chunkXPW4576IHelper109(chunkXPW4576IParam146, chunkXPW4576IValue375);
  var chunkXPW4576IValue376 = chunkXPW4576IParam146;
  return (
    chunkXPW4576IValue375.replacer &&
      (chunkXPW4576IValue376 = chunkXPW4576IValue375.replacer.call(
        {
          "": chunkXPW4576IValue376,
        },
        "",
        chunkXPW4576IValue376,
      )),
    chunkXPW4576IHelper108(
      chunkXPW4576IValue375,
      0,
      chunkXPW4576IValue376,
      true,
      true,
    )
      ? chunkXPW4576IValue375.dump + "\n"
      : ""
  );
}
chunkAGHRB4JFN(chunkXPW4576IHelper110, "dump$1");
var chunkXPW4576IValue79 = {
  dump: chunkXPW4576IHelper110,
};
function chunkXPW4576IHelper111(chunkXPW4576IParam148, chunkXPW4576IParam149) {
  return function () {
    throw Error(
      "Function yaml." +
        chunkXPW4576IParam148 +
        " is removed in js-yaml 4. Use yaml." +
        chunkXPW4576IParam149 +
        " instead, which is now safe by default.",
    );
  };
}
chunkAGHRB4JFN(chunkXPW4576IHelper111, "renamed");
export const chunkXPW4576IT = chunkXPW4576IValue12;
export const chunkXPW4576IN = chunkXPW4576IValue43.load;
chunkXPW4576IValue43.loadAll;
chunkXPW4576IValue79.dump;

export function initChunkXPW4576I() {}
