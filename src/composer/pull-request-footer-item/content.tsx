// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js
// Shared content layout for pull request composer footer controls.
import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import clsx from "clsx";

import { pullRequestFooterClasses } from "./classes";
import { PullRequestFooterIndicator } from "./indicator";
import { PullRequestFooterLabel } from "./label";
import type {
  ComposerFooterControlCollapse,
  ComposerFooterControlIndicator,
} from "../project-selector/types";

export interface PullRequestFooterItemContentProps {
  categoryLabel?: ReactNode;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  indicator: ComposerFooterControlIndicator;
  value?: ReactNode;
  valueClassName?: string;
}

export function PullRequestFooterItemContent({
  categoryLabel,
  collapse,
  icon,
  indicator,
  value,
  valueClassName,
}: PullRequestFooterItemContentProps) {
  const chevronSizeClassName = useGateValue("2700454473")
    ? "icon-xs"
    : "icon-2xs";
  const [valueContainerWidth, setValueContainerWidth] = useState<number | null>(
    null,
  );
  const [valueContentWidth, setValueContentWidth] = useState<number | null>(
    null,
  );
  const measureValueContainer = useCallback(
    (element: HTMLSpanElement | null) => {
      if (element != null) {
        setValueContainerWidth(element.clientWidth);
      }
    },
    [],
  );
  const measureValueContent = useCallback((element: HTMLSpanElement | null) => {
    if (element != null) {
      setValueContentWidth(element.scrollWidth);
    }
  }, []);
  const valueOverflows =
    valueContainerWidth != null &&
    valueContentWidth != null &&
    valueContentWidth > valueContainerWidth;
  const iconElement =
    icon == null ? null : <span className="inline-flex shrink-0">{icon}</span>;
  const textElement =
    categoryLabel != null || value != null ? (
      <span
        className={clsx(
          pullRequestFooterClasses.externalFooterItemText,
          categoryLabel != null &&
            pullRequestFooterClasses.externalFooterItemTextWithCategoryLabel,
          "inline-flex min-w-0 items-baseline gap-1 text-left",
        )}
      >
        {categoryLabel == null ? null : (
          <span
            className={clsx(
              pullRequestFooterClasses.externalFooterItemCategoryLabel,
              "hidden shrink-0 font-medium text-token-foreground",
            )}
          >
            {categoryLabel}
          </span>
        )}
        <PullRequestFooterLabel
          ref={measureValueContainer}
          className={clsx(
            pullRequestFooterClasses.externalFooterItemValue,
            "min-w-0 truncate font-normal whitespace-nowrap",
            valueClassName,
          )}
          collapse={collapse}
        >
          <span
            ref={measureValueContent}
            className={clsx(
              pullRequestFooterClasses.externalFooterItemValueContent,
              "block max-w-full min-w-0 truncate",
              valueOverflows &&
                pullRequestFooterClasses.externalFooterItemValueOverflowing,
            )}
            data-tooltip-overflow-target={true}
          >
            {value}
          </span>
        </PullRequestFooterLabel>
      </span>
    ) : null;

  return (
    <>
      {iconElement}
      {textElement}
      <PullRequestFooterIndicator
        chevronSizeClassName={chevronSizeClassName}
        indicator={indicator}
      />
    </>
  );
}
