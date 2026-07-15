// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import React from "react";
import type { CSSProperties, RefCallback } from "react";

import {
  centeredDocxPageElement,
  clearDocxPreviewContainers,
  DEFAULT_DOCX_ZOOM_PERCENT,
  docxPageElements,
  type DocxRenderAsync,
  fitDocxPreviewToWidth,
  renderDocxPreview,
  scrollToDocxPage,
} from "./docx-preview-rendering";

export type DocxPreviewLoadState = "loading" | "ready" | "error";

export interface UseDocxPreviewRenderStateOptions {
  bodyContainerElementRef?: React.MutableRefObject<HTMLElement | null>;
  bytes: Blob | BufferSource;
  onPagesRendered: (bodyContainer: HTMLElement) => void;
  renderAsync: DocxRenderAsync | null;
  styleText: string;
}

export interface DocxPreviewRenderState {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  bodyContainerRef: RefCallback<HTMLElement>;
  loadState: DocxPreviewLoadState;
  pageElements: HTMLElement[];
  styleContainerRef: RefCallback<HTMLElement>;
  totalPages: number;
}

export type DocxPreviewZoomMode =
  | { kind: "fit-width" }
  | { kind: "percentage"; zoomPercent: number };

export interface DocxResizeObserverEntry {
  contentRect: {
    width: number;
  };
}

export type UseDocxResizeObserverRef = (
  onResize: (entry: DocxResizeObserverEntry) => void,
) => RefCallback<HTMLElement>;

export type NormalizeZoomPercent = (zoomPercent: number) => number;

export interface DocxPinchZoomInput {
  initialDistance: number;
  initialZoomPercent: number;
  nextDistance: number;
}

export type ComputePinchZoomPercent = (input: DocxPinchZoomInput) => number;

export type ComputeWheelZoomPercent = (
  currentZoomPercent: number,
  deltaY: number,
) => number;

export type MeasureTouchDistance = (
  startClientX: number,
  startClientY: number,
  endClientX: number,
  endClientY: number,
) => number;

export interface UseDocxPreviewZoomOptions {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  computePinchZoomPercent: ComputePinchZoomPercent;
  computeWheelZoomPercent: ComputeWheelZoomPercent;
  defaultZoomPercent?: number;
  measureTouchDistance: MeasureTouchDistance;
  normalizeZoomPercent: NormalizeZoomPercent;
  useResizeObserverRef: UseDocxResizeObserverRef;
}

export interface DocxPreviewZoomState {
  fitToWidth: () => void;
  handleTouchCancel: () => void;
  handleTouchEnd: () => void;
  handleTouchMove: React.TouchEventHandler<HTMLElement>;
  handleTouchStart: React.TouchEventHandler<HTMLElement>;
  handleWheel: React.WheelEventHandler<HTMLElement>;
  isZoomToFitSelected: boolean;
  previewStyle: CSSProperties & {
    "--codex-docx-preview-zoom": string;
  };
  resizeRef: RefCallback<HTMLElement>;
  setZoomPercent: (zoomPercent: number) => void;
  zoomPercent: number;
}

export interface UseDocxPageNavigationOptions {
  bodyContainerElementRef?: React.MutableRefObject<HTMLElement | null>;
  zoomScale: number;
}

export interface DocxPageNavigation {
  bodyContainerElementRef: React.MutableRefObject<HTMLElement | null>;
  cancelPageScroll: () => void;
  flushPendingPageScroll: (bodyContainer: HTMLElement) => void;
  navigateToPage: (pageNumber: number) => void;
}

interface ActivePinchZoom {
  distance: number;
  zoomPercent: number;
}

