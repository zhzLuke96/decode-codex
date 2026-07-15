// Restored from ref/webview/assets/ganttDiagram-LVOFAZNH-O6Om1k1l.js
// Flat boundary. Vendored ganttDiagramLVOFAZNH chunk restored from the Codex webview bundle.
import { toEsModule, createCommonJsModule } from "../runtime/commonjs-interop";
import { chunkS3R3BYOJC } from "./chunk-s3r3byoj";
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
import { chunkAGHRB4JFA, chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  chunkABZYJK2DN as _chunkABZYJK2DB,
  chunkABZYJK2DF as _chunkABZYJK2DC,
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  chunkABZYJK2DM,
  _chunkABZYJK2DC as chunkABZYJK2DU,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { dist } from "./entities-escape";
var ganttDiagramLVOFAZNHValue1 = createCommonJsModule(
    (ganttDiagramLVOFAZNHParam47, ganttDiagramLVOFAZNHParam48) => {
      (function (ganttDiagramLVOFAZNHParam119, ganttDiagramLVOFAZNHParam120) {
        typeof ganttDiagramLVOFAZNHParam47 == "object" &&
        ganttDiagramLVOFAZNHParam48 !== undefined
          ? (ganttDiagramLVOFAZNHParam48.exports =
              ganttDiagramLVOFAZNHParam120())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHParam120)
            : ((ganttDiagramLVOFAZNHParam119 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHParam119 || self).dayjs_plugin_isoWeek =
                ganttDiagramLVOFAZNHParam120());
      })(ganttDiagramLVOFAZNHParam47, function () {
        return function (
          ganttDiagramLVOFAZNHParam54,
          ganttDiagramLVOFAZNHParam55,
          ganttDiagramLVOFAZNHParam56,
        ) {
          var ganttDiagramLVOFAZNHValue200 = function (
              ganttDiagramLVOFAZNHParam182,
            ) {
              return ganttDiagramLVOFAZNHParam182.add(
                4 - ganttDiagramLVOFAZNHParam182.isoWeekday(),
                "day",
              );
            },
            ganttDiagramLVOFAZNHValue201 =
              ganttDiagramLVOFAZNHParam55.prototype;
          ganttDiagramLVOFAZNHValue201.isoWeekYear = function () {
            return ganttDiagramLVOFAZNHValue200(this).year();
          };
          ganttDiagramLVOFAZNHValue201.isoWeek = function (
            ganttDiagramLVOFAZNHParam102,
          ) {
            if (!this.$utils().u(ganttDiagramLVOFAZNHParam102))
              return this.add(
                7 * (ganttDiagramLVOFAZNHParam102 - this.isoWeek()),
                "day",
              );
            var ganttDiagramLVOFAZNHValue308,
              ganttDiagramLVOFAZNHValue309,
              ganttDiagramLVOFAZNHValue310,
              ganttDiagramLVOFAZNHValue311,
              ganttDiagramLVOFAZNHValue312 = ganttDiagramLVOFAZNHValue200(this),
              ganttDiagramLVOFAZNHValue313 =
                ((ganttDiagramLVOFAZNHValue308 = this.isoWeekYear()),
                (ganttDiagramLVOFAZNHValue309 = this.$u),
                (ganttDiagramLVOFAZNHValue310 = (
                  ganttDiagramLVOFAZNHValue309
                    ? ganttDiagramLVOFAZNHParam56.utc
                    : ganttDiagramLVOFAZNHParam56
                )()
                  .year(ganttDiagramLVOFAZNHValue308)
                  .startOf("year")),
                (ganttDiagramLVOFAZNHValue311 =
                  4 - ganttDiagramLVOFAZNHValue310.isoWeekday()),
                ganttDiagramLVOFAZNHValue310.isoWeekday() > 4 &&
                  (ganttDiagramLVOFAZNHValue311 += 7),
                ganttDiagramLVOFAZNHValue310.add(
                  ganttDiagramLVOFAZNHValue311,
                  "day",
                ));
            return (
              ganttDiagramLVOFAZNHValue312.diff(
                ganttDiagramLVOFAZNHValue313,
                "week",
              ) + 1
            );
          };
          ganttDiagramLVOFAZNHValue201.isoWeekday = function (
            ganttDiagramLVOFAZNHParam161,
          ) {
            return this.$utils().u(ganttDiagramLVOFAZNHParam161)
              ? this.day() || 7
              : this.day(
                  this.day() % 7
                    ? ganttDiagramLVOFAZNHParam161
                    : ganttDiagramLVOFAZNHParam161 - 7,
                );
          };
          var ganttDiagramLVOFAZNHValue202 =
            ganttDiagramLVOFAZNHValue201.startOf;
          ganttDiagramLVOFAZNHValue201.startOf = function (
            ganttDiagramLVOFAZNHParam111,
            ganttDiagramLVOFAZNHParam112,
          ) {
            var ganttDiagramLVOFAZNHValue328 = this.$utils(),
              ganttDiagramLVOFAZNHValue329 =
                !!ganttDiagramLVOFAZNHValue328.u(
                  ganttDiagramLVOFAZNHParam112,
                ) || ganttDiagramLVOFAZNHParam112;
            return ganttDiagramLVOFAZNHValue328.p(
              ganttDiagramLVOFAZNHParam111,
            ) === "isoweek"
              ? ganttDiagramLVOFAZNHValue329
                ? this.date(this.date() - (this.isoWeekday() - 1)).startOf(
                    "day",
                  )
                : this.date(
                    this.date() - 1 - (this.isoWeekday() - 1) + 7,
                  ).endOf("day")
              : ganttDiagramLVOFAZNHValue202.bind(this)(
                  ganttDiagramLVOFAZNHParam111,
                  ganttDiagramLVOFAZNHParam112,
                );
          };
        };
      });
    },
  ),
  ganttDiagramLVOFAZNHValue2 = createCommonJsModule(
    (ganttDiagramLVOFAZNHParam6, ganttDiagramLVOFAZNHParam7) => {
      (function (ganttDiagramLVOFAZNHParam115, ganttDiagramLVOFAZNHParam116) {
        typeof ganttDiagramLVOFAZNHParam6 == "object" &&
        ganttDiagramLVOFAZNHParam7 !== undefined
          ? (ganttDiagramLVOFAZNHParam7.exports =
              ganttDiagramLVOFAZNHParam116())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHParam116)
            : ((ganttDiagramLVOFAZNHParam115 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHParam115 ||
                    self).dayjs_plugin_customParseFormat =
                ganttDiagramLVOFAZNHParam116());
      })(ganttDiagramLVOFAZNHParam6, function () {
        var ganttDiagramLVOFAZNHValue117 = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          ganttDiagramLVOFAZNHValue118 =
            /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          ganttDiagramLVOFAZNHValue119 = /\d/,
          ganttDiagramLVOFAZNHValue120 = /\d\d/,
          ganttDiagramLVOFAZNHValue121 = /\d\d?/,
          ganttDiagramLVOFAZNHValue122 = /\d*[^-_:/,()\s\d]+/,
          ganttDiagramLVOFAZNHValue123 = {},
          ganttDiagramLVOFAZNHValue124 = function (
            ganttDiagramLVOFAZNHParam187,
          ) {
            return (
              (ganttDiagramLVOFAZNHParam187 = +ganttDiagramLVOFAZNHParam187) +
              (ganttDiagramLVOFAZNHParam187 > 68 ? 1900 : 2e3)
            );
          },
          ganttDiagramLVOFAZNHValue125 = function (
            ganttDiagramLVOFAZNHParam184,
          ) {
            return function (ganttDiagramLVOFAZNHParam212) {
              this[ganttDiagramLVOFAZNHParam184] =
                +ganttDiagramLVOFAZNHParam212;
            };
          },
          ganttDiagramLVOFAZNHValue126 = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (ganttDiagramLVOFAZNHParam121) {
              (this.zone ||= {}).offset = (function (
                ganttDiagramLVOFAZNHParam146,
              ) {
                if (
                  !ganttDiagramLVOFAZNHParam146 ||
                  ganttDiagramLVOFAZNHParam146 === "Z"
                )
                  return 0;
                var ganttDiagramLVOFAZNHValue358 =
                    ganttDiagramLVOFAZNHParam146.match(/([+-]|\d\d)/g),
                  ganttDiagramLVOFAZNHValue359 =
                    60 * ganttDiagramLVOFAZNHValue358[1] +
                    (+ganttDiagramLVOFAZNHValue358[2] || 0);
                return ganttDiagramLVOFAZNHValue359 === 0
                  ? 0
                  : ganttDiagramLVOFAZNHValue358[0] === "+"
                    ? -ganttDiagramLVOFAZNHValue359
                    : ganttDiagramLVOFAZNHValue359;
              })(ganttDiagramLVOFAZNHParam121);
            },
          ],
          ganttDiagramLVOFAZNHValue127 = function (
            ganttDiagramLVOFAZNHParam174,
          ) {
            var ganttDiagramLVOFAZNHValue391 =
              ganttDiagramLVOFAZNHValue123[ganttDiagramLVOFAZNHParam174];
            return (
              ganttDiagramLVOFAZNHValue391 &&
              (ganttDiagramLVOFAZNHValue391.indexOf
                ? ganttDiagramLVOFAZNHValue391
                : ganttDiagramLVOFAZNHValue391.s.concat(
                    ganttDiagramLVOFAZNHValue391.f,
                  ))
            );
          },
          ganttDiagramLVOFAZNHValue128 = function (
            ganttDiagramLVOFAZNHParam130,
            ganttDiagramLVOFAZNHParam131,
          ) {
            var ganttDiagramLVOFAZNHValue347,
              ganttDiagramLVOFAZNHValue348 =
                ganttDiagramLVOFAZNHValue123.meridiem;
            if (ganttDiagramLVOFAZNHValue348) {
              for (
                var ganttDiagramLVOFAZNHValue349 = 1;
                ganttDiagramLVOFAZNHValue349 <= 24;
                ganttDiagramLVOFAZNHValue349 += 1
              )
                if (
                  ganttDiagramLVOFAZNHParam130.indexOf(
                    ganttDiagramLVOFAZNHValue348(
                      ganttDiagramLVOFAZNHValue349,
                      0,
                      ganttDiagramLVOFAZNHParam131,
                    ),
                  ) > -1
                ) {
                  ganttDiagramLVOFAZNHValue347 =
                    ganttDiagramLVOFAZNHValue349 > 12;
                  break;
                }
            } else
              ganttDiagramLVOFAZNHValue347 =
                ganttDiagramLVOFAZNHParam130 ===
                (ganttDiagramLVOFAZNHParam131 ? "pm" : "PM");
            return ganttDiagramLVOFAZNHValue347;
          },
          ganttDiagramLVOFAZNHValue129 = {
            A: [
              ganttDiagramLVOFAZNHValue122,
              function (ganttDiagramLVOFAZNHParam198) {
                this.afternoon = ganttDiagramLVOFAZNHValue128(
                  ganttDiagramLVOFAZNHParam198,
                  false,
                );
              },
            ],
            a: [
              ganttDiagramLVOFAZNHValue122,
              function (ganttDiagramLVOFAZNHParam199) {
                this.afternoon = ganttDiagramLVOFAZNHValue128(
                  ganttDiagramLVOFAZNHParam199,
                  true,
                );
              },
            ],
            Q: [
              ganttDiagramLVOFAZNHValue119,
              function (ganttDiagramLVOFAZNHParam201) {
                this.month = 3 * (ganttDiagramLVOFAZNHParam201 - 1) + 1;
              },
            ],
            S: [
              ganttDiagramLVOFAZNHValue119,
              function (ganttDiagramLVOFAZNHParam194) {
                this.milliseconds = 100 * ganttDiagramLVOFAZNHParam194;
              },
            ],
            SS: [
              ganttDiagramLVOFAZNHValue120,
              function (ganttDiagramLVOFAZNHParam200) {
                this.milliseconds = 10 * ganttDiagramLVOFAZNHParam200;
              },
            ],
            SSS: [
              /\d{3}/,
              function (ganttDiagramLVOFAZNHParam202) {
                this.milliseconds = +ganttDiagramLVOFAZNHParam202;
              },
            ],
            s: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("seconds"),
            ],
            ss: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("seconds"),
            ],
            m: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("minutes"),
            ],
            mm: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("minutes"),
            ],
            H: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("hours"),
            ],
            h: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("hours"),
            ],
            HH: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("hours"),
            ],
            hh: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("hours"),
            ],
            D: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("day"),
            ],
            DD: [
              ganttDiagramLVOFAZNHValue120,
              ganttDiagramLVOFAZNHValue125("day"),
            ],
            Do: [
              ganttDiagramLVOFAZNHValue122,
              function (ganttDiagramLVOFAZNHParam137) {
                var ganttDiagramLVOFAZNHValue350 =
                  ganttDiagramLVOFAZNHValue123.ordinal;
                if (
                  ((this.day = ganttDiagramLVOFAZNHParam137.match(/\d+/)[0]),
                  ganttDiagramLVOFAZNHValue350)
                )
                  for (
                    var ganttDiagramLVOFAZNHValue351 = 1;
                    ganttDiagramLVOFAZNHValue351 <= 31;
                    ganttDiagramLVOFAZNHValue351 += 1
                  )
                    ganttDiagramLVOFAZNHValue350(
                      ganttDiagramLVOFAZNHValue351,
                    ).replace(/\[|\]/g, "") === ganttDiagramLVOFAZNHParam137 &&
                      (this.day = ganttDiagramLVOFAZNHValue351);
              },
            ],
            w: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("week"),
            ],
            ww: [
              ganttDiagramLVOFAZNHValue120,
              ganttDiagramLVOFAZNHValue125("week"),
            ],
            M: [
              ganttDiagramLVOFAZNHValue121,
              ganttDiagramLVOFAZNHValue125("month"),
            ],
            MM: [
              ganttDiagramLVOFAZNHValue120,
              ganttDiagramLVOFAZNHValue125("month"),
            ],
            MMM: [
              ganttDiagramLVOFAZNHValue122,
              function (ganttDiagramLVOFAZNHParam125) {
                var ganttDiagramLVOFAZNHValue340 =
                    ganttDiagramLVOFAZNHValue127("months"),
                  ganttDiagramLVOFAZNHValue341 =
                    (
                      ganttDiagramLVOFAZNHValue127("monthsShort") ||
                      ganttDiagramLVOFAZNHValue340.map(function (item) {
                        return item.slice(0, 3);
                      })
                    ).indexOf(ganttDiagramLVOFAZNHParam125) + 1;
                if (ganttDiagramLVOFAZNHValue341 < 1) throw Error();
                this.month =
                  ganttDiagramLVOFAZNHValue341 % 12 ||
                  ganttDiagramLVOFAZNHValue341;
              },
            ],
            MMMM: [
              ganttDiagramLVOFAZNHValue122,
              function (ganttDiagramLVOFAZNHParam156) {
                var ganttDiagramLVOFAZNHValue379 =
                  ganttDiagramLVOFAZNHValue127("months").indexOf(
                    ganttDiagramLVOFAZNHParam156,
                  ) + 1;
                if (ganttDiagramLVOFAZNHValue379 < 1) throw Error();
                this.month =
                  ganttDiagramLVOFAZNHValue379 % 12 ||
                  ganttDiagramLVOFAZNHValue379;
              },
            ],
            Y: [/[+-]?\d+/, ganttDiagramLVOFAZNHValue125("year")],
            YY: [
              ganttDiagramLVOFAZNHValue120,
              function (ganttDiagramLVOFAZNHParam207) {
                this.year = ganttDiagramLVOFAZNHValue124(
                  ganttDiagramLVOFAZNHParam207,
                );
              },
            ],
            YYYY: [/\d{4}/, ganttDiagramLVOFAZNHValue125("year")],
            Z: ganttDiagramLVOFAZNHValue126,
            ZZ: ganttDiagramLVOFAZNHValue126,
          };
        function ganttDiagramLVOFAZNHHelper11(ganttDiagramLVOFAZNHParam58) {
          for (
            var ganttDiagramLVOFAZNHValue207 = ganttDiagramLVOFAZNHParam58,
              ganttDiagramLVOFAZNHValue208 =
                ganttDiagramLVOFAZNHValue123 &&
                ganttDiagramLVOFAZNHValue123.formats,
              ganttDiagramLVOFAZNHValue209 = (ganttDiagramLVOFAZNHParam58 =
                ganttDiagramLVOFAZNHValue207.replace(
                  /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                  function (
                    ganttDiagramLVOFAZNHParam122,
                    ganttDiagramLVOFAZNHParam123,
                    ganttDiagramLVOFAZNHParam124,
                  ) {
                    var ganttDiagramLVOFAZNHValue339 =
                      ganttDiagramLVOFAZNHParam124 &&
                      ganttDiagramLVOFAZNHParam124.toUpperCase();
                    return (
                      ganttDiagramLVOFAZNHParam123 ||
                      ganttDiagramLVOFAZNHValue208[
                        ganttDiagramLVOFAZNHParam124
                      ] ||
                      ganttDiagramLVOFAZNHValue117[
                        ganttDiagramLVOFAZNHParam124
                      ] ||
                      ganttDiagramLVOFAZNHValue208[
                        ganttDiagramLVOFAZNHValue339
                      ].replace(
                        /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                        function (
                          ganttDiagramLVOFAZNHParam191,
                          ganttDiagramLVOFAZNHParam192,
                          ganttDiagramLVOFAZNHParam193,
                        ) {
                          return (
                            ganttDiagramLVOFAZNHParam192 ||
                            ganttDiagramLVOFAZNHParam193.slice(1)
                          );
                        },
                      )
                    );
                  },
                )).match(ganttDiagramLVOFAZNHValue118),
              ganttDiagramLVOFAZNHValue210 =
                ganttDiagramLVOFAZNHValue209.length,
              ganttDiagramLVOFAZNHValue211 = 0;
            ganttDiagramLVOFAZNHValue211 < ganttDiagramLVOFAZNHValue210;
            ganttDiagramLVOFAZNHValue211 += 1
          ) {
            var ganttDiagramLVOFAZNHValue212 =
                ganttDiagramLVOFAZNHValue209[ganttDiagramLVOFAZNHValue211],
              ganttDiagramLVOFAZNHValue213 =
                ganttDiagramLVOFAZNHValue129[ganttDiagramLVOFAZNHValue212],
              ganttDiagramLVOFAZNHValue214 =
                ganttDiagramLVOFAZNHValue213 && ganttDiagramLVOFAZNHValue213[0],
              ganttDiagramLVOFAZNHValue215 =
                ganttDiagramLVOFAZNHValue213 && ganttDiagramLVOFAZNHValue213[1];
            ganttDiagramLVOFAZNHValue209[ganttDiagramLVOFAZNHValue211] =
              ganttDiagramLVOFAZNHValue215
                ? {
                    regex: ganttDiagramLVOFAZNHValue214,
                    parser: ganttDiagramLVOFAZNHValue215,
                  }
                : ganttDiagramLVOFAZNHValue212.replace(/^\[|\]$/g, "");
          }
          return function (ganttDiagramLVOFAZNHParam90) {
            for (
              var ganttDiagramLVOFAZNHValue288 = {},
                ganttDiagramLVOFAZNHValue289 = 0,
                ganttDiagramLVOFAZNHValue290 = 0;
              ganttDiagramLVOFAZNHValue289 < ganttDiagramLVOFAZNHValue210;
              ganttDiagramLVOFAZNHValue289 += 1
            ) {
              var ganttDiagramLVOFAZNHValue291 =
                ganttDiagramLVOFAZNHValue209[ganttDiagramLVOFAZNHValue289];
              if (typeof ganttDiagramLVOFAZNHValue291 == "string")
                ganttDiagramLVOFAZNHValue290 +=
                  ganttDiagramLVOFAZNHValue291.length;
              else {
                var ganttDiagramLVOFAZNHValue292 =
                    ganttDiagramLVOFAZNHValue291.regex,
                  ganttDiagramLVOFAZNHValue293 =
                    ganttDiagramLVOFAZNHValue291.parser,
                  ganttDiagramLVOFAZNHValue294 =
                    ganttDiagramLVOFAZNHParam90.slice(
                      ganttDiagramLVOFAZNHValue290,
                    ),
                  ganttDiagramLVOFAZNHValue295 =
                    ganttDiagramLVOFAZNHValue292.exec(
                      ganttDiagramLVOFAZNHValue294,
                    )[0];
                ganttDiagramLVOFAZNHValue293.call(
                  ganttDiagramLVOFAZNHValue288,
                  ganttDiagramLVOFAZNHValue295,
                );
                ganttDiagramLVOFAZNHParam90 =
                  ganttDiagramLVOFAZNHParam90.replace(
                    ganttDiagramLVOFAZNHValue295,
                    "",
                  );
              }
            }
            return (
              (function (ganttDiagramLVOFAZNHParam145) {
                var ganttDiagramLVOFAZNHValue356 =
                  ganttDiagramLVOFAZNHParam145.afternoon;
                if (ganttDiagramLVOFAZNHValue356 !== undefined) {
                  var ganttDiagramLVOFAZNHValue357 =
                    ganttDiagramLVOFAZNHParam145.hours;
                  ganttDiagramLVOFAZNHValue356
                    ? ganttDiagramLVOFAZNHValue357 < 12 &&
                      (ganttDiagramLVOFAZNHParam145.hours += 12)
                    : ganttDiagramLVOFAZNHValue357 === 12 &&
                      (ganttDiagramLVOFAZNHParam145.hours = 0);
                  delete ganttDiagramLVOFAZNHParam145.afternoon;
                }
              })(ganttDiagramLVOFAZNHValue288),
              ganttDiagramLVOFAZNHValue288
            );
          };
        }
        return function (
          ganttDiagramLVOFAZNHParam33,
          ganttDiagramLVOFAZNHParam34,
          ganttDiagramLVOFAZNHParam35,
        ) {
          ganttDiagramLVOFAZNHParam35.p.customParseFormat = true;
          ganttDiagramLVOFAZNHParam33 &&
            ganttDiagramLVOFAZNHParam33.parseTwoDigitYear &&
            (ganttDiagramLVOFAZNHValue124 =
              ganttDiagramLVOFAZNHParam33.parseTwoDigitYear);
          var ganttDiagramLVOFAZNHValue172 =
              ganttDiagramLVOFAZNHParam34.prototype,
            ganttDiagramLVOFAZNHValue173 = ganttDiagramLVOFAZNHValue172.parse;
          ganttDiagramLVOFAZNHValue172.parse = function (
            ganttDiagramLVOFAZNHParam46,
          ) {
            var ganttDiagramLVOFAZNHValue180 = ganttDiagramLVOFAZNHParam46.date,
              ganttDiagramLVOFAZNHValue181 = ganttDiagramLVOFAZNHParam46.utc,
              ganttDiagramLVOFAZNHValue182 = ganttDiagramLVOFAZNHParam46.args;
            this.$u = ganttDiagramLVOFAZNHValue181;
            var ganttDiagramLVOFAZNHValue183 = ganttDiagramLVOFAZNHValue182[1];
            if (typeof ganttDiagramLVOFAZNHValue183 == "string") {
              var ganttDiagramLVOFAZNHValue184 =
                  true === ganttDiagramLVOFAZNHValue182[2],
                ganttDiagramLVOFAZNHValue185 =
                  true === ganttDiagramLVOFAZNHValue182[3],
                ganttDiagramLVOFAZNHValue186 =
                  ganttDiagramLVOFAZNHValue184 || ganttDiagramLVOFAZNHValue185,
                ganttDiagramLVOFAZNHValue187 = ganttDiagramLVOFAZNHValue182[2];
              ganttDiagramLVOFAZNHValue185 &&
                (ganttDiagramLVOFAZNHValue187 =
                  ganttDiagramLVOFAZNHValue182[2]);
              ganttDiagramLVOFAZNHValue123 = this.$locale();
              !ganttDiagramLVOFAZNHValue184 &&
                ganttDiagramLVOFAZNHValue187 &&
                (ganttDiagramLVOFAZNHValue123 =
                  ganttDiagramLVOFAZNHParam35.Ls[ganttDiagramLVOFAZNHValue187]);
              this.$d = (function (
                ganttDiagramLVOFAZNHParam64,
                ganttDiagramLVOFAZNHParam65,
                ganttDiagramLVOFAZNHParam66,
                ganttDiagramLVOFAZNHParam67,
              ) {
                try {
                  if (["x", "X"].indexOf(ganttDiagramLVOFAZNHParam65) > -1)
                    return new Date(
                      (ganttDiagramLVOFAZNHParam65 === "X" ? 1e3 : 1) *
                        ganttDiagramLVOFAZNHParam64,
                    );
                  var ganttDiagramLVOFAZNHValue233 =
                      ganttDiagramLVOFAZNHHelper11(ganttDiagramLVOFAZNHParam65)(
                        ganttDiagramLVOFAZNHParam64,
                      ),
                    ganttDiagramLVOFAZNHValue234 =
                      ganttDiagramLVOFAZNHValue233.year,
                    ganttDiagramLVOFAZNHValue235 =
                      ganttDiagramLVOFAZNHValue233.month,
                    ganttDiagramLVOFAZNHValue236 =
                      ganttDiagramLVOFAZNHValue233.day,
                    ganttDiagramLVOFAZNHValue237 =
                      ganttDiagramLVOFAZNHValue233.hours,
                    ganttDiagramLVOFAZNHValue238 =
                      ganttDiagramLVOFAZNHValue233.minutes,
                    ganttDiagramLVOFAZNHValue239 =
                      ganttDiagramLVOFAZNHValue233.seconds,
                    ganttDiagramLVOFAZNHValue240 =
                      ganttDiagramLVOFAZNHValue233.milliseconds,
                    ganttDiagramLVOFAZNHValue241 =
                      ganttDiagramLVOFAZNHValue233.zone,
                    ganttDiagramLVOFAZNHValue242 =
                      ganttDiagramLVOFAZNHValue233.week,
                    ganttDiagramLVOFAZNHValue243 = new Date(),
                    ganttDiagramLVOFAZNHValue244 =
                      ganttDiagramLVOFAZNHValue236 ||
                      (ganttDiagramLVOFAZNHValue234 ||
                      ganttDiagramLVOFAZNHValue235
                        ? 1
                        : ganttDiagramLVOFAZNHValue243.getDate()),
                    ganttDiagramLVOFAZNHValue245 =
                      ganttDiagramLVOFAZNHValue234 ||
                      ganttDiagramLVOFAZNHValue243.getFullYear(),
                    ganttDiagramLVOFAZNHValue246 = 0;
                  (ganttDiagramLVOFAZNHValue234 &&
                    !ganttDiagramLVOFAZNHValue235) ||
                    (ganttDiagramLVOFAZNHValue246 =
                      ganttDiagramLVOFAZNHValue235 > 0
                        ? ganttDiagramLVOFAZNHValue235 - 1
                        : ganttDiagramLVOFAZNHValue243.getMonth());
                  var ganttDiagramLVOFAZNHValue247,
                    ganttDiagramLVOFAZNHValue248 =
                      ganttDiagramLVOFAZNHValue237 || 0,
                    ganttDiagramLVOFAZNHValue249 =
                      ganttDiagramLVOFAZNHValue238 || 0,
                    ganttDiagramLVOFAZNHValue250 =
                      ganttDiagramLVOFAZNHValue239 || 0,
                    ganttDiagramLVOFAZNHValue251 =
                      ganttDiagramLVOFAZNHValue240 || 0;
                  return ganttDiagramLVOFAZNHValue241
                    ? new Date(
                        Date.UTC(
                          ganttDiagramLVOFAZNHValue245,
                          ganttDiagramLVOFAZNHValue246,
                          ganttDiagramLVOFAZNHValue244,
                          ganttDiagramLVOFAZNHValue248,
                          ganttDiagramLVOFAZNHValue249,
                          ganttDiagramLVOFAZNHValue250,
                          ganttDiagramLVOFAZNHValue251 +
                            60 * ganttDiagramLVOFAZNHValue241.offset * 1e3,
                        ),
                      )
                    : ganttDiagramLVOFAZNHParam66
                      ? new Date(
                          Date.UTC(
                            ganttDiagramLVOFAZNHValue245,
                            ganttDiagramLVOFAZNHValue246,
                            ganttDiagramLVOFAZNHValue244,
                            ganttDiagramLVOFAZNHValue248,
                            ganttDiagramLVOFAZNHValue249,
                            ganttDiagramLVOFAZNHValue250,
                            ganttDiagramLVOFAZNHValue251,
                          ),
                        )
                      : ((ganttDiagramLVOFAZNHValue247 = new Date(
                          ganttDiagramLVOFAZNHValue245,
                          ganttDiagramLVOFAZNHValue246,
                          ganttDiagramLVOFAZNHValue244,
                          ganttDiagramLVOFAZNHValue248,
                          ganttDiagramLVOFAZNHValue249,
                          ganttDiagramLVOFAZNHValue250,
                          ganttDiagramLVOFAZNHValue251,
                        )),
                        ganttDiagramLVOFAZNHValue242 &&
                          (ganttDiagramLVOFAZNHValue247 =
                            ganttDiagramLVOFAZNHParam67(
                              ganttDiagramLVOFAZNHValue247,
                            )
                              .week(ganttDiagramLVOFAZNHValue242)
                              .toDate()),
                        ganttDiagramLVOFAZNHValue247);
                } catch {
                  return new Date("");
                }
              })(
                ganttDiagramLVOFAZNHValue180,
                ganttDiagramLVOFAZNHValue183,
                ganttDiagramLVOFAZNHValue181,
                ganttDiagramLVOFAZNHParam35,
              );
              this.init();
              ganttDiagramLVOFAZNHValue187 &&
                true !== ganttDiagramLVOFAZNHValue187 &&
                (this.$L = this.locale(ganttDiagramLVOFAZNHValue187).$L);
              ganttDiagramLVOFAZNHValue186 &&
                ganttDiagramLVOFAZNHValue180 !=
                  this.format(ganttDiagramLVOFAZNHValue183) &&
                (this.$d = new Date(""));
              ganttDiagramLVOFAZNHValue123 = {};
            } else if (ganttDiagramLVOFAZNHValue183 instanceof Array)
              for (
                var ganttDiagramLVOFAZNHValue188 =
                    ganttDiagramLVOFAZNHValue183.length,
                  ganttDiagramLVOFAZNHValue189 = 1;
                ganttDiagramLVOFAZNHValue189 <= ganttDiagramLVOFAZNHValue188;
                ganttDiagramLVOFAZNHValue189 += 1
              ) {
                ganttDiagramLVOFAZNHValue182[1] =
                  ganttDiagramLVOFAZNHValue183[
                    ganttDiagramLVOFAZNHValue189 - 1
                  ];
                var ganttDiagramLVOFAZNHValue190 =
                  ganttDiagramLVOFAZNHParam35.apply(
                    this,
                    ganttDiagramLVOFAZNHValue182,
                  );
                if (ganttDiagramLVOFAZNHValue190.isValid()) {
                  this.$d = ganttDiagramLVOFAZNHValue190.$d;
                  this.$L = ganttDiagramLVOFAZNHValue190.$L;
                  this.init();
                  break;
                }
                ganttDiagramLVOFAZNHValue189 === ganttDiagramLVOFAZNHValue188 &&
                  (this.$d = new Date(""));
              }
            else
              ganttDiagramLVOFAZNHValue173.call(
                this,
                ganttDiagramLVOFAZNHParam46,
              );
          };
        };
      });
    },
  ),
  ganttDiagramLVOFAZNHValue3 = createCommonJsModule(
    (ganttDiagramLVOFAZNHParam36, ganttDiagramLVOFAZNHParam37) => {
      (function (ganttDiagramLVOFAZNHParam117, ganttDiagramLVOFAZNHParam118) {
        typeof ganttDiagramLVOFAZNHParam36 == "object" &&
        ganttDiagramLVOFAZNHParam37 !== undefined
          ? (ganttDiagramLVOFAZNHParam37.exports =
              ganttDiagramLVOFAZNHParam118())
          : typeof define == "function" && define.amd
            ? define(ganttDiagramLVOFAZNHParam118)
            : ((ganttDiagramLVOFAZNHParam117 =
                typeof globalThis < "u"
                  ? globalThis
                  : ganttDiagramLVOFAZNHParam117 ||
                    self).dayjs_plugin_advancedFormat =
                ganttDiagramLVOFAZNHParam118());
      })(ganttDiagramLVOFAZNHParam36, function () {
        return function (
          ganttDiagramLVOFAZNHParam49,
          ganttDiagramLVOFAZNHParam50,
        ) {
          var ganttDiagramLVOFAZNHValue191 =
              ganttDiagramLVOFAZNHParam50.prototype,
            ganttDiagramLVOFAZNHValue192 = ganttDiagramLVOFAZNHValue191.format;
          ganttDiagramLVOFAZNHValue191.format = function (
            ganttDiagramLVOFAZNHParam53,
          ) {
            var ganttDiagramLVOFAZNHValue195 = this,
              ganttDiagramLVOFAZNHValue196 = this.$locale();
            if (!this.isValid())
              return ganttDiagramLVOFAZNHValue192.bind(this)(
                ganttDiagramLVOFAZNHParam53,
              );
            var ganttDiagramLVOFAZNHValue197 = this.$utils(),
              ganttDiagramLVOFAZNHValue198 = (
                ganttDiagramLVOFAZNHParam53 || "YYYY-MM-DDTHH:mm:ssZ"
              ).replace(
                /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
                function (ganttDiagramLVOFAZNHParam63) {
                  switch (ganttDiagramLVOFAZNHParam63) {
                    case "Q":
                      return Math.ceil(
                        (ganttDiagramLVOFAZNHValue195.$M + 1) / 3,
                      );
                    case "Do":
                      return ganttDiagramLVOFAZNHValue196.ordinal(
                        ganttDiagramLVOFAZNHValue195.$D,
                      );
                    case "gggg":
                      return ganttDiagramLVOFAZNHValue195.weekYear();
                    case "GGGG":
                      return ganttDiagramLVOFAZNHValue195.isoWeekYear();
                    case "wo":
                      return ganttDiagramLVOFAZNHValue196.ordinal(
                        ganttDiagramLVOFAZNHValue195.week(),
                        "W",
                      );
                    case "w":
                    case "ww":
                      return ganttDiagramLVOFAZNHValue197.s(
                        ganttDiagramLVOFAZNHValue195.week(),
                        ganttDiagramLVOFAZNHParam63 === "w" ? 1 : 2,
                        "0",
                      );
                    case "W":
                    case "WW":
                      return ganttDiagramLVOFAZNHValue197.s(
                        ganttDiagramLVOFAZNHValue195.isoWeek(),
                        ganttDiagramLVOFAZNHParam63 === "W" ? 1 : 2,
                        "0",
                      );
                    case "k":
                    case "kk":
                      return ganttDiagramLVOFAZNHValue197.s(
                        String(
                          ganttDiagramLVOFAZNHValue195.$H === 0
                            ? 24
                            : ganttDiagramLVOFAZNHValue195.$H,
                        ),
                        ganttDiagramLVOFAZNHParam63 === "k" ? 1 : 2,
                        "0",
                      );
                    case "X":
                      return Math.floor(
                        ganttDiagramLVOFAZNHValue195.$d.getTime() / 1e3,
                      );
                    case "x":
                      return ganttDiagramLVOFAZNHValue195.$d.getTime();
                    case "z":
                      return (
                        "[" + ganttDiagramLVOFAZNHValue195.offsetName() + "]"
                      );
                    case "zzz":
                      return (
                        "[" +
                        ganttDiagramLVOFAZNHValue195.offsetName("long") +
                        "]"
                      );
                    default:
                      return ganttDiagramLVOFAZNHParam63;
                  }
                },
              );
            return ganttDiagramLVOFAZNHValue192.bind(this)(
              ganttDiagramLVOFAZNHValue198,
            );
          };
        };
      });
    },
  ),
  ganttDiagramLVOFAZNHValue4 = dist(),
  ganttDiagramLVOFAZNHValue5 = toEsModule(chunkAGHRB4JFA(), 1),
  ganttDiagramLVOFAZNHValue6 = toEsModule(ganttDiagramLVOFAZNHValue1(), 1),
  ganttDiagramLVOFAZNHValue7 = toEsModule(ganttDiagramLVOFAZNHValue2(), 1),
  ganttDiagramLVOFAZNHValue8 = toEsModule(ganttDiagramLVOFAZNHValue3(), 1),
  ganttDiagramLVOFAZNHValue9 = (function () {
    var ganttDiagramLVOFAZNHValue78 = chunkAGHRB4JFN(function (
        ganttDiagramLVOFAZNHParam170,
        ganttDiagramLVOFAZNHParam171,
        ganttDiagramLVOFAZNHParam172,
        ganttDiagramLVOFAZNHParam173,
      ) {
        for (
          ganttDiagramLVOFAZNHParam172 ||= {},
            ganttDiagramLVOFAZNHParam173 = ganttDiagramLVOFAZNHParam170.length;
          ganttDiagramLVOFAZNHParam173--;
          ganttDiagramLVOFAZNHParam172[
            ganttDiagramLVOFAZNHParam170[ganttDiagramLVOFAZNHParam173]
          ] = ganttDiagramLVOFAZNHParam171
        );
        return ganttDiagramLVOFAZNHParam172;
      }, "o"),
      ganttDiagramLVOFAZNHValue79 = [
        6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 33, 35, 36, 38, 40,
      ],
      ganttDiagramLVOFAZNHValue80 = [1, 26],
      ganttDiagramLVOFAZNHValue81 = [1, 27],
      ganttDiagramLVOFAZNHValue82 = [1, 28],
      ganttDiagramLVOFAZNHValue83 = [1, 29],
      ganttDiagramLVOFAZNHValue84 = [1, 30],
      ganttDiagramLVOFAZNHValue85 = [1, 31],
      ganttDiagramLVOFAZNHValue86 = [1, 32],
      ganttDiagramLVOFAZNHValue87 = [1, 33],
      ganttDiagramLVOFAZNHValue88 = [1, 34],
      ganttDiagramLVOFAZNHValue89 = [1, 9],
      ganttDiagramLVOFAZNHValue90 = [1, 10],
      ganttDiagramLVOFAZNHValue91 = [1, 11],
      ganttDiagramLVOFAZNHValue92 = [1, 12],
      ganttDiagramLVOFAZNHValue93 = [1, 13],
      ganttDiagramLVOFAZNHValue94 = [1, 14],
      ganttDiagramLVOFAZNHValue95 = [1, 15],
      ganttDiagramLVOFAZNHValue96 = [1, 16],
      ganttDiagramLVOFAZNHValue97 = [1, 19],
      ganttDiagramLVOFAZNHValue98 = [1, 20],
      ganttDiagramLVOFAZNHValue99 = [1, 21],
      ganttDiagramLVOFAZNHValue100 = [1, 22],
      ganttDiagramLVOFAZNHValue101 = [1, 23],
      ganttDiagramLVOFAZNHValue102 = [1, 25],
      ganttDiagramLVOFAZNHValue103 = [1, 35],
      ganttDiagramLVOFAZNHValue104 = {
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
          ganttDiagramLVOFAZNHParam16,
          ganttDiagramLVOFAZNHParam17,
          ganttDiagramLVOFAZNHParam18,
          ganttDiagramLVOFAZNHParam19,
          ganttDiagramLVOFAZNHParam20,
          ganttDiagramLVOFAZNHParam21,
          ganttDiagramLVOFAZNHParam22,
        ) {
          var ganttDiagramLVOFAZNHValue162 =
            ganttDiagramLVOFAZNHParam21.length - 1;
          switch (ganttDiagramLVOFAZNHParam20) {
            case 1:
              return ganttDiagramLVOFAZNHParam21[
                ganttDiagramLVOFAZNHValue162 - 1
              ];
            case 2:
              this.$ = [];
              break;
            case 3:
              ganttDiagramLVOFAZNHParam21[
                ganttDiagramLVOFAZNHValue162 - 1
              ].push(ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162]);
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1];
              break;
            case 4:
            case 5:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162];
              break;
            case 6:
            case 7:
              this.$ = [];
              break;
            case 8:
              ganttDiagramLVOFAZNHParam19.setWeekday("monday");
              break;
            case 9:
              ganttDiagramLVOFAZNHParam19.setWeekday("tuesday");
              break;
            case 10:
              ganttDiagramLVOFAZNHParam19.setWeekday("wednesday");
              break;
            case 11:
              ganttDiagramLVOFAZNHParam19.setWeekday("thursday");
              break;
            case 12:
              ganttDiagramLVOFAZNHParam19.setWeekday("friday");
              break;
            case 13:
              ganttDiagramLVOFAZNHParam19.setWeekday("saturday");
              break;
            case 14:
              ganttDiagramLVOFAZNHParam19.setWeekday("sunday");
              break;
            case 15:
              ganttDiagramLVOFAZNHParam19.setWeekend("friday");
              break;
            case 16:
              ganttDiagramLVOFAZNHParam19.setWeekend("saturday");
              break;
            case 17:
              ganttDiagramLVOFAZNHParam19.setDateFormat(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(11),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(11);
              break;
            case 18:
              ganttDiagramLVOFAZNHParam19.enableInclusiveEndDates();
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(18);
              break;
            case 19:
              ganttDiagramLVOFAZNHParam19.TopAxis();
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(8);
              break;
            case 20:
              ganttDiagramLVOFAZNHParam19.setAxisFormat(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(11),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(11);
              break;
            case 21:
              ganttDiagramLVOFAZNHParam19.setTickInterval(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(13),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(13);
              break;
            case 22:
              ganttDiagramLVOFAZNHParam19.setExcludes(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(9),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(9);
              break;
            case 23:
              ganttDiagramLVOFAZNHParam19.setIncludes(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(9),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(9);
              break;
            case 24:
              ganttDiagramLVOFAZNHParam19.setTodayMarker(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(12),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(12);
              break;
            case 27:
              ganttDiagramLVOFAZNHParam19.setDiagramTitle(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(6),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(6);
              break;
            case 28:
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].trim();
              ganttDiagramLVOFAZNHParam19.setAccTitle(this.$);
              break;
            case 29:
            case 30:
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].trim();
              ganttDiagramLVOFAZNHParam19.setAccDescription(this.$);
              break;
            case 31:
              ganttDiagramLVOFAZNHParam19.addSection(
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(8),
              );
              this.$ =
                ganttDiagramLVOFAZNHParam21[
                  ganttDiagramLVOFAZNHValue162
                ].substr(8);
              break;
            case 33:
              ganttDiagramLVOFAZNHParam19.addTask(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              this.$ = "task";
              break;
            case 34:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
                null,
              );
              break;
            case 35:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              break;
            case 36:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                null,
              );
              ganttDiagramLVOFAZNHParam19.setLink(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              break;
            case 37:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
              );
              ganttDiagramLVOFAZNHParam19.setLink(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              break;
            case 38:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
                null,
              );
              ganttDiagramLVOFAZNHParam19.setLink(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
              );
              break;
            case 39:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3];
              ganttDiagramLVOFAZNHParam19.setClickEvent(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              ganttDiagramLVOFAZNHParam19.setLink(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2],
              );
              break;
            case 40:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1];
              ganttDiagramLVOFAZNHParam19.setLink(
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1],
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162],
              );
              break;
            case 41:
            case 47:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162];
              break;
            case 42:
            case 43:
            case 45:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162];
              break;
            case 44:
            case 46:
              this.$ =
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 3] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 2] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162 - 1] +
                " " +
                ganttDiagramLVOFAZNHParam21[ganttDiagramLVOFAZNHValue162];
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
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 2], {
            5: 3,
          }),
          {
            6: [1, 4],
            7: 5,
            8: [1, 6],
            9: 7,
            10: [1, 8],
            11: 17,
            12: ganttDiagramLVOFAZNHValue80,
            13: ganttDiagramLVOFAZNHValue81,
            14: ganttDiagramLVOFAZNHValue82,
            15: ganttDiagramLVOFAZNHValue83,
            16: ganttDiagramLVOFAZNHValue84,
            17: ganttDiagramLVOFAZNHValue85,
            18: ganttDiagramLVOFAZNHValue86,
            19: 18,
            20: ganttDiagramLVOFAZNHValue87,
            21: ganttDiagramLVOFAZNHValue88,
            22: ganttDiagramLVOFAZNHValue89,
            23: ganttDiagramLVOFAZNHValue90,
            24: ganttDiagramLVOFAZNHValue91,
            25: ganttDiagramLVOFAZNHValue92,
            26: ganttDiagramLVOFAZNHValue93,
            27: ganttDiagramLVOFAZNHValue94,
            28: ganttDiagramLVOFAZNHValue95,
            29: ganttDiagramLVOFAZNHValue96,
            30: ganttDiagramLVOFAZNHValue97,
            31: ganttDiagramLVOFAZNHValue98,
            33: ganttDiagramLVOFAZNHValue99,
            35: ganttDiagramLVOFAZNHValue100,
            36: ganttDiagramLVOFAZNHValue101,
            37: 24,
            38: ganttDiagramLVOFAZNHValue102,
            40: ganttDiagramLVOFAZNHValue103,
          },
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 7], {
            1: [2, 1],
          }),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 3]),
          {
            9: 36,
            11: 17,
            12: ganttDiagramLVOFAZNHValue80,
            13: ganttDiagramLVOFAZNHValue81,
            14: ganttDiagramLVOFAZNHValue82,
            15: ganttDiagramLVOFAZNHValue83,
            16: ganttDiagramLVOFAZNHValue84,
            17: ganttDiagramLVOFAZNHValue85,
            18: ganttDiagramLVOFAZNHValue86,
            19: 18,
            20: ganttDiagramLVOFAZNHValue87,
            21: ganttDiagramLVOFAZNHValue88,
            22: ganttDiagramLVOFAZNHValue89,
            23: ganttDiagramLVOFAZNHValue90,
            24: ganttDiagramLVOFAZNHValue91,
            25: ganttDiagramLVOFAZNHValue92,
            26: ganttDiagramLVOFAZNHValue93,
            27: ganttDiagramLVOFAZNHValue94,
            28: ganttDiagramLVOFAZNHValue95,
            29: ganttDiagramLVOFAZNHValue96,
            30: ganttDiagramLVOFAZNHValue97,
            31: ganttDiagramLVOFAZNHValue98,
            33: ganttDiagramLVOFAZNHValue99,
            35: ganttDiagramLVOFAZNHValue100,
            36: ganttDiagramLVOFAZNHValue101,
            37: 24,
            38: ganttDiagramLVOFAZNHValue102,
            40: ganttDiagramLVOFAZNHValue103,
          },
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 5]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 6]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 17]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 18]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 19]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 20]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 21]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 22]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 23]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 24]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 25]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 26]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 27]),
          {
            32: [1, 37],
          },
          {
            34: [1, 38],
          },
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 30]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 31]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 32]),
          {
            39: [1, 39],
          },
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 8]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 9]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 10]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 11]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 12]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 13]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 14]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 15]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 16]),
          {
            41: [1, 40],
            43: [1, 41],
          },
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 4]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 28]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 29]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 33]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 34], {
            42: [1, 42],
            43: [1, 43],
          }),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 40], {
            41: [1, 44],
          }),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 35], {
            43: [1, 45],
          }),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 36]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 38], {
            42: [1, 46],
          }),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 37]),
          ganttDiagramLVOFAZNHValue78(ganttDiagramLVOFAZNHValue79, [2, 39]),
        ],
        defaultActions: {},
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHParam157,
          ganttDiagramLVOFAZNHParam158,
        ) {
          if (ganttDiagramLVOFAZNHParam158.recoverable)
            this.trace(ganttDiagramLVOFAZNHParam157);
          else {
            var ganttDiagramLVOFAZNHValue380 = Error(
              ganttDiagramLVOFAZNHParam157,
            );
            throw (
              (ganttDiagramLVOFAZNHValue380.hash =
                ganttDiagramLVOFAZNHParam158),
              ganttDiagramLVOFAZNHValue380
            );
          }
        }, "parseError"),
        parse: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam15) {
          var ganttDiagramLVOFAZNHValue133 = this,
            ganttDiagramLVOFAZNHValue134 = [0],
            ganttDiagramLVOFAZNHValue135 = [],
            ganttDiagramLVOFAZNHValue136 = [null],
            ganttDiagramLVOFAZNHValue137 = [],
            ganttDiagramLVOFAZNHValue138 = this.table,
            ganttDiagramLVOFAZNHValue139 = "",
            ganttDiagramLVOFAZNHValue140 = 0,
            ganttDiagramLVOFAZNHValue141 = 0,
            ganttDiagramLVOFAZNHValue142 = 0,
            ganttDiagramLVOFAZNHValue145 =
              ganttDiagramLVOFAZNHValue137.slice.call(arguments, 1),
            ganttDiagramLVOFAZNHValue146 = Object.create(this.lexer),
            ganttDiagramLVOFAZNHValue147 = {
              yy: {},
            };
          for (var ganttDiagramLVOFAZNHValue148 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              ganttDiagramLVOFAZNHValue148,
            ) &&
              (ganttDiagramLVOFAZNHValue147.yy[ganttDiagramLVOFAZNHValue148] =
                this.yy[ganttDiagramLVOFAZNHValue148]);
          ganttDiagramLVOFAZNHValue146.setInput(
            ganttDiagramLVOFAZNHParam15,
            ganttDiagramLVOFAZNHValue147.yy,
          );
          ganttDiagramLVOFAZNHValue147.yy.lexer = ganttDiagramLVOFAZNHValue146;
          ganttDiagramLVOFAZNHValue147.yy.parser = this;
          ganttDiagramLVOFAZNHValue146.yylloc === undefined &&
            (ganttDiagramLVOFAZNHValue146.yylloc = {});
          var ganttDiagramLVOFAZNHValue149 =
            ganttDiagramLVOFAZNHValue146.yylloc;
          ganttDiagramLVOFAZNHValue137.push(ganttDiagramLVOFAZNHValue149);
          var ganttDiagramLVOFAZNHValue150 =
            ganttDiagramLVOFAZNHValue146.options &&
            ganttDiagramLVOFAZNHValue146.options.ranges;
          typeof ganttDiagramLVOFAZNHValue147.yy.parseError == "function"
            ? (this.parseError = ganttDiagramLVOFAZNHValue147.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function ganttDiagramLVOFAZNHHelper12(ganttDiagramLVOFAZNHParam175) {
            ganttDiagramLVOFAZNHValue134.length -=
              2 * ganttDiagramLVOFAZNHParam175;
            ganttDiagramLVOFAZNHValue136.length -= ganttDiagramLVOFAZNHParam175;
            ganttDiagramLVOFAZNHValue137.length -= ganttDiagramLVOFAZNHParam175;
          }
          chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper12, "popStack");
          function ganttDiagramLVOFAZNHHelper13() {
            var ganttDiagramLVOFAZNHValue354 =
              ganttDiagramLVOFAZNHValue135.pop() ||
              ganttDiagramLVOFAZNHValue146.lex() ||
              1;
            return (
              typeof ganttDiagramLVOFAZNHValue354 != "number" &&
                (ganttDiagramLVOFAZNHValue354 instanceof Array &&
                  ((ganttDiagramLVOFAZNHValue135 =
                    ganttDiagramLVOFAZNHValue354),
                  (ganttDiagramLVOFAZNHValue354 =
                    ganttDiagramLVOFAZNHValue135.pop())),
                (ganttDiagramLVOFAZNHValue354 =
                  ganttDiagramLVOFAZNHValue133.symbols_[
                    ganttDiagramLVOFAZNHValue354
                  ] || ganttDiagramLVOFAZNHValue354)),
              ganttDiagramLVOFAZNHValue354
            );
          }
          chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper13, "lex");
          for (
            var ganttDiagramLVOFAZNHValue151,
              ganttDiagramLVOFAZNHValue152,
              ganttDiagramLVOFAZNHValue153,
              ganttDiagramLVOFAZNHValue154,
              ganttDiagramLVOFAZNHValue155,
              ganttDiagramLVOFAZNHValue156 = {},
              ganttDiagramLVOFAZNHValue157,
              ganttDiagramLVOFAZNHValue158,
              ganttDiagramLVOFAZNHValue159,
              ganttDiagramLVOFAZNHValue160;
            ;

          ) {
            if (
              ((ganttDiagramLVOFAZNHValue153 =
                ganttDiagramLVOFAZNHValue134[
                  ganttDiagramLVOFAZNHValue134.length - 1
                ]),
              this.defaultActions[ganttDiagramLVOFAZNHValue153]
                ? (ganttDiagramLVOFAZNHValue154 =
                    this.defaultActions[ganttDiagramLVOFAZNHValue153])
                : ((ganttDiagramLVOFAZNHValue151 ??=
                    ganttDiagramLVOFAZNHHelper13()),
                  (ganttDiagramLVOFAZNHValue154 =
                    ganttDiagramLVOFAZNHValue138[
                      ganttDiagramLVOFAZNHValue153
                    ] &&
                    ganttDiagramLVOFAZNHValue138[ganttDiagramLVOFAZNHValue153][
                      ganttDiagramLVOFAZNHValue151
                    ])),
              ganttDiagramLVOFAZNHValue154 === undefined ||
                !ganttDiagramLVOFAZNHValue154.length ||
                !ganttDiagramLVOFAZNHValue154[0])
            ) {
              var ganttDiagramLVOFAZNHValue161 = "";
              for (ganttDiagramLVOFAZNHValue157 in ((ganttDiagramLVOFAZNHValue160 =
                []),
              ganttDiagramLVOFAZNHValue138[ganttDiagramLVOFAZNHValue153]))
                this.terminals_[ganttDiagramLVOFAZNHValue157] &&
                  ganttDiagramLVOFAZNHValue157 > 2 &&
                  ganttDiagramLVOFAZNHValue160.push(
                    "'" + this.terminals_[ganttDiagramLVOFAZNHValue157] + "'",
                  );
              ganttDiagramLVOFAZNHValue161 =
                ganttDiagramLVOFAZNHValue146.showPosition
                  ? "Parse error on line " +
                    (ganttDiagramLVOFAZNHValue140 + 1) +
                    ":\n" +
                    ganttDiagramLVOFAZNHValue146.showPosition() +
                    "\nExpecting " +
                    ganttDiagramLVOFAZNHValue160.join(", ") +
                    ", got '" +
                    (this.terminals_[ganttDiagramLVOFAZNHValue151] ||
                      ganttDiagramLVOFAZNHValue151) +
                    "'"
                  : "Parse error on line " +
                    (ganttDiagramLVOFAZNHValue140 + 1) +
                    ": Unexpected " +
                    (ganttDiagramLVOFAZNHValue151 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[ganttDiagramLVOFAZNHValue151] ||
                          ganttDiagramLVOFAZNHValue151) +
                        "'");
              this.parseError(ganttDiagramLVOFAZNHValue161, {
                text: ganttDiagramLVOFAZNHValue146.match,
                token:
                  this.terminals_[ganttDiagramLVOFAZNHValue151] ||
                  ganttDiagramLVOFAZNHValue151,
                line: ganttDiagramLVOFAZNHValue146.yylineno,
                loc: ganttDiagramLVOFAZNHValue149,
                expected: ganttDiagramLVOFAZNHValue160,
              });
            }
            if (
              ganttDiagramLVOFAZNHValue154[0] instanceof Array &&
              ganttDiagramLVOFAZNHValue154.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  ganttDiagramLVOFAZNHValue153 +
                  ", token: " +
                  ganttDiagramLVOFAZNHValue151,
              );
            switch (ganttDiagramLVOFAZNHValue154[0]) {
              case 1:
                ganttDiagramLVOFAZNHValue134.push(ganttDiagramLVOFAZNHValue151);
                ganttDiagramLVOFAZNHValue136.push(
                  ganttDiagramLVOFAZNHValue146.yytext,
                );
                ganttDiagramLVOFAZNHValue137.push(
                  ganttDiagramLVOFAZNHValue146.yylloc,
                );
                ganttDiagramLVOFAZNHValue134.push(
                  ganttDiagramLVOFAZNHValue154[1],
                );
                ganttDiagramLVOFAZNHValue151 = null;
                ganttDiagramLVOFAZNHValue152
                  ? ((ganttDiagramLVOFAZNHValue151 =
                      ganttDiagramLVOFAZNHValue152),
                    (ganttDiagramLVOFAZNHValue152 = null))
                  : ((ganttDiagramLVOFAZNHValue141 =
                      ganttDiagramLVOFAZNHValue146.yyleng),
                    (ganttDiagramLVOFAZNHValue139 =
                      ganttDiagramLVOFAZNHValue146.yytext),
                    (ganttDiagramLVOFAZNHValue140 =
                      ganttDiagramLVOFAZNHValue146.yylineno),
                    (ganttDiagramLVOFAZNHValue149 =
                      ganttDiagramLVOFAZNHValue146.yylloc),
                    ganttDiagramLVOFAZNHValue142 > 0 &&
                      ganttDiagramLVOFAZNHValue142--);
                break;
              case 2:
                if (
                  ((ganttDiagramLVOFAZNHValue158 =
                    this.productions_[ganttDiagramLVOFAZNHValue154[1]][1]),
                  (ganttDiagramLVOFAZNHValue156.$ =
                    ganttDiagramLVOFAZNHValue136[
                      ganttDiagramLVOFAZNHValue136.length -
                        ganttDiagramLVOFAZNHValue158
                    ]),
                  (ganttDiagramLVOFAZNHValue156._$ = {
                    first_line:
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length -
                          (ganttDiagramLVOFAZNHValue158 || 1)
                      ].first_line,
                    last_line:
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length - 1
                      ].last_line,
                    first_column:
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length -
                          (ganttDiagramLVOFAZNHValue158 || 1)
                      ].first_column,
                    last_column:
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length - 1
                      ].last_column,
                  }),
                  ganttDiagramLVOFAZNHValue150 &&
                    (ganttDiagramLVOFAZNHValue156._$.range = [
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length -
                          (ganttDiagramLVOFAZNHValue158 || 1)
                      ].range[0],
                      ganttDiagramLVOFAZNHValue137[
                        ganttDiagramLVOFAZNHValue137.length - 1
                      ].range[1],
                    ]),
                  (ganttDiagramLVOFAZNHValue155 = this.performAction.apply(
                    ganttDiagramLVOFAZNHValue156,
                    [
                      ganttDiagramLVOFAZNHValue139,
                      ganttDiagramLVOFAZNHValue141,
                      ganttDiagramLVOFAZNHValue140,
                      ganttDiagramLVOFAZNHValue147.yy,
                      ganttDiagramLVOFAZNHValue154[1],
                      ganttDiagramLVOFAZNHValue136,
                      ganttDiagramLVOFAZNHValue137,
                    ].concat(ganttDiagramLVOFAZNHValue145),
                  )),
                  ganttDiagramLVOFAZNHValue155 !== undefined)
                )
                  return ganttDiagramLVOFAZNHValue155;
                ganttDiagramLVOFAZNHValue158 &&
                  ((ganttDiagramLVOFAZNHValue134 =
                    ganttDiagramLVOFAZNHValue134.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHValue158 * 2,
                    )),
                  (ganttDiagramLVOFAZNHValue136 =
                    ganttDiagramLVOFAZNHValue136.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHValue158,
                    )),
                  (ganttDiagramLVOFAZNHValue137 =
                    ganttDiagramLVOFAZNHValue137.slice(
                      0,
                      -1 * ganttDiagramLVOFAZNHValue158,
                    )));
                ganttDiagramLVOFAZNHValue134.push(
                  this.productions_[ganttDiagramLVOFAZNHValue154[1]][0],
                );
                ganttDiagramLVOFAZNHValue136.push(
                  ganttDiagramLVOFAZNHValue156.$,
                );
                ganttDiagramLVOFAZNHValue137.push(
                  ganttDiagramLVOFAZNHValue156._$,
                );
                ganttDiagramLVOFAZNHValue159 =
                  ganttDiagramLVOFAZNHValue138[
                    ganttDiagramLVOFAZNHValue134[
                      ganttDiagramLVOFAZNHValue134.length - 2
                    ]
                  ][
                    ganttDiagramLVOFAZNHValue134[
                      ganttDiagramLVOFAZNHValue134.length - 1
                    ]
                  ];
                ganttDiagramLVOFAZNHValue134.push(ganttDiagramLVOFAZNHValue159);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    ganttDiagramLVOFAZNHValue104.lexer = (function () {
      return {
        EOF: 1,
        parseError: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHParam159,
          ganttDiagramLVOFAZNHParam160,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              ganttDiagramLVOFAZNHParam159,
              ganttDiagramLVOFAZNHParam160,
            );
          else throw Error(ganttDiagramLVOFAZNHParam159);
        }, "parseError"),
        setInput: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHParam81,
          ganttDiagramLVOFAZNHParam82,
        ) {
          return (
            (this.yy = ganttDiagramLVOFAZNHParam82 || this.yy || {}),
            (this._input = ganttDiagramLVOFAZNHParam81),
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
          var ganttDiagramLVOFAZNHValue300 = this._input[0];
          return (
            (this.yytext += ganttDiagramLVOFAZNHValue300),
            this.yyleng++,
            this.offset++,
            (this.match += ganttDiagramLVOFAZNHValue300),
            (this.matched += ganttDiagramLVOFAZNHValue300),
            ganttDiagramLVOFAZNHValue300.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            ganttDiagramLVOFAZNHValue300
          );
        }, "input"),
        unput: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam57) {
          var ganttDiagramLVOFAZNHValue203 = ganttDiagramLVOFAZNHParam57.length,
            ganttDiagramLVOFAZNHValue204 =
              ganttDiagramLVOFAZNHParam57.split(/(?:\r\n?|\n)/g);
          this._input = ganttDiagramLVOFAZNHParam57 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - ganttDiagramLVOFAZNHValue203,
          );
          this.offset -= ganttDiagramLVOFAZNHValue203;
          var ganttDiagramLVOFAZNHValue205 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          ganttDiagramLVOFAZNHValue204.length - 1 &&
            (this.yylineno -= ganttDiagramLVOFAZNHValue204.length - 1);
          var ganttDiagramLVOFAZNHValue206 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: ganttDiagramLVOFAZNHValue204
                ? (ganttDiagramLVOFAZNHValue204.length ===
                  ganttDiagramLVOFAZNHValue205.length
                    ? this.yylloc.first_column
                    : 0) +
                  ganttDiagramLVOFAZNHValue205[
                    ganttDiagramLVOFAZNHValue205.length -
                      ganttDiagramLVOFAZNHValue204.length
                  ].length -
                  ganttDiagramLVOFAZNHValue204[0].length
                : this.yylloc.first_column - ganttDiagramLVOFAZNHValue203,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                ganttDiagramLVOFAZNHValue206[0],
                ganttDiagramLVOFAZNHValue206[0] +
                  this.yyleng -
                  ganttDiagramLVOFAZNHValue203,
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
        less: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam183) {
          this.unput(this.match.slice(ganttDiagramLVOFAZNHParam183));
        }, "less"),
        pastInput: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHValue346 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (ganttDiagramLVOFAZNHValue346.length > 20 ? "..." : "") +
            ganttDiagramLVOFAZNHValue346.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHValue343 = this.match;
          return (
            ganttDiagramLVOFAZNHValue343.length < 20 &&
              (ganttDiagramLVOFAZNHValue343 += this._input.substr(
                0,
                20 - ganttDiagramLVOFAZNHValue343.length,
              )),
            (
              ganttDiagramLVOFAZNHValue343.substr(0, 20) +
              (ganttDiagramLVOFAZNHValue343.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: chunkAGHRB4JFN(function () {
          var ganttDiagramLVOFAZNHValue364 = this.pastInput(),
            ganttDiagramLVOFAZNHValue365 = Array(
              ganttDiagramLVOFAZNHValue364.length + 1,
            ).join("-");
          return (
            ganttDiagramLVOFAZNHValue364 +
            this.upcomingInput() +
            "\n" +
            ganttDiagramLVOFAZNHValue365 +
            "^"
          );
        }, "showPosition"),
        test_match: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHParam31,
          ganttDiagramLVOFAZNHParam32,
        ) {
          var ganttDiagramLVOFAZNHValue168,
            ganttDiagramLVOFAZNHValue169,
            ganttDiagramLVOFAZNHValue170;
          if (
            (this.options.backtrack_lexer &&
              ((ganttDiagramLVOFAZNHValue170 = {
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
                (ganttDiagramLVOFAZNHValue170.yylloc.range =
                  this.yylloc.range.slice(0))),
            (ganttDiagramLVOFAZNHValue169 =
              ganttDiagramLVOFAZNHParam31[0].match(/(?:\r\n?|\n).*/g)),
            ganttDiagramLVOFAZNHValue169 &&
              (this.yylineno += ganttDiagramLVOFAZNHValue169.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: ganttDiagramLVOFAZNHValue169
                ? ganttDiagramLVOFAZNHValue169[
                    ganttDiagramLVOFAZNHValue169.length - 1
                  ].length -
                  ganttDiagramLVOFAZNHValue169[
                    ganttDiagramLVOFAZNHValue169.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  ganttDiagramLVOFAZNHParam31[0].length,
            }),
            (this.yytext += ganttDiagramLVOFAZNHParam31[0]),
            (this.match += ganttDiagramLVOFAZNHParam31[0]),
            (this.matches = ganttDiagramLVOFAZNHParam31),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              ganttDiagramLVOFAZNHParam31[0].length,
            )),
            (this.matched += ganttDiagramLVOFAZNHParam31[0]),
            (ganttDiagramLVOFAZNHValue168 = this.performAction.call(
              this,
              this.yy,
              this,
              ganttDiagramLVOFAZNHParam32,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            ganttDiagramLVOFAZNHValue168)
          )
            return ganttDiagramLVOFAZNHValue168;
          if (this._backtrack) {
            for (var ganttDiagramLVOFAZNHValue171 in ganttDiagramLVOFAZNHValue170)
              this[ganttDiagramLVOFAZNHValue171] =
                ganttDiagramLVOFAZNHValue170[ganttDiagramLVOFAZNHValue171];
            return false;
          }
          return false;
        }, "test_match"),
        next: chunkAGHRB4JFN(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var ganttDiagramLVOFAZNHValue216,
            ganttDiagramLVOFAZNHValue217,
            ganttDiagramLVOFAZNHValue218,
            ganttDiagramLVOFAZNHValue219;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var ganttDiagramLVOFAZNHValue220 = this._currentRules(),
              ganttDiagramLVOFAZNHValue221 = 0;
            ganttDiagramLVOFAZNHValue221 < ganttDiagramLVOFAZNHValue220.length;
            ganttDiagramLVOFAZNHValue221++
          )
            if (
              ((ganttDiagramLVOFAZNHValue218 = this._input.match(
                this.rules[
                  ganttDiagramLVOFAZNHValue220[ganttDiagramLVOFAZNHValue221]
                ],
              )),
              ganttDiagramLVOFAZNHValue218 &&
                (!ganttDiagramLVOFAZNHValue217 ||
                  ganttDiagramLVOFAZNHValue218[0].length >
                    ganttDiagramLVOFAZNHValue217[0].length))
            ) {
              if (
                ((ganttDiagramLVOFAZNHValue217 = ganttDiagramLVOFAZNHValue218),
                (ganttDiagramLVOFAZNHValue219 = ganttDiagramLVOFAZNHValue221),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((ganttDiagramLVOFAZNHValue216 = this.test_match(
                    ganttDiagramLVOFAZNHValue218,
                    ganttDiagramLVOFAZNHValue220[ganttDiagramLVOFAZNHValue221],
                  )),
                  ganttDiagramLVOFAZNHValue216 !== false)
                )
                  return ganttDiagramLVOFAZNHValue216;
                if (this._backtrack) {
                  ganttDiagramLVOFAZNHValue217 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return ganttDiagramLVOFAZNHValue217
            ? ((ganttDiagramLVOFAZNHValue216 = this.test_match(
                ganttDiagramLVOFAZNHValue217,
                ganttDiagramLVOFAZNHValue220[ganttDiagramLVOFAZNHValue219],
              )),
              ganttDiagramLVOFAZNHValue216 === false
                ? false
                : ganttDiagramLVOFAZNHValue216)
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
        begin: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam188) {
          this.conditionStack.push(ganttDiagramLVOFAZNHParam188);
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
        topState: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam149) {
          return (
            (ganttDiagramLVOFAZNHParam149 =
              this.conditionStack.length -
              1 -
              Math.abs(ganttDiagramLVOFAZNHParam149 || 0)),
            ganttDiagramLVOFAZNHParam149 >= 0
              ? this.conditionStack[ganttDiagramLVOFAZNHParam149]
              : "INITIAL"
          );
        }, "topState"),
        pushState: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam208) {
          this.begin(ganttDiagramLVOFAZNHParam208);
        }, "pushState"),
        stateStackSize: chunkAGHRB4JFN(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: chunkAGHRB4JFN(function (
          ganttDiagramLVOFAZNHParam27,
          ganttDiagramLVOFAZNHParam28,
          ganttDiagramLVOFAZNHParam29,
          ganttDiagramLVOFAZNHParam30,
        ) {
          switch (ganttDiagramLVOFAZNHParam29) {
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
    function ganttDiagramLVOFAZNHHelper2() {
      this.yy = {};
    }
    return (
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper2, "Parser"),
      (ganttDiagramLVOFAZNHHelper2.prototype = ganttDiagramLVOFAZNHValue104),
      (ganttDiagramLVOFAZNHValue104.Parser = ganttDiagramLVOFAZNHHelper2),
      new ganttDiagramLVOFAZNHHelper2()
    );
  })();
ganttDiagramLVOFAZNHValue9.parser = ganttDiagramLVOFAZNHValue9;
var ganttDiagramLVOFAZNHValue10 = ganttDiagramLVOFAZNHValue9;
ganttDiagramLVOFAZNHValue5.default.extend(ganttDiagramLVOFAZNHValue6.default);
ganttDiagramLVOFAZNHValue5.default.extend(ganttDiagramLVOFAZNHValue7.default);
ganttDiagramLVOFAZNHValue5.default.extend(ganttDiagramLVOFAZNHValue8.default);
var ganttDiagramLVOFAZNHValue11 = {
    friday: 5,
    saturday: 6,
  },
  ganttDiagramLVOFAZNHValue12 = "",
  ganttDiagramLVOFAZNHValue13 = "",
  ganttDiagramLVOFAZNHValue14 = undefined,
  ganttDiagramLVOFAZNHValue15 = "",
  ganttDiagramLVOFAZNHValue16 = [],
  ganttDiagramLVOFAZNHValue17 = [],
  ganttDiagramLVOFAZNHValue18 = new Map(),
  ganttDiagramLVOFAZNHValue19 = [],
  ganttDiagramLVOFAZNHValue20 = [],
  ganttDiagramLVOFAZNHValue21 = "",
  ganttDiagramLVOFAZNHValue22 = "",
  ganttDiagramLVOFAZNHValue23 = ["active", "done", "crit", "milestone", "vert"],
  ganttDiagramLVOFAZNHValue24 = [],
  ganttDiagramLVOFAZNHValue25 = false,
  ganttDiagramLVOFAZNHValue26 = false,
  _e = "sunday",
  ganttDiagramLVOFAZNHValue27 = "saturday",
  ganttDiagramLVOFAZNHValue28 = 0,
  ganttDiagramLVOFAZNHValue29 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHValue19 = [];
    ganttDiagramLVOFAZNHValue20 = [];
    ganttDiagramLVOFAZNHValue21 = "";
    ganttDiagramLVOFAZNHValue24 = [];
    ganttDiagramLVOFAZNHValue60 = 0;
    ganttDiagramLVOFAZNHValue63 = undefined;
    ganttDiagramLVOFAZNHValue64 = undefined;
    ganttDiagramLVOFAZNHValue65 = [];
    ganttDiagramLVOFAZNHValue12 = "";
    ganttDiagramLVOFAZNHValue13 = "";
    ganttDiagramLVOFAZNHValue22 = "";
    ganttDiagramLVOFAZNHValue14 = undefined;
    ganttDiagramLVOFAZNHValue15 = "";
    ganttDiagramLVOFAZNHValue16 = [];
    ganttDiagramLVOFAZNHValue17 = [];
    ganttDiagramLVOFAZNHValue25 = false;
    ganttDiagramLVOFAZNHValue26 = false;
    ganttDiagramLVOFAZNHValue28 = 0;
    ganttDiagramLVOFAZNHValue18 = new Map();
    _chunkABZYJK2DK();
    _e = "sunday";
    ganttDiagramLVOFAZNHValue27 = "saturday";
  }, "clear"),
  be = chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam213) {
    ganttDiagramLVOFAZNHValue13 = ganttDiagramLVOFAZNHParam213;
  }, "setAxisFormat"),
  ganttDiagramLVOFAZNHValue30 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue13;
  }, "getAxisFormat"),
  ganttDiagramLVOFAZNHValue31 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam216,
  ) {
    ganttDiagramLVOFAZNHValue14 = ganttDiagramLVOFAZNHParam216;
  }, "setTickInterval"),
  ganttDiagramLVOFAZNHValue32 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue14;
  }, "getTickInterval"),
  ganttDiagramLVOFAZNHValue33 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam217,
  ) {
    ganttDiagramLVOFAZNHValue15 = ganttDiagramLVOFAZNHParam217;
  }, "setTodayMarker"),
  ganttDiagramLVOFAZNHValue34 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue15;
  }, "getTodayMarker"),
  ganttDiagramLVOFAZNHValue35 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam218,
  ) {
    ganttDiagramLVOFAZNHValue12 = ganttDiagramLVOFAZNHParam218;
  }, "setDateFormat"),
  ganttDiagramLVOFAZNHValue36 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHValue25 = true;
  }, "enableInclusiveEndDates"),
  ganttDiagramLVOFAZNHValue37 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue25;
  }, "endDatesAreInclusive"),
  ganttDiagramLVOFAZNHValue38 = chunkAGHRB4JFN(function () {
    ganttDiagramLVOFAZNHValue26 = true;
  }, "enableTopAxis"),
  ganttDiagramLVOFAZNHValue39 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue26;
  }, "topAxisEnabled"),
  ganttDiagramLVOFAZNHValue40 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam214,
  ) {
    ganttDiagramLVOFAZNHValue22 = ganttDiagramLVOFAZNHParam214;
  }, "setDisplayMode"),
  ganttDiagramLVOFAZNHValue41 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue22;
  }, "getDisplayMode"),
  ganttDiagramLVOFAZNHValue42 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue12;
  }, "getDateFormat"),
  ganttDiagramLVOFAZNHValue43 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam180,
  ) {
    ganttDiagramLVOFAZNHValue16 = ganttDiagramLVOFAZNHParam180
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setIncludes"),
  ganttDiagramLVOFAZNHValue44 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue16;
  }, "getIncludes"),
  ganttDiagramLVOFAZNHValue45 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam181,
  ) {
    ganttDiagramLVOFAZNHValue17 = ganttDiagramLVOFAZNHParam181
      .toLowerCase()
      .split(/[\s,]+/);
  }, "setExcludes"),
  ganttDiagramLVOFAZNHValue46 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue17;
  }, "getExcludes"),
  ganttDiagramLVOFAZNHValue47 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue18;
  }, "getLinks"),
  ganttDiagramLVOFAZNHValue48 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam209,
  ) {
    ganttDiagramLVOFAZNHValue21 = ganttDiagramLVOFAZNHParam209;
    ganttDiagramLVOFAZNHValue19.push(ganttDiagramLVOFAZNHParam209);
  }, "addSection"),
  ganttDiagramLVOFAZNHValue49 = chunkAGHRB4JFN(function () {
    return ganttDiagramLVOFAZNHValue19;
  }, "getSections"),
  ganttDiagramLVOFAZNHValue50 = chunkAGHRB4JFN(function () {
    let ganttDiagramLVOFAZNHValue389 = ganttDiagramLVOFAZNHValue70(),
      ganttDiagramLVOFAZNHValue390 = 0;
    for (
      ;
      !ganttDiagramLVOFAZNHValue389 && ganttDiagramLVOFAZNHValue390 < 10;

    ) {
      ganttDiagramLVOFAZNHValue389 = ganttDiagramLVOFAZNHValue70();
      ganttDiagramLVOFAZNHValue390++;
    }
    return (
      (ganttDiagramLVOFAZNHValue20 = ganttDiagramLVOFAZNHValue65),
      ganttDiagramLVOFAZNHValue20
    );
  }, "getTasks"),
  ganttDiagramLVOFAZNHValue51 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam98,
    ganttDiagramLVOFAZNHParam99,
    ganttDiagramLVOFAZNHParam100,
    ganttDiagramLVOFAZNHParam101,
  ) {
    let ganttDiagramLVOFAZNHValue306 = ganttDiagramLVOFAZNHParam98.format(
        ganttDiagramLVOFAZNHParam99.trim(),
      ),
      ganttDiagramLVOFAZNHValue307 =
        ganttDiagramLVOFAZNHParam98.format("YYYY-MM-DD");
    return ganttDiagramLVOFAZNHParam101.includes(
      ganttDiagramLVOFAZNHValue306,
    ) || ganttDiagramLVOFAZNHParam101.includes(ganttDiagramLVOFAZNHValue307)
      ? false
      : (ganttDiagramLVOFAZNHParam100.includes("weekends") &&
            (ganttDiagramLVOFAZNHParam98.isoWeekday() ===
              ganttDiagramLVOFAZNHValue11[ganttDiagramLVOFAZNHValue27] ||
              ganttDiagramLVOFAZNHParam98.isoWeekday() ===
                ganttDiagramLVOFAZNHValue11[ganttDiagramLVOFAZNHValue27] +
                  1)) ||
          ganttDiagramLVOFAZNHParam100.includes(
            ganttDiagramLVOFAZNHParam98.format("dddd").toLowerCase(),
          )
        ? true
        : ganttDiagramLVOFAZNHParam100.includes(ganttDiagramLVOFAZNHValue306) ||
          ganttDiagramLVOFAZNHParam100.includes(ganttDiagramLVOFAZNHValue307);
  }, "isInvalidDate"),
  ganttDiagramLVOFAZNHValue52 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam215,
  ) {
    _e = ganttDiagramLVOFAZNHParam215;
  }, "setWeekday"),
  ganttDiagramLVOFAZNHValue53 = chunkAGHRB4JFN(function () {
    return _e;
  }, "getWeekday"),
  ganttDiagramLVOFAZNHValue54 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam219,
  ) {
    ganttDiagramLVOFAZNHValue27 = ganttDiagramLVOFAZNHParam219;
  }, "setWeekend"),
  ganttDiagramLVOFAZNHValue55 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam86,
    ganttDiagramLVOFAZNHParam87,
    ganttDiagramLVOFAZNHParam88,
    ganttDiagramLVOFAZNHParam89,
  ) {
    if (
      !ganttDiagramLVOFAZNHParam88.length ||
      ganttDiagramLVOFAZNHParam86.manualEndTime
    )
      return;
    let ganttDiagramLVOFAZNHValue284;
    ganttDiagramLVOFAZNHValue284 =
      ganttDiagramLVOFAZNHParam86.startTime instanceof Date
        ? ganttDiagramLVOFAZNHValue5.default(
            ganttDiagramLVOFAZNHParam86.startTime,
          )
        : ganttDiagramLVOFAZNHValue5.default(
            ganttDiagramLVOFAZNHParam86.startTime,
            ganttDiagramLVOFAZNHParam87,
            true,
          );
    ganttDiagramLVOFAZNHValue284 = ganttDiagramLVOFAZNHValue284.add(1, "d");
    let ganttDiagramLVOFAZNHValue285;
    ganttDiagramLVOFAZNHValue285 =
      ganttDiagramLVOFAZNHParam86.endTime instanceof Date
        ? ganttDiagramLVOFAZNHValue5.default(
            ganttDiagramLVOFAZNHParam86.endTime,
          )
        : ganttDiagramLVOFAZNHValue5.default(
            ganttDiagramLVOFAZNHParam86.endTime,
            ganttDiagramLVOFAZNHParam87,
            true,
          );
    let [ganttDiagramLVOFAZNHValue286, ganttDiagramLVOFAZNHValue287] =
      ganttDiagramLVOFAZNHValue56(
        ganttDiagramLVOFAZNHValue284,
        ganttDiagramLVOFAZNHValue285,
        ganttDiagramLVOFAZNHParam87,
        ganttDiagramLVOFAZNHParam88,
        ganttDiagramLVOFAZNHParam89,
      );
    ganttDiagramLVOFAZNHParam86.endTime = ganttDiagramLVOFAZNHValue286.toDate();
    ganttDiagramLVOFAZNHParam86.renderEndTime = ganttDiagramLVOFAZNHValue287;
  }, "checkTaskDates"),
  ganttDiagramLVOFAZNHValue56 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam138,
    ganttDiagramLVOFAZNHParam139,
    ganttDiagramLVOFAZNHParam140,
    ganttDiagramLVOFAZNHParam141,
    ganttDiagramLVOFAZNHParam142,
  ) {
    let ganttDiagramLVOFAZNHValue352 = false,
      ganttDiagramLVOFAZNHValue353 = null;
    for (; ganttDiagramLVOFAZNHParam138 <= ganttDiagramLVOFAZNHParam139; ) {
      ganttDiagramLVOFAZNHValue352 ||
        (ganttDiagramLVOFAZNHValue353 = ganttDiagramLVOFAZNHParam139.toDate());
      ganttDiagramLVOFAZNHValue352 = ganttDiagramLVOFAZNHValue51(
        ganttDiagramLVOFAZNHParam138,
        ganttDiagramLVOFAZNHParam140,
        ganttDiagramLVOFAZNHParam141,
        ganttDiagramLVOFAZNHParam142,
      );
      ganttDiagramLVOFAZNHValue352 &&
        (ganttDiagramLVOFAZNHParam139 = ganttDiagramLVOFAZNHParam139.add(
          1,
          "d",
        ));
      ganttDiagramLVOFAZNHParam138 = ganttDiagramLVOFAZNHParam138.add(1, "d");
    }
    return [ganttDiagramLVOFAZNHParam139, ganttDiagramLVOFAZNHValue353];
  }, "fixTaskDates"),
  ganttDiagramLVOFAZNHValue57 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam60,
    ganttDiagramLVOFAZNHParam61,
    ganttDiagramLVOFAZNHParam62,
  ) {
    if (
      ((ganttDiagramLVOFAZNHParam62 = ganttDiagramLVOFAZNHParam62.trim()),
      (ganttDiagramLVOFAZNHParam61.trim() === "x" ||
        ganttDiagramLVOFAZNHParam61.trim() === "X") &&
        /^\d+$/.test(ganttDiagramLVOFAZNHParam62))
    )
      return new Date(Number(ganttDiagramLVOFAZNHParam62));
    let ganttDiagramLVOFAZNHValue229 = /^after\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramLVOFAZNHParam62,
    );
    if (ganttDiagramLVOFAZNHValue229 !== null) {
      let ganttDiagramLVOFAZNHValue337 = null;
      for (let ganttDiagramLVOFAZNHValue371 of ganttDiagramLVOFAZNHValue229.groups.ids.split(
        " ",
      )) {
        let ganttDiagramLVOFAZNHValue394 = ganttDiagramLVOFAZNHValue68(
          ganttDiagramLVOFAZNHValue371,
        );
        ganttDiagramLVOFAZNHValue394 !== undefined &&
          (!ganttDiagramLVOFAZNHValue337 ||
            ganttDiagramLVOFAZNHValue394.endTime >
              ganttDiagramLVOFAZNHValue337.endTime) &&
          (ganttDiagramLVOFAZNHValue337 = ganttDiagramLVOFAZNHValue394);
      }
      if (ganttDiagramLVOFAZNHValue337)
        return ganttDiagramLVOFAZNHValue337.endTime;
      let ganttDiagramLVOFAZNHValue338 = new Date();
      return (
        ganttDiagramLVOFAZNHValue338.setHours(0, 0, 0, 0),
        ganttDiagramLVOFAZNHValue338
      );
    }
    let ganttDiagramLVOFAZNHValue230 = ganttDiagramLVOFAZNHValue5.default(
      ganttDiagramLVOFAZNHParam62,
      ganttDiagramLVOFAZNHParam61.trim(),
      true,
    );
    if (ganttDiagramLVOFAZNHValue230.isValid())
      return ganttDiagramLVOFAZNHValue230.toDate();
    {
      chunkAGHRB4JFR.debug("Invalid date:" + ganttDiagramLVOFAZNHParam62);
      chunkAGHRB4JFR.debug(
        "With date format:" + ganttDiagramLVOFAZNHParam61.trim(),
      );
      let ganttDiagramLVOFAZNHValue330 = new Date(ganttDiagramLVOFAZNHParam62);
      if (
        ganttDiagramLVOFAZNHValue330 === undefined ||
        isNaN(ganttDiagramLVOFAZNHValue330.getTime()) ||
        ganttDiagramLVOFAZNHValue330.getFullYear() < -10000 ||
        ganttDiagramLVOFAZNHValue330.getFullYear() > 1e4
      )
        throw Error("Invalid date:" + ganttDiagramLVOFAZNHParam62);
      return ganttDiagramLVOFAZNHValue330;
    }
  }, "getStartDate"),
  ganttDiagramLVOFAZNHValue58 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam144,
  ) {
    let ganttDiagramLVOFAZNHValue355 = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(
      ganttDiagramLVOFAZNHParam144.trim(),
    );
    return ganttDiagramLVOFAZNHValue355 === null
      ? [NaN, "ms"]
      : [
          Number.parseFloat(ganttDiagramLVOFAZNHValue355[1]),
          ganttDiagramLVOFAZNHValue355[2],
        ];
  }, "parseDuration"),
  ganttDiagramLVOFAZNHValue59 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam70,
    ganttDiagramLVOFAZNHParam71,
    ganttDiagramLVOFAZNHParam72,
    ganttDiagramLVOFAZNHParam73 = false,
  ) {
    ganttDiagramLVOFAZNHParam72 = ganttDiagramLVOFAZNHParam72.trim();
    let ganttDiagramLVOFAZNHValue256 = /^until\s+(?<ids>[\d\w- ]+)/.exec(
      ganttDiagramLVOFAZNHParam72,
    );
    if (ganttDiagramLVOFAZNHValue256 !== null) {
      let ganttDiagramLVOFAZNHValue335 = null;
      for (let ganttDiagramLVOFAZNHValue368 of ganttDiagramLVOFAZNHValue256.groups.ids.split(
        " ",
      )) {
        let ganttDiagramLVOFAZNHValue392 = ganttDiagramLVOFAZNHValue68(
          ganttDiagramLVOFAZNHValue368,
        );
        ganttDiagramLVOFAZNHValue392 !== undefined &&
          (!ganttDiagramLVOFAZNHValue335 ||
            ganttDiagramLVOFAZNHValue392.startTime <
              ganttDiagramLVOFAZNHValue335.startTime) &&
          (ganttDiagramLVOFAZNHValue335 = ganttDiagramLVOFAZNHValue392);
      }
      if (ganttDiagramLVOFAZNHValue335)
        return ganttDiagramLVOFAZNHValue335.startTime;
      let ganttDiagramLVOFAZNHValue336 = new Date();
      return (
        ganttDiagramLVOFAZNHValue336.setHours(0, 0, 0, 0),
        ganttDiagramLVOFAZNHValue336
      );
    }
    let ganttDiagramLVOFAZNHValue257 = ganttDiagramLVOFAZNHValue5.default(
      ganttDiagramLVOFAZNHParam72,
      ganttDiagramLVOFAZNHParam71.trim(),
      true,
    );
    if (ganttDiagramLVOFAZNHValue257.isValid())
      return (
        ganttDiagramLVOFAZNHParam73 &&
          (ganttDiagramLVOFAZNHValue257 = ganttDiagramLVOFAZNHValue257.add(
            1,
            "d",
          )),
        ganttDiagramLVOFAZNHValue257.toDate()
      );
    let ganttDiagramLVOFAZNHValue258 = ganttDiagramLVOFAZNHValue5.default(
        ganttDiagramLVOFAZNHParam70,
      ),
      [ganttDiagramLVOFAZNHValue259, ganttDiagramLVOFAZNHValue260] =
        ganttDiagramLVOFAZNHValue58(ganttDiagramLVOFAZNHParam72);
    if (!Number.isNaN(ganttDiagramLVOFAZNHValue259)) {
      let ganttDiagramLVOFAZNHValue402 = ganttDiagramLVOFAZNHValue258.add(
        ganttDiagramLVOFAZNHValue259,
        ganttDiagramLVOFAZNHValue260,
      );
      ganttDiagramLVOFAZNHValue402.isValid() &&
        (ganttDiagramLVOFAZNHValue258 = ganttDiagramLVOFAZNHValue402);
    }
    return ganttDiagramLVOFAZNHValue258.toDate();
  }, "getEndDate"),
  ganttDiagramLVOFAZNHValue60 = 0,
  ganttDiagramLVOFAZNHValue61 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam176,
  ) {
    return ganttDiagramLVOFAZNHParam176 === undefined
      ? ((ganttDiagramLVOFAZNHValue60 += 1),
        "task" + ganttDiagramLVOFAZNHValue60)
      : ganttDiagramLVOFAZNHParam176;
  }, "parseId"),
  ganttDiagramLVOFAZNHValue62 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam68,
    ganttDiagramLVOFAZNHParam69,
  ) {
    let ganttDiagramLVOFAZNHValue252;
    ganttDiagramLVOFAZNHValue252 =
      ganttDiagramLVOFAZNHParam69.substr(0, 1) === ":"
        ? ganttDiagramLVOFAZNHParam69.substr(
            1,
            ganttDiagramLVOFAZNHParam69.length,
          )
        : ganttDiagramLVOFAZNHParam69;
    let ganttDiagramLVOFAZNHValue253 = ganttDiagramLVOFAZNHValue252.split(","),
      ganttDiagramLVOFAZNHValue254 = {};
    ganttDiagramLVOFAZNHHelper1(
      ganttDiagramLVOFAZNHValue253,
      ganttDiagramLVOFAZNHValue254,
      ganttDiagramLVOFAZNHValue23,
    );
    for (
      let ganttDiagramLVOFAZNHValue400 = 0;
      ganttDiagramLVOFAZNHValue400 < ganttDiagramLVOFAZNHValue253.length;
      ganttDiagramLVOFAZNHValue400++
    )
      ganttDiagramLVOFAZNHValue253[ganttDiagramLVOFAZNHValue400] =
        ganttDiagramLVOFAZNHValue253[ganttDiagramLVOFAZNHValue400].trim();
    let ganttDiagramLVOFAZNHValue255 = "";
    switch (ganttDiagramLVOFAZNHValue253.length) {
      case 1:
        ganttDiagramLVOFAZNHValue254.id = ganttDiagramLVOFAZNHValue61();
        ganttDiagramLVOFAZNHValue254.startTime =
          ganttDiagramLVOFAZNHParam68.endTime;
        ganttDiagramLVOFAZNHValue255 = ganttDiagramLVOFAZNHValue253[0];
        break;
      case 2:
        ganttDiagramLVOFAZNHValue254.id = ganttDiagramLVOFAZNHValue61();
        ganttDiagramLVOFAZNHValue254.startTime = ganttDiagramLVOFAZNHValue57(
          undefined,
          ganttDiagramLVOFAZNHValue12,
          ganttDiagramLVOFAZNHValue253[0],
        );
        ganttDiagramLVOFAZNHValue255 = ganttDiagramLVOFAZNHValue253[1];
        break;
      case 3:
        ganttDiagramLVOFAZNHValue254.id = ganttDiagramLVOFAZNHValue61(
          ganttDiagramLVOFAZNHValue253[0],
        );
        ganttDiagramLVOFAZNHValue254.startTime = ganttDiagramLVOFAZNHValue57(
          undefined,
          ganttDiagramLVOFAZNHValue12,
          ganttDiagramLVOFAZNHValue253[1],
        );
        ganttDiagramLVOFAZNHValue255 = ganttDiagramLVOFAZNHValue253[2];
        break;
      default:
    }
    return (
      ganttDiagramLVOFAZNHValue255 &&
        ((ganttDiagramLVOFAZNHValue254.endTime = ganttDiagramLVOFAZNHValue59(
          ganttDiagramLVOFAZNHValue254.startTime,
          ganttDiagramLVOFAZNHValue12,
          ganttDiagramLVOFAZNHValue255,
          ganttDiagramLVOFAZNHValue25,
        )),
        (ganttDiagramLVOFAZNHValue254.manualEndTime = ganttDiagramLVOFAZNHValue5
          .default(ganttDiagramLVOFAZNHValue255, "YYYY-MM-DD", true)
          .isValid()),
        ganttDiagramLVOFAZNHValue55(
          ganttDiagramLVOFAZNHValue254,
          ganttDiagramLVOFAZNHValue12,
          ganttDiagramLVOFAZNHValue17,
          ganttDiagramLVOFAZNHValue16,
        )),
      ganttDiagramLVOFAZNHValue254
    );
  }, "compileData"),
  $e = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam74,
    ganttDiagramLVOFAZNHParam75,
  ) {
    let ganttDiagramLVOFAZNHValue261;
    ganttDiagramLVOFAZNHValue261 =
      ganttDiagramLVOFAZNHParam75.substr(0, 1) === ":"
        ? ganttDiagramLVOFAZNHParam75.substr(
            1,
            ganttDiagramLVOFAZNHParam75.length,
          )
        : ganttDiagramLVOFAZNHParam75;
    let ganttDiagramLVOFAZNHValue262 = ganttDiagramLVOFAZNHValue261.split(","),
      ganttDiagramLVOFAZNHValue263 = {};
    ganttDiagramLVOFAZNHHelper1(
      ganttDiagramLVOFAZNHValue262,
      ganttDiagramLVOFAZNHValue263,
      ganttDiagramLVOFAZNHValue23,
    );
    for (
      let ganttDiagramLVOFAZNHValue401 = 0;
      ganttDiagramLVOFAZNHValue401 < ganttDiagramLVOFAZNHValue262.length;
      ganttDiagramLVOFAZNHValue401++
    )
      ganttDiagramLVOFAZNHValue262[ganttDiagramLVOFAZNHValue401] =
        ganttDiagramLVOFAZNHValue262[ganttDiagramLVOFAZNHValue401].trim();
    switch (ganttDiagramLVOFAZNHValue262.length) {
      case 1:
        ganttDiagramLVOFAZNHValue263.id = ganttDiagramLVOFAZNHValue61();
        ganttDiagramLVOFAZNHValue263.startTime = {
          type: "prevTaskEnd",
          id: ganttDiagramLVOFAZNHParam74,
        };
        ganttDiagramLVOFAZNHValue263.endTime = {
          data: ganttDiagramLVOFAZNHValue262[0],
        };
        break;
      case 2:
        ganttDiagramLVOFAZNHValue263.id = ganttDiagramLVOFAZNHValue61();
        ganttDiagramLVOFAZNHValue263.startTime = {
          type: "getStartDate",
          startData: ganttDiagramLVOFAZNHValue262[0],
        };
        ganttDiagramLVOFAZNHValue263.endTime = {
          data: ganttDiagramLVOFAZNHValue262[1],
        };
        break;
      case 3:
        ganttDiagramLVOFAZNHValue263.id = ganttDiagramLVOFAZNHValue61(
          ganttDiagramLVOFAZNHValue262[0],
        );
        ganttDiagramLVOFAZNHValue263.startTime = {
          type: "getStartDate",
          startData: ganttDiagramLVOFAZNHValue262[1],
        };
        ganttDiagramLVOFAZNHValue263.endTime = {
          data: ganttDiagramLVOFAZNHValue262[2],
        };
        break;
      default:
    }
    return ganttDiagramLVOFAZNHValue263;
  }, "parseData"),
  ganttDiagramLVOFAZNHValue63,
  ganttDiagramLVOFAZNHValue64,
  ganttDiagramLVOFAZNHValue65 = [],
  ganttDiagramLVOFAZNHValue66 = {},
  ganttDiagramLVOFAZNHValue67 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam79,
    ganttDiagramLVOFAZNHParam80,
  ) {
    let ganttDiagramLVOFAZNHValue274 = {
        section: ganttDiagramLVOFAZNHValue21,
        type: ganttDiagramLVOFAZNHValue21,
        processed: false,
        manualEndTime: false,
        renderEndTime: null,
        raw: {
          data: ganttDiagramLVOFAZNHParam80,
        },
        task: ganttDiagramLVOFAZNHParam79,
        classes: [],
      },
      ganttDiagramLVOFAZNHValue275 = $e(
        ganttDiagramLVOFAZNHValue64,
        ganttDiagramLVOFAZNHParam80,
      );
    ganttDiagramLVOFAZNHValue274.raw.startTime =
      ganttDiagramLVOFAZNHValue275.startTime;
    ganttDiagramLVOFAZNHValue274.raw.endTime =
      ganttDiagramLVOFAZNHValue275.endTime;
    ganttDiagramLVOFAZNHValue274.id = ganttDiagramLVOFAZNHValue275.id;
    ganttDiagramLVOFAZNHValue274.prevTaskId = ganttDiagramLVOFAZNHValue64;
    ganttDiagramLVOFAZNHValue274.active = ganttDiagramLVOFAZNHValue275.active;
    ganttDiagramLVOFAZNHValue274.done = ganttDiagramLVOFAZNHValue275.done;
    ganttDiagramLVOFAZNHValue274.crit = ganttDiagramLVOFAZNHValue275.crit;
    ganttDiagramLVOFAZNHValue274.milestone =
      ganttDiagramLVOFAZNHValue275.milestone;
    ganttDiagramLVOFAZNHValue274.vert = ganttDiagramLVOFAZNHValue275.vert;
    ganttDiagramLVOFAZNHValue274.order = ganttDiagramLVOFAZNHValue28;
    ganttDiagramLVOFAZNHValue28++;
    let ganttDiagramLVOFAZNHValue276 = ganttDiagramLVOFAZNHValue65.push(
      ganttDiagramLVOFAZNHValue274,
    );
    ganttDiagramLVOFAZNHValue64 = ganttDiagramLVOFAZNHValue274.id;
    ganttDiagramLVOFAZNHValue66[ganttDiagramLVOFAZNHValue274.id] =
      ganttDiagramLVOFAZNHValue276 - 1;
  }, "addTask"),
  ganttDiagramLVOFAZNHValue68 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam195,
  ) {
    let ganttDiagramLVOFAZNHValue403 =
      ganttDiagramLVOFAZNHValue66[ganttDiagramLVOFAZNHParam195];
    return ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHValue403];
  }, "findTaskById"),
  ganttDiagramLVOFAZNHValue69 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam107,
    ganttDiagramLVOFAZNHParam108,
  ) {
    let ganttDiagramLVOFAZNHValue321 = {
        section: ganttDiagramLVOFAZNHValue21,
        type: ganttDiagramLVOFAZNHValue21,
        description: ganttDiagramLVOFAZNHParam107,
        task: ganttDiagramLVOFAZNHParam107,
        classes: [],
      },
      ganttDiagramLVOFAZNHValue322 = ganttDiagramLVOFAZNHValue62(
        ganttDiagramLVOFAZNHValue63,
        ganttDiagramLVOFAZNHParam108,
      );
    ganttDiagramLVOFAZNHValue321.startTime =
      ganttDiagramLVOFAZNHValue322.startTime;
    ganttDiagramLVOFAZNHValue321.endTime = ganttDiagramLVOFAZNHValue322.endTime;
    ganttDiagramLVOFAZNHValue321.id = ganttDiagramLVOFAZNHValue322.id;
    ganttDiagramLVOFAZNHValue321.active = ganttDiagramLVOFAZNHValue322.active;
    ganttDiagramLVOFAZNHValue321.done = ganttDiagramLVOFAZNHValue322.done;
    ganttDiagramLVOFAZNHValue321.crit = ganttDiagramLVOFAZNHValue322.crit;
    ganttDiagramLVOFAZNHValue321.milestone =
      ganttDiagramLVOFAZNHValue322.milestone;
    ganttDiagramLVOFAZNHValue321.vert = ganttDiagramLVOFAZNHValue322.vert;
    ganttDiagramLVOFAZNHValue63 = ganttDiagramLVOFAZNHValue321;
    ganttDiagramLVOFAZNHValue20.push(ganttDiagramLVOFAZNHValue321);
  }, "addTaskOrg"),
  ganttDiagramLVOFAZNHValue70 = chunkAGHRB4JFN(function () {
    let ganttDiagramLVOFAZNHValue231 = chunkAGHRB4JFN(function (
        ganttDiagramLVOFAZNHParam76,
      ) {
        let ganttDiagramLVOFAZNHValue264 =
            ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76],
          ganttDiagramLVOFAZNHValue265 = "";
        switch (
          ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].raw.startTime
            .type
        ) {
          case "prevTaskEnd":
            ganttDiagramLVOFAZNHValue264.startTime =
              ganttDiagramLVOFAZNHValue68(
                ganttDiagramLVOFAZNHValue264.prevTaskId,
              ).endTime;
            break;
          case "getStartDate":
            ganttDiagramLVOFAZNHValue265 = ganttDiagramLVOFAZNHValue57(
              undefined,
              ganttDiagramLVOFAZNHValue12,
              ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].raw
                .startTime.startData,
            );
            ganttDiagramLVOFAZNHValue265 &&
              (ganttDiagramLVOFAZNHValue65[
                ganttDiagramLVOFAZNHParam76
              ].startTime = ganttDiagramLVOFAZNHValue265);
            break;
        }
        return (
          ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].startTime &&
            ((ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].endTime =
              ganttDiagramLVOFAZNHValue59(
                ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76]
                  .startTime,
                ganttDiagramLVOFAZNHValue12,
                ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].raw
                  .endTime.data,
                ganttDiagramLVOFAZNHValue25,
              )),
            ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].endTime &&
              ((ganttDiagramLVOFAZNHValue65[
                ganttDiagramLVOFAZNHParam76
              ].processed = true),
              (ganttDiagramLVOFAZNHValue65[
                ganttDiagramLVOFAZNHParam76
              ].manualEndTime = ganttDiagramLVOFAZNHValue5
                .default(
                  ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].raw
                    .endTime.data,
                  "YYYY-MM-DD",
                  true,
                )
                .isValid()),
              ganttDiagramLVOFAZNHValue55(
                ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76],
                ganttDiagramLVOFAZNHValue12,
                ganttDiagramLVOFAZNHValue17,
                ganttDiagramLVOFAZNHValue16,
              ))),
          ganttDiagramLVOFAZNHValue65[ganttDiagramLVOFAZNHParam76].processed
        );
      }, "compileTask"),
      ganttDiagramLVOFAZNHValue232 = true;
    for (let [
      ganttDiagramLVOFAZNHValue398,
      ganttDiagramLVOFAZNHValue399,
    ] of ganttDiagramLVOFAZNHValue65.entries()) {
      ganttDiagramLVOFAZNHValue231(ganttDiagramLVOFAZNHValue398);
      ganttDiagramLVOFAZNHValue232 &&= ganttDiagramLVOFAZNHValue399.processed;
    }
    return ganttDiagramLVOFAZNHValue232;
  }, "compileTasks"),
  at = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam113,
    ganttDiagramLVOFAZNHParam114,
  ) {
    let ganttDiagramLVOFAZNHValue332 = ganttDiagramLVOFAZNHParam114;
    _chunkABZYJK2DB().securityLevel !== "loose" &&
      (ganttDiagramLVOFAZNHValue332 = ganttDiagramLVOFAZNHValue4.sanitizeUrl(
        ganttDiagramLVOFAZNHParam114,
      ));
    ganttDiagramLVOFAZNHParam113.split(",").forEach(function (item) {
      ganttDiagramLVOFAZNHValue68(item) !== undefined &&
        (ganttDiagramLVOFAZNHValue73(item, () => {
          window.open(ganttDiagramLVOFAZNHValue332, "_self");
        }),
        ganttDiagramLVOFAZNHValue18.set(item, ganttDiagramLVOFAZNHValue332));
    });
    ganttDiagramLVOFAZNHValue71(ganttDiagramLVOFAZNHParam113, "clickable");
  }, "setLink"),
  ganttDiagramLVOFAZNHValue71 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam154,
    ganttDiagramLVOFAZNHParam155,
  ) {
    ganttDiagramLVOFAZNHParam154.split(",").forEach(function (item) {
      let ganttDiagramLVOFAZNHValue396 = ganttDiagramLVOFAZNHValue68(item);
      ganttDiagramLVOFAZNHValue396 !== undefined &&
        ganttDiagramLVOFAZNHValue396.classes.push(ganttDiagramLVOFAZNHParam155);
    });
  }, "setClass"),
  ganttDiagramLVOFAZNHValue72 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam83,
    ganttDiagramLVOFAZNHParam84,
    ganttDiagramLVOFAZNHParam85,
  ) {
    if (
      _chunkABZYJK2DB().securityLevel !== "loose" ||
      ganttDiagramLVOFAZNHParam84 === undefined
    )
      return;
    let ganttDiagramLVOFAZNHValue283 = [];
    if (typeof ganttDiagramLVOFAZNHParam85 == "string") {
      ganttDiagramLVOFAZNHValue283 = ganttDiagramLVOFAZNHParam85.split(
        /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
      );
      for (
        let ganttDiagramLVOFAZNHValue360 = 0;
        ganttDiagramLVOFAZNHValue360 < ganttDiagramLVOFAZNHValue283.length;
        ganttDiagramLVOFAZNHValue360++
      ) {
        let ganttDiagramLVOFAZNHValue375 =
          ganttDiagramLVOFAZNHValue283[ganttDiagramLVOFAZNHValue360].trim();
        ganttDiagramLVOFAZNHValue375.startsWith('"') &&
          ganttDiagramLVOFAZNHValue375.endsWith('"') &&
          (ganttDiagramLVOFAZNHValue375 = ganttDiagramLVOFAZNHValue375.substr(
            1,
            ganttDiagramLVOFAZNHValue375.length - 2,
          ));
        ganttDiagramLVOFAZNHValue283[ganttDiagramLVOFAZNHValue360] =
          ganttDiagramLVOFAZNHValue375;
      }
    }
    ganttDiagramLVOFAZNHValue283.length === 0 &&
      ganttDiagramLVOFAZNHValue283.push(ganttDiagramLVOFAZNHParam83);
    ganttDiagramLVOFAZNHValue68(ganttDiagramLVOFAZNHParam83) !== undefined &&
      ganttDiagramLVOFAZNHValue73(ganttDiagramLVOFAZNHParam83, () => {
        chunkS3R3BYOJC.runFunc(
          ganttDiagramLVOFAZNHParam84,
          ...ganttDiagramLVOFAZNHValue283,
        );
      });
  }, "setClickFun"),
  ganttDiagramLVOFAZNHValue73 = chunkAGHRB4JFN(function (
    ganttDiagramLVOFAZNHParam105,
    ganttDiagramLVOFAZNHParam106,
  ) {
    ganttDiagramLVOFAZNHValue24.push(
      function () {
        let ganttDiagramLVOFAZNHValue362 = document.querySelector(
          `[id="${ganttDiagramLVOFAZNHParam105}"]`,
        );
        ganttDiagramLVOFAZNHValue362 !== null &&
          ganttDiagramLVOFAZNHValue362.addEventListener("click", function () {
            ganttDiagramLVOFAZNHParam106();
          });
      },
      function () {
        let ganttDiagramLVOFAZNHValue361 = document.querySelector(
          `[id="${ganttDiagramLVOFAZNHParam105}-text"]`,
        );
        ganttDiagramLVOFAZNHValue361 !== null &&
          ganttDiagramLVOFAZNHValue361.addEventListener("click", function () {
            ganttDiagramLVOFAZNHParam106();
          });
      },
    );
  }, "pushFun"),
  ganttDiagramLVOFAZNHValue74 = {
    getConfig: chunkAGHRB4JFN(() => _chunkABZYJK2DB().gantt, "getConfig"),
    clear: ganttDiagramLVOFAZNHValue29,
    setDateFormat: ganttDiagramLVOFAZNHValue35,
    getDateFormat: ganttDiagramLVOFAZNHValue42,
    enableInclusiveEndDates: ganttDiagramLVOFAZNHValue36,
    endDatesAreInclusive: ganttDiagramLVOFAZNHValue37,
    enableTopAxis: ganttDiagramLVOFAZNHValue38,
    topAxisEnabled: ganttDiagramLVOFAZNHValue39,
    setAxisFormat: be,
    getAxisFormat: ganttDiagramLVOFAZNHValue30,
    setTickInterval: ganttDiagramLVOFAZNHValue31,
    getTickInterval: ganttDiagramLVOFAZNHValue32,
    setTodayMarker: ganttDiagramLVOFAZNHValue33,
    getTodayMarker: ganttDiagramLVOFAZNHValue34,
    setAccTitle: chunkABZYJK2DN,
    getAccTitle: chunkABZYJK2DR,
    setDiagramTitle: chunkABZYJK2DU,
    getDiagramTitle: chunkABZYJK2DF,
    setDisplayMode: ganttDiagramLVOFAZNHValue40,
    getDisplayMode: ganttDiagramLVOFAZNHValue41,
    setAccDescription: chunkABZYJK2DZ,
    getAccDescription: chunkABZYJK2DJ,
    addSection: ganttDiagramLVOFAZNHValue48,
    getSections: ganttDiagramLVOFAZNHValue49,
    getTasks: ganttDiagramLVOFAZNHValue50,
    addTask: ganttDiagramLVOFAZNHValue67,
    findTaskById: ganttDiagramLVOFAZNHValue68,
    addTaskOrg: ganttDiagramLVOFAZNHValue69,
    setIncludes: ganttDiagramLVOFAZNHValue43,
    getIncludes: ganttDiagramLVOFAZNHValue44,
    setExcludes: ganttDiagramLVOFAZNHValue45,
    getExcludes: ganttDiagramLVOFAZNHValue46,
    setClickEvent: chunkAGHRB4JFN(function (
      ganttDiagramLVOFAZNHParam164,
      ganttDiagramLVOFAZNHParam165,
      ganttDiagramLVOFAZNHParam166,
    ) {
      ganttDiagramLVOFAZNHParam164.split(",").forEach(function (item) {
        ganttDiagramLVOFAZNHValue72(
          item,
          ganttDiagramLVOFAZNHParam165,
          ganttDiagramLVOFAZNHParam166,
        );
      });
      ganttDiagramLVOFAZNHValue71(ganttDiagramLVOFAZNHParam164, "clickable");
    }, "setClickEvent"),
    setLink: at,
    getLinks: ganttDiagramLVOFAZNHValue47,
    bindFunctions: chunkAGHRB4JFN(function (ganttDiagramLVOFAZNHParam185) {
      ganttDiagramLVOFAZNHValue24.forEach(function (item) {
        item(ganttDiagramLVOFAZNHParam185);
      });
    }, "bindFunctions"),
    parseDuration: ganttDiagramLVOFAZNHValue58,
    isInvalidDate: ganttDiagramLVOFAZNHValue51,
    setWeekday: ganttDiagramLVOFAZNHValue52,
    getWeekday: ganttDiagramLVOFAZNHValue53,
    setWeekend: ganttDiagramLVOFAZNHValue54,
  };
