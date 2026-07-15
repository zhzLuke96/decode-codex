// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Right-side "changed files" panel for review: a filter search box above the
// review file tree, with per-file comment-count badges and selection wiring that
// scrolls the chosen file's diff into view.
import { countCommentsByFilePath } from "./review-comment-utils";
import { setActiveReviewFilePath } from "./review-file-navigation";
import { ReviewFileTree } from "./review-file-tree";
import { usePullRequestComments } from "./use-pull-request-comments";
import {
  useStore,
  useAtomValue,
  routeAtom,
  isReviewRefreshingAtom,
  reviewSourceAtom,
  activeReviewSearchMatchAtom,
  activeReviewFilePathAtom,
  reviewFileFilterQueryAtom,
  reviewChangedFileEntriesAtom,
  workspaceRootAtom,
  reviewHostAtom,
  getThreadId,
  createEphemeralConversationId,
  setReviewFileFilterQuery,
  ReviewFileSearchInput,
} from "../boundaries/onboarding-commons-externals.facade";

interface ReviewFileEntry {
  path: string;
}

export interface ChangedFilesPanelProps {
  reserveBottomPadding?: boolean;
}

export function ChangedFilesPanel({
  reserveBottomPadding,
}: ChangedFilesPanelProps) {
  const scope = useStore(routeAtom);
  const isRefreshing = useAtomValue(isReviewRefreshingAtom);
  const reviewSource = useAtomValue(reviewSourceAtom);
  const activeSearchMatch = useAtomValue(activeReviewSearchMatchAtom);
  const selectedFilePath = useAtomValue(activeReviewFilePathAtom);
  const filterQuery = useAtomValue(reviewFileFilterQueryAtom);
  const entries: ReviewFileEntry[] = useAtomValue(reviewChangedFileEntriesAtom);
  const workspaceRoot = useAtomValue(workspaceRootAtom);
  const reviewHost = useAtomValue(reviewHostAtom);

  const threadId = getThreadId(scope.value);
  const localConversationId =
    scope.value.routeKind === "local-thread"
      ? scope.value.conversationId
      : null;
  const conversationId =
    threadId ?? createEphemeralConversationId({ entrypoint: "home" });

  const enablePullRequestComments = reviewSource !== "last-turn";
  const { commentProps } = usePullRequestComments({
    conversationId,
    enablePullRequestComments,
    localConversationId,
  });

  let commentCountByPath: Map<string, number> | undefined;
  {
    const readonlyComments = commentProps.readonlyComments as
      | unknown[]
      | undefined
      | null;
    const modelComments = commentProps.modelComments as unknown[];
    if (
      (readonlyComments == null || readonlyComments.length === 0) &&
      modelComments.length === 0
    ) {
      commentCountByPath = undefined;
    } else {
      commentCountByPath = countCommentsByFilePath({
        comments: [...modelComments, ...(readonlyComments ?? [])],
        filePaths: entries.map(entryPath),
        workspaceRoot,
      });
    }
  }

  const activePath =
    (activeSearchMatch?.location.domain === "diff"
      ? activeSearchMatch.location.path
      : undefined) ??
    selectedFilePath ??
    entries[0]?.path;

  const onSelectPath = (path: string) => {
    if (entries.some((entry) => entry.path === path)) {
      requestAnimationFrame(() => {
        setActiveReviewFilePath(scope, path);
        if (!isRefreshing) {
          findReviewPathElement(path)?.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }
      });
    }
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="shrink-0 px-2 pt-2 pb-px">
        <ReviewFileSearchInput
          inputId="review-changed-files-search"
          onQueryChange={(query: string) =>
            setReviewFileFilterQuery(scope, query)
          }
          searchQuery={filterQuery}
        />
      </div>
      <div className="min-h-0 flex-1">
        <ReviewFileTree
          activePath={activePath}
          allowSelectingActivePath={true}
          commentCountByPath={commentCountByPath}
          cwd={workspaceRoot}
          hostId={reviewHost.id}
          onSelectPath={onSelectPath}
          entries={entries}
          reserveBottomPadding={reserveBottomPadding}
        />
      </div>
    </div>
  );
}

function entryPath(entry: ReviewFileEntry): string {
  return entry.path;
}

function findReviewPathElement(path: string): Element | null {
  return document.querySelector(
    `[data-review-path="${escapeCssSelector(path)}"]`,
  );
}

function escapeCssSelector(value: string): string {
  return typeof CSS !== "undefined" && CSS.escape != null
    ? CSS.escape(value)
    : value.replace(/"/g, '\\"');
}
