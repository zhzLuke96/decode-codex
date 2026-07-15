// Restored from ref/webview/assets/large-empty-state-DKCyYtZB.js
// large-empty-state-DKCyYtZB chunk restored from the Codex webview bundle.
import clsx from "clsx";
import type { ReactNode } from "react";
type LargeEmptyStateProps = {
  actions?: ReactNode;
  className?: string;
  contentClassName?: string;
  description?: ReactNode;
  illustration?: ReactNode;
  illustrationSize?: "default" | "hero";
  spacing?: "default" | "compact";
  title?: ReactNode;
  titleSize?: "default" | "lg";
  tone?: "default" | "faded";
};

export function initLargeEmptyStateChunk(): void {}

export function LargeEmptyState({
  className,
  contentClassName,
  title,
  description,
  actions,
  illustration,
  illustrationSize = "default",
  spacing = "default",
  titleSize = "default",
  tone = "default",
}: LargeEmptyStateProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-center px-3 py-6",
        className,
      )}
    >
      <div
        className={clsx(
          "flex w-full max-w-xl flex-col items-center justify-center text-center",
          spacing === "compact" ? "gap-2" : "gap-6",
          tone === "faded" && "opacity-60",
          contentClassName,
        )}
      >
        {illustration ? (
          <div
            className={clsx(
              "pointer-events-none text-token-input-placeholder-foreground",
              illustrationSize === "hero" &&
                "relative h-32 w-[30rem] max-w-full overflow-visible",
            )}
          >
            {illustrationSize === "hero" ? (
              <div className="absolute top-1/2 left-1/2 size-[30rem] max-h-[55vh] max-w-full -translate-x-1/2 -translate-y-1/2">
                {illustration}
              </div>
            ) : (
              illustration
            )}
          </div>
        ) : null}

        {title != null || description != null ? (
          <div className="flex flex-col items-center gap-2">
            {title == null ? null : (
              <div
                className={clsx(
                  "font-medium",
                  titleSize === "lg" ? "text-lg" : "text-base",
                )}
              >
                {title}
              </div>
            )}
            {description ? (
              <div className="text-base text-token-description-foreground">
                {description}
              </div>
            ) : null}
          </div>
        ) : null}

        {actions ? (
          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
