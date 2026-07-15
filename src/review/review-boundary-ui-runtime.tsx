// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Review UI boundary components that are imported through onboarding commons.
import clsx from "clsx";
import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { PageSearchInput } from "../ui/page-search-input";
import { Spinner } from "../ui/spinner";
import { LargeEmptyState } from "../utils/large-empty-state";

export interface ReviewStateProps {
  actions?: ReactNode;
  className?: string;
}

export function ReviewLoadingState({ className }: ReviewStateProps) {
  return (
    <div
      className={clsx(
        "flex h-full w-full items-center justify-center gap-2 text-sm text-token-description-foreground",
        className,
      )}
    >
      <Spinner className="icon-xs" />
      <FormattedMessage
        id="codex.review.loading"
        defaultMessage="Loading changes…"
        description="Loading message shown while review changes are fetched"
      />
    </div>
  );
}

export function ReviewErrorState({ actions, className }: ReviewStateProps) {
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      title={
        <FormattedMessage
          id="codex.review.error.title"
          defaultMessage="Unable to load changes"
          description="Title shown when the review panel cannot load diffs"
        />
      }
      description={
        <FormattedMessage
          id="codex.review.error.description"
          defaultMessage="Try refreshing the review."
          description="Description shown when the review panel cannot load diffs"
        />
      }
      actions={actions}
    />
  );
}

export function ReviewEmptyState({ actions, className }: ReviewStateProps) {
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      title={
        <FormattedMessage
          id="codex.review.noDiff"
          defaultMessage="No file changes yet"
          description="Label indicating a code review has no changes"
        />
      }
      description={
        <FormattedMessage
          id="codex.review.noDiff.baseDescription"
          defaultMessage="Changes in this project will appear here."
          description="Default description shown when a review has no changes"
        />
      }
      actions={actions}
    />
  );
}

export interface ReviewStagedEmptyStateProps extends ReviewStateProps {
  stageFilter: "staged" | "unstaged";
}

export function ReviewStagedEmptyState({
  actions,
  className,
  stageFilter,
}: ReviewStagedEmptyStateProps) {
  const isStaged = stageFilter === "staged";
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      title={
        isStaged ? (
          <FormattedMessage
            id="codex.review.stageFilter.empty.staged.title"
            defaultMessage="No staged changes"
            description="Empty state title when there are no staged changes"
          />
        ) : (
          <FormattedMessage
            id="codex.review.stageFilter.empty.unstaged.title"
            defaultMessage="No unstaged changes"
            description="Empty state title when there are no unstaged changes"
          />
        )
      }
      description={
        isStaged ? (
          <FormattedMessage
            id="codex.review.stageFilter.empty.staged.description"
            defaultMessage="Accept edits to stage them"
            description="Empty state description when there are no staged changes"
          />
        ) : (
          <FormattedMessage
            id="codex.review.stageFilter.empty.unstaged.description"
            defaultMessage="Code changes will appear here"
            description="Empty state description when there are no unstaged changes"
          />
        )
      }
      actions={actions}
    />
  );
}

export interface ReviewFileSearchInputProps {
  inputId: string;
  onQueryChange: (query: string) => void;
  searchQuery: string;
}

export function ReviewFileSearchInput({
  inputId,
  onQueryChange,
  searchQuery,
}: ReviewFileSearchInputProps) {
  return (
    <PageSearchInput
      id={inputId}
      label={
        <FormattedMessage
          id="codex.review.changedFiles.search.label"
          defaultMessage="Search changed files"
          description="Accessible label for the changed-files search input"
        />
      }
      onSearchQueryChange={onQueryChange}
      placeholder="Search files"
      searchQuery={searchQuery}
    />
  );
}
