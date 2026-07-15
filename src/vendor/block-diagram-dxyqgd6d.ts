// Restored from ref/webview/assets/blockDiagram-DXYQGD6D-CTLy8H2I.js
// Flat boundary. Vendored blockDiagramDXYQGD6D chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { line } from "./d3-shape-line";
import { stepH } from "./d3-shape-curves";
import { clone } from "./lodash-clone-deep";
import { invertS } from "./color-convert";
import { channel } from "./color-channel";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXL,
  _chunkICPOFSXXP,
  _chunkICPOFSXXR,
  chunkICPOFSXXX,
  chunkICPOFSXXJ,
  _chunkICPOFSXXO,
  chunkICPOFSXXT,
  chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import {
  chunk5PVQY5BWS,
  chunk5PVQY5BWC,
  chunk5PVQY5BWD,
} from "./chunk-5pvqy5bw";
import { chunkU2HBQHQKA } from "./chunk-u2hbqhqk";
import { chunkFMBD7UC4 } from "../utils/chunk-fmbd7-uc4";
import { chunkBSJP7CBPI, chunkBSJP7CBPR } from "./chunk-bsjp7cbp";
import { chunkZZ45TVLEN, chunkZZ45TVLET } from "./chunk-zz45tvle";
import { Graphlib } from "./graphlib-alt";
var blockDiagramDXYQGD6DValue1 = (function () {
  var blockDiagramDXYQGD6DValue76 = chunkAGHRB4JFN(function (
      blockDiagramDXYQGD6DParam218,
      blockDiagramDXYQGD6DParam219,
      blockDiagramDXYQGD6DParam220,
      blockDiagramDXYQGD6DParam221,
    ) {
      for (
        blockDiagramDXYQGD6DParam220 ||= {},
          blockDiagramDXYQGD6DParam221 = blockDiagramDXYQGD6DParam218.length;
        blockDiagramDXYQGD6DParam221--;
        blockDiagramDXYQGD6DParam220[
          blockDiagramDXYQGD6DParam218[blockDiagramDXYQGD6DParam221]
        ] = blockDiagramDXYQGD6DParam219
      );
      return blockDiagramDXYQGD6DParam220;
    }, "o"),
    blockDiagramDXYQGD6DValue77 = [1, 15],
    blockDiagramDXYQGD6DValue78 = [1, 7],
    blockDiagramDXYQGD6DValue79 = [1, 13],
    blockDiagramDXYQGD6DValue80 = [1, 14],
    blockDiagramDXYQGD6DValue81 = [1, 19],
    blockDiagramDXYQGD6DValue82 = [1, 16],
    blockDiagramDXYQGD6DValue83 = [1, 17],
    blockDiagramDXYQGD6DValue84 = [1, 18],
    blockDiagramDXYQGD6DValue85 = [8, 30],
    blockDiagramDXYQGD6DValue86 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46],
    blockDiagramDXYQGD6DValue87 = [1, 23],
    blockDiagramDXYQGD6DValue88 = [1, 24],
    blockDiagramDXYQGD6DValue89 = [
      8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46,
    ],
    blockDiagramDXYQGD6DValue90 = [
      8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46,
    ],
    blockDiagramDXYQGD6DValue91 = [1, 49],
    blockDiagramDXYQGD6DValue92 = {
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
        blockDiagramDXYQGD6DParam5,
        blockDiagramDXYQGD6DParam6,
        blockDiagramDXYQGD6DParam7,
        blockDiagramDXYQGD6DParam8,
        blockDiagramDXYQGD6DParam9,
        blockDiagramDXYQGD6DParam10,
        blockDiagramDXYQGD6DParam11,
      ) {
        var blockDiagramDXYQGD6DValue93 =
          blockDiagramDXYQGD6DParam10.length - 1;
        switch (blockDiagramDXYQGD6DParam9) {
          case 4:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug("Rule: separator (NL) ");
            break;
          case 5:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug("Rule: separator (Space) ");
            break;
          case 6:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug("Rule: separator (EOF) ");
            break;
          case 7:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: hierarchy: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
              );
            blockDiagramDXYQGD6DParam8.setHierarchy(
              blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            );
            break;
          case 8:
            blockDiagramDXYQGD6DParam8.getLogger().debug("Stop NL ");
            break;
          case 9:
            blockDiagramDXYQGD6DParam8.getLogger().debug("Stop EOF ");
            break;
          case 10:
            blockDiagramDXYQGD6DParam8.getLogger().debug("Stop NL2 ");
            break;
          case 11:
            blockDiagramDXYQGD6DParam8.getLogger().debug("Stop EOF2 ");
            break;
          case 12:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: statement: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            typeof blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
              .length == "number"
              ? (this.$ =
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93])
              : (this.$ = [
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
                ]);
            break;
          case 13:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: statement #2: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
              );
            this.$ = [
              blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            ].concat(blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]);
            break;
          case 14:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: link: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
                blockDiagramDXYQGD6DParam5,
              );
            this.$ = {
              edgeTypeStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              label: "",
            };
            break;
          case 15:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: LABEL link: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 3],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              edgeTypeStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            };
            break;
          case 18:
            let blockDiagramDXYQGD6DValue94 = parseInt(
              blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
            );
            this.$ = {
              id: blockDiagramDXYQGD6DParam8.generateId(),
              type: "space",
              label: "",
              width: blockDiagramDXYQGD6DValue94,
              children: [],
            };
            break;
          case 23:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: (nodeStatement link node) ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
                " typestr: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                  .edgeTypeStr,
              );
            let blockDiagramDXYQGD6DValue95 =
              blockDiagramDXYQGD6DParam8.edgeStrToEdgeData(
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                  .edgeTypeStr,
              );
            this.$ = [
              {
                id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2]
                  .id,
                label:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2]
                    .label,
                type: blockDiagramDXYQGD6DParam10[
                  blockDiagramDXYQGD6DValue93 - 2
                ].type,
                directions:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2]
                    .directions,
              },
              {
                id:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2]
                    .id +
                  "-" +
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].id,
                start:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2]
                    .id,
                end: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                  .id,
                label:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                    .label,
                type: "edge",
                directions:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                    .directions,
                arrowTypeEnd: blockDiagramDXYQGD6DValue95,
                arrowTypeStart: "arrow_open",
              },
              {
                id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].id,
                label:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                    .label,
                type: blockDiagramDXYQGD6DParam8.typeStr2Type(
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                    .typeStr,
                ),
                directions:
                  blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                    .directions,
              },
            ];
            break;
          case 24:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: nodeStatement (abc88 node size) ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                .id,
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                  .label,
              type: blockDiagramDXYQGD6DParam8.typeStr2Type(
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                  .typeStr,
              ),
              directions:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1]
                  .directions,
              widthInColumns: parseInt(
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
                10,
              ),
            };
            break;
          case 25:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: nodeStatement (node) ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].id,
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].label,
              type: blockDiagramDXYQGD6DParam8.typeStr2Type(
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                  .typeStr,
              ),
              directions:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                  .directions,
              widthInColumns: 1,
            };
            break;
          case 26:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug("APA123", this ? this : "na");
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "COLUMNS: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              type: "column-setting",
              columns:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93] ===
                "auto"
                  ? -1
                  : parseInt(
                      blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
                    ),
            };
            break;
          case 27:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: id-block statement : ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
              );
            blockDiagramDXYQGD6DParam8.generateId();
            this.$ = {
              ...blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
              type: "composite",
              children:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            };
            break;
          case 28:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: blockStatement : ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              id: blockDiagramDXYQGD6DParam8.generateId(),
              type: "composite",
              label: "",
              children:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            };
            break;
          case 29:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: node (NODE_ID separator): ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
            };
            break;
          case 30:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: node (NODE_ID nodeShapeNLabel separator): ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              id: blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].label,
              typeStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                  .typeStr,
              directions:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]
                  .directions,
            };
            break;
          case 31:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: dirList: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = [blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]];
            break;
          case 32:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: dirList: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = [
              blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            ].concat(blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93]);
            break;
          case 33:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: nodeShapeNLabel: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              typeStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2] +
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            };
            break;
          case 34:
            blockDiagramDXYQGD6DParam8
              .getLogger()
              .debug(
                "Rule: BLOCK_ARROW nodeShapeNLabel: ",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 3],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
                " #3:",
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              );
            this.$ = {
              typeStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 3] +
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93],
              label:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 2],
              directions:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93 - 1],
            };
            break;
          case 35:
          case 36:
            this.$ = {
              type: "classDef",
              id: blockDiagramDXYQGD6DParam10[
                blockDiagramDXYQGD6DValue93 - 1
              ].trim(),
              css: blockDiagramDXYQGD6DParam10[
                blockDiagramDXYQGD6DValue93
              ].trim(),
            };
            break;
          case 37:
            this.$ = {
              type: "applyClass",
              id: blockDiagramDXYQGD6DParam10[
                blockDiagramDXYQGD6DValue93 - 1
              ].trim(),
              styleClass:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].trim(),
            };
            break;
          case 38:
            this.$ = {
              type: "applyStyles",
              id: blockDiagramDXYQGD6DParam10[
                blockDiagramDXYQGD6DValue93 - 1
              ].trim(),
              stylesStr:
                blockDiagramDXYQGD6DParam10[blockDiagramDXYQGD6DValue93].trim(),
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
          10: blockDiagramDXYQGD6DValue77,
          11: 3,
          13: 4,
          19: 5,
          20: 6,
          21: blockDiagramDXYQGD6DValue78,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramDXYQGD6DValue79,
          29: blockDiagramDXYQGD6DValue80,
          31: blockDiagramDXYQGD6DValue81,
          39: blockDiagramDXYQGD6DValue82,
          43: blockDiagramDXYQGD6DValue83,
          46: blockDiagramDXYQGD6DValue84,
        },
        {
          8: [1, 20],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue85, [2, 12], {
          13: 4,
          19: 5,
          20: 6,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          11: 21,
          10: blockDiagramDXYQGD6DValue77,
          21: blockDiagramDXYQGD6DValue78,
          28: blockDiagramDXYQGD6DValue79,
          29: blockDiagramDXYQGD6DValue80,
          31: blockDiagramDXYQGD6DValue81,
          39: blockDiagramDXYQGD6DValue82,
          43: blockDiagramDXYQGD6DValue83,
          46: blockDiagramDXYQGD6DValue84,
        }),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 16], {
          14: 22,
          15: blockDiagramDXYQGD6DValue87,
          16: blockDiagramDXYQGD6DValue88,
        }),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 17]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 18]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 19]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 20]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 21]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 22]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue89, [2, 25], {
          27: [1, 25],
        }),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 26]),
        {
          19: 26,
          26: 12,
          31: blockDiagramDXYQGD6DValue81,
        },
        {
          10: blockDiagramDXYQGD6DValue77,
          11: 27,
          13: 4,
          19: 5,
          20: 6,
          21: blockDiagramDXYQGD6DValue78,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramDXYQGD6DValue79,
          29: blockDiagramDXYQGD6DValue80,
          31: blockDiagramDXYQGD6DValue81,
          39: blockDiagramDXYQGD6DValue82,
          43: blockDiagramDXYQGD6DValue83,
          46: blockDiagramDXYQGD6DValue84,
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
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue90, [2, 29], {
          32: 32,
          35: [1, 33],
          37: [1, 34],
        }),
        {
          1: [2, 7],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue85, [2, 13]),
        {
          26: 35,
          31: blockDiagramDXYQGD6DValue81,
        },
        {
          31: [2, 14],
        },
        {
          17: [1, 36],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue89, [2, 24]),
        {
          10: blockDiagramDXYQGD6DValue77,
          11: 37,
          13: 4,
          14: 22,
          15: blockDiagramDXYQGD6DValue87,
          16: blockDiagramDXYQGD6DValue88,
          19: 5,
          20: 6,
          21: blockDiagramDXYQGD6DValue78,
          22: 8,
          23: 9,
          24: 10,
          25: 11,
          26: 12,
          28: blockDiagramDXYQGD6DValue79,
          29: blockDiagramDXYQGD6DValue80,
          31: blockDiagramDXYQGD6DValue81,
          39: blockDiagramDXYQGD6DValue82,
          43: blockDiagramDXYQGD6DValue83,
          46: blockDiagramDXYQGD6DValue84,
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
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue90, [2, 30]),
        {
          18: [1, 43],
        },
        {
          18: [1, 44],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue89, [2, 23]),
        {
          18: [1, 45],
        },
        {
          30: [1, 46],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 28]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 35]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 36]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 37]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 38]),
        {
          36: [1, 47],
        },
        {
          33: 48,
          34: blockDiagramDXYQGD6DValue91,
        },
        {
          15: [1, 50],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue86, [2, 27]),
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue90, [2, 33]),
        {
          38: [1, 51],
        },
        {
          33: 52,
          34: blockDiagramDXYQGD6DValue91,
          38: [2, 31],
        },
        {
          31: [2, 15],
        },
        blockDiagramDXYQGD6DValue76(blockDiagramDXYQGD6DValue90, [2, 34]),
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
        blockDiagramDXYQGD6DParam206,
        blockDiagramDXYQGD6DParam207,
      ) {
        if (blockDiagramDXYQGD6DParam207.recoverable)
          this.trace(blockDiagramDXYQGD6DParam206);
        else {
          var blockDiagramDXYQGD6DValue533 = Error(
            blockDiagramDXYQGD6DParam206,
          );
          throw (
            (blockDiagramDXYQGD6DValue533.hash = blockDiagramDXYQGD6DParam207),
            blockDiagramDXYQGD6DValue533
          );
        }
      }, "parseError"),
      parse: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam17) {
        var blockDiagramDXYQGD6DValue120 = this,
          blockDiagramDXYQGD6DValue121 = [0],
          blockDiagramDXYQGD6DValue122 = [],
          blockDiagramDXYQGD6DValue123 = [null],
          blockDiagramDXYQGD6DValue124 = [],
          blockDiagramDXYQGD6DValue125 = this.table,
          blockDiagramDXYQGD6DValue126 = "",
          blockDiagramDXYQGD6DValue127 = 0,
          blockDiagramDXYQGD6DValue128 = 0,
          blockDiagramDXYQGD6DValue129 = 0,
          blockDiagramDXYQGD6DValue132 =
            blockDiagramDXYQGD6DValue124.slice.call(arguments, 1),
          blockDiagramDXYQGD6DValue133 = Object.create(this.lexer),
          blockDiagramDXYQGD6DValue134 = {
            yy: {},
          };
        for (var blockDiagramDXYQGD6DValue135 in this.yy)
          Object.prototype.hasOwnProperty.call(
            this.yy,
            blockDiagramDXYQGD6DValue135,
          ) &&
            (blockDiagramDXYQGD6DValue134.yy[blockDiagramDXYQGD6DValue135] =
              this.yy[blockDiagramDXYQGD6DValue135]);
        blockDiagramDXYQGD6DValue133.setInput(
          blockDiagramDXYQGD6DParam17,
          blockDiagramDXYQGD6DValue134.yy,
        );
        blockDiagramDXYQGD6DValue134.yy.lexer = blockDiagramDXYQGD6DValue133;
        blockDiagramDXYQGD6DValue134.yy.parser = this;
        blockDiagramDXYQGD6DValue133.yylloc === undefined &&
          (blockDiagramDXYQGD6DValue133.yylloc = {});
        var blockDiagramDXYQGD6DValue136 = blockDiagramDXYQGD6DValue133.yylloc;
        blockDiagramDXYQGD6DValue124.push(blockDiagramDXYQGD6DValue136);
        var blockDiagramDXYQGD6DValue137 =
          blockDiagramDXYQGD6DValue133.options &&
          blockDiagramDXYQGD6DValue133.options.ranges;
        typeof blockDiagramDXYQGD6DValue134.yy.parseError == "function"
          ? (this.parseError = blockDiagramDXYQGD6DValue134.yy.parseError)
          : (this.parseError = Object.getPrototypeOf(this).parseError);
        function blockDiagramDXYQGD6DHelper24(blockDiagramDXYQGD6DParam224) {
          blockDiagramDXYQGD6DValue121.length -=
            2 * blockDiagramDXYQGD6DParam224;
          blockDiagramDXYQGD6DValue123.length -= blockDiagramDXYQGD6DParam224;
          blockDiagramDXYQGD6DValue124.length -= blockDiagramDXYQGD6DParam224;
        }
        chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper24, "popStack");
        function blockDiagramDXYQGD6DHelper25() {
          var blockDiagramDXYQGD6DValue473 =
            blockDiagramDXYQGD6DValue122.pop() ||
            blockDiagramDXYQGD6DValue133.lex() ||
            1;
          return (
            typeof blockDiagramDXYQGD6DValue473 != "number" &&
              (blockDiagramDXYQGD6DValue473 instanceof Array &&
                ((blockDiagramDXYQGD6DValue122 = blockDiagramDXYQGD6DValue473),
                (blockDiagramDXYQGD6DValue473 =
                  blockDiagramDXYQGD6DValue122.pop())),
              (blockDiagramDXYQGD6DValue473 =
                blockDiagramDXYQGD6DValue120.symbols_[
                  blockDiagramDXYQGD6DValue473
                ] || blockDiagramDXYQGD6DValue473)),
            blockDiagramDXYQGD6DValue473
          );
        }
        chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper25, "lex");
        for (
          var blockDiagramDXYQGD6DValue138,
            blockDiagramDXYQGD6DValue139,
            blockDiagramDXYQGD6DValue140,
            blockDiagramDXYQGD6DValue141,
            blockDiagramDXYQGD6DValue142,
            blockDiagramDXYQGD6DValue143 = {},
            blockDiagramDXYQGD6DValue144,
            blockDiagramDXYQGD6DValue145,
            blockDiagramDXYQGD6DValue146,
            blockDiagramDXYQGD6DValue147;
          ;

        ) {
          if (
            ((blockDiagramDXYQGD6DValue140 =
              blockDiagramDXYQGD6DValue121[
                blockDiagramDXYQGD6DValue121.length - 1
              ]),
            this.defaultActions[blockDiagramDXYQGD6DValue140]
              ? (blockDiagramDXYQGD6DValue141 =
                  this.defaultActions[blockDiagramDXYQGD6DValue140])
              : ((blockDiagramDXYQGD6DValue138 ??=
                  blockDiagramDXYQGD6DHelper25()),
                (blockDiagramDXYQGD6DValue141 =
                  blockDiagramDXYQGD6DValue125[blockDiagramDXYQGD6DValue140] &&
                  blockDiagramDXYQGD6DValue125[blockDiagramDXYQGD6DValue140][
                    blockDiagramDXYQGD6DValue138
                  ])),
            blockDiagramDXYQGD6DValue141 === undefined ||
              !blockDiagramDXYQGD6DValue141.length ||
              !blockDiagramDXYQGD6DValue141[0])
          ) {
            var blockDiagramDXYQGD6DValue148 = "";
            for (blockDiagramDXYQGD6DValue144 in ((blockDiagramDXYQGD6DValue147 =
              []),
            blockDiagramDXYQGD6DValue125[blockDiagramDXYQGD6DValue140]))
              this.terminals_[blockDiagramDXYQGD6DValue144] &&
                blockDiagramDXYQGD6DValue144 > 2 &&
                blockDiagramDXYQGD6DValue147.push(
                  "'" + this.terminals_[blockDiagramDXYQGD6DValue144] + "'",
                );
            blockDiagramDXYQGD6DValue148 =
              blockDiagramDXYQGD6DValue133.showPosition
                ? "Parse error on line " +
                  (blockDiagramDXYQGD6DValue127 + 1) +
                  ":\n" +
                  blockDiagramDXYQGD6DValue133.showPosition() +
                  "\nExpecting " +
                  blockDiagramDXYQGD6DValue147.join(", ") +
                  ", got '" +
                  (this.terminals_[blockDiagramDXYQGD6DValue138] ||
                    blockDiagramDXYQGD6DValue138) +
                  "'"
                : "Parse error on line " +
                  (blockDiagramDXYQGD6DValue127 + 1) +
                  ": Unexpected " +
                  (blockDiagramDXYQGD6DValue138 == 1
                    ? "end of input"
                    : "'" +
                      (this.terminals_[blockDiagramDXYQGD6DValue138] ||
                        blockDiagramDXYQGD6DValue138) +
                      "'");
            this.parseError(blockDiagramDXYQGD6DValue148, {
              text: blockDiagramDXYQGD6DValue133.match,
              token:
                this.terminals_[blockDiagramDXYQGD6DValue138] ||
                blockDiagramDXYQGD6DValue138,
              line: blockDiagramDXYQGD6DValue133.yylineno,
              loc: blockDiagramDXYQGD6DValue136,
              expected: blockDiagramDXYQGD6DValue147,
            });
          }
          if (
            blockDiagramDXYQGD6DValue141[0] instanceof Array &&
            blockDiagramDXYQGD6DValue141.length > 1
          )
            throw Error(
              "Parse Error: multiple actions possible at state: " +
                blockDiagramDXYQGD6DValue140 +
                ", token: " +
                blockDiagramDXYQGD6DValue138,
            );
          switch (blockDiagramDXYQGD6DValue141[0]) {
            case 1:
              blockDiagramDXYQGD6DValue121.push(blockDiagramDXYQGD6DValue138);
              blockDiagramDXYQGD6DValue123.push(
                blockDiagramDXYQGD6DValue133.yytext,
              );
              blockDiagramDXYQGD6DValue124.push(
                blockDiagramDXYQGD6DValue133.yylloc,
              );
              blockDiagramDXYQGD6DValue121.push(
                blockDiagramDXYQGD6DValue141[1],
              );
              blockDiagramDXYQGD6DValue138 = null;
              blockDiagramDXYQGD6DValue139
                ? ((blockDiagramDXYQGD6DValue138 =
                    blockDiagramDXYQGD6DValue139),
                  (blockDiagramDXYQGD6DValue139 = null))
                : ((blockDiagramDXYQGD6DValue128 =
                    blockDiagramDXYQGD6DValue133.yyleng),
                  (blockDiagramDXYQGD6DValue126 =
                    blockDiagramDXYQGD6DValue133.yytext),
                  (blockDiagramDXYQGD6DValue127 =
                    blockDiagramDXYQGD6DValue133.yylineno),
                  (blockDiagramDXYQGD6DValue136 =
                    blockDiagramDXYQGD6DValue133.yylloc),
                  blockDiagramDXYQGD6DValue129 > 0 &&
                    blockDiagramDXYQGD6DValue129--);
              break;
            case 2:
              if (
                ((blockDiagramDXYQGD6DValue145 =
                  this.productions_[blockDiagramDXYQGD6DValue141[1]][1]),
                (blockDiagramDXYQGD6DValue143.$ =
                  blockDiagramDXYQGD6DValue123[
                    blockDiagramDXYQGD6DValue123.length -
                      blockDiagramDXYQGD6DValue145
                  ]),
                (blockDiagramDXYQGD6DValue143._$ = {
                  first_line:
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length -
                        (blockDiagramDXYQGD6DValue145 || 1)
                    ].first_line,
                  last_line:
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length - 1
                    ].last_line,
                  first_column:
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length -
                        (blockDiagramDXYQGD6DValue145 || 1)
                    ].first_column,
                  last_column:
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length - 1
                    ].last_column,
                }),
                blockDiagramDXYQGD6DValue137 &&
                  (blockDiagramDXYQGD6DValue143._$.range = [
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length -
                        (blockDiagramDXYQGD6DValue145 || 1)
                    ].range[0],
                    blockDiagramDXYQGD6DValue124[
                      blockDiagramDXYQGD6DValue124.length - 1
                    ].range[1],
                  ]),
                (blockDiagramDXYQGD6DValue142 = this.performAction.apply(
                  blockDiagramDXYQGD6DValue143,
                  [
                    blockDiagramDXYQGD6DValue126,
                    blockDiagramDXYQGD6DValue128,
                    blockDiagramDXYQGD6DValue127,
                    blockDiagramDXYQGD6DValue134.yy,
                    blockDiagramDXYQGD6DValue141[1],
                    blockDiagramDXYQGD6DValue123,
                    blockDiagramDXYQGD6DValue124,
                  ].concat(blockDiagramDXYQGD6DValue132),
                )),
                blockDiagramDXYQGD6DValue142 !== undefined)
              )
                return blockDiagramDXYQGD6DValue142;
              blockDiagramDXYQGD6DValue145 &&
                ((blockDiagramDXYQGD6DValue121 =
                  blockDiagramDXYQGD6DValue121.slice(
                    0,
                    -1 * blockDiagramDXYQGD6DValue145 * 2,
                  )),
                (blockDiagramDXYQGD6DValue123 =
                  blockDiagramDXYQGD6DValue123.slice(
                    0,
                    -1 * blockDiagramDXYQGD6DValue145,
                  )),
                (blockDiagramDXYQGD6DValue124 =
                  blockDiagramDXYQGD6DValue124.slice(
                    0,
                    -1 * blockDiagramDXYQGD6DValue145,
                  )));
              blockDiagramDXYQGD6DValue121.push(
                this.productions_[blockDiagramDXYQGD6DValue141[1]][0],
              );
              blockDiagramDXYQGD6DValue123.push(blockDiagramDXYQGD6DValue143.$);
              blockDiagramDXYQGD6DValue124.push(
                blockDiagramDXYQGD6DValue143._$,
              );
              blockDiagramDXYQGD6DValue146 =
                blockDiagramDXYQGD6DValue125[
                  blockDiagramDXYQGD6DValue121[
                    blockDiagramDXYQGD6DValue121.length - 2
                  ]
                ][
                  blockDiagramDXYQGD6DValue121[
                    blockDiagramDXYQGD6DValue121.length - 1
                  ]
                ];
              blockDiagramDXYQGD6DValue121.push(blockDiagramDXYQGD6DValue146);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse"),
    };
  blockDiagramDXYQGD6DValue92.lexer = (function () {
    return {
      EOF: 1,
      parseError: chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DParam214,
        blockDiagramDXYQGD6DParam215,
      ) {
        if (this.yy.parser)
          this.yy.parser.parseError(
            blockDiagramDXYQGD6DParam214,
            blockDiagramDXYQGD6DParam215,
          );
        else throw Error(blockDiagramDXYQGD6DParam214);
      }, "parseError"),
      setInput: chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DParam121,
        blockDiagramDXYQGD6DParam122,
      ) {
        return (
          (this.yy = blockDiagramDXYQGD6DParam122 || this.yy || {}),
          (this._input = blockDiagramDXYQGD6DParam121),
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
        var blockDiagramDXYQGD6DValue396 = this._input[0];
        return (
          (this.yytext += blockDiagramDXYQGD6DValue396),
          this.yyleng++,
          this.offset++,
          (this.match += blockDiagramDXYQGD6DValue396),
          (this.matched += blockDiagramDXYQGD6DValue396),
          blockDiagramDXYQGD6DValue396.match(/(?:\r\n?|\n).*/g)
            ? (this.yylineno++, this.yylloc.last_line++)
            : this.yylloc.last_column++,
          this.options.ranges && this.yylloc.range[1]++,
          (this._input = this._input.slice(1)),
          blockDiagramDXYQGD6DValue396
        );
      }, "input"),
      unput: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam68) {
        var blockDiagramDXYQGD6DValue257 = blockDiagramDXYQGD6DParam68.length,
          blockDiagramDXYQGD6DValue258 =
            blockDiagramDXYQGD6DParam68.split(/(?:\r\n?|\n)/g);
        this._input = blockDiagramDXYQGD6DParam68 + this._input;
        this.yytext = this.yytext.substr(
          0,
          this.yytext.length - blockDiagramDXYQGD6DValue257,
        );
        this.offset -= blockDiagramDXYQGD6DValue257;
        var blockDiagramDXYQGD6DValue259 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        blockDiagramDXYQGD6DValue258.length - 1 &&
          (this.yylineno -= blockDiagramDXYQGD6DValue258.length - 1);
        var blockDiagramDXYQGD6DValue260 = this.yylloc.range;
        return (
          (this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: blockDiagramDXYQGD6DValue258
              ? (blockDiagramDXYQGD6DValue258.length ===
                blockDiagramDXYQGD6DValue259.length
                  ? this.yylloc.first_column
                  : 0) +
                blockDiagramDXYQGD6DValue259[
                  blockDiagramDXYQGD6DValue259.length -
                    blockDiagramDXYQGD6DValue258.length
                ].length -
                blockDiagramDXYQGD6DValue258[0].length
              : this.yylloc.first_column - blockDiagramDXYQGD6DValue257,
          }),
          this.options.ranges &&
            (this.yylloc.range = [
              blockDiagramDXYQGD6DValue260[0],
              blockDiagramDXYQGD6DValue260[0] +
                this.yyleng -
                blockDiagramDXYQGD6DValue257,
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
      less: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam237) {
        this.unput(this.match.slice(blockDiagramDXYQGD6DParam237));
      }, "less"),
      pastInput: chunkAGHRB4JFN(function () {
        var blockDiagramDXYQGD6DValue499 = this.matched.substr(
          0,
          this.matched.length - this.match.length,
        );
        return (
          (blockDiagramDXYQGD6DValue499.length > 20 ? "..." : "") +
          blockDiagramDXYQGD6DValue499.substr(-20).replace(/\n/g, "")
        );
      }, "pastInput"),
      upcomingInput: chunkAGHRB4JFN(function () {
        var blockDiagramDXYQGD6DValue477 = this.match;
        return (
          blockDiagramDXYQGD6DValue477.length < 20 &&
            (blockDiagramDXYQGD6DValue477 += this._input.substr(
              0,
              20 - blockDiagramDXYQGD6DValue477.length,
            )),
          (
            blockDiagramDXYQGD6DValue477.substr(0, 20) +
            (blockDiagramDXYQGD6DValue477.length > 20 ? "..." : "")
          ).replace(/\n/g, "")
        );
      }, "upcomingInput"),
      showPosition: chunkAGHRB4JFN(function () {
        var blockDiagramDXYQGD6DValue481 = this.pastInput(),
          blockDiagramDXYQGD6DValue482 = Array(
            blockDiagramDXYQGD6DValue481.length + 1,
          ).join("-");
        return (
          blockDiagramDXYQGD6DValue481 +
          this.upcomingInput() +
          "\n" +
          blockDiagramDXYQGD6DValue482 +
          "^"
        );
      }, "showPosition"),
      test_match: chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DParam27,
        blockDiagramDXYQGD6DParam28,
      ) {
        var blockDiagramDXYQGD6DValue175,
          blockDiagramDXYQGD6DValue176,
          blockDiagramDXYQGD6DValue177;
        if (
          (this.options.backtrack_lexer &&
            ((blockDiagramDXYQGD6DValue177 = {
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
              (blockDiagramDXYQGD6DValue177.yylloc.range =
                this.yylloc.range.slice(0))),
          (blockDiagramDXYQGD6DValue176 =
            blockDiagramDXYQGD6DParam27[0].match(/(?:\r\n?|\n).*/g)),
          blockDiagramDXYQGD6DValue176 &&
            (this.yylineno += blockDiagramDXYQGD6DValue176.length),
          (this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: blockDiagramDXYQGD6DValue176
              ? blockDiagramDXYQGD6DValue176[
                  blockDiagramDXYQGD6DValue176.length - 1
                ].length -
                blockDiagramDXYQGD6DValue176[
                  blockDiagramDXYQGD6DValue176.length - 1
                ].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + blockDiagramDXYQGD6DParam27[0].length,
          }),
          (this.yytext += blockDiagramDXYQGD6DParam27[0]),
          (this.match += blockDiagramDXYQGD6DParam27[0]),
          (this.matches = blockDiagramDXYQGD6DParam27),
          (this.yyleng = this.yytext.length),
          this.options.ranges &&
            (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
          (this._more = false),
          (this._backtrack = false),
          (this._input = this._input.slice(
            blockDiagramDXYQGD6DParam27[0].length,
          )),
          (this.matched += blockDiagramDXYQGD6DParam27[0]),
          (blockDiagramDXYQGD6DValue175 = this.performAction.call(
            this,
            this.yy,
            this,
            blockDiagramDXYQGD6DParam28,
            this.conditionStack[this.conditionStack.length - 1],
          )),
          this.done && this._input && (this.done = false),
          blockDiagramDXYQGD6DValue175)
        )
          return blockDiagramDXYQGD6DValue175;
        if (this._backtrack) {
          for (var blockDiagramDXYQGD6DValue178 in blockDiagramDXYQGD6DValue177)
            this[blockDiagramDXYQGD6DValue178] =
              blockDiagramDXYQGD6DValue177[blockDiagramDXYQGD6DValue178];
          return false;
        }
        return false;
      }, "test_match"),
      next: chunkAGHRB4JFN(function () {
        if (this.done) return this.EOF;
        this._input || (this.done = true);
        var blockDiagramDXYQGD6DValue251,
          blockDiagramDXYQGD6DValue252,
          blockDiagramDXYQGD6DValue253,
          blockDiagramDXYQGD6DValue254;
        this._more || ((this.yytext = ""), (this.match = ""));
        for (
          var blockDiagramDXYQGD6DValue255 = this._currentRules(),
            blockDiagramDXYQGD6DValue256 = 0;
          blockDiagramDXYQGD6DValue256 < blockDiagramDXYQGD6DValue255.length;
          blockDiagramDXYQGD6DValue256++
        )
          if (
            ((blockDiagramDXYQGD6DValue253 = this._input.match(
              this.rules[
                blockDiagramDXYQGD6DValue255[blockDiagramDXYQGD6DValue256]
              ],
            )),
            blockDiagramDXYQGD6DValue253 &&
              (!blockDiagramDXYQGD6DValue252 ||
                blockDiagramDXYQGD6DValue253[0].length >
                  blockDiagramDXYQGD6DValue252[0].length))
          ) {
            if (
              ((blockDiagramDXYQGD6DValue252 = blockDiagramDXYQGD6DValue253),
              (blockDiagramDXYQGD6DValue254 = blockDiagramDXYQGD6DValue256),
              this.options.backtrack_lexer)
            ) {
              if (
                ((blockDiagramDXYQGD6DValue251 = this.test_match(
                  blockDiagramDXYQGD6DValue253,
                  blockDiagramDXYQGD6DValue255[blockDiagramDXYQGD6DValue256],
                )),
                blockDiagramDXYQGD6DValue251 !== false)
              )
                return blockDiagramDXYQGD6DValue251;
              if (this._backtrack) {
                blockDiagramDXYQGD6DValue252 = false;
                continue;
              } else return false;
            } else if (!this.options.flex) break;
          }
        return blockDiagramDXYQGD6DValue252
          ? ((blockDiagramDXYQGD6DValue251 = this.test_match(
              blockDiagramDXYQGD6DValue252,
              blockDiagramDXYQGD6DValue255[blockDiagramDXYQGD6DValue254],
            )),
            blockDiagramDXYQGD6DValue251 === false
              ? false
              : blockDiagramDXYQGD6DValue251)
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
      begin: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam239) {
        this.conditionStack.push(blockDiagramDXYQGD6DParam239);
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
      topState: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam196) {
        return (
          (blockDiagramDXYQGD6DParam196 =
            this.conditionStack.length -
            1 -
            Math.abs(blockDiagramDXYQGD6DParam196 || 0)),
          blockDiagramDXYQGD6DParam196 >= 0
            ? this.conditionStack[blockDiagramDXYQGD6DParam196]
            : "INITIAL"
        );
      }, "topState"),
      pushState: chunkAGHRB4JFN(function (blockDiagramDXYQGD6DParam272) {
        this.begin(blockDiagramDXYQGD6DParam272);
      }, "pushState"),
      stateStackSize: chunkAGHRB4JFN(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: chunkAGHRB4JFN(function (
        blockDiagramDXYQGD6DParam1,
        blockDiagramDXYQGD6DParam2,
        blockDiagramDXYQGD6DParam3,
        blockDiagramDXYQGD6DParam4,
      ) {
        switch (blockDiagramDXYQGD6DParam3) {
          case 0:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Found block-beta"),
              10
            );
          case 1:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Found id-block"),
              29
            );
          case 2:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Found block"),
              10
            );
          case 3:
            blockDiagramDXYQGD6DParam1
              .getLogger()
              .debug(".", blockDiagramDXYQGD6DParam2.yytext);
            break;
          case 4:
            blockDiagramDXYQGD6DParam1
              .getLogger()
              .debug("_", blockDiagramDXYQGD6DParam2.yytext);
            break;
          case 5:
            return 5;
          case 6:
            return ((blockDiagramDXYQGD6DParam2.yytext = -1), 28);
          case 7:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/columns\s+/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("COLUMNS (LEX)", blockDiagramDXYQGD6DParam2.yytext),
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
            blockDiagramDXYQGD6DParam1
              .getLogger()
              .debug("LEX: POPPING STR:", blockDiagramDXYQGD6DParam2.yytext);
            this.popState();
            break;
          case 13:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("LEX: STR end:", blockDiagramDXYQGD6DParam2.yytext),
              "STR"
            );
          case 14:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/space\:/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("SPACE NUM (LEX)", blockDiagramDXYQGD6DParam2.yytext),
              21
            );
          case 15:
            return (
              (blockDiagramDXYQGD6DParam2.yytext = "1"),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("COLUMNS (LEX)", blockDiagramDXYQGD6DParam2.yytext),
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
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 38:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 39:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ))"),
              "NODE_DEND"
            );
          case 40:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 41:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 42:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (-"),
              "NODE_DEND"
            );
          case 43:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: -)"),
              "NODE_DEND"
            );
          case 44:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: (("),
              "NODE_DEND"
            );
          case 45:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ]]"),
              "NODE_DEND"
            );
          case 46:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ("),
              "NODE_DEND"
            );
          case 47:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ])"),
              "NODE_DEND"
            );
          case 48:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: /]"),
              "NODE_DEND"
            );
          case 49:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: /]"),
              "NODE_DEND"
            );
          case 50:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: )]"),
              "NODE_DEND"
            );
          case 51:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: )"),
              "NODE_DEND"
            );
          case 52:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ]>"),
              "NODE_DEND"
            );
          case 53:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ]"),
              "NODE_DEND"
            );
          case 54:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: -)"),
              this.pushState("NODE"),
              35
            );
          case 55:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: (-"),
              this.pushState("NODE"),
              35
            );
          case 56:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: ))"),
              this.pushState("NODE"),
              35
            );
          case 57:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 58:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: ((("),
              this.pushState("NODE"),
              35
            );
          case 59:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 60:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 61:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: )"),
              this.pushState("NODE"),
              35
            );
          case 62:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexc: >"),
              this.pushState("NODE"),
              35
            );
          case 63:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: (["),
              this.pushState("NODE"),
              35
            );
          case 64:
            return (
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: )"),
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
              blockDiagramDXYQGD6DParam1.getLogger().debug("Lexa: ["),
              this.pushState("NODE"),
              35
            );
          case 73:
            return (
              this.pushState("BLOCK_ARROW"),
              blockDiagramDXYQGD6DParam1.getLogger().debug("LEX ARR START"),
              37
            );
          case 74:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: NODE_ID", blockDiagramDXYQGD6DParam2.yytext),
              31
            );
          case 75:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: EOF", blockDiagramDXYQGD6DParam2.yytext),
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
            blockDiagramDXYQGD6DParam1
              .getLogger()
              .debug("Lex: Starting string");
            this.pushState("string");
            break;
          case 81:
            blockDiagramDXYQGD6DParam1
              .getLogger()
              .debug("LEX ARR: Starting string");
            this.pushState("string");
            break;
          case 82:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("LEX: NODE_DESCR:", blockDiagramDXYQGD6DParam2.yytext),
              "NODE_DESCR"
            );
          case 83:
            blockDiagramDXYQGD6DParam1.getLogger().debug("LEX POPPING");
            this.popState();
            break;
          case 84:
            blockDiagramDXYQGD6DParam1.getLogger().debug("Lex: =>BAE");
            this.pushState("ARROW_DIR");
            break;
          case 85:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (right): dir:", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 86:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (left):", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 87:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (x):", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 88:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (y):", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 89:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (up):", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 90:
            return (
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.replace(/^,\s*/, "")),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex (down):", blockDiagramDXYQGD6DParam2.yytext),
              "DIR"
            );
          case 91:
            return (
              (blockDiagramDXYQGD6DParam2.yytext = "]>"),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug(
                  "Lex (ARROW_DIR end):",
                  blockDiagramDXYQGD6DParam2.yytext,
                ),
              this.popState(),
              this.popState(),
              "BLOCK_ARROW_END"
            );
          case 92:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug(
                  "Lex: LINK",
                  "#" + blockDiagramDXYQGD6DParam2.yytext + "#",
                ),
              15
            );
          case 93:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramDXYQGD6DParam2.yytext),
              15
            );
          case 94:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramDXYQGD6DParam2.yytext),
              15
            );
          case 95:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramDXYQGD6DParam2.yytext),
              15
            );
          case 96:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramDXYQGD6DParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 97:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramDXYQGD6DParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 98:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: START_LINK", blockDiagramDXYQGD6DParam2.yytext),
              this.pushState("LLABEL"),
              16
            );
          case 99:
            this.pushState("md_string");
            break;
          case 100:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: Starting string"),
              this.pushState("string"),
              "LINK_LABEL"
            );
          case 101:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug(
                  "Lex: LINK",
                  "#" + blockDiagramDXYQGD6DParam2.yytext + "#",
                ),
              15
            );
          case 102:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramDXYQGD6DParam2.yytext),
              15
            );
          case 103:
            return (
              this.popState(),
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: LINK", blockDiagramDXYQGD6DParam2.yytext),
              15
            );
          case 104:
            return (
              blockDiagramDXYQGD6DParam1
                .getLogger()
                .debug("Lex: COLON", blockDiagramDXYQGD6DParam2.yytext),
              (blockDiagramDXYQGD6DParam2.yytext =
                blockDiagramDXYQGD6DParam2.yytext.slice(1)),
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
  function blockDiagramDXYQGD6DHelper23() {
    this.yy = {};
  }
  return (
    chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper23, "Parser"),
    (blockDiagramDXYQGD6DHelper23.prototype = blockDiagramDXYQGD6DValue92),
    (blockDiagramDXYQGD6DValue92.Parser = blockDiagramDXYQGD6DHelper23),
    new blockDiagramDXYQGD6DHelper23()
  );
})();
blockDiagramDXYQGD6DValue1.parser = blockDiagramDXYQGD6DValue1;
var blockDiagramDXYQGD6DValue2 = blockDiagramDXYQGD6DValue1,
  blockDiagramDXYQGD6DValue3 = new Map(),
  blockDiagramDXYQGD6DValue4 = [],
  blockDiagramDXYQGD6DValue5 = new Map(),
  blockDiagramDXYQGD6DValue10 = _chunkICPOFSXXP(),
  blockDiagramDXYQGD6DValue11 = new Map(),
  blockDiagramDXYQGD6DValue12 = "",
  blockDiagramDXYQGD6DValue13 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam278) =>
      _chunkICPOFSXXO.sanitizeText(
        blockDiagramDXYQGD6DParam278,
        blockDiagramDXYQGD6DValue10,
      ),
    "sanitizeText",
  ),
  blockDiagramDXYQGD6DValue14 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DParam159,
    blockDiagramDXYQGD6DParam160 = "",
  ) {
    let blockDiagramDXYQGD6DValue430 = blockDiagramDXYQGD6DValue11.get(
      blockDiagramDXYQGD6DParam159,
    );
    blockDiagramDXYQGD6DValue430 ||
      ((blockDiagramDXYQGD6DValue430 = {
        id: blockDiagramDXYQGD6DParam159,
        styles: [],
        textStyles: [],
      }),
      blockDiagramDXYQGD6DValue11.set(
        blockDiagramDXYQGD6DParam159,
        blockDiagramDXYQGD6DValue430,
      ));
    blockDiagramDXYQGD6DParam160
      ?.split(",")
      .forEach((blockDiagramDXYQGD6DParam192) => {
        let blockDiagramDXYQGD6DValue483 = blockDiagramDXYQGD6DParam192
          .replace(/([^;]*);/, "$1")
          .trim();
        if (RegExp("color").exec(blockDiagramDXYQGD6DParam192)) {
          let blockDiagramDXYQGD6DValue542 = blockDiagramDXYQGD6DValue483
            .replace("fill", "bgFill")
            .replace("color", "fill");
          blockDiagramDXYQGD6DValue430.textStyles.push(
            blockDiagramDXYQGD6DValue542,
          );
        }
        blockDiagramDXYQGD6DValue430.styles.push(blockDiagramDXYQGD6DValue483);
      });
  }, "addStyleClass"),
  blockDiagramDXYQGD6DValue15 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DParam225,
    blockDiagramDXYQGD6DParam226 = "",
  ) {
    let blockDiagramDXYQGD6DValue543 = blockDiagramDXYQGD6DValue3.get(
      blockDiagramDXYQGD6DParam225,
    );
    blockDiagramDXYQGD6DParam226 != null &&
      (blockDiagramDXYQGD6DValue543.styles =
        blockDiagramDXYQGD6DParam226.split(","));
  }, "addStyle2Node"),
  blockDiagramDXYQGD6DValue16 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DParam182,
    blockDiagramDXYQGD6DParam183,
  ) {
    blockDiagramDXYQGD6DParam182.split(",").forEach(function (item) {
      let blockDiagramDXYQGD6DValue487 = blockDiagramDXYQGD6DValue3.get(item);
      if (blockDiagramDXYQGD6DValue487 === undefined) {
        let blockDiagramDXYQGD6DValue540 = item.trim();
        blockDiagramDXYQGD6DValue487 = {
          id: blockDiagramDXYQGD6DValue540,
          type: "na",
          children: [],
        };
        blockDiagramDXYQGD6DValue3.set(
          blockDiagramDXYQGD6DValue540,
          blockDiagramDXYQGD6DValue487,
        );
      }
      blockDiagramDXYQGD6DValue487.classes ||= [];
      blockDiagramDXYQGD6DValue487.classes.push(blockDiagramDXYQGD6DParam183);
    });
  }, "setCssClass"),
  blockDiagramDXYQGD6DValue17 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam48, blockDiagramDXYQGD6DParam49) => {
      let blockDiagramDXYQGD6DValue215 = blockDiagramDXYQGD6DParam48.flat(),
        blockDiagramDXYQGD6DValue216 = [],
        blockDiagramDXYQGD6DValue217 =
          blockDiagramDXYQGD6DValue215.find(
            (item) => item?.type === "column-setting",
          )?.columns ?? -1;
      for (let blockDiagramDXYQGD6DValue227 of blockDiagramDXYQGD6DValue215) {
        if (
          (typeof blockDiagramDXYQGD6DValue217 == "number" &&
            blockDiagramDXYQGD6DValue217 > 0 &&
            blockDiagramDXYQGD6DValue227.type !== "column-setting" &&
            typeof blockDiagramDXYQGD6DValue227.widthInColumns == "number" &&
            blockDiagramDXYQGD6DValue227.widthInColumns >
              blockDiagramDXYQGD6DValue217 &&
            chunkAGHRB4JFR.warn(
              `Block ${blockDiagramDXYQGD6DValue227.id} width ${blockDiagramDXYQGD6DValue227.widthInColumns} exceeds configured column width ${blockDiagramDXYQGD6DValue217}`,
            ),
          (blockDiagramDXYQGD6DValue227.label &&= blockDiagramDXYQGD6DValue13(
            blockDiagramDXYQGD6DValue227.label,
          )),
          blockDiagramDXYQGD6DValue227.type === "classDef")
        ) {
          blockDiagramDXYQGD6DValue14(
            blockDiagramDXYQGD6DValue227.id,
            blockDiagramDXYQGD6DValue227.css,
          );
          continue;
        }
        if (blockDiagramDXYQGD6DValue227.type === "applyClass") {
          blockDiagramDXYQGD6DValue16(
            blockDiagramDXYQGD6DValue227.id,
            blockDiagramDXYQGD6DValue227?.styleClass ?? "",
          );
          continue;
        }
        if (blockDiagramDXYQGD6DValue227.type === "applyStyles") {
          blockDiagramDXYQGD6DValue227?.stylesStr &&
            blockDiagramDXYQGD6DValue15(
              blockDiagramDXYQGD6DValue227.id,
              blockDiagramDXYQGD6DValue227?.stylesStr,
            );
          continue;
        }
        if (blockDiagramDXYQGD6DValue227.type === "column-setting")
          blockDiagramDXYQGD6DParam49.columns =
            blockDiagramDXYQGD6DValue227.columns ?? -1;
        else if (blockDiagramDXYQGD6DValue227.type === "edge") {
          let blockDiagramDXYQGD6DValue538 =
            (blockDiagramDXYQGD6DValue5.get(blockDiagramDXYQGD6DValue227.id) ??
              0) + 1;
          blockDiagramDXYQGD6DValue5.set(
            blockDiagramDXYQGD6DValue227.id,
            blockDiagramDXYQGD6DValue538,
          );
          blockDiagramDXYQGD6DValue227.id =
            blockDiagramDXYQGD6DValue538 +
            "-" +
            blockDiagramDXYQGD6DValue227.id;
          blockDiagramDXYQGD6DValue4.push(blockDiagramDXYQGD6DValue227);
        } else {
          blockDiagramDXYQGD6DValue227.label ||
            (blockDiagramDXYQGD6DValue227.type === "composite"
              ? (blockDiagramDXYQGD6DValue227.label = "")
              : (blockDiagramDXYQGD6DValue227.label =
                  blockDiagramDXYQGD6DValue227.id));
          let blockDiagramDXYQGD6DValue330 = blockDiagramDXYQGD6DValue3.get(
            blockDiagramDXYQGD6DValue227.id,
          );
          if (
            (blockDiagramDXYQGD6DValue330 === undefined
              ? blockDiagramDXYQGD6DValue3.set(
                  blockDiagramDXYQGD6DValue227.id,
                  blockDiagramDXYQGD6DValue227,
                )
              : (blockDiagramDXYQGD6DValue227.type !== "na" &&
                  (blockDiagramDXYQGD6DValue330.type =
                    blockDiagramDXYQGD6DValue227.type),
                blockDiagramDXYQGD6DValue227.label !==
                  blockDiagramDXYQGD6DValue227.id &&
                  (blockDiagramDXYQGD6DValue330.label =
                    blockDiagramDXYQGD6DValue227.label)),
            blockDiagramDXYQGD6DValue227.children &&
              blockDiagramDXYQGD6DValue17(
                blockDiagramDXYQGD6DValue227.children,
                blockDiagramDXYQGD6DValue227,
              ),
            blockDiagramDXYQGD6DValue227.type === "space")
          ) {
            let blockDiagramDXYQGD6DValue497 =
              blockDiagramDXYQGD6DValue227.width ?? 1;
            for (
              let blockDiagramDXYQGD6DValue536 = 0;
              blockDiagramDXYQGD6DValue536 < blockDiagramDXYQGD6DValue497;
              blockDiagramDXYQGD6DValue536++
            ) {
              let blockDiagramDXYQGD6DValue539 = clone(
                blockDiagramDXYQGD6DValue227,
              );
              blockDiagramDXYQGD6DValue539.id =
                blockDiagramDXYQGD6DValue539.id +
                "-" +
                blockDiagramDXYQGD6DValue536;
              blockDiagramDXYQGD6DValue3.set(
                blockDiagramDXYQGD6DValue539.id,
                blockDiagramDXYQGD6DValue539,
              );
              blockDiagramDXYQGD6DValue216.push(blockDiagramDXYQGD6DValue539);
            }
          } else
            blockDiagramDXYQGD6DValue330 === undefined &&
              blockDiagramDXYQGD6DValue216.push(blockDiagramDXYQGD6DValue227);
        }
      }
      blockDiagramDXYQGD6DParam49.children = blockDiagramDXYQGD6DValue216;
    },
    "populateBlockDatabase",
  ),
  blockDiagramDXYQGD6DValue18 = [],
  blockDiagramDXYQGD6DValue19 = {
    id: "root",
    type: "composite",
    children: [],
    columns: -1,
  },
  blockDiagramDXYQGD6DValue20 = chunkAGHRB4JFN(() => {
    chunkAGHRB4JFR.debug("Clear called");
    _chunkICPOFSXXL();
    blockDiagramDXYQGD6DValue19 = {
      id: "root",
      type: "composite",
      children: [],
      columns: -1,
    };
    blockDiagramDXYQGD6DValue3 = new Map([
      ["root", blockDiagramDXYQGD6DValue19],
    ]);
    blockDiagramDXYQGD6DValue18 = [];
    blockDiagramDXYQGD6DValue11 = new Map();
    blockDiagramDXYQGD6DValue4 = [];
    blockDiagramDXYQGD6DValue5 = new Map();
    blockDiagramDXYQGD6DValue12 = "";
  }, "clear");
