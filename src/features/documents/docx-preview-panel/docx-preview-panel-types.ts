// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type {
  ComponentType,
  ReactElement,
  ReactNode,
  Ref,
  RefCallback,
} from "react";

import type { ArtifactPreviewStatusValue } from "../../../utils/artifact-preview-status";

import type { DocxAnnotationComment } from "./annotation-types";
import type {
  ComputePinchZoomPercent,
  ComputeWheelZoomPercent,
  MeasureTouchDistance,
  NormalizeZoomPercent,
  UseDocxResizeObserverRef,
} from "./docx-preview-hooks";
import type {
  DocxAnnotationHostMessageBridge,
  ProductLoggerScope,
} from "./docx-page-annotation-layer";
import type { DocxRenderAsync } from "./docx-preview-rendering";

export type DocxPreviewChromeMode = "default" | "standalone";

export interface DocxPreviewPanelHandle {
  navigateToPage(pageNumber: number): void;
}

export type DocxPreviewCommentsChangeHandler = (
  updater: (comments: DocxAnnotationComment[]) => DocxAnnotationComment[],
) => void;

export interface DocxPreviewHeaderProps {
  artifactType: string;
  centerContent: ReactNode;
  hideMetadata?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  title: string;
}

export interface DocxPreviewZoomControlProps {
  fitOption?: {
    selected: boolean;
    onSelect: () => void;
  };
  onZoomPercentChange: (zoomPercent: number) => void;
  triggerTestId: string;
  zoomOptions?: readonly number[];
  zoomPercent: number;
}

export interface DocxPreviewDownloadButtonProps {
  hostId: string;
  path: string;
  sizeBytes?: number | null;
}

export interface DocxPreviewOpenButtonProps {
  analyticsContext?: unknown;
  cwd?: string | null;
  hostId: string;
  onBeforeOpen?: () => void | Promise<void>;
  path: string;
  persistPreferredTarget?: boolean;
  showLabel?: boolean;
}

export interface DocxPreviewRuntimeComponents {
  ArtifactPreviewHeader: ComponentType<DocxPreviewHeaderProps>;
  DownloadFileButton: ComponentType<DocxPreviewDownloadButtonProps>;
  OpenFileButton: ComponentType<DocxPreviewOpenButtonProps>;
  ZoomControl: ComponentType<DocxPreviewZoomControlProps>;
}

export interface DocxPreviewZoomTools {
  computePinchZoomPercent: ComputePinchZoomPercent;
  computeWheelZoomPercent: ComputeWheelZoomPercent;
  measureTouchDistance: MeasureTouchDistance;
  normalizeZoomPercent: NormalizeZoomPercent;
  useResizeObserverRef: UseDocxResizeObserverRef;
  zoomOptions: readonly number[];
}

export interface DocxPreviewPanelProps {
  bytes: Blob | BufferSource;
  chromeMode?: DocxPreviewChromeMode;
  commentSource: readonly unknown[];
  conversationId: string;
  disableAnnotations?: boolean;
  disableFileActions?: boolean;
  hostId: string;
  hostMessageBridge: DocxAnnotationHostMessageBridge;
  onBeforeOpen?: () => void | Promise<void>;
  onCommentsChange: DocxPreviewCommentsChangeHandler;
  pageNavigationZoomScale: number;
  path: string;
  productLoggerScope: ProductLoggerScope;
  ref?: Ref<DocxPreviewPanelHandle>;
  renderAsync: DocxRenderAsync | null;
  runtimeComponents: DocxPreviewRuntimeComponents;
  styleText: string;
  tabId: string;
  threadId?: string | null;
  title: string;
  zoomTools: DocxPreviewZoomTools;
}

export interface DocxPreviewStyleMountProps {
  styleContainerRef: RefCallback<HTMLElement>;
}

export type DocxPreviewStatusRenderer = (
  status: ArtifactPreviewStatusValue,
) => ReactElement | null;
