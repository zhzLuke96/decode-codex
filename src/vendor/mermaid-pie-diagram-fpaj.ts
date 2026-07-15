// Restored from ref/webview/assets/pieDiagram-ADFJNKIX-BC6CAEwA.js
// Vendored Mermaid pie diagram definition restored from the Codex webview bundle.
import {
  chunkS3R3BYOJA as parseSvgNumber,
  chunkS3R3BYOJP as mergePieConfig,
} from "./chunk-s3r3byoj";
import { Ordinal } from "../utils/ordinal";
import { arc as createArc } from "./d3-shape-arc";
import { pie as createPieLayout } from "./d3-shape-pie";
import {
  chunkAGHRB4JFN as nameFunction,
  chunkAGHRB4JFR as mermaidLogger,
} from "./dompurify";
import {
  _chunkABZYJK2DA as clearCommonDb,
  _chunkABZYJK2DB as getSiteConfig,
  _chunkABZYJK2DC as getDiagramTitle,
  _chunkABZYJK2DN as configureSvgSize,
  chunkABZYJK2DB as setAccessibleTitle,
  chunkABZYJK2DO as defaultDiagramConfig,
  chunkABZYJK2DU as setDiagramTitle,
  chunkABZYJK2DUnderscore as getAccessibleDescription,
  chunkABZYJK2DZ as setAccessibleDescription,
  _chunkABZYJK2DV as getAccessibleTitle,
} from "./katex-auto-render";
import { chunkEXTU4WIE as selectSvgById } from "./chunk-extu4-wie";
import { chunk4BX2VUAB as applyAccessibilityMetadata } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";

type ParsedPieSection = {
  label: string;
  value: number;
};

type ParsedPieDiagram = {
  sections: ParsedPieSection[];
  showData: boolean;
};

type PieSection = {
  label: string;
  value: number;
};

type PieArcDatum = {
  data: PieSection;
  value: number;
};

type PieConfig = {
  fontFamily: string;
  pieStrokeColor: string;
  pieStrokeWidth: string;
  pieOpacity: string;
  pieOuterStrokeColor: string;
  pieOuterStrokeWidth: string;
  pieTitleTextSize: string;
  pieTitleTextColor: string;
  pieSectionTextColor: string;
  pieSectionTextSize: string;
  pieLegendTextColor: string;
  pieLegendTextSize: string;
  textPosition: number;
  useMaxWidth: boolean;
};

type ThemeVariables = {
  pieOuterStrokeWidth: string | number;
  pie1: string;
  pie2: string;
  pie3: string;
  pie4: string;
  pie5: string;
  pie6: string;
  pie7: string;
  pie8: string;
  pie9: string;
  pie10: string;
  pie11: string;
  pie12: string;
};

type SiteConfig = {
  pie: Partial<PieConfig>;
  themeVariables: ThemeVariables;
};

type SvgSelection = {
  append(name: string): SvgSelection;
  attr(name: string, value: unknown): SvgSelection;
  style(name: string, value: unknown): SvgSelection;
  text(value: unknown): SvgSelection;
  selectAll(selector: string): SvgSelection;
  data(values: unknown[]): SvgSelection;
  enter(): SvgSelection;
  nodes(): Array<{ getBoundingClientRect?: () => { width: number } } | null>;
};

type PieRenderContext = {
  db: PieDiagramDb;
};

const basePieConfig = defaultDiagramConfig.pie as PieConfig;
const defaultPieState = {
  sections: new Map<string, number>(),
  showData: false,
  config: basePieConfig,
};

let pieSections = defaultPieState.sections;
let shouldShowData = defaultPieState.showData;
const pieConfigSnapshot = structuredClone(basePieConfig) as PieConfig;

const pieDiagramDb: PieDiagramDb = {
  getConfig: nameFunction(
    () => structuredClone(pieConfigSnapshot) as PieConfig,
    "getConfig",
  ),
  clear: nameFunction((): void => {
    pieSections = new Map();
    shouldShowData = defaultPieState.showData;
    clearCommonDb();
  }, "clear"),
  setDiagramTitle,
  getDiagramTitle,
  setAccTitle: setAccessibleTitle,
  getAccTitle: getAccessibleTitle,
  setAccDescription: setAccessibleDescription,
  getAccDescription: getAccessibleDescription,
  addSection: nameFunction(({ label, value }: ParsedPieSection): void => {
    if (value < 0) {
      throw Error(
        `"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`,
      );
    }

    if (!pieSections.has(label)) {
      pieSections.set(label, value);
      mermaidLogger.debug(`added new section: ${label}, with value: ${value}`);
    }
  }, "addSection"),
  getSections: nameFunction(() => pieSections, "getSections"),
  setShowData: nameFunction((showData: boolean): void => {
    shouldShowData = showData;
  }, "setShowData"),
  getShowData: nameFunction(() => shouldShowData, "getShowData"),
};

type PieDiagramDb = {
  getConfig(): PieConfig;
  clear(): void;
  setDiagramTitle(title: string): void;
  getDiagramTitle(): string;
  setAccTitle(title: string): void;
  getAccTitle(): string;
  setAccDescription(description: string): void;
  getAccDescription(): string;
  addSection(section: ParsedPieSection): void;
  getSections(): Map<string, number>;
  setShowData(showData: boolean): void;
  getShowData(): boolean;
};

const populatePieDb = nameFunction(
  (parsedPie: ParsedPieDiagram, pieDb: PieDiagramDb): void => {
    applyAccessibilityMetadata(parsedPie, pieDb);
    pieDb.setShowData(parsedPie.showData);
    parsedPie.sections.map(pieDb.addSection);
  },
  "populateDb",
);

