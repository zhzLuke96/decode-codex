// Restored from ref/webview/assets/timeline-definition-GMOUNBTQ-BhxdX_wS.js
// Flat boundary. Vendored timelineDefinitionGMOUNBTQ chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { arc } from "./d3-shape-arc";
import { invertI, invertO, invertR } from "./color-convert";
import {
  chunkAGHRB4JFN,
  chunkAGHRB4JFR,
  chunkAGHRB4JFT,
} from "./dayjs-core-alt";
import {
  _chunkICPOFSXXL,
  _chunkICPOFSXXP,
  _chunkICPOFSXXS,
  chunkICPOFSXXH,
  chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWH } from "./chunk-5pvqy5bw";
var timelineDefinitionGMOUNBTQValue1 = (function () {
  var timelineDefinitionGMOUNBTQValue58 = chunkAGHRB4JFN(function (
      timelineDefinitionGMOUNBTQParam148,
      timelineDefinitionGMOUNBTQParam149,
      timelineDefinitionGMOUNBTQParam150,
      timelineDefinitionGMOUNBTQParam151,
    ) {
      for (
        timelineDefinitionGMOUNBTQParam150 ||= {},
          timelineDefinitionGMOUNBTQParam151 =
            timelineDefinitionGMOUNBTQParam148.length;
        timelineDefinitionGMOUNBTQParam151--;
        timelineDefinitionGMOUNBTQParam150[
          timelineDefinitionGMOUNBTQParam148[timelineDefinitionGMOUNBTQParam151]
        ] = timelineDefinitionGMOUNBTQParam149
      );
      return timelineDefinitionGMOUNBTQParam150;
    }, "o"),
    timelineDefinitionGMOUNBTQValue59 = [6, 11, 13, 14, 15, 17, 19, 20, 23, 24],
    timelineDefinitionGMOUNBTQValue60 = [1, 12],
    timelineDefinitionGMOUNBTQValue61 = [1, 13],
    timelineDefinitionGMOUNBTQValue62 = [1, 14],
    timelineDefinitionGMOUNBTQValue63 = [1, 15],
    timelineDefinitionGMOUNBTQValue64 = [1, 16],
    timelineDefinitionGMOUNBTQValue65 = [1, 19],
    timelineDefinitionGMOUNBTQValue66 = [1, 20],
    timelineDefinitionGMOUNBTQValue67 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        timeline_header: 4,
        document: 5,
        EOF: 6,
        timeline: 7,
        timeline_lr: 8,
        timeline_td: 9,
        line: 10,
        SPACE: 11,
        statement: 12,
        NEWLINE: 13,
        title: 14,
        acc_title: 15,
        acc_title_value: 16,
        acc_descr: 17,
        acc_descr_value: 18,
        acc_descr_multiline_value: 19,
        section: 20,
        period_statement: 21,
        event_statement: 22,
        period: 23,
        event: 24,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        6: "EOF",
        7: "timeline",
        8: "timeline_lr",
        9: "timeline_td",
        11: "SPACE",
        13: "NEWLINE",
        14: "title",
        15: "acc_title",
        16: "acc_title_value",
        17: "acc_descr",
        18: "acc_descr_value",
        19: "acc_descr_multiline_value",
        20: "section",
        23: "period",
        24: "event",
      },
      productions_: [
        0,
        [3, 3],
        [4, 1],
        [4, 1],
        [4, 1],
        [5, 0],
        [5, 2],
        [10, 2],
        [10, 1],
        [10, 1],
        [10, 1],
        [12, 1],
        [12, 2],
        [12, 2],
        [12, 1],
        [12, 1],
        [12, 1],
        [12, 1],
        [21, 1],
        [22, 1],
      ],
      performAction: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam36,
        timelineDefinitionGMOUNBTQParam37,
        timelineDefinitionGMOUNBTQParam38,
        timelineDefinitionGMOUNBTQParam39,
        timelineDefinitionGMOUNBTQParam40,
        timelineDefinitionGMOUNBTQParam41,
        timelineDefinitionGMOUNBTQParam42,
      ) {
        var timelineDefinitionGMOUNBTQValue175 =
          timelineDefinitionGMOUNBTQParam41.length - 1;
        switch (timelineDefinitionGMOUNBTQParam40) {
          case 1:
            return timelineDefinitionGMOUNBTQParam41[
              timelineDefinitionGMOUNBTQValue175 - 1
            ];
          case 3:
            timelineDefinitionGMOUNBTQParam39.setDirection("LR");
            break;
          case 4:
            timelineDefinitionGMOUNBTQParam39.setDirection("TD");
            break;
          case 5:
            this.$ = [];
            break;
          case 6:
            timelineDefinitionGMOUNBTQParam41[
              timelineDefinitionGMOUNBTQValue175 - 1
            ].push(
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ],
            );
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175 - 1
              ];
            break;
          case 7:
          case 8:
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ];
            break;
          case 9:
          case 10:
            this.$ = [];
            break;
          case 11:
            timelineDefinitionGMOUNBTQParam39
              .getCommonDb()
              .setDiagramTitle(
                timelineDefinitionGMOUNBTQParam41[
                  timelineDefinitionGMOUNBTQValue175
                ].substr(6),
              );
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].substr(6);
            break;
          case 12:
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].trim();
            timelineDefinitionGMOUNBTQParam39.getCommonDb().setAccTitle(this.$);
            break;
          case 13:
          case 14:
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].trim();
            timelineDefinitionGMOUNBTQParam39
              .getCommonDb()
              .setAccDescription(this.$);
            break;
          case 15:
            timelineDefinitionGMOUNBTQParam39.addSection(
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].substr(8),
            );
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].substr(8);
            break;
          case 18:
            timelineDefinitionGMOUNBTQParam39.addTask(
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ],
              0,
              "",
            );
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ];
            break;
          case 19:
            timelineDefinitionGMOUNBTQParam39.addEvent(
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ].substr(2),
            );
            this.$ =
              timelineDefinitionGMOUNBTQParam41[
                timelineDefinitionGMOUNBTQValue175
              ];
            break;
        }
      }, "anonymous"),
      table: [
        {
          3: 1,
          4: 2,
          7: [1, 3],
          8: [1, 4],
          9: [1, 5],
        },
        {
          1: [3],
        },
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 5],
          {
            5: 6,
          },
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 2],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 3],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 4],
        ),
        {
          6: [1, 7],
          10: 8,
          11: [1, 9],
          12: 10,
          13: [1, 11],
          14: timelineDefinitionGMOUNBTQValue60,
          15: timelineDefinitionGMOUNBTQValue61,
          17: timelineDefinitionGMOUNBTQValue62,
          19: timelineDefinitionGMOUNBTQValue63,
          20: timelineDefinitionGMOUNBTQValue64,
          21: 17,
          22: 18,
          23: timelineDefinitionGMOUNBTQValue65,
          24: timelineDefinitionGMOUNBTQValue66,
        },
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 10],
          {
            1: [2, 1],
          },
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 6],
        ),
        {
          12: 21,
          14: timelineDefinitionGMOUNBTQValue60,
          15: timelineDefinitionGMOUNBTQValue61,
          17: timelineDefinitionGMOUNBTQValue62,
          19: timelineDefinitionGMOUNBTQValue63,
          20: timelineDefinitionGMOUNBTQValue64,
          21: 17,
          22: 18,
          23: timelineDefinitionGMOUNBTQValue65,
          24: timelineDefinitionGMOUNBTQValue66,
        },
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 8],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 9],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 11],
        ),
        {
          16: [1, 22],
        },
        {
          18: [1, 23],
        },
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 14],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 15],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 16],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 17],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 18],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 19],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 7],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 12],
        ),
        timelineDefinitionGMOUNBTQValue58(
          timelineDefinitionGMOUNBTQValue59,
          [2, 13],
        ),
      ],
      defaultActions: {},
      parseError: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam138,
        timelineDefinitionGMOUNBTQParam139,
      ) {
        if (timelineDefinitionGMOUNBTQParam139.recoverable)
          this.trace(timelineDefinitionGMOUNBTQParam138);
        else {
          var timelineDefinitionGMOUNBTQValue288 = Error(
            timelineDefinitionGMOUNBTQParam138,
          );
          throw (
            (timelineDefinitionGMOUNBTQValue288.hash =
              timelineDefinitionGMOUNBTQParam139),
            timelineDefinitionGMOUNBTQValue288
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam5) {
        var timelineDefinitionGMOUNBTQValue87 = this,
          timelineDefinitionGMOUNBTQValue88 = [0],
          timelineDefinitionGMOUNBTQValue89 = [],
          timelineDefinitionGMOUNBTQValue90 = [null],
          timelineDefinitionGMOUNBTQValue91 = [],
          timelineDefinitionGMOUNBTQValue92 = this.table,
          timelineDefinitionGMOUNBTQValue93 = "",
          timelineDefinitionGMOUNBTQValue94 = 0,
          timelineDefinitionGMOUNBTQValue95 = 0,
          timelineDefinitionGMOUNBTQValue96 = 0,
          timelineDefinitionGMOUNBTQValue99 =
            timelineDefinitionGMOUNBTQValue91.slice.call(arguments, 1),
          timelineDefinitionGMOUNBTQValue100 = Object.create(this.lexer),
          timelineDefinitionGMOUNBTQValue101 = {
            yy: {},
          };
        for (var timelineDefinitionGMOUNBTQValue102 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            timelineDefinitionGMOUNBTQValue102,
          ) &&
            (timelineDefinitionGMOUNBTQValue101.yy[
              timelineDefinitionGMOUNBTQValue102
            ] = this.yy[timelineDefinitionGMOUNBTQValue102]);
        timelineDefinitionGMOUNBTQValue100.setInput(
          timelineDefinitionGMOUNBTQParam5,
          timelineDefinitionGMOUNBTQValue101.yy,
        );
        timelineDefinitionGMOUNBTQValue101.yy.lexer =
          timelineDefinitionGMOUNBTQValue100;
        timelineDefinitionGMOUNBTQValue101.yy.parser = this;
        timelineDefinitionGMOUNBTQValue100.yylloc === undefined &&
          (timelineDefinitionGMOUNBTQValue100.yylloc = {});
        var timelineDefinitionGMOUNBTQValue103 =
          timelineDefinitionGMOUNBTQValue100.yylloc;
        timelineDefinitionGMOUNBTQValue91.push(
          timelineDefinitionGMOUNBTQValue103,
        );
        var timelineDefinitionGMOUNBTQValue104 =
          timelineDefinitionGMOUNBTQValue100.options &&
          timelineDefinitionGMOUNBTQValue100.options.ranges;
        typeof timelineDefinitionGMOUNBTQValue101.yy.parseError == "function"
          ? (this.parseError = timelineDefinitionGMOUNBTQValue101.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function timelineDefinitionGMOUNBTQHelper3(
          timelineDefinitionGMOUNBTQParam154,
        ) {
          timelineDefinitionGMOUNBTQValue88.length -=
            2 * timelineDefinitionGMOUNBTQParam154;
          timelineDefinitionGMOUNBTQValue90.length -=
            timelineDefinitionGMOUNBTQParam154;
          timelineDefinitionGMOUNBTQValue91.length -=
            timelineDefinitionGMOUNBTQParam154;
        }
        chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper3, "popStack");
        function timelineDefinitionGMOUNBTQHelper4() {
          var timelineDefinitionGMOUNBTQValue282 =
            timelineDefinitionGMOUNBTQValue89.pop() ||
            timelineDefinitionGMOUNBTQValue100.lex() ||
            1;
          return (
            typeof timelineDefinitionGMOUNBTQValue282 != "number" &&
              (timelineDefinitionGMOUNBTQValue282 instanceof Array &&
                ((timelineDefinitionGMOUNBTQValue89 =
                  timelineDefinitionGMOUNBTQValue282),
                (timelineDefinitionGMOUNBTQValue282 =
                  timelineDefinitionGMOUNBTQValue89.pop())),
              (timelineDefinitionGMOUNBTQValue282 =
                timelineDefinitionGMOUNBTQValue87.symbols_[
                  timelineDefinitionGMOUNBTQValue282
                ] || timelineDefinitionGMOUNBTQValue282)),
            timelineDefinitionGMOUNBTQValue282
          );
        }
        chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper4, "lex");
        for (
          var timelineDefinitionGMOUNBTQValue105,
            timelineDefinitionGMOUNBTQValue106,
            timelineDefinitionGMOUNBTQValue107,
            timelineDefinitionGMOUNBTQValue108,
            timelineDefinitionGMOUNBTQValue109,
            timelineDefinitionGMOUNBTQValue110 = {},
            timelineDefinitionGMOUNBTQValue111,
            timelineDefinitionGMOUNBTQValue112,
            timelineDefinitionGMOUNBTQValue113,
            timelineDefinitionGMOUNBTQValue114;
          ;

        ) {
          if (
            ((timelineDefinitionGMOUNBTQValue107 =
              timelineDefinitionGMOUNBTQValue88[
                timelineDefinitionGMOUNBTQValue88.length - 1
              ]),
            this.defaultActions[timelineDefinitionGMOUNBTQValue107]
              ? (timelineDefinitionGMOUNBTQValue108 =
                  this.defaultActions[timelineDefinitionGMOUNBTQValue107])
              : ((timelineDefinitionGMOUNBTQValue105 ??=
                  timelineDefinitionGMOUNBTQHelper4()),
                (timelineDefinitionGMOUNBTQValue108 =
                  timelineDefinitionGMOUNBTQValue92[
                    timelineDefinitionGMOUNBTQValue107
                  ] &&
                  timelineDefinitionGMOUNBTQValue92[
                    timelineDefinitionGMOUNBTQValue107
                  ][timelineDefinitionGMOUNBTQValue105])),
            timelineDefinitionGMOUNBTQValue108 === undefined ||
              !timelineDefinitionGMOUNBTQValue108.length ||
              !timelineDefinitionGMOUNBTQValue108[0])
          ) {
            var timelineDefinitionGMOUNBTQValue115 = "";
            for (timelineDefinitionGMOUNBTQValue111 in ((timelineDefinitionGMOUNBTQValue114 =
              []),
            timelineDefinitionGMOUNBTQValue92[
              timelineDefinitionGMOUNBTQValue107
            ]))
              this.terminals_[timelineDefinitionGMOUNBTQValue111] &&
                timelineDefinitionGMOUNBTQValue111 > 2 &&
                timelineDefinitionGMOUNBTQValue114.push(
                  "'" +
                    this.terminals_[timelineDefinitionGMOUNBTQValue111] +
                    "'",
                );
            timelineDefinitionGMOUNBTQValue115 =
              timelineDefinitionGMOUNBTQValue100.showPosition
                ? "Parse error on line " +
                  (timelineDefinitionGMOUNBTQValue94 + 1) +
                  ":\n" +
                  timelineDefinitionGMOUNBTQValue100.showPosition() +
                  "\nExpecting " +
                  timelineDefinitionGMOUNBTQValue114.join(", ") +
                  ", got '" +
                  (this.terminals_[timelineDefinitionGMOUNBTQValue105] ||
                    timelineDefinitionGMOUNBTQValue105) +
                  "'"
                : "Parse error on line " +
                  (timelineDefinitionGMOUNBTQValue94 + 1) +
                  ": Unexpected " +
                  (timelineDefinitionGMOUNBTQValue105 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[timelineDefinitionGMOUNBTQValue105] ||
                        timelineDefinitionGMOUNBTQValue105) +
                      "'");
            this.parseError(timelineDefinitionGMOUNBTQValue115, {
              text: timelineDefinitionGMOUNBTQValue100.match,
              token:
                this.terminals_[timelineDefinitionGMOUNBTQValue105] ||
                timelineDefinitionGMOUNBTQValue105,
              line: timelineDefinitionGMOUNBTQValue100.yylineno,
              loc: timelineDefinitionGMOUNBTQValue103,
              expected: timelineDefinitionGMOUNBTQValue114,
            });
          }
          if (
            timelineDefinitionGMOUNBTQValue108[0] instanceof Array &&
            timelineDefinitionGMOUNBTQValue108.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                timelineDefinitionGMOUNBTQValue107 +
                ", token: " +
                timelineDefinitionGMOUNBTQValue105,
            );
          switch (timelineDefinitionGMOUNBTQValue108[0]) {
            case 1:
              timelineDefinitionGMOUNBTQValue88.push(
                timelineDefinitionGMOUNBTQValue105,
              );
              timelineDefinitionGMOUNBTQValue90.push(
                timelineDefinitionGMOUNBTQValue100.yytext,
              );
              timelineDefinitionGMOUNBTQValue91.push(
                timelineDefinitionGMOUNBTQValue100.yylloc,
              );
              timelineDefinitionGMOUNBTQValue88.push(
                timelineDefinitionGMOUNBTQValue108[1],
              );
              timelineDefinitionGMOUNBTQValue105 = null;
              timelineDefinitionGMOUNBTQValue106
                ? ((timelineDefinitionGMOUNBTQValue105 =
                    timelineDefinitionGMOUNBTQValue106),
                  (timelineDefinitionGMOUNBTQValue106 = null))
                : ((timelineDefinitionGMOUNBTQValue95 =
                    timelineDefinitionGMOUNBTQValue100.yyleng),
                  (timelineDefinitionGMOUNBTQValue93 =
                    timelineDefinitionGMOUNBTQValue100.yytext),
                  (timelineDefinitionGMOUNBTQValue94 =
                    timelineDefinitionGMOUNBTQValue100.yylineno),
                  (timelineDefinitionGMOUNBTQValue103 =
                    timelineDefinitionGMOUNBTQValue100.yylloc),
                  timelineDefinitionGMOUNBTQValue96 > 0 &&
                    timelineDefinitionGMOUNBTQValue96--);
              break;
            case 2:
              if (
                ((timelineDefinitionGMOUNBTQValue112 =
                  this.productions_[timelineDefinitionGMOUNBTQValue108[1]][1]),
                (timelineDefinitionGMOUNBTQValue110.$ =
                  timelineDefinitionGMOUNBTQValue90[
                    timelineDefinitionGMOUNBTQValue90.length -
                      timelineDefinitionGMOUNBTQValue112
                  ]),
                (timelineDefinitionGMOUNBTQValue110._$ = {
                  first_line:
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length -
                        (timelineDefinitionGMOUNBTQValue112 || 1)
                    ].first_line,
                  last_line:
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length - 1
                    ].last_line,
                  first_column:
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length -
                        (timelineDefinitionGMOUNBTQValue112 || 1)
                    ].first_column,
                  last_column:
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length - 1
                    ].last_column,
                }),
                timelineDefinitionGMOUNBTQValue104 &&
                  (timelineDefinitionGMOUNBTQValue110._$.range = [
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length -
                        (timelineDefinitionGMOUNBTQValue112 || 1)
                    ].range[0],
                    timelineDefinitionGMOUNBTQValue91[
                      timelineDefinitionGMOUNBTQValue91.length - 1
                    ].range[1],
                  ]),
                (timelineDefinitionGMOUNBTQValue109 = this.performAction.apply(
                  timelineDefinitionGMOUNBTQValue110,
                  [
                    timelineDefinitionGMOUNBTQValue93,
                    timelineDefinitionGMOUNBTQValue95,
                    timelineDefinitionGMOUNBTQValue94,
                    timelineDefinitionGMOUNBTQValue101.yy,
                    timelineDefinitionGMOUNBTQValue108[1],
                    timelineDefinitionGMOUNBTQValue90,
                    timelineDefinitionGMOUNBTQValue91,
                  ].concat(timelineDefinitionGMOUNBTQValue99),
                )),
                timelineDefinitionGMOUNBTQValue109 !== undefined)
              )
                return timelineDefinitionGMOUNBTQValue109;
              timelineDefinitionGMOUNBTQValue112 &&
                ((timelineDefinitionGMOUNBTQValue88 =
                  timelineDefinitionGMOUNBTQValue88.slice(
                    0,
                    -1 * timelineDefinitionGMOUNBTQValue112 * 2,
                  )),
                (timelineDefinitionGMOUNBTQValue90 =
                  timelineDefinitionGMOUNBTQValue90.slice(
                    0,
                    -1 * timelineDefinitionGMOUNBTQValue112,
                  )),
                (timelineDefinitionGMOUNBTQValue91 =
                  timelineDefinitionGMOUNBTQValue91.slice(
                    0,
                    -1 * timelineDefinitionGMOUNBTQValue112,
                  )));
              timelineDefinitionGMOUNBTQValue88.push(
                this.productions_[timelineDefinitionGMOUNBTQValue108[1]][0],
              );
              timelineDefinitionGMOUNBTQValue90.push(
                timelineDefinitionGMOUNBTQValue110.$,
              );
              timelineDefinitionGMOUNBTQValue91.push(
                timelineDefinitionGMOUNBTQValue110._$,
              );
              timelineDefinitionGMOUNBTQValue113 =
                timelineDefinitionGMOUNBTQValue92[
                  timelineDefinitionGMOUNBTQValue88[
                    timelineDefinitionGMOUNBTQValue88.length - 2
                  ]
                ][
                  timelineDefinitionGMOUNBTQValue88[
                    timelineDefinitionGMOUNBTQValue88.length - 1
                  ]
                ];
              timelineDefinitionGMOUNBTQValue88.push(
                timelineDefinitionGMOUNBTQValue113,
              );
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  timelineDefinitionGMOUNBTQValue67.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam140,
        timelineDefinitionGMOUNBTQParam141,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            timelineDefinitionGMOUNBTQParam140,
            timelineDefinitionGMOUNBTQParam141,
          );
        else throw Error(timelineDefinitionGMOUNBTQParam140);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam91,
        timelineDefinitionGMOUNBTQParam92,
      ) {
        return (
          (this.yy = timelineDefinitionGMOUNBTQParam92 || this.yy || {}),
          (this._input = timelineDefinitionGMOUNBTQParam91),
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
        var timelineDefinitionGMOUNBTQValue254 = this._input[0];
        return (
          (this.yytext += timelineDefinitionGMOUNBTQValue254),
          this.yyleng++,
          this.offset++,
          (this.match += timelineDefinitionGMOUNBTQValue254),
          (this.matched += timelineDefinitionGMOUNBTQValue254),
          timelineDefinitionGMOUNBTQValue254.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          timelineDefinitionGMOUNBTQValue254
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam23) {
        var timelineDefinitionGMOUNBTQValue171 =
            timelineDefinitionGMOUNBTQParam23.length,
          timelineDefinitionGMOUNBTQValue172 =
            timelineDefinitionGMOUNBTQParam23.split(/(?:\r\n?|\n)/g);
        this._input = timelineDefinitionGMOUNBTQParam23 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - timelineDefinitionGMOUNBTQValue171,
        );
        this.offset -= timelineDefinitionGMOUNBTQValue171;
        var timelineDefinitionGMOUNBTQValue173 =
          this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        timelineDefinitionGMOUNBTQValue172.length - 1 &&
          (this.yylineno -= timelineDefinitionGMOUNBTQValue172.length - 1);
        var timelineDefinitionGMOUNBTQValue174 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: timelineDefinitionGMOUNBTQValue172
              ? (timelineDefinitionGMOUNBTQValue172.length ===
                timelineDefinitionGMOUNBTQValue173.length
                  ? this.yylloc.first_column
                  : 0) +
                timelineDefinitionGMOUNBTQValue173[
                  timelineDefinitionGMOUNBTQValue173.length -
                    timelineDefinitionGMOUNBTQValue172.length
                ].length -
                timelineDefinitionGMOUNBTQValue172[0].length
              : this.yylloc.first_column - timelineDefinitionGMOUNBTQValue171,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              timelineDefinitionGMOUNBTQValue174[0],
              timelineDefinitionGMOUNBTQValue174[0] +
                this.yyleng -
                timelineDefinitionGMOUNBTQValue171,
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
      less: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam156) {
        this.unput(this.match.slice(timelineDefinitionGMOUNBTQParam156));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var timelineDefinitionGMOUNBTQValue278 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (timelineDefinitionGMOUNBTQValue278.length > 20 ? "..." : "") +
          timelineDefinitionGMOUNBTQValue278.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var timelineDefinitionGMOUNBTQValue276 = this.match;
        return (
          timelineDefinitionGMOUNBTQValue276.length < 20 &&
            (timelineDefinitionGMOUNBTQValue276 += this._input.substr(
              0,
              20 - timelineDefinitionGMOUNBTQValue276.length,
            )),
          (
            timelineDefinitionGMOUNBTQValue276.substr(0, 20) +
            (timelineDefinitionGMOUNBTQValue276.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var timelineDefinitionGMOUNBTQValue285 = this.pastInput(),
          timelineDefinitionGMOUNBTQValue286 = Array(
            timelineDefinitionGMOUNBTQValue285.length + 1,
          ).join("-");
        return (
          timelineDefinitionGMOUNBTQValue285 +
          this.upcomingInput() +
          "\n" +
          timelineDefinitionGMOUNBTQValue286 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam10,
        timelineDefinitionGMOUNBTQParam11,
      ) {
        var timelineDefinitionGMOUNBTQValue142,
          timelineDefinitionGMOUNBTQValue143,
          timelineDefinitionGMOUNBTQValue144;
        if (
          (this.options.backtrack_lexer &&
            ((timelineDefinitionGMOUNBTQValue144 = {
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
              (timelineDefinitionGMOUNBTQValue144.yylloc.range =
                this.yylloc.range.slice(0))),
          (timelineDefinitionGMOUNBTQValue143 =
            timelineDefinitionGMOUNBTQParam10[0].match(/(?:\r\n?|\n).*/g)),
          timelineDefinitionGMOUNBTQValue143 &&
            (this.yylineno += timelineDefinitionGMOUNBTQValue143.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: timelineDefinitionGMOUNBTQValue143
              ? timelineDefinitionGMOUNBTQValue143[
                  timelineDefinitionGMOUNBTQValue143.length - 1
                ].length -
                timelineDefinitionGMOUNBTQValue143[
                  timelineDefinitionGMOUNBTQValue143.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                timelineDefinitionGMOUNBTQParam10[0].length,
          }),
          (this.yytext += timelineDefinitionGMOUNBTQParam10[0]),
          (this.match += timelineDefinitionGMOUNBTQParam10[0]),
          (this.matches = timelineDefinitionGMOUNBTQParam10),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            timelineDefinitionGMOUNBTQParam10[0].length,
          )),
          (this.matched += timelineDefinitionGMOUNBTQParam10[0]),
          (timelineDefinitionGMOUNBTQValue142 = this.performAction.call(
            this,
            this.yy,
            this,
            timelineDefinitionGMOUNBTQParam11,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          timelineDefinitionGMOUNBTQValue142)
        )
          return timelineDefinitionGMOUNBTQValue142;
        if (this._backtrack) {
          for (var timelineDefinitionGMOUNBTQValue145 in timelineDefinitionGMOUNBTQValue144)
            this[timelineDefinitionGMOUNBTQValue145] =
              timelineDefinitionGMOUNBTQValue144[
                timelineDefinitionGMOUNBTQValue145
              ];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var timelineDefinitionGMOUNBTQValue180,
          timelineDefinitionGMOUNBTQValue181,
          timelineDefinitionGMOUNBTQValue182,
          timelineDefinitionGMOUNBTQValue183;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var timelineDefinitionGMOUNBTQValue184 = this._currentRules(),
            timelineDefinitionGMOUNBTQValue185 = 0;
          timelineDefinitionGMOUNBTQValue185 <
          timelineDefinitionGMOUNBTQValue184.length;
          timelineDefinitionGMOUNBTQValue185++
        )
          if (
            ((timelineDefinitionGMOUNBTQValue182 = this._input.match(
              this.rules[
                timelineDefinitionGMOUNBTQValue184[
                  timelineDefinitionGMOUNBTQValue185
                ]
              ],
            )),
            timelineDefinitionGMOUNBTQValue182 &&
              (!timelineDefinitionGMOUNBTQValue181 ||
                timelineDefinitionGMOUNBTQValue182[0].length >
                  timelineDefinitionGMOUNBTQValue181[0].length))
          ) {
            if (
              ((timelineDefinitionGMOUNBTQValue181 =
                timelineDefinitionGMOUNBTQValue182),
              (timelineDefinitionGMOUNBTQValue183 =
                timelineDefinitionGMOUNBTQValue185),
              this.options.backtrack_lexer)
            ) {
              if (
                ((timelineDefinitionGMOUNBTQValue180 = this.test_match(
                  timelineDefinitionGMOUNBTQValue182,
                  timelineDefinitionGMOUNBTQValue184[
                    timelineDefinitionGMOUNBTQValue185
                  ],
                )),
                timelineDefinitionGMOUNBTQValue180 !== false)
              )
                return timelineDefinitionGMOUNBTQValue180;
              if (this._backtrack) {
                timelineDefinitionGMOUNBTQValue181 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return timelineDefinitionGMOUNBTQValue181
          ? ((timelineDefinitionGMOUNBTQValue180 = this.test_match(
              timelineDefinitionGMOUNBTQValue181,
              timelineDefinitionGMOUNBTQValue184[
                timelineDefinitionGMOUNBTQValue183
              ],
            )),
            timelineDefinitionGMOUNBTQValue180 === false
              ? false
              : timelineDefinitionGMOUNBTQValue180)
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
      begin: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam157) {
        this.conditionStack.push(timelineDefinitionGMOUNBTQParam157);
      }, "begin"),
      popState: chunkAGHRB4JFN(function () {
        return this.conditionStack.length - 1 > 0
          ? this.conditionStack.pop()
          : this.conditionStack[0];
      }, "popState"),
      _currentRules: chunkAGHRB4JFN(function () {
        return this.conditionStack.length &&
          this.conditionStack[this.conditionStack.length - 1]
          ? this.conditions[this.conditionStack[this.conditionStack.length - 1]]
              .rules
          : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      topState: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam134) {
        return (
          (timelineDefinitionGMOUNBTQParam134 =
            this.conditionStack.length -
            1 -
            Math.abs(timelineDefinitionGMOUNBTQParam134 || 0)),
          timelineDefinitionGMOUNBTQParam134 >= 0
            ? this.conditionStack[timelineDefinitionGMOUNBTQParam134]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (timelineDefinitionGMOUNBTQParam159) {
        this.begin(timelineDefinitionGMOUNBTQParam159);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam43,
        timelineDefinitionGMOUNBTQParam44,
        timelineDefinitionGMOUNBTQParam45,
        timelineDefinitionGMOUNBTQParam46,
      ) {
        switch (timelineDefinitionGMOUNBTQParam45) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 13;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 8;
          case 6:
            return 9;
          case 7:
            return 7;
          case 8:
            return 14;
          case 9:
            return (this.begin("acc_title"), 15);
          case 10:
            return (this.popState(), "acc_title_value");
          case 11:
            return (this.begin("acc_descr"), 17);
          case 12:
            return (this.popState(), "acc_descr_value");
          case 13:
            this.begin("acc_descr_multiline");
            break;
          case 14:
            this.popState();
            break;
          case 15:
            return "acc_descr_multiline_value";
          case 16:
            return 20;
          case 17:
            return 24;
          case 18:
            return 23;
          case 19:
            return 6;
          case 20:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [
        /^(?:%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n]+)/i,
        /^(?:\s+)/i,
        /^(?:#[^\n]*)/i,
        /^(?:timeline[ \t]+LR\b)/i,
        /^(?:timeline[ \t]+TD\b)/i,
        /^(?:timeline\b)/i,
        /^(?:title\s[^\n]+)/i,
        /^(?:accTitle\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*\{\s*)/i,
        /^(?:[\}])/i,
        /^(?:[^\}]*)/i,
        /^(?:section\s[^:\n]+)/i,
        /^(?::\s(?:[^:\n]|:(?!\s))+)/i,
        /^(?:[^#:\n]+)/i,
        /^(?:$)/i,
        /^(?:.)/i,
      ],
      conditions: {
        acc_descr_multiline: {
          rules: [14, 15],
          inclusive: false,
        },
        acc_descr: {
          rules: [12],
          inclusive: false,
        },
        acc_title: {
          rules: [10],
          inclusive: false,
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 16, 17, 18, 19, 20],
          inclusive: true,
        },
      },
    };
  })();
  function timelineDefinitionGMOUNBTQHelper2() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper2, "Parser"),
    (timelineDefinitionGMOUNBTQHelper2.prototype =
      timelineDefinitionGMOUNBTQValue67),
    (timelineDefinitionGMOUNBTQValue67.Parser =
      timelineDefinitionGMOUNBTQHelper2),
    new timelineDefinitionGMOUNBTQHelper2()
  );
})();
timelineDefinitionGMOUNBTQValue1.parser = timelineDefinitionGMOUNBTQValue1;
var timelineDefinitionGMOUNBTQValue2 = timelineDefinitionGMOUNBTQValue1,
  timelineDefinitionGMOUNBTQValue3 = {};
chunkAGHRB4JFT(timelineDefinitionGMOUNBTQValue3, {
  addEvent: () => timelineDefinitionGMOUNBTQValue18,
  addSection: () => timelineDefinitionGMOUNBTQValue14,
  addTask: () => timelineDefinitionGMOUNBTQValue17,
  addTaskOrg: () => timelineDefinitionGMOUNBTQValue19,
  clear: () => timelineDefinitionGMOUNBTQValue11,
  default: () => timelineDefinitionGMOUNBTQValue21,
  getCommonDb: () => timelineDefinitionGMOUNBTQValue10,
  getDirection: () => timelineDefinitionGMOUNBTQValue13,
  getSections: () => timelineDefinitionGMOUNBTQValue15,
  getTasks: () => timelineDefinitionGMOUNBTQValue16,
  setDirection: () => timelineDefinitionGMOUNBTQValue12,
});
var timelineDefinitionGMOUNBTQValue4 = "",
  timelineDefinitionGMOUNBTQValue5 = 0,
  timelineDefinitionGMOUNBTQValue6 = "LR",
  timelineDefinitionGMOUNBTQValue7 = [],
  timelineDefinitionGMOUNBTQValue8 = [],
  timelineDefinitionGMOUNBTQValue9 = [],
  timelineDefinitionGMOUNBTQValue10 = chunkAGHRB4JFN(
    () => chunkICPOFSXXH,
    "getCommonDb",
  ),
  timelineDefinitionGMOUNBTQValue11 = chunkAGHRB4JFN(function () {
    timelineDefinitionGMOUNBTQValue7.length = 0;
    timelineDefinitionGMOUNBTQValue8.length = 0;
    timelineDefinitionGMOUNBTQValue4 = "";
    timelineDefinitionGMOUNBTQValue9.length = 0;
    timelineDefinitionGMOUNBTQValue6 = "LR";
    _chunkICPOFSXXL();
  }, "clear"),
  timelineDefinitionGMOUNBTQValue12 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam161,
  ) {
    timelineDefinitionGMOUNBTQValue6 = timelineDefinitionGMOUNBTQParam161;
  }, "setDirection"),
  timelineDefinitionGMOUNBTQValue13 = chunkAGHRB4JFN(function () {
    return timelineDefinitionGMOUNBTQValue6;
  }, "getDirection"),
  timelineDefinitionGMOUNBTQValue14 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam160,
  ) {
    timelineDefinitionGMOUNBTQValue4 = timelineDefinitionGMOUNBTQParam160;
    timelineDefinitionGMOUNBTQValue7.push(timelineDefinitionGMOUNBTQParam160);
  }, "addSection"),
  timelineDefinitionGMOUNBTQValue15 = chunkAGHRB4JFN(function () {
    return timelineDefinitionGMOUNBTQValue7;
  }, "getSections"),
  timelineDefinitionGMOUNBTQValue16 = chunkAGHRB4JFN(function () {
    let timelineDefinitionGMOUNBTQValue290 =
        timelineDefinitionGMOUNBTQValue20(),
      timelineDefinitionGMOUNBTQValue291 = 0;
    for (
      ;
      !timelineDefinitionGMOUNBTQValue290 &&
      timelineDefinitionGMOUNBTQValue291 < 100;

    ) {
      timelineDefinitionGMOUNBTQValue290 = timelineDefinitionGMOUNBTQValue20();
      timelineDefinitionGMOUNBTQValue291++;
    }
    return (
      timelineDefinitionGMOUNBTQValue8.push(
        ...timelineDefinitionGMOUNBTQValue9,
      ),
      timelineDefinitionGMOUNBTQValue8
    );
  }, "getTasks"),
  timelineDefinitionGMOUNBTQValue17 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam135,
    timelineDefinitionGMOUNBTQParam136,
    timelineDefinitionGMOUNBTQParam137,
  ) {
    let timelineDefinitionGMOUNBTQValue287 = {
      id: timelineDefinitionGMOUNBTQValue5++,
      section: timelineDefinitionGMOUNBTQValue4,
      type: timelineDefinitionGMOUNBTQValue4,
      task: timelineDefinitionGMOUNBTQParam135,
      score: timelineDefinitionGMOUNBTQParam136 || 0,
      events: timelineDefinitionGMOUNBTQParam137
        ? [timelineDefinitionGMOUNBTQParam137]
        : [],
    };
    timelineDefinitionGMOUNBTQValue9.push(timelineDefinitionGMOUNBTQValue287);
  }, "addTask"),
  timelineDefinitionGMOUNBTQValue18 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam155,
  ) {
    timelineDefinitionGMOUNBTQValue9
      .find((item) => item.id === timelineDefinitionGMOUNBTQValue5 - 1)
      .events.push(timelineDefinitionGMOUNBTQParam155);
  }, "addEvent"),
  timelineDefinitionGMOUNBTQValue19 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam146,
  ) {
    let timelineDefinitionGMOUNBTQValue289 = {
      section: timelineDefinitionGMOUNBTQValue4,
      type: timelineDefinitionGMOUNBTQValue4,
      description: timelineDefinitionGMOUNBTQParam146,
      task: timelineDefinitionGMOUNBTQParam146,
      classes: [],
    };
    timelineDefinitionGMOUNBTQValue8.push(timelineDefinitionGMOUNBTQValue289);
  }, "addTaskOrg"),
  timelineDefinitionGMOUNBTQValue20 = chunkAGHRB4JFN(function () {
    let timelineDefinitionGMOUNBTQValue280 = chunkAGHRB4JFN(function (
        timelineDefinitionGMOUNBTQParam158,
      ) {
        return timelineDefinitionGMOUNBTQValue9[
          timelineDefinitionGMOUNBTQParam158
        ].processed;
      }, "compileTask"),
      timelineDefinitionGMOUNBTQValue281 = true;
    for (let [
      timelineDefinitionGMOUNBTQValue292,
      timelineDefinitionGMOUNBTQValue293,
    ] of timelineDefinitionGMOUNBTQValue9.entries()) {
      timelineDefinitionGMOUNBTQValue280(timelineDefinitionGMOUNBTQValue292);
      timelineDefinitionGMOUNBTQValue281 &&=
        timelineDefinitionGMOUNBTQValue293.processed;
    }
    return timelineDefinitionGMOUNBTQValue281;
  }, "compileTasks"),
  timelineDefinitionGMOUNBTQValue21 = {
    clear: timelineDefinitionGMOUNBTQValue11,
    getCommonDb: timelineDefinitionGMOUNBTQValue10,
    getDirection: timelineDefinitionGMOUNBTQValue13,
    setDirection: timelineDefinitionGMOUNBTQValue12,
    addSection: timelineDefinitionGMOUNBTQValue14,
    getSections: timelineDefinitionGMOUNBTQValue15,
    getTasks: timelineDefinitionGMOUNBTQValue16,
    addTask: timelineDefinitionGMOUNBTQValue17,
    addTaskOrg: timelineDefinitionGMOUNBTQValue19,
    addEvent: timelineDefinitionGMOUNBTQValue18,
  },
  timelineDefinitionGMOUNBTQValue22 = 0,
  timelineDefinitionGMOUNBTQValue23 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam112,
    timelineDefinitionGMOUNBTQParam113,
  ) {
    let timelineDefinitionGMOUNBTQValue264 =
      timelineDefinitionGMOUNBTQParam112.append("rect");
    return (
      timelineDefinitionGMOUNBTQValue264.attr(
        "x",
        timelineDefinitionGMOUNBTQParam113.x,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "y",
        timelineDefinitionGMOUNBTQParam113.y,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "fill",
        timelineDefinitionGMOUNBTQParam113.fill,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "stroke",
        timelineDefinitionGMOUNBTQParam113.stroke,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "width",
        timelineDefinitionGMOUNBTQParam113.width,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "height",
        timelineDefinitionGMOUNBTQParam113.height,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "rx",
        timelineDefinitionGMOUNBTQParam113.rx,
      ),
      timelineDefinitionGMOUNBTQValue264.attr(
        "ry",
        timelineDefinitionGMOUNBTQParam113.ry,
      ),
      timelineDefinitionGMOUNBTQParam113.class !== undefined &&
        timelineDefinitionGMOUNBTQValue264.attr(
          "class",
          timelineDefinitionGMOUNBTQParam113.class,
        ),
      timelineDefinitionGMOUNBTQValue264
    );
  }, "drawRect"),
  timelineDefinitionGMOUNBTQValue24 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam19,
    timelineDefinitionGMOUNBTQParam20,
  ) {
    let timelineDefinitionGMOUNBTQValue158 = timelineDefinitionGMOUNBTQParam19
        .append("circle")
        .attr("cx", timelineDefinitionGMOUNBTQParam20.cx)
        .attr("cy", timelineDefinitionGMOUNBTQParam20.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      timelineDefinitionGMOUNBTQValue159 =
        timelineDefinitionGMOUNBTQParam19.append("g");
    timelineDefinitionGMOUNBTQValue159
      .append("circle")
      .attr("cx", timelineDefinitionGMOUNBTQParam20.cx - 5)
      .attr("cy", timelineDefinitionGMOUNBTQParam20.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    timelineDefinitionGMOUNBTQValue159
      .append("circle")
      .attr("cx", timelineDefinitionGMOUNBTQParam20.cx + 5)
      .attr("cy", timelineDefinitionGMOUNBTQParam20.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function timelineDefinitionGMOUNBTQHelper9(
      timelineDefinitionGMOUNBTQParam118,
    ) {
      let timelineDefinitionGMOUNBTQValue270 = arc()
        .startAngle(Math.PI / 2)
        .endAngle(3 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionGMOUNBTQParam118
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionGMOUNBTQValue270)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionGMOUNBTQParam20.cx +
            "," +
            (timelineDefinitionGMOUNBTQParam20.cy + 2) +
            ")",
        );
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper9, "smile");
    function timelineDefinitionGMOUNBTQHelper10(
      timelineDefinitionGMOUNBTQParam116,
    ) {
      let timelineDefinitionGMOUNBTQValue269 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle(5 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionGMOUNBTQParam116
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionGMOUNBTQValue269)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionGMOUNBTQParam20.cx +
            "," +
            (timelineDefinitionGMOUNBTQParam20.cy + 7) +
            ")",
        );
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper10, "sad");
    function timelineDefinitionGMOUNBTQHelper11(
      timelineDefinitionGMOUNBTQParam117,
    ) {
      timelineDefinitionGMOUNBTQParam117
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", timelineDefinitionGMOUNBTQParam20.cx - 5)
        .attr("y1", timelineDefinitionGMOUNBTQParam20.cy + 7)
        .attr("x2", timelineDefinitionGMOUNBTQParam20.cx + 5)
        .attr("y2", timelineDefinitionGMOUNBTQParam20.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper11, "ambivalent"),
      timelineDefinitionGMOUNBTQParam20.score > 3
        ? timelineDefinitionGMOUNBTQHelper9(timelineDefinitionGMOUNBTQValue159)
        : timelineDefinitionGMOUNBTQParam20.score < 3
          ? timelineDefinitionGMOUNBTQHelper10(
              timelineDefinitionGMOUNBTQValue159,
            )
          : timelineDefinitionGMOUNBTQHelper11(
              timelineDefinitionGMOUNBTQValue159,
            ),
      timelineDefinitionGMOUNBTQValue158
    );
  }, "drawFace"),
  timelineDefinitionGMOUNBTQValue25 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam107,
    timelineDefinitionGMOUNBTQParam108,
  ) {
    let timelineDefinitionGMOUNBTQValue260 =
      timelineDefinitionGMOUNBTQParam107.append("circle");
    return (
      timelineDefinitionGMOUNBTQValue260.attr(
        "cx",
        timelineDefinitionGMOUNBTQParam108.cx,
      ),
      timelineDefinitionGMOUNBTQValue260.attr(
        "cy",
        timelineDefinitionGMOUNBTQParam108.cy,
      ),
      timelineDefinitionGMOUNBTQValue260.attr(
        "class",
        "actor-" + timelineDefinitionGMOUNBTQParam108.pos,
      ),
      timelineDefinitionGMOUNBTQValue260.attr(
        "fill",
        timelineDefinitionGMOUNBTQParam108.fill,
      ),
      timelineDefinitionGMOUNBTQValue260.attr(
        "stroke",
        timelineDefinitionGMOUNBTQParam108.stroke,
      ),
      timelineDefinitionGMOUNBTQValue260.attr(
        "r",
        timelineDefinitionGMOUNBTQParam108.r,
      ),
      timelineDefinitionGMOUNBTQValue260.class !== undefined &&
        timelineDefinitionGMOUNBTQValue260.attr(
          "class",
          timelineDefinitionGMOUNBTQValue260.class,
        ),
      timelineDefinitionGMOUNBTQParam108.title !== undefined &&
        timelineDefinitionGMOUNBTQValue260
          .append("title")
          .text(timelineDefinitionGMOUNBTQParam108.title),
      timelineDefinitionGMOUNBTQValue260
    );
  }, "drawCircle"),
  timelineDefinitionGMOUNBTQValue26 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam105,
    timelineDefinitionGMOUNBTQParam106,
  ) {
    let timelineDefinitionGMOUNBTQValue257 =
        timelineDefinitionGMOUNBTQParam106.text.replace(/<br\s*\/?>/gi, " "),
      timelineDefinitionGMOUNBTQValue258 =
        timelineDefinitionGMOUNBTQParam105.append("text");
    timelineDefinitionGMOUNBTQValue258.attr(
      "x",
      timelineDefinitionGMOUNBTQParam106.x,
    );
    timelineDefinitionGMOUNBTQValue258.attr(
      "y",
      timelineDefinitionGMOUNBTQParam106.y,
    );
    timelineDefinitionGMOUNBTQValue258.attr("class", "legend");
    timelineDefinitionGMOUNBTQValue258.style(
      "text-anchor",
      timelineDefinitionGMOUNBTQParam106.anchor,
    );
    timelineDefinitionGMOUNBTQParam106.class !== undefined &&
      timelineDefinitionGMOUNBTQValue258.attr(
        "class",
        timelineDefinitionGMOUNBTQParam106.class,
      );
    let timelineDefinitionGMOUNBTQValue259 =
      timelineDefinitionGMOUNBTQValue258.append("tspan");
    return (
      timelineDefinitionGMOUNBTQValue259.attr(
        "x",
        timelineDefinitionGMOUNBTQParam106.x +
          timelineDefinitionGMOUNBTQParam106.textMargin * 2,
      ),
      timelineDefinitionGMOUNBTQValue259.text(
        timelineDefinitionGMOUNBTQValue257,
      ),
      timelineDefinitionGMOUNBTQValue258
    );
  }, "drawText"),
  timelineDefinitionGMOUNBTQValue27 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam103,
    timelineDefinitionGMOUNBTQParam104,
  ) {
    function timelineDefinitionGMOUNBTQHelper12(
      timelineDefinitionGMOUNBTQParam129,
      timelineDefinitionGMOUNBTQParam130,
      timelineDefinitionGMOUNBTQParam131,
      timelineDefinitionGMOUNBTQParam132,
      timelineDefinitionGMOUNBTQParam133,
    ) {
      return (
        timelineDefinitionGMOUNBTQParam129 +
        "," +
        timelineDefinitionGMOUNBTQParam130 +
        " " +
        (timelineDefinitionGMOUNBTQParam129 +
          timelineDefinitionGMOUNBTQParam131) +
        "," +
        timelineDefinitionGMOUNBTQParam130 +
        " " +
        (timelineDefinitionGMOUNBTQParam129 +
          timelineDefinitionGMOUNBTQParam131) +
        "," +
        (timelineDefinitionGMOUNBTQParam130 +
          timelineDefinitionGMOUNBTQParam132 -
          timelineDefinitionGMOUNBTQParam133) +
        " " +
        (timelineDefinitionGMOUNBTQParam129 +
          timelineDefinitionGMOUNBTQParam131 -
          timelineDefinitionGMOUNBTQParam133 * 1.2) +
        "," +
        (timelineDefinitionGMOUNBTQParam130 +
          timelineDefinitionGMOUNBTQParam132) +
        " " +
        timelineDefinitionGMOUNBTQParam129 +
        "," +
        (timelineDefinitionGMOUNBTQParam130 +
          timelineDefinitionGMOUNBTQParam132)
      );
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper12, "genPoints");
    let timelineDefinitionGMOUNBTQValue255 =
      timelineDefinitionGMOUNBTQParam103.append("polygon");
    timelineDefinitionGMOUNBTQValue255.attr(
      "points",
      timelineDefinitionGMOUNBTQHelper12(
        timelineDefinitionGMOUNBTQParam104.x,
        timelineDefinitionGMOUNBTQParam104.y,
        50,
        20,
        7,
      ),
    );
    timelineDefinitionGMOUNBTQValue255.attr("class", "labelBox");
    timelineDefinitionGMOUNBTQParam104.y +=
      timelineDefinitionGMOUNBTQParam104.labelMargin;
    timelineDefinitionGMOUNBTQParam104.x +=
      0.5 * timelineDefinitionGMOUNBTQParam104.labelMargin;
    timelineDefinitionGMOUNBTQValue26(
      timelineDefinitionGMOUNBTQParam103,
      timelineDefinitionGMOUNBTQParam104,
    );
  }, "drawLabel"),
  timelineDefinitionGMOUNBTQValue28 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam109,
    timelineDefinitionGMOUNBTQParam110,
    timelineDefinitionGMOUNBTQParam111,
  ) {
    let timelineDefinitionGMOUNBTQValue261 =
        timelineDefinitionGMOUNBTQParam109.append("g"),
      timelineDefinitionGMOUNBTQValue262 = timelineDefinitionGMOUNBTQValue33();
    timelineDefinitionGMOUNBTQValue262.x = timelineDefinitionGMOUNBTQParam110.x;
    timelineDefinitionGMOUNBTQValue262.y = timelineDefinitionGMOUNBTQParam110.y;
    timelineDefinitionGMOUNBTQValue262.fill =
      timelineDefinitionGMOUNBTQParam110.fill;
    timelineDefinitionGMOUNBTQValue262.width =
      timelineDefinitionGMOUNBTQParam111.width;
    timelineDefinitionGMOUNBTQValue262.height =
      timelineDefinitionGMOUNBTQParam111.height;
    timelineDefinitionGMOUNBTQValue262.class =
      "journey-section section-type-" + timelineDefinitionGMOUNBTQParam110.num;
    timelineDefinitionGMOUNBTQValue262.rx = 3;
    timelineDefinitionGMOUNBTQValue262.ry = 3;
    timelineDefinitionGMOUNBTQValue23(
      timelineDefinitionGMOUNBTQValue261,
      timelineDefinitionGMOUNBTQValue262,
    );
    timelineDefinitionGMOUNBTQValue34(timelineDefinitionGMOUNBTQParam111)(
      timelineDefinitionGMOUNBTQParam110.text,
      timelineDefinitionGMOUNBTQValue261,
      timelineDefinitionGMOUNBTQValue262.x,
      timelineDefinitionGMOUNBTQValue262.y,
      timelineDefinitionGMOUNBTQValue262.width,
      timelineDefinitionGMOUNBTQValue262.height,
      {
        class:
          "journey-section section-type-" +
          timelineDefinitionGMOUNBTQParam110.num,
      },
      timelineDefinitionGMOUNBTQParam111,
      timelineDefinitionGMOUNBTQParam110.colour,
    );
  }, "drawSection"),
  timelineDefinitionGMOUNBTQValue29 = -1,
  timelineDefinitionGMOUNBTQValue30 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam54,
    timelineDefinitionGMOUNBTQParam55,
    timelineDefinitionGMOUNBTQParam56,
    timelineDefinitionGMOUNBTQParam57,
  ) {
    let timelineDefinitionGMOUNBTQValue187 =
        timelineDefinitionGMOUNBTQParam55.x +
        timelineDefinitionGMOUNBTQParam56.width / 2,
      timelineDefinitionGMOUNBTQValue188 =
        timelineDefinitionGMOUNBTQParam54.append("g");
    timelineDefinitionGMOUNBTQValue29++;
    timelineDefinitionGMOUNBTQValue188
      .append("line")
      .attr(
        "id",
        timelineDefinitionGMOUNBTQParam57 +
          "-task" +
          timelineDefinitionGMOUNBTQValue29,
      )
      .attr("x1", timelineDefinitionGMOUNBTQValue187)
      .attr("y1", timelineDefinitionGMOUNBTQParam55.y)
      .attr("x2", timelineDefinitionGMOUNBTQValue187)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    timelineDefinitionGMOUNBTQValue24(timelineDefinitionGMOUNBTQValue188, {
      cx: timelineDefinitionGMOUNBTQValue187,
      cy: 300 + (5 - timelineDefinitionGMOUNBTQParam55.score) * 30,
      score: timelineDefinitionGMOUNBTQParam55.score,
    });
    let timelineDefinitionGMOUNBTQValue189 =
      timelineDefinitionGMOUNBTQValue33();
    timelineDefinitionGMOUNBTQValue189.x = timelineDefinitionGMOUNBTQParam55.x;
    timelineDefinitionGMOUNBTQValue189.y = timelineDefinitionGMOUNBTQParam55.y;
    timelineDefinitionGMOUNBTQValue189.fill =
      timelineDefinitionGMOUNBTQParam55.fill;
    timelineDefinitionGMOUNBTQValue189.width =
      timelineDefinitionGMOUNBTQParam56.width;
    timelineDefinitionGMOUNBTQValue189.height =
      timelineDefinitionGMOUNBTQParam56.height;
    timelineDefinitionGMOUNBTQValue189.class =
      "task task-type-" + timelineDefinitionGMOUNBTQParam55.num;
    timelineDefinitionGMOUNBTQValue189.rx = 3;
    timelineDefinitionGMOUNBTQValue189.ry = 3;
    timelineDefinitionGMOUNBTQValue23(
      timelineDefinitionGMOUNBTQValue188,
      timelineDefinitionGMOUNBTQValue189,
    );
    timelineDefinitionGMOUNBTQValue34(timelineDefinitionGMOUNBTQParam56)(
      timelineDefinitionGMOUNBTQParam55.task,
      timelineDefinitionGMOUNBTQValue188,
      timelineDefinitionGMOUNBTQValue189.x,
      timelineDefinitionGMOUNBTQValue189.y,
      timelineDefinitionGMOUNBTQValue189.width,
      timelineDefinitionGMOUNBTQValue189.height,
      {
        class: "task",
      },
      timelineDefinitionGMOUNBTQParam56,
      timelineDefinitionGMOUNBTQParam55.colour,
    );
  }, "drawTask"),
  timelineDefinitionGMOUNBTQValue31 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam127,
    timelineDefinitionGMOUNBTQParam128,
  ) {
    timelineDefinitionGMOUNBTQValue23(timelineDefinitionGMOUNBTQParam127, {
      x: timelineDefinitionGMOUNBTQParam128.startx,
      y: timelineDefinitionGMOUNBTQParam128.starty,
      width:
        timelineDefinitionGMOUNBTQParam128.stopx -
        timelineDefinitionGMOUNBTQParam128.startx,
      height:
        timelineDefinitionGMOUNBTQParam128.stopy -
        timelineDefinitionGMOUNBTQParam128.starty,
      fill: timelineDefinitionGMOUNBTQParam128.fill,
      class: "rect",
    }).lower();
  }, "drawBackgroundRect"),
  timelineDefinitionGMOUNBTQValue32 = chunkAGHRB4JFN(function () {
    return {
      x: 0,
      y: 0,
      fill: undefined,
      "text-anchor": "start",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
    };
  }, "getTextObj"),
  timelineDefinitionGMOUNBTQValue33 = chunkAGHRB4JFN(function () {
    return {
      x: 0,
      y: 0,
      width: 100,
      anchor: "start",
      height: 100,
      rx: 0,
      ry: 0,
    };
  }, "getNoteRect"),
  timelineDefinitionGMOUNBTQValue34 = (function () {
    function timelineDefinitionGMOUNBTQHelper5(
      timelineDefinitionGMOUNBTQParam119,
      timelineDefinitionGMOUNBTQParam120,
      timelineDefinitionGMOUNBTQParam121,
      timelineDefinitionGMOUNBTQParam122,
      timelineDefinitionGMOUNBTQParam123,
      timelineDefinitionGMOUNBTQParam124,
      timelineDefinitionGMOUNBTQParam125,
      timelineDefinitionGMOUNBTQParam126,
    ) {
      timelineDefinitionGMOUNBTQHelper8(
        timelineDefinitionGMOUNBTQParam120
          .append("text")
          .attr(
            "x",
            timelineDefinitionGMOUNBTQParam121 +
              timelineDefinitionGMOUNBTQParam123 / 2,
          )
          .attr(
            "y",
            timelineDefinitionGMOUNBTQParam122 +
              timelineDefinitionGMOUNBTQParam124 / 2 +
              5,
          )
          .style("font-color", timelineDefinitionGMOUNBTQParam126)
          .style("text-anchor", "middle")
          .text(timelineDefinitionGMOUNBTQParam119),
        timelineDefinitionGMOUNBTQParam125,
      );
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper5, "byText");
    function timelineDefinitionGMOUNBTQHelper6(
      timelineDefinitionGMOUNBTQParam74,
      timelineDefinitionGMOUNBTQParam75,
      timelineDefinitionGMOUNBTQParam76,
      timelineDefinitionGMOUNBTQParam77,
      timelineDefinitionGMOUNBTQParam78,
      timelineDefinitionGMOUNBTQParam79,
      timelineDefinitionGMOUNBTQParam80,
      timelineDefinitionGMOUNBTQParam81,
      timelineDefinitionGMOUNBTQParam82,
    ) {
      let { taskFontSize, taskFontFamily } = timelineDefinitionGMOUNBTQParam81,
        timelineDefinitionGMOUNBTQValue206 =
          timelineDefinitionGMOUNBTQParam74.split(/<br\s*\/?>/gi);
      for (
        let timelineDefinitionGMOUNBTQValue244 = 0;
        timelineDefinitionGMOUNBTQValue244 <
        timelineDefinitionGMOUNBTQValue206.length;
        timelineDefinitionGMOUNBTQValue244++
      ) {
        let timelineDefinitionGMOUNBTQValue248 =
            timelineDefinitionGMOUNBTQValue244 * taskFontSize -
            (taskFontSize * (timelineDefinitionGMOUNBTQValue206.length - 1)) /
              2,
          timelineDefinitionGMOUNBTQValue249 = timelineDefinitionGMOUNBTQParam75
            .append("text")
            .attr(
              "x",
              timelineDefinitionGMOUNBTQParam76 +
                timelineDefinitionGMOUNBTQParam78 / 2,
            )
            .attr("y", timelineDefinitionGMOUNBTQParam77)
            .attr("fill", timelineDefinitionGMOUNBTQParam82)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        timelineDefinitionGMOUNBTQValue249
          .append("tspan")
          .attr(
            "x",
            timelineDefinitionGMOUNBTQParam76 +
              timelineDefinitionGMOUNBTQParam78 / 2,
          )
          .attr("dy", timelineDefinitionGMOUNBTQValue248)
          .text(
            timelineDefinitionGMOUNBTQValue206[
              timelineDefinitionGMOUNBTQValue244
            ],
          );
        timelineDefinitionGMOUNBTQValue249
          .attr(
            "y",
            timelineDefinitionGMOUNBTQParam77 +
              timelineDefinitionGMOUNBTQParam79 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        timelineDefinitionGMOUNBTQHelper8(
          timelineDefinitionGMOUNBTQValue249,
          timelineDefinitionGMOUNBTQParam80,
        );
      }
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper6, "byTspan");
    function timelineDefinitionGMOUNBTQHelper7(
      timelineDefinitionGMOUNBTQParam83,
      timelineDefinitionGMOUNBTQParam84,
      timelineDefinitionGMOUNBTQParam85,
      timelineDefinitionGMOUNBTQParam86,
      timelineDefinitionGMOUNBTQParam87,
      timelineDefinitionGMOUNBTQParam88,
      timelineDefinitionGMOUNBTQParam89,
      timelineDefinitionGMOUNBTQParam90,
    ) {
      let timelineDefinitionGMOUNBTQValue213 =
          timelineDefinitionGMOUNBTQParam84.append("switch"),
        timelineDefinitionGMOUNBTQValue214 = timelineDefinitionGMOUNBTQValue213
          .append("foreignObject")
          .attr("x", timelineDefinitionGMOUNBTQParam85)
          .attr("y", timelineDefinitionGMOUNBTQParam86)
          .attr("width", timelineDefinitionGMOUNBTQParam87)
          .attr("height", timelineDefinitionGMOUNBTQParam88)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      timelineDefinitionGMOUNBTQValue214
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(timelineDefinitionGMOUNBTQParam83);
      timelineDefinitionGMOUNBTQHelper6(
        timelineDefinitionGMOUNBTQParam83,
        timelineDefinitionGMOUNBTQValue213,
        timelineDefinitionGMOUNBTQParam85,
        timelineDefinitionGMOUNBTQParam86,
        timelineDefinitionGMOUNBTQParam87,
        timelineDefinitionGMOUNBTQParam88,
        timelineDefinitionGMOUNBTQParam89,
        timelineDefinitionGMOUNBTQParam90,
      );
      timelineDefinitionGMOUNBTQHelper8(
        timelineDefinitionGMOUNBTQValue214,
        timelineDefinitionGMOUNBTQParam89,
      );
    }
    chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper7, "byFo");
    function timelineDefinitionGMOUNBTQHelper8(
      timelineDefinitionGMOUNBTQParam152,
      timelineDefinitionGMOUNBTQParam153,
    ) {
      for (let timelineDefinitionGMOUNBTQValue296 in timelineDefinitionGMOUNBTQParam153)
        timelineDefinitionGMOUNBTQValue296 in
          timelineDefinitionGMOUNBTQParam153 &&
          timelineDefinitionGMOUNBTQParam152.attr(
            timelineDefinitionGMOUNBTQValue296,
            timelineDefinitionGMOUNBTQParam153[
              timelineDefinitionGMOUNBTQValue296
            ],
          );
    }
    return (
      chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper8, "_setTextAttrs"),
      function (timelineDefinitionGMOUNBTQParam147) {
        return timelineDefinitionGMOUNBTQParam147.textPlacement === "fo"
          ? timelineDefinitionGMOUNBTQHelper7
          : timelineDefinitionGMOUNBTQParam147.textPlacement === "old"
            ? timelineDefinitionGMOUNBTQHelper5
            : timelineDefinitionGMOUNBTQHelper6;
      }
    );
  })(),
  timelineDefinitionGMOUNBTQValue35 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam114,
    timelineDefinitionGMOUNBTQParam115,
  ) {
    timelineDefinitionGMOUNBTQValue22 = 0;
    timelineDefinitionGMOUNBTQValue29 = -1;
    timelineDefinitionGMOUNBTQParam114
      .append("defs")
      .append("marker")
      .attr("id", timelineDefinitionGMOUNBTQParam115 + "-arrowhead")
      .attr("refX", 5)
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
function timelineDefinitionGMOUNBTQHelper1(
  timelineDefinitionGMOUNBTQParam58,
  timelineDefinitionGMOUNBTQParam59,
) {
  timelineDefinitionGMOUNBTQParam58.each(function () {
    var timelineDefinitionGMOUNBTQValue198 = Src(this),
      timelineDefinitionGMOUNBTQValue199 = timelineDefinitionGMOUNBTQValue198
        .text()
        .split(/(\s+|<br>)/)
        .reverse(),
      timelineDefinitionGMOUNBTQValue200,
      timelineDefinitionGMOUNBTQValue201 = [],
      timelineDefinitionGMOUNBTQValue203 =
        timelineDefinitionGMOUNBTQValue198.attr("y"),
      timelineDefinitionGMOUNBTQValue204 = parseFloat(
        timelineDefinitionGMOUNBTQValue198.attr("dy"),
      ),
      timelineDefinitionGMOUNBTQValue205 = timelineDefinitionGMOUNBTQValue198
        .text(null)
        .append("tspan")
        .attr("x", 0)
        .attr("y", timelineDefinitionGMOUNBTQValue203)
        .attr("dy", timelineDefinitionGMOUNBTQValue204 + "em");
    for (
      let timelineDefinitionGMOUNBTQValue263 = 0;
      timelineDefinitionGMOUNBTQValue263 <
      timelineDefinitionGMOUNBTQValue199.length;
      timelineDefinitionGMOUNBTQValue263++
    ) {
      timelineDefinitionGMOUNBTQValue200 =
        timelineDefinitionGMOUNBTQValue199[
          timelineDefinitionGMOUNBTQValue199.length -
            1 -
            timelineDefinitionGMOUNBTQValue263
        ];
      timelineDefinitionGMOUNBTQValue201.push(
        timelineDefinitionGMOUNBTQValue200,
      );
      timelineDefinitionGMOUNBTQValue205.text(
        timelineDefinitionGMOUNBTQValue201.join(" ").trim(),
      );
      (timelineDefinitionGMOUNBTQValue205.node().getComputedTextLength() >
        timelineDefinitionGMOUNBTQParam59 ||
        timelineDefinitionGMOUNBTQValue200 === "<br>") &&
        (timelineDefinitionGMOUNBTQValue201.pop(),
        timelineDefinitionGMOUNBTQValue205.text(
          timelineDefinitionGMOUNBTQValue201.join(" ").trim(),
        ),
        (timelineDefinitionGMOUNBTQValue201 =
          timelineDefinitionGMOUNBTQValue200 === "<br>"
            ? [""]
            : [timelineDefinitionGMOUNBTQValue200]),
        (timelineDefinitionGMOUNBTQValue205 = timelineDefinitionGMOUNBTQValue198
          .append("tspan")
          .attr("x", 0)
          .attr("y", timelineDefinitionGMOUNBTQValue203)
          .attr("dy", "1.1em")
          .text(timelineDefinitionGMOUNBTQValue200)));
    }
  });
}
chunkAGHRB4JFN(timelineDefinitionGMOUNBTQHelper1, "wrap");
var timelineDefinitionGMOUNBTQValue36 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam12,
    timelineDefinitionGMOUNBTQParam13,
    timelineDefinitionGMOUNBTQParam14,
    timelineDefinitionGMOUNBTQParam15,
    timelineDefinitionGMOUNBTQParam16,
    timelineDefinitionGMOUNBTQParam17 = false,
  ) {
    let { theme, look } = timelineDefinitionGMOUNBTQParam15,
      timelineDefinitionGMOUNBTQValue146 = theme?.includes("redux"),
      timelineDefinitionGMOUNBTQValue147 =
        (timelineDefinitionGMOUNBTQParam14 %
          (timelineDefinitionGMOUNBTQParam15?.themeVariables
            ?.THEME_COLOR_LIMIT ?? 12)) -
        1,
      timelineDefinitionGMOUNBTQValue148 =
        timelineDefinitionGMOUNBTQParam12.append("g");
    timelineDefinitionGMOUNBTQParam13.section =
      timelineDefinitionGMOUNBTQValue147;
    timelineDefinitionGMOUNBTQValue148.attr(
      "class",
      (timelineDefinitionGMOUNBTQParam13.class
        ? timelineDefinitionGMOUNBTQParam13.class + " "
        : "") +
        "timeline-node " +
        ("section-" + timelineDefinitionGMOUNBTQValue147),
    );
    let timelineDefinitionGMOUNBTQValue149 =
        timelineDefinitionGMOUNBTQValue148.append("g"),
      timelineDefinitionGMOUNBTQValue150 =
        timelineDefinitionGMOUNBTQValue148.append("g"),
      timelineDefinitionGMOUNBTQValue151 = timelineDefinitionGMOUNBTQValue150
        .append("text")
        .text(timelineDefinitionGMOUNBTQParam13.descr)
        .attr("dy", "1em")
        .attr("alignment-baseline", "middle")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .call(
          timelineDefinitionGMOUNBTQHelper1,
          timelineDefinitionGMOUNBTQParam13.width,
        )
        .node()
        .getBBox(),
      timelineDefinitionGMOUNBTQValue152 = timelineDefinitionGMOUNBTQParam15
        .fontSize?.replace
        ? timelineDefinitionGMOUNBTQParam15.fontSize.replace("px", "")
        : timelineDefinitionGMOUNBTQParam15.fontSize;
    if (
      ((timelineDefinitionGMOUNBTQParam13.height =
        timelineDefinitionGMOUNBTQValue151.height +
        timelineDefinitionGMOUNBTQValue152 * 1.1 * 0.5 +
        timelineDefinitionGMOUNBTQParam13.padding),
      (timelineDefinitionGMOUNBTQParam13.height = Math.max(
        timelineDefinitionGMOUNBTQParam13.height,
        timelineDefinitionGMOUNBTQParam13.maxHeight,
      )),
      (timelineDefinitionGMOUNBTQParam13.width +=
        2 * timelineDefinitionGMOUNBTQParam13.padding),
      timelineDefinitionGMOUNBTQValue150.attr(
        "transform",
        "translate(" +
          timelineDefinitionGMOUNBTQParam13.width / 2 +
          ", " +
          timelineDefinitionGMOUNBTQParam13.padding / 2 +
          ")",
      ),
      timelineDefinitionGMOUNBTQValue146 &&
        timelineDefinitionGMOUNBTQValue150.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQParam13.width / 2}, ${timelineDefinitionGMOUNBTQParam17 ? timelineDefinitionGMOUNBTQParam13.padding / 2 + 3 : timelineDefinitionGMOUNBTQParam13.padding})`,
        ),
      timelineDefinitionGMOUNBTQValue38(
        timelineDefinitionGMOUNBTQValue149,
        timelineDefinitionGMOUNBTQParam13,
        timelineDefinitionGMOUNBTQValue147,
        timelineDefinitionGMOUNBTQParam16,
        timelineDefinitionGMOUNBTQParam15,
      ),
      look === "neo" &&
        (timelineDefinitionGMOUNBTQValue148.attr("data-look", "neo"),
        timelineDefinitionGMOUNBTQValue146))
    ) {
      let timelineDefinitionGMOUNBTQValue207 = theme.includes("dark"),
        timelineDefinitionGMOUNBTQValue208 = Src(
          timelineDefinitionGMOUNBTQParam12.node()?.ownerSVGElement ??
            timelineDefinitionGMOUNBTQParam12.node(),
        ),
        timelineDefinitionGMOUNBTQValue209 =
          timelineDefinitionGMOUNBTQValue208.attr("id") ?? "",
        timelineDefinitionGMOUNBTQValue210 = timelineDefinitionGMOUNBTQValue209
          ? `${timelineDefinitionGMOUNBTQValue209}-drop-shadow`
          : "drop-shadow";
      if (
        timelineDefinitionGMOUNBTQValue208
          .select(`#${timelineDefinitionGMOUNBTQValue210}`)
          .empty()
      ) {
        let timelineDefinitionGMOUNBTQValue256 =
          timelineDefinitionGMOUNBTQValue208.select("defs");
        (timelineDefinitionGMOUNBTQValue256.empty()
          ? timelineDefinitionGMOUNBTQValue208.append("defs")
          : timelineDefinitionGMOUNBTQValue256
        )
          .append("filter")
          .attr("id", timelineDefinitionGMOUNBTQValue210)
          .attr("height", "130%")
          .attr("width", "130%")
          .append("feDropShadow")
          .attr("dx", "4")
          .attr("dy", "4")
          .attr("stdDeviation", 0)
          .attr(
            "flood-opacity",
            timelineDefinitionGMOUNBTQValue207 ? "0.2" : "0.06",
          )
          .attr(
            "flood-color",
            timelineDefinitionGMOUNBTQValue207 ? "#FFFFFF" : "#000000",
          );
      }
    }
    return timelineDefinitionGMOUNBTQParam13;
  }, "drawNode"),
  timelineDefinitionGMOUNBTQValue37 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam93,
    timelineDefinitionGMOUNBTQParam94,
    timelineDefinitionGMOUNBTQParam95,
  ) {
    let timelineDefinitionGMOUNBTQValue245 =
        timelineDefinitionGMOUNBTQParam93.append("g"),
      timelineDefinitionGMOUNBTQValue246 = timelineDefinitionGMOUNBTQValue245
        .append("text")
        .text(timelineDefinitionGMOUNBTQParam94.descr)
        .attr("dy", "1em")
        .attr("alignment-baseline", "middle")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .call(
          timelineDefinitionGMOUNBTQHelper1,
          timelineDefinitionGMOUNBTQParam94.width,
        )
        .node()
        .getBBox(),
      timelineDefinitionGMOUNBTQValue247 = timelineDefinitionGMOUNBTQParam95
        .fontSize?.replace
        ? timelineDefinitionGMOUNBTQParam95.fontSize.replace("px", "")
        : timelineDefinitionGMOUNBTQParam95.fontSize;
    return (
      timelineDefinitionGMOUNBTQValue245.remove(),
      timelineDefinitionGMOUNBTQValue246.height +
        timelineDefinitionGMOUNBTQValue247 * 1.1 * 0.5 +
        timelineDefinitionGMOUNBTQParam94.padding
    );
  }, "getVirtualNodeHeight"),
  timelineDefinitionGMOUNBTQValue38 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam60,
    timelineDefinitionGMOUNBTQParam61,
    timelineDefinitionGMOUNBTQParam62,
    timelineDefinitionGMOUNBTQParam63,
    timelineDefinitionGMOUNBTQParam64,
  ) {
    let { theme } = timelineDefinitionGMOUNBTQParam64,
      timelineDefinitionGMOUNBTQValue190 = theme?.includes("redux") ? 0 : 5,
      timelineDefinitionGMOUNBTQValue191 =
        timelineDefinitionGMOUNBTQValue190 > 0
          ? `M0 ${timelineDefinitionGMOUNBTQParam61.height - 5} v${-timelineDefinitionGMOUNBTQParam61.height + 10} q0,-${timelineDefinitionGMOUNBTQValue190},${timelineDefinitionGMOUNBTQValue190},-${timelineDefinitionGMOUNBTQValue190} h${timelineDefinitionGMOUNBTQParam61.width - 10} q${timelineDefinitionGMOUNBTQValue190},0,${timelineDefinitionGMOUNBTQValue190},${timelineDefinitionGMOUNBTQValue190} v${timelineDefinitionGMOUNBTQParam61.height - 5} H0 Z`
          : `M0 ${timelineDefinitionGMOUNBTQParam61.height - 5} v${-(timelineDefinitionGMOUNBTQParam61.height - 5)} h${timelineDefinitionGMOUNBTQParam61.width} v${timelineDefinitionGMOUNBTQParam61.height} H0 Z`;
    timelineDefinitionGMOUNBTQParam60
      .append("path")
      .attr(
        "id",
        timelineDefinitionGMOUNBTQParam63 +
          "-node-" +
          timelineDefinitionGMOUNBTQValue22++,
      )
      .attr("class", "node-bkg node-" + timelineDefinitionGMOUNBTQParam61.type)
      .attr("d", timelineDefinitionGMOUNBTQValue191);
    theme?.includes("redux") ||
      timelineDefinitionGMOUNBTQParam60
        .append("line")
        .attr("class", "node-line-" + timelineDefinitionGMOUNBTQParam62)
        .attr("x1", 0)
        .attr("y1", timelineDefinitionGMOUNBTQParam61.height)
        .attr("x2", timelineDefinitionGMOUNBTQParam61.width)
        .attr("y2", timelineDefinitionGMOUNBTQParam61.height);
  }, "defaultBkg"),
  timelineDefinitionGMOUNBTQValue39 = {
    drawRect: timelineDefinitionGMOUNBTQValue23,
    drawCircle: timelineDefinitionGMOUNBTQValue25,
    drawSection: timelineDefinitionGMOUNBTQValue28,
    drawText: timelineDefinitionGMOUNBTQValue26,
    drawLabel: timelineDefinitionGMOUNBTQValue27,
    drawTask: timelineDefinitionGMOUNBTQValue30,
    drawBackgroundRect: timelineDefinitionGMOUNBTQValue31,
    getTextObj: timelineDefinitionGMOUNBTQValue32,
    getNoteRect: timelineDefinitionGMOUNBTQValue33,
    initGraphics: timelineDefinitionGMOUNBTQValue35,
    drawNode: timelineDefinitionGMOUNBTQValue36,
    getVirtualNodeHeight: timelineDefinitionGMOUNBTQValue37,
  },
  timelineDefinitionGMOUNBTQValue40 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam1,
    timelineDefinitionGMOUNBTQParam2,
    timelineDefinitionGMOUNBTQParam3,
    timelineDefinitionGMOUNBTQParam4,
  ) {
    let timelineDefinitionGMOUNBTQValue68 = _chunkICPOFSXXP(),
      { look, theme, themeVariables } = timelineDefinitionGMOUNBTQValue68,
      { useGradient, gradientStart, gradientStop } = themeVariables,
      timelineDefinitionGMOUNBTQValue69 =
        timelineDefinitionGMOUNBTQValue68.timeline?.leftMargin ?? 50;
    chunkAGHRB4JFR.debug("timeline", timelineDefinitionGMOUNBTQParam4.db);
    let timelineDefinitionGMOUNBTQValue70 =
        timelineDefinitionGMOUNBTQValue68.securityLevel,
      timelineDefinitionGMOUNBTQValue71;
    timelineDefinitionGMOUNBTQValue70 === "sandbox" &&
      (timelineDefinitionGMOUNBTQValue71 = Src(
        "#i" + timelineDefinitionGMOUNBTQParam2,
      ));
    let timelineDefinitionGMOUNBTQValue72 = Src(
      timelineDefinitionGMOUNBTQValue70 === "sandbox"
        ? timelineDefinitionGMOUNBTQValue71.nodes()[0].contentDocument.body
        : "body",
    ).select("#" + timelineDefinitionGMOUNBTQParam2);
    timelineDefinitionGMOUNBTQValue72.append("g");
    let timelineDefinitionGMOUNBTQValue73 =
        timelineDefinitionGMOUNBTQParam4.db.getTasks(),
      timelineDefinitionGMOUNBTQValue74 = timelineDefinitionGMOUNBTQParam4.db
        .getCommonDb()
        .getDiagramTitle();
    chunkAGHRB4JFR.debug("task", timelineDefinitionGMOUNBTQValue73);
    timelineDefinitionGMOUNBTQValue39.initGraphics(
      timelineDefinitionGMOUNBTQValue72,
      timelineDefinitionGMOUNBTQParam2,
    );
    let timelineDefinitionGMOUNBTQValue75 =
      timelineDefinitionGMOUNBTQParam4.db.getSections();
    chunkAGHRB4JFR.debug("sections", timelineDefinitionGMOUNBTQValue75);
    let timelineDefinitionGMOUNBTQValue76 = 0,
      timelineDefinitionGMOUNBTQValue77 = 0,
      timelineDefinitionGMOUNBTQValue78 = 0,
      timelineDefinitionGMOUNBTQValue79 = 0,
      timelineDefinitionGMOUNBTQValue80 =
        50 + timelineDefinitionGMOUNBTQValue69,
      timelineDefinitionGMOUNBTQValue81 = 50;
    timelineDefinitionGMOUNBTQValue79 = 50;
    let timelineDefinitionGMOUNBTQValue82 = 0,
      timelineDefinitionGMOUNBTQValue83 = true;
    timelineDefinitionGMOUNBTQValue75.forEach(function (item) {
      let timelineDefinitionGMOUNBTQValue272 = {
          number: timelineDefinitionGMOUNBTQValue82,
          descr: item,
          section: timelineDefinitionGMOUNBTQValue82,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionGMOUNBTQValue76,
        },
        timelineDefinitionGMOUNBTQValue273 =
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue72,
            timelineDefinitionGMOUNBTQValue272,
            timelineDefinitionGMOUNBTQValue68,
          );
      chunkAGHRB4JFR.debug(
        "sectionHeight before draw",
        timelineDefinitionGMOUNBTQValue273,
      );
      timelineDefinitionGMOUNBTQValue76 = Math.max(
        timelineDefinitionGMOUNBTQValue76,
        timelineDefinitionGMOUNBTQValue273 + 20,
      );
    });
    let timelineDefinitionGMOUNBTQValue84 = 0,
      timelineDefinitionGMOUNBTQValue85 = 0;
    chunkAGHRB4JFR.debug(
      "tasks.length",
      timelineDefinitionGMOUNBTQValue73.length,
    );
    for (let [
      timelineDefinitionGMOUNBTQValue211,
      timelineDefinitionGMOUNBTQValue212,
    ] of timelineDefinitionGMOUNBTQValue73.entries()) {
      let timelineDefinitionGMOUNBTQValue216 = {
          number: timelineDefinitionGMOUNBTQValue211,
          descr: timelineDefinitionGMOUNBTQValue212,
          section: timelineDefinitionGMOUNBTQValue212.section,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionGMOUNBTQValue77,
        },
        timelineDefinitionGMOUNBTQValue217 =
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue72,
            timelineDefinitionGMOUNBTQValue216,
            timelineDefinitionGMOUNBTQValue68,
          );
      chunkAGHRB4JFR.debug(
        "taskHeight before draw",
        timelineDefinitionGMOUNBTQValue217,
      );
      timelineDefinitionGMOUNBTQValue77 = Math.max(
        timelineDefinitionGMOUNBTQValue77,
        timelineDefinitionGMOUNBTQValue217 + 20,
      );
      timelineDefinitionGMOUNBTQValue84 = Math.max(
        timelineDefinitionGMOUNBTQValue84,
        timelineDefinitionGMOUNBTQValue212.events.length,
      );
      let timelineDefinitionGMOUNBTQValue218 = 0;
      for (let timelineDefinitionGMOUNBTQValue277 of timelineDefinitionGMOUNBTQValue212.events) {
        let timelineDefinitionGMOUNBTQValue283 = {
          descr: timelineDefinitionGMOUNBTQValue277,
          section: timelineDefinitionGMOUNBTQValue212.section,
          number: timelineDefinitionGMOUNBTQValue212.section,
          width: 150,
          padding: 20,
          maxHeight: 50,
        };
        timelineDefinitionGMOUNBTQValue218 +=
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue72,
            timelineDefinitionGMOUNBTQValue283,
            timelineDefinitionGMOUNBTQValue68,
          );
      }
      timelineDefinitionGMOUNBTQValue212.events.length > 0 &&
        (timelineDefinitionGMOUNBTQValue218 +=
          (timelineDefinitionGMOUNBTQValue212.events.length - 1) * 10);
      timelineDefinitionGMOUNBTQValue85 = Math.max(
        timelineDefinitionGMOUNBTQValue85,
        timelineDefinitionGMOUNBTQValue218,
      );
    }
    chunkAGHRB4JFR.debug(
      "maxSectionHeight before draw",
      timelineDefinitionGMOUNBTQValue76,
    );
    chunkAGHRB4JFR.debug(
      "maxTaskHeight before draw",
      timelineDefinitionGMOUNBTQValue77,
    );
    timelineDefinitionGMOUNBTQValue75 &&
    timelineDefinitionGMOUNBTQValue75.length > 0
      ? timelineDefinitionGMOUNBTQValue75.forEach((item) => {
          let timelineDefinitionGMOUNBTQValue240 =
              timelineDefinitionGMOUNBTQValue73.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionGMOUNBTQValue241 = {
              number: timelineDefinitionGMOUNBTQValue82,
              descr: item,
              section: timelineDefinitionGMOUNBTQValue82,
              width:
                200 * Math.max(timelineDefinitionGMOUNBTQValue240.length, 1) -
                50,
              padding: 20,
              maxHeight: timelineDefinitionGMOUNBTQValue76,
            };
          chunkAGHRB4JFR.debug(
            "sectionNode",
            timelineDefinitionGMOUNBTQValue241,
          );
          let timelineDefinitionGMOUNBTQValue242 =
              timelineDefinitionGMOUNBTQValue72.append("g"),
            timelineDefinitionGMOUNBTQValue243 =
              timelineDefinitionGMOUNBTQValue39.drawNode(
                timelineDefinitionGMOUNBTQValue242,
                timelineDefinitionGMOUNBTQValue241,
                timelineDefinitionGMOUNBTQValue82,
                timelineDefinitionGMOUNBTQValue68,
                timelineDefinitionGMOUNBTQParam2,
              );
          chunkAGHRB4JFR.debug(
            "sectionNode output",
            timelineDefinitionGMOUNBTQValue243,
          );
          timelineDefinitionGMOUNBTQValue242.attr(
            "transform",
            `translate(${timelineDefinitionGMOUNBTQValue80}, ${timelineDefinitionGMOUNBTQValue79})`,
          );
          timelineDefinitionGMOUNBTQValue81 +=
            timelineDefinitionGMOUNBTQValue76 + 50;
          timelineDefinitionGMOUNBTQValue240.length > 0 &&
            timelineDefinitionGMOUNBTQValue41(
              timelineDefinitionGMOUNBTQValue72,
              timelineDefinitionGMOUNBTQValue240,
              timelineDefinitionGMOUNBTQValue82,
              timelineDefinitionGMOUNBTQValue80,
              timelineDefinitionGMOUNBTQValue81,
              timelineDefinitionGMOUNBTQValue77,
              timelineDefinitionGMOUNBTQValue68,
              timelineDefinitionGMOUNBTQValue84,
              timelineDefinitionGMOUNBTQValue85,
              timelineDefinitionGMOUNBTQValue76,
              false,
              timelineDefinitionGMOUNBTQParam2,
            );
          timelineDefinitionGMOUNBTQValue80 +=
            200 * Math.max(timelineDefinitionGMOUNBTQValue240.length, 1);
          timelineDefinitionGMOUNBTQValue81 = timelineDefinitionGMOUNBTQValue79;
          timelineDefinitionGMOUNBTQValue82++;
        })
      : ((timelineDefinitionGMOUNBTQValue83 = false),
        timelineDefinitionGMOUNBTQValue41(
          timelineDefinitionGMOUNBTQValue72,
          timelineDefinitionGMOUNBTQValue73,
          timelineDefinitionGMOUNBTQValue82,
          timelineDefinitionGMOUNBTQValue80,
          timelineDefinitionGMOUNBTQValue81,
          timelineDefinitionGMOUNBTQValue77,
          timelineDefinitionGMOUNBTQValue68,
          timelineDefinitionGMOUNBTQValue84,
          timelineDefinitionGMOUNBTQValue85,
          timelineDefinitionGMOUNBTQValue76,
          true,
          timelineDefinitionGMOUNBTQParam2,
        ));
    let timelineDefinitionGMOUNBTQValue86 = timelineDefinitionGMOUNBTQValue72
      .node()
      .getBBox();
    if (
      (chunkAGHRB4JFR.debug("bounds", timelineDefinitionGMOUNBTQValue86),
      timelineDefinitionGMOUNBTQValue74 &&
        timelineDefinitionGMOUNBTQValue72
          .append("text")
          .text(timelineDefinitionGMOUNBTQValue74)
          .attr(
            "x",
            look === "neo"
              ? timelineDefinitionGMOUNBTQValue86.x * 2 +
                  timelineDefinitionGMOUNBTQValue69
              : timelineDefinitionGMOUNBTQValue86.width / 2 -
                  timelineDefinitionGMOUNBTQValue69,
          )
          .attr("font-size", "4ex")
          .attr("font-weight", "bold")
          .attr("y", 20),
      (timelineDefinitionGMOUNBTQValue78 = timelineDefinitionGMOUNBTQValue83
        ? timelineDefinitionGMOUNBTQValue76 +
          timelineDefinitionGMOUNBTQValue77 +
          150
        : timelineDefinitionGMOUNBTQValue77 + 100),
      timelineDefinitionGMOUNBTQValue72
        .append("g")
        .attr("class", "lineWrapper")
        .append("line")
        .attr("x1", timelineDefinitionGMOUNBTQValue69)
        .attr("y1", timelineDefinitionGMOUNBTQValue78)
        .attr(
          "x2",
          timelineDefinitionGMOUNBTQValue86.width +
            3 * timelineDefinitionGMOUNBTQValue69,
        )
        .attr("y2", timelineDefinitionGMOUNBTQValue78)
        .attr("stroke-width", 4)
        .attr("stroke", "black")
        .attr(
          "marker-end",
          `url(#${timelineDefinitionGMOUNBTQParam2}-arrowhead)`,
        ),
      look === "neo" && useGradient && theme !== "neutral")
    ) {
      let timelineDefinitionGMOUNBTQValue227 =
          timelineDefinitionGMOUNBTQValue72.select("defs"),
        timelineDefinitionGMOUNBTQValue228 = (
          timelineDefinitionGMOUNBTQValue227.empty()
            ? timelineDefinitionGMOUNBTQValue72.append("defs")
            : timelineDefinitionGMOUNBTQValue227
        )
          .append("linearGradient")
          .attr(
            "id",
            timelineDefinitionGMOUNBTQValue72.attr("id") + "-gradient",
          )
          .attr("gradientUnits", "objectBoundingBox")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "0%");
      timelineDefinitionGMOUNBTQValue228
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", gradientStart)
        .attr("stop-opacity", 1);
      timelineDefinitionGMOUNBTQValue228
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", gradientStop)
        .attr("stop-opacity", 1);
    }
    _chunkICPOFSXXS(
      undefined,
      timelineDefinitionGMOUNBTQValue72,
      timelineDefinitionGMOUNBTQValue68.timeline?.padding ?? 50,
      timelineDefinitionGMOUNBTQValue68.timeline?.useMaxWidth ?? false,
    );
  }, "draw"),
  timelineDefinitionGMOUNBTQValue41 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam24,
    timelineDefinitionGMOUNBTQParam25,
    timelineDefinitionGMOUNBTQParam26,
    timelineDefinitionGMOUNBTQParam27,
    timelineDefinitionGMOUNBTQParam28,
    timelineDefinitionGMOUNBTQParam29,
    timelineDefinitionGMOUNBTQParam30,
    timelineDefinitionGMOUNBTQParam31,
    timelineDefinitionGMOUNBTQParam32,
    timelineDefinitionGMOUNBTQParam33,
    timelineDefinitionGMOUNBTQParam34,
    timelineDefinitionGMOUNBTQParam35,
  ) {
    for (let timelineDefinitionGMOUNBTQValue176 of timelineDefinitionGMOUNBTQParam25) {
      let timelineDefinitionGMOUNBTQValue177 = {
        descr: timelineDefinitionGMOUNBTQValue176.task,
        section: timelineDefinitionGMOUNBTQParam26,
        number: timelineDefinitionGMOUNBTQParam26,
        width: 150,
        padding: 20,
        maxHeight: timelineDefinitionGMOUNBTQParam29,
      };
      chunkAGHRB4JFR.debug("taskNode", timelineDefinitionGMOUNBTQValue177);
      let timelineDefinitionGMOUNBTQValue178 = timelineDefinitionGMOUNBTQParam24
          .append("g")
          .attr("class", "taskWrapper"),
        timelineDefinitionGMOUNBTQValue179 =
          timelineDefinitionGMOUNBTQValue39.drawNode(
            timelineDefinitionGMOUNBTQValue178,
            timelineDefinitionGMOUNBTQValue177,
            timelineDefinitionGMOUNBTQParam26,
            timelineDefinitionGMOUNBTQParam30,
            timelineDefinitionGMOUNBTQParam35,
          ).height;
      if (
        (chunkAGHRB4JFR.debug(
          "taskHeight after draw",
          timelineDefinitionGMOUNBTQValue179,
        ),
        timelineDefinitionGMOUNBTQValue178.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQParam27}, ${timelineDefinitionGMOUNBTQParam28})`,
        ),
        (timelineDefinitionGMOUNBTQParam29 = Math.max(
          timelineDefinitionGMOUNBTQParam29,
          timelineDefinitionGMOUNBTQValue179,
        )),
        timelineDefinitionGMOUNBTQValue176.events)
      ) {
        let timelineDefinitionGMOUNBTQValue250 =
            timelineDefinitionGMOUNBTQParam24
              .append("g")
              .attr("class", "lineWrapper"),
          timelineDefinitionGMOUNBTQValue251 =
            timelineDefinitionGMOUNBTQParam29;
        timelineDefinitionGMOUNBTQParam28 += 100;
        timelineDefinitionGMOUNBTQValue251 += timelineDefinitionGMOUNBTQValue42(
          timelineDefinitionGMOUNBTQParam24,
          timelineDefinitionGMOUNBTQValue176.events,
          timelineDefinitionGMOUNBTQParam26,
          timelineDefinitionGMOUNBTQParam27,
          timelineDefinitionGMOUNBTQParam28,
          timelineDefinitionGMOUNBTQParam30,
          timelineDefinitionGMOUNBTQParam35,
        );
        timelineDefinitionGMOUNBTQParam28 -= 100;
        timelineDefinitionGMOUNBTQValue250
          .append("line")
          .attr("x1", timelineDefinitionGMOUNBTQParam27 + 95)
          .attr(
            "y1",
            timelineDefinitionGMOUNBTQParam28 +
              timelineDefinitionGMOUNBTQParam29,
          )
          .attr("x2", timelineDefinitionGMOUNBTQParam27 + 95)
          .attr(
            "y2",
            timelineDefinitionGMOUNBTQParam28 +
              timelineDefinitionGMOUNBTQParam29 +
              100 +
              timelineDefinitionGMOUNBTQParam32 +
              100,
          )
          .attr("stroke-width", 2)
          .attr("stroke", "black")
          .attr(
            "marker-end",
            `url(#${timelineDefinitionGMOUNBTQParam35}-arrowhead)`,
          )
          .attr("stroke-dasharray", "5,5");
      }
      timelineDefinitionGMOUNBTQParam27 += 200;
      timelineDefinitionGMOUNBTQParam34 &&
        !timelineDefinitionGMOUNBTQParam30.timeline?.disableMulticolor &&
        timelineDefinitionGMOUNBTQParam26++;
    }
    timelineDefinitionGMOUNBTQParam28 -= 10;
  }, "drawTasks"),
  timelineDefinitionGMOUNBTQValue42 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam96,
    timelineDefinitionGMOUNBTQParam97,
    timelineDefinitionGMOUNBTQParam98,
    timelineDefinitionGMOUNBTQParam99,
    timelineDefinitionGMOUNBTQParam100,
    timelineDefinitionGMOUNBTQParam101,
    timelineDefinitionGMOUNBTQParam102,
  ) {
    let timelineDefinitionGMOUNBTQValue252 = 0,
      timelineDefinitionGMOUNBTQValue253 = timelineDefinitionGMOUNBTQParam100;
    timelineDefinitionGMOUNBTQParam100 += 100;
    for (let timelineDefinitionGMOUNBTQValue265 of timelineDefinitionGMOUNBTQParam97) {
      let timelineDefinitionGMOUNBTQValue266 = {
        descr: timelineDefinitionGMOUNBTQValue265,
        section: timelineDefinitionGMOUNBTQParam98,
        number: timelineDefinitionGMOUNBTQParam98,
        width: 150,
        padding: 20,
        maxHeight: 50,
      };
      chunkAGHRB4JFR.debug("eventNode", timelineDefinitionGMOUNBTQValue266);
      let timelineDefinitionGMOUNBTQValue267 = timelineDefinitionGMOUNBTQParam96
          .append("g")
          .attr("class", "eventWrapper"),
        timelineDefinitionGMOUNBTQValue268 =
          timelineDefinitionGMOUNBTQValue39.drawNode(
            timelineDefinitionGMOUNBTQValue267,
            timelineDefinitionGMOUNBTQValue266,
            timelineDefinitionGMOUNBTQParam98,
            timelineDefinitionGMOUNBTQParam101,
            timelineDefinitionGMOUNBTQParam102,
            true,
          ).height;
      timelineDefinitionGMOUNBTQValue252 += timelineDefinitionGMOUNBTQValue268;
      timelineDefinitionGMOUNBTQValue267.attr(
        "transform",
        `translate(${timelineDefinitionGMOUNBTQParam99}, ${timelineDefinitionGMOUNBTQParam100})`,
      );
      timelineDefinitionGMOUNBTQParam100 =
        timelineDefinitionGMOUNBTQParam100 +
        10 +
        timelineDefinitionGMOUNBTQValue268;
    }
    return (
      (timelineDefinitionGMOUNBTQParam100 = timelineDefinitionGMOUNBTQValue253),
      timelineDefinitionGMOUNBTQValue252
    );
  }, "drawEvents"),
  timelineDefinitionGMOUNBTQValue43 = {
    setConf: chunkAGHRB4JFN(() => {}, "setConf"),
    draw: timelineDefinitionGMOUNBTQValue40,
  },
  _e = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam6,
    timelineDefinitionGMOUNBTQParam7,
    timelineDefinitionGMOUNBTQParam8,
    timelineDefinitionGMOUNBTQParam9,
  ) {
    let timelineDefinitionGMOUNBTQValue116 = _chunkICPOFSXXP(),
      timelineDefinitionGMOUNBTQValue117 =
        timelineDefinitionGMOUNBTQValue116.timeline?.leftMargin ?? 50;
    chunkAGHRB4JFR.debug("timeline", timelineDefinitionGMOUNBTQParam9.db);
    let timelineDefinitionGMOUNBTQValue118 = chunk426QAEUC(
      timelineDefinitionGMOUNBTQParam7,
    );
    timelineDefinitionGMOUNBTQValue118.append("g");
    let timelineDefinitionGMOUNBTQValue119 =
        timelineDefinitionGMOUNBTQParam9.db.getTasks(),
      timelineDefinitionGMOUNBTQValue120 = timelineDefinitionGMOUNBTQParam9.db
        .getCommonDb()
        .getDiagramTitle();
    chunkAGHRB4JFR.debug("task", timelineDefinitionGMOUNBTQValue119);
    timelineDefinitionGMOUNBTQValue39.initGraphics(
      timelineDefinitionGMOUNBTQValue118,
    );
    let timelineDefinitionGMOUNBTQValue121 =
      timelineDefinitionGMOUNBTQParam9.db.getSections();
    chunkAGHRB4JFR.debug("sections", timelineDefinitionGMOUNBTQValue121);
    let timelineDefinitionGMOUNBTQValue122 = 0,
      timelineDefinitionGMOUNBTQValue123 = 0,
      timelineDefinitionGMOUNBTQValue124 =
        50 + timelineDefinitionGMOUNBTQValue117,
      timelineDefinitionGMOUNBTQValue125 = 50,
      timelineDefinitionGMOUNBTQValue126 = timelineDefinitionGMOUNBTQValue125,
      timelineDefinitionGMOUNBTQValue127 = timelineDefinitionGMOUNBTQValue124,
      timelineDefinitionGMOUNBTQValue130 =
        timelineDefinitionGMOUNBTQValue127 + 230,
      timelineDefinitionGMOUNBTQValue131 = 0,
      timelineDefinitionGMOUNBTQValue132 =
        timelineDefinitionGMOUNBTQValue121 &&
        timelineDefinitionGMOUNBTQValue121.length > 0,
      timelineDefinitionGMOUNBTQValue133 = timelineDefinitionGMOUNBTQValue132
        ? timelineDefinitionGMOUNBTQValue130
        : timelineDefinitionGMOUNBTQValue124 + 230,
      timelineDefinitionGMOUNBTQValue134 = Math.max(50, 580);
    timelineDefinitionGMOUNBTQValue121.forEach(function (item) {
      let timelineDefinitionGMOUNBTQValue274 = {
          number: timelineDefinitionGMOUNBTQValue131,
          descr: item,
          section: timelineDefinitionGMOUNBTQValue131,
          width: timelineDefinitionGMOUNBTQValue134,
          padding: 5,
          maxHeight: timelineDefinitionGMOUNBTQValue122,
        },
        timelineDefinitionGMOUNBTQValue275 =
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue118,
            timelineDefinitionGMOUNBTQValue274,
            timelineDefinitionGMOUNBTQValue116,
          );
      chunkAGHRB4JFR.debug(
        "sectionHeight before draw",
        timelineDefinitionGMOUNBTQValue275,
      );
      timelineDefinitionGMOUNBTQValue122 = Math.max(
        timelineDefinitionGMOUNBTQValue122,
        timelineDefinitionGMOUNBTQValue275,
      );
    });
    let timelineDefinitionGMOUNBTQValue135 = 0;
    chunkAGHRB4JFR.debug(
      "tasks.length",
      timelineDefinitionGMOUNBTQValue119.length,
    );
    for (let [
      timelineDefinitionGMOUNBTQValue224,
      timelineDefinitionGMOUNBTQValue225,
    ] of timelineDefinitionGMOUNBTQValue119.entries()) {
      let timelineDefinitionGMOUNBTQValue229 = {
          number: timelineDefinitionGMOUNBTQValue224,
          descr: timelineDefinitionGMOUNBTQValue225,
          section: timelineDefinitionGMOUNBTQValue225.section,
          width: 200,
          padding: 5,
          maxHeight: timelineDefinitionGMOUNBTQValue123,
        },
        timelineDefinitionGMOUNBTQValue230 =
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue118,
            timelineDefinitionGMOUNBTQValue229,
            timelineDefinitionGMOUNBTQValue116,
          );
      chunkAGHRB4JFR.debug(
        "taskHeight before draw",
        timelineDefinitionGMOUNBTQValue230,
      );
      timelineDefinitionGMOUNBTQValue123 = Math.max(
        timelineDefinitionGMOUNBTQValue123,
        timelineDefinitionGMOUNBTQValue230,
      );
      let timelineDefinitionGMOUNBTQValue231 = 0;
      for (let timelineDefinitionGMOUNBTQValue279 of timelineDefinitionGMOUNBTQValue225.events) {
        let timelineDefinitionGMOUNBTQValue284 = {
          descr: timelineDefinitionGMOUNBTQValue279,
          section: timelineDefinitionGMOUNBTQValue225.section,
          number: timelineDefinitionGMOUNBTQValue225.section,
          width: 300,
          padding: 5,
          maxHeight: 50,
        };
        timelineDefinitionGMOUNBTQValue231 +=
          timelineDefinitionGMOUNBTQValue39.getVirtualNodeHeight(
            timelineDefinitionGMOUNBTQValue118,
            timelineDefinitionGMOUNBTQValue284,
            timelineDefinitionGMOUNBTQValue116,
          );
      }
      timelineDefinitionGMOUNBTQValue225.events.length > 0 &&
        (timelineDefinitionGMOUNBTQValue231 +=
          (timelineDefinitionGMOUNBTQValue225.events.length - 1) * 10);
      timelineDefinitionGMOUNBTQValue135 = Math.max(
        timelineDefinitionGMOUNBTQValue135,
        timelineDefinitionGMOUNBTQValue231,
      );
    }
    chunkAGHRB4JFR.debug(
      "maxSectionHeight before draw",
      timelineDefinitionGMOUNBTQValue122,
    );
    chunkAGHRB4JFR.debug(
      "maxTaskHeight before draw",
      timelineDefinitionGMOUNBTQValue123,
    );
    let timelineDefinitionGMOUNBTQValue136 =
      Math.max(
        timelineDefinitionGMOUNBTQValue123,
        timelineDefinitionGMOUNBTQValue135,
      ) + 30;
    timelineDefinitionGMOUNBTQValue132
      ? timelineDefinitionGMOUNBTQValue121.forEach((item) => {
          let timelineDefinitionGMOUNBTQValue232 =
              timelineDefinitionGMOUNBTQValue119.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionGMOUNBTQValue233 = {
              number: timelineDefinitionGMOUNBTQValue131,
              descr: item,
              section: timelineDefinitionGMOUNBTQValue131,
              width: timelineDefinitionGMOUNBTQValue134,
              padding: 5,
              maxHeight: timelineDefinitionGMOUNBTQValue122,
            };
          chunkAGHRB4JFR.debug(
            "sectionNode",
            timelineDefinitionGMOUNBTQValue233,
          );
          let timelineDefinitionGMOUNBTQValue234 =
              timelineDefinitionGMOUNBTQValue118.append("g"),
            timelineDefinitionGMOUNBTQValue235 =
              timelineDefinitionGMOUNBTQValue39.drawNode(
                timelineDefinitionGMOUNBTQValue234,
                timelineDefinitionGMOUNBTQValue233,
                timelineDefinitionGMOUNBTQValue131,
                timelineDefinitionGMOUNBTQValue116,
              );
          chunkAGHRB4JFR.debug(
            "sectionNode output",
            timelineDefinitionGMOUNBTQValue235,
          );
          let timelineDefinitionGMOUNBTQValue236 =
            timelineDefinitionGMOUNBTQValue133 - 230;
          timelineDefinitionGMOUNBTQValue234.attr(
            "transform",
            `translate(${timelineDefinitionGMOUNBTQValue236}, ${timelineDefinitionGMOUNBTQValue125})`,
          );
          let timelineDefinitionGMOUNBTQValue237 =
            timelineDefinitionGMOUNBTQValue125 +
            timelineDefinitionGMOUNBTQValue235.height +
            20;
          timelineDefinitionGMOUNBTQValue232.length > 0 &&
            $(
              timelineDefinitionGMOUNBTQValue118,
              timelineDefinitionGMOUNBTQValue232,
              timelineDefinitionGMOUNBTQValue131,
              timelineDefinitionGMOUNBTQValue133,
              timelineDefinitionGMOUNBTQValue237,
              timelineDefinitionGMOUNBTQValue123,
              timelineDefinitionGMOUNBTQValue116,
              timelineDefinitionGMOUNBTQValue136,
              false,
            );
          let timelineDefinitionGMOUNBTQValue238 =
              timelineDefinitionGMOUNBTQValue232.length,
            timelineDefinitionGMOUNBTQValue239 =
              timelineDefinitionGMOUNBTQValue235.height +
              20 +
              timelineDefinitionGMOUNBTQValue136 *
                Math.max(timelineDefinitionGMOUNBTQValue238, 1) -
              (timelineDefinitionGMOUNBTQValue238 > 0 ? 60 : 0);
          timelineDefinitionGMOUNBTQValue125 +=
            timelineDefinitionGMOUNBTQValue239;
          timelineDefinitionGMOUNBTQValue131++;
        })
      : $(
          timelineDefinitionGMOUNBTQValue118,
          timelineDefinitionGMOUNBTQValue119,
          timelineDefinitionGMOUNBTQValue131,
          timelineDefinitionGMOUNBTQValue133,
          timelineDefinitionGMOUNBTQValue125,
          timelineDefinitionGMOUNBTQValue123,
          timelineDefinitionGMOUNBTQValue116,
          timelineDefinitionGMOUNBTQValue136,
          true,
        );
    let timelineDefinitionGMOUNBTQValue137 = timelineDefinitionGMOUNBTQValue118
      .node()
      ?.getBBox();
    if (!timelineDefinitionGMOUNBTQValue137) throw Error("bbox not found");
    if (
      (chunkAGHRB4JFR.debug("bounds", timelineDefinitionGMOUNBTQValue137),
      timelineDefinitionGMOUNBTQValue120)
    ) {
      if (
        (timelineDefinitionGMOUNBTQValue118
          .append("text")
          .text(timelineDefinitionGMOUNBTQValue120)
          .attr(
            "x",
            timelineDefinitionGMOUNBTQValue137.width / 2 -
              timelineDefinitionGMOUNBTQValue117,
          )
          .attr("font-size", "4ex")
          .attr("font-weight", "bold")
          .attr("y", 20),
        (timelineDefinitionGMOUNBTQValue137 = timelineDefinitionGMOUNBTQValue118
          .node()
          ?.getBBox()),
        !timelineDefinitionGMOUNBTQValue137)
      )
        throw Error("bbox not found");
      chunkAGHRB4JFR.debug(
        "bounds after title",
        timelineDefinitionGMOUNBTQValue137,
      );
    }
    let [timelineDefinitionGMOUNBTQValue138] = chunk5PVQY5BWH(
        timelineDefinitionGMOUNBTQValue116.fontSize,
      ),
      timelineDefinitionGMOUNBTQValue139 =
        (timelineDefinitionGMOUNBTQValue138 ?? 16) * 2,
      timelineDefinitionGMOUNBTQValue140 =
        (timelineDefinitionGMOUNBTQValue138 ?? 16) * 0.5 + 20,
      timelineDefinitionGMOUNBTQValue141 = timelineDefinitionGMOUNBTQValue118
        .append("g")
        .attr("class", "lineWrapper");
    timelineDefinitionGMOUNBTQValue141
      .append("line")
      .attr("x1", timelineDefinitionGMOUNBTQValue133)
      .attr(
        "y1",
        timelineDefinitionGMOUNBTQValue126 - timelineDefinitionGMOUNBTQValue139,
      )
      .attr("x2", timelineDefinitionGMOUNBTQValue133)
      .attr(
        "y2",
        timelineDefinitionGMOUNBTQValue137.y +
          timelineDefinitionGMOUNBTQValue137.height +
          timelineDefinitionGMOUNBTQValue140,
      )
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    timelineDefinitionGMOUNBTQValue141.lower();
    _chunkICPOFSXXS(
      undefined,
      timelineDefinitionGMOUNBTQValue118,
      timelineDefinitionGMOUNBTQValue116.timeline?.padding ?? 50,
      timelineDefinitionGMOUNBTQValue116.timeline?.useMaxWidth ?? false,
    );
  }, "draw"),
  $ = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam65,
    timelineDefinitionGMOUNBTQParam66,
    timelineDefinitionGMOUNBTQParam67,
    timelineDefinitionGMOUNBTQParam68,
    timelineDefinitionGMOUNBTQParam69,
    timelineDefinitionGMOUNBTQParam70,
    timelineDefinitionGMOUNBTQParam71,
    timelineDefinitionGMOUNBTQParam72,
    timelineDefinitionGMOUNBTQParam73,
  ) {
    for (let timelineDefinitionGMOUNBTQValue215 of timelineDefinitionGMOUNBTQParam66) {
      let timelineDefinitionGMOUNBTQValue219 = {
        descr: timelineDefinitionGMOUNBTQValue215.task,
        section: timelineDefinitionGMOUNBTQParam67,
        number: timelineDefinitionGMOUNBTQParam67,
        width: 200,
        padding: 5,
        maxHeight: timelineDefinitionGMOUNBTQParam70,
      };
      chunkAGHRB4JFR.debug("taskNode", timelineDefinitionGMOUNBTQValue219);
      let timelineDefinitionGMOUNBTQValue220 = timelineDefinitionGMOUNBTQParam65
          .append("g")
          .attr("class", "taskWrapper"),
        timelineDefinitionGMOUNBTQValue221 =
          timelineDefinitionGMOUNBTQValue39.drawNode(
            timelineDefinitionGMOUNBTQValue220,
            timelineDefinitionGMOUNBTQValue219,
            timelineDefinitionGMOUNBTQParam67,
            timelineDefinitionGMOUNBTQParam71,
          ),
        timelineDefinitionGMOUNBTQValue222 =
          timelineDefinitionGMOUNBTQValue221.height;
      chunkAGHRB4JFR.debug(
        "taskHeight after draw",
        timelineDefinitionGMOUNBTQValue222,
      );
      let timelineDefinitionGMOUNBTQValue223 =
        timelineDefinitionGMOUNBTQParam68 -
        20 -
        timelineDefinitionGMOUNBTQValue221.width;
      if (
        (timelineDefinitionGMOUNBTQValue220.attr(
          "transform",
          `translate(${timelineDefinitionGMOUNBTQValue223}, ${timelineDefinitionGMOUNBTQParam69})`,
        ),
        (timelineDefinitionGMOUNBTQParam70 = Math.max(
          timelineDefinitionGMOUNBTQParam70,
          timelineDefinitionGMOUNBTQValue222,
        )),
        timelineDefinitionGMOUNBTQValue215.events &&
          timelineDefinitionGMOUNBTQValue215.events.length > 0)
      ) {
        let timelineDefinitionGMOUNBTQValue294 =
            timelineDefinitionGMOUNBTQParam69,
          timelineDefinitionGMOUNBTQValue295 =
            timelineDefinitionGMOUNBTQParam68 + 50;
        timelineDefinitionGMOUNBTQValue55(
          timelineDefinitionGMOUNBTQParam65,
          timelineDefinitionGMOUNBTQValue215.events,
          timelineDefinitionGMOUNBTQParam67,
          timelineDefinitionGMOUNBTQParam68,
          timelineDefinitionGMOUNBTQValue295,
          timelineDefinitionGMOUNBTQValue294,
          timelineDefinitionGMOUNBTQParam71,
        );
      }
      timelineDefinitionGMOUNBTQParam69 += timelineDefinitionGMOUNBTQParam72;
      timelineDefinitionGMOUNBTQParam73 &&
        !timelineDefinitionGMOUNBTQParam71.timeline?.disableMulticolor &&
        timelineDefinitionGMOUNBTQParam67++;
    }
  }, "drawTasks"),
  timelineDefinitionGMOUNBTQValue55 = chunkAGHRB4JFN(function (
    timelineDefinitionGMOUNBTQParam47,
    timelineDefinitionGMOUNBTQParam48,
    timelineDefinitionGMOUNBTQParam49,
    timelineDefinitionGMOUNBTQParam50,
    timelineDefinitionGMOUNBTQParam51,
    timelineDefinitionGMOUNBTQParam52,
    timelineDefinitionGMOUNBTQParam53,
  ) {
    let timelineDefinitionGMOUNBTQValue186 = timelineDefinitionGMOUNBTQParam52;
    for (let timelineDefinitionGMOUNBTQValue192 of timelineDefinitionGMOUNBTQParam48) {
      let timelineDefinitionGMOUNBTQValue193 = {
        descr: timelineDefinitionGMOUNBTQValue192,
        section: timelineDefinitionGMOUNBTQParam49,
        number: timelineDefinitionGMOUNBTQParam49,
        width: 300,
        padding: 5,
        maxHeight: 0,
      };
      chunkAGHRB4JFR.debug("eventNode", timelineDefinitionGMOUNBTQValue193);
      let timelineDefinitionGMOUNBTQValue194 = timelineDefinitionGMOUNBTQParam47
          .append("g")
          .attr("class", "eventWrapper"),
        timelineDefinitionGMOUNBTQValue195 =
          timelineDefinitionGMOUNBTQValue39.drawNode(
            timelineDefinitionGMOUNBTQValue194,
            timelineDefinitionGMOUNBTQValue193,
            timelineDefinitionGMOUNBTQParam49,
            timelineDefinitionGMOUNBTQParam53,
          ).height;
      timelineDefinitionGMOUNBTQValue194.attr(
        "transform",
        `translate(${timelineDefinitionGMOUNBTQParam51}, ${timelineDefinitionGMOUNBTQValue186})`,
      );
      let timelineDefinitionGMOUNBTQValue196 = timelineDefinitionGMOUNBTQParam47
          .append("g")
          .attr("class", "lineWrapper"),
        timelineDefinitionGMOUNBTQValue197 =
          timelineDefinitionGMOUNBTQValue186 +
          timelineDefinitionGMOUNBTQValue195 / 2;
      timelineDefinitionGMOUNBTQValue196
        .append("line")
        .attr("x1", timelineDefinitionGMOUNBTQParam50)
        .attr("y1", timelineDefinitionGMOUNBTQValue197)
        .attr("x2", timelineDefinitionGMOUNBTQParam51)
        .attr("y2", timelineDefinitionGMOUNBTQValue197)
        .attr("stroke-width", 2)
        .attr("stroke", "black")
        .attr("marker-end", "url(#arrowhead)")
        .attr("stroke-dasharray", "5,5");
      timelineDefinitionGMOUNBTQValue186 =
        timelineDefinitionGMOUNBTQValue186 +
        timelineDefinitionGMOUNBTQValue195 +
        10;
    }
    return (
      timelineDefinitionGMOUNBTQValue186 - timelineDefinitionGMOUNBTQParam52
    );
  }, "drawEvents"),
  timelineDefinitionGMOUNBTQValue56 = {
    setConf: chunkAGHRB4JFN(() => {}, "setConf"),
    draw: _e,
  },
  be = chunkAGHRB4JFN((timelineDefinitionGMOUNBTQParam18) => {
    let { theme } = chunkICPOFSXXW(),
      timelineDefinitionGMOUNBTQValue153 = theme?.includes("dark"),
      timelineDefinitionGMOUNBTQValue154 = theme?.includes("color"),
      timelineDefinitionGMOUNBTQValue155 =
        timelineDefinitionGMOUNBTQParam18.svgId?.replace(/^#/, "") ?? "",
      timelineDefinitionGMOUNBTQValue156 = timelineDefinitionGMOUNBTQValue155
        ? `url(#${timelineDefinitionGMOUNBTQValue155}-drop-shadow)`
        : (timelineDefinitionGMOUNBTQParam18.dropShadow ?? "none"),
      timelineDefinitionGMOUNBTQValue157 = "";
    for (
      let timelineDefinitionGMOUNBTQValue160 = 0;
      timelineDefinitionGMOUNBTQValue160 <
      timelineDefinitionGMOUNBTQParam18.THEME_COLOR_LIMIT;
      timelineDefinitionGMOUNBTQValue160++
    ) {
      let timelineDefinitionGMOUNBTQValue162 = `${17 - 3 * timelineDefinitionGMOUNBTQValue160}`,
        timelineDefinitionGMOUNBTQValue163 = timelineDefinitionGMOUNBTQValue154
          ? timelineDefinitionGMOUNBTQParam18.borderColorArray[
              timelineDefinitionGMOUNBTQValue160
            ]
          : timelineDefinitionGMOUNBTQParam18.mainBkg,
        timelineDefinitionGMOUNBTQValue164 = timelineDefinitionGMOUNBTQValue154
          ? timelineDefinitionGMOUNBTQParam18.borderColorArray[
              timelineDefinitionGMOUNBTQValue160
            ]
          : timelineDefinitionGMOUNBTQParam18.nodeBorder;
      timelineDefinitionGMOUNBTQValue157 += `
    .section-${timelineDefinitionGMOUNBTQValue160 - 1} rect,
    .section-${timelineDefinitionGMOUNBTQValue160 - 1} path,
    .section-${timelineDefinitionGMOUNBTQValue160 - 1} circle {
      fill: ${timelineDefinitionGMOUNBTQValue153 && timelineDefinitionGMOUNBTQValue154 ? timelineDefinitionGMOUNBTQParam18.mainBkg : timelineDefinitionGMOUNBTQValue163};
      stroke: ${timelineDefinitionGMOUNBTQValue164};
      stroke-width: ${timelineDefinitionGMOUNBTQParam18.strokeWidth};
      filter: ${timelineDefinitionGMOUNBTQValue156};
    }

    .section-${timelineDefinitionGMOUNBTQValue160 - 1} text {
      fill: ${timelineDefinitionGMOUNBTQParam18.nodeBorder};
      font-weight: ${timelineDefinitionGMOUNBTQParam18.fontWeight}
    }

    .node-icon-${timelineDefinitionGMOUNBTQValue160 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionGMOUNBTQParam18["cScaleLabel" + timelineDefinitionGMOUNBTQValue160]};
    }

    .section-edge-${timelineDefinitionGMOUNBTQValue160 - 1} {
      stroke: ${timelineDefinitionGMOUNBTQParam18["cScale" + timelineDefinitionGMOUNBTQValue160]};
    }

    .edge-depth-${timelineDefinitionGMOUNBTQValue160 - 1} {
      stroke-width: ${timelineDefinitionGMOUNBTQValue162};
    }

    .section-${timelineDefinitionGMOUNBTQValue160 - 1} line {
      stroke: ${timelineDefinitionGMOUNBTQParam18["cScaleInv" + timelineDefinitionGMOUNBTQValue160]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${timelineDefinitionGMOUNBTQParam18.nodeBorder};
      stroke-width:${timelineDefinitionGMOUNBTQParam18.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQParam18.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQParam18.clusterBorder ?? "#efefef"};
    }
    `;
    }
    return timelineDefinitionGMOUNBTQValue157;
  }, "genReduxSections"),
  timelineDefinitionGMOUNBTQValue57 = chunkAGHRB4JFN(
    (timelineDefinitionGMOUNBTQParam21) => {
      let timelineDefinitionGMOUNBTQValue161 = "";
      for (
        let timelineDefinitionGMOUNBTQValue271 = 0;
        timelineDefinitionGMOUNBTQValue271 <
        timelineDefinitionGMOUNBTQParam21.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQValue271++
      ) {
        timelineDefinitionGMOUNBTQParam21[
          "lineColor" + timelineDefinitionGMOUNBTQValue271
        ] =
          timelineDefinitionGMOUNBTQParam21[
            "lineColor" + timelineDefinitionGMOUNBTQValue271
          ] ||
          timelineDefinitionGMOUNBTQParam21[
            "cScaleInv" + timelineDefinitionGMOUNBTQValue271
          ];
        invertO(
          timelineDefinitionGMOUNBTQParam21[
            "lineColor" + timelineDefinitionGMOUNBTQValue271
          ],
        )
          ? (timelineDefinitionGMOUNBTQParam21[
              "lineColor" + timelineDefinitionGMOUNBTQValue271
            ] = invertI(
              timelineDefinitionGMOUNBTQParam21[
                "lineColor" + timelineDefinitionGMOUNBTQValue271
              ],
              20,
            ))
          : (timelineDefinitionGMOUNBTQParam21[
              "lineColor" + timelineDefinitionGMOUNBTQValue271
            ] = invertR(
              timelineDefinitionGMOUNBTQParam21[
                "lineColor" + timelineDefinitionGMOUNBTQValue271
              ],
              20,
            ));
      }
      for (
        let timelineDefinitionGMOUNBTQValue169 = 0;
        timelineDefinitionGMOUNBTQValue169 <
        timelineDefinitionGMOUNBTQParam21.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQValue169++
      ) {
        let timelineDefinitionGMOUNBTQValue170 =
          "" + (17 - 3 * timelineDefinitionGMOUNBTQValue169);
        timelineDefinitionGMOUNBTQValue161 += `
    .section-${timelineDefinitionGMOUNBTQValue169 - 1} rect, .section-${timelineDefinitionGMOUNBTQValue169 - 1} path, .section-${timelineDefinitionGMOUNBTQValue169 - 1} circle, .section-${timelineDefinitionGMOUNBTQValue169 - 1} path  {
      fill: ${timelineDefinitionGMOUNBTQParam21["cScale" + timelineDefinitionGMOUNBTQValue169]};
    }
    .section-${timelineDefinitionGMOUNBTQValue169 - 1} text {
     fill: ${timelineDefinitionGMOUNBTQParam21["cScaleLabel" + timelineDefinitionGMOUNBTQValue169]};
    }
    .node-icon-${timelineDefinitionGMOUNBTQValue169 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionGMOUNBTQParam21["cScaleLabel" + timelineDefinitionGMOUNBTQValue169]};
    }
    .section-edge-${timelineDefinitionGMOUNBTQValue169 - 1}{
      stroke: ${timelineDefinitionGMOUNBTQParam21["cScale" + timelineDefinitionGMOUNBTQValue169]};
    }
    .edge-depth-${timelineDefinitionGMOUNBTQValue169 - 1}{
      stroke-width: ${timelineDefinitionGMOUNBTQValue170};
    }
    .section-${timelineDefinitionGMOUNBTQValue169 - 1} line {
      stroke: ${timelineDefinitionGMOUNBTQParam21["cScaleInv" + timelineDefinitionGMOUNBTQValue169]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${timelineDefinitionGMOUNBTQParam21["cScaleLabel" + timelineDefinitionGMOUNBTQValue169]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${timelineDefinitionGMOUNBTQParam21.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${timelineDefinitionGMOUNBTQParam21.clusterBorder ?? "#efefef"};
    }
    `;
      }
      return timelineDefinitionGMOUNBTQValue161;
    },
    "genSections",
  );
export const timelineDefinitionGMOUNBTQ = {
  db: timelineDefinitionGMOUNBTQValue3,
  renderer: {
    setConf: chunkAGHRB4JFN(() => {}, "setConf"),
    draw: chunkAGHRB4JFN(
      (
        timelineDefinitionGMOUNBTQParam142,
        timelineDefinitionGMOUNBTQParam143,
        timelineDefinitionGMOUNBTQParam144,
        timelineDefinitionGMOUNBTQParam145,
      ) =>
        (timelineDefinitionGMOUNBTQParam145?.db?.getDirection?.() ?? "LR") ===
        "TD"
          ? timelineDefinitionGMOUNBTQValue56.draw(
              timelineDefinitionGMOUNBTQParam142,
              timelineDefinitionGMOUNBTQParam143,
              timelineDefinitionGMOUNBTQParam144,
              timelineDefinitionGMOUNBTQParam145,
            )
          : timelineDefinitionGMOUNBTQValue43.draw(
              timelineDefinitionGMOUNBTQParam142,
              timelineDefinitionGMOUNBTQParam143,
              timelineDefinitionGMOUNBTQParam144,
              timelineDefinitionGMOUNBTQParam145,
            ),
      "draw",
    ),
  },
  parser: timelineDefinitionGMOUNBTQValue2,
  styles: chunkAGHRB4JFN((timelineDefinitionGMOUNBTQParam22) => {
    let { theme } = chunkICPOFSXXW(),
      timelineDefinitionGMOUNBTQValue165 = theme?.includes("redux"),
      timelineDefinitionGMOUNBTQValue166 = theme === "neutral",
      timelineDefinitionGMOUNBTQValue167 =
        timelineDefinitionGMOUNBTQParam22.svgId?.replace(/^#/, "") ?? "",
      timelineDefinitionGMOUNBTQValue168 = "";
    if (
      timelineDefinitionGMOUNBTQParam22.useGradient &&
      timelineDefinitionGMOUNBTQValue167 &&
      timelineDefinitionGMOUNBTQParam22.THEME_COLOR_LIMIT &&
      !timelineDefinitionGMOUNBTQValue166
    )
      for (
        let timelineDefinitionGMOUNBTQValue226 = 0;
        timelineDefinitionGMOUNBTQValue226 <
        timelineDefinitionGMOUNBTQParam22.THEME_COLOR_LIMIT;
        timelineDefinitionGMOUNBTQValue226++
      )
        timelineDefinitionGMOUNBTQValue168 += `
      .section-${timelineDefinitionGMOUNBTQValue226 - 1}[data-look="neo"] rect,
      .section-${timelineDefinitionGMOUNBTQValue226 - 1}[data-look="neo"] path,
      .section-${timelineDefinitionGMOUNBTQValue226 - 1}[data-look="neo"] circle {
        fill: ${timelineDefinitionGMOUNBTQParam22.mainBkg};
        stroke: url(#${timelineDefinitionGMOUNBTQValue167}-gradient);
        stroke-width: 2;
      }
      .section-${timelineDefinitionGMOUNBTQValue226 - 1}[data-look="neo"] line {
        stroke: url(#${timelineDefinitionGMOUNBTQValue167}-gradient);
        stroke-width: 2;
      }`;
    return `
  .edge {
    stroke-width: 3;
  }
  ${timelineDefinitionGMOUNBTQValue165 ? be(timelineDefinitionGMOUNBTQParam22) : timelineDefinitionGMOUNBTQValue57(timelineDefinitionGMOUNBTQParam22)}
  ${timelineDefinitionGMOUNBTQValue168}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${timelineDefinitionGMOUNBTQParam22.git0};
  }
  .section-root text {
    fill: ${timelineDefinitionGMOUNBTQParam22.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
  }, "getStyles"),
};
