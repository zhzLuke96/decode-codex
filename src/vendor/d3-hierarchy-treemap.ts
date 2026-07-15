// Restored from ref/webview/assets/treemap-CMHfdOyb.js
// npm-backed compatibility aliases for the bundled d3-hierarchy treemap chunk.
import type { HierarchyRectangularNode } from "d3-hierarchy";

export {
  hierarchy as treemapA,
  treemapDice as treemapR,
  treemapSquarify as treemapN,
  treemap as treemapT,
} from "d3-hierarchy";

export function treemapI(
  node: Pick<HierarchyRectangularNode<unknown>, "x0" | "x1" | "y0" | "y1">,
): void {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}
