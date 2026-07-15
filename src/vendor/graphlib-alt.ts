// Restored from ref/webview/assets/graphlib-ichArG6F.js
// Also matches current ref asset ref/webview/assets/graphlib-CU4GKOO2.js.
// Graphlib alias chunk backed by the stock npm package.

import graphlib from "graphlib";

export type {
  Edge as GraphlibEdge,
  GraphOptions as GraphlibOptions,
} from "graphlib";

export const Graphlib: typeof graphlib.Graph = graphlib.Graph;
export const graphlibAlgorithms: typeof graphlib.alg = graphlib.alg;
export const graphlibJson: typeof graphlib.json = graphlib.json;

export default Graphlib;

export function initGraphlibAltChunk(): void {}
