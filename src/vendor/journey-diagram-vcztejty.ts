// Restored from ref/webview/assets/journeyDiagram-VCZTEJTY-D0GHB_lA.js
// Flat boundary. Vendored journeyDiagramVCZTEJTY chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { arc } from "./d3-shape-arc";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXN as _chunkICPOFSXXB,
  chunkICPOFSXXF as _chunkICPOFSXXC,
  _chunkICPOFSXXC as _chunkICPOFSXXV,
  _chunkICPOFSXXL,
  _chunkICPOFSXXN,
  chunkICPOFSXXF,
  _chunkICPOFSXXK,
  _chunkICPOFSXXC as chunkICPOFSXXV,
  _chunkICPOFSXXD,
} from "./chunk-icpofsxx";
import { chunkFMBD7UC4 } from "../utils/chunk-fmbd7-uc4";
import {
  chunkYZCP3GAMT,
  chunkYZCP3GAMO as chunkYZCP3GAMN,
  chunkYZCP3GAMN as chunkYZCP3GAMO,
  chunkYZCP3GAMC,
} from "./chunk-yzcp3gam";
var journeyDiagramVCZTEJTYValue1 = (function () {
  var journeyDiagramVCZTEJTYValue38 = chunkAGHRB4JFN(function (
      journeyDiagramVCZTEJTYParam96,
      journeyDiagramVCZTEJTYParam97,
      journeyDiagramVCZTEJTYParam98,
      journeyDiagramVCZTEJTYParam99,
    ) {
      for (
        journeyDiagramVCZTEJTYParam98 ||= {},
          journeyDiagramVCZTEJTYParam99 = journeyDiagramVCZTEJTYParam96.length;
        journeyDiagramVCZTEJTYParam99--;
        journeyDiagramVCZTEJTYParam98[
          journeyDiagramVCZTEJTYParam96[journeyDiagramVCZTEJTYParam99]
        ] = journeyDiagramVCZTEJTYParam97
      );
      return journeyDiagramVCZTEJTYParam98;
    }, "o"),
    journeyDiagramVCZTEJTYValue39 = [6, 8, 10, 11, 12, 14, 16, 17, 18],
    journeyDiagramVCZTEJTYValue40 = [1, 9],
    journeyDiagramVCZTEJTYValue41 = [1, 10],
    journeyDiagramVCZTEJTYValue42 = [1, 11],
    journeyDiagramVCZTEJTYValue43 = [1, 12],
    journeyDiagramVCZTEJTYValue44 = [1, 13],
    journeyDiagramVCZTEJTYValue45 = [1, 14],
    journeyDiagramVCZTEJTYValue46 = {
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
        journeyDiagramVCZTEJTYParam30,
        journeyDiagramVCZTEJTYParam31,
        journeyDiagramVCZTEJTYParam32,
        journeyDiagramVCZTEJTYParam33,
        journeyDiagramVCZTEJTYParam34,
        journeyDiagramVCZTEJTYParam35,
        journeyDiagramVCZTEJTYParam36,
      ) {
        var journeyDiagramVCZTEJTYValue132 =
          journeyDiagramVCZTEJTYParam35.length - 1;
        switch (journeyDiagramVCZTEJTYParam34) {
          case 1:
            return journeyDiagramVCZTEJTYParam35[
              journeyDiagramVCZTEJTYValue132 - 1
            ];
          case 2:
            this.$ = [];
            break;
          case 3:
            journeyDiagramVCZTEJTYParam35[
              journeyDiagramVCZTEJTYValue132 - 1
            ].push(
              journeyDiagramVCZTEJTYParam35[journeyDiagramVCZTEJTYValue132],
            );
            this.$ =
              journeyDiagramVCZTEJTYParam35[journeyDiagramVCZTEJTYValue132 - 1];
            break;
          case 4:
          case 5:
            this.$ =
              journeyDiagramVCZTEJTYParam35[journeyDiagramVCZTEJTYValue132];
            break;
          case 6:
          case 7:
            this.$ = [];
            break;
          case 8:
            journeyDiagramVCZTEJTYParam33.setDiagramTitle(
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].substr(6),
            );
            this.$ =
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].substr(6);
            break;
          case 9:
            this.$ =
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].trim();
            journeyDiagramVCZTEJTYParam33.setAccTitle(this.$);
            break;
          case 10:
          case 11:
            this.$ =
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].trim();
            journeyDiagramVCZTEJTYParam33.setAccDescription(this.$);
            break;
          case 12:
            journeyDiagramVCZTEJTYParam33.addSection(
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].substr(8),
            );
            this.$ =
              journeyDiagramVCZTEJTYParam35[
                journeyDiagramVCZTEJTYValue132
              ].substr(8);
            break;
          case 13:
            journeyDiagramVCZTEJTYParam33.addTask(
              journeyDiagramVCZTEJTYParam35[journeyDiagramVCZTEJTYValue132 - 1],
              journeyDiagramVCZTEJTYParam35[journeyDiagramVCZTEJTYValue132],
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
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 2], {
          5: 3,
        }),
        {
          6: [1, 4],
          7: 5,
          8: [1, 6],
          9: 7,
          10: [1, 8],
          11: journeyDiagramVCZTEJTYValue40,
          12: journeyDiagramVCZTEJTYValue41,
          14: journeyDiagramVCZTEJTYValue42,
          16: journeyDiagramVCZTEJTYValue43,
          17: journeyDiagramVCZTEJTYValue44,
          18: journeyDiagramVCZTEJTYValue45,
        },
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 7], {
          1: [2, 1],
        }),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 3]),
        {
          9: 15,
          11: journeyDiagramVCZTEJTYValue40,
          12: journeyDiagramVCZTEJTYValue41,
          14: journeyDiagramVCZTEJTYValue42,
          16: journeyDiagramVCZTEJTYValue43,
          17: journeyDiagramVCZTEJTYValue44,
          18: journeyDiagramVCZTEJTYValue45,
        },
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 5]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 6]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 8]),
        {
          13: [1, 16],
        },
        {
          15: [1, 17],
        },
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 11]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 12]),
        {
          19: [1, 18],
        },
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 4]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 9]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 10]),
        journeyDiagramVCZTEJTYValue38(journeyDiagramVCZTEJTYValue39, [2, 13]),
      ],
      defaultActions: {},
      parseError: chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam89,
        journeyDiagramVCZTEJTYParam90,
      ) {
        if (journeyDiagramVCZTEJTYParam90.recoverable)
          this.trace(journeyDiagramVCZTEJTYParam89);
        else {
          var journeyDiagramVCZTEJTYValue176 = Error(
            journeyDiagramVCZTEJTYParam89,
          );
          throw (
            (journeyDiagramVCZTEJTYValue176.hash =
              journeyDiagramVCZTEJTYParam90),
            journeyDiagramVCZTEJTYValue176
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam2) {
        var journeyDiagramVCZTEJTYValue47 = this,
          journeyDiagramVCZTEJTYValue48 = [0],
          journeyDiagramVCZTEJTYValue49 = [],
          journeyDiagramVCZTEJTYValue50 = [null],
          journeyDiagramVCZTEJTYValue51 = [],
          journeyDiagramVCZTEJTYValue52 = this.table,
          journeyDiagramVCZTEJTYValue53 = "",
          journeyDiagramVCZTEJTYValue54 = 0,
          journeyDiagramVCZTEJTYValue55 = 0,
          journeyDiagramVCZTEJTYValue56 = 0,
          journeyDiagramVCZTEJTYValue59 =
            journeyDiagramVCZTEJTYValue51.slice.call(arguments, 1),
          journeyDiagramVCZTEJTYValue60 = Object.create(this.lexer),
          journeyDiagramVCZTEJTYValue61 = {
            yy: {},
          };
        for (var journeyDiagramVCZTEJTYValue62 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            journeyDiagramVCZTEJTYValue62,
          ) &&
            (journeyDiagramVCZTEJTYValue61.yy[journeyDiagramVCZTEJTYValue62] =
              this.yy[journeyDiagramVCZTEJTYValue62]);
        journeyDiagramVCZTEJTYValue60.setInput(
          journeyDiagramVCZTEJTYParam2,
          journeyDiagramVCZTEJTYValue61.yy,
        );
        journeyDiagramVCZTEJTYValue61.yy.lexer = journeyDiagramVCZTEJTYValue60;
        journeyDiagramVCZTEJTYValue61.yy.parser = this;
        journeyDiagramVCZTEJTYValue60.yylloc === undefined &&
          (journeyDiagramVCZTEJTYValue60.yylloc = {});
        var journeyDiagramVCZTEJTYValue63 =
          journeyDiagramVCZTEJTYValue60.yylloc;
        journeyDiagramVCZTEJTYValue51.push(journeyDiagramVCZTEJTYValue63);
        var journeyDiagramVCZTEJTYValue64 =
          journeyDiagramVCZTEJTYValue60.options &&
          journeyDiagramVCZTEJTYValue60.options.ranges;
        typeof journeyDiagramVCZTEJTYValue61.yy.parseError == "function"
          ? (this.parseError = journeyDiagramVCZTEJTYValue61.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function journeyDiagramVCZTEJTYHelper3(journeyDiagramVCZTEJTYParam107) {
          journeyDiagramVCZTEJTYValue48.length -=
            2 * journeyDiagramVCZTEJTYParam107;
          journeyDiagramVCZTEJTYValue50.length -=
            journeyDiagramVCZTEJTYParam107;
          journeyDiagramVCZTEJTYValue51.length -=
            journeyDiagramVCZTEJTYParam107;
        }
        chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper3, "popStack");
        function journeyDiagramVCZTEJTYHelper4() {
          var journeyDiagramVCZTEJTYValue169 =
            journeyDiagramVCZTEJTYValue49.pop() ||
            journeyDiagramVCZTEJTYValue60.lex() ||
            1;
          return (
            typeof journeyDiagramVCZTEJTYValue169 != "number" &&
              (journeyDiagramVCZTEJTYValue169 instanceof Array &&
                ((journeyDiagramVCZTEJTYValue49 =
                  journeyDiagramVCZTEJTYValue169),
                (journeyDiagramVCZTEJTYValue169 =
                  journeyDiagramVCZTEJTYValue49.pop())),
              (journeyDiagramVCZTEJTYValue169 =
                journeyDiagramVCZTEJTYValue47.symbols_[
                  journeyDiagramVCZTEJTYValue169
                ] || journeyDiagramVCZTEJTYValue169)),
            journeyDiagramVCZTEJTYValue169
          );
        }
        chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper4, "lex");
        for (
          var journeyDiagramVCZTEJTYValue65,
            journeyDiagramVCZTEJTYValue66,
            journeyDiagramVCZTEJTYValue67,
            journeyDiagramVCZTEJTYValue68,
            journeyDiagramVCZTEJTYValue69,
            journeyDiagramVCZTEJTYValue70 = {},
            journeyDiagramVCZTEJTYValue71,
            journeyDiagramVCZTEJTYValue72,
            journeyDiagramVCZTEJTYValue73,
            journeyDiagramVCZTEJTYValue74;
          ;

        ) {
          if (
            ((journeyDiagramVCZTEJTYValue67 =
              journeyDiagramVCZTEJTYValue48[
                journeyDiagramVCZTEJTYValue48.length - 1
              ]),
            this.defaultActions[journeyDiagramVCZTEJTYValue67]
              ? (journeyDiagramVCZTEJTYValue68 =
                  this.defaultActions[journeyDiagramVCZTEJTYValue67])
              : ((journeyDiagramVCZTEJTYValue65 ??=
                  journeyDiagramVCZTEJTYHelper4()),
                (journeyDiagramVCZTEJTYValue68 =
                  journeyDiagramVCZTEJTYValue52[
                    journeyDiagramVCZTEJTYValue67
                  ] &&
                  journeyDiagramVCZTEJTYValue52[journeyDiagramVCZTEJTYValue67][
                    journeyDiagramVCZTEJTYValue65
                  ])),
            journeyDiagramVCZTEJTYValue68 === undefined ||
              !journeyDiagramVCZTEJTYValue68.length ||
              !journeyDiagramVCZTEJTYValue68[0])
          ) {
            var journeyDiagramVCZTEJTYValue75 = "";
            for (journeyDiagramVCZTEJTYValue71 in ((journeyDiagramVCZTEJTYValue74 =
              []),
            journeyDiagramVCZTEJTYValue52[journeyDiagramVCZTEJTYValue67]))
              this.terminals_[journeyDiagramVCZTEJTYValue71] &&
                journeyDiagramVCZTEJTYValue71 > 2 &&
                journeyDiagramVCZTEJTYValue74.push(
                  "'" + this.terminals_[journeyDiagramVCZTEJTYValue71] + "'",
                );
            journeyDiagramVCZTEJTYValue75 =
              journeyDiagramVCZTEJTYValue60.showPosition
                ? "Parse error on line " +
                  (journeyDiagramVCZTEJTYValue54 + 1) +
                  ":\n" +
                  journeyDiagramVCZTEJTYValue60.showPosition() +
                  "\nExpecting " +
                  journeyDiagramVCZTEJTYValue74.join(", ") +
                  ", got '" +
                  (this.terminals_[journeyDiagramVCZTEJTYValue65] ||
                    journeyDiagramVCZTEJTYValue65) +
                  "'"
                : "Parse error on line " +
                  (journeyDiagramVCZTEJTYValue54 + 1) +
                  ": Unexpected " +
                  (journeyDiagramVCZTEJTYValue65 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[journeyDiagramVCZTEJTYValue65] ||
                        journeyDiagramVCZTEJTYValue65) +
                      "'");
            this.parseError(journeyDiagramVCZTEJTYValue75, {
              text: journeyDiagramVCZTEJTYValue60.match,
              token:
                this.terminals_[journeyDiagramVCZTEJTYValue65] ||
                journeyDiagramVCZTEJTYValue65,
              line: journeyDiagramVCZTEJTYValue60.yylineno,
              loc: journeyDiagramVCZTEJTYValue63,
              expected: journeyDiagramVCZTEJTYValue74,
            });
          }
          if (
            journeyDiagramVCZTEJTYValue68[0] instanceof Array &&
            journeyDiagramVCZTEJTYValue68.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                journeyDiagramVCZTEJTYValue67 +
                ", token: " +
                journeyDiagramVCZTEJTYValue65,
            );
          switch (journeyDiagramVCZTEJTYValue68[0]) {
            case 1:
              journeyDiagramVCZTEJTYValue48.push(journeyDiagramVCZTEJTYValue65);
              journeyDiagramVCZTEJTYValue50.push(
                journeyDiagramVCZTEJTYValue60.yytext,
              );
              journeyDiagramVCZTEJTYValue51.push(
                journeyDiagramVCZTEJTYValue60.yylloc,
              );
              journeyDiagramVCZTEJTYValue48.push(
                journeyDiagramVCZTEJTYValue68[1],
              );
              journeyDiagramVCZTEJTYValue65 = null;
              journeyDiagramVCZTEJTYValue66
                ? ((journeyDiagramVCZTEJTYValue65 =
                    journeyDiagramVCZTEJTYValue66),
                  (journeyDiagramVCZTEJTYValue66 = null))
                : ((journeyDiagramVCZTEJTYValue55 =
                    journeyDiagramVCZTEJTYValue60.yyleng),
                  (journeyDiagramVCZTEJTYValue53 =
                    journeyDiagramVCZTEJTYValue60.yytext),
                  (journeyDiagramVCZTEJTYValue54 =
                    journeyDiagramVCZTEJTYValue60.yylineno),
                  (journeyDiagramVCZTEJTYValue63 =
                    journeyDiagramVCZTEJTYValue60.yylloc),
                  journeyDiagramVCZTEJTYValue56 > 0 &&
                    journeyDiagramVCZTEJTYValue56--);
              break;
            case 2:
              if (
                ((journeyDiagramVCZTEJTYValue72 =
                  this.productions_[journeyDiagramVCZTEJTYValue68[1]][1]),
                (journeyDiagramVCZTEJTYValue70.$ =
                  journeyDiagramVCZTEJTYValue50[
                    journeyDiagramVCZTEJTYValue50.length -
                      journeyDiagramVCZTEJTYValue72
                  ]),
                (journeyDiagramVCZTEJTYValue70._$ = {
                  first_line:
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length -
                        (journeyDiagramVCZTEJTYValue72 || 1)
                    ].first_line,
                  last_line:
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length - 1
                    ].last_line,
                  first_column:
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length -
                        (journeyDiagramVCZTEJTYValue72 || 1)
                    ].first_column,
                  last_column:
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length - 1
                    ].last_column,
                }),
                journeyDiagramVCZTEJTYValue64 &&
                  (journeyDiagramVCZTEJTYValue70._$.range = [
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length -
                        (journeyDiagramVCZTEJTYValue72 || 1)
                    ].range[0],
                    journeyDiagramVCZTEJTYValue51[
                      journeyDiagramVCZTEJTYValue51.length - 1
                    ].range[1],
                  ]),
                (journeyDiagramVCZTEJTYValue69 = this.performAction.apply(
                  journeyDiagramVCZTEJTYValue70,
                  [
                    journeyDiagramVCZTEJTYValue53,
                    journeyDiagramVCZTEJTYValue55,
                    journeyDiagramVCZTEJTYValue54,
                    journeyDiagramVCZTEJTYValue61.yy,
                    journeyDiagramVCZTEJTYValue68[1],
                    journeyDiagramVCZTEJTYValue50,
                    journeyDiagramVCZTEJTYValue51,
                  ].concat(journeyDiagramVCZTEJTYValue59),
                )),
                journeyDiagramVCZTEJTYValue69 !== undefined)
              )
                return journeyDiagramVCZTEJTYValue69;
              journeyDiagramVCZTEJTYValue72 &&
                ((journeyDiagramVCZTEJTYValue48 =
                  journeyDiagramVCZTEJTYValue48.slice(
                    0,
                    -1 * journeyDiagramVCZTEJTYValue72 * 2,
                  )),
                (journeyDiagramVCZTEJTYValue50 =
                  journeyDiagramVCZTEJTYValue50.slice(
                    0,
                    -1 * journeyDiagramVCZTEJTYValue72,
                  )),
                (journeyDiagramVCZTEJTYValue51 =
                  journeyDiagramVCZTEJTYValue51.slice(
                    0,
                    -1 * journeyDiagramVCZTEJTYValue72,
                  )));
              journeyDiagramVCZTEJTYValue48.push(
                this.productions_[journeyDiagramVCZTEJTYValue68[1]][0],
              );
              journeyDiagramVCZTEJTYValue50.push(
                journeyDiagramVCZTEJTYValue70.$,
              );
              journeyDiagramVCZTEJTYValue51.push(
                journeyDiagramVCZTEJTYValue70._$,
              );
              journeyDiagramVCZTEJTYValue73 =
                journeyDiagramVCZTEJTYValue52[
                  journeyDiagramVCZTEJTYValue48[
                    journeyDiagramVCZTEJTYValue48.length - 2
                  ]
                ][
                  journeyDiagramVCZTEJTYValue48[
                    journeyDiagramVCZTEJTYValue48.length - 1
                  ]
                ];
              journeyDiagramVCZTEJTYValue48.push(journeyDiagramVCZTEJTYValue73);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  journeyDiagramVCZTEJTYValue46.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam91,
        journeyDiagramVCZTEJTYParam92,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            journeyDiagramVCZTEJTYParam91,
            journeyDiagramVCZTEJTYParam92,
          );
        else throw Error(journeyDiagramVCZTEJTYParam91);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam55,
        journeyDiagramVCZTEJTYParam56,
      ) {
        return (
          (this.yy = journeyDiagramVCZTEJTYParam56 || this.yy || {}),
          (this._input = journeyDiagramVCZTEJTYParam55),
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
        var journeyDiagramVCZTEJTYValue145 = this._input[0];
        return (
          (this.yytext += journeyDiagramVCZTEJTYValue145),
          this.yyleng++,
          this.offset++,
          (this.match += journeyDiagramVCZTEJTYValue145),
          (this.matched += journeyDiagramVCZTEJTYValue145),
          journeyDiagramVCZTEJTYValue145.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          journeyDiagramVCZTEJTYValue145
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam12) {
        var journeyDiagramVCZTEJTYValue106 =
            journeyDiagramVCZTEJTYParam12.length,
          journeyDiagramVCZTEJTYValue107 =
            journeyDiagramVCZTEJTYParam12.split(/(?:\r\n?|\n)/g);
        this._input = journeyDiagramVCZTEJTYParam12 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - journeyDiagramVCZTEJTYValue106,
        );
        this.offset -= journeyDiagramVCZTEJTYValue106;
        var journeyDiagramVCZTEJTYValue108 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        journeyDiagramVCZTEJTYValue107.length - 1 &&
          (this.yylineno -= journeyDiagramVCZTEJTYValue107.length - 1);
        var journeyDiagramVCZTEJTYValue109 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: journeyDiagramVCZTEJTYValue107
              ? (journeyDiagramVCZTEJTYValue107.length ===
                journeyDiagramVCZTEJTYValue108.length
                  ? this.yylloc.first_column
                  : 0) +
                journeyDiagramVCZTEJTYValue108[
                  journeyDiagramVCZTEJTYValue108.length -
                    journeyDiagramVCZTEJTYValue107.length
                ].length -
                journeyDiagramVCZTEJTYValue107[0].length
              : this.yylloc.first_column - journeyDiagramVCZTEJTYValue106,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              journeyDiagramVCZTEJTYValue109[0],
              journeyDiagramVCZTEJTYValue109[0] +
                this.yyleng -
                journeyDiagramVCZTEJTYValue106,
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
      less: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam108) {
        this.unput(this.match.slice(journeyDiagramVCZTEJTYParam108));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var journeyDiagramVCZTEJTYValue166 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (journeyDiagramVCZTEJTYValue166.length > 20 ? "..." : "") +
          journeyDiagramVCZTEJTYValue166.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var journeyDiagramVCZTEJTYValue165 = this.match;
        return (
          journeyDiagramVCZTEJTYValue165.length < 20 &&
            (journeyDiagramVCZTEJTYValue165 += this._input.substr(
              0,
              20 - journeyDiagramVCZTEJTYValue165.length,
            )),
          (
            journeyDiagramVCZTEJTYValue165.substr(0, 20) +
            (journeyDiagramVCZTEJTYValue165.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var journeyDiagramVCZTEJTYValue173 = this.pastInput(),
          journeyDiagramVCZTEJTYValue174 = Array(
            journeyDiagramVCZTEJTYValue173.length + 1,
          ).join("-");
        return (
          journeyDiagramVCZTEJTYValue173 +
          this.upcomingInput() +
          "\n" +
          journeyDiagramVCZTEJTYValue174 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam3,
        journeyDiagramVCZTEJTYParam4,
      ) {
        var journeyDiagramVCZTEJTYValue76,
          journeyDiagramVCZTEJTYValue77,
          journeyDiagramVCZTEJTYValue78;
        if (
          (this.options.backtrack_lexer &&
            ((journeyDiagramVCZTEJTYValue78 = {
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
              (journeyDiagramVCZTEJTYValue78.yylloc.range =
                this.yylloc.range.slice(0))),
          (journeyDiagramVCZTEJTYValue77 =
            journeyDiagramVCZTEJTYParam3[0].match(/(?:\r\n?|\n).*/g)),
          journeyDiagramVCZTEJTYValue77 &&
            (this.yylineno += journeyDiagramVCZTEJTYValue77.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: journeyDiagramVCZTEJTYValue77
              ? journeyDiagramVCZTEJTYValue77[
                  journeyDiagramVCZTEJTYValue77.length - 1
                ].length -
                journeyDiagramVCZTEJTYValue77[
                  journeyDiagramVCZTEJTYValue77.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                journeyDiagramVCZTEJTYParam3[0].length,
          }),
          (this.yytext += journeyDiagramVCZTEJTYParam3[0]),
          (this.match += journeyDiagramVCZTEJTYParam3[0]),
          (this.matches = journeyDiagramVCZTEJTYParam3),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            journeyDiagramVCZTEJTYParam3[0].length,
          )),
          (this.matched += journeyDiagramVCZTEJTYParam3[0]),
          (journeyDiagramVCZTEJTYValue76 = this.performAction.call(
            this,
            this.yy,
            this,
            journeyDiagramVCZTEJTYParam4,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          journeyDiagramVCZTEJTYValue76)
        )
          return journeyDiagramVCZTEJTYValue76;
        if (this._backtrack) {
          for (var journeyDiagramVCZTEJTYValue79 in journeyDiagramVCZTEJTYValue78)
            this[journeyDiagramVCZTEJTYValue79] =
              journeyDiagramVCZTEJTYValue78[journeyDiagramVCZTEJTYValue79];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var journeyDiagramVCZTEJTYValue121,
          journeyDiagramVCZTEJTYValue122,
          journeyDiagramVCZTEJTYValue123,
          journeyDiagramVCZTEJTYValue124;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var journeyDiagramVCZTEJTYValue125 = this._currentRules(),
            journeyDiagramVCZTEJTYValue126 = 0;
          journeyDiagramVCZTEJTYValue126 <
          journeyDiagramVCZTEJTYValue125.length;
          journeyDiagramVCZTEJTYValue126++
        )
          if (
            ((journeyDiagramVCZTEJTYValue123 = this._input.match(
              this.rules[
                journeyDiagramVCZTEJTYValue125[journeyDiagramVCZTEJTYValue126]
              ],
            )),
            journeyDiagramVCZTEJTYValue123 &&
              (!journeyDiagramVCZTEJTYValue122 ||
                journeyDiagramVCZTEJTYValue123[0].length >
                  journeyDiagramVCZTEJTYValue122[0].length))
          ) {
            if (
              ((journeyDiagramVCZTEJTYValue122 =
                journeyDiagramVCZTEJTYValue123),
              (journeyDiagramVCZTEJTYValue124 = journeyDiagramVCZTEJTYValue126),
              this.options.backtrack_lexer)
            ) {
              if (
                ((journeyDiagramVCZTEJTYValue121 = this.test_match(
                  journeyDiagramVCZTEJTYValue123,
                  journeyDiagramVCZTEJTYValue125[
                    journeyDiagramVCZTEJTYValue126
                  ],
                )),
                journeyDiagramVCZTEJTYValue121 !== false)
              )
                return journeyDiagramVCZTEJTYValue121;
              if (this._backtrack) {
                journeyDiagramVCZTEJTYValue122 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return journeyDiagramVCZTEJTYValue122
          ? ((journeyDiagramVCZTEJTYValue121 = this.test_match(
              journeyDiagramVCZTEJTYValue122,
              journeyDiagramVCZTEJTYValue125[journeyDiagramVCZTEJTYValue124],
            )),
            journeyDiagramVCZTEJTYValue121 === false
              ? false
              : journeyDiagramVCZTEJTYValue121)
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
      begin: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam109) {
        this.conditionStack.push(journeyDiagramVCZTEJTYParam109);
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
      topState: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam88) {
        return (
          (journeyDiagramVCZTEJTYParam88 =
            this.conditionStack.length -
            1 -
            Math.abs(journeyDiagramVCZTEJTYParam88 || 0)),
          journeyDiagramVCZTEJTYParam88 >= 0
            ? this.conditionStack[journeyDiagramVCZTEJTYParam88]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam116) {
        this.begin(journeyDiagramVCZTEJTYParam116);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam25,
        journeyDiagramVCZTEJTYParam26,
        journeyDiagramVCZTEJTYParam27,
        journeyDiagramVCZTEJTYParam28,
      ) {
        switch (journeyDiagramVCZTEJTYParam27) {
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
  function journeyDiagramVCZTEJTYHelper2() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper2, "Parser"),
    (journeyDiagramVCZTEJTYHelper2.prototype = journeyDiagramVCZTEJTYValue46),
    (journeyDiagramVCZTEJTYValue46.Parser = journeyDiagramVCZTEJTYHelper2),
    new journeyDiagramVCZTEJTYHelper2()
  );
})();
journeyDiagramVCZTEJTYValue1.parser = journeyDiagramVCZTEJTYValue1;
var journeyDiagramVCZTEJTYValue2 = journeyDiagramVCZTEJTYValue1,
  journeyDiagramVCZTEJTYValue3 = "",
  journeyDiagramVCZTEJTYValue4 = [],
  journeyDiagramVCZTEJTYValue5 = [],
  journeyDiagramVCZTEJTYValue6 = [],
  journeyDiagramVCZTEJTYValue7 = chunkAGHRB4JFN(function () {
    journeyDiagramVCZTEJTYValue4.length = 0;
    journeyDiagramVCZTEJTYValue5.length = 0;
    journeyDiagramVCZTEJTYValue3 = "";
    journeyDiagramVCZTEJTYValue6.length = 0;
    _chunkICPOFSXXL();
  }, "clear"),
  journeyDiagramVCZTEJTYValue8 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam117,
  ) {
    journeyDiagramVCZTEJTYValue3 = journeyDiagramVCZTEJTYParam117;
    journeyDiagramVCZTEJTYValue4.push(journeyDiagramVCZTEJTYParam117);
  }, "addSection"),
  journeyDiagramVCZTEJTYValue9 = chunkAGHRB4JFN(function () {
    return journeyDiagramVCZTEJTYValue4;
  }, "getSections"),
  journeyDiagramVCZTEJTYValue10 = chunkAGHRB4JFN(function () {
    let journeyDiagramVCZTEJTYValue178 = journeyDiagramVCZTEJTYValue14(),
      journeyDiagramVCZTEJTYValue179 = 0;
    for (
      ;
      !journeyDiagramVCZTEJTYValue178 && journeyDiagramVCZTEJTYValue179 < 100;

    ) {
      journeyDiagramVCZTEJTYValue178 = journeyDiagramVCZTEJTYValue14();
      journeyDiagramVCZTEJTYValue179++;
    }
    return (
      journeyDiagramVCZTEJTYValue5.push(...journeyDiagramVCZTEJTYValue6),
      journeyDiagramVCZTEJTYValue5
    );
  }, "getTasks"),
  journeyDiagramVCZTEJTYValue11 = chunkAGHRB4JFN(function () {
    let journeyDiagramVCZTEJTYValue175 = [];
    return (
      journeyDiagramVCZTEJTYValue5.forEach((item) => {
        item.people && journeyDiagramVCZTEJTYValue175.push(...item.people);
      }),
      [...new Set(journeyDiagramVCZTEJTYValue175)].sort()
    );
  }, "updateActors"),
  journeyDiagramVCZTEJTYValue12 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam73,
    journeyDiagramVCZTEJTYParam74,
  ) {
    let journeyDiagramVCZTEJTYValue158 = journeyDiagramVCZTEJTYParam74
        .substr(1)
        .split(":"),
      journeyDiagramVCZTEJTYValue159 = 0,
      journeyDiagramVCZTEJTYValue160 = [];
    journeyDiagramVCZTEJTYValue158.length === 1
      ? ((journeyDiagramVCZTEJTYValue159 = Number(
          journeyDiagramVCZTEJTYValue158[0],
        )),
        (journeyDiagramVCZTEJTYValue160 = []))
      : ((journeyDiagramVCZTEJTYValue159 = Number(
          journeyDiagramVCZTEJTYValue158[0],
        )),
        (journeyDiagramVCZTEJTYValue160 =
          journeyDiagramVCZTEJTYValue158[1].split(",")));
    let journeyDiagramVCZTEJTYValue161 = journeyDiagramVCZTEJTYValue160.map(
        (item) => item.trim(),
      ),
      journeyDiagramVCZTEJTYValue162 = {
        section: journeyDiagramVCZTEJTYValue3,
        type: journeyDiagramVCZTEJTYValue3,
        people: journeyDiagramVCZTEJTYValue161,
        task: journeyDiagramVCZTEJTYParam73,
        score: journeyDiagramVCZTEJTYValue159,
      };
    journeyDiagramVCZTEJTYValue6.push(journeyDiagramVCZTEJTYValue162);
  }, "addTask"),
  journeyDiagramVCZTEJTYValue13 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam93,
  ) {
    let journeyDiagramVCZTEJTYValue177 = {
      section: journeyDiagramVCZTEJTYValue3,
      type: journeyDiagramVCZTEJTYValue3,
      description: journeyDiagramVCZTEJTYParam93,
      task: journeyDiagramVCZTEJTYParam93,
      classes: [],
    };
    journeyDiagramVCZTEJTYValue5.push(journeyDiagramVCZTEJTYValue177);
  }, "addTaskOrg"),
  journeyDiagramVCZTEJTYValue14 = chunkAGHRB4JFN(function () {
    let journeyDiagramVCZTEJTYValue167 = chunkAGHRB4JFN(function (
        journeyDiagramVCZTEJTYParam111,
      ) {
        return journeyDiagramVCZTEJTYValue6[journeyDiagramVCZTEJTYParam111]
          .processed;
      }, "compileTask"),
      journeyDiagramVCZTEJTYValue168 = true;
    for (let [
      journeyDiagramVCZTEJTYValue181,
      journeyDiagramVCZTEJTYValue182,
    ] of journeyDiagramVCZTEJTYValue6.entries()) {
      journeyDiagramVCZTEJTYValue167(journeyDiagramVCZTEJTYValue181);
      journeyDiagramVCZTEJTYValue168 &&=
        journeyDiagramVCZTEJTYValue182.processed;
    }
    return journeyDiagramVCZTEJTYValue168;
  }, "compileTasks"),
  journeyDiagramVCZTEJTYValue15 = {
    getConfig: chunkAGHRB4JFN(() => _chunkICPOFSXXB().journey, "getConfig"),
    clear: journeyDiagramVCZTEJTYValue7,
    setDiagramTitle: _chunkICPOFSXXD,
    getDiagramTitle: chunkICPOFSXXF,
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setAccDescription: _chunkICPOFSXXN,
    getAccDescription: _chunkICPOFSXXK,
    addSection: journeyDiagramVCZTEJTYValue8,
    getSections: journeyDiagramVCZTEJTYValue9,
    getTasks: journeyDiagramVCZTEJTYValue10,
    addTask: journeyDiagramVCZTEJTYValue12,
    addTaskOrg: journeyDiagramVCZTEJTYValue13,
    getActors: chunkAGHRB4JFN(function () {
      return journeyDiagramVCZTEJTYValue11();
    }, "getActors"),
  },
  journeyDiagramVCZTEJTYValue16 = chunkAGHRB4JFN(
    (journeyDiagramVCZTEJTYParam1) => `.label {
    font-family: ${journeyDiagramVCZTEJTYParam1.fontFamily};
    color: ${journeyDiagramVCZTEJTYParam1.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${journeyDiagramVCZTEJTYParam1.textColor}
  }

  .legend {
    fill: ${journeyDiagramVCZTEJTYParam1.textColor};
    font-family: ${journeyDiagramVCZTEJTYParam1.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${journeyDiagramVCZTEJTYParam1.textColor}
  }

  .face {
    ${journeyDiagramVCZTEJTYParam1.faceColor ? `fill: ${journeyDiagramVCZTEJTYParam1.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${journeyDiagramVCZTEJTYParam1.mainBkg};
    stroke: ${journeyDiagramVCZTEJTYParam1.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${journeyDiagramVCZTEJTYParam1.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${journeyDiagramVCZTEJTYParam1.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${journeyDiagramVCZTEJTYParam1.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${journeyDiagramVCZTEJTYParam1.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${journeyDiagramVCZTEJTYParam1.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${journeyDiagramVCZTEJTYParam1.fontFamily};
    font-size: 12px;
    background: ${journeyDiagramVCZTEJTYParam1.tertiaryColor};
    border: 1px solid ${journeyDiagramVCZTEJTYParam1.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${journeyDiagramVCZTEJTYParam1.fillType0 ? `fill: ${journeyDiagramVCZTEJTYParam1.fillType7}` : ""};
  }

  .actor-0 {
    ${journeyDiagramVCZTEJTYParam1.actor0 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor0}` : ""};
  }
  .actor-1 {
    ${journeyDiagramVCZTEJTYParam1.actor1 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor1}` : ""};
  }
  .actor-2 {
    ${journeyDiagramVCZTEJTYParam1.actor2 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor2}` : ""};
  }
  .actor-3 {
    ${journeyDiagramVCZTEJTYParam1.actor3 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor3}` : ""};
  }
  .actor-4 {
    ${journeyDiagramVCZTEJTYParam1.actor4 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor4}` : ""};
  }
  .actor-5 {
    ${journeyDiagramVCZTEJTYParam1.actor5 ? `fill: ${journeyDiagramVCZTEJTYParam1.actor5}` : ""};
  }
  ${chunkFMBD7UC4()}
`,
    "getStyles",
  ),
  journeyDiagramVCZTEJTYValue17 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam112,
    journeyDiagramVCZTEJTYParam113,
  ) {
    return chunkYZCP3GAMT(
      journeyDiagramVCZTEJTYParam112,
      journeyDiagramVCZTEJTYParam113,
    );
  }, "drawRect"),
  journeyDiagramVCZTEJTYValue18 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam5,
    journeyDiagramVCZTEJTYParam6,
  ) {
    let journeyDiagramVCZTEJTYValue80 = journeyDiagramVCZTEJTYParam5
        .append("circle")
        .attr("cx", journeyDiagramVCZTEJTYParam6.cx)
        .attr("cy", journeyDiagramVCZTEJTYParam6.cy)
        .attr("class", "face")
        .attr("r", 15)
        .attr("stroke-width", 2)
        .attr("overflow", "visible"),
      journeyDiagramVCZTEJTYValue81 = journeyDiagramVCZTEJTYParam5.append("g");
    journeyDiagramVCZTEJTYValue81
      .append("circle")
      .attr("cx", journeyDiagramVCZTEJTYParam6.cx - 5)
      .attr("cy", journeyDiagramVCZTEJTYParam6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    journeyDiagramVCZTEJTYValue81
      .append("circle")
      .attr("cx", journeyDiagramVCZTEJTYParam6.cx + 5)
      .attr("cy", journeyDiagramVCZTEJTYParam6.cy - 5)
      .attr("r", 1.5)
      .attr("stroke-width", 2)
      .attr("fill", "#666")
      .attr("stroke", "#666");
    function journeyDiagramVCZTEJTYHelper9(journeyDiagramVCZTEJTYParam72) {
      let journeyDiagramVCZTEJTYValue157 = arc()
        .startAngle(Math.PI / 2)
        .endAngle(3 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramVCZTEJTYParam72
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramVCZTEJTYValue157)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramVCZTEJTYParam6.cx +
            "," +
            (journeyDiagramVCZTEJTYParam6.cy + 2) +
            ")",
        );
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper9, "smile");
    function journeyDiagramVCZTEJTYHelper10(journeyDiagramVCZTEJTYParam70) {
      let journeyDiagramVCZTEJTYValue156 = arc()
        .startAngle((3 * Math.PI) / 2)
        .endAngle(5 * (Math.PI / 2))
        .innerRadius(7.5)
        .outerRadius(6.8181818181818175);
      journeyDiagramVCZTEJTYParam70
        .append("path")
        .attr("class", "mouth")
        .attr("d", journeyDiagramVCZTEJTYValue156)
        .attr(
          "transform",
          "translate(" +
            journeyDiagramVCZTEJTYParam6.cx +
            "," +
            (journeyDiagramVCZTEJTYParam6.cy + 7) +
            ")",
        );
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper10, "sad");
    function journeyDiagramVCZTEJTYHelper11(journeyDiagramVCZTEJTYParam71) {
      journeyDiagramVCZTEJTYParam71
        .append("line")
        .attr("class", "mouth")
        .attr("stroke", 2)
        .attr("x1", journeyDiagramVCZTEJTYParam6.cx - 5)
        .attr("y1", journeyDiagramVCZTEJTYParam6.cy + 7)
        .attr("x2", journeyDiagramVCZTEJTYParam6.cx + 5)
        .attr("y2", journeyDiagramVCZTEJTYParam6.cy + 7)
        .attr("class", "mouth")
        .attr("stroke-width", "1px")
        .attr("stroke", "#666");
    }
    return (
      chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper11, "ambivalent"),
      journeyDiagramVCZTEJTYParam6.score > 3
        ? journeyDiagramVCZTEJTYHelper9(journeyDiagramVCZTEJTYValue81)
        : journeyDiagramVCZTEJTYParam6.score < 3
          ? journeyDiagramVCZTEJTYHelper10(journeyDiagramVCZTEJTYValue81)
          : journeyDiagramVCZTEJTYHelper11(journeyDiagramVCZTEJTYValue81),
      journeyDiagramVCZTEJTYValue80
    );
  }, "drawFace"),
  journeyDiagramVCZTEJTYValue19 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam66,
    journeyDiagramVCZTEJTYParam67,
  ) {
    let journeyDiagramVCZTEJTYValue152 =
      journeyDiagramVCZTEJTYParam66.append("circle");
    return (
      journeyDiagramVCZTEJTYValue152.attr(
        "cx",
        journeyDiagramVCZTEJTYParam67.cx,
      ),
      journeyDiagramVCZTEJTYValue152.attr(
        "cy",
        journeyDiagramVCZTEJTYParam67.cy,
      ),
      journeyDiagramVCZTEJTYValue152.attr(
        "class",
        "actor-" + journeyDiagramVCZTEJTYParam67.pos,
      ),
      journeyDiagramVCZTEJTYValue152.attr(
        "fill",
        journeyDiagramVCZTEJTYParam67.fill,
      ),
      journeyDiagramVCZTEJTYValue152.attr(
        "stroke",
        journeyDiagramVCZTEJTYParam67.stroke,
      ),
      journeyDiagramVCZTEJTYValue152.attr("r", journeyDiagramVCZTEJTYParam67.r),
      journeyDiagramVCZTEJTYValue152.class !== undefined &&
        journeyDiagramVCZTEJTYValue152.attr(
          "class",
          journeyDiagramVCZTEJTYValue152.class,
        ),
      journeyDiagramVCZTEJTYParam67.title !== undefined &&
        journeyDiagramVCZTEJTYValue152
          .append("title")
          .text(journeyDiagramVCZTEJTYParam67.title),
      journeyDiagramVCZTEJTYValue152
    );
  }, "drawCircle"),
  journeyDiagramVCZTEJTYValue20 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam114,
    journeyDiagramVCZTEJTYParam115,
  ) {
    return chunkYZCP3GAMO(
      journeyDiagramVCZTEJTYParam114,
      journeyDiagramVCZTEJTYParam115,
    );
  }, "drawText"),
  journeyDiagramVCZTEJTYValue21 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam60,
    journeyDiagramVCZTEJTYParam61,
  ) {
    function journeyDiagramVCZTEJTYHelper13(
      journeyDiagramVCZTEJTYParam83,
      journeyDiagramVCZTEJTYParam84,
      journeyDiagramVCZTEJTYParam85,
      journeyDiagramVCZTEJTYParam86,
      journeyDiagramVCZTEJTYParam87,
    ) {
      return (
        journeyDiagramVCZTEJTYParam83 +
        "," +
        journeyDiagramVCZTEJTYParam84 +
        " " +
        (journeyDiagramVCZTEJTYParam83 + journeyDiagramVCZTEJTYParam85) +
        "," +
        journeyDiagramVCZTEJTYParam84 +
        " " +
        (journeyDiagramVCZTEJTYParam83 + journeyDiagramVCZTEJTYParam85) +
        "," +
        (journeyDiagramVCZTEJTYParam84 +
          journeyDiagramVCZTEJTYParam86 -
          journeyDiagramVCZTEJTYParam87) +
        " " +
        (journeyDiagramVCZTEJTYParam83 +
          journeyDiagramVCZTEJTYParam85 -
          journeyDiagramVCZTEJTYParam87 * 1.2) +
        "," +
        (journeyDiagramVCZTEJTYParam84 + journeyDiagramVCZTEJTYParam86) +
        " " +
        journeyDiagramVCZTEJTYParam83 +
        "," +
        (journeyDiagramVCZTEJTYParam84 + journeyDiagramVCZTEJTYParam86)
      );
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper13, "genPoints");
    let journeyDiagramVCZTEJTYValue146 =
      journeyDiagramVCZTEJTYParam60.append("polygon");
    journeyDiagramVCZTEJTYValue146.attr(
      "points",
      journeyDiagramVCZTEJTYHelper13(
        journeyDiagramVCZTEJTYParam61.x,
        journeyDiagramVCZTEJTYParam61.y,
        50,
        20,
        7,
      ),
    );
    journeyDiagramVCZTEJTYValue146.attr("class", "labelBox");
    journeyDiagramVCZTEJTYParam61.y +=
      journeyDiagramVCZTEJTYParam61.labelMargin;
    journeyDiagramVCZTEJTYParam61.x +=
      0.5 * journeyDiagramVCZTEJTYParam61.labelMargin;
    journeyDiagramVCZTEJTYValue20(
      journeyDiagramVCZTEJTYParam60,
      journeyDiagramVCZTEJTYParam61,
    );
  }, "drawLabel"),
  journeyDiagramVCZTEJTYValue22 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam57,
    journeyDiagramVCZTEJTYParam58,
    journeyDiagramVCZTEJTYParam59,
  ) {
    let journeyDiagramVCZTEJTYValue143 =
        journeyDiagramVCZTEJTYParam57.append("g"),
      journeyDiagramVCZTEJTYValue144 = chunkYZCP3GAMC();
    journeyDiagramVCZTEJTYValue144.x = journeyDiagramVCZTEJTYParam58.x;
    journeyDiagramVCZTEJTYValue144.y = journeyDiagramVCZTEJTYParam58.y;
    journeyDiagramVCZTEJTYValue144.fill = journeyDiagramVCZTEJTYParam58.fill;
    journeyDiagramVCZTEJTYValue144.width =
      journeyDiagramVCZTEJTYParam59.width *
        journeyDiagramVCZTEJTYParam58.taskCount +
      journeyDiagramVCZTEJTYParam59.diagramMarginX *
        (journeyDiagramVCZTEJTYParam58.taskCount - 1);
    journeyDiagramVCZTEJTYValue144.height =
      journeyDiagramVCZTEJTYParam59.height;
    journeyDiagramVCZTEJTYValue144.class =
      "journey-section section-type-" + journeyDiagramVCZTEJTYParam58.num;
    journeyDiagramVCZTEJTYValue144.rx = 3;
    journeyDiagramVCZTEJTYValue144.ry = 3;
    journeyDiagramVCZTEJTYValue17(
      journeyDiagramVCZTEJTYValue143,
      journeyDiagramVCZTEJTYValue144,
    );
    journeyDiagramVCZTEJTYValue26(journeyDiagramVCZTEJTYParam59)(
      journeyDiagramVCZTEJTYParam58.text,
      journeyDiagramVCZTEJTYValue143,
      journeyDiagramVCZTEJTYValue144.x,
      journeyDiagramVCZTEJTYValue144.y,
      journeyDiagramVCZTEJTYValue144.width,
      journeyDiagramVCZTEJTYValue144.height,
      {
        class:
          "journey-section section-type-" + journeyDiagramVCZTEJTYParam58.num,
      },
      journeyDiagramVCZTEJTYParam59,
      journeyDiagramVCZTEJTYParam58.colour,
    );
  }, "drawSection"),
  journeyDiagramVCZTEJTYValue23 = -1,
  journeyDiagramVCZTEJTYValue24 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam13,
    journeyDiagramVCZTEJTYParam14,
    journeyDiagramVCZTEJTYParam15,
    journeyDiagramVCZTEJTYParam16,
  ) {
    let journeyDiagramVCZTEJTYValue110 =
        journeyDiagramVCZTEJTYParam14.x +
        journeyDiagramVCZTEJTYParam15.width / 2,
      journeyDiagramVCZTEJTYValue111 =
        journeyDiagramVCZTEJTYParam13.append("g");
    journeyDiagramVCZTEJTYValue23++;
    journeyDiagramVCZTEJTYValue111
      .append("line")
      .attr(
        "id",
        journeyDiagramVCZTEJTYParam16 + "-task" + journeyDiagramVCZTEJTYValue23,
      )
      .attr("x1", journeyDiagramVCZTEJTYValue110)
      .attr("y1", journeyDiagramVCZTEJTYParam14.y)
      .attr("x2", journeyDiagramVCZTEJTYValue110)
      .attr("y2", 450)
      .attr("class", "task-line")
      .attr("stroke-width", "1px")
      .attr("stroke-dasharray", "4 2")
      .attr("stroke", "#666");
    journeyDiagramVCZTEJTYValue18(journeyDiagramVCZTEJTYValue111, {
      cx: journeyDiagramVCZTEJTYValue110,
      cy: 300 + (5 - journeyDiagramVCZTEJTYParam14.score) * 30,
      score: journeyDiagramVCZTEJTYParam14.score,
    });
    let journeyDiagramVCZTEJTYValue112 = chunkYZCP3GAMC();
    journeyDiagramVCZTEJTYValue112.x = journeyDiagramVCZTEJTYParam14.x;
    journeyDiagramVCZTEJTYValue112.y = journeyDiagramVCZTEJTYParam14.y;
    journeyDiagramVCZTEJTYValue112.fill = journeyDiagramVCZTEJTYParam14.fill;
    journeyDiagramVCZTEJTYValue112.width = journeyDiagramVCZTEJTYParam15.width;
    journeyDiagramVCZTEJTYValue112.height =
      journeyDiagramVCZTEJTYParam15.height;
    journeyDiagramVCZTEJTYValue112.class =
      "task task-type-" + journeyDiagramVCZTEJTYParam14.num;
    journeyDiagramVCZTEJTYValue112.rx = 3;
    journeyDiagramVCZTEJTYValue112.ry = 3;
    journeyDiagramVCZTEJTYValue17(
      journeyDiagramVCZTEJTYValue111,
      journeyDiagramVCZTEJTYValue112,
    );
    let journeyDiagramVCZTEJTYValue113 = journeyDiagramVCZTEJTYParam14.x + 14;
    journeyDiagramVCZTEJTYParam14.people.forEach((item) => {
      let journeyDiagramVCZTEJTYValue171 =
        journeyDiagramVCZTEJTYParam14.actors[item].color;
      journeyDiagramVCZTEJTYValue19(journeyDiagramVCZTEJTYValue111, {
        cx: journeyDiagramVCZTEJTYValue113,
        cy: journeyDiagramVCZTEJTYParam14.y,
        r: 7,
        fill: journeyDiagramVCZTEJTYValue171,
        stroke: "#000",
        title: item,
        pos: journeyDiagramVCZTEJTYParam14.actors[item].position,
      });
      journeyDiagramVCZTEJTYValue113 += 10;
    });
    journeyDiagramVCZTEJTYValue26(journeyDiagramVCZTEJTYParam15)(
      journeyDiagramVCZTEJTYParam14.task,
      journeyDiagramVCZTEJTYValue111,
      journeyDiagramVCZTEJTYValue112.x,
      journeyDiagramVCZTEJTYValue112.y,
      journeyDiagramVCZTEJTYValue112.width,
      journeyDiagramVCZTEJTYValue112.height,
      {
        class: "task",
      },
      journeyDiagramVCZTEJTYParam15,
      journeyDiagramVCZTEJTYParam14.colour,
    );
  }, "drawTask"),
  journeyDiagramVCZTEJTYValue25 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam118,
    journeyDiagramVCZTEJTYParam119,
  ) {
    chunkYZCP3GAMN(
      journeyDiagramVCZTEJTYParam118,
      journeyDiagramVCZTEJTYParam119,
    );
  }, "drawBackgroundRect"),
  journeyDiagramVCZTEJTYValue26 = (function () {
    function journeyDiagramVCZTEJTYHelper5(
      journeyDiagramVCZTEJTYParam75,
      journeyDiagramVCZTEJTYParam76,
      journeyDiagramVCZTEJTYParam77,
      journeyDiagramVCZTEJTYParam78,
      journeyDiagramVCZTEJTYParam79,
      journeyDiagramVCZTEJTYParam80,
      journeyDiagramVCZTEJTYParam81,
      journeyDiagramVCZTEJTYParam82,
    ) {
      journeyDiagramVCZTEJTYHelper8(
        journeyDiagramVCZTEJTYParam76
          .append("text")
          .attr(
            "x",
            journeyDiagramVCZTEJTYParam77 + journeyDiagramVCZTEJTYParam79 / 2,
          )
          .attr(
            "y",
            journeyDiagramVCZTEJTYParam78 +
              journeyDiagramVCZTEJTYParam80 / 2 +
              5,
          )
          .style("font-color", journeyDiagramVCZTEJTYParam82)
          .style("text-anchor", "middle")
          .text(journeyDiagramVCZTEJTYParam75),
        journeyDiagramVCZTEJTYParam81,
      );
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper5, "byText");
    function journeyDiagramVCZTEJTYHelper6(
      journeyDiagramVCZTEJTYParam38,
      journeyDiagramVCZTEJTYParam39,
      journeyDiagramVCZTEJTYParam40,
      journeyDiagramVCZTEJTYParam41,
      journeyDiagramVCZTEJTYParam42,
      journeyDiagramVCZTEJTYParam43,
      journeyDiagramVCZTEJTYParam44,
      journeyDiagramVCZTEJTYParam45,
      journeyDiagramVCZTEJTYParam46,
    ) {
      let { taskFontSize, taskFontFamily } = journeyDiagramVCZTEJTYParam45,
        journeyDiagramVCZTEJTYValue135 =
          journeyDiagramVCZTEJTYParam38.split(/<br\s*\/?>/gi);
      for (
        let journeyDiagramVCZTEJTYValue140 = 0;
        journeyDiagramVCZTEJTYValue140 < journeyDiagramVCZTEJTYValue135.length;
        journeyDiagramVCZTEJTYValue140++
      ) {
        let journeyDiagramVCZTEJTYValue141 =
            journeyDiagramVCZTEJTYValue140 * taskFontSize -
            (taskFontSize * (journeyDiagramVCZTEJTYValue135.length - 1)) / 2,
          journeyDiagramVCZTEJTYValue142 = journeyDiagramVCZTEJTYParam39
            .append("text")
            .attr(
              "x",
              journeyDiagramVCZTEJTYParam40 + journeyDiagramVCZTEJTYParam42 / 2,
            )
            .attr("y", journeyDiagramVCZTEJTYParam41)
            .attr("fill", journeyDiagramVCZTEJTYParam46)
            .style("text-anchor", "middle")
            .style("font-size", taskFontSize)
            .style("font-family", taskFontFamily);
        journeyDiagramVCZTEJTYValue142
          .append("tspan")
          .attr(
            "x",
            journeyDiagramVCZTEJTYParam40 + journeyDiagramVCZTEJTYParam42 / 2,
          )
          .attr("dy", journeyDiagramVCZTEJTYValue141)
          .text(journeyDiagramVCZTEJTYValue135[journeyDiagramVCZTEJTYValue140]);
        journeyDiagramVCZTEJTYValue142
          .attr(
            "y",
            journeyDiagramVCZTEJTYParam41 + journeyDiagramVCZTEJTYParam43 / 2,
          )
          .attr("dominant-baseline", "central")
          .attr("alignment-baseline", "central");
        journeyDiagramVCZTEJTYHelper8(
          journeyDiagramVCZTEJTYValue142,
          journeyDiagramVCZTEJTYParam44,
        );
      }
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper6, "byTspan");
    function journeyDiagramVCZTEJTYHelper7(
      journeyDiagramVCZTEJTYParam47,
      journeyDiagramVCZTEJTYParam48,
      journeyDiagramVCZTEJTYParam49,
      journeyDiagramVCZTEJTYParam50,
      journeyDiagramVCZTEJTYParam51,
      journeyDiagramVCZTEJTYParam52,
      journeyDiagramVCZTEJTYParam53,
      journeyDiagramVCZTEJTYParam54,
    ) {
      let journeyDiagramVCZTEJTYValue136 =
          journeyDiagramVCZTEJTYParam48.append("switch"),
        journeyDiagramVCZTEJTYValue137 = journeyDiagramVCZTEJTYValue136
          .append("foreignObject")
          .attr("x", journeyDiagramVCZTEJTYParam49)
          .attr("y", journeyDiagramVCZTEJTYParam50)
          .attr("width", journeyDiagramVCZTEJTYParam51)
          .attr("height", journeyDiagramVCZTEJTYParam52)
          .attr("position", "fixed")
          .append("xhtml:div")
          .style("display", "table")
          .style("height", "100%")
          .style("width", "100%");
      journeyDiagramVCZTEJTYValue137
        .append("div")
        .attr("class", "label")
        .style("display", "table-cell")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .text(journeyDiagramVCZTEJTYParam47);
      journeyDiagramVCZTEJTYHelper6(
        journeyDiagramVCZTEJTYParam47,
        journeyDiagramVCZTEJTYValue136,
        journeyDiagramVCZTEJTYParam49,
        journeyDiagramVCZTEJTYParam50,
        journeyDiagramVCZTEJTYParam51,
        journeyDiagramVCZTEJTYParam52,
        journeyDiagramVCZTEJTYParam53,
        journeyDiagramVCZTEJTYParam54,
      );
      journeyDiagramVCZTEJTYHelper8(
        journeyDiagramVCZTEJTYValue137,
        journeyDiagramVCZTEJTYParam53,
      );
    }
    chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper7, "byFo");
    function journeyDiagramVCZTEJTYHelper8(
      journeyDiagramVCZTEJTYParam101,
      journeyDiagramVCZTEJTYParam102,
    ) {
      for (let journeyDiagramVCZTEJTYValue183 in journeyDiagramVCZTEJTYParam102)
        journeyDiagramVCZTEJTYValue183 in journeyDiagramVCZTEJTYParam102 &&
          journeyDiagramVCZTEJTYParam101.attr(
            journeyDiagramVCZTEJTYValue183,
            journeyDiagramVCZTEJTYParam102[journeyDiagramVCZTEJTYValue183],
          );
    }
    return (
      chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper8, "_setTextAttrs"),
      function (journeyDiagramVCZTEJTYParam94) {
        return journeyDiagramVCZTEJTYParam94.textPlacement === "fo"
          ? journeyDiagramVCZTEJTYHelper7
          : journeyDiagramVCZTEJTYParam94.textPlacement === "old"
            ? journeyDiagramVCZTEJTYHelper5
            : journeyDiagramVCZTEJTYHelper6;
      }
    );
  })(),
  journeyDiagramVCZTEJTYValue27 = {
    drawRect: journeyDiagramVCZTEJTYValue17,
    drawCircle: journeyDiagramVCZTEJTYValue19,
    drawSection: journeyDiagramVCZTEJTYValue22,
    drawText: journeyDiagramVCZTEJTYValue20,
    drawLabel: journeyDiagramVCZTEJTYValue21,
    drawTask: journeyDiagramVCZTEJTYValue24,
    drawBackgroundRect: journeyDiagramVCZTEJTYValue25,
    initGraphics: chunkAGHRB4JFN(function (
      journeyDiagramVCZTEJTYParam68,
      journeyDiagramVCZTEJTYParam69,
    ) {
      journeyDiagramVCZTEJTYValue23 = -1;
      journeyDiagramVCZTEJTYParam68
        .append("defs")
        .append("marker")
        .attr("id", journeyDiagramVCZTEJTYParam69 + "-arrowhead")
        .attr("refX", 5)
        .attr("refY", 2)
        .attr("markerWidth", 6)
        .attr("markerHeight", 4)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0,0 V 4 L6,2 Z");
    }, "initGraphics"),
  },
  journeyDiagramVCZTEJTYValue28 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam100,
  ) {
    Object.keys(journeyDiagramVCZTEJTYParam100).forEach(function (item) {
      journeyDiagramVCZTEJTYValue31[item] =
        journeyDiagramVCZTEJTYParam100[item];
    });
  }, "setConf"),
  journeyDiagramVCZTEJTYValue29 = {},
  journeyDiagramVCZTEJTYValue30 = 0;
