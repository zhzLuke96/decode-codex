// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type {
  AskForEditAnchor,
  Point,
  Rect,
  Size,
} from "../../../image-side-panel/paged-annotation-overlays";

export type DocxAnnotationSelectionKind =
  | "text"
  | "image"
  | "drawing"
  | "table"
  | "paragraph";

export type DocxAnnotationContentPreview =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt?: string;
    };

export type DocxPagePointAnchor = {
  kind: "point";
  point: Point;
};

export type DocxRegionAnchor = {
  kind: "region";
  rect: Rect;
  askForEditAnchor?: AskForEditAnchor;
  contentPreview?: DocxAnnotationContentPreview;
  nearbyText?: string;
  selectionKind?: DocxAnnotationSelectionKind | null;
  selectionRects?: Rect[];
  selectedText?: string;
};

export type DocxAnnotationAnchor = DocxPagePointAnchor | DocxRegionAnchor;

export type DocxAnnotationTarget =
  | {
      mode: "create";
    }
  | {
      mode: "edit";
      commentId: string;
    };

export type DocxAnnotationMetadataTarget =
  | {
      type: "document-page-point";
      pageCount: number;
      pageNumber: number;
      pageSize: Size;
      point: Point;
    }
  | {
      type: "document-page-region";
      anchorPoint: Point;
      pageCount: number;
      pageNumber: number;
      pageSize: Size;
      rect: Rect;
    }
  | {
      type: "document-element-selection";
      anchorPoint: Point;
      pageCount: number;
      pageNumber: number;
      pageSize: Size;
      rect: Rect;
      selectionKind: DocxAnnotationSelectionKind;
      selectionRects?: Rect[];
      selectedText?: string;
      nearbyText?: string;
    };

export type DocxAnnotationMetadata = {
  contentPreview?: DocxAnnotationContentPreview;
  target?: DocxAnnotationMetadataTarget;
};

export type DocxAnnotationComment = {
  type?: string;
  content: readonly {
    content_type: string;
    text: string;
  }[];
  localArtifactAnnotationContext?: {
    annotationId?: string | null;
    artifactKind?: string;
    label?: string;
    path?: string;
    title?: string;
  } | null;
  localArtifactAnnotationMetadata?: DocxAnnotationMetadata | null;
  origin?: string;
  position: {
    line: number;
    path: string;
    side?: string;
  };
};

export type DocxCommentPayload = {
  sessionId: string;
  conversationId: string;
  target: DocxAnnotationTarget;
  anchorState: {
    anchor: {
      kind: "region";
      pageUrl: string;
      frameUrl: null;
      title: string;
      elementPath: string;
      point: {
        xPercent: number;
        y: number;
      };
      rect: Rect;
      isFixed: false;
      role: null;
      name: null;
      selector: null;
      framePath: [];
      nearbyText: null;
    };
    viewportRect: Rect;
    viewportPoint: Point;
    viewportSize: Size;
  };
  body: string;
  cwd: null;
  placementStrategy: "anchored";
  previewAlignment: "end";
  surfaceMode: "editor";
};