export function useDocxPreviewRenderState({
  bodyContainerElementRef: providedBodyContainerElementRef,
  bytes,
  onPagesRendered,
  renderAsync,
  styleText,
}: UseDocxPreviewRenderStateOptions): DocxPreviewRenderState {
  const ownedBodyContainerElementRef = React.useRef<HTMLElement | null>(null);
  const bodyContainerElementRef =
    providedBodyContainerElementRef ?? ownedBodyContainerElementRef;
  const styleContainerElementRef = React.useRef<HTMLElement | null>(null);
  const renderGenerationRef = React.useRef(0);
  const isRenderingRef = React.useRef(false);
  const [loadState, setLoadState] = React.useState<DocxPreviewLoadState>(
    renderAsync == null ? "error" : "loading",
  );
  const [pageElements, setPageElements] = React.useState<HTMLElement[]>(
    () => [],
  );
  const [totalPages, setTotalPages] = React.useState(0);

  const clearPreview = React.useCallback((): void => {
    const bodyContainer = bodyContainerElementRef.current;
    const styleContainer = styleContainerElementRef.current;
    if (bodyContainer == null || styleContainer == null) return;

    clearDocxPreviewContainers({ bodyContainer, styleContainer });
    setPageElements([]);
    setTotalPages(0);
  }, [bodyContainerElementRef]);

  const renderPreview = React.useCallback((): void => {
    const bodyContainer = bodyContainerElementRef.current;
    const styleContainer = styleContainerElementRef.current;
    if (
      bodyContainer == null ||
      styleContainer == null ||
      isRenderingRef.current
    ) {
      return;
    }

    isRenderingRef.current = true;
    clearPreview();
    if (renderAsync == null) {
      setLoadState("error");
      return;
    }

    const generation = renderGenerationRef.current + 1;
    renderGenerationRef.current = generation;
    setLoadState("loading");
    void renderDocxPreview({
      bytes,
      bodyContainer,
      renderAsync,
      styleContainer,
      styleText,
    }).then((didRender) => {
      if (renderGenerationRef.current !== generation) return;
      if (!didRender) {
        clearDocxPreviewContainers({ bodyContainer, styleContainer });
        setLoadState("error");
        return;
      }

      const nextPageElements = docxPageElements(bodyContainer);
      setPageElements(nextPageElements);
      setTotalPages(Math.max(nextPageElements.length, 1));
      setLoadState("ready");
      onPagesRendered(bodyContainer);
    });
  }, [
    bodyContainerElementRef,
    bytes,
    clearPreview,
    onPagesRendered,
    renderAsync,
    styleText,
  ]);

  const resetRender = React.useCallback((): void => {
    renderGenerationRef.current += 1;
    isRenderingRef.current = false;
    clearPreview();
  }, [clearPreview]);

  const bodyContainerRef = React.useCallback<RefCallback<HTMLElement>>(
    (bodyContainer) => {
      if (bodyContainer == null) {
        resetRender();
        bodyContainerElementRef.current = null;
        return;
      }

      bodyContainerElementRef.current = bodyContainer;
      renderPreview();
    },
    [bodyContainerElementRef, renderPreview, resetRender],
  );

  const styleContainerRef = React.useCallback<RefCallback<HTMLElement>>(
    (styleContainer) => {
      if (styleContainer == null) {
        resetRender();
        styleContainerElementRef.current = null;
        return;
      }

      styleContainerElementRef.current = styleContainer;
      renderPreview();
    },
    [renderPreview, resetRender],
  );

  return {
    bodyContainerElementRef,
    bodyContainerRef,
    loadState,
    pageElements,
    styleContainerRef,
    totalPages,
  };
}

export function useDocxPageNavigation({
  bodyContainerElementRef: providedBodyContainerElementRef,
  zoomScale,
}: UseDocxPageNavigationOptions): DocxPageNavigation {
  const ownedBodyContainerElementRef = React.useRef<HTMLElement | null>(null);
  const bodyContainerElementRef =
    providedBodyContainerElementRef ?? ownedBodyContainerElementRef;
  const pendingPageNumberRef = React.useRef<number | null>(null);
  const scrollAnimationFrameRef = React.useRef<number | null>(null);

  const cancelPageScroll = React.useCallback((): void => {
    if (scrollAnimationFrameRef.current == null) return;

    window.cancelAnimationFrame(scrollAnimationFrameRef.current);
    scrollAnimationFrameRef.current = null;
  }, []);

  const navigateToPage = React.useCallback(
    (pageNumber: number): void => {
      const bodyContainer = bodyContainerElementRef.current;
      if (
        bodyContainer == null ||
        !scrollToDocxPage({
          animationFrameRef: scrollAnimationFrameRef,
          container: bodyContainer,
          pageNumber,
          zoomScale,
        })
      ) {
        pendingPageNumberRef.current = pageNumber;
        return;
      }

      pendingPageNumberRef.current = null;
    },
    [bodyContainerElementRef, zoomScale],
  );

  const flushPendingPageScroll = React.useCallback(
    (bodyContainer: HTMLElement): void => {
      const pendingPageNumber = pendingPageNumberRef.current;
      if (pendingPageNumber == null) return;

      if (
        scrollToDocxPage({
          animationFrameRef: scrollAnimationFrameRef,
          container: bodyContainer,
          pageNumber: pendingPageNumber,
          zoomScale,
        })
      ) {
        pendingPageNumberRef.current = null;
      }
    },
    [zoomScale],
  );

  return {
    bodyContainerElementRef,
    cancelPageScroll,
    flushPendingPageScroll,
    navigateToPage,
  };
}

