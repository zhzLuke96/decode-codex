// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Composer footer project control primitives with typed props.

import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import { Tooltip } from "../../ui/tooltip-b";
import { ChevronIcon } from "../../icons/chevron-icon";
import type {
  ComposerFooterControlCollapse,
  ComposerFooterControlIndicator,
} from "./types";

export interface ComposerFooterProjectButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  categoryLabel?: ReactNode;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  indicator?: ComposerFooterControlIndicator;
  tooltipContent?: ReactNode;
  value?: ReactNode;
  valueClassName?: string;
}

export interface ComposerFooterStaticProjectControlProps {
  categoryLabel?: ReactNode;
  className?: string;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  tooltipContent?: ReactNode;
  value?: ReactNode;
  valueClassName?: string;
}

interface ComposerFooterProjectControlContentProps {
  categoryLabel?: ReactNode;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  indicator: ComposerFooterControlIndicator;
  value?: ReactNode;
  valueClassName?: string;
}

export function ComposerFooterProjectButton({
  categoryLabel,
  className,
  collapse = "none",
  icon,
  indicator = "none",
  tooltipContent,
  value,
  valueClassName,
  ...buttonProps
}: ComposerFooterProjectButtonProps) {
  const button = (
    <Button
      {...buttonProps}
      className={clsx("min-w-0", className)}
      color="ghost"
      size="composerSm"
    >
      <ComposerFooterProjectControlContent
        categoryLabel={categoryLabel}
        collapse={collapse}
        icon={icon}
        indicator={indicator}
        value={value}
        valueClassName={valueClassName}
      />
    </Button>
  );

  if (tooltipContent == null) return button;

  return <Tooltip tooltipContent={tooltipContent}>{button}</Tooltip>;
}

export function ComposerFooterStaticProjectControl({
  categoryLabel,
  className,
  collapse = "none",
  icon,
  tooltipContent,
  value,
  valueClassName,
}: ComposerFooterStaticProjectControlProps) {
  const control = (
    <div className={clsx("flex min-w-0 items-center gap-1", className)}>
      <ComposerFooterProjectControlContent
        categoryLabel={categoryLabel}
        collapse={collapse}
        icon={icon}
        indicator="none"
        value={value}
        valueClassName={valueClassName}
      />
    </div>
  );

  if (tooltipContent == null) return control;

  return <Tooltip tooltipContent={tooltipContent}>{control}</Tooltip>;
}

function ComposerFooterProjectControlContent({
  categoryLabel,
  collapse,
  icon,
  indicator,
  value,
  valueClassName,
}: ComposerFooterProjectControlContentProps) {
  const valueContent =
    categoryLabel != null || value != null ? (
      <span
        className={clsx(
          "inline-flex min-w-0 items-baseline gap-1 text-left",
          collapse === "xs" && "max-xs:hidden",
          collapse === "sm" && "max-sm:hidden",
          collapse === "secondary" && "text-token-description-foreground",
        )}
      >
        {categoryLabel == null ? null : (
          <span className="hidden shrink-0 font-medium text-token-foreground sm:inline">
            {categoryLabel}
          </span>
        )}
        <span
          className={clsx(
            "min-w-0 truncate font-normal whitespace-nowrap",
            valueClassName,
          )}
          data-tooltip-overflow-target={true}
        >
          {value}
        </span>
      </span>
    ) : null;

  return (
    <>
      {icon == null ? null : (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
      {valueContent}
      <FooterProjectIndicator indicator={indicator} />
    </>
  );
}

interface FooterProjectIndicatorProps {
  indicator: ComposerFooterControlIndicator;
}

function FooterProjectIndicator({ indicator }: FooterProjectIndicatorProps) {
  if (indicator === "none") return null;
  if (indicator === "pending") {
    return (
      <Spinner className="icon-xs text-token-input-placeholder-foreground" />
    );
  }

  const chevron = (
    <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
  );

  return indicator === "collapsible-chevron" ? (
    <span className="inline-flex shrink-0">{chevron}</span>
  ) : (
    chevron
  );
}

export function initComposerProjectFooterControls() {}
