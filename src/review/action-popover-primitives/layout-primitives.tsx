// Restored from ref/webview/assets/action-popover-primitives-BriXOYq-.js
// action-popover-primitives-BriXOYq- chunk restored from the Codex webview bundle.
import React, {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { DialogBody } from "../../ui/dialog-layout";
import { Spinner } from "../../ui/spinner";
import { WithWindow } from "../../utils/with-window";
type ClassNameProps = {
  className?: string;
};
type ActionPopoverHeaderProps = ClassNameProps & {
  icon: ReactNode;
  iconBackgroundTone?: "neutral" | "success" | "failure";
  isRefreshing?: boolean;
};
type ActionPopoverFooterProps = ClassNameProps & {
  left?: ReactNode;
  right: ReactNode;
};
type DialogBodyProps = ComponentProps<typeof DialogBody>;
type ButtonDefaultSize = "medium" | "toolbar";
export function Root({
  children,
  className,
  ...dialogBodyProps
}: DialogBodyProps) {
  return (
    <DialogBody {...dialogBodyProps} className={clsx("gap-3", className)}>
      {children}
    </DialogBody>
  );
}
export function Header({
  icon,
  isRefreshing = false,
  iconBackgroundTone = "neutral",
  className,
}: ActionPopoverHeaderProps) {
  let iconBackgroundClassName = "bg-token-editor-background";
  if (iconBackgroundTone === "success") {
    iconBackgroundClassName = "bg-token-charts-green/20";
  }
  if (iconBackgroundTone === "failure") {
    iconBackgroundClassName = "bg-token-charts-red/10";
  }
  return (
    <div className={clsx("flex items-start justify-between", className)}>
      <span
        className={clsx(
          "flex h-9 w-9 items-center justify-center rounded-xl",
          iconBackgroundClassName,
        )}
      >
        {icon}
      </span>
      {isRefreshing ? (
        <Spinner className="icon-xs mt-0.5 text-token-description-foreground" />
      ) : null}
    </div>
  );
}
export function Title({
  children,
  className,
}: ClassNameProps & {
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "text-token-foreground heading-dialog font-semibold",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function RowContainer({
  children,
  className,
}: ClassNameProps & {
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "text-token-description-foreground flex flex-col gap-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Footer({ left, right, className }: ActionPopoverFooterProps) {
  const renderButtons = (size: ButtonDefaultSize) => (
    <>
      {withDefaultButtonSize(left, size) ?? null}
      {withDefaultButtonSize(right, size)}
    </>
  );
  return (
    <div
      className={clsx(
        "flex flex-1 items-center justify-between gap-2",
        className,
      )}
    >
      <WithWindow electron={true}>{renderButtons("medium")}</WithWindow>
      <WithWindow extension={true}>{renderButtons("toolbar")}</WithWindow>
    </div>
  );
}
function withDefaultButtonSize(
  node: ReactNode,
  size: ButtonDefaultSize,
): ReactNode {
  if (!React.isValidElement(node)) {
    return node;
  }
  if (node.type === Button) {
    const buttonElement = node as ReactElement<{
      size?: ButtonDefaultSize;
    }>;
    return buttonElement.props.size == null
      ? React.cloneElement(buttonElement, {
          size,
        })
      : buttonElement;
  }
  const element = node as ReactElement<{
    children?: ReactNode;
  }>;
  if (element.props.children == null) {
    return node;
  }
  let didChangeChild = false;
  const children = React.Children.map(element.props.children, (child) => {
    const nextChild = withDefaultButtonSize(child, size);
    if (nextChild !== child) {
      didChangeChild = true;
    }
    return nextChild;
  });
  if (!didChangeChild) {
    return node;
  }
  const nextChildren =
    children != null && children.length === 1 ? children[0] : children;
  return React.cloneElement(element, {
    children: nextChildren,
  });
}
