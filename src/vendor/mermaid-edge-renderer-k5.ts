// Restored from ref/webview/assets/chunk-ENJZ2VHE-C0rUgAJ1.js
// Flat boundary. Vendored chunkENJZ2VHE chunk restored from the Codex webview bundle.
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
import rough from "roughjs";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXB,
  chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk5PVQY5BWC, chunk5PVQY5BWF } from "./chunk-5pvqy5bw";
import { chunkU2HBQHQKN } from "./chunk-u2hbqhqk";
import {
  chunkBSJP7CBPI,
  chunkBSJP7CBPN,
  chunkBSJP7CBPR,
  chunkBSJP7CBPT,
} from "./chunk-bsjp7cbp";
import { chunkZZ45TVLEN } from "./chunk-zz45tvle";
import { chunkX2U36JSPI, chunkX2U36JSPA } from "./chunk-x2u36jsp";
import { chunk5FUZZQ4RR } from "./mermaid-shape-renderer";
var chunkENJZ2VHEValue1 = chunkAGHRB4JFN(
    (
      chunkENJZ2VHEParam102,
      chunkENJZ2VHEParam103,
      chunkENJZ2VHEParam104,
      chunkENJZ2VHEParam105,
      chunkENJZ2VHEParam106,
      chunkENJZ2VHEParam107 = false,
      chunkENJZ2VHEParam108,
    ) => {
      chunkENJZ2VHEParam103.arrowTypeStart &&
        chunkENJZ2VHEValue4(
          chunkENJZ2VHEParam102,
          "start",
          chunkENJZ2VHEParam103.arrowTypeStart,
          chunkENJZ2VHEParam104,
          chunkENJZ2VHEParam105,
          chunkENJZ2VHEParam106,
          chunkENJZ2VHEParam107,
          chunkENJZ2VHEParam108,
        );
      chunkENJZ2VHEParam103.arrowTypeEnd &&
        chunkENJZ2VHEValue4(
          chunkENJZ2VHEParam102,
          "end",
          chunkENJZ2VHEParam103.arrowTypeEnd,
          chunkENJZ2VHEParam104,
          chunkENJZ2VHEParam105,
          chunkENJZ2VHEParam106,
          chunkENJZ2VHEParam107,
          chunkENJZ2VHEParam108,
        );
    },
    "addEdgeMarkers",
  ),
  chunkENJZ2VHEValue2 = {
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
    arrow_barb_neo: {
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
  chunkENJZ2VHEValue3 = [
    "cross",
    "point",
    "circle",
    "lollipop",
    "aggregation",
    "extension",
    "composition",
    "dependency",
    "barb",
  ],
  chunkENJZ2VHEValue4 = chunkAGHRB4JFN(
    (
      chunkENJZ2VHEParam67,
      chunkENJZ2VHEParam68,
      chunkENJZ2VHEParam69,
      chunkENJZ2VHEParam70,
      chunkENJZ2VHEParam71,
      chunkENJZ2VHEParam72,
      chunkENJZ2VHEParam73 = false,
      chunkENJZ2VHEParam74,
    ) => {
      let chunkENJZ2VHEValue86 = chunkENJZ2VHEValue2[chunkENJZ2VHEParam69],
        chunkENJZ2VHEValue87 =
          chunkENJZ2VHEValue86 &&
          chunkENJZ2VHEValue3.includes(chunkENJZ2VHEValue86.type);
      if (!chunkENJZ2VHEValue86) {
        chunkAGHRB4JFR.warn(`Unknown arrow type: ${chunkENJZ2VHEParam69}`);
        return;
      }
      let chunkENJZ2VHEValue88 = `${chunkENJZ2VHEParam71}_${chunkENJZ2VHEParam72}-${chunkENJZ2VHEValue86.type}${chunkENJZ2VHEParam68 === "start" ? "Start" : "End"}${chunkENJZ2VHEParam73 && chunkENJZ2VHEValue87 ? "-margin" : ""}`;
      if (chunkENJZ2VHEParam74 && chunkENJZ2VHEParam74.trim() !== "") {
        let chunkENJZ2VHEValue129 = `${chunkENJZ2VHEValue88}_${chunkENJZ2VHEParam74.replace(/[^\dA-Za-z]/g, "_")}`;
        if (!document.getElementById(chunkENJZ2VHEValue129)) {
          let chunkENJZ2VHEValue145 =
            document.getElementById(chunkENJZ2VHEValue88);
          if (chunkENJZ2VHEValue145) {
            let chunkENJZ2VHEValue163 = chunkENJZ2VHEValue145.cloneNode(true);
            chunkENJZ2VHEValue163.id = chunkENJZ2VHEValue129;
            chunkENJZ2VHEValue163
              .querySelectorAll("path, circle, line")
              .forEach((item) => {
                item.setAttribute("stroke", chunkENJZ2VHEParam74);
                chunkENJZ2VHEValue86.fill &&
                  item.setAttribute("fill", chunkENJZ2VHEParam74);
              });
            chunkENJZ2VHEValue145.parentNode?.appendChild(
              chunkENJZ2VHEValue163,
            );
          }
        }
        chunkENJZ2VHEParam67.attr(
          `marker-${chunkENJZ2VHEParam68}`,
          `url(${chunkENJZ2VHEParam70}#${chunkENJZ2VHEValue129})`,
        );
      } else
        chunkENJZ2VHEParam67.attr(
          `marker-${chunkENJZ2VHEParam68}`,
          `url(${chunkENJZ2VHEParam70}#${chunkENJZ2VHEValue88})`,
        );
    },
    "addEdgeMarker",
  ),
  chunkENJZ2VHEValue5 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam122) =>
      typeof chunkENJZ2VHEParam122 == "string"
        ? chunkENJZ2VHEParam122
        : _chunkICPOFSXXB()?.flowchart?.curve,
    "resolveEdgeCurveType",
  ),
  chunkENJZ2VHEValue6 = new Map(),
  chunkENJZ2VHEValue7 = new Map(),
  chunkENJZ2VHEValue8 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam117) =>
      chunkENJZ2VHEParam117
        ? typeof chunkENJZ2VHEParam117 == "string"
          ? chunkENJZ2VHEParam117
          : chunkENJZ2VHEParam117.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
        : "",
    "getLabelStyles",
  );
