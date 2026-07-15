// Restored from ref/webview/assets/diagram-G4DWMVQ6-B4ApuIEg.js
// Flat boundary. Vendored diagramG4DWMVQ6 chunk restored from the Codex webview bundle.
import { defaultLocaleT } from "./d3-format-default-locale";
import { Src } from "./roughjs-geometry";
import { Ordinal } from "../utils/ordinal";
import { treemapA, treemapT } from "./d3-hierarchy-treemap";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC as chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXE,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
import { chunkEDXVE4YY } from "./chunk-edxve4yy";
import { chunkX2U36JSPI, chunkX2U36JSPA } from "./chunk-x2u36jsp";
const _chunkICPOFSXXC = chunkICPOFSXXC,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var diagramG4DWMVQ6Value1 = class {
  constructor() {
    this.nodes = [];
    this.levels = new Map();
    this.outerNodes = [];
    this.classes = new Map();
    this.setAccTitle = chunkICPOFSXXV;
    this.getAccTitle = _chunkICPOFSXXV;
    this.setDiagramTitle = _chunkICPOFSXXW;
    this.getDiagramTitle = chunkICPOFSXXC;
    this.getAccDescription = chunkICPOFSXXUnderscore;
    this.setAccDescription = chunkICPOFSXXB;
  }
  static {
    chunkAGHRB4JFN(this, "TreeMapDB");
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    let diagramG4DWMVQ6Value87 = chunkICPOFSXXD,
      diagramG4DWMVQ6Value88 = _chunkICPOFSXXY();
    return chunk5PVQY5BWP({
      ...diagramG4DWMVQ6Value87.treemap,
      ...(diagramG4DWMVQ6Value88.treemap ?? {}),
    });
  }
  addNode(diagramG4DWMVQ6Param21, diagramG4DWMVQ6Param22) {
    this.nodes.push(diagramG4DWMVQ6Param21);
    this.levels.set(diagramG4DWMVQ6Param21, diagramG4DWMVQ6Param22);
    diagramG4DWMVQ6Param22 === 0 &&
      (this.outerNodes.push(diagramG4DWMVQ6Param21),
      (this.root ??= diagramG4DWMVQ6Param21));
  }
  getRoot() {
    return {
      name: "",
      children: this.outerNodes,
    };
  }
  addClass(diagramG4DWMVQ6Param12, diagramG4DWMVQ6Param13) {
    let diagramG4DWMVQ6Value75 = this.classes.get(diagramG4DWMVQ6Param12) ?? {
        id: diagramG4DWMVQ6Param12,
        styles: [],
        textStyles: [],
      },
      diagramG4DWMVQ6Value76 = diagramG4DWMVQ6Param13
        .replace(/\\,/g, "§§§")
        .replace(/,/g, ";")
        .replace(/§§§/g, ",")
        .split(";");
    diagramG4DWMVQ6Value76 &&
      diagramG4DWMVQ6Value76.forEach((item) => {
        chunkX2U36JSPA(item) &&
          (diagramG4DWMVQ6Value75?.textStyles
            ? diagramG4DWMVQ6Value75.textStyles.push(item)
            : (diagramG4DWMVQ6Value75.textStyles = [item]));
        diagramG4DWMVQ6Value75?.styles
          ? diagramG4DWMVQ6Value75.styles.push(item)
          : (diagramG4DWMVQ6Value75.styles = [item]);
      });
    this.classes.set(diagramG4DWMVQ6Param12, diagramG4DWMVQ6Value75);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(diagramG4DWMVQ6Param25) {
    return this.classes.get(diagramG4DWMVQ6Param25)?.styles ?? [];
  }
  clear() {
    _chunkICPOFSXXA();
    this.nodes = [];
    this.levels = new Map();
    this.outerNodes = [];
    this.classes = new Map();
    this.root = undefined;
  }
};
function diagramG4DWMVQ6Helper1(diagramG4DWMVQ6Param10) {
  if (!diagramG4DWMVQ6Param10.length) return [];
  let diagramG4DWMVQ6Value64 = [],
    diagramG4DWMVQ6Value65 = [];
  return (
    diagramG4DWMVQ6Param10.forEach((item) => {
      let diagramG4DWMVQ6Value66 = {
        name: item.name,
        children: item.type === "Leaf" ? undefined : [],
      };
      for (
        diagramG4DWMVQ6Value66.classSelector = item?.classSelector,
          item?.cssCompiledStyles &&
            (diagramG4DWMVQ6Value66.cssCompiledStyles = item.cssCompiledStyles),
          item.type === "Leaf" &&
            item.value !== undefined &&
            (diagramG4DWMVQ6Value66.value = item.value);
        diagramG4DWMVQ6Value65.length > 0 &&
        diagramG4DWMVQ6Value65[diagramG4DWMVQ6Value65.length - 1].level >=
          item.level;

      )
        diagramG4DWMVQ6Value65.pop();
      if (diagramG4DWMVQ6Value65.length === 0)
        diagramG4DWMVQ6Value64.push(diagramG4DWMVQ6Value66);
      else {
        let diagramG4DWMVQ6Value85 =
          diagramG4DWMVQ6Value65[diagramG4DWMVQ6Value65.length - 1].node;
        diagramG4DWMVQ6Value85.children
          ? diagramG4DWMVQ6Value85.children.push(diagramG4DWMVQ6Value66)
          : (diagramG4DWMVQ6Value85.children = [diagramG4DWMVQ6Value66]);
      }
      item.type !== "Leaf" &&
        diagramG4DWMVQ6Value65.push({
          node: diagramG4DWMVQ6Value66,
          level: item.level,
        });
    }),
    diagramG4DWMVQ6Value64
  );
}
chunkAGHRB4JFN(diagramG4DWMVQ6Helper1, "buildHierarchy");
var diagramG4DWMVQ6Value2 = chunkAGHRB4JFN(
    (diagramG4DWMVQ6Param7, diagramG4DWMVQ6Param8) => {
      populateCommonDb(diagramG4DWMVQ6Param7, diagramG4DWMVQ6Param8);
      let diagramG4DWMVQ6Value50 = [];
      for (let diagramG4DWMVQ6Value83 of diagramG4DWMVQ6Param7.TreemapRows ??
        [])
        diagramG4DWMVQ6Value83.$type === "ClassDefStatement" &&
          diagramG4DWMVQ6Param8.addClass(
            diagramG4DWMVQ6Value83.className ?? "",
            diagramG4DWMVQ6Value83.styleText ?? "",
          );
      for (let diagramG4DWMVQ6Value67 of diagramG4DWMVQ6Param7.TreemapRows ??
        []) {
        let diagramG4DWMVQ6Value69 = diagramG4DWMVQ6Value67.item;
        if (!diagramG4DWMVQ6Value69) continue;
        let diagramG4DWMVQ6Value70 = diagramG4DWMVQ6Value67.indent
            ? parseInt(diagramG4DWMVQ6Value67.indent)
            : 0,
          diagramG4DWMVQ6Value71 = diagramG4DWMVQ6Value3(
            diagramG4DWMVQ6Value69,
          ),
          diagramG4DWMVQ6Value72 = diagramG4DWMVQ6Value69.classSelector
            ? diagramG4DWMVQ6Param8.getStylesForClass(
                diagramG4DWMVQ6Value69.classSelector,
              )
            : [],
          diagramG4DWMVQ6Value73 =
            diagramG4DWMVQ6Value72.length > 0
              ? diagramG4DWMVQ6Value72
              : undefined,
          diagramG4DWMVQ6Value74 = {
            level: diagramG4DWMVQ6Value70,
            name: diagramG4DWMVQ6Value71,
            type: diagramG4DWMVQ6Value69.$type,
            value: diagramG4DWMVQ6Value69.value,
            classSelector: diagramG4DWMVQ6Value69.classSelector,
            cssCompiledStyles: diagramG4DWMVQ6Value73,
          };
        diagramG4DWMVQ6Value50.push(diagramG4DWMVQ6Value74);
      }
      let diagramG4DWMVQ6Value51 = diagramG4DWMVQ6Helper1(
          diagramG4DWMVQ6Value50,
        ),
        diagramG4DWMVQ6Value52 = chunkAGHRB4JFN(
          (diagramG4DWMVQ6Param19, diagramG4DWMVQ6Param20) => {
            for (let diagramG4DWMVQ6Value84 of diagramG4DWMVQ6Param19) {
              diagramG4DWMVQ6Param8.addNode(
                diagramG4DWMVQ6Value84,
                diagramG4DWMVQ6Param20,
              );
              diagramG4DWMVQ6Value84.children &&
                diagramG4DWMVQ6Value84.children.length > 0 &&
                diagramG4DWMVQ6Value52(
                  diagramG4DWMVQ6Value84.children,
                  diagramG4DWMVQ6Param20 + 1,
                );
            }
          },
          "addNodesRecursively",
        );
      diagramG4DWMVQ6Value52(diagramG4DWMVQ6Value51, 0);
    },
    "populate",
  ),
  diagramG4DWMVQ6Value3 = chunkAGHRB4JFN(
    (diagramG4DWMVQ6Param42) =>
      diagramG4DWMVQ6Param42.name ? String(diagramG4DWMVQ6Param42.name) : "",
    "getItemName",
  ),
  diagramG4DWMVQ6Value4 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (diagramG4DWMVQ6Param11) => {
      try {
        let diagramG4DWMVQ6Value78 = await MermaidParserCore(
          "treemap",
          diagramG4DWMVQ6Param11,
        );
        chunkAGHRB4JFR.debug("Treemap AST:", diagramG4DWMVQ6Value78);
        let diagramG4DWMVQ6Value79 = diagramG4DWMVQ6Value4.parser?.yy;
        if (!(diagramG4DWMVQ6Value79 instanceof diagramG4DWMVQ6Value1))
          throw Error(
            "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
          );
        diagramG4DWMVQ6Value2(diagramG4DWMVQ6Value78, diagramG4DWMVQ6Value79);
      } catch (diagramG4DWMVQ6Value90) {
        throw (
          chunkAGHRB4JFR.error(
            "Error parsing treemap:",
            diagramG4DWMVQ6Value90,
          ),
          diagramG4DWMVQ6Value90
        );
      }
    }, "parse"),
  },
  diagramG4DWMVQ6Value8 = {
    draw: chunkAGHRB4JFN(
      (
        diagramG4DWMVQ6Param1,
        diagramG4DWMVQ6Param2,
        diagramG4DWMVQ6Param3,
        diagramG4DWMVQ6Param4,
      ) => {
        let diagramG4DWMVQ6Value10 = diagramG4DWMVQ6Param4.db,
          diagramG4DWMVQ6Value11 = diagramG4DWMVQ6Value10.getConfig(),
          diagramG4DWMVQ6Value12 = diagramG4DWMVQ6Value11.padding ?? 10,
          diagramG4DWMVQ6Value13 = diagramG4DWMVQ6Value10.getDiagramTitle(),
          diagramG4DWMVQ6Value14 = diagramG4DWMVQ6Value10.getRoot(),
          { themeVariables } = _chunkICPOFSXXY();
        if (!diagramG4DWMVQ6Value14) return;
        let diagramG4DWMVQ6Value15 = diagramG4DWMVQ6Value13 ? 30 : 0,
          diagramG4DWMVQ6Value16 = chunk426QAEUC(diagramG4DWMVQ6Param2),
          diagramG4DWMVQ6Value17 = diagramG4DWMVQ6Value11.nodeWidth
            ? diagramG4DWMVQ6Value11.nodeWidth * 10
            : 960,
          diagramG4DWMVQ6Value18 = diagramG4DWMVQ6Value11.nodeHeight
            ? diagramG4DWMVQ6Value11.nodeHeight * 10
            : 500,
          diagramG4DWMVQ6Value19 = diagramG4DWMVQ6Value17,
          diagramG4DWMVQ6Value20 =
            diagramG4DWMVQ6Value18 + diagramG4DWMVQ6Value15;
        diagramG4DWMVQ6Value16.attr(
          "viewBox",
          `0 0 ${diagramG4DWMVQ6Value19} ${diagramG4DWMVQ6Value20}`,
        );
        _chunkICPOFSXXC(
          diagramG4DWMVQ6Value16,
          diagramG4DWMVQ6Value20,
          diagramG4DWMVQ6Value19,
          diagramG4DWMVQ6Value11.useMaxWidth,
        );
        let diagramG4DWMVQ6Value21;
        try {
          let diagramG4DWMVQ6Value68 =
            diagramG4DWMVQ6Value11.valueFormat || ",";
          if (diagramG4DWMVQ6Value68 === "$0,0")
            diagramG4DWMVQ6Value21 = chunkAGHRB4JFN(
              (diagramG4DWMVQ6Param64) =>
                "$" + defaultLocaleT(",")(diagramG4DWMVQ6Param64),
              "valueFormat",
            );
          else if (
            diagramG4DWMVQ6Value68.startsWith("$") &&
            diagramG4DWMVQ6Value68.includes(",")
          ) {
            let diagramG4DWMVQ6Value81 = /\.\d+/.exec(diagramG4DWMVQ6Value68),
              diagramG4DWMVQ6Value82 = diagramG4DWMVQ6Value81
                ? diagramG4DWMVQ6Value81[0]
                : "";
            diagramG4DWMVQ6Value21 = chunkAGHRB4JFN(
              (diagramG4DWMVQ6Param56) =>
                "$" +
                defaultLocaleT("," + diagramG4DWMVQ6Value82)(
                  diagramG4DWMVQ6Param56,
                ),
              "valueFormat",
            );
          } else if (diagramG4DWMVQ6Value68.startsWith("$")) {
            let diagramG4DWMVQ6Value86 = diagramG4DWMVQ6Value68.substring(1);
            diagramG4DWMVQ6Value21 = chunkAGHRB4JFN(
              (diagramG4DWMVQ6Param57) =>
                "$" +
                defaultLocaleT(diagramG4DWMVQ6Value86 || "")(
                  diagramG4DWMVQ6Param57,
                ),
              "valueFormat",
            );
          } else
            diagramG4DWMVQ6Value21 = defaultLocaleT(diagramG4DWMVQ6Value68);
        } catch (diagramG4DWMVQ6Value89) {
          chunkAGHRB4JFR.error(
            "Error creating format function:",
            diagramG4DWMVQ6Value89,
          );
          diagramG4DWMVQ6Value21 = defaultLocaleT(",");
        }
        let diagramG4DWMVQ6Value22 = Ordinal().range([
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
          diagramG4DWMVQ6Value23 = Ordinal().range([
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
          diagramG4DWMVQ6Value24 = Ordinal().range([
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
        diagramG4DWMVQ6Value13 &&
          diagramG4DWMVQ6Value16
            .append("text")
            .attr("x", diagramG4DWMVQ6Value19 / 2)
            .attr("y", diagramG4DWMVQ6Value15 / 2)
            .attr("class", "treemapTitle")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(diagramG4DWMVQ6Value13);
        let _DiagramG4DWMVQ6 = diagramG4DWMVQ6Value16
            .append("g")
            .attr("transform", `translate(0, ${diagramG4DWMVQ6Value15})`)
            .attr("class", "treemapContainer"),
          diagramG4DWMVQ6Value25 = treemapA(diagramG4DWMVQ6Value14)
            .sum((diagramG4DWMVQ6Param67) => diagramG4DWMVQ6Param67.value ?? 0)
            .sort(
              (diagramG4DWMVQ6Param37, diagramG4DWMVQ6Param38) =>
                (diagramG4DWMVQ6Param38.value ?? 0) -
                (diagramG4DWMVQ6Param37.value ?? 0),
            ),
          diagramG4DWMVQ6Value26 = treemapT()
            .size([diagramG4DWMVQ6Value17, diagramG4DWMVQ6Value18])
            .paddingTop((diagramG4DWMVQ6Param30) =>
              diagramG4DWMVQ6Param30.children &&
              diagramG4DWMVQ6Param30.children.length > 0
                ? 35
                : 0,
            )
            .paddingInner(diagramG4DWMVQ6Value12)
            .paddingLeft((diagramG4DWMVQ6Param33) =>
              diagramG4DWMVQ6Param33.children &&
              diagramG4DWMVQ6Param33.children.length > 0
                ? 10
                : 0,
            )
            .paddingRight((diagramG4DWMVQ6Param34) =>
              diagramG4DWMVQ6Param34.children &&
              diagramG4DWMVQ6Param34.children.length > 0
                ? 10
                : 0,
            )
            .paddingBottom((diagramG4DWMVQ6Param35) =>
              diagramG4DWMVQ6Param35.children &&
              diagramG4DWMVQ6Param35.children.length > 0
                ? 10
                : 0,
            )
            .round(true)(diagramG4DWMVQ6Value25),
          diagramG4DWMVQ6Value27 = diagramG4DWMVQ6Value26
            .descendants()
            .filter((item) => item.children && item.children.length > 0),
          diagramG4DWMVQ6Value28 = _DiagramG4DWMVQ6
            .selectAll(".treemapSection")
            .data(diagramG4DWMVQ6Value27)
            .enter()
            .append("g")
            .attr("class", "treemapSection")
            .attr(
              "transform",
              (diagramG4DWMVQ6Param44) =>
                `translate(${diagramG4DWMVQ6Param44.x0},${diagramG4DWMVQ6Param44.y0})`,
            );
        diagramG4DWMVQ6Value28
          .append("rect")
          .attr(
            "width",
            (diagramG4DWMVQ6Param68) =>
              diagramG4DWMVQ6Param68.x1 - diagramG4DWMVQ6Param68.x0,
          )
          .attr("height", 25)
          .attr("class", "treemapSectionHeader")
          .attr("fill", "none")
          .attr("fill-opacity", 0.6)
          .attr("stroke-width", 0.6)
          .attr("style", (diagramG4DWMVQ6Param36) =>
            diagramG4DWMVQ6Param36.depth === 0 ? "display: none;" : "",
          );
        diagramG4DWMVQ6Value28
          .append("clipPath")
          .attr(
            "id",
            (diagramG4DWMVQ6Param48, diagramG4DWMVQ6Param49) =>
              `clip-section-${diagramG4DWMVQ6Param2}-${diagramG4DWMVQ6Param49}`,
          )
          .append("rect")
          .attr("width", (diagramG4DWMVQ6Param43) =>
            Math.max(
              0,
              diagramG4DWMVQ6Param43.x1 - diagramG4DWMVQ6Param43.x0 - 12,
            ),
          )
          .attr("height", 25);
        diagramG4DWMVQ6Value28
          .append("rect")
          .attr(
            "width",
            (diagramG4DWMVQ6Param69) =>
              diagramG4DWMVQ6Param69.x1 - diagramG4DWMVQ6Param69.x0,
          )
          .attr(
            "height",
            (diagramG4DWMVQ6Param70) =>
              diagramG4DWMVQ6Param70.y1 - diagramG4DWMVQ6Param70.y0,
          )
          .attr(
            "class",
            (diagramG4DWMVQ6Param40, diagramG4DWMVQ6Param41) =>
              `treemapSection section${diagramG4DWMVQ6Param41}`,
          )
          .attr("fill", (diagramG4DWMVQ6Param65) =>
            diagramG4DWMVQ6Value22(diagramG4DWMVQ6Param65.data.name),
          )
          .attr("fill-opacity", 0.6)
          .attr("stroke", (diagramG4DWMVQ6Param66) =>
            diagramG4DWMVQ6Value23(diagramG4DWMVQ6Param66.data.name),
          )
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.4)
          .attr("style", (diagramG4DWMVQ6Param18) => {
            if (diagramG4DWMVQ6Param18.depth === 0) return "display: none;";
            let diagramG4DWMVQ6Value80 = chunkX2U36JSPI({
              cssCompiledStyles: diagramG4DWMVQ6Param18.data.cssCompiledStyles,
            });
            return (
              diagramG4DWMVQ6Value80.nodeStyles +
              ";" +
              diagramG4DWMVQ6Value80.borderStyles.join(";")
            );
          });
        diagramG4DWMVQ6Value28
          .append("text")
          .attr("class", "treemapSectionLabel")
          .attr("x", 6)
          .attr("y", 12.5)
          .attr("dominant-baseline", "middle")
          .text((diagramG4DWMVQ6Param39) =>
            diagramG4DWMVQ6Param39.depth === 0
              ? ""
              : diagramG4DWMVQ6Param39.data.name,
          )
          .attr("font-weight", "bold")
          .attr("style", (diagramG4DWMVQ6Param15) =>
            diagramG4DWMVQ6Param15.depth === 0
              ? "display: none;"
              : "dominant-baseline: middle; font-size: 12px; fill:" +
                diagramG4DWMVQ6Value24(diagramG4DWMVQ6Param15.data.name) +
                "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                chunkX2U36JSPI({
                  cssCompiledStyles:
                    diagramG4DWMVQ6Param15.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
          )
          .each(function (diagramG4DWMVQ6Param9) {
            if (diagramG4DWMVQ6Param9.depth === 0) return;
            let diagramG4DWMVQ6Value53 = Src(this),
              diagramG4DWMVQ6Value54 = diagramG4DWMVQ6Param9.data.name;
            diagramG4DWMVQ6Value53.text(diagramG4DWMVQ6Value54);
            let diagramG4DWMVQ6Value55 =
                diagramG4DWMVQ6Param9.x1 - diagramG4DWMVQ6Param9.x0,
              diagramG4DWMVQ6Value56;
            diagramG4DWMVQ6Value56 =
              diagramG4DWMVQ6Value11.showValues !== false &&
              diagramG4DWMVQ6Param9.value
                ? diagramG4DWMVQ6Value55 - 10 - 30 - 10 - 6
                : diagramG4DWMVQ6Value55 - 6 - 6;
            let diagramG4DWMVQ6Value57 = Math.max(15, diagramG4DWMVQ6Value56),
              diagramG4DWMVQ6Value58 = diagramG4DWMVQ6Value53.node();
            if (
              diagramG4DWMVQ6Value58.getComputedTextLength() >
              diagramG4DWMVQ6Value57
            ) {
              let diagramG4DWMVQ6Value77 = diagramG4DWMVQ6Value54;
              for (; diagramG4DWMVQ6Value77.length > 0; ) {
                if (
                  ((diagramG4DWMVQ6Value77 = diagramG4DWMVQ6Value54.substring(
                    0,
                    diagramG4DWMVQ6Value77.length - 1,
                  )),
                  diagramG4DWMVQ6Value77.length === 0)
                ) {
                  diagramG4DWMVQ6Value53.text("...");
                  diagramG4DWMVQ6Value58.getComputedTextLength() >
                    diagramG4DWMVQ6Value57 && diagramG4DWMVQ6Value53.text("");
                  break;
                }
                if (
                  (diagramG4DWMVQ6Value53.text(diagramG4DWMVQ6Value77 + "..."),
                  diagramG4DWMVQ6Value58.getComputedTextLength() <=
                    diagramG4DWMVQ6Value57)
                )
                  break;
              }
            }
          });
        diagramG4DWMVQ6Value11.showValues !== false &&
          diagramG4DWMVQ6Value28
            .append("text")
            .attr("class", "treemapSectionValue")
            .attr(
              "x",
              (diagramG4DWMVQ6Param63) =>
                diagramG4DWMVQ6Param63.x1 - diagramG4DWMVQ6Param63.x0 - 10,
            )
            .attr("y", 12.5)
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .text((diagramG4DWMVQ6Param50) =>
              diagramG4DWMVQ6Param50.value
                ? diagramG4DWMVQ6Value21(diagramG4DWMVQ6Param50.value)
                : "",
            )
            .attr("font-style", "italic")
            .attr("style", (diagramG4DWMVQ6Param14) =>
              diagramG4DWMVQ6Param14.depth === 0
                ? "display: none;"
                : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" +
                  diagramG4DWMVQ6Value24(diagramG4DWMVQ6Param14.data.name) +
                  "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                  chunkX2U36JSPI({
                    cssCompiledStyles:
                      diagramG4DWMVQ6Param14.data.cssCompiledStyles,
                  }).labelStyles.replace("color:", "fill:"),
            );
        let diagramG4DWMVQ6Value29 = diagramG4DWMVQ6Value26.leaves(),
          diagramG4DWMVQ6Value30 = _DiagramG4DWMVQ6
            .selectAll(".treemapLeafGroup")
            .data(diagramG4DWMVQ6Value29)
            .enter()
            .append("g")
            .attr(
              "class",
              (diagramG4DWMVQ6Param23, diagramG4DWMVQ6Param24) =>
                `treemapNode treemapLeafGroup leaf${diagramG4DWMVQ6Param24}${diagramG4DWMVQ6Param23.data.classSelector ? ` ${diagramG4DWMVQ6Param23.data.classSelector}` : ""}x`,
            )
            .attr(
              "transform",
              (diagramG4DWMVQ6Param45) =>
                `translate(${diagramG4DWMVQ6Param45.x0},${diagramG4DWMVQ6Param45.y0})`,
            );
        diagramG4DWMVQ6Value30
          .append("rect")
          .attr(
            "width",
            (diagramG4DWMVQ6Param71) =>
              diagramG4DWMVQ6Param71.x1 - diagramG4DWMVQ6Param71.x0,
          )
          .attr(
            "height",
            (diagramG4DWMVQ6Param72) =>
              diagramG4DWMVQ6Param72.y1 - diagramG4DWMVQ6Param72.y0,
          )
          .attr("class", "treemapLeaf")
          .attr("fill", (diagramG4DWMVQ6Param28) =>
            diagramG4DWMVQ6Param28.parent
              ? diagramG4DWMVQ6Value22(diagramG4DWMVQ6Param28.parent.data.name)
              : diagramG4DWMVQ6Value22(diagramG4DWMVQ6Param28.data.name),
          )
          .attr(
            "style",
            (diagramG4DWMVQ6Param26) =>
              chunkX2U36JSPI({
                cssCompiledStyles:
                  diagramG4DWMVQ6Param26.data.cssCompiledStyles,
              }).nodeStyles,
          )
          .attr("fill-opacity", 0.3)
          .attr("stroke", (diagramG4DWMVQ6Param29) =>
            diagramG4DWMVQ6Param29.parent
              ? diagramG4DWMVQ6Value22(diagramG4DWMVQ6Param29.parent.data.name)
              : diagramG4DWMVQ6Value22(diagramG4DWMVQ6Param29.data.name),
          )
          .attr("stroke-width", 3);
        diagramG4DWMVQ6Value30
          .append("clipPath")
          .attr(
            "id",
            (diagramG4DWMVQ6Param58, diagramG4DWMVQ6Param59) =>
              `clip-${diagramG4DWMVQ6Param2}-${diagramG4DWMVQ6Param59}`,
          )
          .append("rect")
          .attr("width", (diagramG4DWMVQ6Param46) =>
            Math.max(
              0,
              diagramG4DWMVQ6Param46.x1 - diagramG4DWMVQ6Param46.x0 - 4,
            ),
          )
          .attr("height", (diagramG4DWMVQ6Param47) =>
            Math.max(
              0,
              diagramG4DWMVQ6Param47.y1 - diagramG4DWMVQ6Param47.y0 - 4,
            ),
          );
        diagramG4DWMVQ6Value30
          .append("text")
          .attr("class", "treemapLabel")
          .attr(
            "x",
            (diagramG4DWMVQ6Param60) =>
              (diagramG4DWMVQ6Param60.x1 - diagramG4DWMVQ6Param60.x0) / 2,
          )
          .attr(
            "y",
            (diagramG4DWMVQ6Param61) =>
              (diagramG4DWMVQ6Param61.y1 - diagramG4DWMVQ6Param61.y0) / 2,
          )
          .attr(
            "style",
            (diagramG4DWMVQ6Param17) =>
              "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" +
              diagramG4DWMVQ6Value24(diagramG4DWMVQ6Param17.data.name) +
              ";" +
              chunkX2U36JSPI({
                cssCompiledStyles:
                  diagramG4DWMVQ6Param17.data.cssCompiledStyles,
              }).labelStyles.replace("color:", "fill:"),
          )
          .attr(
            "clip-path",
            (diagramG4DWMVQ6Param52, diagramG4DWMVQ6Param53) =>
              `url(#clip-${diagramG4DWMVQ6Param2}-${diagramG4DWMVQ6Param53})`,
          )
          .text((diagramG4DWMVQ6Param73) => diagramG4DWMVQ6Param73.data.name)
          .each(function (diagramG4DWMVQ6Param5) {
            let diagramG4DWMVQ6Value31 = Src(this),
              diagramG4DWMVQ6Value32 =
                diagramG4DWMVQ6Param5.x1 - diagramG4DWMVQ6Param5.x0,
              diagramG4DWMVQ6Value33 =
                diagramG4DWMVQ6Param5.y1 - diagramG4DWMVQ6Param5.y0,
              diagramG4DWMVQ6Value34 = diagramG4DWMVQ6Value31.node(),
              diagramG4DWMVQ6Value35 = diagramG4DWMVQ6Value32 - 8,
              diagramG4DWMVQ6Value36 = diagramG4DWMVQ6Value33 - 8;
            if (diagramG4DWMVQ6Value35 < 10 || diagramG4DWMVQ6Value36 < 10) {
              diagramG4DWMVQ6Value31.style("display", "none");
              return;
            }
            let diagramG4DWMVQ6Value37 = parseInt(
              diagramG4DWMVQ6Value31.style("font-size"),
              10,
            );
            for (
              ;
              diagramG4DWMVQ6Value34.getComputedTextLength() >
                diagramG4DWMVQ6Value35 && diagramG4DWMVQ6Value37 > 8;

            ) {
              diagramG4DWMVQ6Value37--;
              diagramG4DWMVQ6Value31.style(
                "font-size",
                `${diagramG4DWMVQ6Value37}px`,
              );
            }
            let diagramG4DWMVQ6Value39 = Math.max(
                6,
                Math.min(28, Math.round(diagramG4DWMVQ6Value37 * 0.6)),
              ),
              diagramG4DWMVQ6Value40 =
                diagramG4DWMVQ6Value37 + 2 + diagramG4DWMVQ6Value39;
            for (
              ;
              diagramG4DWMVQ6Value40 > diagramG4DWMVQ6Value36 &&
              diagramG4DWMVQ6Value37 > 8 &&
              (diagramG4DWMVQ6Value37--,
              (diagramG4DWMVQ6Value39 = Math.max(
                6,
                Math.min(28, Math.round(diagramG4DWMVQ6Value37 * 0.6)),
              )),
              !(diagramG4DWMVQ6Value39 < 6 && diagramG4DWMVQ6Value37 === 8));

            ) {
              diagramG4DWMVQ6Value31.style(
                "font-size",
                `${diagramG4DWMVQ6Value37}px`,
              );
              diagramG4DWMVQ6Value40 =
                diagramG4DWMVQ6Value37 + 2 + diagramG4DWMVQ6Value39;
            }
            diagramG4DWMVQ6Value31.style(
              "font-size",
              `${diagramG4DWMVQ6Value37}px`,
            );
            (diagramG4DWMVQ6Value34.getComputedTextLength() >
              diagramG4DWMVQ6Value35 ||
              diagramG4DWMVQ6Value37 < 8 ||
              diagramG4DWMVQ6Value36 < diagramG4DWMVQ6Value37) &&
              diagramG4DWMVQ6Value31.style("display", "none");
          });
        diagramG4DWMVQ6Value11.showValues !== false &&
          diagramG4DWMVQ6Value30
            .append("text")
            .attr("class", "treemapValue")
            .attr(
              "x",
              (diagramG4DWMVQ6Param62) =>
                (diagramG4DWMVQ6Param62.x1 - diagramG4DWMVQ6Param62.x0) / 2,
            )
            .attr("y", function (diagramG4DWMVQ6Param27) {
              return (
                (diagramG4DWMVQ6Param27.y1 - diagramG4DWMVQ6Param27.y0) / 2
              );
            })
            .attr(
              "style",
              (diagramG4DWMVQ6Param16) =>
                "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" +
                diagramG4DWMVQ6Value24(diagramG4DWMVQ6Param16.data.name) +
                ";" +
                chunkX2U36JSPI({
                  cssCompiledStyles:
                    diagramG4DWMVQ6Param16.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
            )
            .attr(
              "clip-path",
              (diagramG4DWMVQ6Param54, diagramG4DWMVQ6Param55) =>
                `url(#clip-${diagramG4DWMVQ6Param2}-${diagramG4DWMVQ6Param55})`,
            )
            .text((diagramG4DWMVQ6Param51) =>
              diagramG4DWMVQ6Param51.value
                ? diagramG4DWMVQ6Value21(diagramG4DWMVQ6Param51.value)
                : "",
            )
            .each(function (diagramG4DWMVQ6Param6) {
              let diagramG4DWMVQ6Value41 = Src(this),
                diagramG4DWMVQ6Value42 = this.parentNode;
              if (!diagramG4DWMVQ6Value42) {
                diagramG4DWMVQ6Value41.style("display", "none");
                return;
              }
              let diagramG4DWMVQ6Value43 = Src(diagramG4DWMVQ6Value42).select(
                ".treemapLabel",
              );
              if (
                diagramG4DWMVQ6Value43.empty() ||
                diagramG4DWMVQ6Value43.style("display") === "none"
              ) {
                diagramG4DWMVQ6Value41.style("display", "none");
                return;
              }
              let diagramG4DWMVQ6Value44 = parseFloat(
                  diagramG4DWMVQ6Value43.style("font-size"),
                ),
                diagramG4DWMVQ6Value45 = Math.max(
                  6,
                  Math.min(28, Math.round(diagramG4DWMVQ6Value44 * 0.6)),
                );
              diagramG4DWMVQ6Value41.style(
                "font-size",
                `${diagramG4DWMVQ6Value45}px`,
              );
              let diagramG4DWMVQ6Value46 =
                (diagramG4DWMVQ6Param6.y1 - diagramG4DWMVQ6Param6.y0) / 2 +
                diagramG4DWMVQ6Value44 / 2 +
                2;
              diagramG4DWMVQ6Value41.attr("y", diagramG4DWMVQ6Value46);
              let diagramG4DWMVQ6Value47 =
                  diagramG4DWMVQ6Param6.x1 - diagramG4DWMVQ6Param6.x0,
                diagramG4DWMVQ6Value48 =
                  diagramG4DWMVQ6Param6.y1 - diagramG4DWMVQ6Param6.y0 - 4,
                diagramG4DWMVQ6Value49 = diagramG4DWMVQ6Value47 - 8;
              diagramG4DWMVQ6Value41.node().getComputedTextLength() >
                diagramG4DWMVQ6Value49 ||
              diagramG4DWMVQ6Value46 + diagramG4DWMVQ6Value45 >
                diagramG4DWMVQ6Value48 ||
              diagramG4DWMVQ6Value45 < 6
                ? diagramG4DWMVQ6Value41.style("display", "none")
                : diagramG4DWMVQ6Value41.style("display", null);
            });
        chunkEDXVE4YY(
          diagramG4DWMVQ6Value16,
          diagramG4DWMVQ6Value11.diagramPadding ?? 8,
          "flowchart",
          diagramG4DWMVQ6Value11?.useMaxWidth || false,
        );
      },
      "draw",
    ),
    getClasses: chunkAGHRB4JFN(function (
      diagramG4DWMVQ6Param31,
      diagramG4DWMVQ6Param32,
    ) {
      return diagramG4DWMVQ6Param32.db.getClasses();
    }, "getClasses"),
  },
  diagramG4DWMVQ6Value9 = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelFontSize: "12px",
    valueFontSize: "10px",
    titleFontSize: "14px",
  };
export const DiagramG4DWMVQ6 = {
  parser: diagramG4DWMVQ6Value4,
  get db() {
    return new diagramG4DWMVQ6Value1();
  },
  renderer: diagramG4DWMVQ6Value8,
  styles: chunkAGHRB4JFN(({ treemap } = {}) => {
    let diagramG4DWMVQ6Value59 = chunk5PVQY5BWP(
        chunkICPOFSXXE(),
        _chunkICPOFSXXY().themeVariables,
      ),
      diagramG4DWMVQ6Value60 = chunk5PVQY5BWP(diagramG4DWMVQ6Value9, treemap),
      diagramG4DWMVQ6Value61 =
        diagramG4DWMVQ6Value60.titleColor ?? diagramG4DWMVQ6Value59.titleColor,
      diagramG4DWMVQ6Value62 =
        diagramG4DWMVQ6Value60.labelColor ?? diagramG4DWMVQ6Value59.textColor,
      diagramG4DWMVQ6Value63 =
        diagramG4DWMVQ6Value60.valueColor ?? diagramG4DWMVQ6Value59.textColor;
    return `
  .treemapNode.section {
    stroke: ${diagramG4DWMVQ6Value60.sectionStrokeColor};
    stroke-width: ${diagramG4DWMVQ6Value60.sectionStrokeWidth};
    fill: ${diagramG4DWMVQ6Value60.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${diagramG4DWMVQ6Value60.leafStrokeColor};
    stroke-width: ${diagramG4DWMVQ6Value60.leafStrokeWidth};
    fill: ${diagramG4DWMVQ6Value60.leafFillColor};
  }
  .treemapLabel {
    fill: ${diagramG4DWMVQ6Value62};
    font-size: ${diagramG4DWMVQ6Value60.labelFontSize};
  }
  .treemapValue {
    fill: ${diagramG4DWMVQ6Value63};
    font-size: ${diagramG4DWMVQ6Value60.valueFontSize};
  }
  .treemapTitle {
    fill: ${diagramG4DWMVQ6Value61};
    font-size: ${diagramG4DWMVQ6Value60.titleFontSize};
  }
  `;
  }, "getStyles"),
};