function ganttDiagramLVOFAZNHHelper1(
  ganttDiagramLVOFAZNHParam126,
  ganttDiagramLVOFAZNHParam127,
  ganttDiagramLVOFAZNHParam128,
) {
  let ganttDiagramLVOFAZNHValue342 = true;
  for (; ganttDiagramLVOFAZNHValue342; ) {
    ganttDiagramLVOFAZNHValue342 = false;
    ganttDiagramLVOFAZNHParam128.forEach(function (item) {
      let ganttDiagramLVOFAZNHValue372 = "^\\s*" + item + "\\s*$",
        ganttDiagramLVOFAZNHValue373 = new RegExp(ganttDiagramLVOFAZNHValue372);
      ganttDiagramLVOFAZNHParam126[0].match(ganttDiagramLVOFAZNHValue373) &&
        ((ganttDiagramLVOFAZNHParam127[item] = true),
        ganttDiagramLVOFAZNHParam126.shift(1),
        (ganttDiagramLVOFAZNHValue342 = true));
    });
  }
}
chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper1, "getTaskTags");
var ganttDiagramLVOFAZNHValue75 = chunkAGHRB4JFN(function () {
    chunkAGHRB4JFR.debug("Something is calling, setConf, remove the call");
  }, "setConf"),
  ganttDiagramLVOFAZNHValue76 = {
    monday: axisS,
    tuesday: axisD,
    wednesday: axisF,
    thursday: axisU,
    friday: axisO,
    saturday: axisC,
    sunday: axisL,
  },
  ganttDiagramLVOFAZNHValue77 = chunkAGHRB4JFN(
    (ganttDiagramLVOFAZNHParam109, ganttDiagramLVOFAZNHParam110) => {
      let ganttDiagramLVOFAZNHValue325 = [...ganttDiagramLVOFAZNHParam109].map(
          () => -1 / 0,
        ),
        ganttDiagramLVOFAZNHValue326 = [...ganttDiagramLVOFAZNHParam109].sort(
          (ganttDiagramLVOFAZNHParam178, ganttDiagramLVOFAZNHParam179) =>
            ganttDiagramLVOFAZNHParam178.startTime -
              ganttDiagramLVOFAZNHParam179.startTime ||
            ganttDiagramLVOFAZNHParam178.order -
              ganttDiagramLVOFAZNHParam179.order,
        ),
        ganttDiagramLVOFAZNHValue327 = 0;
      for (let ganttDiagramLVOFAZNHValue363 of ganttDiagramLVOFAZNHValue326)
        for (
          let ganttDiagramLVOFAZNHValue374 = 0;
          ganttDiagramLVOFAZNHValue374 < ganttDiagramLVOFAZNHValue325.length;
          ganttDiagramLVOFAZNHValue374++
        )
          if (
            ganttDiagramLVOFAZNHValue363.startTime >=
            ganttDiagramLVOFAZNHValue325[ganttDiagramLVOFAZNHValue374]
          ) {
            ganttDiagramLVOFAZNHValue325[ganttDiagramLVOFAZNHValue374] =
              ganttDiagramLVOFAZNHValue363.endTime;
            ganttDiagramLVOFAZNHValue363.order =
              ganttDiagramLVOFAZNHValue374 + ganttDiagramLVOFAZNHParam110;
            ganttDiagramLVOFAZNHValue374 > ganttDiagramLVOFAZNHValue327 &&
              (ganttDiagramLVOFAZNHValue327 = ganttDiagramLVOFAZNHValue374);
            break;
          }
      return ganttDiagramLVOFAZNHValue327;
    },
    "getMaxIntersections",
  ),
  $;
