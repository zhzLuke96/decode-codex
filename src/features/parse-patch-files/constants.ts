// Restored from ref/webview/assets/parsePatchFiles-Dm7PKlLE.js
// parsePatchFiles-Dm7PKlLE chunk restored from the Codex webview bundle.
const diffsContainerClass = "diffs-container";
const mboxPatchBoundaryPattern = /(?=^From [a-f0-9]+ .+$)/m;
const gitDiffBoundaryPattern = /(?=^diff --git)/gm;
const unifiedFileBoundaryPattern = /(?=^---\s+\S)/gm;
const unifiedPathPattern = /^(---|\+\+\+)\s+([^\t\r\n]+)/;
const gitPathPattern = /^(---|\+\+\+)\s+[ab]\/([^\t\r\n]+)/;
const gitHeaderPattern =
  /^diff --git (?:"a\/(.+?)"|a\/(.+?)) (?:"b\/(.+?)"|b\/(.+?))$/;
const indexHeaderPattern = /^index ([0-9a-f]+)\.\.([0-9a-f]+)(?: (\d+))?$/i;

const headerPrefixClass = "header-prefix";
const headerMetadataClass = "header-metadata";
const headerCustomClass = "header-custom";
const diffThemeClassNames = { dark: "pierre-dark", light: "pierre-light" };
const themeCssAttribute = "data-theme-css";
const unsafeCssAttribute = "data-unsafe-css";
const scrollbarMeasureAttribute = "data-diffs-scrollbar-measure";
const scrollbarGutterCssVar = "--diffs-scrollbar-gutter-measured";
const maxVirtualizedLines = 100000;
const diffLayoutDefaults = {
  hunkLineCount: 50,
  lineHeight: 20,
  diffHeaderHeight: 44,
  spacing: 8,
};
const emptyLineRange = Object.freeze({ fromStart: 0, fromEnd: 0 });
const defaultPatchViewport = {
  startingLine: 0,
  totalLines: Infinity,
  bufferBefore: 0,
  bufferAfter: 0,
};
const emptyPatchViewport = {
  startingLine: 0,
  totalLines: 0,
  bufferBefore: 0,
  bufferAfter: 0,
};

export {
  defaultPatchViewport,
  diffLayoutDefaults,
  diffsContainerClass,
  diffThemeClassNames,
  emptyLineRange,
  emptyPatchViewport,
  gitDiffBoundaryPattern,
  gitHeaderPattern,
  gitPathPattern,
  headerCustomClass,
  headerMetadataClass,
  headerPrefixClass,
  indexHeaderPattern,
  maxVirtualizedLines,
  mboxPatchBoundaryPattern,
  scrollbarGutterCssVar,
  scrollbarMeasureAttribute,
  themeCssAttribute,
  unifiedFileBoundaryPattern,
  unifiedPathPattern,
  unsafeCssAttribute,
};
