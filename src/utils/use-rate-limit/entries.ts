// Restored from ref/webview/assets/use-rate-limit-DfBgdYGx.js
import {
  _rateLimitStatusC as hasServerRateLimitReached,
  rateLimitStatusL as hasRateLimitReached,
  rateLimitStatusX as selectRateLimitAlert,
} from "../rate-limit-status";
import {
  buildRateLimitSnapshot,
  getRateLimitName,
  isCoreLimitName,
  normalizeLimitName,
} from "./normalization";
import type {
  LimitSelection,
  RateLimitAlert,
  RateLimitBucket,
  RateLimitEntry,
  RateLimitResponse,
} from "./types";

function buildRateLimitEntries(status: RateLimitResponse | null | undefined) {
  if (status == null) {
    return [];
  }

  const entries: Array<RateLimitEntry> = [];
  const primaryLimitName = getRateLimitName(status);

  entries.push({
    limitName: null,
    snapshot: buildRateLimitSnapshot(
      status.rate_limit,
      status.credits,
      status.plan_type,
      primaryLimitName,
    ),
    blocked: hasRateLimitReached(status),
  });

  const additionalLimits = status.additional_rate_limits;
  if (Array.isArray(additionalLimits)) {
    for (const additionalLimit of additionalLimits) {
      if (!additionalLimit?.rate_limit) {
        continue;
      }

      const limitName = additionalLimit.limit_name?.trim() ?? null;
      if (limitName == null || limitName.length === 0) {
        continue;
      }

      entries.push({
        limitName,
        snapshot: buildRateLimitSnapshot(
          additionalLimit.rate_limit,
          null,
          status.plan_type,
          limitName,
        ),
        blocked: hasServerRateLimitReached(additionalLimit),
      });
    }
  }

  return entries;
}

function findLimitEntryByName(
  entries: Array<RateLimitEntry>,
  limitName: string | null | undefined,
) {
  const normalizedName = normalizeLimitName(limitName);
  return normalizedName == null
    ? null
    : (entries.find(
        (entry) => normalizeLimitName(entry.limitName) === normalizedName,
      ) ?? null);
}

function filterRateLimitEntries(
  entries: Array<RateLimitEntry>,
  { activeLimitName, selectedModel }: LimitSelection = {},
) {
  if (entries.length === 0) {
    return entries;
  }

  const selectedModelName = normalizeLimitName(selectedModel);
  const activeName = normalizeLimitName(activeLimitName);
  const selectedLimitName =
    selectedModelName ??
    (activeName && !isCoreLimitName(activeName) ? activeName : null);

  return selectedLimitName
    ? entries.filter((entry) =>
        entry.limitName == null
          ? true
          : normalizeLimitName(entry.limitName) === selectedLimitName,
      )
    : entries.filter((entry) => entry.limitName == null);
}

function selectRateLimitEntry(
  entries: Array<RateLimitEntry>,
  { activeLimitName, selectedModel }: LimitSelection = {},
) {
  if (entries.length === 0) {
    return null;
  }

  const coreEntry = entries.find((entry) => entry.limitName == null) ?? null;
  const selectedModelEntry = findLimitEntryByName(entries, selectedModel);
  const activeLimitEntry = findLimitEntryByName(entries, activeLimitName);
  const coreEntryIsNotBlocked = coreEntry?.blocked !== true;

  return coreEntryIsNotBlocked && selectedModelEntry?.blocked === true
    ? selectedModelEntry
    : coreEntryIsNotBlocked &&
        activeLimitEntry?.blocked === true &&
        !isCoreLimitName(activeLimitEntry.limitName)
      ? activeLimitEntry
      : (coreEntry ??
        selectedModelEntry ??
        activeLimitEntry ??
        entries[0] ??
        null);
}

function selectRateLimitAlertForEntries(
  entries: Array<RateLimitEntry>,
  selection: LimitSelection = {},
): RateLimitAlert | null {
  const selectedEntry = selectRateLimitEntry(entries, selection);
  return selectedEntry == null
    ? null
    : selectRateLimitAlert(selectedEntry.snapshot);
}

function getHighestUsageBucket(entry: RateLimitEntry | null | undefined) {
  if (entry == null) {
    return null;
  }

  const buckets = [entry.snapshot.primary, entry.snapshot.secondary].filter(
    (bucket): bucket is RateLimitBucket => bucket != null,
  );

  return buckets.length === 0
    ? null
    : buckets.reduce((selected, bucket) =>
        bucket.usedPercent > selected.usedPercent
          ? bucket
          : bucket.usedPercent < selected.usedPercent
            ? selected
            : (bucket.resetsAt ?? -Infinity) > (selected.resetsAt ?? -Infinity)
              ? bucket
              : selected,
      );
}

function getSelectedRateLimitResetAt(entry: RateLimitEntry | null | undefined) {
  return getHighestUsageBucket(entry)?.resetsAt ?? null;
}

function hasSelectedModelRateLimit(
  status: RateLimitResponse | null | undefined,
  selection: LimitSelection = {},
) {
  if (status == null || hasRateLimitReached(status)) {
    return false;
  }

  const activeLimitName = selection.activeLimitName ?? getRateLimitName(status);
  const additionalLimits = status.additional_rate_limits;
  if (!Array.isArray(additionalLimits)) {
    return activeLimitName != null && !isCoreLimitName(activeLimitName);
  }

  const selectedModelName = normalizeLimitName(selection.selectedModel);
  return selectedModelName != null &&
    additionalLimits.some((additionalLimit) =>
      hasServerRateLimitReached(additionalLimit ?? {})
        ? normalizeLimitName(additionalLimit?.limit_name) === selectedModelName
        : false,
    )
    ? true
    : activeLimitName != null && !isCoreLimitName(activeLimitName);
}

function hasAdditionalLimitForModel(
  status: RateLimitResponse | null | undefined,
  limitName: string | null | undefined,
) {
  if (status == null) {
    return false;
  }

  const normalizedLimitName = normalizeLimitName(limitName);
  if (normalizedLimitName == null) {
    return false;
  }

  const additionalLimits = status.additional_rate_limits;
  return Array.isArray(additionalLimits)
    ? additionalLimits.some((additionalLimit) =>
        hasServerRateLimitReached(additionalLimit ?? {})
          ? normalizeLimitName(additionalLimit?.limit_name) ===
            normalizedLimitName
          : false,
      )
    : false;
}

export {
  buildRateLimitEntries,
  filterRateLimitEntries,
  findLimitEntryByName,
  getSelectedRateLimitResetAt,
  hasAdditionalLimitForModel,
  hasSelectedModelRateLimit,
  selectRateLimitAlertForEntries,
  selectRateLimitEntry,
};
