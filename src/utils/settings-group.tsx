// Restored from ref/webview/assets/settings-group-BsLwxK1k.js
// settings-group-BsLwxK1k chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
export type SettingsGroupProps = {
  children?: ReactNode;
  id?: string;
  className?: string;
};
export type SettingsGroupHeaderProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  className?: string;
  titleGap?: "default" | "none";
};
export type SettingsGroupContentProps = {
  children?: ReactNode;
  className?: string;
};
function SettingsGroupRoot({
  children,
  id,
  className,
}: SettingsGroupProps): JSX.Element {
  return (
    <section id={id} className={clsx("flex flex-col", className)}>
      {children}
    </section>
  );
}
function SettingsGroupHeader({
  title,
  subtitle,
  actions,
  className,
  titleGap = "default",
}: SettingsGroupHeaderProps): JSX.Element {
  if (title == null && subtitle == null && actions == null) return <></>;
  const hasSubtitle = subtitle != null;
  const headerClassName = clsx(
    hasSubtitle
      ? "flex items-start justify-between gap-2 px-0 pt-[calc((var(--height-toolbar)-1.5rem)/2)]"
      : "flex h-toolbar items-center justify-between gap-2 px-0 py-0",
    className,
  );
  const textStackClassName = clsx(
    "flex min-w-0 flex-1 flex-col",
    titleGap === "none" ? "gap-0" : "gap-1",
  );
  return (
    <div className={headerClassName}>
      <div className={textStackClassName}>
        {title ? (
          <div className="text-base font-medium text-token-text-primary">
            {title}
          </div>
        ) : null}
        {subtitle ? (
          <div className="text-base font-normal text-token-text-tertiary">
            {subtitle}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div className="flex items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}
function SettingsGroupContent({
  children,
  className,
}: SettingsGroupContentProps): JSX.Element {
  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>{children}</div>
  );
}
export const SettingsGroup = Object.assign(SettingsGroupRoot, {
  Header: SettingsGroupHeader,
  Content: SettingsGroupContent,
});

export function initSettingsGroupChunk(): void {}
