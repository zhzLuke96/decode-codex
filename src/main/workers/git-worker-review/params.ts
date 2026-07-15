// Restored from ref/.vite/build/worker.js
// Parameter validation helpers for Git review worker requests.

type ReviewFileChangeKind =
  | "added"
  | "copied"
  | "deleted"
  | "modified"
  | "renamed"
  | "type-changed"
  | "unmerged"
  | "untracked";

export function requireReviewSourceParam(
  params: Record<string, unknown>,
): "branch" | "commit" | "staged" | "unstaged" {
  const source = params.source;
  if (
    source === "branch" ||
    source === "commit" ||
    source === "staged" ||
    source === "unstaged"
  ) {
    return source;
  }
  throw Error("Git worker parameter 'source' must be a review source");
}

export function requireReviewFilesParam(
  params: Record<string, unknown>,
): Array<{
  changeKind?: ReviewFileChangeKind;
  path: string;
  previousPath?: string | null;
}> {
  const value = params.files;
  if (!Array.isArray(value)) {
    throw Error("Git worker parameter 'files' must be an array");
  }
  return value.map((item) => {
    if (!isRecord(item) || typeof item.path !== "string") {
      throw Error("Git worker review file entries require a path");
    }
    const previousPath = item.previousPath;
    if (previousPath != null && typeof previousPath !== "string") {
      throw Error("Git worker review file previousPath must be a string");
    }
    const changeKind = item.changeKind;
    if (changeKind != null && !isReviewFileChangeKind(changeKind)) {
      throw Error("Git worker review file changeKind is invalid");
    }
    return {
      changeKind,
      path: item.path,
      previousPath,
    };
  });
}

export function requireReviewSectionFilesParam(
  params: Record<string, unknown>,
): Array<{
  changeKind?: ReviewFileChangeKind;
  path: string;
  previousPath?: string | null;
  revision: string;
}> {
  return requireReviewFilesParam(params).map((file, index) => {
    const sourceItem = Array.isArray(params.files) ? params.files[index] : null;
    if (!isRecord(sourceItem) || typeof sourceItem.revision !== "string") {
      throw Error("Git worker review file entries require a revision");
    }
    return { ...file, revision: sourceItem.revision };
  });
}

export function requireApplyReviewSectionActionParam(
  params: Record<string, unknown>,
): "revert" | "stage" | "unstage" {
  const action = params.action;
  if (action === "revert" || action === "stage" || action === "unstage") {
    return action;
  }
  throw Error("Git worker parameter 'action' must be a review section action");
}

function isReviewFileChangeKind(value: unknown): value is ReviewFileChangeKind {
  return (
    value === "added" ||
    value === "copied" ||
    value === "deleted" ||
    value === "modified" ||
    value === "renamed" ||
    value === "type-changed" ||
    value === "unmerged" ||
    value === "untracked"
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