function blockDiagramDXYQGD6DHelper1(blockDiagramDXYQGD6DParam97) {
  switch (
    (chunkAGHRB4JFR.debug("typeStr2Type", blockDiagramDXYQGD6DParam97),
    blockDiagramDXYQGD6DParam97)
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
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper1, "typeStr2Type");
function blockDiagramDXYQGD6DHelper2(blockDiagramDXYQGD6DParam209) {
  switch (
    (chunkAGHRB4JFR.debug("typeStr2Type", blockDiagramDXYQGD6DParam209),
    blockDiagramDXYQGD6DParam209)
  ) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper2, "edgeTypeStr2Type");
function blockDiagramDXYQGD6DHelper3(blockDiagramDXYQGD6DParam185) {
  switch (blockDiagramDXYQGD6DParam185.replace(/^[\s-]+|[\s-]+$/g, "")) {
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
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper3, "edgeStrToEdgeData");
var blockDiagramDXYQGD6DValue21 = 0,
  blockDiagramDXYQGD6DValue22 = {
    getConfig: chunkAGHRB4JFN(() => chunkICPOFSXXW().block, "getConfig"),
    typeStr2Type: blockDiagramDXYQGD6DHelper1,
    edgeTypeStr2Type: blockDiagramDXYQGD6DHelper2,
    edgeStrToEdgeData: blockDiagramDXYQGD6DHelper3,
    getLogger: chunkAGHRB4JFN(() => chunkAGHRB4JFR, "getLogger"),
    getBlocksFlat: chunkAGHRB4JFN(
      () => [...blockDiagramDXYQGD6DValue3.values()],
      "getBlocksFlat",
    ),
    getBlocks: chunkAGHRB4JFN(
      () => blockDiagramDXYQGD6DValue18 || [],
      "getBlocks",
    ),
    getEdges: chunkAGHRB4JFN(() => blockDiagramDXYQGD6DValue4, "getEdges"),
    setHierarchy: chunkAGHRB4JFN((blockDiagramDXYQGD6DParam234) => {
      blockDiagramDXYQGD6DValue19.children = blockDiagramDXYQGD6DParam234;
      blockDiagramDXYQGD6DValue17(
        blockDiagramDXYQGD6DParam234,
        blockDiagramDXYQGD6DValue19,
      );
      blockDiagramDXYQGD6DValue18 = blockDiagramDXYQGD6DValue19.children;
    }, "setHierarchy"),
    getBlock: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DParam281) =>
        blockDiagramDXYQGD6DValue3.get(blockDiagramDXYQGD6DParam281),
      "getBlock",
    ),
    setBlock: chunkAGHRB4JFN((blockDiagramDXYQGD6DParam275) => {
      blockDiagramDXYQGD6DValue3.set(
        blockDiagramDXYQGD6DParam275.id,
        blockDiagramDXYQGD6DParam275,
      );
    }, "setBlock"),
    getColumns: chunkAGHRB4JFN((blockDiagramDXYQGD6DParam193) => {
      let blockDiagramDXYQGD6DValue502 = blockDiagramDXYQGD6DValue3.get(
        blockDiagramDXYQGD6DParam193,
      );
      return blockDiagramDXYQGD6DValue502
        ? blockDiagramDXYQGD6DValue502.columns
          ? blockDiagramDXYQGD6DValue502.columns
          : blockDiagramDXYQGD6DValue502.children
            ? blockDiagramDXYQGD6DValue502.children.length
            : -1
        : -1;
    }, "getColumns"),
    getClasses: chunkAGHRB4JFN(function () {
      return blockDiagramDXYQGD6DValue11;
    }, "getClasses"),
    clear: blockDiagramDXYQGD6DValue20,
    generateId: chunkAGHRB4JFN(
      () => (
        blockDiagramDXYQGD6DValue21++,
        "id-" +
          Math.random().toString(36).substr(2, 12) +
          "-" +
          blockDiagramDXYQGD6DValue21
      ),
      "generateId",
    ),
    setDiagramId: chunkAGHRB4JFN((blockDiagramDXYQGD6DParam279) => {
      blockDiagramDXYQGD6DValue12 = blockDiagramDXYQGD6DParam279;
    }, "setDiagramId"),
    getDiagramId: chunkAGHRB4JFN(
      () => blockDiagramDXYQGD6DValue12,
      "getDiagramId",
    ),
  },
  blockDiagramDXYQGD6DValue23 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam228, blockDiagramDXYQGD6DParam229) => {
      let blockDiagramDXYQGD6DValue545 = channel;
      return invertS(
        blockDiagramDXYQGD6DValue545(blockDiagramDXYQGD6DParam228, "r"),
        blockDiagramDXYQGD6DValue545(blockDiagramDXYQGD6DParam228, "g"),
        blockDiagramDXYQGD6DValue545(blockDiagramDXYQGD6DParam228, "b"),
        blockDiagramDXYQGD6DParam229,
      );
    },
    "fade",
  ),
  blockDiagramDXYQGD6DValue24 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam26) => `.label {
    font-family: ${blockDiagramDXYQGD6DParam26.fontFamily};
    color: ${blockDiagramDXYQGD6DParam26.nodeTextColor || blockDiagramDXYQGD6DParam26.textColor};
  }
  .cluster-label text {
    fill: ${blockDiagramDXYQGD6DParam26.titleColor};
  }
  .cluster-label span,p {
    color: ${blockDiagramDXYQGD6DParam26.titleColor};
  }



  .label text,span,p {
    fill: ${blockDiagramDXYQGD6DParam26.nodeTextColor || blockDiagramDXYQGD6DParam26.textColor};
    color: ${blockDiagramDXYQGD6DParam26.nodeTextColor || blockDiagramDXYQGD6DParam26.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${blockDiagramDXYQGD6DParam26.mainBkg};
    stroke: ${blockDiagramDXYQGD6DParam26.nodeBorder};
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
    fill: ${blockDiagramDXYQGD6DParam26.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${blockDiagramDXYQGD6DParam26.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${blockDiagramDXYQGD6DParam26.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${blockDiagramDXYQGD6DParam26.edgeLabelBackground};
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ${blockDiagramDXYQGD6DParam26.edgeLabelBackground};
      fill: ${blockDiagramDXYQGD6DParam26.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${blockDiagramDXYQGD6DParam26.edgeLabelBackground};
  }

  .node .cluster {
    // fill: ${blockDiagramDXYQGD6DValue23(blockDiagramDXYQGD6DParam26.mainBkg, 0.5)};
    fill: ${blockDiagramDXYQGD6DValue23(blockDiagramDXYQGD6DParam26.clusterBkg, 0.5)};
    stroke: ${blockDiagramDXYQGD6DValue23(blockDiagramDXYQGD6DParam26.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${blockDiagramDXYQGD6DParam26.titleColor};
  }

  .cluster span,p {
    color: ${blockDiagramDXYQGD6DParam26.titleColor};
  }
  /* .cluster div {
    color: ${blockDiagramDXYQGD6DParam26.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${blockDiagramDXYQGD6DParam26.fontFamily};
    font-size: 12px;
    background: ${blockDiagramDXYQGD6DParam26.tertiaryColor};
    border: 1px solid ${blockDiagramDXYQGD6DParam26.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${blockDiagramDXYQGD6DParam26.textColor};
  }
  ${chunkFMBD7UC4()}
`,
    "getStyles",
  ),
  _e = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam230,
      blockDiagramDXYQGD6DParam231,
      blockDiagramDXYQGD6DParam232,
      blockDiagramDXYQGD6DParam233,
    ) => {
      blockDiagramDXYQGD6DParam231.forEach((item) => {
        blockDiagramDXYQGD6DValue25[item](
          blockDiagramDXYQGD6DParam230,
          blockDiagramDXYQGD6DParam232,
          blockDiagramDXYQGD6DParam233,
        );
      });
    },
    "insertMarkers",
  ),
  blockDiagramDXYQGD6DValue25 = {
    extension: chunkAGHRB4JFN(
      (
        blockDiagramDXYQGD6DParam85,
        blockDiagramDXYQGD6DParam86,
        blockDiagramDXYQGD6DParam87,
      ) => {
        chunkAGHRB4JFR.trace(
          "Making markers for ",
          blockDiagramDXYQGD6DParam87,
        );
        blockDiagramDXYQGD6DParam85
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam87 +
              "_" +
              blockDiagramDXYQGD6DParam86 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + blockDiagramDXYQGD6DParam86)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        blockDiagramDXYQGD6DParam85
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam87 +
              "_" +
              blockDiagramDXYQGD6DParam86 +
              "-extensionEnd",
          )
          .attr("class", "marker extension " + blockDiagramDXYQGD6DParam86)
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
        blockDiagramDXYQGD6DParam88,
        blockDiagramDXYQGD6DParam89,
        blockDiagramDXYQGD6DParam90,
      ) => {
        blockDiagramDXYQGD6DParam88
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam90 +
              "_" +
              blockDiagramDXYQGD6DParam89 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + blockDiagramDXYQGD6DParam89)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DParam88
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam90 +
              "_" +
              blockDiagramDXYQGD6DParam89 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + blockDiagramDXYQGD6DParam89)
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
        blockDiagramDXYQGD6DParam91,
        blockDiagramDXYQGD6DParam92,
        blockDiagramDXYQGD6DParam93,
      ) => {
        blockDiagramDXYQGD6DParam91
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam93 +
              "_" +
              blockDiagramDXYQGD6DParam92 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + blockDiagramDXYQGD6DParam92)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DParam91
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam93 +
              "_" +
              blockDiagramDXYQGD6DParam92 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + blockDiagramDXYQGD6DParam92)
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
        blockDiagramDXYQGD6DParam94,
        blockDiagramDXYQGD6DParam95,
        blockDiagramDXYQGD6DParam96,
      ) => {
        blockDiagramDXYQGD6DParam94
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam96 +
              "_" +
              blockDiagramDXYQGD6DParam95 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + blockDiagramDXYQGD6DParam95)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        blockDiagramDXYQGD6DParam94
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam96 +
              "_" +
              blockDiagramDXYQGD6DParam95 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + blockDiagramDXYQGD6DParam95)
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
        blockDiagramDXYQGD6DParam77,
        blockDiagramDXYQGD6DParam78,
        blockDiagramDXYQGD6DParam79,
      ) => {
        blockDiagramDXYQGD6DParam77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam79 +
              "_" +
              blockDiagramDXYQGD6DParam78 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + blockDiagramDXYQGD6DParam78)
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
        blockDiagramDXYQGD6DParam77
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam79 +
              "_" +
              blockDiagramDXYQGD6DParam78 +
              "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + blockDiagramDXYQGD6DParam78)
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
        blockDiagramDXYQGD6DParam65,
        blockDiagramDXYQGD6DParam66,
        blockDiagramDXYQGD6DParam67,
      ) => {
        blockDiagramDXYQGD6DParam65
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam67 +
              "_" +
              blockDiagramDXYQGD6DParam66 +
              "-pointEnd",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DParam66)
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
        blockDiagramDXYQGD6DParam65
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam67 +
              "_" +
              blockDiagramDXYQGD6DParam66 +
              "-pointStart",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DParam66)
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
        blockDiagramDXYQGD6DParam59,
        blockDiagramDXYQGD6DParam60,
        blockDiagramDXYQGD6DParam61,
      ) => {
        blockDiagramDXYQGD6DParam59
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam61 +
              "_" +
              blockDiagramDXYQGD6DParam60 +
              "-circleEnd",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DParam60)
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
        blockDiagramDXYQGD6DParam59
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam61 +
              "_" +
              blockDiagramDXYQGD6DParam60 +
              "-circleStart",
          )
          .attr("class", "marker " + blockDiagramDXYQGD6DParam60)
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
        blockDiagramDXYQGD6DParam62,
        blockDiagramDXYQGD6DParam63,
        blockDiagramDXYQGD6DParam64,
      ) => {
        blockDiagramDXYQGD6DParam62
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam64 +
              "_" +
              blockDiagramDXYQGD6DParam63 +
              "-crossEnd",
          )
          .attr("class", "marker cross " + blockDiagramDXYQGD6DParam63)
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
        blockDiagramDXYQGD6DParam62
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam64 +
              "_" +
              blockDiagramDXYQGD6DParam63 +
              "-crossStart",
          )
          .attr("class", "marker cross " + blockDiagramDXYQGD6DParam63)
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
        blockDiagramDXYQGD6DParam156,
        blockDiagramDXYQGD6DParam157,
        blockDiagramDXYQGD6DParam158,
      ) => {
        blockDiagramDXYQGD6DParam156
          .append("defs")
          .append("marker")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam158 +
              "_" +
              blockDiagramDXYQGD6DParam157 +
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
  blockDiagramDXYQGD6DValue26 = _e,
  blockDiagramDXYQGD6DValue27 = _chunkICPOFSXXP()?.block?.padding ?? 8;
function blockDiagramDXYQGD6DHelper4(
  blockDiagramDXYQGD6DParam161,
  blockDiagramDXYQGD6DParam162,
) {
  if (
    blockDiagramDXYQGD6DParam161 === 0 ||
    !Number.isInteger(blockDiagramDXYQGD6DParam161)
  )
    throw Error("Columns must be an integer !== 0.");
  if (
    blockDiagramDXYQGD6DParam162 < 0 ||
    !Number.isInteger(blockDiagramDXYQGD6DParam162)
  )
    throw Error(
      "Position must be a non-negative integer." + blockDiagramDXYQGD6DParam162,
    );
  return blockDiagramDXYQGD6DParam161 < 0
    ? {
        px: blockDiagramDXYQGD6DParam162,
        py: 0,
      }
    : blockDiagramDXYQGD6DParam161 === 1
      ? {
          px: 0,
          py: blockDiagramDXYQGD6DParam162,
        }
      : {
          px: blockDiagramDXYQGD6DParam162 % blockDiagramDXYQGD6DParam161,
          py: Math.floor(
            blockDiagramDXYQGD6DParam162 / blockDiagramDXYQGD6DParam161,
          ),
        };
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper4, "calculateBlockPosition");
var be = chunkAGHRB4JFN((blockDiagramDXYQGD6DParam132) => {
  let blockDiagramDXYQGD6DValue370 = 0,
    blockDiagramDXYQGD6DValue371 = 0;
  for (let blockDiagramDXYQGD6DValue408 of blockDiagramDXYQGD6DParam132.children) {
    let { width, height, x, y } = blockDiagramDXYQGD6DValue408.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
    chunkAGHRB4JFR.debug(
      "getMaxChildSize abc95 child:",
      blockDiagramDXYQGD6DValue408.id,
      "width:",
      width,
      "height:",
      height,
      "x:",
      x,
      "y:",
      y,
      blockDiagramDXYQGD6DValue408.type,
    );
    blockDiagramDXYQGD6DValue408.type !== "space" &&
      (width > blockDiagramDXYQGD6DValue370 &&
        (blockDiagramDXYQGD6DValue370 =
          width / (blockDiagramDXYQGD6DValue408.widthInColumns ?? 1)),
      height > blockDiagramDXYQGD6DValue371 &&
        (blockDiagramDXYQGD6DValue371 = height));
  }
  return {
    width: blockDiagramDXYQGD6DValue370,
    height: blockDiagramDXYQGD6DValue371,
  };
}, "getMaxChildSize");
function blockDiagramDXYQGD6DHelper5(
  blockDiagramDXYQGD6DParam22,
  blockDiagramDXYQGD6DParam23,
  blockDiagramDXYQGD6DParam24 = 0,
  blockDiagramDXYQGD6DParam25 = 0,
) {
  chunkAGHRB4JFR.debug(
    "setBlockSizes abc95 (start)",
    blockDiagramDXYQGD6DParam22.id,
    blockDiagramDXYQGD6DParam22?.size?.x,
    "block width =",
    blockDiagramDXYQGD6DParam22?.size,
    "siblingWidth",
    blockDiagramDXYQGD6DParam24,
  );
  blockDiagramDXYQGD6DParam22?.size?.width ||
    (blockDiagramDXYQGD6DParam22.size = {
      width: blockDiagramDXYQGD6DParam24,
      height: blockDiagramDXYQGD6DParam25,
      x: 0,
      y: 0,
    });
  let blockDiagramDXYQGD6DValue159 = 0,
    blockDiagramDXYQGD6DValue160 = 0;
  if (blockDiagramDXYQGD6DParam22.children?.length > 0) {
    for (let blockDiagramDXYQGD6DValue550 of blockDiagramDXYQGD6DParam22.children)
      blockDiagramDXYQGD6DHelper5(
        blockDiagramDXYQGD6DValue550,
        blockDiagramDXYQGD6DParam23,
      );
    let blockDiagramDXYQGD6DValue168 = be(blockDiagramDXYQGD6DParam22);
    blockDiagramDXYQGD6DValue159 = blockDiagramDXYQGD6DValue168.width;
    blockDiagramDXYQGD6DValue160 = blockDiagramDXYQGD6DValue168.height;
    chunkAGHRB4JFR.debug(
      "setBlockSizes abc95 maxWidth of",
      blockDiagramDXYQGD6DParam22.id,
      ":s children is ",
      blockDiagramDXYQGD6DValue159,
      blockDiagramDXYQGD6DValue160,
    );
    for (let blockDiagramDXYQGD6DValue395 of blockDiagramDXYQGD6DParam22.children)
      blockDiagramDXYQGD6DValue395.size &&
        (chunkAGHRB4JFR.debug(
          `abc95 Setting size of children of ${blockDiagramDXYQGD6DParam22.id} id=${blockDiagramDXYQGD6DValue395.id} ${blockDiagramDXYQGD6DValue159} ${blockDiagramDXYQGD6DValue160} ${JSON.stringify(blockDiagramDXYQGD6DValue395.size)}`,
        ),
        (blockDiagramDXYQGD6DValue395.size.width =
          blockDiagramDXYQGD6DValue159 *
            (blockDiagramDXYQGD6DValue395.widthInColumns ?? 1) +
          blockDiagramDXYQGD6DValue27 *
            ((blockDiagramDXYQGD6DValue395.widthInColumns ?? 1) - 1)),
        (blockDiagramDXYQGD6DValue395.size.height =
          blockDiagramDXYQGD6DValue160),
        (blockDiagramDXYQGD6DValue395.size.x = 0),
        (blockDiagramDXYQGD6DValue395.size.y = 0),
        chunkAGHRB4JFR.debug(
          `abc95 updating size of ${blockDiagramDXYQGD6DParam22.id} children child:${blockDiagramDXYQGD6DValue395.id} maxWidth:${blockDiagramDXYQGD6DValue159} maxHeight:${blockDiagramDXYQGD6DValue160}`,
        ));
    for (let blockDiagramDXYQGD6DValue549 of blockDiagramDXYQGD6DParam22.children)
      blockDiagramDXYQGD6DHelper5(
        blockDiagramDXYQGD6DValue549,
        blockDiagramDXYQGD6DParam23,
        blockDiagramDXYQGD6DValue159,
        blockDiagramDXYQGD6DValue160,
      );
    let blockDiagramDXYQGD6DValue169 =
        blockDiagramDXYQGD6DParam22.columns ?? -1,
      blockDiagramDXYQGD6DValue170 = 0;
    for (let blockDiagramDXYQGD6DValue548 of blockDiagramDXYQGD6DParam22.children)
      blockDiagramDXYQGD6DValue170 +=
        blockDiagramDXYQGD6DValue548.widthInColumns ?? 1;
    let blockDiagramDXYQGD6DValue171 =
      blockDiagramDXYQGD6DParam22.children.length;
    blockDiagramDXYQGD6DValue169 > 0 &&
      blockDiagramDXYQGD6DValue169 < blockDiagramDXYQGD6DValue170 &&
      (blockDiagramDXYQGD6DValue171 = blockDiagramDXYQGD6DValue169);
    let blockDiagramDXYQGD6DValue172 = Math.ceil(
        blockDiagramDXYQGD6DValue170 / blockDiagramDXYQGD6DValue171,
      ),
      blockDiagramDXYQGD6DValue173 =
        blockDiagramDXYQGD6DValue171 *
          (blockDiagramDXYQGD6DValue159 + blockDiagramDXYQGD6DValue27) +
        blockDiagramDXYQGD6DValue27,
      blockDiagramDXYQGD6DValue174 =
        blockDiagramDXYQGD6DValue172 *
          (blockDiagramDXYQGD6DValue160 + blockDiagramDXYQGD6DValue27) +
        blockDiagramDXYQGD6DValue27;
    if (blockDiagramDXYQGD6DValue173 < blockDiagramDXYQGD6DParam24) {
      chunkAGHRB4JFR.debug(
        `Detected to small sibling: abc95 ${blockDiagramDXYQGD6DParam22.id} siblingWidth ${blockDiagramDXYQGD6DParam24} siblingHeight ${blockDiagramDXYQGD6DParam25} width ${blockDiagramDXYQGD6DValue173}`,
      );
      blockDiagramDXYQGD6DValue173 = blockDiagramDXYQGD6DParam24;
      blockDiagramDXYQGD6DValue174 = blockDiagramDXYQGD6DParam25;
      let blockDiagramDXYQGD6DValue320 =
          (blockDiagramDXYQGD6DParam24 -
            blockDiagramDXYQGD6DValue171 * blockDiagramDXYQGD6DValue27 -
            blockDiagramDXYQGD6DValue27) /
          blockDiagramDXYQGD6DValue171,
        blockDiagramDXYQGD6DValue321 =
          (blockDiagramDXYQGD6DParam25 -
            blockDiagramDXYQGD6DValue172 * blockDiagramDXYQGD6DValue27 -
            blockDiagramDXYQGD6DValue27) /
          blockDiagramDXYQGD6DValue172;
      chunkAGHRB4JFR.debug(
        "Size indata abc88",
        blockDiagramDXYQGD6DParam22.id,
        "childWidth",
        blockDiagramDXYQGD6DValue320,
        "maxWidth",
        blockDiagramDXYQGD6DValue159,
      );
      chunkAGHRB4JFR.debug(
        "Size indata abc88",
        blockDiagramDXYQGD6DParam22.id,
        "childHeight",
        blockDiagramDXYQGD6DValue321,
        "maxHeight",
        blockDiagramDXYQGD6DValue160,
      );
      chunkAGHRB4JFR.debug(
        "Size indata abc88 xSize",
        blockDiagramDXYQGD6DValue171,
        "padding",
        blockDiagramDXYQGD6DValue27,
      );
      for (let blockDiagramDXYQGD6DValue531 of blockDiagramDXYQGD6DParam22.children)
        blockDiagramDXYQGD6DValue531.size &&
          ((blockDiagramDXYQGD6DValue531.size.width =
            blockDiagramDXYQGD6DValue320),
          (blockDiagramDXYQGD6DValue531.size.height =
            blockDiagramDXYQGD6DValue321),
          (blockDiagramDXYQGD6DValue531.size.x = 0),
          (blockDiagramDXYQGD6DValue531.size.y = 0));
    }
    if (
      (chunkAGHRB4JFR.debug(
        `abc95 (finale calc) ${blockDiagramDXYQGD6DParam22.id} xSize ${blockDiagramDXYQGD6DValue171} ySize ${blockDiagramDXYQGD6DValue172} columns ${blockDiagramDXYQGD6DValue169}${blockDiagramDXYQGD6DParam22.children.length} width=${Math.max(blockDiagramDXYQGD6DValue173, blockDiagramDXYQGD6DParam22.size?.width || 0)}`,
      ),
      blockDiagramDXYQGD6DValue173 <
        (blockDiagramDXYQGD6DParam22?.size?.width || 0))
    ) {
      blockDiagramDXYQGD6DValue173 =
        blockDiagramDXYQGD6DParam22?.size?.width || 0;
      let blockDiagramDXYQGD6DValue434 =
        blockDiagramDXYQGD6DValue169 > 0
          ? Math.min(
              blockDiagramDXYQGD6DParam22.children.length,
              blockDiagramDXYQGD6DValue169,
            )
          : blockDiagramDXYQGD6DParam22.children.length;
      if (blockDiagramDXYQGD6DValue434 > 0) {
        let blockDiagramDXYQGD6DValue498 =
          (blockDiagramDXYQGD6DValue173 -
            blockDiagramDXYQGD6DValue434 * blockDiagramDXYQGD6DValue27 -
            blockDiagramDXYQGD6DValue27) /
          blockDiagramDXYQGD6DValue434;
        chunkAGHRB4JFR.debug(
          "abc95 (growing to fit) width",
          blockDiagramDXYQGD6DParam22.id,
          blockDiagramDXYQGD6DValue173,
          blockDiagramDXYQGD6DParam22.size?.width,
          blockDiagramDXYQGD6DValue498,
        );
        for (let blockDiagramDXYQGD6DValue547 of blockDiagramDXYQGD6DParam22.children)
          blockDiagramDXYQGD6DValue547.size &&
            (blockDiagramDXYQGD6DValue547.size.width =
              blockDiagramDXYQGD6DValue498);
      }
    }
    blockDiagramDXYQGD6DParam22.size = {
      width: blockDiagramDXYQGD6DValue173,
      height: blockDiagramDXYQGD6DValue174,
      x: 0,
      y: 0,
    };
  }
  chunkAGHRB4JFR.debug(
    "setBlockSizes abc94 (done)",
    blockDiagramDXYQGD6DParam22.id,
    blockDiagramDXYQGD6DParam22?.size?.x,
    blockDiagramDXYQGD6DParam22?.size?.width,
    blockDiagramDXYQGD6DParam22?.size?.y,
    blockDiagramDXYQGD6DParam22?.size?.height,
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper5, "setBlockSizes");
function blockDiagramDXYQGD6DHelper6(
  blockDiagramDXYQGD6DParam20,
  blockDiagramDXYQGD6DParam21,
) {
  chunkAGHRB4JFR.debug(
    `abc85 layout blocks (=>layoutBlocks) ${blockDiagramDXYQGD6DParam20.id} x: ${blockDiagramDXYQGD6DParam20?.size?.x} y: ${blockDiagramDXYQGD6DParam20?.size?.y} width: ${blockDiagramDXYQGD6DParam20?.size?.width}`,
  );
  let blockDiagramDXYQGD6DValue158 = blockDiagramDXYQGD6DParam20.columns ?? -1;
  if (
    (chunkAGHRB4JFR.debug(
      "layoutBlocks columns abc95",
      blockDiagramDXYQGD6DParam20.id,
      "=>",
      blockDiagramDXYQGD6DValue158,
      blockDiagramDXYQGD6DParam20,
    ),
    blockDiagramDXYQGD6DParam20.children &&
      blockDiagramDXYQGD6DParam20.children.length > 0)
  ) {
    let blockDiagramDXYQGD6DValue161 =
        blockDiagramDXYQGD6DParam20?.children[0]?.size?.width ?? 0,
      blockDiagramDXYQGD6DValue162 =
        blockDiagramDXYQGD6DParam20.children.length *
          blockDiagramDXYQGD6DValue161 +
        (blockDiagramDXYQGD6DParam20.children.length - 1) *
          blockDiagramDXYQGD6DValue27;
    chunkAGHRB4JFR.debug(
      "widthOfChildren 88",
      blockDiagramDXYQGD6DValue162,
      "posX",
    );
    let blockDiagramDXYQGD6DValue163 = new Map();
    {
      let blockDiagramDXYQGD6DValue435 = 0;
      for (let blockDiagramDXYQGD6DValue461 of blockDiagramDXYQGD6DParam20.children) {
        if (!blockDiagramDXYQGD6DValue461.size) continue;
        let { py } = blockDiagramDXYQGD6DHelper4(
            blockDiagramDXYQGD6DValue158,
            blockDiagramDXYQGD6DValue435,
          ),
          blockDiagramDXYQGD6DValue471 =
            blockDiagramDXYQGD6DValue163.get(py) ?? 0;
        blockDiagramDXYQGD6DValue461.size.height >
          blockDiagramDXYQGD6DValue471 &&
          blockDiagramDXYQGD6DValue163.set(
            py,
            blockDiagramDXYQGD6DValue461.size.height,
          );
        let blockDiagramDXYQGD6DValue472 =
          blockDiagramDXYQGD6DValue461?.widthInColumns ?? 1;
        blockDiagramDXYQGD6DValue158 > 0 &&
          (blockDiagramDXYQGD6DValue472 = Math.min(
            blockDiagramDXYQGD6DValue472,
            blockDiagramDXYQGD6DValue158 -
              (blockDiagramDXYQGD6DValue435 % blockDiagramDXYQGD6DValue158),
          ));
        blockDiagramDXYQGD6DValue435 += blockDiagramDXYQGD6DValue472;
      }
    }
    let blockDiagramDXYQGD6DValue164 = new Map();
    {
      let blockDiagramDXYQGD6DValue534 = 0,
        blockDiagramDXYQGD6DValue535 = [
          ...blockDiagramDXYQGD6DValue163.keys(),
        ].sort(
          (blockDiagramDXYQGD6DParam282, blockDiagramDXYQGD6DParam283) =>
            blockDiagramDXYQGD6DParam282 - blockDiagramDXYQGD6DParam283,
        );
      for (let blockDiagramDXYQGD6DValue546 of blockDiagramDXYQGD6DValue535) {
        blockDiagramDXYQGD6DValue164.set(
          blockDiagramDXYQGD6DValue546,
          blockDiagramDXYQGD6DValue534,
        );
        blockDiagramDXYQGD6DValue534 +=
          (blockDiagramDXYQGD6DValue163.get(blockDiagramDXYQGD6DValue546) ??
            0) + blockDiagramDXYQGD6DValue27;
      }
    }
    let blockDiagramDXYQGD6DValue165 = 0;
    chunkAGHRB4JFR.debug(
      "abc91 block?.size?.x",
      blockDiagramDXYQGD6DParam20.id,
      blockDiagramDXYQGD6DParam20?.size?.x,
    );
    let blockDiagramDXYQGD6DValue166 = blockDiagramDXYQGD6DParam20?.size?.x
        ? blockDiagramDXYQGD6DParam20?.size?.x +
          (-blockDiagramDXYQGD6DParam20?.size?.width / 2 || 0)
        : -blockDiagramDXYQGD6DValue27,
      blockDiagramDXYQGD6DValue167 = 0;
    for (let blockDiagramDXYQGD6DValue228 of blockDiagramDXYQGD6DParam20.children) {
      let blockDiagramDXYQGD6DValue229 = blockDiagramDXYQGD6DParam20;
      if (!blockDiagramDXYQGD6DValue228.size) continue;
      let { width, height } = blockDiagramDXYQGD6DValue228.size,
        { px, py } = blockDiagramDXYQGD6DHelper4(
          blockDiagramDXYQGD6DValue158,
          blockDiagramDXYQGD6DValue165,
        );
      if (
        (py != blockDiagramDXYQGD6DValue167 &&
          ((blockDiagramDXYQGD6DValue167 = py),
          (blockDiagramDXYQGD6DValue166 = blockDiagramDXYQGD6DParam20?.size?.x
            ? blockDiagramDXYQGD6DParam20?.size?.x +
              (-blockDiagramDXYQGD6DParam20?.size?.width / 2 || 0)
            : -blockDiagramDXYQGD6DValue27),
          chunkAGHRB4JFR.debug(
            "New row in layout for block",
            blockDiagramDXYQGD6DParam20.id,
            " and child ",
            blockDiagramDXYQGD6DValue228.id,
            blockDiagramDXYQGD6DValue167,
          )),
        chunkAGHRB4JFR.debug(
          `abc89 layout blocks (child) id: ${blockDiagramDXYQGD6DValue228.id} Pos: ${blockDiagramDXYQGD6DValue165} (px, py) ${px},${py} (${blockDiagramDXYQGD6DValue229?.size?.x},${blockDiagramDXYQGD6DValue229?.size?.y}) parent: ${blockDiagramDXYQGD6DValue229.id} width: ${width}${blockDiagramDXYQGD6DValue27}`,
        ),
        blockDiagramDXYQGD6DValue229.size)
      ) {
        let blockDiagramDXYQGD6DValue295 = width / 2;
        blockDiagramDXYQGD6DValue228.size.x =
          blockDiagramDXYQGD6DValue166 +
          blockDiagramDXYQGD6DValue27 +
          blockDiagramDXYQGD6DValue295;
        chunkAGHRB4JFR.debug(
          `abc91 layout blocks (calc) px, pyid:${blockDiagramDXYQGD6DValue228.id} startingPos=X${blockDiagramDXYQGD6DValue166} new startingPosX${blockDiagramDXYQGD6DValue228.size.x} ${blockDiagramDXYQGD6DValue295} padding=${blockDiagramDXYQGD6DValue27} width=${width} halfWidth=${blockDiagramDXYQGD6DValue295} => x:${blockDiagramDXYQGD6DValue228.size.x} y:${blockDiagramDXYQGD6DValue228.size.y} ${blockDiagramDXYQGD6DValue228.widthInColumns} (width * (child?.w || 1)) / 2 ${(width * (blockDiagramDXYQGD6DValue228?.widthInColumns ?? 1)) / 2}`,
        );
        blockDiagramDXYQGD6DValue166 =
          blockDiagramDXYQGD6DValue228.size.x + blockDiagramDXYQGD6DValue295;
        let blockDiagramDXYQGD6DValue296 =
            blockDiagramDXYQGD6DValue164.get(py) ?? 0,
          blockDiagramDXYQGD6DValue297 =
            blockDiagramDXYQGD6DValue163.get(py) ?? height;
        blockDiagramDXYQGD6DValue228.size.y =
          blockDiagramDXYQGD6DValue229.size.y -
          blockDiagramDXYQGD6DValue229.size.height / 2 +
          blockDiagramDXYQGD6DValue296 +
          blockDiagramDXYQGD6DValue297 / 2 +
          blockDiagramDXYQGD6DValue27;
        chunkAGHRB4JFR.debug(
          `abc88 layout blocks (calc) px, pyid:${blockDiagramDXYQGD6DValue228.id}startingPosX${blockDiagramDXYQGD6DValue166}${blockDiagramDXYQGD6DValue27}${blockDiagramDXYQGD6DValue295}=>x:${blockDiagramDXYQGD6DValue228.size.x}y:${blockDiagramDXYQGD6DValue228.size.y}${blockDiagramDXYQGD6DValue228.widthInColumns}(width * (child?.w || 1)) / 2${(width * (blockDiagramDXYQGD6DValue228?.widthInColumns ?? 1)) / 2}`,
        );
      }
      blockDiagramDXYQGD6DValue228.children &&
        blockDiagramDXYQGD6DHelper6(
          blockDiagramDXYQGD6DValue228,
          blockDiagramDXYQGD6DParam21,
        );
      let blockDiagramDXYQGD6DValue230 =
        blockDiagramDXYQGD6DValue228?.widthInColumns ?? 1;
      blockDiagramDXYQGD6DValue158 > 0 &&
        (blockDiagramDXYQGD6DValue230 = Math.min(
          blockDiagramDXYQGD6DValue230,
          blockDiagramDXYQGD6DValue158 -
            (blockDiagramDXYQGD6DValue165 % blockDiagramDXYQGD6DValue158),
        ));
      blockDiagramDXYQGD6DValue165 += blockDiagramDXYQGD6DValue230;
      chunkAGHRB4JFR.debug(
        "abc88 columnsPos",
        blockDiagramDXYQGD6DValue228,
        blockDiagramDXYQGD6DValue165,
      );
    }
  }
  chunkAGHRB4JFR.debug(
    `layout blocks (<==layoutBlocks) ${blockDiagramDXYQGD6DParam20.id} x: ${blockDiagramDXYQGD6DParam20?.size?.x} y: ${blockDiagramDXYQGD6DParam20?.size?.y} width: ${blockDiagramDXYQGD6DParam20?.size?.width}`,
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper6, "layoutBlocks");
function blockDiagramDXYQGD6DHelper7(
  blockDiagramDXYQGD6DParam117,
  { minX, minY, maxX, maxY } = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  },
) {
  if (
    blockDiagramDXYQGD6DParam117.size &&
    blockDiagramDXYQGD6DParam117.id !== "root"
  ) {
    let { x, y, width, height } = blockDiagramDXYQGD6DParam117.size;
    x - width / 2 < minX && (minX = x - width / 2);
    y - height / 2 < minY && (minY = y - height / 2);
    x + width / 2 > maxX && (maxX = x + width / 2);
    y + height / 2 > maxY && (maxY = y + height / 2);
  }
  if (blockDiagramDXYQGD6DParam117.children)
    for (let blockDiagramDXYQGD6DValue530 of blockDiagramDXYQGD6DParam117.children)
      ({ minX, minY, maxX, maxY } = blockDiagramDXYQGD6DHelper7(
        blockDiagramDXYQGD6DValue530,
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
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper7, "findBounds");
function blockDiagramDXYQGD6DHelper8(blockDiagramDXYQGD6DParam184) {
  let blockDiagramDXYQGD6DValue468 =
    blockDiagramDXYQGD6DParam184.getBlock("root");
  if (!blockDiagramDXYQGD6DValue468) return;
  blockDiagramDXYQGD6DHelper5(
    blockDiagramDXYQGD6DValue468,
    blockDiagramDXYQGD6DParam184,
    0,
    0,
  );
  blockDiagramDXYQGD6DHelper6(
    blockDiagramDXYQGD6DValue468,
    blockDiagramDXYQGD6DParam184,
  );
  chunkAGHRB4JFR.debug(
    "getBlocks",
    JSON.stringify(blockDiagramDXYQGD6DValue468, null, 2),
  );
  let { minX, minY, maxX, maxY } = blockDiagramDXYQGD6DHelper7(
      blockDiagramDXYQGD6DValue468,
    ),
    blockDiagramDXYQGD6DValue469 = maxY - minY;
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: blockDiagramDXYQGD6DValue469,
  };
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper8, "layout");
var blockDiagramDXYQGD6DValue28 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DParam163,
      blockDiagramDXYQGD6DParam164,
      blockDiagramDXYQGD6DParam165,
      blockDiagramDXYQGD6DParam166 = false,
      blockDiagramDXYQGD6DParam167 = false,
    ) => {
      let blockDiagramDXYQGD6DValue431 = blockDiagramDXYQGD6DParam164 || "";
      typeof blockDiagramDXYQGD6DValue431 == "object" &&
        (blockDiagramDXYQGD6DValue431 = blockDiagramDXYQGD6DValue431[0]);
      let blockDiagramDXYQGD6DValue432 = _chunkICPOFSXXP(),
        blockDiagramDXYQGD6DValue433 = chunkICPOFSXXT(
          blockDiagramDXYQGD6DValue432,
        );
      return await chunkU2HBQHQKA(
        blockDiagramDXYQGD6DParam163,
        blockDiagramDXYQGD6DValue431,
        {
          style: blockDiagramDXYQGD6DParam165,
          isTitle: blockDiagramDXYQGD6DParam166,
          useHtmlLabels: blockDiagramDXYQGD6DValue433,
          markdown: false,
          isNode: blockDiagramDXYQGD6DParam167,
          width: 1 / 0,
        },
        blockDiagramDXYQGD6DValue432,
      );
    },
    "createLabel",
  ),
  blockDiagramDXYQGD6DValue29 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam201,
      blockDiagramDXYQGD6DParam202,
      blockDiagramDXYQGD6DParam203,
      blockDiagramDXYQGD6DParam204,
      blockDiagramDXYQGD6DParam205,
    ) => {
      blockDiagramDXYQGD6DParam202.arrowTypeStart &&
        blockDiagramDXYQGD6DValue31(
          blockDiagramDXYQGD6DParam201,
          "start",
          blockDiagramDXYQGD6DParam202.arrowTypeStart,
          blockDiagramDXYQGD6DParam203,
          blockDiagramDXYQGD6DParam204,
          blockDiagramDXYQGD6DParam205,
        );
      blockDiagramDXYQGD6DParam202.arrowTypeEnd &&
        blockDiagramDXYQGD6DValue31(
          blockDiagramDXYQGD6DParam201,
          "end",
          blockDiagramDXYQGD6DParam202.arrowTypeEnd,
          blockDiagramDXYQGD6DParam203,
          blockDiagramDXYQGD6DParam204,
          blockDiagramDXYQGD6DParam205,
        );
    },
    "addEdgeMarkers",
  ),
  blockDiagramDXYQGD6DValue30 = {
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
  blockDiagramDXYQGD6DValue31 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam186,
      blockDiagramDXYQGD6DParam187,
      blockDiagramDXYQGD6DParam188,
      blockDiagramDXYQGD6DParam189,
      blockDiagramDXYQGD6DParam190,
      blockDiagramDXYQGD6DParam191,
    ) => {
      let blockDiagramDXYQGD6DValue478 =
        blockDiagramDXYQGD6DValue30[blockDiagramDXYQGD6DParam188];
      if (!blockDiagramDXYQGD6DValue478) {
        chunkAGHRB4JFR.warn(
          `Unknown arrow type: ${blockDiagramDXYQGD6DParam188}`,
        );
        return;
      }
      let blockDiagramDXYQGD6DValue479 =
        blockDiagramDXYQGD6DParam187 === "start" ? "Start" : "End";
      blockDiagramDXYQGD6DParam186.attr(
        `marker-${blockDiagramDXYQGD6DParam187}`,
        `url(${blockDiagramDXYQGD6DParam189}#${blockDiagramDXYQGD6DParam190}_${blockDiagramDXYQGD6DParam191}-${blockDiagramDXYQGD6DValue478}${blockDiagramDXYQGD6DValue479})`,
      );
    },
    "addEdgeMarker",
  ),
  blockDiagramDXYQGD6DValue32 = {},
  blockDiagramDXYQGD6DValue33 = {},
  blockDiagramDXYQGD6DValue34 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam18, blockDiagramDXYQGD6DParam19) => {
      let blockDiagramDXYQGD6DValue149 = _chunkICPOFSXXP(),
        blockDiagramDXYQGD6DValue150 = chunkICPOFSXXT(
          blockDiagramDXYQGD6DValue149,
        ),
        blockDiagramDXYQGD6DValue151 = blockDiagramDXYQGD6DParam18
          .insert("g")
          .attr("class", "edgeLabel"),
        blockDiagramDXYQGD6DValue152 = blockDiagramDXYQGD6DValue151
          .insert("g")
          .attr("class", "label"),
        blockDiagramDXYQGD6DValue153 =
          blockDiagramDXYQGD6DParam19.labelType === "markdown",
        blockDiagramDXYQGD6DValue154 = await chunkU2HBQHQKA(
          blockDiagramDXYQGD6DParam18,
          blockDiagramDXYQGD6DParam19.label,
          {
            style: blockDiagramDXYQGD6DParam19.labelStyle,
            useHtmlLabels: blockDiagramDXYQGD6DValue150,
            addSvgBackground: blockDiagramDXYQGD6DValue153,
            isNode: false,
            markdown: blockDiagramDXYQGD6DValue153,
            width: blockDiagramDXYQGD6DValue153 ? undefined : 1 / 0,
          },
          blockDiagramDXYQGD6DValue149,
        );
      blockDiagramDXYQGD6DValue152
        .node()
        .appendChild(blockDiagramDXYQGD6DValue154);
      let blockDiagramDXYQGD6DValue155 = blockDiagramDXYQGD6DValue154.getBBox(),
        blockDiagramDXYQGD6DValue156 = blockDiagramDXYQGD6DValue155;
      if (blockDiagramDXYQGD6DValue150) {
        let blockDiagramDXYQGD6DValue500 =
            blockDiagramDXYQGD6DValue154.children[0],
          blockDiagramDXYQGD6DValue501 = Src(blockDiagramDXYQGD6DValue154);
        blockDiagramDXYQGD6DValue155 =
          blockDiagramDXYQGD6DValue500.getBoundingClientRect();
        blockDiagramDXYQGD6DValue156 = blockDiagramDXYQGD6DValue155;
        blockDiagramDXYQGD6DValue501.attr(
          "width",
          blockDiagramDXYQGD6DValue155.width,
        );
        blockDiagramDXYQGD6DValue501.attr(
          "height",
          blockDiagramDXYQGD6DValue155.height,
        );
      } else {
        let blockDiagramDXYQGD6DValue537 = Src(blockDiagramDXYQGD6DValue154)
          .select("text")
          .node();
        blockDiagramDXYQGD6DValue537 &&
          typeof blockDiagramDXYQGD6DValue537.getBBox == "function" &&
          (blockDiagramDXYQGD6DValue156 =
            blockDiagramDXYQGD6DValue537.getBBox());
      }
      blockDiagramDXYQGD6DValue152.attr(
        "transform",
        chunkBSJP7CBPR(
          blockDiagramDXYQGD6DValue156,
          blockDiagramDXYQGD6DValue150,
        ),
      );
      blockDiagramDXYQGD6DValue32[blockDiagramDXYQGD6DParam19.id] =
        blockDiagramDXYQGD6DValue151;
      blockDiagramDXYQGD6DParam19.width = blockDiagramDXYQGD6DValue155.width;
      blockDiagramDXYQGD6DParam19.height = blockDiagramDXYQGD6DValue155.height;
      let blockDiagramDXYQGD6DValue157;
      if (blockDiagramDXYQGD6DParam19.startLabelLeft) {
        let blockDiagramDXYQGD6DValue358 = blockDiagramDXYQGD6DParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DValue359 = blockDiagramDXYQGD6DValue358
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DValue360 = await blockDiagramDXYQGD6DValue28(
            blockDiagramDXYQGD6DValue359,
            blockDiagramDXYQGD6DParam19.startLabelLeft,
            blockDiagramDXYQGD6DParam19.labelStyle,
          );
        blockDiagramDXYQGD6DValue157 = blockDiagramDXYQGD6DValue360;
        let blockDiagramDXYQGD6DValue361 =
          blockDiagramDXYQGD6DValue360.getBBox();
        if (blockDiagramDXYQGD6DValue150) {
          let blockDiagramDXYQGD6DValue509 =
              blockDiagramDXYQGD6DValue360.children[0],
            blockDiagramDXYQGD6DValue510 = Src(blockDiagramDXYQGD6DValue360);
          blockDiagramDXYQGD6DValue361 =
            blockDiagramDXYQGD6DValue509.getBoundingClientRect();
          blockDiagramDXYQGD6DValue510.attr(
            "width",
            blockDiagramDXYQGD6DValue361.width,
          );
          blockDiagramDXYQGD6DValue510.attr(
            "height",
            blockDiagramDXYQGD6DValue361.height,
          );
        }
        blockDiagramDXYQGD6DValue359.attr(
          "transform",
          chunkBSJP7CBPR(
            blockDiagramDXYQGD6DValue361,
            blockDiagramDXYQGD6DValue150,
          ),
        );
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] ||
          (blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] = {});
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id].startLeft =
          blockDiagramDXYQGD6DValue358;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DValue157,
          blockDiagramDXYQGD6DParam19.startLabelLeft,
        );
      }
      if (blockDiagramDXYQGD6DParam19.startLabelRight) {
        let blockDiagramDXYQGD6DValue335 = blockDiagramDXYQGD6DParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DValue336 = blockDiagramDXYQGD6DValue335
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DValue337 = await blockDiagramDXYQGD6DValue28(
            blockDiagramDXYQGD6DValue335,
            blockDiagramDXYQGD6DParam19.startLabelRight,
            blockDiagramDXYQGD6DParam19.labelStyle,
          );
        blockDiagramDXYQGD6DValue157 = blockDiagramDXYQGD6DValue337;
        blockDiagramDXYQGD6DValue336
          .node()
          .appendChild(blockDiagramDXYQGD6DValue337);
        let blockDiagramDXYQGD6DValue338 =
          blockDiagramDXYQGD6DValue337.getBBox();
        if (blockDiagramDXYQGD6DValue150) {
          let blockDiagramDXYQGD6DValue511 =
              blockDiagramDXYQGD6DValue337.children[0],
            blockDiagramDXYQGD6DValue512 = Src(blockDiagramDXYQGD6DValue337);
          blockDiagramDXYQGD6DValue338 =
            blockDiagramDXYQGD6DValue511.getBoundingClientRect();
          blockDiagramDXYQGD6DValue512.attr(
            "width",
            blockDiagramDXYQGD6DValue338.width,
          );
          blockDiagramDXYQGD6DValue512.attr(
            "height",
            blockDiagramDXYQGD6DValue338.height,
          );
        }
        blockDiagramDXYQGD6DValue336.attr(
          "transform",
          chunkBSJP7CBPR(
            blockDiagramDXYQGD6DValue338,
            blockDiagramDXYQGD6DValue150,
          ),
        );
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] ||
          (blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] = {});
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id].startRight =
          blockDiagramDXYQGD6DValue335;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DValue157,
          blockDiagramDXYQGD6DParam19.startLabelRight,
        );
      }
      if (blockDiagramDXYQGD6DParam19.endLabelLeft) {
        let blockDiagramDXYQGD6DValue343 = blockDiagramDXYQGD6DParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DValue344 = blockDiagramDXYQGD6DValue343
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DValue345 = await blockDiagramDXYQGD6DValue28(
            blockDiagramDXYQGD6DValue344,
            blockDiagramDXYQGD6DParam19.endLabelLeft,
            blockDiagramDXYQGD6DParam19.labelStyle,
          );
        blockDiagramDXYQGD6DValue157 = blockDiagramDXYQGD6DValue345;
        let blockDiagramDXYQGD6DValue346 =
          blockDiagramDXYQGD6DValue345.getBBox();
        if (blockDiagramDXYQGD6DValue150) {
          let blockDiagramDXYQGD6DValue513 =
              blockDiagramDXYQGD6DValue345.children[0],
            blockDiagramDXYQGD6DValue514 = Src(blockDiagramDXYQGD6DValue345);
          blockDiagramDXYQGD6DValue346 =
            blockDiagramDXYQGD6DValue513.getBoundingClientRect();
          blockDiagramDXYQGD6DValue514.attr(
            "width",
            blockDiagramDXYQGD6DValue346.width,
          );
          blockDiagramDXYQGD6DValue514.attr(
            "height",
            blockDiagramDXYQGD6DValue346.height,
          );
        }
        blockDiagramDXYQGD6DValue344.attr(
          "transform",
          chunkBSJP7CBPR(
            blockDiagramDXYQGD6DValue346,
            blockDiagramDXYQGD6DValue150,
          ),
        );
        blockDiagramDXYQGD6DValue343
          .node()
          .appendChild(blockDiagramDXYQGD6DValue345);
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] ||
          (blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] = {});
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id].endLeft =
          blockDiagramDXYQGD6DValue343;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DValue157,
          blockDiagramDXYQGD6DParam19.endLabelLeft,
        );
      }
      if (blockDiagramDXYQGD6DParam19.endLabelRight) {
        let blockDiagramDXYQGD6DValue339 = blockDiagramDXYQGD6DParam18
            .insert("g")
            .attr("class", "edgeTerminals"),
          blockDiagramDXYQGD6DValue340 = blockDiagramDXYQGD6DValue339
            .insert("g")
            .attr("class", "inner"),
          blockDiagramDXYQGD6DValue341 = await blockDiagramDXYQGD6DValue28(
            blockDiagramDXYQGD6DValue340,
            blockDiagramDXYQGD6DParam19.endLabelRight,
            blockDiagramDXYQGD6DParam19.labelStyle,
          );
        blockDiagramDXYQGD6DValue157 = blockDiagramDXYQGD6DValue341;
        let blockDiagramDXYQGD6DValue342 =
          blockDiagramDXYQGD6DValue341.getBBox();
        if (blockDiagramDXYQGD6DValue150) {
          let blockDiagramDXYQGD6DValue515 =
              blockDiagramDXYQGD6DValue341.children[0],
            blockDiagramDXYQGD6DValue516 = Src(blockDiagramDXYQGD6DValue341);
          blockDiagramDXYQGD6DValue342 =
            blockDiagramDXYQGD6DValue515.getBoundingClientRect();
          blockDiagramDXYQGD6DValue516.attr(
            "width",
            blockDiagramDXYQGD6DValue342.width,
          );
          blockDiagramDXYQGD6DValue516.attr(
            "height",
            blockDiagramDXYQGD6DValue342.height,
          );
        }
        blockDiagramDXYQGD6DValue340.attr(
          "transform",
          chunkBSJP7CBPR(
            blockDiagramDXYQGD6DValue342,
            blockDiagramDXYQGD6DValue150,
          ),
        );
        blockDiagramDXYQGD6DValue339
          .node()
          .appendChild(blockDiagramDXYQGD6DValue341);
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] ||
          (blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id] = {});
        blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam19.id].endRight =
          blockDiagramDXYQGD6DValue339;
        blockDiagramDXYQGD6DHelper9(
          blockDiagramDXYQGD6DValue157,
          blockDiagramDXYQGD6DParam19.endLabelRight,
        );
      }
      return blockDiagramDXYQGD6DValue154;
    },
    "insertEdgeLabel",
  );
