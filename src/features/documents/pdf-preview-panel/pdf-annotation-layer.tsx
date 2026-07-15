// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
import React from "react";
import type {
  LoadPdfJsRuntime,
  PdfDocumentProxyLike,
  PdfPageProxyLike,
} from "./pdf-document-loader";

export interface PdfObjectReference {
  gen: number;
  num: number;
}

export type PdfDestination = readonly unknown[];

export interface PdfAnnotationLinkNavigation {
  onExternalLink?: (url: string, event: MouseEvent) => void;
  onPageChange?: (pageNumber: number) => void;
}

export interface PdfAnnotationDocument extends PdfDocumentProxyLike {
  cachedPageNumber(reference: PdfObjectReference): number | null | undefined;
  getDestination(destinationName: string): Promise<PdfDestination | null>;
  getPageIndex(reference: PdfObjectReference): Promise<number>;
}

export interface PdfAnnotationPage extends PdfPageProxyLike {
  getAnnotations(): Promise<unknown[]>;
}

export interface PdfAnnotationLayerProps {
  deferMs: number;
  linkNavigation?: PdfAnnotationLinkNavigation | null;
  loadPdfJs: LoadPdfJsRuntime;
  page: PdfAnnotationPage;
  pageSelector: string;
  pdfDocument: PdfAnnotationDocument;
  scrollRootRef: React.MutableRefObject<HTMLElement | null>;
}

interface PdfJsAnnotationLayerRuntime {
  AnnotationLayer?: PdfJsAnnotationLayerConstructor;
}

interface PdfJsAnnotationLayerConstructor {
  new (
    options: PdfJsAnnotationLayerConstructorOptions,
  ): PdfJsAnnotationLayerRenderer;
}

interface PdfJsAnnotationLayerRenderer {
  render(
    options: PdfJsAnnotationLayerRenderOptions,
  ): Promise<unknown> | unknown;
}

interface PdfJsAnnotationLayerConstructorOptions {
  accessibilityManager: undefined;
  annotationCanvasMap: undefined;
  annotationEditorUIManager: undefined;
  annotationStorage: undefined;
  commentManager: undefined;
  div: HTMLDivElement;
  linkService: PdfAnnotationLinkService;
  page: PdfAnnotationPage;
  structTreeLayer: undefined;
  viewport: unknown;
}

interface PdfJsAnnotationLayerRenderOptions {
  annotations: unknown[];
  div: HTMLDivElement;
  linkService: PdfAnnotationLinkService;
  page: PdfAnnotationPage;
  renderForms: boolean;
  viewport: unknown;
}

export function PdfAnnotationLayer({
  deferMs,
  linkNavigation,
  loadPdfJs,
  page,
  pageSelector,
  pdfDocument,
  scrollRootRef,
}: PdfAnnotationLayerProps): React.ReactElement {
  const layerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const layerElement = layerRef.current;
    if (layerElement == null) return;

    layerElement.innerHTML = "";
    let didCancel = false;
    let renderTimeout: ReturnType<typeof setTimeout> | null = null;

    const renderAnnotationLayer = async (): Promise<void> => {
      const pdfjs = (await loadPdfJs()) as PdfJsAnnotationLayerRuntime;
      const annotations = await page.getAnnotations();
      if (didCancel || annotations.length === 0) return;

      const AnnotationLayer = pdfjs.AnnotationLayer;
      if (AnnotationLayer == null) {
        throw new Error("pdf.js AnnotationLayer export is unavailable");
      }

      const viewport = page.getViewport({ scale: 1 });
      const linkService = new PdfAnnotationLinkService({
        linkNavigation,
        pageSelector,
        pdfDocument,
        scrollRootRef,
      });
      const layer = new AnnotationLayer({
        accessibilityManager: undefined,
        annotationCanvasMap: undefined,
        annotationEditorUIManager: undefined,
        annotationStorage: undefined,
        commentManager: undefined,
        div: layerElement,
        linkService,
        page,
        structTreeLayer: undefined,
        viewport,
      });

      await layer.render({
        annotations,
        div: layerElement,
        linkService,
        page,
        renderForms: false,
        viewport,
      });
    };

    renderTimeout = setTimeout(() => {
      void renderAnnotationLayer();
    }, deferMs);

    return () => {
      didCancel = true;
      if (renderTimeout != null) clearTimeout(renderTimeout);
      layerElement.innerHTML = "";
    };
  }, [
    deferMs,
    linkNavigation,
    loadPdfJs,
    page,
    pageSelector,
    pdfDocument,
    scrollRootRef,
  ]);

  return <div ref={layerRef} className="annotationLayer" />;
}

