// Restored from ref/webview/assets/chunk-55IACEB6-C7TKde_g.js
// Also covers current ref asset ref/webview/assets/chunk-55IACEB6-W9i3ByIr.js.
// Vendored Mermaid diagram element lookup helper restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";

const getDiagramElement = chunkAGHRB4JFN(
  (diagramId: string, securityLevel: string) => {
    if (securityLevel === "sandbox") {
      const sandboxFrameSelection = Src("#i" + diagramId);
      return Src(sandboxFrameSelection.nodes()[0].contentDocument.body).select(
        `[id="${diagramId}"]`,
      );
    }

    return Src("body").select(`[id="${diagramId}"]`);
  },
  "getDiagramElement",
);

export { getDiagramElement, getDiagramElement as chunk55IACEB6 };

export function initChunk55IACEB6(): void {}
