// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Utilities for review comments: extracting plain text from a comment's content
// blocks, and tallying comments per workspace file path.

const WINDOWS_DRIVE_RE = /^[A-Za-z]:[\\/]/;
const UNC_RE = /^\\\\[^\\]+\\[^\\]+/;
const POSIX_UNC_RE = /^\/\/[^/]+\/[^/]+/;

interface CommentContentBlock {
  content_type: string;
  text?: string;
}

interface CommentWithContent {
  content: CommentContentBlock[];
}

export function getCommentText(comment: CommentWithContent): string {
  return comment.content
    .flatMap((block) =>
      block.content_type === "text" ? [block.text ?? ""] : [],
    )
    .join("\n\n")
    .trim();
}

interface CommentWithPosition {
  position: {
    line?: number;
    path: string;
    side?: string;
    start_line?: number | null;
    start_side?: string | null;
  };
}

export interface InlineCommentPosition {
  line?: number;
  path?: string;
  side?: string;
  startLine?: number;
  startSide?: string;
}

interface PullRequestReviewComment
  extends CommentWithContent,
    CommentWithPosition {
  body?: string;
  inlineComment?: InlineCommentPosition | null;
  number?: number | string;
  replyToReviewThreadId?: string | null;
}

export function initReviewCommentUtilsChunk(): void {}

export interface CountCommentsByFilePathParams {
  comments: CommentWithPosition[];
  filePaths: string[];
  workspaceRoot?: string | null;
}

export function getInlineCommentPosition(
  comment: PullRequestReviewComment,
): InlineCommentPosition {
  return {
    line: comment.position.line,
    path: comment.position.path,
    side: comment.position.side,
    startLine: comment.position.start_line ?? undefined,
    startSide: comment.position.start_side ?? undefined,
  };
}

export function getPullRequestReviewCommentKey(
  comment: PullRequestReviewComment,
): string {
  const inlineComment = comment.inlineComment;
  return [
    comment.number ?? "",
    comment.body ?? "",
    comment.replyToReviewThreadId ?? "",
    inlineComment?.path ?? "",
    inlineComment?.side ?? "",
    inlineComment?.startSide ?? "",
    inlineComment?.startLine ?? "",
    inlineComment?.line ?? "",
  ].join("|");
}

export function mergeUpdatedReviewComments({
  currentComments,
  nextComments,
}: {
  currentComments: PullRequestReviewComment[];
  nextComments: PullRequestReviewComment[];
}): PullRequestReviewComment[] {
  const currentKeys = new Set(currentComments.map(getReviewCommentStableKey));
  const placeholderReplacements = nextComments.filter((nextComment) =>
    currentComments.some((currentComment) =>
      matchesPlaceholderReviewReply(currentComment, nextComment),
    ),
  );
  const newPopulatedComments = nextComments.filter(
    (comment) =>
      getCommentText(comment).length > 0 &&
      !currentKeys.has(getReviewCommentStableKey(comment)),
  );

  return uniqueByReviewCommentKey([
    ...placeholderReplacements,
    ...newPopulatedComments,
  ]);
}

export function countCommentsByFilePath({
  comments,
  filePaths,
  workspaceRoot,
}: CountCommentsByFilePathParams): Map<string, number> {
  const counts = new Map<string, number>();
  for (const comment of comments) {
    const matchedPath = filePaths.find((filePath) =>
      pathsMatch(comment.position.path, filePath, workspaceRoot ?? undefined),
    );
    if (matchedPath != null) {
      counts.set(matchedPath, (counts.get(matchedPath) ?? 0) + 1);
    }
  }
  return counts;
}

function pathsMatch(
  commentPath: string,
  filePath: string,
  workspaceRoot: string | undefined,
): boolean {
  const normalizedCommentPath = normalizeBundlePath(commentPath);
  const normalizedFilePath = normalizeBundlePath(filePath);
  if (normalizedCommentPath === normalizedFilePath) return true;

  const filePathRelativeToWorkspace = normalizeRelativePath(
    filePath,
    workspaceRoot,
  );
  if (
    filePathRelativeToWorkspace != null &&
    normalizedCommentPath === filePathRelativeToWorkspace
  ) {
    return true;
  }

  const commentPathRelativeToWorkspace = normalizeRelativePath(
    commentPath,
    workspaceRoot,
  );
  if (
    commentPathRelativeToWorkspace != null &&
    commentPathRelativeToWorkspace === normalizedFilePath
  ) {
    return true;
  }

  return (
    workspaceRoot == null &&
    (normalizedFilePath.endsWith(`/${normalizedCommentPath}`) ||
      normalizedCommentPath.endsWith(`/${normalizedFilePath}`))
  );
}

