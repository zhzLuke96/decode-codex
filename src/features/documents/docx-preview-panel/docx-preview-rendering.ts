// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
import type { Size } from "../../../image-side-panel/paged-annotation-overlays";

export const DOCX_PREVIEW_CLASS = "codex-docx-preview";
export const DOCX_PREVIEW_SCROLL_CLASS =
  "h-full min-h-0 overflow-auto bg-token-side-bar-background overscroll-contain";
export const DEFAULT_DOCX_ZOOM_PERCENT = 75;
export const DOCX_PAGE_SCROLL_SETTLE_FRAMES = 12;
export const DOCX_PAGE_SELECTOR = `section.${DOCX_PREVIEW_CLASS}`;
export const DEFAULT_DOCX_PREVIEW_BOTTOM_PADDING =
  "var(--right-panel-composer-overlay-reserve, 1.5rem)";

export const DOCX_PREVIEW_STYLE_TEXT = createDocxPreviewStyleText();

export function createDocxPreviewStyleText(
  bottomPadding: string = DEFAULT_DOCX_PREVIEW_BOTTOM_PADDING,
): string {
  return `
  .${DOCX_PREVIEW_CLASS}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${bottomPadding};
    background: var(--color-token-side-bar-background) !important;
  }

  .${DOCX_PREVIEW_CLASS}-wrapper > section.${DOCX_PREVIEW_CLASS} {
    margin: 0 !important;
    border: 1px solid var(--color-token-border-default);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
    position: relative;
    overflow: hidden;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${DOCX_PREVIEW_CLASS}-wrapper > section.${DOCX_PREVIEW_CLASS} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${DOCX_PREVIEW_CLASS} [data-paged-annotation-ask-for-edit="true"],
  .${DOCX_PREVIEW_CLASS} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${DOCX_PREVIEW_CLASS} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${DOCX_PREVIEW_CLASS} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`;
}

export type DocxRenderAsync = (
  bytes: Blob | BufferSource,
  bodyContainer: HTMLElement,
  styleContainer: HTMLElement,
  options: {
    className: string;
    renderAltChunks: boolean;
    useBase64URL: boolean;
  },
) => Promise<unknown>;

export async function renderDocxPreview({
  bytes,
  bodyContainer,
  renderAsync,
  styleContainer,
  styleText = DOCX_PREVIEW_STYLE_TEXT,
}: {
  bytes: Blob | BufferSource;
  bodyContainer: HTMLElement;
  renderAsync: DocxRenderAsync;
  styleContainer: HTMLElement;
  styleText?: string;
}): Promise<boolean> {
  try {
    await renderAsync(bytes, bodyContainer, styleContainer, {
      className: DOCX_PREVIEW_CLASS,
      renderAltChunks: false,
      useBase64URL: true,
    });
    injectDocxPreviewStyle(styleContainer, styleText);
    return true;
  } catch {
    return false;
  }
}

export function clearDocxPreviewContainers({
  bodyContainer,
  styleContainer,
}: {
  bodyContainer: HTMLElement;
  styleContainer: HTMLElement;
}): void {
  bodyContainer.replaceChildren();
  styleContainer.replaceChildren();
}

export function docxTitleFromPath(path: string): string {
  return path.replace(/\.docx$/i, "");
}

