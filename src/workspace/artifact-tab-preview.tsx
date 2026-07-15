// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Suspense wrapper that lazily mounts the (electron) artifact tab preview body.
import * as React from "react";
import { FormattedMessage } from "../vendor/react-intl";

const ArtifactTabContentLazy = React.lazy(async () => {
  const { ArtifactTabContent } = await import(
    "../vendor/artifact-tab-content-electron"
  );
  return { default: ArtifactTabContent };
});

function ArtifactTabPreviewFallback() {
  return (
    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
      <FormattedMessage
        id="artifactTab.loading"
        defaultMessage="Loading preview..."
        description="Loading state shown while an artifact tab preview is mounting"
      />
    </div>
  );
}

export type ArtifactTabPreviewProps = Record<string, unknown>;

export function initArtifactTabPreviewChunk(): void {}

export function ArtifactTabPreview(props: ArtifactTabPreviewProps) {
  return (
    <React.Suspense fallback={<ArtifactTabPreviewFallback />}>
      <ArtifactTabContentLazy {...props} />
    </React.Suspense>
  );
}
