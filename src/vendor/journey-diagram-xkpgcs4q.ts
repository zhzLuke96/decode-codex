// Restored from ref/webview/assets/journeyDiagram-XKPGCS4Q-BcfnIZ-y.js
// Flat boundary. Vendored journeyDiagramXKPGCS4Q chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { arc } from "./d3-shape-arc";
import { chunkAGHRB4JFN } from "./dompurify";
import {
  chunkABZYJK2DN as _chunkABZYJK2DB,
  chunkABZYJK2DF as _chunkABZYJK2DC,
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  _chunkABZYJK2DC as chunkABZYJK2DU,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { chunkFMBD7UC4 } from "../utils/chunk-fmbd7-uc4-dbbz-vn-va";
import {
  chunkTZMSLE5BT as chunkTZMSLE5BA,
  chunkTZMSLE5BS,
  chunkTZMSLE5BO,
  chunkTZMSLE5BI,
} from "./chunk-tzmsle5b";
var journeyDiagramXKPGCS4QValue1 = (function () {
  var journeyDiagramXKPGCS4QValue38 = chunkAGHRB4JFN(function (
      journeyDiagramXKPGCS4QParam93,
      journeyDiagramXKPGCS4QParam94,
      journeyDiagramXKPGCS4QParam95,
      journeyDiagramXKPGCS4QParam96,
    ) {
      for (
        journeyDiagramXKPGCS4QParam95 ||= {},
          journeyDiagramXKPGCS4QParam96 = journeyDiagramXKPGCS4QParam93.length;
        journeyDiagramXKPGCS4QParam96--;
        journeyDiagramXKPGCS4QParam95[
          journeyDiagramXKPGCS4QParam93[journeyDiagramXKPGCS4QParam96]
        ] = journeyDiagramXKPGCS4QParam94
      );
      return journeyDiagramXKPGCS4QParam95;
    }, "o"),
    journeyDiagramXKPGCS4QValue39 = [6, 8, 10, 11, 12, 14, 16, 17, 18],
    journeyDiagramXKPGCS4QValue40 = [1, 9],
    journeyDiagramXKPGCS4QValue41 = [1, 10],
    journeyDiagramXKPGCS4QValue42 = [1, 11],
    journeyDiagramXKPGCS4QValue43 = [1, 12],
    journeyDiagramXKPGCS4QValue44 = [1, 13],
    journeyDiagramXKPGCS4QValue45 = [1, 14],
    journeyDiagramXKPGCS4QValue46 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        journey: 4,
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
        taskName: 18,
        taskData: 19,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        4: "journey",
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
        18: "taskName",
        19: "taskData",
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
        [9, 2],
      ],
      performAction: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam28,
        journeyDiagramXKPGCS4QParam29,
        journeyDiagramXKPGCS4QParam30,
        journeyDiagramXKPGCS4QParam31,
        journeyDiagramXKPGCS4QParam32,
        journeyDiagramXKPGCS4QParam33,
        journeyDiagramXKPGCS4QParam34,
      ) {
        var journeyDiagramXKPGCS4QValue132 =
          journeyDiagramXKPGCS4QParam33.length - 1;
        switch (journeyDiagramXKPGCS4QParam32) {
          case 1:
            return journeyDiagramXKPGCS4QParam33[
              journeyDiagramXKPGCS4QValue132 - 1
            ];
          case 2:
            this.$ = [];
            break;
          case 3:
            journeyDiagramXKPGCS4QParam33[
              journeyDiagramXKPGCS4QValue132 - 1
            ].push(
              journeyDiagramXKPGCS4QParam33[journeyDiagramXKPGCS4QValue132],
            );
            this.$ =
              journeyDiagramXKPGCS4QParam33[journeyDiagramXKPGCS4QValue132 - 1];
            break;
          case 4:
          case 5:
            this.$ =
              journeyDiagramXKPGCS4QParam33[journeyDiagramXKPGCS4QValue132];
            break;
          case 6:
          case 7:
            this.$ = [];
            break;
          case 8:
            journeyDiagramXKPGCS4QParam31.setDiagramTitle(
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].substr(6),
            );
            this.$ =
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].substr(6);
            break;
          case 9:
            this.$ =
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].trim();
            journeyDiagramXKPGCS4QParam31.setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ =
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].trim();
            journeyDiagramXKPGCS4QParam31.setAccDescription(this.$);
            break;
          case 12:
            journeyDiagramXKPGCS4QParam31.addSection(
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].substr(8),
            );
            this.$ =
              journeyDiagramXKPGCS4QParam33[
                journeyDiagramXKPGCS4QValue132
              ].substr(8);
            break;
          case 13:
            journeyDiagramXKPGCS4QParam31.addTask(
              journeyDiagramXKPGCS4QParam33[journeyDiagramXKPGCS4QValue132 - 1],
              journeyDiagramXKPGCS4QParam33[journeyDiagramXKPGCS4QValue132],
            );
            this.$ = "task";
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
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 2], {
          5: 3,
        }),
        {
          6: [1, 4],
          7: 5,
          8: [1, 6],
          9: 7,
          10: [1, 8],
          11: journeyDiagramXKPGCS4QValue40,
          12: journeyDiagramXKPGCS4QValue41,
          14: journeyDiagramXKPGCS4QValue42,
          16: journeyDiagramXKPGCS4QValue43,
          17: journeyDiagramXKPGCS4QValue44,
          18: journeyDiagramXKPGCS4QValue45,
        },
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 7], {
          1: [2, 1],
        }),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 3]),
        {
          9: 15,
          11: journeyDiagramXKPGCS4QValue40,
          12: journeyDiagramXKPGCS4QValue41,
          14: journeyDiagramXKPGCS4QValue42,
          16: journeyDiagramXKPGCS4QValue43,
          17: journeyDiagramXKPGCS4QValue44,
          18: journeyDiagramXKPGCS4QValue45,
        },
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 5]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 6]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 8]),
        {
          13: [1, 16],
        },
        {
          15: [1, 17],
        },
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 11]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 12]),
        {
          19: [1, 18],
        },
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 4]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 9]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 10]),
        journeyDiagramXKPGCS4QValue38(journeyDiagramXKPGCS4QValue39, [2, 13]),
      ],
      defaultActions: {},
      parseError: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam86,
        journeyDiagramXKPGCS4QParam87,
      ) {
        if (journeyDiagramXKPGCS4QParam87.recoverable)
          this.trace(journeyDiagramXKPGCS4QParam86);
        else {
          var journeyDiagramXKPGCS4QValue176 = Error(
            journeyDiagramXKPGCS4QParam86,
          );
          throw (
            (journeyDiagramXKPGCS4QValue176.hash =
              journeyDiagramXKPGCS4QParam87),
            journeyDiagramXKPGCS4QValue176
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam2) {
        var journeyDiagramXKPGCS4QValue47 = this,
          journeyDiagramXKPGCS4QValue48 = [0],
          journeyDiagramXKPGCS4QValue49 = [],
          journeyDiagramXKPGCS4QValue50 = [null],
          journeyDiagramXKPGCS4QValue51 = [],
          journeyDiagramXKPGCS4QValue52 = this.table,
          journeyDiagramXKPGCS4QValue53 = "",
          journeyDiagramXKPGCS4QValue54 = 0,
          journeyDiagramXKPGCS4QValue55 = 0,
          journeyDiagramXKPGCS4QValue56 = 0,
          journeyDiagramXKPGCS4QValue59 =
            journeyDiagramXKPGCS4QValue51.slice.call(arguments, 1),
          journeyDiagramXKPGCS4QValue60 = Object.create(this.lexer),
          journeyDiagramXKPGCS4QValue61 = {
            yy: {},
          };
        for (var journeyDiagramXKPGCS4QValue62 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            journeyDiagramXKPGCS4QValue62,
          ) &&
            (journeyDiagramXKPGCS4QValue61.yy[journeyDiagramXKPGCS4QValue62] =
              this.yy[journeyDiagramXKPGCS4QValue62]);
        journeyDiagramXKPGCS4QValue60.setInput(
          journeyDiagramXKPGCS4QParam2,
          journeyDiagramXKPGCS4QValue61.yy,
        );
        journeyDiagramXKPGCS4QValue61.yy.lexer = journeyDiagramXKPGCS4QValue60;
        journeyDiagramXKPGCS4QValue61.yy.parser = this;
        journeyDiagramXKPGCS4QValue60.yylloc === undefined &&
          (journeyDiagramXKPGCS4QValue60.yylloc = {});
        var journeyDiagramXKPGCS4QValue63 =
          journeyDiagramXKPGCS4QValue60.yylloc;
        journeyDiagramXKPGCS4QValue51.push(journeyDiagramXKPGCS4QValue63);
        var journeyDiagramXKPGCS4QValue64 =
          journeyDiagramXKPGCS4QValue60.options &&
          journeyDiagramXKPGCS4QValue60.options.ranges;
        typeof journeyDiagramXKPGCS4QValue61.yy.parseError == "function"
          ? (this.parseError = journeyDiagramXKPGCS4QValue61.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function journeyDiagramXKPGCS4QHelper3(journeyDiagramXKPGCS4QParam104) {
          journeyDiagramXKPGCS4QValue48.length -=
            2 * journeyDiagramXKPGCS4QParam104;
          journeyDiagramXKPGCS4QValue50.length -=
            journeyDiagramXKPGCS4QParam104;
          journeyDiagramXKPGCS4QValue51.length -=
            journeyDiagramXKPGCS4QParam104;
        }
        chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper3, "popStack");
        function journeyDiagramXKPGCS4QHelper4() {
          var journeyDiagramXKPGCS4QValue169 =
            journeyDiagramXKPGCS4QValue49.pop() ||
            journeyDiagramXKPGCS4QValue60.lex() ||
            1;
          return (
            typeof journeyDiagramXKPGCS4QValue169 != "number" &&
              (journeyDiagramXKPGCS4QValue169 instanceof Array &&
                ((journeyDiagramXKPGCS4QValue49 =
                  journeyDiagramXKPGCS4QValue169),
                (journeyDiagramXKPGCS4QValue169 =
                  journeyDiagramXKPGCS4QValue49.pop())),
              (journeyDiagramXKPGCS4QValue169 =
                journeyDiagramXKPGCS4QValue47.symbols_[
                  journeyDiagramXKPGCS4QValue169
                ] || journeyDiagramXKPGCS4QValue169)),
            journeyDiagramXKPGCS4QValue169
          );
        }
        chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper4, "lex");
        for (
          var journeyDiagramXKPGCS4QValue65,
            journeyDiagramXKPGCS4QValue66,
            journeyDiagramXKPGCS4QValue67,
            journeyDiagramXKPGCS4QValue68,
            journeyDiagramXKPGCS4QValue69,
            journeyDiagramXKPGCS4QValue70 = {},
            journeyDiagramXKPGCS4QValue71,
            journeyDiagramXKPGCS4QValue72,
            journeyDiagramXKPGCS4QValue73,
            journeyDiagramXKPGCS4QValue74;
          ;

        ) {
          if (
            ((journeyDiagramXKPGCS4QValue67 =
              journeyDiagramXKPGCS4QValue48[
                journeyDiagramXKPGCS4QValue48.length - 1
              ]),
            this.defaultActions[journeyDiagramXKPGCS4QValue67]
              ? (journeyDiagramXKPGCS4QValue68 =
                  this.defaultActions[journeyDiagramXKPGCS4QValue67])
              : ((journeyDiagramXKPGCS4QValue65 ??=
                  journeyDiagramXKPGCS4QHelper4()),
                (journeyDiagramXKPGCS4QValue68 =
                  journeyDiagramXKPGCS4QValue52[
                    journeyDiagramXKPGCS4QValue67
                  ] &&
                  journeyDiagramXKPGCS4QValue52[journeyDiagramXKPGCS4QValue67][
                    journeyDiagramXKPGCS4QValue65
                  ])),
            journeyDiagramXKPGCS4QValue68 === undefined ||
              !journeyDiagramXKPGCS4QValue68.length ||
              !journeyDiagramXKPGCS4QValue68[0])
          ) {
            var journeyDiagramXKPGCS4QValue75 = "";
            for (journeyDiagramXKPGCS4QValue71 in ((journeyDiagramXKPGCS4QValue74 =
              []),
            journeyDiagramXKPGCS4QValue52[journeyDiagramXKPGCS4QValue67]))
              this.terminals_[journeyDiagramXKPGCS4QValue71] &&
                journeyDiagramXKPGCS4QValue71 > 2 &&
                journeyDiagramXKPGCS4QValue74.push(
                  "'" + this.terminals_[journeyDiagramXKPGCS4QValue71] + "'",
                );
            journeyDiagramXKPGCS4QValue75 =
              journeyDiagramXKPGCS4QValue60.showPosition
                ? "Parse error on line " +
                  (journeyDiagramXKPGCS4QValue54 + 1) +
                  ":\n" +
                  journeyDiagramXKPGCS4QValue60.showPosition() +
                  "\nExpecting " +
                  journeyDiagramXKPGCS4QValue74.join(", ") +
                  ", got '" +
                  (this.terminals_[journeyDiagramXKPGCS4QValue65] ||
                    journeyDiagramXKPGCS4QValue65) +
                  "'"
                : "Parse error on line " +
                  (journeyDiagramXKPGCS4QValue54 + 1) +
                  ": Unexpected " +
                  (journeyDiagramXKPGCS4QValue65 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[journeyDiagramXKPGCS4QValue65] ||
                        journeyDiagramXKPGCS4QValue65) +
                      "'");
            this.parseError(journeyDiagramXKPGCS4QValue75, {
              text: journeyDiagramXKPGCS4QValue60.match,
              token:
                this.terminals_[journeyDiagramXKPGCS4QValue65] ||
                journeyDiagramXKPGCS4QValue65,
              line: journeyDiagramXKPGCS4QValue60.yylineno,
              loc: journeyDiagramXKPGCS4QValue63,
              expected: journeyDiagramXKPGCS4QValue74,
            });
          }
          if (
            journeyDiagramXKPGCS4QValue68[0] instanceof Array &&
            journeyDiagramXKPGCS4QValue68.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                journeyDiagramXKPGCS4QValue67 +
                ", token: " +
                journeyDiagramXKPGCS4QValue65,
            );
          switch (journeyDiagramXKPGCS4QValue68[0]) {
            case 1:
              journeyDiagramXKPGCS4QValue48.push(journeyDiagramXKPGCS4QValue65);
              journeyDiagramXKPGCS4QValue50.push(
                journeyDiagramXKPGCS4QValue60.yytext,
              );
              journeyDiagramXKPGCS4QValue51.push(
                journeyDiagramXKPGCS4QValue60.yylloc,
              );
              journeyDiagramXKPGCS4QValue48.push(
                journeyDiagramXKPGCS4QValue68[1],
              );
              journeyDiagramXKPGCS4QValue65 = null;
              journeyDiagramXKPGCS4QValue66
                ? ((journeyDiagramXKPGCS4QValue65 =
                    journeyDiagramXKPGCS4QValue66),
                  (journeyDiagramXKPGCS4QValue66 = null))
                : ((journeyDiagramXKPGCS4QValue55 =
                    journeyDiagramXKPGCS4QValue60.yyleng),
                  (journeyDiagramXKPGCS4QValue53 =
                    journeyDiagramXKPGCS4QValue60.yytext),
                  (journeyDiagramXKPGCS4QValue54 =
                    journeyDiagramXKPGCS4QValue60.yylineno),
                  (journeyDiagramXKPGCS4QValue63 =
                    journeyDiagramXKPGCS4QValue60.yylloc),
                  journeyDiagramXKPGCS4QValue56 > 0 &&
                    journeyDiagramXKPGCS4QValue56--);
              break;
            case 2:
              if (
                ((journeyDiagramXKPGCS4QValue72 =
                  this.productions_[journeyDiagramXKPGCS4QValue68[1]][1]),
                (journeyDiagramXKPGCS4QValue70.$ =
                  journeyDiagramXKPGCS4QValue50[
                    journeyDiagramXKPGCS4QValue50.length -
                      journeyDiagramXKPGCS4QValue72
                  ]),
                (journeyDiagramXKPGCS4QValue70._$ = {
                  first_line:
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length -
                        (journeyDiagramXKPGCS4QValue72 || 1)
                    ].first_line,
                  last_line:
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length - 1
                    ].last_line,
                  first_column:
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length -
                        (journeyDiagramXKPGCS4QValue72 || 1)
                    ].first_column,
                  last_column:
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length - 1
                    ].last_column,
                }),
                journeyDiagramXKPGCS4QValue64 &&
                  (journeyDiagramXKPGCS4QValue70._$.range = [
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length -
                        (journeyDiagramXKPGCS4QValue72 || 1)
                    ].range[0],
                    journeyDiagramXKPGCS4QValue51[
                      journeyDiagramXKPGCS4QValue51.length - 1
                    ].range[1],
                  ]),
                (journeyDiagramXKPGCS4QValue69 = this.performAction.apply(
                  journeyDiagramXKPGCS4QValue70,
                  [
                    journeyDiagramXKPGCS4QValue53,
                    journeyDiagramXKPGCS4QValue55,
                    journeyDiagramXKPGCS4QValue54,
                    journeyDiagramXKPGCS4QValue61.yy,
                    journeyDiagramXKPGCS4QValue68[1],
                    journeyDiagramXKPGCS4QValue50,
                    journeyDiagramXKPGCS4QValue51,
                  ].concat(journeyDiagramXKPGCS4QValue59),
                )),
                journeyDiagramXKPGCS4QValue69 !== undefined)
              )
                return journeyDiagramXKPGCS4QValue69;
              journeyDiagramXKPGCS4QValue72 &&
                ((journeyDiagramXKPGCS4QValue48 =
                  journeyDiagramXKPGCS4QValue48.slice(
                    0,
                    -1 * journeyDiagramXKPGCS4QValue72 * 2,
                  )),
                (journeyDiagramXKPGCS4QValue50 =
                  journeyDiagramXKPGCS4QValue50.slice(
                    0,
                    -1 * journeyDiagramXKPGCS4QValue72,
                  )),
                (journeyDiagramXKPGCS4QValue51 =
                  journeyDiagramXKPGCS4QValue51.slice(
                    0,
                    -1 * journeyDiagramXKPGCS4QValue72,
                  )));
              journeyDiagramXKPGCS4QValue48.push(
                this.productions_[journeyDiagramXKPGCS4QValue68[1]][0],
              );
              journeyDiagramXKPGCS4QValue50.push(
                journeyDiagramXKPGCS4QValue70.$,
              );
              journeyDiagramXKPGCS4QValue51.push(
                journeyDiagramXKPGCS4QValue70._$,
              );
              journeyDiagramXKPGCS4QValue73 =
                journeyDiagramXKPGCS4QValue52[
                  journeyDiagramXKPGCS4QValue48[
                    journeyDiagramXKPGCS4QValue48.length - 2
                  ]
                ][
                  journeyDiagramXKPGCS4QValue48[
                    journeyDiagramXKPGCS4QValue48.length - 1
                  ]
                ];
              journeyDiagramXKPGCS4QValue48.push(journeyDiagramXKPGCS4QValue73);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  journeyDiagramXKPGCS4QValue46.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam88,
        journeyDiagramXKPGCS4QParam89,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            journeyDiagramXKPGCS4QParam88,
            journeyDiagramXKPGCS4QParam89,
          );
        else throw Error(journeyDiagramXKPGCS4QParam88);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam53,
        journeyDiagramXKPGCS4QParam54,
      ) {
        return (
          (this.yy = journeyDiagramXKPGCS4QParam54 || this.yy || {}),
          (this._input = journeyDiagramXKPGCS4QParam53),
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
        var journeyDiagramXKPGCS4QValue145 = this._input[0];
        return (
          (this.yytext += journeyDiagramXKPGCS4QValue145),
          this.yyleng++,
          this.offset++,
          (this.match += journeyDiagramXKPGCS4QValue145),
          (this.matched += journeyDiagramXKPGCS4QValue145),
          journeyDiagramXKPGCS4QValue145.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          journeyDiagramXKPGCS4QValue145
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam12) {
        var journeyDiagramXKPGCS4QValue106 =
            journeyDiagramXKPGCS4QParam12.length,
          journeyDiagramXKPGCS4QValue107 =
            journeyDiagramXKPGCS4QParam12.split(/(?:\r\n?|\n)/g);
        this._input = journeyDiagramXKPGCS4QParam12 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - journeyDiagramXKPGCS4QValue106,
        );
        this.offset -= journeyDiagramXKPGCS4QValue106;
        var journeyDiagramXKPGCS4QValue108 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        journeyDiagramXKPGCS4QValue107.length - 1 &&
          (this.yylineno -= journeyDiagramXKPGCS4QValue107.length - 1);
        var journeyDiagramXKPGCS4QValue109 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: journeyDiagramXKPGCS4QValue107
              ? (journeyDiagramXKPGCS4QValue107.length ===
                journeyDiagramXKPGCS4QValue108.length
                  ? this.yylloc.first_column
                  : 0) +
                journeyDiagramXKPGCS4QValue108[
                  journeyDiagramXKPGCS4QValue108.length -
                    journeyDiagramXKPGCS4QValue107.length
                ].length -
                journeyDiagramXKPGCS4QValue107[0].length
              : this.yylloc.first_column - journeyDiagramXKPGCS4QValue106,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              journeyDiagramXKPGCS4QValue109[0],
              journeyDiagramXKPGCS4QValue109[0] +
                this.yyleng -
                journeyDiagramXKPGCS4QValue106,
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
      less: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam105) {
        this.unput(this.match.slice(journeyDiagramXKPGCS4QParam105));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var journeyDiagramXKPGCS4QValue166 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (journeyDiagramXKPGCS4QValue166.length > 20 ? "..." : "") +
          journeyDiagramXKPGCS4QValue166.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var journeyDiagramXKPGCS4QValue165 = this.match;
        return (
          journeyDiagramXKPGCS4QValue165.length < 20 &&
            (journeyDiagramXKPGCS4QValue165 += this._input.substr(
              0,
              20 - journeyDiagramXKPGCS4QValue165.length,
            )),
          (
            journeyDiagramXKPGCS4QValue165.substr(0, 20) +
            (journeyDiagramXKPGCS4QValue165.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var journeyDiagramXKPGCS4QValue173 = this.pastInput(),
          journeyDiagramXKPGCS4QValue174 = Array(
            journeyDiagramXKPGCS4QValue173.length + 1,
          ).join("-");
        return (
          journeyDiagramXKPGCS4QValue173 +
          this.upcomingInput() +
          "\n" +
          journeyDiagramXKPGCS4QValue174 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam3,
        journeyDiagramXKPGCS4QParam4,
      ) {
        var journeyDiagramXKPGCS4QValue76,
          journeyDiagramXKPGCS4QValue77,
          journeyDiagramXKPGCS4QValue78;
        if (
          (this.options.backtrack_lexer &&
            ((journeyDiagramXKPGCS4QValue78 = {
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
              (journeyDiagramXKPGCS4QValue78.yylloc.range =
                this.yylloc.range.slice(0))),
          (journeyDiagramXKPGCS4QValue77 =
            journeyDiagramXKPGCS4QParam3[0].match(/(?:\r\n?|\n).*/g)),
          journeyDiagramXKPGCS4QValue77 &&
            (this.yylineno += journeyDiagramXKPGCS4QValue77.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: journeyDiagramXKPGCS4QValue77
              ? journeyDiagramXKPGCS4QValue77[
                  journeyDiagramXKPGCS4QValue77.length - 1
                ].length -
                journeyDiagramXKPGCS4QValue77[
                  journeyDiagramXKPGCS4QValue77.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                journeyDiagramXKPGCS4QParam3[0].length,
          }),
          (this.yytext += journeyDiagramXKPGCS4QParam3[0]),
          (this.match += journeyDiagramXKPGCS4QParam3[0]),
          (this.matches = journeyDiagramXKPGCS4QParam3),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            journeyDiagramXKPGCS4QParam3[0].length,
          )),
          (this.matched += journeyDiagramXKPGCS4QParam3[0]),
          (journeyDiagramXKPGCS4QValue76 = this.performAction.call(
            this,
            this.yy,
            this,
            journeyDiagramXKPGCS4QParam4,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          journeyDiagramXKPGCS4QValue76)
        )
          return journeyDiagramXKPGCS4QValue76;
        if (this._backtrack) {
          for (var journeyDiagramXKPGCS4QValue79 in journeyDiagramXKPGCS4QValue78)
            this[journeyDiagramXKPGCS4QValue79] =
              journeyDiagramXKPGCS4QValue78[journeyDiagramXKPGCS4QValue79];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var journeyDiagramXKPGCS4QValue121,
          journeyDiagramXKPGCS4QValue122,
          journeyDiagramXKPGCS4QValue123,
          journeyDiagramXKPGCS4QValue124;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var journeyDiagramXKPGCS4QValue125 = this._currentRules(),
            journeyDiagramXKPGCS4QValue126 = 0;
          journeyDiagramXKPGCS4QValue126 <
          journeyDiagramXKPGCS4QValue125.length;
          journeyDiagramXKPGCS4QValue126++
        )
          if (
            ((journeyDiagramXKPGCS4QValue123 = this._input.match(
              this.rules[
                journeyDiagramXKPGCS4QValue125[journeyDiagramXKPGCS4QValue126]
              ],
            )),
            journeyDiagramXKPGCS4QValue123 &&
              (!journeyDiagramXKPGCS4QValue122 ||
                journeyDiagramXKPGCS4QValue123[0].length >
                  journeyDiagramXKPGCS4QValue122[0].length))
          ) {
            if (
              ((journeyDiagramXKPGCS4QValue122 =
                journeyDiagramXKPGCS4QValue123),
              (journeyDiagramXKPGCS4QValue124 = journeyDiagramXKPGCS4QValue126),
              this.options.backtrack_lexer)
            ) {
              if (
                ((journeyDiagramXKPGCS4QValue121 = this.test_match(
                  journeyDiagramXKPGCS4QValue123,
                  journeyDiagramXKPGCS4QValue125[
                    journeyDiagramXKPGCS4QValue126
                  ],
                )),
                journeyDiagramXKPGCS4QValue121 !== false)
              )
                return journeyDiagramXKPGCS4QValue121;
              if (this._backtrack) {
                journeyDiagramXKPGCS4QValue122 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return journeyDiagramXKPGCS4QValue122
          ? ((journeyDiagramXKPGCS4QValue121 = this.test_match(
              journeyDiagramXKPGCS4QValue122,
              journeyDiagramXKPGCS4QValue125[journeyDiagramXKPGCS4QValue124],
            )),
            journeyDiagramXKPGCS4QValue121 === false
              ? false
              : journeyDiagramXKPGCS4QValue121)
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
      begin: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam106) {
        this.conditionStack.push(journeyDiagramXKPGCS4QParam106);
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
      topState: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam85) {
        return (
          (journeyDiagramXKPGCS4QParam85 =
            this.conditionStack.length -
            1 -
            Math.abs(journeyDiagramXKPGCS4QParam85 || 0)),
          journeyDiagramXKPGCS4QParam85 >= 0
            ? this.conditionStack[journeyDiagramXKPGCS4QParam85]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam113) {
        this.begin(journeyDiagramXKPGCS4QParam113);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam23,
        journeyDiagramXKPGCS4QParam24,
        journeyDiagramXKPGCS4QParam25,
        journeyDiagramXKPGCS4QParam26,
      ) {
        switch (journeyDiagramXKPGCS4QParam25) {
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
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [
        /^(?:%(?!\{)[^\n]*)/i,
        /^(?:[^\}]%%[^\n]*)/i,
        /^(?:[\n]+)/i,
        /^(?:\s+)/i,
        /^(?:#[^\n]*)/i,
        /^(?:journey\b)/i,
        /^(?:title\s[^#\n;]+)/i,
        /^(?:accTitle\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*:\s*)/i,
        /^(?:(?!\n||)*[^\n]*)/i,
        /^(?:accDescr\s*\{\s*)/i,
        /^(?:[\}])/i,
        /^(?:[^\}]*)/i,
        /^(?:section\s[^#:\n;]+)/i,
        /^(?:[^#:\n;]+)/i,
        /^(?::[^#\n;]+)/i,
        /^(?::)/i,
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
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19],
          inclusive: true,
        },
      },
    };
  })();
  function journeyDiagramXKPGCS4QHelper2() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper2, "Parser"),
    (journeyDiagramXKPGCS4QHelper2.prototype = journeyDiagramXKPGCS4QValue46),
    (journeyDiagramXKPGCS4QValue46.Parser = journeyDiagramXKPGCS4QHelper2),
    new journeyDiagramXKPGCS4QHelper2()
  );
})();
journeyDiagramXKPGCS4QValue1.parser = journeyDiagramXKPGCS4QValue1;
var journeyDiagramXKPGCS4QValue2 = journeyDiagramXKPGCS4QValue1,
  journeyDiagramXKPGCS4QValue3 = "",
  journeyDiagramXKPGCS4QValue4 = [],
  journeyDiagramXKPGCS4QValue5 = [],
  journeyDiagramXKPGCS4QValue6 = [],
  journeyDiagramXKPGCS4QValue7 = chunkAGHRB4JFN(function () {
    journeyDiagramXKPGCS4QValue4.length = 0;
    journeyDiagramXKPGCS4QValue5.length = 0;
    journeyDiagramXKPGCS4QValue3 = "";
    journeyDiagramXKPGCS4QValue6.length = 0;
    _chunkABZYJK2DK();
  }, "clear"),
  journeyDiagramXKPGCS4QValue8 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam114,
  ) {
    journeyDiagramXKPGCS4QValue3 = journeyDiagramXKPGCS4QParam114;
    journeyDiagramXKPGCS4QValue4.push(journeyDiagramXKPGCS4QParam114);
  }, "addSection"),
  journeyDiagramXKPGCS4QValue9 = chunkAGHRB4JFN(function () {
    return journeyDiagramXKPGCS4QValue4;
  }, "getSections"),
  journeyDiagramXKPGCS4QValue10 = chunkAGHRB4JFN(function () {
    let journeyDiagramXKPGCS4QValue178 = journeyDiagramXKPGCS4QValue14(),
      journeyDiagramXKPGCS4QValue179 = 0;
    for (
      ;
      !journeyDiagramXKPGCS4QValue178 && journeyDiagramXKPGCS4QValue179 < 100;

    ) {
      journeyDiagramXKPGCS4QValue178 = journeyDiagramXKPGCS4QValue14();
      journeyDiagramXKPGCS4QValue179++;
    }
    return (
      journeyDiagramXKPGCS4QValue5.push(...journeyDiagramXKPGCS4QValue6),
      journeyDiagramXKPGCS4QValue5
    );
  }, "getTasks"),
  journeyDiagramXKPGCS4QValue11 = chunkAGHRB4JFN(function () {
    let journeyDiagramXKPGCS4QValue175 = [];
    return (
      journeyDiagramXKPGCS4QValue5.forEach((item) => {
        item.people && journeyDiagramXKPGCS4QValue175.push(...item.people);
      }),
      [...new Set(journeyDiagramXKPGCS4QValue175)].sort()
    );
  }, "updateActors"),
  journeyDiagramXKPGCS4QValue12 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam70,
    journeyDiagramXKPGCS4QParam71,
  ) {
    let journeyDiagramXKPGCS4QValue158 = journeyDiagramXKPGCS4QParam71
        .substr(1)
        .split(":"),
      journeyDiagramXKPGCS4QValue159 = 0,
      journeyDiagramXKPGCS4QValue160 = [];
    journeyDiagramXKPGCS4QValue158.length === 1
      ? ((journeyDiagramXKPGCS4QValue159 = Number(
          journeyDiagramXKPGCS4QValue158[0],
        )),
        (journeyDiagramXKPGCS4QValue160 = []))
      : ((journeyDiagramXKPGCS4QValue159 = Number(
          journeyDiagramXKPGCS4QValue158[0],
        )),
        (journeyDiagramXKPGCS4QValue160 =
          journeyDiagramXKPGCS4QValue158[1].split(",")));
    let journeyDiagramXKPGCS4QValue161 = journeyDiagramXKPGCS4QValue160.map(
        (item) => item.trim(),
      ),
      journeyDiagramXKPGCS4QValue162 = {
        section: journeyDiagramXKPGCS4QValue3,
        type: journeyDiagramXKPGCS4QValue3,
        people: journeyDiagramXKPGCS4QValue161,
        task: journeyDiagramXKPGCS4QParam70,
        score: journeyDiagramXKPGCS4QValue159,
      };
    journeyDiagramXKPGCS4QValue6.push(journeyDiagramXKPGCS4QValue162);
  }, "addTask"),
  journeyDiagramXKPGCS4QValue13 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam90,
  ) {
    let journeyDiagramXKPGCS4QValue177 = {
      section: journeyDiagramXKPGCS4QValue3,
      type: journeyDiagramXKPGCS4QValue3,
      description: journeyDiagramXKPGCS4QParam90,
      task: journeyDiagramXKPGCS4QParam90,
      classes: [],
    };
    journeyDiagramXKPGCS4QValue5.push(journeyDiagramXKPGCS4QValue177);
  }, "addTaskOrg"),
  journeyDiagramXKPGCS4QValue14 = chunkAGHRB4JFN(function () {
    let journeyDiagramXKPGCS4QValue167 = chunkAGHRB4JFN(function (
        journeyDiagramXKPGCS4QParam108,
      ) {
        return journeyDiagramXKPGCS4QValue6[journeyDiagramXKPGCS4QParam108]
          .processed;
      }, "compileTask"),
      journeyDiagramXKPGCS4QValue168 = true;
    for (let [
      journeyDiagramXKPGCS4QValue181,
      journeyDiagramXKPGCS4QValue182,
    ] of journeyDiagramXKPGCS4QValue6.entries()) {
      journeyDiagramXKPGCS4QValue167(journeyDiagramXKPGCS4QValue181);
      journeyDiagramXKPGCS4QValue168 &&=
        journeyDiagramXKPGCS4QValue182.processed;
    }
    return journeyDiagramXKPGCS4QValue168;
  }, "compileTasks"),
  journeyDiagramXKPGCS4QValue15 = {
    getConfig: chunkAGHRB4JFN(() => _chunkABZYJK2DB().journey, "getConfig"),
    clear: journeyDiagramXKPGCS4QValue7,
    setDiagramTitle: chunkABZYJK2DU,
    getDiagramTitle: chunkABZYJK2DF,
    setAccTitle: chunkABZYJK2DN,
    getAccTitle: chunkABZYJK2DR,
    setAccDescription: chunkABZYJK2DZ,
    getAccDescription: chunkABZYJK2DJ,
    addSection: journeyDiagramXKPGCS4QValue8,
    getSections: journeyDiagramXKPGCS4QValue9,
    getTasks: journeyDiagramXKPGCS4QValue10,
    addTask: journeyDiagramXKPGCS4QValue12,
    addTaskOrg: journeyDiagramXKPGCS4QValue13,
    getActors: chunkAGHRB4JFN(function () {
      return journeyDiagramXKPGCS4QValue11();
    }, "getActors"),
  },
  journeyDiagramXKPGCS4QValue16 = chunkAGHRB4JFN(
    (journeyDiagramXKPGCS4QParam1) => `.label {
    font-family: ${journeyDiagramXKPGCS4QParam1.fontFamily};
    color: ${journeyDiagramXKPGCS4QParam1.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${journeyDiagramXKPGCS4QParam1.textColor}
  }

  .legend {
    fill: ${journeyDiagramXKPGCS4QParam1.textColor};
    font-family: ${journeyDiagramXKPGCS4QParam1.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${journeyDiagramXKPGCS4QParam1.textColor}
  }

  .face {
    ${journeyDiagramXKPGCS4QParam1.faceColor ? `fill: ${journeyDiagramXKPGCS4QParam1.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${journeyDiagramXKPGCS4QParam1.mainBkg};
    stroke: ${journeyDiagramXKPGCS4QParam1.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${journeyDiagramXKPGCS4QParam1.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${journeyDiagramXKPGCS4QParam1.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${journeyDiagramXKPGCS4QParam1.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${journeyDiagramXKPGCS4QParam1.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${journeyDiagramXKPGCS4QParam1.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${journeyDiagramXKPGCS4QParam1.fontFamily};
    font-size: 12px;
    background: ${journeyDiagramXKPGCS4QParam1.tertiaryColor};
    border: 1px solid ${journeyDiagramXKPGCS4QParam1.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${journeyDiagramXKPGCS4QParam1.fillType0 ? `fill: ${journeyDiagramXKPGCS4QParam1.fillType7}` : ""};
  }

  .actor-0 {
    ${journeyDiagramXKPGCS4QParam1.actor0 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor0}` : ""};
  }
  .actor-1 {
    ${journeyDiagramXKPGCS4QParam1.actor1 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor1}` : ""};
  }
  .actor-2 {
    ${journeyDiagramXKPGCS4QParam1.actor2 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor2}` : ""};
  }
  .actor-3 {
    ${journeyDiagramXKPGCS4QParam1.actor3 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor3}` : ""};
  }
  .actor-4 {
    ${journeyDiagramXKPGCS4QParam1.actor4 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor4}` : ""};
  }
  .actor-5 {
    ${journeyDiagramXKPGCS4QParam1.actor5 ? `fill: ${journeyDiagramXKPGCS4QParam1.actor5}` : ""};
  }
  ${chunkFMBD7UC4()}
`,
    "getStyles",
  ),
  journeyDiagramXKPGCS4QValue17 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam109,
    journeyDiagramXKPGCS4QParam110,
  ) {
    return chunkTZMSLE5BS(
      journeyDiagramXKPGCS4QParam109,
      journeyDiagramXKPGCS4QParam110,
    );
  }, "drawRect"),
  journeyDiagramXKPGCS4QValue18 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam5,
    journeyDiagramXKPGCS4QParam6,
  ) {
    let journeyDiagramXKPGCS4QValue80 = journeyDiagramXKPGCS4QParam5
        .append("circle")
        .attr("cx", journeyDiagramXKPGCS4QParam6.cx)
        .attr("cy", journeyDiagramXKPGCS4QParam6.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      journeyDiagramXKPGCS4QValue81 = journeyDiagramXKPGCS4QParam5.append("g");
    journeyDiagramXKPGCS4QValue81
      .append("circle")
      .attr("cx", journeyDiagramXKPGCS4QParam6.cx - 5)
      .attr("cy", journeyDiagramXKPGCS4QParam6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    journeyDiagramXKPGCS4QValue81
      .append("circle")
      .attr("cx", journeyDiagramXKPGCS4QParam6.cx + 5)
      .attr("cy", journeyDiagramXKPGCS4QParam6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function journeyDiagramXKPGCS4QHelper9(journeyDiagramXKPGCS4QParam68) {
      let journeyDiagramXKPGCS4QValue157 = arc()
        .startAngle(Math.PI / 2)
        .endAngle(3 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramXKPGCS4QParam68
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramXKPGCS4QValue157)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramXKPGCS4QParam6.cx +
            "," +
            (journeyDiagramXKPGCS4QParam6.cy + 2) +
            ")",
        );
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper9, "smile");
    function journeyDiagramXKPGCS4QHelper10(journeyDiagramXKPGCS4QParam66) {
      let journeyDiagramXKPGCS4QValue156 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle(5 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramXKPGCS4QParam66
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramXKPGCS4QValue156)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramXKPGCS4QParam6.cx +
            "," +
            (journeyDiagramXKPGCS4QParam6.cy + 7) +
            ")",
        );
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper10, "sad");
    function journeyDiagramXKPGCS4QHelper11(journeyDiagramXKPGCS4QParam67) {
      journeyDiagramXKPGCS4QParam67
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", journeyDiagramXKPGCS4QParam6.cx - 5)
        .attr("y1", journeyDiagramXKPGCS4QParam6.cy + 7)
        .attr("x2", journeyDiagramXKPGCS4QParam6.cx + 5)
        .attr("y2", journeyDiagramXKPGCS4QParam6.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper11, "ambivalent"),
      journeyDiagramXKPGCS4QParam6.score > 3
        ? journeyDiagramXKPGCS4QHelper9(journeyDiagramXKPGCS4QValue81)
        : journeyDiagramXKPGCS4QParam6.score < 3
          ? journeyDiagramXKPGCS4QHelper10(journeyDiagramXKPGCS4QValue81)
          : journeyDiagramXKPGCS4QHelper11(journeyDiagramXKPGCS4QValue81),
      journeyDiagramXKPGCS4QValue80
    );
  }, "drawFace"),
  journeyDiagramXKPGCS4QValue19 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam64,
    journeyDiagramXKPGCS4QParam65,
  ) {
    let journeyDiagramXKPGCS4QValue152 =
      journeyDiagramXKPGCS4QParam64.append("circle");
    return (
      journeyDiagramXKPGCS4QValue152.attr(
        "cx",
        journeyDiagramXKPGCS4QParam65.cx,
      ),
      journeyDiagramXKPGCS4QValue152.attr(
        "cy",
        journeyDiagramXKPGCS4QParam65.cy,
      ),
      journeyDiagramXKPGCS4QValue152.attr(
        "class",
        "actor-" + journeyDiagramXKPGCS4QParam65.pos,
      ),
      journeyDiagramXKPGCS4QValue152.attr(
        "fill",
        journeyDiagramXKPGCS4QParam65.fill,
      ),
      journeyDiagramXKPGCS4QValue152.attr(
        "stroke",
        journeyDiagramXKPGCS4QParam65.stroke,
      ),
      journeyDiagramXKPGCS4QValue152.attr("r", journeyDiagramXKPGCS4QParam65.r),
      journeyDiagramXKPGCS4QValue152.class !== undefined &&
        journeyDiagramXKPGCS4QValue152.attr(
          "class",
          journeyDiagramXKPGCS4QValue152.class,
        ),
      journeyDiagramXKPGCS4QParam65.title !== undefined &&
        journeyDiagramXKPGCS4QValue152
          .append("title")
          .text(journeyDiagramXKPGCS4QParam65.title),
      journeyDiagramXKPGCS4QValue152
    );
  }, "drawCircle"),
  journeyDiagramXKPGCS4QValue20 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam111,
    journeyDiagramXKPGCS4QParam112,
  ) {
    return chunkTZMSLE5BA(
      journeyDiagramXKPGCS4QParam111,
      journeyDiagramXKPGCS4QParam112,
    );
  }, "drawText"),
  journeyDiagramXKPGCS4QValue21 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam58,
    journeyDiagramXKPGCS4QParam59,
  ) {
    function journeyDiagramXKPGCS4QHelper13(
      journeyDiagramXKPGCS4QParam80,
      journeyDiagramXKPGCS4QParam81,
      journeyDiagramXKPGCS4QParam82,
      journeyDiagramXKPGCS4QParam83,
      journeyDiagramXKPGCS4QParam84,
    ) {
      return (
        journeyDiagramXKPGCS4QParam80 +
        "," +
        journeyDiagramXKPGCS4QParam81 +
        " " +
        (journeyDiagramXKPGCS4QParam80 + journeyDiagramXKPGCS4QParam82) +
        "," +
        journeyDiagramXKPGCS4QParam81 +
        " " +
        (journeyDiagramXKPGCS4QParam80 + journeyDiagramXKPGCS4QParam82) +
        "," +
        (journeyDiagramXKPGCS4QParam81 +
          journeyDiagramXKPGCS4QParam83 -
          journeyDiagramXKPGCS4QParam84) +
        " " +
        (journeyDiagramXKPGCS4QParam80 +
          journeyDiagramXKPGCS4QParam82 -
          journeyDiagramXKPGCS4QParam84 * 1.2) +
        "," +
        (journeyDiagramXKPGCS4QParam81 + journeyDiagramXKPGCS4QParam83) +
        " " +
        journeyDiagramXKPGCS4QParam80 +
        "," +
        (journeyDiagramXKPGCS4QParam81 + journeyDiagramXKPGCS4QParam83)
      );
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper13, "genPoints");
    let journeyDiagramXKPGCS4QValue146 =
      journeyDiagramXKPGCS4QParam58.append("polygon");
    journeyDiagramXKPGCS4QValue146.attr(
      "points",
      journeyDiagramXKPGCS4QHelper13(
        journeyDiagramXKPGCS4QParam59.x,
        journeyDiagramXKPGCS4QParam59.y,
        50,
        20,
        7,
      ),
    );
    journeyDiagramXKPGCS4QValue146.attr("class", "labelBox");
    journeyDiagramXKPGCS4QParam59.y +=
      journeyDiagramXKPGCS4QParam59.labelMargin;
    journeyDiagramXKPGCS4QParam59.x +=
      0.5 * journeyDiagramXKPGCS4QParam59.labelMargin;
    journeyDiagramXKPGCS4QValue20(
      journeyDiagramXKPGCS4QParam58,
      journeyDiagramXKPGCS4QParam59,
    );
  }, "drawLabel"),
  journeyDiagramXKPGCS4QValue22 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam55,
    journeyDiagramXKPGCS4QParam56,
    journeyDiagramXKPGCS4QParam57,
  ) {
    let journeyDiagramXKPGCS4QValue143 =
        journeyDiagramXKPGCS4QParam55.append("g"),
      journeyDiagramXKPGCS4QValue144 = chunkTZMSLE5BO();
    journeyDiagramXKPGCS4QValue144.x = journeyDiagramXKPGCS4QParam56.x;
    journeyDiagramXKPGCS4QValue144.y = journeyDiagramXKPGCS4QParam56.y;
    journeyDiagramXKPGCS4QValue144.fill = journeyDiagramXKPGCS4QParam56.fill;
    journeyDiagramXKPGCS4QValue144.width =
      journeyDiagramXKPGCS4QParam57.width *
        journeyDiagramXKPGCS4QParam56.taskCount +
      journeyDiagramXKPGCS4QParam57.diagramMarginX *
        (journeyDiagramXKPGCS4QParam56.taskCount - 1);
    journeyDiagramXKPGCS4QValue144.height =
      journeyDiagramXKPGCS4QParam57.height;
    journeyDiagramXKPGCS4QValue144.class =
      "journey-section section-type-" + journeyDiagramXKPGCS4QParam56.num;
    journeyDiagramXKPGCS4QValue144.rx = 3;
    journeyDiagramXKPGCS4QValue144.ry = 3;
    journeyDiagramXKPGCS4QValue17(
      journeyDiagramXKPGCS4QValue143,
      journeyDiagramXKPGCS4QValue144,
    );
    journeyDiagramXKPGCS4QValue26(journeyDiagramXKPGCS4QParam57)(
      journeyDiagramXKPGCS4QParam56.text,
      journeyDiagramXKPGCS4QValue143,
      journeyDiagramXKPGCS4QValue144.x,
      journeyDiagramXKPGCS4QValue144.y,
      journeyDiagramXKPGCS4QValue144.width,
      journeyDiagramXKPGCS4QValue144.height,
      {
        class:
          "journey-section section-type-" + journeyDiagramXKPGCS4QParam56.num,
      },
      journeyDiagramXKPGCS4QParam57,
      journeyDiagramXKPGCS4QParam56.colour,
    );
  }, "drawSection"),
  journeyDiagramXKPGCS4QValue23 = -1,
  journeyDiagramXKPGCS4QValue24 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam13,
    journeyDiagramXKPGCS4QParam14,
    journeyDiagramXKPGCS4QParam15,
  ) {
    let journeyDiagramXKPGCS4QValue110 =
        journeyDiagramXKPGCS4QParam14.x +
        journeyDiagramXKPGCS4QParam15.width / 2,
      journeyDiagramXKPGCS4QValue111 =
        journeyDiagramXKPGCS4QParam13.append("g");
    journeyDiagramXKPGCS4QValue23++;
    journeyDiagramXKPGCS4QValue111
      .append("line")
      .attr("id", "task" + journeyDiagramXKPGCS4QValue23)
      .attr("x1", journeyDiagramXKPGCS4QValue110)
      .attr("y1", journeyDiagramXKPGCS4QParam14.y)
      .attr("x2", journeyDiagramXKPGCS4QValue110)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    journeyDiagramXKPGCS4QValue18(journeyDiagramXKPGCS4QValue111, {
      cx: journeyDiagramXKPGCS4QValue110,
      cy: 300 + (5 - journeyDiagramXKPGCS4QParam14.score) * 30,
      score: journeyDiagramXKPGCS4QParam14.score,
    });
    let journeyDiagramXKPGCS4QValue112 = chunkTZMSLE5BO();
    journeyDiagramXKPGCS4QValue112.x = journeyDiagramXKPGCS4QParam14.x;
    journeyDiagramXKPGCS4QValue112.y = journeyDiagramXKPGCS4QParam14.y;
    journeyDiagramXKPGCS4QValue112.fill = journeyDiagramXKPGCS4QParam14.fill;
    journeyDiagramXKPGCS4QValue112.width = journeyDiagramXKPGCS4QParam15.width;
    journeyDiagramXKPGCS4QValue112.height =
      journeyDiagramXKPGCS4QParam15.height;
    journeyDiagramXKPGCS4QValue112.class =
      "task task-type-" + journeyDiagramXKPGCS4QParam14.num;
    journeyDiagramXKPGCS4QValue112.rx = 3;
    journeyDiagramXKPGCS4QValue112.ry = 3;
    journeyDiagramXKPGCS4QValue17(
      journeyDiagramXKPGCS4QValue111,
      journeyDiagramXKPGCS4QValue112,
    );
    let journeyDiagramXKPGCS4QValue113 = journeyDiagramXKPGCS4QParam14.x + 14;
    journeyDiagramXKPGCS4QParam14.people.forEach((item) => {
      let journeyDiagramXKPGCS4QValue171 =
        journeyDiagramXKPGCS4QParam14.actors[item].color;
      journeyDiagramXKPGCS4QValue19(journeyDiagramXKPGCS4QValue111, {
        cx: journeyDiagramXKPGCS4QValue113,
        cy: journeyDiagramXKPGCS4QParam14.y,
        r: 7,
        fill: journeyDiagramXKPGCS4QValue171,
        stroke: "#000",
        title: item,
        pos: journeyDiagramXKPGCS4QParam14.actors[item].position,
      });
      journeyDiagramXKPGCS4QValue113 += 10;
    });
    journeyDiagramXKPGCS4QValue26(journeyDiagramXKPGCS4QParam15)(
      journeyDiagramXKPGCS4QParam14.task,
      journeyDiagramXKPGCS4QValue111,
      journeyDiagramXKPGCS4QValue112.x,
      journeyDiagramXKPGCS4QValue112.y,
      journeyDiagramXKPGCS4QValue112.width,
      journeyDiagramXKPGCS4QValue112.height,
      {
        class: "task",
      },
      journeyDiagramXKPGCS4QParam15,
      journeyDiagramXKPGCS4QParam14.colour,
    );
  }, "drawTask"),
  journeyDiagramXKPGCS4QValue25 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam115,
    journeyDiagramXKPGCS4QParam116,
  ) {
    chunkTZMSLE5BI(
      journeyDiagramXKPGCS4QParam115,
      journeyDiagramXKPGCS4QParam116,
    );
  }, "drawBackgroundRect"),
  journeyDiagramXKPGCS4QValue26 = (function () {
    function journeyDiagramXKPGCS4QHelper5(
      journeyDiagramXKPGCS4QParam72,
      journeyDiagramXKPGCS4QParam73,
      journeyDiagramXKPGCS4QParam74,
      journeyDiagramXKPGCS4QParam75,
      journeyDiagramXKPGCS4QParam76,
      journeyDiagramXKPGCS4QParam77,
      journeyDiagramXKPGCS4QParam78,
      journeyDiagramXKPGCS4QParam79,
    ) {
      journeyDiagramXKPGCS4QHelper8(
        journeyDiagramXKPGCS4QParam73
          .append("text")
          .attr(
            "x",
            journeyDiagramXKPGCS4QParam74 + journeyDiagramXKPGCS4QParam76 / 2,
          )
          .attr(
            "y",
            journeyDiagramXKPGCS4QParam75 +
              journeyDiagramXKPGCS4QParam77 / 2 +
              5,
          )
          .style("font-color", journeyDiagramXKPGCS4QParam79)
          .style("text-anchor", "middle")
          .text(journeyDiagramXKPGCS4QParam72),
        journeyDiagramXKPGCS4QParam78,
      );
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper5, "byText");
    function journeyDiagramXKPGCS4QHelper6(
      journeyDiagramXKPGCS4QParam36,
      journeyDiagramXKPGCS4QParam37,
      journeyDiagramXKPGCS4QParam38,
      journeyDiagramXKPGCS4QParam39,
      journeyDiagramXKPGCS4QParam40,
      journeyDiagramXKPGCS4QParam41,
      journeyDiagramXKPGCS4QParam42,
      journeyDiagramXKPGCS4QParam43,
      journeyDiagramXKPGCS4QParam44,
    ) {
      let { taskFontSize, taskFontFamily } = journeyDiagramXKPGCS4QParam43,
        journeyDiagramXKPGCS4QValue135 =
          journeyDiagramXKPGCS4QParam36.split(/<br\s*\/?>/gi);
      for (
        let journeyDiagramXKPGCS4QValue140 = 0;
        journeyDiagramXKPGCS4QValue140 < journeyDiagramXKPGCS4QValue135.length;
        journeyDiagramXKPGCS4QValue140++
      ) {
        let journeyDiagramXKPGCS4QValue141 =
            journeyDiagramXKPGCS4QValue140 * taskFontSize -
            (taskFontSize * (journeyDiagramXKPGCS4QValue135.length - 1)) / 2,
          journeyDiagramXKPGCS4QValue142 = journeyDiagramXKPGCS4QParam37
            .append("text")
            .attr(
              "x",
              journeyDiagramXKPGCS4QParam38 + journeyDiagramXKPGCS4QParam40 / 2,
            )
            .attr("y", journeyDiagramXKPGCS4QParam39)
            .attr("fill", journeyDiagramXKPGCS4QParam44)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        journeyDiagramXKPGCS4QValue142
          .append("tspan")
          .attr(
            "x",
            journeyDiagramXKPGCS4QParam38 + journeyDiagramXKPGCS4QParam40 / 2,
          )
          .attr("dy", journeyDiagramXKPGCS4QValue141)
          .text(journeyDiagramXKPGCS4QValue135[journeyDiagramXKPGCS4QValue140]);
        journeyDiagramXKPGCS4QValue142
          .attr(
            "y",
            journeyDiagramXKPGCS4QParam39 + journeyDiagramXKPGCS4QParam41 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        journeyDiagramXKPGCS4QHelper8(
          journeyDiagramXKPGCS4QValue142,
          journeyDiagramXKPGCS4QParam42,
        );
      }
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper6, "byTspan");
    function journeyDiagramXKPGCS4QHelper7(
      journeyDiagramXKPGCS4QParam45,
      journeyDiagramXKPGCS4QParam46,
      journeyDiagramXKPGCS4QParam47,
      journeyDiagramXKPGCS4QParam48,
      journeyDiagramXKPGCS4QParam49,
      journeyDiagramXKPGCS4QParam50,
      journeyDiagramXKPGCS4QParam51,
      journeyDiagramXKPGCS4QParam52,
    ) {
      let journeyDiagramXKPGCS4QValue136 =
          journeyDiagramXKPGCS4QParam46.append("switch"),
        journeyDiagramXKPGCS4QValue137 = journeyDiagramXKPGCS4QValue136
          .append("foreignObject")
          .attr("x", journeyDiagramXKPGCS4QParam47)
          .attr("y", journeyDiagramXKPGCS4QParam48)
          .attr("width", journeyDiagramXKPGCS4QParam49)
          .attr("height", journeyDiagramXKPGCS4QParam50)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      journeyDiagramXKPGCS4QValue137
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(journeyDiagramXKPGCS4QParam45);
      journeyDiagramXKPGCS4QHelper6(
        journeyDiagramXKPGCS4QParam45,
        journeyDiagramXKPGCS4QValue136,
        journeyDiagramXKPGCS4QParam47,
        journeyDiagramXKPGCS4QParam48,
        journeyDiagramXKPGCS4QParam49,
        journeyDiagramXKPGCS4QParam50,
        journeyDiagramXKPGCS4QParam51,
        journeyDiagramXKPGCS4QParam52,
      );
      journeyDiagramXKPGCS4QHelper8(
        journeyDiagramXKPGCS4QValue137,
        journeyDiagramXKPGCS4QParam51,
      );
    }
    chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper7, "byFo");
    function journeyDiagramXKPGCS4QHelper8(
      journeyDiagramXKPGCS4QParam98,
      journeyDiagramXKPGCS4QParam99,
    ) {
      for (let journeyDiagramXKPGCS4QValue183 in journeyDiagramXKPGCS4QParam99)
        journeyDiagramXKPGCS4QValue183 in journeyDiagramXKPGCS4QParam99 &&
          journeyDiagramXKPGCS4QParam98.attr(
            journeyDiagramXKPGCS4QValue183,
            journeyDiagramXKPGCS4QParam99[journeyDiagramXKPGCS4QValue183],
          );
    }
    return (
      chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper8, "_setTextAttrs"),
      function (journeyDiagramXKPGCS4QParam91) {
        return journeyDiagramXKPGCS4QParam91.textPlacement === "fo"
          ? journeyDiagramXKPGCS4QHelper7
          : journeyDiagramXKPGCS4QParam91.textPlacement === "old"
            ? journeyDiagramXKPGCS4QHelper5
            : journeyDiagramXKPGCS4QHelper6;
      }
    );
  })(),
  journeyDiagramXKPGCS4QValue27 = {
    drawRect: journeyDiagramXKPGCS4QValue17,
    drawCircle: journeyDiagramXKPGCS4QValue19,
    drawSection: journeyDiagramXKPGCS4QValue22,
    drawText: journeyDiagramXKPGCS4QValue20,
    drawLabel: journeyDiagramXKPGCS4QValue21,
    drawTask: journeyDiagramXKPGCS4QValue24,
    drawBackgroundRect: journeyDiagramXKPGCS4QValue25,
    initGraphics: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam69) {
      journeyDiagramXKPGCS4QParam69
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
    }, "initGraphics"),
  },
  journeyDiagramXKPGCS4QValue28 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam97,
  ) {
    Object.keys(journeyDiagramXKPGCS4QParam97).forEach(function (item) {
      journeyDiagramXKPGCS4QValue31[item] = journeyDiagramXKPGCS4QParam97[item];
    });
  }, "setConf"),
  journeyDiagramXKPGCS4QValue29 = {},
  journeyDiagramXKPGCS4QValue30 = 0;
