// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Formatting helpers for notebook artifact preview cells and outputs.
import type {
  NotebookCell,
  NotebookErrorOutput,
} from "./notebook-preview-types";

type NotebookIntlFormatter = {
  formatMessage(
    descriptor: {
      defaultMessage: string;
      description: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ): string;
};

const NOTEBOOK_HTML_CSP = [
  "default-src 'none'",
  "base-uri 'none'",
  "connect-src 'none'",
  "font-src data:",
  "form-action 'none'",
  "frame-src 'none'",
  "img-src data: blob:",
  "media-src data: blob:",
  "object-src 'none'",
  "script-src 'none'",
  "style-src 'unsafe-inline'",
].join("; ");

export function createNotebookHtmlSrcDoc(html: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${NOTEBOOK_HTML_CSP}"><meta name="color-scheme" content="light dark"><base target="_blank"><style>html,body{margin:0;background:transparent;color:CanvasText;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}body{padding:12px;}img,svg,canvas,video{max-width:100%;height:auto;}table{border-collapse:collapse;}th,td{border:1px solid color-mix(in srgb, CanvasText 18%, transparent);padding:4px 6px;}</style></head><body>${html}</body></html>`;
}

export function getNotebookErrorRawText(output: NotebookErrorOutput): string {
  const headline = `${output.ename}: ${output.evalue}`.trim();
  return output.traceback.trim().length === 0
    ? headline
    : `${headline}\n${output.traceback}`;
}

export function getNotebookCellTitle(
  intl: NotebookIntlFormatter,
  cell: NotebookCell,
  cellNumber: number,
): string {
  const explicitTitle = cell.title?.trim();
  if (explicitTitle != null && explicitTitle.length > 0) return explicitTitle;

  switch (cell.cellType) {
    case "markdown":
      return (
        getMarkdownHeadingTitle(cell.source) ??
        intl.formatMessage(
          {
            id: "notebookPreview.markdownCellTitle",
            defaultMessage: "Markdown cell {cellNumber}",
            description:
              "Fallback title for a Markdown notebook cell without a heading",
          },
          { cellNumber },
        )
      );

    case "raw":
      return intl.formatMessage(
        {
          id: "notebookPreview.rawCellTitle",
          defaultMessage: "Raw cell {cellNumber}",
          description: "Fallback title for a raw notebook cell",
        },
        { cellNumber },
      );

    case "code": {
      const strippedDescription = stripMarkdownForTitle(
        cell.descriptionMarkdown ?? "",
      );
      return strippedDescription.length > 0
        ? truncateNotebookTitle(strippedDescription)
        : intl.formatMessage(
            {
              id: "notebookPreview.codeCellTitle",
              defaultMessage: "Code cell {cellNumber}",
              description:
                "Fallback title for a code notebook cell without a description",
            },
            { cellNumber },
          );
    }
  }
}

export function stripNotebookExtension(title: string): string {
  return title.replace(/\.ipynb$/i, "");
}

function getMarkdownHeadingTitle(source: string): string | null {
  const heading = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^#{1,6}\s+/.test(line));

  return heading == null
    ? null
    : truncateNotebookTitle(heading.replace(/^#{1,6}\s+/, ""));
}

function stripMarkdownForTitle(markdown: string): string {
  return markdown
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
    .replace(/\[(.*?)\]\([^)]*\)/g, "$1")
    .replace(/[*_~#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateNotebookTitle(title: string): string {
  const trimmedTitle = title.trim();
  return trimmedTitle.length <= 80
    ? trimmedTitle
    : `${trimmedTitle.slice(0, 77).trimEnd()}…`;
}
