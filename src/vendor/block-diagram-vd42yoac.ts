// Restored from ref/webview/assets/blockDiagram-VD42YOAC-B8jfUIDl.js
// Flat boundary. Vendored blockDiagramVD42YOAC chunk restored from the Codex webview bundle.
import {
  chunkS3R3BYOJI as chunkS3R3BYOJC,
  chunkS3R3BYOJC as chunkS3R3BYOJH,
  chunkS3R3BYOJD,
} from "./chunk-s3r3byoj";
import { clone } from "./lodash-clone";
import { Graphlib } from "./graphlib";
import { Src } from "./roughjs-geometry";
import { line } from "./d3-shape-line";
import { stepH } from "./d3-shape-curves";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { invertS } from "./color-convert";
import { channel } from "./color-channel";
import {
  _chunkABZYJK2DK,
  _chunkABZYJK2DL,
  _chunkABZYJK2DN,
  chunkABZYJK2DW,
  chunkABZYJK2DV,
  _chunkABZYJK2DM,
  chunkABZYJK2DM,
  _chunkABZYJK2DY,
} from "./katex-auto-render";
import { chunkJA3XYJ7ZI, chunkJA3XYJ7ZA } from "./chunk-ja3xyj7z";
import { chunkFMBD7UC4 } from "../utils/chunk-fmbd7-uc4-dbbz-vn-va";
import { chunkHN2XXSSUT } from "./mermaid-relation-markers";
import { chunkCVBHYZKI } from "./mermaid-subgraph-title-margins";
var blockDiagramVD42YOACValue1 = (function () {
  var blockDiagramVD42YOACValue77 = chunkAGHRB4JFN(function (
      blockDiagramVD42YOACParam220,
      blockDiagramVD42YOACParam221,
      blockDiagramVD42YOACParam222,
      blockDiagramVD42YOACParam223,
    ) {
      for (
        blockDiagramVD42YOACParam222 ||= {},
          blockDiagramVD42YOACParam223 = blockDiagramVD42YOACParam220.length;
        blockDiagramVD42YOACParam223--;
        blockDiagramVD42YOACParam222[
          blockDiagramVD42YOACParam220[blockDiagramVD42YOACParam223]
        ] = blockDiagramVD42YOACParam221
      );
      return blockDiagramVD42YOACParam222;
    }, "o"),
    blockDiagramVD42YOACValue78 = [1, 15],
    blockDiagramVD42YOACValue79 = [1, 7],
    blockDiagramVD42YOACValue80 = [1, 13],
    blockDiagramVD42YOACValue81 = [1, 14],
    blockDiagramVD42YOACValue82 = [1, 19],
    blockDiagramVD42YOACValue83 = [1, 16],
    blockDiagramVD42YOACValue84 = [1, 17],
    blockDiagramVD42YOACValue85 = [1, 18],
    blockDiagramVD42YOACValue86 = [8, 30],
    blockDiagramVD42YOACValue87 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46],
    blockDiagramVD42YOACValue88 = [1, 23],
    blockDiagramVD42YOACValue89 = [1, 24],
    blockDiagramVD42YOACValue90 = [
      8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46,
    ],
    blockDiagramVD42YOACValue91 = [
      8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46,
    ],
    blockDiagramVD42YOACValue92 = [1, 49],
    blockDiagramVD42YOACValue93 = {
      trace: chunkAGHRB4JFN(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        spaceLines: 3,
        SPACELINE: 4,
        NL: 5,
        separator: 6,
        SPACE: 7,
        EOF: 8,
        start: 9,
        BLOCK_DIAGRAM_KEY: 10,
        document: 11,
        stop: 12,
        statement: 13,
        link: 14,
        LINK: 15,
        START_LINK: 16,
        LINK_LABEL: 17,
        STR: 18,
        nodeStatement: 19,
        columnsStatement: 20,
        SPACE_BLOCK: 21,
        blockStatement: 22,
        classDefStatement: 23,
        cssClassStatement: 24,
        styleStatement: 25,
        node: 26,
        SIZE: 27,
        COLUMNS: 28,
        "id-block": 29,
        end: 30,
        NODE_ID: 31,
        nodeShapeNLabel: 32,
        dirList: 33,
        DIR: 34,
        NODE_DSTART: 35,
        NODE_DEND: 36,
        BLOCK_ARROW_START: 37,
        BLOCK_ARROW_END: 38,
        classDef: 39,
        CLASSDEF_ID: 40,
        CLASSDEF_STYLEOPTS: 41,
        DEFAULT: 42,
        class: 43,
        CLASSENTITY_IDS: 44,
        STYLECLASS: 45,
        style: 46,
        STYLE_ENTITY_IDS: 47,
        STYLE_DEFINITION_DATA: 48,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        4: "SPACELINE",
        5: "NL",
        7: "SPACE",
        8: "EOF",
        10: "BLOCK_DIAGRAM_KEY",
        15: "LINK",
        16: "START_LINK",
        17: "LINK_LABEL",
        18: "STR",
        21: "SPACE_BLOCK",
        27: "SIZE",
        28: "COLUMNS",
        29: "id-block",
        30: "end",
        31: "NODE_ID",
        34: "DIR",
        35: "NODE_DSTART",
        36: "NODE_DEND",
        37: "BLOCK_ARROW_START",
        38: "BLOCK_ARROW_END",
        39: "classDef",
        40: "CLASSDEF_ID",
        41: "CLASSDEF_STYLEOPTS",
        42: "DEFAULT",
        43: "class",
        44: "CLASSENTITY_IDS",
        45: "STYLECLASS",
        46: "style",
        47: "STYLE_ENTITY_IDS",
        48: "STYLE_DEFINITION_DATA",
      },
      productions_: [
        0,
        [3, 1],
        [3, 2],
        [3, 2],
        [6, 1],
        [6, 1],
        [6, 1],
        [9, 3],
        [12, 1],
        [12, 1],
        [12, 2],
        [12, 2],
        [11, 1],
        [11, 2],
        [14, 1],
        [14, 4],
        [13, 1],
        [13, 1],
        [13, 1],
        [13, 1],
        [13, 1],
        [13, 1],
        [13, 1],
        [19, 3],
        [19, 2],
        [19, 1],
        [20, 1],
        [22, 4],
        [22, 3],
        [26, 1],
        [26, 2],
        [33, 1],
        [33, 2],
        [32, 3],
        [32, 4],
        [23, 3],
        [23, 3],
        [24, 3],
        [25, 3],
      ],
      performAction: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam5,
        blockDiagramVD42YOACParam6,
        blockDiagramVD42YOACParam7,
        blockDiagramVD42YOACParam8,
        blockDiagramVD42YOACParam9,
        blockDiagramVD42YOACParam10,
        blockDiagramVD42YOACParam11,
      ) {
        var blockDiagramVD42YOACValue94 =
          blockDiagramVD42YOACParam10.length - 1;
        switch (blockDiagramVD42YOACParam9) {
          case 4:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug("Rule: separator (NL) ");
            break;
          case 5:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug("Rule: separator (Space) ");
            break;
          case 6:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug("Rule: separator (EOF) ");
            break;
          case 7:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: hierarchy: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
              );
            blockDiagramVD42YOACParam8.setHierarchy(
              blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            );
            break;
          case 8:
            blockDiagramVD42YOACParam8.getLogger().debug("Stop NL ");
            break;
          case 9:
            blockDiagramVD42YOACParam8.getLogger().debug("Stop EOF ");
            break;
          case 10:
            blockDiagramVD42YOACParam8.getLogger().debug("Stop NL2 ");
            break;
          case 11:
            blockDiagramVD42YOACParam8.getLogger().debug("Stop EOF2 ");
            break;
          case 12:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: statement: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            typeof blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
              .length == "number"
              ? (this.$ =
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94])
              : (this.$ = [
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
                ]);
            break;
          case 13:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: statement #2: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
              );
            this.$ = [
              blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            ].concat(blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]);
            break;
          case 14:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: link: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
                blockDiagramVD42YOACParam5,
              );
            this.$ = {
              edgeTypeStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              label: "",
            };
            break;
          case 15:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: LABEL link: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 3],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              edgeTypeStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            };
            break;
          case 18:
            let blockDiagramVD42YOACValue95 = parseInt(
              blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
            );
            this.$ = {
              id: blockDiagramVD42YOACParam8.generateId(),
              type: "space",
              label: "",
              width: blockDiagramVD42YOACValue95,
              children: [],
            };
            break;
          case 23:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: (nodeStatement link node) ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
                " typestr: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                  .edgeTypeStr,
              );
            let blockDiagramVD42YOACValue96 =
              blockDiagramVD42YOACParam8.edgeStrToEdgeData(
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                  .edgeTypeStr,
              );
            this.$ = [
              {
                id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2]
                  .id,
                label:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2]
                    .label,
                type: blockDiagramVD42YOACParam10[
                  blockDiagramVD42YOACValue94 - 2
                ].type,
                directions:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2]
                    .directions,
              },
              {
                id:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2]
                    .id +
                  "-" +
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].id,
                start:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2]
                    .id,
                end: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                  .id,
                label:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                    .label,
                type: "edge",
                directions:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                    .directions,
                arrowTypeEnd: blockDiagramVD42YOACValue96,
                arrowTypeStart: "arrow_open",
              },
              {
                id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].id,
                label:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                    .label,
                type: blockDiagramVD42YOACParam8.typeStr2Type(
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                    .typeStr,
                ),
                directions:
                  blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                    .directions,
              },
            ];
            break;
          case 24:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: nodeStatement (abc88 node size) ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                .id,
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                  .label,
              type: blockDiagramVD42YOACParam8.typeStr2Type(
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                  .typeStr,
              ),
              directions:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1]
                  .directions,
              widthInColumns: parseInt(
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
                10,
              ),
            };
            break;
          case 25:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: nodeStatement (node) ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].id,
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].label,
              type: blockDiagramVD42YOACParam8.typeStr2Type(
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                  .typeStr,
              ),
              directions:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                  .directions,
              widthInColumns: 1,
            };
            break;
          case 26:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug("APA123", this ? this : "na");
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "COLUMNS: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              type: "column-setting",
              columns:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94] ===
                "auto"
                  ? -1
                  : parseInt(
                      blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
                    ),
            };
            break;
          case 27:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: id-block statement : ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
              );
            blockDiagramVD42YOACParam8.generateId();
            this.$ = {
              ...blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
              type: "composite",
              children:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            };
            break;
          case 28:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: blockStatement : ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              id: blockDiagramVD42YOACParam8.generateId(),
              type: "composite",
              label: "",
              children:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            };
            break;
          case 29:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: node (NODE_ID separator): ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
            };
            break;
          case 30:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: node (NODE_ID nodeShapeNLabel separator): ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              id: blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].label,
              typeStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                  .typeStr,
              directions:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]
                  .directions,
            };
            break;
          case 31:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: dirList: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = [blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]];
            break;
          case 32:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: dirList: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = [
              blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            ].concat(blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94]);
            break;
          case 33:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: nodeShapeNLabel: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              typeStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2] +
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            };
            break;
          case 34:
            blockDiagramVD42YOACParam8
              .getLogger()
              .debug(
                "Rule: BLOCK_ARROW nodeShapeNLabel: ",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 3],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
                " #3:",
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              );
            this.$ = {
              typeStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 3] +
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94],
              label:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 2],
              directions:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94 - 1],
            };
            break;
          case 35:
          case 36:
            this.$ = {
              type: "classDef",
              id: blockDiagramVD42YOACParam10[
                blockDiagramVD42YOACValue94 - 1
              ].trim(),
              css: blockDiagramVD42YOACParam10[
                blockDiagramVD42YOACValue94
              ].trim(),
            };
            break;
          case 37:
            this.$ = {
              type: "applyClass",
              id: blockDiagramVD42YOACParam10[
                blockDiagramVD42YOACValue94 - 1
              ].trim(),
              styleClass:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].trim(),
            };
            break;
          case 38:
            this.$ = {
              type: "applyStyles",
              id: blockDiagramVD42YOACParam10[
                blockDiagramVD42YOACValue94 - 1
              ].trim(),
              stylesStr:
                blockDiagramVD42YOACParam10[blockDiagramVD42YOACValue94].trim(),
            };
            break;
        }
      }, "anonymous"),
      table: [
        {
          9: 1,
          10: [1, 2],
        },
        {
          1: [3],
        },
        {
          10: blockDiagramVD42YOACValue78,
          11: 3,
          13: 4,
          19: 5,
          20: 6,
          21: blockDiagramVD42YOACValue79,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramVD42YOACValue80,
          29: blockDiagramVD42YOACValue81,
          31: blockDiagramVD42YOACValue82,
          39: blockDiagramVD42YOACValue83,
          43: blockDiagramVD42YOACValue84,
          46: blockDiagramVD42YOACValue85,
        },
        {
          8: [1, 20],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue86, [2, 12], {
          13: 4,
          19: 5,
          20: 6,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          11: 21,
          10: blockDiagramVD42YOACValue78,
          21: blockDiagramVD42YOACValue79,
          28: blockDiagramVD42YOACValue80,
          29: blockDiagramVD42YOACValue81,
          31: blockDiagramVD42YOACValue82,
          39: blockDiagramVD42YOACValue83,
          43: blockDiagramVD42YOACValue84,
          46: blockDiagramVD42YOACValue85,
        }),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 16], {
          14: 22,
          15: blockDiagramVD42YOACValue88,
          16: blockDiagramVD42YOACValue89,
        }),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 17]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 18]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 19]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 20]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 21]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 22]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue90, [2, 25], {
          27: [1, 25],
        }),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 26]),
        {
          19: 26,
          26: 12,
          31: blockDiagramVD42YOACValue82,
        },
        {
          10: blockDiagramVD42YOACValue78,
          11: 27,
          13: 4,
          19: 5,
          20: 6,
          21: blockDiagramVD42YOACValue79,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramVD42YOACValue80,
          29: blockDiagramVD42YOACValue81,
          31: blockDiagramVD42YOACValue82,
          39: blockDiagramVD42YOACValue83,
          43: blockDiagramVD42YOACValue84,
          46: blockDiagramVD42YOACValue85,
        },
        {
          40: [1, 28],
          42: [1, 29],
        },
        {
          44: [1, 30],
        },
        {
          47: [1, 31],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue91, [2, 29], {
          32: 32,
          35: [1, 33],
          37: [1, 34],
        }),
        {
          1: [2, 7],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue86, [2, 13]),
        {
          26: 35,
          31: blockDiagramVD42YOACValue82,
        },
        {
          31: [2, 14],
        },
        {
          17: [1, 36],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue90, [2, 24]),
        {
          10: blockDiagramVD42YOACValue78,
          11: 37,
          13: 4,
          14: 22,
          15: blockDiagramVD42YOACValue88,
          16: blockDiagramVD42YOACValue89,
          19: 5,
          20: 6,
          21: blockDiagramVD42YOACValue79,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramVD42YOACValue80,
          29: blockDiagramVD42YOACValue81,
          31: blockDiagramVD42YOACValue82,
          39: blockDiagramVD42YOACValue83,
          43: blockDiagramVD42YOACValue84,
          46: blockDiagramVD42YOACValue85,
        },
        {
          30: [1, 38],
        },
        {
          41: [1, 39],
        },
        {
          41: [1, 40],
        },
        {
          45: [1, 41],
        },
        {
          48: [1, 42],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue91, [2, 30]),
        {
          18: [1, 43],
        },
        {
          18: [1, 44],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue90, [2, 23]),
        {
          18: [1, 45],
        },
        {
          30: [1, 46],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 28]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 35]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 36]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 37]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 38]),
        {
          36: [1, 47],
        },
        {
          33: 48,
          34: blockDiagramVD42YOACValue92,
        },
        {
          15: [1, 50],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue87, [2, 27]),
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue91, [2, 33]),
        {
          38: [1, 51],
        },
        {
          33: 52,
          34: blockDiagramVD42YOACValue92,
          38: [2, 31],
        },
        {
          31: [2, 15],
        },
        blockDiagramVD42YOACValue77(blockDiagramVD42YOACValue91, [2, 34]),
        {
          38: [2, 32],
        },
      ],
      defaultActions: {
        20: [2, 7],
        23: [2, 14],
        50: [2, 15],
        52: [2, 32],
      },
      parseError: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam208,
        blockDiagramVD42YOACParam209,
      ) {
        if (blockDiagramVD42YOACParam209.recoverable)
          this.trace(blockDiagramVD42YOACParam208);
        else {
          var blockDiagramVD42YOACValue528 = Error(
            blockDiagramVD42YOACParam208,
          );
          throw (
            (blockDiagramVD42YOACValue528.hash = blockDiagramVD42YOACParam209),
            blockDiagramVD42YOACValue528
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam17) {
        var blockDiagramVD42YOACValue122 = this,
          blockDiagramVD42YOACValue123 = [0],
          blockDiagramVD42YOACValue124 = [],
          blockDiagramVD42YOACValue125 = [null],
          blockDiagramVD42YOACValue126 = [],
          blockDiagramVD42YOACValue127 = this.table,
          blockDiagramVD42YOACValue128 = "",
          blockDiagramVD42YOACValue129 = 0,
          blockDiagramVD42YOACValue130 = 0,
          blockDiagramVD42YOACValue131 = 0,
          blockDiagramVD42YOACValue134 =
            blockDiagramVD42YOACValue126.slice.call(arguments, 1),
          blockDiagramVD42YOACValue135 = Object.create(this.lexer),
          blockDiagramVD42YOACValue136 = {
            yy: {},
          };
        for (var blockDiagramVD42YOACValue137 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            blockDiagramVD42YOACValue137,
          ) &&
            (blockDiagramVD42YOACValue136.yy[blockDiagramVD42YOACValue137] =
              this.yy[blockDiagramVD42YOACValue137]);
        blockDiagramVD42YOACValue135.setInput(
          blockDiagramVD42YOACParam17,
          blockDiagramVD42YOACValue136.yy,
        );
        blockDiagramVD42YOACValue136.yy.lexer = blockDiagramVD42YOACValue135;
        blockDiagramVD42YOACValue136.yy.parser = this;
        blockDiagramVD42YOACValue135.yylloc === undefined &&
          (blockDiagramVD42YOACValue135.yylloc = {});
        var blockDiagramVD42YOACValue138 = blockDiagramVD42YOACValue135.yylloc;
        blockDiagramVD42YOACValue126.push(blockDiagramVD42YOACValue138);
        var blockDiagramVD42YOACValue139 =
          blockDiagramVD42YOACValue135.options &&
          blockDiagramVD42YOACValue135.options.ranges;
        typeof blockDiagramVD42YOACValue136.yy.parseError == "function"
          ? (this.parseError = blockDiagramVD42YOACValue136.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function blockDiagramVD42YOACHelper24(blockDiagramVD42YOACParam226) {
          blockDiagramVD42YOACValue123.length -=
            2 * blockDiagramVD42YOACParam226;
          blockDiagramVD42YOACValue125.length -= blockDiagramVD42YOACParam226;
          blockDiagramVD42YOACValue126.length -= blockDiagramVD42YOACParam226;
        }
        chunkAGHRB4JFN(blockDiagramVD42YOACHelper24, "popStack");
        function blockDiagramVD42YOACHelper25() {
          var blockDiagramVD42YOACValue478 =
            blockDiagramVD42YOACValue124.pop() ||
            blockDiagramVD42YOACValue135.lex() ||
            1;
          return (
            typeof blockDiagramVD42YOACValue478 != "number" &&
              (blockDiagramVD42YOACValue478 instanceof Array &&
                ((blockDiagramVD42YOACValue124 = blockDiagramVD42YOACValue478),
                (blockDiagramVD42YOACValue478 =
                  blockDiagramVD42YOACValue124.pop())),
              (blockDiagramVD42YOACValue478 =
                blockDiagramVD42YOACValue122.symbols_[
                  blockDiagramVD42YOACValue478
                ] || blockDiagramVD42YOACValue478)),
            blockDiagramVD42YOACValue478
          );
        }
        chunkAGHRB4JFN(blockDiagramVD42YOACHelper25, "lex");
        for (
          var blockDiagramVD42YOACValue140,
            blockDiagramVD42YOACValue141,
            blockDiagramVD42YOACValue142,
            blockDiagramVD42YOACValue143,
            blockDiagramVD42YOACValue144,
            blockDiagramVD42YOACValue145 = {},
            blockDiagramVD42YOACValue146,
            blockDiagramVD42YOACValue147,
            blockDiagramVD42YOACValue148,
            blockDiagramVD42YOACValue149;
          ;

        ) {
          if (
            ((blockDiagramVD42YOACValue142 =
              blockDiagramVD42YOACValue123[
                blockDiagramVD42YOACValue123.length - 1
              ]),
            this.defaultActions[blockDiagramVD42YOACValue142]
              ? (blockDiagramVD42YOACValue143 =
                  this.defaultActions[blockDiagramVD42YOACValue142])
              : ((blockDiagramVD42YOACValue140 ??=
                  blockDiagramVD42YOACHelper25()),
                (blockDiagramVD42YOACValue143 =
                  blockDiagramVD42YOACValue127[blockDiagramVD42YOACValue142] &&
                  blockDiagramVD42YOACValue127[blockDiagramVD42YOACValue142][
                    blockDiagramVD42YOACValue140
                  ])),
            blockDiagramVD42YOACValue143 === undefined ||
              !blockDiagramVD42YOACValue143.length ||
              !blockDiagramVD42YOACValue143[0])
          ) {
            var blockDiagramVD42YOACValue150 = "";
            for (blockDiagramVD42YOACValue146 in ((blockDiagramVD42YOACValue149 =
              []),
            blockDiagramVD42YOACValue127[blockDiagramVD42YOACValue142]))
              this.terminals_[blockDiagramVD42YOACValue146] &&
                blockDiagramVD42YOACValue146 > 2 &&
                blockDiagramVD42YOACValue149.push(
                  "'" + this.terminals_[blockDiagramVD42YOACValue146] + "'",
                );
            blockDiagramVD42YOACValue150 =
              blockDiagramVD42YOACValue135.showPosition
                ? "Parse error on line " +
                  (blockDiagramVD42YOACValue129 + 1) +
                  ":\n" +
                  blockDiagramVD42YOACValue135.showPosition() +
                  "\nExpecting " +
                  blockDiagramVD42YOACValue149.join(", ") +
                  ", got '" +
                  (this.terminals_[blockDiagramVD42YOACValue140] ||
                    blockDiagramVD42YOACValue140) +
                  "'"
                : "Parse error on line " +
                  (blockDiagramVD42YOACValue129 + 1) +
                  ": Unexpected " +
                  (blockDiagramVD42YOACValue140 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[blockDiagramVD42YOACValue140] ||
                        blockDiagramVD42YOACValue140) +
                      "'");
            this.parseError(blockDiagramVD42YOACValue150, {
              text: blockDiagramVD42YOACValue135.match,
              token:
                this.terminals_[blockDiagramVD42YOACValue140] ||
                blockDiagramVD42YOACValue140,
              line: blockDiagramVD42YOACValue135.yylineno,
              loc: blockDiagramVD42YOACValue138,
              expected: blockDiagramVD42YOACValue149,
            });
          }
          if (
            blockDiagramVD42YOACValue143[0] instanceof Array &&
            blockDiagramVD42YOACValue143.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                blockDiagramVD42YOACValue142 +
                ", token: " +
                blockDiagramVD42YOACValue140,
            );
          switch (blockDiagramVD42YOACValue143[0]) {
            case 1:
              blockDiagramVD42YOACValue123.push(blockDiagramVD42YOACValue140);
              blockDiagramVD42YOACValue125.push(
                blockDiagramVD42YOACValue135.yytext,
              );
              blockDiagramVD42YOACValue126.push(
                blockDiagramVD42YOACValue135.yylloc,
              );
              blockDiagramVD42YOACValue123.push(
                blockDiagramVD42YOACValue143[1],
              );
              blockDiagramVD42YOACValue140 = null;
              blockDiagramVD42YOACValue141
                ? ((blockDiagramVD42YOACValue140 =
                    blockDiagramVD42YOACValue141),
                  (blockDiagramVD42YOACValue141 = null))
                : ((blockDiagramVD42YOACValue130 =
                    blockDiagramVD42YOACValue135.yyleng),
                  (blockDiagramVD42YOACValue128 =
                    blockDiagramVD42YOACValue135.yytext),
                  (blockDiagramVD42YOACValue129 =
                    blockDiagramVD42YOACValue135.yylineno),
                  (blockDiagramVD42YOACValue138 =
                    blockDiagramVD42YOACValue135.yylloc),
                  blockDiagramVD42YOACValue131 > 0 &&
                    blockDiagramVD42YOACValue131--);
              break;
            case 2:
              if (
                ((blockDiagramVD42YOACValue147 =
                  this.productions_[blockDiagramVD42YOACValue143[1]][1]),
                (blockDiagramVD42YOACValue145.$ =
                  blockDiagramVD42YOACValue125[
                    blockDiagramVD42YOACValue125.length -
                      blockDiagramVD42YOACValue147
                  ]),
                (blockDiagramVD42YOACValue145._$ = {
                  first_line:
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length -
                        (blockDiagramVD42YOACValue147 || 1)
                    ].first_line,
                  last_line:
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length - 1
                    ].last_line,
                  first_column:
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length -
                        (blockDiagramVD42YOACValue147 || 1)
                    ].first_column,
                  last_column:
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length - 1
                    ].last_column,
                }),
                blockDiagramVD42YOACValue139 &&
                  (blockDiagramVD42YOACValue145._$.range = [
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length -
                        (blockDiagramVD42YOACValue147 || 1)
                    ].range[0],
                    blockDiagramVD42YOACValue126[
                      blockDiagramVD42YOACValue126.length - 1
                    ].range[1],
                  ]),
                (blockDiagramVD42YOACValue144 = this.performAction.apply(
                  blockDiagramVD42YOACValue145,
                  [
                    blockDiagramVD42YOACValue128,
                    blockDiagramVD42YOACValue130,
                    blockDiagramVD42YOACValue129,
                    blockDiagramVD42YOACValue136.yy,
                    blockDiagramVD42YOACValue143[1],
                    blockDiagramVD42YOACValue125,
                    blockDiagramVD42YOACValue126,
                  ].concat(blockDiagramVD42YOACValue134),
                )),
                blockDiagramVD42YOACValue144 !== undefined)
              )
                return blockDiagramVD42YOACValue144;
              blockDiagramVD42YOACValue147 &&
                ((blockDiagramVD42YOACValue123 =
                  blockDiagramVD42YOACValue123.slice(
                    0,
                    -1 * blockDiagramVD42YOACValue147 * 2,
                  )),
                (blockDiagramVD42YOACValue125 =
                  blockDiagramVD42YOACValue125.slice(
                    0,
                    -1 * blockDiagramVD42YOACValue147,
                  )),
                (blockDiagramVD42YOACValue126 =
                  blockDiagramVD42YOACValue126.slice(
                    0,
                    -1 * blockDiagramVD42YOACValue147,
                  )));
              blockDiagramVD42YOACValue123.push(
                this.productions_[blockDiagramVD42YOACValue143[1]][0],
              );
              blockDiagramVD42YOACValue125.push(blockDiagramVD42YOACValue145.$);
              blockDiagramVD42YOACValue126.push(
                blockDiagramVD42YOACValue145._$,
              );
              blockDiagramVD42YOACValue148 =
                blockDiagramVD42YOACValue127[
                  blockDiagramVD42YOACValue123[
                    blockDiagramVD42YOACValue123.length - 2
                  ]
                ][
                  blockDiagramVD42YOACValue123[
                    blockDiagramVD42YOACValue123.length - 1
                  ]
                ];
              blockDiagramVD42YOACValue123.push(blockDiagramVD42YOACValue148);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  blockDiagramVD42YOACValue93.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam218,
        blockDiagramVD42YOACParam219,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            blockDiagramVD42YOACParam218,
            blockDiagramVD42YOACParam219,
          );
        else throw Error(blockDiagramVD42YOACParam218);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam126,
        blockDiagramVD42YOACParam127,
      ) {
        return (
          (this.yy = blockDiagramVD42YOACParam127 || this.yy || {}),
          (this._input = blockDiagramVD42YOACParam126),
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
        var blockDiagramVD42YOACValue398 = this._input[0];
        return (
          (this.yytext += blockDiagramVD42YOACValue398),
          this.yyleng++,
          this.offset++,
          (this.match += blockDiagramVD42YOACValue398),
          (this.matched += blockDiagramVD42YOACValue398),
          blockDiagramVD42YOACValue398.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          blockDiagramVD42YOACValue398
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam72) {
        var blockDiagramVD42YOACValue256 = blockDiagramVD42YOACParam72.length,
          blockDiagramVD42YOACValue257 =
            blockDiagramVD42YOACParam72.split(/(?:\r\n?|\n)/g);
        this._input = blockDiagramVD42YOACParam72 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - blockDiagramVD42YOACValue256,
        );
        this.offset -= blockDiagramVD42YOACValue256;
        var blockDiagramVD42YOACValue258 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        blockDiagramVD42YOACValue257.length - 1 &&
          (this.yylineno -= blockDiagramVD42YOACValue257.length - 1);
        var blockDiagramVD42YOACValue259 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: blockDiagramVD42YOACValue257
              ? (blockDiagramVD42YOACValue257.length ===
                blockDiagramVD42YOACValue258.length
                  ? this.yylloc.first_column
                  : 0) +
                blockDiagramVD42YOACValue258[
                  blockDiagramVD42YOACValue258.length -
                    blockDiagramVD42YOACValue257.length
                ].length -
                blockDiagramVD42YOACValue257[0].length
              : this.yylloc.first_column - blockDiagramVD42YOACValue256,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              blockDiagramVD42YOACValue259[0],
              blockDiagramVD42YOACValue259[0] +
                this.yyleng -
                blockDiagramVD42YOACValue256,
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
      less: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam239) {
        this.unput(this.match.slice(blockDiagramVD42YOACParam239));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var blockDiagramVD42YOACValue502 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (blockDiagramVD42YOACValue502.length > 20 ? "..." : "") +
          blockDiagramVD42YOACValue502.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var blockDiagramVD42YOACValue482 = this.match;
        return (
          blockDiagramVD42YOACValue482.length < 20 &&
            (blockDiagramVD42YOACValue482 += this._input.substr(
              0,
              20 - blockDiagramVD42YOACValue482.length,
            )),
          (
            blockDiagramVD42YOACValue482.substr(0, 20) +
            (blockDiagramVD42YOACValue482.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var blockDiagramVD42YOACValue486 = this.pastInput(),
          blockDiagramVD42YOACValue487 = Array(
            blockDiagramVD42YOACValue486.length + 1,
          ).join("-");
        return (
          blockDiagramVD42YOACValue486 +
          this.upcomingInput() +
          "\n" +
          blockDiagramVD42YOACValue487 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam30,
        blockDiagramVD42YOACParam31,
      ) {
        var blockDiagramVD42YOACValue190,
          blockDiagramVD42YOACValue191,
          blockDiagramVD42YOACValue192;
        if (
          (this.options.backtrack_lexer &&
            ((blockDiagramVD42YOACValue192 = {
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
              (blockDiagramVD42YOACValue192.yylloc.range =
                this.yylloc.range.slice(0))),
          (blockDiagramVD42YOACValue191 =
            blockDiagramVD42YOACParam30[0].match(/(?:\r\n?|\n).*/g)),
          blockDiagramVD42YOACValue191 &&
            (this.yylineno += blockDiagramVD42YOACValue191.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: blockDiagramVD42YOACValue191
              ? blockDiagramVD42YOACValue191[
                  blockDiagramVD42YOACValue191.length - 1
                ].length -
                blockDiagramVD42YOACValue191[
                  blockDiagramVD42YOACValue191.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + blockDiagramVD42YOACParam30[0].length,
          }),
          (this.yytext += blockDiagramVD42YOACParam30[0]),
          (this.match += blockDiagramVD42YOACParam30[0]),
          (this.matches = blockDiagramVD42YOACParam30),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            blockDiagramVD42YOACParam30[0].length,
          )),
          (this.matched += blockDiagramVD42YOACParam30[0]),
          (blockDiagramVD42YOACValue190 = this.performAction.call(
            this,
            this.yy,
            this,
            blockDiagramVD42YOACParam31,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          blockDiagramVD42YOACValue190)
        )
          return blockDiagramVD42YOACValue190;
        if (this._backtrack) {
          for (var blockDiagramVD42YOACValue193 in blockDiagramVD42YOACValue192)
            this[blockDiagramVD42YOACValue193] =
              blockDiagramVD42YOACValue192[blockDiagramVD42YOACValue193];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var blockDiagramVD42YOACValue250,
          blockDiagramVD42YOACValue251,
          blockDiagramVD42YOACValue252,
          blockDiagramVD42YOACValue253;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var blockDiagramVD42YOACValue254 = this._currentRules(),
            blockDiagramVD42YOACValue255 = 0;
          blockDiagramVD42YOACValue255 < blockDiagramVD42YOACValue254.length;
          blockDiagramVD42YOACValue255++
        )
          if (
            ((blockDiagramVD42YOACValue252 = this._input.match(
              this.rules[
                blockDiagramVD42YOACValue254[blockDiagramVD42YOACValue255]
              ],
            )),
            blockDiagramVD42YOACValue252 &&
              (!blockDiagramVD42YOACValue251 ||
                blockDiagramVD42YOACValue252[0].length >
                  blockDiagramVD42YOACValue251[0].length))
          ) {
            if (
              ((blockDiagramVD42YOACValue251 = blockDiagramVD42YOACValue252),
              (blockDiagramVD42YOACValue253 = blockDiagramVD42YOACValue255),
              this.options.backtrack_lexer)
            ) {
              if (
                ((blockDiagramVD42YOACValue250 = this.test_match(
                  blockDiagramVD42YOACValue252,
                  blockDiagramVD42YOACValue254[blockDiagramVD42YOACValue255],
                )),
                blockDiagramVD42YOACValue250 !== false)
              )
                return blockDiagramVD42YOACValue250;
              if (this._backtrack) {
                blockDiagramVD42YOACValue251 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return blockDiagramVD42YOACValue251
          ? ((blockDiagramVD42YOACValue250 = this.test_match(
              blockDiagramVD42YOACValue251,
              blockDiagramVD42YOACValue254[blockDiagramVD42YOACValue253],
            )),
            blockDiagramVD42YOACValue250 === false
              ? false
              : blockDiagramVD42YOACValue250)
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
      begin: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam241) {
        this.conditionStack.push(blockDiagramVD42YOACParam241);
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
      topState: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam198) {
        return (
          (blockDiagramVD42YOACParam198 =
            this.conditionStack.length -
            1 -
            Math.abs(blockDiagramVD42YOACParam198 || 0)),
          blockDiagramVD42YOACParam198 >= 0
            ? this.conditionStack[blockDiagramVD42YOACParam198]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (blockDiagramVD42YOACParam276) {
        this.begin(blockDiagramVD42YOACParam276);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: chunkAGHRB4JFN(function (
        blockDiagramVD42YOACParam1,
        blockDiagramVD42YOACParam2,
        blockDiagramVD42YOACParam3,
        blockDiagramVD42YOACParam4,
      ) {
        switch (blockDiagramVD42YOACParam3) {
          case 0:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Found block-beta"),
              10
            );
          case 1:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Found id-block"),
              29
            );
          case 2:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Found block"),
              10
            );
          case 3:
            blockDiagramVD42YOACParam1
              .getLogger()
              .debug(".", blockDiagramVD42YOACParam2.yytext);
            break;
          case 4:
            blockDiagramVD42YOACParam1
              .getLogger()
              .debug("_", blockDiagramVD42YOACParam2.yytext);
            break;
          case 5:
            return 5;
          case 6:
            return ((blockDiagramVD42YOACParam2.yytext = -1), 28);
          case 7:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/columns\s+/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("COLUMNS (LEX)", blockDiagramVD42YOACParam2.yytext),
              28
            );
          case 8:
            this.pushState("md_string");
            break;
          case 9:
            return "MD_STR";
          case 10:
            this.popState();
            break;
          case 11:
            this.pushState("string");
            break;
          case 12:
            blockDiagramVD42YOACParam1
              .getLogger()
              .debug("LEX: POPPING STR:", blockDiagramVD42YOACParam2.yytext);
            this.popState();
            break;
          case 13:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("LEX: STR end:", blockDiagramVD42YOACParam2.yytext),
              "STR"
            );
          case 14:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/space\:/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("SPACE NUM (LEX)", blockDiagramVD42YOACParam2.yytext),
              21
            );
          case 15:
            return (
              (blockDiagramVD42YOACParam2.yytext = "1"),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("COLUMNS (LEX)", blockDiagramVD42YOACParam2.yytext),
              21
            );
          case 16:
            return 42;
          case 17:
            return "LINKSTYLE";
          case 18:
            return "INTERPOLATE";
          case 19:
            return (this.pushState("CLASSDEF"), 39);
          case 20:
            return (
              this.popState(),
              this.pushState("CLASSDEFID"),
              "DEFAULT_CLASSDEF_ID"
            );
          case 21:
            return (this.popState(), this.pushState("CLASSDEFID"), 40);
          case 22:
            return (this.popState(), 41);
          case 23:
            return (this.pushState("CLASS"), 43);
          case 24:
            return (this.popState(), this.pushState("CLASS_STYLE"), 44);
          case 25:
            return (this.popState(), 45);
          case 26:
            return (this.pushState("STYLE_STMNT"), 46);
          case 27:
            return (this.popState(), this.pushState("STYLE_DEFINITION"), 47);
          case 28:
            return (this.popState(), 48);
          case 29:
            return (this.pushState("acc_title"), "acc_title");
          case 30:
            return (this.popState(), "acc_title_value");
          case 31:
            return (this.pushState("acc_descr"), "acc_descr");
          case 32:
            return (this.popState(), "acc_descr_value");
          case 33:
            this.pushState("acc_descr_multiline");
            break;
          case 34:
            this.popState();
            break;
          case 35:
            return "acc_descr_multiline_value";
          case 36:
            return 30;
          case 37:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 38:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 39:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ))"),
              "NODE_DEND"
            );
          case 40:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 41:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 42:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (-"),
              "NODE_DEND"
            );
          case 43:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: -)"),
              "NODE_DEND"
            );
          case 44:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 45:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ]]"),
              "NODE_DEND"
            );
          case 46:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ("),
              "NODE_DEND"
            );
          case 47:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ])"),
              "NODE_DEND"
            );
          case 48:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: /]"),
              "NODE_DEND"
            );
          case 49:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: /]"),
              "NODE_DEND"
            );
          case 50:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: )]"),
              "NODE_DEND"
            );
          case 51:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: )"),
              "NODE_DEND"
            );
          case 52:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ]>"),
              "NODE_DEND"
            );
          case 53:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ]"),
              "NODE_DEND"
            );
          case 54:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: -)"),
              this.pushState("NODE"),
              35
            );
          case 55:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: (-"),
              this.pushState("NODE"),
              35
            );
          case 56:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: ))"),
              this.pushState("NODE"),
              35
            );
          case 57:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 58:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lex: ((("),
              this.pushState("NODE"),
              35
            );
          case 59:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 60:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 61:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 62:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexc: >"),
              this.pushState("NODE"),
              35
            );
          case 63:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: (["),
              this.pushState("NODE"),
              35
            );
          case 64:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 65:
            return (this.pushState("NODE"), 35);
          case 66:
            return (this.pushState("NODE"), 35);
          case 67:
            return (this.pushState("NODE"), 35);
          case 68:
            return (this.pushState("NODE"), 35);
          case 69:
            return (this.pushState("NODE"), 35);
          case 70:
            return (this.pushState("NODE"), 35);
          case 71:
            return (this.pushState("NODE"), 35);
          case 72:
            return (
              blockDiagramVD42YOACParam1.getLogger().debug("Lexa: ["),
              this.pushState("NODE"),
              35
            );
          case 73:
            return (
              this.pushState("BLOCK_ARROW"),
              blockDiagramVD42YOACParam1.getLogger().debug("LEX ARR START"),
              37
            );
          case 74:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: NODE_ID", blockDiagramVD42YOACParam2.yytext),
              31
            );
          case 75:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: EOF", blockDiagramVD42YOACParam2.yytext),
              8
            );
          case 76:
            this.pushState("md_string");
            break;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            return "NODE_DESCR";
          case 79:
            this.popState();
            break;
          case 80:
            blockDiagramVD42YOACParam1
              .getLogger()
              .debug("Lex: Starting string");
            this.pushState("string");
            break;
          case 81:
            blockDiagramVD42YOACParam1
              .getLogger()
              .debug("LEX ARR: Starting string");
            this.pushState("string");
            break;
          case 82:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("LEX: NODE_DESCR:", blockDiagramVD42YOACParam2.yytext),
              "NODE_DESCR"
            );
          case 83:
            blockDiagramVD42YOACParam1.getLogger().debug("LEX POPPING");
            this.popState();
            break;
          case 84:
            blockDiagramVD42YOACParam1.getLogger().debug("Lex: =>BAE");
            this.pushState("ARROW_DIR");
            break;
          case 85:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (right): dir:", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 86:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (left):", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 87:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (x):", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 88:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (y):", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 89:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (up):", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 90:
            return (
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex (down):", blockDiagramVD42YOACParam2.yytext),
              "DIR"
            );
          case 91:
            return (
              (blockDiagramVD42YOACParam2.yytext = "]>"),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug(
                  "Lex (ARROW_DIR end):",
                  blockDiagramVD42YOACParam2.yytext,
                ),
              this.popState(),
              this.popState(),
              "BLOCK_ARROW_END"
            );
          case 92:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug(
                  "Lex: LINK",
                  "#" + blockDiagramVD42YOACParam2.yytext + "#",
                ),
              15
            );
          case 93:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramVD42YOACParam2.yytext),
              15
            );
          case 94:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramVD42YOACParam2.yytext),
              15
            );
          case 95:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramVD42YOACParam2.yytext),
              15
            );
          case 96:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramVD42YOACParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 97:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramVD42YOACParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 98:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramVD42YOACParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 99:
            this.pushState("md_string");
            break;
          case 100:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: Starting string"),
              this.pushState("string"),
              "LINK_LABEL"
            );
          case 101:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug(
                  "Lex: LINK",
                  "#" + blockDiagramVD42YOACParam2.yytext + "#",
                ),
              15
            );
          case 102:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramVD42YOACParam2.yytext),
              15
            );
          case 103:
            return (
              this.popState(),
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramVD42YOACParam2.yytext),
              15
            );
          case 104:
            return (
              blockDiagramVD42YOACParam1
                .getLogger()
                .debug("Lex: COLON", blockDiagramVD42YOACParam2.yytext),
              (blockDiagramVD42YOACParam2.yytext =
                blockDiagramVD42YOACParam2.yytext.slice(1)),
              27
            );
        }
      }, "anonymous"),
      rules: [
        /^(?:block-beta\b)/,
        /^(?:block:)/,
        /^(?:block\b)/,
        /^(?:[\s]+)/,
        /^(?:[\n]+)/,
        /^(?:((\u000D\u000A)|(\u000A)))/,
        /^(?:columns\s+auto\b)/,
        /^(?:columns\s+[\d]+)/,
        /^(?:["][`])/,
        /^(?:[^`"]+)/,
        /^(?:[`]["])/,
        /^(?:["])/,
        /^(?:["])/,
        /^(?:[^"]*)/,
        /^(?:space[:]\d+)/,
        /^(?:space\b)/,
        /^(?:default\b)/,
        /^(?:linkStyle\b)/,
        /^(?:interpolate\b)/,
        /^(?:classDef\s+)/,
        /^(?:DEFAULT\s+)/,
        /^(?:\w+\s+)/,
        /^(?:[^\n]*)/,
        /^(?:class\s+)/,
        /^(?:(\w+)+((,\s*\w+)*))/,
        /^(?:[^\n]*)/,
        /^(?:style\s+)/,
        /^(?:(\w+)+((,\s*\w+)*))/,
        /^(?:[^\n]*)/,
        /^(?:accTitle\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*:\s*)/,
        /^(?:(?!\n||)*[^\n]*)/,
        /^(?:accDescr\s*\{\s*)/,
        /^(?:[\}])/,
        /^(?:[^\}]*)/,
        /^(?:end\b\s*)/,
        /^(?:\(\(\()/,
        /^(?:\)\)\))/,
        /^(?:[\)]\))/,
        /^(?:\}\})/,
        /^(?:\})/,
        /^(?:\(-)/,
        /^(?:-\))/,
        /^(?:\(\()/,
        /^(?:\]\])/,
        /^(?:\()/,
        /^(?:\]\))/,
        /^(?:\\\])/,
        /^(?:\/\])/,
        /^(?:\)\])/,
        /^(?:[\)])/,
        /^(?:\]>)/,
        /^(?:[\]])/,
        /^(?:-\))/,
        /^(?:\(-)/,
        /^(?:\)\))/,
        /^(?:\))/,
        /^(?:\(\(\()/,
        /^(?:\(\()/,
        /^(?:\{\{)/,
        /^(?:\{)/,
        /^(?:>)/,
        /^(?:\(\[)/,
        /^(?:\()/,
        /^(?:\[\[)/,
        /^(?:\[\|)/,
        /^(?:\[\()/,
        /^(?:\)\)\))/,
        /^(?:\[\\)/,
        /^(?:\[\/)/,
        /^(?:\[\\)/,
        /^(?:\[)/,
        /^(?:<\[)/,
        /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
        /^(?:$)/,
        /^(?:["][`])/,
        /^(?:["][`])/,
        /^(?:[^`"]+)/,
        /^(?:[`]["])/,
        /^(?:["])/,
        /^(?:["])/,
        /^(?:[^"]+)/,
        /^(?:["])/,
        /^(?:\]>\s*\()/,
        /^(?:,?\s*right\s*)/,
        /^(?:,?\s*left\s*)/,
        /^(?:,?\s*x\s*)/,
        /^(?:,?\s*y\s*)/,
        /^(?:,?\s*up\s*)/,
        /^(?:,?\s*down\s*)/,
        /^(?:\)\s*)/,
        /^(?:\s*[xo<]?--+[-xo>]\s*)/,
        /^(?:\s*[xo<]?==+[=xo>]\s*)/,
        /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
        /^(?:\s*~~[\~]+\s*)/,
        /^(?:\s*[xo<]?--\s*)/,
        /^(?:\s*[xo<]?==\s*)/,
        /^(?:\s*[xo<]?-\.\s*)/,
        /^(?:["][`])/,
        /^(?:["])/,
        /^(?:\s*[xo<]?--+[-xo>]\s*)/,
        /^(?:\s*[xo<]?==+[=xo>]\s*)/,
        /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
        /^(?::\d+)/,
      ],
      conditions: {
        STYLE_DEFINITION: {
          rules: [28],
          inclusive: false,
        },
        STYLE_STMNT: {
          rules: [27],
          inclusive: false,
        },
        CLASSDEFID: {
          rules: [22],
          inclusive: false,
        },
        CLASSDEF: {
          rules: [20, 21],
          inclusive: false,
        },
        CLASS_STYLE: {
          rules: [25],
          inclusive: false,
        },
        CLASS: {
          rules: [24],
          inclusive: false,
        },
        LLABEL: {
          rules: [99, 100, 101, 102, 103],
          inclusive: false,
        },
        ARROW_DIR: {
          rules: [85, 86, 87, 88, 89, 90, 91],
          inclusive: false,
        },
        BLOCK_ARROW: {
          rules: [76, 81, 84],
          inclusive: false,
        },
        NODE: {
          rules: [
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            77, 80,
          ],
          inclusive: false,
        },
        md_string: {
          rules: [9, 10, 78, 79],
          inclusive: false,
        },
        space: {
          rules: [],
          inclusive: false,
        },
        string: {
          rules: [12, 13, 82, 83],
          inclusive: false,
        },
        acc_descr_multiline: {
          rules: [34, 35],
          inclusive: false,
        },
        acc_descr: {
          rules: [32],
          inclusive: false,
        },
        acc_title: {
          rules: [30],
          inclusive: false,
        },
        INITIAL: {
          rules: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29,
            31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
            68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104,
          ],
          inclusive: true,
        },
      },
    };
  })();
  function blockDiagramVD42YOACHelper23() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(blockDiagramVD42YOACHelper23, "Parser"),
    (blockDiagramVD42YOACHelper23.prototype = blockDiagramVD42YOACValue93),
    (blockDiagramVD42YOACValue93.Parser = blockDiagramVD42YOACHelper23),
    new blockDiagramVD42YOACHelper23()
  );
})();
blockDiagramVD42YOACValue1.parser = blockDiagramVD42YOACValue1;
var blockDiagramVD42YOACValue2 = blockDiagramVD42YOACValue1,
  blockDiagramVD42YOACValue3 = new Map(),
  blockDiagramVD42YOACValue4 = [],
  blockDiagramVD42YOACValue5 = new Map(),
  blockDiagramVD42YOACValue10 = _chunkABZYJK2DL(),
  blockDiagramVD42YOACValue11 = new Map(),
  blockDiagramVD42YOACValue12 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam282) =>
      chunkABZYJK2DM.sanitizeText(
        blockDiagramVD42YOACParam282,
        blockDiagramVD42YOACValue10,
      ),
    "sanitizeText",
  ),
  blockDiagramVD42YOACValue13 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACParam166,
    blockDiagramVD42YOACParam167 = "",
  ) {
    let blockDiagramVD42YOACValue440 = blockDiagramVD42YOACValue11.get(
      blockDiagramVD42YOACParam166,
    );
    blockDiagramVD42YOACValue440 ||
      ((blockDiagramVD42YOACValue440 = {
        id: blockDiagramVD42YOACParam166,
        styles: [],
        textStyles: [],
      }),
      blockDiagramVD42YOACValue11.set(
        blockDiagramVD42YOACParam166,
        blockDiagramVD42YOACValue440,
      ));
    blockDiagramVD42YOACParam167
      ?.split(",")
      .forEach((blockDiagramVD42YOACParam194) => {
        let blockDiagramVD42YOACValue488 = blockDiagramVD42YOACParam194
          .replace(/([^;]*);/, "$1")
          .trim();
        if (RegExp("color").exec(blockDiagramVD42YOACParam194)) {
          let blockDiagramVD42YOACValue534 = blockDiagramVD42YOACValue488
            .replace("fill", "bgFill")
            .replace("color", "fill");
          blockDiagramVD42YOACValue440.textStyles.push(
            blockDiagramVD42YOACValue534,
          );
        }
        blockDiagramVD42YOACValue440.styles.push(blockDiagramVD42YOACValue488);
      });
  }, "addStyleClass"),
  blockDiagramVD42YOACValue14 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACParam227,
    blockDiagramVD42YOACParam228 = "",
  ) {
    let blockDiagramVD42YOACValue535 = blockDiagramVD42YOACValue3.get(
      blockDiagramVD42YOACParam227,
    );
    blockDiagramVD42YOACParam228 != null &&
      (blockDiagramVD42YOACValue535.styles =
        blockDiagramVD42YOACParam228.split(","));
  }, "addStyle2Node"),
  blockDiagramVD42YOACValue15 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACParam184,
    blockDiagramVD42YOACParam185,
  ) {
    blockDiagramVD42YOACParam184.split(",").forEach(function (item) {
      let blockDiagramVD42YOACValue492 = blockDiagramVD42YOACValue3.get(item);
      if (blockDiagramVD42YOACValue492 === undefined) {
        let blockDiagramVD42YOACValue532 = item.trim();
        blockDiagramVD42YOACValue492 = {
          id: blockDiagramVD42YOACValue532,
          type: "na",
          children: [],
        };
        blockDiagramVD42YOACValue3.set(
          blockDiagramVD42YOACValue532,
          blockDiagramVD42YOACValue492,
        );
      }
      blockDiagramVD42YOACValue492.classes ||= [];
      blockDiagramVD42YOACValue492.classes.push(blockDiagramVD42YOACParam185);
    });
  }, "setCssClass"),
  blockDiagramVD42YOACValue16 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam47, blockDiagramVD42YOACParam48) => {
      let blockDiagramVD42YOACValue221 = blockDiagramVD42YOACParam47.flat(),
        blockDiagramVD42YOACValue222 = [],
        blockDiagramVD42YOACValue223 =
          blockDiagramVD42YOACValue221.find(
            (item) => item?.type === "column-setting",
          )?.columns ?? -1;
      for (let blockDiagramVD42YOACValue225 of blockDiagramVD42YOACValue221) {
        if (
          (typeof blockDiagramVD42YOACValue223 == "number" &&
            blockDiagramVD42YOACValue223 > 0 &&
            blockDiagramVD42YOACValue225.type !== "column-setting" &&
            typeof blockDiagramVD42YOACValue225.widthInColumns == "number" &&
            blockDiagramVD42YOACValue225.widthInColumns >
              blockDiagramVD42YOACValue223 &&
            chunkAGHRB4JFR.warn(
              `Block ${blockDiagramVD42YOACValue225.id} width ${blockDiagramVD42YOACValue225.widthInColumns} exceeds configured column width ${blockDiagramVD42YOACValue223}`,
            ),
          (blockDiagramVD42YOACValue225.label &&= blockDiagramVD42YOACValue12(
            blockDiagramVD42YOACValue225.label,
          )),
          blockDiagramVD42YOACValue225.type === "classDef")
        ) {
          blockDiagramVD42YOACValue13(
            blockDiagramVD42YOACValue225.id,
            blockDiagramVD42YOACValue225.css,
          );
          continue;
        }
        if (blockDiagramVD42YOACValue225.type === "applyClass") {
          blockDiagramVD42YOACValue15(
            blockDiagramVD42YOACValue225.id,
            blockDiagramVD42YOACValue225?.styleClass ?? "",
          );
          continue;
        }
        if (blockDiagramVD42YOACValue225.type === "applyStyles") {
          blockDiagramVD42YOACValue225?.stylesStr &&
            blockDiagramVD42YOACValue14(
              blockDiagramVD42YOACValue225.id,
              blockDiagramVD42YOACValue225?.stylesStr,
            );
          continue;
        }
        if (blockDiagramVD42YOACValue225.type === "column-setting")
          blockDiagramVD42YOACParam48.columns =
            blockDiagramVD42YOACValue225.columns ?? -1;
        else if (blockDiagramVD42YOACValue225.type === "edge") {
          let blockDiagramVD42YOACValue530 =
            (blockDiagramVD42YOACValue5.get(blockDiagramVD42YOACValue225.id) ??
              0) + 1;
          blockDiagramVD42YOACValue5.set(
            blockDiagramVD42YOACValue225.id,
            blockDiagramVD42YOACValue530,
          );
          blockDiagramVD42YOACValue225.id =
            blockDiagramVD42YOACValue530 +
            "-" +
            blockDiagramVD42YOACValue225.id;
          blockDiagramVD42YOACValue4.push(blockDiagramVD42YOACValue225);
        } else {
          blockDiagramVD42YOACValue225.label ||
            (blockDiagramVD42YOACValue225.type === "composite"
              ? (blockDiagramVD42YOACValue225.label = "")
              : (blockDiagramVD42YOACValue225.label =
                  blockDiagramVD42YOACValue225.id));
          let blockDiagramVD42YOACValue341 = blockDiagramVD42YOACValue3.get(
            blockDiagramVD42YOACValue225.id,
          );
          if (
            (blockDiagramVD42YOACValue341 === undefined
              ? blockDiagramVD42YOACValue3.set(
                  blockDiagramVD42YOACValue225.id,
                  blockDiagramVD42YOACValue225,
                )
              : (blockDiagramVD42YOACValue225.type !== "na" &&
                  (blockDiagramVD42YOACValue341.type =
                    blockDiagramVD42YOACValue225.type),
                blockDiagramVD42YOACValue225.label !==
                  blockDiagramVD42YOACValue225.id &&
                  (blockDiagramVD42YOACValue341.label =
                    blockDiagramVD42YOACValue225.label)),
            blockDiagramVD42YOACValue225.children &&
              blockDiagramVD42YOACValue16(
                blockDiagramVD42YOACValue225.children,
                blockDiagramVD42YOACValue225,
              ),
            blockDiagramVD42YOACValue225.type === "space")
          ) {
            let blockDiagramVD42YOACValue500 =
              blockDiagramVD42YOACValue225.width ?? 1;
            for (
              let blockDiagramVD42YOACValue529 = 0;
              blockDiagramVD42YOACValue529 < blockDiagramVD42YOACValue500;
              blockDiagramVD42YOACValue529++
            ) {
              let blockDiagramVD42YOACValue531 = clone(
                blockDiagramVD42YOACValue225,
              );
              blockDiagramVD42YOACValue531.id =
                blockDiagramVD42YOACValue531.id +
                "-" +
                blockDiagramVD42YOACValue529;
              blockDiagramVD42YOACValue3.set(
                blockDiagramVD42YOACValue531.id,
                blockDiagramVD42YOACValue531,
              );
              blockDiagramVD42YOACValue222.push(blockDiagramVD42YOACValue531);
            }
          } else
            blockDiagramVD42YOACValue341 === undefined &&
              blockDiagramVD42YOACValue222.push(blockDiagramVD42YOACValue225);
        }
      }
      blockDiagramVD42YOACParam48.children = blockDiagramVD42YOACValue222;
    },
    "populateBlockDatabase",
  ),
  blockDiagramVD42YOACValue17 = [],
  blockDiagramVD42YOACValue18 = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1,
  },
  blockDiagramVD42YOACValue19 = chunkAGHRB4JFN(() => {
    chunkAGHRB4JFR.debug("Clear called");
    _chunkABZYJK2DK();
    blockDiagramVD42YOACValue18 = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1,
    };
    blockDiagramVD42YOACValue3 = new Map([
      ["root", blockDiagramVD42YOACValue18],
    ]);
    blockDiagramVD42YOACValue17 = [];
    blockDiagramVD42YOACValue11 = new Map();
    blockDiagramVD42YOACValue4 = [];
    blockDiagramVD42YOACValue5 = new Map();
  }, "clear");
function blockDiagramVD42YOACHelper1(blockDiagramVD42YOACParam102) {
  switch (
    (chunkAGHRB4JFR.debug("typeStr2Type", blockDiagramVD42YOACParam102),
    blockDiagramVD42YOACParam102)
  ) {
    case "[]":
      return "square";
    case "()":
      return (chunkAGHRB4JFR.debug("we have a round"), "round");
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper1, "typeStr2Type");
function blockDiagramVD42YOACHelper2(blockDiagramVD42YOACParam211) {
  switch (
    (chunkAGHRB4JFR.debug("typeStr2Type", blockDiagramVD42YOACParam211),
    blockDiagramVD42YOACParam211)
  ) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper2, "edgeTypeStr2Type");
function blockDiagramVD42YOACHelper3(blockDiagramVD42YOACParam187) {
  switch (blockDiagramVD42YOACParam187.replace(/^[\s-]+|[\s-]+$/g, "")) {
    case "x":
      return "arrow_cross";
    case "o":
      return "arrow_circle";
    case ">":
      return "arrow_point";
    default:
      return "";
  }
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper3, "edgeStrToEdgeData");
var blockDiagramVD42YOACValue20 = 0,
  blockDiagramVD42YOACValue21 = {
    getConfig: chunkAGHRB4JFN(() => _chunkABZYJK2DY().block, "getConfig"),
    typeStr2Type: blockDiagramVD42YOACHelper1,
    edgeTypeStr2Type: blockDiagramVD42YOACHelper2,
    edgeStrToEdgeData: blockDiagramVD42YOACHelper3,
    getLogger: chunkAGHRB4JFN(() => chunkAGHRB4JFR, "getLogger"),
    getBlocksFlat: chunkAGHRB4JFN(
      () => [...blockDiagramVD42YOACValue3.values()],
      "getBlocksFlat",
    ),
    getBlocks: chunkAGHRB4JFN(
      () => blockDiagramVD42YOACValue17 || [],
      "getBlocks",
    ),
    getEdges: chunkAGHRB4JFN(() => blockDiagramVD42YOACValue4, "getEdges"),
    setHierarchy: chunkAGHRB4JFN((blockDiagramVD42YOACParam236) => {
      blockDiagramVD42YOACValue18.children = blockDiagramVD42YOACParam236;
      blockDiagramVD42YOACValue16(
        blockDiagramVD42YOACParam236,
        blockDiagramVD42YOACValue18,
      );
      blockDiagramVD42YOACValue17 = blockDiagramVD42YOACValue18.children;
    }, "setHierarchy"),
    getBlock: chunkAGHRB4JFN(
      (blockDiagramVD42YOACParam284) =>
        blockDiagramVD42YOACValue3.get(blockDiagramVD42YOACParam284),
      "getBlock",
    ),
    setBlock: chunkAGHRB4JFN((blockDiagramVD42YOACParam279) => {
      blockDiagramVD42YOACValue3.set(
        blockDiagramVD42YOACParam279.id,
        blockDiagramVD42YOACParam279,
      );
    }, "setBlock"),
    getColumns: chunkAGHRB4JFN((blockDiagramVD42YOACParam195) => {
      let blockDiagramVD42YOACValue503 = blockDiagramVD42YOACValue3.get(
        blockDiagramVD42YOACParam195,
      );
      return blockDiagramVD42YOACValue503
        ? blockDiagramVD42YOACValue503.columns
          ? blockDiagramVD42YOACValue503.columns
          : blockDiagramVD42YOACValue503.children
            ? blockDiagramVD42YOACValue503.children.length
            : -1
        : -1;
    }, "getColumns"),
    getClasses: chunkAGHRB4JFN(function () {
      return blockDiagramVD42YOACValue11;
    }, "getClasses"),
    clear: blockDiagramVD42YOACValue19,
    generateId: chunkAGHRB4JFN(
      () => (
        blockDiagramVD42YOACValue20++,
        "id-" +
          Math.random().toString(36).substr(2, 12) +
          "-" +
          blockDiagramVD42YOACValue20
      ),
      "generateId",
    ),
  },
  blockDiagramVD42YOACValue22 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam230, blockDiagramVD42YOACParam231) => {
      let blockDiagramVD42YOACValue537 = channel;
      return invertS(
        blockDiagramVD42YOACValue537(blockDiagramVD42YOACParam230, "r"),
        blockDiagramVD42YOACValue537(blockDiagramVD42YOACParam230, "g"),
        blockDiagramVD42YOACValue537(blockDiagramVD42YOACParam230, "b"),
        blockDiagramVD42YOACParam231,
      );
    },
    "fade",
  ),
  blockDiagramVD42YOACValue23 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam32) => `.label {
    font-family: ${blockDiagramVD42YOACParam32.fontFamily};
    color: ${blockDiagramVD42YOACParam32.nodeTextColor || blockDiagramVD42YOACParam32.textColor};
  }
  .cluster-label text {
    fill: ${blockDiagramVD42YOACParam32.titleColor};
  }
  .cluster-label span,p {
    color: ${blockDiagramVD42YOACParam32.titleColor};
  }



  .label text,span,p {
    fill: ${blockDiagramVD42YOACParam32.nodeTextColor || blockDiagramVD42YOACParam32.textColor};
    color: ${blockDiagramVD42YOACParam32.nodeTextColor || blockDiagramVD42YOACParam32.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${blockDiagramVD42YOACParam32.mainBkg};
    stroke: ${blockDiagramVD42YOACParam32.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${blockDiagramVD42YOACParam32.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${blockDiagramVD42YOACParam32.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${blockDiagramVD42YOACParam32.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${blockDiagramVD42YOACParam32.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${blockDiagramVD42YOACParam32.edgeLabelBackground};
      fill: ${blockDiagramVD42YOACParam32.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${blockDiagramVD42YOACValue22(blockDiagramVD42YOACParam32.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${blockDiagramVD42YOACValue22(blockDiagramVD42YOACParam32.mainBkg, 0.5)};
    fill: ${blockDiagramVD42YOACValue22(blockDiagramVD42YOACParam32.clusterBkg, 0.5)};
    stroke: ${blockDiagramVD42YOACValue22(blockDiagramVD42YOACParam32.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${blockDiagramVD42YOACParam32.titleColor};
  }

  .cluster span,p {
    color: ${blockDiagramVD42YOACParam32.titleColor};
  }
  /* .cluster div {
    color: ${blockDiagramVD42YOACParam32.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${blockDiagramVD42YOACParam32.fontFamily};
    font-size: 12px;
    background: ${blockDiagramVD42YOACParam32.tertiaryColor};
    border: 1px solid ${blockDiagramVD42YOACParam32.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${blockDiagramVD42YOACParam32.textColor};
  }
  ${chunkFMBD7UC4()}
`,
    "getStyles",
  ),
  blockDiagramVD42YOACValue24 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam232,
      blockDiagramVD42YOACParam233,
      blockDiagramVD42YOACParam234,
      blockDiagramVD42YOACParam235,
    ) => {
      blockDiagramVD42YOACParam233.forEach((item) => {
        blockDiagramVD42YOACValue25[item](
          blockDiagramVD42YOACParam232,
          blockDiagramVD42YOACParam234,
          blockDiagramVD42YOACParam235,
        );
      });
    },
    "insertMarkers",
  ),
  blockDiagramVD42YOACValue25 = {
    extension: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam89,
        blockDiagramVD42YOACParam90,
        blockDiagramVD42YOACParam91,
      ) => {
        chunkAGHRB4JFR.trace(
          "Making markers for ",
          blockDiagramVD42YOACParam91,
        );
        blockDiagramVD42YOACParam89
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam91 +
              "_" +
              blockDiagramVD42YOACParam90 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + blockDiagramVD42YOACParam90)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        blockDiagramVD42YOACParam89
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam91 +
              "_" +
              blockDiagramVD42YOACParam90 +
              "-extensionEnd",
          )
          .attr("class", "marker extension " + blockDiagramVD42YOACParam90)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
      },
      "extension",
    ),
    composition: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam93,
        blockDiagramVD42YOACParam94,
        blockDiagramVD42YOACParam95,
      ) => {
        blockDiagramVD42YOACParam93
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam95 +
              "_" +
              blockDiagramVD42YOACParam94 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + blockDiagramVD42YOACParam94)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACParam93
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam95 +
              "_" +
              blockDiagramVD42YOACParam94 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + blockDiagramVD42YOACParam94)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "composition",
    ),
    aggregation: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam96,
        blockDiagramVD42YOACParam97,
        blockDiagramVD42YOACParam98,
      ) => {
        blockDiagramVD42YOACParam96
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam98 +
              "_" +
              blockDiagramVD42YOACParam97 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + blockDiagramVD42YOACParam97)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACParam96
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam98 +
              "_" +
              blockDiagramVD42YOACParam97 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + blockDiagramVD42YOACParam97)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "aggregation",
    ),
    dependency: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam99,
        blockDiagramVD42YOACParam100,
        blockDiagramVD42YOACParam101,
      ) => {
        blockDiagramVD42YOACParam99
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam101 +
              "_" +
              blockDiagramVD42YOACParam100 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + blockDiagramVD42YOACParam100)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        blockDiagramVD42YOACParam99
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam101 +
              "_" +
              blockDiagramVD42YOACParam100 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + blockDiagramVD42YOACParam100)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      },
      "dependency",
    ),
    lollipop: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam77,
        blockDiagramVD42YOACParam78,
        blockDiagramVD42YOACParam79,
      ) => {
        blockDiagramVD42YOACParam77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam79 +
              "_" +
              blockDiagramVD42YOACParam78 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + blockDiagramVD42YOACParam78)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        blockDiagramVD42YOACParam77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam79 +
              "_" +
              blockDiagramVD42YOACParam78 +
              "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + blockDiagramVD42YOACParam78)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("stroke", "black")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
      },
      "lollipop",
    ),
    point: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam69,
        blockDiagramVD42YOACParam70,
        blockDiagramVD42YOACParam71,
      ) => {
        blockDiagramVD42YOACParam69
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam71 +
              "_" +
              blockDiagramVD42YOACParam70 +
              "-pointEnd",
          )
          .attr("class", "marker " + blockDiagramVD42YOACParam70)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 6)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        blockDiagramVD42YOACParam69
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam71 +
              "_" +
              blockDiagramVD42YOACParam70 +
              "-pointStart",
          )
          .attr("class", "marker " + blockDiagramVD42YOACParam70)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 5 L 10 10 L 10 0 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      },
      "point",
    ),
    circle: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam63,
        blockDiagramVD42YOACParam64,
        blockDiagramVD42YOACParam65,
      ) => {
        blockDiagramVD42YOACParam63
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam65 +
              "_" +
              blockDiagramVD42YOACParam64 +
              "-circleEnd",
          )
          .attr("class", "marker " + blockDiagramVD42YOACParam64)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 11)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        blockDiagramVD42YOACParam63
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam65 +
              "_" +
              blockDiagramVD42YOACParam64 +
              "-circleStart",
          )
          .attr("class", "marker " + blockDiagramVD42YOACParam64)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -1)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
      },
      "circle",
    ),
    cross: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam66,
        blockDiagramVD42YOACParam67,
        blockDiagramVD42YOACParam68,
      ) => {
        blockDiagramVD42YOACParam66
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam68 +
              "_" +
              blockDiagramVD42YOACParam67 +
              "-crossEnd",
          )
          .attr("class", "marker cross " + blockDiagramVD42YOACParam67)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", 12)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
        blockDiagramVD42YOACParam66
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam68 +
              "_" +
              blockDiagramVD42YOACParam67 +
              "-crossStart",
          )
          .attr("class", "marker cross " + blockDiagramVD42YOACParam67)
          .attr("viewBox", "0 0 11 11")
          .attr("refX", -1)
          .attr("refY", 5.2)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11)
          .attr("markerHeight", 11)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 l 9,9 M 10,1 l -9,9")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "1,0");
      },
      "cross",
    ),
    barb: chunkAGHRB4JFN(
      (
        blockDiagramVD42YOACParam163,
        blockDiagramVD42YOACParam164,
        blockDiagramVD42YOACParam165,
      ) => {
        blockDiagramVD42YOACParam163
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramVD42YOACParam165 +
              "_" +
              blockDiagramVD42YOACParam164 +
              "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      },
      "barb",
    ),
  },
  blockDiagramVD42YOACValue26 = blockDiagramVD42YOACValue24,
  blockDiagramVD42YOACValue27 = _chunkABZYJK2DL()?.block?.padding ?? 8;
