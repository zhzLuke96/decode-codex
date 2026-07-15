// Restored from ref/webview/assets/codex-dark-C0SGGgEz.js
// Also covers ref/webview/assets/codex-light-CP3oidzW.js

export type CodexShikiThemeType = "dark" | "light";

export type CodexShikiTokenColor = Readonly<{
  scope: string | readonly string[];
  settings: Readonly<Record<string, string>>;
}>;

export type CodexShikiTheme = Readonly<{
  name: string;
  type: CodexShikiThemeType;
  colors: Readonly<Record<string, string>>;
  tokenColors: readonly CodexShikiTokenColor[];
  semanticTokenColors: Readonly<Record<string, string>>;
}>;