function journeyDiagramVCZTEJTYHelper1(journeyDiagramVCZTEJTYParam11) {
  let journeyDiagramVCZTEJTYValue98 = _chunkICPOFSXXB().journey,
    journeyDiagramVCZTEJTYValue99 = journeyDiagramVCZTEJTYValue98.maxLabelWidth;
  journeyDiagramVCZTEJTYValue30 = 0;
  let journeyDiagramVCZTEJTYValue100 = 60;
  Object.keys(journeyDiagramVCZTEJTYValue29).forEach((item) => {
    let journeyDiagramVCZTEJTYValue101 =
        journeyDiagramVCZTEJTYValue29[item].color,
      journeyDiagramVCZTEJTYValue102 = {
        cx: 20,
        cy: journeyDiagramVCZTEJTYValue100,
        r: 7,
        fill: journeyDiagramVCZTEJTYValue101,
        stroke: "#000",
        pos: journeyDiagramVCZTEJTYValue29[item].position,
      };
    journeyDiagramVCZTEJTYValue27.drawCircle(
      journeyDiagramVCZTEJTYParam11,
      journeyDiagramVCZTEJTYValue102,
    );
    let journeyDiagramVCZTEJTYValue103 = journeyDiagramVCZTEJTYParam11
        .append("text")
        .attr("visibility", "hidden")
        .text(item),
      journeyDiagramVCZTEJTYValue104 = journeyDiagramVCZTEJTYValue103
        .node()
        .getBoundingClientRect().width;
    journeyDiagramVCZTEJTYValue103.remove();
    let journeyDiagramVCZTEJTYValue105 = [];
    if (journeyDiagramVCZTEJTYValue104 <= journeyDiagramVCZTEJTYValue99)
      journeyDiagramVCZTEJTYValue105 = [item];
    else {
      let journeyDiagramVCZTEJTYValue138 = item.split(" "),
        journeyDiagramVCZTEJTYValue139 = "";
      journeyDiagramVCZTEJTYValue103 = journeyDiagramVCZTEJTYParam11
        .append("text")
        .attr("visibility", "hidden");
      journeyDiagramVCZTEJTYValue138.forEach((_item) => {
        let journeyDiagramVCZTEJTYValue147 = journeyDiagramVCZTEJTYValue139
          ? `${journeyDiagramVCZTEJTYValue139} ${_item}`
          : _item;
        if (
          (journeyDiagramVCZTEJTYValue103.text(journeyDiagramVCZTEJTYValue147),
          journeyDiagramVCZTEJTYValue103.node().getBoundingClientRect().width >
            journeyDiagramVCZTEJTYValue99)
        ) {
          if (
            (journeyDiagramVCZTEJTYValue139 &&
              journeyDiagramVCZTEJTYValue105.push(
                journeyDiagramVCZTEJTYValue139,
              ),
            (journeyDiagramVCZTEJTYValue139 = _item),
            journeyDiagramVCZTEJTYValue103.text(_item),
            journeyDiagramVCZTEJTYValue103.node().getBoundingClientRect()
              .width > journeyDiagramVCZTEJTYValue99)
          ) {
            let journeyDiagramVCZTEJTYValue170 = "";
            for (let journeyDiagramVCZTEJTYValue172 of _item) {
              journeyDiagramVCZTEJTYValue170 += journeyDiagramVCZTEJTYValue172;
              journeyDiagramVCZTEJTYValue103.text(
                journeyDiagramVCZTEJTYValue170 + "-",
              );
              journeyDiagramVCZTEJTYValue103.node().getBoundingClientRect()
                .width > journeyDiagramVCZTEJTYValue99 &&
                (journeyDiagramVCZTEJTYValue105.push(
                  journeyDiagramVCZTEJTYValue170.slice(0, -1) + "-",
                ),
                (journeyDiagramVCZTEJTYValue170 =
                  journeyDiagramVCZTEJTYValue172));
            }
            journeyDiagramVCZTEJTYValue139 = journeyDiagramVCZTEJTYValue170;
          }
        } else journeyDiagramVCZTEJTYValue139 = journeyDiagramVCZTEJTYValue147;
      });
      journeyDiagramVCZTEJTYValue139 &&
        journeyDiagramVCZTEJTYValue105.push(journeyDiagramVCZTEJTYValue139);
      journeyDiagramVCZTEJTYValue103.remove();
    }
    journeyDiagramVCZTEJTYValue105.forEach((_item, index) => {
      let journeyDiagramVCZTEJTYValue163 = {
          x: 40,
          y: journeyDiagramVCZTEJTYValue100 + 7 + index * 20,
          fill: "#666",
          text: _item,
          textMargin: journeyDiagramVCZTEJTYValue98.boxTextMargin ?? 5,
        },
        journeyDiagramVCZTEJTYValue164 = journeyDiagramVCZTEJTYValue27
          .drawText(
            journeyDiagramVCZTEJTYParam11,
            journeyDiagramVCZTEJTYValue163,
          )
          .node()
          .getBoundingClientRect().width;
      journeyDiagramVCZTEJTYValue164 > journeyDiagramVCZTEJTYValue30 &&
        journeyDiagramVCZTEJTYValue164 >
          journeyDiagramVCZTEJTYValue98.leftMargin -
            journeyDiagramVCZTEJTYValue164 &&
        (journeyDiagramVCZTEJTYValue30 = journeyDiagramVCZTEJTYValue164);
    });
    journeyDiagramVCZTEJTYValue100 += Math.max(
      20,
      journeyDiagramVCZTEJTYValue105.length * 20,
    );
  });
}
chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper1, "drawActorLegend");
var journeyDiagramVCZTEJTYValue31 = _chunkICPOFSXXB().journey,
  journeyDiagramVCZTEJTYValue32 = 0,
  journeyDiagramVCZTEJTYValue33 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam7,
    journeyDiagramVCZTEJTYParam8,
    journeyDiagramVCZTEJTYParam9,
    journeyDiagramVCZTEJTYParam10,
  ) {
    let journeyDiagramVCZTEJTYValue82 = _chunkICPOFSXXB(),
      journeyDiagramVCZTEJTYValue83 =
        journeyDiagramVCZTEJTYValue82.journey.titleColor,
      journeyDiagramVCZTEJTYValue84 =
        journeyDiagramVCZTEJTYValue82.journey.titleFontSize,
      journeyDiagramVCZTEJTYValue85 =
        journeyDiagramVCZTEJTYValue82.journey.titleFontFamily,
      journeyDiagramVCZTEJTYValue86 =
        journeyDiagramVCZTEJTYValue82.securityLevel,
      journeyDiagramVCZTEJTYValue87;
    journeyDiagramVCZTEJTYValue86 === "sandbox" &&
      (journeyDiagramVCZTEJTYValue87 = Src(
        "#i" + journeyDiagramVCZTEJTYParam8,
      ));
    let journeyDiagramVCZTEJTYValue88 = Src(
      journeyDiagramVCZTEJTYValue86 === "sandbox"
        ? journeyDiagramVCZTEJTYValue87.nodes()[0].contentDocument.body
        : "body",
    );
    journeyDiagramVCZTEJTYValue34.init();
    let journeyDiagramVCZTEJTYValue89 = journeyDiagramVCZTEJTYValue88.select(
      "#" + journeyDiagramVCZTEJTYParam8,
    );
    journeyDiagramVCZTEJTYValue27.initGraphics(
      journeyDiagramVCZTEJTYValue89,
      journeyDiagramVCZTEJTYParam8,
    );
    let journeyDiagramVCZTEJTYValue90 =
        journeyDiagramVCZTEJTYParam10.db.getTasks(),
      journeyDiagramVCZTEJTYValue91 =
        journeyDiagramVCZTEJTYParam10.db.getDiagramTitle(),
      journeyDiagramVCZTEJTYValue92 =
        journeyDiagramVCZTEJTYParam10.db.getActors();
    for (let journeyDiagramVCZTEJTYValue184 in journeyDiagramVCZTEJTYValue29)
      delete journeyDiagramVCZTEJTYValue29[journeyDiagramVCZTEJTYValue184];
    let journeyDiagramVCZTEJTYValue93 = 0;
    journeyDiagramVCZTEJTYValue92.forEach((item) => {
      journeyDiagramVCZTEJTYValue29[item] = {
        color:
          journeyDiagramVCZTEJTYValue31.actorColours[
            journeyDiagramVCZTEJTYValue93 %
              journeyDiagramVCZTEJTYValue31.actorColours.length
          ],
        position: journeyDiagramVCZTEJTYValue93,
      };
      journeyDiagramVCZTEJTYValue93++;
    });
    journeyDiagramVCZTEJTYHelper1(journeyDiagramVCZTEJTYValue89);
    journeyDiagramVCZTEJTYValue32 =
      journeyDiagramVCZTEJTYValue31.leftMargin + journeyDiagramVCZTEJTYValue30;
    journeyDiagramVCZTEJTYValue34.insert(
      0,
      0,
      journeyDiagramVCZTEJTYValue32,
      Object.keys(journeyDiagramVCZTEJTYValue29).length * 50,
    );
    journeyDiagramVCZTEJTYValue37(
      journeyDiagramVCZTEJTYValue89,
      journeyDiagramVCZTEJTYValue90,
      0,
      journeyDiagramVCZTEJTYParam8,
    );
    let journeyDiagramVCZTEJTYValue94 =
      journeyDiagramVCZTEJTYValue34.getBounds();
    journeyDiagramVCZTEJTYValue91 &&
      journeyDiagramVCZTEJTYValue89
        .append("text")
        .text(journeyDiagramVCZTEJTYValue91)
        .attr("x", journeyDiagramVCZTEJTYValue32)
        .attr("font-size", journeyDiagramVCZTEJTYValue84)
        .attr("font-weight", "bold")
        .attr("y", 25)
        .attr("fill", journeyDiagramVCZTEJTYValue83)
        .attr("font-family", journeyDiagramVCZTEJTYValue85);
    let journeyDiagramVCZTEJTYValue95 =
        journeyDiagramVCZTEJTYValue94.stopy -
        journeyDiagramVCZTEJTYValue94.starty +
        2 * journeyDiagramVCZTEJTYValue31.diagramMarginY,
      journeyDiagramVCZTEJTYValue96 =
        journeyDiagramVCZTEJTYValue32 +
        journeyDiagramVCZTEJTYValue94.stopx +
        2 * journeyDiagramVCZTEJTYValue31.diagramMarginX;
    _chunkICPOFSXXC(
      journeyDiagramVCZTEJTYValue89,
      journeyDiagramVCZTEJTYValue95,
      journeyDiagramVCZTEJTYValue96,
      journeyDiagramVCZTEJTYValue31.useMaxWidth,
    );
    journeyDiagramVCZTEJTYValue89
      .append("line")
      .attr("x1", journeyDiagramVCZTEJTYValue32)
      .attr("y1", journeyDiagramVCZTEJTYValue31.height * 4)
      .attr(
        "x2",
        journeyDiagramVCZTEJTYValue96 - journeyDiagramVCZTEJTYValue32 - 4,
      )
      .attr("y2", journeyDiagramVCZTEJTYValue31.height * 4)
      .attr("stroke-width", 4)
      .attr("stroke", "black")
      .attr(
        "marker-end",
        "url(#" + journeyDiagramVCZTEJTYParam8 + "-arrowhead)",
      );
    let journeyDiagramVCZTEJTYValue97 = journeyDiagramVCZTEJTYValue91 ? 70 : 0;
    journeyDiagramVCZTEJTYValue89.attr(
      "viewBox",
      `${journeyDiagramVCZTEJTYValue94.startx} -25 ${journeyDiagramVCZTEJTYValue96} ${journeyDiagramVCZTEJTYValue95 + journeyDiagramVCZTEJTYValue97}`,
    );
    journeyDiagramVCZTEJTYValue89.attr("preserveAspectRatio", "xMinYMin meet");
    journeyDiagramVCZTEJTYValue89.attr(
      "height",
      journeyDiagramVCZTEJTYValue95 + journeyDiagramVCZTEJTYValue97 + 25,
    );
  }, "draw"),
  journeyDiagramVCZTEJTYValue34 = {
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
      journeyDiagramVCZTEJTYParam103,
      journeyDiagramVCZTEJTYParam104,
      journeyDiagramVCZTEJTYParam105,
      journeyDiagramVCZTEJTYParam106,
    ) {
      journeyDiagramVCZTEJTYParam103[journeyDiagramVCZTEJTYParam104] ===
      undefined
        ? (journeyDiagramVCZTEJTYParam103[journeyDiagramVCZTEJTYParam104] =
            journeyDiagramVCZTEJTYParam105)
        : (journeyDiagramVCZTEJTYParam103[journeyDiagramVCZTEJTYParam104] =
            journeyDiagramVCZTEJTYParam106(
              journeyDiagramVCZTEJTYParam105,
              journeyDiagramVCZTEJTYParam103[journeyDiagramVCZTEJTYParam104],
            ));
    }, "updateVal"),
    updateBounds: chunkAGHRB4JFN(function (
      journeyDiagramVCZTEJTYParam21,
      journeyDiagramVCZTEJTYParam22,
      journeyDiagramVCZTEJTYParam23,
      journeyDiagramVCZTEJTYParam24,
    ) {
      let journeyDiagramVCZTEJTYValue127 = _chunkICPOFSXXB().journey,
        journeyDiagramVCZTEJTYValue128 = this,
        journeyDiagramVCZTEJTYValue129 = 0;
      function journeyDiagramVCZTEJTYHelper12(journeyDiagramVCZTEJTYParam29) {
        return chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam37) {
          journeyDiagramVCZTEJTYValue129++;
          let journeyDiagramVCZTEJTYValue134 =
            journeyDiagramVCZTEJTYValue128.sequenceItems.length -
            journeyDiagramVCZTEJTYValue129 +
            1;
          journeyDiagramVCZTEJTYValue128.updateVal(
            journeyDiagramVCZTEJTYParam37,
            "starty",
            journeyDiagramVCZTEJTYParam22 -
              journeyDiagramVCZTEJTYValue134 *
                journeyDiagramVCZTEJTYValue127.boxMargin,
            Math.min,
          );
          journeyDiagramVCZTEJTYValue128.updateVal(
            journeyDiagramVCZTEJTYParam37,
            "stopy",
            journeyDiagramVCZTEJTYParam24 +
              journeyDiagramVCZTEJTYValue134 *
                journeyDiagramVCZTEJTYValue127.boxMargin,
            Math.max,
          );
          journeyDiagramVCZTEJTYValue128.updateVal(
            journeyDiagramVCZTEJTYValue34.data,
            "startx",
            journeyDiagramVCZTEJTYParam21 -
              journeyDiagramVCZTEJTYValue134 *
                journeyDiagramVCZTEJTYValue127.boxMargin,
            Math.min,
          );
          journeyDiagramVCZTEJTYValue128.updateVal(
            journeyDiagramVCZTEJTYValue34.data,
            "stopx",
            journeyDiagramVCZTEJTYParam23 +
              journeyDiagramVCZTEJTYValue134 *
                journeyDiagramVCZTEJTYValue127.boxMargin,
            Math.max,
          );
          journeyDiagramVCZTEJTYParam29 !== "activation" &&
            (journeyDiagramVCZTEJTYValue128.updateVal(
              journeyDiagramVCZTEJTYParam37,
              "startx",
              journeyDiagramVCZTEJTYParam21 -
                journeyDiagramVCZTEJTYValue134 *
                  journeyDiagramVCZTEJTYValue127.boxMargin,
              Math.min,
            ),
            journeyDiagramVCZTEJTYValue128.updateVal(
              journeyDiagramVCZTEJTYParam37,
              "stopx",
              journeyDiagramVCZTEJTYParam23 +
                journeyDiagramVCZTEJTYValue134 *
                  journeyDiagramVCZTEJTYValue127.boxMargin,
              Math.max,
            ),
            journeyDiagramVCZTEJTYValue128.updateVal(
              journeyDiagramVCZTEJTYValue34.data,
              "starty",
              journeyDiagramVCZTEJTYParam22 -
                journeyDiagramVCZTEJTYValue134 *
                  journeyDiagramVCZTEJTYValue127.boxMargin,
              Math.min,
            ),
            journeyDiagramVCZTEJTYValue128.updateVal(
              journeyDiagramVCZTEJTYValue34.data,
              "stopy",
              journeyDiagramVCZTEJTYParam24 +
                journeyDiagramVCZTEJTYValue134 *
                  journeyDiagramVCZTEJTYValue127.boxMargin,
              Math.max,
            ));
        }, "updateItemBounds");
      }
      chunkAGHRB4JFN(journeyDiagramVCZTEJTYHelper12, "updateFn");
      this.sequenceItems.forEach(journeyDiagramVCZTEJTYHelper12());
    }, "updateBounds"),
    insert: chunkAGHRB4JFN(function (
      journeyDiagramVCZTEJTYParam62,
      journeyDiagramVCZTEJTYParam63,
      journeyDiagramVCZTEJTYParam64,
      journeyDiagramVCZTEJTYParam65,
    ) {
      let journeyDiagramVCZTEJTYValue148 = Math.min(
          journeyDiagramVCZTEJTYParam62,
          journeyDiagramVCZTEJTYParam64,
        ),
        journeyDiagramVCZTEJTYValue149 = Math.max(
          journeyDiagramVCZTEJTYParam62,
          journeyDiagramVCZTEJTYParam64,
        ),
        journeyDiagramVCZTEJTYValue150 = Math.min(
          journeyDiagramVCZTEJTYParam63,
          journeyDiagramVCZTEJTYParam65,
        ),
        journeyDiagramVCZTEJTYValue151 = Math.max(
          journeyDiagramVCZTEJTYParam63,
          journeyDiagramVCZTEJTYParam65,
        );
      this.updateVal(
        journeyDiagramVCZTEJTYValue34.data,
        "startx",
        journeyDiagramVCZTEJTYValue148,
        Math.min,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYValue34.data,
        "starty",
        journeyDiagramVCZTEJTYValue150,
        Math.min,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYValue34.data,
        "stopx",
        journeyDiagramVCZTEJTYValue149,
        Math.max,
      );
      this.updateVal(
        journeyDiagramVCZTEJTYValue34.data,
        "stopy",
        journeyDiagramVCZTEJTYValue151,
        Math.max,
      );
      this.updateBounds(
        journeyDiagramVCZTEJTYValue148,
        journeyDiagramVCZTEJTYValue150,
        journeyDiagramVCZTEJTYValue149,
        journeyDiagramVCZTEJTYValue151,
      );
    }, "insert"),
    bumpVerticalPos: chunkAGHRB4JFN(function (journeyDiagramVCZTEJTYParam95) {
      this.verticalPos += journeyDiagramVCZTEJTYParam95;
      this.data.stopy = this.verticalPos;
    }, "bumpVerticalPos"),
    getVerticalPos: chunkAGHRB4JFN(function () {
      return this.verticalPos;
    }, "getVerticalPos"),
    getBounds: chunkAGHRB4JFN(function () {
      return this.data;
    }, "getBounds"),
  },
  journeyDiagramVCZTEJTYValue35 = journeyDiagramVCZTEJTYValue31.sectionFills,
  journeyDiagramVCZTEJTYValue36 = journeyDiagramVCZTEJTYValue31.sectionColours,
  journeyDiagramVCZTEJTYValue37 = chunkAGHRB4JFN(function (
    journeyDiagramVCZTEJTYParam17,
    journeyDiagramVCZTEJTYParam18,
    journeyDiagramVCZTEJTYParam19,
    journeyDiagramVCZTEJTYParam20,
  ) {
    let journeyDiagramVCZTEJTYValue114 = _chunkICPOFSXXB().journey,
      journeyDiagramVCZTEJTYValue115 = "",
      journeyDiagramVCZTEJTYValue116 =
        journeyDiagramVCZTEJTYParam19 +
        (journeyDiagramVCZTEJTYValue114.height * 2 +
          journeyDiagramVCZTEJTYValue114.diagramMarginY),
      journeyDiagramVCZTEJTYValue117 = 0,
      journeyDiagramVCZTEJTYValue118 = "#CCC",
      journeyDiagramVCZTEJTYValue119 = "black",
      journeyDiagramVCZTEJTYValue120 = 0;
    for (let [
      journeyDiagramVCZTEJTYValue130,
      journeyDiagramVCZTEJTYValue131,
    ] of journeyDiagramVCZTEJTYParam18.entries()) {
      if (
        journeyDiagramVCZTEJTYValue115 !==
        journeyDiagramVCZTEJTYValue131.section
      ) {
        journeyDiagramVCZTEJTYValue118 =
          journeyDiagramVCZTEJTYValue35[
            journeyDiagramVCZTEJTYValue117 %
              journeyDiagramVCZTEJTYValue35.length
          ];
        journeyDiagramVCZTEJTYValue120 =
          journeyDiagramVCZTEJTYValue117 % journeyDiagramVCZTEJTYValue35.length;
        journeyDiagramVCZTEJTYValue119 =
          journeyDiagramVCZTEJTYValue36[
            journeyDiagramVCZTEJTYValue117 %
              journeyDiagramVCZTEJTYValue36.length
          ];
        let journeyDiagramVCZTEJTYValue153 = 0,
          journeyDiagramVCZTEJTYValue154 =
            journeyDiagramVCZTEJTYValue131.section;
        for (
          let journeyDiagramVCZTEJTYValue180 = journeyDiagramVCZTEJTYValue130;
          journeyDiagramVCZTEJTYValue180 <
            journeyDiagramVCZTEJTYParam18.length &&
          journeyDiagramVCZTEJTYParam18[journeyDiagramVCZTEJTYValue180]
            .section == journeyDiagramVCZTEJTYValue154;
          journeyDiagramVCZTEJTYValue180++
        )
          journeyDiagramVCZTEJTYValue153 += 1;
        let journeyDiagramVCZTEJTYValue155 = {
          x:
            journeyDiagramVCZTEJTYValue130 *
              journeyDiagramVCZTEJTYValue114.taskMargin +
            journeyDiagramVCZTEJTYValue130 *
              journeyDiagramVCZTEJTYValue114.width +
            journeyDiagramVCZTEJTYValue32,
          y: 50,
          text: journeyDiagramVCZTEJTYValue131.section,
          fill: journeyDiagramVCZTEJTYValue118,
          num: journeyDiagramVCZTEJTYValue120,
          colour: journeyDiagramVCZTEJTYValue119,
          taskCount: journeyDiagramVCZTEJTYValue153,
        };
        journeyDiagramVCZTEJTYValue27.drawSection(
          journeyDiagramVCZTEJTYParam17,
          journeyDiagramVCZTEJTYValue155,
          journeyDiagramVCZTEJTYValue114,
        );
        journeyDiagramVCZTEJTYValue115 = journeyDiagramVCZTEJTYValue131.section;
        journeyDiagramVCZTEJTYValue117++;
      }
      let journeyDiagramVCZTEJTYValue133 =
        journeyDiagramVCZTEJTYValue131.people.reduce(
          (accumulator, current) => (
            journeyDiagramVCZTEJTYValue29[current] &&
              (accumulator[current] = journeyDiagramVCZTEJTYValue29[current]),
            accumulator
          ),
          {},
        );
      journeyDiagramVCZTEJTYValue131.x =
        journeyDiagramVCZTEJTYValue130 *
          journeyDiagramVCZTEJTYValue114.taskMargin +
        journeyDiagramVCZTEJTYValue130 * journeyDiagramVCZTEJTYValue114.width +
        journeyDiagramVCZTEJTYValue32;
      journeyDiagramVCZTEJTYValue131.y = journeyDiagramVCZTEJTYValue116;
      journeyDiagramVCZTEJTYValue131.width =
        journeyDiagramVCZTEJTYValue114.diagramMarginX;
      journeyDiagramVCZTEJTYValue131.height =
        journeyDiagramVCZTEJTYValue114.diagramMarginY;
      journeyDiagramVCZTEJTYValue131.colour = journeyDiagramVCZTEJTYValue119;
      journeyDiagramVCZTEJTYValue131.fill = journeyDiagramVCZTEJTYValue118;
      journeyDiagramVCZTEJTYValue131.num = journeyDiagramVCZTEJTYValue120;
      journeyDiagramVCZTEJTYValue131.actors = journeyDiagramVCZTEJTYValue133;
      journeyDiagramVCZTEJTYValue27.drawTask(
        journeyDiagramVCZTEJTYParam17,
        journeyDiagramVCZTEJTYValue131,
        journeyDiagramVCZTEJTYValue114,
        journeyDiagramVCZTEJTYParam20,
      );
      journeyDiagramVCZTEJTYValue34.insert(
        journeyDiagramVCZTEJTYValue131.x,
        journeyDiagramVCZTEJTYValue131.y,
        journeyDiagramVCZTEJTYValue131.x +
          journeyDiagramVCZTEJTYValue131.width +
          journeyDiagramVCZTEJTYValue114.taskMargin,
        450,
      );
    }
  }, "drawTasks"),
  $ = {
    setConf: journeyDiagramVCZTEJTYValue28,
    draw: journeyDiagramVCZTEJTYValue33,
  };
export const journeyDiagramVCZTEJTY = {
  parser: journeyDiagramVCZTEJTYValue2,
  db: journeyDiagramVCZTEJTYValue15,
  renderer: $,
  styles: journeyDiagramVCZTEJTYValue16,
  init: chunkAGHRB4JFN((journeyDiagramVCZTEJTYParam110) => {
    $.setConf(journeyDiagramVCZTEJTYParam110.journey);
    journeyDiagramVCZTEJTYValue15.clear();
  }, "init"),
};
