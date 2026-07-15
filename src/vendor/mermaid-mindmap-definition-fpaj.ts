// Restored from ref/webview/assets/mindmap-definition-VGOIOE7T-DdYOkKZJ.js
// Flat boundary. Vendored mindmapDefinitionVGOIOE7T chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { invertI, invertO, invertR } from "./color-convert";
import {
  _chunkABZYJK2DL,
  chunkABZYJK2DY,
  _chunkABZYJK2DM,
} from "./katex-auto-render";
import { chunk55IACEB6 } from "./chunk-55-iaceb6-cslsub-lb";
import { chunkQN33PNHL } from "./chunk-qn33-pnhl-dv-z-pb-bs-u";
import { chunkN4CR4FBYR, chunkN4CR4FBYT } from "./mermaid-layout-loader-fpaj";
import { uuidV4 } from "../utils/uuid-v4";
const _chunkABZYJK2DD = chunkABZYJK2DY;
var mindmapDefinitionVGOIOE7TValue1 = (function () {
  var mindmapDefinitionVGOIOE7TValue7 = chunkAGHRB4JFN(function (
      mindmapDefinitionVGOIOE7TParam45,
      mindmapDefinitionVGOIOE7TParam46,
      mindmapDefinitionVGOIOE7TParam47,
      mindmapDefinitionVGOIOE7TParam48,
    ) {
      for (
        mindmapDefinitionVGOIOE7TParam47 ||= {},
          mindmapDefinitionVGOIOE7TParam48 =
            mindmapDefinitionVGOIOE7TParam45.length;
        mindmapDefinitionVGOIOE7TParam48--;
        mindmapDefinitionVGOIOE7TParam47[
          mindmapDefinitionVGOIOE7TParam45[mindmapDefinitionVGOIOE7TParam48]
        ] = mindmapDefinitionVGOIOE7TParam46
      );
      return mindmapDefinitionVGOIOE7TParam47;
    }, "o"),
    mindmapDefinitionVGOIOE7TValue8 = [1, 4],
    mindmapDefinitionVGOIOE7TValue9 = [1, 13],
    mindmapDefinitionVGOIOE7TValue10 = [1, 12],
    mindmapDefinitionVGOIOE7TValue11 = [1, 15],
    mindmapDefinitionVGOIOE7TValue12 = [1, 16],
    mindmapDefinitionVGOIOE7TValue13 = [1, 20],
    mindmapDefinitionVGOIOE7TValue14 = [1, 19],
    mindmapDefinitionVGOIOE7TValue15 = [6, 7, 8],
    mindmapDefinitionVGOIOE7TValue16 = [1, 26],
    mindmapDefinitionVGOIOE7TValue17 = [1, 24],
    mindmapDefinitionVGOIOE7TValue18 = [1, 25],
    mindmapDefinitionVGOIOE7TValue19 = [6, 7, 11],
    mindmapDefinitionVGOIOE7TValue20 = [1, 6, 13, 15, 16, 19, 22],
    mindmapDefinitionVGOIOE7TValue21 = [1, 33],
    mindmapDefinitionVGOIOE7TValue22 = [1, 34],
    mindmapDefinitionVGOIOE7TValue23 = [1, 6, 7, 11, 13, 15, 16, 19, 22],
    mindmapDefinitionVGOIOE7TValue24 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        mindMap: 4,
        spaceLines: 5,
        SPACELINE: 6,
        NL: 7,
        MINDMAP: 8,
        document: 9,
        stop: 10,
        EOF: 11,
        statement: 12,
        SPACELIST: 13,
        node: 14,
        ICON: 15,
        CLASS: 16,
        nodeWithId: 17,
        nodeWithoutId: 18,
        NODE_DSTART: 19,
        NODE_DESCR: 20,
        NODE_DEND: 21,
        NODE_ID: 22,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        6: "SPACELINE",
        7: "NL",
        8: "MINDMAP",
        11: "EOF",
        13: "SPACELIST",
        15: "ICON",
        16: "CLASS",
        19: "NODE_DSTART",
        20: "NODE_DESCR",
        21: "NODE_DEND",
        22: "NODE_ID",
      },
      productions_: [
        0,
        [3, 1],
        [3, 2],
        [5, 1],
        [5, 2],
        [5, 2],
        [4, 2],
        [4, 3],
        [10, 1],
        [10, 1],
        [10, 1],
        [10, 2],
        [10, 2],
        [9, 3],
        [9, 2],
        [12, 2],
        [12, 2],
        [12, 2],
        [12, 1],
        [12, 1],
        [12, 1],
        [12, 1],
        [12, 1],
        [14, 1],
        [14, 1],
        [18, 3],
        [17, 1],
        [17, 4],
      ],
      performAction: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam8,
        mindmapDefinitionVGOIOE7TParam9,
        mindmapDefinitionVGOIOE7TParam10,
        mindmapDefinitionVGOIOE7TParam11,
        mindmapDefinitionVGOIOE7TParam12,
        mindmapDefinitionVGOIOE7TParam13,
        mindmapDefinitionVGOIOE7TParam14,
      ) {
        var mindmapDefinitionVGOIOE7TValue58 =
          mindmapDefinitionVGOIOE7TParam13.length - 1;
        switch (mindmapDefinitionVGOIOE7TParam12) {
          case 6:
          case 7:
            return mindmapDefinitionVGOIOE7TParam11;
          case 8:
            mindmapDefinitionVGOIOE7TParam11.getLogger().trace("Stop NL ");
            break;
          case 9:
            mindmapDefinitionVGOIOE7TParam11.getLogger().trace("Stop EOF ");
            break;
          case 11:
            mindmapDefinitionVGOIOE7TParam11.getLogger().trace("Stop NL2 ");
            break;
          case 12:
            mindmapDefinitionVGOIOE7TParam11.getLogger().trace("Stop EOF2 ");
            break;
          case 15:
            mindmapDefinitionVGOIOE7TParam11
              .getLogger()
              .info(
                "Node: ",
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ].id,
              );
            mindmapDefinitionVGOIOE7TParam11.addNode(
              mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58 - 1
              ].length,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .id,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .descr,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .type,
            );
            break;
          case 16:
            mindmapDefinitionVGOIOE7TParam11
              .getLogger()
              .trace(
                "Icon: ",
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ],
              );
            mindmapDefinitionVGOIOE7TParam11.decorateNode({
              icon: mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58
              ],
            });
            break;
          case 17:
          case 21:
            mindmapDefinitionVGOIOE7TParam11.decorateNode({
              class:
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ],
            });
            break;
          case 18:
            mindmapDefinitionVGOIOE7TParam11.getLogger().trace("SPACELIST");
            break;
          case 19:
            mindmapDefinitionVGOIOE7TParam11
              .getLogger()
              .trace(
                "Node: ",
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ].id,
              );
            mindmapDefinitionVGOIOE7TParam11.addNode(
              0,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .id,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .descr,
              mindmapDefinitionVGOIOE7TParam13[mindmapDefinitionVGOIOE7TValue58]
                .type,
            );
            break;
          case 20:
            mindmapDefinitionVGOIOE7TParam11.decorateNode({
              icon: mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58
              ],
            });
            break;
          case 25:
            mindmapDefinitionVGOIOE7TParam11
              .getLogger()
              .trace(
                "node found ..",
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 2
                ],
              );
            this.$ = {
              id: mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58 - 1
              ],
              descr:
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 1
                ],
              type: mindmapDefinitionVGOIOE7TParam11.getType(
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 2
                ],
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ],
              ),
            };
            break;
          case 26:
            this.$ = {
              id: mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58
              ],
              descr:
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ],
              type: mindmapDefinitionVGOIOE7TParam11.nodeType.DEFAULT,
            };
            break;
          case 27:
            mindmapDefinitionVGOIOE7TParam11
              .getLogger()
              .trace(
                "node found ..",
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 3
                ],
              );
            this.$ = {
              id: mindmapDefinitionVGOIOE7TParam13[
                mindmapDefinitionVGOIOE7TValue58 - 3
              ],
              descr:
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 1
                ],
              type: mindmapDefinitionVGOIOE7TParam11.getType(
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58 - 2
                ],
                mindmapDefinitionVGOIOE7TParam13[
                  mindmapDefinitionVGOIOE7TValue58
                ],
              ),
            };
            break;
        }
      }, "anonymous"),
      table: [
        {
          3: 1,
          4: 2,
          5: 3,
          6: [1, 5],
          8: mindmapDefinitionVGOIOE7TValue8,
        },
        {
          1: [3],
        },
        {
          1: [2, 1],
        },
        {
          4: 6,
          6: [1, 7],
          7: [1, 8],
          8: mindmapDefinitionVGOIOE7TValue8,
        },
        {
          6: mindmapDefinitionVGOIOE7TValue9,
          7: [1, 10],
          9: 9,
          12: 11,
          13: mindmapDefinitionVGOIOE7TValue10,
          14: 14,
          15: mindmapDefinitionVGOIOE7TValue11,
          16: mindmapDefinitionVGOIOE7TValue12,
          17: 17,
          18: 18,
          19: mindmapDefinitionVGOIOE7TValue13,
          22: mindmapDefinitionVGOIOE7TValue14,
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue15,
          [2, 3],
        ),
        {
          1: [2, 2],
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue15,
          [2, 4],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue15,
          [2, 5],
        ),
        {
          1: [2, 6],
          6: mindmapDefinitionVGOIOE7TValue9,
          12: 21,
          13: mindmapDefinitionVGOIOE7TValue10,
          14: 14,
          15: mindmapDefinitionVGOIOE7TValue11,
          16: mindmapDefinitionVGOIOE7TValue12,
          17: 17,
          18: 18,
          19: mindmapDefinitionVGOIOE7TValue13,
          22: mindmapDefinitionVGOIOE7TValue14,
        },
        {
          6: mindmapDefinitionVGOIOE7TValue9,
          9: 22,
          12: 11,
          13: mindmapDefinitionVGOIOE7TValue10,
          14: 14,
          15: mindmapDefinitionVGOIOE7TValue11,
          16: mindmapDefinitionVGOIOE7TValue12,
          17: 17,
          18: 18,
          19: mindmapDefinitionVGOIOE7TValue13,
          22: mindmapDefinitionVGOIOE7TValue14,
        },
        {
          6: mindmapDefinitionVGOIOE7TValue16,
          7: mindmapDefinitionVGOIOE7TValue17,
          10: 23,
          11: mindmapDefinitionVGOIOE7TValue18,
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 22],
          {
            17: 17,
            18: 18,
            14: 27,
            15: [1, 28],
            16: [1, 29],
            19: mindmapDefinitionVGOIOE7TValue13,
            22: mindmapDefinitionVGOIOE7TValue14,
          },
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 18],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 19],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 20],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 21],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 23],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 24],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 26],
          {
            19: [1, 30],
          },
        ),
        {
          20: [1, 31],
        },
        {
          6: mindmapDefinitionVGOIOE7TValue16,
          7: mindmapDefinitionVGOIOE7TValue17,
          10: 32,
          11: mindmapDefinitionVGOIOE7TValue18,
        },
        {
          1: [2, 7],
          6: mindmapDefinitionVGOIOE7TValue9,
          12: 21,
          13: mindmapDefinitionVGOIOE7TValue10,
          14: 14,
          15: mindmapDefinitionVGOIOE7TValue11,
          16: mindmapDefinitionVGOIOE7TValue12,
          17: 17,
          18: 18,
          19: mindmapDefinitionVGOIOE7TValue13,
          22: mindmapDefinitionVGOIOE7TValue14,
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue20,
          [2, 14],
          {
            7: mindmapDefinitionVGOIOE7TValue21,
            11: mindmapDefinitionVGOIOE7TValue22,
          },
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue23,
          [2, 8],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue23,
          [2, 9],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue23,
          [2, 10],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 15],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 16],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 17],
        ),
        {
          20: [1, 35],
        },
        {
          21: [1, 36],
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue20,
          [2, 13],
          {
            7: mindmapDefinitionVGOIOE7TValue21,
            11: mindmapDefinitionVGOIOE7TValue22,
          },
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue23,
          [2, 11],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue23,
          [2, 12],
        ),
        {
          21: [1, 37],
        },
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 25],
        ),
        mindmapDefinitionVGOIOE7TValue7(
          mindmapDefinitionVGOIOE7TValue19,
          [2, 27],
        ),
      ],
      defaultActions: {
        2: [2, 1],
        6: [2, 2],
      },
      parseError: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam41,
        mindmapDefinitionVGOIOE7TParam42,
      ) {
        if (mindmapDefinitionVGOIOE7TParam42.recoverable)
          this.trace(mindmapDefinitionVGOIOE7TParam41);
        else {
          var mindmapDefinitionVGOIOE7TValue108 = Error(
            mindmapDefinitionVGOIOE7TParam41,
          );
          throw (
            (mindmapDefinitionVGOIOE7TValue108.hash =
              mindmapDefinitionVGOIOE7TParam42),
            mindmapDefinitionVGOIOE7TValue108
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam1) {
        var mindmapDefinitionVGOIOE7TValue25 = this,
          mindmapDefinitionVGOIOE7TValue26 = [0],
          mindmapDefinitionVGOIOE7TValue27 = [],
          mindmapDefinitionVGOIOE7TValue28 = [null],
          mindmapDefinitionVGOIOE7TValue29 = [],
          mindmapDefinitionVGOIOE7TValue30 = this.table,
          mindmapDefinitionVGOIOE7TValue31 = "",
          mindmapDefinitionVGOIOE7TValue32 = 0,
          mindmapDefinitionVGOIOE7TValue33 = 0,
          mindmapDefinitionVGOIOE7TValue34 = 0,
          mindmapDefinitionVGOIOE7TValue37 =
            mindmapDefinitionVGOIOE7TValue29.slice.call(arguments, 1),
          mindmapDefinitionVGOIOE7TValue38 = Object.create(this.lexer),
          mindmapDefinitionVGOIOE7TValue39 = {
            yy: {},
          };
        for (var mindmapDefinitionVGOIOE7TValue40 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            mindmapDefinitionVGOIOE7TValue40,
          ) &&
            (mindmapDefinitionVGOIOE7TValue39.yy[
              mindmapDefinitionVGOIOE7TValue40
            ] = this.yy[mindmapDefinitionVGOIOE7TValue40]);
        mindmapDefinitionVGOIOE7TValue38.setInput(
          mindmapDefinitionVGOIOE7TParam1,
          mindmapDefinitionVGOIOE7TValue39.yy,
        );
        mindmapDefinitionVGOIOE7TValue39.yy.lexer =
          mindmapDefinitionVGOIOE7TValue38;
        mindmapDefinitionVGOIOE7TValue39.yy.parser = this;
        mindmapDefinitionVGOIOE7TValue38.yylloc === undefined &&
          (mindmapDefinitionVGOIOE7TValue38.yylloc = {});
        var mindmapDefinitionVGOIOE7TValue41 =
          mindmapDefinitionVGOIOE7TValue38.yylloc;
        mindmapDefinitionVGOIOE7TValue29.push(mindmapDefinitionVGOIOE7TValue41);
        var mindmapDefinitionVGOIOE7TValue42 =
          mindmapDefinitionVGOIOE7TValue38.options &&
          mindmapDefinitionVGOIOE7TValue38.options.ranges;
        typeof mindmapDefinitionVGOIOE7TValue39.yy.parseError == "function"
          ? (this.parseError = mindmapDefinitionVGOIOE7TValue39.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function _MindmapDefinitionVGOIOE7T(mindmapDefinitionVGOIOE7TParam49) {
          mindmapDefinitionVGOIOE7TValue26.length -=
            2 * mindmapDefinitionVGOIOE7TParam49;
          mindmapDefinitionVGOIOE7TValue28.length -=
            mindmapDefinitionVGOIOE7TParam49;
          mindmapDefinitionVGOIOE7TValue29.length -=
            mindmapDefinitionVGOIOE7TParam49;
        }
        chunkAGHRB4JFN(_MindmapDefinitionVGOIOE7T, "popStack");
        function mindmapDefinitionVGOIOE7THelper2() {
          var mindmapDefinitionVGOIOE7TValue101 =
            mindmapDefinitionVGOIOE7TValue27.pop() ||
            mindmapDefinitionVGOIOE7TValue38.lex() ||
            1;
          return (
            typeof mindmapDefinitionVGOIOE7TValue101 != "number" &&
              (mindmapDefinitionVGOIOE7TValue101 instanceof Array &&
                ((mindmapDefinitionVGOIOE7TValue27 =
                  mindmapDefinitionVGOIOE7TValue101),
                (mindmapDefinitionVGOIOE7TValue101 =
                  mindmapDefinitionVGOIOE7TValue27.pop())),
              (mindmapDefinitionVGOIOE7TValue101 =
                mindmapDefinitionVGOIOE7TValue25.symbols_[
                  mindmapDefinitionVGOIOE7TValue101
                ] || mindmapDefinitionVGOIOE7TValue101)),
            mindmapDefinitionVGOIOE7TValue101
          );
        }
        chunkAGHRB4JFN(mindmapDefinitionVGOIOE7THelper2, "lex");
        for (
          var mindmapDefinitionVGOIOE7TValue43,
            mindmapDefinitionVGOIOE7TValue44,
            mindmapDefinitionVGOIOE7TValue45,
            mindmapDefinitionVGOIOE7TValue46,
            mindmapDefinitionVGOIOE7TValue47,
            mindmapDefinitionVGOIOE7TValue48 = {},
            mindmapDefinitionVGOIOE7TValue49,
            mindmapDefinitionVGOIOE7TValue50,
            mindmapDefinitionVGOIOE7TValue51,
            mindmapDefinitionVGOIOE7TValue52;
          ;

        ) {
          if (
            ((mindmapDefinitionVGOIOE7TValue45 =
              mindmapDefinitionVGOIOE7TValue26[
                mindmapDefinitionVGOIOE7TValue26.length - 1
              ]),
            this.defaultActions[mindmapDefinitionVGOIOE7TValue45]
              ? (mindmapDefinitionVGOIOE7TValue46 =
                  this.defaultActions[mindmapDefinitionVGOIOE7TValue45])
              : ((mindmapDefinitionVGOIOE7TValue43 ??=
                  mindmapDefinitionVGOIOE7THelper2()),
                (mindmapDefinitionVGOIOE7TValue46 =
                  mindmapDefinitionVGOIOE7TValue30[
                    mindmapDefinitionVGOIOE7TValue45
                  ] &&
                  mindmapDefinitionVGOIOE7TValue30[
                    mindmapDefinitionVGOIOE7TValue45
                  ][mindmapDefinitionVGOIOE7TValue43])),
            mindmapDefinitionVGOIOE7TValue46 === undefined ||
              !mindmapDefinitionVGOIOE7TValue46.length ||
              !mindmapDefinitionVGOIOE7TValue46[0])
          ) {
            var mindmapDefinitionVGOIOE7TValue53 = "";
            for (mindmapDefinitionVGOIOE7TValue49 in ((mindmapDefinitionVGOIOE7TValue52 =
              []),
            mindmapDefinitionVGOIOE7TValue30[mindmapDefinitionVGOIOE7TValue45]))
              this.terminals_[mindmapDefinitionVGOIOE7TValue49] &&
                mindmapDefinitionVGOIOE7TValue49 > 2 &&
                mindmapDefinitionVGOIOE7TValue52.push(
                  "'" + this.terminals_[mindmapDefinitionVGOIOE7TValue49] + "'",
                );
            mindmapDefinitionVGOIOE7TValue53 =
              mindmapDefinitionVGOIOE7TValue38.showPosition
                ? "Parse error on line " +
                  (mindmapDefinitionVGOIOE7TValue32 + 1) +
                  ":\n" +
                  mindmapDefinitionVGOIOE7TValue38.showPosition() +
                  "\nExpecting " +
                  mindmapDefinitionVGOIOE7TValue52.join(", ") +
                  ", got '" +
                  (this.terminals_[mindmapDefinitionVGOIOE7TValue43] ||
                    mindmapDefinitionVGOIOE7TValue43) +
                  "'"
                : "Parse error on line " +
                  (mindmapDefinitionVGOIOE7TValue32 + 1) +
                  ": Unexpected " +
                  (mindmapDefinitionVGOIOE7TValue43 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[mindmapDefinitionVGOIOE7TValue43] ||
                        mindmapDefinitionVGOIOE7TValue43) +
                      "'");
            this.parseError(mindmapDefinitionVGOIOE7TValue53, {
              text: mindmapDefinitionVGOIOE7TValue38.match,
              token:
                this.terminals_[mindmapDefinitionVGOIOE7TValue43] ||
                mindmapDefinitionVGOIOE7TValue43,
              line: mindmapDefinitionVGOIOE7TValue38.yylineno,
              loc: mindmapDefinitionVGOIOE7TValue41,
              expected: mindmapDefinitionVGOIOE7TValue52,
            });
          }
          if (
            mindmapDefinitionVGOIOE7TValue46[0] instanceof Array &&
            mindmapDefinitionVGOIOE7TValue46.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                mindmapDefinitionVGOIOE7TValue45 +
                ", token: " +
                mindmapDefinitionVGOIOE7TValue43,
            );
          switch (mindmapDefinitionVGOIOE7TValue46[0]) {
            case 1:
              mindmapDefinitionVGOIOE7TValue26.push(
                mindmapDefinitionVGOIOE7TValue43,
              );
              mindmapDefinitionVGOIOE7TValue28.push(
                mindmapDefinitionVGOIOE7TValue38.yytext,
              );
              mindmapDefinitionVGOIOE7TValue29.push(
                mindmapDefinitionVGOIOE7TValue38.yylloc,
              );
              mindmapDefinitionVGOIOE7TValue26.push(
                mindmapDefinitionVGOIOE7TValue46[1],
              );
              mindmapDefinitionVGOIOE7TValue43 = null;
              mindmapDefinitionVGOIOE7TValue44
                ? ((mindmapDefinitionVGOIOE7TValue43 =
                    mindmapDefinitionVGOIOE7TValue44),
                  (mindmapDefinitionVGOIOE7TValue44 = null))
                : ((mindmapDefinitionVGOIOE7TValue33 =
                    mindmapDefinitionVGOIOE7TValue38.yyleng),
                  (mindmapDefinitionVGOIOE7TValue31 =
                    mindmapDefinitionVGOIOE7TValue38.yytext),
                  (mindmapDefinitionVGOIOE7TValue32 =
                    mindmapDefinitionVGOIOE7TValue38.yylineno),
                  (mindmapDefinitionVGOIOE7TValue41 =
                    mindmapDefinitionVGOIOE7TValue38.yylloc),
                  mindmapDefinitionVGOIOE7TValue34 > 0 &&
                    mindmapDefinitionVGOIOE7TValue34--);
              break;
            case 2:
              if (
                ((mindmapDefinitionVGOIOE7TValue50 =
                  this.productions_[mindmapDefinitionVGOIOE7TValue46[1]][1]),
                (mindmapDefinitionVGOIOE7TValue48.$ =
                  mindmapDefinitionVGOIOE7TValue28[
                    mindmapDefinitionVGOIOE7TValue28.length -
                      mindmapDefinitionVGOIOE7TValue50
                  ]),
                (mindmapDefinitionVGOIOE7TValue48._$ = {
                  first_line:
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length -
                        (mindmapDefinitionVGOIOE7TValue50 || 1)
                    ].first_line,
                  last_line:
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length - 1
                    ].last_line,
                  first_column:
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length -
                        (mindmapDefinitionVGOIOE7TValue50 || 1)
                    ].first_column,
                  last_column:
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length - 1
                    ].last_column,
                }),
                mindmapDefinitionVGOIOE7TValue42 &&
                  (mindmapDefinitionVGOIOE7TValue48._$.range = [
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length -
                        (mindmapDefinitionVGOIOE7TValue50 || 1)
                    ].range[0],
                    mindmapDefinitionVGOIOE7TValue29[
                      mindmapDefinitionVGOIOE7TValue29.length - 1
                    ].range[1],
                  ]),
                (mindmapDefinitionVGOIOE7TValue47 = this.performAction.apply(
                  mindmapDefinitionVGOIOE7TValue48,
                  [
                    mindmapDefinitionVGOIOE7TValue31,
                    mindmapDefinitionVGOIOE7TValue33,
                    mindmapDefinitionVGOIOE7TValue32,
                    mindmapDefinitionVGOIOE7TValue39.yy,
                    mindmapDefinitionVGOIOE7TValue46[1],
                    mindmapDefinitionVGOIOE7TValue28,
                    mindmapDefinitionVGOIOE7TValue29,
                  ].concat(mindmapDefinitionVGOIOE7TValue37),
                )),
                mindmapDefinitionVGOIOE7TValue47 !== undefined)
              )
                return mindmapDefinitionVGOIOE7TValue47;
              mindmapDefinitionVGOIOE7TValue50 &&
                ((mindmapDefinitionVGOIOE7TValue26 =
                  mindmapDefinitionVGOIOE7TValue26.slice(
                    0,
                    -1 * mindmapDefinitionVGOIOE7TValue50 * 2,
                  )),
                (mindmapDefinitionVGOIOE7TValue28 =
                  mindmapDefinitionVGOIOE7TValue28.slice(
                    0,
                    -1 * mindmapDefinitionVGOIOE7TValue50,
                  )),
                (mindmapDefinitionVGOIOE7TValue29 =
                  mindmapDefinitionVGOIOE7TValue29.slice(
                    0,
                    -1 * mindmapDefinitionVGOIOE7TValue50,
                  )));
              mindmapDefinitionVGOIOE7TValue26.push(
                this.productions_[mindmapDefinitionVGOIOE7TValue46[1]][0],
              );
              mindmapDefinitionVGOIOE7TValue28.push(
                mindmapDefinitionVGOIOE7TValue48.$,
              );
              mindmapDefinitionVGOIOE7TValue29.push(
                mindmapDefinitionVGOIOE7TValue48._$,
              );
              mindmapDefinitionVGOIOE7TValue51 =
                mindmapDefinitionVGOIOE7TValue30[
                  mindmapDefinitionVGOIOE7TValue26[
                    mindmapDefinitionVGOIOE7TValue26.length - 2
                  ]
                ][
                  mindmapDefinitionVGOIOE7TValue26[
                    mindmapDefinitionVGOIOE7TValue26.length - 1
                  ]
                ];
              mindmapDefinitionVGOIOE7TValue26.push(
                mindmapDefinitionVGOIOE7TValue51,
              );
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  mindmapDefinitionVGOIOE7TValue24.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam43,
        mindmapDefinitionVGOIOE7TParam44,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            mindmapDefinitionVGOIOE7TParam43,
            mindmapDefinitionVGOIOE7TParam44,
          );
        else throw Error(mindmapDefinitionVGOIOE7TParam43);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam33,
        mindmapDefinitionVGOIOE7TParam34,
      ) {
        return (
          (this.yy = mindmapDefinitionVGOIOE7TParam34 || this.yy || {}),
          (this._input = mindmapDefinitionVGOIOE7TParam33),
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
        var mindmapDefinitionVGOIOE7TValue95 = this._input[0];
        return (
          (this.yytext += mindmapDefinitionVGOIOE7TValue95),
          this.yyleng++,
          this.offset++,
          (this.match += mindmapDefinitionVGOIOE7TValue95),
          (this.matched += mindmapDefinitionVGOIOE7TValue95),
          mindmapDefinitionVGOIOE7TValue95.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          mindmapDefinitionVGOIOE7TValue95
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam18) {
        var mindmapDefinitionVGOIOE7TValue65 =
            mindmapDefinitionVGOIOE7TParam18.length,
          mindmapDefinitionVGOIOE7TValue66 =
            mindmapDefinitionVGOIOE7TParam18.split(/(?:\r\n?|\n)/g);
        this._input = mindmapDefinitionVGOIOE7TParam18 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - mindmapDefinitionVGOIOE7TValue65,
        );
        this.offset -= mindmapDefinitionVGOIOE7TValue65;
        var mindmapDefinitionVGOIOE7TValue67 =
          this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        mindmapDefinitionVGOIOE7TValue66.length - 1 &&
          (this.yylineno -= mindmapDefinitionVGOIOE7TValue66.length - 1);
        var mindmapDefinitionVGOIOE7TValue68 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: mindmapDefinitionVGOIOE7TValue66
              ? (mindmapDefinitionVGOIOE7TValue66.length ===
                mindmapDefinitionVGOIOE7TValue67.length
                  ? this.yylloc.first_column
                  : 0) +
                mindmapDefinitionVGOIOE7TValue67[
                  mindmapDefinitionVGOIOE7TValue67.length -
                    mindmapDefinitionVGOIOE7TValue66.length
                ].length -
                mindmapDefinitionVGOIOE7TValue66[0].length
              : this.yylloc.first_column - mindmapDefinitionVGOIOE7TValue65,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              mindmapDefinitionVGOIOE7TValue68[0],
              mindmapDefinitionVGOIOE7TValue68[0] +
                this.yyleng -
                mindmapDefinitionVGOIOE7TValue65,
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
      less: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam50) {
        this.unput(this.match.slice(mindmapDefinitionVGOIOE7TParam50));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var mindmapDefinitionVGOIOE7TValue98 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (mindmapDefinitionVGOIOE7TValue98.length > 20 ? "..." : "") +
          mindmapDefinitionVGOIOE7TValue98.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var mindmapDefinitionVGOIOE7TValue97 = this.match;
        return (
          mindmapDefinitionVGOIOE7TValue97.length < 20 &&
            (mindmapDefinitionVGOIOE7TValue97 += this._input.substr(
              0,
              20 - mindmapDefinitionVGOIOE7TValue97.length,
            )),
          (
            mindmapDefinitionVGOIOE7TValue97.substr(0, 20) +
            (mindmapDefinitionVGOIOE7TValue97.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var mindmapDefinitionVGOIOE7TValue102 = this.pastInput(),
          mindmapDefinitionVGOIOE7TValue103 = Array(
            mindmapDefinitionVGOIOE7TValue102.length + 1,
          ).join("-");
        return (
          mindmapDefinitionVGOIOE7TValue102 +
          this.upcomingInput() +
          "\n" +
          mindmapDefinitionVGOIOE7TValue103 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam6,
        mindmapDefinitionVGOIOE7TParam7,
      ) {
        var mindmapDefinitionVGOIOE7TValue54,
          mindmapDefinitionVGOIOE7TValue55,
          mindmapDefinitionVGOIOE7TValue56;
        if (
          (this.options.backtrack_lexer &&
            ((mindmapDefinitionVGOIOE7TValue56 = {
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
              (mindmapDefinitionVGOIOE7TValue56.yylloc.range =
                this.yylloc.range.slice(0))),
          (mindmapDefinitionVGOIOE7TValue55 =
            mindmapDefinitionVGOIOE7TParam6[0].match(/(?:\r\n?|\n).*/g)),
          mindmapDefinitionVGOIOE7TValue55 &&
            (this.yylineno += mindmapDefinitionVGOIOE7TValue55.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: mindmapDefinitionVGOIOE7TValue55
              ? mindmapDefinitionVGOIOE7TValue55[
                  mindmapDefinitionVGOIOE7TValue55.length - 1
                ].length -
                mindmapDefinitionVGOIOE7TValue55[
                  mindmapDefinitionVGOIOE7TValue55.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                mindmapDefinitionVGOIOE7TParam6[0].length,
          }),
          (this.yytext += mindmapDefinitionVGOIOE7TParam6[0]),
          (this.match += mindmapDefinitionVGOIOE7TParam6[0]),
          (this.matches = mindmapDefinitionVGOIOE7TParam6),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            mindmapDefinitionVGOIOE7TParam6[0].length,
          )),
          (this.matched += mindmapDefinitionVGOIOE7TParam6[0]),
          (mindmapDefinitionVGOIOE7TValue54 = this.performAction.call(
            this,
            this.yy,
            this,
            mindmapDefinitionVGOIOE7TParam7,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          mindmapDefinitionVGOIOE7TValue54)
        )
          return mindmapDefinitionVGOIOE7TValue54;
        if (this._backtrack) {
          for (var mindmapDefinitionVGOIOE7TValue57 in mindmapDefinitionVGOIOE7TValue56)
            this[mindmapDefinitionVGOIOE7TValue57] =
              mindmapDefinitionVGOIOE7TValue56[
                mindmapDefinitionVGOIOE7TValue57
              ];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var mindmapDefinitionVGOIOE7TValue75,
          mindmapDefinitionVGOIOE7TValue76,
          mindmapDefinitionVGOIOE7TValue77,
          mindmapDefinitionVGOIOE7TValue78;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var mindmapDefinitionVGOIOE7TValue79 = this._currentRules(),
            mindmapDefinitionVGOIOE7TValue80 = 0;
          mindmapDefinitionVGOIOE7TValue80 <
          mindmapDefinitionVGOIOE7TValue79.length;
          mindmapDefinitionVGOIOE7TValue80++
        )
          if (
            ((mindmapDefinitionVGOIOE7TValue77 = this._input.match(
              this.rules[
                mindmapDefinitionVGOIOE7TValue79[
                  mindmapDefinitionVGOIOE7TValue80
                ]
              ],
            )),
            mindmapDefinitionVGOIOE7TValue77 &&
              (!mindmapDefinitionVGOIOE7TValue76 ||
                mindmapDefinitionVGOIOE7TValue77[0].length >
                  mindmapDefinitionVGOIOE7TValue76[0].length))
          ) {
            if (
              ((mindmapDefinitionVGOIOE7TValue76 =
                mindmapDefinitionVGOIOE7TValue77),
              (mindmapDefinitionVGOIOE7TValue78 =
                mindmapDefinitionVGOIOE7TValue80),
              this.options.backtrack_lexer)
            ) {
              if (
                ((mindmapDefinitionVGOIOE7TValue75 = this.test_match(
                  mindmapDefinitionVGOIOE7TValue77,
                  mindmapDefinitionVGOIOE7TValue79[
                    mindmapDefinitionVGOIOE7TValue80
                  ],
                )),
                mindmapDefinitionVGOIOE7TValue75 !== false)
              )
                return mindmapDefinitionVGOIOE7TValue75;
              if (this._backtrack) {
                mindmapDefinitionVGOIOE7TValue76 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return mindmapDefinitionVGOIOE7TValue76
          ? ((mindmapDefinitionVGOIOE7TValue75 = this.test_match(
              mindmapDefinitionVGOIOE7TValue76,
              mindmapDefinitionVGOIOE7TValue79[
                mindmapDefinitionVGOIOE7TValue78
              ],
            )),
            mindmapDefinitionVGOIOE7TValue75 === false
              ? false
              : mindmapDefinitionVGOIOE7TValue75)
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
      begin: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam52) {
        this.conditionStack.push(mindmapDefinitionVGOIOE7TParam52);
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
      topState: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam40) {
        return (
          (mindmapDefinitionVGOIOE7TParam40 =
            this.conditionStack.length -
            1 -
            Math.abs(mindmapDefinitionVGOIOE7TParam40 || 0)),
          mindmapDefinitionVGOIOE7TParam40 >= 0
            ? this.conditionStack[mindmapDefinitionVGOIOE7TParam40]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (mindmapDefinitionVGOIOE7TParam55) {
        this.begin(mindmapDefinitionVGOIOE7TParam55);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        mindmapDefinitionVGOIOE7TParam2,
        mindmapDefinitionVGOIOE7TParam3,
        mindmapDefinitionVGOIOE7TParam4,
        mindmapDefinitionVGOIOE7TParam5,
      ) {
        switch (mindmapDefinitionVGOIOE7TParam4) {
          case 0:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace("Found comment", mindmapDefinitionVGOIOE7TParam3.yytext),
              6
            );
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return (this.popState(), 16);
          case 4:
            this.popState();
            break;
          case 5:
            mindmapDefinitionVGOIOE7TParam2.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 6:
            return (
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("SPACELINE"),
              6
            );
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            mindmapDefinitionVGOIOE7TParam2.getLogger().trace("end icon");
            this.popState();
            break;
          case 10:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace("Exploding node"),
              this.begin("NODE"),
              19
            );
          case 11:
            return (
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("Cloud"),
              this.begin("NODE"),
              19
            );
          case 12:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace("Explosion Bang"),
              this.begin("NODE"),
              19
            );
          case 13:
            return (
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("Cloud Bang"),
              this.begin("NODE"),
              19
            );
          case 14:
            return (this.begin("NODE"), 19);
          case 15:
            return (this.begin("NODE"), 19);
          case 16:
            return (this.begin("NODE"), 19);
          case 17:
            return (this.begin("NODE"), 19);
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            mindmapDefinitionVGOIOE7TParam2.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 25:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace("description:", mindmapDefinitionVGOIOE7TParam3.yytext),
              "NODE_DESCR"
            );
          case 26:
            this.popState();
            break;
          case 27:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end ))"),
              "NODE_DEND"
            );
          case 28:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end )"),
              "NODE_DEND"
            );
          case 29:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace("node end ...", mindmapDefinitionVGOIOE7TParam3.yytext),
              "NODE_DEND"
            );
          case 30:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 31:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end (-"),
              "NODE_DEND"
            );
          case 32:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end (-"),
              "NODE_DEND"
            );
          case 33:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 34:
            return (
              this.popState(),
              mindmapDefinitionVGOIOE7TParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 35:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace(
                  "Long description:",
                  mindmapDefinitionVGOIOE7TParam3.yytext,
                ),
              20
            );
          case 36:
            return (
              mindmapDefinitionVGOIOE7TParam2
                .getLogger()
                .trace(
                  "Long description:",
                  mindmapDefinitionVGOIOE7TParam3.yytext,
                ),
              20
            );
        }
      }, "anonymous"),
      rules: [
        /^(?:\s*%%.*)/i,
        /^(?:mindmap\b)/i,
        /^(?::::)/i,
        /^(?:.+)/i,
        /^(?:\n)/i,
        /^(?:::icon\()/i,
        /^(?:[\s]+[\n])/i,
        /^(?:[\n]+)/i,
        /^(?:[^\)]+)/i,
        /^(?:\))/i,
        /^(?:-\))/i,
        /^(?:\(-)/i,
        /^(?:\)\))/i,
        /^(?:\))/i,
        /^(?:\(\()/i,
        /^(?:\{\{)/i,
        /^(?:\()/i,
        /^(?:\[)/i,
        /^(?:[\s]+)/i,
        /^(?:[^\(\[\n\)\{\}]+)/i,
        /^(?:$)/i,
        /^(?:["][`])/i,
        /^(?:[^`"]+)/i,
        /^(?:[`]["])/i,
        /^(?:["])/i,
        /^(?:[^"]+)/i,
        /^(?:["])/i,
        /^(?:[\)]\))/i,
        /^(?:[\)])/i,
        /^(?:[\]])/i,
        /^(?:\}\})/i,
        /^(?:\(-)/i,
        /^(?:-\))/i,
        /^(?:\(\()/i,
        /^(?:\()/i,
        /^(?:[^\)\]\(\}]+)/i,
        /^(?:.+(?!\(\())/i,
      ],
      conditions: {
        CLASS: {
          rules: [3, 4],
          inclusive: false,
        },
        ICON: {
          rules: [8, 9],
          inclusive: false,
        },
        NSTR2: {
          rules: [22, 23],
          inclusive: false,
        },
        NSTR: {
          rules: [25, 26],
          inclusive: false,
        },
        NODE: {
          rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
          inclusive: false,
        },
        INITIAL: {
          rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          inclusive: true,
        },
      },
    };
  })();
  function mindmapDefinitionVGOIOE7THelper1() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(mindmapDefinitionVGOIOE7THelper1, "Parser"),
    (mindmapDefinitionVGOIOE7THelper1.prototype =
      mindmapDefinitionVGOIOE7TValue24),
    (mindmapDefinitionVGOIOE7TValue24.Parser =
      mindmapDefinitionVGOIOE7THelper1),
    new mindmapDefinitionVGOIOE7THelper1()
  );
})();
mindmapDefinitionVGOIOE7TValue1.parser = mindmapDefinitionVGOIOE7TValue1;
var mindmapDefinitionVGOIOE7TValue2 = mindmapDefinitionVGOIOE7TValue1,
  mindmapDefinitionVGOIOE7TValue3 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  },
  mindmapDefinitionVGOIOE7TValue4 = class {
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = mindmapDefinitionVGOIOE7TValue3;
      this.clear();
      this.getType = this.getType.bind(this);
      this.getElementById = this.getElementById.bind(this);
      this.getParent = this.getParent.bind(this);
      this.getMindmap = this.getMindmap.bind(this);
      this.addNode = this.addNode.bind(this);
      this.decorateNode = this.decorateNode.bind(this);
    }
    static {
      chunkAGHRB4JFN(this, "MindmapDB");
    }
    clear() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.baseLevel = undefined;
    }
    getParent(mindmapDefinitionVGOIOE7TParam39) {
      for (
        let mindmapDefinitionVGOIOE7TValue105 = this.nodes.length - 1;
        mindmapDefinitionVGOIOE7TValue105 >= 0;
        mindmapDefinitionVGOIOE7TValue105--
      )
        if (
          this.nodes[mindmapDefinitionVGOIOE7TValue105].level <
          mindmapDefinitionVGOIOE7TParam39
        )
          return this.nodes[mindmapDefinitionVGOIOE7TValue105];
      return null;
    }
    getMindmap() {
      return this.nodes.length > 0 ? this.nodes[0] : null;
    }
    addNode(
      mindmapDefinitionVGOIOE7TParam19,
      mindmapDefinitionVGOIOE7TParam20,
      mindmapDefinitionVGOIOE7TParam21,
      mindmapDefinitionVGOIOE7TParam22,
    ) {
      chunkAGHRB4JFR.info(
        "addNode",
        mindmapDefinitionVGOIOE7TParam19,
        mindmapDefinitionVGOIOE7TParam20,
        mindmapDefinitionVGOIOE7TParam21,
        mindmapDefinitionVGOIOE7TParam22,
      );
      let mindmapDefinitionVGOIOE7TValue70 = false;
      this.nodes.length === 0
        ? ((this.baseLevel = mindmapDefinitionVGOIOE7TParam19),
          (mindmapDefinitionVGOIOE7TParam19 = 0),
          (mindmapDefinitionVGOIOE7TValue70 = true))
        : this.baseLevel !== undefined &&
          ((mindmapDefinitionVGOIOE7TParam19 -= this.baseLevel),
          (mindmapDefinitionVGOIOE7TValue70 = false));
      let mindmapDefinitionVGOIOE7TValue71 = _chunkABZYJK2DL(),
        mindmapDefinitionVGOIOE7TValue72 =
          mindmapDefinitionVGOIOE7TValue71.mindmap?.padding ??
          _chunkABZYJK2DD.mindmap.padding;
      switch (mindmapDefinitionVGOIOE7TParam22) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          mindmapDefinitionVGOIOE7TValue72 *= 2;
          break;
      }
      let mindmapDefinitionVGOIOE7TValue73 = {
          id: this.count++,
          nodeId: _chunkABZYJK2DM(
            mindmapDefinitionVGOIOE7TParam20,
            mindmapDefinitionVGOIOE7TValue71,
          ),
          level: mindmapDefinitionVGOIOE7TParam19,
          descr: _chunkABZYJK2DM(
            mindmapDefinitionVGOIOE7TParam21,
            mindmapDefinitionVGOIOE7TValue71,
          ),
          type: mindmapDefinitionVGOIOE7TParam22,
          children: [],
          width:
            mindmapDefinitionVGOIOE7TValue71.mindmap?.maxNodeWidth ??
            _chunkABZYJK2DD.mindmap.maxNodeWidth,
          padding: mindmapDefinitionVGOIOE7TValue72,
          isRoot: mindmapDefinitionVGOIOE7TValue70,
        },
        mindmapDefinitionVGOIOE7TValue74 = this.getParent(
          mindmapDefinitionVGOIOE7TParam19,
        );
      if (mindmapDefinitionVGOIOE7TValue74) {
        mindmapDefinitionVGOIOE7TValue74.children.push(
          mindmapDefinitionVGOIOE7TValue73,
        );
        this.nodes.push(mindmapDefinitionVGOIOE7TValue73);
      } else if (mindmapDefinitionVGOIOE7TValue70)
        this.nodes.push(mindmapDefinitionVGOIOE7TValue73);
      else
        throw Error(
          `There can be only one root. No parent could be found for ("${mindmapDefinitionVGOIOE7TValue73.descr}")`,
        );
    }
    getType(
      mindmapDefinitionVGOIOE7TParam31,
      mindmapDefinitionVGOIOE7TParam32,
    ) {
      switch (
        (chunkAGHRB4JFR.debug(
          "In get type",
          mindmapDefinitionVGOIOE7TParam31,
          mindmapDefinitionVGOIOE7TParam32,
        ),
        mindmapDefinitionVGOIOE7TParam31)
      ) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          return mindmapDefinitionVGOIOE7TParam32 === ")"
            ? this.nodeType.ROUNDED_RECT
            : this.nodeType.CLOUD;
        case "((":
          return this.nodeType.CIRCLE;
        case ")":
          return this.nodeType.CLOUD;
        case "))":
          return this.nodeType.BANG;
        case "{{":
          return this.nodeType.HEXAGON;
        default:
          return this.nodeType.DEFAULT;
      }
    }
    setElementForId(
      mindmapDefinitionVGOIOE7TParam53,
      mindmapDefinitionVGOIOE7TParam54,
    ) {
      this.elements[mindmapDefinitionVGOIOE7TParam53] =
        mindmapDefinitionVGOIOE7TParam54;
    }
    getElementById(mindmapDefinitionVGOIOE7TParam51) {
      return this.elements[mindmapDefinitionVGOIOE7TParam51];
    }
    decorateNode(mindmapDefinitionVGOIOE7TParam38) {
      if (!mindmapDefinitionVGOIOE7TParam38) return;
      let mindmapDefinitionVGOIOE7TValue99 = _chunkABZYJK2DL(),
        mindmapDefinitionVGOIOE7TValue100 = this.nodes[this.nodes.length - 1];
      mindmapDefinitionVGOIOE7TParam38.icon &&
        (mindmapDefinitionVGOIOE7TValue100.icon = _chunkABZYJK2DM(
          mindmapDefinitionVGOIOE7TParam38.icon,
          mindmapDefinitionVGOIOE7TValue99,
        ));
      mindmapDefinitionVGOIOE7TParam38.class &&
        (mindmapDefinitionVGOIOE7TValue100.class = _chunkABZYJK2DM(
          mindmapDefinitionVGOIOE7TParam38.class,
          mindmapDefinitionVGOIOE7TValue99,
        ));
    }
    type2Str(mindmapDefinitionVGOIOE7TParam30) {
      switch (mindmapDefinitionVGOIOE7TParam30) {
        case this.nodeType.DEFAULT:
          return "no-border";
        case this.nodeType.RECT:
          return "rect";
        case this.nodeType.ROUNDED_RECT:
          return "rounded-rect";
        case this.nodeType.CIRCLE:
          return "circle";
        case this.nodeType.CLOUD:
          return "cloud";
        case this.nodeType.BANG:
          return "bang";
        case this.nodeType.HEXAGON:
          return "hexgon";
        default:
          return "no-border";
      }
    }
    assignSections(
      mindmapDefinitionVGOIOE7TParam36,
      mindmapDefinitionVGOIOE7TParam37,
    ) {
      if (
        (mindmapDefinitionVGOIOE7TParam36.level === 0
          ? (mindmapDefinitionVGOIOE7TParam36.section = undefined)
          : (mindmapDefinitionVGOIOE7TParam36.section =
              mindmapDefinitionVGOIOE7TParam37),
        mindmapDefinitionVGOIOE7TParam36.children)
      )
        for (let [
          mindmapDefinitionVGOIOE7TValue106,
          mindmapDefinitionVGOIOE7TValue107,
        ] of mindmapDefinitionVGOIOE7TParam36.children.entries()) {
          let mindmapDefinitionVGOIOE7TValue109 =
            mindmapDefinitionVGOIOE7TParam36.level === 0
              ? mindmapDefinitionVGOIOE7TValue106
              : mindmapDefinitionVGOIOE7TParam37;
          this.assignSections(
            mindmapDefinitionVGOIOE7TValue107,
            mindmapDefinitionVGOIOE7TValue109,
          );
        }
    }
    flattenNodes(
      mindmapDefinitionVGOIOE7TParam16,
      mindmapDefinitionVGOIOE7TParam17,
    ) {
      let mindmapDefinitionVGOIOE7TValue60 = ["mindmap-node"];
      mindmapDefinitionVGOIOE7TParam16.isRoot === true
        ? mindmapDefinitionVGOIOE7TValue60.push("section-root", "section--1")
        : mindmapDefinitionVGOIOE7TParam16.section !== undefined &&
          mindmapDefinitionVGOIOE7TValue60.push(
            `section-${mindmapDefinitionVGOIOE7TParam16.section}`,
          );
      mindmapDefinitionVGOIOE7TParam16.class &&
        mindmapDefinitionVGOIOE7TValue60.push(
          mindmapDefinitionVGOIOE7TParam16.class,
        );
      let mindmapDefinitionVGOIOE7TValue61 =
          mindmapDefinitionVGOIOE7TValue60.join(" "),
        mindmapDefinitionVGOIOE7TValue62 = chunkAGHRB4JFN(
          (mindmapDefinitionVGOIOE7TParam35) => {
            switch (mindmapDefinitionVGOIOE7TParam35) {
              case mindmapDefinitionVGOIOE7TValue3.CIRCLE:
                return "mindmapCircle";
              case mindmapDefinitionVGOIOE7TValue3.RECT:
                return "rect";
              case mindmapDefinitionVGOIOE7TValue3.ROUNDED_RECT:
                return "rounded";
              case mindmapDefinitionVGOIOE7TValue3.CLOUD:
                return "cloud";
              case mindmapDefinitionVGOIOE7TValue3.BANG:
                return "bang";
              case mindmapDefinitionVGOIOE7TValue3.HEXAGON:
                return "hexagon";
              case mindmapDefinitionVGOIOE7TValue3.DEFAULT:
                return "defaultMindmapNode";
              case mindmapDefinitionVGOIOE7TValue3.NO_BORDER:
              default:
                return "rect";
            }
          },
          "getShapeFromType",
        ),
        mindmapDefinitionVGOIOE7TValue63 = {
          id: mindmapDefinitionVGOIOE7TParam16.id.toString(),
          domId: "node_" + mindmapDefinitionVGOIOE7TParam16.id.toString(),
          label: mindmapDefinitionVGOIOE7TParam16.descr,
          isGroup: false,
          shape: mindmapDefinitionVGOIOE7TValue62(
            mindmapDefinitionVGOIOE7TParam16.type,
          ),
          width: mindmapDefinitionVGOIOE7TParam16.width,
          height: mindmapDefinitionVGOIOE7TParam16.height ?? 0,
          padding: mindmapDefinitionVGOIOE7TParam16.padding,
          cssClasses: mindmapDefinitionVGOIOE7TValue61,
          cssStyles: [],
          look: "default",
          icon: mindmapDefinitionVGOIOE7TParam16.icon,
          x: mindmapDefinitionVGOIOE7TParam16.x,
          y: mindmapDefinitionVGOIOE7TParam16.y,
          level: mindmapDefinitionVGOIOE7TParam16.level,
          nodeId: mindmapDefinitionVGOIOE7TParam16.nodeId,
          type: mindmapDefinitionVGOIOE7TParam16.type,
          section: mindmapDefinitionVGOIOE7TParam16.section,
        };
      if (
        (mindmapDefinitionVGOIOE7TParam17.push(
          mindmapDefinitionVGOIOE7TValue63,
        ),
        mindmapDefinitionVGOIOE7TParam16.children)
      )
        for (let mindmapDefinitionVGOIOE7TValue110 of mindmapDefinitionVGOIOE7TParam16.children)
          this.flattenNodes(
            mindmapDefinitionVGOIOE7TValue110,
            mindmapDefinitionVGOIOE7TParam17,
          );
    }
    generateEdges(
      mindmapDefinitionVGOIOE7TParam28,
      mindmapDefinitionVGOIOE7TParam29,
    ) {
      if (mindmapDefinitionVGOIOE7TParam28.children)
        for (let mindmapDefinitionVGOIOE7TValue91 of mindmapDefinitionVGOIOE7TParam28.children) {
          let mindmapDefinitionVGOIOE7TValue92 = "edge";
          mindmapDefinitionVGOIOE7TValue91.section !== undefined &&
            (mindmapDefinitionVGOIOE7TValue92 += ` section-edge-${mindmapDefinitionVGOIOE7TValue91.section}`);
          let mindmapDefinitionVGOIOE7TValue93 =
            mindmapDefinitionVGOIOE7TParam28.level + 1;
          mindmapDefinitionVGOIOE7TValue92 += ` edge-depth-${mindmapDefinitionVGOIOE7TValue93}`;
          let mindmapDefinitionVGOIOE7TValue94 = {
            id: `edge_${mindmapDefinitionVGOIOE7TParam28.id}_${mindmapDefinitionVGOIOE7TValue91.id}`,
            start: mindmapDefinitionVGOIOE7TParam28.id.toString(),
            end: mindmapDefinitionVGOIOE7TValue91.id.toString(),
            type: "normal",
            curve: "basis",
            thickness: "normal",
            look: "default",
            classes: mindmapDefinitionVGOIOE7TValue92,
            depth: mindmapDefinitionVGOIOE7TParam28.level,
            section: mindmapDefinitionVGOIOE7TValue91.section,
          };
          mindmapDefinitionVGOIOE7TParam29.push(
            mindmapDefinitionVGOIOE7TValue94,
          );
          this.generateEdges(
            mindmapDefinitionVGOIOE7TValue91,
            mindmapDefinitionVGOIOE7TParam29,
          );
        }
    }
    getData() {
      let mindmapDefinitionVGOIOE7TValue81 = this.getMindmap(),
        mindmapDefinitionVGOIOE7TValue82 = _chunkABZYJK2DL(),
        mindmapDefinitionVGOIOE7TValue83 =
          chunkABZYJK2DY().layout !== undefined,
        mindmapDefinitionVGOIOE7TValue84 = mindmapDefinitionVGOIOE7TValue82;
      if (
        (mindmapDefinitionVGOIOE7TValue83 ||
          (mindmapDefinitionVGOIOE7TValue84.layout = "cose-bilkent"),
        !mindmapDefinitionVGOIOE7TValue81)
      )
        return {
          nodes: [],
          edges: [],
          config: mindmapDefinitionVGOIOE7TValue84,
        };
      chunkAGHRB4JFR.debug(
        "getData: mindmapRoot",
        mindmapDefinitionVGOIOE7TValue81,
        mindmapDefinitionVGOIOE7TValue82,
      );
      this.assignSections(mindmapDefinitionVGOIOE7TValue81);
      let mindmapDefinitionVGOIOE7TValue85 = [],
        mindmapDefinitionVGOIOE7TValue86 = [];
      this.flattenNodes(
        mindmapDefinitionVGOIOE7TValue81,
        mindmapDefinitionVGOIOE7TValue85,
      );
      this.generateEdges(
        mindmapDefinitionVGOIOE7TValue81,
        mindmapDefinitionVGOIOE7TValue86,
      );
      chunkAGHRB4JFR.debug(
        `getData: processed ${mindmapDefinitionVGOIOE7TValue85.length} nodes and ${mindmapDefinitionVGOIOE7TValue86.length} edges`,
      );
      let mindmapDefinitionVGOIOE7TValue87 = new Map();
      for (let mindmapDefinitionVGOIOE7TValue104 of mindmapDefinitionVGOIOE7TValue85)
        mindmapDefinitionVGOIOE7TValue87.set(
          mindmapDefinitionVGOIOE7TValue104.id,
          {
            shape: mindmapDefinitionVGOIOE7TValue104.shape,
            width: mindmapDefinitionVGOIOE7TValue104.width,
            height: mindmapDefinitionVGOIOE7TValue104.height,
            padding: mindmapDefinitionVGOIOE7TValue104.padding,
          },
        );
      return {
        nodes: mindmapDefinitionVGOIOE7TValue85,
        edges: mindmapDefinitionVGOIOE7TValue86,
        config: mindmapDefinitionVGOIOE7TValue84,
        rootNode: mindmapDefinitionVGOIOE7TValue81,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: Object.fromEntries(mindmapDefinitionVGOIOE7TValue87),
        type: "mindmap",
        diagramId: "mindmap-" + uuidV4(),
      };
    }
    getLogger() {
      return chunkAGHRB4JFR;
    }
  },
  mindmapDefinitionVGOIOE7TValue5 = {
    draw: chunkAGHRB4JFN(
      async (
        mindmapDefinitionVGOIOE7TParam24,
        mindmapDefinitionVGOIOE7TParam25,
        mindmapDefinitionVGOIOE7TParam26,
        mindmapDefinitionVGOIOE7TParam27,
      ) => {
        chunkAGHRB4JFR.debug(
          "Rendering mindmap diagram\n" + mindmapDefinitionVGOIOE7TParam24,
        );
        let mindmapDefinitionVGOIOE7TValue88 =
            mindmapDefinitionVGOIOE7TParam27.db,
          mindmapDefinitionVGOIOE7TValue89 =
            mindmapDefinitionVGOIOE7TValue88.getData(),
          mindmapDefinitionVGOIOE7TValue90 = chunk55IACEB6(
            mindmapDefinitionVGOIOE7TParam25,
            mindmapDefinitionVGOIOE7TValue89.config.securityLevel,
          );
        mindmapDefinitionVGOIOE7TValue89.type =
          mindmapDefinitionVGOIOE7TParam27.type;
        mindmapDefinitionVGOIOE7TValue89.layoutAlgorithm = chunkN4CR4FBYT(
          mindmapDefinitionVGOIOE7TValue89.config.layout,
          {
            fallback: "cose-bilkent",
          },
        );
        mindmapDefinitionVGOIOE7TValue89.diagramId =
          mindmapDefinitionVGOIOE7TParam25;
        mindmapDefinitionVGOIOE7TValue88.getMindmap() &&
          (mindmapDefinitionVGOIOE7TValue89.nodes.forEach((item) => {
            item.shape === "rounded"
              ? ((item.radius = 15),
                (item.taper = 15),
                (item.stroke = "none"),
                (item.width = 0),
                (item.padding = 15))
              : item.shape === "circle"
                ? (item.padding = 10)
                : item.shape === "rect" &&
                  ((item.width = 0), (item.padding = 10));
          }),
          await chunkN4CR4FBYR(
            mindmapDefinitionVGOIOE7TValue89,
            mindmapDefinitionVGOIOE7TValue90,
          ),
          chunkQN33PNHL(
            mindmapDefinitionVGOIOE7TValue90,
            mindmapDefinitionVGOIOE7TValue89.config.mindmap?.padding ??
              _chunkABZYJK2DD.mindmap.padding,
            "mindmapDiagram",
            mindmapDefinitionVGOIOE7TValue89.config.mindmap?.useMaxWidth ??
              _chunkABZYJK2DD.mindmap.useMaxWidth,
          ));
      },
      "draw",
    ),
  },
  mindmapDefinitionVGOIOE7TValue6 = chunkAGHRB4JFN(
    (mindmapDefinitionVGOIOE7TParam15) => {
      let mindmapDefinitionVGOIOE7TValue59 = "";
      for (
        let mindmapDefinitionVGOIOE7TValue96 = 0;
        mindmapDefinitionVGOIOE7TValue96 <
        mindmapDefinitionVGOIOE7TParam15.THEME_COLOR_LIMIT;
        mindmapDefinitionVGOIOE7TValue96++
      ) {
        mindmapDefinitionVGOIOE7TParam15[
          "lineColor" + mindmapDefinitionVGOIOE7TValue96
        ] =
          mindmapDefinitionVGOIOE7TParam15[
            "lineColor" + mindmapDefinitionVGOIOE7TValue96
          ] ||
          mindmapDefinitionVGOIOE7TParam15[
            "cScaleInv" + mindmapDefinitionVGOIOE7TValue96
          ];
        invertO(
          mindmapDefinitionVGOIOE7TParam15[
            "lineColor" + mindmapDefinitionVGOIOE7TValue96
          ],
        )
          ? (mindmapDefinitionVGOIOE7TParam15[
              "lineColor" + mindmapDefinitionVGOIOE7TValue96
            ] = invertI(
              mindmapDefinitionVGOIOE7TParam15[
                "lineColor" + mindmapDefinitionVGOIOE7TValue96
              ],
              20,
            ))
          : (mindmapDefinitionVGOIOE7TParam15[
              "lineColor" + mindmapDefinitionVGOIOE7TValue96
            ] = invertR(
              mindmapDefinitionVGOIOE7TParam15[
                "lineColor" + mindmapDefinitionVGOIOE7TValue96
              ],
              20,
            ));
      }
      for (
        let mindmapDefinitionVGOIOE7TValue64 = 0;
        mindmapDefinitionVGOIOE7TValue64 <
        mindmapDefinitionVGOIOE7TParam15.THEME_COLOR_LIMIT;
        mindmapDefinitionVGOIOE7TValue64++
      ) {
        let mindmapDefinitionVGOIOE7TValue69 =
          "" + (17 - 3 * mindmapDefinitionVGOIOE7TValue64);
        mindmapDefinitionVGOIOE7TValue59 += `
    .section-${mindmapDefinitionVGOIOE7TValue64 - 1} rect, .section-${mindmapDefinitionVGOIOE7TValue64 - 1} path, .section-${mindmapDefinitionVGOIOE7TValue64 - 1} circle, .section-${mindmapDefinitionVGOIOE7TValue64 - 1} polygon, .section-${mindmapDefinitionVGOIOE7TValue64 - 1} path  {
      fill: ${mindmapDefinitionVGOIOE7TParam15["cScale" + mindmapDefinitionVGOIOE7TValue64]};
    }
    .section-${mindmapDefinitionVGOIOE7TValue64 - 1} text {
     fill: ${mindmapDefinitionVGOIOE7TParam15["cScaleLabel" + mindmapDefinitionVGOIOE7TValue64]};
    }
    .node-icon-${mindmapDefinitionVGOIOE7TValue64 - 1} {
      font-size: 40px;
      color: ${mindmapDefinitionVGOIOE7TParam15["cScaleLabel" + mindmapDefinitionVGOIOE7TValue64]};
    }
    .section-edge-${mindmapDefinitionVGOIOE7TValue64 - 1}{
      stroke: ${mindmapDefinitionVGOIOE7TParam15["cScale" + mindmapDefinitionVGOIOE7TValue64]};
    }
    .edge-depth-${mindmapDefinitionVGOIOE7TValue64 - 1}{
      stroke-width: ${mindmapDefinitionVGOIOE7TValue69};
    }
    .section-${mindmapDefinitionVGOIOE7TValue64 - 1} line {
      stroke: ${mindmapDefinitionVGOIOE7TParam15["cScaleInv" + mindmapDefinitionVGOIOE7TValue64]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
      }
      return mindmapDefinitionVGOIOE7TValue59;
    },
    "genSections",
  );
export const MindmapDefinitionVGOIOE7T = {
  get db() {
    return new mindmapDefinitionVGOIOE7TValue4();
  },
  renderer: mindmapDefinitionVGOIOE7TValue5,
  parser: mindmapDefinitionVGOIOE7TValue2,
  styles: chunkAGHRB4JFN(
    (mindmapDefinitionVGOIOE7TParam23) => `
  .edge {
    stroke-width: 3;
  }
  ${mindmapDefinitionVGOIOE7TValue6(mindmapDefinitionVGOIOE7TParam23)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${mindmapDefinitionVGOIOE7TParam23.git0};
  }
  .section-root text {
    fill: ${mindmapDefinitionVGOIOE7TParam23.gitBranchLabel0};
  }
  .section-root span {
    color: ${mindmapDefinitionVGOIOE7TParam23.gitBranchLabel0};
  }
  .section-2 span {
    color: ${mindmapDefinitionVGOIOE7TParam23.gitBranchLabel0};
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
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,
    "getStyles",
  ),
};
