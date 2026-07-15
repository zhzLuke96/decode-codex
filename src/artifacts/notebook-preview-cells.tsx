// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Cell renderers for the read-only notebook artifact preview.
import type { ReactElement, ReactNode } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { PullRequestDescriptionMarkdown } from "../conversations/pull-request-description-markdown-renderer";
import { ChevronIcon } from "../icons/chevron-icon";
import { CodeIcon } from "../icons/code-icon";
import { PlayOutlineIcon } from "../icons/play-outline-icon";
import { CodeSnippet } from "../ui/code-snippet";
import { getNotebookCellTitle } from "./notebook-preview-formatters";
import { NotebookOutputView } from "./notebook-preview-outputs";
import type {
  NotebookCell,
  ParsedNotebookDocument,
} from "./notebook-preview-types";

export function NotebookPreviewBody({
  document,
}: {
  document: ParsedNotebookDocument;
}): ReactElement {
  if (document.cells.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
        <FormattedMessage
          id="notebookPreview.empty"
          defaultMessage="This notebook does not contain any cells"
          description="Empty state shown for a notebook without cells"
        />
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-auto bg-token-side-bar-background px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {document.cells.map((cell, index) => (
          <NotebookCellSection
            key={cell.id ?? index}
            cell={cell}
            cellNumber={index + 1}
            totalCellCount={document.cells.length}
          />
        ))}
      </div>
    </div>
  );
}

function NotebookCellSection({
  cell,
  cellNumber,
  totalCellCount,
}: {
  cell: NotebookCell;
  cellNumber: number;
  totalCellCount: number;
}): ReactElement {
  return (
    <details
      className="group/notebook-cell overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary"
      open
    >
      <summary className="flex cursor-interaction list-none items-center justify-between gap-3 border-b border-token-border-light px-4 py-2 [&::-webkit-details-marker]:hidden">
        <NotebookCellHeader
          cell={cell}
          cellNumber={cellNumber}
          totalCellCount={totalCellCount}
        />
      </summary>
      <NotebookCellContent cell={cell} />
    </details>
  );
}

function NotebookCellHeader({
  cell,
  cellNumber,
  totalCellCount,
}: {
  cell: NotebookCell;
  cellNumber: number;
  totalCellCount: number;
}): ReactElement {
  const intl = useIntl();
  const title = getNotebookCellTitle(intl, cell, cellNumber);

  return (
    <>
      <div className="flex min-w-0 items-center gap-2">
        <ChevronIcon className="icon-2xs shrink-0 -rotate-90 text-token-text-tertiary transition-transform duration-300 group-open/notebook-cell:rotate-0" />
        <div
          className="min-w-0 truncate text-sm font-medium text-token-text-primary"
          title={title}
        >
          {title}
        </div>
        <span className="shrink-0 text-xs text-token-text-tertiary">
          <FormattedMessage
            id="notebookPreview.cellPosition"
            defaultMessage="Cell {cellNumber} of {totalCellCount}"
            description="Position label for a rendered notebook cell"
            values={{ cellNumber, totalCellCount }}
          />
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-token-text-tertiary">
        {cell.cellType === "code" && cell.executionCount != null ? (
          <span className="tabular-nums">
            <FormattedMessage
              id="notebookPreview.executionCount"
              defaultMessage="Run {executionCount}"
              description="Execution count label for a rendered notebook code cell"
              values={{ executionCount: cell.executionCount }}
            />
          </span>
        ) : null}
        {cell.cellType === "code" ? (
          <span
            aria-hidden={true}
            className="pointer-events-none inline-flex opacity-0 transition-opacity duration-150 group-focus-within/notebook-cell:opacity-60 group-hover/notebook-cell:opacity-60"
            title={intl.formatMessage({
              id: "notebookPreview.runCellDisabledTooltip",
              defaultMessage: "Running is disabled in read-only preview",
              description:
                "Tooltip for a disabled per-cell run affordance in the read-only notebook preview",
            })}
          >
            <PlayOutlineIcon className="icon-2xs" />
          </span>
        ) : null}
      </div>
    </>
  );
}

