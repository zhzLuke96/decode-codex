// Restored from ref/webview/assets/action-popover-primitives-BriXOYq-.js
// action-popover-primitives-BriXOYq- chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
type ActionPopoverExpandedProps = {
  children: ReactNode;
  className?: string;
  expanded: boolean;
  scrollClassName?: string;
};
const expandedVariants = {
  open: {
    height: "auto",
    opacity: 1,
  },
  collapsed: {
    height: 0,
    opacity: 0,
  },
};
const expandedTransition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};
const expandedStyle = {
  overflow: "hidden",
} as const;
export function Expanded({
  expanded,
  children,
  className,
  scrollClassName,
}: ActionPopoverExpandedProps) {
  return (
    <motion.div
      initial={false}
      animate={expanded ? "open" : "collapsed"}
      variants={expandedVariants}
      transition={expandedTransition}
      style={expandedStyle}
      className={className}
    >
      <div
        className={clsx(
          "vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]",
          scrollClassName,
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
