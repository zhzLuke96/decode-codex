// Restored from ref/webview/assets/diagram-5BDNPKRD-CNeveAHh.js
// Flat boundary. Vendored diagram5BDNPKRD chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC as chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
import { ImperativeState } from "../utils/chunk-qzhkn3-vn";
const _chunkICPOFSXXC = chunkICPOFSXXC,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var diagram5BDNPKRDValue1 = new ImperativeState(() => ({
    cnt: 1,
    stack: [
      {
        id: 0,
        level: -1,
        name: "/",
        children: [],
      },
    ],
  })),
  diagram5BDNPKRDValue2 = chunkAGHRB4JFN(() => {
    diagram5BDNPKRDValue1.reset();
    _chunkICPOFSXXA();
  }, "clear"),
  diagram5BDNPKRDValue3 = chunkAGHRB4JFN(
    () => diagram5BDNPKRDValue1.records.stack[0],
    "getRoot",
  ),
  diagram5BDNPKRDValue4 = chunkAGHRB4JFN(
    () => diagram5BDNPKRDValue1.records.cnt,
    "getCount",
  ),
  diagram5BDNPKRDValue5 = chunkICPOFSXXD.treeView,
  diagram5BDNPKRDValue6 = {
    clear: diagram5BDNPKRDValue2,
    addNode: chunkAGHRB4JFN(
      (diagram5BDNPKRDParam15, diagram5BDNPKRDParam16) => {
        for (
          ;
          diagram5BDNPKRDParam15 <=
          diagram5BDNPKRDValue1.records.stack[
            diagram5BDNPKRDValue1.records.stack.length - 1
          ].level;

        )
          diagram5BDNPKRDValue1.records.stack.pop();
        let diagram5BDNPKRDValue26 = {
          id: diagram5BDNPKRDValue1.records.cnt++,
          level: diagram5BDNPKRDParam15,
          name: diagram5BDNPKRDParam16,
          children: [],
        };
        diagram5BDNPKRDValue1.records.stack[
          diagram5BDNPKRDValue1.records.stack.length - 1
        ].children.push(diagram5BDNPKRDValue26);
        diagram5BDNPKRDValue1.records.stack.push(diagram5BDNPKRDValue26);
      },
      "addNode",
    ),
    getRoot: diagram5BDNPKRDValue3,
    getCount: diagram5BDNPKRDValue4,
    getConfig: chunkAGHRB4JFN(
      () => chunk5PVQY5BWP(diagram5BDNPKRDValue5, _chunkICPOFSXXY().treeView),
      "getConfig",
    ),
    getAccTitle: _chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    getDiagramTitle: chunkICPOFSXXC,
    setAccDescription: chunkICPOFSXXB,
    setAccTitle: chunkICPOFSXXV,
    setDiagramTitle: _chunkICPOFSXXW,
  },
  diagram5BDNPKRDValue7 = chunkAGHRB4JFN((diagram5BDNPKRDParam27) => {
    populateCommonDb(diagram5BDNPKRDParam27, diagram5BDNPKRDValue6);
    diagram5BDNPKRDParam27.nodes.map((item) =>
      diagram5BDNPKRDValue6.addNode(
        item.indent ? parseInt(item.indent) : 0,
        item.name,
      ),
    );
  }, "populate"),
  diagram5BDNPKRDValue8 = {
    parse: chunkAGHRB4JFN(async (diagram5BDNPKRDParam28) => {
      let diagram5BDNPKRDValue28 = await MermaidParserCore(
        "treeView",
        diagram5BDNPKRDParam28,
      );
      chunkAGHRB4JFR.debug(diagram5BDNPKRDValue28);
      diagram5BDNPKRDValue7(diagram5BDNPKRDValue28);
    }, "parse"),
  },
  diagram5BDNPKRDValue9 = chunkAGHRB4JFN(
    (
      diagram5BDNPKRDParam6,
      diagram5BDNPKRDParam7,
      diagram5BDNPKRDParam8,
      diagram5BDNPKRDParam9,
      diagram5BDNPKRDParam10,
    ) => {
      let diagram5BDNPKRDValue18 = diagram5BDNPKRDParam9
          .append("text")
          .text(diagram5BDNPKRDParam8.name)
          .attr("dominant-baseline", "middle")
          .attr("class", "treeView-node-label"),
        { height, width } = diagram5BDNPKRDValue18.node().getBBox(),
        diagram5BDNPKRDValue19 = height + diagram5BDNPKRDParam10.paddingY * 2,
        diagram5BDNPKRDValue20 = width + diagram5BDNPKRDParam10.paddingX * 2;
      diagram5BDNPKRDValue18.attr(
        "x",
        diagram5BDNPKRDParam6 + diagram5BDNPKRDParam10.paddingX,
      );
      diagram5BDNPKRDValue18.attr(
        "y",
        diagram5BDNPKRDParam7 + diagram5BDNPKRDValue19 / 2,
      );
      diagram5BDNPKRDParam8.BBox = {
        x: diagram5BDNPKRDParam6,
        y: diagram5BDNPKRDParam7,
        width: diagram5BDNPKRDValue20,
        height: diagram5BDNPKRDValue19,
      };
    },
    "positionLabel",
  ),
  diagram5BDNPKRDValue10 = chunkAGHRB4JFN(
    (
      diagram5BDNPKRDParam21,
      diagram5BDNPKRDParam22,
      diagram5BDNPKRDParam23,
      diagram5BDNPKRDParam24,
      diagram5BDNPKRDParam25,
      diagram5BDNPKRDParam26,
    ) =>
      diagram5BDNPKRDParam21
        .append("line")
        .attr("x1", diagram5BDNPKRDParam22)
        .attr("y1", diagram5BDNPKRDParam23)
        .attr("x2", diagram5BDNPKRDParam24)
        .attr("y2", diagram5BDNPKRDParam25)
        .attr("stroke-width", diagram5BDNPKRDParam26)
        .attr("class", "treeView-node-line"),
    "positionLine",
  ),
  diagram5BDNPKRDValue11 = chunkAGHRB4JFN(
    (diagram5BDNPKRDParam1, diagram5BDNPKRDParam2, diagram5BDNPKRDParam3) => {
      let diagram5BDNPKRDValue14 = 0,
        diagram5BDNPKRDValue15 = 0,
        diagram5BDNPKRDValue16 = chunkAGHRB4JFN(
          (
            diagram5BDNPKRDParam17,
            diagram5BDNPKRDParam18,
            diagram5BDNPKRDParam19,
            diagram5BDNPKRDParam20,
          ) => {
            let diagram5BDNPKRDValue27 =
              diagram5BDNPKRDParam20 *
              (diagram5BDNPKRDParam19.rowIndent +
                diagram5BDNPKRDParam19.paddingX);
            diagram5BDNPKRDValue9(
              diagram5BDNPKRDValue27,
              diagram5BDNPKRDValue14,
              diagram5BDNPKRDParam18,
              diagram5BDNPKRDParam17,
              diagram5BDNPKRDParam19,
            );
            let { height, width } = diagram5BDNPKRDParam18.BBox;
            diagram5BDNPKRDValue10(
              diagram5BDNPKRDParam17,
              diagram5BDNPKRDValue27 - diagram5BDNPKRDParam19.rowIndent,
              diagram5BDNPKRDValue14 + height / 2,
              diagram5BDNPKRDValue27,
              diagram5BDNPKRDValue14 + height / 2,
              diagram5BDNPKRDParam19.lineThickness,
            );
            diagram5BDNPKRDValue15 = Math.max(
              diagram5BDNPKRDValue15,
              diagram5BDNPKRDValue27 + width,
            );
            diagram5BDNPKRDValue14 += height;
          },
          "drawNode",
        ),
        diagram5BDNPKRDValue17 = chunkAGHRB4JFN(
          (diagram5BDNPKRDParam4, diagram5BDNPKRDParam5 = 0) => {
            diagram5BDNPKRDValue16(
              diagram5BDNPKRDParam1,
              diagram5BDNPKRDParam4,
              diagram5BDNPKRDParam3,
              diagram5BDNPKRDParam5,
            );
            diagram5BDNPKRDParam4.children.forEach((item) => {
              diagram5BDNPKRDValue17(item, diagram5BDNPKRDParam5 + 1);
            });
            let { x, y, height } = diagram5BDNPKRDParam4.BBox;
            if (diagram5BDNPKRDParam4.children.length) {
              let { y: _y, height: _height } =
                diagram5BDNPKRDParam4.children[
                  diagram5BDNPKRDParam4.children.length - 1
                ].BBox;
              diagram5BDNPKRDValue10(
                diagram5BDNPKRDParam1,
                x + diagram5BDNPKRDParam3.paddingX,
                y + height,
                x + diagram5BDNPKRDParam3.paddingX,
                _y + _height / 2 + diagram5BDNPKRDParam3.lineThickness / 2,
                diagram5BDNPKRDParam3.lineThickness,
              );
            }
          },
          "processNode",
        );
      return (
        diagram5BDNPKRDValue17(diagram5BDNPKRDParam2),
        {
          totalHeight: diagram5BDNPKRDValue14,
          totalWidth: diagram5BDNPKRDValue15,
        }
      );
    },
    "drawTree",
  ),
  diagram5BDNPKRDValue12 = {
    draw: chunkAGHRB4JFN(
      (
        diagram5BDNPKRDParam11,
        diagram5BDNPKRDParam12,
        diagram5BDNPKRDParam13,
        diagram5BDNPKRDParam14,
      ) => {
        chunkAGHRB4JFR.debug(
          "Rendering treeView diagram\n" + diagram5BDNPKRDParam11,
        );
        let diagram5BDNPKRDValue21 = diagram5BDNPKRDParam14.db,
          diagram5BDNPKRDValue22 = diagram5BDNPKRDValue21.getRoot(),
          diagram5BDNPKRDValue23 = diagram5BDNPKRDValue21.getConfig(),
          diagram5BDNPKRDValue24 = chunk426QAEUC(diagram5BDNPKRDParam12),
          diagram5BDNPKRDValue25 = diagram5BDNPKRDValue24.append("g");
        diagram5BDNPKRDValue25.attr("class", "tree-view");
        let { totalHeight, totalWidth } = diagram5BDNPKRDValue11(
          diagram5BDNPKRDValue25,
          diagram5BDNPKRDValue22,
          diagram5BDNPKRDValue23,
        );
        diagram5BDNPKRDValue24.attr(
          "viewBox",
          `-${diagram5BDNPKRDValue23.lineThickness / 2} 0 ${totalWidth} ${totalHeight}`,
        );
        _chunkICPOFSXXC(
          diagram5BDNPKRDValue24,
          totalHeight,
          totalWidth,
          diagram5BDNPKRDValue23.useMaxWidth,
        );
      },
      "draw",
    ),
  },
  diagram5BDNPKRDValue13 = {
    labelFontSize: "16px",
    labelColor: "black",
    lineColor: "black",
  };
export const diagram5BDNPKRD = {
  db: diagram5BDNPKRDValue6,
  renderer: diagram5BDNPKRDValue12,
  parser: diagram5BDNPKRDValue8,
  styles: chunkAGHRB4JFN(({ treeView }) => {
    let { labelFontSize, labelColor, lineColor } = chunk5PVQY5BWP(
      diagram5BDNPKRDValue13,
      treeView,
    );
    return `
    .treeView-node-label {
        font-size: ${labelFontSize};
        fill: ${labelColor};
    }
    .treeView-node-line {
        stroke: ${lineColor};
    }
    `;
  }, "styles"),
};
