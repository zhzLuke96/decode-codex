// Restored from ref/webview/assets/ganttDiagram-T4ZO3ILL-Bk_m_Nfg.js
// Flat boundary. Vendored ganttDiagramT4ZO3ILL chunk restored from the Codex webview bundle.
import { toEsModule, createCommonJsModule } from "../runtime/commonjs-interop";
import { linearT } from "./d3-scale-linear";
import {
  axisR as axisA,
  axisN as axisC,
  axisT as axisD,
  axisUnderscore as axisF,
  axisA as axisG,
  axisC as axisH,
  axisD as axisI,
  axisF as axisL,
  axisG as axisM,
  axisH as axisN,
  axisI as axisO,
  axisL as axisP,
  axisM as axisR,
  axisO as axisS,
  axisP as axisT,
  axisS as axisU,
  axisV as axisUnderscore,
  axisU as axisV,
} from "./d3-axis";
import { Src } from "./roughjs-geometry";
import { minN, minT } from "./d3-array-min";
import { dist } from "./entities-escape";
import {
  chunkAGHRB4JFA,
  chunkAGHRB4JFN,
  chunkAGHRB4JFR,
} from "./dayjs-core-alt";
import {
  _chunkICPOFSXXN as _chunkICPOFSXXB,
  chunkICPOFSXXF as _chunkICPOFSXXC,
  _chunkICPOFSXXC as _chunkICPOFSXXV,
  _chunkICPOFSXXL,
  _chunkICPOFSXXN,
  chunkICPOFSXXF,
  _chunkICPOFSXXO,
  _chunkICPOFSXXK,
  _chunkICPOFSXXC as chunkICPOFSXXV,
  _chunkICPOFSXXD,
} from "./chunk-icpofsxx";
import { chunk5PVQY5BWC } from "./chunk-5pvqy5bw";
var ganttDiagramT4ZO3ILLValue1 = createCommonJsModule(
    (ganttDiagramT4ZO3ILLParam49, ganttDiagramT4ZO3ILLParam50) => {
      (function (ganttDiagramT4ZO3ILLParam133, ganttDiagramT4ZO3ILLParam134) {
        typeof ganttDiagramT4ZO3ILLParam49 == "object" &&
        ganttDiagramT4ZO3ILLParam50 !== undefined
          ? (ganttDiagramT4ZO3ILLParam50.exports =
              ganttDiagramT4ZO3ILLParam134())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLParam134)
            : ((ganttDiagramT4ZO3ILLParam133 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLParam133 || self).dayjs_plugin_isoWeek =
                ganttDiagramT4ZO3ILLParam134());
      })(ganttDiagramT4ZO3ILLParam49, function () {
        return function (
          ganttDiagramT4ZO3ILLParam56,
          ganttDiagramT4ZO3ILLParam57,
          ganttDiagramT4ZO3ILLParam58,
        ) {
          var ganttDiagramT4ZO3ILLValue226 = function (
              ganttDiagramT4ZO3ILLParam213,
            ) {
              return ganttDiagramT4ZO3ILLParam213.add(
                4 - ganttDiagramT4ZO3ILLParam213.isoWeekday(),
                "day",
              );
            },
            ganttDiagramT4ZO3ILLValue227 =
              ganttDiagramT4ZO3ILLParam57.prototype;
          ganttDiagramT4ZO3ILLValue227.isoWeekYear = function () {
            return ganttDiagramT4ZO3ILLValue226(this).year();
          };
          ganttDiagramT4ZO3ILLValue227.isoWeek = function (
            ganttDiagramT4ZO3ILLParam114,
          ) {
            if (!this.$utils().u(ganttDiagramT4ZO3ILLParam114))
              return this.add(
                7 * (ganttDiagramT4ZO3ILLParam114 - this.isoWeek()),
                "day",
              );
            var ganttDiagramT4ZO3ILLValue362,
              ganttDiagramT4ZO3ILLValue363,
              ganttDiagramT4ZO3ILLValue364,
              ganttDiagramT4ZO3ILLValue365,
              ganttDiagramT4ZO3ILLValue366 = ganttDiagramT4ZO3ILLValue226(this),
              ganttDiagramT4ZO3ILLValue367 =
                ((ganttDiagramT4ZO3ILLValue362 = this.isoWeekYear()),
                (ganttDiagramT4ZO3ILLValue363 = this.$u),
                (ganttDiagramT4ZO3ILLValue364 = (
                  ganttDiagramT4ZO3ILLValue363
                    ? ganttDiagramT4ZO3ILLParam58.utc
                    : ganttDiagramT4ZO3ILLParam58
                )()
                  .year(ganttDiagramT4ZO3ILLValue362)
                  .startOf("year")),
                (ganttDiagramT4ZO3ILLValue365 =
                  4 - ganttDiagramT4ZO3ILLValue364.isoWeekday()),
                ganttDiagramT4ZO3ILLValue364.isoWeekday() > 4 &&
                  (ganttDiagramT4ZO3ILLValue365 += 7),
                ganttDiagramT4ZO3ILLValue364.add(
                  ganttDiagramT4ZO3ILLValue365,
                  "day",
                ));
            return (
              ganttDiagramT4ZO3ILLValue366.diff(
                ganttDiagramT4ZO3ILLValue367,
                "week",
              ) + 1
            );
          };
          ganttDiagramT4ZO3ILLValue227.isoWeekday = function (
            ganttDiagramT4ZO3ILLParam187,
          ) {
            return this.$utils().u(ganttDiagramT4ZO3ILLParam187)
              ? this.day() || 7
              : this.day(
                  this.day() % 7
                    ? ganttDiagramT4ZO3ILLParam187
                    : ganttDiagramT4ZO3ILLParam187 - 7,
                );
          };
          var ganttDiagramT4ZO3ILLValue228 =
            ganttDiagramT4ZO3ILLValue227.startOf;
          ganttDiagramT4ZO3ILLValue227.startOf = function (
            ganttDiagramT4ZO3ILLParam120,
            ganttDiagramT4ZO3ILLParam121,
          ) {
            var ganttDiagramT4ZO3ILLValue378 = this.$utils(),
              ganttDiagramT4ZO3ILLValue379 =
                !!ganttDiagramT4ZO3ILLValue378.u(
                  ganttDiagramT4ZO3ILLParam121,
                ) || ganttDiagramT4ZO3ILLParam121;
            return ganttDiagramT4ZO3ILLValue378.p(
              ganttDiagramT4ZO3ILLParam120,
            ) === "isoweek"
              ? ganttDiagramT4ZO3ILLValue379
                ? this.date(this.date() - (this.isoWeekday() - 1)).startOf(
                    "day",
                  )
                : this.date(
                    this.date() - 1 - (this.isoWeekday() - 1) + 7,
                  ).endOf("day")
              : ganttDiagramT4ZO3ILLValue228.bind(this)(
                  ganttDiagramT4ZO3ILLParam120,
                  ganttDiagramT4ZO3ILLParam121,
                );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLValue2 = createCommonJsModule(
    (ganttDiagramT4ZO3ILLParam8, ganttDiagramT4ZO3ILLParam9) => {
      (function (ganttDiagramT4ZO3ILLParam124, ganttDiagramT4ZO3ILLParam125) {
        typeof ganttDiagramT4ZO3ILLParam8 == "object" &&
        ganttDiagramT4ZO3ILLParam9 !== undefined
          ? (ganttDiagramT4ZO3ILLParam9.exports =
              ganttDiagramT4ZO3ILLParam125())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLParam125)
            : ((ganttDiagramT4ZO3ILLParam124 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLParam124 ||
                    self).dayjs_plugin_customParseFormat =
                ganttDiagramT4ZO3ILLParam125());
      })(ganttDiagramT4ZO3ILLParam8, function () {
        var ganttDiagramT4ZO3ILLValue141 = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          ganttDiagramT4ZO3ILLValue142 =
            /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          ganttDiagramT4ZO3ILLValue143 = /\d/,
          ganttDiagramT4ZO3ILLValue144 = /\d\d/,
          ganttDiagramT4ZO3ILLValue145 = /\d\d?/,
          ganttDiagramT4ZO3ILLValue146 = /\d*[^-_:/,()\s\d]+/,
          ganttDiagramT4ZO3ILLValue147 = {},
          ganttDiagramT4ZO3ILLValue148 = function (
            ganttDiagramT4ZO3ILLParam221,
          ) {
            return (
              (ganttDiagramT4ZO3ILLParam221 = +ganttDiagramT4ZO3ILLParam221) +
              (ganttDiagramT4ZO3ILLParam221 > 68 ? 1900 : 2e3)
            );
          },
          ganttDiagramT4ZO3ILLValue149 = function (
            ganttDiagramT4ZO3ILLParam218,
          ) {
            return function (ganttDiagramT4ZO3ILLParam257) {
              this[ganttDiagramT4ZO3ILLParam218] =
                +ganttDiagramT4ZO3ILLParam257;
            };
          },
          ganttDiagramT4ZO3ILLValue150 = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (ganttDiagramT4ZO3ILLParam135) {
              (this.zone ||= {}).offset = (function (
                ganttDiagramT4ZO3ILLParam164,
              ) {
                if (
                  !ganttDiagramT4ZO3ILLParam164 ||
                  ganttDiagramT4ZO3ILLParam164 === "Z"
                )
                  return 0;
                var ganttDiagramT4ZO3ILLValue415 =
                    ganttDiagramT4ZO3ILLParam164.match(/([+-]|\d\d)/g),
                  ganttDiagramT4ZO3ILLValue416 =
                    60 * ganttDiagramT4ZO3ILLValue415[1] +
                    (+ganttDiagramT4ZO3ILLValue415[2] || 0);
                return ganttDiagramT4ZO3ILLValue416 === 0
                  ? 0
                  : ganttDiagramT4ZO3ILLValue415[0] === "+"
                    ? -ganttDiagramT4ZO3ILLValue416
                    : ganttDiagramT4ZO3ILLValue416;
              })(ganttDiagramT4ZO3ILLParam135);
            },
          ],
          ganttDiagramT4ZO3ILLValue151 = function (
            ganttDiagramT4ZO3ILLParam199,
          ) {
            var ganttDiagramT4ZO3ILLValue450 =
              ganttDiagramT4ZO3ILLValue147[ganttDiagramT4ZO3ILLParam199];
            return (
              ganttDiagramT4ZO3ILLValue450 &&
              (ganttDiagramT4ZO3ILLValue450.indexOf
                ? ganttDiagramT4ZO3ILLValue450
                : ganttDiagramT4ZO3ILLValue450.s.concat(
                    ganttDiagramT4ZO3ILLValue450.f,
                  ))
            );
          },
          ganttDiagramT4ZO3ILLValue152 = function (
            ganttDiagramT4ZO3ILLParam148,
            ganttDiagramT4ZO3ILLParam149,
          ) {
            var ganttDiagramT4ZO3ILLValue400,
              ganttDiagramT4ZO3ILLValue401 =
                ganttDiagramT4ZO3ILLValue147.meridiem;
            if (ganttDiagramT4ZO3ILLValue401) {
              for (
                var ganttDiagramT4ZO3ILLValue402 = 1;
                ganttDiagramT4ZO3ILLValue402 <= 24;
                ganttDiagramT4ZO3ILLValue402 += 1
              )
                if (
                  ganttDiagramT4ZO3ILLParam148.indexOf(
                    ganttDiagramT4ZO3ILLValue401(
                      ganttDiagramT4ZO3ILLValue402,
                      0,
                      ganttDiagramT4ZO3ILLParam149,
                    ),
                  ) > -1
                ) {
                  ganttDiagramT4ZO3ILLValue400 =
                    ganttDiagramT4ZO3ILLValue402 > 12;
                  break;
                }
            } else
              ganttDiagramT4ZO3ILLValue400 =
                ganttDiagramT4ZO3ILLParam148 ===
                (ganttDiagramT4ZO3ILLParam149 ? "pm" : "PM");
            return ganttDiagramT4ZO3ILLValue400;
          },
          ganttDiagramT4ZO3ILLValue153 = {
            A: [
              ganttDiagramT4ZO3ILLValue146,
              function (ganttDiagramT4ZO3ILLParam241) {
                this.afternoon = ganttDiagramT4ZO3ILLValue152(
                  ganttDiagramT4ZO3ILLParam241,
                  false,
                );
              },
            ],
            a: [
              ganttDiagramT4ZO3ILLValue146,
              function (ganttDiagramT4ZO3ILLParam242) {
                this.afternoon = ganttDiagramT4ZO3ILLValue152(
                  ganttDiagramT4ZO3ILLParam242,
                  true,
                );
              },
            ],
            Q: [
              ganttDiagramT4ZO3ILLValue143,
              function (ganttDiagramT4ZO3ILLParam245) {
                this.month = 3 * (ganttDiagramT4ZO3ILLParam245 - 1) + 1;
              },
            ],
            S: [
              ganttDiagramT4ZO3ILLValue143,
              function (ganttDiagramT4ZO3ILLParam236) {
                this.milliseconds = 100 * ganttDiagramT4ZO3ILLParam236;
              },
            ],
            SS: [
              ganttDiagramT4ZO3ILLValue144,
              function (ganttDiagramT4ZO3ILLParam243) {
                this.milliseconds = 10 * ganttDiagramT4ZO3ILLParam243;
              },
            ],
            SSS: [
              /\d{3}/,
              function (ganttDiagramT4ZO3ILLParam246) {
                this.milliseconds = +ganttDiagramT4ZO3ILLParam246;
              },
            ],
            s: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("seconds"),
            ],
            ss: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("seconds"),
            ],
            m: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("minutes"),
            ],
            mm: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("minutes"),
            ],
            H: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("hours"),
            ],
            h: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("hours"),
            ],
            HH: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("hours"),
            ],
            hh: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("hours"),
            ],
            D: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("day"),
            ],
            DD: [
              ganttDiagramT4ZO3ILLValue144,
              ganttDiagramT4ZO3ILLValue149("day"),
            ],
            Do: [
              ganttDiagramT4ZO3ILLValue146,
              function (ganttDiagramT4ZO3ILLParam155) {
                var ganttDiagramT4ZO3ILLValue405 =
                  ganttDiagramT4ZO3ILLValue147.ordinal;
                if (
                  ((this.day = ganttDiagramT4ZO3ILLParam155.match(/\d+/)[0]),
                  ganttDiagramT4ZO3ILLValue405)
                )
                  for (
                    var ganttDiagramT4ZO3ILLValue406 = 1;
                    ganttDiagramT4ZO3ILLValue406 <= 31;
                    ganttDiagramT4ZO3ILLValue406 += 1
                  )
                    ganttDiagramT4ZO3ILLValue405(
                      ganttDiagramT4ZO3ILLValue406,
                    ).replace(/\[|\]/g, "") === ganttDiagramT4ZO3ILLParam155 &&
                      (this.day = ganttDiagramT4ZO3ILLValue406);
              },
            ],
            w: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("week"),
            ],
            ww: [
              ganttDiagramT4ZO3ILLValue144,
              ganttDiagramT4ZO3ILLValue149("week"),
            ],
            M: [
              ganttDiagramT4ZO3ILLValue145,
              ganttDiagramT4ZO3ILLValue149("month"),
            ],
            MM: [
              ganttDiagramT4ZO3ILLValue144,
              ganttDiagramT4ZO3ILLValue149("month"),
            ],
            MMM: [
              ganttDiagramT4ZO3ILLValue146,
              function (ganttDiagramT4ZO3ILLParam139) {
                var ganttDiagramT4ZO3ILLValue391 =
                    ganttDiagramT4ZO3ILLValue151("months"),
                  ganttDiagramT4ZO3ILLValue392 =
                    (
                      ganttDiagramT4ZO3ILLValue151("monthsShort") ||
                      ganttDiagramT4ZO3ILLValue391.map(function (item) {
                        return item.slice(0, 3);
                      })
                    ).indexOf(ganttDiagramT4ZO3ILLParam139) + 1;
                if (ganttDiagramT4ZO3ILLValue392 < 1) throw Error();
                this.month =
                  ganttDiagramT4ZO3ILLValue392 % 12 ||
                  ganttDiagramT4ZO3ILLValue392;
              },
            ],
            MMMM: [
              ganttDiagramT4ZO3ILLValue146,
              function (ganttDiagramT4ZO3ILLParam180) {
                var ganttDiagramT4ZO3ILLValue438 =
                  ganttDiagramT4ZO3ILLValue151("months").indexOf(
                    ganttDiagramT4ZO3ILLParam180,
                  ) + 1;
                if (ganttDiagramT4ZO3ILLValue438 < 1) throw Error();
                this.month =
                  ganttDiagramT4ZO3ILLValue438 % 12 ||
                  ganttDiagramT4ZO3ILLValue438;
              },
            ],
            Y: [/[+-]?\d+/, ganttDiagramT4ZO3ILLValue149("year")],
            YY: [
              ganttDiagramT4ZO3ILLValue144,
              function (ganttDiagramT4ZO3ILLParam253) {
                this.year = ganttDiagramT4ZO3ILLValue148(
                  ganttDiagramT4ZO3ILLParam253,
                );
              },
            ],
            YYYY: [/\d{4}/, ganttDiagramT4ZO3ILLValue149("year")],
            Z: ganttDiagramT4ZO3ILLValue150,
            ZZ: ganttDiagramT4ZO3ILLValue150,
          };
        function ganttDiagramT4ZO3ILLHelper12(ganttDiagramT4ZO3ILLParam60) {
          for (
            var ganttDiagramT4ZO3ILLValue234 = ganttDiagramT4ZO3ILLParam60,
              ganttDiagramT4ZO3ILLValue235 =
                ganttDiagramT4ZO3ILLValue147 &&
                ganttDiagramT4ZO3ILLValue147.formats,
              ganttDiagramT4ZO3ILLValue236 = (ganttDiagramT4ZO3ILLParam60 =
                ganttDiagramT4ZO3ILLValue234.replace(
                  /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                  function (
                    ganttDiagramT4ZO3ILLParam136,
                    ganttDiagramT4ZO3ILLParam137,
                    ganttDiagramT4ZO3ILLParam138,
                  ) {
                    var ganttDiagramT4ZO3ILLValue390 =
                      ganttDiagramT4ZO3ILLParam138 &&
                      ganttDiagramT4ZO3ILLParam138.toUpperCase();
                    return (
                      ganttDiagramT4ZO3ILLParam137 ||
                      ganttDiagramT4ZO3ILLValue235[
                        ganttDiagramT4ZO3ILLParam138
                      ] ||
                      ganttDiagramT4ZO3ILLValue141[
                        ganttDiagramT4ZO3ILLParam138
                      ] ||
                      ganttDiagramT4ZO3ILLValue235[
                        ganttDiagramT4ZO3ILLValue390
                      ].replace(
                        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                        function (
                          ganttDiagramT4ZO3ILLParam231,
                          ganttDiagramT4ZO3ILLParam232,
                          ganttDiagramT4ZO3ILLParam233,
                        ) {
                          return (
                            ganttDiagramT4ZO3ILLParam232 ||
                            ganttDiagramT4ZO3ILLParam233.slice(1)
                          );
                        },
                      )
                    );
                  },
                )).match(ganttDiagramT4ZO3ILLValue142),
              ganttDiagramT4ZO3ILLValue237 =
                ganttDiagramT4ZO3ILLValue236.length,
              ganttDiagramT4ZO3ILLValue238 = 0;
            ganttDiagramT4ZO3ILLValue238 < ganttDiagramT4ZO3ILLValue237;
            ganttDiagramT4ZO3ILLValue238 += 1
          ) {
            var ganttDiagramT4ZO3ILLValue239 =
                ganttDiagramT4ZO3ILLValue236[ganttDiagramT4ZO3ILLValue238],
              ganttDiagramT4ZO3ILLValue240 =
                ganttDiagramT4ZO3ILLValue153[ganttDiagramT4ZO3ILLValue239],
              ganttDiagramT4ZO3ILLValue241 =
                ganttDiagramT4ZO3ILLValue240 && ganttDiagramT4ZO3ILLValue240[0],
              ganttDiagramT4ZO3ILLValue242 =
                ganttDiagramT4ZO3ILLValue240 && ganttDiagramT4ZO3ILLValue240[1];
            ganttDiagramT4ZO3ILLValue236[ganttDiagramT4ZO3ILLValue238] =
              ganttDiagramT4ZO3ILLValue242
                ? {
                    regex: ganttDiagramT4ZO3ILLValue241,
                    parser: ganttDiagramT4ZO3ILLValue242,
                  }
                : ganttDiagramT4ZO3ILLValue239.replace(/^\[|\]$/g, "");
          }
          return function (ganttDiagramT4ZO3ILLParam96) {
            for (
              var ganttDiagramT4ZO3ILLValue336 = {},
                ganttDiagramT4ZO3ILLValue337 = 0,
                ganttDiagramT4ZO3ILLValue338 = 0;
              ganttDiagramT4ZO3ILLValue337 < ganttDiagramT4ZO3ILLValue237;
              ganttDiagramT4ZO3ILLValue337 += 1
            ) {
              var ganttDiagramT4ZO3ILLValue339 =
                ganttDiagramT4ZO3ILLValue236[ganttDiagramT4ZO3ILLValue337];
              if (typeof ganttDiagramT4ZO3ILLValue339 == "string")
                ganttDiagramT4ZO3ILLValue338 +=
                  ganttDiagramT4ZO3ILLValue339.length;
              else {
                var ganttDiagramT4ZO3ILLValue340 =
                    ganttDiagramT4ZO3ILLValue339.regex,
                  ganttDiagramT4ZO3ILLValue341 =
                    ganttDiagramT4ZO3ILLValue339.parser,
                  ganttDiagramT4ZO3ILLValue342 =
                    ganttDiagramT4ZO3ILLParam96.slice(
                      ganttDiagramT4ZO3ILLValue338,
                    ),
                  ganttDiagramT4ZO3ILLValue343 =
                    ganttDiagramT4ZO3ILLValue340.exec(
                      ganttDiagramT4ZO3ILLValue342,
                    )[0];
                ganttDiagramT4ZO3ILLValue341.call(
                  ganttDiagramT4ZO3ILLValue336,
                  ganttDiagramT4ZO3ILLValue343,
                );
                ganttDiagramT4ZO3ILLParam96 =
                  ganttDiagramT4ZO3ILLParam96.replace(
                    ganttDiagramT4ZO3ILLValue343,
                    "",
                  );
              }
            }
            return (
              (function (ganttDiagramT4ZO3ILLParam163) {
                var ganttDiagramT4ZO3ILLValue413 =
                  ganttDiagramT4ZO3ILLParam163.afternoon;
                if (ganttDiagramT4ZO3ILLValue413 !== undefined) {
                  var ganttDiagramT4ZO3ILLValue414 =
                    ganttDiagramT4ZO3ILLParam163.hours;
                  ganttDiagramT4ZO3ILLValue413
                    ? ganttDiagramT4ZO3ILLValue414 < 12 &&
                      (ganttDiagramT4ZO3ILLParam163.hours += 12)
                    : ganttDiagramT4ZO3ILLValue414 === 12 &&
                      (ganttDiagramT4ZO3ILLParam163.hours = 0);
                  delete ganttDiagramT4ZO3ILLParam163.afternoon;
                }
              })(ganttDiagramT4ZO3ILLValue336),
              ganttDiagramT4ZO3ILLValue336
            );
          };
        }
        return function (
          ganttDiagramT4ZO3ILLParam35,
          ganttDiagramT4ZO3ILLParam36,
          ganttDiagramT4ZO3ILLParam37,
        ) {
          ganttDiagramT4ZO3ILLParam37.p.customParseFormat = true;
          ganttDiagramT4ZO3ILLParam35 &&
            ganttDiagramT4ZO3ILLParam35.parseTwoDigitYear &&
            (ganttDiagramT4ZO3ILLValue148 =
              ganttDiagramT4ZO3ILLParam35.parseTwoDigitYear);
          var ganttDiagramT4ZO3ILLValue197 =
              ganttDiagramT4ZO3ILLParam36.prototype,
            ganttDiagramT4ZO3ILLValue198 = ganttDiagramT4ZO3ILLValue197.parse;
          ganttDiagramT4ZO3ILLValue197.parse = function (
            ganttDiagramT4ZO3ILLParam48,
          ) {
            var ganttDiagramT4ZO3ILLValue205 = ganttDiagramT4ZO3ILLParam48.date,
              ganttDiagramT4ZO3ILLValue206 = ganttDiagramT4ZO3ILLParam48.utc,
              ganttDiagramT4ZO3ILLValue207 = ganttDiagramT4ZO3ILLParam48.args;
            this.$u = ganttDiagramT4ZO3ILLValue206;
            var ganttDiagramT4ZO3ILLValue208 = ganttDiagramT4ZO3ILLValue207[1];
            if (typeof ganttDiagramT4ZO3ILLValue208 == "string") {
              var ganttDiagramT4ZO3ILLValue209 =
                  true === ganttDiagramT4ZO3ILLValue207[2],
                ganttDiagramT4ZO3ILLValue210 =
                  true === ganttDiagramT4ZO3ILLValue207[3],
                ganttDiagramT4ZO3ILLValue211 =
                  ganttDiagramT4ZO3ILLValue209 || ganttDiagramT4ZO3ILLValue210,
                ganttDiagramT4ZO3ILLValue212 = ganttDiagramT4ZO3ILLValue207[2];
              ganttDiagramT4ZO3ILLValue210 &&
                (ganttDiagramT4ZO3ILLValue212 =
                  ganttDiagramT4ZO3ILLValue207[2]);
              ganttDiagramT4ZO3ILLValue147 = this.$locale();
              !ganttDiagramT4ZO3ILLValue209 &&
                ganttDiagramT4ZO3ILLValue212 &&
                (ganttDiagramT4ZO3ILLValue147 =
                  ganttDiagramT4ZO3ILLParam37.Ls[ganttDiagramT4ZO3ILLValue212]);
              this.$d = (function (
                ganttDiagramT4ZO3ILLParam69,
                ganttDiagramT4ZO3ILLParam70,
                ganttDiagramT4ZO3ILLParam71,
                ganttDiagramT4ZO3ILLParam72,
              ) {
                try {
                  if (["x", "X"].indexOf(ganttDiagramT4ZO3ILLParam70) > -1)
                    return new Date(
                      (ganttDiagramT4ZO3ILLParam70 === "X" ? 1e3 : 1) *
                        ganttDiagramT4ZO3ILLParam69,
                    );
                  var ganttDiagramT4ZO3ILLValue279 =
                      ganttDiagramT4ZO3ILLHelper12(ganttDiagramT4ZO3ILLParam70)(
                        ganttDiagramT4ZO3ILLParam69,
                      ),
                    ganttDiagramT4ZO3ILLValue280 =
                      ganttDiagramT4ZO3ILLValue279.year,
                    ganttDiagramT4ZO3ILLValue281 =
                      ganttDiagramT4ZO3ILLValue279.month,
                    ganttDiagramT4ZO3ILLValue282 =
                      ganttDiagramT4ZO3ILLValue279.day,
                    ganttDiagramT4ZO3ILLValue283 =
                      ganttDiagramT4ZO3ILLValue279.hours,
                    ganttDiagramT4ZO3ILLValue284 =
                      ganttDiagramT4ZO3ILLValue279.minutes,
                    ganttDiagramT4ZO3ILLValue285 =
                      ganttDiagramT4ZO3ILLValue279.seconds,
                    ganttDiagramT4ZO3ILLValue286 =
                      ganttDiagramT4ZO3ILLValue279.milliseconds,
                    ganttDiagramT4ZO3ILLValue287 =
                      ganttDiagramT4ZO3ILLValue279.zone,
                    ganttDiagramT4ZO3ILLValue288 =
                      ganttDiagramT4ZO3ILLValue279.week,
                    ganttDiagramT4ZO3ILLValue289 = new Date(),
                    ganttDiagramT4ZO3ILLValue290 =
                      ganttDiagramT4ZO3ILLValue282 ||
                      (ganttDiagramT4ZO3ILLValue280 ||
                      ganttDiagramT4ZO3ILLValue281
                        ? 1
                        : ganttDiagramT4ZO3ILLValue289.getDate()),
                    ganttDiagramT4ZO3ILLValue291 =
                      ganttDiagramT4ZO3ILLValue280 ||
                      ganttDiagramT4ZO3ILLValue289.getFullYear(),
                    ganttDiagramT4ZO3ILLValue292 = 0;
                  (ganttDiagramT4ZO3ILLValue280 &&
                    !ganttDiagramT4ZO3ILLValue281) ||
                    (ganttDiagramT4ZO3ILLValue292 =
                      ganttDiagramT4ZO3ILLValue281 > 0
                        ? ganttDiagramT4ZO3ILLValue281 - 1
                        : ganttDiagramT4ZO3ILLValue289.getMonth());
                  var ganttDiagramT4ZO3ILLValue293,
                    ganttDiagramT4ZO3ILLValue294 =
                      ganttDiagramT4ZO3ILLValue283 || 0,
                    ganttDiagramT4ZO3ILLValue295 =
                      ganttDiagramT4ZO3ILLValue284 || 0,
                    ganttDiagramT4ZO3ILLValue296 =
                      ganttDiagramT4ZO3ILLValue285 || 0,
                    ganttDiagramT4ZO3ILLValue297 =
                      ganttDiagramT4ZO3ILLValue286 || 0;
                  return ganttDiagramT4ZO3ILLValue287
                    ? new Date(
                        Date.UTC(
                          ganttDiagramT4ZO3ILLValue291,
                          ganttDiagramT4ZO3ILLValue292,
                          ganttDiagramT4ZO3ILLValue290,
                          ganttDiagramT4ZO3ILLValue294,
                          ganttDiagramT4ZO3ILLValue295,
                          ganttDiagramT4ZO3ILLValue296,
                          ganttDiagramT4ZO3ILLValue297 +
                            60 * ganttDiagramT4ZO3ILLValue287.offset * 1e3,
                        ),
                      )
                    : ganttDiagramT4ZO3ILLParam71
                      ? new Date(
                          Date.UTC(
                            ganttDiagramT4ZO3ILLValue291,
                            ganttDiagramT4ZO3ILLValue292,
                            ganttDiagramT4ZO3ILLValue290,
                            ganttDiagramT4ZO3ILLValue294,
                            ganttDiagramT4ZO3ILLValue295,
                            ganttDiagramT4ZO3ILLValue296,
                            ganttDiagramT4ZO3ILLValue297,
                          ),
                        )
                      : ((ganttDiagramT4ZO3ILLValue293 = new Date(
                          ganttDiagramT4ZO3ILLValue291,
                          ganttDiagramT4ZO3ILLValue292,
                          ganttDiagramT4ZO3ILLValue290,
                          ganttDiagramT4ZO3ILLValue294,
                          ganttDiagramT4ZO3ILLValue295,
                          ganttDiagramT4ZO3ILLValue296,
                          ganttDiagramT4ZO3ILLValue297,
                        )),
                        ganttDiagramT4ZO3ILLValue288 &&
                          (ganttDiagramT4ZO3ILLValue293 =
                            ganttDiagramT4ZO3ILLParam72(
                              ganttDiagramT4ZO3ILLValue293,
                            )
                              .week(ganttDiagramT4ZO3ILLValue288)
                              .toDate()),
                        ganttDiagramT4ZO3ILLValue293);
                } catch {
                  return new Date("");
                }
              })(
                ganttDiagramT4ZO3ILLValue205,
                ganttDiagramT4ZO3ILLValue208,
                ganttDiagramT4ZO3ILLValue206,
                ganttDiagramT4ZO3ILLParam37,
              );
              this.init();
              ganttDiagramT4ZO3ILLValue212 &&
                true !== ganttDiagramT4ZO3ILLValue212 &&
                (this.$L = this.locale(ganttDiagramT4ZO3ILLValue212).$L);
              ganttDiagramT4ZO3ILLValue211 &&
                ganttDiagramT4ZO3ILLValue205 !=
                  this.format(ganttDiagramT4ZO3ILLValue208) &&
                (this.$d = new Date(""));
              ganttDiagramT4ZO3ILLValue147 = {};
            } else if (ganttDiagramT4ZO3ILLValue208 instanceof Array)
              for (
                var ganttDiagramT4ZO3ILLValue213 =
                    ganttDiagramT4ZO3ILLValue208.length,
                  ganttDiagramT4ZO3ILLValue214 = 1;
                ganttDiagramT4ZO3ILLValue214 <= ganttDiagramT4ZO3ILLValue213;
                ganttDiagramT4ZO3ILLValue214 += 1
              ) {
                ganttDiagramT4ZO3ILLValue207[1] =
                  ganttDiagramT4ZO3ILLValue208[
                    ganttDiagramT4ZO3ILLValue214 - 1
                  ];
                var ganttDiagramT4ZO3ILLValue215 =
                  ganttDiagramT4ZO3ILLParam37.apply(
                    this,
                    ganttDiagramT4ZO3ILLValue207,
                  );
                if (ganttDiagramT4ZO3ILLValue215.isValid()) {
                  this.$d = ganttDiagramT4ZO3ILLValue215.$d;
                  this.$L = ganttDiagramT4ZO3ILLValue215.$L;
                  this.init();
                  break;
                }
                ganttDiagramT4ZO3ILLValue214 === ganttDiagramT4ZO3ILLValue213 &&
                  (this.$d = new Date(""));
              }
            else
              ganttDiagramT4ZO3ILLValue198.call(
                this,
                ganttDiagramT4ZO3ILLParam48,
              );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLValue3 = createCommonJsModule(
    (ganttDiagramT4ZO3ILLParam38, ganttDiagramT4ZO3ILLParam39) => {
      (function (ganttDiagramT4ZO3ILLParam126, ganttDiagramT4ZO3ILLParam127) {
        typeof ganttDiagramT4ZO3ILLParam38 == "object" &&
        ganttDiagramT4ZO3ILLParam39 !== undefined
          ? (ganttDiagramT4ZO3ILLParam39.exports =
              ganttDiagramT4ZO3ILLParam127())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLParam127)
            : ((ganttDiagramT4ZO3ILLParam126 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLParam126 ||
                    self).dayjs_plugin_advancedFormat =
                ganttDiagramT4ZO3ILLParam127());
      })(ganttDiagramT4ZO3ILLParam38, function () {
        return function (
          ganttDiagramT4ZO3ILLParam51,
          ganttDiagramT4ZO3ILLParam52,
        ) {
          var ganttDiagramT4ZO3ILLValue216 =
              ganttDiagramT4ZO3ILLParam52.prototype,
            ganttDiagramT4ZO3ILLValue217 = ganttDiagramT4ZO3ILLValue216.format;
          ganttDiagramT4ZO3ILLValue216.format = function (
            ganttDiagramT4ZO3ILLParam55,
          ) {
            var ganttDiagramT4ZO3ILLValue220 = this,
              ganttDiagramT4ZO3ILLValue221 = this.$locale();
            if (!this.isValid())
              return ganttDiagramT4ZO3ILLValue217.bind(this)(
                ganttDiagramT4ZO3ILLParam55,
              );
            var ganttDiagramT4ZO3ILLValue222 = this.$utils(),
              ganttDiagramT4ZO3ILLValue223 = (
                ganttDiagramT4ZO3ILLParam55 || "YYYY-MM-DDTHH:mm:ssZ"
              ).replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (ganttDiagramT4ZO3ILLParam68) {
                  switch (ganttDiagramT4ZO3ILLParam68) {
                    case "Q":
                      return Math.ceil(
                        (ganttDiagramT4ZO3ILLValue220.$M + 1) / 3,
                      );
                    case "Do":
                      return ganttDiagramT4ZO3ILLValue221.ordinal(
                        ganttDiagramT4ZO3ILLValue220.$D,
                      );
                    case "gggg":
                      return ganttDiagramT4ZO3ILLValue220.weekYear();
                    case "GGGG":
                      return ganttDiagramT4ZO3ILLValue220.isoWeekYear();
                    case "wo":
                      return ganttDiagramT4ZO3ILLValue221.ordinal(
                        ganttDiagramT4ZO3ILLValue220.week(),
                        "W",
                      );
                    case "w":
                    case "ww":
                      return ganttDiagramT4ZO3ILLValue222.s(
                        ganttDiagramT4ZO3ILLValue220.week(),
                        ganttDiagramT4ZO3ILLParam68 === "w" ? 1 : 2,
                        "0",
                      );
                    case "W":
                    case "WW":
                      return ganttDiagramT4ZO3ILLValue222.s(
                        ganttDiagramT4ZO3ILLValue220.isoWeek(),
                        ganttDiagramT4ZO3ILLParam68 === "W" ? 1 : 2,
                        "0",
                      );
                    case "k":
                    case "kk":
                      return ganttDiagramT4ZO3ILLValue222.s(
                        String(
                          ganttDiagramT4ZO3ILLValue220.$H === 0
                            ? 24
                            : ganttDiagramT4ZO3ILLValue220.$H,
                        ),
                        ganttDiagramT4ZO3ILLParam68 === "k" ? 1 : 2,
                        "0",
                      );
                    case "X":
                      return Math.floor(
                        ganttDiagramT4ZO3ILLValue220.$d.getTime() / 1e3,
                      );
                    case "x":
                      return ganttDiagramT4ZO3ILLValue220.$d.getTime();
                    case "z":
                      return (
                        "[" + ganttDiagramT4ZO3ILLValue220.offsetName() + "]"
                      );
                    case "zzz":
                      return (
                        "[" +
                        ganttDiagramT4ZO3ILLValue220.offsetName("long") +
                        "]"
                      );
                    default:
                      return ganttDiagramT4ZO3ILLParam68;
                  }
                },
              );
            return ganttDiagramT4ZO3ILLValue217.bind(this)(
              ganttDiagramT4ZO3ILLValue223,
            );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLValue4 = createCommonJsModule(
    (ganttDiagramT4ZO3ILLParam6, ganttDiagramT4ZO3ILLParam7) => {
      (function (ganttDiagramT4ZO3ILLParam131, ganttDiagramT4ZO3ILLParam132) {
        typeof ganttDiagramT4ZO3ILLParam6 == "object" &&
        ganttDiagramT4ZO3ILLParam7 !== undefined
          ? (ganttDiagramT4ZO3ILLParam7.exports =
              ganttDiagramT4ZO3ILLParam132())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramT4ZO3ILLParam132)
            : ((ganttDiagramT4ZO3ILLParam131 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramT4ZO3ILLParam131 ||
                    self).dayjs_plugin_duration =
                ganttDiagramT4ZO3ILLParam132());
      })(ganttDiagramT4ZO3ILLParam6, function () {
        var ganttDiagramT4ZO3ILLValue121,
          ganttDiagramT4ZO3ILLValue122,
          ganttDiagramT4ZO3ILLValue127 =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          ganttDiagramT4ZO3ILLValue130 =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
          ganttDiagramT4ZO3ILLValue131 = {
            years: 31536e6,
            months: 2628e6,
            days: 864e5,
            hours: 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5,
          },
          ganttDiagramT4ZO3ILLValue132 = function (
            ganttDiagramT4ZO3ILLParam244,
          ) {
            return (
              ganttDiagramT4ZO3ILLParam244 instanceof
              ganttDiagramT4ZO3ILLValue139
            );
          },
          ganttDiagramT4ZO3ILLValue133 = function (
            ganttDiagramT4ZO3ILLParam223,
            ganttDiagramT4ZO3ILLParam224,
            ganttDiagramT4ZO3ILLParam225,
          ) {
            return new ganttDiagramT4ZO3ILLValue139(
              ganttDiagramT4ZO3ILLParam223,
              ganttDiagramT4ZO3ILLParam225,
              ganttDiagramT4ZO3ILLParam224.$l,
            );
          },
          ganttDiagramT4ZO3ILLValue134 = function (
            ganttDiagramT4ZO3ILLParam249,
          ) {
            return (
              ganttDiagramT4ZO3ILLValue122.p(ganttDiagramT4ZO3ILLParam249) + "s"
            );
          },
          ganttDiagramT4ZO3ILLValue135 = function (
            ganttDiagramT4ZO3ILLParam258,
          ) {
            return ganttDiagramT4ZO3ILLParam258 < 0;
          },
          ganttDiagramT4ZO3ILLValue136 = function (
            ganttDiagramT4ZO3ILLParam205,
          ) {
            return ganttDiagramT4ZO3ILLValue135(ganttDiagramT4ZO3ILLParam205)
              ? Math.ceil(ganttDiagramT4ZO3ILLParam205)
              : Math.floor(ganttDiagramT4ZO3ILLParam205);
          },
          ganttDiagramT4ZO3ILLValue137 = function (
            ganttDiagramT4ZO3ILLParam247,
          ) {
            return Math.abs(ganttDiagramT4ZO3ILLParam247);
          },
          ganttDiagramT4ZO3ILLValue138 = function (
            ganttDiagramT4ZO3ILLParam165,
            ganttDiagramT4ZO3ILLParam166,
          ) {
            return ganttDiagramT4ZO3ILLParam165
              ? ganttDiagramT4ZO3ILLValue135(ganttDiagramT4ZO3ILLParam165)
                ? {
                    negative: true,
                    format:
                      "" +
                      ganttDiagramT4ZO3ILLValue137(
                        ganttDiagramT4ZO3ILLParam165,
                      ) +
                      ganttDiagramT4ZO3ILLParam166,
                  }
                : {
                    negative: false,
                    format:
                      "" +
                      ganttDiagramT4ZO3ILLParam165 +
                      ganttDiagramT4ZO3ILLParam166,
                  }
              : {
                  negative: false,
                  format: "",
                };
          },
          ganttDiagramT4ZO3ILLValue139 = (function () {
            function ganttDiagramT4ZO3ILLHelper13(
              ganttDiagramT4ZO3ILLParam64,
              ganttDiagramT4ZO3ILLParam65,
              ganttDiagramT4ZO3ILLParam66,
            ) {
              var ganttDiagramT4ZO3ILLValue251 = this;
              if (
                ((this.$d = {}),
                (this.$l = ganttDiagramT4ZO3ILLParam66),
                ganttDiagramT4ZO3ILLParam64 === undefined &&
                  ((this.$ms = 0), this.parseFromMilliseconds()),
                ganttDiagramT4ZO3ILLParam65)
              )
                return ganttDiagramT4ZO3ILLValue133(
                  ganttDiagramT4ZO3ILLParam64 *
                    ganttDiagramT4ZO3ILLValue131[
                      ganttDiagramT4ZO3ILLValue134(ganttDiagramT4ZO3ILLParam65)
                    ],
                  this,
                );
              if (typeof ganttDiagramT4ZO3ILLParam64 == "number")
                return (
                  (this.$ms = ganttDiagramT4ZO3ILLParam64),
                  this.parseFromMilliseconds(),
                  this
                );
              if (typeof ganttDiagramT4ZO3ILLParam64 == "object")
                return (
                  Object.keys(ganttDiagramT4ZO3ILLParam64).forEach(
                    function (item) {
                      ganttDiagramT4ZO3ILLValue251.$d[
                        ganttDiagramT4ZO3ILLValue134(item)
                      ] = ganttDiagramT4ZO3ILLParam64[item];
                    },
                  ),
                  this.calMilliseconds(),
                  this
                );
              if (typeof ganttDiagramT4ZO3ILLParam64 == "string") {
                var ganttDiagramT4ZO3ILLValue252 =
                  ganttDiagramT4ZO3ILLParam64.match(
                    ganttDiagramT4ZO3ILLValue130,
                  );
                if (ganttDiagramT4ZO3ILLValue252) {
                  var ganttDiagramT4ZO3ILLValue253 =
                    ganttDiagramT4ZO3ILLValue252.slice(2).map(function (item) {
                      return item == null ? 0 : Number(item);
                    });
                  return (
                    (this.$d.years = ganttDiagramT4ZO3ILLValue253[0]),
                    (this.$d.months = ganttDiagramT4ZO3ILLValue253[1]),
                    (this.$d.weeks = ganttDiagramT4ZO3ILLValue253[2]),
                    (this.$d.days = ganttDiagramT4ZO3ILLValue253[3]),
                    (this.$d.hours = ganttDiagramT4ZO3ILLValue253[4]),
                    (this.$d.minutes = ganttDiagramT4ZO3ILLValue253[5]),
                    (this.$d.seconds = ganttDiagramT4ZO3ILLValue253[6]),
                    this.calMilliseconds(),
                    this
                  );
                }
              }
              return this;
            }
            var ganttDiagramT4ZO3ILLValue154 =
              ganttDiagramT4ZO3ILLHelper13.prototype;
            return (
              (ganttDiagramT4ZO3ILLValue154.calMilliseconds = function () {
                var ganttDiagramT4ZO3ILLValue421 = this;
                this.$ms = Object.keys(this.$d).reduce(function (
                  accumulator,
                  current,
                ) {
                  return (
                    accumulator +
                    (ganttDiagramT4ZO3ILLValue421.$d[current] || 0) *
                      ganttDiagramT4ZO3ILLValue131[current]
                  );
                }, 0);
              }),
              (ganttDiagramT4ZO3ILLValue154.parseFromMilliseconds =
                function () {
                  var ganttDiagramT4ZO3ILLValue380 = this.$ms;
                  this.$d.years = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 31536e6,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 31536e6;
                  this.$d.months = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 2628e6,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 2628e6;
                  this.$d.days = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 864e5,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 864e5;
                  this.$d.hours = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 36e5,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 36e5;
                  this.$d.minutes = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 6e4,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 6e4;
                  this.$d.seconds = ganttDiagramT4ZO3ILLValue136(
                    ganttDiagramT4ZO3ILLValue380 / 1e3,
                  );
                  ganttDiagramT4ZO3ILLValue380 %= 1e3;
                  this.$d.milliseconds = ganttDiagramT4ZO3ILLValue380;
                }),
              (ganttDiagramT4ZO3ILLValue154.toISOString = function () {
                var ganttDiagramT4ZO3ILLValue268 = ganttDiagramT4ZO3ILLValue138(
                    this.$d.years,
                    "Y",
                  ),
                  ganttDiagramT4ZO3ILLValue269 = ganttDiagramT4ZO3ILLValue138(
                    this.$d.months,
                    "M",
                  ),
                  ganttDiagramT4ZO3ILLValue270 = +this.$d.days || 0;
                this.$d.weeks &&
                  (ganttDiagramT4ZO3ILLValue270 += 7 * this.$d.weeks);
                var ganttDiagramT4ZO3ILLValue271 = ganttDiagramT4ZO3ILLValue138(
                    ganttDiagramT4ZO3ILLValue270,
                    "D",
                  ),
                  ganttDiagramT4ZO3ILLValue272 = ganttDiagramT4ZO3ILLValue138(
                    this.$d.hours,
                    "H",
                  ),
                  ganttDiagramT4ZO3ILLValue273 = ganttDiagramT4ZO3ILLValue138(
                    this.$d.minutes,
                    "M",
                  ),
                  ganttDiagramT4ZO3ILLValue274 = this.$d.seconds || 0;
                this.$d.milliseconds &&
                  ((ganttDiagramT4ZO3ILLValue274 += this.$d.milliseconds / 1e3),
                  (ganttDiagramT4ZO3ILLValue274 =
                    Math.round(1e3 * ganttDiagramT4ZO3ILLValue274) / 1e3));
                var ganttDiagramT4ZO3ILLValue275 = ganttDiagramT4ZO3ILLValue138(
                    ganttDiagramT4ZO3ILLValue274,
                    "S",
                  ),
                  ganttDiagramT4ZO3ILLValue276 =
                    ganttDiagramT4ZO3ILLValue268.negative ||
                    ganttDiagramT4ZO3ILLValue269.negative ||
                    ganttDiagramT4ZO3ILLValue271.negative ||
                    ganttDiagramT4ZO3ILLValue272.negative ||
                    ganttDiagramT4ZO3ILLValue273.negative ||
                    ganttDiagramT4ZO3ILLValue275.negative,
                  ganttDiagramT4ZO3ILLValue277 =
                    ganttDiagramT4ZO3ILLValue272.format ||
                    ganttDiagramT4ZO3ILLValue273.format ||
                    ganttDiagramT4ZO3ILLValue275.format
                      ? "T"
                      : "",
                  ganttDiagramT4ZO3ILLValue278 =
                    (ganttDiagramT4ZO3ILLValue276 ? "-" : "") +
                    "P" +
                    ganttDiagramT4ZO3ILLValue268.format +
                    ganttDiagramT4ZO3ILLValue269.format +
                    ganttDiagramT4ZO3ILLValue271.format +
                    ganttDiagramT4ZO3ILLValue277 +
                    ganttDiagramT4ZO3ILLValue272.format +
                    ganttDiagramT4ZO3ILLValue273.format +
                    ganttDiagramT4ZO3ILLValue275.format;
                return ganttDiagramT4ZO3ILLValue278 === "P" ||
                  ganttDiagramT4ZO3ILLValue278 === "-P"
                  ? "P0D"
                  : ganttDiagramT4ZO3ILLValue278;
              }),
              (ganttDiagramT4ZO3ILLValue154.toJSON = function () {
                return this.toISOString();
              }),
              (ganttDiagramT4ZO3ILLValue154.format = function (
                ganttDiagramT4ZO3ILLParam81,
              ) {
                var ganttDiagramT4ZO3ILLValue311 =
                    ganttDiagramT4ZO3ILLParam81 || "YYYY-MM-DDTHH:mm:ss",
                  ganttDiagramT4ZO3ILLValue312 = {
                    Y: this.$d.years,
                    YY: ganttDiagramT4ZO3ILLValue122.s(this.$d.years, 2, "0"),
                    YYYY: ganttDiagramT4ZO3ILLValue122.s(this.$d.years, 4, "0"),
                    M: this.$d.months,
                    MM: ganttDiagramT4ZO3ILLValue122.s(this.$d.months, 2, "0"),
                    D: this.$d.days,
                    DD: ganttDiagramT4ZO3ILLValue122.s(this.$d.days, 2, "0"),
                    H: this.$d.hours,
                    HH: ganttDiagramT4ZO3ILLValue122.s(this.$d.hours, 2, "0"),
                    m: this.$d.minutes,
                    mm: ganttDiagramT4ZO3ILLValue122.s(this.$d.minutes, 2, "0"),
                    s: this.$d.seconds,
                    ss: ganttDiagramT4ZO3ILLValue122.s(this.$d.seconds, 2, "0"),
                    SSS: ganttDiagramT4ZO3ILLValue122.s(
                      this.$d.milliseconds,
                      3,
                      "0",
                    ),
                  };
                return ganttDiagramT4ZO3ILLValue311.replace(
                  ganttDiagramT4ZO3ILLValue127,
                  function (
                    ganttDiagramT4ZO3ILLParam234,
                    ganttDiagramT4ZO3ILLParam235,
                  ) {
                    return (
                      ganttDiagramT4ZO3ILLParam235 ||
                      String(
                        ganttDiagramT4ZO3ILLValue312[
                          ganttDiagramT4ZO3ILLParam234
                        ],
                      )
                    );
                  },
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.as = function (
                ganttDiagramT4ZO3ILLParam237,
              ) {
                return (
                  this.$ms /
                  ganttDiagramT4ZO3ILLValue131[
                    ganttDiagramT4ZO3ILLValue134(ganttDiagramT4ZO3ILLParam237)
                  ]
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.get = function (
                ganttDiagramT4ZO3ILLParam167,
              ) {
                var ganttDiagramT4ZO3ILLValue419 = this.$ms,
                  ganttDiagramT4ZO3ILLValue420 = ganttDiagramT4ZO3ILLValue134(
                    ganttDiagramT4ZO3ILLParam167,
                  );
                return (
                  ganttDiagramT4ZO3ILLValue420 === "milliseconds"
                    ? (ganttDiagramT4ZO3ILLValue419 %= 1e3)
                    : (ganttDiagramT4ZO3ILLValue419 =
                        ganttDiagramT4ZO3ILLValue420 === "weeks"
                          ? ganttDiagramT4ZO3ILLValue136(
                              ganttDiagramT4ZO3ILLValue419 /
                                ganttDiagramT4ZO3ILLValue131[
                                  ganttDiagramT4ZO3ILLValue420
                                ],
                            )
                          : this.$d[ganttDiagramT4ZO3ILLValue420]),
                  ganttDiagramT4ZO3ILLValue419 || 0
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.add = function (
                ganttDiagramT4ZO3ILLParam174,
                ganttDiagramT4ZO3ILLParam175,
                ganttDiagramT4ZO3ILLParam176,
              ) {
                var ganttDiagramT4ZO3ILLValue429;
                return (
                  (ganttDiagramT4ZO3ILLValue429 = ganttDiagramT4ZO3ILLParam175
                    ? ganttDiagramT4ZO3ILLParam174 *
                      ganttDiagramT4ZO3ILLValue131[
                        ganttDiagramT4ZO3ILLValue134(
                          ganttDiagramT4ZO3ILLParam175,
                        )
                      ]
                    : ganttDiagramT4ZO3ILLValue132(ganttDiagramT4ZO3ILLParam174)
                      ? ganttDiagramT4ZO3ILLParam174.$ms
                      : ganttDiagramT4ZO3ILLValue133(
                          ganttDiagramT4ZO3ILLParam174,
                          this,
                        ).$ms),
                  ganttDiagramT4ZO3ILLValue133(
                    this.$ms +
                      ganttDiagramT4ZO3ILLValue429 *
                        (ganttDiagramT4ZO3ILLParam176 ? -1 : 1),
                    this,
                  )
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.subtract = function (
                ganttDiagramT4ZO3ILLParam228,
                ganttDiagramT4ZO3ILLParam229,
              ) {
                return this.add(
                  ganttDiagramT4ZO3ILLParam228,
                  ganttDiagramT4ZO3ILLParam229,
                  true,
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.locale = function (
                ganttDiagramT4ZO3ILLParam208,
              ) {
                var ganttDiagramT4ZO3ILLValue459 = this.clone();
                return (
                  (ganttDiagramT4ZO3ILLValue459.$l =
                    ganttDiagramT4ZO3ILLParam208),
                  ganttDiagramT4ZO3ILLValue459
                );
              }),
              (ganttDiagramT4ZO3ILLValue154.clone = function () {
                return ganttDiagramT4ZO3ILLValue133(this.$ms, this);
              }),
              (ganttDiagramT4ZO3ILLValue154.humanize = function (
                ganttDiagramT4ZO3ILLParam192,
              ) {
                return ganttDiagramT4ZO3ILLValue121()
                  .add(this.$ms, "ms")
                  .locale(this.$l)
                  .fromNow(!ganttDiagramT4ZO3ILLParam192);
              }),
              (ganttDiagramT4ZO3ILLValue154.valueOf = function () {
                return this.asMilliseconds();
              }),
              (ganttDiagramT4ZO3ILLValue154.milliseconds = function () {
                return this.get("milliseconds");
              }),
              (ganttDiagramT4ZO3ILLValue154.asMilliseconds = function () {
                return this.as("milliseconds");
              }),
              (ganttDiagramT4ZO3ILLValue154.seconds = function () {
                return this.get("seconds");
              }),
              (ganttDiagramT4ZO3ILLValue154.asSeconds = function () {
                return this.as("seconds");
              }),
              (ganttDiagramT4ZO3ILLValue154.minutes = function () {
                return this.get("minutes");
              }),
              (ganttDiagramT4ZO3ILLValue154.asMinutes = function () {
                return this.as("minutes");
              }),
              (ganttDiagramT4ZO3ILLValue154.hours = function () {
                return this.get("hours");
              }),
              (ganttDiagramT4ZO3ILLValue154.asHours = function () {
                return this.as("hours");
              }),
              (ganttDiagramT4ZO3ILLValue154.days = function () {
                return this.get("days");
              }),
              (ganttDiagramT4ZO3ILLValue154.asDays = function () {
                return this.as("days");
              }),
              (ganttDiagramT4ZO3ILLValue154.weeks = function () {
                return this.get("weeks");
              }),
              (ganttDiagramT4ZO3ILLValue154.asWeeks = function () {
                return this.as("weeks");
              }),
              (ganttDiagramT4ZO3ILLValue154.months = function () {
                return this.get("months");
              }),
              (ganttDiagramT4ZO3ILLValue154.asMonths = function () {
                return this.as("months");
              }),
              (ganttDiagramT4ZO3ILLValue154.years = function () {
                return this.get("years");
              }),
              (ganttDiagramT4ZO3ILLValue154.asYears = function () {
                return this.as("years");
              }),
              ganttDiagramT4ZO3ILLHelper13
            );
          })(),
          ganttDiagramT4ZO3ILLValue140 = function (
            ganttDiagramT4ZO3ILLParam128,
            ganttDiagramT4ZO3ILLParam129,
            ganttDiagramT4ZO3ILLParam130,
          ) {
            return ganttDiagramT4ZO3ILLParam128
              .add(
                ganttDiagramT4ZO3ILLParam129.years() *
                  ganttDiagramT4ZO3ILLParam130,
                "y",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.months() *
                  ganttDiagramT4ZO3ILLParam130,
                "M",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.days() *
                  ganttDiagramT4ZO3ILLParam130,
                "d",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.hours() *
                  ganttDiagramT4ZO3ILLParam130,
                "h",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.minutes() *
                  ganttDiagramT4ZO3ILLParam130,
                "m",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.seconds() *
                  ganttDiagramT4ZO3ILLParam130,
                "s",
              )
              .add(
                ganttDiagramT4ZO3ILLParam129.milliseconds() *
                  ganttDiagramT4ZO3ILLParam130,
                "ms",
              );
          };
        return function (
          ganttDiagramT4ZO3ILLParam97,
          ganttDiagramT4ZO3ILLParam98,
          ganttDiagramT4ZO3ILLParam99,
        ) {
          ganttDiagramT4ZO3ILLValue121 = ganttDiagramT4ZO3ILLParam99;
          ganttDiagramT4ZO3ILLValue122 = ganttDiagramT4ZO3ILLParam99().$utils();
          ganttDiagramT4ZO3ILLParam99.duration = function (
            ganttDiagramT4ZO3ILLParam215,
            ganttDiagramT4ZO3ILLParam216,
          ) {
            return ganttDiagramT4ZO3ILLValue133(
              ganttDiagramT4ZO3ILLParam215,
              {
                $l: ganttDiagramT4ZO3ILLParam99.locale(),
              },
              ganttDiagramT4ZO3ILLParam216,
            );
          };
          ganttDiagramT4ZO3ILLParam99.isDuration = ganttDiagramT4ZO3ILLValue132;
          var ganttDiagramT4ZO3ILLValue344 =
              ganttDiagramT4ZO3ILLParam98.prototype.add,
            ganttDiagramT4ZO3ILLValue345 =
              ganttDiagramT4ZO3ILLParam98.prototype.subtract;
          ganttDiagramT4ZO3ILLParam98.prototype.add = function (
            ganttDiagramT4ZO3ILLParam202,
            ganttDiagramT4ZO3ILLParam203,
          ) {
            return ganttDiagramT4ZO3ILLValue132(ganttDiagramT4ZO3ILLParam202)
              ? ganttDiagramT4ZO3ILLValue140(
                  this,
                  ganttDiagramT4ZO3ILLParam202,
                  1,
                )
              : ganttDiagramT4ZO3ILLValue344.bind(this)(
                  ganttDiagramT4ZO3ILLParam202,
                  ganttDiagramT4ZO3ILLParam203,
                );
          };
          ganttDiagramT4ZO3ILLParam98.prototype.subtract = function (
            ganttDiagramT4ZO3ILLParam200,
            ganttDiagramT4ZO3ILLParam201,
          ) {
            return ganttDiagramT4ZO3ILLValue132(ganttDiagramT4ZO3ILLParam200)
              ? ganttDiagramT4ZO3ILLValue140(
                  this,
                  ganttDiagramT4ZO3ILLParam200,
                  -1,
                )
              : ganttDiagramT4ZO3ILLValue345.bind(this)(
                  ganttDiagramT4ZO3ILLParam200,
                  ganttDiagramT4ZO3ILLParam201,
                );
          };
        };
      });
    },
  ),
  ganttDiagramT4ZO3ILLValue5 = dist(),
  ganttDiagramT4ZO3ILLValue6 = toEsModule(chunkAGHRB4JFA(), 1),
  ganttDiagramT4ZO3ILLValue7 = toEsModule(ganttDiagramT4ZO3ILLValue1(), 1),
  ganttDiagramT4ZO3ILLValue8 = toEsModule(ganttDiagramT4ZO3ILLValue2(), 1),
  ganttDiagramT4ZO3ILLValue9 = toEsModule(ganttDiagramT4ZO3ILLValue3(), 1),
  ganttDiagramT4ZO3ILLValue10 = toEsModule(ganttDiagramT4ZO3ILLValue4(), 1),
  ganttDiagramT4ZO3ILLValue11 = (function () {
    var ganttDiagramT4ZO3ILLValue82 = chunkAGHRB4JFN(function (
        ganttDiagramT4ZO3ILLParam195,
        ganttDiagramT4ZO3ILLParam196,
        ganttDiagramT4ZO3ILLParam197,
        ganttDiagramT4ZO3ILLParam198,
      ) {
        for (
          ganttDiagramT4ZO3ILLParam197 ||= {},
            ganttDiagramT4ZO3ILLParam198 = ganttDiagramT4ZO3ILLParam195.length;
          ganttDiagramT4ZO3ILLParam198--;
          ganttDiagramT4ZO3ILLParam197[
            ganttDiagramT4ZO3ILLParam195[ganttDiagramT4ZO3ILLParam198]
          ] = ganttDiagramT4ZO3ILLParam196
        );
        return ganttDiagramT4ZO3ILLParam197;
      }, "o"),
      ganttDiagramT4ZO3ILLValue83 = [
        6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 35, 36, 38, 40,
      ],
      ganttDiagramT4ZO3ILLValue84 = [1, 26],
      ganttDiagramT4ZO3ILLValue85 = [1, 27],
      ganttDiagramT4ZO3ILLValue86 = [1, 28],
      ganttDiagramT4ZO3ILLValue87 = [1, 29],
      ganttDiagramT4ZO3ILLValue88 = [1, 30],
      ganttDiagramT4ZO3ILLValue89 = [1, 31],
      ganttDiagramT4ZO3ILLValue90 = [1, 32],
      ganttDiagramT4ZO3ILLValue91 = [1, 33],
      ganttDiagramT4ZO3ILLValue92 = [1, 34],
      ganttDiagramT4ZO3ILLValue93 = [1, 9],
      ganttDiagramT4ZO3ILLValue94 = [1, 10],
      ganttDiagramT4ZO3ILLValue95 = [1, 11],
      ganttDiagramT4ZO3ILLValue96 = [1, 12],
      ganttDiagramT4ZO3ILLValue97 = [1, 13],
      ganttDiagramT4ZO3ILLValue98 = [1, 14],
      ganttDiagramT4ZO3ILLValue99 = [1, 15],
      ganttDiagramT4ZO3ILLValue100 = [1, 16],
      ganttDiagramT4ZO3ILLValue101 = [1, 19],
      ganttDiagramT4ZO3ILLValue102 = [1, 20],
      ganttDiagramT4ZO3ILLValue103 = [1, 21],
      ganttDiagramT4ZO3ILLValue104 = [1, 22],
      ganttDiagramT4ZO3ILLValue105 = [1, 23],
      ganttDiagramT4ZO3ILLValue106 = [1, 25],
      ganttDiagramT4ZO3ILLValue107 = [1, 35],
      ganttDiagramT4ZO3ILLValue108 = {
        trace: chunkAGHRB4JFN(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          gantt: 4,
          document: 5,
          EOF: 6,
          line: 7,
          SPACE: 8,
          statement: 9,
          NL: 10,
          weekday: 11,
          weekday_monday: 12,
          weekday_tuesday: 13,
          weekday_wednesday: 14,
          weekday_thursday: 15,
          weekday_friday: 16,
          weekday_saturday: 17,
          weekday_sunday: 18,
          weekend: 19,
          weekend_friday: 20,
          weekend_saturday: 21,
          dateFormat: 22,
          inclusiveEndDates: 23,
          topAxis: 24,
          axisFormat: 25,
          tickInterval: 26,
          excludes: 27,
          includes: 28,
          todayMarker: 29,
          title: 30,
          acc_title: 31,
          acc_title_value: 32,
          acc_descr: 33,
          acc_descr_value: 34,
          acc_descr_multiline_value: 35,
          section: 36,
          clickStatement: 37,
          taskTxt: 38,
          taskData: 39,
          click: 40,
          callbackname: 41,
          callbackargs: 42,
          href: 43,
          clickStatementDebug: 44,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          4: "gantt",
          6: "EOF",
          8: "SPACE",
          10: "NL",
          12: "weekday_monday",
          13: "weekday_tuesday",
          14: "weekday_wednesday",
          15: "weekday_thursday",
          16: "weekday_friday",
          17: "weekday_saturday",
          18: "weekday_sunday",
          20: "weekend_friday",
          21: "weekend_saturday",
          22: "dateFormat",
          23: "inclusiveEndDates",
          24: "topAxis",
          25: "axisFormat",
          26: "tickInterval",
          27: "excludes",
          28: "includes",
          29: "todayMarker",
          30: "title",
          31: "acc_title",
          32: "acc_title_value",
          33: "acc_descr",
          34: "acc_descr_value",
          35: "acc_descr_multiline_value",
          36: "section",
          38: "taskTxt",
          39: "taskData",
          40: "click",
          41: "callbackname",
          42: "callbackargs",
          43: "href",
        },
        productions_: [
          0,
          [3, 3],
          [5, 0],
          [5, 2],
          [7, 2],
          [7, 1],
          [7, 1],
          [7, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [11, 1],
          [19, 1],
          [19, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 2],
          [9, 2],
          [9, 1],
          [9, 1],
          [9, 1],
          [9, 2],
          [37, 2],
          [37, 3],
          [37, 3],
          [37, 4],
          [37, 3],
          [37, 4],
          [37, 2],
          [44, 2],
          [44, 3],
          [44, 3],
          [44, 4],
          [44, 3],
          [44, 4],
          [44, 2],
        ],
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam18,
          ganttDiagramT4ZO3ILLParam19,
          ganttDiagramT4ZO3ILLParam20,
          ganttDiagramT4ZO3ILLParam21,
          ganttDiagramT4ZO3ILLParam22,
          ganttDiagramT4ZO3ILLParam23,
          ganttDiagramT4ZO3ILLParam24,
        ) {
          var ganttDiagramT4ZO3ILLValue187 =
            ganttDiagramT4ZO3ILLParam23.length - 1;
          switch (ganttDiagramT4ZO3ILLParam22) {
            case 1:
              return ganttDiagramT4ZO3ILLParam23[
                ganttDiagramT4ZO3ILLValue187 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              ganttDiagramT4ZO3ILLParam23[
                ganttDiagramT4ZO3ILLValue187 - 1
              ].push(ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187]);
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1];
              break;
            case 4:
            case 5:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              ganttDiagramT4ZO3ILLParam21.setWeekday("monday");
              break;
            case 9:
              ganttDiagramT4ZO3ILLParam21.setWeekday("tuesday");
              break;
            case 10:
              ganttDiagramT4ZO3ILLParam21.setWeekday("wednesday");
              break;
            case 11:
              ganttDiagramT4ZO3ILLParam21.setWeekday("thursday");
              break;
            case 12:
              ganttDiagramT4ZO3ILLParam21.setWeekday("friday");
              break;
            case 13:
              ganttDiagramT4ZO3ILLParam21.setWeekday("saturday");
              break;
            case 14:
              ganttDiagramT4ZO3ILLParam21.setWeekday("sunday");
              break;
            case 15:
              ganttDiagramT4ZO3ILLParam21.setWeekend("friday");
              break;
            case 16:
              ganttDiagramT4ZO3ILLParam21.setWeekend("saturday");
              break;
            case 17:
              ganttDiagramT4ZO3ILLParam21.setDateFormat(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(11),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(11);
              break;
            case 18:
              ganttDiagramT4ZO3ILLParam21.enableInclusiveEndDates();
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(18);
              break;
            case 19:
              ganttDiagramT4ZO3ILLParam21.TopAxis();
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(8);
              break;
            case 20:
              ganttDiagramT4ZO3ILLParam21.setAxisFormat(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(11),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(11);
              break;
            case 21:
              ganttDiagramT4ZO3ILLParam21.setTickInterval(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(13),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(13);
              break;
            case 22:
              ganttDiagramT4ZO3ILLParam21.setExcludes(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(9),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(9);
              break;
            case 23:
              ganttDiagramT4ZO3ILLParam21.setIncludes(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(9),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(9);
              break;
            case 24:
              ganttDiagramT4ZO3ILLParam21.setTodayMarker(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(12),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(12);
              break;
            case 27:
              ganttDiagramT4ZO3ILLParam21.setDiagramTitle(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(6),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(6);
              break;
            case 28:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].trim();
              ganttDiagramT4ZO3ILLParam21.setAccTitle(this.$);
              break;
            case 29:
            case 30:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].trim();
              ganttDiagramT4ZO3ILLParam21.setAccDescription(this.$);
              break;
            case 31:
              ganttDiagramT4ZO3ILLParam21.addSection(
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(8),
              );
              this.$ =
                ganttDiagramT4ZO3ILLParam23[
                  ganttDiagramT4ZO3ILLValue187
                ].substr(8);
              break;
            case 33:
              ganttDiagramT4ZO3ILLParam21.addTask(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              this.$ = "task";
              break;
            case 34:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
                null,
              );
              break;
            case 35:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              break;
            case 36:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                null,
              );
              ganttDiagramT4ZO3ILLParam21.setLink(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              break;
            case 37:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
              );
              ganttDiagramT4ZO3ILLParam21.setLink(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              break;
            case 38:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
                null,
              );
              ganttDiagramT4ZO3ILLParam21.setLink(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
              );
              break;
            case 39:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3];
              ganttDiagramT4ZO3ILLParam21.setClickEvent(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              ganttDiagramT4ZO3ILLParam21.setLink(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2],
              );
              break;
            case 40:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1];
              ganttDiagramT4ZO3ILLParam21.setLink(
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1],
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187],
              );
              break;
            case 41:
            case 47:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187];
              break;
            case 42:
            case 43:
            case 45:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187];
              break;
            case 44:
            case 46:
              this.$ =
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 3] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 2] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187 - 1] +
                " " +
                ganttDiagramT4ZO3ILLParam23[ganttDiagramT4ZO3ILLValue187];
              break;
          }
        }, "anonymous"),
        table: [
          {
            3: 1,
            4: [1, 2],
          },
          {
            1: [3],
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 17,
            12: ganttDiagramT4ZO3ILLValue84,
            13: ganttDiagramT4ZO3ILLValue85,
            14: ganttDiagramT4ZO3ILLValue86,
            15: ganttDiagramT4ZO3ILLValue87,
            16: ganttDiagramT4ZO3ILLValue88,
            17: ganttDiagramT4ZO3ILLValue89,
            18: ganttDiagramT4ZO3ILLValue90,
            19: 18,
            20: ganttDiagramT4ZO3ILLValue91,
            21: ganttDiagramT4ZO3ILLValue92,
            22: ganttDiagramT4ZO3ILLValue93,
            23: ganttDiagramT4ZO3ILLValue94,
            24: ganttDiagramT4ZO3ILLValue95,
            25: ganttDiagramT4ZO3ILLValue96,
            26: ganttDiagramT4ZO3ILLValue97,
            27: ganttDiagramT4ZO3ILLValue98,
            28: ganttDiagramT4ZO3ILLValue99,
            29: ganttDiagramT4ZO3ILLValue100,
            30: ganttDiagramT4ZO3ILLValue101,
            31: ganttDiagramT4ZO3ILLValue102,
            33: ganttDiagramT4ZO3ILLValue103,
            35: ganttDiagramT4ZO3ILLValue104,
            36: ganttDiagramT4ZO3ILLValue105,
            37: 24,
            38: ganttDiagramT4ZO3ILLValue106,
            40: ganttDiagramT4ZO3ILLValue107,
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 7], {
            1: [2, 1],
          }),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 3]),
          {
            9: 36,
            11: 17,
            12: ganttDiagramT4ZO3ILLValue84,
            13: ganttDiagramT4ZO3ILLValue85,
            14: ganttDiagramT4ZO3ILLValue86,
            15: ganttDiagramT4ZO3ILLValue87,
            16: ganttDiagramT4ZO3ILLValue88,
            17: ganttDiagramT4ZO3ILLValue89,
            18: ganttDiagramT4ZO3ILLValue90,
            19: 18,
            20: ganttDiagramT4ZO3ILLValue91,
            21: ganttDiagramT4ZO3ILLValue92,
            22: ganttDiagramT4ZO3ILLValue93,
            23: ganttDiagramT4ZO3ILLValue94,
            24: ganttDiagramT4ZO3ILLValue95,
            25: ganttDiagramT4ZO3ILLValue96,
            26: ganttDiagramT4ZO3ILLValue97,
            27: ganttDiagramT4ZO3ILLValue98,
            28: ganttDiagramT4ZO3ILLValue99,
            29: ganttDiagramT4ZO3ILLValue100,
            30: ganttDiagramT4ZO3ILLValue101,
            31: ganttDiagramT4ZO3ILLValue102,
            33: ganttDiagramT4ZO3ILLValue103,
            35: ganttDiagramT4ZO3ILLValue104,
            36: ganttDiagramT4ZO3ILLValue105,
            37: 24,
            38: ganttDiagramT4ZO3ILLValue106,
            40: ganttDiagramT4ZO3ILLValue107,
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 5]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 6]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 17]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 18]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 19]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 20]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 21]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 22]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 23]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 24]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 25]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 26]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 27]),
          {
            32: [1, 37],
          },
          {
            34: [1, 38],
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 30]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 31]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 32]),
          {
            39: [1, 39],
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 8]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 9]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 10]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 11]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 12]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 13]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 14]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 15]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 16]),
          {
            41: [1, 40],
            43: [1, 41],
          },
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 4]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 28]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 29]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 33]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 34], {
            42: [1, 42],
            43: [1, 43],
          }),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 40], {
            41: [1, 44],
          }),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 35], {
            43: [1, 45],
          }),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 36]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 38], {
            42: [1, 46],
          }),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 37]),
          ganttDiagramT4ZO3ILLValue82(ganttDiagramT4ZO3ILLValue83, [2, 39]),
        ],
        defaultActions: {},
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam181,
          ganttDiagramT4ZO3ILLParam182,
        ) {
          if (ganttDiagramT4ZO3ILLParam182.recoverable)
            this.trace(ganttDiagramT4ZO3ILLParam181);
          else {
            var ganttDiagramT4ZO3ILLValue439 = Error(
              ganttDiagramT4ZO3ILLParam181,
            );
            throw (
              (ganttDiagramT4ZO3ILLValue439.hash =
                ganttDiagramT4ZO3ILLParam182),
              ganttDiagramT4ZO3ILLValue439
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam17) {
          var ganttDiagramT4ZO3ILLValue158 = this,
            ganttDiagramT4ZO3ILLValue159 = [0],
            ganttDiagramT4ZO3ILLValue160 = [],
            ganttDiagramT4ZO3ILLValue161 = [null],
            ganttDiagramT4ZO3ILLValue162 = [],
            ganttDiagramT4ZO3ILLValue163 = this.table,
            ganttDiagramT4ZO3ILLValue164 = "",
            ganttDiagramT4ZO3ILLValue165 = 0,
            ganttDiagramT4ZO3ILLValue166 = 0,
            ganttDiagramT4ZO3ILLValue167 = 0,
            ganttDiagramT4ZO3ILLValue170 =
              ganttDiagramT4ZO3ILLValue162.slice.call(arguments, 1),
            ganttDiagramT4ZO3ILLValue171 = Object.create(this.lexer),
            ganttDiagramT4ZO3ILLValue172 = {
              yy: {},
            };
          for (var ganttDiagramT4ZO3ILLValue173 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              ganttDiagramT4ZO3ILLValue173,
            ) &&
              (ganttDiagramT4ZO3ILLValue172.yy[ganttDiagramT4ZO3ILLValue173] =
                this.yy[ganttDiagramT4ZO3ILLValue173]);
          ganttDiagramT4ZO3ILLValue171.setInput(
            ganttDiagramT4ZO3ILLParam17,
            ganttDiagramT4ZO3ILLValue172.yy,
          );
          ganttDiagramT4ZO3ILLValue172.yy.lexer = ganttDiagramT4ZO3ILLValue171;
          ganttDiagramT4ZO3ILLValue172.yy.parser = this;
          ganttDiagramT4ZO3ILLValue171.yylloc === undefined &&
            (ganttDiagramT4ZO3ILLValue171.yylloc = {});
          var ganttDiagramT4ZO3ILLValue174 =
            ganttDiagramT4ZO3ILLValue171.yylloc;
          ganttDiagramT4ZO3ILLValue162.push(ganttDiagramT4ZO3ILLValue174);
          var ganttDiagramT4ZO3ILLValue175 =
            ganttDiagramT4ZO3ILLValue171.options &&
            ganttDiagramT4ZO3ILLValue171.options.ranges;
          typeof ganttDiagramT4ZO3ILLValue172.yy.parseError == "function"
            ? (this.parseError = ganttDiagramT4ZO3ILLValue172.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function ganttDiagramT4ZO3ILLHelper14(ganttDiagramT4ZO3ILLParam204) {
            ganttDiagramT4ZO3ILLValue159.length -=
              2 * ganttDiagramT4ZO3ILLParam204;
            ganttDiagramT4ZO3ILLValue161.length -= ganttDiagramT4ZO3ILLParam204;
            ganttDiagramT4ZO3ILLValue162.length -= ganttDiagramT4ZO3ILLParam204;
          }
          chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper14, "popStack");
          function ganttDiagramT4ZO3ILLHelper15() {
            var ganttDiagramT4ZO3ILLValue411 =
              ganttDiagramT4ZO3ILLValue160.pop() ||
              ganttDiagramT4ZO3ILLValue171.lex() ||
              1;
            return (
              typeof ganttDiagramT4ZO3ILLValue411 != "number" &&
                (ganttDiagramT4ZO3ILLValue411 instanceof Array &&
                  ((ganttDiagramT4ZO3ILLValue160 =
                    ganttDiagramT4ZO3ILLValue411),
                  (ganttDiagramT4ZO3ILLValue411 =
                    ganttDiagramT4ZO3ILLValue160.pop())),
                (ganttDiagramT4ZO3ILLValue411 =
                  ganttDiagramT4ZO3ILLValue158.symbols_[
                    ganttDiagramT4ZO3ILLValue411
                  ] || ganttDiagramT4ZO3ILLValue411)),
              ganttDiagramT4ZO3ILLValue411
            );
          }
          chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper15, "lex");
          for (
            var ganttDiagramT4ZO3ILLValue176,
              ganttDiagramT4ZO3ILLValue177,
              ganttDiagramT4ZO3ILLValue178,
              ganttDiagramT4ZO3ILLValue179,
              ganttDiagramT4ZO3ILLValue180,
              ganttDiagramT4ZO3ILLValue181 = {},
              ganttDiagramT4ZO3ILLValue182,
              ganttDiagramT4ZO3ILLValue183,
              ganttDiagramT4ZO3ILLValue184,
              ganttDiagramT4ZO3ILLValue185;
            ;

          ) {
            if (
              ((ganttDiagramT4ZO3ILLValue178 =
                ganttDiagramT4ZO3ILLValue159[
                  ganttDiagramT4ZO3ILLValue159.length - 1
                ]),
              this.defaultActions[ganttDiagramT4ZO3ILLValue178]
                ? (ganttDiagramT4ZO3ILLValue179 =
                    this.defaultActions[ganttDiagramT4ZO3ILLValue178])
                : ((ganttDiagramT4ZO3ILLValue176 ??=
                    ganttDiagramT4ZO3ILLHelper15()),
                  (ganttDiagramT4ZO3ILLValue179 =
                    ganttDiagramT4ZO3ILLValue163[
                      ganttDiagramT4ZO3ILLValue178
                    ] &&
                    ganttDiagramT4ZO3ILLValue163[ganttDiagramT4ZO3ILLValue178][
                      ganttDiagramT4ZO3ILLValue176
                    ])),
              ganttDiagramT4ZO3ILLValue179 === undefined ||
                !ganttDiagramT4ZO3ILLValue179.length ||
                !ganttDiagramT4ZO3ILLValue179[0])
            ) {
              var ganttDiagramT4ZO3ILLValue186 = "";
              for (ganttDiagramT4ZO3ILLValue182 in ((ganttDiagramT4ZO3ILLValue185 =
                []),
              ganttDiagramT4ZO3ILLValue163[ganttDiagramT4ZO3ILLValue178]))
                this.terminals_[ganttDiagramT4ZO3ILLValue182] &&
                  ganttDiagramT4ZO3ILLValue182 > 2 &&
                  ganttDiagramT4ZO3ILLValue185.push(
                    "'" + this.terminals_[ganttDiagramT4ZO3ILLValue182] + "'",
                  );
              ganttDiagramT4ZO3ILLValue186 =
                ganttDiagramT4ZO3ILLValue171.showPosition
                  ? "Parse error on line " +
                    (ganttDiagramT4ZO3ILLValue165 + 1) +
                    ":\n" +
                    ganttDiagramT4ZO3ILLValue171.showPosition() +
                    "\nExpecting " +
                    ganttDiagramT4ZO3ILLValue185.join(", ") +
                    ", got '" +
                    (this.terminals_[ganttDiagramT4ZO3ILLValue176] ||
                      ganttDiagramT4ZO3ILLValue176) +
                    "'"
                  : "Parse error on line " +
                    (ganttDiagramT4ZO3ILLValue165 + 1) +
                    ": Unexpected " +
                    (ganttDiagramT4ZO3ILLValue176 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[ganttDiagramT4ZO3ILLValue176] ||
                          ganttDiagramT4ZO3ILLValue176) +
                        "'");
              this.parseError(ganttDiagramT4ZO3ILLValue186, {
                text: ganttDiagramT4ZO3ILLValue171.match,
                token:
                  this.terminals_[ganttDiagramT4ZO3ILLValue176] ||
                  ganttDiagramT4ZO3ILLValue176,
                line: ganttDiagramT4ZO3ILLValue171.yylineno,
                loc: ganttDiagramT4ZO3ILLValue174,
                expected: ganttDiagramT4ZO3ILLValue185,
              });
            }
            if (
              ganttDiagramT4ZO3ILLValue179[0] instanceof Array &&
              ganttDiagramT4ZO3ILLValue179.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  ganttDiagramT4ZO3ILLValue178 +
                  ", token: " +
                  ganttDiagramT4ZO3ILLValue176,
              );
            switch (ganttDiagramT4ZO3ILLValue179[0]) {
              case 1:
                ganttDiagramT4ZO3ILLValue159.push(ganttDiagramT4ZO3ILLValue176);
                ganttDiagramT4ZO3ILLValue161.push(
                  ganttDiagramT4ZO3ILLValue171.yytext,
                );
                ganttDiagramT4ZO3ILLValue162.push(
                  ganttDiagramT4ZO3ILLValue171.yylloc,
                );
                ganttDiagramT4ZO3ILLValue159.push(
                  ganttDiagramT4ZO3ILLValue179[1],
                );
                ganttDiagramT4ZO3ILLValue176 = null;
                ganttDiagramT4ZO3ILLValue177
                  ? ((ganttDiagramT4ZO3ILLValue176 =
                      ganttDiagramT4ZO3ILLValue177),
                    (ganttDiagramT4ZO3ILLValue177 = null))
                  : ((ganttDiagramT4ZO3ILLValue166 =
                      ganttDiagramT4ZO3ILLValue171.yyleng),
                    (ganttDiagramT4ZO3ILLValue164 =
                      ganttDiagramT4ZO3ILLValue171.yytext),
                    (ganttDiagramT4ZO3ILLValue165 =
                      ganttDiagramT4ZO3ILLValue171.yylineno),
                    (ganttDiagramT4ZO3ILLValue174 =
                      ganttDiagramT4ZO3ILLValue171.yylloc),
                    ganttDiagramT4ZO3ILLValue167 > 0 &&
                      ganttDiagramT4ZO3ILLValue167--);
                break;
              case 2:
                if (
                  ((ganttDiagramT4ZO3ILLValue183 =
                    this.productions_[ganttDiagramT4ZO3ILLValue179[1]][1]),
                  (ganttDiagramT4ZO3ILLValue181.$ =
                    ganttDiagramT4ZO3ILLValue161[
                      ganttDiagramT4ZO3ILLValue161.length -
                        ganttDiagramT4ZO3ILLValue183
                    ]),
                  (ganttDiagramT4ZO3ILLValue181._$ = {
                    first_line:
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length -
                          (ganttDiagramT4ZO3ILLValue183 || 1)
                      ].first_line,
                    last_line:
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length - 1
                      ].last_line,
                    first_column:
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length -
                          (ganttDiagramT4ZO3ILLValue183 || 1)
                      ].first_column,
                    last_column:
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length - 1
                      ].last_column,
                  }),
                  ganttDiagramT4ZO3ILLValue175 &&
                    (ganttDiagramT4ZO3ILLValue181._$.range = [
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length -
                          (ganttDiagramT4ZO3ILLValue183 || 1)
                      ].range[0],
                      ganttDiagramT4ZO3ILLValue162[
                        ganttDiagramT4ZO3ILLValue162.length - 1
                      ].range[1],
                    ]),
                  (ganttDiagramT4ZO3ILLValue180 = this.performAction.apply(
                    ganttDiagramT4ZO3ILLValue181,
                    [
                      ganttDiagramT4ZO3ILLValue164,
                      ganttDiagramT4ZO3ILLValue166,
                      ganttDiagramT4ZO3ILLValue165,
                      ganttDiagramT4ZO3ILLValue172.yy,
                      ganttDiagramT4ZO3ILLValue179[1],
                      ganttDiagramT4ZO3ILLValue161,
                      ganttDiagramT4ZO3ILLValue162,
                    ].concat(ganttDiagramT4ZO3ILLValue170),
                  )),
                  ganttDiagramT4ZO3ILLValue180 !== undefined)
                )
                  return ganttDiagramT4ZO3ILLValue180;
                ganttDiagramT4ZO3ILLValue183 &&
                  ((ganttDiagramT4ZO3ILLValue159 =
                    ganttDiagramT4ZO3ILLValue159.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLValue183 * 2,
                    )),
                  (ganttDiagramT4ZO3ILLValue161 =
                    ganttDiagramT4ZO3ILLValue161.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLValue183,
                    )),
                  (ganttDiagramT4ZO3ILLValue162 =
                    ganttDiagramT4ZO3ILLValue162.slice(
                      0,
                      -1 * ganttDiagramT4ZO3ILLValue183,
                    )));
                ganttDiagramT4ZO3ILLValue159.push(
                  this.productions_[ganttDiagramT4ZO3ILLValue179[1]][0],
                );
                ganttDiagramT4ZO3ILLValue161.push(
                  ganttDiagramT4ZO3ILLValue181.$,
                );
                ganttDiagramT4ZO3ILLValue162.push(
                  ganttDiagramT4ZO3ILLValue181._$,
                );
                ganttDiagramT4ZO3ILLValue184 =
                  ganttDiagramT4ZO3ILLValue163[
                    ganttDiagramT4ZO3ILLValue159[
                      ganttDiagramT4ZO3ILLValue159.length - 2
                    ]
                  ][
                    ganttDiagramT4ZO3ILLValue159[
                      ganttDiagramT4ZO3ILLValue159.length - 1
                    ]
                  ];
                ganttDiagramT4ZO3ILLValue159.push(ganttDiagramT4ZO3ILLValue184);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    ganttDiagramT4ZO3ILLValue108.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam183,
          ganttDiagramT4ZO3ILLParam184,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              ganttDiagramT4ZO3ILLParam183,
              ganttDiagramT4ZO3ILLParam184,
            );
          else throw Error(ganttDiagramT4ZO3ILLParam183);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam87,
          ganttDiagramT4ZO3ILLParam88,
        ) {
          return (
            (this.yy = ganttDiagramT4ZO3ILLParam88 || this.yy || {}),
            (this._input = ganttDiagramT4ZO3ILLParam87),
            (this._more = this._backtrack = this.done = false),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        }, "setInput"),
        input: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLValue350 = this._input[0];
          return (
            (this.yytext += ganttDiagramT4ZO3ILLValue350),
            this.yyleng++,
            this.offset++,
            (this.match += ganttDiagramT4ZO3ILLValue350),
            (this.matched += ganttDiagramT4ZO3ILLValue350),
            ganttDiagramT4ZO3ILLValue350.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            ganttDiagramT4ZO3ILLValue350
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam59) {
          var ganttDiagramT4ZO3ILLValue229 = ganttDiagramT4ZO3ILLParam59.length,
            ganttDiagramT4ZO3ILLValue230 =
              ganttDiagramT4ZO3ILLParam59.split(/(?:\r\n?|\n)/g);
          this._input = ganttDiagramT4ZO3ILLParam59 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - ganttDiagramT4ZO3ILLValue229,
          );
          this.offset -= ganttDiagramT4ZO3ILLValue229;
          var ganttDiagramT4ZO3ILLValue231 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          ganttDiagramT4ZO3ILLValue230.length - 1 &&
            (this.yylineno -= ganttDiagramT4ZO3ILLValue230.length - 1);
          var ganttDiagramT4ZO3ILLValue232 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: ganttDiagramT4ZO3ILLValue230
                ? (ganttDiagramT4ZO3ILLValue230.length ===
                  ganttDiagramT4ZO3ILLValue231.length
                    ? this.yylloc.first_column
                    : 0) +
                  ganttDiagramT4ZO3ILLValue231[
                    ganttDiagramT4ZO3ILLValue231.length -
                      ganttDiagramT4ZO3ILLValue230.length
                  ].length -
                  ganttDiagramT4ZO3ILLValue230[0].length
                : this.yylloc.first_column - ganttDiagramT4ZO3ILLValue229,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                ganttDiagramT4ZO3ILLValue232[0],
                ganttDiagramT4ZO3ILLValue232[0] +
                  this.yyleng -
                  ganttDiagramT4ZO3ILLValue229,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: chunkAGHRB4JFN(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: chunkAGHRB4JFN(function () {
          if (this.options.backtrack_lexer) this._backtrack = true;
          else
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              },
            );
          return this;
        }, "reject"),
        less: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam217) {
          this.unput(this.match.slice(ganttDiagramT4ZO3ILLParam217));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLValue397 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (ganttDiagramT4ZO3ILLValue397.length > 20 ? "..." : "") +
            ganttDiagramT4ZO3ILLValue397.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLValue394 = this.match;
          return (
            ganttDiagramT4ZO3ILLValue394.length < 20 &&
              (ganttDiagramT4ZO3ILLValue394 += this._input.substr(
                0,
                20 - ganttDiagramT4ZO3ILLValue394.length,
              )),
            (
              ganttDiagramT4ZO3ILLValue394.substr(0, 20) +
              (ganttDiagramT4ZO3ILLValue394.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var ganttDiagramT4ZO3ILLValue422 = this.pastInput(),
            ganttDiagramT4ZO3ILLValue423 = Array(
              ganttDiagramT4ZO3ILLValue422.length + 1,
            ).join("-");
          return (
            ganttDiagramT4ZO3ILLValue422 +
            this.upcomingInput() +
            "\n" +
            ganttDiagramT4ZO3ILLValue423 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam33,
          ganttDiagramT4ZO3ILLParam34,
        ) {
          var ganttDiagramT4ZO3ILLValue193,
            ganttDiagramT4ZO3ILLValue194,
            ganttDiagramT4ZO3ILLValue195;
          if (
            (this.options.backtrack_lexer &&
              ((ganttDiagramT4ZO3ILLValue195 = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
              this.options.ranges &&
                (ganttDiagramT4ZO3ILLValue195.yylloc.range =
                  this.yylloc.range.slice(0))),
            (ganttDiagramT4ZO3ILLValue194 =
              ganttDiagramT4ZO3ILLParam33[0].match(/(?:\r\n?|\n).*/g)),
            ganttDiagramT4ZO3ILLValue194 &&
              (this.yylineno += ganttDiagramT4ZO3ILLValue194.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: ganttDiagramT4ZO3ILLValue194
                ? ganttDiagramT4ZO3ILLValue194[
                    ganttDiagramT4ZO3ILLValue194.length - 1
                  ].length -
                  ganttDiagramT4ZO3ILLValue194[
                    ganttDiagramT4ZO3ILLValue194.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  ganttDiagramT4ZO3ILLParam33[0].length,
            }),
            (this.yytext += ganttDiagramT4ZO3ILLParam33[0]),
            (this.match += ganttDiagramT4ZO3ILLParam33[0]),
            (this.matches = ganttDiagramT4ZO3ILLParam33),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              ganttDiagramT4ZO3ILLParam33[0].length,
            )),
            (this.matched += ganttDiagramT4ZO3ILLParam33[0]),
            (ganttDiagramT4ZO3ILLValue193 = this.performAction.call(
              this,
              this.yy,
              this,
              ganttDiagramT4ZO3ILLParam34,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            ganttDiagramT4ZO3ILLValue193)
          )
            return ganttDiagramT4ZO3ILLValue193;
          if (this._backtrack) {
            for (var ganttDiagramT4ZO3ILLValue196 in ganttDiagramT4ZO3ILLValue195)
              this[ganttDiagramT4ZO3ILLValue196] =
                ganttDiagramT4ZO3ILLValue195[ganttDiagramT4ZO3ILLValue196];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var ganttDiagramT4ZO3ILLValue245,
            ganttDiagramT4ZO3ILLValue246,
            ganttDiagramT4ZO3ILLValue247,
            ganttDiagramT4ZO3ILLValue248;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var ganttDiagramT4ZO3ILLValue249 = this._currentRules(),
              ganttDiagramT4ZO3ILLValue250 = 0;
            ganttDiagramT4ZO3ILLValue250 < ganttDiagramT4ZO3ILLValue249.length;
            ganttDiagramT4ZO3ILLValue250++
          )
            if (
              ((ganttDiagramT4ZO3ILLValue247 = this._input.match(
                this.rules[
                  ganttDiagramT4ZO3ILLValue249[ganttDiagramT4ZO3ILLValue250]
                ],
              )),
              ganttDiagramT4ZO3ILLValue247 &&
                (!ganttDiagramT4ZO3ILLValue246 ||
                  ganttDiagramT4ZO3ILLValue247[0].length >
                    ganttDiagramT4ZO3ILLValue246[0].length))
            ) {
              if (
                ((ganttDiagramT4ZO3ILLValue246 = ganttDiagramT4ZO3ILLValue247),
                (ganttDiagramT4ZO3ILLValue248 = ganttDiagramT4ZO3ILLValue250),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((ganttDiagramT4ZO3ILLValue245 = this.test_match(
                    ganttDiagramT4ZO3ILLValue247,
                    ganttDiagramT4ZO3ILLValue249[ganttDiagramT4ZO3ILLValue250],
                  )),
                  ganttDiagramT4ZO3ILLValue245 !== false)
                )
                  return ganttDiagramT4ZO3ILLValue245;
                if (this._backtrack) {
                  ganttDiagramT4ZO3ILLValue246 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return ganttDiagramT4ZO3ILLValue246
            ? ((ganttDiagramT4ZO3ILLValue245 = this.test_match(
                ganttDiagramT4ZO3ILLValue246,
                ganttDiagramT4ZO3ILLValue249[ganttDiagramT4ZO3ILLValue248],
              )),
              ganttDiagramT4ZO3ILLValue245 === false
                ? false
                : ganttDiagramT4ZO3ILLValue245)
            : this._input === ""
              ? this.EOF
              : this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  {
                    text: "",
                    token: null,
                    line: this.yylineno,
                  },
                );
        }, "next"),
        lex: chunkAGHRB4JFN(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam222) {
          this.conditionStack.push(ganttDiagramT4ZO3ILLParam222);
        }, "begin"),
        popState: chunkAGHRB4JFN(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: chunkAGHRB4JFN(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam170) {
          return (
            (ganttDiagramT4ZO3ILLParam170 =
              this.conditionStack.length -
              1 -
              Math.abs(ganttDiagramT4ZO3ILLParam170 || 0)),
            ganttDiagramT4ZO3ILLParam170 >= 0
              ? this.conditionStack[ganttDiagramT4ZO3ILLParam170]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam254) {
          this.begin(ganttDiagramT4ZO3ILLParam254);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramT4ZO3ILLParam29,
          ganttDiagramT4ZO3ILLParam30,
          ganttDiagramT4ZO3ILLParam31,
          ganttDiagramT4ZO3ILLParam32,
        ) {
          switch (ganttDiagramT4ZO3ILLParam31) {
            case 0:
              return (this.begin("open_directive"), "open_directive");
            case 1:
              return (this.begin("acc_title"), 31);
            case 2:
              return (this.popState(), "acc_title_value");
            case 3:
              return (this.begin("acc_descr"), 33);
            case 4:
              return (this.popState(), "acc_descr_value");
            case 5:
              this.begin("acc_descr_multiline");
              break;
            case 6:
              this.popState();
              break;
            case 7:
              return "acc_descr_multiline_value";
            case 8:
              break;
            case 9:
              break;
            case 10:
              break;
            case 11:
              return 10;
            case 12:
              break;
            case 13:
              break;
            case 14:
              this.begin("href");
              break;
            case 15:
              this.popState();
              break;
            case 16:
              return 43;
            case 17:
              this.begin("callbackname");
              break;
            case 18:
              this.popState();
              break;
            case 19:
              this.popState();
              this.begin("callbackargs");
              break;
            case 20:
              return 41;
            case 21:
              this.popState();
              break;
            case 22:
              return 42;
            case 23:
              this.begin("click");
              break;
            case 24:
              this.popState();
              break;
            case 25:
              return 40;
            case 26:
              return 4;
            case 27:
              return 22;
            case 28:
              return 23;
            case 29:
              return 24;
            case 30:
              return 25;
            case 31:
              return 26;
            case 32:
              return 28;
            case 33:
              return 27;
            case 34:
              return 29;
            case 35:
              return 12;
            case 36:
              return 13;
            case 37:
              return 14;
            case 38:
              return 15;
            case 39:
              return 16;
            case 40:
              return 17;
            case 41:
              return 18;
            case 42:
              return 20;
            case 43:
              return 21;
            case 44:
              return "date";
            case 45:
              return 30;
            case 46:
              return "accDescription";
            case 47:
              return 36;
            case 48:
              return 38;
            case 49:
              return 39;
            case 50:
              return ":";
            case 51:
              return 6;
            case 52:
              return "INVALID";
          }
        }, "anonymous"),
        rules: [
          /^(?:%%\{)/i,
          /^(?:accTitle\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*:\s*)/i,
          /^(?:(?!\n||)*[^\n]*)/i,
          /^(?:accDescr\s*\{\s*)/i,
          /^(?:[\}])/i,
          /^(?:[^\}]*)/i,
          /^(?:%%(?!\{)*[^\n]*)/i,
          /^(?:[^\}]%%*[^\n]*)/i,
          /^(?:%%*[^\n]*[\n]*)/i,
          /^(?:[\n]+)/i,
          /^(?:\s+)/i,
          /^(?:%[^\n]*)/i,
          /^(?:href[\s]+["])/i,
          /^(?:["])/i,
          /^(?:[^"]*)/i,
          /^(?:call[\s]+)/i,
          /^(?:\([\s]*\))/i,
          /^(?:\()/i,
          /^(?:[^(]*)/i,
          /^(?:\))/i,
          /^(?:[^)]*)/i,
          /^(?:click[\s]+)/i,
          /^(?:[\s\n])/i,
          /^(?:[^\s\n]*)/i,
          /^(?:gantt\b)/i,
          /^(?:dateFormat\s[^#\n;]+)/i,
          /^(?:inclusiveEndDates\b)/i,
          /^(?:topAxis\b)/i,
          /^(?:axisFormat\s[^#\n;]+)/i,
          /^(?:tickInterval\s[^#\n;]+)/i,
          /^(?:includes\s[^#\n;]+)/i,
          /^(?:excludes\s[^#\n;]+)/i,
          /^(?:todayMarker\s[^\n;]+)/i,
          /^(?:weekday\s+monday\b)/i,
          /^(?:weekday\s+tuesday\b)/i,
          /^(?:weekday\s+wednesday\b)/i,
          /^(?:weekday\s+thursday\b)/i,
          /^(?:weekday\s+friday\b)/i,
          /^(?:weekday\s+saturday\b)/i,
          /^(?:weekday\s+sunday\b)/i,
          /^(?:weekend\s+friday\b)/i,
          /^(?:weekend\s+saturday\b)/i,
          /^(?:\d\d\d\d-\d\d-\d\d\b)/i,
          /^(?:title\s[^\n]+)/i,
          /^(?:accDescription\s[^#\n;]+)/i,
          /^(?:section\s[^\n]+)/i,
          /^(?:[^:\n]+)/i,
          /^(?::[^#\n;]+)/i,
          /^(?::)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          acc_descr_multiline: {
            rules: [6, 7],
            inclusive: false,
          },
          acc_descr: {
            rules: [4],
            inclusive: false,
          },
          acc_title: {
            rules: [2],
            inclusive: false,
          },
          callbackargs: {
            rules: [21, 22],
            inclusive: false,
          },
          callbackname: {
            rules: [18, 19, 20],
            inclusive: false,
          },
          href: {
            rules: [15, 16],
            inclusive: false,
          },
          click: {
            rules: [24, 25],
            inclusive: false,
          },
          INITIAL: {
            rules: [
              0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function ganttDiagramT4ZO3ILLHelper2() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper2, "Parser"),
      (ganttDiagramT4ZO3ILLHelper2.prototype = ganttDiagramT4ZO3ILLValue108),
      (ganttDiagramT4ZO3ILLValue108.Parser = ganttDiagramT4ZO3ILLHelper2),
      new ganttDiagramT4ZO3ILLHelper2()
    );
  })();
ganttDiagramT4ZO3ILLValue11.parser = ganttDiagramT4ZO3ILLValue11;
var ganttDiagramT4ZO3ILLValue12 = ganttDiagramT4ZO3ILLValue11;
ganttDiagramT4ZO3ILLValue6.default.extend(ganttDiagramT4ZO3ILLValue7.default);
ganttDiagramT4ZO3ILLValue6.default.extend(ganttDiagramT4ZO3ILLValue8.default);
ganttDiagramT4ZO3ILLValue6.default.extend(ganttDiagramT4ZO3ILLValue9.default);
var ganttDiagramT4ZO3ILLValue13 = {
    friday: 5,
    saturday: 6,
  },
  ganttDiagramT4ZO3ILLValue14 = "",
  ganttDiagramT4ZO3ILLValue15 = "",
  ganttDiagramT4ZO3ILLValue16 = undefined,
  ganttDiagramT4ZO3ILLValue17 = "",
  ganttDiagramT4ZO3ILLValue18 = [],
  ganttDiagramT4ZO3ILLValue19 = [],
  ganttDiagramT4ZO3ILLValue20 = new Map(),
  ganttDiagramT4ZO3ILLValue21 = [],
  ganttDiagramT4ZO3ILLValue22 = [],
  ganttDiagramT4ZO3ILLValue23 = "",
  ganttDiagramT4ZO3ILLValue24 = "",
  _e = ["active", "done", "crit", "milestone", "vert"],
  ganttDiagramT4ZO3ILLValue25 = [],
  ganttDiagramT4ZO3ILLValue26 = "",
  ganttDiagramT4ZO3ILLValue27 = false,
  ganttDiagramT4ZO3ILLValue28 = false,
  be = "sunday",
  ganttDiagramT4ZO3ILLValue29 = "saturday",
  ganttDiagramT4ZO3ILLValue30 = 0,
  ganttDiagramT4ZO3ILLValue31 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLValue21 = [];
    ganttDiagramT4ZO3ILLValue22 = [];
    ganttDiagramT4ZO3ILLValue23 = "";
    ganttDiagramT4ZO3ILLValue25 = [];
    ganttDiagramT4ZO3ILLValue63 = 0;
    ganttDiagramT4ZO3ILLValue67 = undefined;
    ganttDiagramT4ZO3ILLValue68 = undefined;
    ganttDiagramT4ZO3ILLValue69 = [];
    ganttDiagramT4ZO3ILLValue14 = "";
    ganttDiagramT4ZO3ILLValue15 = "";
    ganttDiagramT4ZO3ILLValue24 = "";
    ganttDiagramT4ZO3ILLValue16 = undefined;
    ganttDiagramT4ZO3ILLValue17 = "";
    ganttDiagramT4ZO3ILLValue18 = [];
    ganttDiagramT4ZO3ILLValue19 = [];
    ganttDiagramT4ZO3ILLValue27 = false;
    ganttDiagramT4ZO3ILLValue28 = false;
    ganttDiagramT4ZO3ILLValue30 = 0;
    ganttDiagramT4ZO3ILLValue20 = new Map();
    ganttDiagramT4ZO3ILLValue26 = "";
    _chunkICPOFSXXL();
    be = "sunday";
    ganttDiagramT4ZO3ILLValue29 = "saturday";
  }, "clear"),
  ganttDiagramT4ZO3ILLValue32 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam264,
  ) {
    ganttDiagramT4ZO3ILLValue26 = ganttDiagramT4ZO3ILLParam264;
  }, "setDiagramId"),
  ganttDiagramT4ZO3ILLValue33 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam259,
  ) {
    ganttDiagramT4ZO3ILLValue15 = ganttDiagramT4ZO3ILLParam259;
  }, "setAxisFormat"),
  ganttDiagramT4ZO3ILLValue34 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue15;
  }, "getAxisFormat"),
  ganttDiagramT4ZO3ILLValue35 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam260,
  ) {
    ganttDiagramT4ZO3ILLValue16 = ganttDiagramT4ZO3ILLParam260;
  }, "setTickInterval"),
  ganttDiagramT4ZO3ILLValue36 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue16;
  }, "getTickInterval"),
  ganttDiagramT4ZO3ILLValue37 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam261,
  ) {
    ganttDiagramT4ZO3ILLValue17 = ganttDiagramT4ZO3ILLParam261;
  }, "setTodayMarker"),
  ganttDiagramT4ZO3ILLValue38 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue17;
  }, "getTodayMarker"),
  ganttDiagramT4ZO3ILLValue39 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam265,
  ) {
    ganttDiagramT4ZO3ILLValue14 = ganttDiagramT4ZO3ILLParam265;
  }, "setDateFormat"),
  ganttDiagramT4ZO3ILLValue40 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLValue27 = true;
  }, "enableInclusiveEndDates"),
  ganttDiagramT4ZO3ILLValue41 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue27;
  }, "endDatesAreInclusive"),
  ganttDiagramT4ZO3ILLValue42 = chunkAGHRB4JFN(function () {
    ganttDiagramT4ZO3ILLValue28 = true;
  }, "enableTopAxis"),
  ganttDiagramT4ZO3ILLValue43 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue28;
  }, "topAxisEnabled"),
  ganttDiagramT4ZO3ILLValue44 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam262,
  ) {
    ganttDiagramT4ZO3ILLValue24 = ganttDiagramT4ZO3ILLParam262;
  }, "setDisplayMode"),
  ganttDiagramT4ZO3ILLValue45 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue24;
  }, "getDisplayMode"),
  ganttDiagramT4ZO3ILLValue46 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue14;
  }, "getDateFormat"),
  ganttDiagramT4ZO3ILLValue47 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam211,
  ) {
    ganttDiagramT4ZO3ILLValue18 = ganttDiagramT4ZO3ILLParam211
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setIncludes"),
  ganttDiagramT4ZO3ILLValue48 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue18;
  }, "getIncludes"),
  ganttDiagramT4ZO3ILLValue49 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam212,
  ) {
    ganttDiagramT4ZO3ILLValue19 = ganttDiagramT4ZO3ILLParam212
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setExcludes"),
  ganttDiagramT4ZO3ILLValue50 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue19;
  }, "getExcludes"),
  ganttDiagramT4ZO3ILLValue51 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue20;
  }, "getLinks"),
  ganttDiagramT4ZO3ILLValue52 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam255,
  ) {
    ganttDiagramT4ZO3ILLValue23 = ganttDiagramT4ZO3ILLParam255;
    ganttDiagramT4ZO3ILLValue21.push(ganttDiagramT4ZO3ILLParam255);
  }, "addSection"),
  ganttDiagramT4ZO3ILLValue53 = chunkAGHRB4JFN(function () {
    return ganttDiagramT4ZO3ILLValue21;
  }, "getSections"),
  ganttDiagramT4ZO3ILLValue54 = chunkAGHRB4JFN(function () {
    let ganttDiagramT4ZO3ILLValue448 = ganttDiagramT4ZO3ILLValue73(),
      ganttDiagramT4ZO3ILLValue449 = 0;
    for (
      ;
      !ganttDiagramT4ZO3ILLValue448 && ganttDiagramT4ZO3ILLValue449 < 10;

    ) {
      ganttDiagramT4ZO3ILLValue448 = ganttDiagramT4ZO3ILLValue73();
      ganttDiagramT4ZO3ILLValue449++;
    }
    return (
      (ganttDiagramT4ZO3ILLValue22 = ganttDiagramT4ZO3ILLValue69),
      ganttDiagramT4ZO3ILLValue22
    );
  }, "getTasks"),
  ganttDiagramT4ZO3ILLValue55 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam110,
    ganttDiagramT4ZO3ILLParam111,
    ganttDiagramT4ZO3ILLParam112,
    ganttDiagramT4ZO3ILLParam113,
  ) {
    let ganttDiagramT4ZO3ILLValue360 = ganttDiagramT4ZO3ILLParam110.format(
        ganttDiagramT4ZO3ILLParam111.trim(),
      ),
      ganttDiagramT4ZO3ILLValue361 =
        ganttDiagramT4ZO3ILLParam110.format("YYYY-MM-DD");
    return ganttDiagramT4ZO3ILLParam113.includes(
      ganttDiagramT4ZO3ILLValue360,
    ) || ganttDiagramT4ZO3ILLParam113.includes(ganttDiagramT4ZO3ILLValue361)
      ? false
      : (ganttDiagramT4ZO3ILLParam112.includes("weekends") &&
            (ganttDiagramT4ZO3ILLParam110.isoWeekday() ===
              ganttDiagramT4ZO3ILLValue13[ganttDiagramT4ZO3ILLValue29] ||
              ganttDiagramT4ZO3ILLParam110.isoWeekday() ===
                ganttDiagramT4ZO3ILLValue13[ganttDiagramT4ZO3ILLValue29] +
                  1)) ||
          ganttDiagramT4ZO3ILLParam112.includes(
            ganttDiagramT4ZO3ILLParam110.format("dddd").toLowerCase(),
          )
        ? true
        : ganttDiagramT4ZO3ILLParam112.includes(ganttDiagramT4ZO3ILLValue360) ||
          ganttDiagramT4ZO3ILLParam112.includes(ganttDiagramT4ZO3ILLValue361);
  }, "isInvalidDate"),
  ganttDiagramT4ZO3ILLValue56 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam263,
  ) {
    be = ganttDiagramT4ZO3ILLParam263;
  }, "setWeekday"),
  ganttDiagramT4ZO3ILLValue57 = chunkAGHRB4JFN(function () {
    return be;
  }, "getWeekday"),
  ganttDiagramT4ZO3ILLValue58 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam266,
  ) {
    ganttDiagramT4ZO3ILLValue29 = ganttDiagramT4ZO3ILLParam266;
  }, "setWeekend"),
  ganttDiagramT4ZO3ILLValue59 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam92,
    ganttDiagramT4ZO3ILLParam93,
    ganttDiagramT4ZO3ILLParam94,
    ganttDiagramT4ZO3ILLParam95,
  ) {
    if (
      !ganttDiagramT4ZO3ILLParam94.length ||
      ganttDiagramT4ZO3ILLParam92.manualEndTime
    )
      return;
    let ganttDiagramT4ZO3ILLValue332;
    ganttDiagramT4ZO3ILLValue332 =
      ganttDiagramT4ZO3ILLParam92.startTime instanceof Date
        ? ganttDiagramT4ZO3ILLValue6.default(
            ganttDiagramT4ZO3ILLParam92.startTime,
          )
        : ganttDiagramT4ZO3ILLValue6.default(
            ganttDiagramT4ZO3ILLParam92.startTime,
            ganttDiagramT4ZO3ILLParam93,
            true,
          );
    ganttDiagramT4ZO3ILLValue332 = ganttDiagramT4ZO3ILLValue332.add(1, "d");
    let ganttDiagramT4ZO3ILLValue333;
    ganttDiagramT4ZO3ILLValue333 =
      ganttDiagramT4ZO3ILLParam92.endTime instanceof Date
        ? ganttDiagramT4ZO3ILLValue6.default(
            ganttDiagramT4ZO3ILLParam92.endTime,
          )
        : ganttDiagramT4ZO3ILLValue6.default(
            ganttDiagramT4ZO3ILLParam92.endTime,
            ganttDiagramT4ZO3ILLParam93,
            true,
          );
    let [ganttDiagramT4ZO3ILLValue334, ganttDiagramT4ZO3ILLValue335] =
      ganttDiagramT4ZO3ILLValue60(
        ganttDiagramT4ZO3ILLValue332,
        ganttDiagramT4ZO3ILLValue333,
        ganttDiagramT4ZO3ILLParam93,
        ganttDiagramT4ZO3ILLParam94,
        ganttDiagramT4ZO3ILLParam95,
      );
    ganttDiagramT4ZO3ILLParam92.endTime = ganttDiagramT4ZO3ILLValue334.toDate();
    ganttDiagramT4ZO3ILLParam92.renderEndTime = ganttDiagramT4ZO3ILLValue335;
  }, "checkTaskDates"),
  ganttDiagramT4ZO3ILLValue60 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam156,
    ganttDiagramT4ZO3ILLParam157,
    ganttDiagramT4ZO3ILLParam158,
    ganttDiagramT4ZO3ILLParam159,
    ganttDiagramT4ZO3ILLParam160,
  ) {
    let ganttDiagramT4ZO3ILLValue409 = false,
      ganttDiagramT4ZO3ILLValue410 = null;
    for (; ganttDiagramT4ZO3ILLParam156 <= ganttDiagramT4ZO3ILLParam157; ) {
      ganttDiagramT4ZO3ILLValue409 ||
        (ganttDiagramT4ZO3ILLValue410 = ganttDiagramT4ZO3ILLParam157.toDate());
      ganttDiagramT4ZO3ILLValue409 = ganttDiagramT4ZO3ILLValue55(
        ganttDiagramT4ZO3ILLParam156,
        ganttDiagramT4ZO3ILLParam158,
        ganttDiagramT4ZO3ILLParam159,
        ganttDiagramT4ZO3ILLParam160,
      );
      ganttDiagramT4ZO3ILLValue409 &&
        (ganttDiagramT4ZO3ILLParam157 = ganttDiagramT4ZO3ILLParam157.add(
          1,
          "d",
        ));
      ganttDiagramT4ZO3ILLParam156 = ganttDiagramT4ZO3ILLParam156.add(1, "d");
    }
    return [ganttDiagramT4ZO3ILLParam157, ganttDiagramT4ZO3ILLValue410];
  }, "fixTaskDates"),
  ganttDiagramT4ZO3ILLValue61 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam61,
    ganttDiagramT4ZO3ILLParam62,
    ganttDiagramT4ZO3ILLParam63,
  ) {
    if (
      ((ganttDiagramT4ZO3ILLParam63 = ganttDiagramT4ZO3ILLParam63.trim()),
      chunkAGHRB4JFN((ganttDiagramT4ZO3ILLParam219) => {
        let ganttDiagramT4ZO3ILLValue462 = ganttDiagramT4ZO3ILLParam219.trim();
        return (
          ganttDiagramT4ZO3ILLValue462 === "x" ||
          ganttDiagramT4ZO3ILLValue462 === "X"
        );
      }, "isTimestampFormat")(ganttDiagramT4ZO3ILLParam62) &&
        /^\d+$/.test(ganttDiagramT4ZO3ILLParam63))
    )
      return new Date(Number(ganttDiagramT4ZO3ILLParam63));
    let ganttDiagramT4ZO3ILLValue243 = /^after\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramT4ZO3ILLParam63,
    );
    if (ganttDiagramT4ZO3ILLValue243 !== null) {
      let ganttDiagramT4ZO3ILLValue388 = null;
      for (let ganttDiagramT4ZO3ILLValue430 of ganttDiagramT4ZO3ILLValue243.groups.ids.split(
        " ",
      )) {
        let ganttDiagramT4ZO3ILLValue453 = ganttDiagramT4ZO3ILLValue71(
          ganttDiagramT4ZO3ILLValue430,
        );
        ganttDiagramT4ZO3ILLValue453 !== undefined &&
          (!ganttDiagramT4ZO3ILLValue388 ||
            ganttDiagramT4ZO3ILLValue453.endTime >
              ganttDiagramT4ZO3ILLValue388.endTime) &&
          (ganttDiagramT4ZO3ILLValue388 = ganttDiagramT4ZO3ILLValue453);
      }
      if (ganttDiagramT4ZO3ILLValue388)
        return ganttDiagramT4ZO3ILLValue388.endTime;
      let ganttDiagramT4ZO3ILLValue389 = new Date();
      return (
        ganttDiagramT4ZO3ILLValue389.setHours(0, 0, 0, 0),
        ganttDiagramT4ZO3ILLValue389
      );
    }
    let ganttDiagramT4ZO3ILLValue244 = ganttDiagramT4ZO3ILLValue6.default(
      ganttDiagramT4ZO3ILLParam63,
      ganttDiagramT4ZO3ILLParam62.trim(),
      true,
    );
    if (ganttDiagramT4ZO3ILLValue244.isValid())
      return ganttDiagramT4ZO3ILLValue244.toDate();
    {
      chunkAGHRB4JFR.debug("Invalid date:" + ganttDiagramT4ZO3ILLParam63);
      chunkAGHRB4JFR.debug(
        "With date format:" + ganttDiagramT4ZO3ILLParam62.trim(),
      );
      let ganttDiagramT4ZO3ILLValue381 = new Date(ganttDiagramT4ZO3ILLParam63);
      if (
        ganttDiagramT4ZO3ILLValue381 === undefined ||
        isNaN(ganttDiagramT4ZO3ILLValue381.getTime()) ||
        ganttDiagramT4ZO3ILLValue381.getFullYear() < -10000 ||
        ganttDiagramT4ZO3ILLValue381.getFullYear() > 1e4
      )
        throw Error("Invalid date:" + ganttDiagramT4ZO3ILLParam63);
      return ganttDiagramT4ZO3ILLValue381;
    }
  }, "getStartDate"),
  $e = chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam162) {
    let ganttDiagramT4ZO3ILLValue412 = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(
      ganttDiagramT4ZO3ILLParam162.trim(),
    );
    return ganttDiagramT4ZO3ILLValue412 === null
      ? [NaN, "ms"]
      : [
          Number.parseFloat(ganttDiagramT4ZO3ILLValue412[1]),
          ganttDiagramT4ZO3ILLValue412[2],
        ];
  }, "parseDuration"),
  ganttDiagramT4ZO3ILLValue62 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam75,
    ganttDiagramT4ZO3ILLParam76,
    ganttDiagramT4ZO3ILLParam77,
    ganttDiagramT4ZO3ILLParam78 = false,
  ) {
    ganttDiagramT4ZO3ILLParam77 = ganttDiagramT4ZO3ILLParam77.trim();
    let ganttDiagramT4ZO3ILLValue303 = /^until\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramT4ZO3ILLParam77,
    );
    if (ganttDiagramT4ZO3ILLValue303 !== null) {
      let ganttDiagramT4ZO3ILLValue386 = null;
      for (let ganttDiagramT4ZO3ILLValue426 of ganttDiagramT4ZO3ILLValue303.groups.ids.split(
        " ",
      )) {
        let ganttDiagramT4ZO3ILLValue451 = ganttDiagramT4ZO3ILLValue71(
          ganttDiagramT4ZO3ILLValue426,
        );
        ganttDiagramT4ZO3ILLValue451 !== undefined &&
          (!ganttDiagramT4ZO3ILLValue386 ||
            ganttDiagramT4ZO3ILLValue451.startTime <
              ganttDiagramT4ZO3ILLValue386.startTime) &&
          (ganttDiagramT4ZO3ILLValue386 = ganttDiagramT4ZO3ILLValue451);
      }
      if (ganttDiagramT4ZO3ILLValue386)
        return ganttDiagramT4ZO3ILLValue386.startTime;
      let ganttDiagramT4ZO3ILLValue387 = new Date();
      return (
        ganttDiagramT4ZO3ILLValue387.setHours(0, 0, 0, 0),
        ganttDiagramT4ZO3ILLValue387
      );
    }
    let ganttDiagramT4ZO3ILLValue304 = ganttDiagramT4ZO3ILLValue6.default(
      ganttDiagramT4ZO3ILLParam77,
      ganttDiagramT4ZO3ILLParam76.trim(),
      true,
    );
    if (ganttDiagramT4ZO3ILLValue304.isValid())
      return (
        ganttDiagramT4ZO3ILLParam78 &&
          (ganttDiagramT4ZO3ILLValue304 = ganttDiagramT4ZO3ILLValue304.add(
            1,
            "d",
          )),
        ganttDiagramT4ZO3ILLValue304.toDate()
      );
    let ganttDiagramT4ZO3ILLValue305 = ganttDiagramT4ZO3ILLValue6.default(
        ganttDiagramT4ZO3ILLParam75,
      ),
      [ganttDiagramT4ZO3ILLValue306, ganttDiagramT4ZO3ILLValue307] = $e(
        ganttDiagramT4ZO3ILLParam77,
      );
    if (!Number.isNaN(ganttDiagramT4ZO3ILLValue306)) {
      let ganttDiagramT4ZO3ILLValue463 = ganttDiagramT4ZO3ILLValue305.add(
        ganttDiagramT4ZO3ILLValue306,
        ganttDiagramT4ZO3ILLValue307,
      );
      ganttDiagramT4ZO3ILLValue463.isValid() &&
        (ganttDiagramT4ZO3ILLValue305 = ganttDiagramT4ZO3ILLValue463);
    }
    return ganttDiagramT4ZO3ILLValue305.toDate();
  }, "getEndDate"),
  ganttDiagramT4ZO3ILLValue63 = 0,
  ganttDiagramT4ZO3ILLValue64 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam206,
  ) {
    return ganttDiagramT4ZO3ILLParam206 === undefined
      ? ((ganttDiagramT4ZO3ILLValue63 += 1),
        "task" + ganttDiagramT4ZO3ILLValue63)
      : ganttDiagramT4ZO3ILLParam206;
  }, "parseId"),
  ganttDiagramT4ZO3ILLValue65 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam73,
    ganttDiagramT4ZO3ILLParam74,
  ) {
    let ganttDiagramT4ZO3ILLValue299;
    ganttDiagramT4ZO3ILLValue299 =
      ganttDiagramT4ZO3ILLParam74.substr(0, 1) === ":"
        ? ganttDiagramT4ZO3ILLParam74.substr(
            1,
            ganttDiagramT4ZO3ILLParam74.length,
          )
        : ganttDiagramT4ZO3ILLParam74;
    let ganttDiagramT4ZO3ILLValue300 = ganttDiagramT4ZO3ILLValue299.split(","),
      ganttDiagramT4ZO3ILLValue301 = {};
    ganttDiagramT4ZO3ILLHelper1(
      ganttDiagramT4ZO3ILLValue300,
      ganttDiagramT4ZO3ILLValue301,
      _e,
    );
    for (
      let ganttDiagramT4ZO3ILLValue460 = 0;
      ganttDiagramT4ZO3ILLValue460 < ganttDiagramT4ZO3ILLValue300.length;
      ganttDiagramT4ZO3ILLValue460++
    )
      ganttDiagramT4ZO3ILLValue300[ganttDiagramT4ZO3ILLValue460] =
        ganttDiagramT4ZO3ILLValue300[ganttDiagramT4ZO3ILLValue460].trim();
    let ganttDiagramT4ZO3ILLValue302 = "";
    switch (ganttDiagramT4ZO3ILLValue300.length) {
      case 1:
        ganttDiagramT4ZO3ILLValue301.id = ganttDiagramT4ZO3ILLValue64();
        ganttDiagramT4ZO3ILLValue301.startTime =
          ganttDiagramT4ZO3ILLParam73.endTime;
        ganttDiagramT4ZO3ILLValue302 = ganttDiagramT4ZO3ILLValue300[0];
        break;
      case 2:
        ganttDiagramT4ZO3ILLValue301.id = ganttDiagramT4ZO3ILLValue64();
        ganttDiagramT4ZO3ILLValue301.startTime = ganttDiagramT4ZO3ILLValue61(
          undefined,
          ganttDiagramT4ZO3ILLValue14,
          ganttDiagramT4ZO3ILLValue300[0],
        );
        ganttDiagramT4ZO3ILLValue302 = ganttDiagramT4ZO3ILLValue300[1];
        break;
      case 3:
        ganttDiagramT4ZO3ILLValue301.id = ganttDiagramT4ZO3ILLValue64(
          ganttDiagramT4ZO3ILLValue300[0],
        );
        ganttDiagramT4ZO3ILLValue301.startTime = ganttDiagramT4ZO3ILLValue61(
          undefined,
          ganttDiagramT4ZO3ILLValue14,
          ganttDiagramT4ZO3ILLValue300[1],
        );
        ganttDiagramT4ZO3ILLValue302 = ganttDiagramT4ZO3ILLValue300[2];
        break;
      default:
    }
    return (
      ganttDiagramT4ZO3ILLValue302 &&
        ((ganttDiagramT4ZO3ILLValue301.endTime = ganttDiagramT4ZO3ILLValue62(
          ganttDiagramT4ZO3ILLValue301.startTime,
          ganttDiagramT4ZO3ILLValue14,
          ganttDiagramT4ZO3ILLValue302,
          ganttDiagramT4ZO3ILLValue27,
        )),
        (ganttDiagramT4ZO3ILLValue301.manualEndTime = ganttDiagramT4ZO3ILLValue6
          .default(ganttDiagramT4ZO3ILLValue302, "YYYY-MM-DD", true)
          .isValid()),
        ganttDiagramT4ZO3ILLValue59(
          ganttDiagramT4ZO3ILLValue301,
          ganttDiagramT4ZO3ILLValue14,
          ganttDiagramT4ZO3ILLValue19,
          ganttDiagramT4ZO3ILLValue18,
        )),
      ganttDiagramT4ZO3ILLValue301
    );
  }, "compileData"),
  ganttDiagramT4ZO3ILLValue66 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam79,
    ganttDiagramT4ZO3ILLParam80,
  ) {
    let ganttDiagramT4ZO3ILLValue308;
    ganttDiagramT4ZO3ILLValue308 =
      ganttDiagramT4ZO3ILLParam80.substr(0, 1) === ":"
        ? ganttDiagramT4ZO3ILLParam80.substr(
            1,
            ganttDiagramT4ZO3ILLParam80.length,
          )
        : ganttDiagramT4ZO3ILLParam80;
    let ganttDiagramT4ZO3ILLValue309 = ganttDiagramT4ZO3ILLValue308.split(","),
      ganttDiagramT4ZO3ILLValue310 = {};
    ganttDiagramT4ZO3ILLHelper1(
      ganttDiagramT4ZO3ILLValue309,
      ganttDiagramT4ZO3ILLValue310,
      _e,
    );
    for (
      let ganttDiagramT4ZO3ILLValue461 = 0;
      ganttDiagramT4ZO3ILLValue461 < ganttDiagramT4ZO3ILLValue309.length;
      ganttDiagramT4ZO3ILLValue461++
    )
      ganttDiagramT4ZO3ILLValue309[ganttDiagramT4ZO3ILLValue461] =
        ganttDiagramT4ZO3ILLValue309[ganttDiagramT4ZO3ILLValue461].trim();
    switch (ganttDiagramT4ZO3ILLValue309.length) {
      case 1:
        ganttDiagramT4ZO3ILLValue310.id = ganttDiagramT4ZO3ILLValue64();
        ganttDiagramT4ZO3ILLValue310.startTime = {
          type: "prevTaskEnd",
          id: ganttDiagramT4ZO3ILLParam79,
        };
        ganttDiagramT4ZO3ILLValue310.endTime = {
          data: ganttDiagramT4ZO3ILLValue309[0],
        };
        break;
      case 2:
        ganttDiagramT4ZO3ILLValue310.id = ganttDiagramT4ZO3ILLValue64();
        ganttDiagramT4ZO3ILLValue310.startTime = {
          type: "getStartDate",
          startData: ganttDiagramT4ZO3ILLValue309[0],
        };
        ganttDiagramT4ZO3ILLValue310.endTime = {
          data: ganttDiagramT4ZO3ILLValue309[1],
        };
        break;
      case 3:
        ganttDiagramT4ZO3ILLValue310.id = ganttDiagramT4ZO3ILLValue64(
          ganttDiagramT4ZO3ILLValue309[0],
        );
        ganttDiagramT4ZO3ILLValue310.startTime = {
          type: "getStartDate",
          startData: ganttDiagramT4ZO3ILLValue309[1],
        };
        ganttDiagramT4ZO3ILLValue310.endTime = {
          data: ganttDiagramT4ZO3ILLValue309[2],
        };
        break;
      default:
    }
    return ganttDiagramT4ZO3ILLValue310;
  }, "parseData"),
  ganttDiagramT4ZO3ILLValue67,
  ganttDiagramT4ZO3ILLValue68,
  ganttDiagramT4ZO3ILLValue69 = [],
  at = {},
  ganttDiagramT4ZO3ILLValue70 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam85,
    ganttDiagramT4ZO3ILLParam86,
  ) {
    let ganttDiagramT4ZO3ILLValue328 = {
        section: ganttDiagramT4ZO3ILLValue23,
        type: ganttDiagramT4ZO3ILLValue23,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
          data: ganttDiagramT4ZO3ILLParam86,
        },
        task: ganttDiagramT4ZO3ILLParam85,
        classes: [],
      },
      ganttDiagramT4ZO3ILLValue329 = ganttDiagramT4ZO3ILLValue66(
        ganttDiagramT4ZO3ILLValue68,
        ganttDiagramT4ZO3ILLParam86,
      );
    ganttDiagramT4ZO3ILLValue328.raw.startTime =
      ganttDiagramT4ZO3ILLValue329.startTime;
    ganttDiagramT4ZO3ILLValue328.raw.endTime =
      ganttDiagramT4ZO3ILLValue329.endTime;
    ganttDiagramT4ZO3ILLValue328.id = ganttDiagramT4ZO3ILLValue329.id;
    ganttDiagramT4ZO3ILLValue328.prevTaskId = ganttDiagramT4ZO3ILLValue68;
    ganttDiagramT4ZO3ILLValue328.active = ganttDiagramT4ZO3ILLValue329.active;
    ganttDiagramT4ZO3ILLValue328.done = ganttDiagramT4ZO3ILLValue329.done;
    ganttDiagramT4ZO3ILLValue328.crit = ganttDiagramT4ZO3ILLValue329.crit;
    ganttDiagramT4ZO3ILLValue328.milestone =
      ganttDiagramT4ZO3ILLValue329.milestone;
    ganttDiagramT4ZO3ILLValue328.vert = ganttDiagramT4ZO3ILLValue329.vert;
    ganttDiagramT4ZO3ILLValue328.order = ganttDiagramT4ZO3ILLValue30;
    ganttDiagramT4ZO3ILLValue30++;
    let ganttDiagramT4ZO3ILLValue330 = ganttDiagramT4ZO3ILLValue69.push(
      ganttDiagramT4ZO3ILLValue328,
    );
    ganttDiagramT4ZO3ILLValue68 = ganttDiagramT4ZO3ILLValue328.id;
    at[ganttDiagramT4ZO3ILLValue328.id] = ganttDiagramT4ZO3ILLValue330 - 1;
  }, "addTask"),
  ganttDiagramT4ZO3ILLValue71 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam238,
  ) {
    let ganttDiagramT4ZO3ILLValue464 = at[ganttDiagramT4ZO3ILLParam238];
    return ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLValue464];
  }, "findTaskById"),
  ganttDiagramT4ZO3ILLValue72 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam116,
    ganttDiagramT4ZO3ILLParam117,
  ) {
    let ganttDiagramT4ZO3ILLValue371 = {
        section: ganttDiagramT4ZO3ILLValue23,
        type: ganttDiagramT4ZO3ILLValue23,
        description: ganttDiagramT4ZO3ILLParam116,
        task: ganttDiagramT4ZO3ILLParam116,
        classes: [],
      },
      ganttDiagramT4ZO3ILLValue372 = ganttDiagramT4ZO3ILLValue65(
        ganttDiagramT4ZO3ILLValue67,
        ganttDiagramT4ZO3ILLParam117,
      );
    ganttDiagramT4ZO3ILLValue371.startTime =
      ganttDiagramT4ZO3ILLValue372.startTime;
    ganttDiagramT4ZO3ILLValue371.endTime = ganttDiagramT4ZO3ILLValue372.endTime;
    ganttDiagramT4ZO3ILLValue371.id = ganttDiagramT4ZO3ILLValue372.id;
    ganttDiagramT4ZO3ILLValue371.active = ganttDiagramT4ZO3ILLValue372.active;
    ganttDiagramT4ZO3ILLValue371.done = ganttDiagramT4ZO3ILLValue372.done;
    ganttDiagramT4ZO3ILLValue371.crit = ganttDiagramT4ZO3ILLValue372.crit;
    ganttDiagramT4ZO3ILLValue371.milestone =
      ganttDiagramT4ZO3ILLValue372.milestone;
    ganttDiagramT4ZO3ILLValue371.vert = ganttDiagramT4ZO3ILLValue372.vert;
    ganttDiagramT4ZO3ILLValue67 = ganttDiagramT4ZO3ILLValue371;
    ganttDiagramT4ZO3ILLValue22.push(ganttDiagramT4ZO3ILLValue371);
  }, "addTaskOrg"),
  ganttDiagramT4ZO3ILLValue73 = chunkAGHRB4JFN(function () {
    let ganttDiagramT4ZO3ILLValue266 = chunkAGHRB4JFN(function (
        ganttDiagramT4ZO3ILLParam82,
      ) {
        let ganttDiagramT4ZO3ILLValue313 =
            ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82],
          ganttDiagramT4ZO3ILLValue314 = "";
        switch (
          ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].raw.startTime
            .type
        ) {
          case "prevTaskEnd":
            ganttDiagramT4ZO3ILLValue313.startTime =
              ganttDiagramT4ZO3ILLValue71(
                ganttDiagramT4ZO3ILLValue313.prevTaskId,
              ).endTime;
            break;
          case "getStartDate":
            ganttDiagramT4ZO3ILLValue314 = ganttDiagramT4ZO3ILLValue61(
              undefined,
              ganttDiagramT4ZO3ILLValue14,
              ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].raw
                .startTime.startData,
            );
            ganttDiagramT4ZO3ILLValue314 &&
              (ganttDiagramT4ZO3ILLValue69[
                ganttDiagramT4ZO3ILLParam82
              ].startTime = ganttDiagramT4ZO3ILLValue314);
            break;
        }
        return (
          ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].startTime &&
            ((ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].endTime =
              ganttDiagramT4ZO3ILLValue62(
                ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82]
                  .startTime,
                ganttDiagramT4ZO3ILLValue14,
                ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].raw
                  .endTime.data,
                ganttDiagramT4ZO3ILLValue27,
              )),
            ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].endTime &&
              ((ganttDiagramT4ZO3ILLValue69[
                ganttDiagramT4ZO3ILLParam82
              ].processed = true),
              (ganttDiagramT4ZO3ILLValue69[
                ganttDiagramT4ZO3ILLParam82
              ].manualEndTime = ganttDiagramT4ZO3ILLValue6
                .default(
                  ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].raw
                    .endTime.data,
                  "YYYY-MM-DD",
                  true,
                )
                .isValid()),
              ganttDiagramT4ZO3ILLValue59(
                ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82],
                ganttDiagramT4ZO3ILLValue14,
                ganttDiagramT4ZO3ILLValue19,
                ganttDiagramT4ZO3ILLValue18,
              ))),
          ganttDiagramT4ZO3ILLValue69[ganttDiagramT4ZO3ILLParam82].processed
        );
      }, "compileTask"),
      ganttDiagramT4ZO3ILLValue267 = true;
    for (let [
      ganttDiagramT4ZO3ILLValue457,
      ganttDiagramT4ZO3ILLValue458,
    ] of ganttDiagramT4ZO3ILLValue69.entries()) {
      ganttDiagramT4ZO3ILLValue266(ganttDiagramT4ZO3ILLValue457);
      ganttDiagramT4ZO3ILLValue267 &&= ganttDiagramT4ZO3ILLValue458.processed;
    }
    return ganttDiagramT4ZO3ILLValue267;
  }, "compileTasks"),
  ganttDiagramT4ZO3ILLValue74 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam122,
    ganttDiagramT4ZO3ILLParam123,
  ) {
    let ganttDiagramT4ZO3ILLValue383 = ganttDiagramT4ZO3ILLParam123;
    _chunkICPOFSXXB().securityLevel !== "loose" &&
      (ganttDiagramT4ZO3ILLValue383 = ganttDiagramT4ZO3ILLValue5.sanitizeUrl(
        ganttDiagramT4ZO3ILLParam123,
      ));
    ganttDiagramT4ZO3ILLParam122.split(",").forEach(function (item) {
      ganttDiagramT4ZO3ILLValue71(item) !== undefined &&
        (ganttDiagramT4ZO3ILLValue77(item, () => {
          window.open(ganttDiagramT4ZO3ILLValue383, "_self");
        }),
        ganttDiagramT4ZO3ILLValue20.set(item, ganttDiagramT4ZO3ILLValue383));
    });
    ganttDiagramT4ZO3ILLValue75(ganttDiagramT4ZO3ILLParam122, "clickable");
  }, "setLink"),
  ganttDiagramT4ZO3ILLValue75 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam178,
    ganttDiagramT4ZO3ILLParam179,
  ) {
    ganttDiagramT4ZO3ILLParam178.split(",").forEach(function (item) {
      let ganttDiagramT4ZO3ILLValue455 = ganttDiagramT4ZO3ILLValue71(item);
      ganttDiagramT4ZO3ILLValue455 !== undefined &&
        ganttDiagramT4ZO3ILLValue455.classes.push(ganttDiagramT4ZO3ILLParam179);
    });
  }, "setClass"),
  ganttDiagramT4ZO3ILLValue76 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam89,
    ganttDiagramT4ZO3ILLParam90,
    ganttDiagramT4ZO3ILLParam91,
  ) {
    if (
      _chunkICPOFSXXB().securityLevel !== "loose" ||
      ganttDiagramT4ZO3ILLParam90 === undefined
    )
      return;
    let ganttDiagramT4ZO3ILLValue331 = [];
    if (typeof ganttDiagramT4ZO3ILLParam91 == "string") {
      ganttDiagramT4ZO3ILLValue331 = ganttDiagramT4ZO3ILLParam91.split(
        /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
      );
      for (
        let ganttDiagramT4ZO3ILLValue417 = 0;
        ganttDiagramT4ZO3ILLValue417 < ganttDiagramT4ZO3ILLValue331.length;
        ganttDiagramT4ZO3ILLValue417++
      ) {
        let ganttDiagramT4ZO3ILLValue434 =
          ganttDiagramT4ZO3ILLValue331[ganttDiagramT4ZO3ILLValue417].trim();
        ganttDiagramT4ZO3ILLValue434.startsWith('"') &&
          ganttDiagramT4ZO3ILLValue434.endsWith('"') &&
          (ganttDiagramT4ZO3ILLValue434 = ganttDiagramT4ZO3ILLValue434.substr(
            1,
            ganttDiagramT4ZO3ILLValue434.length - 2,
          ));
        ganttDiagramT4ZO3ILLValue331[ganttDiagramT4ZO3ILLValue417] =
          ganttDiagramT4ZO3ILLValue434;
      }
    }
    ganttDiagramT4ZO3ILLValue331.length === 0 &&
      ganttDiagramT4ZO3ILLValue331.push(ganttDiagramT4ZO3ILLParam89);
    ganttDiagramT4ZO3ILLValue71(ganttDiagramT4ZO3ILLParam89) !== undefined &&
      ganttDiagramT4ZO3ILLValue77(ganttDiagramT4ZO3ILLParam89, () => {
        chunk5PVQY5BWC.runFunc(
          ganttDiagramT4ZO3ILLParam90,
          ...ganttDiagramT4ZO3ILLValue331,
        );
      });
  }, "setClickFun"),
  ganttDiagramT4ZO3ILLValue77 = chunkAGHRB4JFN(function (
    ganttDiagramT4ZO3ILLParam105,
    ganttDiagramT4ZO3ILLParam106,
  ) {
    ganttDiagramT4ZO3ILLValue25.push(
      function () {
        let ganttDiagramT4ZO3ILLValue407 = ganttDiagramT4ZO3ILLValue26
            ? `${ganttDiagramT4ZO3ILLValue26}-${ganttDiagramT4ZO3ILLParam105}`
            : ganttDiagramT4ZO3ILLParam105,
          ganttDiagramT4ZO3ILLValue408 = document.querySelector(
            `[id="${ganttDiagramT4ZO3ILLValue407}"]`,
          );
        ganttDiagramT4ZO3ILLValue408 !== null &&
          ganttDiagramT4ZO3ILLValue408.addEventListener("click", function () {
            ganttDiagramT4ZO3ILLParam106();
          });
      },
      function () {
        let ganttDiagramT4ZO3ILLValue403 = ganttDiagramT4ZO3ILLValue26
            ? `${ganttDiagramT4ZO3ILLValue26}-${ganttDiagramT4ZO3ILLParam105}`
            : ganttDiagramT4ZO3ILLParam105,
          ganttDiagramT4ZO3ILLValue404 = document.querySelector(
            `[id="${ganttDiagramT4ZO3ILLValue403}-text"]`,
          );
        ganttDiagramT4ZO3ILLValue404 !== null &&
          ganttDiagramT4ZO3ILLValue404.addEventListener("click", function () {
            ganttDiagramT4ZO3ILLParam106();
          });
      },
    );
  }, "pushFun"),
  ganttDiagramT4ZO3ILLValue78 = {
    getConfig: chunkAGHRB4JFN(() => _chunkICPOFSXXB().gantt, "getConfig"),
    clear: ganttDiagramT4ZO3ILLValue31,
    setDateFormat: ganttDiagramT4ZO3ILLValue39,
    getDateFormat: ganttDiagramT4ZO3ILLValue46,
    enableInclusiveEndDates: ganttDiagramT4ZO3ILLValue40,
    endDatesAreInclusive: ganttDiagramT4ZO3ILLValue41,
    enableTopAxis: ganttDiagramT4ZO3ILLValue42,
    topAxisEnabled: ganttDiagramT4ZO3ILLValue43,
    setAxisFormat: ganttDiagramT4ZO3ILLValue33,
    getAxisFormat: ganttDiagramT4ZO3ILLValue34,
    setTickInterval: ganttDiagramT4ZO3ILLValue35,
    getTickInterval: ganttDiagramT4ZO3ILLValue36,
    setTodayMarker: ganttDiagramT4ZO3ILLValue37,
    getTodayMarker: ganttDiagramT4ZO3ILLValue38,
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: _chunkICPOFSXXD,
    getDiagramTitle: chunkICPOFSXXF,
    setDiagramId: ganttDiagramT4ZO3ILLValue32,
    setDisplayMode: ganttDiagramT4ZO3ILLValue44,
    getDisplayMode: ganttDiagramT4ZO3ILLValue45,
    setAccDescription: _chunkICPOFSXXN,
    getAccDescription: _chunkICPOFSXXK,
    addSection: ganttDiagramT4ZO3ILLValue52,
    getSections: ganttDiagramT4ZO3ILLValue53,
    getTasks: ganttDiagramT4ZO3ILLValue54,
    addTask: ganttDiagramT4ZO3ILLValue70,
    findTaskById: ganttDiagramT4ZO3ILLValue71,
    addTaskOrg: ganttDiagramT4ZO3ILLValue72,
    setIncludes: ganttDiagramT4ZO3ILLValue47,
    getIncludes: ganttDiagramT4ZO3ILLValue48,
    setExcludes: ganttDiagramT4ZO3ILLValue49,
    getExcludes: ganttDiagramT4ZO3ILLValue50,
    setClickEvent: chunkAGHRB4JFN(function (
      ganttDiagramT4ZO3ILLParam188,
      ganttDiagramT4ZO3ILLParam189,
      ganttDiagramT4ZO3ILLParam190,
    ) {
      ganttDiagramT4ZO3ILLParam188.split(",").forEach(function (item) {
        ganttDiagramT4ZO3ILLValue76(
          item,
          ganttDiagramT4ZO3ILLParam189,
          ganttDiagramT4ZO3ILLParam190,
        );
      });
      ganttDiagramT4ZO3ILLValue75(ganttDiagramT4ZO3ILLParam188, "clickable");
    }, "setClickEvent"),
    setLink: ganttDiagramT4ZO3ILLValue74,
    getLinks: ganttDiagramT4ZO3ILLValue51,
    bindFunctions: chunkAGHRB4JFN(function (ganttDiagramT4ZO3ILLParam220) {
      ganttDiagramT4ZO3ILLValue25.forEach(function (item) {
        item(ganttDiagramT4ZO3ILLParam220);
      });
    }, "bindFunctions"),
    parseDuration: $e,
    isInvalidDate: ganttDiagramT4ZO3ILLValue55,
    setWeekday: ganttDiagramT4ZO3ILLValue56,
    getWeekday: ganttDiagramT4ZO3ILLValue57,
    setWeekend: ganttDiagramT4ZO3ILLValue58,
  };
