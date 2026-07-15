// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { ReactElement } from "react";

import type {
  DocxPreviewChromeMode,
  DocxPreviewRuntimeComponents,
} from "./docx-preview-panel-types";
import type { DocxPreviewZoomState } from "./docx-preview-hooks";
import { docxTitleFromPath } from "./docx-preview-rendering";

export interface DocxPreviewToolbarProps {
  chromeMode: DocxPreviewChromeMode;
  disableFileActions: boolean;
  hostId: string;
  isReady: boolean;
  onBeforeOpen?: () => void | Promise<void>;
  path: string;
  runtimeComponents: DocxPreviewRuntimeComponents;
  title: string;
  zoomOptions: readonly number[];
  zoomState: Pick<
    DocxPreviewZoomState,
    "fitToWidth" | "isZoomToFitSelected" | "setZoomPercent" | "zoomPercent"
  >;
}

export function DocxPreviewToolbar({
  chromeMode,
  disableFileActions,
  hostId,
  isReady,
  onBeforeOpen,
  path,
  runtimeComponents,
  title,
  zoomOptions,
  zoomState,
}: DocxPreviewToolbarProps): ReactElement | null {
  if (!isReady) return null;

  const {
    ArtifactPreviewHeader,
    DownloadFileButton,
    OpenFileButton,
    ZoomControl,
  } = runtimeComponents;
  const fileActions =
    chromeMode === "default" && !disableFileActions ? (
      <>
        <DownloadFileButton hostId={hostId} path={path} />
        <OpenFileButton
          hostId={hostId}
          onBeforeOpen={onBeforeOpen}
          path={path}
          showLabel={true}
        />
      </>
    ) : null;

  return (
    <ArtifactPreviewHeader
      artifactType="DOC"
      centerContent={null}
      hideMetadata={chromeMode === "standalone"}
      rightContent={
        <div className="flex items-center gap-1">
          <ZoomControl
            fitOption={{
              selected: zoomState.isZoomToFitSelected,
              onSelect: zoomState.fitToWidth,
            }}
            onZoomPercentChange={zoomState.setZoomPercent}
            triggerTestId="docx-preview-zoom-trigger"
            zoomOptions={zoomOptions}
            zoomPercent={zoomState.zoomPercent}
          />
          {fileActions}
        </div>
      }
      title={docxTitleFromPath(title)}
    />
  );
}
