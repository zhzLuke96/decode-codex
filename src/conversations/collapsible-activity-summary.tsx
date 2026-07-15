// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Disclosure shell that shows a one-line activity summary and lazily reveals the
// detailed activity body with a height/opacity animation when expanded, plus the
// deferred summary-text crossfade (localConversation domain).
import * as React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  ToolActivityDisclosureHeader,
  ActivityDisclosureLayout,
  activityDisclosureTransition,
} from "../boundaries/onboarding-commons-externals.facade";

const SUMMARY_TRANSITION_DELAY_MS = 1000;

export type ActivitySummaryTransition = "static" | "immediate" | "deferred";

export type CollapsibleActivitySummaryProps = {
  summary: ReactNode;
  summaryKey?: string | null;
  summaryTransition?: ActivitySummaryTransition;
  shouldAnimateInitialCollapse?: boolean;
  canExpand?: boolean;
  defaultExpanded?: boolean;
  onExpand?: () => void;
  children?: ReactNode;
};

// rK: the collapsible summary + body disclosure.
export function CollapsibleActivitySummary({
  summary,
  summaryKey,
  summaryTransition = "static",
  shouldAnimateInitialCollapse,
  canExpand = true,
  defaultExpanded = false,
  onExpand,
  children,
}: CollapsibleActivitySummaryProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const [bodyMounted, setBodyMounted] = React.useState(
    (shouldAnimateInitialCollapse || defaultExpanded) && canExpand,
  );

  const header = canExpand ? (
    <ToolActivityDisclosureHeader
      disclosure={{
        expanded,
        onToggle: () => {
          if (expanded) {
            setExpanded(false);
            return;
          }
          if (bodyMounted) {
            onExpand?.();
            setExpanded(true);
            return;
          }
          onExpand?.();
          setBodyMounted(true);
          requestAnimationFrame(() => {
            setExpanded(true);
          });
        },
      }}
    >
      <ActivitySummaryText
        summary={summary}
        summaryKey={summaryKey}
        summaryTransition={summaryTransition}
        className="shrink overflow-hidden [mask-image:linear-gradient(to_right,black_calc(100%_-_0.25rem),transparent)] [mask-repeat:no-repeat] pr-1 group-hover/activity-header:text-token-foreground"
      />
    </ToolActivityDisclosureHeader>
  ) : (
    <ToolActivityDisclosureHeader>
      <ActivitySummaryText
        summary={summary}
        summaryKey={summaryKey}
        summaryTransition={summaryTransition}
      />
    </ToolActivityDisclosureHeader>
  );

  const body =
    canExpand && bodyMounted ? (
      <motion.div
        initial={false}
        animate={
          expanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={activityDisclosureTransition}
        style={{
          overflow: "hidden",
          pointerEvents: expanded ? "auto" : "none",
        }}
        onAnimationComplete={() => {
          if (!expanded) setBodyMounted(false);
        }}
      >
        {children}
      </motion.div>
    ) : null;

  return <ActivityDisclosureLayout header={header} body={body} />;
}

type ActivitySummaryTextProps = {
  summary: ReactNode;
  summaryKey?: string | null;
  summaryTransition?: ActivitySummaryTransition;
  className?: string;
};

// oat: the summary span, optionally wrapped in the crossfade.
export function ActivitySummaryText({
  summary,
  summaryKey,
  summaryTransition,
  className,
}: ActivitySummaryTextProps) {
  const spanClassName = clsx(
    "text-token-conversation-summary-trailing",
    "flex min-w-0 max-w-full items-center truncate",
    className,
  );
  const content =
    summaryKey == null || summaryTransition === "static" ? (
      summary
    ) : (
      <AnimatedActivitySummaryText
        summary={summary}
        summaryKey={summaryKey}
        summaryTransition={summaryTransition}
      />
    );
  return <span className={spanClassName}>{content}</span>;
}

type AnimatedActivitySummaryTextProps = {
  summary: ReactNode;
  summaryKey: string;
  summaryTransition: ActivitySummaryTransition;
};

// sat: crossfade the summary node when its key changes, debouncing deferred ones.
export function AnimatedActivitySummaryText({
  summary,
  summaryKey,
  summaryTransition,
}: AnimatedActivitySummaryTextProps) {
  const [displayed, setDisplayed] = React.useState<{
    key: string;
    node: ReactNode;
  }>(() => ({ key: summaryKey, node: summary }));
  const lastAppliedAtRef = React.useRef<number | null>(null);
  const pendingTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  React.useEffect(() => {
    const now = Date.now();
    lastAppliedAtRef.current ??= now;
    if (summaryKey === displayed.key) return;

    const next = { key: summaryKey, node: summary };
    const apply = () => {
      pendingTimeoutRef.current = null;
      lastAppliedAtRef.current = Date.now();
      setDisplayed(next);
    };

    if (summaryTransition === "immediate") {
      if (pendingTimeoutRef.current != null) {
        clearTimeout(pendingTimeoutRef.current);
        pendingTimeoutRef.current = null;
      }
      apply();
      return;
    }

    const remaining =
      SUMMARY_TRANSITION_DELAY_MS - (now - (lastAppliedAtRef.current ?? now));
    if (remaining <= 0) {
      apply();
      return;
    }

    pendingTimeoutRef.current = setTimeout(apply, remaining);
    return () => {
      if (pendingTimeoutRef.current != null) {
        clearTimeout(pendingTimeoutRef.current);
        pendingTimeoutRef.current = null;
      }
    };
  }, [summary, summaryKey, summaryTransition, displayed.key]);

  return (
    <span className="flex min-h-4 max-w-full min-w-0 items-center truncate">
      {summaryTransition === "immediate" || displayed.key === summaryKey
        ? summary
        : displayed.node}
    </span>
  );
}
