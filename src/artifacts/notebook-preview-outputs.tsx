// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Output renderers for the notebook artifact preview.
import type { ReactElement } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { PullRequestDescriptionMarkdown } from "../conversations/pull-request-description-markdown-renderer";
import { CodeSnippet } from "../ui/code-snippet";
import { classNames } from "../utils/class-names";
import {
  createNotebookHtmlSrcDoc,
  getNotebookErrorRawText,
} from "./notebook-preview-formatters";
import type {
  NotebookErrorOutput,
  NotebookOutput,
} from "./notebook-preview-types";

export function NotebookOutputView({
  output,
}: {
  output: NotebookOutput;
}): ReactElement {
  const intl = useIntl();

  switch (output.type) {
    case "image": {
      const altText = intl.formatMessage(
        {
          id: "notebookPreview.imageOutputAlt",
          defaultMessage: "Notebook output {outputNumber}",
          description:
            "Alt text for an image output rendered in a notebook artifact preview",
        },
        { outputNumber: output.outputNumber },
      );
      return (
        <div className="overflow-auto rounded-md bg-token-main-surface-primary/40 p-2">
          <img
            alt={altText}
            className="max-h-[640px] max-w-full"
            src={output.dataUrl}
          />
        </div>
      );
    }

    case "html":
      return (
        <div>
          <iframe
            className="h-72 w-full rounded-md bg-token-main-surface-primary"
            sandbox=""
            srcDoc={createNotebookHtmlSrcDoc(output.html)}
            title={intl.formatMessage({
              id: "notebookPreview.htmlOutputTitle",
              defaultMessage: "Notebook HTML output",
              description: "Title for a sandboxed notebook HTML output frame",
            })}
          />
          <RawOutputDisclosure className="mt-2">
            {output.html}
          </RawOutputDisclosure>
        </div>
      );

    case "markdown":
      return (
        <div className="rounded-md bg-token-main-surface-primary/40 px-3 py-2">
          <PullRequestDescriptionMarkdown
            allowBasicHtml={true}
            className="text-size-chat"
          >
            {output.markdown}
          </PullRequestDescriptionMarkdown>
        </div>
      );

    case "json":
      return (
        <NotebookTextOutputView
          language="json"
          rawText={output.text}
          summaryMarkdown={output.summaryMarkdown}
        />
      );

    case "error":
      return <NotebookErrorOutputView output={output} />;

    case "stream":
    case "text":
      return (
        <NotebookTextOutputView
          rawText={output.text}
          summaryMarkdown={output.summaryMarkdown}
        />
      );
  }
}

function NotebookTextOutputView({
  language,
  rawText,
  summaryMarkdown,
}: {
  language?: string;
  rawText: string;
  summaryMarkdown: string | null;
}): ReactElement {
  if (summaryMarkdown != null) {
    return (
      <div className="rounded-md bg-token-main-surface-primary/40 p-3">
        <PullRequestDescriptionMarkdown
          allowBasicHtml={true}
          className="text-size-chat"
        >
          {summaryMarkdown}
        </PullRequestDescriptionMarkdown>
        <RawOutputDisclosure className="mt-2">{rawText}</RawOutputDisclosure>
      </div>
    );
  }

  if (language != null) {
    return (
      <CodeSnippet
        content={rawText}
        language={language}
        shouldWrapCode={true}
        showActionBar={false}
        wrapperClassName="shadow-none"
      />
    );
  }

  return <RawTextBlock>{rawText}</RawTextBlock>;
}

function NotebookErrorOutputView({
  output,
}: {
  output: NotebookErrorOutput;
}): ReactElement {
  const rawText = getNotebookErrorRawText(output);

  return (
    <div className="rounded-md border border-token-charts-red/30 bg-token-charts-red/5 p-3">
      {output.summaryMarkdown == null ? (
        <div className="text-sm font-medium text-token-charts-red">
          {output.evalue.length > 0 ? (
            <FormattedMessage
              id="notebookPreview.errorOutput"
              defaultMessage="{name}: {message}"
              description="Notebook error output label with error name and message"
              values={{ message: output.evalue, name: output.ename }}
            />
          ) : (
            output.ename
          )}
        </div>
      ) : (
        <PullRequestDescriptionMarkdown
          allowBasicHtml={true}
          className="text-size-chat"
        >
          {output.summaryMarkdown}
        </PullRequestDescriptionMarkdown>
      )}
      {rawText.trim().length > 0 ? (
        <RawOutputDisclosure className="mt-2">{rawText}</RawOutputDisclosure>
      ) : null}
    </div>
  );
}

function RawOutputDisclosure({
  children,
  className,
}: {
  children: string;
  className?: string;
}): ReactElement {
  return (
    <details className={className}>
      <summary className="cursor-interaction text-xs font-medium text-token-text-tertiary marker:text-token-text-tertiary">
        <FormattedMessage
          id="notebookPreview.rawOutputDisclosure"
          defaultMessage="Raw output"
          description="Disclosure label for a notebook cell's raw output"
        />
      </summary>
      <RawTextBlock className="mt-2">{children}</RawTextBlock>
    </details>
  );
}

function RawTextBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}): ReactElement {
  return (
    <pre
      className={classNames(
        "overflow-auto rounded-md bg-token-text-code-block-background/20 p-3 font-mono text-xs whitespace-pre-wrap text-token-text-primary",
        className,
      )}
    >
      {children}
    </pre>
  );
}
