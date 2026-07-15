// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Locale runtime: resolves the preferred UI locale (override / IDE / system),
// loads the matching react-intl message bundle behind the `enable_i18n` gate,
// and keeps the document + app-scope store in sync with the resolved locale.
import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { useDynamicConfig } from "../vendor/statsig-current-runtime";
import { IntlProvider } from "../vendor/react-intl";
import { appScope } from "./app-scope-runtime";
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import {
  appSettingsSnapshot,
  createHostInfoQuery,
  DEFAULT_LOCALE,
  extractBaseLocale,
  findBestLocaleMatch,
  isBlankLocale,
  loadLocaleMessages,
  localeResolvedEvent,
  logger,
  logProductEvent,
  normalizeLocaleOverride,
  resolvedLocaleSignal,
  setDocumentLocale,
  useResolvedLocaleInfo,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";

const LOCALE_I18N_CONFIG_ID = "72216192";

type LocaleSource = "IDE" | "SYSTEM" | "FIRST_AVAILABLE";

interface LocaleInfoData {
  ideLocale?: string;
  systemLocale?: string;
}

interface BestLocaleMatch {
  locale: string;
}

interface LoadedLocaleMessages {
  locale: string;
  messages: Record<string, string>;
}

const localeInfoQuery = createHostInfoQuery(appScope, "locale-info", {
  staleTime: Infinity,
});

function getCanonicalLocale(locale: string): string {
  try {
    return Intl.getCanonicalLocales(locale)[0] ?? locale;
  } catch {
    return locale;
  }
}

export interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const { data } = useSignalValue(localeInfoQuery) as { data?: LocaleInfoData };
  const store = useAppScopeStore();
  const i18nConfig = useDynamicConfig(LOCALE_I18N_CONFIG_ID);
  const isI18nEnabled = i18nConfig?.get("enable_i18n", false) as boolean;
  const localeSource = i18nConfig?.get("locale_source", "IDE") as LocaleSource;
  const localeOverride = normalizeLocaleOverride(
    appSettingsSnapshot.localeOverride,
  ) as string | undefined;
  const ideLocale = data?.ideLocale;
  const systemLocale = data?.systemLocale;
  const isLocaleOverrideBlank = isBlankLocale(localeOverride) as boolean;

  let selectedLocale: string | undefined;
  if (localeOverride) {
    selectedLocale = localeOverride;
  } else if (localeSource === "SYSTEM") {
    selectedLocale = systemLocale;
  } else if (localeSource === "FIRST_AVAILABLE") {
    if (ideLocale !== undefined && !isBlankLocale(ideLocale)) {
      selectedLocale = ideLocale;
    } else if (systemLocale !== undefined && !isBlankLocale(systemLocale)) {
      selectedLocale = systemLocale;
    } else {
      selectedLocale = undefined;
    }
  } else {
    selectedLocale = ideLocale;
  }

  const fallbackLocale = getCanonicalLocale(
    (extractBaseLocale(selectedLocale) as string | undefined) ?? DEFAULT_LOCALE,
  );

  let bestMatch: BestLocaleMatch | undefined;
  if (isLocaleOverrideBlank) {
    bestMatch = undefined;
  } else {
    try {
      bestMatch = findBestLocaleMatch(selectedLocale) as BestLocaleMatch;
    } catch {
      logger.error("Failed to resolve preferred locale");
      bestMatch = undefined;
    }
  }

  const resolvedLocale = getCanonicalLocale(
    bestMatch?.locale ?? fallbackLocale,
  );
  const [loadedMessages, setLoadedMessages] =
    useState<LoadedLocaleMessages | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!isI18nEnabled) return;
    void (async () => {
      if (!bestMatch) return;
      try {
        const messages = (await loadLocaleMessages(bestMatch)) as Record<
          string,
          string
        >;
        if (cancelled) return;
        setLoadedMessages({ locale: resolvedLocale, messages });
        logProductEvent(store, localeResolvedEvent, {
          resolvedLocale,
          bestMatchLocale: bestMatch.locale,
        });
      } catch {
        logger.error("Failed to load locale messages", {
          safe: { locale: bestMatch.locale },
          sensitive: {},
        });
        if (!cancelled) setLoadedMessages(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [bestMatch, isI18nEnabled, resolvedLocale, store]);

  let messages: Record<string, string> | undefined;
  if (!isI18nEnabled) {
    messages = undefined;
  } else {
    messages =
      loadedMessages?.locale === resolvedLocale
        ? loadedMessages.messages
        : undefined;
  }

  return (
    <IntlProvider
      locale={resolvedLocale}
      defaultLocale={DEFAULT_LOCALE}
      messages={messages}
      onError={onIntlError}
    >
      {children}
    </IntlProvider>
  );
}

function onIntlError() {}

export function LocaleDocumentSyncEffect(): null {
  const store = useAppScopeStore();
  const localeInfo = useResolvedLocaleInfo() as { locale: string };
  useLayoutEffect(() => {
    store.set(resolvedLocaleSignal, localeInfo);
    setDocumentLocale(localeInfo.locale);
  }, [localeInfo, store]);
  return null;
}
