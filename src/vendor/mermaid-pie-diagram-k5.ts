// Restored from ref/webview/assets/pieDiagram-DEJITSTG-D-t1CIhj.js
// Flat boundary. Vendored pieDiagramDEJITSTG chunk restored from the Codex webview bundle.
import { Ordinal } from "../utils/ordinal";
import { arc } from "./d3-shape-arc";
import { pie } from "./d3-shape-pie";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC as chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWH, chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
const _chunkICPOFSXXB = chunkICPOFSXXB,
  _chunkICPOFSXXC = chunkICPOFSXXC,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var pieDiagramDEJITSTGValue1 = chunkICPOFSXXD.pie,
  pieDiagramDEJITSTGValue2 = {
    sections: new Map(),
    showData: false,
    config: pieDiagramDEJITSTGValue1,
  },
  pieDiagramDEJITSTGValue3 = pieDiagramDEJITSTGValue2.sections,
  pieDiagramDEJITSTGValue4 = pieDiagramDEJITSTGValue2.showData,
  pieDiagramDEJITSTGValue5 = structuredClone(pieDiagramDEJITSTGValue1),
  pieDiagramDEJITSTGValue6 = {
    getConfig: chunkAGHRB4JFN(
      () => structuredClone(pieDiagramDEJITSTGValue5),
      "getConfig",
    ),
    clear: chunkAGHRB4JFN(() => {
      pieDiagramDEJITSTGValue3 = new Map();
      pieDiagramDEJITSTGValue4 = pieDiagramDEJITSTGValue2.showData;
      _chunkICPOFSXXA();
    }, "clear"),
    setDiagramTitle: _chunkICPOFSXXW,
    getDiagramTitle: chunkICPOFSXXC,
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setAccDescription: chunkICPOFSXXB,
    getAccDescription: chunkICPOFSXXUnderscore,
    addSection: chunkAGHRB4JFN(({ label, value }) => {
      if (value < 0)
        throw Error(
          `"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`,
        );
      pieDiagramDEJITSTGValue3.has(label) ||
        (pieDiagramDEJITSTGValue3.set(label, value),
        chunkAGHRB4JFR.debug(
          `added new section: ${label}, with value: ${value}`,
        ));
    }, "addSection"),
    getSections: chunkAGHRB4JFN(() => pieDiagramDEJITSTGValue3, "getSections"),
    setShowData: chunkAGHRB4JFN((pieDiagramDEJITSTGParam23) => {
      pieDiagramDEJITSTGValue4 = pieDiagramDEJITSTGParam23;
    }, "setShowData"),
    getShowData: chunkAGHRB4JFN(() => pieDiagramDEJITSTGValue4, "getShowData"),
  },
  pieDiagramDEJITSTGValue7 = chunkAGHRB4JFN(
    (pieDiagramDEJITSTGParam7, pieDiagramDEJITSTGParam8) => {
      populateCommonDb(pieDiagramDEJITSTGParam7, pieDiagramDEJITSTGParam8);
      pieDiagramDEJITSTGParam8.setShowData(pieDiagramDEJITSTGParam7.showData);
      pieDiagramDEJITSTGParam7.sections.map(
        pieDiagramDEJITSTGParam8.addSection,
      );
    },
    "populateDb",
  ),
  pieDiagramDEJITSTGValue8 = {
    parse: chunkAGHRB4JFN(async (pieDiagramDEJITSTGParam12) => {
      let pieDiagramDEJITSTGValue37 = await MermaidParserCore(
        "pie",
        pieDiagramDEJITSTGParam12,
      );
      chunkAGHRB4JFR.debug(pieDiagramDEJITSTGValue37);
      pieDiagramDEJITSTGValue7(
        pieDiagramDEJITSTGValue37,
        pieDiagramDEJITSTGValue6,
      );
    }, "parse"),
  },
  pieDiagramDEJITSTGValue9 = chunkAGHRB4JFN(
    (pieDiagramDEJITSTGParam5) => `
  .pieCircle{
    stroke: ${pieDiagramDEJITSTGParam5.pieStrokeColor};
    stroke-width : ${pieDiagramDEJITSTGParam5.pieStrokeWidth};
    opacity : ${pieDiagramDEJITSTGParam5.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${pieDiagramDEJITSTGParam5.pieOuterStrokeColor};
    stroke-width: ${pieDiagramDEJITSTGParam5.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${pieDiagramDEJITSTGParam5.pieTitleTextSize};
    fill: ${pieDiagramDEJITSTGParam5.pieTitleTextColor};
    font-family: ${pieDiagramDEJITSTGParam5.fontFamily};
  }
  .slice {
    font-family: ${pieDiagramDEJITSTGParam5.fontFamily};
    fill: ${pieDiagramDEJITSTGParam5.pieSectionTextColor};
    font-size:${pieDiagramDEJITSTGParam5.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${pieDiagramDEJITSTGParam5.pieLegendTextColor};
    font-family: ${pieDiagramDEJITSTGParam5.fontFamily};
    font-size: ${pieDiagramDEJITSTGParam5.pieLegendTextSize};
  }
`,
    "getStyles",
  ),
  pieDiagramDEJITSTGValue10 = chunkAGHRB4JFN((pieDiagramDEJITSTGParam6) => {
    let pieDiagramDEJITSTGValue34 = [
        ...pieDiagramDEJITSTGParam6.values(),
      ].reduce((accumulator, current) => accumulator + current, 0),
      pieDiagramDEJITSTGValue35 = [...pieDiagramDEJITSTGParam6.entries()]
        .map(([pieDiagramDEJITSTGParam15, pieDiagramDEJITSTGParam16]) => ({
          label: pieDiagramDEJITSTGParam15,
          value: pieDiagramDEJITSTGParam16,
        }))
        .filter((item) => (item.value / pieDiagramDEJITSTGValue34) * 100 >= 1);
    return pie()
      .value((pieDiagramDEJITSTGParam22) => pieDiagramDEJITSTGParam22.value)
      .sort(null)(pieDiagramDEJITSTGValue35);
  }, "createPieArcs");