const pieParser = {
  parse: nameFunction(async (source: string): Promise<void> => {
    const parsedPie = (await MermaidParserCore(
      "pie",
      source,
    )) as ParsedPieDiagram;
    mermaidLogger.debug(parsedPie);
    populatePieDb(parsedPie, pieDiagramDb);
  }, "parse"),
};

const getPieStyles = nameFunction(
  (config: PieConfig) => `
  .pieCircle{
    stroke: ${config.pieStrokeColor};
    stroke-width : ${config.pieStrokeWidth};
    opacity : ${config.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${config.pieOuterStrokeColor};
    stroke-width: ${config.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${config.pieTitleTextSize};
    fill: ${config.pieTitleTextColor};
    font-family: ${config.fontFamily};
  }
  .slice {
    font-family: ${config.fontFamily};
    fill: ${config.pieSectionTextColor};
    font-size:${config.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${config.pieLegendTextColor};
    font-family: ${config.fontFamily};
    font-size: ${config.pieLegendTextSize};
  }
`,
  "getStyles",
);

const createVisiblePieArcs = nameFunction(
  (sections: Map<string, number>): PieArcDatum[] => {
    const total = [...sections.values()].reduce((sum, value) => sum + value, 0);
    const visibleSections = [...sections.entries()]
      .map(([label, value]) => ({ label, value }))
      .filter((section) => (section.value / total) * 100 >= 1)
      .sort((left, right) => right.value - left.value);

    return createPieLayout().value((section: PieSection) => section.value)(
      visibleSections,
    ) as PieArcDatum[];
  },
  "createPieArcs",
);

const drawPieDiagram = nameFunction(
  (
    sourceText: string,
    diagramId: string,
    renderVersion: string,
    context: PieRenderContext,
  ): void => {
    void renderVersion;
    mermaidLogger.debug("rendering pie chart\n" + sourceText);

    const pieDb = context.db;
    const siteConfig = getSiteConfig() as SiteConfig;
    const pieConfig = mergePieConfig(
      pieDb.getConfig(),
      siteConfig.pie,
    ) as PieConfig;
    const svg = selectSvgById(diagramId);
    const pieGroup = svg.append("g");
    pieGroup.attr("transform", "translate(225,225)");

    const { themeVariables } = siteConfig;
    let [outerStrokeWidth] = parseSvgNumber(
      themeVariables.pieOuterStrokeWidth,
    ) as Array<number | undefined>;
    outerStrokeWidth ??= 2;

    const sliceArc = createArc().innerRadius(0).outerRadius(185);
    const labelArc = createArc()
      .innerRadius(185 * pieConfig.textPosition)
      .outerRadius(185 * pieConfig.textPosition);

    pieGroup
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 185 + outerStrokeWidth / 2)
      .attr("class", "pieOuterCircle");

    const sections = pieDb.getSections();
    const pieArcs = createVisiblePieArcs(sections);
    const sectionColors = [
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
    ];
    const totalValue = [...sections.values()].reduce(
      (sum, value) => sum + value,
      0,
    );
    const renderedArcs = pieArcs.filter(
      (arcDatum) =>
        ((arcDatum.data.value / totalValue) * 100).toFixed(0) !== "0",
    );
    const colorByLabel = Ordinal(sectionColors);

    pieGroup
      .selectAll("mySlices")
      .data(renderedArcs)
      .enter()
      .append("path")
      .attr("d", sliceArc)
      .attr("fill", (arcDatum: PieArcDatum) =>
        colorByLabel(arcDatum.data.label),
      )
      .attr("class", "pieCircle");

    pieGroup
      .selectAll("mySlices")
      .data(renderedArcs)
      .enter()
      .append("text")
      .text(
        (arcDatum: PieArcDatum) =>
          ((arcDatum.data.value / totalValue) * 100).toFixed(0) + "%",
      )
      .attr(
        "transform",
        (arcDatum: PieArcDatum) =>
          "translate(" + labelArc.centroid(arcDatum) + ")",
      )
      .style("text-anchor", "middle")
      .attr("class", "slice");

    pieGroup
      .append("text")
      .text(pieDb.getDiagramTitle())
      .attr("x", 0)
      .attr("y", -200)
      .attr("class", "pieTitleText");

    const legendSections = [...sections.entries()].map(([label, value]) => ({
      label,
      value,
    }));
    const legend = pieGroup
      .selectAll(".legend")
      .data(legendSections)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (_section: PieSection, index: number) => {
        const legendOffset = (22 * legendSections.length) / 2;
        return "translate(216," + (index * 22 - legendOffset) + ")";
      });

    legend
      .append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (section: PieSection) => colorByLabel(section.label))
      .style("stroke", (section: PieSection) => colorByLabel(section.label));
    legend
      .append("text")
      .attr("x", 22)
      .attr("y", 14)
      .text((section: PieSection) =>
        pieDb.getShowData()
          ? `${section.label} [${section.value}]`
          : section.label,
      );

    const legendWidth = Math.max(
      0,
      ...legend
        .selectAll("text")
        .nodes()
        .map((node) => node?.getBoundingClientRect?.().width ?? 0),
    );
    const viewBoxWidth = 512 + legendWidth;
    svg.attr("viewBox", `0 0 ${viewBoxWidth} 450`);
    configureSvgSize(svg, 450, viewBoxWidth, pieConfig.useMaxWidth);
  },
  "draw",
);

function createPieDiagramDefinition() {
  return {
    parser: pieParser,
    db: pieDiagramDb,
    renderer: {
      draw: drawPieDiagram,
    },
    styles: getPieStyles,
  };
}

const pieDiagramADFJNKIX = createPieDiagramDefinition();

export { pieDiagramADFJNKIX };
