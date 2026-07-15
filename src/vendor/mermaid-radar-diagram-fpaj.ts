// Restored from ref/webview/assets/diagram-QEK2KX5R-BsePa769.js
// Vendored Mermaid radar diagram definition restored from the Codex webview bundle.
import { chunkS3R3BYOJR as cleanAndMerge } from "./chunk-s3r3byoj";
import {
  chunkAGHRB4JFN as nameFunction,
  chunkAGHRB4JFR as mermaidLogger,
} from "./dompurify";
import {
  _chunkABZYJK2DA as clearCommonDb,
  _chunkABZYJK2DC as getDiagramTitle,
  _chunkABZYJK2DT as getDefaultThemeVariables,
  _chunkABZYJK2DV as getAccessibleTitle,
  _chunkABZYJK2DY as getCurrentConfig,
  chunkABZYJK2DB as setAccessibleTitle,
  chunkABZYJK2DO as defaultDiagramConfig,
  chunkABZYJK2DU as setDiagramTitle,
  chunkABZYJK2DUnderscore as getAccessibleDescription,
  chunkABZYJK2DZ as setAccessibleDescription,
} from "./katex-auto-render";
import { chunkEXTU4WIE as selectSvgById } from "./chunk-extu4-wie";
import { chunk4BX2VUAB as populateCommonDb } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";

type RadarGraticule = "circle" | "polygon";

type ParsedAxisReference = {
  $refText: string;
};

type ParsedRadarAxis = {
  name: string;
  label?: string;
};

type ParsedRadarEntry = {
  axis?: ParsedAxisReference | null;
  value: number;
};

type ParsedRadarCurve = {
  name: string;
  label?: string;
  entries: ParsedRadarEntry[];
};

type ParsedRadarOption = {
  name: string;
  value: boolean | number | string | null;
};

type ParsedRadarDiagram = {
  accDescr?: string;
  accTitle?: string;
  title?: string;
  axes: ParsedRadarAxis[];
  curves: ParsedRadarCurve[];
  options: ParsedRadarOption[];
};

type RadarAxis = {
  name: string;
  label: string;
};

type RadarCurve = {
  name: string;
  label: string;
  entries: number[];
};

type RadarOptions = {
  showLegend: boolean;
  ticks: number;
  max: number | null;
  min: number;
  graticule: RadarGraticule;
};

type RadarDiagramState = {
  axes: RadarAxis[];
  curves: RadarCurve[];
  options: RadarOptions;
};

type RadarConfig = {
  width: number;
  height: number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  axisScaleFactor: number;
  axisLabelFactor: number;
  axisColor: string;
  axisStrokeWidth: string | number;
  axisLabelFontSize: string | number;
  curveTension: number;
  curveOpacity: number;
  curveStrokeWidth: string | number;
  graticuleColor: string;
  graticuleOpacity: number;
  graticuleStrokeWidth: string | number;
  legendFontSize: string | number;
};

type ThemeVariables = {
  THEME_COLOR_LIMIT: number;
  fontSize: string | number;
  titleColor: string;
  radar: Partial<RadarConfig>;
  [key: string]: unknown;
};

type MermaidSiteConfig = {
  radar?: Partial<RadarConfig>;
  themeVariables?: Partial<ThemeVariables>;
};

type SvgSelection = {
  append(name: string): SvgSelection;
  attr(name: string, value: unknown): SvgSelection;
  text(value: unknown): SvgSelection;
};

type RadarPoint = {
  x: number;
  y: number;
};

type RadarRenderContext = {
  db: RadarDiagramDb;
};

type RadarDiagramDb = {
  getAxes(): RadarAxis[];
  getCurves(): RadarCurve[];
  getOptions(): RadarOptions;
  setAxes(axes: ParsedRadarAxis[]): void;
  setCurves(curves: ParsedRadarCurve[]): void;
  setOptions(options: ParsedRadarOption[]): void;
  getConfig(): RadarConfig;
  clear(): void;
  setAccTitle(title: string): void;
  getAccTitle(): string;
  setDiagramTitle(title: string): void;
  getDiagramTitle(): string;
  getAccDescription(): string;
  setAccDescription(description: string): void;
};

