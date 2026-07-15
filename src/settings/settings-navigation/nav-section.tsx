// Restored from ref/webview/assets/settings-back-route-BfYwS6rz.js
// settings-back-route-BfYwS6rz chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../utils/animations";
export interface SettingsNavSectionProps {
  children: ReactNode;
  className?: string;
  collapsed?: boolean | null;
  title?: ReactNode;
  titleActions?: ReactNode;
  titleActionsOnHover?: boolean;
  titleClassName?: string;
  titleRowClassName?: string;
  titleTrailing?: ReactNode;
}
export function SettingsNavSection({
  children,
  className,
  collapsed,
  title,
  titleActions,
  titleActionsOnHover = false,
  titleClassName,
  titleRowClassName,
  titleTrailing,
}: SettingsNavSectionProps) {
  const sectionClassName = clsx(
    "flex flex-col",
    collapsed == null && "gap-1",
    className,
  );
  const titleRow =
    title == null ? null : (
      <div
        className={clsx(
          "group/nav-section-title flex items-center justify-between gap-2",
          titleRowClassName ?? "pr-0.5 pl-2",
        )}
      >
        <div
          className={clsx(
            "min-w-0 flex-1",
            titleClassName ??
              "text-base text-token-input-placeholder-foreground opacity-75",
          )}
        >
          {title}
        </div>
        {titleActions == null && titleTrailing == null ? null : (
          <div className="flex shrink-0 items-center gap-1">
            {titleActions == null ? null : (
              <div
                className={clsx(
                  "shrink-0",
                  titleActionsOnHover &&
                    "pointer-events-none opacity-0 group-focus-within/nav-section-title:pointer-events-auto group-focus-within/nav-section-title:opacity-100 group-hover/nav-section-title:pointer-events-auto group-hover/nav-section-title:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100",
                )}
              >
                {titleActions}
              </div>
            )}
            {titleTrailing == null ? null : (
              <div className="shrink-0">{titleTrailing}</div>
            )}
          </div>
        )}
      </div>
    );
  const content =
    collapsed == null ? (
      <div className="flex flex-col gap-px">{children}</div>
    ) : (
      <AnimatePresence initial={false}>
        {collapsed ? null : (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transitionEnd: {
                overflow: "visible",
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              overflow: "hidden",
            }}
            transition={animations}
            className="overflow-hidden"
          >
            <div className={clsx("flex flex-col gap-px", title && "pt-1")}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  return (
    <div className={sectionClassName}>
      {titleRow}
      {content}
    </div>
  );
}