export function fitDocxPreviewToWidth({
  bodyContainer,
  bodyContainerWidth,
  normalizeZoomPercent = (value) => value,
  zoomPercent,
}: {
  bodyContainer: HTMLElement | null;
  bodyContainerWidth: number | null;
  normalizeZoomPercent?: (zoomPercent: number) => number;
  zoomPercent: number;
}): number | null {
  if (bodyContainer == null) return null;
  const pageElement =
    bodyContainer.querySelector<HTMLElement>(DOCX_PAGE_SELECTOR);
  if (pageElement == null) return null;

  const wrapper = pageElement.parentElement ?? bodyContainer;
  const wrapperStyle = window.getComputedStyle(wrapper);
  const horizontalPadding =
    Number.parseFloat(wrapperStyle.paddingLeft) +
    Number.parseFloat(wrapperStyle.paddingRight);
  const availableWidth = Math.max(
    1,
    ((bodyContainerWidth ?? wrapper.clientWidth) || bodyContainer.clientWidth) -
      (Number.isFinite(horizontalPadding) ? horizontalPadding : 0),
  );
  const declaredPageWidth = Number.parseFloat(
    window.getComputedStyle(pageElement).width,
  );
  const pageWidth =
    declaredPageWidth > 0
      ? declaredPageWidth
      : pageElement.getBoundingClientRect().width /
        Math.max(zoomPercent / 100, 2 ** -52);

  return !Number.isFinite(pageWidth) || pageWidth <= 0
    ? null
    : normalizeZoomPercent(Math.round((availableWidth / pageWidth) * 100));
}

export function docxPageElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(DOCX_PAGE_SELECTOR),
  );
}

export function scrollToDocxPage({
  animationFrameRef,
  container,
  pageNumber,
  zoomScale,
}: {
  animationFrameRef: { current: number | null };
  container: HTMLElement;
  pageNumber: number;
  zoomScale: number;
}): boolean {
  if (!Number.isInteger(pageNumber) || pageNumber < 1) return false;
  const pageElement = docxPageElements(container)[pageNumber - 1];
  if (pageElement == null) return false;

  if (animationFrameRef.current != null) {
    window.cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
  }

  let remainingFrames = DOCX_PAGE_SCROLL_SETTLE_FRAMES;
  const scroll = () => {
    const containerBounds = container.getBoundingClientRect();
    const pageBounds = pageElement.getBoundingClientRect();
    const top =
      container.scrollTop +
      (pageBounds.top - containerBounds.top) / Math.max(zoomScale, 2 ** -52);
    container.scrollTo({ top });

    remainingFrames -= 1;
    if (remainingFrames > 0) {
      animationFrameRef.current = window.requestAnimationFrame(scroll);
      return;
    }
    animationFrameRef.current = null;
  };

  animationFrameRef.current = window.requestAnimationFrame(scroll);
  return true;
}

export function centeredDocxPageElement(
  container: HTMLElement | null,
): HTMLElement | null {
  if (container == null) return null;
  const pageElements = docxPageElements(container);
  if (pageElements.length === 0) return null;

  const containerBounds = container.getBoundingClientRect();
  const containerCenterY = containerBounds.top + containerBounds.height / 2;
  let closestPage = pageElements[0] ?? null;
  let closestDistance = Infinity;

  for (const pageElement of pageElements) {
    const pageBounds = pageElement.getBoundingClientRect();
    const pageCenterY = pageBounds.top + pageBounds.height / 2;
    const distance = Math.abs(pageCenterY - containerCenterY);
    if (distance < closestDistance) {
      closestPage = pageElement;
      closestDistance = distance;
    }
  }

  return closestPage;
}

export function measureDocxPage(
  pageElement: HTMLElement,
  zoomPercent: number,
): Size {
  const computedStyle = window.getComputedStyle(pageElement);
  const width = Number.parseFloat(computedStyle.width);
  const height = Number.parseFloat(computedStyle.height);
  const bounds = pageElement.getBoundingClientRect();
  const zoomScale = Math.max(zoomPercent / 100, 2 ** -52);

  return {
    height:
      Number.isFinite(height) && height > 0
        ? height
        : bounds.height / zoomScale,
    width:
      Number.isFinite(width) && width > 0 ? width : bounds.width / zoomScale,
  };
}

export function injectDocxPreviewStyle(
  styleContainer: HTMLElement,
  styleText: string = DOCX_PREVIEW_STYLE_TEXT,
): void {
  const styleElement = document.createElement("style");
  styleElement.textContent = styleText;
  styleContainer.appendChild(styleElement);
}