function ganttDiagramT4ZO3ILLHelper1(
  ganttDiagramT4ZO3ILLParam140,
  ganttDiagramT4ZO3ILLParam141,
  ganttDiagramT4ZO3ILLParam142,
) {
  let ganttDiagramT4ZO3ILLValue393 = true;
  for (; ganttDiagramT4ZO3ILLValue393; ) {
    ganttDiagramT4ZO3ILLValue393 = false;
    ganttDiagramT4ZO3ILLParam142.forEach(function (item) {
      let ganttDiagramT4ZO3ILLValue431 = "^\\s*" + item + "\\s*$",
        ganttDiagramT4ZO3ILLValue432 = new RegExp(ganttDiagramT4ZO3ILLValue431);
      ganttDiagramT4ZO3ILLParam140[0].match(ganttDiagramT4ZO3ILLValue432) &&
        ((ganttDiagramT4ZO3ILLParam141[item] = true),
        ganttDiagramT4ZO3ILLParam140.shift(1),
        (ganttDiagramT4ZO3ILLValue393 = true));
    });
  }
}
chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper1, "getTaskTags");
ganttDiagramT4ZO3ILLValue6.default.extend(ganttDiagramT4ZO3ILLValue10.default);
var ganttDiagramT4ZO3ILLValue79 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFR.debug("Something is calling, setConf, remove the call");
  }, "setConf"),
  ganttDiagramT4ZO3ILLValue80 = {
    monday: axisS,
    tuesday: axisD,
    wednesday: axisF,
    thursday: axisU,
    friday: axisO,
    saturday: axisC,
    sunday: axisL,
  },
  _t = chunkAGHRB4JFN(
    (ganttDiagramT4ZO3ILLParam118, ganttDiagramT4ZO3ILLParam119) => {
      let ganttDiagramT4ZO3ILLValue375 = [...ganttDiagramT4ZO3ILLParam118].map(
          () => -1 / 0,
        ),
        ganttDiagramT4ZO3ILLValue376 = [...ganttDiagramT4ZO3ILLParam118].sort(
          (ganttDiagramT4ZO3ILLParam209, ganttDiagramT4ZO3ILLParam210) =>
            ganttDiagramT4ZO3ILLParam209.startTime -
              ganttDiagramT4ZO3ILLParam210.startTime ||
            ganttDiagramT4ZO3ILLParam209.order -
              ganttDiagramT4ZO3ILLParam210.order,
        ),
        ganttDiagramT4ZO3ILLValue377 = 0;
      for (let ganttDiagramT4ZO3ILLValue418 of ganttDiagramT4ZO3ILLValue376)
        for (
          let ganttDiagramT4ZO3ILLValue433 = 0;
          ganttDiagramT4ZO3ILLValue433 < ganttDiagramT4ZO3ILLValue375.length;
          ganttDiagramT4ZO3ILLValue433++
        )
          if (
            ganttDiagramT4ZO3ILLValue418.startTime >=
            ganttDiagramT4ZO3ILLValue375[ganttDiagramT4ZO3ILLValue433]
          ) {
            ganttDiagramT4ZO3ILLValue375[ganttDiagramT4ZO3ILLValue433] =
              ganttDiagramT4ZO3ILLValue418.endTime;
            ganttDiagramT4ZO3ILLValue418.order =
              ganttDiagramT4ZO3ILLValue433 + ganttDiagramT4ZO3ILLParam119;
            ganttDiagramT4ZO3ILLValue433 > ganttDiagramT4ZO3ILLValue377 &&
              (ganttDiagramT4ZO3ILLValue377 = ganttDiagramT4ZO3ILLValue433);
            break;
          }
      return ganttDiagramT4ZO3ILLValue377;
    },
    "getMaxIntersections",
  ),
  $;
