// Restored from ref/webview/assets/classDiagram-v2-HSJHXN6E-AM1LZZtP.js
// ClassDiagramV2HSJHXN6E chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import {
  chunk4TB4RGXKI,
  chunk4TB4RGXKN,
  chunk4TB4RGXKR,
  chunk4TB4RGXKT,
} from "./mermaid-class-diagram-runtime-k5";

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
    return chunk4TB4RGXKN;
  },
  get db() {
    return new chunk4TB4RGXKT();
  },
  get renderer() {
    return chunk4TB4RGXKR;
  },
  get styles() {
    return chunk4TB4RGXKI;
  },
  get init() {
    return initClassDiagramDefinition;
  },
};

export {
  classDiagramDefinition as ClassDiagramV2HSJHXN6E,
  classDiagramDefinition as diagram,
};
