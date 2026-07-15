// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type {
  DocxAnnotationComment,
  DocxAnnotationMetadata,
} from "./annotation-types";

export interface CreateDocxArtifactAnnotationCommentOptions {
  annotationId?: string | null;
  artifactKind: "document";
  body: string;
  label: string;
  line: number;
  metadata: DocxAnnotationMetadata;
  path: string;
  title: string;
}

export function createDocxArtifactAnnotationComment({
  annotationId,
  artifactKind,
  body,
  label,
  line,
  metadata,
  path,
  title,
}: CreateDocxArtifactAnnotationCommentOptions): DocxAnnotationComment {
  return {
    type: "comment",
    content: [{ content_type: "text", text: body }],
    position: {
      side: "right",
      path: docxArtifactAnnotationPositionPath({ path, title }),
      line,
    },
    localArtifactAnnotationContext: {
      annotationId,
      artifactKind,
      path,
      title,
      label,
    },
    localArtifactAnnotationMetadata: metadata,
    origin: "artifact_annotation",
  };
}

function docxArtifactAnnotationPositionPath({
  path,
  title,
}: {
  path: string;
  title: string;
}): string {
  return `artifact:${title.trim() || path.trim() || "Selected artifact annotation"}`;
}
