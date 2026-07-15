// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Shared types for the notebook artifact preview renderer.
export type ParsedNotebookDocument = {
  cells: NotebookCell[];
  title: string | null;
};

export type NotebookCell =
  | NotebookCodeCell
  | NotebookMarkdownCell
  | NotebookRawCell;

export type NotebookBaseCell = {
  id: string | null;
  source: string;
  title: string | null;
};

export type NotebookCodeCell = NotebookBaseCell & {
  cellType: "code";
  descriptionMarkdown: string | null;
  executionCount: number | null;
  outputs: NotebookOutput[];
};

export type NotebookMarkdownCell = NotebookBaseCell & {
  cellType: "markdown";
};

export type NotebookRawCell = NotebookBaseCell & {
  cellType: "raw";
};

export type NotebookOutput =
  | NotebookErrorOutput
  | NotebookHtmlOutput
  | NotebookImageOutput
  | NotebookJsonOutput
  | NotebookMarkdownOutput
  | NotebookStreamOutput
  | NotebookTextOutput;

export type NotebookImageOutput = {
  dataUrl: string;
  outputNumber: number;
  type: "image";
};

export type NotebookHtmlOutput = {
  html: string;
  type: "html";
};

export type NotebookMarkdownOutput = {
  markdown: string;
  type: "markdown";
};

export type NotebookTextOutput = {
  summaryMarkdown: string | null;
  text: string;
  type: "text";
};

export type NotebookJsonOutput = {
  summaryMarkdown: string | null;
  text: string;
  type: "json";
};

export type NotebookStreamOutput = {
  name: string;
  summaryMarkdown: string | null;
  text: string;
  type: "stream";
};

export type NotebookErrorOutput = {
  ename: string;
  evalue: string;
  summaryMarkdown: string | null;
  traceback: string;
  type: "error";
};

export type NotebookParseResult =
  | {
      document: ParsedNotebookDocument;
      status: "ready";
    }
  | {
      document?: undefined;
      status: "error";
    };
