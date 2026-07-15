// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA.js
// app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA chunk restored from the Codex webview bundle.
import * as React from "react";
import type { CSSProperties, HTMLAttributes, ReactElement } from "react";
import { parseCommentPreviewSegments } from "../../browser/browser-comment-preview-segments";
import { classNames } from "../../utils/class-names";
const BROWSER_COMMENT_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';
const browserCommentComposerProseClassName = classNames(
  "text-token-text-primary min-h-0 w-full p-0 leading-normal !font-sans",
  "[&_.ProseMirror]:w-full",
  "[&_.ProseMirror]:!text-token-foreground",
  "[&_.ProseMirror]:!font-sans",
  "[&_.ProseMirror]:px-0",
  "[&_.ProseMirror]:py-0",
  "[&_.ProseMirror]:!leading-6",
  "[&_.ProseMirror_p]:!font-sans",
  "[&_.ProseMirror_p]:!leading-6",
  "[&_.ProseMirror_p_*]:!font-sans",
  "[&_.ProseMirror_span]:!font-sans",
  "!min-h-0 text-base",
  "[&_.ProseMirror]:min-h-6",
);
const browserCommentInputAbsoluteClassName =
  "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none";
const browserCommentFooterClassName =
  "absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none";
const browserCommentComposerSurfaceStyle = {
  "--codex-chat-font-size": "13px",
  "--composer-top-tray-background": "var(--color-token-main-surface-primary)",
  "--composer-top-tray-border": "transparent",
  "--font-sans": BROWSER_COMMENT_FONT_STACK,
  "--vscode-font-family": BROWSER_COMMENT_FONT_STACK,
  fontFamily: BROWSER_COMMENT_FONT_STACK,
} as CSSProperties;
function BrowserCommentComposerShell({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement {
  return React.createElement("div", {
    ...props,
    className: classNames(
      "pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
      className,
    ),
    style: {
      ...browserCommentComposerSurfaceStyle,
      ...style,
    },
  });
}
function initBrowserCommentPreviewParserChunk(): void {}
function initBrowserCommentComposerStyleChunk(): void {}
function initBrowserCommentComposerShellChunk(): void {}
export {
  browserCommentInputAbsoluteClassName,
  initBrowserCommentPreviewParserChunk,
  browserCommentComposerProseClassName,
  parseCommentPreviewSegments,
  initBrowserCommentComposerShellChunk,
  browserCommentComposerSurfaceStyle,
  browserCommentFooterClassName,
  initBrowserCommentComposerStyleChunk,
  BrowserCommentComposerShell,
};
