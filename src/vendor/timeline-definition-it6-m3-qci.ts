// Restored from ref/webview/assets/timeline-definition-IT6M3QCI-DaTZmOPo.js
// Flat boundary. Vendored timelineDefinitionIT6M3QCI chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { arc } from "./d3-shape-arc";
import { chunkAGHRB4JFN, chunkAGHRB4JFR, chunkAGHRB4JFT } from "./dompurify";
import { invertI, invertO, invertR } from "./color-convert";
import {
  _chunkABZYJK2DK,
  _chunkABZYJK2DL,
  _chunkABZYJK2DR,
  chunkABZYJK2DG,
} from "./katex-auto-render";
var timelineDefinitionIT6M3QCIValue1 = (function () {
  var timelineDefinitionIT6M3QCIValue41 = chunkAGHRB4JFN(function (
      timelineDefinitionIT6M3QCIParam115,
      timelineDefinitionIT6M3QCIParam116,
      timelineDefinitionIT6M3QCIParam117,
      timelineDefinitionIT6M3QCIParam118,
    ) {
      for (
        timelineDefinitionIT6M3QCIParam117 ||= {},
          timelineDefinitionIT6M3QCIParam118 =
            timelineDefinitionIT6M3QCIParam115.length;
        timelineDefinitionIT6M3QCIParam118--;
        timelineDefinitionIT6M3QCIParam117[
          timelineDefinitionIT6M3QCIParam115[timelineDefinitionIT6M3QCIParam118]
        ] = timelineDefinitionIT6M3QCIParam116
      );
      return timelineDefinitionIT6M3QCIParam117;
    }, "o"),
    timelineDefinitionIT6M3QCIValue42 = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21],
    timelineDefinitionIT6M3QCIValue43 = [1, 9],
    timelineDefinitionIT6M3QCIValue44 = [1, 10],
    timelineDefinitionIT6M3QCIValue45 = [1, 11],
    timelineDefinitionIT6M3QCIValue46 = [1, 12],
    timelineDefinitionIT6M3QCIValue47 = [1, 13],
    timelineDefinitionIT6M3QCIValue48 = [1, 16],
    timelineDefinitionIT6M3QCIValue49 = [1, 17],
    timelineDefinitionIT6M3QCIValue50 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        timeline: 4,
        document: 5,
        EOF: 6,
        line: 7,
        SPACE: 8,
        statement: 9,
        NEWLINE: 10,
        title: 11,
        acc_title: 12,
        acc_title_value: 13,
        acc_descr: 14,
        acc_descr_value: 15,
        acc_descr_multiline_value: 16,
        section: 17,
        period_statement: 18,
        event_statement: 19,
        period: 20,
        event: 21,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        4: "timeline",
        6: "EOF",
        8: "SPACE",
        10: "NEWLINE",
        11: "title",
        12: "acc_title",
        13: "acc_title_value",
        14: "acc_descr",
        15: "acc_descr_value",
        16: "acc_descr_multiline_value",
        17: "section",
        20: "period",
        21: "event",
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
        [9, 1],
        [9, 2],
        [9, 2],
        [9, 1],
        [9, 1],
        [9, 1],
        [9, 1],
        [18, 1],
        [19, 1],
      ],
      performAction: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam23,
        timelineDefinitionIT6M3QCIParam24,
        timelineDefinitionIT6M3QCIParam25,
        timelineDefinitionIT6M3QCIParam26,
        timelineDefinitionIT6M3QCIParam27,
        timelineDefinitionIT6M3QCIParam28,
        timelineDefinitionIT6M3QCIParam29,
      ) {
        var timelineDefinitionIT6M3QCIValue122 =
          timelineDefinitionIT6M3QCIParam28.length - 1;
        switch (timelineDefinitionIT6M3QCIParam27) {
          case 1:
            return timelineDefinitionIT6M3QCIParam28[
              timelineDefinitionIT6M3QCIValue122 - 1
            ];
          case 2:
            this.$ = [];
            break;
          case 3:
            timelineDefinitionIT6M3QCIParam28[
              timelineDefinitionIT6M3QCIValue122 - 1
            ].push(
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ],
            );
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122 - 1
              ];
            break;
          case 4:
          case 5:
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ];
            break;
          case 6:
          case 7:
            this.$ = [];
            break;
          case 8:
            timelineDefinitionIT6M3QCIParam26
              .getCommonDb()
              .setDiagramTitle(
                timelineDefinitionIT6M3QCIParam28[
                  timelineDefinitionIT6M3QCIValue122
                ].substr(6),
              );
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].substr(6);
            break;
          case 9:
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].trim();
            timelineDefinitionIT6M3QCIParam26.getCommonDb().setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].trim();
            timelineDefinitionIT6M3QCIParam26
              .getCommonDb()
              .setAccDescription(this.$);
            break;
          case 12:
            timelineDefinitionIT6M3QCIParam26.addSection(
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].substr(8),
            );
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].substr(8);
            break;
          case 15:
            timelineDefinitionIT6M3QCIParam26.addTask(
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ],
              0,
              "",
            );
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ];
            break;
          case 16:
            timelineDefinitionIT6M3QCIParam26.addEvent(
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ].substr(2),
            );
            this.$ =
              timelineDefinitionIT6M3QCIParam28[
                timelineDefinitionIT6M3QCIValue122
              ];
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
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 2],
          {
            5: 3,
          },
        ),
        {
          6: [1, 4],
          7: 5,
          8: [1, 6],
          9: 7,
          10: [1, 8],
          11: timelineDefinitionIT6M3QCIValue43,
          12: timelineDefinitionIT6M3QCIValue44,
          14: timelineDefinitionIT6M3QCIValue45,
          16: timelineDefinitionIT6M3QCIValue46,
          17: timelineDefinitionIT6M3QCIValue47,
          18: 14,
          19: 15,
          20: timelineDefinitionIT6M3QCIValue48,
          21: timelineDefinitionIT6M3QCIValue49,
        },
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 7],
          {
            1: [2, 1],
          },
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 3],
        ),
        {
          9: 18,
          11: timelineDefinitionIT6M3QCIValue43,
          12: timelineDefinitionIT6M3QCIValue44,
          14: timelineDefinitionIT6M3QCIValue45,
          16: timelineDefinitionIT6M3QCIValue46,
          17: timelineDefinitionIT6M3QCIValue47,
          18: 14,
          19: 15,
          20: timelineDefinitionIT6M3QCIValue48,
          21: timelineDefinitionIT6M3QCIValue49,
        },
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 5],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 6],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 8],
        ),
        {
          13: [1, 19],
        },
        {
          15: [1, 20],
        },
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 11],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 12],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 13],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 14],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 15],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 16],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 4],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 9],
        ),
        timelineDefinitionIT6M3QCIValue41(
          timelineDefinitionIT6M3QCIValue42,
          [2, 10],
        ),
      ],
      defaultActions: {},
      parseError: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam109,
        timelineDefinitionIT6M3QCIParam110,
      ) {
        if (timelineDefinitionIT6M3QCIParam110.recoverable)
          this.trace(timelineDefinitionIT6M3QCIParam109);
        else {
          var timelineDefinitionIT6M3QCIValue191 = Error(
            timelineDefinitionIT6M3QCIParam109,
          );
          throw (
            (timelineDefinitionIT6M3QCIValue191.hash =
              timelineDefinitionIT6M3QCIParam110),
            timelineDefinitionIT6M3QCIValue191
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam1) {
        var timelineDefinitionIT6M3QCIValue51 = this,
          timelineDefinitionIT6M3QCIValue52 = [0],
          timelineDefinitionIT6M3QCIValue53 = [],
          timelineDefinitionIT6M3QCIValue54 = [null],
          timelineDefinitionIT6M3QCIValue55 = [],
          timelineDefinitionIT6M3QCIValue56 = this.table,
          timelineDefinitionIT6M3QCIValue57 = "",
          timelineDefinitionIT6M3QCIValue58 = 0,
          timelineDefinitionIT6M3QCIValue59 = 0,
          timelineDefinitionIT6M3QCIValue60 = 0,
          timelineDefinitionIT6M3QCIValue63 =
            timelineDefinitionIT6M3QCIValue55.slice.call(arguments, 1),
          timelineDefinitionIT6M3QCIValue64 = Object.create(this.lexer),
          timelineDefinitionIT6M3QCIValue65 = {
            yy: {},
          };
        for (var timelineDefinitionIT6M3QCIValue66 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            timelineDefinitionIT6M3QCIValue66,
          ) &&
            (timelineDefinitionIT6M3QCIValue65.yy[
              timelineDefinitionIT6M3QCIValue66
            ] = this.yy[timelineDefinitionIT6M3QCIValue66]);
        timelineDefinitionIT6M3QCIValue64.setInput(
          timelineDefinitionIT6M3QCIParam1,
          timelineDefinitionIT6M3QCIValue65.yy,
        );
        timelineDefinitionIT6M3QCIValue65.yy.lexer =
          timelineDefinitionIT6M3QCIValue64;
        timelineDefinitionIT6M3QCIValue65.yy.parser = this;
        timelineDefinitionIT6M3QCIValue64.yylloc === undefined &&
          (timelineDefinitionIT6M3QCIValue64.yylloc = {});
        var timelineDefinitionIT6M3QCIValue67 =
          timelineDefinitionIT6M3QCIValue64.yylloc;
        timelineDefinitionIT6M3QCIValue55.push(
          timelineDefinitionIT6M3QCIValue67,
        );
        var timelineDefinitionIT6M3QCIValue68 =
          timelineDefinitionIT6M3QCIValue64.options &&
          timelineDefinitionIT6M3QCIValue64.options.ranges;
        typeof timelineDefinitionIT6M3QCIValue65.yy.parseError == "function"
          ? (this.parseError = timelineDefinitionIT6M3QCIValue65.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function timelineDefinitionIT6M3QCIHelper3(
          timelineDefinitionIT6M3QCIParam121,
        ) {
          timelineDefinitionIT6M3QCIValue52.length -=
            2 * timelineDefinitionIT6M3QCIParam121;
          timelineDefinitionIT6M3QCIValue54.length -=
            timelineDefinitionIT6M3QCIParam121;
          timelineDefinitionIT6M3QCIValue55.length -=
            timelineDefinitionIT6M3QCIParam121;
        }
        chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper3, "popStack");
        function timelineDefinitionIT6M3QCIHelper4() {
          var timelineDefinitionIT6M3QCIValue186 =
            timelineDefinitionIT6M3QCIValue53.pop() ||
            timelineDefinitionIT6M3QCIValue64.lex() ||
            1;
          return (
            typeof timelineDefinitionIT6M3QCIValue186 != "number" &&
              (timelineDefinitionIT6M3QCIValue186 instanceof Array &&
                ((timelineDefinitionIT6M3QCIValue53 =
                  timelineDefinitionIT6M3QCIValue186),
                (timelineDefinitionIT6M3QCIValue186 =
                  timelineDefinitionIT6M3QCIValue53.pop())),
              (timelineDefinitionIT6M3QCIValue186 =
                timelineDefinitionIT6M3QCIValue51.symbols_[
                  timelineDefinitionIT6M3QCIValue186
                ] || timelineDefinitionIT6M3QCIValue186)),
            timelineDefinitionIT6M3QCIValue186
          );
        }
        chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper4, "lex");
        for (
          var timelineDefinitionIT6M3QCIValue69,
            timelineDefinitionIT6M3QCIValue70,
            timelineDefinitionIT6M3QCIValue71,
            timelineDefinitionIT6M3QCIValue72,
            timelineDefinitionIT6M3QCIValue73,
            timelineDefinitionIT6M3QCIValue74 = {},
            timelineDefinitionIT6M3QCIValue75,
            timelineDefinitionIT6M3QCIValue76,
            timelineDefinitionIT6M3QCIValue77,
            timelineDefinitionIT6M3QCIValue78;
          ;

        ) {
          if (
            ((timelineDefinitionIT6M3QCIValue71 =
              timelineDefinitionIT6M3QCIValue52[
                timelineDefinitionIT6M3QCIValue52.length - 1
              ]),
            this.defaultActions[timelineDefinitionIT6M3QCIValue71]
              ? (timelineDefinitionIT6M3QCIValue72 =
                  this.defaultActions[timelineDefinitionIT6M3QCIValue71])
              : ((timelineDefinitionIT6M3QCIValue69 ??=
                  timelineDefinitionIT6M3QCIHelper4()),
                (timelineDefinitionIT6M3QCIValue72 =
                  timelineDefinitionIT6M3QCIValue56[
                    timelineDefinitionIT6M3QCIValue71
                  ] &&
                  timelineDefinitionIT6M3QCIValue56[
                    timelineDefinitionIT6M3QCIValue71
                  ][timelineDefinitionIT6M3QCIValue69])),
            timelineDefinitionIT6M3QCIValue72 === undefined ||
              !timelineDefinitionIT6M3QCIValue72.length ||
              !timelineDefinitionIT6M3QCIValue72[0])
          ) {
            var timelineDefinitionIT6M3QCIValue79 = "";
            for (timelineDefinitionIT6M3QCIValue75 in ((timelineDefinitionIT6M3QCIValue78 =
              []),
            timelineDefinitionIT6M3QCIValue56[
              timelineDefinitionIT6M3QCIValue71
            ]))
              this.terminals_[timelineDefinitionIT6M3QCIValue75] &&
                timelineDefinitionIT6M3QCIValue75 > 2 &&
                timelineDefinitionIT6M3QCIValue78.push(
                  "'" +
                    this.terminals_[timelineDefinitionIT6M3QCIValue75] +
                    "'",
                );
            timelineDefinitionIT6M3QCIValue79 =
              timelineDefinitionIT6M3QCIValue64.showPosition
                ? "Parse error on line " +
                  (timelineDefinitionIT6M3QCIValue58 + 1) +
                  ":\n" +
                  timelineDefinitionIT6M3QCIValue64.showPosition() +
                  "\nExpecting " +
                  timelineDefinitionIT6M3QCIValue78.join(", ") +
                  ", got '" +
                  (this.terminals_[timelineDefinitionIT6M3QCIValue69] ||
                    timelineDefinitionIT6M3QCIValue69) +
                  "'"
                : "Parse error on line " +
                  (timelineDefinitionIT6M3QCIValue58 + 1) +
                  ": Unexpected " +
                  (timelineDefinitionIT6M3QCIValue69 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[timelineDefinitionIT6M3QCIValue69] ||
                        timelineDefinitionIT6M3QCIValue69) +
                      "'");
            this.parseError(timelineDefinitionIT6M3QCIValue79, {
              text: timelineDefinitionIT6M3QCIValue64.match,
              token:
                this.terminals_[timelineDefinitionIT6M3QCIValue69] ||
                timelineDefinitionIT6M3QCIValue69,
              line: timelineDefinitionIT6M3QCIValue64.yylineno,
              loc: timelineDefinitionIT6M3QCIValue67,
              expected: timelineDefinitionIT6M3QCIValue78,
            });
          }
          if (
            timelineDefinitionIT6M3QCIValue72[0] instanceof Array &&
            timelineDefinitionIT6M3QCIValue72.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                timelineDefinitionIT6M3QCIValue71 +
                ", token: " +
                timelineDefinitionIT6M3QCIValue69,
            );
          switch (timelineDefinitionIT6M3QCIValue72[0]) {
            case 1:
              timelineDefinitionIT6M3QCIValue52.push(
                timelineDefinitionIT6M3QCIValue69,
              );
              timelineDefinitionIT6M3QCIValue54.push(
                timelineDefinitionIT6M3QCIValue64.yytext,
              );
              timelineDefinitionIT6M3QCIValue55.push(
                timelineDefinitionIT6M3QCIValue64.yylloc,
              );
              timelineDefinitionIT6M3QCIValue52.push(
                timelineDefinitionIT6M3QCIValue72[1],
              );
              timelineDefinitionIT6M3QCIValue69 = null;
              timelineDefinitionIT6M3QCIValue70
                ? ((timelineDefinitionIT6M3QCIValue69 =
                    timelineDefinitionIT6M3QCIValue70),
                  (timelineDefinitionIT6M3QCIValue70 = null))
                : ((timelineDefinitionIT6M3QCIValue59 =
                    timelineDefinitionIT6M3QCIValue64.yyleng),
                  (timelineDefinitionIT6M3QCIValue57 =
                    timelineDefinitionIT6M3QCIValue64.yytext),
                  (timelineDefinitionIT6M3QCIValue58 =
                    timelineDefinitionIT6M3QCIValue64.yylineno),
                  (timelineDefinitionIT6M3QCIValue67 =
                    timelineDefinitionIT6M3QCIValue64.yylloc),
                  timelineDefinitionIT6M3QCIValue60 > 0 &&
                    timelineDefinitionIT6M3QCIValue60--);
              break;
            case 2:
              if (
                ((timelineDefinitionIT6M3QCIValue76 =
                  this.productions_[timelineDefinitionIT6M3QCIValue72[1]][1]),
                (timelineDefinitionIT6M3QCIValue74.$ =
                  timelineDefinitionIT6M3QCIValue54[
                    timelineDefinitionIT6M3QCIValue54.length -
                      timelineDefinitionIT6M3QCIValue76
                  ]),
                (timelineDefinitionIT6M3QCIValue74._$ = {
                  first_line:
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length -
                        (timelineDefinitionIT6M3QCIValue76 || 1)
                    ].first_line,
                  last_line:
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length - 1
                    ].last_line,
                  first_column:
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length -
                        (timelineDefinitionIT6M3QCIValue76 || 1)
                    ].first_column,
                  last_column:
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length - 1
                    ].last_column,
                }),
                timelineDefinitionIT6M3QCIValue68 &&
                  (timelineDefinitionIT6M3QCIValue74._$.range = [
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length -
                        (timelineDefinitionIT6M3QCIValue76 || 1)
                    ].range[0],
                    timelineDefinitionIT6M3QCIValue55[
                      timelineDefinitionIT6M3QCIValue55.length - 1
                    ].range[1],
                  ]),
                (timelineDefinitionIT6M3QCIValue73 = this.performAction.apply(
                  timelineDefinitionIT6M3QCIValue74,
                  [
                    timelineDefinitionIT6M3QCIValue57,
                    timelineDefinitionIT6M3QCIValue59,
                    timelineDefinitionIT6M3QCIValue58,
                    timelineDefinitionIT6M3QCIValue65.yy,
                    timelineDefinitionIT6M3QCIValue72[1],
                    timelineDefinitionIT6M3QCIValue54,
                    timelineDefinitionIT6M3QCIValue55,
                  ].concat(timelineDefinitionIT6M3QCIValue63),
                )),
                timelineDefinitionIT6M3QCIValue73 !== undefined)
              )
                return timelineDefinitionIT6M3QCIValue73;
              timelineDefinitionIT6M3QCIValue76 &&
                ((timelineDefinitionIT6M3QCIValue52 =
                  timelineDefinitionIT6M3QCIValue52.slice(
                    0,
                    -1 * timelineDefinitionIT6M3QCIValue76 * 2,
                  )),
                (timelineDefinitionIT6M3QCIValue54 =
                  timelineDefinitionIT6M3QCIValue54.slice(
                    0,
                    -1 * timelineDefinitionIT6M3QCIValue76,
                  )),
                (timelineDefinitionIT6M3QCIValue55 =
                  timelineDefinitionIT6M3QCIValue55.slice(
                    0,
                    -1 * timelineDefinitionIT6M3QCIValue76,
                  )));
              timelineDefinitionIT6M3QCIValue52.push(
                this.productions_[timelineDefinitionIT6M3QCIValue72[1]][0],
              );
              timelineDefinitionIT6M3QCIValue54.push(
                timelineDefinitionIT6M3QCIValue74.$,
              );
              timelineDefinitionIT6M3QCIValue55.push(
                timelineDefinitionIT6M3QCIValue74._$,
              );
              timelineDefinitionIT6M3QCIValue77 =
                timelineDefinitionIT6M3QCIValue56[
                  timelineDefinitionIT6M3QCIValue52[
                    timelineDefinitionIT6M3QCIValue52.length - 2
                  ]
                ][
                  timelineDefinitionIT6M3QCIValue52[
                    timelineDefinitionIT6M3QCIValue52.length - 1
                  ]
                ];
              timelineDefinitionIT6M3QCIValue52.push(
                timelineDefinitionIT6M3QCIValue77,
              );
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  timelineDefinitionIT6M3QCIValue50.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam111,
        timelineDefinitionIT6M3QCIParam112,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            timelineDefinitionIT6M3QCIParam111,
            timelineDefinitionIT6M3QCIParam112,
          );
        else throw Error(timelineDefinitionIT6M3QCIParam111);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam61,
        timelineDefinitionIT6M3QCIParam62,
      ) {
        return (
          (this.yy = timelineDefinitionIT6M3QCIParam62 || this.yy || {}),
          (this._input = timelineDefinitionIT6M3QCIParam61),
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
        var timelineDefinitionIT6M3QCIValue162 = this._input[0];
        return (
          (this.yytext += timelineDefinitionIT6M3QCIValue162),
          this.yyleng++,
          this.offset++,
          (this.match += timelineDefinitionIT6M3QCIValue162),
          (this.matched += timelineDefinitionIT6M3QCIValue162),
          timelineDefinitionIT6M3QCIValue162.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          timelineDefinitionIT6M3QCIValue162
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam11) {
        var timelineDefinitionIT6M3QCIValue108 =
            timelineDefinitionIT6M3QCIParam11.length,
          timelineDefinitionIT6M3QCIValue109 =
            timelineDefinitionIT6M3QCIParam11.split(/(?:\r\n?|\n)/g);
        this._input = timelineDefinitionIT6M3QCIParam11 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - timelineDefinitionIT6M3QCIValue108,
        );
        this.offset -= timelineDefinitionIT6M3QCIValue108;
        var timelineDefinitionIT6M3QCIValue110 =
          this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        timelineDefinitionIT6M3QCIValue109.length - 1 &&
          (this.yylineno -= timelineDefinitionIT6M3QCIValue109.length - 1);
        var timelineDefinitionIT6M3QCIValue111 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: timelineDefinitionIT6M3QCIValue109
              ? (timelineDefinitionIT6M3QCIValue109.length ===
                timelineDefinitionIT6M3QCIValue110.length
                  ? this.yylloc.first_column
                  : 0) +
                timelineDefinitionIT6M3QCIValue110[
                  timelineDefinitionIT6M3QCIValue110.length -
                    timelineDefinitionIT6M3QCIValue109.length
                ].length -
                timelineDefinitionIT6M3QCIValue109[0].length
              : this.yylloc.first_column - timelineDefinitionIT6M3QCIValue108,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              timelineDefinitionIT6M3QCIValue111[0],
              timelineDefinitionIT6M3QCIValue111[0] +
                this.yyleng -
                timelineDefinitionIT6M3QCIValue108,
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
      less: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam123) {
        this.unput(this.match.slice(timelineDefinitionIT6M3QCIParam123));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var timelineDefinitionIT6M3QCIValue183 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (timelineDefinitionIT6M3QCIValue183.length > 20 ? "..." : "") +
          timelineDefinitionIT6M3QCIValue183.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var timelineDefinitionIT6M3QCIValue181 = this.match;
        return (
          timelineDefinitionIT6M3QCIValue181.length < 20 &&
            (timelineDefinitionIT6M3QCIValue181 += this._input.substr(
              0,
              20 - timelineDefinitionIT6M3QCIValue181.length,
            )),
          (
            timelineDefinitionIT6M3QCIValue181.substr(0, 20) +
            (timelineDefinitionIT6M3QCIValue181.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var timelineDefinitionIT6M3QCIValue188 = this.pastInput(),
          timelineDefinitionIT6M3QCIValue189 = Array(
            timelineDefinitionIT6M3QCIValue188.length + 1,
          ).join("-");
        return (
          timelineDefinitionIT6M3QCIValue188 +
          this.upcomingInput() +
          "\n" +
          timelineDefinitionIT6M3QCIValue189 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam6,
        timelineDefinitionIT6M3QCIParam7,
      ) {
        var timelineDefinitionIT6M3QCIValue99,
          timelineDefinitionIT6M3QCIValue100,
          timelineDefinitionIT6M3QCIValue101;
        if (
          (this.options.backtrack_lexer &&
            ((timelineDefinitionIT6M3QCIValue101 = {
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
              (timelineDefinitionIT6M3QCIValue101.yylloc.range =
                this.yylloc.range.slice(0))),
          (timelineDefinitionIT6M3QCIValue100 =
            timelineDefinitionIT6M3QCIParam6[0].match(/(?:\r\n?|\n).*/g)),
          timelineDefinitionIT6M3QCIValue100 &&
            (this.yylineno += timelineDefinitionIT6M3QCIValue100.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: timelineDefinitionIT6M3QCIValue100
              ? timelineDefinitionIT6M3QCIValue100[
                  timelineDefinitionIT6M3QCIValue100.length - 1
                ].length -
                timelineDefinitionIT6M3QCIValue100[
                  timelineDefinitionIT6M3QCIValue100.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                timelineDefinitionIT6M3QCIParam6[0].length,
          }),
          (this.yytext += timelineDefinitionIT6M3QCIParam6[0]),
          (this.match += timelineDefinitionIT6M3QCIParam6[0]),
          (this.matches = timelineDefinitionIT6M3QCIParam6),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            timelineDefinitionIT6M3QCIParam6[0].length,
          )),
          (this.matched += timelineDefinitionIT6M3QCIParam6[0]),
          (timelineDefinitionIT6M3QCIValue99 = this.performAction.call(
            this,
            this.yy,
            this,
            timelineDefinitionIT6M3QCIParam7,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          timelineDefinitionIT6M3QCIValue99)
        )
          return timelineDefinitionIT6M3QCIValue99;
        if (this._backtrack) {
          for (var timelineDefinitionIT6M3QCIValue102 in timelineDefinitionIT6M3QCIValue101)
            this[timelineDefinitionIT6M3QCIValue102] =
              timelineDefinitionIT6M3QCIValue101[
                timelineDefinitionIT6M3QCIValue102
              ];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var timelineDefinitionIT6M3QCIValue113,
          timelineDefinitionIT6M3QCIValue114,
          timelineDefinitionIT6M3QCIValue115,
          timelineDefinitionIT6M3QCIValue116;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var timelineDefinitionIT6M3QCIValue117 = this._currentRules(),
            timelineDefinitionIT6M3QCIValue118 = 0;
          timelineDefinitionIT6M3QCIValue118 <
          timelineDefinitionIT6M3QCIValue117.length;
          timelineDefinitionIT6M3QCIValue118++
        )
          if (
            ((timelineDefinitionIT6M3QCIValue115 = this._input.match(
              this.rules[
                timelineDefinitionIT6M3QCIValue117[
                  timelineDefinitionIT6M3QCIValue118
                ]
              ],
            )),
            timelineDefinitionIT6M3QCIValue115 &&
              (!timelineDefinitionIT6M3QCIValue114 ||
                timelineDefinitionIT6M3QCIValue115[0].length >
                  timelineDefinitionIT6M3QCIValue114[0].length))
          ) {
            if (
              ((timelineDefinitionIT6M3QCIValue114 =
                timelineDefinitionIT6M3QCIValue115),
              (timelineDefinitionIT6M3QCIValue116 =
                timelineDefinitionIT6M3QCIValue118),
              this.options.backtrack_lexer)
            ) {
              if (
                ((timelineDefinitionIT6M3QCIValue113 = this.test_match(
                  timelineDefinitionIT6M3QCIValue115,
                  timelineDefinitionIT6M3QCIValue117[
                    timelineDefinitionIT6M3QCIValue118
                  ],
                )),
                timelineDefinitionIT6M3QCIValue113 !== false)
              )
                return timelineDefinitionIT6M3QCIValue113;
              if (this._backtrack) {
                timelineDefinitionIT6M3QCIValue114 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return timelineDefinitionIT6M3QCIValue114
          ? ((timelineDefinitionIT6M3QCIValue113 = this.test_match(
              timelineDefinitionIT6M3QCIValue114,
              timelineDefinitionIT6M3QCIValue117[
                timelineDefinitionIT6M3QCIValue116
              ],
            )),
            timelineDefinitionIT6M3QCIValue113 === false
              ? false
              : timelineDefinitionIT6M3QCIValue113)
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
      begin: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam124) {
        this.conditionStack.push(timelineDefinitionIT6M3QCIParam124);
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
      topState: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam105) {
        return (
          (timelineDefinitionIT6M3QCIParam105 =
            this.conditionStack.length -
            1 -
            Math.abs(timelineDefinitionIT6M3QCIParam105 || 0)),
          timelineDefinitionIT6M3QCIParam105 >= 0
            ? this.conditionStack[timelineDefinitionIT6M3QCIParam105]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (timelineDefinitionIT6M3QCIParam126) {
        this.begin(timelineDefinitionIT6M3QCIParam126);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam34,
        timelineDefinitionIT6M3QCIParam35,
        timelineDefinitionIT6M3QCIParam36,
        timelineDefinitionIT6M3QCIParam37,
      ) {
        switch (timelineDefinitionIT6M3QCIParam36) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return (this.begin("acc_title"), 12);
          case 8:
            return (this.popState(), "acc_title_value");
          case 9:
            return (this.begin("acc_descr"), 14);
          case 10:
            return (this.popState(), "acc_descr_value");
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [
        /^(?:%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n]+)/i,
        /^(?:\s+)/i,
        /^(?:#[^\n]*)/i,
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
          rules: [12, 13],
          inclusive: false,
        },
        acc_descr: {
          rules: [10],
          inclusive: false,
        },
        acc_title: {
          rules: [8],
          inclusive: false,
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18],
          inclusive: true,
        },
      },
    };
  })();
  function timelineDefinitionIT6M3QCIHelper2() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper2, "Parser"),
    (timelineDefinitionIT6M3QCIHelper2.prototype =
      timelineDefinitionIT6M3QCIValue50),
    (timelineDefinitionIT6M3QCIValue50.Parser =
      timelineDefinitionIT6M3QCIHelper2),
    new timelineDefinitionIT6M3QCIHelper2()
  );
})();
timelineDefinitionIT6M3QCIValue1.parser = timelineDefinitionIT6M3QCIValue1;
var timelineDefinitionIT6M3QCIValue2 = timelineDefinitionIT6M3QCIValue1,
  timelineDefinitionIT6M3QCIValue3 = {};
chunkAGHRB4JFT(timelineDefinitionIT6M3QCIValue3, {
  addEvent: () => timelineDefinitionIT6M3QCIValue15,
  addSection: () => timelineDefinitionIT6M3QCIValue11,
  addTask: () => timelineDefinitionIT6M3QCIValue14,
  addTaskOrg: () => timelineDefinitionIT6M3QCIValue16,
  clear: () => timelineDefinitionIT6M3QCIValue10,
  default: () => timelineDefinitionIT6M3QCIValue18,
  getCommonDb: () => timelineDefinitionIT6M3QCIValue9,
  getSections: () => timelineDefinitionIT6M3QCIValue12,
  getTasks: () => timelineDefinitionIT6M3QCIValue13,
});
var timelineDefinitionIT6M3QCIValue4 = "",
  timelineDefinitionIT6M3QCIValue5 = 0,
  timelineDefinitionIT6M3QCIValue6 = [],
  timelineDefinitionIT6M3QCIValue7 = [],
  timelineDefinitionIT6M3QCIValue8 = [],
  timelineDefinitionIT6M3QCIValue9 = chunkAGHRB4JFN(
    () => chunkABZYJK2DG,
    "getCommonDb",
  ),
  timelineDefinitionIT6M3QCIValue10 = chunkAGHRB4JFN(function () {
    timelineDefinitionIT6M3QCIValue6.length = 0;
    timelineDefinitionIT6M3QCIValue7.length = 0;
    timelineDefinitionIT6M3QCIValue4 = "";
    timelineDefinitionIT6M3QCIValue8.length = 0;
    _chunkABZYJK2DK();
  }, "clear"),
  timelineDefinitionIT6M3QCIValue11 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam127,
  ) {
    timelineDefinitionIT6M3QCIValue4 = timelineDefinitionIT6M3QCIParam127;
    timelineDefinitionIT6M3QCIValue6.push(timelineDefinitionIT6M3QCIParam127);
  }, "addSection"),
  timelineDefinitionIT6M3QCIValue12 = chunkAGHRB4JFN(function () {
    return timelineDefinitionIT6M3QCIValue6;
  }, "getSections"),
  timelineDefinitionIT6M3QCIValue13 = chunkAGHRB4JFN(function () {
    let timelineDefinitionIT6M3QCIValue193 =
        timelineDefinitionIT6M3QCIValue17(),
      timelineDefinitionIT6M3QCIValue194 = 0;
    for (
      ;
      !timelineDefinitionIT6M3QCIValue193 &&
      timelineDefinitionIT6M3QCIValue194 < 100;

    ) {
      timelineDefinitionIT6M3QCIValue193 = timelineDefinitionIT6M3QCIValue17();
      timelineDefinitionIT6M3QCIValue194++;
    }
    return (
      timelineDefinitionIT6M3QCIValue7.push(
        ...timelineDefinitionIT6M3QCIValue8,
      ),
      timelineDefinitionIT6M3QCIValue7
    );
  }, "getTasks"),
  timelineDefinitionIT6M3QCIValue14 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam106,
    timelineDefinitionIT6M3QCIParam107,
    timelineDefinitionIT6M3QCIParam108,
  ) {
    let timelineDefinitionIT6M3QCIValue190 = {
      id: timelineDefinitionIT6M3QCIValue5++,
      section: timelineDefinitionIT6M3QCIValue4,
      type: timelineDefinitionIT6M3QCIValue4,
      task: timelineDefinitionIT6M3QCIParam106,
      score: timelineDefinitionIT6M3QCIParam107 || 0,
      events: timelineDefinitionIT6M3QCIParam108
        ? [timelineDefinitionIT6M3QCIParam108]
        : [],
    };
    timelineDefinitionIT6M3QCIValue8.push(timelineDefinitionIT6M3QCIValue190);
  }, "addTask"),
  timelineDefinitionIT6M3QCIValue15 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam122,
  ) {
    timelineDefinitionIT6M3QCIValue8
      .find((item) => item.id === timelineDefinitionIT6M3QCIValue5 - 1)
      .events.push(timelineDefinitionIT6M3QCIParam122);
  }, "addEvent"),
  timelineDefinitionIT6M3QCIValue16 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam113,
  ) {
    let timelineDefinitionIT6M3QCIValue192 = {
      section: timelineDefinitionIT6M3QCIValue4,
      type: timelineDefinitionIT6M3QCIValue4,
      description: timelineDefinitionIT6M3QCIParam113,
      task: timelineDefinitionIT6M3QCIParam113,
      classes: [],
    };
    timelineDefinitionIT6M3QCIValue7.push(timelineDefinitionIT6M3QCIValue192);
  }, "addTaskOrg"),
  timelineDefinitionIT6M3QCIValue17 = chunkAGHRB4JFN(function () {
    let timelineDefinitionIT6M3QCIValue184 = chunkAGHRB4JFN(function (
        timelineDefinitionIT6M3QCIParam125,
      ) {
        return timelineDefinitionIT6M3QCIValue8[
          timelineDefinitionIT6M3QCIParam125
        ].processed;
      }, "compileTask"),
      timelineDefinitionIT6M3QCIValue185 = true;
    for (let [
      timelineDefinitionIT6M3QCIValue195,
      timelineDefinitionIT6M3QCIValue196,
    ] of timelineDefinitionIT6M3QCIValue8.entries()) {
      timelineDefinitionIT6M3QCIValue184(timelineDefinitionIT6M3QCIValue195);
      timelineDefinitionIT6M3QCIValue185 &&=
        timelineDefinitionIT6M3QCIValue196.processed;
    }
    return timelineDefinitionIT6M3QCIValue185;
  }, "compileTasks"),
  timelineDefinitionIT6M3QCIValue18 = {
    clear: timelineDefinitionIT6M3QCIValue10,
    getCommonDb: timelineDefinitionIT6M3QCIValue9,
    addSection: timelineDefinitionIT6M3QCIValue11,
    getSections: timelineDefinitionIT6M3QCIValue12,
    getTasks: timelineDefinitionIT6M3QCIValue13,
    addTask: timelineDefinitionIT6M3QCIValue14,
    addTaskOrg: timelineDefinitionIT6M3QCIValue16,
    addEvent: timelineDefinitionIT6M3QCIValue15,
  },
  timelineDefinitionIT6M3QCIValue20 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam84,
    timelineDefinitionIT6M3QCIParam85,
  ) {
    let timelineDefinitionIT6M3QCIValue171 =
      timelineDefinitionIT6M3QCIParam84.append("rect");
    return (
      timelineDefinitionIT6M3QCIValue171.attr(
        "x",
        timelineDefinitionIT6M3QCIParam85.x,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "y",
        timelineDefinitionIT6M3QCIParam85.y,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "fill",
        timelineDefinitionIT6M3QCIParam85.fill,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "stroke",
        timelineDefinitionIT6M3QCIParam85.stroke,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "width",
        timelineDefinitionIT6M3QCIParam85.width,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "height",
        timelineDefinitionIT6M3QCIParam85.height,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "rx",
        timelineDefinitionIT6M3QCIParam85.rx,
      ),
      timelineDefinitionIT6M3QCIValue171.attr(
        "ry",
        timelineDefinitionIT6M3QCIParam85.ry,
      ),
      timelineDefinitionIT6M3QCIParam85.class !== undefined &&
        timelineDefinitionIT6M3QCIValue171.attr(
          "class",
          timelineDefinitionIT6M3QCIParam85.class,
        ),
      timelineDefinitionIT6M3QCIValue171
    );
  }, "drawRect"),
  timelineDefinitionIT6M3QCIValue21 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam8,
    timelineDefinitionIT6M3QCIParam9,
  ) {
    let timelineDefinitionIT6M3QCIValue103 = timelineDefinitionIT6M3QCIParam8
        .append("circle")
        .attr("cx", timelineDefinitionIT6M3QCIParam9.cx)
        .attr("cy", timelineDefinitionIT6M3QCIParam9.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      timelineDefinitionIT6M3QCIValue104 =
        timelineDefinitionIT6M3QCIParam8.append("g");
    timelineDefinitionIT6M3QCIValue104
      .append("circle")
      .attr("cx", timelineDefinitionIT6M3QCIParam9.cx - 5)
      .attr("cy", timelineDefinitionIT6M3QCIParam9.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    timelineDefinitionIT6M3QCIValue104
      .append("circle")
      .attr("cx", timelineDefinitionIT6M3QCIParam9.cx + 5)
      .attr("cy", timelineDefinitionIT6M3QCIParam9.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function timelineDefinitionIT6M3QCIHelper9(
      timelineDefinitionIT6M3QCIParam88,
    ) {
      let timelineDefinitionIT6M3QCIValue177 = arc()
        .startAngle(Math.PI / 2)
        .endAngle(3 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionIT6M3QCIParam88
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionIT6M3QCIValue177)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionIT6M3QCIParam9.cx +
            "," +
            (timelineDefinitionIT6M3QCIParam9.cy + 2) +
            ")",
        );
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper9, "smile");
    function timelineDefinitionIT6M3QCIHelper10(
      timelineDefinitionIT6M3QCIParam86,
    ) {
      let timelineDefinitionIT6M3QCIValue176 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle(5 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      timelineDefinitionIT6M3QCIParam86
        .append("path")
        .attr("class", "mouth")
        .attr("d", timelineDefinitionIT6M3QCIValue176)
        .attr(
          "transform",
          "translate(" +
            timelineDefinitionIT6M3QCIParam9.cx +
            "," +
            (timelineDefinitionIT6M3QCIParam9.cy + 7) +
            ")",
        );
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper10, "sad");
    function timelineDefinitionIT6M3QCIHelper11(
      timelineDefinitionIT6M3QCIParam87,
    ) {
      timelineDefinitionIT6M3QCIParam87
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", timelineDefinitionIT6M3QCIParam9.cx - 5)
        .attr("y1", timelineDefinitionIT6M3QCIParam9.cy + 7)
        .attr("x2", timelineDefinitionIT6M3QCIParam9.cx + 5)
        .attr("y2", timelineDefinitionIT6M3QCIParam9.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper11, "ambivalent"),
      timelineDefinitionIT6M3QCIParam9.score > 3
        ? timelineDefinitionIT6M3QCIHelper9(timelineDefinitionIT6M3QCIValue104)
        : timelineDefinitionIT6M3QCIParam9.score < 3
          ? timelineDefinitionIT6M3QCIHelper10(
              timelineDefinitionIT6M3QCIValue104,
            )
          : timelineDefinitionIT6M3QCIHelper11(
              timelineDefinitionIT6M3QCIValue104,
            ),
      timelineDefinitionIT6M3QCIValue103
    );
  }, "drawFace"),
  timelineDefinitionIT6M3QCIValue22 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam79,
    timelineDefinitionIT6M3QCIParam80,
  ) {
    let timelineDefinitionIT6M3QCIValue167 =
      timelineDefinitionIT6M3QCIParam79.append("circle");
    return (
      timelineDefinitionIT6M3QCIValue167.attr(
        "cx",
        timelineDefinitionIT6M3QCIParam80.cx,
      ),
      timelineDefinitionIT6M3QCIValue167.attr(
        "cy",
        timelineDefinitionIT6M3QCIParam80.cy,
      ),
      timelineDefinitionIT6M3QCIValue167.attr(
        "class",
        "actor-" + timelineDefinitionIT6M3QCIParam80.pos,
      ),
      timelineDefinitionIT6M3QCIValue167.attr(
        "fill",
        timelineDefinitionIT6M3QCIParam80.fill,
      ),
      timelineDefinitionIT6M3QCIValue167.attr(
        "stroke",
        timelineDefinitionIT6M3QCIParam80.stroke,
      ),
      timelineDefinitionIT6M3QCIValue167.attr(
        "r",
        timelineDefinitionIT6M3QCIParam80.r,
      ),
      timelineDefinitionIT6M3QCIValue167.class !== undefined &&
        timelineDefinitionIT6M3QCIValue167.attr(
          "class",
          timelineDefinitionIT6M3QCIValue167.class,
        ),
      timelineDefinitionIT6M3QCIParam80.title !== undefined &&
        timelineDefinitionIT6M3QCIValue167
          .append("title")
          .text(timelineDefinitionIT6M3QCIParam80.title),
      timelineDefinitionIT6M3QCIValue167
    );
  }, "drawCircle"),
  timelineDefinitionIT6M3QCIValue23 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam77,
    timelineDefinitionIT6M3QCIParam78,
  ) {
    let timelineDefinitionIT6M3QCIValue164 =
        timelineDefinitionIT6M3QCIParam78.text.replace(/<br\s*\/?>/gi, " "),
      timelineDefinitionIT6M3QCIValue165 =
        timelineDefinitionIT6M3QCIParam77.append("text");
    timelineDefinitionIT6M3QCIValue165.attr(
      "x",
      timelineDefinitionIT6M3QCIParam78.x,
    );
    timelineDefinitionIT6M3QCIValue165.attr(
      "y",
      timelineDefinitionIT6M3QCIParam78.y,
    );
    timelineDefinitionIT6M3QCIValue165.attr("class", "legend");
    timelineDefinitionIT6M3QCIValue165.style(
      "text-anchor",
      timelineDefinitionIT6M3QCIParam78.anchor,
    );
    timelineDefinitionIT6M3QCIParam78.class !== undefined &&
      timelineDefinitionIT6M3QCIValue165.attr(
        "class",
        timelineDefinitionIT6M3QCIParam78.class,
      );
    let timelineDefinitionIT6M3QCIValue166 =
      timelineDefinitionIT6M3QCIValue165.append("tspan");
    return (
      timelineDefinitionIT6M3QCIValue166.attr(
        "x",
        timelineDefinitionIT6M3QCIParam78.x +
          timelineDefinitionIT6M3QCIParam78.textMargin * 2,
      ),
      timelineDefinitionIT6M3QCIValue166.text(
        timelineDefinitionIT6M3QCIValue164,
      ),
      timelineDefinitionIT6M3QCIValue165
    );
  }, "drawText"),
  timelineDefinitionIT6M3QCIValue24 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam75,
    timelineDefinitionIT6M3QCIParam76,
  ) {
    function timelineDefinitionIT6M3QCIHelper12(
      timelineDefinitionIT6M3QCIParam100,
      timelineDefinitionIT6M3QCIParam101,
      timelineDefinitionIT6M3QCIParam102,
      timelineDefinitionIT6M3QCIParam103,
      timelineDefinitionIT6M3QCIParam104,
    ) {
      return (
        timelineDefinitionIT6M3QCIParam100 +
        "," +
        timelineDefinitionIT6M3QCIParam101 +
        " " +
        (timelineDefinitionIT6M3QCIParam100 +
          timelineDefinitionIT6M3QCIParam102) +
        "," +
        timelineDefinitionIT6M3QCIParam101 +
        " " +
        (timelineDefinitionIT6M3QCIParam100 +
          timelineDefinitionIT6M3QCIParam102) +
        "," +
        (timelineDefinitionIT6M3QCIParam101 +
          timelineDefinitionIT6M3QCIParam103 -
          timelineDefinitionIT6M3QCIParam104) +
        " " +
        (timelineDefinitionIT6M3QCIParam100 +
          timelineDefinitionIT6M3QCIParam102 -
          timelineDefinitionIT6M3QCIParam104 * 1.2) +
        "," +
        (timelineDefinitionIT6M3QCIParam101 +
          timelineDefinitionIT6M3QCIParam103) +
        " " +
        timelineDefinitionIT6M3QCIParam100 +
        "," +
        (timelineDefinitionIT6M3QCIParam101 +
          timelineDefinitionIT6M3QCIParam103)
      );
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper12, "genPoints");
    let timelineDefinitionIT6M3QCIValue163 =
      timelineDefinitionIT6M3QCIParam75.append("polygon");
    timelineDefinitionIT6M3QCIValue163.attr(
      "points",
      timelineDefinitionIT6M3QCIHelper12(
        timelineDefinitionIT6M3QCIParam76.x,
        timelineDefinitionIT6M3QCIParam76.y,
        50,
        20,
        7,
      ),
    );
    timelineDefinitionIT6M3QCIValue163.attr("class", "labelBox");
    timelineDefinitionIT6M3QCIParam76.y +=
      timelineDefinitionIT6M3QCIParam76.labelMargin;
    timelineDefinitionIT6M3QCIParam76.x +=
      0.5 * timelineDefinitionIT6M3QCIParam76.labelMargin;
    timelineDefinitionIT6M3QCIValue23(
      timelineDefinitionIT6M3QCIParam75,
      timelineDefinitionIT6M3QCIParam76,
    );
  }, "drawLabel"),
  timelineDefinitionIT6M3QCIValue25 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam81,
    timelineDefinitionIT6M3QCIParam82,
    timelineDefinitionIT6M3QCIParam83,
  ) {
    let timelineDefinitionIT6M3QCIValue168 =
        timelineDefinitionIT6M3QCIParam81.append("g"),
      timelineDefinitionIT6M3QCIValue169 = timelineDefinitionIT6M3QCIValue30();
    timelineDefinitionIT6M3QCIValue169.x = timelineDefinitionIT6M3QCIParam82.x;
    timelineDefinitionIT6M3QCIValue169.y = timelineDefinitionIT6M3QCIParam82.y;
    timelineDefinitionIT6M3QCIValue169.fill =
      timelineDefinitionIT6M3QCIParam82.fill;
    timelineDefinitionIT6M3QCIValue169.width =
      timelineDefinitionIT6M3QCIParam83.width;
    timelineDefinitionIT6M3QCIValue169.height =
      timelineDefinitionIT6M3QCIParam83.height;
    timelineDefinitionIT6M3QCIValue169.class =
      "journey-section section-type-" + timelineDefinitionIT6M3QCIParam82.num;
    timelineDefinitionIT6M3QCIValue169.rx = 3;
    timelineDefinitionIT6M3QCIValue169.ry = 3;
    timelineDefinitionIT6M3QCIValue20(
      timelineDefinitionIT6M3QCIValue168,
      timelineDefinitionIT6M3QCIValue169,
    );
    timelineDefinitionIT6M3QCIValue31(timelineDefinitionIT6M3QCIParam83)(
      timelineDefinitionIT6M3QCIParam82.text,
      timelineDefinitionIT6M3QCIValue168,
      timelineDefinitionIT6M3QCIValue169.x,
      timelineDefinitionIT6M3QCIValue169.y,
      timelineDefinitionIT6M3QCIValue169.width,
      timelineDefinitionIT6M3QCIValue169.height,
      {
        class:
          "journey-section section-type-" +
          timelineDefinitionIT6M3QCIParam82.num,
      },
      timelineDefinitionIT6M3QCIParam83,
      timelineDefinitionIT6M3QCIParam82.colour,
    );
  }, "drawSection"),
  timelineDefinitionIT6M3QCIValue26 = -1,
  timelineDefinitionIT6M3QCIValue27 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam38,
    timelineDefinitionIT6M3QCIParam39,
    timelineDefinitionIT6M3QCIParam40,
  ) {
    let timelineDefinitionIT6M3QCIValue129 =
        timelineDefinitionIT6M3QCIParam39.x +
        timelineDefinitionIT6M3QCIParam40.width / 2,
      timelineDefinitionIT6M3QCIValue130 =
        timelineDefinitionIT6M3QCIParam38.append("g");
    timelineDefinitionIT6M3QCIValue26++;
    timelineDefinitionIT6M3QCIValue130
      .append("line")
      .attr("id", "task" + timelineDefinitionIT6M3QCIValue26)
      .attr("x1", timelineDefinitionIT6M3QCIValue129)
      .attr("y1", timelineDefinitionIT6M3QCIParam39.y)
      .attr("x2", timelineDefinitionIT6M3QCIValue129)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    timelineDefinitionIT6M3QCIValue21(timelineDefinitionIT6M3QCIValue130, {
      cx: timelineDefinitionIT6M3QCIValue129,
      cy: 300 + (5 - timelineDefinitionIT6M3QCIParam39.score) * 30,
      score: timelineDefinitionIT6M3QCIParam39.score,
    });
    let timelineDefinitionIT6M3QCIValue131 =
      timelineDefinitionIT6M3QCIValue30();
    timelineDefinitionIT6M3QCIValue131.x = timelineDefinitionIT6M3QCIParam39.x;
    timelineDefinitionIT6M3QCIValue131.y = timelineDefinitionIT6M3QCIParam39.y;
    timelineDefinitionIT6M3QCIValue131.fill =
      timelineDefinitionIT6M3QCIParam39.fill;
    timelineDefinitionIT6M3QCIValue131.width =
      timelineDefinitionIT6M3QCIParam40.width;
    timelineDefinitionIT6M3QCIValue131.height =
      timelineDefinitionIT6M3QCIParam40.height;
    timelineDefinitionIT6M3QCIValue131.class =
      "task task-type-" + timelineDefinitionIT6M3QCIParam39.num;
    timelineDefinitionIT6M3QCIValue131.rx = 3;
    timelineDefinitionIT6M3QCIValue131.ry = 3;
    timelineDefinitionIT6M3QCIValue20(
      timelineDefinitionIT6M3QCIValue130,
      timelineDefinitionIT6M3QCIValue131,
    );
    timelineDefinitionIT6M3QCIValue31(timelineDefinitionIT6M3QCIParam40)(
      timelineDefinitionIT6M3QCIParam39.task,
      timelineDefinitionIT6M3QCIValue130,
      timelineDefinitionIT6M3QCIValue131.x,
      timelineDefinitionIT6M3QCIValue131.y,
      timelineDefinitionIT6M3QCIValue131.width,
      timelineDefinitionIT6M3QCIValue131.height,
      {
        class: "task",
      },
      timelineDefinitionIT6M3QCIParam40,
      timelineDefinitionIT6M3QCIParam39.colour,
    );
  }, "drawTask"),
  timelineDefinitionIT6M3QCIValue28 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam98,
    timelineDefinitionIT6M3QCIParam99,
  ) {
    timelineDefinitionIT6M3QCIValue20(timelineDefinitionIT6M3QCIParam98, {
      x: timelineDefinitionIT6M3QCIParam99.startx,
      y: timelineDefinitionIT6M3QCIParam99.starty,
      width:
        timelineDefinitionIT6M3QCIParam99.stopx -
        timelineDefinitionIT6M3QCIParam99.startx,
      height:
        timelineDefinitionIT6M3QCIParam99.stopy -
        timelineDefinitionIT6M3QCIParam99.starty,
      fill: timelineDefinitionIT6M3QCIParam99.fill,
      class: "rect",
    }).lower();
  }, "drawBackgroundRect"),
  timelineDefinitionIT6M3QCIValue29 = chunkAGHRB4JFN(function () {
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
  timelineDefinitionIT6M3QCIValue30 = chunkAGHRB4JFN(function () {
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
  timelineDefinitionIT6M3QCIValue31 = (function () {
    function timelineDefinitionIT6M3QCIHelper5(
      timelineDefinitionIT6M3QCIParam90,
      timelineDefinitionIT6M3QCIParam91,
      timelineDefinitionIT6M3QCIParam92,
      timelineDefinitionIT6M3QCIParam93,
      timelineDefinitionIT6M3QCIParam94,
      timelineDefinitionIT6M3QCIParam95,
      timelineDefinitionIT6M3QCIParam96,
      timelineDefinitionIT6M3QCIParam97,
    ) {
      timelineDefinitionIT6M3QCIHelper8(
        timelineDefinitionIT6M3QCIParam91
          .append("text")
          .attr(
            "x",
            timelineDefinitionIT6M3QCIParam92 +
              timelineDefinitionIT6M3QCIParam94 / 2,
          )
          .attr(
            "y",
            timelineDefinitionIT6M3QCIParam93 +
              timelineDefinitionIT6M3QCIParam95 / 2 +
              5,
          )
          .style("font-color", timelineDefinitionIT6M3QCIParam97)
          .style("text-anchor", "middle")
          .text(timelineDefinitionIT6M3QCIParam90),
        timelineDefinitionIT6M3QCIParam96,
      );
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper5, "byText");
    function timelineDefinitionIT6M3QCIHelper6(
      timelineDefinitionIT6M3QCIParam43,
      timelineDefinitionIT6M3QCIParam44,
      timelineDefinitionIT6M3QCIParam45,
      timelineDefinitionIT6M3QCIParam46,
      timelineDefinitionIT6M3QCIParam47,
      timelineDefinitionIT6M3QCIParam48,
      timelineDefinitionIT6M3QCIParam49,
      timelineDefinitionIT6M3QCIParam50,
      timelineDefinitionIT6M3QCIParam51,
    ) {
      let { taskFontSize, taskFontFamily } = timelineDefinitionIT6M3QCIParam50,
        timelineDefinitionIT6M3QCIValue140 =
          timelineDefinitionIT6M3QCIParam43.split(/<br\s*\/?>/gi);
      for (
        let timelineDefinitionIT6M3QCIValue152 = 0;
        timelineDefinitionIT6M3QCIValue152 <
        timelineDefinitionIT6M3QCIValue140.length;
        timelineDefinitionIT6M3QCIValue152++
      ) {
        let timelineDefinitionIT6M3QCIValue156 =
            timelineDefinitionIT6M3QCIValue152 * taskFontSize -
            (taskFontSize * (timelineDefinitionIT6M3QCIValue140.length - 1)) /
              2,
          timelineDefinitionIT6M3QCIValue157 = timelineDefinitionIT6M3QCIParam44
            .append("text")
            .attr(
              "x",
              timelineDefinitionIT6M3QCIParam45 +
                timelineDefinitionIT6M3QCIParam47 / 2,
            )
            .attr("y", timelineDefinitionIT6M3QCIParam46)
            .attr("fill", timelineDefinitionIT6M3QCIParam51)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        timelineDefinitionIT6M3QCIValue157
          .append("tspan")
          .attr(
            "x",
            timelineDefinitionIT6M3QCIParam45 +
              timelineDefinitionIT6M3QCIParam47 / 2,
          )
          .attr("dy", timelineDefinitionIT6M3QCIValue156)
          .text(
            timelineDefinitionIT6M3QCIValue140[
              timelineDefinitionIT6M3QCIValue152
            ],
          );
        timelineDefinitionIT6M3QCIValue157
          .attr(
            "y",
            timelineDefinitionIT6M3QCIParam46 +
              timelineDefinitionIT6M3QCIParam48 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        timelineDefinitionIT6M3QCIHelper8(
          timelineDefinitionIT6M3QCIValue157,
          timelineDefinitionIT6M3QCIParam49,
        );
      }
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper6, "byTspan");
    function timelineDefinitionIT6M3QCIHelper7(
      timelineDefinitionIT6M3QCIParam52,
      timelineDefinitionIT6M3QCIParam53,
      timelineDefinitionIT6M3QCIParam54,
      timelineDefinitionIT6M3QCIParam55,
      timelineDefinitionIT6M3QCIParam56,
      timelineDefinitionIT6M3QCIParam57,
      timelineDefinitionIT6M3QCIParam58,
      timelineDefinitionIT6M3QCIParam59,
    ) {
      let timelineDefinitionIT6M3QCIValue143 =
          timelineDefinitionIT6M3QCIParam53.append("switch"),
        timelineDefinitionIT6M3QCIValue144 = timelineDefinitionIT6M3QCIValue143
          .append("foreignObject")
          .attr("x", timelineDefinitionIT6M3QCIParam54)
          .attr("y", timelineDefinitionIT6M3QCIParam55)
          .attr("width", timelineDefinitionIT6M3QCIParam56)
          .attr("height", timelineDefinitionIT6M3QCIParam57)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      timelineDefinitionIT6M3QCIValue144
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(timelineDefinitionIT6M3QCIParam52);
      timelineDefinitionIT6M3QCIHelper6(
        timelineDefinitionIT6M3QCIParam52,
        timelineDefinitionIT6M3QCIValue143,
        timelineDefinitionIT6M3QCIParam54,
        timelineDefinitionIT6M3QCIParam55,
        timelineDefinitionIT6M3QCIParam56,
        timelineDefinitionIT6M3QCIParam57,
        timelineDefinitionIT6M3QCIParam58,
        timelineDefinitionIT6M3QCIParam59,
      );
      timelineDefinitionIT6M3QCIHelper8(
        timelineDefinitionIT6M3QCIValue144,
        timelineDefinitionIT6M3QCIParam58,
      );
    }
    chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper7, "byFo");
    function timelineDefinitionIT6M3QCIHelper8(
      timelineDefinitionIT6M3QCIParam119,
      timelineDefinitionIT6M3QCIParam120,
    ) {
      for (let timelineDefinitionIT6M3QCIValue197 in timelineDefinitionIT6M3QCIParam120)
        timelineDefinitionIT6M3QCIValue197 in
          timelineDefinitionIT6M3QCIParam120 &&
          timelineDefinitionIT6M3QCIParam119.attr(
            timelineDefinitionIT6M3QCIValue197,
            timelineDefinitionIT6M3QCIParam120[
              timelineDefinitionIT6M3QCIValue197
            ],
          );
    }
    return (
      chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper8, "_setTextAttrs"),
      function (timelineDefinitionIT6M3QCIParam114) {
        return timelineDefinitionIT6M3QCIParam114.textPlacement === "fo"
          ? timelineDefinitionIT6M3QCIHelper7
          : timelineDefinitionIT6M3QCIParam114.textPlacement === "old"
            ? timelineDefinitionIT6M3QCIHelper5
            : timelineDefinitionIT6M3QCIHelper6;
      }
    );
  })(),
  timelineDefinitionIT6M3QCIValue32 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam89,
  ) {
    timelineDefinitionIT6M3QCIParam89
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("refX", 5)
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z");
  }, "initGraphics");
function timelineDefinitionIT6M3QCIHelper1(
  timelineDefinitionIT6M3QCIParam41,
  timelineDefinitionIT6M3QCIParam42,
) {
  timelineDefinitionIT6M3QCIParam41.each(function () {
    var timelineDefinitionIT6M3QCIValue132 = Src(this),
      timelineDefinitionIT6M3QCIValue133 = timelineDefinitionIT6M3QCIValue132
        .text()
        .split(/(\s+|<br>)/)
        .reverse(),
      timelineDefinitionIT6M3QCIValue134,
      timelineDefinitionIT6M3QCIValue135 = [],
      timelineDefinitionIT6M3QCIValue137 =
        timelineDefinitionIT6M3QCIValue132.attr("y"),
      timelineDefinitionIT6M3QCIValue138 = parseFloat(
        timelineDefinitionIT6M3QCIValue132.attr("dy"),
      ),
      timelineDefinitionIT6M3QCIValue139 = timelineDefinitionIT6M3QCIValue132
        .text(null)
        .append("tspan")
        .attr("x", 0)
        .attr("y", timelineDefinitionIT6M3QCIValue137)
        .attr("dy", timelineDefinitionIT6M3QCIValue138 + "em");
    for (
      let timelineDefinitionIT6M3QCIValue170 = 0;
      timelineDefinitionIT6M3QCIValue170 <
      timelineDefinitionIT6M3QCIValue133.length;
      timelineDefinitionIT6M3QCIValue170++
    ) {
      timelineDefinitionIT6M3QCIValue134 =
        timelineDefinitionIT6M3QCIValue133[
          timelineDefinitionIT6M3QCIValue133.length -
            1 -
            timelineDefinitionIT6M3QCIValue170
        ];
      timelineDefinitionIT6M3QCIValue135.push(
        timelineDefinitionIT6M3QCIValue134,
      );
      timelineDefinitionIT6M3QCIValue139.text(
        timelineDefinitionIT6M3QCIValue135.join(" ").trim(),
      );
      (timelineDefinitionIT6M3QCIValue139.node().getComputedTextLength() >
        timelineDefinitionIT6M3QCIParam42 ||
        timelineDefinitionIT6M3QCIValue134 === "<br>") &&
        (timelineDefinitionIT6M3QCIValue135.pop(),
        timelineDefinitionIT6M3QCIValue139.text(
          timelineDefinitionIT6M3QCIValue135.join(" ").trim(),
        ),
        (timelineDefinitionIT6M3QCIValue135 =
          timelineDefinitionIT6M3QCIValue134 === "<br>"
            ? [""]
            : [timelineDefinitionIT6M3QCIValue134]),
        (timelineDefinitionIT6M3QCIValue139 = timelineDefinitionIT6M3QCIValue132
          .append("tspan")
          .attr("x", 0)
          .attr("y", timelineDefinitionIT6M3QCIValue137)
          .attr("dy", "1.1em")
          .text(timelineDefinitionIT6M3QCIValue134)));
    }
  });
}
chunkAGHRB4JFN(timelineDefinitionIT6M3QCIHelper1, "wrap");
var timelineDefinitionIT6M3QCIValue33 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam30,
    timelineDefinitionIT6M3QCIParam31,
    timelineDefinitionIT6M3QCIParam32,
    timelineDefinitionIT6M3QCIParam33,
  ) {
    let timelineDefinitionIT6M3QCIValue123 =
        (timelineDefinitionIT6M3QCIParam32 % 12) - 1,
      timelineDefinitionIT6M3QCIValue124 =
        timelineDefinitionIT6M3QCIParam30.append("g");
    timelineDefinitionIT6M3QCIParam31.section =
      timelineDefinitionIT6M3QCIValue123;
    timelineDefinitionIT6M3QCIValue124.attr(
      "class",
      (timelineDefinitionIT6M3QCIParam31.class
        ? timelineDefinitionIT6M3QCIParam31.class + " "
        : "") +
        "timeline-node " +
        ("section-" + timelineDefinitionIT6M3QCIValue123),
    );
    let timelineDefinitionIT6M3QCIValue125 =
        timelineDefinitionIT6M3QCIValue124.append("g"),
      timelineDefinitionIT6M3QCIValue126 =
        timelineDefinitionIT6M3QCIValue124.append("g"),
      timelineDefinitionIT6M3QCIValue127 = timelineDefinitionIT6M3QCIValue126
        .append("text")
        .text(timelineDefinitionIT6M3QCIParam31.descr)
        .attr("dy", "1em")
        .attr("alignment-baseline", "middle")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .call(
          timelineDefinitionIT6M3QCIHelper1,
          timelineDefinitionIT6M3QCIParam31.width,
        )
        .node()
        .getBBox(),
      timelineDefinitionIT6M3QCIValue128 = timelineDefinitionIT6M3QCIParam33
        .fontSize?.replace
        ? timelineDefinitionIT6M3QCIParam33.fontSize.replace("px", "")
        : timelineDefinitionIT6M3QCIParam33.fontSize;
    return (
      (timelineDefinitionIT6M3QCIParam31.height =
        timelineDefinitionIT6M3QCIValue127.height +
        timelineDefinitionIT6M3QCIValue128 * 1.1 * 0.5 +
        timelineDefinitionIT6M3QCIParam31.padding),
      (timelineDefinitionIT6M3QCIParam31.height = Math.max(
        timelineDefinitionIT6M3QCIParam31.height,
        timelineDefinitionIT6M3QCIParam31.maxHeight,
      )),
      (timelineDefinitionIT6M3QCIParam31.width +=
        2 * timelineDefinitionIT6M3QCIParam31.padding),
      timelineDefinitionIT6M3QCIValue126.attr(
        "transform",
        "translate(" +
          timelineDefinitionIT6M3QCIParam31.width / 2 +
          ", " +
          timelineDefinitionIT6M3QCIParam31.padding / 2 +
          ")",
      ),
      timelineDefinitionIT6M3QCIValue35(
        timelineDefinitionIT6M3QCIValue125,
        timelineDefinitionIT6M3QCIParam31,
        timelineDefinitionIT6M3QCIValue123,
        timelineDefinitionIT6M3QCIParam33,
      ),
      timelineDefinitionIT6M3QCIParam31
    );
  }, "drawNode"),
  timelineDefinitionIT6M3QCIValue34 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam63,
    timelineDefinitionIT6M3QCIParam64,
    timelineDefinitionIT6M3QCIParam65,
  ) {
    let timelineDefinitionIT6M3QCIValue153 =
        timelineDefinitionIT6M3QCIParam63.append("g"),
      timelineDefinitionIT6M3QCIValue154 = timelineDefinitionIT6M3QCIValue153
        .append("text")
        .text(timelineDefinitionIT6M3QCIParam64.descr)
        .attr("dy", "1em")
        .attr("alignment-baseline", "middle")
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .call(
          timelineDefinitionIT6M3QCIHelper1,
          timelineDefinitionIT6M3QCIParam64.width,
        )
        .node()
        .getBBox(),
      timelineDefinitionIT6M3QCIValue155 = timelineDefinitionIT6M3QCIParam65
        .fontSize?.replace
        ? timelineDefinitionIT6M3QCIParam65.fontSize.replace("px", "")
        : timelineDefinitionIT6M3QCIParam65.fontSize;
    return (
      timelineDefinitionIT6M3QCIValue153.remove(),
      timelineDefinitionIT6M3QCIValue154.height +
        timelineDefinitionIT6M3QCIValue155 * 1.1 * 0.5 +
        timelineDefinitionIT6M3QCIParam64.padding
    );
  }, "getVirtualNodeHeight"),
  timelineDefinitionIT6M3QCIValue35 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam66,
    timelineDefinitionIT6M3QCIParam67,
    timelineDefinitionIT6M3QCIParam68,
  ) {
    timelineDefinitionIT6M3QCIParam66
      .append("path")
      .attr("id", "node-" + timelineDefinitionIT6M3QCIParam67.id)
      .attr("class", "node-bkg node-" + timelineDefinitionIT6M3QCIParam67.type)
      .attr(
        "d",
        `M0 ${timelineDefinitionIT6M3QCIParam67.height - 5} v${-timelineDefinitionIT6M3QCIParam67.height + 10} q0,-5 5,-5 h${timelineDefinitionIT6M3QCIParam67.width - 10} q5,0 5,5 v${timelineDefinitionIT6M3QCIParam67.height - 5} H0 Z`,
      );
    timelineDefinitionIT6M3QCIParam66
      .append("line")
      .attr("class", "node-line-" + timelineDefinitionIT6M3QCIParam68)
      .attr("x1", 0)
      .attr("y1", timelineDefinitionIT6M3QCIParam67.height)
      .attr("x2", timelineDefinitionIT6M3QCIParam67.width)
      .attr("y2", timelineDefinitionIT6M3QCIParam67.height);
  }, "defaultBkg"),
  timelineDefinitionIT6M3QCIValue36 = {
    drawRect: timelineDefinitionIT6M3QCIValue20,
    drawCircle: timelineDefinitionIT6M3QCIValue22,
    drawSection: timelineDefinitionIT6M3QCIValue25,
    drawText: timelineDefinitionIT6M3QCIValue23,
    drawLabel: timelineDefinitionIT6M3QCIValue24,
    drawTask: timelineDefinitionIT6M3QCIValue27,
    drawBackgroundRect: timelineDefinitionIT6M3QCIValue28,
    getTextObj: timelineDefinitionIT6M3QCIValue29,
    getNoteRect: timelineDefinitionIT6M3QCIValue30,
    initGraphics: timelineDefinitionIT6M3QCIValue32,
    drawNode: timelineDefinitionIT6M3QCIValue33,
    getVirtualNodeHeight: timelineDefinitionIT6M3QCIValue34,
  },
  timelineDefinitionIT6M3QCIValue37 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam2,
    timelineDefinitionIT6M3QCIParam3,
    timelineDefinitionIT6M3QCIParam4,
    timelineDefinitionIT6M3QCIParam5,
  ) {
    let timelineDefinitionIT6M3QCIValue80 = _chunkABZYJK2DL(),
      timelineDefinitionIT6M3QCIValue81 =
        timelineDefinitionIT6M3QCIValue80.timeline?.leftMargin ?? 50;
    chunkAGHRB4JFR.debug("timeline", timelineDefinitionIT6M3QCIParam5.db);
    let timelineDefinitionIT6M3QCIValue82 =
        timelineDefinitionIT6M3QCIValue80.securityLevel,
      timelineDefinitionIT6M3QCIValue83;
    timelineDefinitionIT6M3QCIValue82 === "sandbox" &&
      (timelineDefinitionIT6M3QCIValue83 = Src(
        "#i" + timelineDefinitionIT6M3QCIParam3,
      ));
    let timelineDefinitionIT6M3QCIValue84 = Src(
      timelineDefinitionIT6M3QCIValue82 === "sandbox"
        ? timelineDefinitionIT6M3QCIValue83.nodes()[0].contentDocument.body
        : "body",
    ).select("#" + timelineDefinitionIT6M3QCIParam3);
    timelineDefinitionIT6M3QCIValue84.append("g");
    let timelineDefinitionIT6M3QCIValue85 =
        timelineDefinitionIT6M3QCIParam5.db.getTasks(),
      timelineDefinitionIT6M3QCIValue86 = timelineDefinitionIT6M3QCIParam5.db
        .getCommonDb()
        .getDiagramTitle();
    chunkAGHRB4JFR.debug("task", timelineDefinitionIT6M3QCIValue85);
    timelineDefinitionIT6M3QCIValue36.initGraphics(
      timelineDefinitionIT6M3QCIValue84,
    );
    let timelineDefinitionIT6M3QCIValue87 =
      timelineDefinitionIT6M3QCIParam5.db.getSections();
    chunkAGHRB4JFR.debug("sections", timelineDefinitionIT6M3QCIValue87);
    let timelineDefinitionIT6M3QCIValue88 = 0,
      timelineDefinitionIT6M3QCIValue89 = 0,
      timelineDefinitionIT6M3QCIValue90 = 0,
      timelineDefinitionIT6M3QCIValue91 = 0,
      timelineDefinitionIT6M3QCIValue92 =
        50 + timelineDefinitionIT6M3QCIValue81,
      timelineDefinitionIT6M3QCIValue93 = 50;
    timelineDefinitionIT6M3QCIValue91 = 50;
    let timelineDefinitionIT6M3QCIValue94 = 0,
      timelineDefinitionIT6M3QCIValue95 = true;
    timelineDefinitionIT6M3QCIValue87.forEach(function (item) {
      let timelineDefinitionIT6M3QCIValue179 = {
          number: timelineDefinitionIT6M3QCIValue94,
          descr: item,
          section: timelineDefinitionIT6M3QCIValue94,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionIT6M3QCIValue88,
        },
        timelineDefinitionIT6M3QCIValue180 =
          timelineDefinitionIT6M3QCIValue36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIValue84,
            timelineDefinitionIT6M3QCIValue179,
            timelineDefinitionIT6M3QCIValue80,
          );
      chunkAGHRB4JFR.debug(
        "sectionHeight before draw",
        timelineDefinitionIT6M3QCIValue180,
      );
      timelineDefinitionIT6M3QCIValue88 = Math.max(
        timelineDefinitionIT6M3QCIValue88,
        timelineDefinitionIT6M3QCIValue180 + 20,
      );
    });
    let timelineDefinitionIT6M3QCIValue96 = 0,
      timelineDefinitionIT6M3QCIValue97 = 0;
    chunkAGHRB4JFR.debug(
      "tasks.length",
      timelineDefinitionIT6M3QCIValue85.length,
    );
    for (let [
      timelineDefinitionIT6M3QCIValue141,
      timelineDefinitionIT6M3QCIValue142,
    ] of timelineDefinitionIT6M3QCIValue85.entries()) {
      let timelineDefinitionIT6M3QCIValue145 = {
          number: timelineDefinitionIT6M3QCIValue141,
          descr: timelineDefinitionIT6M3QCIValue142,
          section: timelineDefinitionIT6M3QCIValue142.section,
          width: 150,
          padding: 20,
          maxHeight: timelineDefinitionIT6M3QCIValue89,
        },
        timelineDefinitionIT6M3QCIValue146 =
          timelineDefinitionIT6M3QCIValue36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIValue84,
            timelineDefinitionIT6M3QCIValue145,
            timelineDefinitionIT6M3QCIValue80,
          );
      chunkAGHRB4JFR.debug(
        "taskHeight before draw",
        timelineDefinitionIT6M3QCIValue146,
      );
      timelineDefinitionIT6M3QCIValue89 = Math.max(
        timelineDefinitionIT6M3QCIValue89,
        timelineDefinitionIT6M3QCIValue146 + 20,
      );
      timelineDefinitionIT6M3QCIValue96 = Math.max(
        timelineDefinitionIT6M3QCIValue96,
        timelineDefinitionIT6M3QCIValue142.events.length,
      );
      let timelineDefinitionIT6M3QCIValue147 = 0;
      for (let timelineDefinitionIT6M3QCIValue182 of timelineDefinitionIT6M3QCIValue142.events) {
        let timelineDefinitionIT6M3QCIValue187 = {
          descr: timelineDefinitionIT6M3QCIValue182,
          section: timelineDefinitionIT6M3QCIValue142.section,
          number: timelineDefinitionIT6M3QCIValue142.section,
          width: 150,
          padding: 20,
          maxHeight: 50,
        };
        timelineDefinitionIT6M3QCIValue147 +=
          timelineDefinitionIT6M3QCIValue36.getVirtualNodeHeight(
            timelineDefinitionIT6M3QCIValue84,
            timelineDefinitionIT6M3QCIValue187,
            timelineDefinitionIT6M3QCIValue80,
          );
      }
      timelineDefinitionIT6M3QCIValue142.events.length > 0 &&
        (timelineDefinitionIT6M3QCIValue147 +=
          (timelineDefinitionIT6M3QCIValue142.events.length - 1) * 10);
      timelineDefinitionIT6M3QCIValue97 = Math.max(
        timelineDefinitionIT6M3QCIValue97,
        timelineDefinitionIT6M3QCIValue147,
      );
    }
    chunkAGHRB4JFR.debug(
      "maxSectionHeight before draw",
      timelineDefinitionIT6M3QCIValue88,
    );
    chunkAGHRB4JFR.debug(
      "maxTaskHeight before draw",
      timelineDefinitionIT6M3QCIValue89,
    );
    timelineDefinitionIT6M3QCIValue87 &&
    timelineDefinitionIT6M3QCIValue87.length > 0
      ? timelineDefinitionIT6M3QCIValue87.forEach((item) => {
          let timelineDefinitionIT6M3QCIValue148 =
              timelineDefinitionIT6M3QCIValue85.filter(
                (_item) => _item.section === item,
              ),
            timelineDefinitionIT6M3QCIValue149 = {
              number: timelineDefinitionIT6M3QCIValue94,
              descr: item,
              section: timelineDefinitionIT6M3QCIValue94,
              width:
                200 * Math.max(timelineDefinitionIT6M3QCIValue148.length, 1) -
                50,
              padding: 20,
              maxHeight: timelineDefinitionIT6M3QCIValue88,
            };
          chunkAGHRB4JFR.debug(
            "sectionNode",
            timelineDefinitionIT6M3QCIValue149,
          );
          let timelineDefinitionIT6M3QCIValue150 =
              timelineDefinitionIT6M3QCIValue84.append("g"),
            timelineDefinitionIT6M3QCIValue151 =
              timelineDefinitionIT6M3QCIValue36.drawNode(
                timelineDefinitionIT6M3QCIValue150,
                timelineDefinitionIT6M3QCIValue149,
                timelineDefinitionIT6M3QCIValue94,
                timelineDefinitionIT6M3QCIValue80,
              );
          chunkAGHRB4JFR.debug(
            "sectionNode output",
            timelineDefinitionIT6M3QCIValue151,
          );
          timelineDefinitionIT6M3QCIValue150.attr(
            "transform",
            `translate(${timelineDefinitionIT6M3QCIValue92}, ${timelineDefinitionIT6M3QCIValue91})`,
          );
          timelineDefinitionIT6M3QCIValue93 +=
            timelineDefinitionIT6M3QCIValue88 + 50;
          timelineDefinitionIT6M3QCIValue148.length > 0 &&
            timelineDefinitionIT6M3QCIValue38(
              timelineDefinitionIT6M3QCIValue84,
              timelineDefinitionIT6M3QCIValue148,
              timelineDefinitionIT6M3QCIValue94,
              timelineDefinitionIT6M3QCIValue92,
              timelineDefinitionIT6M3QCIValue93,
              timelineDefinitionIT6M3QCIValue89,
              timelineDefinitionIT6M3QCIValue80,
              timelineDefinitionIT6M3QCIValue96,
              timelineDefinitionIT6M3QCIValue97,
              timelineDefinitionIT6M3QCIValue88,
              false,
            );
          timelineDefinitionIT6M3QCIValue92 +=
            200 * Math.max(timelineDefinitionIT6M3QCIValue148.length, 1);
          timelineDefinitionIT6M3QCIValue93 = timelineDefinitionIT6M3QCIValue91;
          timelineDefinitionIT6M3QCIValue94++;
        })
      : ((timelineDefinitionIT6M3QCIValue95 = false),
        timelineDefinitionIT6M3QCIValue38(
          timelineDefinitionIT6M3QCIValue84,
          timelineDefinitionIT6M3QCIValue85,
          timelineDefinitionIT6M3QCIValue94,
          timelineDefinitionIT6M3QCIValue92,
          timelineDefinitionIT6M3QCIValue93,
          timelineDefinitionIT6M3QCIValue89,
          timelineDefinitionIT6M3QCIValue80,
          timelineDefinitionIT6M3QCIValue96,
          timelineDefinitionIT6M3QCIValue97,
          timelineDefinitionIT6M3QCIValue88,
          true,
        ));
    let timelineDefinitionIT6M3QCIValue98 = timelineDefinitionIT6M3QCIValue84
      .node()
      .getBBox();
    chunkAGHRB4JFR.debug("bounds", timelineDefinitionIT6M3QCIValue98);
    timelineDefinitionIT6M3QCIValue86 &&
      timelineDefinitionIT6M3QCIValue84
        .append("text")
        .text(timelineDefinitionIT6M3QCIValue86)
        .attr(
          "x",
          timelineDefinitionIT6M3QCIValue98.width / 2 -
            timelineDefinitionIT6M3QCIValue81,
        )
        .attr("font-size", "4ex")
        .attr("font-weight", "bold")
        .attr("y", 20);
    timelineDefinitionIT6M3QCIValue90 = timelineDefinitionIT6M3QCIValue95
      ? timelineDefinitionIT6M3QCIValue88 +
        timelineDefinitionIT6M3QCIValue89 +
        150
      : timelineDefinitionIT6M3QCIValue89 + 100;
    timelineDefinitionIT6M3QCIValue84
      .append("g")
      .attr("class", "lineWrapper")
      .append("line")
      .attr("x1", timelineDefinitionIT6M3QCIValue81)
      .attr("y1", timelineDefinitionIT6M3QCIValue90)
      .attr(
        "x2",
        timelineDefinitionIT6M3QCIValue98.width +
          3 * timelineDefinitionIT6M3QCIValue81,
      )
      .attr("y2", timelineDefinitionIT6M3QCIValue90)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    _chunkABZYJK2DR(
      undefined,
      timelineDefinitionIT6M3QCIValue84,
      timelineDefinitionIT6M3QCIValue80.timeline?.padding ?? 50,
      timelineDefinitionIT6M3QCIValue80.timeline?.useMaxWidth ?? false,
    );
  }, "draw"),
  timelineDefinitionIT6M3QCIValue38 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam12,
    timelineDefinitionIT6M3QCIParam13,
    timelineDefinitionIT6M3QCIParam14,
    timelineDefinitionIT6M3QCIParam15,
    timelineDefinitionIT6M3QCIParam16,
    timelineDefinitionIT6M3QCIParam17,
    timelineDefinitionIT6M3QCIParam18,
    timelineDefinitionIT6M3QCIParam19,
    timelineDefinitionIT6M3QCIParam20,
    timelineDefinitionIT6M3QCIParam21,
    timelineDefinitionIT6M3QCIParam22,
  ) {
    for (let timelineDefinitionIT6M3QCIValue112 of timelineDefinitionIT6M3QCIParam13) {
      let timelineDefinitionIT6M3QCIValue119 = {
        descr: timelineDefinitionIT6M3QCIValue112.task,
        section: timelineDefinitionIT6M3QCIParam14,
        number: timelineDefinitionIT6M3QCIParam14,
        width: 150,
        padding: 20,
        maxHeight: timelineDefinitionIT6M3QCIParam17,
      };
      chunkAGHRB4JFR.debug("taskNode", timelineDefinitionIT6M3QCIValue119);
      let timelineDefinitionIT6M3QCIValue120 = timelineDefinitionIT6M3QCIParam12
          .append("g")
          .attr("class", "taskWrapper"),
        timelineDefinitionIT6M3QCIValue121 =
          timelineDefinitionIT6M3QCIValue36.drawNode(
            timelineDefinitionIT6M3QCIValue120,
            timelineDefinitionIT6M3QCIValue119,
            timelineDefinitionIT6M3QCIParam14,
            timelineDefinitionIT6M3QCIParam18,
          ).height;
      if (
        (chunkAGHRB4JFR.debug(
          "taskHeight after draw",
          timelineDefinitionIT6M3QCIValue121,
        ),
        timelineDefinitionIT6M3QCIValue120.attr(
          "transform",
          `translate(${timelineDefinitionIT6M3QCIParam15}, ${timelineDefinitionIT6M3QCIParam16})`,
        ),
        (timelineDefinitionIT6M3QCIParam17 = Math.max(
          timelineDefinitionIT6M3QCIParam17,
          timelineDefinitionIT6M3QCIValue121,
        )),
        timelineDefinitionIT6M3QCIValue112.events)
      ) {
        let timelineDefinitionIT6M3QCIValue158 =
            timelineDefinitionIT6M3QCIParam12
              .append("g")
              .attr("class", "lineWrapper"),
          timelineDefinitionIT6M3QCIValue159 =
            timelineDefinitionIT6M3QCIParam17;
        timelineDefinitionIT6M3QCIParam16 += 100;
        timelineDefinitionIT6M3QCIValue159 += timelineDefinitionIT6M3QCIValue39(
          timelineDefinitionIT6M3QCIParam12,
          timelineDefinitionIT6M3QCIValue112.events,
          timelineDefinitionIT6M3QCIParam14,
          timelineDefinitionIT6M3QCIParam15,
          timelineDefinitionIT6M3QCIParam16,
          timelineDefinitionIT6M3QCIParam18,
        );
        timelineDefinitionIT6M3QCIParam16 -= 100;
        timelineDefinitionIT6M3QCIValue158
          .append("line")
          .attr("x1", timelineDefinitionIT6M3QCIParam15 + 95)
          .attr(
            "y1",
            timelineDefinitionIT6M3QCIParam16 +
              timelineDefinitionIT6M3QCIParam17,
          )
          .attr("x2", timelineDefinitionIT6M3QCIParam15 + 95)
          .attr(
            "y2",
            timelineDefinitionIT6M3QCIParam16 +
              timelineDefinitionIT6M3QCIParam17 +
              100 +
              timelineDefinitionIT6M3QCIParam20 +
              100,
          )
          .attr("stroke-width", 2)
          .attr("stroke", "black")
          .attr("marker-end", "url(#arrowhead)")
          .attr("stroke-dasharray", "5,5");
      }
      timelineDefinitionIT6M3QCIParam15 += 200;
      timelineDefinitionIT6M3QCIParam22 &&
        !timelineDefinitionIT6M3QCIParam18.timeline?.disableMulticolor &&
        timelineDefinitionIT6M3QCIParam14++;
    }
    timelineDefinitionIT6M3QCIParam16 -= 10;
  }, "drawTasks"),
  timelineDefinitionIT6M3QCIValue39 = chunkAGHRB4JFN(function (
    timelineDefinitionIT6M3QCIParam69,
    timelineDefinitionIT6M3QCIParam70,
    timelineDefinitionIT6M3QCIParam71,
    timelineDefinitionIT6M3QCIParam72,
    timelineDefinitionIT6M3QCIParam73,
    timelineDefinitionIT6M3QCIParam74,
  ) {
    let timelineDefinitionIT6M3QCIValue160 = 0,
      timelineDefinitionIT6M3QCIValue161 = timelineDefinitionIT6M3QCIParam73;
    timelineDefinitionIT6M3QCIParam73 += 100;
    for (let timelineDefinitionIT6M3QCIValue172 of timelineDefinitionIT6M3QCIParam70) {
      let timelineDefinitionIT6M3QCIValue173 = {
        descr: timelineDefinitionIT6M3QCIValue172,
        section: timelineDefinitionIT6M3QCIParam71,
        number: timelineDefinitionIT6M3QCIParam71,
        width: 150,
        padding: 20,
        maxHeight: 50,
      };
      chunkAGHRB4JFR.debug("eventNode", timelineDefinitionIT6M3QCIValue173);
      let timelineDefinitionIT6M3QCIValue174 = timelineDefinitionIT6M3QCIParam69
          .append("g")
          .attr("class", "eventWrapper"),
        timelineDefinitionIT6M3QCIValue175 =
          timelineDefinitionIT6M3QCIValue36.drawNode(
            timelineDefinitionIT6M3QCIValue174,
            timelineDefinitionIT6M3QCIValue173,
            timelineDefinitionIT6M3QCIParam71,
            timelineDefinitionIT6M3QCIParam74,
          ).height;
      timelineDefinitionIT6M3QCIValue160 += timelineDefinitionIT6M3QCIValue175;
      timelineDefinitionIT6M3QCIValue174.attr(
        "transform",
        `translate(${timelineDefinitionIT6M3QCIParam72}, ${timelineDefinitionIT6M3QCIParam73})`,
      );
      timelineDefinitionIT6M3QCIParam73 =
        timelineDefinitionIT6M3QCIParam73 +
        10 +
        timelineDefinitionIT6M3QCIValue175;
    }
    return (
      (timelineDefinitionIT6M3QCIParam73 = timelineDefinitionIT6M3QCIValue161),
      timelineDefinitionIT6M3QCIValue160
    );
  }, "drawEvents"),
  timelineDefinitionIT6M3QCIValue40 = {
    setConf: chunkAGHRB4JFN(() => {}, "setConf"),
    draw: timelineDefinitionIT6M3QCIValue37,
  },
  $ = chunkAGHRB4JFN((timelineDefinitionIT6M3QCIParam10) => {
    let timelineDefinitionIT6M3QCIValue105 = "";
    for (
      let timelineDefinitionIT6M3QCIValue178 = 0;
      timelineDefinitionIT6M3QCIValue178 <
      timelineDefinitionIT6M3QCIParam10.THEME_COLOR_LIMIT;
      timelineDefinitionIT6M3QCIValue178++
    ) {
      timelineDefinitionIT6M3QCIParam10[
        "lineColor" + timelineDefinitionIT6M3QCIValue178
      ] =
        timelineDefinitionIT6M3QCIParam10[
          "lineColor" + timelineDefinitionIT6M3QCIValue178
        ] ||
        timelineDefinitionIT6M3QCIParam10[
          "cScaleInv" + timelineDefinitionIT6M3QCIValue178
        ];
      invertO(
        timelineDefinitionIT6M3QCIParam10[
          "lineColor" + timelineDefinitionIT6M3QCIValue178
        ],
      )
        ? (timelineDefinitionIT6M3QCIParam10[
            "lineColor" + timelineDefinitionIT6M3QCIValue178
          ] = invertI(
            timelineDefinitionIT6M3QCIParam10[
              "lineColor" + timelineDefinitionIT6M3QCIValue178
            ],
            20,
          ))
        : (timelineDefinitionIT6M3QCIParam10[
            "lineColor" + timelineDefinitionIT6M3QCIValue178
          ] = invertR(
            timelineDefinitionIT6M3QCIParam10[
              "lineColor" + timelineDefinitionIT6M3QCIValue178
            ],
            20,
          ));
    }
    for (
      let timelineDefinitionIT6M3QCIValue106 = 0;
      timelineDefinitionIT6M3QCIValue106 <
      timelineDefinitionIT6M3QCIParam10.THEME_COLOR_LIMIT;
      timelineDefinitionIT6M3QCIValue106++
    ) {
      let timelineDefinitionIT6M3QCIValue107 =
        "" + (17 - 3 * timelineDefinitionIT6M3QCIValue106);
      timelineDefinitionIT6M3QCIValue105 += `
    .section-${timelineDefinitionIT6M3QCIValue106 - 1} rect, .section-${timelineDefinitionIT6M3QCIValue106 - 1} path, .section-${timelineDefinitionIT6M3QCIValue106 - 1} circle, .section-${timelineDefinitionIT6M3QCIValue106 - 1} path  {
      fill: ${timelineDefinitionIT6M3QCIParam10["cScale" + timelineDefinitionIT6M3QCIValue106]};
    }
    .section-${timelineDefinitionIT6M3QCIValue106 - 1} text {
     fill: ${timelineDefinitionIT6M3QCIParam10["cScaleLabel" + timelineDefinitionIT6M3QCIValue106]};
    }
    .node-icon-${timelineDefinitionIT6M3QCIValue106 - 1} {
      font-size: 40px;
      color: ${timelineDefinitionIT6M3QCIParam10["cScaleLabel" + timelineDefinitionIT6M3QCIValue106]};
    }
    .section-edge-${timelineDefinitionIT6M3QCIValue106 - 1}{
      stroke: ${timelineDefinitionIT6M3QCIParam10["cScale" + timelineDefinitionIT6M3QCIValue106]};
    }
    .edge-depth-${timelineDefinitionIT6M3QCIValue106 - 1}{
      stroke-width: ${timelineDefinitionIT6M3QCIValue107};
    }
    .section-${timelineDefinitionIT6M3QCIValue106 - 1} line {
      stroke: ${timelineDefinitionIT6M3QCIParam10["cScaleInv" + timelineDefinitionIT6M3QCIValue106]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${timelineDefinitionIT6M3QCIParam10["cScaleLabel" + timelineDefinitionIT6M3QCIValue106]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return timelineDefinitionIT6M3QCIValue105;
  }, "genSections");
export const timelineDefinitionIT6M3QCI = {
  db: timelineDefinitionIT6M3QCIValue3,
  renderer: timelineDefinitionIT6M3QCIValue40,
  parser: timelineDefinitionIT6M3QCIValue2,
  styles: chunkAGHRB4JFN(
    (timelineDefinitionIT6M3QCIParam60) => `
  .edge {
    stroke-width: 3;
  }
  ${$(timelineDefinitionIT6M3QCIParam60)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${timelineDefinitionIT6M3QCIParam60.git0};
  }
  .section-root text {
    fill: ${timelineDefinitionIT6M3QCIParam60.gitBranchLabel0};
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
`,
    "getStyles",
  ),
};
