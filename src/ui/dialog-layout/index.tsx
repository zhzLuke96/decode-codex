// Restored from ref/webview/assets/dialog-layout-BUsOXjxz.js
// Public dialog layout exports.

import type {
  FormHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import clsx from "clsx";
import { DialogLayout } from "./dialog-layout-content";
import {
  DIALOG_FOOTER_BUTTON_CLASS,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from "./primitives";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogSection,
  FieldStack,
  FormRow,
} from "./sections";

type DialogPanelProps =
  | (HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (FormHTMLAttributes<HTMLFormElement> & { as: "form" });

function DialogPanel(props: DialogPanelProps) {
  const { as = "div", className, ...rest } = props;
  const Component = as;
  return (
    <Component
      className={clsx("flex min-w-0 flex-col", className)}
      {...(rest as never)}
    />
  );
}

function DialogForm({
  className,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={clsx("flex min-w-0 flex-col", className)}
      {...props}
    />
  );
}

function DialogHeading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx("heading-base", className)} {...props} />;
}

function DialogSubtitle({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx("text-token-description-foreground text-sm", className)}
      {...props}
    />
  );
}

function DialogFooterRow({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("flex items-center justify-end gap-2", className)}
      {...props}
    />
  );
}

function DialogTitleBlock({
  className,
  subtitle,
  subtitleSize = "base",
  title,
  titleSize = "dialog",
}: {
  className?: string;
  subtitle?: ReactNode;
  subtitleSize?: "base" | "sm";
  title?: ReactNode;
  titleSize?: "dialog" | "lg" | "base" | "sm";
}) {
  return (
    <DialogHeader
      className={className}
      title={title}
      subtitle={subtitle}
      titleSize={titleSize}
      subtitleSize={subtitleSize}
    />
  );
}

function initDialogLayoutComponents(): void {}

function initAppDialog(): void {}

export {
  DialogSection,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogTitle,
  DialogContent,
  DialogRoot,
  DialogForm,
  DialogHeader,
  DialogHeading,
  DialogLayout,
  DialogPanel,
  DialogPortal,
  DialogBody,
  DialogFooterRow,
  FieldStack,
  DialogOverlay,
  DialogFooter,
  DialogSubtitle,
  DialogTitleBlock,
  FormRow,
  DIALOG_FOOTER_BUTTON_CLASS,
  DialogDescription,
  initAppDialog,
  initDialogLayoutComponents,
};
