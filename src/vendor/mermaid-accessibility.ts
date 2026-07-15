// Restored from ref/webview/assets/chunk-4BX2VUAB-CQ4cpB2N.js
// Chunk4BX2VUAB chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dompurify";

type MermaidAccessibilityConfig = {
  accDescr?: string;
  accTitle?: string;
  title?: string;
};

type MermaidCommonDb = {
  setAccDescription?: (description: string) => void;
  setAccTitle?: (title: string) => void;
  setDiagramTitle?: (title: string) => void;
};

function populateCommonDb(
  accessibilityConfig: MermaidAccessibilityConfig,
  commonDb: MermaidCommonDb,
) {
  accessibilityConfig.accDescr &&
    commonDb.setAccDescription?.(accessibilityConfig.accDescr);
  accessibilityConfig.accTitle &&
    commonDb.setAccTitle?.(accessibilityConfig.accTitle);
  accessibilityConfig.title &&
    commonDb.setDiagramTitle?.(accessibilityConfig.title);
}
chunkAGHRB4JFN(populateCommonDb, "populateCommonDb");
export { populateCommonDb as chunk4BX2VUAB };
