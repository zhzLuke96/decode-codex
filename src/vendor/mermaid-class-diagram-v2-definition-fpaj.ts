// Restored from ref/webview/assets/classDiagram-v2-WZHVMYZB-Bcn_9N3w.js
// ClassDiagramV2WZHVMYZB chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";
import {
  chunkB4BG7PRWI,
  chunkB4BG7PRWN,
  chunkB4BG7PRWR,
  chunkB4BG7PRWT,
} from "./mermaid-class-diagram-fpaj";

type MermaidClassDiagramConfig = {
  arrowMarkerAbsolute?: boolean;
  class?: {
    arrowMarkerAbsolute?: boolean;
  };
};

const initClassDiagramDefinition = chunkAGHRB4JFN(
  (config: MermaidClassDiagramConfig) => {
    config.class ||= {};
    config.class.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
  },
  "init",
);

const classDiagramDefinition = {
  get parser() {
    return chunkB4BG7PRWN;
  },
  get db() {
    return new chunkB4BG7PRWT();
  },
  get renderer() {
    return chunkB4BG7PRWR;
  },
  get styles() {
    return chunkB4BG7PRWI;
  },
  get init() {
    return initClassDiagramDefinition;
  },
};

export {
  classDiagramDefinition as ClassDiagramV2WZHVMYZB,
  classDiagramDefinition as diagram,
};
