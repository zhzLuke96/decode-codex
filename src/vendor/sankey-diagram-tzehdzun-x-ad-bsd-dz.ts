// Restored from ref/webview/assets/sankeyDiagram-TZEHDZUN-DaYrOv_J.js
// Flat boundary. Vendored sankeyDiagramTZEHDZUN chunk restored from the Codex webview bundle.
import { tableau10T } from "./d3-tableau10";
import { Src } from "./roughjs-geometry";
import { Ordinal } from "../utils/ordinal";
import { chunkAGHRB4JFN } from "./dompurify";
import {
  chunkABZYJK2DN as _chunkABZYJK2DB,
  _chunkABZYJK2DC as _chunkABZYJK2DU,
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  _chunkABZYJK2DR,
  chunkABZYJK2DM,
  _chunkABZYJK2DC,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import {
  sankeyLinkHorizontalA,
  sankeyLinkHorizontalI,
  sankeyLinkHorizontalN,
  sankeyLinkHorizontalO,
  sankeyLinkHorizontalR,
  sankeyLinkHorizontalT,
} from "./d3-sankey-link-horizontal";
var sankeyDiagramTZEHDZUNValue1 = (function () {
  var sankeyDiagramTZEHDZUNValue17 = chunkAGHRB4JFN(function (
      sankeyDiagramTZEHDZUNParam29,
      sankeyDiagramTZEHDZUNParam30,
      sankeyDiagramTZEHDZUNParam31,
      sankeyDiagramTZEHDZUNParam32,
    ) {
      for (
        sankeyDiagramTZEHDZUNParam31 ||= {},
          sankeyDiagramTZEHDZUNParam32 = sankeyDiagramTZEHDZUNParam29.length;
        sankeyDiagramTZEHDZUNParam32--;
        sankeyDiagramTZEHDZUNParam31[
          sankeyDiagramTZEHDZUNParam29[sankeyDiagramTZEHDZUNParam32]
        ] = sankeyDiagramTZEHDZUNParam30
      );
      return sankeyDiagramTZEHDZUNParam31;
    }, "o"),
    sankeyDiagramTZEHDZUNValue18 = [1, 9],
    sankeyDiagramTZEHDZUNValue19 = [1, 10],
    sankeyDiagramTZEHDZUNValue20 = [1, 5, 10, 12],
    sankeyDiagramTZEHDZUNValue21 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        SANKEY: 4,
        NEWLINE: 5,
        csv: 6,
        opt_eof: 7,
        record: 8,
        csv_tail: 9,
        EOF: 10,
        "field[source]": 11,
        COMMA: 12,
        "field[target]": 13,
        "field[value]": 14,
        field: 15,
        escaped: 16,
        non_escaped: 17,
        DQUOTE: 18,
        ESCAPED_TEXT: 19,
        NON_ESCAPED_TEXT: 20,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        4: "SANKEY",
        5: "NEWLINE",
        10: "EOF",
        11: "field[source]",
        12: "COMMA",
        13: "field[target]",
        14: "field[value]",
        18: "DQUOTE",
        19: "ESCAPED_TEXT",
        20: "NON_ESCAPED_TEXT",
      },
      productions_: [
        0,
        [3, 4],
        [6, 2],
        [9, 2],
        [9, 0],
        [7, 1],
        [7, 0],
        [8, 5],
        [15, 1],
        [15, 1],
        [16, 3],
        [17, 1],
      ],
      performAction: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam11,
        sankeyDiagramTZEHDZUNParam12,
        sankeyDiagramTZEHDZUNParam13,
        sankeyDiagramTZEHDZUNParam14,
        sankeyDiagramTZEHDZUNParam15,
        sankeyDiagramTZEHDZUNParam16,
        sankeyDiagramTZEHDZUNParam17,
      ) {
        var sankeyDiagramTZEHDZUNValue84 =
          sankeyDiagramTZEHDZUNParam16.length - 1;
        switch (sankeyDiagramTZEHDZUNParam15) {
          case 7:
            let sankeyDiagramTZEHDZUNValue86 =
                sankeyDiagramTZEHDZUNParam14.findOrCreateNode(
                  sankeyDiagramTZEHDZUNParam16[sankeyDiagramTZEHDZUNValue84 - 4]
                    .trim()
                    .replaceAll('""', '"'),
                ),
              sankeyDiagramTZEHDZUNValue87 =
                sankeyDiagramTZEHDZUNParam14.findOrCreateNode(
                  sankeyDiagramTZEHDZUNParam16[sankeyDiagramTZEHDZUNValue84 - 2]
                    .trim()
                    .replaceAll('""', '"'),
                ),
              sankeyDiagramTZEHDZUNValue88 = parseFloat(
                sankeyDiagramTZEHDZUNParam16[
                  sankeyDiagramTZEHDZUNValue84
                ].trim(),
              );
            sankeyDiagramTZEHDZUNParam14.addLink(
              sankeyDiagramTZEHDZUNValue86,
              sankeyDiagramTZEHDZUNValue87,
              sankeyDiagramTZEHDZUNValue88,
            );
            break;
          case 8:
          case 9:
          case 11:
            this.$ = sankeyDiagramTZEHDZUNParam16[sankeyDiagramTZEHDZUNValue84];
            break;
          case 10:
            this.$ =
              sankeyDiagramTZEHDZUNParam16[sankeyDiagramTZEHDZUNValue84 - 1];
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
        {
          5: [1, 3],
        },
        {
          6: 4,
          8: 5,
          15: 6,
          16: 7,
          17: 8,
          18: sankeyDiagramTZEHDZUNValue18,
          20: sankeyDiagramTZEHDZUNValue19,
        },
        {
          1: [2, 6],
          7: 11,
          10: [1, 12],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue19, [2, 4], {
          9: 13,
          5: [1, 14],
        }),
        {
          12: [1, 15],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue20, [2, 8]),
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue20, [2, 9]),
        {
          19: [1, 16],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue20, [2, 11]),
        {
          1: [2, 1],
        },
        {
          1: [2, 5],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue19, [2, 2]),
        {
          6: 17,
          8: 5,
          15: 6,
          16: 7,
          17: 8,
          18: sankeyDiagramTZEHDZUNValue18,
          20: sankeyDiagramTZEHDZUNValue19,
        },
        {
          15: 18,
          16: 7,
          17: 8,
          18: sankeyDiagramTZEHDZUNValue18,
          20: sankeyDiagramTZEHDZUNValue19,
        },
        {
          18: [1, 19],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue19, [2, 3]),
        {
          12: [1, 20],
        },
        sankeyDiagramTZEHDZUNValue17(sankeyDiagramTZEHDZUNValue20, [2, 10]),
        {
          15: 21,
          16: 7,
          17: 8,
          18: sankeyDiagramTZEHDZUNValue18,
          20: sankeyDiagramTZEHDZUNValue19,
        },
        sankeyDiagramTZEHDZUNValue17([1, 5, 10], [2, 7]),
      ],
      defaultActions: {
        11: [2, 1],
        12: [2, 5],
      },
      parseError: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam24,
        sankeyDiagramTZEHDZUNParam25,
      ) {
        if (sankeyDiagramTZEHDZUNParam25.recoverable)
          this.trace(sankeyDiagramTZEHDZUNParam24);
        else {
          var sankeyDiagramTZEHDZUNValue95 = Error(
            sankeyDiagramTZEHDZUNParam24,
          );
          throw (
            (sankeyDiagramTZEHDZUNValue95.hash = sankeyDiagramTZEHDZUNParam25),
            sankeyDiagramTZEHDZUNValue95
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam1) {
        var sankeyDiagramTZEHDZUNValue22 = this,
          sankeyDiagramTZEHDZUNValue23 = [0],
          sankeyDiagramTZEHDZUNValue24 = [],
          sankeyDiagramTZEHDZUNValue25 = [null],
          sankeyDiagramTZEHDZUNValue26 = [],
          sankeyDiagramTZEHDZUNValue27 = this.table,
          sankeyDiagramTZEHDZUNValue28 = "",
          sankeyDiagramTZEHDZUNValue29 = 0,
          sankeyDiagramTZEHDZUNValue30 = 0,
          sankeyDiagramTZEHDZUNValue31 = 0,
          sankeyDiagramTZEHDZUNValue34 =
            sankeyDiagramTZEHDZUNValue26.slice.call(arguments, 1),
          sankeyDiagramTZEHDZUNValue35 = Object.create(this.lexer),
          sankeyDiagramTZEHDZUNValue36 = {
            yy: {},
          };
        for (var sankeyDiagramTZEHDZUNValue37 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            sankeyDiagramTZEHDZUNValue37,
          ) &&
            (sankeyDiagramTZEHDZUNValue36.yy[sankeyDiagramTZEHDZUNValue37] =
              this.yy[sankeyDiagramTZEHDZUNValue37]);
        sankeyDiagramTZEHDZUNValue35.setInput(
          sankeyDiagramTZEHDZUNParam1,
          sankeyDiagramTZEHDZUNValue36.yy,
        );
        sankeyDiagramTZEHDZUNValue36.yy.lexer = sankeyDiagramTZEHDZUNValue35;
        sankeyDiagramTZEHDZUNValue36.yy.parser = this;
        sankeyDiagramTZEHDZUNValue35.yylloc === undefined &&
          (sankeyDiagramTZEHDZUNValue35.yylloc = {});
        var sankeyDiagramTZEHDZUNValue38 = sankeyDiagramTZEHDZUNValue35.yylloc;
        sankeyDiagramTZEHDZUNValue26.push(sankeyDiagramTZEHDZUNValue38);
        var sankeyDiagramTZEHDZUNValue39 =
          sankeyDiagramTZEHDZUNValue35.options &&
          sankeyDiagramTZEHDZUNValue35.options.ranges;
        typeof sankeyDiagramTZEHDZUNValue36.yy.parseError == "function"
          ? (this.parseError = sankeyDiagramTZEHDZUNValue36.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function sankeyDiagramTZEHDZUNHelper2(sankeyDiagramTZEHDZUNParam37) {
          sankeyDiagramTZEHDZUNValue23.length -=
            2 * sankeyDiagramTZEHDZUNParam37;
          sankeyDiagramTZEHDZUNValue25.length -= sankeyDiagramTZEHDZUNParam37;
          sankeyDiagramTZEHDZUNValue26.length -= sankeyDiagramTZEHDZUNParam37;
        }
        chunkAGHRB4JFN(sankeyDiagramTZEHDZUNHelper2, "popStack");
        function sankeyDiagramTZEHDZUNHelper3() {
          var sankeyDiagramTZEHDZUNValue91 =
            sankeyDiagramTZEHDZUNValue24.pop() ||
            sankeyDiagramTZEHDZUNValue35.lex() ||
            1;
          return (
            typeof sankeyDiagramTZEHDZUNValue91 != "number" &&
              (sankeyDiagramTZEHDZUNValue91 instanceof Array &&
                ((sankeyDiagramTZEHDZUNValue24 = sankeyDiagramTZEHDZUNValue91),
                (sankeyDiagramTZEHDZUNValue91 =
                  sankeyDiagramTZEHDZUNValue24.pop())),
              (sankeyDiagramTZEHDZUNValue91 =
                sankeyDiagramTZEHDZUNValue22.symbols_[
                  sankeyDiagramTZEHDZUNValue91
                ] || sankeyDiagramTZEHDZUNValue91)),
            sankeyDiagramTZEHDZUNValue91
          );
        }
        chunkAGHRB4JFN(sankeyDiagramTZEHDZUNHelper3, "lex");
        for (
          var sankeyDiagramTZEHDZUNValue40,
            sankeyDiagramTZEHDZUNValue41,
            sankeyDiagramTZEHDZUNValue42,
            sankeyDiagramTZEHDZUNValue43,
            sankeyDiagramTZEHDZUNValue44,
            sankeyDiagramTZEHDZUNValue45 = {},
            sankeyDiagramTZEHDZUNValue46,
            sankeyDiagramTZEHDZUNValue47,
            sankeyDiagramTZEHDZUNValue48,
            sankeyDiagramTZEHDZUNValue49;
          ;

        ) {
          if (
            ((sankeyDiagramTZEHDZUNValue42 =
              sankeyDiagramTZEHDZUNValue23[
                sankeyDiagramTZEHDZUNValue23.length - 1
              ]),
            this.defaultActions[sankeyDiagramTZEHDZUNValue42]
              ? (sankeyDiagramTZEHDZUNValue43 =
                  this.defaultActions[sankeyDiagramTZEHDZUNValue42])
              : ((sankeyDiagramTZEHDZUNValue40 ??=
                  sankeyDiagramTZEHDZUNHelper3()),
                (sankeyDiagramTZEHDZUNValue43 =
                  sankeyDiagramTZEHDZUNValue27[sankeyDiagramTZEHDZUNValue42] &&
                  sankeyDiagramTZEHDZUNValue27[sankeyDiagramTZEHDZUNValue42][
                    sankeyDiagramTZEHDZUNValue40
                  ])),
            sankeyDiagramTZEHDZUNValue43 === undefined ||
              !sankeyDiagramTZEHDZUNValue43.length ||
              !sankeyDiagramTZEHDZUNValue43[0])
          ) {
            var sankeyDiagramTZEHDZUNValue50 = "";
            for (sankeyDiagramTZEHDZUNValue46 in ((sankeyDiagramTZEHDZUNValue49 =
              []),
            sankeyDiagramTZEHDZUNValue27[sankeyDiagramTZEHDZUNValue42]))
              this.terminals_[sankeyDiagramTZEHDZUNValue46] &&
                sankeyDiagramTZEHDZUNValue46 > 2 &&
                sankeyDiagramTZEHDZUNValue49.push(
                  "'" + this.terminals_[sankeyDiagramTZEHDZUNValue46] + "'",
                );
            sankeyDiagramTZEHDZUNValue50 =
              sankeyDiagramTZEHDZUNValue35.showPosition
                ? "Parse error on line " +
                  (sankeyDiagramTZEHDZUNValue29 + 1) +
                  ":\n" +
                  sankeyDiagramTZEHDZUNValue35.showPosition() +
                  "\nExpecting " +
                  sankeyDiagramTZEHDZUNValue49.join(", ") +
                  ", got '" +
                  (this.terminals_[sankeyDiagramTZEHDZUNValue40] ||
                    sankeyDiagramTZEHDZUNValue40) +
                  "'"
                : "Parse error on line " +
                  (sankeyDiagramTZEHDZUNValue29 + 1) +
                  ": Unexpected " +
                  (sankeyDiagramTZEHDZUNValue40 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[sankeyDiagramTZEHDZUNValue40] ||
                        sankeyDiagramTZEHDZUNValue40) +
                      "'");
            this.parseError(sankeyDiagramTZEHDZUNValue50, {
              text: sankeyDiagramTZEHDZUNValue35.match,
              token:
                this.terminals_[sankeyDiagramTZEHDZUNValue40] ||
                sankeyDiagramTZEHDZUNValue40,
              line: sankeyDiagramTZEHDZUNValue35.yylineno,
              loc: sankeyDiagramTZEHDZUNValue38,
              expected: sankeyDiagramTZEHDZUNValue49,
            });
          }
          if (
            sankeyDiagramTZEHDZUNValue43[0] instanceof Array &&
            sankeyDiagramTZEHDZUNValue43.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                sankeyDiagramTZEHDZUNValue42 +
                ", token: " +
                sankeyDiagramTZEHDZUNValue40,
            );
          switch (sankeyDiagramTZEHDZUNValue43[0]) {
            case 1:
              sankeyDiagramTZEHDZUNValue23.push(sankeyDiagramTZEHDZUNValue40);
              sankeyDiagramTZEHDZUNValue25.push(
                sankeyDiagramTZEHDZUNValue35.yytext,
              );
              sankeyDiagramTZEHDZUNValue26.push(
                sankeyDiagramTZEHDZUNValue35.yylloc,
              );
              sankeyDiagramTZEHDZUNValue23.push(
                sankeyDiagramTZEHDZUNValue43[1],
              );
              sankeyDiagramTZEHDZUNValue40 = null;
              sankeyDiagramTZEHDZUNValue41
                ? ((sankeyDiagramTZEHDZUNValue40 =
                    sankeyDiagramTZEHDZUNValue41),
                  (sankeyDiagramTZEHDZUNValue41 = null))
                : ((sankeyDiagramTZEHDZUNValue30 =
                    sankeyDiagramTZEHDZUNValue35.yyleng),
                  (sankeyDiagramTZEHDZUNValue28 =
                    sankeyDiagramTZEHDZUNValue35.yytext),
                  (sankeyDiagramTZEHDZUNValue29 =
                    sankeyDiagramTZEHDZUNValue35.yylineno),
                  (sankeyDiagramTZEHDZUNValue38 =
                    sankeyDiagramTZEHDZUNValue35.yylloc),
                  sankeyDiagramTZEHDZUNValue31 > 0 &&
                    sankeyDiagramTZEHDZUNValue31--);
              break;
            case 2:
              if (
                ((sankeyDiagramTZEHDZUNValue47 =
                  this.productions_[sankeyDiagramTZEHDZUNValue43[1]][1]),
                (sankeyDiagramTZEHDZUNValue45.$ =
                  sankeyDiagramTZEHDZUNValue25[
                    sankeyDiagramTZEHDZUNValue25.length -
                      sankeyDiagramTZEHDZUNValue47
                  ]),
                (sankeyDiagramTZEHDZUNValue45._$ = {
                  first_line:
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length -
                        (sankeyDiagramTZEHDZUNValue47 || 1)
                    ].first_line,
                  last_line:
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length - 1
                    ].last_line,
                  first_column:
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length -
                        (sankeyDiagramTZEHDZUNValue47 || 1)
                    ].first_column,
                  last_column:
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length - 1
                    ].last_column,
                }),
                sankeyDiagramTZEHDZUNValue39 &&
                  (sankeyDiagramTZEHDZUNValue45._$.range = [
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length -
                        (sankeyDiagramTZEHDZUNValue47 || 1)
                    ].range[0],
                    sankeyDiagramTZEHDZUNValue26[
                      sankeyDiagramTZEHDZUNValue26.length - 1
                    ].range[1],
                  ]),
                (sankeyDiagramTZEHDZUNValue44 = this.performAction.apply(
                  sankeyDiagramTZEHDZUNValue45,
                  [
                    sankeyDiagramTZEHDZUNValue28,
                    sankeyDiagramTZEHDZUNValue30,
                    sankeyDiagramTZEHDZUNValue29,
                    sankeyDiagramTZEHDZUNValue36.yy,
                    sankeyDiagramTZEHDZUNValue43[1],
                    sankeyDiagramTZEHDZUNValue25,
                    sankeyDiagramTZEHDZUNValue26,
                  ].concat(sankeyDiagramTZEHDZUNValue34),
                )),
                sankeyDiagramTZEHDZUNValue44 !== undefined)
              )
                return sankeyDiagramTZEHDZUNValue44;
              sankeyDiagramTZEHDZUNValue47 &&
                ((sankeyDiagramTZEHDZUNValue23 =
                  sankeyDiagramTZEHDZUNValue23.slice(
                    0,
                    -1 * sankeyDiagramTZEHDZUNValue47 * 2,
                  )),
                (sankeyDiagramTZEHDZUNValue25 =
                  sankeyDiagramTZEHDZUNValue25.slice(
                    0,
                    -1 * sankeyDiagramTZEHDZUNValue47,
                  )),
                (sankeyDiagramTZEHDZUNValue26 =
                  sankeyDiagramTZEHDZUNValue26.slice(
                    0,
                    -1 * sankeyDiagramTZEHDZUNValue47,
                  )));
              sankeyDiagramTZEHDZUNValue23.push(
                this.productions_[sankeyDiagramTZEHDZUNValue43[1]][0],
              );
              sankeyDiagramTZEHDZUNValue25.push(sankeyDiagramTZEHDZUNValue45.$);
              sankeyDiagramTZEHDZUNValue26.push(
                sankeyDiagramTZEHDZUNValue45._$,
              );
              sankeyDiagramTZEHDZUNValue48 =
                sankeyDiagramTZEHDZUNValue27[
                  sankeyDiagramTZEHDZUNValue23[
                    sankeyDiagramTZEHDZUNValue23.length - 2
                  ]
                ][
                  sankeyDiagramTZEHDZUNValue23[
                    sankeyDiagramTZEHDZUNValue23.length - 1
                  ]
                ];
              sankeyDiagramTZEHDZUNValue23.push(sankeyDiagramTZEHDZUNValue48);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  sankeyDiagramTZEHDZUNValue21.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam26,
        sankeyDiagramTZEHDZUNParam27,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            sankeyDiagramTZEHDZUNParam26,
            sankeyDiagramTZEHDZUNParam27,
          );
        else throw Error(sankeyDiagramTZEHDZUNParam26);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam9,
        sankeyDiagramTZEHDZUNParam10,
      ) {
        return (
          (this.yy = sankeyDiagramTZEHDZUNParam10 || this.yy || {}),
          (this._input = sankeyDiagramTZEHDZUNParam9),
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
        var sankeyDiagramTZEHDZUNValue85 = this._input[0];
        return (
          (this.yytext += sankeyDiagramTZEHDZUNValue85),
          this.yyleng++,
          this.offset++,
          (this.match += sankeyDiagramTZEHDZUNValue85),
          (this.matched += sankeyDiagramTZEHDZUNValue85),
          sankeyDiagramTZEHDZUNValue85.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          sankeyDiagramTZEHDZUNValue85
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam8) {
        var sankeyDiagramTZEHDZUNValue73 = sankeyDiagramTZEHDZUNParam8.length,
          sankeyDiagramTZEHDZUNValue74 =
            sankeyDiagramTZEHDZUNParam8.split(/(?:\r\n?|\n)/g);
        this._input = sankeyDiagramTZEHDZUNParam8 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - sankeyDiagramTZEHDZUNValue73,
        );
        this.offset -= sankeyDiagramTZEHDZUNValue73;
        var sankeyDiagramTZEHDZUNValue75 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        sankeyDiagramTZEHDZUNValue74.length - 1 &&
          (this.yylineno -= sankeyDiagramTZEHDZUNValue74.length - 1);
        var sankeyDiagramTZEHDZUNValue76 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: sankeyDiagramTZEHDZUNValue74
              ? (sankeyDiagramTZEHDZUNValue74.length ===
                sankeyDiagramTZEHDZUNValue75.length
                  ? this.yylloc.first_column
                  : 0) +
                sankeyDiagramTZEHDZUNValue75[
                  sankeyDiagramTZEHDZUNValue75.length -
                    sankeyDiagramTZEHDZUNValue74.length
                ].length -
                sankeyDiagramTZEHDZUNValue74[0].length
              : this.yylloc.first_column - sankeyDiagramTZEHDZUNValue73,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              sankeyDiagramTZEHDZUNValue76[0],
              sankeyDiagramTZEHDZUNValue76[0] +
                this.yyleng -
                sankeyDiagramTZEHDZUNValue73,
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
      less: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam39) {
        this.unput(this.match.slice(sankeyDiagramTZEHDZUNParam39));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var sankeyDiagramTZEHDZUNValue90 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (sankeyDiagramTZEHDZUNValue90.length > 20 ? "..." : "") +
          sankeyDiagramTZEHDZUNValue90.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var sankeyDiagramTZEHDZUNValue89 = this.match;
        return (
          sankeyDiagramTZEHDZUNValue89.length < 20 &&
            (sankeyDiagramTZEHDZUNValue89 += this._input.substr(
              0,
              20 - sankeyDiagramTZEHDZUNValue89.length,
            )),
          (
            sankeyDiagramTZEHDZUNValue89.substr(0, 20) +
            (sankeyDiagramTZEHDZUNValue89.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var sankeyDiagramTZEHDZUNValue92 = this.pastInput(),
          sankeyDiagramTZEHDZUNValue93 = Array(
            sankeyDiagramTZEHDZUNValue92.length + 1,
          ).join("-");
        return (
          sankeyDiagramTZEHDZUNValue92 +
          this.upcomingInput() +
          "\n" +
          sankeyDiagramTZEHDZUNValue93 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam6,
        sankeyDiagramTZEHDZUNParam7,
      ) {
        var sankeyDiagramTZEHDZUNValue69,
          sankeyDiagramTZEHDZUNValue70,
          sankeyDiagramTZEHDZUNValue71;
        if (
          (this.options.backtrack_lexer &&
            ((sankeyDiagramTZEHDZUNValue71 = {
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
              (sankeyDiagramTZEHDZUNValue71.yylloc.range =
                this.yylloc.range.slice(0))),
          (sankeyDiagramTZEHDZUNValue70 =
            sankeyDiagramTZEHDZUNParam6[0].match(/(?:\r\n?|\n).*/g)),
          sankeyDiagramTZEHDZUNValue70 &&
            (this.yylineno += sankeyDiagramTZEHDZUNValue70.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: sankeyDiagramTZEHDZUNValue70
              ? sankeyDiagramTZEHDZUNValue70[
                  sankeyDiagramTZEHDZUNValue70.length - 1
                ].length -
                sankeyDiagramTZEHDZUNValue70[
                  sankeyDiagramTZEHDZUNValue70.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + sankeyDiagramTZEHDZUNParam6[0].length,
          }),
          (this.yytext += sankeyDiagramTZEHDZUNParam6[0]),
          (this.match += sankeyDiagramTZEHDZUNParam6[0]),
          (this.matches = sankeyDiagramTZEHDZUNParam6),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            sankeyDiagramTZEHDZUNParam6[0].length,
          )),
          (this.matched += sankeyDiagramTZEHDZUNParam6[0]),
          (sankeyDiagramTZEHDZUNValue69 = this.performAction.call(
            this,
            this.yy,
            this,
            sankeyDiagramTZEHDZUNParam7,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          sankeyDiagramTZEHDZUNValue69)
        )
          return sankeyDiagramTZEHDZUNValue69;
        if (this._backtrack) {
          for (var sankeyDiagramTZEHDZUNValue72 in sankeyDiagramTZEHDZUNValue71)
            this[sankeyDiagramTZEHDZUNValue72] =
              sankeyDiagramTZEHDZUNValue71[sankeyDiagramTZEHDZUNValue72];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var sankeyDiagramTZEHDZUNValue77,
          sankeyDiagramTZEHDZUNValue78,
          sankeyDiagramTZEHDZUNValue79,
          sankeyDiagramTZEHDZUNValue80;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var sankeyDiagramTZEHDZUNValue81 = this._currentRules(),
            sankeyDiagramTZEHDZUNValue82 = 0;
          sankeyDiagramTZEHDZUNValue82 < sankeyDiagramTZEHDZUNValue81.length;
          sankeyDiagramTZEHDZUNValue82++
        )
          if (
            ((sankeyDiagramTZEHDZUNValue79 = this._input.match(
              this.rules[
                sankeyDiagramTZEHDZUNValue81[sankeyDiagramTZEHDZUNValue82]
              ],
            )),
            sankeyDiagramTZEHDZUNValue79 &&
              (!sankeyDiagramTZEHDZUNValue78 ||
                sankeyDiagramTZEHDZUNValue79[0].length >
                  sankeyDiagramTZEHDZUNValue78[0].length))
          ) {
            if (
              ((sankeyDiagramTZEHDZUNValue78 = sankeyDiagramTZEHDZUNValue79),
              (sankeyDiagramTZEHDZUNValue80 = sankeyDiagramTZEHDZUNValue82),
              this.options.backtrack_lexer)
            ) {
              if (
                ((sankeyDiagramTZEHDZUNValue77 = this.test_match(
                  sankeyDiagramTZEHDZUNValue79,
                  sankeyDiagramTZEHDZUNValue81[sankeyDiagramTZEHDZUNValue82],
                )),
                sankeyDiagramTZEHDZUNValue77 !== false)
              )
                return sankeyDiagramTZEHDZUNValue77;
              if (this._backtrack) {
                sankeyDiagramTZEHDZUNValue78 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return sankeyDiagramTZEHDZUNValue78
          ? ((sankeyDiagramTZEHDZUNValue77 = this.test_match(
              sankeyDiagramTZEHDZUNValue78,
              sankeyDiagramTZEHDZUNValue81[sankeyDiagramTZEHDZUNValue80],
            )),
            sankeyDiagramTZEHDZUNValue77 === false
              ? false
              : sankeyDiagramTZEHDZUNValue77)
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
      begin: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam42) {
        this.conditionStack.push(sankeyDiagramTZEHDZUNParam42);
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
      topState: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam22) {
        return (
          (sankeyDiagramTZEHDZUNParam22 =
            this.conditionStack.length -
            1 -
            Math.abs(sankeyDiagramTZEHDZUNParam22 || 0)),
          sankeyDiagramTZEHDZUNParam22 >= 0
            ? this.conditionStack[sankeyDiagramTZEHDZUNParam22]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (sankeyDiagramTZEHDZUNParam48) {
        this.begin(sankeyDiagramTZEHDZUNParam48);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        sankeyDiagramTZEHDZUNParam18,
        sankeyDiagramTZEHDZUNParam19,
        sankeyDiagramTZEHDZUNParam20,
        sankeyDiagramTZEHDZUNParam21,
      ) {
        switch (sankeyDiagramTZEHDZUNParam20) {
          case 0:
            return (this.pushState("csv"), 4);
          case 1:
            return (this.pushState("csv"), 4);
          case 2:
            return 10;
          case 3:
            return 5;
          case 4:
            return 12;
          case 5:
            return (this.pushState("escaped_text"), 18);
          case 6:
            return 20;
          case 7:
            return (this.popState("escaped_text"), 18);
          case 8:
            return 19;
        }
      }, "anonymous"),
      rules: [
        /^(?:sankey-beta\b)/i,
        /^(?:sankey\b)/i,
        /^(?:$)/i,
        /^(?:((\u000D\u000A)|(\u000A)))/i,
        /^(?:(\u002C))/i,
        /^(?:(\u0022))/i,
        /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
        /^(?:(\u0022)(?!(\u0022)))/i,
        /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i,
      ],
      conditions: {
        csv: {
          rules: [2, 3, 4, 5, 6, 7, 8],
          inclusive: false,
        },
        escaped_text: {
          rules: [7, 8],
          inclusive: false,
        },
        INITIAL: {
          rules: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          inclusive: true,
        },
      },
    };
  })();
  function sankeyDiagramTZEHDZUNHelper1() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(sankeyDiagramTZEHDZUNHelper1, "Parser"),
    (sankeyDiagramTZEHDZUNHelper1.prototype = sankeyDiagramTZEHDZUNValue21),
    (sankeyDiagramTZEHDZUNValue21.Parser = sankeyDiagramTZEHDZUNHelper1),
    new sankeyDiagramTZEHDZUNHelper1()
  );
})();
sankeyDiagramTZEHDZUNValue1.parser = sankeyDiagramTZEHDZUNValue1;
var sankeyDiagramTZEHDZUNValue2 = sankeyDiagramTZEHDZUNValue1,
  sankeyDiagramTZEHDZUNValue3 = [],
  sankeyDiagramTZEHDZUNValue4 = [],
  sankeyDiagramTZEHDZUNValue5 = new Map(),
  sankeyDiagramTZEHDZUNValue6 = chunkAGHRB4JFN(() => {
    sankeyDiagramTZEHDZUNValue3 = [];
    sankeyDiagramTZEHDZUNValue4 = [];
    sankeyDiagramTZEHDZUNValue5 = new Map();
    _chunkABZYJK2DK();
  }, "clear"),
  sankeyDiagramTZEHDZUNValue7 = class {
    constructor(
      sankeyDiagramTZEHDZUNParam33,
      sankeyDiagramTZEHDZUNParam34,
      sankeyDiagramTZEHDZUNParam35 = 0,
    ) {
      this.source = sankeyDiagramTZEHDZUNParam33;
      this.target = sankeyDiagramTZEHDZUNParam34;
      this.value = sankeyDiagramTZEHDZUNParam35;
    }
    static {
      chunkAGHRB4JFN(this, "SankeyLink");
    }
  },
  sankeyDiagramTZEHDZUNValue8 = chunkAGHRB4JFN(
    (
      sankeyDiagramTZEHDZUNParam44,
      sankeyDiagramTZEHDZUNParam45,
      sankeyDiagramTZEHDZUNParam46,
    ) => {
      sankeyDiagramTZEHDZUNValue3.push(
        new sankeyDiagramTZEHDZUNValue7(
          sankeyDiagramTZEHDZUNParam44,
          sankeyDiagramTZEHDZUNParam45,
          sankeyDiagramTZEHDZUNParam46,
        ),
      );
    },
    "addLink",
  ),
  sankeyDiagramTZEHDZUNValue9 = class {
    constructor(sankeyDiagramTZEHDZUNParam49) {
      this.ID = sankeyDiagramTZEHDZUNParam49;
    }
    static {
      chunkAGHRB4JFN(this, "SankeyNode");
    }
  },
  sankeyDiagramTZEHDZUNValue10 = {
    nodesMap: sankeyDiagramTZEHDZUNValue5,
    getConfig: chunkAGHRB4JFN(() => _chunkABZYJK2DB().sankey, "getConfig"),
    getNodes: chunkAGHRB4JFN(() => sankeyDiagramTZEHDZUNValue4, "getNodes"),
    getLinks: chunkAGHRB4JFN(() => sankeyDiagramTZEHDZUNValue3, "getLinks"),
    getGraph: chunkAGHRB4JFN(
      () => ({
        nodes: sankeyDiagramTZEHDZUNValue4.map((item) => ({
          id: item.ID,
        })),
        links: sankeyDiagramTZEHDZUNValue3.map((item) => ({
          source: item.source.ID,
          target: item.target.ID,
          value: item.value,
        })),
      }),
      "getGraph",
    ),
    addLink: sankeyDiagramTZEHDZUNValue8,
    findOrCreateNode: chunkAGHRB4JFN((sankeyDiagramTZEHDZUNParam23) => {
      sankeyDiagramTZEHDZUNParam23 = chunkABZYJK2DM.sanitizeText(
        sankeyDiagramTZEHDZUNParam23,
        _chunkABZYJK2DB(),
      );
      let sankeyDiagramTZEHDZUNValue94 = sankeyDiagramTZEHDZUNValue5.get(
        sankeyDiagramTZEHDZUNParam23,
      );
      return (
        sankeyDiagramTZEHDZUNValue94 === undefined &&
          ((sankeyDiagramTZEHDZUNValue94 = new sankeyDiagramTZEHDZUNValue9(
            sankeyDiagramTZEHDZUNParam23,
          )),
          sankeyDiagramTZEHDZUNValue5.set(
            sankeyDiagramTZEHDZUNParam23,
            sankeyDiagramTZEHDZUNValue94,
          ),
          sankeyDiagramTZEHDZUNValue4.push(sankeyDiagramTZEHDZUNValue94)),
        sankeyDiagramTZEHDZUNValue94
      );
    }, "findOrCreateNode"),
    getAccTitle: chunkABZYJK2DR,
    setAccTitle: chunkABZYJK2DN,
    getAccDescription: chunkABZYJK2DJ,
    setAccDescription: chunkABZYJK2DZ,
    getDiagramTitle: chunkABZYJK2DF,
    setDiagramTitle: _chunkABZYJK2DC,
    clear: sankeyDiagramTZEHDZUNValue6,
  },
  sankeyDiagramTZEHDZUNValue11 = class SankeyDiagramTZEHDZUNClass1 {
    static {
      chunkAGHRB4JFN(this, "Uid");
    }
    static {
      this.count = 0;
    }
    static next(sankeyDiagramTZEHDZUNParam41) {
      return new SankeyDiagramTZEHDZUNClass1(
        sankeyDiagramTZEHDZUNParam41 + ++SankeyDiagramTZEHDZUNClass1.count,
      );
    }
    constructor(sankeyDiagramTZEHDZUNParam40) {
      this.id = sankeyDiagramTZEHDZUNParam40;
      this.href = `#${sankeyDiagramTZEHDZUNParam40}`;
    }
    toString() {
      return "url(" + this.href + ")";
    }
  },
  sankeyDiagramTZEHDZUNValue12 = {
    left: sankeyLinkHorizontalA,
    right: sankeyLinkHorizontalO,
    center: sankeyLinkHorizontalR,
    justify: sankeyLinkHorizontalI,
  },
  sankeyDiagramTZEHDZUNValue13 = {
    draw: chunkAGHRB4JFN(function (
      sankeyDiagramTZEHDZUNParam2,
      sankeyDiagramTZEHDZUNParam3,
      sankeyDiagramTZEHDZUNParam4,
      sankeyDiagramTZEHDZUNParam5,
    ) {
      let { securityLevel, sankey } = _chunkABZYJK2DB(),
        sankeyDiagramTZEHDZUNValue51 = _chunkABZYJK2DU.sankey,
        sankeyDiagramTZEHDZUNValue52;
      securityLevel === "sandbox" &&
        (sankeyDiagramTZEHDZUNValue52 = Src(
          "#i" + sankeyDiagramTZEHDZUNParam3,
        ));
      let sankeyDiagramTZEHDZUNValue53 = Src(
          securityLevel === "sandbox"
            ? sankeyDiagramTZEHDZUNValue52.nodes()[0].contentDocument.body
            : "body",
        ),
        sankeyDiagramTZEHDZUNValue54 =
          securityLevel === "sandbox"
            ? sankeyDiagramTZEHDZUNValue53.select(
                `[id="${sankeyDiagramTZEHDZUNParam3}"]`,
              )
            : Src(`[id="${sankeyDiagramTZEHDZUNParam3}"]`),
        sankeyDiagramTZEHDZUNValue55 =
          sankey?.width ?? sankeyDiagramTZEHDZUNValue51.width,
        sankeyDiagramTZEHDZUNValue56 =
          sankey?.height ?? sankeyDiagramTZEHDZUNValue51.width,
        sankeyDiagramTZEHDZUNValue57 =
          sankey?.useMaxWidth ?? sankeyDiagramTZEHDZUNValue51.useMaxWidth,
        sankeyDiagramTZEHDZUNValue58 =
          sankey?.nodeAlignment ?? sankeyDiagramTZEHDZUNValue51.nodeAlignment,
        sankeyDiagramTZEHDZUNValue59 =
          sankey?.prefix ?? sankeyDiagramTZEHDZUNValue51.prefix,
        sankeyDiagramTZEHDZUNValue60 =
          sankey?.suffix ?? sankeyDiagramTZEHDZUNValue51.suffix,
        sankeyDiagramTZEHDZUNValue61 =
          sankey?.showValues ?? sankeyDiagramTZEHDZUNValue51.showValues,
        sankeyDiagramTZEHDZUNValue62 =
          sankeyDiagramTZEHDZUNParam5.db.getGraph(),
        sankeyDiagramTZEHDZUNValue63 =
          sankeyDiagramTZEHDZUNValue12[sankeyDiagramTZEHDZUNValue58];
      sankeyLinkHorizontalN()
        .nodeId(
          (sankeyDiagramTZEHDZUNParam62) => sankeyDiagramTZEHDZUNParam62.id,
        )
        .nodeWidth(10)
        .nodePadding(10 + (sankeyDiagramTZEHDZUNValue61 ? 15 : 0))
        .nodeAlign(sankeyDiagramTZEHDZUNValue63)
        .extent([
          [0, 0],
          [sankeyDiagramTZEHDZUNValue55, sankeyDiagramTZEHDZUNValue56],
        ])(sankeyDiagramTZEHDZUNValue62);
      let sankeyDiagramTZEHDZUNValue64 = Ordinal(tableau10T);
      sankeyDiagramTZEHDZUNValue54
        .append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(sankeyDiagramTZEHDZUNValue62.nodes)
        .join("g")
        .attr("class", "node")
        .attr(
          "id",
          (sankeyDiagramTZEHDZUNParam47) =>
            (sankeyDiagramTZEHDZUNParam47.uid =
              sankeyDiagramTZEHDZUNValue11.next("node-")).id,
        )
        .attr("transform", function (sankeyDiagramTZEHDZUNParam38) {
          return (
            "translate(" +
            sankeyDiagramTZEHDZUNParam38.x0 +
            "," +
            sankeyDiagramTZEHDZUNParam38.y0 +
            ")"
          );
        })
        .attr(
          "x",
          (sankeyDiagramTZEHDZUNParam63) => sankeyDiagramTZEHDZUNParam63.x0,
        )
        .attr(
          "y",
          (sankeyDiagramTZEHDZUNParam64) => sankeyDiagramTZEHDZUNParam64.y0,
        )
        .append("rect")
        .attr(
          "height",
          (sankeyDiagramTZEHDZUNParam57) =>
            sankeyDiagramTZEHDZUNParam57.y1 - sankeyDiagramTZEHDZUNParam57.y0,
        )
        .attr(
          "width",
          (sankeyDiagramTZEHDZUNParam58) =>
            sankeyDiagramTZEHDZUNParam58.x1 - sankeyDiagramTZEHDZUNParam58.x0,
        )
        .attr("fill", (sankeyDiagramTZEHDZUNParam59) =>
          sankeyDiagramTZEHDZUNValue64(sankeyDiagramTZEHDZUNParam59.id),
        );
      let sankeyDiagramTZEHDZUNValue65 = chunkAGHRB4JFN(
        ({ id, value }) =>
          sankeyDiagramTZEHDZUNValue61
            ? `${id}
${sankeyDiagramTZEHDZUNValue59}${Math.round(value * 100) / 100}${sankeyDiagramTZEHDZUNValue60}`
            : id,
        "getText",
      );
      sankeyDiagramTZEHDZUNValue54
        .append("g")
        .attr("class", "node-labels")
        .attr("font-size", 14)
        .selectAll("text")
        .data(sankeyDiagramTZEHDZUNValue62.nodes)
        .join("text")
        .attr("x", (sankeyDiagramTZEHDZUNParam50) =>
          sankeyDiagramTZEHDZUNParam50.x0 < sankeyDiagramTZEHDZUNValue55 / 2
            ? sankeyDiagramTZEHDZUNParam50.x1 + 6
            : sankeyDiagramTZEHDZUNParam50.x0 - 6,
        )
        .attr(
          "y",
          (sankeyDiagramTZEHDZUNParam55) =>
            (sankeyDiagramTZEHDZUNParam55.y1 +
              sankeyDiagramTZEHDZUNParam55.y0) /
            2,
        )
        .attr("dy", `${sankeyDiagramTZEHDZUNValue61 ? "0" : "0.35"}em`)
        .attr("text-anchor", (sankeyDiagramTZEHDZUNParam51) =>
          sankeyDiagramTZEHDZUNParam51.x0 < sankeyDiagramTZEHDZUNValue55 / 2
            ? "start"
            : "end",
        )
        .text(sankeyDiagramTZEHDZUNValue65);
      let sankeyDiagramTZEHDZUNValue66 = sankeyDiagramTZEHDZUNValue54
          .append("g")
          .attr("class", "links")
          .attr("fill", "none")
          .attr("stroke-opacity", 0.5)
          .selectAll(".link")
          .data(sankeyDiagramTZEHDZUNValue62.links)
          .join("g")
          .attr("class", "link")
          .style("mix-blend-mode", "multiply"),
        sankeyDiagramTZEHDZUNValue67 = sankey?.linkColor ?? "gradient";
      if (sankeyDiagramTZEHDZUNValue67 === "gradient") {
        let sankeyDiagramTZEHDZUNValue83 = sankeyDiagramTZEHDZUNValue66
          .append("linearGradient")
          .attr(
            "id",
            (sankeyDiagramTZEHDZUNParam43) =>
              (sankeyDiagramTZEHDZUNParam43.uid =
                sankeyDiagramTZEHDZUNValue11.next("linearGradient-")).id,
          )
          .attr("gradientUnits", "userSpaceOnUse")
          .attr(
            "x1",
            (sankeyDiagramTZEHDZUNParam56) =>
              sankeyDiagramTZEHDZUNParam56.source.x1,
          )
          .attr("x2", (event) => event.target.x0);
        sankeyDiagramTZEHDZUNValue83
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", (sankeyDiagramTZEHDZUNParam53) =>
            sankeyDiagramTZEHDZUNValue64(
              sankeyDiagramTZEHDZUNParam53.source.id,
            ),
          );
        sankeyDiagramTZEHDZUNValue83
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", (event) =>
            sankeyDiagramTZEHDZUNValue64(event.target.id),
          );
      }
      let sankeyDiagramTZEHDZUNValue68;
      switch (sankeyDiagramTZEHDZUNValue67) {
        case "gradient":
          sankeyDiagramTZEHDZUNValue68 = chunkAGHRB4JFN(
            (sankeyDiagramTZEHDZUNParam61) => sankeyDiagramTZEHDZUNParam61.uid,
            "coloring",
          );
          break;
        case "source":
          sankeyDiagramTZEHDZUNValue68 = chunkAGHRB4JFN(
            (sankeyDiagramTZEHDZUNParam54) =>
              sankeyDiagramTZEHDZUNValue64(
                sankeyDiagramTZEHDZUNParam54.source.id,
              ),
            "coloring",
          );
          break;
        case "target":
          sankeyDiagramTZEHDZUNValue68 = chunkAGHRB4JFN(
            (event) => sankeyDiagramTZEHDZUNValue64(event.target.id),
            "coloring",
          );
          break;
        default:
          sankeyDiagramTZEHDZUNValue68 = sankeyDiagramTZEHDZUNValue67;
      }
      sankeyDiagramTZEHDZUNValue66
        .append("path")
        .attr("d", sankeyLinkHorizontalT())
        .attr("stroke", sankeyDiagramTZEHDZUNValue68)
        .attr("stroke-width", (sankeyDiagramTZEHDZUNParam52) =>
          Math.max(1, sankeyDiagramTZEHDZUNParam52.width),
        );
      _chunkABZYJK2DR(
        undefined,
        sankeyDiagramTZEHDZUNValue54,
        0,
        sankeyDiagramTZEHDZUNValue57,
      );
    }, "draw"),
  },
  sankeyDiagramTZEHDZUNValue14 = chunkAGHRB4JFN(
    (sankeyDiagramTZEHDZUNParam28) =>
      sankeyDiagramTZEHDZUNParam28
        .replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "")
        .replaceAll(/([\n\r])+/g, "\n")
        .trim(),
    "prepareTextForParsing",
  ),
  sankeyDiagramTZEHDZUNValue15 = chunkAGHRB4JFN(
    (sankeyDiagramTZEHDZUNParam36) => `.label {
      font-family: ${sankeyDiagramTZEHDZUNParam36.fontFamily};
    }`,
    "getStyles",
  ),
  sankeyDiagramTZEHDZUNValue16 = sankeyDiagramTZEHDZUNValue2.parse.bind(
    sankeyDiagramTZEHDZUNValue2,
  );
sankeyDiagramTZEHDZUNValue2.parse = (sankeyDiagramTZEHDZUNParam60) =>
  sankeyDiagramTZEHDZUNValue16(
    sankeyDiagramTZEHDZUNValue14(sankeyDiagramTZEHDZUNParam60),
  );
export const SankeyDiagramTZEHDZUN = {
  styles: sankeyDiagramTZEHDZUNValue15,
  parser: sankeyDiagramTZEHDZUNValue2,
  db: sankeyDiagramTZEHDZUNValue10,
  renderer: sankeyDiagramTZEHDZUNValue13,
};
