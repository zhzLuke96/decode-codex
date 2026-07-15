// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Theme import/export and patch normalization helpers.
import {
  getCodeThemeRegistration,
  getDefaultThemeForVariant,
} from "./theme-defaults";
import type {
  CodexChromeTheme,
  CodeThemeRegistration,
  ThemeEditorSelection,
  ThemeVariant,
} from "./types";

const THEME_SHARE_PREFIX = "codex-theme-v1:";
const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

export function createThemeShareString({
  codeThemeId,
  theme,
  variant,
}: {
  codeThemeId: string;
  theme: CodexChromeTheme;
  variant: ThemeVariant;
}): string {
  return `${THEME_SHARE_PREFIX}${JSON.stringify({ codeThemeId, theme, variant })}`;
}

export function parseThemeShareString(
  value: string,
  expectedVariant: ThemeVariant,
  codeThemes: readonly CodeThemeRegistration[],
): ThemeEditorSelection {
  const trimmed = value.trim();
  if (!trimmed.startsWith(THEME_SHARE_PREFIX)) {
    throw new Error("Theme share string mismatch");
  }
  const payload = trimmed.slice(THEME_SHARE_PREFIX.length);
  const parsed = JSON.parse(
    payload.startsWith("{") ? payload : decodeURIComponent(payload),
  );
  assertThemePayload(parsed);
  if (parsed.variant !== expectedVariant) {
    throw new Error("Theme variant mismatch");
  }
  return {
    codeThemeId: getCodeThemeRegistration(codeThemes, parsed.codeThemeId).id,
    theme: normalizeTheme(parsed.theme, expectedVariant),
  };
}

export function canImportThemeString(
  value: string,
  expectedVariant: ThemeVariant,
  codeThemes: readonly CodeThemeRegistration[],
): boolean {
  try {
    parseThemeShareString(value, expectedVariant, codeThemes);
    return true;
  } catch {
    return false;
  }
}

export function mergeThemePatch(
  theme: CodexChromeTheme,
  patch: Partial<CodexChromeTheme>,
): CodexChromeTheme {
  return {
    ...theme,
    ...patch,
    fonts:
      patch.fonts == null ? theme.fonts : mergeFonts(theme.fonts, patch.fonts),
    semanticColors:
      patch.semanticColors == null
        ? theme.semanticColors
        : { ...theme.semanticColors, ...patch.semanticColors },
  };
}

export function themesEqual(
  left: CodexChromeTheme,
  right: CodexChromeTheme,
): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function mergeFonts(
  currentFonts: CodexChromeTheme["fonts"],
  patch: Partial<CodexChromeTheme["fonts"]>,
): CodexChromeTheme["fonts"] {
  return { ...currentFonts, ...patch };
}

function normalizeTheme(
  theme: CodexChromeTheme,
  variant: ThemeVariant,
): CodexChromeTheme {
  const fallback = getDefaultThemeForVariant(variant);
  return {
    ...fallback,
    ...theme,
    accent: normalizeHexColor(theme.accent, fallback.accent),
    ink: normalizeHexColor(theme.ink, fallback.ink),
    surface: normalizeHexColor(theme.surface, fallback.surface),
    semanticColors: {
      diffAdded: normalizeHexColor(
        theme.semanticColors?.diffAdded,
        fallback.semanticColors.diffAdded,
      ),
      diffRemoved: normalizeHexColor(
        theme.semanticColors?.diffRemoved,
        fallback.semanticColors.diffRemoved,
      ),
      skill: normalizeHexColor(
        theme.semanticColors?.skill,
        fallback.semanticColors.skill,
      ),
    },
  };
}

function normalizeHexColor(value: unknown, fallback: string): string {
  return typeof value === "string" && HEX_COLOR_RE.test(value)
    ? value
    : fallback;
}

function assertThemePayload(value: unknown): asserts value is {
  codeThemeId: string;
  theme: CodexChromeTheme;
  variant: ThemeVariant;
} {
  if (
    value == null ||
    typeof value !== "object" ||
    typeof (value as { codeThemeId?: unknown }).codeThemeId !== "string"
  ) {
    throw new Error("Theme payload mismatch");
  }
}
