// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Locale helper runtime used by LocaleProvider and the app document sync effect.
import { useMemo } from "react";

import { appScopeUnderscore } from "../boundaries/app-scope";
import { _vscodeApiA } from "../boundaries/vscode-api";
import {
  DEFAULT_LOCALE,
  normalizeLocale,
  resolveLocale,
} from "../i18n/locale-resolver";
import { useIntl } from "../vendor/react-intl";
import { appScope } from "./app-scope-runtime";

type LocaleInput = string | null | undefined;
type LocaleSettingsSnapshot = {
  readonly localeOverride: string | null;
};
type HostQueryState<TData> = {
  data?: TData;
  error?: unknown;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
  status: "success";
};
type VscodeQueryOptions = Parameters<typeof _vscodeApiA>[2];

export type ResolvedLocaleInfo = {
  locale: string;
};

export const appSettingsSnapshot: LocaleSettingsSnapshot = {
  get localeOverride(): string | null {
    return readLocaleOverrideFromStorage();
  },
};

export const localeResolvedEvent = {
  $type: "protobuf_analytics_events.v1.CodexI18nLocaleResolved",
};

export const resolvedLocaleSignal = appScopeUnderscore<ResolvedLocaleInfo>(
  appScope,
  { locale: DEFAULT_LOCALE },
);

export function createHostInfoQuery<TData = unknown>(
  scope: unknown,
  queryName: string,
  options: VscodeQueryOptions = {},
): unknown {
  const queryOptions = _vscodeApiA<TData>(scope, queryName, options);
  const idleSignal = appScopeUnderscore<HostQueryState<TData>>(scope, () => ({
    isError: false,
    isLoading: false,
    isPending: false,
    status: "success",
  }));

  return Object.assign(idleSignal, queryOptions, {
    queryName,
  });
}

export function isBlankLocale(locale: unknown): boolean {
  return normalizeLocale(coerceLocaleString(locale)) == null;
}

export function normalizeLocaleOverride(locale: unknown): string | undefined {
  return normalizeLocale(coerceLocaleString(locale)) ?? undefined;
}

export function extractBaseLocale(locale: LocaleInput): string | undefined {
  const normalizedLocale = normalizeLocale(locale);
  return normalizedLocale?.split("-")[0];
}

export function findBestLocaleMatch(locale: LocaleInput) {
  return resolveLocale(locale);
}

export function setDocumentLocale(locale: LocaleInput): void {
  if (typeof document === "undefined") return;
  document.documentElement.lang = normalizeDocumentLocale(locale);
}

export function useResolvedLocaleInfo(): ResolvedLocaleInfo {
  const intl = useIntl();
  return useMemo(
    () => ({ locale: normalizeDocumentLocale(intl.locale) }),
    [intl.locale],
  );
}

function normalizeDocumentLocale(locale: LocaleInput): string {
  return normalizeLocale(locale) ?? DEFAULT_LOCALE;
}

function coerceLocaleString(value: unknown): LocaleInput {
  if (typeof value === "string" || value == null) return value;
  if (typeof value !== "object") return undefined;
  const maybeValue = (value as { value?: unknown }).value;
  return typeof maybeValue === "string" || maybeValue == null
    ? maybeValue
    : undefined;
}

function readLocaleOverrideFromStorage(): string | null {
  const localStorageRef = getLocalStorage();
  if (localStorageRef == null) return null;

  for (const key of [
    "localeOverride",
    "codex.localeOverride",
    "codex.settings.localeOverride",
    "settings.localeOverride",
  ]) {
    const localeOverride = normalizeLocaleOverride(
      parseStoredValue(localStorageRef.getItem(key)),
    );
    if (localeOverride) return localeOverride;
  }

  for (const key of ["codex-settings", "settings"]) {
    const storedSettings = parseStoredValue(localStorageRef.getItem(key));
    if (storedSettings == null || typeof storedSettings !== "object") continue;
    const localeOverride = normalizeLocaleOverride(
      (storedSettings as { localeOverride?: unknown }).localeOverride,
    );
    if (localeOverride) return localeOverride;
  }

  return null;
}

function getLocalStorage(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    return null;
  }
}

function parseStoredValue(value: string | null): unknown {
  if (value == null) return null;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
