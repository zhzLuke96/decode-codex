// Restored from ref/webview/assets/chunk-QXUST7PY-B8nc5wSD.js
// Flat boundary. Vendored chunkQXUST7PY chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJC } from "./chunk-s3r3byoj";
import { Src } from "./roughjs-geometry";
import { monotoneN, monotoneR, monotoneT } from "./d3-curve-monotone";
import { line } from "./d3-shape-line";
import {
  stepC,
  stepD,
  stepG,
  stepH,
  stepI,
  stepN,
  stepR,
  stepT,
  stepUnderscore,
} from "./d3-shape-curves";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DL, chunkABZYJK2DV } from "./katex-auto-render";
import { chunkJA3XYJ7ZA } from "./chunk-ja3xyj7z";
import {
  chunkHN2XXSSUN,
  chunkHN2XXSSUR,
  chunkHN2XXSSUT,
} from "./mermaid-relation-markers";
import { chunkCVBHYZKI } from "./mermaid-subgraph-title-margins";
import { chunkATLVNIR6I, chunkATLVNIR6A } from "./chunk-atlvnir6";
import rough from "roughjs";
import { chunkJZLCHNYAO } from "./chunk-jzlchnya";
var chunkQXUST7PYValue1 = chunkAGHRB4JFN(
    (
      chunkQXUST7PYParam80,
      chunkQXUST7PYParam81,
      chunkQXUST7PYParam82,
      chunkQXUST7PYParam83,
      chunkQXUST7PYParam84,
      chunkQXUST7PYParam85,
    ) => {
      chunkQXUST7PYParam81.arrowTypeStart &&
        chunkQXUST7PYValue3(
          chunkQXUST7PYParam80,
          "start",
          chunkQXUST7PYParam81.arrowTypeStart,
          chunkQXUST7PYParam82,
          chunkQXUST7PYParam83,
          chunkQXUST7PYParam84,
          chunkQXUST7PYParam85,
        );
      chunkQXUST7PYParam81.arrowTypeEnd &&
        chunkQXUST7PYValue3(
          chunkQXUST7PYParam80,
          "end",
          chunkQXUST7PYParam81.arrowTypeEnd,
          chunkQXUST7PYParam82,
          chunkQXUST7PYParam83,
          chunkQXUST7PYParam84,
          chunkQXUST7PYParam85,
        );
    },
    "addEdgeMarkers",
  ),
  chunkQXUST7PYValue2 = {
    arrow_cross: {
      type: "cross",
      fill: false,
    },
    arrow_point: {
      type: "point",
      fill: true,
    },
    arrow_barb: {
      type: "barb",
      fill: true,
    },
    arrow_circle: {
      type: "circle",
      fill: false,
    },
    aggregation: {
      type: "aggregation",
      fill: false,
    },
    extension: {
      type: "extension",
      fill: false,
    },
    composition: {
      type: "composition",
      fill: true,
    },
    dependency: {
      type: "dependency",
      fill: true,
    },
    lollipop: {
      type: "lollipop",
      fill: false,
    },
    only_one: {
      type: "onlyOne",
      fill: false,
    },
    zero_or_one: {
      type: "zeroOrOne",
      fill: false,
    },
    one_or_more: {
      type: "oneOrMore",
      fill: false,
    },
    zero_or_more: {
      type: "zeroOrMore",
      fill: false,
    },
    requirement_arrow: {
      type: "requirement_arrow",
      fill: false,
    },
    requirement_contains: {
      type: "requirement_contains",
      fill: false,
    },
  },
  chunkQXUST7PYValue3 = chunkAGHRB4JFN(
    (
      chunkQXUST7PYParam55,
      chunkQXUST7PYParam56,
      chunkQXUST7PYParam57,
      chunkQXUST7PYParam58,
      chunkQXUST7PYParam59,
      chunkQXUST7PYParam60,
      chunkQXUST7PYParam61,
    ) => {
      let chunkQXUST7PYValue73 = chunkQXUST7PYValue2[chunkQXUST7PYParam57];
      if (!chunkQXUST7PYValue73) {
        chunkAGHRB4JFR.warn(`Unknown arrow type: ${chunkQXUST7PYParam57}`);
        return;
      }
      let chunkQXUST7PYValue74 = `${chunkQXUST7PYParam59}_${chunkQXUST7PYParam60}-${chunkQXUST7PYValue73.type}${chunkQXUST7PYParam56 === "start" ? "Start" : "End"}`;
      if (chunkQXUST7PYParam61 && chunkQXUST7PYParam61.trim() !== "") {
        let chunkQXUST7PYValue99 = `${chunkQXUST7PYValue74}_${chunkQXUST7PYParam61.replace(/[^\dA-Za-z]/g, "_")}`;
        if (!document.getElementById(chunkQXUST7PYValue99)) {
          let chunkQXUST7PYValue131 =
            document.getElementById(chunkQXUST7PYValue74);
          if (chunkQXUST7PYValue131) {
            let chunkQXUST7PYValue149 = chunkQXUST7PYValue131.cloneNode(true);
            chunkQXUST7PYValue149.id = chunkQXUST7PYValue99;
            chunkQXUST7PYValue149
              .querySelectorAll("path, circle, line")
              .forEach((item) => {
                item.setAttribute("stroke", chunkQXUST7PYParam61);
                chunkQXUST7PYValue73.fill &&
                  item.setAttribute("fill", chunkQXUST7PYParam61);
              });
            chunkQXUST7PYValue131.parentNode?.appendChild(
              chunkQXUST7PYValue149,
            );
          }
        }
        chunkQXUST7PYParam55.attr(
          `marker-${chunkQXUST7PYParam56}`,
          `url(${chunkQXUST7PYParam58}#${chunkQXUST7PYValue99})`,
        );
      } else
        chunkQXUST7PYParam55.attr(
          `marker-${chunkQXUST7PYParam56}`,
          `url(${chunkQXUST7PYParam58}#${chunkQXUST7PYValue74})`,
        );
    },
    "addEdgeMarker",
  ),
  chunkQXUST7PYValue4 = new Map(),
  chunkQXUST7PYValue5 = new Map(),
  chunkQXUST7PYValue6 = chunkAGHRB4JFN(
    (chunkQXUST7PYParam98) =>
      chunkQXUST7PYParam98
        ? chunkQXUST7PYParam98.reduce(
            (accumulator, current) => accumulator + ";" + current,
            "",
          )
        : "",
    "getLabelStyles",
  );
