// Restored from ref/webview/assets/diagram-PSM6KHXK-_uPuWuHP.js
// Flat boundary. Vendored diagramPSM6KHXK chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJP } from "./chunk-s3r3byoj";
import { defaultLocaleT } from "./d3-format-default-locale";
import { Src } from "./roughjs-geometry";
import { Ordinal } from "../utils/ordinal";
import { treemapA, treemapT } from "./d3-hierarchy-treemap";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  chunkABZYJK2DO,
  _chunkABZYJK2DC as chunkABZYJK2DU,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  _chunkABZYJK2DY,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
import { chunkQN33PNHL } from "./chunk-qn33-pnhl-dv-z-pb-bs-u";
import { chunkATLVNIR6I, chunkATLVNIR6A } from "./chunk-atlvnir6";
const _chunkABZYJK2DC = chunkABZYJK2DF;
var diagramPSM6KHXKValue1 = class {
  constructor() {
    this.nodes = [];
    this.levels = new Map();
    this.outerNodes = [];
    this.classes = new Map();
    this.setAccTitle = chunkABZYJK2DN;
    this.getAccTitle = chunkABZYJK2DR;
    this.setDiagramTitle = chunkABZYJK2DU;
    this.getDiagramTitle = chunkABZYJK2DF;
    this.getAccDescription = chunkABZYJK2DJ;
    this.setAccDescription = chunkABZYJK2DZ;
  }
  static {
    chunkAGHRB4JFN(this, "TreeMapDB");
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    let diagramPSM6KHXKValue83 = chunkABZYJK2DO,
      diagramPSM6KHXKValue84 = _chunkABZYJK2DY();
    return chunkS3R3BYOJP({
      ...diagramPSM6KHXKValue83.treemap,
      ...(diagramPSM6KHXKValue84.treemap ?? {}),
    });
  }
  addNode(diagramPSM6KHXKParam21, diagramPSM6KHXKParam22) {
    this.nodes.push(diagramPSM6KHXKParam21);
    this.levels.set(diagramPSM6KHXKParam21, diagramPSM6KHXKParam22);
    diagramPSM6KHXKParam22 === 0 &&
      (this.outerNodes.push(diagramPSM6KHXKParam21),
      (this.root ??= diagramPSM6KHXKParam21));
  }
  getRoot() {
    return {
      name: "",
      children: this.outerNodes,
    };
  }
  addClass(diagramPSM6KHXKParam12, diagramPSM6KHXKParam13) {
    let diagramPSM6KHXKValue71 = this.classes.get(diagramPSM6KHXKParam12) ?? {
        id: diagramPSM6KHXKParam12,
        styles: [],
        textStyles: [],
      },
      diagramPSM6KHXKValue72 = diagramPSM6KHXKParam13
        .replace(/\\,/g, "§§§")
        .replace(/,/g, ";")
        .replace(/§§§/g, ",")
        .split(";");
    diagramPSM6KHXKValue72 &&
      diagramPSM6KHXKValue72.forEach((item) => {
        chunkATLVNIR6A(item) &&
          (diagramPSM6KHXKValue71?.textStyles
            ? diagramPSM6KHXKValue71.textStyles.push(item)
            : (diagramPSM6KHXKValue71.textStyles = [item]));
        diagramPSM6KHXKValue71?.styles
          ? diagramPSM6KHXKValue71.styles.push(item)
          : (diagramPSM6KHXKValue71.styles = [item]);
      });
    this.classes.set(diagramPSM6KHXKParam12, diagramPSM6KHXKValue71);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(diagramPSM6KHXKParam25) {
    return this.classes.get(diagramPSM6KHXKParam25)?.styles ?? [];
  }
  clear() {
    _chunkABZYJK2DK();
    this.nodes = [];
    this.levels = new Map();
    this.outerNodes = [];
    this.classes = new Map();
    this.root = undefined;
  }
};
function diagramPSM6KHXKHelper1(diagramPSM6KHXKParam10) {
  if (!diagramPSM6KHXKParam10.length) return [];
  let diagramPSM6KHXKValue59 = [],
    diagramPSM6KHXKValue60 = [];
  return (
    diagramPSM6KHXKParam10.forEach((item) => {
      let diagramPSM6KHXKValue61 = {
        name: item.name,
        children: item.type === "Leaf" ? undefined : [],
      };
      for (
        diagramPSM6KHXKValue61.classSelector = item?.classSelector,
          item?.cssCompiledStyles &&
            (diagramPSM6KHXKValue61.cssCompiledStyles = [
              item.cssCompiledStyles,
            ]),
          item.type === "Leaf" &&
            item.value !== undefined &&
            (diagramPSM6KHXKValue61.value = item.value);
        diagramPSM6KHXKValue60.length > 0 &&
        diagramPSM6KHXKValue60[diagramPSM6KHXKValue60.length - 1].level >=
          item.level;

      )
        diagramPSM6KHXKValue60.pop();
      if (diagramPSM6KHXKValue60.length === 0)
        diagramPSM6KHXKValue59.push(diagramPSM6KHXKValue61);
      else {
        let diagramPSM6KHXKValue81 =
          diagramPSM6KHXKValue60[diagramPSM6KHXKValue60.length - 1].node;
        diagramPSM6KHXKValue81.children
          ? diagramPSM6KHXKValue81.children.push(diagramPSM6KHXKValue61)
          : (diagramPSM6KHXKValue81.children = [diagramPSM6KHXKValue61]);
      }
      item.type !== "Leaf" &&
        diagramPSM6KHXKValue60.push({
          node: diagramPSM6KHXKValue61,
          level: item.level,
        });
    }),
    diagramPSM6KHXKValue59
  );
}
chunkAGHRB4JFN(diagramPSM6KHXKHelper1, "buildHierarchy");
var diagramPSM6KHXKValue2 = chunkAGHRB4JFN(
    (diagramPSM6KHXKParam7, diagramPSM6KHXKParam8) => {
      chunk4BX2VUAB(diagramPSM6KHXKParam7, diagramPSM6KHXKParam8);
      let diagramPSM6KHXKValue50 = [];
      for (let diagramPSM6KHXKValue79 of diagramPSM6KHXKParam7.TreemapRows ??
        [])
        diagramPSM6KHXKValue79.$type === "ClassDefStatement" &&
          diagramPSM6KHXKParam8.addClass(
            diagramPSM6KHXKValue79.className ?? "",
            diagramPSM6KHXKValue79.styleText ?? "",
          );
      for (let diagramPSM6KHXKValue63 of diagramPSM6KHXKParam7.TreemapRows ??
        []) {
        let diagramPSM6KHXKValue65 = diagramPSM6KHXKValue63.item;
        if (!diagramPSM6KHXKValue65) continue;
        let diagramPSM6KHXKValue66 = diagramPSM6KHXKValue63.indent
            ? parseInt(diagramPSM6KHXKValue63.indent)
            : 0,
          diagramPSM6KHXKValue67 = diagramPSM6KHXKValue3(
            diagramPSM6KHXKValue65,
          ),
          diagramPSM6KHXKValue68 = diagramPSM6KHXKValue65.classSelector
            ? diagramPSM6KHXKParam8.getStylesForClass(
                diagramPSM6KHXKValue65.classSelector,
              )
            : [],
          diagramPSM6KHXKValue69 =
            diagramPSM6KHXKValue68.length > 0
              ? diagramPSM6KHXKValue68.join(";")
              : undefined,
          diagramPSM6KHXKValue70 = {
            level: diagramPSM6KHXKValue66,
            name: diagramPSM6KHXKValue67,
            type: diagramPSM6KHXKValue65.$type,
            value: diagramPSM6KHXKValue65.value,
            classSelector: diagramPSM6KHXKValue65.classSelector,
            cssCompiledStyles: diagramPSM6KHXKValue69,
          };
        diagramPSM6KHXKValue50.push(diagramPSM6KHXKValue70);
      }
      let diagramPSM6KHXKValue51 = diagramPSM6KHXKHelper1(
          diagramPSM6KHXKValue50,
        ),
        diagramPSM6KHXKValue52 = chunkAGHRB4JFN(
          (diagramPSM6KHXKParam19, diagramPSM6KHXKParam20) => {
            for (let diagramPSM6KHXKValue80 of diagramPSM6KHXKParam19) {
              diagramPSM6KHXKParam8.addNode(
                diagramPSM6KHXKValue80,
                diagramPSM6KHXKParam20,
              );
              diagramPSM6KHXKValue80.children &&
                diagramPSM6KHXKValue80.children.length > 0 &&
                diagramPSM6KHXKValue52(
                  diagramPSM6KHXKValue80.children,
                  diagramPSM6KHXKParam20 + 1,
                );
            }
          },
          "addNodesRecursively",
        );
      diagramPSM6KHXKValue52(diagramPSM6KHXKValue51, 0);
    },
    "populate",
  ),
  diagramPSM6KHXKValue3 = chunkAGHRB4JFN(
    (diagramPSM6KHXKParam42) =>
      diagramPSM6KHXKParam42.name ? String(diagramPSM6KHXKParam42.name) : "",
    "getItemName",
  ),
  diagramPSM6KHXKValue4 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (diagramPSM6KHXKParam11) => {
      try {
        let diagramPSM6KHXKValue74 = await MermaidParserCore(
          "treemap",
          diagramPSM6KHXKParam11,
        );
        chunkAGHRB4JFR.debug("Treemap AST:", diagramPSM6KHXKValue74);
        let diagramPSM6KHXKValue75 = diagramPSM6KHXKValue4.parser?.yy;
        if (!(diagramPSM6KHXKValue75 instanceof diagramPSM6KHXKValue1))
          throw Error(
            "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
          );
        diagramPSM6KHXKValue2(diagramPSM6KHXKValue74, diagramPSM6KHXKValue75);
      } catch (diagramPSM6KHXKValue86) {
        throw (
          chunkAGHRB4JFR.error(
            "Error parsing treemap:",
            diagramPSM6KHXKValue86,
          ),
          diagramPSM6KHXKValue86
        );
      }
    }, "parse"),
  },
  diagramPSM6KHXKValue8 = {
    draw: chunkAGHRB4JFN(
      (
        diagramPSM6KHXKParam1,
        diagramPSM6KHXKParam2,
        diagramPSM6KHXKParam3,
        diagramPSM6KHXKParam4,
      ) => {
        let diagramPSM6KHXKValue10 = diagramPSM6KHXKParam4.db,
          diagramPSM6KHXKValue11 = diagramPSM6KHXKValue10.getConfig(),
          diagramPSM6KHXKValue12 = diagramPSM6KHXKValue11.padding ?? 10,
          diagramPSM6KHXKValue13 = diagramPSM6KHXKValue10.getDiagramTitle(),
          diagramPSM6KHXKValue14 = diagramPSM6KHXKValue10.getRoot(),
          { themeVariables } = _chunkABZYJK2DY();
        if (!diagramPSM6KHXKValue14) return;
        let diagramPSM6KHXKValue15 = diagramPSM6KHXKValue13 ? 30 : 0,
          diagramPSM6KHXKValue16 = chunkEXTU4WIE(diagramPSM6KHXKParam2),
          diagramPSM6KHXKValue17 = diagramPSM6KHXKValue11.nodeWidth
            ? diagramPSM6KHXKValue11.nodeWidth * 10
            : 960,
          diagramPSM6KHXKValue18 = diagramPSM6KHXKValue11.nodeHeight
            ? diagramPSM6KHXKValue11.nodeHeight * 10
            : 500,
          diagramPSM6KHXKValue19 = diagramPSM6KHXKValue17,
          diagramPSM6KHXKValue20 =
            diagramPSM6KHXKValue18 + diagramPSM6KHXKValue15;
        diagramPSM6KHXKValue16.attr(
          "viewBox",
          `0 0 ${diagramPSM6KHXKValue19} ${diagramPSM6KHXKValue20}`,
        );
        _chunkABZYJK2DC(
          diagramPSM6KHXKValue16,
          diagramPSM6KHXKValue20,
          diagramPSM6KHXKValue19,
          diagramPSM6KHXKValue11.useMaxWidth,
        );
        let diagramPSM6KHXKValue21;
        try {
          let diagramPSM6KHXKValue64 =
            diagramPSM6KHXKValue11.valueFormat || ",";
          if (diagramPSM6KHXKValue64 === "$0,0")
            diagramPSM6KHXKValue21 = chunkAGHRB4JFN(
              (diagramPSM6KHXKParam64) =>
                "$" + defaultLocaleT(",")(diagramPSM6KHXKParam64),
              "valueFormat",
            );
          else if (
            diagramPSM6KHXKValue64.startsWith("$") &&
            diagramPSM6KHXKValue64.includes(",")
          ) {
            let diagramPSM6KHXKValue77 = /\.\d+/.exec(diagramPSM6KHXKValue64),
              diagramPSM6KHXKValue78 = diagramPSM6KHXKValue77
                ? diagramPSM6KHXKValue77[0]
                : "";
            diagramPSM6KHXKValue21 = chunkAGHRB4JFN(
              (diagramPSM6KHXKParam56) =>
                "$" +
                defaultLocaleT("," + diagramPSM6KHXKValue78)(
                  diagramPSM6KHXKParam56,
                ),
              "valueFormat",
            );
          } else if (diagramPSM6KHXKValue64.startsWith("$")) {
            let diagramPSM6KHXKValue82 = diagramPSM6KHXKValue64.substring(1);
            diagramPSM6KHXKValue21 = chunkAGHRB4JFN(
              (diagramPSM6KHXKParam57) =>
                "$" +
                defaultLocaleT(diagramPSM6KHXKValue82 || "")(
                  diagramPSM6KHXKParam57,
                ),
              "valueFormat",
            );
          } else
            diagramPSM6KHXKValue21 = defaultLocaleT(diagramPSM6KHXKValue64);
        } catch (diagramPSM6KHXKValue85) {
          chunkAGHRB4JFR.error(
            "Error creating format function:",
            diagramPSM6KHXKValue85,
          );
          diagramPSM6KHXKValue21 = defaultLocaleT(",");
        }
        let diagramPSM6KHXKValue22 = Ordinal().range([
            "transparent",
            themeVariables.cScale0,
            themeVariables.cScale1,
            themeVariables.cScale2,
            themeVariables.cScale3,
            themeVariables.cScale4,
            themeVariables.cScale5,
            themeVariables.cScale6,
            themeVariables.cScale7,
            themeVariables.cScale8,
            themeVariables.cScale9,
            themeVariables.cScale10,
            themeVariables.cScale11,
          ]),
          diagramPSM6KHXKValue23 = Ordinal().range([
            "transparent",
            themeVariables.cScalePeer0,
            themeVariables.cScalePeer1,
            themeVariables.cScalePeer2,
            themeVariables.cScalePeer3,
            themeVariables.cScalePeer4,
            themeVariables.cScalePeer5,
            themeVariables.cScalePeer6,
            themeVariables.cScalePeer7,
            themeVariables.cScalePeer8,
            themeVariables.cScalePeer9,
            themeVariables.cScalePeer10,
            themeVariables.cScalePeer11,
          ]),
          _DiagramPSM6KHXK = Ordinal().range([
            themeVariables.cScaleLabel0,
            themeVariables.cScaleLabel1,
            themeVariables.cScaleLabel2,
            themeVariables.cScaleLabel3,
            themeVariables.cScaleLabel4,
            themeVariables.cScaleLabel5,
            themeVariables.cScaleLabel6,
            themeVariables.cScaleLabel7,
            themeVariables.cScaleLabel8,
            themeVariables.cScaleLabel9,
            themeVariables.cScaleLabel10,
            themeVariables.cScaleLabel11,
          ]);
        diagramPSM6KHXKValue13 &&
          diagramPSM6KHXKValue16
            .append("text")
            .attr("x", diagramPSM6KHXKValue19 / 2)
            .attr("y", diagramPSM6KHXKValue15 / 2)
            .attr("class", "treemapTitle")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(diagramPSM6KHXKValue13);
        let diagramPSM6KHXKValue24 = diagramPSM6KHXKValue16
            .append("g")
            .attr("transform", `translate(0, ${diagramPSM6KHXKValue15})`)
            .attr("class", "treemapContainer"),
          diagramPSM6KHXKValue25 = treemapA(diagramPSM6KHXKValue14)
            .sum((diagramPSM6KHXKParam67) => diagramPSM6KHXKParam67.value ?? 0)
            .sort(
              (diagramPSM6KHXKParam37, diagramPSM6KHXKParam38) =>
                (diagramPSM6KHXKParam38.value ?? 0) -
                (diagramPSM6KHXKParam37.value ?? 0),
            ),
          diagramPSM6KHXKValue26 = treemapT()
            .size([diagramPSM6KHXKValue17, diagramPSM6KHXKValue18])
            .paddingTop((diagramPSM6KHXKParam30) =>
              diagramPSM6KHXKParam30.children &&
              diagramPSM6KHXKParam30.children.length > 0
                ? 35
                : 0,
            )
            .paddingInner(diagramPSM6KHXKValue12)
            .paddingLeft((diagramPSM6KHXKParam33) =>
              diagramPSM6KHXKParam33.children &&
              diagramPSM6KHXKParam33.children.length > 0
                ? 10
                : 0,
            )
            .paddingRight((diagramPSM6KHXKParam34) =>
              diagramPSM6KHXKParam34.children &&
              diagramPSM6KHXKParam34.children.length > 0
                ? 10
                : 0,
            )
            .paddingBottom((diagramPSM6KHXKParam35) =>
              diagramPSM6KHXKParam35.children &&
              diagramPSM6KHXKParam35.children.length > 0
                ? 10
                : 0,
            )
            .round(true)(diagramPSM6KHXKValue25),
          diagramPSM6KHXKValue27 = diagramPSM6KHXKValue26
            .descendants()
            .filter((item) => item.children && item.children.length > 0),
          diagramPSM6KHXKValue28 = diagramPSM6KHXKValue24
            .selectAll(".treemapSection")
            .data(diagramPSM6KHXKValue27)
            .enter()
            .append("g")
            .attr("class", "treemapSection")
            .attr(
              "transform",
              (diagramPSM6KHXKParam44) =>
                `translate(${diagramPSM6KHXKParam44.x0},${diagramPSM6KHXKParam44.y0})`,
            );
        diagramPSM6KHXKValue28
          .append("rect")
          .attr(
            "width",
            (diagramPSM6KHXKParam68) =>
              diagramPSM6KHXKParam68.x1 - diagramPSM6KHXKParam68.x0,
          )
          .attr("height", 25)
          .attr("class", "treemapSectionHeader")
          .attr("fill", "none")
          .attr("fill-opacity", 0.6)
          .attr("stroke-width", 0.6)
          .attr("style", (diagramPSM6KHXKParam36) =>
            diagramPSM6KHXKParam36.depth === 0 ? "display: none;" : "",
          );
        diagramPSM6KHXKValue28
          .append("clipPath")
          .attr(
            "id",
            (diagramPSM6KHXKParam48, diagramPSM6KHXKParam49) =>
              `clip-section-${diagramPSM6KHXKParam2}-${diagramPSM6KHXKParam49}`,
          )
          .append("rect")
          .attr("width", (diagramPSM6KHXKParam43) =>
            Math.max(
              0,
              diagramPSM6KHXKParam43.x1 - diagramPSM6KHXKParam43.x0 - 12,
            ),
          )
          .attr("height", 25);
        diagramPSM6KHXKValue28
          .append("rect")
          .attr(
            "width",
            (diagramPSM6KHXKParam69) =>
              diagramPSM6KHXKParam69.x1 - diagramPSM6KHXKParam69.x0,
          )
          .attr(
            "height",
            (diagramPSM6KHXKParam70) =>
              diagramPSM6KHXKParam70.y1 - diagramPSM6KHXKParam70.y0,
          )
          .attr(
            "class",
            (diagramPSM6KHXKParam40, diagramPSM6KHXKParam41) =>
              `treemapSection section${diagramPSM6KHXKParam41}`,
          )
          .attr("fill", (diagramPSM6KHXKParam65) =>
            diagramPSM6KHXKValue22(diagramPSM6KHXKParam65.data.name),
          )
          .attr("fill-opacity", 0.6)
          .attr("stroke", (diagramPSM6KHXKParam66) =>
            diagramPSM6KHXKValue23(diagramPSM6KHXKParam66.data.name),
          )
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.4)
          .attr("style", (diagramPSM6KHXKParam18) => {
            if (diagramPSM6KHXKParam18.depth === 0) return "display: none;";
            let diagramPSM6KHXKValue76 = chunkATLVNIR6I({
              cssCompiledStyles: diagramPSM6KHXKParam18.data.cssCompiledStyles,
            });
            return (
              diagramPSM6KHXKValue76.nodeStyles +
              ";" +
              diagramPSM6KHXKValue76.borderStyles.join(";")
            );
          });
        diagramPSM6KHXKValue28
          .append("text")
          .attr("class", "treemapSectionLabel")
          .attr("x", 6)
          .attr("y", 12.5)
          .attr("dominant-baseline", "middle")
          .text((diagramPSM6KHXKParam39) =>
            diagramPSM6KHXKParam39.depth === 0
              ? ""
              : diagramPSM6KHXKParam39.data.name,
          )
          .attr("font-weight", "bold")
          .attr("style", (diagramPSM6KHXKParam15) =>
            diagramPSM6KHXKParam15.depth === 0
              ? "display: none;"
              : "dominant-baseline: middle; font-size: 12px; fill:" +
                _DiagramPSM6KHXK(diagramPSM6KHXKParam15.data.name) +
                "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                chunkATLVNIR6I({
                  cssCompiledStyles:
                    diagramPSM6KHXKParam15.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
          )
          .each(function (diagramPSM6KHXKParam9) {
            if (diagramPSM6KHXKParam9.depth === 0) return;
            let diagramPSM6KHXKValue53 = Src(this),
              diagramPSM6KHXKValue54 = diagramPSM6KHXKParam9.data.name;
            diagramPSM6KHXKValue53.text(diagramPSM6KHXKValue54);
            let diagramPSM6KHXKValue55 =
                diagramPSM6KHXKParam9.x1 - diagramPSM6KHXKParam9.x0,
              diagramPSM6KHXKValue56;
            diagramPSM6KHXKValue56 =
              diagramPSM6KHXKValue11.showValues !== false &&
              diagramPSM6KHXKParam9.value
                ? diagramPSM6KHXKValue55 - 10 - 30 - 10 - 6
                : diagramPSM6KHXKValue55 - 6 - 6;
            let diagramPSM6KHXKValue57 = Math.max(15, diagramPSM6KHXKValue56),
              diagramPSM6KHXKValue58 = diagramPSM6KHXKValue53.node();
            if (
              diagramPSM6KHXKValue58.getComputedTextLength() >
              diagramPSM6KHXKValue57
            ) {
              let diagramPSM6KHXKValue73 = diagramPSM6KHXKValue54;
              for (; diagramPSM6KHXKValue73.length > 0; ) {
                if (
                  ((diagramPSM6KHXKValue73 = diagramPSM6KHXKValue54.substring(
                    0,
                    diagramPSM6KHXKValue73.length - 1,
                  )),
                  diagramPSM6KHXKValue73.length === 0)
                ) {
                  diagramPSM6KHXKValue53.text("...");
                  diagramPSM6KHXKValue58.getComputedTextLength() >
                    diagramPSM6KHXKValue57 && diagramPSM6KHXKValue53.text("");
                  break;
                }
                if (
                  (diagramPSM6KHXKValue53.text(diagramPSM6KHXKValue73 + "..."),
                  diagramPSM6KHXKValue58.getComputedTextLength() <=
                    diagramPSM6KHXKValue57)
                )
                  break;
              }
            }
          });
        diagramPSM6KHXKValue11.showValues !== false &&
          diagramPSM6KHXKValue28
            .append("text")
            .attr("class", "treemapSectionValue")
            .attr(
              "x",
              (diagramPSM6KHXKParam63) =>
                diagramPSM6KHXKParam63.x1 - diagramPSM6KHXKParam63.x0 - 10,
            )
            .attr("y", 12.5)
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .text((diagramPSM6KHXKParam50) =>
              diagramPSM6KHXKParam50.value
                ? diagramPSM6KHXKValue21(diagramPSM6KHXKParam50.value)
                : "",
            )
            .attr("font-style", "italic")
            .attr("style", (diagramPSM6KHXKParam14) =>
              diagramPSM6KHXKParam14.depth === 0
                ? "display: none;"
                : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" +
                  _DiagramPSM6KHXK(diagramPSM6KHXKParam14.data.name) +
                  "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                  chunkATLVNIR6I({
                    cssCompiledStyles:
                      diagramPSM6KHXKParam14.data.cssCompiledStyles,
                  }).labelStyles.replace("color:", "fill:"),
            );
        let diagramPSM6KHXKValue29 = diagramPSM6KHXKValue26.leaves(),
          diagramPSM6KHXKValue30 = diagramPSM6KHXKValue24
            .selectAll(".treemapLeafGroup")
            .data(diagramPSM6KHXKValue29)
            .enter()
            .append("g")
            .attr(
              "class",
              (diagramPSM6KHXKParam23, diagramPSM6KHXKParam24) =>
                `treemapNode treemapLeafGroup leaf${diagramPSM6KHXKParam24}${diagramPSM6KHXKParam23.data.classSelector ? ` ${diagramPSM6KHXKParam23.data.classSelector}` : ""}x`,
            )
            .attr(
              "transform",
              (diagramPSM6KHXKParam45) =>
                `translate(${diagramPSM6KHXKParam45.x0},${diagramPSM6KHXKParam45.y0})`,
            );
        diagramPSM6KHXKValue30
          .append("rect")
          .attr(
            "width",
            (diagramPSM6KHXKParam71) =>
              diagramPSM6KHXKParam71.x1 - diagramPSM6KHXKParam71.x0,
          )
          .attr(
            "height",
            (diagramPSM6KHXKParam72) =>
              diagramPSM6KHXKParam72.y1 - diagramPSM6KHXKParam72.y0,
          )
          .attr("class", "treemapLeaf")
          .attr("fill", (diagramPSM6KHXKParam28) =>
            diagramPSM6KHXKParam28.parent
              ? diagramPSM6KHXKValue22(diagramPSM6KHXKParam28.parent.data.name)
              : diagramPSM6KHXKValue22(diagramPSM6KHXKParam28.data.name),
          )
          .attr(
            "style",
            (diagramPSM6KHXKParam26) =>
              chunkATLVNIR6I({
                cssCompiledStyles:
                  diagramPSM6KHXKParam26.data.cssCompiledStyles,
              }).nodeStyles,
          )
          .attr("fill-opacity", 0.3)
          .attr("stroke", (diagramPSM6KHXKParam29) =>
            diagramPSM6KHXKParam29.parent
              ? diagramPSM6KHXKValue22(diagramPSM6KHXKParam29.parent.data.name)
              : diagramPSM6KHXKValue22(diagramPSM6KHXKParam29.data.name),
          )
          .attr("stroke-width", 3);
        diagramPSM6KHXKValue30
          .append("clipPath")
          .attr(
            "id",
            (diagramPSM6KHXKParam58, diagramPSM6KHXKParam59) =>
              `clip-${diagramPSM6KHXKParam2}-${diagramPSM6KHXKParam59}`,
          )
          .append("rect")
          .attr("width", (diagramPSM6KHXKParam46) =>
            Math.max(
              0,
              diagramPSM6KHXKParam46.x1 - diagramPSM6KHXKParam46.x0 - 4,
            ),
          )
          .attr("height", (diagramPSM6KHXKParam47) =>
            Math.max(
              0,
              diagramPSM6KHXKParam47.y1 - diagramPSM6KHXKParam47.y0 - 4,
            ),
          );
        diagramPSM6KHXKValue30
          .append("text")
          .attr("class", "treemapLabel")
          .attr(
            "x",
            (diagramPSM6KHXKParam60) =>
              (diagramPSM6KHXKParam60.x1 - diagramPSM6KHXKParam60.x0) / 2,
          )
          .attr(
            "y",
            (diagramPSM6KHXKParam61) =>
              (diagramPSM6KHXKParam61.y1 - diagramPSM6KHXKParam61.y0) / 2,
          )
          .attr(
            "style",
            (diagramPSM6KHXKParam17) =>
              "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" +
              _DiagramPSM6KHXK(diagramPSM6KHXKParam17.data.name) +
              ";" +
              chunkATLVNIR6I({
                cssCompiledStyles:
                  diagramPSM6KHXKParam17.data.cssCompiledStyles,
              }).labelStyles.replace("color:", "fill:"),
          )
          .attr(
            "clip-path",
            (diagramPSM6KHXKParam52, diagramPSM6KHXKParam53) =>
              `url(#clip-${diagramPSM6KHXKParam2}-${diagramPSM6KHXKParam53})`,
          )
          .text((diagramPSM6KHXKParam73) => diagramPSM6KHXKParam73.data.name)
          .each(function (diagramPSM6KHXKParam5) {
            let diagramPSM6KHXKValue31 = Src(this),
              diagramPSM6KHXKValue32 =
                diagramPSM6KHXKParam5.x1 - diagramPSM6KHXKParam5.x0,
              diagramPSM6KHXKValue33 =
                diagramPSM6KHXKParam5.y1 - diagramPSM6KHXKParam5.y0,
              diagramPSM6KHXKValue34 = diagramPSM6KHXKValue31.node(),
              diagramPSM6KHXKValue35 = diagramPSM6KHXKValue32 - 8,
              diagramPSM6KHXKValue36 = diagramPSM6KHXKValue33 - 8;
            if (diagramPSM6KHXKValue35 < 10 || diagramPSM6KHXKValue36 < 10) {
              diagramPSM6KHXKValue31.style("display", "none");
              return;
            }
            let diagramPSM6KHXKValue37 = parseInt(
              diagramPSM6KHXKValue31.style("font-size"),
              10,
            );
            for (
              ;
              diagramPSM6KHXKValue34.getComputedTextLength() >
                diagramPSM6KHXKValue35 && diagramPSM6KHXKValue37 > 8;

            ) {
              diagramPSM6KHXKValue37--;
              diagramPSM6KHXKValue31.style(
                "font-size",
                `${diagramPSM6KHXKValue37}px`,
              );
            }
            let diagramPSM6KHXKValue39 = Math.max(
                6,
                Math.min(28, Math.round(diagramPSM6KHXKValue37 * 0.6)),
              ),
              diagramPSM6KHXKValue40 =
                diagramPSM6KHXKValue37 + 2 + diagramPSM6KHXKValue39;
            for (
              ;
              diagramPSM6KHXKValue40 > diagramPSM6KHXKValue36 &&
              diagramPSM6KHXKValue37 > 8 &&
              (diagramPSM6KHXKValue37--,
              (diagramPSM6KHXKValue39 = Math.max(
                6,
                Math.min(28, Math.round(diagramPSM6KHXKValue37 * 0.6)),
              )),
              !(diagramPSM6KHXKValue39 < 6 && diagramPSM6KHXKValue37 === 8));

            ) {
              diagramPSM6KHXKValue31.style(
                "font-size",
                `${diagramPSM6KHXKValue37}px`,
              );
              diagramPSM6KHXKValue40 =
                diagramPSM6KHXKValue37 + 2 + diagramPSM6KHXKValue39;
            }
            diagramPSM6KHXKValue31.style(
              "font-size",
              `${diagramPSM6KHXKValue37}px`,
            );
            (diagramPSM6KHXKValue34.getComputedTextLength() >
              diagramPSM6KHXKValue35 ||
              diagramPSM6KHXKValue37 < 8 ||
              diagramPSM6KHXKValue36 < diagramPSM6KHXKValue37) &&
              diagramPSM6KHXKValue31.style("display", "none");
          });
        diagramPSM6KHXKValue11.showValues !== false &&
          diagramPSM6KHXKValue30
            .append("text")
            .attr("class", "treemapValue")
            .attr(
              "x",
              (diagramPSM6KHXKParam62) =>
                (diagramPSM6KHXKParam62.x1 - diagramPSM6KHXKParam62.x0) / 2,
            )
            .attr("y", function (diagramPSM6KHXKParam27) {
              return (
                (diagramPSM6KHXKParam27.y1 - diagramPSM6KHXKParam27.y0) / 2
              );
            })
            .attr(
              "style",
              (diagramPSM6KHXKParam16) =>
                "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" +
                _DiagramPSM6KHXK(diagramPSM6KHXKParam16.data.name) +
                ";" +
                chunkATLVNIR6I({
                  cssCompiledStyles:
                    diagramPSM6KHXKParam16.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
            )
            .attr(
              "clip-path",
              (diagramPSM6KHXKParam54, diagramPSM6KHXKParam55) =>
                `url(#clip-${diagramPSM6KHXKParam2}-${diagramPSM6KHXKParam55})`,
            )
            .text((diagramPSM6KHXKParam51) =>
              diagramPSM6KHXKParam51.value
                ? diagramPSM6KHXKValue21(diagramPSM6KHXKParam51.value)
                : "",
            )
            .each(function (diagramPSM6KHXKParam6) {
              let diagramPSM6KHXKValue41 = Src(this),
                diagramPSM6KHXKValue42 = this.parentNode;
              if (!diagramPSM6KHXKValue42) {
                diagramPSM6KHXKValue41.style("display", "none");
                return;
              }
              let diagramPSM6KHXKValue43 = Src(diagramPSM6KHXKValue42).select(
                ".treemapLabel",
              );
              if (
                diagramPSM6KHXKValue43.empty() ||
                diagramPSM6KHXKValue43.style("display") === "none"
              ) {
                diagramPSM6KHXKValue41.style("display", "none");
                return;
              }
              let diagramPSM6KHXKValue44 = parseFloat(
                  diagramPSM6KHXKValue43.style("font-size"),
                ),
                diagramPSM6KHXKValue45 = Math.max(
                  6,
                  Math.min(28, Math.round(diagramPSM6KHXKValue44 * 0.6)),
                );
              diagramPSM6KHXKValue41.style(
                "font-size",
                `${diagramPSM6KHXKValue45}px`,
              );
              let diagramPSM6KHXKValue46 =
                (diagramPSM6KHXKParam6.y1 - diagramPSM6KHXKParam6.y0) / 2 +
                diagramPSM6KHXKValue44 / 2 +
                2;
              diagramPSM6KHXKValue41.attr("y", diagramPSM6KHXKValue46);
              let diagramPSM6KHXKValue47 =
                  diagramPSM6KHXKParam6.x1 - diagramPSM6KHXKParam6.x0,
                diagramPSM6KHXKValue48 =
                  diagramPSM6KHXKParam6.y1 - diagramPSM6KHXKParam6.y0 - 4,
                diagramPSM6KHXKValue49 = diagramPSM6KHXKValue47 - 8;
              diagramPSM6KHXKValue41.node().getComputedTextLength() >
                diagramPSM6KHXKValue49 ||
              diagramPSM6KHXKValue46 + diagramPSM6KHXKValue45 >
                diagramPSM6KHXKValue48 ||
              diagramPSM6KHXKValue45 < 6
                ? diagramPSM6KHXKValue41.style("display", "none")
                : diagramPSM6KHXKValue41.style("display", null);
            });
        chunkQN33PNHL(
          diagramPSM6KHXKValue16,
          diagramPSM6KHXKValue11.diagramPadding ?? 8,
          "flowchart",
          diagramPSM6KHXKValue11?.useMaxWidth || false,
        );
      },
      "draw",
    ),
    getClasses: chunkAGHRB4JFN(function (
      diagramPSM6KHXKParam31,
      diagramPSM6KHXKParam32,
    ) {
      return diagramPSM6KHXKParam32.db.getClasses();
    }, "getClasses"),
  },
  diagramPSM6KHXKValue9 = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelColor: "black",
    labelFontSize: "12px",
    valueFontSize: "10px",
    valueColor: "black",
    titleColor: "black",
    titleFontSize: "14px",
  };