function _e(blockDiagramVD42YOACParam168, blockDiagramVD42YOACParam169) {
  if (
    blockDiagramVD42YOACParam168 === 0 ||
    !Number.isInteger(blockDiagramVD42YOACParam168)
  )
    throw Error("Columns must be an integer !== 0.");
  if (
    blockDiagramVD42YOACParam169 < 0 ||
    !Number.isInteger(blockDiagramVD42YOACParam169)
  )
    throw Error(
      "Position must be a non-negative integer." + blockDiagramVD42YOACParam169,
    );
  return blockDiagramVD42YOACParam168 < 0
    ? {
        px: blockDiagramVD42YOACParam169,
        py: 0,
      }
    : blockDiagramVD42YOACParam168 === 1
      ? {
          px: 0,
          py: blockDiagramVD42YOACParam169,
        }
      : {
          px: blockDiagramVD42YOACParam169 % blockDiagramVD42YOACParam168,
          py: Math.floor(
            blockDiagramVD42YOACParam169 / blockDiagramVD42YOACParam168,
          ),
        };
}
chunkAGHRB4JFN(_e, "calculateBlockPosition");
var blockDiagramVD42YOACValue28 = chunkAGHRB4JFN(
  (blockDiagramVD42YOACParam137) => {
    let blockDiagramVD42YOACValue357 = 0,
      blockDiagramVD42YOACValue358 = 0;
    for (let blockDiagramVD42YOACValue418 of blockDiagramVD42YOACParam137.children) {
      let { width, height, x, y } = blockDiagramVD42YOACValue418.size ?? {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      chunkAGHRB4JFR.debug(
        "getMaxChildSize abc95 child:",
        blockDiagramVD42YOACValue418.id,
        "width:",
        width,
        "height:",
        height,
        "x:",
        x,
        "y:",
        y,
        blockDiagramVD42YOACValue418.type,
      );
      blockDiagramVD42YOACValue418.type !== "space" &&
        (width > blockDiagramVD42YOACValue357 &&
          (blockDiagramVD42YOACValue357 =
            width / (blockDiagramVD42YOACParam137.widthInColumns ?? 1)),
        height > blockDiagramVD42YOACValue358 &&
          (blockDiagramVD42YOACValue358 = height));
    }
    return {
      width: blockDiagramVD42YOACValue357,
      height: blockDiagramVD42YOACValue358,
    };
  },
  "getMaxChildSize",
);
function blockDiagramVD42YOACHelper4(
  blockDiagramVD42YOACParam20,
  blockDiagramVD42YOACParam21,
  blockDiagramVD42YOACParam22 = 0,
  blockDiagramVD42YOACParam23 = 0,
) {
  chunkAGHRB4JFR.debug(
    "setBlockSizes abc95 (start)",
    blockDiagramVD42YOACParam20.id,
    blockDiagramVD42YOACParam20?.size?.x,
    "block width =",
    blockDiagramVD42YOACParam20?.size,
    "siblingWidth",
    blockDiagramVD42YOACParam22,
  );
  blockDiagramVD42YOACParam20?.size?.width ||
    (blockDiagramVD42YOACParam20.size = {
      width: blockDiagramVD42YOACParam22,
      height: blockDiagramVD42YOACParam23,
      x: 0,
      y: 0,
    });
  let blockDiagramVD42YOACValue158 = 0,
    blockDiagramVD42YOACValue159 = 0;
  if (blockDiagramVD42YOACParam20.children?.length > 0) {
    for (let blockDiagramVD42YOACValue541 of blockDiagramVD42YOACParam20.children)
      blockDiagramVD42YOACHelper4(
        blockDiagramVD42YOACValue541,
        blockDiagramVD42YOACParam21,
      );
    let blockDiagramVD42YOACValue183 = blockDiagramVD42YOACValue28(
      blockDiagramVD42YOACParam20,
    );
    blockDiagramVD42YOACValue158 = blockDiagramVD42YOACValue183.width;
    blockDiagramVD42YOACValue159 = blockDiagramVD42YOACValue183.height;
    chunkAGHRB4JFR.debug(
      "setBlockSizes abc95 maxWidth of",
      blockDiagramVD42YOACParam20.id,
      ":s children is ",
      blockDiagramVD42YOACValue158,
      blockDiagramVD42YOACValue159,
    );
    for (let blockDiagramVD42YOACValue392 of blockDiagramVD42YOACParam20.children)
      blockDiagramVD42YOACValue392.size &&
        (chunkAGHRB4JFR.debug(
          `abc95 Setting size of children of ${blockDiagramVD42YOACParam20.id} id=${blockDiagramVD42YOACValue392.id} ${blockDiagramVD42YOACValue158} ${blockDiagramVD42YOACValue159} ${JSON.stringify(blockDiagramVD42YOACValue392.size)}`,
        ),
        (blockDiagramVD42YOACValue392.size.width =
          blockDiagramVD42YOACValue158 *
            (blockDiagramVD42YOACValue392.widthInColumns ?? 1) +
          blockDiagramVD42YOACValue27 *
            ((blockDiagramVD42YOACValue392.widthInColumns ?? 1) - 1)),
        (blockDiagramVD42YOACValue392.size.height =
          blockDiagramVD42YOACValue159),
        (blockDiagramVD42YOACValue392.size.x = 0),
        (blockDiagramVD42YOACValue392.size.y = 0),
        chunkAGHRB4JFR.debug(
          `abc95 updating size of ${blockDiagramVD42YOACParam20.id} children child:${blockDiagramVD42YOACValue392.id} maxWidth:${blockDiagramVD42YOACValue158} maxHeight:${blockDiagramVD42YOACValue159}`,
        ));
    for (let blockDiagramVD42YOACValue540 of blockDiagramVD42YOACParam20.children)
      blockDiagramVD42YOACHelper4(
        blockDiagramVD42YOACValue540,
        blockDiagramVD42YOACParam21,
        blockDiagramVD42YOACValue158,
        blockDiagramVD42YOACValue159,
      );
    let blockDiagramVD42YOACValue184 =
        blockDiagramVD42YOACParam20.columns ?? -1,
      blockDiagramVD42YOACValue185 = 0;
    for (let blockDiagramVD42YOACValue539 of blockDiagramVD42YOACParam20.children)
      blockDiagramVD42YOACValue185 +=
        blockDiagramVD42YOACValue539.widthInColumns ?? 1;
    let blockDiagramVD42YOACValue186 =
      blockDiagramVD42YOACParam20.children.length;
    blockDiagramVD42YOACValue184 > 0 &&
      blockDiagramVD42YOACValue184 < blockDiagramVD42YOACValue185 &&
      (blockDiagramVD42YOACValue186 = blockDiagramVD42YOACValue184);
    let blockDiagramVD42YOACValue187 = Math.ceil(
        blockDiagramVD42YOACValue185 / blockDiagramVD42YOACValue186,
      ),
      blockDiagramVD42YOACValue188 =
        blockDiagramVD42YOACValue186 *
          (blockDiagramVD42YOACValue158 + blockDiagramVD42YOACValue27) +
        blockDiagramVD42YOACValue27,
      blockDiagramVD42YOACValue189 =
        blockDiagramVD42YOACValue187 *
          (blockDiagramVD42YOACValue159 + blockDiagramVD42YOACValue27) +
        blockDiagramVD42YOACValue27;
    if (blockDiagramVD42YOACValue188 < blockDiagramVD42YOACParam22) {
      chunkAGHRB4JFR.debug(
        `Detected to small sibling: abc95 ${blockDiagramVD42YOACParam20.id} siblingWidth ${blockDiagramVD42YOACParam22} siblingHeight ${blockDiagramVD42YOACParam23} width ${blockDiagramVD42YOACValue188}`,
      );
      blockDiagramVD42YOACValue188 = blockDiagramVD42YOACParam22;
      blockDiagramVD42YOACValue189 = blockDiagramVD42YOACParam23;
      let blockDiagramVD42YOACValue331 =
          (blockDiagramVD42YOACParam22 -
            blockDiagramVD42YOACValue186 * blockDiagramVD42YOACValue27 -
            blockDiagramVD42YOACValue27) /
          blockDiagramVD42YOACValue186,
        blockDiagramVD42YOACValue332 =
          (blockDiagramVD42YOACParam23 -
            blockDiagramVD42YOACValue187 * blockDiagramVD42YOACValue27 -
            blockDiagramVD42YOACValue27) /
          blockDiagramVD42YOACValue187;
      chunkAGHRB4JFR.debug(
        "Size indata abc88",
        blockDiagramVD42YOACParam20.id,
        "childWidth",
        blockDiagramVD42YOACValue331,
        "maxWidth",
        blockDiagramVD42YOACValue158,
      );
      chunkAGHRB4JFR.debug(
        "Size indata abc88",
        blockDiagramVD42YOACParam20.id,
        "childHeight",
        blockDiagramVD42YOACValue332,
        "maxHeight",
        blockDiagramVD42YOACValue159,
      );
      chunkAGHRB4JFR.debug(
        "Size indata abc88 xSize",
        blockDiagramVD42YOACValue186,
        "padding",
        blockDiagramVD42YOACValue27,
      );
      for (let blockDiagramVD42YOACValue526 of blockDiagramVD42YOACParam20.children)
        blockDiagramVD42YOACValue526.size &&
          ((blockDiagramVD42YOACValue526.size.width =
            blockDiagramVD42YOACValue331),
          (blockDiagramVD42YOACValue526.size.height =
            blockDiagramVD42YOACValue332),
          (blockDiagramVD42YOACValue526.size.x = 0),
          (blockDiagramVD42YOACValue526.size.y = 0));
    }
    if (
      (chunkAGHRB4JFR.debug(
        `abc95 (finale calc) ${blockDiagramVD42YOACParam20.id} xSize ${blockDiagramVD42YOACValue186} ySize ${blockDiagramVD42YOACValue187} columns ${blockDiagramVD42YOACValue184}${blockDiagramVD42YOACParam20.children.length} width=${Math.max(blockDiagramVD42YOACValue188, blockDiagramVD42YOACParam20.size?.width || 0)}`,
      ),
      blockDiagramVD42YOACValue188 <
        (blockDiagramVD42YOACParam20?.size?.width || 0))
    ) {
      blockDiagramVD42YOACValue188 =
        blockDiagramVD42YOACParam20?.size?.width || 0;
      let blockDiagramVD42YOACValue441 =
        blockDiagramVD42YOACValue184 > 0
          ? Math.min(
              blockDiagramVD42YOACParam20.children.length,
              blockDiagramVD42YOACValue184,
            )
          : blockDiagramVD42YOACParam20.children.length;
      if (blockDiagramVD42YOACValue441 > 0) {
        let blockDiagramVD42YOACValue501 =
          (blockDiagramVD42YOACValue188 -
            blockDiagramVD42YOACValue441 * blockDiagramVD42YOACValue27 -
            blockDiagramVD42YOACValue27) /
          blockDiagramVD42YOACValue441;
        chunkAGHRB4JFR.debug(
          "abc95 (growing to fit) width",
          blockDiagramVD42YOACParam20.id,
          blockDiagramVD42YOACValue188,
          blockDiagramVD42YOACParam20.size?.width,
          blockDiagramVD42YOACValue501,
        );
        for (let blockDiagramVD42YOACValue538 of blockDiagramVD42YOACParam20.children)
          blockDiagramVD42YOACValue538.size &&
            (blockDiagramVD42YOACValue538.size.width =
              blockDiagramVD42YOACValue501);
      }
    }
    blockDiagramVD42YOACParam20.size = {
      width: blockDiagramVD42YOACValue188,
      height: blockDiagramVD42YOACValue189,
      x: 0,
      y: 0,
    };
  }
  chunkAGHRB4JFR.debug(
    "setBlockSizes abc94 (done)",
    blockDiagramVD42YOACParam20.id,
    blockDiagramVD42YOACParam20?.size?.x,
    blockDiagramVD42YOACParam20?.size?.width,
    blockDiagramVD42YOACParam20?.size?.y,
    blockDiagramVD42YOACParam20?.size?.height,
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper4, "setBlockSizes");
function blockDiagramVD42YOACHelper5(
  blockDiagramVD42YOACParam33,
  blockDiagramVD42YOACParam34,
) {
  chunkAGHRB4JFR.debug(
    `abc85 layout blocks (=>layoutBlocks) ${blockDiagramVD42YOACParam33.id} x: ${blockDiagramVD42YOACParam33?.size?.x} y: ${blockDiagramVD42YOACParam33?.size?.y} width: ${blockDiagramVD42YOACParam33?.size?.width}`,
  );
  let blockDiagramVD42YOACValue194 = blockDiagramVD42YOACParam33.columns ?? -1;
  if (
    (chunkAGHRB4JFR.debug(
      "layoutBlocks columns abc95",
      blockDiagramVD42YOACParam33.id,
      "=>",
      blockDiagramVD42YOACValue194,
      blockDiagramVD42YOACParam33,
    ),
    blockDiagramVD42YOACParam33.children &&
      blockDiagramVD42YOACParam33.children.length > 0)
  ) {
    let blockDiagramVD42YOACValue216 =
        blockDiagramVD42YOACParam33?.children[0]?.size?.width ?? 0,
      blockDiagramVD42YOACValue217 =
        blockDiagramVD42YOACParam33.children.length *
          blockDiagramVD42YOACValue216 +
        (blockDiagramVD42YOACParam33.children.length - 1) *
          blockDiagramVD42YOACValue27;
    chunkAGHRB4JFR.debug(
      "widthOfChildren 88",
      blockDiagramVD42YOACValue217,
      "posX",
    );
    let blockDiagramVD42YOACValue218 = 0;
    chunkAGHRB4JFR.debug(
      "abc91 block?.size?.x",
      blockDiagramVD42YOACParam33.id,
      blockDiagramVD42YOACParam33?.size?.x,
    );
    let blockDiagramVD42YOACValue219 = blockDiagramVD42YOACParam33?.size?.x
        ? blockDiagramVD42YOACParam33?.size?.x +
          (-blockDiagramVD42YOACParam33?.size?.width / 2 || 0)
        : -blockDiagramVD42YOACValue27,
      blockDiagramVD42YOACValue220 = 0;
    for (let blockDiagramVD42YOACValue226 of blockDiagramVD42YOACParam33.children) {
      let blockDiagramVD42YOACValue227 = blockDiagramVD42YOACParam33;
      if (!blockDiagramVD42YOACValue226.size) continue;
      let { width, height } = blockDiagramVD42YOACValue226.size,
        { px, py } = _e(
          blockDiagramVD42YOACValue194,
          blockDiagramVD42YOACValue218,
        );
      if (
        (py != blockDiagramVD42YOACValue220 &&
          ((blockDiagramVD42YOACValue220 = py),
          (blockDiagramVD42YOACValue219 = blockDiagramVD42YOACParam33?.size?.x
            ? blockDiagramVD42YOACParam33?.size?.x +
              (-blockDiagramVD42YOACParam33?.size?.width / 2 || 0)
            : -blockDiagramVD42YOACValue27),
          chunkAGHRB4JFR.debug(
            "New row in layout for block",
            blockDiagramVD42YOACParam33.id,
            " and child ",
            blockDiagramVD42YOACValue226.id,
            blockDiagramVD42YOACValue220,
          )),
        chunkAGHRB4JFR.debug(
          `abc89 layout blocks (child) id: ${blockDiagramVD42YOACValue226.id} Pos: ${blockDiagramVD42YOACValue218} (px, py) ${px},${py} (${blockDiagramVD42YOACValue227?.size?.x},${blockDiagramVD42YOACValue227?.size?.y}) parent: ${blockDiagramVD42YOACValue227.id} width: ${width}${blockDiagramVD42YOACValue27}`,
        ),
        blockDiagramVD42YOACValue227.size)
      ) {
        let blockDiagramVD42YOACValue319 = width / 2;
        blockDiagramVD42YOACValue226.size.x =
          blockDiagramVD42YOACValue219 +
          blockDiagramVD42YOACValue27 +
          blockDiagramVD42YOACValue319;
        chunkAGHRB4JFR.debug(
          `abc91 layout blocks (calc) px, pyid:${blockDiagramVD42YOACValue226.id} startingPos=X${blockDiagramVD42YOACValue219} new startingPosX${blockDiagramVD42YOACValue226.size.x} ${blockDiagramVD42YOACValue319} padding=${blockDiagramVD42YOACValue27} width=${width} halfWidth=${blockDiagramVD42YOACValue319} => x:${blockDiagramVD42YOACValue226.size.x} y:${blockDiagramVD42YOACValue226.size.y} ${blockDiagramVD42YOACValue226.widthInColumns} (width * (child?.w || 1)) / 2 ${(width * (blockDiagramVD42YOACValue226?.widthInColumns ?? 1)) / 2}`,
        );
        blockDiagramVD42YOACValue219 =
          blockDiagramVD42YOACValue226.size.x + blockDiagramVD42YOACValue319;
        blockDiagramVD42YOACValue226.size.y =
          blockDiagramVD42YOACValue227.size.y -
          blockDiagramVD42YOACValue227.size.height / 2 +
          py * (height + blockDiagramVD42YOACValue27) +
          height / 2 +
          blockDiagramVD42YOACValue27;
        chunkAGHRB4JFR.debug(
          `abc88 layout blocks (calc) px, pyid:${blockDiagramVD42YOACValue226.id}startingPosX${blockDiagramVD42YOACValue219}${blockDiagramVD42YOACValue27}${blockDiagramVD42YOACValue319}=>x:${blockDiagramVD42YOACValue226.size.x}y:${blockDiagramVD42YOACValue226.size.y}${blockDiagramVD42YOACValue226.widthInColumns}(width * (child?.w || 1)) / 2${(width * (blockDiagramVD42YOACValue226?.widthInColumns ?? 1)) / 2}`,
        );
      }
      blockDiagramVD42YOACValue226.children &&
        blockDiagramVD42YOACHelper5(
          blockDiagramVD42YOACValue226,
          blockDiagramVD42YOACParam34,
        );
      let blockDiagramVD42YOACValue228 =
        blockDiagramVD42YOACValue226?.widthInColumns ?? 1;
      blockDiagramVD42YOACValue194 > 0 &&
        (blockDiagramVD42YOACValue228 = Math.min(
          blockDiagramVD42YOACValue228,
          blockDiagramVD42YOACValue194 -
            (blockDiagramVD42YOACValue218 % blockDiagramVD42YOACValue194),
        ));
      blockDiagramVD42YOACValue218 += blockDiagramVD42YOACValue228;
      chunkAGHRB4JFR.debug(
        "abc88 columnsPos",
        blockDiagramVD42YOACValue226,
        blockDiagramVD42YOACValue218,
      );
    }
  }
  chunkAGHRB4JFR.debug(
    `layout blocks (<==layoutBlocks) ${blockDiagramVD42YOACParam33.id} x: ${blockDiagramVD42YOACParam33?.size?.x} y: ${blockDiagramVD42YOACParam33?.size?.y} width: ${blockDiagramVD42YOACParam33?.size?.width}`,
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper5, "layoutBlocks");
function blockDiagramVD42YOACHelper6(
  blockDiagramVD42YOACParam122,
  { minX, minY, maxX, maxY } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  },
) {
  if (
    blockDiagramVD42YOACParam122.size &&
    blockDiagramVD42YOACParam122.id !== "root"
  ) {
    let { x, y, width, height } = blockDiagramVD42YOACParam122.size;
    x - width / 2 < minX && (minX = x - width / 2);
    y - height / 2 < minY && (minY = y - height / 2);
    x + width / 2 > maxX && (maxX = x + width / 2);
    y + height / 2 > maxY && (maxY = y + height / 2);
  }
  if (blockDiagramVD42YOACParam122.children)
    for (let blockDiagramVD42YOACValue525 of blockDiagramVD42YOACParam122.children)
      ({ minX, minY, maxX, maxY } = blockDiagramVD42YOACHelper6(
        blockDiagramVD42YOACValue525,
        {
          minX,
          minY,
          maxX,
          maxY,
        },
      ));
  return {
    minX,
    minY,
    maxX,
    maxY,
  };
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper6, "findBounds");
function blockDiagramVD42YOACHelper7(blockDiagramVD42YOACParam186) {
  let blockDiagramVD42YOACValue475 =
    blockDiagramVD42YOACParam186.getBlock("root");
  if (!blockDiagramVD42YOACValue475) return;
  blockDiagramVD42YOACHelper4(
    blockDiagramVD42YOACValue475,
    blockDiagramVD42YOACParam186,
    0,
    0,
  );
  blockDiagramVD42YOACHelper5(
    blockDiagramVD42YOACValue475,
    blockDiagramVD42YOACParam186,
  );
  chunkAGHRB4JFR.debug(
    "getBlocks",
    JSON.stringify(blockDiagramVD42YOACValue475, null, 2),
  );
  let { minX, minY, maxX, maxY } = blockDiagramVD42YOACHelper6(
      blockDiagramVD42YOACValue475,
    ),
    blockDiagramVD42YOACValue476 = maxY - minY;
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: blockDiagramVD42YOACValue476,
  };
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper7, "layout");
function blockDiagramVD42YOACHelper8(
  blockDiagramVD42YOACParam272,
  blockDiagramVD42YOACParam273,
) {
  blockDiagramVD42YOACParam273 &&
    blockDiagramVD42YOACParam272.attr("style", blockDiagramVD42YOACParam273);
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper8, "applyStyle");
function be(blockDiagramVD42YOACParam140, blockDiagramVD42YOACParam141) {
  let blockDiagramVD42YOACValue363 = Src(
      document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"),
    ),
    blockDiagramVD42YOACValue364 =
      blockDiagramVD42YOACValue363.append("xhtml:div"),
    blockDiagramVD42YOACValue365 = blockDiagramVD42YOACParam140.label,
    blockDiagramVD42YOACValue366 = blockDiagramVD42YOACParam140.isNode
      ? "nodeLabel"
      : "edgeLabel",
    blockDiagramVD42YOACValue367 = blockDiagramVD42YOACValue364.append("span");
  return (
    blockDiagramVD42YOACValue367.html(
      _chunkABZYJK2DM(
        blockDiagramVD42YOACValue365,
        blockDiagramVD42YOACParam141,
      ),
    ),
    blockDiagramVD42YOACHelper8(
      blockDiagramVD42YOACValue367,
      blockDiagramVD42YOACParam140.labelStyle,
    ),
    blockDiagramVD42YOACValue367.attr("class", blockDiagramVD42YOACValue366),
    blockDiagramVD42YOACHelper8(
      blockDiagramVD42YOACValue364,
      blockDiagramVD42YOACParam140.labelStyle,
    ),
    blockDiagramVD42YOACValue364.style("display", "inline-block"),
    blockDiagramVD42YOACValue364.style("white-space", "nowrap"),
    blockDiagramVD42YOACValue364.attr("xmlns", "http://www.w3.org/1999/xhtml"),
    blockDiagramVD42YOACValue363.node()
  );
}
chunkAGHRB4JFN(be, "addHtmlLabel");
var blockDiagramVD42YOACValue29 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACParam59,
      blockDiagramVD42YOACParam60,
      blockDiagramVD42YOACParam61,
      blockDiagramVD42YOACParam62,
    ) => {
      let blockDiagramVD42YOACValue242 = blockDiagramVD42YOACParam59 || "";
      typeof blockDiagramVD42YOACValue242 == "object" &&
        (blockDiagramVD42YOACValue242 = blockDiagramVD42YOACValue242[0]);
      let blockDiagramVD42YOACValue243 = _chunkABZYJK2DL();
      if (chunkABZYJK2DV(blockDiagramVD42YOACValue243.flowchart.htmlLabels))
        return (
          (blockDiagramVD42YOACValue242 = blockDiagramVD42YOACValue242.replace(
            /\\n|\n/g,
            "<br />",
          )),
          chunkAGHRB4JFR.debug("vertexText" + blockDiagramVD42YOACValue242),
          be(
            {
              isNode: blockDiagramVD42YOACParam62,
              label: await chunkJA3XYJ7ZI(
                chunkS3R3BYOJD(blockDiagramVD42YOACValue242),
              ),
              labelStyle: blockDiagramVD42YOACParam60.replace(
                "fill:",
                "color:",
              ),
            },
            blockDiagramVD42YOACValue243,
          )
        );
      {
        let blockDiagramVD42YOACValue297 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );
        blockDiagramVD42YOACValue297.setAttribute(
          "style",
          blockDiagramVD42YOACParam60.replace("color:", "fill:"),
        );
        let blockDiagramVD42YOACValue298 = [];
        blockDiagramVD42YOACValue298 =
          typeof blockDiagramVD42YOACValue242 == "string"
            ? blockDiagramVD42YOACValue242.split(/\\n|\n|<br\s*\/?>/gi)
            : Array.isArray(blockDiagramVD42YOACValue242)
              ? blockDiagramVD42YOACValue242
              : [];
        for (let blockDiagramVD42YOACValue368 of blockDiagramVD42YOACValue298) {
          let blockDiagramVD42YOACValue393 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "tspan",
          );
          blockDiagramVD42YOACValue393.setAttributeNS(
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            "preserve",
          );
          blockDiagramVD42YOACValue393.setAttribute("dy", "1em");
          blockDiagramVD42YOACValue393.setAttribute("x", "0");
          blockDiagramVD42YOACParam61
            ? blockDiagramVD42YOACValue393.setAttribute("class", "title-row")
            : blockDiagramVD42YOACValue393.setAttribute("class", "row");
          blockDiagramVD42YOACValue393.textContent =
            blockDiagramVD42YOACValue368.trim();
          blockDiagramVD42YOACValue297.appendChild(
            blockDiagramVD42YOACValue393,
          );
        }
        return blockDiagramVD42YOACValue297;
      }
    },
    "createLabel",
  ),
  blockDiagramVD42YOACValue30 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam203,
      blockDiagramVD42YOACParam204,
      blockDiagramVD42YOACParam205,
      blockDiagramVD42YOACParam206,
      blockDiagramVD42YOACParam207,
    ) => {
      blockDiagramVD42YOACParam204.arrowTypeStart &&
        blockDiagramVD42YOACValue32(
          blockDiagramVD42YOACParam203,
          "start",
          blockDiagramVD42YOACParam204.arrowTypeStart,
          blockDiagramVD42YOACParam205,
          blockDiagramVD42YOACParam206,
          blockDiagramVD42YOACParam207,
        );
      blockDiagramVD42YOACParam204.arrowTypeEnd &&
        blockDiagramVD42YOACValue32(
          blockDiagramVD42YOACParam203,
          "end",
          blockDiagramVD42YOACParam204.arrowTypeEnd,
          blockDiagramVD42YOACParam205,
          blockDiagramVD42YOACParam206,
          blockDiagramVD42YOACParam207,
        );
    },
    "addEdgeMarkers",
  ),
  blockDiagramVD42YOACValue31 = {
    arrow_cross: "cross",
    arrow_point: "point",
    arrow_barb: "barb",
    arrow_circle: "circle",
    aggregation: "aggregation",
    extension: "extension",
    composition: "composition",
    dependency: "dependency",
    lollipop: "lollipop",
  },
  blockDiagramVD42YOACValue32 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam188,
      blockDiagramVD42YOACParam189,
      blockDiagramVD42YOACParam190,
      blockDiagramVD42YOACParam191,
      blockDiagramVD42YOACParam192,
      blockDiagramVD42YOACParam193,
    ) => {
      let blockDiagramVD42YOACValue483 =
        blockDiagramVD42YOACValue31[blockDiagramVD42YOACParam190];
      if (!blockDiagramVD42YOACValue483) {
        chunkAGHRB4JFR.warn(
          `Unknown arrow type: ${blockDiagramVD42YOACParam190}`,
        );
        return;
      }
      let blockDiagramVD42YOACValue484 =
        blockDiagramVD42YOACParam189 === "start" ? "Start" : "End";
      blockDiagramVD42YOACParam188.attr(
        `marker-${blockDiagramVD42YOACParam189}`,
        `url(${blockDiagramVD42YOACParam191}#${blockDiagramVD42YOACParam192}_${blockDiagramVD42YOACParam193}-${blockDiagramVD42YOACValue483}${blockDiagramVD42YOACValue484})`,
      );
    },
    "addEdgeMarker",
  ),
  blockDiagramVD42YOACValue33 = {},
  blockDiagramVD42YOACValue34 = {},
  blockDiagramVD42YOACValue35 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam18, blockDiagramVD42YOACParam19) => {
      let blockDiagramVD42YOACValue151 = _chunkABZYJK2DL(),
        blockDiagramVD42YOACValue152 = chunkABZYJK2DV(
          blockDiagramVD42YOACValue151.flowchart.htmlLabels,
        ),
        blockDiagramVD42YOACValue153 =
          blockDiagramVD42YOACParam19.labelType === "markdown"
            ? chunkJA3XYJ7ZA(
                blockDiagramVD42YOACParam18,
                blockDiagramVD42YOACParam19.label,
                {
                  style: blockDiagramVD42YOACParam19.labelStyle,
                  useHtmlLabels: blockDiagramVD42YOACValue152,
                  addSvgBackground: true,
                },
                blockDiagramVD42YOACValue151,
              )
            : await blockDiagramVD42YOACValue29(
                blockDiagramVD42YOACParam19.label,
                blockDiagramVD42YOACParam19.labelStyle,
              ),
        blockDiagramVD42YOACValue154 = blockDiagramVD42YOACParam18
          .insert("g")
          .attr("class", "edgeLabel"),
        blockDiagramVD42YOACValue155 = blockDiagramVD42YOACValue154
          .insert("g")
          .attr("class", "label");
      blockDiagramVD42YOACValue155
        .node()
        .appendChild(blockDiagramVD42YOACValue153);
      let blockDiagramVD42YOACValue156 = blockDiagramVD42YOACValue153.getBBox();
      if (blockDiagramVD42YOACValue152) {
        let blockDiagramVD42YOACValue519 =
            blockDiagramVD42YOACValue153.children[0],
          blockDiagramVD42YOACValue520 = Src(blockDiagramVD42YOACValue153);
        blockDiagramVD42YOACValue156 =
          blockDiagramVD42YOACValue519.getBoundingClientRect();
        blockDiagramVD42YOACValue520.attr(
          "width",
          blockDiagramVD42YOACValue156.width,
        );
        blockDiagramVD42YOACValue520.attr(
          "height",
          blockDiagramVD42YOACValue156.height,
        );
      }
      blockDiagramVD42YOACValue155.attr(
        "transform",
        "translate(" +
          -blockDiagramVD42YOACValue156.width / 2 +
          ", " +
          -blockDiagramVD42YOACValue156.height / 2 +
          ")",
      );
      blockDiagramVD42YOACValue33[blockDiagramVD42YOACParam19.id] =
        blockDiagramVD42YOACValue154;
      blockDiagramVD42YOACParam19.width = blockDiagramVD42YOACValue156.width;
      blockDiagramVD42YOACParam19.height = blockDiagramVD42YOACValue156.height;
      let blockDiagramVD42YOACValue157;
      if (blockDiagramVD42YOACParam19.startLabelLeft) {
        let blockDiagramVD42YOACValue408 = await blockDiagramVD42YOACValue29(
            blockDiagramVD42YOACParam19.startLabelLeft,
            blockDiagramVD42YOACParam19.labelStyle,
          ),
          blockDiagramVD42YOACValue409 = blockDiagramVD42YOACParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACValue410 = blockDiagramVD42YOACValue409
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACValue157 = blockDiagramVD42YOACValue410
          .node()
          .appendChild(blockDiagramVD42YOACValue408);
        let blockDiagramVD42YOACValue411 =
          blockDiagramVD42YOACValue408.getBBox();
        blockDiagramVD42YOACValue410.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACValue411.width / 2 +
            ", " +
            -blockDiagramVD42YOACValue411.height / 2 +
            ")",
        );
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] ||
          (blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] = {});
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id].startLeft =
          blockDiagramVD42YOACValue409;
        blockDiagramVD42YOACHelper9(
          blockDiagramVD42YOACValue157,
          blockDiagramVD42YOACParam19.startLabelLeft,
        );
      }
      if (blockDiagramVD42YOACParam19.startLabelRight) {
        let blockDiagramVD42YOACValue385 = await blockDiagramVD42YOACValue29(
            blockDiagramVD42YOACParam19.startLabelRight,
            blockDiagramVD42YOACParam19.labelStyle,
          ),
          blockDiagramVD42YOACValue386 = blockDiagramVD42YOACParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACValue387 = blockDiagramVD42YOACValue386
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACValue157 = blockDiagramVD42YOACValue386
          .node()
          .appendChild(blockDiagramVD42YOACValue385);
        blockDiagramVD42YOACValue387
          .node()
          .appendChild(blockDiagramVD42YOACValue385);
        let blockDiagramVD42YOACValue388 =
          blockDiagramVD42YOACValue385.getBBox();
        blockDiagramVD42YOACValue387.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACValue388.width / 2 +
            ", " +
            -blockDiagramVD42YOACValue388.height / 2 +
            ")",
        );
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] ||
          (blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] = {});
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id].startRight =
          blockDiagramVD42YOACValue386;
        blockDiagramVD42YOACHelper9(
          blockDiagramVD42YOACValue157,
          blockDiagramVD42YOACParam19.startLabelRight,
        );
      }
      if (blockDiagramVD42YOACParam19.endLabelLeft) {
        let blockDiagramVD42YOACValue399 = await blockDiagramVD42YOACValue29(
            blockDiagramVD42YOACParam19.endLabelLeft,
            blockDiagramVD42YOACParam19.labelStyle,
          ),
          blockDiagramVD42YOACValue400 = blockDiagramVD42YOACParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACValue401 = blockDiagramVD42YOACValue400
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACValue157 = blockDiagramVD42YOACValue401
          .node()
          .appendChild(blockDiagramVD42YOACValue399);
        let blockDiagramVD42YOACValue402 =
          blockDiagramVD42YOACValue399.getBBox();
        blockDiagramVD42YOACValue401.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACValue402.width / 2 +
            ", " +
            -blockDiagramVD42YOACValue402.height / 2 +
            ")",
        );
        blockDiagramVD42YOACValue400
          .node()
          .appendChild(blockDiagramVD42YOACValue399);
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] ||
          (blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] = {});
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id].endLeft =
          blockDiagramVD42YOACValue400;
        blockDiagramVD42YOACHelper9(
          blockDiagramVD42YOACValue157,
          blockDiagramVD42YOACParam19.endLabelLeft,
        );
      }
      if (blockDiagramVD42YOACParam19.endLabelRight) {
        let blockDiagramVD42YOACValue394 = await blockDiagramVD42YOACValue29(
            blockDiagramVD42YOACParam19.endLabelRight,
            blockDiagramVD42YOACParam19.labelStyle,
          ),
          blockDiagramVD42YOACValue395 = blockDiagramVD42YOACParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramVD42YOACValue396 = blockDiagramVD42YOACValue395
            .insert("g")
            .attr("class", "inner");
        blockDiagramVD42YOACValue157 = blockDiagramVD42YOACValue396
          .node()
          .appendChild(blockDiagramVD42YOACValue394);
        let blockDiagramVD42YOACValue397 =
          blockDiagramVD42YOACValue394.getBBox();
        blockDiagramVD42YOACValue396.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACValue397.width / 2 +
            ", " +
            -blockDiagramVD42YOACValue397.height / 2 +
            ")",
        );
        blockDiagramVD42YOACValue395
          .node()
          .appendChild(blockDiagramVD42YOACValue394);
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] ||
          (blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id] = {});
        blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam19.id].endRight =
          blockDiagramVD42YOACValue395;
        blockDiagramVD42YOACHelper9(
          blockDiagramVD42YOACValue157,
          blockDiagramVD42YOACParam19.endLabelRight,
        );
      }
      return blockDiagramVD42YOACValue153;
    },
    "insertEdgeLabel",
  );
