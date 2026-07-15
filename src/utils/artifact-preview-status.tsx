// Restored from ref/webview/assets/artifact-preview-status-jgtoNhXT.js
// Alias-compatible with ref/webview/assets/artifact-preview-status-BdDDtvat.js.
// Artifact preview loading and error state renderer.

import type { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
export type ArtifactPreviewStatusValue = "ready" | "loading" | "error";
export function initArtifactPreviewStatusChunk() {}
export function ArtifactPreviewStatus(
  status: ArtifactPreviewStatusValue,
): ReactElement | null {
  if (status === "ready") return null;
  return (
    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
      {status === "loading" ? (
        <span className="loading-shimmer-pure-text font-medium">
          <FormattedMessage
            id="artifactTab.previewLoading"
            defaultMessage="Preparing preview…"
            description="Loading state shown while the artifact preview is loading"
          />
        </span>
      ) : (
        <FormattedMessage
          id="artifactTab.previewError"
          defaultMessage="Couldn’t load this preview"
          description="Error state shown when an artifact preview fails to load"
        />
      )}
    </div>
  );
}
export default ArtifactPreviewStatus;
