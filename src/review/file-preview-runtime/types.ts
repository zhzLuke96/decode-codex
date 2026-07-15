// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared file-preview runtime types.
import type * as React from "react";

export type WorkspaceFilePointer = {
  hostId?: string | null;
  path?: string | null;
};

export type FilePreviewDescriptor = {
  after?: WorkspaceFilePointer | null;
  before?: WorkspaceFilePointer | null;
};

export type PreviewFallback = React.ReactNode;

export interface OpenFileButtonProps {
  analyticsContext?: unknown;
  cwd?: string | null;
  hostId?: string | null;
  onBeforeOpen?: () => unknown | Promise<unknown>;
  path: string;
  persistPreferredTarget?: boolean;
  showLabel?: boolean;
}

export interface OpenFileContextMenuWrapperProps {
  children: React.ReactElement<{ onContextMenu?: React.MouseEventHandler }>;
  cwd?: string | null;
  hostId?: string | null;
  openInSidePanel?: boolean;
  path: string;
}

export interface ImageFilePreviewProps {
  className?: string;
  fallback?: PreviewFallback;
  imagePreview?: FilePreviewDescriptor | null;
  showMissingPreview?: boolean;
}

export interface PdfFilePreviewProps extends ImageFilePreviewProps {}

export interface MarkdownFilePreviewProps {
  className?: string;
  fallback?: PreviewFallback;
  hostId?: string | null;
  path: string;
  scrollable?: boolean;
}

export interface MoleculeFilePreviewProps {
  className?: string;
  fallback?: PreviewFallback;
  hostId?: string | null;
  path: string;
}
