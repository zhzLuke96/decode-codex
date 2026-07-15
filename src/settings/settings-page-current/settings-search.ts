// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search scoring and localization helpers for settings navigation targets.
import type { IntlShape } from "../../vendor/react-intl";
import { scoreQueryMatch } from "../../utils/score-query-match";
import { getSettingsNavigationMessageDescriptor } from "./runtime";
import type {
  SettingsIntlShape,
  SettingsSearchMessageDescriptor,
  SettingsSearchResult,
  SettingsSearchTarget,
  SettingsSearchTargetDescriptor,
  SettingsSectionSlug,
} from "./types";

const searchTargetDescriptorCache = new WeakMap<
  IntlShape,
  WeakMap<SettingsSearchTarget, SettingsSearchTargetDescriptor>
>();

export type SearchSettingsNavigationTargetsOptions = {
  intl: IntlShape;
  query: string;
  targets: readonly SettingsSearchTarget[];
  visibleSectionSlugs: readonly SettingsSectionSlug[];
};

export function searchSettingsNavigationTargets({
  intl,
  query,
  targets,
  visibleSectionSlugs,
}: SearchSettingsNavigationTargetsOptions): SettingsSearchResult[] {
  if (query.trim().length === 0) return [];

  const searchTerms = query.trim().split(/\s+/).filter(Boolean);
  const visibleSectionIndexes = buildVisibleSectionIndex(visibleSectionSlugs);

  return targets
    .flatMap((target) => {
      if (!visibleSectionIndexes.has(target.sectionSlug)) return [];
      const result = matchSettingsSearchTarget(
        getSettingsSearchTargetDescriptor(intl, target),
        query,
        searchTerms,
      );
      return result == null ? [] : [result];
    })
    .sort((leftResult, rightResult) =>
      compareSearchResults(leftResult, rightResult, visibleSectionIndexes),
    );
}

export function getSettingsSearchTargetDescriptor(
  intl: IntlShape,
  target: SettingsSearchTarget,
): SettingsSearchTargetDescriptor {
  let descriptorsByTarget = searchTargetDescriptorCache.get(intl);
  if (descriptorsByTarget == null) {
    descriptorsByTarget = new WeakMap();
    searchTargetDescriptorCache.set(intl, descriptorsByTarget);
  }

  const cachedDescriptor = descriptorsByTarget.get(target);
  if (cachedDescriptor != null) return cachedDescriptor;

  const descriptor: SettingsSearchTargetDescriptor = {
    messageTexts: [
      ...target.messages.map((message) =>
        getLocalizedMessageText(intl, message),
      ),
      ...(target.terms ?? []),
    ],
    panelLabel: intl.formatMessage(
      getSettingsNavigationMessageDescriptor(target.sectionSlug),
    ),
    sectionSlug: target.sectionSlug,
  };

  descriptorsByTarget.set(target, descriptor);
  return descriptor;
}

function buildVisibleSectionIndex(
  visibleSectionSlugs: readonly SettingsSectionSlug[],
): Map<SettingsSectionSlug, number> {
  const visibleSectionIndexes = new Map<SettingsSectionSlug, number>();
  for (const [index, sectionSlug] of visibleSectionSlugs.entries()) {
    if (!visibleSectionIndexes.has(sectionSlug)) {
      visibleSectionIndexes.set(sectionSlug, index);
    }
  }
  return visibleSectionIndexes;
}

function compareSearchResults(
  leftResult: SettingsSearchResult,
  rightResult: SettingsSearchResult,
  visibleSectionIndexes: ReadonlyMap<SettingsSectionSlug, number>,
): number {
  if (leftResult.matchPriority !== rightResult.matchPriority) {
    return leftResult.matchPriority - rightResult.matchPriority;
  }

  if (leftResult.score !== rightResult.score) {
    return rightResult.score - leftResult.score;
  }

  return (
    (visibleSectionIndexes.get(leftResult.sectionSlug) ?? 0) -
    (visibleSectionIndexes.get(rightResult.sectionSlug) ?? 0)
  );
}

function matchSettingsSearchTarget(
  targetDescriptor: SettingsSearchTargetDescriptor,
  query: string,
  searchTerms: readonly string[],
): SettingsSearchResult | null {
  const { messageTexts, panelLabel, sectionSlug } = targetDescriptor;
  const panelLabelScore = scoreQueryMatch(panelLabel, query);

  if (panelLabelScore > 0) {
    return {
      label: panelLabel,
      matchPriority: 0,
      panelLabel,
      score: panelLabelScore,
      sectionSlug,
    };
  }

  const messageScore = scoreSearchTermsAcrossTexts(
    [panelLabel, ...messageTexts],
    searchTerms,
  );
  if (messageScore === 0) return null;

  const bestMessageMatch = findBestMessageMatch(
    messageTexts,
    query,
    searchTerms,
  );

  return {
    label:
      bestMessageMatch == null || /[<{]/u.test(bestMessageMatch.text)
        ? panelLabel
        : bestMessageMatch.text,
    matchPriority: 1,
    panelLabel,
    score: messageScore,
    sectionSlug,
  };
}

function findBestMessageMatch(
  messageTexts: readonly string[],
  query: string,
  searchTerms: readonly string[],
): { score: number; text: string } | null {
  let bestMessageMatch: { score: number; text: string } | null = null;

  for (const messageText of messageTexts) {
    const score = Math.max(
      scoreQueryMatch(messageText, query),
      ...searchTerms.map((term) => scoreQueryMatch(messageText, term)),
    );

    if (
      score > 0 &&
      (bestMessageMatch == null || score > bestMessageMatch.score)
    ) {
      bestMessageMatch = {
        score,
        text: messageText,
      };
    }
  }

  return bestMessageMatch;
}

function scoreSearchTermsAcrossTexts(
  candidateTexts: readonly string[],
  searchTerms: readonly string[],
): number {
  const perTermScores = searchTerms.map((term) =>
    Math.max(
      0,
      ...candidateTexts.map((candidateText) =>
        scoreQueryMatch(candidateText, term),
      ),
    ),
  );

  return perTermScores.length === 0 ||
    perTermScores.some((score) => score === 0)
    ? 0
    : perTermScores.reduce((accumulator, current) => accumulator + current, 0);
}

function getLocalizedMessageText(
  intl: IntlShape,
  message: SettingsSearchMessageDescriptor,
): string {
  const translatedMessage = (intl as Partial<SettingsIntlShape>).messages?.[
    message.id
  ];
  return typeof translatedMessage === "string"
    ? translatedMessage
    : message.defaultMessage;
}
