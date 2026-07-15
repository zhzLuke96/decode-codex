// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File-source viewer hooks and DOM helpers.
import React from "react";
import {
  appScopeRoot,
  appScopeUnderscore,
  useAppScopeValue,
} from "../boundaries/app-scope";
import { createParametricAtom } from "../runtime/onboarding-scope-runtime";

type AppScopeStoreLike = {
  set(signal: unknown, value: unknown, key?: unknown): void;
};
type FileSourceMetrics = {
  lineHeight: number;
  spacing: number;
};
type DraftAnnotation = {
  lineNumber: number;
  side: string;
  startLine?: number;
};

export const threadDiffByPathAtom = createParametricAtom(
  appScopeRoot,
  () => null,
);
const focusedReviewPaneSignal = appScopeUnderscore(appScopeRoot, () => null);

export function useHostKey(hostId: string): string {
  return hostId;
}

export function useThreadQuery<TValue = unknown>(
  queryAtom: unknown,
  key: unknown,
): TValue {
  return useAppScopeValue<TValue>(queryAtom, key);
}

export function useReviewSearchScrollHandler(_options: {
  path: string;
}): (element: Element) => void {
  return React.useCallback(() => {}, []);
}

export function parseFileSourceMetrics(
  element: HTMLElement,
): FileSourceMetrics {
  const style = window.getComputedStyle(element);
  const lineHeight = Number.parseFloat(style.lineHeight);
  const fontSize = Number.parseFloat(style.fontSize);
  const height = element.getBoundingClientRect().height;
  return {
    lineHeight: Number.isFinite(lineHeight)
      ? lineHeight
      : height > 0
        ? height
        : Number.isFinite(fontSize)
          ? fontSize * 1.4
          : 20,
    spacing: Number.parseFloat(style.paddingTop) || 0,
  };
}

export function fileSourceMetricsEqual(
  left: FileSourceMetrics,
  right: FileSourceMetrics,
): boolean {
  return left.lineHeight === right.lineHeight && left.spacing === right.spacing;
}

export function useMeasuredSizeCallback(
  callback: (entry: ResizeObserverEntry | null, element: HTMLElement) => void,
): (element: HTMLElement | null) => void {
  const observerRef = React.useRef<ResizeObserver | null>(null);
  React.useEffect(
    () => () => {
      observerRef.current?.disconnect();
    },
    [],
  );
  return React.useCallback(
    (element) => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      if (element == null) return;
      callback(null, element);
      if (typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver((entries) => {
        callback(entries[0] ?? null, element);
      });
      observer.observe(element);
      observerRef.current = observer;
    },
    [callback],
  );
}

export function useScopedGitQuery(..._args: unknown[]): {
  data: null;
  isError: boolean;
  isLoading: boolean;
} {
  return { data: null, isError: false, isLoading: false };
}

export function prefetchCodeThemes(_themeId?: string): void {}

export function detectFileLanguage(path: string): string {
  const extension =
    path
      .split(/[./\\]/)
      .pop()
      ?.toLowerCase() ?? "";
  return (
    {
      css: "css",
      html: "html",
      js: "javascript",
      jsx: "javascript",
      json: "json",
      md: "markdown",
      py: "python",
      rb: "ruby",
      rs: "rust",
      sh: "shell",
      ts: "typescript",
      tsx: "typescript",
      yaml: "yaml",
      yml: "yaml",
    }[extension] ?? extension
  );
}

export function useReviewCommentAnnotations(_options?: unknown): {
  addDraftComment: (annotation: DraftAnnotation) => void;
  annotationKeys: Set<string>;
  annotations: DraftAnnotation[];
  renderCommentAnnotation: (annotation: unknown) => React.ReactNode;
} {
  const [annotations, setAnnotations] = React.useState<DraftAnnotation[]>([]);
  const annotationKeys = React.useMemo(
    () =>
      new Set(
        annotations.map((annotation) =>
          buildAnnotationKey(annotation.side, annotation.lineNumber),
        ),
      ),
    [annotations],
  );
  const addDraftComment = React.useCallback((annotation: DraftAnnotation) => {
    setAnnotations((current) => [...current, annotation]);
  }, []);
  return {
    addDraftComment,
    annotationKeys,
    annotations,
    renderCommentAnnotation: () => null,
  };
}

export function toLineAnnotations(annotations: unknown): unknown {
  return annotations;
}

export function buildAnnotationKey(side: string, lineNumber: number): string {
  return `${side}:${lineNumber}`;
}

export function toCommentAnnotationInput(annotation: unknown): unknown {
  return annotation;
}

export function findLineNumberFromEventPath(
  path: EventTarget[],
): number | null {
  for (const target of path) {
    if (!(target instanceof HTMLElement)) continue;
    const value =
      target.dataset.line ??
      target.getAttribute("data-line") ??
      target.getAttribute("data-line-number");
    const line = value == null ? NaN : Number(value);
    if (Number.isFinite(line)) return line;
  }
  return null;
}

export function getScrollableElement(element: Element): HTMLElement | null {
  let current: Element | null = element;
  while (current != null) {
    if (current instanceof HTMLElement) {
      const style = window.getComputedStyle(current);
      if (/(auto|scroll)/u.test(`${style.overflowY} ${style.overflowX}`)) {
        return current;
      }
      current = current.parentElement;
      continue;
    }
    const root = current.getRootNode();
    current = root instanceof ShadowRoot ? root.host : null;
  }
  return element instanceof HTMLElement ? element : null;
}

export function restoreScrollTop(
  element: HTMLElement,
  scrollTop: number,
): boolean {
  element.scrollTop = scrollTop;
  return Math.abs(element.scrollTop - scrollTop) < 1;
}

export function restoreScrollLeft(
  element: HTMLElement,
  scrollLeft: number,
): boolean {
  element.scrollLeft = scrollLeft;
  return Math.abs(element.scrollLeft - scrollLeft) < 1;
}

export function setFocusedReviewPane(
  store: AppScopeStoreLike,
  pane: string,
): void {
  store.set(focusedReviewPaneSignal, pane);
}
