// Restored from ref/.vite/build/comment-preload.js
// Hidden mirror measurement for browser sidebar form-control selections.

import { isBrowserSidebarElement } from "./element-geometry";
import type { BrowserSidebarRect } from "./geometry";
import type { BrowserSidebarSelectableFormControl } from "./form-control-selection";
import { getBrowserSidebarShadowHost } from "./text-locators";

const BROWSER_SIDEBAR_FORM_CONTROL_MIRROR_ATTRIBUTE =
  "data-browser-comment-text-selection-mirror";

const BROWSER_SIDEBAR_FORM_CONTROL_STYLE_PROPERTIES =
  "borderBottomStyle.borderBottomWidth.borderLeftStyle.borderLeftWidth.borderRightStyle.borderRightWidth.borderTopStyle.borderTopWidth.boxSizing.direction.fontFamily.fontFeatureSettings.fontKerning.fontSize.fontStretch.fontStyle.fontVariant.fontWeight.letterSpacing.lineHeight.paddingBottom.paddingLeft.paddingRight.paddingTop.tabSize.textAlign.textIndent.textTransform.wordBreak.wordSpacing".split(
    ".",
  ) as Array<keyof CSSStyleDeclaration>;

export function measureBrowserSidebarFormControlSelectionRects(
  element: BrowserSidebarSelectableFormControl,
  startOffset: number,
  endOffset: number,
): BrowserSidebarRect[] {
  const elementRect = element.getBoundingClientRect();
  if (elementRect.width <= 0 || elementRect.height <= 0) return [];

  const frameWindow = element.ownerDocument.defaultView;
  if (
    frameWindow == null ||
    hasBrowserSidebarUnsupportedSelectionTransform(element, frameWindow)
  ) {
    return [];
  }

  const style = frameWindow.getComputedStyle(element);
  const scaleX =
    element.offsetWidth > 0 ? elementRect.width / element.offsetWidth : 1;
  const scaleY =
    element.offsetHeight > 0 ? elementRect.height / element.offsetHeight : 1;
  const mirror = element.ownerDocument.createElement("div");
  mirror.setAttribute(BROWSER_SIDEBAR_FORM_CONTROL_MIRROR_ATTRIBUTE, "");
  mirror.style.position = "fixed";
  mirror.style.left = `${elementRect.left}px`;
  mirror.style.top = `${elementRect.top}px`;
  mirror.style.width = `${elementRect.width / scaleX}px`;
  mirror.style.height = `${elementRect.height / scaleY}px`;
  mirror.style.overflow = "auto";
  mirror.style.visibility = "hidden";
  mirror.style.pointerEvents = "none";
  mirror.style.whiteSpace = element.tagName === "TEXTAREA" ? "pre-wrap" : "pre";
  mirror.style.overflowWrap =
    element.tagName === "TEXTAREA" ? "break-word" : "normal";
  if (scaleX !== 1 || scaleY !== 1) {
    mirror.style.transform = `scale(${scaleX}, ${scaleY})`;
    mirror.style.transformOrigin = "top left";
  }
  for (const property of BROWSER_SIDEBAR_FORM_CONTROL_STYLE_PROPERTIES) {
    mirror.style[property] = style[property];
  }
  mirror.style.boxSizing = "border-box";
  mirror.append(element.value.slice(0, startOffset));

  const selectedSpan = element.ownerDocument.createElement("span");
  selectedSpan.textContent =
    element.value.slice(startOffset, endOffset) || "\u200b";
  mirror.append(selectedSpan, element.value.slice(endOffset));
  element.ownerDocument.body.append(mirror);
  mirror.scrollLeft = element.scrollLeft;
  mirror.scrollTop = element.scrollTop;

  const selectionRects = Array.from(
    selectedSpan.getClientRects().length > 1_000
      ? []
      : selectedSpan.getClientRects(),
  )
    .map((rect) => clipBrowserSidebarRectToBounds(rect, elementRect))
    .filter((rect): rect is BrowserSidebarRect => rect != null);
  mirror.remove();
  return selectionRects;
}

export function isBrowserSidebarOwnSelectionMirrorMutation(
  mutationRecord: MutationRecord,
): boolean {
  if (mutationRecord.type !== "childList") return false;

  const changedNodes = [
    ...Array.from(mutationRecord.addedNodes),
    ...Array.from(mutationRecord.removedNodes),
  ];
  return (
    changedNodes.length > 0 &&
    changedNodes.every(
      (node) =>
        isBrowserSidebarElement(node) &&
        node.hasAttribute(BROWSER_SIDEBAR_FORM_CONTROL_MIRROR_ATTRIBUTE),
    )
  );
}

function hasBrowserSidebarUnsupportedSelectionTransform(
  element: Element,
  frameWindow: Window,
): boolean {
  let currentElement: Element | null = element;
  while (currentElement != null) {
    const style = frameWindow.getComputedStyle(currentElement);
    const transform = style.transform;
    if (transform !== "" && transform !== "none") {
      const matrixMatch = /^matrix\(([^)]+)\)$/.exec(transform);
      if (matrixMatch == null) return true;
      const matrixValues = matrixMatch[1]?.split(",").map(Number);
      if (
        matrixValues == null ||
        matrixValues.length !== 6 ||
        Math.abs(matrixValues[1] ?? 0) > 1e-6 ||
        Math.abs(matrixValues[2] ?? 0) > 1e-6
      ) {
        return true;
      }
    }

    const rotate = style.getPropertyValue("rotate");
    if (rotate !== "" && rotate !== "none" && rotate !== "0deg") return true;
    currentElement =
      currentElement.parentElement ??
      getBrowserSidebarShadowHost(currentElement.getRootNode());
  }

  return false;
}

function clipBrowserSidebarRectToBounds(
  rect: DOMRect,
  bounds: DOMRect,
): BrowserSidebarRect | null {
  const left = Math.max(rect.left, bounds.left);
  const top = Math.max(rect.top, bounds.top);
  const right = Math.min(rect.right, bounds.right);
  const bottom = Math.min(rect.bottom, bounds.bottom);

  return right <= left || bottom <= top
    ? null
    : {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top,
      };
}