function getReviewCommentStableKey(comment: PullRequestReviewComment): string {
  return [
    comment.position.path,
    comment.position.line ?? "",
    comment.position.start_line ?? "",
    comment.position.side ?? "",
    comment.position.start_side ?? "",
    getCommentText(comment),
  ].join("|");
}

function matchesPlaceholderReviewReply(
  currentComment: PullRequestReviewComment,
  nextComment: PullRequestReviewComment,
): boolean {
  return (
    currentComment.replyToReviewThreadId != null &&
    currentComment.replyToReviewThreadId ===
      nextComment.replyToReviewThreadId &&
    getCommentText(currentComment).length === 0 &&
    getCommentText(nextComment).length > 0 &&
    currentComment.position.path === nextComment.position.path &&
    currentComment.position.side === nextComment.position.side &&
    currentComment.position.line === nextComment.position.line
  );
}

function uniqueByReviewCommentKey(
  comments: PullRequestReviewComment[],
): PullRequestReviewComment[] {
  const seen = new Set<string>();
  const uniqueComments: PullRequestReviewComment[] = [];
  for (const comment of comments) {
    const key = getReviewCommentStableKey(comment);
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueComments.push(comment);
  }
  return uniqueComments;
}

function normalizeRelativePath(
  path: string,
  workspaceRoot: string | undefined,
): string | null {
  return path
    ? normalizeBundlePath(stripWorkspaceRoot(path, workspaceRoot))
    : null;
}

function normalizeBundlePath(path: string): string {
  return stripWindowsNamespace(path).replace(/\\/g, "/");
}

function stripWorkspaceRoot(path: string, workspaceRoot: string | undefined) {
  if (!workspaceRoot) return path;

  const rootWithForwardSlashes = workspaceRoot.replace(/\\/g, "/");
  const pathWithForwardSlashes = path.replace(/\\/g, "/");
  const rootWithoutTrailingSlash = rootWithForwardSlashes.endsWith("/")
    ? rootWithForwardSlashes.slice(0, -1)
    : rootWithForwardSlashes;
  const shouldCompareCaseInsensitive =
    isWindowsDrivePath(rootWithForwardSlashes) ||
    isUncPath(rootWithForwardSlashes);
  const rootForCompare = shouldCompareCaseInsensitive
    ? rootWithoutTrailingSlash.toLowerCase()
    : rootWithoutTrailingSlash;
  const pathForCompare = shouldCompareCaseInsensitive
    ? pathWithForwardSlashes.toLowerCase()
    : pathWithForwardSlashes;

  if (pathForCompare.startsWith(`${rootForCompare}/`)) {
    return pathWithForwardSlashes.slice(rootWithoutTrailingSlash.length + 1);
  }

  const workspaceFolderPrefix = `${rootForCompare.split("/").at(-1) ?? rootForCompare}/`;
  const folderIndex = pathForCompare.indexOf(workspaceFolderPrefix);
  return folderIndex !== -1 &&
    (folderIndex === 0 || pathForCompare[folderIndex - 1] === "/")
    ? pathWithForwardSlashes.slice(folderIndex + workspaceFolderPrefix.length)
    : pathWithForwardSlashes;
}

function stripWindowsNamespace(path: string): string {
  const uncNamespaceMatch = path.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (uncNamespaceMatch != null) return `\\\\${uncNamespaceMatch[1]}`;

  return path.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/)?.[1] ?? path;
}

function isWindowsDrivePath(path: string): boolean {
  return WINDOWS_DRIVE_RE.test(path);
}

function isUncPath(path: string): boolean {
  return UNC_RE.test(path) || POSIX_UNC_RE.test(path);
}