function blockDiagramVD42YOACHelper9(
  blockDiagramVD42YOACParam212,
  blockDiagramVD42YOACParam213,
) {
  _chunkABZYJK2DL().flowchart.htmlLabels &&
    blockDiagramVD42YOACParam212 &&
    ((blockDiagramVD42YOACParam212.style.width =
      blockDiagramVD42YOACParam213.length * 9 + "px"),
    (blockDiagramVD42YOACParam212.style.height = "12px"));
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper9, "setTerminalWidth");
var blockDiagramVD42YOACValue36 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam35, blockDiagramVD42YOACParam36) => {
      chunkAGHRB4JFR.debug(
        "Moving label abc88 ",
        blockDiagramVD42YOACParam35.id,
        blockDiagramVD42YOACParam35.label,
        blockDiagramVD42YOACValue33[blockDiagramVD42YOACParam35.id],
        blockDiagramVD42YOACParam36,
      );
      let blockDiagramVD42YOACValue195 = blockDiagramVD42YOACParam36.updatedPath
          ? blockDiagramVD42YOACParam36.updatedPath
          : blockDiagramVD42YOACParam36.originalPath,
        { subGraphTitleTotalMargin } = chunkCVBHYZKI(_chunkABZYJK2DL());
      if (blockDiagramVD42YOACParam35.label) {
        let blockDiagramVD42YOACValue412 =
            blockDiagramVD42YOACValue33[blockDiagramVD42YOACParam35.id],
          blockDiagramVD42YOACValue413 = blockDiagramVD42YOACParam35.x,
          blockDiagramVD42YOACValue414 = blockDiagramVD42YOACParam35.y;
        if (blockDiagramVD42YOACValue195) {
          let blockDiagramVD42YOACValue451 = chunkS3R3BYOJH.calcLabelPosition(
            blockDiagramVD42YOACValue195,
          );
          chunkAGHRB4JFR.debug(
            "Moving label " + blockDiagramVD42YOACParam35.label + " from (",
            blockDiagramVD42YOACValue413,
            ",",
            blockDiagramVD42YOACValue414,
            ") to (",
            blockDiagramVD42YOACValue451.x,
            ",",
            blockDiagramVD42YOACValue451.y,
            ") abc88",
          );
          blockDiagramVD42YOACParam36.updatedPath &&
            ((blockDiagramVD42YOACValue413 = blockDiagramVD42YOACValue451.x),
            (blockDiagramVD42YOACValue414 = blockDiagramVD42YOACValue451.y));
        }
        blockDiagramVD42YOACValue412.attr(
          "transform",
          `translate(${blockDiagramVD42YOACValue413}, ${blockDiagramVD42YOACValue414 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (blockDiagramVD42YOACParam35.startLabelLeft) {
        let blockDiagramVD42YOACValue445 =
            blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam35.id]
              .startLeft,
          blockDiagramVD42YOACValue446 = blockDiagramVD42YOACParam35.x,
          blockDiagramVD42YOACValue447 = blockDiagramVD42YOACParam35.y;
        if (blockDiagramVD42YOACValue195) {
          let blockDiagramVD42YOACValue515 =
            chunkS3R3BYOJH.calcTerminalLabelPosition(
              blockDiagramVD42YOACParam35.arrowTypeStart ? 10 : 0,
              "start_left",
              blockDiagramVD42YOACValue195,
            );
          blockDiagramVD42YOACValue446 = blockDiagramVD42YOACValue515.x;
          blockDiagramVD42YOACValue447 = blockDiagramVD42YOACValue515.y;
        }
        blockDiagramVD42YOACValue445.attr(
          "transform",
          `translate(${blockDiagramVD42YOACValue446}, ${blockDiagramVD42YOACValue447})`,
        );
      }
      if (blockDiagramVD42YOACParam35.startLabelRight) {
        let blockDiagramVD42YOACValue442 =
            blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam35.id]
              .startRight,
          blockDiagramVD42YOACValue443 = blockDiagramVD42YOACParam35.x,
          blockDiagramVD42YOACValue444 = blockDiagramVD42YOACParam35.y;
        if (blockDiagramVD42YOACValue195) {
          let blockDiagramVD42YOACValue514 =
            chunkS3R3BYOJH.calcTerminalLabelPosition(
              blockDiagramVD42YOACParam35.arrowTypeStart ? 10 : 0,
              "start_right",
              blockDiagramVD42YOACValue195,
            );
          blockDiagramVD42YOACValue443 = blockDiagramVD42YOACValue514.x;
          blockDiagramVD42YOACValue444 = blockDiagramVD42YOACValue514.y;
        }
        blockDiagramVD42YOACValue442.attr(
          "transform",
          `translate(${blockDiagramVD42YOACValue443}, ${blockDiagramVD42YOACValue444})`,
        );
      }
      if (blockDiagramVD42YOACParam35.endLabelLeft) {
        let blockDiagramVD42YOACValue452 =
            blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam35.id].endLeft,
          blockDiagramVD42YOACValue453 = blockDiagramVD42YOACParam35.x,
          blockDiagramVD42YOACValue454 = blockDiagramVD42YOACParam35.y;
        if (blockDiagramVD42YOACValue195) {
          let blockDiagramVD42YOACValue518 =
            chunkS3R3BYOJH.calcTerminalLabelPosition(
              blockDiagramVD42YOACParam35.arrowTypeEnd ? 10 : 0,
              "end_left",
              blockDiagramVD42YOACValue195,
            );
          blockDiagramVD42YOACValue453 = blockDiagramVD42YOACValue518.x;
          blockDiagramVD42YOACValue454 = blockDiagramVD42YOACValue518.y;
        }
        blockDiagramVD42YOACValue452.attr(
          "transform",
          `translate(${blockDiagramVD42YOACValue453}, ${blockDiagramVD42YOACValue454})`,
        );
      }
      if (blockDiagramVD42YOACParam35.endLabelRight) {
        let blockDiagramVD42YOACValue448 =
            blockDiagramVD42YOACValue34[blockDiagramVD42YOACParam35.id]
              .endRight,
          blockDiagramVD42YOACValue449 = blockDiagramVD42YOACParam35.x,
          blockDiagramVD42YOACValue450 = blockDiagramVD42YOACParam35.y;
        if (blockDiagramVD42YOACValue195) {
          let blockDiagramVD42YOACValue517 =
            chunkS3R3BYOJH.calcTerminalLabelPosition(
              blockDiagramVD42YOACParam35.arrowTypeEnd ? 10 : 0,
              "end_right",
              blockDiagramVD42YOACValue195,
            );
          blockDiagramVD42YOACValue449 = blockDiagramVD42YOACValue517.x;
          blockDiagramVD42YOACValue450 = blockDiagramVD42YOACValue517.y;
        }
        blockDiagramVD42YOACValue448.attr(
          "transform",
          `translate(${blockDiagramVD42YOACValue449}, ${blockDiagramVD42YOACValue450})`,
        );
      }
    },
    "positionEdgeLabel",
  ),
  blockDiagramVD42YOACValue37 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam196, blockDiagramVD42YOACParam197) => {
      let blockDiagramVD42YOACValue504 = blockDiagramVD42YOACParam196.x,
        blockDiagramVD42YOACValue505 = blockDiagramVD42YOACParam196.y,
        blockDiagramVD42YOACValue506 = Math.abs(
          blockDiagramVD42YOACParam197.x - blockDiagramVD42YOACValue504,
        ),
        blockDiagramVD42YOACValue507 = Math.abs(
          blockDiagramVD42YOACParam197.y - blockDiagramVD42YOACValue505,
        ),
        blockDiagramVD42YOACValue508 = blockDiagramVD42YOACParam196.width / 2,
        blockDiagramVD42YOACValue509 = blockDiagramVD42YOACParam196.height / 2;
      return (
        blockDiagramVD42YOACValue506 >= blockDiagramVD42YOACValue508 ||
        blockDiagramVD42YOACValue507 >= blockDiagramVD42YOACValue509
      );
    },
    "outsideNode",
  ),
  blockDiagramVD42YOACValue38 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam56,
      blockDiagramVD42YOACParam57,
      blockDiagramVD42YOACParam58,
    ) => {
      chunkAGHRB4JFR.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(blockDiagramVD42YOACParam57)}
  insidePoint : ${JSON.stringify(blockDiagramVD42YOACParam58)}
  node        : x:${blockDiagramVD42YOACParam56.x} y:${blockDiagramVD42YOACParam56.y} w:${blockDiagramVD42YOACParam56.width} h:${blockDiagramVD42YOACParam56.height}`);
      let blockDiagramVD42YOACValue234 = blockDiagramVD42YOACParam56.x,
        blockDiagramVD42YOACValue235 = blockDiagramVD42YOACParam56.y,
        blockDiagramVD42YOACValue236 = Math.abs(
          blockDiagramVD42YOACValue234 - blockDiagramVD42YOACParam58.x,
        ),
        blockDiagramVD42YOACValue237 = blockDiagramVD42YOACParam56.width / 2,
        blockDiagramVD42YOACValue238 =
          blockDiagramVD42YOACParam58.x < blockDiagramVD42YOACParam57.x
            ? blockDiagramVD42YOACValue237 - blockDiagramVD42YOACValue236
            : blockDiagramVD42YOACValue237 + blockDiagramVD42YOACValue236,
        blockDiagramVD42YOACValue239 = blockDiagramVD42YOACParam56.height / 2,
        blockDiagramVD42YOACValue240 = Math.abs(
          blockDiagramVD42YOACParam57.y - blockDiagramVD42YOACParam58.y,
        ),
        blockDiagramVD42YOACValue241 = Math.abs(
          blockDiagramVD42YOACParam57.x - blockDiagramVD42YOACParam58.x,
        );
      if (
        Math.abs(blockDiagramVD42YOACValue235 - blockDiagramVD42YOACParam57.y) *
          blockDiagramVD42YOACValue237 >
        Math.abs(blockDiagramVD42YOACValue234 - blockDiagramVD42YOACParam57.x) *
          blockDiagramVD42YOACValue239
      ) {
        let blockDiagramVD42YOACValue419 =
          blockDiagramVD42YOACParam58.y < blockDiagramVD42YOACParam57.y
            ? blockDiagramVD42YOACParam57.y -
              blockDiagramVD42YOACValue239 -
              blockDiagramVD42YOACValue235
            : blockDiagramVD42YOACValue235 -
              blockDiagramVD42YOACValue239 -
              blockDiagramVD42YOACParam57.y;
        blockDiagramVD42YOACValue238 =
          (blockDiagramVD42YOACValue241 * blockDiagramVD42YOACValue419) /
          blockDiagramVD42YOACValue240;
        let blockDiagramVD42YOACValue420 = {
          x:
            blockDiagramVD42YOACParam58.x < blockDiagramVD42YOACParam57.x
              ? blockDiagramVD42YOACParam58.x + blockDiagramVD42YOACValue238
              : blockDiagramVD42YOACParam58.x -
                blockDiagramVD42YOACValue241 +
                blockDiagramVD42YOACValue238,
          y:
            blockDiagramVD42YOACParam58.y < blockDiagramVD42YOACParam57.y
              ? blockDiagramVD42YOACParam58.y +
                blockDiagramVD42YOACValue240 -
                blockDiagramVD42YOACValue419
              : blockDiagramVD42YOACParam58.y -
                blockDiagramVD42YOACValue240 +
                blockDiagramVD42YOACValue419,
        };
        return (
          blockDiagramVD42YOACValue238 === 0 &&
            ((blockDiagramVD42YOACValue420.x = blockDiagramVD42YOACParam57.x),
            (blockDiagramVD42YOACValue420.y = blockDiagramVD42YOACParam57.y)),
          blockDiagramVD42YOACValue241 === 0 &&
            (blockDiagramVD42YOACValue420.x = blockDiagramVD42YOACParam57.x),
          blockDiagramVD42YOACValue240 === 0 &&
            (blockDiagramVD42YOACValue420.y = blockDiagramVD42YOACParam57.y),
          chunkAGHRB4JFR.debug(
            `abc89 topp/bott calc, Q ${blockDiagramVD42YOACValue240}, q ${blockDiagramVD42YOACValue419}, R ${blockDiagramVD42YOACValue241}, r ${blockDiagramVD42YOACValue238}`,
            blockDiagramVD42YOACValue420,
          ),
          blockDiagramVD42YOACValue420
        );
      } else {
        blockDiagramVD42YOACValue238 =
          blockDiagramVD42YOACParam58.x < blockDiagramVD42YOACParam57.x
            ? blockDiagramVD42YOACParam57.x -
              blockDiagramVD42YOACValue237 -
              blockDiagramVD42YOACValue234
            : blockDiagramVD42YOACValue234 -
              blockDiagramVD42YOACValue237 -
              blockDiagramVD42YOACParam57.x;
        let blockDiagramVD42YOACValue415 =
            (blockDiagramVD42YOACValue240 * blockDiagramVD42YOACValue238) /
            blockDiagramVD42YOACValue241,
          blockDiagramVD42YOACValue416 =
            blockDiagramVD42YOACParam58.x < blockDiagramVD42YOACParam57.x
              ? blockDiagramVD42YOACParam58.x +
                blockDiagramVD42YOACValue241 -
                blockDiagramVD42YOACValue238
              : blockDiagramVD42YOACParam58.x -
                blockDiagramVD42YOACValue241 +
                blockDiagramVD42YOACValue238,
          blockDiagramVD42YOACValue417 =
            blockDiagramVD42YOACParam58.y < blockDiagramVD42YOACParam57.y
              ? blockDiagramVD42YOACParam58.y + blockDiagramVD42YOACValue415
              : blockDiagramVD42YOACParam58.y - blockDiagramVD42YOACValue415;
        return (
          chunkAGHRB4JFR.debug(
            `sides calc abc89, Q ${blockDiagramVD42YOACValue240}, q ${blockDiagramVD42YOACValue415}, R ${blockDiagramVD42YOACValue241}, r ${blockDiagramVD42YOACValue238}`,
            {
              _x: blockDiagramVD42YOACValue416,
              _y: blockDiagramVD42YOACValue417,
            },
          ),
          blockDiagramVD42YOACValue238 === 0 &&
            ((blockDiagramVD42YOACValue416 = blockDiagramVD42YOACParam57.x),
            (blockDiagramVD42YOACValue417 = blockDiagramVD42YOACParam57.y)),
          blockDiagramVD42YOACValue241 === 0 &&
            (blockDiagramVD42YOACValue416 = blockDiagramVD42YOACParam57.x),
          blockDiagramVD42YOACValue240 === 0 &&
            (blockDiagramVD42YOACValue417 = blockDiagramVD42YOACParam57.y),
          {
            x: blockDiagramVD42YOACValue416,
            y: blockDiagramVD42YOACValue417,
          }
        );
      }
    },
    "intersection",
  ),
  blockDiagramVD42YOACValue39 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam150, blockDiagramVD42YOACParam151) => {
      chunkAGHRB4JFR.debug(
        "abc88 cutPathAtIntersect",
        blockDiagramVD42YOACParam150,
        blockDiagramVD42YOACParam151,
      );
      let blockDiagramVD42YOACValue389 = [],
        blockDiagramVD42YOACValue390 = blockDiagramVD42YOACParam150[0],
        blockDiagramVD42YOACValue391 = false;
      return (
        blockDiagramVD42YOACParam150.forEach((item) => {
          if (
            !blockDiagramVD42YOACValue37(blockDiagramVD42YOACParam151, item) &&
            !blockDiagramVD42YOACValue391
          ) {
            let blockDiagramVD42YOACValue480 = blockDiagramVD42YOACValue38(
                blockDiagramVD42YOACParam151,
                blockDiagramVD42YOACValue390,
                item,
              ),
              blockDiagramVD42YOACValue481 = false;
            blockDiagramVD42YOACValue389.forEach((_item) => {
              blockDiagramVD42YOACValue481 ||=
                _item.x === blockDiagramVD42YOACValue480.x &&
                _item.y === blockDiagramVD42YOACValue480.y;
            });
            blockDiagramVD42YOACValue389.some(
              (_item) =>
                _item.x === blockDiagramVD42YOACValue480.x &&
                _item.y === blockDiagramVD42YOACValue480.y,
            ) ||
              blockDiagramVD42YOACValue389.push(blockDiagramVD42YOACValue480);
            blockDiagramVD42YOACValue391 = true;
          } else {
            blockDiagramVD42YOACValue390 = item;
            blockDiagramVD42YOACValue391 ||
              blockDiagramVD42YOACValue389.push(item);
          }
        }),
        blockDiagramVD42YOACValue389
      );
    },
    "cutPathAtIntersect",
  ),
  blockDiagramVD42YOACValue40 = chunkAGHRB4JFN(function (
    blockDiagramVD42YOACParam40,
    blockDiagramVD42YOACParam41,
    blockDiagramVD42YOACParam42,
    blockDiagramVD42YOACParam43,
    blockDiagramVD42YOACParam44,
    blockDiagramVD42YOACParam45,
    blockDiagramVD42YOACParam46,
  ) {
    let blockDiagramVD42YOACValue204 = blockDiagramVD42YOACParam42.points;
    chunkAGHRB4JFR.debug(
      "abc88 InsertEdge: edge=",
      blockDiagramVD42YOACParam42,
      "e=",
      blockDiagramVD42YOACParam41,
    );
    let blockDiagramVD42YOACValue205 = false,
      blockDiagramVD42YOACValue206 = blockDiagramVD42YOACParam45.node(
        blockDiagramVD42YOACParam41.v,
      );
    var blockDiagramVD42YOACValue207 = blockDiagramVD42YOACParam45.node(
      blockDiagramVD42YOACParam41.w,
    );
    blockDiagramVD42YOACValue207?.intersect &&
      blockDiagramVD42YOACValue206?.intersect &&
      ((blockDiagramVD42YOACValue204 = blockDiagramVD42YOACValue204.slice(
        1,
        blockDiagramVD42YOACParam42.points.length - 1,
      )),
      blockDiagramVD42YOACValue204.unshift(
        blockDiagramVD42YOACValue206.intersect(blockDiagramVD42YOACValue204[0]),
      ),
      blockDiagramVD42YOACValue204.push(
        blockDiagramVD42YOACValue207.intersect(
          blockDiagramVD42YOACValue204[blockDiagramVD42YOACValue204.length - 1],
        ),
      ));
    blockDiagramVD42YOACParam42.toCluster &&
      (chunkAGHRB4JFR.debug(
        "to cluster abc88",
        blockDiagramVD42YOACParam43[blockDiagramVD42YOACParam42.toCluster],
      ),
      (blockDiagramVD42YOACValue204 = blockDiagramVD42YOACValue39(
        blockDiagramVD42YOACParam42.points,
        blockDiagramVD42YOACParam43[blockDiagramVD42YOACParam42.toCluster].node,
      )),
      (blockDiagramVD42YOACValue205 = true));
    blockDiagramVD42YOACParam42.fromCluster &&
      (chunkAGHRB4JFR.debug(
        "from cluster abc88",
        blockDiagramVD42YOACParam43[blockDiagramVD42YOACParam42.fromCluster],
      ),
      (blockDiagramVD42YOACValue204 = blockDiagramVD42YOACValue39(
        blockDiagramVD42YOACValue204.reverse(),
        blockDiagramVD42YOACParam43[blockDiagramVD42YOACParam42.fromCluster]
          .node,
      ).reverse()),
      (blockDiagramVD42YOACValue205 = true));
    let blockDiagramVD42YOACValue208 = blockDiagramVD42YOACValue204.filter(
        (item) => !Number.isNaN(item.y),
      ),
      blockDiagramVD42YOACValue209 = stepH;
    blockDiagramVD42YOACParam42.curve &&
      (blockDiagramVD42YOACParam44 === "graph" ||
        blockDiagramVD42YOACParam44 === "flowchart") &&
      (blockDiagramVD42YOACValue209 = blockDiagramVD42YOACParam42.curve);
    let { x: _x, y: blockDiagramVD42YOACValue210 } = chunkHN2XXSSUT(
        blockDiagramVD42YOACParam42,
      ),
      blockDiagramVD42YOACValue211 = line()
        .x(_x)
        .y(blockDiagramVD42YOACValue210)
        .curve(blockDiagramVD42YOACValue209),
      blockDiagramVD42YOACValue212;
    switch (blockDiagramVD42YOACParam42.thickness) {
      case "normal":
        blockDiagramVD42YOACValue212 = "edge-thickness-normal";
        break;
      case "thick":
        blockDiagramVD42YOACValue212 = "edge-thickness-thick";
        break;
      case "invisible":
        blockDiagramVD42YOACValue212 = "edge-thickness-thick";
        break;
      default:
        blockDiagramVD42YOACValue212 = "";
    }
    switch (blockDiagramVD42YOACParam42.pattern) {
      case "solid":
        blockDiagramVD42YOACValue212 += " edge-pattern-solid";
        break;
      case "dotted":
        blockDiagramVD42YOACValue212 += " edge-pattern-dotted";
        break;
      case "dashed":
        blockDiagramVD42YOACValue212 += " edge-pattern-dashed";
        break;
    }
    let blockDiagramVD42YOACValue213 = blockDiagramVD42YOACParam40
        .append("path")
        .attr("d", blockDiagramVD42YOACValue211(blockDiagramVD42YOACValue208))
        .attr("id", blockDiagramVD42YOACParam42.id)
        .attr(
          "class",
          " " +
            blockDiagramVD42YOACValue212 +
            (blockDiagramVD42YOACParam42.classes
              ? " " + blockDiagramVD42YOACParam42.classes
              : ""),
        )
        .attr("style", blockDiagramVD42YOACParam42.style),
      blockDiagramVD42YOACValue214 = "";
    (_chunkABZYJK2DL().flowchart.arrowMarkerAbsolute ||
      _chunkABZYJK2DL().state.arrowMarkerAbsolute) &&
      (blockDiagramVD42YOACValue214 = chunkABZYJK2DW(true));
    blockDiagramVD42YOACValue30(
      blockDiagramVD42YOACValue213,
      blockDiagramVD42YOACParam42,
      blockDiagramVD42YOACValue214,
      blockDiagramVD42YOACParam46,
      blockDiagramVD42YOACParam44,
    );
    let blockDiagramVD42YOACValue215 = {};
    return (
      blockDiagramVD42YOACValue205 &&
        (blockDiagramVD42YOACValue215.updatedPath =
          blockDiagramVD42YOACValue204),
      (blockDiagramVD42YOACValue215.originalPath =
        blockDiagramVD42YOACParam42.points),
      blockDiagramVD42YOACValue215
    );
  }, "insertEdge"),
  blockDiagramVD42YOACValue41 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam174) => {
      let blockDiagramVD42YOACValue455 = new Set();
      for (let blockDiagramVD42YOACValue479 of blockDiagramVD42YOACParam174)
        switch (blockDiagramVD42YOACValue479) {
          case "x":
            blockDiagramVD42YOACValue455.add("right");
            blockDiagramVD42YOACValue455.add("left");
            break;
          case "y":
            blockDiagramVD42YOACValue455.add("up");
            blockDiagramVD42YOACValue455.add("down");
            break;
          default:
            blockDiagramVD42YOACValue455.add(blockDiagramVD42YOACValue479);
            break;
        }
      return blockDiagramVD42YOACValue455;
    },
    "expandAndDeduplicateDirections",
  ),
  blockDiagramVD42YOACValue42 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam12,
      blockDiagramVD42YOACParam13,
      blockDiagramVD42YOACParam14,
    ) => {
      let blockDiagramVD42YOACValue97 = blockDiagramVD42YOACValue41(
          blockDiagramVD42YOACParam12,
        ),
        blockDiagramVD42YOACValue98 =
          blockDiagramVD42YOACParam13.height +
          2 * blockDiagramVD42YOACParam14.padding,
        blockDiagramVD42YOACValue99 = blockDiagramVD42YOACValue98 / 2,
        blockDiagramVD42YOACValue100 =
          blockDiagramVD42YOACParam13.width +
          2 * blockDiagramVD42YOACValue99 +
          blockDiagramVD42YOACParam14.padding,
        blockDiagramVD42YOACValue101 = blockDiagramVD42YOACParam14.padding / 2;
      return blockDiagramVD42YOACValue97.has("right") &&
        blockDiagramVD42YOACValue97.has("left") &&
        blockDiagramVD42YOACValue97.has("up") &&
        blockDiagramVD42YOACValue97.has("down")
        ? [
            {
              x: 0,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACValue99,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACValue100 / 2,
              y: 2 * blockDiagramVD42YOACValue101,
            },
            {
              x: blockDiagramVD42YOACValue100 - blockDiagramVD42YOACValue99,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACValue100,
              y: 0,
            },
            {
              x: blockDiagramVD42YOACValue100,
              y: -blockDiagramVD42YOACValue98 / 3,
            },
            {
              x:
                blockDiagramVD42YOACValue100 + 2 * blockDiagramVD42YOACValue101,
              y: -blockDiagramVD42YOACValue98 / 2,
            },
            {
              x: blockDiagramVD42YOACValue100,
              y: (-2 * blockDiagramVD42YOACValue98) / 3,
            },
            {
              x: blockDiagramVD42YOACValue100,
              y: -blockDiagramVD42YOACValue98,
            },
            {
              x: blockDiagramVD42YOACValue100 - blockDiagramVD42YOACValue99,
              y: -blockDiagramVD42YOACValue98,
            },
            {
              x: blockDiagramVD42YOACValue100 / 2,
              y:
                -blockDiagramVD42YOACValue98 - 2 * blockDiagramVD42YOACValue101,
            },
            {
              x: blockDiagramVD42YOACValue99,
              y: -blockDiagramVD42YOACValue98,
            },
            {
              x: 0,
              y: -blockDiagramVD42YOACValue98,
            },
            {
              x: 0,
              y: (-2 * blockDiagramVD42YOACValue98) / 3,
            },
            {
              x: -2 * blockDiagramVD42YOACValue101,
              y: -blockDiagramVD42YOACValue98 / 2,
            },
            {
              x: 0,
              y: -blockDiagramVD42YOACValue98 / 3,
            },
          ]
        : blockDiagramVD42YOACValue97.has("right") &&
            blockDiagramVD42YOACValue97.has("left") &&
            blockDiagramVD42YOACValue97.has("up")
          ? [
              {
                x: blockDiagramVD42YOACValue99,
                y: 0,
              },
              {
                x: blockDiagramVD42YOACValue100 - blockDiagramVD42YOACValue99,
                y: 0,
              },
              {
                x: blockDiagramVD42YOACValue100,
                y: -blockDiagramVD42YOACValue98 / 2,
              },
              {
                x: blockDiagramVD42YOACValue100 - blockDiagramVD42YOACValue99,
                y: -blockDiagramVD42YOACValue98,
              },
              {
                x: blockDiagramVD42YOACValue99,
                y: -blockDiagramVD42YOACValue98,
              },
              {
                x: 0,
                y: -blockDiagramVD42YOACValue98 / 2,
              },
            ]
          : blockDiagramVD42YOACValue97.has("right") &&
              blockDiagramVD42YOACValue97.has("left") &&
              blockDiagramVD42YOACValue97.has("down")
            ? [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: blockDiagramVD42YOACValue99,
                  y: -blockDiagramVD42YOACValue98,
                },
                {
                  x: blockDiagramVD42YOACValue100 - blockDiagramVD42YOACValue99,
                  y: -blockDiagramVD42YOACValue98,
                },
                {
                  x: blockDiagramVD42YOACValue100,
                  y: 0,
                },
              ]
            : blockDiagramVD42YOACValue97.has("right") &&
                blockDiagramVD42YOACValue97.has("up") &&
                blockDiagramVD42YOACValue97.has("down")
              ? [
                  {
                    x: 0,
                    y: 0,
                  },
                  {
                    x: blockDiagramVD42YOACValue100,
                    y: -blockDiagramVD42YOACValue99,
                  },
                  {
                    x: blockDiagramVD42YOACValue100,
                    y:
                      -blockDiagramVD42YOACValue98 +
                      blockDiagramVD42YOACValue99,
                  },
                  {
                    x: 0,
                    y: -blockDiagramVD42YOACValue98,
                  },
                ]
              : blockDiagramVD42YOACValue97.has("left") &&
                  blockDiagramVD42YOACValue97.has("up") &&
                  blockDiagramVD42YOACValue97.has("down")
                ? [
                    {
                      x: blockDiagramVD42YOACValue100,
                      y: 0,
                    },
                    {
                      x: 0,
                      y: -blockDiagramVD42YOACValue99,
                    },
                    {
                      x: 0,
                      y:
                        -blockDiagramVD42YOACValue98 +
                        blockDiagramVD42YOACValue99,
                    },
                    {
                      x: blockDiagramVD42YOACValue100,
                      y: -blockDiagramVD42YOACValue98,
                    },
                  ]
                : blockDiagramVD42YOACValue97.has("right") &&
                    blockDiagramVD42YOACValue97.has("left")
                  ? [
                      {
                        x: blockDiagramVD42YOACValue99,
                        y: 0,
                      },
                      {
                        x: blockDiagramVD42YOACValue99,
                        y: -blockDiagramVD42YOACValue101,
                      },
                      {
                        x:
                          blockDiagramVD42YOACValue100 -
                          blockDiagramVD42YOACValue99,
                        y: -blockDiagramVD42YOACValue101,
                      },
                      {
                        x:
                          blockDiagramVD42YOACValue100 -
                          blockDiagramVD42YOACValue99,
                        y: 0,
                      },
                      {
                        x: blockDiagramVD42YOACValue100,
                        y: -blockDiagramVD42YOACValue98 / 2,
                      },
                      {
                        x:
                          blockDiagramVD42YOACValue100 -
                          blockDiagramVD42YOACValue99,
                        y: -blockDiagramVD42YOACValue98,
                      },
                      {
                        x:
                          blockDiagramVD42YOACValue100 -
                          blockDiagramVD42YOACValue99,
                        y:
                          -blockDiagramVD42YOACValue98 +
                          blockDiagramVD42YOACValue101,
                      },
                      {
                        x: blockDiagramVD42YOACValue99,
                        y:
                          -blockDiagramVD42YOACValue98 +
                          blockDiagramVD42YOACValue101,
                      },
                      {
                        x: blockDiagramVD42YOACValue99,
                        y: -blockDiagramVD42YOACValue98,
                      },
                      {
                        x: 0,
                        y: -blockDiagramVD42YOACValue98 / 2,
                      },
                    ]
                  : blockDiagramVD42YOACValue97.has("up") &&
                      blockDiagramVD42YOACValue97.has("down")
                    ? [
                        {
                          x: blockDiagramVD42YOACValue100 / 2,
                          y: 0,
                        },
                        {
                          x: 0,
                          y: -blockDiagramVD42YOACValue101,
                        },
                        {
                          x: blockDiagramVD42YOACValue99,
                          y: -blockDiagramVD42YOACValue101,
                        },
                        {
                          x: blockDiagramVD42YOACValue99,
                          y:
                            -blockDiagramVD42YOACValue98 +
                            blockDiagramVD42YOACValue101,
                        },
                        {
                          x: 0,
                          y:
                            -blockDiagramVD42YOACValue98 +
                            blockDiagramVD42YOACValue101,
                        },
                        {
                          x: blockDiagramVD42YOACValue100 / 2,
                          y: -blockDiagramVD42YOACValue98,
                        },
                        {
                          x: blockDiagramVD42YOACValue100,
                          y:
                            -blockDiagramVD42YOACValue98 +
                            blockDiagramVD42YOACValue101,
                        },
                        {
                          x:
                            blockDiagramVD42YOACValue100 -
                            blockDiagramVD42YOACValue99,
                          y:
                            -blockDiagramVD42YOACValue98 +
                            blockDiagramVD42YOACValue101,
                        },
                        {
                          x:
                            blockDiagramVD42YOACValue100 -
                            blockDiagramVD42YOACValue99,
                          y: -blockDiagramVD42YOACValue101,
                        },
                        {
                          x: blockDiagramVD42YOACValue100,
                          y: -blockDiagramVD42YOACValue101,
                        },
                      ]
                    : blockDiagramVD42YOACValue97.has("right") &&
                        blockDiagramVD42YOACValue97.has("up")
                      ? [
                          {
                            x: 0,
                            y: 0,
                          },
                          {
                            x: blockDiagramVD42YOACValue100,
                            y: -blockDiagramVD42YOACValue99,
                          },
                          {
                            x: 0,
                            y: -blockDiagramVD42YOACValue98,
                          },
                        ]
                      : blockDiagramVD42YOACValue97.has("right") &&
                          blockDiagramVD42YOACValue97.has("down")
                        ? [
                            {
                              x: 0,
                              y: 0,
                            },
                            {
                              x: blockDiagramVD42YOACValue100,
                              y: 0,
                            },
                            {
                              x: 0,
                              y: -blockDiagramVD42YOACValue98,
                            },
                          ]
                        : blockDiagramVD42YOACValue97.has("left") &&
                            blockDiagramVD42YOACValue97.has("up")
                          ? [
                              {
                                x: blockDiagramVD42YOACValue100,
                                y: 0,
                              },
                              {
                                x: 0,
                                y: -blockDiagramVD42YOACValue99,
                              },
                              {
                                x: blockDiagramVD42YOACValue100,
                                y: -blockDiagramVD42YOACValue98,
                              },
                            ]
                          : blockDiagramVD42YOACValue97.has("left") &&
                              blockDiagramVD42YOACValue97.has("down")
                            ? [
                                {
                                  x: blockDiagramVD42YOACValue100,
                                  y: 0,
                                },
                                {
                                  x: 0,
                                  y: 0,
                                },
                                {
                                  x: blockDiagramVD42YOACValue100,
                                  y: -blockDiagramVD42YOACValue98,
                                },
                              ]
                            : blockDiagramVD42YOACValue97.has("right")
                              ? [
                                  {
                                    x: blockDiagramVD42YOACValue99,
                                    y: -blockDiagramVD42YOACValue101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACValue99,
                                    y: -blockDiagramVD42YOACValue101,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACValue100 -
                                      blockDiagramVD42YOACValue99,
                                    y: -blockDiagramVD42YOACValue101,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACValue100 -
                                      blockDiagramVD42YOACValue99,
                                    y: 0,
                                  },
                                  {
                                    x: blockDiagramVD42YOACValue100,
                                    y: -blockDiagramVD42YOACValue98 / 2,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACValue100 -
                                      blockDiagramVD42YOACValue99,
                                    y: -blockDiagramVD42YOACValue98,
                                  },
                                  {
                                    x:
                                      blockDiagramVD42YOACValue100 -
                                      blockDiagramVD42YOACValue99,
                                    y:
                                      -blockDiagramVD42YOACValue98 +
                                      blockDiagramVD42YOACValue101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACValue99,
                                    y:
                                      -blockDiagramVD42YOACValue98 +
                                      blockDiagramVD42YOACValue101,
                                  },
                                  {
                                    x: blockDiagramVD42YOACValue99,
                                    y:
                                      -blockDiagramVD42YOACValue98 +
                                      blockDiagramVD42YOACValue101,
                                  },
                                ]
                              : blockDiagramVD42YOACValue97.has("left")
                                ? [
                                    {
                                      x: blockDiagramVD42YOACValue99,
                                      y: 0,
                                    },
                                    {
                                      x: blockDiagramVD42YOACValue99,
                                      y: -blockDiagramVD42YOACValue101,
                                    },
                                    {
                                      x:
                                        blockDiagramVD42YOACValue100 -
                                        blockDiagramVD42YOACValue99,
                                      y: -blockDiagramVD42YOACValue101,
                                    },
                                    {
                                      x:
                                        blockDiagramVD42YOACValue100 -
                                        blockDiagramVD42YOACValue99,
                                      y:
                                        -blockDiagramVD42YOACValue98 +
                                        blockDiagramVD42YOACValue101,
                                    },
                                    {
                                      x: blockDiagramVD42YOACValue99,
                                      y:
                                        -blockDiagramVD42YOACValue98 +
                                        blockDiagramVD42YOACValue101,
                                    },
                                    {
                                      x: blockDiagramVD42YOACValue99,
                                      y: -blockDiagramVD42YOACValue98,
                                    },
                                    {
                                      x: 0,
                                      y: -blockDiagramVD42YOACValue98 / 2,
                                    },
                                  ]
                                : blockDiagramVD42YOACValue97.has("up")
                                  ? [
                                      {
                                        x: blockDiagramVD42YOACValue99,
                                        y: -blockDiagramVD42YOACValue101,
                                      },
                                      {
                                        x: blockDiagramVD42YOACValue99,
                                        y:
                                          -blockDiagramVD42YOACValue98 +
                                          blockDiagramVD42YOACValue101,
                                      },
                                      {
                                        x: 0,
                                        y:
                                          -blockDiagramVD42YOACValue98 +
                                          blockDiagramVD42YOACValue101,
                                      },
                                      {
                                        x: blockDiagramVD42YOACValue100 / 2,
                                        y: -blockDiagramVD42YOACValue98,
                                      },
                                      {
                                        x: blockDiagramVD42YOACValue100,
                                        y:
                                          -blockDiagramVD42YOACValue98 +
                                          blockDiagramVD42YOACValue101,
                                      },
                                      {
                                        x:
                                          blockDiagramVD42YOACValue100 -
                                          blockDiagramVD42YOACValue99,
                                        y:
                                          -blockDiagramVD42YOACValue98 +
                                          blockDiagramVD42YOACValue101,
                                      },
                                      {
                                        x:
                                          blockDiagramVD42YOACValue100 -
                                          blockDiagramVD42YOACValue99,
                                        y: -blockDiagramVD42YOACValue101,
                                      },
                                    ]
                                  : blockDiagramVD42YOACValue97.has("down")
                                    ? [
                                        {
                                          x: blockDiagramVD42YOACValue100 / 2,
                                          y: 0,
                                        },
                                        {
                                          x: 0,
                                          y: -blockDiagramVD42YOACValue101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACValue99,
                                          y: -blockDiagramVD42YOACValue101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACValue99,
                                          y:
                                            -blockDiagramVD42YOACValue98 +
                                            blockDiagramVD42YOACValue101,
                                        },
                                        {
                                          x:
                                            blockDiagramVD42YOACValue100 -
                                            blockDiagramVD42YOACValue99,
                                          y:
                                            -blockDiagramVD42YOACValue98 +
                                            blockDiagramVD42YOACValue101,
                                        },
                                        {
                                          x:
                                            blockDiagramVD42YOACValue100 -
                                            blockDiagramVD42YOACValue99,
                                          y: -blockDiagramVD42YOACValue101,
                                        },
                                        {
                                          x: blockDiagramVD42YOACValue100,
                                          y: -blockDiagramVD42YOACValue101,
                                        },
                                      ]
                                    : [
                                        {
                                          x: 0,
                                          y: 0,
                                        },
                                      ];
    },
    "getArrowPoints",
  );
