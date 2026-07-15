// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight file tree renderer used by review/file-source panels.
import * as React from "react";
import { classNames } from "../utils/class-names";
import { useWorkspaceFileSearch } from "../utils/use-workspace-file-search";

type FileTreeEntry = {
  displayPath?: string;
  kind?: string;
  path: string;
};

type FileTreeProps = {
  cwd?: string | null;
  onClick?: (event: { nativeEvent: Event }) => void;
  onSelectionChange?: (selection: string[]) => void;
  paths?: Array<FileTreeEntry | string>;
  selectedPath?: string;
};

type WorkspaceFileSourceTreeProps = {
  activeFilePath?: string | null;
  autoFocusSearch?: boolean;
  hostId: string;
  includeHidden?: boolean;
  onSelectFile: (path: string) => void;
  root: string;
};

export const reviewBottomPadding = 72;

export function flattenReviewFileEntries(
  entries: Array<FileTreeEntry | string>,
): FileTreeEntry[] {
  return entries.map((entry) => {
    if (typeof entry === "string") {
      return {
        displayPath: entry,
        kind: "file",
        path: entry,
      };
    }
    return {
      ...entry,
      displayPath: entry.displayPath ?? entry.path,
      kind: entry.kind ?? "file",
    };
  });
}

export function resolveTreeRowEventTarget(event: Event): string | null {
  const target = event.target;
  if (!(target instanceof Element)) return null;
  return (
    target.closest<HTMLElement>("[data-file-tree-path]")?.dataset
      .fileTreePath ?? null
  );
}

export function FileTree({
  onClick,
  onSelectionChange,
  paths = [],
  selectedPath,
}: FileTreeProps): React.ReactElement {
  const entries = flattenReviewFileEntries(paths);
  return (
    <div className="flex h-full min-h-0 flex-col overflow-auto py-1" role="tree">
      {entries.map((entry) => {
        const displayPath = entry.displayPath ?? entry.path;
        const isSelected = displayPath === selectedPath;
        return (
          <button
            key={displayPath}
            aria-selected={isSelected}
            className={classNames(
              "min-h-7 w-full rounded px-2 py-1 text-left text-sm",
              "hover:bg-token-main-surface-secondary focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border",
              isSelected
                ? "bg-token-main-surface-secondary text-token-foreground"
                : "text-token-text-secondary",
            )}
            data-file-tree-path={displayPath}
            data-item-type={entry.kind ?? "file"}
            role="treeitem"
            type="button"
            onClick={(event) => {
              onSelectionChange?.([displayPath]);
              onClick?.({ nativeEvent: event.nativeEvent });
            }}
          >
            <span className="block truncate">{displayPath}</span>
          </button>
        );
      })}
    </div>
  );
}

export function WorkspaceFileSourceTree({
  activeFilePath,
  autoFocusSearch,
  hostId,
  onSelectFile,
  root,
}: WorkspaceFileSourceTreeProps): React.ReactElement {
  const [query, setQuery] = React.useState("");
  const { files, isLoading } = useWorkspaceFileSearch({
    hostId,
    includeDirectories: false,
    query,
    roots: [root],
  });

  const entries =
    query.trim().length === 0
      ? activeFilePath == null
        ? []
        : [{ fsPath: activeFilePath, label: activeFilePath }]
      : (files ?? []);

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="shrink-0 px-2 pt-2 pb-1">
        <input
          autoFocus={autoFocusSearch}
          className="h-8 w-full rounded border border-token-border-default bg-token-main-surface-primary px-2 text-sm outline-none focus:border-token-focus-border"
          placeholder="Search files"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="min-h-0 flex-1 overflow-auto px-2 pb-2">
        {isLoading && entries.length === 0 ? (
          <div className="px-2 py-2 text-sm text-token-text-secondary">
            Loading...
          </div>
        ) : entries.length === 0 ? (
          <div className="px-2 py-2 text-sm text-token-text-secondary">
            No files
          </div>
        ) : (
          entries.map((file) => (
            <button
              key={file.fsPath}
              className="min-h-7 w-full rounded px-2 py-1 text-left text-sm text-token-text-secondary hover:bg-token-main-surface-secondary hover:text-token-foreground"
              type="button"
              onClick={() => onSelectFile(file.fsPath)}
            >
              <span className="block truncate">{file.label}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
