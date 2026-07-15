// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~h422e2ym-Dd6oN7BA.js
// Shared image/browser comment editor surface classes and floating positioner.
import type { ComponentPropsWithoutRef } from "react";
import { TrashIcon as DeleteCommentIcon } from "../icons/trash-icon";
import { classNames } from "../utils/class-names";

const COMMENT_EDITOR_FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';

export const COMMENT_EDITOR_INPUT_CLASS = classNames(
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

export const COMMENT_EDITOR_SURFACE_CLASS =
  "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none";

export const COMMENT_EDITOR_FOOTER_CLASS =
  "absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none";

const COMMENT_EDITOR_POSITIONER_STYLE = {
  "--codex-chat-font-size": "13px",
  "--composer-top-tray-background": "var(--color-token-main-surface-primary)",
  "--composer-top-tray-border": "transparent",
  "--font-sans": COMMENT_EDITOR_FONT_FAMILY,
  "--vscode-font-family": COMMENT_EDITOR_FONT_FAMILY,
  fontFamily: COMMENT_EDITOR_FONT_FAMILY,
} as const;

export { DeleteCommentIcon };

export function ImageCommentEditorPositioner({
  className,
  style,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={classNames(
        "pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
        className,
      )}
      style={{
        ...COMMENT_EDITOR_POSITIONER_STYLE,
        ...style,
      }}
    />
  );
}
