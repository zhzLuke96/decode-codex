// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Default theme registrations used by the appearance settings editor.
import type {
  CodexChromeTheme,
  CodeThemeRegistration,
  ThemeVariant,
} from "./types";

const DEFAULT_LIGHT_THEME: CodexChromeTheme = {
  accent: "#0f6fff",
  contrast: 50,
  fonts: { code: null, ui: null },
  ink: "#111827",
  opaqueWindows: false,
  semanticColors: {
    diffAdded: "#1a7f37",
    diffRemoved: "#cf222e",
    skill: "#8250df",
  },
  surface: "#ffffff",
};

const DEFAULT_DARK_THEME: CodexChromeTheme = {
  accent: "#7aa2ff",
  contrast: 50,
  fonts: { code: null, ui: null },
  ink: "#f9fafb",
  opaqueWindows: false,
  semanticColors: {
    diffAdded: "#57ab5a",
    diffRemoved: "#ff7b72",
    skill: "#d2a8ff",
  },
  surface: "#111827",
};

export function getDefaultThemeForVariant(
  variant: ThemeVariant,
): CodexChromeTheme {
  return variant === "light" ? DEFAULT_LIGHT_THEME : DEFAULT_DARK_THEME;
}

export function getDefaultCodeThemesForVariant(
  variant: ThemeVariant,
): CodeThemeRegistration[] {
  return [
    { id: variant === "light" ? "default-light" : "default-dark", variant },
  ];
}

export function getCodeThemeRegistration(
  codeThemes: readonly CodeThemeRegistration[],
  codeThemeId: string,
): CodeThemeRegistration {
  return (
    codeThemes.find((theme) => theme.id === codeThemeId) ??
    codeThemes[0] ?? { id: codeThemeId }
  );
}
