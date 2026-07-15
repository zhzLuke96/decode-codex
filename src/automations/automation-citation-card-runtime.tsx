// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact citation-card primitives used by scheduled-task citations in chat.
import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

type CitationCardFrameProps = {
  as?: "div" | "span";
  children?: ReactNode;
  className?: string;
};

type CitationCardBodyProps = {
  icon?: ReactNode;
  subtitle?: ReactNode;
  title?: ReactNode;
  trailing?: ReactNode;
};

type CitationActionLabelProps = {
  label?: ReactNode;
};

export function CitationCardFrame({
  as = "div",
  children,
  className,
}: CitationCardFrameProps) {
  const Component = as as ElementType;
  return (
    <Component
      className={clsx(
        "block overflow-hidden rounded-lg border border-token-border bg-token-bg-primary text-token-foreground",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function CitationCardBody({
  icon,
  subtitle,
  title,
  trailing,
}: CitationCardBodyProps) {
  return (
    <span className="flex min-w-0 items-center gap-3 px-3 py-2.5">
      {icon}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-size-chat font-medium text-token-foreground">
          {title}
        </span>
        {subtitle == null ? null : (
          <span className="truncate text-size-chat-sm text-token-text-secondary">
            {subtitle}
          </span>
        )}
      </span>
      {trailing}
    </span>
  );
}

export function CitationActionLabel({ label }: CitationActionLabelProps) {
  return (
    <span className="shrink-0 rounded-md border border-token-border px-2 py-1 text-size-chat-sm font-medium text-token-text-secondary">
      {label}
    </span>
  );
}