export const GanttDiagramT4ZO3ILL = {
  parser: ganttDiagramT4ZO3ILLValue12,
  db: ganttDiagramT4ZO3ILLValue78,
  renderer: {
    setConf: ganttDiagramT4ZO3ILLValue79,
    draw: chunkAGHRB4JFN(function (
      ganttDiagramT4ZO3ILLParam1,
      ganttDiagramT4ZO3ILLParam2,
      ganttDiagramT4ZO3ILLParam3,
      ganttDiagramT4ZO3ILLParam4,
    ) {
      let ganttDiagramT4ZO3ILLValue109 = _chunkICPOFSXXB().gantt;
      ganttDiagramT4ZO3ILLParam4.db.setDiagramId(ganttDiagramT4ZO3ILLParam2);
      let ganttDiagramT4ZO3ILLValue110 = _chunkICPOFSXXB().securityLevel,
        ganttDiagramT4ZO3ILLValue111;
      ganttDiagramT4ZO3ILLValue110 === "sandbox" &&
        (ganttDiagramT4ZO3ILLValue111 = Src("#i" + ganttDiagramT4ZO3ILLParam2));
      let ganttDiagramT4ZO3ILLValue112 = Src(
          ganttDiagramT4ZO3ILLValue110 === "sandbox"
            ? ganttDiagramT4ZO3ILLValue111.nodes()[0].contentDocument.body
            : "body",
        ),
        ganttDiagramT4ZO3ILLValue113 =
          ganttDiagramT4ZO3ILLValue110 === "sandbox"
            ? ganttDiagramT4ZO3ILLValue111.nodes()[0].contentDocument
            : document,
        ganttDiagramT4ZO3ILLValue114 =
          ganttDiagramT4ZO3ILLValue113.getElementById(
            ganttDiagramT4ZO3ILLParam2,
          );
      $ = ganttDiagramT4ZO3ILLValue114.parentElement.offsetWidth;
      $ === undefined && ($ = 1200);
      ganttDiagramT4ZO3ILLValue109.useWidth !== undefined &&
        ($ = ganttDiagramT4ZO3ILLValue109.useWidth);
      let ganttDiagramT4ZO3ILLValue115 =
          ganttDiagramT4ZO3ILLParam4.db.getTasks(),
        ganttDiagramT4ZO3ILLValue116 = [];
      for (let ganttDiagramT4ZO3ILLValue465 of ganttDiagramT4ZO3ILLValue115)
        ganttDiagramT4ZO3ILLValue116.push(ganttDiagramT4ZO3ILLValue465.type);
      ganttDiagramT4ZO3ILLValue116 = ganttDiagramT4ZO3ILLHelper11(
        ganttDiagramT4ZO3ILLValue116,
      );
      let ganttDiagramT4ZO3ILLValue117 = {},
        ganttDiagramT4ZO3ILLValue118 =
          2 * ganttDiagramT4ZO3ILLValue109.topPadding;
      if (
        ganttDiagramT4ZO3ILLParam4.db.getDisplayMode() === "compact" ||
        ganttDiagramT4ZO3ILLValue109.displayMode === "compact"
      ) {
        let ganttDiagramT4ZO3ILLValue384 = {};
        for (let ganttDiagramT4ZO3ILLValue443 of ganttDiagramT4ZO3ILLValue115)
          ganttDiagramT4ZO3ILLValue384[ganttDiagramT4ZO3ILLValue443.section] ===
          undefined
            ? (ganttDiagramT4ZO3ILLValue384[
                ganttDiagramT4ZO3ILLValue443.section
              ] = [ganttDiagramT4ZO3ILLValue443])
            : ganttDiagramT4ZO3ILLValue384[
                ganttDiagramT4ZO3ILLValue443.section
              ].push(ganttDiagramT4ZO3ILLValue443);
        let ganttDiagramT4ZO3ILLValue385 = 0;
        for (let ganttDiagramT4ZO3ILLValue437 of Object.keys(
          ganttDiagramT4ZO3ILLValue384,
        )) {
          let ganttDiagramT4ZO3ILLValue452 =
            _t(
              ganttDiagramT4ZO3ILLValue384[ganttDiagramT4ZO3ILLValue437],
              ganttDiagramT4ZO3ILLValue385,
            ) + 1;
          ganttDiagramT4ZO3ILLValue385 += ganttDiagramT4ZO3ILLValue452;
          ganttDiagramT4ZO3ILLValue118 +=
            ganttDiagramT4ZO3ILLValue452 *
            (ganttDiagramT4ZO3ILLValue109.barHeight +
              ganttDiagramT4ZO3ILLValue109.barGap);
          ganttDiagramT4ZO3ILLValue117[ganttDiagramT4ZO3ILLValue437] =
            ganttDiagramT4ZO3ILLValue452;
        }
      } else {
        ganttDiagramT4ZO3ILLValue118 +=
          ganttDiagramT4ZO3ILLValue115.length *
          (ganttDiagramT4ZO3ILLValue109.barHeight +
            ganttDiagramT4ZO3ILLValue109.barGap);
        for (let ganttDiagramT4ZO3ILLValue456 of ganttDiagramT4ZO3ILLValue116)
          ganttDiagramT4ZO3ILLValue117[ganttDiagramT4ZO3ILLValue456] =
            ganttDiagramT4ZO3ILLValue115.filter(
              (item) => item.type === ganttDiagramT4ZO3ILLValue456,
            ).length;
      }
      ganttDiagramT4ZO3ILLValue114.setAttribute(
        "viewBox",
        "0 0 " + $ + " " + ganttDiagramT4ZO3ILLValue118,
      );
      let ganttDiagramT4ZO3ILLValue119 = ganttDiagramT4ZO3ILLValue112.select(
          `[id="${ganttDiagramT4ZO3ILLParam2}"]`,
        ),
        ganttDiagramT4ZO3ILLValue120 = axisR()
          .domain([
            minT(
              ganttDiagramT4ZO3ILLValue115,
              function (ganttDiagramT4ZO3ILLParam248) {
                return ganttDiagramT4ZO3ILLParam248.startTime;
              },
            ),
            minN(
              ganttDiagramT4ZO3ILLValue115,
              function (ganttDiagramT4ZO3ILLParam252) {
                return ganttDiagramT4ZO3ILLParam252.endTime;
              },
            ),
          ])
          .rangeRound([
            0,
            $ -
              ganttDiagramT4ZO3ILLValue109.leftPadding -
              ganttDiagramT4ZO3ILLValue109.rightPadding,
          ]);
      function ganttDiagramT4ZO3ILLHelper3(
        ganttDiagramT4ZO3ILLParam185,
        ganttDiagramT4ZO3ILLParam186,
      ) {
        let ganttDiagramT4ZO3ILLValue440 =
            ganttDiagramT4ZO3ILLParam185.startTime,
          ganttDiagramT4ZO3ILLValue441 = ganttDiagramT4ZO3ILLParam186.startTime,
          ganttDiagramT4ZO3ILLValue442 = 0;
        return (
          ganttDiagramT4ZO3ILLValue440 > ganttDiagramT4ZO3ILLValue441
            ? (ganttDiagramT4ZO3ILLValue442 = 1)
            : ganttDiagramT4ZO3ILLValue440 < ganttDiagramT4ZO3ILLValue441 &&
              (ganttDiagramT4ZO3ILLValue442 = -1),
          ganttDiagramT4ZO3ILLValue442
        );
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper3, "taskCompare");
      ganttDiagramT4ZO3ILLValue115.sort(ganttDiagramT4ZO3ILLHelper3);
      ganttDiagramT4ZO3ILLHelper4(
        ganttDiagramT4ZO3ILLValue115,
        $,
        ganttDiagramT4ZO3ILLValue118,
      );
      _chunkICPOFSXXC(
        ganttDiagramT4ZO3ILLValue119,
        ganttDiagramT4ZO3ILLValue118,
        $,
        ganttDiagramT4ZO3ILLValue109.useMaxWidth,
      );
      ganttDiagramT4ZO3ILLValue119
        .append("text")
        .text(ganttDiagramT4ZO3ILLParam4.db.getDiagramTitle())
        .attr("x", $ / 2)
        .attr("y", ganttDiagramT4ZO3ILLValue109.titleTopMargin)
        .attr("class", "titleText");
      function ganttDiagramT4ZO3ILLHelper4(
        ganttDiagramT4ZO3ILLParam107,
        ganttDiagramT4ZO3ILLParam108,
        ganttDiagramT4ZO3ILLParam109,
      ) {
        let ganttDiagramT4ZO3ILLValue355 =
            ganttDiagramT4ZO3ILLValue109.barHeight,
          ganttDiagramT4ZO3ILLValue356 =
            ganttDiagramT4ZO3ILLValue355 + ganttDiagramT4ZO3ILLValue109.barGap,
          ganttDiagramT4ZO3ILLValue357 =
            ganttDiagramT4ZO3ILLValue109.topPadding,
          ganttDiagramT4ZO3ILLValue358 =
            ganttDiagramT4ZO3ILLValue109.leftPadding,
          ganttDiagramT4ZO3ILLValue359 = linearT()
            .domain([0, ganttDiagramT4ZO3ILLValue116.length])
            .range(["#00B9FA", "#F95002"])
            .interpolate(axisV);
        ganttDiagramT4ZO3ILLHelper6(
          ganttDiagramT4ZO3ILLValue356,
          ganttDiagramT4ZO3ILLValue357,
          ganttDiagramT4ZO3ILLValue358,
          ganttDiagramT4ZO3ILLParam108,
          ganttDiagramT4ZO3ILLParam109,
          ganttDiagramT4ZO3ILLParam107,
          ganttDiagramT4ZO3ILLParam4.db.getExcludes(),
          ganttDiagramT4ZO3ILLParam4.db.getIncludes(),
        );
        ganttDiagramT4ZO3ILLHelper8(
          ganttDiagramT4ZO3ILLValue358,
          ganttDiagramT4ZO3ILLValue357,
          ganttDiagramT4ZO3ILLParam108,
          ganttDiagramT4ZO3ILLParam109,
        );
        ganttDiagramT4ZO3ILLHelper5(
          ganttDiagramT4ZO3ILLParam107,
          ganttDiagramT4ZO3ILLValue356,
          ganttDiagramT4ZO3ILLValue357,
          ganttDiagramT4ZO3ILLValue358,
          ganttDiagramT4ZO3ILLValue355,
          ganttDiagramT4ZO3ILLValue359,
          ganttDiagramT4ZO3ILLParam108,
          ganttDiagramT4ZO3ILLParam109,
        );
        ganttDiagramT4ZO3ILLHelper9(
          ganttDiagramT4ZO3ILLValue356,
          ganttDiagramT4ZO3ILLValue357,
          ganttDiagramT4ZO3ILLValue358,
          ganttDiagramT4ZO3ILLValue355,
          ganttDiagramT4ZO3ILLValue359,
        );
        ganttDiagramT4ZO3ILLHelper10(
          ganttDiagramT4ZO3ILLValue358,
          ganttDiagramT4ZO3ILLValue357,
          ganttDiagramT4ZO3ILLParam108,
          ganttDiagramT4ZO3ILLParam109,
        );
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper4, "makeGantt");
      function ganttDiagramT4ZO3ILLHelper5(
        ganttDiagramT4ZO3ILLParam10,
        ganttDiagramT4ZO3ILLParam11,
        ganttDiagramT4ZO3ILLParam12,
        ganttDiagramT4ZO3ILLParam13,
        ganttDiagramT4ZO3ILLParam14,
        ganttDiagramT4ZO3ILLParam15,
        ganttDiagramT4ZO3ILLParam16,
      ) {
        ganttDiagramT4ZO3ILLParam10.sort(
          (ganttDiagramT4ZO3ILLParam239, ganttDiagramT4ZO3ILLParam240) =>
            ganttDiagramT4ZO3ILLParam239.vert ===
            ganttDiagramT4ZO3ILLParam240.vert
              ? 0
              : ganttDiagramT4ZO3ILLParam239.vert
                ? 1
                : -1,
        );
        let ganttDiagramT4ZO3ILLValue155 = [
          ...new Set(ganttDiagramT4ZO3ILLParam10.map((item) => item.order)),
        ].map((item) =>
          ganttDiagramT4ZO3ILLParam10.find((_item) => _item.order === item),
        );
        ganttDiagramT4ZO3ILLValue119
          .append("g")
          .selectAll("rect")
          .data(ganttDiagramT4ZO3ILLValue155)
          .enter()
          .append("rect")
          .attr("x", 0)
          .attr(
            "y",
            function (
              ganttDiagramT4ZO3ILLParam226,
              ganttDiagramT4ZO3ILLParam227,
            ) {
              return (
                (ganttDiagramT4ZO3ILLParam227 =
                  ganttDiagramT4ZO3ILLParam226.order),
                ganttDiagramT4ZO3ILLParam227 * ganttDiagramT4ZO3ILLParam11 +
                  ganttDiagramT4ZO3ILLParam12 -
                  2
              );
            },
          )
          .attr("width", function () {
            return (
              ganttDiagramT4ZO3ILLParam16 -
              ganttDiagramT4ZO3ILLValue109.rightPadding / 2
            );
          })
          .attr("height", ganttDiagramT4ZO3ILLParam11)
          .attr("class", function (ganttDiagramT4ZO3ILLParam161) {
            for (let [
              ganttDiagramT4ZO3ILLValue435,
              ganttDiagramT4ZO3ILLValue436,
            ] of ganttDiagramT4ZO3ILLValue116.entries())
              if (
                ganttDiagramT4ZO3ILLParam161.type ===
                ganttDiagramT4ZO3ILLValue436
              )
                return (
                  "section section" +
                  (ganttDiagramT4ZO3ILLValue435 %
                    ganttDiagramT4ZO3ILLValue109.numberSectionStyles)
                );
            return "section section0";
          })
          .enter();
        let ganttDiagramT4ZO3ILLValue156 = ganttDiagramT4ZO3ILLValue119
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramT4ZO3ILLParam10)
            .enter(),
          ganttDiagramT4ZO3ILLValue157 =
            ganttDiagramT4ZO3ILLParam4.db.getLinks();
        if (
          (ganttDiagramT4ZO3ILLValue156
            .append("rect")
            .attr("id", function (ganttDiagramT4ZO3ILLParam250) {
              return (
                ganttDiagramT4ZO3ILLParam2 +
                "-" +
                ganttDiagramT4ZO3ILLParam250.id
              );
            })
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("x", function (ganttDiagramT4ZO3ILLParam171) {
              return ganttDiagramT4ZO3ILLParam171.milestone
                ? ganttDiagramT4ZO3ILLValue120(
                    ganttDiagramT4ZO3ILLParam171.startTime,
                  ) +
                    ganttDiagramT4ZO3ILLParam13 +
                    0.5 *
                      (ganttDiagramT4ZO3ILLValue120(
                        ganttDiagramT4ZO3ILLParam171.endTime,
                      ) -
                        ganttDiagramT4ZO3ILLValue120(
                          ganttDiagramT4ZO3ILLParam171.startTime,
                        )) -
                    0.5 * ganttDiagramT4ZO3ILLParam14
                : ganttDiagramT4ZO3ILLValue120(
                    ganttDiagramT4ZO3ILLParam171.startTime,
                  ) + ganttDiagramT4ZO3ILLParam13;
            })
            .attr(
              "y",
              function (
                ganttDiagramT4ZO3ILLParam193,
                ganttDiagramT4ZO3ILLParam194,
              ) {
                return (
                  (ganttDiagramT4ZO3ILLParam194 =
                    ganttDiagramT4ZO3ILLParam193.order),
                  ganttDiagramT4ZO3ILLParam193.vert
                    ? ganttDiagramT4ZO3ILLValue109.gridLineStartPadding
                    : ganttDiagramT4ZO3ILLParam194 *
                        ganttDiagramT4ZO3ILLParam11 +
                      ganttDiagramT4ZO3ILLParam12
                );
              },
            )
            .attr("width", function (ganttDiagramT4ZO3ILLParam177) {
              return ganttDiagramT4ZO3ILLParam177.milestone
                ? ganttDiagramT4ZO3ILLParam14
                : ganttDiagramT4ZO3ILLParam177.vert
                  ? 0.08 * ganttDiagramT4ZO3ILLParam14
                  : ganttDiagramT4ZO3ILLValue120(
                      ganttDiagramT4ZO3ILLParam177.renderEndTime ||
                        ganttDiagramT4ZO3ILLParam177.endTime,
                    ) -
                    ganttDiagramT4ZO3ILLValue120(
                      ganttDiagramT4ZO3ILLParam177.startTime,
                    );
            })
            .attr("height", function (ganttDiagramT4ZO3ILLParam191) {
              return ganttDiagramT4ZO3ILLParam191.vert
                ? ganttDiagramT4ZO3ILLValue115.length *
                    (ganttDiagramT4ZO3ILLValue109.barHeight +
                      ganttDiagramT4ZO3ILLValue109.barGap) +
                    ganttDiagramT4ZO3ILLValue109.barHeight * 2
                : ganttDiagramT4ZO3ILLParam14;
            })
            .attr(
              "transform-origin",
              function (
                ganttDiagramT4ZO3ILLParam153,
                ganttDiagramT4ZO3ILLParam154,
              ) {
                return (
                  (ganttDiagramT4ZO3ILLParam154 =
                    ganttDiagramT4ZO3ILLParam153.order),
                  (
                    ganttDiagramT4ZO3ILLValue120(
                      ganttDiagramT4ZO3ILLParam153.startTime,
                    ) +
                    ganttDiagramT4ZO3ILLParam13 +
                    0.5 *
                      (ganttDiagramT4ZO3ILLValue120(
                        ganttDiagramT4ZO3ILLParam153.endTime,
                      ) -
                        ganttDiagramT4ZO3ILLValue120(
                          ganttDiagramT4ZO3ILLParam153.startTime,
                        ))
                  ).toString() +
                    "px " +
                    (
                      ganttDiagramT4ZO3ILLParam154 *
                        ganttDiagramT4ZO3ILLParam11 +
                      ganttDiagramT4ZO3ILLParam12 +
                      0.5 * ganttDiagramT4ZO3ILLParam14
                    ).toString() +
                    "px"
                );
              },
            )
            .attr("class", function (ganttDiagramT4ZO3ILLParam84) {
              let ganttDiagramT4ZO3ILLValue325 = "";
              ganttDiagramT4ZO3ILLParam84.classes.length > 0 &&
                (ganttDiagramT4ZO3ILLValue325 =
                  ganttDiagramT4ZO3ILLParam84.classes.join(" "));
              let ganttDiagramT4ZO3ILLValue326 = 0;
              for (let [
                ganttDiagramT4ZO3ILLValue444,
                ganttDiagramT4ZO3ILLValue445,
              ] of ganttDiagramT4ZO3ILLValue116.entries())
                ganttDiagramT4ZO3ILLParam84.type ===
                  ganttDiagramT4ZO3ILLValue445 &&
                  (ganttDiagramT4ZO3ILLValue326 =
                    ganttDiagramT4ZO3ILLValue444 %
                    ganttDiagramT4ZO3ILLValue109.numberSectionStyles);
              let ganttDiagramT4ZO3ILLValue327 = "";
              return (
                ganttDiagramT4ZO3ILLParam84.active
                  ? ganttDiagramT4ZO3ILLParam84.crit
                    ? (ganttDiagramT4ZO3ILLValue327 += " activeCrit")
                    : (ganttDiagramT4ZO3ILLValue327 = " active")
                  : ganttDiagramT4ZO3ILLParam84.done
                    ? (ganttDiagramT4ZO3ILLValue327 =
                        ganttDiagramT4ZO3ILLParam84.crit
                          ? " doneCrit"
                          : " done")
                    : ganttDiagramT4ZO3ILLParam84.crit &&
                      (ganttDiagramT4ZO3ILLValue327 += " crit"),
                ganttDiagramT4ZO3ILLValue327.length === 0 &&
                  (ganttDiagramT4ZO3ILLValue327 = " task"),
                ganttDiagramT4ZO3ILLParam84.milestone &&
                  (ganttDiagramT4ZO3ILLValue327 =
                    " milestone " + ganttDiagramT4ZO3ILLValue327),
                ganttDiagramT4ZO3ILLParam84.vert &&
                  (ganttDiagramT4ZO3ILLValue327 =
                    " vert " + ganttDiagramT4ZO3ILLValue327),
                (ganttDiagramT4ZO3ILLValue327 += ganttDiagramT4ZO3ILLValue326),
                (ganttDiagramT4ZO3ILLValue327 +=
                  " " + ganttDiagramT4ZO3ILLValue325),
                "task" + ganttDiagramT4ZO3ILLValue327
              );
            }),
          ganttDiagramT4ZO3ILLValue156
            .append("text")
            .attr("id", function (ganttDiagramT4ZO3ILLParam230) {
              return (
                ganttDiagramT4ZO3ILLParam2 +
                "-" +
                ganttDiagramT4ZO3ILLParam230.id +
                "-text"
              );
            })
            .text(function (ganttDiagramT4ZO3ILLParam256) {
              return ganttDiagramT4ZO3ILLParam256.task;
            })
            .attr("font-size", ganttDiagramT4ZO3ILLValue109.fontSize)
            .attr("x", function (ganttDiagramT4ZO3ILLParam115) {
              let ganttDiagramT4ZO3ILLValue368 = ganttDiagramT4ZO3ILLValue120(
                  ganttDiagramT4ZO3ILLParam115.startTime,
                ),
                ganttDiagramT4ZO3ILLValue369 = ganttDiagramT4ZO3ILLValue120(
                  ganttDiagramT4ZO3ILLParam115.renderEndTime ||
                    ganttDiagramT4ZO3ILLParam115.endTime,
                );
              if (
                (ganttDiagramT4ZO3ILLParam115.milestone &&
                  ((ganttDiagramT4ZO3ILLValue368 +=
                    0.5 *
                      (ganttDiagramT4ZO3ILLValue120(
                        ganttDiagramT4ZO3ILLParam115.endTime,
                      ) -
                        ganttDiagramT4ZO3ILLValue120(
                          ganttDiagramT4ZO3ILLParam115.startTime,
                        )) -
                    0.5 * ganttDiagramT4ZO3ILLParam14),
                  (ganttDiagramT4ZO3ILLValue369 =
                    ganttDiagramT4ZO3ILLValue368 +
                    ganttDiagramT4ZO3ILLParam14)),
                ganttDiagramT4ZO3ILLParam115.vert)
              )
                return (
                  ganttDiagramT4ZO3ILLValue120(
                    ganttDiagramT4ZO3ILLParam115.startTime,
                  ) + ganttDiagramT4ZO3ILLParam13
                );
              let ganttDiagramT4ZO3ILLValue370 = this.getBBox().width;
              return ganttDiagramT4ZO3ILLValue370 >
                ganttDiagramT4ZO3ILLValue369 - ganttDiagramT4ZO3ILLValue368
                ? ganttDiagramT4ZO3ILLValue369 +
                    ganttDiagramT4ZO3ILLValue370 +
                    1.5 * ganttDiagramT4ZO3ILLValue109.leftPadding >
                  ganttDiagramT4ZO3ILLParam16
                  ? ganttDiagramT4ZO3ILLValue368 +
                    ganttDiagramT4ZO3ILLParam13 -
                    5
                  : ganttDiagramT4ZO3ILLValue369 +
                    ganttDiagramT4ZO3ILLParam13 +
                    5
                : (ganttDiagramT4ZO3ILLValue369 -
                    ganttDiagramT4ZO3ILLValue368) /
                    2 +
                    ganttDiagramT4ZO3ILLValue368 +
                    ganttDiagramT4ZO3ILLParam13;
            })
            .attr(
              "y",
              function (
                ganttDiagramT4ZO3ILLParam150,
                ganttDiagramT4ZO3ILLParam151,
              ) {
                return ganttDiagramT4ZO3ILLParam150.vert
                  ? ganttDiagramT4ZO3ILLValue109.gridLineStartPadding +
                      ganttDiagramT4ZO3ILLValue115.length *
                        (ganttDiagramT4ZO3ILLValue109.barHeight +
                          ganttDiagramT4ZO3ILLValue109.barGap) +
                      60
                  : ((ganttDiagramT4ZO3ILLParam151 =
                      ganttDiagramT4ZO3ILLParam150.order),
                    ganttDiagramT4ZO3ILLParam151 * ganttDiagramT4ZO3ILLParam11 +
                      ganttDiagramT4ZO3ILLValue109.barHeight / 2 +
                      (ganttDiagramT4ZO3ILLValue109.fontSize / 2 - 2) +
                      ganttDiagramT4ZO3ILLParam12);
              },
            )
            .attr("text-height", ganttDiagramT4ZO3ILLParam14)
            .attr("class", function (ganttDiagramT4ZO3ILLParam67) {
              let ganttDiagramT4ZO3ILLValue254 = ganttDiagramT4ZO3ILLValue120(
                  ganttDiagramT4ZO3ILLParam67.startTime,
                ),
                ganttDiagramT4ZO3ILLValue255 = ganttDiagramT4ZO3ILLValue120(
                  ganttDiagramT4ZO3ILLParam67.endTime,
                );
              ganttDiagramT4ZO3ILLParam67.milestone &&
                (ganttDiagramT4ZO3ILLValue255 =
                  ganttDiagramT4ZO3ILLValue254 + ganttDiagramT4ZO3ILLParam14);
              let ganttDiagramT4ZO3ILLValue256 = this.getBBox().width,
                ganttDiagramT4ZO3ILLValue257 = "";
              ganttDiagramT4ZO3ILLParam67.classes.length > 0 &&
                (ganttDiagramT4ZO3ILLValue257 =
                  ganttDiagramT4ZO3ILLParam67.classes.join(" "));
              let ganttDiagramT4ZO3ILLValue258 = 0;
              for (let [
                ganttDiagramT4ZO3ILLValue446,
                ganttDiagramT4ZO3ILLValue447,
              ] of ganttDiagramT4ZO3ILLValue116.entries())
                ganttDiagramT4ZO3ILLParam67.type ===
                  ganttDiagramT4ZO3ILLValue447 &&
                  (ganttDiagramT4ZO3ILLValue258 =
                    ganttDiagramT4ZO3ILLValue446 %
                    ganttDiagramT4ZO3ILLValue109.numberSectionStyles);
              let ganttDiagramT4ZO3ILLValue259 = "";
              return (
                ganttDiagramT4ZO3ILLParam67.active &&
                  (ganttDiagramT4ZO3ILLValue259 =
                    ganttDiagramT4ZO3ILLParam67.crit
                      ? "activeCritText" + ganttDiagramT4ZO3ILLValue258
                      : "activeText" + ganttDiagramT4ZO3ILLValue258),
                ganttDiagramT4ZO3ILLParam67.done
                  ? (ganttDiagramT4ZO3ILLValue259 =
                      ganttDiagramT4ZO3ILLParam67.crit
                        ? ganttDiagramT4ZO3ILLValue259 +
                          " doneCritText" +
                          ganttDiagramT4ZO3ILLValue258
                        : ganttDiagramT4ZO3ILLValue259 +
                          " doneText" +
                          ganttDiagramT4ZO3ILLValue258)
                  : ganttDiagramT4ZO3ILLParam67.crit &&
                    (ganttDiagramT4ZO3ILLValue259 =
                      ganttDiagramT4ZO3ILLValue259 +
                      " critText" +
                      ganttDiagramT4ZO3ILLValue258),
                ganttDiagramT4ZO3ILLParam67.milestone &&
                  (ganttDiagramT4ZO3ILLValue259 += " milestoneText"),
                ganttDiagramT4ZO3ILLParam67.vert &&
                  (ganttDiagramT4ZO3ILLValue259 += " vertText"),
                ganttDiagramT4ZO3ILLValue256 >
                ganttDiagramT4ZO3ILLValue255 - ganttDiagramT4ZO3ILLValue254
                  ? ganttDiagramT4ZO3ILLValue255 +
                      ganttDiagramT4ZO3ILLValue256 +
                      1.5 * ganttDiagramT4ZO3ILLValue109.leftPadding >
                    ganttDiagramT4ZO3ILLParam16
                    ? ganttDiagramT4ZO3ILLValue257 +
                      " taskTextOutsideLeft taskTextOutside" +
                      ganttDiagramT4ZO3ILLValue258 +
                      " " +
                      ganttDiagramT4ZO3ILLValue259
                    : ganttDiagramT4ZO3ILLValue257 +
                      " taskTextOutsideRight taskTextOutside" +
                      ganttDiagramT4ZO3ILLValue258 +
                      " " +
                      ganttDiagramT4ZO3ILLValue259 +
                      " width-" +
                      ganttDiagramT4ZO3ILLValue256
                  : ganttDiagramT4ZO3ILLValue257 +
                    " taskText taskText" +
                    ganttDiagramT4ZO3ILLValue258 +
                    " " +
                    ganttDiagramT4ZO3ILLValue259 +
                    " width-" +
                    ganttDiagramT4ZO3ILLValue256
              );
            }),
          _chunkICPOFSXXB().securityLevel === "sandbox")
        ) {
          let ganttDiagramT4ZO3ILLValue315;
          ganttDiagramT4ZO3ILLValue315 = Src("#i" + ganttDiagramT4ZO3ILLParam2);
          let ganttDiagramT4ZO3ILLValue316 =
            ganttDiagramT4ZO3ILLValue315.nodes()[0].contentDocument;
          ganttDiagramT4ZO3ILLValue156
            .filter(function (item) {
              return ganttDiagramT4ZO3ILLValue157.has(item.id);
            })
            .each(function (ganttDiagramT4ZO3ILLParam104) {
              var ganttDiagramT4ZO3ILLValue351 =
                  ganttDiagramT4ZO3ILLValue316.querySelector(
                    "#" +
                      CSS.escape(
                        ganttDiagramT4ZO3ILLParam2 +
                          "-" +
                          ganttDiagramT4ZO3ILLParam104.id,
                      ),
                  ),
                ganttDiagramT4ZO3ILLValue352 =
                  ganttDiagramT4ZO3ILLValue316.querySelector(
                    "#" +
                      CSS.escape(
                        ganttDiagramT4ZO3ILLParam2 +
                          "-" +
                          ganttDiagramT4ZO3ILLParam104.id +
                          "-text",
                      ),
                  );
              let ganttDiagramT4ZO3ILLValue353 =
                ganttDiagramT4ZO3ILLValue351.parentNode;
              var ganttDiagramT4ZO3ILLValue354 =
                ganttDiagramT4ZO3ILLValue316.createElement("a");
              ganttDiagramT4ZO3ILLValue354.setAttribute(
                "xlink:href",
                ganttDiagramT4ZO3ILLValue157.get(
                  ganttDiagramT4ZO3ILLParam104.id,
                ),
              );
              ganttDiagramT4ZO3ILLValue354.setAttribute("target", "_top");
              ganttDiagramT4ZO3ILLValue353.appendChild(
                ganttDiagramT4ZO3ILLValue354,
              );
              ganttDiagramT4ZO3ILLValue354.appendChild(
                ganttDiagramT4ZO3ILLValue351,
              );
              ganttDiagramT4ZO3ILLValue354.appendChild(
                ganttDiagramT4ZO3ILLValue352,
              );
            });
        }
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper5, "drawRects");
      function ganttDiagramT4ZO3ILLHelper6(
        ganttDiagramT4ZO3ILLParam40,
        ganttDiagramT4ZO3ILLParam41,
        ganttDiagramT4ZO3ILLParam42,
        ganttDiagramT4ZO3ILLParam43,
        ganttDiagramT4ZO3ILLParam44,
        ganttDiagramT4ZO3ILLParam45,
        ganttDiagramT4ZO3ILLParam46,
        ganttDiagramT4ZO3ILLParam47,
      ) {
        if (
          ganttDiagramT4ZO3ILLParam46.length === 0 &&
          ganttDiagramT4ZO3ILLParam47.length === 0
        )
          return;
        let ganttDiagramT4ZO3ILLValue199, ganttDiagramT4ZO3ILLValue200;
        for (let { startTime, endTime } of ganttDiagramT4ZO3ILLParam45) {
          (ganttDiagramT4ZO3ILLValue199 === undefined ||
            startTime < ganttDiagramT4ZO3ILLValue199) &&
            (ganttDiagramT4ZO3ILLValue199 = startTime);
          (ganttDiagramT4ZO3ILLValue200 === undefined ||
            endTime > ganttDiagramT4ZO3ILLValue200) &&
            (ganttDiagramT4ZO3ILLValue200 = endTime);
        }
        if (!ganttDiagramT4ZO3ILLValue199 || !ganttDiagramT4ZO3ILLValue200)
          return;
        if (
          ganttDiagramT4ZO3ILLValue6
            .default(ganttDiagramT4ZO3ILLValue200)
            .diff(
              ganttDiagramT4ZO3ILLValue6.default(ganttDiagramT4ZO3ILLValue199),
              "year",
            ) > 5
        ) {
          chunkAGHRB4JFR.warn(
            "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.",
          );
          return;
        }
        let ganttDiagramT4ZO3ILLValue201 =
            ganttDiagramT4ZO3ILLParam4.db.getDateFormat(),
          ganttDiagramT4ZO3ILLValue202 = [],
          ganttDiagramT4ZO3ILLValue203 = null,
          ganttDiagramT4ZO3ILLValue204 = ganttDiagramT4ZO3ILLValue6.default(
            ganttDiagramT4ZO3ILLValue199,
          );
        for (
          ;
          ganttDiagramT4ZO3ILLValue204.valueOf() <=
          ganttDiagramT4ZO3ILLValue200;

        ) {
          ganttDiagramT4ZO3ILLParam4.db.isInvalidDate(
            ganttDiagramT4ZO3ILLValue204,
            ganttDiagramT4ZO3ILLValue201,
            ganttDiagramT4ZO3ILLParam46,
            ganttDiagramT4ZO3ILLParam47,
          )
            ? ganttDiagramT4ZO3ILLValue203
              ? (ganttDiagramT4ZO3ILLValue203.end =
                  ganttDiagramT4ZO3ILLValue204)
              : (ganttDiagramT4ZO3ILLValue203 = {
                  start: ganttDiagramT4ZO3ILLValue204,
                  end: ganttDiagramT4ZO3ILLValue204,
                })
            : (ganttDiagramT4ZO3ILLValue203 &&=
                (ganttDiagramT4ZO3ILLValue202.push(
                  ganttDiagramT4ZO3ILLValue203,
                ),
                null));
          ganttDiagramT4ZO3ILLValue204 = ganttDiagramT4ZO3ILLValue204.add(
            1,
            "d",
          );
        }
        ganttDiagramT4ZO3ILLValue119
          .append("g")
          .selectAll("rect")
          .data(ganttDiagramT4ZO3ILLValue202)
          .enter()
          .append("rect")
          .attr(
            "id",
            (ganttDiagramT4ZO3ILLParam214) =>
              ganttDiagramT4ZO3ILLParam2 +
              "-exclude-" +
              ganttDiagramT4ZO3ILLParam214.start.format("YYYY-MM-DD"),
          )
          .attr(
            "x",
            (ganttDiagramT4ZO3ILLParam251) =>
              ganttDiagramT4ZO3ILLValue120(
                ganttDiagramT4ZO3ILLParam251.start.startOf("day"),
              ) + ganttDiagramT4ZO3ILLParam42,
          )
          .attr("y", ganttDiagramT4ZO3ILLValue109.gridLineStartPadding)
          .attr(
            "width",
            (ganttDiagramT4ZO3ILLParam207) =>
              ganttDiagramT4ZO3ILLValue120(
                ganttDiagramT4ZO3ILLParam207.end.endOf("day"),
              ) -
              ganttDiagramT4ZO3ILLValue120(
                ganttDiagramT4ZO3ILLParam207.start.startOf("day"),
              ),
          )
          .attr(
            "height",
            ganttDiagramT4ZO3ILLParam44 -
              ganttDiagramT4ZO3ILLParam41 -
              ganttDiagramT4ZO3ILLValue109.gridLineStartPadding,
          )
          .attr(
            "transform-origin",
            function (
              ganttDiagramT4ZO3ILLParam168,
              ganttDiagramT4ZO3ILLParam169,
            ) {
              return (
                (
                  ganttDiagramT4ZO3ILLValue120(
                    ganttDiagramT4ZO3ILLParam168.start,
                  ) +
                  ganttDiagramT4ZO3ILLParam42 +
                  0.5 *
                    (ganttDiagramT4ZO3ILLValue120(
                      ganttDiagramT4ZO3ILLParam168.end,
                    ) -
                      ganttDiagramT4ZO3ILLValue120(
                        ganttDiagramT4ZO3ILLParam168.start,
                      ))
                ).toString() +
                "px " +
                (
                  ganttDiagramT4ZO3ILLParam169 * ganttDiagramT4ZO3ILLParam40 +
                  0.5 * ganttDiagramT4ZO3ILLParam44
                ).toString() +
                "px"
              );
            },
          )
          .attr("class", "exclude-range");
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper6, "drawExcludeDays");
      function ganttDiagramT4ZO3ILLHelper7(
        ganttDiagramT4ZO3ILLParam144,
        ganttDiagramT4ZO3ILLParam145,
        ganttDiagramT4ZO3ILLParam146,
        ganttDiagramT4ZO3ILLParam147,
      ) {
        if (
          ganttDiagramT4ZO3ILLParam146 <= 0 ||
          ganttDiagramT4ZO3ILLParam144 > ganttDiagramT4ZO3ILLParam145
        )
          return 1 / 0;
        let ganttDiagramT4ZO3ILLValue398 =
            ganttDiagramT4ZO3ILLParam145 - ganttDiagramT4ZO3ILLParam144,
          ganttDiagramT4ZO3ILLValue399 = ganttDiagramT4ZO3ILLValue6.default
            .duration({
              [ganttDiagramT4ZO3ILLParam147 ?? "day"]:
                ganttDiagramT4ZO3ILLParam146,
            })
            .asMilliseconds();
        return ganttDiagramT4ZO3ILLValue399 <= 0
          ? 1 / 0
          : Math.ceil(
              ganttDiagramT4ZO3ILLValue398 / ganttDiagramT4ZO3ILLValue399,
            );
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper7, "getEstimatedTickCount");
      function ganttDiagramT4ZO3ILLHelper8(
        ganttDiagramT4ZO3ILLParam25,
        ganttDiagramT4ZO3ILLParam26,
        ganttDiagramT4ZO3ILLParam27,
        ganttDiagramT4ZO3ILLParam28,
      ) {
        let ganttDiagramT4ZO3ILLValue188 =
            ganttDiagramT4ZO3ILLParam4.db.getDateFormat(),
          ganttDiagramT4ZO3ILLValue189 =
            ganttDiagramT4ZO3ILLParam4.db.getAxisFormat(),
          ganttDiagramT4ZO3ILLValue190;
        ganttDiagramT4ZO3ILLValue190 =
          ganttDiagramT4ZO3ILLValue189 ||
          (ganttDiagramT4ZO3ILLValue188 === "D"
            ? "%d"
            : (ganttDiagramT4ZO3ILLValue109.axisFormat ?? "%Y-%m-%d"));
        let ganttDiagramT4ZO3ILLValue191 = axisT(ganttDiagramT4ZO3ILLValue120)
            .tickSize(
              -ganttDiagramT4ZO3ILLParam28 +
                ganttDiagramT4ZO3ILLParam26 +
                ganttDiagramT4ZO3ILLValue109.gridLineStartPadding,
            )
            .tickFormat(axisI(ganttDiagramT4ZO3ILLValue190)),
          ganttDiagramT4ZO3ILLValue192 =
            /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
              ganttDiagramT4ZO3ILLParam4.db.getTickInterval() ||
                ganttDiagramT4ZO3ILLValue109.tickInterval,
            );
        if (ganttDiagramT4ZO3ILLValue192 !== null) {
          let ganttDiagramT4ZO3ILLValue233 = parseInt(
            ganttDiagramT4ZO3ILLValue192[1],
            10,
          );
          if (
            isNaN(ganttDiagramT4ZO3ILLValue233) ||
            ganttDiagramT4ZO3ILLValue233 <= 0
          )
            chunkAGHRB4JFR.warn(
              `Invalid tick interval value: "${ganttDiagramT4ZO3ILLValue192[1]}". Skipping custom tick interval.`,
            );
          else {
            let ganttDiagramT4ZO3ILLValue260 = ganttDiagramT4ZO3ILLValue192[2],
              ganttDiagramT4ZO3ILLValue261 =
                ganttDiagramT4ZO3ILLParam4.db.getWeekday() ||
                ganttDiagramT4ZO3ILLValue109.weekday,
              ganttDiagramT4ZO3ILLValue262 =
                ganttDiagramT4ZO3ILLValue120.domain(),
              ganttDiagramT4ZO3ILLValue263 = ganttDiagramT4ZO3ILLValue262[0],
              ganttDiagramT4ZO3ILLValue264 = ganttDiagramT4ZO3ILLValue262[1],
              ganttDiagramT4ZO3ILLValue265 = ganttDiagramT4ZO3ILLHelper7(
                ganttDiagramT4ZO3ILLValue263,
                ganttDiagramT4ZO3ILLValue264,
                ganttDiagramT4ZO3ILLValue233,
                ganttDiagramT4ZO3ILLValue260,
              );
            if (ganttDiagramT4ZO3ILLValue265 > 1e4)
              chunkAGHRB4JFR.warn(
                `The tick interval "${ganttDiagramT4ZO3ILLValue233}${ganttDiagramT4ZO3ILLValue260}" would generate ${ganttDiagramT4ZO3ILLValue265} ticks, which exceeds the maximum allowed (${1e4}). This may indicate an invalid date or time range. Skipping custom tick interval.`,
              );
            else
              switch (ganttDiagramT4ZO3ILLValue260) {
                case "millisecond":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisUnderscore.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "second":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisG.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "minute":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisH.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "hour":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisM.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "day":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisP.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "week":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    ganttDiagramT4ZO3ILLValue80[
                      ganttDiagramT4ZO3ILLValue261
                    ].every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
                case "month":
                  ganttDiagramT4ZO3ILLValue191.ticks(
                    axisA.every(ganttDiagramT4ZO3ILLValue233),
                  );
                  break;
              }
          }
        }
        if (
          (ganttDiagramT4ZO3ILLValue119
            .append("g")
            .attr("class", "grid")
            .attr(
              "transform",
              "translate(" +
                ganttDiagramT4ZO3ILLParam25 +
                ", " +
                (ganttDiagramT4ZO3ILLParam28 - 50) +
                ")",
            )
            .call(ganttDiagramT4ZO3ILLValue191)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10)
            .attr("dy", "1em"),
          ganttDiagramT4ZO3ILLParam4.db.topAxisEnabled() ||
            ganttDiagramT4ZO3ILLValue109.topAxis)
        ) {
          let ganttDiagramT4ZO3ILLValue224 = axisN(ganttDiagramT4ZO3ILLValue120)
            .tickSize(
              -ganttDiagramT4ZO3ILLParam28 +
                ganttDiagramT4ZO3ILLParam26 +
                ganttDiagramT4ZO3ILLValue109.gridLineStartPadding,
            )
            .tickFormat(axisI(ganttDiagramT4ZO3ILLValue190));
          if (ganttDiagramT4ZO3ILLValue192 !== null) {
            let ganttDiagramT4ZO3ILLValue298 = parseInt(
              ganttDiagramT4ZO3ILLValue192[1],
              10,
            );
            if (
              isNaN(ganttDiagramT4ZO3ILLValue298) ||
              ganttDiagramT4ZO3ILLValue298 <= 0
            )
              chunkAGHRB4JFR.warn(
                `Invalid tick interval value: "${ganttDiagramT4ZO3ILLValue192[1]}". Skipping custom tick interval.`,
              );
            else {
              let ganttDiagramT4ZO3ILLValue320 =
                  ganttDiagramT4ZO3ILLValue192[2],
                ganttDiagramT4ZO3ILLValue321 =
                  ganttDiagramT4ZO3ILLParam4.db.getWeekday() ||
                  ganttDiagramT4ZO3ILLValue109.weekday,
                ganttDiagramT4ZO3ILLValue322 =
                  ganttDiagramT4ZO3ILLValue120.domain(),
                ganttDiagramT4ZO3ILLValue323 = ganttDiagramT4ZO3ILLValue322[0],
                ganttDiagramT4ZO3ILLValue324 = ganttDiagramT4ZO3ILLValue322[1];
              if (
                ganttDiagramT4ZO3ILLHelper7(
                  ganttDiagramT4ZO3ILLValue323,
                  ganttDiagramT4ZO3ILLValue324,
                  ganttDiagramT4ZO3ILLValue298,
                  ganttDiagramT4ZO3ILLValue320,
                ) <= 1e4
              )
                switch (ganttDiagramT4ZO3ILLValue320) {
                  case "millisecond":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisUnderscore.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "second":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisG.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "minute":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisH.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "hour":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisM.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "day":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisP.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "week":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      ganttDiagramT4ZO3ILLValue80[
                        ganttDiagramT4ZO3ILLValue321
                      ].every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                  case "month":
                    ganttDiagramT4ZO3ILLValue224.ticks(
                      axisA.every(ganttDiagramT4ZO3ILLValue298),
                    );
                    break;
                }
            }
          }
          ganttDiagramT4ZO3ILLValue119
            .append("g")
            .attr("class", "grid")
            .attr(
              "transform",
              "translate(" +
                ganttDiagramT4ZO3ILLParam25 +
                ", " +
                ganttDiagramT4ZO3ILLParam26 +
                ")",
            )
            .call(ganttDiagramT4ZO3ILLValue224)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10);
        }
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper8, "makeGrid");
      function ganttDiagramT4ZO3ILLHelper9(
        ganttDiagramT4ZO3ILLParam53,
        ganttDiagramT4ZO3ILLParam54,
      ) {
        let ganttDiagramT4ZO3ILLValue218 = 0,
          ganttDiagramT4ZO3ILLValue219 = Object.keys(
            ganttDiagramT4ZO3ILLValue117,
          ).map((item) => [item, ganttDiagramT4ZO3ILLValue117[item]]);
        ganttDiagramT4ZO3ILLValue119
          .append("g")
          .selectAll("text")
          .data(ganttDiagramT4ZO3ILLValue219)
          .enter()
          .append(function (ganttDiagramT4ZO3ILLParam83) {
            let ganttDiagramT4ZO3ILLValue317 =
                ganttDiagramT4ZO3ILLParam83[0].split(
                  _chunkICPOFSXXO.lineBreakRegex,
                ),
              ganttDiagramT4ZO3ILLValue318 =
                -(ganttDiagramT4ZO3ILLValue317.length - 1) / 2,
              ganttDiagramT4ZO3ILLValue319 =
                ganttDiagramT4ZO3ILLValue113.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "text",
                );
            ganttDiagramT4ZO3ILLValue319.setAttribute(
              "dy",
              ganttDiagramT4ZO3ILLValue318 + "em",
            );
            for (let [
              ganttDiagramT4ZO3ILLValue373,
              ganttDiagramT4ZO3ILLValue374,
            ] of ganttDiagramT4ZO3ILLValue317.entries()) {
              let ganttDiagramT4ZO3ILLValue382 =
                ganttDiagramT4ZO3ILLValue113.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "tspan",
                );
              ganttDiagramT4ZO3ILLValue382.setAttribute(
                "alignment-baseline",
                "central",
              );
              ganttDiagramT4ZO3ILLValue382.setAttribute("x", "10");
              ganttDiagramT4ZO3ILLValue373 > 0 &&
                ganttDiagramT4ZO3ILLValue382.setAttribute("dy", "1em");
              ganttDiagramT4ZO3ILLValue382.textContent =
                ganttDiagramT4ZO3ILLValue374;
              ganttDiagramT4ZO3ILLValue319.appendChild(
                ganttDiagramT4ZO3ILLValue382,
              );
            }
            return ganttDiagramT4ZO3ILLValue319;
          })
          .attr("x", 10)
          .attr(
            "y",
            function (
              ganttDiagramT4ZO3ILLParam172,
              ganttDiagramT4ZO3ILLParam173,
            ) {
              if (ganttDiagramT4ZO3ILLParam173 > 0)
                for (
                  let ganttDiagramT4ZO3ILLValue454 = 0;
                  ganttDiagramT4ZO3ILLValue454 < ganttDiagramT4ZO3ILLParam173;
                  ganttDiagramT4ZO3ILLValue454++
                )
                  return (
                    (ganttDiagramT4ZO3ILLValue218 +=
                      ganttDiagramT4ZO3ILLValue219[
                        ganttDiagramT4ZO3ILLParam173 - 1
                      ][1]),
                    (ganttDiagramT4ZO3ILLParam172[1] *
                      ganttDiagramT4ZO3ILLParam53) /
                      2 +
                      ganttDiagramT4ZO3ILLValue218 *
                        ganttDiagramT4ZO3ILLParam53 +
                      ganttDiagramT4ZO3ILLParam54
                  );
              else
                return (
                  (ganttDiagramT4ZO3ILLParam172[1] *
                    ganttDiagramT4ZO3ILLParam53) /
                    2 +
                  ganttDiagramT4ZO3ILLParam54
                );
            },
          )
          .attr("font-size", ganttDiagramT4ZO3ILLValue109.sectionFontSize)
          .attr("class", function (ganttDiagramT4ZO3ILLParam152) {
            for (let [
              ganttDiagramT4ZO3ILLValue427,
              ganttDiagramT4ZO3ILLValue428,
            ] of ganttDiagramT4ZO3ILLValue116.entries())
              if (
                ganttDiagramT4ZO3ILLParam152[0] === ganttDiagramT4ZO3ILLValue428
              )
                return (
                  "sectionTitle sectionTitle" +
                  (ganttDiagramT4ZO3ILLValue427 %
                    ganttDiagramT4ZO3ILLValue109.numberSectionStyles)
                );
            return "sectionTitle";
          });
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper9, "vertLabels");
      function ganttDiagramT4ZO3ILLHelper10(
        ganttDiagramT4ZO3ILLParam100,
        ganttDiagramT4ZO3ILLParam101,
        ganttDiagramT4ZO3ILLParam102,
        ganttDiagramT4ZO3ILLParam103,
      ) {
        let ganttDiagramT4ZO3ILLValue346 =
          ganttDiagramT4ZO3ILLParam4.db.getTodayMarker();
        if (ganttDiagramT4ZO3ILLValue346 === "off") return;
        let ganttDiagramT4ZO3ILLValue347 = ganttDiagramT4ZO3ILLValue119
            .append("g")
            .attr("class", "today"),
          ganttDiagramT4ZO3ILLValue348 = new Date(),
          ganttDiagramT4ZO3ILLValue349 =
            ganttDiagramT4ZO3ILLValue347.append("line");
        ganttDiagramT4ZO3ILLValue349
          .attr(
            "x1",
            ganttDiagramT4ZO3ILLValue120(ganttDiagramT4ZO3ILLValue348) +
              ganttDiagramT4ZO3ILLParam100,
          )
          .attr(
            "x2",
            ganttDiagramT4ZO3ILLValue120(ganttDiagramT4ZO3ILLValue348) +
              ganttDiagramT4ZO3ILLParam100,
          )
          .attr("y1", ganttDiagramT4ZO3ILLValue109.titleTopMargin)
          .attr(
            "y2",
            ganttDiagramT4ZO3ILLParam103 -
              ganttDiagramT4ZO3ILLValue109.titleTopMargin,
          )
          .attr("class", "today");
        ganttDiagramT4ZO3ILLValue346 !== "" &&
          ganttDiagramT4ZO3ILLValue349.attr(
            "style",
            ganttDiagramT4ZO3ILLValue346.replace(/,/g, ";"),
          );
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper10, "drawToday");
      function ganttDiagramT4ZO3ILLHelper11(ganttDiagramT4ZO3ILLParam143) {
        let ganttDiagramT4ZO3ILLValue395 = {},
          ganttDiagramT4ZO3ILLValue396 = [];
        for (
          let ganttDiagramT4ZO3ILLValue424 = 0,
            ganttDiagramT4ZO3ILLValue425 = ganttDiagramT4ZO3ILLParam143.length;
          ganttDiagramT4ZO3ILLValue424 < ganttDiagramT4ZO3ILLValue425;
          ++ganttDiagramT4ZO3ILLValue424
        )
          Object.prototype.hasOwnProperty.call(
            ganttDiagramT4ZO3ILLValue395,
            ganttDiagramT4ZO3ILLParam143[ganttDiagramT4ZO3ILLValue424],
          ) ||
            ((ganttDiagramT4ZO3ILLValue395[
              ganttDiagramT4ZO3ILLParam143[ganttDiagramT4ZO3ILLValue424]
            ] = true),
            ganttDiagramT4ZO3ILLValue396.push(
              ganttDiagramT4ZO3ILLParam143[ganttDiagramT4ZO3ILLValue424],
            ));
        return ganttDiagramT4ZO3ILLValue396;
      }
      chunkAGHRB4JFN(ganttDiagramT4ZO3ILLHelper11, "checkUnique");
    }, "draw"),
  },
  styles: chunkAGHRB4JFN(
    (ganttDiagramT4ZO3ILLParam5) => `
  .mermaid-main-font {
        font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
  }

  .exclude-range {
    fill: ${ganttDiagramT4ZO3ILLParam5.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${ganttDiagramT4ZO3ILLParam5.sectionBkgColor};
  }

  .section2 {
    fill: ${ganttDiagramT4ZO3ILLParam5.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${ganttDiagramT4ZO3ILLParam5.titleColor};
  }

  .sectionTitle1 {
    fill: ${ganttDiagramT4ZO3ILLParam5.titleColor};
  }

  .sectionTitle2 {
    fill: ${ganttDiagramT4ZO3ILLParam5.titleColor};
  }

  .sectionTitle3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${ganttDiagramT4ZO3ILLParam5.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
    fill: ${ganttDiagramT4ZO3ILLParam5.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${ganttDiagramT4ZO3ILLParam5.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor};
    text-anchor: start;
    font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskBkgColor};
    stroke: ${ganttDiagramT4ZO3ILLParam5.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.activeTaskBkgColor};
    stroke: ${ganttDiagramT4ZO3ILLParam5.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${ganttDiagramT4ZO3ILLParam5.doneTaskBorderColor};
    fill: ${ganttDiagramT4ZO3ILLParam5.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${ganttDiagramT4ZO3ILLParam5.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLParam5.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${ganttDiagramT4ZO3ILLParam5.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLParam5.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${ganttDiagramT4ZO3ILLParam5.critBorderColor};
    fill: ${ganttDiagramT4ZO3ILLParam5.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${ganttDiagramT4ZO3ILLParam5.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${ganttDiagramT4ZO3ILLParam5.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${ganttDiagramT4ZO3ILLParam5.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${ganttDiagramT4ZO3ILLParam5.titleColor || ganttDiagramT4ZO3ILLParam5.textColor};
    font-family: ${ganttDiagramT4ZO3ILLParam5.fontFamily};
  }
`,
    "getStyles",
  ),
};
