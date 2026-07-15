// Restored from ref/webview/assets/onboarding-shell-BwumpCSL.js
// onboarding-shell-BwumpCSL chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import { Checkbox } from "../utils/checkbox";
import { usePlatform } from "../utils/use-platform";
import { WithWindow } from "../utils/with-window";
type OnboardingShellListProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
};
type OnboardingShellOptionProps = {
  checkboxClassName?: string;
  checkboxId?: string;
  checked?: boolean;
  className?: string;
  control?: ReactNode;
  controlPlacement?: "left" | "right";
  description?: ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  label: ReactNode;
  labelClassName?: string;
  leadingContent?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  trailingClassName?: string;
  trailingContent?: ReactNode;
  trailingControl?: ReactNode;
};
type OnboardingShellHeaderProps = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  textClassName?: string;
  title: ReactNode;
  titleClassName?: string;
};
type OnboardingShellScreenProps = {
  children?: ReactNode;
  fullBleed?: boolean;
  hideHeader?: boolean;
};
const ONBOARDING_SHELL_CHECKBOX_CLASS_NAME =
  "h-[18px] w-[18px] rounded-[3px] border-[1px]";
function OnboardingShellList({
  children,
  ariaLabel,
  className,
}: OnboardingShellListProps) {
  return (
    <div
      className={clsx(
        "flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4",
        className,
      )}
      role="list"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}
function OnboardingShellOption({
  checkboxId,
  checked,
  disabled = false,
  onCheckedChange,
  control,
  label,
  description,
  leadingContent,
  trailingContent,
  trailingControl,
  controlPlacement = "left",
  className,
  checkboxClassName = ONBOARDING_SHELL_CHECKBOX_CLASS_NAME,
  labelClassName,
  descriptionClassName,
  trailingClassName,
}: OnboardingShellOptionProps) {
  const shouldRenderCheckbox =
    control == null &&
    checkboxId != null &&
    checked != null &&
    onCheckedChange != null;
  const resolvedControl = shouldRenderCheckbox ? (
    <Checkbox
      id={checkboxId}
      className={checkboxClassName}
      checked={checked}
      disabled={disabled}
      onCheckedChange={(nextChecked) => {
        onCheckedChange(nextChecked);
      }}
    />
  ) : (
    control
  );
  const labelFor = shouldRenderCheckbox ? checkboxId : undefined;
  return (
    <div
      className={clsx(
        "relative flex items-start gap-2 last:border-b-0",
        className,
      )}
      role="listitem"
    >
      {controlPlacement === "left" ? <div>{resolvedControl}</div> : null}
      {leadingContent == null ? null : <div>{leadingContent}</div>}
      <label
        className="flex min-w-0 flex-1 items-start gap-2 text-left"
        htmlFor={labelFor}
      >
        <div className="min-w-0 flex-1">
          <div
            className={clsx(
              "truncate text-base leading-5 text-token-foreground",
              labelClassName,
            )}
          >
            {label}
          </div>
          {description == null ? null : (
            <div
              className={clsx(
                "truncate text-xs leading-4 text-token-text-secondary",
                descriptionClassName,
              )}
            >
              {description}
            </div>
          )}
        </div>
        {trailingContent == null ? null : (
          <span
            className={clsx(
              "max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground",
              trailingClassName,
            )}
          >
            {trailingContent}
          </span>
        )}
      </label>
      {trailingControl == null ? null : <div>{trailingControl}</div>}
      {controlPlacement === "right" ? <div>{resolvedControl}</div> : null}
    </div>
  );
}
function OnboardingShellHeader({
  children,
  icon = null,
  title,
  subtitle,
  className,
  textClassName,
  titleClassName,
  subtitleClassName,
}: OnboardingShellHeaderProps) {
  return (
    <div className={clsx("flex w-full flex-col items-center gap-6", className)}>
      {icon}
      <div
        className={clsx(
          "flex w-full flex-col items-center text-center",
          textClassName,
        )}
      >
        <span
          className={clsx(
            "text-heading-lg font-semibold text-token-foreground",
            titleClassName,
          )}
        >
          {title}
        </span>
        {subtitle == null ? null : (
          <span
            className={clsx(
              "text-lg leading-6 text-token-description-foreground",
              subtitleClassName,
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
function OnboardingShellScreen({
  children,
  fullBleed = false,
  hideHeader = false,
}: OnboardingShellScreenProps) {
  const { platform } = usePlatform();
  const shouldShowDragRegion = !hideHeader && platform !== "windows";
  const contentClassName = fullBleed
    ? "fixed inset-0"
    : clsx(
        "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
        shouldShowDragRegion ? "top-toolbar-sm pt-2" : "top-0 pt-8",
      );
  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
      <WithWindow browser electron>
        {shouldShowDragRegion ? (
          <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
        ) : null}
        <div className={contentClassName}>{children}</div>
      </WithWindow>
    </div>
  );
}
export {
  OnboardingShellScreen,
  OnboardingShellHeader,
  OnboardingShellList,
  OnboardingShellOption,
  ONBOARDING_SHELL_CHECKBOX_CLASS_NAME,
};
