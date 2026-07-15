// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Preview surface for a browser sidebar comment overlay session.

import { useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import {
  COMMENT_SURFACE_STYLE_VARS,
  PREVIEW_INNER_CLASS,
  PREVIEW_TEXT_CLASS,
} from "./browser-comment-overlay-constants";
import { DesignAdjustIcon } from "./browser-comment-overlay-components";
import {
  countDesignAdjustments,
  previewAlignmentClass,
  renderPreviewSegments,
  resolvePreviewText,
} from "./browser-comment-overlay-helpers";
import type {
  BrowserCommentSession,
  BrowserSidebarCommentOverlayProps,
} from "./browser-comment-overlay-types";

export type BrowserCommentPreviewProps = {
  session: BrowserCommentSession;
  showAdjustEntry: boolean;
  windowHeight: number;
  onMounted: BrowserSidebarCommentOverlayProps["onMounted"];
};

export function BrowserCommentPreview({
  session,
  showAdjustEntry,
  windowHeight,
  onMounted,
}: BrowserCommentPreviewProps) {
  const intl = useIntl();
  const previewText = resolvePreviewText(session);
  const designChange = showAdjustEntry ? (session.designChange ?? null) : null;
  const hasDesignChange = designChange != null;
  const fallbackText =
    previewText.length > 0
      ? previewText
      : hasDesignChange
        ? intl.formatMessage(
            {
              id: "browserSidebarCommentOverlay.previewTweaksCount",
              defaultMessage:
                "{count, plural, one {# adjustment} other {# adjustments}}",
              description:
                "Fallback preview text for a browser sidebar annotation that only includes design adjustments",
            },
            { count: countDesignAdjustments(designChange) },
          )
        : "";
  const isMultiline = /\r?\n/.test(fallbackText);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const lastSizeRef = useRef<{ width: number; height: number } | null>(null);

  const measure = () => {
    const node = measureRef.current;
    if (node == null) return;
    const rect = node.getBoundingClientRect();
    const size = {
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    };
    const last = lastSizeRef.current;
    if (last?.width === size.width && last?.height === size.height) return;
    lastSizeRef.current = size;
    onMounted(session.sessionId, size);
  };
  useLayoutEffect(measure, [
    onMounted,
    fallbackText,
    session.sessionId,
    hasDesignChange,
    windowHeight,
  ]);

  const tweakIcon = hasDesignChange ? (
    <span
      aria-hidden="true"
      data-testid="annotation-comment-preview-tweak-icon"
      className="flex shrink-0 items-center justify-center pt-0.5 text-token-description-foreground"
    >
      <DesignAdjustIcon className="icon-sm" />
    </span>
  ) : null;

  return (
    <div
      className="pointer-events-none flex h-full w-full overflow-visible bg-transparent text-token-foreground"
      style={COMMENT_SURFACE_STYLE_VARS}
    >
      <div
        className={clsx(
          "flex h-full w-full",
          previewAlignmentClass(session.previewAlignment),
        )}
      >
        <div
          ref={measureRef}
          className={clsx(
            PREVIEW_INNER_CLASS,
            isMultiline ? "items-start py-2" : "items-center",
          )}
          style={{ height: windowHeight }}
        >
          <div
            className={clsx(
              "flex min-w-0 gap-2",
              isMultiline ? "items-start" : "items-center",
            )}
          >
            {tweakIcon}
            <div
              className={clsx(
                PREVIEW_TEXT_CLASS,
                isMultiline
                  ? "overflow-hidden whitespace-pre-wrap break-words"
                  : "overflow-hidden text-ellipsis whitespace-nowrap",
              )}
              style={{ fontSize: "var(--codex-chat-font-size)" }}
            >
              {previewText.length > 0
                ? renderPreviewSegments(previewText)
                : fallbackText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
