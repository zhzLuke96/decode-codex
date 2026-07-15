// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helper components and pure utilities for the browser sidebar comment overlay.

import React from "react";
import {
  areDesignDraftGroupsEqual,
  buildDesignDraftFromEditor,
  type DesignDraftGroup,
  type DesignEditorState,
} from "./browser-comment-design-draft";
import {
  isBlankText,
  parseCommentPreviewSegments,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  COMPOSER_EXPAND_FALLBACK_LENGTH,
  COMPOSER_EXPAND_THRESHOLD,
  DESIGN_PROMPT_EXPAND_THRESHOLD,
  DESIGN_TOGGLE_WIDTH,
  INPUT_GAP,
  INPUT_LEFT_INSET,
  INPUT_RIGHT_INSET,
  MENTION_CLASS,
  SUBMIT_BUTTON_WIDTH,
} from "./browser-comment-overlay-constants";
import type {
  AttachedImage,
  BrowserCommentSession,
  CommentTarget,
} from "./browser-comment-overlay-types";

export function resolvePreviewText(session: BrowserCommentSession): string {
  return session.body.length > 0
    ? session.body
    : (session.designChange?.comment ?? "");
}

export function resolveBaselineDesignGroup(
  session: BrowserCommentSession,
): DesignDraftGroup | null {
  if (session.designChange == null) return null;
  return session.designChange.comment != null ||
    session.body.trim().length === 0
    ? session.designChange
    : { ...session.designChange, comment: session.body };
}

export function countDesignAdjustments(designChange: DesignDraftGroup): number {
  return Math.max(
    designChange.declarations.length + (designChange.text == null ? 0 : 1),
    1,
  );
}

export function renderPreviewSegments(text: string): React.ReactNode {
  return parseCommentPreviewSegments(text).map(
    (
      segment:
        | { type: "text"; text: string }
        | { type: "mention"; label: string },
      index: number,
    ) => {
      switch (segment.type) {
        case "text":
          return segment.text;
        case "mention":
          return (
            <strong
              key={`comment-preview-mention-${index}`}
              className={MENTION_CLASS}
            >
              {segment.label}
            </strong>
          );
      }
    },
  );
}

export function previewAlignmentClass(
  alignment: BrowserCommentSession["previewAlignment"],
): string | undefined {
  switch (alignment) {
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    default:
      return undefined;
  }
}

export function computeLightDismissibility(
  mode: CommentTarget["mode"],
  initialBody: string,
  text: string,
  initialImages: AttachedImage[],
  images: AttachedImage[],
  baseline: DesignDraftGroup | null,
  designState: DesignEditorState | null,
): boolean {
  const trimmed = text.trim();
  const designUnchanged = isDesignUnchanged(trimmed, baseline, designState);
  switch (mode) {
    case "create":
      return isBlankText(text) && images.length === 0 && designUnchanged;
    case "edit":
      return (
        trimmed === initialBody.trim() &&
        areAttachmentsEqual(initialImages, images) &&
        designUnchanged
      );
    case "design":
      return baseline == null
        ? trimmed.length === 0 && designUnchanged
        : designUnchanged;
  }
}

function isDesignUnchanged(
  trimmedText: string,
  baseline: DesignDraftGroup | null,
  designState: DesignEditorState | null,
): boolean {
  if (designState == null) return baseline == null;
  const draft = buildDesignDraftFromEditor(designState, baseline, trimmedText);
  return baseline == null
    ? draft == null
    : areDesignDraftGroupsEqual(draft, baseline);
}

function areAttachmentsEqual(
  left: AttachedImage[],
  right: AttachedImage[],
): boolean {
  return left.length === right.length
    ? left.every((item, index) => {
        const other = right[index];
        return (
          other != null &&
          item.dataUrl === other.dataUrl &&
          item.filename === other.filename &&
          item.localPath === other.localPath
        );
      })
    : false;
}

export function shouldExpandComposer(
  text: string,
  isMultiNode: boolean,
  measureSpan: HTMLSpanElement | null,
  card: HTMLElement | null,
): boolean {
  const trimmed = text.trim();
  if (trimmed.length === 0) return false;
  if (isMultiNode) return true;
  const availableWidth = computeAvailableInputWidth(card);
  const textWidth = measureTextWidth(text, measureSpan);
  return availableWidth == null || textWidth == null
    ? trimmed.length >= COMPOSER_EXPAND_FALLBACK_LENGTH
    : textWidth + COMPOSER_EXPAND_THRESHOLD > availableWidth;
}

export function shouldExpandDesignPrompt(
  text: string,
  measureSpan: HTMLSpanElement | null,
  promptShell: HTMLElement | null,
): boolean {
  if (text.trim().length === 0) return false;
  if (/\r?\n/.test(text)) return true;
  const shellWidth = measureControlWidth(promptShell);
  const textWidth = measureTextWidth(text, measureSpan);
  return shellWidth == null || textWidth == null
    ? false
    : textWidth + DESIGN_PROMPT_EXPAND_THRESHOLD > shellWidth;
}

function computeAvailableInputWidth(card: HTMLElement | null): number | null {
  if (card == null) return null;
  const rect = card.getBoundingClientRect();
  if (rect.width === 0) return null;
  const submitWidth =
    card.querySelector("[data-browser-comment-submit]")?.getBoundingClientRect()
      .width ?? SUBMIT_BUTTON_WIDTH;
  const toggleWidth =
    card.querySelector("[data-browser-sidebar-design-editor-toggle]") == null
      ? 0
      : DESIGN_TOGGLE_WIDTH;
  return (
    rect.width -
    INPUT_LEFT_INSET -
    INPUT_GAP -
    toggleWidth -
    submitWidth -
    INPUT_RIGHT_INSET
  );
}

function measureControlWidth(node: HTMLElement | null): number | null {
  if (node == null) return null;
  const rect = node.getBoundingClientRect();
  return rect.width === 0 ? null : rect.width;
}

function measureTextWidth(
  text: string,
  span: HTMLSpanElement | null,
): number | null {
  if (span == null) return null;
  span.textContent = text;
  return span.getBoundingClientRect().width;
}

export function isDraggableTarget(
  event: React.PointerEvent<HTMLElement>,
): boolean {
  const target = event.target;
  const view = event.currentTarget.ownerDocument.defaultView;
  if (view == null || !(target instanceof view.Element)) return false;
  return (
    target.closest(
      [
        "a",
        "button",
        "input",
        "select",
        "textarea",
        "[contenteditable='true']",
        "[data-browser-sidebar-design-no-drag]",
        "[role='button']",
        "[role='combobox']",
        "[role='menuitem']",
      ].join(","),
    ) == null
  );
}