function blockDiagramVD42YOACHelper10(
  blockDiagramVD42YOACParam274,
  blockDiagramVD42YOACParam275,
) {
  return blockDiagramVD42YOACParam274.intersect(blockDiagramVD42YOACParam275);
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper10, "intersectNode");
var blockDiagramVD42YOACValue43 = blockDiagramVD42YOACHelper10;
function blockDiagramVD42YOACHelper11(
  blockDiagramVD42YOACParam178,
  blockDiagramVD42YOACParam179,
  blockDiagramVD42YOACParam180,
  blockDiagramVD42YOACParam181,
) {
  var blockDiagramVD42YOACValue462 = blockDiagramVD42YOACParam178.x,
    blockDiagramVD42YOACValue463 = blockDiagramVD42YOACParam178.y,
    blockDiagramVD42YOACValue464 =
      blockDiagramVD42YOACValue462 - blockDiagramVD42YOACParam181.x,
    blockDiagramVD42YOACValue465 =
      blockDiagramVD42YOACValue463 - blockDiagramVD42YOACParam181.y,
    blockDiagramVD42YOACValue466 = Math.sqrt(
      blockDiagramVD42YOACParam179 *
        blockDiagramVD42YOACParam179 *
        blockDiagramVD42YOACValue465 *
        blockDiagramVD42YOACValue465 +
        blockDiagramVD42YOACParam180 *
          blockDiagramVD42YOACParam180 *
          blockDiagramVD42YOACValue464 *
          blockDiagramVD42YOACValue464,
    ),
    blockDiagramVD42YOACValue467 = Math.abs(
      (blockDiagramVD42YOACParam179 *
        blockDiagramVD42YOACParam180 *
        blockDiagramVD42YOACValue464) /
        blockDiagramVD42YOACValue466,
    );
  blockDiagramVD42YOACParam181.x < blockDiagramVD42YOACValue462 &&
    (blockDiagramVD42YOACValue467 = -blockDiagramVD42YOACValue467);
  var blockDiagramVD42YOACValue468 = Math.abs(
    (blockDiagramVD42YOACParam179 *
      blockDiagramVD42YOACParam180 *
      blockDiagramVD42YOACValue465) /
      blockDiagramVD42YOACValue466,
  );
  return (
    blockDiagramVD42YOACParam181.y < blockDiagramVD42YOACValue463 &&
      (blockDiagramVD42YOACValue468 = -blockDiagramVD42YOACValue468),
    {
      x: blockDiagramVD42YOACValue462 + blockDiagramVD42YOACValue467,
      y: blockDiagramVD42YOACValue463 + blockDiagramVD42YOACValue468,
    }
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper11, "intersectEllipse");
var blockDiagramVD42YOACValue44 = blockDiagramVD42YOACHelper11;
function blockDiagramVD42YOACHelper12(
  blockDiagramVD42YOACParam269,
  blockDiagramVD42YOACParam270,
  blockDiagramVD42YOACParam271,
) {
  return blockDiagramVD42YOACValue44(
    blockDiagramVD42YOACParam269,
    blockDiagramVD42YOACParam270,
    blockDiagramVD42YOACParam270,
    blockDiagramVD42YOACParam271,
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper12, "intersectCircle");
var blockDiagramVD42YOACValue45 = blockDiagramVD42YOACHelper12;
function blockDiagramVD42YOACHelper13(
  blockDiagramVD42YOACParam105,
  blockDiagramVD42YOACParam106,
  blockDiagramVD42YOACParam107,
  blockDiagramVD42YOACParam108,
) {
  var blockDiagramVD42YOACValue300 =
      blockDiagramVD42YOACParam106.y - blockDiagramVD42YOACParam105.y,
    blockDiagramVD42YOACValue301,
    blockDiagramVD42YOACValue302 =
      blockDiagramVD42YOACParam105.x - blockDiagramVD42YOACParam106.x,
    blockDiagramVD42YOACValue303,
    blockDiagramVD42YOACValue304 =
      blockDiagramVD42YOACParam106.x * blockDiagramVD42YOACParam105.y -
      blockDiagramVD42YOACParam105.x * blockDiagramVD42YOACParam106.y,
    blockDiagramVD42YOACValue305,
    blockDiagramVD42YOACValue306,
    blockDiagramVD42YOACValue307,
    blockDiagramVD42YOACValue308 =
      blockDiagramVD42YOACValue300 * blockDiagramVD42YOACParam107.x +
      blockDiagramVD42YOACValue302 * blockDiagramVD42YOACParam107.y +
      blockDiagramVD42YOACValue304,
    blockDiagramVD42YOACValue309 =
      blockDiagramVD42YOACValue300 * blockDiagramVD42YOACParam108.x +
      blockDiagramVD42YOACValue302 * blockDiagramVD42YOACParam108.y +
      blockDiagramVD42YOACValue304,
    blockDiagramVD42YOACValue310,
    blockDiagramVD42YOACValue311,
    blockDiagramVD42YOACValue312,
    blockDiagramVD42YOACValue313,
    blockDiagramVD42YOACValue314;
  if (
    !(
      blockDiagramVD42YOACValue308 !== 0 &&
      blockDiagramVD42YOACValue309 !== 0 &&
      blockDiagramVD42YOACHelper14(
        blockDiagramVD42YOACValue308,
        blockDiagramVD42YOACValue309,
      )
    ) &&
    ((blockDiagramVD42YOACValue301 =
      blockDiagramVD42YOACParam108.y - blockDiagramVD42YOACParam107.y),
    (blockDiagramVD42YOACValue303 =
      blockDiagramVD42YOACParam107.x - blockDiagramVD42YOACParam108.x),
    (blockDiagramVD42YOACValue305 =
      blockDiagramVD42YOACParam108.x * blockDiagramVD42YOACParam107.y -
      blockDiagramVD42YOACParam107.x * blockDiagramVD42YOACParam108.y),
    (blockDiagramVD42YOACValue306 =
      blockDiagramVD42YOACValue301 * blockDiagramVD42YOACParam105.x +
      blockDiagramVD42YOACValue303 * blockDiagramVD42YOACParam105.y +
      blockDiagramVD42YOACValue305),
    (blockDiagramVD42YOACValue307 =
      blockDiagramVD42YOACValue301 * blockDiagramVD42YOACParam106.x +
      blockDiagramVD42YOACValue303 * blockDiagramVD42YOACParam106.y +
      blockDiagramVD42YOACValue305),
    !(
      blockDiagramVD42YOACValue306 !== 0 &&
      blockDiagramVD42YOACValue307 !== 0 &&
      blockDiagramVD42YOACHelper14(
        blockDiagramVD42YOACValue306,
        blockDiagramVD42YOACValue307,
      )
    ) &&
      ((blockDiagramVD42YOACValue310 =
        blockDiagramVD42YOACValue300 * blockDiagramVD42YOACValue303 -
        blockDiagramVD42YOACValue301 * blockDiagramVD42YOACValue302),
      blockDiagramVD42YOACValue310 !== 0))
  )
    return (
      (blockDiagramVD42YOACValue311 = Math.abs(
        blockDiagramVD42YOACValue310 / 2,
      )),
      (blockDiagramVD42YOACValue312 =
        blockDiagramVD42YOACValue302 * blockDiagramVD42YOACValue305 -
        blockDiagramVD42YOACValue303 * blockDiagramVD42YOACValue304),
      (blockDiagramVD42YOACValue313 =
        blockDiagramVD42YOACValue312 < 0
          ? (blockDiagramVD42YOACValue312 - blockDiagramVD42YOACValue311) /
            blockDiagramVD42YOACValue310
          : (blockDiagramVD42YOACValue312 + blockDiagramVD42YOACValue311) /
            blockDiagramVD42YOACValue310),
      (blockDiagramVD42YOACValue312 =
        blockDiagramVD42YOACValue301 * blockDiagramVD42YOACValue304 -
        blockDiagramVD42YOACValue300 * blockDiagramVD42YOACValue305),
      (blockDiagramVD42YOACValue314 =
        blockDiagramVD42YOACValue312 < 0
          ? (blockDiagramVD42YOACValue312 - blockDiagramVD42YOACValue311) /
            blockDiagramVD42YOACValue310
          : (blockDiagramVD42YOACValue312 + blockDiagramVD42YOACValue311) /
            blockDiagramVD42YOACValue310),
      {
        x: blockDiagramVD42YOACValue313,
        y: blockDiagramVD42YOACValue314,
      }
    );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper13, "intersectLine");
function blockDiagramVD42YOACHelper14(
  blockDiagramVD42YOACParam277,
  blockDiagramVD42YOACParam278,
) {
  return blockDiagramVD42YOACParam277 * blockDiagramVD42YOACParam278 > 0;
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper14, "sameSign");
var blockDiagramVD42YOACValue46 = blockDiagramVD42YOACHelper13,
  blockDiagramVD42YOACValue47 = blockDiagramVD42YOACHelper15;
function blockDiagramVD42YOACHelper15(
  blockDiagramVD42YOACParam86,
  blockDiagramVD42YOACParam87,
  blockDiagramVD42YOACParam88,
) {
  var blockDiagramVD42YOACValue286 = blockDiagramVD42YOACParam86.x,
    blockDiagramVD42YOACValue287 = blockDiagramVD42YOACParam86.y,
    blockDiagramVD42YOACValue288 = [],
    blockDiagramVD42YOACValue289 = 1 / 0,
    blockDiagramVD42YOACValue290 = 1 / 0;
  typeof blockDiagramVD42YOACParam87.forEach == "function"
    ? blockDiagramVD42YOACParam87.forEach(function (item) {
        blockDiagramVD42YOACValue289 = Math.min(
          blockDiagramVD42YOACValue289,
          item.x,
        );
        blockDiagramVD42YOACValue290 = Math.min(
          blockDiagramVD42YOACValue290,
          item.y,
        );
      })
    : ((blockDiagramVD42YOACValue289 = Math.min(
        blockDiagramVD42YOACValue289,
        blockDiagramVD42YOACParam87.x,
      )),
      (blockDiagramVD42YOACValue290 = Math.min(
        blockDiagramVD42YOACValue290,
        blockDiagramVD42YOACParam87.y,
      )));
  for (
    var blockDiagramVD42YOACValue291 =
        blockDiagramVD42YOACValue286 -
        blockDiagramVD42YOACParam86.width / 2 -
        blockDiagramVD42YOACValue289,
      blockDiagramVD42YOACValue292 =
        blockDiagramVD42YOACValue287 -
        blockDiagramVD42YOACParam86.height / 2 -
        blockDiagramVD42YOACValue290,
      blockDiagramVD42YOACValue293 = 0;
    blockDiagramVD42YOACValue293 < blockDiagramVD42YOACParam87.length;
    blockDiagramVD42YOACValue293++
  ) {
    var blockDiagramVD42YOACValue294 =
        blockDiagramVD42YOACParam87[blockDiagramVD42YOACValue293],
      blockDiagramVD42YOACValue295 =
        blockDiagramVD42YOACParam87[
          blockDiagramVD42YOACValue293 < blockDiagramVD42YOACParam87.length - 1
            ? blockDiagramVD42YOACValue293 + 1
            : 0
        ],
      blockDiagramVD42YOACValue296 = blockDiagramVD42YOACValue46(
        blockDiagramVD42YOACParam86,
        blockDiagramVD42YOACParam88,
        {
          x: blockDiagramVD42YOACValue291 + blockDiagramVD42YOACValue294.x,
          y: blockDiagramVD42YOACValue292 + blockDiagramVD42YOACValue294.y,
        },
        {
          x: blockDiagramVD42YOACValue291 + blockDiagramVD42YOACValue295.x,
          y: blockDiagramVD42YOACValue292 + blockDiagramVD42YOACValue295.y,
        },
      );
    blockDiagramVD42YOACValue296 &&
      blockDiagramVD42YOACValue288.push(blockDiagramVD42YOACValue296);
  }
  return blockDiagramVD42YOACValue288.length
    ? (blockDiagramVD42YOACValue288.length > 1 &&
        blockDiagramVD42YOACValue288.sort(
          function (
            blockDiagramVD42YOACParam182,
            blockDiagramVD42YOACParam183,
          ) {
            var blockDiagramVD42YOACValue469 =
                blockDiagramVD42YOACParam182.x - blockDiagramVD42YOACParam88.x,
              blockDiagramVD42YOACValue470 =
                blockDiagramVD42YOACParam182.y - blockDiagramVD42YOACParam88.y,
              blockDiagramVD42YOACValue471 = Math.sqrt(
                blockDiagramVD42YOACValue469 * blockDiagramVD42YOACValue469 +
                  blockDiagramVD42YOACValue470 * blockDiagramVD42YOACValue470,
              ),
              blockDiagramVD42YOACValue472 =
                blockDiagramVD42YOACParam183.x - blockDiagramVD42YOACParam88.x,
              blockDiagramVD42YOACValue473 =
                blockDiagramVD42YOACParam183.y - blockDiagramVD42YOACParam88.y,
              blockDiagramVD42YOACValue474 = Math.sqrt(
                blockDiagramVD42YOACValue472 * blockDiagramVD42YOACValue472 +
                  blockDiagramVD42YOACValue473 * blockDiagramVD42YOACValue473,
              );
            return blockDiagramVD42YOACValue471 < blockDiagramVD42YOACValue474
              ? -1
              : blockDiagramVD42YOACValue471 === blockDiagramVD42YOACValue474
                ? 0
                : 1;
          },
        ),
      blockDiagramVD42YOACValue288[0])
    : blockDiagramVD42YOACParam86;
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper15, "intersectPolygon");
var blockDiagramVD42YOACValue48 = {
    node: blockDiagramVD42YOACValue43,
    circle: blockDiagramVD42YOACValue45,
    ellipse: blockDiagramVD42YOACValue44,
    polygon: blockDiagramVD42YOACValue47,
    rect: chunkAGHRB4JFN(
      (blockDiagramVD42YOACParam159, blockDiagramVD42YOACParam160) => {
        var blockDiagramVD42YOACValue423 = blockDiagramVD42YOACParam159.x,
          blockDiagramVD42YOACValue424 = blockDiagramVD42YOACParam159.y,
          blockDiagramVD42YOACValue425 =
            blockDiagramVD42YOACParam160.x - blockDiagramVD42YOACValue423,
          blockDiagramVD42YOACValue426 =
            blockDiagramVD42YOACParam160.y - blockDiagramVD42YOACValue424,
          blockDiagramVD42YOACValue427 = blockDiagramVD42YOACParam159.width / 2,
          blockDiagramVD42YOACValue428 =
            blockDiagramVD42YOACParam159.height / 2,
          blockDiagramVD42YOACValue429,
          blockDiagramVD42YOACValue430;
        return (
          Math.abs(blockDiagramVD42YOACValue426) *
            blockDiagramVD42YOACValue427 >
          Math.abs(blockDiagramVD42YOACValue425) * blockDiagramVD42YOACValue428
            ? (blockDiagramVD42YOACValue426 < 0 &&
                (blockDiagramVD42YOACValue428 = -blockDiagramVD42YOACValue428),
              (blockDiagramVD42YOACValue429 =
                blockDiagramVD42YOACValue426 === 0
                  ? 0
                  : (blockDiagramVD42YOACValue428 *
                      blockDiagramVD42YOACValue425) /
                    blockDiagramVD42YOACValue426),
              (blockDiagramVD42YOACValue430 = blockDiagramVD42YOACValue428))
            : (blockDiagramVD42YOACValue425 < 0 &&
                (blockDiagramVD42YOACValue427 = -blockDiagramVD42YOACValue427),
              (blockDiagramVD42YOACValue429 = blockDiagramVD42YOACValue427),
              (blockDiagramVD42YOACValue430 =
                blockDiagramVD42YOACValue425 === 0
                  ? 0
                  : (blockDiagramVD42YOACValue427 *
                      blockDiagramVD42YOACValue426) /
                    blockDiagramVD42YOACValue425)),
          {
            x: blockDiagramVD42YOACValue423 + blockDiagramVD42YOACValue429,
            y: blockDiagramVD42YOACValue424 + blockDiagramVD42YOACValue430,
          }
        );
      },
      "intersectRect",
    ),
  },
  blockDiagramVD42YOACValue49 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACParam24,
      blockDiagramVD42YOACParam25,
      blockDiagramVD42YOACParam26,
      blockDiagramVD42YOACParam27,
    ) => {
      let blockDiagramVD42YOACValue160 = _chunkABZYJK2DL(),
        blockDiagramVD42YOACValue161,
        blockDiagramVD42YOACValue162 =
          blockDiagramVD42YOACParam25.useHtmlLabels ||
          chunkABZYJK2DV(blockDiagramVD42YOACValue160.flowchart.htmlLabels);
      blockDiagramVD42YOACValue161 =
        blockDiagramVD42YOACParam26 || "node default";
      let blockDiagramVD42YOACValue163 = blockDiagramVD42YOACParam24
          .insert("g")
          .attr("class", blockDiagramVD42YOACValue161)
          .attr(
            "id",
            blockDiagramVD42YOACParam25.domId || blockDiagramVD42YOACParam25.id,
          ),
        blockDiagramVD42YOACValue164 = blockDiagramVD42YOACValue163
          .insert("g")
          .attr("class", "label")
          .attr("style", blockDiagramVD42YOACParam25.labelStyle),
        blockDiagramVD42YOACValue165;
      blockDiagramVD42YOACValue165 =
        blockDiagramVD42YOACParam25.labelText === undefined
          ? ""
          : typeof blockDiagramVD42YOACParam25.labelText == "string"
            ? blockDiagramVD42YOACParam25.labelText
            : blockDiagramVD42YOACParam25.labelText[0];
      let blockDiagramVD42YOACValue166 = blockDiagramVD42YOACValue164.node(),
        blockDiagramVD42YOACValue167;
      blockDiagramVD42YOACValue167 =
        blockDiagramVD42YOACParam25.labelType === "markdown"
          ? chunkJA3XYJ7ZA(
              blockDiagramVD42YOACValue164,
              _chunkABZYJK2DM(
                chunkS3R3BYOJD(blockDiagramVD42YOACValue165),
                blockDiagramVD42YOACValue160,
              ),
              {
                useHtmlLabels: blockDiagramVD42YOACValue162,
                width:
                  blockDiagramVD42YOACParam25.width ||
                  blockDiagramVD42YOACValue160.flowchart.wrappingWidth,
                classes: "markdown-node-label",
              },
              blockDiagramVD42YOACValue160,
            )
          : blockDiagramVD42YOACValue166.appendChild(
              await blockDiagramVD42YOACValue29(
                _chunkABZYJK2DM(
                  chunkS3R3BYOJD(blockDiagramVD42YOACValue165),
                  blockDiagramVD42YOACValue160,
                ),
                blockDiagramVD42YOACParam25.labelStyle,
                false,
                blockDiagramVD42YOACParam27,
              ),
            );
      let blockDiagramVD42YOACValue168 = blockDiagramVD42YOACValue167.getBBox(),
        blockDiagramVD42YOACValue169 = blockDiagramVD42YOACParam25.padding / 2;
      if (chunkABZYJK2DV(blockDiagramVD42YOACValue160.flowchart.htmlLabels)) {
        let blockDiagramVD42YOACValue244 =
            blockDiagramVD42YOACValue167.children[0],
          blockDiagramVD42YOACValue245 = Src(blockDiagramVD42YOACValue167),
          blockDiagramVD42YOACValue246 =
            blockDiagramVD42YOACValue244.getElementsByTagName("img");
        if (blockDiagramVD42YOACValue246) {
          let blockDiagramVD42YOACValue273 =
            blockDiagramVD42YOACValue165.replace(/<img[^>]*>/g, "").trim() ===
            "";
          await Promise.all(
            [...blockDiagramVD42YOACValue246].map(
              (item) =>
                new Promise((blockDiagramVD42YOACParam92) => {
                  function blockDiagramVD42YOACHelper26() {
                    if (
                      ((item.style.display = "flex"),
                      (item.style.flexDirection = "column"),
                      blockDiagramVD42YOACValue273)
                    ) {
                      let blockDiagramVD42YOACValue456 =
                          blockDiagramVD42YOACValue160.fontSize
                            ? blockDiagramVD42YOACValue160.fontSize
                            : window.getComputedStyle(document.body).fontSize,
                        blockDiagramVD42YOACValue457 =
                          parseInt(blockDiagramVD42YOACValue456, 10) * 5 + "px";
                      item.style.minWidth = blockDiagramVD42YOACValue457;
                      item.style.maxWidth = blockDiagramVD42YOACValue457;
                    } else item.style.width = "100%";
                    blockDiagramVD42YOACParam92(item);
                  }
                  chunkAGHRB4JFN(blockDiagramVD42YOACHelper26, "setupImage");
                  setTimeout(() => {
                    item.complete && blockDiagramVD42YOACHelper26();
                  });
                  item.addEventListener("error", blockDiagramVD42YOACHelper26);
                  item.addEventListener("load", blockDiagramVD42YOACHelper26);
                }),
            ),
          );
        }
        blockDiagramVD42YOACValue168 =
          blockDiagramVD42YOACValue244.getBoundingClientRect();
        blockDiagramVD42YOACValue245.attr(
          "width",
          blockDiagramVD42YOACValue168.width,
        );
        blockDiagramVD42YOACValue245.attr(
          "height",
          blockDiagramVD42YOACValue168.height,
        );
      }
      return (
        blockDiagramVD42YOACValue162
          ? blockDiagramVD42YOACValue164.attr(
              "transform",
              "translate(" +
                -blockDiagramVD42YOACValue168.width / 2 +
                ", " +
                -blockDiagramVD42YOACValue168.height / 2 +
                ")",
            )
          : blockDiagramVD42YOACValue164.attr(
              "transform",
              "translate(0, " + -blockDiagramVD42YOACValue168.height / 2 + ")",
            ),
        blockDiagramVD42YOACParam25.centerLabel &&
          blockDiagramVD42YOACValue164.attr(
            "transform",
            "translate(" +
              -blockDiagramVD42YOACValue168.width / 2 +
              ", " +
              -blockDiagramVD42YOACValue168.height / 2 +
              ")",
          ),
        blockDiagramVD42YOACValue164.insert("rect", ":first-child"),
        {
          shapeSvg: blockDiagramVD42YOACValue163,
          bbox: blockDiagramVD42YOACValue168,
          halfPadding: blockDiagramVD42YOACValue169,
          label: blockDiagramVD42YOACValue164,
        }
      );
    },
    "labelHelper",
  ),
  blockDiagramVD42YOACValue50 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam224, blockDiagramVD42YOACParam225) => {
      let blockDiagramVD42YOACValue533 = blockDiagramVD42YOACParam225
        .node()
        .getBBox();
      blockDiagramVD42YOACParam224.width = blockDiagramVD42YOACValue533.width;
      blockDiagramVD42YOACParam224.height = blockDiagramVD42YOACValue533.height;
    },
    "updateNodeBounds",
  );