export const chunkQXUST7PYT = chunkAGHRB4JFN(() => {
  chunkQXUST7PYValue4.clear();
  chunkQXUST7PYValue5.clear();
}, "clear");
export const chunkQXUST7PYR = chunkAGHRB4JFN(
  async (chunkQXUST7PYParam9, chunkQXUST7PYParam10) => {
    let chunkQXUST7PYValue28 = chunkABZYJK2DV(
        _chunkABZYJK2DL().flowchart.htmlLabels,
      ),
      { labelStyles } = chunkATLVNIR6I(chunkQXUST7PYParam10);
    chunkQXUST7PYParam10.labelStyle = labelStyles;
    let chunkQXUST7PYValue29 = await chunkJA3XYJ7ZA(
      chunkQXUST7PYParam9,
      chunkQXUST7PYParam10.label,
      {
        style: chunkQXUST7PYParam10.labelStyle,
        useHtmlLabels: chunkQXUST7PYValue28,
        addSvgBackground: true,
        isNode: false,
      },
    );
    chunkAGHRB4JFR.info(
      "abc82",
      chunkQXUST7PYParam10,
      chunkQXUST7PYParam10.labelType,
    );
    let chunkQXUST7PYValue30 = chunkQXUST7PYParam9
        .insert("g")
        .attr("class", "edgeLabel"),
      chunkQXUST7PYValue31 = chunkQXUST7PYValue30
        .insert("g")
        .attr("class", "label")
        .attr("data-id", chunkQXUST7PYParam10.id);
    chunkQXUST7PYValue31.node().appendChild(chunkQXUST7PYValue29);
    let chunkQXUST7PYValue32 = chunkQXUST7PYValue29.getBBox();
    if (chunkQXUST7PYValue28) {
      let chunkQXUST7PYValue173 = chunkQXUST7PYValue29.children[0],
        chunkQXUST7PYValue174 = Src(chunkQXUST7PYValue29);
      chunkQXUST7PYValue32 = chunkQXUST7PYValue173.getBoundingClientRect();
      chunkQXUST7PYValue174.attr("width", chunkQXUST7PYValue32.width);
      chunkQXUST7PYValue174.attr("height", chunkQXUST7PYValue32.height);
    }
    chunkQXUST7PYValue31.attr(
      "transform",
      "translate(" +
        -chunkQXUST7PYValue32.width / 2 +
        ", " +
        -chunkQXUST7PYValue32.height / 2 +
        ")",
    );
    chunkQXUST7PYValue4.set(chunkQXUST7PYParam10.id, chunkQXUST7PYValue30);
    chunkQXUST7PYParam10.width = chunkQXUST7PYValue32.width;
    chunkQXUST7PYParam10.height = chunkQXUST7PYValue32.height;
    let chunkQXUST7PYValue33;
    if (chunkQXUST7PYParam10.startLabelLeft) {
      let chunkQXUST7PYValue114 = await chunkJZLCHNYAO(
          chunkQXUST7PYParam10.startLabelLeft,
          chunkQXUST7PYValue6(chunkQXUST7PYParam10.labelStyle),
        ),
        chunkQXUST7PYValue115 = chunkQXUST7PYParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkQXUST7PYValue116 = chunkQXUST7PYValue115
          .insert("g")
          .attr("class", "inner");
      chunkQXUST7PYValue33 = chunkQXUST7PYValue116
        .node()
        .appendChild(chunkQXUST7PYValue114);
      let chunkQXUST7PYValue117 = chunkQXUST7PYValue114.getBBox();
      chunkQXUST7PYValue116.attr(
        "transform",
        "translate(" +
          -chunkQXUST7PYValue117.width / 2 +
          ", " +
          -chunkQXUST7PYValue117.height / 2 +
          ")",
      );
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id) ||
        chunkQXUST7PYValue5.set(chunkQXUST7PYParam10.id, {});
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id).startLeft =
        chunkQXUST7PYValue115;
      chunkQXUST7PYHelper1(
        chunkQXUST7PYValue33,
        chunkQXUST7PYParam10.startLabelLeft,
      );
    }
    if (chunkQXUST7PYParam10.startLabelRight) {
      let chunkQXUST7PYValue100 = await chunkJZLCHNYAO(
          chunkQXUST7PYParam10.startLabelRight,
          chunkQXUST7PYValue6(chunkQXUST7PYParam10.labelStyle),
        ),
        chunkQXUST7PYValue101 = chunkQXUST7PYParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkQXUST7PYValue102 = chunkQXUST7PYValue101
          .insert("g")
          .attr("class", "inner");
      chunkQXUST7PYValue33 = chunkQXUST7PYValue101
        .node()
        .appendChild(chunkQXUST7PYValue100);
      chunkQXUST7PYValue102.node().appendChild(chunkQXUST7PYValue100);
      let chunkQXUST7PYValue103 = chunkQXUST7PYValue100.getBBox();
      chunkQXUST7PYValue102.attr(
        "transform",
        "translate(" +
          -chunkQXUST7PYValue103.width / 2 +
          ", " +
          -chunkQXUST7PYValue103.height / 2 +
          ")",
      );
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id) ||
        chunkQXUST7PYValue5.set(chunkQXUST7PYParam10.id, {});
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id).startRight =
        chunkQXUST7PYValue101;
      chunkQXUST7PYHelper1(
        chunkQXUST7PYValue33,
        chunkQXUST7PYParam10.startLabelRight,
      );
    }
    if (chunkQXUST7PYParam10.endLabelLeft) {
      let chunkQXUST7PYValue108 = await chunkJZLCHNYAO(
          chunkQXUST7PYParam10.endLabelLeft,
          chunkQXUST7PYValue6(chunkQXUST7PYParam10.labelStyle),
        ),
        chunkQXUST7PYValue109 = chunkQXUST7PYParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkQXUST7PYValue110 = chunkQXUST7PYValue109
          .insert("g")
          .attr("class", "inner");
      chunkQXUST7PYValue33 = chunkQXUST7PYValue110
        .node()
        .appendChild(chunkQXUST7PYValue108);
      let chunkQXUST7PYValue111 = chunkQXUST7PYValue108.getBBox();
      chunkQXUST7PYValue110.attr(
        "transform",
        "translate(" +
          -chunkQXUST7PYValue111.width / 2 +
          ", " +
          -chunkQXUST7PYValue111.height / 2 +
          ")",
      );
      chunkQXUST7PYValue109.node().appendChild(chunkQXUST7PYValue108);
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id) ||
        chunkQXUST7PYValue5.set(chunkQXUST7PYParam10.id, {});
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id).endLeft =
        chunkQXUST7PYValue109;
      chunkQXUST7PYHelper1(
        chunkQXUST7PYValue33,
        chunkQXUST7PYParam10.endLabelLeft,
      );
    }
    if (chunkQXUST7PYParam10.endLabelRight) {
      let chunkQXUST7PYValue104 = await chunkJZLCHNYAO(
          chunkQXUST7PYParam10.endLabelRight,
          chunkQXUST7PYValue6(chunkQXUST7PYParam10.labelStyle),
        ),
        chunkQXUST7PYValue105 = chunkQXUST7PYParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkQXUST7PYValue106 = chunkQXUST7PYValue105
          .insert("g")
          .attr("class", "inner");
      chunkQXUST7PYValue33 = chunkQXUST7PYValue106
        .node()
        .appendChild(chunkQXUST7PYValue104);
      let chunkQXUST7PYValue107 = chunkQXUST7PYValue104.getBBox();
      chunkQXUST7PYValue106.attr(
        "transform",
        "translate(" +
          -chunkQXUST7PYValue107.width / 2 +
          ", " +
          -chunkQXUST7PYValue107.height / 2 +
          ")",
      );
      chunkQXUST7PYValue105.node().appendChild(chunkQXUST7PYValue104);
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id) ||
        chunkQXUST7PYValue5.set(chunkQXUST7PYParam10.id, {});
      chunkQXUST7PYValue5.get(chunkQXUST7PYParam10.id).endRight =
        chunkQXUST7PYValue105;
      chunkQXUST7PYHelper1(
        chunkQXUST7PYValue33,
        chunkQXUST7PYParam10.endLabelRight,
      );
    }
    return chunkQXUST7PYValue29;
  },
  "insertEdgeLabel",
);
function chunkQXUST7PYHelper1(chunkQXUST7PYParam89, chunkQXUST7PYParam90) {
  _chunkABZYJK2DL().flowchart.htmlLabels &&
    chunkQXUST7PYParam89 &&
    ((chunkQXUST7PYParam89.style.width =
      chunkQXUST7PYParam90.length * 9 + "px"),
    (chunkQXUST7PYParam89.style.height = "12px"));
}
chunkAGHRB4JFN(chunkQXUST7PYHelper1, "setTerminalWidth");
var chunkQXUST7PYValue7 = chunkAGHRB4JFN(
    (chunkQXUST7PYParam76, chunkQXUST7PYParam77) => {
      let chunkQXUST7PYValue161 = chunkQXUST7PYParam76.x,
        chunkQXUST7PYValue162 = chunkQXUST7PYParam76.y,
        chunkQXUST7PYValue163 = Math.abs(
          chunkQXUST7PYParam77.x - chunkQXUST7PYValue161,
        ),
        chunkQXUST7PYValue164 = Math.abs(
          chunkQXUST7PYParam77.y - chunkQXUST7PYValue162,
        ),
        chunkQXUST7PYValue165 = chunkQXUST7PYParam76.width / 2,
        chunkQXUST7PYValue166 = chunkQXUST7PYParam76.height / 2;
      return (
        chunkQXUST7PYValue163 >= chunkQXUST7PYValue165 ||
        chunkQXUST7PYValue164 >= chunkQXUST7PYValue166
      );
    },
    "outsideNode",
  ),
  chunkQXUST7PYValue8 = chunkAGHRB4JFN(
    (chunkQXUST7PYParam13, chunkQXUST7PYParam14, chunkQXUST7PYParam15) => {
      chunkAGHRB4JFR.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(chunkQXUST7PYParam14)}
  insidePoint : ${JSON.stringify(chunkQXUST7PYParam15)}
  node        : x:${chunkQXUST7PYParam13.x} y:${chunkQXUST7PYParam13.y} w:${chunkQXUST7PYParam13.width} h:${chunkQXUST7PYParam13.height}`);
      let chunkQXUST7PYValue35 = chunkQXUST7PYParam13.x,
        chunkQXUST7PYValue36 = chunkQXUST7PYParam13.y,
        chunkQXUST7PYValue37 = Math.abs(
          chunkQXUST7PYValue35 - chunkQXUST7PYParam15.x,
        ),
        chunkQXUST7PYValue38 = chunkQXUST7PYParam13.width / 2,
        chunkQXUST7PYValue39 =
          chunkQXUST7PYParam15.x < chunkQXUST7PYParam14.x
            ? chunkQXUST7PYValue38 - chunkQXUST7PYValue37
            : chunkQXUST7PYValue38 + chunkQXUST7PYValue37,
        chunkQXUST7PYValue40 = chunkQXUST7PYParam13.height / 2,
        chunkQXUST7PYValue41 = Math.abs(
          chunkQXUST7PYParam14.y - chunkQXUST7PYParam15.y,
        ),
        chunkQXUST7PYValue42 = Math.abs(
          chunkQXUST7PYParam14.x - chunkQXUST7PYParam15.x,
        );
      if (
        Math.abs(chunkQXUST7PYValue36 - chunkQXUST7PYParam14.y) *
          chunkQXUST7PYValue38 >
        Math.abs(chunkQXUST7PYValue35 - chunkQXUST7PYParam14.x) *
          chunkQXUST7PYValue40
      ) {
        let chunkQXUST7PYValue127 =
          chunkQXUST7PYParam15.y < chunkQXUST7PYParam14.y
            ? chunkQXUST7PYParam14.y -
              chunkQXUST7PYValue40 -
              chunkQXUST7PYValue36
            : chunkQXUST7PYValue36 -
              chunkQXUST7PYValue40 -
              chunkQXUST7PYParam14.y;
        chunkQXUST7PYValue39 =
          (chunkQXUST7PYValue42 * chunkQXUST7PYValue127) / chunkQXUST7PYValue41;
        let chunkQXUST7PYValue128 = {
          x:
            chunkQXUST7PYParam15.x < chunkQXUST7PYParam14.x
              ? chunkQXUST7PYParam15.x + chunkQXUST7PYValue39
              : chunkQXUST7PYParam15.x -
                chunkQXUST7PYValue42 +
                chunkQXUST7PYValue39,
          y:
            chunkQXUST7PYParam15.y < chunkQXUST7PYParam14.y
              ? chunkQXUST7PYParam15.y +
                chunkQXUST7PYValue41 -
                chunkQXUST7PYValue127
              : chunkQXUST7PYParam15.y -
                chunkQXUST7PYValue41 +
                chunkQXUST7PYValue127,
        };
        return (
          chunkQXUST7PYValue39 === 0 &&
            ((chunkQXUST7PYValue128.x = chunkQXUST7PYParam14.x),
            (chunkQXUST7PYValue128.y = chunkQXUST7PYParam14.y)),
          chunkQXUST7PYValue42 === 0 &&
            (chunkQXUST7PYValue128.x = chunkQXUST7PYParam14.x),
          chunkQXUST7PYValue41 === 0 &&
            (chunkQXUST7PYValue128.y = chunkQXUST7PYParam14.y),
          chunkAGHRB4JFR.debug(
            `abc89 top/bottom calc, Q ${chunkQXUST7PYValue41}, q ${chunkQXUST7PYValue127}, R ${chunkQXUST7PYValue42}, r ${chunkQXUST7PYValue39}`,
            chunkQXUST7PYValue128,
          ),
          chunkQXUST7PYValue128
        );
      } else {
        chunkQXUST7PYValue39 =
          chunkQXUST7PYParam15.x < chunkQXUST7PYParam14.x
            ? chunkQXUST7PYParam14.x -
              chunkQXUST7PYValue38 -
              chunkQXUST7PYValue35
            : chunkQXUST7PYValue35 -
              chunkQXUST7PYValue38 -
              chunkQXUST7PYParam14.x;
        let chunkQXUST7PYValue121 =
            (chunkQXUST7PYValue41 * chunkQXUST7PYValue39) /
            chunkQXUST7PYValue42,
          chunkQXUST7PYValue122 =
            chunkQXUST7PYParam15.x < chunkQXUST7PYParam14.x
              ? chunkQXUST7PYParam15.x +
                chunkQXUST7PYValue42 -
                chunkQXUST7PYValue39
              : chunkQXUST7PYParam15.x -
                chunkQXUST7PYValue42 +
                chunkQXUST7PYValue39,
          chunkQXUST7PYValue123 =
            chunkQXUST7PYParam15.y < chunkQXUST7PYParam14.y
              ? chunkQXUST7PYParam15.y + chunkQXUST7PYValue121
              : chunkQXUST7PYParam15.y - chunkQXUST7PYValue121;
        return (
          chunkAGHRB4JFR.debug(
            `sides calc abc89, Q ${chunkQXUST7PYValue41}, q ${chunkQXUST7PYValue121}, R ${chunkQXUST7PYValue42}, r ${chunkQXUST7PYValue39}`,
            {
              _x: chunkQXUST7PYValue122,
              _y: chunkQXUST7PYValue123,
            },
          ),
          chunkQXUST7PYValue39 === 0 &&
            ((chunkQXUST7PYValue122 = chunkQXUST7PYParam14.x),
            (chunkQXUST7PYValue123 = chunkQXUST7PYParam14.y)),
          chunkQXUST7PYValue42 === 0 &&
            (chunkQXUST7PYValue122 = chunkQXUST7PYParam14.x),
          chunkQXUST7PYValue41 === 0 &&
            (chunkQXUST7PYValue123 = chunkQXUST7PYParam14.y),
          {
            x: chunkQXUST7PYValue122,
            y: chunkQXUST7PYValue123,
          }
        );
      }
    },
    "intersection",
  ),
  chunkQXUST7PYValue9 = chunkAGHRB4JFN(
    (chunkQXUST7PYParam62, chunkQXUST7PYParam63) => {
      chunkAGHRB4JFR.warn(
        "abc88 cutPathAtIntersect",
        chunkQXUST7PYParam62,
        chunkQXUST7PYParam63,
      );
      let chunkQXUST7PYValue93 = [],
        chunkQXUST7PYValue94 = chunkQXUST7PYParam62[0],
        chunkQXUST7PYValue95 = false;
      return (
        chunkQXUST7PYParam62.forEach((item) => {
          if (
            (chunkAGHRB4JFR.info(
              "abc88 checking point",
              item,
              chunkQXUST7PYParam63,
            ),
            !chunkQXUST7PYValue7(chunkQXUST7PYParam63, item) &&
              !chunkQXUST7PYValue95)
          ) {
            let chunkQXUST7PYValue129 = chunkQXUST7PYValue8(
              chunkQXUST7PYParam63,
              chunkQXUST7PYValue94,
              item,
            );
            chunkAGHRB4JFR.debug(
              "abc88 inside",
              item,
              chunkQXUST7PYValue94,
              chunkQXUST7PYValue129,
            );
            chunkAGHRB4JFR.debug(
              "abc88 intersection",
              chunkQXUST7PYValue129,
              chunkQXUST7PYParam63,
            );
            let chunkQXUST7PYValue130 = false;
            chunkQXUST7PYValue93.forEach((_item) => {
              chunkQXUST7PYValue130 ||=
                _item.x === chunkQXUST7PYValue129.x &&
                _item.y === chunkQXUST7PYValue129.y;
            });
            chunkQXUST7PYValue93.some(
              (_item) =>
                _item.x === chunkQXUST7PYValue129.x &&
                _item.y === chunkQXUST7PYValue129.y,
            )
              ? chunkAGHRB4JFR.warn(
                  "abc88 no intersect",
                  chunkQXUST7PYValue129,
                  chunkQXUST7PYValue93,
                )
              : chunkQXUST7PYValue93.push(chunkQXUST7PYValue129);
            chunkQXUST7PYValue95 = true;
          } else {
            chunkAGHRB4JFR.warn("abc88 outside", item, chunkQXUST7PYValue94);
            chunkQXUST7PYValue94 = item;
            chunkQXUST7PYValue95 || chunkQXUST7PYValue93.push(item);
          }
        }),
        chunkAGHRB4JFR.debug("returning points", chunkQXUST7PYValue93),
        chunkQXUST7PYValue93
      );
    },
    "cutPathAtIntersect",
  );
export const chunkQXUST7PYA = chunkAGHRB4JFN(
  (chunkQXUST7PYParam11, chunkQXUST7PYParam12) => {
    chunkAGHRB4JFR.debug(
      "Moving label abc88 ",
      chunkQXUST7PYParam11.id,
      chunkQXUST7PYParam11.label,
      chunkQXUST7PYValue4.get(chunkQXUST7PYParam11.id),
      chunkQXUST7PYParam12,
    );
    let chunkQXUST7PYValue34 = chunkQXUST7PYParam12.updatedPath
        ? chunkQXUST7PYParam12.updatedPath
        : chunkQXUST7PYParam12.originalPath,
      { subGraphTitleTotalMargin } = chunkCVBHYZKI(_chunkABZYJK2DL());
    if (chunkQXUST7PYParam11.label) {
      let chunkQXUST7PYValue118 = chunkQXUST7PYValue4.get(
          chunkQXUST7PYParam11.id,
        ),
        chunkQXUST7PYValue119 = chunkQXUST7PYParam11.x,
        chunkQXUST7PYValue120 = chunkQXUST7PYParam11.y;
      if (chunkQXUST7PYValue34) {
        let chunkQXUST7PYValue148 =
          chunkS3R3BYOJC.calcLabelPosition(chunkQXUST7PYValue34);
        chunkAGHRB4JFR.debug(
          "Moving label " + chunkQXUST7PYParam11.label + " from (",
          chunkQXUST7PYValue119,
          ",",
          chunkQXUST7PYValue120,
          ") to (",
          chunkQXUST7PYValue148.x,
          ",",
          chunkQXUST7PYValue148.y,
          ") abc88",
        );
        chunkQXUST7PYParam12.updatedPath &&
          ((chunkQXUST7PYValue119 = chunkQXUST7PYValue148.x),
          (chunkQXUST7PYValue120 = chunkQXUST7PYValue148.y));
      }
      chunkQXUST7PYValue118.attr(
        "transform",
        `translate(${chunkQXUST7PYValue119}, ${chunkQXUST7PYValue120 + subGraphTitleTotalMargin / 2})`,
      );
    }
    if (chunkQXUST7PYParam11.startLabelLeft) {
      let chunkQXUST7PYValue139 = chunkQXUST7PYValue5.get(
          chunkQXUST7PYParam11.id,
        ).startLeft,
        chunkQXUST7PYValue140 = chunkQXUST7PYParam11.x,
        chunkQXUST7PYValue141 = chunkQXUST7PYParam11.y;
      if (chunkQXUST7PYValue34) {
        let chunkQXUST7PYValue170 = chunkS3R3BYOJC.calcTerminalLabelPosition(
          chunkQXUST7PYParam11.arrowTypeStart ? 10 : 0,
          "start_left",
          chunkQXUST7PYValue34,
        );
        chunkQXUST7PYValue140 = chunkQXUST7PYValue170.x;
        chunkQXUST7PYValue141 = chunkQXUST7PYValue170.y;
      }
      chunkQXUST7PYValue139.attr(
        "transform",
        `translate(${chunkQXUST7PYValue140}, ${chunkQXUST7PYValue141})`,
      );
    }
    if (chunkQXUST7PYParam11.startLabelRight) {
      let chunkQXUST7PYValue136 = chunkQXUST7PYValue5.get(
          chunkQXUST7PYParam11.id,
        ).startRight,
        chunkQXUST7PYValue137 = chunkQXUST7PYParam11.x,
        chunkQXUST7PYValue138 = chunkQXUST7PYParam11.y;
      if (chunkQXUST7PYValue34) {
        let chunkQXUST7PYValue169 = chunkS3R3BYOJC.calcTerminalLabelPosition(
          chunkQXUST7PYParam11.arrowTypeStart ? 10 : 0,
          "start_right",
          chunkQXUST7PYValue34,
        );
        chunkQXUST7PYValue137 = chunkQXUST7PYValue169.x;
        chunkQXUST7PYValue138 = chunkQXUST7PYValue169.y;
      }
      chunkQXUST7PYValue136.attr(
        "transform",
        `translate(${chunkQXUST7PYValue137}, ${chunkQXUST7PYValue138})`,
      );
    }
    if (chunkQXUST7PYParam11.endLabelLeft) {
      let chunkQXUST7PYValue145 = chunkQXUST7PYValue5.get(
          chunkQXUST7PYParam11.id,
        ).endLeft,
        chunkQXUST7PYValue146 = chunkQXUST7PYParam11.x,
        chunkQXUST7PYValue147 = chunkQXUST7PYParam11.y;
      if (chunkQXUST7PYValue34) {
        let chunkQXUST7PYValue172 = chunkS3R3BYOJC.calcTerminalLabelPosition(
          chunkQXUST7PYParam11.arrowTypeEnd ? 10 : 0,
          "end_left",
          chunkQXUST7PYValue34,
        );
        chunkQXUST7PYValue146 = chunkQXUST7PYValue172.x;
        chunkQXUST7PYValue147 = chunkQXUST7PYValue172.y;
      }
      chunkQXUST7PYValue145.attr(
        "transform",
        `translate(${chunkQXUST7PYValue146}, ${chunkQXUST7PYValue147})`,
      );
    }
    if (chunkQXUST7PYParam11.endLabelRight) {
      let chunkQXUST7PYValue142 = chunkQXUST7PYValue5.get(
          chunkQXUST7PYParam11.id,
        ).endRight,
        chunkQXUST7PYValue143 = chunkQXUST7PYParam11.x,
        chunkQXUST7PYValue144 = chunkQXUST7PYParam11.y;
      if (chunkQXUST7PYValue34) {
        let chunkQXUST7PYValue171 = chunkS3R3BYOJC.calcTerminalLabelPosition(
          chunkQXUST7PYParam11.arrowTypeEnd ? 10 : 0,
          "end_right",
          chunkQXUST7PYValue34,
        );
        chunkQXUST7PYValue143 = chunkQXUST7PYValue171.x;
        chunkQXUST7PYValue144 = chunkQXUST7PYValue171.y;
      }
      chunkQXUST7PYValue142.attr(
        "transform",
        `translate(${chunkQXUST7PYValue143}, ${chunkQXUST7PYValue144})`,
      );
    }
  },
  "positionEdgeLabel",
);
function chunkQXUST7PYHelper2(chunkQXUST7PYParam69) {
  let chunkQXUST7PYValue112 = [],
    chunkQXUST7PYValue113 = [];
  for (
    let chunkQXUST7PYValue132 = 1;
    chunkQXUST7PYValue132 < chunkQXUST7PYParam69.length - 1;
    chunkQXUST7PYValue132++
  ) {
    let chunkQXUST7PYValue133 = chunkQXUST7PYParam69[chunkQXUST7PYValue132 - 1],
      chunkQXUST7PYValue134 = chunkQXUST7PYParam69[chunkQXUST7PYValue132],
      chunkQXUST7PYValue135 = chunkQXUST7PYParam69[chunkQXUST7PYValue132 + 1];
    ((chunkQXUST7PYValue133.x === chunkQXUST7PYValue134.x &&
      chunkQXUST7PYValue134.y === chunkQXUST7PYValue135.y &&
      Math.abs(chunkQXUST7PYValue134.x - chunkQXUST7PYValue135.x) > 5 &&
      Math.abs(chunkQXUST7PYValue134.y - chunkQXUST7PYValue133.y) > 5) ||
      (chunkQXUST7PYValue133.y === chunkQXUST7PYValue134.y &&
        chunkQXUST7PYValue134.x === chunkQXUST7PYValue135.x &&
        Math.abs(chunkQXUST7PYValue134.x - chunkQXUST7PYValue133.x) > 5 &&
        Math.abs(chunkQXUST7PYValue134.y - chunkQXUST7PYValue135.y) > 5)) &&
      (chunkQXUST7PYValue112.push(chunkQXUST7PYValue134),
      chunkQXUST7PYValue113.push(chunkQXUST7PYValue132));
  }
  return {
    cornerPoints: chunkQXUST7PYValue112,
    cornerPointPositions: chunkQXUST7PYValue113,
  };
}
chunkAGHRB4JFN(chunkQXUST7PYHelper2, "extractCornerPoints");
var chunkQXUST7PYValue10 = chunkAGHRB4JFN(function (
    chunkQXUST7PYParam86,
    chunkQXUST7PYParam87,
    chunkQXUST7PYParam88,
  ) {
    let chunkQXUST7PYValue175 = chunkQXUST7PYParam87.x - chunkQXUST7PYParam86.x,
      chunkQXUST7PYValue176 = chunkQXUST7PYParam87.y - chunkQXUST7PYParam86.y,
      chunkQXUST7PYValue177 =
        chunkQXUST7PYParam88 /
        Math.sqrt(
          chunkQXUST7PYValue175 * chunkQXUST7PYValue175 +
            chunkQXUST7PYValue176 * chunkQXUST7PYValue176,
        );
    return {
      x: chunkQXUST7PYParam87.x - chunkQXUST7PYValue177 * chunkQXUST7PYValue175,
      y: chunkQXUST7PYParam87.y - chunkQXUST7PYValue177 * chunkQXUST7PYValue176,
    };
  }, "findAdjacentPoint"),
  chunkQXUST7PYValue11 = chunkAGHRB4JFN(function (chunkQXUST7PYParam19) {
    let { cornerPointPositions } = chunkQXUST7PYHelper2(chunkQXUST7PYParam19),
      chunkQXUST7PYValue43 = [];
    for (
      let chunkQXUST7PYValue54 = 0;
      chunkQXUST7PYValue54 < chunkQXUST7PYParam19.length;
      chunkQXUST7PYValue54++
    )
      if (cornerPointPositions.includes(chunkQXUST7PYValue54)) {
        let chunkQXUST7PYValue60 =
            chunkQXUST7PYParam19[chunkQXUST7PYValue54 - 1],
          chunkQXUST7PYValue61 = chunkQXUST7PYParam19[chunkQXUST7PYValue54 + 1],
          chunkQXUST7PYValue62 = chunkQXUST7PYParam19[chunkQXUST7PYValue54],
          chunkQXUST7PYValue63 = chunkQXUST7PYValue10(
            chunkQXUST7PYValue60,
            chunkQXUST7PYValue62,
            5,
          ),
          chunkQXUST7PYValue64 = chunkQXUST7PYValue10(
            chunkQXUST7PYValue61,
            chunkQXUST7PYValue62,
            5,
          ),
          chunkQXUST7PYValue65 =
            chunkQXUST7PYValue64.x - chunkQXUST7PYValue63.x,
          chunkQXUST7PYValue66 =
            chunkQXUST7PYValue64.y - chunkQXUST7PYValue63.y;
        chunkQXUST7PYValue43.push(chunkQXUST7PYValue63);
        let chunkQXUST7PYValue67 = Math.sqrt(2) * 2,
          chunkQXUST7PYValue68 = {
            x: chunkQXUST7PYValue62.x,
            y: chunkQXUST7PYValue62.y,
          };
        Math.abs(chunkQXUST7PYValue61.x - chunkQXUST7PYValue60.x) > 10 &&
        Math.abs(chunkQXUST7PYValue61.y - chunkQXUST7PYValue60.y) >= 10
          ? (chunkAGHRB4JFR.debug(
              "Corner point fixing",
              Math.abs(chunkQXUST7PYValue61.x - chunkQXUST7PYValue60.x),
              Math.abs(chunkQXUST7PYValue61.y - chunkQXUST7PYValue60.y),
            ),
            (chunkQXUST7PYValue68 =
              chunkQXUST7PYValue62.x === chunkQXUST7PYValue63.x
                ? {
                    x:
                      chunkQXUST7PYValue65 < 0
                        ? chunkQXUST7PYValue63.x - 5 + chunkQXUST7PYValue67
                        : chunkQXUST7PYValue63.x + 5 - chunkQXUST7PYValue67,
                    y:
                      chunkQXUST7PYValue66 < 0
                        ? chunkQXUST7PYValue63.y - chunkQXUST7PYValue67
                        : chunkQXUST7PYValue63.y + chunkQXUST7PYValue67,
                  }
                : {
                    x:
                      chunkQXUST7PYValue65 < 0
                        ? chunkQXUST7PYValue63.x - chunkQXUST7PYValue67
                        : chunkQXUST7PYValue63.x + chunkQXUST7PYValue67,
                    y:
                      chunkQXUST7PYValue66 < 0
                        ? chunkQXUST7PYValue63.y - 5 + chunkQXUST7PYValue67
                        : chunkQXUST7PYValue63.y + 5 - chunkQXUST7PYValue67,
                  }))
          : chunkAGHRB4JFR.debug(
              "Corner point skipping fixing",
              Math.abs(chunkQXUST7PYValue61.x - chunkQXUST7PYValue60.x),
              Math.abs(chunkQXUST7PYValue61.y - chunkQXUST7PYValue60.y),
            );
        chunkQXUST7PYValue43.push(chunkQXUST7PYValue68, chunkQXUST7PYValue64);
      } else
        chunkQXUST7PYValue43.push(chunkQXUST7PYParam19[chunkQXUST7PYValue54]);
    return chunkQXUST7PYValue43;
  }, "fixCorners"),
  chunkQXUST7PYValue12 = chunkAGHRB4JFN(
    (chunkQXUST7PYParam91, chunkQXUST7PYParam92, chunkQXUST7PYParam93) => {
      let chunkQXUST7PYValue178 =
          chunkQXUST7PYParam91 - chunkQXUST7PYParam92 - chunkQXUST7PYParam93,
        chunkQXUST7PYValue179 = Math.floor(chunkQXUST7PYValue178 / 4);
      return `0 ${chunkQXUST7PYParam92} ${Array(chunkQXUST7PYValue179).fill("2 2").join(" ")} ${chunkQXUST7PYParam93}`;
    },
    "generateDashArray",
  );
export const chunkQXUST7PYN = chunkAGHRB4JFN(function (
  chunkQXUST7PYParam1,
  chunkQXUST7PYParam2,
  chunkQXUST7PYParam3,
  chunkQXUST7PYParam4,
  chunkQXUST7PYParam5,
  chunkQXUST7PYParam6,
  chunkQXUST7PYParam7,
  chunkQXUST7PYParam8 = false,
) {
  let { handDrawnSeed } = _chunkABZYJK2DL(),
    chunkQXUST7PYValue15 = chunkQXUST7PYParam2.points,
    chunkQXUST7PYValue16 = false,
    _chunkQXUST7PYT = chunkQXUST7PYParam5;
  var chunkQXUST7PYValue17 = chunkQXUST7PYParam6;
  let _chunkQXUST7PYR = [];
  for (let chunkQXUST7PYValue180 in chunkQXUST7PYParam2.cssCompiledStyles)
    chunkATLVNIR6A(chunkQXUST7PYValue180) ||
      _chunkQXUST7PYR.push(
        chunkQXUST7PYParam2.cssCompiledStyles[chunkQXUST7PYValue180],
      );
  chunkAGHRB4JFR.debug(
    "UIO intersect check",
    chunkQXUST7PYParam2.points,
    chunkQXUST7PYValue17.x,
    _chunkQXUST7PYT.x,
  );
  chunkQXUST7PYValue17.intersect &&
    _chunkQXUST7PYT.intersect &&
    !chunkQXUST7PYParam8 &&
    ((chunkQXUST7PYValue15 = chunkQXUST7PYValue15.slice(
      1,
      chunkQXUST7PYParam2.points.length - 1,
    )),
    chunkQXUST7PYValue15.unshift(
      _chunkQXUST7PYT.intersect(chunkQXUST7PYValue15[0]),
    ),
    chunkAGHRB4JFR.debug(
      "Last point UIO",
      chunkQXUST7PYParam2.start,
      "-->",
      chunkQXUST7PYParam2.end,
      chunkQXUST7PYValue15[chunkQXUST7PYValue15.length - 1],
      chunkQXUST7PYValue17,
      chunkQXUST7PYValue17.intersect(
        chunkQXUST7PYValue15[chunkQXUST7PYValue15.length - 1],
      ),
    ),
    chunkQXUST7PYValue15.push(
      chunkQXUST7PYValue17.intersect(
        chunkQXUST7PYValue15[chunkQXUST7PYValue15.length - 1],
      ),
    ));
  let chunkQXUST7PYValue18 = btoa(JSON.stringify(chunkQXUST7PYValue15));
  chunkQXUST7PYParam2.toCluster &&
    (chunkAGHRB4JFR.info(
      "to cluster abc88",
      chunkQXUST7PYParam3.get(chunkQXUST7PYParam2.toCluster),
    ),
    (chunkQXUST7PYValue15 = chunkQXUST7PYValue9(
      chunkQXUST7PYParam2.points,
      chunkQXUST7PYParam3.get(chunkQXUST7PYParam2.toCluster).node,
    )),
    (chunkQXUST7PYValue16 = true));
  chunkQXUST7PYParam2.fromCluster &&
    (chunkAGHRB4JFR.debug(
      "from cluster abc88",
      chunkQXUST7PYParam3.get(chunkQXUST7PYParam2.fromCluster),
      JSON.stringify(chunkQXUST7PYValue15, null, 2),
    ),
    (chunkQXUST7PYValue15 = chunkQXUST7PYValue9(
      chunkQXUST7PYValue15.reverse(),
      chunkQXUST7PYParam3.get(chunkQXUST7PYParam2.fromCluster).node,
    ).reverse()),
    (chunkQXUST7PYValue16 = true));
  let _chunkQXUST7PYA = chunkQXUST7PYValue15.filter(
    (item) => !Number.isNaN(item.y),
  );
  _chunkQXUST7PYA = chunkQXUST7PYValue11(_chunkQXUST7PYA);
  let chunkQXUST7PYValue19 = stepH;
  switch (((chunkQXUST7PYValue19 = monotoneR), chunkQXUST7PYParam2.curve)) {
    case "linear":
      chunkQXUST7PYValue19 = monotoneR;
      break;
    case "basis":
      chunkQXUST7PYValue19 = stepH;
      break;
    case "cardinal":
      chunkQXUST7PYValue19 = stepD;
      break;
    case "bumpX":
      chunkQXUST7PYValue19 = stepG;
      break;
    case "bumpY":
      chunkQXUST7PYValue19 = stepUnderscore;
      break;
    case "catmullRom":
      chunkQXUST7PYValue19 = stepC;
      break;
    case "monotoneX":
      chunkQXUST7PYValue19 = monotoneT;
      break;
    case "monotoneY":
      chunkQXUST7PYValue19 = monotoneN;
      break;
    case "natural":
      chunkQXUST7PYValue19 = stepI;
      break;
    case "step":
      chunkQXUST7PYValue19 = stepR;
      break;
    case "stepAfter":
      chunkQXUST7PYValue19 = stepT;
      break;
    case "stepBefore":
      chunkQXUST7PYValue19 = stepN;
      break;
    default:
      chunkQXUST7PYValue19 = stepH;
  }
  let { x, y } = chunkHN2XXSSUT(chunkQXUST7PYParam2),
    chunkQXUST7PYValue20 = line().x(x).y(y).curve(chunkQXUST7PYValue19),
    _chunkQXUST7PYN;
  switch (chunkQXUST7PYParam2.thickness) {
    case "normal":
      _chunkQXUST7PYN = "edge-thickness-normal";
      break;
    case "thick":
      _chunkQXUST7PYN = "edge-thickness-thick";
      break;
    case "invisible":
      _chunkQXUST7PYN = "edge-thickness-invisible";
      break;
    default:
      _chunkQXUST7PYN = "edge-thickness-normal";
  }
  switch (chunkQXUST7PYParam2.pattern) {
    case "solid":
      _chunkQXUST7PYN += " edge-pattern-solid";
      break;
    case "dotted":
      _chunkQXUST7PYN += " edge-pattern-dotted";
      break;
    case "dashed":
      _chunkQXUST7PYN += " edge-pattern-dashed";
      break;
    default:
      _chunkQXUST7PYN += " edge-pattern-solid";
  }
  let chunkQXUST7PYValue21,
    chunkQXUST7PYValue22 =
      chunkQXUST7PYParam2.curve === "rounded"
        ? chunkQXUST7PYHelper3(
            chunkQXUST7PYHelper5(_chunkQXUST7PYA, chunkQXUST7PYParam2),
            5,
          )
        : chunkQXUST7PYValue20(_chunkQXUST7PYA),
    chunkQXUST7PYValue23 = Array.isArray(chunkQXUST7PYParam2.style)
      ? chunkQXUST7PYParam2.style
      : [chunkQXUST7PYParam2.style],
    _chunkQXUST7PYI = chunkQXUST7PYValue23.find((item) =>
      item?.startsWith("stroke:"),
    ),
    chunkQXUST7PYValue24 = false;
  if (chunkQXUST7PYParam2.look === "handDrawn") {
    let chunkQXUST7PYValue124 = rough.svg(chunkQXUST7PYParam1);
    Object.assign([], _chunkQXUST7PYA);
    let chunkQXUST7PYValue125 = chunkQXUST7PYValue124.path(
      chunkQXUST7PYValue22,
      {
        roughness: 0.3,
        seed: handDrawnSeed,
      },
    );
    _chunkQXUST7PYN += " transition";
    chunkQXUST7PYValue21 = Src(chunkQXUST7PYValue125)
      .select("path")
      .attr("id", chunkQXUST7PYParam2.id)
      .attr(
        "class",
        " " +
          _chunkQXUST7PYN +
          (chunkQXUST7PYParam2.classes
            ? " " + chunkQXUST7PYParam2.classes
            : ""),
      )
      .attr(
        "style",
        chunkQXUST7PYValue23
          ? chunkQXUST7PYValue23.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
          : "",
      );
    let chunkQXUST7PYValue126 = chunkQXUST7PYValue21.attr("d");
    chunkQXUST7PYValue21.attr("d", chunkQXUST7PYValue126);
    chunkQXUST7PYParam1.node().appendChild(chunkQXUST7PYValue21.node());
  } else {
    let chunkQXUST7PYValue44 = _chunkQXUST7PYR.join(";"),
      chunkQXUST7PYValue45 = chunkQXUST7PYValue23
        ? chunkQXUST7PYValue23.reduce(
            (accumulator, current) => accumulator + current + ";",
            "",
          )
        : "",
      chunkQXUST7PYValue46 = "";
    chunkQXUST7PYParam2.animate &&
      (chunkQXUST7PYValue46 = " edge-animation-fast");
    chunkQXUST7PYParam2.animation &&
      (chunkQXUST7PYValue46 =
        " edge-animation-" + chunkQXUST7PYParam2.animation);
    let chunkQXUST7PYValue47 =
      (chunkQXUST7PYValue44
        ? chunkQXUST7PYValue44 + ";" + chunkQXUST7PYValue45 + ";"
        : chunkQXUST7PYValue45) +
      ";" +
      (chunkQXUST7PYValue23
        ? chunkQXUST7PYValue23.reduce(
            (accumulator, current) => accumulator + ";" + current,
            "",
          )
        : "");
    chunkQXUST7PYValue21 = chunkQXUST7PYParam1
      .append("path")
      .attr("d", chunkQXUST7PYValue22)
      .attr("id", chunkQXUST7PYParam2.id)
      .attr(
        "class",
        " " +
          _chunkQXUST7PYN +
          (chunkQXUST7PYParam2.classes
            ? " " + chunkQXUST7PYParam2.classes
            : "") +
          (chunkQXUST7PYValue46 ?? ""),
      )
      .attr("style", chunkQXUST7PYValue47);
    _chunkQXUST7PYI = chunkQXUST7PYValue47.match(/stroke:([^;]+)/)?.[1];
    chunkQXUST7PYValue24 =
      chunkQXUST7PYParam2.animate === true ||
      !!chunkQXUST7PYParam2.animation ||
      chunkQXUST7PYValue44.includes("animation");
    let chunkQXUST7PYValue48 = chunkQXUST7PYValue21.node(),
      chunkQXUST7PYValue49 =
        typeof chunkQXUST7PYValue48.getTotalLength == "function"
          ? chunkQXUST7PYValue48.getTotalLength()
          : 0,
      chunkQXUST7PYValue50 =
        chunkHN2XXSSUR[chunkQXUST7PYParam2.arrowTypeStart] || 0,
      chunkQXUST7PYValue51 =
        chunkHN2XXSSUR[chunkQXUST7PYParam2.arrowTypeEnd] || 0;
    if (chunkQXUST7PYParam2.look === "neo" && !chunkQXUST7PYValue24) {
      let chunkQXUST7PYValue155 = `stroke-dasharray: ${chunkQXUST7PYParam2.pattern === "dotted" || chunkQXUST7PYParam2.pattern === "dashed" ? chunkQXUST7PYValue12(chunkQXUST7PYValue49, chunkQXUST7PYValue50, chunkQXUST7PYValue51) : `0 ${chunkQXUST7PYValue50} ${chunkQXUST7PYValue49 - chunkQXUST7PYValue50 - chunkQXUST7PYValue51} ${chunkQXUST7PYValue51}`}; stroke-dashoffset: 0;`;
      chunkQXUST7PYValue21.attr(
        "style",
        chunkQXUST7PYValue155 + chunkQXUST7PYValue21.attr("style"),
      );
    }
  }
  chunkQXUST7PYValue21.attr("data-edge", true);
  chunkQXUST7PYValue21.attr("data-et", "edge");
  chunkQXUST7PYValue21.attr("data-id", chunkQXUST7PYParam2.id);
  chunkQXUST7PYValue21.attr("data-points", chunkQXUST7PYValue18);
  chunkQXUST7PYParam2.showPoints &&
    _chunkQXUST7PYA.forEach((item) => {
      chunkQXUST7PYParam1
        .append("circle")
        .style("stroke", "red")
        .style("fill", "red")
        .attr("r", 1)
        .attr("cx", item.x)
        .attr("cy", item.y);
    });
  let chunkQXUST7PYValue25 = "";
  (_chunkABZYJK2DL().flowchart.arrowMarkerAbsolute ||
    _chunkABZYJK2DL().state.arrowMarkerAbsolute) &&
    ((chunkQXUST7PYValue25 =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      window.location.search),
    (chunkQXUST7PYValue25 = chunkQXUST7PYValue25
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)")));
  chunkAGHRB4JFR.info("arrowTypeStart", chunkQXUST7PYParam2.arrowTypeStart);
  chunkAGHRB4JFR.info("arrowTypeEnd", chunkQXUST7PYParam2.arrowTypeEnd);
  chunkQXUST7PYValue1(
    chunkQXUST7PYValue21,
    chunkQXUST7PYParam2,
    chunkQXUST7PYValue25,
    chunkQXUST7PYParam7,
    chunkQXUST7PYParam4,
    _chunkQXUST7PYI,
  );
  let chunkQXUST7PYValue26 = Math.floor(chunkQXUST7PYValue15.length / 2),
    chunkQXUST7PYValue27 = chunkQXUST7PYValue15[chunkQXUST7PYValue26];
  chunkS3R3BYOJC.isLabelCoordinateInPath(
    chunkQXUST7PYValue27,
    chunkQXUST7PYValue21.attr("d"),
  ) || (chunkQXUST7PYValue16 = true);
  let $ = {};
  return (
    chunkQXUST7PYValue16 && ($.updatedPath = chunkQXUST7PYValue15),
    ($.originalPath = chunkQXUST7PYParam2.points),
    $
  );
}, "insertEdge");
function chunkQXUST7PYHelper3(chunkQXUST7PYParam29, chunkQXUST7PYParam30) {
  if (chunkQXUST7PYParam29.length < 2) return "";
  let chunkQXUST7PYValue55 = "",
    chunkQXUST7PYValue56 = chunkQXUST7PYParam29.length;
  for (
    let chunkQXUST7PYValue69 = 0;
    chunkQXUST7PYValue69 < chunkQXUST7PYValue56;
    chunkQXUST7PYValue69++
  ) {
    let chunkQXUST7PYValue70 = chunkQXUST7PYParam29[chunkQXUST7PYValue69],
      chunkQXUST7PYValue71 = chunkQXUST7PYParam29[chunkQXUST7PYValue69 - 1],
      chunkQXUST7PYValue72 = chunkQXUST7PYParam29[chunkQXUST7PYValue69 + 1];
    if (chunkQXUST7PYValue69 === 0)
      chunkQXUST7PYValue55 += `M${chunkQXUST7PYValue70.x},${chunkQXUST7PYValue70.y}`;
    else if (chunkQXUST7PYValue69 === chunkQXUST7PYValue56 - 1)
      chunkQXUST7PYValue55 += `L${chunkQXUST7PYValue70.x},${chunkQXUST7PYValue70.y}`;
    else {
      let chunkQXUST7PYValue75 =
          chunkQXUST7PYValue70.x - chunkQXUST7PYValue71.x,
        chunkQXUST7PYValue76 = chunkQXUST7PYValue70.y - chunkQXUST7PYValue71.y,
        chunkQXUST7PYValue77 = chunkQXUST7PYValue72.x - chunkQXUST7PYValue70.x,
        chunkQXUST7PYValue78 = chunkQXUST7PYValue72.y - chunkQXUST7PYValue70.y,
        chunkQXUST7PYValue79 = Math.hypot(
          chunkQXUST7PYValue75,
          chunkQXUST7PYValue76,
        ),
        chunkQXUST7PYValue80 = Math.hypot(
          chunkQXUST7PYValue77,
          chunkQXUST7PYValue78,
        );
      if (chunkQXUST7PYValue79 < 1e-5 || chunkQXUST7PYValue80 < 1e-5) {
        chunkQXUST7PYValue55 += `L${chunkQXUST7PYValue70.x},${chunkQXUST7PYValue70.y}`;
        continue;
      }
      let chunkQXUST7PYValue81 = chunkQXUST7PYValue75 / chunkQXUST7PYValue79,
        chunkQXUST7PYValue82 = chunkQXUST7PYValue76 / chunkQXUST7PYValue79,
        chunkQXUST7PYValue83 = chunkQXUST7PYValue77 / chunkQXUST7PYValue80,
        chunkQXUST7PYValue84 = chunkQXUST7PYValue78 / chunkQXUST7PYValue80,
        chunkQXUST7PYValue85 =
          chunkQXUST7PYValue81 * chunkQXUST7PYValue83 +
          chunkQXUST7PYValue82 * chunkQXUST7PYValue84,
        chunkQXUST7PYValue86 = Math.max(-1, Math.min(1, chunkQXUST7PYValue85)),
        chunkQXUST7PYValue87 = Math.acos(chunkQXUST7PYValue86);
      if (
        chunkQXUST7PYValue87 < 1e-5 ||
        Math.abs(Math.PI - chunkQXUST7PYValue87) < 1e-5
      ) {
        chunkQXUST7PYValue55 += `L${chunkQXUST7PYValue70.x},${chunkQXUST7PYValue70.y}`;
        continue;
      }
      let chunkQXUST7PYValue88 = Math.min(
          chunkQXUST7PYParam30 / Math.sin(chunkQXUST7PYValue87 / 2),
          chunkQXUST7PYValue79 / 2,
          chunkQXUST7PYValue80 / 2,
        ),
        chunkQXUST7PYValue89 =
          chunkQXUST7PYValue70.x - chunkQXUST7PYValue81 * chunkQXUST7PYValue88,
        chunkQXUST7PYValue90 =
          chunkQXUST7PYValue70.y - chunkQXUST7PYValue82 * chunkQXUST7PYValue88,
        chunkQXUST7PYValue91 =
          chunkQXUST7PYValue70.x + chunkQXUST7PYValue83 * chunkQXUST7PYValue88,
        chunkQXUST7PYValue92 =
          chunkQXUST7PYValue70.y + chunkQXUST7PYValue84 * chunkQXUST7PYValue88;
      chunkQXUST7PYValue55 += `L${chunkQXUST7PYValue89},${chunkQXUST7PYValue90}`;
      chunkQXUST7PYValue55 += `Q${chunkQXUST7PYValue70.x},${chunkQXUST7PYValue70.y} ${chunkQXUST7PYValue91},${chunkQXUST7PYValue92}`;
    }
  }
  return chunkQXUST7PYValue55;
}
chunkAGHRB4JFN(chunkQXUST7PYHelper3, "generateRoundedPath");
function chunkQXUST7PYHelper4(chunkQXUST7PYParam78, chunkQXUST7PYParam79) {
  if (!chunkQXUST7PYParam78 || !chunkQXUST7PYParam79)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  let chunkQXUST7PYValue167 = chunkQXUST7PYParam79.x - chunkQXUST7PYParam78.x,
    chunkQXUST7PYValue168 = chunkQXUST7PYParam79.y - chunkQXUST7PYParam78.y;
  return {
    angle: Math.atan2(chunkQXUST7PYValue168, chunkQXUST7PYValue167),
    deltaX: chunkQXUST7PYValue167,
    deltaY: chunkQXUST7PYValue168,
  };
}
chunkAGHRB4JFN(chunkQXUST7PYHelper4, "calculateDeltaAndAngle");
function chunkQXUST7PYHelper5(chunkQXUST7PYParam67, chunkQXUST7PYParam68) {
  let chunkQXUST7PYValue97 = chunkQXUST7PYParam67.map((item) => ({
    ...item,
  }));
  if (
    chunkQXUST7PYParam67.length >= 2 &&
    chunkHN2XXSSUN[chunkQXUST7PYParam68.arrowTypeStart]
  ) {
    let chunkQXUST7PYValue156 =
        chunkHN2XXSSUN[chunkQXUST7PYParam68.arrowTypeStart],
      chunkQXUST7PYValue157 = chunkQXUST7PYParam67[0],
      chunkQXUST7PYValue158 = chunkQXUST7PYParam67[1],
      { angle } = chunkQXUST7PYHelper4(
        chunkQXUST7PYValue157,
        chunkQXUST7PYValue158,
      ),
      chunkQXUST7PYValue159 = chunkQXUST7PYValue156 * Math.cos(angle),
      chunkQXUST7PYValue160 = chunkQXUST7PYValue156 * Math.sin(angle);
    chunkQXUST7PYValue97[0].x = chunkQXUST7PYValue157.x + chunkQXUST7PYValue159;
    chunkQXUST7PYValue97[0].y = chunkQXUST7PYValue157.y + chunkQXUST7PYValue160;
  }
  let chunkQXUST7PYValue98 = chunkQXUST7PYParam67.length;
  if (
    chunkQXUST7PYValue98 >= 2 &&
    chunkHN2XXSSUN[chunkQXUST7PYParam68.arrowTypeEnd]
  ) {
    let chunkQXUST7PYValue150 =
        chunkHN2XXSSUN[chunkQXUST7PYParam68.arrowTypeEnd],
      chunkQXUST7PYValue151 = chunkQXUST7PYParam67[chunkQXUST7PYValue98 - 1],
      chunkQXUST7PYValue152 = chunkQXUST7PYParam67[chunkQXUST7PYValue98 - 2],
      { angle } = chunkQXUST7PYHelper4(
        chunkQXUST7PYValue152,
        chunkQXUST7PYValue151,
      ),
      chunkQXUST7PYValue153 = chunkQXUST7PYValue150 * Math.cos(angle),
      chunkQXUST7PYValue154 = chunkQXUST7PYValue150 * Math.sin(angle);
    chunkQXUST7PYValue97[chunkQXUST7PYValue98 - 1].x =
      chunkQXUST7PYValue151.x - chunkQXUST7PYValue153;
    chunkQXUST7PYValue97[chunkQXUST7PYValue98 - 1].y =
      chunkQXUST7PYValue151.y - chunkQXUST7PYValue154;
  }
  return chunkQXUST7PYValue97;
}
chunkAGHRB4JFN(chunkQXUST7PYHelper5, "applyMarkerOffsetsToPoints");
var chunkQXUST7PYValue13 = chunkAGHRB4JFN(
    (
      chunkQXUST7PYParam94,
      chunkQXUST7PYParam95,
      chunkQXUST7PYParam96,
      chunkQXUST7PYParam97,
    ) => {
      chunkQXUST7PYParam95.forEach((item) => {
        chunkQXUST7PYValue14[item](
          chunkQXUST7PYParam94,
          chunkQXUST7PYParam96,
          chunkQXUST7PYParam97,
        );
      });
    },
    "insertMarkers",
  ),
  chunkQXUST7PYValue14 = {
    extension: chunkAGHRB4JFN(
      (chunkQXUST7PYParam37, chunkQXUST7PYParam38, chunkQXUST7PYParam39) => {
        chunkAGHRB4JFR.trace("Making markers for ", chunkQXUST7PYParam39);
        chunkQXUST7PYParam37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam39 +
              "_" +
              chunkQXUST7PYParam38 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + chunkQXUST7PYParam38)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        chunkQXUST7PYParam37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam39 + "_" + chunkQXUST7PYParam38 + "-extensionEnd",
          )
          .attr("class", "marker extension " + chunkQXUST7PYParam38)
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
      (chunkQXUST7PYParam43, chunkQXUST7PYParam44, chunkQXUST7PYParam45) => {
        chunkQXUST7PYParam43
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam45 +
              "_" +
              chunkQXUST7PYParam44 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + chunkQXUST7PYParam44)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYParam43
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam45 +
              "_" +
              chunkQXUST7PYParam44 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + chunkQXUST7PYParam44)
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
      (chunkQXUST7PYParam46, chunkQXUST7PYParam47, chunkQXUST7PYParam48) => {
        chunkQXUST7PYParam46
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam48 +
              "_" +
              chunkQXUST7PYParam47 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + chunkQXUST7PYParam47)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYParam46
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam48 +
              "_" +
              chunkQXUST7PYParam47 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + chunkQXUST7PYParam47)
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
      (chunkQXUST7PYParam49, chunkQXUST7PYParam50, chunkQXUST7PYParam51) => {
        chunkQXUST7PYParam49
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam51 +
              "_" +
              chunkQXUST7PYParam50 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + chunkQXUST7PYParam50)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkQXUST7PYParam49
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam51 +
              "_" +
              chunkQXUST7PYParam50 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + chunkQXUST7PYParam50)
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
      (chunkQXUST7PYParam34, chunkQXUST7PYParam35, chunkQXUST7PYParam36) => {
        chunkQXUST7PYParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam36 +
              "_" +
              chunkQXUST7PYParam35 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + chunkQXUST7PYParam35)
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
        chunkQXUST7PYParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam36 + "_" + chunkQXUST7PYParam35 + "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + chunkQXUST7PYParam35)
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
      (chunkQXUST7PYParam23, chunkQXUST7PYParam24, chunkQXUST7PYParam25) => {
        chunkQXUST7PYParam23
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam25 + "_" + chunkQXUST7PYParam24 + "-pointEnd",
          )
          .attr("class", "marker " + chunkQXUST7PYParam24)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 8)
          .attr("markerHeight", 8)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 10 5 L 0 10 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "1,0");
        chunkQXUST7PYParam23
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam25 + "_" + chunkQXUST7PYParam24 + "-pointStart",
          )
          .attr("class", "marker " + chunkQXUST7PYParam24)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", 4.5)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 8)
          .attr("markerHeight", 8)
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
      (chunkQXUST7PYParam16, chunkQXUST7PYParam17, chunkQXUST7PYParam18) => {
        chunkQXUST7PYParam16
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam18 + "_" + chunkQXUST7PYParam17 + "-circleEnd",
          )
          .attr("class", "marker " + chunkQXUST7PYParam17)
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
        chunkQXUST7PYParam16
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam18 + "_" + chunkQXUST7PYParam17 + "-circleStart",
          )
          .attr("class", "marker " + chunkQXUST7PYParam17)
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
      (chunkQXUST7PYParam20, chunkQXUST7PYParam21, chunkQXUST7PYParam22) => {
        chunkQXUST7PYParam20
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam22 + "_" + chunkQXUST7PYParam21 + "-crossEnd",
          )
          .attr("class", "marker cross " + chunkQXUST7PYParam21)
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
        chunkQXUST7PYParam20
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam22 + "_" + chunkQXUST7PYParam21 + "-crossStart",
          )
          .attr("class", "marker cross " + chunkQXUST7PYParam21)
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
      (chunkQXUST7PYParam73, chunkQXUST7PYParam74, chunkQXUST7PYParam75) => {
        chunkQXUST7PYParam73
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam75 + "_" + chunkQXUST7PYParam74 + "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
      },
      "barb",
    ),
    only_one: chunkAGHRB4JFN(
      (chunkQXUST7PYParam52, chunkQXUST7PYParam53, chunkQXUST7PYParam54) => {
        chunkQXUST7PYParam52
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam54 + "_" + chunkQXUST7PYParam53 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkQXUST7PYParam53)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18");
        chunkQXUST7PYParam52
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam54 + "_" + chunkQXUST7PYParam53 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkQXUST7PYParam53)
          .attr("refX", 18)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,0 L3,18 M9,0 L9,18");
      },
      "only_one",
    ),
    zero_or_one: chunkAGHRB4JFN(
      (chunkQXUST7PYParam31, chunkQXUST7PYParam32, chunkQXUST7PYParam33) => {
        let chunkQXUST7PYValue58 = chunkQXUST7PYParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam33 +
              "_" +
              chunkQXUST7PYParam32 +
              "-zeroOrOneStart",
          )
          .attr("class", "marker zeroOrOne " + chunkQXUST7PYParam32)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkQXUST7PYValue58
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("r", 6);
        chunkQXUST7PYValue58.append("path").attr("d", "M9,0 L9,18");
        let chunkQXUST7PYValue59 = chunkQXUST7PYParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam33 + "_" + chunkQXUST7PYParam32 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkQXUST7PYParam32)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkQXUST7PYValue59
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("r", 6);
        chunkQXUST7PYValue59.append("path").attr("d", "M21,0 L21,18");
      },
      "zero_or_one",
    ),
    one_or_more: chunkAGHRB4JFN(
      (chunkQXUST7PYParam40, chunkQXUST7PYParam41, chunkQXUST7PYParam42) => {
        chunkQXUST7PYParam40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam42 +
              "_" +
              chunkQXUST7PYParam41 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkQXUST7PYParam41)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
        chunkQXUST7PYParam40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam42 + "_" + chunkQXUST7PYParam41 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkQXUST7PYParam41)
          .attr("refX", 27)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
      },
      "one_or_more",
    ),
    zero_or_more: chunkAGHRB4JFN(
      (chunkQXUST7PYParam26, chunkQXUST7PYParam27, chunkQXUST7PYParam28) => {
        let chunkQXUST7PYValue52 = chunkQXUST7PYParam26
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam28 +
              "_" +
              chunkQXUST7PYParam27 +
              "-zeroOrMoreStart",
          )
          .attr("class", "marker zeroOrMore " + chunkQXUST7PYParam27)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkQXUST7PYValue52
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 48)
          .attr("cy", 18)
          .attr("r", 6);
        chunkQXUST7PYValue52
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
        let chunkQXUST7PYValue53 = chunkQXUST7PYParam26
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam28 +
              "_" +
              chunkQXUST7PYParam27 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkQXUST7PYParam27)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkQXUST7PYValue53
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 18)
          .attr("r", 6);
        chunkQXUST7PYValue53
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
      },
      "zero_or_more",
    ),
    requirement_arrow: chunkAGHRB4JFN(
      (chunkQXUST7PYParam70, chunkQXUST7PYParam71, chunkQXUST7PYParam72) => {
        chunkQXUST7PYParam70
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam72 +
              "_" +
              chunkQXUST7PYParam71 +
              "-requirement_arrowEnd",
          )
          .attr("refX", 20)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
      },
      "requirement_arrow",
    ),
    requirement_contains: chunkAGHRB4JFN(
      (chunkQXUST7PYParam64, chunkQXUST7PYParam65, chunkQXUST7PYParam66) => {
        let chunkQXUST7PYValue96 = chunkQXUST7PYParam64
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkQXUST7PYParam66 +
              "_" +
              chunkQXUST7PYParam65 +
              "-requirement_containsStart",
          )
          .attr("refX", 0)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("g");
        chunkQXUST7PYValue96
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkQXUST7PYValue96
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkQXUST7PYValue96
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
      },
      "requirement_contains",
    ),
  };
export const chunkQXUST7PYI = chunkQXUST7PYValue13;

export function initMermaidEdgeRendererChunk(): void {}
