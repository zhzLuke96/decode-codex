// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use overlay config derivation from desktop settings and locales.

import { readFileSync } from "node:fs";
import path from "node:path";
import {
  APPEARANCE_DARK_CHROME_THEME_SETTING_KEY,
  APPEARANCE_LIGHT_CHROME_THEME_SETTING_KEY,
  APPEARANCE_THEME_SETTING_KEY,
  COMPUTER_USE_CONFIG_SETTING_KEYS,
  COMPUTER_USE_OVERLAY_ESC_TO_CANCEL_KEY,
  COMPUTER_USE_OVERLAY_USING_COMPUTER_KEY,
  DEFAULT_COMPUTER_USE_ACCENT_COLOR,
  DEFAULT_COMPUTER_USE_LOCALE,
  DEFAULT_COMPUTER_USE_OVERLAY_ESC_TO_CANCEL,
  DEFAULT_COMPUTER_USE_OVERLAY_USING_COMPUTER,
  LOCALE_OVERRIDE_SETTING_KEY,
} from "./constants";
import type {
  ComputerUseChromeTheme,
  ComputerUseConfig,
  ComputerUseLocaleDirection,
  ComputerUseSettingsStore,
} from "./types";

export function isComputerUseConfigSetting(settingKey: string): boolean {
  return COMPUTER_USE_CONFIG_SETTING_KEYS.has(settingKey);
}

export function createComputerUseConfig({
  locale,
  localesDir,
  settingsStore,
  shouldUseDarkColors,
}: {
  locale: string;
  localesDir: string | null;
  settingsStore: ComputerUseSettingsStore;
  shouldUseDarkColors: boolean;
}): ComputerUseConfig {
  const effectiveLocale =
    trimToNonEmptyString(
      settingsStore.getEffective(LOCALE_OVERRIDE_SETTING_KEY),
    ) ??
    trimToNonEmptyString(locale) ??
    DEFAULT_COMPUTER_USE_LOCALE;
  const localeMessages = readComputerUseLocaleMessages(
    localesDir,
    effectiveLocale,
  );
  return {
    accentColor: getComputerUseAccentColor({
      settingsStore,
      shouldUseDarkColors,
    }),
    direction: getComputerUseLocaleDirection(effectiveLocale),
    locale: effectiveLocale,
    strings: {
      escToCancel: getLocalizedString(
        localeMessages,
        COMPUTER_USE_OVERLAY_ESC_TO_CANCEL_KEY,
        DEFAULT_COMPUTER_USE_OVERLAY_ESC_TO_CANCEL,
      ),
      usingComputer: getLocalizedString(
        localeMessages,
        COMPUTER_USE_OVERLAY_USING_COMPUTER_KEY,
        DEFAULT_COMPUTER_USE_OVERLAY_USING_COMPUTER,
      ),
    },
  };
}

export function getComputerUseAccentColor({
  settingsStore,
  shouldUseDarkColors,
}: {
  settingsStore: ComputerUseSettingsStore;
  shouldUseDarkColors: boolean;
}): string {
  const effectiveTheme = getEffectiveAppearanceTheme(
    settingsStore.getEffective(APPEARANCE_THEME_SETTING_KEY),
    shouldUseDarkColors,
  );
  const chromeTheme = asComputerUseChromeTheme(
    settingsStore.getEffective(
      effectiveTheme === "light"
        ? APPEARANCE_LIGHT_CHROME_THEME_SETTING_KEY
        : APPEARANCE_DARK_CHROME_THEME_SETTING_KEY,
    ),
  );
  return isHexColor(chromeTheme?.accent)
    ? chromeTheme.accent
    : DEFAULT_COMPUTER_USE_ACCENT_COLOR;
}

export function getEffectiveAppearanceTheme(
  theme: unknown,
  shouldUseDarkColors: boolean,
): "light" | "dark" {
  if (theme === "light" || theme === "dark") return theme;
  return shouldUseDarkColors ? "dark" : "light";
}

export function readComputerUseLocaleMessages(
  localesDir: string | null,
  locale: string,
): Record<string, unknown> | null {
  const normalizedLocalesDir = trimToNonEmptyString(localesDir);
  if (normalizedLocalesDir == null) return null;
  const normalizedLocale = locale.replaceAll("_", "-");
  const language = normalizedLocale.split("-")[0];
  const candidatePaths = [
    path.join(normalizedLocalesDir, `${normalizedLocale}.json`),
    language && language !== normalizedLocale
      ? path.join(normalizedLocalesDir, `${language}.json`)
      : null,
  ];
  for (const candidatePath of candidatePaths) {
    if (candidatePath == null) continue;
    try {
      const parsed = JSON.parse(readFileSync(candidatePath, "utf8"));
      if (
        typeof parsed === "object" &&
        parsed != null &&
        !Array.isArray(parsed)
      ) {
        return parsed as Record<string, unknown>;
      }
    } catch {}
  }
  return null;
}

export function getLocalizedString(
  messages: Record<string, unknown> | null,
  key: string,
  fallback: string,
): string {
  const value = messages?.[key];
  return (
    trimToNonEmptyString(typeof value === "string" ? value : null) ?? fallback
  );
}

export function getComputerUseLocaleDirection(
  locale: string,
): ComputerUseLocaleDirection {
  try {
    return new Intl.Locale(locale.replaceAll("_", "-")).textInfo?.direction ===
      "rtl"
      ? "rtl"
      : "ltr";
  } catch {
    return "ltr";
  }
}

export function isHexColor(value: unknown): value is string {
  return /^#[0-9a-fA-F]{6}$/.test(typeof value === "string" ? value : "");
}

function asComputerUseChromeTheme(
  value: unknown,
): ComputerUseChromeTheme | null {
  return typeof value === "object" && value != null
    ? (value as ComputerUseChromeTheme)
    : null;
}

function trimToNonEmptyString(value: unknown): string | null {
  return typeof value === "string" ? value.trim() || null : null;
}