function journeyDiagramXKPGCS4QHelper1(journeyDiagramXKPGCS4QParam11) {
  let journeyDiagramXKPGCS4QValue98 = _chunkABZYJK2DB().journey,
    journeyDiagramXKPGCS4QValue99 = journeyDiagramXKPGCS4QValue98.maxLabelWidth;
  journeyDiagramXKPGCS4QValue30 = 0;
  let journeyDiagramXKPGCS4QValue100 = 60;
  Object.keys(journeyDiagramXKPGCS4QValue29).forEach((item) => {
    let journeyDiagramXKPGCS4QValue101 =
        journeyDiagramXKPGCS4QValue29[item].color,
      journeyDiagramXKPGCS4QValue102 = {
        cx: 20,
        cy: journeyDiagramXKPGCS4QValue100,
        r: 7,
        fill: journeyDiagramXKPGCS4QValue101,
        stroke: "#000",
        pos: journeyDiagramXKPGCS4QValue29[item].position,
      };
    journeyDiagramXKPGCS4QValue27.drawCircle(
      journeyDiagramXKPGCS4QParam11,
      journeyDiagramXKPGCS4QValue102,
    );
    let journeyDiagramXKPGCS4QValue103 = journeyDiagramXKPGCS4QParam11
        .append("text")
        .attr("visibility", "hidden")
        .text(item),
      journeyDiagramXKPGCS4QValue104 = journeyDiagramXKPGCS4QValue103
        .node()
        .getBoundingClientRect().width;
    journeyDiagramXKPGCS4QValue103.remove();
    let journeyDiagramXKPGCS4QValue105 = [];
    if (journeyDiagramXKPGCS4QValue104 <= journeyDiagramXKPGCS4QValue99)
      journeyDiagramXKPGCS4QValue105 = [item];
    else {
      let journeyDiagramXKPGCS4QValue138 = item.split(" "),
        journeyDiagramXKPGCS4QValue139 = "";
      journeyDiagramXKPGCS4QValue103 = journeyDiagramXKPGCS4QParam11
        .append("text")
        .attr("visibility", "hidden");
      journeyDiagramXKPGCS4QValue138.forEach((_item) => {
        let journeyDiagramXKPGCS4QValue147 = journeyDiagramXKPGCS4QValue139
          ? `${journeyDiagramXKPGCS4QValue139} ${_item}`
          : _item;
        if (
          (journeyDiagramXKPGCS4QValue103.text(journeyDiagramXKPGCS4QValue147),
          journeyDiagramXKPGCS4QValue103.node().getBoundingClientRect().width >
            journeyDiagramXKPGCS4QValue99)
        ) {
          if (
            (journeyDiagramXKPGCS4QValue139 &&
              journeyDiagramXKPGCS4QValue105.push(
                journeyDiagramXKPGCS4QValue139,
              ),
            (journeyDiagramXKPGCS4QValue139 = _item),
            journeyDiagramXKPGCS4QValue103.text(_item),
            journeyDiagramXKPGCS4QValue103.node().getBoundingClientRect()
              .width > journeyDiagramXKPGCS4QValue99)
          ) {
            let journeyDiagramXKPGCS4QValue170 = "";
            for (let journeyDiagramXKPGCS4QValue172 of _item) {
              journeyDiagramXKPGCS4QValue170 += journeyDiagramXKPGCS4QValue172;
              journeyDiagramXKPGCS4QValue103.text(
                journeyDiagramXKPGCS4QValue170 + "-",
              );
              journeyDiagramXKPGCS4QValue103.node().getBoundingClientRect()
                .width > journeyDiagramXKPGCS4QValue99 &&
                (journeyDiagramXKPGCS4QValue105.push(
                  journeyDiagramXKPGCS4QValue170.slice(0, -1) + "-",
                ),
                (journeyDiagramXKPGCS4QValue170 =
                  journeyDiagramXKPGCS4QValue172));
            }
            journeyDiagramXKPGCS4QValue139 = journeyDiagramXKPGCS4QValue170;
          }
        } else journeyDiagramXKPGCS4QValue139 = journeyDiagramXKPGCS4QValue147;
      });
      journeyDiagramXKPGCS4QValue139 &&
        journeyDiagramXKPGCS4QValue105.push(journeyDiagramXKPGCS4QValue139);
      journeyDiagramXKPGCS4QValue103.remove();
    }
    journeyDiagramXKPGCS4QValue105.forEach((_item, index) => {
      let journeyDiagramXKPGCS4QValue163 = {
          x: 40,
          y: journeyDiagramXKPGCS4QValue100 + 7 + index * 20,
          fill: "#666",
          text: _item,
          textMargin: journeyDiagramXKPGCS4QValue98.boxTextMargin ?? 5,
        },
        journeyDiagramXKPGCS4QValue164 = journeyDiagramXKPGCS4QValue27
          .drawText(
            journeyDiagramXKPGCS4QParam11,
            journeyDiagramXKPGCS4QValue163,
          )
          .node()
          .getBoundingClientRect().width;
      journeyDiagramXKPGCS4QValue164 > journeyDiagramXKPGCS4QValue30 &&
        journeyDiagramXKPGCS4QValue164 >
          journeyDiagramXKPGCS4QValue98.leftMargin -
            journeyDiagramXKPGCS4QValue164 &&
        (journeyDiagramXKPGCS4QValue30 = journeyDiagramXKPGCS4QValue164);
    });
    journeyDiagramXKPGCS4QValue100 += Math.max(
      20,
      journeyDiagramXKPGCS4QValue105.length * 20,
    );
  });
}
chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper1, "drawActorLegend");
var journeyDiagramXKPGCS4QValue31 = _chunkABZYJK2DB().journey,
  journeyDiagramXKPGCS4QValue32 = 0,
  journeyDiagramXKPGCS4QValue33 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam7,
    journeyDiagramXKPGCS4QParam8,
    journeyDiagramXKPGCS4QParam9,
    journeyDiagramXKPGCS4QParam10,
  ) {
    let journeyDiagramXKPGCS4QValue82 = _chunkABZYJK2DB(),
      journeyDiagramXKPGCS4QValue83 =
        journeyDiagramXKPGCS4QValue82.journey.titleColor,
      journeyDiagramXKPGCS4QValue84 =
        journeyDiagramXKPGCS4QValue82.journey.titleFontSize,
      journeyDiagramXKPGCS4QValue85 =
        journeyDiagramXKPGCS4QValue82.journey.titleFontFamily,
      journeyDiagramXKPGCS4QValue86 =
        journeyDiagramXKPGCS4QValue82.securityLevel,
      journeyDiagramXKPGCS4QValue87;
    journeyDiagramXKPGCS4QValue86 === "sandbox" &&
      (journeyDiagramXKPGCS4QValue87 = Src(
        "#i" + journeyDiagramXKPGCS4QParam8,
      ));
    let journeyDiagramXKPGCS4QValue88 = Src(
      journeyDiagramXKPGCS4QValue86 === "sandbox"
        ? journeyDiagramXKPGCS4QValue87.nodes()[0].contentDocument.body
        : "body",
    );
    journeyDiagramXKPGCS4QValue34.init();
    let journeyDiagramXKPGCS4QValue89 = journeyDiagramXKPGCS4QValue88.select(
      "#" + journeyDiagramXKPGCS4QParam8,
    );
    journeyDiagramXKPGCS4QValue27.initGraphics(journeyDiagramXKPGCS4QValue89);
    let journeyDiagramXKPGCS4QValue90 =
        journeyDiagramXKPGCS4QParam10.db.getTasks(),
      journeyDiagramXKPGCS4QValue91 =
        journeyDiagramXKPGCS4QParam10.db.getDiagramTitle(),
      journeyDiagramXKPGCS4QValue92 =
        journeyDiagramXKPGCS4QParam10.db.getActors();
    for (let journeyDiagramXKPGCS4QValue184 in journeyDiagramXKPGCS4QValue29)
      delete journeyDiagramXKPGCS4QValue29[journeyDiagramXKPGCS4QValue184];
    let journeyDiagramXKPGCS4QValue93 = 0;
    journeyDiagramXKPGCS4QValue92.forEach((item) => {
      journeyDiagramXKPGCS4QValue29[item] = {
        color:
          journeyDiagramXKPGCS4QValue31.actorColours[
            journeyDiagramXKPGCS4QValue93 %
              journeyDiagramXKPGCS4QValue31.actorColours.length
          ],
        position: journeyDiagramXKPGCS4QValue93,
      };
      journeyDiagramXKPGCS4QValue93++;
    });
    journeyDiagramXKPGCS4QHelper1(journeyDiagramXKPGCS4QValue89);
    journeyDiagramXKPGCS4QValue32 =
      journeyDiagramXKPGCS4QValue31.leftMargin + journeyDiagramXKPGCS4QValue30;
    journeyDiagramXKPGCS4QValue34.insert(
      0,
      0,
      journeyDiagramXKPGCS4QValue32,
      Object.keys(journeyDiagramXKPGCS4QValue29).length * 50,
    );
    journeyDiagramXKPGCS4QValue37(
      journeyDiagramXKPGCS4QValue89,
      journeyDiagramXKPGCS4QValue90,
      0,
    );
    let journeyDiagramXKPGCS4QValue94 =
      journeyDiagramXKPGCS4QValue34.getBounds();
    journeyDiagramXKPGCS4QValue91 &&
      journeyDiagramXKPGCS4QValue89
        .append("text")
        .text(journeyDiagramXKPGCS4QValue91)
        .attr("x", journeyDiagramXKPGCS4QValue32)
        .attr("font-size", journeyDiagramXKPGCS4QValue84)
        .attr("font-weight", "bold")
        .attr("y", 25)
        .attr("fill", journeyDiagramXKPGCS4QValue83)
        .attr("font-family", journeyDiagramXKPGCS4QValue85);
    let journeyDiagramXKPGCS4QValue95 =
        journeyDiagramXKPGCS4QValue94.stopy -
        journeyDiagramXKPGCS4QValue94.starty +
        2 * journeyDiagramXKPGCS4QValue31.diagramMarginY,
      journeyDiagramXKPGCS4QValue96 =
        journeyDiagramXKPGCS4QValue32 +
        journeyDiagramXKPGCS4QValue94.stopx +
        2 * journeyDiagramXKPGCS4QValue31.diagramMarginX;
    _chunkABZYJK2DC(
      journeyDiagramXKPGCS4QValue89,
      journeyDiagramXKPGCS4QValue95,
      journeyDiagramXKPGCS4QValue96,
      journeyDiagramXKPGCS4QValue31.useMaxWidth,
    );
    journeyDiagramXKPGCS4QValue89
      .append("line")
      .attr("x1", journeyDiagramXKPGCS4QValue32)
      .attr("y1", journeyDiagramXKPGCS4QValue31.height * 4)
      .attr(
        "x2",
        journeyDiagramXKPGCS4QValue96 - journeyDiagramXKPGCS4QValue32 - 4,
      )
      .attr("y2", journeyDiagramXKPGCS4QValue31.height * 4)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr("marker-end", "url(#arrowhead)");
    let journeyDiagramXKPGCS4QValue97 = journeyDiagramXKPGCS4QValue91 ? 70 : 0;
    journeyDiagramXKPGCS4QValue89.attr(
      "viewBox",
      `${journeyDiagramXKPGCS4QValue94.startx} -25 ${journeyDiagramXKPGCS4QValue96} ${journeyDiagramXKPGCS4QValue95 + journeyDiagramXKPGCS4QValue97}`,
    );
    journeyDiagramXKPGCS4QValue89.attr("preserveAspectRatio", "xMinYMin meet");
    journeyDiagramXKPGCS4QValue89.attr(
      "height",
      journeyDiagramXKPGCS4QValue95 + journeyDiagramXKPGCS4QValue97 + 25,
    );
  }, "draw"),
  journeyDiagramXKPGCS4QValue34 = {
    data: {
      startx: undefined,
      stopx: undefined,
      starty: undefined,
      stopy: undefined,
    },
    verticalPos: 0,
    sequenceItems: [],
    init: chunkAGHRB4JFN(function () {
      this.sequenceItems = [];
      this.data = {
        startx: undefined,
        stopx: undefined,
        starty: undefined,
        stopy: undefined,
      };
      this.verticalPos = 0;
    }, "init"),
    updateVal: chunkAGHRB4JFN(function (
      journeyDiagramXKPGCS4QParam100,
      journeyDiagramXKPGCS4QParam101,
      journeyDiagramXKPGCS4QParam102,
      journeyDiagramXKPGCS4QParam103,
    ) {
      journeyDiagramXKPGCS4QParam100[journeyDiagramXKPGCS4QParam101] ===
      undefined
        ? (journeyDiagramXKPGCS4QParam100[journeyDiagramXKPGCS4QParam101] =
            journeyDiagramXKPGCS4QParam102)
        : (journeyDiagramXKPGCS4QParam100[journeyDiagramXKPGCS4QParam101] =
            journeyDiagramXKPGCS4QParam103(
              journeyDiagramXKPGCS4QParam102,
              journeyDiagramXKPGCS4QParam100[journeyDiagramXKPGCS4QParam101],
            ));
    }, "updateVal"),
    updateBounds: chunkAGHRB4JFN(function (
      journeyDiagramXKPGCS4QParam19,
      journeyDiagramXKPGCS4QParam20,
      journeyDiagramXKPGCS4QParam21,
      journeyDiagramXKPGCS4QParam22,
    ) {
      let journeyDiagramXKPGCS4QValue127 = _chunkABZYJK2DB().journey,
        journeyDiagramXKPGCS4QValue128 = this,
        journeyDiagramXKPGCS4QValue129 = 0;
      function journeyDiagramXKPGCS4QHelper12(journeyDiagramXKPGCS4QParam27) {
        return chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam35) {
          journeyDiagramXKPGCS4QValue129++;
          let journeyDiagramXKPGCS4QValue134 =
            journeyDiagramXKPGCS4QValue128.sequenceItems.length -
            journeyDiagramXKPGCS4QValue129 +
            1;
          journeyDiagramXKPGCS4QValue128.updateVal(
            journeyDiagramXKPGCS4QParam35,
            "starty",
            journeyDiagramXKPGCS4QParam20 -
              journeyDiagramXKPGCS4QValue134 *
                journeyDiagramXKPGCS4QValue127.boxMargin,
            Math.min,
          );
          journeyDiagramXKPGCS4QValue128.updateVal(
            journeyDiagramXKPGCS4QParam35,
            "stopy",
            journeyDiagramXKPGCS4QParam22 +
              journeyDiagramXKPGCS4QValue134 *
                journeyDiagramXKPGCS4QValue127.boxMargin,
            Math.max,
          );
          journeyDiagramXKPGCS4QValue128.updateVal(
            journeyDiagramXKPGCS4QValue34.data,
            "startx",
            journeyDiagramXKPGCS4QParam19 -
              journeyDiagramXKPGCS4QValue134 *
                journeyDiagramXKPGCS4QValue127.boxMargin,
            Math.min,
          );
          journeyDiagramXKPGCS4QValue128.updateVal(
            journeyDiagramXKPGCS4QValue34.data,
            "stopx",
            journeyDiagramXKPGCS4QParam21 +
              journeyDiagramXKPGCS4QValue134 *
                journeyDiagramXKPGCS4QValue127.boxMargin,
            Math.max,
          );
          journeyDiagramXKPGCS4QParam27 !== "activation" &&
            (journeyDiagramXKPGCS4QValue128.updateVal(
              journeyDiagramXKPGCS4QParam35,
              "startx",
              journeyDiagramXKPGCS4QParam19 -
                journeyDiagramXKPGCS4QValue134 *
                  journeyDiagramXKPGCS4QValue127.boxMargin,
              Math.min,
            ),
            journeyDiagramXKPGCS4QValue128.updateVal(
              journeyDiagramXKPGCS4QParam35,
              "stopx",
              journeyDiagramXKPGCS4QParam21 +
                journeyDiagramXKPGCS4QValue134 *
                  journeyDiagramXKPGCS4QValue127.boxMargin,
              Math.max,
            ),
            journeyDiagramXKPGCS4QValue128.updateVal(
              journeyDiagramXKPGCS4QValue34.data,
              "starty",
              journeyDiagramXKPGCS4QParam20 -
                journeyDiagramXKPGCS4QValue134 *
                  journeyDiagramXKPGCS4QValue127.boxMargin,
              Math.min,
            ),
            journeyDiagramXKPGCS4QValue128.updateVal(
              journeyDiagramXKPGCS4QValue34.data,
              "stopy",
              journeyDiagramXKPGCS4QParam22 +
                journeyDiagramXKPGCS4QValue134 *
                  journeyDiagramXKPGCS4QValue127.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      chunkAGHRB4JFN(journeyDiagramXKPGCS4QHelper12, "updateFn");
      this.sequenceItems.forEach(journeyDiagramXKPGCS4QHelper12());
    }, "updateBounds"),
    insert: chunkAGHRB4JFN(function (
      journeyDiagramXKPGCS4QParam60,
      journeyDiagramXKPGCS4QParam61,
      journeyDiagramXKPGCS4QParam62,
      journeyDiagramXKPGCS4QParam63,
    ) {
      let journeyDiagramXKPGCS4QValue148 = Math.min(
          journeyDiagramXKPGCS4QParam60,
          journeyDiagramXKPGCS4QParam62,
        ),
        journeyDiagramXKPGCS4QValue149 = Math.max(
          journeyDiagramXKPGCS4QParam60,
          journeyDiagramXKPGCS4QParam62,
        ),
        journeyDiagramXKPGCS4QValue150 = Math.min(
          journeyDiagramXKPGCS4QParam61,
          journeyDiagramXKPGCS4QParam63,
        ),
        journeyDiagramXKPGCS4QValue151 = Math.max(
          journeyDiagramXKPGCS4QParam61,
          journeyDiagramXKPGCS4QParam63,
        );
      this.updateVal(
        journeyDiagramXKPGCS4QValue34.data,
        "startx",
        journeyDiagramXKPGCS4QValue148,
        Math.min,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QValue34.data,
        "starty",
        journeyDiagramXKPGCS4QValue150,
        Math.min,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QValue34.data,
        "stopx",
        journeyDiagramXKPGCS4QValue149,
        Math.max,
      );
      this.updateVal(
        journeyDiagramXKPGCS4QValue34.data,
        "stopy",
        journeyDiagramXKPGCS4QValue151,
        Math.max,
      );
      this.updateBounds(
        journeyDiagramXKPGCS4QValue148,
        journeyDiagramXKPGCS4QValue150,
        journeyDiagramXKPGCS4QValue149,
        journeyDiagramXKPGCS4QValue151,
      );
    }, "insert"),
    bumpVerticalPos: chunkAGHRB4JFN(function (journeyDiagramXKPGCS4QParam92) {
      this.verticalPos += journeyDiagramXKPGCS4QParam92;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: chunkAGHRB4JFN(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: chunkAGHRB4JFN(function () {
      return this.data;
    }, "getBounds"),
  },
  journeyDiagramXKPGCS4QValue35 = journeyDiagramXKPGCS4QValue31.sectionFills,
  journeyDiagramXKPGCS4QValue36 = journeyDiagramXKPGCS4QValue31.sectionColours,
  journeyDiagramXKPGCS4QValue37 = chunkAGHRB4JFN(function (
    journeyDiagramXKPGCS4QParam16,
    journeyDiagramXKPGCS4QParam17,
    journeyDiagramXKPGCS4QParam18,
  ) {
    let journeyDiagramXKPGCS4QValue114 = _chunkABZYJK2DB().journey,
      journeyDiagramXKPGCS4QValue115 = "",
      journeyDiagramXKPGCS4QValue116 =
        journeyDiagramXKPGCS4QParam18 +
        (journeyDiagramXKPGCS4QValue114.height * 2 +
          journeyDiagramXKPGCS4QValue114.diagramMarginY),
      journeyDiagramXKPGCS4QValue117 = 0,
      journeyDiagramXKPGCS4QValue118 = "#CCC",
      journeyDiagramXKPGCS4QValue119 = "black",
      journeyDiagramXKPGCS4QValue120 = 0;
    for (let [
      journeyDiagramXKPGCS4QValue130,
      journeyDiagramXKPGCS4QValue131,
    ] of journeyDiagramXKPGCS4QParam17.entries()) {
      if (
        journeyDiagramXKPGCS4QValue115 !==
        journeyDiagramXKPGCS4QValue131.section
      ) {
        journeyDiagramXKPGCS4QValue118 =
          journeyDiagramXKPGCS4QValue35[
            journeyDiagramXKPGCS4QValue117 %
              journeyDiagramXKPGCS4QValue35.length
          ];
        journeyDiagramXKPGCS4QValue120 =
          journeyDiagramXKPGCS4QValue117 % journeyDiagramXKPGCS4QValue35.length;
        journeyDiagramXKPGCS4QValue119 =
          journeyDiagramXKPGCS4QValue36[
            journeyDiagramXKPGCS4QValue117 %
              journeyDiagramXKPGCS4QValue36.length
          ];
        let journeyDiagramXKPGCS4QValue153 = 0,
          journeyDiagramXKPGCS4QValue154 =
            journeyDiagramXKPGCS4QValue131.section;
        for (
          let journeyDiagramXKPGCS4QValue180 = journeyDiagramXKPGCS4QValue130;
          journeyDiagramXKPGCS4QValue180 <
            journeyDiagramXKPGCS4QParam17.length &&
          journeyDiagramXKPGCS4QParam17[journeyDiagramXKPGCS4QValue180]
            .section == journeyDiagramXKPGCS4QValue154;
          journeyDiagramXKPGCS4QValue180++
        )
          journeyDiagramXKPGCS4QValue153 += 1;
        let journeyDiagramXKPGCS4QValue155 = {
          x:
            journeyDiagramXKPGCS4QValue130 *
              journeyDiagramXKPGCS4QValue114.taskMargin +
            journeyDiagramXKPGCS4QValue130 *
              journeyDiagramXKPGCS4QValue114.width +
            journeyDiagramXKPGCS4QValue32,
          y: 50,
          text: journeyDiagramXKPGCS4QValue131.section,
          fill: journeyDiagramXKPGCS4QValue118,
          num: journeyDiagramXKPGCS4QValue120,
          colour: journeyDiagramXKPGCS4QValue119,
          taskCount: journeyDiagramXKPGCS4QValue153,
        };
        journeyDiagramXKPGCS4QValue27.drawSection(
          journeyDiagramXKPGCS4QParam16,
          journeyDiagramXKPGCS4QValue155,
          journeyDiagramXKPGCS4QValue114,
        );
        journeyDiagramXKPGCS4QValue115 = journeyDiagramXKPGCS4QValue131.section;
        journeyDiagramXKPGCS4QValue117++;
      }
      let journeyDiagramXKPGCS4QValue133 =
        journeyDiagramXKPGCS4QValue131.people.reduce(
          (accumulator, current) => (
            journeyDiagramXKPGCS4QValue29[current] &&
              (accumulator[current] = journeyDiagramXKPGCS4QValue29[current]),
            accumulator
          ),
          {},
        );
      journeyDiagramXKPGCS4QValue131.x =
        journeyDiagramXKPGCS4QValue130 *
          journeyDiagramXKPGCS4QValue114.taskMargin +
        journeyDiagramXKPGCS4QValue130 * journeyDiagramXKPGCS4QValue114.width +
        journeyDiagramXKPGCS4QValue32;
      journeyDiagramXKPGCS4QValue131.y = journeyDiagramXKPGCS4QValue116;
      journeyDiagramXKPGCS4QValue131.width =
        journeyDiagramXKPGCS4QValue114.diagramMarginX;
      journeyDiagramXKPGCS4QValue131.height =
        journeyDiagramXKPGCS4QValue114.diagramMarginY;
      journeyDiagramXKPGCS4QValue131.colour = journeyDiagramXKPGCS4QValue119;
      journeyDiagramXKPGCS4QValue131.fill = journeyDiagramXKPGCS4QValue118;
      journeyDiagramXKPGCS4QValue131.num = journeyDiagramXKPGCS4QValue120;
      journeyDiagramXKPGCS4QValue131.actors = journeyDiagramXKPGCS4QValue133;
      journeyDiagramXKPGCS4QValue27.drawTask(
        journeyDiagramXKPGCS4QParam16,
        journeyDiagramXKPGCS4QValue131,
        journeyDiagramXKPGCS4QValue114,
      );
      journeyDiagramXKPGCS4QValue34.insert(
        journeyDiagramXKPGCS4QValue131.x,
        journeyDiagramXKPGCS4QValue131.y,
        journeyDiagramXKPGCS4QValue131.x +
          journeyDiagramXKPGCS4QValue131.width +
          journeyDiagramXKPGCS4QValue114.taskMargin,
        450,
      );
    }
  }, "drawTasks"),
  $ = {
    setConf: journeyDiagramXKPGCS4QValue28,
    draw: journeyDiagramXKPGCS4QValue33,
  };
export const journeyDiagramXKPGCS4Q = {
  parser: journeyDiagramXKPGCS4QValue2,
  db: journeyDiagramXKPGCS4QValue15,
  renderer: $,
  styles: journeyDiagramXKPGCS4QValue16,
  init: chunkAGHRB4JFN((journeyDiagramXKPGCS4QParam107) => {
    $.setConf(journeyDiagramXKPGCS4QParam107.journey);
    journeyDiagramXKPGCS4QValue15.clear();
  }, "init"),
};
