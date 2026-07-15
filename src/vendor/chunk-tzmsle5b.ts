// Restored from ref/webview/assets/chunk-TZMSLE5B-DUO6_pDl.js
// Mermaid SVG drawing helpers shared by flow, sequence, journey, and C4 diagrams.
import { chunkAGHRB4JFN } from "./dompurify";
import { chunkABZYJK2DK as LINE_BREAK_TAG_PATTERN } from "./katex-auto-render";
import { dist as createUrlSanitizerModule } from "./entities-escape";

type SvgAttributeValue = string | number | boolean | null | undefined;

export type MermaidSvgSelection = {
  append(elementName: string): MermaidSvgSelection;
  attr(name: string, value?: SvgAttributeValue): MermaidSvgSelection;
  style(name: string, value: SvgAttributeValue): MermaidSvgSelection;
  text(value: string): MermaidSvgSelection;
  lower(): MermaidSvgSelection;
};

export type MermaidRectDescriptor = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  class?: string;
  name?: string;
  rx?: number;
  ry?: number;
  attrs?: Record<string, SvgAttributeValue>;
};

export type MermaidBackgroundRectDescriptor = {
  startx: number;
  starty: number;
  stopx: number;
  stopy: number;
  fill: string;
  stroke: string;
};

export type MermaidTextDescriptor = {
  x: number;
  y: number;
  text: string;
  anchor: string;
  textMargin: number;
  class?: string;
};

export type MermaidTextObjectDefaults = {
  x: number;
  y: number;
  width: number;
  height: number;
  "text-anchor": "start";
  style: string;
  textMargin: number;
  rx: number;
  ry: number;
  tspan: boolean;
};

export type MermaidNoteRectDescriptor = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  anchor: "start";
  rx: number;
  ry: number;
};

type UrlSanitizerModule = {
  sanitizeUrl(input: string | null | undefined): string;
};

const nameFunction = chunkAGHRB4JFN as <TArgs extends unknown[], TResult>(
  callback: (...args: TArgs) => TResult,
  displayName: string,
) => (...args: TArgs) => TResult;

const urlSanitizer = createUrlSanitizerModule() as UrlSanitizerModule;

export const drawRect = nameFunction(
  (
    parentSelection: MermaidSvgSelection,
    rect: MermaidRectDescriptor,
  ): MermaidSvgSelection => {
    const rectSelection = parentSelection.append("rect");
    rectSelection.attr("x", rect.x);
    rectSelection.attr("y", rect.y);
    rectSelection.attr("fill", rect.fill);
    rectSelection.attr("stroke", rect.stroke);
    rectSelection.attr("width", rect.width);
    rectSelection.attr("height", rect.height);

    if (rect.name) rectSelection.attr("name", rect.name);
    if (rect.rx) rectSelection.attr("rx", rect.rx);
    if (rect.ry) rectSelection.attr("ry", rect.ry);

    if (rect.attrs !== undefined) {
      for (const [attributeName, attributeValue] of Object.entries(
        rect.attrs,
      )) {
        rectSelection.attr(attributeName, attributeValue);
      }
    }

    if (rect.class) rectSelection.attr("class", rect.class);
    return rectSelection;
  },
  "drawRect",
);

export const drawBackgroundRect = nameFunction(
  (
    parentSelection: MermaidSvgSelection,
    bounds: MermaidBackgroundRectDescriptor,
  ): void => {
    drawRect(parentSelection, {
      x: bounds.startx,
      y: bounds.starty,
      width: bounds.stopx - bounds.startx,
      height: bounds.stopy - bounds.starty,
      fill: bounds.fill,
      stroke: bounds.stroke,
      class: "rect",
    }).lower();
  },
  "drawBackgroundRect",
);

export const getTextObj = nameFunction(
  (): MermaidTextObjectDefaults => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
  }),
  "getTextObj",
);

export const drawImage = nameFunction(
  (
    parentSelection: MermaidSvgSelection,
    x: number,
    y: number,
    imageUrl: string,
  ): void => {
    const imageSelection = parentSelection.append("image");
    imageSelection.attr("x", x);
    imageSelection.attr("y", y);
    imageSelection.attr("xlink:href", urlSanitizer.sanitizeUrl(imageUrl));
  },
  "drawImage",
);

export const getNoteRect = nameFunction(
  (): MermaidNoteRectDescriptor => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0,
  }),
  "getNoteRect",
);

export const drawEmbeddedImage = nameFunction(
  (
    parentSelection: MermaidSvgSelection,
    x: number,
    y: number,
    imageId: string,
  ): void => {
    const useSelection = parentSelection.append("use");
    useSelection.attr("x", x);
    useSelection.attr("y", y);
    useSelection.attr("xlink:href", `#${urlSanitizer.sanitizeUrl(imageId)}`);
  },
  "drawEmbeddedImage",
);

export const drawText = nameFunction(
  (
    parentSelection: MermaidSvgSelection,
    textDescriptor: MermaidTextDescriptor,
  ): MermaidSvgSelection => {
    const normalizedText = textDescriptor.text.replace(
      LINE_BREAK_TAG_PATTERN,
      " ",
    );
    const textSelection = parentSelection.append("text");
    textSelection.attr("x", textDescriptor.x);
    textSelection.attr("y", textDescriptor.y);
    textSelection.attr("class", "legend");
    textSelection.style("text-anchor", textDescriptor.anchor);

    if (textDescriptor.class) {
      textSelection.attr("class", textDescriptor.class);
    }

    textSelection
      .append("tspan")
      .attr("x", textDescriptor.x + textDescriptor.textMargin * 2)
      .text(normalizedText);

    return textSelection;
  },
  "drawText",
);

export function initMermaidSvgDrawingHelpersChunk(): void {}

export const chunkTZMSLE5BI = drawRect;
export const chunkTZMSLE5BT = drawBackgroundRect;
export const chunkTZMSLE5BS = getTextObj;
export const chunkTZMSLE5BR = drawImage;
export const chunkTZMSLE5BO = getNoteRect;
export const chunkTZMSLE5BN = drawEmbeddedImage;
export const chunkTZMSLE5BA = drawText;
export const initChunkTZMSLE5B = initMermaidSvgDrawingHelpersChunk;
