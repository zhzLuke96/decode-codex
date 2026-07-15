// Restored from ref/webview/assets/notebook-preview-panel-Bk0oKCgu.js
// Semantic read-only renderer for Jupyter notebook artifact previews.
import React, { type ReactElement, type ReactNode } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import {
  ArtifactOpenButton,
  ArtifactPreviewHeader,
} from "../vendor/pull-request-thread-actions-runtime";
import { PlayOutlineIcon } from "../icons/play-outline-icon";
import { RefreshIcon } from "../icons/refresh-icon";
import { ArtifactPreviewStatus } from "../utils/artifact-preview-status";
import { NotebookPreviewBody } from "./notebook-preview-cells";
import { stripNotebookExtension } from "./notebook-preview-formatters";
import { parseNotebookContents } from "./notebook-preview-parser";

export type NotebookPreviewPanelProps = {
  contentsBase64: string;
  headerRightContent?: ReactNode;
  hostId?: string | null;
  path?: string | null;
  title: string;
};

export function NotebookPreviewPanel({
  contentsBase64,
  headerRightContent,
  hostId,
  path,
  title,
}: NotebookPreviewPanelProps): ReactElement {
  const intl = useIntl();
  const parsedNotebook = React.useMemo(
    () => parseNotebookContents(contentsBase64),
    [contentsBase64],
  );
  const displayTitle =
    parsedNotebook.status === "ready"
      ? (parsedNotebook.document.title ?? stripNotebookExtension(title))
      : stripNotebookExtension(title);
  const cellCountLabel =
    parsedNotebook.status === "ready"
      ? intl.formatMessage(
          {
            id: "notebookPreview.cellCount",
            defaultMessage: "{cellCount, plural, one {# cell} other {# cells}}",
            description:
              "Cell count shown in the notebook artifact preview header",
          },
          { cellCount: parsedNotebook.document.cells.length },
        )
      : null;
  const artifactType =
    cellCountLabel == null ? "IPYNB" : `IPYNB · ${cellCountLabel}`;
  const readOnlyControls =
    parsedNotebook.status === "ready" ? (
      <>
        <ReadOnlyBadge />
        <DisabledNotebookAction
          label={intl.formatMessage({
            id: "notebookPreview.runAllDisabledTooltip",
            defaultMessage: "Running is not available in this preview",
            description:
              "Tooltip for a disabled run-all control in the read-only notebook preview",
          })}
        >
          <PlayOutlineIcon className="icon-2xs" />
          <span className="hidden md:inline">
            <FormattedMessage
              id="notebookPreview.runAllDisabled"
              defaultMessage="Run all"
              description="Disabled run-all control in the read-only notebook preview"
            />
          </span>
        </DisabledNotebookAction>
        <DisabledNotebookAction
          label={intl.formatMessage({
            id: "notebookPreview.restartKernelDisabledTooltip",
            defaultMessage: "Kernels are not connected in this preview",
            description:
              "Tooltip for a disabled restart-kernel control in the read-only notebook preview",
          })}
        >
          <RefreshIcon className="icon-2xs" />
          <span className="hidden lg:inline">
            <FormattedMessage
              id="notebookPreview.restartKernelDisabled"
              defaultMessage="Restart kernel"
              description="Disabled restart-kernel control in the read-only notebook preview"
            />
          </span>
        </DisabledNotebookAction>
      </>
    ) : null;
  const fileAction =
    hostId != null && path != null ? (
      <ArtifactOpenButton
        analyticsContext={{
          threadId: null,
          turnId: null,
          inputMessageId: null,
          messageId: null,
        }}
        hostId={hostId}
        path={path}
        showLabel={true}
      />
    ) : null;
  const rightContent = (
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-1 overflow-hidden">
      {readOnlyControls}
      {fileAction}
      {headerRightContent}
    </div>
  );
  const body =
    parsedNotebook.status === "ready" ? (
      <NotebookPreviewBody document={parsedNotebook.document} />
    ) : (
      <div className="flex min-h-0 flex-1 items-center justify-center">
        {ArtifactPreviewStatus("error")}
      </div>
    );

  return (
    <section className="flex h-full min-h-0 flex-col bg-token-side-bar-background">
      <ArtifactPreviewHeader
        artifactType={artifactType}
        centerContent={null}
        rightContent={rightContent}
        title={displayTitle}
      />
      {body}
    </section>
  );
}

function ReadOnlyBadge(): ReactElement {
  return (
    <span className="bg-token-main-surface-secondary/30 inline-flex h-7 shrink-0 items-center rounded-full border border-token-border-light px-2 text-xs font-medium text-token-text-tertiary">
      <FormattedMessage
        id="notebookPreview.readOnlyBadge"
        defaultMessage="Read only"
        description="Badge shown in the read-only notebook artifact preview"
      />
    </span>
  );
}

function DisabledNotebookAction({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}): ReactElement {
  return (
    <button
      aria-disabled={true}
      className="inline-flex h-7 shrink-0 cursor-default items-center gap-1 rounded-md px-2 text-xs font-medium text-token-text-tertiary/70"
      disabled={true}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}

export default NotebookPreviewPanel;
