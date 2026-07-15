// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Appgen Library card primitives and shared item action controls.

import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { ChatBubblesIcon } from "../../icons/chat-bubbles-icon";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import { Tooltip, initTooltipRuntimeChunk } from "../../ui/tooltip-b";
import { classNames } from "../../utils/class-names";
import type {
  AppgenLibraryItemFooterProps,
  AppgenLibraryItemMetaProps,
  AppgenLibraryItemShellProps,
  AppgenLibraryItemTextProps,
  AppgenLibraryThumbnailFrameProps,
  ContinueLibraryItemChatButtonProps,
} from "./types";

export const APPGEN_LIBRARY_ITEM_OVERLAY_BUTTON_CLASS_NAME =
  "absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset";

export function AppgenLibraryItemShell({
  className,
  viewMode,
  ...shellProps
}: AppgenLibraryItemShellProps) {
  const layoutClassName =
    viewMode === "list"
      ? "col-span-full grid-cols-subgrid p-3"
      : "grid-rows-[auto_auto] border border-token-border-light bg-token-bg-fog";

  return (
    <div
      className={classNames(
        "relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-token-list-hover-background/50",
        layoutClassName,
        className,
      )}
      {...shellProps}
    />
  );
}

export function AppgenLibraryThumbnailFrame({
  children,
  className,
  viewMode,
  ...frameProps
}: AppgenLibraryThumbnailFrameProps) {
  const sizeClassName =
    viewMode === "list" ? "h-[50px] w-20" : "aspect-square w-full";

  return (
    <div
      className={classNames(
        "relative shrink-0 overflow-hidden",
        sizeClassName,
        className,
      )}
      {...frameProps}
    >
      {children}
    </div>
  );
}

export function AppgenLibraryItemTitle({
  className,
  viewMode,
  ...titleProps
}: AppgenLibraryItemTextProps) {
  const sizeClassName =
    viewMode === "list" ? "text-sm leading-5" : "text-xs leading-[18px]";

  return (
    <div
      className={classNames(
        "truncate font-medium text-token-foreground",
        sizeClassName,
        className,
      )}
      {...titleProps}
    />
  );
}

export function AppgenLibraryItemSubtitle({
  className,
  ...subtitleProps
}: AppgenLibraryItemMetaProps) {
  return (
    <div
      className={classNames(
        "text-xs leading-[18px] text-token-text-secondary",
        className,
      )}
      {...subtitleProps}
    />
  );
}

export function AppgenLibraryItemFooter({
  actions,
  children,
}: AppgenLibraryItemFooterProps) {
  return (
    <div className="pointer-events-none relative z-10 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-token-border-light">
      {children}
      <div className="pointer-events-auto relative z-10 flex items-center gap-1 pr-2">
        {actions}
      </div>
    </div>
  );
}

export function ContinueLibraryItemChatButton({
  disabled = false,
  itemName,
  onContinue,
  viewMode,
}: ContinueLibraryItemChatButtonProps) {
  const intl = useIntl();
  const tooltipContent = (
    <FormattedMessage
      id="appgenPage.libraryItem.continueChat.tooltip"
      defaultMessage="Continue chat"
      description="Tooltip for continuing work on a Library item in chat"
    />
  );
  const ariaLabel = intl.formatMessage(
    {
      id: "appgenPage.libraryItem.continueChat",
      defaultMessage: "Continue chat for {itemName}",
      description:
        "Accessible label for continuing work on a Library item in chat",
    },
    {
      itemName,
    },
  );

  return (
    <Tooltip tooltipContent={tooltipContent}>
      <Button
        aria-label={ariaLabel}
        color={viewMode === "grid" ? "ghost" : "ghostTertiary"}
        disabled={disabled}
        size={viewMode === "grid" ? "toolbar" : "composer"}
        uniform={true}
        onClick={onContinue}
      >
        <ChatBubblesIcon aria-hidden={true} className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

export function AppgenLibraryItemMeta({
  className,
  hideWhenCompact = false,
  ...metaProps
}: AppgenLibraryItemMetaProps) {
  return (
    <div
      className={classNames(
        "pl-4 text-xs leading-[18px] text-token-text-secondary",
        hideWhenCompact && "[@container_(max-width:620px)]:hidden",
        className,
      )}
      {...metaProps}
    />
  );
}

export function AppgenLibraryItemActionsContainer({
  className,
  ...containerProps
}: AppgenLibraryItemMetaProps) {
  return (
    <div
      className={classNames(
        "pointer-events-auto relative z-10 flex items-center gap-2 pl-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:pl-2",
        className,
      )}
      {...containerProps}
    />
  );
}

export function initAppgenLibraryItemCardPrimitivesChunk(): void {
  initButtonComponentPrimitives();
  initTooltipRuntimeChunk();
}
