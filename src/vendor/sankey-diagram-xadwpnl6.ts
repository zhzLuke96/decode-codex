// Restored from ref/webview/assets/sankeyDiagram-XADWPNL6-CXgjy9x6.js
// Flat boundary. Vendored sankeyDiagramXADWPNL6 chunk restored from the Codex webview bundle.
import { tableau10T } from "./d3-tableau10";
import { Src } from "./roughjs-geometry";
import { Ordinal } from "../utils/ordinal";
import {
  sankeyLinkHorizontalA,
  sankeyLinkHorizontalI,
  sankeyLinkHorizontalN,
  sankeyLinkHorizontalO,
  sankeyLinkHorizontalR,
  sankeyLinkHorizontalT,
} from "./d3-sankey-link-horizontal";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXN as _chunkICPOFSXXB,
  _chunkICPOFSXXC as _chunkICPOFSXXV,
  _chunkICPOFSXXL,
  _chunkICPOFSXXN,
  chunkICPOFSXXF,
  _chunkICPOFSXXS,
  _chunkICPOFSXXO,
  chunkICPOFSXXQ,
  _chunkICPOFSXXK,
  _chunkICPOFSXXC,
  _chunkICPOFSXXD,
} from "./chunk-icpofsxx";
var sankeyDiagramXADWPNL6Value1 = (function () {
  var sankeyDiagramXADWPNL6Value17 = chunkAGHRB4JFN(function (
      sankeyDiagramXADWPNL6Param29,
      sankeyDiagramXADWPNL6Param30,
      sankeyDiagramXADWPNL6Param31,
      sankeyDiagramXADWPNL6Param32,
    ) {
      for (
        sankeyDiagramXADWPNL6Param31 ||= {},
          sankeyDiagramXADWPNL6Param32 = sankeyDiagramXADWPNL6Param29.length;
        sankeyDiagramXADWPNL6Param32--;
        sankeyDiagramXADWPNL6Param31[
          sankeyDiagramXADWPNL6Param29[sankeyDiagramXADWPNL6Param32]
        ] = sankeyDiagramXADWPNL6Param30
      );
      return sankeyDiagramXADWPNL6Param31;
    }, "o"),
    sankeyDiagramXADWPNL6Value18 = [1, 9],
    sankeyDiagramXADWPNL6Value19 = [1, 10],
    sankeyDiagramXADWPNL6Value20 = [1, 5, 10, 12],
    sankeyDiagramXADWPNL6Value21 = {
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
        sankeyDiagramXADWPNL6Param11,
        sankeyDiagramXADWPNL6Param12,
        sankeyDiagramXADWPNL6Param13,
        sankeyDiagramXADWPNL6Param14,
        sankeyDiagramXADWPNL6Param15,
        sankeyDiagramXADWPNL6Param16,
        sankeyDiagramXADWPNL6Param17,
      ) {
        var sankeyDiagramXADWPNL6Value84 =
          sankeyDiagramXADWPNL6Param16.length - 1;
        switch (sankeyDiagramXADWPNL6Param15) {
          case 7:
            let sankeyDiagramXADWPNL6Value86 =
                sankeyDiagramXADWPNL6Param14.findOrCreateNode(
                  sankeyDiagramXADWPNL6Param16[sankeyDiagramXADWPNL6Value84 - 4]
                    .trim()
                    .replaceAll('""', '"'),
                ),
              sankeyDiagramXADWPNL6Value87 =
                sankeyDiagramXADWPNL6Param14.findOrCreateNode(
                  sankeyDiagramXADWPNL6Param16[sankeyDiagramXADWPNL6Value84 - 2]
                    .trim()
                    .replaceAll('""', '"'),
                ),
              sankeyDiagramXADWPNL6Value88 = parseFloat(
                sankeyDiagramXADWPNL6Param16[
                  sankeyDiagramXADWPNL6Value84
                ].trim(),
              );
            sankeyDiagramXADWPNL6Param14.addLink(
              sankeyDiagramXADWPNL6Value86,
              sankeyDiagramXADWPNL6Value87,
              sankeyDiagramXADWPNL6Value88,
            );
            break;
          case 8:
          case 9:
          case 11:
            this.$ = sankeyDiagramXADWPNL6Param16[sankeyDiagramXADWPNL6Value84];
            break;
          case 10:
            this.$ =
              sankeyDiagramXADWPNL6Param16[sankeyDiagramXADWPNL6Value84 - 1];
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
          18: sankeyDiagramXADWPNL6Value18,
          20: sankeyDiagramXADWPNL6Value19,
        },
        {
          1: [2, 6],
          7: 11,
          10: [1, 12],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value19, [2, 4], {
          9: 13,
          5: [1, 14],
        }),
        {
          12: [1, 15],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value20, [2, 8]),
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value20, [2, 9]),
        {
          19: [1, 16],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value20, [2, 11]),
        {
          1: [2, 1],
        },
        {
          1: [2, 5],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value19, [2, 2]),
        {
          6: 17,
          8: 5,
          15: 6,
          16: 7,
          17: 8,
          18: sankeyDiagramXADWPNL6Value18,
          20: sankeyDiagramXADWPNL6Value19,
        },
        {
          15: 18,
          16: 7,
          17: 8,
          18: sankeyDiagramXADWPNL6Value18,
          20: sankeyDiagramXADWPNL6Value19,
        },
        {
          18: [1, 19],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value19, [2, 3]),
        {
          12: [1, 20],
        },
        sankeyDiagramXADWPNL6Value17(sankeyDiagramXADWPNL6Value20, [2, 10]),
        {
          15: 21,
          16: 7,
          17: 8,
          18: sankeyDiagramXADWPNL6Value18,
          20: sankeyDiagramXADWPNL6Value19,
        },
        sankeyDiagramXADWPNL6Value17([1, 5, 10], [2, 7]),
      ],
      defaultActions: {
        11: [2, 1],
        12: [2, 5],
      },
      parseError: chunkAGHRB4JFN(function (
        sankeyDiagramXADWPNL6Param24,
        sankeyDiagramXADWPNL6Param25,
      ) {
        if (sankeyDiagramXADWPNL6Param25.recoverable)
          this.trace(sankeyDiagramXADWPNL6Param24);
        else {
          var sankeyDiagramXADWPNL6Value95 = Error(
            sankeyDiagramXADWPNL6Param24,
          );
          throw (
            (sankeyDiagramXADWPNL6Value95.hash = sankeyDiagramXADWPNL6Param25),
            sankeyDiagramXADWPNL6Value95
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param1) {
        var sankeyDiagramXADWPNL6Value22 = this,
          sankeyDiagramXADWPNL6Value23 = [0],
          sankeyDiagramXADWPNL6Value24 = [],
          sankeyDiagramXADWPNL6Value25 = [null],
          sankeyDiagramXADWPNL6Value26 = [],
          sankeyDiagramXADWPNL6Value27 = this.table,
          sankeyDiagramXADWPNL6Value28 = "",
          sankeyDiagramXADWPNL6Value29 = 0,
          sankeyDiagramXADWPNL6Value30 = 0,
          sankeyDiagramXADWPNL6Value31 = 0,
          sankeyDiagramXADWPNL6Value34 =
            sankeyDiagramXADWPNL6Value26.slice.call(arguments, 1),
          sankeyDiagramXADWPNL6Value35 = Object.create(this.lexer),
          sankeyDiagramXADWPNL6Value36 = {
            yy: {},
          };
        for (var sankeyDiagramXADWPNL6Value37 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            sankeyDiagramXADWPNL6Value37,
          ) &&
            (sankeyDiagramXADWPNL6Value36.yy[sankeyDiagramXADWPNL6Value37] =
              this.yy[sankeyDiagramXADWPNL6Value37]);
        sankeyDiagramXADWPNL6Value35.setInput(
          sankeyDiagramXADWPNL6Param1,
          sankeyDiagramXADWPNL6Value36.yy,
        );
        sankeyDiagramXADWPNL6Value36.yy.lexer = sankeyDiagramXADWPNL6Value35;
        sankeyDiagramXADWPNL6Value36.yy.parser = this;
        sankeyDiagramXADWPNL6Value35.yylloc === undefined &&
          (sankeyDiagramXADWPNL6Value35.yylloc = {});
        var sankeyDiagramXADWPNL6Value38 = sankeyDiagramXADWPNL6Value35.yylloc;
        sankeyDiagramXADWPNL6Value26.push(sankeyDiagramXADWPNL6Value38);
        var sankeyDiagramXADWPNL6Value39 =
          sankeyDiagramXADWPNL6Value35.options &&
          sankeyDiagramXADWPNL6Value35.options.ranges;
        typeof sankeyDiagramXADWPNL6Value36.yy.parseError == "function"
          ? (this.parseError = sankeyDiagramXADWPNL6Value36.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function sankeyDiagramXADWPNL6Helper2(sankeyDiagramXADWPNL6Param37) {
          sankeyDiagramXADWPNL6Value23.length -=
            2 * sankeyDiagramXADWPNL6Param37;
          sankeyDiagramXADWPNL6Value25.length -= sankeyDiagramXADWPNL6Param37;
          sankeyDiagramXADWPNL6Value26.length -= sankeyDiagramXADWPNL6Param37;
        }
        chunkAGHRB4JFN(sankeyDiagramXADWPNL6Helper2, "popStack");
        function sankeyDiagramXADWPNL6Helper3() {
          var sankeyDiagramXADWPNL6Value91 =
            sankeyDiagramXADWPNL6Value24.pop() ||
            sankeyDiagramXADWPNL6Value35.lex() ||
            1;
          return (
            typeof sankeyDiagramXADWPNL6Value91 != "number" &&
              (sankeyDiagramXADWPNL6Value91 instanceof Array &&
                ((sankeyDiagramXADWPNL6Value24 = sankeyDiagramXADWPNL6Value91),
                (sankeyDiagramXADWPNL6Value91 =
                  sankeyDiagramXADWPNL6Value24.pop())),
              (sankeyDiagramXADWPNL6Value91 =
                sankeyDiagramXADWPNL6Value22.symbols_[
                  sankeyDiagramXADWPNL6Value91
                ] || sankeyDiagramXADWPNL6Value91)),
            sankeyDiagramXADWPNL6Value91
          );
        }
        chunkAGHRB4JFN(sankeyDiagramXADWPNL6Helper3, "lex");
        for (
          var sankeyDiagramXADWPNL6Value40,
            sankeyDiagramXADWPNL6Value41,
            sankeyDiagramXADWPNL6Value42,
            sankeyDiagramXADWPNL6Value43,
            sankeyDiagramXADWPNL6Value44,
            sankeyDiagramXADWPNL6Value45 = {},
            sankeyDiagramXADWPNL6Value46,
            sankeyDiagramXADWPNL6Value47,
            sankeyDiagramXADWPNL6Value48,
            sankeyDiagramXADWPNL6Value49;
          ;

        ) {
          if (
            ((sankeyDiagramXADWPNL6Value42 =
              sankeyDiagramXADWPNL6Value23[
                sankeyDiagramXADWPNL6Value23.length - 1
              ]),
            this.defaultActions[sankeyDiagramXADWPNL6Value42]
              ? (sankeyDiagramXADWPNL6Value43 =
                  this.defaultActions[sankeyDiagramXADWPNL6Value42])
              : ((sankeyDiagramXADWPNL6Value40 ??=
                  sankeyDiagramXADWPNL6Helper3()),
                (sankeyDiagramXADWPNL6Value43 =
                  sankeyDiagramXADWPNL6Value27[sankeyDiagramXADWPNL6Value42] &&
                  sankeyDiagramXADWPNL6Value27[sankeyDiagramXADWPNL6Value42][
                    sankeyDiagramXADWPNL6Value40
                  ])),
            sankeyDiagramXADWPNL6Value43 === undefined ||
              !sankeyDiagramXADWPNL6Value43.length ||
              !sankeyDiagramXADWPNL6Value43[0])
          ) {
            var sankeyDiagramXADWPNL6Value50 = "";
            for (sankeyDiagramXADWPNL6Value46 in ((sankeyDiagramXADWPNL6Value49 =
              []),
            sankeyDiagramXADWPNL6Value27[sankeyDiagramXADWPNL6Value42]))
              this.terminals_[sankeyDiagramXADWPNL6Value46] &&
                sankeyDiagramXADWPNL6Value46 > 2 &&
                sankeyDiagramXADWPNL6Value49.push(
                  "'" + this.terminals_[sankeyDiagramXADWPNL6Value46] + "'",
                );
            sankeyDiagramXADWPNL6Value50 =
              sankeyDiagramXADWPNL6Value35.showPosition
                ? "Parse error on line " +
                  (sankeyDiagramXADWPNL6Value29 + 1) +
                  ":\n" +
                  sankeyDiagramXADWPNL6Value35.showPosition() +
                  "\nExpecting " +
                  sankeyDiagramXADWPNL6Value49.join(", ") +
                  ", got '" +
                  (this.terminals_[sankeyDiagramXADWPNL6Value40] ||
                    sankeyDiagramXADWPNL6Value40) +
                  "'"
                : "Parse error on line " +
                  (sankeyDiagramXADWPNL6Value29 + 1) +
                  ": Unexpected " +
                  (sankeyDiagramXADWPNL6Value40 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[sankeyDiagramXADWPNL6Value40] ||
                        sankeyDiagramXADWPNL6Value40) +
                      "'");
            this.parseError(sankeyDiagramXADWPNL6Value50, {
              text: sankeyDiagramXADWPNL6Value35.match,
              token:
                this.terminals_[sankeyDiagramXADWPNL6Value40] ||
                sankeyDiagramXADWPNL6Value40,
              line: sankeyDiagramXADWPNL6Value35.yylineno,
              loc: sankeyDiagramXADWPNL6Value38,
              expected: sankeyDiagramXADWPNL6Value49,
            });
          }
          if (
            sankeyDiagramXADWPNL6Value43[0] instanceof Array &&
            sankeyDiagramXADWPNL6Value43.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                sankeyDiagramXADWPNL6Value42 +
                ", token: " +
                sankeyDiagramXADWPNL6Value40,
            );
          switch (sankeyDiagramXADWPNL6Value43[0]) {
            case 1:
              sankeyDiagramXADWPNL6Value23.push(sankeyDiagramXADWPNL6Value40);
              sankeyDiagramXADWPNL6Value25.push(
                sankeyDiagramXADWPNL6Value35.yytext,
              );
              sankeyDiagramXADWPNL6Value26.push(
                sankeyDiagramXADWPNL6Value35.yylloc,
              );
              sankeyDiagramXADWPNL6Value23.push(
                sankeyDiagramXADWPNL6Value43[1],
              );
              sankeyDiagramXADWPNL6Value40 = null;
              sankeyDiagramXADWPNL6Value41
                ? ((sankeyDiagramXADWPNL6Value40 =
                    sankeyDiagramXADWPNL6Value41),
                  (sankeyDiagramXADWPNL6Value41 = null))
                : ((sankeyDiagramXADWPNL6Value30 =
                    sankeyDiagramXADWPNL6Value35.yyleng),
                  (sankeyDiagramXADWPNL6Value28 =
                    sankeyDiagramXADWPNL6Value35.yytext),
                  (sankeyDiagramXADWPNL6Value29 =
                    sankeyDiagramXADWPNL6Value35.yylineno),
                  (sankeyDiagramXADWPNL6Value38 =
                    sankeyDiagramXADWPNL6Value35.yylloc),
                  sankeyDiagramXADWPNL6Value31 > 0 &&
                    sankeyDiagramXADWPNL6Value31--);
              break;
            case 2:
              if (
                ((sankeyDiagramXADWPNL6Value47 =
                  this.productions_[sankeyDiagramXADWPNL6Value43[1]][1]),
                (sankeyDiagramXADWPNL6Value45.$ =
                  sankeyDiagramXADWPNL6Value25[
                    sankeyDiagramXADWPNL6Value25.length -
                      sankeyDiagramXADWPNL6Value47
                  ]),
                (sankeyDiagramXADWPNL6Value45._$ = {
                  first_line:
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length -
                        (sankeyDiagramXADWPNL6Value47 || 1)
                    ].first_line,
                  last_line:
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length - 1
                    ].last_line,
                  first_column:
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length -
                        (sankeyDiagramXADWPNL6Value47 || 1)
                    ].first_column,
                  last_column:
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length - 1
                    ].last_column,
                }),
                sankeyDiagramXADWPNL6Value39 &&
                  (sankeyDiagramXADWPNL6Value45._$.range = [
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length -
                        (sankeyDiagramXADWPNL6Value47 || 1)
                    ].range[0],
                    sankeyDiagramXADWPNL6Value26[
                      sankeyDiagramXADWPNL6Value26.length - 1
                    ].range[1],
                  ]),
                (sankeyDiagramXADWPNL6Value44 = this.performAction.apply(
                  sankeyDiagramXADWPNL6Value45,
                  [
                    sankeyDiagramXADWPNL6Value28,
                    sankeyDiagramXADWPNL6Value30,
                    sankeyDiagramXADWPNL6Value29,
                    sankeyDiagramXADWPNL6Value36.yy,
                    sankeyDiagramXADWPNL6Value43[1],
                    sankeyDiagramXADWPNL6Value25,
                    sankeyDiagramXADWPNL6Value26,
                  ].concat(sankeyDiagramXADWPNL6Value34),
                )),
                sankeyDiagramXADWPNL6Value44 !== undefined)
              )
                return sankeyDiagramXADWPNL6Value44;
              sankeyDiagramXADWPNL6Value47 &&
                ((sankeyDiagramXADWPNL6Value23 =
                  sankeyDiagramXADWPNL6Value23.slice(
                    0,
                    -1 * sankeyDiagramXADWPNL6Value47 * 2,
                  )),
                (sankeyDiagramXADWPNL6Value25 =
                  sankeyDiagramXADWPNL6Value25.slice(
                    0,
                    -1 * sankeyDiagramXADWPNL6Value47,
                  )),
                (sankeyDiagramXADWPNL6Value26 =
                  sankeyDiagramXADWPNL6Value26.slice(
                    0,
                    -1 * sankeyDiagramXADWPNL6Value47,
                  )));
              sankeyDiagramXADWPNL6Value23.push(
                this.productions_[sankeyDiagramXADWPNL6Value43[1]][0],
              );
              sankeyDiagramXADWPNL6Value25.push(sankeyDiagramXADWPNL6Value45.$);
              sankeyDiagramXADWPNL6Value26.push(
                sankeyDiagramXADWPNL6Value45._$,
              );
              sankeyDiagramXADWPNL6Value48 =
                sankeyDiagramXADWPNL6Value27[
                  sankeyDiagramXADWPNL6Value23[
                    sankeyDiagramXADWPNL6Value23.length - 2
                  ]
                ][
                  sankeyDiagramXADWPNL6Value23[
                    sankeyDiagramXADWPNL6Value23.length - 1
                  ]
                ];
              sankeyDiagramXADWPNL6Value23.push(sankeyDiagramXADWPNL6Value48);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  sankeyDiagramXADWPNL6Value21.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        sankeyDiagramXADWPNL6Param26,
        sankeyDiagramXADWPNL6Param27,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            sankeyDiagramXADWPNL6Param26,
            sankeyDiagramXADWPNL6Param27,
          );
        else throw Error(sankeyDiagramXADWPNL6Param26);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        sankeyDiagramXADWPNL6Param9,
        sankeyDiagramXADWPNL6Param10,
      ) {
        return (
          (this.yy = sankeyDiagramXADWPNL6Param10 || this.yy || {}),
          (this._input = sankeyDiagramXADWPNL6Param9),
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
        var sankeyDiagramXADWPNL6Value85 = this._input[0];
        return (
          (this.yytext += sankeyDiagramXADWPNL6Value85),
          this.yyleng++,
          this.offset++,
          (this.match += sankeyDiagramXADWPNL6Value85),
          (this.matched += sankeyDiagramXADWPNL6Value85),
          sankeyDiagramXADWPNL6Value85.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          sankeyDiagramXADWPNL6Value85
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param8) {
        var sankeyDiagramXADWPNL6Value73 = sankeyDiagramXADWPNL6Param8.length,
          sankeyDiagramXADWPNL6Value74 =
            sankeyDiagramXADWPNL6Param8.split(/(?:\r\n?|\n)/g);
        this._input = sankeyDiagramXADWPNL6Param8 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - sankeyDiagramXADWPNL6Value73,
        );
        this.offset -= sankeyDiagramXADWPNL6Value73;
        var sankeyDiagramXADWPNL6Value75 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        sankeyDiagramXADWPNL6Value74.length - 1 &&
          (this.yylineno -= sankeyDiagramXADWPNL6Value74.length - 1);
        var sankeyDiagramXADWPNL6Value76 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: sankeyDiagramXADWPNL6Value74
              ? (sankeyDiagramXADWPNL6Value74.length ===
                sankeyDiagramXADWPNL6Value75.length
                  ? this.yylloc.first_column
                  : 0) +
                sankeyDiagramXADWPNL6Value75[
                  sankeyDiagramXADWPNL6Value75.length -
                    sankeyDiagramXADWPNL6Value74.length
                ].length -
                sankeyDiagramXADWPNL6Value74[0].length
              : this.yylloc.first_column - sankeyDiagramXADWPNL6Value73,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              sankeyDiagramXADWPNL6Value76[0],
              sankeyDiagramXADWPNL6Value76[0] +
                this.yyleng -
                sankeyDiagramXADWPNL6Value73,
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
      less: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param39) {
        this.unput(this.match.slice(sankeyDiagramXADWPNL6Param39));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var sankeyDiagramXADWPNL6Value90 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (sankeyDiagramXADWPNL6Value90.length > 20 ? "..." : "") +
          sankeyDiagramXADWPNL6Value90.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var sankeyDiagramXADWPNL6Value89 = this.match;
        return (
          sankeyDiagramXADWPNL6Value89.length < 20 &&
            (sankeyDiagramXADWPNL6Value89 += this._input.substr(
              0,
              20 - sankeyDiagramXADWPNL6Value89.length,
            )),
          (
            sankeyDiagramXADWPNL6Value89.substr(0, 20) +
            (sankeyDiagramXADWPNL6Value89.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var sankeyDiagramXADWPNL6Value92 = this.pastInput(),
          sankeyDiagramXADWPNL6Value93 = Array(
            sankeyDiagramXADWPNL6Value92.length + 1,
          ).join("-");
        return (
          sankeyDiagramXADWPNL6Value92 +
          this.upcomingInput() +
          "\n" +
          sankeyDiagramXADWPNL6Value93 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        sankeyDiagramXADWPNL6Param6,
        sankeyDiagramXADWPNL6Param7,
      ) {
        var sankeyDiagramXADWPNL6Value69,
          sankeyDiagramXADWPNL6Value70,
          sankeyDiagramXADWPNL6Value71;
        if (
          (this.options.backtrack_lexer &&
            ((sankeyDiagramXADWPNL6Value71 = {
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
              (sankeyDiagramXADWPNL6Value71.yylloc.range =
                this.yylloc.range.slice(0))),
          (sankeyDiagramXADWPNL6Value70 =
            sankeyDiagramXADWPNL6Param6[0].match(/(?:\r\n?|\n).*/g)),
          sankeyDiagramXADWPNL6Value70 &&
            (this.yylineno += sankeyDiagramXADWPNL6Value70.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: sankeyDiagramXADWPNL6Value70
              ? sankeyDiagramXADWPNL6Value70[
                  sankeyDiagramXADWPNL6Value70.length - 1
                ].length -
                sankeyDiagramXADWPNL6Value70[
                  sankeyDiagramXADWPNL6Value70.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + sankeyDiagramXADWPNL6Param6[0].length,
          }),
          (this.yytext += sankeyDiagramXADWPNL6Param6[0]),
          (this.match += sankeyDiagramXADWPNL6Param6[0]),
          (this.matches = sankeyDiagramXADWPNL6Param6),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            sankeyDiagramXADWPNL6Param6[0].length,
          )),
          (this.matched += sankeyDiagramXADWPNL6Param6[0]),
          (sankeyDiagramXADWPNL6Value69 = this.performAction.call(
            this,
            this.yy,
            this,
            sankeyDiagramXADWPNL6Param7,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          sankeyDiagramXADWPNL6Value69)
        )
          return sankeyDiagramXADWPNL6Value69;
        if (this._backtrack) {
          for (var sankeyDiagramXADWPNL6Value72 in sankeyDiagramXADWPNL6Value71)
            this[sankeyDiagramXADWPNL6Value72] =
              sankeyDiagramXADWPNL6Value71[sankeyDiagramXADWPNL6Value72];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var sankeyDiagramXADWPNL6Value77,
          sankeyDiagramXADWPNL6Value78,
          sankeyDiagramXADWPNL6Value79,
          sankeyDiagramXADWPNL6Value80;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var sankeyDiagramXADWPNL6Value81 = this._currentRules(),
            sankeyDiagramXADWPNL6Value82 = 0;
          sankeyDiagramXADWPNL6Value82 < sankeyDiagramXADWPNL6Value81.length;
          sankeyDiagramXADWPNL6Value82++
        )
          if (
            ((sankeyDiagramXADWPNL6Value79 = this._input.match(
              this.rules[
                sankeyDiagramXADWPNL6Value81[sankeyDiagramXADWPNL6Value82]
              ],
            )),
            sankeyDiagramXADWPNL6Value79 &&
              (!sankeyDiagramXADWPNL6Value78 ||
                sankeyDiagramXADWPNL6Value79[0].length >
                  sankeyDiagramXADWPNL6Value78[0].length))
          ) {
            if (
              ((sankeyDiagramXADWPNL6Value78 = sankeyDiagramXADWPNL6Value79),
              (sankeyDiagramXADWPNL6Value80 = sankeyDiagramXADWPNL6Value82),
              this.options.backtrack_lexer)
            ) {
              if (
                ((sankeyDiagramXADWPNL6Value77 = this.test_match(
                  sankeyDiagramXADWPNL6Value79,
                  sankeyDiagramXADWPNL6Value81[sankeyDiagramXADWPNL6Value82],
                )),
                sankeyDiagramXADWPNL6Value77 !== false)
              )
                return sankeyDiagramXADWPNL6Value77;
              if (this._backtrack) {
                sankeyDiagramXADWPNL6Value78 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return sankeyDiagramXADWPNL6Value78
          ? ((sankeyDiagramXADWPNL6Value77 = this.test_match(
              sankeyDiagramXADWPNL6Value78,
              sankeyDiagramXADWPNL6Value81[sankeyDiagramXADWPNL6Value80],
            )),
            sankeyDiagramXADWPNL6Value77 === false
              ? false
              : sankeyDiagramXADWPNL6Value77)
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
      begin: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param42) {
        this.conditionStack.push(sankeyDiagramXADWPNL6Param42);
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
      topState: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param22) {
        return (
          (sankeyDiagramXADWPNL6Param22 =
            this.conditionStack.length -
            1 -
            Math.abs(sankeyDiagramXADWPNL6Param22 || 0)),
          sankeyDiagramXADWPNL6Param22 >= 0
            ? this.conditionStack[sankeyDiagramXADWPNL6Param22]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (sankeyDiagramXADWPNL6Param48) {
        this.begin(sankeyDiagramXADWPNL6Param48);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        sankeyDiagramXADWPNL6Param18,
        sankeyDiagramXADWPNL6Param19,
        sankeyDiagramXADWPNL6Param20,
        sankeyDiagramXADWPNL6Param21,
      ) {
        switch (sankeyDiagramXADWPNL6Param20) {
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
  function sankeyDiagramXADWPNL6Helper1() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(sankeyDiagramXADWPNL6Helper1, "Parser"),
    (sankeyDiagramXADWPNL6Helper1.prototype = sankeyDiagramXADWPNL6Value21),
    (sankeyDiagramXADWPNL6Value21.Parser = sankeyDiagramXADWPNL6Helper1),
    new sankeyDiagramXADWPNL6Helper1()
  );
})();
sankeyDiagramXADWPNL6Value1.parser = sankeyDiagramXADWPNL6Value1;
var sankeyDiagramXADWPNL6Value2 = sankeyDiagramXADWPNL6Value1,
  sankeyDiagramXADWPNL6Value3 = [],
  sankeyDiagramXADWPNL6Value4 = [],
  sankeyDiagramXADWPNL6Value5 = new Map(),
  sankeyDiagramXADWPNL6Value6 = chunkAGHRB4JFN(() => {
    sankeyDiagramXADWPNL6Value3 = [];
    sankeyDiagramXADWPNL6Value4 = [];
    sankeyDiagramXADWPNL6Value5 = new Map();
    _chunkICPOFSXXL();
  }, "clear"),
  sankeyDiagramXADWPNL6Value7 = class {
    constructor(
      sankeyDiagramXADWPNL6Param33,
      sankeyDiagramXADWPNL6Param34,
      sankeyDiagramXADWPNL6Param35 = 0,
    ) {
      this.source = sankeyDiagramXADWPNL6Param33;
      this.target = sankeyDiagramXADWPNL6Param34;
      this.value = sankeyDiagramXADWPNL6Param35;
    }
    static {
      chunkAGHRB4JFN(this, "SankeyLink");
    }
  },
  sankeyDiagramXADWPNL6Value8 = chunkAGHRB4JFN(
    (
      sankeyDiagramXADWPNL6Param44,
      sankeyDiagramXADWPNL6Param45,
      sankeyDiagramXADWPNL6Param46,
    ) => {
      sankeyDiagramXADWPNL6Value3.push(
        new sankeyDiagramXADWPNL6Value7(
          sankeyDiagramXADWPNL6Param44,
          sankeyDiagramXADWPNL6Param45,
          sankeyDiagramXADWPNL6Param46,
        ),
      );
    },
    "addLink",
  ),
  sankeyDiagramXADWPNL6Value9 = class {
    constructor(sankeyDiagramXADWPNL6Param49) {
      this.ID = sankeyDiagramXADWPNL6Param49;
    }
    static {
      chunkAGHRB4JFN(this, "SankeyNode");
    }
  },
  sankeyDiagramXADWPNL6Value10 = {
    nodesMap: sankeyDiagramXADWPNL6Value5,
    getConfig: chunkAGHRB4JFN(() => _chunkICPOFSXXB().sankey, "getConfig"),
    getNodes: chunkAGHRB4JFN(() => sankeyDiagramXADWPNL6Value4, "getNodes"),
    getLinks: chunkAGHRB4JFN(() => sankeyDiagramXADWPNL6Value3, "getLinks"),
    getGraph: chunkAGHRB4JFN(
      () => ({
        nodes: sankeyDiagramXADWPNL6Value4.map((item) => ({
          id: item.ID,
        })),
        links: sankeyDiagramXADWPNL6Value3.map((item) => ({
          source: item.source.ID,
          target: item.target.ID,
          value: item.value,
        })),
      }),
      "getGraph",
    ),
    addLink: sankeyDiagramXADWPNL6Value8,
    findOrCreateNode: chunkAGHRB4JFN((sankeyDiagramXADWPNL6Param23) => {
      sankeyDiagramXADWPNL6Param23 = _chunkICPOFSXXO.sanitizeText(
        sankeyDiagramXADWPNL6Param23,
        _chunkICPOFSXXB(),
      );
      let sankeyDiagramXADWPNL6Value94 = sankeyDiagramXADWPNL6Value5.get(
        sankeyDiagramXADWPNL6Param23,
      );
      return (
        sankeyDiagramXADWPNL6Value94 === undefined &&
          ((sankeyDiagramXADWPNL6Value94 = new sankeyDiagramXADWPNL6Value9(
            sankeyDiagramXADWPNL6Param23,
          )),
          sankeyDiagramXADWPNL6Value5.set(
            sankeyDiagramXADWPNL6Param23,
            sankeyDiagramXADWPNL6Value94,
          ),
          sankeyDiagramXADWPNL6Value4.push(sankeyDiagramXADWPNL6Value94)),
        sankeyDiagramXADWPNL6Value94
      );
    }, "findOrCreateNode"),
    getAccTitle: _chunkICPOFSXXV,
    setAccTitle: _chunkICPOFSXXC,
    getAccDescription: _chunkICPOFSXXK,
    setAccDescription: _chunkICPOFSXXN,
    getDiagramTitle: chunkICPOFSXXF,
    setDiagramTitle: _chunkICPOFSXXD,
    clear: sankeyDiagramXADWPNL6Value6,
  },
  sankeyDiagramXADWPNL6Value11 = class SankeyDiagramXADWPNL6Class1 {
    static {
      chunkAGHRB4JFN(this, "Uid");
    }
    static {
      this.count = 0;
    }
    static next(sankeyDiagramXADWPNL6Param41) {
      return new SankeyDiagramXADWPNL6Class1(
        sankeyDiagramXADWPNL6Param41 + ++SankeyDiagramXADWPNL6Class1.count,
      );
    }
    constructor(sankeyDiagramXADWPNL6Param40) {
      this.id = sankeyDiagramXADWPNL6Param40;
      this.href = `#${sankeyDiagramXADWPNL6Param40}`;
    }
    toString() {
      return "url(" + this.href + ")";
    }
  },
  sankeyDiagramXADWPNL6Value12 = {
    left: sankeyLinkHorizontalA,
    right: sankeyLinkHorizontalO,
    center: sankeyLinkHorizontalR,
    justify: sankeyLinkHorizontalI,
  },
  sankeyDiagramXADWPNL6Value13 = {
    draw: chunkAGHRB4JFN(function (
      sankeyDiagramXADWPNL6Param2,
      sankeyDiagramXADWPNL6Param3,
      sankeyDiagramXADWPNL6Param4,
      sankeyDiagramXADWPNL6Param5,
    ) {
      let { securityLevel, sankey } = _chunkICPOFSXXB(),
        sankeyDiagramXADWPNL6Value51 = chunkICPOFSXXQ.sankey,
        sankeyDiagramXADWPNL6Value52;
      securityLevel === "sandbox" &&
        (sankeyDiagramXADWPNL6Value52 = Src(
          "#i" + sankeyDiagramXADWPNL6Param3,
        ));
      let sankeyDiagramXADWPNL6Value53 = Src(
          securityLevel === "sandbox"
            ? sankeyDiagramXADWPNL6Value52.nodes()[0].contentDocument.body
            : "body",
        ),
        sankeyDiagramXADWPNL6Value54 =
          securityLevel === "sandbox"
            ? sankeyDiagramXADWPNL6Value53.select(
                `[id="${sankeyDiagramXADWPNL6Param3}"]`,
              )
            : Src(`[id="${sankeyDiagramXADWPNL6Param3}"]`),
        sankeyDiagramXADWPNL6Value55 =
          sankey?.width ?? sankeyDiagramXADWPNL6Value51.width,
        sankeyDiagramXADWPNL6Value56 =
          sankey?.height ?? sankeyDiagramXADWPNL6Value51.width,
        sankeyDiagramXADWPNL6Value57 =
          sankey?.useMaxWidth ?? sankeyDiagramXADWPNL6Value51.useMaxWidth,
        sankeyDiagramXADWPNL6Value58 =
          sankey?.nodeAlignment ?? sankeyDiagramXADWPNL6Value51.nodeAlignment,
        sankeyDiagramXADWPNL6Value59 =
          sankey?.prefix ?? sankeyDiagramXADWPNL6Value51.prefix,
        sankeyDiagramXADWPNL6Value60 =
          sankey?.suffix ?? sankeyDiagramXADWPNL6Value51.suffix,
        sankeyDiagramXADWPNL6Value61 =
          sankey?.showValues ?? sankeyDiagramXADWPNL6Value51.showValues,
        sankeyDiagramXADWPNL6Value62 =
          sankeyDiagramXADWPNL6Param5.db.getGraph(),
        sankeyDiagramXADWPNL6Value63 =
          sankeyDiagramXADWPNL6Value12[sankeyDiagramXADWPNL6Value58];
      sankeyLinkHorizontalN()
        .nodeId(
          (sankeyDiagramXADWPNL6Param62) => sankeyDiagramXADWPNL6Param62.id,
        )
        .nodeWidth(10)
        .nodePadding(10 + (sankeyDiagramXADWPNL6Value61 ? 15 : 0))
        .nodeAlign(sankeyDiagramXADWPNL6Value63)
        .extent([
          [0, 0],
          [sankeyDiagramXADWPNL6Value55, sankeyDiagramXADWPNL6Value56],
        ])(sankeyDiagramXADWPNL6Value62);
      let sankeyDiagramXADWPNL6Value64 = Ordinal(tableau10T);
      sankeyDiagramXADWPNL6Value54
        .append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(sankeyDiagramXADWPNL6Value62.nodes)
        .join("g")
        .attr("class", "node")
        .attr(
          "id",
          (sankeyDiagramXADWPNL6Param47) =>
            (sankeyDiagramXADWPNL6Param47.uid =
              sankeyDiagramXADWPNL6Value11.next("node-")).id,
        )
        .attr("transform", function (sankeyDiagramXADWPNL6Param38) {
          return (
            "translate(" +
            sankeyDiagramXADWPNL6Param38.x0 +
            "," +
            sankeyDiagramXADWPNL6Param38.y0 +
            ")"
          );
        })
        .attr(
          "x",
          (sankeyDiagramXADWPNL6Param63) => sankeyDiagramXADWPNL6Param63.x0,
        )
        .attr(
          "y",
          (sankeyDiagramXADWPNL6Param64) => sankeyDiagramXADWPNL6Param64.y0,
        )
        .append("rect")
        .attr(
          "height",
          (sankeyDiagramXADWPNL6Param57) =>
            sankeyDiagramXADWPNL6Param57.y1 - sankeyDiagramXADWPNL6Param57.y0,
        )
        .attr(
          "width",
          (sankeyDiagramXADWPNL6Param58) =>
            sankeyDiagramXADWPNL6Param58.x1 - sankeyDiagramXADWPNL6Param58.x0,
        )
        .attr("fill", (sankeyDiagramXADWPNL6Param59) =>
          sankeyDiagramXADWPNL6Value64(sankeyDiagramXADWPNL6Param59.id),
        );
      let sankeyDiagramXADWPNL6Value65 = chunkAGHRB4JFN(
        ({ id, value }) =>
          sankeyDiagramXADWPNL6Value61
            ? `${id}
${sankeyDiagramXADWPNL6Value59}${Math.round(value * 100) / 100}${sankeyDiagramXADWPNL6Value60}`
            : id,
        "getText",
      );
      sankeyDiagramXADWPNL6Value54
        .append("g")
        .attr("class", "node-labels")
        .attr("font-size", 14)
        .selectAll("text")
        .data(sankeyDiagramXADWPNL6Value62.nodes)
        .join("text")
        .attr("x", (sankeyDiagramXADWPNL6Param50) =>
          sankeyDiagramXADWPNL6Param50.x0 < sankeyDiagramXADWPNL6Value55 / 2
            ? sankeyDiagramXADWPNL6Param50.x1 + 6
            : sankeyDiagramXADWPNL6Param50.x0 - 6,
        )
        .attr(
          "y",
          (sankeyDiagramXADWPNL6Param55) =>
            (sankeyDiagramXADWPNL6Param55.y1 +
              sankeyDiagramXADWPNL6Param55.y0) /
            2,
        )
        .attr("dy", `${sankeyDiagramXADWPNL6Value61 ? "0" : "0.35"}em`)
        .attr("text-anchor", (sankeyDiagramXADWPNL6Param51) =>
          sankeyDiagramXADWPNL6Param51.x0 < sankeyDiagramXADWPNL6Value55 / 2
            ? "start"
            : "end",
        )
        .text(sankeyDiagramXADWPNL6Value65);
      let sankeyDiagramXADWPNL6Value66 = sankeyDiagramXADWPNL6Value54
          .append("g")
          .attr("class", "links")
          .attr("fill", "none")
          .attr("stroke-opacity", 0.5)
          .selectAll(".link")
          .data(sankeyDiagramXADWPNL6Value62.links)
          .join("g")
          .attr("class", "link")
          .style("mix-blend-mode", "multiply"),
        sankeyDiagramXADWPNL6Value67 = sankey?.linkColor ?? "gradient";
      if (sankeyDiagramXADWPNL6Value67 === "gradient") {
        let sankeyDiagramXADWPNL6Value83 = sankeyDiagramXADWPNL6Value66
          .append("linearGradient")
          .attr(
            "id",
            (sankeyDiagramXADWPNL6Param43) =>
              (sankeyDiagramXADWPNL6Param43.uid =
                sankeyDiagramXADWPNL6Value11.next("linearGradient-")).id,
          )
          .attr("gradientUnits", "userSpaceOnUse")
          .attr(
            "x1",
            (sankeyDiagramXADWPNL6Param56) =>
              sankeyDiagramXADWPNL6Param56.source.x1,
          )
          .attr("x2", (event) => event.target.x0);
        sankeyDiagramXADWPNL6Value83
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", (sankeyDiagramXADWPNL6Param53) =>
            sankeyDiagramXADWPNL6Value64(
              sankeyDiagramXADWPNL6Param53.source.id,
            ),
          );
        sankeyDiagramXADWPNL6Value83
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", (event) =>
            sankeyDiagramXADWPNL6Value64(event.target.id),
          );
      }
      let sankeyDiagramXADWPNL6Value68;
      switch (sankeyDiagramXADWPNL6Value67) {
        case "gradient":
          sankeyDiagramXADWPNL6Value68 = chunkAGHRB4JFN(
            (sankeyDiagramXADWPNL6Param61) => sankeyDiagramXADWPNL6Param61.uid,
            "coloring",
          );
          break;
        case "source":
          sankeyDiagramXADWPNL6Value68 = chunkAGHRB4JFN(
            (sankeyDiagramXADWPNL6Param54) =>
              sankeyDiagramXADWPNL6Value64(
                sankeyDiagramXADWPNL6Param54.source.id,
              ),
            "coloring",
          );
          break;
        case "target":
          sankeyDiagramXADWPNL6Value68 = chunkAGHRB4JFN(
            (event) => sankeyDiagramXADWPNL6Value64(event.target.id),
            "coloring",
          );
          break;
        default:
          sankeyDiagramXADWPNL6Value68 = sankeyDiagramXADWPNL6Value67;
      }
      sankeyDiagramXADWPNL6Value66
        .append("path")
        .attr("d", sankeyLinkHorizontalT())
        .attr("stroke", sankeyDiagramXADWPNL6Value68)
        .attr("stroke-width", (sankeyDiagramXADWPNL6Param52) =>
          Math.max(1, sankeyDiagramXADWPNL6Param52.width),
        );
      _chunkICPOFSXXS(
        undefined,
        sankeyDiagramXADWPNL6Value54,
        0,
        sankeyDiagramXADWPNL6Value57,
      );
    }, "draw"),
  },
  sankeyDiagramXADWPNL6Value14 = chunkAGHRB4JFN(
    (sankeyDiagramXADWPNL6Param28) =>
      sankeyDiagramXADWPNL6Param28
        .replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "")
        .replaceAll(/([\n\r])+/g, "\n")
        .trim(),
    "prepareTextForParsing",
  ),
  sankeyDiagramXADWPNL6Value15 = chunkAGHRB4JFN(
    (sankeyDiagramXADWPNL6Param36) => `.label {
      font-family: ${sankeyDiagramXADWPNL6Param36.fontFamily};
    }`,
    "getStyles",
  ),
  sankeyDiagramXADWPNL6Value16 = sankeyDiagramXADWPNL6Value2.parse.bind(
    sankeyDiagramXADWPNL6Value2,
  );
sankeyDiagramXADWPNL6Value2.parse = (sankeyDiagramXADWPNL6Param60) =>
  sankeyDiagramXADWPNL6Value16(
    sankeyDiagramXADWPNL6Value14(sankeyDiagramXADWPNL6Param60),
  );
export const SankeyDiagramXADWPNL6 = {
  styles: sankeyDiagramXADWPNL6Value15,
  parser: sankeyDiagramXADWPNL6Value2,
  db: sankeyDiagramXADWPNL6Value10,
  renderer: sankeyDiagramXADWPNL6Value13,
};
