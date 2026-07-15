// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// CSS classes and attributes shared by DOM content-search helpers.
export const contentSearchMatchClassName = "codex-thread-find-match";
export const activeContentSearchMatchClassName = "codex-thread-find-active";
export const contentSearchMatchIdAttribute = "data-content-search-match-id";
export const shadowStyleElementId = "codex-thread-find-shadow-style";
export const shadowHighlightStyle = `
mark.codex-thread-find-match {
  background-color: var(--vscode-charts-yellow);
  color: var(--color-token-foreground);
  border-radius: var(--radius-2xs);
  padding: 0;
  margin: 0;
  border: 0;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  vertical-align: baseline;
}

mark.codex-thread-find-active {
  background-color: var(--vscode-charts-orange);
}
`;