const defaultRadarOptions: RadarOptions = {
  showLegend: true,
  ticks: 5,
  max: null,
  min: 0,
  graticule: "circle",
};

const defaultRadarState: RadarDiagramState = {
  axes: [],
  curves: [],
  options: defaultRadarOptions,
};

const baseRadarConfig = defaultDiagramConfig.radar as RadarConfig;

let radarState = structuredClone(defaultRadarState) as RadarDiagramState;

const getRadarConfig = nameFunction(
  (): RadarConfig =>
    cleanAndMerge(
      baseRadarConfig,
      (getCurrentConfig() as MermaidSiteConfig).radar ?? {},
    ) as RadarConfig,
  "getConfig",
);

const getRadarAxes = nameFunction(
  (): RadarAxis[] => radarState.axes,
  "getAxes",
);

const getRadarCurves = nameFunction(
  (): RadarCurve[] => radarState.curves,
  "getCurves",
);

const getRadarOptions = nameFunction(
  (): RadarOptions => radarState.options,
  "getOptions",
);

const setRadarAxes = nameFunction((axes: ParsedRadarAxis[]): void => {
  radarState.axes = axes.map((axis) => ({
    name: axis.name,
    label: axis.label ?? axis.name,
  }));
}, "setAxes");

const computeCurveEntries = nameFunction(
  (entries: ParsedRadarEntry[]): number[] => {
    if (entries[0]?.axis == null) {
      return entries.map((entry) => entry.value);
    }

    const axes = getRadarAxes();
    if (axes.length === 0) {
      throw Error("Axes must be populated before curves for reference entries");
    }

    return axes.map((axis) => {
      const matchingEntry = entries.find(
        (entry) => entry.axis?.$refText === axis.name,
      );

      if (matchingEntry === undefined) {
        throw Error("Missing entry for axis " + axis.label);
      }

      return matchingEntry.value;
    });
  },
  "computeCurveEntries",
);

const setRadarCurves = nameFunction((curves: ParsedRadarCurve[]): void => {
  radarState.curves = curves.map((curve) => ({
    name: curve.name,
    label: curve.label ?? curve.name,
    entries: computeCurveEntries(curve.entries),
  }));
}, "setCurves");

const setRadarOptions = nameFunction((options: ParsedRadarOption[]): void => {
  const optionsByName = options.reduce<Record<string, ParsedRadarOption>>(
    (accumulator, option) => {
      accumulator[option.name] = option;
      return accumulator;
    },
    {},
  );

  radarState.options = {
    showLegend:
      (optionsByName.showLegend?.value as boolean | undefined) ??
      defaultRadarOptions.showLegend,
    ticks:
      (optionsByName.ticks?.value as number | undefined) ??
      defaultRadarOptions.ticks,
    max:
      (optionsByName.max?.value as number | null | undefined) ??
      defaultRadarOptions.max,
    min:
      (optionsByName.min?.value as number | undefined) ??
      defaultRadarOptions.min,
    graticule:
      (optionsByName.graticule?.value as RadarGraticule | undefined) ??
      defaultRadarOptions.graticule,
  };
}, "setOptions");

const radarDiagramDb: RadarDiagramDb = {
  getAxes: getRadarAxes,
  getCurves: getRadarCurves,
  getOptions: getRadarOptions,
  setAxes: setRadarAxes,
  setCurves: setRadarCurves,
  setOptions: setRadarOptions,
  getConfig: getRadarConfig,
  clear: nameFunction((): void => {
    clearCommonDb();
    radarState = structuredClone(defaultRadarState) as RadarDiagramState;
  }, "clear"),
  setAccTitle: setAccessibleTitle,
  getAccTitle: getAccessibleTitle,
  setDiagramTitle,
  getDiagramTitle,
  getAccDescription: getAccessibleDescription,
  setAccDescription: setAccessibleDescription,
};

