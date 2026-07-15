// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Theme appearance helpers: a command-menu keyword matcher for the theme preset
// rows, and an effect that mirrors the active theme's accent color into the
// `--codex-titlebar-tint` CSS variable on the document element.
import { useEffect } from "react";
import {
  getCommandMatchScore,
  resolveActiveTheme,
  themeConfigSignal,
  useIsDarkMode,
  useIsTitlebarTintEnabled,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

interface AccentColorVariant {
  background?: string | null;
}

interface AccentColors {
  dark?: AccentColorVariant | null;
  light?: AccentColorVariant | null;
}

interface ActiveTheme {
  accent_colors?: AccentColors | null;
}

export function matchesThemeAppearancePreset(query: string): boolean {
  return getCommandMatchScore("theme appearance preset", query) > 0;
}

export function TitlebarTintEffect(): null {
  const activeTheme = resolveActiveTheme(
    useSignalValue(themeConfigSignal),
  ) as ActiveTheme | null;
  const isTitlebarTintEnabled = useIsTitlebarTintEnabled() as boolean;
  const isDarkAppearance = useIsDarkMode() as boolean;

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const accentColors = activeTheme?.accent_colors;
    const tint =
      isTitlebarTintEnabled && accentColors
        ? pickTitlebarTintBackground(accentColors, isDarkAppearance)
        : null;
    if (tint) {
      root.style.setProperty("--codex-titlebar-tint", tint);
    } else {
      root.style.removeProperty("--codex-titlebar-tint");
    }
  }, [activeTheme, isTitlebarTintEnabled, isDarkAppearance]);

  return null;
}

function pickTitlebarTintBackground(
  accentColors: AccentColors,
  preferDark: boolean,
): string | null {
  return preferDark
    ? (accentColors.dark?.background ?? accentColors.light?.background ?? null)
    : (accentColors.light?.background ?? accentColors.dark?.background ?? null);
}
