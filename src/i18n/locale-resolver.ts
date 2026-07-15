// Restored from ref/webview/assets/locale-resolver-C_BYupit.js

type LocaleMessages = Record<string, string>;
type LocaleModule = {
  default?: LocaleMessages;
  [exportName: string]: unknown;
};
type LocaleDescriptor = {
  locale: string;
  normalized: string;
  language: string;
  load: () => Promise<LocaleModule>;
};
const DEFAULT_LOCALE = "en-US";
const localeLoaders = {
  "../locales/am.json": () => import("../locales/am"),
  "../locales/ar.json": () => import("../locales/ar"),
  "../locales/bg-BG.json": () => import("../locales/bg-bg"),
  "../locales/bn-BD.json": () => import("../locales/bn-bd"),
  "../locales/bs-BA.json": () => import("../locales/bs-ba"),
  "../locales/ca-ES.json": () => import("../locales/ca-es"),
  "../locales/cs-CZ.json": () => import("../locales/cs-cz"),
  "../locales/da-DK.json": () => import("../locales/da-dk"),
  "../locales/de-DE.json": () => import("../locales/de-de"),
  "../locales/el-GR.json": () => import("../locales/el-gr"),
  "../locales/es-419.json": () => import("../locales/es-419"),
  "../locales/es-ES.json": () => import("../locales/es-es"),
  "../locales/et-EE.json": () => import("../locales/et-ee"),
  "../locales/fa.json": () => import("../locales/fa"),
  "../locales/fi-FI.json": () => import("../locales/fi-fi"),
  "../locales/fr-CA.json": () => import("../locales/fr-ca"),
  "../locales/fr-FR.json": () => import("../locales/fr-fr"),
  "../locales/gu-IN.json": () => import("../locales/gu-in"),
  "../locales/hi-IN.json": () => import("../locales/hi-in"),
  "../locales/hr-HR.json": () => import("../locales/hr-hr"),
  "../locales/hu-HU.json": () => import("../locales/hu-hu"),
  "../locales/hy-AM.json": () => import("../locales/hy-am"),
  "../locales/id-ID.json": () => import("../locales/id-id"),
  "../locales/is-IS.json": () => import("../locales/is-is"),
  "../locales/it-IT.json": () => import("../locales/it-it"),
  "../locales/ja-JP.json": () => import("../locales/ja-jp"),
  "../locales/ka-GE.json": () => import("../locales/ka-ge"),
  "../locales/kk.json": () => import("../locales/kk"),
  "../locales/kn-IN.json": () => import("../locales/kn-in"),
  "../locales/ko-KR.json": () => import("../locales/ko-kr"),
  "../locales/lt.json": () => import("../locales/lt"),
  "../locales/lv-LV.json": () => import("../locales/lv-lv"),
  "../locales/mk-MK.json": () => import("../locales/mk-mk"),
  "../locales/ml.json": () => import("../locales/ml"),
  "../locales/mn.json": () => import("../locales/mn"),
  "../locales/mr-IN.json": () => import("../locales/mr-in"),
  "../locales/ms-MY.json": () => import("../locales/ms-my"),
  "../locales/my-MM.json": () => import("../locales/my-mm"),
  "../locales/nb-NO.json": () => import("../locales/nb-no"),
  "../locales/nl-NL.json": () => import("../locales/nl-nl"),
  "../locales/pa.json": () => import("../locales/pa"),
  "../locales/pl-PL.json": () => import("../locales/pl-pl"),
  "../locales/pt-BR.json": () => import("../locales/pt-br"),
  "../locales/pt-PT.json": () => import("../locales/pt-pt"),
  "../locales/ro-RO.json": () => import("../locales/ro-ro"),
  "../locales/ru-RU.json": () => import("../locales/ru-ru"),
  "../locales/sk-SK.json": () => import("../locales/sk-sk"),
  "../locales/sl-SI.json": () => import("../locales/sl-si"),
  "../locales/so-SO.json": () => import("../locales/so-so"),
  "../locales/sq-AL.json": () => import("../locales/sq-al"),
  "../locales/sr-RS.json": () => import("../locales/sr-rs"),
  "../locales/sv-SE.json": () => import("../locales/sv-se"),
  "../locales/sw-TZ.json": () => import("../locales/sw-tz"),
  "../locales/ta-IN.json": () => import("../locales/ta-in"),
  "../locales/te-IN.json": () => import("../locales/te-in"),
  "../locales/th-TH.json": () => import("../locales/th-th"),
  "../locales/tl.json": () => import("../locales/tl"),
  "../locales/tr-TR.json": () => import("../locales/tr-tr"),
  "../locales/uk-UA.json": () => import("../locales/uk-ua"),
  "../locales/ur.json": () => import("../locales/ur"),
  "../locales/vi-VN.json": () => import("../locales/vi-vn"),
  "../locales/zh-CN.json": () => import("../locales/zh-cn"),
  "../locales/zh-HK.json": () => import("../locales/zh-hk"),
  "../locales/zh-TW.json": () => import("../locales/zh-tw"),
};
const supportedLocales = Object.entries(localeLoaders)
  .map(([path, load]) => {
    const match = path.match(/\/([^/]+)\.json$/);
    if (!match) return null;
    const locale = match[1];
    const normalized = normalizeLocale(locale);
    if (!normalized) return null;
    const [language] = normalized.split("-");
    return {
      locale,
      normalized,
      language,
      load,
    };
  })
  .filter((item): item is LocaleDescriptor => item != null)
  .sort((left, right) => left.locale.localeCompare(right.locale));