function NotebookCellContent({ cell }: { cell: NotebookCell }): ReactElement {
  if (cell.cellType === "markdown") {
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyMarkdownCell"
              defaultMessage="Empty Markdown cell"
              description="Empty state shown for a Markdown notebook cell without source"
            />
          </NotebookEmptyState>
        ) : (
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {cell.source}
          </PullRequestDescriptionMarkdown>
        )}
      </div>
    );
  }

  if (cell.cellType === "raw") {
    return (
      <div className="px-4 py-3">
        {cell.source.trim().length === 0 ? (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyRawCell"
              defaultMessage="Empty raw cell"
              description="Empty state shown for a raw notebook cell without source"
            />
          </NotebookEmptyState>
        ) : (
          <CodeSnippet
            content={cell.source}
            language="text"
            shouldWrapCode={true}
            title={
              <FormattedMessage
                id="notebookPreview.rawCodeTitle"
                defaultMessage="Raw"
                description="Code snippet title for a raw notebook cell"
              />
            }
            wrapperClassName="shadow-none"
          />
        )}
      </div>
    );
  }

  const descriptionMarkdown = cell.descriptionMarkdown?.trim() ?? "";
  const hasSource = cell.source.trim().length > 0;

  return (
    <>
      <div className="px-4 py-3">
        {descriptionMarkdown.length > 0 ? (
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {descriptionMarkdown}
          </PullRequestDescriptionMarkdown>
        ) : null}
        {hasSource ? (
          descriptionMarkdown.length > 0 ? (
            <NotebookCodeDisclosure code={cell.source} />
          ) : (
            <PythonCodeSnippet code={cell.source} />
          )
        ) : (
          <NotebookEmptyState>
            <FormattedMessage
              id="notebookPreview.emptyCodeCell"
              defaultMessage="Empty code cell"
              description="Empty state shown for a code notebook cell without source"
            />
          </NotebookEmptyState>
        )}
      </div>
      {cell.outputs.length > 0 ? (
        <div className="bg-token-main-surface-secondary/15 border-t border-token-border-light px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-col gap-3">
            {cell.outputs.map((output, index) => (
              <NotebookOutputView key={index} output={output} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function NotebookCodeDisclosure({ code }: { code: string }): ReactElement {
  return (
    <details className="group/code mt-3 border-t border-token-border-light pt-2">
      <summary className="flex cursor-interaction list-none items-center gap-2 rounded-md py-1 text-left text-xs font-medium text-token-text-tertiary transition-colors hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-text-tertiary [&::-webkit-details-marker]:hidden">
        <ChevronIcon className="icon-2xs shrink-0 -rotate-90 transition-transform duration-300 group-open/code:rotate-0" />
        <CodeIcon className="icon-2xs shrink-0" />
        <span>
          <FormattedMessage
            id="notebookPreview.codeDisclosure"
            defaultMessage="Code"
            description="Disclosure label for notebook cell source code"
          />
        </span>
      </summary>
      <div className="mt-2">
        <PythonCodeSnippet code={code} />
      </div>
    </details>
  );
}

function PythonCodeSnippet({ code }: { code: string }): ReactElement {
  return (
    <CodeSnippet
      content={code}
      language="python"
      shouldWrapCode={true}
      title={
        <FormattedMessage
          id="notebookPreview.pythonCodeTitle"
          defaultMessage="Python"
          description="Code snippet title for a Python notebook cell"
        />
      }
      wrapperClassName="shadow-none"
    />
  );
}

function NotebookEmptyState({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <div className="rounded-md border border-token-border-light px-3 py-2 text-sm text-token-text-tertiary">
      {children}
    </div>
  );
}
