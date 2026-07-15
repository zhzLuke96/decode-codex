// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Inline app mention pill used in the Sites/Appgen announcement hero.
import type { CSSProperties, ReactElement } from "react";
import clsx from "clsx";
import type { AppMentionPillProps } from "./appgen-announcement-types";

export function AppMentionPill({
  brandColor,
  className,
  dataAttributes,
  icon,
  iconClassName,
  interactive = false,
  style,
  text,
  textClassName,
  tooltipText,
}: AppMentionPillProps): ReactElement {
  const pill = (
    <span
      className={clsx(
        "contain-inline-size inline-flex max-w-full items-center gap-1 rounded-md bg-token-bg-tertiary px-1.5 py-0.5 align-middle text-sm leading-5 text-token-text-primary",
        interactive && "cursor-interaction hover:bg-token-bg-quaternary",
        className,
      )}
      style={{
        ...style,
        ...(brandColor == null
          ? null
          : ({
              "--mention-brand-color": brandColor,
            } as CSSProperties)),
      }}
      {...dataAttributes}
    >
      {icon == null ? null : (
        <span className={clsx("icon-xs shrink-0", iconClassName)}>{icon}</span>
      )}
      <span className={clsx("min-w-0 truncate", textClassName)}>{text}</span>
    </span>
  );

  if (tooltipText == null) return pill;
  return <span title={String(tooltipText)}>{pill}</span>;
}

export function initAppMentionPillRuntime(): void {}
