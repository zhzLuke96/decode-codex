// Restored from ref/webview/assets/chunk-ATLVNIR6-CqT90CcJ.js
// Mermaid style parsing and RoughJS option helpers from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import { _chunkABZYJK2DL } from "./katex-auto-render";

export interface MermaidStyleInput {
  cssCompiledStyles?: readonly string[] | null;
  cssStyles?: readonly string[] | null;
  labelStyle?: readonly string[] | null;
}

export type MermaidStyleEntry = [property: string, value: string | undefined];

export interface CompiledMermaidStyles {
  stylesMap: Map<string, string | undefined>;
  stylesArray: MermaidStyleEntry[];
}

export interface MermaidStyleStrings {
  labelStyles: string;
  nodeStyles: string;
  stylesArray: MermaidStyleEntry[];
  borderStyles: string[];
  backgroundStyles: string[];
}

export type StrokeDashArray = [number, number];

export interface RoughNodeStyleOverrides {
  roughness: number;
  fill: string;
  fillStyle: "hachure";
  fillWeight: number;
  hachureGap: number;
  stroke: string;
  seed: number;
  strokeWidth: string | number;
  fillLineDash: StrokeDashArray;
  strokeLineDash: StrokeDashArray;
  [key: string]: unknown;
}

function stylesToMap(
  styles: readonly string[],
): Map<string, string | undefined> {
  const stylesMap = new Map<string, string | undefined>();
  styles.forEach((styleDeclaration) => {
    const [rawProperty, rawValue] = styleDeclaration.split(":");
    stylesMap.set(rawProperty.trim(), rawValue?.trim());
  });
  return stylesMap;
}

export const compileStyles = chunkAGHRB4JFN(
  (styleInput: MermaidStyleInput): CompiledMermaidStyles => {
    const stylesMap = stylesToMap([
      ...(styleInput.cssCompiledStyles || []),
      ...(styleInput.cssStyles || []),
      ...(styleInput.labelStyle || []),
    ]);
    return {
      stylesMap,
      stylesArray: [...stylesMap],
    };
  },
  "compileStyles",
);

export const isLabelStyle = chunkAGHRB4JFN(
  (property: string): boolean =>
    property === "color" ||
    property === "font-size" ||
    property === "font-family" ||
    property === "font-weight" ||
    property === "font-style" ||
    property === "text-decoration" ||
    property === "text-align" ||
    property === "text-transform" ||
    property === "line-height" ||
    property === "letter-spacing" ||
    property === "word-spacing" ||
    property === "text-shadow" ||
    property === "text-overflow" ||
    property === "white-space" ||
    property === "word-wrap" ||
    property === "word-break" ||
    property === "overflow-wrap" ||
    property === "hyphens",
  "isLabelStyle",
);

export const parseStrokeDashArray = chunkAGHRB4JFN(
  (dashArray: string | undefined): StrokeDashArray => {
    if (!dashArray) return [0, 0];
    const dashValues = dashArray.trim().split(/\s+/).map(Number);
    if (dashValues.length === 1) {
      const dashValue = isNaN(dashValues[0]) ? 0 : dashValues[0];
      return [dashValue, dashValue];
    }
    return [
      isNaN(dashValues[0]) ? 0 : dashValues[0],
      isNaN(dashValues[1]) ? 0 : dashValues[1],
    ];
  },
  "getStrokeDashArray",
);

export const solidStateFill = chunkAGHRB4JFN((color: string) => {
  const { handDrawnSeed } = _chunkABZYJK2DL();
  return {
    fill: color,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: color,
    seed: handDrawnSeed,
  };
}, "solidStateFill");

export const styles2String = chunkAGHRB4JFN(
  (styleInput: MermaidStyleInput): MermaidStyleStrings => {
    const { stylesArray } = compileStyles(styleInput);
    const labelStyles: string[] = [];
    const nodeStyles: string[] = [];
    const borderStyles: string[] = [];
    const backgroundStyles: string[] = [];

    stylesArray.forEach((styleEntry) => {
      const property = styleEntry[0];
      const styleText = styleEntry.join(":") + " !important";
      if (isLabelStyle(property)) {
        labelStyles.push(styleText);
        return;
      }
      nodeStyles.push(styleText);
      if (property.includes("stroke")) borderStyles.push(styleText);
      if (property === "fill") backgroundStyles.push(styleText);
    });

    return {
      labelStyles: labelStyles.join(";"),
      nodeStyles: nodeStyles.join(";"),
      stylesArray,
      borderStyles,
      backgroundStyles,
    };
  },
  "styles2String",
);

export const userNodeOverrides = chunkAGHRB4JFN(
  (
    styleInput: MermaidStyleInput,
    overrides?: Record<string, unknown>,
  ): RoughNodeStyleOverrides => {
    const { themeVariables, handDrawnSeed } = _chunkABZYJK2DL();
    const { nodeBorder, mainBkg } = themeVariables;
    const { stylesMap } = compileStyles(styleInput);
    return Object.assign(
      {
        roughness: 0.7,
        fill: stylesMap.get("fill") || mainBkg,
        fillStyle: "hachure",
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: stylesMap.get("stroke") || nodeBorder,
        seed: handDrawnSeed,
        strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [0, 0] as StrokeDashArray,
        strokeLineDash: parseStrokeDashArray(stylesMap.get("stroke-dasharray")),
      },
      overrides,
    );
  },
  "userNodeOverrides",
);

export function initMermaidStyleHelpersATLVNIR6Chunk(): void {}

export const chunkATLVNIR6R = solidStateFill;
export const chunkATLVNIR6I = styles2String;
export const chunkATLVNIR6A = userNodeOverrides;
export const chunkATLVNIR6N = isLabelStyle;
export const chunkATLVNIR6T = compileStyles;
export const initChunkATLVNIR6 = initMermaidStyleHelpersATLVNIR6Chunk;
