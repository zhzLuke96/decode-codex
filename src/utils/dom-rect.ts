// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// DOM element bounds helpers, including an option to measure through CSS transforms.

export interface ElementBounds {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}

export interface ReadElementBoundsOptions {
  ignoreTransform?: boolean;
}

interface ParsedCssTransform {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
}

const DEFAULT_READ_ELEMENT_BOUNDS_OPTIONS = Object.freeze({
  ignoreTransform: false,
} satisfies ReadElementBoundsOptions);

export function readElementBounds(
  element: Element,
  options: ReadElementBoundsOptions = DEFAULT_READ_ELEMENT_BOUNDS_OPTIONS,
): ElementBounds {
  let rect = toElementBounds(element.getBoundingClientRect());

  if (options.ignoreTransform === true) {
    const view = element.ownerDocument.defaultView ?? window;
    const { transform, transformOrigin } = view.getComputedStyle(element);
    if (transform !== "" && transform !== "none") {
      rect = removeCssTransformFromRect(rect, transform, transformOrigin);
    }
  }

  return rect;
}

export function readElementBoundsIgnoringTransform(
  element: Element,
): ElementBounds {
  return readElementBounds(element, { ignoreTransform: true });
}

function removeCssTransformFromRect(
  rect: ElementBounds,
  transform: string,
  transformOrigin: string,
): ElementBounds {
  const parsedTransform = parseCssTransform(transform);
  if (parsedTransform == null) return rect;

  const { x, y, scaleX, scaleY } = parsedTransform;
  const [originXText, originYText = "0"] = transformOrigin.split(" ");
  const originX = Number.parseFloat(originXText);
  const originY = Number.parseFloat(originYText);
  const left = rect.left - x - (1 - scaleX) * originX;
  const top = rect.top - y - (1 - scaleY) * originY;
  const width = scaleX === 0 ? rect.width : rect.width / scaleX;
  const height = scaleY === 0 ? rect.height : rect.height / scaleY;

  return {
    left,
    top,
    width,
    height,
    bottom: top + height,
    right: left + width,
  };
}

function toElementBounds(rect: DOMRect): ElementBounds {
  const { top, left, width, height, bottom, right } = rect;
  return { top, left, width, height, bottom, right };
}

function parseCssTransform(transform: string): ParsedCssTransform | null {
  if (transform.startsWith("matrix3d(")) {
    const values = parseCssMatrixValues(transform, "matrix3d(");
    return values.length < 16
      ? null
      : {
          x: values[12],
          y: values[13],
          scaleX: values[0],
          scaleY: values[5],
        };
  }

  if (transform.startsWith("matrix(")) {
    const values = parseCssMatrixValues(transform, "matrix(");
    return values.length < 6
      ? null
      : {
          x: values[4],
          y: values[5],
          scaleX: values[0],
          scaleY: values[3],
        };
  }

  return null;
}

function parseCssMatrixValues(transform: string, prefix: string): number[] {
  return transform
    .slice(prefix.length, -1)
    .split(/,\s*/)
    .map((value) => Number(value));
}
