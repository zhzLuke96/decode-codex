// Restored from ref/webview/assets/diff-view-mode-C5urbSEm.js and
// app-initial~app-main~automations-page-Bc0ZtIBr.js.
// Chrome-theme boundary helpers shared by settings tools and terminal chrome.
import {
  applyCodexThemeToElement,
  loadChromeThemeSeed,
  normalizeCodexChromeTheme,
} from "../github/diff-view-mode";
import type {
  CodexChromeTheme,
  CodexChromeThemeSeed,
  ThemeVariant,
} from "../github/diff-view-mode/theme-colors-impl";

export function resolveChromeTheme(
  themeOrThemeId: CodexChromeThemeSeed | string | null | undefined,
  variant: ThemeVariant,
): CodexChromeTheme | Promise<CodexChromeTheme> {
  if (typeof themeOrThemeId === "string") {
    return loadChromeThemeSeed(themeOrThemeId, variant).then((themeSeed) =>
      normalizeCodexChromeTheme(themeSeed, variant),
    );
  }
  return normalizeCodexChromeTheme(themeOrThemeId, variant);
}

export function applyChromeThemeToElement(
  element: HTMLElement,
  theme: CodexChromeThemeSeed | null | undefined,
  variant: ThemeVariant,
): void {
  applyCodexThemeToElement(
    element,
    normalizeCodexChromeTheme(theme, variant),
    variant,
  );
}
