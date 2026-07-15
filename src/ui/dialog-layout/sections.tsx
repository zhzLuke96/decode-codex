// Restored from ref/webview/assets/dialog-layout-BUsOXjxz.js
// Codex-specific dialog section components.

import React, {
  type FormHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { Button } from "../button";
import { WithWindow } from "../../utils/with-window";
type DialogBodyProps =
  | (HTMLAttributes<HTMLDivElement> & {
      as?: "div";
      size?: "full" | "tall";
    })
  | (FormHTMLAttributes<HTMLFormElement> & {
      as: "form";
      size?: "full" | "tall";
    });
type DialogFooterProps = HTMLAttributes<HTMLDivElement> & {
  expandSingleButton?: boolean;
};
const DIALOG_DEBUG_STORAGE_KEY = "codex.debug.dialogLayout";
const DIALOG_DEBUG_FRAME_CLASS =
  "relative rounded-lg border border-token-charts-blue/40";
const DIALOG_DEBUG_LABEL_CLASS =
  "absolute -top-2 left-2 rounded bg-token-charts-blue/15 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-token-charts-blue";
function DialogHeader({
  icon,
  title,
  subtitle,
  className,
  iconClassName,
  iconBackgroundClassName,
  titleSize = "dialog",
  titleClassName,
  subtitleSize = "base",
  subtitleClassName,
}: {
  className?: string;
  icon?: ReactNode;
  iconBackgroundClassName?: string;
  iconClassName?: string;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  subtitleSize?: "base" | "sm";
  title?: ReactNode;
  titleClassName?: string;
  titleSize?: "dialog" | "lg" | "base" | "sm";
}) {
  const debug = isDialogDebugEnabled();
  const titleClass =
    titleSize === "lg"
      ? "heading-lg"
      : titleSize === "base"
        ? "heading-base"
        : titleSize === "sm"
          ? "heading-sm"
          : "heading-dialog";
  const subtitleClass =
    subtitleSize === "base"
      ? "text-base leading-normal tracking-normal"
      : "text-sm leading-normal tracking-normal";
  return (
    <div
      className={clsx(
        "flex flex-col items-start gap-3",
        debug && DIALOG_DEBUG_FRAME_CLASS,
        className,
      )}
    >
      {debug ? <DebugLabel name="DialogHeader" /> : null}
      {icon ? (
        <span
          className={clsx(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl p-2",
            iconBackgroundClassName ?? "bg-token-foreground/5",
            iconClassName,
          )}
        >
          {icon}
        </span>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1 self-stretch">
        {title ? (
          <div
            className={clsx(
              titleClass,
              "min-w-0 font-semibold",
              titleClassName,
            )}
          >
            {title}
          </div>
        ) : null}
        {subtitle ? (
          <div
            className={clsx(
              "text-token-description-foreground",
              subtitleClass,
              subtitleClassName,
            )}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
function DialogBody(props: DialogBodyProps) {
  const { children, className, size } = props;
  const debug = isDialogDebugEnabled();
  const bodyClassName = clsx(
    "flex flex-col gap-0 px-5 py-5 text-base leading-normal tracking-normal",
    debug && DIALOG_DEBUG_FRAME_CLASS,
    getDialogBodySizeClass(size),
    className,
  );
  const debugLabel = debug ? <DebugLabel name="DialogBody" /> : null;
  if (props.as === "form") {
    const {
      as,
      children: _children,
      className: _className,
      size: _size,
      ...rest
    } = props;
    return (
      <form {...rest} className={bodyClassName}>
        {debugLabel}
        {children}
      </form>
    );
  }
  const {
    as,
    children: _children,
    className: _className,
    size: _size,
    ...rest
  } = props;
  return (
    <div {...rest} className={bodyClassName}>
      {debugLabel}
      {children}
    </div>
  );
}
function DialogFooter({
  children,
  className,
  expandSingleButton = true,
  ...rest
}: DialogFooterProps) {
  const debug = isDialogDebugEnabled();
  const childrenArray = React.Children.toArray(children);
  const buttonCount = childrenArray.reduce(countButtonChildren, 0);
  const renderButtons = (size: "medium" | "toolbar") =>
    childrenArray.map((child) => {
      if (!React.isValidElement(child) || child.type !== Button) return child;
      const expandedClass =
        expandSingleButton && buttonCount === 1
          ? "w-full justify-center"
          : undefined;
      return React.cloneElement(child, {
        size: child.props.size ?? size,
        className: clsx(child.props.className, expandedClass),
      });
    });
  return (
    <div
      {...rest}
      className={clsx(
        "flex w-full items-center justify-end gap-3",
        debug && DIALOG_DEBUG_FRAME_CLASS,
        className,
      )}
    >
      {debug ? <DebugLabel name="DialogFooter" /> : null}
      <WithWindow browser>{renderButtons("medium")}</WithWindow>
      <WithWindow electron>{renderButtons("medium")}</WithWindow>
      <WithWindow extension>{renderButtons("toolbar")}</WithWindow>
    </div>
  );
}
function DialogSection({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const debug = isDialogDebugEnabled();
  return (
    <div
      className={clsx(
        "flex w-full flex-col pt-3 first:pt-0",
        debug && DIALOG_DEBUG_FRAME_CLASS,
        className,
      )}
    >
      {debug ? <DebugLabel name="DialogSection" /> : null}
      {children}
    </div>
  );
}
function FormRow({ children, className }: HTMLAttributes<HTMLDivElement>) {
  const debug = isDialogDebugEnabled();
  return (
    <div
      className={clsx(
        "relative flex items-center gap-2",
        debug && DIALOG_DEBUG_FRAME_CLASS,
        className,
      )}
    >
      {debug ? <DebugLabel name="FormRow" /> : null}
      {children}
    </div>
  );
}
function FieldStack({ children, className }: HTMLAttributes<HTMLDivElement>) {
  const debug = isDialogDebugEnabled();
  return (
    <div
      className={clsx(
        "flex flex-col gap-2",
        debug && DIALOG_DEBUG_FRAME_CLASS,
        className,
      )}
    >
      {debug ? <DebugLabel name="FieldStack" /> : null}
      {children}
    </div>
  );
}
function getDialogBodySizeClass(size?: "full" | "tall"): string | undefined {
  if (size === "full") return "h-full min-h-0";
  if (size === "tall") return "min-h-[520px] max-h-[560px]";
}
function isDialogDebugEnabled(): boolean {
  return (
    typeof window !== "undefined" &&
    window.localStorage != null &&
    typeof window.localStorage.getItem === "function" &&
    window.localStorage.getItem(DIALOG_DEBUG_STORAGE_KEY) === "1"
  );
}
function DebugLabel({ name }: { name: string }) {
  return <span className={DIALOG_DEBUG_LABEL_CLASS}>{name}</span>;
}
function countButtonChildren(count: number, child: ReactNode): number {
  return !React.isValidElement(child) || child.type !== Button
    ? count
    : count + 1;
}
export {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogSection,
  FieldStack,
  FormRow,
};
