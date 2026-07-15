// Restored from ref/webview/assets/dagre-BqhzN4_p.js
// Flat boundary. Vendored also matches current ref asset ref/webview/assets/dagre-5oTtyBe6.js.
// Dagre layout runtime re-export backed by the stock npm package.

import dagre from "dagre";

export type {
  Edge as DagreEdge,
  EdgeConfig as DagreEdgeConfig,
  GraphEdge as DagreGraphEdge,
  GraphLabel as DagreGraphLabel,
  Node as DagreNode,
  NodeConfig as DagreNodeConfig,
} from "dagre";

export const Dagre: typeof dagre.layout = dagre.layout;
export const dagreLayout: typeof dagre.layout = dagre.layout;

export default dagre;

export function initDagre(): void {}