const populateRadarDb = nameFunction(
  (parsedRadar: ParsedRadarDiagram): void => {
    populateCommonDb(parsedRadar, radarDiagramDb);

    const { axes, curves, options } = parsedRadar;
    radarDiagramDb.setAxes(axes);
    radarDiagramDb.setCurves(curves);
    radarDiagramDb.setOptions(options);
  },
  "populate",
);

const radarParser = {
  parse: nameFunction(async (source: string): Promise<void> => {
    const parsedRadar = (await MermaidParserCore(
      "radar",
      source,
    )) as ParsedRadarDiagram;
    mermaidLogger.debug(parsedRadar);
    populateRadarDb(parsedRadar);
  }, "parse"),
};

const createRadarRootGroup = nameFunction(
  (svg: SvgSelection, radarConfig: RadarConfig): SvgSelection => {
    const viewBoxWidth =
      radarConfig.width + radarConfig.marginLeft + radarConfig.marginRight;
    const viewBoxHeight =
      radarConfig.height + radarConfig.marginTop + radarConfig.marginBottom;
    const center = {
      x: radarConfig.marginLeft + radarConfig.width / 2,
      y: radarConfig.marginTop + radarConfig.height / 2,
    };

    svg
      .attr("viewbox", `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
      .attr("width", viewBoxWidth)
      .attr("height", viewBoxHeight);

    return svg
      .append("g")
      .attr("transform", `translate(${center.x}, ${center.y})`);
  },
  "drawFrame",
);

const drawRadarGraticule = nameFunction(
  (
    rootGroup: SvgSelection,
    axes: RadarAxis[],
    radius: number,
    ticks: number,
    graticule: RadarGraticule,
  ): void => {
    if (graticule === "circle") {
      for (let tickIndex = 0; tickIndex < ticks; tickIndex++) {
        const tickRadius = (radius * (tickIndex + 1)) / ticks;
        rootGroup
          .append("circle")
          .attr("r", tickRadius)
          .attr("class", "radarGraticule");
      }
      return;
    }

    if (graticule !== "polygon") {
      return;
    }

    const axisCount = axes.length;
    for (let tickIndex = 0; tickIndex < ticks; tickIndex++) {
      const tickRadius = (radius * (tickIndex + 1)) / ticks;
      const points = axes
        .map((_axis, axisIndex) => {
          const angle = (2 * axisIndex * Math.PI) / axisCount - Math.PI / 2;
          return `${tickRadius * Math.cos(angle)},${
            tickRadius * Math.sin(angle)
          }`;
        })
        .join(" ");

      rootGroup
        .append("polygon")
        .attr("points", points)
        .attr("class", "radarGraticule");
    }
  },
  "drawGraticule",
);

const drawRadarAxes = nameFunction(
  (
    rootGroup: SvgSelection,
    axes: RadarAxis[],
    radius: number,
    radarConfig: RadarConfig,
  ): void => {
    const axisCount = axes.length;

    for (let axisIndex = 0; axisIndex < axisCount; axisIndex++) {
      const axisLabel = axes[axisIndex].label;
      const angle = (2 * axisIndex * Math.PI) / axisCount - Math.PI / 2;

      rootGroup
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", radius * radarConfig.axisScaleFactor * Math.cos(angle))
        .attr("y2", radius * radarConfig.axisScaleFactor * Math.sin(angle))
        .attr("class", "radarAxisLine");

      rootGroup
        .append("text")
        .text(axisLabel)
        .attr("x", radius * radarConfig.axisLabelFactor * Math.cos(angle))
        .attr("y", radius * radarConfig.axisLabelFactor * Math.sin(angle))
        .attr("class", "radarAxisLabel");
    }
  },
  "drawAxes",
);

function getRelativeRadius(
  value: number,
  minimumValue: number,
  maximumValue: number,
  radius: number,
): number {
  return (
    (radius *
      (Math.min(Math.max(value, minimumValue), maximumValue) - minimumValue)) /
    (maximumValue - minimumValue)
  );
}
nameFunction(getRelativeRadius, "relativeRadius");

function createClosedCurvePath(points: RadarPoint[], curveTension: number) {
  const pointCount = points.length;
  let pathData = `M${points[0].x},${points[0].y}`;

  for (let pointIndex = 0; pointIndex < pointCount; pointIndex++) {
    const previousPoint = points[(pointIndex - 1 + pointCount) % pointCount];
    const currentPoint = points[pointIndex];
    const nextPoint = points[(pointIndex + 1) % pointCount];
    const afterNextPoint = points[(pointIndex + 2) % pointCount];
    const firstControlPoint = {
      x: currentPoint.x + (nextPoint.x - previousPoint.x) * curveTension,
      y: currentPoint.y + (nextPoint.y - previousPoint.y) * curveTension,
    };
    const secondControlPoint = {
      x: nextPoint.x - (afterNextPoint.x - currentPoint.x) * curveTension,
      y: nextPoint.y - (afterNextPoint.y - currentPoint.y) * curveTension,
    };

    pathData += ` C${firstControlPoint.x},${firstControlPoint.y} ${secondControlPoint.x},${secondControlPoint.y} ${nextPoint.x},${nextPoint.y}`;
  }

  return `${pathData} Z`;
}
nameFunction(createClosedCurvePath, "closedRoundCurve");

function drawRadarCurves(
  rootGroup: SvgSelection,
  axes: RadarAxis[],
  curves: RadarCurve[],
  minimumValue: number,
  maximumValue: number,
  graticule: RadarGraticule,
  radarConfig: RadarConfig,
): void {
  const axisCount = axes.length;
  const radius = Math.min(radarConfig.width, radarConfig.height) / 2;

  curves.forEach((curve, curveIndex) => {
    if (curve.entries.length !== axisCount) {
      return;
    }

    const curvePoints = curve.entries.map((entryValue, axisIndex) => {
      const angle = (2 * Math.PI * axisIndex) / axisCount - Math.PI / 2;
      const pointRadius = getRelativeRadius(
        entryValue,
        minimumValue,
        maximumValue,
        radius,
      );

      return {
        x: pointRadius * Math.cos(angle),
        y: pointRadius * Math.sin(angle),
      };
    });

    if (graticule === "circle") {
      rootGroup
        .append("path")
        .attr("d", createClosedCurvePath(curvePoints, radarConfig.curveTension))
        .attr("class", `radarCurve-${curveIndex}`);
      return;
    }

    if (graticule === "polygon") {
      rootGroup
        .append("polygon")
        .attr(
          "points",
          curvePoints.map((point) => `${point.x},${point.y}`).join(" "),
        )
        .attr("class", `radarCurve-${curveIndex}`);
    }
  });
}
nameFunction(drawRadarCurves, "drawCurves");

function drawRadarLegend(
  rootGroup: SvgSelection,
  curves: RadarCurve[],
  showLegend: boolean,
  radarConfig: RadarConfig,
): void {
  if (!showLegend) {
    return;
  }

  const legendX = ((radarConfig.width / 2 + radarConfig.marginRight) * 3) / 4;
  const legendY = (-(radarConfig.height / 2 + radarConfig.marginTop) * 3) / 4;

  curves.forEach((curve, curveIndex) => {
    const legendItem = rootGroup
      .append("g")
      .attr("transform", `translate(${legendX}, ${legendY + curveIndex * 20})`);

    legendItem
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("class", `radarLegendBox-${curveIndex}`);

    legendItem
      .append("text")
      .attr("x", 16)
      .attr("y", 0)
      .attr("class", "radarLegendText")
      .text(curve.label);
  });
}
nameFunction(drawRadarLegend, "drawLegend");

const drawRadarDiagram = nameFunction(
  (
    sourceText: string,
    diagramId: string,
    renderVersion: string,
    context: RadarRenderContext,
  ): void => {
    void sourceText;
    void renderVersion;

    const radarDb = context.db;
    const axes = radarDb.getAxes();
    const curves = radarDb.getCurves();
    const options = radarDb.getOptions();
    const radarConfig = radarDb.getConfig();
    const diagramTitle = radarDb.getDiagramTitle();
    const rootGroup = createRadarRootGroup(
      selectSvgById(diagramId),
      radarConfig,
    );
    const maximumValue =
      options.max ??
      Math.max(...curves.map((curve) => Math.max(...curve.entries)));
    const minimumValue = options.min;
    const radius = Math.min(radarConfig.width, radarConfig.height) / 2;

    drawRadarGraticule(
      rootGroup,
      axes,
      radius,
      options.ticks,
      options.graticule,
    );
    drawRadarAxes(rootGroup, axes, radius, radarConfig);
    drawRadarCurves(
      rootGroup,
      axes,
      curves,
      minimumValue,
      maximumValue,
      options.graticule,
      radarConfig,
    );
    drawRadarLegend(rootGroup, curves, options.showLegend, radarConfig);

    rootGroup
      .append("text")
      .attr("class", "radarTitle")
      .text(diagramTitle)
      .attr("x", 0)
      .attr("y", -radarConfig.height / 2 - radarConfig.marginTop);
  },
  "draw",
);

const radarRenderer = {
  draw: drawRadarDiagram,
};

const getIndexedRadarStyles = nameFunction(
  (themeVariables: ThemeVariables, radarOptions: RadarConfig): string => {
    let styles = "";

    for (
      let colorIndex = 0;
      colorIndex < themeVariables.THEME_COLOR_LIMIT;
      colorIndex++
    ) {
      const curveColor = String(themeVariables[`cScale${colorIndex}`]);
      styles += `
		.radarCurve-${colorIndex} {
			color: ${curveColor};
			fill: ${curveColor};
			fill-opacity: ${radarOptions.curveOpacity};
			stroke: ${curveColor};
			stroke-width: ${radarOptions.curveStrokeWidth};
		}
		.radarLegendBox-${colorIndex} {
			fill: ${curveColor};
			fill-opacity: ${radarOptions.curveOpacity};
			stroke: ${curveColor};
		}
		`;
    }

    return styles;
  },
  "genIndexStyles",
);

const buildRadarStyleOptions = nameFunction(
  (radarOverrides?: Partial<RadarConfig>) => {
    const themeVariables = cleanAndMerge(
      getDefaultThemeVariables(),
      (getCurrentConfig() as MermaidSiteConfig).themeVariables ?? {},
    ) as ThemeVariables;

    return {
      themeVariables,
      radarOptions: cleanAndMerge(
        themeVariables.radar,
        radarOverrides ?? {},
      ) as RadarConfig,
    };
  },
  "buildRadarStyleOptions",
);

function createRadarDiagramDefinition() {
  return {
    parser: radarParser,
    db: radarDiagramDb,
    renderer: radarRenderer,
    styles: nameFunction(
      ({ radar }: { radar?: Partial<RadarConfig> } = {}): string => {
        const { themeVariables, radarOptions } = buildRadarStyleOptions(radar);

        return `
	.radarTitle {
		font-size: ${themeVariables.fontSize};
		color: ${themeVariables.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${radarOptions.axisColor};
		stroke-width: ${radarOptions.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${radarOptions.axisLabelFontSize}px;
		color: ${radarOptions.axisColor};
	}
	.radarGraticule {
		fill: ${radarOptions.graticuleColor};
		fill-opacity: ${radarOptions.graticuleOpacity};
		stroke: ${radarOptions.graticuleColor};
		stroke-width: ${radarOptions.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${radarOptions.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${getIndexedRadarStyles(themeVariables, radarOptions)}
	`;
      },
      "styles",
    ),
  };
}

const diagramQEK2KX5R = createRadarDiagramDefinition();

export { diagramQEK2KX5R };