export const DiagramPSM6KHXK = {
  parser: diagramPSM6KHXKValue4,
  get db() {
    return new diagramPSM6KHXKValue1();
  },
  renderer: diagramPSM6KHXKValue8,
  styles: chunkAGHRB4JFN(({ treemap } = {}) => {
    let diagramPSM6KHXKValue62 = chunkS3R3BYOJP(diagramPSM6KHXKValue9, treemap);
    return `
  .treemapNode.section {
    stroke: ${diagramPSM6KHXKValue62.sectionStrokeColor};
    stroke-width: ${diagramPSM6KHXKValue62.sectionStrokeWidth};
    fill: ${diagramPSM6KHXKValue62.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${diagramPSM6KHXKValue62.leafStrokeColor};
    stroke-width: ${diagramPSM6KHXKValue62.leafStrokeWidth};
    fill: ${diagramPSM6KHXKValue62.leafFillColor};
  }
  .treemapLabel {
    fill: ${diagramPSM6KHXKValue62.labelColor};
    font-size: ${diagramPSM6KHXKValue62.labelFontSize};
  }
  .treemapValue {
    fill: ${diagramPSM6KHXKValue62.valueColor};
    font-size: ${diagramPSM6KHXKValue62.valueFontSize};
  }
  .treemapTitle {
    fill: ${diagramPSM6KHXKValue62.titleColor};
    font-size: ${diagramPSM6KHXKValue62.titleFontSize};
  }
  `;
  }, "getStyles"),
};
