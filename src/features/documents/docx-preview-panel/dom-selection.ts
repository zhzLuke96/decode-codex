// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { Size } from "../../../image-side-panel/paged-annotation-overlays";

import {
  rectFromClientRects,
  rectsFromSelectionClientRects,
  selectionAskForEditAnchor,
} from "./annotation-geometry";
import type {
  DocxAnnotationAnchor,
  DocxAnnotationContentPreview,
  DocxAnnotationSelectionKind,
} from "./annotation-types";

export function readDocxTextSelectionAnchor({
  pageElement,
  pageSize,
}: {
  pageElement: HTMLElement;
  pageSize: Size;
}): DocxAnnotationAnchor | null {
  const selection = pageElement.ownerDocument.getSelection();
  if (
    selection == null ||
    selection.isCollapsed ||
    selection.rangeCount === 0 ||
    !selectionIsInsidePage(selection, pageElement)
  ) {
    return null;
  }

  const selectedText = normalizePreviewText(selection.toString());
  if (selectedText.length === 0) return null;

  const range = selection.getRangeAt(0);
  if (!pageElement.contains(range.commonAncestorContainer)) return null;

  const clientRects = Array.from(range.getClientRects());
  const rect = rectFromClientRects({
    clientRects,
    pageElement,
    pageSize,
  });
  if (rect == null) return null;

  const selectionRects = rectsFromSelectionClientRects({
    clientRects,
    pageElement,
    pageSize,
  });

  return {
    askForEditAnchor:
      selectionAskForEditAnchor({
        clientRects,
        pageElement,
        pageSize,
        selection,
      }) ?? undefined,
    contentPreview: { type: "text", text: selectedText },
    kind: "region",
    rect,
    ...(selectionRects.length <= 1 ? {} : { selectionRects }),
    selectedText,
    selectionKind: "text",
  };
}

export function readDocxElementAnnotationAnchorAtPoint({
  clientX,
  clientY,
  includePreviewMetadata,
  layerElement,
  pageElement,
  pageSize,
  selectionKindFilter,
}: {
  clientX: number;
  clientY: number;
  includePreviewMetadata: boolean;
  layerElement: Element;
  pageElement: HTMLElement;
  pageSize: Size;
  selectionKindFilter?: (selectionKind: DocxAnnotationSelectionKind) => boolean;
}): DocxAnnotationAnchor | null {
  const target = (
    pageElement.ownerDocument.elementsFromPoint?.(clientX, clientY) ?? []
  ).find(
    (element) =>
      element !== layerElement &&
      !layerElement.contains(element) &&
      pageElement.contains(element),
  );

  return target == null
    ? null
    : readDocxElementAnnotationAnchor({
        includePreviewMetadata,
        pageElement,
        pageSize,
        selectionKindFilter,
        target,
      });
}

export function readDocxElementAnnotationAnchor({
  includePreviewMetadata,
  pageElement,
  pageSize,
  selectionKindFilter,
  target,
}: {
  includePreviewMetadata: boolean;
  pageElement: HTMLElement;
  pageSize: Size;
  selectionKindFilter?: (selectionKind: DocxAnnotationSelectionKind) => boolean;
  target: Element;
}): DocxAnnotationAnchor | null {
  const hit = findAnnotatableElement(target, pageElement);
  if (
    hit == null ||
    (selectionKindFilter != null && !selectionKindFilter(hit.selectionKind))
  ) {
    return null;
  }

  const rect = rectFromClientRects({
    clientRects: [hit.element.getBoundingClientRect()],
    pageElement,
    pageSize,
  });
  if (rect == null) return null;

  const nearbyText = includePreviewMetadata
    ? textContentPreview(hit.element)
    : "";
  const contentPreview = includePreviewMetadata
    ? previewForElementSelection({
        element: hit.element,
        nearbyText,
        selectionKind: hit.selectionKind,
      })
    : null;

  return {
    askForEditAnchor:
      hit.selectionKind === "image" || hit.selectionKind === "drawing"
        ? {
            alignment: "end",
            placement: "below",
            point: { x: rect.x + rect.width, y: rect.y + rect.height },
          }
        : undefined,
    contentPreview: contentPreview ?? undefined,
    kind: "region",
    rect,
    selectionKind: hit.selectionKind,
    ...(nearbyText.length === 0 ? {} : { nearbyText }),
  };
}