export const chunkENJZ2VHET = chunkAGHRB4JFN(() => {
  chunkENJZ2VHEValue6.clear();
  chunkENJZ2VHEValue7.clear();
}, "clear");
export const chunkENJZ2VHER = chunkAGHRB4JFN(
  async (chunkENJZ2VHEParam9, chunkENJZ2VHEParam10) => {
    let chunkENJZ2VHEValue34 = _chunkICPOFSXXB(),
      chunkENJZ2VHEValue35 = chunkICPOFSXXW(chunkENJZ2VHEValue34),
      { labelStyles } = chunkX2U36JSPI(chunkENJZ2VHEParam10);
    chunkENJZ2VHEParam10.labelStyle = labelStyles;
    let chunkENJZ2VHEValue36 = chunkENJZ2VHEParam9
        .insert("g")
        .attr("class", "edgeLabel"),
      chunkENJZ2VHEValue37 = chunkENJZ2VHEValue36
        .insert("g")
        .attr("class", "label")
        .attr("data-id", chunkENJZ2VHEParam10.id),
      chunkENJZ2VHEValue38 = chunkENJZ2VHEParam10.labelType === "markdown",
      chunkENJZ2VHEValue39 = await chunkU2HBQHQKN(
        chunkENJZ2VHEParam9,
        chunkENJZ2VHEParam10.label,
        {
          style: chunkENJZ2VHEValue8(chunkENJZ2VHEParam10.labelStyle),
          useHtmlLabels: chunkENJZ2VHEValue35,
          addSvgBackground: true,
          isNode: false,
          markdown: chunkENJZ2VHEValue38,
          width: undefined,
        },
        chunkENJZ2VHEValue34,
      );
    chunkENJZ2VHEValue37.node().appendChild(chunkENJZ2VHEValue39);
    chunkAGHRB4JFR.info(
      "abc82",
      chunkENJZ2VHEParam10,
      chunkENJZ2VHEParam10.labelType,
    );
    let chunkENJZ2VHEValue40 = chunkENJZ2VHEValue39.getBBox(),
      chunkENJZ2VHEValue41 = chunkENJZ2VHEValue40;
    if (chunkENJZ2VHEValue35) {
      let chunkENJZ2VHEValue175 = chunkENJZ2VHEValue39.children[0],
        chunkENJZ2VHEValue176 = Src(chunkENJZ2VHEValue39);
      chunkENJZ2VHEValue40 = chunkENJZ2VHEValue175.getBoundingClientRect();
      chunkENJZ2VHEValue41 = chunkENJZ2VHEValue40;
      chunkENJZ2VHEValue176.attr("width", chunkENJZ2VHEValue40.width);
      chunkENJZ2VHEValue176.attr("height", chunkENJZ2VHEValue40.height);
    } else {
      let chunkENJZ2VHEValue202 = Src(chunkENJZ2VHEValue39)
        .select("text")
        .node();
      chunkENJZ2VHEValue202 &&
        typeof chunkENJZ2VHEValue202.getBBox == "function" &&
        (chunkENJZ2VHEValue41 = chunkENJZ2VHEValue202.getBBox());
    }
    chunkENJZ2VHEValue37.attr(
      "transform",
      chunkBSJP7CBPT(chunkENJZ2VHEValue41, chunkENJZ2VHEValue35),
    );
    chunkENJZ2VHEValue6.set(chunkENJZ2VHEParam10.id, chunkENJZ2VHEValue36);
    chunkENJZ2VHEParam10.width = chunkENJZ2VHEValue40.width;
    chunkENJZ2VHEParam10.height = chunkENJZ2VHEValue40.height;
    let chunkENJZ2VHEValue42;
    if (chunkENJZ2VHEParam10.startLabelLeft) {
      let chunkENJZ2VHEValue125 = chunkENJZ2VHEParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkENJZ2VHEValue126 = chunkENJZ2VHEValue125
          .insert("g")
          .attr("class", "inner"),
        chunkENJZ2VHEValue127 = await chunk5FUZZQ4RR(
          chunkENJZ2VHEValue126,
          chunkENJZ2VHEParam10.startLabelLeft,
          chunkENJZ2VHEValue8(chunkENJZ2VHEParam10.labelStyle) || "",
          false,
          false,
        );
      chunkENJZ2VHEValue42 = chunkENJZ2VHEValue127;
      let chunkENJZ2VHEValue128 = chunkENJZ2VHEValue127.getBBox();
      if (chunkENJZ2VHEValue35) {
        let chunkENJZ2VHEValue185 = chunkENJZ2VHEValue127.children[0],
          chunkENJZ2VHEValue186 = Src(chunkENJZ2VHEValue127);
        chunkENJZ2VHEValue128 = chunkENJZ2VHEValue185.getBoundingClientRect();
        chunkENJZ2VHEValue186.attr("width", chunkENJZ2VHEValue128.width);
        chunkENJZ2VHEValue186.attr("height", chunkENJZ2VHEValue128.height);
      }
      chunkENJZ2VHEValue126.attr(
        "transform",
        chunkBSJP7CBPT(chunkENJZ2VHEValue128, chunkENJZ2VHEValue35),
      );
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id) ||
        chunkENJZ2VHEValue7.set(chunkENJZ2VHEParam10.id, {});
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id).startLeft =
        chunkENJZ2VHEValue125;
      chunkENJZ2VHEHelper1(
        chunkENJZ2VHEValue42,
        chunkENJZ2VHEParam10.startLabelLeft,
      );
    }
    if (chunkENJZ2VHEParam10.startLabelRight) {
      let chunkENJZ2VHEValue111 = chunkENJZ2VHEParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkENJZ2VHEValue112 = chunkENJZ2VHEValue111
          .insert("g")
          .attr("class", "inner"),
        chunkENJZ2VHEValue113 = await chunk5FUZZQ4RR(
          chunkENJZ2VHEValue112,
          chunkENJZ2VHEParam10.startLabelRight,
          chunkENJZ2VHEValue8(chunkENJZ2VHEParam10.labelStyle) || "",
          false,
          false,
        );
      chunkENJZ2VHEValue42 = chunkENJZ2VHEValue113;
      chunkENJZ2VHEValue112.node().appendChild(chunkENJZ2VHEValue113);
      let chunkENJZ2VHEValue114 = chunkENJZ2VHEValue113.getBBox();
      if (chunkENJZ2VHEValue35) {
        let chunkENJZ2VHEValue187 = chunkENJZ2VHEValue113.children[0],
          chunkENJZ2VHEValue188 = Src(chunkENJZ2VHEValue113);
        chunkENJZ2VHEValue114 = chunkENJZ2VHEValue187.getBoundingClientRect();
        chunkENJZ2VHEValue188.attr("width", chunkENJZ2VHEValue114.width);
        chunkENJZ2VHEValue188.attr("height", chunkENJZ2VHEValue114.height);
      }
      chunkENJZ2VHEValue112.attr(
        "transform",
        chunkBSJP7CBPT(chunkENJZ2VHEValue114, chunkENJZ2VHEValue35),
      );
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id) ||
        chunkENJZ2VHEValue7.set(chunkENJZ2VHEParam10.id, {});
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id).startRight =
        chunkENJZ2VHEValue111;
      chunkENJZ2VHEHelper1(
        chunkENJZ2VHEValue42,
        chunkENJZ2VHEParam10.startLabelRight,
      );
    }
    if (chunkENJZ2VHEParam10.endLabelLeft) {
      let chunkENJZ2VHEValue119 = chunkENJZ2VHEParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkENJZ2VHEValue120 = chunkENJZ2VHEValue119
          .insert("g")
          .attr("class", "inner"),
        chunkENJZ2VHEValue121 = await chunk5FUZZQ4RR(
          chunkENJZ2VHEValue120,
          chunkENJZ2VHEParam10.endLabelLeft,
          chunkENJZ2VHEValue8(chunkENJZ2VHEParam10.labelStyle) || "",
          false,
          false,
        );
      chunkENJZ2VHEValue42 = chunkENJZ2VHEValue121;
      let chunkENJZ2VHEValue122 = chunkENJZ2VHEValue121.getBBox();
      if (chunkENJZ2VHEValue35) {
        let chunkENJZ2VHEValue189 = chunkENJZ2VHEValue121.children[0],
          chunkENJZ2VHEValue190 = Src(chunkENJZ2VHEValue121);
        chunkENJZ2VHEValue122 = chunkENJZ2VHEValue189.getBoundingClientRect();
        chunkENJZ2VHEValue190.attr("width", chunkENJZ2VHEValue122.width);
        chunkENJZ2VHEValue190.attr("height", chunkENJZ2VHEValue122.height);
      }
      chunkENJZ2VHEValue120.attr(
        "transform",
        chunkBSJP7CBPT(chunkENJZ2VHEValue122, chunkENJZ2VHEValue35),
      );
      chunkENJZ2VHEValue119.node().appendChild(chunkENJZ2VHEValue121);
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id) ||
        chunkENJZ2VHEValue7.set(chunkENJZ2VHEParam10.id, {});
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id).endLeft =
        chunkENJZ2VHEValue119;
      chunkENJZ2VHEHelper1(
        chunkENJZ2VHEValue42,
        chunkENJZ2VHEParam10.endLabelLeft,
      );
    }
    if (chunkENJZ2VHEParam10.endLabelRight) {
      let chunkENJZ2VHEValue115 = chunkENJZ2VHEParam9
          .insert("g")
          .attr("class", "edgeTerminals"),
        chunkENJZ2VHEValue116 = chunkENJZ2VHEValue115
          .insert("g")
          .attr("class", "inner"),
        chunkENJZ2VHEValue117 = await chunk5FUZZQ4RR(
          chunkENJZ2VHEValue116,
          chunkENJZ2VHEParam10.endLabelRight,
          chunkENJZ2VHEValue8(chunkENJZ2VHEParam10.labelStyle) || "",
          false,
          false,
        );
      chunkENJZ2VHEValue42 = chunkENJZ2VHEValue117;
      let chunkENJZ2VHEValue118 = chunkENJZ2VHEValue117.getBBox();
      if (chunkENJZ2VHEValue35) {
        let chunkENJZ2VHEValue191 = chunkENJZ2VHEValue117.children[0],
          chunkENJZ2VHEValue192 = Src(chunkENJZ2VHEValue117);
        chunkENJZ2VHEValue118 = chunkENJZ2VHEValue191.getBoundingClientRect();
        chunkENJZ2VHEValue192.attr("width", chunkENJZ2VHEValue118.width);
        chunkENJZ2VHEValue192.attr("height", chunkENJZ2VHEValue118.height);
      }
      chunkENJZ2VHEValue116.attr(
        "transform",
        chunkBSJP7CBPT(chunkENJZ2VHEValue118, chunkENJZ2VHEValue35),
      );
      chunkENJZ2VHEValue115.node().appendChild(chunkENJZ2VHEValue117);
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id) ||
        chunkENJZ2VHEValue7.set(chunkENJZ2VHEParam10.id, {});
      chunkENJZ2VHEValue7.get(chunkENJZ2VHEParam10.id).endRight =
        chunkENJZ2VHEValue115;
      chunkENJZ2VHEHelper1(
        chunkENJZ2VHEValue42,
        chunkENJZ2VHEParam10.endLabelRight,
      );
    }
    return chunkENJZ2VHEValue39;
  },
  "insertEdgeLabel",
);
function chunkENJZ2VHEHelper1(chunkENJZ2VHEParam115, chunkENJZ2VHEParam116) {
  chunkICPOFSXXW(_chunkICPOFSXXB()) &&
    chunkENJZ2VHEParam115 &&
    ((chunkENJZ2VHEParam115.style.width =
      chunkENJZ2VHEParam116.length * 9 + "px"),
    (chunkENJZ2VHEParam115.style.height = "12px"));
}
chunkAGHRB4JFN(chunkENJZ2VHEHelper1, "setTerminalWidth");
var chunkENJZ2VHEValue9 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam98, chunkENJZ2VHEParam99) => {
      let chunkENJZ2VHEValue177 = chunkENJZ2VHEParam98.x,
        chunkENJZ2VHEValue178 = chunkENJZ2VHEParam98.y,
        chunkENJZ2VHEValue179 = Math.abs(
          chunkENJZ2VHEParam99.x - chunkENJZ2VHEValue177,
        ),
        chunkENJZ2VHEValue180 = Math.abs(
          chunkENJZ2VHEParam99.y - chunkENJZ2VHEValue178,
        ),
        chunkENJZ2VHEValue181 = chunkENJZ2VHEParam98.width / 2,
        chunkENJZ2VHEValue182 = chunkENJZ2VHEParam98.height / 2;
      return (
        chunkENJZ2VHEValue179 >= chunkENJZ2VHEValue181 ||
        chunkENJZ2VHEValue180 >= chunkENJZ2VHEValue182
      );
    },
    "outsideNode",
  ),
  chunkENJZ2VHEValue10 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam43, chunkENJZ2VHEParam44, chunkENJZ2VHEParam45) => {
      chunkAGHRB4JFR.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(chunkENJZ2VHEParam44)}
  insidePoint : ${JSON.stringify(chunkENJZ2VHEParam45)}
  node        : x:${chunkENJZ2VHEParam43.x} y:${chunkENJZ2VHEParam43.y} w:${chunkENJZ2VHEParam43.width} h:${chunkENJZ2VHEParam43.height}`);
      let chunkENJZ2VHEValue48 = chunkENJZ2VHEParam43.x,
        chunkENJZ2VHEValue49 = chunkENJZ2VHEParam43.y,
        chunkENJZ2VHEValue50 = Math.abs(
          chunkENJZ2VHEValue48 - chunkENJZ2VHEParam45.x,
        ),
        chunkENJZ2VHEValue51 = chunkENJZ2VHEParam43.width / 2,
        chunkENJZ2VHEValue52 =
          chunkENJZ2VHEParam45.x < chunkENJZ2VHEParam44.x
            ? chunkENJZ2VHEValue51 - chunkENJZ2VHEValue50
            : chunkENJZ2VHEValue51 + chunkENJZ2VHEValue50,
        chunkENJZ2VHEValue53 = chunkENJZ2VHEParam43.height / 2,
        chunkENJZ2VHEValue54 = Math.abs(
          chunkENJZ2VHEParam44.y - chunkENJZ2VHEParam45.y,
        ),
        chunkENJZ2VHEValue55 = Math.abs(
          chunkENJZ2VHEParam44.x - chunkENJZ2VHEParam45.x,
        );
      if (
        Math.abs(chunkENJZ2VHEValue49 - chunkENJZ2VHEParam44.y) *
          chunkENJZ2VHEValue51 >
        Math.abs(chunkENJZ2VHEValue48 - chunkENJZ2VHEParam44.x) *
          chunkENJZ2VHEValue53
      ) {
        let chunkENJZ2VHEValue141 =
          chunkENJZ2VHEParam45.y < chunkENJZ2VHEParam44.y
            ? chunkENJZ2VHEParam44.y -
              chunkENJZ2VHEValue53 -
              chunkENJZ2VHEValue49
            : chunkENJZ2VHEValue49 -
              chunkENJZ2VHEValue53 -
              chunkENJZ2VHEParam44.y;
        chunkENJZ2VHEValue52 =
          (chunkENJZ2VHEValue55 * chunkENJZ2VHEValue141) / chunkENJZ2VHEValue54;
        let chunkENJZ2VHEValue142 = {
          x:
            chunkENJZ2VHEParam45.x < chunkENJZ2VHEParam44.x
              ? chunkENJZ2VHEParam45.x + chunkENJZ2VHEValue52
              : chunkENJZ2VHEParam45.x -
                chunkENJZ2VHEValue55 +
                chunkENJZ2VHEValue52,
          y:
            chunkENJZ2VHEParam45.y < chunkENJZ2VHEParam44.y
              ? chunkENJZ2VHEParam45.y +
                chunkENJZ2VHEValue54 -
                chunkENJZ2VHEValue141
              : chunkENJZ2VHEParam45.y -
                chunkENJZ2VHEValue54 +
                chunkENJZ2VHEValue141,
        };
        return (
          chunkENJZ2VHEValue52 === 0 &&
            ((chunkENJZ2VHEValue142.x = chunkENJZ2VHEParam44.x),
            (chunkENJZ2VHEValue142.y = chunkENJZ2VHEParam44.y)),
          chunkENJZ2VHEValue55 === 0 &&
            (chunkENJZ2VHEValue142.x = chunkENJZ2VHEParam44.x),
          chunkENJZ2VHEValue54 === 0 &&
            (chunkENJZ2VHEValue142.y = chunkENJZ2VHEParam44.y),
          chunkAGHRB4JFR.debug(
            `abc89 top/bottom calc, Q ${chunkENJZ2VHEValue54}, q ${chunkENJZ2VHEValue141}, R ${chunkENJZ2VHEValue55}, r ${chunkENJZ2VHEValue52}`,
            chunkENJZ2VHEValue142,
          ),
          chunkENJZ2VHEValue142
        );
      } else {
        chunkENJZ2VHEValue52 =
          chunkENJZ2VHEParam45.x < chunkENJZ2VHEParam44.x
            ? chunkENJZ2VHEParam44.x -
              chunkENJZ2VHEValue51 -
              chunkENJZ2VHEValue48
            : chunkENJZ2VHEValue48 -
              chunkENJZ2VHEValue51 -
              chunkENJZ2VHEParam44.x;
        let chunkENJZ2VHEValue138 =
            (chunkENJZ2VHEValue54 * chunkENJZ2VHEValue52) /
            chunkENJZ2VHEValue55,
          chunkENJZ2VHEValue139 =
            chunkENJZ2VHEParam45.x < chunkENJZ2VHEParam44.x
              ? chunkENJZ2VHEParam45.x +
                chunkENJZ2VHEValue55 -
                chunkENJZ2VHEValue52
              : chunkENJZ2VHEParam45.x -
                chunkENJZ2VHEValue55 +
                chunkENJZ2VHEValue52,
          chunkENJZ2VHEValue140 =
            chunkENJZ2VHEParam45.y < chunkENJZ2VHEParam44.y
              ? chunkENJZ2VHEParam45.y + chunkENJZ2VHEValue138
              : chunkENJZ2VHEParam45.y - chunkENJZ2VHEValue138;
        return (
          chunkAGHRB4JFR.debug(
            `sides calc abc89, Q ${chunkENJZ2VHEValue54}, q ${chunkENJZ2VHEValue138}, R ${chunkENJZ2VHEValue55}, r ${chunkENJZ2VHEValue52}`,
            {
              _x: chunkENJZ2VHEValue139,
              _y: chunkENJZ2VHEValue140,
            },
          ),
          chunkENJZ2VHEValue52 === 0 &&
            ((chunkENJZ2VHEValue139 = chunkENJZ2VHEParam44.x),
            (chunkENJZ2VHEValue140 = chunkENJZ2VHEParam44.y)),
          chunkENJZ2VHEValue55 === 0 &&
            (chunkENJZ2VHEValue139 = chunkENJZ2VHEParam44.x),
          chunkENJZ2VHEValue54 === 0 &&
            (chunkENJZ2VHEValue140 = chunkENJZ2VHEParam44.y),
          {
            x: chunkENJZ2VHEValue139,
            y: chunkENJZ2VHEValue140,
          }
        );
      }
    },
    "intersection",
  ),
  chunkENJZ2VHEValue11 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam81, chunkENJZ2VHEParam82) => {
      chunkAGHRB4JFR.warn(
        "abc88 cutPathAtIntersect",
        chunkENJZ2VHEParam81,
        chunkENJZ2VHEParam82,
      );
      let chunkENJZ2VHEValue107 = [],
        chunkENJZ2VHEValue108 = chunkENJZ2VHEParam81[0],
        chunkENJZ2VHEValue109 = false;
      return (
        chunkENJZ2VHEParam81.forEach((item) => {
          if (
            (chunkAGHRB4JFR.info(
              "abc88 checking point",
              item,
              chunkENJZ2VHEParam82,
            ),
            !chunkENJZ2VHEValue9(chunkENJZ2VHEParam82, item) &&
              !chunkENJZ2VHEValue109)
          ) {
            let chunkENJZ2VHEValue143 = chunkENJZ2VHEValue10(
              chunkENJZ2VHEParam82,
              chunkENJZ2VHEValue108,
              item,
            );
            chunkAGHRB4JFR.debug(
              "abc88 inside",
              item,
              chunkENJZ2VHEValue108,
              chunkENJZ2VHEValue143,
            );
            chunkAGHRB4JFR.debug(
              "abc88 intersection",
              chunkENJZ2VHEValue143,
              chunkENJZ2VHEParam82,
            );
            let chunkENJZ2VHEValue144 = false;
            chunkENJZ2VHEValue107.forEach((_item) => {
              chunkENJZ2VHEValue144 ||=
                _item.x === chunkENJZ2VHEValue143.x &&
                _item.y === chunkENJZ2VHEValue143.y;
            });
            chunkENJZ2VHEValue107.some(
              (_item) =>
                _item.x === chunkENJZ2VHEValue143.x &&
                _item.y === chunkENJZ2VHEValue143.y,
            )
              ? chunkAGHRB4JFR.warn(
                  "abc88 no intersect",
                  chunkENJZ2VHEValue143,
                  chunkENJZ2VHEValue107,
                )
              : chunkENJZ2VHEValue107.push(chunkENJZ2VHEValue143);
            chunkENJZ2VHEValue109 = true;
          } else {
            chunkAGHRB4JFR.warn("abc88 outside", item, chunkENJZ2VHEValue108);
            chunkENJZ2VHEValue108 = item;
            chunkENJZ2VHEValue109 || chunkENJZ2VHEValue107.push(item);
          }
        }),
        chunkAGHRB4JFR.debug("returning points", chunkENJZ2VHEValue107),
        chunkENJZ2VHEValue107
      );
    },
    "cutPathAtIntersect",
  );
export const chunkENJZ2VHEA = chunkAGHRB4JFN(
  (chunkENJZ2VHEParam26, chunkENJZ2VHEParam27) => {
    chunkAGHRB4JFR.debug(
      "Moving label abc88 ",
      chunkENJZ2VHEParam26.id,
      chunkENJZ2VHEParam26.label,
      chunkENJZ2VHEValue6.get(chunkENJZ2VHEParam26.id),
      chunkENJZ2VHEParam27,
    );
    let chunkENJZ2VHEValue43 = chunkENJZ2VHEParam27.updatedPath
        ? chunkENJZ2VHEParam27.updatedPath
        : chunkENJZ2VHEParam27.originalPath,
      { subGraphTitleTotalMargin } = chunkZZ45TVLEN(_chunkICPOFSXXB());
    if (chunkENJZ2VHEParam26.label) {
      let chunkENJZ2VHEValue135 = chunkENJZ2VHEValue6.get(
          chunkENJZ2VHEParam26.id,
        ),
        chunkENJZ2VHEValue136 = chunkENJZ2VHEParam26.x,
        chunkENJZ2VHEValue137 = chunkENJZ2VHEParam26.y;
      if (chunkENJZ2VHEValue43) {
        let chunkENJZ2VHEValue162 =
          chunk5PVQY5BWC.calcLabelPosition(chunkENJZ2VHEValue43);
        chunkAGHRB4JFR.debug(
          "Moving label " + chunkENJZ2VHEParam26.label + " from (",
          chunkENJZ2VHEValue136,
          ",",
          chunkENJZ2VHEValue137,
          ") to (",
          chunkENJZ2VHEValue162.x,
          ",",
          chunkENJZ2VHEValue162.y,
          ") abc88",
        );
        chunkENJZ2VHEParam27.updatedPath &&
          ((chunkENJZ2VHEValue136 = chunkENJZ2VHEValue162.x),
          (chunkENJZ2VHEValue137 = chunkENJZ2VHEValue162.y));
      }
      chunkENJZ2VHEValue135.attr(
        "transform",
        `translate(${chunkENJZ2VHEValue136}, ${chunkENJZ2VHEValue137 + subGraphTitleTotalMargin / 2})`,
      );
    }
    if (chunkENJZ2VHEParam26.startLabelLeft) {
      let chunkENJZ2VHEValue153 = chunkENJZ2VHEValue7.get(
          chunkENJZ2VHEParam26.id,
        ).startLeft,
        chunkENJZ2VHEValue154 = chunkENJZ2VHEParam26.x,
        chunkENJZ2VHEValue155 = chunkENJZ2VHEParam26.y;
      if (chunkENJZ2VHEValue43) {
        let chunkENJZ2VHEValue194 = chunk5PVQY5BWC.calcTerminalLabelPosition(
          chunkENJZ2VHEParam26.arrowTypeStart ? 10 : 0,
          "start_left",
          chunkENJZ2VHEValue43,
        );
        chunkENJZ2VHEValue154 = chunkENJZ2VHEValue194.x;
        chunkENJZ2VHEValue155 = chunkENJZ2VHEValue194.y;
      }
      chunkENJZ2VHEValue153.attr(
        "transform",
        `translate(${chunkENJZ2VHEValue154}, ${chunkENJZ2VHEValue155})`,
      );
    }
    if (chunkENJZ2VHEParam26.startLabelRight) {
      let chunkENJZ2VHEValue150 = chunkENJZ2VHEValue7.get(
          chunkENJZ2VHEParam26.id,
        ).startRight,
        chunkENJZ2VHEValue151 = chunkENJZ2VHEParam26.x,
        chunkENJZ2VHEValue152 = chunkENJZ2VHEParam26.y;
      if (chunkENJZ2VHEValue43) {
        let chunkENJZ2VHEValue193 = chunk5PVQY5BWC.calcTerminalLabelPosition(
          chunkENJZ2VHEParam26.arrowTypeStart ? 10 : 0,
          "start_right",
          chunkENJZ2VHEValue43,
        );
        chunkENJZ2VHEValue151 = chunkENJZ2VHEValue193.x;
        chunkENJZ2VHEValue152 = chunkENJZ2VHEValue193.y;
      }
      chunkENJZ2VHEValue150.attr(
        "transform",
        `translate(${chunkENJZ2VHEValue151}, ${chunkENJZ2VHEValue152})`,
      );
    }
    if (chunkENJZ2VHEParam26.endLabelLeft) {
      let chunkENJZ2VHEValue159 = chunkENJZ2VHEValue7.get(
          chunkENJZ2VHEParam26.id,
        ).endLeft,
        chunkENJZ2VHEValue160 = chunkENJZ2VHEParam26.x,
        chunkENJZ2VHEValue161 = chunkENJZ2VHEParam26.y;
      if (chunkENJZ2VHEValue43) {
        let chunkENJZ2VHEValue196 = chunk5PVQY5BWC.calcTerminalLabelPosition(
          chunkENJZ2VHEParam26.arrowTypeEnd ? 10 : 0,
          "end_left",
          chunkENJZ2VHEValue43,
        );
        chunkENJZ2VHEValue160 = chunkENJZ2VHEValue196.x;
        chunkENJZ2VHEValue161 = chunkENJZ2VHEValue196.y;
      }
      chunkENJZ2VHEValue159.attr(
        "transform",
        `translate(${chunkENJZ2VHEValue160}, ${chunkENJZ2VHEValue161})`,
      );
    }
    if (chunkENJZ2VHEParam26.endLabelRight) {
      let chunkENJZ2VHEValue156 = chunkENJZ2VHEValue7.get(
          chunkENJZ2VHEParam26.id,
        ).endRight,
        chunkENJZ2VHEValue157 = chunkENJZ2VHEParam26.x,
        chunkENJZ2VHEValue158 = chunkENJZ2VHEParam26.y;
      if (chunkENJZ2VHEValue43) {
        let chunkENJZ2VHEValue195 = chunk5PVQY5BWC.calcTerminalLabelPosition(
          chunkENJZ2VHEParam26.arrowTypeEnd ? 10 : 0,
          "end_right",
          chunkENJZ2VHEValue43,
        );
        chunkENJZ2VHEValue157 = chunkENJZ2VHEValue195.x;
        chunkENJZ2VHEValue158 = chunkENJZ2VHEValue195.y;
      }
      chunkENJZ2VHEValue156.attr(
        "transform",
        `translate(${chunkENJZ2VHEValue157}, ${chunkENJZ2VHEValue158})`,
      );
    }
  },
  "positionEdgeLabel",
);
function chunkENJZ2VHEHelper2(chunkENJZ2VHEParam91) {
  let chunkENJZ2VHEValue133 = [],
    chunkENJZ2VHEValue134 = [];
  for (
    let chunkENJZ2VHEValue146 = 1;
    chunkENJZ2VHEValue146 < chunkENJZ2VHEParam91.length - 1;
    chunkENJZ2VHEValue146++
  ) {
    let chunkENJZ2VHEValue147 = chunkENJZ2VHEParam91[chunkENJZ2VHEValue146 - 1],
      chunkENJZ2VHEValue148 = chunkENJZ2VHEParam91[chunkENJZ2VHEValue146],
      chunkENJZ2VHEValue149 = chunkENJZ2VHEParam91[chunkENJZ2VHEValue146 + 1];
    ((chunkENJZ2VHEValue147.x === chunkENJZ2VHEValue148.x &&
      chunkENJZ2VHEValue148.y === chunkENJZ2VHEValue149.y &&
      Math.abs(chunkENJZ2VHEValue148.x - chunkENJZ2VHEValue149.x) > 5 &&
      Math.abs(chunkENJZ2VHEValue148.y - chunkENJZ2VHEValue147.y) > 5) ||
      (chunkENJZ2VHEValue147.y === chunkENJZ2VHEValue148.y &&
        chunkENJZ2VHEValue148.x === chunkENJZ2VHEValue149.x &&
        Math.abs(chunkENJZ2VHEValue148.x - chunkENJZ2VHEValue147.x) > 5 &&
        Math.abs(chunkENJZ2VHEValue148.y - chunkENJZ2VHEValue149.y) > 5)) &&
      (chunkENJZ2VHEValue133.push(chunkENJZ2VHEValue148),
      chunkENJZ2VHEValue134.push(chunkENJZ2VHEValue146));
  }
  return {
    cornerPoints: chunkENJZ2VHEValue133,
    cornerPointPositions: chunkENJZ2VHEValue134,
  };
}
chunkAGHRB4JFN(chunkENJZ2VHEHelper2, "extractCornerPoints");
var chunkENJZ2VHEValue12 = chunkAGHRB4JFN(function (
    chunkENJZ2VHEParam109,
    chunkENJZ2VHEParam110,
    chunkENJZ2VHEParam111,
  ) {
    let chunkENJZ2VHEValue197 =
        chunkENJZ2VHEParam110.x - chunkENJZ2VHEParam109.x,
      chunkENJZ2VHEValue198 = chunkENJZ2VHEParam110.y - chunkENJZ2VHEParam109.y,
      chunkENJZ2VHEValue199 =
        chunkENJZ2VHEParam111 /
        Math.sqrt(
          chunkENJZ2VHEValue197 * chunkENJZ2VHEValue197 +
            chunkENJZ2VHEValue198 * chunkENJZ2VHEValue198,
        );
    return {
      x:
        chunkENJZ2VHEParam110.x - chunkENJZ2VHEValue199 * chunkENJZ2VHEValue197,
      y:
        chunkENJZ2VHEParam110.y - chunkENJZ2VHEValue199 * chunkENJZ2VHEValue198,
    };
  }, "findAdjacentPoint"),
  chunkENJZ2VHEValue13 = chunkAGHRB4JFN(function (chunkENJZ2VHEParam46) {
    let { cornerPointPositions } = chunkENJZ2VHEHelper2(chunkENJZ2VHEParam46),
      chunkENJZ2VHEValue56 = [];
    for (
      let chunkENJZ2VHEValue59 = 0;
      chunkENJZ2VHEValue59 < chunkENJZ2VHEParam46.length;
      chunkENJZ2VHEValue59++
    )
      if (cornerPointPositions.includes(chunkENJZ2VHEValue59)) {
        let chunkENJZ2VHEValue72 =
            chunkENJZ2VHEParam46[chunkENJZ2VHEValue59 - 1],
          chunkENJZ2VHEValue73 = chunkENJZ2VHEParam46[chunkENJZ2VHEValue59 + 1],
          chunkENJZ2VHEValue74 = chunkENJZ2VHEParam46[chunkENJZ2VHEValue59],
          chunkENJZ2VHEValue75 = chunkENJZ2VHEValue12(
            chunkENJZ2VHEValue72,
            chunkENJZ2VHEValue74,
            5,
          ),
          chunkENJZ2VHEValue76 = chunkENJZ2VHEValue12(
            chunkENJZ2VHEValue73,
            chunkENJZ2VHEValue74,
            5,
          ),
          chunkENJZ2VHEValue77 =
            chunkENJZ2VHEValue76.x - chunkENJZ2VHEValue75.x,
          chunkENJZ2VHEValue78 =
            chunkENJZ2VHEValue76.y - chunkENJZ2VHEValue75.y;
        chunkENJZ2VHEValue56.push(chunkENJZ2VHEValue75);
        let chunkENJZ2VHEValue79 = Math.sqrt(2) * 2,
          chunkENJZ2VHEValue80 = {
            x: chunkENJZ2VHEValue74.x,
            y: chunkENJZ2VHEValue74.y,
          };
        Math.abs(chunkENJZ2VHEValue73.x - chunkENJZ2VHEValue72.x) > 10 &&
        Math.abs(chunkENJZ2VHEValue73.y - chunkENJZ2VHEValue72.y) >= 10
          ? (chunkAGHRB4JFR.debug(
              "Corner point fixing",
              Math.abs(chunkENJZ2VHEValue73.x - chunkENJZ2VHEValue72.x),
              Math.abs(chunkENJZ2VHEValue73.y - chunkENJZ2VHEValue72.y),
            ),
            (chunkENJZ2VHEValue80 =
              chunkENJZ2VHEValue74.x === chunkENJZ2VHEValue75.x
                ? {
                    x:
                      chunkENJZ2VHEValue77 < 0
                        ? chunkENJZ2VHEValue75.x - 5 + chunkENJZ2VHEValue79
                        : chunkENJZ2VHEValue75.x + 5 - chunkENJZ2VHEValue79,
                    y:
                      chunkENJZ2VHEValue78 < 0
                        ? chunkENJZ2VHEValue75.y - chunkENJZ2VHEValue79
                        : chunkENJZ2VHEValue75.y + chunkENJZ2VHEValue79,
                  }
                : {
                    x:
                      chunkENJZ2VHEValue77 < 0
                        ? chunkENJZ2VHEValue75.x - chunkENJZ2VHEValue79
                        : chunkENJZ2VHEValue75.x + chunkENJZ2VHEValue79,
                    y:
                      chunkENJZ2VHEValue78 < 0
                        ? chunkENJZ2VHEValue75.y - 5 + chunkENJZ2VHEValue79
                        : chunkENJZ2VHEValue75.y + 5 - chunkENJZ2VHEValue79,
                  }))
          : chunkAGHRB4JFR.debug(
              "Corner point skipping fixing",
              Math.abs(chunkENJZ2VHEValue73.x - chunkENJZ2VHEValue72.x),
              Math.abs(chunkENJZ2VHEValue73.y - chunkENJZ2VHEValue72.y),
            );
        chunkENJZ2VHEValue56.push(chunkENJZ2VHEValue80, chunkENJZ2VHEValue76);
      } else
        chunkENJZ2VHEValue56.push(chunkENJZ2VHEParam46[chunkENJZ2VHEValue59]);
    return chunkENJZ2VHEValue56;
  }, "fixCorners"),
  chunkENJZ2VHEValue14 = chunkAGHRB4JFN(
    (chunkENJZ2VHEParam112, chunkENJZ2VHEParam113, chunkENJZ2VHEParam114) => {
      let chunkENJZ2VHEValue200 =
          chunkENJZ2VHEParam112 - chunkENJZ2VHEParam113 - chunkENJZ2VHEParam114,
        chunkENJZ2VHEValue201 = Math.floor(chunkENJZ2VHEValue200 / 4);
      return `0 ${chunkENJZ2VHEParam113} ${Array(chunkENJZ2VHEValue201).fill("2 2").join(" ")} ${chunkENJZ2VHEParam114}`;
    },
    "generateDashArray",
  );
export const chunkENJZ2VHEN = chunkAGHRB4JFN(function (
  chunkENJZ2VHEParam1,
  chunkENJZ2VHEParam2,
  chunkENJZ2VHEParam3,
  chunkENJZ2VHEParam4,
  chunkENJZ2VHEParam5,
  chunkENJZ2VHEParam6,
  chunkENJZ2VHEParam7,
  chunkENJZ2VHEParam8 = false,
) {
  if (!chunkENJZ2VHEParam7)
    throw Error(
      `insertEdge: missing diagramId for edge "${chunkENJZ2VHEParam2.id}" \u2014 edge IDs require a diagram prefix for uniqueness`,
    );
  let { handDrawnSeed } = _chunkICPOFSXXB(),
    chunkENJZ2VHEValue17 = chunkENJZ2VHEParam2.points,
    chunkENJZ2VHEValue18 = false,
    chunkENJZ2VHEValue19 = chunkENJZ2VHEParam5;
  var chunkENJZ2VHEValue20 = chunkENJZ2VHEParam6;
  let chunkENJZ2VHEValue21 = [];
  for (let chunkENJZ2VHEValue203 in chunkENJZ2VHEParam2.cssCompiledStyles)
    chunkX2U36JSPA(chunkENJZ2VHEValue203) ||
      chunkENJZ2VHEValue21.push(
        chunkENJZ2VHEParam2.cssCompiledStyles[chunkENJZ2VHEValue203],
      );
  chunkAGHRB4JFR.debug(
    "UIO intersect check",
    chunkENJZ2VHEParam2.points,
    chunkENJZ2VHEValue20.x,
    chunkENJZ2VHEValue19.x,
  );
  chunkENJZ2VHEValue20.intersect &&
    chunkENJZ2VHEValue19.intersect &&
    !chunkENJZ2VHEParam8 &&
    ((chunkENJZ2VHEValue17 = chunkENJZ2VHEValue17.slice(
      1,
      chunkENJZ2VHEParam2.points.length - 1,
    )),
    chunkENJZ2VHEValue17.unshift(
      chunkENJZ2VHEValue19.intersect(chunkENJZ2VHEValue17[0]),
    ),
    chunkAGHRB4JFR.debug(
      "Last point UIO",
      chunkENJZ2VHEParam2.start,
      "-->",
      chunkENJZ2VHEParam2.end,
      chunkENJZ2VHEValue17[chunkENJZ2VHEValue17.length - 1],
      chunkENJZ2VHEValue20,
      chunkENJZ2VHEValue20.intersect(
        chunkENJZ2VHEValue17[chunkENJZ2VHEValue17.length - 1],
      ),
    ),
    chunkENJZ2VHEValue17.push(
      chunkENJZ2VHEValue20.intersect(
        chunkENJZ2VHEValue17[chunkENJZ2VHEValue17.length - 1],
      ),
    ));
  let _chunkENJZ2VHET = btoa(JSON.stringify(chunkENJZ2VHEValue17));
  chunkENJZ2VHEParam2.toCluster &&
    (chunkAGHRB4JFR.info(
      "to cluster abc88",
      chunkENJZ2VHEParam3.get(chunkENJZ2VHEParam2.toCluster),
    ),
    (chunkENJZ2VHEValue17 = chunkENJZ2VHEValue11(
      chunkENJZ2VHEParam2.points,
      chunkENJZ2VHEParam3.get(chunkENJZ2VHEParam2.toCluster).node,
    )),
    (chunkENJZ2VHEValue18 = true));
  chunkENJZ2VHEParam2.fromCluster &&
    (chunkAGHRB4JFR.debug(
      "from cluster abc88",
      chunkENJZ2VHEParam3.get(chunkENJZ2VHEParam2.fromCluster),
      JSON.stringify(chunkENJZ2VHEValue17, null, 2),
    ),
    (chunkENJZ2VHEValue17 = chunkENJZ2VHEValue11(
      chunkENJZ2VHEValue17.reverse(),
      chunkENJZ2VHEParam3.get(chunkENJZ2VHEParam2.fromCluster).node,
    ).reverse()),
    (chunkENJZ2VHEValue18 = true));
  let chunkENJZ2VHEValue22 = chunkENJZ2VHEValue17.filter(
      (item) => !Number.isNaN(item.y),
    ),
    _chunkENJZ2VHER = chunkENJZ2VHEValue5(chunkENJZ2VHEParam2.curve);
  _chunkENJZ2VHER !== "rounded" &&
    (chunkENJZ2VHEValue22 = chunkENJZ2VHEValue13(chunkENJZ2VHEValue22));
  let chunkENJZ2VHEValue23 = monotoneR;
  switch (_chunkENJZ2VHER) {
    case "linear":
      chunkENJZ2VHEValue23 = monotoneR;
      break;
    case "basis":
      chunkENJZ2VHEValue23 = stepH;
      break;
    case "cardinal":
      chunkENJZ2VHEValue23 = stepD;
      break;
    case "bumpX":
      chunkENJZ2VHEValue23 = stepG;
      break;
    case "bumpY":
      chunkENJZ2VHEValue23 = stepUnderscore;
      break;
    case "catmullRom":
      chunkENJZ2VHEValue23 = stepC;
      break;
    case "monotoneX":
      chunkENJZ2VHEValue23 = monotoneT;
      break;
    case "monotoneY":
      chunkENJZ2VHEValue23 = monotoneN;
      break;
    case "natural":
      chunkENJZ2VHEValue23 = stepI;
      break;
    case "step":
      chunkENJZ2VHEValue23 = stepR;
      break;
    case "stepAfter":
      chunkENJZ2VHEValue23 = stepT;
      break;
    case "stepBefore":
      chunkENJZ2VHEValue23 = stepN;
      break;
    case "rounded":
      chunkENJZ2VHEValue23 = monotoneR;
      break;
    default:
      chunkENJZ2VHEValue23 = stepH;
  }
  let { x: _chunkENJZ2VHEA, y } = chunkBSJP7CBPN(chunkENJZ2VHEParam2),
    chunkENJZ2VHEValue24 = line()
      .x(_chunkENJZ2VHEA)
      .y(y)
      .curve(chunkENJZ2VHEValue23),
    chunkENJZ2VHEValue25;
  switch (chunkENJZ2VHEParam2.thickness) {
    case "normal":
      chunkENJZ2VHEValue25 = "edge-thickness-normal";
      break;
    case "thick":
      chunkENJZ2VHEValue25 = "edge-thickness-thick";
      break;
    case "invisible":
      chunkENJZ2VHEValue25 = "edge-thickness-invisible";
      break;
    default:
      chunkENJZ2VHEValue25 = "edge-thickness-normal";
  }
  switch (chunkENJZ2VHEParam2.pattern) {
    case "solid":
      chunkENJZ2VHEValue25 += " edge-pattern-solid";
      break;
    case "dotted":
      chunkENJZ2VHEValue25 += " edge-pattern-dotted";
      break;
    case "dashed":
      chunkENJZ2VHEValue25 += " edge-pattern-dashed";
      break;
    default:
      chunkENJZ2VHEValue25 += " edge-pattern-solid";
  }
  let chunkENJZ2VHEValue26,
    _chunkENJZ2VHEN =
      _chunkENJZ2VHER === "rounded"
        ? chunkENJZ2VHEHelper3(
            chunkENJZ2VHEHelper5(chunkENJZ2VHEValue22, chunkENJZ2VHEParam2),
            5,
          )
        : chunkENJZ2VHEValue24(chunkENJZ2VHEValue22),
    chunkENJZ2VHEValue27 = Array.isArray(chunkENJZ2VHEParam2.style)
      ? chunkENJZ2VHEParam2.style
      : [chunkENJZ2VHEParam2.style],
    chunkENJZ2VHEValue28 = chunkENJZ2VHEValue27.find((item) =>
      item?.startsWith("stroke:"),
    ),
    chunkENJZ2VHEValue29 = "";
  chunkENJZ2VHEParam2.animate && (chunkENJZ2VHEValue29 = "edge-animation-fast");
  chunkENJZ2VHEParam2.animation &&
    (chunkENJZ2VHEValue29 = "edge-animation-" + chunkENJZ2VHEParam2.animation);
  let _chunkENJZ2VHEI = false;
  if (chunkENJZ2VHEParam2.look === "handDrawn") {
    let chunkENJZ2VHEValue130 = rough.svg(chunkENJZ2VHEParam1);
    Object.assign([], chunkENJZ2VHEValue22);
    let chunkENJZ2VHEValue131 = chunkENJZ2VHEValue130.path(_chunkENJZ2VHEN, {
      roughness: 0.3,
      seed: handDrawnSeed,
    });
    chunkENJZ2VHEValue25 += " transition";
    chunkENJZ2VHEValue26 = Src(chunkENJZ2VHEValue131)
      .select("path")
      .attr("id", `${chunkENJZ2VHEParam7}-${chunkENJZ2VHEParam2.id}`)
      .attr(
        "class",
        " " +
          chunkENJZ2VHEValue25 +
          (chunkENJZ2VHEParam2.classes
            ? " " + chunkENJZ2VHEParam2.classes
            : "") +
          (chunkENJZ2VHEValue29 ? " " + chunkENJZ2VHEValue29 : ""),
      )
      .attr(
        "style",
        chunkENJZ2VHEValue27
          ? chunkENJZ2VHEValue27.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
          : "",
      );
    let chunkENJZ2VHEValue132 = chunkENJZ2VHEValue26.attr("d");
    chunkENJZ2VHEValue26.attr("d", chunkENJZ2VHEValue132);
    chunkENJZ2VHEParam1.node().appendChild(chunkENJZ2VHEValue26.node());
  } else {
    let chunkENJZ2VHEValue65 = chunkENJZ2VHEValue21.join(";"),
      chunkENJZ2VHEValue66 = chunkENJZ2VHEValue27
        ? chunkENJZ2VHEValue27.reduce(
            (accumulator, current) => accumulator + current + ";",
            "",
          )
        : "",
      chunkENJZ2VHEValue67 =
        (chunkENJZ2VHEValue65
          ? chunkENJZ2VHEValue65 + ";" + chunkENJZ2VHEValue66 + ";"
          : chunkENJZ2VHEValue66) +
        ";" +
        (chunkENJZ2VHEValue27
          ? chunkENJZ2VHEValue27.reduce(
              (accumulator, current) => accumulator + ";" + current,
              "",
            )
          : "");
    chunkENJZ2VHEValue26 = chunkENJZ2VHEParam1
      .append("path")
      .attr("d", _chunkENJZ2VHEN)
      .attr("id", `${chunkENJZ2VHEParam7}-${chunkENJZ2VHEParam2.id}`)
      .attr(
        "class",
        " " +
          chunkENJZ2VHEValue25 +
          (chunkENJZ2VHEParam2.classes
            ? " " + chunkENJZ2VHEParam2.classes
            : "") +
          (chunkENJZ2VHEValue29 ? " " + chunkENJZ2VHEValue29 : ""),
      )
      .attr("style", chunkENJZ2VHEValue67);
    chunkENJZ2VHEValue28 = chunkENJZ2VHEValue67.match(/stroke:([^;]+)/)?.[1];
    _chunkENJZ2VHEI =
      chunkENJZ2VHEParam2.animate === true ||
      !!chunkENJZ2VHEParam2.animation ||
      chunkENJZ2VHEValue65.includes("animation");
    let chunkENJZ2VHEValue68 = chunkENJZ2VHEValue26.node(),
      chunkENJZ2VHEValue69 =
        typeof chunkENJZ2VHEValue68.getTotalLength == "function"
          ? chunkENJZ2VHEValue68.getTotalLength()
          : 0,
      chunkENJZ2VHEValue70 =
        chunkBSJP7CBPI[chunkENJZ2VHEParam2.arrowTypeStart] || 0,
      chunkENJZ2VHEValue71 =
        chunkBSJP7CBPI[chunkENJZ2VHEParam2.arrowTypeEnd] || 0;
    if (chunkENJZ2VHEParam2.look === "neo" && !_chunkENJZ2VHEI) {
      let chunkENJZ2VHEValue169 = `stroke-dasharray: ${chunkENJZ2VHEParam2.pattern === "dotted" || chunkENJZ2VHEParam2.pattern === "dashed" ? chunkENJZ2VHEValue14(chunkENJZ2VHEValue69, chunkENJZ2VHEValue70, chunkENJZ2VHEValue71) : `0 ${chunkENJZ2VHEValue70} ${chunkENJZ2VHEValue69 - chunkENJZ2VHEValue70 - chunkENJZ2VHEValue71} ${chunkENJZ2VHEValue71}`}; stroke-dashoffset: 0;`;
      chunkENJZ2VHEValue26.attr(
        "style",
        chunkENJZ2VHEValue169 + chunkENJZ2VHEValue26.attr("style"),
      );
    }
  }
  chunkENJZ2VHEValue26.attr("data-edge", true);
  chunkENJZ2VHEValue26.attr("data-et", "edge");
  chunkENJZ2VHEValue26.attr("data-id", chunkENJZ2VHEParam2.id);
  chunkENJZ2VHEValue26.attr("data-points", _chunkENJZ2VHET);
  chunkENJZ2VHEValue26.attr(
    "data-look",
    chunk5PVQY5BWF(chunkENJZ2VHEParam2.look),
  );
  chunkENJZ2VHEParam2.showPoints &&
    chunkENJZ2VHEValue22.forEach((item) => {
      chunkENJZ2VHEParam1
        .append("circle")
        .style("stroke", "red")
        .style("fill", "red")
        .attr("r", 1)
        .attr("cx", item.x)
        .attr("cy", item.y);
    });
  let chunkENJZ2VHEValue30 = "";
  (_chunkICPOFSXXB().flowchart.arrowMarkerAbsolute ||
    _chunkICPOFSXXB().state.arrowMarkerAbsolute) &&
    ((chunkENJZ2VHEValue30 =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      window.location.search),
    (chunkENJZ2VHEValue30 = chunkENJZ2VHEValue30
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)")));
  chunkAGHRB4JFR.info("arrowTypeStart", chunkENJZ2VHEParam2.arrowTypeStart);
  chunkAGHRB4JFR.info("arrowTypeEnd", chunkENJZ2VHEParam2.arrowTypeEnd);
  let chunkENJZ2VHEValue31 =
    !_chunkENJZ2VHEI && chunkENJZ2VHEParam2?.look === "neo";
  chunkENJZ2VHEValue1(
    chunkENJZ2VHEValue26,
    chunkENJZ2VHEParam2,
    chunkENJZ2VHEValue30,
    chunkENJZ2VHEParam7,
    chunkENJZ2VHEParam4,
    chunkENJZ2VHEValue31,
    chunkENJZ2VHEValue28,
  );
  let chunkENJZ2VHEValue32 = Math.floor(chunkENJZ2VHEValue17.length / 2),
    chunkENJZ2VHEValue33 = chunkENJZ2VHEValue17[chunkENJZ2VHEValue32];
  chunk5PVQY5BWC.isLabelCoordinateInPath(
    chunkENJZ2VHEValue33,
    chunkENJZ2VHEValue26.attr("d"),
  ) || (chunkENJZ2VHEValue18 = true);
  let $ = {};
  return (
    chunkENJZ2VHEValue18 && ($.updatedPath = chunkENJZ2VHEValue17),
    ($.originalPath = chunkENJZ2VHEParam2.points),
    $
  );
}, "insertEdge");
function chunkENJZ2VHEHelper3(chunkENJZ2VHEParam53, chunkENJZ2VHEParam54) {
  if (chunkENJZ2VHEParam53.length < 2) return "";
  let chunkENJZ2VHEValue60 = "",
    chunkENJZ2VHEValue61 = chunkENJZ2VHEParam53.length;
  for (
    let chunkENJZ2VHEValue81 = 0;
    chunkENJZ2VHEValue81 < chunkENJZ2VHEValue61;
    chunkENJZ2VHEValue81++
  ) {
    let chunkENJZ2VHEValue83 = chunkENJZ2VHEParam53[chunkENJZ2VHEValue81],
      chunkENJZ2VHEValue84 = chunkENJZ2VHEParam53[chunkENJZ2VHEValue81 - 1],
      chunkENJZ2VHEValue85 = chunkENJZ2VHEParam53[chunkENJZ2VHEValue81 + 1];
    if (chunkENJZ2VHEValue81 === 0)
      chunkENJZ2VHEValue60 += `M${chunkENJZ2VHEValue83.x},${chunkENJZ2VHEValue83.y}`;
    else if (chunkENJZ2VHEValue81 === chunkENJZ2VHEValue61 - 1)
      chunkENJZ2VHEValue60 += `L${chunkENJZ2VHEValue83.x},${chunkENJZ2VHEValue83.y}`;
    else {
      let chunkENJZ2VHEValue89 =
          chunkENJZ2VHEValue83.x - chunkENJZ2VHEValue84.x,
        chunkENJZ2VHEValue90 = chunkENJZ2VHEValue83.y - chunkENJZ2VHEValue84.y,
        chunkENJZ2VHEValue91 = chunkENJZ2VHEValue85.x - chunkENJZ2VHEValue83.x,
        chunkENJZ2VHEValue92 = chunkENJZ2VHEValue85.y - chunkENJZ2VHEValue83.y,
        chunkENJZ2VHEValue93 = Math.hypot(
          chunkENJZ2VHEValue89,
          chunkENJZ2VHEValue90,
        ),
        chunkENJZ2VHEValue94 = Math.hypot(
          chunkENJZ2VHEValue91,
          chunkENJZ2VHEValue92,
        );
      if (chunkENJZ2VHEValue93 < 1e-5 || chunkENJZ2VHEValue94 < 1e-5) {
        chunkENJZ2VHEValue60 += `L${chunkENJZ2VHEValue83.x},${chunkENJZ2VHEValue83.y}`;
        continue;
      }
      let chunkENJZ2VHEValue95 = chunkENJZ2VHEValue89 / chunkENJZ2VHEValue93,
        chunkENJZ2VHEValue96 = chunkENJZ2VHEValue90 / chunkENJZ2VHEValue93,
        chunkENJZ2VHEValue97 = chunkENJZ2VHEValue91 / chunkENJZ2VHEValue94,
        chunkENJZ2VHEValue98 = chunkENJZ2VHEValue92 / chunkENJZ2VHEValue94,
        chunkENJZ2VHEValue99 =
          chunkENJZ2VHEValue95 * chunkENJZ2VHEValue97 +
          chunkENJZ2VHEValue96 * chunkENJZ2VHEValue98,
        chunkENJZ2VHEValue100 = Math.max(-1, Math.min(1, chunkENJZ2VHEValue99)),
        chunkENJZ2VHEValue101 = Math.acos(chunkENJZ2VHEValue100);
      if (
        chunkENJZ2VHEValue101 < 1e-5 ||
        Math.abs(Math.PI - chunkENJZ2VHEValue101) < 1e-5
      ) {
        chunkENJZ2VHEValue60 += `L${chunkENJZ2VHEValue83.x},${chunkENJZ2VHEValue83.y}`;
        continue;
      }
      let chunkENJZ2VHEValue102 = Math.min(
          chunkENJZ2VHEParam54 / Math.sin(chunkENJZ2VHEValue101 / 2),
          chunkENJZ2VHEValue93 / 2,
          chunkENJZ2VHEValue94 / 2,
        ),
        chunkENJZ2VHEValue103 =
          chunkENJZ2VHEValue83.x - chunkENJZ2VHEValue95 * chunkENJZ2VHEValue102,
        chunkENJZ2VHEValue104 =
          chunkENJZ2VHEValue83.y - chunkENJZ2VHEValue96 * chunkENJZ2VHEValue102,
        chunkENJZ2VHEValue105 =
          chunkENJZ2VHEValue83.x + chunkENJZ2VHEValue97 * chunkENJZ2VHEValue102,
        chunkENJZ2VHEValue106 =
          chunkENJZ2VHEValue83.y + chunkENJZ2VHEValue98 * chunkENJZ2VHEValue102;
      chunkENJZ2VHEValue60 += `L${chunkENJZ2VHEValue103},${chunkENJZ2VHEValue104}`;
      chunkENJZ2VHEValue60 += `Q${chunkENJZ2VHEValue83.x},${chunkENJZ2VHEValue83.y} ${chunkENJZ2VHEValue105},${chunkENJZ2VHEValue106}`;
    }
  }
  return chunkENJZ2VHEValue60;
}
chunkAGHRB4JFN(chunkENJZ2VHEHelper3, "generateRoundedPath");
function chunkENJZ2VHEHelper4(chunkENJZ2VHEParam100, chunkENJZ2VHEParam101) {
  if (!chunkENJZ2VHEParam100 || !chunkENJZ2VHEParam101)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  let chunkENJZ2VHEValue183 = chunkENJZ2VHEParam101.x - chunkENJZ2VHEParam100.x,
    chunkENJZ2VHEValue184 = chunkENJZ2VHEParam101.y - chunkENJZ2VHEParam100.y;
  return {
    angle: Math.atan2(chunkENJZ2VHEValue184, chunkENJZ2VHEValue183),
    deltaX: chunkENJZ2VHEValue183,
    deltaY: chunkENJZ2VHEValue184,
  };
}
chunkAGHRB4JFN(chunkENJZ2VHEHelper4, "calculateDeltaAndAngle");
function chunkENJZ2VHEHelper5(chunkENJZ2VHEParam89, chunkENJZ2VHEParam90) {
  let chunkENJZ2VHEValue123 = chunkENJZ2VHEParam89.map((item) => ({
    ...item,
  }));
  if (
    chunkENJZ2VHEParam89.length >= 2 &&
    chunkBSJP7CBPR[chunkENJZ2VHEParam90.arrowTypeStart]
  ) {
    let chunkENJZ2VHEValue170 =
        chunkBSJP7CBPR[chunkENJZ2VHEParam90.arrowTypeStart],
      chunkENJZ2VHEValue171 = chunkENJZ2VHEParam89[0],
      chunkENJZ2VHEValue172 = chunkENJZ2VHEParam89[1],
      { angle } = chunkENJZ2VHEHelper4(
        chunkENJZ2VHEValue171,
        chunkENJZ2VHEValue172,
      ),
      chunkENJZ2VHEValue173 = chunkENJZ2VHEValue170 * Math.cos(angle),
      chunkENJZ2VHEValue174 = chunkENJZ2VHEValue170 * Math.sin(angle);
    chunkENJZ2VHEValue123[0].x =
      chunkENJZ2VHEValue171.x + chunkENJZ2VHEValue173;
    chunkENJZ2VHEValue123[0].y =
      chunkENJZ2VHEValue171.y + chunkENJZ2VHEValue174;
  }
  let chunkENJZ2VHEValue124 = chunkENJZ2VHEParam89.length;
  if (
    chunkENJZ2VHEValue124 >= 2 &&
    chunkBSJP7CBPR[chunkENJZ2VHEParam90.arrowTypeEnd]
  ) {
    let chunkENJZ2VHEValue164 =
        chunkBSJP7CBPR[chunkENJZ2VHEParam90.arrowTypeEnd],
      chunkENJZ2VHEValue165 = chunkENJZ2VHEParam89[chunkENJZ2VHEValue124 - 1],
      chunkENJZ2VHEValue166 = chunkENJZ2VHEParam89[chunkENJZ2VHEValue124 - 2],
      { angle } = chunkENJZ2VHEHelper4(
        chunkENJZ2VHEValue166,
        chunkENJZ2VHEValue165,
      ),
      chunkENJZ2VHEValue167 = chunkENJZ2VHEValue164 * Math.cos(angle),
      chunkENJZ2VHEValue168 = chunkENJZ2VHEValue164 * Math.sin(angle);
    chunkENJZ2VHEValue123[chunkENJZ2VHEValue124 - 1].x =
      chunkENJZ2VHEValue165.x - chunkENJZ2VHEValue167;
    chunkENJZ2VHEValue123[chunkENJZ2VHEValue124 - 1].y =
      chunkENJZ2VHEValue165.y - chunkENJZ2VHEValue168;
  }
  return chunkENJZ2VHEValue123;
}
chunkAGHRB4JFN(chunkENJZ2VHEHelper5, "applyMarkerOffsetsToPoints");
var chunkENJZ2VHEValue15 = chunkAGHRB4JFN(
    (
      chunkENJZ2VHEParam118,
      chunkENJZ2VHEParam119,
      chunkENJZ2VHEParam120,
      chunkENJZ2VHEParam121,
    ) => {
      chunkENJZ2VHEParam119.forEach((item) => {
        chunkENJZ2VHEValue16[item](
          chunkENJZ2VHEParam118,
          chunkENJZ2VHEParam120,
          chunkENJZ2VHEParam121,
        );
      });
    },
    "insertMarkers",
  ),
  chunkENJZ2VHEValue16 = {
    extension: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam23, chunkENJZ2VHEParam24, chunkENJZ2VHEParam25) => {
        chunkAGHRB4JFR.trace("Making markers for ", chunkENJZ2VHEParam25);
        chunkENJZ2VHEParam23
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam25 +
              "_" +
              chunkENJZ2VHEParam24 +
              "-extensionStart",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEParam24)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M 1,7 L18,13 V 1 Z");
        chunkENJZ2VHEParam23
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam25 + "_" + chunkENJZ2VHEParam24 + "-extensionEnd",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEParam24)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 V 13 L18,7 Z");
        chunkENJZ2VHEParam23
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam25 +
              "_" +
              chunkENJZ2VHEParam24 +
              "-extensionStart-margin",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEParam24)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("viewBox", "0 0 20 14")
          .append("polygon")
          .attr("points", "10,7 18,13 18,1")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "0");
        chunkENJZ2VHEParam23
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam25 +
              "_" +
              chunkENJZ2VHEParam24 +
              "-extensionEnd-margin",
          )
          .attr("class", "marker extension " + chunkENJZ2VHEParam24)
          .attr("refX", 9)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("viewBox", "0 0 20 14")
          .append("polygon")
          .attr("points", "10,1 10,13 18,7")
          .style("stroke-width", 2)
          .style("stroke-dasharray", "0");
      },
      "extension",
    ),
    composition: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam28, chunkENJZ2VHEParam29, chunkENJZ2VHEParam30) => {
        chunkENJZ2VHEParam28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam30 +
              "_" +
              chunkENJZ2VHEParam29 +
              "-compositionStart",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEParam29)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam30 +
              "_" +
              chunkENJZ2VHEParam29 +
              "-compositionEnd",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEParam29)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam30 +
              "_" +
              chunkENJZ2VHEParam29 +
              "-compositionStart-margin",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEParam29)
          .attr("refX", 15)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("viewBox", "0 0 15 15")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam28
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam30 +
              "_" +
              chunkENJZ2VHEParam29 +
              "-compositionEnd-margin",
          )
          .attr("class", "marker composition " + chunkENJZ2VHEParam29)
          .attr("refX", 3.5)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "composition",
    ),
    aggregation: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam31, chunkENJZ2VHEParam32, chunkENJZ2VHEParam33) => {
        chunkENJZ2VHEParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam33 +
              "_" +
              chunkENJZ2VHEParam32 +
              "-aggregationStart",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEParam32)
          .attr("refX", 18)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam33 +
              "_" +
              chunkENJZ2VHEParam32 +
              "-aggregationEnd",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEParam32)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam33 +
              "_" +
              chunkENJZ2VHEParam32 +
              "-aggregationStart-margin",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEParam32)
          .attr("refX", 15)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 2)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam31
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam33 +
              "_" +
              chunkENJZ2VHEParam32 +
              "-aggregationEnd-margin",
          )
          .attr("class", "marker aggregation " + chunkENJZ2VHEParam32)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 2)
          .attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
      },
      "aggregation",
    ),
    dependency: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam34, chunkENJZ2VHEParam35, chunkENJZ2VHEParam36) => {
        chunkENJZ2VHEParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam36 +
              "_" +
              chunkENJZ2VHEParam35 +
              "-dependencyStart",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEParam35)
          .attr("refX", 6)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam36 +
              "_" +
              chunkENJZ2VHEParam35 +
              "-dependencyEnd",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEParam35)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
        chunkENJZ2VHEParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam36 +
              "_" +
              chunkENJZ2VHEParam35 +
              "-dependencyStart-margin",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEParam35)
          .attr("refX", 4)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
        chunkENJZ2VHEParam34
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam36 +
              "_" +
              chunkENJZ2VHEParam35 +
              "-dependencyEnd-margin",
          )
          .attr("class", "marker dependency " + chunkENJZ2VHEParam35)
          .attr("refX", 16)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 28)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .style("stroke-width", 0)
          .attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
      },
      "dependency",
    ),
    lollipop: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam20, chunkENJZ2VHEParam21, chunkENJZ2VHEParam22) => {
        chunkENJZ2VHEParam20
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam22 +
              "_" +
              chunkENJZ2VHEParam21 +
              "-lollipopStart",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEParam21)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        chunkENJZ2VHEParam20
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam22 + "_" + chunkENJZ2VHEParam21 + "-lollipopEnd",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEParam21)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6);
        chunkENJZ2VHEParam20
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam22 +
              "_" +
              chunkENJZ2VHEParam21 +
              "-lollipopStart-margin",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEParam21)
          .attr("refX", 13)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6)
          .attr("stroke-width", 2);
        chunkENJZ2VHEParam20
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam22 +
              "_" +
              chunkENJZ2VHEParam21 +
              "-lollipopEnd-margin",
          )
          .attr("class", "marker lollipop " + chunkENJZ2VHEParam21)
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerWidth", 190)
          .attr("markerHeight", 240)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("circle")
          .attr("fill", "transparent")
          .attr("cx", 7)
          .attr("cy", 7)
          .attr("r", 6)
          .attr("stroke-width", 2);
      },
      "lollipop",
    ),
    point: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam17, chunkENJZ2VHEParam18, chunkENJZ2VHEParam19) => {
        chunkENJZ2VHEParam17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam19 + "_" + chunkENJZ2VHEParam18 + "-pointEnd",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam18)
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
        chunkENJZ2VHEParam17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam19 + "_" + chunkENJZ2VHEParam18 + "-pointStart",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam18)
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
        chunkENJZ2VHEParam17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam19 +
              "_" +
              chunkENJZ2VHEParam18 +
              "-pointEnd-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam18)
          .attr("viewBox", "0 0 11.5 14")
          .attr("refX", 11.5)
          .attr("refY", 7)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 10.5)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 0 0 L 11.5 7 L 0 14 z")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEParam17
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam19 +
              "_" +
              chunkENJZ2VHEParam18 +
              "-pointStart-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam18)
          .attr("viewBox", "0 0 11.5 14")
          .attr("refX", 1)
          .attr("refY", 7)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 11.5)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("polygon")
          .attr("points", "0,7 11.5,14 11.5,0")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
      },
      "point",
    ),
    circle: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam11, chunkENJZ2VHEParam12, chunkENJZ2VHEParam13) => {
        chunkENJZ2VHEParam11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam13 + "_" + chunkENJZ2VHEParam12 + "-circleEnd",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam12)
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
        chunkENJZ2VHEParam11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam13 + "_" + chunkENJZ2VHEParam12 + "-circleStart",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam12)
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
        chunkENJZ2VHEParam11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam13 +
              "_" +
              chunkENJZ2VHEParam12 +
              "-circleEnd-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam12)
          .attr("viewBox", "0 0 10 10")
          .attr("refY", 5)
          .attr("refX", 12.25)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 14)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
        chunkENJZ2VHEParam11
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam13 +
              "_" +
              chunkENJZ2VHEParam12 +
              "-circleStart-margin",
          )
          .attr("class", "marker " + chunkENJZ2VHEParam12)
          .attr("viewBox", "0 0 10 10")
          .attr("refX", -2)
          .attr("refY", 5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 14)
          .attr("markerHeight", 14)
          .attr("orient", "auto")
          .append("circle")
          .attr("cx", "5")
          .attr("cy", "5")
          .attr("r", "5")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 0)
          .style("stroke-dasharray", "1,0");
      },
      "circle",
    ),
    cross: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam14, chunkENJZ2VHEParam15, chunkENJZ2VHEParam16) => {
        chunkENJZ2VHEParam14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam16 + "_" + chunkENJZ2VHEParam15 + "-crossEnd",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEParam15)
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
        chunkENJZ2VHEParam14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam16 + "_" + chunkENJZ2VHEParam15 + "-crossStart",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEParam15)
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
        chunkENJZ2VHEParam14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam16 +
              "_" +
              chunkENJZ2VHEParam15 +
              "-crossEnd-margin",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEParam15)
          .attr("viewBox", "0 0 15 15")
          .attr("refX", 17.7)
          .attr("refY", 7.5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2.5);
        chunkENJZ2VHEParam14
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam16 +
              "_" +
              chunkENJZ2VHEParam15 +
              "-crossStart-margin",
          )
          .attr("class", "marker cross " + chunkENJZ2VHEParam15)
          .attr("viewBox", "0 0 15 15")
          .attr("refX", -3.5)
          .attr("refY", 7.5)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 12)
          .attr("markerHeight", 12)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 1,1 L 14,14 M 1,14 L 14,1")
          .attr("class", "arrowMarkerPath")
          .style("stroke-width", 2.5)
          .style("stroke-dasharray", "1,0");
      },
      "cross",
    ),
    barb: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam95, chunkENJZ2VHEParam96, chunkENJZ2VHEParam97) => {
        chunkENJZ2VHEParam95
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam97 + "_" + chunkENJZ2VHEParam96 + "-barbEnd",
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
    barbNeo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam64, chunkENJZ2VHEParam65, chunkENJZ2VHEParam66) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { transitionColor } = themeVariables;
        chunkENJZ2VHEParam64
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam66 + "_" + chunkENJZ2VHEParam65 + "-barbEnd",
          )
          .attr("refX", 19)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "strokeWidth")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z");
        chunkENJZ2VHEParam64
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam66 +
              "_" +
              chunkENJZ2VHEParam65 +
              "-barbEnd-margin",
          )
          .attr("refX", 17)
          .attr("refY", 7)
          .attr("markerWidth", 20)
          .attr("markerHeight", 14)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M 19,7 L11,14 L13,7 L11,0 Z")
          .attr("fill", `${transitionColor}`);
      },
      "barbNeo",
    ),
    only_one: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam78, chunkENJZ2VHEParam79, chunkENJZ2VHEParam80) => {
        chunkENJZ2VHEParam78
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam80 + "_" + chunkENJZ2VHEParam79 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEParam79)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18");
        chunkENJZ2VHEParam78
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam80 + "_" + chunkENJZ2VHEParam79 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEParam79)
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
      (chunkENJZ2VHEParam58, chunkENJZ2VHEParam59, chunkENJZ2VHEParam60) => {
        let chunkENJZ2VHEValue63 = chunkENJZ2VHEParam58
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam60 +
              "_" +
              chunkENJZ2VHEParam59 +
              "-zeroOrOneStart",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEParam59)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkENJZ2VHEValue63
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("r", 6);
        chunkENJZ2VHEValue63.append("path").attr("d", "M9,0 L9,18");
        let chunkENJZ2VHEValue64 = chunkENJZ2VHEParam58
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam60 + "_" + chunkENJZ2VHEParam59 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEParam59)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("orient", "auto");
        chunkENJZ2VHEValue64
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("r", 6);
        chunkENJZ2VHEValue64.append("path").attr("d", "M21,0 L21,18");
      },
      "zero_or_one",
    ),
    one_or_more: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam75, chunkENJZ2VHEParam76, chunkENJZ2VHEParam77) => {
        chunkENJZ2VHEParam75
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam77 +
              "_" +
              chunkENJZ2VHEParam76 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEParam76)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
        chunkENJZ2VHEParam75
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam77 + "_" + chunkENJZ2VHEParam76 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEParam76)
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
      (chunkENJZ2VHEParam50, chunkENJZ2VHEParam51, chunkENJZ2VHEParam52) => {
        let chunkENJZ2VHEValue57 = chunkENJZ2VHEParam50
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam52 +
              "_" +
              chunkENJZ2VHEParam51 +
              "-zeroOrMoreStart",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEParam51)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkENJZ2VHEValue57
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 48)
          .attr("cy", 18)
          .attr("r", 6);
        chunkENJZ2VHEValue57
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
        let chunkENJZ2VHEValue58 = chunkENJZ2VHEParam50
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam52 +
              "_" +
              chunkENJZ2VHEParam51 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEParam51)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto");
        chunkENJZ2VHEValue58
          .append("circle")
          .attr("fill", "white")
          .attr("cx", 9)
          .attr("cy", 18)
          .attr("r", 6);
        chunkENJZ2VHEValue58
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
      },
      "zero_or_more",
    ),
    only_one_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam55, chunkENJZ2VHEParam56, chunkENJZ2VHEParam57) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEParam55
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam57 + "_" + chunkENJZ2VHEParam56 + "-onlyOneStart",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEParam56)
          .attr("refX", 0)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M9,0 L9,18 M15,0 L15,18")
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEParam55
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam57 + "_" + chunkENJZ2VHEParam56 + "-onlyOneEnd",
          )
          .attr("class", "marker onlyOne " + chunkENJZ2VHEParam56)
          .attr("refX", 18)
          .attr("refY", 9)
          .attr("markerWidth", 18)
          .attr("markerHeight", 18)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M3,0 L3,18 M9,0 L9,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "only_one_neo",
    ),
    zero_or_one_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam40, chunkENJZ2VHEParam41, chunkENJZ2VHEParam42) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth, mainBkg } = themeVariables,
          chunkENJZ2VHEValue46 = chunkENJZ2VHEParam40
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEParam42 +
                "_" +
                chunkENJZ2VHEParam41 +
                "-zeroOrOneStart",
            )
            .attr("class", "marker zeroOrOne " + chunkENJZ2VHEParam41)
            .attr("refX", 0)
            .attr("refY", 9)
            .attr("markerWidth", 30)
            .attr("markerHeight", 18)
            .attr("orient", "auto")
            .attr("markerUnits", "userSpaceOnUse");
        chunkENJZ2VHEValue46
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 21)
          .attr("cy", 9)
          .attr("stroke-width", `${strokeWidth}`)
          .attr("r", 6);
        chunkENJZ2VHEValue46
          .append("path")
          .attr("d", "M9,0 L9,18")
          .attr("stroke-width", `${strokeWidth}`);
        let chunkENJZ2VHEValue47 = chunkENJZ2VHEParam40
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam42 + "_" + chunkENJZ2VHEParam41 + "-zeroOrOneEnd",
          )
          .attr("class", "marker zeroOrOne " + chunkENJZ2VHEParam41)
          .attr("refX", 30)
          .attr("refY", 9)
          .attr("markerWidth", 30)
          .attr("markerHeight", 18)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto");
        chunkENJZ2VHEValue47
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 9)
          .attr("cy", 9)
          .attr("stroke-width", `${strokeWidth}`)
          .attr("r", 6);
        chunkENJZ2VHEValue47
          .append("path")
          .attr("d", "M21,0 L21,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "zero_or_one_neo",
    ),
    one_or_more_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam47, chunkENJZ2VHEParam48, chunkENJZ2VHEParam49) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEParam47
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam49 +
              "_" +
              chunkENJZ2VHEParam48 +
              "-oneOrMoreStart",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEParam48)
          .attr("refX", 18)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .append("path")
          .attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27")
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEParam47
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam49 + "_" + chunkENJZ2VHEParam48 + "-oneOrMoreEnd",
          )
          .attr("class", "marker oneOrMore " + chunkENJZ2VHEParam48)
          .attr("refX", 27)
          .attr("refY", 18)
          .attr("markerWidth", 45)
          .attr("markerHeight", 36)
          .attr("markerUnits", "userSpaceOnUse")
          .attr("orient", "auto")
          .append("path")
          .attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "one_or_more_neo",
    ),
    zero_or_more_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam37, chunkENJZ2VHEParam38, chunkENJZ2VHEParam39) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth, mainBkg } = themeVariables,
          chunkENJZ2VHEValue44 = chunkENJZ2VHEParam37
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEParam39 +
                "_" +
                chunkENJZ2VHEParam38 +
                "-zeroOrMoreStart",
            )
            .attr("class", "marker zeroOrMore " + chunkENJZ2VHEParam38)
            .attr("refX", 18)
            .attr("refY", 18)
            .attr("markerWidth", 57)
            .attr("markerHeight", 36)
            .attr("markerUnits", "userSpaceOnUse")
            .attr("orient", "auto");
        chunkENJZ2VHEValue44
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 45.5)
          .attr("cy", 18)
          .attr("r", 6)
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEValue44
          .append("path")
          .attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18")
          .attr("stroke-width", `${strokeWidth}`);
        let chunkENJZ2VHEValue45 = chunkENJZ2VHEParam37
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam39 +
              "_" +
              chunkENJZ2VHEParam38 +
              "-zeroOrMoreEnd",
          )
          .attr("class", "marker zeroOrMore " + chunkENJZ2VHEParam38)
          .attr("refX", 39)
          .attr("refY", 18)
          .attr("markerWidth", 57)
          .attr("markerHeight", 36)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse");
        chunkENJZ2VHEValue45
          .append("circle")
          .attr("fill", mainBkg ?? "white")
          .attr("cx", 11)
          .attr("cy", 18)
          .attr("r", 6)
          .attr("stroke-width", `${strokeWidth}`);
        chunkENJZ2VHEValue45
          .append("path")
          .attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "zero_or_more_neo",
    ),
    requirement_arrow: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam92, chunkENJZ2VHEParam93, chunkENJZ2VHEParam94) => {
        chunkENJZ2VHEParam92
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam94 +
              "_" +
              chunkENJZ2VHEParam93 +
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
      (chunkENJZ2VHEParam83, chunkENJZ2VHEParam84, chunkENJZ2VHEParam85) => {
        let chunkENJZ2VHEValue110 = chunkENJZ2VHEParam83
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam85 +
              "_" +
              chunkENJZ2VHEParam84 +
              "-requirement_containsStart",
          )
          .attr("refX", 0)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .append("g");
        chunkENJZ2VHEValue110
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkENJZ2VHEValue110
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkENJZ2VHEValue110
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
      },
      "requirement_contains",
    ),
    requirement_arrow_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam86, chunkENJZ2VHEParam87, chunkENJZ2VHEParam88) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth } = themeVariables;
        chunkENJZ2VHEParam86
          .append("defs")
          .append("marker")
          .attr(
            "id",
            chunkENJZ2VHEParam88 +
              "_" +
              chunkENJZ2VHEParam87 +
              "-requirement_arrowEnd",
          )
          .attr("refX", 20)
          .attr("refY", 10)
          .attr("markerWidth", 20)
          .attr("markerHeight", 20)
          .attr("orient", "auto")
          .attr("markerUnits", "userSpaceOnUse")
          .attr("stroke-width", `${strokeWidth}`)
          .attr("viewBox", "0 0 25 20")
          .append("path")
          .attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20")
          .attr("stroke-linejoin", "miter");
      },
      "requirement_arrow_neo",
    ),
    requirement_contains_neo: chunkAGHRB4JFN(
      (chunkENJZ2VHEParam61, chunkENJZ2VHEParam62, chunkENJZ2VHEParam63) => {
        let { themeVariables } = _chunkICPOFSXXY(),
          { strokeWidth } = themeVariables,
          chunkENJZ2VHEValue82 = chunkENJZ2VHEParam61
            .append("defs")
            .append("marker")
            .attr(
              "id",
              chunkENJZ2VHEParam63 +
                "_" +
                chunkENJZ2VHEParam62 +
                "-requirement_containsStart",
            )
            .attr("refX", 0)
            .attr("refY", 10)
            .attr("markerWidth", 20)
            .attr("markerHeight", 20)
            .attr("orient", "auto")
            .attr("markerUnits", "userSpaceOnUse")
            .append("g");
        chunkENJZ2VHEValue82
          .append("circle")
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 9)
          .attr("fill", "none");
        chunkENJZ2VHEValue82
          .append("line")
          .attr("x1", 1)
          .attr("x2", 19)
          .attr("y1", 10)
          .attr("y2", 10);
        chunkENJZ2VHEValue82
          .append("line")
          .attr("y1", 1)
          .attr("y2", 19)
          .attr("x1", 10)
          .attr("x2", 10);
        chunkENJZ2VHEValue82
          .selectAll("*")
          .attr("stroke-width", `${strokeWidth}`);
      },
      "requirement_contains_neo",
    ),
  };
export const chunkENJZ2VHEI = chunkENJZ2VHEValue15;
export function initMermaidEdgeRendererK5Chunk(): void {}
