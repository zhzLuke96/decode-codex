// Restored from ref/webview/assets/settings-content-layout-B9ZpDhiD.js
// settings-content-layout-B9ZpDhiD chunk restored from the Codex webview bundle.
import clsx from "clsx";
import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";

import { once } from "../runtime/commonjs-interop";
type SettingsContentNavigationTarget = {
  navigationKey: unknown;
  targetId: string;
};
type SettingsContentNavigationTargetProviderProps = {
  children: ReactNode;
  navigationKey: unknown;
  targetId?: string | null;
};
type SettingsContentLayoutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  action?: ReactNode;
  actionPlacement?: "header" | "subtitle";
  backSlot?: ReactNode;
  children?: ReactNode;
  contentClassName?: string;
  fullWidth?: boolean;
  ref?: Ref<HTMLDivElement>;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  title?: ReactNode;
  titleStackClassName?: string;
};
const SettingsContentNavigationTargetContext =
  createContext<SettingsContentNavigationTarget | null>(null);
export function SettingsContentNavigationTargetProvider({
  children,
  navigationKey,
  targetId,
}: SettingsContentNavigationTargetProviderProps) {
  const value = useMemo(
    () =>
      targetId == null
        ? null
        : {
            navigationKey,
            targetId,
          },
    [navigationKey, targetId],
  );
  return (
    <SettingsContentNavigationTargetContext.Provider value={value}>
      {children}
    </SettingsContentNavigationTargetContext.Provider>
  );
}
export function SettingsContentLayout({
  action,
  actionPlacement = "header",
  backSlot,
  children,
  className,
  contentClassName,
  fullWidth = false,
  ref,
  subtitle,
  subtitleClassName,
  title,
  titleStackClassName,
  ...restProps
}: SettingsContentLayoutProps) {
  const navigationTarget = useContext(SettingsContentNavigationTargetContext);
  const targetId = navigationTarget?.targetId ?? null;
  const navigationKey = navigationTarget?.navigationKey ?? null;
  useLayoutEffect(() => {
    if (targetId != null) {
      document.getElementById(targetId)?.scrollIntoView?.({
        block: "center",
      });
    }
  }, [navigationKey, targetId]);
  const titleElement = title ? (
    <div className="electron:heading-lg heading-base truncate">{title}</div>
  ) : null;
  const subtitleElement = subtitle ? (
    <div
      className={clsx(
        "text-base text-token-text-secondary",
        subtitleClassName ?? "truncate",
      )}
    >
      {subtitle}
    </div>
  ) : null;
  const header =
    !title && !subtitle && !action ? null : actionPlacement === "subtitle" &&
      subtitleElement ? (
      <div className="pb-panel">
        <div
          className={clsx(
            "flex min-w-0 flex-col",
            titleStackClassName ?? "gap-1.5 pb-panel",
          )}
        >
          {titleElement}
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">{subtitleElement}</div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-between gap-3 pb-panel">
        <div
          className={clsx(
            "flex min-w-0 flex-1 flex-col",
            titleStackClassName ?? "gap-1.5 pb-panel",
          )}
        >
          {titleElement}
          {subtitleElement}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    );
  const constrainedWidthClassName = fullWidth
    ? null
    : "max-w-2xl electron:min-w-[calc(320px*var(--codex-window-zoom))]";
  return (
    <div
      ref={ref}
      className={clsx("main-surface flex h-full min-h-0 flex-col", className)}
      {...restProps}
    >
      <div className="draggable flex items-center px-panel electron:h-toolbar extension:h-toolbar-sm">
        {backSlot}
      </div>
      <div className="scrollbar-stable flex-1 overflow-y-auto p-panel">
        <div
          className={clsx(
            "mx-auto flex w-full flex-col",
            constrainedWidthClassName,
            contentClassName,
          )}
        >
          {header}
          <div className="flex flex-col gap-[var(--padding-panel)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export const initSettingsContentLayoutChunk = once(() => {});
