// Restored from ref/webview/assets/infoDiagram-F6ZHWCRC-C6PSQHhJ.js
// InfoDiagramF6ZHWCRC chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DN } from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
import { ChunkKS23V3DP } from "../utils/chunk-ks23-v3-dp";

const infoParser = {
  parse: chunkAGHRB4JFN(async (source: string): Promise<void> => {
    const parsedInfo = await MermaidParserCore("info", source);
    chunkAGHRB4JFR.debug(parsedInfo);
  }, "parse"),
};

const infoVersion = {
  version: ChunkKS23V3DP.version + "",
};

const infoDiagramDefinition = {
  parser: infoParser,
  db: {
    getVersion: chunkAGHRB4JFN(() => infoVersion.version, "getVersion"),
  },
  renderer: {
    draw: chunkAGHRB4JFN(
      (source: string, diagramId: string, version: string): void => {
        chunkAGHRB4JFR.debug("rendering info diagram\n" + source);
        const svgSelection = chunkEXTU4WIE(diagramId);
        _chunkABZYJK2DN(svgSelection, 100, 400, true);
        svgSelection
          .append("g")
          .append("text")
          .attr("x", 100)
          .attr("y", 40)
          .attr("class", "version")
          .attr("font-size", 32)
          .style("text-anchor", "middle")
          .text(`v${version}`);
      },
      "draw",
    ),
  },
};

export {
  infoDiagramDefinition as diagram,
  infoDiagramDefinition as infoDiagramF6ZHWCRC,
};
