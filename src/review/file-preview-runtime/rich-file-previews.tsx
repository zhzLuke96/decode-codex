// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Rich preview renderers for workspace image, markdown, PDF, and PDB files.
import * as React from "react";
import clsx from "clsx";

import { appScopeO as useAppStore } from "../../boundaries/app-scope";
import { ConversationMarkdown } from "../../conversations/conversation-markdown-view";
import {
  buildLocalFileSrc,
  loadFileDataUrl,
} from "../../runtime/commons-utility-runtime";
import { useHostQuery } from "../../runtime/host-query-runtime";
import { PdbPreviewFromFile } from "../../ui/pdb-preview";
import { RichPreviewLoading } from "../../ui/rich-preview-primitives";
import type {
  FilePreviewDescriptor,
  ImageFilePreviewProps,
  MarkdownFilePreviewProps,
  MoleculeFilePreviewProps,
  PdfFilePreviewProps,
  WorkspaceFilePointer,
} from "./types";

type ReadFileResult = {
  contents?: string | null;
};

export function ImageFilePreview({
  className,
  fallback = null,
  imagePreview,
  showMissingPreview = false,
}: ImageFilePreviewProps) {
  const pointer = resolvePreviewPointer(imagePreview);
  const imageSrc = useLocalFilePreviewSrc(pointer);
  const [failedPath, setFailedPath] = React.useState<string | null>(null);
  const path = pointer?.path ?? null;

  React.useEffect(() => {
    setFailedPath(null);
  }, [path]);

  if (path == null) return showMissingPreview ? fallback : null;
  if (failedPath === path && imageSrc == null) return fallback;

  return (
    <img
      alt=""
      className={clsx("h-full w-full object-contain", className)}
      onError={() => setFailedPath(path)}
      src={imageSrc ?? buildLocalFileSrc(path)}
    />
  );
}

export function PdfFilePreview({
  className,
  fallback = null,
  imagePreview,
  showMissingPreview = false,
}: PdfFilePreviewProps) {
  const pointer = resolvePreviewPointer(imagePreview);
  const path = pointer?.path ?? null;

  if (path == null) return showMissingPreview ? fallback : null;

  return (
    <iframe
      className={clsx("h-full w-full border-0", className)}
      src={buildLocalFileSrc(path)}
      title={path}
    />
  );
}

export function MarkdownFilePreview({
  className,
  fallback = null,
  hostId,
  path,
  scrollable = false,
}: MarkdownFilePreviewProps) {
  const readFileQuery = useHostQuery<ReadFileResult>("read-file", {
    params: hostId == null ? { path } : { hostId, path },
    queryConfig: {
      enabled: path.length > 0,
    },
  });
  const contents = readFileQuery.data?.contents;

  if (readFileQuery.isLoading || readFileQuery.isPending) {
    return (
      <div
        className={clsx(
          "flex h-full items-center justify-center bg-token-main-surface-primary",
          className,
        )}
      >
        <RichPreviewLoading className="text-sm" />
      </div>
    );
  }

  if (readFileQuery.isError || contents == null) return fallback;

  return (
    <ConversationMarkdown
      allowBasicHtml={false}
      className={clsx(
        "h-full p-4",
        scrollable ? "overflow-auto" : "overflow-hidden",
        className,
      )}
      hostId={hostId}
      markdown={contents}
    />
  );
}

export function MoleculeFilePreview({
  className,
  fallback = null,
  hostId,
  path,
}: MoleculeFilePreviewProps) {
  return (
    <PdbPreviewFromFile
      className={className}
      fallback={fallback}
      hostId={hostId}
      path={path}
    />
  );
}

function resolvePreviewPointer(
  imagePreview?: FilePreviewDescriptor | null,
): WorkspaceFilePointer | null {
  return imagePreview?.after ?? imagePreview?.before ?? null;
}

function useLocalFilePreviewSrc(
  pointer: WorkspaceFilePointer | null,
): string | null {
  const store = useAppStore();
  const path = pointer?.path ?? null;
  const hostId = pointer?.hostId ?? null;
  const [loadedSrc, setLoadedSrc] = React.useState<{
    path: string;
    src: string | null;
  } | null>(null);

  React.useEffect(() => {
    if (path == null) return;
    let cancelled = false;
    setLoadedSrc({ path, src: null });
    loadFileDataUrl(path, hostId, store)
      .then((src) => {
        if (!cancelled) setLoadedSrc({ path, src });
      })
      .catch(() => {
        if (!cancelled) setLoadedSrc({ path, src: null });
      });
    return () => {
      cancelled = true;
    };
  }, [hostId, path, store]);

  return loadedSrc?.path === path ? loadedSrc.src : null;
}