export const pieDiagramDEJITSTG = {
  parser: pieDiagramDEJITSTGValue8,
  db: pieDiagramDEJITSTGValue6,
  renderer: {
    draw: chunkAGHRB4JFN(
      (
        pieDiagramDEJITSTGParam1,
        pieDiagramDEJITSTGParam2,
        pieDiagramDEJITSTGParam3,
        pieDiagramDEJITSTGParam4,
      ) => {
        chunkAGHRB4JFR.debug(
          "rendering pie chart\n" + pieDiagramDEJITSTGParam1,
        );
        let pieDiagramDEJITSTGValue11 = pieDiagramDEJITSTGParam4.db,
          pieDiagramDEJITSTGValue12 = _chunkICPOFSXXB(),
          pieDiagramDEJITSTGValue13 = chunk5PVQY5BWP(
            pieDiagramDEJITSTGValue11.getConfig(),
            pieDiagramDEJITSTGValue12.pie,
          ),
          pieDiagramDEJITSTGValue14 = chunk426QAEUC(pieDiagramDEJITSTGParam2),
          pieDiagramDEJITSTGValue15 = pieDiagramDEJITSTGValue14.append("g");
        pieDiagramDEJITSTGValue15.attr("transform", "translate(225,225)");
        let { themeVariables } = pieDiagramDEJITSTGValue12,
          [pieDiagramDEJITSTGValue16] = chunk5PVQY5BWH(
            themeVariables.pieOuterStrokeWidth,
          );
        pieDiagramDEJITSTGValue16 ??= 2;
        let pieDiagramDEJITSTGValue17 = pieDiagramDEJITSTGValue13.textPosition,
          pieDiagramDEJITSTGValue18 = arc().innerRadius(0).outerRadius(185),
          pieDiagramDEJITSTGValue19 = arc()
            .innerRadius(185 * pieDiagramDEJITSTGValue17)
            .outerRadius(185 * pieDiagramDEJITSTGValue17);
        pieDiagramDEJITSTGValue15
          .append("circle")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 185 + pieDiagramDEJITSTGValue16 / 2)
          .attr("class", "pieOuterCircle");
        let pieDiagramDEJITSTGValue20 = pieDiagramDEJITSTGValue11.getSections(),
          pieDiagramDEJITSTGValue21 = pieDiagramDEJITSTGValue10(
            pieDiagramDEJITSTGValue20,
          ),
          pieDiagramDEJITSTGValue22 = [
            themeVariables.pie1,
            themeVariables.pie2,
            themeVariables.pie3,
            themeVariables.pie4,
            themeVariables.pie5,
            themeVariables.pie6,
            themeVariables.pie7,
            themeVariables.pie8,
            themeVariables.pie9,
            themeVariables.pie10,
            themeVariables.pie11,
            themeVariables.pie12,
          ],
          pieDiagramDEJITSTGValue23 = 0;
        pieDiagramDEJITSTGValue20.forEach((item) => {
          pieDiagramDEJITSTGValue23 += item;
        });
        let pieDiagramDEJITSTGValue24 = pieDiagramDEJITSTGValue21.filter(
            (item) =>
              ((item.data.value / pieDiagramDEJITSTGValue23) * 100).toFixed(
                0,
              ) !== "0",
          ),
          pieDiagramDEJITSTGValue25 = Ordinal(pieDiagramDEJITSTGValue22).domain(
            [...pieDiagramDEJITSTGValue20.keys()],
          );
        pieDiagramDEJITSTGValue15
          .selectAll("mySlices")
          .data(pieDiagramDEJITSTGValue24)
          .enter()
          .append("path")
          .attr("d", pieDiagramDEJITSTGValue18)
          .attr("fill", (pieDiagramDEJITSTGParam19) =>
            pieDiagramDEJITSTGValue25(pieDiagramDEJITSTGParam19.data.label),
          )
          .attr("class", "pieCircle");
        pieDiagramDEJITSTGValue15
          .selectAll("mySlices")
          .data(pieDiagramDEJITSTGValue24)
          .enter()
          .append("text")
          .text(
            (pieDiagramDEJITSTGParam13) =>
              (
                (pieDiagramDEJITSTGParam13.data.value /
                  pieDiagramDEJITSTGValue23) *
                100
              ).toFixed(0) + "%",
          )
          .attr(
            "transform",
            (pieDiagramDEJITSTGParam14) =>
              "translate(" +
              pieDiagramDEJITSTGValue19.centroid(pieDiagramDEJITSTGParam14) +
              ")",
          )
          .style("text-anchor", "middle")
          .attr("class", "slice");
        let pieDiagramDEJITSTGValue26 = pieDiagramDEJITSTGValue15
            .append("text")
            .text(pieDiagramDEJITSTGValue11.getDiagramTitle())
            .attr("x", 0)
            .attr("y", -200)
            .attr("class", "pieTitleText"),
          _pieDiagramDEJITSTG = [...pieDiagramDEJITSTGValue20.entries()].map(
            ([pieDiagramDEJITSTGParam17, pieDiagramDEJITSTGParam18]) => ({
              label: pieDiagramDEJITSTGParam17,
              value: pieDiagramDEJITSTGParam18,
            }),
          ),
          pieDiagramDEJITSTGValue27 = pieDiagramDEJITSTGValue15
            .selectAll(".legend")
            .data(_pieDiagramDEJITSTG)
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr(
              "transform",
              (pieDiagramDEJITSTGParam9, pieDiagramDEJITSTGParam10) => {
                let pieDiagramDEJITSTGValue36 =
                  (22 * _pieDiagramDEJITSTG.length) / 2;
                return (
                  "translate(216," +
                  (pieDiagramDEJITSTGParam10 * 22 - pieDiagramDEJITSTGValue36) +
                  ")"
                );
              },
            );
        pieDiagramDEJITSTGValue27
          .append("rect")
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", (pieDiagramDEJITSTGParam20) =>
            pieDiagramDEJITSTGValue25(pieDiagramDEJITSTGParam20.label),
          )
          .style("stroke", (pieDiagramDEJITSTGParam21) =>
            pieDiagramDEJITSTGValue25(pieDiagramDEJITSTGParam21.label),
          );
        pieDiagramDEJITSTGValue27
          .append("text")
          .attr("x", 22)
          .attr("y", 14)
          .text((pieDiagramDEJITSTGParam11) =>
            pieDiagramDEJITSTGValue11.getShowData()
              ? `${pieDiagramDEJITSTGParam11.label} [${pieDiagramDEJITSTGParam11.value}]`
              : pieDiagramDEJITSTGParam11.label,
          );
        let pieDiagramDEJITSTGValue28 =
            512 +
            Math.max(
              ...pieDiagramDEJITSTGValue27
                .selectAll("text")
                .nodes()
                .map((item) => item?.getBoundingClientRect().width ?? 0),
            ),
          pieDiagramDEJITSTGValue29 =
            pieDiagramDEJITSTGValue26.node()?.getBoundingClientRect().width ??
            0,
          pieDiagramDEJITSTGValue30 = 225 - pieDiagramDEJITSTGValue29 / 2,
          pieDiagramDEJITSTGValue31 = 225 + pieDiagramDEJITSTGValue29 / 2,
          pieDiagramDEJITSTGValue32 = Math.min(0, pieDiagramDEJITSTGValue30),
          pieDiagramDEJITSTGValue33 =
            Math.max(pieDiagramDEJITSTGValue28, pieDiagramDEJITSTGValue31) -
            pieDiagramDEJITSTGValue32;
        pieDiagramDEJITSTGValue14.attr(
          "viewBox",
          `${pieDiagramDEJITSTGValue32} 0 ${pieDiagramDEJITSTGValue33} 450`,
        );
        _chunkICPOFSXXC(
          pieDiagramDEJITSTGValue14,
          450,
          pieDiagramDEJITSTGValue33,
          pieDiagramDEJITSTGValue13.useMaxWidth,
        );
      },
      "draw",
    ),
  },
  styles: pieDiagramDEJITSTGValue9,
};
