// Restored from ref/webview/assets/slash-command-item-CjEpy4Fo.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~gm3qqodb-ChZFpJan.js
// Shared slash-command list item UI plus git-root lookup helpers.
import React from "react";
import clsx from "clsx";
import { Tooltip } from "../tooltip-b";
import { Command, useCommandState } from "../../vendor/cmdk";
import {
  resolveGitRootForOriginUrl,
  initSlashCommandGitRootRuntime,
  useEnvironmentGitRoot,
  useGitRootForDirectory,
  useGitRootForOriginUrl,
} from "./git-root";
import {
  highlightTextSegments,
  initHighlightTextSegmentsChunk,
} from "./highlight";
import type { OverflowTooltipTextProps, SlashCommandItemProps } from "./types";
function SlashCommandItem({
  title,
  description,
  leftAccessory,
  LeftIcon,
  RightIcon,
  titleTooltipContent,
  descriptionTooltipContent,
  descriptionClassName,
  highlightMode,
  secondaryContent,
  tooltipDelayDuration,
  rightAccessory,
  ...rest
}: SlashCommandItemProps) {
  const itemRef = React.useRef<HTMLDivElement | null>(null);
  const displayTitle = truncateCommandText(title);
  const displayDescription =
    description == null ? undefined : truncateCommandText(description);
  const tooltipTitle = truncateTooltipContent(titleTooltipContent);
  const tooltipDescription = truncateTooltipContent(descriptionTooltipContent);
  const search = useCommandState((state) => state.search);
  const selectedValue = useCommandState((state) => state.value);
  const titleSegments = highlightTextSegments(
    displayTitle,
    search,
    highlightMode,
  );
  const hasHighlightedText = titleSegments.some((segment) => segment.isMatch);
  React.useEffect(() => {
    if (itemRef.current?.dataset.selected === "true") {
      itemRef.current.scrollIntoView({
        block: "nearest",
      });
    }
  }, [selectedValue]);
  const contentAlignment =
    secondaryContent == null ? "items-center" : "items-start";
  const leftContent =
    leftAccessory ??
    (LeftIcon ? <LeftIcon className="icon-xs shrink-0" /> : null);
  const titleWidthClass = description
    ? descriptionClassName
      ? "min-w-0 flex-1"
      : "max-w-[60%] flex-none"
    : "min-w-0 flex-1";
  const titleContent = titleSegments.map((segment, index) => (
    <span
      key={index}
      className={clsx(
        !segment.isMatch &&
          hasHighlightedText &&
          "text-token-description-foreground",
      )}
    >
      {segment.text}
    </span>
  ));
  const titleNode = (
    <OverflowTooltipText
      tooltipContent={tooltipTitle}
      delayDuration={tooltipDelayDuration}
      className={clsx("truncate", titleWidthClass)}
    >
      {titleContent}
    </OverflowTooltipText>
  );
  const rightContent =
    description || rightAccessory || RightIcon ? (
      <div className="ml-auto flex min-w-0 items-center gap-2">
        {description ? (
          <OverflowTooltipText
            tooltipContent={tooltipDescription}
            delayDuration={tooltipDelayDuration}
            className={clsx(
              "truncate text-sm text-token-description-foreground",
              descriptionClassName ?? "min-w-0 flex-1",
            )}
          >
            {displayDescription}
          </OverflowTooltipText>
        ) : null}
        {rightAccessory ? (
          <span className="shrink-0 opacity-80">{rightAccessory}</span>
        ) : null}
        {RightIcon ? <RightIcon className="icon-xs shrink-0" /> : null}
      </div>
    ) : null;
  return (
    <Command.Item ref={itemRef} {...rest}>
      <div className={clsx("flex w-full min-w-0 gap-2", contentAlignment)}>
        {leftContent}
        <div className="min-w-0 flex-1">
          <div className="flex w-full min-w-0 items-center gap-2">
            {titleNode}
            {rightContent}
          </div>
          {secondaryContent == null ? null : (
            <div className="truncate pt-0.5 text-xs text-token-description-foreground">
              {secondaryContent}
            </div>
          )}
        </div>
      </div>
    </Command.Item>
  );
}
function OverflowTooltipText({
  children,
  className,
  tooltipContent,
  delayDuration,
}: OverflowTooltipTextProps) {
  const disabled = tooltipContent == null;
  const trigger = <div className={className}>{children}</div>;
  return (
    <Tooltip
      tooltipContent={tooltipContent}
      delayDuration={delayDuration}
      disabled={disabled}
      openWhen="trigger-overflows"
    >
      {trigger}
    </Tooltip>
  );
}
function truncateCommandText(text: string) {
  return text.length <= 100 ? text : `${text.slice(0, 99).trimEnd()}…`;
}
function truncateTooltipContent(content: React.ReactNode) {
  return typeof content === "string" ? truncateCommandText(content) : content;
}

function initSlashCommandItemComponent(): void {}

export {
  useGitRootForDirectory,
  useGitRootForOriginUrl,
  highlightTextSegments,
  initHighlightTextSegmentsChunk,
  useEnvironmentGitRoot,
  resolveGitRootForOriginUrl,
  initSlashCommandGitRootRuntime,
  initSlashCommandItemComponent,
  SlashCommandItem,
};
