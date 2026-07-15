// Restored from ref/webview/assets/mindmap-definition-QFDTVHPH-BlP876d6.js
// Flat boundary. Vendored mindmapDefinitionQFDTVHPH chunk restored from the Codex webview bundle.
import { invertI, invertO, invertR } from "./color-convert";
import { uuidV4 } from "../utils/uuid-v4";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXB,
  chunkICPOFSXXD,
  _chunkICPOFSXXL,
  chunkICPOFSXXO,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk55IACEB6 } from "./chunk-55-iaceb6";
import { chunkEDXVE4YY } from "./chunk-edxve4yy";
import { chunk336JU56OR, chunk336JU56OT } from "./mermaid-layout-loader-k5";
var mindmapDefinitionQFDTVHPHValue1 = (function () {
  var mindmapDefinitionQFDTVHPHValue9 = chunkAGHRB4JFN(function (
      mindmapDefinitionQFDTVHPHParam48,
      mindmapDefinitionQFDTVHPHParam49,
      mindmapDefinitionQFDTVHPHParam50,
      mindmapDefinitionQFDTVHPHParam51,
    ) {
      for (
        mindmapDefinitionQFDTVHPHParam50 ||= {},
          mindmapDefinitionQFDTVHPHParam51 =
            mindmapDefinitionQFDTVHPHParam48.length;
        mindmapDefinitionQFDTVHPHParam51--;
        mindmapDefinitionQFDTVHPHParam50[
          mindmapDefinitionQFDTVHPHParam48[mindmapDefinitionQFDTVHPHParam51]
        ] = mindmapDefinitionQFDTVHPHParam49
      );
      return mindmapDefinitionQFDTVHPHParam50;
    }, "o"),
    mindmapDefinitionQFDTVHPHValue10 = [1, 4],
    mindmapDefinitionQFDTVHPHValue11 = [1, 13],
    mindmapDefinitionQFDTVHPHValue12 = [1, 12],
    mindmapDefinitionQFDTVHPHValue13 = [1, 15],
    mindmapDefinitionQFDTVHPHValue14 = [1, 16],
    mindmapDefinitionQFDTVHPHValue15 = [1, 20],
    mindmapDefinitionQFDTVHPHValue16 = [1, 19],
    mindmapDefinitionQFDTVHPHValue17 = [6, 7, 8],
    mindmapDefinitionQFDTVHPHValue18 = [1, 26],
    mindmapDefinitionQFDTVHPHValue19 = [1, 24],
    mindmapDefinitionQFDTVHPHValue20 = [1, 25],
    mindmapDefinitionQFDTVHPHValue21 = [6, 7, 11],
    mindmapDefinitionQFDTVHPHValue22 = [1, 6, 13, 15, 16, 19, 22],
    mindmapDefinitionQFDTVHPHValue23 = [1, 33],
    mindmapDefinitionQFDTVHPHValue24 = [1, 34],
    mindmapDefinitionQFDTVHPHValue25 = [1, 6, 7, 11, 13, 15, 16, 19, 22],
    mindmapDefinitionQFDTVHPHValue26 = {
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
        mindmapDefinitionQFDTVHPHParam14,
        mindmapDefinitionQFDTVHPHParam15,
        mindmapDefinitionQFDTVHPHParam16,
        mindmapDefinitionQFDTVHPHParam17,
        mindmapDefinitionQFDTVHPHParam18,
        mindmapDefinitionQFDTVHPHParam19,
        mindmapDefinitionQFDTVHPHParam20,
      ) {
        var mindmapDefinitionQFDTVHPHValue68 =
          mindmapDefinitionQFDTVHPHParam19.length - 1;
        switch (mindmapDefinitionQFDTVHPHParam18) {
          case 6:
          case 7:
            return mindmapDefinitionQFDTVHPHParam17;
          case 8:
            mindmapDefinitionQFDTVHPHParam17.getLogger().trace("Stop NL ");
            break;
          case 9:
            mindmapDefinitionQFDTVHPHParam17.getLogger().trace("Stop EOF ");
            break;
          case 11:
            mindmapDefinitionQFDTVHPHParam17.getLogger().trace("Stop NL2 ");
            break;
          case 12:
            mindmapDefinitionQFDTVHPHParam17.getLogger().trace("Stop EOF2 ");
            break;
          case 15:
            mindmapDefinitionQFDTVHPHParam17
              .getLogger()
              .info(
                "Node: ",
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ].id,
              );
            mindmapDefinitionQFDTVHPHParam17.addNode(
              mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68 - 1
              ].length,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .id,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .descr,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .type,
            );
            break;
          case 16:
            mindmapDefinitionQFDTVHPHParam17
              .getLogger()
              .trace(
                "Icon: ",
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ],
              );
            mindmapDefinitionQFDTVHPHParam17.decorateNode({
              icon: mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68
              ],
            });
            break;
          case 17:
          case 21:
            mindmapDefinitionQFDTVHPHParam17.decorateNode({
              class:
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ],
            });
            break;
          case 18:
            mindmapDefinitionQFDTVHPHParam17.getLogger().trace("SPACELIST");
            break;
          case 19:
            mindmapDefinitionQFDTVHPHParam17
              .getLogger()
              .trace(
                "Node: ",
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ].id,
              );
            mindmapDefinitionQFDTVHPHParam17.addNode(
              0,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .id,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .descr,
              mindmapDefinitionQFDTVHPHParam19[mindmapDefinitionQFDTVHPHValue68]
                .type,
            );
            break;
          case 20:
            mindmapDefinitionQFDTVHPHParam17.decorateNode({
              icon: mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68
              ],
            });
            break;
          case 25:
            mindmapDefinitionQFDTVHPHParam17
              .getLogger()
              .trace(
                "node found ..",
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 2
                ],
              );
            this.$ = {
              id: mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68 - 1
              ],
              descr:
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 1
                ],
              type: mindmapDefinitionQFDTVHPHParam17.getType(
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 2
                ],
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ],
              ),
            };
            break;
          case 26:
            this.$ = {
              id: mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68
              ],
              descr:
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
                ],
              type: mindmapDefinitionQFDTVHPHParam17.nodeType.DEFAULT,
            };
            break;
          case 27:
            mindmapDefinitionQFDTVHPHParam17
              .getLogger()
              .trace(
                "node found ..",
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 3
                ],
              );
            this.$ = {
              id: mindmapDefinitionQFDTVHPHParam19[
                mindmapDefinitionQFDTVHPHValue68 - 3
              ],
              descr:
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 1
                ],
              type: mindmapDefinitionQFDTVHPHParam17.getType(
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68 - 2
                ],
                mindmapDefinitionQFDTVHPHParam19[
                  mindmapDefinitionQFDTVHPHValue68
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
          8: mindmapDefinitionQFDTVHPHValue10,
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
          8: mindmapDefinitionQFDTVHPHValue10,
        },
        {
          6: mindmapDefinitionQFDTVHPHValue11,
          7: [1, 10],
          9: 9,
          12: 11,
          13: mindmapDefinitionQFDTVHPHValue12,
          14: 14,
          15: mindmapDefinitionQFDTVHPHValue13,
          16: mindmapDefinitionQFDTVHPHValue14,
          17: 17,
          18: 18,
          19: mindmapDefinitionQFDTVHPHValue15,
          22: mindmapDefinitionQFDTVHPHValue16,
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue17,
          [2, 3],
        ),
        {
          1: [2, 2],
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue17,
          [2, 4],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue17,
          [2, 5],
        ),
        {
          1: [2, 6],
          6: mindmapDefinitionQFDTVHPHValue11,
          12: 21,
          13: mindmapDefinitionQFDTVHPHValue12,
          14: 14,
          15: mindmapDefinitionQFDTVHPHValue13,
          16: mindmapDefinitionQFDTVHPHValue14,
          17: 17,
          18: 18,
          19: mindmapDefinitionQFDTVHPHValue15,
          22: mindmapDefinitionQFDTVHPHValue16,
        },
        {
          6: mindmapDefinitionQFDTVHPHValue11,
          9: 22,
          12: 11,
          13: mindmapDefinitionQFDTVHPHValue12,
          14: 14,
          15: mindmapDefinitionQFDTVHPHValue13,
          16: mindmapDefinitionQFDTVHPHValue14,
          17: 17,
          18: 18,
          19: mindmapDefinitionQFDTVHPHValue15,
          22: mindmapDefinitionQFDTVHPHValue16,
        },
        {
          6: mindmapDefinitionQFDTVHPHValue18,
          7: mindmapDefinitionQFDTVHPHValue19,
          10: 23,
          11: mindmapDefinitionQFDTVHPHValue20,
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 22],
          {
            17: 17,
            18: 18,
            14: 27,
            15: [1, 28],
            16: [1, 29],
            19: mindmapDefinitionQFDTVHPHValue15,
            22: mindmapDefinitionQFDTVHPHValue16,
          },
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 18],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 19],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 20],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 21],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 23],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 24],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 26],
          {
            19: [1, 30],
          },
        ),
        {
          20: [1, 31],
        },
        {
          6: mindmapDefinitionQFDTVHPHValue18,
          7: mindmapDefinitionQFDTVHPHValue19,
          10: 32,
          11: mindmapDefinitionQFDTVHPHValue20,
        },
        {
          1: [2, 7],
          6: mindmapDefinitionQFDTVHPHValue11,
          12: 21,
          13: mindmapDefinitionQFDTVHPHValue12,
          14: 14,
          15: mindmapDefinitionQFDTVHPHValue13,
          16: mindmapDefinitionQFDTVHPHValue14,
          17: 17,
          18: 18,
          19: mindmapDefinitionQFDTVHPHValue15,
          22: mindmapDefinitionQFDTVHPHValue16,
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue22,
          [2, 14],
          {
            7: mindmapDefinitionQFDTVHPHValue23,
            11: mindmapDefinitionQFDTVHPHValue24,
          },
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue25,
          [2, 8],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue25,
          [2, 9],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue25,
          [2, 10],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 15],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 16],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 17],
        ),
        {
          20: [1, 35],
        },
        {
          21: [1, 36],
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue22,
          [2, 13],
          {
            7: mindmapDefinitionQFDTVHPHValue23,
            11: mindmapDefinitionQFDTVHPHValue24,
          },
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue25,
          [2, 11],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue25,
          [2, 12],
        ),
        {
          21: [1, 37],
        },
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 25],
        ),
        mindmapDefinitionQFDTVHPHValue9(
          mindmapDefinitionQFDTVHPHValue21,
          [2, 27],
        ),
      ],
      defaultActions: {
        2: [2, 1],
        6: [2, 2],
      },
      parseError: chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHParam44,
        mindmapDefinitionQFDTVHPHParam45,
      ) {
        if (mindmapDefinitionQFDTVHPHParam45.recoverable)
          this.trace(mindmapDefinitionQFDTVHPHParam44);
        else {
          var mindmapDefinitionQFDTVHPHValue119 = Error(
            mindmapDefinitionQFDTVHPHParam44,
          );
          throw (
            (mindmapDefinitionQFDTVHPHValue119.hash =
              mindmapDefinitionQFDTVHPHParam45),
            mindmapDefinitionQFDTVHPHValue119
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam1) {
        var mindmapDefinitionQFDTVHPHValue27 = this,
          mindmapDefinitionQFDTVHPHValue28 = [0],
          mindmapDefinitionQFDTVHPHValue29 = [],
          mindmapDefinitionQFDTVHPHValue30 = [null],
          mindmapDefinitionQFDTVHPHValue31 = [],
          mindmapDefinitionQFDTVHPHValue32 = this.table,
          mindmapDefinitionQFDTVHPHValue33 = "",
          mindmapDefinitionQFDTVHPHValue34 = 0,
          mindmapDefinitionQFDTVHPHValue35 = 0,
          mindmapDefinitionQFDTVHPHValue36 = 0,
          mindmapDefinitionQFDTVHPHValue39 =
            mindmapDefinitionQFDTVHPHValue31.slice.call(arguments, 1),
          mindmapDefinitionQFDTVHPHValue40 = Object.create(this.lexer),
          mindmapDefinitionQFDTVHPHValue41 = {
            yy: {},
          };
        for (var mindmapDefinitionQFDTVHPHValue42 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            mindmapDefinitionQFDTVHPHValue42,
          ) &&
            (mindmapDefinitionQFDTVHPHValue41.yy[
              mindmapDefinitionQFDTVHPHValue42
            ] = this.yy[mindmapDefinitionQFDTVHPHValue42]);
        mindmapDefinitionQFDTVHPHValue40.setInput(
          mindmapDefinitionQFDTVHPHParam1,
          mindmapDefinitionQFDTVHPHValue41.yy,
        );
        mindmapDefinitionQFDTVHPHValue41.yy.lexer =
          mindmapDefinitionQFDTVHPHValue40;
        mindmapDefinitionQFDTVHPHValue41.yy.parser = this;
        mindmapDefinitionQFDTVHPHValue40.yylloc === undefined &&
          (mindmapDefinitionQFDTVHPHValue40.yylloc = {});
        var mindmapDefinitionQFDTVHPHValue43 =
          mindmapDefinitionQFDTVHPHValue40.yylloc;
        mindmapDefinitionQFDTVHPHValue31.push(mindmapDefinitionQFDTVHPHValue43);
        var mindmapDefinitionQFDTVHPHValue44 =
          mindmapDefinitionQFDTVHPHValue40.options &&
          mindmapDefinitionQFDTVHPHValue40.options.ranges;
        typeof mindmapDefinitionQFDTVHPHValue41.yy.parseError == "function"
          ? (this.parseError = mindmapDefinitionQFDTVHPHValue41.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function mindmapDefinitionQFDTVHPHHelper2(
          mindmapDefinitionQFDTVHPHParam52,
        ) {
          mindmapDefinitionQFDTVHPHValue28.length -=
            2 * mindmapDefinitionQFDTVHPHParam52;
          mindmapDefinitionQFDTVHPHValue30.length -=
            mindmapDefinitionQFDTVHPHParam52;
          mindmapDefinitionQFDTVHPHValue31.length -=
            mindmapDefinitionQFDTVHPHParam52;
        }
        chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper2, "popStack");
        function mindmapDefinitionQFDTVHPHHelper3() {
          var mindmapDefinitionQFDTVHPHValue112 =
            mindmapDefinitionQFDTVHPHValue29.pop() ||
            mindmapDefinitionQFDTVHPHValue40.lex() ||
            1;
          return (
            typeof mindmapDefinitionQFDTVHPHValue112 != "number" &&
              (mindmapDefinitionQFDTVHPHValue112 instanceof Array &&
                ((mindmapDefinitionQFDTVHPHValue29 =
                  mindmapDefinitionQFDTVHPHValue112),
                (mindmapDefinitionQFDTVHPHValue112 =
                  mindmapDefinitionQFDTVHPHValue29.pop())),
              (mindmapDefinitionQFDTVHPHValue112 =
                mindmapDefinitionQFDTVHPHValue27.symbols_[
                  mindmapDefinitionQFDTVHPHValue112
                ] || mindmapDefinitionQFDTVHPHValue112)),
            mindmapDefinitionQFDTVHPHValue112
          );
        }
        chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper3, "lex");
        for (
          var mindmapDefinitionQFDTVHPHValue45,
            _MindmapDefinitionQFDTVHPH,
            mindmapDefinitionQFDTVHPHValue46,
            mindmapDefinitionQFDTVHPHValue47,
            mindmapDefinitionQFDTVHPHValue48,
            mindmapDefinitionQFDTVHPHValue49 = {},
            mindmapDefinitionQFDTVHPHValue50,
            mindmapDefinitionQFDTVHPHValue51,
            mindmapDefinitionQFDTVHPHValue52,
            mindmapDefinitionQFDTVHPHValue53;
          ;

        ) {
          if (
            ((mindmapDefinitionQFDTVHPHValue46 =
              mindmapDefinitionQFDTVHPHValue28[
                mindmapDefinitionQFDTVHPHValue28.length - 1
              ]),
            this.defaultActions[mindmapDefinitionQFDTVHPHValue46]
              ? (mindmapDefinitionQFDTVHPHValue47 =
                  this.defaultActions[mindmapDefinitionQFDTVHPHValue46])
              : ((mindmapDefinitionQFDTVHPHValue45 ??=
                  mindmapDefinitionQFDTVHPHHelper3()),
                (mindmapDefinitionQFDTVHPHValue47 =
                  mindmapDefinitionQFDTVHPHValue32[
                    mindmapDefinitionQFDTVHPHValue46
                  ] &&
                  mindmapDefinitionQFDTVHPHValue32[
                    mindmapDefinitionQFDTVHPHValue46
                  ][mindmapDefinitionQFDTVHPHValue45])),
            mindmapDefinitionQFDTVHPHValue47 === undefined ||
              !mindmapDefinitionQFDTVHPHValue47.length ||
              !mindmapDefinitionQFDTVHPHValue47[0])
          ) {
            var mindmapDefinitionQFDTVHPHValue54 = "";
            for (mindmapDefinitionQFDTVHPHValue50 in ((mindmapDefinitionQFDTVHPHValue53 =
              []),
            mindmapDefinitionQFDTVHPHValue32[mindmapDefinitionQFDTVHPHValue46]))
              this.terminals_[mindmapDefinitionQFDTVHPHValue50] &&
                mindmapDefinitionQFDTVHPHValue50 > 2 &&
                mindmapDefinitionQFDTVHPHValue53.push(
                  "'" + this.terminals_[mindmapDefinitionQFDTVHPHValue50] + "'",
                );
            mindmapDefinitionQFDTVHPHValue54 =
              mindmapDefinitionQFDTVHPHValue40.showPosition
                ? "Parse error on line " +
                  (mindmapDefinitionQFDTVHPHValue34 + 1) +
                  ":\n" +
                  mindmapDefinitionQFDTVHPHValue40.showPosition() +
                  "\nExpecting " +
                  mindmapDefinitionQFDTVHPHValue53.join(", ") +
                  ", got '" +
                  (this.terminals_[mindmapDefinitionQFDTVHPHValue45] ||
                    mindmapDefinitionQFDTVHPHValue45) +
                  "'"
                : "Parse error on line " +
                  (mindmapDefinitionQFDTVHPHValue34 + 1) +
                  ": Unexpected " +
                  (mindmapDefinitionQFDTVHPHValue45 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[mindmapDefinitionQFDTVHPHValue45] ||
                        mindmapDefinitionQFDTVHPHValue45) +
                      "'");
            this.parseError(mindmapDefinitionQFDTVHPHValue54, {
              text: mindmapDefinitionQFDTVHPHValue40.match,
              token:
                this.terminals_[mindmapDefinitionQFDTVHPHValue45] ||
                mindmapDefinitionQFDTVHPHValue45,
              line: mindmapDefinitionQFDTVHPHValue40.yylineno,
              loc: mindmapDefinitionQFDTVHPHValue43,
              expected: mindmapDefinitionQFDTVHPHValue53,
            });
          }
          if (
            mindmapDefinitionQFDTVHPHValue47[0] instanceof Array &&
            mindmapDefinitionQFDTVHPHValue47.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                mindmapDefinitionQFDTVHPHValue46 +
                ", token: " +
                mindmapDefinitionQFDTVHPHValue45,
            );
          switch (mindmapDefinitionQFDTVHPHValue47[0]) {
            case 1:
              mindmapDefinitionQFDTVHPHValue28.push(
                mindmapDefinitionQFDTVHPHValue45,
              );
              mindmapDefinitionQFDTVHPHValue30.push(
                mindmapDefinitionQFDTVHPHValue40.yytext,
              );
              mindmapDefinitionQFDTVHPHValue31.push(
                mindmapDefinitionQFDTVHPHValue40.yylloc,
              );
              mindmapDefinitionQFDTVHPHValue28.push(
                mindmapDefinitionQFDTVHPHValue47[1],
              );
              mindmapDefinitionQFDTVHPHValue45 = null;
              _MindmapDefinitionQFDTVHPH
                ? ((mindmapDefinitionQFDTVHPHValue45 =
                    _MindmapDefinitionQFDTVHPH),
                  (_MindmapDefinitionQFDTVHPH = null))
                : ((mindmapDefinitionQFDTVHPHValue35 =
                    mindmapDefinitionQFDTVHPHValue40.yyleng),
                  (mindmapDefinitionQFDTVHPHValue33 =
                    mindmapDefinitionQFDTVHPHValue40.yytext),
                  (mindmapDefinitionQFDTVHPHValue34 =
                    mindmapDefinitionQFDTVHPHValue40.yylineno),
                  (mindmapDefinitionQFDTVHPHValue43 =
                    mindmapDefinitionQFDTVHPHValue40.yylloc),
                  mindmapDefinitionQFDTVHPHValue36 > 0 &&
                    mindmapDefinitionQFDTVHPHValue36--);
              break;
            case 2:
              if (
                ((mindmapDefinitionQFDTVHPHValue51 =
                  this.productions_[mindmapDefinitionQFDTVHPHValue47[1]][1]),
                (mindmapDefinitionQFDTVHPHValue49.$ =
                  mindmapDefinitionQFDTVHPHValue30[
                    mindmapDefinitionQFDTVHPHValue30.length -
                      mindmapDefinitionQFDTVHPHValue51
                  ]),
                (mindmapDefinitionQFDTVHPHValue49._$ = {
                  first_line:
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length -
                        (mindmapDefinitionQFDTVHPHValue51 || 1)
                    ].first_line,
                  last_line:
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length - 1
                    ].last_line,
                  first_column:
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length -
                        (mindmapDefinitionQFDTVHPHValue51 || 1)
                    ].first_column,
                  last_column:
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length - 1
                    ].last_column,
                }),
                mindmapDefinitionQFDTVHPHValue44 &&
                  (mindmapDefinitionQFDTVHPHValue49._$.range = [
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length -
                        (mindmapDefinitionQFDTVHPHValue51 || 1)
                    ].range[0],
                    mindmapDefinitionQFDTVHPHValue31[
                      mindmapDefinitionQFDTVHPHValue31.length - 1
                    ].range[1],
                  ]),
                (mindmapDefinitionQFDTVHPHValue48 = this.performAction.apply(
                  mindmapDefinitionQFDTVHPHValue49,
                  [
                    mindmapDefinitionQFDTVHPHValue33,
                    mindmapDefinitionQFDTVHPHValue35,
                    mindmapDefinitionQFDTVHPHValue34,
                    mindmapDefinitionQFDTVHPHValue41.yy,
                    mindmapDefinitionQFDTVHPHValue47[1],
                    mindmapDefinitionQFDTVHPHValue30,
                    mindmapDefinitionQFDTVHPHValue31,
                  ].concat(mindmapDefinitionQFDTVHPHValue39),
                )),
                mindmapDefinitionQFDTVHPHValue48 !== undefined)
              )
                return mindmapDefinitionQFDTVHPHValue48;
              mindmapDefinitionQFDTVHPHValue51 &&
                ((mindmapDefinitionQFDTVHPHValue28 =
                  mindmapDefinitionQFDTVHPHValue28.slice(
                    0,
                    -1 * mindmapDefinitionQFDTVHPHValue51 * 2,
                  )),
                (mindmapDefinitionQFDTVHPHValue30 =
                  mindmapDefinitionQFDTVHPHValue30.slice(
                    0,
                    -1 * mindmapDefinitionQFDTVHPHValue51,
                  )),
                (mindmapDefinitionQFDTVHPHValue31 =
                  mindmapDefinitionQFDTVHPHValue31.slice(
                    0,
                    -1 * mindmapDefinitionQFDTVHPHValue51,
                  )));
              mindmapDefinitionQFDTVHPHValue28.push(
                this.productions_[mindmapDefinitionQFDTVHPHValue47[1]][0],
              );
              mindmapDefinitionQFDTVHPHValue30.push(
                mindmapDefinitionQFDTVHPHValue49.$,
              );
              mindmapDefinitionQFDTVHPHValue31.push(
                mindmapDefinitionQFDTVHPHValue49._$,
              );
              mindmapDefinitionQFDTVHPHValue52 =
                mindmapDefinitionQFDTVHPHValue32[
                  mindmapDefinitionQFDTVHPHValue28[
                    mindmapDefinitionQFDTVHPHValue28.length - 2
                  ]
                ][
                  mindmapDefinitionQFDTVHPHValue28[
                    mindmapDefinitionQFDTVHPHValue28.length - 1
                  ]
                ];
              mindmapDefinitionQFDTVHPHValue28.push(
                mindmapDefinitionQFDTVHPHValue52,
              );
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  mindmapDefinitionQFDTVHPHValue26.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHParam46,
        mindmapDefinitionQFDTVHPHParam47,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            mindmapDefinitionQFDTVHPHParam46,
            mindmapDefinitionQFDTVHPHParam47,
          );
        else throw Error(mindmapDefinitionQFDTVHPHParam46);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHParam37,
        mindmapDefinitionQFDTVHPHParam38,
      ) {
        return (
          (this.yy = mindmapDefinitionQFDTVHPHParam38 || this.yy || {}),
          (this._input = mindmapDefinitionQFDTVHPHParam37),
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
        var mindmapDefinitionQFDTVHPHValue106 = this._input[0];
        return (
          (this.yytext += mindmapDefinitionQFDTVHPHValue106),
          this.yyleng++,
          this.offset++,
          (this.match += mindmapDefinitionQFDTVHPHValue106),
          (this.matched += mindmapDefinitionQFDTVHPHValue106),
          mindmapDefinitionQFDTVHPHValue106.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          mindmapDefinitionQFDTVHPHValue106
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam23) {
        var mindmapDefinitionQFDTVHPHValue74 =
            mindmapDefinitionQFDTVHPHParam23.length,
          mindmapDefinitionQFDTVHPHValue75 =
            mindmapDefinitionQFDTVHPHParam23.split(/(?:\r\n?|\n)/g);
        this._input = mindmapDefinitionQFDTVHPHParam23 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - mindmapDefinitionQFDTVHPHValue74,
        );
        this.offset -= mindmapDefinitionQFDTVHPHValue74;
        var mindmapDefinitionQFDTVHPHValue76 =
          this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        mindmapDefinitionQFDTVHPHValue75.length - 1 &&
          (this.yylineno -= mindmapDefinitionQFDTVHPHValue75.length - 1);
        var mindmapDefinitionQFDTVHPHValue77 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: mindmapDefinitionQFDTVHPHValue75
              ? (mindmapDefinitionQFDTVHPHValue75.length ===
                mindmapDefinitionQFDTVHPHValue76.length
                  ? this.yylloc.first_column
                  : 0) +
                mindmapDefinitionQFDTVHPHValue76[
                  mindmapDefinitionQFDTVHPHValue76.length -
                    mindmapDefinitionQFDTVHPHValue75.length
                ].length -
                mindmapDefinitionQFDTVHPHValue75[0].length
              : this.yylloc.first_column - mindmapDefinitionQFDTVHPHValue74,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              mindmapDefinitionQFDTVHPHValue77[0],
              mindmapDefinitionQFDTVHPHValue77[0] +
                this.yyleng -
                mindmapDefinitionQFDTVHPHValue74,
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
      less: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam53) {
        this.unput(this.match.slice(mindmapDefinitionQFDTVHPHParam53));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var mindmapDefinitionQFDTVHPHValue109 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (mindmapDefinitionQFDTVHPHValue109.length > 20 ? "..." : "") +
          mindmapDefinitionQFDTVHPHValue109.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var mindmapDefinitionQFDTVHPHValue108 = this.match;
        return (
          mindmapDefinitionQFDTVHPHValue108.length < 20 &&
            (mindmapDefinitionQFDTVHPHValue108 += this._input.substr(
              0,
              20 - mindmapDefinitionQFDTVHPHValue108.length,
            )),
          (
            mindmapDefinitionQFDTVHPHValue108.substr(0, 20) +
            (mindmapDefinitionQFDTVHPHValue108.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var mindmapDefinitionQFDTVHPHValue113 = this.pastInput(),
          mindmapDefinitionQFDTVHPHValue114 = Array(
            mindmapDefinitionQFDTVHPHValue113.length + 1,
          ).join("-");
        return (
          mindmapDefinitionQFDTVHPHValue113 +
          this.upcomingInput() +
          "\n" +
          mindmapDefinitionQFDTVHPHValue114 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHParam8,
        mindmapDefinitionQFDTVHPHParam9,
      ) {
        var mindmapDefinitionQFDTVHPHValue60,
          mindmapDefinitionQFDTVHPHValue61,
          mindmapDefinitionQFDTVHPHValue62;
        if (
          (this.options.backtrack_lexer &&
            ((mindmapDefinitionQFDTVHPHValue62 = {
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
              (mindmapDefinitionQFDTVHPHValue62.yylloc.range =
                this.yylloc.range.slice(0))),
          (mindmapDefinitionQFDTVHPHValue61 =
            mindmapDefinitionQFDTVHPHParam8[0].match(/(?:\r\n?|\n).*/g)),
          mindmapDefinitionQFDTVHPHValue61 &&
            (this.yylineno += mindmapDefinitionQFDTVHPHValue61.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: mindmapDefinitionQFDTVHPHValue61
              ? mindmapDefinitionQFDTVHPHValue61[
                  mindmapDefinitionQFDTVHPHValue61.length - 1
                ].length -
                mindmapDefinitionQFDTVHPHValue61[
                  mindmapDefinitionQFDTVHPHValue61.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column +
                mindmapDefinitionQFDTVHPHParam8[0].length,
          }),
          (this.yytext += mindmapDefinitionQFDTVHPHParam8[0]),
          (this.match += mindmapDefinitionQFDTVHPHParam8[0]),
          (this.matches = mindmapDefinitionQFDTVHPHParam8),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            mindmapDefinitionQFDTVHPHParam8[0].length,
          )),
          (this.matched += mindmapDefinitionQFDTVHPHParam8[0]),
          (mindmapDefinitionQFDTVHPHValue60 = this.performAction.call(
            this,
            this.yy,
            this,
            mindmapDefinitionQFDTVHPHParam9,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          mindmapDefinitionQFDTVHPHValue60)
        )
          return mindmapDefinitionQFDTVHPHValue60;
        if (this._backtrack) {
          for (var mindmapDefinitionQFDTVHPHValue63 in mindmapDefinitionQFDTVHPHValue62)
            this[mindmapDefinitionQFDTVHPHValue63] =
              mindmapDefinitionQFDTVHPHValue62[
                mindmapDefinitionQFDTVHPHValue63
              ];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var mindmapDefinitionQFDTVHPHValue83,
          mindmapDefinitionQFDTVHPHValue84,
          mindmapDefinitionQFDTVHPHValue85,
          mindmapDefinitionQFDTVHPHValue86;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var mindmapDefinitionQFDTVHPHValue87 = this._currentRules(),
            mindmapDefinitionQFDTVHPHValue88 = 0;
          mindmapDefinitionQFDTVHPHValue88 <
          mindmapDefinitionQFDTVHPHValue87.length;
          mindmapDefinitionQFDTVHPHValue88++
        )
          if (
            ((mindmapDefinitionQFDTVHPHValue85 = this._input.match(
              this.rules[
                mindmapDefinitionQFDTVHPHValue87[
                  mindmapDefinitionQFDTVHPHValue88
                ]
              ],
            )),
            mindmapDefinitionQFDTVHPHValue85 &&
              (!mindmapDefinitionQFDTVHPHValue84 ||
                mindmapDefinitionQFDTVHPHValue85[0].length >
                  mindmapDefinitionQFDTVHPHValue84[0].length))
          ) {
            if (
              ((mindmapDefinitionQFDTVHPHValue84 =
                mindmapDefinitionQFDTVHPHValue85),
              (mindmapDefinitionQFDTVHPHValue86 =
                mindmapDefinitionQFDTVHPHValue88),
              this.options.backtrack_lexer)
            ) {
              if (
                ((mindmapDefinitionQFDTVHPHValue83 = this.test_match(
                  mindmapDefinitionQFDTVHPHValue85,
                  mindmapDefinitionQFDTVHPHValue87[
                    mindmapDefinitionQFDTVHPHValue88
                  ],
                )),
                mindmapDefinitionQFDTVHPHValue83 !== false)
              )
                return mindmapDefinitionQFDTVHPHValue83;
              if (this._backtrack) {
                mindmapDefinitionQFDTVHPHValue84 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return mindmapDefinitionQFDTVHPHValue84
          ? ((mindmapDefinitionQFDTVHPHValue83 = this.test_match(
              mindmapDefinitionQFDTVHPHValue84,
              mindmapDefinitionQFDTVHPHValue87[
                mindmapDefinitionQFDTVHPHValue86
              ],
            )),
            mindmapDefinitionQFDTVHPHValue83 === false
              ? false
              : mindmapDefinitionQFDTVHPHValue83)
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
      begin: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam55) {
        this.conditionStack.push(mindmapDefinitionQFDTVHPHParam55);
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
      topState: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam43) {
        return (
          (mindmapDefinitionQFDTVHPHParam43 =
            this.conditionStack.length -
            1 -
            Math.abs(mindmapDefinitionQFDTVHPHParam43 || 0)),
          mindmapDefinitionQFDTVHPHParam43 >= 0
            ? this.conditionStack[mindmapDefinitionQFDTVHPHParam43]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (mindmapDefinitionQFDTVHPHParam58) {
        this.begin(mindmapDefinitionQFDTVHPHParam58);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {
        "case-insensitive": true,
      },
      performAction: chunkAGHRB4JFN(function (
        mindmapDefinitionQFDTVHPHParam2,
        mindmapDefinitionQFDTVHPHParam3,
        mindmapDefinitionQFDTVHPHParam4,
        mindmapDefinitionQFDTVHPHParam5,
      ) {
        switch (mindmapDefinitionQFDTVHPHParam4) {
          case 0:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace("Found comment", mindmapDefinitionQFDTVHPHParam3.yytext),
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
            mindmapDefinitionQFDTVHPHParam2.getLogger().trace("Begin icon");
            this.begin("ICON");
            break;
          case 6:
            return (
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("SPACELINE"),
              6
            );
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            mindmapDefinitionQFDTVHPHParam2.getLogger().trace("end icon");
            this.popState();
            break;
          case 10:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace("Exploding node"),
              this.begin("NODE"),
              19
            );
          case 11:
            return (
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("Cloud"),
              this.begin("NODE"),
              19
            );
          case 12:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace("Explosion Bang"),
              this.begin("NODE"),
              19
            );
          case 13:
            return (
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("Cloud Bang"),
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
            mindmapDefinitionQFDTVHPHParam2.getLogger().trace("Starting NSTR");
            this.begin("NSTR");
            break;
          case 25:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace("description:", mindmapDefinitionQFDTVHPHParam3.yytext),
              "NODE_DESCR"
            );
          case 26:
            this.popState();
            break;
          case 27:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end ))"),
              "NODE_DEND"
            );
          case 28:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end )"),
              "NODE_DEND"
            );
          case 29:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace("node end ...", mindmapDefinitionQFDTVHPHParam3.yytext),
              "NODE_DEND"
            );
          case 30:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 31:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end (-"),
              "NODE_DEND"
            );
          case 32:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end (-"),
              "NODE_DEND"
            );
          case 33:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 34:
            return (
              this.popState(),
              mindmapDefinitionQFDTVHPHParam2.getLogger().trace("node end (("),
              "NODE_DEND"
            );
          case 35:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace(
                  "Long description:",
                  mindmapDefinitionQFDTVHPHParam3.yytext,
                ),
              20
            );
          case 36:
            return (
              mindmapDefinitionQFDTVHPHParam2
                .getLogger()
                .trace(
                  "Long description:",
                  mindmapDefinitionQFDTVHPHParam3.yytext,
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
  function mindmapDefinitionQFDTVHPHHelper1() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(mindmapDefinitionQFDTVHPHHelper1, "Parser"),
    (mindmapDefinitionQFDTVHPHHelper1.prototype =
      mindmapDefinitionQFDTVHPHValue26),
    (mindmapDefinitionQFDTVHPHValue26.Parser =
      mindmapDefinitionQFDTVHPHHelper1),
    new mindmapDefinitionQFDTVHPHHelper1()
  );
})();
mindmapDefinitionQFDTVHPHValue1.parser = mindmapDefinitionQFDTVHPHValue1;
var mindmapDefinitionQFDTVHPHValue2 = mindmapDefinitionQFDTVHPHValue1,
  mindmapDefinitionQFDTVHPHValue4 = {
    DEFAULT: 0,
    NO_BORDER: 0,
    ROUNDED_RECT: 1,
    RECT: 2,
    CIRCLE: 3,
    CLOUD: 4,
    BANG: 5,
    HEXAGON: 6,
  },
  mindmapDefinitionQFDTVHPHValue5 = class {
    constructor() {
      this.nodes = [];
      this.count = 0;
      this.elements = {};
      this.getLogger = this.getLogger.bind(this);
      this.nodeType = mindmapDefinitionQFDTVHPHValue4;
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
    getParent(mindmapDefinitionQFDTVHPHParam42) {
      for (
        let mindmapDefinitionQFDTVHPHValue118 = this.nodes.length - 1;
        mindmapDefinitionQFDTVHPHValue118 >= 0;
        mindmapDefinitionQFDTVHPHValue118--
      )
        if (
          this.nodes[mindmapDefinitionQFDTVHPHValue118].level <
          mindmapDefinitionQFDTVHPHParam42
        )
          return this.nodes[mindmapDefinitionQFDTVHPHValue118];
      return null;
    }
    getMindmap() {
      return this.nodes.length > 0 ? this.nodes[0] : null;
    }
    addNode(
      mindmapDefinitionQFDTVHPHParam24,
      mindmapDefinitionQFDTVHPHParam25,
      mindmapDefinitionQFDTVHPHParam26,
      mindmapDefinitionQFDTVHPHParam27,
    ) {
      chunkAGHRB4JFR.info(
        "addNode",
        mindmapDefinitionQFDTVHPHParam24,
        mindmapDefinitionQFDTVHPHParam25,
        mindmapDefinitionQFDTVHPHParam26,
        mindmapDefinitionQFDTVHPHParam27,
      );
      let mindmapDefinitionQFDTVHPHValue78 = false;
      this.nodes.length === 0
        ? ((this.baseLevel = mindmapDefinitionQFDTVHPHParam24),
          (mindmapDefinitionQFDTVHPHParam24 = 0),
          (mindmapDefinitionQFDTVHPHValue78 = true))
        : this.baseLevel !== undefined &&
          ((mindmapDefinitionQFDTVHPHParam24 -= this.baseLevel),
          (mindmapDefinitionQFDTVHPHValue78 = false));
      let mindmapDefinitionQFDTVHPHValue79 = _chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHValue80 =
          mindmapDefinitionQFDTVHPHValue79.mindmap?.padding ??
          chunkICPOFSXXD.mindmap.padding;
      switch (mindmapDefinitionQFDTVHPHParam27) {
        case this.nodeType.ROUNDED_RECT:
        case this.nodeType.RECT:
        case this.nodeType.HEXAGON:
          mindmapDefinitionQFDTVHPHValue80 *= 2;
          break;
      }
      let mindmapDefinitionQFDTVHPHValue81 = {
          id: this.count++,
          nodeId: _chunkICPOFSXXL(
            mindmapDefinitionQFDTVHPHParam25,
            mindmapDefinitionQFDTVHPHValue79,
          ),
          level: mindmapDefinitionQFDTVHPHParam24,
          descr: _chunkICPOFSXXL(
            mindmapDefinitionQFDTVHPHParam26,
            mindmapDefinitionQFDTVHPHValue79,
          ),
          type: mindmapDefinitionQFDTVHPHParam27,
          children: [],
          width:
            mindmapDefinitionQFDTVHPHValue79.mindmap?.maxNodeWidth ??
            chunkICPOFSXXD.mindmap.maxNodeWidth,
          padding: mindmapDefinitionQFDTVHPHValue80,
          isRoot: mindmapDefinitionQFDTVHPHValue78,
        },
        mindmapDefinitionQFDTVHPHValue82 = this.getParent(
          mindmapDefinitionQFDTVHPHParam24,
        );
      if (mindmapDefinitionQFDTVHPHValue82) {
        mindmapDefinitionQFDTVHPHValue82.children.push(
          mindmapDefinitionQFDTVHPHValue81,
        );
        this.nodes.push(mindmapDefinitionQFDTVHPHValue81);
      } else if (mindmapDefinitionQFDTVHPHValue78)
        this.nodes.push(mindmapDefinitionQFDTVHPHValue81);
      else
        throw Error(
          `There can be only one root. No parent could be found for ("${mindmapDefinitionQFDTVHPHValue81.descr}")`,
        );
    }
    getType(
      mindmapDefinitionQFDTVHPHParam35,
      mindmapDefinitionQFDTVHPHParam36,
    ) {
      switch (
        (chunkAGHRB4JFR.debug(
          "In get type",
          mindmapDefinitionQFDTVHPHParam35,
          mindmapDefinitionQFDTVHPHParam36,
        ),
        mindmapDefinitionQFDTVHPHParam35)
      ) {
        case "[":
          return this.nodeType.RECT;
        case "(":
          return mindmapDefinitionQFDTVHPHParam36 === ")"
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
      mindmapDefinitionQFDTVHPHParam56,
      mindmapDefinitionQFDTVHPHParam57,
    ) {
      this.elements[mindmapDefinitionQFDTVHPHParam56] =
        mindmapDefinitionQFDTVHPHParam57;
    }
    getElementById(mindmapDefinitionQFDTVHPHParam54) {
      return this.elements[mindmapDefinitionQFDTVHPHParam54];
    }
    decorateNode(mindmapDefinitionQFDTVHPHParam41) {
      if (!mindmapDefinitionQFDTVHPHParam41) return;
      let mindmapDefinitionQFDTVHPHValue110 = _chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHValue111 = this.nodes[this.nodes.length - 1];
      mindmapDefinitionQFDTVHPHParam41.icon &&
        (mindmapDefinitionQFDTVHPHValue111.icon = _chunkICPOFSXXL(
          mindmapDefinitionQFDTVHPHParam41.icon,
          mindmapDefinitionQFDTVHPHValue110,
        ));
      mindmapDefinitionQFDTVHPHParam41.class &&
        (mindmapDefinitionQFDTVHPHValue111.class = _chunkICPOFSXXL(
          mindmapDefinitionQFDTVHPHParam41.class,
          mindmapDefinitionQFDTVHPHValue110,
        ));
    }
    type2Str(mindmapDefinitionQFDTVHPHParam33) {
      switch (mindmapDefinitionQFDTVHPHParam33) {
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
      mindmapDefinitionQFDTVHPHParam39,
      mindmapDefinitionQFDTVHPHParam40,
    ) {
      if (
        (mindmapDefinitionQFDTVHPHParam39.level === 0
          ? (mindmapDefinitionQFDTVHPHParam39.section = undefined)
          : (mindmapDefinitionQFDTVHPHParam39.section =
              mindmapDefinitionQFDTVHPHParam40),
        mindmapDefinitionQFDTVHPHParam39.children)
      )
        for (let [
          mindmapDefinitionQFDTVHPHValue116,
          mindmapDefinitionQFDTVHPHValue117,
        ] of mindmapDefinitionQFDTVHPHParam39.children.entries()) {
          let mindmapDefinitionQFDTVHPHValue120 =
            mindmapDefinitionQFDTVHPHParam39.level === 0
              ? mindmapDefinitionQFDTVHPHValue116 % 11
              : mindmapDefinitionQFDTVHPHParam40;
          this.assignSections(
            mindmapDefinitionQFDTVHPHValue117,
            mindmapDefinitionQFDTVHPHValue120,
          );
        }
    }
    flattenNodes(
      mindmapDefinitionQFDTVHPHParam21,
      mindmapDefinitionQFDTVHPHParam22,
    ) {
      let mindmapDefinitionQFDTVHPHValue69 = _chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHValue70 = ["mindmap-node"];
      mindmapDefinitionQFDTVHPHParam21.isRoot === true
        ? mindmapDefinitionQFDTVHPHValue70.push("section-root", "section--1")
        : mindmapDefinitionQFDTVHPHParam21.section !== undefined &&
          mindmapDefinitionQFDTVHPHValue70.push(
            `section-${mindmapDefinitionQFDTVHPHParam21.section}`,
          );
      mindmapDefinitionQFDTVHPHParam21.class &&
        mindmapDefinitionQFDTVHPHValue70.push(
          mindmapDefinitionQFDTVHPHParam21.class,
        );
      let mindmapDefinitionQFDTVHPHValue71 =
          mindmapDefinitionQFDTVHPHValue70.join(" "),
        mindmapDefinitionQFDTVHPHValue72 = chunkAGHRB4JFN(
          (mindmapDefinitionQFDTVHPHParam34) => {
            let mindmapDefinitionQFDTVHPHValue101 = (
              mindmapDefinitionQFDTVHPHValue69.theme?.toLowerCase() ?? ""
            ).includes("redux");
            switch (mindmapDefinitionQFDTVHPHParam34) {
              case mindmapDefinitionQFDTVHPHValue4.CIRCLE:
                return "mindmapCircle";
              case mindmapDefinitionQFDTVHPHValue4.RECT:
                return "rect";
              case mindmapDefinitionQFDTVHPHValue4.ROUNDED_RECT:
                return "rounded";
              case mindmapDefinitionQFDTVHPHValue4.CLOUD:
                return "cloud";
              case mindmapDefinitionQFDTVHPHValue4.BANG:
                return "bang";
              case mindmapDefinitionQFDTVHPHValue4.HEXAGON:
                return "hexagon";
              case mindmapDefinitionQFDTVHPHValue4.DEFAULT:
                return mindmapDefinitionQFDTVHPHValue101
                  ? "rounded"
                  : "defaultMindmapNode";
              case mindmapDefinitionQFDTVHPHValue4.NO_BORDER:
              default:
                return "rect";
            }
          },
          "getShapeFromType",
        ),
        mindmapDefinitionQFDTVHPHValue73 = {
          id: mindmapDefinitionQFDTVHPHParam21.id.toString(),
          domId: "node_" + mindmapDefinitionQFDTVHPHParam21.id.toString(),
          label: mindmapDefinitionQFDTVHPHParam21.descr,
          labelType: "markdown",
          isGroup: false,
          shape: mindmapDefinitionQFDTVHPHValue72(
            mindmapDefinitionQFDTVHPHParam21.type,
          ),
          width: mindmapDefinitionQFDTVHPHParam21.width,
          height: mindmapDefinitionQFDTVHPHParam21.height ?? 0,
          padding: mindmapDefinitionQFDTVHPHParam21.padding,
          cssClasses: mindmapDefinitionQFDTVHPHValue71,
          cssStyles: [],
          look: mindmapDefinitionQFDTVHPHValue69.look,
          icon: mindmapDefinitionQFDTVHPHParam21.icon,
          x: mindmapDefinitionQFDTVHPHParam21.x,
          y: mindmapDefinitionQFDTVHPHParam21.y,
          level: mindmapDefinitionQFDTVHPHParam21.level,
          nodeId: mindmapDefinitionQFDTVHPHParam21.nodeId,
          type: mindmapDefinitionQFDTVHPHParam21.type,
          section: mindmapDefinitionQFDTVHPHParam21.section,
        };
      if (
        (mindmapDefinitionQFDTVHPHParam22.push(
          mindmapDefinitionQFDTVHPHValue73,
        ),
        mindmapDefinitionQFDTVHPHParam21.children)
      )
        for (let mindmapDefinitionQFDTVHPHValue121 of mindmapDefinitionQFDTVHPHParam21.children)
          this.flattenNodes(
            mindmapDefinitionQFDTVHPHValue121,
            mindmapDefinitionQFDTVHPHParam22,
          );
    }
    generateEdges(
      mindmapDefinitionQFDTVHPHParam28,
      mindmapDefinitionQFDTVHPHParam29,
    ) {
      if (!mindmapDefinitionQFDTVHPHParam28.children) return;
      let mindmapDefinitionQFDTVHPHValue96 = _chunkICPOFSXXB();
      for (let mindmapDefinitionQFDTVHPHValue102 of mindmapDefinitionQFDTVHPHParam28.children) {
        let mindmapDefinitionQFDTVHPHValue103 = "edge";
        mindmapDefinitionQFDTVHPHValue102.section !== undefined &&
          (mindmapDefinitionQFDTVHPHValue103 += ` section-edge-${mindmapDefinitionQFDTVHPHValue102.section}`);
        let mindmapDefinitionQFDTVHPHValue104 =
          mindmapDefinitionQFDTVHPHParam28.level + 1;
        mindmapDefinitionQFDTVHPHValue103 += ` edge-depth-${mindmapDefinitionQFDTVHPHValue104}`;
        let mindmapDefinitionQFDTVHPHValue105 = {
          id: `edge_${mindmapDefinitionQFDTVHPHParam28.id}_${mindmapDefinitionQFDTVHPHValue102.id}`,
          start: mindmapDefinitionQFDTVHPHParam28.id.toString(),
          end: mindmapDefinitionQFDTVHPHValue102.id.toString(),
          type: "normal",
          curve: "basis",
          thickness: "normal",
          look: mindmapDefinitionQFDTVHPHValue96.look,
          classes: mindmapDefinitionQFDTVHPHValue103,
          depth: mindmapDefinitionQFDTVHPHParam28.level,
          section: mindmapDefinitionQFDTVHPHValue102.section,
        };
        mindmapDefinitionQFDTVHPHParam29.push(
          mindmapDefinitionQFDTVHPHValue105,
        );
        this.generateEdges(
          mindmapDefinitionQFDTVHPHValue102,
          mindmapDefinitionQFDTVHPHParam29,
        );
      }
    }
    getData() {
      let mindmapDefinitionQFDTVHPHValue89 = this.getMindmap(),
        mindmapDefinitionQFDTVHPHValue90 = _chunkICPOFSXXB(),
        mindmapDefinitionQFDTVHPHValue91 =
          chunkICPOFSXXO().layout !== undefined,
        mindmapDefinitionQFDTVHPHValue92 = mindmapDefinitionQFDTVHPHValue90;
      if (
        (mindmapDefinitionQFDTVHPHValue91 ||
          (mindmapDefinitionQFDTVHPHValue92.layout = "cose-bilkent"),
        !mindmapDefinitionQFDTVHPHValue89)
      )
        return {
          nodes: [],
          edges: [],
          config: mindmapDefinitionQFDTVHPHValue92,
        };
      chunkAGHRB4JFR.debug(
        "getData: mindmapRoot",
        mindmapDefinitionQFDTVHPHValue89,
        mindmapDefinitionQFDTVHPHValue90,
      );
      this.assignSections(mindmapDefinitionQFDTVHPHValue89);
      let mindmapDefinitionQFDTVHPHValue93 = [],
        mindmapDefinitionQFDTVHPHValue94 = [];
      this.flattenNodes(
        mindmapDefinitionQFDTVHPHValue89,
        mindmapDefinitionQFDTVHPHValue93,
      );
      this.generateEdges(
        mindmapDefinitionQFDTVHPHValue89,
        mindmapDefinitionQFDTVHPHValue94,
      );
      chunkAGHRB4JFR.debug(
        `getData: processed ${mindmapDefinitionQFDTVHPHValue93.length} nodes and ${mindmapDefinitionQFDTVHPHValue94.length} edges`,
      );
      let mindmapDefinitionQFDTVHPHValue95 = new Map();
      for (let mindmapDefinitionQFDTVHPHValue115 of mindmapDefinitionQFDTVHPHValue93)
        mindmapDefinitionQFDTVHPHValue95.set(
          mindmapDefinitionQFDTVHPHValue115.id,
          {
            shape: mindmapDefinitionQFDTVHPHValue115.shape,
            width: mindmapDefinitionQFDTVHPHValue115.width,
            height: mindmapDefinitionQFDTVHPHValue115.height,
            padding: mindmapDefinitionQFDTVHPHValue115.padding,
          },
        );
      return {
        nodes: mindmapDefinitionQFDTVHPHValue93,
        edges: mindmapDefinitionQFDTVHPHValue94,
        config: mindmapDefinitionQFDTVHPHValue92,
        rootNode: mindmapDefinitionQFDTVHPHValue89,
        markers: ["point"],
        direction: "TB",
        nodeSpacing: 50,
        rankSpacing: 50,
        shapes: Object.fromEntries(mindmapDefinitionQFDTVHPHValue95),
        type: "mindmap",
        diagramId: "mindmap-" + uuidV4(),
      };
    }
    getLogger() {
      return chunkAGHRB4JFR;
    }
  },
  mindmapDefinitionQFDTVHPHValue6 = {
    draw: chunkAGHRB4JFN(
      async (
        mindmapDefinitionQFDTVHPHParam10,
        mindmapDefinitionQFDTVHPHParam11,
        mindmapDefinitionQFDTVHPHParam12,
        mindmapDefinitionQFDTVHPHParam13,
      ) => {
        chunkAGHRB4JFR.debug(
          "Rendering mindmap diagram\n" + mindmapDefinitionQFDTVHPHParam10,
        );
        let mindmapDefinitionQFDTVHPHValue64 =
            mindmapDefinitionQFDTVHPHParam13.db,
          mindmapDefinitionQFDTVHPHValue65 =
            mindmapDefinitionQFDTVHPHValue64.getData(),
          mindmapDefinitionQFDTVHPHValue66 = chunk55IACEB6(
            mindmapDefinitionQFDTVHPHParam11,
            mindmapDefinitionQFDTVHPHValue65.config.securityLevel,
          );
        if (
          ((mindmapDefinitionQFDTVHPHValue65.type =
            mindmapDefinitionQFDTVHPHParam13.type),
          (mindmapDefinitionQFDTVHPHValue65.layoutAlgorithm = chunk336JU56OT(
            mindmapDefinitionQFDTVHPHValue65.config.layout,
            {
              fallback: "cose-bilkent",
            },
          )),
          (mindmapDefinitionQFDTVHPHValue65.diagramId =
            mindmapDefinitionQFDTVHPHParam11),
          !mindmapDefinitionQFDTVHPHValue64.getMindmap())
        )
          return;
        mindmapDefinitionQFDTVHPHValue65.nodes.forEach((item) => {
          item.shape === "rounded"
            ? ((item.radius = 15),
              (item.taper = 15),
              (item.stroke = "none"),
              (item.width = 0),
              (item.padding = 15))
            : item.shape === "circle"
              ? (item.padding = 10)
              : item.shape === "rect"
                ? ((item.width = 0), (item.padding = 10))
                : item.shape === "hexagon" &&
                  ((item.width = 0), (item.height = 0));
        });
        await chunk336JU56OR(
          mindmapDefinitionQFDTVHPHValue65,
          mindmapDefinitionQFDTVHPHValue66,
        );
        let { themeVariables } = _chunkICPOFSXXY(),
          {
            useGradient,
            gradientStart,
            gradientStop: mindmapDefinitionQFDTVHPHValue67,
          } = themeVariables;
        if (useGradient && gradientStart && mindmapDefinitionQFDTVHPHValue67) {
          let mindmapDefinitionQFDTVHPHValue98 =
              mindmapDefinitionQFDTVHPHValue66.attr("id"),
            mindmapDefinitionQFDTVHPHValue99 = mindmapDefinitionQFDTVHPHValue66
              .append("defs")
              .append("linearGradient")
              .attr("id", `${mindmapDefinitionQFDTVHPHValue98}-gradient`)
              .attr("gradientUnits", "objectBoundingBox")
              .attr("x1", "0%")
              .attr("y1", "0%")
              .attr("x2", "100%")
              .attr("y2", "0%");
          mindmapDefinitionQFDTVHPHValue99
            .append("stop")
            .attr("offset", "0%")
            .attr("stop-color", gradientStart)
            .attr("stop-opacity", 1);
          mindmapDefinitionQFDTVHPHValue99
            .append("stop")
            .attr("offset", "100%")
            .attr("stop-color", mindmapDefinitionQFDTVHPHValue67)
            .attr("stop-opacity", 1);
        }
        chunkEDXVE4YY(
          mindmapDefinitionQFDTVHPHValue66,
          mindmapDefinitionQFDTVHPHValue65.config.mindmap?.padding ??
            chunkICPOFSXXD.mindmap.padding,
          "mindmapDiagram",
          mindmapDefinitionQFDTVHPHValue65.config.mindmap?.useMaxWidth ??
            chunkICPOFSXXD.mindmap.useMaxWidth,
        );
      },
      "draw",
    ),
  },
  mindmapDefinitionQFDTVHPHValue7 = chunkAGHRB4JFN(
    (mindmapDefinitionQFDTVHPHParam6) => {
      let { theme, look } = mindmapDefinitionQFDTVHPHParam6,
        mindmapDefinitionQFDTVHPHValue55 = "";
      for (
        let mindmapDefinitionQFDTVHPHValue107 = 0;
        mindmapDefinitionQFDTVHPHValue107 <
        mindmapDefinitionQFDTVHPHParam6.THEME_COLOR_LIMIT;
        mindmapDefinitionQFDTVHPHValue107++
      ) {
        mindmapDefinitionQFDTVHPHParam6[
          "lineColor" + mindmapDefinitionQFDTVHPHValue107
        ] =
          mindmapDefinitionQFDTVHPHParam6[
            "lineColor" + mindmapDefinitionQFDTVHPHValue107
          ] ||
          mindmapDefinitionQFDTVHPHParam6[
            "cScaleInv" + mindmapDefinitionQFDTVHPHValue107
          ];
        invertO(
          mindmapDefinitionQFDTVHPHParam6[
            "lineColor" + mindmapDefinitionQFDTVHPHValue107
          ],
        )
          ? (mindmapDefinitionQFDTVHPHParam6[
              "lineColor" + mindmapDefinitionQFDTVHPHValue107
            ] = invertI(
              mindmapDefinitionQFDTVHPHParam6[
                "lineColor" + mindmapDefinitionQFDTVHPHValue107
              ],
              20,
            ))
          : (mindmapDefinitionQFDTVHPHParam6[
              "lineColor" + mindmapDefinitionQFDTVHPHValue107
            ] = invertR(
              mindmapDefinitionQFDTVHPHParam6[
                "lineColor" + mindmapDefinitionQFDTVHPHValue107
              ],
              20,
            ));
      }
      for (
        let mindmapDefinitionQFDTVHPHValue56 = 0;
        mindmapDefinitionQFDTVHPHValue56 <
        mindmapDefinitionQFDTVHPHParam6.THEME_COLOR_LIMIT;
        mindmapDefinitionQFDTVHPHValue56++
      ) {
        let mindmapDefinitionQFDTVHPHValue57 =
          "" +
          (look === "neo"
            ? Math.max(10 - (mindmapDefinitionQFDTVHPHValue56 - 1) * 2, 2)
            : 17 - 3 * mindmapDefinitionQFDTVHPHValue56);
        mindmapDefinitionQFDTVHPHValue55 += `
    .section-${mindmapDefinitionQFDTVHPHValue56 - 1} rect, .section-${mindmapDefinitionQFDTVHPHValue56 - 1} path, .section-${mindmapDefinitionQFDTVHPHValue56 - 1} circle, .section-${mindmapDefinitionQFDTVHPHValue56 - 1} polygon, .section-${mindmapDefinitionQFDTVHPHValue56 - 1} path  {
      fill: ${mindmapDefinitionQFDTVHPHParam6["cScale" + mindmapDefinitionQFDTVHPHValue56]};
    }
    .section-${mindmapDefinitionQFDTVHPHValue56 - 1} text {
     fill: ${mindmapDefinitionQFDTVHPHParam6["cScaleLabel" + mindmapDefinitionQFDTVHPHValue56]};
    }
     .section-${mindmapDefinitionQFDTVHPHValue56 - 1} span {
     color: ${mindmapDefinitionQFDTVHPHParam6["cScaleLabel" + mindmapDefinitionQFDTVHPHValue56]};
    }
    .node-icon-${mindmapDefinitionQFDTVHPHValue56 - 1} {
      font-size: 40px;
      color: ${mindmapDefinitionQFDTVHPHParam6["cScaleLabel" + mindmapDefinitionQFDTVHPHValue56]};
    }
    .section-edge-${mindmapDefinitionQFDTVHPHValue56 - 1}{
      stroke: ${mindmapDefinitionQFDTVHPHParam6["cScale" + mindmapDefinitionQFDTVHPHValue56]};
    }
    .edge-depth-${mindmapDefinitionQFDTVHPHValue56 - 1}{
      stroke-width: ${mindmapDefinitionQFDTVHPHValue57};
    }
    .section-${mindmapDefinitionQFDTVHPHValue56 - 1} line {
      stroke: ${mindmapDefinitionQFDTVHPHParam6["cScaleInv" + mindmapDefinitionQFDTVHPHValue56]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue56 - 1} rect, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue56 - 1} path, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue56 - 1} circle, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue56 - 1} polygon {
      fill: ${theme === "redux" || theme === "redux-dark" || theme === "neutral" ? mindmapDefinitionQFDTVHPHParam6.mainBkg : mindmapDefinitionQFDTVHPHParam6["cScale" + mindmapDefinitionQFDTVHPHValue56]};
      stroke: ${theme === "redux" || theme === "redux-dark" ? mindmapDefinitionQFDTVHPHParam6.nodeBorder : mindmapDefinitionQFDTVHPHParam6["cScale" + mindmapDefinitionQFDTVHPHValue56]};
      stroke-width: ${mindmapDefinitionQFDTVHPHParam6.strokeWidth ?? 2}px;
    }
    [data-look="neo"].section-edge-${mindmapDefinitionQFDTVHPHValue56 - 1}{
      stroke: ${theme?.includes("redux") || theme === "neo-dark" ? mindmapDefinitionQFDTVHPHParam6.nodeBorder : mindmapDefinitionQFDTVHPHParam6["cScale" + mindmapDefinitionQFDTVHPHValue56]};
    }
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue56 - 1} text {
     fill: ${theme === "redux" || theme === "redux-dark" ? mindmapDefinitionQFDTVHPHParam6.nodeBorder : mindmapDefinitionQFDTVHPHParam6["cScaleLabel" + (theme === "neutral" ? 1 : mindmapDefinitionQFDTVHPHValue56)]};
    }
    `;
      }
      return mindmapDefinitionQFDTVHPHValue55;
    },
    "genSections",
  ),
  mindmapDefinitionQFDTVHPHValue8 = chunkAGHRB4JFN(
    (
      mindmapDefinitionQFDTVHPHParam30,
      mindmapDefinitionQFDTVHPHParam31,
      mindmapDefinitionQFDTVHPHParam32,
    ) => {
      let mindmapDefinitionQFDTVHPHValue97 = "";
      for (
        let mindmapDefinitionQFDTVHPHValue100 = 0;
        mindmapDefinitionQFDTVHPHValue100 < mindmapDefinitionQFDTVHPHParam30;
        mindmapDefinitionQFDTVHPHValue100++
      )
        mindmapDefinitionQFDTVHPHValue97 += `
    [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue100 - 1} rect, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue100 - 1} path, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue100 - 1} circle, [data-look="neo"].mindmap-node.section-${mindmapDefinitionQFDTVHPHValue100 - 1} polygon {
      stroke: url(${mindmapDefinitionQFDTVHPHParam31}-gradient);
      fill: ${mindmapDefinitionQFDTVHPHParam32};
    }
    .section-${mindmapDefinitionQFDTVHPHValue100 - 1} line {
      stroke-width: 0;
    }`;
      return mindmapDefinitionQFDTVHPHValue97;
    },
    "genGradient",
  );
export const MindmapDefinitionQFDTVHPH = {
  get db() {
    return new mindmapDefinitionQFDTVHPHValue5();
  },
  renderer: mindmapDefinitionQFDTVHPHValue6,
  parser: mindmapDefinitionQFDTVHPHValue2,
  styles: chunkAGHRB4JFN((mindmapDefinitionQFDTVHPHParam7) => {
    let { theme } = mindmapDefinitionQFDTVHPHParam7,
      mindmapDefinitionQFDTVHPHValue58 = mindmapDefinitionQFDTVHPHParam7.svgId,
      mindmapDefinitionQFDTVHPHValue59 =
        mindmapDefinitionQFDTVHPHParam7.dropShadow
          ? mindmapDefinitionQFDTVHPHParam7.dropShadow.replace(
              "url(#drop-shadow)",
              `url(${mindmapDefinitionQFDTVHPHValue58}-drop-shadow)`,
            )
          : "none";
    return `
  .edge {
    stroke-width: 3;
  }
  ${mindmapDefinitionQFDTVHPHValue7(mindmapDefinitionQFDTVHPHParam7)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${mindmapDefinitionQFDTVHPHParam7.git0};
  }
  .section-root text {
    fill: ${mindmapDefinitionQFDTVHPHParam7.gitBranchLabel0};
  }
  .section-root span {
    color: ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHParam7.nodeBorder : mindmapDefinitionQFDTVHPHParam7.gitBranchLabel0};
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
  [data-look="neo"].mindmap-node  {
    filter: ${mindmapDefinitionQFDTVHPHValue59};
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHParam7.mainBkg : mindmapDefinitionQFDTVHPHParam7.git0};
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ${theme?.includes("redux") ? mindmapDefinitionQFDTVHPHParam7.nodeBorder : mindmapDefinitionQFDTVHPHParam7["cScaleLabel" + (theme === "neutral" ? 1 : 0)]};
  }
  ${mindmapDefinitionQFDTVHPHParam7.useGradient && mindmapDefinitionQFDTVHPHValue58 && mindmapDefinitionQFDTVHPHParam7.mainBkg ? mindmapDefinitionQFDTVHPHValue8(mindmapDefinitionQFDTVHPHParam7.THEME_COLOR_LIMIT, mindmapDefinitionQFDTVHPHValue58, mindmapDefinitionQFDTVHPHParam7.mainBkg) : ""}
`;
  }, "getStyles"),
};
