// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Picks the appropriate "rich" preview renderer for a workspace file (image,
// markdown, pdf, or molecular structure) with a code-view fallback.
import { Suspense } from "react";
import { FileSourceCodeView } from "./file-source-code-view";
import {
  FileSourceStatus,
  ImageFilePreview,
  MarkdownFilePreview,
  PdfFilePreview,
  MoleculeFilePreview,
} from "../boundaries/onboarding-commons-externals.facade";

export type RichPreviewKind = "image" | "markdown" | "pdf" | "pdb";

export interface FileSourceRichPreviewProps {
  gitBlameFeatureEnabled: boolean;
  hostId: string;
  path: string;
  previewKind: RichPreviewKind;
}

export function FileSourceRichPreview(props: FileSourceRichPreviewProps) {
  const { gitBlameFeatureEnabled, hostId, path, previewKind } = props;
  const imagePreview = {
    before: null,
    after: { kind: "worktree", hostId, path },
  };
  const errorFallback = <FileSourceStatus isError={true} isLoading={false} />;

  switch (previewKind) {
    case "image":
      return (
        <ImageFilePreview
          className="h-full bg-token-main-surface-primary"
          imagePreview={imagePreview}
          fallback={errorFallback}
          showMissingPreview={true}
        />
      );
    case "markdown":
      return (
        <MarkdownFilePreview
          className="h-full bg-token-main-surface-primary"
          hostId={hostId}
          path={path}
          fallback={
            <FileSourceCodeView
              gitBlameFeatureEnabled={gitBlameFeatureEnabled}
              hostId={hostId}
              path={path}
            />
          }
          scrollable={true}
        />
      );
    case "pdf":
      return (
        <PdfFilePreview
          className="h-full bg-token-main-surface-primary"
          imagePreview={imagePreview}
          fallback={errorFallback}
          showMissingPreview={true}
        />
      );
    case "pdb":
      return (
        <Suspense fallback={errorFallback}>
          <MoleculeFilePreview
            className="h-full bg-token-main-surface-primary"
            hostId={hostId}
            path={path}
            fallback={errorFallback}
          />
        </Suspense>
      );
  }
}
