// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Review UI state atoms shared by the diff header, search controller, and file menu.
import {
  appAtomScope,
  createComputedAtom,
  createScopedAtom,
} from "../runtime/onboarding-scope-runtime";
import { threadAtomScope } from "../runtime/onboarding-common-runtime";
import { persistedAtom } from "../utils/persisted-atom";
import { reviewFileEntriesAtom } from "./review-file-entries";

export interface ReviewFileEntryLike {
  displayPath?: string;
  gitPath?: string;
  path: string;
  summary?: { changeKind?: string | null } | null;
}

interface GetterContext {
  get<TValue = unknown>(atom: unknown): TValue;
}

interface ReviewStoreLike {
  get<TValue = unknown>(atom: unknown): TValue;
  set(atom: unknown, value: unknown): void;
}

export interface ReviewFindState {
  active: boolean;
  query: string;
}

export const gitBlameEnabledAtom = persistedAtom("git-blame-enabled", false);
export const richPreviewEnabledAtom = persistedAtom("rich-preview-enabled", true);
export const wordWrapEnabledAtom = persistedAtom("word-wrap-enabled", false);

export const reviewDiffModeAtom = persistedAtom<"unified" | "split">(
  "review-diff-mode",
  "unified",
);
export const reviewDiffWrapAtom = persistedAtom("review-diff-wrap", false);
export const reviewRichPreviewEnabledAtom = persistedAtom(
  "review-rich-preview-enabled",
  true,
);
export const reviewWordDiffsEnabledAtom = persistedAtom(
  "review-word-diffs-enabled",
  false,
);
export const reviewFilesVisibleAtom = persistedAtom(
  "review-files-visible",
  true,
);

export const reviewSelectedPathAtom = createScopedAtom(threadAtomScope, null);
export const reviewSearchControllerAtom = createScopedAtom(
  threadAtomScope,
  null,
);
export const reviewFindStateAtom = createScopedAtom<ReviewFindState>(
  threadAtomScope,
  () => ({ active: false, query: "" }),
);
export const reviewCappedVisibleCountAtom = createScopedAtom(
  threadAtomScope,
  50,
);

function readReviewEntries({ get }: GetterContext): ReviewFileEntryLike[] {
  const entries = get<unknown>(reviewFileEntriesAtom);
  return Array.isArray(entries) ? (entries as ReviewFileEntryLike[]) : [];
}

export const reviewVisibleFileEntriesAtom = createComputedAtom(
  threadAtomScope,
  readReviewEntries,
);

export const reviewSearchableFileEntriesAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: GetterContext) =>
    readReviewEntries({ get }).map((entry) => ({
      displayPath: entry.displayPath ?? entry.path,
      gitPath: entry.gitPath ?? entry.path,
      path: entry.path,
    })),
);

export const reviewHasDiffsAtom = createComputedAtom(
  threadAtomScope,
  (context: GetterContext) => readReviewEntries(context).length > 0,
);

export const reviewFileCountsAtom = createComputedAtom(
  threadAtomScope,
  (context: GetterContext) => {
    const entries = readReviewEntries(context);
    return {
      stagedFileCount: 0,
      totalFileCount: entries.length,
      unstagedFileCount: entries.length,
    };
  },
);

export const reviewFindActiveAtom = createComputedAtom(
  threadAtomScope,
  ({ get }: GetterContext) => get<ReviewFindState>(reviewFindStateAtom).active,
);

export const reviewCappedModeAtom = createComputedAtom(
  threadAtomScope,
  () => false,
);

export const reviewCanRefreshAtom = createComputedAtom(appAtomScope, () => true);
export const reviewBranchDiffAvailableAtom = createComputedAtom(
  threadAtomScope,
  () => false,
);
export const reviewErrorAtom = createComputedAtom(threadAtomScope, () => false);
export const isReviewLoadingAtom = createComputedAtom(
  threadAtomScope,
  () => false,
);

export const reviewExpandedBottomInset = "--review-expanded-bottom-inset";

export const reviewTestIds = {
  reviewFile(path: string) {
    return {
      "data-testid": "review-file",
      "data-review-file-path": path,
    };
  },
  reviewScroll: {
    "data-testid": "review-scroll-container",
  },
};

export function setReviewActivePath(
  store: ReviewStoreLike,
  path: string | null,
): void {
  store.set(reviewSelectedPathAtom, path);
}

export function setReviewFilesVisible(
  store: ReviewStoreLike,
  visible: boolean,
): void {
  store.set(reviewFilesVisibleAtom, visible);
}

export function setRichPreviewEnabled(
  store: ReviewStoreLike,
  enabled: boolean,
): void {
  store.set(richPreviewEnabledAtom, enabled);
}

export function toggleArtifactPreview(
  _store: ReviewStoreLike,
  _path: string,
  _options?: { hostId?: string; tabId?: string },
): boolean {
  return true;
}

export function loadMoreReviewMatches(store: ReviewStoreLike): void {
  const current = store.get<number>(reviewCappedVisibleCountAtom);
  store.set(reviewCappedVisibleCountAtom, current + 50);
}

export function initReviewUiStateRuntime(): void {}
