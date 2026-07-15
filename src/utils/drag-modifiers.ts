// Restored from ref/webview/assets/modifiers.esm-BFjb-QXg.js
// modifiers.esm-BFjb-QXg chunk restored from the Codex webview bundle.
type Transform = {
  x: number;
  y: number;
  [key: string]: unknown;
};

type Rect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
};

type ModifierArgs = {
  draggingNodeRect?: Rect | null;
  scrollableAncestorRects: Rect[];
  transform: Transform;
};

export const restrictToVerticalAxis = ({
  transform,
}: ModifierArgs): Transform => ({
  ...transform,
  y: 0,
});

export const restrictToHorizontalAxis = ({
  transform,
}: ModifierArgs): Transform => ({
  ...transform,
  x: 0,
});

export const restrictToFirstScrollableAncestor = ({
  draggingNodeRect,
  transform,
  scrollableAncestorRects,
}: ModifierArgs): Transform => {
  const firstScrollableAncestorRect = scrollableAncestorRects[0];
  return !draggingNodeRect || !firstScrollableAncestorRect
    ? transform
    : restrictToBoundingRect(
        transform,
        draggingNodeRect,
        firstScrollableAncestorRect,
      );
};

function restrictToBoundingRect(
  transform: Transform,
  rect: Rect,
  boundingRect: Rect,
): Transform {
  const nextTransform = {
    ...transform,
  };
  if (rect.top + transform.y <= boundingRect.top) {
    nextTransform.y = boundingRect.top - rect.top;
  } else if (
    rect.bottom + transform.y >=
    boundingRect.top + boundingRect.height
  ) {
    nextTransform.y = boundingRect.top + boundingRect.height - rect.bottom;
  }
  if (rect.left + transform.x <= boundingRect.left) {
    nextTransform.x = boundingRect.left - rect.left;
  } else if (
    rect.right + transform.x >=
    boundingRect.left + boundingRect.width
  ) {
    nextTransform.x = boundingRect.left + boundingRect.width - rect.right;
  }
  return nextTransform;
}
