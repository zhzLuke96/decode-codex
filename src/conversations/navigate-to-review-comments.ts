// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Opens model-authored review comments in the review diff view, resolving each
// comment's file path relative to the workspace root and skipping comments that
// already belong to the open review file set (localConversation domain).
import {
  isAbsolutePath,
  normalizePath,
  joinPath,
  pathsEqualWithinRoot,
  openFileInReview,
  reviewWorkspaceRootAtom,
  reviewHostIdAtom,
  reviewFilePathsAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ReviewCommentPosition {
  path: string;
  line: number;
  start_line?: number | null;
}

export interface ReviewComment {
  position: ReviewCommentPosition;
  [key: string]: unknown;
}

export interface ReviewCommentTarget {
  endLine: number | undefined;
  line: number;
  path: string;
}

interface AtomStore {
  get: <Value>(atom: unknown) => Value;
}

export function resolveReviewCommentPath(
  commentPath: string,
  workspaceRoot: string | undefined | null,
): string {
  return workspaceRoot == null || isAbsolutePath(commentPath)
    ? commentPath
    : joinPath(workspaceRoot, commentPath);
}

export function collectReviewCommentTargets({
  comments,
  reviewFilePaths,
  workspaceRoot,
}: {
  comments: ReviewComment[];
  reviewFilePaths: string[];
  workspaceRoot: string | undefined | null;
}): ReviewCommentTarget[] {
  const seenPaths = new Set<string>();
  const targets: ReviewCommentTarget[] = [];
  for (const comment of comments) {
    const alreadyInReview = reviewFilePaths.some((filePath) =>
      pathsEqualWithinRoot(
        comment.position.path,
        filePath,
        workspaceRoot ?? undefined,
      ),
    );
    if (alreadyInReview) {
      continue;
    }
    const resolvedPath = resolveReviewCommentPath(
      comment.position.path,
      workspaceRoot,
    );
    const dedupeKey = normalizePath(resolvedPath);
    if (!seenPaths.has(dedupeKey)) {
      seenPaths.add(dedupeKey);
      targets.push({
        endLine:
          comment.position.start_line == null
            ? undefined
            : comment.position.line,
        line: comment.position.start_line ?? comment.position.line,
        path: resolvedPath,
      });
    }
  }
  return targets;
}

export function openReviewCommentsInDiff(
  store: AtomStore,
  comments: ReviewComment[],
): void {
  const workspaceRoot = store.get<string | undefined>(reviewWorkspaceRootAtom);
  const hostId = store.get<string | undefined>(reviewHostIdAtom) ?? undefined;
  const reviewFilePaths = store
    .get<{ path: string }[]>(reviewFilePathsAtom)
    .map((entry) => entry.path);
  for (const target of collectReviewCommentTargets({
    comments,
    reviewFilePaths,
    workspaceRoot,
  })) {
    openFileInReview(store, target.path, {
      endLine: target.endLine,
      hostId,
      isPreview: false,
      line: target.line,
      resetTabState: true,
    });
  }
}
