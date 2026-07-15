// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline label/value setting row and a titled settings section wrapper.
import type { ReactElement, ReactNode } from "react";
import { classNames } from "../utils/class-names";

export interface InlineSettingRowProps {
  children: ReactNode;
  compactLabelInset?: boolean;
  label: ReactNode;
  valueAlignment?: "start" | "end";
  variant?: "default" | "compact";
}

export function InlineSettingRow({
  children,
  compactLabelInset = true,
  label,
  valueAlignment = "start",
  variant = "default",
}: InlineSettingRowProps): ReactElement {
  const containerClassName = classNames(
    "grid items-center",
    variant === "compact"
      ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-token-foreground electron:opacity-75"
      : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6",
  );

  const labelClassName = classNames(
    "min-w-0",
    variant === "compact"
      ? classNames(
          "flex items-center pr-2 text-left",
          compactLabelInset && "pl-1",
        )
      : "text-sm text-token-text-secondary",
  );

  const valueClassName = classNames(
    "min-w-0",
    variant === "compact"
      ? "flex items-center justify-end justify-self-stretch overflow-hidden"
      : classNames(
          "break-words whitespace-normal text-sm text-token-text-primary",
          valueAlignment === "end" && "text-right",
        ),
  );

  return (
    <div className={containerClassName}>
      <div className={labelClassName}>{label}</div>
      <div className={valueClassName}>{children}</div>
    </div>
  );
}

export interface InlineSettingSectionProps {
  actions?: ReactNode;
  children: ReactNode;
  title: ReactNode;
}

export function InlineSettingSection({
  actions,
  children,
  title,
}: InlineSettingSectionProps): ReactElement {
  return (
    <section className="flex min-h-0 flex-col">
      <div className="flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-token-input-placeholder-foreground">
        <span className="opacity-75">{title}</span>
        {actions}
      </div>
      <div className="flex min-h-0 flex-col">{children}</div>
    </section>
  );
}
