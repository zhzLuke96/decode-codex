// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// "Jump to file" review toolbar control: a searchable dropdown of changed files
// that fuzzy-filters by file name/path and navigates to the selected file's diff.
import { useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import { MiddleTruncatedText } from "./middle-truncated-text";
import {
  useStore,
  useAtomValue,
  routeAtom,
  navigateToReviewFilePath,
  reviewSearchableFileEntriesAtom,
  fuzzyMatchScore,
  JumpToFileIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export function initJumpToFileMenuChunk(): void {}

export interface ReviewFileEntry {
  path: string;
  displayPath: string;
}

export interface SplitDisplayPath {
  fileName: string;
  parentPath: string;
}

export function splitDisplayPath(path: string): SplitDisplayPath {
  const lastSlash = path.lastIndexOf("/");
  return lastSlash === -1
    ? { fileName: path, parentPath: "" }
    : {
        fileName: path.slice(lastSlash + 1),
        parentPath: path.slice(0, lastSlash),
      };
}

export function compareFileEntries(
  a: ReviewFileEntry,
  b: ReviewFileEntry,
): number {
  const left = splitDisplayPath(a.displayPath);
  const right = splitDisplayPath(b.displayPath);
  return (
    left.fileName.localeCompare(right.fileName) ||
    left.parentPath.localeCompare(right.parentPath)
  );
}

export function filterAndSortFileEntries(
  entries: ReviewFileEntry[],
  query: string,
): ReviewFileEntry[] {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) {
    return [...entries].sort(compareFileEntries);
  }
  return entries
    .map((entry) => {
      const fileNameScore = fuzzyMatchScore(
        splitDisplayPath(entry.displayPath).fileName,
        trimmedQuery,
      );
      return {
        entry,
        score:
          fileNameScore > 0
            ? fileNameScore
            : fuzzyMatchScore(entry.displayPath, trimmedQuery),
      };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);
}

interface JumpToFileEntryProps {
  displayPath: string;
}

function JumpToFileEntry({ displayPath }: JumpToFileEntryProps) {
  const { fileName, parentPath } = splitDisplayPath(displayPath);
  return (
    <span className="flex min-w-0 items-center gap-2">
      <span className="shrink-0 text-token-foreground">{fileName}</span>
      {parentPath.length > 0 ? (
        <MiddleTruncatedText
          className="min-w-0 flex-1 text-token-description-foreground"
          text={parentPath}
        />
      ) : null}
    </span>
  );
}

export interface JumpToFileMenuProps {
  entries: ReviewFileEntry[];
  onSelectPath: (path: string) => void;
}

export function JumpToFileMenu({ entries, onSelectPath }: JumpToFileMenuProps) {
  const intl = useIntl();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredEntries = filterAndSortFileEntries(entries, query);
  const label = intl.formatMessage({
    id: "codex.review.jumpToFile",
    defaultMessage: "Jump to file",
    description: "Button label for opening diff file jump search",
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) setQuery("");
    setOpen(nextOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const triggerButton = (
    <Tooltip tooltipContent={label} delayOpen={true}>
      <Button aria-label={label} color="ghost" size="toolbar" uniform={true}>
        <JumpToFileIcon className="icon-xs text-token-description-foreground" />
      </Button>
    </Tooltip>
  );

  return (
    <DropdownMenu
      open={open}
      onOpenChange={handleOpenChange}
      align="end"
      contentWidth="panelWide"
      contentMaxHeight="list"
      triggerButton={triggerButton}
    >
      <MenuChrome.SearchInput
        autoFocus={true}
        placeholder={label}
        value={query}
        onChange={handleSearchChange}
      />
      {filteredEntries.length === 0 ? (
        <MenuChrome.Message compact={true}>
          <FormattedMessage
            id="codex.review.jumpToFile.empty"
            defaultMessage="No matching files"
            description="Empty state for review file jump search"
          />
        </MenuChrome.Message>
      ) : (
        filteredEntries.map((entry) => (
          <MenuChrome.Item
            key={entry.path}
            allowWrap={true}
            onSelect={() => {
              onSelectPath(entry.path);
              setOpen(false);
            }}
          >
            <JumpToFileEntry displayPath={entry.displayPath} />
          </MenuChrome.Item>
        ))
      )}
    </DropdownMenu>
  );
}

export function JumpToFileButton() {
  const scope = useStore(routeAtom);
  const entries = useAtomValue(reviewSearchableFileEntriesAtom);
  const handleSelectPath = (path: string) =>
    navigateToReviewFilePath(scope, path);
  return <JumpToFileMenu entries={entries} onSelectPath={handleSelectPath} />;
}
