// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Dynamic settings search target construction.
import * as React from "react";
import { settingsSearchMessagesBySection } from "./search-messages";
import {
  defaultAppLocale,
  formatLocaleDisplayName,
  getAvailableLocaleOptions,
  isExperimentalFeatureVisible,
  settingsExperimentalFeaturesQueryKey,
  settingsSectionMetadata,
  useAppScopeQuery,
  useHostAppInfoQuery,
  useIntl,
} from "./runtime";
import type {
  ExperimentalFeature,
  LocaleSearchOption,
  SettingsIntlShape,
  SettingsSearchMessageDescriptor,
  SettingsSearchTarget,
} from "./types";

export type UseSettingsSearchTargetsOptions = {
  selectedHostId: string | null;
};

const unsupportedSystemBackdropAppearanceMessageIds = new Set([
  "settings.general.appearance.chromeTheme.translucentSidebar",
  "settings.general.appearance.chromeTheme.translucentSidebar.short",
]);

export const baseSettingsSearchTargets = settingsSectionMetadata.ids.map(
  (sectionSlug) => ({
    messages: settingsSearchMessagesBySection[sectionSlug] ?? [],
    sectionSlug,
  }),
) satisfies readonly SettingsSearchTarget[];

export function useSettingsSearchTargets({
  selectedHostId,
}: UseSettingsSearchTargetsOptions): SettingsSearchTarget[] {
  const intl = useIntl() as SettingsIntlShape;
  const { data: hostAppInfo } = useHostAppInfoQuery();
  const supportsSystemBackdrop =
    hostAppInfo?.isSystemBackdropSupported !== false;
  const { data: experimentalFeatures = [] } = useAppScopeQuery<
    ExperimentalFeature[]
  >(settingsExperimentalFeaturesQueryKey, selectedHostId);

  const experimentalFeatureTerms = React.useMemo(
    () =>
      experimentalFeatures
        .filter(isExperimentalFeatureVisible)
        .flatMap(getExperimentalFeatureSearchTerms),
    [experimentalFeatures],
  );

  const localeTerms = React.useMemo(() => getLocaleSearchTerms(intl), [intl]);

  return React.useMemo(
    () =>
      baseSettingsSearchTargets.map((target) => {
        if (target.sectionSlug === "appearance" && !supportsSystemBackdrop) {
          return {
            ...target,
            messages: target.messages.filter(
              isSupportedAppearanceSearchMessage,
            ),
          };
        }

        if (target.sectionSlug === "agent") {
          return {
            ...target,
            terms: experimentalFeatureTerms,
          };
        }

        if (target.sectionSlug === "general-settings") {
          return {
            ...target,
            terms: localeTerms,
          };
        }

        return target;
      }),
    [experimentalFeatureTerms, localeTerms, supportsSystemBackdrop],
  );
}

export function isSupportedAppearanceSearchMessage(
  message: SettingsSearchMessageDescriptor,
): boolean {
  return !unsupportedSystemBackdropAppearanceMessageIds.has(message.id);
}

export function getLocaleSearchTerms(intl: SettingsIntlShape): string[] {
  return [
    {
      locale: defaultAppLocale,
      language: "en",
    },
    ...getAvailableLocaleOptions().map(localeToSearchLanguageTerm),
  ].flatMap(({ language, locale }) => [
    formatLocaleDisplayName(locale, locale),
    formatLocaleDisplayName(language, intl.locale),
  ]);
}

function localeToSearchLanguageTerm(
  localeOption: LocaleSearchOption,
): LocaleSearchOption {
  return {
    locale: localeOption.locale,
    language: localeOption.locale,
  };
}

export function getExperimentalFeatureSearchTerms(
  feature: ExperimentalFeature,
): string[] {
  return [
    feature.displayName ?? feature.name,
    ...(feature.description == null ? [] : [feature.description]),
  ];
}
