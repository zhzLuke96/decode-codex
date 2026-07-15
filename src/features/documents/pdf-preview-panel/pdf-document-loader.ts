// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
import React from "react";

export type PdfPreviewLoadState = "loading" | "ready" | "error";

export interface PdfPageViewportSize {
  height: number;
  width: number;
}

export interface PdfPageProxyLike {
  getViewport(options: { scale: number }): PdfPageViewportSize;
}

export interface PdfDocumentProxyLike {
  destroy(): Promise<void> | void;
  getPage(pageNumber: number): Promise<PdfPageProxyLike>;
  numPages: number;
}

export interface PdfLoadingTaskLike {
  destroyed?: boolean;
  destroy(): Promise<void> | void;
  promise: Promise<PdfDocumentProxyLike>;
}

export interface PdfJsRuntimeLike {
  getDocument(options: { data: Uint8Array }): PdfLoadingTaskLike;
}

export type LoadPdfJsRuntime = () => Promise<PdfJsRuntimeLike>;

export interface UsePdfDocumentLoaderOptions {
  fileDataUrl: string;
  loadPdfJs: LoadPdfJsRuntime;
}

export interface PdfDocumentLoaderState {
  loadedFileDataUrl: string | null;
  loadState: PdfPreviewLoadState;
  numPages: number;
  pageViewportSize: PdfPageViewportSize | null;
  pdfDocument: PdfDocumentProxyLike | null;
}

export function usePdfDocumentLoader({
  fileDataUrl,
  loadPdfJs,
}: UsePdfDocumentLoaderOptions): PdfDocumentLoaderState {
  const [loadedFileDataUrl, setLoadedFileDataUrl] = React.useState<
    string | null
  >(null);
  const [loadState, setLoadState] =
    React.useState<PdfPreviewLoadState>("loading");
  const [numPages, setNumPages] = React.useState(0);
  const [pageViewportSize, setPageViewportSize] =
    React.useState<PdfPageViewportSize | null>(null);
  const [pdfDocument, setPdfDocument] =
    React.useState<PdfDocumentProxyLike | null>(null);

  React.useEffect(() => {
    let didCancel = false;
    let loadingTask: PdfLoadingTaskLike | null = null;

    setLoadedFileDataUrl(null);
    setLoadState("loading");
    setNumPages(0);
    setPageViewportSize(null);
    setPdfDocument(null);

    void (async () => {
      try {
        const pdfjs = await loadPdfJs();
        if (didCancel) return;

        const pdfData = decodePdfDataUrl(fileDataUrl);
        if (pdfData == null) {
          setLoadState("error");
          return;
        }

        loadingTask = pdfjs.getDocument({ data: pdfData });
        const document = await loadingTask.promise;
        const firstPageViewport = (await document.getPage(1)).getViewport({
          scale: 1,
        });

        if (didCancel) {
          void document.destroy();
          return;
        }

        setPdfDocument(document);
        setLoadedFileDataUrl(fileDataUrl);
        setNumPages(Math.max(document.numPages, 1));
        setPageViewportSize({
          height: firstPageViewport.height,
          width: firstPageViewport.width,
        });
        setLoadState("ready");
      } catch {
        if (didCancel) return;

        setPdfDocument(null);
        setLoadedFileDataUrl(null);
        setNumPages(0);
        setPageViewportSize(null);
        setLoadState("error");
      }
    })();

    return () => {
      didCancel = true;
      if (loadingTask != null && !loadingTask.destroyed) {
        void loadingTask.destroy();
      }
    };
  }, [fileDataUrl, loadPdfJs]);

  return {
    loadedFileDataUrl,
    loadState,
    numPages,
    pageViewportSize,
    pdfDocument,
  };
}

export function decodePdfDataUrl(fileDataUrl: string): Uint8Array | null {
  const base64PrefixIndex = fileDataUrl.indexOf("base64,");
  if (!fileDataUrl.startsWith("data:") || base64PrefixIndex < 0) return null;

  let binaryContents: string;
  try {
    binaryContents = window.atob(fileDataUrl.slice(base64PrefixIndex + 7));
  } catch {
    return null;
  }

  const bytes = new Uint8Array(binaryContents.length);
  for (let index = 0; index < binaryContents.length; index += 1) {
    bytes[index] = binaryContents.charCodeAt(index);
  }
  return bytes;
}
