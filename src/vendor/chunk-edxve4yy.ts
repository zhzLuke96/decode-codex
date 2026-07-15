// Restored from ref/webview/assets/chunk-EDXVE4YY-BWFoBgdE.js
// Mermaid SVG viewport helper restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { chunkICPOFSXXC as configureSvgSize } from "./chunk-icpofsxx";

interface SvgBounds {
  width: number;
  height: number;
  x: number;
  y: number;
}

interface MermaidSvgSelection {
  attr(name: string, value: string): void;
  node(): { getBBox(): SvgBounds } | null | undefined;
}

type SvgContentRenderer = (
  selection: MermaidSvgSelection,
  height: number,
  width: number,
  useMaxWidth: boolean,
) => unknown;

const calculateDimensionsWithPadding = chunkAGHRB4JFN(
    (svgSelection: MermaidSvgSelection, padding: number): SvgBounds => {
      let bounds = svgSelection.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      return {
        width: bounds.width + padding * 2,
        height: bounds.height + padding * 2,
        x: bounds.x,
        y: bounds.y,
      };
    },
    "calculateDimensionsWithPadding",
  ),
  createPaddedViewBox = chunkAGHRB4JFN(
    (
      x: number,
      y: number,
      width: number,
      height: number,
      padding: number,
    ): string => `${x - padding} ${y - padding} ${width} ${height}`,
    "createViewBox",
  );
export const setupViewPortForSVG = chunkAGHRB4JFN(
  (
    svgSelection: MermaidSvgSelection,
    padding: number,
    className: string,
    useMaxWidth: boolean,
  ) => {
    svgSelection.attr("class", className);
    let { width, height, x, y } = calculateDimensionsWithPadding(
      svgSelection,
      padding,
    );
    (configureSvgSize as SvgContentRenderer)(
      svgSelection,
      height,
      width,
      useMaxWidth,
    );
    let viewBox = createPaddedViewBox(x, y, width, height, padding);
    svgSelection.attr("viewBox", viewBox);
    chunkAGHRB4JFR.debug(
      `viewBox configured: ${viewBox} with padding: ${padding}`,
    );
  },
  "setupViewPortForSVG",
);

export const chunkEDXVE4YY = setupViewPortForSVG;

export function initChunkEDXVE4YY() {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
