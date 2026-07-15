// Restored from ref/webview/assets/graphlib-DGNlaJmK.js
// Also matches current ref assets graphlib-BnZ9Pn5Q.js, graphlib-C7jSnfgR.js, and graphlib-CqExjonE.js.
// Graphlib runtime re-export backed by the stock npm package.

import graphlib from "graphlib";

export type {
  Edge as GraphlibEdge,
  GraphOptions as GraphlibOptions,
} from "graphlib";

export const Graphlib: typeof graphlib.Graph = graphlib.Graph;
export const graphlibAlgorithms: typeof graphlib.alg = graphlib.alg;
export const graphlibJson: typeof graphlib.json = graphlib.json;

export default Graphlib;