export function findAnnotatableElement(
  target: Element,
  pageElement: HTMLElement,
): { element: Element; selectionKind: DocxAnnotationSelectionKind } | null {
  const image = closestMatchingElement(target, pageElement, (element) =>
    element.matches("img"),
  );
  if (image != null) return { element: image, selectionKind: "image" };

  const drawing = closestMatchingElement(target, pageElement, isDrawingElement);
  if (drawing != null) return { element: drawing, selectionKind: "drawing" };

  const table = closestMatchingElement(target, pageElement, (element) =>
    element.matches("table"),
  );
  if (table != null) return { element: table, selectionKind: "table" };

  const paragraph = closestMatchingElement(target, pageElement, (element) =>
    element.matches("p"),
  );
  return paragraph == null
    ? null
    : { element: paragraph, selectionKind: "paragraph" };
}

export function previewForElementSelection({
  element,
  nearbyText,
  selectionKind,
}: {
  element: Element;
  nearbyText: string;
  selectionKind: DocxAnnotationSelectionKind;
}): DocxAnnotationContentPreview | null {
  if (selectionKind === "image" || selectionKind === "drawing") {
    const imagePreview = imagePreviewForElement(element);
    if (imagePreview != null) return imagePreview;
  }
  return nearbyText.length === 0 ? null : { type: "text", text: nearbyText };
}

export function imagePreviewForElement(
  element: Element,
): DocxAnnotationContentPreview | null {
  const image = elementImage(element);
  if (image != null) {
    const src =
      image.currentSrc.trim() ||
      image.getAttribute("src")?.trim() ||
      image.src.trim();
    if (src) {
      const alt = image.alt.trim();
      return { type: "image", src, ...(alt.length === 0 ? {} : { alt }) };
    }
  }

  const svg = elementSvg(element);
  return svg == null
    ? null
    : {
        type: "image",
        src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          new XMLSerializer().serializeToString(svg),
        )}`,
      };
}

export function elementImage(element: Element): HTMLImageElement | null {
  return element instanceof HTMLImageElement
    ? element
    : element.querySelector("img");
}

export function elementSvg(element: Element): SVGSVGElement | null {
  return element instanceof SVGSVGElement
    ? element
    : element.querySelector("svg");
}

export function closestMatchingElement(
  target: Element,
  stopAt: Element,
  predicate: (element: Element) => boolean,
): Element | null {
  let current: Element | null = target;
  while (current != null && current !== stopAt) {
    if (predicate(current)) return current;
    current = current.parentElement;
  }
  return null;
}

export function isDrawingElement(element: Element): boolean {
  return (
    element.matches("svg") ||
    (element instanceof HTMLElement &&
      element.tagName === "DIV" &&
      element.style.display === "inline-block" &&
      element.style.position === "relative" &&
      element.querySelector("img, svg") != null)
  );
}

export function selectionIsInsidePage(
  selection: Selection,
  pageElement: Node,
): boolean {
  return (
    selection.anchorNode != null &&
    selection.focusNode != null &&
    pageElement.contains(selection.anchorNode) &&
    pageElement.contains(selection.focusNode)
  );
}

export function textContentPreview(element: Element): string {
  const chunks: string[] = [];
  collectTextContent(element, chunks);
  return normalizePreviewText(chunks.join(" "));
}

export function collectTextContent(node: Node, chunks: string[]): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = normalizePreviewText(node.textContent ?? "");
    if (text.length > 0) chunks.push(text);
    return;
  }

  for (const child of node.childNodes) {
    collectTextContent(child, chunks);
  }
}

export function normalizePreviewText(text: string): string {
  return text.replace(/\s+/g, " ").trim().slice(0, 500);
}