export class PdfAnnotationLinkService {
  readonly isInPresentationMode: boolean;
  private externalLinksEnabled = true;
  private readonly linkNavigation?: PdfAnnotationLinkNavigation | null;
  private readonly pageSelector: string;
  private readonly pdfDocument: PdfAnnotationDocument;
  private readonly scrollRootRef: React.MutableRefObject<HTMLElement | null>;

  constructor({
    linkNavigation,
    pageSelector,
    pdfDocument,
    scrollRootRef,
  }: {
    linkNavigation?: PdfAnnotationLinkNavigation | null;
    pageSelector: string;
    pdfDocument: PdfAnnotationDocument;
    scrollRootRef: React.MutableRefObject<HTMLElement | null>;
  }) {
    this.isInPresentationMode = linkNavigation != null;
    this.linkNavigation = linkNavigation;
    this.pageSelector = pageSelector;
    this.pdfDocument = pdfDocument;
    this.scrollRootRef = scrollRootRef;
  }

  get pagesCount(): number {
    return this.pdfDocument.numPages;
  }

  set page(pageNumber: number) {
    this.scrollToPage(pageNumber);
  }

  get page(): number {
    return 1;
  }

  set rotation(_rotation: number) {}

  get rotation(): number {
    return 0;
  }

  set externalLinkEnabled(enabled: boolean) {
    this.externalLinksEnabled = enabled;
  }

  get externalLinkEnabled(): boolean {
    return this.externalLinksEnabled;
  }

  async goToDestination(destination: string | PdfDestination): Promise<void> {
    const resolvedDestination =
      typeof destination === "string"
        ? await this.pdfDocument.getDestination(destination)
        : destination;
    const pageNumber =
      resolvedDestination == null
        ? null
        : await this.getDestinationPageNumber(resolvedDestination);

    if (pageNumber != null) this.scrollToPage(pageNumber);
  }

  goToPage(pageNumber: number | string): void {
    const parsedPageNumber = Number(pageNumber);
    if (Number.isInteger(parsedPageNumber)) {
      this.scrollToPage(parsedPageNumber);
    }
  }

  goToXY(pageNumber: number): void {
    this.scrollToPage(pageNumber);
  }

  addLinkAttributes(linkElement: HTMLAnchorElement, url?: string | null): void {
    if (!url || !this.externalLinksEnabled) {
      linkElement.href = "";
      linkElement.onclick = null;
      return;
    }

    linkElement.href = url;
    linkElement.title = url;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer nofollow";
    if (this.linkNavigation?.onExternalLink == null) {
      linkElement.onclick = null;
      return;
    }

    linkElement.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.linkNavigation?.onExternalLink?.(url, event);
    };
  }

  getDestinationHash(destination: string): string {
    return typeof destination === "string" && destination.length > 0
      ? this.getAnchorUrl(`#${window.encodeURIComponent(destination)}`)
      : this.getAnchorUrl("");
  }

  getAnchorUrl(anchor: string): string {
    return typeof anchor === "string" ? anchor : "";
  }

  setHash(_hash: string): void {}

  executeNamedAction(_action: string): void {}

  executeSetOCGState(_state: unknown): void {}

  async getDestinationPageNumber(
    destination: PdfDestination,
  ): Promise<number | null> {
    const firstDestinationItem = destination[0];
    if (
      typeof firstDestinationItem === "number" &&
      Number.isInteger(firstDestinationItem)
    ) {
      return firstDestinationItem + 1;
    }
    if (!isPdfObjectReference(firstDestinationItem)) return null;

    const cachedPageNumber =
      this.pdfDocument.cachedPageNumber(firstDestinationItem);
    if (cachedPageNumber != null) return cachedPageNumber;

    try {
      return (await this.pdfDocument.getPageIndex(firstDestinationItem)) + 1;
    } catch {
      return null;
    }
  }

  scrollToPage(pageNumber: number): void {
    if (pageNumber < 1 || pageNumber > this.pdfDocument.numPages) return;

    if (this.linkNavigation?.onPageChange != null) {
      this.linkNavigation.onPageChange(pageNumber);
      return;
    }

    const pageElement =
      this.scrollRootRef.current?.querySelector(
        `${this.pageSelector}[data-page-number="${pageNumber}"]`,
      ) ?? null;
    pageElement?.scrollIntoView({ block: "start", inline: "nearest" });
  }
}

export function isPdfObjectReference(
  value: unknown,
): value is PdfObjectReference {
  return (
    typeof value === "object" &&
    value != null &&
    "num" in value &&
    typeof value.num === "number" &&
    "gen" in value &&
    typeof value.gen === "number"
  );
}