export function useDocxPreviewZoom({
  bodyContainerElementRef,
  computePinchZoomPercent,
  computeWheelZoomPercent,
  defaultZoomPercent = DEFAULT_DOCX_ZOOM_PERCENT,
  measureTouchDistance,
  normalizeZoomPercent,
  useResizeObserverRef,
}: UseDocxPreviewZoomOptions): DocxPreviewZoomState {
  const activePinchRef = React.useRef<ActivePinchZoom | null>(null);
  const [bodyContainerWidth, setBodyContainerWidth] = React.useState<
    number | null
  >(null);
  const [zoomMode, setZoomMode] = React.useState<DocxPreviewZoomMode>({
    kind: "fit-width",
  });

  const zoomPercent =
    zoomMode.kind === "fit-width"
      ? (fitDocxPreviewToWidth({
          bodyContainer: bodyContainerElementRef.current,
          bodyContainerWidth,
          normalizeZoomPercent,
          zoomPercent: defaultZoomPercent,
        }) ?? defaultZoomPercent)
      : zoomMode.zoomPercent;

  const resizeRef = useResizeObserverRef(
    React.useCallback((entry: DocxResizeObserverEntry): void => {
      const nextWidth = Math.floor(entry.contentRect.width);
      setBodyContainerWidth((previousWidth) =>
        previousWidth === nextWidth ? previousWidth : nextWidth,
      );
    }, []),
  );

  const clearActivePinch = React.useCallback((): void => {
    activePinchRef.current = null;
  }, []);

  const setZoomPercent = React.useCallback(
    (nextZoomPercent: number): void => {
      setZoomMode({
        kind: "percentage",
        zoomPercent: normalizeZoomPercent(nextZoomPercent),
      });
    },
    [normalizeZoomPercent],
  );

  const fitToWidth = React.useCallback((): void => {
    const centeredPage =
      zoomMode.kind === "fit-width"
        ? null
        : centeredDocxPageElement(bodyContainerElementRef.current);
    const nextZoomPercent = fitDocxPreviewToWidth({
      bodyContainer: bodyContainerElementRef.current,
      bodyContainerWidth,
      normalizeZoomPercent,
      zoomPercent,
    });
    if (nextZoomPercent == null) return;

    setZoomMode({ kind: "fit-width" });
    if (centeredPage != null) {
      window.requestAnimationFrame(() => {
        centeredPage.scrollIntoView({ block: "center", inline: "center" });
      });
    }
  }, [
    bodyContainerElementRef,
    bodyContainerWidth,
    normalizeZoomPercent,
    zoomMode.kind,
    zoomPercent,
  ]);

  const handleTouchMove = React.useCallback<
    React.TouchEventHandler<HTMLElement>
  >(
    (event) => {
      const activePinch = activePinchRef.current;
      if (event.touches.length !== 2 || activePinch == null) return;

      event.preventDefault();
      const nextDistance = measureTouchDistance(
        event.touches[0].clientX,
        event.touches[0].clientY,
        event.touches[1].clientX,
        event.touches[1].clientY,
      );
      if (nextDistance <= 0 || activePinch.distance <= 0) return;

      setZoomMode({
        kind: "percentage",
        zoomPercent: computePinchZoomPercent({
          initialDistance: activePinch.distance,
          initialZoomPercent: activePinch.zoomPercent,
          nextDistance,
        }),
      });
    },
    [computePinchZoomPercent, measureTouchDistance],
  );

  const handleTouchStart = React.useCallback<
    React.TouchEventHandler<HTMLElement>
  >(
    (event) => {
      if (event.touches.length !== 2) {
        clearActivePinch();
        return;
      }

      event.preventDefault();
      activePinchRef.current = {
        distance: measureTouchDistance(
          event.touches[0].clientX,
          event.touches[0].clientY,
          event.touches[1].clientX,
          event.touches[1].clientY,
        ),
        zoomPercent,
      };
    },
    [clearActivePinch, measureTouchDistance, zoomPercent],
  );

  const handleWheel = React.useCallback<React.WheelEventHandler<HTMLElement>>(
    (event) => {
      if (!event.ctrlKey) return;

      event.preventDefault();
      setZoomMode((currentMode) => ({
        kind: "percentage",
        zoomPercent: computeWheelZoomPercent(
          currentMode.kind === "percentage"
            ? currentMode.zoomPercent
            : zoomPercent,
          event.deltaY,
        ),
      }));
    },
    [computeWheelZoomPercent, zoomPercent],
  );

  const previewStyle = React.useMemo<
    DocxPreviewZoomState["previewStyle"]
  >(() => {
    return { "--codex-docx-preview-zoom": `${zoomPercent / 100}` };
  }, [zoomPercent]);

  return {
    fitToWidth,
    handleTouchCancel: clearActivePinch,
    handleTouchEnd: clearActivePinch,
    handleTouchMove,
    handleTouchStart,
    handleWheel,
    isZoomToFitSelected: zoomMode.kind === "fit-width",
    previewStyle,
    resizeRef,
    setZoomPercent,
    zoomPercent,
  };
}
