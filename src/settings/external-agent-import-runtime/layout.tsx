// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~appearance-settings~general-settings-C3J7WwqO.js
// External agent import shared layout primitives.
import type { ReactNode } from "react";

import { ExternalAgentImportBrandIcon } from "./icons";

export const EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME =
  "h-[18px] w-[18px] rounded-[3px] border-[1px]";

export type CheckedState = boolean | "indeterminate";

export type SelectableRowProps = {
  checkboxClassName?: string;
  checkboxId?: string;
  checked?: CheckedState;
  className?: string;
  control?: ReactNode;
  controlPlacement?: "left" | "right";
  description?: ReactNode;
  descriptionClassName?: string;
  disabled?: boolean;
  label: ReactNode;
  labelClassName?: string;
  leadingContent?: ReactNode;
  onCheckedChange?: (checked: CheckedState) => void;
  trailingClassName?: string;
  trailingContent?: ReactNode;
  trailingControl?: ReactNode;
};

export type ImportLayoutProps = {
  children?: ReactNode;
  fullBleed?: boolean;
  hideHeader?: boolean;
  showBrandIcon?: boolean;
};

export type ScrollableListProps = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
};

export type ImportHeroProps = {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  textClassName?: string;
  title: ReactNode;
  titleClassName?: string;
};

function joinClassNames(
  ...classNames: readonly (false | null | string | undefined)[]
): string {
  return classNames.filter(Boolean).join(" ");
}

export function OnboardingImportLayout({
  children,
  fullBleed = false,
  hideHeader = false,
  showBrandIcon = false,
}: ImportLayoutProps): JSX.Element {
  const shouldShowDragRegion = !hideHeader && !showBrandIcon;
  const contentClassName = fullBleed
    ? "fixed inset-0"
    : joinClassNames(
        "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
        shouldShowDragRegion ? "top-toolbar-sm pt-2" : "top-0 pt-8",
      );

  return (
    <div className="fixed inset-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-token-bg-primary electron:bg-transparent" />
      {shouldShowDragRegion ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 h-toolbar-sm select-none" />
      ) : null}
      {showBrandIcon ? (
        <div className="draggable fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-token-main-surface-primary select-none">
          <ExternalAgentImportBrandIcon
            appBrand="codex"
            className="pointer-events-none size-6 text-token-foreground"
          />
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

export function ExternalAgentImportScrollableList({
  ariaLabel,
  children,
  className,
}: ScrollableListProps): JSX.Element {
  return (
    <div
      aria-label={ariaLabel}
      className={joinClassNames(
        "flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-token-border bg-token-surface-primary px-5 py-4",
        className,
      )}
      role="list"
    >
      {children}
    </div>
  );
}

export function ExternalAgentImportSelectableRow({
  checkboxClassName = EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME,
  checkboxId,
  checked,
  className,
  control,
  controlPlacement = "left",
  description,
  descriptionClassName,
  disabled = false,
  label,
  labelClassName,
  leadingContent,
  onCheckedChange,
  trailingClassName,
  trailingContent,
  trailingControl,
}: SelectableRowProps): JSX.Element {
  const generatedControl =
    control ??
    (checkboxId == null || checked == null || onCheckedChange == null ? null : (
      <input
        aria-checked={checked === "indeterminate" ? "mixed" : checked}
        checked={checked === true}
        className={checkboxClassName}
        disabled={disabled}
        id={checkboxId}
        onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        type="checkbox"
      />
    ));

  const labelFor = generatedControl == null ? undefined : checkboxId;
  const leftControl =
    controlPlacement === "left" ? <div>{generatedControl}</div> : null;
  const rightControl =
    controlPlacement === "right" ? <div>{generatedControl}</div> : null;

  return (
    <div
      className={joinClassNames(
        "relative flex items-start gap-2 last:border-b-0",
        className,
      )}
      role="listitem"
    >
      {leftControl}
      {leadingContent == null ? null : <div>{leadingContent}</div>}
      <label
        className="flex min-w-0 flex-1 items-start gap-2 text-left"
        htmlFor={labelFor}
      >
        <div className="min-w-0 flex-1">
          <div
            className={joinClassNames(
              "truncate text-base leading-5 text-token-foreground",
              labelClassName,
            )}
          >
            {label}
          </div>
          {description == null ? null : (
            <div
              className={joinClassNames(
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
            className={joinClassNames(
              "max-w-[45%] shrink truncate text-right text-sm leading-5 text-token-description-foreground",
              trailingClassName,
            )}
          >
            {trailingContent}
          </span>
        )}
      </label>
      {trailingControl == null ? null : <div>{trailingControl}</div>}
      {rightControl}
    </div>
  );
}

export function ExternalAgentImportHero({
  children,
  className,
  icon,
  subtitle,
  subtitleClassName,
  textClassName,
  title,
  titleClassName,
}: ImportHeroProps): JSX.Element {
  return (
    <div
      className={joinClassNames(
        "flex w-full flex-col items-center gap-6",
        className,
      )}
    >
      {icon ?? null}
      <div
        className={joinClassNames(
          "flex w-full flex-col items-center text-center",
          textClassName,
        )}
      >
        <span
          className={joinClassNames(
            "text-heading-lg font-semibold text-token-foreground",
            titleClassName,
          )}
        >
          {title}
        </span>
        {subtitle == null ? null : (
          <span
            className={joinClassNames(
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

export function initOnboardingImportLayoutChunk(): void {}

export function initExternalAgentImportHeroChunk(): void {}

export function initExternalAgentImportScrollableListChunk(): void {}

export function initExternalAgentImportSelectableRowChunk(): void {}

export function initExternalAgentImportDialogChunk(): void {}
