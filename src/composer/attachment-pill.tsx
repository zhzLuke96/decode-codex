// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Base button surface for composer attachment pills.

import type {
  ButtonHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  Ref,
} from "react";
import clsx from "clsx";

import { XIcon } from "../icons/x-icon";
import type { AttachmentLayout, IconComponent } from "./attachment-pill-types";

export interface AttachmentPillProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  Icon?: IconComponent;
  icon?: ReactNode;
  children?: ReactNode;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  onClick?: () => void;
  layout?: AttachmentLayout;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
}

export function AttachmentPill({
  Icon,
  icon,
  children,
  onRemove,
  onRemoveAriaLabel,
  onClick,
  layout = "pill",
  className,
  ref,
  ...rest
}: AttachmentPillProps) {
  const isCard = layout === "card";
  const handleRemoveKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onRemove?.();
    }
  };

  const surfaceClassName = clsx(
    "composer-attachment-surface text-token-foreground group relative transition-colors duration-200 focus:outline-none",
    isCard
      ? "border-token-border inline-flex w-fit max-w-64 flex-shrink-0 items-center gap-2.5 overflow-visible rounded-lg border bg-token-input-background p-3 pr-8 text-left shadow-sm"
      : "bg-token-dropdown-background border-token-border hover:bg-token-menu-background inline-flex max-w-[320px] items-center gap-1 rounded-full border px-2 py-1.5 text-sm",
    onClick && "cursor-interaction",
    !onClick && "cursor-default",
    className,
  );

  const iconWrapperClassName = clsx(
    "flex-shrink-0",
    isCard
      ? "flex size-10 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary"
      : "text-token-input-placeholder-foreground",
  );
  const iconNode =
    icon ??
    (Icon == null ? null : (
      <Icon className={clsx(isCard ? "size-6" : "icon-2xs")} />
    ));

  const labelClassName = clsx(
    "relative min-w-0 flex-1",
    isCard
      ? "text-size-chat truncate font-medium text-token-foreground"
      : "truncate pr-1 text-sm font-medium",
  );

  const removeNode = onRemove && (
    <div
      role="button"
      tabIndex={0}
      onClick={(event) => {
        event.stopPropagation();
        onRemove();
      }}
      onKeyDown={handleRemoveKeyDown}
      className={clsx(
        "group/remove flex cursor-interaction items-center justify-center",
        isCard
          ? "absolute top-2 right-2 size-4 rounded-full"
          : "pointer-events-none absolute top-1/2 right-1 size-5 -translate-y-1/2 rounded-full opacity-0 before:pointer-events-none before:absolute before:inset-y-0 before:-left-8 before:right-0 before:bg-linear-to-r before:from-transparent before:via-token-dropdown-background before:to-token-dropdown-background before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:before:via-token-menu-background group-hover:before:to-token-menu-background focus-visible:pointer-events-auto focus-visible:opacity-100",
      )}
      aria-label={onRemoveAriaLabel}
    >
      <span
        className={clsx(
          "relative flex items-center justify-center rounded-full",
          isCard
            ? "size-4 bg-token-foreground text-token-dropdown-background shadow-sm"
            : "size-5 border border-token-border bg-token-menu-background group-hover/remove:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))] group-focus-visible/remove:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))]",
        )}
      >
        <XIcon
          className={isCard ? "icon-xxs" : "icon-2xs text-token-foreground"}
        />
      </span>
    </div>
  );

  return (
    <button
      ref={ref}
      data-composer-attachment-pill={true}
      type="button"
      className={surfaceClassName}
      onClick={onClick}
      {...rest}
    >
      <div className={iconWrapperClassName}>{iconNode}</div>
      <div className={labelClassName}>{children}</div>
      {removeNode}
    </button>
  );
}

export function initAttachmentPillChunk(): void {}
