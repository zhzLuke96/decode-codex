// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Leaf helpers for the workspace "file source" tab: registers a per-file search
// controller while mounted, scroll-position setters that report whether they took
// effect, the rendered code-element locator, and the loading / error / too-large
// status views.

import { useEffect } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  useStore,
  routeAtom,
  reviewSearchControllerAtom,
  focusThreadFindDomain,
  CONTENT_SAMPLE_MAX_FILE_BYTES,
} from "../boundaries/onboarding-commons-externals.facade";

export function initFileSourceHelpersChunk(): void {}

export interface FileSourceSearchRegistrationProps {
  sourceSearchSource: unknown;
}

export function FileSourceSearchRegistration({
  sourceSearchSource,
}: FileSourceSearchRegistrationProps): null {
  const store = useStore(routeAtom);
  useEffect(() => {
    const previous = store.get(reviewSearchControllerAtom);
    store.set(reviewSearchControllerAtom, sourceSearchSource);
    focusThreadFindDomain(store, "diff");
    return () => {
      if (store.get(reviewSearchControllerAtom) === sourceSearchSource) {
        store.set(reviewSearchControllerAtom, previous);
      }
    };
  }, [store, sourceSearchSource]);
  return null;
}

export function setScrollTop(
  element: HTMLElement | null,
  value: number | null,
): boolean {
  if (value == null) return true;
  if (element == null) return false;
  element.scrollTop = value;
  return element.scrollTop === value;
}

export function setScrollLeft(
  element: HTMLElement | null,
  value: number | null,
): boolean {
  if (value == null) return true;
  if (element == null) return false;
  element.scrollLeft = value;
  return element.scrollLeft === value;
}

export function getCodeElement(host: {
  shadowRoot?: ShadowRoot | null;
}): Element | null {
  return host.shadowRoot?.querySelector("[data-code]") ?? null;
}

export function formatBytes(byteCount: number): string {
  if (byteCount >= 1048576) return `${(byteCount / 1048576).toFixed(1)} MB`;
  if (byteCount >= 1024) return `${(byteCount / 1024).toFixed(1)} KB`;
  return `${byteCount} B`;
}

export interface FileTooLargeViewProps {
  sizeBytes: number;
}

export function FileTooLargeView({ sizeBytes }: FileTooLargeViewProps) {
  const limit = formatBytes(CONTENT_SAMPLE_MAX_FILE_BYTES);
  const size = formatBytes(sizeBytes);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 px-4 text-center text-sm text-token-description-foreground">
      <FormattedMessage
        id="review.fileSource.tooLarge"
        defaultMessage="File is too large to preview"
        description="Message shown when a workspace file tab blocks previewing a large file"
      />
      <span className="text-xs">
        <FormattedMessage
          id="review.fileSource.tooLargeDetail"
          defaultMessage={"{size} exceeds the {limit} preview limit"}
          description="Detail shown when a workspace file tab blocks previewing a large file"
          values={{ limit, size }}
        />
      </span>
    </div>
  );
}

export interface FileSourceStatusProps {
  isError: boolean;
  isLoading: boolean;
}

export function FileSourceStatus({
  isError,
  isLoading,
}: FileSourceStatusProps) {
  return (
    <div className="flex h-full items-center justify-center px-4 text-sm text-token-description-foreground">
      {isLoading && !isError ? (
        <FormattedMessage
          id="review.fileSource.loading"
          defaultMessage="Loading file…"
          description="Loading message shown while a workspace file tab loads file contents"
        />
      ) : (
        <FormattedMessage
          id="review.fileSource.error"
          defaultMessage="Unable to load file"
          description="Error shown when a workspace file tab cannot load file contents"
        />
      )}
    </div>
  );
}