function getSupportedLocales() {
  return [...supportedLocales];
}
function getLocaleLanguageDisplayName(locale: string, displayLocale: string) {
  try {
    return (
      new Intl.DisplayNames([displayLocale], {
        type: "language",
        languageDisplay: "standard",
      }).of(locale) ?? locale
    );
  } catch {
    return locale;
  }
}
function normalizeLocale(locale: string | null | undefined) {
  if (!locale) return null;
  const trimmed = locale.trim();
  return trimmed ? trimmed.replace(/_/g, "-").toLowerCase() : null;
}
function isEnglishLocale(locale: string | null | undefined) {
  const normalized = normalizeLocale(locale);
  return (
    normalized != null && (normalized === "en" || normalized.startsWith("en-"))
  );
}
function areEquivalentLocales(
  leftLocale: string | null | undefined,
  rightLocale: string | null | undefined,
) {
  return isEnglishLocale(leftLocale)
    ? isEnglishLocale(rightLocale)
    : normalizeLocale(leftLocale) === normalizeLocale(rightLocale);
}
function resolveLocale(locale: string | null | undefined) {
  const normalized = normalizeLocale(locale);
  if (!normalized) return;
  const exactLocale = supportedLocales.find(
    (item) => item.normalized === normalized,
  );
  if (exactLocale) return exactLocale;
  const [language, region] = normalized.split("-");
  if (!language) return;
  const languageLocales = supportedLocales.filter(
    (item) => item.language === language,
  );
  if (languageLocales.length !== 0) {
    if (region) {
      const regionLocale = languageLocales.find(
        (item) => item.normalized === `${language}-${region}`,
      );
      if (regionLocale) return regionLocale;
    }
    return languageLocales[0];
  }
}
async function loadLocaleMessages(localeDescriptor: LocaleDescriptor) {
  const localeModule = await localeDescriptor.load();
  if (localeModule.default != null) return localeModule.default;
  const namedDefault = Object.entries(localeModule).find(([exportName]) =>
    exportName.endsWith("Default"),
  )?.[1];
  return namedDefault ?? localeModule;
}

function initLocaleResolverChunk(): void {
  void DEFAULT_LOCALE;
  void localeLoaders;
  void supportedLocales;
}

export {
  isEnglishLocale,
  normalizeLocale,
  getLocaleLanguageDisplayName,
  resolveLocale,
  areEquivalentLocales,
  getSupportedLocales,
  loadLocaleMessages,
  initLocaleResolverChunk,
  DEFAULT_LOCALE,
};