export const GanttDiagramLVOFAZNH = {
  parser: ganttDiagramLVOFAZNHValue10,
  db: ganttDiagramLVOFAZNHValue74,
  renderer: {
    setConf: ganttDiagramLVOFAZNHValue75,
    draw: chunkAGHRB4JFN(function (
      ganttDiagramLVOFAZNHParam1,
      ganttDiagramLVOFAZNHParam2,
      ganttDiagramLVOFAZNHParam3,
      ganttDiagramLVOFAZNHParam4,
    ) {
      let ganttDiagramLVOFAZNHValue105 = _chunkABZYJK2DB().gantt,
        ganttDiagramLVOFAZNHValue106 = _chunkABZYJK2DB().securityLevel,
        ganttDiagramLVOFAZNHValue107;
      ganttDiagramLVOFAZNHValue106 === "sandbox" &&
        (ganttDiagramLVOFAZNHValue107 = Src("#i" + ganttDiagramLVOFAZNHParam2));
      let ganttDiagramLVOFAZNHValue108 = Src(
          ganttDiagramLVOFAZNHValue106 === "sandbox"
            ? ganttDiagramLVOFAZNHValue107.nodes()[0].contentDocument.body
            : "body",
        ),
        ganttDiagramLVOFAZNHValue109 =
          ganttDiagramLVOFAZNHValue106 === "sandbox"
            ? ganttDiagramLVOFAZNHValue107.nodes()[0].contentDocument
            : document,
        ganttDiagramLVOFAZNHValue110 =
          ganttDiagramLVOFAZNHValue109.getElementById(
            ganttDiagramLVOFAZNHParam2,
          );
      $ = ganttDiagramLVOFAZNHValue110.parentElement.offsetWidth;
      $ === undefined && ($ = 1200);
      ganttDiagramLVOFAZNHValue105.useWidth !== undefined &&
        ($ = ganttDiagramLVOFAZNHValue105.useWidth);
      let ganttDiagramLVOFAZNHValue111 =
          ganttDiagramLVOFAZNHParam4.db.getTasks(),
        ganttDiagramLVOFAZNHValue112 = [];
      for (let ganttDiagramLVOFAZNHValue404 of ganttDiagramLVOFAZNHValue111)
        ganttDiagramLVOFAZNHValue112.push(ganttDiagramLVOFAZNHValue404.type);
      ganttDiagramLVOFAZNHValue112 = ganttDiagramLVOFAZNHHelper10(
        ganttDiagramLVOFAZNHValue112,
      );
      let ganttDiagramLVOFAZNHValue113 = {},
        ganttDiagramLVOFAZNHValue114 =
          2 * ganttDiagramLVOFAZNHValue105.topPadding;
      if (
        ganttDiagramLVOFAZNHParam4.db.getDisplayMode() === "compact" ||
        ganttDiagramLVOFAZNHValue105.displayMode === "compact"
      ) {
        let ganttDiagramLVOFAZNHValue333 = {};
        for (let ganttDiagramLVOFAZNHValue384 of ganttDiagramLVOFAZNHValue111)
          ganttDiagramLVOFAZNHValue333[ganttDiagramLVOFAZNHValue384.section] ===
          undefined
            ? (ganttDiagramLVOFAZNHValue333[
                ganttDiagramLVOFAZNHValue384.section
              ] = [ganttDiagramLVOFAZNHValue384])
            : ganttDiagramLVOFAZNHValue333[
                ganttDiagramLVOFAZNHValue384.section
              ].push(ganttDiagramLVOFAZNHValue384);
        let ganttDiagramLVOFAZNHValue334 = 0;
        for (let ganttDiagramLVOFAZNHValue378 of Object.keys(
          ganttDiagramLVOFAZNHValue333,
        )) {
          let ganttDiagramLVOFAZNHValue393 =
            ganttDiagramLVOFAZNHValue77(
              ganttDiagramLVOFAZNHValue333[ganttDiagramLVOFAZNHValue378],
              ganttDiagramLVOFAZNHValue334,
            ) + 1;
          ganttDiagramLVOFAZNHValue334 += ganttDiagramLVOFAZNHValue393;
          ganttDiagramLVOFAZNHValue114 +=
            ganttDiagramLVOFAZNHValue393 *
            (ganttDiagramLVOFAZNHValue105.barHeight +
              ganttDiagramLVOFAZNHValue105.barGap);
          ganttDiagramLVOFAZNHValue113[ganttDiagramLVOFAZNHValue378] =
            ganttDiagramLVOFAZNHValue393;
        }
      } else {
        ganttDiagramLVOFAZNHValue114 +=
          ganttDiagramLVOFAZNHValue111.length *
          (ganttDiagramLVOFAZNHValue105.barHeight +
            ganttDiagramLVOFAZNHValue105.barGap);
        for (let ganttDiagramLVOFAZNHValue397 of ganttDiagramLVOFAZNHValue112)
          ganttDiagramLVOFAZNHValue113[ganttDiagramLVOFAZNHValue397] =
            ganttDiagramLVOFAZNHValue111.filter(
              (item) => item.type === ganttDiagramLVOFAZNHValue397,
            ).length;
      }
      ganttDiagramLVOFAZNHValue110.setAttribute(
        "viewBox",
        "0 0 " + $ + " " + ganttDiagramLVOFAZNHValue114,
      );
      let ganttDiagramLVOFAZNHValue115 = ganttDiagramLVOFAZNHValue108.select(
          `[id="${ganttDiagramLVOFAZNHParam2}"]`,
        ),
        ganttDiagramLVOFAZNHValue116 = axisR()
          .domain([
            minT(
              ganttDiagramLVOFAZNHValue111,
              function (ganttDiagramLVOFAZNHParam204) {
                return ganttDiagramLVOFAZNHParam204.startTime;
              },
            ),
            minN(
              ganttDiagramLVOFAZNHValue111,
              function (ganttDiagramLVOFAZNHParam206) {
                return ganttDiagramLVOFAZNHParam206.endTime;
              },
            ),
          ])
          .rangeRound([
            0,
            $ -
              ganttDiagramLVOFAZNHValue105.leftPadding -
              ganttDiagramLVOFAZNHValue105.rightPadding,
          ]);
      function ganttDiagramLVOFAZNHHelper3(
        ganttDiagramLVOFAZNHParam162,
        ganttDiagramLVOFAZNHParam163,
      ) {
        let ganttDiagramLVOFAZNHValue381 =
            ganttDiagramLVOFAZNHParam162.startTime,
          ganttDiagramLVOFAZNHValue382 = ganttDiagramLVOFAZNHParam163.startTime,
          ganttDiagramLVOFAZNHValue383 = 0;
        return (
          ganttDiagramLVOFAZNHValue381 > ganttDiagramLVOFAZNHValue382
            ? (ganttDiagramLVOFAZNHValue383 = 1)
            : ganttDiagramLVOFAZNHValue381 < ganttDiagramLVOFAZNHValue382 &&
              (ganttDiagramLVOFAZNHValue383 = -1),
          ganttDiagramLVOFAZNHValue383
        );
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper3, "taskCompare");
      ganttDiagramLVOFAZNHValue111.sort(ganttDiagramLVOFAZNHHelper3);
      ganttDiagramLVOFAZNHHelper4(
        ganttDiagramLVOFAZNHValue111,
        $,
        ganttDiagramLVOFAZNHValue114,
      );
      _chunkABZYJK2DC(
        ganttDiagramLVOFAZNHValue115,
        ganttDiagramLVOFAZNHValue114,
        $,
        ganttDiagramLVOFAZNHValue105.useMaxWidth,
      );
      ganttDiagramLVOFAZNHValue115
        .append("text")
        .text(ganttDiagramLVOFAZNHParam4.db.getDiagramTitle())
        .attr("x", $ / 2)
        .attr("y", ganttDiagramLVOFAZNHValue105.titleTopMargin)
        .attr("class", "titleText");
      function ganttDiagramLVOFAZNHHelper4(
        ganttDiagramLVOFAZNHParam95,
        ganttDiagramLVOFAZNHParam96,
        ganttDiagramLVOFAZNHParam97,
      ) {
        let ganttDiagramLVOFAZNHValue301 =
            ganttDiagramLVOFAZNHValue105.barHeight,
          ganttDiagramLVOFAZNHValue302 =
            ganttDiagramLVOFAZNHValue301 + ganttDiagramLVOFAZNHValue105.barGap,
          ganttDiagramLVOFAZNHValue303 =
            ganttDiagramLVOFAZNHValue105.topPadding,
          ganttDiagramLVOFAZNHValue304 =
            ganttDiagramLVOFAZNHValue105.leftPadding,
          ganttDiagramLVOFAZNHValue305 = linearT()
            .domain([0, ganttDiagramLVOFAZNHValue112.length])
            .range(["#00B9FA", "#F95002"])
            .interpolate(axisV);
        ganttDiagramLVOFAZNHHelper6(
          ganttDiagramLVOFAZNHValue302,
          ganttDiagramLVOFAZNHValue303,
          ganttDiagramLVOFAZNHValue304,
          ganttDiagramLVOFAZNHParam96,
          ganttDiagramLVOFAZNHParam97,
          ganttDiagramLVOFAZNHParam95,
          ganttDiagramLVOFAZNHParam4.db.getExcludes(),
          ganttDiagramLVOFAZNHParam4.db.getIncludes(),
        );
        ganttDiagramLVOFAZNHHelper7(
          ganttDiagramLVOFAZNHValue304,
          ganttDiagramLVOFAZNHValue303,
          ganttDiagramLVOFAZNHParam96,
          ganttDiagramLVOFAZNHParam97,
        );
        ganttDiagramLVOFAZNHHelper5(
          ganttDiagramLVOFAZNHParam95,
          ganttDiagramLVOFAZNHValue302,
          ganttDiagramLVOFAZNHValue303,
          ganttDiagramLVOFAZNHValue304,
          ganttDiagramLVOFAZNHValue301,
          ganttDiagramLVOFAZNHValue305,
          ganttDiagramLVOFAZNHParam96,
          ganttDiagramLVOFAZNHParam97,
        );
        ganttDiagramLVOFAZNHHelper8(
          ganttDiagramLVOFAZNHValue302,
          ganttDiagramLVOFAZNHValue303,
          ganttDiagramLVOFAZNHValue304,
          ganttDiagramLVOFAZNHValue301,
          ganttDiagramLVOFAZNHValue305,
        );
        ganttDiagramLVOFAZNHHelper9(
          ganttDiagramLVOFAZNHValue304,
          ganttDiagramLVOFAZNHValue303,
          ganttDiagramLVOFAZNHParam96,
          ganttDiagramLVOFAZNHParam97,
        );
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper4, "makeGantt");
      function ganttDiagramLVOFAZNHHelper5(
        ganttDiagramLVOFAZNHParam8,
        ganttDiagramLVOFAZNHParam9,
        ganttDiagramLVOFAZNHParam10,
        ganttDiagramLVOFAZNHParam11,
        ganttDiagramLVOFAZNHParam12,
        ganttDiagramLVOFAZNHParam13,
        ganttDiagramLVOFAZNHParam14,
      ) {
        ganttDiagramLVOFAZNHParam8.sort(
          (ganttDiagramLVOFAZNHParam196, ganttDiagramLVOFAZNHParam197) =>
            ganttDiagramLVOFAZNHParam196.vert ===
            ganttDiagramLVOFAZNHParam197.vert
              ? 0
              : ganttDiagramLVOFAZNHParam196.vert
                ? 1
                : -1,
        );
        let ganttDiagramLVOFAZNHValue130 = [
          ...new Set(ganttDiagramLVOFAZNHParam8.map((item) => item.order)),
        ].map((item) =>
          ganttDiagramLVOFAZNHParam8.find((_item) => _item.order === item),
        );
        ganttDiagramLVOFAZNHValue115
          .append("g")
          .selectAll("rect")
          .data(ganttDiagramLVOFAZNHValue130)
          .enter()
          .append("rect")
          .attr("x", 0)
          .attr(
            "y",
            function (
              ganttDiagramLVOFAZNHParam189,
              ganttDiagramLVOFAZNHParam190,
            ) {
              return (
                (ganttDiagramLVOFAZNHParam190 =
                  ganttDiagramLVOFAZNHParam189.order),
                ganttDiagramLVOFAZNHParam190 * ganttDiagramLVOFAZNHParam9 +
                  ganttDiagramLVOFAZNHParam10 -
                  2
              );
            },
          )
          .attr("width", function () {
            return (
              ganttDiagramLVOFAZNHParam14 -
              ganttDiagramLVOFAZNHValue105.rightPadding / 2
            );
          })
          .attr("height", ganttDiagramLVOFAZNHParam9)
          .attr("class", function (ganttDiagramLVOFAZNHParam143) {
            for (let [
              ganttDiagramLVOFAZNHValue376,
              ganttDiagramLVOFAZNHValue377,
            ] of ganttDiagramLVOFAZNHValue112.entries())
              if (
                ganttDiagramLVOFAZNHParam143.type ===
                ganttDiagramLVOFAZNHValue377
              )
                return (
                  "section section" +
                  (ganttDiagramLVOFAZNHValue376 %
                    ganttDiagramLVOFAZNHValue105.numberSectionStyles)
                );
            return "section section0";
          })
          .enter();
        let ganttDiagramLVOFAZNHValue131 = ganttDiagramLVOFAZNHValue115
            .append("g")
            .selectAll("rect")
            .data(ganttDiagramLVOFAZNHParam8)
            .enter(),
          ganttDiagramLVOFAZNHValue132 =
            ganttDiagramLVOFAZNHParam4.db.getLinks();
        if (
          (ganttDiagramLVOFAZNHValue131
            .append("rect")
            .attr("id", function (ganttDiagramLVOFAZNHParam211) {
              return ganttDiagramLVOFAZNHParam211.id;
            })
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("x", function (ganttDiagramLVOFAZNHParam150) {
              return ganttDiagramLVOFAZNHParam150.milestone
                ? ganttDiagramLVOFAZNHValue116(
                    ganttDiagramLVOFAZNHParam150.startTime,
                  ) +
                    ganttDiagramLVOFAZNHParam11 +
                    0.5 *
                      (ganttDiagramLVOFAZNHValue116(
                        ganttDiagramLVOFAZNHParam150.endTime,
                      ) -
                        ganttDiagramLVOFAZNHValue116(
                          ganttDiagramLVOFAZNHParam150.startTime,
                        )) -
                    0.5 * ganttDiagramLVOFAZNHParam12
                : ganttDiagramLVOFAZNHValue116(
                    ganttDiagramLVOFAZNHParam150.startTime,
                  ) + ganttDiagramLVOFAZNHParam11;
            })
            .attr(
              "y",
              function (
                ganttDiagramLVOFAZNHParam168,
                ganttDiagramLVOFAZNHParam169,
              ) {
                return (
                  (ganttDiagramLVOFAZNHParam169 =
                    ganttDiagramLVOFAZNHParam168.order),
                  ganttDiagramLVOFAZNHParam168.vert
                    ? ganttDiagramLVOFAZNHValue105.gridLineStartPadding
                    : ganttDiagramLVOFAZNHParam169 *
                        ganttDiagramLVOFAZNHParam9 +
                      ganttDiagramLVOFAZNHParam10
                );
              },
            )
            .attr("width", function (ganttDiagramLVOFAZNHParam153) {
              return ganttDiagramLVOFAZNHParam153.milestone
                ? ganttDiagramLVOFAZNHParam12
                : ganttDiagramLVOFAZNHParam153.vert
                  ? 0.08 * ganttDiagramLVOFAZNHParam12
                  : ganttDiagramLVOFAZNHValue116(
                      ganttDiagramLVOFAZNHParam153.renderEndTime ||
                        ganttDiagramLVOFAZNHParam153.endTime,
                    ) -
                    ganttDiagramLVOFAZNHValue116(
                      ganttDiagramLVOFAZNHParam153.startTime,
                    );
            })
            .attr("height", function (ganttDiagramLVOFAZNHParam167) {
              return ganttDiagramLVOFAZNHParam167.vert
                ? ganttDiagramLVOFAZNHValue111.length *
                    (ganttDiagramLVOFAZNHValue105.barHeight +
                      ganttDiagramLVOFAZNHValue105.barGap) +
                    ganttDiagramLVOFAZNHValue105.barHeight * 2
                : ganttDiagramLVOFAZNHParam12;
            })
            .attr(
              "transform-origin",
              function (
                ganttDiagramLVOFAZNHParam135,
                ganttDiagramLVOFAZNHParam136,
              ) {
                return (
                  (ganttDiagramLVOFAZNHParam136 =
                    ganttDiagramLVOFAZNHParam135.order),
                  (
                    ganttDiagramLVOFAZNHValue116(
                      ganttDiagramLVOFAZNHParam135.startTime,
                    ) +
                    ganttDiagramLVOFAZNHParam11 +
                    0.5 *
                      (ganttDiagramLVOFAZNHValue116(
                        ganttDiagramLVOFAZNHParam135.endTime,
                      ) -
                        ganttDiagramLVOFAZNHValue116(
                          ganttDiagramLVOFAZNHParam135.startTime,
                        ))
                  ).toString() +
                    "px " +
                    (
                      ganttDiagramLVOFAZNHParam136 *
                        ganttDiagramLVOFAZNHParam9 +
                      ganttDiagramLVOFAZNHParam10 +
                      0.5 * ganttDiagramLVOFAZNHParam12
                    ).toString() +
                    "px"
                );
              },
            )
            .attr("class", function (ganttDiagramLVOFAZNHParam78) {
              let ganttDiagramLVOFAZNHValue269 = "";
              ganttDiagramLVOFAZNHParam78.classes.length > 0 &&
                (ganttDiagramLVOFAZNHValue269 =
                  ganttDiagramLVOFAZNHParam78.classes.join(" "));
              let ganttDiagramLVOFAZNHValue270 = 0;
              for (let [
                ganttDiagramLVOFAZNHValue385,
                ganttDiagramLVOFAZNHValue386,
              ] of ganttDiagramLVOFAZNHValue112.entries())
                ganttDiagramLVOFAZNHParam78.type ===
                  ganttDiagramLVOFAZNHValue386 &&
                  (ganttDiagramLVOFAZNHValue270 =
                    ganttDiagramLVOFAZNHValue385 %
                    ganttDiagramLVOFAZNHValue105.numberSectionStyles);
              let ganttDiagramLVOFAZNHValue271 = "";
              return (
                ganttDiagramLVOFAZNHParam78.active
                  ? ganttDiagramLVOFAZNHParam78.crit
                    ? (ganttDiagramLVOFAZNHValue271 += " activeCrit")
                    : (ganttDiagramLVOFAZNHValue271 = " active")
                  : ganttDiagramLVOFAZNHParam78.done
                    ? (ganttDiagramLVOFAZNHValue271 =
                        ganttDiagramLVOFAZNHParam78.crit
                          ? " doneCrit"
                          : " done")
                    : ganttDiagramLVOFAZNHParam78.crit &&
                      (ganttDiagramLVOFAZNHValue271 += " crit"),
                ganttDiagramLVOFAZNHValue271.length === 0 &&
                  (ganttDiagramLVOFAZNHValue271 = " task"),
                ganttDiagramLVOFAZNHParam78.milestone &&
                  (ganttDiagramLVOFAZNHValue271 =
                    " milestone " + ganttDiagramLVOFAZNHValue271),
                ganttDiagramLVOFAZNHParam78.vert &&
                  (ganttDiagramLVOFAZNHValue271 =
                    " vert " + ganttDiagramLVOFAZNHValue271),
                (ganttDiagramLVOFAZNHValue271 += ganttDiagramLVOFAZNHValue270),
                (ganttDiagramLVOFAZNHValue271 +=
                  " " + ganttDiagramLVOFAZNHValue269),
                "task" + ganttDiagramLVOFAZNHValue271
              );
            }),
          ganttDiagramLVOFAZNHValue131
            .append("text")
            .attr("id", function (ganttDiagramLVOFAZNHParam203) {
              return ganttDiagramLVOFAZNHParam203.id + "-text";
            })
            .text(function (ganttDiagramLVOFAZNHParam210) {
              return ganttDiagramLVOFAZNHParam210.task;
            })
            .attr("font-size", ganttDiagramLVOFAZNHValue105.fontSize)
            .attr("x", function (ganttDiagramLVOFAZNHParam104) {
              let ganttDiagramLVOFAZNHValue318 = ganttDiagramLVOFAZNHValue116(
                  ganttDiagramLVOFAZNHParam104.startTime,
                ),
                ganttDiagramLVOFAZNHValue319 = ganttDiagramLVOFAZNHValue116(
                  ganttDiagramLVOFAZNHParam104.renderEndTime ||
                    ganttDiagramLVOFAZNHParam104.endTime,
                );
              if (
                (ganttDiagramLVOFAZNHParam104.milestone &&
                  ((ganttDiagramLVOFAZNHValue318 +=
                    0.5 *
                      (ganttDiagramLVOFAZNHValue116(
                        ganttDiagramLVOFAZNHParam104.endTime,
                      ) -
                        ganttDiagramLVOFAZNHValue116(
                          ganttDiagramLVOFAZNHParam104.startTime,
                        )) -
                    0.5 * ganttDiagramLVOFAZNHParam12),
                  (ganttDiagramLVOFAZNHValue319 =
                    ganttDiagramLVOFAZNHValue318 +
                    ganttDiagramLVOFAZNHParam12)),
                ganttDiagramLVOFAZNHParam104.vert)
              )
                return (
                  ganttDiagramLVOFAZNHValue116(
                    ganttDiagramLVOFAZNHParam104.startTime,
                  ) + ganttDiagramLVOFAZNHParam11
                );
              let ganttDiagramLVOFAZNHValue320 = this.getBBox().width;
              return ganttDiagramLVOFAZNHValue320 >
                ganttDiagramLVOFAZNHValue319 - ganttDiagramLVOFAZNHValue318
                ? ganttDiagramLVOFAZNHValue319 +
                    ganttDiagramLVOFAZNHValue320 +
                    1.5 * ganttDiagramLVOFAZNHValue105.leftPadding >
                  ganttDiagramLVOFAZNHParam14
                  ? ganttDiagramLVOFAZNHValue318 +
                    ganttDiagramLVOFAZNHParam11 -
                    5
                  : ganttDiagramLVOFAZNHValue319 +
                    ganttDiagramLVOFAZNHParam11 +
                    5
                : (ganttDiagramLVOFAZNHValue319 -
                    ganttDiagramLVOFAZNHValue318) /
                    2 +
                    ganttDiagramLVOFAZNHValue318 +
                    ganttDiagramLVOFAZNHParam11;
            })
            .attr(
              "y",
              function (
                ganttDiagramLVOFAZNHParam132,
                ganttDiagramLVOFAZNHParam133,
              ) {
                return ganttDiagramLVOFAZNHParam132.vert
                  ? ganttDiagramLVOFAZNHValue105.gridLineStartPadding +
                      ganttDiagramLVOFAZNHValue111.length *
                        (ganttDiagramLVOFAZNHValue105.barHeight +
                          ganttDiagramLVOFAZNHValue105.barGap) +
                      60
                  : ((ganttDiagramLVOFAZNHParam133 =
                      ganttDiagramLVOFAZNHParam132.order),
                    ganttDiagramLVOFAZNHParam133 * ganttDiagramLVOFAZNHParam9 +
                      ganttDiagramLVOFAZNHValue105.barHeight / 2 +
                      (ganttDiagramLVOFAZNHValue105.fontSize / 2 - 2) +
                      ganttDiagramLVOFAZNHParam10);
              },
            )
            .attr("text-height", ganttDiagramLVOFAZNHParam12)
            .attr("class", function (ganttDiagramLVOFAZNHParam59) {
              let ganttDiagramLVOFAZNHValue222 = ganttDiagramLVOFAZNHValue116(
                  ganttDiagramLVOFAZNHParam59.startTime,
                ),
                ganttDiagramLVOFAZNHValue223 = ganttDiagramLVOFAZNHValue116(
                  ganttDiagramLVOFAZNHParam59.endTime,
                );
              ganttDiagramLVOFAZNHParam59.milestone &&
                (ganttDiagramLVOFAZNHValue223 =
                  ganttDiagramLVOFAZNHValue222 + ganttDiagramLVOFAZNHParam12);
              let ganttDiagramLVOFAZNHValue224 = this.getBBox().width,
                ganttDiagramLVOFAZNHValue225 = "";
              ganttDiagramLVOFAZNHParam59.classes.length > 0 &&
                (ganttDiagramLVOFAZNHValue225 =
                  ganttDiagramLVOFAZNHParam59.classes.join(" "));
              let ganttDiagramLVOFAZNHValue226 = 0;
              for (let [
                ganttDiagramLVOFAZNHValue387,
                ganttDiagramLVOFAZNHValue388,
              ] of ganttDiagramLVOFAZNHValue112.entries())
                ganttDiagramLVOFAZNHParam59.type ===
                  ganttDiagramLVOFAZNHValue388 &&
                  (ganttDiagramLVOFAZNHValue226 =
                    ganttDiagramLVOFAZNHValue387 %
                    ganttDiagramLVOFAZNHValue105.numberSectionStyles);
              let ganttDiagramLVOFAZNHValue227 = "";
              return (
                ganttDiagramLVOFAZNHParam59.active &&
                  (ganttDiagramLVOFAZNHValue227 =
                    ganttDiagramLVOFAZNHParam59.crit
                      ? "activeCritText" + ganttDiagramLVOFAZNHValue226
                      : "activeText" + ganttDiagramLVOFAZNHValue226),
                ganttDiagramLVOFAZNHParam59.done
                  ? (ganttDiagramLVOFAZNHValue227 =
                      ganttDiagramLVOFAZNHParam59.crit
                        ? ganttDiagramLVOFAZNHValue227 +
                          " doneCritText" +
                          ganttDiagramLVOFAZNHValue226
                        : ganttDiagramLVOFAZNHValue227 +
                          " doneText" +
                          ganttDiagramLVOFAZNHValue226)
                  : ganttDiagramLVOFAZNHParam59.crit &&
                    (ganttDiagramLVOFAZNHValue227 =
                      ganttDiagramLVOFAZNHValue227 +
                      " critText" +
                      ganttDiagramLVOFAZNHValue226),
                ganttDiagramLVOFAZNHParam59.milestone &&
                  (ganttDiagramLVOFAZNHValue227 += " milestoneText"),
                ganttDiagramLVOFAZNHParam59.vert &&
                  (ganttDiagramLVOFAZNHValue227 += " vertText"),
                ganttDiagramLVOFAZNHValue224 >
                ganttDiagramLVOFAZNHValue223 - ganttDiagramLVOFAZNHValue222
                  ? ganttDiagramLVOFAZNHValue223 +
                      ganttDiagramLVOFAZNHValue224 +
                      1.5 * ganttDiagramLVOFAZNHValue105.leftPadding >
                    ganttDiagramLVOFAZNHParam14
                    ? ganttDiagramLVOFAZNHValue225 +
                      " taskTextOutsideLeft taskTextOutside" +
                      ganttDiagramLVOFAZNHValue226 +
                      " " +
                      ganttDiagramLVOFAZNHValue227
                    : ganttDiagramLVOFAZNHValue225 +
                      " taskTextOutsideRight taskTextOutside" +
                      ganttDiagramLVOFAZNHValue226 +
                      " " +
                      ganttDiagramLVOFAZNHValue227 +
                      " width-" +
                      ganttDiagramLVOFAZNHValue224
                  : ganttDiagramLVOFAZNHValue225 +
                    " taskText taskText" +
                    ganttDiagramLVOFAZNHValue226 +
                    " " +
                    ganttDiagramLVOFAZNHValue227 +
                    " width-" +
                    ganttDiagramLVOFAZNHValue224
              );
            }),
          _chunkABZYJK2DB().securityLevel === "sandbox")
        ) {
          let ganttDiagramLVOFAZNHValue272;
          ganttDiagramLVOFAZNHValue272 = Src("#i" + ganttDiagramLVOFAZNHParam2);
          let ganttDiagramLVOFAZNHValue273 =
            ganttDiagramLVOFAZNHValue272.nodes()[0].contentDocument;
          ganttDiagramLVOFAZNHValue131
            .filter(function (item) {
              return ganttDiagramLVOFAZNHValue132.has(item.id);
            })
            .each(function (ganttDiagramLVOFAZNHParam103) {
              var ganttDiagramLVOFAZNHValue314 =
                  ganttDiagramLVOFAZNHValue273.querySelector(
                    "#" + ganttDiagramLVOFAZNHParam103.id,
                  ),
                ganttDiagramLVOFAZNHValue315 =
                  ganttDiagramLVOFAZNHValue273.querySelector(
                    "#" + ganttDiagramLVOFAZNHParam103.id + "-text",
                  );
              let ganttDiagramLVOFAZNHValue316 =
                ganttDiagramLVOFAZNHValue314.parentNode;
              var ganttDiagramLVOFAZNHValue317 =
                ganttDiagramLVOFAZNHValue273.createElement("a");
              ganttDiagramLVOFAZNHValue317.setAttribute(
                "xlink:href",
                ganttDiagramLVOFAZNHValue132.get(
                  ganttDiagramLVOFAZNHParam103.id,
                ),
              );
              ganttDiagramLVOFAZNHValue317.setAttribute("target", "_top");
              ganttDiagramLVOFAZNHValue316.appendChild(
                ganttDiagramLVOFAZNHValue317,
              );
              ganttDiagramLVOFAZNHValue317.appendChild(
                ganttDiagramLVOFAZNHValue314,
              );
              ganttDiagramLVOFAZNHValue317.appendChild(
                ganttDiagramLVOFAZNHValue315,
              );
            });
        }
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper5, "drawRects");
      function ganttDiagramLVOFAZNHHelper6(
        ganttDiagramLVOFAZNHParam38,
        ganttDiagramLVOFAZNHParam39,
        ganttDiagramLVOFAZNHParam40,
        ganttDiagramLVOFAZNHParam41,
        ganttDiagramLVOFAZNHParam42,
        ganttDiagramLVOFAZNHParam43,
        ganttDiagramLVOFAZNHParam44,
        ganttDiagramLVOFAZNHParam45,
      ) {
        if (
          ganttDiagramLVOFAZNHParam44.length === 0 &&
          ganttDiagramLVOFAZNHParam45.length === 0
        )
          return;
        let ganttDiagramLVOFAZNHValue174, ganttDiagramLVOFAZNHValue175;
        for (let { startTime, endTime } of ganttDiagramLVOFAZNHParam43) {
          (ganttDiagramLVOFAZNHValue174 === undefined ||
            startTime < ganttDiagramLVOFAZNHValue174) &&
            (ganttDiagramLVOFAZNHValue174 = startTime);
          (ganttDiagramLVOFAZNHValue175 === undefined ||
            endTime > ganttDiagramLVOFAZNHValue175) &&
            (ganttDiagramLVOFAZNHValue175 = endTime);
        }
        if (!ganttDiagramLVOFAZNHValue174 || !ganttDiagramLVOFAZNHValue175)
          return;
        if (
          ganttDiagramLVOFAZNHValue5
            .default(ganttDiagramLVOFAZNHValue175)
            .diff(
              ganttDiagramLVOFAZNHValue5.default(ganttDiagramLVOFAZNHValue174),
              "year",
            ) > 5
        ) {
          chunkAGHRB4JFR.warn(
            "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.",
          );
          return;
        }
        let ganttDiagramLVOFAZNHValue176 =
            ganttDiagramLVOFAZNHParam4.db.getDateFormat(),
          ganttDiagramLVOFAZNHValue177 = [],
          ganttDiagramLVOFAZNHValue178 = null,
          ganttDiagramLVOFAZNHValue179 = ganttDiagramLVOFAZNHValue5.default(
            ganttDiagramLVOFAZNHValue174,
          );
        for (
          ;
          ganttDiagramLVOFAZNHValue179.valueOf() <=
          ganttDiagramLVOFAZNHValue175;

        ) {
          ganttDiagramLVOFAZNHParam4.db.isInvalidDate(
            ganttDiagramLVOFAZNHValue179,
            ganttDiagramLVOFAZNHValue176,
            ganttDiagramLVOFAZNHParam44,
            ganttDiagramLVOFAZNHParam45,
          )
            ? ganttDiagramLVOFAZNHValue178
              ? (ganttDiagramLVOFAZNHValue178.end =
                  ganttDiagramLVOFAZNHValue179)
              : (ganttDiagramLVOFAZNHValue178 = {
                  start: ganttDiagramLVOFAZNHValue179,
                  end: ganttDiagramLVOFAZNHValue179,
                })
            : (ganttDiagramLVOFAZNHValue178 &&=
                (ganttDiagramLVOFAZNHValue177.push(
                  ganttDiagramLVOFAZNHValue178,
                ),
                null));
          ganttDiagramLVOFAZNHValue179 = ganttDiagramLVOFAZNHValue179.add(
            1,
            "d",
          );
        }
        ganttDiagramLVOFAZNHValue115
          .append("g")
          .selectAll("rect")
          .data(ganttDiagramLVOFAZNHValue177)
          .enter()
          .append("rect")
          .attr(
            "id",
            (ganttDiagramLVOFAZNHParam186) =>
              "exclude-" +
              ganttDiagramLVOFAZNHParam186.start.format("YYYY-MM-DD"),
          )
          .attr(
            "x",
            (ganttDiagramLVOFAZNHParam205) =>
              ganttDiagramLVOFAZNHValue116(
                ganttDiagramLVOFAZNHParam205.start.startOf("day"),
              ) + ganttDiagramLVOFAZNHParam40,
          )
          .attr("y", ganttDiagramLVOFAZNHValue105.gridLineStartPadding)
          .attr(
            "width",
            (ganttDiagramLVOFAZNHParam177) =>
              ganttDiagramLVOFAZNHValue116(
                ganttDiagramLVOFAZNHParam177.end.endOf("day"),
              ) -
              ganttDiagramLVOFAZNHValue116(
                ganttDiagramLVOFAZNHParam177.start.startOf("day"),
              ),
          )
          .attr(
            "height",
            ganttDiagramLVOFAZNHParam42 -
              ganttDiagramLVOFAZNHParam39 -
              ganttDiagramLVOFAZNHValue105.gridLineStartPadding,
          )
          .attr(
            "transform-origin",
            function (
              ganttDiagramLVOFAZNHParam147,
              ganttDiagramLVOFAZNHParam148,
            ) {
              return (
                (
                  ganttDiagramLVOFAZNHValue116(
                    ganttDiagramLVOFAZNHParam147.start,
                  ) +
                  ganttDiagramLVOFAZNHParam40 +
                  0.5 *
                    (ganttDiagramLVOFAZNHValue116(
                      ganttDiagramLVOFAZNHParam147.end,
                    ) -
                      ganttDiagramLVOFAZNHValue116(
                        ganttDiagramLVOFAZNHParam147.start,
                      ))
                ).toString() +
                "px " +
                (
                  ganttDiagramLVOFAZNHParam148 * ganttDiagramLVOFAZNHParam38 +
                  0.5 * ganttDiagramLVOFAZNHParam42
                ).toString() +
                "px"
              );
            },
          )
          .attr("class", "exclude-range");
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper6, "drawExcludeDays");
      function ganttDiagramLVOFAZNHHelper7(
        ganttDiagramLVOFAZNHParam23,
        ganttDiagramLVOFAZNHParam24,
        ganttDiagramLVOFAZNHParam25,
        ganttDiagramLVOFAZNHParam26,
      ) {
        let ganttDiagramLVOFAZNHValue163 =
            ganttDiagramLVOFAZNHParam4.db.getDateFormat(),
          ganttDiagramLVOFAZNHValue164 =
            ganttDiagramLVOFAZNHParam4.db.getAxisFormat(),
          ganttDiagramLVOFAZNHValue165;
        ganttDiagramLVOFAZNHValue165 =
          ganttDiagramLVOFAZNHValue164 ||
          (ganttDiagramLVOFAZNHValue163 === "D"
            ? "%d"
            : (ganttDiagramLVOFAZNHValue105.axisFormat ?? "%Y-%m-%d"));
        let ganttDiagramLVOFAZNHValue166 = axisT(ganttDiagramLVOFAZNHValue116)
            .tickSize(
              -ganttDiagramLVOFAZNHParam26 +
                ganttDiagramLVOFAZNHParam24 +
                ganttDiagramLVOFAZNHValue105.gridLineStartPadding,
            )
            .tickFormat(axisI(ganttDiagramLVOFAZNHValue165)),
          ganttDiagramLVOFAZNHValue167 =
            /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
              ganttDiagramLVOFAZNHParam4.db.getTickInterval() ||
                ganttDiagramLVOFAZNHValue105.tickInterval,
            );
        if (ganttDiagramLVOFAZNHValue167 !== null) {
          let ganttDiagramLVOFAZNHValue277 = ganttDiagramLVOFAZNHValue167[1],
            ganttDiagramLVOFAZNHValue278 = ganttDiagramLVOFAZNHValue167[2],
            ganttDiagramLVOFAZNHValue279 =
              ganttDiagramLVOFAZNHParam4.db.getWeekday() ||
              ganttDiagramLVOFAZNHValue105.weekday;
          switch (ganttDiagramLVOFAZNHValue278) {
            case "millisecond":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisUnderscore.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
            case "second":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisG.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
            case "minute":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisH.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
            case "hour":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisM.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
            case "day":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisP.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
            case "week":
              ganttDiagramLVOFAZNHValue166.ticks(
                ganttDiagramLVOFAZNHValue76[ganttDiagramLVOFAZNHValue279].every(
                  ganttDiagramLVOFAZNHValue277,
                ),
              );
              break;
            case "month":
              ganttDiagramLVOFAZNHValue166.ticks(
                axisA.every(ganttDiagramLVOFAZNHValue277),
              );
              break;
          }
        }
        if (
          (ganttDiagramLVOFAZNHValue115
            .append("g")
            .attr("class", "grid")
            .attr(
              "transform",
              "translate(" +
                ganttDiagramLVOFAZNHParam23 +
                ", " +
                (ganttDiagramLVOFAZNHParam26 - 50) +
                ")",
            )
            .call(ganttDiagramLVOFAZNHValue166)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10)
            .attr("dy", "1em"),
          ganttDiagramLVOFAZNHParam4.db.topAxisEnabled() ||
            ganttDiagramLVOFAZNHValue105.topAxis)
        ) {
          let ganttDiagramLVOFAZNHValue228 = axisN(ganttDiagramLVOFAZNHValue116)
            .tickSize(
              -ganttDiagramLVOFAZNHParam26 +
                ganttDiagramLVOFAZNHParam24 +
                ganttDiagramLVOFAZNHValue105.gridLineStartPadding,
            )
            .tickFormat(axisI(ganttDiagramLVOFAZNHValue165));
          if (ganttDiagramLVOFAZNHValue167 !== null) {
            let ganttDiagramLVOFAZNHValue280 = ganttDiagramLVOFAZNHValue167[1],
              ganttDiagramLVOFAZNHValue281 = ganttDiagramLVOFAZNHValue167[2],
              ganttDiagramLVOFAZNHValue282 =
                ganttDiagramLVOFAZNHParam4.db.getWeekday() ||
                ganttDiagramLVOFAZNHValue105.weekday;
            switch (ganttDiagramLVOFAZNHValue281) {
              case "millisecond":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisUnderscore.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "second":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisG.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "minute":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisH.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "hour":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisM.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "day":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisP.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "week":
                ganttDiagramLVOFAZNHValue228.ticks(
                  ganttDiagramLVOFAZNHValue76[
                    ganttDiagramLVOFAZNHValue282
                  ].every(ganttDiagramLVOFAZNHValue280),
                );
                break;
              case "month":
                ganttDiagramLVOFAZNHValue228.ticks(
                  axisA.every(ganttDiagramLVOFAZNHValue280),
                );
                break;
            }
          }
          ganttDiagramLVOFAZNHValue115
            .append("g")
            .attr("class", "grid")
            .attr(
              "transform",
              "translate(" +
                ganttDiagramLVOFAZNHParam23 +
                ", " +
                ganttDiagramLVOFAZNHParam24 +
                ")",
            )
            .call(ganttDiagramLVOFAZNHValue228)
            .selectAll("text")
            .style("text-anchor", "middle")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10);
        }
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper7, "makeGrid");
      function ganttDiagramLVOFAZNHHelper8(
        ganttDiagramLVOFAZNHParam51,
        ganttDiagramLVOFAZNHParam52,
      ) {
        let ganttDiagramLVOFAZNHValue193 = 0,
          ganttDiagramLVOFAZNHValue194 = Object.keys(
            ganttDiagramLVOFAZNHValue113,
          ).map((item) => [item, ganttDiagramLVOFAZNHValue113[item]]);
        ganttDiagramLVOFAZNHValue115
          .append("g")
          .selectAll("text")
          .data(ganttDiagramLVOFAZNHValue194)
          .enter()
          .append(function (ganttDiagramLVOFAZNHParam77) {
            let ganttDiagramLVOFAZNHValue266 =
                ganttDiagramLVOFAZNHParam77[0].split(
                  chunkABZYJK2DM.lineBreakRegex,
                ),
              ganttDiagramLVOFAZNHValue267 =
                -(ganttDiagramLVOFAZNHValue266.length - 1) / 2,
              ganttDiagramLVOFAZNHValue268 =
                ganttDiagramLVOFAZNHValue109.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "text",
                );
            ganttDiagramLVOFAZNHValue268.setAttribute(
              "dy",
              ganttDiagramLVOFAZNHValue267 + "em",
            );
            for (let [
              ganttDiagramLVOFAZNHValue323,
              ganttDiagramLVOFAZNHValue324,
            ] of ganttDiagramLVOFAZNHValue266.entries()) {
              let ganttDiagramLVOFAZNHValue331 =
                ganttDiagramLVOFAZNHValue109.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "tspan",
                );
              ganttDiagramLVOFAZNHValue331.setAttribute(
                "alignment-baseline",
                "central",
              );
              ganttDiagramLVOFAZNHValue331.setAttribute("x", "10");
              ganttDiagramLVOFAZNHValue323 > 0 &&
                ganttDiagramLVOFAZNHValue331.setAttribute("dy", "1em");
              ganttDiagramLVOFAZNHValue331.textContent =
                ganttDiagramLVOFAZNHValue324;
              ganttDiagramLVOFAZNHValue268.appendChild(
                ganttDiagramLVOFAZNHValue331,
              );
            }
            return ganttDiagramLVOFAZNHValue268;
          })
          .attr("x", 10)
          .attr(
            "y",
            function (
              ganttDiagramLVOFAZNHParam151,
              ganttDiagramLVOFAZNHParam152,
            ) {
              if (ganttDiagramLVOFAZNHParam152 > 0)
                for (
                  let ganttDiagramLVOFAZNHValue395 = 0;
                  ganttDiagramLVOFAZNHValue395 < ganttDiagramLVOFAZNHParam152;
                  ganttDiagramLVOFAZNHValue395++
                )
                  return (
                    (ganttDiagramLVOFAZNHValue193 +=
                      ganttDiagramLVOFAZNHValue194[
                        ganttDiagramLVOFAZNHParam152 - 1
                      ][1]),
                    (ganttDiagramLVOFAZNHParam151[1] *
                      ganttDiagramLVOFAZNHParam51) /
                      2 +
                      ganttDiagramLVOFAZNHValue193 *
                        ganttDiagramLVOFAZNHParam51 +
                      ganttDiagramLVOFAZNHParam52
                  );
              else
                return (
                  (ganttDiagramLVOFAZNHParam151[1] *
                    ganttDiagramLVOFAZNHParam51) /
                    2 +
                  ganttDiagramLVOFAZNHParam52
                );
            },
          )
          .attr("font-size", ganttDiagramLVOFAZNHValue105.sectionFontSize)
          .attr("class", function (ganttDiagramLVOFAZNHParam134) {
            for (let [
              ganttDiagramLVOFAZNHValue369,
              ganttDiagramLVOFAZNHValue370,
            ] of ganttDiagramLVOFAZNHValue112.entries())
              if (
                ganttDiagramLVOFAZNHParam134[0] === ganttDiagramLVOFAZNHValue370
              )
                return (
                  "sectionTitle sectionTitle" +
                  (ganttDiagramLVOFAZNHValue369 %
                    ganttDiagramLVOFAZNHValue105.numberSectionStyles)
                );
            return "sectionTitle";
          });
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper8, "vertLabels");
      function ganttDiagramLVOFAZNHHelper9(
        ganttDiagramLVOFAZNHParam91,
        ganttDiagramLVOFAZNHParam92,
        ganttDiagramLVOFAZNHParam93,
        ganttDiagramLVOFAZNHParam94,
      ) {
        let ganttDiagramLVOFAZNHValue296 =
          ganttDiagramLVOFAZNHParam4.db.getTodayMarker();
        if (ganttDiagramLVOFAZNHValue296 === "off") return;
        let ganttDiagramLVOFAZNHValue297 = ganttDiagramLVOFAZNHValue115
            .append("g")
            .attr("class", "today"),
          ganttDiagramLVOFAZNHValue298 = new Date(),
          ganttDiagramLVOFAZNHValue299 =
            ganttDiagramLVOFAZNHValue297.append("line");
        ganttDiagramLVOFAZNHValue299
          .attr(
            "x1",
            ganttDiagramLVOFAZNHValue116(ganttDiagramLVOFAZNHValue298) +
              ganttDiagramLVOFAZNHParam91,
          )
          .attr(
            "x2",
            ganttDiagramLVOFAZNHValue116(ganttDiagramLVOFAZNHValue298) +
              ganttDiagramLVOFAZNHParam91,
          )
          .attr("y1", ganttDiagramLVOFAZNHValue105.titleTopMargin)
          .attr(
            "y2",
            ganttDiagramLVOFAZNHParam94 -
              ganttDiagramLVOFAZNHValue105.titleTopMargin,
          )
          .attr("class", "today");
        ganttDiagramLVOFAZNHValue296 !== "" &&
          ganttDiagramLVOFAZNHValue299.attr(
            "style",
            ganttDiagramLVOFAZNHValue296.replace(/,/g, ";"),
          );
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper9, "drawToday");
      function ganttDiagramLVOFAZNHHelper10(ganttDiagramLVOFAZNHParam129) {
        let ganttDiagramLVOFAZNHValue344 = {},
          ganttDiagramLVOFAZNHValue345 = [];
        for (
          let ganttDiagramLVOFAZNHValue366 = 0,
            ganttDiagramLVOFAZNHValue367 = ganttDiagramLVOFAZNHParam129.length;
          ganttDiagramLVOFAZNHValue366 < ganttDiagramLVOFAZNHValue367;
          ++ganttDiagramLVOFAZNHValue366
        )
          Object.prototype.hasOwnProperty.call(
            ganttDiagramLVOFAZNHValue344,
            ganttDiagramLVOFAZNHParam129[ganttDiagramLVOFAZNHValue366],
          ) ||
            ((ganttDiagramLVOFAZNHValue344[
              ganttDiagramLVOFAZNHParam129[ganttDiagramLVOFAZNHValue366]
            ] = true),
            ganttDiagramLVOFAZNHValue345.push(
              ganttDiagramLVOFAZNHParam129[ganttDiagramLVOFAZNHValue366],
            ));
        return ganttDiagramLVOFAZNHValue345;
      }
      chunkAGHRB4JFN(ganttDiagramLVOFAZNHHelper10, "checkUnique");
    }, "draw"),
  },
  styles: chunkAGHRB4JFN(
    (ganttDiagramLVOFAZNHParam5) => `
  .mermaid-main-font {
        font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
  }

  .exclude-range {
    fill: ${ganttDiagramLVOFAZNHParam5.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${ganttDiagramLVOFAZNHParam5.sectionBkgColor};
  }

  .section2 {
    fill: ${ganttDiagramLVOFAZNHParam5.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${ganttDiagramLVOFAZNHParam5.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${ganttDiagramLVOFAZNHParam5.titleColor};
  }

  .sectionTitle1 {
    fill: ${ganttDiagramLVOFAZNHParam5.titleColor};
  }

  .sectionTitle2 {
    fill: ${ganttDiagramLVOFAZNHParam5.titleColor};
  }

  .sectionTitle3 {
    fill: ${ganttDiagramLVOFAZNHParam5.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${ganttDiagramLVOFAZNHParam5.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
    fill: ${ganttDiagramLVOFAZNHParam5.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${ganttDiagramLVOFAZNHParam5.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor};
    text-anchor: start;
    font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskBkgColor};
    stroke: ${ganttDiagramLVOFAZNHParam5.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${ganttDiagramLVOFAZNHParam5.activeTaskBkgColor};
    stroke: ${ganttDiagramLVOFAZNHParam5.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${ganttDiagramLVOFAZNHParam5.doneTaskBorderColor};
    fill: ${ganttDiagramLVOFAZNHParam5.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${ganttDiagramLVOFAZNHParam5.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHParam5.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${ganttDiagramLVOFAZNHParam5.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHParam5.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${ganttDiagramLVOFAZNHParam5.critBorderColor};
    fill: ${ganttDiagramLVOFAZNHParam5.doneTaskBkgColor};
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
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${ganttDiagramLVOFAZNHParam5.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${ganttDiagramLVOFAZNHParam5.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${ganttDiagramLVOFAZNHParam5.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${ganttDiagramLVOFAZNHParam5.titleColor || ganttDiagramLVOFAZNHParam5.textColor};
    font-family: ${ganttDiagramLVOFAZNHParam5.fontFamily};
  }
`,
    "getStyles",
  ),
};
