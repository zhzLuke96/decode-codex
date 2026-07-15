// Restored from ref/webview/assets/chunk-CVBHYZKI-CCA47Th3.js
// Vendored Mermaid subgraph title margin helper restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";

type MermaidFlowchartConfig = {
  flowchart?: {
    subGraphTitleMargin?: {
      top?: number;
      bottom?: number;
    };
  };
};

type SubGraphTitleMargins = {
  subGraphTitleTopMargin: number;
  subGraphTitleBottomMargin: number;
  subGraphTitleTotalMargin: number;
};

const getSubGraphTitleMargins = chunkAGHRB4JFN(
  ({ flowchart }: MermaidFlowchartConfig): SubGraphTitleMargins => {
    const topMargin = flowchart?.subGraphTitleMargin?.top ?? 0;
    const bottomMargin = flowchart?.subGraphTitleMargin?.bottom ?? 0;

    return {
      subGraphTitleTopMargin: topMargin,
      subGraphTitleBottomMargin: bottomMargin,
      subGraphTitleTotalMargin: topMargin + bottomMargin,
    };
  },
  "getSubGraphTitleMargins",
);

export { getSubGraphTitleMargins, getSubGraphTitleMargins as chunkCVBHYZKI };

export function initChunkCVBHYZKI() {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
