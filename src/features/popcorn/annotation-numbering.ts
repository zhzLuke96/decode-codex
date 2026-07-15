// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
export interface PopcornWorkbookAnnotationTarget {
  sheetName: string;
  type: "workbook-range" | "workbook-floating-element";
}

export interface PopcornPresentationAnnotationTarget {
  slideId: string;
  type: "presentation-element-selection" | "presentation-region";
}

export type PopcornAnnotationTarget =
  | PopcornWorkbookAnnotationTarget
  | PopcornPresentationAnnotationTarget
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>;

export interface PopcornNumberedAnnotation {
  annotationNumber: number;
  target: PopcornAnnotationTarget;
}

export function getPopcornAnnotationTargetKey(
  target: PopcornAnnotationTarget,
): PopcornAnnotationTarget | string {
  if (target == null || typeof target !== "object") return target;

  switch (target.type) {
    case "workbook-range":
    case "workbook-floating-element":
      return `workbook:${target.sheetName}`;
    case "presentation-element-selection":
    case "presentation-region":
      return `presentation:${target.slideId}`;
    default:
      return target;
  }
}

export function getNextPopcornAnnotationNumber(
  annotations: readonly PopcornNumberedAnnotation[],
  target: PopcornAnnotationTarget,
): number {
  const targetKey = getPopcornAnnotationTargetKey(target);
  const usedNumbers = new Set(
    annotations
      .filter(
        (annotation) =>
          getPopcornAnnotationTargetKey(annotation.target) === targetKey,
      )
      .map((annotation) => annotation.annotationNumber)
      .filter((annotationNumber) => annotationNumber > 0),
  );

  let nextAnnotationNumber = 1;
  while (usedNumbers.has(nextAnnotationNumber)) {
    nextAnnotationNumber += 1;
  }
  return nextAnnotationNumber;
}