function blockDiagramVD42YOACHelper16(
  blockDiagramVD42YOACParam170,
  blockDiagramVD42YOACParam171,
  blockDiagramVD42YOACParam172,
  blockDiagramVD42YOACParam173,
) {
  return blockDiagramVD42YOACParam170
    .insert("polygon", ":first-child")
    .attr(
      "points",
      blockDiagramVD42YOACParam173
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -blockDiagramVD42YOACParam171 / 2 +
        "," +
        blockDiagramVD42YOACParam172 / 2 +
        ")",
    );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper16, "insertPolygonShape");
var blockDiagramVD42YOACValue51 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam113, blockDiagramVD42YOACParam114) => {
      blockDiagramVD42YOACParam114.useHtmlLabels ||
        _chunkABZYJK2DL().flowchart.htmlLabels ||
        (blockDiagramVD42YOACParam114.centerLabel = true);
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACValue49(
        blockDiagramVD42YOACParam113,
        blockDiagramVD42YOACParam114,
        "node " + blockDiagramVD42YOACParam114.classes,
        true,
      );
      chunkAGHRB4JFR.info("Classes = ", blockDiagramVD42YOACParam114.classes);
      let blockDiagramVD42YOACValue328 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      return (
        blockDiagramVD42YOACValue328
          .attr("rx", blockDiagramVD42YOACParam114.rx)
          .attr("ry", blockDiagramVD42YOACParam114.ry)
          .attr("x", -bbox.width / 2 - halfPadding)
          .attr("y", -bbox.height / 2 - halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACParam114.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACParam114.padding),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam114,
          blockDiagramVD42YOACValue328,
        ),
        (blockDiagramVD42YOACParam114.intersect = function (
          blockDiagramVD42YOACParam262,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam114,
            blockDiagramVD42YOACParam262,
          );
        }),
        shapeSvg
      );
    },
    "note",
  ),
  blockDiagramVD42YOACValue52 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam283) =>
      blockDiagramVD42YOACParam283 ? " " + blockDiagramVD42YOACParam283 : "",
    "formatClass",
  ),
  blockDiagramVD42YOACValue53 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam237, blockDiagramVD42YOACParam238) =>
      `${blockDiagramVD42YOACParam238 || "node default"}${blockDiagramVD42YOACValue52(blockDiagramVD42YOACParam237.classes)} ${blockDiagramVD42YOACValue52(blockDiagramVD42YOACParam237.class)}`,
    "getClassesFromNode",
  ),
  blockDiagramVD42YOACValue54 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam132, blockDiagramVD42YOACParam133) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam132,
          blockDiagramVD42YOACParam133,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam133, undefined),
          true,
        ),
        blockDiagramVD42YOACValue349 =
          bbox.width +
          blockDiagramVD42YOACParam133.padding +
          (bbox.height + blockDiagramVD42YOACParam133.padding),
        blockDiagramVD42YOACValue350 = [
          {
            x: blockDiagramVD42YOACValue349 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue349,
            y: -blockDiagramVD42YOACValue349 / 2,
          },
          {
            x: blockDiagramVD42YOACValue349 / 2,
            y: -blockDiagramVD42YOACValue349,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACValue349 / 2,
          },
        ];
      chunkAGHRB4JFR.info("Question main (Circle)");
      let blockDiagramVD42YOACValue351 = blockDiagramVD42YOACHelper16(
        shapeSvg,
        blockDiagramVD42YOACValue349,
        blockDiagramVD42YOACValue349,
        blockDiagramVD42YOACValue350,
      );
      return (
        blockDiagramVD42YOACValue351.attr(
          "style",
          blockDiagramVD42YOACParam133.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam133,
          blockDiagramVD42YOACValue351,
        ),
        (blockDiagramVD42YOACParam133.intersect = function (
          blockDiagramVD42YOACParam229,
        ) {
          return (
            chunkAGHRB4JFR.warn("Intersect called"),
            blockDiagramVD42YOACValue48.polygon(
              blockDiagramVD42YOACParam133,
              blockDiagramVD42YOACValue350,
              blockDiagramVD42YOACParam229,
            )
          );
        }),
        shapeSvg
      );
    },
    "question",
  ),
  blockDiagramVD42YOACValue55 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam103, blockDiagramVD42YOACParam104) => {
      let blockDiagramVD42YOACValue299 = blockDiagramVD42YOACParam103
        .insert("g")
        .attr("class", "node default")
        .attr(
          "id",
          blockDiagramVD42YOACParam104.domId || blockDiagramVD42YOACParam104.id,
        );
      return (
        blockDiagramVD42YOACValue299
          .insert("polygon", ":first-child")
          .attr(
            "points",
            [
              {
                x: 0,
                y: 14,
              },
              {
                x: 14,
                y: 0,
              },
              {
                x: 0,
                y: -14,
              },
              {
                x: -14,
                y: 0,
              },
            ]
              .map(function (item) {
                return item.x + "," + item.y;
              })
              .join(" "),
          )
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 28)
          .attr("height", 28),
        (blockDiagramVD42YOACParam104.width = 28),
        (blockDiagramVD42YOACParam104.height = 28),
        (blockDiagramVD42YOACParam104.intersect = function (
          blockDiagramVD42YOACParam242,
        ) {
          return blockDiagramVD42YOACValue48.circle(
            blockDiagramVD42YOACParam104,
            14,
            blockDiagramVD42YOACParam242,
          );
        }),
        blockDiagramVD42YOACValue299
      );
    },
    "choice",
  ),
  blockDiagramVD42YOACValue56 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam130, blockDiagramVD42YOACParam131) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam130,
          blockDiagramVD42YOACParam131,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam131, undefined),
          true,
        ),
        blockDiagramVD42YOACValue344 =
          bbox.height + blockDiagramVD42YOACParam131.padding,
        blockDiagramVD42YOACValue345 = blockDiagramVD42YOACValue344 / 4,
        blockDiagramVD42YOACValue346 =
          bbox.width +
          2 * blockDiagramVD42YOACValue345 +
          blockDiagramVD42YOACParam131.padding,
        blockDiagramVD42YOACValue347 = [
          {
            x: blockDiagramVD42YOACValue345,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue346 - blockDiagramVD42YOACValue345,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue346,
            y: -blockDiagramVD42YOACValue344 / 2,
          },
          {
            x: blockDiagramVD42YOACValue346 - blockDiagramVD42YOACValue345,
            y: -blockDiagramVD42YOACValue344,
          },
          {
            x: blockDiagramVD42YOACValue345,
            y: -blockDiagramVD42YOACValue344,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACValue344 / 2,
          },
        ],
        blockDiagramVD42YOACValue348 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue346,
          blockDiagramVD42YOACValue344,
          blockDiagramVD42YOACValue347,
        );
      return (
        blockDiagramVD42YOACValue348.attr(
          "style",
          blockDiagramVD42YOACParam131.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam131,
          blockDiagramVD42YOACValue348,
        ),
        (blockDiagramVD42YOACParam131.intersect = function (
          blockDiagramVD42YOACParam243,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam131,
            blockDiagramVD42YOACValue347,
            blockDiagramVD42YOACParam243,
          );
        }),
        shapeSvg
      );
    },
    "hexagon",
  ),
  blockDiagramVD42YOACValue57 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam161, blockDiagramVD42YOACParam162) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam161,
          blockDiagramVD42YOACParam162,
          undefined,
          true,
        ),
        blockDiagramVD42YOACValue431 =
          bbox.height + 2 * blockDiagramVD42YOACParam162.padding,
        blockDiagramVD42YOACValue432 = blockDiagramVD42YOACValue431 / 2,
        blockDiagramVD42YOACValue433 =
          bbox.width +
          2 * blockDiagramVD42YOACValue432 +
          blockDiagramVD42YOACParam162.padding,
        blockDiagramVD42YOACValue434 = blockDiagramVD42YOACValue42(
          blockDiagramVD42YOACParam162.directions,
          bbox,
          blockDiagramVD42YOACParam162,
        ),
        blockDiagramVD42YOACValue435 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue433,
          blockDiagramVD42YOACValue431,
          blockDiagramVD42YOACValue434,
        );
      return (
        blockDiagramVD42YOACValue435.attr(
          "style",
          blockDiagramVD42YOACParam162.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam162,
          blockDiagramVD42YOACValue435,
        ),
        (blockDiagramVD42YOACParam162.intersect = function (
          blockDiagramVD42YOACParam244,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam162,
            blockDiagramVD42YOACValue434,
            blockDiagramVD42YOACParam244,
          );
        }),
        shapeSvg
      );
    },
    "block_arrow",
  ),
  blockDiagramVD42YOACValue58 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam135, blockDiagramVD42YOACParam136) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam135,
          blockDiagramVD42YOACParam136,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam136, undefined),
          true,
        ),
        blockDiagramVD42YOACValue354 =
          bbox.width + blockDiagramVD42YOACParam136.padding,
        blockDiagramVD42YOACValue355 =
          bbox.height + blockDiagramVD42YOACParam136.padding,
        blockDiagramVD42YOACValue356 = [
          {
            x: -blockDiagramVD42YOACValue355 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue354,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue354,
            y: -blockDiagramVD42YOACValue355,
          },
          {
            x: -blockDiagramVD42YOACValue355 / 2,
            y: -blockDiagramVD42YOACValue355,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACValue355 / 2,
          },
        ];
      return (
        blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue354,
          blockDiagramVD42YOACValue355,
          blockDiagramVD42YOACValue356,
        ).attr("style", blockDiagramVD42YOACParam136.style),
        (blockDiagramVD42YOACParam136.width =
          blockDiagramVD42YOACValue354 + blockDiagramVD42YOACValue355),
        (blockDiagramVD42YOACParam136.height = blockDiagramVD42YOACValue355),
        (blockDiagramVD42YOACParam136.intersect = function (
          blockDiagramVD42YOACParam245,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam136,
            blockDiagramVD42YOACValue356,
            blockDiagramVD42YOACParam245,
          );
        }),
        shapeSvg
      );
    },
    "rect_left_inv_arrow",
  ),
  blockDiagramVD42YOACValue59 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam148, blockDiagramVD42YOACParam149) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam148,
          blockDiagramVD42YOACParam149,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam149),
          true,
        ),
        blockDiagramVD42YOACValue381 =
          bbox.width + blockDiagramVD42YOACParam149.padding,
        blockDiagramVD42YOACValue382 =
          bbox.height + blockDiagramVD42YOACParam149.padding,
        blockDiagramVD42YOACValue383 = [
          {
            x: (-2 * blockDiagramVD42YOACValue382) / 6,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue381 - blockDiagramVD42YOACValue382 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACValue381 +
              (2 * blockDiagramVD42YOACValue382) / 6,
            y: -blockDiagramVD42YOACValue382,
          },
          {
            x: blockDiagramVD42YOACValue382 / 6,
            y: -blockDiagramVD42YOACValue382,
          },
        ],
        blockDiagramVD42YOACValue384 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue381,
          blockDiagramVD42YOACValue382,
          blockDiagramVD42YOACValue383,
        );
      return (
        blockDiagramVD42YOACValue384.attr(
          "style",
          blockDiagramVD42YOACParam149.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam149,
          blockDiagramVD42YOACValue384,
        ),
        (blockDiagramVD42YOACParam149.intersect = function (
          blockDiagramVD42YOACParam246,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam149,
            blockDiagramVD42YOACValue383,
            blockDiagramVD42YOACParam246,
          );
        }),
        shapeSvg
      );
    },
    "lean_right",
  ),
  blockDiagramVD42YOACValue60 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam142, blockDiagramVD42YOACParam143) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam142,
          blockDiagramVD42YOACParam143,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam143, undefined),
          true,
        ),
        blockDiagramVD42YOACValue369 =
          bbox.width + blockDiagramVD42YOACParam143.padding,
        blockDiagramVD42YOACValue370 =
          bbox.height + blockDiagramVD42YOACParam143.padding,
        blockDiagramVD42YOACValue371 = [
          {
            x: (2 * blockDiagramVD42YOACValue370) / 6,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue369 + blockDiagramVD42YOACValue370 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACValue369 -
              (2 * blockDiagramVD42YOACValue370) / 6,
            y: -blockDiagramVD42YOACValue370,
          },
          {
            x: -blockDiagramVD42YOACValue370 / 6,
            y: -blockDiagramVD42YOACValue370,
          },
        ],
        blockDiagramVD42YOACValue372 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue369,
          blockDiagramVD42YOACValue370,
          blockDiagramVD42YOACValue371,
        );
      return (
        blockDiagramVD42YOACValue372.attr(
          "style",
          blockDiagramVD42YOACParam143.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam143,
          blockDiagramVD42YOACValue372,
        ),
        (blockDiagramVD42YOACParam143.intersect = function (
          blockDiagramVD42YOACParam247,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam143,
            blockDiagramVD42YOACValue371,
            blockDiagramVD42YOACParam247,
          );
        }),
        shapeSvg
      );
    },
    "lean_left",
  ),
  blockDiagramVD42YOACValue61 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam144, blockDiagramVD42YOACParam145) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam144,
          blockDiagramVD42YOACParam145,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam145, undefined),
          true,
        ),
        blockDiagramVD42YOACValue373 =
          bbox.width + blockDiagramVD42YOACParam145.padding,
        blockDiagramVD42YOACValue374 =
          bbox.height + blockDiagramVD42YOACParam145.padding,
        blockDiagramVD42YOACValue375 = [
          {
            x: (-2 * blockDiagramVD42YOACValue374) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACValue373 +
              (2 * blockDiagramVD42YOACValue374) / 6,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue373 - blockDiagramVD42YOACValue374 / 6,
            y: -blockDiagramVD42YOACValue374,
          },
          {
            x: blockDiagramVD42YOACValue374 / 6,
            y: -blockDiagramVD42YOACValue374,
          },
        ],
        blockDiagramVD42YOACValue376 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue373,
          blockDiagramVD42YOACValue374,
          blockDiagramVD42YOACValue375,
        );
      return (
        blockDiagramVD42YOACValue376.attr(
          "style",
          blockDiagramVD42YOACParam145.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam145,
          blockDiagramVD42YOACValue376,
        ),
        (blockDiagramVD42YOACParam145.intersect = function (
          blockDiagramVD42YOACParam248,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam145,
            blockDiagramVD42YOACValue375,
            blockDiagramVD42YOACParam248,
          );
        }),
        shapeSvg
      );
    },
    "trapezoid",
  ),
  $e = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam146, blockDiagramVD42YOACParam147) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam146,
          blockDiagramVD42YOACParam147,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam147, undefined),
          true,
        ),
        blockDiagramVD42YOACValue377 =
          bbox.width + blockDiagramVD42YOACParam147.padding,
        blockDiagramVD42YOACValue378 =
          bbox.height + blockDiagramVD42YOACParam147.padding,
        blockDiagramVD42YOACValue379 = [
          {
            x: blockDiagramVD42YOACValue378 / 6,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue377 - blockDiagramVD42YOACValue378 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramVD42YOACValue377 +
              (2 * blockDiagramVD42YOACValue378) / 6,
            y: -blockDiagramVD42YOACValue378,
          },
          {
            x: (-2 * blockDiagramVD42YOACValue378) / 6,
            y: -blockDiagramVD42YOACValue378,
          },
        ],
        blockDiagramVD42YOACValue380 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue377,
          blockDiagramVD42YOACValue378,
          blockDiagramVD42YOACValue379,
        );
      return (
        blockDiagramVD42YOACValue380.attr(
          "style",
          blockDiagramVD42YOACParam147.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam147,
          blockDiagramVD42YOACValue380,
        ),
        (blockDiagramVD42YOACParam147.intersect = function (
          blockDiagramVD42YOACParam249,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam147,
            blockDiagramVD42YOACValue379,
            blockDiagramVD42YOACParam249,
          );
        }),
        shapeSvg
      );
    },
    "inv_trapezoid",
  ),
  blockDiagramVD42YOACValue62 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam138, blockDiagramVD42YOACParam139) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam138,
          blockDiagramVD42YOACParam139,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam139, undefined),
          true,
        ),
        blockDiagramVD42YOACValue359 =
          bbox.width + blockDiagramVD42YOACParam139.padding,
        blockDiagramVD42YOACValue360 =
          bbox.height + blockDiagramVD42YOACParam139.padding,
        blockDiagramVD42YOACValue361 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue359 + blockDiagramVD42YOACValue360 / 2,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue359,
            y: -blockDiagramVD42YOACValue360 / 2,
          },
          {
            x: blockDiagramVD42YOACValue359 + blockDiagramVD42YOACValue360 / 2,
            y: -blockDiagramVD42YOACValue360,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACValue360,
          },
        ],
        blockDiagramVD42YOACValue362 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue359,
          blockDiagramVD42YOACValue360,
          blockDiagramVD42YOACValue361,
        );
      return (
        blockDiagramVD42YOACValue362.attr(
          "style",
          blockDiagramVD42YOACParam139.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam139,
          blockDiagramVD42YOACValue362,
        ),
        (blockDiagramVD42YOACParam139.intersect = function (
          blockDiagramVD42YOACParam250,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam139,
            blockDiagramVD42YOACValue361,
            blockDiagramVD42YOACParam250,
          );
        }),
        shapeSvg
      );
    },
    "rect_right_inv_arrow",
  ),
  blockDiagramVD42YOACValue63 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam54, blockDiagramVD42YOACParam55) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam54,
          blockDiagramVD42YOACParam55,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam55, undefined),
          true,
        ),
        blockDiagramVD42YOACValue229 =
          bbox.width + blockDiagramVD42YOACParam55.padding,
        blockDiagramVD42YOACValue230 = blockDiagramVD42YOACValue229 / 2,
        blockDiagramVD42YOACValue231 =
          blockDiagramVD42YOACValue230 /
          (2.5 + blockDiagramVD42YOACValue229 / 50),
        blockDiagramVD42YOACValue232 =
          bbox.height +
          blockDiagramVD42YOACValue231 +
          blockDiagramVD42YOACParam55.padding,
        blockDiagramVD42YOACValue233 =
          "M 0," +
          blockDiagramVD42YOACValue231 +
          " a " +
          blockDiagramVD42YOACValue230 +
          "," +
          blockDiagramVD42YOACValue231 +
          " 0,0,0 " +
          blockDiagramVD42YOACValue229 +
          " 0 a " +
          blockDiagramVD42YOACValue230 +
          "," +
          blockDiagramVD42YOACValue231 +
          " 0,0,0 " +
          -blockDiagramVD42YOACValue229 +
          " 0 l 0," +
          blockDiagramVD42YOACValue232 +
          " a " +
          blockDiagramVD42YOACValue230 +
          "," +
          blockDiagramVD42YOACValue231 +
          " 0,0,0 " +
          blockDiagramVD42YOACValue229 +
          " 0 l 0," +
          -blockDiagramVD42YOACValue232;
      return (
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam55,
          shapeSvg
            .attr("label-offset-y", blockDiagramVD42YOACValue231)
            .insert("path", ":first-child")
            .attr("style", blockDiagramVD42YOACParam55.style)
            .attr("d", blockDiagramVD42YOACValue233)
            .attr(
              "transform",
              "translate(" +
                -blockDiagramVD42YOACValue229 / 2 +
                "," +
                -(
                  blockDiagramVD42YOACValue232 / 2 +
                  blockDiagramVD42YOACValue231
                ) +
                ")",
            ),
        ),
        (blockDiagramVD42YOACParam55.intersect = function (
          blockDiagramVD42YOACParam152,
        ) {
          let blockDiagramVD42YOACValue403 = blockDiagramVD42YOACValue48.rect(
              blockDiagramVD42YOACParam55,
              blockDiagramVD42YOACParam152,
            ),
            blockDiagramVD42YOACValue404 =
              blockDiagramVD42YOACValue403.x - blockDiagramVD42YOACParam55.x;
          if (
            blockDiagramVD42YOACValue230 != 0 &&
            (Math.abs(blockDiagramVD42YOACValue404) <
              blockDiagramVD42YOACParam55.width / 2 ||
              (Math.abs(blockDiagramVD42YOACValue404) ==
                blockDiagramVD42YOACParam55.width / 2 &&
                Math.abs(
                  blockDiagramVD42YOACValue403.y -
                    blockDiagramVD42YOACParam55.y,
                ) >
                  blockDiagramVD42YOACParam55.height / 2 -
                    blockDiagramVD42YOACValue231))
          ) {
            let blockDiagramVD42YOACValue497 =
              blockDiagramVD42YOACValue231 *
              blockDiagramVD42YOACValue231 *
              (1 -
                (blockDiagramVD42YOACValue404 * blockDiagramVD42YOACValue404) /
                  (blockDiagramVD42YOACValue230 *
                    blockDiagramVD42YOACValue230));
            blockDiagramVD42YOACValue497 != 0 &&
              (blockDiagramVD42YOACValue497 = Math.sqrt(
                blockDiagramVD42YOACValue497,
              ));
            blockDiagramVD42YOACValue497 =
              blockDiagramVD42YOACValue231 - blockDiagramVD42YOACValue497;
            blockDiagramVD42YOACParam152.y - blockDiagramVD42YOACParam55.y >
              0 &&
              (blockDiagramVD42YOACValue497 = -blockDiagramVD42YOACValue497);
            blockDiagramVD42YOACValue403.y += blockDiagramVD42YOACValue497;
          }
          return blockDiagramVD42YOACValue403;
        }),
        shapeSvg
      );
    },
    "cylinder",
  ),
  blockDiagramVD42YOACValue64 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam75, blockDiagramVD42YOACParam76) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam75,
          blockDiagramVD42YOACParam76,
          "node " +
            blockDiagramVD42YOACParam76.classes +
            " " +
            blockDiagramVD42YOACParam76.class,
          true,
        ),
        blockDiagramVD42YOACValue268 = shapeSvg.insert("rect", ":first-child"),
        blockDiagramVD42YOACValue269 = blockDiagramVD42YOACParam76.positioned
          ? blockDiagramVD42YOACParam76.width
          : bbox.width + blockDiagramVD42YOACParam76.padding,
        blockDiagramVD42YOACValue270 = blockDiagramVD42YOACParam76.positioned
          ? blockDiagramVD42YOACParam76.height
          : bbox.height + blockDiagramVD42YOACParam76.padding,
        blockDiagramVD42YOACValue271 = blockDiagramVD42YOACParam76.positioned
          ? -blockDiagramVD42YOACValue269 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramVD42YOACValue272 = blockDiagramVD42YOACParam76.positioned
          ? -blockDiagramVD42YOACValue270 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramVD42YOACValue268
          .attr("class", "basic label-container")
          .attr("style", blockDiagramVD42YOACParam76.style)
          .attr("rx", blockDiagramVD42YOACParam76.rx)
          .attr("ry", blockDiagramVD42YOACParam76.ry)
          .attr("x", blockDiagramVD42YOACValue271)
          .attr("y", blockDiagramVD42YOACValue272)
          .attr("width", blockDiagramVD42YOACValue269)
          .attr("height", blockDiagramVD42YOACValue270),
        blockDiagramVD42YOACParam76.props)
      ) {
        let blockDiagramVD42YOACValue489 = new Set(
          Object.keys(blockDiagramVD42YOACParam76.props),
        );
        blockDiagramVD42YOACParam76.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACValue268,
            blockDiagramVD42YOACParam76.props.borders,
            blockDiagramVD42YOACValue269,
            blockDiagramVD42YOACValue270,
          ),
          blockDiagramVD42YOACValue489.delete("borders"));
        blockDiagramVD42YOACValue489.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam76,
          blockDiagramVD42YOACValue268,
        ),
        (blockDiagramVD42YOACParam76.intersect = function (
          blockDiagramVD42YOACParam263,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam76,
            blockDiagramVD42YOACParam263,
          );
        }),
        shapeSvg
      );
    },
    "rect",
  ),
  blockDiagramVD42YOACValue65 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam73, blockDiagramVD42YOACParam74) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam73,
          blockDiagramVD42YOACParam74,
          "node " + blockDiagramVD42YOACParam74.classes,
          true,
        ),
        blockDiagramVD42YOACValue263 = shapeSvg.insert("rect", ":first-child"),
        blockDiagramVD42YOACValue264 = blockDiagramVD42YOACParam74.positioned
          ? blockDiagramVD42YOACParam74.width
          : bbox.width + blockDiagramVD42YOACParam74.padding,
        blockDiagramVD42YOACValue265 = blockDiagramVD42YOACParam74.positioned
          ? blockDiagramVD42YOACParam74.height
          : bbox.height + blockDiagramVD42YOACParam74.padding,
        blockDiagramVD42YOACValue266 = blockDiagramVD42YOACParam74.positioned
          ? -blockDiagramVD42YOACValue264 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramVD42YOACValue267 = blockDiagramVD42YOACParam74.positioned
          ? -blockDiagramVD42YOACValue265 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramVD42YOACValue263
          .attr("class", "basic cluster composite label-container")
          .attr("style", blockDiagramVD42YOACParam74.style)
          .attr("rx", blockDiagramVD42YOACParam74.rx)
          .attr("ry", blockDiagramVD42YOACParam74.ry)
          .attr("x", blockDiagramVD42YOACValue266)
          .attr("y", blockDiagramVD42YOACValue267)
          .attr("width", blockDiagramVD42YOACValue264)
          .attr("height", blockDiagramVD42YOACValue265),
        blockDiagramVD42YOACParam74.props)
      ) {
        let blockDiagramVD42YOACValue490 = new Set(
          Object.keys(blockDiagramVD42YOACParam74.props),
        );
        blockDiagramVD42YOACParam74.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACValue263,
            blockDiagramVD42YOACParam74.props.borders,
            blockDiagramVD42YOACValue264,
            blockDiagramVD42YOACValue265,
          ),
          blockDiagramVD42YOACValue490.delete("borders"));
        blockDiagramVD42YOACValue490.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam74,
          blockDiagramVD42YOACValue263,
        ),
        (blockDiagramVD42YOACParam74.intersect = function (
          blockDiagramVD42YOACParam264,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam74,
            blockDiagramVD42YOACParam264,
          );
        }),
        shapeSvg
      );
    },
    "composite",
  ),
  blockDiagramVD42YOACValue66 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam118, blockDiagramVD42YOACParam119) => {
      let { shapeSvg } = await blockDiagramVD42YOACValue49(
        blockDiagramVD42YOACParam118,
        blockDiagramVD42YOACParam119,
        "label",
        true,
      );
      chunkAGHRB4JFR.trace("Classes = ", blockDiagramVD42YOACParam119.class);
      let blockDiagramVD42YOACValue333 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      if (
        (blockDiagramVD42YOACValue333.attr("width", 0).attr("height", 0),
        shapeSvg.attr("class", "label edgeLabel"),
        blockDiagramVD42YOACParam119.props)
      ) {
        let blockDiagramVD42YOACValue491 = new Set(
          Object.keys(blockDiagramVD42YOACParam119.props),
        );
        blockDiagramVD42YOACParam119.props.borders &&
          (blockDiagramVD42YOACHelper17(
            blockDiagramVD42YOACValue333,
            blockDiagramVD42YOACParam119.props.borders,
            0,
            0,
          ),
          blockDiagramVD42YOACValue491.delete("borders"));
        blockDiagramVD42YOACValue491.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam119,
          blockDiagramVD42YOACValue333,
        ),
        (blockDiagramVD42YOACParam119.intersect = function (
          blockDiagramVD42YOACParam265,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam119,
            blockDiagramVD42YOACParam265,
          );
        }),
        shapeSvg
      );
    },
    "labelRect",
  );
