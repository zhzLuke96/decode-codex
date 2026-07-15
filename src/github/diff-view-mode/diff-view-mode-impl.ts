// Restored from ref/webview/assets/diff-view-mode-C5urbSEm.js
// diff-view-mode-C5urbSEm chunk restored from the Codex webview bundle.
// Semantic implementation facade for diff view mode, editor theme, and diff preferences.
export {
  applyCssProperties,
  applyCodexThemeToElement,
  normalizeCodexChromeTheme,
} from "./theme-colors-impl";
export {
  getCodeThemeRegistration,
  isCodeThemeId,
  listAllCodeThemeRegistrations,
  listCodeThemesForVariant,
  loadChromeThemeSeed,
  resolveCodeTheme,
} from "./theme-registry-impl";
export {
  editorDiffViewModeSignal,
  fileSourceGitBlameSignal,
  hideDiffWhitespaceSignal,
  richPreviewSignal,
  scopedRichPreviewEnabledSignal,
  setThreadRichPreviewEnabled,
  wordDiffsEnabledSignal,
  wrapCodeDiffSignal,
} from "./diff-preferences-impl";
