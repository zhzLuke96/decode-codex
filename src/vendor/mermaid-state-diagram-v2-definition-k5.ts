// Restored from ref/webview/assets/stateDiagram-v2-QKLJ7IA2-DK5qXNDf.js
// StateDiagramV2QKLJ7IA2 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import {
  chunkOYMX7WX6I,
  chunkOYMX7WX6N,
  chunkOYMX7WX6R,
  chunkOYMX7WX6T,
} from "./mermaid-state-diagram-runtime-k5";

type MermaidStateDiagramConfig = {
  arrowMarkerAbsolute?: boolean;
  state?: {
    arrowMarkerAbsolute?: boolean;
  };
};

const initStateDiagramDefinition = chunkAGHRB4JFN(
  (config: MermaidStateDiagramConfig) => {
    config.state ||= {};
    config.state.arrowMarkerAbsolute = config.arrowMarkerAbsolute;
  },
  "init",
);

const stateDiagramDefinition = {
  get parser() {
    return chunkOYMX7WX6N;
  },
  get db() {
    return new chunkOYMX7WX6T(2);
  },
  get renderer() {
    return chunkOYMX7WX6R;
  },
  get styles() {
    return chunkOYMX7WX6I;
  },
  get init() {
    return initStateDiagramDefinition;
  },
};

export {
  stateDiagramDefinition as diagram,
  stateDiagramDefinition as stateDiagramV2QKLJ7IA2,
};
