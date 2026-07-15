// Restored from ref/webview/assets/alert-CuUy_SXy.js
// alert-CuUy_SXy chunk restored from the Codex webview bundle.
import clsx from "clsx";
import type { ComponentType, MouseEventHandler, ReactNode } from "react";
import { useIntl } from "react-intl";
import { XIcon } from "../icons/x-icon";
type AlertLevel = "danger" | "info" | "success" | "warning";
type AlertProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  icon?: ComponentType<{
    className?: string;
  }>;
  level?: AlertLevel;
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  testId?: string;
};
export function Alert({
  children,
  className,
  fullWidth,
  icon: Icon,
  level = "info",
  onRemove,
  testId,
}: AlertProps) {
  const intl = useIntl();
  const isInfo = level === "info";
  const isSuccess = level === "success";
  const isWarning = level === "warning";
  const isDanger = level === "danger";
  return (
    <div
      className={clsx(
        "alert-root inline-flex flex-row items-start gap-1.5 rounded-2xl px-2 py-2 text-base leading-[1.4] pointer-events-auto box-shadow-lg border text-token-foreground",
        {
          flex: fullWidth,
          "border-token-border bg-token-dropdown-background": isInfo,
          "border-token-border bg-token-input-validation-info-background":
            isSuccess,
          "border-token-input-validation-warning-border bg-token-input-validation-warning-background":
            isWarning,
          "border-token-input-validation-error-border bg-token-input-validation-error-background":
            isDanger,
        },
        className,
      )}
      role="alert"
      data-testid={testId}
    >
      {Icon == null ? null : (
        <div className="shrink-0 grow-0">
          <Icon className="icon-sm" />
        </div>
      )}
      <div className="flex-1 justify-center gap-2">
        {typeof children === "string" ? (
          <div className="font-medium">{children}</div>
        ) : (
          children
        )}
      </div>
      {onRemove == null ? null : (
        <button
          type="button"
          onClick={onRemove}
          aria-label={intl.formatMessage({
            id: "codex.alert.closeAriaLabel",
            defaultMessage: "Close",
            description:
              "Aria label for the close button on an alert/toast component",
          })}
          className="mt-0.5 flex shrink-0 grow-0 cursor-interaction rounded-full opacity-50 hover:bg-token-button-secondary-hover-background/5 hover:opacity-80"
        >
          <XIcon className="icon-xs" />
        </button>
      )}
    </div>
  );
}