function blockDiagramVD42YOACHelper17(
  blockDiagramVD42YOACParam153,
  blockDiagramVD42YOACParam154,
  blockDiagramVD42YOACParam155,
  blockDiagramVD42YOACParam156,
) {
  let blockDiagramVD42YOACValue405 = [],
    blockDiagramVD42YOACValue406 = chunkAGHRB4JFN(
      (blockDiagramVD42YOACParam280) => {
        blockDiagramVD42YOACValue405.push(blockDiagramVD42YOACParam280, 0);
      },
      "addBorder",
    ),
    blockDiagramVD42YOACValue407 = chunkAGHRB4JFN(
      (blockDiagramVD42YOACParam281) => {
        blockDiagramVD42YOACValue405.push(0, blockDiagramVD42YOACParam281);
      },
      "skipBorder",
    );
  blockDiagramVD42YOACParam154.includes("t")
    ? (chunkAGHRB4JFR.debug("add top border"),
      blockDiagramVD42YOACValue406(blockDiagramVD42YOACParam155))
    : blockDiagramVD42YOACValue407(blockDiagramVD42YOACParam155);
  blockDiagramVD42YOACParam154.includes("r")
    ? (chunkAGHRB4JFR.debug("add right border"),
      blockDiagramVD42YOACValue406(blockDiagramVD42YOACParam156))
    : blockDiagramVD42YOACValue407(blockDiagramVD42YOACParam156);
  blockDiagramVD42YOACParam154.includes("b")
    ? (chunkAGHRB4JFR.debug("add bottom border"),
      blockDiagramVD42YOACValue406(blockDiagramVD42YOACParam155))
    : blockDiagramVD42YOACValue407(blockDiagramVD42YOACParam155);
  blockDiagramVD42YOACParam154.includes("l")
    ? (chunkAGHRB4JFR.debug("add left border"),
      blockDiagramVD42YOACValue406(blockDiagramVD42YOACParam156))
    : blockDiagramVD42YOACValue407(blockDiagramVD42YOACParam156);
  blockDiagramVD42YOACParam153.attr(
    "stroke-dasharray",
    blockDiagramVD42YOACValue405.join(" "),
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper17, "applyNodePropertyBorders");
var at = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam28, blockDiagramVD42YOACParam29) => {
      let blockDiagramVD42YOACValue170;
      blockDiagramVD42YOACValue170 = blockDiagramVD42YOACParam29.classes
        ? "node " + blockDiagramVD42YOACParam29.classes
        : "node default";
      let blockDiagramVD42YOACValue171 = blockDiagramVD42YOACParam28
          .insert("g")
          .attr("class", blockDiagramVD42YOACValue170)
          .attr(
            "id",
            blockDiagramVD42YOACParam29.domId || blockDiagramVD42YOACParam29.id,
          ),
        blockDiagramVD42YOACValue172 = blockDiagramVD42YOACValue171.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramVD42YOACValue173 =
          blockDiagramVD42YOACValue171.insert("line"),
        blockDiagramVD42YOACValue174 = blockDiagramVD42YOACValue171
          .insert("g")
          .attr("class", "label"),
        blockDiagramVD42YOACValue175 = blockDiagramVD42YOACParam29.labelText
          .flat
          ? blockDiagramVD42YOACParam29.labelText.flat()
          : blockDiagramVD42YOACParam29.labelText,
        blockDiagramVD42YOACValue176 = "";
      blockDiagramVD42YOACValue176 =
        typeof blockDiagramVD42YOACValue175 == "object"
          ? blockDiagramVD42YOACValue175[0]
          : blockDiagramVD42YOACValue175;
      chunkAGHRB4JFR.info(
        "Label text abc79",
        blockDiagramVD42YOACValue176,
        blockDiagramVD42YOACValue175,
        typeof blockDiagramVD42YOACValue175 == "object",
      );
      let blockDiagramVD42YOACValue177 = blockDiagramVD42YOACValue174
          .node()
          .appendChild(
            await blockDiagramVD42YOACValue29(
              blockDiagramVD42YOACValue176,
              blockDiagramVD42YOACParam29.labelStyle,
              true,
              true,
            ),
          ),
        blockDiagramVD42YOACValue178 = {
          width: 0,
          height: 0,
        };
      if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
        let blockDiagramVD42YOACValue521 =
            blockDiagramVD42YOACValue177.children[0],
          blockDiagramVD42YOACValue522 = Src(blockDiagramVD42YOACValue177);
        blockDiagramVD42YOACValue178 =
          blockDiagramVD42YOACValue521.getBoundingClientRect();
        blockDiagramVD42YOACValue522.attr(
          "width",
          blockDiagramVD42YOACValue178.width,
        );
        blockDiagramVD42YOACValue522.attr(
          "height",
          blockDiagramVD42YOACValue178.height,
        );
      }
      chunkAGHRB4JFR.info("Text 2", blockDiagramVD42YOACValue175);
      let blockDiagramVD42YOACValue179 = blockDiagramVD42YOACValue175.slice(
          1,
          blockDiagramVD42YOACValue175.length,
        ),
        blockDiagramVD42YOACValue180 = blockDiagramVD42YOACValue177.getBBox(),
        blockDiagramVD42YOACValue181 = blockDiagramVD42YOACValue174
          .node()
          .appendChild(
            await blockDiagramVD42YOACValue29(
              blockDiagramVD42YOACValue179.join
                ? blockDiagramVD42YOACValue179.join("<br/>")
                : blockDiagramVD42YOACValue179,
              blockDiagramVD42YOACParam29.labelStyle,
              true,
              true,
            ),
          );
      if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
        let blockDiagramVD42YOACValue523 =
            blockDiagramVD42YOACValue181.children[0],
          blockDiagramVD42YOACValue524 = Src(blockDiagramVD42YOACValue181);
        blockDiagramVD42YOACValue178 =
          blockDiagramVD42YOACValue523.getBoundingClientRect();
        blockDiagramVD42YOACValue524.attr(
          "width",
          blockDiagramVD42YOACValue178.width,
        );
        blockDiagramVD42YOACValue524.attr(
          "height",
          blockDiagramVD42YOACValue178.height,
        );
      }
      let blockDiagramVD42YOACValue182 =
        blockDiagramVD42YOACParam29.padding / 2;
      return (
        Src(blockDiagramVD42YOACValue181).attr(
          "transform",
          "translate( " +
            (blockDiagramVD42YOACValue178.width >
            blockDiagramVD42YOACValue180.width
              ? 0
              : (blockDiagramVD42YOACValue180.width -
                  blockDiagramVD42YOACValue178.width) /
                2) +
            ", " +
            (blockDiagramVD42YOACValue180.height +
              blockDiagramVD42YOACValue182 +
              5) +
            ")",
        ),
        Src(blockDiagramVD42YOACValue177).attr(
          "transform",
          "translate( " +
            (blockDiagramVD42YOACValue178.width <
            blockDiagramVD42YOACValue180.width
              ? 0
              : -(
                  blockDiagramVD42YOACValue180.width -
                  blockDiagramVD42YOACValue178.width
                ) / 2) +
            ", 0)",
        ),
        (blockDiagramVD42YOACValue178 = blockDiagramVD42YOACValue174
          .node()
          .getBBox()),
        blockDiagramVD42YOACValue174.attr(
          "transform",
          "translate(" +
            -blockDiagramVD42YOACValue178.width / 2 +
            ", " +
            (-blockDiagramVD42YOACValue178.height / 2 -
              blockDiagramVD42YOACValue182 +
              3) +
            ")",
        ),
        blockDiagramVD42YOACValue172
          .attr("class", "outer title-state")
          .attr(
            "x",
            -blockDiagramVD42YOACValue178.width / 2 -
              blockDiagramVD42YOACValue182,
          )
          .attr(
            "y",
            -blockDiagramVD42YOACValue178.height / 2 -
              blockDiagramVD42YOACValue182,
          )
          .attr(
            "width",
            blockDiagramVD42YOACValue178.width +
              blockDiagramVD42YOACParam29.padding,
          )
          .attr(
            "height",
            blockDiagramVD42YOACValue178.height +
              blockDiagramVD42YOACParam29.padding,
          ),
        blockDiagramVD42YOACValue173
          .attr("class", "divider")
          .attr(
            "x1",
            -blockDiagramVD42YOACValue178.width / 2 -
              blockDiagramVD42YOACValue182,
          )
          .attr(
            "x2",
            blockDiagramVD42YOACValue178.width / 2 +
              blockDiagramVD42YOACValue182,
          )
          .attr(
            "y1",
            -blockDiagramVD42YOACValue178.height / 2 -
              blockDiagramVD42YOACValue182 +
              blockDiagramVD42YOACValue180.height +
              blockDiagramVD42YOACValue182,
          )
          .attr(
            "y2",
            -blockDiagramVD42YOACValue178.height / 2 -
              blockDiagramVD42YOACValue182 +
              blockDiagramVD42YOACValue180.height +
              blockDiagramVD42YOACValue182,
          ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam29,
          blockDiagramVD42YOACValue172,
        ),
        (blockDiagramVD42YOACParam29.intersect = function (
          blockDiagramVD42YOACParam266,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam29,
            blockDiagramVD42YOACParam266,
          );
        }),
        blockDiagramVD42YOACValue171
      );
    },
    "rectWithTitle",
  ),
  blockDiagramVD42YOACValue67 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam128, blockDiagramVD42YOACParam129) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam128,
          blockDiagramVD42YOACParam129,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam129, undefined),
          true,
        ),
        blockDiagramVD42YOACValue342 =
          bbox.height + blockDiagramVD42YOACParam129.padding,
        blockDiagramVD42YOACValue343 =
          bbox.width +
          blockDiagramVD42YOACValue342 / 4 +
          blockDiagramVD42YOACParam129.padding;
      return (
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam129,
          shapeSvg
            .insert("rect", ":first-child")
            .attr("style", blockDiagramVD42YOACParam129.style)
            .attr("rx", blockDiagramVD42YOACValue342 / 2)
            .attr("ry", blockDiagramVD42YOACValue342 / 2)
            .attr("x", -blockDiagramVD42YOACValue343 / 2)
            .attr("y", -blockDiagramVD42YOACValue342 / 2)
            .attr("width", blockDiagramVD42YOACValue343)
            .attr("height", blockDiagramVD42YOACValue342),
        ),
        (blockDiagramVD42YOACParam129.intersect = function (
          blockDiagramVD42YOACParam267,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam129,
            blockDiagramVD42YOACParam267,
          );
        }),
        shapeSvg
      );
    },
    "stadium",
  ),
  blockDiagramVD42YOACValue68 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam109, blockDiagramVD42YOACParam110) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam109,
          blockDiagramVD42YOACParam110,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam110, undefined),
          true,
        ),
        blockDiagramVD42YOACValue324 = shapeSvg.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramVD42YOACValue324
          .attr("style", blockDiagramVD42YOACParam110.style)
          .attr("rx", blockDiagramVD42YOACParam110.rx)
          .attr("ry", blockDiagramVD42YOACParam110.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACParam110.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACParam110.padding),
        chunkAGHRB4JFR.info("Circle main"),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam110,
          blockDiagramVD42YOACValue324,
        ),
        (blockDiagramVD42YOACParam110.intersect = function (
          blockDiagramVD42YOACParam210,
        ) {
          return (
            chunkAGHRB4JFR.info(
              "Circle intersect",
              blockDiagramVD42YOACParam110,
              bbox.width / 2 + halfPadding,
              blockDiagramVD42YOACParam210,
            ),
            blockDiagramVD42YOACValue48.circle(
              blockDiagramVD42YOACParam110,
              bbox.width / 2 + halfPadding,
              blockDiagramVD42YOACParam210,
            )
          );
        }),
        shapeSvg
      );
    },
    "circle",
  ),
  blockDiagramVD42YOACValue69 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam80, blockDiagramVD42YOACParam81) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam80,
          blockDiagramVD42YOACParam81,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam81, undefined),
          true,
        ),
        blockDiagramVD42YOACValue274 = shapeSvg.insert("g", ":first-child"),
        blockDiagramVD42YOACValue275 =
          blockDiagramVD42YOACValue274.insert("circle"),
        blockDiagramVD42YOACValue276 =
          blockDiagramVD42YOACValue274.insert("circle");
      return (
        blockDiagramVD42YOACValue274.attr(
          "class",
          blockDiagramVD42YOACParam81.class,
        ),
        blockDiagramVD42YOACValue275
          .attr("style", blockDiagramVD42YOACParam81.style)
          .attr("rx", blockDiagramVD42YOACParam81.rx)
          .attr("ry", blockDiagramVD42YOACParam81.ry)
          .attr("r", bbox.width / 2 + halfPadding + 5)
          .attr("width", bbox.width + blockDiagramVD42YOACParam81.padding + 10)
          .attr(
            "height",
            bbox.height + blockDiagramVD42YOACParam81.padding + 10,
          ),
        blockDiagramVD42YOACValue276
          .attr("style", blockDiagramVD42YOACParam81.style)
          .attr("rx", blockDiagramVD42YOACParam81.rx)
          .attr("ry", blockDiagramVD42YOACParam81.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramVD42YOACParam81.padding)
          .attr("height", bbox.height + blockDiagramVD42YOACParam81.padding),
        chunkAGHRB4JFR.info("DoubleCircle main"),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam81,
          blockDiagramVD42YOACValue275,
        ),
        (blockDiagramVD42YOACParam81.intersect = function (
          blockDiagramVD42YOACParam202,
        ) {
          return (
            chunkAGHRB4JFR.info(
              "DoubleCircle intersect",
              blockDiagramVD42YOACParam81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramVD42YOACParam202,
            ),
            blockDiagramVD42YOACValue48.circle(
              blockDiagramVD42YOACParam81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramVD42YOACParam202,
            )
          );
        }),
        shapeSvg
      );
    },
    "doublecircle",
  ),
  blockDiagramVD42YOACValue70 = chunkAGHRB4JFN(
    async (blockDiagramVD42YOACParam120, blockDiagramVD42YOACParam121) => {
      let { shapeSvg, bbox } = await blockDiagramVD42YOACValue49(
          blockDiagramVD42YOACParam120,
          blockDiagramVD42YOACParam121,
          blockDiagramVD42YOACValue53(blockDiagramVD42YOACParam121, undefined),
          true,
        ),
        blockDiagramVD42YOACValue334 =
          bbox.width + blockDiagramVD42YOACParam121.padding,
        blockDiagramVD42YOACValue335 =
          bbox.height + blockDiagramVD42YOACParam121.padding,
        blockDiagramVD42YOACValue336 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue334,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue334,
            y: -blockDiagramVD42YOACValue335,
          },
          {
            x: 0,
            y: -blockDiagramVD42YOACValue335,
          },
          {
            x: 0,
            y: 0,
          },
          {
            x: -8,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue334 + 8,
            y: 0,
          },
          {
            x: blockDiagramVD42YOACValue334 + 8,
            y: -blockDiagramVD42YOACValue335,
          },
          {
            x: -8,
            y: -blockDiagramVD42YOACValue335,
          },
          {
            x: -8,
            y: 0,
          },
        ],
        blockDiagramVD42YOACValue337 = blockDiagramVD42YOACHelper16(
          shapeSvg,
          blockDiagramVD42YOACValue334,
          blockDiagramVD42YOACValue335,
          blockDiagramVD42YOACValue336,
        );
      return (
        blockDiagramVD42YOACValue337.attr(
          "style",
          blockDiagramVD42YOACParam121.style,
        ),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam121,
          blockDiagramVD42YOACValue337,
        ),
        (blockDiagramVD42YOACParam121.intersect = function (
          blockDiagramVD42YOACParam251,
        ) {
          return blockDiagramVD42YOACValue48.polygon(
            blockDiagramVD42YOACParam121,
            blockDiagramVD42YOACValue336,
            blockDiagramVD42YOACParam251,
          );
        }),
        shapeSvg
      );
    },
    "subroutine",
  ),
  blockDiagramVD42YOACValue71 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam157, blockDiagramVD42YOACParam158) => {
      let blockDiagramVD42YOACValue421 = blockDiagramVD42YOACParam157
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramVD42YOACParam158.domId ||
              blockDiagramVD42YOACParam158.id,
          ),
        blockDiagramVD42YOACValue422 = blockDiagramVD42YOACValue421.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramVD42YOACValue422
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 14)
          .attr("height", 14),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam158,
          blockDiagramVD42YOACValue422,
        ),
        (blockDiagramVD42YOACParam158.intersect = function (
          blockDiagramVD42YOACParam252,
        ) {
          return blockDiagramVD42YOACValue48.circle(
            blockDiagramVD42YOACParam158,
            7,
            blockDiagramVD42YOACParam252,
          );
        }),
        blockDiagramVD42YOACValue421
      );
    },
    "start",
  ),
  blockDiagramVD42YOACValue72 = chunkAGHRB4JFN(
    (
      blockDiagramVD42YOACParam123,
      blockDiagramVD42YOACParam124,
      blockDiagramVD42YOACParam125,
    ) => {
      let blockDiagramVD42YOACValue338 = blockDiagramVD42YOACParam123
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramVD42YOACParam124.domId ||
              blockDiagramVD42YOACParam124.id,
          ),
        blockDiagramVD42YOACValue339 = 70,
        blockDiagramVD42YOACValue340 = 10;
      return (
        blockDiagramVD42YOACParam125 === "LR" &&
          ((blockDiagramVD42YOACValue339 = 10),
          (blockDiagramVD42YOACValue340 = 70)),
        blockDiagramVD42YOACValue50(
          blockDiagramVD42YOACParam124,
          blockDiagramVD42YOACValue338
            .append("rect")
            .attr("x", (-1 * blockDiagramVD42YOACValue339) / 2)
            .attr("y", (-1 * blockDiagramVD42YOACValue340) / 2)
            .attr("width", blockDiagramVD42YOACValue339)
            .attr("height", blockDiagramVD42YOACValue340)
            .attr("class", "fork-join"),
        ),
        (blockDiagramVD42YOACParam124.height +=
          blockDiagramVD42YOACParam124.padding / 2),
        (blockDiagramVD42YOACParam124.width +=
          blockDiagramVD42YOACParam124.padding / 2),
        (blockDiagramVD42YOACParam124.intersect = function (
          blockDiagramVD42YOACParam268,
        ) {
          return blockDiagramVD42YOACValue48.rect(
            blockDiagramVD42YOACParam124,
            blockDiagramVD42YOACParam268,
          );
        }),
        blockDiagramVD42YOACValue338
      );
    },
    "forkJoin",
  ),
  blockDiagramVD42YOACValue73 = {
    rhombus: blockDiagramVD42YOACValue54,
    composite: blockDiagramVD42YOACValue65,
    question: blockDiagramVD42YOACValue54,
    rect: blockDiagramVD42YOACValue64,
    labelRect: blockDiagramVD42YOACValue66,
    rectWithTitle: at,
    choice: blockDiagramVD42YOACValue55,
    circle: blockDiagramVD42YOACValue68,
    doublecircle: blockDiagramVD42YOACValue69,
    stadium: blockDiagramVD42YOACValue67,
    hexagon: blockDiagramVD42YOACValue56,
    block_arrow: blockDiagramVD42YOACValue57,
    rect_left_inv_arrow: blockDiagramVD42YOACValue58,
    lean_right: blockDiagramVD42YOACValue59,
    lean_left: blockDiagramVD42YOACValue60,
    trapezoid: blockDiagramVD42YOACValue61,
    inv_trapezoid: $e,
    rect_right_inv_arrow: blockDiagramVD42YOACValue62,
    cylinder: blockDiagramVD42YOACValue63,
    start: blockDiagramVD42YOACValue71,
    end: chunkAGHRB4JFN(
      (blockDiagramVD42YOACParam111, blockDiagramVD42YOACParam112) => {
        let blockDiagramVD42YOACValue325 = blockDiagramVD42YOACParam111
            .insert("g")
            .attr("class", "node default")
            .attr(
              "id",
              blockDiagramVD42YOACParam112.domId ||
                blockDiagramVD42YOACParam112.id,
            ),
          blockDiagramVD42YOACValue326 = blockDiagramVD42YOACValue325.insert(
            "circle",
            ":first-child",
          ),
          blockDiagramVD42YOACValue327 = blockDiagramVD42YOACValue325.insert(
            "circle",
            ":first-child",
          );
        return (
          blockDiagramVD42YOACValue327
            .attr("class", "state-start")
            .attr("r", 7)
            .attr("width", 14)
            .attr("height", 14),
          blockDiagramVD42YOACValue326
            .attr("class", "state-end")
            .attr("r", 5)
            .attr("width", 10)
            .attr("height", 10),
          blockDiagramVD42YOACValue50(
            blockDiagramVD42YOACParam112,
            blockDiagramVD42YOACValue327,
          ),
          (blockDiagramVD42YOACParam112.intersect = function (
            blockDiagramVD42YOACParam240,
          ) {
            return blockDiagramVD42YOACValue48.circle(
              blockDiagramVD42YOACParam112,
              7,
              blockDiagramVD42YOACParam240,
            );
          }),
          blockDiagramVD42YOACValue325
        );
      },
      "end",
    ),
    note: blockDiagramVD42YOACValue51,
    subroutine: blockDiagramVD42YOACValue70,
    fork: blockDiagramVD42YOACValue72,
    join: blockDiagramVD42YOACValue72,
    class_box: chunkAGHRB4JFN(
      async (blockDiagramVD42YOACParam15, blockDiagramVD42YOACParam16) => {
        let blockDiagramVD42YOACValue102 =
            blockDiagramVD42YOACParam16.padding / 2,
          blockDiagramVD42YOACValue103;
        blockDiagramVD42YOACValue103 = blockDiagramVD42YOACParam16.classes
          ? "node " + blockDiagramVD42YOACParam16.classes
          : "node default";
        let blockDiagramVD42YOACValue104 = blockDiagramVD42YOACParam15
            .insert("g")
            .attr("class", blockDiagramVD42YOACValue103)
            .attr(
              "id",
              blockDiagramVD42YOACParam16.domId ||
                blockDiagramVD42YOACParam16.id,
            ),
          blockDiagramVD42YOACValue105 = blockDiagramVD42YOACValue104.insert(
            "rect",
            ":first-child",
          ),
          blockDiagramVD42YOACValue106 =
            blockDiagramVD42YOACValue104.insert("line"),
          blockDiagramVD42YOACValue107 =
            blockDiagramVD42YOACValue104.insert("line"),
          blockDiagramVD42YOACValue108 = 0,
          blockDiagramVD42YOACValue109 = 4,
          blockDiagramVD42YOACValue110 = blockDiagramVD42YOACValue104
            .insert("g")
            .attr("class", "label"),
          blockDiagramVD42YOACValue111 = 0,
          blockDiagramVD42YOACValue112 =
            blockDiagramVD42YOACParam16.classData.annotations?.[0],
          blockDiagramVD42YOACValue113 = blockDiagramVD42YOACParam16.classData
            .annotations[0]
            ? "«" + blockDiagramVD42YOACParam16.classData.annotations[0] + "»"
            : "",
          blockDiagramVD42YOACValue114 = blockDiagramVD42YOACValue110
            .node()
            .appendChild(
              await blockDiagramVD42YOACValue29(
                blockDiagramVD42YOACValue113,
                blockDiagramVD42YOACParam16.labelStyle,
                true,
                true,
              ),
            ),
          blockDiagramVD42YOACValue115 = blockDiagramVD42YOACValue114.getBBox();
        if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
          let blockDiagramVD42YOACValue510 =
              blockDiagramVD42YOACValue114.children[0],
            blockDiagramVD42YOACValue511 = Src(blockDiagramVD42YOACValue114);
          blockDiagramVD42YOACValue115 =
            blockDiagramVD42YOACValue510.getBoundingClientRect();
          blockDiagramVD42YOACValue511.attr(
            "width",
            blockDiagramVD42YOACValue115.width,
          );
          blockDiagramVD42YOACValue511.attr(
            "height",
            blockDiagramVD42YOACValue115.height,
          );
        }
        blockDiagramVD42YOACParam16.classData.annotations[0] &&
          ((blockDiagramVD42YOACValue109 +=
            blockDiagramVD42YOACValue115.height + 4),
          (blockDiagramVD42YOACValue108 += blockDiagramVD42YOACValue115.width));
        let blockDiagramVD42YOACValue116 =
          blockDiagramVD42YOACParam16.classData.label;
        blockDiagramVD42YOACParam16.classData.type !== undefined &&
          blockDiagramVD42YOACParam16.classData.type !== "" &&
          (_chunkABZYJK2DL().flowchart.htmlLabels
            ? (blockDiagramVD42YOACValue116 +=
                "&lt;" + blockDiagramVD42YOACParam16.classData.type + "&gt;")
            : (blockDiagramVD42YOACValue116 +=
                "<" + blockDiagramVD42YOACParam16.classData.type + ">"));
        let blockDiagramVD42YOACValue117 = blockDiagramVD42YOACValue110
          .node()
          .appendChild(
            await blockDiagramVD42YOACValue29(
              blockDiagramVD42YOACValue116,
              blockDiagramVD42YOACParam16.labelStyle,
              true,
              true,
            ),
          );
        Src(blockDiagramVD42YOACValue117).attr("class", "classTitle");
        let blockDiagramVD42YOACValue118 =
          blockDiagramVD42YOACValue117.getBBox();
        if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
          let blockDiagramVD42YOACValue512 =
              blockDiagramVD42YOACValue117.children[0],
            blockDiagramVD42YOACValue513 = Src(blockDiagramVD42YOACValue117);
          blockDiagramVD42YOACValue118 =
            blockDiagramVD42YOACValue512.getBoundingClientRect();
          blockDiagramVD42YOACValue513.attr(
            "width",
            blockDiagramVD42YOACValue118.width,
          );
          blockDiagramVD42YOACValue513.attr(
            "height",
            blockDiagramVD42YOACValue118.height,
          );
        }
        blockDiagramVD42YOACValue109 += blockDiagramVD42YOACValue118.height + 4;
        blockDiagramVD42YOACValue118.width > blockDiagramVD42YOACValue108 &&
          (blockDiagramVD42YOACValue108 = blockDiagramVD42YOACValue118.width);
        let blockDiagramVD42YOACValue119 = [];
        blockDiagramVD42YOACParam16.classData.members.forEach(async (item) => {
          let blockDiagramVD42YOACValue320 = item.getDisplayDetails(),
            blockDiagramVD42YOACValue321 =
              blockDiagramVD42YOACValue320.displayText;
          _chunkABZYJK2DL().flowchart.htmlLabels &&
            (blockDiagramVD42YOACValue321 = blockDiagramVD42YOACValue321
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;"));
          let blockDiagramVD42YOACValue322 = blockDiagramVD42YOACValue110
              .node()
              .appendChild(
                await blockDiagramVD42YOACValue29(
                  blockDiagramVD42YOACValue321,
                  blockDiagramVD42YOACValue320.cssStyle
                    ? blockDiagramVD42YOACValue320.cssStyle
                    : blockDiagramVD42YOACParam16.labelStyle,
                  true,
                  true,
                ),
              ),
            blockDiagramVD42YOACValue323 =
              blockDiagramVD42YOACValue322.getBBox();
          if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
            let blockDiagramVD42YOACValue498 =
                blockDiagramVD42YOACValue322.children[0],
              blockDiagramVD42YOACValue499 = Src(blockDiagramVD42YOACValue322);
            blockDiagramVD42YOACValue323 =
              blockDiagramVD42YOACValue498.getBoundingClientRect();
            blockDiagramVD42YOACValue499.attr(
              "width",
              blockDiagramVD42YOACValue323.width,
            );
            blockDiagramVD42YOACValue499.attr(
              "height",
              blockDiagramVD42YOACValue323.height,
            );
          }
          blockDiagramVD42YOACValue323.width > blockDiagramVD42YOACValue108 &&
            (blockDiagramVD42YOACValue108 = blockDiagramVD42YOACValue323.width);
          blockDiagramVD42YOACValue109 +=
            blockDiagramVD42YOACValue323.height + 4;
          blockDiagramVD42YOACValue119.push(blockDiagramVD42YOACValue322);
        });
        blockDiagramVD42YOACValue109 += 8;
        let blockDiagramVD42YOACValue120 = [];
        if (
          (blockDiagramVD42YOACParam16.classData.methods.forEach(
            async (item) => {
              let blockDiagramVD42YOACValue315 = item.getDisplayDetails(),
                blockDiagramVD42YOACValue316 =
                  blockDiagramVD42YOACValue315.displayText;
              _chunkABZYJK2DL().flowchart.htmlLabels &&
                (blockDiagramVD42YOACValue316 = blockDiagramVD42YOACValue316
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;"));
              let blockDiagramVD42YOACValue317 = blockDiagramVD42YOACValue110
                  .node()
                  .appendChild(
                    await blockDiagramVD42YOACValue29(
                      blockDiagramVD42YOACValue316,
                      blockDiagramVD42YOACValue315.cssStyle
                        ? blockDiagramVD42YOACValue315.cssStyle
                        : blockDiagramVD42YOACParam16.labelStyle,
                      true,
                      true,
                    ),
                  ),
                blockDiagramVD42YOACValue318 =
                  blockDiagramVD42YOACValue317.getBBox();
              if (chunkABZYJK2DV(_chunkABZYJK2DL().flowchart.htmlLabels)) {
                let blockDiagramVD42YOACValue495 =
                    blockDiagramVD42YOACValue317.children[0],
                  blockDiagramVD42YOACValue496 = Src(
                    blockDiagramVD42YOACValue317,
                  );
                blockDiagramVD42YOACValue318 =
                  blockDiagramVD42YOACValue495.getBoundingClientRect();
                blockDiagramVD42YOACValue496.attr(
                  "width",
                  blockDiagramVD42YOACValue318.width,
                );
                blockDiagramVD42YOACValue496.attr(
                  "height",
                  blockDiagramVD42YOACValue318.height,
                );
              }
              blockDiagramVD42YOACValue318.width >
                blockDiagramVD42YOACValue108 &&
                (blockDiagramVD42YOACValue108 =
                  blockDiagramVD42YOACValue318.width);
              blockDiagramVD42YOACValue109 +=
                blockDiagramVD42YOACValue318.height + 4;
              blockDiagramVD42YOACValue120.push(blockDiagramVD42YOACValue317);
            },
          ),
          (blockDiagramVD42YOACValue109 += 8),
          blockDiagramVD42YOACValue112)
        ) {
          let blockDiagramVD42YOACValue494 =
            (blockDiagramVD42YOACValue108 -
              blockDiagramVD42YOACValue115.width) /
            2;
          Src(blockDiagramVD42YOACValue114).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramVD42YOACValue108) / 2 +
                blockDiagramVD42YOACValue494) +
              ", " +
              (-1 * blockDiagramVD42YOACValue109) / 2 +
              ")",
          );
          blockDiagramVD42YOACValue111 =
            blockDiagramVD42YOACValue115.height + 4;
        }
        let blockDiagramVD42YOACValue121 =
          (blockDiagramVD42YOACValue108 - blockDiagramVD42YOACValue118.width) /
          2;
        return (
          Src(blockDiagramVD42YOACValue117).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramVD42YOACValue108) / 2 +
                blockDiagramVD42YOACValue121) +
              ", " +
              ((-1 * blockDiagramVD42YOACValue109) / 2 +
                blockDiagramVD42YOACValue111) +
              ")",
          ),
          (blockDiagramVD42YOACValue111 +=
            blockDiagramVD42YOACValue118.height + 4),
          blockDiagramVD42YOACValue106
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramVD42YOACValue108 / 2 - blockDiagramVD42YOACValue102,
            )
            .attr(
              "x2",
              blockDiagramVD42YOACValue108 / 2 + blockDiagramVD42YOACValue102,
            )
            .attr(
              "y1",
              -blockDiagramVD42YOACValue109 / 2 -
                blockDiagramVD42YOACValue102 +
                8 +
                blockDiagramVD42YOACValue111,
            )
            .attr(
              "y2",
              -blockDiagramVD42YOACValue109 / 2 -
                blockDiagramVD42YOACValue102 +
                8 +
                blockDiagramVD42YOACValue111,
            ),
          (blockDiagramVD42YOACValue111 += 8),
          blockDiagramVD42YOACValue119.forEach((item) => {
            Src(item).attr(
              "transform",
              "translate( " +
                -blockDiagramVD42YOACValue108 / 2 +
                ", " +
                ((-1 * blockDiagramVD42YOACValue109) / 2 +
                  blockDiagramVD42YOACValue111 +
                  4) +
                ")",
            );
            let blockDiagramVD42YOACValue485 = item?.getBBox();
            blockDiagramVD42YOACValue111 +=
              (blockDiagramVD42YOACValue485?.height ?? 0) + 4;
          }),
          (blockDiagramVD42YOACValue111 += 8),
          blockDiagramVD42YOACValue107
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramVD42YOACValue108 / 2 - blockDiagramVD42YOACValue102,
            )
            .attr(
              "x2",
              blockDiagramVD42YOACValue108 / 2 + blockDiagramVD42YOACValue102,
            )
            .attr(
              "y1",
              -blockDiagramVD42YOACValue109 / 2 -
                blockDiagramVD42YOACValue102 +
                8 +
                blockDiagramVD42YOACValue111,
            )
            .attr(
              "y2",
              -blockDiagramVD42YOACValue109 / 2 -
                blockDiagramVD42YOACValue102 +
                8 +
                blockDiagramVD42YOACValue111,
            ),
          (blockDiagramVD42YOACValue111 += 8),
          blockDiagramVD42YOACValue120.forEach((item) => {
            Src(item).attr(
              "transform",
              "translate( " +
                -blockDiagramVD42YOACValue108 / 2 +
                ", " +
                ((-1 * blockDiagramVD42YOACValue109) / 2 +
                  blockDiagramVD42YOACValue111) +
                ")",
            );
            let blockDiagramVD42YOACValue493 = item?.getBBox();
            blockDiagramVD42YOACValue111 +=
              (blockDiagramVD42YOACValue493?.height ?? 0) + 4;
          }),
          blockDiagramVD42YOACValue105
            .attr("style", blockDiagramVD42YOACParam16.style)
            .attr("class", "outer title-state")
            .attr(
              "x",
              -blockDiagramVD42YOACValue108 / 2 - blockDiagramVD42YOACValue102,
            )
            .attr(
              "y",
              -(blockDiagramVD42YOACValue109 / 2) -
                blockDiagramVD42YOACValue102,
            )
            .attr(
              "width",
              blockDiagramVD42YOACValue108 +
                blockDiagramVD42YOACParam16.padding,
            )
            .attr(
              "height",
              blockDiagramVD42YOACValue109 +
                blockDiagramVD42YOACParam16.padding,
            ),
          blockDiagramVD42YOACValue50(
            blockDiagramVD42YOACParam16,
            blockDiagramVD42YOACValue105,
          ),
          (blockDiagramVD42YOACParam16.intersect = function (
            blockDiagramVD42YOACParam253,
          ) {
            return blockDiagramVD42YOACValue48.rect(
              blockDiagramVD42YOACParam16,
              blockDiagramVD42YOACParam253,
            );
          }),
          blockDiagramVD42YOACValue104
        );
      },
      "class_box",
    ),
  },
  blockDiagramVD42YOACValue74 = {},
  blockDiagramVD42YOACValue75 = chunkAGHRB4JFN(
    async (
      blockDiagramVD42YOACParam115,
      blockDiagramVD42YOACParam116,
      blockDiagramVD42YOACParam117,
    ) => {
      let blockDiagramVD42YOACValue329, blockDiagramVD42YOACValue330;
      if (blockDiagramVD42YOACParam116.link) {
        let blockDiagramVD42YOACValue477;
        _chunkABZYJK2DL().securityLevel === "sandbox"
          ? (blockDiagramVD42YOACValue477 = "_top")
          : blockDiagramVD42YOACParam116.linkTarget &&
            (blockDiagramVD42YOACValue477 =
              blockDiagramVD42YOACParam116.linkTarget || "_blank");
        blockDiagramVD42YOACValue329 = blockDiagramVD42YOACParam115
          .insert("svg:a")
          .attr("xlink:href", blockDiagramVD42YOACParam116.link)
          .attr("target", blockDiagramVD42YOACValue477);
        blockDiagramVD42YOACValue330 = await blockDiagramVD42YOACValue73[
          blockDiagramVD42YOACParam116.shape
        ](
          blockDiagramVD42YOACValue329,
          blockDiagramVD42YOACParam116,
          blockDiagramVD42YOACParam117,
        );
      } else {
        blockDiagramVD42YOACValue330 = await blockDiagramVD42YOACValue73[
          blockDiagramVD42YOACParam116.shape
        ](
          blockDiagramVD42YOACParam115,
          blockDiagramVD42YOACParam116,
          blockDiagramVD42YOACParam117,
        );
        blockDiagramVD42YOACValue329 = blockDiagramVD42YOACValue330;
      }
      return (
        blockDiagramVD42YOACParam116.tooltip &&
          blockDiagramVD42YOACValue330.attr(
            "title",
            blockDiagramVD42YOACParam116.tooltip,
          ),
        blockDiagramVD42YOACParam116.class &&
          blockDiagramVD42YOACValue330.attr(
            "class",
            "node default " + blockDiagramVD42YOACParam116.class,
          ),
        (blockDiagramVD42YOACValue74[blockDiagramVD42YOACParam116.id] =
          blockDiagramVD42YOACValue329),
        blockDiagramVD42YOACParam116.haveCallback &&
          blockDiagramVD42YOACValue74[blockDiagramVD42YOACParam116.id].attr(
            "class",
            blockDiagramVD42YOACValue74[blockDiagramVD42YOACParam116.id].attr(
              "class",
            ) + " clickable",
          ),
        blockDiagramVD42YOACValue329
      );
    },
    "insertNode",
  ),
  blockDiagramVD42YOACValue76 = chunkAGHRB4JFN(
    (blockDiagramVD42YOACParam134) => {
      let blockDiagramVD42YOACValue352 =
        blockDiagramVD42YOACValue74[blockDiagramVD42YOACParam134.id];
      chunkAGHRB4JFR.trace(
        "Transforming node",
        blockDiagramVD42YOACParam134.diff,
        blockDiagramVD42YOACParam134,
        "translate(" +
          (blockDiagramVD42YOACParam134.x -
            blockDiagramVD42YOACParam134.width / 2 -
            5) +
          ", " +
          blockDiagramVD42YOACParam134.width / 2 +
          ")",
      );
      let blockDiagramVD42YOACValue353 = blockDiagramVD42YOACParam134.diff || 0;
      return (
        blockDiagramVD42YOACParam134.clusterNode
          ? blockDiagramVD42YOACValue352.attr(
              "transform",
              "translate(" +
                (blockDiagramVD42YOACParam134.x +
                  blockDiagramVD42YOACValue353 -
                  blockDiagramVD42YOACParam134.width / 2) +
                ", " +
                (blockDiagramVD42YOACParam134.y -
                  blockDiagramVD42YOACParam134.height / 2 -
                  8) +
                ")",
            )
          : blockDiagramVD42YOACValue352.attr(
              "transform",
              "translate(" +
                blockDiagramVD42YOACParam134.x +
                ", " +
                blockDiagramVD42YOACParam134.y +
                ")",
            ),
        blockDiagramVD42YOACValue353
      );
    },
    "positionNode",
  );