function blockDiagramDXYQGD6DHelper9(
  blockDiagramDXYQGD6DParam216,
  blockDiagramDXYQGD6DParam217,
) {
  chunkICPOFSXXT(_chunkICPOFSXXP()) &&
    blockDiagramDXYQGD6DParam216 &&
    ((blockDiagramDXYQGD6DParam216.style.width =
      blockDiagramDXYQGD6DParam217.length * 9 + "px"),
    (blockDiagramDXYQGD6DParam216.style.height = "12px"));
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper9, "setTerminalWidth");
var blockDiagramDXYQGD6DValue35 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam31, blockDiagramDXYQGD6DParam32) => {
      chunkAGHRB4JFR.debug(
        "Moving label abc88 ",
        blockDiagramDXYQGD6DParam31.id,
        blockDiagramDXYQGD6DParam31.label,
        blockDiagramDXYQGD6DValue32[blockDiagramDXYQGD6DParam31.id],
        blockDiagramDXYQGD6DParam32,
      );
      let blockDiagramDXYQGD6DValue192 = blockDiagramDXYQGD6DParam32.updatedPath
          ? blockDiagramDXYQGD6DParam32.updatedPath
          : blockDiagramDXYQGD6DParam32.originalPath,
        { subGraphTitleTotalMargin } = chunkZZ45TVLEN(_chunkICPOFSXXP());
      if (blockDiagramDXYQGD6DParam31.label) {
        let blockDiagramDXYQGD6DValue402 =
            blockDiagramDXYQGD6DValue32[blockDiagramDXYQGD6DParam31.id],
          blockDiagramDXYQGD6DValue403 = blockDiagramDXYQGD6DParam31.x,
          blockDiagramDXYQGD6DValue404 = blockDiagramDXYQGD6DParam31.y;
        if (blockDiagramDXYQGD6DValue192) {
          let blockDiagramDXYQGD6DValue445 = chunk5PVQY5BWC.calcLabelPosition(
            blockDiagramDXYQGD6DValue192,
          );
          chunkAGHRB4JFR.debug(
            "Moving label " + blockDiagramDXYQGD6DParam31.label + " from (",
            blockDiagramDXYQGD6DValue403,
            ",",
            blockDiagramDXYQGD6DValue404,
            ") to (",
            blockDiagramDXYQGD6DValue445.x,
            ",",
            blockDiagramDXYQGD6DValue445.y,
            ") abc88",
          );
          blockDiagramDXYQGD6DParam32.updatedPath &&
            ((blockDiagramDXYQGD6DValue403 = blockDiagramDXYQGD6DValue445.x),
            (blockDiagramDXYQGD6DValue404 = blockDiagramDXYQGD6DValue445.y));
        }
        blockDiagramDXYQGD6DValue402.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DValue403}, ${blockDiagramDXYQGD6DValue404 + subGraphTitleTotalMargin / 2})`,
        );
      }
      if (blockDiagramDXYQGD6DParam31.startLabelLeft) {
        let blockDiagramDXYQGD6DValue439 =
            blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam31.id]
              .startLeft,
          blockDiagramDXYQGD6DValue440 = blockDiagramDXYQGD6DParam31.x,
          blockDiagramDXYQGD6DValue441 = blockDiagramDXYQGD6DParam31.y;
        if (blockDiagramDXYQGD6DValue192) {
          let blockDiagramDXYQGD6DValue522 =
            chunk5PVQY5BWC.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DParam31.arrowTypeStart ? 10 : 0,
              "start_left",
              blockDiagramDXYQGD6DValue192,
            );
          blockDiagramDXYQGD6DValue440 = blockDiagramDXYQGD6DValue522.x;
          blockDiagramDXYQGD6DValue441 = blockDiagramDXYQGD6DValue522.y;
        }
        blockDiagramDXYQGD6DValue439.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DValue440}, ${blockDiagramDXYQGD6DValue441})`,
        );
      }
      if (blockDiagramDXYQGD6DParam31.startLabelRight) {
        let blockDiagramDXYQGD6DValue436 =
            blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam31.id]
              .startRight,
          blockDiagramDXYQGD6DValue437 = blockDiagramDXYQGD6DParam31.x,
          blockDiagramDXYQGD6DValue438 = blockDiagramDXYQGD6DParam31.y;
        if (blockDiagramDXYQGD6DValue192) {
          let blockDiagramDXYQGD6DValue521 =
            chunk5PVQY5BWC.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DParam31.arrowTypeStart ? 10 : 0,
              "start_right",
              blockDiagramDXYQGD6DValue192,
            );
          blockDiagramDXYQGD6DValue437 = blockDiagramDXYQGD6DValue521.x;
          blockDiagramDXYQGD6DValue438 = blockDiagramDXYQGD6DValue521.y;
        }
        blockDiagramDXYQGD6DValue436.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DValue437}, ${blockDiagramDXYQGD6DValue438})`,
        );
      }
      if (blockDiagramDXYQGD6DParam31.endLabelLeft) {
        let blockDiagramDXYQGD6DValue446 =
            blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam31.id].endLeft,
          blockDiagramDXYQGD6DValue447 = blockDiagramDXYQGD6DParam31.x,
          blockDiagramDXYQGD6DValue448 = blockDiagramDXYQGD6DParam31.y;
        if (blockDiagramDXYQGD6DValue192) {
          let blockDiagramDXYQGD6DValue525 =
            chunk5PVQY5BWC.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DParam31.arrowTypeEnd ? 10 : 0,
              "end_left",
              blockDiagramDXYQGD6DValue192,
            );
          blockDiagramDXYQGD6DValue447 = blockDiagramDXYQGD6DValue525.x;
          blockDiagramDXYQGD6DValue448 = blockDiagramDXYQGD6DValue525.y;
        }
        blockDiagramDXYQGD6DValue446.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DValue447}, ${blockDiagramDXYQGD6DValue448})`,
        );
      }
      if (blockDiagramDXYQGD6DParam31.endLabelRight) {
        let blockDiagramDXYQGD6DValue442 =
            blockDiagramDXYQGD6DValue33[blockDiagramDXYQGD6DParam31.id]
              .endRight,
          blockDiagramDXYQGD6DValue443 = blockDiagramDXYQGD6DParam31.x,
          blockDiagramDXYQGD6DValue444 = blockDiagramDXYQGD6DParam31.y;
        if (blockDiagramDXYQGD6DValue192) {
          let blockDiagramDXYQGD6DValue524 =
            chunk5PVQY5BWC.calcTerminalLabelPosition(
              blockDiagramDXYQGD6DParam31.arrowTypeEnd ? 10 : 0,
              "end_right",
              blockDiagramDXYQGD6DValue192,
            );
          blockDiagramDXYQGD6DValue443 = blockDiagramDXYQGD6DValue524.x;
          blockDiagramDXYQGD6DValue444 = blockDiagramDXYQGD6DValue524.y;
        }
        blockDiagramDXYQGD6DValue442.attr(
          "transform",
          `translate(${blockDiagramDXYQGD6DValue443}, ${blockDiagramDXYQGD6DValue444})`,
        );
      }
    },
    "positionEdgeLabel",
  ),
  blockDiagramDXYQGD6DValue36 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam194, blockDiagramDXYQGD6DParam195) => {
      let blockDiagramDXYQGD6DValue503 = blockDiagramDXYQGD6DParam194.x,
        blockDiagramDXYQGD6DValue504 = blockDiagramDXYQGD6DParam194.y,
        blockDiagramDXYQGD6DValue505 = Math.abs(
          blockDiagramDXYQGD6DParam195.x - blockDiagramDXYQGD6DValue503,
        ),
        blockDiagramDXYQGD6DValue506 = Math.abs(
          blockDiagramDXYQGD6DParam195.y - blockDiagramDXYQGD6DValue504,
        ),
        blockDiagramDXYQGD6DValue507 = blockDiagramDXYQGD6DParam194.width / 2,
        blockDiagramDXYQGD6DValue508 = blockDiagramDXYQGD6DParam194.height / 2;
      return (
        blockDiagramDXYQGD6DValue505 >= blockDiagramDXYQGD6DValue507 ||
        blockDiagramDXYQGD6DValue506 >= blockDiagramDXYQGD6DValue508
      );
    },
    "outsideNode",
  ),
  blockDiagramDXYQGD6DValue37 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam56,
      blockDiagramDXYQGD6DParam57,
      blockDiagramDXYQGD6DParam58,
    ) => {
      chunkAGHRB4JFR.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(blockDiagramDXYQGD6DParam57)}
  insidePoint : ${JSON.stringify(blockDiagramDXYQGD6DParam58)}
  node        : x:${blockDiagramDXYQGD6DParam56.x} y:${blockDiagramDXYQGD6DParam56.y} w:${blockDiagramDXYQGD6DParam56.width} h:${blockDiagramDXYQGD6DParam56.height}`);
      let blockDiagramDXYQGD6DValue236 = blockDiagramDXYQGD6DParam56.x,
        blockDiagramDXYQGD6DValue237 = blockDiagramDXYQGD6DParam56.y,
        blockDiagramDXYQGD6DValue238 = Math.abs(
          blockDiagramDXYQGD6DValue236 - blockDiagramDXYQGD6DParam58.x,
        ),
        blockDiagramDXYQGD6DValue239 = blockDiagramDXYQGD6DParam56.width / 2,
        blockDiagramDXYQGD6DValue240 =
          blockDiagramDXYQGD6DParam58.x < blockDiagramDXYQGD6DParam57.x
            ? blockDiagramDXYQGD6DValue239 - blockDiagramDXYQGD6DValue238
            : blockDiagramDXYQGD6DValue239 + blockDiagramDXYQGD6DValue238,
        blockDiagramDXYQGD6DValue241 = blockDiagramDXYQGD6DParam56.height / 2,
        blockDiagramDXYQGD6DValue242 = Math.abs(
          blockDiagramDXYQGD6DParam57.y - blockDiagramDXYQGD6DParam58.y,
        ),
        blockDiagramDXYQGD6DValue243 = Math.abs(
          blockDiagramDXYQGD6DParam57.x - blockDiagramDXYQGD6DParam58.x,
        );
      if (
        Math.abs(blockDiagramDXYQGD6DValue237 - blockDiagramDXYQGD6DParam57.y) *
          blockDiagramDXYQGD6DValue239 >
        Math.abs(blockDiagramDXYQGD6DValue236 - blockDiagramDXYQGD6DParam57.x) *
          blockDiagramDXYQGD6DValue241
      ) {
        let blockDiagramDXYQGD6DValue409 =
          blockDiagramDXYQGD6DParam58.y < blockDiagramDXYQGD6DParam57.y
            ? blockDiagramDXYQGD6DParam57.y -
              blockDiagramDXYQGD6DValue241 -
              blockDiagramDXYQGD6DValue237
            : blockDiagramDXYQGD6DValue237 -
              blockDiagramDXYQGD6DValue241 -
              blockDiagramDXYQGD6DParam57.y;
        blockDiagramDXYQGD6DValue240 =
          (blockDiagramDXYQGD6DValue243 * blockDiagramDXYQGD6DValue409) /
          blockDiagramDXYQGD6DValue242;
        let blockDiagramDXYQGD6DValue410 = {
          x:
            blockDiagramDXYQGD6DParam58.x < blockDiagramDXYQGD6DParam57.x
              ? blockDiagramDXYQGD6DParam58.x + blockDiagramDXYQGD6DValue240
              : blockDiagramDXYQGD6DParam58.x -
                blockDiagramDXYQGD6DValue243 +
                blockDiagramDXYQGD6DValue240,
          y:
            blockDiagramDXYQGD6DParam58.y < blockDiagramDXYQGD6DParam57.y
              ? blockDiagramDXYQGD6DParam58.y +
                blockDiagramDXYQGD6DValue242 -
                blockDiagramDXYQGD6DValue409
              : blockDiagramDXYQGD6DParam58.y -
                blockDiagramDXYQGD6DValue242 +
                blockDiagramDXYQGD6DValue409,
        };
        return (
          blockDiagramDXYQGD6DValue240 === 0 &&
            ((blockDiagramDXYQGD6DValue410.x = blockDiagramDXYQGD6DParam57.x),
            (blockDiagramDXYQGD6DValue410.y = blockDiagramDXYQGD6DParam57.y)),
          blockDiagramDXYQGD6DValue243 === 0 &&
            (blockDiagramDXYQGD6DValue410.x = blockDiagramDXYQGD6DParam57.x),
          blockDiagramDXYQGD6DValue242 === 0 &&
            (blockDiagramDXYQGD6DValue410.y = blockDiagramDXYQGD6DParam57.y),
          chunkAGHRB4JFR.debug(
            `abc89 topp/bott calc, Q ${blockDiagramDXYQGD6DValue242}, q ${blockDiagramDXYQGD6DValue409}, R ${blockDiagramDXYQGD6DValue243}, r ${blockDiagramDXYQGD6DValue240}`,
            blockDiagramDXYQGD6DValue410,
          ),
          blockDiagramDXYQGD6DValue410
        );
      } else {
        blockDiagramDXYQGD6DValue240 =
          blockDiagramDXYQGD6DParam58.x < blockDiagramDXYQGD6DParam57.x
            ? blockDiagramDXYQGD6DParam57.x -
              blockDiagramDXYQGD6DValue239 -
              blockDiagramDXYQGD6DValue236
            : blockDiagramDXYQGD6DValue236 -
              blockDiagramDXYQGD6DValue239 -
              blockDiagramDXYQGD6DParam57.x;
        let blockDiagramDXYQGD6DValue405 =
            (blockDiagramDXYQGD6DValue242 * blockDiagramDXYQGD6DValue240) /
            blockDiagramDXYQGD6DValue243,
          blockDiagramDXYQGD6DValue406 =
            blockDiagramDXYQGD6DParam58.x < blockDiagramDXYQGD6DParam57.x
              ? blockDiagramDXYQGD6DParam58.x +
                blockDiagramDXYQGD6DValue243 -
                blockDiagramDXYQGD6DValue240
              : blockDiagramDXYQGD6DParam58.x -
                blockDiagramDXYQGD6DValue243 +
                blockDiagramDXYQGD6DValue240,
          blockDiagramDXYQGD6DValue407 =
            blockDiagramDXYQGD6DParam58.y < blockDiagramDXYQGD6DParam57.y
              ? blockDiagramDXYQGD6DParam58.y + blockDiagramDXYQGD6DValue405
              : blockDiagramDXYQGD6DParam58.y - blockDiagramDXYQGD6DValue405;
        return (
          chunkAGHRB4JFR.debug(
            `sides calc abc89, Q ${blockDiagramDXYQGD6DValue242}, q ${blockDiagramDXYQGD6DValue405}, R ${blockDiagramDXYQGD6DValue243}, r ${blockDiagramDXYQGD6DValue240}`,
            {
              _x: blockDiagramDXYQGD6DValue406,
              _y: blockDiagramDXYQGD6DValue407,
            },
          ),
          blockDiagramDXYQGD6DValue240 === 0 &&
            ((blockDiagramDXYQGD6DValue406 = blockDiagramDXYQGD6DParam57.x),
            (blockDiagramDXYQGD6DValue407 = blockDiagramDXYQGD6DParam57.y)),
          blockDiagramDXYQGD6DValue243 === 0 &&
            (blockDiagramDXYQGD6DValue406 = blockDiagramDXYQGD6DParam57.x),
          blockDiagramDXYQGD6DValue242 === 0 &&
            (blockDiagramDXYQGD6DValue407 = blockDiagramDXYQGD6DParam57.y),
          {
            x: blockDiagramDXYQGD6DValue406,
            y: blockDiagramDXYQGD6DValue407,
          }
        );
      }
    },
    "intersection",
  ),
  blockDiagramDXYQGD6DValue38 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam143, blockDiagramDXYQGD6DParam144) => {
      chunkAGHRB4JFR.debug(
        "abc88 cutPathAtIntersect",
        blockDiagramDXYQGD6DParam143,
        blockDiagramDXYQGD6DParam144,
      );
      let blockDiagramDXYQGD6DValue392 = [],
        blockDiagramDXYQGD6DValue393 = blockDiagramDXYQGD6DParam143[0],
        blockDiagramDXYQGD6DValue394 = false;
      return (
        blockDiagramDXYQGD6DParam143.forEach((item) => {
          if (
            !blockDiagramDXYQGD6DValue36(blockDiagramDXYQGD6DParam144, item) &&
            !blockDiagramDXYQGD6DValue394
          ) {
            let blockDiagramDXYQGD6DValue475 = blockDiagramDXYQGD6DValue37(
                blockDiagramDXYQGD6DParam144,
                blockDiagramDXYQGD6DValue393,
                item,
              ),
              blockDiagramDXYQGD6DValue476 = false;
            blockDiagramDXYQGD6DValue392.forEach((_item) => {
              blockDiagramDXYQGD6DValue476 ||=
                _item.x === blockDiagramDXYQGD6DValue475.x &&
                _item.y === blockDiagramDXYQGD6DValue475.y;
            });
            blockDiagramDXYQGD6DValue392.some(
              (_item) =>
                _item.x === blockDiagramDXYQGD6DValue475.x &&
                _item.y === blockDiagramDXYQGD6DValue475.y,
            ) ||
              blockDiagramDXYQGD6DValue392.push(blockDiagramDXYQGD6DValue475);
            blockDiagramDXYQGD6DValue394 = true;
          } else {
            blockDiagramDXYQGD6DValue393 = item;
            blockDiagramDXYQGD6DValue394 ||
              blockDiagramDXYQGD6DValue392.push(item);
          }
        }),
        blockDiagramDXYQGD6DValue392
      );
    },
    "cutPathAtIntersect",
  ),
  blockDiagramDXYQGD6DValue39 = chunkAGHRB4JFN(function (
    blockDiagramDXYQGD6DParam36,
    blockDiagramDXYQGD6DParam37,
    blockDiagramDXYQGD6DParam38,
    blockDiagramDXYQGD6DParam39,
    blockDiagramDXYQGD6DParam40,
    blockDiagramDXYQGD6DParam41,
    blockDiagramDXYQGD6DParam42,
  ) {
    let blockDiagramDXYQGD6DValue202 = blockDiagramDXYQGD6DParam38.points;
    chunkAGHRB4JFR.debug(
      "abc88 InsertEdge: edge=",
      blockDiagramDXYQGD6DParam38,
      "e=",
      blockDiagramDXYQGD6DParam37,
    );
    let blockDiagramDXYQGD6DValue203 = false,
      blockDiagramDXYQGD6DValue204 = blockDiagramDXYQGD6DParam41.node(
        blockDiagramDXYQGD6DParam37.v,
      );
    var blockDiagramDXYQGD6DValue205 = blockDiagramDXYQGD6DParam41.node(
      blockDiagramDXYQGD6DParam37.w,
    );
    blockDiagramDXYQGD6DValue205?.intersect &&
      blockDiagramDXYQGD6DValue204?.intersect &&
      ((blockDiagramDXYQGD6DValue202 = blockDiagramDXYQGD6DValue202.slice(
        1,
        blockDiagramDXYQGD6DParam38.points.length - 1,
      )),
      blockDiagramDXYQGD6DValue202.unshift(
        blockDiagramDXYQGD6DValue204.intersect(blockDiagramDXYQGD6DValue202[0]),
      ),
      blockDiagramDXYQGD6DValue202.push(
        blockDiagramDXYQGD6DValue205.intersect(
          blockDiagramDXYQGD6DValue202[blockDiagramDXYQGD6DValue202.length - 1],
        ),
      ));
    blockDiagramDXYQGD6DParam38.toCluster &&
      (chunkAGHRB4JFR.debug(
        "to cluster abc88",
        blockDiagramDXYQGD6DParam39[blockDiagramDXYQGD6DParam38.toCluster],
      ),
      (blockDiagramDXYQGD6DValue202 = blockDiagramDXYQGD6DValue38(
        blockDiagramDXYQGD6DParam38.points,
        blockDiagramDXYQGD6DParam39[blockDiagramDXYQGD6DParam38.toCluster].node,
      )),
      (blockDiagramDXYQGD6DValue203 = true));
    blockDiagramDXYQGD6DParam38.fromCluster &&
      (chunkAGHRB4JFR.debug(
        "from cluster abc88",
        blockDiagramDXYQGD6DParam39[blockDiagramDXYQGD6DParam38.fromCluster],
      ),
      (blockDiagramDXYQGD6DValue202 = blockDiagramDXYQGD6DValue38(
        blockDiagramDXYQGD6DValue202.reverse(),
        blockDiagramDXYQGD6DParam39[blockDiagramDXYQGD6DParam38.fromCluster]
          .node,
      ).reverse()),
      (blockDiagramDXYQGD6DValue203 = true));
    let blockDiagramDXYQGD6DValue206 = blockDiagramDXYQGD6DValue202.filter(
        (item) => !Number.isNaN(item.y),
      ),
      blockDiagramDXYQGD6DValue207 = stepH;
    blockDiagramDXYQGD6DParam38.curve &&
      (blockDiagramDXYQGD6DParam40 === "graph" ||
        blockDiagramDXYQGD6DParam40 === "flowchart") &&
      (blockDiagramDXYQGD6DValue207 = blockDiagramDXYQGD6DParam38.curve);
    let { x, y: blockDiagramDXYQGD6DValue208 } = chunkBSJP7CBPI(
        blockDiagramDXYQGD6DParam38,
      ),
      blockDiagramDXYQGD6DValue209 = line()
        .x(x)
        .y(blockDiagramDXYQGD6DValue208)
        .curve(blockDiagramDXYQGD6DValue207),
      blockDiagramDXYQGD6DValue210;
    switch (blockDiagramDXYQGD6DParam38.thickness) {
      case "normal":
        blockDiagramDXYQGD6DValue210 = "edge-thickness-normal";
        break;
      case "thick":
        blockDiagramDXYQGD6DValue210 = "edge-thickness-thick";
        break;
      case "invisible":
        blockDiagramDXYQGD6DValue210 = "edge-thickness-thick";
        break;
      default:
        blockDiagramDXYQGD6DValue210 = "";
    }
    switch (blockDiagramDXYQGD6DParam38.pattern) {
      case "solid":
        blockDiagramDXYQGD6DValue210 += " edge-pattern-solid";
        break;
      case "dotted":
        blockDiagramDXYQGD6DValue210 += " edge-pattern-dotted";
        break;
      case "dashed":
        blockDiagramDXYQGD6DValue210 += " edge-pattern-dashed";
        break;
    }
    let blockDiagramDXYQGD6DValue211 = blockDiagramDXYQGD6DParam36
        .append("path")
        .attr("d", blockDiagramDXYQGD6DValue209(blockDiagramDXYQGD6DValue206))
        .attr("id", blockDiagramDXYQGD6DParam38.id)
        .attr(
          "class",
          " " +
            blockDiagramDXYQGD6DValue210 +
            (blockDiagramDXYQGD6DParam38.classes
              ? " " + blockDiagramDXYQGD6DParam38.classes
              : ""),
        )
        .attr("style", blockDiagramDXYQGD6DParam38.style),
      blockDiagramDXYQGD6DValue212 = "";
    (_chunkICPOFSXXP().flowchart.arrowMarkerAbsolute ||
      _chunkICPOFSXXP().state.arrowMarkerAbsolute) &&
      (blockDiagramDXYQGD6DValue212 = chunkICPOFSXXX(true));
    blockDiagramDXYQGD6DValue29(
      blockDiagramDXYQGD6DValue211,
      blockDiagramDXYQGD6DParam38,
      blockDiagramDXYQGD6DValue212,
      blockDiagramDXYQGD6DParam42,
      blockDiagramDXYQGD6DParam40,
    );
    let blockDiagramDXYQGD6DValue213 = {};
    return (
      blockDiagramDXYQGD6DValue203 &&
        (blockDiagramDXYQGD6DValue213.updatedPath =
          blockDiagramDXYQGD6DValue202),
      (blockDiagramDXYQGD6DValue213.originalPath =
        blockDiagramDXYQGD6DParam38.points),
      blockDiagramDXYQGD6DValue213
    );
  }, "insertEdge"),
  blockDiagramDXYQGD6DValue40 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam172) => {
      let blockDiagramDXYQGD6DValue449 = new Set();
      for (let blockDiagramDXYQGD6DValue474 of blockDiagramDXYQGD6DParam172)
        switch (blockDiagramDXYQGD6DValue474) {
          case "x":
            blockDiagramDXYQGD6DValue449.add("right");
            blockDiagramDXYQGD6DValue449.add("left");
            break;
          case "y":
            blockDiagramDXYQGD6DValue449.add("up");
            blockDiagramDXYQGD6DValue449.add("down");
            break;
          default:
            blockDiagramDXYQGD6DValue449.add(blockDiagramDXYQGD6DValue474);
            break;
        }
      return blockDiagramDXYQGD6DValue449;
    },
    "expandAndDeduplicateDirections",
  ),
  blockDiagramDXYQGD6DValue41 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam12,
      blockDiagramDXYQGD6DParam13,
      blockDiagramDXYQGD6DParam14,
    ) => {
      let blockDiagramDXYQGD6DValue96 = blockDiagramDXYQGD6DValue40(
          blockDiagramDXYQGD6DParam12,
        ),
        blockDiagramDXYQGD6DValue97 =
          blockDiagramDXYQGD6DParam13.height +
          2 * blockDiagramDXYQGD6DParam14.padding,
        blockDiagramDXYQGD6DValue98 = blockDiagramDXYQGD6DValue97 / 2,
        blockDiagramDXYQGD6DValue99 =
          blockDiagramDXYQGD6DParam13.width +
          2 * blockDiagramDXYQGD6DValue98 +
          blockDiagramDXYQGD6DParam14.padding,
        blockDiagramDXYQGD6DValue100 = blockDiagramDXYQGD6DParam14.padding / 2;
      return blockDiagramDXYQGD6DValue96.has("right") &&
        blockDiagramDXYQGD6DValue96.has("left") &&
        blockDiagramDXYQGD6DValue96.has("up") &&
        blockDiagramDXYQGD6DValue96.has("down")
        ? [
            {
              x: 0,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DValue98,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DValue99 / 2,
              y: 2 * blockDiagramDXYQGD6DValue100,
            },
            {
              x: blockDiagramDXYQGD6DValue99 - blockDiagramDXYQGD6DValue98,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DValue99,
              y: 0,
            },
            {
              x: blockDiagramDXYQGD6DValue99,
              y: -blockDiagramDXYQGD6DValue97 / 3,
            },
            {
              x: blockDiagramDXYQGD6DValue99 + 2 * blockDiagramDXYQGD6DValue100,
              y: -blockDiagramDXYQGD6DValue97 / 2,
            },
            {
              x: blockDiagramDXYQGD6DValue99,
              y: (-2 * blockDiagramDXYQGD6DValue97) / 3,
            },
            {
              x: blockDiagramDXYQGD6DValue99,
              y: -blockDiagramDXYQGD6DValue97,
            },
            {
              x: blockDiagramDXYQGD6DValue99 - blockDiagramDXYQGD6DValue98,
              y: -blockDiagramDXYQGD6DValue97,
            },
            {
              x: blockDiagramDXYQGD6DValue99 / 2,
              y:
                -blockDiagramDXYQGD6DValue97 - 2 * blockDiagramDXYQGD6DValue100,
            },
            {
              x: blockDiagramDXYQGD6DValue98,
              y: -blockDiagramDXYQGD6DValue97,
            },
            {
              x: 0,
              y: -blockDiagramDXYQGD6DValue97,
            },
            {
              x: 0,
              y: (-2 * blockDiagramDXYQGD6DValue97) / 3,
            },
            {
              x: -2 * blockDiagramDXYQGD6DValue100,
              y: -blockDiagramDXYQGD6DValue97 / 2,
            },
            {
              x: 0,
              y: -blockDiagramDXYQGD6DValue97 / 3,
            },
          ]
        : blockDiagramDXYQGD6DValue96.has("right") &&
            blockDiagramDXYQGD6DValue96.has("left") &&
            blockDiagramDXYQGD6DValue96.has("up")
          ? [
              {
                x: blockDiagramDXYQGD6DValue98,
                y: 0,
              },
              {
                x: blockDiagramDXYQGD6DValue99 - blockDiagramDXYQGD6DValue98,
                y: 0,
              },
              {
                x: blockDiagramDXYQGD6DValue99,
                y: -blockDiagramDXYQGD6DValue97 / 2,
              },
              {
                x: blockDiagramDXYQGD6DValue99 - blockDiagramDXYQGD6DValue98,
                y: -blockDiagramDXYQGD6DValue97,
              },
              {
                x: blockDiagramDXYQGD6DValue98,
                y: -blockDiagramDXYQGD6DValue97,
              },
              {
                x: 0,
                y: -blockDiagramDXYQGD6DValue97 / 2,
              },
            ]
          : blockDiagramDXYQGD6DValue96.has("right") &&
              blockDiagramDXYQGD6DValue96.has("left") &&
              blockDiagramDXYQGD6DValue96.has("down")
            ? [
                {
                  x: 0,
                  y: 0,
                },
                {
                  x: blockDiagramDXYQGD6DValue98,
                  y: -blockDiagramDXYQGD6DValue97,
                },
                {
                  x: blockDiagramDXYQGD6DValue99 - blockDiagramDXYQGD6DValue98,
                  y: -blockDiagramDXYQGD6DValue97,
                },
                {
                  x: blockDiagramDXYQGD6DValue99,
                  y: 0,
                },
              ]
            : blockDiagramDXYQGD6DValue96.has("right") &&
                blockDiagramDXYQGD6DValue96.has("up") &&
                blockDiagramDXYQGD6DValue96.has("down")
              ? [
                  {
                    x: 0,
                    y: 0,
                  },
                  {
                    x: blockDiagramDXYQGD6DValue99,
                    y: -blockDiagramDXYQGD6DValue98,
                  },
                  {
                    x: blockDiagramDXYQGD6DValue99,
                    y:
                      -blockDiagramDXYQGD6DValue97 +
                      blockDiagramDXYQGD6DValue98,
                  },
                  {
                    x: 0,
                    y: -blockDiagramDXYQGD6DValue97,
                  },
                ]
              : blockDiagramDXYQGD6DValue96.has("left") &&
                  blockDiagramDXYQGD6DValue96.has("up") &&
                  blockDiagramDXYQGD6DValue96.has("down")
                ? [
                    {
                      x: blockDiagramDXYQGD6DValue99,
                      y: 0,
                    },
                    {
                      x: 0,
                      y: -blockDiagramDXYQGD6DValue98,
                    },
                    {
                      x: 0,
                      y:
                        -blockDiagramDXYQGD6DValue97 +
                        blockDiagramDXYQGD6DValue98,
                    },
                    {
                      x: blockDiagramDXYQGD6DValue99,
                      y: -blockDiagramDXYQGD6DValue97,
                    },
                  ]
                : blockDiagramDXYQGD6DValue96.has("right") &&
                    blockDiagramDXYQGD6DValue96.has("left")
                  ? [
                      {
                        x: blockDiagramDXYQGD6DValue98,
                        y: 0,
                      },
                      {
                        x: blockDiagramDXYQGD6DValue98,
                        y: -blockDiagramDXYQGD6DValue100,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DValue99 -
                          blockDiagramDXYQGD6DValue98,
                        y: -blockDiagramDXYQGD6DValue100,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DValue99 -
                          blockDiagramDXYQGD6DValue98,
                        y: 0,
                      },
                      {
                        x: blockDiagramDXYQGD6DValue99,
                        y: -blockDiagramDXYQGD6DValue97 / 2,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DValue99 -
                          blockDiagramDXYQGD6DValue98,
                        y: -blockDiagramDXYQGD6DValue97,
                      },
                      {
                        x:
                          blockDiagramDXYQGD6DValue99 -
                          blockDiagramDXYQGD6DValue98,
                        y:
                          -blockDiagramDXYQGD6DValue97 +
                          blockDiagramDXYQGD6DValue100,
                      },
                      {
                        x: blockDiagramDXYQGD6DValue98,
                        y:
                          -blockDiagramDXYQGD6DValue97 +
                          blockDiagramDXYQGD6DValue100,
                      },
                      {
                        x: blockDiagramDXYQGD6DValue98,
                        y: -blockDiagramDXYQGD6DValue97,
                      },
                      {
                        x: 0,
                        y: -blockDiagramDXYQGD6DValue97 / 2,
                      },
                    ]
                  : blockDiagramDXYQGD6DValue96.has("up") &&
                      blockDiagramDXYQGD6DValue96.has("down")
                    ? [
                        {
                          x: blockDiagramDXYQGD6DValue99 / 2,
                          y: 0,
                        },
                        {
                          x: 0,
                          y: -blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x: blockDiagramDXYQGD6DValue98,
                          y: -blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x: blockDiagramDXYQGD6DValue98,
                          y:
                            -blockDiagramDXYQGD6DValue97 +
                            blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x: 0,
                          y:
                            -blockDiagramDXYQGD6DValue97 +
                            blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x: blockDiagramDXYQGD6DValue99 / 2,
                          y: -blockDiagramDXYQGD6DValue97,
                        },
                        {
                          x: blockDiagramDXYQGD6DValue99,
                          y:
                            -blockDiagramDXYQGD6DValue97 +
                            blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x:
                            blockDiagramDXYQGD6DValue99 -
                            blockDiagramDXYQGD6DValue98,
                          y:
                            -blockDiagramDXYQGD6DValue97 +
                            blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x:
                            blockDiagramDXYQGD6DValue99 -
                            blockDiagramDXYQGD6DValue98,
                          y: -blockDiagramDXYQGD6DValue100,
                        },
                        {
                          x: blockDiagramDXYQGD6DValue99,
                          y: -blockDiagramDXYQGD6DValue100,
                        },
                      ]
                    : blockDiagramDXYQGD6DValue96.has("right") &&
                        blockDiagramDXYQGD6DValue96.has("up")
                      ? [
                          {
                            x: 0,
                            y: 0,
                          },
                          {
                            x: blockDiagramDXYQGD6DValue99,
                            y: -blockDiagramDXYQGD6DValue98,
                          },
                          {
                            x: 0,
                            y: -blockDiagramDXYQGD6DValue97,
                          },
                        ]
                      : blockDiagramDXYQGD6DValue96.has("right") &&
                          blockDiagramDXYQGD6DValue96.has("down")
                        ? [
                            {
                              x: 0,
                              y: 0,
                            },
                            {
                              x: blockDiagramDXYQGD6DValue99,
                              y: 0,
                            },
                            {
                              x: 0,
                              y: -blockDiagramDXYQGD6DValue97,
                            },
                          ]
                        : blockDiagramDXYQGD6DValue96.has("left") &&
                            blockDiagramDXYQGD6DValue96.has("up")
                          ? [
                              {
                                x: blockDiagramDXYQGD6DValue99,
                                y: 0,
                              },
                              {
                                x: 0,
                                y: -blockDiagramDXYQGD6DValue98,
                              },
                              {
                                x: blockDiagramDXYQGD6DValue99,
                                y: -blockDiagramDXYQGD6DValue97,
                              },
                            ]
                          : blockDiagramDXYQGD6DValue96.has("left") &&
                              blockDiagramDXYQGD6DValue96.has("down")
                            ? [
                                {
                                  x: blockDiagramDXYQGD6DValue99,
                                  y: 0,
                                },
                                {
                                  x: 0,
                                  y: 0,
                                },
                                {
                                  x: blockDiagramDXYQGD6DValue99,
                                  y: -blockDiagramDXYQGD6DValue97,
                                },
                              ]
                            : blockDiagramDXYQGD6DValue96.has("right")
                              ? [
                                  {
                                    x: blockDiagramDXYQGD6DValue98,
                                    y: -blockDiagramDXYQGD6DValue100,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DValue98,
                                    y: -blockDiagramDXYQGD6DValue100,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DValue99 -
                                      blockDiagramDXYQGD6DValue98,
                                    y: -blockDiagramDXYQGD6DValue100,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DValue99 -
                                      blockDiagramDXYQGD6DValue98,
                                    y: 0,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DValue99,
                                    y: -blockDiagramDXYQGD6DValue97 / 2,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DValue99 -
                                      blockDiagramDXYQGD6DValue98,
                                    y: -blockDiagramDXYQGD6DValue97,
                                  },
                                  {
                                    x:
                                      blockDiagramDXYQGD6DValue99 -
                                      blockDiagramDXYQGD6DValue98,
                                    y:
                                      -blockDiagramDXYQGD6DValue97 +
                                      blockDiagramDXYQGD6DValue100,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DValue98,
                                    y:
                                      -blockDiagramDXYQGD6DValue97 +
                                      blockDiagramDXYQGD6DValue100,
                                  },
                                  {
                                    x: blockDiagramDXYQGD6DValue98,
                                    y:
                                      -blockDiagramDXYQGD6DValue97 +
                                      blockDiagramDXYQGD6DValue100,
                                  },
                                ]
                              : blockDiagramDXYQGD6DValue96.has("left")
                                ? [
                                    {
                                      x: blockDiagramDXYQGD6DValue98,
                                      y: 0,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DValue98,
                                      y: -blockDiagramDXYQGD6DValue100,
                                    },
                                    {
                                      x:
                                        blockDiagramDXYQGD6DValue99 -
                                        blockDiagramDXYQGD6DValue98,
                                      y: -blockDiagramDXYQGD6DValue100,
                                    },
                                    {
                                      x:
                                        blockDiagramDXYQGD6DValue99 -
                                        blockDiagramDXYQGD6DValue98,
                                      y:
                                        -blockDiagramDXYQGD6DValue97 +
                                        blockDiagramDXYQGD6DValue100,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DValue98,
                                      y:
                                        -blockDiagramDXYQGD6DValue97 +
                                        blockDiagramDXYQGD6DValue100,
                                    },
                                    {
                                      x: blockDiagramDXYQGD6DValue98,
                                      y: -blockDiagramDXYQGD6DValue97,
                                    },
                                    {
                                      x: 0,
                                      y: -blockDiagramDXYQGD6DValue97 / 2,
                                    },
                                  ]
                                : blockDiagramDXYQGD6DValue96.has("up")
                                  ? [
                                      {
                                        x: blockDiagramDXYQGD6DValue98,
                                        y: -blockDiagramDXYQGD6DValue100,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DValue98,
                                        y:
                                          -blockDiagramDXYQGD6DValue97 +
                                          blockDiagramDXYQGD6DValue100,
                                      },
                                      {
                                        x: 0,
                                        y:
                                          -blockDiagramDXYQGD6DValue97 +
                                          blockDiagramDXYQGD6DValue100,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DValue99 / 2,
                                        y: -blockDiagramDXYQGD6DValue97,
                                      },
                                      {
                                        x: blockDiagramDXYQGD6DValue99,
                                        y:
                                          -blockDiagramDXYQGD6DValue97 +
                                          blockDiagramDXYQGD6DValue100,
                                      },
                                      {
                                        x:
                                          blockDiagramDXYQGD6DValue99 -
                                          blockDiagramDXYQGD6DValue98,
                                        y:
                                          -blockDiagramDXYQGD6DValue97 +
                                          blockDiagramDXYQGD6DValue100,
                                      },
                                      {
                                        x:
                                          blockDiagramDXYQGD6DValue99 -
                                          blockDiagramDXYQGD6DValue98,
                                        y: -blockDiagramDXYQGD6DValue100,
                                      },
                                    ]
                                  : blockDiagramDXYQGD6DValue96.has("down")
                                    ? [
                                        {
                                          x: blockDiagramDXYQGD6DValue99 / 2,
                                          y: 0,
                                        },
                                        {
                                          x: 0,
                                          y: -blockDiagramDXYQGD6DValue100,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DValue98,
                                          y: -blockDiagramDXYQGD6DValue100,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DValue98,
                                          y:
                                            -blockDiagramDXYQGD6DValue97 +
                                            blockDiagramDXYQGD6DValue100,
                                        },
                                        {
                                          x:
                                            blockDiagramDXYQGD6DValue99 -
                                            blockDiagramDXYQGD6DValue98,
                                          y:
                                            -blockDiagramDXYQGD6DValue97 +
                                            blockDiagramDXYQGD6DValue100,
                                        },
                                        {
                                          x:
                                            blockDiagramDXYQGD6DValue99 -
                                            blockDiagramDXYQGD6DValue98,
                                          y: -blockDiagramDXYQGD6DValue100,
                                        },
                                        {
                                          x: blockDiagramDXYQGD6DValue99,
                                          y: -blockDiagramDXYQGD6DValue100,
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
function blockDiagramDXYQGD6DHelper10(
  blockDiagramDXYQGD6DParam270,
  blockDiagramDXYQGD6DParam271,
) {
  return blockDiagramDXYQGD6DParam270.intersect(blockDiagramDXYQGD6DParam271);
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper10, "intersectNode");
var blockDiagramDXYQGD6DValue42 = blockDiagramDXYQGD6DHelper10;
function blockDiagramDXYQGD6DHelper11(
  blockDiagramDXYQGD6DParam176,
  blockDiagramDXYQGD6DParam177,
  blockDiagramDXYQGD6DParam178,
  blockDiagramDXYQGD6DParam179,
) {
  var blockDiagramDXYQGD6DValue454 = blockDiagramDXYQGD6DParam176.x,
    blockDiagramDXYQGD6DValue455 = blockDiagramDXYQGD6DParam176.y,
    blockDiagramDXYQGD6DValue456 =
      blockDiagramDXYQGD6DValue454 - blockDiagramDXYQGD6DParam179.x,
    blockDiagramDXYQGD6DValue457 =
      blockDiagramDXYQGD6DValue455 - blockDiagramDXYQGD6DParam179.y,
    blockDiagramDXYQGD6DValue458 = Math.sqrt(
      blockDiagramDXYQGD6DParam177 *
        blockDiagramDXYQGD6DParam177 *
        blockDiagramDXYQGD6DValue457 *
        blockDiagramDXYQGD6DValue457 +
        blockDiagramDXYQGD6DParam178 *
          blockDiagramDXYQGD6DParam178 *
          blockDiagramDXYQGD6DValue456 *
          blockDiagramDXYQGD6DValue456,
    ),
    blockDiagramDXYQGD6DValue459 = Math.abs(
      (blockDiagramDXYQGD6DParam177 *
        blockDiagramDXYQGD6DParam178 *
        blockDiagramDXYQGD6DValue456) /
        blockDiagramDXYQGD6DValue458,
    );
  blockDiagramDXYQGD6DParam179.x < blockDiagramDXYQGD6DValue454 &&
    (blockDiagramDXYQGD6DValue459 = -blockDiagramDXYQGD6DValue459);
  var blockDiagramDXYQGD6DValue460 = Math.abs(
    (blockDiagramDXYQGD6DParam177 *
      blockDiagramDXYQGD6DParam178 *
      blockDiagramDXYQGD6DValue457) /
      blockDiagramDXYQGD6DValue458,
  );
  return (
    blockDiagramDXYQGD6DParam179.y < blockDiagramDXYQGD6DValue455 &&
      (blockDiagramDXYQGD6DValue460 = -blockDiagramDXYQGD6DValue460),
    {
      x: blockDiagramDXYQGD6DValue454 + blockDiagramDXYQGD6DValue459,
      y: blockDiagramDXYQGD6DValue455 + blockDiagramDXYQGD6DValue460,
    }
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper11, "intersectEllipse");
var blockDiagramDXYQGD6DValue43 = blockDiagramDXYQGD6DHelper11;
function blockDiagramDXYQGD6DHelper12(
  blockDiagramDXYQGD6DParam267,
  blockDiagramDXYQGD6DParam268,
  blockDiagramDXYQGD6DParam269,
) {
  return blockDiagramDXYQGD6DValue43(
    blockDiagramDXYQGD6DParam267,
    blockDiagramDXYQGD6DParam268,
    blockDiagramDXYQGD6DParam268,
    blockDiagramDXYQGD6DParam269,
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper12, "intersectCircle");
var blockDiagramDXYQGD6DValue44 = blockDiagramDXYQGD6DHelper12;
function blockDiagramDXYQGD6DHelper13(
  blockDiagramDXYQGD6DParam100,
  blockDiagramDXYQGD6DParam101,
  blockDiagramDXYQGD6DParam102,
  blockDiagramDXYQGD6DParam103,
) {
  var blockDiagramDXYQGD6DValue298 =
      blockDiagramDXYQGD6DParam101.y - blockDiagramDXYQGD6DParam100.y,
    blockDiagramDXYQGD6DValue299,
    blockDiagramDXYQGD6DValue300 =
      blockDiagramDXYQGD6DParam100.x - blockDiagramDXYQGD6DParam101.x,
    blockDiagramDXYQGD6DValue301,
    blockDiagramDXYQGD6DValue302 =
      blockDiagramDXYQGD6DParam101.x * blockDiagramDXYQGD6DParam100.y -
      blockDiagramDXYQGD6DParam100.x * blockDiagramDXYQGD6DParam101.y,
    blockDiagramDXYQGD6DValue303,
    blockDiagramDXYQGD6DValue304,
    blockDiagramDXYQGD6DValue305,
    blockDiagramDXYQGD6DValue306 =
      blockDiagramDXYQGD6DValue298 * blockDiagramDXYQGD6DParam102.x +
      blockDiagramDXYQGD6DValue300 * blockDiagramDXYQGD6DParam102.y +
      blockDiagramDXYQGD6DValue302,
    blockDiagramDXYQGD6DValue307 =
      blockDiagramDXYQGD6DValue298 * blockDiagramDXYQGD6DParam103.x +
      blockDiagramDXYQGD6DValue300 * blockDiagramDXYQGD6DParam103.y +
      blockDiagramDXYQGD6DValue302,
    blockDiagramDXYQGD6DValue308,
    blockDiagramDXYQGD6DValue309,
    blockDiagramDXYQGD6DValue310,
    blockDiagramDXYQGD6DValue311,
    blockDiagramDXYQGD6DValue312;
  if (
    !(
      blockDiagramDXYQGD6DValue306 !== 0 &&
      blockDiagramDXYQGD6DValue307 !== 0 &&
      blockDiagramDXYQGD6DHelper14(
        blockDiagramDXYQGD6DValue306,
        blockDiagramDXYQGD6DValue307,
      )
    ) &&
    ((blockDiagramDXYQGD6DValue299 =
      blockDiagramDXYQGD6DParam103.y - blockDiagramDXYQGD6DParam102.y),
    (blockDiagramDXYQGD6DValue301 =
      blockDiagramDXYQGD6DParam102.x - blockDiagramDXYQGD6DParam103.x),
    (blockDiagramDXYQGD6DValue303 =
      blockDiagramDXYQGD6DParam103.x * blockDiagramDXYQGD6DParam102.y -
      blockDiagramDXYQGD6DParam102.x * blockDiagramDXYQGD6DParam103.y),
    (blockDiagramDXYQGD6DValue304 =
      blockDiagramDXYQGD6DValue299 * blockDiagramDXYQGD6DParam100.x +
      blockDiagramDXYQGD6DValue301 * blockDiagramDXYQGD6DParam100.y +
      blockDiagramDXYQGD6DValue303),
    (blockDiagramDXYQGD6DValue305 =
      blockDiagramDXYQGD6DValue299 * blockDiagramDXYQGD6DParam101.x +
      blockDiagramDXYQGD6DValue301 * blockDiagramDXYQGD6DParam101.y +
      blockDiagramDXYQGD6DValue303),
    !(
      blockDiagramDXYQGD6DValue304 !== 0 &&
      blockDiagramDXYQGD6DValue305 !== 0 &&
      blockDiagramDXYQGD6DHelper14(
        blockDiagramDXYQGD6DValue304,
        blockDiagramDXYQGD6DValue305,
      )
    ) &&
      ((blockDiagramDXYQGD6DValue308 =
        blockDiagramDXYQGD6DValue298 * blockDiagramDXYQGD6DValue301 -
        blockDiagramDXYQGD6DValue299 * blockDiagramDXYQGD6DValue300),
      blockDiagramDXYQGD6DValue308 !== 0))
  )
    return (
      (blockDiagramDXYQGD6DValue309 = Math.abs(
        blockDiagramDXYQGD6DValue308 / 2,
      )),
      (blockDiagramDXYQGD6DValue310 =
        blockDiagramDXYQGD6DValue300 * blockDiagramDXYQGD6DValue303 -
        blockDiagramDXYQGD6DValue301 * blockDiagramDXYQGD6DValue302),
      (blockDiagramDXYQGD6DValue311 =
        blockDiagramDXYQGD6DValue310 < 0
          ? (blockDiagramDXYQGD6DValue310 - blockDiagramDXYQGD6DValue309) /
            blockDiagramDXYQGD6DValue308
          : (blockDiagramDXYQGD6DValue310 + blockDiagramDXYQGD6DValue309) /
            blockDiagramDXYQGD6DValue308),
      (blockDiagramDXYQGD6DValue310 =
        blockDiagramDXYQGD6DValue299 * blockDiagramDXYQGD6DValue302 -
        blockDiagramDXYQGD6DValue298 * blockDiagramDXYQGD6DValue303),
      (blockDiagramDXYQGD6DValue312 =
        blockDiagramDXYQGD6DValue310 < 0
          ? (blockDiagramDXYQGD6DValue310 - blockDiagramDXYQGD6DValue309) /
            blockDiagramDXYQGD6DValue308
          : (blockDiagramDXYQGD6DValue310 + blockDiagramDXYQGD6DValue309) /
            blockDiagramDXYQGD6DValue308),
      {
        x: blockDiagramDXYQGD6DValue311,
        y: blockDiagramDXYQGD6DValue312,
      }
    );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper13, "intersectLine");
function blockDiagramDXYQGD6DHelper14(
  blockDiagramDXYQGD6DParam273,
  blockDiagramDXYQGD6DParam274,
) {
  return blockDiagramDXYQGD6DParam273 * blockDiagramDXYQGD6DParam274 > 0;
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper14, "sameSign");
var blockDiagramDXYQGD6DValue45 = blockDiagramDXYQGD6DHelper13,
  blockDiagramDXYQGD6DValue46 = blockDiagramDXYQGD6DHelper15;
function blockDiagramDXYQGD6DHelper15(
  blockDiagramDXYQGD6DParam82,
  blockDiagramDXYQGD6DParam83,
  blockDiagramDXYQGD6DParam84,
) {
  var blockDiagramDXYQGD6DValue283 = blockDiagramDXYQGD6DParam82.x,
    blockDiagramDXYQGD6DValue284 = blockDiagramDXYQGD6DParam82.y,
    blockDiagramDXYQGD6DValue285 = [],
    blockDiagramDXYQGD6DValue286 = 1 / 0,
    blockDiagramDXYQGD6DValue287 = 1 / 0;
  typeof blockDiagramDXYQGD6DParam83.forEach == "function"
    ? blockDiagramDXYQGD6DParam83.forEach(function (item) {
        blockDiagramDXYQGD6DValue286 = Math.min(
          blockDiagramDXYQGD6DValue286,
          item.x,
        );
        blockDiagramDXYQGD6DValue287 = Math.min(
          blockDiagramDXYQGD6DValue287,
          item.y,
        );
      })
    : ((blockDiagramDXYQGD6DValue286 = Math.min(
        blockDiagramDXYQGD6DValue286,
        blockDiagramDXYQGD6DParam83.x,
      )),
      (blockDiagramDXYQGD6DValue287 = Math.min(
        blockDiagramDXYQGD6DValue287,
        blockDiagramDXYQGD6DParam83.y,
      )));
  for (
    var blockDiagramDXYQGD6DValue288 =
        blockDiagramDXYQGD6DValue283 -
        blockDiagramDXYQGD6DParam82.width / 2 -
        blockDiagramDXYQGD6DValue286,
      blockDiagramDXYQGD6DValue289 =
        blockDiagramDXYQGD6DValue284 -
        blockDiagramDXYQGD6DParam82.height / 2 -
        blockDiagramDXYQGD6DValue287,
      blockDiagramDXYQGD6DValue290 = 0;
    blockDiagramDXYQGD6DValue290 < blockDiagramDXYQGD6DParam83.length;
    blockDiagramDXYQGD6DValue290++
  ) {
    var blockDiagramDXYQGD6DValue291 =
        blockDiagramDXYQGD6DParam83[blockDiagramDXYQGD6DValue290],
      blockDiagramDXYQGD6DValue292 =
        blockDiagramDXYQGD6DParam83[
          blockDiagramDXYQGD6DValue290 < blockDiagramDXYQGD6DParam83.length - 1
            ? blockDiagramDXYQGD6DValue290 + 1
            : 0
        ],
      blockDiagramDXYQGD6DValue293 = blockDiagramDXYQGD6DValue45(
        blockDiagramDXYQGD6DParam82,
        blockDiagramDXYQGD6DParam84,
        {
          x: blockDiagramDXYQGD6DValue288 + blockDiagramDXYQGD6DValue291.x,
          y: blockDiagramDXYQGD6DValue289 + blockDiagramDXYQGD6DValue291.y,
        },
        {
          x: blockDiagramDXYQGD6DValue288 + blockDiagramDXYQGD6DValue292.x,
          y: blockDiagramDXYQGD6DValue289 + blockDiagramDXYQGD6DValue292.y,
        },
      );
    blockDiagramDXYQGD6DValue293 &&
      blockDiagramDXYQGD6DValue285.push(blockDiagramDXYQGD6DValue293);
  }
  return blockDiagramDXYQGD6DValue285.length
    ? (blockDiagramDXYQGD6DValue285.length > 1 &&
        blockDiagramDXYQGD6DValue285.sort(
          function (
            blockDiagramDXYQGD6DParam180,
            blockDiagramDXYQGD6DParam181,
          ) {
            var blockDiagramDXYQGD6DValue462 =
                blockDiagramDXYQGD6DParam180.x - blockDiagramDXYQGD6DParam84.x,
              blockDiagramDXYQGD6DValue463 =
                blockDiagramDXYQGD6DParam180.y - blockDiagramDXYQGD6DParam84.y,
              blockDiagramDXYQGD6DValue464 = Math.sqrt(
                blockDiagramDXYQGD6DValue462 * blockDiagramDXYQGD6DValue462 +
                  blockDiagramDXYQGD6DValue463 * blockDiagramDXYQGD6DValue463,
              ),
              blockDiagramDXYQGD6DValue465 =
                blockDiagramDXYQGD6DParam181.x - blockDiagramDXYQGD6DParam84.x,
              blockDiagramDXYQGD6DValue466 =
                blockDiagramDXYQGD6DParam181.y - blockDiagramDXYQGD6DParam84.y,
              blockDiagramDXYQGD6DValue467 = Math.sqrt(
                blockDiagramDXYQGD6DValue465 * blockDiagramDXYQGD6DValue465 +
                  blockDiagramDXYQGD6DValue466 * blockDiagramDXYQGD6DValue466,
              );
            return blockDiagramDXYQGD6DValue464 < blockDiagramDXYQGD6DValue467
              ? -1
              : blockDiagramDXYQGD6DValue464 === blockDiagramDXYQGD6DValue467
                ? 0
                : 1;
          },
        ),
      blockDiagramDXYQGD6DValue285[0])
    : blockDiagramDXYQGD6DParam82;
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper15, "intersectPolygon");
var blockDiagramDXYQGD6DValue47 = {
    node: blockDiagramDXYQGD6DValue42,
    circle: blockDiagramDXYQGD6DValue44,
    ellipse: blockDiagramDXYQGD6DValue43,
    polygon: blockDiagramDXYQGD6DValue46,
    rect: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DParam152, blockDiagramDXYQGD6DParam153) => {
        var blockDiagramDXYQGD6DValue413 = blockDiagramDXYQGD6DParam152.x,
          blockDiagramDXYQGD6DValue414 = blockDiagramDXYQGD6DParam152.y,
          blockDiagramDXYQGD6DValue415 =
            blockDiagramDXYQGD6DParam153.x - blockDiagramDXYQGD6DValue413,
          blockDiagramDXYQGD6DValue416 =
            blockDiagramDXYQGD6DParam153.y - blockDiagramDXYQGD6DValue414,
          blockDiagramDXYQGD6DValue417 = blockDiagramDXYQGD6DParam152.width / 2,
          blockDiagramDXYQGD6DValue418 =
            blockDiagramDXYQGD6DParam152.height / 2,
          blockDiagramDXYQGD6DValue419,
          blockDiagramDXYQGD6DValue420;
        return (
          Math.abs(blockDiagramDXYQGD6DValue416) *
            blockDiagramDXYQGD6DValue417 >
          Math.abs(blockDiagramDXYQGD6DValue415) * blockDiagramDXYQGD6DValue418
            ? (blockDiagramDXYQGD6DValue416 < 0 &&
                (blockDiagramDXYQGD6DValue418 = -blockDiagramDXYQGD6DValue418),
              (blockDiagramDXYQGD6DValue419 =
                blockDiagramDXYQGD6DValue416 === 0
                  ? 0
                  : (blockDiagramDXYQGD6DValue418 *
                      blockDiagramDXYQGD6DValue415) /
                    blockDiagramDXYQGD6DValue416),
              (blockDiagramDXYQGD6DValue420 = blockDiagramDXYQGD6DValue418))
            : (blockDiagramDXYQGD6DValue415 < 0 &&
                (blockDiagramDXYQGD6DValue417 = -blockDiagramDXYQGD6DValue417),
              (blockDiagramDXYQGD6DValue419 = blockDiagramDXYQGD6DValue417),
              (blockDiagramDXYQGD6DValue420 =
                blockDiagramDXYQGD6DValue415 === 0
                  ? 0
                  : (blockDiagramDXYQGD6DValue417 *
                      blockDiagramDXYQGD6DValue416) /
                    blockDiagramDXYQGD6DValue415)),
          {
            x: blockDiagramDXYQGD6DValue413 + blockDiagramDXYQGD6DValue419,
            y: blockDiagramDXYQGD6DValue414 + blockDiagramDXYQGD6DValue420,
          }
        );
      },
      "intersectRect",
    ),
  },
  blockDiagramDXYQGD6DValue48 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DParam50,
      blockDiagramDXYQGD6DParam51,
      blockDiagramDXYQGD6DParam52,
      blockDiagramDXYQGD6DParam53,
    ) => {
      let blockDiagramDXYQGD6DValue218 = _chunkICPOFSXXP(),
        blockDiagramDXYQGD6DValue219,
        blockDiagramDXYQGD6DValue220 =
          blockDiagramDXYQGD6DParam51.useHtmlLabels ||
          chunkICPOFSXXT(blockDiagramDXYQGD6DValue218);
      blockDiagramDXYQGD6DValue219 =
        blockDiagramDXYQGD6DParam52 || "node default";
      let blockDiagramDXYQGD6DValue221 = blockDiagramDXYQGD6DParam50
          .insert("g")
          .attr("class", blockDiagramDXYQGD6DValue219)
          .attr(
            "id",
            blockDiagramDXYQGD6DParam51.domId || blockDiagramDXYQGD6DParam51.id,
          ),
        blockDiagramDXYQGD6DValue222 = blockDiagramDXYQGD6DValue221
          .insert("g")
          .attr("class", "label")
          .attr("style", blockDiagramDXYQGD6DParam51.labelStyle),
        blockDiagramDXYQGD6DValue223;
      blockDiagramDXYQGD6DValue223 =
        blockDiagramDXYQGD6DParam51.labelText === undefined
          ? ""
          : typeof blockDiagramDXYQGD6DParam51.labelText == "string"
            ? blockDiagramDXYQGD6DParam51.labelText
            : blockDiagramDXYQGD6DParam51.labelText[0];
      let blockDiagramDXYQGD6DValue224;
      blockDiagramDXYQGD6DValue224 =
        blockDiagramDXYQGD6DParam51.labelType === "markdown"
          ? chunkU2HBQHQKA(
              blockDiagramDXYQGD6DValue222,
              chunkICPOFSXXJ(
                chunk5PVQY5BWD(blockDiagramDXYQGD6DValue223),
                blockDiagramDXYQGD6DValue218,
              ),
              {
                useHtmlLabels: blockDiagramDXYQGD6DValue220,
                width:
                  blockDiagramDXYQGD6DParam51.width ||
                  blockDiagramDXYQGD6DValue218.flowchart.wrappingWidth,
                classes: "markdown-node-label",
              },
              blockDiagramDXYQGD6DValue218,
            )
          : await blockDiagramDXYQGD6DValue28(
              blockDiagramDXYQGD6DValue222,
              chunkICPOFSXXJ(
                chunk5PVQY5BWD(blockDiagramDXYQGD6DValue223),
                blockDiagramDXYQGD6DValue218,
              ),
              blockDiagramDXYQGD6DParam51.labelStyle,
              false,
              blockDiagramDXYQGD6DParam53,
            );
      let blockDiagramDXYQGD6DValue225 = blockDiagramDXYQGD6DValue224.getBBox(),
        blockDiagramDXYQGD6DValue226 = blockDiagramDXYQGD6DParam51.padding / 2;
      if (chunkICPOFSXXT(blockDiagramDXYQGD6DValue218)) {
        let blockDiagramDXYQGD6DValue495 =
            blockDiagramDXYQGD6DValue224.children[0],
          blockDiagramDXYQGD6DValue496 = Src(blockDiagramDXYQGD6DValue224);
        await chunkZZ45TVLET(
          blockDiagramDXYQGD6DValue495,
          blockDiagramDXYQGD6DValue223,
        );
        blockDiagramDXYQGD6DValue225 =
          blockDiagramDXYQGD6DValue495.getBoundingClientRect();
        blockDiagramDXYQGD6DValue496.attr(
          "width",
          blockDiagramDXYQGD6DValue225.width,
        );
        blockDiagramDXYQGD6DValue496.attr(
          "height",
          blockDiagramDXYQGD6DValue225.height,
        );
      }
      return (
        blockDiagramDXYQGD6DValue220
          ? blockDiagramDXYQGD6DValue222.attr(
              "transform",
              "translate(" +
                -blockDiagramDXYQGD6DValue225.width / 2 +
                ", " +
                -blockDiagramDXYQGD6DValue225.height / 2 +
                ")",
            )
          : blockDiagramDXYQGD6DValue222.attr(
              "transform",
              "translate(0, " + -blockDiagramDXYQGD6DValue225.height / 2 + ")",
            ),
        blockDiagramDXYQGD6DParam51.centerLabel &&
          blockDiagramDXYQGD6DValue222.attr(
            "transform",
            "translate(" +
              -blockDiagramDXYQGD6DValue225.width / 2 +
              ", " +
              -blockDiagramDXYQGD6DValue225.height / 2 +
              ")",
          ),
        blockDiagramDXYQGD6DValue222.insert("rect", ":first-child"),
        {
          shapeSvg: blockDiagramDXYQGD6DValue221,
          bbox: blockDiagramDXYQGD6DValue225,
          halfPadding: blockDiagramDXYQGD6DValue226,
          label: blockDiagramDXYQGD6DValue222,
        }
      );
    },
    "labelHelper",
  ),
  blockDiagramDXYQGD6DValue49 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam222, blockDiagramDXYQGD6DParam223) => {
      let blockDiagramDXYQGD6DValue541 = blockDiagramDXYQGD6DParam223
        .node()
        .getBBox();
      blockDiagramDXYQGD6DParam222.width = blockDiagramDXYQGD6DValue541.width;
      blockDiagramDXYQGD6DParam222.height = blockDiagramDXYQGD6DValue541.height;
    },
    "updateNodeBounds",
  );
function blockDiagramDXYQGD6DHelper16(
  blockDiagramDXYQGD6DParam168,
  blockDiagramDXYQGD6DParam169,
  blockDiagramDXYQGD6DParam170,
  blockDiagramDXYQGD6DParam171,
) {
  return blockDiagramDXYQGD6DParam168
    .insert("polygon", ":first-child")
    .attr(
      "points",
      blockDiagramDXYQGD6DParam171
        .map(function (item) {
          return item.x + "," + item.y;
        })
        .join(" "),
    )
    .attr("class", "label-container")
    .attr(
      "transform",
      "translate(" +
        -blockDiagramDXYQGD6DParam169 / 2 +
        "," +
        blockDiagramDXYQGD6DParam170 / 2 +
        ")",
    );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper16, "insertPolygonShape");
var blockDiagramDXYQGD6DValue50 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam108, blockDiagramDXYQGD6DParam109) => {
      blockDiagramDXYQGD6DParam109.useHtmlLabels ||
        chunkICPOFSXXT(_chunkICPOFSXXP()) ||
        (blockDiagramDXYQGD6DParam109.centerLabel = true);
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DValue48(
        blockDiagramDXYQGD6DParam108,
        blockDiagramDXYQGD6DParam109,
        "node " + blockDiagramDXYQGD6DParam109.classes,
        true,
      );
      chunkAGHRB4JFR.info("Classes = ", blockDiagramDXYQGD6DParam109.classes);
      let blockDiagramDXYQGD6DValue317 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      return (
        blockDiagramDXYQGD6DValue317
          .attr("rx", blockDiagramDXYQGD6DParam109.rx)
          .attr("ry", blockDiagramDXYQGD6DParam109.ry)
          .attr("x", -bbox.width / 2 - halfPadding)
          .attr("y", -bbox.height / 2 - halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DParam109.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DParam109.padding),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam109,
          blockDiagramDXYQGD6DValue317,
        ),
        (blockDiagramDXYQGD6DParam109.intersect = function (
          blockDiagramDXYQGD6DParam260,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam109,
            blockDiagramDXYQGD6DParam260,
          );
        }),
        shapeSvg
      );
    },
    "note",
  ),
  blockDiagramDXYQGD6DValue51 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam280) =>
      blockDiagramDXYQGD6DParam280 ? " " + blockDiagramDXYQGD6DParam280 : "",
    "formatClass",
  ),
  blockDiagramDXYQGD6DValue52 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam235, blockDiagramDXYQGD6DParam236) =>
      `${blockDiagramDXYQGD6DParam236 || "node default"}${blockDiagramDXYQGD6DValue51(blockDiagramDXYQGD6DParam235.classes)} ${blockDiagramDXYQGD6DValue51(blockDiagramDXYQGD6DParam235.class)}`,
    "getClassesFromNode",
  ),
  blockDiagramDXYQGD6DValue53 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam127, blockDiagramDXYQGD6DParam128) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam127,
          blockDiagramDXYQGD6DParam128,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam128, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue362 =
          bbox.width +
          blockDiagramDXYQGD6DParam128.padding +
          (bbox.height + blockDiagramDXYQGD6DParam128.padding),
        blockDiagramDXYQGD6DValue363 = [
          {
            x: blockDiagramDXYQGD6DValue362 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue362,
            y: -blockDiagramDXYQGD6DValue362 / 2,
          },
          {
            x: blockDiagramDXYQGD6DValue362 / 2,
            y: -blockDiagramDXYQGD6DValue362,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DValue362 / 2,
          },
        ];
      chunkAGHRB4JFR.info("Question main (Circle)");
      let blockDiagramDXYQGD6DValue364 = blockDiagramDXYQGD6DHelper16(
        shapeSvg,
        blockDiagramDXYQGD6DValue362,
        blockDiagramDXYQGD6DValue362,
        blockDiagramDXYQGD6DValue363,
      );
      return (
        blockDiagramDXYQGD6DValue364.attr(
          "style",
          blockDiagramDXYQGD6DParam128.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam128,
          blockDiagramDXYQGD6DValue364,
        ),
        (blockDiagramDXYQGD6DParam128.intersect = function (
          blockDiagramDXYQGD6DParam227,
        ) {
          return (
            chunkAGHRB4JFR.warn("Intersect called"),
            blockDiagramDXYQGD6DValue47.polygon(
              blockDiagramDXYQGD6DParam128,
              blockDiagramDXYQGD6DValue363,
              blockDiagramDXYQGD6DParam227,
            )
          );
        }),
        shapeSvg
      );
    },
    "question",
  ),
  blockDiagramDXYQGD6DValue54 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam98, blockDiagramDXYQGD6DParam99) => {
      let blockDiagramDXYQGD6DValue294 = blockDiagramDXYQGD6DParam98
        .insert("g")
        .attr("class", "node default")
        .attr(
          "id",
          blockDiagramDXYQGD6DParam99.domId || blockDiagramDXYQGD6DParam99.id,
        );
      return (
        blockDiagramDXYQGD6DValue294
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
        (blockDiagramDXYQGD6DParam99.width = 28),
        (blockDiagramDXYQGD6DParam99.height = 28),
        (blockDiagramDXYQGD6DParam99.intersect = function (
          blockDiagramDXYQGD6DParam240,
        ) {
          return blockDiagramDXYQGD6DValue47.circle(
            blockDiagramDXYQGD6DParam99,
            14,
            blockDiagramDXYQGD6DParam240,
          );
        }),
        blockDiagramDXYQGD6DValue294
      );
    },
    "choice",
  ),
  blockDiagramDXYQGD6DValue55 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam125, blockDiagramDXYQGD6DParam126) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam125,
          blockDiagramDXYQGD6DParam126,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam126, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue353 =
          bbox.height + blockDiagramDXYQGD6DParam126.padding,
        blockDiagramDXYQGD6DValue354 = blockDiagramDXYQGD6DValue353 / 4,
        blockDiagramDXYQGD6DValue355 =
          bbox.width +
          2 * blockDiagramDXYQGD6DValue354 +
          blockDiagramDXYQGD6DParam126.padding,
        blockDiagramDXYQGD6DValue356 = [
          {
            x: blockDiagramDXYQGD6DValue354,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue355 - blockDiagramDXYQGD6DValue354,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue355,
            y: -blockDiagramDXYQGD6DValue353 / 2,
          },
          {
            x: blockDiagramDXYQGD6DValue355 - blockDiagramDXYQGD6DValue354,
            y: -blockDiagramDXYQGD6DValue353,
          },
          {
            x: blockDiagramDXYQGD6DValue354,
            y: -blockDiagramDXYQGD6DValue353,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DValue353 / 2,
          },
        ],
        blockDiagramDXYQGD6DValue357 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue355,
          blockDiagramDXYQGD6DValue353,
          blockDiagramDXYQGD6DValue356,
        );
      return (
        blockDiagramDXYQGD6DValue357.attr(
          "style",
          blockDiagramDXYQGD6DParam126.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam126,
          blockDiagramDXYQGD6DValue357,
        ),
        (blockDiagramDXYQGD6DParam126.intersect = function (
          blockDiagramDXYQGD6DParam241,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam126,
            blockDiagramDXYQGD6DValue356,
            blockDiagramDXYQGD6DParam241,
          );
        }),
        shapeSvg
      );
    },
    "hexagon",
  ),
  blockDiagramDXYQGD6DValue56 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam154, blockDiagramDXYQGD6DParam155) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam154,
          blockDiagramDXYQGD6DParam155,
          undefined,
          true,
        ),
        blockDiagramDXYQGD6DValue421 =
          bbox.height + 2 * blockDiagramDXYQGD6DParam155.padding,
        blockDiagramDXYQGD6DValue422 = blockDiagramDXYQGD6DValue421 / 2,
        blockDiagramDXYQGD6DValue423 =
          bbox.width +
          2 * blockDiagramDXYQGD6DValue422 +
          blockDiagramDXYQGD6DParam155.padding,
        blockDiagramDXYQGD6DValue424 = blockDiagramDXYQGD6DValue41(
          blockDiagramDXYQGD6DParam155.directions,
          bbox,
          blockDiagramDXYQGD6DParam155,
        ),
        blockDiagramDXYQGD6DValue425 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue423,
          blockDiagramDXYQGD6DValue421,
          blockDiagramDXYQGD6DValue424,
        );
      return (
        blockDiagramDXYQGD6DValue425.attr(
          "style",
          blockDiagramDXYQGD6DParam155.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam155,
          blockDiagramDXYQGD6DValue425,
        ),
        (blockDiagramDXYQGD6DParam155.intersect = function (
          blockDiagramDXYQGD6DParam242,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam155,
            blockDiagramDXYQGD6DValue424,
            blockDiagramDXYQGD6DParam242,
          );
        }),
        shapeSvg
      );
    },
    "block_arrow",
  ),
  blockDiagramDXYQGD6DValue57 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam130, blockDiagramDXYQGD6DParam131) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam130,
          blockDiagramDXYQGD6DParam131,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam131, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue367 =
          bbox.width + blockDiagramDXYQGD6DParam131.padding,
        blockDiagramDXYQGD6DValue368 =
          bbox.height + blockDiagramDXYQGD6DParam131.padding,
        blockDiagramDXYQGD6DValue369 = [
          {
            x: -blockDiagramDXYQGD6DValue368 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue367,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue367,
            y: -blockDiagramDXYQGD6DValue368,
          },
          {
            x: -blockDiagramDXYQGD6DValue368 / 2,
            y: -blockDiagramDXYQGD6DValue368,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DValue368 / 2,
          },
        ];
      return (
        blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue367,
          blockDiagramDXYQGD6DValue368,
          blockDiagramDXYQGD6DValue369,
        ).attr("style", blockDiagramDXYQGD6DParam131.style),
        (blockDiagramDXYQGD6DParam131.width =
          blockDiagramDXYQGD6DValue367 + blockDiagramDXYQGD6DValue368),
        (blockDiagramDXYQGD6DParam131.height = blockDiagramDXYQGD6DValue368),
        (blockDiagramDXYQGD6DParam131.intersect = function (
          blockDiagramDXYQGD6DParam243,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam131,
            blockDiagramDXYQGD6DValue369,
            blockDiagramDXYQGD6DParam243,
          );
        }),
        shapeSvg
      );
    },
    "rect_left_inv_arrow",
  ),
  blockDiagramDXYQGD6DValue58 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam141, blockDiagramDXYQGD6DParam142) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam141,
          blockDiagramDXYQGD6DParam142,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam142),
          true,
        ),
        blockDiagramDXYQGD6DValue388 =
          bbox.width + blockDiagramDXYQGD6DParam142.padding,
        blockDiagramDXYQGD6DValue389 =
          bbox.height + blockDiagramDXYQGD6DParam142.padding,
        blockDiagramDXYQGD6DValue390 = [
          {
            x: (-2 * blockDiagramDXYQGD6DValue389) / 6,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue388 - blockDiagramDXYQGD6DValue389 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DValue388 +
              (2 * blockDiagramDXYQGD6DValue389) / 6,
            y: -blockDiagramDXYQGD6DValue389,
          },
          {
            x: blockDiagramDXYQGD6DValue389 / 6,
            y: -blockDiagramDXYQGD6DValue389,
          },
        ],
        blockDiagramDXYQGD6DValue391 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue388,
          blockDiagramDXYQGD6DValue389,
          blockDiagramDXYQGD6DValue390,
        );
      return (
        blockDiagramDXYQGD6DValue391.attr(
          "style",
          blockDiagramDXYQGD6DParam142.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam142,
          blockDiagramDXYQGD6DValue391,
        ),
        (blockDiagramDXYQGD6DParam142.intersect = function (
          blockDiagramDXYQGD6DParam244,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam142,
            blockDiagramDXYQGD6DValue390,
            blockDiagramDXYQGD6DParam244,
          );
        }),
        shapeSvg
      );
    },
    "lean_right",
  ),
  blockDiagramDXYQGD6DValue59 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam135, blockDiagramDXYQGD6DParam136) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam135,
          blockDiagramDXYQGD6DParam136,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam136, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue376 =
          bbox.width + blockDiagramDXYQGD6DParam136.padding,
        blockDiagramDXYQGD6DValue377 =
          bbox.height + blockDiagramDXYQGD6DParam136.padding,
        blockDiagramDXYQGD6DValue378 = [
          {
            x: (2 * blockDiagramDXYQGD6DValue377) / 6,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue376 + blockDiagramDXYQGD6DValue377 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DValue376 -
              (2 * blockDiagramDXYQGD6DValue377) / 6,
            y: -blockDiagramDXYQGD6DValue377,
          },
          {
            x: -blockDiagramDXYQGD6DValue377 / 6,
            y: -blockDiagramDXYQGD6DValue377,
          },
        ],
        blockDiagramDXYQGD6DValue379 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue376,
          blockDiagramDXYQGD6DValue377,
          blockDiagramDXYQGD6DValue378,
        );
      return (
        blockDiagramDXYQGD6DValue379.attr(
          "style",
          blockDiagramDXYQGD6DParam136.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam136,
          blockDiagramDXYQGD6DValue379,
        ),
        (blockDiagramDXYQGD6DParam136.intersect = function (
          blockDiagramDXYQGD6DParam245,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam136,
            blockDiagramDXYQGD6DValue378,
            blockDiagramDXYQGD6DParam245,
          );
        }),
        shapeSvg
      );
    },
    "lean_left",
  ),
  blockDiagramDXYQGD6DValue60 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam137, blockDiagramDXYQGD6DParam138) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam137,
          blockDiagramDXYQGD6DParam138,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam138, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue380 =
          bbox.width + blockDiagramDXYQGD6DParam138.padding,
        blockDiagramDXYQGD6DValue381 =
          bbox.height + blockDiagramDXYQGD6DParam138.padding,
        blockDiagramDXYQGD6DValue382 = [
          {
            x: (-2 * blockDiagramDXYQGD6DValue381) / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DValue380 +
              (2 * blockDiagramDXYQGD6DValue381) / 6,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue380 - blockDiagramDXYQGD6DValue381 / 6,
            y: -blockDiagramDXYQGD6DValue381,
          },
          {
            x: blockDiagramDXYQGD6DValue381 / 6,
            y: -blockDiagramDXYQGD6DValue381,
          },
        ],
        blockDiagramDXYQGD6DValue383 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue380,
          blockDiagramDXYQGD6DValue381,
          blockDiagramDXYQGD6DValue382,
        );
      return (
        blockDiagramDXYQGD6DValue383.attr(
          "style",
          blockDiagramDXYQGD6DParam138.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam138,
          blockDiagramDXYQGD6DValue383,
        ),
        (blockDiagramDXYQGD6DParam138.intersect = function (
          blockDiagramDXYQGD6DParam246,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam138,
            blockDiagramDXYQGD6DValue382,
            blockDiagramDXYQGD6DParam246,
          );
        }),
        shapeSvg
      );
    },
    "trapezoid",
  ),
  $e = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam139, blockDiagramDXYQGD6DParam140) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam139,
          blockDiagramDXYQGD6DParam140,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam140, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue384 =
          bbox.width + blockDiagramDXYQGD6DParam140.padding,
        blockDiagramDXYQGD6DValue385 =
          bbox.height + blockDiagramDXYQGD6DParam140.padding,
        blockDiagramDXYQGD6DValue386 = [
          {
            x: blockDiagramDXYQGD6DValue385 / 6,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue384 - blockDiagramDXYQGD6DValue385 / 6,
            y: 0,
          },
          {
            x:
              blockDiagramDXYQGD6DValue384 +
              (2 * blockDiagramDXYQGD6DValue385) / 6,
            y: -blockDiagramDXYQGD6DValue385,
          },
          {
            x: (-2 * blockDiagramDXYQGD6DValue385) / 6,
            y: -blockDiagramDXYQGD6DValue385,
          },
        ],
        blockDiagramDXYQGD6DValue387 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue384,
          blockDiagramDXYQGD6DValue385,
          blockDiagramDXYQGD6DValue386,
        );
      return (
        blockDiagramDXYQGD6DValue387.attr(
          "style",
          blockDiagramDXYQGD6DParam140.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam140,
          blockDiagramDXYQGD6DValue387,
        ),
        (blockDiagramDXYQGD6DParam140.intersect = function (
          blockDiagramDXYQGD6DParam247,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam140,
            blockDiagramDXYQGD6DValue386,
            blockDiagramDXYQGD6DParam247,
          );
        }),
        shapeSvg
      );
    },
    "inv_trapezoid",
  ),
  blockDiagramDXYQGD6DValue61 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam133, blockDiagramDXYQGD6DParam134) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam133,
          blockDiagramDXYQGD6DParam134,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam134, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue372 =
          bbox.width + blockDiagramDXYQGD6DParam134.padding,
        blockDiagramDXYQGD6DValue373 =
          bbox.height + blockDiagramDXYQGD6DParam134.padding,
        blockDiagramDXYQGD6DValue374 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue372 + blockDiagramDXYQGD6DValue373 / 2,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue372,
            y: -blockDiagramDXYQGD6DValue373 / 2,
          },
          {
            x: blockDiagramDXYQGD6DValue372 + blockDiagramDXYQGD6DValue373 / 2,
            y: -blockDiagramDXYQGD6DValue373,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DValue373,
          },
        ],
        blockDiagramDXYQGD6DValue375 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue372,
          blockDiagramDXYQGD6DValue373,
          blockDiagramDXYQGD6DValue374,
        );
      return (
        blockDiagramDXYQGD6DValue375.attr(
          "style",
          blockDiagramDXYQGD6DParam134.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam134,
          blockDiagramDXYQGD6DValue375,
        ),
        (blockDiagramDXYQGD6DParam134.intersect = function (
          blockDiagramDXYQGD6DParam248,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam134,
            blockDiagramDXYQGD6DValue374,
            blockDiagramDXYQGD6DParam248,
          );
        }),
        shapeSvg
      );
    },
    "rect_right_inv_arrow",
  ),
  blockDiagramDXYQGD6DValue62 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam54, blockDiagramDXYQGD6DParam55) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam54,
          blockDiagramDXYQGD6DParam55,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam55, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue231 =
          bbox.width + blockDiagramDXYQGD6DParam55.padding,
        blockDiagramDXYQGD6DValue232 = blockDiagramDXYQGD6DValue231 / 2,
        blockDiagramDXYQGD6DValue233 =
          blockDiagramDXYQGD6DValue232 /
          (2.5 + blockDiagramDXYQGD6DValue231 / 50),
        blockDiagramDXYQGD6DValue234 =
          bbox.height +
          blockDiagramDXYQGD6DValue233 +
          blockDiagramDXYQGD6DParam55.padding,
        blockDiagramDXYQGD6DValue235 =
          "M 0," +
          blockDiagramDXYQGD6DValue233 +
          " a " +
          blockDiagramDXYQGD6DValue232 +
          "," +
          blockDiagramDXYQGD6DValue233 +
          " 0,0,0 " +
          blockDiagramDXYQGD6DValue231 +
          " 0 a " +
          blockDiagramDXYQGD6DValue232 +
          "," +
          blockDiagramDXYQGD6DValue233 +
          " 0,0,0 " +
          -blockDiagramDXYQGD6DValue231 +
          " 0 l 0," +
          blockDiagramDXYQGD6DValue234 +
          " a " +
          blockDiagramDXYQGD6DValue232 +
          "," +
          blockDiagramDXYQGD6DValue233 +
          " 0,0,0 " +
          blockDiagramDXYQGD6DValue231 +
          " 0 l 0," +
          -blockDiagramDXYQGD6DValue234;
      return (
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam55,
          shapeSvg
            .attr("label-offset-y", blockDiagramDXYQGD6DValue233)
            .insert("path", ":first-child")
            .attr("style", blockDiagramDXYQGD6DParam55.style)
            .attr("d", blockDiagramDXYQGD6DValue235)
            .attr(
              "transform",
              "translate(" +
                -blockDiagramDXYQGD6DValue231 / 2 +
                "," +
                -(
                  blockDiagramDXYQGD6DValue234 / 2 +
                  blockDiagramDXYQGD6DValue233
                ) +
                ")",
            ),
        ),
        (blockDiagramDXYQGD6DParam55.intersect = function (
          blockDiagramDXYQGD6DParam145,
        ) {
          let blockDiagramDXYQGD6DValue397 = blockDiagramDXYQGD6DValue47.rect(
              blockDiagramDXYQGD6DParam55,
              blockDiagramDXYQGD6DParam145,
            ),
            blockDiagramDXYQGD6DValue398 =
              blockDiagramDXYQGD6DValue397.x - blockDiagramDXYQGD6DParam55.x;
          if (
            blockDiagramDXYQGD6DValue232 != 0 &&
            (Math.abs(blockDiagramDXYQGD6DValue398) <
              blockDiagramDXYQGD6DParam55.width / 2 ||
              (Math.abs(blockDiagramDXYQGD6DValue398) ==
                blockDiagramDXYQGD6DParam55.width / 2 &&
                Math.abs(
                  blockDiagramDXYQGD6DValue397.y -
                    blockDiagramDXYQGD6DParam55.y,
                ) >
                  blockDiagramDXYQGD6DParam55.height / 2 -
                    blockDiagramDXYQGD6DValue233))
          ) {
            let blockDiagramDXYQGD6DValue492 =
              blockDiagramDXYQGD6DValue233 *
              blockDiagramDXYQGD6DValue233 *
              (1 -
                (blockDiagramDXYQGD6DValue398 * blockDiagramDXYQGD6DValue398) /
                  (blockDiagramDXYQGD6DValue232 *
                    blockDiagramDXYQGD6DValue232));
            blockDiagramDXYQGD6DValue492 != 0 &&
              (blockDiagramDXYQGD6DValue492 = Math.sqrt(
                blockDiagramDXYQGD6DValue492,
              ));
            blockDiagramDXYQGD6DValue492 =
              blockDiagramDXYQGD6DValue233 - blockDiagramDXYQGD6DValue492;
            blockDiagramDXYQGD6DParam145.y - blockDiagramDXYQGD6DParam55.y >
              0 &&
              (blockDiagramDXYQGD6DValue492 = -blockDiagramDXYQGD6DValue492);
            blockDiagramDXYQGD6DValue397.y += blockDiagramDXYQGD6DValue492;
          }
          return blockDiagramDXYQGD6DValue397;
        }),
        shapeSvg
      );
    },
    "cylinder",
  ),
  blockDiagramDXYQGD6DValue63 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam71, blockDiagramDXYQGD6DParam72) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam71,
          blockDiagramDXYQGD6DParam72,
          "node " +
            blockDiagramDXYQGD6DParam72.classes +
            " " +
            blockDiagramDXYQGD6DParam72.class,
          true,
        ),
        blockDiagramDXYQGD6DValue266 = shapeSvg.insert("rect", ":first-child"),
        blockDiagramDXYQGD6DValue267 = blockDiagramDXYQGD6DParam72.positioned
          ? blockDiagramDXYQGD6DParam72.width
          : bbox.width + blockDiagramDXYQGD6DParam72.padding,
        blockDiagramDXYQGD6DValue268 = blockDiagramDXYQGD6DParam72.positioned
          ? blockDiagramDXYQGD6DParam72.height
          : bbox.height + blockDiagramDXYQGD6DParam72.padding,
        blockDiagramDXYQGD6DValue269 = blockDiagramDXYQGD6DParam72.positioned
          ? -blockDiagramDXYQGD6DValue267 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramDXYQGD6DValue270 = blockDiagramDXYQGD6DParam72.positioned
          ? -blockDiagramDXYQGD6DValue268 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramDXYQGD6DValue266
          .attr("class", "basic label-container")
          .attr("style", blockDiagramDXYQGD6DParam72.style)
          .attr("rx", blockDiagramDXYQGD6DParam72.rx)
          .attr("ry", blockDiagramDXYQGD6DParam72.ry)
          .attr("x", blockDiagramDXYQGD6DValue269)
          .attr("y", blockDiagramDXYQGD6DValue270)
          .attr("width", blockDiagramDXYQGD6DValue267)
          .attr("height", blockDiagramDXYQGD6DValue268),
        blockDiagramDXYQGD6DParam72.props)
      ) {
        let blockDiagramDXYQGD6DValue484 = new Set(
          Object.keys(blockDiagramDXYQGD6DParam72.props),
        );
        blockDiagramDXYQGD6DParam72.props.borders &&
          (blockDiagramDXYQGD6DHelper17(
            blockDiagramDXYQGD6DValue266,
            blockDiagramDXYQGD6DParam72.props.borders,
            blockDiagramDXYQGD6DValue267,
            blockDiagramDXYQGD6DValue268,
          ),
          blockDiagramDXYQGD6DValue484.delete("borders"));
        blockDiagramDXYQGD6DValue484.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam72,
          blockDiagramDXYQGD6DValue266,
        ),
        (blockDiagramDXYQGD6DParam72.intersect = function (
          blockDiagramDXYQGD6DParam261,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam72,
            blockDiagramDXYQGD6DParam261,
          );
        }),
        shapeSvg
      );
    },
    "rect",
  ),
  blockDiagramDXYQGD6DValue64 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam69, blockDiagramDXYQGD6DParam70) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam69,
          blockDiagramDXYQGD6DParam70,
          "node " + blockDiagramDXYQGD6DParam70.classes,
          true,
        ),
        blockDiagramDXYQGD6DValue261 = shapeSvg.insert("rect", ":first-child"),
        blockDiagramDXYQGD6DValue262 = blockDiagramDXYQGD6DParam70.positioned
          ? blockDiagramDXYQGD6DParam70.width
          : bbox.width + blockDiagramDXYQGD6DParam70.padding,
        blockDiagramDXYQGD6DValue263 = blockDiagramDXYQGD6DParam70.positioned
          ? blockDiagramDXYQGD6DParam70.height
          : bbox.height + blockDiagramDXYQGD6DParam70.padding,
        blockDiagramDXYQGD6DValue264 = blockDiagramDXYQGD6DParam70.positioned
          ? -blockDiagramDXYQGD6DValue262 / 2
          : -bbox.width / 2 - halfPadding,
        blockDiagramDXYQGD6DValue265 = blockDiagramDXYQGD6DParam70.positioned
          ? -blockDiagramDXYQGD6DValue263 / 2
          : -bbox.height / 2 - halfPadding;
      if (
        (blockDiagramDXYQGD6DValue261
          .attr("class", "basic cluster composite label-container")
          .attr("style", blockDiagramDXYQGD6DParam70.style)
          .attr("rx", blockDiagramDXYQGD6DParam70.rx)
          .attr("ry", blockDiagramDXYQGD6DParam70.ry)
          .attr("x", blockDiagramDXYQGD6DValue264)
          .attr("y", blockDiagramDXYQGD6DValue265)
          .attr("width", blockDiagramDXYQGD6DValue262)
          .attr("height", blockDiagramDXYQGD6DValue263),
        blockDiagramDXYQGD6DParam70.props)
      ) {
        let blockDiagramDXYQGD6DValue485 = new Set(
          Object.keys(blockDiagramDXYQGD6DParam70.props),
        );
        blockDiagramDXYQGD6DParam70.props.borders &&
          (blockDiagramDXYQGD6DHelper17(
            blockDiagramDXYQGD6DValue261,
            blockDiagramDXYQGD6DParam70.props.borders,
            blockDiagramDXYQGD6DValue262,
            blockDiagramDXYQGD6DValue263,
          ),
          blockDiagramDXYQGD6DValue485.delete("borders"));
        blockDiagramDXYQGD6DValue485.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam70,
          blockDiagramDXYQGD6DValue261,
        ),
        (blockDiagramDXYQGD6DParam70.intersect = function (
          blockDiagramDXYQGD6DParam262,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam70,
            blockDiagramDXYQGD6DParam262,
          );
        }),
        shapeSvg
      );
    },
    "composite",
  ),
  blockDiagramDXYQGD6DValue65 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam113, blockDiagramDXYQGD6DParam114) => {
      let { shapeSvg } = await blockDiagramDXYQGD6DValue48(
        blockDiagramDXYQGD6DParam113,
        blockDiagramDXYQGD6DParam114,
        "label",
        true,
      );
      chunkAGHRB4JFR.trace("Classes = ", blockDiagramDXYQGD6DParam114.class);
      let blockDiagramDXYQGD6DValue322 = shapeSvg.insert(
        "rect",
        ":first-child",
      );
      if (
        (blockDiagramDXYQGD6DValue322.attr("width", 0).attr("height", 0),
        shapeSvg.attr("class", "label edgeLabel"),
        blockDiagramDXYQGD6DParam114.props)
      ) {
        let blockDiagramDXYQGD6DValue486 = new Set(
          Object.keys(blockDiagramDXYQGD6DParam114.props),
        );
        blockDiagramDXYQGD6DParam114.props.borders &&
          (blockDiagramDXYQGD6DHelper17(
            blockDiagramDXYQGD6DValue322,
            blockDiagramDXYQGD6DParam114.props.borders,
            0,
            0,
          ),
          blockDiagramDXYQGD6DValue486.delete("borders"));
        blockDiagramDXYQGD6DValue486.forEach((item) => {
          chunkAGHRB4JFR.warn(`Unknown node property ${item}`);
        });
      }
      return (
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam114,
          blockDiagramDXYQGD6DValue322,
        ),
        (blockDiagramDXYQGD6DParam114.intersect = function (
          blockDiagramDXYQGD6DParam263,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam114,
            blockDiagramDXYQGD6DParam263,
          );
        }),
        shapeSvg
      );
    },
    "labelRect",
  );
function blockDiagramDXYQGD6DHelper17(
  blockDiagramDXYQGD6DParam146,
  blockDiagramDXYQGD6DParam147,
  blockDiagramDXYQGD6DParam148,
  blockDiagramDXYQGD6DParam149,
) {
  let blockDiagramDXYQGD6DValue399 = [],
    blockDiagramDXYQGD6DValue400 = chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DParam276) => {
        blockDiagramDXYQGD6DValue399.push(blockDiagramDXYQGD6DParam276, 0);
      },
      "addBorder",
    ),
    blockDiagramDXYQGD6DValue401 = chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DParam277) => {
        blockDiagramDXYQGD6DValue399.push(0, blockDiagramDXYQGD6DParam277);
      },
      "skipBorder",
    );
  blockDiagramDXYQGD6DParam147.includes("t")
    ? (chunkAGHRB4JFR.debug("add top border"),
      blockDiagramDXYQGD6DValue400(blockDiagramDXYQGD6DParam148))
    : blockDiagramDXYQGD6DValue401(blockDiagramDXYQGD6DParam148);
  blockDiagramDXYQGD6DParam147.includes("r")
    ? (chunkAGHRB4JFR.debug("add right border"),
      blockDiagramDXYQGD6DValue400(blockDiagramDXYQGD6DParam149))
    : blockDiagramDXYQGD6DValue401(blockDiagramDXYQGD6DParam149);
  blockDiagramDXYQGD6DParam147.includes("b")
    ? (chunkAGHRB4JFR.debug("add bottom border"),
      blockDiagramDXYQGD6DValue400(blockDiagramDXYQGD6DParam148))
    : blockDiagramDXYQGD6DValue401(blockDiagramDXYQGD6DParam148);
  blockDiagramDXYQGD6DParam147.includes("l")
    ? (chunkAGHRB4JFR.debug("add left border"),
      blockDiagramDXYQGD6DValue400(blockDiagramDXYQGD6DParam149))
    : blockDiagramDXYQGD6DValue401(blockDiagramDXYQGD6DParam149);
  blockDiagramDXYQGD6DParam146.attr(
    "stroke-dasharray",
    blockDiagramDXYQGD6DValue399.join(" "),
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper17, "applyNodePropertyBorders");
var at = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam29, blockDiagramDXYQGD6DParam30) => {
      let blockDiagramDXYQGD6DValue179;
      blockDiagramDXYQGD6DValue179 = blockDiagramDXYQGD6DParam30.classes
        ? "node " + blockDiagramDXYQGD6DParam30.classes
        : "node default";
      let blockDiagramDXYQGD6DValue180 = blockDiagramDXYQGD6DParam29
          .insert("g")
          .attr("class", blockDiagramDXYQGD6DValue179)
          .attr(
            "id",
            blockDiagramDXYQGD6DParam30.domId || blockDiagramDXYQGD6DParam30.id,
          ),
        blockDiagramDXYQGD6DValue181 = blockDiagramDXYQGD6DValue180.insert(
          "rect",
          ":first-child",
        ),
        blockDiagramDXYQGD6DValue182 =
          blockDiagramDXYQGD6DValue180.insert("line"),
        blockDiagramDXYQGD6DValue183 = blockDiagramDXYQGD6DValue180
          .insert("g")
          .attr("class", "label"),
        blockDiagramDXYQGD6DValue184 = blockDiagramDXYQGD6DParam30.labelText
          .flat
          ? blockDiagramDXYQGD6DParam30.labelText.flat()
          : blockDiagramDXYQGD6DParam30.labelText,
        blockDiagramDXYQGD6DValue185 = "";
      blockDiagramDXYQGD6DValue185 =
        typeof blockDiagramDXYQGD6DValue184 == "object"
          ? blockDiagramDXYQGD6DValue184[0]
          : blockDiagramDXYQGD6DValue184;
      chunkAGHRB4JFR.info(
        "Label text abc79",
        blockDiagramDXYQGD6DValue185,
        blockDiagramDXYQGD6DValue184,
        typeof blockDiagramDXYQGD6DValue184 == "object",
      );
      let blockDiagramDXYQGD6DValue186 = await blockDiagramDXYQGD6DValue28(
          blockDiagramDXYQGD6DValue183,
          blockDiagramDXYQGD6DValue185,
          blockDiagramDXYQGD6DParam30.labelStyle,
          true,
          true,
        ),
        blockDiagramDXYQGD6DValue187 = {
          width: 0,
          height: 0,
        };
      if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
        let blockDiagramDXYQGD6DValue526 =
            blockDiagramDXYQGD6DValue186.children[0],
          blockDiagramDXYQGD6DValue527 = Src(blockDiagramDXYQGD6DValue186);
        blockDiagramDXYQGD6DValue187 =
          blockDiagramDXYQGD6DValue526.getBoundingClientRect();
        blockDiagramDXYQGD6DValue527.attr(
          "width",
          blockDiagramDXYQGD6DValue187.width,
        );
        blockDiagramDXYQGD6DValue527.attr(
          "height",
          blockDiagramDXYQGD6DValue187.height,
        );
      }
      chunkAGHRB4JFR.info("Text 2", blockDiagramDXYQGD6DValue184);
      let blockDiagramDXYQGD6DValue188 = blockDiagramDXYQGD6DValue184.slice(
          1,
          blockDiagramDXYQGD6DValue184.length,
        ),
        blockDiagramDXYQGD6DValue189 = blockDiagramDXYQGD6DValue186.getBBox(),
        blockDiagramDXYQGD6DValue190 = await blockDiagramDXYQGD6DValue28(
          blockDiagramDXYQGD6DValue183,
          blockDiagramDXYQGD6DValue188.join
            ? blockDiagramDXYQGD6DValue188.join("<br/>")
            : blockDiagramDXYQGD6DValue188,
          blockDiagramDXYQGD6DParam30.labelStyle,
          true,
          true,
        );
      if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
        let blockDiagramDXYQGD6DValue528 =
            blockDiagramDXYQGD6DValue190.children[0],
          blockDiagramDXYQGD6DValue529 = Src(blockDiagramDXYQGD6DValue190);
        blockDiagramDXYQGD6DValue187 =
          blockDiagramDXYQGD6DValue528.getBoundingClientRect();
        blockDiagramDXYQGD6DValue529.attr(
          "width",
          blockDiagramDXYQGD6DValue187.width,
        );
        blockDiagramDXYQGD6DValue529.attr(
          "height",
          blockDiagramDXYQGD6DValue187.height,
        );
      }
      let blockDiagramDXYQGD6DValue191 =
        blockDiagramDXYQGD6DParam30.padding / 2;
      return (
        Src(blockDiagramDXYQGD6DValue190).attr(
          "transform",
          "translate( " +
            (blockDiagramDXYQGD6DValue187.width >
            blockDiagramDXYQGD6DValue189.width
              ? 0
              : (blockDiagramDXYQGD6DValue189.width -
                  blockDiagramDXYQGD6DValue187.width) /
                2) +
            ", " +
            (blockDiagramDXYQGD6DValue189.height +
              blockDiagramDXYQGD6DValue191 +
              5) +
            ")",
        ),
        Src(blockDiagramDXYQGD6DValue186).attr(
          "transform",
          "translate( " +
            (blockDiagramDXYQGD6DValue187.width <
            blockDiagramDXYQGD6DValue189.width
              ? 0
              : -(
                  blockDiagramDXYQGD6DValue189.width -
                  blockDiagramDXYQGD6DValue187.width
                ) / 2) +
            ", 0)",
        ),
        (blockDiagramDXYQGD6DValue187 = blockDiagramDXYQGD6DValue183
          .node()
          .getBBox()),
        blockDiagramDXYQGD6DValue183.attr(
          "transform",
          "translate(" +
            -blockDiagramDXYQGD6DValue187.width / 2 +
            ", " +
            (-blockDiagramDXYQGD6DValue187.height / 2 -
              blockDiagramDXYQGD6DValue191 +
              3) +
            ")",
        ),
        blockDiagramDXYQGD6DValue181
          .attr("class", "outer title-state")
          .attr(
            "x",
            -blockDiagramDXYQGD6DValue187.width / 2 -
              blockDiagramDXYQGD6DValue191,
          )
          .attr(
            "y",
            -blockDiagramDXYQGD6DValue187.height / 2 -
              blockDiagramDXYQGD6DValue191,
          )
          .attr(
            "width",
            blockDiagramDXYQGD6DValue187.width +
              blockDiagramDXYQGD6DParam30.padding,
          )
          .attr(
            "height",
            blockDiagramDXYQGD6DValue187.height +
              blockDiagramDXYQGD6DParam30.padding,
          ),
        blockDiagramDXYQGD6DValue182
          .attr("class", "divider")
          .attr(
            "x1",
            -blockDiagramDXYQGD6DValue187.width / 2 -
              blockDiagramDXYQGD6DValue191,
          )
          .attr(
            "x2",
            blockDiagramDXYQGD6DValue187.width / 2 +
              blockDiagramDXYQGD6DValue191,
          )
          .attr(
            "y1",
            -blockDiagramDXYQGD6DValue187.height / 2 -
              blockDiagramDXYQGD6DValue191 +
              blockDiagramDXYQGD6DValue189.height +
              blockDiagramDXYQGD6DValue191,
          )
          .attr(
            "y2",
            -blockDiagramDXYQGD6DValue187.height / 2 -
              blockDiagramDXYQGD6DValue191 +
              blockDiagramDXYQGD6DValue189.height +
              blockDiagramDXYQGD6DValue191,
          ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam30,
          blockDiagramDXYQGD6DValue181,
        ),
        (blockDiagramDXYQGD6DParam30.intersect = function (
          blockDiagramDXYQGD6DParam264,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam30,
            blockDiagramDXYQGD6DParam264,
          );
        }),
        blockDiagramDXYQGD6DValue180
      );
    },
    "rectWithTitle",
  ),
  blockDiagramDXYQGD6DValue66 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam123, blockDiagramDXYQGD6DParam124) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam123,
          blockDiagramDXYQGD6DParam124,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam124, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue347 =
          bbox.height + blockDiagramDXYQGD6DParam124.padding,
        blockDiagramDXYQGD6DValue348 =
          bbox.width +
          blockDiagramDXYQGD6DValue347 / 4 +
          blockDiagramDXYQGD6DParam124.padding;
      return (
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam124,
          shapeSvg
            .insert("rect", ":first-child")
            .attr("style", blockDiagramDXYQGD6DParam124.style)
            .attr("rx", blockDiagramDXYQGD6DValue347 / 2)
            .attr("ry", blockDiagramDXYQGD6DValue347 / 2)
            .attr("x", -blockDiagramDXYQGD6DValue348 / 2)
            .attr("y", -blockDiagramDXYQGD6DValue347 / 2)
            .attr("width", blockDiagramDXYQGD6DValue348)
            .attr("height", blockDiagramDXYQGD6DValue347),
        ),
        (blockDiagramDXYQGD6DParam124.intersect = function (
          blockDiagramDXYQGD6DParam265,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam124,
            blockDiagramDXYQGD6DParam265,
          );
        }),
        shapeSvg
      );
    },
    "stadium",
  ),
  blockDiagramDXYQGD6DValue67 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam104, blockDiagramDXYQGD6DParam105) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam104,
          blockDiagramDXYQGD6DParam105,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam105, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue313 = shapeSvg.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramDXYQGD6DValue313
          .attr("style", blockDiagramDXYQGD6DParam105.style)
          .attr("rx", blockDiagramDXYQGD6DParam105.rx)
          .attr("ry", blockDiagramDXYQGD6DParam105.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DParam105.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DParam105.padding),
        chunkAGHRB4JFR.info("Circle main"),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam105,
          blockDiagramDXYQGD6DValue313,
        ),
        (blockDiagramDXYQGD6DParam105.intersect = function (
          blockDiagramDXYQGD6DParam208,
        ) {
          return (
            chunkAGHRB4JFR.info(
              "Circle intersect",
              blockDiagramDXYQGD6DParam105,
              bbox.width / 2 + halfPadding,
              blockDiagramDXYQGD6DParam208,
            ),
            blockDiagramDXYQGD6DValue47.circle(
              blockDiagramDXYQGD6DParam105,
              bbox.width / 2 + halfPadding,
              blockDiagramDXYQGD6DParam208,
            )
          );
        }),
        shapeSvg
      );
    },
    "circle",
  ),
  blockDiagramDXYQGD6DValue68 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam80, blockDiagramDXYQGD6DParam81) => {
      let { shapeSvg, bbox, halfPadding } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam80,
          blockDiagramDXYQGD6DParam81,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam81, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue280 = shapeSvg.insert("g", ":first-child"),
        blockDiagramDXYQGD6DValue281 =
          blockDiagramDXYQGD6DValue280.insert("circle"),
        blockDiagramDXYQGD6DValue282 =
          blockDiagramDXYQGD6DValue280.insert("circle");
      return (
        blockDiagramDXYQGD6DValue280.attr(
          "class",
          blockDiagramDXYQGD6DParam81.class,
        ),
        blockDiagramDXYQGD6DValue281
          .attr("style", blockDiagramDXYQGD6DParam81.style)
          .attr("rx", blockDiagramDXYQGD6DParam81.rx)
          .attr("ry", blockDiagramDXYQGD6DParam81.ry)
          .attr("r", bbox.width / 2 + halfPadding + 5)
          .attr("width", bbox.width + blockDiagramDXYQGD6DParam81.padding + 10)
          .attr(
            "height",
            bbox.height + blockDiagramDXYQGD6DParam81.padding + 10,
          ),
        blockDiagramDXYQGD6DValue282
          .attr("style", blockDiagramDXYQGD6DParam81.style)
          .attr("rx", blockDiagramDXYQGD6DParam81.rx)
          .attr("ry", blockDiagramDXYQGD6DParam81.ry)
          .attr("r", bbox.width / 2 + halfPadding)
          .attr("width", bbox.width + blockDiagramDXYQGD6DParam81.padding)
          .attr("height", bbox.height + blockDiagramDXYQGD6DParam81.padding),
        chunkAGHRB4JFR.info("DoubleCircle main"),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam81,
          blockDiagramDXYQGD6DValue281,
        ),
        (blockDiagramDXYQGD6DParam81.intersect = function (
          blockDiagramDXYQGD6DParam200,
        ) {
          return (
            chunkAGHRB4JFR.info(
              "DoubleCircle intersect",
              blockDiagramDXYQGD6DParam81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramDXYQGD6DParam200,
            ),
            blockDiagramDXYQGD6DValue47.circle(
              blockDiagramDXYQGD6DParam81,
              bbox.width / 2 + halfPadding + 5,
              blockDiagramDXYQGD6DParam200,
            )
          );
        }),
        shapeSvg
      );
    },
    "doublecircle",
  ),
  blockDiagramDXYQGD6DValue69 = chunkAGHRB4JFN(
    async (blockDiagramDXYQGD6DParam115, blockDiagramDXYQGD6DParam116) => {
      let { shapeSvg, bbox } = await blockDiagramDXYQGD6DValue48(
          blockDiagramDXYQGD6DParam115,
          blockDiagramDXYQGD6DParam116,
          blockDiagramDXYQGD6DValue52(blockDiagramDXYQGD6DParam116, undefined),
          true,
        ),
        blockDiagramDXYQGD6DValue323 =
          bbox.width + blockDiagramDXYQGD6DParam116.padding,
        blockDiagramDXYQGD6DValue324 =
          bbox.height + blockDiagramDXYQGD6DParam116.padding,
        blockDiagramDXYQGD6DValue325 = [
          {
            x: 0,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue323,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue323,
            y: -blockDiagramDXYQGD6DValue324,
          },
          {
            x: 0,
            y: -blockDiagramDXYQGD6DValue324,
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
            x: blockDiagramDXYQGD6DValue323 + 8,
            y: 0,
          },
          {
            x: blockDiagramDXYQGD6DValue323 + 8,
            y: -blockDiagramDXYQGD6DValue324,
          },
          {
            x: -8,
            y: -blockDiagramDXYQGD6DValue324,
          },
          {
            x: -8,
            y: 0,
          },
        ],
        blockDiagramDXYQGD6DValue326 = blockDiagramDXYQGD6DHelper16(
          shapeSvg,
          blockDiagramDXYQGD6DValue323,
          blockDiagramDXYQGD6DValue324,
          blockDiagramDXYQGD6DValue325,
        );
      return (
        blockDiagramDXYQGD6DValue326.attr(
          "style",
          blockDiagramDXYQGD6DParam116.style,
        ),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam116,
          blockDiagramDXYQGD6DValue326,
        ),
        (blockDiagramDXYQGD6DParam116.intersect = function (
          blockDiagramDXYQGD6DParam249,
        ) {
          return blockDiagramDXYQGD6DValue47.polygon(
            blockDiagramDXYQGD6DParam116,
            blockDiagramDXYQGD6DValue325,
            blockDiagramDXYQGD6DParam249,
          );
        }),
        shapeSvg
      );
    },
    "subroutine",
  ),
  blockDiagramDXYQGD6DValue70 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam150, blockDiagramDXYQGD6DParam151) => {
      let blockDiagramDXYQGD6DValue411 = blockDiagramDXYQGD6DParam150
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam151.domId ||
              blockDiagramDXYQGD6DParam151.id,
          ),
        blockDiagramDXYQGD6DValue412 = blockDiagramDXYQGD6DValue411.insert(
          "circle",
          ":first-child",
        );
      return (
        blockDiagramDXYQGD6DValue412
          .attr("class", "state-start")
          .attr("r", 7)
          .attr("width", 14)
          .attr("height", 14),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam151,
          blockDiagramDXYQGD6DValue412,
        ),
        (blockDiagramDXYQGD6DParam151.intersect = function (
          blockDiagramDXYQGD6DParam250,
        ) {
          return blockDiagramDXYQGD6DValue47.circle(
            blockDiagramDXYQGD6DParam151,
            7,
            blockDiagramDXYQGD6DParam250,
          );
        }),
        blockDiagramDXYQGD6DValue411
      );
    },
    "start",
  ),
  blockDiagramDXYQGD6DValue71 = chunkAGHRB4JFN(
    (
      blockDiagramDXYQGD6DParam118,
      blockDiagramDXYQGD6DParam119,
      blockDiagramDXYQGD6DParam120,
    ) => {
      let blockDiagramDXYQGD6DValue327 = blockDiagramDXYQGD6DParam118
          .insert("g")
          .attr("class", "node default")
          .attr(
            "id",
            blockDiagramDXYQGD6DParam119.domId ||
              blockDiagramDXYQGD6DParam119.id,
          ),
        blockDiagramDXYQGD6DValue328 = 70,
        blockDiagramDXYQGD6DValue329 = 10;
      return (
        blockDiagramDXYQGD6DParam120 === "LR" &&
          ((blockDiagramDXYQGD6DValue328 = 10),
          (blockDiagramDXYQGD6DValue329 = 70)),
        blockDiagramDXYQGD6DValue49(
          blockDiagramDXYQGD6DParam119,
          blockDiagramDXYQGD6DValue327
            .append("rect")
            .attr("x", (-1 * blockDiagramDXYQGD6DValue328) / 2)
            .attr("y", (-1 * blockDiagramDXYQGD6DValue329) / 2)
            .attr("width", blockDiagramDXYQGD6DValue328)
            .attr("height", blockDiagramDXYQGD6DValue329)
            .attr("class", "fork-join"),
        ),
        (blockDiagramDXYQGD6DParam119.height +=
          blockDiagramDXYQGD6DParam119.padding / 2),
        (blockDiagramDXYQGD6DParam119.width +=
          blockDiagramDXYQGD6DParam119.padding / 2),
        (blockDiagramDXYQGD6DParam119.intersect = function (
          blockDiagramDXYQGD6DParam266,
        ) {
          return blockDiagramDXYQGD6DValue47.rect(
            blockDiagramDXYQGD6DParam119,
            blockDiagramDXYQGD6DParam266,
          );
        }),
        blockDiagramDXYQGD6DValue327
      );
    },
    "forkJoin",
  ),
  blockDiagramDXYQGD6DValue72 = {
    rhombus: blockDiagramDXYQGD6DValue53,
    composite: blockDiagramDXYQGD6DValue64,
    question: blockDiagramDXYQGD6DValue53,
    rect: blockDiagramDXYQGD6DValue63,
    labelRect: blockDiagramDXYQGD6DValue65,
    rectWithTitle: at,
    choice: blockDiagramDXYQGD6DValue54,
    circle: blockDiagramDXYQGD6DValue67,
    doublecircle: blockDiagramDXYQGD6DValue68,
    stadium: blockDiagramDXYQGD6DValue66,
    hexagon: blockDiagramDXYQGD6DValue55,
    block_arrow: blockDiagramDXYQGD6DValue56,
    rect_left_inv_arrow: blockDiagramDXYQGD6DValue57,
    lean_right: blockDiagramDXYQGD6DValue58,
    lean_left: blockDiagramDXYQGD6DValue59,
    trapezoid: blockDiagramDXYQGD6DValue60,
    inv_trapezoid: $e,
    rect_right_inv_arrow: blockDiagramDXYQGD6DValue61,
    cylinder: blockDiagramDXYQGD6DValue62,
    start: blockDiagramDXYQGD6DValue70,
    end: chunkAGHRB4JFN(
      (blockDiagramDXYQGD6DParam106, blockDiagramDXYQGD6DParam107) => {
        let blockDiagramDXYQGD6DValue314 = blockDiagramDXYQGD6DParam106
            .insert("g")
            .attr("class", "node default")
            .attr(
              "id",
              blockDiagramDXYQGD6DParam107.domId ||
                blockDiagramDXYQGD6DParam107.id,
            ),
          blockDiagramDXYQGD6DValue315 = blockDiagramDXYQGD6DValue314.insert(
            "circle",
            ":first-child",
          ),
          blockDiagramDXYQGD6DValue316 = blockDiagramDXYQGD6DValue314.insert(
            "circle",
            ":first-child",
          );
        return (
          blockDiagramDXYQGD6DValue316
            .attr("class", "state-start")
            .attr("r", 7)
            .attr("width", 14)
            .attr("height", 14),
          blockDiagramDXYQGD6DValue315
            .attr("class", "state-end")
            .attr("r", 5)
            .attr("width", 10)
            .attr("height", 10),
          blockDiagramDXYQGD6DValue49(
            blockDiagramDXYQGD6DParam107,
            blockDiagramDXYQGD6DValue316,
          ),
          (blockDiagramDXYQGD6DParam107.intersect = function (
            blockDiagramDXYQGD6DParam238,
          ) {
            return blockDiagramDXYQGD6DValue47.circle(
              blockDiagramDXYQGD6DParam107,
              7,
              blockDiagramDXYQGD6DParam238,
            );
          }),
          blockDiagramDXYQGD6DValue314
        );
      },
      "end",
    ),
    note: blockDiagramDXYQGD6DValue50,
    subroutine: blockDiagramDXYQGD6DValue69,
    fork: blockDiagramDXYQGD6DValue71,
    join: blockDiagramDXYQGD6DValue71,
    class_box: chunkAGHRB4JFN(
      async (blockDiagramDXYQGD6DParam15, blockDiagramDXYQGD6DParam16) => {
        let blockDiagramDXYQGD6DValue101 =
            blockDiagramDXYQGD6DParam16.padding / 2,
          blockDiagramDXYQGD6DValue102;
        blockDiagramDXYQGD6DValue102 = blockDiagramDXYQGD6DParam16.classes
          ? "node " + blockDiagramDXYQGD6DParam16.classes
          : "node default";
        let blockDiagramDXYQGD6DValue103 = blockDiagramDXYQGD6DParam15
            .insert("g")
            .attr("class", blockDiagramDXYQGD6DValue102)
            .attr(
              "id",
              blockDiagramDXYQGD6DParam16.domId ||
                blockDiagramDXYQGD6DParam16.id,
            ),
          blockDiagramDXYQGD6DValue104 = blockDiagramDXYQGD6DValue103.insert(
            "rect",
            ":first-child",
          ),
          blockDiagramDXYQGD6DValue105 =
            blockDiagramDXYQGD6DValue103.insert("line"),
          blockDiagramDXYQGD6DValue106 =
            blockDiagramDXYQGD6DValue103.insert("line"),
          blockDiagramDXYQGD6DValue107 = 0,
          blockDiagramDXYQGD6DValue108 = 4,
          blockDiagramDXYQGD6DValue109 = blockDiagramDXYQGD6DValue103
            .insert("g")
            .attr("class", "label"),
          blockDiagramDXYQGD6DValue110 = 0,
          blockDiagramDXYQGD6DValue111 =
            blockDiagramDXYQGD6DParam16.classData.annotations?.[0],
          blockDiagramDXYQGD6DValue112 = await blockDiagramDXYQGD6DValue28(
            blockDiagramDXYQGD6DValue109,
            blockDiagramDXYQGD6DParam16.classData.annotations[0]
              ? "«" + blockDiagramDXYQGD6DParam16.classData.annotations[0] + "»"
              : "",
            blockDiagramDXYQGD6DParam16.labelStyle,
            true,
            true,
          ),
          blockDiagramDXYQGD6DValue113 = blockDiagramDXYQGD6DValue112.getBBox();
        if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
          let blockDiagramDXYQGD6DValue517 =
              blockDiagramDXYQGD6DValue112.children[0],
            blockDiagramDXYQGD6DValue518 = Src(blockDiagramDXYQGD6DValue112);
          blockDiagramDXYQGD6DValue113 =
            blockDiagramDXYQGD6DValue517.getBoundingClientRect();
          blockDiagramDXYQGD6DValue518.attr(
            "width",
            blockDiagramDXYQGD6DValue113.width,
          );
          blockDiagramDXYQGD6DValue518.attr(
            "height",
            blockDiagramDXYQGD6DValue113.height,
          );
        }
        blockDiagramDXYQGD6DParam16.classData.annotations[0] &&
          ((blockDiagramDXYQGD6DValue108 +=
            blockDiagramDXYQGD6DValue113.height + 4),
          (blockDiagramDXYQGD6DValue107 += blockDiagramDXYQGD6DValue113.width));
        let blockDiagramDXYQGD6DValue114 =
          blockDiagramDXYQGD6DParam16.classData.label;
        blockDiagramDXYQGD6DParam16.classData.type !== undefined &&
          blockDiagramDXYQGD6DParam16.classData.type !== "" &&
          (chunkICPOFSXXT(_chunkICPOFSXXP())
            ? (blockDiagramDXYQGD6DValue114 +=
                "&lt;" + blockDiagramDXYQGD6DParam16.classData.type + "&gt;")
            : (blockDiagramDXYQGD6DValue114 +=
                "<" + blockDiagramDXYQGD6DParam16.classData.type + ">"));
        let blockDiagramDXYQGD6DValue115 = await blockDiagramDXYQGD6DValue28(
          blockDiagramDXYQGD6DValue109,
          blockDiagramDXYQGD6DValue114,
          blockDiagramDXYQGD6DParam16.labelStyle,
          true,
          true,
        );
        Src(blockDiagramDXYQGD6DValue115).attr("class", "classTitle");
        let blockDiagramDXYQGD6DValue116 =
          blockDiagramDXYQGD6DValue115.getBBox();
        if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
          let blockDiagramDXYQGD6DValue519 =
              blockDiagramDXYQGD6DValue115.children[0],
            blockDiagramDXYQGD6DValue520 = Src(blockDiagramDXYQGD6DValue115);
          blockDiagramDXYQGD6DValue116 =
            blockDiagramDXYQGD6DValue519.getBoundingClientRect();
          blockDiagramDXYQGD6DValue520.attr(
            "width",
            blockDiagramDXYQGD6DValue116.width,
          );
          blockDiagramDXYQGD6DValue520.attr(
            "height",
            blockDiagramDXYQGD6DValue116.height,
          );
        }
        blockDiagramDXYQGD6DValue108 += blockDiagramDXYQGD6DValue116.height + 4;
        blockDiagramDXYQGD6DValue116.width > blockDiagramDXYQGD6DValue107 &&
          (blockDiagramDXYQGD6DValue107 = blockDiagramDXYQGD6DValue116.width);
        let blockDiagramDXYQGD6DValue117 = [];
        blockDiagramDXYQGD6DParam16.classData.members.forEach(async (item) => {
          let blockDiagramDXYQGD6DValue349 = item.getDisplayDetails(),
            blockDiagramDXYQGD6DValue350 =
              blockDiagramDXYQGD6DValue349.displayText;
          chunkICPOFSXXT(_chunkICPOFSXXP()) &&
            (blockDiagramDXYQGD6DValue350 = blockDiagramDXYQGD6DValue350
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;"));
          let blockDiagramDXYQGD6DValue351 = await blockDiagramDXYQGD6DValue28(
              blockDiagramDXYQGD6DValue109,
              blockDiagramDXYQGD6DValue350,
              blockDiagramDXYQGD6DValue349.cssStyle
                ? blockDiagramDXYQGD6DValue349.cssStyle
                : blockDiagramDXYQGD6DParam16.labelStyle,
              true,
              true,
            ),
            blockDiagramDXYQGD6DValue352 =
              blockDiagramDXYQGD6DValue351.getBBox();
          if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
            let blockDiagramDXYQGD6DValue493 =
                blockDiagramDXYQGD6DValue351.children[0],
              blockDiagramDXYQGD6DValue494 = Src(blockDiagramDXYQGD6DValue351);
            blockDiagramDXYQGD6DValue352 =
              blockDiagramDXYQGD6DValue493.getBoundingClientRect();
            blockDiagramDXYQGD6DValue494.attr(
              "width",
              blockDiagramDXYQGD6DValue352.width,
            );
            blockDiagramDXYQGD6DValue494.attr(
              "height",
              blockDiagramDXYQGD6DValue352.height,
            );
          }
          blockDiagramDXYQGD6DValue352.width > blockDiagramDXYQGD6DValue107 &&
            (blockDiagramDXYQGD6DValue107 = blockDiagramDXYQGD6DValue352.width);
          blockDiagramDXYQGD6DValue108 +=
            blockDiagramDXYQGD6DValue352.height + 4;
          blockDiagramDXYQGD6DValue117.push(blockDiagramDXYQGD6DValue351);
        });
        blockDiagramDXYQGD6DValue108 += 8;
        let blockDiagramDXYQGD6DValue118 = [];
        if (
          (blockDiagramDXYQGD6DParam16.classData.methods.forEach(
            async (item) => {
              let blockDiagramDXYQGD6DValue331 = item.getDisplayDetails(),
                blockDiagramDXYQGD6DValue332 =
                  blockDiagramDXYQGD6DValue331.displayText;
              chunkICPOFSXXT(_chunkICPOFSXXP()) &&
                (blockDiagramDXYQGD6DValue332 = blockDiagramDXYQGD6DValue332
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;"));
              let blockDiagramDXYQGD6DValue333 =
                  await blockDiagramDXYQGD6DValue28(
                    blockDiagramDXYQGD6DValue109,
                    blockDiagramDXYQGD6DValue332,
                    blockDiagramDXYQGD6DValue331.cssStyle
                      ? blockDiagramDXYQGD6DValue331.cssStyle
                      : blockDiagramDXYQGD6DParam16.labelStyle,
                    true,
                    true,
                  ),
                blockDiagramDXYQGD6DValue334 =
                  blockDiagramDXYQGD6DValue333.getBBox();
              if (chunkICPOFSXXT(_chunkICPOFSXXP())) {
                let blockDiagramDXYQGD6DValue490 =
                    blockDiagramDXYQGD6DValue333.children[0],
                  blockDiagramDXYQGD6DValue491 = Src(
                    blockDiagramDXYQGD6DValue333,
                  );
                blockDiagramDXYQGD6DValue334 =
                  blockDiagramDXYQGD6DValue490.getBoundingClientRect();
                blockDiagramDXYQGD6DValue491.attr(
                  "width",
                  blockDiagramDXYQGD6DValue334.width,
                );
                blockDiagramDXYQGD6DValue491.attr(
                  "height",
                  blockDiagramDXYQGD6DValue334.height,
                );
              }
              blockDiagramDXYQGD6DValue334.width >
                blockDiagramDXYQGD6DValue107 &&
                (blockDiagramDXYQGD6DValue107 =
                  blockDiagramDXYQGD6DValue334.width);
              blockDiagramDXYQGD6DValue108 +=
                blockDiagramDXYQGD6DValue334.height + 4;
              blockDiagramDXYQGD6DValue118.push(blockDiagramDXYQGD6DValue333);
            },
          ),
          (blockDiagramDXYQGD6DValue108 += 8),
          blockDiagramDXYQGD6DValue111)
        ) {
          let blockDiagramDXYQGD6DValue489 =
            (blockDiagramDXYQGD6DValue107 -
              blockDiagramDXYQGD6DValue113.width) /
            2;
          Src(blockDiagramDXYQGD6DValue112).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramDXYQGD6DValue107) / 2 +
                blockDiagramDXYQGD6DValue489) +
              ", " +
              (-1 * blockDiagramDXYQGD6DValue108) / 2 +
              ")",
          );
          blockDiagramDXYQGD6DValue110 =
            blockDiagramDXYQGD6DValue113.height + 4;
        }
        let blockDiagramDXYQGD6DValue119 =
          (blockDiagramDXYQGD6DValue107 - blockDiagramDXYQGD6DValue116.width) /
          2;
        return (
          Src(blockDiagramDXYQGD6DValue115).attr(
            "transform",
            "translate( " +
              ((-1 * blockDiagramDXYQGD6DValue107) / 2 +
                blockDiagramDXYQGD6DValue119) +
              ", " +
              ((-1 * blockDiagramDXYQGD6DValue108) / 2 +
                blockDiagramDXYQGD6DValue110) +
              ")",
          ),
          (blockDiagramDXYQGD6DValue110 +=
            blockDiagramDXYQGD6DValue116.height + 4),
          blockDiagramDXYQGD6DValue105
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramDXYQGD6DValue107 / 2 - blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "x2",
              blockDiagramDXYQGD6DValue107 / 2 + blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "y1",
              -blockDiagramDXYQGD6DValue108 / 2 -
                blockDiagramDXYQGD6DValue101 +
                8 +
                blockDiagramDXYQGD6DValue110,
            )
            .attr(
              "y2",
              -blockDiagramDXYQGD6DValue108 / 2 -
                blockDiagramDXYQGD6DValue101 +
                8 +
                blockDiagramDXYQGD6DValue110,
            ),
          (blockDiagramDXYQGD6DValue110 += 8),
          blockDiagramDXYQGD6DValue117.forEach((item) => {
            Src(item).attr(
              "transform",
              "translate( " +
                -blockDiagramDXYQGD6DValue107 / 2 +
                ", " +
                ((-1 * blockDiagramDXYQGD6DValue108) / 2 +
                  blockDiagramDXYQGD6DValue110 +
                  4) +
                ")",
            );
            let blockDiagramDXYQGD6DValue480 = item?.getBBox();
            blockDiagramDXYQGD6DValue110 +=
              (blockDiagramDXYQGD6DValue480?.height ?? 0) + 4;
          }),
          (blockDiagramDXYQGD6DValue110 += 8),
          blockDiagramDXYQGD6DValue106
            .attr("class", "divider")
            .attr(
              "x1",
              -blockDiagramDXYQGD6DValue107 / 2 - blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "x2",
              blockDiagramDXYQGD6DValue107 / 2 + blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "y1",
              -blockDiagramDXYQGD6DValue108 / 2 -
                blockDiagramDXYQGD6DValue101 +
                8 +
                blockDiagramDXYQGD6DValue110,
            )
            .attr(
              "y2",
              -blockDiagramDXYQGD6DValue108 / 2 -
                blockDiagramDXYQGD6DValue101 +
                8 +
                blockDiagramDXYQGD6DValue110,
            ),
          (blockDiagramDXYQGD6DValue110 += 8),
          blockDiagramDXYQGD6DValue118.forEach((item) => {
            Src(item).attr(
              "transform",
              "translate( " +
                -blockDiagramDXYQGD6DValue107 / 2 +
                ", " +
                ((-1 * blockDiagramDXYQGD6DValue108) / 2 +
                  blockDiagramDXYQGD6DValue110) +
                ")",
            );
            let blockDiagramDXYQGD6DValue488 = item?.getBBox();
            blockDiagramDXYQGD6DValue110 +=
              (blockDiagramDXYQGD6DValue488?.height ?? 0) + 4;
          }),
          blockDiagramDXYQGD6DValue104
            .attr("style", blockDiagramDXYQGD6DParam16.style)
            .attr("class", "outer title-state")
            .attr(
              "x",
              -blockDiagramDXYQGD6DValue107 / 2 - blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "y",
              -(blockDiagramDXYQGD6DValue108 / 2) -
                blockDiagramDXYQGD6DValue101,
            )
            .attr(
              "width",
              blockDiagramDXYQGD6DValue107 +
                blockDiagramDXYQGD6DParam16.padding,
            )
            .attr(
              "height",
              blockDiagramDXYQGD6DValue108 +
                blockDiagramDXYQGD6DParam16.padding,
            ),
          blockDiagramDXYQGD6DValue49(
            blockDiagramDXYQGD6DParam16,
            blockDiagramDXYQGD6DValue104,
          ),
          (blockDiagramDXYQGD6DParam16.intersect = function (
            blockDiagramDXYQGD6DParam251,
          ) {
            return blockDiagramDXYQGD6DValue47.rect(
              blockDiagramDXYQGD6DParam16,
              blockDiagramDXYQGD6DParam251,
            );
          }),
          blockDiagramDXYQGD6DValue103
        );
      },
      "class_box",
    ),
  },
  blockDiagramDXYQGD6DValue73 = {},
  blockDiagramDXYQGD6DValue74 = chunkAGHRB4JFN(
    async (
      blockDiagramDXYQGD6DParam110,
      blockDiagramDXYQGD6DParam111,
      blockDiagramDXYQGD6DParam112,
    ) => {
      let blockDiagramDXYQGD6DValue318, blockDiagramDXYQGD6DValue319;
      if (blockDiagramDXYQGD6DParam111.link) {
        let blockDiagramDXYQGD6DValue470;
        _chunkICPOFSXXP().securityLevel === "sandbox"
          ? (blockDiagramDXYQGD6DValue470 = "_top")
          : blockDiagramDXYQGD6DParam111.linkTarget &&
            (blockDiagramDXYQGD6DValue470 =
              blockDiagramDXYQGD6DParam111.linkTarget || "_blank");
        blockDiagramDXYQGD6DValue318 = blockDiagramDXYQGD6DParam110
          .insert("svg:a")
          .attr("xlink:href", blockDiagramDXYQGD6DParam111.link)
          .attr("target", blockDiagramDXYQGD6DValue470);
        blockDiagramDXYQGD6DValue319 = await blockDiagramDXYQGD6DValue72[
          blockDiagramDXYQGD6DParam111.shape
        ](
          blockDiagramDXYQGD6DValue318,
          blockDiagramDXYQGD6DParam111,
          blockDiagramDXYQGD6DParam112,
        );
      } else {
        blockDiagramDXYQGD6DValue319 = await blockDiagramDXYQGD6DValue72[
          blockDiagramDXYQGD6DParam111.shape
        ](
          blockDiagramDXYQGD6DParam110,
          blockDiagramDXYQGD6DParam111,
          blockDiagramDXYQGD6DParam112,
        );
        blockDiagramDXYQGD6DValue318 = blockDiagramDXYQGD6DValue319;
      }
      return (
        blockDiagramDXYQGD6DParam111.tooltip &&
          blockDiagramDXYQGD6DValue319.attr(
            "title",
            blockDiagramDXYQGD6DParam111.tooltip,
          ),
        blockDiagramDXYQGD6DParam111.class &&
          blockDiagramDXYQGD6DValue319.attr(
            "class",
            "node default " + blockDiagramDXYQGD6DParam111.class,
          ),
        (blockDiagramDXYQGD6DValue73[blockDiagramDXYQGD6DParam111.id] =
          blockDiagramDXYQGD6DValue318),
        blockDiagramDXYQGD6DParam111.haveCallback &&
          blockDiagramDXYQGD6DValue73[blockDiagramDXYQGD6DParam111.id].attr(
            "class",
            blockDiagramDXYQGD6DValue73[blockDiagramDXYQGD6DParam111.id].attr(
              "class",
            ) + " clickable",
          ),
        blockDiagramDXYQGD6DValue318
      );
    },
    "insertNode",
  ),
  blockDiagramDXYQGD6DValue75 = chunkAGHRB4JFN(
    (blockDiagramDXYQGD6DParam129) => {
      let blockDiagramDXYQGD6DValue365 =
        blockDiagramDXYQGD6DValue73[blockDiagramDXYQGD6DParam129.id];
      chunkAGHRB4JFR.trace(
        "Transforming node",
        blockDiagramDXYQGD6DParam129.diff,
        blockDiagramDXYQGD6DParam129,
        "translate(" +
          (blockDiagramDXYQGD6DParam129.x -
            blockDiagramDXYQGD6DParam129.width / 2 -
            5) +
          ", " +
          blockDiagramDXYQGD6DParam129.width / 2 +
          ")",
      );
      let blockDiagramDXYQGD6DValue366 = blockDiagramDXYQGD6DParam129.diff || 0;
      return (
        blockDiagramDXYQGD6DParam129.clusterNode
          ? blockDiagramDXYQGD6DValue365.attr(
              "transform",
              "translate(" +
                (blockDiagramDXYQGD6DParam129.x +
                  blockDiagramDXYQGD6DValue366 -
                  blockDiagramDXYQGD6DParam129.width / 2) +
                ", " +
                (blockDiagramDXYQGD6DParam129.y -
                  blockDiagramDXYQGD6DParam129.height / 2 -
                  8) +
                ")",
            )
          : blockDiagramDXYQGD6DValue365.attr(
              "transform",
              "translate(" +
                blockDiagramDXYQGD6DParam129.x +
                ", " +
                blockDiagramDXYQGD6DParam129.y +
                ")",
            ),
        blockDiagramDXYQGD6DValue366
      );
    },
    "positionNode",
  );
function blockDiagramDXYQGD6DHelper18(
  blockDiagramDXYQGD6DParam33,
  blockDiagramDXYQGD6DParam34,
  blockDiagramDXYQGD6DParam35 = false,
) {
  let blockDiagramDXYQGD6DValue193 = blockDiagramDXYQGD6DParam33,
    blockDiagramDXYQGD6DValue194 = "default";
  (blockDiagramDXYQGD6DValue193?.classes?.length || 0) > 0 &&
    (blockDiagramDXYQGD6DValue194 = (
      blockDiagramDXYQGD6DValue193?.classes ?? []
    ).join(" "));
  blockDiagramDXYQGD6DValue194 += " flowchart-label";
  let blockDiagramDXYQGD6DValue195 = 0,
    blockDiagramDXYQGD6DValue196 = "",
    blockDiagramDXYQGD6DValue197;
  switch (blockDiagramDXYQGD6DValue193.type) {
    case "round":
      blockDiagramDXYQGD6DValue195 = 5;
      blockDiagramDXYQGD6DValue196 = "rect";
      break;
    case "composite":
      blockDiagramDXYQGD6DValue195 = 0;
      blockDiagramDXYQGD6DValue196 = "composite";
      blockDiagramDXYQGD6DValue197 = 0;
      break;
    case "square":
      blockDiagramDXYQGD6DValue196 = "rect";
      break;
    case "diamond":
      blockDiagramDXYQGD6DValue196 = "question";
      break;
    case "hexagon":
      blockDiagramDXYQGD6DValue196 = "hexagon";
      break;
    case "block_arrow":
      blockDiagramDXYQGD6DValue196 = "block_arrow";
      break;
    case "odd":
      blockDiagramDXYQGD6DValue196 = "rect_left_inv_arrow";
      break;
    case "lean_right":
      blockDiagramDXYQGD6DValue196 = "lean_right";
      break;
    case "lean_left":
      blockDiagramDXYQGD6DValue196 = "lean_left";
      break;
    case "trapezoid":
      blockDiagramDXYQGD6DValue196 = "trapezoid";
      break;
    case "inv_trapezoid":
      blockDiagramDXYQGD6DValue196 = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      blockDiagramDXYQGD6DValue196 = "rect_left_inv_arrow";
      break;
    case "circle":
      blockDiagramDXYQGD6DValue196 = "circle";
      break;
    case "ellipse":
      blockDiagramDXYQGD6DValue196 = "ellipse";
      break;
    case "stadium":
      blockDiagramDXYQGD6DValue196 = "stadium";
      break;
    case "subroutine":
      blockDiagramDXYQGD6DValue196 = "subroutine";
      break;
    case "cylinder":
      blockDiagramDXYQGD6DValue196 = "cylinder";
      break;
    case "group":
      blockDiagramDXYQGD6DValue196 = "rect";
      break;
    case "doublecircle":
      blockDiagramDXYQGD6DValue196 = "doublecircle";
      break;
    default:
      blockDiagramDXYQGD6DValue196 = "rect";
  }
  let blockDiagramDXYQGD6DValue198 = chunk5PVQY5BWS(
      blockDiagramDXYQGD6DValue193?.styles ?? [],
    ),
    blockDiagramDXYQGD6DValue199 = blockDiagramDXYQGD6DValue193.label,
    blockDiagramDXYQGD6DValue200 = blockDiagramDXYQGD6DValue193.size ?? {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    },
    blockDiagramDXYQGD6DValue201 = blockDiagramDXYQGD6DParam34.getDiagramId();
  return {
    labelStyle: blockDiagramDXYQGD6DValue198.labelStyle,
    shape: blockDiagramDXYQGD6DValue196,
    labelText: blockDiagramDXYQGD6DValue199,
    rx: blockDiagramDXYQGD6DValue195,
    ry: blockDiagramDXYQGD6DValue195,
    class: blockDiagramDXYQGD6DValue194,
    style: blockDiagramDXYQGD6DValue198.style,
    id: blockDiagramDXYQGD6DValue193.id,
    domId: blockDiagramDXYQGD6DValue201
      ? `${blockDiagramDXYQGD6DValue201}-${blockDiagramDXYQGD6DValue193.id}`
      : blockDiagramDXYQGD6DValue193.id,
    directions: blockDiagramDXYQGD6DValue193.directions,
    width: blockDiagramDXYQGD6DValue200.width,
    height: blockDiagramDXYQGD6DValue200.height,
    x: blockDiagramDXYQGD6DValue200.x,
    y: blockDiagramDXYQGD6DValue200.y,
    positioned: blockDiagramDXYQGD6DParam35,
    intersect: undefined,
    type: blockDiagramDXYQGD6DValue193.type,
    padding:
      blockDiagramDXYQGD6DValue197 ?? chunkICPOFSXXW()?.block?.padding ?? 0,
  };
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper18, "getNodeFromBlock");
async function blockDiagramDXYQGD6DHelper19(
  blockDiagramDXYQGD6DParam173,
  blockDiagramDXYQGD6DParam174,
  blockDiagramDXYQGD6DParam175,
) {
  let blockDiagramDXYQGD6DValue450 = blockDiagramDXYQGD6DHelper18(
    blockDiagramDXYQGD6DParam174,
    blockDiagramDXYQGD6DParam175,
    false,
  );
  if (blockDiagramDXYQGD6DValue450.type === "group") return;
  let blockDiagramDXYQGD6DValue451 = await blockDiagramDXYQGD6DValue74(
      blockDiagramDXYQGD6DParam173,
      blockDiagramDXYQGD6DValue450,
      {
        config: chunkICPOFSXXW(),
      },
    ),
    blockDiagramDXYQGD6DValue452 = blockDiagramDXYQGD6DValue451
      .node()
      .getBBox(),
    blockDiagramDXYQGD6DValue453 = blockDiagramDXYQGD6DParam175.getBlock(
      blockDiagramDXYQGD6DValue450.id,
    );
  blockDiagramDXYQGD6DValue453.size = {
    width: blockDiagramDXYQGD6DValue452.width,
    height: blockDiagramDXYQGD6DValue452.height,
    x: 0,
    y: 0,
    node: blockDiagramDXYQGD6DValue451,
  };
  blockDiagramDXYQGD6DParam175.setBlock(blockDiagramDXYQGD6DValue453);
  blockDiagramDXYQGD6DValue451.remove();
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper19, "calculateBlockSize");
async function _t(
  blockDiagramDXYQGD6DParam197,
  blockDiagramDXYQGD6DParam198,
  blockDiagramDXYQGD6DParam199,
) {
  let blockDiagramDXYQGD6DValue523 = blockDiagramDXYQGD6DHelper18(
    blockDiagramDXYQGD6DParam198,
    blockDiagramDXYQGD6DParam199,
    true,
  );
  blockDiagramDXYQGD6DParam199.getBlock(blockDiagramDXYQGD6DValue523.id)
    .type !== "space" &&
    (await blockDiagramDXYQGD6DValue74(
      blockDiagramDXYQGD6DParam197,
      blockDiagramDXYQGD6DValue523,
      {
        config: chunkICPOFSXXW(),
      },
    ),
    (blockDiagramDXYQGD6DParam198.intersect =
      blockDiagramDXYQGD6DValue523?.intersect),
    blockDiagramDXYQGD6DValue75(blockDiagramDXYQGD6DValue523));
}
chunkAGHRB4JFN(_t, "insertBlockPositioned");
async function $(
  blockDiagramDXYQGD6DParam210,
  blockDiagramDXYQGD6DParam211,
  blockDiagramDXYQGD6DParam212,
  blockDiagramDXYQGD6DParam213,
) {
  for (let blockDiagramDXYQGD6DValue544 of blockDiagramDXYQGD6DParam211) {
    await blockDiagramDXYQGD6DParam213(
      blockDiagramDXYQGD6DParam210,
      blockDiagramDXYQGD6DValue544,
      blockDiagramDXYQGD6DParam212,
    );
    blockDiagramDXYQGD6DValue544.children &&
      (await $(
        blockDiagramDXYQGD6DParam210,
        blockDiagramDXYQGD6DValue544.children,
        blockDiagramDXYQGD6DParam212,
        blockDiagramDXYQGD6DParam213,
      ));
  }
}
chunkAGHRB4JFN($, "performOperations");
async function blockDiagramDXYQGD6DHelper20(
  blockDiagramDXYQGD6DParam254,
  blockDiagramDXYQGD6DParam255,
  blockDiagramDXYQGD6DParam256,
) {
  await $(
    blockDiagramDXYQGD6DParam254,
    blockDiagramDXYQGD6DParam255,
    blockDiagramDXYQGD6DParam256,
    blockDiagramDXYQGD6DHelper19,
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper20, "calculateBlockSizes");
async function blockDiagramDXYQGD6DHelper21(
  blockDiagramDXYQGD6DParam257,
  blockDiagramDXYQGD6DParam258,
  blockDiagramDXYQGD6DParam259,
) {
  await $(
    blockDiagramDXYQGD6DParam257,
    blockDiagramDXYQGD6DParam258,
    blockDiagramDXYQGD6DParam259,
    _t,
  );
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper21, "insertBlocks");
async function blockDiagramDXYQGD6DHelper22(
  blockDiagramDXYQGD6DParam43,
  blockDiagramDXYQGD6DParam44,
  blockDiagramDXYQGD6DParam45,
  blockDiagramDXYQGD6DParam46,
  blockDiagramDXYQGD6DParam47,
) {
  let blockDiagramDXYQGD6DValue214 = new Graphlib({
    multigraph: true,
    compound: true,
  });
  blockDiagramDXYQGD6DValue214.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8,
  });
  for (let blockDiagramDXYQGD6DValue532 of blockDiagramDXYQGD6DParam45)
    blockDiagramDXYQGD6DValue532.size &&
      blockDiagramDXYQGD6DValue214.setNode(blockDiagramDXYQGD6DValue532.id, {
        width: blockDiagramDXYQGD6DValue532.size.width,
        height: blockDiagramDXYQGD6DValue532.size.height,
        intersect: blockDiagramDXYQGD6DValue532.intersect,
      });
  for (let blockDiagramDXYQGD6DValue244 of blockDiagramDXYQGD6DParam44)
    if (
      blockDiagramDXYQGD6DValue244.start &&
      blockDiagramDXYQGD6DValue244.end
    ) {
      let blockDiagramDXYQGD6DValue245 = blockDiagramDXYQGD6DParam46.getBlock(
          blockDiagramDXYQGD6DValue244.start,
        ),
        blockDiagramDXYQGD6DValue246 = blockDiagramDXYQGD6DParam46.getBlock(
          blockDiagramDXYQGD6DValue244.end,
        );
      if (
        blockDiagramDXYQGD6DValue245?.size &&
        blockDiagramDXYQGD6DValue246?.size
      ) {
        let blockDiagramDXYQGD6DValue247 = blockDiagramDXYQGD6DValue245.size,
          blockDiagramDXYQGD6DValue248 = blockDiagramDXYQGD6DValue246.size,
          blockDiagramDXYQGD6DValue249 = [
            {
              x: blockDiagramDXYQGD6DValue247.x,
              y: blockDiagramDXYQGD6DValue247.y,
            },
            {
              x:
                blockDiagramDXYQGD6DValue247.x +
                (blockDiagramDXYQGD6DValue248.x -
                  blockDiagramDXYQGD6DValue247.x) /
                  2,
              y:
                blockDiagramDXYQGD6DValue247.y +
                (blockDiagramDXYQGD6DValue248.y -
                  blockDiagramDXYQGD6DValue247.y) /
                  2,
            },
            {
              x: blockDiagramDXYQGD6DValue248.x,
              y: blockDiagramDXYQGD6DValue248.y,
            },
          ],
          blockDiagramDXYQGD6DValue250 = blockDiagramDXYQGD6DParam47
            ? `${blockDiagramDXYQGD6DParam47}-${blockDiagramDXYQGD6DValue244.id}`
            : blockDiagramDXYQGD6DValue244.id;
        blockDiagramDXYQGD6DValue39(
          blockDiagramDXYQGD6DParam43,
          {
            v: blockDiagramDXYQGD6DValue244.start,
            w: blockDiagramDXYQGD6DValue244.end,
            name: blockDiagramDXYQGD6DValue250,
          },
          {
            ...blockDiagramDXYQGD6DValue244,
            id: blockDiagramDXYQGD6DValue250,
            arrowTypeEnd: blockDiagramDXYQGD6DValue244.arrowTypeEnd,
            arrowTypeStart: blockDiagramDXYQGD6DValue244.arrowTypeStart,
            points: blockDiagramDXYQGD6DValue249,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          },
          undefined,
          "block",
          blockDiagramDXYQGD6DValue214,
          blockDiagramDXYQGD6DParam47,
        );
        blockDiagramDXYQGD6DValue244.label &&
          (await blockDiagramDXYQGD6DValue34(blockDiagramDXYQGD6DParam43, {
            ...blockDiagramDXYQGD6DValue244,
            label: blockDiagramDXYQGD6DValue244.label,
            labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
            arrowTypeEnd: blockDiagramDXYQGD6DValue244.arrowTypeEnd,
            arrowTypeStart: blockDiagramDXYQGD6DValue244.arrowTypeStart,
            points: blockDiagramDXYQGD6DValue249,
            classes:
              "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1",
          }),
          blockDiagramDXYQGD6DValue35(
            {
              ...blockDiagramDXYQGD6DValue244,
              x: blockDiagramDXYQGD6DValue249[1].x,
              y: blockDiagramDXYQGD6DValue249[1].y,
            },
            {
              originalPath: blockDiagramDXYQGD6DValue249,
            },
          ));
      }
    }
}
chunkAGHRB4JFN(blockDiagramDXYQGD6DHelper22, "insertEdges");
export const BlockDiagramDXYQGD6D = {
  parser: blockDiagramDXYQGD6DValue2,
  db: blockDiagramDXYQGD6DValue22,
  renderer: {
    draw: chunkAGHRB4JFN(async function (
      blockDiagramDXYQGD6DParam73,
      blockDiagramDXYQGD6DParam74,
      blockDiagramDXYQGD6DParam75,
      blockDiagramDXYQGD6DParam76,
    ) {
      let { securityLevel, block } = chunkICPOFSXXW(),
        blockDiagramDXYQGD6DValue271 = blockDiagramDXYQGD6DParam76.db;
      blockDiagramDXYQGD6DValue271.setDiagramId(blockDiagramDXYQGD6DParam74);
      let blockDiagramDXYQGD6DValue272;
      securityLevel === "sandbox" &&
        (blockDiagramDXYQGD6DValue272 = Src(
          "#i" + blockDiagramDXYQGD6DParam74,
        ));
      let blockDiagramDXYQGD6DValue273 = Src(
          securityLevel === "sandbox"
            ? blockDiagramDXYQGD6DValue272.nodes()[0].contentDocument.body
            : "body",
        ),
        blockDiagramDXYQGD6DValue274 =
          securityLevel === "sandbox"
            ? blockDiagramDXYQGD6DValue273.select(
                `[id="${blockDiagramDXYQGD6DParam74}"]`,
              )
            : Src(`[id="${blockDiagramDXYQGD6DParam74}"]`);
      blockDiagramDXYQGD6DValue26(
        blockDiagramDXYQGD6DValue274,
        ["point", "circle", "cross"],
        blockDiagramDXYQGD6DParam76.type,
        blockDiagramDXYQGD6DParam74,
      );
      let blockDiagramDXYQGD6DValue275 =
          blockDiagramDXYQGD6DValue271.getBlocks(),
        blockDiagramDXYQGD6DValue276 =
          blockDiagramDXYQGD6DValue271.getBlocksFlat(),
        blockDiagramDXYQGD6DValue277 = blockDiagramDXYQGD6DValue271.getEdges(),
        blockDiagramDXYQGD6DValue278 = blockDiagramDXYQGD6DValue274
          .insert("g")
          .attr("class", "block");
      await blockDiagramDXYQGD6DHelper20(
        blockDiagramDXYQGD6DValue278,
        blockDiagramDXYQGD6DValue275,
        blockDiagramDXYQGD6DValue271,
      );
      let blockDiagramDXYQGD6DValue279 = blockDiagramDXYQGD6DHelper8(
        blockDiagramDXYQGD6DValue271,
      );
      if (
        (await blockDiagramDXYQGD6DHelper21(
          blockDiagramDXYQGD6DValue278,
          blockDiagramDXYQGD6DValue275,
          blockDiagramDXYQGD6DValue271,
        ),
        await blockDiagramDXYQGD6DHelper22(
          blockDiagramDXYQGD6DValue278,
          blockDiagramDXYQGD6DValue277,
          blockDiagramDXYQGD6DValue276,
          blockDiagramDXYQGD6DValue271,
          blockDiagramDXYQGD6DParam74,
        ),
        blockDiagramDXYQGD6DValue279)
      ) {
        let blockDiagramDXYQGD6DValue426 = blockDiagramDXYQGD6DValue279,
          blockDiagramDXYQGD6DValue427 = Math.max(
            1,
            Math.round(
              0.125 *
                (blockDiagramDXYQGD6DValue426.width /
                  blockDiagramDXYQGD6DValue426.height),
            ),
          ),
          blockDiagramDXYQGD6DValue428 =
            blockDiagramDXYQGD6DValue426.height +
            blockDiagramDXYQGD6DValue427 +
            10,
          blockDiagramDXYQGD6DValue429 =
            blockDiagramDXYQGD6DValue426.width + 10,
          { useMaxWidth } = block;
        _chunkICPOFSXXR(
          blockDiagramDXYQGD6DValue274,
          blockDiagramDXYQGD6DValue428,
          blockDiagramDXYQGD6DValue429,
          !!useMaxWidth,
        );
        chunkAGHRB4JFR.debug(
          "Here Bounds",
          blockDiagramDXYQGD6DValue279,
          blockDiagramDXYQGD6DValue426,
        );
        blockDiagramDXYQGD6DValue274.attr(
          "viewBox",
          `${blockDiagramDXYQGD6DValue426.x - 5} ${blockDiagramDXYQGD6DValue426.y - 5} ${blockDiagramDXYQGD6DValue426.width + 10} ${blockDiagramDXYQGD6DValue426.height + 10}`,
        );
      }
    }, "draw"),
    getClasses: chunkAGHRB4JFN(function (
      blockDiagramDXYQGD6DParam252,
      blockDiagramDXYQGD6DParam253,
    ) {
      return blockDiagramDXYQGD6DParam253.db.getClasses();
    }, "getClasses"),
  },
  styles: blockDiagramDXYQGD6DValue24,
};
