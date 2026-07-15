// Restored from ref/webview/assets/dialog-layout-BUsOXjxz.js
// Radix dialog primitive aliases and shared class constants.

import { type ComponentPropsWithoutRef } from "react";
import {
  Close as DialogClose,
  Content as DialogContent,
  Description as DialogDescriptionPrimitive,
  Overlay as DialogOverlay,
  Portal as DialogPortal,
  Root as DialogRoot,
  Title as DialogTitlePrimitive,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";
import clsx from "clsx";
const DIALOG_CONTENT_CLASS = "_content_pk7td_1";
const DIALOG_OVERLAY_CLASS = "_overlay_pk7td_26";
const DIALOG_OVERLAY_CLASS_NAME = clsx(
  "extension:bg-token-editor-background/80 electron:bg-[#00000022] codex-dialog-overlay fixed inset-0 z-50",
  DIALOG_OVERLAY_CLASS,
);
const DIALOG_FOOTER_BUTTON_CLASS = "w-auto gap-2";
function DialogTitle(
  props: ComponentPropsWithoutRef<typeof DialogTitlePrimitive>,
) {
  return <DialogTitlePrimitive {...props} />;
}
function DialogDescription(
  props: ComponentPropsWithoutRef<typeof DialogDescriptionPrimitive>,
) {
  return <DialogDescriptionPrimitive {...props} />;
}
export {
  DIALOG_CONTENT_CLASS,
  DIALOG_FOOTER_BUTTON_CLASS,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
};