function blockDiagramVD42YOACHelper18(
  blockDiagramVD42YOACParam37,
  blockDiagramVD42YOACParam38,
  blockDiagramVD42YOACParam39 = false,
) {
  let blockDiagramVD42YOACValue196 = blockDiagramVD42YOACParam37,
    blockDiagramVD42YOACValue197 = "default";
  (blockDiagramVD42YOACValue196?.classes?.length || 0) > 0 &&
    (blockDiagramVD42YOACValue197 = (
      blockDiagramVD42YOACValue196?.classes ?? []
    ).join(" "));
  blockDiagramVD42YOACValue197 += " flowchart-label";
  let blockDiagramVD42YOACValue198 = 0,
    blockDiagramVD42YOACValue199 = "",
    blockDiagramVD42YOACValue200;
  switch (blockDiagramVD42YOACValue196.type) {
    case "round":
      blockDiagramVD42YOACValue198 = 5;
      blockDiagramVD42YOACValue199 = "rect";
      break;
    case "composite":
      blockDiagramVD42YOACValue198 = 0;
      blockDiagramVD42YOACValue199 = "composite";
      blockDiagramVD42YOACValue200 = 0;
      break;
    case "square":
      blockDiagramVD42YOACValue199 = "rect";
      break;
    case "diamond":
      blockDiagramVD42YOACValue199 = "question";
      break;
    case "hexagon":
      blockDiagramVD42YOACValue199 = "hexagon";
      break;
    case "block_arrow":
      blockDiagramVD42YOACValue199 = "block_arrow";
      break;
    case "odd":
      blockDiagramVD42YOACValue199 = "rect_left_inv_arrow";
      break;
    case "lean_right":
      blockDiagramVD42YOACValue199 = "lean_right";
      break;
    case "lean_left":
      blockDiagramVD42YOACValue199 = "lean_left";
      break;
    case "trapezoid":
      blockDiagramVD42YOACValue199 = "trapezoid";
      break;
    case "inv_trapezoid":
      blockDiagramVD42YOACValue199 = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      blockDiagramVD42YOACValue199 = "rect_left_inv_arrow";
      break;
    case "circle":
      blockDiagramVD42YOACValue199 = "circle";
      break;
    case "ellipse":
      blockDiagramVD42YOACValue199 = "ellipse";
      break;
    case "stadium":
      blockDiagramVD42YOACValue199 = "stadium";
      break;
    case "subroutine":
      blockDiagramVD42YOACValue199 = "subroutine";
      break;
    case "cylinder":
      blockDiagramVD42YOACValue199 = "cylinder";
      break;
    case "group":
      blockDiagramVD42YOACValue199 = "rect";
      break;
    case "doublecircle":
      blockDiagramVD42YOACValue199 = "doublecircle";
      break;
    default:
      blockDiagramVD42YOACValue199 = "rect";
  }
  let blockDiagramVD42YOACValue201 = chunkS3R3BYOJC(
      blockDiagramVD42YOACValue196?.styles ?? [],
    ),
    blockDiagramVD42YOACValue202 = blockDiagramVD42YOACValue196.label,
    blockDiagramVD42YOACValue203 = blockDiagramVD42YOACValue196.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  return {
    labelStyle: blockDiagramVD42YOACValue201.labelStyle,
    shape: blockDiagramVD42YOACValue199,
    labelText: blockDiagramVD42YOACValue202,
    rx: blockDiagramVD42YOACValue198,
    ry: blockDiagramVD42YOACValue198,
    class: blockDiagramVD42YOACValue197,
    style: blockDiagramVD42YOACValue201.style,
    id: blockDiagramVD42YOACValue196.id,
    directions: blockDiagramVD42YOACValue196.directions,
    width: blockDiagramVD42YOACValue203.width,
    height: blockDiagramVD42YOACValue203.height,
    x: blockDiagramVD42YOACValue203.x,
    y: blockDiagramVD42YOACValue203.y,
    positioned: blockDiagramVD42YOACParam39,
    intersect: undefined,
    type: blockDiagramVD42YOACValue196.type,
    padding:
      blockDiagramVD42YOACValue200 ?? _chunkABZYJK2DY()?.block?.padding ?? 0,
  };
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper18, "getNodeFromBlock");
async function blockDiagramVD42YOACHelper19(
  blockDiagramVD42YOACParam175,
  blockDiagramVD42YOACParam176,
  blockDiagramVD42YOACParam177,
) {
  let blockDiagramVD42YOACValue458 = blockDiagramVD42YOACHelper18(
    blockDiagramVD42YOACParam176,
    blockDiagramVD42YOACParam177,
    false,
  );
  if (blockDiagramVD42YOACValue458.type === "group") return;
  let blockDiagramVD42YOACValue459 = await blockDiagramVD42YOACValue75(
      blockDiagramVD42YOACParam175,
      blockDiagramVD42YOACValue458,
      {
        config: _chunkABZYJK2DY(),
      },
    ),
    blockDiagramVD42YOACValue460 = blockDiagramVD42YOACValue459
      .node()
      .getBBox(),
    blockDiagramVD42YOACValue461 = blockDiagramVD42YOACParam177.getBlock(
      blockDiagramVD42YOACValue458.id,
    );
  blockDiagramVD42YOACValue461.size = {
    width: blockDiagramVD42YOACValue460.width,
    height: blockDiagramVD42YOACValue460.height,
    x: 0,
    y: 0,
    node: blockDiagramVD42YOACValue459,
  };
  blockDiagramVD42YOACParam177.setBlock(blockDiagramVD42YOACValue461);
  blockDiagramVD42YOACValue459.remove();
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper19, "calculateBlockSize");
async function _t(
  blockDiagramVD42YOACParam199,
  blockDiagramVD42YOACParam200,
  blockDiagramVD42YOACParam201,
) {
  let blockDiagramVD42YOACValue516 = blockDiagramVD42YOACHelper18(
    blockDiagramVD42YOACParam200,
    blockDiagramVD42YOACParam201,
    true,
  );
  blockDiagramVD42YOACParam201.getBlock(blockDiagramVD42YOACValue516.id)
    .type !== "space" &&
    (await blockDiagramVD42YOACValue75(
      blockDiagramVD42YOACParam199,
      blockDiagramVD42YOACValue516,
      {
        config: _chunkABZYJK2DY(),
      },
    ),
    (blockDiagramVD42YOACParam200.intersect =
      blockDiagramVD42YOACValue516?.intersect),
    blockDiagramVD42YOACValue76(blockDiagramVD42YOACValue516));
}
chunkAGHRB4JFN(_t, "insertBlockPositioned");
async function $(
  blockDiagramVD42YOACParam214,
  blockDiagramVD42YOACParam215,
  blockDiagramVD42YOACParam216,
  blockDiagramVD42YOACParam217,
) {
  for (let blockDiagramVD42YOACValue536 of blockDiagramVD42YOACParam215) {
    await blockDiagramVD42YOACParam217(
      blockDiagramVD42YOACParam214,
      blockDiagramVD42YOACValue536,
      blockDiagramVD42YOACParam216,
    );
    blockDiagramVD42YOACValue536.children &&
      (await $(
        blockDiagramVD42YOACParam214,
        blockDiagramVD42YOACValue536.children,
        blockDiagramVD42YOACParam216,
        blockDiagramVD42YOACParam217,
      ));
  }
}
chunkAGHRB4JFN($, "performOperations");
async function blockDiagramVD42YOACHelper20(
  blockDiagramVD42YOACParam256,
  blockDiagramVD42YOACParam257,
  blockDiagramVD42YOACParam258,
) {
  await $(
    blockDiagramVD42YOACParam256,
    blockDiagramVD42YOACParam257,
    blockDiagramVD42YOACParam258,
    blockDiagramVD42YOACHelper19,
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper20, "calculateBlockSizes");
async function blockDiagramVD42YOACHelper21(
  blockDiagramVD42YOACParam259,
  blockDiagramVD42YOACParam260,
  blockDiagramVD42YOACParam261,
) {
  await $(
    blockDiagramVD42YOACParam259,
    blockDiagramVD42YOACParam260,
    blockDiagramVD42YOACParam261,
    _t,
  );
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper21, "insertBlocks");
async function blockDiagramVD42YOACHelper22(
  blockDiagramVD42YOACParam49,
  blockDiagramVD42YOACParam50,
  blockDiagramVD42YOACParam51,
  blockDiagramVD42YOACParam52,
  blockDiagramVD42YOACParam53,
) {
  let blockDiagramVD42YOACValue224 = new Graphlib({
    multigraph: true,
    compound: true,
  });
  blockDiagramVD42YOACValue224.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8,
  });
  for (let blockDiagramVD42YOACValue527 of blockDiagramVD42YOACParam51)
    blockDiagramVD42YOACValue527.size &&
      blockDiagramVD42YOACValue224.setNode(blockDiagramVD42YOACValue527.id, {
        width: blockDiagramVD42YOACValue527.size.width,
        height: blockDiagramVD42YOACValue527.size.height,
        intersect: blockDiagramVD42YOACValue527.intersect,
      });
  for (let blockDiagramVD42YOACValue247 of blockDiagramVD42YOACParam50)
    if (
      blockDiagramVD42YOACValue247.start &&
      blockDiagramVD42YOACValue247.end
    ) {
      let blockDiagramVD42YOACValue248 = blockDiagramVD42YOACParam52.getBlock(
          blockDiagramVD42YOACValue247.start,
        ),
        blockDiagramVD42YOACValue249 = blockDiagramVD42YOACParam52.getBlock(
          blockDiagramVD42YOACValue247.end,
        );
      if (
        blockDiagramVD42YOACValue248?.size &&
        blockDiagramVD42YOACValue249?.size
      ) {
        let blockDiagramVD42YOACValue260 = blockDiagramVD42YOACValue248.size,
          blockDiagramVD42YOACValue261 = blockDiagramVD42YOACValue249.size,
          blockDiagramVD42YOACValue262 = [
            {
              x: blockDiagramVD42YOACValue260.x,
              y: blockDiagramVD42YOACValue260.y,
            },
            {
              x:
                blockDiagramVD42YOACValue260.x +
                (blockDiagramVD42YOACValue261.x -
                  blockDiagramVD42YOACValue260.x) /
                  2,
              y:
                blockDiagramVD42YOACValue260.y +
                (blockDiagramVD42YOACValue261.y -
                  blockDiagramVD42YOACValue260.y) /
                  2,
            },
            {
              x: blockDiagramVD42YOACValue261.x,
              y: blockDiagramVD42YOACValue261.y,
            },
          ];
        blockDiagramVD42YOACValue40(
          blockDiagramVD42YOACParam49,
          {
            v: blockDiagramVD42YOACValue247.start,
            w: blockDiagramVD42YOACValue247.end,
            name: blockDiagramVD42YOACValue247.id,
          },
          {
            ...blockDiagramVD42YOACValue247,
            arrowTypeEnd: blockDiagramVD42YOACValue247.arrowTypeEnd,
            arrowTypeStart: blockDiagramVD42YOACValue247.arrowTypeStart,
            points: blockDiagramVD42YOACValue262,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          },
          undefined,
          "block",
          blockDiagramVD42YOACValue224,
          blockDiagramVD42YOACParam53,
        );
        blockDiagramVD42YOACValue247.label &&
          (await blockDiagramVD42YOACValue35(blockDiagramVD42YOACParam49, {
            ...blockDiagramVD42YOACValue247,
            label: blockDiagramVD42YOACValue247.label,
            labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
            arrowTypeEnd: blockDiagramVD42YOACValue247.arrowTypeEnd,
            arrowTypeStart: blockDiagramVD42YOACValue247.arrowTypeStart,
            points: blockDiagramVD42YOACValue262,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          }),
          blockDiagramVD42YOACValue36(
            {
              ...blockDiagramVD42YOACValue247,
              x: blockDiagramVD42YOACValue262[1].x,
              y: blockDiagramVD42YOACValue262[1].y,
            },
            {
              originalPath: blockDiagramVD42YOACValue262,
            },
          ));
      }
    }
}
chunkAGHRB4JFN(blockDiagramVD42YOACHelper22, "insertEdges");
export const BlockDiagramVD42YOAC = {
  parser: blockDiagramVD42YOACValue2,
  db: blockDiagramVD42YOACValue21,
  renderer: {
    draw: chunkAGHRB4JFN(async function (
      blockDiagramVD42YOACParam82,
      blockDiagramVD42YOACParam83,
      blockDiagramVD42YOACParam84,
      blockDiagramVD42YOACParam85,
    ) {
      let { securityLevel, block } = _chunkABZYJK2DY(),
        blockDiagramVD42YOACValue277 = blockDiagramVD42YOACParam85.db,
        blockDiagramVD42YOACValue278;
      securityLevel === "sandbox" &&
        (blockDiagramVD42YOACValue278 = Src(
          "#i" + blockDiagramVD42YOACParam83,
        ));
      let blockDiagramVD42YOACValue279 = Src(
          securityLevel === "sandbox"
            ? blockDiagramVD42YOACValue278.nodes()[0].contentDocument.body
            : "body",
        ),
        blockDiagramVD42YOACValue280 =
          securityLevel === "sandbox"
            ? blockDiagramVD42YOACValue279.select(
                `[id="${blockDiagramVD42YOACParam83}"]`,
              )
            : Src(`[id="${blockDiagramVD42YOACParam83}"]`);
      blockDiagramVD42YOACValue26(
        blockDiagramVD42YOACValue280,
        ["point", "circle", "cross"],
        blockDiagramVD42YOACParam85.type,
        blockDiagramVD42YOACParam83,
      );
      let blockDiagramVD42YOACValue281 =
          blockDiagramVD42YOACValue277.getBlocks(),
        blockDiagramVD42YOACValue282 =
          blockDiagramVD42YOACValue277.getBlocksFlat(),
        blockDiagramVD42YOACValue283 = blockDiagramVD42YOACValue277.getEdges(),
        blockDiagramVD42YOACValue284 = blockDiagramVD42YOACValue280
          .insert("g")
          .attr("class", "block");
      await blockDiagramVD42YOACHelper20(
        blockDiagramVD42YOACValue284,
        blockDiagramVD42YOACValue281,
        blockDiagramVD42YOACValue277,
      );
      let blockDiagramVD42YOACValue285 = blockDiagramVD42YOACHelper7(
        blockDiagramVD42YOACValue277,
      );
      if (
        (await blockDiagramVD42YOACHelper21(
          blockDiagramVD42YOACValue284,
          blockDiagramVD42YOACValue281,
          blockDiagramVD42YOACValue277,
        ),
        await blockDiagramVD42YOACHelper22(
          blockDiagramVD42YOACValue284,
          blockDiagramVD42YOACValue283,
          blockDiagramVD42YOACValue282,
          blockDiagramVD42YOACValue277,
          blockDiagramVD42YOACParam83,
        ),
        blockDiagramVD42YOACValue285)
      ) {
        let blockDiagramVD42YOACValue436 = blockDiagramVD42YOACValue285,
          blockDiagramVD42YOACValue437 = Math.max(
            1,
            Math.round(
              0.125 *
                (blockDiagramVD42YOACValue436.width /
                  blockDiagramVD42YOACValue436.height),
            ),
          ),
          blockDiagramVD42YOACValue438 =
            blockDiagramVD42YOACValue436.height +
            blockDiagramVD42YOACValue437 +
            10,
          blockDiagramVD42YOACValue439 =
            blockDiagramVD42YOACValue436.width + 10,
          { useMaxWidth } = block;
        _chunkABZYJK2DN(
          blockDiagramVD42YOACValue280,
          blockDiagramVD42YOACValue438,
          blockDiagramVD42YOACValue439,
          !!useMaxWidth,
        );
        chunkAGHRB4JFR.debug(
          "Here Bounds",
          blockDiagramVD42YOACValue285,
          blockDiagramVD42YOACValue436,
        );
        blockDiagramVD42YOACValue280.attr(
          "viewBox",
          `${blockDiagramVD42YOACValue436.x - 5} ${blockDiagramVD42YOACValue436.y - 5} ${blockDiagramVD42YOACValue436.width + 10} ${blockDiagramVD42YOACValue436.height + 10}`,
        );
      }
    }, "draw"),
    getClasses: chunkAGHRB4JFN(function (
      blockDiagramVD42YOACParam254,
      blockDiagramVD42YOACParam255,
    ) {
      return blockDiagramVD42YOACParam255.db.getClasses();
    }, "getClasses"),
  },
  styles: blockDiagramVD42YOACValue23,
};
