// Restored from ref/webview/assets/infoDiagram-42DDH7IO-By7WsAd5.js
// InfoDiagram42DDH7IO chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { chunkICPOFSXXC } from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { MermaidParserCore } from "./mermaid-parser-core-k5";

const infoParser = {
  parse: chunkAGHRB4JFN(async (source: string): Promise<void> => {
    const parsedInfo = await MermaidParserCore("info", source);
    chunkAGHRB4JFR.debug(parsedInfo);
  }, "parse"),
};

const infoVersion = {
  version: "11.14.0",
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
        const svgSelection = chunk426QAEUC(diagramId);
        chunkICPOFSXXC(svgSelection, 100, 400, true);
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
  infoDiagramDefinition as infoDiagram42DDH7IO,
};
