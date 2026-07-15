// Restored from ref/webview/assets/subscription-update-plan-D2uMfgET.js
// subscription-update-plan-D2uMfgET chunk restored from the Codex webview bundle.
import { useId } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { PlanBillingPeriodSegmentedControlProps } from "./types";
export function PlanBillingPeriodSegmentedControl({
  ariaLabel,
  className,
  options,
  selectedId,
  onSelect,
}: PlanBillingPeriodSegmentedControlProps) {
  const selectedBackgroundLayoutId = useId();
  return (
    <div
      className={clsx(
        "bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1",
        className,
      )}
      role="group"
      aria-label={ariaLabel}
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      {options.map((option) => {
        const selected = option.id === selectedId;
        return (
          <button
            key={option.id}
            className={clsx(
              "cursor-interaction relative isolate min-w-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-transform duration-150 active:scale-[0.98]",
              selected ? "text-black" : "text-token-text-secondary",
            )}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={selected}
            onClick={() => {
              onSelect(option.id);
            }}
          >
            {selected ? (
              <motion.span
                layoutId={selectedBackgroundLayoutId}
                className="absolute inset-0 -z-10 rounded-xl bg-white shadow-sm"
                transition={{
                  type: "spring",
                  duration: 0.28,
                  bounce: 0,
                }}
              />
            ) : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
