// Restored from ref/webview/assets/chunk-EXTU4WIE-fqByunxs.js
// ChunkEXTU4WIE chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dompurify";
import { _chunkABZYJK2DL } from "./katex-auto-render";

type MermaidSecurityConfig = {
  securityLevel?: string;
};

const selectSvgElement = chunkAGHRB4JFN((diagramId: string) => {
  const { securityLevel } = _chunkABZYJK2DL() as MermaidSecurityConfig;
  let rootSelection = Src("body");

  if (securityLevel === "sandbox") {
    const sandboxDocument =
      Src(`#i${diagramId}`).node()?.contentDocument ?? document;
    rootSelection = Src(sandboxDocument.body);
  }

  return rootSelection.select(`#${diagramId}`);
}, "selectSvgElement");

export { selectSvgElement, selectSvgElement as chunkEXTU4WIE };

export function initChunkEXTU4WIE(): void {}
