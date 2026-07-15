// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Local conversation review-panel state and side-effect helpers.
import {
  createComputedAtom,
  threadAtomScope,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  refreshReviewDiff,
  refreshReviewSummary,
} from "../review/review-diff-model";
import {
  isReviewDiffEnabledAtom,
  refreshReviewFilesForPaths,
  refreshReviewIndexInfo,
  reviewDiffTargetParsedAtom,
  reviewSummaryAtom,
} from "../review/review-diff-store";
import {
  initParseDiffRuntimeChunk,
  shouldSkipFullDiffParse,
} from "../utils/parse-diff";

type ReviewStore = {
  get(atom: unknown, ...args: unknown[]): any;
  set(atom: unknown, ...args: unknown[]): void;
  watch(callback: (store: ReviewStore) => void): () => void;
  query: { snapshot(atom: unknown, params: unknown): any };
  queryClient: unknown;
};

type ComputedAtomContext = {
  get<TValue = any>(atom: unknown, arg?: unknown): TValue;
};

type DiffMetrics = {
  fileCount: number;
  totalChangedBytes: number;
  totalChangedLines: number;
};

type DiffLike = {
  additions?: number | null;
  changedBytes?: number | null;
  deletions?: number | null;
  diff?: DiffLike | null;
  summary?: DiffLike | null;
};

const CHECK_GIT_INDEX_FOR_CHANGES_EVENT = "codex-check-git-index-for-changes";

export const pendingReviewPanelTargetSignal = createComputedAtom(
  threadAtomScope,
  () => false,
);

export const shouldExpandReviewPanelSignal = createComputedAtom(
  threadAtomScope,
  ({ get }: ComputedAtomContext) =>
    shouldSkipFullDiffParse(resolveReviewDiffMetrics(get)),
);

export function focusPendingReviewPanelTarget(_store: ReviewStore): void {}

export async function resetReviewPanelEmptyState(
  store: ReviewStore,
): Promise<void> {
  await refreshReviewDiff(store);
}

export async function syncReviewPanelForRestoredSource(
  store: ReviewStore,
): Promise<void> {
  await refreshReviewSummary(store, { queueIfRefreshing: true });
}

export async function revealChangedFilesInReviewPanel(
  store: ReviewStore,
  paths: string[],
): Promise<void> {
  await refreshReviewFilesForPaths(store, paths);
}

export async function openInitialReviewPanelTarget(
  store: ReviewStore,
): Promise<void> {
  await refreshReviewIndexInfo(store);
}

export function scheduleReviewRestore(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = () => {
    callback();
  };
  window.addEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
  return () =>
    window.removeEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
}

export function initPullRequestThreadActionsChunk(): void {
  initParseDiffRuntimeChunk();
}

function resolveReviewDiffMetrics(
  get: ComputedAtomContext["get"],
): DiffMetrics {
  if (get<boolean>(isReviewDiffEnabledAtom)) {
    const summary = get<{ data?: { type?: string; files?: DiffLike[] } }>(
      reviewSummaryAtom,
    ).data;
    return summary?.type === "success" && Array.isArray(summary.files)
      ? diffMetricsForFiles(summary.files)
      : emptyDiffMetrics();
  }

  const parsed = get<{
    diff?: unknown;
    diffBytes?: number | null;
  }>(reviewDiffTargetParsedAtom);
  return diffMetricsForFiles(asDiffArray(parsed.diff), parsed.diffBytes);
}

function diffMetricsForFiles(
  files: DiffLike[],
  fallbackBytes: number | null = null,
): DiffMetrics {
  return {
    fileCount: files.length,
    totalChangedBytes:
      fallbackBytes ??
      files.reduce(
        (total, file) => total + numberValue(file.diff?.changedBytes),
        0,
      ),
    totalChangedLines: files.reduce(
      (total, file) =>
        total +
        numberValue(
          file.summary?.additions ?? file.diff?.additions ?? file.additions,
        ) +
        numberValue(
          file.summary?.deletions ?? file.diff?.deletions ?? file.deletions,
        ),
      0,
    ),
  };
}

function asDiffArray(diff: unknown): DiffLike[] {
  return Array.isArray(diff) ? diff : [];
}

function emptyDiffMetrics(): DiffMetrics {
  return { fileCount: 0, totalChangedBytes: 0, totalChangedLines: 0 };
}

function numberValue(value: number | null | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}
